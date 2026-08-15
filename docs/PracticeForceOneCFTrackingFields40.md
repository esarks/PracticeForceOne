---
title: "PracticeForceOneCFTrackingFields40"
---

# CF Tracking — Field-Level Detail (part 40 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Therapy**, **Workflow**, **Administration**, **Anesthesia**, **Cardiology / Internal Medicine**, **GYN Oncology**, **Genetics**, **Hospice / Palliative Care**, **Kanban**, **Occupational Health**, **Patient**, **Pediatric Hematology**, **Pediatric Oncology**, **Pediatrics / Developmental**, **Pharmacy**, **Providers**, **Rehabilitation**, **Remote Patient Monitoring**, **Reports**, **Reproductive Endocrinology**, **Research**, **Settings**, **Spine Surgery**, **Surgery/Emergency**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Therapy

### OT Evaluation — `occupational_therapy_eval_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Occupational Therapy Evaluation | Patient & Referral | `patientId` | Patient | `typeahead` | Y |  |  |
| Occupational Therapy Evaluation | Patient & Referral | `evalDate` | Evaluation Date | `date` | Y |  |  |
| Occupational Therapy Evaluation | Patient & Referral | `therapist` | OT / COTA | `typeahead` | Y |  |  |
| Occupational Therapy Evaluation | Patient & Referral | `referringProvider` | Referring Provider | `typeahead` | Y |  |  |
| Occupational Therapy Evaluation | Patient & Referral | `referralDiagnosis` | Referral Diagnosis | `text` | Y |  |  |
| Occupational Therapy Evaluation | Patient & Referral | `referralReason` | Referral Reason | `select` | Y |  |  |
| Occupational Therapy Evaluation | ADL / IADL Assessment | `fedDressing` | Dressing | `select` | Y |  |  |
| Occupational Therapy Evaluation | ADL / IADL Assessment | `fedBathing` | Bathing / Hygiene | `select` | Y |  |  |
| Occupational Therapy Evaluation | ADL / IADL Assessment | `fedToileting` | Toileting | `select` | Y |  |  |
| Occupational Therapy Evaluation | ADL / IADL Assessment | `fedFeeding` | Feeding / Eating | `select` | Y |  |  |
| Occupational Therapy Evaluation | ADL / IADL Assessment | `fedMealPrep` | Meal Preparation (IADL) | `select` | Y |  |  |
| Occupational Therapy Evaluation | ADL / IADL Assessment | `fedMedMgmt` | Medication Management (IADL) | `select` | Y |  |  |
| Occupational Therapy Evaluation | ADL / IADL Assessment | `adlNarrative` | ADL/IADL Narrative | `textarea` | Y |  |  |
| Occupational Therapy Evaluation | Goals & Plan | `stGoals` | Short-Term Goals (4 weeks) | `textarea` | Y |  |  |
| Occupational Therapy Evaluation | Goals & Plan | `ltGoals` | Long-Term Goals (12 weeks) | `textarea` | Y |  |  |
| Occupational Therapy Evaluation | Goals & Plan | `frequency` | Treatment Frequency | `select` | Y |  |  |
| Occupational Therapy Evaluation | Goals & Plan | `equipment` | Adaptive Equipment Recommended | `textarea` |  |  |  |

### Physical Therapy Visit — `physical_therapy_visit_cf`

Screen: 1 page(s) · 4 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Physical Therapy Visit Note | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Physical Therapy Visit Note | Patient & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| Physical Therapy Visit Note | Patient & Visit | `therapist` | PT / PTA | `typeahead` | Y |  |  |
| Physical Therapy Visit Note | Patient & Visit | `visitNumber` | Visit Number (this episode) | `number` |  |  |  |
| Physical Therapy Visit Note | Patient & Visit | `visitType` | Visit Type | `select` | Y |  |  |
| Physical Therapy Visit Note | Patient & Visit | `diagnosis` | Referring Diagnosis | `text` | Y |  |  |
| Physical Therapy Visit Note | Subjective | `painScore` | Pain NRS (0-10) | `select` | Y |  |  |
| Physical Therapy Visit Note | Subjective | `subjectiveReport` | Patient Report | `textarea` | Y |  |  |
| Physical Therapy Visit Note | Objective | `rom` | ROM / Measurements | `textarea` | Y |  |  |
| Physical Therapy Visit Note | Objective | `functionalMeasures` | Functional Measures / Tests | `textarea` | Y |  |  |
| Physical Therapy Visit Note | Treatment & Plan | `interventions` | Interventions Today | `textarea` | Y |  |  |
| Physical Therapy Visit Note | Treatment & Plan | `hep` | Home Exercise Program (HEP) | `textarea` | Y |  |  |
| Physical Therapy Visit Note | Treatment & Plan | `ptGoalsProgress` | Goal Progress | `select` | Y |  |  |
| Physical Therapy Visit Note | Treatment & Plan | `nextVisit` | Next Session | `date` |  |  |  |
| Physical Therapy Visit Note | Treatment & Plan | `remaining` | Sessions Remaining (authorized) | `number` |  |  |  |

### SLP Evaluation — `speech_therapy_eval_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Speech-Language Pathology Evaluation | Patient & Referral | `patientId` | Patient | `typeahead` | Y |  |  |
| Speech-Language Pathology Evaluation | Patient & Referral | `evalDate` | Evaluation Date | `date` | Y |  |  |
| Speech-Language Pathology Evaluation | Patient & Referral | `slp` | SLP / SLPA | `typeahead` | Y |  |  |
| Speech-Language Pathology Evaluation | Patient & Referral | `referralDx` | Referral Diagnosis | `text` | Y |  |  |
| Speech-Language Pathology Evaluation | Patient & Referral | `areaOfConcern` | Primary Area of Concern | `select` | Y |  |  |
| Speech-Language Pathology Evaluation | Swallowing Assessment (if applicable) | `dysphagiaPresent` | Dysphagia concern present | `checkbox` |  |  |  |
| Speech-Language Pathology Evaluation | Swallowing Assessment (if applicable) | `clinicalSwallow` | Clinical Swallowing Evaluation Result | `select` |  |  |  |
| Speech-Language Pathology Evaluation | Swallowing Assessment (if applicable) | `iddsiLevel` | IDDSI Diet Texture Level Recommended | `select` |  |  |  |
| Speech-Language Pathology Evaluation | Language / Speech Assessment | `expressiveLanguage` | Expressive Language | `select` |  |  |  |
| Speech-Language Pathology Evaluation | Language / Speech Assessment | `receptiveLanguage` | Receptive Language / Comprehension | `select` |  |  |  |
| Speech-Language Pathology Evaluation | Language / Speech Assessment | `speechIntelligibility` | Speech Intelligibility | `select` |  |  |  |
| Speech-Language Pathology Evaluation | Language / Speech Assessment | `findingsNarrative` | Clinical Findings Narrative | `textarea` | Y |  |  |
| Speech-Language Pathology Evaluation | Language / Speech Assessment | `slpGoals` | Treatment Goals | `textarea` | Y |  |  |
| Speech-Language Pathology Evaluation | Language / Speech Assessment | `slpFrequency` | Treatment Frequency | `select` | Y |  |  |

## Workflow

### Workflow Definitions — `workflows_cf`

Screen: 3 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Workflow Definitions | Workflow | `wfsId` | Workflow ID | `text` |  |  |  |
| Workflow Definitions | Workflow | `wfsName` | Name | `text` |  |  |  |
| Workflow Definitions | Workflow | `wfsDescription` | Description | `text` |  |  |  |
| Workflow Definitions | Workflow | `wfsStepCount` | Step Count | `number` |  |  |  |
| Workflow Definitions | Workflow | `wfsInstanceSource` | Instance Source API | `text` |  |  |  |
| Step Detail | Workflow Step | `wfsStepId` | Step ID | `text` |  |  |  |
| Step Detail | Workflow Step | `wfsStepLabel` | Label | `text` |  |  |  |
| Step Detail | Workflow Step | `wfsStepScreen` | Screen (formType) | `text` |  |  |  |
| Step Detail | Workflow Step | `wfsStepUrl` | URL Template | `text` |  |  |  |
| Step Detail | Workflow Step | `wfsStepEntity` | Entity | `text` |  |  |  |
| Step Detail | Workflow Step | `wfsStepPrev` | Previous Step | `text` |  |  |  |
| Step Detail | Workflow Step | `wfsStepNext` | Next Step | `text` |  |  |  |
| Step Detail | Workflow Step | `wfsStepCompleteStatuses` | Complete When Status In | `text` |  |  |  |
| Step Detail | Workflow Step | `wfsStepLanes` | Board Lanes (JSON) | `textarea` |  |  |  |
| Edit Workflow Definition | Edit via API | `wfsEditWorkflowId` | Workflow ID to Update | `text` | Y |  |  |
| Edit Workflow Definition | Edit via API | `wfsEditStepsJson` | Steps Array (JSON) for PUT /api/workflows/{id} | `textarea` | Y |  |  |

### Workflow Events — `workflow_events_cf`

