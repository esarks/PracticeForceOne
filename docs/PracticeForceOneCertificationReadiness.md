---
title: "PracticeForceOneCertificationReadiness"
---

# PracticeForceOne — Certification Readiness

**Status:** OPEN · started 2026-08-13 · **co-owned: AgentARCH (architecture) + AgentFuture (standards research)**
**Live at first measurement:** build 2235 (`a91fb6572`)

> **THIS IS THE ONE MATRIX.** Per the founder's directive, no lane creates a competing certification
> spreadsheet or interpretation. Add to this file; do not fork it.

---

## 0. SCOPE OF THIS DOCUMENT — read before adding anything

This file has **two halves with two different owners and two different evidence standards.**

| half | owner | evidence standard |
|---|---|---|
| **A. Architecture findings** (§2–§5) | **AgentARCH** | measured against the PFO source tree; every number reproducible by command |
| **B. Criterion matrix** (§6) | **AgentFuture** | cited to the **current official source** (eCFR §170.315, ASTP/ONC CHPL, official test procedures) |

**AgentARCH is deliberately NOT drafting the criterion matrix.** The founder's directive says *"do not rely
on old blogs or stale 2015 certification lists"* and assigns criterion inventory, current versions,
deadlines and test methods to AgentFuture. My training data has a cutoff; regulatory text moves (HTI
rulemakings, USCDI versioning, criterion sunsets). **Anything I wrote from memory about the current text of
a criterion would be exactly the confident-but-unverified content this fleet has repeatedly paid for.**
§6 is therefore a structure with an owner, not a filled-in table.

**Rule for §6:** every row must carry a link to its official source. A row without a citation is UNKNOWN,
not EXISTS.

---

## 1. EXECUTIVE SUMMARY

**The headline is good and bad, and both are measured.**

**GOOD — the projection architecture is already right.** PFO implements **13 FHIR resource modules**
(Patient, Practitioner, Encounter, Condition, AllergyIntolerance, MedicationStatement, Observation,
DocumentReference, Coverage, Metadata + Claim submit/inquire/response). **Exactly one of them writes**
(`FhirClaimSubmitRoutes`, an outbound claim transaction). **FHIR is a read projection over authoritative PFO
truth, not a second clinical store.** That is the single most expensive certification mistake a vendor can
make, and PFO has already not made it. The founder's rule — *one fact → one authoritative representation →
many standards-compliant projections* — is upheld in the code today.

**BAD — the persistence substrate would make EHI export very hard right now.** Measured:

```
tables in the canonical schema of record (data/ClaimsProcessingDdl.xml) : 118
distinct tables created by runtime DDL in util/*.script                 : 589
overlap                                                                 :  50
TABLES OUTSIDE THE GOVERNED SCHEMA                                      : 539
   of those, parsed with a full body                                    : 369
   ... holding patient_id (i.e. holding EHI)                            : 257
   ... whose patient_id has NO foreign key to patients                  : 251
```

Sample of the ungoverned, patient-scoped, unlinked set: `mat_records`, `detox_records`,
`adolescent_sexual_health`, `advance_directives`, `transition_care_plans`, `ai_skin_tests`.

**That is not a feature gap. It is the answer to the founder's own EHI question 8** — *"can the data be
exported computationally without reverse-engineering database internals?"* — and the measured answer today
is **no**, for roughly 250 tables holding some of the most sensitive clinical data in the system.

### The 10-second version

- **What we already have:** a correct FHIR projection layer, a governed relational spine, real audit
  infrastructure, tenant isolation, RBAC, MFA, and — unusually — *mechanically enforced* architectural rules.
- **The largest single gap:** ~82% of clinical tables are outside the schema of record.
- **What needs attention NOW:** stop the ungoverned-table count from growing (§3, F1). Everything else can
  wait 30–60 days.
- **What safely waits:** every criterion-specific implementation. All of it.

### Recommended initial scope — **MODEL C, moving toward B**

**Do not pursue Model A (broad Base EHR) first.** Recommend certifying a **narrower Health IT Module**
first, then expanding, and **integrating rather than building** the capabilities where PFO has no
differentiation (§4). Rationale: PFO's differentiator is the clinical work engine, definition-driven
platform and control tower — **none of which is what certification measures.** Spending the differentiating
lane's time building a CQM engine to satisfy a checklist is the worst available trade.

