---
title: "PracticeForceOneECWMatrixFrontOffice"
---

# ECW Screen & Field Inventory — Front Office (patient record, hub, check-in, lookup)

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
- **Implementation: 🟢 0 live/done · 🟡 22 working screen (build-slice or demo surface) · ⏸️ 0 deferred · ⬜ 0 not started (of 22).** Sequence follows the 24-theme shortlist in [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>); fleet directive in `AGENTS.md`.

> **Reading the numbers.** 🟢 = the deep every-field finding is substantially delivered. 🟡 = a **live, working screen exists** for this finding — either a real build-slice or one of AgentCF's live configurable screens (current live build) that covers this eCW screen at **demo depth** (deep field-by-field parity still open). The 🟡 demo-surface mapping is AgentECW's first pass from the AgentCF sheet; CF is confirming depth per row. So 🟡 means "you can click it today, not that it's finished."

Legend: 🟢 Live/Done (deep parity) · 🟡 Working screen — build-slice or demo surface (parity pending) · ⏸️ Deferred (post-demo) · ⬜ Not started.

| ID | Screen | Status |
|---|---|---|
| ECW-FO-1 | Patient Hub | 🟡 Done |
| ECW-FO-2 | Patient Lookup | 🟡 Done |
| ECW-FO-3 | patient demographics depth | 🟡 Done |
| ECW-FO-4 | patient record extras | 🟡 Done |
| ECW-FO-5 | portal demographics-update RECONCILIATION | 🟡 Done |
| ECW-FO-6 | appointment right panel | 🟡 Backend LIVE 1826 (MR9) - /api/patient-readiness registration-read |
| ECW-FO-7 | check-in Alerts popup groups FIVE alert categories in one dialog | 🟡 Done |
| ECW-FO-8 | in-office PAGING from the appointment | 🟡 Done |
| ECW-FO-9 | S-jellybean dropdown | 🟡 Done |
| ECW-FO-10 | Tracking Board detail | 🟡 Backend LIVE 1826 (MR9) - /api/tracking-board stages + timers + ro |
| ECW-FO-11 | patient Activities timeline | 🟡 Done |
| ECW-FO-12 | appointment Document Verification panel | 🟡 Done |
| ECW-FO-13 | Office Visits day list | 🟡 Backend LIVE 1826 (MR9) - /api/office-visits day list + stage/time |
| ECW-FO-14 | FAMILY HUB | 🟡 Done |
| ECW-FO-15 | LOOKUP ENCOUNTERS cohort console | 🟡 Backend LIVE 1826 (MR9) - /api/encounter-cohort provider/date/stat |
| ECW-FO-16 | Patient Information FULL screen | 🟡 Done |
| ECW-FO-17 | demographics niceties | 🟡 In Progress - multi-value race/ethnicity/language committed (393a6 |
| ECW-FO-18 | ADDRESS MANAGER | 🟡 Done |
| ECW-FO-19 | address INTERNATIONALIZATION + county derivation | 🟡 Done |
| ECW-FO-20 | S.O./G.I. structured capture | 🟡 Done |
| ECW-FO-21 | CIRCLE OF CARE + demographics utilities | 🟡 Done |
| ECW-FO-22 | ADDITIONAL INFORMATION screen | 🟡 In Progress - Additional Information page-2 committed (393a6a806); |

**Rollup: 0 live · 22 working screen · 0 deferred · 0 not started (of 22).**

*Regenerated 2026-07-21 from the unified status across all `MasterSchedule.xlsx` sheets + AgentECW's surface→ECW crosswalk. Documentation-only lane (AgentECW).*

---

### ECW-FO-1 — Patient Hub

- **Screen & fields (eCW):** Patient Hub: single hub w/ balances (patient vs account vs guarantor), collection status, last/next/BUMPED appts, per-artifact COUNTS grid (labs/DI/referrals/tel-enc/web-enc/docs/P2P/actions), advance-directive + web-enabled + messenger flags, 30+ one-click actions (letters, flowsheets, consult notes, account inquiry, billing/fax/letter logs, problem list, medical record, eMsg)
- **PFO today:** patient-chart.html + dashboard quick-view
- **Gap:** hub w/ counts + action launcher + balance surface
- **PFO implementation:** Extend `patient-chart.html` — hub: per-artifact counts grid, 30-action launcher, balance strip, flags

### ECW-FO-2 — Patient Lookup

- **Screen & fields (eCW):** Patient Lookup: search keys incl phone/account/prev-name, ALL-FACILITIES toggle, RTS (return-to-sender) mail flag, "New (Copy)" family-copy demographics
- **PFO today:** patients.html search
- **Gap:** multi-key lookup + family copy + RTS flag
- **PFO implementation:** Extend `patients.html` — multi-key lookup (phone/account/prev-name), all-facilities toggle, family-copy, RTS flag

### ECW-FO-3 — patient demographics depth

- **Screen & fields (eCW):** patient demographics depth: race/ethnicity/language + TRANSLATOR flag, VFC eligibility, immunization-registry consent, birth order, deceased flag, statement suppression + finance-charge flags, default facility/lab/DI per patient, external-system MRN, photo capture/scan, registered-on audit
- **PFO today:** patients.html basic
- **Gap:** demographic completeness (esp. race/ethnicity/language for reporting + statement/finance flags)
- **PFO implementation:** Extend `patients.html` — demographic completeness wave 1 (race/ethnicity/language, VFC, statement/finance flags)

### ECW-FO-4 — patient record extras

- **Screen & fields (eCW):** patient record extras: responsible-party (guarantor) + emergency contact, patient ALERT (popup on open), release-of-information + Rx-history-consent flags w/ scanned signature, advance directive status, per-patient fee schedule / self-pay
- **PFO today:** patients.html
- **Gap:** guarantor/emergency contact + consent flags + patient alert popup
- **PFO implementation:** Extend `patients.html` — guarantor/emergency contact, consent flags w/ scan, patient alert popup, per-patient fee schedule

### ECW-FO-5 — portal demographics-update RECONCILIATION

- **Screen & fields (eCW):** portal demographics-update RECONCILIATION: patient edits arrive as a Web Encounter; staff see side-by-side Portal Update vs Current Demographics with PER-FIELD accept checkboxes -> Accept Changes writes the chart
- **PFO today:** intake writes direct / no review
- **Gap:** field-level portal-edit review+merge queue
- **PFO implementation:** New review queue — portal demographic edits side-by-side w/ per-field accept (worklist pattern)

### ECW-FO-6 — appointment right panel

- **Screen & fields (eCW):** appointment right panel (2024): REGISTRATION RULES engine surfacing per-visit requirements, live Charges & Co-pay panel (total/allowed/co-pay/patient portion/balance), patient account summary (guarantor/account/insurance/unposted/credits), Rx eligibility check, healow SIGN DOCUMENT, Demographics-Mandatory-Missing flag
- **PFO today:** kanban/calendar cards
- **Gap:** appointment-side financial+readiness panel
- **PFO implementation:** Extend kanban/calendar right panel — registration-rules readiness, live charges/copay, account summary

### ECW-FO-7 — check-in Alerts popup groups FIVE alert categories in one dialog

- **Screen & fields (eCW):** check-in Alerts popup groups FIVE alert categories in one dialog: Global Alerts (named+notes), Billing Alerts, Insurance Alerts, MU Alerts (e.g. missing email for quality objective), Payment Plan presence (extends patient-alert note 43)
- **PFO today:** no alert popup
- **Gap:** categorized patient-alert popup at check-in
- **PFO implementation:** Check-in — categorized five-part alert popup (needs ECW-AD-22 alert library)

### ECW-FO-8 — in-office PAGING from the appointment

- **Screen & fields (eCW):** in-office PAGING from the appointment: Schedule Page dialog w/ Patient Paging vs Provider Paging tabs, pager ID pick, first-page delay (min), free-text message, Page Now
- **PFO today:** none
- **Enh (low):** notify hook at check-in (modern analog = SMS "we're ready" ping); mock-seam
- **PFO implementation:** Mock-seam (low) — "we're ready" SMS ping at check-in (modern paging analog)

### ECW-FO-9 — S-jellybean dropdown

- **Screen & fields (eCW):** S-jellybean dropdown: Review Progress Notes (w/ pending count), Office Visits list, RESOURCE SCHEDULE view, healow Appointments, AFTERCARE queue, TRACKING BOARD (rooming/flow board)
- **PFO today:** kanban.html covers flow-board; no resource schedule or aftercare queue
- **Enh:** resource-schedule view + aftercare follow-up queue
- **PFO implementation:** Chrome — staff work-queue dropdown: review-notes count, resource schedule, aftercare queue

### ECW-FO-10 — Tracking Board detail

- **Screen & fields (eCW):** Tracking Board detail (the flow board behind the S jellybean): four count-tabbed views — Waiting Room (arrival time, reason, TIME IN CLINIC, EST WAIT TIME), My Patients (VITALS-flag column e.g. red BMI, TIME IN STATUS, editable ROOM number, per-row alert icons, "Unlocked Only" note-state filter), All Active List, Discharge List (discharged-by + per-row SEND); guard popup on double-discharge; per-row actions Billing Data/eCliniForms/Hub/Lock Progress Note
- **PFO today:** kanban.html day board
- **Gap:** wait-time + time-in-status timers, room assignment, vitals-flag surfacing, discharge queue on the kanban board
- **PFO implementation:** Extend `kanban.html` — wait-time/time-in-status timers, room assignment, vitals flags, discharge queue + guard

### ECW-FO-11 — patient Activities timeline

- **Screen & fields (eCW):** patient Activities timeline: per-patient communications log w/ Activities/Actions/Notes tabs, typed entries (Notes, Actions, CHAT, AUDIO CALL w/ initiator/recipient/start/end/duration, VIDEO CALL, Televisit, Secure Text, eCheckin) each stamped w/ the screen the action was taken from, date-range + type filter, Quick Action launcher, Add Note
- **PFO today:** no per-patient activity/communication timeline
- **Gap:** patient interaction timeline (calls/messages/check-ins) w/ typed filter — pairs w/ audit events already captured server-side
- **PFO implementation:** New patient activities timeline on `patient-chart.html` — typed communications log (audit-backed)

### ECW-FO-12 — appointment Document Verification panel

- **Screen & fields (eCW):** appointment Document Verification panel (extends note 73): appointment right panel lists required/tracked documents (e.g. case-manager docs) w/ COLOR-CODED expiry dates (red expired / amber near) + one-click remove, driven by document expiration metadata
- **PFO today:** none
- **Gap:** expiring-document surfacing at scheduling touchpoints
- **PFO implementation:** Calendar/kanban appointment panel — expiring-document surfacing w/ color-coded dates

### ECW-FO-13 — Office Visits day list

- **Screen & fields (eCW):** Office Visits day list (field detail): header filters Provider (searchable + favorite star) / Facility / Appt Time (All Day+slots) / View / Sort-by, with Providers-Resources-All pivot tabs and date pager; action band = Check In/Out, Billing Data, View Orders, eCliniForms, Messenger, Hub, View Progress Notes, Lock Progress Note, Copy, Global Alert, refresh; row columns = note-lock icon, VISIT TYPE, APPT TIME, PATIENT NAME, P/R, REASON (truncated w/ "..." ellipsis opening an Appointment Reason popup w/ patient banner: name/DOB/age-sex/acct no), SEX, AGE, VISIT STATUS, ARR TIME, DURATION, ROOM, STATUS, NOTES STS; on-calendar APPOINTMENT-LIMIT enforcement shows a live "n/m + visit type" tooltip on the slot and booking past the cap raises a Visit-Limit-Exceeded YES/NO soft override
- **PFO today:** kanban day board + calendar; no consolidated visit-list view w/ these columns/actions
- **Gap:** office-visits list view (the front-desk workhorse screen)
- **PFO implementation:** New office-visits day-list view — front-desk workhorse (columns/actions per field map; kanban sibling)

### ECW-FO-14 — FAMILY HUB

- **Screen & fields (eCW):** FAMILY HUB: per-patient family-contacts grid (Name, Relation, Family Y/N, Pref Phone, Work Phone, GUARDIAN flag, HIPAA flag, User Type, Last Updated, Info drill-in) + IMPORT FAMILY CONTACTS action; reachable from the appointment header dropdown (extends family-copy + copy-for-family notes)
- **PFO today:** no family linkage model
- **Gap:** family/household entity linking guardians+HIPAA contacts across charts
- **PFO implementation:** `patients.html` — family hub: household contacts grid w/ guardian/HIPAA flags + import

### ECW-FO-15 — LOOKUP ENCOUNTERS cohort console

- **Screen & fields (eCW):** LOOKUP ENCOUNTERS cohort console: cross-patient encounter search by provider, service-date range, place of service, DOB range, visit status/types, DIAGNOSIS (ICD), PROCEDURE, RX, sort-by + "show unique patient"; result rows drive batch actions — Copy, Patient Hub, New Appt, Alerts, LETTER (mail-merge), SEND MESSAGE, BLAST eMSG
- **PFO today:** encounters list is per-patient only
- **Gap:** cohort query + outreach actions (the ad-hoc sibling of the recall registry)
- **PFO implementation:** New cohort console — cross-patient encounter query (dx/CPT/Rx filters) w/ batch outreach actions

### ECW-FO-16 — Patient Information FULL screen

- **Screen & fields (eCW):** Patient Information FULL screen (field map, extends demographics-depth note 35): left = account no + prefix/suffix, last/first/MI, PREVIOUS + PREFERRED name, address 1/2 + VALIDATE + ADDRESS MANAGER + COUNTY lookup, home/cell/work+ext phones w/ SMS icon, email w/ NOT-PROVIDED checkbox (same for SSN), DOB+auto age, sex + S.O./G.I. (sexual orientation/gender identity) sub-dialog; RESP PARTY block (Select / CLAIM RESP / Set Emergency Contact, relation w/ "self is the insured"), EMERGENCY CONTACT grid + Parent Info + Family Hub; inline balances strip (acct/pt balance, Details, GR. BALANCE, Account Inquiry) + Last-Annual-Visit / Last-Appt / Next-Appt row; mid tab strip = Insurance / Pharmacies / CONTACTS / ATTORNEYS / CASE MANAGEMENT / CIRCLE OF CARE w/ Self-Pay flag, Sliding-Fee-Schedule, New Case, MASTER FEE SCHEDULE dropdown; right column = PCP / REFERRING / RENDERING provider, marital, language + TRANSLATOR, race, ethnicity, CHARACTERISTIC, birth order, RELEASE OF INFO*, RX HISTORY CONSENT* + SCAN (signed consent capture), signature date, advance directive, employment status, student status, GESTATIONAL AGE, default facility; bottom buttons = Additional Information / Alert / Misc Info / Options / P.S.A.C.
- **PFO today:** patients.html has ~15 of these ~60 fields
- **Gap:** demographics field parity (master checklist for the ECW table)
- **PFO implementation:** Extend `patients.html` — Patient Information field parity (~60-field master checklist; this is the demographics anchor row)

### ECW-FO-17 — demographics niceties

- **Screen & fields (eCW):** demographics niceties (extends the Patient Information field map): RACE / ETHNICITY / LANGUAGE are MULTI-VALUE lookups (comma-joined w/ hover tooltip showing the full list — CDC code sets); selecting a PCP whose PRIMARY SERVICE LOCATION differs from the patient DEFAULT FACILITY raises an "update Default Facility?" prompt (toggleable practice setting)
- **PFO today:** single-value dropdowns, no PCP-facility consistency check
- **Gap:** multi-value demographic code sets + referential prompts
- **PFO implementation:** `patients.html` — multi-value race/ethnicity/language (CDC sets) + PCP-facility referential prompts

### ECW-FO-18 — ADDRESS MANAGER

- **Screen & fields (eCW):** ADDRESS MANAGER: per-patient multi-address book — typed addresses (Business, Campus, INTERNATIONAL, Legal, Mailing, Street, SEASONAL, Other) each w/ status CURRENT vs PREVIOUS + EFFECTIVE START/END dates, add-new dialog w/ Validate + County lookup, and a single-current-mailing invariant (adding a second current mailing prompts "mark existing as Previous")
- **PFO today:** one address line pair
- **Gap:** address history + typed addresses (statements go to mailing, seasonal snowbirds, campus students)
- **PFO implementation:** `patients.html` — address manager: typed addresses w/ current/previous + effective dates

### ECW-FO-19 — address INTERNATIONALIZATION + county derivation

- **Screen & fields (eCW):** address INTERNATIONALIZATION + county derivation (extends Address Manager note): picking a non-US country RELABELS the form (State->Province w/ Canadian province list, ZIP->Postal Code) w/ a COUNTRY CODES lookup; COUNTY auto-derives from state+zip (code+name tooltip), w/ toasts for MULTIPLE matching counties ("select using the County button") and no-county-found; editing the mailing address prompts "save as PREVIOUS address?" (auto-history into Address Manager); every address change writes full old/new detail to the demographics log
- **PFO today:** US-only single address, no county
- **Gap:** international addresses + county coding (county drives Medicaid/UDS reporting)
- **PFO implementation:** `patients.html` — international address relabeling + county auto-derivation (Medicaid/UDS)

### ECW-FO-20 — S.O./G.I. structured capture

- **Screen & fields (eCW):** S.O./G.I. structured capture: dedicated dialog off the Sex field — BIRTH SEX (Male/Female/Unknown), SEXUAL ORIENTATION single-pick (lesbian-gay-homosexual / straight / bisexual / do-not-know / choose-not-to-disclose / something-else w/ free text), GENDER IDENTITY multi-check list (incl FTM/MTF transgender options); each of the three has its OWN CHANGE-LOG tab (modified-by, value, modified-on, action, modality, active-value checkmark)
- **PFO today:** single sex dropdown
- **Gap:** SOGI capture w/ audit (USCDI/quality-program requirement)
- **PFO implementation:** `patients.html` — SOGI structured dialog (birth sex / orientation / gender identity) each w/ change-log

### ECW-FO-21 — CIRCLE OF CARE + demographics utilities

- **Screen & fields (eCW):** CIRCLE OF CARE + demographics utilities: staff-side Circle-of-Care builder (named circle, member category via contacts/providers, per-member PRIMARY radio, relationship, "Display in ICW" flag) — the care-team object the portal mirrors; COPY DEMOGRAPHICS is parameterized (checkboxes: emergency contacts, home/cell/work phone, mailing/street address, INSURANCE — terminated/expired coverage auto-excluded — primary pharmacy) w/ copy-from vs copy-to comparison grids (RP badge, last-updated per side) + per-item failure reporting; patient MISC INFO = free name/value fields w/ TAG ASSOCIATIONS (label+tag) so custom fields can be referenced elsewhere
- **PFO today:** none of the three
- **Gap:** care-team object + parameterized family copy + taggable custom fields
- **PFO implementation:** `patient-chart.html` — circle-of-care team object + parameterized family copy + taggable custom fields

### ECW-FO-22 — ADDITIONAL INFORMATION screen

- **Screen & fields (eCW):** ADDITIONAL INFORMATION screen (second demographics page, extends notes 35/64): street address (if different from mailing) w/ own county, LEAVE-MESSAGE consent flags per line (home/cell/work + method dropdowns), RESIDENCE TYPE lookup, VFC ELIGIBILITY (full list incl CHIP / 317 / Medicare / state-program — value flows into each immunization record), MOMember ID, PLAN TYPE, DECEASED date + notes, employer name+address, external-system MRN, default lab/DI company, registered-on timestamp, and billing-behavior flags (INACTIVE, DON'T SEND STATEMENTS, EXCLUDE FROM REGISTRY SEARCH, DON'T ADD FINANCE CHARGE, USE STREET ADDRESS FOR PRESCRIPTION, EXCLUDE FROM COLLECTIONS) + SDOH structured panel + Custom fields + Addl STUDENT INFO tab; PRINT DEMOGRAPHICS is section-pickable (13 sections), warns on CONFIDENTIAL PATIENTS, and the print itself is written to the demographics log w/ the sections printed
- **PFO today:** none of this page exists
- **Gap:** demographics page-2 parity (esp. statement/collections excludes + leave-message consent)
- **PFO implementation:** Extend `patients.html` — page-2 (Additional Info): leave-message consents, VFC, deceased, billing-behavior flags, SDOH, student info

---

## Review Epilog — 2026-07-24

- Live build updated to 1943; gate 251/251 GREEN; MR2–MR7 delivered, MR8/MR9/MR10 active.
- AgentMR9 owns FO parity (17 findings LIVE verified through build 1826); ECW-FO-6/10/13/15 backends proven live.
- ECW-FO-17 (multi-value race/ethnicity/language) and ECW-FO-22 (Additional Information page-2) marked In Progress from build 393a6a806.
- No individual parity rows updated; status regeneration is AgentECW's lane on MasterSchedule sync.

