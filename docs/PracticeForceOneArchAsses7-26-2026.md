---
title: "PracticeForceOneArchAsses7 26 2026"
---

> **CURRENCY NOTE (2026-08-08):** the current assessment is
> [practiceforceoneArchitectureAssessment08-08](practiceforceoneArchitectureAssessment08-08.html)
> (overall A-; E1/E2/E6/E7 remediated with live proof; E3/E4/E5/E8/E9 program in flight).
> This 7-26 page remains the lane charter and the §5 historical queue record.

# PracticeForceOne Architecture Assessment — 2026-07-26

Deep-dive assessment of `jac2024/app/com/claimsprocessing` for (1) architectural purity, (2) JAC-pattern adherence, and (3) artifact relevance. All findings are from fresh evidence gathered 2026-07-26: the four guardrail scripts were run live, plus targeted static scans of `server/`, `util/`, `data/`, and the repository root.

**Overall verdict: the load-bearing architecture is in very good shape — every automated guardrail passes or warns only marginally, the router split is fully consistent, and zero non-JAC SQL access sites exist. The real debt is not structural; it is hygiene and metadata-purity: ~940 regeneration artifacts inside `data/`, 204 loose files at the app root, 112 uncommitted modified data scripts, stale governing docs, and a handful of definitions still hardcoded in Java instead of living in the Definition Repository.**

---

## 1. Evidence baseline (what was run)

| Check | Result |
|---|---|
| `bin\check-jac-architecture.ps1` | **PASS — 0 failures, 0 warnings.** Forbidden layers (`api/`, `services/`, `repositories/`, `entities/`, `gateway/`) absent; router + canonical schema/views XML present; generated data scripts cover all canonical XML tables; **non-JAC SQL/access source lines: 0** (4,227 prepareStatement / 353 createStatement / 7,390 getConnection sites, all inside generated or approved JAC paths; exactly 1 DriverManager reference). |
| `bin\check-generated-data.ps1` | **PASS** — generated data coverage complete. |
| `bin\check-write-reply-ratchet.ps1` (M7-61) | **PASS — 100% adherence.** 346 write call-sites: 277 reply-checked, 69 explicitly acknowledged best-effort, **0 unchecked**. |
| `bin\check-where-clause-ratchet.ps1` (M7-3) | **WARN** — review-class concatenating `setWhereClause` sites grew 154 → 157 (+2 `util/PatientAllergiesRoutes.script`, +1 `util/PatientProblemsRoutes.script`). See §3.2 — the new sites are actually pre-escaped and safe; the baseline is stale. |

---

## 2. Architectural purity

### 2.1 Monolith pattern — CLEAN

- **All HTTP endpoints live in the sanctioned pattern.** `server/ClaimsProcessingRouter.script` contains zero inline `"/api/..."` endpoint definitions; it is pure bootstrap: connection-pool setup, static-asset handlers (`ui/public`, portal), and **461 `Routes.register(...)` delegations**. A repo-wide scan found **no `createContext` call outside `server/` and `util/`** — no rogue endpoints in `ai/`, `business/`, `pipeline/`, `edi/`, `scripts/`, or `tests/`.
- **Router ↔ module registry is perfectly bidirectional.** 461 `util/*Routes.script` modules exist; 461 are registered; zero orphan modules, zero dangling registrations.
- **Note:** the router is now **9,932 lines**, not the "≈2.4k" recorded in `CLAUDE.md` (MR4 A2). The growth is registration blocks, not endpoint logic, so the architecture holds — but the doc figure is stale and each registration block costs ~7 lines. A table-driven registration loop would collapse ~3,200 lines if line count ever matters.

### 2.2 Unified Persistence Contract — CLEAN with one stale claim

- Generated JEO/CRUD is demonstrably the relational spine: the write-reply honesty rule is at 100%, and all direct SQL sits inside generated code or approved exception categories (`JAC-ApprovedRawSQL.md` marker convention).
- **The JAC generator root-cause fix (Option A) has landed.** Generated `uidUpdate*` (verified in `data/CLAIMSCrud.script`) now delegates to `com.esarks.jac.JacUidUpdateHelper.dirtyAwareUidUpdate(...)` (marker `A.1.a`), with the legacy SET-every-column bind retained only as the fallback path, and strict/log error-policy gates wired (JACJEO J4.2/J3.2). **`CLAUDE.md` "Immediate Priorities #1" still lists this as the outstanding top priority — it is done and the doc should be updated.**

