---
title: "PracticeForceOneECWDeepDive"
---

# PracticeForceOne vs eClinicalWorks — Deep-Dive Capability Comparison

> **⚠️ Superseded for screen-level detail (2026-07-11).** This page is the strategic
> capability comparison, written 2026-06-26 from public documentation — **before** the
> screen-grab assessment. The current, screen-evidenced view is
> [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>) (268 findings, 100%-reviewed
> corpus of 1,778 eCW screens, per-row PFO implementation targets) plus its 10
> `PracticeForceOneECWMatrix*` screen/field inventory pages. Where this page and the
> table disagree on eCW specifics, the table wins (it is evidence-traced to screenshots).
> This page remains useful for market positioning and the executive framing.

**Last reviewed: 2026-07-24** | Live build: 1943 | Gate: 251/251 GREEN | MR2–MR7 DELIVERED · MR8/MR9/MR10 ACTIVE
**Last updated:** 2026-06-26 (strategy content) · banner 2026-07-11
**PFO baseline:** codebase-verified, MR6 released (build ~1953+), MR7 active; live build at authoring `1589/618fa3ec4`; **current live build: 1943**
**Comparison subject:** eClinicalWorks (eCW) — ambulatory EHR + Practice Management + RCM + healow patient-engagement suite

> **Honesty note (read first).** PracticeForceOne (PFO) claims below are grounded in the actual repository (`server/ClaimsProcessingRouter.script`, `util/*Routes.script`, `ui/public/*`) and the in-repo wiki. Where PFO ships a feature whose *external vendor connection* is simulated, it is marked **[MOCK]** — the contract/seam exists and is production-testable, but no live network partner is wired. eClinicalWorks descriptions reflect publicly documented product capabilities of a mature, ONC-certified platform and may vary by edition/version/contract. The fair frame for this document: **a 25-year-old certified market incumbent vs. a modern, AI-native, pre-production challenger.** The comparison is most useful read as *"where does the challenger actually threaten the incumbent, and where must it not pretend to compete yet."*

**Status legend:** ✅ Live · 🟡 Gated (built, behind a flag) · 🧪 [MOCK] (seam live, vendor simulated) · 🟠 Partial · 🔵 Planned · ⛔ Not built

---

## 1. Executive Summary

| Dimension | eClinicalWorks | PracticeForceOne | Who leads |
|---|---|---|---|
| Breadth of certified features | Vast — 40+ specialties, full ONC certification, decades of depth | Focused on the front-office → clinical → RCM spine | **eCW** |
| External integrations (live) | Surescripts, LabCorp/Quest, clearinghouses, FHIR networks, Carequality/CommonWell | All present as **swap-ready seams**, vendor side **[MOCK]** | **eCW** |
| RCM automation intelligence | Rules + some predictive | **AI-native**: denial reasoner, appeal drafter, risk scoring, self-tuning payer rules, autopilot ledger | **PFO** |
| Unified operating model | Worklists / "Jellybeans" per module | **One Kanban source-record board** spanning registration→claim→payment | **PFO** |
| User experience | Powerful but click-heavy, dated reputation | Workflow-first, fewer clicks, modern web | **PFO (design intent)** |
| Architecture & deployment | Large legacy codebase, AWS-hosted multi-tenant | Cloud-native (Cloud Run + Postgres), hermetic CI/CD, safe-canary deploy | **PFO** |
| Transparency / trust engineering | Opaque (history incl. 2017 DOJ settlement) | Provenance badges, STRICT data-honesty mode, compliance evidence rollup | **PFO** |
| Production readiness today | Proven at national scale | Pre-production, single-clinic, integrations pending | **eCW** |

**One-line thesis:** PracticeForceOne does not win by out-featuring eClinicalWorks on breadth — it wins by being the **AI-automation-first RCM + unified-workflow layer** that is modern, transparent, and labor-saving, aimed squarely at eCW's two weakest flanks: **denial/AR revenue leakage** and **click-fatigue / opacity**.

---

## 2. Platform Profile Snapshot

