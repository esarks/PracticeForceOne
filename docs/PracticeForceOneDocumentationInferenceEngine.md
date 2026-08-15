---
title: "PracticeForceOneDocumentationInferenceEngine"
---

# PracticeForceOne — The Documentation Inference Engine

**Owner of the engine:** AgentCF / AgentDLP (rule pack + evaluator) · **This page:** AgentUI, from
measurement against live build **2005**, 2026-07-27.

The engine decides **what documentation a visit requires**, from the evidence on the encounter, and
can say **why**. A clinician never chooses a form. This page is the reference for how it actually
works — every measurement here was taken from the running system, not from intent.

Companion pages: [PracticeForceOneDLP8Walkthrough](PracticeForceOneDLP8Walkthrough) (the journey it
sits inside, with the falsification experiment in Appendix A) ·
[PracticeForceOneNorthStar](PracticeForceOneNorthStar.html).

&nbsp;

## 1. The shape of it

```
   chart + encounter                    engine                        canonical stores
   ─────────────────                    ──────                        ────────────────
   diagnoses, meds,     ──►  evidence  ──►  rule pack  ──►  outputs  ──►  CLINICAL_EVIDENCE
   problems, chief                          (metadata)                   DOCUMENTATION_RECOMMENDATION
   complaint, docs,                                                             │
   age, sex                                                                     ▼
                                                                    accept → instantiate → satisfy
```

Four separable parts. Confusing them is what cost me days:

| part | what it is | where |
|---|---|---|
| **Evidence builder** | reads the chart/encounter into a flat fact set | `DocumentationRecommendationsRoutes` |
| **Rule pack** | the clinical knowledge, as **metadata** | `engine_configs` type `cdie_rules` |
| **Evaluator** | tests conditions, collects outputs — knows no medicine | `CdieEvaluator` |
| **Recommendation store** | the persisted outputs and their lifecycle | `ClinicalEvidenceRoutes` |

&nbsp;

## 2. The two endpoints, and the difference that matters

| endpoint | does |
|---|---|
| **`/api/documentation/inference`** | **THE EVALUATOR.** `GET` previews without persisting; `POST` computes **and persists**. |
| **`/api/documentation-recommendations`** | **THE STORE.** Lists rows that already exist. Evaluates nothing. |

> ⚠ **This distinction cost days.** DLP8 asked the *store* for rows nobody had created, got an empty
> list, and I reported "the inference engine does not fire" as the platform's largest gap. The engine
> was working the entire time. If you get zero recommendations, check which endpoint you called
> before concluding anything about the engine.

Also: `POST /api/documentation/reconcile` **closes** recommendations from evidence — it does not
create them. `GET /api/documentation-recommendations/analytics` reports acceptance quality.

&nbsp;

## 3. The evidence contract

Eleven keys, assembled per request. A rule can only reason over these:

| key | source | note |
|---|---|---|
| `chiefComplaint` | encounter | free text, matched by regex |
| `diagnoses` | `ENCOUNTER_DIAGNOSES` | description, else code |
| `problems` | `PATIENT_PROBLEMS` | |
| `medications` | `PATIENT_MEDICATIONS` | structured rows only, **not** intake free text |
| `chronicConditions` | **query parameter only** | ⚠ see §8 |
| `documentsPresent` | `CLINICAL_FORM_INSTANCES` on the encounter | lets a rule notice what already exists |
| `proceduresSelected` | request | |
| `age`, `sex`, `patientId` | patient | |
| `encounterType` | encounter | |

Measured on a live encounter:

```
chiefComplaint     "Diabetes follow-up; foot numbness"
diagnoses          ["Type 2 diabetes mellitus with diabetic polyneuropathy"]
medications        ["Metformin"]
documentsPresent   ["diabetic_foot_exam","problem_list_cf","problem_list_cf"]
age                54          sex  "M"          encounterType  "office_visit"
chronicConditions  []          problems  []      proceduresSelected  []
```

**Every fact is persisted to `CLINICAL_EVIDENCE` with its own id**, which is what lets a
recommendation cite evidence that *resolves* rather than quoting itself.

&nbsp;

## 4. The rule contract

A rule is **metadata, not code** — changing clinical behaviour is a definition edit, not a deploy.

