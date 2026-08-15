---
title: "PracticeForceOneCernerTable"
---

# PracticeForceOneCernerTable — Cerner (Oracle Health) Screen Benchmark

**Owner:** AgentCerner · **Created:** 2026-07-07 (founder directive: follow the AgentECW path for Cerner) · **Status:** ✅ REVIEW COMPLETE 2026-07-08 — **184 rows from all 1,116 screen reviews (203 field-level findings; every folder complete)**. Sizes and Founder-disposition column await founder triage. Working files: `Downloads\Cerner\review-ledger.tsv` + `cerner-gap-notes.md` (rerun-safe if new imagery lands; the CST catalog has ~180 more workbooks if pharmacy/RadNet/SurgiNet/onc/OB domains are wanted).

**Last reviewed: 2026-07-24** | Cerner parity review: **COMPLETE 2026-07-08** (1,116 screens reviewed, 184 CER-* rows shipped). No new imagery since completion. Live build: 1943 | Gate: 251/251 GREEN | MR2–MR7 DELIVERED · MR8/MR9/MR10 ACTIVE

## Charter

Benchmark PracticeForceOne against Cerner (Oracle Health) — desktop **PowerChart**
(clinicals), **Millennium Scheduling Appointment Book**, **Registration/RevCycle**,
**FirstNet/LaunchPoint** (ED), referral management, and the **HealtheLife** patient
portal — using the collected screen imagery. Every **gap** (Cerner has it, PFO
doesn't) and **enhancement** (PFO has it, but the Cerner screen shows a materially
better treatment) becomes one accountable row, same style as
[PracticeForceOneECWTable](<PracticeForceOneECWTable.md>) /
[PracticeForceOneMR4Table](<PracticeForceOneMR4Table.md>).

## Evidence corpus + review coverage

`C:\Users\ptm\Downloads\Cerner` — 1,053 desktop + 63 mobile screenshots (screenshots
only, per founder); `INDEX.md` maps each source folder to its origin PDF/URL;
filenames encode `<source>-p<pdf-page>-<seq>.png` so every row traces to a page.

| Source folder | Screens | Review state |
|---|---|---|
| cst-ambulatory-nurse | 145 | ✅ REVIEWED (richest: iView, PowerForms, Message Centre, Organizer, orders) |
| cst-finance-accounts-receivable | 61 | ✅ REVIEWED (insurance/COB, charge lifecycle, reporting portal, ROI) |
| cst-him-referral-clerk | 41 | ✅ REVIEWED (appointment book, referral triage, pre-registration, WQM) |
| cst-physician-emergency | 98 | ✅ REVIEWED (LaunchPoint, quick orders, Rx routing, discharge, WSBC) |
| cst-private-moa-reg-sched | 103 | ✅ REVIEWED (blocked time, recurring series, Shuffle, request queues, Past Due Arrivals) |
| cst-provider-ambulatory | 97 | ✅ REVIEWED (Patient Overview, PowerPlan visit binding, dosage calc, structured histories) |
| cst-registration-foundational · cst-scheduling-foundational · cst-scheduling-essentials | 117 | ✅ REVIEWED (external MPI, Expected Arrivals, chair/nurse duration split, inquiry column prefs) |
| cst-provider-powerchart-foundations | 76 | ✅ REVIEWED (Encounter Search, I-PASS handoff, Order Reconciliation, Therapeutic Substitution) |
| healthpei-ed-launchpoint · firstnet-stlukes | 54 | ✅ REVIEWED (vitals-on-board, Dispositions review board, education library, override capture) |
| healthelife-mclaren · healthelife-menninger | 23 | ✅ REVIEWED (opened CER-PT: enrollment, Clipboards, virtual visits, Notify Receipts) |
| healthpei-scheduling-manual | 97 | ✅ REVIEWED (comment layers, booking defaults, appt link, history audit) |
| mclaren-revcycle · monhealth-him | 31 | ✅ REVIEWED (Demographics Bar config; HIM deficiency queues — mostly covered) |
| mobile | 63 | ✅ REVIEWED (opened CER-MB: Connect Nursing, Message Center, PowerChart Touch, offline sync) |
| phsa-ed-provider-workbook | 107 | ✅ REVIEWED (Tracking Shell multi-site census; rest confirmed CST-ED coverage) |

## Gap & Enhancement Ledger

Row IDs: `CER-<domain>-<n>`. Status ☐ = proposed (awaiting founder disposition ⏳).
Sizes S/M/L. Full field detail per row lives in `Downloads\Cerner\cerner-gap-notes.md`
(same order); Evidence = source folder (see filename page refs in `review-ledger.tsv`).

### CER-GL — Global chrome & platform

