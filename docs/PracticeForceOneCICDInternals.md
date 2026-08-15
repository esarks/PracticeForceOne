---
title: "PracticeForceOneCICDInternals"
---

# PracticeForceOne — CI/CD Internals (Deep-Dive: exactly what the deploy does and how)

**Owner:** AgentCICD (retired 2026-07-07; CI/CD now owned by AgentMR7 as secondary platform duty) · **Last updated:** 2026-06-23 · **Last reviewed: 2026-07-24** · **Authoritative source:** the live files under `jac2024/app/com/claimsprocessing/` (`pipeline/`, `docker/`, `bin/`).
**Related:** [PracticeForceOneCICDMRTable](<PracticeForceOneCICDMRTable.md>) (the task table + status) · [PracticeForceOneCICDConverstion](<PracticeForceOneCICDConverstion.md>) (the *why* / architecture rationale). **This** doc is the *what + how*, step by step.

> **Secrets note:** this doc names env vars and secret *names* only. Actual values (DB host/IP, SMTP address, passwords) live in the pipeline file and Google **Secret Manager** — never reproduced here (founder rule: no creds/connection details in docs/wiki).

---

## 0. The one-paragraph model

A production deploy is a **single Google Cloud Build run** driven by `pipeline/cloudbuild-deploy.yaml`. It is **hermetic** — every artifact is compiled *from source inside a Linux container* (`pfo-toolchain:v2`), not copied from anyone's PC — and it is a **safe canary**: the new image is deployed to Cloud Run **with zero traffic** under a `cand` tag, the **full `uat-characterize all` gate** runs against that no-traffic candidate, and traffic is flipped to it **only if the gate is green**. A red gate fails the build *before any traffic moves*, so a bad build can never serve users. The whole run is serialized by a **GCS deploy lock**. Production (`claimsprocessing-api`) was cut over to this path on 2026-06-14/15; the old PC path (`enqueue-deploy.ps1` → `ci-deploy.ps1`) is break-glass only.

---

## 1. How a deploy is triggered

