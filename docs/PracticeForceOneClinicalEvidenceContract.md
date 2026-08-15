---
title: "PracticeForceOneClinicalEvidenceContract"
---

# PracticeForceOne Clinical Evidence Contract

**Owner:** AgentDB · **Date:** 2026-07-26 · **Status:** ✅ **LIVE and PROVEN on build 1980.**
Evidence chain **43/43**, explainability + engine analytics **29/29**, AI-retrieval context + FHIR
export **30/30** — all against the deployed API. Bind against it.

This is the persistence contract for the **Clinical Documentation Intelligence Engine** — the
evidence → inference → recommendation chain behind the North Star's central promise:

> **Never ask** *"which form would you like to open?"* **Ask** *"given everything known about this
> encounter, what documentation should exist?"*

Companion to [PracticeForceOne Clinical Document Contract](PracticeForceOneClinicalDocumentContract.html),
which owns the document itself. That contract answers *where documentation lands*; this one answers
*why it was recommended in the first place*.

---

## What was already there (and is therefore not rebuilt)

Before adding anything, production was inventoried against the directive's ~34-entity list. **Two
thirds already existed**, and rebuilding them would be the sprawl this platform exists to end:

| Directive entity | What already exists |
|---|---|
| Rule | **16 rule tables**, canonical `cds_rules` (483 rows) |
| Template · SectionDefinition | `note_templates`, **`note_template_sections`** |
| InjectionAdministration | **`injection_administration_log`** — already has `lot_number`, `manufacturer`, `expiration_date`, `ndc_code`, `cvx_code`, `dose`, `route`, `site` |
| Consent · Education · FollowUp · Questionnaire | `consent_to_treat_records`, `education_materials`, `encounter_follow_up_instructions`, `check_in_questionnaire_responses`, … |
| AuditEvent | `source_record_events` (canonical, ~13k rows) |
| Patient · Encounter · Diagnosis · Medication · Allergy · Order · Referral | canonical tables |
| ClinicalDocument · DocumentVersion · DocumentSection | `clinical_form_instances` (+ module rows) |

**What did not exist is the intelligence spine:** nothing in production recorded what was *observed*,
what was *concluded*, or *why* something was recommended. That is what these four tables add.

---

## The architectural line

| Layer | Where it lives | What it is |
|---|---|---|
| **Form response** | `clinical_form_instances.answers` (JSONB) | what a clinician typed, verbatim — the legal record |
| **Clinical fact** | **`clinical_evidence`** | normalized, coded, queryable — what the platform reasons over |
| **Rendered document** | the document | communicates the facts |

An A1c of 8.4 typed into a diabetes template is a **form response**. It becomes a **clinical fact**
when it exists with a code, a value, a unit, a time and provenance back to the document it came from.
**Both are kept** — deleting either loses something irreplaceable.

---

## The four entities

### `clinical_evidence` — everything known, normalized

One table with a typed value, **not one table per evidence kind**: the engine must reason *across*
kinds, and a new evidence kind must never require a migration.

- **What:** `evidence_type` (diagnosis · vital · chief_complaint · questionnaire_answer · procedure ·
  medication · allergy · lab_result · photo · inventory_usage · demographic · risk_score · …),
  `evidence_key`, and a coded triple `code_system` / `code` / `display` (ICD10 · SNOMED · LOINC · CPT ·
  CVX · NDC · RXNORM · internal).
- **Value:** `value_text` · `value_number` · `value_boolean` · `value_unit` · `value_json`
  (GIN-indexed, for structure that does not reduce to a scalar — a body map, a photo set).
- **Provenance — the answer to "how do you know that?":** `source_type` · `source_id` ·
  `source_field` · `recorded_by`, plus **`observed_at`** (when it was true of the patient) separate
  from **`recorded_at`** (when the platform learned it). Those are different facts and clinical
  reasoning needs both.
- **Append-only:** a correction **supersedes** (`superseded_by_id`, `status`) rather than overwrites,
  so reasoning that ran against the old value stays explainable after the value changes.
- `confidence` (asserted · inferred · patient_reported · uncertain) and `domain`.

### `rule_evaluation` — a rule ran, against this evidence, and produced this

Records **not-fired outcomes too**. *"Why did the system NOT recommend the consent?"* is the harder
support question and is unanswerable without the negative result.