Screen: 3 page(s) · 3 section(s) · 30 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `SOURCE_RECORD_EVENTS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Event Log | Filter | `wePracticeId` | Practice ID (required) | `text` | Y |  |  |
| Event Log | Filter | `weEventType` | Event Type Filter | `text` |  |  |  |
| Event Log | Filter | `weSourceType` | Source Type Filter | `text` |  |  |  |
| Event Log | Filter | `weLimit` | Limit (1-500, default 100) | `number` |  |  |  |
| Event Detail | Event | `weId` | Event ID | `text` |  |  |  |
| Event Detail | Event | `weEventTypeDisplay` | Event Type | `text` |  |  |  |
| Event Detail | Event | `weSourceTypeDisplay` | Source Type | `text` |  |  |  |
| Event Detail | Event | `weSourceId` | Source ID | `text` |  |  |  |
| Event Detail | Event | `wePatientId` | Patient ID | `text` |  |  |  |
| Event Detail | Event | `weEncounterId` | Encounter ID | `text` |  |  |  |
| Event Detail | Event | `wePriorState` | Prior State | `text` |  |  |  |
| Event Detail | Event | `weNewState` | New State | `text` |  |  |  |
| Event Detail | Event | `weActorUserId` | Actor User ID | `text` |  |  |  |
| Event Detail | Event | `weSummary` | Summary | `text` |  |  |  |
| Event Detail | Event | `weCreatedAt` | Created At | `text` |  |  |  |
| Create Event | New Event | `wePostPracticeId` | Practice ID (required) | `text` | Y |  |  |
| Create Event | New Event | `wePostEventType` | Event Type (required) | `text` | Y |  |  |
| Create Event | New Event | `wePostSourceType` | Source Type (required) | `text` | Y |  |  |
| Create Event | New Event | `wePostSourceId` | Source ID (UUID) | `text` |  |  |  |
| Create Event | New Event | `wePostPatientId` | Patient ID (UUID) | `text` |  |  |  |
| Create Event | New Event | `wePostEncounterId` | Encounter ID (UUID) | `text` |  |  |  |
| Create Event | New Event | `wePostPriorState` | Prior State | `text` |  |  |  |
| Create Event | New Event | `wePostNewState` | New State | `text` |  |  |  |
| Create Event | New Event | `wePostSummary` | Summary | `text` |  |  |  |
| Create Event | New Event | `wePostNotify` | Create Notification | `checkbox` |  |  |  |
| Create Event | New Event | `wePostNotifyRole` | Notify Role | `text` |  |  |  |
| Create Event | New Event | `wePostSeverity` | Notification Severity | `select` |  |  |  |
| Create Event | New Event | `wePostTitle` | Notification Title | `text` |  |  |  |
| Create Event | New Event | `wePostMessage` | Notification Message | `text` |  |  |  |
| Create Event | New Event | `wePostActionUrl` | Action URL | `text` |  |  |  |

### Workflows — `WORKFLOWS`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Workflow Definition | Workflow | `wfId` | Workflow ID (e.g. primary-visit) | `text` |  |  |  |
| Workflow Definition | Workflow | `wfName` | Name | `text` |  |  |  |
| Workflow Definition | Workflow | `wfDescription` | Description | `text` |  |  |  |
| Workflow Definition | Workflow | `wfStepCount` | Step Count (in list view) | `text` |  |  |  |
| Workflow Definition | Steps (detail view) | `wfStepId` | Step ID | `text` |  |  |  |
| Workflow Definition | Steps (detail view) | `wfStepLabel` | Step Label | `text` |  |  |  |
| Workflow Definition | Steps (detail view) | `wfStepScreen` | Screen (formType) | `text` |  |  |  |
| Workflow Definition | Steps (detail view) | `wfStepUrl` | URL Template | `text` |  |  |  |
| Workflow Definition | Steps (detail view) | `wfStepEntity` | Entity | `text` |  |  |  |
| Workflow Definition | Steps (detail view) | `wfStepPrev` | Previous Step ID | `text` |  |  |  |
| Workflow Definition | Steps (detail view) | `wfStepNext` | Next Step ID | `text` |  |  |  |

## Administration

### Staff Credentials — `staff_credentials_cf`

Screen: 1 page(s) · 5 section(s) · 23 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Credential | Staff Member | `staffId` | Staff ID | `text` | Y |  |  |
| Credential | Staff Member | `staffName` | Staff Name | `text` |  |  |  |
| Credential | Staff Member | `staffRole` | Role / Title | `text` |  |  |  |
| Credential | Credential Details | `credentialType` | Type | `select` | Y |  |  |
| Credential | Credential Details | `credentialName` | Credential Name | `text` | Y |  |  |
| Credential | Credential Details | `credentialNumber` | License / Certificate Number | `text` |  |  |  |
| Credential | Credential Details | `issuingAuthority` | Issuing Authority | `text` |  |  |  |
| Credential | Credential Details | `issuingState` | State | `text` |  |  |  |
| Credential | Credential Details | `npi` | NPI | `text` |  |  |  |
| Credential | Dates | `issuedDate` | Issued Date | `date` |  |  |  |
| Credential | Dates | `effectiveDate` | Effective Date | `date` |  |  |  |
| Credential | Dates | `expirationDate` | Expiration Date | `date` |  |  |  |
| Credential | Dates | `renewalReminderDays` | Reminder Days Before Expiry | `number` |  |  |  |
| Credential | DEA / CDS Details | `cdsNumber` | CDS Number | `text` |  |  |  |
| Credential | DEA / CDS Details | `deaSchedule` | DEA Schedule | `text` |  |  |  |
| Credential | DEA / CDS Details | `primaryState` | Primary State Registration | `checkbox` |  |  |  |
| Credential | Verification | `verifiedBy` | Verified By | `text` |  |  |  |
| Credential | Verification | `verifiedDate` | Verified Date | `date` |  |  |  |
| Credential | Verification | `status` | Status | `select` |  |  |  |
| Credential | Verification | `documentRef` | Document Reference | `text` |  |  |  |
| Credential | Verification | `specialties` | Specialties | `text` |  |  |  |
| Credential | Verification | `restrictions` | Restrictions | `text` |  |  |  |
| Credential | Verification | `notes` | Notes | `textarea` |  |  |  |

### Staff Scheduling — `staff_scheduling_cf`

Screen: 1 page(s) · 1 section(s) · 11 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Shift | Shift | `staffId` | Staff ID | `text` | Y |  |  |
| Shift | Shift | `staffName` | Staff Name | `text` |  |  |  |
| Shift | Shift | `staffRole` | Role | `text` |  |  |  |
| Shift | Shift | `shiftDate` | Shift Date | `date` | Y |  |  |
| Shift | Shift | `shiftType` | Shift Type | `select` |  |  |  |
| Shift | Shift | `startTime` | Start Time | `text` |  |  |  |
| Shift | Shift | `endTime` | End Time | `text` |  |  |  |
| Shift | Shift | `locationId` | Location ID | `text` |  |  |  |
| Shift | Shift | `locationName` | Location Name | `text` |  |  |  |
| Shift | Shift | `status` | Status | `select` |  |  |  |
| Shift | Shift | `notes` | Notes | `text` |  |  |  |

## Anesthesia

### Post-Op / PACU Note — `anesthesia_postop_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Post-Operative / PACU Note | Procedure Completed | `procedure_performed` | Procedure Performed | `text` |  |  |  |
| Post-Operative / PACU Note | Procedure Completed | `anesthesia_type_used` | Anesthesia Used | `select` |  |  |  |
| Post-Operative / PACU Note | Procedure Completed | `duration_anesthesia` | Anesthesia Duration (minutes) | `number` |  |  |  |
| Post-Operative / PACU Note | Procedure Completed | `blood_loss` | Estimated Blood Loss (mL) | `number` |  |  |  |
| Post-Operative / PACU Note | Procedure Completed | `fluids_given` | Fluids Administered (type and volume mL) | `text` |  |  |  |
| Post-Operative / PACU Note | PACU Assessment | `aldrete_score` | Aldrete Score (0-10 — ≥9 = discharge eligible from PACU: activity 2, resp 2, circulation 2, consciousness 2, SpO2 2) | `number` |  |  |  |
| Post-Operative / PACU Note | PACU Assessment | `pain_pacu` | Pain Score in PACU (0-10) | `number` |  |  |  |
| Post-Operative / PACU Note | PACU Assessment | `nausea_vomiting` | PONV (post-op nausea / vomiting) occurred (treated with ondansetron / promethazine / scopolamine) | `checkbox` |  |  |  |
| Post-Operative / PACU Note | PACU Assessment | `spo2_pacu` | SpO2 in PACU (%) | `number` |  |  |  |
| Post-Operative / PACU Note | PACU Assessment | `temperature` | Temperature on Arrival to PACU (°C — hypothermia <36°C: warming measures) | `number` |  |  |  |
| Post-Operative / PACU Note | Intra/Post-Op Complications | `complications_noted` | Complications | `select` |  |  |  |
| Post-Operative / PACU Note | Intra/Post-Op Complications | `disposition` | Disposition | `select` |  |  |  |
| Post-Operative / PACU Note | Intra/Post-Op Complications | `notes` | Post-Operative Notes and Instructions | `textarea` |  |  |  |

### Pre-Op Assessment — `anesthesia_preop_cf`

Screen: 1 page(s) · 5 section(s) · 19 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pre-Operative Anesthesia Assessment | Surgical Procedure | `planned_procedure` | Planned Procedure and Surgeon | `text` |  |  |  |
| Pre-Operative Anesthesia Assessment | Surgical Procedure | `surgery_date` | Surgery Date | `date` |  |  |  |
| Pre-Operative Anesthesia Assessment | Surgical Procedure | `urgency` | Urgency | `select` |  |  |  |
| Pre-Operative Anesthesia Assessment | Surgical Procedure | `anesthesia_type` | Planned Anesthesia | `select` |  |  |  |
| Pre-Operative Anesthesia Assessment | ASA Physical Status | `asa_class` | ASA Classification | `select` |  |  |  |
| Pre-Operative Anesthesia Assessment | ASA Physical Status | `mets` | Functional Capacity (METs) | `select` |  |  |  |
| Pre-Operative Anesthesia Assessment | Airway Assessment | `mallampati` | Mallampati Class | `select` |  |  |  |
| Pre-Operative Anesthesia Assessment | Airway Assessment | `mouth_opening` | Mouth Opening (cm — <3 cm = difficult laryngoscopy) | `number` |  |  |  |
| Pre-Operative Anesthesia Assessment | Airway Assessment | `thyromental_distance` | Thyromental Distance (cm — <6 cm = difficult intubation) | `number` |  |  |  |
| Pre-Operative Anesthesia Assessment | Airway Assessment | `neck_mobility` | Neck Mobility | `select` |  |  |  |
| Pre-Operative Anesthesia Assessment | Airway Assessment | `prior_difficult_airway` | History of difficult intubation (review anesthesia records; have video laryngoscope, GlideScope, FOB available) | `checkbox` |  |  |  |
| Pre-Operative Anesthesia Assessment | Medical History and Medications | `cardiac_risk` | Cardiac History (CAD, CHF, valvular disease, arrhythmias — stents, pacemaker, ICD) | `textarea` |  |  |  |
| Pre-Operative Anesthesia Assessment | Medical History and Medications | `pulmonary_risk` | Pulmonary History (COPD, OSA, asthma — CPAP use, recent exacerbation) | `textarea` |  |  |  |
| Pre-Operative Anesthesia Assessment | Medical History and Medications | `medications_to_hold` | Medications to Hold Pre-Op (date/time: ACEi/ARBs day of surgery, anticoagulants per bridge protocol, antidiabetics) | `textarea` |  |  |  |
| Pre-Operative Anesthesia Assessment | Medical History and Medications | `last_meal` | Last Meal / NPO Status (ASA: 8h solids, 6h light meal, 2h clear liquids for GA) | `text` |  |  |  |
| Pre-Operative Anesthesia Assessment | Medical History and Medications | `allergies` | Allergies (especially latex, antibiotics, contrast, anesthetic agents) | `textarea` |  |  |  |
| Pre-Operative Anesthesia Assessment | Anesthesia Plan | `anesthesia_plan` | Anesthesia Plan (induction, maintenance, monitoring, regional adjuncts, anticipated difficult airway plan) | `textarea` |  |  |  |
| Pre-Operative Anesthesia Assessment | Anesthesia Plan | `antiemetic_prophylaxis` | PONV (post-op nausea/vomiting) prophylaxis planned (Apfel score ≥2: ondansetron + dexamethasone + scopolamine; TIVA consideration) | `checkbox` |  |  |  |
| Pre-Operative Anesthesia Assessment | Anesthesia Plan | `preop_orders` | Pre-Op Orders Placed (IV access, monitoring, pre-med) | `textarea` |  |  |  |

## Cardiology / Internal Medicine

### Hyperlipidemia Management — `hyperlipidemia_management_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hyperlipidemia / Dyslipidemia Management Visit | Patient & Risk Stratification | `patientId` | Patient | `typeahead` | Y |  |  |
| Hyperlipidemia / Dyslipidemia Management Visit | Patient & Risk Stratification | `visitDate` | Visit Date | `date` | Y |  |  |
| Hyperlipidemia / Dyslipidemia Management Visit | Patient & Risk Stratification | `provider` | Provider | `typeahead` | Y |  |  |
| Hyperlipidemia / Dyslipidemia Management Visit | Patient & Risk Stratification | `riskCategory` | ASCVD Risk Category (ACC/AHA 2019) | `select` | Y |  |  |
| Hyperlipidemia / Dyslipidemia Management Visit | Patient & Risk Stratification | `ascvdRisk` | 10-Year ASCVD Risk Estimate (Pooled Cohort Equation, %) | `number` |  |  |  |
| Hyperlipidemia / Dyslipidemia Management Visit | Patient & Risk Stratification | `cac` | Coronary Artery Calcium (CAC) Score (if obtained) | `text` |  |  |  |
| Hyperlipidemia / Dyslipidemia Management Visit | Lipid Panel & Labs | `lipidPanel` | Current Fasting Lipid Panel | `textarea` | Y |  |  |
| Hyperlipidemia / Dyslipidemia Management Visit | Lipid Panel & Labs | `priorLipids` | Lipid Trend on Current Therapy | `textarea` |  |  |  |
| Hyperlipidemia / Dyslipidemia Management Visit | Treatment Optimization Plan | `statinIntolerance` | Statin Tolerance Assessment | `textarea` | Y |  |  |
| Hyperlipidemia / Dyslipidemia Management Visit | Treatment Optimization Plan | `plan` | Assessment & Plan | `textarea` | Y |  |  |

