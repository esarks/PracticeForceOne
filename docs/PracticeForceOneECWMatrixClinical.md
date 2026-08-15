---
title: "PracticeForceOneECWMatrixClinical"
---

# ECW Screen & Field Inventory — Clinical (progress notes, histories, vitals, exam, immunizations, plan)

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

- **Assessment & specification: ✅ COMPLETE.** All 85 findings on this page are fully inventoried (every field, tab, and navigation component + a PFO implementation target).
- **Implementation: 🟢 3 live/done · 🟡 82 working screen (build-slice or demo surface) · ⏸️ 0 deferred · ⬜ 0 not started (of 85).** Sequence follows the 24-theme shortlist in [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>); fleet directive in `AGENTS.md`.

> **Reading the numbers.** 🟢 = the deep every-field finding is substantially delivered. 🟡 = a **live, working screen exists** for this finding — either a real build-slice or one of AgentCF's live configurable screens (current live build) that covers this eCW screen at **demo depth** (deep field-by-field parity still open). The 🟡 demo-surface mapping is AgentECW's first pass from the AgentCF sheet; CF is confirming depth per row. So 🟡 means "you can click it today, not that it's finished."

Legend: 🟢 Live/Done (deep parity) · 🟡 Working screen — build-slice or demo surface (parity pending) · ⏸️ Deferred (post-demo) · ⬜ Not started.

