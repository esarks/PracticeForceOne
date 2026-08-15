---
title: "PracticeForceOneECWMatrixScheduling"
---

# ECW Screen & Field Inventory — Scheduling (calendar, booking, availability engine, queues)

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

- **Assessment & specification: ✅ COMPLETE.** All 26 findings on this page are fully inventoried (every field, tab, and navigation component + a PFO implementation target).
- **Implementation: 🟢 0 live/done · 🟡 26 working screen (build-slice or demo surface) · ⏸️ 0 deferred · ⬜ 0 not started (of 26).** Sequence follows the 24-theme shortlist in [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>); fleet directive in `AGENTS.md`.

> **Reading the numbers.** 🟢 = the deep every-field finding is substantially delivered. 🟡 = a **live, working screen exists** for this finding — either a real build-slice or one of AgentCF's live configurable screens (current live build) that covers this eCW screen at **demo depth** (deep field-by-field parity still open). The 🟡 demo-surface mapping is AgentECW's first pass from the AgentCF sheet; CF is confirming depth per row. So 🟡 means "you can click it today, not that it's finished."

Legend: 🟢 Live/Done (deep parity) · 🟡 Working screen — build-slice or demo surface (parity pending) · ⏸️ Deferred (post-demo) · ⬜ Not started.

| ID | Screen | Status |
|---|---|---|
| ECW-SC-1 | BUMP LIST | 🟡 Done |
| ECW-SC-2 | schedule right-click ops | 🟡 Done |
| ECW-SC-3 | Appointment window depth | 🟡 Done |
| ECW-SC-4 | Visit Type Codes admin | 🟡 Done |
| ECW-SC-5 | televisits are booked in the SAME appointment window via a MED VIDEO | 🟡 In Progress - CF Visit TypesCF live (1706) |
| ECW-SC-6 | Multiple Appointments dialog | 🟡 Done |
| ECW-SC-7 | Visit Type Code editor FULL FIELD SET | 🟡 Done |
| ECW-SC-8 | scheduling-engine config + modern multi-appt search | 🟡 Done |
| ECW-SC-9 | Configure Schedule View + eligibility mapping | 🟡 Done |
| ECW-SC-10 | Configure Working Hours | 🟡 Done |
| ECW-SC-11 | schedule EXCEPTIONS + BLOCK HOURS | 🟡 Done |
| ECW-SC-12 | Visit Type Reason Mapping + Appointment Limits | 🟡 Done |
| ECW-SC-13 | scheduler surface extras | 🟡 Done |
| ECW-SC-14 | Appointment dialog | 🟡 Done |
| ECW-SC-15 | CARE GROUPS | 🟡 Done |
| ECW-SC-16 | booking-form extras | 🟡 Done |
| ECW-SC-17 | Patient Orders window | 🟡 Done |
| ECW-SC-18 | appointment PATIENT BANNER micro-workflows | 🟡 Done |
| ECW-SC-19 | ASAP LIST workflow | 🟡 Done |
| ECW-SC-20 | schedule context menu depth | 🟡 Done |
| ECW-SC-21 | Multiple-Appointments ADV constraints | 🟡 Done |
| ECW-SC-22 | appointment-search MODERN VIEW | 🟡 Done |
| ECW-SC-23 | booking-form long tail | 🟡 Done |
| ECW-SC-24 | appointment-DELETE data guards | 🟡 Done |
| ECW-SC-25 | FAMILY BOOKING window | 🟡 Done |
| ECW-SC-26 | APPOINTMENT SEARCH | 🟡 Done |

**Rollup: 0 live · 26 working screen · 0 deferred · 0 not started (of 26).**

*Regenerated 2026-07-21 from the unified status across all `MasterSchedule.xlsx` sheets + AgentECW's surface→ECW crosswalk. Documentation-only lane (AgentECW).*

---

### ECW-SC-1 — BUMP LIST