| | eClinicalWorks | PracticeForceOne |
|---|---|---|
| Category | Ambulatory EHR + PM + RCM + patient engagement | Ambulatory practice operations + RCM platform (EHR-lite + automation) |
| Maturity | 25+ years, ~180k+ providers (vendor claims) | Pre-production, single deployed clinic |
| Deployment | Cloud (AWS) multi-tenant; some on-prem legacy | Cloud-native: Google Cloud Run (stateless, 0–20 instances) + Cloud SQL Postgres |
| Patient engagement | **healow** ecosystem (mobile apps, portal, TeleVisits, Pay, Kiosk) | Responsive web portal (no native app) |
| AI flagship | **Sunoh.ai** ambient scribe; PRISMA record search | Denial/appeal/coding/copilot RCM AI + autopilot ledger |
| Certification | ONC 2015 Edition Cures Update certified | None yet (biggest gate to broad deployment) |
| Codebase | Proprietary, closed | JAC monolith (~630K lines `.script`, ~82% generated CRUD), hermetic build, agent-developed |

---

## 3. Feature-by-Feature Comparison

Each row reads: capability → eCW state → PFO state (with PFO status icon) → **verdict** (gap = PFO behind, edge = PFO ahead, parity = comparable).

### A. Scheduling & Front Office

| Capability | eClinicalWorks | PracticeForceOne | Verdict |
|---|---|---|---|
| Appointment calendar (multi-provider, slots) | ✅ Mature, multi-resource, multi-location | ✅ `/api/appointments`, 15-min slots, modify-safe | Parity |
| Provider availability templates | ✅ | ✅ `PROVIDER_AVAILABILITY_TEMPLATES`, weekly Sun–Sat patterns | Parity |
| Appointment types / visit types | ✅ Deep, specialty-aware | 🟠 `visit_type` recorded; shallow type library | **Gap (minor)** |
| Waitlist + cancellation auto-fill | ✅ | ✅ `appointment_waitlist`, priority-based promotion | Parity |
| Eligibility-aware scheduling | 🟠 Eligibility is a separate step | ✅ Coverage context surfaced *during* booking | **Edge** |
| Recurring / recall scheduling | ✅ Robust recall campaigns | ⛔ | **Gap** |
| Resource / room / equipment scheduling | ✅ | ⛔ | **Gap** |
| No-show prediction | 🟠 Some analytics | 🔵 Flagged, not built | **Gap (minor)** |
| **Unified workflow board** | 🟠 Per-module worklists ("Jellybeans") | ✅ **20-lane Kanban source-record board** | **Edge (signature)** |

### B. Patient Registration, Check-in & Intake

| Capability | eClinicalWorks | PracticeForceOne | Verdict |
|---|---|---|---|
| Portal self-registration | ✅ via healow | ✅ `PortalAuthRegisterRoutes` + email-confirmation gate | Parity |
| Kiosk / tablet check-in | ✅ healow Kiosk / CHECK-IN | ✅ single-use quick-access codes, kiosk flow | Parity |
| Digital intake forms | ✅ healow forms | ✅ Dynamic Forms (configurable, evidence-captured) | Parity |
| Insurance capture + card images | ✅ | ✅ primary/secondary/tertiary + Medicare MBI + card image evidence | Parity |
| Insurance eligibility at intake | ✅ live 270/271 | 🧪 [MOCK] 270/271 (queued, re-check, exceptions) | **Gap (integration)** |
| Med/allergy patient self-report | ✅ | ✅ portal medication search + allergy entry | Parity |
| Auto-promote intake → chart | ✅ | 🟠 staff-reviewed promotion (no auto-merge) | **Gap (minor)** |

### C. Clinical Documentation

