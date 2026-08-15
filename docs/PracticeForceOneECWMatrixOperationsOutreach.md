---
title: "PracticeForceOneECWMatrixOperationsOutreach"
---

# ECW Screen & Field Inventory — Operations, Outreach, Analytics & AI (work queues, recall, messaging, jobs)

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

- **Assessment & specification: ✅ COMPLETE.** All 22 findings on this page are fully inventoried (every field, tab, and navigation component + a PFO implementation target).
- **Implementation: 🟢 1 live/done · 🟡 21 working screen (build-slice or demo surface) · ⏸️ 0 deferred · ⬜ 0 not started (of 22).** Sequence follows the 24-theme shortlist in [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>); fleet directive in `AGENTS.md`.

> **Reading the numbers.** 🟢 = the deep every-field finding is substantially delivered. 🟡 = a **live, working screen exists** for this finding — either a real build-slice or one of AgentCF's live configurable screens (current live build) that covers this eCW screen at **demo depth** (deep field-by-field parity still open). The 🟡 demo-surface mapping is AgentECW's first pass from the AgentCF sheet; CF is confirming depth per row. So 🟡 means "you can click it today, not that it's finished."

Legend: 🟢 Live/Done (deep parity) · 🟡 Working screen — build-slice or demo surface (parity pending) · ⏸️ Deferred (post-demo) · ⬜ Not started.

| ID | Screen | Status |
|---|---|---|
| ECW-AN-1 | REGISTRY | 🟡 Done |
| ECW-EN-1 | patient communication prefs | 🟡 Done |
| ECW-EN-2 | Patient Recall | 🟡 Done |
| ECW-EN-3 | Messenger | 🟡 Done |
| ECW-AN-2 | MAQ/quality-measure dashboard | 🟡 Done |
| ECW-AU-1 | AUTOSEND Progress Notes | 🟡 Backend committed — AutosendRulesRoutes `/api/autosend-rules` + `/api/autosend-queue` (rides next deploy) |
| ECW-AI-1 | embedded AI assistants surfaced in the chart chrome | 🟡 Done |
| ECW-OPS-1 | PM Scheduled Tasks Status report | 🟡 Done |
| ECW-AN-3 | Referral By Provider report | 🟡 Done |
| ECW-OUT-1 | PATIENT RECALL registry | 🟢 Live (first slice) - 1796 |
| ECW-OUT-2 | WELL-CHILD VISIT tracker on the Hub Appointments card | 🟡 Live 1865 — GET `/api/patient-care-gaps` (last WCV/AV dates + due-badge data) |
| ECW-AI-2 | healow INSIGHTS panel on the Patient Hub | 🟡 Done |
| ECW-OPS-2 | PROVIDER PRODUCTIVITY REPORT | 🟡 Done |
| ECW-OPS-3 | ADVISORY | 🟡 Done |
| ECW-AI-3 | eCliniSense | 🟡 Done |
| ECW-OPS-4 | IMMUNIZATION REGISTRY INTERFACE DASHBOARD | 🟡 Done |
| ECW-OPS-5 | TELEPHONE ENCOUNTERS work queue | 🟡 Done |
| ECW-OPS-6 | TELEPHONE ENCOUNTER editor | 🟡 Done |
| ECW-OPS-7 | telephone-encounter TEMPLATES + logs | 🟡 Done |
| ECW-OUT-3 | WEB ENCOUNTERS + CALL-ME-NOW voice messaging | 🟡 Backend committed — WebEncounterOutreachRoutes `/api/web-encounters` + `/api/call-back-requests` (rides next deploy) |
| ECW-OPS-8 | tel/web-encounter integrity + OUT-OF-OFFICE delegation | 🟡 Done |
| ECW-OPS-9 | Patient Hub structured-data rail carries program-enrollment flags p | 🟡 Done |

**Rollup: 1 live · 21 working screen · 0 deferred · 0 not started (of 22).**

*Regenerated 2026-07-21 from the unified status across all `MasterSchedule.xlsx` sheets + AgentECW's surface→ECW crosswalk. Documentation-only lane (AgentECW).*

---

### ECW-AN-1 — REGISTRY

- **Screen & fields (eCW):** REGISTRY: population query engine over demographics/vitals/labs/ICD/CPT/Rx/complaints/history w/ saved queries, subset + NOT ops, feeds recall/reminder campaigns + registry reports
- **PFO today:** reports.html static
- **Gap:** population registry query + recall campaign engine
- **PFO implementation:** New `registry.html` — population query engine (demographics/vitals/labs/ICD/CPT/Rx) w/ saved queries feeding recall

