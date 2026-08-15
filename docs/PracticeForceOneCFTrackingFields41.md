---
title: "PracticeForceOneCFTrackingFields41"
---

# CF Tracking — Field-Level Detail (part 41 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **User Settings**, **AI**, **Administrative**, **Analytics**, **Bariatric Surgery**, **Clinical Pharmacology**, **Clinical Pharmacology / Toxicology**, **Communications**, **Dashboard**, **Diagnostics**, **ENT / Allergy**, **ENT / Audiology**, **ENT / Head and Neck**, **General**, **General Surgery**, **Home**, **Integrative Medicine**, **Nuclear Medicine**, **OB/GYN / Internal Medicine**, **OB/GYN / Oncology**, **OB/GYN / Reproductive Medicine**, **OB/Psychiatry**, **Obstetric**, **Otolaryngology**, **Outreach**, **PM&R**, **Patient Engagement**, **Pediatric Emergency**, **Pediatric Pulmonology**, **Pediatric Surgery**, **Perioperative Medicine**, **Physical Medicine**, **Physical Medicine and Rehab**, **Physical Medicine and Rehabilitation**, **Podiatry**, **Population Health**, **Preventive Care**, **Security**, **Utilization Management**, **Wound Care / Surgery**, **Wound Management**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## User Settings

### My Favorites — `user_favorites_cf`

Screen: 1 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| My Pinned Items & Favorites | Current Favorites | `entityType` | Filter by Type | `select` |  |  |  |
| My Pinned Items & Favorites | Add Favorite | `entityLabel` | Label | `text` | Y |  |  |
| My Pinned Items & Favorites | Add Favorite | `entityUrl` | URL (optional) | `text` |  |  |  |
| My Pinned Items & Favorites | Add Favorite | `entityTypeNew` | Type | `select` |  |  |  |
| My Pinned Items & Favorites | Add Favorite | `entitySublabel` | Sub-label | `text` |  |  |  |
| My Pinned Items & Favorites | Add Favorite | `icon` | Icon (optional) | `text` |  |  |  |

### Order Preferences — `order_defaults_cf`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| User Order Preferences | Order Entry Preferences | `defaultLabCompany` | Default Lab Company | `text` |  | defaultLabCompany |  |
| User Order Preferences | Order Entry Preferences | `carryForwardDx` | Carry Forward Diagnosis to Next Order | `checkbox` |  | carryForwardDx |  |
| User Order Preferences | Order Entry Preferences | `hideAliasInSearch` | Hide Aliases in Order Search | `checkbox` |  | hideAliasInSearch |  |
| User Order Preferences | Order Entry Preferences | `suppressLabelPrinterDialog` | Suppress Label Printer Dialog | `checkbox` |  | suppressLabelPrinterDialog |  |
| User Order Preferences | Order Entry Preferences | `defaultToFutureOrder` | Default to Future Order | `checkbox` |  | defaultToFutureOrder |  |
| User Order Preferences | Order Entry Preferences | `singleAssessmentMode` | Single Assessment Mode | `checkbox` |  | singleAssessmentMode |  |

## AI

### ML Predictions — `ML`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `CLAIMS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prediction | Prediction Input (rule-based v1; denial risk + payment estimation) | `mlClaimId` | Claim ID (optional; loads full claim context for prediction) | `text` |  |  |  |
| Prediction | Prediction Input (rule-based v1; denial risk + payment estimation) | `mlPayerId` | Payer ID (inline override) | `text` |  |  |  |
| Prediction | Prediction Input (rule-based v1; denial risk + payment estimation) | `mlTotalCharge` | Total Charge ($ inline override) | `text` |  |  |  |
| Prediction | Prediction Input (rule-based v1; denial risk + payment estimation) | `mlStatus` | Current Claim Status (for rule scoring) | `text` |  |  |  |
| Prediction | Prediction Output (read-only) | `mlRiskScore` | Denial Risk Score (0.0 - 1.0; read-only) | `text` |  |  |  |
| Prediction | Prediction Output (read-only) | `mlRiskLevel` | Risk Level (low/medium/high; read-only) | `text` |  |  |  |
| Prediction | Prediction Output (read-only) | `mlRiskFactors` | Risk Factors (JSON array; read-only) | `textarea` |  |  |  |
| Prediction | Prediction Output (read-only) | `mlEstimatedPayment` | Estimated Payment ($; read-only) | `text` |  |  |  |
| Prediction | Prediction Output (read-only) | `mlModel` | Model Version (read-only) | `text` |  |  |  |

## Administrative

### Prior Authorization — `prior_authorization_cf`

Screen: 1 page(s) · 3 section(s) · 22 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prior Authorization | Authorization Request | `patientId` | Patient | `typeahead` | Y |  |  |
| Prior Authorization | Authorization Request | `encounterId` | Encounter / Order Reference | `text` |  |  |  |
| Prior Authorization | Authorization Request | `authType` | Authorization Type | `select` | Y |  |  |
| Prior Authorization | Authorization Request | `requestedService` | Service / Drug / Procedure Requested | `text` | Y |  |  |
| Prior Authorization | Authorization Request | `serviceDescription` | Clinical Justification | `textarea` | Y |  |  |
| Prior Authorization | Authorization Request | `diagnosisCodes` | ICD-10 Codes | `text` | Y |  |  |
| Prior Authorization | Authorization Request | `cptCodes` | CPT Codes | `text` |  |  |  |
| Prior Authorization | Authorization Request | `urgency` | Urgency | `select` | Y |  |  |
| Prior Authorization | Authorization Request | `requestedBy` | Requesting Provider | `typeahead` | Y |  |  |
| Prior Authorization | Authorization Request | `requestedStartDate` | Requested Start Date | `date` |  |  |  |
| Prior Authorization | Authorization Request | `requestedEndDate` | Requested End Date | `date` |  |  |  |
| Prior Authorization | Insurance Information | `insuranceName` | Insurance Plan | `text` | Y |  |  |
| Prior Authorization | Insurance Information | `memberId` | Member ID | `text` |  |  |  |
| Prior Authorization | Insurance Information | `groupNumber` | Group Number | `text` |  |  |  |
| Prior Authorization | Insurance Information | `priorAuthPhone` | PA Phone | `text` |  |  |  |
| Prior Authorization | Insurance Information | `priorAuthFax` | PA Fax | `text` |  |  |  |
| Prior Authorization | Authorization Outcome (post-submission) | `authorizationNumber` | Authorization Number (if approved) | `text` |  |  |  |
| Prior Authorization | Authorization Outcome (post-submission) | `approvedStartDate` | Approved Start Date | `date` |  |  |  |
| Prior Authorization | Authorization Outcome (post-submission) | `approvedEndDate` | Approved End Date | `date` |  |  |  |
| Prior Authorization | Authorization Outcome (post-submission) | `approvedUnits` | Approved Units / Quantity | `text` |  |  |  |
| Prior Authorization | Authorization Outcome (post-submission) | `denialReason` | Denial Reason (if denied) | `text` |  |  |  |
| Prior Authorization | Authorization Outcome (post-submission) | `appealDeadline` | Appeal Deadline (if denied) | `date` |  |  |  |

## Analytics

### Quality Measures — `quality_measures_cf`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Measure Detail | Measure Summary | `measureNumber` | Measure Number | `text` |  |  |  |
| Measure Detail | Measure Summary | `measureName` | Measure Name | `text` |  |  |  |
| Measure Detail | Measure Summary | `category` | Category | `text` |  |  |  |
| Measure Detail | Measure Summary | `measureYear` | Measure Year | `text` |  |  |  |
| Measure Detail | Measure Summary | `eligiblePatients` | Eligible Patients | `number` |  |  |  |
| Measure Detail | Measure Summary | `numeratorMet` | Numerator Met | `number` |  |  |  |
| Measure Detail | Measure Summary | `denominatorExcluded` | Denominator Excluded | `number` |  |  |  |
| Measure Detail | Measure Summary | `performanceRate` | Performance Rate (%) | `number` |  |  |  |
| Measure Detail | Measure Summary | `benchmarkRate` | Benchmark (%) | `number` |  |  |  |

## Bariatric Surgery

### Bariatric Surgery Periop — `bariatric_surgery_periop_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Bariatric Surgery — Perioperative Assessment and Post-op Nutrition | Candidacy Assessment | `bmi_indication` | BMI-Based Indication | `select` |  |  |  |
| Bariatric Surgery — Perioperative Assessment and Post-op Nutrition | Candidacy Assessment | `procedure` | Planned Procedure | `select` |  |  |  |
| Bariatric Surgery — Perioperative Assessment and Post-op Nutrition | Post-op Nutrition and Supplementation | `supplementation` | Lifelong Supplementation Protocol (RYGB: multivitamin with iron (bariatric formula, 2× daily); calcium citrate (NOT carbonate — impaired absorption) 1500 mg/day in divided doses; B12 sublingual or IM 1000 mcg monthly; thiamine 100 mg daily; B1 critical in early post-op and vomiting; DEXA baseline and every 2 years; monitor CBC, iron studies, B12, folate, D3, zinc, copper, PTH, albumin every 3-6 months first year then annually; avoid iron + calcium within 2 hours) | `textarea` |  |  |  |
| Bariatric Surgery — Perioperative Assessment and Post-op Nutrition | Post-op Nutrition and Supplementation | `diet_progression` | Post-op Diet Progression (Week 1: clear liquids; Week 2-4: full liquids + protein shakes; Month 2: pureed; Month 3: soft; Month 4+: regular diet; no carbonated beverages; no alcohol first year (transfer addiction risk); no liquid calories; protein first at meals 60-80 g/day; no NSAIDS (ulcer risk); PPI standard for RYGB × 6-12 months; avoid drinking during meals; 30-minute rule) | `text` |  |  |  |

## Clinical Pharmacology

