---
title: "PracticeForceOneCFTrackingFields36"
---

# CF Tracking — Field-Level Detail (part 36 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Obstetrics**, **Operations**, **Pediatric Subspecialties**, **Plastic Surgery**, **Preventive Medicine**, **Urology Oncology**, **Women's Health**, **Clinical Nutrition**, **Documents**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Obstetrics

### Prenatal Visit — `obstetrics_prenatal_visit_cf`

Screen: 1 page(s) · 3 section(s) · 23 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Routine Prenatal Visit | Visit Information | `prenatal_edd` | Estimated Due Date (EDD) | `date` |  |  |  |
| Routine Prenatal Visit | Visit Information | `prenatal_ga` | Gestational Age at This Visit (weeks + days) | `text` |  |  |  |
| Routine Prenatal Visit | Visit Information | `prenatal_gravida_para` | Gravida / Para (G_P_) | `text` |  |  |  |
| Routine Prenatal Visit | Visit Information | `prenatal_visit_trimester` | Trimester | `select` |  |  |  |
| Routine Prenatal Visit | Visit Information | `prenatal_conception` | Conception Method | `select` |  |  |  |
| Routine Prenatal Visit | Visit Information | `prenatal_high_risk` | High-Risk Status | `select` |  |  |  |
| Routine Prenatal Visit | Vital Signs and Physical Exam | `prenatal_weight` | Weight (lbs) | `text` |  |  |  |
| Routine Prenatal Visit | Vital Signs and Physical Exam | `prenatal_weight_gain_total` | Total Weight Gain This Pregnancy (lbs) | `text` |  |  |  |
| Routine Prenatal Visit | Vital Signs and Physical Exam | `prenatal_bp` | Blood Pressure (mmHg) | `text` |  |  |  |
| Routine Prenatal Visit | Vital Signs and Physical Exam | `prenatal_bp_category` | Blood Pressure Assessment | `select` |  |  |  |
| Routine Prenatal Visit | Vital Signs and Physical Exam | `prenatal_fundal_height` | Fundal Height (cm) — expected to equal gestational age in cm after 20 weeks | `text` |  |  |  |
| Routine Prenatal Visit | Vital Signs and Physical Exam | `prenatal_fht` | Fetal Heart Tones (bpm) — Doppler | `text` |  |  |  |
| Routine Prenatal Visit | Vital Signs and Physical Exam | `prenatal_fetal_presentation` | Fetal Presentation (third trimester) | `select` |  |  |  |
| Routine Prenatal Visit | Vital Signs and Physical Exam | `prenatal_edema` | Edema Assessment | `select` |  |  |  |
| Routine Prenatal Visit | Fetal Wellbeing and Trimester-Specific Concerns | `prenatal_fetal_movement` | Fetal Movement (after 24 weeks) | `select` |  |  |  |
| Routine Prenatal Visit | Fetal Wellbeing and Trimester-Specific Concerns | `prenatal_nausea_vomiting` | Nausea and Vomiting | `select` |  |  |  |
| Routine Prenatal Visit | Fetal Wellbeing and Trimester-Specific Concerns | `prenatal_sti_screen` | STI and Infection Screening (per trimester) | `select` |  |  |  |
| Routine Prenatal Visit | Fetal Wellbeing and Trimester-Specific Concerns | `prenatal_labs_reviewed` | Labs Reviewed This Visit | `select` |  |  |  |
| Routine Prenatal Visit | Fetal Wellbeing and Trimester-Specific Concerns | `prenatal_ultrasound` | Ultrasound This Visit | `select` |  |  |  |
| Routine Prenatal Visit | Fetal Wellbeing and Trimester-Specific Concerns | `prenatal_patient_concerns` | Patient Concerns and Questions | `textarea` |  |  |  |
| Routine Prenatal Visit | Fetal Wellbeing and Trimester-Specific Concerns | `prenatal_counseling` | Anticipatory Guidance Provided | `select` |  |  |  |
| Routine Prenatal Visit | Fetal Wellbeing and Trimester-Specific Concerns | `prenatal_next_visit` | Next Prenatal Visit Date | `date` |  |  |  |
| Routine Prenatal Visit | Fetal Wellbeing and Trimester-Specific Concerns | `prenatal_notes` | Prenatal Visit Notes | `textarea` |  |  |  |

### Preterm Birth Prevention — `obstetrics_preterm_birth_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Preterm Birth Prevention and Acute Management | Risk Assessment and Prevention | `ptb_risk` | Preterm Birth Risk Factors | `select` |  |  |  |
| Preterm Birth Prevention and Acute Management | Risk Assessment and Prevention | `ptb_progesterone` | Progesterone Supplementation | `select` |  |  |  |
| Preterm Birth Prevention and Acute Management | Risk Assessment and Prevention | `ptb_cerclage` | Cervical Cerclage Indications | `select` |  |  |  |
| Preterm Birth Prevention and Acute Management | Acute Preterm Labor and PPROM Management | `ptb_diagnosis` | Diagnosis of Preterm Labor and PPROM | `select` |  |  |  |
| Preterm Birth Prevention and Acute Management | Acute Preterm Labor and PPROM Management | `ptb_steroids` | Antenatal Corticosteroids (ACS) | `select` |  |  |  |
| Preterm Birth Prevention and Acute Management | Acute Preterm Labor and PPROM Management | `ptb_tocolysis` | Tocolysis for Preterm Labor | `select` |  |  |  |
| Preterm Birth Prevention and Acute Management | Acute Preterm Labor and PPROM Management | `ptb_magnesium` | Magnesium Sulfate for Neuroprotection | `select` |  |  |  |
| Preterm Birth Prevention and Acute Management | Acute Preterm Labor and PPROM Management | `ptb_delivery_planning` | Delivery Timing by Gestational Age | `select` |  |  |  |
| Preterm Birth Prevention and Acute Management | Acute Preterm Labor and PPROM Management | `ptb_notes` | Preterm Birth Management Notes and MFM/Neonatology/OB/Pediatrics Coordination | `textarea` |  |  |  |

### Preterm Labor — `obstetrics_preterm_labor_pprom_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Preterm Labor and PPROM — Tocolysis, Corticosteroids, and Prevention | Preterm Labor PPROM Risk Factors and Diagnosis | `ptl_f1` | Preterm Labor Evaluation: DEFINITION (REGULAR UTERINE CONTRACTIONS WITH CERVICAL CHANGE BEFORE 37 WEEKS; PRETERM BIRTH PTB: DELIVERY BEFORE 37 WEEKS; EPIDEMIOLOGY (10 pct US BIRTHS; LEADING CAUSE NEONATAL MORBIDITY MORTALITY; RISK FACTORS (PRIOR PRETERM BIRTH STRONGEST PREDICTOR; SHORT CERVICAL LENGTH UNDER 25 mm SECOND TRIMESTER; MULTIPLE GESTATIONS; UTERINE ANOMALIES FIBROIDS; INCOMPETENT CERVIX CERVICAL INSUFFICIENCY; INFECTIONS: BACTERIAL VAGINOSIS TRICHOMONAS UTI; PREECLAMPSIA PLACENTAL ABRUPTION; SMOKING COCAINE; LOW BMI; AFRICAN AMERICAN RACE; STRESS; ASSISTED REPRODUCTION; CERVICAL SURGERY CONE BIOPSY LEEP; PPROM PRETERM PREMATURE RUPTURE MEMBRANES (BEFORE LABOR; BEFORE 37 WEEKS; DIAGNOSIS: AMNIOTIC FLUID POOLING; FERNING; NITRAZINE BLUE; AMNIOCHECK AMNIOSURE RAPID TESTS; DIAGNOSIS PRETERM LABOR (REGULAR CONTRACTIONS: OVER 4 PER HOUR; CERVICAL CHANGE: DILATION EFFACEMENT; FETAL FIBRONECTIN FFN: HIGH NEGATIVE PREDICTIVE VALUE 99 pct; POSITIVE LESS HELPFUL; CERVICAL LENGTH ULTRASOUND: UNDER 20 mm HIGH RISK; 20-30 mm INTERMEDIATE; AVOID EXCESSIVE EVALUATION OVERDIAGNOSIS; INFECTION (GROUP B STREPTOCOCCUS GBS: 10-30 pct COLONIZED; PROPHYLAXIS REDUCES NEONATAL SEPSIS; CULTURE 35-37 WEEKS; INTRAPARTUM PENICILLIN G PREFERRED; AMPICILLIN ALTERNATIVE; CEPHALOSPORINS ALLERGY; VANCOMYCIN SEVERE ALLERGY; CHORIOAMNIONITIS INFECTION RISK PPROM) | `text` |  |  |  |
| Preterm Labor and PPROM — Tocolysis, Corticosteroids, and Prevention | Preterm Labor PPROM Risk Factors and Diagnosis | `ptl_f2` | Corticosteroids Tocolysis Magnesium and Prevention | `select` |  |  |  |

## Operations

### Interpreter Services — `interpreter_services_cf`

Screen: 1 page(s) · 1 section(s) · 11 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Interpreter Request | Language & Type | `languageName` | Language | `text` | Y |  |  |
| Interpreter Request | Language & Type | `languageCode` | Language Code | `text` | Y |  |  |
| Interpreter Request | Language & Type | `interpreterType` | Interpreter Type | `select` |  |  |  |
| Interpreter Request | Language & Type | `serviceType` | Service Type | `text` |  |  |  |
| Interpreter Request | Language & Type | `urgency` | Urgency | `select` |  |  |  |
| Interpreter Request | Language & Type | `appointmentDatetime` | Appointment Date/Time | `datetime-local` |  |  |  |
| Interpreter Request | Language & Type | `estimatedDuration` | Est. Duration (min) | `number` |  |  |  |
| Interpreter Request | Language & Type | `adaCompliant` | ADA Compliant | `select` |  |  |  |
| Interpreter Request | Language & Type | `titleViDocumented` | Title VI Documented | `select` |  |  |  |
| Interpreter Request | Language & Type | `status` | Status | `text` |  | status |  |
| Interpreter Request | Language & Type | `requestNumber` | Request # | `text` |  | requestNumber |  |

### Notifications — `notifications_center_cf`

Screen: 0 page(s) · 0 section(s) · 0 field(s) · UI STUB · DB BUILT · tables `NOTIFICATION_DELIVERIES`, `USERS`

_No fields declared (nav stub)._

### Operations Reports — `ops_reports_cf`

Screen: 2 page(s) · 2 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| PM Task Status | Task Run | `jobName` | Job Name | `text` | Y | jobName |  |
| PM Task Status | Task Run | `jobType` | Job Type | `text` |  | jobType |  |
| PM Task Status | Task Run | `status` | Status | `select` |  | status |  |
| PM Task Status | Task Run | `triggeredBy` | Triggered By | `text` |  | triggeredBy |  |
| PM Task Status | Task Run | `notes` | Notes | `textarea` |  | notes |  |
| PM Task Status | Task Run | `errorMessage` | Error Message | `textarea` |  | errorMessage |  |
| Provider Productivity | Productivity Report | `providerId` | Provider | `text` |  | providerId |  |
| Provider Productivity | Productivity Report | `apptBooked` | Booked | `number` |  | apptBooked |  |
| Provider Productivity | Productivity Report | `apptSeen` | Seen | `number` |  | apptSeen |  |
| Provider Productivity | Productivity Report | `apptCancelled` | Cancelled | `number` |  | apptCancelled |  |
| Provider Productivity | Productivity Report | `noShow` | No-Show | `number` |  | noShow |  |
| Provider Productivity | Productivity Report | `uniquePatients` | Unique Patients | `number` |  | uniquePatients |  |

### PM Task Status — `PM_TASK_STATUS`

Screen: 1 page(s) · 1 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Task Run | Run Log | `pmtsId` | Run ID | `text` |  |  |  |
| Task Run | Run Log | `pmtsPracticeId` | Practice ID | `text` |  |  |  |
| Task Run | Run Log | `pmtsJobName` | Job Name (required) | `text` | Y |  |  |
| Task Run | Run Log | `pmtsJobType` | Job Type (custom) | `text` |  |  |  |
| Task Run | Run Log | `pmtsStatus` | Status (completed/failed/running) | `text` |  |  |  |
| Task Run | Run Log | `pmtsStartedAt` | Started At | `text` |  |  |  |
| Task Run | Run Log | `pmtsEndedAt` | Ended At | `text` |  |  |  |
| Task Run | Run Log | `pmtsDurationMs` | Duration (ms) | `text` |  |  |  |
| Task Run | Run Log | `pmtsRecordCount` | Record Count | `text` |  |  |  |
| Task Run | Run Log | `pmtsNotes` | Notes | `text` |  |  |  |
| Task Run | Run Log | `pmtsErrorMessage` | Error Message | `text` |  |  |  |
| Task Run | Run Log | `pmtsTriggeredBy` | Triggered By (scheduler) | `text` |  |  |  |

### Patient Messages — `messaging_cf`

