---
title: "PracticeForceOneECWMatrixAdminSecurity"
---

# ECW Screen & Field Inventory — Admin & Security (practice defaults, per-user settings, PSAC, audit)

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

- **Assessment & specification: ✅ COMPLETE.** All 34 findings on this page are fully inventoried (every field, tab, and navigation component + a PFO implementation target).
- **Implementation: 🟢 1 live/done · 🟡 33 working screen (build-slice or demo surface) · ⏸️ 0 deferred · ⬜ 0 not started (of 34).** Sequence follows the 24-theme shortlist in [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>); fleet directive in `AGENTS.md`.

> **Reading the numbers.** 🟢 = the deep every-field finding is substantially delivered. 🟡 = a **live, working screen exists** for this finding — either a real build-slice or one of AgentCF's live configurable screens (current live build) that covers this eCW screen at **demo depth** (deep field-by-field parity still open). The 🟡 demo-surface mapping is AgentECW's first pass from the AgentCF sheet; CF is confirming depth per row. So 🟡 means "you can click it today, not that it's finished."

Legend: 🟢 Live/Done (deep parity) · 🟡 Working screen — build-slice or demo surface (parity pending) · ⏸️ Deferred (post-demo) · ⬜ Not started.

| ID | Screen | Status |
|---|---|---|
| ECW-AD-1 | config depth | 🟡 Done |
| ECW-SEC-1 | PSAC | 🟢 Live-proven 1834 - confidential charts + generic Security Engine g |
| ECW-AD-2 | reference entities | 🟡 Done |
| ECW-AD-3 | immunization ops | 🟡 Done |
| ECW-AD-4 | Measure Configuration | 🟡 Done |
| ECW-AD-5 | staff-side portal account mgmt from the chart | 🟡 Done |
| ECW-AD-6 | minor-proxy lifecycle | 🟡 Done |
| ECW-AD-7 | Practice Defaults console | 🟡 Done |
| ECW-AD-8 | data-hygiene consoles | 🟡 Done |
| ECW-AD-9 | Security Settings console | 🟡 Done |
| ECW-AD-10 | per-user Settings console | 🟡 Done |
| ECW-AD-11 | User Settings tab | 🟡 Done |
| ECW-AD-12 | provider credentialing depth | 🟡 Done |
| ECW-AD-13 | staff directory + favorites | 🟡 Done |
| ECW-AD-14 | Product Activation hub | 🟡 Done |
| ECW-AD-15 | User Logs console | 🟡 Done |
| ECW-AD-16 | Letter Designer | 🟡 Done |
| ECW-AD-17 | per-user Settings depth | 🟡 Done |
| ECW-AD-18 | MANDATORY FIELDS admin | 🟡 Done |
| ECW-AD-19 | Out-of-Office + mandatory-fields extensions | 🟡 Done |
| ECW-AD-20 | Demographic LOCKED FIELDS + label printing | 🟡 Done |
| ECW-AD-21 | Devices Configuration console | 🟡 Done |
| ECW-AD-22 | GLOBAL ALERTS CONFIGURATION | 🟡 Done |
| ECW-AD-23 | PRACTICE DEFAULTS console | 🟡 Done |
| ECW-AD-24 | per-payer INSURANCE EDI CONFIG | 🟡 Done |
| ECW-AD-25 | CONFIGURE STRUCTURED DATA | 🟡 Done |
| ECW-AD-26 | VITALS CONFIGURATION engine | 🟡 Done |
| ECW-SEC-2 | BREAK-THE-GLASS | 🟡 Backend LIVE 1834 (MR8) - confidential-flag + audited break-glass  |
| ECW-SEC-3 | PROGRESS NOTE ACCESS LOGS | 🟡 Backend LIVE 1834 (MR8) - logRead read-audit primitive + /api/audi |
| ECW-AD-27 | CONFIGURABLE MANDATORY-FIELD + VALIDATION matrices | 🟡 Done |
| ECW-SEC-4 | PSAC ADMIN console | 🟡 Backend PROVEN LIVE 1834 (MR8 e2e verified) - full-CRUD /api/patie |
| ECW-SEC-5 | ADMINISTRATOR LOGS console + PSAC auto-secure | 🟡 Backend PROVEN LIVE 1834 (MR8 e2e verified) - /api/audit eventCate |
| ECW-SEC-6 | LOCK ECLINICALWORKS | 🟡 Backend committed — SessionLockRoutes POST `/api/session/lock|unlock` + GET `/api/session/status` (rides next deploy) |
| ECW-AD-28 | DI/procedure COMPENDIUM CONFIGURATION | 🟡 Done |

