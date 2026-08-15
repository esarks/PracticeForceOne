---
title: "PracticeForceOneClinicalDocumentContract"
---

# PracticeForceOne Clinical Document Contract

**Owner:** AgentDB · **Date:** 2026-07-25 · **Status:** ✅ **LIVE and PROVEN on build 1969 —
76/76 end-to-end assertions pass, including two-organization isolation.** Bind against it.
(See [Proof status](#proof-status) for the evidence and the two defects the proof caught.)

This is the one persistence contract for the PracticeForceOne Clinical Documentation System.

> **Founder directive, 2026-07-25:** *"There shall be exactly one documentation architecture. There
> shall not be one persistence model per specialty. There shall not be one table per form. There
> shall not be one API per condition. All configurable forms shall use one shared clinical
> documentation contract."*

Every Configurable Form used for clinical documentation — any specialty, any condition, today's
~1,821 templates and every future one — saves through **one API** into **one canonical entity**.
If you are about to add a table or an endpoint for a form, stop: this page is the alternative.

---

## The one entity

**`CLINICAL_FORM_INSTANCES`** (physical `clinical_form_instances`, `ddl/migrations/032`).
Canonical XML + JAC-generated CRUD. One row = **one instance of one form definition at one version,
for one patient**, usually inside one encounter.

The entity is called *form instance* in the schema and *clinical document* in the API. Same row:
an instance of a definition, and a document in the chart.

| Directive field | Column | Notes |
|---|---|---|
| Organization | `ORG_ID` | from the JWT, never from the request body |
| Patient | `PATIENT_ID` | required; ownership verified against the practice on create |
| Encounter | `ENCOUNTER_ID` | nullable — chart-level documents exist |
| Provider | `PROVIDER_ID` | nullable |
| Form Definition | `FORM_TYPE`, `FORM_DEFINITION_ID` | `FORM_TYPE` is the CF `formType`, e.g. `aortic_stenosis_cf` |
| Form Version | `FORM_DEFINITION_VERSION` | **pinned at save, carried forward on amendment, never rewritten** |
| Structured Payload | `ANSWERS` | JSON object — never rendered HTML, never flattened note text. Preserved **value-for-value**: every key, value, type (booleans, numbers, `0`) and **array order** survives exactly. JSON *object key order* is not preserved (the payload is validated and re-serialized) and is not semantically meaningful — compare payloads canonically, not by string equality. |
| Draft/Completed/Signed/Amended/Void | `STATUS` (+ derived, below) | |
| Created / Updated / Signed by | `CREATED_BY/AT`, `UPDATED_BY/AT`, `SIGNED_BY/AT`, `VOIDED_BY/AT` | |
| Version Chain | `ROOT_INSTANCE_ID`, `AMENDS_INSTANCE_ID`, `VERSION_NO`, `AMENDMENT_REASON` | |
| Audit History | `SOURCE_RECORD_EVENTS` | canonical event entity, `sourceType='clinical_document'` — **not** a second audit table |
| — | `SERVICE_DATE`, `DIAGNOSIS_CODE`, `PROBLEM_ID`, `FORM_TITLE`, `SOURCE` | query + context dimensions |

---

## Lifecycle and the immutability rule

```
draft ──► completed ──► signed ──► (amend) ──► new row: draft ──► … ──► signed
  │            │            │
  └── editable ┘            └── LOCKED FOREVER
```

- `draft`, `completed` — editable via `PUT`.
- `signed` — **content-locked**. `PUT` returns `409 DOCUMENT_LOCKED`. The answers, signer and signature
  timestamp of a signed document are never altered by any call in this API.
- `voided` — locked; retained for audit, excluded from lists unless `includeVoided=true`.

**Precisely one status transition is permitted on a signed document: `void`** (`voidReason` required,
fully audited). It is deliberate: a note filed on the wrong patient must be retractable, and voiding
is how that is done in a clinical record — never deletion, never an edit. Voiding records who, when
and why, and **does not touch `ANSWERS`, `SIGNED_BY` or `SIGNED_AT`**, so the signed content remains
exactly what was attested. Everything else about a signed row is immutable.

**"Amended" is derived, never stored on the original.** Amending **inserts a new row**
(`versionNo+1`, `amendsInstanceId` → the signed row, same `rootInstanceId`). The signed original is
not touched — *not even its status* — so it stays byte-for-byte what the clinician attested. Reads
report `superseded: true` on a row once a later version exists.

This is deliberate and worth understanding before anyone "improves" it: flipping the original's
status to `amended` would be a write to a signed clinical record. Deriving it costs one chain read
and keeps the signed row provably untouched.

---

## The API

Base: `/api/clinical-documents`. Bearer JWT required; **`orgId` comes from the token** and is applied
to every read and re-asserted on every update — a caller cannot address another org's documents.

### Write

| Call | Purpose |
|---|---|
| `POST /api/clinical-documents` | create a draft (or `status:"completed"`) |
| `PUT /api/clinical-documents/{id}` | update a draft — `409` once signed/voided |
| `POST /api/clinical-documents/{id}/sign` | attest + lock |
| `POST /api/clinical-documents/{id}/amend` | new version; original untouched (`amendmentReason` required) |
| `POST /api/clinical-documents/{id}/void` | void (`voidReason` required) |

**Create** — the only call CF templates need to bind:

```json
POST /api/clinical-documents
{
  "practiceId": "…", "patientId": "…", "encounterId": "…", "providerId": "…",
  "formType": "diabetes_followup_cf",
  "formDefinitionId": "…", "formDefinitionVersion": "3",
  "formTitle": "Diabetes Follow-up",
  "status": "draft",
  "serviceDate": "2026-07-25",
  "diagnosisCode": "E11.9",
  "answers": { "a1c": "7.2", "footExam": "normal", "…": "…" }
}
→ 201 { "id": "…", "rootInstanceId": "…", "versionNo": 1, "status": "draft",
        "created": true, "auditWritten": true }
```

`answers` is **your form's payload**. No field of it is interpreted, reshaped or promoted by this
API. It round-trips value-for-value (see the payload row above); only JSON object key order changes.

**Audit note for implementers:** the audit event deliberately does **not** carry a foreign-key link
to the encounter. `source_record_events.encounter_id` references `encounters(id)`, and a document
may legitimately carry an encounter id that does not resolve (external, not yet persisted, later
removed) — losing the audit entry over that is unacceptable in a clinical record. The event's
`sourceId` identifies the document, which carries the encounter, so no context is lost.

### Read

| Call | Returns |
|---|---|
| `GET /api/clinical-documents/{id}` | the document **with answers**, `versionCount`, `superseded` — this is *resume a draft* and *open from the chart* |
| `GET /api/clinical-documents/{id}/versions` | every version oldest→newest, each with answers and `superseded` |
| `GET /api/clinical-documents/{id}/audit` | audit history: event type, prior→new state, actor, timestamp |
| `GET /api/clinical-documents?…` | search |

Search dimensions (all optional, combinable): `patientId`, `encounterId`, `providerId`, `formType`,
`status`, `practiceId`, `diagnosisCode`, `fromDate`, `toDate`, plus `withAnswers=true` and
`includeVoided=true`. Lists return the standard envelope `{ items: [...], count: N }`.

The chart view is just `?patientId=…`; the encounter view is `?encounterId=…`.

---

## Phase 2 — the one encounter note ✅ LIVE and PROVEN on build 1974

✅ **PROVEN 2026-07-26 on live build 1974** — `tests/clinical-encounter-note-e2e.mjs` **36/36**, and
the phase-1 suite re-run as a regression check **76/76** (a JSONB conversion and seven new columns
landed underneath it). Bind against everything below.

Proven on live: the visit assembles as ONE note with all modules · **modules created out of order
read back in clinical order** (hpi → ros → exam → assessment/plan) · the chart lists the NOTE, not
its six sections (`notesOnly`) · **all 5 documents signed in ONE action**, per-document results ·
a module inside a signed note cannot be edited (409) · **re-signing is safe** (everything already
locked, nothing double-signed) · an amended module stays the same module, in the same note, at the
same position, with the signed original untouched and marked superseded · retrieval by specialty /
documentType / visitType / moduleKey · and payload queries finding fields **no screen ever declared
to the repository**.

The provider works in a visit, not in a form. These assemble everything documented during one
encounter into a single note, and attest the visit in one action:

| Call | Purpose |
|---|---|
| `GET /api/clinical-documents/encounter/{encounterId}` | the visit as ONE note — ordered by module then write order, with `noteStatus` = `signed` \| `partially-signed` \| `unsigned` \| `empty`, plus `signedCount` / `unsignedCount` |
| `POST /api/clinical-documents/encounter/{encounterId}/sign` | attest the whole visit; returns per-document results and **207** if any document fails, because a partial result must be visible |
| `GET /api/clinical-documents/{id}/modules` | the modules composing a note |

### Composable modules — without a per-module table

A module is a **row** that declares its parent note (`moduleOfId`), which module it is (`moduleKey`:
`hpi` / `ros` / `physical_exam` / `assessment_plan` / `medication_review` / `orders` / `procedure` / …)
and its order in the note (`moduleSeq`). A composed note is still one table.

```json
POST /api/clinical-documents
{ "practiceId":"…", "patientId":"…", "encounterId":"…",
  "formType":"hpi_module_cf", "formTitle":"History of Present Illness",
  "moduleOfId":"<the note's id>", "moduleKey":"hpi", "moduleSeq":1,
  "specialty":"Family Medicine", "documentType":"module",
  "visitType":"Established Patient - Follow-up",
  "answers": { "onset":"3 months", "quality":"gradual fatigue", "…":"…" } }
```

Amendment carries a module's identity **and position** forward, so an amended module stays the same
module in the same note at the same place — an assembled note cannot silently reorder itself.

### `DOMAIN` — provable separation between clinical and aesthetic records

`DOMAIN` (`CLINICAL` | `AESTHETIC` | …) is `NOT NULL DEFAULT 'CLINICAL'`, indexed with `PATIENT_ID`.
**Reads default to `CLINICAL`**, so a cosmetic document never appears in the clinical chart — including
in code written before the column existed. Pass `?domain=AESTHETIC` to get the cosmetic timeline, and
set `"domain":"AESTHETIC"` on create.

Requested by AgentAesthetics and granted on their argument, which is the one this contract already
makes about tenancy: **isolation that depends on every caller remembering to filter is not
isolation.** `ORG_ID` comes from the JWT and is re-asserted on every write precisely because a
client-supplied scope cannot be proven; a cosmetic document kept out of the clinical chart by a
`formType` naming convention has exactly that weakness — conventions are not constraints, and
definitions get renamed. It is also the one thing here that **cannot be backfilled**: once cosmetic
rows exist without it, nothing reliably says which were cosmetic.

It is deliberately **not aesthetics-only**. Behavioural health and occupational health want the same
capability: a class of document that does not surface in the ordinary chart list. The repository
stays ignorant of what any domain *means*.

### The remaining retrieval dimensions, and querying the payload

`?specialty=` · `?documentType=` · `?visitType=` · `?moduleKey=` · `?moduleOfId=` ·
`?notesOnly=true` (chart shows the note, not its six sections).

`answers` is now **JSONB**, so the repository can answer questions about content **no screen declared
to it**:

```
?answerField=a1c                 every document that captured an A1c
?answerField=a1c&answerValue=8.4 …with that value
```

This is the mechanism behind the promotion rule: a field is queryable **where it sits**, so promoting
it into a canonical column later is an optimisation, never a rescue.

Two implementation notes worth keeping: the query uses `jsonb_exists(...)` rather than Postgres's `?`
operator, because a literal `?` in a where clause is consumed as a JDBC bind placeholder; and
`module_seq` is `NOT NULL DEFAULT 0` because a nullable integer read through a generated JEO throws on
an empty PropertyValue.

**The TEXT→JSONB conversion was applied to the live table while build 1969 was serving traffic**, and
the phase-1 suite was re-run immediately: 76/76. The change was transparent to the deployed
string-binding CRUD.

---

## Signatures — co-signature, witness, refusal ✅ LIVE and PROVEN on build 1984

✅ **30/30** (`tests/clinical-signature-e2e.mjs`) against the deployed API: author attestation +
attending counter-signature + optional witness + patient consent on one document; the supervisor
work queue; completeness recomputed on every sign; a decline stored with its reason and NOT counted
as satisfied; decline/waive without a reason refused; a given signature never re-given (409); the
body-claimed signer ignored in favour of the authenticated user; and two-org isolation.

`SIGNED_BY` / `SIGNED_AT` on the document remain the **authoring attestation and the lock trigger** —
everything proven above about signed-document immutability is unchanged. `CLINICAL_DOCUMENT_SIGNATURE`
(`ddl/migrations/037`) adds the signatures *around* it, because two columns hold one signer at one
moment and real practice needs more:

| Case | How |
|---|---|
| A resident signs, an attending **counter-signs** | `signerRole:'supervisor'`, `signatureType:'cosignature'` |
| An injector documents, a **medical director** counter-signs | identical shape — this is why it is shared, not aesthetics-only |
| A non-clinician **witnesses** a consent | `signerRole:'witness'` (`signerId` is VARCHAR — witnesses and patients are not platform users) |
| The **patient** signs their own consent | `signerRole:'patient'`, `signatureType:'consent'` |
| **Awaiting co-signature** | a `status:'required'` row — a work-queue state that cannot exist while a signature is a column |
| A **refused** signature | `status:'declined'` with a reason — clinically meaningful, and never stored as an absence |

```
GET  /api/clinical-signatures?documentId=            the block + computed completeness
GET  /api/clinical-signatures?signerId=&status=required   "what needs my signature?"
GET  /api/clinical-signatures?practiceId=&signerRole=supervisor&status=required
POST /api/clinical-signatures                        request one (or record a given one)
POST /api/clinical-signatures/{id}/sign | decline | waive
```

**Four rules are enforced by the API, not merely documented:**

1. **The signer is whoever is authenticated**, never a body field. A signature that can name its own
   signer is not an attestation.
2. **A given signature is never re-given** (`409`). Otherwise an attestation could be silently
   reassigned to another person or time.
3. **Declining or waiving requires a reason.** A refusal without one is not a clinical record, and
   waiving a *required* signature is a decision someone must own.
4. **Completeness is computed, never assumed:** `signatureComplete` is true only when every
   **required** signature is signed or waived. It is returned on every read *and* on every sign, so a
   caller learns the document just became complete without a second call. A decline is reported
   separately from "still waiting" — they are different clinical situations.

---

## What AgentCF binds (the repeatable pattern)

The point of this contract is that **no form gets hand-wired**. One binding block, scripted across
every clinical definition, parameterised only by `formType` (and the title). Nothing per-condition:

```json
"clinicalDocument": {
  "entity": "clinical_document",
  "formType": "<this definition's formType>",
  "list":   { "method": "GET",  "url": "/api/clinical-documents?patientId={patientId}&formType=<formType>", "itemsKey": "items" },
  "load":   { "method": "GET",  "url": "/api/clinical-documents/{id}" },
  "create": { "method": "POST", "url": "/api/clinical-documents",
              "bodyConstants": { "formType": "<formType>", "formTitle": "<label>", "source": "cf-runtime" },
              "bodyFrom": { "answers": "@allFields", "patientId": "{patientId}",
                            "encounterId": "{encounterId}", "practiceId": "{practiceId}",
                            "providerId": "{providerId}" } },
  "update": { "method": "PUT",  "url": "/api/clinical-documents/{id}",
              "bodyFrom": { "answers": "@allFields" } },
  "sign":   { "method": "POST", "url": "/api/clinical-documents/{id}/sign" },
  "amend":  { "method": "POST", "url": "/api/clinical-documents/{id}/amend" }
}
```

**Two things this needs from the CF runtime** (AgentCF's half — the API side is done):

1. **`@allFields` → one JSON object.** cf-runtime must serialise the page's answers into the
   `answers` object rather than flattening to named top-level fields. This is the whole reason the
   pattern is one block instead of ~25,000 field mappings.
2. **A document mode.** On open with `?documentId=`, `load` and render existing answers; otherwise
   create a draft on first save and `update` thereafter. Signed → render read-only with an
   **Amend** action.

The runtime already has the vocabulary for the rest (`binding: {url, method, bodyConstants}` and
`list/itemsKey` are existing cf-runtime concepts).

**Do not** add `create`/`update` URLs pointing anywhere else. A specialty table is not a save target
for a documentation template (see [Specialty tables](#specialty-tables)).

---

## What AgentUI can rely on

- **Resume after interruption** — `GET /{id}` returns full answers; drafts are addressable by
  `?patientId=&status=draft`.
- **Chart view** — `?patientId=` returns every document, newest first, with `formTitle`, `status`,
  `signedBy`, `signedAt`, `versionNo`.
- **Version history** — `/{id}/versions` renders the amendment trail; `superseded` marks superseded
  versions.
- **Who/when/why changed** — `/{id}/audit` plus `amendmentReason` on each version.
- **Signing UX** — `locked: true` on every read of a signed document; `409 DOCUMENT_LOCKED` is the
  API telling you to offer *Amend* instead of *Save*.

Template recommendation (diagnosis/problem/visit-reason → suggested template) is **not** in this
contract — it belongs to the recommendation layer. This contract stores `diagnosisCode` and
`problemId` on the document so recommendations can be *evaluated and audited* afterwards.

---

## Specialty tables

Existing route-created specialty tables (`cardio_assessments`, `derm_lesions`, …) are **not** the
save target for documentation templates. They stay for structured data with a real operational,
reporting, interoperability or clinical requirement.

**Promote a field out of `ANSWERS` into a canonical column only** when there is a demonstrated need:
clinical decision support · medication/allergy safety · trending · reporting · quality measures ·
interoperability · billing · workflow routing · population health. A field does not earn a column
because it appears on a form. Promotion is additive — the payload keeps the original answers, so
promoting later never requires redesigning a template or re-collecting data.

The canonical relational entities the platform calculates on — patients, encounters, providers,
appointments, diagnoses, problems, medications, allergies, immunizations, orders, results,
procedures, claims — are unaffected by this contract and remain the system of record for their data.

---

## Proof status

✅ **PROVEN on build 1969** (2026-07-25). `tests/clinical-document-e2e.mjs` against the deployed API:
**76 assertions, 76 pass, 0 fail.**

| Rung (founder's shared definition of done) | Result on live 1969 |
|---|---|
| 1. correct form offered from the encounter | **not claimed — AgentUI's rung** (recommendation layer) |
| 2. answers save | ✅ 3 materially different templates |
| 3. answers survive reload | ✅ value-for-value incl. booleans, numbers, `0`, nested arrays; definition version pinned |
| 4. appears in the patient chart + encounter | ✅ chart list and encounter list exact |
| 5. signing locks the original | ✅ `PUT` → `409 DOCUMENT_LOCKED`; content unchanged; `locked:true` |
| 6. amendment creates a traceable version | ✅ v2 with `amendsInstanceId` + shared `rootInstanceId`; **original unchanged**, `superseded:true`; chain ordered v1→v2 |
| 7. two-organization isolation | ✅ **10/10** — org B refused READ, UPDATE, SIGN, LIST, audit, version chain, and **CREATE into org A's practice using org A's real practice+patient ids**; org A's document verified intact afterwards |
| 8. several templates, one model | ✅ wellness / diabetes / skin-lesion |
| 9. no form-specific table | ✅ all three through `/api/clinical-documents` alone |
| audit history | ✅ all five lifecycle events recorded, actor and state transition named |
| search · draft resume · void | ✅ every dimension; draft edit persisted; void excluded from chart, retrievable with `includeVoided=true`; signed-then-voided keeps answers + signer + timestamp |

**Independent database-level verification** (not the API reporting on itself): 16 documents ·
4 signed · 4 amendments · **3 distinct `form_type` values all in the one table** · 10 audit rows
across **5 distinct event types** (`created`/`updated`/`signed`/`amended`/`voided`) ·
**0 per-form tables created** (`information_schema` search for any table named after the three
templates returns none).

### The two defects the proof caught — both real, both mine

Runtime proof earned its cost here; neither would have been found by compiling or reading code.

1. **Audit events lost to an encounter FK.** `source_record_events.encounter_id` references
   `encounters(id)`; the event insert violated it whenever a document's encounter id did not resolve,
   so *every* audit write failed. Fixed by not FK-linking the event to the encounter — the event's
   `sourceId` identifies the document, which carries the encounter.
2. **`event_payload` is NOT NULL in the database but `nullable="true"` in the canonical XML.**
   Binding null raised `23502`, and `batchCreate` swallows SQL errors into the reply Jeo — so the
   audit entry vanished silently. Exactly one of four event types worked (amend, which happened to
   carry a payload), which is the signature of this class. Fixed by always binding `{}`.

Both were visible only because the API reports `auditWritten:false` instead of hiding the failure.
That field exists for this reason; keep it.

**A schema hazard this exposed, beyond this contract:** a sweep of all 105 canonical tables found
**exactly 4** columns where the XML says nullable and the physical column is NOT NULL —
`source_record_events.event_payload` (fixed), `claims.diagnosis_codes`, `authorizations.is_expedited`,
`review_attestations.evidence_payload`. The last three are latent (every current create site sets
them), but on `claims`/`authorizations` the same pattern would silently swallow a *billing* write.
Filed in `ISSUES.md`.

**Two corrections the proof forced on this contract:** the payload is preserved *value-for-value*,
not byte-for-byte (object key order changes — compare canonically); and a signed document is
*content*-locked, with `void` as the one permitted status transition.

The proof this must pass — the founder's shared definition of done — is:

1. correct form offered from the encounter *(UI lane)* · 2. answers save · 3. answers survive reload ·
4. document appears in the patient chart · 5. signing locks the original · 6. amendment creates a
traceable version · 7. two-organization isolation · 8. several materially different templates on the
same model · 9. no form-specific table needed.

Rungs 2–9 are this contract's; results will be appended here and to `AGENTS.md`.

**A risk I raised and then disproved, recorded so nobody re-raises it:** the patched JAC generator is
absent from the build machine, so locally this table's CRUD was generated with untyped JDBC binding
(strings for timestamp/date/integer) while every other table is typed. Two checks closed it: (1) a
direct JDBC probe against the real table bound uuid, integer, timestamptz and date all as strings and
Postgres accepted and stored every one correctly (the pool sets `stringtype=unspecified`); (2) the
cloud pipeline regenerates the data layer hermetically and **deletes the uploaded data classes before
recompiling**, so production runs the cloud toolchain's output regardless of what any PC generated.
The local/cloud generator divergence is a tree-hygiene problem, not a runtime one.

---

Related: [PracticeForceOne Specialty Forms](PracticeForceOneSpecialtyForms.html) ·
[PracticeForceOne Platform Architecture](PracticeForceOnePlatformArchitecture.html)
