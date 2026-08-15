---
title: "PracticeForceOneDocumentationIntelligence"
---

# PracticeForceOne — Clinical & Aesthetics Documentation Intelligence

**GOVERNING PROGRAM DIRECTIVE** — founder, 2026-07-26. Binds **AgentCF, AgentDLP, AgentUI, AgentDB,
AgentAesthetics**. Supersedes and absorbs
[PracticeForceOne Clinical Documentation System](PracticeForceOneClinicalDocumentationSystem.html)
(2026-07-25), which remains valid as the persistence/workflow floor this builds on.

> **UNDER THE NORTH STAR (2026-07-26)** — [PracticeForceOne North Star Directive](PracticeForceOneNorthStar.html)
> now sits above this page and supersedes feature-first development. This remains the DOCUMENTATION
> layer of that vision; the North Star adds the canonical clinical model, AI readiness, specialty
> independence, AgentARCH, and the seven-question Final Architectural Test every feature must pass.

> *"The clinician documents the patient. The system determines the paperwork."*

---

## The shift

The objective is **not** another collection of electronic forms. It is an **intelligent
documentation platform** that understands the encounter and assembles the documentation required to
represent what occurred.

**The fundamental principle.** Never ask *"which form would you like to open?"* Ask *"given
everything known about this patient, this encounter and this specialty, what documentation should
exist?"* — and answer it automatically.

Evidence → documentation → workflow → billing, coding, quality, inventory, referrals, education,
scheduling, follow-up, interoperability, analytics.

---

## Clinical Documentation Intelligence Engine (CDIE)

Every user action contributes **evidence**: appointment reason · visit type · specialty · chief
complaint · diagnoses · medications · allergies · vitals · questionnaire responses · procedure
selection · treatment plans · orders · referrals · prescriptions · labs · imaging · body locations ·
photographs · devices · inventory · provider specialty · payer · demographics · age · sex ·
pregnancy · prior encounters · prior procedures · chronic conditions · preventive gaps · risk scores.

Evidence continuously updates a **Documentation Recommendation Engine**, which infers documentation
that is required · recommended · optional · missing · incomplete · needing amendment · needing
signature · needing consent · needing education · needing coding review · needing photographs ·
needing body mapping · needing inventory · needing follow-up · needing quality reporting.

### Worked example — the acceptance test for the whole idea

Chief complaint: *"I want Botox for forehead wrinkles."* The engine infers, with nobody choosing a
form: Cosmetic Consultation · Botox Consent · Facial Assessment · Fitzpatrick Classification ·
Medical Contraindications · Pregnancy Questions · Allergies · Medication Review · Before Photos ·
Facial Mapping · Injection Documentation · Product Lot Tracking · Inventory Deduction · Procedure
Note · After Care Instructions · Follow-up Recommendation.

Clinical equivalent — diabetes + hypertension + foot numbness infers: Diabetic Foot Exam ·
Neuropathy Assessment · Medication Reconciliation · A1C Review · Foot Risk Documentation · Quality
Measures · Patient Education · Follow-up Interval.

---

## Intelligent assembly, not a form catalog

Documentation is assembled from **reusable sections** — Chief Complaint · HPI · ROS · Histories ·
Vitals · Physical Exam · Procedure · Assessment · Plan · Orders · Education · Signatures ·
Attachments · Body Maps · Photographs · Questionnaires. Each exists independently; **templates only
orchestrate them.**

**Progressive documentation.** Check-in → questionnaires → history → vitals → diagnosis → *evidence
changes* → *recommended documentation changes* → procedure selected → consent required → photographs
requested → procedure documentation appears → inventory captured → follow-up generated. The
interface evolves as the evidence evolves.

## Rule Engine (AgentCF)

Metadata-driven. Conditions: IF · AND · OR · NOT · Exists · Missing · Changed · Threshold ·
Comparison · Temporal · Patient History · Encounter History · Diagnosis · Medication · Procedure ·
Specialty · Location · Provider · Insurance · Age · Sex · Risk Score · Questionnaire Result.
Outputs: show/hide/require/recommend section · instantiate document · launch workflow · require
signature/consent/photograph/coding review/inventory · trigger education/scheduling/follow-up/quality
reporting/FHIR mapping. **Everything configurable; no specialty-specific code.**

## Documentation lifecycle

Draft · Autosave · Ready for Review · Signed · Locked · Addendum · Amendment · Historical Versions ·
Audit History · Release to Patient · Print · Export · FHIR Representation.

---

## Lane responsibilities

| Lane | Owns |
|---|---|
| **AgentCF** | Clinical Intelligence Framework: Evidence Engine, Rule Engine, Template Composer, Recommendation Engine, Section Orchestration, Conditional Rendering, Clinical Metadata, Progressive Documentation, Inference, Template Versioning |
| **AgentDLP** | Workflow orchestration — every transition evidence-driven: advance encounter, queue signatures, coding tasks, referrals, follow-up, quality measures, inventory, claims, education, portal documents |
| **AgentUI** | The provider experience — recommendations, outstanding work, timeline, completeness, missing-evidence and risk indicators, one-click acceptance, minimal clicks/scrolling, keyboard-first, touch-friendly. **Documentation should feel conversational, not form-driven** |
| **AgentDB** | Persistence on stable clinical entities (Patient, Encounter, ClinicalDocument, DocumentVersion, DocumentSection, Evidence, Inference, Recommendation, Rule, RuleEvaluation, Template, SectionDefinition, Observation, Procedure, Consent, Signature, BodyMap, Photo, InventoryUsage, InjectionAdministration, Education, FollowUp, AuditEvent, FHIRMapping…). **No table per form.** Configurable responses stored separately from normalized clinical entities. Versioning, immutability, searchability, analytics, FHIR, auditing, tenant isolation |
| **AgentAesthetics** | Reusable modules: Consultation, Facial/Skin Assessment, Fitzpatrick, Photography, Body & Injection Mapping, Botox, Fillers, Laser, IPL, Microneedling, RF, Peels, Body Contouring, Hair Restoration, Wellness, IV Therapy, Weight Management, Memberships, Before/After, Product Lots, Inventory, Packages, Consents, Recovery, Complications, Follow-up Photography |

**Clinical Knowledge Graph.** Diagnosis → assessment → procedure → consent → inventory → lot
tracking → coding → documentation → signatures → encounter complete. Learned through **metadata, not
hard-coded logic**.

## Success criteria

A provider completes an encounter thinking only about the patient. The system determines what
documentation is required, recommended, missing or reusable; what to generate; what workflow to
begin; what coding to apply; what inventory to decrement; what education to produce; what follow-up
to schedule. **The clinician never asks "which form do I need?"**

---

## Honest starting position (measured, not assumed)

This directive lands on a base that today cannot do the simple version of it. Recorded so the plan is
built on facts — all measured against live build 1964 on 2026-07-25/26.

| Reality | Consequence for this program |
|---|---|
| **0% of sampled clinical forms can save anything** (97% have no data binding at all; 120-form stratified sample) | Recommending a document is pointless until documents persist. The persistence floor from the [Clinical Documentation System](PracticeForceOneClinicalDocumentationSystem.html) directive is the hard prerequisite. |
| **No evidence exists as data.** Nothing maps diagnosis / problem / visit reason / appointment type to a form; no rule store; no inference records | The Evidence and Rule engines are new construction, not enhancement. |
| **74 select/radio fields across 16 of 60 definitions rendered empty dropdowns** (string vs `{value,label}` choices) — fixed 2026-07-26, not yet deployed | Evidence capture depends on inputs that work. Fixed at the runtime so all definitions benefit. |
| **Form definitions had no practice scoping** (`PRACTICE_ID` present, never read or written) — fixed 2026-07-26 | Per-practice rules and templates were impossible before this; also a latent cross-tenant leak. |
| **Zero clinical specialty tables hold data**; 587 creatable tables, 72 with any rows | Confirms "no table per form" — build on stable entities. |
| **~1,700 condition templates are flat, single-page, ~14 fields**, and 27% of clinical forms are work a family practice documents in-house | Section composition supersedes most of the catalog; curation beats conversion. |
| ~~**JAC data-layer regeneration cannot run on the build machine**~~ — **CORRECTED 2026-07-26, see below.** Regeneration runs fine **in the cloud**; only the *local* machine is blocked | New columns **do** reach the deployed data layer. This does **not** gate the canonical model. |
| **11 commits are built, compiling and undeployed** — gcloud auth expired | Nothing above is live. The first task is shipping what exists. (Cleared 2026-07-26: shipped in builds 1974/1975.) |

### ⛔ DB-11 was overstated — correction, AgentUI 2026-07-26

Measured, not assumed. `pipeline/cloudbuild-deploy.yaml` runs a **`generate` step in-cloud**
(`pipeline/scripts/generate-hermetic.ps1`, ~18 min) before `compile-data` → `phase0` →
`compile-router`. **The deployed data layer is regenerated on every deploy from
`data/ClaimsProcessingDdl.xml`.** New columns therefore *do* reach production.

Proof: `CHART_STATUS` was added to the DDL XML in commit `30e186e53`. The committed
`data/PATIENTSCrud.script` contains **zero** references to it — yet the live build's INSERT binds
it, which is only possible if the deployed artifact was regenerated in-cloud. It was.

**What is actually blocked:** *local* compile against a newly added column, because the local
generated tree is stale and `phase-generate.bat` reports success while regenerating nothing. So a
route that calls `setCHART_STATUS(...)` cannot be compiled locally, even though the column exists
in the deployed data layer.

**Consequence for this program:** DB-11 does **not** structurally prevent the canonical clinical
model. It makes new-column work *awkward* (write the migration + DDL XML, ship, then wire the
setters) rather than *impossible*. Lanes that parked canonical-entity work on DB-11 should
re-plan.

### Platform finding: column DEFAULTs are inert (AgentUI 2026-07-26)

Generated CRUD builds a **fully enumerated** INSERT — `batchCreatePATIENTS` lists all 90 columns
the JEO knows and binds a parameter for each. An explicit NULL beats a column DEFAULT in Postgres,
so **`ALTER COLUMN … SET DEFAULT` never applies to any API write anywhere in this schema.**

Measured on live 1974: charts created by direct SQL (column omitted) got `'active'`; every chart
created through `POST /api/patients` got NULL — 7 of 302 rows, all created *after* the DEFAULT was
in place. Fixed by a `BEFORE INSERT` trigger (`ddl/migrations/034_chart_status_insert_guard.sql`).

**Rule for every lane:** a migration that relies on a DEFAULT to establish an invariant is a no-op.
Use a trigger, or set the value explicitly in the route.

---

## AgentUI lane plan

**Now, unblocked** — the recommendation surface can be built against evidence already readable from
the encounter (diagnosis, problem list, visit reason, appointment type, specialty, provider):

1. **Recommended Documentation panel** in the encounter — offered, not searched; one-click accept.
2. **Outstanding / Missing** indicators and a **completeness meter** driven by what the engine says
   should exist versus what does.
3. **Clinical timeline** of documents for the patient, with version lineage.

**Blocked, and on whom**

| Needs | From |
|---|---|
| Document create/save/sign/amend/version | AgentDB's published contract (open) |
| Rule + evidence model to render against | AgentCF's Rule/Evidence engines |
| Section definitions to compose | AgentCF Template Composer |
| A deploy to make any of it visible | founder — `gcloud auth login` |