### ECW-EN-1 — patient communication prefs

- **Screen & fields (eCW):** patient communication prefs: per-patient channels (voice/SMS/letter/email), preferred language + call-time, per-reminder-type opt-in (appt/lab/health-maintenance/rx), practice-wide opt-out
- **PFO today:** —
- **Gap:** communication-preferences model
- **PFO implementation:** `patients.html` — communication-preferences model (channels, language, per-reminder-type opt-in)

### ECW-EN-2 — Patient Recall

- **Screen & fields (eCW):** Patient Recall: protocol-based recall lists (due/overdue tests/immunizations by dx/rx/age), batch letter generation + schedule-from-list
- **PFO today:** —
- **Gap:** recall/outreach worklist (pairs w/ Registry)
- **PFO implementation:** New `recall.html` — protocol-based recall worklists + batch letters + schedule-from-list (pairs ECW-AN-1)

### ECW-EN-3 — Messenger

- **Screen & fields (eCW):** Messenger: template-based VOICE+SMS campaigns (EN/ES, live vs machine variants), appt confirmation + health-maintenance types, blast eMsg from any patient list, call+record
- **PFO today:** —
- **Gap (mock-seam):** outbound messaging campaign surface
- **PFO implementation:** Mock-seam — outbound messaging campaigns (voice/SMS templates, blast from patient lists)

### ECW-AN-2 — MAQ/quality-measure dashboard

- **Screen & fields (eCW):** MAQ/quality-measure dashboard: per-measure numerator/denominator with PERIOD-vs-PERIOD comparison (monthly vs 90-day windows)
- **PFO today:** dashboard.html KPIs only
- **Enh:** quality/UDS-style measure dashboard w/ period compare
- **PFO implementation:** Extend `dashboard.html`/`reports.html` — quality-measure dashboard w/ period-vs-period compare

### ECW-AU-1 — AUTOSEND Progress Notes

- **Screen & fields (eCW):** AUTOSEND Progress Notes: rule engine that auto-sends LOCKED notes to referring/circle-of-care providers on schedule (visit-type/provider/facility criteria, modality fax, lookback window, resend restriction, failure->message notification, queue w/ reprocess + logs)
- **PFO today:** none
- **Gap:** note-distribution automation (natural PFO autopilot candidate)
- **PFO implementation:** Autopilot — locked-note auto-distribution rules to referring/care-team (fax mock; K-series pattern)

### ECW-AI-1 — embedded AI assistants surfaced in the chart chrome

- **Screen & fields (eCW):** embedded AI assistants surfaced in the chart chrome: ASK EVA button on every clinical window (virtual assistant), PRISMA icon in left rail (AI record search/summarization), Scribe tab on note (ambient dictation)
- **PFO today:** practice-ai-settings/ai-features admin only
- **Gap:** in-workflow AI entry points (PFO has the flag plumbing; needs chart-level surfaces)
- **PFO implementation:** Chart chrome — AI entry points (assistant button, record search, scribe tab) wired to `practice-ai-settings.html` flags

### ECW-OPS-1 — PM Scheduled Tasks Status report

- **Screen & fields (eCW):** PM Scheduled Tasks Status report: date-range job-run history for background automation (Auto Claim Creation, Electronic Patient Statements, Automatic ERA Download, Insurance Eligibility Scheduled Jobs, Claims-report download, Electronic Claim Batch Creation) w/ begin/end times, Completed-Successfully status, per-run notes; plus server-side ErrorLog day viewer
- **PFO today:** autopilots K1-K3 + edi-queue but no unified job-status console
- **Gap:** scheduled-jobs status surface (job name, last run, duration, status, notes) covering autopilot/EDI/eligibility/statement jobs
- **PFO implementation:** New jobs-status console — job name/last-run/duration/status covering autopilots, EDI, eligibility, statements

### ECW-AN-3 — Referral By Provider report

- **Screen & fields (eCW):** Referral By Provider report: date-range report of referred-in business grouped by REFERRING PROVIDER w/ patient-type filter (new vs established) rendering a PDF listing (claim no, service date, patient, visit count, CHARGE AMOUNT) — i.e., revenue attributable to each referral source
- **PFO today:** reports.html has no referral-source analytics
- **Gap:** referral-source revenue report (marketing/relationship value)
- **PFO implementation:** Extend `reports.html` — referral-source revenue report (referred-in business by provider)