| ID | Screen | Status |
|---|---|---|
| ECW-CL-1 | Encounters window | 🟡 Done |
| ECW-CL-2 | Right Chart Panel | 🟡 Done |
| ECW-CL-3 | progress note anatomy | 🟢 Live - EncounterCF full progress-note anatomy (structured SOAP), p |
| ECW-CL-4 | HPI capture | 🟢 Live - EncounterCF structured HPI in SOAP subjective, proven live  |
| ECW-CL-5 | Medication Reconciliation | 🟡 Done |
| ECW-CL-6 | structured histories | 🟡 Done |
| ECW-CL-7 | Vitals | 🟡 Done |
| ECW-CL-8 | Examination | 🟡 Done |
| ECW-CL-9 | Assessments | 🟡 Done |
| ECW-CL-10 | Treatment | 🟡 Done |
| ECW-CL-11 | dx search = IMO clinical terminology | 🟡 Done |
| ECW-CL-12 | Immunizations | 🟢 Live - ImmunizationsCF full admin record (CVX/dose/lot/route/site/ |
| ECW-CL-13 | note LOCK | 🟡 Done |
| ECW-CL-14 | Telephone Encounter | 🟡 Done |
| ECW-CL-15 | Smart Forms | 🟡 Done |
| ECW-CL-16 | after-visit summary | 🟡 Done |
| ECW-CL-17 | Telephone/Web Encounters QUEUE | 🟡 Done |
| ECW-CL-18 | ROS | 🟡 Done |
| ECW-CL-19 | Family History | 🟡 Done |
| ECW-CL-20 | Drug Interaction review | 🟡 Done |
| ECW-CL-21 | Patient Hub structured-data panel | 🟡 Backend — PatientSdohRoutes committed; CF to render SDOH panel |
| ECW-CL-22 | staff reply to portal message | 🟡 Done |
| ECW-CL-23 | medication summary timeline | 🟡 Done |
| ECW-CL-24 | Assessment screen extras | 🟡 Done |
| ECW-CL-25 | in-office administration | 🟡 Done |
| ECW-CL-26 | Medicare Annual Visit structured template | 🟡 Done |
| ECW-CL-27 | Patient Medication Summary pivots | 🟡 Done |
| ECW-CL-28 | Implants module | 🟡 Done |
| ECW-CL-29 | in-house device integration | 🟡 Done |
| ECW-CL-30 | televisit provider workflow | 🟡 Done |
| ECW-CL-31 | Common Send dialog | 🟡 Done |
| ECW-CL-32 | Patient Orders checkout dialog | 🟡 Done |
| ECW-CL-33 | Manage Orders console | 🟡 Done |
| ECW-CL-34 | Advance Directive model | 🟡 Done |
| ECW-CL-35 | ADVANCE DIRECTIVE registry on demographics | 🟡 Done |
| ECW-CL-36 | VITALS flowsheet | 🟡 Done |
| ECW-CL-37 | BIRTH VITALS | 🟡 Done |
| ECW-CL-38 | vitals ENTRY mechanics | 🟡 Done |
| ECW-CL-39 | SPECIALTY vital editors | 🟡 Done |
| ECW-CL-40 | GROWTH CHARTS window | 🟡 Done |
| ECW-CL-41 | PAST RESULTS into the note | 🟡 Done |
| ECW-CL-42 | VISION EXAMINATION module | 🟡 Done |
| ECW-CL-43 | KEYWORDS library | 🟡 Done |
| ECW-CL-44 | EXAMINATION engine | 🟡 Done |
| ECW-CL-45 | MUSCULOSKELETAL exam tooling | 🟡 Done |
| ECW-CL-46 | DISEASE-ACTIVITY CALCULATORS on the homunculus exam | 🟡 Done |
| ECW-CL-47 | exam-to-BILLING wiring + AUDIOLOGY module | 🟡 Done |
| ECW-CL-48 | TREATMENT | 🟡 Done |
| ECW-CL-49 | DRUG INTERACTION browser | 🟡 Done |
| ECW-CL-50 | OUTGOING REFERRAL field map | 🟡 Done |
| ECW-CL-51 | ORDER-DETAILS ICD-ORDER MAPPING | 🟡 Done |
| ECW-CL-52 | AOE | 🟡 Done |
| ECW-CL-53 | PROCEDURES documentation engine | 🟡 Done |
| ECW-CL-54 | IMMUNIZATION SCHEDULES + registry export | 🟡 Done |
| ECW-CL-55 | VACCINE INVENTORY + immunization catalog admin | 🟡 Done |
| ECW-CL-56 | IMMUNIZATION ADMINISTRATION GUARDS | 🟡 Done |
| ECW-CL-57 | VACCINE REFUSAL + forecast SUPPRESSION workflow | 🟡 Done |
| ECW-CL-58 | imm completeness details | 🟡 Done |
| ECW-CL-59 | vaccine-lot ALERT SETTINGS + registry consent flags | 🟡 Done |
| ECW-CL-60 | PREVENTIVE MEDICINE note section | 🟡 Done |
| ECW-CL-61 | PROGRESS-NOTE LOCK lifecycle | 🟡 Done |
| ECW-CL-62 | chart STICKY NOTES + daily supervising provider + note-output prefs | 🟡 Done |
| ECW-CL-63 | CO-SIGN / CHART-REVIEW engine | 🟡 Done |
| ECW-CL-64 | SECURE NOTES + MEDICAL SUMMARY window | 🟡 Done |
| ECW-CL-65 | TREATMENT TIMELINE | 🟡 Done |
| ECW-CL-66 | VISIT SUMMARY generator | 🟡 Backend committed — VisitSummaryRoutes `GET /api/encounters-visit-summary/{id}` + publish/decline + practice defaults; CF to render AVS screen |
| ECW-CL-67 | note-content integrity helpers | 🟡 Done |
| ECW-CL-68 | SMART FORMS | 🟡 Done |
| ECW-CL-69 | smart-form scoring mechanics | 🟡 Done |
| ECW-CL-70 | note-adjacent power tools | 🟡 Done |
| ECW-CL-71 | ORDERS PROGRESS widget + right-panel TO-DO | 🟡 Done |
| ECW-CL-72 | v12 authoring accelerators | 🟡 Done |
| ECW-CL-73 | ORDER SETS | 🟡 Done |
| ECW-CL-74 | progress-note Subjective carries a "Verify Histories" one-click att | 🟡 Done |
| ECW-CL-75 | Therapeutic Injection Details editor | 🟡 Done |
| ECW-CL-76 | opening a progress note for a FUTURE-dated encounter throws a confi | 🟡 Done |
| ECW-CL-77 | NOTE TEMPLATE engine | 🟡 Done |
| ECW-CL-78 | ROS/Exam structured-content CUSTOM dictionary editing in place | 🟡 Done |
| ECW-CL-79 | Family History CUSTOMIZE COLUMNS dialog | 🟡 Backend — FamilyHistoryRoutes committed; CF to render condition grid + customize dialog |
| ECW-CL-80 | histories wizard chain + allergy safety banner | 🟡 Done |
| ECW-CL-81 | PROBLEM LIST window | 🟡 Done |
| ECW-CL-82 | ADVANCED ICD-10 SEARCH | 🟡 Done |
| ECW-CL-83 | CONFIGURE MACROS / SMART NOTES console | 🟡 Done |
| ECW-CL-84 | SMART NOTES | 🟡 Done |
| ECW-CL-85 | v12 STRUCTURED TEMPLATES on HPI items | 🟡 Done |

**Rollup: 3 live · 82 working screen · 0 deferred · 0 not started (of 85).**

*Regenerated 2026-07-21 from the unified status across all `MasterSchedule.xlsx` sheets + AgentECW's surface→ECW crosswalk. Documentation-only lane (AgentECW).*

---

### ECW-CL-1 — Encounters window

- **Screen & fields (eCW):** Encounters window: all encounter types incl TELEPHONE + eye + F/U, status lifecycle (PEN/CHK/no-show), provider vs resource distinction, LOCKED-note padlock, non-billable + no-show counters, print/fax note from list
- **PFO today:** encounters.html
- **Gap:** encounter types beyond office visit (telephone/web), note lock state visible, no-show/non-billable rollups
- **PFO implementation:** Extend `encounters.html` — encounter types (telephone/web), status lifecycle, note-lock column, no-show/non-billable rollups

### ECW-CL-2 — Right Chart Panel

- **Screen & fields (eCW):** Right Chart Panel: persistent tabs Overview\|DRTLA (meds/rx log)\|History\|CDSS\|Alerts\|Order Sets\|Labs/DI beside the note; medical/surgical/FAMILY history structured; "data last modified" banner
- **PFO today:** patient-chart.html
- **Gap:** side-panel while charting + family/social/surgical structured histories + order sets
- **PFO implementation:** Extend `practice-ehr-encounter.html` — persistent right chart rail (overview/meds/history/alerts tabs) fed by `patient-chart.html` data

### ECW-CL-3 — progress note anatomy

- **Screen & fields (eCW):** progress note anatomy: communication needs, nurse notes, interpreter-used, complaint list, med reconciliation statement, Gyn/OB history sections, ROS
- **PFO today:** practice-ehr-encounter.html phase stepper
- **Gap:** nurse-intake fields + interpreter + gyn/OB hx + ROS section
- **PFO implementation:** Extend `practice-ehr-encounter.html` phase sections — nurse intake, interpreter, gyn/OB hx, ROS; CF: section templates

### ECW-CL-4 — HPI capture

- **Screen & fields (eCW):** HPI capture: per-complaint structured symptom attributes (duration unit, location/radiation, onset, severity, nature, aggravated/relieved by, associated symptoms), free-form + structured Q&A modes, DICTATE, template tree per program (anticoagulation, Hep C, pharmacy, social work...), "Denies All" quick action, guided nav Vitals→HPI→Examination
- **PFO today:** encounter free text
- **Gap:** structured HPI w/ symptom attributes + template library + denies-all
- **PFO implementation:** CF binding — structured HPI capture (symptom attributes, template tree, denies-all) via ECW-CL-85 engine

### ECW-CL-5 — Medication Reconciliation

- **Screen & fields (eCW):** Medication Reconciliation: 4 tabs (Current/Past Rx/EXTERNAL Rx history/Unreconciled), per-med status T/N/D/U + mark-all + apply-from-prior-visit, per-med SOURCE attribution, Verified flag, Drug Interaction check button, start/stop dates w/ notes
- **PFO today:** medication-codes.html reference only
- **Gap:** patient med list + reconciliation workflow + interaction check
- **PFO implementation:** New patient med-list on `patient-chart.html` + encounter reconciliation step (T/N/D/U statuses); interactions = mock-seam

### ECW-CL-6 — structured histories

- **Screen & fields (eCW):** structured histories: PMH (ICD-coded, promote-to-Problem-List flag, Verified attest), allergies (reaction/type/status/NKDA/log), surgical hx (CPT-coded, denies flag), hospitalizations — each w/ VERIFIED attestation checkboxes
- **PFO today:** —
- **Gap:** full structured history suite + verified attestations + PL promotion
- **PFO implementation:** New structured-histories section on `patient-chart.html` (PMH/surgical/hospitalizations w/ Verified pattern — allergies pattern already live)

### ECW-CL-7 — Vitals

- **Screen & fields (eCW):** Vitals: prior visits visible in same grid while entering; BP-recheck column; smoker/advice as vitals; Growth Charts + trend Graph one click; "vitals taken" flag
- **PFO today:** encounter vitals basic
- **Gap:** vitals history grid + graphing + growth charts
- **PFO implementation:** Extend encounter vitals — longitudinal grid + BP recheck + graph launch (master row ECW-CL-36)

### ECW-CL-8 — Examination

- **Screen & fields (eCW):** Examination: per-body-system grid PREFILLED with practice default normals (merge/select default), click-to-insert phrase picker per area, anatomical DRAWING tool, gender-conditional rows
- **PFO today:** free text exam
- **Gap:** exam template grid + defaults + drawing
- **PFO implementation:** CF binding — exam template grid w/ practice default normals (master row ECW-CL-44)

### ECW-CL-9 — Assessments

- **Screen & fields (eCW):** Assessments: smart search w/ did-you-mean + real-time, previous-assessments reuse list, problem-list toggle + promote flag, ICD10 mapping toggle, risk column, DSM Axis 4/5
- **PFO today:** encounter dx entry
- **Gap:** assessment reuse + PL integration + smart ICD search
- **PFO implementation:** Extend encounter dx entry — previous-assessment reuse, problem-list toggle, smart ICD search (Server: search service)

### ECW-CL-10 — Treatment

- **Screen & fields (eCW):** Treatment: plan organized PER-ASSESSMENT (tab per dx) — meds/labs/DI/procedures attached to the dx; formulary + AWP cost + refills/auth in Rx grid; patient EDUCATION content per dx; outgoing referral from plan; eCliniSense (predictive); allergy alert + interaction buttons inline; Print Script/Orders
- **PFO today:** encounter plan free text + separate orders
- **Gap:** per-dx plan structure + Rx grid + education + referral hooks
- **PFO implementation:** Extend encounter plan — per-dx grouping of orders (master row ECW-CL-48)

### ECW-CL-11 — dx search = IMO clinical terminology

- **Screen & fields (eCW):** dx search = IMO clinical terminology (clinician-friendly synonyms → ICD9/10 dual mapping)
- **PFO today:** raw ICD list
- **Gap:** terminology-layer search UX
- **PFO implementation:** Server — clinician-friendly terminology synonym layer over `icd-codes.html` search

### ECW-CL-12 — Immunizations

- **Screen & fields (eCW):** Immunizations: full admin record (lot, VFC eligibility, VIS given/date-on-VIS, route/site, manufacturer, exp, given-by, counseling flag, billable flag auto-charge, decrement inventory dose) + favorites
- **PFO today:** —
- **Gap:** immunization module w/ inventory decrement + billing hook
- **PFO implementation:** New immunizations module — admin record w/ lot/VFC/VIS/route/site + billable auto-charge (master rows ECW-CL-54..59)

### ECW-CL-13 — note LOCK

- **Screen & fields (eCW):** note LOCK: signing locks note w/ selectable render styles (default/bulleted/personalized/classic/modern I-IV) + preview; Record (dictation); Fax from note
- **PFO today:** encounter sign basic
- **Gap:** note lock styles/preview + fax/record
- **PFO implementation:** Extend encounter sign-off — lock render styles + preview; fax/record = mock-seam (master row ECW-CL-61)

### ECW-CL-14 — Telephone Encounter

- **Screen & fields (eCW):** Telephone Encounter: first-class encounter type — answered-by vs caller, reason, ASSIGNED-TO routing, high-priority, auto eligibility check, status lifecycle (Open→Addressed→Addressed+Docs Reviewed), tabs incl Rx refill workflow + Addendum + Log History + Virtual Visit
- **PFO today:** —
- **Gap:** telephone/virtual encounter module w/ assignment queue + refill workflow
- **PFO implementation:** New `telephone-encounters.html` — first-class phone encounter object (master rows ECW-OPS-5/6)

### ECW-CL-15 — Smart Forms

- **Screen & fields (eCW):** Smart Forms: standardized screening questionnaires in-note (PHQ2/PHQ9, Audit-C, asthma, tobacco, sexual hx) w/ structured answers feeding quality measures; admin mappers tie them to note fields
- **PFO today:** dynamic-forms.html exists
- **Enh:** ship standard screening instrument library on dynamic-forms + score capture
- **PFO implementation:** CF binding — screening instruments tied to note fields via admin mappers (with ECW-CL-68/69)

### ECW-CL-16 — after-visit summary

- **Screen & fields (eCW):** after-visit summary: category-selectable print/send + patient DECLINE tracking + patient education material per dx
- **PFO today:** —
- **Gap:** AVS generation + education library
- **PFO implementation:** Encounter close — AVS generation + education library (master row ECW-CL-66)

### ECW-CL-17 — Telephone/Web Encounters QUEUE

- **Screen & fields (eCW):** Telephone/Web Encounters QUEUE: team inbox w/ Open/Addressed tabs, assigned-to + reassign
- **PFO today:** worklist.html generic
- **Gap:** encounter-message queue w/ assignment (ties to I3 team-inbox thread)
- **PFO implementation:** `telephone-encounters.html` queue — team inbox w/ Open/Addressed tabs + assignment (I3 team-inbox tie)

### ECW-CL-18 — ROS

- **Screen & fields (eCW):** ROS: full symptom dictionary per category (deny/admit/notes per symptom) with Default-for-All / Default-per-Category one-click normal fills
- **PFO today:** no ROS module
- **Gap:** structured ROS w/ per-category defaults (speed-of-charting feature, not just a section)
- **PFO implementation:** CF binding — structured ROS w/ per-category defaults (master row ECW-CL-78)

### ECW-CL-19 — Family History

- **Screen & fields (eCW):** Family History: member-rows (father/mother/sibs/children w/ counts) x condition CHECKBOX MATRIX (diabetes/HTN/heart/stroke/mental/cancer...), status alive/deceased, YOB/age, Non-Contributory + Family History Verified attestations
- **PFO today:** no family hx
- **Gap:** structured family-history grid (feeds CDS + risk)
- **PFO implementation:** New family-history grid on `patient-chart.html` — member×condition matrix; CF: condition dictionary (ECW-CL-79)

### ECW-CL-20 — Drug Interaction review

- **Screen & fields (eCW):** Drug Interaction review: drug-drug + drug-allergy + drug-CONDITION (contraindication vs problem list, e.g. metformin/renal) with per-pair severity ADJUST + override notes/action + print
- **PFO today:** no interaction checking
- **Gap (mock-seam):** interaction check surface at Rx entry w/ override audit
- **PFO implementation:** Mock-seam — drug interaction check surface at Rx entry w/ override audit (master row ECW-CL-49)

### ECW-CL-21 — Patient Hub structured-data panel

- **Screen & fields (eCW):** Patient Hub structured-data panel: SDOH fields (Occupation, Veteran, Seasonal/Migrant worker, Homeless, Limited English Proficiency, Public Housing) captured as first-class structured data
- **PFO today:** Backend committed — `PatientSdohRoutes` (commit 60450c0a5): `GET/PUT /api/patient-sdoh` with 21 UDS fields (occupation, veteran, homeless, LEP, food insecurity, AHC HRSN screening, education, income), `/field-definitions` (CF schema with type/udsCategory), `/report?practiceId=&year=` (UDS aggregate counts for FQHC reporting dashboard).
- **Gap:** CF UI — SDOH panel on patient chart with dynamic fields from /api/patient-sdoh/field-definitions
- **PFO implementation:** CF calls `GET /api/patient-sdoh/field-definitions` → renders dynamic form; `PUT /api/patient-sdoh` to save (partial update via COALESCE)

### ECW-CL-22 — staff reply to portal message

- **Screen & fields (eCW):** staff reply to portal message: modality picker (eMessage/Voice/Text-SMS honoring patient prefs), reusable message TEMPLATES by provider+type, rich-text editor; send auto-logs to the encounter Action Taken audit
- **PFO today:** no staff messaging surface
- **Gap:** practice->patient messaging w/ templates + modality prefs + audit
- **PFO implementation:** Staff→patient messaging surface w/ templates + modality prefs + encounter audit (pairs ECW-EN-3)

### ECW-CL-23 — medication summary timeline

- **Screen & fields (eCW):** medication summary timeline: meds grouped by encounter date w/ source tag (WEB refill vs Office Visit), action (refill/injection), C/R/30/90/S status chips, per-med Perform Actions; PDMP check button inline
- **PFO today:** medication-codes.html reference only
- **Gap:** per-patient medication history timeline + refill action surface (PDMP = mock-seam)
- **PFO implementation:** `patient-chart.html` — medication history timeline w/ refill actions; PDMP = mock-seam

### ECW-CL-24 — Assessment screen extras

- **Screen & fields (eCW):** Assessment screen extras: dual ICD-9/10 code chips, SNOMED column, per-dx Specify/Notes/RISK columns, one-click Problem-List promote, CARE GAPS button surfacing quality-measure gaps at diagnosis time
- **PFO today:** encounter dx free text
- **Gap:** structured assessment picker + care-gap prompt at point of care
- **PFO implementation:** Extend encounter dx — dual code chips, risk/specify columns, PL promote, care-gaps button (AI-flags tie)

### ECW-CL-25 — in-office administration

- **Screen & fields (eCW):** in-office administration: immunization/injection admin capture (dose, site, administered-by) prints DISCHARGE INSTRUCTIONS per vaccine + eMAR view
- **PFO today:** none
- **Gap:** in-office med administration record (pairs w/ immunization lot inventory note)
- **PFO implementation:** Immunizations module — in-office administration record (eMAR) + per-vaccine discharge instructions print

### ECW-CL-26 — Medicare Annual Visit structured template

- **Screen & fields (eCW):** Medicare Annual Visit structured template: dedicated HPI category with health-risk assessment, vision/hearing screening, fall risk, psychosocial/behavioral risk, ADLs, cognitive screen, patient care team — the AWV/IPPE compliance package as a one-pick template
- **PFO today:** none
- **Enh:** AWV visit template (G0438/G0439 revenue + compliance)
- **PFO implementation:** CF binding — AWV/IPPE structured visit template (G0438/G0439)

### ECW-CL-27 — Patient Medication Summary pivots

- **Screen & fields (eCW):** Patient Medication Summary pivots: one dialog re-groupable by Date/Medication/Provider/Assessment plus a TIMELINE GANTT view (per-med bars w/ start/increase/decrease/refill/stop glyphs, 1m-All zoom, slider); processed-channel filters (eRx/printed/faxed/not-sent)
- **PFO today:** none
- **Gap:** medication summary visualization (extends med-timeline note)
- **PFO implementation:** Med timeline — regroupable pivots + Gantt view (same module as ECW-CL-23)

### ECW-CL-28 — Implants module

- **Screen & fields (eCW):** Implants module: implantable-device list w/ UDI registry lookup or manual (barcode, lot/serial, expiration, GMDN name, MRI safety info, SNOMED CT, latex flag), excluded-from-interaction warning banner
- **PFO today:** none
- **Gap:** implant/device list on chart (ONC UDI requirement)
- **PFO implementation:** New implants list on `patient-chart.html` — UDI fields; Server: IMPLANT table

### ECW-CL-29 — in-house device integration

- **Screen & fields (eCW):** in-house device integration (Device DI screen): launch a connected device test (e.g., QRS spirometer) from the DI order, result returns as rendered report + DISCRETE structured attributes (value/unit/reference range) + trend analysis across sessions
- **PFO today:** mock orders/results only, no discrete result attributes or trend view
- **Enh (mock-seam):** structured result-attribute model + per-analyte trend view on results (device connectivity itself stays mocked)
- **PFO implementation:** Mock-seam — discrete result attributes (value/unit/range) + per-analyte trend on results

### ECW-CL-30 — televisit provider workflow

- **Screen & fields (eCW):** televisit provider workflow (extends telehealth visit-type note): Office Visits day list shows a VIDEO icon per televisit row and flips status to ARR automatically when the patient enters the web waiting room; during the visit the video call is DOCKED inside the progress-note window (tabs: Video/Questionnaire/Vitals/Chat/Trackers) with patient-entered pre-visit vitals importable into the note; billing grid carries M1-M4 modifier columns and the GT telehealth modifier is applied to the E&M code for MED VIDEO encounters
- **PFO today:** none of this
- **Enh (mock-seam):** arrived-status hook + doc-side panel placeholder + auto telehealth modifier (95/GT) on telehealth visit-type claims
- **PFO implementation:** Encounter — televisit arrived-status hook, doc-side panel placeholder, auto telehealth modifier

### ECW-CL-31 — Common Send dialog

- **Screen & fields (eCW):** Common Send dialog (v11.52): ONE send surface at note close — Patient Orders tab batches every pending transmit (each Rx row w/ its own mode print/eTransmit + per-Rx pharmacy pick + last-filled info + interaction-check button; progress note row eTransmit/fax to referring w/ fax #) and For Patients tab batches patient-education, visit summary, vaccine administration record, Rx education each w/ per-item transmit mode; single Send executes all checked items
- **PFO today:** no outbound-transmit surface
- **Enh (mock-seam):** unified end-of-visit send queue (transports mocked) — pairs w/ Common Send-style per-item mode selection
- **PFO implementation:** Mock-seam — unified end-of-visit send queue (per-item transmit modes)

### ECW-CL-32 — Patient Orders checkout dialog

- **Screen & fields (eCW):** Patient Orders checkout dialog: single window collects the visit's orders — Current vs FUTURE tabs for Labs/DI/Procedures each row w/ schedule date, notes, IN-OFFICE flag, DONE flag; plus Rx, Immunizations/Therapeutic Injections (lot/given-by/location/dose), Referrals (doctor/reason/dx); Send transmits (distinct from Common Send which handles transmit modes)
- **PFO today:** orders scattered, no checkout consolidation
- **Gap:** end-of-visit order consolidation surface w/ future-order scheduling feeding front-desk booking
- **PFO implementation:** Encounter close — order consolidation checkout w/ future orders feeding front-desk booking

### ECW-CL-33 — Manage Orders console

- **Screen & fields (eCW):** Manage Orders console (extends orders notes): Lab/DI/Procedure tabs w/ per-LAB-COMPANY compendium (e.g. Quest) + in-house flag per test, Today's vs FUTURE orders lanes, ABN (Advance Beneficiary Notice) generation, CC RESULTS TO additional recipients, bill-to-physician's-account toggle, print pathology requisition
- **PFO today:** mock orders flat
- **Gap:** order compendium w/ performing-lab routing + future-order lane + ABN + result-CC list
- **PFO implementation:** `orders.html` (new) — compendium w/ performing-lab routing, future lane, ABN, CC-results list

### ECW-CL-34 — Advance Directive model

- **Screen & fields (eCW):** Advance Directive model (extends note 43): per-patient list of directives (code, name, date entered) w/ IS-PRIMARY flag surfaced on demographics + admin-managed directive CATALOG (Full Code, DNI, DNR, Comfort Measures Only, Organ Donor)
- **PFO today:** none
- **Gap:** advance-directive entity + primary-directive display
- **PFO implementation:** `patient-chart.html` — advance-directive list w/ primary flag + admin catalog (with ECW-CL-35)

### ECW-CL-35 — ADVANCE DIRECTIVE registry on demographics

- **Screen & fields (eCW):** ADVANCE DIRECTIVE registry on demographics: multi-row list (code, name, date entered — e.g. DNR, Organ Donor) w/ add/edit/delete and MAKE PRIMARY (primary directive surfaces on the demographics screen + hub banner)
- **PFO today:** none
- **Gap:** advance-directive capture w/ primary display
- **PFO implementation:** Same advance-directive module — registry on demographics w/ make-primary

### ECW-CL-36 — VITALS flowsheet

- **Screen & fields (eCW):** VITALS flowsheet (Objective section): multi-DATE grid (rows = encounter dates, current row highlighted) x vitals columns (Wt kg + lbs, Ht cm + in, auto BMI w/ RED abnormal, HR, RR, Temp F, BP etc — horizontally scrollable), per-row edit; PRETERM PERCENTILE toggle, "Vitals Taken" flag, POP-UP mode; Notes box; GROWTH CHART + GRAPH buttons w/ settings; navigation band (Pt.Info / Encounter / Physical / Hub) + icon toolbar and "Physical Examination >" flow
- **PFO today:** encounter vitals = flat one-visit fields
- **Gap:** longitudinal vitals grid + growth charts + abnormal flagging
- **PFO implementation:** Extend encounter vitals — multi-date flowsheet grid, abnormal flagging, growth chart/graph buttons

### ECW-CL-37 — BIRTH VITALS

- **Screen & fields (eCW):** BIRTH VITALS (pediatric objective block): Birth Information dialog (DOB, GESTATIONAL AGE weeks, weight/length/head-circumference each w/ unit pick + AUTO PERCENTILE, weight-change-since-birth) + HEARING & APGAR tab (newborn hearing screening rows: right/left ear PASS-FAIL-DECLINED x test method ABR/AOE, add rows; APGAR rows: score x time-minutes x comments) + show/hide-on-note toggle + full Birth Vitals LOGS; note renders a structured Birth Vitals block
- **PFO today:** none
- **Gap:** newborn vitals + hearing/APGAR capture
- **PFO implementation:** Encounter vitals — newborn block (birth info, percentiles, hearing/APGAR) — pediatric wave

### ECW-CL-38 — vitals ENTRY mechanics

- **Screen & fields (eCW):** vitals ENTRY mechanics (enriches vitals-flowsheet note): each cell opens a touch NUMERIC KEYPAD editor (enter-value + add, Default button, prev/next cell arrows); NOT TAKEN checkbox requires a coded EXCEPTION REASON (Declined by Patient / No Medical Need / Collection Device Broken) which renders in the note text and shows as a grid tooltip; MANDATORY VITALS gate blocks note progress until each starred vital has a value OR exception (Save & Continue); paired-unit columns AUTO-CONVERT (in->cm, lbs->kg) on Apply; invalid-value + 255-char guards
- **PFO today:** plain number inputs
- **Gap:** exception-coded vitals w/ mandatory gate (quality-measure denominators need the refusal codes)
- **PFO implementation:** Encounter vitals — keypad editors, exception-coded NOT-TAKEN reasons, mandatory gate, unit auto-convert

### ECW-CL-39 — SPECIALTY vital editors

- **Screen & fields (eCW):** SPECIALTY vital editors (each vitals column type gets a purpose-built popup): BP w/ QUALIFIER dropdown per reading (sitting/standing/etc, multiple readings per visit); PAIN SCALE w/ 0-10 SMILEY-FACE picker (No Pain -> Unbearable); VISION acuity (left/right/both eye dropdowns + fusion + color + comment checkboxes child-too-young / with-glasses / without-glasses); HEARING audiometry mini-grid (right/left ear x 1000/2000/4000/6000 Hz, P/F per cell w/ P-for-all + F-for-all, decibels column, child-too-young)
- **PFO today:** none
- **Gap:** typed vital editors (screening-vitals data needed for pediatric quality measures)
- **PFO implementation:** Encounter vitals — typed editors (BP qualifiers, pain smiley, vision acuity, hearing grid)

### ECW-CL-40 — GROWTH CHARTS window

- **Screen & fields (eCW):** GROWTH CHARTS window (completes the vitals set): chart-type radio list (Wt/Age, Length-Stature/Age, Wt/Length, HC/Age, BMI/Age, Wt/Stature — birth-24/36mo and 2-20yr variants + PRETERM Wt-Length-HC/Age), NORMAL vs PRETERM vs DOWN-SYNDROME view tabs, in-lb vs cm-kg units, display legend/data-labels, side data table (visit date, value, age, %ILE), multi-chart PRINT/PREVIEW selection; vitals panel supports per-provider CATEGORY mapping (Configure Categories: which vitals each provider/facility sees + My Favorites tab) and RENAMED vitals warn w/ a NAME-HISTORY popup (current vs previous name + date) on open
- **PFO today:** none
- **Gap:** growth-chart rendering + per-provider vitals panels
- **PFO implementation:** Encounter vitals — growth-chart rendering (CDC/WHO/preterm/Down datasets)

### ECW-CL-41 — PAST RESULTS into the note

- **Screen & fields (eCW):** PAST RESULTS into the note (Objective section): a Past Results picker lists prior orders (name, type Lab/DI, collection/performed date) and selected results render inline in the note w/ VALUE + REFERENCE RANGE; the DRTLA right-panel Resulted Orders list has per-row MERGE ARROWS (pull result into flowsheet and/or note) + attachment clips; the LAB RESULTS detail window itself = provider/facility/ASSIGNED-TO routing, flags (high priority, future order, cancelled, in-house), status Open/Reviewed, tabs ORDER & COLLECTION / RESULTS (received + result date + normal/abnormal + per-analyte grid) / GRAPH / PROGRESS NOTES, patient Notes + INTERNAL NOTES + ADDENDUM, Reports/Print/Midmark-ECG
- **PFO today:** labs are mock-seam; no result-into-note flow
- **Gap (mock-seam):** result review window + note-merge mechanics
- **PFO implementation:** Mock-seam results — past-results picker into note + result review window w/ note-merge

### ECW-CL-42 — VISION EXAMINATION module

- **Screen & fields (eCW):** VISION EXAMINATION module (optometry/ophthalmology objective screen): ACUITIES grid OD/OS/OU x DVA/NVA/PH w/ unaided-vs-aided radio; K-READINGS flat/steep x2 (diopter/mm toggle) entered via a SLIDER control w/ OD=OS copy, Clear/Reset, NOT-RECORDED state; PD dist/near, VERTEX DIST, work dist; tabs SPECTACLE (presenting + FINAL spectacle Rx grids: SPH/CYL/AXIS/H-PRISM/V-PRISM/ADD/DVA/NVA/PH w/ Add/Remove/Comments/HX/Copy-To) / CONTACTS / BINOCULAR / EYE HEALTH TESTS; right column AUTO-REFRACTION, RETINOSCOPY, MANIFEST, CYCLOPLEGIC grids each w/ comments + history; minus/plus slider editors per cell
- **PFO today:** none
- **Gap:** specialty exam modules (vision shows the pattern: structured per-specialty objective screens)
- **PFO implementation:** CF/specialty wave — vision exam module (defer until specialty templates)

### ECW-CL-43 — KEYWORDS library

- **Screen & fields (eCW):** KEYWORDS library (notes accelerator used across every free-text field): Browse opens a KEY WORDS dialog — searchable practice-defined keyword/phrase library w/ NEW+ authoring, PUNCTUATION join dropdown, prev/next paging, preview pane; picked phrases append into the target notes field (seen on vitals notes, vision exam, contact-Rx fitting comments)
- **PFO today:** plain textareas
- **Enh:** shared quick-phrase library per field context
- **PFO implementation:** CF binding — shared quick-phrase (keywords) library per field context

### ECW-CL-44 — EXAMINATION engine

- **Screen & fields (eCW):** EXAMINATION engine (Physical Exam section): left CATEGORY TREE of specialty exam templates (General, Breast, Cardiology, Ophthalmology + Ophthalmology-Referral, Otolaryngology, Podiatry, Rheumatology, Psychiatry, Sleep Disorder, CQM Exceptions...) each = FIELD x OBSERVATION grid w/ per-field structured picklists, attachments, free-text; MERGE DEFAULT vs SELECT DEFAULT (provider's normal-exam boilerplate merged or replaced), CLEAR CATEGORY, CUSTOM fields, ORDER CATEGORIES, in-category search, plus DRAWING (annotate body diagrams) and JOINT TABLE buttons
- **PFO today:** single exam textarea
- **Gap:** templated exam engine w/ per-specialty categories + provider defaults
- **PFO implementation:** CF binding — exam template engine (category tree, field×observation grids, provider defaults, drawing placeholder)

### ECW-CL-45 — MUSCULOSKELETAL exam tooling

- **Screen & fields (eCW):** MUSCULOSKELETAL exam tooling (rheumatology/ortho): JOINT TABLE = joint/motion rows x left/right measure columns (Range of Motion, Swell, ROM, Tenderness, Pain, Normal + abduction/adduction/flexion/extension columns) w/ per-cell keypad, measurement counter row, OTHER VISITS tab + TRANSFER-TO-CURRENT-VISIT copy (overwrite warning), vertical print orientation note; HOMUNCULUS EXAMINATION = interactive BODY DIAGRAM w/ clickable joints color-coded (red=condition, green=normal, R=replaced), multi-joint select, condition filter, mirrored right-panel joint grid (swelling/tenderness/normal/replaced per joint, 26-joint count), IMPORT FROM LAST VISIT, View Labs, Global Notes, legend + zoom/pan; both render into the note incl the diagram
- **PFO today:** none
- **Gap:** joint table + body-diagram documentation (specialty differentiator)
- **PFO implementation:** Specialty wave — joint table + homunculus body diagram (defer)

### ECW-CL-46 — DISEASE-ACTIVITY CALCULATORS on the homunculus exam

- **Screen & fields (eCW):** DISEASE-ACTIVITY CALCULATORS on the homunculus exam: TENDER + SWOLLEN joint counts auto-derived from the joint table feed DAS28 and CDAI score calculators (inputs: ESR, CRP, patient + provider GLOBAL ASSESSMENT of disease activity 0-10; Calculate buttons) w/ INTERPRETATION tooltips (DAS28 \<2.6 remission ... >5.1 high; CDAI bands) and the scores render in the note Results block
- **PFO today:** none
- **Gap:** embedded clinical score calculators fed by structured exam data
- **PFO implementation:** Specialty wave — DAS28/CDAI score calculators fed by structured exam (defer)

### ECW-CL-47 — exam-to-BILLING wiring + AUDIOLOGY module

- **Screen & fields (eCW):** exam-to-BILLING wiring + AUDIOLOGY module: exam observations can carry ASSOCIATED ICD CODES that auto-add to the encounter Assessments (warnings: removing/overwriting the finding does NOT remove the code — manual removal from Assessments), and exam line items can ASSOCIATE CPT/HCPCS so structured findings push PROCEDURE CODES into Billing Information (e.g. V2111 lens codes from the final spectacle Rx); AUDIOLOGY WORK FLOW = dual pure-tone AUDIOGRAM charts (R/L ear, frequency x intensity, air conduction rows) w/ Speech / Acoustic Immittance / Soundfield Audiogram / OVERLAY tabs, pure-tone averages, speech summary (SRT), word-recognition %/dB, baseline compare, print/preview
- **PFO today:** none
- **Gap:** findings->codes automation + audiology charting
- **PFO implementation:** Specialty wave — exam findings→ICD/CPT push + audiology charting (defer)

### ECW-CL-48 — TREATMENT

- **Screen & fields (eCW):** TREATMENT (Plan) screen: orders organized BY DX (each assessment = a band, e.g. E11.21, holding its Rx w/ full sig + start date + prescriber, labs, DI, procedures) or BY CATEGORY, w/ sub-tab jumps (Dx / Rx / Labs / Diagnostic Imaging / Procedures / Referral), QUICK ORDER type-ahead (allergy-conflicting drugs highlighted yellow w/ warning icon inline in the search results), buttons = PDMP check, Add Info, Curr Rx, RX EXTERNAL HISTORY, Allergies, live INTERACTION status chip (orange "Moderate Interaction" opens the browser), Rx Eligibility, EDUCATION handouts; Send Rx / Send / CDSS flow
- **PFO today:** encounter orders = flat lists, no dx grouping
- **Gap:** dx-anchored plan/orders surface (the core clinician workflow screen)
- **PFO implementation:** Extend encounter plan — dx-anchored treatment surface (per-dx bands, quick order, interaction chip, education) — core clinician screen

### ECW-CL-49 — DRUG INTERACTION browser

- **Screen & fields (eCW):** DRUG INTERACTION browser: severity buckets (All/Major/Moderate/Minor w/ counts) x type filters (drug-drug, drug-ALLERGY, drug-FOOD, drug-DISEASE precaution, AGE-BASED criteria) + per-medication filter; rows = drug/allergen pair, type, SEVERITY chip (Not Recommended / Moderate / Extreme Caution), full monograph description; header warns about scope + unlisted allergens; immunization orders have CONCURRENCY alerts (order being modified by another user w/ acquired-by/when)
- **PFO today:** no interaction engine (mock seam)
- **Gap (mock-seam):** interaction browser contract + concurrency locks on orders
- **PFO implementation:** Mock-seam — interaction browser contract (severity buckets, type filters, monographs) + order concurrency locks

### ECW-CL-50 — OUTGOING REFERRAL field map

- **Screen & fields (eCW):** OUTGOING REFERRAL field map (enriches the referrals-module note): From provider/facility, INSURANCE w/ Pt-Ins popup (P/S rows + subscriber no), POS, AUTH TYPE + AUTH CODE, OPEN CASES link, date set (start, end, RECEIVED, referral, APPT date+time), To provider (+PREF preferred-provider flag) + SPECIALTY + facility, ASSIGNED-TO, priority, STATUS (Open / Consult Pending / Addressed) + SUB-STATUS; in-plan quick-referral picks dx from PROBLEM LIST + previous assessments w/ up-to-3 ordered REASONS; E&M coder ADD INFO captures complexity points (old records requested 1pt / reviewed 2pts, discussion w/ another physician 1pt, oversight-physician contacted)
- **PFO today:** referrals lack auth/status/complexity capture
- **Gap:** referral field parity + E&M complexity inputs
- **PFO implementation:** Referrals module — outgoing referral field parity + E&M complexity capture

### ECW-CL-51 — ORDER-DETAILS ICD-ORDER MAPPING

- **Screen & fields (eCW):** ORDER-DETAILS ICD-ORDER MAPPING: matrix view of every order (Rx/labs/DI) x every encounter dx w/ checkboxes to re-map which diagnosis justifies each order (drives claim dx pointers); PATIENT EDUCATION via INFOBUTTON search — auto-queries by the encounter's ICD-9/10, NDC, and LOINC codes w/ best-match handout results, plus per-drug RX EDUCATION monographs (English/Spanish tabs, print)
- **PFO today:** orders have single implicit dx; no education content
- **Gap:** order-dx matrix + infobutton education
- **PFO implementation:** Encounter orders — order×dx checkbox matrix (claim dx pointers) + infobutton education lookup

### ECW-CL-52 — AOE

- **Screen & fields (eCW):** AOE (Ask-at-Order-Entry) questions + lab-order defaults (mock-seam): lab/DI orders carry compendium AOE QUESTION SETS (single/multi question, mandatory vs optional, w/ defaults) whose status renders under each order in the plan + note (PENDING / PARTIALLY COMPLETED / COMPLETED / Required-AOE, cancelled orders keep an H history flag); per-user MY LAB/DI/PROCEDURE ORDERS DEFAULT settings = default-to-future-order, hide alias/component in search, CARRY FORWARD PREVIOUS DIAGNOSIS on reorders, lab company default, hide details, label printer dialog suppress, favorite labs, single-assessment mode, default lookup mode; CANCEL RX sends a pharmacy CANCELLATION REQUEST via the ePrescription Logs
- **PFO today:** no AOE model
- **Gap (mock-seam):** order-entry questions + reorder dx carry-forward + Rx cancel transaction
- **PFO implementation:** Mock-seam labs — AOE question sets on orders (CF-adjacent) + per-user order defaults + Rx cancel transaction

### ECW-CL-53 — PROCEDURES documentation engine

- **Screen & fields (eCW):** PROCEDURES documentation engine (same pattern as Examination): huge searchable PROCEDURE TEMPLATE library (6-minute walk, abscess I&D, arthrocentesis, abdominoplasty...) each = field x notes grid w/ per-field picklists, rich-text notes (color/bold/underline) + one-click TIMESTAMP signature line, informed-consent boilerplate block, DICTATION mic + Drawing, Default-per-Category, PDMP button; renders structured under Procedures: in the note and feeds procedure BILLING codes
- **PFO today:** procedures = a claim line only
- **Gap:** procedure documentation templates
- **PFO implementation:** CF binding — procedure documentation template library feeding procedure billing codes

### ECW-CL-54 — IMMUNIZATION SCHEDULES + registry export

- **Screen & fields (eCW):** IMMUNIZATION SCHEDULES + registry export (extends immunization note 28): encounter window tabs = TODAY'S T.INJECTIONS / TODAY'S IMMUNIZATION (w/ IMM VERIFIED attestation) + IMMUNIZATION SCHEDULE + FLU SCHEDULE; flu grid = season-by-season columns (selector spans 2004->present) w/ per-dose entries (date, age, product) and a FORECAST column (DUE NOW w/ date / COMPLETE), duplicate live-flu doses flagged; COVID-19 schedule = dose-1..6 grid w/ forecast; series map to CVX CODE SETS (info popup lists codes per series); GENERATE IMMUNIZATION RECORD exports a registry-format file for the public-health agency w/ dosage+CVX validation checklist
- **PFO today:** none
- **Gap:** immunization forecasting + registry export
- **PFO implementation:** Immunizations — schedule/forecast grids (flu/COVID series, CVX sets) + registry-format export (mock-seam)

### ECW-CL-55 — VACCINE INVENTORY + immunization catalog admin

- **Screen & fields (eCW):** VACCINE INVENTORY + immunization catalog admin (completes the imm set): LOT NUMBERS console per facility = lot number, vaccine name(s), LOT TYPE (Govt-VFC vs Purchased vs Unknown), expiry (red when past), dosage, DOSES LEFT, include-zero-dose filter, EXPORT TO EXCEL + RECONCILE stock action; catalog admin per immunization = CPT + required CVX (picked from a CDC CPT-CVX TABLE lookup), administration code + billing unit, linked ICD codes, VIS document versions (date-on-VIS + name), EXPORT-TO-STATE-REGISTRY flag, MARK AS PPD, inactive
- **PFO today:** none
- **Gap:** vaccine lot inventory + code-mapped immunization catalog (VFC compliance)
- **PFO implementation:** Immunizations admin — lot inventory console + CPT/CVX code-mapped catalog + VIS versions

### ECW-CL-56 — IMMUNIZATION ADMINISTRATION GUARDS

- **Screen & fields (eCW):** IMMUNIZATION ADMINISTRATION GUARDS (field-level, extends note 28): yellow banner "no drug/allergy interaction check for immunizations"; dose = value + UNIT LIST (mL/cL/g/mcg/uL/millicuries/mg/ng/spray/units); LOT guards — picking a lot with zero doses left / no NDC / past expiry warns itemized, an unknown lot number offers ADD LOT TO INVENTORY, registry-bound records require a lot w/ valid NDC; anatomical LOCATION picklist (L/R arm, deltoid, gluteus medius, forearm, thigh, vastus lateralis); BIOLOGICAL/MEDICATION WASTED checkbox w/ amount+unit; STATUS incl PARTIALLY ADMINISTERED which excludes the record from injection-record print, flowsheets, and CDSS w/ an explicit warning popup
- **PFO today:** none
- **Gap:** administration-time safety + inventory decrement guards
- **PFO implementation:** Immunizations — administration-time guards (lot expiry/doses/NDC, wasted, partially-administered)

### ECW-CL-57 — VACCINE REFUSAL + forecast SUPPRESSION workflow

- **Screen & fields (eCW):** VACCINE REFUSAL + forecast SUPPRESSION workflow: STATUS=Not Administered forces a coded REASON dialog — Refusal (Parental decision / Religious exemption / Patient decision / Other w/ REQUIRED free-text), History-of-Immunity/Evidence w/ details, Contraindications w/ effective+expiration dates, Other (vaccine unavailability); paired SUPPRESS UNTIL date w/ quick chips (1W/2W/3W/4W/6W/2M/3M/4M/6M/1Y/2Y/3Y) or SUPPRESS FOREVER — suppression flows into the ICE forecast + wellness-guideline SUPPRESSED rows; save guard blocks writes to MERGED/DELETED patients; SAVE AND NEXT DUE chains entry to the next due vaccine; per-dose BILLABLE + COUNSELING flags (counseling-checked-by-default user setting)
- **PFO today:** none
- **Gap:** refusal/suppression audit trail
- **PFO implementation:** Immunizations — refusal/contraindication coded reasons + forecast suppression w/ audit

### ECW-CL-58 — imm completeness details

- **Screen & fields (eCW):** imm completeness details: PPD/TB SKIN TEST gets READ-BACK fields (INDURATION mm, IMPRESSION pos/neg, READ BY + read date/time — a two-visit workflow); combo vaccines (MMRV) attach MULTIPLE VIS documents each w/ given-date + edition date, backed by an admin CVX-VIS MAPPING table versioned CURRENT/HISTORIC per edition; contraindication EFFECTIVE DATE is transmitted to immunization registries w/ the reason; lot funding types = Govt (Non-VFC) / Govt (VFC) / Privately Purchased / PATIENT BROUGHT IN / Public Vaccine Stock
- **PFO today:** none
- **Gap:** covered by imm notes — field-matrix fodder
- **PFO implementation:** Immunizations — PPD read-back, combo-VIS mapping, funding types (field-matrix fodder)

### ECW-CL-59 — vaccine-lot ALERT SETTINGS + registry consent flags

- **Screen & fields (eCW):** vaccine-lot ALERT SETTINGS + registry consent flags: Lot Numbers settings = ALERT WHEN DOSES BECOME \<N> + ALERT WHEN LOT EXPIRES IN \<N> DAYS, plus show-all vs only-lots-with-doses-remaining toggles per screen (lot console vs immunization form); patient Additional-Information carries CONSENT TO REPORT IMMUNIZATION (per-patient registry reporting consent) + EXCLUDE FROM REGISTRY SEARCH on the employer block
- **PFO today:** none
- **Gap:** inventory alerting + per-patient registry consent
- **PFO implementation:** Immunizations — lot alert thresholds + per-patient registry consent flags

### ECW-CL-60 — PREVENTIVE MEDICINE note section

- **Screen & fields (eCW):** PREVENTIVE MEDICINE note section: template categories by AGE BAND (Your Annual Wellness Plan, Infant 0-12mo, Early Childhood 1-4y, Middle Childhood 5-10y, Adolescent 11-\<18y, Counseling, Screenings, Intervention/High-Risk, Immunizations, Dental, HCG Diet); each item = screening/counseling row (BMI, BP, vision, AAA, mammogram, Pap, bone density, PSA/DRE, cholesterol, diabetes, colorectal...) w/ PRESENCE X + notes + structured sub-fields (>), items DUE per CDSS highlighted RED, S-flag ties to structured data; Default-per-Category + free-text + dictation
- **PFO today:** none
- **Gap:** preventive-medicine wellness-plan section (pairs w/ wellness-guidelines CDSS note)
- **PFO implementation:** CF binding — preventive-medicine wellness-plan section (age-band templates, CDSS-due highlighting)

### ECW-CL-61 — PROGRESS-NOTE LOCK lifecycle

- **Screen & fields (eCW):** PROGRESS-NOTE LOCK lifecycle: LOCK renders the note in a chosen STYLE (Default / Bulleted / Personalized / Classic / Modern I-IV, each w/ Preview) and stamps an electronic SIGNATURE image + sign-off status; LOCK GUARDS block until (a) all IN-HOUSE LAB results are completed, (b) pending Immunization/T.Injection documentation is done, (c) an E&M CODE exists — w/ an auditable "E&M Code Not required" override + notes; post-lock actions = UNLOCK (permissioned), VIEW LOCKED NOTES LOG, ADDENDUM; Office Visits day list supports BULK Lock Progress Note w/ style; Summary of Today's Visit prints w/ FACILITY-BASED LOGO
- **PFO today:** encounter sign-off is a status flag only
- **Gap:** lock guards + styles + addendum trail
- **PFO implementation:** Encounter — note-lock lifecycle: guards (in-house labs/imm/E&M), styles, unlock permission, addendum, bulk lock

### ECW-CL-62 — chart STICKY NOTES + daily supervising provider + note-output prefs

- **Screen & fields (eCW):** chart STICKY NOTES + daily supervising provider + note-output prefs: yellow STICKY-NOTE panel on the patient chart header (free-text, Modify Sticky Notes dialog — e.g. "patient is often late") visible across visits; NURSE/ANCILLARY PROVIDER staff flag adds SET SUPERVISING PROVIDER EACH DAY — a per-facility daily supervising-provider prompt + per-encounter override picker (incident-to billing); per-user PRINT / FAX / LOCK SETTINGS choose a default note STYLE per output channel + hide unused styles; lab results carry PUBLISH TO PROGRESS NOTE and DON'T PUBLISH TO WEB PORTAL toggles + a "reviewed by \<user> at \<time>" stamp rendered under the order in the note
- **PFO today:** none
- **Gap:** chart annotations + supervising-provider capture
- **PFO implementation:** `patient-chart.html` — sticky notes; encounter: daily supervising-provider capture; per-user output style prefs

### ECW-CL-63 — CO-SIGN / CHART-REVIEW engine

- **Screen & fields (eCW):** CO-SIGN / CHART-REVIEW engine: per-provider per-STATE review-sampling rules (review N charts or N% of charts — resident/NP/PA supervision compliance); ASSIGN/CHANGE PROGRESS NOTES dialog routes a note From->To w/ STATUS = CO-SIGN vs REVIEW, TELEMED flag, canned ATTESTATION text ("I attest that in the event the patient was seen by a Physician's Assistant or Nurse..."), configurable PROGRESS NOTE REVIEW QUESTIONS (yes-no / numeric 0-9 answers via a Structure-Question popup w/ defaults), and REVIEW & LOCK / LOCK actions + Patient Hub + Send Msg; a REVIEW PROGRESS NOTES work queue filters by provider / assigned-to / status (All Open) w/ bulk Lock
- **PFO today:** none
- **Gap:** supervision co-sign queue + sampling rules
- **PFO implementation:** New co-sign/chart-review queue — sampling rules, attestation, review questions (CF), review & lock

### ECW-CL-64 — SECURE NOTES + MEDICAL SUMMARY window

- **Screen & fields (eCW):** SECURE NOTES + MEDICAL SUMMARY window: chart header carries BOTH a yellow shared NOTES sticky AND a pink SECURE NOTES panel (lock icon, permission-gated — e.g. "may be a drug seeker") for sensitive staff-only annotations; MEDICAL SUMMARY window = one-screen chart abstract (demographics + previous name/address, care team, allergies w/ reaction+status, PROBLEM LIST w/ onset date, code, risk, W/U status, added/modified/by, medications w/ sigs, surgical hx, patient encounters w/ confidential-lock icons + dx) w/ PRINT ALL PREVIEW, TRANSMIT, TREATMENT TIMELINE, NEW TEL ENCOUNTER actions; per-user Show/Hide toggles incl HANDWRITTEN SIGNATURE on print/fax/lock and provider initials in visit dropdowns
- **PFO today:** dashboard quick view partial
- **Gap:** secure notes + transmittable chart abstract
- **PFO implementation:** `patient-chart.html` — secure (permission-gated) notes + transmittable medical-summary abstract

### ECW-CL-65 — TREATMENT TIMELINE

- **Screen & fields (eCW):** TREATMENT TIMELINE: cross-encounter longitudinal grid over a date range — one row-band per LOCKED encounter (appt provider + specialty) w/ columns Assessment / Treatment Notes / INTERNAL CLINICAL NOTES / Meds Ordered (w/ status glyphs) / Labs Ordered (w/ pending-approval + IH tags) / DIs Ordered / Procedures Ordered / Imm Administered / Inj Administered / Referrals To; filters = facility, provider, specialty, PREVIOUS DX; per-column SHOW/HIDE; column-header links open the full module; disclaimer = locked-note encounters only
- **PFO today:** encounter list only
- **Gap:** longitudinal treatment matrix
- **PFO implementation:** `patient-chart.html` — treatment timeline (cross-encounter longitudinal matrix over locked notes)

### ECW-CL-66 — VISIT SUMMARY generator

- **Screen & fields (eCW):** VISIT SUMMARY generator: per-visit Summary-of-Today's-Visit w/ PRINT OPTIONS category checklist (medications w/ notes, tests, referrals, next-appointment details, wellness guidelines, dx, immunizations, preventive medicine, procedures, problem list as-of-date, allergies, chief complaints, care plan, care team, action plan, eMAR...) + SAVE AS MY DEFAULT + show-associated-assessments; practice can LOCK defaults at practice level (per-user greyed w/ pointer to Practice Defaults); actions = PRINT PREVIEW (editable rich text), PUBLISH TO PORTAL, and DECLINE (records patient declined the summary — MU measure); lab values render w/ VALUE + REFERENCE RANGE + L/H flags; access gated by a "allow user to access the visit summary" security attribute
- **PFO today:** none
- **Gap:** configurable AVS (after-visit summary)
- **PFO implementation:** Encounter close — configurable visit summary (category checklist, practice-lock defaults, portal publish, decline tracking)

### ECW-CL-67 — note-content integrity helpers

- **Screen & fields (eCW):** note-content integrity helpers: picking a dx w/ MULTIPLE PRIOR INSTANCES pops a chooser (per-instance Specify, RISK, visit date, ONSET date, notes — or "add without specify/risk/onset") so the right problem-instance carries into the note; HPI UNMAPPED NOTES recovery — when template categories change, orphaned header/footer/symptom notes surface under a red "Unmapped Notes" flag w/ a 3-tab recovery dialog (EMR-recovered notes + SUGGESTED CATEGORY + per-row COPY / MERGE / delete, w/ cannot-copy guard when no category matches)
- **PFO today:** none
- **Gap:** template-evolution data recovery
- **PFO implementation:** Encounter — dx multiple-instance chooser + template-evolution unmapped-notes recovery (engine detail)

### ECW-CL-68 — SMART FORMS

- **Screen & fields (eCW):** SMART FORMS (standardized questionnaires): note-toolbar library of scored screeners + intake forms — Asthma, AUDIT-C / AUDIT-C PLUS 2 (alcohol+substance), COVID-19 Prevaccination Screening, OPIOID 2018 Edition, PEG SCALE, PHQ-A / PHQ2 / PHQ9, Respiratory Illness Screening, practice-branded INITIAL VISIT (Adult) intake; forms render as branded documents w/ per-answer POINT VALUES, conditional if-yes branches, Print/Fax/SAVE into PATIENT DOCUMENTS > Specialty forms (w/ save-failure fallback instructions) and an already-documented guard pointing at existing history
- **PFO today:** none
- **Gap:** scored screening-form library (relates to ConfigurableForms M9-28)
- **PFO implementation:** CF binding — scored screening-form library (PHQ/AUDIT-C/opioid etc.) rendered in-note, saved to documents

### ECW-CL-69 — smart-form scoring mechanics

- **Screen & fields (eCW):** smart-form scoring mechanics (enriches Smart Forms note): forms AUTO-COMPUTE totals + derived scores (PEG total/10, Harvey-Bradshaw w/ remission/mild/moderate/severe bands, opioid-risk low/moderate/high, PHQ-9 severity 1-27 interpretation), show PREVIOUS SCORE w/ date for trending, flag POSITIVE SCREEN w/ action text ("Refer to BEH"), link to updated form EDITIONS, and every view/update lands in a per-form SMART FORMS audit log
- **PFO today:** none
- **Gap:** computed scoring engine
- **PFO implementation:** CF binding — computed scoring engine (totals, bands, previous-score trending, positive-screen actions, per-form audit)

### ECW-CL-70 — note-adjacent power tools

- **Screen & fields (eCW):** note-adjacent power tools (last plan-doc set): SUPER BILL window = one popup w/ selected ICD + CPT (units) + E&M codes, billing notes, follow-up chips, and a SUPER BILL TEMPLATE picker (General/specialty) w/ code search-add; specialty LAB REQUISITION FORMS = per-specialty checkbox grids (e.g. Orthopedic Imaging: elbow/hip/knee/shoulder CT-MRI-Xray columns) w/ per-order STAT + FAST flags, current-vs-future orders, standing orders, and AUTO-ADD ASSOCIATED CPT CODES toggle; embedded UPTODATE reference (right-panel quick search + full topic browser in-app, mock-seam); SMART FORM MAPPING UTILITY maps community form elements to local structured questions (Create & Map All); Configure-Categories COPY pushes a user's category setup to other users
- **PFO today:** none
- **Gap:** superbill + requisition templates
- **PFO implementation:** Encounter — superbill popup w/ template picker + specialty requisition grids; UpToDate = mock-seam

### ECW-CL-71 — ORDERS PROGRESS widget + right-panel TO-DO

- **Screen & fields (eCW):** ORDERS PROGRESS widget + right-panel TO-DO: note footer exposes an ORDERS PROGRESS popover — per category (Medications / Labs / DIs / Imm-T.Inj / Referrals) a count + red/orange/open TRANSMISSION DOTS showing each order's send state before locking (future + printed orders excluded), dots repeated next to Send; right panel adds a TO-DO tab aggregating the visit's open items (screenings due, unverified allergies, in-house labs, referrals, immunizations) w/ per-item COMPLETED marking + comments
- **PFO today:** none
- **Gap:** pre-lock order-transmission checklist
- **PFO implementation:** Encounter — pre-lock orders-progress transmission checklist + right-panel visit to-do

### ECW-CL-72 — v12 authoring accelerators

- **Screen & fields (eCW):** v12 authoring accelerators: KEYBOARD SHORTCUTS layer (ALT+key per button, overlay shows bindings; ALT+LEFT/RIGHT walk note sections); note-text MACROS — typing a fragment pops fuzzy-matched MACRO suggestions (canned phrases "Continues smoking..." + structured Intake templates) inline; HPI notes offer an inline PATIENT-DATA REFERENCE popup (age, allergies 1-3, assessment data, BMI + percentile, birth height/weight...) to embed live chart values; @-MENTION a user inside a telephone-encounter message and the ASSIGNED-TO field auto-updates
- **PFO today:** none
- **Gap:** macro/dot-phrase engine + inline data tokens
- **PFO implementation:** Encounter — keyboard-shortcut layer + inline macro suggestions + patient-data tokens (CF macros ECW-CL-83/84)

### ECW-CL-73 — ORDER SETS

- **Screen & fields (eCW):** ORDER SETS (full anatomy, from video frames): named per-condition bundles ((A) Diabetes Orders Essen 2020, ~Hyperkalemia) opened from the note, attached to the visit's ASSESSMENTS rail — sections: MEDICATIONS grid (name/strength/formulation/take/route/freq/duration/disp/refills w/ per-row Order vs Other-Actions + Ordered status, no interaction checks warning), LABS w/ lab company + ASSIGNED TO + H history flags, SMART FORMS, PHYSICIAN EDUCATION PDFs, rich-text NOTES blocks (clinical guidance embedded in the set), IMMUNIZATIONS w/ Immunization Schedule link, FOLLOW-UP APPOINTMENTS interval checklist (2-3D/1W/2W/3W/4W/6W/2M/3M/4M/6M/1Y), REFERRALS by specialty (nutritionist/optometry/podiatry/endo/nephro/neuro), PATIENT EDUCATION PDFs; Select All + Order Selected; adding meds to PAST encounters warns they skip the active med list/ICW until reconciled
- **PFO today:** none
- **Gap:** condition order-set bundles
- **PFO implementation:** Order-sets module — condition bundles (meds/labs/forms/education/follow-up/referrals) w/ Select-All order

### ECW-CL-74 — progress-note Subjective carries a "Verify Histories" one-click att...

- **Screen & fields (eCW):** progress-note Subjective carries a "Verify Histories" one-click attestation button beside Chief Complaints — marks med/medical/surgical/family/social histories reviewed for the visit; right panel shows "PN last refreshed \<time>" + a banner "Right Panel data last modified \<date>" when panel data is stale vs note
- **PFO today:** has founder Verified checkbox pattern for allergies/reviews but no one-click all-histories attestation or panel-staleness banner
- **Enh:** Verify Histories one-tap + right-rail staleness indicator
- **PFO implementation:** Encounter subjective — Verify-Histories one-tap attestation + right-rail staleness banner (extends live Verified pattern)

### ECW-CL-75 — Therapeutic Injection Details editor

- **Screen & fields (eCW):** Therapeutic Injection Details editor: left rail = searchable injectable catalog (drug + EP/PP CPT/J-code per row, e.g. B12 Injection - EP 96372 J3420); form = T.Injection-given-in-past flag, Biological/Medication Wasted qty, Visit Date (locked to encounter), Dose, Dose Number, Lot Number picker, Route, Location (body site), Exp Date, Status(Pending/…)+Reason, Given By (…/Me shortcut), Given Date/Time, Manufacturer; right rail = link to Assessment(s) checkboxes (dx justification), Allergies list, Interactions button, Comments w/ macro buttons; footer = Decrement the dose (inventory draw-down) + Billable toggle + Save and New
- **PFO today:** no therapeutic-injection editor
- **Gap:** T.Inj administration editor w/ J-code billing linkage + inventory decrement + dx-link (mock-seam for interactions)
- **PFO implementation:** Immunizations/injections — therapeutic-injection editor (J-code billing link, inventory decrement, dx-link)

### ECW-CL-76 — opening a progress note for a FUTURE-dated encounter throws a confi...

- **Screen & fields (eCW):** opening a progress note for a FUTURE-dated encounter throws a confirm guard "The encounter is scheduled on future date: \<date>. Are you sure you want to access it?"
- **PFO today:** no future-encounter access guard
- **Enh:** confirm before charting on future encounters (prevents wrong-date documentation)
- **PFO implementation:** Server — confirm guard when opening future-dated encounter note

### ECW-CL-77 — NOTE TEMPLATE engine

- **Screen & fields (eCW):** NOTE TEMPLATE engine: Copy And Merge Templates dialog = Generic vs PATIENT-SPECIFIC templates, find/filter by facility, per-template Access (Public/Private) + Preview, right-rail SECTION PICKER (CC, Current Medication, Medical/Surgical/Family/Social History, Allergies, ROS, Vitals, Examination, Physical Exam, Assessment, Therapeutic, Treatment...) so merge applies only chosen sections onto the open note (Merge Template button); Template List admin console = category dropdown by SPECIALTY (Allergy/Cardiovascular/Dermatologic/.../Psychiatric) + My Favorites, per-facility filter, Add New Template, per-row favorite star + edit/delete, Template Categories manager, Configure My Favorites, Associate CC (link templates to chief complaints); Create/Update Template form = Name, Description, Facility, Visit Type, Category, Private/Public access, Add as Favorite, and ASSOCIATED ORDER SETS checklist (template pulls order sets, e.g. "ENT: Asthma with acute exacerbation, pediatric"); templates reachable from bottom-toolbar Templates button or File>Templates menu
- **PFO today:** no note-template library
- **Gap:** template library w/ section-scoped merge + CC association + order-set linkage + public/private sharing
- **PFO implementation:** CF binding — note template library (generic/patient-specific, section-scoped merge, CC association, order-set link)

### ECW-CL-78 — ROS/Exam structured-content CUSTOM dictionary editing in place

- **Screen & fields (eCW):** ROS/Exam structured-content CUSTOM dictionary editing in place: the ROS window left rail lists reusable category templates (per-specialty + user-authored like "Meredith Test", "St. Johns"), top tabs per system (General/Constitutional...Neurologic), symptom grid = Symptom / Presence chevron / Notes with per-row X; a CUSTOM menu offers New Item, New Category, Update Item, Update Category, Delete Item — clinicians extend the ROS symptom dictionary without leaving the note; footer = Default For All / Clear All / Default per Category / Clear Category + macro buttons
- **PFO today:** fixed ROS fields
- **Gap:** user-extensible ROS/exam dictionaries w/ per-category defaults
- **PFO implementation:** CF binding — user-extensible ROS/exam dictionaries edited in place

### ECW-CL-79 — Family History CUSTOMIZE COLUMNS dialog

- **Screen & fields (eCW):** Family History CUSTOMIZE COLUMNS dialog: the condition checkbox columns of the relatives grid are user-configurable rows — each = ICD Code + Diagnosis + SNOMED Code mapping + CUSTOM NAME (short label, e.g. 310.9 "Unspecified nonpsychotic mental disorder..." -> "Mental Illness") + My Fav toggle + delete; "Show custom names in progress note" checkbox; SNOMED Logs button
- **PFO today:** Backend committed — `FamilyHistoryRoutes` (commit d4362657a): `/api/patient-family-history` full member×condition grid, `/condition-dictionary` (27 standard conditions auto-seeded, org-customizable), member CRUD, condition checkbox CRUD with ON CONFLICT guard, Non-Contributory + "Family History Verified" attestations.
- **Gap:** CF UI — condition customize columns dialog (ICD→SNOMED mapping, custom display name, My Fav toggle) + member grid rendering
- **PFO implementation:** CF calls `GET /api/patient-family-history/condition-dictionary` for columns, `POST /conditions` per checkbox change

### ECW-CL-80 — histories wizard chain + allergy safety banner

- **Screen & fields (eCW):** histories wizard chain + allergy safety banner: the Verify Histories popups are a chained wizard (footer prev/next: Med Reconciliation \<-> Past Medical History \<-> Surgical History \<-> Family History \<-> Social History) so staff walk every history section in order; allergy entry shows a yellow banner "Manual free-text entry of an allergy will exclude this substance from automated drug-allergy checking and may endanger patient safety"
- **PFO today:** allergies Verified checkbox exists; no chained histories wizard
- **Enh:** chained history-review wizard + free-text-allergy safety warning
- **PFO implementation:** Encounter — chained history-review wizard + free-text-allergy safety banner

### ECW-CL-81 — PROBLEM LIST window

- **Screen & fields (eCW):** PROBLEM LIST window (standalone, from note or hub): filter by Dx Type + Clinical Status, N.K.P (No Known Problems) attestation checkbox, grid = Type/Code/Diagnosis/Risk/Onset Date/W-U Status/Clinical Status/Added On/Modified On/Modified By/Resolved On, actions = Add ICD, Remove, COPY TO MEDICAL HX (problem->history demotion), ICD-10 MIGRATION assist tool, EXTERNAL DX tab (dx from external/CCDA sources kept separate), Copy + View Log, hint banner "Select Diagnosis description to access Problem List Notes"
- **PFO today:** no problem list
- **Gap:** problem-list window w/ lifecycle columns + external-dx segregation + copy-to-history
- **PFO implementation:** `patient-chart.html` — problem-list window (lifecycle columns, external-dx tab, copy-to-history, N.K.P.)

### ECW-CL-82 — ADVANCED ICD-10 SEARCH

- **Screen & fields (eCW):** ADVANCED ICD-10 SEARCH (specificity builder): from a base assessment, dialog decomposes the dx into clinical AXIS columns each w/ radio options — e.g. diabetes: long-term-insulin use (with/without/unspecified), complication class (none/circulatory/arthropathy/hyperglycemia/hypoglycemia/kidney...), ophthalmic complication detail (retinopathy/cataract/macular edema...), retinopathy severity (mild/moderate/severe nonproliferative/proliferative), proliferative type, macular edema, LATERALITY, CKD stage — selections compose the fully-specific billable ICD-10; Reset/OK/Close
- **PFO today:** flat dx code entry
- **Gap:** guided ICD-10 specificity refinement (kills unspecified-code denials)
- **PFO implementation:** Encounter dx entry — guided ICD-10 specificity builder (axis radio columns composing billable code)

### ECW-CL-83 — CONFIGURE MACROS / SMART NOTES console

- **Screen & fields (eCW):** CONFIGURE MACROS / SMART NOTES console (extends macro note 252): two tabs MACROS LIST + SMART NOTES; macros are SCOPED per note section (Global / Assessments / HPI / Procedure / Treatment), each entry = Name + SHORTCUT abbreviation (e.g. "Flu Symptoms" = FS, typing the shortcut expands the canned text) + Edit/Delete, searchable list + New
- **PFO today:** no macro engine
- **Gap:** user-managed dot-phrase console w/ per-section scoping + shortcut expansion
- **PFO implementation:** CF binding — macros/dot-phrase console (per-section scope, shortcut expansion)

### ECW-CL-84 — SMART NOTES

- **Screen & fields (eCW):** SMART NOTES w/ embedded PROMPTS (extends macro-console note): a Smart Note = Name + Shortcut + rich Notes body, and the author can insert reusable PROMPTS at the cursor — prompt library rail w/ New Prompt, each prompt = CATEGORY-scoped vs GLOBAL, Prompt Name + TYPE (e.g. Yes/No choice, pick-list, Education to Patient) — so expanding the shortcut in a note yields fill-in-the-blank interactive tokens, not just static text; guard toast "Please put the cursor in the Notes field to use the prompt"
- **PFO today:** none
- **Gap:** templated dot-phrases w/ interactive prompt tokens
- **PFO implementation:** CF binding — smart notes w/ interactive prompt tokens (fill-in-the-blank expansions)

### ECW-CL-85 — v12 STRUCTURED TEMPLATES on HPI items

- **Screen & fields (eCW):** v12 STRUCTURED TEMPLATES on HPI items (extends the Configure-Structured-Data note on demographics): any HPI symptom/category item can carry an S (structured) flag — "Save Structured Flag" — and open the same CONFIGURE STRUCTURED DATA designer scoped to that item (Grid vs WIZARD render, per-question Name / TYPE incl. free text, dropdown value lists, DATE mm/dd/yyyy, number / Mandatory / TRIGGER conditional children / Default / Reorder / Customize Structured Text); charting that item then renders the authored question set as a fill-in grid (Default / Default For All / Clear / Clear All) and answers flow into the note narrative — i.e. user-authored mini-forms embedded in HPI
- **PFO today:** DYNAMIC_FORMS_CONFIGURATION is portal-facing only
- **Gap:** clinician-authored structured question sets on note items (same sections->questions shape as CF work)
- **PFO implementation:** CF binding (flagship) — clinician-authored structured question sets on note items (trigger children, grid/wizard, narrative output)

---

## Review Epilog — 2026-07-24

- Live build updated to 1943; gate 251/251 GREEN; MR2–MR7 delivered, MR8/MR9/MR10 active.
- Three 🟢 live rows confirmed: ECW-CL-3 (EncounterCF progress note), ECW-CL-4 (structured HPI), ECW-CL-12 (ImmunizationsCF).
- Backends for ECW-CL-21 (SDOH), ECW-CL-66 (VisitSummary), ECW-CL-79 (FamilyHistory), ECW-CL-36–39 (VitalsHistory) committed; CF UI binding in progress.
- No individual parity rows updated; status regeneration is AgentECW's lane on MasterSchedule sync.

