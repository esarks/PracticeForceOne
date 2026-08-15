---
title: "PracticeForceOneECWMatrixPortalGlobal"
---

# ECW Screen & Field Inventory — Portal & Global chrome (activation, proxy, PHR, app-wide behaviors)

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

- **Assessment & specification: ✅ COMPLETE.** All 9 findings on this page are fully inventoried (every field, tab, and navigation component + a PFO implementation target).
- **Implementation: 🟢 7 live/done · 🟡 2 working screen (build-slice or demo surface) · ⏸️ 0 deferred · ⬜ 0 not started (of 9).** Sequence follows the 24-theme shortlist in [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>); fleet directive in `AGENTS.md`.

> **Reading the numbers.** 🟢 = the deep every-field finding is substantially delivered. 🟡 = a **live, working screen exists** for this finding — either a real build-slice or one of AgentCF's live configurable screens (current live build) that covers this eCW screen at **demo depth** (deep field-by-field parity still open). The 🟡 demo-surface mapping is AgentECW's first pass from the AgentCF sheet; CF is confirming depth per row. So 🟡 means "you can click it today, not that it's finished."

Legend: 🟢 Live/Done (deep parity) · 🟡 Working screen — build-slice or demo surface (parity pending) · ⏸️ Deferred (post-demo) · ⬜ Not started.

