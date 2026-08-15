---
title: "PracticeForceOneJACTable"
---

# PracticeForceOne — JAC Enhancement Lane (AgentJAC)

**Last reviewed: 2026-07-24**

**Owner:** AgentJAC
**Started:** 2026-06-22
**Scope:** Make write-failure handling **intrinsic, safe end-to-end, and boilerplate-free** in the JAC generated-CRUD architecture — and retire the per-route manual checks it makes redundant.
**Companion docs:** [JACJEOMRTable.md](JACJEOMRTable.html) (the J0–J9 toolchain MR — STRICT delivery), [PracticeForceOneArchitectureAssessment.md](PracticeForceOneArchitectureAssessment.md) (the assessment that motivated this lane).

---

## Status Banner

> **2026-07-06 — Route-layer program COMPLETE; ratchet ENFORCED; JAC13 validated in production.** JAC9 reached **route-layer CONVERTIBLE = 0** (07-04) and the raw-SQL ratchet is now a **hard release-preflight gate** (`7c1aa9105`, 07-05): new raw `prepareStatement` fails the build unless `// SANCTIONED RAW (<reason>)`-marked + consciously re-baselined (baseline **1018**; all three re-baselines audited 07-06, no disputes). The NOT-NULL-default-column landmine that blocked the last convertibles is closed by **JAC13 sparse create** — production-validated (DLP7 20/20 on live build 1664). All cleanup items (JAC3/4/5/6/8) are closed. Two incidents owned on the way: **JAC12** (create-guard, fully reverted `57bfd88bb`) and **SEV1-1651** (runtime-class packaging; new preflight constant-pool gate `f2dd3511f`). Remaining open buckets: **Views program** (162 join reads), **txn conversions** (58, JAC10/M7-12 recipe), **CopilotOrchestrator 272** (its own MR).
>
> *(Lane opened 2026-06-22 — the original banner content is preserved in the §7 changelog and the earlier progress reports below.)*

---

## 0. Progress Report — 2026-07-06

**Headline:** the program's write-honesty goal is **structurally enforced end-to-end**: STRICT generated CRUD (throw-after-rollback) + JacHttp typed boundary + **raw-SQL ratchet ENFORCED** (no new unsanctioned raw SQL can enter the build) + **write-reply ratchet at `uncheckedCeiling: 0`** (289 generated-CRUD write sites: 223 reply-checked + 66 explicitly acked best-effort — zero unchecked allowed). The 06-23 finding "remaining convertibles are gated on a generator default-column fix" is resolved by **JAC13**: `batchCreate*` diverts rows with unset NOT-NULL columns to a sparse INSERT so DB defaults apply (no 23502, no wrong auto-default). Runtime-proven in the behavior bed (59 checks incl. the new `c23` unset-column test) and in production (DLP7 20/20 GREEN on build 1664, 07-06).

**Incidents owned (both institutionalized):**
- **JAC12 (reverted):** a NOT-NULL create guard shipped ~07-01 broke every unset-NOT-NULL-boolean create in prod (signup, provider save, all appointment creation, eRx drafts) — `PropertyValue` typed getters THROW on empty values, and the golden bed validates emit-shape only. Fully reverted at the generator (`57bfd88bb`, 104-Crud regen). Durable rule: **generator behavior changes ship only with a runtime test of the changed path** (hence `c23` and the psql-free JDBC bed).
- **SEV1-1651 (packaging):** the JAC13 Cruds referenced `JacSparseCreateHelper`, which existed on the compile classpath (`lib/jac/jac.jar`) but not in `jacBuild24/phase1Classes` — the ONLY layer the Dockerfile ships. Every generated create 500ed on build 1651 (AgentDLP hotfixed same-day). Durable rule + gate: new runtime classes referenced by generated code must be compiled into `phase1Classes` in the same change; release-preflight now scans emitted data `.class` constant pools for `com/esarks/jac/*` refs missing from phase1Classes and **fails the deploy** (`f2dd3511f`).

**JAC9 final route-layer classification (07-04, 445 sites):** CONVERTIBLE **0** · needs-table **0** (last 10 resolved cross-lane: AgentMR81 converted the rbac_roles reads after the RBAC_ROLES table add; AgentCICD kept BackupRoutes raw-as-sanctioned DR/ops) · **193 sanctioned-marked** · **162 →Views** · **58 txn** · **22 lane**. Six tables were added to the generated layer on 07-04 alone (RBAC_ROLES, PRACTICE_LOCATIONS, APPOINTMENT_WAITLIST, CALENDAR_RESOURCE_BLOCKS, PROVIDER_AVAILABILITY_TEMPLATES, SCRIPT_BUILDER_SCRIPTS/_RUNS).

**Remaining (the open buckets, unchanged in nature since 06-25):** Views program (162 denormalized join reads), transaction-route conversions via the JAC10 recipe (58 — the M7-12 lane has been applying the caller-owned-conn pattern), CopilotOrchestrator (272 — its own MR). These are volume, not risk; the toolchain is complete for all of them.

---

### (earlier) Progress Report — 2026-06-25

**Headline:** 🚀 **LIVE.** Build **2151** (`d17af90c`) promoted to prod — the JAC lane is now running in production: STRICT generated CRUD regenerated with the **JAC10 transaction-participation + JAC11 array-binding** generators, **JacHttp** typed-error choke point + framework wraps, and typed-error delegation across ~54 route modules. The 2-day deploy blocker (**DLP-F03**) was root-caused + fixed by AgentJAC (ERA payment FK violation + a STRICT-throw swallowed by a pre-STRICT broad catch → lying 200) — gate GREEN, deploys unblocked for all agents. `/api/health` now reports `db:healthy` + real `buildNumber`.

**Remaining:** finish JAC1 typed-delegation on the last ~28 write modules; land the **array-site conversion** (built+worktree-proven on `worktree-agent-aeb9af9709d4fd3f2`; needs a FRESH merge/redo on the now-green master since the base drifted — conflicts with the typed-catch commits); generate **Views** for denormalized joins; **CopilotOrchestrator** 272; JAC3/4/5/8 cleanup + flip the raw-SQL ratchet to enforce.

---

### (earlier) Progress Report — 2026-06-23

**Headline:** both hard *enabling* mechanisms are built, proven, and live-bound; the program is now in the high-volume *application* phase. The risky toolchain work is behind us.

### Burn-down by item