Screen: 3 page(s) · 5 section(s) · 22 field(s) · UI LIVE · DB BUILT · tables `PATIENTS`, `PORTAL_PATIENT_RELATIONSHIPS`, `PORTAL_SESSIONS`, `PORTAL_USERS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Message | Message | `patientName` | Patient | `text` |  |  |  |
| Message | Message | `direction` | Direction | `select` |  |  |  |
| Message | Message | `subject` | Subject | `text` | Y |  |  |
| Message | Message | `status` | Status | `select` |  |  |  |
| Message | Message Body | `body` | Message | `textarea` | Y |  |  |
| Message | Staff Reply | `replyBody` | Reply | `textarea` |  |  |  |
| Phone Message Work Queue (ECW-OPS-5) | Phone Message (ECW-OPS-5) | `callerName` | Caller Name | `text` |  |  |  |
| Phone Message Work Queue (ECW-OPS-5) | Phone Message (ECW-OPS-5) | `callerPhone` | Callback Number | `tel` |  |  |  |
| Phone Message Work Queue (ECW-OPS-5) | Phone Message (ECW-OPS-5) | `callDateTime` | Call Date/Time | `text` |  |  |  |
| Phone Message Work Queue (ECW-OPS-5) | Phone Message (ECW-OPS-5) | `callerRelationship` | Caller Relationship | `select` |  |  |  |
| Phone Message Work Queue (ECW-OPS-5) | Phone Message (ECW-OPS-5) | `urgency` | Urgency | `select` |  |  |  |
| Phone Message Work Queue (ECW-OPS-5) | Phone Message (ECW-OPS-5) | `assignedTo` | Assigned To | `text` |  |  |  |
| Phone Message Work Queue (ECW-OPS-5) | Phone Message (ECW-OPS-5) | `messageText` | Message | `textarea` |  |  |  |
| Phone Message Work Queue (ECW-OPS-5) | Phone Message (ECW-OPS-5) | `actionTaken` | Action Taken | `textarea` |  |  |  |
| Phone Encounter Documentation (ECW-OPS-6) | Phone Encounter Record (ECW-OPS-6) | `encounterType` | Encounter Type | `select` |  |  |  |
| Phone Encounter Documentation (ECW-OPS-6) | Phone Encounter Record (ECW-OPS-6) | `chiefComplaint` | Chief Complaint / Reason | `text` |  |  |  |
| Phone Encounter Documentation (ECW-OPS-6) | Phone Encounter Record (ECW-OPS-6) | `encounterNote` | Encounter Documentation | `textarea` |  |  |  |
| Phone Encounter Documentation (ECW-OPS-6) | Phone Encounter Record (ECW-OPS-6) | `assignedProvider` | Assigned Provider | `text` |  |  |  |
| Phone Encounter Documentation (ECW-OPS-6) | Phone Encounter Record (ECW-OPS-6) | `refillAuthorized` | Refill Authorized | `checkbox` |  |  |  |
| Phone Encounter Documentation (ECW-OPS-6) | Phone Encounter Record (ECW-OPS-6) | `refillMedication` | Refill Medication | `text` |  |  |  |
| Phone Encounter Documentation (ECW-OPS-6) | Phone Encounter Record (ECW-OPS-6) | `followUpRequired` | Follow-Up Appointment Required | `checkbox` |  |  |  |
| Phone Encounter Documentation (ECW-OPS-6) | Phone Encounter Record (ECW-OPS-6) | `billable` | Billable (G2012 / 99441-99443) | `checkbox` |  |  |  |

### Phone Messages — `phone_message_work_queue_cf`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Phone Message | Message Details | `patientName` | Patient | `text` |  |  |  |
| Phone Message | Message Details | `severity` | Urgency | `select` |  |  |  |
| Phone Message | Message Details | `status` | Status | `select` |  |  |  |
| Phone Message | Message Details | `assignedTo` | Assigned To | `text` |  |  |  |
| Phone Message | Message Details | `dueDate` | Due | `date` |  |  |  |
| Phone Message | Message Details | `notes` | Message / Notes | `textarea` |  |  |  |
| Phone Message | Message Details | `completedAt` | Completed At | `text` |  |  |  |

### Telephone Encounters — `telephone_encounter_cf`

Screen: 1 page(s) · 2 section(s) · 12 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Call Details | Caller Information | `callerName` | Caller Name | `text` | Y |  |  |
| Call Details | Caller Information | `callerPhone` | Caller Phone | `tel` |  |  |  |
| Call Details | Caller Information | `callDateTime` | Date & Time | `text` |  |  |  |
| Call Details | Caller Information | `encounterType` | Call Type | `select` |  |  |  |
| Call Details | Caller Information | `subject` | Subject | `text` | Y |  |  |
| Call Details | Caller Information | `message` | Message | `textarea` |  |  |  |
| Call Details | Disposition | `priority` | Priority | `select` |  |  |  |
| Call Details | Disposition | `status` | Status | `select` |  |  |  |
| Call Details | Disposition | `disposition` | Disposition | `text` |  |  |  |
| Call Details | Disposition | `callDurationMins` | Duration (min) | `number` |  |  |  |
| Call Details | Disposition | `callbackRequested` | Callback Requested | `checkbox` |  |  |  |
| Call Details | Disposition | `notes` | Notes | `textarea` |  |  |  |

## Pediatric Subspecialties

### Neonatology — `neonatology_cf`

Screen: 1 page(s) · 4 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Neonatology / NICU Assessment | Infant Details | `gestational_age_at_birth` | Gestational Age at Birth (weeks) | `number` |  |  |  |
| Neonatology / NICU Assessment | Infant Details | `corrected_age_weeks` | Corrected Gestational Age Now (weeks) | `number` |  |  |  |
| Neonatology / NICU Assessment | Infant Details | `birth_weight_grams` | Birth Weight (grams) | `number` |  |  |  |
| Neonatology / NICU Assessment | Infant Details | `current_weight_grams` | Current Weight (grams) | `number` |  |  |  |
| Neonatology / NICU Assessment | Infant Details | `day_of_life` | Day of Life | `number` |  |  |  |
| Neonatology / NICU Assessment | Infant Details | `admission_reason` | Admission Reason | `select` |  |  |  |
| Neonatology / NICU Assessment | Respiratory Status | `respiratory_support` | Current Respiratory Support | `select` |  |  |  |
| Neonatology / NICU Assessment | Respiratory Status | `fio2_pct` | FiO2 (%) | `number` |  |  |  |
| Neonatology / NICU Assessment | Respiratory Status | `surfactant_given` | Surfactant administered | `checkbox` |  |  |  |
| Neonatology / NICU Assessment | Feeding and Nutrition | `feeding_type` | Feeding Type | `select` |  |  |  |
| Neonatology / NICU Assessment | Feeding and Nutrition | `feeding_route` | Feeding Route | `select` |  |  |  |
| Neonatology / NICU Assessment | Feeding and Nutrition | `weight_gain_adequate` | Weight gain adequate (≥15 g/kg/day preterm) | `checkbox` |  |  |  |
| Neonatology / NICU Assessment | Plan and Discharge Goals | `discharge_criteria_met` | Discharge criteria met (temp/weight/oral feeds/apnea-free) | `checkbox` |  |  |  |
| Neonatology / NICU Assessment | Plan and Discharge Goals | `discharge_target_date` | Estimated Discharge Target Date | `date` |  |  |  |
| Neonatology / NICU Assessment | Plan and Discharge Goals | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Ped Neurology — `pediatric_neurology_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Neurology Evaluation | Referral Reason | `age_years` | Age (years) | `number` |  |  |  |
| Pediatric Neurology Evaluation | Referral Reason | `chief_complaint` | Chief Complaint | `select` |  |  |  |
| Pediatric Neurology Evaluation | Developmental Milestones | `gross_motor` | Gross Motor | `select` |  |  |  |
| Pediatric Neurology Evaluation | Developmental Milestones | `fine_motor` | Fine Motor | `select` |  |  |  |
| Pediatric Neurology Evaluation | Developmental Milestones | `language` | Language / Communication | `select` |  |  |  |
| Pediatric Neurology Evaluation | Developmental Milestones | `social_adaptive` | Social / Adaptive | `select` |  |  |  |
| Pediatric Neurology Evaluation | Developmental Milestones | `eeg_done` | EEG obtained | `checkbox` |  |  |  |
| Pediatric Neurology Evaluation | Developmental Milestones | `mri_brain` | Brain MRI obtained | `checkbox` |  |  |  |
| Pediatric Neurology Evaluation | Plan | `early_intervention` | Early Intervention / school services referral (EI under 3, CPSE/CSE 3+) | `checkbox` |  |  |  |
| Pediatric Neurology Evaluation | Plan | `neuropsych_testing` | Neuropsychological testing ordered | `checkbox` |  |  |  |
| Pediatric Neurology Evaluation | Plan | `aed_started` | AED initiated (for epilepsy) | `checkbox` |  |  |  |
| Pediatric Neurology Evaluation | Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Ped Oncology — `pediatric_oncology_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Oncology Visit | Cancer Diagnosis | `cancer_type` | Cancer Type | `select` |  |  |  |
| Pediatric Oncology Visit | Cancer Diagnosis | `diagnosis_date` | Date of Diagnosis | `date` |  |  |  |
| Pediatric Oncology Visit | Cancer Diagnosis | `risk_stratification` | Risk Stratification | `select` |  |  |  |
| Pediatric Oncology Visit | Cancer Diagnosis | `protocol` | Treatment Protocol / COG Study # | `text` |  |  |  |
| Pediatric Oncology Visit | Treatment Status | `treatment_phase` | Treatment Phase | `select` |  |  |  |
| Pediatric Oncology Visit | Treatment Status | `anc` | ANC (cells/μL) | `number` |  |  |  |
| Pediatric Oncology Visit | Treatment Status | `plt` | Platelets (K/μL) | `number` |  |  |  |
| Pediatric Oncology Visit | Treatment Status | `fever_present` | Fever / febrile neutropenia (ANC <500) | `checkbox` |  |  |  |
| Pediatric Oncology Visit | Plan | `hospital_admission` | Hospital admission indicated (febrile neutropenia / toxicity) | `checkbox` |  |  |  |
| Pediatric Oncology Visit | Plan | `next_chemo_date` | Next Scheduled Chemotherapy Date | `date` |  |  |  |
| Pediatric Oncology Visit | Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Pediatric Cardiology — `pediatric_cardiology_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Cardiology — Congenital Heart Disease and Arrhythmia | Congenital Heart Disease | `chd_type` | CHD Type | `select` |  |  |  |
| Pediatric Cardiology — Congenital Heart Disease and Arrhythmia | Congenital Heart Disease | `oxygen_saturation` | Baseline Oxygen Saturation (%) | `number` |  |  |  |
| Pediatric Cardiology — Congenital Heart Disease and Arrhythmia | Arrhythmia | `arrhythmia_type` | Arrhythmia Type | `select` |  |  |  |

### Pediatric Endocrinology — `pediatric_endocrinology_cf`

Screen: 1 page(s) · 3 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Endocrinology — Growth, Puberty, and Diabetes | Growth Assessment | `height_sds` | Height SDS (standard deviations from mean; <-2 SDS = short stature; mid-parental height target ± 2 SDS) | `number` |  |  |  |
| Pediatric Endocrinology — Growth, Puberty, and Diabetes | Growth Assessment | `growth_cause` | Growth Disorder Etiology | `select` |  |  |  |
| Pediatric Endocrinology — Growth, Puberty, and Diabetes | Puberty Assessment | `pubertal_stage` | Tanner Stage | `select` |  |  |  |
| Pediatric Endocrinology — Growth, Puberty, and Diabetes | Puberty Assessment | `puberty_concern` | Puberty Concern | `select` |  |  |  |
| Pediatric Endocrinology — Growth, Puberty, and Diabetes | Type 1 Diabetes Management | `a1c` | HbA1c (%) | `number` |  |  |  |
| Pediatric Endocrinology — Growth, Puberty, and Diabetes | Type 1 Diabetes Management | `insulin_regimen` | Insulin Regimen | `select` |  |  |  |
| Pediatric Endocrinology — Growth, Puberty, and Diabetes | Type 1 Diabetes Management | `cgm` | CGM Use | `select` |  |  |  |

### Pediatric Epilepsy — `pediatric_neurology_seizure_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Epilepsy Assessment | Seizure Classification (ILAE 2017) | `onset` | Seizure Onset Type | `select` |  |  |  |
| Pediatric Epilepsy Assessment | Seizure Classification (ILAE 2017) | `epilepsy_syndrome` | Epilepsy Syndrome (if identified — CSWS, LKS, Lennox-Gastaut, BECTS/SELECTS, JMEI, childhood absence; specific EEG signatures and age of onset) | `text` |  |  |  |
| Pediatric Epilepsy Assessment | Antiseizure Medication (ASM) | `current_asm` | Current ASM(s) (drug, dose, mg/kg/day, frequency, level if applicable, side effects — levetiracetam behavioral, valproate hepatotoxicity/weight gain, lamotrigine rash) | `text` |  |  |  |
| Pediatric Epilepsy Assessment | Antiseizure Medication (ASM) | `rescue_therapy` | Seizure Rescue Protocol (diazepam rectal 0.2-0.5 mg/kg; midazolam intranasal 0.2 mg/kg; diazepam nasal spray Diastat; lorazepam buccal — for seizures >5 min at home; school action plan on file) | `text` |  |  |  |
| Pediatric Epilepsy Assessment | Antiseizure Medication (ASM) | `refractory_options` | Refractory Epilepsy Options (if ≥2 adequate ASMs failed) | `select` |  |  |  |