### Anticoagulation Reversal — `clinical_pharmacology_anticoagulation_reversal_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Anticoagulation Reversal — Emergency Protocols | Warfarin and Vitamin K Antagonist Reversal | `supratherapeutic_inr` | Supratherapeutic INR Management | `select` |  |  |  |
| Anticoagulation Reversal — Emergency Protocols | Warfarin and Vitamin K Antagonist Reversal | `ffp_indication` | FFP Indications (NOT for anticoagulation reversal if PCC available; FFP appropriate for: massive transfusion protocol (MTP) — ratio-based; TTP (plasma exchange); liver disease coagulopathy without PCC available; congenital factor deficiencies without specific concentrate; dose: 10-15 mL/kg = 2-4 units FFP (250 mL each); ABO-compatible; takes 30-60 min to prepare; massive transfusion protocol: 1:1:1 (PRBC:FFP:Plt) — PROPPR trial) | `text` |  |  |  |
| Anticoagulation Reversal — Emergency Protocols | DOAC and Heparin Reversal | `doac_reversal` | DOAC Reversal Agents | `select` |  |  |  |

## Clinical Pharmacology / Toxicology

### Drug Overdose / Antidotes — `clinical_pharmacology_drug_overdose_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Drug Overdose — Antidotes and Toxicologic Management | Toxidrome Identification | `toxidrome_type` | Toxidrome Pattern | `select` |  |  |  |
| Drug Overdose — Antidotes and Toxicologic Management | Toxidrome Identification | `antidotes` | Specific Antidotes Quick Reference (acetaminophen: NAC (N-acetylcysteine) if Rumack-Matthew nomogram or unknown time — 150 mg/kg IV load then 50/100 mg/kg × 4h/16h; digoxin: digoxin Fab (Digibind/DigiFab) 1 vial per 0.8 mg digoxin ingested; methanol/ethylene glycol: fomepizole (4-MP) 15 mg/kg IV load — preferred over ethanol; dialysis; calcium channel blocker/beta-blocker: high-dose insulin (1 unit/kg bolus then 0.5-2 u/kg/hr); calcium gluconate 3g; intralipid 1.5 mL/kg for lipid-soluble drug; serotonin syndrome: cyproheptadine 8 mg PO; heparin: protamine 1 mg/100 units heparin) | `text` |  |  |  |

## Communications

### Outreach Queue — `web_encounter_outreach_cf`

Screen: 1 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Encounter Detail | Encounter Information | `reason` | Reason | `text` |  |  |  |
| Encounter Detail | Encounter Information | `encounterChannel` | Channel | `select` |  |  |  |
| Encounter Detail | Encounter Information | `status` | Status | `select` |  |  |  |
| Encounter Detail | Encounter Information | `highPriority` | High Priority | `checkbox` |  |  |  |
| Encounter Detail | Encounter Information | `secureMessageFlag` | Secure Message | `checkbox` |  |  |  |
| Encounter Detail | Encounter Information | `channelPreference` | Contact preference | `select` |  |  |  |
| Encounter Detail | Encounter Information | `assignedTo` | Assigned to | `typeahead` |  |  |  |
| Encounter Detail | Response | `responseText` | Response / Notes | `textarea` |  |  |  |

## Dashboard

### Dashboard — `dashboard_cf`

Screen: 1 page(s) · 2 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `CLAIMS`, `DENIALS`, `PAYMENTS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Summary | Claims Summary | `totalClaims` | Total Claims | `number` |  |  |  |
| Summary | Claims Summary | `totalCharges` | Total Charges | `text` |  |  |  |
| Summary | Claims Summary | `totalPaid` | Total Paid | `text` |  |  |  |
| Summary | Claims Summary | `totalBalance` | Total Balance | `text` |  |  |  |
| Summary | Claims Summary | `draftClaims` | Draft Claims | `number` |  |  |  |
| Summary | Claims Summary | `submittedClaims` | Submitted Claims | `number` |  |  |  |
| Summary | Claims Summary | `paidClaims` | Paid Claims | `number` |  |  |  |
| Summary | Claims Summary | `deniedClaims` | Denied Claims | `number` |  |  |  |
| Summary | Denials and Payments | `openDenials` | Open Denials | `number` |  |  |  |
| Summary | Denials and Payments | `deniedAmount` | Denied Amount | `text` |  |  |  |
| Summary | Denials and Payments | `totalPayments` | Total Payments | `number` |  |  |  |
| Summary | Denials and Payments | `totalDenials` | Total Denials | `number` |  |  |  |
| Summary | Denials and Payments | `collectionRate` | Collection Rate (%) | `text` |  |  |  |
| Summary | Denials and Payments | `denialRate` | Denial Rate (%) | `text` |  |  |  |

## Diagnostics

### ECG — `ecg_cf`

Screen: 1 page(s) · 3 section(s) · 20 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ECG / EKG | ECG Details | `patientId` | Patient | `typeahead` | Y |  |  |
| ECG / EKG | ECG Details | `ecgDate` | ECG Date | `date` | Y |  |  |
| ECG / EKG | ECG Details | `ecgTime` | Time | `text` |  |  |  |
| ECG / EKG | ECG Details | `indication` | Indication | `select` |  |  |  |
| ECG / EKG | ECG Details | `ecgPerformedBy` | Performed By | `typeahead` |  |  |  |
| ECG / EKG | Measurements | `rate` | Heart Rate (bpm) | `number` |  |  |  |
| ECG / EKG | Measurements | `rhythm` | Rhythm | `select` |  |  |  |
| ECG / EKG | Measurements | `prInterval` | PR Interval (ms) | `number` |  |  |  |
| ECG / EKG | Measurements | `qrsDuration` | QRS Duration (ms) | `number` |  |  |  |
| ECG / EKG | Measurements | `qtInterval` | QT Interval (ms) | `number` |  |  |  |
| ECG / EKG | Measurements | `qtc` | QTc (corrected) | `number` |  |  |  |
| ECG / EKG | Measurements | `axis` | Axis | `select` |  |  |  |
| ECG / EKG | Interpretation | `stChanges` | ST Changes | `select` |  |  |  |
| ECG / EKG | Interpretation | `tWaveChanges` | T-Wave Changes | `select` |  |  |  |
| ECG / EKG | Interpretation | `bundleBranch` | Bundle Branch Block | `select` |  |  |  |
| ECG / EKG | Interpretation | `lvh` | LVH / Hypertrophy | `select` |  |  |  |
| ECG / EKG | Interpretation | `overallInterpretation` | Overall Interpretation | `select` | Y |  |  |
| ECG / EKG | Interpretation | `ecgNotes` | Interpretation Notes | `textarea` |  |  |  |
| ECG / EKG | Interpretation | `interpretedBy` | Interpreted By (Provider) | `typeahead` | Y |  |  |
| ECG / EKG | Interpretation | `clinicalAction` | Clinical Action Taken | `textarea` |  |  |  |

## ENT / Allergy

### Chronic Sinusitis — `chronic_sinusitis_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Rhinosinusitis Management Visit | Patient & CRS Phenotype | `patientId` | Patient | `typeahead` | Y |  |  |
| Chronic Rhinosinusitis Management Visit | Patient & CRS Phenotype | `visitDate` | Visit Date | `date` | Y |  |  |
| Chronic Rhinosinusitis Management Visit | Patient & CRS Phenotype | `provider` | ENT / Otolaryngologist / Allergist | `typeahead` | Y |  |  |
| Chronic Rhinosinusitis Management Visit | Patient & CRS Phenotype | `crsPhenotype` | CRS Phenotype | `select` | Y |  |  |
| Chronic Rhinosinusitis Management Visit | Patient & CRS Phenotype | `symptomScore` | SNOT-22 Score (Sinonasal Outcome Test) | `text` |  |  |  |
| Chronic Rhinosinusitis Management Visit | Examination & Imaging | `nasalEndoscopy` | Nasal Endoscopy Findings | `textarea` | Y |  |  |
| Chronic Rhinosinusitis Management Visit | Examination & Imaging | `ctSinus` | CT Sinus Findings | `textarea` | Y |  |  |
| Chronic Rhinosinusitis Management Visit | Treatment Plan | `medicalTherapy` | Medical Therapy | `textarea` | Y |  |  |
| Chronic Rhinosinusitis Management Visit | Treatment Plan | `surgicalPlan` | Surgical Plan (FESS Consideration) | `textarea` | Y |  |  |

## ENT / Audiology

### Hearing Loss / Audiology — `hearing_loss_management_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hearing Loss Evaluation | Patient & History | `patientId` | Patient | `typeahead` | Y |  |  |
| Hearing Loss Evaluation | Patient & History | `visitDate` | Visit Date | `date` | Y |  |  |
| Hearing Loss Evaluation | Patient & History | `provider` | Audiologist / ENT | `typeahead` | Y |  |  |
| Hearing Loss Evaluation | Patient & History | `symptoms` | Presenting Symptoms | `textarea` | Y |  |  |
| Hearing Loss Evaluation | Patient & History | `riskFactors` | Risk Factors | `textarea` | Y |  |  |
| Hearing Loss Evaluation | Audiogram Results | `audiogramResults` | Pure Tone Audiometry (Air Conduction) | `textarea` | Y |  |  |
| Hearing Loss Evaluation | Audiogram Results | `speechDiscrim` | Speech Audiometry | `textarea` | Y |  |  |
| Hearing Loss Evaluation | Audiogram Results | `tympanometry` | Tympanometry / Acoustic Reflexes | `textarea` | Y |  |  |
| Hearing Loss Evaluation | Assessment & Plan | `hearingLossType` | Hearing Loss Classification | `select` | Y |  |  |
| Hearing Loss Evaluation | Assessment & Plan | `plan` | Assessment & Plan | `textarea` | Y |  |  |

## ENT / Head and Neck