### Hypertension Management — `hypertension_management_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hypertension Management Visit | Patient & BP Assessment | `patientId` | Patient | `typeahead` | Y |  |  |
| Hypertension Management Visit | Patient & BP Assessment | `visitDate` | Visit Date | `date` | Y |  |  |
| Hypertension Management Visit | Patient & BP Assessment | `provider` | Provider | `typeahead` | Y |  |  |
| Hypertension Management Visit | Patient & BP Assessment | `bpRight` | BP Right Arm (mmHg) | `text` | Y |  |  |
| Hypertension Management Visit | Patient & BP Assessment | `bpLeft` | BP Left Arm (mmHg) | `text` |  |  |  |
| Hypertension Management Visit | Patient & BP Assessment | `bpStanding` | BP Standing at 1 min (orthostatic) | `text` |  |  |  |
| Hypertension Management Visit | Patient & BP Assessment | `heartRate` | Heart Rate (bpm) | `number` |  |  |  |
| Hypertension Management Visit | Patient & BP Assessment | `htnClassification` | BP Classification (JNC 8 / ACC/AHA 2017) | `select` | Y |  |  |
| Hypertension Management Visit | Target Organ Assessment | `secondaryCauses` | Secondary Hypertension Screening | `textarea` | Y |  |  |
| Hypertension Management Visit | Target Organ Assessment | `endOrganDamage` | End-Organ Damage Assessment | `textarea` | Y |  |  |
| Hypertension Management Visit | Treatment Plan | `plan` | Assessment & Antihypertensive Plan | `textarea` | Y |  |  |

## GYN Oncology

### Endometrial Cancer Follow-Up — `endometrial_cancer_followup_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Endometrial Cancer Surveillance Visit | Patient & Cancer History | `patientId` | Patient | `typeahead` | Y |  |  |
| Endometrial Cancer Surveillance Visit | Patient & Cancer History | `visitDate` | Visit Date | `date` | Y |  |  |
| Endometrial Cancer Surveillance Visit | Patient & Cancer History | `provider` | GYN Oncologist | `typeahead` | Y |  |  |
| Endometrial Cancer Surveillance Visit | Patient & Cancer History | `histology` | Endometrial Cancer Histology | `select` | Y |  |  |
| Endometrial Cancer Surveillance Visit | Patient & Cancer History | `figo` | FIGO Stage at Diagnosis | `select` | Y |  |  |
| Endometrial Cancer Surveillance Visit | Surveillance Assessment | `recurrenceScreening` | Symptom Review & Physical Exam | `textarea` | Y |  |  |
| Endometrial Cancer Surveillance Visit | Surveillance Assessment | `labs` | Tumor Markers & Labs | `textarea` | Y |  |  |
| Endometrial Cancer Surveillance Visit | Late Effects & Surveillance Plan | `lateEffects` | Treatment Late Effects Management | `textarea` | Y |  |  |
| Endometrial Cancer Surveillance Visit | Late Effects & Surveillance Plan | `plan` | Assessment & Surveillance Plan | `textarea` | Y |  |  |

### Ovarian Cancer Follow-Up — `ovarian_cancer_followup_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Ovarian Cancer Surveillance Visit | Patient & Cancer Characteristics | `patientId` | Patient | `typeahead` | Y |  |  |
| Ovarian Cancer Surveillance Visit | Patient & Cancer Characteristics | `visitDate` | Visit Date | `date` | Y |  |  |
| Ovarian Cancer Surveillance Visit | Patient & Cancer Characteristics | `provider` | GYN Oncologist | `typeahead` | Y |  |  |
| Ovarian Cancer Surveillance Visit | Patient & Cancer Characteristics | `histology` | Ovarian Cancer Histology | `select` | Y |  |  |
| Ovarian Cancer Surveillance Visit | Patient & Cancer Characteristics | `figo` | FIGO Stage | `select` | Y |  |  |
| Ovarian Cancer Surveillance Visit | Patient & Cancer Characteristics | `brca` | BRCA / HRD Status | `select` | Y |  |  |
| Ovarian Cancer Surveillance Visit | Surveillance Assessment | `ca125` | CA-125 Trend (Primary Ovarian Cancer Marker) | `textarea` | Y |  |  |
| Ovarian Cancer Surveillance Visit | Surveillance Assessment | `imagingToxicity` | Maintenance Therapy Toxicity & Imaging | `textarea` | Y |  |  |
| Ovarian Cancer Surveillance Visit | Genetic Testing & Long-Term Plan | `genetics` | Genetic Testing & Family Counseling | `textarea` | Y |  |  |
| Ovarian Cancer Surveillance Visit | Genetic Testing & Long-Term Plan | `plan` | Assessment & Long-Term Plan | `textarea` | Y |  |  |

## Genetics

### Genetic Counseling — `genetic_counseling_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Genetic Counseling Intake | Referral Reason | `reason` | Reason for Referral | `select` |  |  |  |
| Genetic Counseling Intake | Referral Reason | `family_hx_cancer` | Family History of Cancer (type, age, relationship) | `textarea` |  |  |  |
| Genetic Counseling Intake | Referral Reason | `family_hx_genetic` | Known Genetic Conditions in Family | `textarea` |  |  |  |
| Genetic Counseling Intake | Genetic Testing | `prior_genetic_testing` | Prior genetic testing done | `checkbox` |  |  |  |
| Genetic Counseling Intake | Genetic Testing | `prior_test_result` | Prior Test Result Summary (if done) | `text` |  |  |  |
| Genetic Counseling Intake | Genetic Testing | `testing_ordered_today` | Testing Ordered Today | `select` |  |  |  |
| Genetic Counseling Intake | Genetic Testing | `lab` | Testing Laboratory | `text` |  |  |  |
| Genetic Counseling Intake | Psychosocial Assessment | `patient_understanding` | Patient Understanding of Genetics Concepts | `select` |  |  |  |
| Genetic Counseling Intake | Psychosocial Assessment | `emotional_response` | Emotional Response / Psychosocial Concerns | `textarea` |  |  |  |
| Genetic Counseling Intake | Psychosocial Assessment | `insurance_discrimination` | GINA / insurance discrimination concerns discussed | `checkbox` |  |  |  |
| Genetic Counseling Intake | Psychosocial Assessment | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Hereditary Cancer — `genetics_hereditary_cancer_cf`

Screen: 1 page(s) · 4 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hereditary Cancer Syndrome Evaluation | Family and Personal Cancer History | `hcs_personal_cancer` | Personal Cancer History (type, age at diagnosis, bilateral) | `textarea` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Family and Personal Cancer History | `hcs_family_history` | Family Cancer History (first and second degree - cancer type, age, side of family) | `textarea` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Family and Personal Cancer History | `hcs_ancestry` | Ashkenazi Jewish Ancestry (BRCA1/2 founder mutations) | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Family and Personal Cancer History | `hcs_referral_indication` | Referral Indication | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Genetic Testing | `hcs_germline_test_status` | Germline Genetic Testing Status | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Genetic Testing | `hcs_panel_type` | Testing Panel Type | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Genetic Testing | `hcs_gene_finding` | Pathogenic Variant Identified | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Cancer Surveillance Protocol | `hcs_breast_surveillance` | Breast Cancer Surveillance | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Cancer Surveillance Protocol | `hcs_colorectal_surveillance` | Colorectal Cancer Surveillance | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Cancer Surveillance Protocol | `hcs_ovarian_surveillance` | Ovarian Cancer Surveillance | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Cancer Surveillance Protocol | `hcs_endometrial_surveillance` | Endometrial Surveillance (Lynch) | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Cancer Surveillance Protocol | `hcs_pancreatic_surveillance` | Pancreatic Cancer Surveillance | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Cancer Surveillance Protocol | `hcs_prostate_surveillance` | Prostate Cancer Surveillance (BRCA2, Lynch) | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Cancer Surveillance Protocol | `hcs_skin_surveillance` | Skin/Other Surveillance | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Risk Reduction | `hcs_rrso` | Risk-Reducing Salpingo-Oophorectomy (RRSO) | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Risk Reduction | `hcs_prophylactic_mastectomy` | Risk-Reducing Mastectomy | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Risk Reduction | `hcs_chemoprevention_breast` | Chemoprevention (Breast) | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Risk Reduction | `hcs_cascade_testing` | Cascade Family Testing (inform at-risk relatives) | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Risk Reduction | `hcs_counselor_referral` | Genetic Counselor Follow-Up | `select` |  |  |  |
| Hereditary Cancer Syndrome Evaluation | Risk Reduction | `hcs_notes` | Additional Notes | `textarea` |  |  |  |

## Hospice / Palliative Care

### Inpatient Symptom Management — `hospice_inpatient_pain_management_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Inpatient Hospice — Symptom Management | Pain Management | `pain_severity` | Pain NRS (0-10; patient-reported or behavioral assessment if non-verbal (CPOT, PAINAD scale for dementia); re-assess Q4h or after each intervention; document pain location, character, radiation, aggravating/relieving; opioid-naive vs. opioid-tolerant (tolerant = ≥60 mg MEDD/day); NRS ≥7 = severe; functional goal: NRS ≤3) | `number` |  |  |  |
| Inpatient Hospice — Symptom Management | Pain Management | `opioid_regimen` | Opioid Dosing at End of Life (morphine preferred (pain + dyspnea); opioid-naive: oral morphine IR 2.5-5 mg Q4h + Q1h PRN (1/6 of total daily dose); IV/SQ if unable to swallow (IV morphine = 3x oral potency); fentanyl patch after stable oral dose established (12.5-25 mcg/hr = 30-60 mg MEDD); hydromorphone for renal impairment; methadone for neuropathic or difficult-to-treat pain (specialized prescribing); titrate 25-50% Q24-48h if ≥4 PRN doses/day used; renal failure: avoid morphine (M6G accumulation), use hydromorphone or fentanyl) | `textarea` |  |  |  |
| Inpatient Hospice — Symptom Management | Dyspnea and Comfort Medications | `dyspnea_tx` | Dyspnea Management | `select` |  |  |  |
| Inpatient Hospice — Symptom Management | Dyspnea and Comfort Medications | `comfort_orders` | Standard Comfort Order Set (PRN orders: morphine Q1h IV for pain/dyspnea; lorazepam 0.5-1 mg IV Q2h for anxiety/terminal restlessness; glycopyrrolate 0.2 mg IV Q4h for secretions; haloperidol 0.5-1 mg IV Q8h for delirium; ondansetron 4 mg IV Q6h for nausea; antiperistaltic for diarrhea; skin care/moisture barrier; mouth care; pressure injury prevention; restrict unnecessary monitoring/vital signs; diet per comfort; chaplain/social work; family support; VSED (voluntarily stopping eating and drinking) counseling if requested by patient) | `text` |  |  |  |

### Palliative Prognostication / ACP — `palliative_care_prognosis_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Palliative Prognostication and Advance Care Planning | Prognosis Tools and Clinical Indicators | `pps_score` | Palliative Performance Scale (PPS) | `select` |  |  |  |
| Palliative Prognostication and Advance Care Planning | Prognosis Tools and Clinical Indicators | `surprise_question` | Surprise Question and Triggers (Surprise Question: "Would you be surprised if this patient died in the next 12 months (or 6 months for hospice)?" No = consider goals-of-care discussion; clinical triggers: unplanned hospitalization, multiple ED visits, weight loss >10%, PPS decline >10% in 1 month, albumin <2.5, refractory symptoms, caregiver burden, patient requests prognosis discussion; SPICT tool: supportive/palliative care needs identification; ICD-10 principal palliative diagnosis required for hospice billing; 6-month prognosis if natural disease course) | `text` |  |  |  |
| Palliative Prognostication and Advance Care Planning | Advance Care Planning and POLST | `acp_documents` | ACP Documents and Scope | `select` |  |  |  |
| Palliative Prognostication and Advance Care Planning | Advance Care Planning and POLST | `family_meeting` | Goals of Care Family Meeting Framework (REMAP: Reframe why we are meeting; Expect emotion + Empathize; Map out patient values; Align with patient values; Plan treatments based on values; or VitalTalk framework: Ask-Tell-Ask; ask what patient knows, tell prognosis in plain language, ask what matters most; avoid: cure-or-comfort dichotomy; lead with values not treatments; use silence after prognosis; normalize that "hoping for the best" and "preparing for the worst" are compatible; document: family meeting note including who attended, what was discussed, decisions made, follow-up plan) | `text` |  |  |  |

