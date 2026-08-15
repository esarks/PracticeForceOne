---
title: "PracticeForceOneDuplicationRegister"
---

# PracticeForceOne — Duplication Register

**Maintained by AgentARCH** under the [North Star](PracticeForceOneNorthStar.html) v2 anti-duplication
mandate: *"Challenge any implementation that creates a second way of solving the same problem."*
The founder's stated top risk is six agents independently inventing six documentation systems —
this page is the standing instrument against it.

**How it works:** every known place where a second way of solving the same problem exists (or is
forming) gets a row. Any agent may add a row; AgentARCH triages, assigns an owner, and tracks it to
one of two exits: **converged** (one canonical implementation remains) or **ruled** (the founder
explicitly blesses the coexistence). Rows are never deleted — resolved rows move to the Resolved
section with their outcome, because the register is also the institutional memory of near-misses.

_Last updated: 2026-08-01 (AgentARCH) — DR-20 ruled: kanban config is ONE governed definition namespace; the bespoke tables retire (kanban_lane_configs has ZERO rows, so it is free today). DR-18/DR-19 ruled 07-31._

## ⚡ OBJECTIVE-3 CHECKLIST (Founder Broadcast II: "eliminate every remaining duplicate identified by AgentARCH")

The open eliminations, by owner — each closes by convergence (one implementation) or founder ruling:

*(Ordered by patient-journey impact per Broadcast III — the top rows are the ones blocking the
scheduling→encounter→documentation→coding→billing pipeline.)*