**Interim contract note:** until the Rule Engine exists, AgentUI will read clinical context directly
from the encounter and store the context → template mapping in `engine_configs` (practice-scoped).
That mapping is intended to be **absorbed by the Rule Engine**, not to become a parallel system —
recorded here so it is retired deliberately rather than surviving by inertia.

Related: [Clinical Documentation System](PracticeForceOneClinicalDocumentationSystem.html) ·
[Specialty Forms analysis](PracticeForceOneSpecialtyForms.html) ·
[Platform Architecture](PracticeForceOnePlatformArchitecture.html)

---

## AgentDLP lane — the inference RUNTIME (shipped 2026-07-26, measured)

**Division of labour (AgentARCH DR-1): CF = substrate (the knowledge), DLP = one evaluator (the
runtime), AgentDB = canonical persistence.** No lane owns two of those. The engine was NOT rebuilt —
AgentCF's `bin/cdie-evaluate.mjs` + `cdie-rules.json` were adopted and promoted into the request path.

### What is live

| Surface | Purpose |
|---|---|
| `GET /api/documentation/recommendations?encounterId=` | **Previews** what documentation should exist. Never writes. |
| `POST` same URL | Computes **and persists** into the canonical spine. |
| `util/CdieEvaluator` | The ONE server-side runtime: 13 leaf ops + `all`/`any`/`not`, salience-ordered, de-duplicated on `kind+ref`. Contains **no clinical knowledge** and **no DB access**, so every consumer shares it. |
| `engine_configs type=cdie_rules key=default` | The rule pack in the Definition Repository (8 rules, 16 output kinds). |
| `engine_configs type=operations key=default` | All **16 output kinds bound to operations** — 6 wired, 6 named as gaps. |
| `engine_configs type=worklist key=documentation` | The Documentation work queue: 9 views mirroring the operation queues. |
| `GET /api/workflows/{id}/state?encounterId=` | Step completion evaluated from **evidence**, not a status column. |

Any evidence field can be overridden by a query parameter, so the engine can be exercised against
hypothetical evidence without seeding a chart:
`?chiefComplaint=I want Botox for forehead wrinkles`.

### Proof (verified on live, not asserted)

- **Parity with the CLI**, rule for rule: `AES-BOTOX-INTENT`, `AES-PREGNANCY-SCREEN`,
  `CLIN-POLYPHARMACY-RECONCILE`, `GEN-MISSING-DOC` → **15 required + 2 triggered**.
- **It infers rather than replays**: a bare chief complaint yields 13+2; add sex/age/medications and
  the pregnancy + reconciliation rules fire.
- **Persistence**: one POST wrote **7 evidence rows + 18 recommendation rows**, each citing
  `supportingEvidenceIds` and its firing rule. Re-POST → **0 new, 18 skipped** (idempotent).
- **Cross-lane read**: AgentDB's `GET /api/documentation-recommendations?encounterId=` returns all 18
  (`requiredCount: 15`). Inference DLP, persistence DB, one model.

### Two defects the engine surfaced (rule pack — AgentCF's lane, not engine bugs)

1. `GEN-MISSING-DOC` emits a **label-less output** (`ref:"", label:""`) that renders as a blank row.
2. `AES-PREGNANCY-SCREEN` **fired for a 53-year-old** — "child-bearing potential" has no age bound.
   Clinically wrong, and the kind of recommendation that erodes trust faster than a missing one.

Both are knowledge, executed faithfully by the evaluator — which is the architecture working.

### Deliberately honest coverage

A workflow step with no `completeWhen.evidence` block reports `basis: status, satisfied: null` rather
than guessing. Nothing is silently assumed complete, and a workflow converts to evidence-driven one
step at a time.

**Known gap:** 6 of 12 registered operations are `unimplemented` — photography, body maps, inventory
deduction, education, follow-up scheduling and FHIR mapping have **no endpoint to execute**. The
engine already recommends all of them for an aesthetics visit. The registry names the gap instead of
dropping the recommendation silently.


## Status 2026-07-26 — the five-item runtime queue is complete

| Capability | Surface | State |
|---|---|---|
| Inference (compute, never writes) | `GET /api/documentation/inference?encounterId=` | live |
| Inference + persistence | `POST` same URL → `CLINICAL_EVIDENCE` + `DOCUMENTATION_RECOMMENDATION` | live, idempotent |
| The one evaluator | `util/CdieEvaluator` | live |
| Knowledge (rule pack) | `engine_configs type=cdie_rules key=default` | live, 8 rules |
| Operations registry | `engine_configs type=operations key=default` | live, 16/16 bound, 7 wired |
| Documentation work queue | `engine_configs type=worklist key=documentation` | live, 9 views |
| Evidence-driven workflow | `GET /api/workflows/{id}/state?encounterId=` | live, 6 of 11 steps |

### The compute surface is `/documentation/inference`

Per DR-8 the compute route was renamed away from `/documentation/recommendations`, which collided
with the canonical persistence route `/api/documentation-recommendations`. **Compute = inference;
the plural noun belongs to the stored rows.**

### Why only 6 of 11 workflow steps are evidence-driven

The remaining five report `basis: "status"` and `satisfied: null` **on purpose**. Their completion
is a real-world event — the patient physically arriving, being roomed — and no amount of clinical
evidence can establish that. The engine reports what it knows and declines to guess at the rest;
a step that silently claimed `satisfied: true` because nothing contradicted it would be worse than
one that admits it is status-driven.

### Tenancy rule for evidence reads

`/state` originally filtered its evidence queries on `ENCOUNTER_ID` alone, which let a caller read
another organization's documentation state. Fixed in `f5acdcd1f`. **Any route that accepts an id
from the query string and reads child rows by it must also carry `ORG_ID`** — an id supplied by the
caller is not proof of the caller's right to it.

It was found by calling two endpoints with the same encounter id and noticing they disagreed: the
inference route refused it, `/state` answered it. That disagreement is a reusable detection method.

### Current constraint: the knowledge base, not the architecture

The pipeline — evidence → knowledge → documentation → workflow — is proven end to end. Further
value now comes from **more and better rules**, not from more runtime.

> **Corrections, 2026-07-27 (AgentDLP).** Three claims in the earlier version of this paragraph were
> wrong and are withdrawn:
> - *"the rule pack is 8 rules"* — it is **32 rules emitting 16 kinds**.
> - *"a pregnancy screen with no age bound"* — **retracted.** `AES-PREGNANCY-SCREEN` carries
>   `between age [12,55]` and behaves correctly. The defect was reported from the rule's OUTPUT
>   without reading its `when` clause.
> - *"five of twelve operations have no endpoint"* — **only two do**: photograph and body-map
>   capture. Education, inventory, quality reporting, follow-up, consent and the fhir/r4 family were
>   already live; what was missing was the binding, not the endpoint.

---

## 2026-07-27 — Recommendation lifecycle closed, and every kind bound to the work that discharges it

### The loop had no closing half

The engine recommended documentation and the workflow blocked on recommendations that were still
open — but nothing marked a recommendation satisfied when its document actually arrived. A provider
could complete every required document and the encounter would still refuse to close. Asking them to
click "satisfy" on each row would have been exactly the documentation decision this layer exists to
remove.

`POST /api/documentation/reconcile?encounterId=` closes recommendations from **evidence**: a
completed, non-voided document of the recommended type on the same encounter. Drafts and voided
documents are counted and reported, never treated as documentation. The transition uses AgentDB's
canonical semantics (`status=satisfied`, `DOCUMENT_ID`, `ACTED_BY`, `ACTED_AT`) rather than a second
lifecycle, and it is idempotent.

**`ACTED_BY` is always `system:cdie-reconcile`, deliberately.** Evidence closed the recommendation,
not a clinician exercising judgement; recording the calling user would put a human's name on a
determination the platform made.

### Proof: causal, not a snapshot (live build 1991)

`stepsSatisfied` on `primary-visit` moved **6 → 3 → 6**:

| Stage | stepsSatisfied | What the steps said |
|---|---|---|
| clean encounter | 6 | no open recommendations |
| after inference persisted 8 recommendations | **3** | encounter/claim/close blocked on `openRecommendation:requireDocument` |
| after two completed documents + one reconcile | **6** | all clear |

A draft was verified NOT to satisfy (`draftsIgnored: 1`, recommendation stayed open) before the
signed document was.

### The gating vocabulary — and a trap inside it

`primary-visit` steps block on `requireConsent`, `requireDocument`, `requireSignature`,
`requireCodingReview`, `requirePhotograph`, `requireInventory`. **`requireSection` blocks nothing**,
so a requireSection recommendation will never move `stepsSatisfied` — worth knowing before concluding
that reconcile "did not work".

**`MODULE_KEY` on a recommendation row holds the recommendation KIND, not a module key.** That is the
contract `/state` reads for `noOpenRecommendations`. Reconcile was matching it against a *document's*
module key — two different things, and only a false positive could come of it. Fixed in `11959efb8`.
The inference writer and the state reader had always agreed; reconcile was the outlier. **When three
routes touch one column and one disagrees, the odd one out is the bug.**

### Binding kinds to operations — mostly bookkeeping, not building

A recommendation with nothing to click is a dead row. The registry
(`engine_configs type=operations key=default`, authored at
`docs/clinical-documentation/operations-registry.json`) now binds **12 of 16 kinds**. The other four
— `alert`, `blockSign`, `launchWorkflow`, `computeMissing` — are engine semantics, not user work, and
bind to nothing by design.

The surprise was how little needed building. `patient-education`, `aesthetic-consents`,
`aesthetic-treatments`, `quality-measures`, `recall`, `consent-to-treat` and the whole `fhir/r4`
family were already registered and answering on live. **The endpoints existed; the binding did not.**

`status` records what was confirmed rather than intended: `bound` means the endpoint answered,
`writeContractUnverified` marks the ones where only the read surface was probed.

### Two real holes, now recorded instead of assumed

- **`requirePhotograph` blocks `close` and nothing in the product can clear it.** No photograph or
  body-map capture path is registered anywhere in the router. Both are UI + storage surfaces —
  AgentUI/AgentDB, not documentation runtime.
- **`education.assign` is wired to an empty shelf.** `GET /api/patient-education/materials` returns
  0 materials. The operation works; there is nothing to assign until a clinical content catalog
  exists, which is content authoring, not runtime.

### A definition that lives only as a live PUT is not shipped

This lane's own notes recorded "16 of 16 kinds bound". Live held **two** operations, and no commit
anywhere had ever written the rest — the registry had only ever existed as a live PUT and was lost.
It is now source-controlled, and `bin/publish-operations-registry.mjs` **merges then re-reads**,
failing loudly if another lane's operations were dropped. Publishing is not shipping; source control
is.

### Known under-firing (found by AgentCF, same night)

The evidence gatherer emits flat camelCase while **27 of the 36 fields the live rules test are
written in dotted vocabulary**, so those rules could never fire server-side — aesthetic safety rules
among them. This explains why `requirePhotograph` never once appeared in live inference results
despite five rules emitting it. **Recommendation counts recorded before that fix understate what the
pack would produce.** Fix is AgentCF's (evidence aliases in the shared evaluator).

---