**This is a recommendation, not a decision. Certification scope is a founder/business decision** — it
depends on the market being sold into (CMS quality programs may impose scope that engineering cannot infer).

---

## 2. ARCHITECTURE-SHAPING FINDINGS (AgentARCH — measured)

Ordered by how expensive they become if discovered late. **Ordinary feature gaps are deliberately excluded**
per the directive.

### F1 — 539 tables exist outside the schema of record; 257 of them hold EHI. **BLOCKER-CLASS**

Reproduce: canonical `<table name=…>` entries in `data/ClaimsProcessingDdl.xml` vs
`CREATE TABLE IF NOT EXISTS` in `util/*.script`.

These tables are created by **runtime DDL inside specialty route modules**, have **no generated CRUD**, and
have **no entry in the schema of record**. Consequences that compound:

1. **EHI export has no manifest.** There is no artifact that says what PFO stores. An export built from the
   canonical XML would silently omit ~250 patient-scoped tables — and *silently* is the dangerous word.
2. **A patient's record cannot be assembled by following keys.** 251 of them carry `patient_id` with **no
   FK to `patients`**, so the linkage is a naming convention, not a constraint.
3. **It is the same root cause as the 2026-08-12 outage** (request-path DDL). I graded that CRITICAL for
   lock-storm risk. **Its larger cost is governance, not availability** — every specialty module added
   grows the ungoverned surface.
4. **It interacts with the ClearDLP finding:** a table with no FK to `patients` does not *block* a patient
   delete — it **orphans silently**. A failed delete is loud; an orphaned clinical row is not.

**This is the one finding I would act on before any criterion work.** Not by migrating 539 tables — by
**ratcheting the count so it cannot grow**, then converting by domain as those domains are touched anyway.

### F2 — FHIR is a projection, and must be defended as one. **PRESERVE**

13 resource modules, 1 writer, and that writer is an outbound claim transaction. **Record this as an
architectural invariant with a checker before someone "adds a FHIR table for performance."** The failure
mode is cheap to prevent now and near-impossible to reverse later.

### F3 — Signature: authoritative, but two producers read the wrong field. **HIGH — already ruled**

`encounter_notes.signed_at` / `signed_by` (FK to `users`) is the persisted fact.
`ClinicalEvidenceRoutes:1515` and `DocumentationRecommendationsRoutes:217` infer signature from
`encounters.status`. Certification-relevant because attestation, provenance and audit all depend on *who
signed what, when*. Ruled 2026-08-13; `bin/check-signature-authority.mjs` written, falsified, and registered
`wiring: pending` against those two sites.

### F4 — Patient identity has a canonical short ID; the FK program is incomplete. **HIGH**

The founder's six-char Patient ID exists and is issued at first contact. F1's 251 unlinked tables mean
patient identity is **not** enforced at the storage layer across most clinical data. Wrong-patient risk and
export integrity both trace here.

### F5 — Ungoverned tables are also outside the migration path. **HIGH**

They are created by `CREATE TABLE IF NOT EXISTS` at request/startup time, so `applyPendingMigrations()` does
not own them. There is no expand/contract discipline available for a table the migration system does not
know exists — which also constrains the candidate-resume schema-compatibility test (@AgentDB).

### F6 — Provenance exists for clinical evidence, unevenly. **MEDIUM — decide before the schema hardens**

`clinical_evidence` carries `source_type` / `source_id` / `source_field` / `confidence` / `superseded_by_id`
— a genuinely good shape. Measured earlier: **688 rows, 1 producer, confidence 0/688.** The structure is
ahead of its population. Decision-support provenance requirements should be checked against this shape
**now**, while one producer exists, rather than after several do.

### F7 — Portal / staff representation divergence. **MEDIUM — known, tracked**

Already identified by the fleet. Certification pressure makes it structural: one clinical fact must not have
portal truth, staff truth, FHIR truth and C-CDA truth drifting independently.

---

## 3. WHAT I RECOMMEND STARTING NOW (and nothing else)

**One thing.** A ratchet on the ungoverned-table count, in OBSERVE first:

> new `CREATE TABLE IF NOT EXISTS` in `util/` for a table absent from `data/ClaimsProcessingDdl.xml`
> → reported, then blocked.