- **Screen & fields (eCW):** BUMP LIST: bumped/displaced appointments tracked w/ restore + reschedule workflow
- **PFO today:** —
- **Gap:** bump list on calendar cancel/move
- **PFO implementation:** Extend `practice-ehr-calendar.html` — bump list queue w/ restore/reschedule (Server: BUMP_LIST)

### ECW-SC-2 — schedule right-click ops

- **Screen & fields (eCW):** schedule right-click ops: cut/copy/paste appt, copy-for-family, cancel-all-for-day, bump, print appointment card + encounter form, set global alert
- **PFO today:** practice-ehr-calendar
- **Gap:** appointment clipboard ops + prints
- **PFO implementation:** Calendar — right-click ops: cut/copy/paste appt, copy-for-family, cancel-day, print card/encounter form

### ECW-SC-3 — Appointment window depth

- **Screen & fields (eCW):** Appointment window depth: visit status incl PEN, dx at booking, transition-of-care flag, per-visit copay/claim override, non-billable visit flag, billing vs general notes, charge details from appt
- **PFO today:** practice-ehr-calendar booking
- **Gap:** appointment-level billing hooks
- **PFO implementation:** Extend booking modal — visit status, dx at booking, TOC flag, per-visit copay override, non-billable flag (master ECW-SC-14)

### ECW-SC-4 — Visit Type Codes admin

- **Screen & fields (eCW):** Visit Type Codes admin: per-visit-type code, description, category (Physical/Regular/Consult Visit), OBGYN flag, Active/Inactive status, calendar COLOR, display on/off toggle; sibling admin nodes Visit Type DURATIONS and Visit STATUS Codes (custom status vocabulary)
- **PFO today:** appointment types not admin-configurable
- **Gap:** visit-type admin table (color, duration, active flag, custom statuses) feeding calendar + kanban
- **PFO implementation:** New `visit-types.html` — visit-type admin (code, category, color, duration, active, custom statuses)

### ECW-SC-5 — televisits are booked in the SAME appointment window via a MED VIDEO

- **Screen & fields (eCW):** televisits are booked in the SAME appointment window via a MED VIDEO (Medical Telehealth) visit type; patient gets SMS/email join link 15 min prior; pre-visit patient vitals questionnaire optional
- **PFO today:** no telehealth visit type or join-link flow
- **Enh (mock-seam):** telehealth visit type + join-link placeholder + pre-visit questionnaire (video transport stays mocked)
- **PFO implementation:** Calendar — telehealth visit type + join-link placeholder + pre-visit questionnaire (transport mock)

### ECW-SC-6 — Multiple Appointments dialog

- **Screen & fields (eCW):** Multiple Appointments dialog: books a SERIES in one shot — multi-row spec (visit type + reason + facility + providers & RESOURCES per row), saveable as a named PACKAGE for reuse, exclude-blocked/exclude-booked toggles, slot Search Results w/ per-slot Book, plus ADD TO WAIT LIST + Wait List viewer
- **PFO today:** single-appointment booking only
- **Gap:** multi-appointment/series booking + appointment packages + waitlist queue
- **PFO implementation:** Calendar — multi-appointment series booking + named packages + waitlist queue

### ECW-SC-7 — Visit Type Code editor FULL FIELD SET

- **Screen & fields (eCW):** Visit Type Code editor FULL FIELD SET (field detail for the visit-type admin note): Name, Description, CHART TITLE, Duration (mins), Color, Visit Type category w/ Customize, Insurance Plan Type link, flags OBGYN / Physical Therapy / REQUIRES CLAIM / REQUIRES COPAY / Pregnancy / Vision / Patient Housing / WELL-CHILD / Care Plan Visit, Active/Inactive, Exclude-from-MU-reporting, hide-in-Progress-Notes dropdown, SYNCHRONIZE-TO-PATIENT-PORTAL, medication-reconciliation-not-necessary, Collect UB data; charge config extends PER PROVIDER/RESOURCE w/ reset-to-default
- **PFO today:** none
- **Gap:** full visit-type model (drives claim/copay requirements, portal booking visibility, MU exclusion)
- **PFO implementation:** `visit-types.html` — full field set (chart title, claim/copay-required, well-child, portal-sync, per-provider charges)