| # | Elimination | Owner | State |
|---|---|---|---|
| DR-10 promote-half | Chart-history seed sections + promote coverage (0 facts = 0 inferences — the August inference substrate) | DB/CF/MR9 thread | **sharpest demo obstacle** |
| **DR-15** | **Two documentation stores, zero shared encounters** — canonical wins; reader fix live, write-parity then migrate 273. *Addendum same day:* the "Open Encounter" button collision (legacy EHR encounter vs EncounterCF) is this same seam — ruled legacy holds until the DR-15 parity bar passes, then the `nextAction` DEFINITION flips (never a hard-coded branch); one visible label ⇒ one destination, `dedupeActions` enforced. | DB (reader/migration) + CF/DLP (parity) + UI (repoint) | **RULED 2026-07-28** |
| DR-1 | One evaluator seam — **FOUNDER-CONFIRMED FINAL (Broadcast IV, 2026-07-29)**: CF = substrate, DLP = the ONE evaluator + orchestration, UI consumes only, DB = persistence, Aesthetics via shared metadata | all lanes | **CONFIRMED** |
| **DR-16** | **Canonical product inventory / lot store — RULED 2026-07-29 (founder-directed immediate ruling):** ONE specialty-neutral inventory model owned by **AgentDB**, two entities: a product catalog (linked to `service_definitions` per DR-14 — one service, linked facets, never merged into `charge_master`) and practice-scoped lot records. Writing a lot record emits **`inventory.lot_recorded`**. *Requirements DELIVERED + ACCEPTED same day* (`docs/clinical-documentation/inventory-lot-requirements.md`): **lot tracking measured existing SEVEN times** (17 files, 4+ tables — immunization/implants/injection/aesthetics/oncology/POC/rheumatology); canonical field is `expiration_date` (aesthetics renames its own outlier `lot_expiry`). **⛔ SAFETY ADDENDUM:** oncology + POC store lot numbers with NO expiry — recall traceability and expiry checks are unanswerable there today; the canonical store makes `expiration_date` REQUIRED and those two convert EARLY. Deletion ledger reserves seven rows for the converging surfaces. *Schema DELIVERED + CONFORMS (same day):* the ruled form is now the **5-entity model** ([Canonical Inventory Schema](PracticeForceOneCanonicalInventorySchema.html)) — PRODUCT / INVENTORY_LOT / INVENTORY_ITEM (serialized lifecycle incl. explant) / INVENTORY_TRANSACTION (append-only ledger) / PATIENT_ADMINISTRATION. Ruling-force invariants: **quantity is DERIVED from the ledger, never stored** ("a stored counter that fails to decrement is how inventory systems begin lying"); administration + ADMINISTER row commit in ONE DB transaction; `inventory.lot_recorded` emits from the RECEIVE ledger write. Nine specialties as rows, zero new tables. | DB (build) + Aesthetics (requirements ✓ schema ✓) + DLP (event wiring) | **RULED; schema accepted** |
| **DR-17** | **Document-type namespace — RULED 2026-07-31: a `requireDocument` ref must name what its real writer persists in `CLINICAL_FORM_INSTANCES.FORM_TYPE`.** Measured: THREE spellings exist for one concept — `procedure_note` (only gate probes write it), `procedure_note_cf` (the CF page definition), `doc_procedure_note_cf` (the rule-pack ref: NO writer, NO instances anywhere). Breadth: **16 of 21 requireDocument refs in the live Bay Area prod pack have no writer of any kind**; the one-tap action works only because it mints a document with `formType=ref` on demand, so real documentation filed through a normal surface does NOT discharge its recommendation — the founder's persist→complete→disappear break, live today. Found because a pack republish turned the deploy gate red with zero code change (the DLP-CDIE-2 scenario had pinned a catalog name; ARCH re-pinned it to the contract). Convergence: CF aligns pack refs to real writer formTypes (aesthetics `doc_*_cf` refs are already correct — their form-configs persist those types); DLP keeps the registry's `satisfiedBy` contract as the single definition. NOT a deploy blocker; IS a demo-journey gap. | AgentCF (pack refs) + AgentDLP (registry) | **RULED; convergence pending** |
| **DR-18** | **The `engine_configs type='form'` mirror — RULED 2026-07-31: RETIRE IT.** Raised by AgentCF, who used it as an audit instrument and got a wrong number from it. Measured before ruling: **zero readers** — no `getConfig` / `getConfigByPractice` / `listKeys` call anywhere in `util/`, `server/` or `ui/` names `"form"` as its config type; the only touches are `mirrorFormToEngine`'s `putConfig` and a backfill's `seedGlobalIfAbsent`. It is a **write-only store**. And it is wrong: **3,328 rows, 3,113 claiming `status:active`, against 2,448 genuinely active in the authoritative `DYNAMIC_FORMS_CONFIGURATION` — 665 rows lying.** Mechanism: `mirrorFormToEngine` runs on save and on promote (hardcoding `"active"`), but `set-default` DEACTIVATES the sibling configurations without re-mirroring them, so every superseded config stays "active" in the mirror forever. Ruling: a store with no readers cannot be "kept in sync" — there is nothing to sync it *for*. **Retire the mirror and the dual-write**; `DYNAMIC_FORMS_CONFIGURATION` (via `/api/form-configurations`, which resolves `served`) is the single source of truth for both content and status. Until it is deleted, treat it as **non-authoritative for status** — it is fine for content, fiction for state. Deletion ledger: 1 dual-write path + 3,328 rows. | AgentCF (raised) + AgentARCH (ruled) → owner for removal: whoever owns `FormConfigurationsRoutes` | **RULED; retirement pending** |
| **DR-19** | **The staging seed exists TWICE — RULED 2026-07-31: `stage/` is canonical; `ui/public/stage/` must be served, not copied.** Raised by AgentDB with the failure mode already identified: `stage/staging-seed-data.json` (read by the batch loader) and `ui/public/stage/staging-seed-data.json` (fetched by the browser Staging screen) are byte-identical twins, and **editing one leaves the other stale with no error** — the silent-divergence shape, on the fixture that defines what every demo contains. Ruling: ONE file at `stage/`, exposed to the browser by a route or a build-time copy that cannot be forgotten; the UI must never read a hand-maintained second copy. Until then the batch path is authoritative and any edit MUST touch both. Note the twin is 194 KB, so this is also 194 KB of tracked duplication in every image. | AgentDB (raised) + AgentARCH (ruled) → AgentUI/AgentDB to converge | **RULED; convergence pending** |
| **DR-20** | **Kanban configuration — RULED 2026-08-01: ONE governed definition namespace in `engine_configs`; the bespoke tables retire.** Raised by AgentDLP under the STOP rule *before* building, which is the register working as designed. They reported two stores; measuring found **three**: (a) `engine_configs` types `kanban_panel` / `kanban_card` / `kanban_override` — **563 rows**, practice+stage scoped, governed; (b) `kanban_lane_configs` — bespoke table created by an inline `CREATE TABLE IF NOT EXISTS` in `KanbanLaneConfigsRoutes:21`, **absent from `ClaimsProcessingDdl.xml`**, org-scoped only; (c) `kanban_card_overrides` — a second bespoke inline-DDL table (`ClinicalDataSchema:280`) covering the same concept as the existing `kanban_override` definition type. **The decisive measurement: `kanban_lane_configs` holds ZERO rows.** Nothing depends on it, so retiring it is free *today* and expensive the moment the founder's specialty work lands on it. Ruling: a workflow/lane configuration is a **DEFINITION** — `engine_configs type=workflow_config`, practice+stage scoped, carrying `specialty`, lane composition and transition rules. The founder's asks ("multiple ACTIVE, selected by specialty") are then a **resolution** question, which `kanban_panel` already answers, rather than new machinery — and `kanban_card_overrides` folds into `kanban_override`. Adding a specialty column + multi-active flag to `kanban_lane_configs` would work and would deepen the split; explicitly rejected. Schema-freeze note: both bespoke tables were created by inline DDL on the request path, which is separately prohibited. | AgentDLP (design) + AgentUI (readers) + AgentDB (retire the tables) | **RULED; convergence pending** |
| DR-3 | One capture→promotion path (`dynamic_forms` demoted to inbox; ONE promoter) | AgentDLP (promoter) + AgentDB (contract) | proposal filed |
| DR-4 | Specialty-as-code surfaces retire (form launcher, 79 boards) as recommendations replace them | AgentUI + AgentCF | frozen; retirement pending |
| DR-5 residual | Seed the 3 appeal templates; audit legacy pages for definition-in-code | route owner / MR8 | residual |
| DR-6 | Static context→template map absorbed by the engine | AgentUI → AgentDLP | retire-deliberately |
| DR-9 | ~~Aesthetics' 22 modules + 24 rules re-expressed in the shared namespace~~ | AgentAesthetics + AgentCF | **RESOLVED 2026-07-28** (see Resolved table) |
| DR-11 | 374 hardcoded control types out of cf-runtime.js (frozen now) | AgentCF | frozen; migration scheduled |
| DR-12 | 243 reference documents out of `label`s into the knowledge store | AgentCF + AgentDB | ruled |
| PI-1 | Documentation→Coding connection (one source of coding input) | AgentDB | in flight |
| PI-2 | CARC/RARC reference tables into the canonical DDL, then CRUD | AgentDB | ruled |

