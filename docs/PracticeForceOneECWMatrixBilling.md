---
title: "PracticeForceOneECWMatrixBilling"
---

# ECW Screen & Field Inventory — Billing / RCM (claims, posting, eligibility, cases, guarantors)

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

- **Assessment & specification: ✅ COMPLETE.** All 31 findings on this page are fully inventoried (every field, tab, and navigation component + a PFO implementation target).
- **Implementation: 🟢 1 live/done · 🟡 30 working screen (build-slice or demo surface) · ⏸️ 0 deferred · ⬜ 0 not started (of 31).** Sequence follows the 24-theme shortlist in [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>); fleet directive in `AGENTS.md`.

> **Reading the numbers.** 🟢 = the deep every-field finding is substantially delivered. 🟡 = a **live, working screen exists** for this finding — either a real build-slice or one of AgentCF's live configurable screens (current live build) that covers this eCW screen at **demo depth** (deep field-by-field parity still open). The 🟡 demo-surface mapping is AgentECW's first pass from the AgentCF sheet; CF is confirming depth per row. So 🟡 means "you can click it today, not that it's finished."

Legend: 🟢 Live/Done (deep parity) · 🟡 Working screen — build-slice or demo surface (parity pending) · ⏸️ Deferred (post-demo) · ⬜ Not started.

| ID | Screen | Status |
|---|---|---|
| ECW-BI-1 | Payments workspace | 🟡 Done |
| ECW-BI-2 | Claim window | 🟡 Done |
| ECW-BI-3 | Payment Advisory | 🟡 Done |
| ECW-BI-4 | CPT-level Payment Posting | 🟡 Done |
| ECW-BI-5 | payment posting modes | 🟡 Done |
| ECW-BI-6 | payment batch controls | 🟡 Done |
| ECW-BI-7 | in-note Billing screen | 🟡 Done |
| ECW-BI-8 | per-patient paper-statement OPT-OUT from demographics Options menu | 🟡 Done |
| ECW-BI-9 | paper-claim printing | 🟡 Done |
| ECW-BI-10 | result-based billing + charge automation defaults | 🟡 Done |
| ECW-BI-11 | payer-specific provider billing overrides | 🟡 Done |
| ECW-BI-12 | Guarantor Information dialog | 🟡 Done |
| ECW-BI-13 | Guarantor Account Balances view | 🟡 Done |
| ECW-BI-14 | televisit claim detail | 🟡 Done |
| ECW-BI-15 | Visit Type Charge Configuration | 🟡 Done |
| ECW-BI-16 | per-appointment CLAIM PROVIDER override popup | 🟡 Done |
| ECW-BI-17 | CASES module | 🟡 Done |
| ECW-BI-18 | structured BILLING NOTES | 🟡 Done |
| ECW-BI-19 | Patient Charge Details window | 🟡 Backend committed — PatientChargeDetailsRoutes PC/SC split + fee-schedule override; CF to render popup |
| ECW-BI-20 | REMAINING DEDUCTIBLES on the appointment financial panel | 🟡 Backend committed — EligibilityBenefitBrowserRoutes `/api/eligibility-benefits` deductible-by-category (payer-type-aware mock); CF EligibilityCF slice to bind |
| ECW-BI-21 | 271 BENEFIT BROWSER on Patient Charge Details | 🟡 Backend committed — EligibilityBenefitBrowserRoutes copay/coinsurance/deductible tabs + `/api/eligibility-benefits/categories` X12 lookup; CF EligibilityCF slice to bind |
| ECW-BI-22 | SLIDING FEE SCHEDULE module | 🟡 Done |
| ECW-BI-23 | ELIGIBILITY ADMIN + Report Summary | 🟡 Done |
| ECW-BI-24 | MANUAL eligibility VERIFICATION | 🟡 Done — POST `/api/eligibility-checks/{id}/manual-verify` + PCP-match tracking via EligibilityRoutes; CF EligibilityCF to surface the manual form |
| ECW-BI-25 | ELIGIBILITY DEMOGRAPHICS COMPARISON | 🟡 Done |
| ECW-BI-26 | Patient-Insurance Detail | 🟡 Done |
| ECW-BI-27 | Case Details FULL FIELDS | 🟡 Done |
| ECW-BI-28 | case WORKERS-COMP extras | 🟡 Done |
| ECW-BI-29 | dx-driven CPT automation | 🟡 Done |
| ECW-BI-30 | PQRS/MIPS QUALITY MEASURES capture at billing | 🟡 Backend — QualityMeasuresRoutes committed; CF to render popup |
| ECW-BI-31 | CLAIM STATUS CODE workflow engine | 🟢 Live - CF Claim StatusesCF (1709) |