It is **manual submit** (there is **no `git push` auto-trigger** wired yet — that's open row C2.3):

```bash
cd jac2024
gcloud builds submit \
  --config app/com/claimsprocessing/pipeline/cloudbuild-deploy.yaml \
  --region=us-central1 \
  --substitutions=_RUN_SERVICE=claimsprocessing-api \
  .
```

- **Build context = the `jac2024` tree** (the trailing `.`), minus `.gcloudignore` exclusions (bundled JDKs, old `jacBuild8/13/23`, `build/`, `temp*`, `.deploy/`, IDE files, large reference dirs, local CSV/docx/xlsx/PNG). The repo's `.git` lives at the *parent* repo root and is **not** in the `jac2024` upload — which is why in-container `git rev-list` finds nothing (see §6).
- **Substitutions** (defaults in the file):
  - `_RUN_SERVICE` — target Cloud Run service. **Default `claimsprocessing-api-shadow`** (so a bare run is harmless); pass `=claimsprocessing-api` to target **production**.
  - `_REGION` = `us-central1`
  - `_TOOLCHAIN` = `…/pfo-toolchain:v2` (the build image used by most steps)
  - `_IMAGE` = `…/claimsprocessing-server` (the runtime image repo)
  - `_GIT_COMMIT`, `_BUILD_NUMBER` — **provenance pass-throughs**: the submitter (e.g. the PC `ci-deploy.ps1`) passes the real commit SHA + monotonic build number so `/api/health` reports them; empty → in-container fallback (see §6).

---

## 2. The build image: `pfo-toolchain:v2`

Source: `pipeline/toolchain/Dockerfile`. It is **just a toolchain** (the repo is not baked in — it arrives as the build context).
- **Base:** `mcr.microsoft.com/powershell:lts-ubuntu-22.04` (pwsh-core on Ubuntu).
- **Installed:** Temurin **JDK 24** (Adoptium — matches the bundled Windows `jacBuild24/jdk-24`), Google Cloud SDK (`gcloud`), `git`, `curl`, `postgresql-client`.
- **`JAVA_TOOL_OPTIONS=-Djava.awt.headless=true`** — forces headless so any stray AWT call (the old reverse-merge dialog footgun) fails loud instead of hanging the build.

Nearly every step uses this image as its `name:` and runs a `pwsh` (or `bash`) entrypoint.

---

## 3. The steps (in order)

Cloud Build runs steps **sequentially**; a non-zero exit on any step **fails the build** and skips the rest (which is why a mid-run failure can leak the lock — see §10). There are 11 *substantive* steps below, interleaved with 3 short **`heartbeat`** steps (`hb-after-generate`, `hb-after-docker`, `hb-after-gate`, called out as ②a/⑦a/⑨a) that re-stamp the deploy-lock's `heartbeatUtc` after each long-running step so a healthy long build never trips the 40-min stale-takeover (founder-reported concurrent-deploy fix, 2026-06-22).

### ① `lock-acquire` → `pipeline/scripts/deploy-lock.ps1 -Action acquire -Holder cloud -WaitMinutes 45 -StaleMinutes 40`
Acquires the **GCS deploy mutex**: a single object `gs://claimsprocessing-deploy-lock/deploy.lock` holding `{holder, host, startedUtc, heartbeatUtc}`. Acquisition is **atomic** via `gcloud storage cp … --if-generation-match=0` (succeeds only if the object doesn't exist). If it already exists, the script reads the holder and compares `heartbeatUtc` against the **stale threshold (`-StaleMinutes 40`)**: older → **take over loudly**; fresh → **wait up to `-WaitMinutes 45`** for the lock to clear, then **exit 10** (still held → the build fails). `WaitMinutes(45) > StaleMinutes(40)` so a queued waiter persists long enough to take over an orphaned lock. *(The script's bare default is `StaleMinutes=90, WaitMinutes=0` (fail-fast); the pipeline overrides both — see the `cloudbuild-deploy.yaml` args.)* This serializes deploys so two can't race the same service. **Note:** a real deploy heartbeats the lock after each long step (see ②a/⑦a/⑨a below), so a healthy build of any length never goes stale, while a truly dead build still gets taken over after 40 min.

### ② `generate` → `pipeline/scripts/generate-hermetic.ps1 -Jac2024 /workspace`
Runs the **JAC code generator** on Linux (no `Set2Job.bat`): builds the classpath as `jacBuild24/classes` **first** (so the jac2026.1 generator wins) + every jar under `jacBuild24/lib`, then invokes the JAC engine to execute `data/RunMakeAll.jrun`. This regenerates the data layer — the **~96 CRUD `.java`** files — into `/workspace/classes/com/claimsprocessing/data/`. **Acceptance gates (fail the build):** ≥~90 Cruds emitted, **all "new-format"** (each contains `JacErrorPolicy`/`setGenerationDefault` — the jac2026.1 STRICT baseline), and **zero blank-typed getters** (no `public␣␣get…` untyped accessors). This is the proof the *repo*, not a PC, defines the generated layer.

### ②a `hb-after-generate` → `deploy-lock.ps1 -Action heartbeat -Holder cloud`
Re-stamps the lock's `heartbeatUtc` after the ~18-min `generate` (the longest single step). Without this the heartbeat froze at acquire time and a build outlasting 40 min got its lock taken over by a waiting build → two concurrent deploys.

### ③ `phase0` → `bin/phase0.ps1 -ClaimsProcessingHome /workspace/app/com/claimsprocessing`
Compiles the **strict-JAC support scripts** (util / EDI / AI / route modules — *not* the router) into `/workspace/classes`. It first **pre-compiles `JacUidUpdateHelper`** (generated CRUDs reference it), runs the **generated-data overlay** compile (the data classes), packs a **dependency jar** (jacBuild24-classes-first so the typed JEO/CRUD accessors resolve), then batch-compiles all stage scripts. Cross-platform: on Linux it uses the container's `javac` and `:` classpath separator (byte-identical behavior on Windows PS 5.1, so the legacy path is unaffected). **Every new `util/*.script` route must be in phase0's stage list** or it's silently omitted from the image.

### ④ `compile-router` → `pipeline/scripts/compile-router-hermetic.ps1 -Jac2024 /workspace`
Compiles **`DatabaseInit`** then **`ClaimsProcessingRouter`** with the JAC compiler. Classpath puts `jacBuild24/classes` first (typed accessors), then `/workspace/classes` (phase0 + generated output), then libs. `DatabaseInit` boots services + connects to the DB, so this step needs DB env (`DB_HOST/DB_NAME/DB_USER`, `JAC_ENV=staging`) + **`DB_PASSWORD` and `JWT_SECRET` via `secretEnv`**. Output: `…/model/DatabaseInit.class` and `…/server/ClaimsProcessingRouter.class` in `/workspace/classes`.

### ⑤ `version` (inline bash) — stamp provenance, no write-back
Computes `BUILD_NUMBER` = `_BUILD_NUMBER` substitution → else `git -C /workspace rev-list --count HEAD` → else **`0`** (cloud has no `.git`, so a bare submit stamps build `0`; the PC submitter passes the real number). Writes `/workspace/.image_tag` = `$SHORT_SHA` (or `$BUILD_ID` when SHORT_SHA is empty, which it is for `builds submit`) and `/workspace/.app_version` = **`3.1.0+build.<BN>.<TAG>`**, plus a `build-manifest.json` (buildNumber, gitCommit, contentHash) that ships in the image and surfaces at `/api/health` provenance. **Nothing is committed back** to git — this kills the old BUILD_NUMBER write-back race.

### ⑥ `cache-bust` → `bin/bust-cache.ps1`
Rewrites every `src="/ui/…?v=<token>"` / `href="/ui/…?v=<token>"` in the HTML to a **content SHA-256** (first 10 hex) of that asset, so browsers re-fetch changed assets and *only* changed ones. Idempotent (the token changes only when the asset's bytes change).

### ⑦ `docker-build` (inline bash + `docker/Dockerfile`)
Builds the runtime image and pushes two tags. `docker build --build-arg APP_VERSION=<from .app_version> -t _IMAGE:<TAG> -t _IMAGE:hermetic-latest -f docker/Dockerfile /workspace`, then `docker push` both. The image (see §7) **COPYs the hermetic `/workspace/classes` + the generated `jacBuild24/classes/.../data`** — i.e. exactly what steps ②–④ just built — which is the whole point: the image contains *in-pipeline-compiled* classes, not PC artifacts.

### ⑦a `hb-after-docker` → `deploy-lock.ps1 -Action heartbeat -Holder cloud`
Re-stamps `heartbeatUtc` after the `docker-build`/push step.

### ⑧ `deploy` — the **canary** (`gcloud run deploy`)
Deploys the new image to `_RUN_SERVICE` **with no live traffic**:
```
gcloud run deploy <_RUN_SERVICE> --image <_IMAGE>:<TAG> --region us-central1 --platform managed \
  --allow-unauthenticated --port 8080 --memory 2Gi --min-instances 0 --max-instances 20 \
  --no-traffic --tag cand \
  --update-env-vars "<full prod env set>" \
  --update-secrets  "DB_PASSWORD=…,JWT_SECRET=…,SMTP_PASSWORD=…,ANTHROPIC_API_KEY=…"
```
- **`--no-traffic --tag cand`** is the safety: the new revision is reachable only at its tagged URL (`https://cand---<service>…`); production users stay on the current revision.
- **`--memory 2Gi`** — bumped from 512Mi after audit-heavy DLP steps (e.g. G03) OOM-killed a 512MiB instance mid-run (the "stuck-run is OOM" finding); the candidate runs at 2Gi.
- **`--update-env-vars`** (not `--set-env-vars`) preserves any unspecified prod settings and sets the full env: `APP_VERSION, DB_HOST, DB_NAME, DB_USER, JAC_ENV, JAC_ERROR_MODE (=STRICT), RBAC_ENFORCEMENT_ENABLED, DB_POOL_ENABLED, MR3_RISK_TIER_REFINEMENT_ENABLED, SMTP_ENABLED, SMTP_HOST, SMTP_USERNAME, SMTP_FROM_ADDRESS, SMTP_FROM_NAME, PORTAL_TEST_MODE, ALLOWED_ORIGINS` (the last added by M7-2 CORS — the allowlist of origins permitted to call the API). *(History: a `--set-env-vars` subset here wiped 7 prod env vars and caused the 2026-06-14 login-500 outage — see §10. The `--update-env-vars` + full list is the fix.)*
- **`--update-secrets`** mounts the 4 runtime secrets from Secret Manager.

### ⑨ `gate` → `pipeline/scripts/gate-hermetic.ps1 -RunService … -Tag cand`
The **real gate**. It resolves the candidate's `cand---…` URL (from `gcloud run services describe`), points `UAT_BASE_URL` at it, and runs the **full `bin/uat-characterize.ps1 all` suite** against the no-traffic candidate, using `UAT_EMAIL/UAT_PASSWORD` + `UAT_ORG2_EMAIL/UAT_ORG2_PASSWORD` (so it also exercises **cross-tenant isolation**). Exit 0 = GREEN → proceed to promote. Non-zero = RED → **the build fails here, before any traffic shift** → production untouched, the candidate stays parked at its tag for inspection. This is the load-bearing safety property.

### ⑨a `hb-after-gate` → `deploy-lock.ps1 -Action heartbeat -Holder cloud`
Re-stamps `heartbeatUtc` after the full UAT gate (the second-longest step) so the lock stays fresh through the promote.

### ⑩ `promote` (inline bash) — the traffic flip
`gcloud run services update-traffic <_RUN_SERVICE> --region us-central1 --to-latest` — shifts **100% of traffic** to the just-gated candidate revision. This only runs because step ⑨ exited 0. *This is "the flip."*

### ⑪ `lock-release` → `deploy-lock.ps1 -Action release`
`gcloud storage rm` the lock object. Releases the mutex for the next deploy.

---

## 4. Secrets & identity

- **`availableSecrets`** (Secret Manager → build env) declares 6: `db-password`, `jwt-secret`, `uat-email`, `uat-password`, `uat-org2-email`, `uat-org2-password`. Cloud Build injects each only into the steps that name it in `secretEnv`:
  - `compile-router` → `DB_PASSWORD`, `JWT_SECRET` (to boot `DatabaseInit`)
  - `gate` → the 4 `UAT_*` (to run the characterization suite as two orgs)
- **Runtime secrets** (mounted onto the Cloud Run service by step ⑧'s `--update-secrets`): `db-password`, `jwt-secret`, `smtp-password`, `anthropic-api-key`.
- **Identity:** the build currently runs as the **Cloud Build default/compute service account** (so secret + bucket grants live there). A dedicated **`pfo-deploy`** SA exists but the build isn't yet pinned to run *as* it (open polish, MR row C2.1). No personal account is in the deploy path.

---

## 5. The build is hermetic — what that means concretely

Steps ②–④ regenerate and recompile **everything from the uploaded source** inside the container; step ⑦ packages *those* classes. So the running image is defined by the **repo state at submit time**, not by any machine's working tree. (The pre-cutover failure mode this fixes: the old Dockerfile copied locally-compiled classes off one laptop, so a stale tree could ship stale code — the build-1580 forensics.)

---

## 6. Versioning & provenance

- **Build number:** `_BUILD_NUMBER` (passed by the submitter) → git count → `0`. A bare cloud `builds submit` stamps **`build.0`** because `.git` isn't in the context; the PC `ci-deploy.ps1` passes the real monotonic number.
- **Image tag:** `SHORT_SHA` (empty for `builds submit`) → `BUILD_ID`. So submit-built images are tagged by Cloud Build ID; trigger-built (future C2.3) would be tagged by short SHA.
- **`/api/health` provenance** = the stamped `build-manifest.json` (buildNumber, gitCommit, contentHash, version `3.1.0+build.<BN>.<TAG>`). This is how you tell a **cloud** build (`3.1.0+build.0.<uuid>`) from a **legacy PC** build (`3.1.448+build.<N>.<sha>`).

---

## 7. The runtime image (`docker/Dockerfile`) anatomy

- **Base:** `eclipse-temurin:24-jdk-noble`.
- **COPYs:** `/app/classes` ← `classes/com/{claimsprocessing,esarks}` + `jacBuild24/classes/com/claimsprocessing/data` (the hermetic + generated classes); `/app/lib` ← all `jacBuild24/lib` jars (xerces/crimson/mic/jetty/postgresql/java-json/**pdf**/opensearch); `/app/phase1Classes`; `/app/scripts` ← the `.script` source (for any runtime JAC compilation); `license.xml` + `Properties.xml`.
- **`RUN find /app/classes -name '*.class' -exec touch {}`** — makes `.class` newer than `.script` so JAC doesn't recompile on boot.
- **Baked env:** `PORT=8080`, `JAC_ENV=prod` (Cloud Run `--update-env-vars` overrides), `APP_VERSION` (build-arg), `JAVA_OPTS=-Xms512m -Xmx1024m`.
- **Entrypoint (`CMD`):** `java $JAVA_OPTS -cp "<full classpath incl. pdf jars>" com.esarks.jac.jac -home /app -work /app/classes -scripts /app/scripts -classpath "…" -script com.claimsprocessing.server.ClaimsProcessingRouter -method execute` — i.e. the JAC engine boots the router as the HTTP server on 8080.
- The runtime classpath includes the PDF jars (`openhtmltopdf-*`, `pdfbox`, `fontbox`, `xmpbox`, `graphics2d`, …) — required by the AppealDrafter and test-results-export PDF features.

---

## 8. Why production is safe (the canary guarantee)

The order ⑧ deploy-no-traffic → ⑨ gate-against-`cand` → ⑩ promote-only-on-green means: **a build that fails the full UAT/login/tenant-isolation suite never receives a single production request.** The worst case of a bad build is a failed Cloud Build + a parked `cand` revision; live traffic stays on the last good revision. (Contrast the earlier health-only post-deploy gate, which let the env-wipe outage through because `/api/health` stays green even when *login* is broken — §10.)

---

## 9. Quick reference (operational)

| Action | Command |
|---|---|
| **Deploy to prod** | `cd jac2024; gcloud builds submit --config app/com/claimsprocessing/pipeline/cloudbuild-deploy.yaml --region=us-central1 --substitutions=_RUN_SERVICE=claimsprocessing-api .` |
| **Deploy to shadow (safe test)** | same, `--substitutions=_RUN_SERVICE=claimsprocessing-api-shadow` (or omit — it's the default) |
| **Roll back prod** | `gcloud run services update-traffic claimsprocessing-api --region us-central1 --to-revisions <good-rev>=100` |
| **List revisions (find a good one)** | `gcloud run revisions list --service claimsprocessing-api --region us-central1` |
| **Clear a leaked deploy lock** | `gcloud storage rm gs://claimsprocessing-deploy-lock/deploy.lock` (or wait the 40-min stale-takeover) |
| **What's live?** | `curl -s https://claimsprocessing-api-jlf45pqlma-uc.a.run.app/api/health` → `version`/`provenance` |
| **Watch a build** | Cloud Build console link printed by `builds submit`, region `us-central1` |

---

## 10. Failure modes, gaps & lessons (honest)

- **Leaked deploy lock.** If any step after ① fails, Cloud Build skips ⑪ and the GCS lock stays held. The next deploy's ① **waits up to 45 min** for it to clear and **takes it over after the 40-min stale threshold** (because the dead build stops heartbeating); a manual `gcloud storage rm` clears it immediately. *Recovery is in §9.*
- **The two deploy paths don't share one mutex (open: C2.3).** Cloud uses the **GCS** lock; the legacy PC `ci-deploy.ps1` uses a **local FS** lock (`.deploy/ci-deploy.lock`) + an "ongoing Cloud Builds" check. They are **not** mutually exclusive at the lock level — so a PC break-glass deploy and a cloud deploy could in principle race the same service. Mitigation today: the PC path is break-glass only; the real fix (wire the GCS lock into `ci-deploy.ps1`) is row C2.3.
- **The env-wipe outage (2026-06-14), now fixed.** The deploy step once used `--set-env-vars` with a 7-var subset, which **replaced** prod's env and dropped `DB_POOL_ENABLED` (+ SMTP_* + the risk-tier flag) → `login` and `register` returned HTTP 500. Detection: `/api/health` flips to the cloud stamp `3.1.0+build.0.<uuid>` *and* login 500. Fix: `--update-env-vars` with the **full** prod env (now in step ⑧), and the canary gate (⑨) tests **login**, not just health. *(cloud-cutover-env-wipe-incident in agent memory.)*
- **Build number is `0` on a bare cloud submit** (no `.git` in context). Pass `_BUILD_NUMBER`/`_GIT_COMMIT` for accurate provenance, or accept the `build.0.<buildid>` stamp.
- **No failure alerting yet (open: C2.5).** A red gate fails the build but pages no one — you learn from the Cloud Build console / `BUILD-STATUS.md`. Wiring an alert on a RED build is remaining polish.
- **`gate` writes test data to the DB** (it runs the full `uat-characterize` suite, incl. DLP-style registrations) against the candidate, which shares the staging DB — coordinate around any manual reseed.

---

## 11. File map

| Thing | Path |
|---|---|
| The pipeline | `app/com/claimsprocessing/pipeline/cloudbuild-deploy.yaml` |
| Toolchain image | `app/com/claimsprocessing/pipeline/toolchain/Dockerfile` (+ `PORTING-NOTES.md`) |
| Deploy lock (GCS mutex) | `app/com/claimsprocessing/pipeline/scripts/deploy-lock.ps1` |
| Hermetic generate | `app/com/claimsprocessing/pipeline/scripts/generate-hermetic.ps1` |
| Support compile | `app/com/claimsprocessing/bin/phase0.ps1` |
| Router compile | `app/com/claimsprocessing/pipeline/scripts/compile-router-hermetic.ps1` |
| Cache-bust | `app/com/claimsprocessing/bin/bust-cache.ps1` |
| Runtime image | `app/com/claimsprocessing/docker/Dockerfile` |
| The gate suite | `app/com/claimsprocessing/bin/uat-characterize.ps1` |
| Legacy PC path (break-glass) | `app/com/claimsprocessing/bin/enqueue-deploy.ps1` → `run-deploy-queue.ps1` → `ci-deploy.ps1` |
| Task table / status | [PracticeForceOneCICDMRTable](<PracticeForceOneCICDMRTable.md>) |
| Architecture rationale | [PracticeForceOneCICDConverstion](<PracticeForceOneCICDConverstion.md>) |

---

*Authored by AgentCICD (2026-06-17) from the live source. If a step changes, update the matching section here — this doc is meant to stay the exact map of what a deploy does.*

---

## Review Epilog — 2026-06-23

Reviewed 2026-06-23 as part of a full PracticeForceOne wiki truth-pass. Status: UPDATED.

- Verified the doc's step-by-step description against the live `pipeline/cloudbuild-deploy.yaml`, `deploy-lock.ps1`, and the runtime `docker/Dockerfile`: the hermetic-Cloud-Build / safe-canary model, the `--no-traffic --tag cand` then gate-then-promote order, the `--update-env-vars` full-env fix, and the legacy PC path being break-glass-only are all still accurate.
- Corrected drift to match the current pipeline: lock acquire now runs with `-WaitMinutes 45 -StaleMinutes 40` (was described as "default 90 min, exit 10 immediately"); documented the 3 new `heartbeat` steps (after generate/docker/gate) that keep a long healthy build from being taken over; deploy step memory bumped 512Mi -> 2Gi (DLP OOM fix); added `JAC_ERROR_MODE=STRICT` and the new `ALLOWED_ORIGINS` (M7-2 CORS allowlist) to the step-8 env list; changed "eleven steps" framing to reflect the 11 substantive + 3 heartbeat steps; fixed the two §9/§10 "90-min stale-takeover" references to 40 min; converted the `[[cloud-cutover-env-wipe-incident]]` wikilink to plain text.
- Left intact (still correct per repo): the two deploy paths do not yet share one mutex — `bin/ci-deploy.ps1` still uses the local FS lock `.deploy/ci-deploy.lock`, not the GCS deploy-lock (open row C2.3), so §10's note stands. No live prod build number is asserted in this doc (it documents the `3.1.0+build.<N>.<tag>` scheme, not a specific build), so nothing was stamped.

## Review Epilog — 2026-07-24

- AgentCICD retired 2026-07-07 (mission complete). CI/CD ownership transferred to AgentMR7 as secondary platform duty. The pipeline mechanics documented here remain accurate.
- Key additions since the 2026-06-23 review: C1.3 hermetic compile-data step landed (`5bc904c5d`+`6d7a7e499`), planted-stale negtest GREEN x2. `:blessed`-only promotion + content-monotonicity ancestor guard active (`0165cafb4`). Cloud-lane provenance fully stamped (both lanes now report real gitCommit + contentHash).
- Dual-lane operation continues pending the founder's deployment-model decision (Option A cloud-only recommended per the published memo). Live build: 1943, gate 251/251 GREEN.
- Remaining open items (items 5/6/7/8 from the CICD table) are tracked in the CICDMRTable under AgentMR7 ownership.