*(Resolved and off the list: DR-2 aesthetics tables, DR-7 dispositions, DR-8 path split + writer conformance, DR-10 clear-half.)*

## Open seams

| ID | Duplication | Lanes | State | Path to one system |
|---|---|---|---|---|
| **DR-1** | **Two inference/recommendation engines assigned by two governing docs.** [Documentation Intelligence](PracticeForceOneDocumentationIntelligence.html) rev 1 gave Evidence/Rule/Recommendation engines to **AgentCF** (who has already built the CDIE spine: evidence → inference → recommendation, with `becauseOf` provenance). North Star **v2** assigns "Clinical Documentation Engine + inference orchestration + recommendations" to **AgentDLP**. Unresolved, both lanes build an evaluator. | CF ↔ DLP | **INTERIM RULING ACTIVE** (below) — awaiting founder confirmation | AgentCF owns the **substrate**: rule/definition formats, module packs, terminology, the authoring surface — *what can be inferred, as metadata*. AgentDLP owns the **one runtime evaluator**: consumes CF's substrate, evaluates against live evidence, assembles the document, runs the lifecycle. CF's existing CDIE evaluator code transfers to (or is wrapped by) DLP's engine — it does not run as a second evaluator. Rule packs already authored (aesthetics 24 rules, clinical) are substrate and stay CF/Aesthetics-owned. |
| **DR-2** | **Second documentation architecture: aesthetics.** `aesthetic_treatments` / `aesthetic_intakes` / `aesthetic_consents` with their own API and zero `encounter` references — escalated by AgentUI pre-v2; v2 prohibits it explicitly ("aesthetics must prove the canonical engine is universal"). | Aesthetics ↔ DB | **RESOLVING** — self-audit already committed the retirement (tables fold into `InjectionAdministration`/`ClinicalDocument`/`Consent`; migration 031 treated as input, not competing design; `DOMAIN` column landed) | Track the three-table retirement to completion; no aesthetic writes into a bespoke store; queryable-safety columns (`lotNumber`, `productName`, `unitsOrSyringes`, `lotExpiry`, `treatmentArea`) promote per AgentDB's rule. |
| **DR-3** | **Multiple form-response stores.** Clinical answers land in `dynamic_forms`, `portal_check_in_questionnaires`, and the canonical `CLINICAL_FORM_INSTANCES` (Clinical Document contract). AgentUI's measured portal state shows the failure concretely: check-in answers reach `dynamic_forms` and never touch the chart — captured evidence nothing infers from. *(Progress: PROV-5 added a best-effort check-in→chart write-through for hub fields — one seam narrowed.)* | DB ↔ UI ↔ DLP | **OPEN — ARCH convergence proposal filed** (below) | See "DR-3 proposed path". |
| **DR-4** | **Specialty-as-code surfaces**: ~350 `util/*Routes.script` specialty modules, 79 generated specialty launch boards, the form launcher. All are "navigation through a form library" / per-specialty software — the pattern v2 retires. | UI ↔ CF ↔ ARCH | **FROZEN + RETIRE** — grandfathered as of the 7-26 assessment; may not grow; AgentUI has marked launcher/boards as transitional | New specialty surfaces are metadata only (ARCH gate). Launcher/boards retire as DLP's recommendation surface replaces them — not maintained in parallel. |
| **DR-5** | **Definitions hardcoded in Java** — `AppealTemplatesRoutes` (three inline templates, no auth, no tenancy), plus reference/stats routes to audit. A parallel "definition store" living in code. | ARCH → CF | **CONVERGED (pending seed)** — same-day: route rewritten to read `engine_configs type='appeal_template'` per-org, JWT-gated; hardcoded Java deleted | Residual: seed the 3 legacy templates into the store (empty list until then); audit reference/stats routes for the same pattern. |
| **DR-6** | **Static context→template map in `engine_configs`** (AgentUI interim scaffolding). A second, non-inferring way to answer "what documentation applies here". | UI → DLP | **RETIRE DELIBERATELY** — recorded by AgentUI so it dies on purpose | Absorbed by the DLP engine once DR-1's evaluator evaluates real rules; register tracks so it does not survive by inertia. |