Rationale: it is the only F-finding that **gets worse every day we do not act**, it costs one checker, it
requires no criterion knowledge, and it converts a growing problem into a frozen one while the scope
decision is made. Everything else in §2 is stable and can wait for the matrix.

**I have not built it yet — deliberately.** The founder's rule stands: *build enforcement only where the
rule is settled.* The rule here is "no NEW ungoverned clinical table," and the baseline must be measured and
agreed with @AgentDB (who owns persistence) before it can ratchet. Proposed, not implemented.

---

## 4. BUILD / INTEGRATE / DEFER — first-pass recommendation

**Framed by the founder's question — "should PFO own this capability?" — not "how do we implement it?"**
Criterion citations deliberately omitted pending §6.

| capability area | recommendation | reasoning |
|---|---|---|
| Clinical work engine, documentation, orders workflow | **OWN** | this *is* the product; certification should validate what the clinic already uses |
| FHIR / standardized API | **OWN** | already a correct projection; owning it is cheap and differentiating |
| Demographics / USCDI data capture | **OWN** | authoritative persistence is core |
| Decision support interventions | **OWN (carefully)** | PFO's inference engine is a differentiator; confirm provenance needs early (F6) |
| C-CDA generation / consumption / reconciliation | **INTEGRATE** | high standards-churn, low differentiation, mature libraries exist |
| Clinical quality measures (CQM) | **INTEGRATE or PARTNER** | very expensive to build, zero differentiation, measure logic changes annually |
| Direct Project / secure exchange | **PARTNER** | a network capability, not a product capability |
| e-Prescribing / EPCS | **PARTNER** (Surescripts track) | separate qualification program; never conflate with ONC certification |
| Payment card handling | **NEVER OWN** | standing rule: no PAN/CVV in PFO; tokenization/terminal only |

---

## 5. PROPOSED WORKSTREAM

- **NOW:** §3 ratchet (proposed) · AgentFuture begins §6 from official sources · preserve safety-design
  evidence as a byproduct of work already happening (AgentUI) · **no criterion implementation.**
- **~30 days:** scope decision (founder) informed by §6 · EHI inventory feasibility (@AgentDB) · FHIR
  conformance gap analysis against the actual adopted standard.
- **~60 days:** BUILD/PARTNER decisions ratified · begin only the capabilities marked OWN · QMS write-up of
  the process **we actually follow** (see below).
- **Before ATL work:** conformance lane in CI, separate from the production promotion gate.

### On the QMS — we should describe, not invent

PFO already has an unusually strong engineering quality system, and it should be **documented as it is**
rather than replaced with ceremony: architectural ratchets · static gates · characterization suite ·
real-browser promotion gates · candidate identity + content-monotonic promotion · falsification-before-trust
· public correction of stale claims · per-lane ownership. **Do not claim conformance to a formal QMS
standard we do not hold.** The purpose now is traceability.

---

## 6. CRITERION MATRIX — **owner: AgentFuture** (structure only; do not fill from memory)

| Criterion | Name | Target year/version | PFO scope | Current capability | Evidence | Owner | External dep | Standard | ONC test method | Architecture-shaping | Gap severity | Implement now | Reason | **Official source link** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| _(to be filled by AgentFuture from eCFR / ASTP / CHPL / official test procedures)_ | | | | | | | | | | | | | | |

**Binding rules for this table:**
1. **EXISTS requires evidence**, not a similarly-named screen or endpoint.
2. **A row with no official-source link is UNKNOWN.**
3. Areas to cover per the directive: demographics · implantable device list · decision support interventions
   · CPOE · CQM record & export · transitions of care · application access (patient selection) ·
   application access (all data request) · standardized API for patient and population services · Direct /
   exchange · **EHI export** · privacy & security criteria · plus the Real-Time Prescription Benefit
   requirement tracked for 2028.
4. **Verify current applicability against the live regulation** — do not carry a 2015-edition list forward.

---

## 7. WHAT THIS DOCUMENT DOES NOT CLAIM

- It does not claim PFO is certified, certifiable, or conformant with any criterion.
- It does not assert the current text, numbering or applicability of any criterion — that is §6, unfilled.
- It does not recommend contacting an ATL/ACB; the directive reserves that.
- §2 findings are measured against the source tree and reproducible. §1's scope recommendation is
  **engineering judgement offered to a business decision**, not a decision.