### 2.3 North-star (metadata-is-the-platform) tensions — the real purity gap

These do not violate the JAC monolith rules, but they violate the founder directive that *applications are assembled from definitions by generic runtime engines*:

1. **Definitions hardcoded in Java.** `util/AppealTemplatesRoutes.script` returns three appeal templates built inline with `JSONObject.put(...)` — no DB, no practice scoping, and (notably) no auth check on the endpoint. Under the per-practice-definitions directive these belong in the Definition Repository as a definition type. Similar hardcoded-reference patterns should be audited across the reference/stats routes.
2. **~350 specialty route modules are code, not templates.** The `util/` catalog carries one scripted module per specialty (`AcupunctureRoutes`, `BariatricSurgeryRoutes`, `CardiacEPRoutes`, …). They are structurally uniform — exactly what the directive says should be *templates composing reusable modules* executed by an engine. This is the largest single divergence between the shipped shape and the platform north star; it predates the 2026-07-25 stop on CF catalog expansion and does not need immediate action, but any *new* specialty surface should go through definitions, not a new `util/*Routes.script`.

### 2.4 Tenant scoping — mostly clean, 3 to review

Of 461 route modules, only **19 contain no practice/org scoping token at all**. Sixteen are legitimately global (auth/registration flows, FHIR metadata, CPT/ICD-10/medications reference stats, clearinghouse webhooks, payer master). Three deserve review:

- `AppealTemplatesRoutes.script` — hardcoded content, **no JWT validation**, no scoping (see §2.3).
- `AdminDbConnectionsRoutes.script` — 45 lines, admin surface with no tenant token; verify it enforces an admin role via `SecurityFilter`.
- `PortalQuestionnairesPreCheckInRoutes.script` — 346 lines touching patient-adjacent questionnaire data with no practice dimension.

---

## 3. JAC-pattern adherence

### 3.1 Conformant

- **JSON:** `org.json.JSONObject`/`JSONArray` is the norm. The 289 files matching a hand-built-JSON pattern turned out to be almost entirely **catch-block fallback literals** (e.g. `sendJson(ex,500,"{\"error\":\"internal error\"}")` when `JSONObject` itself throws) — sanctioned and arguably correct.
- **Safe JEO getters and reply-checking:** enforced by the M7-61 ratchet at 100%.
- **Escaping:** the dominant idiom is the sanctioned inline `.replace("'", "''")` into a `safeXxx` variable, with `SqlSafe.lit()` appearing in newer code.

### 3.2 Deviations

1. **Where-clause ratchet WARN (+3).** The new sites in `PatientAllergiesRoutes.script:60,91,123` and `PatientProblemsRoutes.script` concatenate *pre-escaped* variables (`safePatId = patientId.replace("'", "''")` a few lines above) — safe in substance, invisible to the ratchet's inline-escape heuristic. **Action:** either convert the six-ish interpolations to `SqlSafe.lit()` (canonical form, keeps the ratchet meaningful) or re-baseline with an audited note. Leaving the WARN standing trains people to ignore it.
2. **JAC-unsafe regex forms: 11 occurrences in 6 files.** `\\d` / `\\.` / escaped-pipe forms appear in `AdminPortalUsersRoutes.script:892`, `InputSanitizer.script:189`, `JsonHelper.script:382`, `RequestLogger.script:310`, `SecurityFilter.script` (6 sites), `ValidationHelper.script:51`. These currently compile and ship, so they are guideline violations rather than live bugs — but they are exactly the class the JAC-safe rule exists to prevent, and 4 of the 6 files are shared security/validation infrastructure. Low-effort cleanup: `[0-9]` and `[.]` substitutions.
3. **Generated output checked into a source directory.** Four stray compiled artifacts sit in `util/`: `AudiologyRoutes.java`, `NeonatologyRoutes.java`, `RadiationOncologyRoutes.java`, `ReproductiveMedRoutes.java` (same timestamps as their `.script` twins). JAC emits `.java` during compilation; these should not live beside sources — delete and, if possible, ignore-pattern them.