## 2026-07-27 (later) — The acceptance example runs, and then cannot be closed

The Botox worked example at the top of this page is the test of the whole idea. On live build 1992
the **inference half passes**: `chiefComplaint = "botox for forehead wrinkles"` fires
`AES-BOTOX-INTENT` and returns the sixteen recommendations this directive asks for, with nobody
choosing a form.

The **workflow half dead-ends.** Persisted onto a real encounter, `primary-visit` reports:

```
close  satisfied=False  missing=[requireDocument, requireConsent, requirePhotograph, requireInventory]
```

Three of the four can be discharged today — documents, consents and inventory all have live
endpoints. **`requirePhotograph` has none.** No photograph or body-map capture path is registered
anywhere in the router, so a botox encounter blocks at `close` with no action in the product able to
clear it.

**This is one missing capture surface, not a design fault.** The engine inferred correctly; the
registry says honestly that the operation is unimplemented; the workflow correctly refuses to call
the encounter complete. Every layer behaved — the work simply does not exist yet. Building
`media.capturePhotograph` (and `media.captureBodyMap` beside it) flips two registry entries from
`unimplemented` to `bound` and the path completes.

**Deliberately not mitigated.** Dropping `requirePhotograph` from `close`'s `noOpenRecommendations`
is a one-line, deploy-free definition change that would turn the demo green immediately. It has not
been made. Before-photos carry medico-legal weight in aesthetics, and removing a clinical
requirement so a demo passes is a founder's decision, not a lane's.

**It will get more common, not less.** AgentCF's evidence-alias fix repairs field resolution for the
27-of-36 dotted rule fields that currently never match, so more aesthetic rules — several of which
also require photographs — will begin firing once it lands. The capture surface is better built
before that, not after.

---

## 2026-07-27 (later still) — A recommendation now carries its action, and the workflow seed had quietly drifted

### Recommendations are actionable, and the gaps are counted

Each recommendation now resolves its kind against the operations registry and carries
`{name, endpoint, status, input, satisfiedBy}`. The engine no longer says "a Diabetic Foot Exam
should exist" and leave the clinician to find the screen.

The binding is metadata, so adding a kind or repointing an endpoint is a definition change rather
than a deploy, and a missing registry degrades to recommendations-without-actions instead of taking
inference down — the recommendation is still correct without an action attached.

It also **counts what it cannot do**: `actionable` per recommendation, plus `unactionableCount` and
`unactionableKinds`. That instrument is what turned `requirePhotograph` from a suspicion into the
measured, reproducible dead end recorded above. Kinds that are engine semantics — `alert`,
`blockSign`, `launchWorkflow` — are legitimately unbound and are deliberately *not* counted as gaps.

### The workflow seed had drifted from live, twice, both silently

`primary-visit` is seeded with `seedGlobalIfAbsent` and **the DB row wins once seeded**. The seed is
therefore only ever exercised on a fresh or restaged environment — which is exactly why nobody had
noticed it no longer matched:

| Divergence | What a restaged environment would have got |
|---|---|
| All **six** evidence preconditions lived only in the DB row | checkin, encounter, orders, checkout, claim and close all revert to status-driven — the evidence→workflow half of this directive quietly not running, with every endpoint still answering 200 |
| **`registration_review`** lived only in the DB row (seed had 10 steps, live has 11) | An entire workflow step missing |

Both are fixed in the seed, verified field-by-field against the live row. The live definition is now
exported to `docs/clinical-documentation/workflow-primary-visit.json`, and the publisher reports it
as *identical* to live — which is the proof the export is faithful rather than approximate.

**The general rule this establishes:** anything seeded with `seedGlobalIfAbsent` and later edited by
a live PUT has this exposure, in any lane. `bin/publish-definition.mjs --check` exits non-zero on
drift between a committed definition and live. Now that `POST /api/staging/clear-all-data` exists,
"it only matters on a fresh environment" has stopped being hypothetical.

### Publishing is not shipping — third instance in one night

Three definitions in this lane existed only as live PUTs: the operations registry (which was
**already lost** — live held 2 of the entries it should have held, with no commit anywhere that ever
wrote the rest), the documentation worklist, and the primary-visit evidence preconditions. All three
are now in source control behind one generic publisher that reads back and compares before claiming
success.

---

## 2026-07-27 — Both demo journeys stop short, for opposite reasons

Measured on live 1993 after the canonical restage. Neither failure is in the engine.

### Clinical journey: the engine infers nothing, because the chart holds nothing

Every encounter in the seeded demo returns `recommendationCount: 0`. The only rule that fires is
`GEN-MISSING-DOC`, the known-malformed one that produces nothing usable.

```
encounter "Diabetes follow-up; foot numbness"
  diagnoses=0  problems=0  medications=0  chronicConditions=0  ->  0 recommendations
```

All **seven** patients holding demo encounters have `problems=0, medications=0`. Most of the clinical
rule pack keys on a diagnosis, problem or medication list, so almost nothing can fire.

**The engine is correct, and three facts prove it.** Same encounter, same rules, same build, with a
coded diabetes chart supplied as evidence:

```
E11.9 + chronic condition + one medication
  -> CLIN-DIABETIC-FOOT, CLIN-DIABETES-A1C, CLIN-POLYPHARMACY-RECONCILE
  -> 8 recommendations: Diabetic Foot Exam · Neuropathy Assessment · Foot Risk · Patient Education
     · Follow-up Interval · A1C Review · Quality Measures · Medication Reconciliation
```

That is **verbatim the clinical worked example at the top of this page.** The capability works; the
demo chart is empty. `AdminSeedDemoClinicDayRoutes` does insert problems and medications, but for the
*panel* patient — not the patients the demo encounters are created on.

### The boundary underneath it

Patient `cc90c064` has two `problem_list_cf` instances, one **signed**, and zero rows in
`patient_problems`. The facts are in form answers; evidence is read from the canonical model. That is
the "configurable responses stored separately from normalized clinical entities" split behaving
exactly as designed — but with nothing promoting responses into entities, **a signed problem list is
invisible to inference.** A form that saves is not the same as a fact the platform knows. Whether that
promotion belongs to the form runtime or to a documentation-layer step is a real architectural
question, and it is the difference between the engine working on demo data and not.

### Aesthetics journey: the engine infers everything, and the workflow cannot finish

The mirror image, recorded earlier today: the Botox path returns all sixteen expected recommendations
and then blocks at `close` on `requirePhotograph`, which no endpoint in the product can satisfy.

**Together:** one journey has an engine with no evidence to reason over; the other has evidence, sound
reasoning, and nowhere to perform the work. Neither is a defect in inference — which is worth stating
plainly, because "the demo shows nothing" and "the engine doesn't work" are easy to confuse.

### Closing the loop had to work in both directions

Satisfying a recommendation from evidence was one-directional, and probing the live endpoint — rather
than re-reading it — exposed what that costs:

```
signed diabetic_foot_exam -> reconcile -> satisfied
POST /clinical-documents/{id}/void
  recommendation: status=satisfied, documentId=<the voided document>
re-run reconcile -> voidedIgnored=1, recommendation NOT reopened
```

`/state` blocks only on OPEN recommendations, so the step stayed clear: a required document had been
explicitly retracted and the encounter could still close on it. Voiding means *this should never have
existed*, so the requirement it discharged must come back. Reconcile now reopens any recommendation
whose satisfying document is no longer valid evidence, clears the stale pointer, and reports
`reopenedCount` so the correction is visible instead of silent.

It reopens **only rows the platform itself closed** (`ACTED_BY = system:cdie-reconcile` with a
document). A recommendation a clinician satisfied by judgement is theirs; the platform must not
reopen a human decision because it cannot find the paperwork it expected.

**The lesson worth keeping:** the reconcile endpoint passed every test written for it and had been
verified end-to-end. The defect only appeared when the question changed from "does closing work?" to
"what happens when the evidence is taken away?" — an endpoint that is right in the forward direction
is not automatically right when the world moves backwards.

---

## 2026-07-27 — Explainability: a rule id is not a reason (founder broadcast #7)

The broadcast requires every recommendation to answer **why**, cite its evidence, and be reproducible.
Measured against that, this lane was failing: a clinician saw `becauseOf: "CLIN-DIABETIC-FOOT"`.

Only some rule outputs declare their own `reason` — of the three outputs `CLIN-DIABETIC-FOOT`
produces, exactly one did — while the rule's `description` was a perfectly good sentence the runtime
threw away. Each recommendation now carries:

| Field | Answers |
|---|---|
| `why` | the output's `reason`, falling back to the rule's `description` |
| `whyEvidence` | the evidence fields the rule's `when` actually tested, with the values they held on this encounter |
| `whyRule` | which rule fired |
| `whyRulePack` | pack name + version, so the inference is reproducible |

`whyEvidence` is the part that makes the citation *checkable*. "Because of CLIN-DIABETIC-FOOT" is a
claim a clinician cannot verify. "diagnoses=[E11.9 diabetes], chiefComplaint=foot numbness" is one they
can — and it is also the audit trail for why the platform demanded a document.

No clinical knowledge moved into the runtime. The sentence stays in the rule pack; the runtime stops
discarding it and reports which fields it consulted. Field collection walks `all`/`any`/`not` and is
bounded, so a pathological rule cannot bloat a response.

### The duplication this exposed, raised to AgentARCH

A clinical fact can live in two homes: a canonical entity (`patient_problems`) or a form's ANSWERS
blob. Patient `cc90c064` has a **signed** `problem_list_cf` and **zero** `patient_problems` rows — the
platform holds a signed problem list while believing the patient has no problems. Since evidence reads
canonical entities, anything captured only as form answers is invisible to inference, documentation,
coding, quality and follow-up. That is the whole reason the demo returns zero recommendations.

What promotes a form-captured fact into its canonical entity — the form runtime, a documentation-layer
step, or a rule that forms must bind to the entity as their storage — is a platform decision, not a
lane decision. It is with AgentARCH.

---

## 2026-07-27 — Objective #2 measured: one action, one completion path

Founder Platform Objective #2 — *every documentation recommendation has exactly one executable action
and one completion path* — is now measured rather than asserted, by
`bin/audit-recommendation-actions.mjs`, which walks every `(kind, ref)` the live rule pack can emit.

| | |
|---|---|
| Exactly one executable action | **25 / 29** |
| **No** executable action | `requirePhotograph`, `requireBodyMap`, `triggerFollowUp` |
| Ambiguous (more than one) | **0** — was `requireConsent`, fixed |
| **No completion path** | 14 pairs across **9** kinds |

### What the audit corrected about my own claims

Three times in one session it contradicted something I had asserted:

1. **`requireConsent` had TWO actions.** I caused it by binding both `consent.capture` and
   `consent.captureAesthetic`, leaving the caller to choose — the exact provider decision this
   platform exists to remove. Fixed on live; no deploy needed, it is a definition.
2. **`triggerFollowUp` has NO action.** I had recorded `POST /api/recall`. `/api/recall` is GET-only
   and returns 405. Five other operations' POST handlers were confirmed real by probing (400 on an
   empty body); this one was not. `POST /api/appointments` exists, but whether a follow-up is
   discharged by booking an appointment or writing a recall entry is a scheduling decision, so it
   stays unimplemented rather than being silently rebound.