| Item | What | Status | Evidence |
|------|------|:------:|----------|
| **JAC1** | HTTP exception choke point (no STRICT hang) | ☑ done | mechanism + 4 framework handlers + **~74 route modules** delegating typed errors — every module where a STRICT CRUD throw can reach the handler catch is covered (remaining un-typed modules write via raw SQL or best-effort, so JacDataException never reaches them). LIVE (build 2151). `750c7f8bc`…`0e9c89aad` |
| **JAC2** | Typed status mapping (409/422/503) | ☑ done | in `JacHttp.statusForSqlState`, live on money-path routes. `3cb42686c` |
| **JAC10** | Transaction-participating CRUD (toolchain) | ☑ done+proven | golden additive-only + `c20` atomic-rollback test. `1e2348879` |
| **JAC11** | Generator array-binding TEXT[]/int[] (toolchain) | ☑ done+proven | additive dbTypes + setArray/createArrayOf branch + uidUpdate helper; golden additive-only + `c21`/`c22` array round-trip green. `2785ff944` |
| **JAC9** | Convert ALL raw SQL → JAC | ▰▰▱▱ ~30% | **ROUTE-SWEEP PHASE EXHAUSTED** (06-24): ~20 modules swept, all convertible-without-toolchain sites done (most by prior A5 passes). Remaining: **(1) generated Views** for denormalized joins (open), **(2) array sites** — ✅ BUILT + worktree-proven (DDL retype + ~17-file consumer move to the array JEO shape + ChargeReview/Authorizations conversion via JAC10+JAC11), **STAGED on branch `worktree-agent-aeb9af9709d4fd3f2` (`104acb505`), NOT merged** — large money-path blast radius; merge+deploy-validate as one controlled step when the gate is green (currently RED on unrelated DLP-F03), **(3) CopilotOrchestrator** 272 sites. Both hard enablers (JAC10/JAC11) built. batches `4bfc6a9c6`…`2785ff944` |
| **JAC3** | Retire 232 redundant manual reply-checks | ☐ todo | after JAC1 adoption completes |
| **JAC4** | Delete injector/patch layer (J9.4) | ☐ todo | toolchain cleanup |
| **JAC5** | Fold uidUpdate helper into generator (J4.2) | ☐ todo | toolchain |
| **JAC6** | Fix stale `ServiceJeo` source | ☑ done | DO-NOT-EDIT guard header added pointing to the authoritative `.script`. `6c49c4a45` |
| **JAC7** | HTTP forced-failure test | ☑ covered | the gate's jacjeo `K1-b` scenarios already assert it at HTTP level (constraint-violating create → non-2xx HTTP 400, honest not swallowed) + `c20` at unit level. Optional refinement: tighten K1-b to assert the typed 409/422 once JacHttp adoption deploys. |
| **JAC8** | Retire boundary heuristic | ☐ todo | after JAC1 adoption |

### Converted/hardened modules (JAC9 + JAC10)
Authorizations · ReferringProviders · ClinicalRoutes · ErxRoutes · ChargeReview *(+ atomic /approve,/return)* · PortalAuthRegister *(+ atomic registration txn)* · WorkflowClaimReview · Eligibility · Claims · Payments · ManualPayments · ClaimLines · PatientInsurances. **~20 single-table sites → generated CRUD, 3 SQL-leaks fixed, missing write-checks added, money-path transactions made atomic-through-CRUD.**

### Raw-SQL count
Baseline 979 (06-12) → **987** today. It *grew* because other agents keep adding raw SQL while the ratchet is non-blocking WARN. **Reaching the floor requires flipping the ratchet to `-Enforce`** (stops new raw SQL) once mid-conversion — a coordination step with other agents.

### Critical-path plan to "all ☑" (fastest, least rework)
1. **Enablers first:** generate CRUD for ~25 missing tables (DDL adds) + join Views → unblocks the most conversions; then generator **array-binding** (last-mile for claims/claim_lines `int[]`/`TEXT[]`).
2. **Mass parallel conversion:** remaining single-table + transaction routes via the JAC10 recipe (§9), in waves.
3. **JAC1 adoption** (parallel track): ratcheted catch-delegation across the remaining ~135 routes.
4. **CopilotOrchestrator** (272 sites) — its own pass.
5. **Cleanup + lockdown:** JAC3 (retire manual checks), JAC4/5/6, JAC7, then flip raw-SQL ratchet to enforce.

**Honest scope note:** this is a multi-session program (~950 raw sites + ~135-route adoption + toolchain enablers + 272-site Copilot). The foundation + proven recipes are in place; remaining work is high-volume but de-risked and gated by the build. Fully resumable from this table.

---

## 1. Thesis

A generated CRUD layer is the *ideal* place to enforce a write-success invariant, because the behavior is emitted from **one** template (`GenerateService.script`) and regenerated across all 98 tables — a single change propagates everywhere. That work is **done**: STRICT mode makes a failed write roll back and throw instead of silently returning `200 OK`.

What is *not* done is the other half of the invariant: **guaranteeing the throw is always caught and translated into a correct HTTP response.** Today that depends on each of 175 route modules remembering to wrap its writes in a `try/catch` — the same "remember to do it everywhere" fragility STRICT was meant to remove, just moved up a layer. Close that, and:

1. STRICT can never degrade into a worse failure (a hang) than the bug it replaced.
2. The HTTP status becomes meaningful (409/422 on a constraint, 404 on not-found, 500 only for genuine server faults).
3. The **232 manual `getError().getSeverity()<5` checks become redundant and can be deleted** — the code gets *simpler*, and the honesty invariant becomes structural rather than disciplinary.

---

## 2. Current State (evidence)