| Capability | eClinicalWorks | PracticeForceOne | Verdict |
|---|---|---|---|
| Progress notes / encounter workspace | ✅ Templates, specialty content, macros | ✅ `/api/encounters`, appointment-linked, draft/sign/amend | Parity (eCW deeper templates) |
| **Ambient AI scribe** | ✅ **Sunoh.ai** (flagship) | ⛔ | **Gap (major)** |
| Problem list (longitudinal) | ✅ | ✅ `patient_problems` (status, onset/resolution, severity) | Parity |
| Medication list (longitudinal) | ✅ | ✅ `patient_medications` (RxNorm/NDC, source-tagged) | Parity |
| Allergy list | ✅ w/ interaction checking | ✅ list; ⛔ server-authoritative interaction CDS | **Gap** |
| Vitals (structured + trend) | ✅ flowsheets, growth charts | ✅ `encounter_vitals` + trend; ⛔ growth charts/flowsheets | **Gap (minor)** |
| Note versioning & amendments | ✅ | ✅ `ENCOUNTER_NOTE_VERSIONS` / `_AMENDMENTS`, locked re-sign | Parity |
| Clinical decision support (CDS) | ✅ server-side, drug DB (Medi-Span/FDB) | 🟠 advisory client-side only | **Gap** |
| Order sets / specialty flowsheets | ✅ | ⛔ | **Gap** |
| Immunization registry / forecasting | ✅ state registry interfaces | ⛔ | **Gap** |
| Care-plan / follow-up tasks | ✅ | ✅ `clinical_tasks` (care-plan-lite) | Parity (lite) |

### D. e-Prescribing, Orders & Labs

| Capability | eClinicalWorks | PracticeForceOne | Verdict |
|---|---|---|---|
| e-Prescribing (Surescripts) | ✅ certified, live network | 🧪 [MOCK] NCPDP SCRIPT adapter, mock pharmacy directory | **Gap (integration)** |
| EPCS (controlled substances) | ✅ certified | 🟡 gate enforced (409) until DEA cert; not certified | **Gap** |
| PDMP integration | ✅ | ⛔ | **Gap** |
| Refill management | ✅ | ⛔ (schema placeholder only) | **Gap** |
| Lab orders (CPOE) | ✅ bidirectional LabCorp/Quest | 🟡 lightweight order create + medical-necessity pre-check | **Gap (integration)** |
| **Order-time medical-necessity check** | 🟠 mostly at claim time | ✅ payer-rule check *before* order placement | **Edge** |
| Lab results inbound (HL7 ORU) | ✅ live interfaces | 🧪 [MOCK] `Hl7Oru*Routes` + result inbox/escalation | **Gap (integration)** |
| Result escalation / overdue routing | ✅ | ✅ `ClinicalResultsEscalateRoutes` | Parity |
| Imaging / radiology orders | ✅ | ⛔ | **Gap** |

### E. Patient Engagement, Portal & Telehealth

| Capability | eClinicalWorks | PracticeForceOne | Verdict |
|---|---|---|---|
| Patient portal (web) | ✅ healow | ✅ scoped portal (own chart/appts/intake) | Parity (core) |
| Native mobile app (iOS/Android) | ✅ healow app | ⛔ responsive web only | **Gap (major)** |
| Telehealth video visits | ✅ healow TeleVisits | ⛔ (`visit_type` recorded only) | **Gap (major)** |
| Two-way secure messaging | ✅ | ⛔ | **Gap** |
| Online bill pay | ✅ healow Pay (live processor) | 🧪 [MOCK] | **Gap (integration)** |
| Appointment reminders (text/email/voice) | ✅ campaigns | ⛔ (no live messaging channel) | **Gap** |
| Online self-scheduling | ✅ | 🔵 portal can *request*; no live self-book | **Gap** |
| Patient result release | ✅ | ⛔ | **Gap** |

### F. Revenue Cycle Management (PFO's home turf)