**Rollup: 1 live · 30 working screen · 0 deferred · 0 not started (of 31).**

*Regenerated 2026-07-21 from the unified status across all `MasterSchedule.xlsx` sheets + AgentECW's surface→ECW crosswalk. Documentation-only lane (AgentECW).*

---

### ECW-BI-1 — Payments workspace

- **Screen & fields (eCW):** Payments workspace: filter bar (payment-from/check#/payment-id/facility/patient/insurance/status/date-range), payment BATCHES, "Fast Pt Payment (F5)" quick entry, page total + posted vs unposted amounts
- **PFO today:** payments.html exists (ERA auto-post)
- **Gap:** batch-based manual posting UX + posted/unposted reconciliation totals + fast patient-payment entry
- **PFO implementation:** Extend `payments.html` — batch filter bar, posted/unposted reconciliation totals, fast patient-payment entry; Server: PAYMENT_BATCH entity

### ECW-BI-2 — Claim window

- **Screen & fields (eCW):** Claim window: 3-provider hierarchy (Billing/Rendering/Supervising), claim-status lifecycle dropdown (Ready to Submit Electronic/Paper/etc), tabs = ICD&CPT \| Insurances&Payments (multi-payer Bill-To w/ subscriber+rel) \| Additional Info, bottom tabs Summary\|Errors\|Claim Logs\|Suppressed Errors, patient-portion vs total (charges/payments/balance), Print HCFA (02-12), per-line adjustments, jump to Prog Notes
- **PFO today:** claims.html + claim-review.html
- **Gap:** multi-payer bill-to on one claim, supervising/rendering split, claim error+log tabs in-window, HCFA print, patient-portion rollup
- **PFO implementation:** Extend `claims.html`/`claim-review.html` — multi-payer bill-to, billing/rendering/supervising triple, in-window error+log tabs, patient-portion rollup; New: CMS-1500 PDF render

### ECW-BI-3 — Payment Advisory

- **Screen & fields (eCW):** Payment Advisory (manual EOB posting): check amount vs posted amount vs remaining balance live recon; add claims to check; per-claim grid billed/allowed/deduct/coins/copay/paid/adjustment/withhold; keyboard flow Go(F3) Post CPT(F4) Save(F5) View ERA(F6); batch Lock
- **PFO today:** remittance.html (ERA auto-post)
- **Gap:** manual check/EOB posting workspace w/ live check-balance reconciliation + CPT-level posting
- **PFO implementation:** New `payment-posting.html` (manual EOB/check workspace beside `remittance.html`) — live check-balance reconciliation, add-claims-to-check

### ECW-BI-4 — CPT-level Payment Posting

- **Screen & fields (eCW):** CPT-level Payment Posting: per-CPT line posting (billed/allowed/deduct/coins/copay/paid/adj/balance + action code) validated against FEE SCHEDULE; bill-to cascade routing per line (Bill Primary/Secondary/Tertiary/Patient w/ F-keys) driving next-responsible-party; claim-status auto-update; financial adjustments w/ reason codes; Auto Post(F2)/Save&Next(F3); live current-vs-new balance
- **PFO today:** remittance auto-post only
- **Gap:** line-level manual posting + fee-schedule variance + responsibility cascade
- **PFO implementation:** Same `payment-posting.html` — CPT-line posting grid, fee-schedule variance, bill-to responsibility cascade, auto-post keys

### ECW-BI-5 — payment posting modes

- **Screen & fields (eCW):** payment posting modes: Patient-based \| Insurance-based \| Guarantor-based tabs; guarantor concept exists
- **PFO today:** no guarantor model visible
- **Gap:** guarantor (responsible party) entity + posting by guarantor
- **PFO implementation:** `payment-posting.html` mode tabs (patient/insurance/guarantor); depends on GUARANTOR entity (ECW-BI-12)

### ECW-BI-6 — payment batch controls

- **Screen & fields (eCW):** payment batch controls: batches w/ Lock Payment(s) (posting lock for audit), payment types (check/etc), EOB date tracking, notes w/ TimeStamp
- **PFO today:** —
- **Gap:** payment batch lifecycle + lock
- **PFO implementation:** Extend `payments.html` — batch lifecycle w/ posting lock, EOB date, timestamped notes

### ECW-BI-7 — in-note Billing screen

- **Screen & fields (eCW):** in-note Billing screen: E&M CODER assist + Medicare Edits (CCI) check at point of care; CPT grid w/ per-line ICD1-4 pointer mapping; FOLLOW-UP quick-interval buttons writing to scheduling; Disposition & Communication; confidential note
- **PFO today:** practice-ehr-charge-review after the fact
- **Gap:** E&M coding assist + claim edits in encounter + follow-up capture→scheduling link
- **PFO implementation:** Extend `practice-ehr-charge-review.html` — E&M coder assist + CCI edits at encounter close; follow-up chips writing to calendar

### ECW-BI-8 — per-patient paper-statement OPT-OUT from demographics Options menu

- **Screen & fields (eCW):** per-patient paper-statement OPT-OUT from demographics Options menu (pairs w/ portal e-statements)
- **PFO today:** statements.html batch only
- **Enh:** statement delivery preference per patient
- **PFO implementation:** Extend `patients.html` (options) + `statements.html` honors per-patient delivery preference

### ECW-BI-9 — paper-claim printing

- **Screen & fields (eCW):** paper-claim printing: HCFA-1500 (CMS-1500) and state paper form printing built into workstation settings
- **PFO today:** EDI 837 electronic only, no paper CMS-1500 render
- **Enh:** printable CMS-1500 PDF from claim (payers w/o EDI + patient/legal requests); low priority
- **PFO implementation:** New CMS-1500 printable PDF from `claims.html` (low priority)

### ECW-BI-10 — result-based billing + charge automation defaults

- **Screen & fields (eCW):** result-based billing + charge automation defaults: Labs tab enables auto-charge when a result posts (CPT+dx associated to result), lab-result CC-list copies to internal providers; Styles tab enforces controlled-Rx fax bans per CSA schedule I-V
- **PFO today:** charges are manual/encounter-driven
- **Enh:** result-triggered charge hook (pairs w/ immunization billable auto-charge note) + controlled-substance transmission policy config
- **PFO implementation:** Server — result-posted charge hook (CPT+dx per result) + controlled-Rx transmission policy config

### ECW-BI-11 — payer-specific provider billing overrides

- **Screen & fields (eCW):** payer-specific provider billing overrides: Provider Billing Data for Insurance dialog (per-provider per-payer legacy IDs: HCFA box 24J, 33 PIN#, 33 GRP#, EMC Provider Id BA0-2, Commercial # BA0-15, Provider Number CA0-28, tax-ID/site-ID/billing-address override, copy-to-all-providers) + "by Payer ID/Facility/Service Dates" variant (numbers scoped to payer+facility with effective service-date ranges, override individual/group IDs at claim creation) + Group NPI Rule screen (rule maps a group NPI to provider/facility/insurance sets w/ effective dates)
- **PFO today:** payers.html + providers.html have no per-payer provider-number overrides or group-NPI rules; 837 uses flat provider identifiers
- **Gap:** payer/facility-scoped provider billing-ID override model feeding claim generation
- **PFO implementation:** Extend `payers.html` + `providers.html` — per-payer/facility provider billing-ID overrides + group-NPI rules feeding Edi837Generator

### ECW-BI-12 — Guarantor Information dialog

- **Screen & fields (eCW):** Guarantor Information dialog (field detail for the guarantor entity in note 42): Type (person/company), Last/Company Name, guarantor Account No., DOB, SSN, phone, e-mail, gender; Address tab = mailing vs street address w/ address VALIDATE; Employment tab = linked employer + work phone/ext + OK-to-leave-message-at-work consent; Other tab; guarantor lookup searches by Name/SSN/DOB/Account No/Phone w/ View Account
- **PFO today:** no guarantor entity
- **Gap:** full guarantor model w/ these fields + guarantor account view
- **PFO implementation:** Server: GUARANTOR entity (person/company, address validate, employment, lookup) + `patients.html` responsible-party UI

### ECW-BI-13 — Guarantor Account Balances view

- **Screen & fields (eCW):** Guarantor Account Balances view (extends guarantor model note): balance triple (Total Account / Guarantor-Patient / Unposted Payments), side-by-side Insurance vs Guarantor AGING buckets (0-30/31-60/61-90/90+), "Responsible For" patient grid w/ per-patient acct/pt balances + View Pt Account, last-payment id/date/amount, Statements launch from guarantor
- **PFO today:** no guarantor A/R
- **Gap:** guarantor-level A/R + statement generation
- **PFO implementation:** New guarantor account view — guarantor A/R aging, responsible-for grid, statements launch

### ECW-BI-14 — televisit claim detail

- **Screen & fields (eCW):** televisit claim detail (extends televisit billing): claim auto-carries POS 02 (telehealth place of service) alongside the GT modifier; claim window itself shows billing/rendering/supervisor providers, copay + pt-uncovered amt, fee-schedule selector, ready-to-submit F6 / HCFA F7 / electronic F8 hotkeys
- **PFO today:** claims.html flat claim fields
- **Gap:** POS auto-derivation from visit type
- **PFO implementation:** Server — POS 02 + GT/95 modifier auto-derivation from telehealth visit type in claim generation

### ECW-BI-15 — Visit Type Charge Configuration

- **Screen & fields (eCW):** Visit Type Charge Configuration: per-visit-type patient-billing rules — Bill To Patient flag (claim generates as SELF PAY w/ no insurance), flat CHARGE amount, PAY LATER option, per-row edit/delete w/ last-updated-by audit stamp; guarded by practice-default "Enable configure provider charge for visit types"; changes apply to newly created appointments only
- **PFO today:** no per-visit-type self-pay pricing
- **Gap:** visit-type price list (televisit/concierge/no-show flat fees) feeding claim generation
- **PFO implementation:** `visit-types.html` (new admin) — per-visit-type self-pay pricing/pay-later feeding claim generation

### ECW-BI-16 — per-appointment CLAIM PROVIDER override popup

- **Screen & fields (eCW):** per-appointment CLAIM PROVIDER override popup: Supervisor / Pay-To / Rendering provider each independently overridable for the visit (w/ copy icon + Clear Settings) — feeds claim loops directly (billing/rendering/supervising)
- **PFO today:** claim provider = appointment provider, no per-visit override
- **Gap:** supervisor+pay-to+rendering triple on the visit (incident-to and supervised-NP billing depends on it)
- **PFO implementation:** Extend calendar booking modal — supervisor/pay-to/rendering override popup; Server: provider triple on visit→claim

### ECW-BI-17 — CASES module

- **Screen & fields (eCW):** CASES module (beyond the case-manager reference entity): Open Cases binds an appointment/claim to a named CASE — Case Details window (Status Open/Closed, Patient, Case Provider, CASE TYPE, Case Label) + admin-managed CASE TYPES lookup (code+name grid w/ add/edit/delete; samples: WPI workplace injury, MVA motor-vehicle accident, CHM chemical exposure); case dropdown on every booking
- **PFO today:** none
- **Gap:** billing cases (workers-comp/MVA/liability episodes grouping visits + claims under one case w/ its own responsible party)
- **PFO implementation:** New cases module — CASE entity + case types admin; case dropdown on booking + claims link

### ECW-BI-18 — structured BILLING NOTES

- **Screen & fields (eCW):** structured BILLING NOTES: "S" button beside Billing Notes opens a Name/Value/Notes template grid (Default For All, Clear All, Custom rows) so billing notes are structured key-values, not free text
- **PFO today:** free-text notes only
- **Enh:** structured billing-note templates
- **PFO implementation:** CF binding — structured billing-note templates (name/value grids)

### ECW-BI-19 — Patient Charge Details window

- **Screen & fields (eCW):** Patient Charge Details window (enriches the appointment financial-panel note): Charges & Co-Pay detail = encounter date w/ CLAIM jump, total charges, ALLOWED FEE, co-pay, patient portion, patient total + MULTIPLE CO-PAY split rows (PC / SC / Other each w/ amount); OVERRIDE APPOINTMENT FEE SCHEDULE dropdown (per-visit fee-schedule swap; blank = default) + FollowUp Visit; Patient Account Summary (account balance + Details, patient balance + GUARANTOR BALANCE, unposted payments) and a CO-PAY collect button; deleting a search-built series warns "N appointment(s) associated — delete each separately"
- **PFO today:** Backend committed — `PatientChargeDetailsRoutes` (commit a65c35136): `GET/POST/PUT /api/patient-charge-details` (PC charge, SC charge, total_charge GENERATED, copay collection/waiver, write-off, patient responsibility), `GET /api/fee-schedules` + `/api/fee-schedules/{id}/rate?cptCode=` (fee-schedule override picker + rate lookup). Tables: visit_charge_details + fee_schedules + fee_schedule_rates.
- **Gap:** CF UI — charge detail popup (PC/SC split fields, fee-schedule override dropdown, copay waiver, write-off, patient responsibility)
- **PFO implementation:** CF calls GET /api/patient-charge-details?appointmentId= to hydrate, GET /api/fee-schedules for override picker, POST/PUT to save charges

### ECW-BI-20 — REMAINING DEDUCTIBLES on the appointment financial panel

- **Screen & fields (eCW):** REMAINING DEDUCTIBLES on the appointment financial panel: Charges & Co-pay Details shows MAX REMAINING DEDUCTIBLE(S) w/ drill-in popup listing remaining deductible AMOUNT PER X12 SERVICE CATEGORY (e.g. Gynecological 650.00, Family Planning 840.00) w/ as-of date and Family/Individual scope — parsed from the 270/271 response; copay edits raise a "Pt Portion/Copay has been changed!" banner; FAMILY BOOKING enforces the "Allow appointment overbooking" security attribute (block dialog names the attribute + lists conflicting times) and warns on close-with-unbooked-members
- **PFO today:** 271 responses stored but deductible-by-category not surfaced at booking
- **Gap:** deductible surfacing at point of scheduling (collections win; extends the 270/271 copay auto-update note)
- **PFO implementation:** Booking financial panel — 271 deductible-remaining by service category popup (from stored 271s)

### ECW-BI-21 — 271 BENEFIT BROWSER on Patient Charge Details

- **Screen & fields (eCW):** 271 BENEFIT BROWSER on Patient Charge Details: right pane tabs CO-PAYMENTS / DEDUCTIBLE / CO-INSURANCE over the parsed eligibility response — rows = benefit, service description, in-network Y/N, coverage type, benefit amount, time period ("Remaining"), plus detail rows (plan date range, "DEDUCTIBLE APPLIES ONLY TO CERTAIN INPATIENT ADMISSIONS", "REFERRAL IS REQUIRED — must be to a specific contracting physician/group") w/ filters (mapped category, network type, coverage type, keyword) and VIEW FULL RESPONSE
- **PFO today:** raw 271 only
- **Gap:** structured benefit browser over stored 271s
- **PFO implementation:** Extend `eligibility.html` — structured benefit browser (copay/deductible/coinsurance tabs) over stored 271s

### ECW-BI-22 — SLIDING FEE SCHEDULE module

- **Screen & fields (eCW):** SLIDING FEE SCHEDULE module (FQHC/safety-net): security-keyed ("Allow access to Sliding Fee Schedule in Patient Demographics" / "...to expire...") income-details form — guarantor + spouse employment (hourly rate x hours/week x52, or bi-weekly x26 auto-totals), OTHER INCOMES checklist (alimony, child support, social security, ADC, disability, pension, retirement, welfare, 2nd job, other w/ monthly amounts), gross income + FAMILY SIZE -> CALCULATE derives POVERTY LEVEL % and assigns a SLIDING SCALE TYPE (A-D) + fee schedule w/ MEDICAL/DENTAL/COPAY responsibility %s and a validity date range; proof-of-income doc checkboxes (income docs, unemployment, picture ID, address); HOUSEHOLD MEMBERS grid; Assign / EXPIRE / HISTORY lifecycle
- **PFO today:** none
- **Gap:** sliding-fee discount engine (mandatory for FQHC market; pairs w/ visit-type charge config + self-pay pricing)
- **PFO implementation:** New sliding-fee module (FQHC) — income form, poverty-level calc, scale types, validity + expiry; hooks `patients.html` + claims

### ECW-BI-23 — ELIGIBILITY ADMIN + Report Summary

- **Screen & fields (eCW):** ELIGIBILITY ADMIN + Report Summary (enriches PFO eligibility-queue): admin console filters providers/facility/APPOINTMENT DATE RANGE/payer group/insurance/P-S-T level/eligibility status/TRANSMISSION status w/ batch SUBMIT + Print Report (columns incl appt provider, PCP, CLEARINGHOUSE PCP, svc date, policy, status, eligible, trans date); Eligibility Report Summary = structured left panel (payer name+TIN+phone+URL, eligibility provider NPI, insured/subscriber block w/ member id/group/plan dates, DEPENDENT block w/ relationship, REJECT REASON + FOLLOW-UP ACTION codes, other-payer-present warning, TRACE info w/ payer trace #) + right benefit grid GROUPED BY CATEGORY (Cancer, Diagnostic & Lab, Emergency/Urgent, Hospital In/Outpatient, Medical - General, Vision) w/ Co-Payments/Deductible/Co-Insurance/COVERAGE INFO tabs; INFO button opens the full demographics quick-editor in place
- **PFO today:** eligibility queue exists but no batch submit, no structured report summary, no dependent/trace/reject-code surfacing
- **Gap:** batch eligibility runs + structured 271 report
- **PFO implementation:** Extend `eligibility-queue.html` — batch submit runs + structured eligibility report summary (dependent/trace/reject codes)

### ECW-BI-24 — MANUAL eligibility VERIFICATION

- **Screen & fields (eCW):** MANUAL eligibility VERIFICATION (fallback when the payer has no electronic 270 route): Eligibility Check Status Report shows the failed transaction w/ remediation text and offers RESUBMIT / ReSubmitAll / Print / raw 270-DATA-FORMAT view / VERIFY MANUALLY; the manual form is per-insurance-tab (Primary/Secondary/Tertiary) — Eligibility Status radio (Eligible/Ineligible), required ELIGIBILITY NOTES (e.g. phone-verified), SEARCH FOR PCP + "PCP BELONGS TO THE PRACTICE" Y/N against a PCP MATCH REQUIRED payer flag (drives the eligible-but-PCP-mismatched scheduler icon)
- **PFO today:** no manual-verification path or PCP-match model
- **Gap:** manual verify + PCP-match tracking (Medicaid MCO workflows)
- **PFO implementation:** Extend `eligibility.html` — manual verification path + PCP-match model (payer flag + scheduler icon states)

### ECW-BI-25 — ELIGIBILITY DEMOGRAPHICS COMPARISON

- **Screen & fields (eCW):** ELIGIBILITY DEMOGRAPHICS COMPARISON: after a 271, a side-by-side reconcile dialog shows Eligibility Data (as-of date) vs EHR Data per field (name, subscriber no, address, city/state/zip, DOB, gender) w/ per-field ACCEPT arrows to copy the payer value into the chart + "verify with the patient before changing" warning
- **PFO today:** none
- **Gap:** payer-vs-chart demographics reconcile (kills claim rejections from name/DOB mismatches)
- **PFO implementation:** Eligibility — payer-vs-chart demographics side-by-side reconcile w/ per-field accept

### ECW-BI-26 — Patient-Insurance Detail

- **Screen & fields (eCW):** Patient-Insurance Detail (field map per coverage row): payer lookup shows payor-id + MEDIGAP id; level checkboxes PRIMARY/SECONDARY/TERTIARY + TERMINATED; SOURCE OF PAYMENT code, INSURANCE CLASS FOR REPORTS, COVERAGE DATES from/to, Insurance Billing Info; SUBSCRIBER tab = sub no, insured name (self/other), group no + group name, MEDICAID ID NO, co-pay as $ OR %, relationship code, SUPPLEMENTAL INSURANCE INDICATOR, PATIENT + INSURED ALTERNATE NAMES (claim-name overrides), insurance-card image slots A/B; plus Additional Information / BENEFITS / Notes tabs and per-patient "Defaults Bill To Physician Account" (lab company / DI company billing routing: self-pay/never/etc)
- **PFO today:** payer + member id only
- **Gap:** coverage field parity (COB, Medigap, alternate claim names)
- **PFO implementation:** Extend `check-patient-insurance.html`/`patients.html` — coverage field parity (COB level, Medigap, source-of-payment, alternate claim names, card images)

### ECW-BI-27 — Case Details FULL FIELDS

- **Screen & fields (eCW):** Case Details FULL FIELDS (extends the cases-module note): case id, external case no, guarantor + ATTORNEY links, ICD-codes-from-associated-progress-notes grid, View Case Visits + Case Additional Info + Scan + Logs; case INSURANCE block (case manager, phone/fax, PRE-AUTH NUMBER, bill-to-patient flag, case-scoped insurance grid); CLAIM DATA block (DATE OF INJURY, accident AUTO/NON-AUTO/NO + accident STATE + time, referral, CAUSE OF ACCIDENT, EMPLOYMENT-RELATED Y/N); COURT block (court name, location, case name/no, court date); HCFA BOX 16 unable-to-work date range + BOX 18 hospitalization dates
- **PFO today:** none
- **Gap:** injury-case claim data (these fields feed CMS-1500 boxes 10/14/16/18 directly)
- **PFO implementation:** Cases module — injury-case claim data (accident/employment/court, HCFA box 14/16/18 dates)

### ECW-BI-28 — case WORKERS-COMP extras

- **Screen & fields (eCW):** case WORKERS-COMP extras (completes Case Details): CASE VISITS grid (every encounter billed under the case: date, visit, reason, dx); CASE ADDITIONAL INFO = injury-location address + "where injury occurred" + "describe injury/illness" and the DISABILITY DATE LADDER (date disability began, employer notified, expected disability end, MODIFIED DUTY begin/end, RETURN TO FULL DUTY) + per-case STRUCTURED DATA custom fields (name, type, multi-select, trigger, mandatory, default); case edits have their own field-level CASE MANAGER LOGS; patient pharmacies come from a LOCAL PHARMACY DATABASE lookup (NCPDPID, e-prescribe/controlled/mail-order flags, NewRx/RefillRx service levels) w/ an at-least-one-pharmacy mandatory rule option
- **PFO today:** none
- **Gap:** WC disability tracking + case visit rollup
- **PFO implementation:** Cases module — WC disability date ladder + case visit rollup; CF: per-case custom fields

### ECW-BI-29 — dx-driven CPT automation

- **Screen & fields (eCW):** dx-driven CPT automation (enriches Billing-window note): adding an ICD prompts "ASSOCIATED CPT CODES — following CPTs are associated with this ICD, select automatically?" (per-code checkbox, e.g. V00.01XA -> LSM01 DSRIP lifestyle-modification), auto-inserting program/care-management charges; SELECT E&M picker = category tree (Behavioral Screening, BP Codes, COA, Diabetes Codes, DSRIP, Health Screening BP/BMI, House Call, Translation Services, E/M new-vs-est + health maintenance, Counseling, Smoking Cessation, Preventive, Consultations, MODIFIERS...) w/ SHOW FEE toggle + M1-M3 modifier columns
- **PFO today:** manual CPT entry
- **Gap:** ICD->CPT rule engine
- **PFO implementation:** Server — ICD→CPT association rule engine prompting auto-charges at charge entry

### ECW-BI-30 — PQRS/MIPS QUALITY MEASURES capture at billing

- **Screen & fields (eCW):** PQRS/MIPS QUALITY MEASURES capture at billing: popup lists applicable measures per visit (110 influenza imm, 128 BMI screening+follow-up, 130 current-med documentation, 182 functional outcome, 226 tobacco screening/cessation, 236 controlling high BP, 317 BP screening) w/ per-measure MEASURED checkbox feeding quality reporting
- **PFO today:** Backend committed — `QualityMeasuresRoutes` (commit be71c505a): `POST /api/quality-measures/suggest` (CPT+ICD→applicable measures), `/attestations` CRUD, auto-seed 15 standard CMS/HEDIS measures (CMS110/128/130/147/165/182/226/236/317/349) per org on first call. CF to render checkbox popup at charge time.
- **Gap:** CF UI — popup during charge entry showing applicable measures with per-measure MEASURED checkbox
- **PFO implementation:** CF calls `POST /api/quality-measures/suggest {encounterId,cptCodes,icd10Codes}` → checkbox list; `POST /api/quality-measures/attestations` per checkbox save

### ECW-BI-31 — CLAIM STATUS CODE workflow engine

- **Screen & fields (eCW):** CLAIM STATUS CODE workflow engine (RCM): practice-defined CLAIM STATUS CODES beyond transport states — table of code / description / ASSIGNED-TO STAFF (setting a status routes the claim to that biller's queue) / exclude-from-statements / function, e.g. 46PA Paid Audit, 47CR Crossover, 55NT NTTC Patient, 58WR Write-Off Non-HMO, 64NE NEEDS APPEAL, 65FO FOLLOW UP, 66NE NEEDS EOB, 68PR PROVIDER QUERY, 69ME Medicare Deductible + system states (Code Correct Error, Ready-to-Submit, Submitted, CLEARINGHOUSE ACCEPTED/REJECTED, Insurance Accepted, Print HCFA, 277 Accepted/Rejected/Pending/Finalized, Paid in Full, Partial Payment, Patient Responsibility/Credit); NEW-code dialog = status name, assigned-to, SHORTCUT KEY, skip-auto-error-check, exclude-from-patient-statement; CLAIMS console filters incl COLLECTION CYCLE, statement-count >=, show-not-in-collection, exclude-collection patients, locked/unlocked/finance-charge/voided/statement-hold/zero-charge toggles
- **PFO today:** claim status = enum
- **Gap:** status-driven work routing (maps to PFO claims Kanban)
- **PFO implementation:** Extend `claims.html` — practice-defined claim status codes w/ assigned-to routing (biller work queues on claims Kanban)

---

## Review Epilog — 2026-07-24

- Live build updated to 1943; gate 251/251 GREEN; MR2–MR7 delivered, MR8/MR9/MR10 active.
- ECW-BI-31 (Claim StatusesCF) remains the sole 🟢 live row in Billing; all others are 🟡 working screens.
- ECW-BI-19/20/21 backends (PatientChargeDetailsRoutes, EligibilityBenefitBrowserRoutes) committed; CF UI binding pending.
- No individual parity rows updated; status regeneration is AgentECW's lane on MasterSchedule sync.

