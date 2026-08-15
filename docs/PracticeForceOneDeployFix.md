---
title: "PracticeForceOneDeployFix"
---

# PracticeForceOne — Deploy Speed Fix Plan

**AgentARCH, 2026-07-26.** Written at the founder's request after a day of heavy dual-lane traffic
(builds 1974 → 1978+, two queued builds observed parked at once). Evidence below is measured from
live runs and `pipeline/cloudbuild-deploy.yaml`, not estimated.

> **OWNERSHIP (founder, 2026-07-26 night): AgentARCH owns deploy optimization** — implements this
> plan, tests on real submits, reports before/after timings per build. **AgentMR7 remains release
> steward** (dual-lane contract, promote policy, lock semantics as policy, gate coverage,
> `CICDSteps.md`); speed changes that touch policy ship behind MR7 review. Standing rule: **gate
> coverage never shrinks for speed** — faster means cached and parallel, never less-verified.

## Where the time goes today (~35-45 min per deploy)

| Stage | Measured/observed | Notes |
|---|---|---|
| Source archive + upload | **712 MiB / 10,333 files** per submit | Uploads the whole `jac2024/` working tree, including archives, decks, a 78 MB stale tarball |
| `generate` (hermetic data-layer regen) | **~18 min, EVERY deploy** | Regenerates all generated CRUD from `ClaimsProcessingDdl.xml` even when the DDL did not change — most deploys don't touch it |
| compile-data → phase0 → compile-router → docker-build | ~10-15 min combined | Runs on Cloud Build's **default small machine** — the yaml's `options:` block sets no `machineType` |
| no-traffic deploy → gate → promote | remainder | The gate (A0 characterization) is the honesty backbone — do not thin it |
| **Lock serialization** | up to **45 min parked** | A second `builds submit` parks at `lock-acquire` burning paid build-minutes; observed live tonight (`c0a6523d` parked behind `db1b581f`) while a third submit was correctly refused |

## Recommendations, ranked by payoff

### 1. DDL-fingerprint cache for the `generate` step — the big lever (~18 min → ~0 on most deploys)

Hash `data/ClaimsProcessingDdl.xml` + the generator toolchain version at the start of the step. On a
match with the last **successful** build's fingerprint (stored in GCS beside the build counter),
restore the generated `.java`/`.class` tree from a GCS cache instead of regenerating; on a miss,
regenerate and refresh the cache. Most deploys are route/UI/definition changes with an untouched
DDL, so the common case skips the entire 18 minutes.
**Owner:** AgentMR7 (pipeline). **Effort:** ~half a day incl. a forced-miss test. **Risk:** low —
the fingerprint keying makes staleness structurally impossible, and a cache wipe degrades to
today's behavior.

### 2. Set `machineType: E2_HIGHCPU_8` in cloudbuild `options` — one line

Compile of 557 scripts + javac of the data layer + docker-build are CPU-bound and currently run on
the unspecified default. Expect roughly half the compile+docker wall time.
**Owner:** AgentMR7, one line. **⛔ Founder decision:** higher per-minute rate, fewer minutes —
net cost roughly flat to slightly up, wall-clock materially down.

### 3. Upload diet — **PARTIALLY LANDED 2026-07-26** (`db905ca59`)

`.gcloudignore` now excludes `docs/archive/`, `**/*.pptx`, `**/*.docx`, the 78 MB
`.deploy/source-1251.tgz`, `.deploy/*.log`, and the ICD-10 zip — none are read by any cloudbuild
step. Deliberately kept IN: `tests/` and `node_modules` (gate inputs). Earlier the same day the
`data/` debris cleanup removed ~940 regen byproducts from every future upload.
**Remaining candidates** (verify no build input first): `ui-smoke`/validation logs regenerating at
root, `scripts/node_modules` duplication, competitor-corpus folders if any sit under `jac2024/`.

### 4. Fail-fast `lock-acquire` — stop paying for parking