### Thyroid Nodule / Parathyroid Surgery — `ent_thyroid_parathyroid_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Thyroid Nodule and Parathyroid — Evaluation and Surgery | Thyroid Nodule ATA Risk Stratification | `ata_risk` | ATA Risk Category (2015 Guidelines) | `select` |  |  |  |
| Thyroid Nodule and Parathyroid — Evaluation and Surgery | Thyroid Nodule ATA Risk Stratification | `bethesda` | Bethesda Classification (I: nondiagnostic/unsatisfactory; II: benign; III: AUS/FLUS (5-15% malignancy); IV: follicular neoplasm (15-30%); V: suspicious for malignancy (60-75%); VI: malignant (97-99%); molecular testing for Bethesda III-IV: ThyroSeq v3 (GPP classifier), Afirma GSC (93% sensitivity, 68% specificity for malignancy); NIFTP (non-invasive follicular thyroid neoplasm with papillary-like nuclear features) reclassified benign from follicular variant PTC — does NOT require RAI) | `text` |  |  |  |
| Thyroid Nodule and Parathyroid — Evaluation and Surgery | Hyperparathyroidism and Parathyroidectomy | `phpt` | Primary Hyperparathyroidism (PHPT) | `select` |  |  |  |

## General

### Notifications — `notifications_cf`

Screen: 3 page(s) · 4 section(s) · 31 field(s) · UI LIVE · DB BUILT · tables `NOTIFICATION_DELIVERIES`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| My Notifications | Notification | `notifId` | ID | `text` |  |  |  |
| My Notifications | Notification | `notifSeverity` | Severity | `select` |  |  |  |
| My Notifications | Notification | `notifTitle` | Title | `text` |  |  |  |
| My Notifications | Notification | `notifBody` | Body | `textarea` |  |  |  |
| My Notifications | Notification | `notifActionUrl` | Action URL | `text` |  |  |  |
| My Notifications | Notification | `notifDeliveryStatus` | Delivery Status | `text` |  |  |  |
| My Notifications | Notification | `notifRead` | Read | `checkbox` |  |  |  |
| My Notifications | Notification | `notifReadAt` | Read At | `text` |  |  |  |
| My Notifications | Notification | `notifCreatedAt` | Created At | `text` |  |  |  |
| My Notifications | Notification | `notifChannel` | Channel | `text` |  |  |  |
| My Notifications | Notification | `notifEventType` | Event Type | `text` |  |  |  |
| Notification Preferences | Email Alerts | `notifPrefEmailEnabled` | Email Enabled | `checkbox` |  |  |  |
| Notification Preferences | Email Alerts | `notifPrefDenialAlerts` | Denial Alerts | `checkbox` |  |  |  |
| Notification Preferences | Email Alerts | `notifPrefPaymentReceived` | Payment Received | `checkbox` |  |  |  |
| Notification Preferences | Email Alerts | `notifPrefTimelyFilingWarnings` | Timely Filing Warnings | `checkbox` |  |  |  |
| Notification Preferences | Email Alerts | `notifPrefAppealUpdates` | Appeal Updates | `checkbox` |  |  |  |
| Notification Preferences | Email Alerts | `notifPrefClaimStatusChanges` | Claim Status Changes | `checkbox` |  |  |  |
| Notification Preferences | Email Alerts | `notifPrefDailyDigest` | Daily Digest | `checkbox` |  |  |  |
| Notification Preferences | Email Alerts | `notifPrefWeeklySummary` | Weekly Summary | `checkbox` |  |  |  |
| Notification Preferences | Digest Settings | `notifPrefDigestCadence` | Digest Cadence | `select` |  |  |  |
| Notification Preferences | Digest Settings | `notifPrefDigestChannel` | Digest Channel | `select` |  |  |  |
| Notification Preferences | Digest Settings | `notifPrefQuietHoursStart` | Quiet Hours Start (HH:MM) | `text` |  |  |  |
| Notification Preferences | Digest Settings | `notifPrefQuietHoursEnd` | Quiet Hours End (HH:MM) | `text` |  |  |  |
| Notification Preferences | Digest Settings | `notifPrefDenialAmountThreshold` | Denial Amount Threshold | `number` |  |  |  |
| Notification Preferences | Digest Settings | `notifPrefTimelyFilingWarningDays` | Timely Filing Warning Days | `number` |  |  |  |
| Digest Preview | Unread Summary | `notifDigestUnreadCount` | Unread | `number` |  |  |  |
| Digest Preview | Unread Summary | `notifDigestUrgentCount` | Urgent | `number` |  |  |  |
| Digest Preview | Unread Summary | `notifDigestWarningCount` | Warning | `number` |  |  |  |
| Digest Preview | Unread Summary | `notifDigestEscalationCount` | Escalation | `number` |  |  |  |
| Digest Preview | Unread Summary | `notifDigestStaleCount` | Stale | `number` |  |  |  |
| Digest Preview | Unread Summary | `notifDigestMessage` | Message | `text` |  |  |  |

## General Surgery

### Appendicitis — Adult — `general_surgery_appendicitis_adult_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Appendicitis — Diagnosis and Management | Alvarado Score and CT Findings | `alvarado_score` | Alvarado Score (MANTRELS; M: migration pain RLQ +1; A: anorexia +1; N: nausea/vomiting +1; T: tenderness RLQ +2; R: rebound tenderness +1; E: elevated temp +1; L: leukocytosis +2; S: shift left WBC +1; total 0-10; <=3: low risk (CT not needed; reassess); 4-6: intermediate (CT recommended or close observation); >=7: high risk (surgical consultation; OR CT); sensitivity 68% alone — not sufficient without imaging) | `number` |  |  |  |
| Acute Appendicitis — Diagnosis and Management | Alvarado Score and CT Findings | `ct_findings` | CT Findings Classification | `select` |  |  |  |
| Acute Appendicitis — Diagnosis and Management | Surgical and Antibiotic Treatment | `surgical_tx` | Laparoscopic Appendectomy (3-port laparoscopic (RLQ port + umbilical camera + suprapubic); LigaSure or stapler for mesoappendix and base; endobag removal; endoloop for simple or linear stapler; specimen pathology always; if cecum uninvolved: laparoscopic safe; conversion to open: 3-5% (Masaoka? adhesions, perforation); preoperative: cefazolin 2g IV (3g if >120 kg); anaerobe coverage if complicated: piperacillin-tazobactam or cefoxitin + metronidazole; early laparoscopy (same-day) vs. delayed (morning) safe if <=12h from diagnosis for simple appendicitis) | `text` |  |  |  |
| Acute Appendicitis — Diagnosis and Management | Surgical and Antibiotic Treatment | `antibiotics_tx` | Antibiotic Protocol | `select` |  |  |  |

## Home

### Dashboard — `DASHBOARD`