## Kanban

### Manual Cards — `kanban_manual_cards_cf`

Screen: 2 page(s) · 2 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `KANBAN_MANUAL_CARDS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Manual Cards | Card Details | `kmcId` | Card ID | `text` |  |  |  |
| Manual Cards | Card Details | `kmcPatientId` | Patient ID | `text` |  |  |  |
| Manual Cards | Card Details | `kmcPatientName` | Patient Name | `text` |  |  |  |
| Manual Cards | Card Details | `kmcPatientDob` | Date of Birth | `text` |  |  |  |
| Manual Cards | Card Details | `kmcState` | Card State | `select` |  |  |  |
| Manual Cards | Card Details | `kmcRoomNumber` | Room Number | `text` |  |  |  |
| Manual Cards | Card Details | `kmcNote` | Note | `textarea` |  |  |  |
| Manual Cards | Card Details | `kmcPriority` | Priority | `select` |  |  |  |
| Add Manual Card | New Card | `kmcAddPracticeId` | Practice ID | `text` | Y |  |  |
| Add Manual Card | New Card | `kmcAddPatientId` | Patient | `typeahead` |  |  |  |
| Add Manual Card | New Card | `kmcAddState` | Initial State | `select` |  |  |  |
| Add Manual Card | New Card | `kmcAddRoomNumber` | Room Number | `text` |  |  |  |
| Add Manual Card | New Card | `kmcAddNote` | Note | `textarea` |  |  |  |
| Add Manual Card | New Card | `kmcAddPriority` | Priority | `select` |  |  |  |

### Schedule Requests — `kanban_schedule_requests_cf`

Screen: 3 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `KANBAN_SCHEDULE_REQUESTS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Schedule Requests | Request Details | `ksrId` | Request ID | `text` |  |  |  |
| Schedule Requests | Request Details | `ksrPatientId` | Patient ID | `text` |  |  |  |
| Schedule Requests | Request Details | `ksrPatientName` | Patient | `text` |  |  |  |
| Schedule Requests | Request Details | `ksrPatientDob` | Date of Birth | `text` |  |  |  |
| Schedule Requests | Request Details | `ksrStatus` | Status | `select` |  |  |  |
| Schedule Requests | Request Details | `ksrRequestedDate` | Requested Date | `date` |  |  |  |
| Schedule Requests | Request Details | `ksrSource` | Source | `text` |  |  |  |
| Schedule Requests | Request Details | `ksrNote` | Note | `textarea` |  |  |  |
| Schedule Requests | Request Details | `ksrCreatedAt` | Created | `text` |  |  |  |
| Schedule Requests | Request Details | `ksrUpdatedAt` | Updated | `text` |  |  |  |
| Create Schedule Request | New Request | `ksrAddPracticeId` | Practice ID | `text` | Y |  |  |
| Create Schedule Request | New Request | `ksrAddPatientId` | Patient | `typeahead` |  |  |  |
| Create Schedule Request | New Request | `ksrAddRequestedDate` | Requested Date | `date` |  |  |  |
| Create Schedule Request | New Request | `ksrAddSource` | Source | `select` |  |  |  |
| Create Schedule Request | New Request | `ksrAddNote` | Note | `textarea` |  |  |  |
| Update Request | Update Fields | `ksrUpdId` | Request ID or Patient ID | `text` | Y |  |  |
| Update Request | Update Fields | `ksrUpdStatus` | New Status | `select` |  |  |  |
| Update Request | Update Fields | `ksrUpdRequestedDate` | Requested Date | `date` |  |  |  |

## Occupational Health

### Occupational Health / Workers' Comp — `occupational_health_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Occupational Health / Workers' Compensation | Patient & Injury Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Occupational Health / Workers' Compensation | Patient & Injury Details | `visitDate` | Visit Date | `date` | Y |  |  |
| Occupational Health / Workers' Compensation | Patient & Injury Details | `provider` | Provider | `typeahead` | Y |  |  |
| Occupational Health / Workers' Compensation | Patient & Injury Details | `visitType` | Visit Type | `select` | Y |  |  |
| Occupational Health / Workers' Compensation | Patient & Injury Details | `employer` | Employer | `text` | Y |  |  |
| Occupational Health / Workers' Compensation | Patient & Injury Details | `injuryDate` | Date of Injury / Exposure | `date` |  |  |  |
| Occupational Health / Workers' Compensation | Patient & Injury Details | `claimNumber` | WC Claim Number | `text` |  |  |  |
| Occupational Health / Workers' Compensation | Injury Description & Exam | `injuryMechanism` | Mechanism of Injury | `textarea` | Y |  |  |
| Occupational Health / Workers' Compensation | Injury Description & Exam | `currentSymptoms` | Current Symptoms | `textarea` | Y |  |  |
| Occupational Health / Workers' Compensation | Injury Description & Exam | `exam` | Physical Exam | `textarea` | Y |  |  |
| Occupational Health / Workers' Compensation | Work Status & Plan | `diagnosis` | Work-Related Diagnosis | `text` | Y |  |  |
| Occupational Health / Workers' Compensation | Work Status & Plan | `workStatus` | Work Status | `select` | Y |  |  |
| Occupational Health / Workers' Compensation | Work Status & Plan | `restrictions` | Work Restrictions | `textarea` | Y |  |  |
| Occupational Health / Workers' Compensation | Work Status & Plan | `wcPlan` | Treatment Plan & WC Communication | `textarea` | Y |  |  |

### Occupational Medicine — `occupational_medicine_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Occupational Medicine Evaluation | Employment Details | `employer` | Employer Name | `text` |  |  |  |
| Occupational Medicine Evaluation | Employment Details | `job_title` | Job Title | `text` |  |  |  |
| Occupational Medicine Evaluation | Employment Details | `employment_duration_years` | Years in Current Job | `number` |  |  |  |
| Occupational Medicine Evaluation | Employment Details | `visit_type` | Visit Type | `select` |  |  |  |
| Occupational Medicine Evaluation | Injury / Illness Details | `work_related` | Injury / illness is work-related | `checkbox` |  |  |  |
| Occupational Medicine Evaluation | Injury / Illness Details | `incident_date` | Incident / Exposure Date | `date` |  |  |  |
| Occupational Medicine Evaluation | Injury / Illness Details | `body_part` | Body Part Affected | `text` |  |  |  |
| Occupational Medicine Evaluation | Injury / Illness Details | `osha_recordable` | OSHA recordable event | `checkbox` |  |  |  |
| Occupational Medicine Evaluation | Injury / Illness Details | `lost_time` | Lost time from work (>0 days) | `checkbox` |  |  |  |
| Occupational Medicine Evaluation | Work Status Disposition | `work_status` | Work Status | `select` |  |  |  |
| Occupational Medicine Evaluation | Work Status Disposition | `restrictions` | Specific Work Restrictions | `textarea` |  |  |  |
| Occupational Medicine Evaluation | Work Status Disposition | `next_appointment` | Next Appointment / Re-evaluation Date | `date` |  |  |  |
| Occupational Medicine Evaluation | Work Status Disposition | `notes` | Assessment and Plan | `textarea` |  |  |  |

## Patient

### Demographics Log — `patient_demographics_log_cf`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Change History | Audit Log | `changedAt` | Changed at | `text` |  |  |  |
| Change History | Audit Log | `changedBy` | Changed by | `text` |  |  |  |
| Change History | Audit Log | `fieldName` | Field | `text` |  |  |  |
| Change History | Audit Log | `oldValue` | Old value | `text` |  |  |  |
| Change History | Audit Log | `newValue` | New value | `text` |  |  |  |
| Change History | Audit Log | `changeReason` | Change reason | `text` |  |  |  |

### Patient Questionnaire — `patient_self_intake_cf`

Screen: 2 page(s) · 6 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Health History (Patient) | About You | `patientId` | Patient | `typeahead` | Y |  |  |
| Health History (Patient) | About You | `visitDate` | Appointment Date | `date` | Y |  |  |
| Health History (Patient) | About You | `completedDate` | Questionnaire Completed Date | `date` | Y |  |  |
| Health History (Patient) | About You | `primaryLanguage` | Preferred Language | `select` |  |  |  |
| Health History (Patient) | Reason for Visit | `visitReason` | Reason for Today's Visit (in your own words) | `textarea` | Y |  |  |
| Health History (Patient) | Reason for Visit | `newPatient` | Is this your first visit to this practice? | `select` |  |  |  |
| Health History (Patient) | Your Health History | `selfReportedConditions` | Current Health Conditions (mark all that apply or add others) | `textarea` |  |  |  |
| Health History (Patient) | Your Health History | `selfReportedSurgeries` | Surgeries in the Past (describe and year) | `textarea` |  |  |  |
| Health History (Patient) | Your Health History | `selfReportedAllergies` | Drug Allergies (list medication and reaction) | `textarea` |  |  |  |
| Medications & Lifestyle | Your Medications | `selfMedList` | Current Medications (include prescription, OTC, vitamins, supplements) | `textarea` | Y |  |  |
| Medications & Lifestyle | Lifestyle & Social History | `smokingStatus2` | Do you smoke or use tobacco? | `select` | Y |  |  |
| Medications & Lifestyle | Lifestyle & Social History | `packsPerDay` | If you smoke: how much per day? | `select` |  |  |  |
| Medications & Lifestyle | Lifestyle & Social History | `alcoholUse` | Alcohol Use | `select` | Y |  |  |
| Medications & Lifestyle | Lifestyle & Social History | `exerciseLevel` | Physical Activity | `select` |  |  |  |
| Medications & Lifestyle | Lifestyle & Social History | `livingArrangement` | Living Situation | `select` |  |  |  |
| Medications & Lifestyle | Screening Questions (PHQ-2) | `phq2_1` | Over the last 2 weeks, how often have you felt little interest or pleasure in doing things? | `select` | Y |  |  |
| Medications & Lifestyle | Screening Questions (PHQ-2) | `phq2_2` | Over the last 2 weeks, how often have you felt down, depressed, or hopeless? | `select` | Y |  |  |

## Pediatric Hematology

### Pediatric ITP — `pediatric_hematology_itp_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Immune Thrombocytopenia — Diagnosis, Acute Treatment, and Chronic ITP | ITP Diagnosis and Workup | `itp_criteria` | Diagnostic Criteria (ASH 2019 ITP Guidelines; isolated thrombocytopenia (plt <100,000/mm3) in otherwise healthy child; EXCLUSION of other causes; CBC with differential: isolated low platelets + normal Hgb + normal WBC; peripheral blood smear: large platelets (megathrombocytes), no clumping (rule out pseudothrombocytopenia from EDTA), no schistocytes (TTP/HUS), no blasts (leukemia); PRIMARY ITP: no underlying cause; SECONDARY ITP: associated with SLE, antiphospholipid syndrome, HIV, HCV, H. pylori, drug-induced; workup: ASH 2019 recommends MINIMAL workup for classic presentation; bone marrow biopsy NOT routine (only if atypical features: anemia, lymphadenopathy, suspicious smear, concern for other disease); ANA for SLE screen if clinical features; HIV/HCV testing in adolescents or risk factors) | `text` |  |  |  |
| Immune Thrombocytopenia — Diagnosis, Acute Treatment, and Chronic ITP | ITP Diagnosis and Workup | `phases` | ITP Phase Classification and Bleeding Severity | `select` |  |  |  |
| Immune Thrombocytopenia — Diagnosis, Acute Treatment, and Chronic ITP | Acute Treatment and Chronic ITP Management | `ivig_steroids` | IVIG, Corticosteroids, and Anti-D (IVIG 1 g/kg IV: rapid response (hours-days); increase plt 20-30,000 by 24-48h; hold 1-2 doses; may repeat Q3-4 weeks; adverse effects: infusion reaction, headache (aseptic meningitis 10%), hemolytic anemia in blood type A/B/AB; anti-D immunoglobulin (WinRho): for Rh+ non-splenectomized patients; 75 mcg/kg IV; mechanism: RBC-antibody complex saturates Fc receptors; less effective but fewer infusions; AVOID if Hgb <10 or signs hemolysis; corticosteroids: prednisone 1-2 mg/kg/day x 2-4 weeks then taper; dexamethasone 20-40 mg/m2 x 4 days; equivalent platelet response; steroids: concerns with long-term use; first-line for newly diagnosed ITP; combination: IVIG + steroids in life-threatening bleed) | `text` |  |  |  |
| Immune Thrombocytopenia — Diagnosis, Acute Treatment, and Chronic ITP | Acute Treatment and Chronic ITP Management | `chronic_management` | Chronic ITP Second-Line Management | `select` |  |  |  |