### Pediatric GI — `pediatric_gastroenterology_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Gastroenterology Assessment | Diagnosis | `gi_dx` | Gastrointestinal Diagnosis | `select` |  |  |  |
| Pediatric Gastroenterology Assessment | Nutritional Status | `growth_percentile` | Weight/Height Percentile (WHO growth chart; Crohn disease growth failure in 15-40%; catch-up growth goal after therapy; pubertal delay assessment) | `text` |  |  |  |
| Pediatric Gastroenterology Assessment | Nutritional Status | `nutritional_support` | Nutritional Support | `select` |  |  |  |

## Plastic Surgery

### Acute Burn Assessment — `burn_acute_assessment_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Burn Assessment | Burn Characteristics | `mechanism` | Burn Mechanism | `select` |  |  |  |
| Acute Burn Assessment | Burn Characteristics | `tbsa_estimate` | TBSA % Burned (Rule of Nines or Lund-Browder chart for children) | `number` |  |  |  |
| Acute Burn Assessment | Burn Characteristics | `burn_depth` | Predominant Burn Depth | `select` |  |  |  |
| Acute Burn Assessment | Resuscitation (if TBSA >20%) | `parkland_formula` | Parkland Formula: 4 mL x kg x %TBSA = total in 24h (first half in 8h from injury time; second half over next 16h — use LR) | `text` |  |  |  |
| Acute Burn Assessment | Resuscitation (if TBSA >20%) | `urine_output_target` | Urine Output Target: 0.5-1.0 mL/kg/hr adults; 1 mL/kg/hr children; adjust fluid rate accordingly | `text` |  |  |  |
| Acute Burn Assessment | Resuscitation (if TBSA >20%) | `inhalation_injury` | Inhalation injury suspected (singed nares/eyebrows, hoarseness, carbonaceous sputum, facial burns, enclosed space fire) — early intubation before edema | `checkbox` |  |  |  |
| Acute Burn Assessment | Wound Plan | `early_excision` | Early tangential excision and grafting planned (within 48-72h for deep partial/full-thickness: reduces infection, LOS, mortality) | `checkbox` |  |  |  |
| Acute Burn Assessment | Wound Plan | `dressing` | Initial Dressing | `select` |  |  |  |
| Acute Burn Assessment | Wound Plan | `tetanus` | Tetanus status updated (Td booster if >5 years; TIG if unknown / unimmunized) | `checkbox` |  |  |  |

### Breast Reconstruction — `plastic_breast_reconstruction_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Breast Reconstruction Consultation | Oncologic Context | `mastectomy_type` | Mastectomy Type | `select` |  |  |  |
| Breast Reconstruction Consultation | Oncologic Context | `radiation_planned` | Postmastectomy Radiation (PMRT) Status | `select` |  |  |  |
| Breast Reconstruction Consultation | Reconstruction Options Discussion | `timing` | Reconstruction Timing | `select` |  |  |  |
| Breast Reconstruction Consultation | Reconstruction Options Discussion | `reconstruction_type` | Reconstruction Type | `select` |  |  |  |
| Breast Reconstruction Consultation | Reconstruction Options Discussion | `patient_concerns` | Patient Priorities and Concerns (symmetry, nipple reconstruction, contralateral balancing, trade-offs discussed — BRCA status, bilateral considerations) | `textarea` |  |  |  |

### Breast Reconstruction — `plastic_surgery_breast_reconstruction_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Breast Reconstruction — Implant and Autologous Flap Planning | Reconstruction Timing and Approach | `timing` | Reconstruction Timing | `select` |  |  |  |
| Breast Reconstruction — Implant and Autologous Flap Planning | Reconstruction Timing and Approach | `approach` | Reconstruction Approach | `select` |  |  |  |
| Breast Reconstruction — Implant and Autologous Flap Planning | Nipple-Areola Complex | `nac_plan` | NAC Reconstruction Plan | `select` |  |  |  |
| Breast Reconstruction — Implant and Autologous Flap Planning | Nipple-Areola Complex | `complications` | Complication Risk Assessment (radiation history (most important risk factor); smoking (mandatory cessation 4+ weeks preop — fold necrosis risk); BMI >35; diabetes; prior chest surgery; bilateral vs. unilateral; infection: 1-3%; implant loss: 1-10%; seroma; capsular contracture Baker III-IV: 15-40% in radiated; discuss at consent) | `textarea` |  |  |  |

### Flap Reconstruction — `plastic_reconstruction_flap_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Reconstructive Flap Planning | Defect Assessment | `defect_location` | Defect Location (anatomic region — head/neck, breast, trunk, extremity, foot/ankle) | `text` |  |  |  |
| Reconstructive Flap Planning | Defect Assessment | `defect_size` | Defect Dimensions (length x width x depth in cm) | `text` |  |  |  |
| Reconstructive Flap Planning | Defect Assessment | `defect_etiology` | Defect Etiology | `select` |  |  |  |
| Reconstructive Flap Planning | Defect Assessment | `exposed_structures` | Exposed Structures (bone, tendon, hardware, vessels, viscera — direct determinant of reconstruction tier) | `textarea` |  |  |  |
| Reconstructive Flap Planning | Reconstructive Ladder Decision | `reconstruction_tier` | Reconstructive Option Selected | `select` |  |  |  |
| Reconstructive Flap Planning | Reconstructive Ladder Decision | `flap_type` | Specific Flap Name and Perforator Vessel (e.g., DIEP — deep inferior epigastric perforator; ALT — anterolateral thigh; fibular free flap) | `text` |  |  |  |
| Reconstructive Flap Planning | Reconstructive Ladder Decision | `recipient_vessels` | Recipient Vessels for Microsurgical Anastomosis (if free flap — preoperative vascular mapping with CTA) | `text` |  |  |  |
| Reconstructive Flap Planning | Post-Op Flap Monitoring Protocol | `monitoring_frequency` | Flap Check Frequency | `select` |  |  |  |
| Reconstructive Flap Planning | Post-Op Flap Monitoring Protocol | `monitoring_parameters` | Flap Monitoring Parameters (color, temperature, turgor, capillary refill, Doppler signal, implantable probe if used) | `textarea` |  |  |  |
| Reconstructive Flap Planning | Post-Op Flap Monitoring Protocol | `dvt_prophylaxis` | DVT prophylaxis protocol (sequential compression devices; anticoagulation per attending preference; early ambulation) | `checkbox` |  |  |  |

### Hand Surgery Eval — `plastic_hand_surgery_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hand Surgery Evaluation | Injury / Pathology | `hand_condition` | Primary Condition | `select` |  |  |  |
| Hand Surgery Evaluation | Injury / Pathology | `dominant_hand` | Hand Dominance and Injured Side | `select` |  |  |  |
| Hand Surgery Evaluation | Neurologic Function | `two_point_discrimination` | Two-Point Discrimination (normal <6 mm; >15 mm = poor sensation; test each digit independently) | `text` |  |  |  |
| Hand Surgery Evaluation | Neurologic Function | `median_nerve` | Median nerve function intact (thumb opposition; index/long finger DIP flexion — FDP; thenar motor) | `checkbox` |  |  |  |
| Hand Surgery Evaluation | Neurologic Function | `ulnar_nerve` | Ulnar nerve function intact (ring/small finger intrinsics; Froment sign negative; ring/small DIP flexion) | `checkbox` |  |  |  |
| Hand Surgery Evaluation | Neurologic Function | `radial_nerve` | Radial nerve function intact (wrist extension; finger MP extension — EPL, EDC) | `checkbox` |  |  |  |
| Hand Surgery Evaluation | Management Plan | `operative_plan` | Operative Plan (if indicated — tendon repair, ORIF, nerve repair, replantation, fasciectomy) | `textarea` |  |  |  |
| Hand Surgery Evaluation | Management Plan | `therapy_referral` | Hand therapy referral (certified hand therapist — CHT; splinting, edema control, ROM, strengthening, desensitization) | `checkbox` |  |  |  |
| Hand Surgery Evaluation | Management Plan | `return_to_work` | Estimated Return to Work / Activity Timeline (light duty vs. full duty; significant functional impact on livelihood) | `text` |  |  |  |

### Plastic Surgery — `plastic_surgery_consult_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Plastic Surgery Consultation | Reason for Consultation | `consult_type` | Consult Category | `select` |  |  |  |
| Plastic Surgery Consultation | Reason for Consultation | `referring_dx` | Referring Diagnosis / Indication | `text` |  |  |  |
| Plastic Surgery Consultation | Exam Findings | `defect_size_cm` | Defect / Lesion Size (cm) | `text` |  |  |  |
| Plastic Surgery Consultation | Exam Findings | `defect_location` | Anatomic Location | `text` |  |  |  |
| Plastic Surgery Consultation | Exam Findings | `tissue_quality` | Local Tissue Quality | `select` |  |  |  |
| Plastic Surgery Consultation | Exam Findings | `prior_surgery_at_site` | Prior surgery or radiation at site | `checkbox` |  |  |  |
| Plastic Surgery Consultation | Surgical Plan | `planned_procedure` | Planned Procedure | `text` |  |  |  |
| Plastic Surgery Consultation | Surgical Plan | `reconstruction_technique` | Reconstruction Technique (if applicable) | `select` |  |  |  |
| Plastic Surgery Consultation | Surgical Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Skin Cancer Recon — `plastic_skin_cancer_reconstruction_cf`

Screen: 1 page(s) · 2 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Skin Cancer Reconstruction (Post-Mohs / Excision) | Lesion Details | `cancer_type` | Cancer Type | `select` |  |  |  |
| Skin Cancer Reconstruction (Post-Mohs / Excision) | Lesion Details | `location` | Defect Location (nose, ear, lip, eyelid, scalp, forehead, cheek — critical cosmetic subunit) | `text` |  |  |  |
| Skin Cancer Reconstruction (Post-Mohs / Excision) | Lesion Details | `defect_size_recon` | Post-Excision Defect Size (cm x cm) | `text` |  |  |  |
| Skin Cancer Reconstruction (Post-Mohs / Excision) | Lesion Details | `mohs_layers` | Mohs Layers Required (if Mohs) — more layers = larger defect | `number` |  |  |  |
| Skin Cancer Reconstruction (Post-Mohs / Excision) | Reconstruction Plan | `closure_type` | Reconstruction Approach | `select` |  |  |  |
| Skin Cancer Reconstruction (Post-Mohs / Excision) | Reconstruction Plan | `cosmetic_subunit_principle` | Aesthetic subunit principle applied (replace entire cosmetic subunit if >50% involved — better camouflage) | `checkbox` |  |  |  |
| Skin Cancer Reconstruction (Post-Mohs / Excision) | Reconstruction Plan | `follow_up_timeline` | Suture Removal / Follow-Up Timeline (face: 5-7 days; scalp/trunk: 10-14 days; post-op scar management) | `text` |  |  |  |

## Preventive Medicine

### Adolescent Health — `preventive_adolescent_cf`