**Rollup: 1 live · 33 working screen · 0 deferred · 0 not started (of 34).**

*Regenerated 2026-07-21 from the unified status across all `MasterSchedule.xlsx` sheets + AgentECW's surface→ECW crosswalk. Documentation-only lane (AgentECW).*

---

### ECW-AD-1 — config depth

- **Screen & fields (eCW):** config depth: vitals dictionary (custom vitals, mandatory/display, carry-forward rules, auto-calc flags, growth-chart sources, CPT association), language/ISO + labs/DI/procedures MAPPING wizards
- **PFO today:** settings.html
- **Gap:** clinical-dictionary admin surfaces
- **PFO implementation:** New admin clinical dictionaries — vitals dictionary + mapping wizards (master row ECW-AD-26)

### ECW-SEC-1 — PSAC

- **Screen & fields (eCW):** PSAC: sensitive-chart access groups (hide patients from lookup for unauthorized users, BREAK-THE-GLASS override w/ audit, scope by facility/provider/visit-type, confidential-note marking) + Rx security delegation (which staff transmit under provider)
- **PFO today:** RBAC roles only
- **Gap:** patient-level confidentiality + break-the-glass + delegation
- **PFO implementation:** Extend `rbac-admin.html` + `patient-chart.html` — PSAC confidential-chart groups, hide-in-lookup, Rx delegation

### ECW-AD-2 — reference entities

- **Screen & fields (eCW):** reference entities: attorneys, employers, case managers, GUARANTORS, referring physicians, insurance groups, facility groups, zip codes, MERGE PATIENT utility, interface dashboard
- **PFO today:** payers/practices/providers
- **Gap:** guarantor + referring-physician + employer/attorney entities, patient merge tool
- **PFO implementation:** New admin reference entities — guarantors, referring physicians, employers/attorneys/case managers + patient MERGE tool

### ECW-AD-3 — immunization ops

- **Screen & fields (eCW):** immunization ops: vaccine LOT NUMBER inventory, imm form setup/designer, series default setup, STATE REGISTRY export w/ status + history
- **PFO today:** —
- **Gap (mock-seam):** registry export surface
- **PFO implementation:** Immunizations admin — lot inventory, form designer, series defaults, state-registry export (mock)

### ECW-AD-4 — Measure Configuration

- **Screen & fields (eCW):** Measure Configuration: quality measures individually enable/disable with visible numerator/denominator clinical definitions per measure
- **PFO today:** rules.html generic
- **Enh:** measure library admin surface (pairs w/ MAQ dashboard ENH)
- **PFO implementation:** Extend `rules.html` — quality-measure library admin (enable/disable w/ definitions)

### ECW-AD-5 — staff-side portal account mgmt from the chart

- **Screen & fields (eCW):** staff-side portal account mgmt from the chart: Web Enable button on Patient Communication Settings, Self-Managed vs PROXY-Managed account type, Add Proxy, Set/Reset Password, Unlock, Disable, per-type reminder opt-ins (appts/labs/health maint/Rx confirm/general)
- **PFO today:** portal-users.html separate admin list
- **Gap:** web-enable + proxy + unlock/reset actions reachable from the patient record; per-type reminder prefs
- **PFO implementation:** Extend `patient-chart.html` + `portal-users.html` — web-enable/proxy/set-password/unlock from the chart; per-type reminder prefs

