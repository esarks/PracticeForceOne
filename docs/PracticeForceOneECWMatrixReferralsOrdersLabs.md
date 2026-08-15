---
title: "PracticeForceOneECWMatrixReferralsOrdersLabs"
---

﻿# ECW Screen & Field Inventory — Referrals, Orders & Labs (lifecycle, queues, compendium, results)

Part of the [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>) deep-dive
(founder directive: capture **every field and every feature** seen in eCW vs PFO, and
plan where each lands in PFO). Hierarchy: **domain (this page) → screen (each `###`
entry) → sub-screens/tabs & fields (the Screen & fields bullet)**. Per entry:

- **Screen & fields (eCW)** — the fields, tabs, buttons, and navigation components observed
- **PFO today** — current PracticeForceOne state
- **Gap/Enh** — the finding and proposed change
- **PFO implementation** — where those fields will be implemented (legend on the master page: Extend / New / CF binding / Mock-seam / Server / Chrome / Autopilot / User-preferences / Specialty wave)

Trace any entry to its screenshot files via `review-ledger.tsv` in
`C:\Users\ptm\Downloads\ecw` (grep the screen name). Corpus: 1,778 screens,
2,078 images ledgered, 100% reviewed. Updated 2026-07-11 (inventory + implementation-plan view).

---

**Last reviewed: 2026-07-24** | Live build: 1943 | Gate: 251/251 GREEN | MR2–MR7 DELIVERED · MR8/MR9/MR10 ACTIVE

## Completion Status — as of 2026-07-24 (current live build)

- **Assessment & specification: ✅ COMPLETE.** All 16 findings on this page are fully inventoried (every field, tab, and navigation component + a PFO implementation target).
- **Implementation: 🟢 0 live/done · 🟡 16 working screen (build-slice or demo surface) · ⏸️ 0 deferred · ⬜ 0 not started (of 16).** Sequence follows the 24-theme shortlist in [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>); fleet directive in `AGENTS.md`.

> **Reading the numbers.** 🟢 = the deep every-field finding is substantially delivered. 🟡 = a **live, working screen exists** for this finding — either a real build-slice or one of AgentCF's live configurable screens (current live build) that covers this eCW screen at **demo depth** (deep field-by-field parity still open). The 🟡 demo-surface mapping is AgentECW's first pass from the AgentCF sheet; CF is confirming depth per row. So 🟡 means "you can click it today, not that it's finished."

Legend: 🟢 Live/Done (deep parity) · 🟡 Working screen — build-slice or demo surface (parity pending) · ⏸️ Deferred (post-demo) · ⬜ Not started.

| ID | Screen | Status | Backend |
|---|---|---|---|
| ECW-OR-1 | Manage Orders | 🟡 | `DiagnosticOrdersRoutes` GET/POST/PUT `/api/diagnostic-orders` |
| ECW-OR-2 | Order-to-billing glue (ICD-CPT / ABN) | 🟡 | `DiagnosticOrdersRoutes` (icd_codes/cpt_codes/abn_required) + `/api/order-dx-matrix` |
| ECW-OR-3 | ORDER SETS | 🟡 | `OrderSetsRoutes` GET/POST/PUT/DELETE `/api/order-sets` |
| ECW-RF-1 | Outgoing Referral | 🟡 | `ReferralsRoutes` GET/POST/PUT `/api/referrals` |
| ECW-RF-2 | Referring Provider Lookup directory | 🟡 | `ReferralsRoutes` (specialty/priority/status filters on list) |
| ECW-RF-3 | Referrals work-queue console | 🟡 | `ReferralsRoutes` (status-tab filtering, assigned-to routing) |
| ECW-RF-4 | Deleted Referral Logs | 🟡 | `ReferralManagementRoutes` GET `/api/referrals/deleted`, DELETE `/api/referrals/delete` |
| ECW-RF-5 | eReferral Requests | 🟡 | `ReferralManagementRoutes` GET/POST/PUT `/api/ereferral-requests` |
| ECW-RF-6 | Referral data-integrity guards | 🟡 | `ReferralManagementRoutes` GET `/api/referrals/check-duplicate` |
| ECW-RF-7 | P2P network exchange (mock-seam) | 🟡 | `ReferralsRoutes` (attachment/note bundle fields; P2P transport mocked) |
| ECW-RF-8 | Referral loop-closure compliance | 🟡 | `ReferralsRoutes` (status ladder + auth fields; `/api/referral-details` for outcome fields) |
| ECW-RF-9 | Pre-authorization RULES ENGINE | 🟡 | `ReferralsRoutes` + `AuthorizationsRoutes` (auth_number/visits_authorized + 278 trigger) |
| ECW-RF-10 | Referral auditability + e-auth loop | 🟡 | `ReferralsRoutes` + `ClinicalNotesExtensionsRoutes` `/api/referral-details` change-log fields |
| ECW-LB-1 | Labs UX / results inbox | 🟡 | `ClinicalOrderResultsRoutes` GET/POST/PUT `/api/clinical-order-results` + `/trend` |
| ECW-LB-2 | Labs/DI/Proc work queue | 🟡 | `ClinicalOrderResultsRoutes` GET `/api/clinical-order-results/work-queue-summary` |
| ECW-LB-3 | Lab ordering finishers (specimen/routing) | 🟡 | `DiagnosticOrdersRoutes` (specimen/fasting fields) + `/api/order-aoe` + `/api/order-user-defaults` |