---

## 4. Artifact relevance and hygiene

### 4.1 `data/` — canonical spine buried in regeneration debris

The canonical content is 230 `*.script` + 235 `*.xml`. Around them sit **~940 non-canonical files**:

| Type | Count | Assessment |
|---|---|---|
| `.bak` | 360 | Regeneration backups (incl. host-suffixed ones like `CLAIMSCrud_Crud.xml-ESARKSLATITUDE.bak`). Dead weight; archive or delete. |
| `.new` | 348 | **Regeneration output that may never have been promoted** — includes `CLINICAL_FORM_INSTANCESCrud.new` and the order-worklist views. Each `.new` is either already applied (delete) or a pending regen (a silent correctness risk). Needs a one-time triage. |
| `.html` | 223 | JAC-generated per-table doc pages. Harmless but belong in a docs output dir, not the data source dir. |
| `.sql` / `.log` / misc | ~137 | `.sql` likely DDL echoes (canonical DDL lives in `ddl/`, 101 files); 10 `.log` files are pure debris. |

### 4.2 Unreferenced generated CRUD (22 classes)

These `data/*Crud.script` classes have **zero references from `util/` or `server/`**: `AI_FEATURE_FLAGS`, `APPEAL_DRAFTS`, `CLAIM_ATTACHMENTS`, `CLAIM_DIAGNOSES`, `CLAIM_PROCEDURES`, `CLAIM_RISK_SCORES`, `CLINICAL_ORDER_SETS`, `CLINICAL_ORDER_SET_ITEMS`, `CODING_SUGGESTIONS`, `COPILOT_SESSIONS`, `COPILOT_TOOL_CALLS`, `COPILOT_TURNS`, `EDI_ACKNOWLEDGMENTS`, `EDI_CLAIM_SUBMISSIONS`, `EDI_FILES`, `EDI_SUBMISSIONS`, `KANBAN_MANUAL_CARDS`, `KANBAN_SCHEDULE_REQUESTS`, `PAYER_APPEALS_CONTACTS`, `PAYER_RULE_VERSIONS`, `SECONDARY_BILLING_QUEUE`, `WORKLISTS`.

Interpretation, not deletion: the EDI and copilot tables are plausibly reached via **approved raw-SQL exception paths** (transport queues, copilot writer exceptions) rather than CRUD, and some are **pre-staged backend under the Backend-Ahead-of-CF contract**. But each unreferenced class is either (a) an exception path that should eventually converge on the contract, or (b) a table whose feature never landed. A per-class disposition note in `JAC-ApprovedRawSQL.md` or the MR table would close the loop; none should be deleted without that triage.

### 4.3 App root — 204 loose files

- **72 `ci-deploy-*/deploy-*/ui-smoke-*/validate-*.log` files** — historical deploy evidence, superseded by `BUILD-STATUS.md` and the health endpoint's provenance block. Archive under `docs/archive/` or delete.
- **99 root `.md` files, 28 untouched for 60+ days** — dated worklists (`5-17-2026 Worklist*.md`), completed MR2/MR3/MR4 plans, superseded assessments (`6-8-26`, `6-9-26`). `docs/archive/post-revert-jac-2026-04-25/` is the established destination; a second archive sweep is due.
- **Binary/office debris**: three `MR2UseCaseTesting*.docx`, three `.pptx` decks, `icd10cm-April-1-2026-XML.zip` (+ extracted CSV), screenshots, `Napkin.jpg`. Reference data belongs in `config/`/`ddl/`; presentations belong outside the app tree.
- **Dead/legacy dirs**: `web/` is empty (delete); `tmp/` holds 9 stragglers; `pfo-wiki-sync/` (15 files) is documented read-only legacy with no sync — a deletion candidate pending founder OK.
- `node_modules` at root (7.5 MB) plus a second one under `scripts/` — expected for the `.mjs` tooling, fine.

### 4.4 Working-tree drift (operational risk)