Screen: 1 page(s) · 4 section(s) · 27 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Adolescent Preventive Care Visit | Growth and Vital Signs | `adol_age` | Age (years) | `number` |  |  |  |
| Adolescent Preventive Care Visit | Growth and Vital Signs | `adol_height_cm` | Height (cm) | `number` |  |  |  |
| Adolescent Preventive Care Visit | Growth and Vital Signs | `adol_weight_kg` | Weight (kg) | `number` |  |  |  |
| Adolescent Preventive Care Visit | Growth and Vital Signs | `adol_bmi_percentile` | BMI Percentile (for age and sex) | `number` |  |  |  |
| Adolescent Preventive Care Visit | Growth and Vital Signs | `adol_bmi_category` | BMI Category | `select` |  |  |  |
| Adolescent Preventive Care Visit | Growth and Vital Signs | `adol_bp` | Blood Pressure (mmHg) - hypertension over 130/80 age 13+ | `text` |  |  |  |
| Adolescent Preventive Care Visit | Growth and Vital Signs | `adol_tanner_stage` | Tanner Stage (Pubertal Development) | `select` |  |  |  |
| Adolescent Preventive Care Visit | Behavioral Health Screening | `adol_crafft_score` | CRAFFT Substance Use Score (age 12-21, pathologic 2 or above) | `number` |  |  |  |
| Adolescent Preventive Care Visit | Behavioral Health Screening | `adol_crafft_result` | CRAFFT Interpretation | `select` |  |  |  |
| Adolescent Preventive Care Visit | Behavioral Health Screening | `adol_phq_a` | PHQ-A / PHQ-9 Depression Screen (USPSTF 12+) | `select` |  |  |  |
| Adolescent Preventive Care Visit | Behavioral Health Screening | `adol_suicide_screen` | Suicide/Self-Harm Screening (ASQ or PHQ-9 Q9) | `select` |  |  |  |
| Adolescent Preventive Care Visit | Behavioral Health Screening | `adol_gad7` | Anxiety Screening (GAD-7) | `select` |  |  |  |
| Adolescent Preventive Care Visit | Behavioral Health Screening | `adol_screen_time` | Screen Time (hours per day) | `select` |  |  |  |
| Adolescent Preventive Care Visit | Behavioral Health Screening | `adol_sexual_health` | Sexual Health (HEEADSSS) | `select` |  |  |  |
| Adolescent Preventive Care Visit | Behavioral Health Screening | `adol_lgbtq` | LGBTQ+ Identity and Support | `select` |  |  |  |
| Adolescent Preventive Care Visit | Musculoskeletal and Sports | `adol_scoliosis` | Scoliosis Screen (Adams forward bend test) | `select` |  |  |  |
| Adolescent Preventive Care Visit | Musculoskeletal and Sports | `adol_sports_physical` | Pre-Participation Physical Evaluation (PPE) | `select` |  |  |  |
| Adolescent Preventive Care Visit | Musculoskeletal and Sports | `adol_cardiac_screening` | Cardiac Screening (PPE - sudden cardiac death) | `select` |  |  |  |
| Adolescent Preventive Care Visit | Immunizations and Screenings | `adol_hpv` | HPV Vaccine (ACIP: start at age 11-12, series through 26) | `select` |  |  |  |
| Adolescent Preventive Care Visit | Immunizations and Screenings | `adol_meningococcal` | Meningococcal Vaccine (MenACWY at 11, booster at 16) | `select` |  |  |  |
| Adolescent Preventive Care Visit | Immunizations and Screenings | `adol_tdap` | Tdap (single dose at 11-12 if not given) | `select` |  |  |  |
| Adolescent Preventive Care Visit | Immunizations and Screenings | `adol_flu_annual` | Annual Influenza Vaccine | `select` |  |  |  |
| Adolescent Preventive Care Visit | Immunizations and Screenings | `adol_vision_screen` | Vision Screening | `select` |  |  |  |
| Adolescent Preventive Care Visit | Immunizations and Screenings | `adol_hearing` | Hearing Screen | `select` |  |  |  |
| Adolescent Preventive Care Visit | Immunizations and Screenings | `adol_anemia_screen` | Anemia Screening (adolescent females) | `select` |  |  |  |
| Adolescent Preventive Care Visit | Immunizations and Screenings | `adol_heeadsss` | HEEADSSS Documentation (Home, Education, Eating, Activities, Drugs, Sex, Safety, Suicide) | `textarea` |  |  |  |
| Adolescent Preventive Care Visit | Immunizations and Screenings | `adol_notes` | Additional Notes and Anticipatory Guidance | `textarea` |  |  |  |

### Adult Preventive Care — `preventive_care_adult_cf`

Screen: 1 page(s) · 4 section(s) · 18 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Adult Preventive Care Visit | Cancer Screening (USPSTF) | `mammogram` | Mammography (women 40–74) | `select` |  |  |  |
| Adult Preventive Care Visit | Cancer Screening (USPSTF) | `pap_hpv` | Cervical cancer screening (Pap/HPV co-test) | `select` |  |  |  |
| Adult Preventive Care Visit | Cancer Screening (USPSTF) | `colorectal_screening` | Colorectal Cancer Screening (45–75) | `select` |  |  |  |
| Adult Preventive Care Visit | Cancer Screening (USPSTF) | `lung_ldct` | Lung Cancer Screening (LDCT, 50–80, ≥20 pack-years) | `select` |  |  |  |
| Adult Preventive Care Visit | Cancer Screening (USPSTF) | `aaa_screen` | AAA Ultrasound (one-time, men 65–75 ever-smokers) | `select` |  |  |  |
| Adult Preventive Care Visit | Cancer Screening (USPSTF) | `prostate_discussion` | PSA screening shared decision-making done (men 50–69) | `checkbox` |  |  |  |
| Adult Preventive Care Visit | Cardiometabolic Screening | `bp_screen` | Blood Pressure Measured | `select` |  |  |  |
| Adult Preventive Care Visit | Cardiometabolic Screening | `lipid_screen` | Lipid Panel (fasting) | `select` |  |  |  |
| Adult Preventive Care Visit | Cardiometabolic Screening | `diabetes_screen` | Diabetes Screening (BMI ≥25 / age 35–70) | `select` |  |  |  |
| Adult Preventive Care Visit | Immunizations | `flu_vaccine` | Influenza Vaccine (annual) | `select` |  |  |  |
| Adult Preventive Care Visit | Immunizations | `covid_vaccine` | COVID-19 Vaccine (annual updated) | `select` |  |  |  |
| Adult Preventive Care Visit | Immunizations | `tdap_td` | Tdap / Td Booster (every 10 years) | `select` |  |  |  |
| Adult Preventive Care Visit | Immunizations | `shingrix` | Shingrix (Shingles, age ≥50) | `select` |  |  |  |
| Adult Preventive Care Visit | Immunizations | `pneumococcal` | Pneumococcal (PCV15/20, age ≥65) | `select` |  |  |  |
| Adult Preventive Care Visit | Behavioral Counseling | `tobacco_screen` | Tobacco / Nicotine Status | `select` |  |  |  |
| Adult Preventive Care Visit | Behavioral Counseling | `alcohol_audit_c` | AUDIT-C Score | `number` |  |  |  |
| Adult Preventive Care Visit | Behavioral Counseling | `depression_phq2` | PHQ-2 Score | `number` |  |  |  |
| Adult Preventive Care Visit | Behavioral Counseling | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Geriatric Assessment — `preventive_geriatric_cf`

Screen: 1 page(s) · 6 section(s) · 30 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Comprehensive Geriatric Assessment | Patient Overview | `ger_age` | Age (years) | `number` |  |  |  |
| Comprehensive Geriatric Assessment | Patient Overview | `ger_living_situation` | Living Situation | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Patient Overview | `ger_caregiver` | Primary Caregiver Name and Relationship | `text` |  |  |  |
| Comprehensive Geriatric Assessment | Patient Overview | `ger_advance_directive` | Advance Directive / Healthcare Proxy | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Patient Overview | `ger_polst` | POLST / MOLST on File | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Frailty and Physical Function | `ger_frailty_phenotype` | Fried Frailty Phenotype (5 criteria) | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Frailty and Physical Function | `ger_gait_speed` | Gait Speed (m/s) - slow under 0.8 m/s (4m walk test) | `number` |  |  |  |
| Comprehensive Geriatric Assessment | Frailty and Physical Function | `ger_tug_test` | Timed Up and Go (TUG) - seconds (fall risk over 12s) | `number` |  |  |  |
| Comprehensive Geriatric Assessment | Frailty and Physical Function | `ger_grip_strength` | Grip Strength (kg) - weak under 27 (M) or under 16 (F) | `number` |  |  |  |
| Comprehensive Geriatric Assessment | Frailty and Physical Function | `ger_chair_stands` | 5x Chair Stand Test (seconds) - over 12s = low strength | `number` |  |  |  |
| Comprehensive Geriatric Assessment | Frailty and Physical Function | `ger_weight_loss` | Unintentional Weight Loss | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Cognition and Mental Health | `ger_moca_score` | MoCA Score (out of 30, impairment under 26) | `number` |  |  |  |
| Comprehensive Geriatric Assessment | Cognition and Mental Health | `ger_mmse_score` | MMSE Score (out of 30, impairment under 24) | `number` |  |  |  |
| Comprehensive Geriatric Assessment | Cognition and Mental Health | `ger_cognitive_concern` | Cognitive Concern Level | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Cognition and Mental Health | `ger_gds_score` | GDS-15 Depression Score (depressed 5+/15, or GDS-30) | `number` |  |  |  |
| Comprehensive Geriatric Assessment | Cognition and Mental Health | `ger_depression_status` | Depression Status | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Cognition and Mental Health | `ger_delirium_history` | Delirium History | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Functional Status | `ger_adl_status` | ADL Status (Bathing, Dressing, Toileting, Transferring, Continence, Feeding) | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Functional Status | `ger_iadl_status` | IADL Status (Meals, Housework, Laundry, Shopping, Finance, Phone, Medications, Transportation) | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Functional Status | `ger_driving` | Driving | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Fall Risk and Prevention | `ger_fall_history` | Fall History (past 12 months) | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Fall Risk and Prevention | `ger_fall_risk_factors` | Fall Risk Factors (polypharmacy, psychotropics, orthostasis, vision, footwear, home hazards) | `textarea` |  |  |  |
| Comprehensive Geriatric Assessment | Fall Risk and Prevention | `ger_fall_interventions` | Fall Prevention Interventions | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Fall Risk and Prevention | `ger_orthostatic_bp` | Orthostatic Hypotension (drop over 20 systolic / 10 diastolic) | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Polypharmacy and Medication Review | `ger_medication_count` | Total Number of Medications | `number` |  |  |  |
| Comprehensive Geriatric Assessment | Polypharmacy and Medication Review | `ger_beers_criteria` | Beers Criteria Review (AGS - medications to avoid in older adults) | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Polypharmacy and Medication Review | `ger_stopp_start` | STOPP/START Criteria Review | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Polypharmacy and Medication Review | `ger_deprescribing` | Medications Deprescribed or Simplified This Visit | `textarea` |  |  |  |
| Comprehensive Geriatric Assessment | Polypharmacy and Medication Review | `ger_social_support` | Social Support and Resource Needs (meals on wheels, transportation, respite, financial) | `textarea` |  |  |  |
| Comprehensive Geriatric Assessment | Polypharmacy and Medication Review | `ger_notes` | Additional Notes | `textarea` |  |  |  |

### Medical Nutrition Therapy — `nutrition_mnt_consultation_cf`

Screen: 1 page(s) · 4 section(s) · 24 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medical Nutrition Therapy (MNT) Consultation | Referral and Diagnosis | `mnt_referral_dx` | Primary Diagnosis Requiring MNT | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Referral and Diagnosis | `mnt_visit_type` | Visit Type | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Referral and Diagnosis | `mnt_height` | Height | `text` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Referral and Diagnosis | `mnt_weight` | Weight | `text` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Referral and Diagnosis | `mnt_bmi` | BMI | `text` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Referral and Diagnosis | `mnt_weight_change` | Weight Change Since Last Visit | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Dietary Assessment | `mnt_typical_meals` | 24-Hour Dietary Recall or Typical Daily Intake (breakfast, lunch, dinner, snacks) | `textarea` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Dietary Assessment | `mnt_calories_est` | Estimated Daily Caloric Intake | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Dietary Assessment | `mnt_carb_intake` | Carbohydrate Intake Pattern | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Dietary Assessment | `mnt_protein_intake` | Protein Intake Assessment | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Dietary Assessment | `mnt_dietary_pattern` | Predominant Dietary Pattern | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Dietary Assessment | `mnt_meal_timing` | Meal Timing and Frequency | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Dietary Assessment | `mnt_fluid_intake` | Fluid Intake | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Disease-Specific Nutrition Guidance | `mnt_diabetes_carb_counting` | Diabetes: Carbohydrate Counting Skill Level | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Disease-Specific Nutrition Guidance | `mnt_renal_restrictions` | CKD Dietary Restrictions | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Disease-Specific Nutrition Guidance | `mnt_cardiac_fat` | Cardiac: Dietary Fat Quality | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Disease-Specific Nutrition Guidance | `mnt_sodium_intake` | Sodium Intake Assessment | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Disease-Specific Nutrition Guidance | `mnt_weight_goal` | Weight Management Goal | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Barriers and Nutrition Care Plan | `mnt_barriers` | Primary Barrier to Dietary Adherence | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Barriers and Nutrition Care Plan | `mnt_goal_1` | SMART Goal 1 (Specific, Measurable, Achievable, Relevant, Time-bound) | `text` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Barriers and Nutrition Care Plan | `mnt_goal_2` | SMART Goal 2 | `text` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Barriers and Nutrition Care Plan | `mnt_meal_plan` | Meal Plan or Tools Provided | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Barriers and Nutrition Care Plan | `mnt_followup_interval` | Follow-Up Interval | `select` |  |  |  |
| Medical Nutrition Therapy (MNT) Consultation | Barriers and Nutrition Care Plan | `mnt_notes` | MNT Dietitian Notes and Recommendations | `textarea` |  |  |  |

### Pre-Travel Consultation — `travel_medicine_pretravel_cf`