**Rollup: 0 live · 16 working screen · 0 deferred · 0 not started (of 16).**

*Regenerated 2026-07-21 from the unified status across all `MasterSchedule.xlsx` sheets + AgentECW's surface→ECW crosswalk. Documentation-only lane (AgentECW).*

---

### ECW-OR-1 — Manage Orders

- **Screen & fields (eCW):** Manage Orders: unified lab/DI/procedure ordering w/ dx-link, TODAY vs FUTURE orders (standing orders w/ order dates), My Defaults per provider, Lab Hx, CC-results-to, quick transmit (interface) vs print, ABN check, bill-to-physician-account
- **PFO today:** mock orders
- **Gap:** unified order manager + future/standing orders + defaults + result CC routing
- **PFO implementation:** New `orders.html` — unified lab/DI/procedure manager: today/future lanes, per-provider defaults, transmit-vs-print

### ECW-OR-2 — order-to-billing glue

- **Screen & fields (eCW):** order-to-billing glue: ICD-CPT Association popup on order placement (dx checkbox list + CPT auto-suggest) so lab/DI orders arrive billable; ABN (Advance Beneficiary Notice) button for Medicare non-covered
- **PFO today:** —
- **Gap:** dx→CPT association at order time + ABN artifact
- **PFO implementation:** Encounter orders — ICD-CPT association popup at order placement + ABN artifact for Medicare

### ECW-RF-1 — Outgoing Referral