**Leaf operators:** `always` `exists` `missing` `equals` `notEquals` `matches` `includesMatch`
`countAtLeast` `gt` `lt` `gte` `lte` `between`
**Combinators:** `all[]` `any[]` `not{}`

**Output kinds** the pack emits:

```
requireDocument  requireSection  requireConsent  requireSignature  requireCodingReview
requirePhotograph  requireInventory  requireBodyMap  optionalDocument
triggerEducation  triggerFollowUp  triggerQualityReporting
alert  blockSign  launchWorkflow  computeMissing
```

A worked rule — note it is a **conjunction**, which is what makes it falsifiable:

```json
{ "id": "CLIN-DIABETIC-FOOT",
  "when": { "all": [
    { "any": [ {"field":"diagnoses","op":"includesMatch","value":"diabet|E11|E10"},
               {"field":"chronicConditions","op":"includesMatch","value":"diabet"} ] },
    { "any": [ {"field":"chiefComplaint","op":"matches","value":"foot numb|numbness|tingl|neuropath"},
               {"field":"problems","op":"includesMatch","value":"neuropath|numbness"} ] } ] },
  "then": [ {"kind":"requireDocument","ref":"diabetic_foot_exam","label":"Diabetic Foot Exam",
             "reason":"diabetes with neuropathic foot symptoms"}, … ] }
```

&nbsp;

## 5. What the engine returns

```
consideredRuleCount  8          how many rules it weighed
firedRules           [4]        CLIN-DIABETIC-FOOT · CLIN-DIABETES-A1C · CLIN-POLYPHARMACY-RECONCILE · GEN-MISSING-DOC
notFiredRules        [4]        AES-BOTOX-INTENT · AES-PREGNANCY-SCREEN · CLIN-HTN-CONTROL · GEN-PROCEDURE-CONSENT
recommendationCount  8
actionableCount      7          have a bound operation that can carry them out
unactionableCount    1          unactionableKinds: ["triggerFollowUp"]
malformedOutputCount 1          a pack defect, reported rather than swallowed
rulePack             "cdie-rules v1.0"
persisted            false      GET previews; POST persists
```

**`notFiredRules` is the honesty feature.** Without it, *"it suggested nothing about hypertension"*
and *"it never looked at hypertension"* are indistinguishable — very different statements about a
clinical system, only one of them a defect. Here you can see `CLIN-HTN-CONTROL` was **considered and
correctly rejected**, because this patient has no hypertension.

**`unactionableCount` and `malformedOutputs` are also deliberate.** A recommendation nobody can act
on, and a rule output with neither `ref` nor `label`, are defects somebody must see — so they are
counted in the response instead of quietly dropped.

### One recommendation, in full

```json
{ "label": "Diabetic Foot Exam",        "ref": "diabetic_foot_exam",
  "kind": "requireDocument",            "salience": 90,
  "why": "diabetes with neuropathic foot symptoms",
  "whyRule": "CLIN-DIABETIC-FOOT",      "whyRulePack": "cdie-rules v1.0",
  "whyEvidence": { "diagnoses": ["Type 2 diabetes mellitus with diabetic polyneuropathy"],
                   "chiefComplaint": "Diabetes follow-up; foot numbness",
                   "chronicConditions": [], "problems": [] },
  "actionable": true,
  "operation": { "name": "document.create",
                 "endpoint": "POST /api/clinical-documents",
                 "input": ["practiceId","patientId","encounterId","formType"],
                 "satisfiedBy": "a completed, non-voided document whose formType equals the recommendation ref",
                 "status": "bound" } }
```

Three things worth noticing. It carries **the evidence that triggered it**, not merely a rule name.
It names **the operation that discharges it** — so a surface can offer the action instead of naming a
requirement and leaving the clinician to find the screen. And it states **what counts as satisfying
it**, so "done" is defined by the engine rather than by whoever builds the UI.

&nbsp;

## 6. The lifecycle of one recommendation

```
  inference (POST)  →  status: open
        │
        ├─ accept    POST /{id}/accept      → accepted
        │     └─ instantiate  POST /api/clinical-documents (formType = ref)
        │           └─ satisfy POST /{id}/satisfy {documentId} → satisfied, documentId set
        │
        └─ dismiss   POST /{id}/dismiss {reason} → dismissed, dismissedReason recorded
```