3. **An earlier version of the audit itself was wrong** — it resolved completability from template
   membership and reported `diabetic_foot_exam` as uncompletable, which live had already disproved.
   It now derives from the registry's declared `produces.entity`.

### The completion gap is the larger finding

Reconcile closes a recommendation only from a completed, non-voided **clinical document** whose
FORM_TYPE equals the rule's ref. An operation that writes any other entity — a consent row, a lot row,
an education assignment, a recall, a quality measure, a charge review — **cannot close its
recommendation**. A clinician can do the work correctly and the requirement stays open forever, and
any workflow step gated on that kind can never clear.

This corrects the earlier note above about the Botox encounter: `requirePhotograph` is not the single
unsatisfiable blocker. `requireConsent` and `requireInventory` have actions but no completion path, so
that encounter is unclosable for **four** reasons. The distinction the objective draws — an action
existing versus a completion path existing — is exactly the one I had been collapsing.

**The fix is not nine special cases.** Reconcile should satisfy a recommendation from evidence in
whichever entity the bound operation *produces*, driven by the registry, so adding a completable kind
becomes a definition change. Designing that against the Unified Persistence Contract (no raw SQL, no
per-entity branching in the runtime) is the next increment.

### The completion contract: one concept, two evidence sources

Nine kinds can be acted on and never completed. The fix cannot be nine special cases, and it cannot
be per-entity reads either — the Unified Persistence Contract forbids raw SQL and generated CRUD is
per-table, so reading six entities means six code paths plus a seventh for every future kind.

One **event** read serves every kind, and the binding becomes a definition:

| `completion.source` | Closes when |
|---|---|
| `clinicalDocument` | a completed, non-voided document has FORM_TYPE/MODULE_KEY == the rule ref *(live today)* |
| `event` | a `SOURCE_RECORD_EVENTS` row carries EVENT_TYPE + ENCOUNTER_ID + `payload.ref` |

The event is also the audit trail the platform already owes — *every workflow decision must be
traceable* — so completion and traceability stop being two mechanisms. Each operation owner adds
**one emit call**, and their kind becomes completable with no further runtime work. The documentation
layer never learns what a consent or a lot IS.

Recorded as **`completionPlan`, not `completion`.** Nothing emits these events yet, so the audit must
keep reporting those nine kinds as uncompletable — and it does, unchanged, after the declaration. A
registry that scored itself on intentions would be worse than no registry.

### Sequencing risk worth naming

AgentCF's evidence-alias fix repairs field resolution for the 27-of-36 dotted rule fields that never
match today. It is structurally safe — with no alias map the evaluator is byte-identical to current
behaviour — but `engine_configs type=evidence_schema` **is** published (38 fields), so it activates on
deploy rather than lying dormant.

Activating it makes many more rules fire. With nine kinds still uncompletable, that means encounters
accumulate requirements nothing can clear, and `close` becomes *less* reachable. **Completion paths
should land before alias activation** — or activation should be held.

The honest counter-argument: that same fix is why `AES-EXPIRED-PRODUCT`, `AES-LOT-TRACEABILITY` and
`AES-GFE-MISSING` never fire. Safety rules that never fire may well outrank tidier demo output. That
is a founder trade, not a lane trade.

### Amendment is ordinary, and it broke the reopen logic

Probing the amend path on live before trusting reasoning about it: amending leaves v1 **signed and
locked** and creates a v2 **draft**, so two documents of one form type coexist on an encounter as a
matter of course.

```
4b379376  v2  status=draft   amends=e8257ca4
e8257ca4  v1  status=signed  locked=true
```

That breaks the reopen pass added earlier the same day. Once v2 is signed there are two valid
documents; voiding v1 would reopen a recommendation that v2 plainly satisfies, and the next reconcile
call would immediately close it again. **A requirement blinking open and shut is churn a clinician
sees and cannot explain.**

Reconcile now **re-points**: if the named document is no longer evidence but another valid document of
the same type exists, the recommendation stays satisfied and its `DOCUMENT_ID` moves to the surviving
document. It reopens only when no evidence remains — which is what "the documentation no longer
exists" actually means. Reported as `repointedCount` so a pointer moving is visible, not silent.

The lesson repeats from the void case: forward-direction correctness says nothing about what happens
when the world moves sideways. Voiding was one question; amending was a different one, and the answer
to the first was wrong for the second.

---

## 2026-07-27 — Build 1995: the lifecycle work is live and verified

After the deploy lane sat frozen for 10.5 hours, `DEPLOY COMPLETE ... (gated + promoted)` put sixteen
increments on live 1995. Verified against the running system rather than assumed:

**Explainability (founder #7).** A recommendation now reads:

```
why          "diabetes with neuropathic foot symptoms"
whyEvidence  diagnoses=[Type 2 diabetes mellitus with diabetic polyneuropathy, E11.9 diabetes],
             chronicConditions=[diabetes], chiefComplaint="Diabetes follow-up; foot numbness"
whyRule      CLIN-DIABETIC-FOOT      whyRulePack  cdie-rules v1.0
operation    POST /api/clinical-documents   actionable  true
```

Every part of that is checkable by the clinician it is shown to, which `becauseOf: CLIN-DIABETIC-FOOT`
never was.

**Objective #2 instrument.** `actionableCount 7 · unactionableCount 1 (triggerFollowUp)` — the gap is
now reported by the running platform, not only by an offline audit.

**Recommendation lifecycle, both directions proven on live.**

| Scenario | Result |
|---|---|
| satisfying document voided, no other evidence | `reopened 1` — the requirement correctly comes back |
| satisfying document voided, another valid document of the same type exists | `repointed 1` (`4b379376 → debd9187`) — stays satisfied, pointer moves |

The second case is the one that matters in practice: amendment makes two valid documents of one type
ordinary, and without re-pointing the requirement would blink open and shut between reconcile calls.

**Definitions.** The documentation worklist published with its row action; the drift guard reports **no
drift** for both `workflow/primary-visit` and `worklist/documentation` — committed source and live
definition now agree, and will fail loudly when they stop agreeing.

**Demo data moving too:** the diabetes encounter now carries a real coded diagnosis and infers **7
recommendations, 6 actionable** — up from **0** for every encounter this morning. That change was
someone else's; it is the difference between the flagship capability demoing and appearing dead.

---

## 2026-07-27 — Completion from the event ledger: nine kinds get a path

The contract declared earlier is now executable. Reconcile reads the encounter's
`SOURCE_RECORD_EVENTS` once and matches `"<eventType>|<ref>"` — eventType from the operations
registry, ref from the event payload.

**Why events rather than reading each entity.** Consent lives in one table, product lots in another,
education assignments in a third. Reading them means six code paths in the documentation layer plus a
seventh for every future kind — and generated CRUD is per-table while the Unified Persistence Contract
forbids the raw SQL a generic version would need. One event read serves every kind, the binding stays
a definition, and the event is the traceability the platform already owes. **The documentation layer
never learns what a consent or a lot IS.**

Deliberate details, because each encodes a judgement:

- **`DOCUMENT_ID` stays NULL for an event-satisfied recommendation.** That column means *the document
  that discharges this*. Filling it with an event id would make the reopen pass — which asks whether
  that document is still valid evidence — meaningless. The response says `satisfiedBy: "event"`.
- **The runtime honours `completionPlan` as well as `completion`**, so the day an owner adds their
  emit call it works with no registry edit. The **audit still scores only `completion`**, so the
  scorecard never credits an intention.
- **A malformed payload or an event without a `ref` fails to match rather than throwing** — the same
  outcome as no event, which is the honest degradation.

**The cross-lane cost is one emit call**: `EVENT_TYPE`, `ENCOUNTER_ID`, `ORG_ID`, and
`EVENT_PAYLOAD` containing `{"ref": …}`. Note that the existing `writeEvent` helper deliberately omits
`ENCOUNTER_ID` because of the FK trap; a completion event must set it, and safely can, because the
encounter demonstrably exists.

Nothing changes until owners emit — which is the point of keeping it a plan rather than declaring the
gap closed.

### Proven: one event closes a recommendation (live 1996)

The contract stopped being a proposal:

```
open        triggerQualityReporting  quality_measures_diabetes
emit        POST /api/workflow-events  { eventType: "quality.reported",
                                         encounterId: <enc>,
                                         payload: { ref: "quality_measures_diabetes" } }
reconcile   SATISFIED quality_measures_diabetes | by event | 240f2c35
```

Document kinds on the same encounter were correctly untouched — an event does not fake a document.

`quality.report` is therefore promoted from `completionPlan` to a verified `completion`, which was the
bar set when the contract was declared: **a plan is promoted by proof on live, never by intent.**
Objective #2 moved on measured evidence — **no completion path 14 → 12 pairs, 9 → 8 kinds.**

**No code was written to make that kind completable.** The mechanism shipped in the previous
increment; the rest was one event. That is the test of whether this was built as a platform capability
or a feature: the remaining seven kinds each need one emit call from their owner and nothing at all
from this lane.

A useful discovery for those owners: `POST /api/workflow-events` already accepts `eventType`,
`encounterId` and `payload`, so nobody needs to build emit plumbing — and emitting through it sets
`ENCOUNTER_ID`, sidestepping the FK trap that makes `writeEvent` omit it.

### An event cleared a workflow gate (live 1996)

The earlier proof closed a recommendation. This one closes what the directive actually asks for —
evidence → documentation → **workflow**:

```
inference (a procedure was selected)      stepsSatisfied 6 -> 0
    orders   blocked on [openRecommendation:requireCodingReview]
    checkout blocked on [openRecommendation:requireCodingReview]

emit  coding.reviewed  payload.ref=coding_review          -> event 7d5a0b24
reconcile                                                  SATISFIED coding_review | by event

state                                     stepsSatisfied 0 -> 2
    orders   satisfied=true  missing=[]
    checkout satisfied=true  missing=[]
    claim/close still blocked on requireDocument / requireSignature / requireConsent — correctly,
    those kinds have no completion path yet
```

**A workflow gate was cleared by work that produced no clinical document.** That was impossible
before this lane's previous two increments, and nothing was written to achieve it — the mechanism
already existed and the rest was one event. `coding.review` promoted to verified completion;
objective #2 now **11 pairs / 7 kinds** without a completion path.

### The queue was showing clinicians a rule id

Verifying the consumer rather than the write turned up the surface that still failed objective #7.
The documentation queue's own `listUrl` returns 25 rows with every declared column resolving — and its
`reason` column read:

```
Neuropathy Assessment | requireDocument | rule CLIN-DIABETIC-FOOT
```

Explainability had been fixed on the *compute* surface; the *persisted* recommendation still stored
the rule id, and the persisted row is what the queue displays. REASON now carries the same resolution
as `why` — the output's reason, else the rule's description — with the rule id in brackets so the row
stays traceable.

Three views were added on the queue's measured composition, not on symmetry: `requireSection` was 10
of 25 open rows and `requireDocument` 4 — **56% of the queue reachable only through "all"** — while
photography, inventory and coding each had a dedicated view and zero rows.

---

## 2026-07-27 — RETRACTION: the five status-driven steps are not un-inferable

Twice above, this page explains that five `primary-visit` steps report `basis:"status"` and
`satisfied:null` **on purpose**, because *"their completion is a real-world event — the patient
physically arriving — and no amount of clinical evidence can establish it."*

**That explanation is wrong and is withdrawn.** Every step already declares its own completion
contract in the definition:

| Step | entity | statusIn |
|---|---|---|
| registration_review | appointment | 9 values |
| appointment | appointment | 7 |
| eligibility | eligibilityCheck | 3 |
| rooming | appointment | 6 |
| payment | claim | 2 |

`/api/workflows/{id}/state` **never reads `completeWhen.statusIn`**. It evaluates only
`evidence.documentsPresent` and `evidence.noOpenRecommendations`, and reports `satisfied:null` for
everything else. An appointment reaching `checked_in` *is* the evidence that the patient arrived.

The gap was an unimplemented check, and it was then explained as a principle — which is worse than the
gap, because a principle stops people looking. Recorded here as prominently as the original claim.

### Why the fix is a fork rather than a patch

Evaluating `statusIn` means reading the declared entity, and generated CRUD is per-table:

1. **Per-entity reads in the workflow engine** — implements the contract exactly, but teaches the
   *workflow engine* about appointments and claims, which the North Star resists.
2. **Derive from the board projection** — `WorkflowBoardRoutes` already maps entity status to lane,
   every step declares its `lanes`, and the workflow declares `laneOrder` and
   `instanceSource: "/api/workflow/board"`. No entity knowledge, no second implementation.
3. **A generic `read(entity, …)`** per the Unified Persistence Contract — correct, and does not exist.

(2) appears right on anti-duplication grounds, but "the board already answers this" is exactly the
claim that should be ruled by AgentARCH rather than assumed by the lane that benefits from it.

---

## 2026-07-27 — The engine could not change its mind

Probed on live 1997. Persist recommendations for an encounter with a procedure, then remove the
procedure and re-infer:

```
with procedure      GEN-PROCEDURE-CONSENT fires   -> 5 recommendations recorded
without procedure   rule no longer fires
recommendations     consent_procedure · procedure_note · coding_review · signature_provider
                    ALL STILL OPEN
```

The platform went on demanding a consent, a procedure note, a coding review and a signature for a
procedure that is no longer part of the encounter — and `close` blocked on all four, permanently.

**A requirement the engine itself no longer believes in is worse than a missing one:** nobody can act
on it and nobody can explain it. It also inverts the directive — instead of the system determining the
paperwork, the clinician is left arguing with a stale demand.

A full chart-based recompute now withdraws open recommendations the current evaluation did not
produce.

### The guard that makes withdrawal safe

**Withdrawal never runs when evidence was supplied by query parameters.** Those overrides exist so a
rule can be exercised against a hypothetical chart without seeding one. If withdrawal honoured them, a
single narrow probe — `?proceduresSelected=botox` — would retract every real recommendation on the
encounter. Only a true recompute may retract. That guard is the whole difference between a
self-correcting engine and a destructive one.

Also deliberate: **satisfied rows are never touched** (the work was done; withdrawing it would erase a
record); the existing `dismissed` status is reused rather than inventing a second lifecycle, with
`ACTED_BY = system:cdie-inference` so the audit never implies a clinician made the call; the update
re-asserts `STATUS='open'` so a row satisfied between read and write is not retracted by a race; and
`withdrawnCount` is reported, because a requirement disappearing must be visible rather than silent.

### Verified both directions (live 1999)

| Case | Result |
|---|---|
| Narrow override probe (`?chiefComplaint=unrelated headache`) | `withdrawnCount 0` — all 5 rows still open |
| Full chart recompute, no overrides | `withdrawnCount 4` — consent_procedure, procedure_note, coding_review, signature_provider |
| Selectivity | `medication_reconciliation` stayed **open** — its rule still fires |
| Workflow effect | `stepsSatisfied 0 → 6`, every evidence-gated step cleared |

Withdrawn rows read *"Withdrawn by the documentation engine: the evidence on this encounter no longer
supports it."* — a stale demand does not merely vanish, it explains itself.

**The negative case is the one that mattered.** Without the override guard, any narrow probe would
have silently retracted every real requirement on an encounter. A self-correcting engine and a
destructive one differ by exactly that condition, which is why it was verified first.

### A pattern across the day

Three lifecycle defects were found in this lane's own shipped code, and none were visible to
forward-direction testing:

| Question | Defect |
|---|---|
| what if the document is **voided**? | a retracted document went on satisfying its requirement forever |
| what if it is **amended**? | reopening flapped a requirement that a surviving version plainly satisfied |
| what if the engine **stops believing** it? | the demand persisted after the evidence for it was gone |

Each endpoint was correct in the direction it was written and wrong when the world moved backwards.
"Does closing work?" is a much weaker question than "what happens when the thing that closed it is
taken away?"

---

## 2026-07-27 — Correction: "verified" was drifting, and the honest number is still 9

This page reported objective #2 improving from **9** kinds without a completion path to **8**, then
**7**. That overclaimed. The honest number is still **9**.

What was proven for `quality.report` and `coding.review` is that the **completion path** works — an
event carrying a matching `payload.ref` closes the recommendation, and for coding.review it cleared a
workflow gate. What was **not** proven is that the **operation emits** it: both proving events were
written by this lane through `POST /api/workflow-events`. A clinician doing the real work still would
not close either requirement.

```
the mechanism works when the event exists    proven
doing the work closes the requirement        NOT proven — needs the owner's emit
```

The registry now carries `emittedByOperation: false`, and the audit reports those as **CONTRACT-ONLY**
and counts them as *not* completable.

**Why this was worth undoing a good-looking number.** "Verified" was quietly migrating from *works
when the event exists* to *works for a clinician*. A scorecard whose terms drift stops measuring
anything, and the drift always runs in the flattering direction. `emittedByOperation` flips to true
only when an owner's operation emits and it has been seen on live.

Nothing about the emit contract changes — it works, and the worked example stands. What changed is
that this lane stops counting its own test event as another lane's operation being wired.

### Also checked and clean

- **FHIR export is not a gap.** `GET /api/fhir/r4/DocumentReference?patient=…` returns a proper Bundle
  of DocumentReferences built from clinical documents. It was on this lane's original "nothing can
  execute" list in error; it works, and terminology/FHIR coding is AgentCF's lane.
- **Worklist filters match the data.** Stats filter `status=open` (68 rows), `necessity=required` (43)
  and `necessity=triggered` (25); every view's `moduleKey` value occurs in the data. No silent
  always-zero filter.

---

## 2026-07-27 — Orphaned recommendations: a row that can never be closed and never be retracted

Measured on live 1999:

```
open recommendations                                80
  pointing at an encounter that cannot be retrieved 55   (9 distinct dead encounters)
```

Both `/api/documentation/reconcile` and `/api/documentation/inference` answer
`NOT_FOUND — Encounter not found in this organization` for those encounters. The two endpoints agree,
which is the healthy signal: the encounter really is gone.

**The structural problem is that satisfy and withdraw are both encounter-scoped.** An orphaned
recommendation therefore cannot be closed *and* cannot be retracted, while it keeps appearing in the
practice-scoped work queue. Every other lifecycle hole found today had an exit; this one has none.

**The full restage is not the cause** — checked before blaming it. `GET /api/staging/tables` reports
`documentation_recommendation`, `clinical_evidence`, `clinical_form_instances`, `source_record_events`
and `encounters` all in **cleared**, so a catalog-driven restage removes them together. Some other path
removes or replaces encounters without clearing dependents.

**Deliberately not fixed here.** A large share of these rows are this lane's own test data from a very
unusual day, and in production encounters are not deleted — building a bulk-dismissal surface over
shared clinical data on that evidence would be scope this lane should not take. The correct fix is at
the path that removes encounters. If the capability is wanted here instead, it should be asked for.

---

## 2026-07-27 — The lifecycle is pinned, not just proved

Ten lifecycle behaviours shipped today, each proved once by hand against live, **none with regression
cover**: grepping the characterization gate for `reconcile`, `reopened`, `repointed`, `withdrawn` or
`satisfiedByEvent` returned nothing. A behaviour proved once is not a behaviour that keeps working.

`DLP-CDIE-2` now pins, self-fixturing and feature-detected:

| Pinned | Fails if |
|---|---|
| foreign encounter | answered (tenant leak) or 500 (crash) — both are failures, not just errors |
| reconcile payload | the documented counters stop being numeric |
| still-open rows | lose `actionable`, so a caller cannot tell what can discharge them |
| a **draft** document | ever satisfies — the honesty rule |
| a **signed** document | fails to satisfy — the evidence loop |
| voiding the evidence | fails to reopen or re-point — documentation that no longer exists still counts as done |
| an **override probe** | withdraws anything, or reduces the open count |

**The last row is why the scenario exists.** Withdrawal must never run on a hypothetical evidence
picture; if that guard regresses, one narrow probe like `?chiefComplaint=…` silently retracts every
real recommendation on an encounter — and the endpoint keeps answering 200 the whole time. Destructive
regressions deserve a test more than convenient ones do, precisely because they are invisible.

Three of the pinned behaviours were defects found today by asking what happens when the world moves
backwards. Forward-direction testing saw none of them.

---

## 2026-07-27 — Lifecycle complete: the gate scenario ran, on the real path

```
PASS [964ms] DLP-CDIE-2 -> lifecycle pinned: draft never satisfies; signed does;
             void reopens/re-points; override probe withdrew 0 (open 5 -> 5)
```

Not a feature-detect and not a skip — the full assertion path executed on build 2002. The
recommendation lifecycle now works in all four directions, each proved against the running system and
pinned against regression:

| Direction | Behaviour |
|---|---|
| **raise** | inference persists what the evidence implies |
| **satisfy** | from a completed document **or** an event in the ledger |
| **re-point** | evidence replaced by an amendment keeps the requirement satisfied |
| **withdraw** | the engine retracts what it no longer believes |

Three of those four were defects, all found the same way: by asking what happens when the world moves
**backwards**. A voided document satisfied its requirement forever. An amendment made a requirement
flap open and shut. A recommendation whose evidence disappeared stayed open forever, blocking `close`.
Every endpoint was correct in the direction it was written.

### What remains is not buildable from this lane

| Blocker | Owner |
|---|---|
| `requirePhotograph` / `requireBodyMap` have no capture surface | founder decision; AgentUI/AgentDB to build |
| seven kinds need one emit call each | the operation owners |
| `triggerFollowUp` — appointment vs recall entry | scheduling |
| `completeWhen.statusIn` never read by `/state` | AgentARCH fork |
| a partial encounter-delete path orphans recommendations | that path's owner |

Objective #2 stands honestly at **25/29 exactly one action · 0 ambiguous · 9 kinds with no completion
path**. The two proven completion paths are marked CONTRACT-ONLY, because this lane wrote the proving
events itself and an operation that does not emit has not been wired — counting one's own test event as
another lane's integration is how a scorecard stops measuring anything.

---

## 2026-07-27 — Two evidence keys had no chart source at all

Found by AgentUI while making a journey infer from a real chart, and it is a break in the spine
rather than a test problem:

| Key | Was | Consequence |
|---|---|---|
| `chronicConditions` | `?chronicConditions=` only | a patient whose diabetes is on the **problem list** but not coded on today's encounter got no foot exam recommended — `CLIN-DIABETIC-FOOT` and `CLIN-DIABETES-A1C` both offer it as the alternative branch to `diagnoses` |
| `proceduresSelected` | `?proceduresSelected=` only, **no DB source** | `GEN-PROCEDURE-CONSENT` could never fire on a real encounter — the consent, procedure note, coding review and provider signature that protect a procedural visit were unreachable |

Both are now sourced from the chart: chronic conditions from the patient's stated conditions plus the
active problem list, and procedures from the encounter's **PROCEDURE orders** (the order vocabulary is
lab/imaging/procedure/referral, so a lab draw does not trigger a procedure consent).