### Pediatric Sickle Cell — `pediatric_sickle_cell_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Sickle Cell Disease Management Visit | Patient & Genotype | `patientId` | Patient | `typeahead` | Y |  |  |
| Pediatric Sickle Cell Disease Management Visit | Patient & Genotype | `visitDate` | Visit Date | `date` | Y |  |  |
| Pediatric Sickle Cell Disease Management Visit | Patient & Genotype | `provider` | Pediatric Hematologist | `typeahead` | Y |  |  |
| Pediatric Sickle Cell Disease Management Visit | Patient & Genotype | `childAge` | Age (years) | `number` | Y |  |  |
| Pediatric Sickle Cell Disease Management Visit | Patient & Genotype | `genotype` | SCD Genotype | `select` | Y |  |  |
| Pediatric Sickle Cell Disease Management Visit | Disease Status & Labs | `labs` | Laboratory Assessment | `textarea` | Y |  |  |
| Pediatric Sickle Cell Disease Management Visit | Disease Status & Labs | `crisis` | Pain Crisis & Complications Review | `textarea` | Y |  |  |
| Pediatric Sickle Cell Disease Management Visit | Treatment Plan | `plan` | Assessment & Treatment Plan | `textarea` | Y |  |  |

## Pediatric Oncology

### Pediatric ALL — `pediatric_oncology_leukemia_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric ALL — Risk Stratification, MRD, CNS, and Relapsed | Risk Stratification and Prognostic Factors | `risk_stratification` | Pediatric ALL Risk Groups (COG CLASSIFICATION; STANDARD RISK (SR): age 1-9.99 years + WBC <50,000/uL (initial); favorable cytogenetics (ETV6-RUNX1/TEL-AML1; high hyperdiploidy: >50 chromosomes); MRD negative at end-induction; HIGH RISK (HR): age >=10 OR WBC >=50,000; or SR with MRD positive or unfavorable cytogenetics; VERY HIGH RISK: Ph+ (BCR-ABL1); Ph-like ALL (CRLF2 rearrangement, JAK2 mutation, ABL-class); hypodiploidy (<44 chromosomes); KMT2A (MLL) rearrangement; iAMP21; early T-cell precursor (ETP-ALL); UNFAVORABLE CYTOGENETICS: t(9;22) Ph+: most common in adults with ALL (25%); rare in children (3%); ALL Ph+: imatinib/dasatinib + chemotherapy (TKI improves outcomes dramatically); BCR-ABL1-like: CRLF2 overexpression (JAK inhibitor trials), ABL-class (ruxolitinib, imatinib); TCF3-HLF (extremely poor prognosis); FAVORABLE CYTOGENETICS: ETV6-RUNX1 (TEL-AML1): 25% pediatric ALL; excellent prognosis (90%+ EFS); High hyperdiploidy (trisomies 4,10,17): favorable; DUX4-rearranged (excellent prognosis); IKZF1 deletion: poor prognosis in B-ALL; T-ALL: 15% pediatric ALL; overall good outcome; ETP-ALL: poor | `text` |  |  |  |
| Pediatric ALL — Risk Stratification, MRD, CNS, and Relapsed | Risk Stratification and Prognostic Factors | `treatment_phases` | Treatment Phases and Protocol Overview | `select` |  |  |  |
| Pediatric ALL — Risk Stratification, MRD, CNS, and Relapsed | MRD Monitoring and CNS Prophylaxis | `mrd` | Minimal Residual Disease Monitoring (MRD IMPORTANCE: most powerful prognostic factor in ALL; DEFINITION: residual disease below conventional morphology (>5% blasts); detected by flow cytometry or PCR; SENSITIVITY: flow cytometry 1 in 10,000 cells; PCR 1 in 100,000; MRD TIMEPOINTS: end-induction (day 29-32): MRD <0.01% = favorable; MRD >=0.01% = treatment intensification indicated; MRD AT CONSOLIDATION: critical for risk re-stratification; negative MRD: de-escalate therapy; positive MRD: blinatumomab, inotuzumab, SCT consideration; MRD TECHNIQUES: multiparameter flow cytometry (MFC): leukemia-associated immunophenotype (LAIP); high-throughput sequencing (clonoSEQ): IGH rearrangement tracking; more sensitive; MORPHOLOGIC REMISSION ≠ MRD NEGATIVE: most relapses occur from MRD-positive remission; RELAPSE RISK: MRD >=0.1% end-induction in SR ALL: 50% relapse; MRD CONVERSION (negative to positive): early sign of impending relapse; change therapy; CTDNA-BASED MRD: emerging in liquid biopsy; not yet standard for ALL) | `text` |  |  |  |
| Pediatric ALL — Risk Stratification, MRD, CNS, and Relapsed | MRD Monitoring and CNS Prophylaxis | `cns_relapsed` | CNS Prophylaxis and Relapsed/Refractory ALL | `select` |  |  |  |

### Pediatric Leukemia (ALL) Follow-Up — `pediatric_leukemia_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric ALL Surveillance Visit | Patient & Treatment History | `patientId` | Patient | `typeahead` | Y |  |  |
| Pediatric ALL Surveillance Visit | Patient & Treatment History | `visitDate` | Visit Date | `date` | Y |  |  |
| Pediatric ALL Surveillance Visit | Patient & Treatment History | `provider` | Pediatric Oncologist | `typeahead` | Y |  |  |
| Pediatric ALL Surveillance Visit | Patient & Treatment History | `childAge` | Current Age (years) | `number` | Y |  |  |
| Pediatric ALL Surveillance Visit | Patient & Treatment History | `ageAtDx` | Age at Diagnosis | `number` |  |  |  |
| Pediatric ALL Surveillance Visit | Patient & Treatment History | `allRisk` | ALL Risk Group at Diagnosis | `select` | Y |  |  |
| Pediatric ALL Surveillance Visit | Patient & Treatment History | `treatmentPhase` | Current Treatment/Surveillance Phase | `select` | Y |  |  |
| Pediatric ALL Surveillance Visit | Disease Monitoring | `labs` | CBC & Relapse Screening | `textarea` | Y |  |  |
| Pediatric ALL Surveillance Visit | Disease Monitoring | `symptoms` | Relapse Warning Sign Review | `textarea` | Y |  |  |
| Pediatric ALL Surveillance Visit | Late Effects & Long-Term Survivorship | `lateEffects` | Late Effects of Treatment | `textarea` | Y |  |  |
| Pediatric ALL Surveillance Visit | Late Effects & Long-Term Survivorship | `plan` | Assessment & Plan | `textarea` | Y |  |  |

## Pediatrics / Developmental

### Autism (ASD) Management — `pediatric_autism_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Autism Spectrum Disorder Management Visit | Patient & ASD Profile | `patientId` | Patient | `typeahead` | Y |  |  |
| Autism Spectrum Disorder Management Visit | Patient & ASD Profile | `visitDate` | Visit Date | `date` | Y |  |  |
| Autism Spectrum Disorder Management Visit | Patient & ASD Profile | `provider` | Developmental Pediatrician / Psychiatrist | `typeahead` | Y |  |  |
| Autism Spectrum Disorder Management Visit | Patient & ASD Profile | `childAge` | Age (years) | `number` | Y |  |  |
| Autism Spectrum Disorder Management Visit | Patient & ASD Profile | `asdLevel` | ASD Support Level (DSM-5) | `select` | Y |  |  |
| Autism Spectrum Disorder Management Visit | Patient & ASD Profile | `diagnosisDate` | Date of ASD Diagnosis | `date` |  |  |  |
| Autism Spectrum Disorder Management Visit | Patient & ASD Profile | `currentPlacements` | Current Educational Placement & Services | `text` |  |  |  |
| Autism Spectrum Disorder Management Visit | Functional Assessment | `communication` | Communication & Social Skills Update | `textarea` | Y |  |  |
| Autism Spectrum Disorder Management Visit | Functional Assessment | `behavior` | Behavioral & Sensory Assessment | `textarea` | Y |  |  |
| Autism Spectrum Disorder Management Visit | Medical Management & Plan | `medications` | Medication Review (Comorbidity Management) | `textarea` | Y |  |  |
| Autism Spectrum Disorder Management Visit | Medical Management & Plan | `plan` | Assessment & Plan | `textarea` | Y |  |  |

### Developmental Delay Eval — `pediatric_developmental_delay_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Developmental Delay Evaluation | Patient & Chief Concern | `patientId` | Patient | `typeahead` | Y |  |  |
| Pediatric Developmental Delay Evaluation | Patient & Chief Concern | `visitDate` | Visit Date | `date` | Y |  |  |
| Pediatric Developmental Delay Evaluation | Patient & Chief Concern | `provider` | Developmental Pediatrician | `typeahead` | Y |  |  |
| Pediatric Developmental Delay Evaluation | Patient & Chief Concern | `childAge` | Child Age | `text` |  |  |  |
| Pediatric Developmental Delay Evaluation | Patient & Chief Concern | `referralConcern` | Primary Developmental Concern | `select` | Y |  |  |
| Pediatric Developmental Delay Evaluation | Developmental History | `milestones` | Milestone History | `textarea` | Y |  |  |
| Pediatric Developmental Delay Evaluation | Developmental History | `familySocial` | Family, Social & Risk History | `textarea` | Y |  |  |
| Pediatric Developmental Delay Evaluation | Assessment & Intervention Plan | `assessment` | Developmental Testing Results | `textarea` | Y |  |  |
| Pediatric Developmental Delay Evaluation | Assessment & Intervention Plan | `plan` | Intervention Plan | `textarea` | Y |  |  |

## Pharmacy

### MTM Pharmacy Review — `pharmacy_mtm_comprehensive_cf`

Screen: 1 page(s) · 4 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medication Therapy Management (MTM) Comprehensive Medication Review | CMR Eligibility and Session Info | `mtm_eligibility_criteria` | MTM Eligibility Criteria Met | `select` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | CMR Eligibility and Session Info | `mtm_pharmacist` | Pharmacist Name and Credentials | `text` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | CMR Eligibility and Session Info | `mtm_session_type` | Session Type | `select` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | CMR Eligibility and Session Info | `mtm_session_method` | Session Method | `select` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | CMR Eligibility and Session Info | `mtm_session_minutes` | Session Duration (minutes) | `number` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | Comprehensive Medication Review | `mtm_total_medications` | Total Medications on Current List (Rx + OTC + supplements) | `number` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | Comprehensive Medication Review | `mtm_high_risk_meds` | High-Risk Medications Present (Beers Criteria / ISMP) | `select` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | Comprehensive Medication Review | `mtm_duplicate_therapy` | Duplicate Therapy Identified | `select` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | Comprehensive Medication Review | `mtm_drug_drug` | Drug-Drug Interactions | `select` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | Comprehensive Medication Review | `mtm_drug_disease` | Drug-Disease Contraindications | `select` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | Comprehensive Medication Review | `mtm_medications_detail` | Medications Reviewed (list key medications, indications, concerns) | `textarea` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | Adherence and Cost Management | `mtm_adherence_assessment` | Overall Adherence Assessment | `select` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | Adherence and Cost Management | `mtm_non_adherent_medications` | Non-Adherent Medications and Reasons (cost, side effects, complexity, denial of need) | `textarea` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | Adherence and Cost Management | `mtm_cost_interventions` | Cost Reduction Interventions | `select` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | Adherence and Cost Management | `mtm_refill_sync` | Medication Synchronization | `select` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | Action Plan and Recommendations | `mtm_patient_map` | Personal Medication List (MAP) Provided — medications, doses, indications for patient reference | `textarea` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | Action Plan and Recommendations | `mtm_action_plan` | Medication Action Plan (prioritized list of recommended changes) | `textarea` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | Action Plan and Recommendations | `mtm_provider_recommendations` | Recommendations Communicated to Prescribing Provider (clinical issues, drug interactions, cost concerns) | `textarea` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | Action Plan and Recommendations | `mtm_followup_plan` | Follow-Up Plan | `select` |  |  |  |
| Medication Therapy Management (MTM) Comprehensive Medication Review | Action Plan and Recommendations | `mtm_outcomes` | MTM Outcomes and Patient Education Provided | `textarea` |  |  |  |