| Capability | eClinicalWorks | PracticeForceOne | Verdict |
|---|---|---|---|
| Charge capture from encounter | ✅ | ✅ signed encounter → charge review | Parity |
| Charge master | ✅ | ✅ CRUD + seed + per-practice backfill | Parity |
| Coding (CPT/ICD/HCPCS) + NCCI/MUE | ✅ | ✅ `ChargeReviewRoutes` w/ NCCI/MUE, description search | Parity |
| **AI coding suggestions** | 🟠 limited | 🟡 `CodingAssistant` (`CODING_ASSIST_ENABLED`) | **Edge (when on)** |
| Claim scrubbing | ✅ | ✅ `/api/scrub` + dry-run preview (DX/auth/DOS/coverage) | Parity |
| 837 submission / clearinghouse | ✅ live | 🧪 [MOCK] `EdiRoutes` + mock clearinghouse (TA1/999/277/835) | **Gap (integration)** |
| Eligibility (270/271) | ✅ live | 🧪 [MOCK] + scheduled re-check | **Gap (integration)** |
| Prior authorization tracking | ✅ | ✅ `AUTHORIZATIONS` + auth-stop gate | Parity |
| ERA (835) posting + EOB | ✅ live | 🧪 [MOCK] ERA parse, TRN-idempotent posting, COB split | **Gap (integration)** |
| Secondary billing (COB) | ✅ | ✅ `SECONDARY_BILLING_QUEUE`, auto-trigger on split pay | Parity |
| **Denials management** | 🟠 capture + manual work | ✅ capture + **AI denial reasoner** (CARC classification, confidence) | **Edge** |
| **Appeals generation** | ⛔/weak | 🟡 **AI appeal drafter** + templates + ≤14-day deadline clock | **Edge (signature)** |
| **Predictive denial-risk scoring** | 🟠 some | 🟡 pre-submit risk tiers on charge-review surface | **Edge** |
| A/R follow-up + aging | ✅ | ✅ aging buckets, timely-filing alerts, auto-inquiry [MOCK] | Parity |
| Patient statements | ✅ live print/mail | 🔵 report/seed only (no live mail) | **Gap** |
| Patient payments | ✅ healow Pay | 🧪 [MOCK] | **Gap (integration)** |
| **Self-tuning payer rules** | ⛔ | 🟡 candidate discovery + reviewer-gated promotion + versioning | **Edge (signature)** |

### G. AI & Automation

| Capability | eClinicalWorks | PracticeForceOne | Verdict |
|---|---|---|---|
| Ambient scribe | ✅ Sunoh.ai | ⛔ | **Gap (major)** |
| Record aggregation/search | ✅ PRISMA | 🟠 unified chart, no external aggregation | **Gap** |
| Conversational copilot (biller) | 🟠 | 🟡 `CopilotOrchestrator` (~22.5K lines, tool-calling) | **Edge** |
| Denial reasoning AI | 🟠 | 🟡 `DenialReasoner` (LLM + deterministic fallback) | **Edge** |
| Appeal drafting AI | ⛔ | 🟡 `AppealDrafter` (PDF, narrative + boilerplate) | **Edge** |
| Risk scoring | 🟠 | 🟡 `RISK_SCORING_ENABLED` | **Edge** |
| **Autopilot execution ledger** | ⛔ | ✅ `AUTOPILOT_EXECUTIONS` (mode, confidence, hard-stop, reversibility) | **Edge (governance signature)** |
| Per-practice AI governance flags | 🟠 | ✅ `/api/admin/ai-flags` default-OFF gating | **Edge** |

### H. Interoperability

| Capability | eClinicalWorks | PracticeForceOne | Verdict |
|---|---|---|---|
| HL7 v2 (labs/results) | ✅ live | 🧪 [MOCK] ORU parsing | **Gap (integration)** |
| FHIR R4 APIs | ✅ certified | 🟠 Patient/Coverage/Practitioner/Claim endpoints (uncertified) | **Gap** |
| C-CDA import/export | ✅ certified | 🟡 `Ccda*Routes` design-stage | **Gap** |
| Health information exchange | ✅ Carequality/CommonWell/eEHX | ⛔ | **Gap (major)** |
| Direct secure messaging / eFax | ✅ | 🔵 planned | **Gap** |
| Bulk import / migration | ✅ | ✅ `ClaimsImportRoutes` (preview + validation); 🟠 prior-EHR migration site-specific | Parity (lite) |
| Export (CSV/Excel) | ✅ | ✅ dashboard + charge export | Parity |

### I. Reporting, Analytics & Population Health

| Capability | eClinicalWorks | PracticeForceOne | Verdict |
|---|---|---|---|
| Operational dashboards | ✅ eBO / dashboards | ✅ event feed + workflow tiles + **provenance badges** | Parity (+honesty edge) |
| RCM reports (aging/denial/collection) | ✅ | ✅ timely-filing aging live; others 🔵 | **Gap (breadth)** |
| Custom report builder (Crystal/eBO) | ✅ | ⛔ | **Gap** |
| MIPS / MACRA quality reporting | ✅ certified | ⛔ | **Gap (major)** |
| Population health / registries / HEDIS | ✅ CCMR, risk strat, care gaps | ⛔ | **Gap (major)** |
| Real-time KPIs (collection rate, A/R days) | ✅ | ✅ `/api/claims` aggregates | Parity |
| Data provenance / trust indicators | ⛔ | ✅ 🟢live/🟡computed/🟠volatile/🔵preview badges | **Edge** |

