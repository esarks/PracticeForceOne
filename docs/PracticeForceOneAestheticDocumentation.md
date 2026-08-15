---
title: "PracticeForceOneAestheticDocumentation"
---

# PracticeForceOne Aesthetic Documentation

**Owner:** AgentAesthetics · **Created:** 2026-07-25 · **Last updated:** 2026-07-26 ·
**Status:** the contract is now **published and proven**; see
[§10 Current state](#10-current-state--2026-07-26) for what was met, what is still open, and what
of my own work is being retired.

Founder, 2026-07-25: *"understand what is being built in [Specialty Forms](PracticeForceOneSpecialtyForms.html).
Determine if this applies to aesthetics and if it does, this will need to be a similar functionality
only isolated to aesthetics part of the practice … but it will need to leverage the functionality of
clinical documentation."*

**Answer: it applies, completely.** Aesthetics does **not** get its own documentation architecture.
It rides the canonical Clinical Document contract that AgentDB is building, and the aesthetics part
is an **isolation dimension plus five capabilities**, not a second system.

---

## 1. What is being built over there

[Specialty Forms](PracticeForceOneSpecialtyForms.html) measured the starting position on build 1964, and
[Clinical Documentation System](PracticeForceOneClinicalDocumentationSystem.html) is the founder's
response to it:

| Measured | Consequence |
|---|---|
| ~1,700 clinical form definitions authored across 97 batches | Real domain content — months of work |
| **97%** have no data binding; **0%** can save | Authored screens with **no destination** |
| 587 creatable tables, 358 exist, **0 clinical specialty tables hold a row** | Not a backend problem — a **binding** problem |
| No diagnosis / problem / visit reason routes a provider to a form | The provider cannot find the right one, and shouldn't have to |

The directive: **one** documentation architecture. Not one persistence model per specialty, not one
table per form, not one API per condition. A canonical **Clinical Document** is the system of record
(org · patient · encounter · provider · definition **+ version** · structured payload ·
draft/completed/signed/amended/void · provenance · audit · version chain), with a 13-point
definition of done and **recommendation** replacing catalog browsing. Specialty forms become
**documentation templates, not applications**.

---

## 2. Does it apply to aesthetics? Yes — and the lane was heading for the same wall

[The aesthetics catalog](PracticeForceOneAesthetics.html) is **120 forms** across 9 domains. Left as a
catalog it becomes exactly what the Specialty Forms page measured: well-formed content with nowhere
to land. The overlap is not partial — it is the same shape:

| Specialty Forms finding | Aesthetics equivalent |
|---|---|
| Authored content, no destination | 89 of the 120 rows are GAP with no store behind them |
| Provider can't know which form is needed | An injector must not browse 35 consents to find the filler one |
| Draft / sign / lock / amend / chart view missing | A cosmetic treatment record needs **all** of it — plus a lock, which the corpus shows ("Locked By …") |
| Tenant isolation must be server-side | Same, plus per-practice opt-in (AES-7) |
| "Not one table per form" | I had already started drifting — see §5 |

Every one of the 13 definition-of-done points is a requirement for a cosmetic record too. The
aesthetics lane must therefore **consume the same contract**, not fork one.

---

## 3. What is shared (leverage, don't rebuild)

Aesthetics takes these from the Clinical Document contract **unchanged**:

draft · save · resume by (patient, encounter, template) · reload without loss · **sign** ·
**immutability of the signed payload** · **amend as a new version referencing a retrievable
original** · version chain · full audit history · chart retrieval by patient / date / template ·
**server-side org scoping**.

A cosmetic consent, an aesthetic intake and a treatment note are all **Clinical Documents with a
different template**. No aesthetic document model. No per-form aesthetic tables. No duplicated
persistence logic. If the contract can express a signed, amendable Annual Wellness Visit, it can
express a signed, amendable Lips & Cheeks treatment record.

---

## 4. What must be isolated — the aesthetics part

Isolation is one field plus five capabilities. Stated now so the contract is **designed** for them
rather than retrofitted, exactly as AgentUI did for the clinical workflow.

### 4.1 `documentDomain` — the isolation dimension

Every Clinical Document carries `documentDomain ∈ {CLINICAL, AESTHETIC}`, **enforced server-side**,
defaulting to CLINICAL. It drives:

- **Two timelines on one client.** The corpus's real product screen shows `Cosmetic Timeline` and
  `Health Timeline` as separate tabs on the same patient, and its chart audit splits `Cosmetic
  Procedures` / `Health Procedures`. Chart retrieval must accept a domain filter so a cosmetic
  record never appears in the clinical chart list, and a clinical note never appears in the cosmetic
  journey. **Same patient, two histories** — that is the hybrid practice (insurance-billed primary
  care and cash-pay cosmetic on one record), which is the segment PFO is aiming at.
- **Per-practice enablement.** A practice that has not opted in (AES-7) has no aesthetic documents,
  no aesthetic templates offered, and no Aesthetics menu zone.
- **Reporting separation.** Cosmetic volume must not contaminate clinical quality measures, and
  cash-pay revenue must not land in claims reporting.

### 4.2 Recommendation runs off a different signal

AgentUI's engine recommends from **diagnosis · problem list · visit reason · appointment type**.
None of those exist for a cosmetic visit — there is no ICD-10 for "lips & cheeks". Aesthetics
recommends from:

**booked service → template**, plus **treatment plan / series position**, **product class**, and
**Good Faith Exam scope**. The service the client booked is the strongest signal in the whole
vertical: it determines the consent owed, the questionnaire owed, the photo set owed and the
treatment template. Same engine, different input map — it must be a **data-driven mapping**
(definition metadata or an `engine_configs` row), not a hard-coded clinical-only rule.

### 4.3 The paperwork gate must be part of signing

The single structural idea of the aesthetic chart: **nothing signs until the paperwork closes.** The
corpus shows Paperwork (Consents ✓ / Questionnaires ✗) · Photos · Payment · Traceability as
*completion conditions* on the record, and a queue counting what never closed (2,709 charts awaiting
provider signature).

The contract's sign transition must therefore support **declared completion conditions** — a
template declares what must be true before it may be signed, and the server refuses otherwise. For
aesthetics: required consents **ACTIVE for that modality**, required questionnaires complete,
required photo set present, payment captured. This is capability **P-4**, and it is not
aesthetics-only — an immunization or a procedure note wants the same thing.

### 4.4 Two signatures, not one

Clinical signing is one provider. Aesthetics routinely needs **injector signs → medical director
counter-signs**, with the un-counter-signed backlog as a work queue (the corpus's Chart Audit:
awaiting provider / awaiting MD / signed & returned). The contract needs a **counter-signature step
and a queryable "awaiting co-sign" state**, not just `signedBy`. Also needed: **witness** signature
on high-risk consents (filler), which the same signature lifecycle should carry.

### 4.5 Media is part of the document

The Clinical Document model as written has no media dimension. In aesthetics, **photos are clinical
data**: standardized before/after sets, treatment-marking overlays, and a **per-image consent state**
that decides whether an image may ever leave the chart. The document must be able to own a media set
with per-item metadata, and marketing export must be **blocked by default** unless a signed media
release covers that image. Capabilities **P-1** (media field type) and **C5**.

### 4.6 Scoped standing authorization

The **Good Faith Exam** pre-authorizes areas, product classes and devices with an expiry, and every
later treatment document executes **against** it. The clinical model has no analogue: a document that
authorizes *other* documents. Capability **P-5**; without it the keystone aesthetics workflow cannot
be expressed.

---

## 5. What this changes in what I already built — honestly

`ddl/migrations/031_create_aesthetics.sql` (commit `a160e8093`) created three tables **before** this
contract existed, to satisfy the separation directive. Measured against "not one persistence model
per specialty", two of the three are wrong and one is defensible:

| Table | Verdict |
|---|---|
| `aesthetic_intakes` | **Retire into the Clinical Document model.** It is a questionnaire — a document with a payload. No structured-reporting need. |
| `aesthetic_consents` | **Retire into the Clinical Document model.** A consent is a signed document with a version chain; that is precisely what the contract provides. Keep only `modality` + `status` as indexed document metadata so the paperwork gate (§4.3) can ask "is there an ACTIVE filler consent for this client?" without scanning payloads. |
| `aesthetic_treatments` | **Keep typed columns**, under the directive's own exception — *"no specialty-specific persistence unless explicitly required by structured reporting."* Lot number, expiry, product, units and area must be **queryable**, because a recall asks *"which clients received lot X"*, inventory reconciliation asks *"units charted vs units drawn from this vial"*, and rebooking asks *"who is due at 12 weeks"*. A JSON payload scan cannot answer any of those, and a product recall is a patient-safety obligation. **Requesting ratification** from AgentDB + founder. The narrative half of the treatment record still lives in the document. |

This is the same tension the CDS page already records between converting the catalog and composing
modules — resolve it once, in the contract, rather than per lane.

---

## 6. What the contract must expose for aesthetics

Filed the way AgentUI filed theirs, so the persistence model is designed for it:

| Requirement | What the contract must provide |
|---|---|
| Two timelines | `documentDomain` on the document, server-enforced, and a **domain filter on chart retrieval** |
| Paperwork gate | Declared **completion conditions** checked server-side on the sign transition |
| Consent lookup | Query "is there an ACTIVE consent of modality M for patient P?" without reading payloads |
| Co-signature | A counter-signature step + a queryable **awaiting-co-sign** state (per provider, per practice) |
| Witness | A second signer on a document that is not a provider |
| Standing authorization | A document that **authorizes** later documents, with scope + expiry, and a link from the executed document back to it |
| Media | A media set owned by the document, with **per-image consent state**; marketing export denied by default |
| Structured facts | A sanctioned way for a template to declare a small set of **typed, indexed** fields (lot, product, units) alongside the payload — so §5 does not require a bespoke table |
| Per-practice enablement | Templates and documents scoped so an opted-out practice sees none of it |

---

## 7. Definition of done — the 13, plus 5

All 13 clinical points apply unchanged. Aesthetics adds:

14. A cosmetic document **never** appears in the clinical chart list, and vice versa, proven on one
    client with both.
15. The document **cannot be signed** while a required consent, questionnaire or photo set is missing.
16. An injector's signature leaves the document in **awaiting-MD-co-sign**, and it appears in a queue
    until counter-signed.
17. A treatment document is **traceable to its lot**, and a recall query returns every affected client.
18. A practice that has not opted in has **no aesthetic templates, documents or menu**.

---

## 8. Sequencing

| State | Work |
|---|---|
| **Blocked on the contract** | Retiring `aesthetic_intakes` / `aesthetic_consents` into the document model; draft/resume/sign/amend/chart view for cosmetic documents; the paperwork gate |
| **Starts now, needs no contract** | The **service → template recommendation map** (booked service determines consent + questionnaire + photo set + treatment template) — this is the aesthetics equivalent of AgentUI's engine and the change that turns a 120-form catalog into a one-item decision; and the **GFE scope model** (what a standing authorization must express) |
| **Frozen** | Expanding the aesthetics form catalog. The 120 rows are inventory, not a build queue — a form earns a binding when a real workflow needs it |

---

## 9. Statement for a clinic (plain English)

Written for the founder to send to a practice. Says why aesthetics belongs in the same system, in
language a clinic reads rather than a lane reads.

> You already care for these patients. Aesthetics is the same people, the same front desk and the
> same record — so it belongs in the same system, not a second one bolted on beside it.
>
> A patient who comes to you for a wellness visit and also wants a cosmetic treatment should not
> exist twice: not two charts, two logins, two schedules, or two places their allergies and
> medications are written down. One record means whoever is treating them can see everything that
> matters, and your staff learn one system instead of two.
>
> Cosmetic care is kept separate where separation matters. Cosmetic visits do not clutter the
> medical chart, do not enter your quality reporting and do not mix with insurance billing. The
> patient has two timelines — a health history and a cosmetic history — on one record.
>
> The documentation discipline is the same as clinical care, because the risk is. Injectables and
> energy devices are medical procedures with medical complications, so a cosmetic treatment is
> documented like one: consent signed before treatment, the record signed by whoever performed it
> and counter-signed by the supervising physician, signed records locked, later corrections tracked
> as amendments rather than edits, and a full audit trail. Every unit injected is tied to its
> product lot, so a manufacturer recall is answerable in seconds instead of by opening charts.
>
> And if you do not offer aesthetics, you never see any of it. It is switched on per practice.

**Claim discipline when using this.** Built and committed today: the separation (own tables, own
endpoints, per-practice menu) and lot-level traceability on the treatment record. Designed and filed
against the Clinical Document contract, not yet usable: consent-before-treatment enforcement,
signing/locking, counter-signature, amendment history. State those as what the system does, or as
go-live behaviour — not as something a clinic can use this month.

---

## 10. Current state — 2026-07-26

### The contract landed, and most of what I filed was met

AgentDB **published and then proved** the Clinical Document Contract on live **1969**: 76/76
assertions, plus **10/10 two-organization isolation** (org B refused read, update, sign, list, audit
and a create into org A's practice using org A's real ids). Measured against the nine requirements
I filed before publication:

| Filed requirement | Outcome |
|---|---|
| Resume a draft by (patient, encounter, template) | ✅ met |
| Signed payload immutable server-side | ✅ met — a signed row is never updated, amend INSERTs a new row |
| Amend referencing a retrievable original | ✅ met — `ROOT_INSTANCE_ID` / `AMENDS_INSTANCE_ID`, `superseded` derived |
| Audit history | ✅ met — canonical `SOURCE_RECORD_EVENTS`, not a second audit table |
| Chart + encounter retrieval | ✅ met |
| Server-side org scoping | ✅ met — `ORG_ID` from the JWT, re-asserted on every update |
| Which consent version was signed | ✅ met **for free** — `FORM_DEFINITION_VERSION` is pinned at save |
| Typed, indexed fields beside the payload | ✅ answered — AgentDB's promotion rule (a field earns a column on demonstrated need incl. **safety**) |
| **`documentDomain` + domain filter on retrieval** | ❌ **not in the contract — still open** |

### The one open item — now half landed

`DOMAIN` cannot be backfilled. Once cosmetic documents exist without it, nothing reliably says which
rows were cosmetic (`formType` prefixes are convention, not constraint), and every chart query
written meanwhile assumes *patient → all documents* — making isolation a client-side filter every
lane must remember. That is the same reasoning AgentDB used to refuse a client-supplied `practiceId`
for org scoping.

**AgentDB shipped the column** — `ddl/migrations/034_clinical_documents_domain.sql`:
`DOMAIN VARCHAR(16) NOT NULL DEFAULT 'CLINICAL'` plus `idx_cfi_patient_domain` and
`idx_cfi_practice_domain`. They granted it on the asymmetry argument and **generalised it past
aesthetics** — *"behavioural health and occupational health want the same thing… the repository
stays ignorant of what any domain means."* That framing is better than the one I filed and is
adopted here.

**The read side is not wired yet.** Verified four ways on live 1976 and again on 1977:

| Call | Rows | Expected |
|---|---|---|
| `?practiceId=…` | 32 | 32 |
| `…&domain=CLINICAL` | 32 | 32 |
| `…&domain=AESTHETIC` | **32** | **0** — every row defaults `CLINICAL` |
| `…&domain=NONSENSE_VALUE` | **32** | error or 0 — the parameter is ignored entirely |

The document payload also exposes **no domain key** among its 32 fields, so a client cannot filter
defensively either. Nothing is wrong with the migration; this is the route half — the search
predicate and the response field.

**Standing commitment therefore stands: no aesthetic document is written into
`CLINICAL_FORM_INSTANCES` until `domain=AESTHETIC` provably excludes clinical rows.** A column
existing is not the same as the isolation holding, and writing cosmetic rows into a repository whose
filter is dark is exactly how the un-backfillable mess happens. Re-test is those four calls.

### §5 is resolved — by the directives, not by my either/or

The [Documentation Intelligence](PracticeForceOneDocumentationIntelligence.html) stable-entity list names
`InjectionAdministration`, `Photo`, `BodyMap`, `InventoryUsage`, `Consent`, `Signature`. So
`aesthetic_treatments` is **neither a bespoke table nor a sidecar** — it is an instance of a
canonical entity AgentDB owns. `ddl/migrations/031` is **input to that design, not a competitor**.
Columns that must remain queryable under the safety rule: `lotNumber`, `productName`,
`unitsOrSyringes`, `lotExpiry`, `treatmentArea` — a recall asks *"which patients received lot X"*.

### What the lane actually builds now: modules + rules, not forms

Per Documentation Intelligence and the [North Star](PracticeForceOneNorthStar.html), the deliverable is
**reusable modules and the evidence rules that instantiate them** — `docs/documentation-engine/` in
the app repo:

- **22 modules + 12 templates**, plus **12 clinical modules reused unforked**. Each module declares
  `captures` / `emitsEvidence` / `completeWhen`, and now also `reuseScope`, `persistsTo` (canonical
  entity) and `fhir` (interop target).
- **24 rules**, **9 hard sign-gates**, 6 critical alerts. `AES-R-001` is the founder's Botox worked
  example as executable metadata. Rebooking is **product-keyed** (tox 12w · filler 40w ·
  biostimulator 26w · PRP 4w). Every rule carries `explain` with `{evidence.key}` interpolation, per
  AI-readiness: inference must be interrogable.
- **16 of the 22 modules are `PLATFORM` or `PLATFORM_CANDIDATE`.** Only six are genuinely
  aesthetics-specific. Photography, body/injection mapping, product lot, inventory usage, device
  parameters, procedure consent, contraindication screen, skin assessment, complication reporting,
  treatment plans and follow-up photography belong in the **shared** library — aesthetics simply
  needs them first. Left in an `aesthetic_*` namespace they will be duplicated by the next specialty.

### The architecture conflict is conceded, not disputed

The North Star page flags *"a second documentation architecture forming: own table, own API, zero
`encounter` references"* in this lane. **That flag is correct on all three counts**, and the third
is one I had missed: `ddl/migrations/031` and `util/AestheticsRoutes.script` contain **zero**
references to `encounter` — a cosmetic treatment that does not attach to an encounter cannot take
part in the encounter-centred workflow both directives require. Retirements filed against my own
work rather than defended:

| Artifact | Verdict | Row |
|---|---|---|
| `util/AestheticsRoutes.script` (672 lines of Java) | Retire — specialty-specific code; the class name *is* the specialty | `AES-15` |
| `ddl/migrations/031` (3 tables) | Retire into canonical entities; **add the encounter linkage that was missing** | `AES-16` |
| The 3 CF definitions as **menu items** | Convert to evidence-instantiated templates — a menu is the "which form?" the directive forbids | `AES-17` |

They were the right calls on 2026-07-25 under *"keep aesthetics separate from the baseline clinic"*,
before the contract and the canonical entity list existed. They are now **scaffolding with an expiry
date**, and nothing further is being built on them.

### What is live today

Endpoints and definitions are live on the deployed build, and the Aesthetics menu zone is enabled on
**Bay Area Cardiology** only (per-practice `engine_configs` row — the baseline `sidebar.js` seed
carries no Aesthetics zone, so other practices see nothing). Proven in production: a cosmetic
treatment created with a lot number, and the **recall-by-lot query returned it**. The menu is
**transitional navigation** — the destination is recommendation, not a menu item.

---

## 11. The universality proof — 2026-07-26

Founder, Clinical Documentation Intelligence Initiative: *"Do not build a separate aesthetics
documentation system. Aesthetics must prove that the canonical documentation engine is universal.
Anything aesthetics needs should improve the engine for every specialty."* — stated alongside the
observation that **the greatest risk is six agents independently inventing six documentation
systems.**

This lane built one of them. Conceded in §10 and being retired. What replaces it is the opposite
exercise: every capability aesthetics needs, renamed for the specialty that also needs it.
**14 of 22 modules promoted to generic names. 47 distinct specialties named as co-beneficiaries.
Only 6 remain cosmetic.**

| Was (aesthetic) | Should be (shared) | Also needed by |
|---|---|---|
| `photography` | `clinical_photography` | Dermatology · Wound Care · Ophthalmology · OMFS · PT · Plastics |
| `injection_mapping` | `injection_site_mapping` | Allergy (immunotherapy) · Ortho (joint) · Pain (trigger point) · Rheumatology |
| `body_mapping` | `body_region_mapping` | Wound Care · Dermatology · PT · Rheumatology · Burns · Oncology |
| `product_lot` | `administered_product_lot` | **Immunization** · Infusion/Biologics · Blood Products · Implants |
| `inventory_usage` | `inventory_consumption` | Immunization · Infusion · Surgical Supplies · DME |
| `device_parameters` | `device_session_parameters` | **Dermatology** · Radiation Oncology · PT · Psychiatry (TMS) · Cardiology (EP) |
| `contraindication_screen` | `pre_procedure_screening` | Surgery · Radiology (contrast / MRI safety) · Anticoagulation · Obstetrics |
| `complication_report` | `adverse_event_report` | ALL procedural specialties — maps to FHIR `AdverseEvent` |
| `treatment_plan_series` | `treatment_series_plan` | PT courses · immunotherapy build-up · radiation fractions · infusion cycles |
| `gfe_authorization` | `standing_authorization` | Standing orders · nursing protocols · delegated procedures · immunization clinics |
| `recovery_instructions` | `post_procedure_instructions` | Surgery · Endoscopy · Interventional Radiology · ALL procedural |
| `follow_up_photography` | `scheduled_followup_capture` | Wound-healing trajectories need this more than cosmetic results do |
| `aesthetic_consultation` | `consultation_and_quote` | Dentistry · Plastics · Bariatrics · Fertility · any cash-pay elective |
| `weight_management` | `weight_management_program` | Bariatrics · Endocrinology · Primary Care · Cardiology |

**Genuinely cosmetic (6):** `facial_assessment` · `peel_parameters` · `treatment_package` ·
`membership_visit` · `hair_restoration` · `wellness_therapy`.

### Two are already proven generic by code in the repo today

Not analogy — existing implementations:

1. **`injection-admin` already stores `lotNumber` / `manufacturer` / `expirationDate` / `ndcCode`**
   for **vaccines**, because law requires it. So `administered_product_lot` is not an aesthetics
   invention; aesthetics needs the identical capability for a different product class. **Had it been
   built generically the first time, this lane would have needed nothing.**
2. **`dermatology-default` already logs NB-UVB / PUVA phototherapy sessions** with dose, exposure
   seconds and erythema response — structurally the same record as a laser session.
   `device_session_parameters` is a rename of something already half-built in another specialty.

**That is the six-systems risk in miniature: the same capability built three times under three
specialty names.** The check that prevents it is not "is this module well designed" but *"which other
specialty needs this, and what is it called there?"* — and if the answer is *none*, the capability is
suspect. AgentARCH is asked to apply that test to this lane hardest, since it is the lane that
already failed it once.

### Ownership, corrected for the initiative

Inference orchestration moved to **AgentDLP** (Documentation Intelligence Layer), so the rule pack is
filed there; **AgentCF** owns the module/section definitions.

### 11.1 How it resolved — and my own library retired

**AgentCF adopted all 16 promoted modules into `module-library.json` field-for-field**, and published
a **[Clinical Section Contract v2](PracticeForceOneSpecialtyForms.html)** merging the two module schemas:
their renderable half (real field definitions, wired into `cf-runtime`) with the semantic half from
this lane (`emitsEvidence`, `completeWhen`, `persistsTo`). Their ruling is explicit — *"aesthetics
content expressed in this contract, never a parallel library."*

Which made **my** shared library the parallel library, 24 hours old. Retired the same day:

| Artifact | Now |
|---|---|
| `shared-modules.json` | **Retired as a library** → provenance only: why each module is universal, plus 4 hard rules that must survive adoption |
| `aesthetics-sections-v2.json` | My contribution, **trimmed 22 → 6 modules** — only the genuinely cosmetic sections CF lacks, in v2 shape |
| `aesthetic-modules.json` | Templates + pointers, **defines zero modules** |

Verified: **zero id duplication** across the three homes, and all 12 templates + 24 rules still
resolve. One definition, one home, each.

**The guard so it cannot regress:** `bin/check-documentation-packs.mjs` fails the build on a
duplicate definition, a broken template/rule reference, a v2 contract violation, an unbound evidence
key, or a safety invariant lost in adoption (indexed `lotNumber`, marketing-denied-by-default).
Negative-tested by injecting a duplicate — it catches it and exits 1.

**And 19 rule scenarios** (`aesthetic-rule-scenarios.json`) express the clinical intent as fixtures
AgentDLP's evaluator can be run against: all 9 sign-gates and all 6 critical alerts covered, plus
**4 controls that must NOT fire** — because an engine that over-recommends is one clinicians learn
to dismiss.

The pattern that caught my own duplication was AgentARCH's own test — *"which other specialty needs
this, and what is it called there?"* — applied to my artifact after I had applied it to everyone
else's.

---

Related: [North Star](PracticeForceOneNorthStar.html) ·
[Documentation Intelligence](PracticeForceOneDocumentationIntelligence.html) ·
[Clinical Document Contract](PracticeForceOneClinicalDocumentContract.html) ·
[Specialty Forms](PracticeForceOneSpecialtyForms.html) ·
[Clinical Documentation System](PracticeForceOneClinicalDocumentationSystem.html) ·
[Aesthetics catalog](PracticeForceOneAesthetics.html) ·
[Platform Architecture](PracticeForceOnePlatformArchitecture.html)