| Mechanism | State | Evidence |
|---|---|---|
| Generated write rolls back + throws on failure | **LIVE (STRICT)** | `GenerateService.script:925–996` (SQLException catch → rollback → `if (JacErrorPolicy.strict() && !aJeo.isBestEffort()) throw JacDataException.from(...)`); baked default STRICT at `:145–161` |
| Atomic batch (partial batch persists 0 rows) | **LIVE** | `GenerateService.script:893–909` (`setAutoCommit(false)` around `executeBatch`) |
| `JacErrorPolicy` modes LEGACY/LOG/STRICT + resolution (thread-override → `JAC_ERROR_MODE` env → gen default) | **LIVE** | `jacBuild24/source/java/com/esarks/jac/JacErrorPolicy.java:20,31–48` |
| `JacDataException` message sanitization (strips SQL + bound values, 300-char cap) | **LIVE** | `JacDataException.java:73–103` |
| `ServiceJeo.isFailure()/failureSummary()/setBestEffort()` contract | **LIVE (in `.script` + shipped `classes/`)** | `ServiceJeo.script:280,288,314–319` |
| `JAC_ERROR_MODE=STRICT` in deploy | **LIVE** | `cloudbuild.yaml:57`, `pipeline/cloudbuild-deploy.yaml:122` |
| **Global HTTP exception-translation choke point** | **MISSING** ← the gap | `RequestAuth.script` is a *return-a-value preamble*, not a wrapper; no `com.sun.net.httpserver.Filter` registered anywhere; static `/` and `/ui` handlers have **no** try/catch |
| Per-route `catch(Exception)` absorbs `JacDataException` (it's a RuntimeException) → generic 500 | partial / inconsistent | ~140 copy-pasted catches, all return blanket 500 + `e.getMessage()`; 36 modules don't use RequestAuth; boundary checker confirms only 130/331 write sites provably wrapped |
| Manual write-reply checks (the boilerplate) | 87 checked / **232 unchecked** (27.3%), pinned at ratchet ceiling | `bin/check-write-reply-ratchet.ps1`, `bin/write-reply-baseline.json` |
| Injector/patch layer (A.1.a) | proven no-op, **not yet deleted** | `bin/inject-uid-update-helper.py`, `recompile-a1a-patched.ps1` |
| `JacUidUpdateHelper` folded natively into generator (J4.2) | **OPEN** | helper still a separate runtime class the generated code calls |
| Stale-source landmine | risk | `jacBuild24/source/java/.../ServiceJeo.java` is MISSING the J2 methods that the shipped `classes/` copy + `.script` have — never hand-edit `source/java`; regenerate from `.script` |

---

## 3. Work Items

Status key: ☐ todo · ◐ in progress · ☑ done · ⏸ parked/gated

| ID | Item | Phase | Status | Notes / Evidence |
|----|------|-------|:------:|------------------|
| **JAC1** | **Global HTTP exception-translation choke point** — one place that catches `JacDataException` → sanitized typed status and `Throwable` → 500, covering EVERY context incl. static handlers, so a STRICT throw can never escape to the JDK HttpServer (no hangs). | Keystone | ☑ **DONE** | `util/JacHttp.script` (`errorFilter`/`guard`/`context`/`respond`) + 4 framework handlers wrapped + typed-error delegation across **~74 route modules** (every module a STRICT CRUD throw can reach). LIVE build 2151. `750c7f8bc`…`0e9c89aad`. Design in §4. |
| **JAC2** | **Typed status mapping** — map `JacDataException` (severity / SQLState / operation) → HTTP: unique-violation `23505`→409, FK `23503`→409, not-null `23502`/check `23514`/other `23xxx`→422, serialization `40001`/deadlock `40P01`/timeout `57014`→503-retry, else 500. | Keystone | ☑ | **Built into JacHttp** `statusForSqlState()` `750c7f8bc`; live in prod since build 2151 across all delegating modules (~74 as of 06-25) and proven end-to-end by the DLP-F03 typed-error fix. SQLState carried on `JacDataException.getSqlState()`. |
| **JAC3** | **Retire redundant manual reply-checks** — once JAC1/JAC2 guarantee translation, delete the 232 manual `getError().getSeverity()<5` blocks where the choke point covers them; lower `write-reply-baseline.json` ceiling toward 0. Keep checks only where a route must branch on failure (not just error out). | Cleanup | ☑ | **Closed (resolved in the stricter direction, M7-61):** rather than deleting checks, `check-write-reply-ratchet.ps1` now enforces **`uncheckedCeiling: 0`** — 289 generated-CRUD write sites = 223 reply-checked + 66 explicitly acked best-effort, zero unchecked allowed. Checks kept as belt-and-braces under STRICT+JacHttp; the honesty invariant is structural + ratcheted, which was the point. |
| **JAC4** | **J9.4 — delete the injector/patch layer** (`inject-uid-update-helper.py`, `recompile-a1a-patched.ps1`, `release-preflight.ps1` wiring). Proven safe no-op on the 100%-new-format tree. | Toolchain | ☑ | **DONE** — both files verified ABSENT from `bin/` (2026-07-06 check). Preceded by the 06-13 no-op proof (scripts 95/95 + shipped `.java` 95/95 carry the native helper). |
| **JAC5** | **J4.2 — fold `JacUidUpdateHelper` into the generator natively** so generated `uidUpdate*` emits dirty-aware SQL directly instead of calling the runtime helper. The one genuinely-incomplete toolchain piece. | Toolchain | ☑ | **DONE** — the generator emits the runtime `com.esarks.jac.JacUidUpdateHelper` call + policy gate natively (proven in the 06-13 J9.4 verification: zero old `com.claimsprocessing.util` refs); native emission has carried every regen since, 105/105 Cruds through the 07-04 JAC13 wave. J4.2 row closed in [JACJEOMRTable.md](JACJEOMRTable.html) 07-06. |
| **JAC6** | **Fix the stale `ServiceJeo` source-of-truth** — reconcile/regenerate `source/java/.../ServiceJeo.java` to match the `.script`+`classes/` (or add a guard so it can't be mistaken for the live source). | Toolchain hygiene | ☐ | Prevents a future maintainer editing the dead copy. |
| **JAC7** | **Forced-failure end-to-end test scenarios** — inject a real constraint violation on a primary write and assert the API returns a sanitized **typed** error (not a hang, not a 2xx, not blanket 500). Add to the JEO behavior bed + `uat-characterize.ps1`. This is the real STRICT gate (vs the over-reporting boundary heuristic). | Verification | ☐ | `test-jeo-behavior.ps1` already exercises throw-in-STRICT at the unit level; need the HTTP-level scenario. |
| **JAC8** | **Lower/retire the boundary heuristic** once JAC1 makes per-route wrapping moot (`check-strict-write-boundaries.ps1` over-reports 201 sites; with a global choke point the per-route wrap is no longer the safety mechanism). | Cleanup | ☑ | **DONE** — `check-strict-write-boundaries.ps1` verified ABSENT from `bin/` (2026-07-06 check); behavioral gates (K1-b forced-failure scenarios + the characterization suite) are the safety proof. |
| **JAC10** | **Transaction-participating generated CRUD (founder chose Option B, 2026-06-23).** New toolchain capability: generated write methods accept the caller's `java.sql.Connection` and do NOT setAutoCommit / commit / close — they stage the write on the caller's transaction and (under STRICT) throw on failure so the caller's `catch` rolls the whole unit back. Unblocks converting multi-table ATOMIC transactions (charge-approval, registration, claim+lines) to generated CRUD **without losing all-or-nothing**. **Additive**: the new path only triggers when the caller sets the transaction connection; default behavior byte-identical, so existing CRUD is unaffected. | Toolchain (keystone for JAC9 residue) | ☑ | **DONE+PROVEN `1e2348879`.** Additive gate in `GenerateService.script` (3 points on `!lJacjeoCallerOwnedConn`); golden additive-only; behavior bed +`c20` atomic-rollback green. Ships via cloud-build regen. Recipe + rollout in §9. Next: convert the atomic-transaction routes using the recipe. |
| **JAC9** | **Eliminate raw SQL → generated JAC (founder directive 2026-06-22: "convert ALL").** Convert every hand-written `prepareStatement` to generated CRUD (single-table) or generated View/Read (joins/aggregates); the genuinely-exceptional residue stays raw but explicitly marked. Drive the `check-raw-sql-ratchet` baseline (979) toward 0 and flip it to `-Enforce`. | Major program | ☑ | **Route-layer COMPLETE + ratchet ENFORCED.** Final classification 07-04 (445 sites): CONVERTIBLE 0 · needs-table 0 · 193 sanctioned-marked · 162 →Views · 58 txn · 22 lane. Ratchet flipped to hard-fail in release-preflight `7c1aa9105` (07-05, objection window ran clean); baseline **1018** (three reviewed re-baselines, all 13 added sites audited 07-06). Remaining buckets (Views / txn / Copilot-272) tracked as their own programs — see §0 (2026-07-06). |
| **JAC12** | **NOT-NULL create guard (generation-time default binding)** — attempted fix for creates that leave NOT-NULL columns unset. | Toolchain | ☒ | **REVERTED in full** (`57bfd88bb`, 07-04, 104-Crud regen): `PropertyValue.getValueBoolean()/getValueTimestamp()/getValueInt()` THROW on empty values, so the guard's fall-through broke every unset-NOT-NULL-boolean create in prod (signup, provider save, ALL appointment creation; strings bound NULL → 23502 on eRx). Golden bed passed while prod broke — it validates emit-shape only. Superseded by JAC13. Lesson institutionalized: a runtime test of the changed path is mandatory for generator behavior changes. |
| **JAC13** | **Sparse create — unset NOT-NULL columns OMITTED from the INSERT so DB defaults apply** (mirrors the dirty-aware uidUpdate philosophy; the durable fix for the JAC12 incident class). | Toolchain | ☑ | **DONE + PRODUCTION-VALIDATED** (`abe639ade`, 07-04): `batchCreate*` diverts rows with unset NOT-NULL columns to `JacSparseCreateHelper.sparseCreate` (only set columns listed → DB DEFAULT applies; unset NULLABLE stays on the legacy atomic batch — the bed caught the atomicity break pre-land). Behavior bed 59/0 incl. new `c23` runtime unset-column test; **DLP7 20/20 GREEN on live build 1664** (07-06). Packaging sequel **SEV1-1651** owned: helper was in jac.jar but not `phase1Classes` (the only shipped layer) — all creates 500ed on 1651; fixed + new preflight constant-pool packaging gate `f2dd3511f`. |

---

## 4. JAC1 Design — the choke point

**Constraint:** `com.sun.net.httpserver` has no server-level filter; filters attach per-`HttpContext` (`context.getFilters().add(...)`), and each route module calls `server.createContext(path, handler)` itself. So a truly global wrap needs one of:

- **Option A — shared wrap helper at registration (recommended).** Add `JacHttp.handler(HttpHandler inner)` returning an `HttpHandler` that runs `inner.handle(exchange)` inside `try { } catch (JacDataException e){ typed status + failureSummary body } catch (Throwable t){ 500 }` and guarantees a response is always sent (no escape). Migrate the ~140 route modules' `server.createContext(path, new HttpHandler(){...})` to `server.createContext(path, JacHttp.handler(new HttpHandler(){...}))` — a mechanical, ratchetable change (precedent: the RequestAuth-preamble adoption, floor-137 ratchet). Apply the SAME helper to the static `/` and `/ui` handlers in the router (closes the clearest hang gap immediately). **Pro:** one implementation, covers everything, incrementally adoptable. **Con:** ~140 one-line edits (ratcheted).
- **Option B — register a `Filter` per context.** Provide a `JacHttp.createContext(server, path, handler)` wrapper that does `createContext` then `.getFilters().add(jacErrorFilter)`. Same migration surface as A; a Filter is marginally cleaner but functionally identical. Fold into A.
- **Option C — fold into `RequestAuth`.** Change `RequestAuth` from "return a context" to "run this body": `RequestAuth.run(exchange, ..., () -> { body })`. Cleanest conceptually (auth + error wrap in one structural place) but a bigger refactor of the 139 adopters and doesn't cover the 36 non-RequestAuth modules or static handlers. **Defer** — Option A is lower-risk and more complete.

**Decision:** **Option A** — `JacHttp.handler(...)` wrap helper + immediate application to static handlers, then ratcheted module migration. JAC2's status mapping lives inside this one helper.

**Rollout safety:** build behind the existing shadow service first (`_RUN_SERVICE=claimsprocessing-api-shadow`), prove JAC7 forced-failure scenarios green on shadow, then promote. The wrap is a strict superset of today's behavior (today an unwrapped throw hangs; wrapped it returns a typed error), so it cannot regress a currently-working path.

---

## 5. Risks & Landmines

- **Stale `source/java/ServiceJeo.java`** — missing the J2 methods; editing it does nothing (the `.script` is authoritative). (JAC6.)
- **`phase1Classes` shadow-jar landmine** — clean it before a jac.jar rebuild (`rebuild-jac-jar.bat` does).
- **BOM kills the JAC compiler; exit-0-on-compile-error** — verify emitted output, don't trust exit code alone.
- **Double-response** — the wrap must detect whether the inner handler already sent a response before writing its own (track via a flag or check `getResponseCode()`), or it will throw "headers already sent".
- **Best-effort writes** must keep the LEGACY swallow even after JAC1 (they intentionally continue on failure) — the `!aJeo.isBestEffort()` guard already handles this at the data layer; the choke point only sees a throw when the write was NOT best-effort.

---

## 6. Dev Loop (toolchain change)

`edit GenerateService.script` (or ServiceJeo.script) → `jacBuild24/bin/rebuild-jac-jar.bat` → golden gate `jacBuild24/bin/test-generators.ps1` → behavior bed `test-jeo-behavior.ps1` (needs DB) → whole-app dry-run `test-pfo-regen-rehearsal.ps1` (scratch) → regen real layer `bin/generate-jac2026.ps1` → validate `bin/check-generated-data.ps1` + `validate-generated-claims-jeo-noise.ps1` → app build `bin/phase0.ps1` + `bin/compile-router.bat` → runtime prove (52/52 validators + `uat-characterize.ps1 all`) → deploy (`gcloud builds submit … cloudbuild-deploy.yaml … _RUN_SERVICE=claimsprocessing-api`).

For an app-only change (JAC1/2/3 — no generator edit), skip the toolchain rebuild + regen: `phase0.ps1` + `compile-router.bat` → `check-module.ps1 <Module>` → deploy.

---

## 8. JAC9 — Raw-SQL Elimination Program (founder directive: convert ALL)

**Inventory (evidence-based, 2026-06-22):** `util/` holds **681 hand-written `prepareStatement` sites across 128 modules**. App-wide ratchet baseline = **979** (`bin/raw-sql-baseline.json`); the non-`util` remainder is dominated by `ai/copilot/CopilotOrchestrator.script` (**272** — its own MR) plus `ai/ml`, `edi/generators`, the 5 residual router sites, and tests.

**Buckets (the `util/` 681):**

| Bucket | Meaning | Target | Sites | Modules |
|--------|---------|--------|------:|--------:|
| **A. Single-table CRUD** | one-table INSERT/UPDATE/DELETE/SELECT | generated `<TABLE>Crud` (call-swap; **brings it under STRICT**) | **345** | 94 |
| **B. Relational read** | JOIN / GROUP BY / aggregate | generated `<Name>View`+`Read` (7 views already exist) | **103** | 49 |
| **C. Genuinely-exceptional** | DDL/migrations, staging/bulk (ON CONFLICT/COPY), mock/test, transport queues, `SELECT 1` health/ownership, `information_schema` | **stays raw + one-line `// SANCTIONED RAW (…)` marker** | **233** | 42 |

**Proven playbook** (from the already-converted Portal suite + Views program): INSERT → build the data JEO, `setX(...)`, `svcJeo.getRequest().addJeo(jeo)`, `crud.batchCreate<TABLE>(svcJeo)`; UPDATE → read-by-where, `setX(v)` **and** `setXUpdate(true)` (dirty flag), `crud.uidUpdate<TABLE>(svcJeo)`; reads → `setWhereClause`/`setOrderClause`/`setTop` + `crud.read<TABLE>`; joins → generated `<Name>ViewRead`. Tenant scope preserved via `'`-escaped practice/org in the where-clause. Post-write: rely on STRICT throw (now caught+typed by JAC1) and/or the `getError().getSeverity()<5` check.

**Tables referenced by raw SQL with NO generated CRUD yet** (need a `data/ClaimsProcessingDdl.xml` add + `bin/generate-jac2026.ps1` before a call-swap): `provider_practices`, `provider_availability(_templates)`, `coverage_rules`, `encounter_charges`, `practice_locations`/`provider_locations`, `kanban_lane_configs`, `appointment_waitlist`/`appointment_types`, `calendar_resource_blocks`, plus reference catalogs (`cpt_codes`/`icd10_codes`/`medication_codes` — likely bucket-C bulk loads) and transport (`email_queue`, `partner_callback_queue`, `external_partner_events` — bucket-C).

**Conversion order (max honesty-coverage per effort; convert A first where CRUD already exists):**
1. rcm/workflow (80 A) · 2. admin/reference (65 A) · 3. portal (45 A, densest exemplars) · 4. clinical/eRx (37 A) · 5. scheduling (31 A + heavy B + no-CRUD tables → generate first) · 6. claims/edi (25 A) · 7. auth/users (14 A, zero joins — quick win) + patients/providers (14 A) · 8. payments + reporting/infra mop-up.

**Bucket-C policy — FOUNDER DIRECTIVE 2026-06-22: convert ALL; drive ad-hoc raw `prepareStatement` to ZERO.** Approach, in order of preference per site:
1. **Generated CRUD/View** wherever the shape allows (all of A and B).
2. **Extend the JAC toolchain** to cover shapes it can't express today, then convert — notably **array-typed columns** (`TEXT[]` cpt/diagnosis: add JEO array binding in the generator) and a **generated batch/upsert loader** for staging/promote bulk inserts (ON CONFLICT/COPY). This is in-scope precisely because we own `jacBuild24`.
3. **Irreducible residue** — a small set that has *no table to map to*: DDL/schema migrations (`*Schema.script`, the DDL is the generator's own input), the `SELECT 1` connection-health probe, and `information_schema` introspection. These cannot be generated CRUD by definition; they are kept in the JAC architecture as **formally-sanctioned, centralized exceptions** (CLAUDE.md Rule 3) with `// SANCTIONED RAW (<category>)` markers — not ad-hoc scattered SQL. The explicit irreducible list will be surfaced for sign-off as we reach it.

**Net target:** every data *read/write* goes through generated JAC; the only `prepareStatement` that survives is DDL + health-probe + introspection, all marked and centralized. CopilotOrchestrator (272 sites, non-`util`) is in-scope as its own phase.

### 8.1 Conversion feasibility — what CAN vs CANNOT be generated (2026-06-25, post JAC10/JAC11)

With both hard enablers built (JAC10 transactions, JAC11 arrays), the convertible/irreducible boundary is now stable.

**CONVERTIBLE (remaining work, not blocked):**
- Single-table reads/writes — **done**.
- Multi-table **atomic transactions** — **done** (JAC10: caller-owned connection).
- **Array columns** `TEXT[]`/`int[]` — **done** (JAC11); array sites staged on `worktree-agent-aeb9af9709d4fd3f2`.
- **Denormalized JOIN reads** (return joined-table columns) → **generated Views**. The bulk of what's left (~100 sites). Labor (a View per join shape), not a wall.

**IRREDUCIBLE — CANNOT be expressed as generated CRUD/Views by nature** (stay raw + `// SANCTIONED RAW`):
1. **DDL** — `CREATE/ALTER TABLE` in routes; the DDL is the generator's *input*, not data access. (Better moved to a migration layer, but cannot become CRUD.)
2. **Health / existence / introspection probes** — `SELECT 1`, `to_regclass(...)`, `information_schema`/`pg_constraint`. No table to map to.
3. **`ON CONFLICT` upserts** — generated `batchCreate` has no upsert clause.
4. **`RETURNING`, `SELECT … FOR UPDATE` (row locks), compare-and-set `UPDATE … WHERE status='x'`** (rowcount-driven optimistic locking) — primitives generated CRUD doesn't expose.
5. **Dynamic-shape SQL** — runtime-variable column lists, dynamic `IN`-lists, `OFFSET` pagination, WHERE built from arbitrary filters.
6. **`jsonb` operators / casts** — CRUD binds a column as a scalar; jsonb containment/path operators can't be expressed.
7. **Mock / test-harness SQL** — synthetic queries simulating external partners.

**Critical nuance:** several irreducible cases (3, 4) *could* be force-rewritten (read-then-upsert; read-check-update) but doing so **reintroduces races** the DB-atomic form avoids — converting them would be a *correctness regression*, not progress (same reasoning that produced JAC10 instead of breaking transactions). They MUST stay raw.

**Why this is not a correctness gap:** the irreducible residue already runs **honest + atomic** — under STRICT + JacHttp it fails loud with typed errors (proven by the DLP-F03 fix), and via JAC10 it can participate in the caller's transaction. It is just raw `prepareStatement` that the ratchet counts.

**Revised end-state (supersedes "drive to ZERO"):** the target is **zero ad-hoc / unsanctioned raw SQL** — everything that *should* be generated CRUD/Views is, and the only raw SQL left is the irreducible set above, each `// SANCTIONED RAW (<reason>)`-marked, with the ratchet flipped to **enforce** so no new unsanctioned raw SQL can be added. The ratchet floor = the irreducible count (TBD — a precise categorized inventory will set it).

**Ratchet:** `bin/check-raw-sql-ratchet.ps1` freezes-and-shrinks (baseline 979, `bin/raw-sql-baseline.json`); each converted batch lowers it via `-UpdateBaseline`. End-state: flip to `-Enforce` / `DEPLOY_ENFORCE_NO_RAW_SQL=1` so new raw SQL fails the build. **→ DONE 2026-07-05 (`7c1aa9105`):** enforced in release-preflight after a clean objection window; baseline **1018** as of 07-06 (995 freeze → three reviewed re-baselines for marked ReportsRoutes/BackupRoutes/PortalMfaRoutes adds, all audited). `DEPLOY_ENFORCE_NO_RAW_SQL=1` for the cloud pipeline requested from AgentCICD.

---

## 9. JAC10 — Transaction-participating CRUD (design)

**Founder chose Option B (2026-06-23):** convert even multi-table atomic transactions, safely.

**Key discovery:** generated CRUD *already* accepts a caller-supplied connection — `GenerateService.script:204-209` reads `aJeo.getPropertyValue("DbConnection")` and uses it instead of the shared "application" connection if present. So the only gap is that under STRICT the generated method still **self-manages** the transaction even on a caller-owned connection:
- batch-txn wrap `GenerateService.script:898-909` (`setAutoCommit(false)`/`commit()`/`setAutoCommit(true)`)
- failure rollback-hygiene `:965-973` and `:~1035`

**Change (additive, ~3 gate points):** capture `boolean lJacjeoCallerOwnedConn = (lDbConnectionPropertyValue.getValueType() != PropertyValue.CONST_VALUE_TYPE_NULL)` at acquisition; gate the batch-txn wrap and the rollback-hygiene on `!lJacjeoCallerOwnedConn`; **keep the STRICT policy throw** so the caller's `catch` rolls back the whole unit. When no connection is supplied (the default), behavior is byte-identical → existing CRUD unaffected. (Also check `JacUidUpdateHelper` for any self-commit and gate the same way.)

**Route pattern after JAC10:** route acquires a dedicated pooled connection (NOT the shared "application" one — avoids the idle-in-txn SPOF deadlock), `setAutoCommit(false)`, wraps it as a `DbConnection`, sets it on each ServiceJeo, calls the CRUD writes, `commit()` once; `catch → rollback()`. Atomic + honest + typed.

**Proof gate (before any regen):** golden bed (`test-generators.ps1`, additive diff only) + a NEW transaction-rollback behavior test (`test-jeo-behavior.ps1`): two writes on one caller-owned conn, second violates a constraint, assert the first is rolled back and a `JacDataException` is thrown. THEN regen 98 tables + convert the transaction routes.

**STATUS: JAC10 DONE + PROVEN (`1e2348879`, 2026-06-23).** Golden bed additive-only (8 artifacts); behavior bed 49 checks green + new `c20` proves atomic rollback through generated CRUD. JacUidUpdateHelper needed no change. **Rollout mechanism:** the cloud build's `generate` step (`pipeline/scripts/generate-hermetic.ps1` → `RunMakeAll.jrun`) regenerates `data/` from the committed generator at build time, so the deployed CRUD gains JAC10 on the next deploy — **no local `data/` regen needed** (avoids clobbering other agents' `data/` WIP); converted routes + regenerated CRUD ship in one build. **Dev-loop gotcha:** the generator runs from `jacBuild24/classes/` not `source/`, so a `.script` edit needs `RecompileGenerateService.bat` (or the full regen) to take effect locally — committed the recompiled class + rebuilt `jac.jar`.

**JAC10 route-conversion recipe** (for the atomic-transaction routes, JAC9 bucket-C transactions):
```java
DbConnection txn = new DbConnection("rcmTxn");          // DEDICATED name, NOT "application"
txn.setStereotype("postgresql"); txn.setDbTypes("postgresql");
txn.setConnection(pooledConn);                          // a pooled java.sql.Connection from DbConnectionFactory
txn.getConnection().setAutoCommit(false);
PropertyValue pv = new PropertyValue((Object) txn);
try {
  svcA.setPropertyValue("DbConnection", pv); crudA.batchCreateA(svcA);   // STAGES, no commit
  svcB.setPropertyValue("DbConnection", pv); crudB.uidUpdateB(svcB);     // throws under STRICT on failure
  txn.getConnection().commit();
} catch (Exception e) { try { txn.getConnection().rollback(); } catch (...){} /* sanitized 4xx/5xx */ }
finally { try { txn.getConnection().setAutoCommit(true); pooledConn.close(); } catch (...){} }
```
Routes compile against current CRUD (the connection is passed via `setPropertyValue`, not a new method signature); the atomic staging behaviour activates once the JAC10-regenerated CRUD is deployed (same build).

---

## 7. Changelog

| Date | Entry |
|------|-------|
| 2026-06-22 | Lane opened (AgentJAC). Grounding investigation complete. Confirmed STRICT already live (build 1591, `5da73b772`); reframed scope to the HTTP choke point + boilerplate retirement + two open toolchain items. JAC1 design = Option A (`JacHttp.handler` wrap helper). |
| 2026-06-22 | **JAC1/JAC2 mechanism landed** `750c7f8bc`: `util/JacHttp.script` built (filter/guard/context/respond + `statusForSqlState` typed mapping + double-send guard), compiles standalone, wired into phase0 Stage 1. Additive only (no caller yet → zero behavior change). |
| 2026-06-22 | **JAC9 opened (founder directive: convert ALL raw SQL to JAC).** Full inventory: 681 `util/` raw sites / 128 modules (979 app-wide). Triaged A=345 single-table (→CRUD, the honesty prize), B=103 relational (→Views), C=233 exceptional (→marked, needs founder ack). Phased order + proven playbook recorded in §8. **Starting** Phase-1/quick-win module conversions. |
| 2026-06-23 | **MILESTONE — both keystone mechanisms built+proven; transaction pattern validated end-to-end.** (1) **JAC1/JAC2** `JacHttp` HTTP exception choke point (`750c7f8bc`). (2) **JAC10** transaction-participating CRUD shipped+proven (`1e2348879`, golden additive-only + `c20` atomic-rollback test). (3) **End-to-end proof** (`94cdfe7b4`): portal registration's multi-table atomic transaction converted to mixed generated-CRUD-on-caller-conn + raw, atomicity intact, compiles. **The hard/risky toolchain work is DONE.** Remaining is high-volume *application*: (a) convert the rest of the atomic-transaction routes via the JAC10 recipe (charge-approval, undo-sign, staging, etc.), (b) generate CRUD for ~25 missing tables (DDL adds) + Views for joins, (c) toolchain array-binding for TEXT[]/int[] columns, (d) JAC1 adoption across ~140 routes + framework handlers (ratcheted), (e) JAC3 retire 232 manual checks, (f) JAC4/5/6 (injector delete / native uidUpdate fold-in / ServiceJeo source fix), (g) JAC7 HTTP forced-failure scenario, (h) CopilotOrchestrator 272 sites. **This is a multi-session program; the foundation + patterns are in place and resumable from this table.** A live build (`380cb936`) is regenerating `data/` with JAC10 + validating the committed conversions via the gate. |
| 2026-06-23 | **JAC9 batches 1-3 done (8 modules): Authorizations, ReferringProviders, ClinicalRoutes, ErxRoutes, ChargeReview, PortalAuthRegister, WorkflowClaimReview, Eligibility.** Converted ~17 single-table sites to generated CRUD + fixed 3 raw-SQL leaks + added missing write-checks; classified+marked the residue `// SANCTIONED RAW`. **Key finding:** the cheap single-table call-swaps are largely EXHAUSTED (prior A5 passes + these batches); the remaining raw SQL is dominated by (1) **multi-statement atomic transactions** — converting breaks all-or-nothing since generated CRUD commits on its own connection (this SQL is *correctly* raw), (2) **joins/aggregates** → need generated Views, (3) **~25 tables with no generated CRUD** (encounter_charges, coverage_rules, external_interfaces, kanban_lane_configs, provider_availability, …) → need DDL+generate, (4) **array columns** (TEXT[]/int[]) → need generator array-binding, (5) **DDL / health-probe / bulk** → irreducible. **Count: 987 (ratchet WARN, baseline 979) — it GREW because other agents keep adding raw SQL while the ratchet is non-blocking.** To actually reach the floor, the ratchet must flip to `-Enforce` (coordination across agents) AND the toolchain pieces (Views/array/missing-table generation) must be built. Awaiting founder decision on scope/approach for the hard residue. |
| 2026-06-23 | **Founder directive: "it all needs to get done" — resumed JAC9 fan-out.** Re-classified live worklist via `bin/classify-raw-sql.ps1`: **41 CONVERTIBLE now** (single-table, generated CRUD exists), 34 NEEDS-TABLE, 244 COMPLEX (→Views), 102 TRANSACTIONAL (→JAC10 recipe), 31 sanctioned-lane. Confirmed the per-module compile-gate (`bin/check-module.ps1`) runs green in-session. **Batch 4 landed (`61681d348`): ScriptBuilderRoutes — 5 raw `audit_log` INSERTs → `AUDIT_LOGCrud.batchCreateAUDIT_LOG`** (16→11 raw in-module), compile-gated, ratchet tightened **979→972**. Remaining CONVERTIBLE worklist (36) is the next serial batches: Auth*/Portal sessions (users/portal_users/portal_sessions/portal_email_confirmations), Uat/WorkflowReviewGatesAttest audit_log reads, Mock/Staging claims, Eligibility/Router eligibility, Partner erx. **Note:** compile-gate writes to a shared `temp_chk/` dir, so conversions are done SERIALLY (no parallel compile fan-out in this tree); commit fast per batch (shared-tree `git add -A` sweeps). |
| 2026-06-23 | **Batch 5 (`591448aaf`): StagingRoutes clear-dlp `audit_log` insert -> AUDIT_LOGCrud** (compile-gated, ratchet 972->971). **Key re-finding that refines the worklist: the classifier's "41 CONVERTIBLE" over-counts.** Empirically, the only *clean call-swap* shape is the `audit_log` INSERT (that schema is `batchCreate`-safe; proven in prod), and those are now essentially exhausted (ScriptBuilder x5 + StagingRoutes x1 this session). The remaining ~35 "convertible" entries are NOT trivial swaps: (a) **INSERTs blocked by the NOT-NULL-default-column landmine** ([[jac-jeo-unset-fields-bind-null]]) - e.g. `notification_deliveries` (created_at/updated_at NOT NULL now() defaults; documented raw-by-necessity in-code) and `erx_audit_events` (default id/created_at) - these 500 under `batchCreate` and need a **generator sparse-insert / DB-default-aware fix** before they can convert; (b) **reads/updates** (users/sessions/eligibility/claims/appointments) - need the `readX`+iterate / read-then-`uidUpdate`-with-dirty-flags idiom and **behavioral verification via the deploy `uat-characterize` gate** (can't run locally); (c) **transactional/auth contexts** - JAC10 recipe + extra care. **Net: the genuinely-cheap raw-SQL removal is done; the rest is gated on (1) a generator default-column fix, (2) the Views program, (3) JAC10 route conversions, (4) the shadow-deploy->uat-characterize->promote loop for auth/money, (5) Copilot 272.** Documented multi-session; resumable from this table. Ratchet at 971. |
| 2026-06-23 | **Batches 6-9 (serial, each compile-gated + fast-committed): 11 raw sites removed total this session (979 -> 962).** `WorkflowReviewGatesAttest` actor-existence `SELECT 1 users` -> `readUSERS` (`772b6a1b0`); `KanbanCardOverrides` practice-ownership `SELECT 1 practices` -> `readPRACTICES` (`df18f687a`); `AdminSeedAuthSlaScenarios` resolve-patient/payer SELECTs -> `readPATIENTS`/`readPRACTICE_PAYERS` w/ `setTop("1")` (`ffd74277e`); `StagingSeedDashboard` claims NOT-NULL-ref SELECT -> `readCLAIMS` w/ `isNull` guard for nullable `rendering_provider_id` (`af6353d00`); plus ScriptBuilder x5 + StagingRoutes x1 audit_log inserts (earlier rows). **Idioms now established + proven in-session:** existence-check (`readX` + `size()>0`), pick-one (`setWhereClause` + `setTop("1")` + first JEO), nullable-field read (`isFIELDNull()` guard), audit insert (`batchCreate`). **STRONG EMPIRICAL FINDING: the classifier's "41 CONVERTIBLE" over-counts badly** - on per-site inspection many are NOT clean swaps and were correctly skipped: `ChargeReview L174` (already author-marked SANCTIONED - ORDER BY computed-boolean w/ bound param); `MockServices L319/329/340` (column-to-column SET `total_paid=total_charge`, `LEAST`/`GREATEST` fns, subquery WHERE); `AdminPortalUsers documents` (caller-owned-conn batch txn -> JAC10); `notification_deliveries`/`erx_audit_events` inserts (NOT-NULL default-column landmine -> needs generator sparse-insert); most `SELECT 1` hits are EXISTS/JOIN subqueries (-> Views). **NET: the genuinely-clean residue is nearly exhausted; remaining convertibles are auth/portal (sensitive, need deploy-gate), data reads w/ field-mapping (doable, verify via deploy-gate), or actually-sanctioned/complex/transactional. Per-site inspection is mandatory - do NOT trust the classifier's CONVERTIBLE count as a work-list of clean swaps.** Ratchet 962. |
| 2026-06-30→07-04 | **JAC9 route-layer program COMPLETED.** Multi-session fan-out finished every reachable conversion: PATIENTS 58-field regen (06-30, w/ migration-028 sequencing lesson: never regen ahead of the migration), APPOINTMENTS/eRx/CLINICAL_ORDERS regens, six new tables generated 07-04 (RBAC_ROLES for AgentMR81's rbac reads, PRACTICE_LOCATIONS, scheduling trio, SCRIPT_BUILDER pair) with the proven new-table recipe (DDL XML + Make + Components → generate → explicit javac of the new Crud). Final classification (445 route-layer sites): **CONVERTIBLE 0 · needs-table 0 · 193 sanctioned · 162 →Views · 58 txn · 22 lane**. Baseline frozen 995 → `-Enforce` flip proposed to ALL with an objection window. |
| 2026-07-01→07-04 | **JAC12 incident + full revert (`57bfd88bb`).** The NOT-NULL create guard broke prod creates (PASSWORD_RESET_TOKENS timestamp → signup boolean → PROVIDERS → APPOINTMENTS → eRx strings; fleet reports from AgentCICD/MR81/DLP all correct). Root cause: `PropertyValue` typed getters throw on empty values; golden bed validates emit-shape only. Reverted for all types; auto-binding type defaults REJECTED (silently corrupts DEFAULT-true columns like `is_active`). Runtime behavior bed built (psql-free JDBC BedDdl runner) — the validation layer JAC12 lacked. |
| 2026-07-04 | **JAC13 landed (`abe639ade`)** — sparse create: unset NOT-NULL columns omitted from the INSERT so DB defaults apply; unset NULLABLE stays on the legacy atomic batch (bed caught the atomicity break pre-land). Bed 59/0 incl. new `c23` runtime unset-column test; 105/105 Cruds regenerated. Future NOT-NULL column adds no longer need per-route explicit binds. |
| 2026-07-04→05 | **SEV1-1651 owned + ratchet ENFORCED.** Build 1651 shipped the JAC13 Cruds without `JacSparseCreateHelper.class` in `phase1Classes` (compile-classpath ≠ shipped runtime) — ALL generated creates 500ed; AgentDLP hotfixed same-day. New preflight packaging gate `f2dd3511f` (constant-pool scan, would have caught 1651). Objection window closed clean → **raw-SQL ratchet flipped to hard-fail** (`7c1aa9105`, baseline 1009). |
| 2026-07-06 | **Production validation + audit-trail close-out.** DLP7 20/20 GREEN on live 1664 (JAC13 + packaging fix hold; validation ask closed). Audited all 13 re-baselined sites (1005→1015→1018: ReportsRoutes analytics ×5, BackupRoutes DR/ops ×5, PortalMfaRoutes ×3) — correctly classed, no disputes. Committed the stranded third emitted tree from the JAC13 regen (`53bf9dc20`, 364 files, byte-identical to what 1664 served). Verified JAC4/JAC8 artifacts deleted and write-reply ratchet at `uncheckedCeiling: 0` → JAC3/4/5/8 rows closed. USER_MFA SECRET 64→512 regen in flight on the M7-18 lane (theirs, not re-done here). |

---

## Review Epilog — 2026-06-23

Reviewed 2026-06-23 as part of a full PracticeForceOne wiki truth-pass. Status: CURRENT.

- Verified against repo evidence: commit `5da73b772` (J9.3 STRICT flip) and `750c7f8bc` (JAC1/JAC2 JacHttp mechanism) both exist in git log; `util/JacHttp.script` is present; raw-SQL ratchet baseline = 979 (`bin/raw-sql-baseline.json`, total 979) and the latest live count of 987 matches the most recent AgentJAC commit (`d6573d6c3`); JAC9 batches 1-3 (8 named modules) confirmed in git history. No stale build numbers (doc never stamps the local generated counter as live).
- No corrections needed: links already use relative `[Page](Page.md)` form (no `[[wikilinks]]`); deploy guidance in section 6 already uses the hermetic Cloud Build path (`cloudbuild-deploy.yaml ... _RUN_SERVICE=claimsprocessing-api`); MR/platform references are consistent with current truth (MR6 delivered, MR7 active; STRICT default).
- Flag: the "build 1591" attribution for the STRICT flip is a historical/when-shipped reference and could not be independently re-confirmed (commit `5da73b772` is verified; the exact build number is not). Left as-is; non-load-bearing for current state.

## Review Epilog — 2026-07-24

- JAC lane queue confirmed empty as of 2026-07-06. JAC13 (sparse create) production-validated on build 1664 (DLP7 20/20 GREEN). SEV1-1651 packaging gap closed by preflight constant-pool gate (`f2dd3511f`). Raw-SQL ratchet ENFORCED (baseline 1018, release-preflight hard-fail).
- Status banner in §0 is accurate: route-layer CONVERTIBLE=0, ratchet enforced, write-reply ratchet at uncheckedCeiling:0.
- Remaining open buckets (Views program 162 join reads, txn conversions 58, CopilotOrchestrator 272) are volume work, not risk. Toolchain is complete for all of them.
- JAC4 (injector/patch layer) and JAC8 (boundary heuristic) both verified ABSENT from bin/ — correctly closed. JAC6 (stale ServiceJeo source) remains open as noted.