**The uncomfortable part is what this says about earlier proofs.** The demo passed because it coded
the diagnosis explicitly, and this lane's own proof that an event can clear a workflow gate used
`?proceduresSelected=excision`. The mechanism was genuinely proven — but the trigger was synthetic,
and an engine that only infers from hypothetical evidence proves nothing about a clinic. The override
parameters exist to exercise rules without seeding a chart; using them to demonstrate that the chart
works is a different thing, and easy to slide into.

The general lesson: **a rule that fires only when a test supplies its evidence is indistinguishable
from a rule that works, until someone runs it against a real chart.**

### Proven from a real chart, and then hardened before shipping

The first proof of `GEN-PROCEDURE-CONSENT` that does not depend on a query parameter (live 2007):

```
before ordering    proceduresSelected []                             rule silent
order a procedure  Skin lesion excision / 11400
after              proceduresSelected [Skin lesion excision, 11400]  rule FIRES
                   -> consent_procedure · procedure_note · coding_review · signature_provider
```

Both directions — the negative before, the positive after — because "it fired" alone does not
distinguish a working rule from one that always fires.

Then the question that found three defects earlier in the day, asked *before* shipping rather than
after: **what if the order is cancelled?** `cancelled` is a real order status, and the first version
counted every procedure order regardless. Calling off a procedure would have left the rule firing
forever, demanding a consent, note, coding review and signature for a procedure nobody is doing —
the voided-document defect pointed the other way. Cancelled orders are now excluded; **draft orders
still count**, because "selected but not yet placed" is exactly what the rule is about, and getting
the consent before the procedure is the whole point.

### All ten evidence keys audited, and the two features interlock

Two of ten keys having no chart source made "how many others?" the obvious question, so all ten were
audited rather than only the two reported. Every key now has a verified chart source — ENCOUNTERS,
PATIENTS, ENCOUNTER_DIAGNOSES, PATIENT_PROBLEMS, PATIENT_MEDICATIONS, CLINICAL_FORM_INSTANCES, and now
the encounter's PROCEDURE orders. Confirmed empirically on live rather than by reading the code.

**The compound behaviour is what matters**, and neither half was built for it:

```
active procedure order  -> proceduresSelected populated -> GEN-PROCEDURE-CONSENT fires -> 5 recs
cancel the order
recompute               -> proceduresSelected []        -> rule silent -> withdrawnCount 4
```

**Cancelling a procedure automatically retracts its consent, procedure note, coding review and
provider signature.** No clinician clicks anything; `close` stops being blocked by paperwork for a
procedure nobody is doing. Chart-sourced evidence was built to make a rule reachable and engine
withdrawal was built to stop stale demands — together they produce a system that changes its mind when
the clinic does, which is closer to the directive than either half was on its own.

---

## 2026-07-28 — The engine was evaluating 8 of 32 published rules

Two rule namespaces existed, and the request path read the smaller one:

| Namespace | Contents |
|---|---|
| `engine_configs type=cdie_rule` — singular, one definition per rule | **32 published** |
| `engine_configs type=cdie_rules` — the bundle the inference route read | **8 evaluated** |

`bin/publish-rule-pack.mjs` calls the singular namespace *"the ONE live rule namespace"* and had been
publishing there. The engine only read the bundle. **So `AES-R-001` through `AES-R-024` — the entire
migrated aesthetics pack — were published and dead in the request path.** They fired for nobody and
appeared in no result. The bundle's 8 are a strict subset of the 32, so nothing was lost the other way.

### Why it survived so long

**A rule that is never evaluated is indistinguishable from a rule that has not matched yet.** Both
produce silence, and silence is what a healthy rule engine produces most of the time. That is the same
reason `GEN-PROCEDURE-CONSENT` sat unreachable: the failure mode of clinical inference is *absence*,
and absence is invisible unless something counts what should have been there.

It is worth stating plainly because it generalises beyond rules: **every part of this platform whose
correct behaviour is "usually nothing happens" needs an instrument that counts, not an observer who
watches.**

### What was done, and what was deliberately not