| **DR-10** | **Staging clear/promote was a hand-maintained mirror of the table catalog** (78/113 tables invisible; promote drops the clinical payload). | ARCH (clear-half) → promote-half owner TBD | **CLEAR-HALF CONVERGED (live build 1993, founder-triggered):** `CleanDb` discovers the live catalog (`information_schema` minus a DECLARED preservation whitelist — accounts/workspace, Definition Repository, reference catalogs, knowledge); fail-loud atomic truncate; one implementation behind BOTH triggers (`reset-and-reseed.bat` + `POST /api/staging/clear-all-data`); staging UI renders the discovered catalog (never a third mirror). **PROMOTE-HALF OPEN:** the RCM-era entity chain still drops clinical content on promote — the August demo's seed needs it. | Promote-half: extend the promote path to the clinical spine (catalog/FK-driven, not more hand methods) or seed clinical demo content post-clear. ⛔ founder assigns owner. |

## Interim ruling — DR-1 (AgentARCH, 2026-07-26, until the founder confirms or overrides)

Issued under the v2 ARCH mandate so that neither lane stalls and neither builds a second evaluator:

1. **One evaluator, owned by AgentDLP.** AgentCF's CDIE evaluator is the seed implementation — it
   transfers to or is wrapped by DLP's Clinical Documentation Engine. From today, CF does not extend
   evaluator *runtime* code; DLP does not invent rule/definition *formats*.
2. **Substrate is AgentCF's.** Rule schemas, module/template packs, field catalog, terminology,
   inheritance, the authoring surface (Documentation Rules editor) — CF-owned, expressed as
   metadata, versioned in the Definition Repository, per-practice scoped.
3. **Evidence keys are a shared contract**, negotiated once (AgentAesthetics has already asked for
   the vocabulary; DLP publishes it, CF and Aesthetics conform).
4. Anything this ruling gets wrong is cheap to reverse *now* and expensive after two engines exist.
   ⛔ **Founder: confirm or override in one line.**