- **Screen & fields (eCW):** Outgoing Referral: full referral lifecycle object — from/to provider+specialty+facility, AUTH code/type, start/end validity, appt + received dates, priority, assigned-to (work queue), unit type + visit count, status (Open/Consult Pending/Addressed), dx+procedure codes, ATTACHMENTS+scan, structured follow-up fields (attempt #1-6, report-received), send electronically, logs
- **PFO today:** authorizations.html adjacent but no referral entity
- **Gap:** referral module (in+out) w/ lifecycle + tracking-to-consult-report
- **PFO implementation:** New `referrals.html` — referral lifecycle object (auth, validity dates, priority, assigned-to, status ladder, attachments)

### ECW-LB-1 — labs UX

- **Screen & fields (eCW):** labs UX: L jellybean queue (unreviewed results count, e.g. 841), lab result lifecycle Open→Reviewed, per-result "don't publish to portal", CUMULATIVE REPORT across dates, specimen/fasting capture, manual result entry grid
- **PFO today:** mock labs
- **Gap:** results inbox/review queue + cumulative view + portal publish control
- **PFO implementation:** Mock-seam — new results inbox/review queue page: lifecycle Open→Reviewed, cumulative report, portal-publish control

### ECW-LB-2 — Labs/DI/Proc work queue

- **Screen & fields (eCW):** Labs/DI/Proc work queue: Outstanding vs To-be-reviewed vs Reviewed vs Future tabs + cancelled/copies, assigned-to routing, in-house/send-out filters, patient result letters
- **PFO today:** eligibility-queue pattern exists, no results queue
- **Gap:** order/result tracking queue
- **PFO implementation:** Results queue — Outstanding/To-review/Reviewed/Future tabs, assigned-to routing, patient result letters

### ECW-OR-3 — ORDER SETS

- **Screen & fields (eCW):** ORDER SETS: named bundles (dx-based) incl meds/labs/DI/education, tied to quality MEASURES, quick order sets
- **PFO today:** —
- **Gap:** order-set bundles
- **PFO implementation:** Order-sets module — named dx-based bundles tied to quality measures (with ECW-CL-73)

### ECW-RF-2 — Referring Provider Lookup directory

- **Screen & fields (eCW):** Referring Provider Lookup directory (extends referral note 27): searchable provider directory w/ Provider Type filter (Referring/Practicing), SPECIALTY filter, DISTANCE-in-miles filter, rich provider cards (address, phone, fax, email, LANGUAGES SPOKEN, favorite star); referral status vocabulary also includes Insurance Auth + Internal Review + sub-status
- **PFO today:** no provider directory search
- **Gap:** referral-target directory w/ specialty/distance/language matching
- **PFO implementation:** Referrals — provider directory search (specialty/distance/language filters, favorite cards)

### ECW-RF-3 — Referrals work-queue console

- **Screen & fields (eCW):** Referrals work-queue console (extends note 27): count-badged status tabs (Open/FAILED/Internal Review/Insurance Auth/Pending/Addressed/All/All-Open-date-range), filter panel (assigned-to, referral from/to, facility from/to, date range, priority stat/urgent/routine, insurance, auth type, STRUCTURED ITEM search, sub-status, Voice-Enabled/SMS-Enabled, Electronic Service Auth 278 flag), NAMED SAVED FILTER SETS (Set default/Apply/delete), row icons for P2P + aging timer, actions Copy/Fax/Print/Dashboard; per-patient referral list adds Incoming/Outgoing/PRE-DETERMINATION tabs + ALLOWED vs USED visit counters + consult-note-received flag + Associate
- **PFO today:** authorizations.html basic list; 278 generator exists w/o referral queue
- **Gap:** referral/auth work-queue w/ status tabs, visit-count burn-down, saved filters, 278 hook
- **PFO implementation:** Referrals — work-queue console: count-badged status tabs, saved filter sets, visit-count burn-down, 278 flag

### ECW-RF-4 — Deleted Referral Logs

- **Screen & fields (eCW):** Deleted Referral Logs: hard-delete audit trail (created date, patient, reason, deleting USERNAME, workstation IP ADDRESS, timestamp) surfaced in-app
- **PFO today:** audit.html generic
- **Enh:** delete-audit views embedded in each work-queue module (who deleted what from where)
- **PFO implementation:** Referrals — delete-audit view embedded in module (user + workstation IP)

### ECW-RF-5 — eReferral Requests

- **Screen & fields (eCW):** eReferral Requests: per-patient referrals dialog carries a separate eReferral Requests grid (electronically received referral requests distinct from staff-entered ones) feeding the incoming queue
- **PFO today:** none
- **Enh (mock-seam):** inbound e-referral request queue (transport mocked)
- **PFO implementation:** Mock-seam — inbound e-referral request queue

### ECW-RF-6 — referral data-integrity guards

- **Screen & fields (eCW):** referral data-integrity guards: duplicate-referral warning (same specialist/specialty/facility for the patient, explicit Duplicate-to-proceed), from-provider change warns it strips visit associations, Assigned-To required
- **PFO today:** no dup/consistency guards on work items
- **Enh:** duplicate-detection prompts on referral/auth/appointment creation
- **PFO implementation:** Referrals — duplicate-referral warning + consistency guards on create

### ECW-RF-7 — P2P network exchange

- **Screen & fields (eCW):** P2P network exchange: P2P Provider Lookup directory (cross-practice eCW network w/ affiliation + accept-patient-insurance filters), referrals sent via P2P can bundle a structured CCR/CCD continuity-of-care document + selected notes/labs/x-rays/docs under a size budget, w/ attachment manifest + Continue confirm
- **PFO today:** none
- **Enh (mock-seam):** referral attachment bundle incl generated CCD (P2P transport mocked)
- **PFO implementation:** Mock-seam — P2P attachment bundle incl. generated CCD manifest

### ECW-RF-8 — referral loop-closure compliance

- **Screen & fields (eCW):** referral loop-closure compliance: Addressed/Non-Compliant sub-status REQUIRES a structured Non-Compliant Reason (admin-managed reason catalog, e.g. "Patient refuses to see"), consult-note receipt tracked per referral (Initial vs Additional Consult Received sub-statuses + attachment paperclip)
- **PFO today:** none
- **Gap:** referral outcome tracking w/ structured non-compliance reasons (quality reporting + care-gap follow-up)
- **PFO implementation:** Referrals — loop-closure outcome tracking w/ structured non-compliance reason catalog

### ECW-RF-9 — pre-authorization RULES ENGINE

- **Screen & fields (eCW):** pre-authorization RULES ENGINE (Referral Groups admin): named rule = set of insurances/insurance-groups x labs/DI/procedures (or code groups) that REQUIRE pre-auth; when a matching order is placed for a patient w/ matching insurance, a referral/pre-auth work item is AUTO-CREATED w/ reason "[order] Pre-Authorization is required"; orders also surface Appropriate Use Criteria (AUC) pending flags inline in Treatment; reopening an Addressed referral requires an ADDENDUM reason (permission-gated)
- **PFO today:** authorizations.html manual only; 278 generator manual
- **Gap:** payer+procedure pre-auth requirement rules auto-spawning auth work items (big RCM win; pairs w/ K-autopilots)
- **PFO implementation:** Server — payerÃ—procedure pre-auth rules auto-spawning auth work items into `authorizations.html` (K-autopilot tie)

### ECW-RF-10 — referral auditability + e-auth loop

- **Screen & fields (eCW):** referral auditability + e-auth loop (extends pre-auth rules note): per-referral CHANGE LOG dialog w/ a log tab per section (Referral Info/Dx/Visit Details/Notes/Structured Data/Attachment/Addendum), each entry user+timestamp+action (UPDATED/PRINTED/REOPENED); electronic auth (278) submission surfaces payer REJECTION CODES inline (e.g. 15 required-data-missing, 43 invalid provider ID) and flips the item to a FAILED queue tab for rework
- **PFO today:** edi-queue shows transport status only
- **Gap:** per-work-item field audit log + 278 rejection-code surfacing w/ failed-rework queue
- **PFO implementation:** Referrals — per-item field audit log + 278 rejection-code surfacing w/ failed-rework tab (edi-queue tie)

### ECW-LB-3 — lab ordering finishers

- **Screen & fields (eCW):** lab ordering finishers (mock-seam): Manage-Orders lab tab adds CC RESULTS TO (copy results to another provider), BILL TO PHYSICIAN'S ACCOUNT toggle, ABN button (Medicare advance beneficiary notice) and PRINT PATHOLOGY REQUISITION; the lab COMMON SEND collects SPECIMEN SOURCE / VOLUME / UNIT / FASTING, COLLECTION DATE+TIME, clinical info + comment, ordering facility, PRINT LABEL, and per-row eTRANSMIT vs print mode w/ configured-for/send-to lab routing
- **PFO today:** lab order = flat row
- **Gap:** specimen + routing capture
- **PFO implementation:** Mock-seam labs — specimen source/volume/fasting capture + per-row transmit routing + label print

---

## Review Epilog — 2026-07-24

- Live build updated to 1943; gate 251/251 GREEN; MR2–MR7 delivered, MR8/MR9/MR10 active.
- No 🟢 live rows in this domain; all 16 remain at 🟡 working-screen status backed by committed route modules.
- Encoding (mojibake) in section headings and inline arrows corrected during this review pass.
- No individual parity rows updated; status regeneration is AgentECW's lane on MasterSchedule sync.