### MTM Visit — `medication_therapy_management_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medication Therapy Management Session | Session Details | `session_type` | Session Type | `select` |  |  |  |
| Medication Therapy Management Session | Session Details | `total_medications` | Total Medications (all Rx + OTC + supplements) | `number` |  |  |  |
| Medication Therapy Management Session | Session Details | `adherence_concerns` | Non-adherence identified as concern | `checkbox` |  |  |  |
| Medication Therapy Management Session | Drug-Related Problems (DRP) | `unnecessary_drug` | Unnecessary drug / no indication | `checkbox` |  |  |  |
| Medication Therapy Management Session | Drug-Related Problems (DRP) | `need_additional` | Need for additional drug therapy (untreated condition) | `checkbox` |  |  |  |
| Medication Therapy Management Session | Drug-Related Problems (DRP) | `ineffective_drug` | Ineffective drug (better agent available) | `checkbox` |  |  |  |
| Medication Therapy Management Session | Drug-Related Problems (DRP) | `dose_too_low` | Dosage too low | `checkbox` |  |  |  |
| Medication Therapy Management Session | Drug-Related Problems (DRP) | `adverse_drug_reaction` | Adverse drug reaction identified | `checkbox` |  |  |  |
| Medication Therapy Management Session | Drug-Related Problems (DRP) | `dose_too_high` | Dosage too high / toxicity concern | `checkbox` |  |  |  |
| Medication Therapy Management Session | Drug-Related Problems (DRP) | `non_adherence` | Non-adherence (patient not taking medication) | `checkbox` |  |  |  |
| Medication Therapy Management Session | Drug-Related Problems (DRP) | `drug_interaction` | Drug-drug or drug-disease interaction identified | `checkbox` |  |  |  |
| Medication Therapy Management Session | Recommendations | `drp_description` | DRP Details and Recommendations | `textarea` |  |  |  |
| Medication Therapy Management Session | Recommendations | `physician_communication` | Recommendation communicated to prescriber | `checkbox` |  |  |  |
| Medication Therapy Management Session | Recommendations | `physician_accepted` | Prescriber Response | `select` |  |  |  |
| Medication Therapy Management Session | Recommendations | `personal_med_list_given` | Personal Medication List (PML) provided to patient | `checkbox` |  |  |  |
| Medication Therapy Management Session | Recommendations | `map_given` | Medication Action Plan (MAP) provided to patient | `checkbox` |  |  |  |
| Medication Therapy Management Session | Recommendations | `notes` | Additional Notes | `textarea` |  |  |  |

## Providers

### Provider Supervision — `provider_supervision_cf`

Screen: 2 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`, `PROVIDER_SUPERVISION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Supervision Relationships | Relationship Detail | `svId` | ID | `text` |  |  |  |
| Supervision Relationships | Relationship Detail | `svPracticeId` | Practice ID | `text` |  |  |  |
| Supervision Relationships | Relationship Detail | `svSupervisingProviderId` | Supervising Provider ID | `text` |  |  |  |
| Supervision Relationships | Relationship Detail | `svRenderingProviderId` | Rendering Provider ID | `text` |  |  |  |
| Supervision Relationships | Relationship Detail | `svRelationshipType` | Relationship Type | `select` |  |  |  |
| Add Supervision Relationship | New Relationship | `svAddPracticeId` | Practice ID | `text` | Y |  |  |
| Add Supervision Relationship | New Relationship | `svAddSupervisingId` | Supervising Provider | `typeahead` |  |  |  |
| Add Supervision Relationship | New Relationship | `svAddRenderingId` | Rendering Provider | `typeahead` |  |  |  |
| Add Supervision Relationship | New Relationship | `svAddRelType` | Relationship Type | `select` | Y |  |  |

### Provider Teams — `provider_teams_cf`

Screen: 2 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`, `PROVIDER_TEAMS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider Teams | Team Detail | `ptId` | ID | `text` |  |  |  |
| Provider Teams | Team Detail | `ptPracticeId` | Practice ID | `text` |  |  |  |
| Provider Teams | Team Detail | `ptName` | Team Name | `text` |  |  |  |
| Provider Teams | Team Detail | `ptDescription` | Description | `textarea` |  |  |  |
| Provider Teams | Team Detail | `ptLeadProviderId` | Lead Provider ID | `text` |  |  |  |
| Provider Teams | Team Detail | `ptIsActive` | Active | `checkbox` |  |  |  |
| Create Team | New Team | `ptCreatePracticeId` | Practice ID | `text` | Y |  |  |
| Create Team | New Team | `ptCreateName` | Team Name | `text` | Y |  |  |
| Create Team | New Team | `ptCreateDescription` | Description | `textarea` |  |  |  |
| Create Team | New Team | `ptCreateLeadId` | Lead Provider | `typeahead` |  |  |  |

## Rehabilitation

### Lymphedema — `lymphedema_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lymphedema Assessment and Management | Etiology and Stage | `etiology` | Etiology | `select` |  |  |  |
| Lymphedema Assessment and Management | Etiology and Stage | `affected_limb` | Affected Extremity | `select` |  |  |  |
| Lymphedema Assessment and Management | Etiology and Stage | `iss_stage` | ISL Stage | `select` |  |  |  |
| Lymphedema Assessment and Management | Etiology and Stage | `limb_volume_diff` | Limb Volume Differential (%) | `number` |  |  |  |
| Lymphedema Assessment and Management | Treatment | `cdt_enrolled` | Complete Decongestive Therapy (CDT) enrolled | `checkbox` |  |  |  |
| Lymphedema Assessment and Management | Treatment | `compression_garment` | Compression garment measured and ordered | `checkbox` |  |  |  |
| Lymphedema Assessment and Management | Treatment | `ipc_device` | Intermittent pneumatic compression (IPC) device ordered | `checkbox` |  |  |  |
| Lymphedema Assessment and Management | Treatment | `skin_care_counseled` | Skin care / infection prevention counseled | `checkbox` |  |  |  |
| Lymphedema Assessment and Management | Treatment | `notes` | Assessment and Plan | `textarea` |  |  |  |

### PM&R Consult — `physiatry_consult_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Physical Medicine & Rehabilitation Consult | Referral Reason | `referral_reason` | Reason for Referral | `select` |  |  |  |
| Physical Medicine & Rehabilitation Consult | Referral Reason | `functional_goal` | Stated Functional Goal | `text` |  |  |  |
| Physical Medicine & Rehabilitation Consult | Functional Assessment | `fim_self_care` | FIM Self-Care (7–49) | `number` |  |  |  |
| Physical Medicine & Rehabilitation Consult | Functional Assessment | `fim_mobility` | FIM Mobility (5–35) | `number` |  |  |  |
| Physical Medicine & Rehabilitation Consult | Functional Assessment | `fim_cognition` | FIM Cognition (5–35) | `number` |  |  |  |
| Physical Medicine & Rehabilitation Consult | Functional Assessment | `rancho_scale` | Rancho Los Amigos (if TBI) | `select` |  |  |  |
| Physical Medicine & Rehabilitation Consult | Rehabilitation Plan | `rehab_setting` | Rehabilitation Setting | `select` |  |  |  |
| Physical Medicine & Rehabilitation Consult | Rehabilitation Plan | `therapy_goals` | Therapy Goals and Program | `textarea` |  |  |  |
| Physical Medicine & Rehabilitation Consult | Rehabilitation Plan | `equipment` | Equipment / Orthotics / Prosthetics Ordered | `text` |  |  |  |
| Physical Medicine & Rehabilitation Consult | Rehabilitation Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

## Remote Patient Monitoring

### RPM: Diabetes CGM Review — `rpm_diabetes_cgm_review_cf`

Screen: 1 page(s) · 4 section(s) · 25 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| RPM Diabetes CGM Monthly Clinical Review | CGM Program Status | `rpm_cgm_review_month` | Review Month and Year | `text` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | CGM Program Status | `rpm_cgm_device` | CGM Device | `select` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | CGM Program Status | `rpm_cgm_sensor_active_pct` | Sensor Active / Wear Time (% of month) | `number` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | CGM Program Status | `rpm_cgm_diabetes_type` | Diabetes Type | `select` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | CGM Program Status | `rpm_cgm_cpt` | RPM CPT Codes Applicable | `select` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Ambulatory Glucose Profile (AGP) Review | `rpm_cgm_avg_glucose` | Average Glucose This Month (mg/dL) | `number` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Ambulatory Glucose Profile (AGP) Review | `rpm_cgm_gmi` | Glucose Management Indicator (GMI) — estimated A1C | `text` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Ambulatory Glucose Profile (AGP) Review | `rpm_cgm_time_in_range` | Time in Range 70-180 mg/dL (%) | `number` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Ambulatory Glucose Profile (AGP) Review | `rpm_cgm_time_above_180` | Time Above Range (above 180 mg/dL) (%) | `number` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Ambulatory Glucose Profile (AGP) Review | `rpm_cgm_time_above_250` | Time Very High (above 250 mg/dL) (%) | `number` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Ambulatory Glucose Profile (AGP) Review | `rpm_cgm_time_below_70` | Time Below Range (below 70 mg/dL) (%) | `number` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Ambulatory Glucose Profile (AGP) Review | `rpm_cgm_time_below_54` | Time Very Low (below 54 mg/dL) (%) | `number` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Ambulatory Glucose Profile (AGP) Review | `rpm_cgm_cv` | Glucose Coefficient of Variation (CV%) — variability index | `text` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Ambulatory Glucose Profile (AGP) Review | `rpm_cgm_tir_target` | TIR Target Achievement | `select` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Hypoglycemia Pattern Analysis | `rpm_cgm_hypo_episodes` | Number of Hypoglycemic Episodes (below 70 mg/dL) This Month | `number` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Hypoglycemia Pattern Analysis | `rpm_cgm_severe_hypo` | Severe Hypoglycemia Events (below 54 mg/dL) This Month | `number` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Hypoglycemia Pattern Analysis | `rpm_cgm_hypo_pattern` | Hypoglycemia Pattern | `select` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Hypoglycemia Pattern Analysis | `rpm_cgm_hypo_awareness` | Hypoglycemia Awareness Status | `select` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Hypoglycemia Pattern Analysis | `rpm_cgm_hypo_action` | Hypoglycemia Management Action | `select` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Medication Titration and Clinical Plan | `rpm_cgm_regimen` | Current Diabetes Medication Regimen (insulin doses, oral agents, GLP-1, SGLT2) | `textarea` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Medication Titration and Clinical Plan | `rpm_cgm_insulin_change` | Insulin Titration Decision | `select` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Medication Titration and Clinical Plan | `rpm_cgm_a1c_check` | A1C Lab Check | `select` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Medication Titration and Clinical Plan | `rpm_cgm_office_visit` | In-Person Visit Indicated | `select` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Medication Titration and Clinical Plan | `rpm_cgm_next_review` | Next RPM Monthly Review Date | `date` |  |  |  |
| RPM Diabetes CGM Monthly Clinical Review | Medication Titration and Clinical Plan | `rpm_cgm_notes` | Clinical Notes and Patient Communication (key discussion points, glucose education, goals) | `textarea` |  |  |  |

### RPM: Hypertension Review — `rpm_hypertension_review_cf`

