---
title: "PracticeForceOnePmpBoundaryV2"
---

# PrescriptionMonitoringProvider — Boundary Contract V2 (report persistence)

**AgentARCH · 2026-08-09 · governed contract, jurisdiction-neutral**
Supersedes the V1 boundary posted to AGENTS.md 2026-08-08. Written against founder broadcast
2026-08-09 §6 (boundary V2) and §13 (restricted-data evaluation). Live baseline: build 2215.

> **Status: PROPOSED (architecture) + one hard prerequisite for the storage half.**
> The interface, the three-entity separation, and the segregation rule below are ready for DB/CF/UI
> to build against. **Report *persistence* additionally depends on AgentFuture's Discovery
> Addendum 1B** (may Oklahoma/Bamboo-returned data be retained, and under what redisclosure and
> retention rules). Build the capability; do not enable retention until 1B answers.

---

## 1. Why V1 had to change

V1 said: persist workflow facts, never the report. The founder's 2026-08-09 direction expands
this — the platform must *support* a governed, persisted PMP report where legally permitted. That
is not "store the blob." It changes the boundary in three ways: the provider interface gains
retrieval/persistence operations, the data model must separate three different kinds of truth, and
**PFO must be able to hold data that is more restricted than ordinary chart data — a capability it
does not have today (§5).**

## 2. The interface (jurisdiction-neutral)

`PrescriptionMonitoringProvider` — one governed abstraction, mirroring the proven PaymentProvider
shape. **Oklahoma (OBNDD via PMP AWARE / Bamboo) is an adapter + configuration of this interface,
never logic inside clinical modules.**

| Operation | Contract |
|---|---|
| `applicability(ctx)` | `REQUIRED` / `RECOMMENDED` / `NOT_APPLICABLE`, derived from **clinical facts + `controlledSchedule` metadata + practice configuration** (§12 of the broadcast). Never a jurisdiction constant, never a practice name. This is what makes "Oasis has no controlled substances today, but will trigger automatically if HRT/phentermine/benzodiazepine appear" true by derivation rather than by hardcoding. |
| `query(ctx, request)` | Initiates an authorized query. Returns a **handle** carrying the external correlation reference. Separate from retrieval because real PMP paths are frequently asynchronous/portal-mediated. |
| `retrieve(handle)` | `PENDING` or a `PmpReport` value object. Retrieval is not persistence. |
| `acknowledge(handle, actor)` | Records that a named human **reviewed** the result. Distinct from retrieval — a report fetched by a delegate is not a provider review. |
| `persistReport(report, policy)` | **May refuse.** Governed by the retention policy (§6); refusal is a normal, expected outcome, not an error. |
| `recordInterpretation(ctx, interpretation)` | The provider's clinical judgment and consequence. |

Adapters: `OK_PMP_AWARE_MOCK` first (exactly as SQUARE_MOCK preceded the payment adapters), then a
real adapter only after discovery verifies the authorized path. No scraping, no credential
automation, no invented API.

**Configuration home: `external_interfaces`** (`partner_type='pmp'`, `adapter_key`,
`mode mock|sandbox|live`, `secret_ref`) — the model payments already proved. No new config system.

## 3. Three entities, never commingled

The founder's §2 A/B/C is an architectural boundary, not a presentation preference:

1. **PMP query/review event** — workflow facts: initiator, reviewer, timestamps, patient,
   encounter, provider, practice, jurisdiction, status, clinical reason, external correlation id.
   *Always persisted. Not restricted beyond ordinary PHI.*
2. **PMP report** — the external clinical content: source, query time, report time, jurisdiction,
   external reference, version, content (document and/or normalized rows), integrity hash,
   retention metadata, access classification. *Persisted only under policy (§6).*
3. **Provider interpretation** — reviewed / no concern / discrepancy / prescribing modified /
   declined / follow-up needed. *Always persisted; this is clinical documentation authored by the
   provider and belongs to the chart in the ordinary way.*

Commingling 2 and 3 would make a provider's judgment inherit the report's restrictions — and would
make the external record look like clinician-authored documentation. Keep them separate rows with
an explicit link.

## 4. Storage contract

- **Dedicated tables — never `documents`, never `clinical_form_instances`.** See §5: this is the
  load-bearing safety decision, not a modelling preference.
- **Content encrypted at rest** via the proven `FieldCipher` path (the same mechanism protecting
  SSN/subscriber id), with a **SHA-256 integrity hash** stored alongside (the `AuditWriter`
  pattern) so later mutation is detectable.
- **Provenance preserved**: source system, external reference, report timestamp, version. A
  re-query creates a NEW report row; reports are immutable once written (append-only, like audit).
- **Tenant isolation**: `practice_id` NOT NULL, org-scoped reads, per ADR-009 — identical to every
  other patient-linked entity.