Screen: 1 page(s) · 1 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `CLAIMS`, `DENIALS`, `PAYMENTS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dashboard Summary | Dashboard KPIs (SANCTIONED RAW SQL aggregates; ECW-BI-20) | `dshTotalClaims` | Total Claims (read-only) | `text` |  |  |  |
| Dashboard Summary | Dashboard KPIs (SANCTIONED RAW SQL aggregates; ECW-BI-20) | `dshTotalCharges` | Total Charges ($; read-only) | `text` |  |  |  |
| Dashboard Summary | Dashboard KPIs (SANCTIONED RAW SQL aggregates; ECW-BI-20) | `dshTotalBalance` | Total Balance ($; read-only) | `text` |  |  |  |
| Dashboard Summary | Dashboard KPIs (SANCTIONED RAW SQL aggregates; ECW-BI-20) | `dshTotalPaid` | Total Paid ($; read-only) | `text` |  |  |  |
| Dashboard Summary | Dashboard KPIs (SANCTIONED RAW SQL aggregates; ECW-BI-20) | `dshDraftCount` | Draft Claims (read-only) | `text` |  |  |  |
| Dashboard Summary | Dashboard KPIs (SANCTIONED RAW SQL aggregates; ECW-BI-20) | `dshSubmittedCount` | Submitted Claims (read-only) | `text` |  |  |  |
| Dashboard Summary | Dashboard KPIs (SANCTIONED RAW SQL aggregates; ECW-BI-20) | `dshPaidCount` | Paid Claims (read-only) | `text` |  |  |  |
| Dashboard Summary | Dashboard KPIs (SANCTIONED RAW SQL aggregates; ECW-BI-20) | `dshDeniedCount` | Denied Claims (read-only) | `text` |  |  |  |
| Dashboard Summary | Dashboard KPIs (SANCTIONED RAW SQL aggregates; ECW-BI-20) | `dshOpenDenials` | Open Denials (read-only) | `text` |  |  |  |
| Dashboard Summary | Dashboard KPIs (SANCTIONED RAW SQL aggregates; ECW-BI-20) | `dshDeniedAmount` | Denied Amount ($; read-only) | `text` |  |  |  |

## Integrative Medicine

### Acupuncture Intake — `integrative_acupuncture_intake_cf`

Screen: 1 page(s) · 3 section(s) · 22 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acupuncture Initial Assessment | Chief Complaint and Medical History | `acu_chief_complaint` | Chief Complaint (patient words) | `textarea` |  |  |  |
| Acupuncture Initial Assessment | Chief Complaint and Medical History | `acu_pain_location` | Location of Pain or Dysfunction | `text` |  |  |  |
| Acupuncture Initial Assessment | Chief Complaint and Medical History | `acu_duration` | Duration of Symptoms | `text` |  |  |  |
| Acupuncture Initial Assessment | Chief Complaint and Medical History | `acu_conventional_tx` | Prior Conventional Treatments for This Condition | `select` |  |  |  |
| Acupuncture Initial Assessment | Chief Complaint and Medical History | `acu_medications` | Current Medications (relevant to acupuncture — anticoagulants, immunosuppressants, herbal supplements) | `textarea` |  |  |  |
| Acupuncture Initial Assessment | Chief Complaint and Medical History | `acu_contraindications` | Acupuncture Contraindications Screened | `select` |  |  |  |
| Acupuncture Initial Assessment | Traditional Chinese Medicine Assessment | `acu_tongue` | Tongue Body Color | `select` |  |  |  |
| Acupuncture Initial Assessment | Traditional Chinese Medicine Assessment | `acu_tongue_coat` | Tongue Coat | `select` |  |  |  |
| Acupuncture Initial Assessment | Traditional Chinese Medicine Assessment | `acu_pulse_quality` | Overall Pulse Quality | `select` |  |  |  |
| Acupuncture Initial Assessment | Traditional Chinese Medicine Assessment | `acu_temperature_preference` | Temperature Preference | `select` |  |  |  |
| Acupuncture Initial Assessment | Traditional Chinese Medicine Assessment | `acu_sleep_quality` | Sleep Quality (TCM Relevance) | `select` |  |  |  |
| Acupuncture Initial Assessment | Traditional Chinese Medicine Assessment | `acu_digestion` | Digestive Function | `select` |  |  |  |
| Acupuncture Initial Assessment | Traditional Chinese Medicine Assessment | `acu_emotional_state` | Predominant Emotional State | `select` |  |  |  |
| Acupuncture Initial Assessment | TCM Diagnosis and Treatment Plan | `acu_tcm_pattern` | Primary TCM Pattern Diagnosis | `select` |  |  |  |
| Acupuncture Initial Assessment | TCM Diagnosis and Treatment Plan | `acu_primary_points` | Primary Acupuncture Points Selected (e.g., LR3, ST36, SP6, GB34, KD3) | `textarea` |  |  |  |
| Acupuncture Initial Assessment | TCM Diagnosis and Treatment Plan | `acu_technique` | Needling Technique | `select` |  |  |  |
| Acupuncture Initial Assessment | TCM Diagnosis and Treatment Plan | `acu_retention_time` | Needle Retention Time | `select` |  |  |  |
| Acupuncture Initial Assessment | TCM Diagnosis and Treatment Plan | `acu_treatment_frequency` | Treatment Frequency Plan | `select` |  |  |  |
| Acupuncture Initial Assessment | TCM Diagnosis and Treatment Plan | `acu_planned_sessions` | Planned Number of Sessions in Initial Course | `number` |  |  |  |
| Acupuncture Initial Assessment | TCM Diagnosis and Treatment Plan | `acu_western_dx` | Western (ICD-10) Diagnosis for Billing | `text` |  |  |  |
| Acupuncture Initial Assessment | TCM Diagnosis and Treatment Plan | `acu_patient_response` | Patient Response During and After First Treatment (deqi sensation, relaxation, symptoms) | `textarea` |  |  |  |
| Acupuncture Initial Assessment | TCM Diagnosis and Treatment Plan | `acu_notes` | Treatment Notes and Integrative Care Coordination | `textarea` |  |  |  |

## Nuclear Medicine

### Cardiac MPI / Nuclear Stress — `nuclear_medicine_cardiac_imaging_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiac Nuclear Imaging — MPI, PET, and Viability | MPI SPECT and Stress Protocol | `stress_protocol` | Exercise vs. Pharmacologic Stress Protocol | `select` |  |  |  |
| Cardiac Nuclear Imaging — MPI, PET, and Viability | MPI SPECT and Stress Protocol | `interpretation` | MPI Interpretation and Report (ECTENSION: low-risk: normal MPI + normal LVEF; MODERATE: perfusion defect 1 territory (<10% LV area); HIGH RISK: 2+ territory perfusion defects or large (>10% LV area); summed stress score (SSS): 0-3 normal; 4-8 mildly abnormal; >=9 moderately-severely abnormal; LVEF post-stress (gated SPECT/PET): normal >55%; reduced = cardiomyopathy or extensive ischemia; TRANSIENT ISCHEMIC DILATION (TID): LV appears larger on stress than rest = severe ischemia (diffuse subendocardial ischemia); lung uptake (Tl-201): elevated = elevated PCWP; HIBERNATING MYOCARDIUM: perfusion defect at rest that persists; glucose metabolism (FDG PET): viable (mismatched) vs. scar (matched)) | `text` |  |  |  |
| Cardiac Nuclear Imaging — MPI, PET, and Viability | Cardiac PET and Viability Assessment | `cardiac_pet` | Cardiac PET Imaging | `select` |  |  |  |

## OB/GYN / Internal Medicine

### Menopause Management — `menopause_management_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Menopause Management Visit | Patient & Menopause Status | `patientId` | Patient | `typeahead` | Y |  |  |
| Menopause Management Visit | Patient & Menopause Status | `visitDate` | Visit Date | `date` | Y |  |  |
| Menopause Management Visit | Patient & Menopause Status | `provider` | Provider / GYN / Internist | `typeahead` | Y |  |  |
| Menopause Management Visit | Patient & Menopause Status | `menopauseStatus` | Menopause Status | `select` | Y |  |  |
| Menopause Management Visit | Patient & Menopause Status | `lmp` | Last Menstrual Period (LMP) or Surgical Menopause Date | `date` |  |  |  |
| Menopause Management Visit | Patient & Menopause Status | `mssq` | Menopause Symptom Score (MRS total 0-44) | `number` |  |  |  |
| Menopause Management Visit | Symptom Assessment | `vasomotor` | Vasomotor Symptoms (Hot Flashes) | `textarea` | Y |  |  |
| Menopause Management Visit | Symptom Assessment | `genitourinarySymptoms` | GSM (Genitourinary Syndrome of Menopause) | `textarea` | Y |  |  |
| Menopause Management Visit | Symptom Assessment | `otherSymptoms` | Other Menopause Symptoms | `textarea` | Y |  |  |
| Menopause Management Visit | HRT & Treatment Plan | `hrtDiscussion` | HRT Risk-Benefit Discussion & Plan | `textarea` | Y |  |  |

## OB/GYN / Oncology

### Cervical Cancer Screening — `cervical_cancer_screening_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cervical Cancer Screening / Colposcopy Visit | Patient & Screening History | `patientId` | Patient | `typeahead` | Y |  |  |
| Cervical Cancer Screening / Colposcopy Visit | Patient & Screening History | `visitDate` | Visit Date | `date` | Y |  |  |
| Cervical Cancer Screening / Colposcopy Visit | Patient & Screening History | `provider` | GYN / Colposcopist | `typeahead` | Y |  |  |
| Cervical Cancer Screening / Colposcopy Visit | Patient & Screening History | `visitType` | Visit Type | `select` | Y |  |  |
| Cervical Cancer Screening / Colposcopy Visit | Patient & Screening History | `papResult` | Most Recent Pap Result (Bethesda) | `select` | Y |  |  |
| Cervical Cancer Screening / Colposcopy Visit | Patient & Screening History | `hpvResult` | HPV Co-Test Result | `select` | Y |  |  |
| Cervical Cancer Screening / Colposcopy Visit | Colposcopy Findings | `colposcopy` | Colposcopy Examination Findings | `textarea` | Y |  |  |
| Cervical Cancer Screening / Colposcopy Visit | Colposcopy Findings | `biopsyResult` | Biopsy / Pathology Results | `textarea` | Y |  |  |
| Cervical Cancer Screening / Colposcopy Visit | Treatment & Surveillance Plan | `leepPlan` | LEEP / Treatment Plan | `textarea` | Y |  |  |
| Cervical Cancer Screening / Colposcopy Visit | Treatment & Surveillance Plan | `hpvVaccination` | HPV Vaccination Status & Counsel | `textarea` | Y |  |  |

## OB/GYN / Reproductive Medicine

### Infertility Evaluation — `infertility_evaluation_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Infertility Evaluation Visit | Patient & History | `patientId` | Patient (Female Partner) | `typeahead` | Y |  |  |
| Infertility Evaluation Visit | Patient & History | `visitDate` | Visit Date | `date` | Y |  |  |
| Infertility Evaluation Visit | Patient & History | `provider` | Reproductive Endocrinologist / OB-GYN | `typeahead` | Y |  |  |
| Infertility Evaluation Visit | Patient & History | `infertilityDuration` | Duration of Unprotected Intercourse Without Conception | `text` |  |  |  |
| Infertility Evaluation Visit | Patient & History | `femaleAge` | Female Partner Age | `number` | Y |  |  |
| Infertility Evaluation Visit | Patient & History | `infertilityType` | Infertility Type | `select` | Y |  |  |
| Infertility Evaluation Visit | Diagnostic Workup | `femaleWorkup` | Female Partner Evaluation | `textarea` | Y |  |  |
| Infertility Evaluation Visit | Diagnostic Workup | `maleWorkup` | Male Partner Semen Analysis | `textarea` | Y |  |  |
| Infertility Evaluation Visit | Treatment Plan | `plan` | Assessment & Infertility Treatment Plan | `textarea` | Y |  |  |

## OB/Psychiatry

### Postpartum Depression — `psychiatry_postpartum_depression_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Postpartum Depression and Perinatal Mental Health | Screening, Diagnosis, and Treatment | `ppd_f1` | Postpartum Depression Evaluation: PERINATAL MENTAL HEALTH SPECTRUM: BABY BLUES (50-80 pct Mothers; Days 2-5 Post-Partum; Tearfulness Mood Lability Anxiety; Self-Limited Resolves Under 2W; REASSURE SUPPORT; Do Not Diagnose Depression); POSTPARTUM DEPRESSION PPD (10-15 pct Mothers; ONSET Within 4W DSM-5; Practically Recognized Up To 12M Postpartum; Full MDD Criteria; Persistent Sadness Anhedonia; Guilt Poor Bonding; Sleep Appetite Changes; RISK FACTORS: Prior PPD OR Depression 50 pct Recurrence; Bipolar History; Anxiety History; Stressful Life Events; Poor Social Support; Unintended Pregnancy; Partner Violence; Thyroid Disease Postpartum Thyroiditis; Infant NICU Poor Health; Premature Difficult Delivery); POSTPARTUM PSYCHOSIS (Rare 1-2/1000; EMERGENCY; Onset Rapid 1-2W Post-Partum; Confusion Hallucinations Delusions Manic; INFANTICIDE RISK; HOSPITALIZE; Lithium Mood Stabilizer; ANTIPSYCHOTICS; ELECTROCONVULSIVE THERAPY ECT Severe; RISK FACTOR Bipolar I VERY HIGH 30-50 pct Post-Partum Psychosis Risk WITHOUT Prophylaxis; PERINATAL ANXIETY (15-20 pct; Generalized Anxiety OCD Panic; May Co-Occur PPD; Postpartum OCD Intrusive Thoughts Harm Infant Ego-Dystonic; DISTINGUISH From Psychosis Intent Ego-Syntonic; SCREENING: EDINBURGH POSTNATAL DEPRESSION SCALE EPDS (10-Item Self-Report; Score Over 13 Probable PPD; Item 10 Suicide Screen; SCREEN All Women 1M And 3M Postpartum AAP ACOG Universal; ALSO Screen During Pregnancy 28W; PHQ-9 Alternative Standard Offices; ACOG USPSTF Screen All Perinatal) | `text` |  |  |  |
| Postpartum Depression and Perinatal Mental Health | Screening, Diagnosis, and Treatment | `ppd_f2` | Pharmacotherapy, Breastfeeding Safety, and Bipolar Postpartum | `select` |  |  |  |