Screen: 1 page(s) · 4 section(s) · 22 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| RPM Hypertension Monthly Clinical Review | RPM Program Status | `rpm_htn_review_month` | Review Month and Year | `text` |  |  |  |
| RPM Hypertension Monthly Clinical Review | RPM Program Status | `rpm_htn_device` | BP Monitoring Device | `select` |  |  |  |
| RPM Hypertension Monthly Clinical Review | RPM Program Status | `rpm_htn_days_monitored` | Days with BP Readings This Month | `number` |  |  |  |
| RPM Hypertension Monthly Clinical Review | RPM Program Status | `rpm_htn_readings_count` | Total Readings Transmitted This Month | `number` |  |  |  |
| RPM Hypertension Monthly Clinical Review | RPM Program Status | `rpm_htn_cpt` | Applicable CPT Codes This Month | `select` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Blood Pressure Readings and Trend | `rpm_htn_avg_systolic` | Average Systolic BP This Month (mmHg) | `number` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Blood Pressure Readings and Trend | `rpm_htn_avg_diastolic` | Average Diastolic BP This Month (mmHg) | `number` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Blood Pressure Readings and Trend | `rpm_htn_avg_morning` | Average Morning BP (before medications) | `text` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Blood Pressure Readings and Trend | `rpm_htn_avg_evening` | Average Evening BP | `text` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Blood Pressure Readings and Trend | `rpm_htn_trend` | BP Trend vs. Last Month | `select` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Blood Pressure Readings and Trend | `rpm_htn_target` | BP Target for This Patient | `select` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Blood Pressure Readings and Trend | `rpm_htn_target_met` | Target BP Achieved This Month | `select` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Blood Pressure Readings and Trend | `rpm_htn_elevated_alerts` | Number of Hypertensive Urgency Alerts (above 180/120) This Month | `number` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Symptom Review and Adherence | `rpm_htn_symptoms` | Hypertension-Related Symptoms | `select` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Symptom Review and Adherence | `rpm_htn_med_adherence` | Medication Adherence | `select` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Symptom Review and Adherence | `rpm_htn_adherence_barriers` | Adherence Barriers Identified | `select` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Symptom Review and Adherence | `rpm_htn_lifestyle` | Lifestyle Factors Reviewed | `select` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Clinical Decision and Plan | `rpm_htn_med_change` | Medication Plan | `select` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Clinical Decision and Plan | `rpm_htn_med_regimen` | Current Antihypertensive Regimen (medications, doses, timing) | `textarea` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Clinical Decision and Plan | `rpm_htn_office_visit` | Office Visit Needed | `select` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Clinical Decision and Plan | `rpm_htn_next_review` | Next RPM Monthly Review Date | `date` |  |  |  |
| RPM Hypertension Monthly Clinical Review | Clinical Decision and Plan | `rpm_htn_notes` | Clinical Notes and Patient Communication Summary | `textarea` |  |  |  |

## Reports

### Reports — `reports_cf`

Screen: 2 page(s) · 2 section(s) · 12 field(s) · UI LIVE · DB PARTIAL · tables `APPOINTMENTS`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `ELIGIBILITY_CHECKS`, `ENCOUNTERS`, `PAYERS_MASTER`, `PAYMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Report Parameters | Select Report | `repType` | Report Type | `select` | Y |  |  |
| Report Parameters | Select Report | `repPracticeId` | Practice ID (optional filter) | `text` |  |  |  |
| Report Results | Generated Report | `repReportType` | Report Type | `text` |  |  |  |
| Report Results | Generated Report | `repGeneratedAt` | Generated At | `text` |  |  |  |
| Report Results | Generated Report | `repSummaryJson` | Report Data (JSON) | `textarea` |  |  |  |
| Report Results | Generated Report | `repTotalCharges` | Total Charges | `text` |  |  |  |
| Report Results | Generated Report | `repTotalPayments` | Total Payments | `text` |  |  |  |
| Report Results | Generated Report | `repCollectionRate` | Collection Rate (%) | `text` |  |  |  |
| Report Results | Generated Report | `repDenialRate` | Denial Rate (%) | `text` |  |  |  |
| Report Results | Generated Report | `repDaysInAr` | Avg Days in A/R | `text` |  |  |  |
| Report Results | Generated Report | `repTotalBalance` | Total Balance | `text` |  |  |  |
| Report Results | Generated Report | `repRowCount` | Rows | `number` |  |  |  |

### Scheduled Reports — `scheduled_reports_cf`

Screen: 2 page(s) · 4 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `SCHEDULED_REPORTS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Scheduled Reports | Overview | `srName` | Report Name | `text` |  |  |  |
| Scheduled Reports | Overview | `srReportType` | Report Type | `select` |  |  |  |
| Scheduled Reports | Overview | `srFrequency` | Frequency | `select` |  |  |  |
| Scheduled Reports | Overview | `srRecipients` | Recipients (comma-separated emails) | `text` |  |  |  |
| Scheduled Reports | Overview | `srEnabled` | Enabled | `checkbox` |  |  |  |
| Scheduled Reports | Overview | `srNextRunAt` | Next Run At | `text` |  |  |  |
| Scheduled Reports | Overview | `srLastRunAt` | Last Run At | `text` |  |  |  |
| Scheduled Reports | Overview | `srLastRunStatus` | Last Run Status | `text` |  |  |  |
| Schedule Detail | Report Configuration | `srDetailName` | Name | `text` | Y |  |  |
| Schedule Detail | Report Configuration | `srDetailReportType` | Report Type | `select` | Y |  |  |
| Schedule Detail | Report Configuration | `srDetailReportParams` | Report Params (JSON) | `textarea` |  |  |  |
| Schedule Detail | Report Configuration | `srDetailOutputFormat` | Output Format | `select` |  |  |  |
| Schedule Detail | Schedule | `srDetailFrequency` | Frequency | `select` | Y |  |  |
| Schedule Detail | Schedule | `srDetailDayOfWeek` | Day of Week (0=Sun, 1=Mon�?�) | `number` |  |  |  |
| Schedule Detail | Schedule | `srDetailDayOfMonth` | Day of Month (1-31) | `number` |  |  |  |
| Schedule Detail | Schedule | `srDetailHourOfDay` | Hour of Day (0-23) | `number` |  |  |  |
| Schedule Detail | Schedule | `srDetailTimezone` | Timezone (e.g. America/New_York) | `text` |  |  |  |
| Schedule Detail | Delivery | `srDetailRecipients` | Recipients (comma-separated emails) | `text` | Y |  |  |
| Schedule Detail | Delivery | `srDetailSubjectTemplate` | Subject Template | `text` |  |  |  |
| Schedule Detail | Delivery | `srDetailBodyTemplate` | Body Template | `textarea` |  |  |  |
| Schedule Detail | Delivery | `srDetailEnabled` | Enabled | `checkbox` |  |  |  |

## Reproductive Endocrinology

### ART / IVF Cycle — `reproductive_endocrinology_art_cf`

Screen: 1 page(s) · 3 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Assisted Reproductive Technology Cycle Monitoring | Ovarian Reserve Assessment | `amh` | Anti-Mullerian Hormone (AMH ng/mL; <1.0 = diminished; 1.0-3.5 = normal; >3.5 = high/PCOS risk; predict ovarian response to stimulation; low AMH: minimal/poor response; high AMH: OHSS risk) | `number` |  |  |  |
| Assisted Reproductive Technology Cycle Monitoring | Ovarian Reserve Assessment | `afc` | Antral Follicle Count (AFC; transvaginal US; total number 2-10 mm follicles both ovaries; <7 = low reserve; 7-15 = normal; >20 = high response/PCOS; correlates with AMH and oocyte yield) | `number` |  |  |  |
| Assisted Reproductive Technology Cycle Monitoring | Ovarian Reserve Assessment | `fsh_d3` | Day 3 FSH (IU/L; <10 = normal; 10-20 = diminished reserve (interpret with E2); >20 = poor prognosis; CCCT if borderline — clomiphene challenge test) | `number` |  |  |  |
| Assisted Reproductive Technology Cycle Monitoring | ART Cycle Details | `art_type` | ART Procedure | `select` |  |  |  |
| Assisted Reproductive Technology Cycle Monitoring | ART Cycle Details | `stimulation_protocol` | Stimulation Protocol | `select` |  |  |  |
| Assisted Reproductive Technology Cycle Monitoring | OHSS Risk and Prevention | `ohss_risk` | OHSS Risk Level | `select` |  |  |  |

### IVF / ART Protocol — `reproductive_endocrinology_ivf_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| IVF — Ovarian Stimulation, OHSS, and Embryo Transfer | Ovarian Reserve Assessment | `ovarian_reserve` | Ovarian Reserve Testing (AMH (anti-Mullerian hormone): reflects antral follicle count; AMH >1.0 ng/mL = adequate reserve; AMH 0.5-1.0 = low-normal; AMH <0.5 = poor prognosis; antral follicle count (AFC): TVUS D2-3; AFC >=15 = adequate; 5-14 = low; <5 = very poor; FSH basal D2-3: <10 IU/L normal; 10-20 = reduced; >20 = poor responder; estradiol D2-3: <50 pg/mL suppression normal; elevated E2 masks FSH; combined testing; DOR (diminished ovarian reserve): AMH <1.1 ng/mL + AFC <5-7 + basal FSH >10; ovarian aging: AMH peaks 25 years, declines to menopause; POSEIDON classification for poor/suboptimal response) | `text` |  |  |  |
| IVF — Ovarian Stimulation, OHSS, and Embryo Transfer | Ovarian Reserve Assessment | `stimulation_protocol` | Ovarian Stimulation Protocol | `select` |  |  |  |
| IVF — Ovarian Stimulation, OHSS, and Embryo Transfer | OHSS Prevention and Embryo Transfer | `ohss` | OHSS Risk Stratification and Prevention (OHSS: ovarian hyperstimulation syndrome; risk factors: young age, low BMI, PCO/PCOS morphology, AFC >20, AMH >3.4 ng/mL, E2 >2500-3500 pg/mL trigger day, prior OHSS; prevention strategies: GnRH antagonist protocol (allows agonist trigger); GnRH agonist trigger (leuprolide) + freeze all: reduces severe OHSS risk to <1%; cabergoline 0.5 mg/day x 8 days at trigger (dopamine agonist — reduces vascular permeability); albumin infusion at retrieval (modest benefit); FREEZE ALL cycles: all embryos cryopreserved; ET next cycle; avoid hCG trigger in high-risk; coasting (withhold gonadotropins) for 1-3 days; OHSS management: mild/moderate: outpatient fluids, paracentesis for tense ascites; severe: hospitalization, hemoconcentration (Hct >45%), VTE prophylaxis, IVF) | `text` |  |  |  |
| IVF — Ovarian Stimulation, OHSS, and Embryo Transfer | OHSS Prevention and Embryo Transfer | `embryo_transfer` | Embryo Transfer Strategy | `select` |  |  |  |

## Research

### Clinical Trial Screen — `clinical_trial_screening_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clinical Trial Screening Visit | Trial Details | `trial_title` | Clinical Trial Title | `text` |  |  |  |
| Clinical Trial Screening Visit | Trial Details | `nct_number` | NCT Number (ClinicalTrials.gov) | `text` |  |  |  |
| Clinical Trial Screening Visit | Trial Details | `phase` | Trial Phase | `select` |  |  |  |
| Clinical Trial Screening Visit | Trial Details | `sponsor` | Study Sponsor | `text` |  |  |  |
| Clinical Trial Screening Visit | Trial Details | `randomized` | Randomized controlled trial | `checkbox` |  |  |  |
| Clinical Trial Screening Visit | Trial Details | `blinded` | Blinding | `select` |  |  |  |
| Clinical Trial Screening Visit | Eligibility Screening | `inclusion_met` | All inclusion criteria met | `checkbox` |  |  |  |
| Clinical Trial Screening Visit | Eligibility Screening | `exclusion_met` | No exclusion criteria present | `checkbox` |  |  |  |
| Clinical Trial Screening Visit | Eligibility Screening | `eligibility_summary` | Eligibility Summary Notes | `textarea` |  |  |  |
| Clinical Trial Screening Visit | Eligibility Screening | `consent_obtained` | Informed consent obtained and signed | `checkbox` |  |  |  |
| Clinical Trial Screening Visit | Eligibility Screening | `consent_date` | Consent Date | `date` |  |  |  |
| Clinical Trial Screening Visit | Eligibility Screening | `screen_outcome` | Screen Outcome | `select` |  |  |  |
| Clinical Trial Screening Visit | Baseline Assessments | `baseline_labs_collected` | Baseline labs and assessments collected per protocol | `checkbox` |  |  |  |
| Clinical Trial Screening Visit | Baseline Assessments | `ecog_ps` | ECOG Performance Status (oncology trials) | `select` |  |  |  |
| Clinical Trial Screening Visit | Baseline Assessments | `notes` | Assessment Notes | `textarea` |  |  |  |