### J. Security, Compliance & Multi-Tenancy

| Capability | eClinicalWorks | PracticeForceOne | Verdict |
|---|---|---|---|
| HIPAA TLS / encryption in transit | ✅ | ✅ Cloud Run + Cloud SQL always-encrypted | Parity |
| RBAC enforcement | ✅ | 🟡 matrix defined (7 roles/40+ perms), enforcement env-gated OFF | **Gap** |
| MFA / TOTP | ✅ | ✅ staff MFA live (`MfaRoutes`); ⛔ portal MFA | Parity (staff) |
| Audit logging (PHI access) | ✅ | ✅ `AUDIT_LOG`; 🟠 reliability work pending (some empty-catch sites) | Parity (with caveat) |
| Break-glass emergency access | 🟠 | ✅ `/api/break-glass` w/ audit | **Edge** |
| Field-level encryption at rest | ✅ | 🔵 design-stage | **Gap** |
| Compliance evidence rollup | 🟠 | ✅ `/api/compliance/evidence-summary` (SOC2/HIPAA control mapping) | **Edge** |
| Multi-tenant isolation (org/practice) | ✅ | ✅ `practice_id`/`org_id` scoping every read/write; 403 cross-org tested in deploy gate | Parity |
| ONC certification | ✅ | ⛔ | **Gap (major, blocking)** |

### K. Architecture, Deployment & Total Cost

| Capability | eClinicalWorks | PracticeForceOne | Verdict |
|---|---|---|---|
| Codebase modernity | Legacy (25 yrs) | Modern JAC monolith, generated CRUD | **Edge** |
| Deployment model | AWS multi-tenant managed | Cloud Run stateless + Cloud SQL | Parity (PFO leaner) |
| CI/CD | Vendor-internal | Hermetic Cloud Build, **safe-canary** (no-traffic → UAT gate → flip) | **Edge** |
| Connection resilience | Mature | ✅ self-heal heartbeat + STRICT data-honesty mode | **Edge** |
| Scalability proof | National scale ✅ | ⛔ single clinic, unproven at scale | **Gap (major)** |
| TCO / onboarding speed | High license + services | Lean cloud footprint; swap-ready seams | **Edge (intent)** |
| Bus factor / maintainability | Large org | 🟠 bespoke toolchain, single-maintainer risk (runbooks now formalized) | **Gap** |

### L. Administration & Configuration

| Capability | eClinicalWorks | PracticeForceOne | Verdict |
|---|---|---|---|
| User/role admin | ✅ | ✅ `UsersRoutes` + role assignment | Parity |
| Practice / provider / payer config | ✅ | ✅ Practices/Providers/Payers + payer rules | Parity |
| Configurable intake forms | ✅ | ✅ Dynamic Forms (JSON-driven, conditional) | Parity |
| Portal user management | ✅ | ✅ `AdminPortalUsersRoutes` (status, review gate) | Parity |
| Credentialing / license tracking | ✅ | 🔵 planned | **Gap** |
| AI feature governance | ⛔ | ✅ per-practice/global flags | **Edge** |

---

## 4. Gap Analysis — Where PracticeForceOne Is Behind

Prioritized by how much each blocks competing for a real, paying multi-site customer.

**Tier 1 — Blocking (must close before head-to-head sales):**
1. **All external integrations are [MOCK]** — Surescripts eRx, HL7 labs, EDI clearinghouse, eligibility 270/271, ERA 835, payment processing. The seams are clean and swap-ready, but no live vendor connection exists. This is the single largest gap.
2. **No ONC / Cures certification** — required for most payer programs and a buying-committee checkbox.
3. **Unproven at scale** — single deployed clinic; no multi-site, high-volume runtime proof.