Screen: 1 page(s) · 4 section(s) · 26 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pre-Travel Health Consultation | Travel Itinerary and Traveler Profile | `travel_destination` | Destination Countries / Regions | `text` |  |  |  |
| Pre-Travel Health Consultation | Travel Itinerary and Traveler Profile | `travel_departure_date` | Departure Date | `date` |  |  |  |
| Pre-Travel Health Consultation | Travel Itinerary and Traveler Profile | `travel_duration_days` | Duration (days) | `number` |  |  |  |
| Pre-Travel Health Consultation | Travel Itinerary and Traveler Profile | `travel_purpose` | Purpose of Travel | `select` |  |  |  |
| Pre-Travel Health Consultation | Travel Itinerary and Traveler Profile | `travel_accommodation` | Accommodation Type | `select` |  |  |  |
| Pre-Travel Health Consultation | Travel Itinerary and Traveler Profile | `travel_weeks_before` | Time Before Departure | `select` |  |  |  |
| Pre-Travel Health Consultation | Destination-Specific Risk Assessment | `travel_malaria_risk` | Malaria Risk at Destination | `select` |  |  |  |
| Pre-Travel Health Consultation | Destination-Specific Risk Assessment | `travel_yellow_fever_risk` | Yellow Fever Risk / Entry Requirement | `select` |  |  |  |
| Pre-Travel Health Consultation | Destination-Specific Risk Assessment | `travel_typhoid_risk` | Typhoid Risk | `select` |  |  |  |
| Pre-Travel Health Consultation | Destination-Specific Risk Assessment | `travel_hepatitis_a` | Hepatitis A Risk | `select` |  |  |  |
| Pre-Travel Health Consultation | Destination-Specific Risk Assessment | `travel_altitude` | High Altitude Destination | `select` |  |  |  |
| Pre-Travel Health Consultation | Vaccines Administered or Recommended | `travel_routine_vaccines` | Routine Vaccine Status Updated | `select` |  |  |  |
| Pre-Travel Health Consultation | Vaccines Administered or Recommended | `travel_hepatitis_a_vaccine` | Hepatitis A Vaccine | `select` |  |  |  |
| Pre-Travel Health Consultation | Vaccines Administered or Recommended | `travel_hepatitis_b_vaccine` | Hepatitis B Vaccine | `select` |  |  |  |
| Pre-Travel Health Consultation | Vaccines Administered or Recommended | `travel_typhoid_vaccine` | Typhoid Vaccine | `select` |  |  |  |
| Pre-Travel Health Consultation | Vaccines Administered or Recommended | `travel_yellow_fever_vaccine` | Yellow Fever Vaccine | `select` |  |  |  |
| Pre-Travel Health Consultation | Vaccines Administered or Recommended | `travel_meningococcal` | Meningococcal Vaccine | `select` |  |  |  |
| Pre-Travel Health Consultation | Vaccines Administered or Recommended | `travel_japanese_encephalitis` | Japanese Encephalitis Vaccine | `select` |  |  |  |
| Pre-Travel Health Consultation | Vaccines Administered or Recommended | `travel_rabies_vaccine` | Rabies Pre-Exposure Prophylaxis | `select` |  |  |  |
| Pre-Travel Health Consultation | Malaria Prophylaxis and Traveler Safety | `travel_malaria_prophylaxis` | Malaria Chemoprophylaxis | `select` |  |  |  |
| Pre-Travel Health Consultation | Malaria Prophylaxis and Traveler Safety | `travel_diarrhea_prevention` | Traveler Diarrhea Prevention and Treatment | `select` |  |  |  |
| Pre-Travel Health Consultation | Malaria Prophylaxis and Traveler Safety | `travel_altitude_rx` | Altitude Sickness Prevention | `select` |  |  |  |
| Pre-Travel Health Consultation | Malaria Prophylaxis and Traveler Safety | `travel_mosquito_protection` | Vector Protection Counseling | `select` |  |  |  |
| Pre-Travel Health Consultation | Malaria Prophylaxis and Traveler Safety | `travel_safety_counseling` | Travel Safety Counseling | `select` |  |  |  |
| Pre-Travel Health Consultation | Malaria Prophylaxis and Traveler Safety | `travel_medical_kit` | Travel Medical Kit | `select` |  |  |  |
| Pre-Travel Health Consultation | Malaria Prophylaxis and Traveler Safety | `travel_notes` | Travel Medicine Notes and Country-Specific Advisories | `textarea` |  |  |  |

### Prediabetes Prevention — `preventive_prediabetes_metabolic_cf`

Screen: 1 page(s) · 4 section(s) · 27 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prediabetes and Metabolic Syndrome Prevention Visit | Diagnosis and Classification | `pre_a1c` | Most Recent A1C (%) | `text` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Diagnosis and Classification | `pre_fasting_glucose` | Most Recent Fasting Glucose (mg/dL) | `text` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Diagnosis and Classification | `pre_ogtt` | 2-Hour OGTT Result (mg/dL, if performed) | `text` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Diagnosis and Classification | `pre_classification` | Glucose Status Classification | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Diagnosis and Classification | `pre_risk_score` | ADA Diabetes Risk Score | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Metabolic Syndrome Criteria (ATP-III) | `pre_waist` | Waist Circumference (inches) | `text` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Metabolic Syndrome Criteria (ATP-III) | `pre_waist_criterion` | Waist Circumference Criterion Met | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Metabolic Syndrome Criteria (ATP-III) | `pre_triglycerides` | Fasting Triglycerides (mg/dL) | `text` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Metabolic Syndrome Criteria (ATP-III) | `pre_tg_criterion` | Triglyceride Criterion Met | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Metabolic Syndrome Criteria (ATP-III) | `pre_hdl` | HDL Cholesterol (mg/dL) | `text` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Metabolic Syndrome Criteria (ATP-III) | `pre_hdl_criterion` | HDL Criterion Met | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Metabolic Syndrome Criteria (ATP-III) | `pre_bp_criterion` | Blood Pressure Criterion Met | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Metabolic Syndrome Criteria (ATP-III) | `pre_glucose_criterion` | Fasting Glucose Criterion Met | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Metabolic Syndrome Criteria (ATP-III) | `pre_metabolic_criteria_count` | Total Metabolic Syndrome Criteria Met (0-5; diagnosis requires 3 or more) | `number` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Lifestyle Assessment | `pre_bmi` | BMI | `text` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Lifestyle Assessment | `pre_weight_change` | Weight Trend | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Lifestyle Assessment | `pre_physical_activity` | Physical Activity Level | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Lifestyle Assessment | `pre_diet_quality` | Diet Quality | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Lifestyle Assessment | `pre_sleep` | Sleep Quality and Duration | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Lifestyle Assessment | `pre_stress` | Psychosocial Stress Level | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Prevention Intervention and Goals | `pre_dpp_referral` | Diabetes Prevention Program (DPP) Referral | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Prevention Intervention and Goals | `pre_weight_goal` | Weight Loss Goal | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Prevention Intervention and Goals | `pre_metformin` | Metformin Discussion | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Prevention Intervention and Goals | `pre_a1c_goal` | A1C Goal | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Prevention Intervention and Goals | `pre_monitoring_plan` | Monitoring Plan | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Prevention Intervention and Goals | `pre_followup` | Follow-Up Interval | `select` |  |  |  |
| Prediabetes and Metabolic Syndrome Prevention Visit | Prevention Intervention and Goals | `pre_notes` | Clinical Notes and Patient Education Summary | `textarea` |  |  |  |

### Travel Medicine — `travel_medicine_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Travel Medicine Pre-Trip Consultation | Trip Details | `destination_country` | Destination Country / Region | `text` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Trip Details | `departure_date` | Departure Date | `date` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Trip Details | `return_date` | Return Date | `date` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Trip Details | `trip_purpose` | Trip Purpose | `select` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Trip Details | `accommodation` | Accommodation Standard | `select` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Trip Details | `high_altitude` | Travel above 2500m altitude | `checkbox` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Trip Details | `freshwater_exposure` | Freshwater exposure expected (schistosomiasis risk) | `checkbox` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Travel Vaccinations | `hepatitis_a` | Hepatitis A | `select` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Travel Vaccinations | `typhoid` | Typhoid | `select` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Travel Vaccinations | `yellow_fever` | Yellow Fever | `select` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Travel Vaccinations | `meningococcal_travel` | Meningococcal (Hajj / Sub-Saharan Africa / Meningitis Belt) | `select` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Travel Vaccinations | `rabies_preexposure` | Rabies Pre-Exposure Prophylaxis (wildlife exposure risk) | `select` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Travel Vaccinations | `japanese_encephalitis` | Japanese Encephalitis (rural Asia) | `select` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Prophylactic Medications | `malaria_prophylaxis` | Malaria Chemoprophylaxis | `select` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Prophylactic Medications | `altitude_sickness` | Acetazolamide prescribed for altitude sickness prevention | `checkbox` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Prophylactic Medications | `travelers_diarrhea` | Traveler's Diarrhea (standby treatment) | `select` |  |  |  |
| Travel Medicine Pre-Trip Consultation | Prophylactic Medications | `notes` | Assessment, Counseling and Plan | `textarea` |  |  |  |

## Urology Oncology

### Bladder Cancer — `urology_bladder_cancer_depth_cf`

Screen: 1 page(s) · 2 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Bladder Cancer — NMIBC and MIBC Management | Tumor Stage and Grade | `stage` | Stage | `select` |  |  |  |
| Bladder Cancer — NMIBC and MIBC Management | Intravesical Therapy (NMIBC) | `bcg_status` | BCG Response Status | `select` |  |  |  |

### Bladder Cancer — `urology_bladder_cancer_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Bladder Cancer — NMIBC, MIBC, and Advanced Disease | Bladder Cancer Diagnosis and Classification | `bc_f1` | Bladder Cancer: Transitional Cell (Urothelial) 90%, Smoking 3-4x Risk Number One Modifiable, Painless Hematuria Workup (CT Urography + Cystoscopy + Urine Cytology), NMIBC Ta/T1/CIS vs. MIBC T2+, Blue-Light Cystoscopy Improves Detection, and Upper Tract Urothelial Evaluation (BLADDER CA: EPIDEMIOLOGY: 4th common male cancer; 90% UROTHELIAL; squamous 5%; adenocarcinoma 2%; RISK: SMOKING 3-4x (most important; 50% attributable); aniline dyes; cyclophosphamide; pelvic radiation; chronic UTI/stones (squamous); SCHISTOSOMA haematobium (squamous Africa); PRESENTATION: PAINLESS GROSS HEMATURIA (80%); microscopic hematuria; dysuria; urgency; WORKUP: CT urography; CYSTOSCOPY (gold standard; biopsy); URINE CYTOLOGY (high-grade; CIS); BLUE-LIGHT CYSTOSCOPY: hexaminolevulinate; improves Ta/CIS detection; UPPER TRACT: bilateral renal pelvis and ureter evaluation; STAGING: Ta: non-invasive papillary; CIS (Tis): flat high-grade; T1: lamina propria; T2: muscularis propria; T3: perivesical fat; T4: adjacent organs; N/M; NMIBC: Ta/T1/CIS; MIBC: T2-T4; RISK STRATIFICATION: AUA low/intermediate/high) | `text` |  |  |  |
| Bladder Cancer — NMIBC, MIBC, and Advanced Disease | Bladder Cancer Diagnosis and Classification | `bc_f2` | Bladder Cancer NMIBC Risk Stratification: Low Risk (Low-Grade Ta Single Small), Intermediate Risk (Recurrent/Multifocal Low-Grade Ta or Single High-Grade T1), High Risk (T1 High-Grade or Any CIS or Multifocal High-Grade Ta or Variant Histology), and Progression to MIBC Risk | `select` |  |  |  |
| Bladder Cancer — NMIBC, MIBC, and Advanced Disease | Bladder Cancer Treatment | `bc_f3` | NMIBC Treatment: TURBT Complete Resection Then Intravesical BCG (High-Risk) or Gemcitabine/Mitomycin (Intermediate), BCG Induction 6-Week Course Then Maintenance 1-3 Years (SWOG Protocol 3 Years High-Risk), BCG Shortage Alternatives, and Radical Cystectomy for BCG-Unresponsive High-Risk (NMIBC TREATMENT: TURBT: complete resection staging and treatment; RE-TURBT: T1 or inadequate resection (13-25% T1 upstaged to T2 on re-resection); IMMEDIATE SINGLE-DOSE CHEMO: mitomycin C or gemcitabine within 6h post-TURBT (reduces recurrence 11-14%); AVOID if perforation suspected; BCG: INDUCTION: 6 weekly instillations; MAINTENANCE: SWOG protocol: 3 weeks at 3 months; 6 months; 12 months; 18 months; 24 months; 30 months; 36 months (if tolerating); BCG SHORTAGE: gemcitabine; mitomycin C; combo gemcitabine + docetaxel; erdafitinib (FGFR3+ BCG-unresponsive); SURVEILLANCE: cystoscopy Q3 months x2y; then Q6 months x2y; then annually; cytology; BCG-UNRESPONSIVE HIGH-RISK: RADICAL CYSTECTOMY (standard); pembrolizumab FDA 2020 (BCG-unresponsive CIS; ORR 41%); EV-plus-pembro trials ongoing) | `text` |  |  |  |
| Bladder Cancer — NMIBC, MIBC, and Advanced Disease | Bladder Cancer Treatment | `bc_f4` | MIBC and Advanced Bladder Cancer: Neoadjuvant Cisplatin-Based Chemotherapy (MVAC/GC) Then Radical Cystectomy Standard; Enfortumab Vedotin Plus Pembrolizumab FDA 2023 First-Line Metastatic (EV-302 HR 0.47 OS); Cisplatin-Ineligible Pembrolizumab Plus Enfortumab or Atezolizumab; Trimodal Therapy Bladder Preservation Select T2-T3 | `select` |  |  |  |