### ECW-AD-6 — minor-proxy lifecycle

- **Screen & fields (eCW):** minor-proxy lifecycle: minor accounts are Proxy-Managed with Restricted/Complete access levels and a RESTRICTED-ACCESS-FROM date (auto-flips proxy to restricted at the patient's 12th birthday / age of majority); Web Enable Patient dialog lists all proxy users w/ access-until, relation, primary flag
- **PFO today:** no proxy model
- **Gap:** pediatric proxy access w/ auto age-out (HIPAA adolescent privacy)
- **PFO implementation:** Server + `portal-users.html` — proxy-managed accounts w/ restricted-access age-out (pediatric privacy)

### ECW-AD-7 — Practice Defaults console

- **Screen & fields (eCW):** Practice Defaults console: practice-wide behavior toggles (visit-complete name-color triggers, immunization billable defaults + admin CPT, vitals frequencies w/ CPT-linked billable flag, med carry-forward window + confirm prompt, Rx stop-date calc, smart-form display, med-rec classic/modern, per-facility picklists, jellybean config)
- **PFO today:** settings.html thin
- **Gap:** practice-behavior defaults admin surface
- **PFO implementation:** Extend `settings.html` — practice-behavior defaults (visit-complete colors, carry-forward, jellybean config) (master ECW-AD-23)

### ECW-AD-8 — data-hygiene consoles

- **Screen & fields (eCW):** data-hygiene consoles: Uncoded Allergies report maps free-text allergies to coded entries (exact-match / suggestion / manual search per patient, replaces uncoded rows, logged)
- **PFO today:** none
- **Enh:** coded-data remediation consoles (allergies today; same pattern fits meds/problems)
- **PFO implementation:** New data-hygiene consoles — uncoded-allergy remediation pattern (extend to meds/problems)

### ECW-AD-9 — Security Settings console

- **Screen & fields (eCW):** Security Settings console: action-level permission catalog (hundreds of named security items — Delete Payments, Add/Remove CPT in claim, Changing Fee Schedule, ERA... — grouped in security groups, granted per role OR per user), Role Membership user-checkbox matrix, role-based vs user-based mode toggle, Facility Based Security scoping, mandatory password-change-on-hard-reset policy
- **PFO today:** rbac-admin.html role grants (coarser resource-level)
- **Enh:** action-level permission registry + role-membership matrix UI + facility scoping; extends [security] PSAC note
- **PFO implementation:** Extend `rbac-admin.html` — action-level permission registry, role-membership matrix, facility scoping

### ECW-AD-10 — per-user Settings console

- **Screen & fields (eCW):** per-user Settings console: My Providers scoping (which providers a staffer works/schedules for), Out-of-Office date range w/ auto-forward of inbox items to a covering user, and admin bulk Copy-My-Settings to other users by facility/role
- **PFO today:** settings.html is practice-level; no per-user prefs, no out-of-office coverage forwarding
- **Enh:** per-user preference profile + out-of-office inbox forwarding (pairs w/ I3 team-inbox) + copy-settings-to-users admin action
- **PFO implementation:** New per-user preferences engine — Server: USER_PREFS; settings sheet per user (biggest configurability gap)

### ECW-AD-11 — User Settings tab

- **Screen & fields (eCW):** User Settings tab: per-user workflow tuning — drug-interaction popup severity threshold (Severe/Moderate/Mild/None per user), MY HOME SCREEN selector (which page the app opens to), default right-panel content, picklist-by-facility
- **PFO today:** fixed landing page + global behavior
- **Enh:** per-user home-page preference + per-user alert-threshold settings (small, high perceived polish)
- **PFO implementation:** User-preferences — per-user home screen, interaction-popup severity threshold, right-panel default

### ECW-AD-12 — provider credentialing depth

- **Screen & fields (eCW):** provider credentialing depth: provider record carries taxonomy code, specialty, MULTIPLE DEA numbers w/ active/term dates + default, NPI/UPIN/EMC IDs, Medicare/Medicaid/Champus group numbers, state/specialty/anesthesia licenses w/ expiration dates, prescriptive authority#, mammography cert
- **PFO today:** providers.html basic name/NPI-level record
- **Gap:** provider credentialing model (license/DEA expiry feeds claim validity + Rx authority; expiry alerts natural autopilot candidate)
- **PFO implementation:** Extend `providers.html` — credentialing model (multi-DEA, licenses w/ expiry, group numbers); expiry alerts = autopilot

### ECW-AD-13 — staff directory + favorites

- **Screen & fields (eCW):** staff directory + favorites: staff records carry RESOURCE yes/no (staff bookable as a scheduling resource), Staff Lookup dialog w/ real-time search by name/role/location + Active/Inactive status + My Favorites filter, admin Configure-My-Favorites console curates favorites per role/location w/ copy-from-user
- **PFO today:** users.html flat list, no resource flag or favorites
- **Enh:** staff-as-resource flag for scheduling + favorites-scoped staff pickers
- **PFO implementation:** Extend `users.html` — staff-as-resource flag, favorites-scoped staff pickers, configure-favorites admin

### ECW-AD-14 — Product Activation hub

- **Screen & fields (eCW):** Product Activation hub: on-demand module activation console (Mobile, Patient Portal, e-Prescription, Touch, P2P, Devices) w/ per-module activation status badge + Settings link
- **PFO today:** settings.html/ai-features.html flat flags
- **Enh:** module-level activation surface w/ status + per-module settings drill-in
- **PFO implementation:** Extend `settings.html` — module activation hub w/ status badges + per-module settings drill-in

### ECW-AD-15 — User Logs console

- **Screen & fields (eCW):** User Logs console: per-user login/logout audit trail w/ computer name + IP, server-side vs user-station timestamps, daily filter, currently-logged-in / total-logins / total-logouts rollups, print + export
- **PFO today:** audit.html is event audit, no session/login log surface
- **Enh:** login-session audit view (user, IP, login/logout times, active-session count)
- **PFO implementation:** Extend `audit.html` — login-session log view (user, IP, login/logout, active sessions)

### ECW-AD-16 — Letter Designer

- **Screen & fields (eCW):** Letter Designer: template designer w/ custom name/category/description/default folder, TAG TYPE context (e.g. Referrals-Outgoing), MERGE-FIELD tag library (outgoing auth dates, dx codes/names, from-provider address lines...), design surface overlaying a payer's actual prior-auth PDF, enable-mapping + new-template; letters render as Web PDF or Word plugin from the referral/chart
- **PFO today:** no letter/template designer
- **Gap:** merge-field letter templates (referral, patient letters) w/ PDF form mapping
- **PFO implementation:** Letters module — merge-field letter template designer w/ PDF form mapping

### ECW-AD-17 — per-user Settings depth

- **Screen & fields (eCW):** per-user Settings depth (field detail extending the earlier per-user settings notes): User Settings sheet = ~25 behavior toggles (apply-my-facility to encounter lists, ICD-association mode none/one/all, auto-carry dx into outgoing referral w/ use-practice-default override, fax-inbox arrival order top/bottom, signature-pad-in-fax-preview, load picklists by facility, show-only-billable-visits on resource schedule, cancel-Rx alert popup-vs-toast, eligibility-vs-demographics MISMATCH red-bold indicator on the appt panel, structured-data display style, MY HOME SCREEN pick, default HPI/examination categories, fax auto-refresh minutes, EMCoder version, default zoom); Defaults sheet = default superbills (office vs out-of-office), lab/imaging requisition forms, growth-chart UOM, progress-note style + template mode, SIGNATURE-PAD device pick, default new-patient primary service location, default referral visit count, default copay payment method, lab/DI review landing + lookup/sort/output-format defaults; JELLYBEAN SETTINGS maps each queue bean to a default landing screen
- **PFO today:** no per-user preference system
- **Gap:** per-user preferences engine (the single biggest configurability gap vs eCW)
- **PFO implementation:** User-preferences engine — ~25 behavior toggles + defaults sheet + jellybean landing map (with ECW-AD-10)

### ECW-AD-18 — MANDATORY FIELDS admin

- **Screen & fields (eCW):** MANDATORY FIELDS admin: File>Mandatory Fields lets the practice choose which fields are REQUIRED per entity (Configure Referral / Provider / Document mandatory fields via checkbox picker; core fields locked); required fields then render w/ asterisks + block save
- **PFO today:** validation hard-coded
- **Gap:** admin-configurable required-field policy per entity (pairs w/ dynamic-forms engine)
- **PFO implementation:** CF binding — admin-configurable required fields per entity (asterisk render + save block)

### ECW-AD-19 — Out-of-Office + mandatory-fields extensions

- **Screen & fields (eCW):** Out-of-Office + mandatory-fields extensions: OOO dialog has three tabs (Set MY out-of-office / Set for OTHER USERS (admin) / OOO USERS report) w/ two modes — DELEGATE (individual or GROUP sees my queues) vs REASSIGN (items move) — over a date+time range; Demographic Mandatory Fields is a per-field REQUIRED matrix across three contexts (Demographic edit / Guarantors / PreRegistration) covering fields incl birth sex, birth order, gender identity, ethnicity, insurance-patient relationship
- **PFO today:** none
- **Gap:** absence coverage w/ delegate/reassign + context-scoped required-field matrix
- **PFO implementation:** User-preferences — out-of-office delegate/reassign over date range; CF: per-context required matrices

### ECW-AD-20 — Demographic LOCKED FIELDS + label printing

- **Screen & fields (eCW):** Demographic LOCKED FIELDS + label printing: per-field EDIT LOCKS restricting non-admin users from changing chosen demographics fields (tabs Demographics/Additional Info/All — e.g. lock Fee Schedule); LABELS designer builds printable (Dymo) label templates from merge tags — Appointment card, Patient, PCP, Referrer, and PATHOLOGY specimen labels (facility/item/control no/location)
- **PFO today:** none
- **Gap:** field-level edit locks + label templates (specimen labeling pairs w/ orders)
- **PFO implementation:** CF binding — field-level demographic edit locks; label designer = low (with ECW-AD-21)

### ECW-AD-21 — Devices Configuration console

- **Screen & fields (eCW):** Devices Configuration console (extends labels + Device DI notes): per-workstation device settings w/ MEDICAL vs NON-MEDICAL device tabs and a device rail (Dymo label printer, scale, JTECH, iPort) — Dymo pane holds template file paths for address labels, APPOINTMENT CARDS, and LAB SPECIMEN labels incl a barcode variant
- **PFO today:** none
- **Enh (low):** workstation device-profile settings (specimen/barcode labels pair w/ orders)
- **PFO implementation:** Low — workstation device profiles (Dymo templates, specimen/barcode labels pair w/ orders)

### ECW-AD-22 — GLOBAL ALERTS CONFIGURATION

- **Screen & fields (eCW):** GLOBAL ALERTS CONFIGURATION: practice-level alert LIBRARY w/ scope tabs (Appt & Billing / Clinical / Both), each alert type = COLOR CHIP + name + description (samples: Information Missing, Additional Time, Reminder, Annual Co-Pay, Fasting); assigning to a patient captures type + notes and raises a bell icon on their scheduler entries (extends the 5-category check-in Alerts popup note)
- **PFO today:** no patient-alert model
- **Gap:** configurable color-coded patient alert library
- **PFO implementation:** New global-alerts admin — color-coded practice alert library + per-patient assignment (feeds ECW-FO-7)

### ECW-AD-23 — PRACTICE DEFAULTS console

- **Screen & fields (eCW):** PRACTICE DEFAULTS console (practice-wide sibling of the per-user Settings engine): left tabs Front Office / Mid Office / Interface / General / Labs / Styles / Performance / Portal / Options / Scanning-Printing; Front Office alone = defaults for new patient (sex/state), patient picture source, ACCOUNT-NO PREFIX rules, enable PayTo/Rendering/Supervising provider fields on the appointment dialog, demographics PROPER-CASE conversion, patient-lookup Active-vs-All, resource-schedule default color, a REFERRAL VISIT DETAILS block (~10 toggles: auto-populate dx into outgoing referral, attach progress notes/medical summary by default, suppress referral-required prompt, include cover page, default referral END-DATE days, referrals w/ CPT counts), and ELIGIBILITY VIEWER version pick (Modern/Classic/Older) + "Enable PCP Verification from Eligibility Report"; manual-eligibility notes get EDI-character VALIDATION w/ built-in FIND-AND-REPLACE remediation
- **PFO today:** settings.html is flat + sparse
- **Gap:** practice-defaults console w/ per-domain tabs
- **PFO implementation:** Extend `settings.html` — practice-defaults console w/ per-domain tabs (front/mid office, labs, portal, scanning)

### ECW-AD-24 — per-payer INSURANCE EDI CONFIG

- **Screen & fields (eCW):** per-payer INSURANCE EDI CONFIG (Update Insurance dialog, extends the payer-specific billing-ID overrides note): tab strip per payer = EDI-ANSI / ERA / ELIGIBILITY / ASC State / Misc Info / 278-277 / CMS 1500 / Dental / DHA / Ref.Provider / E&M Coder / 278; the Eligibility tab alone is a ~24-flag X270 behavior matrix (send provider, TRN always, best-match CPT, DoS-as-DoI, SSN, insured N4, AccessCard number, prefix/suffix, alternate name, legacy NPI, EB addl info, EB date range, OTAF in primary, group number, relationship, do-not-send-dependent, appointment-facility NPI) + "ELIGIBILITY PCP NPI MATCH REQUIRED" (drives the PCP-Matched / PCP Mismatched / PCP-Not-Required chips + clearinghouse-PCP mismatch column in Eligibility Admin)
- **PFO today:** single global 270 template
- **Gap:** per-payer 270/271 behavior flags (real payers diverge; this is why eCW eligibility works across Medicaid MCOs)
- **PFO implementation:** Extend `payers.html` — per-payer eligibility/EDI behavior flag matrix feeding Edi270Generator (~24 X270 flags + PCP-match)

### ECW-AD-25 — CONFIGURE STRUCTURED DATA

- **Screen & fields (eCW):** CONFIGURE STRUCTURED DATA (the demographics custom-field engine behind the SDOH panel): admin defines fields w/ NAME, TYPE (Boolean / Structured Text / etc), MULTI-SELECT, MANDATORY, DEFAULT, IS-SEARCHABLE, DISPLAY-ON-PROGRESS-NOTE flag, and TRIGGER = conditional CHILD fields (checking Homeless reveals "Homeless Status"); Grid-vs-Wizard render mode, drag REORDER (Configure Order), Customize Structured Text value lists; DECEASED flag adds a "(DECEASED)" chart banner and prompts to REMOVE the patient as contact from the N other charts referencing them
- **PFO today:** DYNAMIC_FORMS_CONFIGURATION covers patient-facing forms only
- **Gap:** admin-defined demographics fields w/ conditional children + note surfacing (AgentCF-adjacent: same sections->questions shape)
- **PFO implementation:** CF binding (core) — Configure Structured Data engine on demographics (types, triggers, reorder, note surfacing)

### ECW-AD-26 — VITALS CONFIGURATION engine

- **Screen & fields (eCW):** VITALS CONFIGURATION engine: per-patient VITALS PREFERENCES picks the percentile dataset (CDC/WHO normal, FENTON preterm w/ gestational age, DOWN SYNDROME CDC); practice CONFIGURE VITALS = custom vitals mapped to a STANDARD VITAL TYPE, per-vital MANDATORY + display-UOM, auto CARRY-FORWARD height after age N (per sex), auto hypertension/prehypertension calc, WHO-0-2/CDC growth-chart switch, "track IMPLAUSIBLE CHANGES in vital values from previous visit", QUALIFIERS, ASSOCIATE CPT (vitals that bill), Migrate + Additional Configuration
- **PFO today:** fixed vitals list
- **Gap:** configurable vitals w/ percentile datasets + plausibility guard
- **PFO implementation:** New vitals-configuration admin — custom vitals, percentile datasets, carry-forward, plausibility guard, CPT association

### ECW-SEC-2 — BREAK-THE-GLASS

- **Screen & fields (eCW):** BREAK-THE-GLASS (P.S.A.C. Confidential Note): confidential-flagged patients block access w/ "you do not have permission... provide a reason below and click Yes" — reason-required override, No exits; pairs w/ section-level pessimistic locks
- **PFO today:** no confidential-patient tier
- **Gap:** confidential-chart flag + audited break-the-glass override (VIP/employee charts)
- **PFO implementation:** Patient-chart — break-the-glass reason-required override w/ audit (confidential patients)

### ECW-SEC-3 — PROGRESS NOTE ACCESS LOGS

- **Screen & fields (eCW):** PROGRESS NOTE ACCESS LOGS: from the note Details menu (Generate Access Logs / Copy-Paste View / Chart Access / RELEASE CONCUR LOCK) — per-SECTION audit of VIEWED vs MODIFIED vs CREATED actions (encounter date, patient id, section, action, action-by, timestamp; Encounter-Associated vs Others tabs) w/ EXPANDABLE VALUE SNAPSHOTS showing exactly what data each modification wrote; printable
- **PFO today:** no view-level audit
- **Gap:** note-section access log incl read-audit (HIPAA access-accounting) + copy/paste provenance view
- **PFO implementation:** Extend `audit.html` — note-section access log incl. VIEWED actions + value snapshots (HIPAA access accounting)

### ECW-AD-27 — CONFIGURABLE MANDATORY-FIELD + VALIDATION matrices

- **Screen & fields (eCW):** CONFIGURABLE MANDATORY-FIELD + VALIDATION matrices: DEMOGRAPHIC MANDATORY FIELDS console = per-field required checkboxes across three contexts (Demographic / Guarantors / PreRegistration) over the whole patient field list (address, birth sex, birth order, cell, city, DOB, email, employer, ethnicity...); IMM/T.INJ VALIDATIONS = required-field matrix per STATUS (Pending / Administered / Partially Administered / Not Administered / Given in Past) x field (given by, given date, dose, dose number, lot, route) + separate LOT VALIDATIONS (manufacturer/expiry/dose required); imm catalog rows also carry a VALID AGE RANGE (from/to w/ tolerance)
- **PFO today:** validation hard-coded per route
- **Gap:** admin-configurable per-context required-field engine (feeds ConfigurableForms/CR work)
- **PFO implementation:** CF binding — per-context mandatory-field + per-status validation matrices (imm/lot validations)

### ECW-SEC-4 — PSAC ADMIN console

- **Screen & fields (eCW):** PSAC ADMIN console (extends break-the-glass note): PSAC GROUPS tree (Employees, HIV Patients, Training...) each w/ name+description, per-group USER MEMBERSHIP checklist w/ provider/staff filter + add-user-to-group bulk toggle, Advanced Settings; global toggles = HIDE PSAC PATIENTS IN LOOKUP for unauthorized users + ENABLE PSAC BREAK-THE-GLASS; delete guard: a group associated to confidential patients/encounters CANNOT be deleted; preventive-medicine module likewise supports per-practice CUSTOM items/categories + CONFIGURE MANDATORY FIELDS + copy/merge from prior encounters w/ "review all copied/merged data" warning
- **PFO today:** role flags only
- **Gap:** patient-cohort access groups admin
- **PFO implementation:** `rbac-admin.html` — PSAC groups admin (membership checklists, delete guards, global toggles)

### ECW-SEC-5 — ADMINISTRATOR LOGS console + PSAC auto-secure

- **Screen & fields (eCW):** ADMINISTRATOR LOGS console + PSAC auto-secure: central audit console w/ ~30 tabbed logs — Login/Logout, Sessions, Account Lockout, Patient/Staff/Provider Demographics changes, Scheduling, PATIENT LOOKUP, Order Set, PHI EXPORT + PHI IMPORT, Authentication Setting, BREAK THE GLASS (user/patient/encounter/access timestamp/outcome/IP, exportable), Review/Access Logs, Formulary, Prescriptions, Registry/QM, Patient Docs, Print Logs, CDSS Admin, System Time, Missing Logs, Session Logs, Dashboard Encounter Logs, PHA Transaction Logs+Detail, SECURITY SETTING ACCESS LOG, Specialty/Smart Forms, Worksheets, Print Medical Summary, Letter Logs; PSAC ADVANCED SETTINGS pre-secure visits automatically by FACILITY / PROVIDER / VISIT TYPE lists (unselected = all)
- **PFO today:** single audit trail table
- **Gap:** domain-partitioned audit console + auto-secured visit rules
- **PFO implementation:** Extend `audit.html` — domain-partitioned log tabs (~30) + PSAC auto-secure visit rules

### ECW-SEC-6 — LOCK ECLINICALWORKS

- **Screen & fields (eCW):** LOCK ECLINICALWORKS: user-invoked SESSION LOCK — keeps the current screen, blocks access while away, password to unlock (w/ Log Out escape warning unsaved data lost); notes: lock does not save unsaved data, session timeout still logs out
- **PFO today:** none
- **Gap:** workstation lock (HIPAA walk-away)
- **PFO implementation:** Staff app chrome — session lock (walk-away password lock preserving screen)

### ECW-AD-28 — DI/procedure COMPENDIUM CONFIGURATION

- **Screen & fields (eCW):** DI/procedure COMPENDIUM CONFIGURATION: per-test editor = name, CATEGORY, MIDMARK device link, OVERDUE \<N> DAYS (drives outstanding-order aging), LOINC mapping, CPT SETUP picked from the FEE SCHEDULE (editor shows Id/chg-code/CPT/name/FEE/ALLOWED/COST/TOS/M1-M3 per schedule w/ effective date), ABN SETUP, per-DI-company ALIAS CODES, canned INSTRUCTIONS + SCHEDULING NOTES blocks, and flags: show pathology details / DO NOT PUBLISH TO PORTAL / vaccine-admin-record / EXCLUDE FROM MU / IN-HOUSE / APPROVAL REQUIRED / inactive; catalog keeps hospital-vs-IN-HOUSE variants of the same test
- **PFO today:** none
- **Gap:** order-compendium admin w/ fee-schedule link
- **PFO implementation:** Orders admin — DI/procedure compendium editor (LOINC, CPT from fee schedule, ABN, aliases, in-house flags)

---

## Review Epilog — 2026-07-24

- Live build updated to 1943; gate 251/251 GREEN; MR2–MR7 delivered, MR8/MR9/MR10 active.
- ECW-SEC-1 (PSAC/confidential charts) and ECW-SEC-2/3/4/5 backends remain live via MR8 Security Engine (build 1834); no row regressions observed.
- ECW-SEC-6 (session lock) backend committed; CF UI binding pending — status unchanged at 🟡.
- No individual parity rows updated; status regeneration is AgentECW's lane on MasterSchedule sync.