### ECW-SC-8 — scheduling-engine config + modern multi-appt search

- **Screen & fields (eCW):** scheduling-engine config + modern multi-appt search (extends notes): Configure Schedule Settings = appointment slot LOCK duration (concurrent-booking guard) + search behavior toggles (always ignore booked slots, apply schedule/visit duration to search, hide alternate hours, exclude booked facility, visit-type-rule indicator on max appts, availability display, distinct time slots, facility code display, solid visit-rule colors); modern Multiple Appointments search adds provider filters SPECIALTY/GENDER/LANGUAGE, show-only-residents, ACCEPTING-NEW-PATIENTS flag, day-preference, start/end-time window, next-appt-after offset, start-at-same-time, saved search TEMPLATES, per-provider visit-type-rule compliance check
- **PFO today:** basic calendar
- **Gap:** slot-search engine w/ provider-attribute filters + booking locks
- **PFO implementation:** Calendar admin — slot-lock duration + search behavior toggles; modern multi-appt provider filters

### ECW-SC-9 — Configure Schedule View + eligibility mapping

- **Screen & fields (eCW):** Configure Schedule View + eligibility mapping: calendar slot TEXT FORMAT is admin-composable from merge tokens (patient name/DOB/phone, visit type + details, visit status/reason, general notes, facility code, PRIMARY INSURANCE, encounter id, account no, EXTERNAL MRN), optional eligibility-status icon per appointment, hover PATIENT-INFO POPUP (photo, phone, DOB, eligibility) w/ configurable timeout; CONFIGURE ELIGIBILITY VIEW maps each visit type to X12 eligibility SERVICE CATEGORIES and can AUTO-UPDATE THE APPOINTMENT'S COPAY from the electronic eligibility (270/271) response
- **PFO today:** fixed slot text; eligibility results not fed back to appointment copay
- **Gap:** composable slot format + visit-type->service-category mapping w/ copay auto-update (direct fit to our 270/271 pipeline)
- **PFO implementation:** Calendar admin — composable slot text tokens + hover patient popup; Server: visit-type→271 service-category map w/ copay auto-update

### ECW-SC-10 — Configure Working Hours