## DR-9 RULED — two module/rule libraries (AgentARCH, 2026-07-26 late)

The founder's named risk, materialized: CF's `docs/clinical-documentation/` (8 modules + 8 rules,
**renders**, live as `engine-config cf_modules`/`cdie_rule`) vs Aesthetics' `docs/documentation-engine/`
(22 modules + 24 rules, **richer semantics**: `emitsEvidence`/`completeWhen`/`persistsTo`, no
runtime consumer). Both lanes proposed the same merge; CF asked ARCH to arbitrate. **Ruling:**

1. **One namespace each:** modules = `engine-config cf_modules`; rules = `engine-config
   type=cdie_rule`. No other module/rule store may exist after migration.
2. **Schema base = CF's render contract as carrier, Aesthetics' semantics as REQUIRED extensions**
   (`section-contract-v2.md`): keep `{title, version, sections[fields]}` rendering; adopt
   `emitsEvidence`, `completeWhen`, `persistsTo`, `reuseScope`. Provenance: `becauseOf` (machine)
   required, `explain` (human) recommended — same idea, both carried, never forked.
3. **One condition vocabulary:** the CdieEvaluator operator set is the base; Aesthetics' three asks
   (`notIn` vs another evidence value, temporal comparison, `@param` interpolation) are added TO it —
   no second dialect.
4. **Migration:** Aesthetics' 30 artifacts re-expressed as v2 instances in the shared namespace;
   CF's upgraded in place; `docs/documentation-engine/` retires when empty. After the window, a
   second library anywhere is a rejection on sight.

Also registered from AgentDLP's live truths: **`/api/operations` 404** — the Operations Registry
(the recommendation→work metadata seam, designed 07-19) never shipped. Not duplication — a MISSING
canonical seam; tracked here so nobody fills it with a bespoke shim.

## DR-9 AMENDMENT — the publish pipeline forked; publish FREEZE ruled (2026-07-27 night)

The one-namespace ruling was honored at the KEY but forked at the FILE: two rule-pack files (32
rules vs 51, sharing the original 8) both published to `engine-config type=cdie_rules key=default`
— **last writer silently deletes the other's 24 or 43 unique rules.** Partly the original ruling's
ambiguity (it named a file while the platform pack lived elsewhere) — owned by ARCH. **Ruled,
effective immediately:** publish FREEZE until merged; ONE file
(`docs/platform/cdie-rules-default.json`, Aesthetics migrates its 24 in); completability gates
publication (non-dischargeable kinds held back, registry gap named); `check-cdie-rules.mjs` becomes
the mandatory publish gate; ONE writer; and a **no-silent-delete guard** — the publisher refuses
when live rule ids are absent from the pack unless explicitly `--allow-removals`-named. Silent
deletion becomes structurally impossible. Upstream blocker confirmed: the runtime evaluator's
dotted-key/alias gap keeps most of BOTH packs from firing in production — the platform's
highest-leverage item tonight, with @AgentDLP.

## DR-15 RULED — two documentation stores, ZERO shared encounters (AgentDB stop-and-route, 2026-07-28)

Measured on production: `encounter_notes` 273 rows/273 encounters (what charge review + coding
read), `clinical_form_instances` 32 encounters (the canonical Clinical Document + CDIE engine),
**overlap: 0** — the documentation half and the billing half of the platform had never described
the same visit, which is why no encounter anywhere had both a clinical document and a claim.
`encounter_notes` is a genuine parallel model (own S/O/A/P + note_text shape, own sign/amend/
version lifecycle via `PUT /clinical/encounters/{id}/note`), not a cache.

**RULED — canonical wins (AgentDB's option 1), staged demo-safe:**

1. **`clinical_form_instances` is THE system of record for encounter documentation** — restating
   DR-3 rule 1; `encounter_notes` is hereby a **legacy store in convergence**, and no NEW reader or
   writer may target it (readers go through the canonical read path with the legacy fallback;
   writers create Clinical Documents).
2. **AgentDB's reader fix stands** (`ed1550c9a`: suggest-codes prefers canonical, falls back to
   legacy — with zero overlap this regresses nothing and makes canonical visits billable for the
   first time). The fallback LIVES until migration completes, then is removed.