`git status` shows **112 modified `data/*` files uncommitted** plus 1 untracked migration (`ddl/migrations/034_clinical_documents_domain.sql`). In a checkout shared by many agents, under OneDrive (which has previously reverted committed work mid-session), a large uncommitted regen is the single most likely way to lose work or ship a half-applied regeneration. Whoever owns the current regen should commit it (with pathspecs, per the shared-repo rule) or roll it back promptly.

### 4.5 Stale governing documentation

- `CLAUDE.md`: router "≈2.4k lines" (now 9.9k); "Immediate Priorities #1" generator fix (done — §2.2); dual-lane deploy description is current but the A2 figures aren't.
- `DocumentationIndex.md` (2026-06-22): still describes CI/CD as "Codex-owned" and points at `CodexSteps.md`; CI/CD passed to AgentMR7 on 2026-07-06/07.
- `FileTree.md`, `HowToInventory.md`, and the dated assessment files predate the current layout.

---

## 5. Ranked recommendations

1. **Commit or revert the 112-file `data/` drift and the untracked migration** — highest loss-risk item, near-zero effort. *(Owner: whoever ran the regen; likely AgentDB lane.)*
2. **Triage the 348 `data/*.new` files** — determine applied-vs-pending once, then delete; a pending unapplied regen is a silent correctness bug.
3. **Clear the where-clause ratchet WARN** — convert the PatientAllergies/PatientProblems sites to `SqlSafe.lit()` (preferred) or re-baseline with an audit note. Keep the ratchet green so warnings stay meaningful.
4. **Delete the 4 stray `util/*.java` files** and add an ignore rule for generated `.java` beside `.script`.
5. **Sweep the app root**: archive the 72 deploy logs and the 28+ stale `.md` files into `docs/archive/`; remove `web/`, office binaries, and (with founder OK) `pfo-wiki-sync/`.
6. **Fix the 11 JAC-unsafe regex sites** in the 6 shared util files — mechanical, and 4 of the files are security infrastructure.
7. **Move hardcoded definitions into the Definition Repository** — start with `AppealTemplatesRoutes` (also add auth), then audit reference/stats routes. This is the incremental path back toward the metadata-is-the-platform north star.
8. **Write per-class dispositions for the 22 unreferenced CRUD classes** (raw-SQL exception / pre-staged backend / dead) in `JAC-ApprovedRawSQL.md`.
9. **Refresh `CLAUDE.md` and `DocumentationIndex.md`** — mark the generator fix complete, correct the router figure, replace Codex-CI/CD references with the AgentMR7 dual-lane reality.
10. **Longer-term (paper only, post-August):** table-driven route registration in the router, and an engine/template path for specialty surfaces so the 350-module specialty catalog stops growing as code.

---

## 6. Addendum — remediation executed later on 2026-07-26 (AgentARCH)

The founder appointed AgentARCH as architecture purity steward after this assessment published; the following §5 items were then executed the same day.

### 6.1 Code fixes (commit `d33cd87f2`, all 8 touched modules compile-verified via `bin/check-module.ps1`)

- **Rec 3 DONE** — the three new where-clause sites in `PatientAllergiesRoutes`/`PatientProblemsRoutes` converted to canonical inline `SqlSafe.lit()`; ratchet re-run: **PASS at baseline 154** (was WARN 157).
- **Rec 6 DONE** — all 11 JAC-unsafe regex forms eliminated from `util/` (`\d`→`[0-9]`, `\.`→`[.]`, semantically identical Java regex) in AdminPortalUsersRoutes, InputSanitizer, JsonHelper, RequestLogger, SecurityFilter, ValidationHelper. Re-scan finds zero.
- **Rec 4 DONE** — the 4 stray generated `util/*.java` files removed from git (~3,400 lines).
- **Rec 9 PART DONE** — `CLAUDE.md` corrected (generator dirty-flag fix A.1.a marked verified-landed; router figure fixed to 9.9k registration-only lines). `DocumentationIndex.md` Codex-CI/CD staleness still open.

### 6.2 Hygiene sweep (recs 2 and 5)

Everything deleted below was **untracked and already gitignored** (`*.log`, `*.bak`, `data/*.new`, `data/*.html`) — recognized byproducts, not source; no git history was touched by the deletions.