- **Patient linkage by the canonical resolver** (`PatientRef`), never a second lookup.
- **Retention hooks as columns, not code**: `retention_policy`, `expires_at`, `purge_behavior` —
  so 1B's answers become configuration rather than a migration.

## 5. §13 EVALUATION — does the current model already cover restricted data? **NO. Measured.**

Founder asked for a verdict with evidence, not a taxonomy for theory. Measured on the current tree:

| What exists | What it actually restricts |
|---|---|
| `ProtectedAccess` (`mayViewPatient`, confidential flag, access groups, break-glass) | **The PATIENT** — the whole chart, all-or-nothing |
| `patient_confidentiality.is_confidential` | The PATIENT |
| `patient_access_groups` (`is_restricted`) | The PATIENT, per cohort |
| `DOCUMENTS` columns (`DOCUMENT_TYPE`, `CATEGORY`, `STATUS`) | **Taxonomy for filing — no access semantics** |
| `clinical_form_instances` | **No classification/visibility column at all** |
| The one `CLASSIFICATION` field in the DDL XML | EDI envelope errors — unrelated |

**Finding: PFO can restrict a patient. PFO cannot restrict a datum.** There is no per-record
classification, and therefore nothing for an export or portal surface to honour. Two further
honest facts: `CONFIDENTIAL_CHART_ENFORCEMENT` is **default OFF**, and that gate is deliberately
**fail-open** — so even the patient-level control is not currently enforcing in production.

**Consequence for PMP:** a PMP report filed as an ordinary document would be reachable by every
generic surface — chart views, export paths, and any portal document surface — with no mechanism
able to say "not this one." That is a redisclosure incident waiting for a feature to enable it.

**Therefore the interim rule, which is safe TODAY and needs no new taxonomy:**

> **Segregate by storage location instead of by classification flag.** PMP reports live in their
> own tables with their own routes. No existing chart/export/portal query can reach them *by
> construction*, because none of those queries name those tables. Portal visibility is DENIED by
> the absence of any portal path, not by a flag someone must remember to set.

**And the recommendation:** a per-record classification capability (`NORMAL_CLINICAL` /
`RESTRICTED_CLINICAL` / `EXTERNAL_RESTRICTED` / `LEGAL_SPECIAL_ACCESS`) is **genuinely needed**,
but its justification is broader than PMP — behavioural health, substance use, and sensitive
consents have the same shape. It should be built as a platform capability with an enforcing
checker (a classification nobody checks is worse than none: see the published-contract-with-no-
checker lesson), **not** as a PMP side-effect. Registered as an architecture item; PMP does not
wait for it because §5's segregation rule covers PMP specifically.

## 6. Authorization + retention policy

- **Access is a policy decision, not a route decision**: authenticate → tenant/practice authorize
  → patient resolve → **PMP-report authorization** (role/delegate rules from discovery) → serve.
  The last step is new and belongs in one place, reachable by every future PMP surface.
- **Delegates are a distinct question from providers** (discovery item 7) — the model must be able
  to express "may query" without "may read stored historical reports."
- **Re-query vs rely-on-stored** (discovery item 8) is a policy hook, not a UI choice: if Oklahoma
  requires fresh queries, `retrieve()` refuses to serve a stale persisted report for clinical
  decision-making and the UI shows why.
- **Export/print/portal default DENY** until 1B says otherwise, enforced per §5.

## 7. Audit hooks (AgentInfrastructure owns enforcement)

Every operation emits through the canonical `ChangeAudit`/`audit_log` path with
`workflow='pmp_review'`, distinguishing the nine event kinds the founder listed: query requested ·
query completed · report viewed · report persisted · report re-opened · interpretation documented ·
PMP-linked prescribing decision · exported/printed (if ever permitted) · deleted/expired. **Report
*viewing* is itself an audited event** — PMP access must be more observable than ordinary chart
access, which means viewing rides the read-audit path, not just the write path.

## 8. Ownership + sequence

| Lane | Owns |
|---|---|
| AgentFuture | Discovery 1A (dispenser reporting) + **1B (persistence/retention/redisclosure) — the gate on §4/§6** |
| AgentARCH | This contract; the classification-capability ruling; boundary review of the adapter |
| AgentDB | Canonical schema for the three entities (coordinate with ARCH **before** DDL) |
| AgentCF | `applicability` triggers as definitions + `controlledSchedule` metadata |
| AgentUI | Provider experience at the prescribing decision; vendor complexity hidden; portal OFF |
| AgentInfrastructure | Audit event coverage + access-policy enforcement |
| AgentDLP | Journey families (structure now, execution after contracts) |
| AgentAesthetics | Oasis applicability **derived from formulary**, never "Oasis never uses PMP" |

**Sequence:** interface + three-entity schema + mock adapter + workflow/interpretation persistence
may proceed now. **Report persistence enables only when 1B lands.** Nothing in the clinical modules
learns the word "Oklahoma."