### ECW-OUT-1 — PATIENT RECALL registry

- **Screen & fields (eCW):** PATIENT RECALL registry (R jellybean: Patient Recall / Registry / Registry Reports): population-outreach console w/ cohort tabs — Appointment Date range, Patient, PROTOCOL (due-by w/ last-done/due-date/status), All Labs/DI/Imm ALERTS (+ report list), Dx alerts (search incl "Patients Assessments" and "based on TEST NOT ORDERED"), Rx alerts, Test Follow-up — plus cohort filters (OverDue, AGE range, sex, rendering/alert provider, patient facility, CONTACT-MODE segmentation: web-enabled / text-only / voice-only / letter-only); batch actions per cohort: RUN LETTER (mail-merge recall letters), PRINT LABELS, Pt Hub, New Appt, Export, Status, Alerts, COMMUNICATION LOGS per patient
- **PFO today:** nothing (reports.html is analytics only)
- **Gap:** recall/outreach registry — top-tier Major Release item (revenue + quality; pairs w/ K-autopilots + letter templates)
- **PFO implementation:** New `recall.html` console — cohort tabs (protocol/labs/dx/Rx alerts), contact-mode segmentation, batch letter/label/appt actions — top shortlist item

### ECW-OUT-2 — WELL-CHILD VISIT tracker on the Hub Appointments card

- **Screen & fields (eCW):** WELL-CHILD VISIT tracker on the Hub Appointments card: Last WCV date w/ DUE SOON (yellow) / PAST DUE (red, w/ days-ago) badge; clicking opens a Well-Child Visits popup ("patient is due/past due — review upcoming appointments") listing upcoming appointments (date, visit type, provider) w/ CREATE APPOINTMENT and CREATE ACTION buttons; card also shows Last/Next Appt, BUMPED APPT count, Case Manager Hx, My External Report
- **PFO today:** no preventive-visit due tracking
- **Gap:** pediatric WCV due/past-due surfacing at the point of contact (feeds the recall registry item)
- **PFO implementation:** `patient-chart.html` hub — WCV/AV due badges w/ create-appointment popup (recall tie)

### ECW-AI-2 — healow INSIGHTS panel on the Patient Hub

- **Screen & fields (eCW):** healow INSIGHTS panel on the Patient Hub (risk-adjustment/quality sidebar): collapsible sections — Global Alerts, WELL VISITS (WCV/AV due status), Advance Directive, Problem List (w/ verified-state warning + SNOMED flag), POTENTIAL CONDITION(S) FOR EVALUATION (clinical-inference suggestions w/ Logs), Hospice eAttestation, and HIERARCHICAL CONDITION CATEGORY (HCC) worklist split PENDING vs HISTORICAL w/ per-condition states INSUFFICIENT / UN-REVIEWED / REVIEWED and comments — value-based-care coding review right on the hub; hub also carries CCM/PCM enrollment section
- **PFO today:** no risk-adjustment surfaces
- **Gap:** HCC/potential-condition review worklist (VBC revenue; pairs w/ PFO AI-flags plumbing)
- **PFO implementation:** New risk-adjustment worklist — HCC pending/historical review states + potential-conditions (AI-flags plumbing)

### ECW-OPS-2 — PROVIDER PRODUCTIVITY REPORT

- **Screen & fields (eCW):** PROVIDER PRODUCTIVITY REPORT: per-provider x facility x date-range metrics — STD WORKING HOURS (from the availability engine) vs WORKED HOURS (sum of checked-in/arrived appt durations), %HOURS WORKED, APPTS BOOKED vs SEEN, UNIQUE PATIENTS, CANCELLED, NO-SHOW % ((booked-seen)/booked), PROD RATE (seen/worked-hours), and appts under/over a user-defined N minutes; facility-based variant
- **PFO today:** reports.html has no provider-productivity view
- **Gap:** provider utilization/no-show analytics (ties working-hours engine to actuals)
- **PFO implementation:** Extend `reports.html` — provider productivity (std vs worked hours, no-show %, prod rate)

### ECW-OPS-3 — ADVISORY