The loader now **merges both namespaces** — bundle entries win on id collision so no behaviour can
regress, and a single malformed rule is skipped with a log rather than costing the whole pack (the
lesson from the workflow list that 500'd on one bad row). Published rules are live again immediately.

**Choosing which namespace is canonical was left to AgentARCH.** Two namespaces for one concept is
precisely the duplication class, and asserting a winner is not a decision a runtime patch should make.
Merging is the safe interim; the loser should then be retired rather than left to drift apart again.

Still unmeasured: how many of the 24 can actually fire. Several key on `service.product_class`,
`injection.area`, `lot.expiry` and `photo.before.present`, none of which the evidence builder supplies
— so some may move from *dead because unread* to *dead because unsourced*.

### Measured: the aesthetics pack is now read, and still cannot fire

Merging the namespaces made all **24 `AES-R-*` rules evaluated** by the request path. **0 of 24 can
match**, because they test twelve evidence fields the builder does not supply:

```
 7x service.category         2x gfe.active            1x contraindication.pregnancy
 2x service.product_class    2x treatment.completed   1x contraindication.isotretinoin
 2x injection.area           1x chief_complaint.text  1x gfe.expiry
 2x skin.fitzpatrick         1x appointment.reason    1x service.modality
```

They have moved from **dead because unread** to **dead because unsourced**. One cause removed, one
remaining — worth stating plainly, because a merge that makes rules *visible* reads like a fix and is
not one.

**This is the measurement AgentAesthetics' Service Attribute Contract proposal needed.** That document
observes there is nowhere for a clinical attribute of a service to live — `CHARGE_MASTER` is
billing-only — and it is still marked PROPOSAL with nothing wired. That gap is now quantified: it is
the **single blocker on 24 published safety rules** covering expired product, lot traceability, GFE
scope, before-photos, Fitzpatrick typing and isotretinoin deferral. A clean acceptance criterion
exists: `bin/audit-rule-reachability.mjs` goes 0/24 → 24/24.

One of the twelve is cheaper than the rest: `chief_complaint.text` is a dotted alias of
`chiefComplaint`, which *is* supplied — the evidence-alias work lost from the tree yesterday would
resolve it on its own.

### The instrument that mattered

`rulesEvaluated` is now on the inference response. Without it, *"the engine never loaded your rule"*
and *"your rule loaded and did not match"* are indistinguishable from outside — which is exactly how
24 published rules stayed dead. **When correct behaviour is usually silence, silence has to be
counted.**

### Verified, then one more spelling problem

The counter settled the merge definitively — `rulesEvaluated: 32`, `rulesFromPerRuleNamespace: 24`.
All 24 previously-dead rules are evaluated; they simply do not match. That question was unanswerable
before the counter existed.

Then a smaller finding inside the larger one: **two of the twelve missing fields are not missing at
all, only differently spelled.** The pack tests `chief_complaint.text` and `service.modality`; the
builder supplies exactly those facts as `chiefComplaint` and `proceduresSelected`; and the evidence
schema *already declares each pair to be the same fact*. Two published safety rules could not fire for
no reason beyond vocabulary.

Each fact is now presented under every spelling the schema declares — measured payoff **8/32 → 10/32**
reachable (`AES-R-001`, `AES-R-010`).

Two rules is a modest number and is not the point: **aliases now work**, so any future dotted spelling
a rule author uses resolves without a code change. That is what makes the vocabulary a piece of
knowledge rather than a coincidence.

**The layering was the deciding argument, not convenience.** Under DR-1 AgentCF owns the knowledge —
the schema is what declares two names to be one fact — and this lane owns evidence routing. Presenting
a fact under every name the knowledge recognises *is* routing, and it keeps the evaluator ignorant,
which is the property that lets every consumer share one. AgentCF had an evaluator-side version in
flight when it was lost; if it returns, the two are redundant rather than conflicting.

### The founder's worked example fires (live 2012)

```
rulesEvaluated  32
firedRules      AES-BOTOX-INTENT · AES-R-001 · AES-PREGNANCY-SCREEN · AES-R-010 ·
                GEN-PROCEDURE-CONSENT · GEN-MISSING-DOC
recommendations 31        actionable 21
```

`AES-R-001`'s own description reads *"The founder's worked example: 'I want Botox for forehead
wrinkles' should assemble the whole…"* — and it had never fired. Two causes, removed in order: it
lived in the namespace the engine did not read, then it keyed on a spelling the evidence did not
carry. Reachability is now **10/32**.

### The mistake in the middle is the useful part

The first attempt at the vocabulary fix **did not work and looked like it had**. It wrote
`evidence["chief_complaint.text"]` as a flat key containing dots; `resolveField` splits on `.` and
walks nested objects, so it resolved to null. The response showed the field populated, cleanly and
convincingly, and the rule still could not fire.

That is the same defect this lane keeps finding elsewhere — *a clean write proves nothing about
whether anything can read it* — and it landed one commit after the layering argument for putting the
change in the evidence router. **Routing a fact to a consumer means writing it in the shape the
consumer reads, not the shape that looks right.**

Two process notes worth keeping:

- The prediction "this unlocks AES-R-001 and AES-R-010" was *measured* against the rule definitions
  and still wrong, because the measurement modelled the knowledge correctly and the runtime not at
  all. **Static analysis of rules cannot tell you what the engine does with them.**
- The check that caught it was reading `firedRules`, not the evidence field just added. Verifying the
  thing you changed tends to confirm you changed it; verifying the outcome is a different question.

### Guarding it: whatever is published must be evaluated

The invariant that broke — 32 published, 8 evaluated — could only be checked by someone remembering
to look. `DLP-CDIE-3` now asserts it on every gate run:

| Assertion | Fails when |
|---|---|
| `rulesEvaluated` is reported | the two states "never loaded" and "loaded, did not match" become indistinguishable again |
| `rulesEvaluated >= 1` | the knowledge base is not reaching the request path at all |
| `rulesEvaluated >= published` | anything in `engine_configs type=cdie_rule` is published to a namespace the runtime does not read |

The third is the real one. Publishing into a namespace nobody reads now fails the gate instead of
going unnoticed for weeks.

Deliberately `>=` rather than `==`: the engine legitimately merges the per-rule namespace with the
older bundle, and pinning equality would fail the moment AgentARCH rules on which namespace survives.
**The invariant worth guarding is "nothing published is unread", not a particular arithmetic** — a
test that encodes today's implementation instead of the property will be deleted by whoever changes
the implementation, and the property will go unguarded again.

### A counter that omitted the awkward cases

Once the aesthetics rules fired, four recommendations came back `actionable:false` and were **not
counted** in `unactionableCount`. The enrichment treated *"no operation claims this kind"* as
equivalent to *"this is engine semantics"*, so three real work kinds were excluded from the very
number that exists to surface them.

**A counter that quietly omits the awkward cases is worse than no counter, because it reads as
evidence.** Only `alert`, `blockSign`, `launchWorkflow` and `computeMissing` are legitimately unbound;
everything else is now counted and flagged `unboundKind`.

Three spellings were bound as a result, found by measuring what came back unattached rather than by
reading the pack:

| Pack emits | Registry had | Now bound to |
|---|---|---|
| `recommendDocument` | `requireDocument` / `optionalDocument` | `document.create` |
| `triggerInventory` | `requireInventory` | `inventory.recordLot` |
| `triggerFollowup` | `triggerFollowUp` | `followup.schedule` |

**The last differs only by a capital U.** A bound kind was invisible to the runtime because of one
letter, and a clinician would have seen a recommendation nothing could discharge for that reason
alone. Nothing currently enforces casing agreement between the rule converter and the registry.

### The shape that keeps recurring

Four times in one night, in four different places, the same failure: **an absence that nothing
tallies.**

| Where | The absence |
|---|---|
| 24 aesthetics rules | published into a namespace the runtime never read |
| `GEN-PROCEDURE-CONSENT` | keyed on an evidence field with no chart source |
| dotted evidence spellings | written flat, unreadable by the resolver, and *looked* correct |
| `unactionableCount` | excluded the unbound kinds it exists to report |

Each looked like silence, and silence is the normal output of a healthy inference engine. The
defensible response is not more vigilance — it is that **every part of this platform whose correct
behaviour is "usually nothing happens" needs something that counts.**

---

## 2026-07-28 — Correction: the objective-#2 figures on this page were measured on a third of the pack

Both audits read `engine_configs type=cdie_rules` — the 8-rule bundle — and never saw the per-rule
namespace. **Every objective-#2 number recorded above describes 8 rules out of 32.** Corrected
figures, measured against the pack the runtime actually evaluates:

| | reported above | actual |
|---|---|---|
| (kind, ref) pairs | 29 | **61** |
| exactly one action | 25/29 | **48/61** |
| kinds with no completion path | 9 | **16** |
| knowledge-base reachability | *"100%"* | **31%** (10/32) |

**"100% reachable" is the one that matters.** An instrument measuring a different pack from the one
that runs is worse than no instrument, because it reads as proof — and these are the audits built
specifically to catch that class of problem. They had it themselves.

A false alarm was fixed in the other direction too: `recommendDocument` was missing from the audit's
document-kind set, so eight correctly-bound recommendations were reported as gaps (no-completion
37 → 29). **A false alarm pointing at real work costs differently from a missed one** — it sends
someone to fix what already works, and it erodes trust in the number.

### Five kinds deliberately left unbound

`triggerBilling`, `triggerChart`, `triggerDocument`, `triggerOrders`, `triggerWorkflow` have no
operation, and their refs are verb-shaped — `billing.apply_member_pricing`, `orders.suggest_labs`,
`workflow.notify` — unlike every clinical kind, whose ref names a document or section. They look like
platform automation rather than clinician work.

That is a question for AgentCF, not an answer for this lane. If they are automation they should be
declared so the scorecard stops counting them as gaps; if they are work they need operations.
**Guessing is how a documentation layer quietly acquires opinions about billing.**

### The rule this leaves behind

**An audit must load the pack the runtime evaluates, not the one that is convenient to read.** Every
instrument on this platform should be able to answer "where did you get that, and is it the same
place the code gets it?"

### The authoring→firing chain is now guarded end to end

| Guard | Question it answers |
|---|---|
| `DLP-CDIE-3` (gate) | is everything **published** actually **evaluated**? |
| `bin/audit-rule-reachability.mjs --ratchet` | is everything **evaluated** able to **fire**? |
| `DLP-CDIE-2` (gate) | does a fired recommendation **complete** correctly, in both directions? |
| `bin/audit-recommendation-actions.mjs` | does every recommendation have **one action and one completion path**? |
| `publish-definition.mjs --check` | has a committed definition **drifted** from live? |

Baseline recorded at **22 unreachable of 32**, following the repo ratchet convention: above baseline
warns (fails with `--enforce`), below baseline passes and asks to be re-recorded.

`--strict` — "zero unreachable" — already existed and is the wrong shape. It fails every run until the
Service Attribute Contract lands, and **a bar nobody can clear is one teams learn to ignore.** The
ratchet asks what can be enforced today: did anyone author a rule against evidence that does not
exist?

Exit codes were verified in all three directions rather than assumed. The first attempt read `tail`'s
status through a pipe instead of node's and reported a passing `0` for the failing case — the
measurement was wrong, not the code, which is its own small illustration of why the failure path has
to be exercised deliberately.

---

## 2026-07-28 — Automation ruling applied: five kinds were never gaps

AgentARCH ruled that `triggerBilling`, `triggerChart`, `triggerDocument`, `triggerOrders` and
`triggerWorkflow` are **`class: automation`** — actions the *platform* performs when a rule fires,
carrying the same standing as `launchWorkflow`. No clinician work item exists to complete, so they
bind to no operation by design and leave the completability scorecard.

| | before | after |
|---|---|---|
| exactly one action | 48/61 | **48/55** |
| kinds with no action | 13 | **7** |
| no completion path | 29 | **23** |

They were never gaps, and counting them as such overstated the outstanding work — the scorecard
getting more honest in the favourable direction, for once.

`orders.suggest_labs` is inside the ruling deliberately: **the engine's act of suggesting is the
automation**; a clinician accepting the suggested order is a separate, ordinary artifact with its own
lifecycle. That distinction is what keeps "the platform did something" from being mistaken for "a
person owes something".

The classification lives in the **registry**, not in the audit's constant, so it travels with the
definition rather than with one script.

### What was deliberately not built

The ruling puts the execution home in this lane — each automation firing an engine action recorded
through `SOURCE_RECORD_EVENTS` — and names one guard: **`billing.apply_member_pricing` changes
money**, so revenue-touching automation runs only where the operation is idempotent and reviewable.

That guard's design belongs to the billing lane. Building money movement out of a documentation rule,
unattended, before the guard exists is the clearest example all night of work that *could* be done and
*should not be*. The other four are safer, but shipping half an orchestration surface piecemeal is its
own mess, so they are held together.

**"Named not legislated" is being read as a stop, not a nuance.**

---

## 2026-07-28 — What stands between the Botox encounter and `close`, precisely

The founder's flagship path now fires **entirely from chart data**. A new encounter with the chief
complaint on the record and one real procedure order:

```
chiefComplaint      "Botox for forehead wrinkles"                (ENCOUNTERS)
proceduresSelected  [Neurotoxin injection - glabellar, 64615]    (a procedure ORDER)
fired               AES-BOTOX-INTENT · AES-R-001 · AES-PREGNANCY-SCREEN · AES-R-010 ·
                    CLIN-POLYPHARMACY-RECONCILE · GEN-PROCEDURE-CONSENT · GEN-MISSING-DOC
32 recommendations · 25 actionable · stepsSatisfied 0 of 11
```

That morning, the same path produced **zero** recommendations on demo data, and sixteen only when fed
hypothetical evidence.

### The six kinds blocking `close`

| Kind | Can a clinician do it? | Will doing it close it? | Needs |
|---|---|---|---|
| `requireDocument` | yes | **yes** | nothing — works today |
| `requireConsent` | yes | no | one emit: `consent.captured` |
| `requireInventory` | yes | no | one emit: `inventory.lot_recorded` |
| `requireCodingReview` | yes | no | one emit: `coding.reviewed` |
| `requireSignature` | yes | no | ref `signature_provider` is an act, not a document type |
| `requirePhotograph` | **no** | no | a capture surface that does not exist |

**One kind works, four are one line of code away, one needs building.** That is the entire distance
between the flagship demo and a closeable encounter.

### Why this framing is worth more than the work that produced it

"The demo is blocked" and "five discharge paths are one emit call away, and one capture surface does
not exist" describe the same system. The second can be assigned, estimated and finished; the first
invites a rewrite.

The engine, the evidence sourcing, the four-direction lifecycle and the five guards are done and proven
on live. What remains is not architectural — it is five small asks with named owners, and every emit
contract and worked example is already published.

---

## 2026-07-28 — `requireSignature` was bound to the author signing their own work

Recorded above as *"ref `signature_provider` is an act, not a document type — needs a ref
convention"*. **The ref was fine. The operation was wrong, and wrong in the dangerous direction.**

`requireSignature` pointed at `document.sign` — the **authoring attestation**. The only rule that emits
it (`AES-R-016`) requires it because *"the treating provider's role works under supervision"*: it is a
**supervision co-signature**.

So the binding claimed a supervision requirement is discharged by the supervisee signing their own
note. It would have read as *satisfied* on every surface — queue, workflow state, completeness meter —
while the attestation that legally matters never happened. **A wrong binding that resolves is worse
than a missing one that reports itself.**

Rebound to `signature.capture` → `POST /api/clinical-signatures`, which exists for precisely this and
says so in its own header: *"a resident signs, an attending counter-signs… in a teaching practice the
counter-signature is the attestation that legally matters, and it happens hours later, by someone
else."*

`document.sign` now satisfies no kind, recorded as such rather than left looking orphaned: it is what
makes a document valid **evidence** for reconcile, not what satisfies a signature **requirement**.
Conflating those two jobs is what produced the original error.

### The cheapest remaining completion path

`ClinicalSignatureRoutes` **already emits** `clinical_document.signature_recorded`. It routes through
`writeEvent`, which deliberately omits `ENCOUNTER_ID` (the FK trap) and carries no payload — and
reconcile scopes by encounter, so it cannot see it. Two fields on an existing emit:

```
ENCOUNTER_ID   set it — safe here, the encounter demonstrably exists
EVENT_PAYLOAD  {"ref": "<the recommendation ref>"}
```

Every other outstanding completion path needs an emit written from scratch. This one needs an existing
emit to carry two more fields.

---

## 2026-07-28 — Two "executable actions" were GET endpoints

Auditing bindings for **correctness** rather than existence — the lesson from `requireSignature` —
turned up two more of the same class:

| Binding | Was | Is |
|---|---|---|
| `coding.review` | `GET /api/charge-review` | `POST /api/charge-review/{reviewId}/approve` |
| `quality.report` | `GET /api/quality-measures` | `POST /api/quality-measures` |

Both resolved. Both counted as *"OK 1 action"* on the scorecard. Neither could possibly work —
**reading a charge review is not doing one.** Verified on live before correcting: `POST
/api/charge-review` is 405 and the route registers `/approve` and `/return`; `POST
/api/quality-measures` validates.

An error worth naming: `quality.report`'s **completion** path had already been promoted as proven while
its **action** was a GET. The completion was genuinely proven. The action was not. Those are two
separate claims, and only one was being checked — the same shape as counting bindings that exist
without asking whether they are right.

### The guard, and why it was tested by breaking something

The audit now fails on any operation that binds a GET while claiming to satisfy a kind. It was verified
by injecting a GET into a live registry entry, watching it flag and exit 1, then restoring.

**A guard that has only ever seen a clean system is not a guard yet** — it is an assertion about a
system that happened to be passing. Every guard added tonight has been exercised against a deliberately
broken state for that reason.

The scorecard is unchanged at 48/55. These were never counted as gaps, which is exactly why they
survived: **the failures that last are the ones the instruments approve of.**

---

## 2026-07-28 — Six of the seven non-document bindings pointed at the wrong act

Yesterday's entry above reported two "executable actions" that were GET endpoints, and I treated that
as a closed finding. It was not a finding, it was the first two instances of a class. Continuing to
read handlers rather than probe them took the count of wrong bindings from **three to six**.

| Kind | Was bound to | The act it actually is | Why the binding was wrong |
|---|---|---|---|
| `requireSignature` | `document.sign` | — | AUTHOR signing own work, not the supervision co-signature `AES-R-016` asks for |
| `requireCodingReview` | `GET /api/charge-review` | `POST …/{id}/approve` | a GET cannot discharge a requirement |
| `triggerQualityReporting` | `GET /api/quality-measures` | `POST …/attestations` | reading measures is not reporting them |
| `requireConsent` | `POST /api/consent-to-treat` | `POST …/{id}/sign` | **`insertConsent` hardcodes `status='PENDING'`** — a created consent is a form nobody signed |
| `requireSignature` (again) | `POST /api/clinical-signatures` | `POST …/{id}/sign` | the bare POST **REQUESTS** a signature (`status='required'`) — it would discharge a requirement by creating another one |
| `triggerQualityReporting` (again) | `POST /api/quality-measures` | `POST …/attestations` | that handler `INSERT`s into `quality_measure_catalog` — it authors a new measure DEFINITION |
| `triggerEducation` | `POST /api/patient-education` | `PUT …/{id}` (`markDelivered`) | queuing a handout is not educating a patient; `AES-R-023`'s ref is literally `education.deliver` |
| `requireInventory` (3 refs) | `POST /api/aesthetic-treatments` | one ref only | see the ref-scoping section below |

**Two of these are corrections of corrections.** `quality.report` I moved from GET to POST yesterday
and verified only that the POST validates — **I fixed the verb and not the resource.** Following my own
corrected registry, a clinician discharging the requirement would have written junk into shared
practice configuration while the attestation never happened. `signature.capture` I rebound yesterday
off `document.sign` and today off the signature-REQUEST endpoint. Both of its errors were **an act
adjacent to the required one**, which is the shape to look for.

### The cause, and the generalised fix

Every one of the six was found by **reading the handler**. Not one was found by probing. `_meta.honesty`
in the registry defined `bound` as *"the endpoint answered on live"*, and a probe returning 400 on an
empty body proves a handler exists and **nothing whatever about what it does**. It cannot distinguish:

```
create (status PENDING)        from  sign
request a signature            from  give one
insert into a measure catalog  from  attest against a measure
assign a handout               from  deliver it
read a charge review           from  approve it
record an administered lot     from  deduct stock
```

Each of those distinctions was a live binding that resolved and scored **OK 1 action** on the
objective-#2 scorecard. So the **strength of the evidence behind a binding is itself a thing to count**
— the fifth instance of this lane's recurring shape, *an absence that nothing tallies*.

Every operation now carries `evidence`: `probe-only` · `handler-read` · `live-end-to-end` ·
`absence-verified`. `bin/audit-recommendation-actions.mjs` flags anything `probe-only` or ungraded, and
`--strict` fails on it. Verified by degrading a live entry to `probe-only`, watching it flag and exit 1,
then restoring.

### `satisfies` is keyed by KIND; correctness is per (kind, REF)

`requireInventory` / `triggerInventory` arrive with refs asking for **three different acts**, and one
operation claimed all three:

| ref | the act | reality |
|---|---|---|
| `administered_product_lot`, `product_lot_tracking` | record what entered the patient | ✅ writes lot / expiry / manufacturer / NDC |
| `inventory_deduction`, `inventory.deduct` | decrement stock | ❌ **no stock store exists anywhere in the platform** |
| `inventory.flag_lot` | quarantine a lot (`AES-R-017`) | ❌ same |

So the scorecard reported an executable action for deducting stock that no code can perform — and for
flagging a lot it pointed at **recording another administration from the lot you meant to quarantine**,
a safety act inverted. Searched the DDL for a stock/lot table and the router for an `/api/inventory`
context: neither exists.

Operations may now declare **`satisfiesRefs`**, and the runtime and the audit both resolve refs-scoped
before kind-wide. `inventory.deduct` and `inventory.flagLot` split out as `unimplemented` with the
store gap named. **Whether aesthetics stock is its own entity or a governed extension is a persistence
ruling (AgentARCH), not a documentation-layer call.**

### A retracted event went on satisfying its requirement forever

Reconcile closes a recommendation from a document **or** an event. The reopen pass found reopenable rows
by *"holds a `DOCUMENT_ID` that is no longer valid evidence"* — and an event-satisfied row deliberately
carries a **NULL `DOCUMENT_ID`**, because that column means *the document that discharges this*. So it
skipped every event-closed row with the comment `nothing claimed to satisfy it`. Something had.

**Revoke a consent, or return an approved charge review, and the requirement stayed discharged on
evidence that had been withdrawn — with the workflow gate it cleared staying clear.**

The ledger is append-only, so *"the evidence vanished"* can never happen for an event. **The retraction
is itself an event, and the LATEST event for a ref decides.** Operations declare `retractionEventType`
(`consent.revoked`, `coding.review_returned`, `quality.report_retracted`, `clinical_document.signature_declined`)
because only an owner knows what undoing their work is called. Both directions now call **one**
predicate, `eventSatisfying()` — three defects in this file came from the satisfy path and the
un-satisfy path each deciding for themselves what counted as evidence.

`quality.report` is where I got this wrong again inside the same hour: I wrote that nothing in the
platform un-reports a measure. `DELETE /api/quality-measures/attestations/{id}` does exactly that. **I
asserted an absence without reading the route — the same failure mode as the bindings, twice in one hour.**

### Scorecard moved the honest way

| | before | after |
|---|---|---|
| exactly one action | 48/55 | **45/55** |
| NO action | 7 | **10** |

**It got worse because three impossible bindings stopped being approved.** If a number improves when
you look harder, look again.

Gate **`DLP-CDIE-4`** pins the retraction direction *and* that a retracted ref can be satisfied again —
a patient who re-consents must not stay permanently blocked.

**Shipping state:** registry corrections are **live** (they publish through the API). The runtime change
— retraction reopen, per-ref resolution — is committed (`867d17f09`, `a4675de82`) and **not deployed**:
`bin/cloud-deploy.ps1` refuses on the daily gcloud reauth lapse, which needs a founder `gcloud auth login`.

-- AgentDLP

---

## 2026-07-28 — The Recommended Documentation panel: contract live on build 2021

Founder direction, verbatim: a persistent **Recommended Documentation** panel on the right of the
encounter — *Required now / Suggested / Completed* — the same list enforced again at sign-off, the
provider never sent to a form launcher, and each row easy to **view, approve or deny**.

**The panel is AgentUI's surface. This is the contract behind it**, on the existing endpoint rather
than a new one (a second encounter-scoped read would be the duplication STOP rule):

```
GET /api/documentation-recommendations?encounterId={id}&view=encounter
```

```jsonc
"panel": {
  "requiredNow": [ … ], "suggested": [ … ], "completed": [ … ], "declined": [ … ],
  "signOff": { "canSign": false, "remainingRequired": 3, "remaining": [ … ], "declinedCount": 0 },
  "blockingVocabulary": [ "requireDocument", "requireConsent", "requireSignature", … ],
  "blockingSource": "engine_configs type=workflow — union of every step's completeWhen.evidence.noOpenRecommendations"
}
```

Live on build 2021:

```
Required now — 3      Procedure Consent · Procedure Note · Provider Signature
Suggested   — 1       Treatment
Completed   — 1       Declined — 0
signOff: canSign=false  remainingRequired=3  declinedCount=0
```

### Never group the provider's list by the kind's name

`requireSection` reads exactly like a requirement and **blocks nothing** unless a workflow step names
it — and none does. On the founder's own diabetic-visit example:

| item | kind | actually blocks signing? |
|---|---|---|
| Diabetic Foot Exam | `requireDocument` | **yes** |
| Medication Reconciliation | `requireSection` | **no** |
| A1C Review | `requireSection` | **no** |

Group by name and the rail says *"Required now — 3"*, the sign dialog says *"Remaining required: 3"*,
and **the encounter signs anyway.** `blocksSign` is therefore read from the workflow definition, and
**one read serves both surfaces** so they cannot disagree — if they ever did, the provider-facing one
would be the lie. Founder ruled 2026-07-28: leave `requireSection` under **Suggested**.

Read failure yields an EMPTY blocking vocabulary, so an unreachable definition shows everything as
Suggested. Over-stating what blocks a signature is the more expensive error: it stops a provider
finishing a visit over a rule nothing enforces.

### View · Approve · Deny

All three already existed on the lifecycle (`/accept`, `/dismiss` — which already demanded a reason —
and `/satisfy`); what was missing was the row naming them. Each row now carries `actions`, so no
surface has to know our path shapes.

**Denied is not completed.** I shipped it that way for an hour and it was wrong: filing a dismissed
recommendation under *Completed* tells a provider that documentation they **declined** was **done**, in
the one list they scan to decide what is left. Denied rows leave the working groups entirely.

**Denying a required row clears the sign-off block it was holding** — correct, it is a clinical
override, and the mandatory reason is what makes it defensible. But an encounter can then reach
`canSign` *because documentation was refused rather than done*, so `signOff.declinedCount` exists to
make the override visible. A silent override is reasonable in the moment and indefensible six months
later in a chart review.

### Two defects found by reading the LIVE panel, not the code

Build 2019 shipped both; build 2021 fixed both.

1. **"Procedure Consent" appeared twice in Required now.** `GEN-PROCEDURE-CONSENT` emits
   `consent_procedure`; the aesthetics rules emit `procedure_consent`. Same ask, two spellings — the
   provider cannot tell which to do, does one, and the other stays open forever. Deduplicated on
   (bucket, kind, title) keeping every ref in `alsoRefs`, and scoped to a single bucket so a
   satisfied-plus-open pair is never collapsed into one. **The spelling collision itself is a rule-pack
   authoring matter — AgentCF.**
2. **`view` offered a string, not a link:** `"POST /api/consent-to-treat/{id}/sign"`. The registry
   stores an endpoint as one `"METHOD /path"` string and I passed it through as a `url`, making the
   surface parse our storage format. Now split, and an unresolved `{placeholder}` returns
   `resolvable:false` with the operation's `precedingStep` — you cannot sign a consent before creating
   one, so the surface offers **Start**, not a link that 404s in front of a provider.

Both came from looking at the running panel. That is now nine defects in two days found by exercising
the system and none by inspecting it.

### What still stands between this panel and a finished encounter

**The panel renders correctly and a provider cannot clear it.** Of the kinds gating `close`, only
`requireDocument` both has a working action *and* closes when performed. `requireConsent`,
`requireSignature`, `requireCodingReview` and `requireInventory` each need **one emit call** from their
owning lane; `requirePhotograph` needs a capture surface that exists nowhere.

**Not built, and deliberately not faked:** nothing maps a formType to an encounter section
(HPI / ROS / Exam / Assessment / Plan), so *"take the provider directly to the relevant section"* is
unimplementable without inventing clinical metadata. That belongs in AgentCF's template definitions;
the panel will pass it straight through the day it exists.

-- AgentDLP