`GET /{id}/explain` answers **why** at any point: `explainable`, `evidenceCount`, and `because` — the
**resolved evidence rows**, not a restatement of the rule.

> **Dismiss matters as much as accept.** An engine that cannot be told it is wrong cannot improve,
> and `dismissedReason` is the only signal that says *why* it was wrong. Current live quality:
> **81.8% accepted, 18.2% dismissed** across 160 recommendations.

&nbsp;

## 7. Where to see it

| to see | open |
|---|---|
| **the documents themselves** | **EHR → Clinical Documents** |
| **what this visit needs** (first section on the visit page) | **EHR → EncounterCF** |
| every recommendation, with Accept / Dismiss and the *why* | **Worklists → Documentation Intelligence** |
| acceptance vs dismissal, most-dismissed, reasons given | **Worklists → Engine Quality** |
| the raw reasoning | `GET /api/documentation/inference?patientId=…&encounterId=…` |

&nbsp;

## 7b. Where everything is persisted

| what | table | endpoint |
|---|---|---|
| the facts the engine reasoned from | `CLINICAL_EVIDENCE` | `/api/clinical-evidence` |
| what the engine decided | `DOCUMENTATION_RECOMMENDATION` | `/api/documentation-recommendations` |
| the documents that result | `CLINICAL_FORM_INSTANCES` | `/api/clinical-documents` |
| uploaded / scanned files — **not** the above | `documents` | `/api/documents` |

> ⚠ **That last row is a trap I fell into.** "EHR → Documents" reads the `documents` table (uploaded
> files) and shows **no** clinical documents at all. I documented it as the place to see the inferred
> Diabetic Foot Exam; it was never going to appear there. Until 2026-07-27 **nothing listed clinical
> documents** — 22 `doc-*` configs could edit one by id, but none listed them. **EHR → Clinical
> Documents** now does, including the version lineage (root · amends · versionNo · signedBy), which
> is what makes the medico-legal guarantee visible: a signed document is never edited, it is amended,
> and both versions survive.
>
> The lesson generalises: a menu label is not evidence of what a screen queries.

&nbsp;

## 8. What it does NOT do — read before demoing

- **`chronicConditions` never reaches the engine from a real chart.** The evidence builder populates
  that key **only from a query parameter**. The chart's `medical_conditions` — which the portal
  collects and stores — is not read. `CLIN-DIABETIC-FOOT` fires through the `diagnoses` branch
  instead, so the demo works and the gap is invisible. **This is a live break in the spine.**
- **Free-text medications are not parsed.** `medications` comes from structured
  `PATIENT_MEDICATIONS` rows only. Intake text like *"Metformin 500mg BID; Lisinopril 10mg daily"*
  contributes nothing; only the drug added during the visit counts.
- **The practice pack is a subset.** Bay Area publishes **8** rules; the repository file holds **32**.
  The aesthetics rules are not in this practice's pack, so `consideredRuleCount: 8` is correct but
  will surprise anyone who has read the file.
- **One output kind is unbound** — `triggerFollowUp` has no operation, so it is reported as
  unactionable. It is named in the UI but cannot be discharged from there.
- **Clinical correctness is out of scope here.** This page shows the engine evaluates its rules
  faithfully. Whether `CLIN-DIABETIC-FOOT` encodes good medicine is a clinical review.

&nbsp;

## 9. Reproducing every claim on this page

```bash
node bin/dlp8-inference-proof.mjs     # 15 assertions: the engine DISCRIMINATES, not just emits
node bin/dlp8-verify.mjs              # the journey; steps 8–8f are the engine
```

Evidence lands in `bin/dlp8-results/` and is never torn down:
`dlp8-inference-proof-latest.log` (the falsification experiment) ·
`dlp8-verify-latest.log` (10 engine assertions) ·
`dlp8-payloads-latest.json` (52 calls verbatim; 6 are the inference chain).

The falsification result, in one line — **remove one symptom and the conclusion changes, in the exact
pattern the rule's conjunction predicts**:

```
diabetes + foot numbness → CLIN-DIABETIC-FOOT + CLIN-DIABETES-A1C   (7 outputs)
diabetes, no numbness    → CLIN-DIABETES-A1C only                   (2 outputs)
numbness, no diabetes    → nothing                                  (0 outputs)
```