- **Screen & fields (eCW):** ADVISORY (data-hygiene) REPORTS in the Report Console: Allergy Report, DELETED PATIENTS WITH ENCOUNTER DATA, DUPLICATE ACCOUNT NUMBER RECONCILIATION, EBO reports, Encounters & Future Orders, ERRONEOUS CONTACT CLEANUP (shows affected-record count, then runs as a SCHEDULED JOB w/ an "outside working hours" performance warning), Incorrectly-Saved Specialty Forms
- **PFO today:** no data-hygiene report set
- **Gap:** integrity/cleanup report suite w/ scheduled remediation jobs
- **PFO implementation:** New advisory report suite — duplicate accounts, deleted-patients-with-data, contact cleanup w/ scheduled remediation

### ECW-AI-3 — eCliniSense

- **Screen & fields (eCW):** eCliniSense (order-suggestion engine, sibling of Order Sets): per-assessment button opens dx-matched SUGGESTED ORDER BUNDLES mined from the practice's own prior treatment patterns (medications w/ sigs, labs w/ lab company, plan NOTES) filterable patient-specific/by-group/by-provider, w/ Select All + ORDER SELECTED one-click (note: skips interaction warnings); Treatment also offers RECENT ORDERS repeat-from-last-office-visit; CDSS renders "Recommended Wellness and Prevention Guidelines" into the note w/ per-alert STATUS (COMPLIANT w/ last-done/next-due/action-taken incl reported-historical-data, or SUPPRESSED w/ suppressing user+timestamp+reason); IV/unlisted drugs flag "NDC CODE IS MISSING" w/ an NDC List trade-name->NDC mapping picker for claims
- **PFO today:** AI flags exist but no order suggestions
- **Gap:** practice-pattern order suggestions + preventive-alert compliance states + NDC mapping
- **PFO implementation:** AI — practice-pattern order suggestions per assessment + preventive-alert compliance states + NDC mapping picker

### ECW-OPS-4 — IMMUNIZATION REGISTRY INTERFACE DASHBOARD

- **Screen & fields (eCW):** IMMUNIZATION REGISTRY INTERFACE DASHBOARD (mock-seam): dedicated IMMUNIZATIONS tab in the Interface Dashboard — OUTBOUND queue by interface name + date range w/ per-record status (SENT / PENDING / NOT QUALIFIED / IN PROCESS), successfully-sent vs failed-to-send filters, RETRANSMIT for failures, run-report w/ Export/Print; MAPPINGS = per-facility FACILITY CODE + INSURANCE CODES for the registry; BIDIRECTIONAL query — Public Health panel runs ON DEMAND QUERY against the state hub (NIST IMMtechUP), VERIFY PATIENT IDENTITY w/ yellow mismatch warning, and returns external history flagged TO BE RECONCILED w/ per-row accept into the chart
- **PFO today:** none
- **Gap (mock-seam):** registry submit queue + query/reconcile loop
- **PFO implementation:** Mock-seam — immunization registry interface dashboard (outbound queue, retransmit, bidirectional query/reconcile)

### ECW-OPS-5 — TELEPHONE ENCOUNTERS work queue

- **Screen & fields (eCW):** TELEPHONE ENCOUNTERS work queue: dedicated queue w/ tabs OPEN / ADDRESSED / ALL / ALL OPEN (ALL DATES), filters by provider / ASSIGNED TO / facility + "view delegated encounters only"; rows = T/W icon, LOCK, HIGH-PRIORITY (!), REF #, date, patient, provider, REASON, phone, assigned-to, facility; actions = NEW, DELETE (blocked by CONCURRENCY LOCK if another user has it open), REASSIGN TO (guarded — target must have the security setting + active quick-launch queue), Messenger
- **PFO today:** no telephone-encounter object
- **Gap:** phone-message work queue (pairs w/ M9 fax/task queues)
- **PFO implementation:** `telephone-encounters.html` — work queue (Open/Addressed tabs, delegated filter, reassign guards)

### ECW-OPS-6 — TELEPHONE ENCOUNTER editor

- **Screen & fields (eCW):** TELEPHONE ENCOUNTER editor (field level): header = ANSWERED BY, CALLER, coded REASON, HIGH PRIORITY, date/time, ASSIGNED TO (w/ quick-add), PROVIDER* (required — guard), FACILITY*, PHARMACY, STATUS ladder (Open / Addressed / Addressed-and-Docs-Reviewed / ADDRESS AND CLOSE) + PERFORM ELIGIBILITY CHECK toggle; body tabs = MESSAGES (+ Complaints picker + dictation) / Rx / LABS-DI HX / NOTES / ADDENDUM / LOG HISTORY / VIRTUAL VISIT; ACTION TAKEN log appends stamped action lines ("2nd letter sent"); footer = Print Script, SEND RX, Print Report, convert to PROGRESS NOTE, attach Document, SAVE AS TEMPLATE / APPLY TEMPLATE; Prev/Next(A) navigation walks the queue
- **PFO today:** none
- **Gap:** phone-encounter documentation object (bridges scheduling+clinical+rx)
- **PFO implementation:** `telephone-encounters.html` — editor field parity (answered-by/caller/reason/assigned-to, tabs, action-taken log, convert-to-note)