**Tier 2 — Major feature gaps (lose deals on these):**
4. **No ambient AI scribe** — eCW's Sunoh.ai is a top purchase driver; PFO has no equivalent.
5. **No telehealth video & no native mobile app** — healow covers both.
6. **No population health / MIPS / HEDIS / registries** — disqualifies value-based-care buyers.
7. **No HIE participation** (Carequality/CommonWell) and uncertified FHIR/C-CDA.
8. **Patient engagement breadth** — no two-way messaging, live bill pay, reminder campaigns, self-scheduling, result release.

**Tier 3 — Hardening / depth (won't lose the deal, will lose the audit):**
9. **RBAC enforcement gated OFF**, field-level encryption not implemented, audit-log reliability work pending.
10. **Specialty depth** — no order sets, flowsheets, immunization registries, growth charts.
11. **Maintainability / bus factor** — bespoke JAC toolchain, single-maintainer; runbooks formalized but org depth thin.
12. **Data-integrity ratchet** — a share of generated writes still unchecked for SQL errors (trending down via ratchet).

---

## 5. Advantage Analysis — Where PracticeForceOne Is Ahead

1. **AI-native RCM automation** — denial reasoner, appeal drafter, predictive risk scoring, AI coding assist, and a biller copilot are *built in*, not bolt-ons. This directly attacks the dollars practices actually lose.
2. **Self-tuning payer rules** — the system learns from denied claims and proposes reviewer-gated rule candidates. eCW has nothing equivalent.
3. **Unified Kanban source-record board (20 lanes)** — one visible pipeline from "patient needs appointment" through "patient balance needed." eCW fragments this across module worklists.
4. **Autopilot execution ledger** — every automated action is recorded with mode, confidence, hard-stop, and reversibility. This is governance the incumbents don't offer.
5. **Upstream denial prevention** — medical-necessity check at *order* time and eligibility context at *scheduling* time, not just at claim time.
6. **Transparency / trust engineering** — provenance badges (live vs. computed vs. volatile), STRICT data-honesty mode, and a compliance-evidence rollup. A direct counter to EHR opacity (and to eCW's 2017 DOJ-settlement trust baggage).
7. **Modern cloud-native architecture & CI/CD** — hermetic builds, safe-canary deploys, connection self-heal, lean Cloud Run/Postgres footprint → lower TCO and faster iteration than a 25-year-old codebase.
8. **Per-practice AI governance** — granular default-OFF flags let a practice adopt automation at its own pace.

---

## 6. What Will Set PracticeForceOne Apart Competitively

This is the headline answer. PFO should **not** try to match eCW feature-for-feature on breadth — that is a losing, decade-long race. It wins by owning a sharply defined wedge and being unmistakably better there.

### The wedge: "The AI billing & workflow brain that recovers revenue and removes clicks."

**1. Win on denial & A/R revenue recovery (the money eCW leaves on the table).**
Denials and aged A/R are where independent practices and billing companies bleed cash, and where eCW is weakest (capture-and-manual-work). PFO's denial reasoner → appeal drafter → risk scoring → self-tuning payer rules is an end-to-end *recovery engine*. The pitch is quantitative and CFO-legible: **"recover more of every denied dollar with fewer billers."** That is a budget that already exists and a pain that is felt monthly.

**2. Win on the unified workflow operating model.**
The 20-lane Kanban source-record board makes the entire practice — front desk, clinical, and billing — visible and accountable in one place. eCW users live in fragmented worklists. PFO's pitch: **"one board runs the whole practice; nothing falls through the cracks."** This is a daily-experience differentiator a practice manager feels in week one.

**3. Win on transparency and trust.**
Provenance badges, an autopilot ledger, STRICT data honesty, and a compliance-evidence rollup turn "trust us" into "verify us." Against an incumbent with a documented certification-fraud settlement, **auditable, explainable automation** is a genuine emotional and procurement differentiator.

**4. Win on modern UX and TCO.**
eCW's reputation is power-with-click-fatigue on dated UI. PFO is workflow-first, fewer clicks, modern web, lean cloud cost, fast onboarding via swap-ready seams. The pitch: **"the same revenue outcomes without the click tax or the legacy bill."**

**5. Win on AI governance as a product, not a feature.**
Per-practice default-OFF flags + reversible, ledgered autopilots let risk-averse practices adopt automation incrementally and prove it before trusting it. This is how you sell AI to skeptical clinicians and compliance officers.

### Target beachhead
Independent and small-group practices, and **third-party medical billing companies**, that are (a) drowning in denials/AR, (b) fatigued by a legacy EHR's clicks and opacity, and (c) willing to run PFO as the **RCM + workflow layer** first — even alongside an existing EHR — before it becomes the full system of record. Billing companies are an especially strong wedge: they feel denial pain acutely, value automation per-FTE, and don't need the clinical breadth on day one.

### What must be true to convert the wedge into a platform
- **Light up one real integration stack** (clearinghouse + eligibility + ERA) to make the RCM engine real revenue, not a demo. This is the highest-leverage roadmap item.
- **Prove it at one multi-provider site at volume** to retire the scale risk.
- **Achieve certification** on the timeline that matches the first segment that demands it.
- Sequence scribe/telehealth/portal-engagement and population health *after* the RCM wedge lands — partner or defer rather than build breadth prematurely.

> **Bottom line:** eClinicalWorks is broader, certified, integrated, and proven — and will stay that way. PracticeForceOne wins not by becoming a smaller eCW, but by being the **modern, transparent, AI-native revenue-recovery and workflow brain** that practices and billing companies bolt on to stop losing money and clicks — then grows into the system of record from a position of trust and demonstrated ROI.

---

## 7. Scorecard Summary

| Domain | Winner | Margin | Note |
|---|---|---|---|
| Scheduling / front office | PFO | Slim | Kanban + eligibility-aware booking offset shallower type library |
| Registration / intake | Tie | — | Comparable; eCW edge only on live eligibility |
| Clinical documentation | eCW | Wide | Scribe, CDS, specialty depth, registries |
| e-Rx / orders / labs | eCW | Wide | All PFO integrations mocked; no EPCS/PDMP |
| Patient engagement / telehealth | eCW | Wide | healow app/TeleVisits/Pay/messaging |
| **Revenue cycle management** | **PFO** | **Slim→Wide once integrations land** | AI recovery engine vs. manual incumbent |
| **AI & automation** | **PFO** | **Wide** | Denial/appeal/risk/copilot + ledger |
| Interoperability | eCW | Wide | Live HL7/FHIR/HIE vs. mocked seams |
| Reporting / pop-health | eCW | Wide | MIPS/HEDIS/registries/report builder |
| Security / compliance | eCW | Moderate | Certification + RBAC-on; PFO leads on transparency |
| Architecture / deployment / TCO | PFO | Moderate | Cloud-native, hermetic CI/CD, lower TCO |
| Administration / config | Tie | — | PFO edge on AI governance |

**Net:** eClinicalWorks wins breadth, certification, integrations, and proven scale **today**. PracticeForceOne wins the **RCM-automation + unified-workflow + transparency** wedge — a defensible, monetizable beachhead that the incumbent structurally under-serves. Closing the Tier-1 integration/certification gaps converts that wedge from "compelling demo" to "displacing the incumbent."

---

*Sources: PFO capabilities are codebase- and wiki-verified (see [PracticeForceOneECWPracticeFusion](<PracticeForceOneECWPracticeFusion.md>), [PracticeForceOneFullCrosswalk](<PracticeForceOneFullCrosswalk.md>), [PracticeForceOnePracticeEHRCapabilities](<PracticeForceOnePracticeEHRCapabilities.md>), [PracticeForceOneArchitectureAssessment](<PracticeForceOneArchitectureAssessment.md>), [PracticeForceOneMR7Table](<PracticeForceOneMR7Table.md>)). eClinicalWorks capabilities reflect publicly documented product information and may vary by edition and contract.*

---

## Review Epilog — 2026-07-24

- This page is the strategic capability comparison (2026-06-26), superseded for screen-level detail by PracticeForceOneECWTable (268 findings, evidence-traced). Use that table for per-screen accuracy.
- PFO live build is now 1943 (gate 251/251 GREEN); MR2–MR7 delivered; MR8/MR9/MR10 active — the MR7-active references in section headers and capability tables below reflect the authoring-time state, not current.
- The strategic verdict (RCM-automation + unified-workflow + transparency vs. eCW breadth/certification) remains accurate; integration gap remains open pending Surescripts/clearinghouse/FHIR live partner connections.