### Bladder Cancer — `urology_oncology_bladder_cancer_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Bladder Cancer NMIBC and MIBC — TURBT, BCG, Cystectomy, and Systemic Therapy | Bladder Cancer Epidemiology, Diagnosis, and Staging | `bc_f1` | Bladder Cancer Evaluation: EPIDEMIOLOGY (MOST COMMON URINARY TRACT CANCER; 80000 NEW US CASES ANNUALLY; MALE PREDOMINANCE 3-4:1; PEAK ONSET 65-85 YEARS; RISK FACTORS (SMOKING STRONGEST: 50 pct ATTRIBUTABLE; AROMATIC AMINES OCCUPATIONAL: RUBBER DYE CHEMICAL; CYCLOPHOSPHAMIDE: HEMORRHAGIC CYSTITIS HED LESION; CHRONIC INFECTION SCHISTOSOMIASIS; ARISTOLOCHIC ACID; PHENACETIN; PATHOLOGY (UROTHELIAL TRANSITIONAL CELL CARCINOMA 90 pct; SQUAMOUS CELL CARCINOMA 5 pct SCHISTOSOMIASIS; ADENOCARCINOMA 1-2 pct; SMALL CELL CARCINOMA AGGRESSIVE; CLINICAL PRESENTATION (PAINLESS GROSS HEMATURIA 85 pct; MICROSCOPIC HEMATURIA; IRRITATIVE VOIDING SYMPTOMS DYSURIA FREQUENCY URGENCY; CARCINOMA IN SITU CIS; DIAGNOSIS AND STAGING (CYSTOSCOPY AND BIOPSY GOLD STANDARD; TRANSURETHRAL RESECTION BLADDER TUMOR TURBT; URINE CYTOLOGY: HIGH SENSITIVITY HIGH GRADE; CT UROGRAPHY IVP: UPPER TRACT EVALUATION; CT ABDOMEN PELVIS STAGING MIBC; MRI LOCAL STAGING; BONE SCAN METASTASIS SYMPTOMS; TNM STAGING (NON-MUSCLE INVASIVE NMIBC: TA PAPILLARY MUCOSA; T1 LAMINA PROPRIA; CIS FLAT HIGH GRADE; MUSCLE INVASIVE MIBC: T2 MUSCULARIS; T3 PERIVESICAL; T4 ADJACENT ORGANS; METASTATIC: N NODAL M DISTANT; RISK STRATIFICATION NMIBC (LOW RISK: SOLITARY SMALL TA LOW GRADE; INTERMEDIATE: MULTIPLE RECURRENT; HIGH RISK: HIGH GRADE T1 CIS LARGE MULTIFOCAL) | `text` |  |  |  |
| Bladder Cancer NMIBC and MIBC — TURBT, BCG, Cystectomy, and Systemic Therapy | Bladder Cancer Epidemiology, Diagnosis, and Staging | `bc_f2` | TURBT BCG MIBC Cystectomy and Systemic Therapy | `select` |  |  |  |

### Prostate Cancer — `urology_oncology_prostate_cancer_detail_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prostate Cancer — Staging, Treatment by Stage, CRPC, and PSMA Theranostics | Prostate Cancer Staging, Grading, and Initial Treatment | `pca_f1` | Prostate Cancer Evaluation: PATHOLOGY GRADING (GLEASON SCORE: PRIMARY PLUS SECONDARY GRADE; GRADE GROUP 1: GLEASON 3+3=6; GRADE GROUP 2: 3+4=7; GRADE GROUP 3: 4+3=7; GRADE GROUP 4: 4+4 OR 3+5 8; GRADE GROUP 5: 9-10; STAGING TNM (LOCALIZED: T1 NON-PALPABLE NON-VISIBLE; T2 PALPABLE ORGAN CONFINED; LOCALLY ADVANCED: T3 EXTRACAPSULAR SEMINAL VESICLE; T4 ADJACENT STRUCTURES; NODAL N1 DISTANT M1; RISK STRATIFICATION (LOW RISK: PSA UNDER 10 GG1 T1-T2A; FAVORABLE INTERMEDIATE: ONE IR FACTOR; UNFAVORABLE INTERMEDIATE: MULTIPLE IR FACTORS; HIGH RISK: PSA OVER 20 GG4-5 T3A; VERY HIGH: OVER T3B MULTIPLE HR FACTORS; REGIONAL N1; METASTATIC M1; LOCALIZED TREATMENT CHOICES (ACTIVE SURVEILLANCE: LOW RISK FAVORABLE INTERMEDIATE; SERIAL PSA BIOPSY IMAGING; RADICAL PROSTATECTOMY: ALL RISK GROUPS; NERVE SPARING SELECTED; ROBOTIC LAPAROSCOPIC OPEN; COMPLICATIONS: ERECTILE DYSFUNCTION INCONTINENCE; EXTERNAL BEAM RADIATION THERAPY EBRT (CONVENTIONALLY FRACTIONATED 45 FRACTIONS; MODERATELY HYPOFRACTIONATED 20 FRACTIONS; STEREOTACTIC BODY RADIOSURGERY SBRT 5 FRACTIONS; HIGH DOSE BRACHYTHERAPY HDR; COMBINATION EBRT PLUS ADT HIGH RISK; PROTON THERAPY: NO SURVIVAL ADVANTAGE; BRACHYTHERAPY LOW DOSE LDR SEEDS SELECTED; FOCAL THERAPY: HIFU CRYOTHERAPY SELECTED LOW RISK RESEARCH) | `text` |  |  |  |
| Prostate Cancer — Staging, Treatment by Stage, CRPC, and PSMA Theranostics | Prostate Cancer Staging, Grading, and Initial Treatment | `pca_f2` | ADT Hormone Therapy CRPC and PSMA Theranostics | `select` |  |  |  |

### Prostate Cancer — AS vs. Treatment — `urology_prostate_cancer_active_surveillance_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prostate Cancer — Active Surveillance vs. Definitive Treatment | NCCN Risk Stratification | `risk_group` | NCCN Risk Group | `select` |  |  |  |
| Prostate Cancer — Active Surveillance vs. Definitive Treatment | NCCN Risk Stratification | `as_monitoring` | Active Surveillance Protocol (UCSF/PRIAS hybrid; PSA Q3-6 months year 1, then Q6-12 months; DRE annually; mpMRI at enrollment — if PIRADS 4-5 = MRI-targeted + systematic biopsy; confirmatory biopsy within 6-12 months of enrollment; annual or Q2 year biopsy thereafter; trigger to treatment: GG upgrade to ≥2, >50% of cores positive, significant MRI progression, patient anxiety/preference; maintain: PSA doubling time >3 years = favorable; avoid biopsy >Q3 years in stable) | `text` |  |  |  |
| Prostate Cancer — Active Surveillance vs. Definitive Treatment | Metastatic and Castration-Resistant Disease | `mcspc` | mCSPC (metastatic castration-sensitive) | `select` |  |  |  |
| Prostate Cancer — Active Surveillance vs. Definitive Treatment | Metastatic and Castration-Resistant Disease | `mcrpc` | mCRPC Sequencing (castration-resistant: testosterone <50 ng/dL + PSA progression or radiographic progression + continuing ADT; first-line: abiraterone (COU-AA-302) or enzalutamide (PREVAIL) or darolutamide or apalutamide; second-line: alternate ARAT if no prior or docetaxel 75 mg/m2 Q3 weeks (or cabazitaxel); germline/somatic BRCA1/2 or HRRm: olaparib (PROfound) or rucaparib (TRITON2); PSMA-PET positive: 177Lu-PSMA-617 (VISION); bone mets: zoledronic acid or denosumab (monthly); sipuleucel-T (Provenge) immunotherapy minimal survival benefit asymptomatic mCRPC) | `text` |  |  |  |

### Renal Cell Carcinoma — `urology_kidney_cancer_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Renal Cell Carcinoma — Staging and Treatment | Diagnosis and Staging | `histology` | RCC Histologic Subtype | `select` |  |  |  |
| Renal Cell Carcinoma — Staging and Treatment | Diagnosis and Staging | `imdc_score` | IMDC Prognostic Score (favorable/intermediate/poor risk) | `select` |  |  |  |
| Renal Cell Carcinoma — Staging and Treatment | Surgical Management | `surgery` | Surgical Approach | `select` |  |  |  |

### Renal Cell Carcinoma — `urology_oncology_renal_cell_carcinoma_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Renal Cell Carcinoma RCC — Surgery, Immunotherapy, and Targeted Therapy | RCC Epidemiology, Histology, Risk Factors, and Staging | `rcc_f1` | RCC Evaluation: EPIDEMIOLOGY (MOST COMMON KIDNEY CANCER 90 pct; 76000 NEW CASES US ANNUALLY; MALE TO FEMALE 2:1; PEAK ONSET 60-70 YEARS; HISTOLOGIC SUBTYPES (CLEAR CELL 70-80 pct: VHL MUTATION; MOST COMMON TARGETED THERAPY RESPONSIVE; PAPILLARY TYPE 1 MET GENE; PAPILLARY TYPE 2 FH MUTATION; CHROMOPHOBE FAVORABLE PROGNOSIS; COLLECTING DUCT AGGRESSIVE RARE; MEDULLARY SICKLE CELL TRAIT YOUNG BLACK; TRANSLOCATION XPII YOUNG PATIENTS; HEREDITARY SYNDROMES (VON HIPPEL-LINDAU VHL: CLEAR CELL BILATERAL YOUNG; HEMANGIOBLASTOMAS PHEOCHROMOCYTOMA; HEREDITARY PAPILLARY RENAL CELL CANCER HPRC: MET MUTATION; BIRT-HOGG-DUBE BHD: FLCN MUTATION; CHROMOPHOBE ONCOCYTOMA; LUNG CYSTS; HEREDITARY LEIOMYOMATOSIS RENAL CELL CANCER HLRCC: FH; SUCCINATE DEHYDROGENASE: SDHB C D; RISK FACTORS (SMOKING OBESITY HYPERTENSION; ANALGESIC ABUSE PHENACETIN; CHRONIC DIALYSIS ACQUIRED CYSTIC DISEASE; CLINICAL PRESENTATION (CLASSIC TRIAD: HEMATURIA FLANK PAIN PALPABLE MASS LESS THAN 10 pct NOW; MOST INCIDENTAL IMAGING; PARANEOPLASTIC: HYPERCALCEMIA POLYCYTHEMIA HYPERTENSION; STAUFFER SYNDROME LIVER DYSFUNCTION; STAGING (T1 UNDER 7 cm ORGAN CONFINED T1A UNDER 4 cm T1B 4-7 cm; T2 OVER 7 cm ORGAN CONFINED; T3 RENAL VEIN IVC PERINEPHRIC; T4 GEROTA FASCIA; N0 N1; M0 M1) | `text` |  |  |  |
| Renal Cell Carcinoma RCC — Surgery, Immunotherapy, and Targeted Therapy | RCC Epidemiology, Histology, Risk Factors, and Staging | `rcc_f2` | Surgery IMDC Risk Stratification and Systemic Therapy | `select` |  |  |  |

## Women's Health

### Gyn Oncology — `gynecologic_oncology_cf`

Screen: 1 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Gynecologic Oncology | Diagnosis and Staging | `gyn_cancer_type` | Cancer Type | `select` |  |  |  |
| Gynecologic Oncology | Diagnosis and Staging | `figo_stage` | FIGO Stage | `select` |  |  |  |
| Gynecologic Oncology | Diagnosis and Staging | `histology` | Histology / Grade | `text` |  |  |  |
| Gynecologic Oncology | Diagnosis and Staging | `molecular_markers` | Molecular Markers (BRCA/MMR/MSI/HER2, if tested) | `textarea` |  |  |  |
| Gynecologic Oncology | Treatment | `primary_treatment` | Primary Treatment | `select` |  |  |  |
| Gynecologic Oncology | Treatment | `ca125` | CA-125 (if ovarian) | `number` |  |  |  |
| Gynecologic Oncology | Treatment | `surveillance_visit` | Surveillance visit (treatment complete) | `checkbox` |  |  |  |
| Gynecologic Oncology | Treatment | `notes` | Assessment and Plan | `textarea` |  |  |  |