| ID | Cerner screen/feature | Evidence | What Cerner shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|
| CER-GL-1 | Demographics banner | amb-nurse | Every chart screen: DOB/Age/Gender, MRN/Enc#/PHN, CODE STATUS, live Process/Disease/Isolation alert fields, location + enc type/status + attending | basic patient header | GAP | banner w/ code-status + safety/process/isolation alerts + encounter status | M | ☐ |
| CER-GL-2 | Discharged-patient guard | amb-nurse | Persistent yellow warning when viewing a discharged/closed encounter | none | GAP | chart-context state warnings (wrong-encounter protection) | S | ☐ |
| CER-GL-3 | Tabbed patient sessions | amb-nurse | Multiple charts open as tabs, full banner each | single-patient nav | ENH | patient tab strip (M6-9 PatientContext is the seed) | M | ☐ |
| CER-GL-4 | Role-scoped chart + Print to PDF | finance-ar | Finance clerk sees a collapsed chart menu subset; whole-chart Print-to-PDF | RBAC hides pages | ENH | per-role chart-section scoping + chart PDF export | M | ☐ |
| CER-GL-5 | Multi-patient team tools | amb-nurse | CareCompass, Clinical Leader Organizer, Multi-Patient Task List, Staff Assignment on the toolbar | none | GAP | care-team multi-patient organizer surfaces | L | ☐ |
| CER-GL-6 | In-app help portal | amb-nurse | eCoach/LearningLIVE contextual help button + role/module articles | per-page "?" help guide | ENH | PFO pattern already close — extend cross-app | S | ☐ |
| CER-GL-7 | Typed patient-list builder | pchart-found, provider-amb | List engine w/ types Location/Assignment/CareTeam/Custom/Medical-Service/Provider-Group/QUERY/Relationship/SCHEDULED, each w/ criteria facets; result = live census/worklist tab per list | fixed patient search | GAP | user-built typed patient lists (census/panel worklists; CF-adjacent query lists) | L | ☐ |
| CER-GL-8 | Purpose-of-access prompt | provider-amb | Opening a chart from a multi-patient list forces "Assign a Relationship" (Consulting/Covering/Education/Quality Review/Research/Triage); declared purpose stored w/ the access | RBAC only, no purpose capture | GAP | access-purpose prompt + audit dimension (HIPAA minimum-necessary; pairs w/ CER-GL-7) | M | ☐ |
| CER-GL-9 | Patient Overview rounding grid | provider-amb | Multi-patient MPage FED BY the user's lists: per-row new-results count, numbered dx, open-actions count, ILLNESS-SEVERITY chip (Watch/Unstable/Discharging), bulk establish-relationships | kanban is appointment-driven only | GAP | list-driven multi-patient overview w/ severity/new-results columns | L | ☐ |
| CER-GL-10 | Encounter Search | pchart-found | Two-pane dialog: person search (PHN/MRN/name/DOB/postal/phone/enc#/visit#/HISTORICAL MRN) w/ VIP/Deceased/Alerts flag columns → pick a specific encounter (facility, enc type, med service, unit/room/bed) to open the chart IN ENCOUNTER CONTEXT | patient search opens the patient, no encounter pick | ENH | encounter-context chart open + flag columns in search results | M | ☐ |
| CER-GL-11 | Configurable demographics banner | mclaren-revcycle | Demographics Bar Properties: per-site/user banner LAYOUT EDITOR — each field (Name/MRN/DOB/Ins Carrier/custom fields) placed on a grid w/ position+size+color; add/update/delete fields | fixed patient header | ENH | config-driven banner layout (direct CF-lane fit: banner as a pfo-cf-v1 config; extends CER-GL-1) | M | ☐ |

### CER-CL — Clinical / PowerChart

| ID | Cerner screen/feature | Evidence | What Cerner shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|
| CER-CL-1 | Chart section breadth | amb-nurse | Chart TOC incl MAR, iView/I&O, Histories, Growth Chart, Immunizations, Lines/Tubes/Drains, Calculators, Form Browser, Med Request | patient-chart sections | GAP | prioritized chart-section roadmap (per CER rows below) | L | ☐ |
| CER-CL-2 | Ambulatory Workflow MPage | amb-nurse | Single-scroll visit rail w/ per-section counts + inline ad-hoc form launcher | encounter phase stepper | ENH | single-scroll workflow surface option | M | ☐ |
| CER-CL-3 | Workflow component picker | amb-nurse | Per-user checkbox list toggles workflow sections + Clear Preferences | fixed sections | ENH | user-composable workflow — direct CF-lane (pfo-cf-v1) validation | M | ☐ |
| CER-CL-4 | Summary MPage | amb-nurse | 3-col visit snapshot: vitals/labs LATEST-vs-PREVIOUS w/ trend arrows, reminders (overdue/due/future), portal-enrolled flag, integrated calculators, Rx-vs-orders tabs | chart sections | GAP | visit snapshot w/ deltas + reminders + portal flag | L | ☐ |
| CER-CL-5 | Visits component | amb-nurse | Today + Last-10 visits w/ "Currently Viewing" marker | encounters list | ENH | currently-viewing marker + windowed history | S | ☐ |
| CER-CL-6 | Active Issues lifecycle | amb-nurse | Problem list w/ visit PRIORITY ranking, This-Visit tag, CHRONIC chip, Resolve → Resolved-Chronic section, ICD-10 coding | flat dx list | GAP | problem-list lifecycle feeding the encounter | M | ☐ |
| CER-CL-7 | Visit-dx vs problem duality | amb-nurse | "Diagnosis addressed this visit" grid separate from longitudinal Problems + CONVERT between them | single list | GAP | visit-diagnosis vs problem-list split (drives billing dx pointers) | M | ☐ |
| CER-CL-8 | Problem metadata | amb-nurse | Responsible provider, onset at-age/date, Confirmation (confirmed/patient-stated), ranking, file-to-PMH, SNOMED lifecycle metadata | code+desc | GAP | problem metadata depth | M | ☐ |
| CER-CL-9 | Terminology search service | amb-nurse | IMO/Multum dialogs: search by name/code, synonyms, concept family, cross-mapping, favorites (problems + allergens) | raw ICD/med lists | GAP | terminology-layer search UX (eCW parallel confirmed) | L | ☐ |
| CER-CL-10 | Allergy module | amb-nurse | NKA vs NKMA buttons, severity/reactions/interaction columns, REVERSE allergy check vs active meds, Reviewed+Reviewed-By audit columns | allergies + Verified live (1693) | ENH | reverse-check + NKA/NKMA + reviewed-by/at audit | M | ☐ |
| CER-CL-11 | iView flowsheet engine | amb-nurse | Bands→sections→timestamped cell grid; Critical/High/Low/Abnormal/Unauth/Flag filters | per-encounter vitals | GAP | longitudinal flowsheet grid | L | ☐ |
| CER-CL-12 | Sign-to-authenticate charting | amb-nurse | Unsigned (purple) cells until signed; cell right-click Modify/Unchart/Change-Date/Comment/History | direct save | GAP | sign step + per-value audit trail | L | ☐ |
| CER-CL-13 | iView customization | amb-nurse | Per-user row On-View checkboxes, dynamic groups, navigator-band picker | fixed forms | ENH | user-customizable rows/bands (CF JSON fit) | M | ☐ |
| CER-CL-14 | Results Review | amb-nurse | Tabbed results browser (labs/path/micro/transfusion/diagnostics/vitals + external-provincial), flowsheet/level pickers, Table/Group/List, (H)/(L) color flags, clinical-range paging | labs mocked | GAP | per-patient results browser — most-used clinician surface | L | ☐ |
| CER-CL-15 | Result details + forward | amb-nurse | Versioned result history, normal+critical ranges, accession/contributor provenance, Forward/Refuse to provider w/ action | flat values | GAP | result versioning + forward-for-review | M | ☐ |
| CER-CL-16 | Result trend graphing | amb-nurse | Select rows → multi-analyte trend graph | dashboard charts only | GAP | per-patient result graphing | M | ☐ |
| CER-CL-17 | Result tagging basket | amb-nurse | Tag lab cells → toolbar basket → reuse (insert into note) | none | ENH | tag-and-carry results | S | ☐ |
| CER-CL-18 | DI report viewer | amb-nurse | Structured Reason/History/Comparison/Findings/Impression + PACS launch | medical-evidence basic | GAP | DI report structure + imaging hook | M | ☐ |
| CER-CL-19 | POC device capture | amb-nurse | Glucose POCT w/ meter serial, testing reason, interventions | none | GAP | point-of-care device results w/ provenance | S | ☐ |
| CER-CL-20 | Early-warning + notification rows | amb-nurse | MEWS scores, sedation scales, provider-notified documentation rows | none | GAP | scoring + notification documentation | M | ☐ |
| CER-CL-21 | Order-driven task list | amb-nurse | Tasks generated from orders; Chart Done/Done-w/-time/NOT-Done(reason)/Quick Chart/Reschedule; shift-template timeframes | generic worklist | GAP | task engine w/ chart-done semantics | L | ☐ |
| CER-CL-22 | MAR / MAR Summary | amb-nurse | Time-column med-administration grid; Scheduled/PRN/Continuous bands; overdue flags | none | GAP | MAR surface (infusion clinics = ambulatory case) | L | ☐ |
| CER-CL-23 | Note template library | amb-nurse | 145 note templates w/ per-user favorites + POSITION-filtered note types | single note shape | GAP | template catalog + favorites + role scoping | M | ☐ |
| CER-CL-24 | Results-into-note + draft lifecycle | amb-nurse | Embed discrete lab values into note; Save vs Sign/Submit | free text | GAP | insert-results + draft-vs-signed notes | M | ☐ |
| CER-CL-25 | Sign-time routing | amb-nurse | Recipients as SIGN (cosign) vs REVIEW/CC; favorites/recent/RELATIONSHIP pickers; create-provider-letter | none | GAP | endorsement/CC routing at signature | M | ☐ |
| CER-CL-26 | Amend-by-addendum | amb-nurse | Modify signed note = STRIKETHROUGH + required Addendum + "Revised" banner + signature lines | in-place edits | GAP | revision provenance — documentation-integrity grade | M | ☐ |
| CER-CL-27 | In-error retraction | amb-nurse | In-Error keeps doc w/ reason comment + warned viewing | none | GAP | doc retraction w/ audit | M | ☐ |
| CER-CL-28 | Documentation browser | amb-nurse | Doc list + preview pane, Previous/Next, visit-window chips, My-Notes-Only, group-by-encounter, doc-CLASS filters (referral/ED/external/care-plans/handoff) | flat docs | GAP | doc browser + class taxonomy | M | ☐ |
| CER-CL-29 | Doc lifecycle states | finance-ar | 16 filterable states (Anticipated…Superseded…Transcribed); saveable/SHARED filter sets + defaults | submitted/reviewed | GAP | doc state machine + shared saved filters | M | ☐ |
| CER-CL-30 | Form Browser + corrections | amb-nurse | Per-patient chronological form tree w/ auth status; View/Modify/UNCHART/History/Change-Date | dynamic-forms review | GAP | charting correction model on forms | M | ☐ |
| CER-CL-31 | PowerForm constructs | amb-nurse | Section nav w/ REQUIRED-section markers, performed-on vs charted time, In-Progress state, pain/fall/risk scale library | CF lane forms | ENH | CF-1 contract: required sections + performed-on + score-scale types | M | ☐ |
| CER-CL-32 | Form-answer→order automation | amb-nurse | ID-screen answers auto-trigger isolation + swab orders | rules.html CDS | GAP | form-answer→order hook (CF/CR + K-autopilot convergence) | M | ☐ |
| CER-CL-33 | Social history framework | amb-nurse | Category grid (tobacco/alcohol/substance/sexual/nutrition/home/employment/psychosocial) w/ structured instruments + mark-all-reviewed | none | GAP | structured social history (quality-measure feed) | M | ☐ |
| CER-CL-34 | Home-med documentation | amb-nurse | Document-by-Hx w/ info source, compliance tab, finish-later state, missing-required counter | none | GAP | home-medication history workflow | M | ☐ |
| CER-CL-35 | Med list + reconciliation | amb-nurse | Reconciliation status chips (Hx/Admission/Outpatient), interaction check, cosign + nurse-review queues | med codes reference | GAP | patient med list w/ rec-state + queues | L | ☐ |
| CER-CL-36 | Measurement provenance + derivation | amb-nurse | Dosing-weight source, auto unit conversion, auto IBW/BSA/BMI, BP method/site | vitals basic | GAP | derived-value calc + provenance | S | ☐ |
| CER-CL-37 | Transport ticket + process alerts | amb-nurse | Auto-composed safety doc; standard process-alert vocabulary (fall risk, seizure, violence…) | none | GAP | transport/handoff ticket + alert vocabulary | S | ☐ |
| CER-CL-38 | Handoff Tool | amb-nurse | Docs In-Progress/Completed + printable handoff summary | none | GAP | printable patient handoff | S | ☐ |
| CER-CL-39 | Risk-screen→patient flag | amb-nurse | Violence-risk screen outcome sets persistent process alert in banner | none | GAP | screening instruments that set safety flags | S | ☐ |
| CER-CL-40 | ACP structures | amb-nurse | Advance-directive/resuscitation-ORDER/goals-of-care band + ACP form w/ document-LOCATION tracking | none | GAP | ACP/code-status data structures | M | ☐ |
| CER-CL-41 | Clinical visit-status vocabulary | amb-nurse | Treatment completed/no-show/LEFT AMA/course completed/discontinued | appointment status only | GAP | clinical visit-outcome status | S | ☐ |
| CER-CL-42 | Person comments w/ templates | amb-nurse | Typed operational/safety comments (e.g. call security) surfaced at check-in | none | GAP | person-level operational comments | S | ☐ |
| CER-CL-43 | Provider-relationship registry | amb-nurse | LIFETIME (PCP) vs ENCOUNTER (admitting/attending/consulting) relationships + clinic flags | practice/provider link | GAP | typed provider relationships | M | ☐ |
| CER-CL-44 | Patient-info tabs | amb-nurse | Gender+Pronouns, Preferred Info, Community Contacts, SDM/Guardianship w/ form-completion status | flat demographics | GAP | pronouns/preferred + SDM/guardianship | M | ☐ |
| CER-CL-45 | Links / statutory forms | physician-emerg | Workflow LINKS component: reference content, CareConnect, statutory PDF form library (e.g. Mental Health Act forms) per specialty | none | GAP | jurisdiction/statutory form-library hook | S | ☐ |
| CER-CL-46 | Allergy provenance | physician-emerg | Info source (patient/family), recorded-on-behalf-of, drug/food/ENVIRONMENT category, onset at-age, no-checking-terminology warning, allergy RECONCILIATION stamp (who/when) | allergies + Verified live | ENH | per-allergen provenance + reconciliation-completed stamp | M | ☐ |
| CER-CL-47 | Autotext (dot-phrases) | physician-emerg | Typing ",,prefix" in any rich-text field pops a phrase library inserting templated content | none | GAP | autotext/dot-phrase engine (high clinician-speed value; eCW parallel) | M | ☐ |
| CER-CL-48 | Exam templates w/ editable normals | physician-emerg | Per-system exam paragraphs w/ [BRACKETED NORMALS] edited in place; variants per context | free-text exam | GAP | exam template w/ editable normals | M | ☐ |
| CER-CL-49 | Section reconciliation status | physician-emerg | Problems/allergies/meds sections show "Reconciliation Status: Incomplete" + Complete Reconciliation button — per-visit attestation | Verified checkbox per item | ENH | section-level reconciliation state (extends founder Verified pattern) | M | ☐ |
| CER-CL-50 | Per-diagnosis plan | physician-emerg | Impression & Plan: numbered plan text box PER discharge dx, auto-seeded from the dx list | single plan field | GAP | per-dx plan structure (eCW confirms the same model) | M | ☐ |
| CER-CL-51 | Dynamic Documentation | physician-emerg | Note AUTO-COMPOSED from discrete chart data (complaint, vitals w/ units, exam, PMH, meds inpatient-vs-home, allergies, latest labs) — clinician edits rather than writes | manual note | GAP | note auto-composition from structured data | L | ☐ |
| CER-CL-52 | Workers-comp form notes | physician-emerg | WorkSafeBC note types w/ AUTO vs MANUAL SEND to the comp board; embedded Physician's First Report questionnaire + return-to-work planning + 3-axis coded injury picklists (Body Part / Anatomical Position / Nature of Injury) | none | GAP | payer/comp-board form-note templates w/ auto-transmission + coded injury classification | L | ☐ |
| CER-CL-53 | Structured Histories module | provider-amb | SURGICAL history CPT4-CODED (autocomplete + free-text fallback) w/ per-procedure surgeon/IMPLANT/date + detail panel; tabs Family/Procedure/Social/PREGNANCY/IMPLANTS; Mark-all-as-Reviewed attestation | histories free-text at best | GAP | coded procedure/surgical history + family/pregnancy/implant registries w/ reviewed stamp | L | ☐ |
| CER-CL-54 | I-PASS handoff framework | pchart-found | Per-patient I-PASS tab: ILLNESS-SEVERITY one-click chips (Unstable/Watch/Stable/Discharging) that color the multi-patient grid, Patient Summary free-text, shared ACTIONS checklist + Situational-Awareness comments (attributed/timestamped, care-team-scoped); relationship gating cross-hatches grid cells | no handoff surface | GAP | structured handoff (severity + summary + shared actions) feeding the multi-patient grid (pairs w/ CER-GL-9) | L | ☐ |
| CER-CL-55 | Teaching-physician attestation | firstnet-2007 | Dedicated Addendum note type w/ quick-picks: participated-in-care (E&M), personally-performed (history/exam/MDM), case-discussed-with-resident, procedures supervised vs performed, agree-w/-resident w/ exceptions | none | GAP | attending-attestation addendum (teaching-clinic billing compliance; low priority for private-practice target) | S | ☐ |

### CER-OR — Orders & plans

| ID | Cerner screen/feature | Evidence | What Cerner shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|
| CER-OR-1 | Order catalog UX | amb-nurse | Care-setting scoping + Home/MY FAVORITES/PUBLIC/SHARED folders | basic entry | GAP | order favorites + shared folders | M | ☐ |
| CER-OR-2 | PowerPlan engine | amb-nurse, finance-ar | Multi-PHASE plans + reusable MODULES, Future/Initiated states, suggested plans, variance viewer | flat orders | GAP | order-set/plan engine w/ phases + future/standing orders | L | ☐ |
| CER-OR-3 | Order lifecycle verbs | amb-nurse | Renew/Copy/Suspend/Activate/Complete/Void + COMMUNICATION-order class + timing windows ("within 4 weeks") | basic status | GAP | order state machine + communication orders | M | ☐ |
| CER-OR-4 | Order info + audit | amb-nurse | Tabs Details/History/Validation/Results/Ingredients; referral orders carry scheduling priority/location/dates | none | GAP | per-order audit + referral-order attrs that drive scheduling | M | ☐ |
| CER-OR-5 | Saved order views | amb-nurse | Preset + user-saveable display filters | none | ENH | saved order-view presets | S | ☐ |
| CER-OR-6 | Order class split | finance-ar | Inpatient / AMBULATORY-IN-OFFICE / PRESCRIPTIONS / documented meds | single class | GAP | in-office-vs-prescription split (matches eCW) | M | ☐ |
| CER-OR-7 | Future-orders chase list | him-referral | Clerk worklist of standing/future orders: look-back (OVERDUE) + look-forward windows, Lab/Rad tabs, Overdue/Due/Upcoming buckets, grace period per order | none | GAP | future-order due-tracking worklist (recall/chase engine) | M | ☐ |
| CER-OR-8 | Quick Orders MPage + signature cart | physician-emerg | Page of PRECONFIGURED one-click orders (conditions/PowerPlans, stat labs, imaging w/ baked instructions, to-go meds, role-targeted consults) + order cart w/ LIST vs ASSOCIATION (dx↔order) views + Modify Details before Sign | search-and-add ordering | GAP | curated quick-order page + signature cart w/ dx association (top clinician-speed construct; CF-configurable layout) | L | ☐ |
| CER-OR-9 | Condition-grouped Rx quick-picks | physician-emerg | ED Prescriptions MPage: discharge Rx grouped specialty→condition, each pick carries a full prebuilt sig (dose/route/freq/duration/dispense/refills); Mine/Public/Shared favorites | med search free-form | GAP | prescription quick-picks w/ prebuilt sigs | M | ☐ |
| CER-OR-10 | Rx routing + printed artifact | physician-emerg | Send To selector at signature (printer / Do-Not-Send reasons); Missing-Required-Details counter blocks Sign; printed Rx w/ allergy list, packaging options, fax fields, prescriber college # | none | GAP | prescription output routing + printable Rx artifact | M | ☐ |
| CER-OR-11 | Referral-as-order | physician-emerg | Referral is a signable ORDER w/ required Scheduling Priority/Location/Reason (250-char), Interpreter Required, CC Provider, Research Study — feeds the scheduling queue | referrals module separate | GAP | referral order w/ required routing fields feeding scheduling | M | ☐ |
| CER-OR-12 | External Rx History | provider-amb | Dedicated Orders-page button pulls the patient's EXTERNAL dispense history (provincial PharmaNet/PBM feed) alongside documented/ordered meds | meds limited to what PFO recorded | GAP | external medication-fill history integration point | L | ☐ |
| CER-OR-13 | PowerPlan future-visit binding | provider-amb | Adding a plan asks This Visit vs Future Inpatient vs FUTURE OUTPATIENT w/ estimated start; multi-phase plans auto-compute per-phase est dates (Week 0/+2/+6), each phase order-now vs order-for-future-visit | orders bound to current encounter only | GAP | order/plan binding to future visits w/ phase offsets (feeds CER-OR-7 chase list) | L | ☐ |
| CER-OR-14 | Dosage Calculator | provider-amb | Weight-based dosing: target mg/kg → calculated dose, adjustment % + ROUNDING RULE + adjust reason; SOURCED params (weight w/ source+timestamp, CrCl Cockroft-Gault, BSA Mosteller) w/ missing-data flags; Apply Dose writes the order | static dose fields | GAP | dose calculator w/ sourced patient parameters (infusion/peds safety) | M | ☐ |
| CER-OR-15 | Payer advisories in order sets | provider-amb | PowerPlans embed PharmaCare Special-Authority coverage notes, biologic non-interchangeability warnings, drug-EQUIV annotations + linked PO/IV alternatives per component | order sets none | ENH | coverage/equivalence guidance inside order sets (pairs w/ eCW formulary row) | M | ☐ |
| CER-OR-16 | Order-sentence autocomplete | provider-amb | Add Order search matches full prebuilt ORDER SENTENCES (drug+dose+route+freq+dispense sig variants), not bare drug names | name-only search | ENH | order-sentence autocomplete | S | ☐ |
| CER-OR-17 | Modality-specific order detail forms | provider-amb | Imaging order: required Pertinent Clinical Indication blocks Sign (Missing Required Details), Pregnant/SPINAL PRECAUTIONS/Transport-Mode safety screens, Scheduling Location routes to an imaging site, CC Provider 1-3 result recipients | orders lack modality detail forms | GAP | per-order-type detail forms w/ required indication + safety screens + result-CC recipients | M | ☐ |
| CER-OR-18 | Order Reconciliation workspace | pchart-found | Admission/Outpatient/Discharge modes: two-column ORDERS PRIOR vs AFTER, per-order continue/discontinue radios (+convert-to-PRESCRIPTION outpatient), home meds convert to inpatient orders w/ Review Schedule, live "N Unreconciled" counter gates Sign, Acknowledge-Remaining bulk action, Reset | no reconciliation surface | GAP | transition-of-care med/order reconciliation workspace (admission/discharge safety + compliance measure) | L | ☐ |
| CER-OR-19 | Therapeutic Substitution | pchart-found | Signing a non-formulary med pops an auto-substitution dialog: proposed equivalent (ramipril 2.5mg ≡ lisinopril 10mg) w/ exception comments — accept OR coded decline reason | none | ENH | formulary-substitution hook at order sign (pairs w/ CER-OR-15 payer advisories) | M | ☐ |
| CER-OR-20 | Decision-support override capture | firstnet-2007 | Allergy/interaction hit at sign lists identified order vs conflicting substance w/ type+severity; REQUIRED CODED OVERRIDE REASON (dropdown + free-text, Apply-To-All) stored w/ the order; inline drug monograph + education leaflet; one-click remove-identified-order | no interaction checking at order entry | GAP | allergy/drug-interaction screen at sign w/ audited override reasons (patient-safety baseline; pairs w/ allergy reverse-check row) | L | ☐ |

### CER-MC — Message Centre

| ID | Cerner screen/feature | Evidence | What Cerner shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|
| CER-MC-1 | Chart-integrated messaging | amb-nurse | Patient+CALLER fields, SAVE-TO-CHART (as phone-call doc), chart-doc attachments, Launch Orders, portal delivery, disable-replies | none | GAP | staff messaging w/ phone-call documentation | L | ☐ |
| CER-MC-2 | Pools + address book | amb-nurse | Personnel/POOL/Distribution-List recipients; global + personal books | none | GAP | team pool inboxes | M | ☐ |
| CER-MC-3 | Unified clinician inbox | amb-nurse | Results-to-endorse, docs-to-sign, messages, REMINDERS, DEFICIENT DOCUMENTS; PROXY coverage; due dates/priority | none | GAP | unified inbox w/ proxy + deficiency queue | L | ☐ |
| CER-MC-4 | Message dispositions + reminders | amb-nurse | Canned action checkboxes + REMIND-ON/DUE-ON scheduling | none | GAP | structured dispositions + follow-up engine | M | ☐ |
| CER-MC-5 | Endorsement + addendum replies | amb-nurse | Accept-All/Reject-All/Accept-and-Next; replies persist as chart addenda | none | GAP | endorsement semantics + chart fidelity | M | ☐ |
| CER-MC-6 | Attachment templates | him-referral | One-click attach Patient Summary / Transition-of-Care | none | ENH | templated attachments | S | ☐ |
| CER-MC-7 | Portal-message open tracking | hlife-mclaren | NOTIFY RECEIPTS worklist: sender-side queue of portal messages the patient has NOT OPENED ("Not Opened in 1 Days" per row) — unread-escalation loop | no read tracking | GAP | message-open tracking + unopened escalation queue (closes the loop on results/instructions sent to patients) | M | ☐ |

### CER-FO — Scheduling & front office

| ID | Cerner screen/feature | Evidence | What Cerner shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|
| CER-FO-1 | Ambulatory Organizer day board | amb-nurse | Per-RESOURCE-GROUP day list (chairs/MD), live status as-of-time (Checked-In→In-Room→Seen-by), reason+chief complaint, count badge | kanban (M6-9) close | ENH | as-of flow states + resource groups + chair/equipment resources | L | ☐ |
| CER-FO-2 | Multi-resource calendar | amb-nurse | Day/Week grid w/ column PER RESOURCE, status-colored blocks, refresh-age cue | single-provider calendar | ENH | multi-resource columns + live coloring | M | ☐ |
| CER-FO-3 | Inline status + EOD reconciliation | amb-nurse | Board-level status edits (Arrived/Check-In/Hold/Cancel/No-Show); end-of-day reconciliation flips encounter type (→Telehealth) | kanban moves | ENH | hold status + EOD reconciliation step | M | ☐ |
| CER-FO-4 | Appointment Book | him-referral, healthpei | BOOKSHELF→color-tabbed BOOKS per clinic + Work-In-Progress panel (Schedule/Confirm/Recur/Suggest/Request/Insert) | provider calendar | GAP | book organization + WIP staging + suggest/request modes | L | ☐ |
| CER-FO-5 | Appointment attribute schema | him-referral | Tabs Details/ORDERS/Move-Criteria/Resource-List/Guidelines/ELIGIBILITY; interpreter/language + specialty attrs | basic modal | GAP | appointment-type schema + eligibility hook at booking | M | ☐ |
| CER-FO-6 | Chart Appointments component | amb-nurse | Past/Future/REQUEST toggles, status TOTALS, per-column filters, visit MODALITY, INTERPRETER flag, scheduling comments | flat list | GAP | totals + interpreter + comments + modality | M | ☐ |
| CER-FO-7 | Label/form printing | amb-nurse | FormFast: patient ID labels + forms per patient | none | GAP | label/wristband + form print pipeline | M | ☐ |
| CER-FO-8 | Appointment request queues | him-referral | Current vs Future patient REQUESTS (request action, appt type, earliest/latest date window, created-by) — a waitlist layer before booking | appointments only | GAP | appointment request/waitlist queue w/ date windows | M | ☐ |
| CER-FO-9 | Confirm packet + itinerary | moa-reg-sched | Confirm dialog: banner alerts, multi-appointment ITINERARY, linked orders, PREPARATIONS instructions (site address, parking, bring health card), Locks/Eligibility/Booking-Notes tabs, Print/Print ABN | confirmation email basic | GAP | itinerary + preparation-instruction packet at confirm | M | ☐ |
| CER-FO-10 | Book view modes + slot inquiry | healthpei | Proportional/non-proportional day, multi-day, week, month per book; right-click Book Request/Confirm/Recur + Slots/Resources inquiry | day/week calendar | ENH | book view modes + slot inquiry | S | ☐ |
| CER-FO-11 | Suggested-schedules engine | healthpei | Auto-suggest bookings w/ tunable prefs: #suggestions, date range, time window, success ratio, day-of-week toggles, optimize-patient-time | manual slot pick | GAP | booking suggestion engine (K-autopilot adjacent) | L | ☐ |
| CER-FO-12 | Setup/cleanup durations | moa-reg-sched | Default slot per appt type + SETUP AND CLEANUP durations distinguished from patient time | single duration | GAP | setup/cleanup buffers per appointment type | S | ☐ |
| CER-FO-13 | Batch ops + linking + locks | healthpei | Appointment action set: Hold, BATCH RESCHEDULE, Check In/Out, Patient Seen, LOCK/UNLOCK, LINK/UNLINK appointments | single-appointment ops | GAP | batch reschedule + appointment linking + locks | M | ☐ |
| CER-FO-14 | Point-of-schedule revenue hooks | healthpei | POST ENCOUNTER/GUARANTOR PAYMENT from the appointment context; MED NEC CHECK + SUPERBILL from the inquiry grid | payments live in RCM pages | GAP | payment capture + med-necessity + superbill at the front desk | M | ☐ |
| CER-FO-15 | Per-user grid columns | healthpei | Schedule-inquiry grids w/ per-user COLUMN PREFERENCES from a field catalog | fixed grids | ENH | user-configurable list columns (CF-adjacent) | S | ☐ |
| CER-FO-16 | Reminder opt-in + fax-out | healthpei | Per-appointment REMINDER opt-in + preferred contact at booking; integrated outbound FAX dialog for referral correspondence | portal confirmations | ENH | reminder opt-in per appointment + fax-out channel | M | ☐ |
| CER-FO-17 | Blocked time | moa-reg-sched | BLOCKED TIME booked as a first-class appointment type against a resource, defaulting to the clinic-hours slot template — vacations/meetings/holds occupy the book like appointments | no resource blocking | GAP | schedule blocking (blocked-time appointment type) | M | ☐ |
| CER-FO-18 | Multi-appointment sequences + group sessions | moa-reg-sched | Suggest engine stages MULTI-APPOINTMENT SEQUENCES (New + F/Up suggested sequentially same day) and books multiple persons into mixed GROUP SESSIONS | one appointment at a time | GAP | multi-appointment sequencing + group-session booking | L | ☐ |
| CER-FO-19 | Recurring appointment series | moa-reg-sched | Recur builds a weekly/pattern series (start/end, pattern, #instances); suggest fills each instance; per-instance Remove/Append; "Recurring Series" tab lists instances w/ INDEPENDENT status/resource/time | no recurrence | GAP | recurring-series booking w/ per-instance management (infusion/PT/rehab case) | L | ☐ |
| CER-FO-20 | Schedule Inquiry (4-axis) | moa-reg-sched | One lookup surface w/ FOUR axes — Person / Resource / Location / Request List — standard inquiry presets, date-time window, action toolbar on results | calendar + appointments list only | GAP | cross-axis schedule inquiry surface (front-desk ops) | M | ☐ |
| CER-FO-21 | Reason-coded appointment lifecycle | moa-reg-sched | Reschedule / Hold / Cancel / No Show each demand a required coded REASON + free-text comments — every state change carries why | status moves w/o reason | GAP | reason codes + comments on appointment state changes (no-show/cancel analytics feed) | S | ☐ |
| CER-FO-22 | Appointment Shuffle | moa-reg-sched | Side-by-side provider columns w/ drag-to-move appointments to rebalance a day; per-column booked count in header | none | ENH | day-rebalancing drag view between providers | M | ☐ |
| CER-FO-23 | Deferred reschedule-request queue | moa-reg-sched | Instead of moving now, staff files a Request for Reschedule w/ the patient's acceptable date-range/weekdays/time-window into a named RESCHEDULE REQUESTS queue, worked later | immediate edits only | GAP | deferred reschedule queue w/ patient constraints (extends CER-FO-8) | M | ☐ |
| CER-FO-24 | Appointment↔encounter linked lifecycle | moa-reg-sched | Cancel dialog surfaces the linked Pre-Outpatient/Preadmit encounter w/ View/Modify/CANCEL ENC (cancel can cascade); Check In shows the same grid w/ payment + charges buttons | appointment and encounter loosely coupled | GAP | appointment-encounter linked lifecycle at cancel/check-in | M | ☐ |
| CER-FO-25 | Per-resource duration split | sched-found | Order-linked infusion booking demands separate required CHAIR TIME (80 min) vs NURSE TIME (50 min) durations + alternate scheduling location + Book Follow-Up + order special instructions | single appointment duration | GAP | multi-resource duration model (room/chair vs staff occupancy; utilization + capacity math) — extends CER-FO-1/CER-FO-12 | M | ☐ |
| CER-FO-26 | Schedule comment layers + contact log | healthpei-sched | SLOT comments, PERSON comments (templated, surfaced in banner), date-ranged RESOURCE comments (time window + days-of-week + exceptions), and per-appointment CONTACT log of date/time-stamped outreach attempts | single appointment note | GAP | comment layers on schedule objects + contact-attempt log (front-desk operational memory) | M | ☐ |
| CER-FO-27 | Per-user booking defaults | healthpei-sched | Scheduling Options: default location + appointment-type synonym, past/future scheduling range, ordered detail fields, auto-refresh timeout, per-conversation tab set | no user defaults for booking | ENH | per-user scheduling workflow defaults (pairs w/ CER-RG-16 org shortlist + inquiry column prefs) | S | ☐ |
| CER-FO-28 | Appointment link/unlink | healthpei-sched | Actions > Link ties an appointment to an existing/new appointment or request w/ required coded LINK REASON + comments; linked set visible from either side | appointments independent | GAP | appointment-to-appointment linkage w/ reason (companion/same-day visits; complements CER-FO-17 sequences + CER-FO-24 encounter link) | S | ☐ |
| CER-FO-29 | Appointment lifecycle audit view | healthpei-sched | Appointment History View: chronological action tree (Schedule → Book → Confirm → Reschedule…) where each node opens the full attribute snapshot at that point + who/when | no appointment audit view | ENH | appointment lifecycle audit viewer (dispute resolution; complements CER-FO-21 reason codes) | S | ☐ |

### CER-RG — Registration

| ID | Cerner screen/feature | Evidence | What Cerner shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|
| CER-RG-1 | Encounter-type taxonomy | amb-nurse, finance-ar | Recurring (series), Pre-Outpatient, Referral, PHONE MESSAGE as first-class encounters | visits only | GAP | encounter-type taxonomy incl series + phone (eCW telephone-encounter parallel) | L | ☐ |
| CER-RG-2 | Pre-registration pipeline | finance-ar, him-referral | Incomplete-pre-reg queue, convert-to-full, pre-reg status, unknown-patient, downtime conversations | portal + staff create | GAP | pre-registration pipeline | M | ☐ |
| CER-RG-3 | MPI search-then-create | him-referral | Person search hits MPI; no-match → Add Person/Add Encounter in place | separate create | ENH | search-then-create flow | S | ☐ |
| CER-RG-4 | Multi-address + preferred contact | finance-ar | 4 address slots + PREFERRED-PHONE designation + interpreter + VIP level | single address | GAP | multi-address + preferred-contact | M | ☐ |
| CER-RG-5 | Typed contact registry | finance-ar | Emergency / Next-of-Kin / LEGAL GUARDIAN / additional | portal emergency contact | GAP | typed contacts incl guardian | S | ☐ |
| CER-RG-6 | Encounter waitlist/referral tabs | finance-ar | View-Encounter tabs incl WAITLIST INFO + REFERRAL INFO + validated-with-patient attestation | encounter page | GAP | encounter↔referral/waitlist linkage + validation flag | M | ☐ |
| CER-RG-7 | In-context registration actions | finance-ar | Right-click "Conversations" (modify insurance, manage CONSENT, location history) from any patient row | page navigation | ENH | in-context action menus on patient rows | M | ☐ |
| CER-RG-8 | Pre-reg w/ provider slots | him-referral | Pre-reg carries referral status/source + provider panel (attending, PCP-VERIFIED, per-specialty slots) | none | GAP | pre-reg record linked to referral + provider slots | M | ☐ |
| CER-RG-9 | Patient preferred services | him-referral | Preferred LAB, preferred DIAGNOSTIC CENTRE, PREFERRED PHARMACY (w/ reason-for-none), drug-coverage special authority, preferred VIRTUAL-HEALTH method + consent | pharmacies reference only | GAP | patient preferred-service-provider slots + telehealth consent | M | ☐ |
| CER-RG-10 | Bedboard room-state grid | moa-reg-sched | Unit tree → room-bed grid w/ bed lifecycle states (Assigned/DIRTY), VIP + visitor status, isolation organisms, requested ACCOMMODATION (Ward/Semi-Private/Ask Patient) | none | ENH | ambulatory analog: exam-room readiness states on the day board | M | ☐ |
| CER-RG-11 | Residency/eligibility attributes | moa-reg-sched | STATUS IN CANADA drives plan choice (Non Resident = self-pay), JURISDICTION FORM SIGNED? flag, PATIENT INTAKE STATUS at insurance capture | coverage fields flat | ENH | eligibility-context attributes at registration (residency/intake/attestation flags) | S | ☐ |
| CER-RG-12 | Qualified-documents print catalog | moa-reg-sched | Per-encounter print catalog: armband label, FACESHEET, lab specimen labels, PHN letter, mailing-address label — printed on demand | no facesheet/label print | GAP | facesheet artifact + encounter-qualified doc printing (extends CER-FO-7) | M | ☐ |
| CER-RG-13 | Past Due Arrivals worklist | moa-reg-sched | Queue of pre-registered encounters whose est-arrival passed w/o arrival; per-row Charges/Orders/Clinical-Event indicators; right-click Cancel/Discharge Encounter (required DISPOSITION incl "No Service Provided") / Register / Export | no-show handling on appointments only | GAP | encounter-hygiene worklist for never-arrived pre-registrations (keeps billing/reporting clean) | M | ☐ |
| CER-RG-14 | External MPI federation | reg-found | Person Search offers an MPI SEARCH against the external/provincial client registry (async w/ cancel; input-combination validation) — local no-match can still resolve provincially before Add Person | local patients table only | GAP | external patient-registry lookup hook at registration (US analog: regional HIE/EMPI query) | L | ☐ |
| CER-RG-15 | Today's Expected Arrivals worklist | reg-found | Location-scoped (clinic-tree multi-select) day queue of encounters expected to arrive, worked alongside Past Due Arrivals — front-desk arrival board driven by est-arrival date/time | appointments list only | GAP | expected-arrivals day queue (pairs w/ CER-RG-13) | M | ☐ |
| CER-RG-16 | Per-user organization shortlist | hlife-mclaren | Encounter Creation prefs: DEFAULT ORGANIZATION + "I Typically Work At" shortlist (limit 5) from the full org list + ask-once-per-session toggle | single practice context per user | ENH | per-user multi-location shortlist for encounter/appointment creation (matters once a tenant has many sites) | S | ☐ |
| CER-RG-17 | Portal access-offered capture | hlife-mclaren | Registration carries "HealtheLife Portal ACCESS OFFERED: Yes / No / PATIENT DECLINED" per patient — staff attestation feeding compliance/adoption metrics | no offer-status capture | ENH | portal-offer status field at registration/check-in (drives enrollment outreach lists) | S | ☐ |

### CER-BI — Billing / RCM

| ID | Cerner screen/feature | Evidence | What Cerner shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|
| CER-BI-1 | Coverage verification + guarantor | finance-ar | Per-coverage VERIFY status/date/time stamp, GUARANTOR w/ relationship, ACCIDENT-RELATED flag (TPL), plan effective/expiry | eligibility pages exist | GAP | verification stamp + guarantor entity + TPL flag + coverage windows | L | ☐ |
| CER-BI-2 | COB ordering | finance-ar | COB order across coverages, per-ENCOUNTER plan begin/end, subscriber relation, comment history | single-coverage focus | GAP | coordination-of-benefits + coverage-per-encounter | M | ☐ |
| CER-BI-3 | Health-plan master | finance-ar | Plan search by eligible/sponsor/carrier/ALIAS; plan contact registry | flat payers list | GAP | carrier→plan→alias hierarchy | M | ☐ |
| CER-BI-4 | Charge lifecycle flags | finance-ar | 17 process flags (held/suspended/BUNDLED/ABN-missing/unreconciled-credit…), filters by cost center/ordering-vs-verifying MD/ABN status | simpler status | GAP | charge state machine pre-claim + ABN tracking | L | ☐ |
| CER-BI-5 | CDM + charge explosion | finance-ar | Charge-description-master codes, CPT-4+HCPCS+REVENUE columns, PARENT-CHILD charges, accession linkage | flat CPT charge master | GAP | CDM layer + charge decomposition + revenue codes | L | ☐ |
| CER-BI-6 | Point-of-care charge visibility | amb-nurse, finance-ar | Charge Viewer + BATCH CHARGE ENTRY on the chart toolbar; financial class + total | separate RCM page | ENH | chart-adjacent charge triage | M | ☐ |

### CER-RF — Referrals / HIM

| ID | Cerner screen/feature | Evidence | What Cerner shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|
| CER-RF-1 | Referral triage docs log | him-referral | Dated docs-received log (CT/MRI/op-report/pathology) + re-referral provenance charted on the referral | authorization notes | GAP | referral docs-received checklist | M | ☐ |
| CER-RF-2 | Chart-deficiency queue | amb-nurse | HIM deficiency tracking feeds clinicians' DEFICIENT DOCUMENTS inbox | none | GAP | required-doc deficiency engine | M | ☐ |
| CER-RF-3 | Release of information | finance-ar | Medical Record Request: template + PURPOSE (insurance claim), authorization checkbox, destination, tracked print output (tracking ID + printed-by) | none | GAP | ROI workflow w/ disclosure accounting (HIPAA) | M | ☐ |
| CER-RF-4 | Inbound-document indexing queue | him-referral | WQM work-queue monitor: referral packages registered + INDEXED via queues; role-split routing clerk vs referral clerk vs manager | documents flat | GAP | inbound-document indexing queue | M | ☐ |
| CER-RF-5 | Status-staged referral pipeline | provider-amb | Referral Management (web module): staged worklist w/ status vocabulary (Ready for Screening → Ready for Triage → … → Booked), per-row received-date + stage timestamps, org-hierarchy location scoping, SAVED VIEWS per user | referrals list flat | GAP | status-staged referral pipeline w/ stage timestamps (SLA/aging feed) + saved views | L | ☐ |

### CER-ED — FirstNet / LaunchPoint (urgent-care & day-board fodder)

ED-specific screens, but most constructs transfer to PFO's kanban/day-board and walk-in flows.

| ID | Cerner screen/feature | Evidence | What Cerner shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|
| CER-ED-1 | LaunchPoint tracking board | physician-emerg | Zone tabs (My Patients/All Beds/Resus/Acute/Triage/WR/Pre-Arrival), DEPARTMENT stats strip (WR count, census, median LOS + door-to-doctor), color LOS timers + acuity, EDMD/MLP/RN columns, per-patient activity icons w/ counts, countdown status chips | kanban board | GAP | dept-stats strip + LOS/acuity timers + role-assignment columns | L | ☐ |
| CER-ED-2 | Pre-arrival intake | physician-emerg | EHS/referral pre-arrival form (presenting problem, field vitals, GCS, stroke/trauma activation, ETA) shows as a board row and ATTACHES to the patient on arrival | none | GAP | pre-arrival intake + attach flow (walk-in/transfer parallel) | M | ☐ |
| CER-ED-3 | Board event engine | physician-emerg | Request/Start/Complete/Set named workflow EVENTS per patient + staff Assign/Unassign | kanban stage moves | ENH | named event timers + staff assignment on cards | M | ☐ |
| CER-ED-4 | Role-scoped board comments | physician-emerg | PROVIDER Comment vs STAFF Comment lanes per patient w/ canned phrases | single note | ENH | role-scoped board comments | S | ☐ |
| CER-ED-5 | Provider check-in/out | physician-emerg | Provider signs onto the board w/ role/initials/color/team; checkout REASSIGNS patients to another provider | static user roles | GAP | shift check-in/out w/ patient handover | M | ☐ |
| CER-ED-6 | Name-similarity alert | physician-emerg | Look-alike patient names flagged (*Name Alert*) on lists/dialogs | none | GAP | name-similarity safety flag on lists | S | ☐ |
| CER-ED-7 | Board hover summary card | physician-emerg | Hover card: acuity, allergies, past-5-visits, triage complaint + vitals, home meds, open-chart/orders links — chart-lite w/o leaving the board | kanban right panel (founder-validated) | ENH | enrich kanban panel w/ triage vitals + history counts | M | ☐ |
| CER-ED-8 | Board quick-order flyouts | physician-emerg | Per-patient med/lab/rad flyouts from board icons + order favorites checklist, ordered w/o opening the chart | orders inside encounter | GAP | board-level quick-order flyouts w/ favorites | M | ☐ |
| CER-ED-9 | Workflow variants as tabs | physician-emerg | ED Workflow / Simple / Emergency / PEDS / Trauma order-page variants side-by-side; triage card w/ acuity chip + timestamped initial vitals | single encounter flow | ENH | context variants of the same workflow (CF definitions per context) | M | ☐ |
| CER-ED-10 | Results endorsement from board | physician-emerg | Labs flyout "Results to Review" w/ REVIEW ALL endorsement, flowsheet/quick-view tabs, positive-result flags, lab favorites reorder | none | GAP | results-endorsement + reorder from the board card | M | ☐ |
| CER-ED-11 | Results Callback Worklist | physician-emerg | Departmental queue of results returning AFTER discharge needing patient callback | none | GAP | post-visit result-callback queue (pairs w/ CER-OR-7 chase list) | M | ☐ |
| CER-ED-12 | Depart process + work counters | physician-emerg | Structured Discharge vs Discharge-to-external-site step; toolbar shows live personal counters (Saved/Cosig/Sign) | none | ENH | personal work-counter chips + structured depart step | M | ☐ |
| CER-ED-13 | Select-a-View gallery | physician-emerg | MPage "+" opens a view gallery; users add workspace views to their own tab strip | fixed page set | ENH | user-addable workspace views per role | S | ☐ |
| CER-ED-14 | Discharge handout (AVS) | physician-emerg | Patient-facing note auto-composed from chart (visit info/PCP, discharge dx, instructions, referral orders); signed, printable, modifiable | none | GAP | auto-composed printable discharge/visit-summary handout | M | ☐ |
| CER-ED-15 | Room-state badges | physician-emerg | Board rows carry room chips (Isolation/Disaster/Violence/MH Form/Section 28) + infection/pediatric icons; High Risk Alerts managed from the board | kanban cards plain | GAP | safety/state badges on board rows | S | ☐ |
| CER-ED-16 | Patient-education library + structured follow-up | firstnet-2007 | Curated instruction LIBRARY (Injury & Illness / Meds / Treatment + Custom/Departmental/Personal scopes) w/ search + LANGUAGE variants + WYSIWYG edit before sign; FOLLOW-UP tab: follow-up physician/org/clinic + timeframe ("within 5-7 days") + selectable address | no education content; follow-up free-text at best | GAP | education-topic library w/ language variants + structured follow-up destination/timeframe at discharge (extends CER-ED-13 handout) | M | ☐ |
| CER-ED-17 | Repeat-visit screening at triage | healthpei-ed | Triage form requires "REPEAT VISIT IN LAST 14 DAYS?" + "related to previous visit?" — bounce-back risk as structured data at intake | no return-visit flag | ENH | repeat-visit-within-N-days screen at check-in/triage (quality metric; pairs w/ results-callback row) | S | ☐ |
| CER-ED-18 | Live vitals columns on board | healthpei-ed | Tracking board shows TEMP/BP/HR/RR/SpO2/O2-device/BG/Pain/CIWA inline per row w/ abnormal arrows+coloring — deterioration visible without opening a chart | kanban cards carry no clinical values | ENH | configurable clinical-value columns on the day board (urgent-care/infusion fit) | M | ☐ |
| CER-ED-19 | Patient Dispositions review board | healthpei-ed | Retro board of departed patients: lookback 12/24/48/72h + custom range-by-event, grouped by day — Dx, DISCHARGE DISPOSITION (incl Left Without Being Seen), overdue-LOS chips, MY UNSIGNED NOTES filter | no departed-visit review surface | GAP | post-visit disposition/unsigned-work review board (catches LWBS + unfinished documentation) | M | ☐ |
| CER-ED-20 | Tracking Shell multi-facility census | phsa-ed | Per-site tabs (4 EDs, Look Up + Available Staff each), WR/total/avg-LOS strip; grid w/ dispo, alerts, reason, LOS, per-domain PENDING COUNTS (Lab 14/9, Rad 3/1, ECG); right-click jumps DIRECTLY to any chart section + Request/Start/Complete Event | kanban board is single-practice | GAP | cross-practice/multi-site board w/ per-domain pending counts + jump-to-section shortcuts (org-level view for multi-location groups) | L | ☐ |

### CER-PT — HealtheLife patient portal & mobile

| ID | Cerner screen/feature | Evidence | What Cerner shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|
| CER-PT-1 | Invitation-based enrollment | hlife-mclaren, hlife-menninger | Staff-triggered EMAIL INVITATION w/ accept link, 90-DAY EXPIRY + auto-reminder before expiry, re-issue on request; branded portal URL | portal accounts created directly | ENH | invitation-based enrollment w/ expiring links + reminder (safer than credential handout) | M | ☐ |
| CER-PT-2 | Portal home + Health Library | hlife-mclaren | Branded home: Dashboard / Health Record / MESSAGING (unread badge) / Appointments nav + HEALTH LIBRARY (curated consumer health content) + FAQ/help | portal wizard + basics, no education content | GAP | consumer health-library surface + portal IA w/ unread badges | M | ☐ |
| CER-PT-3 | Enrollment identity ladder | hlife-mclaren, hlife-menninger | Invite link → SECURITY QUESTION from registration data (DOB+postal) → "Patient Match Found" confirm + ToU → 6-DIGIT verification code → account on the FEDERATED Cerner Health identity (multi-language) | signup is direct credential creation | ENH | staged identity-proofing at portal claim (match-against-chart + OTP) | M | ☐ |
| CER-PT-4 | Clipboards (assigned pre-visit forms) + proxy | hlife-menninger | Dashboard flags "N CLIPBOARDS to complete" — staff-assigned pre-visit questionnaires tied to an upcoming appointment; right-rail Allergies/Latest Results snapshots; "Viewing health record for X" PROXY indicator | check-in wizard exists, forms not assignable per-appointment | GAP | assignable pre-visit form queue + caregiver-proxy switching (CF-lane fit: clipboards = CF form configs assigned to appointments) | L | ☐ |
| CER-PT-5 | Virtual-visit join UX | hlife-menninger | Portal Appointments lists Virtual Visits w/ "opens in ~N hrs" countdown, TEST YOUR CONNECTION pre-check, per-appt Options, timezone banner, Request Appointment | no telehealth join surface | GAP | patient-side video-visit join w/ readiness pre-check (pairs w/ CER-FO modality + telehealth-consent rows) | L | ☐ |
| CER-PT-6 | Mobile app biometric sign-in | hlife-menninger | HealtheLife mobile app fronts the federated login w/ Touch ID | portal is web-only | ENH | mobile biometric auth if/when PFO ships a patient app | M | ☐ |
| CER-PT-7 | Portal self-service transaction set | mobile-store | HealtheLife app: LAB TEST ONLINE (patient-initiated lab ordering), PAY YOUR BILL, pre-visit survey + Clipboard List; per-med REFILL/RENEW request + education links; appointment detail w/ ADD TO CALENDAR / RESCHEDULE / CANCEL + per-appointment BEGIN CLIPBOARD | check-in wizard only, no self-service transactions | GAP | portal transaction set — refill request, self-schedule changes, bill pay, pre-visit forms (extends CER-PT-4/CER-PT-5) | L | ☐ |

### CER-MB — Staff mobile companion apps (reference lane)

Cerner ships a fleet of role-scoped native apps. PFO is web-only today; these rows are the benchmark for any future staff-mobile slice — the first four carry transferable patterns, the last is out-of-scope reference.

| ID | Cerner screen/feature | Evidence | What Cerner shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|
| CER-MB-1 | Connect Nursing (mobile vitals + capture) | mobile-store | Patient-select → mobile chart review incl 24h vitals list w/ per-vital threshold ranges + abnormal coloring + trend chevrons; camera button for wound/document capture | staff UI desktop-web only | ENH | mobile clinician surface: vitals review + photo capture patterns | L | ☐ |
| CER-MB-2 | Message Center mobile inbox | mobile-store | Clinician inbox on phone/iPad: folders incl FORWARDED-TO-REVIEW/-SIGN queues w/ unread badges; compose = structured phone-message template (Caller-is, OK-to-leave-voicemail, callback windows) w/ voice dictation | no staff mobile inbox | ENH | mobile inbox + structured phone-triage template (extends CER-MC rows) | L | ☐ |
| CER-MB-3 | PowerChart Touch (provider companion) | mobile-store | Schedule rows w/ VIDEO VISIT badges; Review tab (chief complaint, last note, flagged vitals w/ age-of-reading); meds w/ ESTIMATED REFILLS REMAINING progress bars; auto-composed note editor w/ per-section dictation | no provider mobile surface | ENH | refill-remaining visualization + provider-side video-visit badge are the transferable ideas | L | ☐ |
| CER-MB-4 | Community Care offline sync | mobile-store | Home-health iPad worklist w/ per-patient offline SYNC status + RECONCILE action for field visits without connectivity | web-only, no offline | ENH | offline-sync pattern for low-connectivity mobile visits (home-health domain, reference) | L | ☐ |
| CER-MB-5 | Out-of-scope app fleet (reference) | mobile-store | CareAware Patient Flow (transport dispatch w/ Accept/Reject job queue), FetaLink+ (OB fetal monitoring w/ live strips), Staff Manager (shift calendar + self-service SHIFT SWAP w/ pending-acceptance states) | — | ENH | none — hospital porter/OB/workforce domains, recorded for corpus completeness | — | ☐ |

### CER-AN — Analytics / reporting

| ID | Cerner screen/feature | Evidence | What Cerner shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|
| CER-AN-1 | Report catalog | finance-ar | Source (standard/public/PERSONAL) + category filters, favorites, recent-reports rail, metadata card | fixed report list | ENH | report catalog + favorites | M | ☐ |
| CER-AN-2 | Report execution | finance-ar | Run vs RUN-IN-BACKGROUND, saved outputs (View Documents), CSV-vs-PDF prompts, output routing | inline render | ENH | background runs + saved outputs + export choice | M | ☐ |

### Review complete

All 1,116 collected screens are ledgered in `review-ledger.tsv` (1,083 kept as screens; 33 non-screens purged). Next step is founder triage of Size/Status per row, then implementation waves (CF-lane rows are natural first candidates for the configurable-forms engine).

---

*Log:*
- 2026-07-07 AgentCerner — table scaffolded per founder directive (mirror the AgentECW path). Screen-grab v1 complete: 1,053 desktop + 63 mobile screenshots in `Downloads\Cerner` (INDEX.md maps sources); no analysis performed yet.
- 2026-07-07 AgentCerner — founder authorized analysis; page renamed AgentCernerTable.md → PracticeForceOneCernerTable.md; every-field review started (review-ledger.tsv + cerner-gap-notes.md in `Downloads\Cerner`, 1,116 files queued).
- 2026-07-08 AgentCerner — founder directive "complete the gaps and update the table": ledger populated w/ 82 CER-* rows from the first 273 reviews (101 field-level findings; ambulatory-nurse + finance-A/R folders complete, HIM referral in progress); coverage table added; remaining folders continue feeding rows.
- 2026-07-08 AgentCerner — HIM-referral + physician-emergency (ED) folders complete (349 reviews, 149 findings): +39 rows → 121 total. New **CER-ED section** (15 rows: LaunchPoint board, pre-arrival, event engine, quick-order flyouts, results callback, discharge handout, room badges); CL +8 (autotext, exam normals, Dynamic Documentation, per-dx plan, workers-comp form notes); OR +5 (Quick Orders MPage/cart, Rx quick-picks + routing, referral-as-order, future-orders chase); FO +9 (request queues, confirm packet, suggest engine, batch ops, POS revenue hooks); RG +1 (preferred services); RF +1 (WQM indexing).
- 2026-07-08 AgentCerner — MOA front-office + provider-ambulatory workbooks complete (549 reviews, 168 findings): +24 rows → 151 total (prior log line said 121; actual pre-update count was 127 — corrected). FO +8 (blocked time, multi-appt sequences/group sessions, recurring series, 4-axis Schedule Inquiry, reason-coded lifecycle, Shuffle, reschedule-request queue, appt↔encounter linkage); RG +4 (bedboard/room states, residency-eligibility attrs, facesheet/qualified-docs print, Past Due Arrivals); GL +4 (typed patient-list builder, purpose-of-access prompt, Patient Overview rounding grid, Encounter Search); OR +6 (External Rx History, PowerPlan future-visit binding, Dosage Calculator, payer advisories in plans, order-sentence autocomplete, modality-specific order forms); RF +1 (status-staged referral pipeline); CL +1 (structured Histories).
- 2026-07-08 AgentCerner — ALL NINE CST workbooks complete (741 reviews, 174 findings): +6 rows → 157 total (verified `grep -c '^| CER-'`). CL +1 (I-PASS handoff framework w/ illness-severity chips + shared actions); OR +2 (Order Reconciliation workspace, Therapeutic Substitution at sign); RG +2 (External MPI/provincial-registry federation, Today's Expected Arrivals worklist); FO +1 (chair-time vs nurse-time per-resource duration split). Remaining 375 files: ED workbooks (phsa/healthpei/firstnet), healthpei-scheduling classic UI, portal/HIM/mobile.
- 2026-07-08 AgentCerner — firstnet-2007 + both HealtheLife portal guides + healthpei-ED complete (821 reviews, 189 findings): +15 rows → 172 total (verified grep). **New CER-PT section** (6 rows: invitation enrollment, portal home + Health Library, identity ladder, Clipboards + proxy, virtual-visit join, mobile biometric); ED +4 (education library + structured follow-up, repeat-visit triage screen, live vitals columns, Dispositions review board); OR +1 (decision-support override capture); CL +1 (teaching attestation); MC +1 (Notify Receipts open tracking); RG +2 (org shortlist, portal access-offered). Remaining 295: phsa-ED (107), healthpei-scheduling (95), monhealth-HIM (26), mclaren-revcycle (5), mobile (62).
- 2026-07-08 AgentCerner — healthpei-scheduling + mclaren-revcycle + monhealth-HIM + mobile folders complete (1,013 reviews, 202 findings): +11 rows → 183 total (verified `grep -c '^| CER-'`). FO +4 (schedule comment layers + contact log, per-user booking defaults, appointment link/unlink, lifecycle audit view); GL +1 (configurable demographics banner — CF-lane fit); PT +1 (portal self-service transaction set: refill request, bill pay, self-reschedule, Lab Test Online); **new CER-MB section** (5 rows: Connect Nursing mobile vitals+capture, Message Center mobile inbox, PowerChart Touch provider companion, Community Care offline sync, out-of-scope fleet reference). monhealth-HIM was ~fully covered by earlier inbox/doc-lifecycle rows (11 education slides purged). Remaining: phsa-ED only (103).
- 2026-07-08 AgentCerner — 🏁 **REVIEW COMPLETE: phsa-ED folder done → all 1,116 screens ledgered** (203 findings): +1 row → **184 total** (verified grep). ED +1 (CER-ED-20 Tracking Shell multi-facility census w/ per-domain pending counts + jump-to-section). phsa-ED was otherwise fully redundant with the CST ED workbook as predicted (cosign queues, quick orders, PowerPlans, Dynamic Doc ED Note, WorksafeBC note, pre-arrival, dx search — all confirmed against existing rows). Table now awaits founder triage; CF-lane-fit rows flagged throughout for the configurable-forms collaboration.

---

## Review Epilog — 2026-07-24

- Cerner parity review is COMPLETE as of 2026-07-08: all 1,116 screens reviewed, 184 CER-* rows shipped.
- No new Cerner imagery has landed; this table is in a stable, awaiting-founder-triage state.
- Live build 1943; gate 251/251 GREEN; MR2–MR7 delivered; MR8/MR9/MR10 active.
- CF-lane-fit rows throughout remain available for AgentCF coordination when the founder unlocks the Cerner triage.