3. **Write-path convergence BEFORE data migration** — otherwise the 273 chases a moving target.
   Per the founder's no-retirement-below-parity rule, the legacy `/note` endpoint stays writable
   until the canonical path reaches **lifecycle parity**: S/O/A/P narrative as a template
   composition (@AgentCF — likely mostly exists in the substrate), and draft→sign→amend-only
   semantics with version history on Clinical Documents (@AgentDLP — the signature/cosign work is
   already in the pack). @AgentUI repoints the note-authoring surface only when both confirm.
4. **Migration after parity (post-demo acceptable):** @AgentDB maps the 273 (S/O/A/P + note_text →
   canonical modules) with provenance (`source='encounter_notes-migration'`, original id), then
   `encounter_notes`/`_versions`/`_amendments` become **read-only audit history** — the signed-note
   legal trail is never destroyed, it just stops growing.
5. **August demo path is already whole:** the demo documents via CDIE/canonical, and item 2 makes
   those visits codeable → billable today.

## DR-14 RULED — clinical service attributes were homeless; the rule pack became the service catalog (AgentAesthetics, 2026-07-27 night)

Measured: 53 service-catalog enumerations across 13 rules + a product→interval lookup inside rule
params — because `CHARGE_MASTER` is billing-only and no clinical-service-attribute home exists,
"adding a service means editing rules," and lot-tracking is expressed twice (aesthetics + vaccines).
**Ruled: `service_definitions` as a CANONICAL ENTITY beside the charge master, linked not merged**
(one service, two facets — clinical attributes must never depend on revenue-cycle configuration;
a third-party-billing practice would otherwise lose clinical gating). AgentDB builds per
`docs/clinical-documentation/service-attribute-contract.md`; migration order endorsed as proposed
(populate attributes BEFORE flipping rules — absent-reads-false would silently open every gate).
Rules then shrink from enumerations to attribute reads.

**DR-2 update (same post): retirement GREEN-LIT** — all three aesthetic tables hold 0 rows across
all 5 practices, so retirement is pure code+definition deletion (route + registration + tables),
with canonical-entity bindings as the forward path, not a precondition.

## DR-13 RULED — two per-user definition-stage switches shipped the same day (AgentCF self-report, 2026-07-27)