`rule_id` · `rule_source` · `rule_key` · **`rule_version` (pinned — a later rule edit must not rewrite
history)** · `outcome` (fired · not_fired · error · skipped) · `outcome_reason` ·
**`input_evidence_ids`** · `output_json` · `duration_ms`.

### `clinical_inference` — what was concluded

Separate from evidence because an inference is **not an observation**: *"this patient is at risk of
diabetic foot ulceration"* was never observed, it was derived, and the record must tell those apart
forever.

`inference_type` (risk · gap · eligibility · contraindication · care_opportunity ·
coding_opportunity) · `conclusion` · `confidence` · `severity` · **`input_evidence_ids`** ·
`rule_evaluation_id` · `produced_by` (**rule_engine · ai_copilot · clinician**) · lifecycle
(`status`, `resolved_reason`, `resolved_at`).

### `documentation_recommendation` — what documentation should exist

The answer to the question that replaces *"which form?"*. A **first-class row**, not a computed list,
because the platform must be able to say afterwards *what* it recommended, *why*, and whether the
clinician took it.

`form_type` · `form_title` · `module_key` (when the recommendation is a **section** of a note) ·
`necessity` (**required · recommended · optional**) · `reason` (shown to the clinician, in their
language) · **`supporting_evidence_ids`** · `inference_id` · `rule_evaluation_id` · `rank` ·
`status` (open · accepted · dismissed · satisfied · expired) · `dismissed_reason` ·
**`document_id` — the document that satisfied it** · `acted_by` · `acted_at`.

**Acceptance and dismissal are the only honest signal of whether the engine is actually helping.**
A recommendation nobody accepts is not a feature, and without these columns you cannot tell.

---

## Explainability is a schema property, not a feature

The North Star requires that *"every recommendation should identify supporting evidence"* and
*"inference should always be transparent."* That is why the linkage is a **column**, not a log line:

```
evidence ──► rule_evaluation ──► inference ──► recommendation ──► document
   ▲               │                  │              │               │
   └─ input_evidence_ids ─────────────┴──────────────┘        document_id closes the loop
```

Any recommendation can be walked back to the exact evidence and the exact rule version that produced
it, months later, after the evidence has been corrected and the rule rewritten. **A recommendation
that cannot show its evidence is not explainable, and an engine that cannot be audited cannot be
trusted with a clinical record.**

This is also the AI-readiness requirement, satisfied structurally rather than aspirationally:
`produced_by` already distinguishes `rule_engine` from `ai_copilot`, so a copilot writing inferences
later needs **no schema change** — its conclusions are explainable on exactly the same terms.

---

## For the lanes that will bind to this

**@AgentCF (rule engine, inference):** write `clinical_evidence` as evidence arrives, one
`rule_evaluation` per rule per pass (including not-fired), and `documentation_recommendation` rows
with `supporting_evidence_ids` populated. Rules live in `cds_rules` — do not create a new rule store.

**@AgentDLP (workflow):** `documentation_recommendation.status` is the workflow trigger surface, and
`document_id` is how a recommendation is marked satisfied when the document is created.

**@AgentUI (provider experience):** the "what should happen next" panel is
`?encounterId=&status=open` ordered by `necessity` then `rank`; `reason` is written to be shown to a
clinician; one-click acceptance sets `status=accepted` and later `document_id`.

**@AgentAesthetics:** `domain='AESTHETIC'` on evidence and recommendations keeps the cosmetic
timeline separate on exactly the same terms as documents. Lot/product facts belong in
`injection_administration_log` (which already has them) referencing the document — not as new
columns on the document, and not in a cosmetic-only table.

---

## Honest caveats

- **No API yet.** Schema only. Generated CRUD and endpoints are next; nothing has written a row.
- **Nothing here has runtime proof.** Every claim above is about shape, not behaviour. The document
  contract earned its ✅ through 76/76 and 36/36 live runs; this page has not earned one yet and
  should not be read as though it has.
- The `value_*` split assumes evidence reduces to a scalar or a JSON structure. If a kind arrives
  that fits neither, that is a design conversation, not a migration to force.

Related: [PracticeForceOne Clinical Document Contract](PracticeForceOneClinicalDocumentContract.html) ·
[Specialty Table Classification](PracticeForceOneSpecialtyTableClassification.html) ·
[Specialty Forms](PracticeForceOneSpecialtyForms.html)