- **Screen & fields (eCW):** Configure Working Hours (availability engine, PFO's availability-templates is the partial analog): per-PROVIDER and per-RESOURCE date-ranged working-hour BLOCKS (description, start/end date, recurrence, status) w/ per-day rows (facility, start/end time), save-as-TEMPLATE, COPY-to-another-provider/resource (new block or merge, side-by-side preview), and drag-and-drop VISIT TYPE RULES onto the week grid — rule = visit type + sub-type + time window + MAX VISITS; named RULE SETS (duration + max visits) searchable and draggable as a group; per-provider "always show in appointment search" flag
- **PFO today:** availability templates page exists but no visit-type rules, resource hours, copy, or rule sets
- **Gap:** availability rules engine driving slot search + booking constraints
- **PFO implementation:** Extend `practice-ehr-availability-templates.html` — provider/resource hour blocks, drag-drop visit-type rules, rule sets, copy

### ECW-SC-11 — schedule EXCEPTIONS + BLOCK HOURS

- **Screen & fields (eCW):** schedule EXCEPTIONS + BLOCK HOURS (completes the availability engine): date-specific EXCEPTION rules override the standing visit-type rules for one day (side-by-side current-vs-exception view, add rule w/ visit type/times/max visits, COPY exception to another provider+date); BLOCK HOURS carve out provider/resource time (color, description, single dates or range, all-day, deleted-blocks recycle) — blocking over booked slots offers MOVE-OVERLAPPING-APPOINTMENTS-TO-BUMP-LIST (the bump queue the front desk reworks), and every block edit has a FIELD-LEVEL change log (user, action, field, old/new value)
- **PFO today:** no exceptions, blocks, or bump list
- **Gap:** day-exceptions + block hours w/ bump-list rebooking queue
- **PFO implementation:** Availability — day exceptions + block hours w/ move-to-bump-list + field-level change log

### ECW-SC-12 — Visit Type Reason Mapping + Appointment Limits

- **Screen & fields (eCW):** Visit Type Reason Mapping + Appointment Limits (last of the scheduling-engine set): optional mode where staff/patients search appointments by patient-friendly REASON ("annual physical") mapped from visit types (admin map w/ unmapped-count warning, per-type edit/remove); APPOINTMENT LIMITS rules cap bookings — parameter=visit type(s) (up to 10, ANY counts toward the cap) x days-of-week x time window x facility x provider(s) -> MAXIMUM INSTANCES w/ calendar color
- **PFO today:** none
- **Gap:** reason-based booking search + booking caps (protects clinic capacity; portal-facing win)
- **PFO implementation:** Calendar admin — patient-friendly reason mapping + appointment-limit caps w/ live n/m tooltips

### ECW-SC-13 — scheduler surface extras

- **Screen & fields (eCW):** scheduler surface extras (office-appointments p010-016): per-appointment INSURANCE ELIGIBILITY icon has a 5-state legend (Eligible / Ineligible / Not Verified-Not Submitted / No Response-Received & Not Verified / Eligible-but-PCP-MISMATCHED); schedule can pivot by DEPARTMENTS with facility-scoped advanced lookup and INLINE CREATE-NEW department from the search box (+ Copy existing); multi-facility view color-codes slots per facility via a facility multi-select w/ color swatches; mini-calendar shows per-day appointment COUNTS "(n)"; a Reminders grid (time/patient/phone) docks under the mini-calendar
- **PFO today:** single-facility calendar, no eligibility state on slots, no departments
- **Gap:** slot-level eligibility state (extends note on 270/271 copay auto-update) + department dimension + facility color coding
- **PFO implementation:** Calendar — slot eligibility-state icons (5 states), department pivot, facility color coding, mini-calendar counts

### ECW-SC-14 — Appointment dialog

- **Screen & fields (eCW):** Appointment dialog (the booking form, FULL FIELD SET): header = Patient search (by name/other keys dropdown) + Info + Hub + NEW PT checkbox + family-booking icon; APPOINTMENT section = Facility* + POS* (place-of-service code auto-filled), Date*, Time* start/end, Provider*, Resource* (separate from provider), CLAIM PROVIDER override, patient Email; VISIT section = Visit Type*, SUB-TYPE, Visit Status (PEN etc) + Pager Status, Reason (free text w/ ellipsis), Diagnosis picker, TRANSITION OF CARE button; BILLING section = OPEN CASES dropdown + Case Manager + Addl Billing Data, Referral picker (w/ new-N), Billing Notes, General Notes, per-visit CO-PAY OVERRIDE checkbox+amount, NON-BILLABLE VISIT flag; bottom action row = Encounters, Find (slot search), Logs, Referrals, Orders, BUBBLESHEET, delete, refresh; bottom tabs = Charge Details / eCliniForms / Rx Eligibility / Misc Info / CLAIM RESPONSIBLE PARTY; double-booking raises a conflict YES/NO soft override
- **PFO today:** appointment modal has a fraction of this (no resource, sub-type, claim-provider, cases, per-visit copay override, non-billable flag)
- **Gap:** booking-form field parity (this is the single densest scheduling screen)
- **PFO implementation:** Booking modal — FULL field parity (facility/POS, resource, claim-provider, sub-type, cases, referral, copay override, bottom tabs) — densest scheduling row

### ECW-SC-15 — CARE GROUPS

- **Screen & fields (eCW):** CARE GROUPS: schedule panel pivots Provider vs CARE GROUPS — named provider bundles (hover lists member providers) selectable to render the whole team; facility multi-select w/ per-facility color swatch + Select-all; per-user toggle "Enable Centralized Resource Scheduling (Facility Based)" switches resource booking to a facility-central pool
- **PFO today:** flat provider list
- **Enh:** provider care-groups + centralized-resource mode
- **PFO implementation:** Calendar — provider care-groups pivot + centralized-resource mode

### ECW-SC-16 — booking-form extras

- **Screen & fields (eCW):** booking-form extras (extends the Appointment-dialog field-set note): RECURRING appointments (dialog title flags "(Recurring)"); Dept field on the appointment; SUB-TYPES are admin-mapped per visit type w/ their own calendar COLOR and render in the slot text ("No Sub-Types Mapped" when none); payer/plan rules surface an inline red "REFERRAL IS REQUIRED" flag; WEB ENABLE checkbox sits next to patient email; running eligibility AUTO-STAMPS Billing Notes w/ "Eligibility:\<timestamp>"; referral dropdown rows show referring provider + reason
- **PFO today:** none of these
- **Gap:** recurring visits + visit sub-types + payer-driven referral-required prompt
- **PFO implementation:** Booking modal — recurring flag, sub-types w/ colors, payer-driven REFERRAL-REQUIRED prompt, eligibility auto-stamp

### ECW-SC-17 — Patient Orders window

- **Screen & fields (eCW):** Patient Orders window (Orders button on the appointment): pre-visit review of everything ordered for the patient — Current vs FUTURE tabbed grids for Labs / Diagnostic Imaging / Procedures (Description, Schedule Date, Notes, IN OFFICE flag, DONE flag) alongside Rx (med + direction), Immunizations/Therapeutic Injections (name/date/given-by/location/lot/dose/done), and Referrals (doctor/speciality/reason/date/dx/status/transmission) w/ a SEND action; appointment also has a LOGS tab (date/time/user/action + field-level Detail Logs)
- **PFO today:** orders not visible from the appointment
- **Gap:** pre-visit orders/readiness surface on the booking (front desk sees what to collect/schedule)
- **PFO implementation:** Booking modal — pre-visit patient-orders tab (current/future grids) + appointment logs tab

### ECW-SC-18 — appointment PATIENT BANNER micro-workflows

- **Screen & fields (eCW):** appointment PATIENT BANNER micro-workflows: the demographics strip on the booking dialog is live — pencil icons inline-edit ADDRESS (Mailing Address popup w/ line1/2, city, state, zip, country + address VALIDATE button) and PHONES (home/cell/work popup) without leaving the booking; an insurance chip shows the primary payer and hover/click opens a PATIENT INSURANCE popup grid (P/T/O rows: name + subscriber no); banner also carries SMS-consent Yes/No, email/portal-status icons, eEHX status, and a CARE-GAP line ("Last WCV: No Well-Child Visits Completed" / "Last AV: No AV Completed"); every banner edit writes to the PATIENT DEMOGRAPHICS LOG (General Logs tab: user, patient id, action, timestamp + the changed field values)
- **PFO today:** booking modal shows name only; demographic edits require the patients page and are unaudited
- **Gap:** in-context demographic micro-edits + address validation + demographics change log + care-gap banner at booking
- **PFO implementation:** Booking modal — live patient banner: inline address/phone micro-edits w/ validation, insurance popup, care-gap line, demographics change log

### ECW-SC-19 — ASAP LIST workflow

- **Screen & fields (eCW):** ASAP LIST workflow (third queue beside Bump/Wait): an ASAP checkbox on the appointment adds it to the ASAP List (columns: patient, provider, facility, visit status, visit type, appt date, start time, phone; per-row info + remove); each row has an ADDITIONAL INFORMATION popup (username, data modified, notes) and GENERAL NOTES capturing the patient's PREFERRED WINDOWS ("1/21 9AM-12PM, 1/23 2-4PM"); Reschedule Appointment Search offers matching earlier slots (duration + starting-at list, per-slot Reschedule, optional "apply visit type rule in searching?" prompt) w/ inline success banner; every add/remove/reschedule lands in the appointment log; APPOINTMENTS LOGS detail = full FIELD-LEVEL audit (date, time, user, action, FIELD, OLD VALUE, NEW VALUE + field filter) incl Created/Modified/Copied/Added-to-ASAP actions
- **PFO today:** no ASAP/preferred-earlier queue; appointment edits unaudited
- **Gap:** move-up (ASAP) queue w/ slot-finder + field-level appointment audit log
- **PFO implementation:** Calendar — ASAP move-up queue w/ preferred windows + reschedule slot-finder + field-level appointment audit

### ECW-SC-20 — schedule context menu depth

- **Screen & fields (eCW):** schedule context menu depth (extends right-click-ops note): New GROUP APPOINTMENT (multi-patient one slot), NEW BLOCK + RESERVE SLOT from the grid, ADD FROM ASAP LIST paste, Go-To-Today/Date, and COPY ALL APPOINTMENTS FOR THE DAY -> BULK APPOINTMENT COPY/PASTE dialog (provider/resource, copy-from date -> copy-to date, optional copy-with/paste-with VISIT TYPE remap, copy General Notes / Billing Notes toggles, include-non-billable) intended for vaccine-follow-up cohorts; preview lists candidate appointments w/ per-row checkboxes (patient, DOB, start/end, from->to visit type) and the confirm dialog WARNS which security permissions get bypassed (overbooking-on-visit-type-rules, overbooking, creation-outside-working-hours), skips blocked target days, and flags "this cannot be undone"
- **PFO today:** none
- **Gap:** group appointments + reserve-slot + day-level bulk copy (recurring-cohort scheduling)
- **PFO implementation:** Calendar — group appointments, reserve slot, bulk day copy/paste w/ visit-type remap + permission warnings

### ECW-SC-21 — Multiple-Appointments ADV constraints

- **Screen & fields (eCW):** Multiple-Appointments ADV constraints (enriches the series-booking note): each series row expands to per-row search constraints — DAY PREFERENCE, Start Date, Start-Time/Finish-Time window, "NEXT APPOINTMENT AFTER n days" spacing, and START-AT-THE-SAME-TIME lock across rows; the Providers & Resources picker is a dual-list w/ per-provider VISIT-TYPE-RULE checkmarks (rule-compliant providers flagged), SPECIALTY filter, "show only RESIDENTS", and "show only providers w/ this facility as PRIMARY SERVICE LOCATION"
- **PFO today:** single-slot finder only
- **Gap:** constraint-driven series slot search
- **PFO implementation:** Calendar — per-row series constraints (day pref, time window, spacing, same-time lock) + rule-compliant provider picker

### ECW-SC-22 — appointment-search MODERN VIEW

- **Screen & fields (eCW):** appointment-search MODERN VIEW (patient-access matching layer): sectioned finder (Location / Provider / Visit Reason / Date & Time) where the provider pool filters by SPECIALTY, GENDER, LANGUAGE, show-only-RESIDENTS, and ACCEPTING NEW PATIENTS (honors the per-provider admin flag); facility lookup can SORT BY CLOSEST TO PATIENT ADDRESS w/ a Distance-in-miles column; header shows PREVIOUS/NEXT APPOINTMENT context popup (date, time, provider, facility, visit type); multi-row searches saveable as named TEMPLATES (Select Template + Add) beside packages; legacy/modern view toggle
- **PFO today:** slot search has none of these matching dimensions
- **Gap:** patient-preference matching (gender/language/new-patient/proximity) — direct portal self-scheduling enabler
- **PFO implementation:** Calendar — modern patient-preference finder (specialty/gender/language/accepting-new/proximity) — portal self-scheduling enabler

### ECW-SC-23 — booking-form long tail

- **Screen & fields (eCW):** booking-form long tail: APPOINTMENT RECURRENCE dialog (weekly pattern, recur-every-N-weeks on day-of-week checkboxes, range = end-after-N-occurrences or end-by-date, w/ start/end/duration summary); MISC INFO tab = free NAME/VALUE custom fields per appointment (add/edit/delete, "Save Miscellaneous Info"); banner shows DATA EXCHANGE CONSENT opt-in state; bottom tab row can include TREATMENT PLAN
- **PFO today:** none
- **Gap:** recurrence engine + appointment-level custom fields
- **PFO implementation:** Booking modal — recurrence engine; CF: appointment-level custom fields (Misc Info)

### ECW-SC-24 — appointment-DELETE data guards

- **Screen & fields (eCW):** appointment-DELETE data guards: delete is BLOCKED when the linked progress note contains data ("Data is present... can not be deleted") or when note sections are open by another user; if note LOGS show prior writes it warns "may result in LOSS OF DATA" w/ YES/NO; right-click also offers Print Encounter Form (Word / Choose Template) and CHECK ELIGIBILITY (ALL) for the day
- **PFO today:** hard delete unguarded by note state
- **Gap:** referential delete guards tied to encounter documentation
- **PFO implementation:** Server — appointment delete guards tied to note data/locks (referential integrity)

### ECW-SC-25 — FAMILY BOOKING window

- **Screen & fields (eCW):** FAMILY BOOKING window (extends Family Hub note): from a saved appointment, one screen books the rest of the household — left = patient+appointment summary; middle = PATIENT CONTACTS grid (name, relation, family Y/N, Info) w/ "Show Family Members Only" filter; selecting contacts adds CREATE ADDITIONAL APPOINTMENTS rows (patient, date, start/end, visit type, SUB-TYPE, provider/resource per row); right = docked RESOURCE SCHEDULE day grid (resource + date pager) to drop each member into a slot; prompts to save the anchor appointment first
- **PFO today:** none
- **Gap:** household same-visit booking (pediatrics/family-practice workflow)
- **PFO implementation:** Calendar — family booking screen (household members × resource day grid)

### ECW-SC-26 — APPOINTMENT SEARCH

- **Screen & fields (eCW):** APPOINTMENT SEARCH (consumer-style slot finder, distinct from Multiple-Appointments): scheduler toolbar opens a kayak-style search — left filters = SPECIALTY (list w/ per-specialty provider COUNTS + info popup listing the providers) or specific Provider, Resource tab, Visit Type, PATIENT COMPLAINT free-text, mapped APPOINTMENT REASON, facility, DISTANCE slider in miles (tooltip: needs patient zipcode + facility=ALL), LANGUAGE, CLINICIAN GENDER radio; top bar = start date, day-of-week, AM/PM, sort-by AVAILABILITY; results = provider CARDS (photo, specialty chip, facility, address, phone) w/ green next-available slot chips per day (+more / Load More); clicking a chip books instantly -> Appointment Summary card + "Appointment booked successfully!" toast on the live calendar
- **PFO today:** no finder of this class
- **Gap:** availability-first booking search (front-desk speed + the exact surface a portal self-scheduler needs)
- **PFO implementation:** Calendar — availability-first consumer-style search (provider cards, next-available chips, distance slider)

---

## Review Epilog — 2026-07-24

- Live build updated to 1943; gate 251/251 GREEN; MR2–MR7 delivered, MR8/MR9/MR10 active.
- No 🟢 live rows in this domain; all 26 remain at 🟡 working-screen status.
- ECW-SC-5 (Visit TypesCF) marked In Progress since build 1706; AgentUI wave 15 adds scheduling-related CF formTypes.
- No individual parity rows updated; status regeneration is AgentECW's lane on MasterSchedule sync.