`cf.stage` (server-resolved, forms) and `nav.stage` (client-resolved, menus/kanban) landed
concurrently — same question answered twice, two Settings cards side by side. **Ruled: ONE key
(`definition.stage`, user_preferences), resolution SERVER-side for every definition type** — the
deciding fact being that client-side resolution makes the isolation property ("a production caller
never receives a pre-production definition") cosmetic: the API still serves it, the browser merely
hides it. One Settings card; both old keys migrate on first touch; localStorage demotes to display
cache. CF converts forms; the sidebar consumer adopts the server-resolved stage. Neither
implementation won — the property did.

## DR-11 RULED — 374 hardcoded clinical control types in cf-runtime.js (AgentCF self-report, 2026-07-27)

~700 of cf-runtime.js's 1,248 lines hardcode hyper-specific clinical control types
(`oncologyFollowup`, `copdManagement`, …): specialty logic IN the runtime — the exact §3/platform
prohibition; adding one control today = a code edit + deploy. **Ruling:** (1) **Freeze effective
now:** no new specialty control type may be added to cf-runtime.js — new needs are expressed as
generic controls parameterized by metadata (the DR-9 move, at the control grain). (2) **AgentCF owns
the migration** (catalog steward): collapse the 374 into parameterized generic controls on CF's
schedule — post-demo scale work unless a demo screen forces a slice. (3) Migration progress tracked
here; done = cf-runtime.js knows zero clinical names.

## DR-12 RULED — clinical reference documents stored in field-catalog `label`s (AgentCF, 2026-07-27)

243 of 2,475 catalog entries carry reference DOCUMENTS in `label` (median label 17 chars; these run
to 5,717 — an AED dosing protocol). Knowledge in a presentation slot. **Ruling:** labels are labels.
The content belongs in the knowledge layer — the `value_set/canonical` store AgentDB just stood up
(or a dedicated `reference` property) with the label restored to a name. **Owner: AgentCF** (catalog)
with **AgentDB** (canonical store target); CF's search-ranking defense stays until migrated.

## Pipeline integrity (rev-3 audits routed through the funnel)

**PI-1 RULED — Documentation → Coding is disconnected (AgentDB, proven live 2026-07-27).** The
canonical repository holds the encounter's structured documentation; the coding path 400s without
pasted `noteText`. Breaks broadcast points 6/7/10. **Ruling — a connection, not a new engine, per
AgentDB's own proposal:** (1) AgentDB's additive text-rendering on the existing
`GET /api/clinical-documents/encounter/{id}` — approved, already started. (2) The one-line fallback
in `CodingSuggestRoutes` (source from #1 when `noteText` absent, `encounterId` present): the coding
lane is dormant, so **AgentDB may make the change**, preserving the existing `noteText` contract.
(3) **Principle ruled: the canonical document is the ONE source of coding input** — once the
fallback lands, no new caller may flatten and paste note text (register-gated).

**PI-3 RULED — workflow step-completion evaluation (the `statusIn` fork, AgentDLP 2026-07-27).**
Three options were routed through the funnel; **ruled: reuse the board projection now** (the one
existing entity-status→journey mapping; the workflow definition already declares `lanes`/`laneOrder`/
`instanceSource` — the metadata models the relationship), with a characterization check asserting
lane-derivation agrees with the declared `statusIn` on fixtures. Per-entity reads in the workflow
engine REJECTED (entity knowledge in the runtime + per-entity rot). **Generic `read(entity,…)` —
the Unified Persistence Contract — is the ruled DESTINATION**: built once, deliberately, as its own
platform increment (owner TBD with the founder's phase plan); workflow completion migrates onto it
when it exists.

**PI-2 RULED — CARC/RARC raw reads (AgentDB self-disclosure) are NOT a violation.** Measured: no
generated CRUD exists for those tables and they are absent from the canonical DDL — there is nothing
to bypass; the real finding is a **catalog gap**. Ruling: keep the reads with a
`raw-sql-exception: reference-read (no generated CRUD exists)` marker; durable fix = add the
reference tables to `ClaimsProcessingDdl.xml` so CRUD generates, then convert. Self-disclosure noted
approvingly — that is the broadcast's protocol working.

## DR-8 RULED — documentation-recommendations path collision (AgentARCH, 2026-07-26 late)

Raised by AgentDLP the moment it appeared — the register's fastest catch. Two endpoints one
character apart: `/api/documentation-recommendations` (CDIE lane — **persists** canonical
`DOCUMENTATION_RECOMMENDATION` rows via generated CRUD, enforces `supportingEvidenceIds`) vs
`/api/documentation/recommendations` (AgentDLP — **computes** what should exist by running
`CdieEvaluator` over the published rule pack; not yet live).

**Ruling — adopt AgentDLP's own proposal, it is correct:**
1. These are complementary (compute vs persist), not duplicates — but the paths must stop rhyming.
   **AgentDLP renames to `/api/documentation/inference`** (the cheaper rename; theirs is not live).
   `/api/documentation-recommendations` remains the persisted-record surface.
2. **Composition contract:** inference outputs are WRITTEN through the canonical writer — evaluator
   `becauseOf` provenance feeds `supportingEvidenceIds`. **No second writer** of
   `DOCUMENTATION_RECOMMENDATION`; the compute path persists only via the canonical path.
3. **DR-1 reaffirmed:** `util/CdieEvaluator` is the one runtime evaluator. A third evaluator
   anywhere is a rejection on sight.

**Enforcement addendum (2026-07-26 late, AMENDED 07-27 on AgentDB's measurement):** AgentDLP found
apparent duplicates + kind-less rows from a second writer. Outcomes, evidence-corrected:
- **(a) CONFIRMED + FIXED:** the empty-`module_key` rows all came from the non-DLP writer; the
  runtime now refuses kind-less outputs (`5aefc689b`) and recommendations carry their discharging
  operation. Writer conformance achieved through the contract, as ruled.
- **(b) INDEX ASK WITHDRAWN — AgentDB measured it and was right to decline:** zero violations exist
  on `(encounter, formType, moduleKey) WHERE open`; the "×3" rows are one-per-encounter (CORRECT
  writer semantics — repeated gate runs create fresh encounters). The visible repetition is queue
  PRESENTATION (group per patient — @AgentDLP's lane). A cross-encounter patient-level constraint
  remains available but is a **clinical policy call** (it would reject legitimate rows for separate
  visits) — ⛔ founder if ever wanted. *Register lesson: rulings yield to measurement.*
- **(c) stands:** `moduleKey` is contract-required — enforced at the writer/runtime, per (a).

## DR-3 proposed path — one capture, one promotion, one document store (AgentARCH, 2026-07-26)

The pattern under all portal findings: capture reliably lands in `dynamic_forms`; only the
staff-review **merge** promotes anything; surfaces without a merge (check-in, until PROV-5) promote
nothing. Proposal, mapped to the v2 lanes:

1. **`CLINICAL_FORM_INSTANCES` is the ONE document store** (already contract-proven, versioned,
   audited, DOMAIN-dimensioned). `dynamic_forms` / `portal_check_in_questionnaires` are demoted to
   **transient capture inboxes** — never read for clinical content by anything except the promoter.
2. **One generic promoter, owned by AgentDLP** (it is evidence routing — squarely the v2 DLP lane):
   generalize the staff-review merge into a single promotion service that, for any inbox row,
   (a) writes identity/demographic **hub fields** to the chart (the existing registration merge and
   the PROV-5 write-through become two callers of the same code), (b) files the clinical answers as
   a **canonical Clinical Document**, (c) emits **Evidence** for the inference engine. Three
   outcomes, one code path, auto or staff-confirmed per form type — a definition-level flag
   (AgentCF substrate), not a new writer.
3. **Freeze rule (ARCH gate, effective now):** no new code path may write clinical answers to
   `dynamic_forms` or any new side store — new capture surfaces write a Clinical Document directly
   or enqueue into the existing inbox. A second merge implementation is a DR-1-class violation.
4. End state: the inboxes shrink to portal transport, or retire entirely once capture writes
   Clinical Documents with `status='captured'`. **Asks: @AgentDB — promotion contract (field map,
   idempotency key); @AgentDLP — own the promoter; @AgentUI — no new `dynamic_forms` readers.**

## Resolved

| ID | Duplication | Outcome | Date |
|---|---|---|---|
| **DR-9** | Aesthetics' parallel rule dialect (24 `AES-R-*` rules + 22 modules, own namespace, second publish path). | **RESOLVED — measured retirement**: one merged pack, gated publisher; first publish exposed the guard failing OPEN (misread the live shape as empty) and `--allow-removals` removing nothing — both fixed by the owning lane, retirement implemented as TOMBSTONES (engine_configs has no DELETE; never-matching condition, id stays auditable, reversible). Production measured at each step on the founder's Botox example: 41/33 recs with doubled cosmetic obligations → **30/26, zero legacy rules firing, each obligation once**. Register lessons: *a guard that cannot see what it protects reports success — validate guards against the live shape*; *removal is verified by what stopped firing, not by what the flag accepted*. | 2026-07-28 (AgentARCH) |
| **DR-8** | Documentation-recommendations path collision (full record in the DR-8 section above). | **RESOLVED — verified live on build 1984**: `/api/documentation/inference` answers (401 auth-gated), the rhyming `/documentation/recommendations` path is gone (404). One compute surface, one persisted-record surface, one evaluator. Writer-conformance addendum items remain with DB/CDIE. | 2026-07-26 (AgentARCH) |
| **DR-7** | Dormant persistence entry points: 22 zero-reference generated CRUD classes + 3 orphan `data/*.new` views. | **Dispositioned, nothing deletable**: 19/22 are sanctioned raw-path tables (per-class table now in `JAC-ApprovedRawSQL.md`; category markers to be added at sites), `CLINICAL_ORDER_SETS`/`_ITEMS` pre-staged for the Diagnostic Order Engine, `EDI_ACKNOWLEDGMENTS` dormant transport target. The 3 orphan `.new` were zero-byte aborted generations referenced nowhere — deleted. | 2026-07-26 (AgentARCH) |

---

Related: [North Star v2](PracticeForceOneNorthStar.html) · [Architecture Assessment 7-26](PracticeForceOneArchAsses7-26-2026.html) ·
[Clinical Documentation System](PracticeForceOneClinicalDocumentationSystem.html) ·
[Documentation Intelligence](PracticeForceOneDocumentationIntelligence.html) ·
[Platform Architecture](PracticeForceOnePlatformArchitecture.html)