### MFM Consult — `maternal_fetal_medicine_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Maternal-Fetal Medicine Consultation | Referral Reason | `gestational_age_weeks` | Gestational Age (weeks) | `number` |  |  |  |
| Maternal-Fetal Medicine Consultation | Referral Reason | `referral_reason` | Primary Referral Reason | `select` |  |  |  |
| Maternal-Fetal Medicine Consultation | Referral Reason | `gravida` | Gravida | `number` |  |  |  |
| Maternal-Fetal Medicine Consultation | Referral Reason | `para` | Para (P-T-P-A-L) | `text` |  |  |  |
| Maternal-Fetal Medicine Consultation | Assessment | `cervical_length_mm` | Cervical Length by TV-US (mm) | `number` |  |  |  |
| Maternal-Fetal Medicine Consultation | Assessment | `fetal_weight_estimate` | Estimated Fetal Weight (grams) | `number` |  |  |  |
| Maternal-Fetal Medicine Consultation | Assessment | `fetal_weight_percentile` | EFW Percentile | `number` |  |  |  |
| Maternal-Fetal Medicine Consultation | Assessment | `placental_location` | Placental Location | `select` |  |  |  |
| Maternal-Fetal Medicine Consultation | Assessment | `biophysical_profile` | Biophysical Profile Score (0-10) | `number` |  |  |  |
| Maternal-Fetal Medicine Consultation | Plan | `corticosteroids` | Antenatal corticosteroids ordered (24-34 weeks, preterm risk) | `checkbox` |  |  |  |
| Maternal-Fetal Medicine Consultation | Plan | `progesterone` | Progesterone supplementation (17-OHPC or vaginal) | `checkbox` |  |  |  |
| Maternal-Fetal Medicine Consultation | Plan | `cerclage` | Cervical cerclage placed / planned | `checkbox` |  |  |  |
| Maternal-Fetal Medicine Consultation | Plan | `delivery_planning` | Delivery Planning and Timing | `textarea` |  |  |  |
| Maternal-Fetal Medicine Consultation | Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Menopause — `perimenopause_menopause_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Perimenopause / Menopause Management | Menopausal Status | `stage` | Stage | `select` |  |  |  |
| Perimenopause / Menopause Management | Menopausal Status | `age_at_menopause` | Age at Natural Menopause | `number` |  |  |  |
| Perimenopause / Menopause Management | Menopausal Status | `lmp` | Last Menstrual Period | `date` |  |  |  |
| Perimenopause / Menopause Management | Symptom Assessment | `hot_flashes_per_day` | Hot Flashes / Day | `number` |  |  |  |
| Perimenopause / Menopause Management | Symptom Assessment | `hot_flash_severity` | Hot Flash Severity | `select` |  |  |  |
| Perimenopause / Menopause Management | Symptom Assessment | `gsa_symptoms` | GSM (vaginal dryness / dyspareunia / urinary symptoms) | `checkbox` |  |  |  |
| Perimenopause / Menopause Management | Symptom Assessment | `sleep_disturbance` | Sleep disturbance / night sweats | `checkbox` |  |  |  |
| Perimenopause / Menopause Management | Symptom Assessment | `mood_changes` | Mood changes / cognitive symptoms | `checkbox` |  |  |  |
| Perimenopause / Menopause Management | Symptom Assessment | `mss_score` | Menopause Rating Scale (MRS) or MENQOL Score | `number` |  |  |  |
| Perimenopause / Menopause Management | Menopause Hormone Therapy | `mht_candidate` | Candidate for systemic MHT (no contraindications) | `checkbox` |  |  |  |
| Perimenopause / Menopause Management | Menopause Hormone Therapy | `mht_regimen` | MHT Regimen | `select` |  |  |  |
| Perimenopause / Menopause Management | Menopause Hormone Therapy | `mht_route` | Estrogen Route (if MHT) | `select` |  |  |  |
| Perimenopause / Menopause Management | Menopause Hormone Therapy | `bone_density` | DEXA Bone Density | `select` |  |  |  |
| Perimenopause / Menopause Management | Menopause Hormone Therapy | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Menopause Management — `womens_health_menopause_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Menopause Management | Menopausal Status and Symptom Burden | `meno_stage` | Menopausal Stage | `select` |  |  |  |
| Menopause Management | Menopausal Status and Symptom Burden | `meno_hot_flash_freq` | Hot Flash Frequency | `select` |  |  |  |
| Menopause Management | Menopausal Status and Symptom Burden | `meno_sleep` | Sleep Disruption | `select` |  |  |  |
| Menopause Management | Menopausal Status and Symptom Burden | `meno_mood` | Mood and Cognitive Symptoms | `select` |  |  |  |
| Menopause Management | Menopausal Status and Symptom Burden | `meno_gus` | Genitourinary Syndrome of Menopause (GSM) | `select` |  |  |  |
| Menopause Management | Risk Assessment for MHT | `meno_breast_ca_risk` | Breast Cancer History or Risk | `select` |  |  |  |
| Menopause Management | Risk Assessment for MHT | `meno_cvd_risk` | Cardiovascular Disease Risk | `select` |  |  |  |
| Menopause Management | Risk Assessment for MHT | `meno_vte_risk` | VTE Risk (Deep Vein Thrombosis / PE) | `select` |  |  |  |
| Menopause Management | Risk Assessment for MHT | `meno_uterus_status` | Uterine Status (critical for progestogen choice) | `select` |  |  |  |
| Menopause Management | Treatment Plan | `meno_estrogen` | Systemic Estrogen Therapy | `select` |  |  |  |
| Menopause Management | Treatment Plan | `meno_progestogen` | Progestogen (for women with intact uterus) | `select` |  |  |  |
| Menopause Management | Treatment Plan | `meno_local_estrogen` | Vaginal (Local) Estrogen for GSM | `select` |  |  |  |
| Menopause Management | Treatment Plan | `meno_nonhormonal` | Non-Hormonal Vasomotor Symptom Treatment | `select` |  |  |  |
| Menopause Management | Treatment Plan | `meno_followup` | Follow-Up Plan | `select` |  |  |  |
| Menopause Management | Treatment Plan | `meno_notes` | Menopause Management Notes | `textarea` |  |  |  |

### Pelvic Floor — `female_pelvic_medicine_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Female Pelvic Medicine Evaluation | Chief Complaint | `chief_complaint` | Primary Complaint | `select` |  |  |  |
| Female Pelvic Medicine Evaluation | Chief Complaint | `severity` | Symptom Severity | `select` |  |  |  |
| Female Pelvic Medicine Evaluation | Chief Complaint | `prior_pelvic_surgery` | Prior pelvic surgery (hysterectomy / prolapse repair / sling) | `checkbox` |  |  |  |
| Female Pelvic Medicine Evaluation | Pelvic Exam | `pop_q_stage` | POP-Q Stage (largest prolapse compartment) | `select` |  |  |  |
| Female Pelvic Medicine Evaluation | Pelvic Exam | `prolapse_compartment` | Dominant Compartment | `select` |  |  |  |
| Female Pelvic Medicine Evaluation | Pelvic Exam | `stress_test_positive` | Positive cough stress test (SUI confirmed) | `checkbox` |  |  |  |
| Female Pelvic Medicine Evaluation | Treatment Plan | `pelvic_pt` | Pelvic floor PT ordered | `checkbox` |  |  |  |
| Female Pelvic Medicine Evaluation | Treatment Plan | `pessary` | Pessary fitted | `checkbox` |  |  |  |
| Female Pelvic Medicine Evaluation | Treatment Plan | `medication` | Medication Prescribed (anticholinergic / beta-3 / topical estrogen) | `text` |  |  |  |
| Female Pelvic Medicine Evaluation | Treatment Plan | `surgical_plan` | Surgical Plan (if indicated) | `text` |  |  |  |
| Female Pelvic Medicine Evaluation | Treatment Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Postpartum Visit — `postpartum_care_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Postpartum Visit | Patient & Delivery | `patientId` | Patient | `typeahead` | Y |  |  |
| Postpartum Visit | Patient & Delivery | `visitDate` | Visit Date | `date` | Y |  |  |
| Postpartum Visit | Patient & Delivery | `provider` | Provider | `typeahead` | Y |  |  |
| Postpartum Visit | Patient & Delivery | `deliveryDate` | Delivery Date | `date` | Y |  |  |
| Postpartum Visit | Patient & Delivery | `deliveryType` | Delivery Type | `select` | Y |  |  |
| Postpartum Visit | Patient & Delivery | `gestationalAge` | Gestational Age at Delivery | `text` |  |  |  |
| Postpartum Visit | Patient & Delivery | `infantInfo` | Infant | `text` |  |  |  |
| Postpartum Visit | Postpartum Review | `symptoms` | Current Symptoms / Concerns | `textarea` | Y |  |  |
| Postpartum Visit | Postpartum Review | `moodScreen` | Edinburgh Postnatal Depression Scale (EPDS) | `select` | Y |  |  |
| Postpartum Visit | Postpartum Review | `bondingScreen` | Bonding / Attachment | `select` |  |  |  |
| Postpartum Visit | Postpartum Review | `physicalExam` | Physical Exam | `textarea` | Y |  |  |
| Postpartum Visit | Plan | `contraception` | Contraception Plan | `select` | Y |  |  |
| Postpartum Visit | Plan | `ppPlan` | Plan / Counseling | `textarea` | Y |  |  |

### REI / Infertility — `reproductive_endocrinology_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Reproductive Endocrinology and Infertility | Infertility Workup | `duration_trying_months` | Duration Trying to Conceive (months) | `number` |  |  |  |
| Reproductive Endocrinology and Infertility | Infertility Workup | `prior_pregnancies` | Prior Pregnancies | `number` |  |  |  |
| Reproductive Endocrinology and Infertility | Infertility Workup | `female_factor` | Female Factor | `select` |  |  |  |
| Reproductive Endocrinology and Infertility | Infertility Workup | `male_factor` | Male Factor (semen analysis result) | `select` |  |  |  |
| Reproductive Endocrinology and Infertility | Infertility Workup | `amh` | Anti-Mullerian Hormone (ng/mL) | `number` |  |  |  |
| Reproductive Endocrinology and Infertility | Infertility Workup | `antral_follicle_count` | Antral Follicle Count (total both ovaries) | `number` |  |  |  |
| Reproductive Endocrinology and Infertility | Treatment Plan | `treatment` | Treatment Plan | `select` |  |  |  |
| Reproductive Endocrinology and Infertility | Treatment Plan | `cycle_number` | Current Cycle Number | `number` |  |  |  |
| Reproductive Endocrinology and Infertility | Treatment Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

## Clinical Nutrition

### Bariatric Nutrition — `bariatric_nutrition_cf`

Screen: 1 page(s) · 4 section(s) · 18 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Bariatric Surgery Nutrition Follow-Up | Surgery History | `bariatric_procedure` | Bariatric Procedure | `select` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Surgery History | `months_post_op` | Months Post-Operation | `number` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Surgery History | `pre_op_weight` | Pre-Op Weight (lbs) | `number` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Surgery History | `current_weight` | Current Weight (lbs) | `number` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Surgery History | `excess_weight_loss_pct` | % Excess Weight Loss (%EWL) | `number` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Micronutrient Labs | `ferritin` | Ferritin (ng/mL) | `number` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Micronutrient Labs | `b12` | Vitamin B12 (pg/mL) | `number` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Micronutrient Labs | `vit_d_25oh` | 25-OH Vitamin D (ng/mL) | `number` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Micronutrient Labs | `pth` | PTH (pg/mL) | `number` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Micronutrient Labs | `zinc` | Zinc (mcg/dL) | `number` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Micronutrient Labs | `thiamine_b1` | Thiamine / B1 (nmol/L) | `number` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Micronutrient Labs | `copper` | Copper (mcg/dL) | `number` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Diet Stage and Compliance | `diet_stage` | Current Diet Stage | `select` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Diet Stage and Compliance | `protein_intake` | Estimated Protein Intake (g/day — goal 60-80g+) | `number` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Diet Stage and Compliance | `vitamin_compliance` | Multivitamin / Supplement Compliance | `select` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Diet Stage and Compliance | `dumping_syndrome` | Dumping syndrome symptoms (post-prandial: nausea, diaphoresis, diarrhea) | `checkbox` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Plan | `supplement_changes` | Supplement Adjustments | `textarea` |  |  |  |
| Bariatric Surgery Nutrition Follow-Up | Plan | `dietary_counseling` | Dietary Counseling Provided | `textarea` |  |  |  |

### Diabetes MNT — `diabetes_nutrition_cf`

Screen: 1 page(s) · 4 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Diabetes Medical Nutrition Therapy | Metabolic Status | `diabetes_type` | Diabetes Type | `select` |  |  |  |
| Diabetes Medical Nutrition Therapy | Metabolic Status | `a1c` | HbA1c (%) | `number` |  |  |  |
| Diabetes Medical Nutrition Therapy | Metabolic Status | `cgm_time_in_range` | CGM Time in Range 70-180 (%) | `number` |  |  |  |
| Diabetes Medical Nutrition Therapy | Metabolic Status | `cgm_cv` | CGM Coefficient of Variation (CV%, goal <36%) | `number` |  |  |  |
| Diabetes Medical Nutrition Therapy | Dietary Pattern Assessment | `carb_intake` | Estimated Carbohydrate Intake (g/day) | `number` |  |  |  |
| Diabetes Medical Nutrition Therapy | Dietary Pattern Assessment | `carb_pattern` | Recommended Carbohydrate Pattern | `select` |  |  |  |
| Diabetes Medical Nutrition Therapy | Dietary Pattern Assessment | `meal_timing` | Meal Timing / Pattern Reviewed | `textarea` |  |  |  |
| Diabetes Medical Nutrition Therapy | Hypoglycemia Prevention | `hypo_freq` | Hypoglycemia Frequency | `select` |  |  |  |
| Diabetes Medical Nutrition Therapy | Hypoglycemia Prevention | `rule_of_15` | Rule of 15 education provided (15g fast-acting carbs → recheck 15 min) | `checkbox` |  |  |  |
| Diabetes Medical Nutrition Therapy | Hypoglycemia Prevention | `glucagon_rx` | Nasal glucagon or glucagon kit prescribed | `checkbox` |  |  |  |
| Diabetes Medical Nutrition Therapy | Plan | `education_provided` | Nutrition Education Provided | `textarea` |  |  |  |