### Clinical Trial Visit — `clinical_trial_visit_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clinical Trial Visit Note | Trial & Visit Identification | `patientId` | Patient | `typeahead` | Y |  |  |
| Clinical Trial Visit Note | Trial & Visit Identification | `visitDate` | Visit Date | `date` | Y |  |  |
| Clinical Trial Visit Note | Trial & Visit Identification | `investigator` | Principal Investigator / Sub-I | `typeahead` | Y |  |  |
| Clinical Trial Visit Note | Trial & Visit Identification | `trialName` | Trial Name / Protocol Number | `text` | Y |  |  |
| Clinical Trial Visit Note | Trial & Visit Identification | `sponsor` | Sponsor | `text` |  |  |  |
| Clinical Trial Visit Note | Trial & Visit Identification | `phase` | Trial Phase | `select` |  |  |  |
| Clinical Trial Visit Note | Trial & Visit Identification | `subjectId` | Subject ID | `text` | Y |  |  |
| Clinical Trial Visit Note | Trial & Visit Identification | `visitName` | Scheduled Visit Name | `text` | Y |  |  |
| Clinical Trial Visit Note | Protocol Assessments | `eligibility` | Eligibility / Inclusion-Exclusion (if screening) | `textarea` |  |  |  |
| Clinical Trial Visit Note | Protocol Assessments | `protocolProcedures` | Protocol-Required Procedures Completed | `textarea` | Y |  |  |
| Clinical Trial Visit Note | Safety & AE Reporting | `adverseEvents` | Adverse Events (CTCAE grading) | `textarea` | Y |  |  |
| Clinical Trial Visit Note | Safety & AE Reporting | `protocolDeviation` | Protocol Deviation / Violation This Visit | `select` |  |  |  |
| Clinical Trial Visit Note | Safety & AE Reporting | `studyDrugStatus` | Study Drug Status | `select` | Y |  |  |

## Settings

### Rx Credentials — `rx_provider_credentials_cf`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `PATIENT_INSURANCES`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Rx Provider Credential | Credentials | `provider_id` | Provider | `typeahead` |  |  |  |
| Rx Provider Credential | Credentials | `dea_number` | DEA Number | `text` |  |  |  |
| Rx Provider Credential | Credentials | `dea_expiry` | DEA Expiry | `date` |  |  |  |
| Rx Provider Credential | Credentials | `npi` | NPI | `text` |  |  |  |
| Rx Provider Credential | Credentials | `state_license` | State License # | `text` |  |  |  |
| Rx Provider Credential | Credentials | `state_license_expiry` | License Expiry | `date` |  |  |  |
| Rx Provider Credential | Credentials | `is_active` | Active | `checkbox` |  |  |  |

### Theme Settings — `settings_theme_cf`

Screen: 1 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| UI Theme Configuration | Appearance | `sthMode` | Color Mode | `select` |  |  |  |
| UI Theme Configuration | Appearance | `sthPrimaryColor` | Primary Color (hex) | `text` |  |  |  |
| UI Theme Configuration | Appearance | `sthSecondaryColor` | Secondary Color (hex) | `text` |  |  |  |
| UI Theme Configuration | Appearance | `sthAccentColor` | Accent Color (hex) | `text` |  |  |  |
| UI Theme Configuration | Appearance | `sthFontSize` | Font Size | `select` |  |  |  |
| UI Theme Configuration | Layout | `sthSidebarCollapsed` | Sidebar Collapsed by Default | `checkbox` |  |  |  |
| UI Theme Configuration | Layout | `sthCompactMode` | Compact Mode | `checkbox` |  |  |  |
| UI Theme Configuration | Layout | `sthShowNotifications` | Show Notifications | `checkbox` |  |  |  |

## Spine Surgery

### Cervical Spine Surgery — `spine_surgery_cervical_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cervical Myelopathy and Radiculopathy Surgical Evaluation | Clinical Presentation | `presentation` | Primary Presentation | `select` |  |  |  |
| Cervical Myelopathy and Radiculopathy Surgical Evaluation | Clinical Presentation | `mjoa_score` | Modified Japanese Orthopedic Association (mJOA) Score (max 18; mild ≥15, moderate 12-14, severe <12; functional scoring: motor/sensation/bladder) | `number` |  |  |  |
| Cervical Myelopathy and Radiculopathy Surgical Evaluation | Imaging Findings | `cord_compression` | Degree of Cord/Nerve Root Compression | `select` |  |  |  |
| Cervical Myelopathy and Radiculopathy Surgical Evaluation | Imaging Findings | `levels_involved` | Levels Involved (e.g., C4-5, C5-6, C6-7; disc herniation vs. degenerative spondylosis with osteophyte; OPLL — ossification posterior longitudinal ligament) | `text` |  |  |  |
| Cervical Myelopathy and Radiculopathy Surgical Evaluation | Surgical Approach | `surgical_approach` | Planned Approach | `select` |  |  |  |

### Lumbar Fusion — `spine_surgery_lumbar_fusion_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lumbar Fusion Surgical Planning | Indication for Fusion | `fusion_indication` | Fusion Indication | `select` |  |  |  |
| Lumbar Fusion Surgical Planning | Indication for Fusion | `approach` | Fusion Approach | `select` |  |  |  |
| Lumbar Fusion Surgical Planning | Sagittal Alignment Goals | `pi_ll_mismatch` | Pelvic Incidence - Lumbar Lordosis Mismatch (PI - LL in degrees; goal: PI - LL ≤10°; each fusion level adds ~5° lordosis; hyperextension cages preferred) | `number` |  |  |  |
| Lumbar Fusion Surgical Planning | Sagittal Alignment Goals | `bone_health` | Bone Health Assessment | `select` |  |  |  |

## Surgery/Emergency

### Appendicitis — `surgery_appendicitis_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Appendicitis — Diagnosis and Management | Diagnosis and Treatment | `app_f1` | Appendicitis Diagnosis: EPIDEMIOLOGY (Lifetime Risk 7 pct; Peak 10-30Y; Most Common Cause Acute Abdomen Requiring Surgery; Mortality Under 1 pct Uncomplicated; 5 pct Perforated); PATHOPHYSIOLOGY (Luminal Obstruction Fecalith Lymphoid Hyperplasia Tumor Foreign Body -> Bacterial Overgrowth -> Ischemia -> Perforation 24-72H); CLINICAL PRESENTATION (CLASSIC Migration: Periumbilical Pain -> RLQ McBurney Point; Anorexia 100 pct If Present; Nausea Vomiting After Pain; Low-Grade Fever; SIGNS: McBurney Point Tenderness 1/3 Way ASIS to Umbilicus; Rovsing Palpate LLQ Pain Felt RLQ; Psoas Sign Right Hip Extension; Obturator Sign Right Hip Internal Rotation; Dunphy Cough Tenderness RLQ; ATYPICAL: Retrocecal Appendix Psoas Signs; Pelvic Appendix Suprapubic Bladder Symptoms; Children Diffuse Pain Vomiting; ELDERLY Vague Perforation Early; PREGNANCY Fundal Height Displaces Appendix Superiorly; Point Of Maximum Tenderness Shifts); LABS (WBC Elevated 70-80 pct; Elevated CRP; Normal Labs Do Not Exclude; Urine Dip Hematuria Pyuria Proximity Inflamed Appendix); IMAGING (CT ABDOMEN PELVIS WITH CONTRAST GOLD STANDARD 96 Sensitivity 95 Specificity; Fat Stranding Dilated Appendix Over 6 mm Wall Thickening Periappendiceal Fluid Fecalith; ULTRASOUND Preferred Pediatric Pregnant Non-Visualized Appendix 20-30 pct Graded Compression; MRI Pregnancy Gold Standard No Radiation; X-RAY Fecalith Rare; INDETERMINATE CT Consider MRI Or Observe 6-12H Repeat); SCORING: ALVARADO SCORE (Migration Pain +1; Anorexia +1; Nausea Vomit +1; Tenderness RLQ +2; Rebound Tenderness +1; Elevated Temp +1; Leukocytosis +2; Left Shift +1; TOTAL 10; Under 5 Unlikely Discharge; 5-6 Observe; 7-8 Probable OR; Over 9 Definite OR; PEDIATRIC APPENDICITIS SCORE PAS Children 3-18Y Similar Factors; ADULT APPS SCORE UK Multicenter) | `text` |  |  |  |
| Appendicitis — Diagnosis and Management | Diagnosis and Treatment | `app_f2` | Operative vs Non-Operative Management | `select` |  |  |  |

### Bowel Obstruction — `surgery_bowel_obstruction_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Bowel Obstruction — Small and Large Bowel | Diagnosis and Management | `bo_f1` | Bowel Obstruction Evaluation: SBO SMALL BOWEL OBSTRUCTION: ETIOLOGY (ADHESIONS Most Common 60-70 pct Prior Surgery; HERNIAS Inguinal Femoral Ventral Obturator Spigelian Incarcerated Strangulated; MALIGNANCY Extrinsic Or Intraluminal; CROHN STRICTURE IBD; INTUSSUSCEPTION Adults Cancer Lead Point Children Idiopathic; GALLSTONE ILEUS Cholecystoenteric Fistula Gallstone Impaction Terminal Ileum; BEZOAR; VOLVULUS Small Bowel Rare); PRESENTATION (Colicky Abdominal Pain; Vomiting Bilious; Obstipation Constipation Complete; High-Pitched Bowel Sounds; Abdominal Distension; DISTINGUISH PARTIAL vs COMPLETE: Partial Flatus Stool; Complete None); IMAGING: ABDOMINAL X-RAY (Dilated Loops Small Bowel Over 3 cm; Air-Fluid Levels; Stepladder Pattern; Paucity Colon Gas; FREE AIR Perforation; SENSITIVITY LIMITED 66 pct; First Test); CT ABDOMEN PELVIS CONTRAST ORAL IV (GOLD STANDARD 90 pct Sensitivity 94 pct Specificity; Transition Point Etiology; Closed Loop 2 Points Obstruction Or Volvulus C or U Shape; STRANGULATION Signs: Mesenteric Swirl Fat Stranding Wall Thickening Portal Venous Gas Pneumatosis; FREE FLUID PERFORATION Free Air; ORAL CONTRAST To Transition Point = Adhesion Partial vs Strangulation); LABS (CBC Metabolic Lactate BMP; Leukocytosis Fever Tachycardia = Strangulation Ischemia; Elevated Lactate = Ischemia); LBO LARGE BOWEL OBSTRUCTION: ETIOLOGY (COLORECTAL CANCER Most Common 60 pct Sigmoid Descending; DIVERTICULAR STRICTURE; VOLVULUS SIGMOID Most Common LBO Volvulus 10-15 pct; CECAL VOLVULUS; EXTRINSIC COMPRESSION; PSEUDO-OBSTRUCTION OGILVIE); PRESENTATION (Distension Prominent; Constipation Obstipation; CECAL DILATION Over 12 cm Risk Perforation) | `text` |  |  |  |
| Bowel Obstruction — Small and Large Bowel | Diagnosis and Management | `bo_f2` | SBO Management and LBO Volvulus Treatment | `select` |  |  |  |