### ECW-OPS-7 — telephone-encounter TEMPLATES + logs

- **Screen & fields (eCW):** telephone-encounter TEMPLATES + logs (enriches tel-editor note): SAVE AS TEMPLATE captures caller/reason/high-priority/assigned-to/provider/facility/message as a named TRIAGE TEMPLATE, APPLY TEMPLATE menu w/ per-template delete, applied-template banner + UPDATE TEMPLATE writes edits back; ACTION TAKEN auto-appends order events ("DI order CT Scan placed"); per-encounter LOG HISTORY (user/date/action/assigned-to, printable per ref#); orders from the Labs/DI tab warn they attach to the chart UNLINKED unless placed through the VIRTUAL VISIT tab
- **PFO today:** none
- **Gap:** triage templates + linked-order awareness
- **PFO implementation:** Telephone encounters — triage templates (save/apply/update) + per-encounter log history

### ECW-OUT-3 — WEB ENCOUNTERS + CALL-ME-NOW voice messaging

- **Screen & fields (eCW):** WEB ENCOUNTERS + CALL-ME-NOW voice messaging (mock-seam): WEB ENCOUNTER = portal-message twin of the telephone encounter (same editor/queue, patient searched at creation); outbound Send-Message shows PATIENT PREFERENCES ON MODALITY chips (portal/voice/text) before choosing channel; CALL ME NOW = the system phones the STAFF member, they record a voice message w/ SECURE MESSAGE flag, and the recording is delivered to the patient
- **PFO today:** none
- **Gap:** portal-message queue + recorded voice outreach
- **PFO implementation:** Portal-message (web encounter) queue + recorded voice outreach (mock transport)

### ECW-OPS-8 — tel/web-encounter integrity + OUT-OF-OFFICE delegation

- **Screen & fields (eCW):** tel/web-encounter integrity + OUT-OF-OFFICE delegation: encounters w/ associated LABS/DI or MEDICATIONS cannot be deleted (guard dialogs); deleting one warns dx already pushed to Problem List / Previous-Dx will NOT auto-remove; SAVED FILTER DEFAULTS = named queue-filter sets (Set/Apply/delete + update banner); OUT OF OFFICE delegation — a provider marks OOO w/ a date range and selects a covering user, who gets an ACTION-REQUIRED notification to work the absent provider's telephone/web encounters (the queue's "delegated encounters only" filter)
- **PFO today:** none
- **Gap:** coverage delegation for work queues
- **PFO implementation:** Work queues — deletion integrity guards + out-of-office coverage delegation w/ action-required notify

### ECW-OPS-9 — Patient Hub structured-data rail carries program-enrollment flags p...

- **Screen & fields (eCW):** Patient Hub structured-data rail carries program-enrollment flags per patient: Essen360/HIE panel, HH Care Coordinator, ACO Patient flag, RPM (remote patient monitoring): Enrolled, CCM Consent Date + CCM Written Consent Y/N; header line shows Messenger Enabled, Web Enabled, healow Tracker Data flags
- **PFO today:** no care-program enrollment flags on the patient
- **Gap:** patient program-participation block (ACO/CCM/RPM/portal/messenger consent+enrollment states) surfaced on hub + filterable
- **PFO implementation:** `patient-chart.html` — program-participation block (ACO/CCM/RPM/portal/messenger enrollment + consents)

---

## Review Epilog — 2026-07-24

- Live build updated to 1943; gate 251/251 GREEN; MR2–MR7 delivered, MR8/MR9/MR10 active.
- ECW-OUT-1 (patient recall registry) confirmed 🟢 live since build 1796; ECW-OUT-2 (WCV tracker) live via GET /api/patient-care-gaps (build 1865).
- ECW-AU-1 (AutosendRulesRoutes) and ECW-OUT-3 (WebEncounterOutreachRoutes) backends committed; CF UI binding pending.
- No individual parity rows updated; status regeneration is AgentECW's lane on MasterSchedule sync.