| Action | Detail |
|---|---|
| `data/*.bak` — **360 deleted** | Regeneration backups; canonical scripts remain in git. |
| `data/*.new` — **345 of 348 deleted** | Triage rule: deleted only where the live counterpart (`.script`/`.xml`) exists and is the same age or newer — i.e. the regen was applied. **3 orphans KEPT and flagged**: `OrderWorklistView.new`, `OverdueOrdersView.new`, `ResultInboxView.new` — generated views whose `.script` was never promoted; regen owner must adopt or discard. |
| `data/*.html` — **223 deleted**, `data/*.log` — **10 deleted** | JAC-generated per-table doc pages and run logs; regenerate on demand. |
| Root `*.log` — **72 archived** | Moved to `docs/archive/local-logs-2026-07-26/` (stays untracked/gitignored — no repo bloat; deploy evidence remains recoverable). |
| 8 dated root docs — **archived via `git mv`** | `5-17-2026 Worklist(*).md`, `6-8-26 Assessment/Remediation Plan`, `6-9-2026 UAT Inventory/Quality Audit (csv+md)`, `6-9-26 Assessment.md` → `docs/archive/root-docs-2026-07-26/`. Reference check first: only other stale/legacy docs pointed at them. Root `.md` count 99 → 93 (more candidates remain — conservative first pass). |
| `web/` (empty) **removed** · `tmp/` — **CORRECTION: restored** | `tmp/icd10-cm-2026-apr` was deleted in the sweep, then found to be **tracked** reference data (the tracked-check had covered only the root copies) and fully restored via `git restore` the same afternoon — 9 files, nothing lost. Removing `tmp/` properly is a tracked-content decision for the founder. |

**Deliberately left alone:** the 112 uncommitted modified `data/*` files + untracked migration 034 (regen owner's in-flight work — flagged in AGENTS.md, not mine to resolve); tracked root binaries (pptx/docx/xlsx/zip/csv/pngs — deliberately committed, founder's call); `pfo-wiki-sync/` (documented read-only legacy, deletion needs founder OK); MR4 planning docs (still referenced from `CLAUDE.md`); `node_modules` (used by the `.mjs` tooling).

### 6.3 Deploy-lane diagnosis, same afternoon — "stuck deploy" root-caused; build 1975 shipped

The founder reported the deploy looked stuck. Findings, in evidence order:

- **The lane was never wedged**: GCS deploy lock FREE, zero ongoing Cloud Builds, last five builds SUCCESS, live service healthy on build 1974.
- **The real overnight blocker** was a phase0 failure at 02:42 (262 javac errors): `util/ClinicalDocumentsRoutes` referenced `CLINICAL_FORM_INSTANCES` setters (`setSERVICE_DATE`, `setDIAGNOSIS_CODE`, `setPROBLEM_ID`, `setROOT_INSTANCE_ID`) that were not yet in the committed generated JEO — i.e. the §4.4 regen-drift window, exactly as flagged. The regen owner's commits closed the gap; phase0 re-verified **557/557** before relaunch.
- **Two honesty-gate refusals surfaced platform traps** worth recording:
  1. phase0/check-module rebuild **tracked** `.class` artifacts under `jac2024/classes/` — anyone compiling must commit the rebuilt classes (pathspecs) or the next deploy refuses. Committed as `49cbcdef9` (14 classes, including `PortalMeRoutes`/`WorkflowsRoutes` catching up to their already-committed sources).
  2. `cloud-deploy.ps1`'s dirty check counts **untracked** files, so in a fleet-shared checkout `gitDirty=false` is effectively unachievable (builds 1974 and 1975 both stamped dirty). Ask filed to AgentMR7: scope the refusal to tracked changes (`git status --porcelain -uno`) since `.gcloudignore` governs the upload anyway.
- **Outcome: build 1975 LIVE** — Cloud Build `6df24a57`, commit `49cbcdef9`, safe-canary gate SUCCESS, health provenance verified (`buildNumber 1975`, DB healthy). Carries the §6.1 purity commits (behavior-equivalent) plus three other lanes' fixes. Status recorded in `BUILD-STATUS.md` / `StatusPlan.md`.