## Obstetric

### Lactation Support — `lactation_support_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lactation Support / IBCLC Consultation | Patient & Infant | `patientId` | Patient (Mother) | `typeahead` | Y |  |  |
| Lactation Support / IBCLC Consultation | Patient & Infant | `visitDate` | Visit Date | `date` | Y |  |  |
| Lactation Support / IBCLC Consultation | Patient & Infant | `consultant` | IBCLC / Provider | `typeahead` | Y |  |  |
| Lactation Support / IBCLC Consultation | Patient & Infant | `infantDob` | Infant Date of Birth | `date` | Y |  |  |
| Lactation Support / IBCLC Consultation | Patient & Infant | `deliveryType` | Delivery Type | `select` | Y |  |  |
| Lactation Support / IBCLC Consultation | Patient & Infant | `infantWeight` | Current Infant Weight (oz or g) | `text` |  |  |  |
| Lactation Support / IBCLC Consultation | Patient & Infant | `infantAge` | Infant Age (days / weeks) | `text` |  |  |  |
| Lactation Support / IBCLC Consultation | Breastfeeding Assessment | `latchAssessment` | Latch Assessment (LATCH Score 0-10) | `select` | Y |  |  |
| Lactation Support / IBCLC Consultation | Breastfeeding Assessment | `nippleCondition` | Nipple Condition | `select` | Y |  |  |
| Lactation Support / IBCLC Consultation | Breastfeeding Assessment | `milkSupply` | Milk Supply Assessment | `select` | Y |  |  |
| Lactation Support / IBCLC Consultation | Breastfeeding Assessment | `feedingPlan` | Feeding Concerns / Issues | `textarea` | Y |  |  |
| Lactation Support / IBCLC Consultation | Plan | `lacPlan` | Lactation Plan | `textarea` | Y |  |  |
| Lactation Support / IBCLC Consultation | Plan | `followUp` | Follow-up Date | `date` | Y |  |  |
| Lactation Support / IBCLC Consultation | Plan | `referrals` | Referrals | `textarea` |  |  |  |

## Otolaryngology