### Enteral Nutrition — `enteral_nutrition_management_cf`

Screen: 1 page(s) · 4 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Enteral Nutrition Management | Feeding Access | `tube_type` | Feeding Tube Type | `select` |  |  |  |
| Enteral Nutrition Management | Feeding Access | `tube_position_verified` | Tube position verified (X-ray / pH / CO2) | `checkbox` |  |  |  |
| Enteral Nutrition Management | Formula and Regimen | `formula_name` | Formula Name / Type | `text` |  |  |  |
| Enteral Nutrition Management | Formula and Regimen | `formula_kcal_ml` | Caloric Density (kcal/mL) | `number` |  |  |  |
| Enteral Nutrition Management | Formula and Regimen | `rate_ml_hr` | Rate (mL/hr) — continuous feed | `number` |  |  |  |
| Enteral Nutrition Management | Formula and Regimen | `bolus_volume` | Bolus Volume (mL) — bolus feed | `number` |  |  |  |
| Enteral Nutrition Management | Formula and Regimen | `bolus_frequency` | Bolus Frequency (e.g., Q4h) | `text` |  |  |  |
| Enteral Nutrition Management | Formula and Regimen | `total_volume_day` | Total Volume per Day (mL) | `number` |  |  |  |
| Enteral Nutrition Management | Formula and Regimen | `total_calories_day` | Total Calories per Day (kcal) | `number` |  |  |  |
| Enteral Nutrition Management | Monitoring and Tolerability | `gastric_residual` | Gastric Residual Volume (mL — hold if >500) | `number` |  |  |  |
| Enteral Nutrition Management | Monitoring and Tolerability | `diarrhea` | Diarrhea (>3 loose stools/day) — check soluble fiber / osmolality / infection | `checkbox` |  |  |  |
| Enteral Nutrition Management | Monitoring and Tolerability | `aspiration_risk` | Aspiration Risk | `select` |  |  |  |
| Enteral Nutrition Management | Monitoring and Tolerability | `free_water_flushes` | Free Water Flushes per Day (mL total) | `number` |  |  |  |
| Enteral Nutrition Management | Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Malnutrition / Clinical Nutrition — `clinical_nutrition_malnutrition_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Malnutrition Assessment and Nutritional Support | Nutrition Screening and Diagnosis | `nutrition_screen` | Nutrition Screen Result (MST/NRS-2002) | `select` |  |  |  |
| Malnutrition Assessment and Nutritional Support | Nutrition Screening and Diagnosis | `glim_diagnosis` | GLIM Malnutrition Diagnosis | `select` |  |  |  |
| Malnutrition Assessment and Nutritional Support | Nutritional Support Plan | `calorie_protein` | Calorie and Protein Goals (calories: 25-30 kcal/kg IBW for stable; 20-25 kcal/kg for ICU (permissive underfeeding if morbidly obese 60-70% goal); protein: 1.2-2.0 g/kg IBW standard (1.5-2.5 g/kg for burns or ICU); Harris-Benedict equation + stress factor; indirect calorimetry (metabolic cart) if available; high-protein hypocaloric for obese ICU: 2.0 g/kg IBW calories at 60-70% goal) | `text` |  |  |  |
| Malnutrition Assessment and Nutritional Support | Nutritional Support Plan | `enteral_route` | Enteral Nutrition Route | `select` |  |  |  |
| Malnutrition Assessment and Nutritional Support | Nutritional Support Plan | `pn` | Parenteral Nutrition (PN — when EN contraindicated or goal not met; central PN (TPN) via PICC or central line; peripheral PN <900 mOsm/L only; components: dextrose (g/kg/day), amino acids (1.0-2.0 g/kg), lipid emulsion (SMOF or SO-based 1-1.5 g/kg max), electrolytes, vitamins, trace elements; cyclic PN for home PN (12-16h nocturnal); GI rest for severe IBD or short bowel; goal transition to EN as soon as feasible; catheter-related bloodstream infection prevention) | `text` |  |  |  |

### Nutrition Assessment — `nutrition_assessment_cf`

Screen: 1 page(s) · 4 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medical Nutrition Therapy Assessment | Anthropometrics | `weight_kg` | Weight (kg) | `number` |  |  |  |
| Medical Nutrition Therapy Assessment | Anthropometrics | `height_cm` | Height (cm) | `number` |  |  |  |
| Medical Nutrition Therapy Assessment | Anthropometrics | `bmi` | BMI (kg/m²) | `number` |  |  |  |
| Medical Nutrition Therapy Assessment | Anthropometrics | `weight_change_lbs` | Unintentional Weight Change (lbs, - = loss) | `number` |  |  |  |
| Medical Nutrition Therapy Assessment | Anthropometrics | `weight_change_pct` | Weight Change (%) | `number` |  |  |  |
| Medical Nutrition Therapy Assessment | Dietary Intake Assessment | `calorie_estimate` | Estimated Current Calorie Intake (kcal/day) | `number` |  |  |  |
| Medical Nutrition Therapy Assessment | Dietary Intake Assessment | `protein_estimate` | Estimated Protein Intake (g/day) | `number` |  |  |  |
| Medical Nutrition Therapy Assessment | Dietary Intake Assessment | `diet_quality` | Overall Diet Quality | `select` |  |  |  |
| Medical Nutrition Therapy Assessment | Dietary Intake Assessment | `appetite` | Appetite | `select` |  |  |  |
| Medical Nutrition Therapy Assessment | Dietary Intake Assessment | `dysphagia` | Dysphagia / modified texture diet required | `checkbox` |  |  |  |
| Medical Nutrition Therapy Assessment | Dietary Intake Assessment | `nausea_vomiting` | Nausea / vomiting affecting intake | `checkbox` |  |  |  |
| Medical Nutrition Therapy Assessment | Malnutrition Screening (GLIM 2018) | `malnutrition_phenotypic` | Phenotypic Criterion | `select` |  |  |  |
| Medical Nutrition Therapy Assessment | Malnutrition Screening (GLIM 2018) | `malnutrition_etiologic` | Etiologic Criterion | `select` |  |  |  |
| Medical Nutrition Therapy Assessment | Malnutrition Screening (GLIM 2018) | `malnutrition_severity` | Malnutrition Diagnosis (GLIM) | `select` |  |  |  |
| Medical Nutrition Therapy Assessment | Nutrition Diagnosis and Intervention | `calorie_goal` | Calorie Goal (kcal/day) | `number` |  |  |  |
| Medical Nutrition Therapy Assessment | Nutrition Diagnosis and Intervention | `protein_goal` | Protein Goal (g/day) | `number` |  |  |  |
| Medical Nutrition Therapy Assessment | Nutrition Diagnosis and Intervention | `oral_supplement` | Oral Nutritional Supplement (type, amount/day) | `text` |  |  |  |
| Medical Nutrition Therapy Assessment | Nutrition Diagnosis and Intervention | `enteral_nutrition` | Enteral nutrition (tube feeding) initiated | `checkbox` |  |  |  |
| Medical Nutrition Therapy Assessment | Nutrition Diagnosis and Intervention | `parenteral_nutrition` | Parenteral nutrition (TPN/PPN) initiated | `checkbox` |  |  |  |
| Medical Nutrition Therapy Assessment | Nutrition Diagnosis and Intervention | `nutrition_intervention` | Dietary Counseling / Education Provided | `textarea` |  |  |  |

### Renal Diet — `renal_diet_counseling_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Renal Diet Counseling | CKD Context | `ckd_stage` | CKD Stage | `select` |  |  |  |
| Renal Diet Counseling | CKD Context | `egfr` | Current eGFR (mL/min/1.73m²) | `number` |  |  |  |
| Renal Diet Counseling | Key Nutrient Assessment | `potassium` | Serum Potassium (mEq/L) | `number` |  |  |  |
| Renal Diet Counseling | Key Nutrient Assessment | `potassium_restrict` | Potassium restriction counseled (goal <2000 mg/day if >5.0) | `checkbox` |  |  |  |
| Renal Diet Counseling | Key Nutrient Assessment | `phosphorus` | Serum Phosphorus (mg/dL) | `number` |  |  |  |
| Renal Diet Counseling | Key Nutrient Assessment | `phosphorus_restrict` | Phosphorus restriction counseled (<800-1000 mg/day) | `checkbox` |  |  |  |
| Renal Diet Counseling | Key Nutrient Assessment | `phosphate_binders` | Phosphate binders prescribed (take with meals) | `checkbox` |  |  |  |
| Renal Diet Counseling | Key Nutrient Assessment | `sodium_restrict` | Sodium restriction counseled (<2000 mg/day) | `checkbox` |  |  |  |
| Renal Diet Counseling | Key Nutrient Assessment | `fluid_restrict` | Fluid restriction (dialysis patients — interdialytic weight gain goal <2 kg) | `checkbox` |  |  |  |
| Renal Diet Counseling | Key Nutrient Assessment | `protein_goal` | Protein Goal | `select` |  |  |  |
| Renal Diet Counseling | Counseling Provided | `education_topics` | Counseling Topics Covered (reading food labels, dining out, fluid management) | `textarea` |  |  |  |
| Renal Diet Counseling | Counseling Provided | `renal_dietitian_referral` | Renal dietitian follow-up scheduled | `checkbox` |  |  |  |

## Documents

### Consult Notes — `consult_note_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `APPEALS`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `DOCUMENTS`, `DOCUMENT_ACCESS_LOG`, `DOCUMENT_FOLDERS`, `PATIENTS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Consult Letter (ECW-DOC-11) | Consultation Information | `consultType` | Consult Type | `select` |  |  |  |
| Consult Letter (ECW-DOC-11) | Consultation Information | `referringProvider` | Referring Provider | `text` | Y |  |  |
| Consult Letter (ECW-DOC-11) | Consultation Information | `referringProviderFax` | Referring Provider Fax | `tel` |  |  |  |
| Consult Letter (ECW-DOC-11) | Consultation Information | `consultSpecialty` | Consulting Specialty | `text` |  |  |  |
| Consult Letter (ECW-DOC-11) | Consultation Information | `consultDate` | Consult Date | `date` |  |  |  |
| Consult Letter (ECW-DOC-11) | Consultation Information | `urgency` | Urgency | `select` |  |  |  |
| Consult Letter (ECW-DOC-11) | Consult Note Content (Generated from Chart) | `reasonForConsult` | Reason for Consultation | `textarea` |  |  |  |
| Consult Letter (ECW-DOC-11) | Consult Note Content (Generated from Chart) | `historyFromChart` | Relevant History (from chart) | `textarea` |  |  |  |
| Consult Letter (ECW-DOC-11) | Consult Note Content (Generated from Chart) | `physicalExamFindings` | Exam Findings at Consult | `textarea` |  |  |  |
| Consult Letter (ECW-DOC-11) | Consult Note Content (Generated from Chart) | `assessment` | Assessment & Impression | `textarea` |  |  |  |
| Consult Letter (ECW-DOC-11) | Consult Note Content (Generated from Chart) | `recommendations` | Recommendations to Referring Provider | `textarea` |  |  |  |
| Consult Letter (ECW-DOC-11) | Consult Note Content (Generated from Chart) | `followUpPlan` | Follow-Up Plan | `textarea` |  |  |  |
| Consult Letter (ECW-DOC-11) | Letter Delivery & Filing | `generationStatus` | Letter Generation Status | `select` |  |  |  |
| Consult Letter (ECW-DOC-11) | Letter Delivery & Filing | `deliveryMethod` | Send Via | `select` |  |  |  |
| Consult Letter (ECW-DOC-11) | Letter Delivery & Filing | `sentDate` | Sent Date | `date` |  |  |  |
| Consult Letter (ECW-DOC-11) | Letter Delivery & Filing | `filedToChart` | Filed to Patient Chart | `checkbox` |  |  |  |

### Document Folders — `document_folders_cf`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `DOCUMENTS`, `DOCUMENT_FOLDERS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Folder | Folder Details | `id` | Folder ID | `text` |  |  |  |
| Folder | Folder Details | `practiceId` | Practice ID | `text` | Y |  |  |
| Folder | Folder Details | `name` | Name (no slashes, max 255 chars) | `text` | Y |  |  |
| Folder | Folder Details | `parentId` | Parent Folder ID (optional) | `text` |  |  |  |
| Folder | Folder Details | `fullPath` | Full Path | `text` |  |  |  |
| Folder | Folder Details | `depth` | Depth | `number` |  |  |  |
| Folder | Folder Details | `createdAt` | Created At | `text` |  |  |  |
| Folder | Folder Details | `updatedAt` | Updated At | `text` |  |  |  |