### 6.4 §5 queue — final state (evening 2026-07-26, all assignments run to completion)

| §5 item | State |
|---|---|
| 1 — data drift | **RESOLVED** by the regen owner (committed); enabled build 1975. |
| 2 — `.new` triage | **DONE 348/348** — 345 applied deleted; the 3 orphans proved to be zero-byte aborted generations referenced nowhere (incl. `ClaimsProcessingViews.xml`) and were deleted. |
| 3, 4, 6 — SqlSafe / stray `.java` / regex | **DONE** (§6.1), shipped in build 1975. |
| 5 — root sweep | **DONE** first pass (§6.2); residual candidates (office binaries, `pfo-wiki-sync/`, MR-era docs) are ⛔ **founder decisions**, listed below. |
| 7 — definitions out of Java | **CONVERGED (pending seed):** `AppealTemplatesRoutes` was rewritten same-day (concurrent lane + ARCH auth hardening merged) to read `engine_configs type='appeal_template'` per-org with auth — templates are now metadata, no deploy to edit. Open residuals: seed the 3 legacy templates into the store, and audit the reference/stats routes for the same pattern. |
| 8 — 22 unreferenced CRUDs | **DONE** — per-class dispositions written into `JAC-ApprovedRawSQL.md`: 19/22 reached via sanctioned raw paths (markers to add), `CLINICAL_ORDER_SETS`/`_ITEMS` pre-staged for the Diagnostic Order Engine, `EDI_ACKNOWLEDGMENTS` dormant transport target. Nothing deletable. |
| 9 — doc refresh | **DONE** — `CLAUDE.md` (morning) + `DocumentationIndex.md` (evening: Codex→AgentMR7 dual-lane corrected, governance pointers added). |
| 10 — paper designs | **DONE (paper only):** [Router registration table-driven design](PracticeForceOneRouterRegistrationDesign.html); the specialty-surface engine path is governed by North Star v2 / DR-4 — writing a second design doc would itself be duplication. |

**⛔ Blocked on founder (cannot be completed by any agent):** DR-1 confirmation (one line);
tracked office binaries at the app root (delete/move?); `pfo-wiki-sync/` deletion; whether the
`tmp/` ICD-10 reference extract stays tracked.

## 7. The 24-hours-later re-audit (2026-07-27 night) — every invariant held under fire

The day between the two audits was the heaviest in the project's history: ~100 commits across
eight-plus lanes, two founder broadcasts, the CDIE platform built end-to-end, a 10.5-hour deploy
blockage and its custody resolution, and the deploy pipeline rebuilt (30 → ~7 min). Re-running the
§1 battery against that churn:

| Invariant | Morning (§1) | Tonight | Verdict |
|---|---|---|---|
| Architecture check | 0 failures | **0 failures** | held |
| Non-JAC SQL access lines | 0 | **0** (prepareStatement sites grew 4,227→4,289, all sanctioned paths) | held |
| Router ↔ module registry | 461 ↔ 461 | **465 ↔ 465** — grew by 4, stayed perfectly bidirectional | held |
| New modules' tenancy | (n/a) | ClinicalEvidence/ClinicalSignature/DocumentationRecommendations born with 21-38 org/practice tokens each | born conformant |
| Write-reply ratchet | 100% (346 sites) | **100% (362 sites)** — +16 writes, every one checked or honestly marked | held |
| Where-clause ratchet | 154 baseline | **152 baseline, tightened** — grew 919→939 sites with zero new review-class | held+tightened |

**Conclusion: the guardrails scale.** The fleet added a whole intelligence platform in one day and
the invariants didn't flex — because the ratchets caught the three regressions that did appear
within minutes of each landing, and the funnel converged five would-be duplicate systems (DR-8,
DR-9, DR-13, PI-1, PI-3) before any calcified. The architecture is not clean because change was
slow; it is clean because the checks run faster than the drift.

---

*Assessment produced 2026-07-26 from live guardrail runs and static scans (§1–§5 pre-remediation; §6 records same-day remediation; §7 the day-after re-audit). Prior assessment for comparison: [PracticeForceOneArchitectureAssessment](PracticeForceOneArchitectureAssessment) (in the app root of ArchitectsCompanion).*