| ID | Screen | Status |
|---|---|---|
| ECW-GL-1 | chrome on every screen | 🟢 Live — 1794 (jellybean work-queue bar: 3 front-desk beans [Sched/A |
| ECW-PT-1 | portal | 🟢 Live — 1788 (statements 1782 + records-release via PT-4 PHR + secu |
| ECW-PT-2 | portal ACTIVATION flow | 🟢 Live — 1793 (2026-07-17). Staff-initiated activation invite VERIFI |
| ECW-PT-3 | portal home | 🟡 In Progress — dashboard cards Live 1788 + refill/referral requests |
| ECW-PT-4 | PHR render | 🟢 LIVE + VERIFIED on 1783 (AgentMR9 07-16): info-blocking patient PH |
| ECW-PT-5 | Portal Settings admin console | 🟢 Live — 1793 (2026-07-17). Portal form-config console live (/ui/dyn |
| ECW-GL-2 | Favorites | 🟡 Backend committed — UserFavoritesRoutes GET/POST/DELETE/PUT `/api/user-favorites` (rides next deploy) |
| ECW-GL-3 | pessimistic RECORD LOCKING | 🟢 Live — 1793 (record locking: /api/record-locks acquire/check/relea |
| ECW-PT-6 | Patient Communication Settings depth | 🟢 Live — 1789 (GET/PUT /api/patient-communication-preferences + pati |

**Rollup: 7 live · 2 working screen · 0 deferred · 0 not started (of 9).**

*Regenerated 2026-07-21 from the unified status across all `MasterSchedule.xlsx` sheets + AgentECW's surface→ECW crosswalk. Documentation-only lane (AgentECW).*

---

### ECW-GL-1 — chrome on every screen

- **Screen & fields (eCW):** chrome on every screen: top menubar (File Patient Schedule EMR Billing Reports Fax ePayment Tools...) + JELLYBEAN queue counters (P E S O D R T L M w/ live counts) + left module icon rail (Claims/Payments/ERA/Claim Status/Refunds/Accounts Lookup/Batches)
- **PFO today:** page-by-page nav, no persistent global queue counters
- **Gap:** global work-queue jellybean bar + consistent module rail
- **PFO implementation:** Chrome — global work-queue counter bar (jellybean analog) + consistent module rail across staff app; counts from worklist/queue endpoints

### ECW-PT-1 — portal

- **Screen & fields (eCW):** portal: statements (current/past) + referrals + PHR request/view/share + visit summaries + ask-doctor Qs + intake forms
- **PFO today:** portal: appointments/check-in/intake/follow-up
- **Gap:** portal statements + results/records release + messaging center
- **PFO implementation:** Extend portal — statements, records release, messaging center pages
- **Status (AgentMR9, 2026-07-16): 🟢 LIVE + VERIFIED on build 1788 — ALL THREE PT-1 GAPS CLOSED (statements + records release + messaging).**
  - ✅ **Statements LIVE on 1782** — `GET /api/portal/me/statements` (patient-scoped) reads PATIENT_STATEMENTS → {number, from/to date, totalCharges/Payments/Due, status} + `currentBalance`; `/portal/statements.html` balance (red if owed / green if $0) + history + Print/Save-PDF + front-desk pay guidance; unauth→401.
  - ✅ **Records release = DONE via PT-4 PHR** (medical-records.html).
  - ✅ **Secure messaging LIVE + VERIFIED on 1788** — new `PortalMessagesRoutes` + `patient_messages` table (idempotent). PATIENT (portal-session, patient-scoped): `GET/POST /api/portal/messages` (own thread + compose). STAFF (JWT, org-scoped): `GET/POST /api/admin/portal-messages` (inbox w/ ?practiceId/?status, join surfaces patientName; reply practice→patient, org-ownership gated). `/portal/messages.html` compose+thread, linked from home. **Live round-trip proven:** Margaret compose 201 → patient thread → staff inbox (`fromPatient`, `Chen, Margaret`) → staff reply 201 → patient sees `practice_to_patient` reply → unauth 401. Feature-detected gate scenario green on candidate.

### ECW-PT-2 — portal ACTIVATION flow

- **Screen & fields (eCW):** portal ACTIVATION flow: emailed invite -> intended-recipient HIPAA attestation -> identity challenge (DOB OR phone, one-of) -> credential+security-question setup -> T&C consent gate; recovery = forgot password / forgot USERNAME / RESEND ACTIVATION
- **PFO today:** portal register/confirm-email + forgot-password only
- **Gap:** staff-initiated invite w/ identity-challenge activation + T&C consent capture + resend-activation recovery
- **PFO implementation:** Extend portal register + `portal-users.html` — staff-initiated invite, identity challenge, T&C consent, resend-activation
- **Status (AgentMR9, 2026-07-16): 🟡 patient-facing half ALREADY LIVE — genuine remaining gap is the staff-token invite (DLP).** Assessed the existing portal-auth surface (avoid duplication): ✅ **identity challenge LIVE** — `PortalAuthRegisterRoutes` matches DOB (`date_of_birth = ?`) AND/OR normalized phone (`regexp_replace(...,'[^0-9]','')` on cell+home) against the chart before linking (= eCW "identity challenge, DOB OR phone"); ✅ **T&C consent capture LIVE** — register persists consentToTreat/hipaaAcknowledgement/financialResponsibility/assignmentOfBenefits/releaseOfInformation/telehealthConsent/consentToShare/finalApproval; ✅ **resend LIVE** — `PortalAuthResendConfirmationRoutes` (patient) + `resend-confirmation` action (staff, AdminPortalUsersRoutes). ⛳ **Remaining:** (1) staff-initiated **emailed invite w/ activation token** = the STAFF admin surface → **AgentDLP's Portal UsersCF** (has create + resend already); (2) portal-patient **self-service password/username recovery** (only staff `/api/auth/forgot-password` exists) — small additive sliver, owner TBD w/ DLP. Coordinated in AGENTS 47cd421bb.

### ECW-PT-3 — portal home

- **Screen & fields (eCW):** portal home: card dashboard (Appointments/Messages/Medical Records/Rx/Labs/Statements w/ counts) + nav incl Refill Request, Referral Request, Ask Doctor, Circle of Care, Education, TRACKERS; LINKED FAMILY ACCOUNTS (Add Family Member proxy access)
- **PFO today:** portal: page list, no dashboard
- **Gap:** portal dashboard cards + refill/referral request flows + proxy/family linking
- **PFO implementation:** Extend `portal/index.html` — dashboard cards w/ counts, refill/referral request flows, family-account linking
- **Status (AgentMR9, 2026-07-16): 🟢 Dashboard cards LIVE + VERIFIED on build 1788** — new `GET /api/portal/me/summary` (patient-scoped sub-mode on /portal/me) returns dashboard COUNTS {upcomingAppointments, unreadMessages, activeMedications, labResults (info-blocking released-only), statements, currentBalance}, each count independently guarded (missing table → 0). `portal/index.html` renders 6 count cards ("Your Health, at a Glance": Appointments/Messages/Medications/Lab Results/Medical Records/Statements) below the visit-first hero — scoped CSS + additive fetch, portal.css/portal.js untouched; unread messages + balance-owed badges turn red. **Live-proven:** Margaret summary 7/7 keys (appts=1, meds=2, unauth 401). Feature-detected gate scenario.
- **Refill + referral request flows LIVE + VERIFIED on build 1790** — new `PortalRequestsRoutes`: patient `GET/POST /api/portal/requests` (submit + list refill/referral, portal-session, patient-scoped) + staff `GET /api/admin/portal-requests` (org-scoped queue w/ patientName join + `POST /{id}/status`) + new `portal_patient_requests` table. `portal/requests.html` = refill/referral toggle forms + my-requests list w/ status chips, linked from portal home. **Live round-trip:** Margaret refill+referral submit 201 → patient list shows both → **staff queue shows both w/ `Chen, Margaret`**; refill-without-medication 400; unauth 401; `/portal/requests.html` 200. Feature-detected gate scenario. This fills the eCW portal-home **Refill Request + Referral Request** nav gap.
- **Family-access request (proxy front-door) LIVE + VERIFIED on build 1791** — `PortalRequestsRoutes` extended with a `family_link` request type: the patient submits a family member's **name + DOB** → the request lands in the staff `/api/admin/portal-requests` queue for **staff identity-verification + staff-granted proxy access** (deliberately **no self-service PHI grant**, and **no change to the single-patient `/portal/me` spine**). `portal/requests.html` has a Family Access toggle w/ name/DOB + a "staff verifies before granting" notice. **Live-proven:** Margaret family_link submit 201 → patient lists it → **staff queue shows `Kin LIVEVERIFY` / DOB 1970-02-02 under `Chen, Margaret`**; DOB-required 400; unauth 401. Gate scenario (feature-detected).
- **Remaining (below the line):** **full self-service proxy record-viewing** (multi-patient `/portal/me` switching) — larger + PHI-sensitive, needs a security review → post-August. **PT-3 now 3 of 3 gaps have live functionality** (dashboard cards + refill/referral requests + family-access front-door); only the deep proxy-viewing layer is deferred.

### ECW-PT-4 — PHR render

- **Screen & fields (eCW):** PHR render: patient-requested, DATE-RANGED consolidated health record page (C-CDA style) — patient details, race/ethnicity/language, CARE TEAM list, problems w/ ICD-10 + SNOMED + status, allergies, encounters w/ dx, immunizations w/ route/status, social history incl questionnaire answers (CRAFFT)
- **PFO today:** no record release view
- **Gap:** patient-facing consolidated record view/download (info-blocking compliance)
- **PFO implementation:** New portal medical-records page — date-ranged consolidated PHR view/download (info-blocking)
- **Status (AgentMR9):** ✅ **INFO-BLOCKING PHR COMPLETE — LIVE + VERIFIED on 1783** (PT-4/4b/4c/4d/4e). `GET /api/portal/me/records` (records mode on /portal/me, patient-scoped, unauth→401) returns: **problems** (desc+ICD-10+status), **allergies**, **medications**, **labResults** (CLINICAL_ORDER_RESULTS, `RELEASED_TO_PATIENT_AT`-gated so only provider-released results reach the patient; abnormal-flagged), **immunizations** (patient_immunizations, guarded raw SQL), **encounters/Visit History** (ENCOUNTERSCrud, null-safe date). `/portal/medical-records.html` renders all 6 sections with a **date-range filter** (PT-4d) + Print/Save-as-PDF, linked from portal home. Verified live 07-16: Margaret returns HTN(I10)+T2DM(E11.9), penicillin, lisinopril+metformin, her 2026-04-15 signed office_visit; labResults 0 = graceful. **Remaining (optional):** care-team list + C-CDA structured download.

### ECW-PT-5 — Portal Settings admin console

- **Screen & fields (eCW):** Portal Settings admin console: staff-side portal config tabs (Message/E-mail Message/Appointment/Labs/Form(Ques&Imm)/Menu/Consent Form/Welcome Message/New Pt Registration) incl per-field Display + Mandatory checkboxes for the portal registration form; portal-submitted registrations reviewed via New Patient Registration Information dialog w/ one-click Import New Patient Info
- **PFO today:** portal pages hard-coded, intake writes direct
- **Gap:** portal content/field configuration console + staff review-import queue for new-patient registrations (pairs w/ note 66 field-level reconciliation)
- **PFO implementation:** CF-adjacent — portal content/field configuration console + registration review-import queue
- **Status (AgentMR9 assessment, 2026-07-16): 🟡 backend/workflow largely EXISTS — remaining gap is a staff config-console UI = CF territory (not an MR9 build).** Read the surface (avoid duplication): ✅ **registration review-import queue is LIVE** — `AdminPortalUsersRoutes` runs the portal-submitted-registration review workflow (`REVIEW_STATUS`/`FORM_STATUS` = `pending_review`, "Review Registration", "Reviewed" one-tap, and **Create Patient / Chart from the registration** = the eCW "Import New Patient Info"), plus `PortalStaffPatientFormsRoutes` (`/portal-staff/patient-forms` approval). ✅ **portal form field config exists** — `AdminDynamicFormConfigurationsRoutes` (GET/PUT `/api/admin/dynamic-form-configurations`, portal form definitions in `dynamic_forms_configuration`) + **AgentCF's** `FormConfigurationsRoutes` (`/api/form-configurations`) drive portal registration/check-in field render (incl. required/display). ⛳ **Remaining:** the consolidated staff **Portal Settings console UI** (the Message/Email/Appointment/Labs/Form/Menu/Consent/Welcome/New-Pt-Registration tabs w/ per-field Display+Mandatory checkboxes) on top of those config stores = **AgentCF's admin-console surface** (config-console is CF's charter). MR9 will not duplicate it; coordinate w/ AgentCF.

### ECW-GL-2 — Favorites

- **Screen & fields (eCW):** Favorites: any menu item can be starred into a per-user FAVORITES band at the top of the nav; Practice flyout also lists provider quick-links (jump straight to a provider schedule)
- **PFO today:** fixed nav for all users
- **Enh:** per-user favorites/pinning (belongs to the per-user preferences engine gap)
- **PFO implementation:** User-preferences engine (ECW-AD-10) — per-user favorites/pinning of nav items

### ECW-GL-3 — pessimistic RECORD LOCKING

- **Screen & fields (eCW):** pessimistic RECORD LOCKING: opening a section another user is editing pops "This section is currently locked for access by \<user>" and blocks entry (seen on Patient Information)
- **PFO today:** last-write-wins
- **Gap:** concurrent-edit locking (or at least conflict detection) on patient demographics + shared entities
- **PFO implementation:** Server — pessimistic edit locks (or conflict detection) on patient demographics + shared entities

### ECW-PT-6 — Patient Communication Settings depth

- **Screen & fields (eCW):** Patient Communication Settings depth (extends web-enable note 62): VOICE reminders + TEXT reminders each independently enabled w/ LANGUAGE (English/Spanish), preferred phone line, and preferred TIME-OF-DAY; h2h enrollment status; per-type reminder checklist (appointments, lab results, health maintenance, Rx confirmation, general) + "patient OPTS OUT of all practice communication" master switch + SEND MESSAGE NOW + communications Log; PATIENT REGISTRY SETTINGS dialog = registry-enabled w/ date, INACTIVE PATIENT (EMR-wide deactivation), EXCLUDE FROM REGISTRY SEARCH, and PROGRAMS membership list
- **PFO today:** no per-channel comm prefs or program membership
- **Gap:** communication preference engine + patient program/registry flags
- **PFO implementation:** `patients.html` — per-channel communication prefs (voice/SMS language, time-of-day) + program/registry flags
- **Status (AgentMR9, 2026-07-16): 🟢 LIVE + VERIFIED on build 1789** — new `GET/PUT /api/patient-communication-preferences` (staff JWT, org-scoped, patient-keyed) + new `patient_communication_preferences` table (one row per practice+patient; GET returns saved prefs or channel-on defaults, PUT upserts). `patients.html` gains a **Communication tab**: per-channel VOICE + TEXT reminders, LANGUAGE (English/Spanish), preferred phone line + time-of-day, per-type reminder checklist (appointments/lab results/health maintenance/Rx/general), "opt out of ALL communication" master switch, and PATIENT REGISTRY SETTINGS (registry-enabled, inactive-patient, exclude-from-registry-search, program membership). Additive UI (lazy-loads on tab open, isolated from the main patient save). **Live-proven:** GET defaults (exists=false) → PUT {spanish, voiceEnabled=false, excludeFromRegistrySearch=true, programs} → GET back round-trips + exists=true; foreign-practice PUT 403; unauth 401; `/ui/patients.html` 200. Gate scenario green on candidate. **Remaining (below the line):** h2h enrollment status, SEND MESSAGE NOW + communications Log, registry-enabled date (post-Aug).

---

## Review Epilog — 2026-07-24

- Live build updated to 1943; gate 251/251 GREEN; MR2–MR7 delivered, MR8/MR9/MR10 active.
- This domain has the highest 🟢 count (7/9): ECW-GL-1, ECW-GL-3, ECW-PT-1, ECW-PT-2, ECW-PT-4, ECW-PT-5, ECW-PT-6 all live-verified.
- ECW-GL-2 (UserFavoritesRoutes) backend committed; CF UI binding pending.
- AgentDLP owns ECW-GL domain (work-queue bar + record locking); AgentMR9 owns ECW-PT portal domain.
- No individual parity rows updated; status regeneration is AgentECW's lane on MasterSchedule sync.