Today a second concurrent build waits at `lock-acquire` for up to 45 min of billed time doing
nothing, and the running build almost always already carries HEAD (uploads snapshot at submit).
Make `lock-acquire` exit non-zero immediately when another build holds the lock, unless the submit
explicitly passes an opt-in `-Queue`. Submitters coalesce onto the running build; `cloud-deploy.ps1`
already refuses at submit time when it can see an ONGOING build — this closes the race window it
cannot see.
**Owner:** AgentMR7. **Effort:** small. **Risk:** low; behavior only changes for the wasteful case.

### 5. Docker layer + dependency caching

If the docker-build stage rebuilds base/dependency layers each run, enable Cloud Build's registry
cache (`--cache-from`) or kaniko caching. Verify current layer reuse first — may already be partly
effective. **Effort:** small-medium. **Payoff:** minutes, not tens of minutes.

### 6. Parallel gate shards — cut wall time, never coverage

The A0 characterization gate is the fleet's honesty backbone; do not tier it away by "change class"
(silent under-testing is how regressions ship). Instead, run its scenario batches in parallel
shards against the candidate. **Payoff:** gate wall-time ÷ shard count. **Risk:** fixture
collisions between shards — needs the self-fixture pattern the gate already uses.

### 7. Post-demo, structural: push-trigger + batched promotes

`cloud-deploy.ps1`'s own comments anticipate the service-account/push-trigger model. Commits batch
into scheduled promotes instead of per-lane manual fires — this ends both the daily gcloud reauth
lapse and the queue collisions entirely, and makes deploy latency a property of the pipeline rather
than of who fires when. Belongs with the founder's deployment-model decision (CICD item 7).

## Splitting vs sequencing — the founder's question, answered precisely

**Mostly neither.** The core chain (generate → compile → image → deploy → gate → promote) is a true
dependency chain and cannot be reordered; the fix is making its longest steps **no-ops when their
inputs didn't change** (items 1, 5) and running them on adequate hardware (item 2) — same sequence,
minutes instead of tens of minutes.

Where **splitting** genuinely applies, three places only:
1. **The gate's scenarios** → parallel shards (item 6). Split the checking, never the coverage.
2. **Work out of the pipeline entirely — the strategic one.** Definitions, menus, and rule packs
   already publish to the Definition Repository with ZERO deploy (seconds). Every capability moved
   from code to metadata permanently exits the deploy pipeline. **The North Star and the
   deploy-speed strategy are the same strategy** — the fastest deploy is the one a definition
   change doesn't need.
3. **Static UI assets out of the server image** (post-demo candidate): today a one-line
   `cf-runtime.js` tweak costs a full image build; a bucket-served `ui/public` makes asset changes
   near-instant. Touches the content-hash provenance model — deliberate, after August.

**Do NOT split the monolith itself.** One image, one router, one gate, one content hash is
load-bearing for the JAC architecture and honest provenance; microservice-splitting trades a
40-minute deploy for a distributed-versioning problem the platform doesn't need.

The only **sequencing** changes that matter concern submissions, not builds: fail-fast lock
coalescing (item 4) and, post-demo, push-trigger batching (item 7) — resequencing *when* deploys
happen, not how one runs.

## MEASURED — proof build 1984 (2026-07-26 night, cache MISS baseline)

Cloud Build `4f64c987`, SUCCESS end-to-end, provenance verified live. Per-step wall clock:

| Step | Time | Note |
|---|---|---|
| lock-acquire | 31s | #4 substitution live; clear lane |
| **generate-cache-probe** | 27s | correct **MISS** (first run) |
| **generate** | **1,225s (20.4 min)** | the measured baseline — **73% of the whole build** |
| generate-cache-store | 6s | cache now populated |
| compile-data / phase0 / compile-router | 26s / 31s / 8s | |
| docker-build | 52s | no layer cache yet (#5) |
| deploy / gate / promote | 76s / 83s / 41s | gate untouched, full coverage |
| **Total step time** | **≈28 min** | |

## MEASURED — HIT proof, build 1985 (2026-07-27, ~40 min after the baseline)

Cloud Build `3461ff46`, SUCCESS, promoted, provenance verified live (**gitDirty=false**). The claim held exactly:

| Step | MISS (1984) | **HIT (1985)** |
|---|---|---|
| generate-cache-probe | 27s (miss) | 39s (**hit + restore**) |
| **generate** | **1,225s** | **1s** |
| everything else (compiles, docker, deploy, gate, promote) | ~unchanged | ~unchanged (gate 122s, full coverage) |
| **Total step time** | **≈28 min** | **≈8.2 min** |

**Cross-lane confirmation (build 1987, AgentCF's resubmit):** generate-cache HIT again — `generate`
1s on an independent lane's submit. The cache is a fleet asset, not a one-lane trick.

**Deploy is 3.4× faster on the common case, with identical verification.** Bonus proof the same
night: **three** colliding submits (`e32ba4fd`, `432fccf0`, `71d3a355`) each failed fast at
`lock-acquire` instead of parking — ~135 build-minutes of pure waste avoided in one evening.
Remaining upside: #2 machineType (⛔ founder spend OK) and #5 docker layer cache target the
now-dominant ~4 min of compile+docker.

Upload note: diet exclusions verified active (docs/archive etc. absent from the upload manifest);
gross size grew to 752.7 MiB only because the fleet added new artifacts — `.docx_render/` since
excluded too (`710f4a145`).

## Expected outcome

Items 1 + 2 take the common-case deploy from ~35-45 min to **~12-15 min**. Item 3 (landed) trims
upload/unpack minutes on every submit; item 4 recovers up to 45 min of pure waste per collision;
items 5-6 shave further minutes. Item 7 changes the game post-demo.

## Decision & ownership summary

| Item | Owner | Status |
|---|---|---|
| 1 generate cache | **AgentARCH** (MR7 review) | **IMPLEMENTED** `3c8e6ab68` — probe/store around generate, fingerprint = data/** + generator classes, `_GENERATE_CACHE=off` kill switch; proof: next deploy = MISS+store, the one after = HIT (~18 min → ~2 s); measured timings to be recorded here |
| 2 machineType | **AgentARCH** | **LANDED `7e9e3f401`, first measurement (build 1994):** every CPU-bound step halved as projected — compile-data 28→13s, phase0 30→15s, compile-router 8→4s, docker-build 54→38s, cache-probe 36→21s (~70s saved) — but TOTAL flat at 7.4 min in this sample: gate/deploy/promote variance (external-bound, ~3.6 min) swallowed the gain. **VERDICT: KEEP (watch closed on 4 builds).** Queue pattern 0 / 7.0 / 1.1 / 0.8 min — the 7-min wait was a one-off provisioning spike, not a pattern. Execution settled at **6.0-6.9 min** (CPU steps halved as projected). **Steady-state deploy: ~6 min execution, ~7 min including queue** — the day's full arc: ~30 min → ~7 min, gate coverage identical throughout. |
| 3 upload diet | AgentARCH | **landed** `db905ca59` (+ data/ cleanup same day) |
| 4 fail-fast lock | **AgentARCH** (MR7 review — touches lock policy) | **IMPLEMENTED** `35beb77d1` — `_LOCK_WAIT_MINUTES` default 3, `-QueueBehind` opt-in restores 45; end-to-end proof on the next real submit |
| 5 docker cache | **AgentARCH** | **REVERTED on measurement** — two consecutive builds showed 59s → 73s, 75s (the `:blessed` pull costs ~15s more than reuse saves; class COPYs churn too early in the Dockerfile). Re-attempt only after a Dockerfile layer reorder. The system worked as designed: implemented, measured, reverted — no belief-based optimization survives. |
| 6 gate shards | **AgentARCH** (MR7 + gate owner review) | queued after 1/4/5 |
| 7 push-trigger | founder (CICD item 7) | post-demo |

Related: [Architecture Assessment 7-26](PracticeForceOneArchAsses7-26-2026.html) ·
[Duplication Register](PracticeForceOneDuplicationRegister.html) · `CICDSteps.md` (repo) — the dual-lane
deploy contract.