### Head and Neck Cancer (HPV/Larynx) — `otolaryngology_head_neck_cancer_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Head and Neck Cancer — HPV-OPC, Larynx Preservation, Immunotherapy | HPV-Oropharyngeal Cancer and Staging | `hpv_diagnosis` | HPV-Positive Oropharyngeal Cancer (OROPHARYNGEAL SQUAMOUS CELL CARCINOMA (OPSCC): TONSIL, BASE OF TONGUE: most common HPV-related sites; HPV PREVALENCE: 70-75% of OPSCC (rising epidemic; linked to oral-sexual behavior); HPV TESTING: p16 IHC (surrogate marker; high sensitivity for HPV+); confirm with HPV DNA ISH or PCR if p16+; PROGNOSIS: HPV+ OPSCC: dramatically better outcomes than HPV-negative; 3-year OS 85-90% vs. 60-70% HPV-; AJCC 8th EDITION: SEPARATE staging for p16+ and p16- OPSCC; HPV+ CLINICAL: younger patients (50s-60s); non-smokers predominate; CYSTIC NECK MASS (level 2 or 3): often first presentation of small primary; TRANSORAL ROBOTIC SURGERY (TORS): allows resection of base of tongue/tonsil; facilitates REDUCED DOSE RADIATION protocols; DE-ESCALATION TRIALS: ECOG 3311 (TORS + reduced dose RT 50 Gy): favorable results for HPV+ low-risk; NRG-HN002 (reduced dose CRT for HPV+): ongoing; NRG-HN005: chemo omission trials; CAUTION: standard of care remains concurrent chemoradiation (CRT) for locally advanced HPV+ OPSCC (awaiting level 1 de-escalation data); SMOKING MODIFIER: HPV+ OPSCC smokers have worse prognosis (more like HPV-negative) | `text` |  |  |  |
| Head and Neck Cancer — HPV-OPC, Larynx Preservation, Immunotherapy | HPV-Oropharyngeal Cancer and Staging | `staging` | AJCC 8th Edition and Workup | `select` |  |  |  |
| Head and Neck Cancer — HPV-OPC, Larynx Preservation, Immunotherapy | Treatment, Immunotherapy, and Swallowing | `treatment_hn` | Concurrent Chemoradiation and Larynx Preservation (STANDARD OF CARE: CONCURRENT CHEMORADIATION (CRT): concurrent cisplatin (100 mg/m2 Q3W x3 cycles) + IMRT (intensity-modulated radiation therapy; 70 Gy/35 fractions or 66 Gy in HPV+ favorable); IMRT: spares parotids, spinal cord, mandible; reduces xerostomia (dry mouth); AMIFOSTINE: reduces xerostomia (radioprotectant); LARYNX PRESERVATION (LARYNGEAL CANCER): VA Larynx Trial (1991): sequential chemotherapy + radiation vs. surgery + radiation: 64% larynx preservation; no survival difference; RTOG 91-11: concurrent CRT (cisplatin + radiation) superior to sequential for larynx preservation (75% vs. 64%); LARYNGEAL SURGERY vs. CRT: T1-T2 glottic: radiation alone (same survival; larynx preservation); T3-T4: CRT (PREFERRED) or total laryngectomy; T4b (massive invasion): total laryngectomy preferred (outcomes poor with CRT); CETUXIMAB: EGFR antibody; BONNER TRIAL: cetuximab + RT vs. RT alone for locally advanced HNSCC: OS benefit; LESS TOXIC than cisplatin; NOT equivalent to cisplatin for high-risk; use when cisplatin intolerant; CARBOPLATIN: weekly schedule; alternative to cisplatin (less nephrotoxicity, less ototoxicity) | `text` |  |  |  |
| Head and Neck Cancer — HPV-OPC, Larynx Preservation, Immunotherapy | Treatment, Immunotherapy, and Swallowing | `immunotherapy_swall` | Pembrolizumab and Swallowing Rehabilitation | `select` |  |  |  |

## Outreach

### Messaging Campaigns — `messaging_campaigns_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Campaign | Campaign | `name` | Campaign Name | `text` | Y |  |  |
| Campaign | Campaign | `campaignType` | Type | `select` |  |  |  |
| Campaign | Campaign | `channel` | Channel | `select` | Y |  |  |
| Campaign | Campaign | `scheduledAt` | Schedule For | `text` |  |  |  |
| Campaign | Message Template | `messageTemplate` | Message Content | `textarea` | Y |  |  |
| Campaign | Delivery Stats | `totalRecipients` | Total Recipients | `number` |  |  |  |
| Campaign | Delivery Stats | `sentCount` | Sent | `number` |  |  |  |
| Campaign | Delivery Stats | `failedCount` | Failed | `number` |  |  |  |
| Campaign | Delivery Stats | `launchedAt` | Launched At | `text` |  |  |  |

## PM&R

### SCI Rehabilitation — `physical_medicine_rehabilitation_spinal_cord_injury_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Spinal Cord Injury — Acute Rehabilitation Assessment | ASIA Classification and NLI | `asia_grade` | ASIA Impairment Scale (AIS) | `select` |  |  |  |
| Spinal Cord Injury — Acute Rehabilitation Assessment | ASIA Classification and NLI | `nli` | Neurological Level of Injury (NLI — most caudal level with normal motor AND sensory bilaterally; ISNCSCI exam standardized; C4 diaphragm (C3-5), C5 elbow flexors, C6 wrist extensors, C7 elbow extensors, C8 finger flexors, T1 small hand, L2 hip flexors, L3 knee extensors, L4 ankle dorsiflex, L5 toe extensors, S1 ankle plantarflex; Zone of Partial Preservation in Complete SCI) | `text` |  |  |  |
| Spinal Cord Injury — Acute Rehabilitation Assessment | SCI Complications Management | `autonomic_dysreflexia` | Autonomic Dysreflexia (AD) Protocol (T6 and above at risk; SBP rise >20-30 mmHg; pounding headache, diaphoresis above level, bradycardia, flushing; EMERGENCY: sit patient up, loosen clothing, identify trigger (bladder distension most common — foley kinked; bowel impaction); nitropaste 2% 1-2 inches; nifedipine bite-crush 10 mg; if persistent or severe MAP >150 → ICU; educate patient + family) | `text` |  |  |  |
| Spinal Cord Injury — Acute Rehabilitation Assessment | SCI Complications Management | `pressure_injury` | Pressure Injury Prevention Protocol | `select` |  |  |  |
| Spinal Cord Injury — Acute Rehabilitation Assessment | SCI Complications Management | `dvt_prophylaxis` | VTE Prophylaxis (SCI highest DVT risk; LMWH enoxaparin 40 mg daily (or weight-based 0.5 mg/kg daily) for minimum 8 weeks; IVC filter if LMWH contraindicated; mechanical compression bilateral; SCD starting day 1; avoid UFH for routine prophylaxis in acute SCI; delay LMWH if epidural hematoma risk or active hemorrhage; ACCP Guidelines) | `text` |  |  |  |

## Patient Engagement

### Remote Monitoring — `remote_monitoring_cf`

Screen: 1 page(s) · 3 section(s) · 22 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Remote Patient Monitoring (RPM) | RPM Enrollment | `patientId` | Patient | `typeahead` | Y |  |  |
| Remote Patient Monitoring (RPM) | RPM Enrollment | `enrollmentDate` | Enrollment Date | `date` | Y |  |  |
| Remote Patient Monitoring (RPM) | RPM Enrollment | `monitoringType` | Monitoring Device Type | `select` | Y |  |  |
| Remote Patient Monitoring (RPM) | RPM Enrollment | `indication` | Qualifying Condition (ICD-10) | `typeahead` | Y |  |  |
| Remote Patient Monitoring (RPM) | RPM Enrollment | `cptCode` | Billing Code | `text` |  |  |  |
| Remote Patient Monitoring (RPM) | RPM Enrollment | `deviceVendor` | Device Vendor / Platform | `text` |  |  |  |
| Remote Patient Monitoring (RPM) | RPM Enrollment | `consentObtained` | Patient consent for RPM obtained | `checkbox` | Y |  |  |
| Remote Patient Monitoring (RPM) | Alert Thresholds | `bpHighSystolic` | BP High Threshold - Systolic | `number` |  |  |  |
| Remote Patient Monitoring (RPM) | Alert Thresholds | `bpLowSystolic` | BP Low Threshold - Systolic | `number` |  |  |  |
| Remote Patient Monitoring (RPM) | Alert Thresholds | `glucoseHigh` | Glucose High Threshold (mg/dL) | `number` |  |  |  |
| Remote Patient Monitoring (RPM) | Alert Thresholds | `glucoseLow` | Glucose Low Threshold (mg/dL) | `number` |  |  |  |
| Remote Patient Monitoring (RPM) | Alert Thresholds | `weightChangeThreshold` | Weight Change Alert (lbs/day) | `number` |  |  |  |
| Remote Patient Monitoring (RPM) | Alert Thresholds | `o2LowThreshold` | O2 Sat Low Threshold (%) | `number` |  |  |  |
| Remote Patient Monitoring (RPM) | Alert Thresholds | `thresholdNotes` | Custom Threshold Notes | `textarea` |  |  |  |
| Remote Patient Monitoring (RPM) | Monthly Review | `reviewDate` | Review Date | `date` |  |  |  |
| Remote Patient Monitoring (RPM) | Monthly Review | `daysTransmitted` | Days Data Transmitted (this month) | `number` |  |  |  |
| Remote Patient Monitoring (RPM) | Monthly Review | `alertsGenerated` | Alerts Generated | `number` |  |  |  |
| Remote Patient Monitoring (RPM) | Monthly Review | `alertsActedOn` | Alerts Actioned | `number` |  |  |  |
| Remote Patient Monitoring (RPM) | Monthly Review | `avgBpReading` | Average BP Reading | `text` |  |  |  |
| Remote Patient Monitoring (RPM) | Monthly Review | `avgGlucose` | Average Glucose (mg/dL) | `number` |  |  |  |
| Remote Patient Monitoring (RPM) | Monthly Review | `reviewNotes` | Review Notes | `textarea` |  |  |  |
| Remote Patient Monitoring (RPM) | Monthly Review | `contactMinutes` | Clinical Staff Contact Time (minutes) | `number` |  |  |  |

## Pediatric Emergency

### Pediatric DKA Protocol — `pediatric_emergency_dka_pediatric_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric DKA — Fluid, Insulin, and Cerebral Edema | DKA Severity Classification | `severity` | Pediatric DKA Severity (ISPAD 2022) | `select` |  |  |  |
| Pediatric DKA — Fluid, Insulin, and Cerebral Edema | DKA Severity Classification | `insulin_protocol` | Insulin Protocol (ISPAD 2022) (insulin NOT started until after IV fluids for 1h (allow volume resuscitation first); start insulin infusion 0.05-0.1 units/kg/hr; lower doses (0.05 u/kg/hr) for young children, severe cerebral edema risk; glucose target: fall 50-100 mg/dL/hour; add D5-D10 to IV fluids when glucose 250-300 (two-bag system recommended — allows flexibility); NEVER stop insulin until ketones cleared (ketoacidosis correction = priority over glucose normalization); anion gap: must close; serum ketones: BHOB <1 mmol/L = DKA resolved; then transition to SC insulin) | `text` |  |  |  |
| Pediatric DKA — Fluid, Insulin, and Cerebral Edema | Cerebral Edema Recognition and Treatment | `cerebral_edema_dx` | Cerebral Edema Risk and Treatment | `select` |  |  |  |

## Pediatric Pulmonology

### Cystic Fibrosis (CFTR Modulators) — `pediatric_pulmonology_cystic_fibrosis_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cystic Fibrosis — CFTR Modulators, Airway Clearance, and Exacerbations | CFTR Modulator Therapy | `modulators` | CFTR Modulator Selection (CFF 2024) | `select` |  |  |  |
| Cystic Fibrosis — CFTR Modulators, Airway Clearance, and Exacerbations | CFTR Modulator Therapy | `monitoring` | CF Monitoring and Comorbidity Management (lung function: spirometry Q3 months (ppFEV1, FVC, FEF25-75); sputum cultures: P. aeruginosa, MRSA, B. cepacia complex, MSSA, Aspergillus, Stenotrophomonas; annual: chest CT, OGTT (CFRD — CF-related diabetes: 20-50% adults; insulin required), DXA (bone disease), LFTs, vitamin ADEK levels; CFRD: basal-bolus insulin preferred; metformin not recommended; portal hypertension in CF liver disease; CF center multidisciplinary team: CF doctor + nurse + respiratory therapist + dietitian + social worker + psychologist; transition to adult care 16-21 years) | `text` |  |  |  |
| Cystic Fibrosis — CFTR Modulators, Airway Clearance, and Exacerbations | Airway Clearance and Exacerbation Management | `airway_clearance` | Airway Clearance Therapy (ACT: CFF recommends TWICE daily; modalities: HFCWO (high-frequency chest wall oscillation: The Vest), PEP (positive expiratory pressure: Flutter, Aerobika, TheraPEP), active cycle of breathing technique (ACBT), autogenic drainage; dornase alfa (Pulmozyme): inhaled DNase; reduces sputum viscosity; ppFEV1 +5.8% (PULMOZYME trial); QD or BID; 6 months+ age; hypertonic saline 7% (HTS) 4 mL BID: improves mucociliary clearance; TIGER trial (vs. mannitol); pretreat with bronchodilator (albuterol) before HTS; ivacaftor pre-treatment before ACT; exercise: complementary to ACT; aerobic 30 min/day; physiotherapy prescription) | `text` |  |  |  |
| Cystic Fibrosis — CFTR Modulators, Airway Clearance, and Exacerbations | Airway Clearance and Exacerbation Management | `exacerbation` | Pulmonary Exacerbation Management | `select` |  |  |  |

## Pediatric Surgery

### Pediatric Appendicitis — `pediatric_surgery_appendicitis_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Acute Appendicitis — Management Algorithm | Diagnosis and Scoring | `pas_score` | Pediatric Appendicitis Score (PAS; 0-10; ≤3 = low risk; 4-6 = intermediate; ≥7 = high; migration pain to RLQ, anorexia, nausea/vomiting, tenderness at McBurney, rebound/guarding, elevated temp, leukocytosis, PMN shift; Alvarado score (MANTRELS) also used; intermediate risk: ultrasound first (radiation-free); high risk: surgical consultation directly) | `number` |  |  |  |
| Pediatric Acute Appendicitis — Management Algorithm | Diagnosis and Scoring | `imaging` | Imaging Approach | `select` |  |  |  |
| Pediatric Acute Appendicitis — Management Algorithm | Surgical and Non-Surgical Management | `treatment_approach` | Treatment Approach | `select` |  |  |  |

## Perioperative Medicine

### Pre-op Cardiac Clearance — `perioperative_medicine_cardiac_clearance_cf`

Screen: 1 page(s) · 3 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pre-operative Cardiac Risk Assessment (AHA/ACC 2024) | Surgical Risk and Urgency | `surgery_risk` | Surgical Risk Category | `select` |  |  |  |
| Pre-operative Cardiac Risk Assessment (AHA/ACC 2024) | Surgical Risk and Urgency | `urgency` | Surgical Urgency | `select` |  |  |  |
| Pre-operative Cardiac Risk Assessment (AHA/ACC 2024) | RCRI Score | `rcri_score` | Revised Cardiac Risk Index (RCRI) Score (1 point each: high-risk surgery, ischemic heart disease, CHF, CVA/TIA, DM on insulin, creatinine >2 mg/dL; 0-1 = low risk <1%; ≥2 = consider further testing) | `number` |  |  |  |
| Pre-operative Cardiac Risk Assessment (AHA/ACC 2024) | RCRI Score | `mets` | Functional Capacity (METs) | `select` |  |  |  |
| Pre-operative Cardiac Risk Assessment (AHA/ACC 2024) | Perioperative Medication Management | `beta_blocker` | Beta-blocker Perioperative Plan | `select` |  |  |  |
| Pre-operative Cardiac Risk Assessment (AHA/ACC 2024) | Perioperative Medication Management | `anticoag_bridge` | Anticoagulation Bridging Plan | `select` |  |  |  |

## Physical Medicine

### Stroke Rehab — `pmr_stroke_rehabilitation_cf`

Screen: 1 page(s) · 4 section(s) · 28 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Stroke Rehabilitation Assessment | Stroke Overview | `sr_stroke_date` | Stroke Date | `date` |  |  |  |
| Stroke Rehabilitation Assessment | Stroke Overview | `sr_stroke_type` | Stroke Type | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Stroke Overview | `sr_territory` | Vascular Territory Affected | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Stroke Overview | `sr_nihss_acute` | Initial NIHSS Score (stroke severity at admission) | `number` |  |  |  |
| Stroke Rehabilitation Assessment | Stroke Overview | `sr_mrs_premorbid` | Pre-Stroke mRS (Modified Rankin Scale) | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Stroke Overview | `sr_rehab_setting` | Current Rehabilitation Setting | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Functional Status | `sr_fim_score` | FIM Total Score (18-126, higher = more independent) | `number` |  |  |  |
| Stroke Rehabilitation Assessment | Functional Status | `sr_fim_motor` | FIM Motor Subscore (13-91) | `number` |  |  |  |
| Stroke Rehabilitation Assessment | Functional Status | `sr_fim_cognitive` | FIM Cognitive Subscore (5-35) | `number` |  |  |  |
| Stroke Rehabilitation Assessment | Functional Status | `sr_mrs_current` | Current mRS (Modified Rankin Scale) | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Functional Status | `sr_ambulation` | Ambulation Status | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Functional Status | `sr_assistive_device` | Assistive Device | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Neurological Deficits | `sr_motor` | Motor Deficit | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Neurological Deficits | `sr_spasticity` | Spasticity (Modified Ashworth Scale) | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Neurological Deficits | `sr_aphasia` | Aphasia Type | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Neurological Deficits | `sr_dysphagia` | Dysphagia | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Neurological Deficits | `sr_neglect` | Hemispatial Neglect | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Neurological Deficits | `sr_cognition_deficits` | Cognitive Deficits (attention, memory, executive function, processing speed) | `textarea` |  |  |  |
| Stroke Rehabilitation Assessment | Neurological Deficits | `sr_post_stroke_depression` | Post-Stroke Depression | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Neurological Deficits | `sr_shoulder_pain` | Hemiplegic Shoulder Pain | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Rehabilitation Interventions | `sr_botulinum` | Botulinum Toxin for Spasticity | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Rehabilitation Interventions | `sr_oral_antispasticity` | Oral Antispasticity Agent | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Rehabilitation Interventions | `sr_it_baclofen` | Intrathecal Baclofen Pump | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Rehabilitation Interventions | `sr_constraint_induced` | Constraint-Induced Movement Therapy (CIMT) | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Rehabilitation Interventions | `sr_rehab_goals` | Rehabilitation Goals (ambulation distance, transfers, ADL independence, return home) | `textarea` |  |  |  |
| Stroke Rehabilitation Assessment | Rehabilitation Interventions | `sr_secondary_prevention` | Secondary Stroke Prevention (antiplatelets or anticoagulation, BP control, statin, risk factor management) | `textarea` |  |  |  |
| Stroke Rehabilitation Assessment | Rehabilitation Interventions | `sr_discharge_plan` | Anticipated Discharge Destination | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Rehabilitation Interventions | `sr_notes` | Additional Notes | `textarea` |  |  |  |

## Physical Medicine and Rehab

### Spinal Cord Injury — `pmr_spinal_cord_injury_cf`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Spinal Cord Injury: Comprehensive Management | SCI Level and Classification | `sci_level` | Neurological Level of Injury (NLI) | `select` |  |  |  |
| Spinal Cord Injury: Comprehensive Management | SCI Level and Classification | `sci_asia` | ASIA Impairment Scale (AIS) | `select` |  |  |  |
| Spinal Cord Injury: Comprehensive Management | SCI Level and Classification | `sci_time_since` | Time Since Injury | `select` |  |  |  |
| Spinal Cord Injury: Comprehensive Management | Secondary Conditions and Management | `sci_autonomic_dysreflexia` | Autonomic Dysreflexia (AD) — Medical Emergency in T6 and Above | `select` |  |  |  |
| Spinal Cord Injury: Comprehensive Management | Secondary Conditions and Management | `sci_spasticity` | Spasticity Management | `select` |  |  |  |
| Spinal Cord Injury: Comprehensive Management | Secondary Conditions and Management | `sci_bladder` | Neurogenic Bladder Management | `select` |  |  |  |
| Spinal Cord Injury: Comprehensive Management | Secondary Conditions and Management | `sci_bowel` | Neurogenic Bowel Program | `select` |  |  |  |
| Spinal Cord Injury: Comprehensive Management | Secondary Conditions and Management | `sci_pain` | Neuropathic Pain Management | `select` |  |  |  |
| Spinal Cord Injury: Comprehensive Management | Secondary Conditions and Management | `sci_pressure_injuries` | Pressure Injury Prevention and Management | `select` |  |  |  |
| Spinal Cord Injury: Comprehensive Management | Secondary Conditions and Management | `sci_vte` | DVT and PE Prophylaxis | `select` |  |  |  |
| Spinal Cord Injury: Comprehensive Management | Secondary Conditions and Management | `sci_notes` | SCI Comprehensive Management Notes and Rehabilitation Team Plan | `textarea` |  |  |  |

## Physical Medicine and Rehabilitation

### Post-Stroke Rehabilitation — `physical_medicine_rehabilitation_stroke_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Post-Stroke Rehab — IRF Criteria, CIMT, Aphasia, and Reintegration | Inpatient Rehabilitation Criteria and Team | `irf_criteria` | Inpatient Rehab Facility (IRF) Criteria (MEDICARE IRF COVERAGE CRITERIA: patient must REQUIRE and BENEFIT FROM at least 2 of the following therapies: PT, OT, speech/language pathology; patient must TOLERATE 3h/day of therapy (can be divided); patient must BENEFIT FROM multidisciplinary coordinated inpatient care; patient must HAVE REASONABLE EXPECTATION of functional improvement; PHYSICIAN: rehabilitation physician oversight 3h/week; STROKE TIMING: IRF generally within 2-4 weeks post-stroke for best outcomes; acute stroke: tPA → acute hospital → ASAP rehab initiation (early mobilization); FIM SCORE (Functional Independence Measure): 18 items; 7 levels (1=total assist to 7=complete independence); MOTOR SUBSCORES: eating, grooming, bathing, U/E dressing, L/E dressing, toileting, bladder, bowel, transfers (tub, toilet, chair/wheelchair, locomotion, stairs); COGNITIVE SUBSCORES: comprehension, expression, social interaction, problem solving, memory; ADMISSION FIM: stroke patients: typically 50-100 range; DISCHARGE FIM: goal >=80-90 (moderate-substantial assistance reduction); FIM EFFICIENCY: FIM gain/LOS; STROKE SEVERITY: NIHSS 5-15: good IRF candidates; NIHSS <5: may benefit from SNF or home PT; NIHSS >20: may need time in acute hospital + step-down SNF before IRF; BARTHEL INDEX: alternative functional assessment; 100 = independent) | `text` |  |  |  |
| Post-Stroke Rehab — IRF Criteria, CIMT, Aphasia, and Reintegration | Inpatient Rehabilitation Criteria and Team | `rehab_team` | Multidisciplinary Rehabilitation Team Roles | `select` |  |  |  |
| Post-Stroke Rehab — IRF Criteria, CIMT, Aphasia, and Reintegration | Evidence-Based Therapy and Community Reintegration | `cimt_aphasia` | CIMT and Aphasia Therapy (CONSTRAINT-INDUCED MOVEMENT THERAPY (CIMT): THEORY: overcomes learned non-use of paretic limb; TECHNIQUE: constrains unaffected upper extremity (glove or mitt) while intensively training paretic limb; DOSE: 6h/day massed practice x14 days; MODIFIED CIMT (mCIMT): 2h/day x 2-3 weeks + restraint; HOME-BASED: feasible; EVIDENCE: EXCITE trial (Wolf 2006): CIMT superior to usual care for UE function at 3-12 months; most effective when: >20 degrees active wrist extension + 10 degrees finger extension; TIMING: 3-9 months post-stroke (optimal window); TRANSCRANIAL MAGNETIC STIMULATION (TMS): CORTICAL EXCITABILITY modulation; inhibitory rTMS to unaffected hemisphere reduces interhemispheric inhibition; COMBINED WITH CIMT: emerging evidence; MIRROR THERAPY: motor imagery + visual feedback; improves arm function; VIRTUAL REALITY: gaming systems for UE rehabilitation; engaging; evidence growing; APHASIA THERAPY: SEMANTIC FEATURE ANALYSIS (SFA); CONSTRAINT-INDUCED APHASIA THERAPY (CIAT): massed practice with social interaction; MELODIC INTONATION THERAPY (MIT): for Broca aphasia with intact right hemisphere; uses singing/rhythm; SUPPORTED COMMUNICATION: partner training; communication books; AAC devices; TELEHEALTH: remote SLP growing evidence; GLOBAL APHASIA: most severe (both comprehension + expression); AAC most important; recovery possible for years post-stroke) | `text` |  |  |  |
| Post-Stroke Rehab — IRF Criteria, CIMT, Aphasia, and Reintegration | Evidence-Based Therapy and Community Reintegration | `community` | Community Reintegration and Return to Driving | `select` |  |  |  |

## Podiatry

### Diabetic Foot / Charcot — `podiatry_diabetic_foot_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Diabetic Foot Ulcer and Charcot Neuroarthropathy | Diabetic Foot Ulcer Classification | `wagner_grade` | Wagner Classification | `select` |  |  |  |
| Diabetic Foot Ulcer and Charcot Neuroarthropathy | Diabetic Foot Ulcer Classification | `infection_severity` | Infection Severity (IDSA) | `select` |  |  |  |
| Diabetic Foot Ulcer and Charcot Neuroarthropathy | Charcot Neuroarthropathy | `charcot_stage` | Eichenholtz Stage | `select` |  |  |  |

## Population Health

### Pop Health Outreach — `population_health_outreach_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Population Health Outreach | Outreach Event | `outreach_type` | Outreach Type | `select` |  |  |  |
| Population Health Outreach | Outreach Event | `contact_method` | Contact Method | `select` |  |  |  |
| Population Health Outreach | Outreach Event | `patient_receptive` | Patient Response | `select` |  |  |  |
| Population Health Outreach | Care Gaps Addressed | `screening_gap` | Screening / Care Gap Identified | `text` |  |  |  |
| Population Health Outreach | Care Gaps Addressed | `gap_closed` | Care gap closed / appointment scheduled | `checkbox` |  |  |  |
| Population Health Outreach | Care Gaps Addressed | `care_plan_updated` | Care plan updated in EHR | `checkbox` |  |  |  |
| Population Health Outreach | Documentation | `notes` | Outreach Notes | `textarea` |  |  |  |
| Population Health Outreach | Documentation | `escalation_needed` | Clinical escalation needed — physician notified | `checkbox` |  |  |  |
| Population Health Outreach | Documentation | `next_contact_date` | Next Planned Contact Date | `date` |  |  |  |

## Preventive Care

### Tobacco Cessation — `preventive_tobacco_cessation_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Tobacco Cessation — Screening and Treatment | Assessment and Pharmacotherapy | `tob_f1` | Tobacco Cessation Assessment: SCREENING: ASK Every Patient (Vital Sign); USPSTF GRADE A Cessation Counseling and Pharmacotherapy All Adults; BURDEN: 480,000 Deaths/Y USA; Leading Preventable Cause; 1/5 Cancer Deaths; 30 pct CVD; COPD; Stroke; NICOTINE DEPENDENCE (Fagerstroms Test 0-10; 0-2 Low; 3-4 Low-Moderate; 5-7 Moderate; 8-10 High); KEY QUESTIONS: Time to First Cigarette After Waking (Under 30M = High Dependence); Cigarettes Per Day; Past Quit Attempts; MOTIVATION: Stages of Change (Precontemplation; Contemplation; Preparation; Action; Maintenance); 5 Rs For Not Ready (Relevance; Risks; Rewards; Roadblocks; Repetition); CESSATION SUCCESS: Unaided 3-5 pct 1Y; Brief Advice 5-10 pct; NRT 10-15 pct; Varenicline 20-30 pct; COMBINATION Behavioral + Pharmacotherapy 35 pct; 5 As FRAMEWORK: Ask (Identify Tobacco Users); Advise (Clear Strong Personalized Message Quit); Assess (Readiness to Quit); Assist (Set Quit Date; Counseling; Pharmacotherapy; QuitLine); Arrange (Follow-Up; Prevent Relapse; 1-Week and 1-Month Call) | `text` |  |  |  |
| Tobacco Cessation — Screening and Treatment | Assessment and Pharmacotherapy | `tob_f2` | NRT and Prescription Pharmacotherapy | `select` |  |  |  |

## Security

### MFA — `mfa_cf`

Screen: 4 page(s) · 5 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `ORGANIZATIONS`, `USERS`, `USER_MFA`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| MFA Status | Current Status | `mfaEnrolled` | Enrolled | `checkbox` |  |  |  |
| MFA Status | Current Status | `mfaEnabled` | Enabled | `checkbox` |  |  |  |
| MFA Status | Current Status | `mfaMethod` | Method | `text` |  |  |  |
| MFA Status | Current Status | `mfaEnrolledAt` | Enrolled At | `text` |  |  |  |
| MFA Status | Current Status | `mfaLastVerifiedAt` | Last Verified | `text` |  |  |  |
| MFA Status | Current Status | `mfaRecoveryCodesRemaining` | Recovery Codes Remaining | `number` |  |  |  |
| MFA Status | Current Status | `mfaLoginEnforcement` | Login Enforcement Active | `checkbox` |  |  |  |
| Enroll / Re-Enroll | TOTP Enrollment | `mfaEnrollSecret` | TOTP Secret (scan in authenticator app) | `text` |  |  |  |
| Enroll / Re-Enroll | TOTP Enrollment | `mfaEnrollOtpUri` | OTP Auth URI | `text` |  |  |  |
| Enroll / Re-Enroll | TOTP Enrollment | `mfaEnrollMessage` | Instructions | `textarea` |  |  |  |
| Verify / Activate | Verify Code | `mfaVerifyCode` | TOTP Code (6 digits) | `text` |  |  |  |
| Verify / Activate | Verify Code | `mfaVerifyRecoveryCode` | Or Recovery Code | `text` |  |  |  |
| Verify / Activate | Verification Result | `mfaVerifyVerified` | Verified | `checkbox` |  |  |  |
| Verify / Activate | Verification Result | `mfaVerifyEnabledOut` | MFA Enabled | `checkbox` |  |  |  |
| Verify / Activate | Verification Result | `mfaVerifyRecoveryCodes` | Recovery Codes (shown once) | `textarea` |  |  |  |
| Disable MFA | Disable | `mfaDisableCode` | TOTP Code | `text` |  |  |  |
| Disable MFA | Disable | `mfaDisableRecoveryCode` | Or Recovery Code | `text` |  |  |  |
| Disable MFA | Disable | `mfaDisableUserId` | Target User ID (admin only) | `text` |  |  |  |

## Utilization Management

### Peer-to-Peer Review — `peer_to_peer_review_cf`

Screen: 1 page(s) · 2 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Peer-to-Peer Review Log | Review Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Peer-to-Peer Review Log | Review Details | `reviewDate` | Review Date | `date` | Y |  |  |
| Peer-to-Peer Review Log | Review Details | `reviewTime` | Review Time | `text` |  |  |  |
| Peer-to-Peer Review Log | Review Details | `requestingProvider` | Our Requesting Provider (spoke on call) | `typeahead` | Y |  |  |
| Peer-to-Peer Review Log | Review Details | `insuranceName` | Insurance Company | `text` | Y |  |  |
| Peer-to-Peer Review Log | Review Details | `reviewingMD` | Reviewing Medical Director (Insurance MD) | `text` | Y |  |  |
| Peer-to-Peer Review Log | Review Details | `callRefNumber` | Call Reference / Case Number | `text` |  |  |  |
| Peer-to-Peer Review Log | Authorization Request & Denial | `requestedService` | Requested Service / Procedure | `text` | Y |  |  |
| Peer-to-Peer Review Log | Authorization Request & Denial | `denialReason` | Original Denial Reason | `textarea` | Y |  |  |
| Peer-to-Peer Review Log | Authorization Request & Denial | `clinicalJustification` | Clinical Justification Presented | `textarea` | Y |  |  |
| Peer-to-Peer Review Log | Authorization Request & Denial | `outcome` | P2P Outcome | `select` | Y |  |  |
| Peer-to-Peer Review Log | Authorization Request & Denial | `p2pNotes` | Additional Notes / Next Steps | `textarea` | Y |  |  |

## Wound Care / Surgery

### Wound Care Follow-Up — `wound_care_followup_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Wound Care Follow-Up Visit | Patient & Wound History | `patientId` | Patient | `typeahead` | Y |  |  |
| Wound Care Follow-Up Visit | Patient & Wound History | `visitDate` | Visit Date | `date` | Y |  |  |
| Wound Care Follow-Up Visit | Patient & Wound History | `provider` | Wound Care Specialist / Provider | `typeahead` | Y |  |  |
| Wound Care Follow-Up Visit | Patient & Wound History | `woundType` | Wound Type / Etiology | `select` | Y |  |  |
| Wound Care Follow-Up Visit | Patient & Wound History | `woundAge` | Wound Age (duration) | `text` |  |  |  |
| Wound Care Follow-Up Visit | Wound Assessment | `woundMeasure` | Wound Measurement | `textarea` | Y |  |  |
| Wound Care Follow-Up Visit | Wound Assessment | `woundStatus` | Infection / Exudate / Surrounding Skin | `textarea` | Y |  |  |
| Wound Care Follow-Up Visit | Dressing & Treatment Plan | `dressing` | Wound Debridement & Dressing Selection | `textarea` | Y |  |  |
| Wound Care Follow-Up Visit | Dressing & Treatment Plan | `plan` | Assessment, Systemic Optimization & Plan | `textarea` | Y |  |  |

## Wound Management

### Wound Care — `wound_care_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Wound Care Assessment and Management | Wound Characteristics | `wound_type` | Wound Type | `select` |  |  |  |
| Wound Care Assessment and Management | Wound Characteristics | `location` | Wound Location (anatomic site) | `text` |  |  |  |
| Wound Care Assessment and Management | Wound Characteristics | `length_cm` | Length (cm) | `number` |  |  |  |
| Wound Care Assessment and Management | Wound Characteristics | `width_cm` | Width (cm) | `number` |  |  |  |
| Wound Care Assessment and Management | Wound Characteristics | `depth_cm` | Depth (cm) | `number` |  |  |  |
| Wound Care Assessment and Management | Wound Characteristics | `pressure_stage` | Pressure Injury Stage (if applicable) | `select` |  |  |  |
| Wound Care Assessment and Management | Wound Bed Assessment | `tissue_type` | Predominant Tissue Type | `select` |  |  |  |
| Wound Care Assessment and Management | Wound Bed Assessment | `exudate_amount` | Exudate Amount | `select` |  |  |  |
| Wound Care Assessment and Management | Wound Bed Assessment | `exudate_type` | Exudate Character | `select` |  |  |  |
| Wound Care Assessment and Management | Wound Bed Assessment | `periwound` | Periwound Skin | `select` |  |  |  |
| Wound Care Assessment and Management | Wound Bed Assessment | `wound_infection` | Signs of wound infection (purulence, cellulitis, odor, increasing pain) | `checkbox` |  |  |  |
| Wound Care Assessment and Management | Treatment Plan | `debridement` | Debridement | `select` |  |  |  |
| Wound Care Assessment and Management | Treatment Plan | `dressing_type` | Dressing Selected (product name / category) | `text` |  |  |  |
| Wound Care Assessment and Management | Treatment Plan | `change_frequency` | Dressing Change Frequency | `select` |  |  |  |
| Wound Care Assessment and Management | Treatment Plan | `npwt` | Negative pressure wound therapy (NPWT/VAC) in use | `checkbox` |  |  |  |
| Wound Care Assessment and Management | Treatment Plan | `offloading` | Offloading device ordered (diabetic/pressure wounds) | `checkbox` |  |  |  |
| Wound Care Assessment and Management | Treatment Plan | `next_wound_check` | Next Wound Re-evaluation Date | `date` |  |  |  |
| Wound Care Assessment and Management | Treatment Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |
