---
title: "PracticeForceOneCFTrackingFields30"
---

# CF Tracking — Field-Level Detail (part 30 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Sports Medicine**, **Specialty**, **Reference**, **Behavioral Health**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Sports Medicine

### Pre-Participation PE — `preparticipation_physical_cf`

Screen: 1 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Cardiovascular History Screening (AHA 14 Elements) | `exertional_chest_pain` | 1. Exertional chest pain / discomfort | `checkbox` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Cardiovascular History Screening (AHA 14 Elements) | `unexplained_syncope` | 2. Unexplained syncope / near-syncope (during or after exercise) | `checkbox` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Cardiovascular History Screening (AHA 14 Elements) | `exertional_dyspnea` | 3. Excessive exertional dyspnea / fatigue (unexplained) | `checkbox` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Cardiovascular History Screening (AHA 14 Elements) | `murmur` | 4. Prior recognition of a heart murmur | `checkbox` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Cardiovascular History Screening (AHA 14 Elements) | `elevated_bp` | 5. Elevated systemic blood pressure | `checkbox` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Cardiovascular History Screening (AHA 14 Elements) | `prior_restriction` | 6. Prior restriction from sports participation for a cardiac reason | `checkbox` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Cardiovascular History Screening (AHA 14 Elements) | `prior_cardiac_workup` | 7. Prior testing (ECG, echocardiogram, stress test) for a cardiac reason | `checkbox` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Cardiovascular History Screening (AHA 14 Elements) | `premature_scd_family` | 8. Premature SCD in relative <50 yr (↑ risk genetic cardiomyopathy) | `checkbox` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Cardiovascular History Screening (AHA 14 Elements) | `disability_relative` | 9. Disability from heart disease in close relative <50 yr | `checkbox` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Cardiovascular History Screening (AHA 14 Elements) | `known_cardiac_condition` | 10. Knowledge of family cardiac condition (LQTS / Brugada / Marfan / HCM / DCM) | `checkbox` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Physical Examination | `bp` | Blood Pressure (both arms) | `text` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Physical Examination | `heart_rate` | Heart Rate (bpm) | `number` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Physical Examination | `murmur_type` | Cardiac Auscultation Finding | `select` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Physical Examination | `marfan_features` | Marfan syndrome features (tall, arm span > height, high arch palate, pectus, ectopia lentis) | `checkbox` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Clearance Decision | `ecg_ordered` | ECG ordered (if AHA element positive, murmur, family history SCD) | `checkbox` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Clearance Decision | `echo_ordered` | Echocardiogram ordered (murmur + dyspnea, or Marfan features) | `checkbox` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Clearance Decision | `clearance_status` | Clearance Status | `select` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Clearance Decision | `activity_restriction` | Activity Restrictions (if any) | `text` |  |  |  |
| Pre-Participation Physical Examination (AHA 14-Element History + Exam) | Clearance Decision | `notes` | Notes / Other Findings | `textarea` |  |  |  |

### Shoulder Instability — `shoulder_instability_cf`

Screen: 1 page(s) · 4 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Shoulder Instability Evaluation | Dislocation History | `dislocation_count` | Number of Dislocations (lifetime) | `number` |  |  |  |
| Shoulder Instability Evaluation | Dislocation History | `direction` | Direction of Instability | `select` |  |  |  |
| Shoulder Instability Evaluation | Dislocation History | `initial_age` | Age at First Dislocation | `number` |  |  |  |
| Shoulder Instability Evaluation | Physical Examination | `apprehension_sign` | Apprehension sign positive (anterior at 90° abduction + ER) | `checkbox` |  |  |  |
| Shoulder Instability Evaluation | Physical Examination | `relocation_test` | Relocation test positive (apprehension relieved by posterior force) | `checkbox` |  |  |  |
| Shoulder Instability Evaluation | Physical Examination | `sulcus_sign` | Sulcus sign positive (MDI — inferior laxity) | `checkbox` |  |  |  |
| Shoulder Instability Evaluation | Physical Examination | `beighton_score` | Beighton Hypermobility Score (0-9; ≥5 = generalized laxity) | `number` |  |  |  |
| Shoulder Instability Evaluation | Imaging | `xray_bankart` | Bony Bankart (glenoid rim fracture on X-ray/CT) | `checkbox` |  |  |  |
| Shoulder Instability Evaluation | Imaging | `hill_sachs` | Hill-Sachs lesion on MRI / CT (>20% engaging = surgery) | `checkbox` |  |  |  |
| Shoulder Instability Evaluation | Imaging | `labral_tear` | Labral tear (Bankart / SLAP) on MRI arthrogram | `checkbox` |  |  |  |
| Shoulder Instability Evaluation | Treatment | `first_dislocation_rx` | Management Strategy | `select` |  |  |  |
| Shoulder Instability Evaluation | Treatment | `immobilization` | Immobilization Duration (after acute dislocation) | `text` |  |  |  |
| Shoulder Instability Evaluation | Treatment | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Sports Injury — `sports_medicine_injury_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sports Medicine Injury Evaluation | Injury Details | `injury_type` | Injury Type | `select` |  |  |  |
| Sports Medicine Injury Evaluation | Injury Details | `body_region` | Anatomic Region | `select` |  |  |  |
| Sports Medicine Injury Evaluation | Injury Details | `mechanism` | Mechanism of Injury | `text` |  |  |  |
| Sports Medicine Injury Evaluation | Injury Details | `days_since_injury` | Days Since Injury | `number` |  |  |  |
| Sports Medicine Injury Evaluation | Injury Details | `sport_activity` | Sport / Activity | `text` |  |  |  |
| Sports Medicine Injury Evaluation | Severity and Exam | `grade` | Injury Grade (if sprain/strain) | `select` |  |  |  |
| Sports Medicine Injury Evaluation | Severity and Exam | `mri_ordered` | MRI ordered | `checkbox` |  |  |  |
| Sports Medicine Injury Evaluation | Severity and Exam | `xray_done` | X-ray obtained | `checkbox` |  |  |  |
| Sports Medicine Injury Evaluation | Severity and Exam | `swelling` | Swelling / effusion present | `checkbox` |  |  |  |
| Sports Medicine Injury Evaluation | Treatment and Return-to-Play | `immediate_management` | Immediate Management | `select` |  |  |  |
| Sports Medicine Injury Evaluation | Treatment and Return-to-Play | `return_to_play_timeline` | Estimated Return-to-Play | `select` |  |  |  |
| Sports Medicine Injury Evaluation | Treatment and Return-to-Play | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Stress Fracture — `stress_fracture_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Stress Fracture / Stress Reaction Evaluation | History | `location` | Anatomic Location | `select` |  |  |  |
| Stress Fracture / Stress Reaction Evaluation | History | `training_error` | Training Error (sudden mileage increase, change in surface, new shoes) | `textarea` |  |  |  |
| Stress Fracture / Stress Reaction Evaluation | History | `female_athlete_triad` | Female athlete triad / RED-S risk factors (low energy availability, menstrual dysfunction) | `checkbox` |  |  |  |
| Stress Fracture / Stress Reaction Evaluation | Imaging Grade | `xray_result` | X-Ray Finding | `select` |  |  |  |
| Stress Fracture / Stress Reaction Evaluation | Imaging Grade | `mri_grade` | MRI Grade (Arendt & Griffiths) | `select` |  |  |  |
| Stress Fracture / Stress Reaction Evaluation | Treatment and Return to Activity | `nwb_crutches` | Non-weight-bearing / crutches (high-risk sites: femoral neck tension, navicular, Jones 5th MT) | `checkbox` |  |  |  |
| Stress Fracture / Stress Reaction Evaluation | Treatment and Return to Activity | `cam_boot` | CAM boot (low-risk sites with persistent pain) | `checkbox` |  |  |  |
| Stress Fracture / Stress Reaction Evaluation | Treatment and Return to Activity | `activity_restriction` | Activity Restriction Duration (weeks) | `text` |  |  |  |
| Stress Fracture / Stress Reaction Evaluation | Treatment and Return to Activity | `vit_d_calcium` | Vitamin D + calcium supplementation ordered | `checkbox` |  |  |  |
| Stress Fracture / Stress Reaction Evaluation | Treatment and Return to Activity | `surgical_consult` | Orthopedic / surgical consult (high-risk, tension side femoral neck, complete Jones) | `checkbox` |  |  |  |
| Stress Fracture / Stress Reaction Evaluation | Treatment and Return to Activity | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Tendinopathy / Overuse — `sports_medicine_overuse_tendinopathy_cf`

Screen: 1 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Overuse Injuries and Tendinopathy Management | Tendinopathy Diagnosis | `condition` | Overuse Condition | `select` |  |  |  |
| Overuse Injuries and Tendinopathy Management | Tendinopathy Diagnosis | `visa_score` | VISA Score (condition-specific severity: VISA-P for patellar 0-100; VISA-A for Achilles 0-100; 100 = asymptomatic athlete) | `number` |  |  |  |
| Overuse Injuries and Tendinopathy Management | Tendinopathy Diagnosis | `duration` | Duration of Symptoms | `select` |  |  |  |
| Overuse Injuries and Tendinopathy Management | Rehabilitation Treatment | `loading_protocol` | Tendon Loading Protocol | `select` |  |  |  |
| Overuse Injuries and Tendinopathy Management | Rehabilitation Treatment | `injection` | Injection Therapy | `select` |  |  |  |
| Overuse Injuries and Tendinopathy Management | Rehabilitation Treatment | `adjuncts` | Adjunct Modalities (ESWT — extracorporeal shockwave therapy; TENS; acupuncture; NSAIDs — short-term acute phase only; education on load management) | `text` |  |  |  |

## Specialty

### Allergy / Immunology — `allergy_immunology_eval_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Allergy & Immunology Evaluation | Patient & Chief Complaint | `patientId` | Patient | `typeahead` | Y |  |  |
| Allergy & Immunology Evaluation | Patient & Chief Complaint | `visitDate` | Visit Date | `date` | Y |  |  |
| Allergy & Immunology Evaluation | Patient & Chief Complaint | `provider` | Provider | `typeahead` | Y |  |  |
| Allergy & Immunology Evaluation | Patient & Chief Complaint | `chiefComplaint` | Chief Complaint / Evaluation Type | `select` | Y |  |  |
| Allergy & Immunology Evaluation | Patient & Chief Complaint | `visitType` | Visit Type | `select` | Y |  |  |
| Allergy & Immunology Evaluation | Allergy Testing | `skinTestsPerformed` | Skin prick testing performed today | `checkbox` |  |  |  |
| Allergy & Immunology Evaluation | Allergy Testing | `skinTestResults` | Skin Test / IgE Results | `textarea` |  |  |  |
| Allergy & Immunology Evaluation | Allergy Testing | `challengeResult` | Oral Food/Drug Challenge Result (if performed) | `select` |  |  |  |
| Allergy & Immunology Evaluation | Treatment Plan | `avoidanceInstructions` | Allergen Avoidance / Environmental Control | `textarea` |  |  |  |
| Allergy & Immunology Evaluation | Treatment Plan | `pharmacotherapy` | Pharmacotherapy | `textarea` | Y |  |  |
| Allergy & Immunology Evaluation | Treatment Plan | `immunotherapyPlan` | Allergen Immunotherapy (AIT) Plan | `select` | Y |  |  |
| Allergy & Immunology Evaluation | Treatment Plan | `aiPlan` | Assessment & Plan | `textarea` | Y |  |  |

### Anticoagulation Clinic — `anticoagulation_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Anticoagulation Management Visit | Patient & Indication | `patientId` | Patient | `typeahead` | Y |  |  |
| Anticoagulation Management Visit | Patient & Indication | `visitDate` | Visit Date | `date` | Y |  |  |
| Anticoagulation Management Visit | Patient & Indication | `provider` | Provider | `typeahead` | Y |  |  |
| Anticoagulation Management Visit | Patient & Indication | `anticoagulant` | Anticoagulant | `select` | Y |  |  |
| Anticoagulation Management Visit | Patient & Indication | `indication` | Indication | `select` | Y |  |  |
| Anticoagulation Management Visit | Patient & Indication | `targetInr` | Target INR Range (Warfarin) | `select` |  |  |  |
| Anticoagulation Management Visit | Current Lab Values | `inr` | INR (Warfarin patients) | `number` |  |  |  |
| Anticoagulation Management Visit | Current Lab Values | `inrDate` | INR Date | `date` |  |  |  |
| Anticoagulation Management Visit | Current Lab Values | `daysSinceLastInr` | Days Since Last INR | `number` |  |  |  |
| Anticoagulation Management Visit | Current Lab Values | `inrTrend` | INR Trend | `select` |  |  |  |
| Anticoagulation Management Visit | Current Lab Values | `bleedingSymptoms` | Bleeding / Clotting Symptoms | `select` | Y |  |  |
| Anticoagulation Management Visit | Current Lab Values | `medicationChanges` | Medication Changes / Interactions | `textarea` | Y |  |  |
| Anticoagulation Management Visit | Dose Adjustment & Plan | `currentDose` | Current Warfarin Dose | `text` | Y |  |  |
| Anticoagulation Management Visit | Dose Adjustment & Plan | `doseAdjustment` | Dose Adjustment / Plan | `textarea` | Y |  |  |

### Cardiology Visit — `cardiology_visit_cf`

Screen: 1 page(s) · 4 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiology Follow-up | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| Cardiology Follow-up | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| Cardiology Follow-up | Patient & Diagnosis | `provider` | Provider | `typeahead` | Y |  |  |
| Cardiology Follow-up | Patient & Diagnosis | `primaryDx` | Primary Cardiology Diagnosis | `text` | Y |  |  |
| Cardiology Follow-up | Patient & Diagnosis | `visitType` | Visit Type | `select` | Y |  |  |
| Cardiology Follow-up | Symptoms & Functional Status | `nyhClass` | NYHA Functional Class | `select` | Y |  |  |
| Cardiology Follow-up | Symptoms & Functional Status | `symptoms` | Cardiac Symptoms | `textarea` | Y |  |  |
| Cardiology Follow-up | Exam & Diagnostic Studies | `bpAtVisit` | Blood Pressure | `text` | Y |  |  |
| Cardiology Follow-up | Exam & Diagnostic Studies | `hrAtVisit` | Heart Rate (bpm) | `number` |  |  |  |
| Cardiology Follow-up | Exam & Diagnostic Studies | `rhythmAtVisit` | Rhythm at Visit | `select` | Y |  |  |
| Cardiology Follow-up | Exam & Diagnostic Studies | `cardiacExam` | Cardiac Exam | `textarea` | Y |  |  |
| Cardiology Follow-up | Exam & Diagnostic Studies | `recentStudies` | Recent Studies / Device Data | `textarea` | Y |  |  |
| Cardiology Follow-up | Exam & Diagnostic Studies | `icdInterogate` | Device Interrogation (if applicable) | `textarea` |  |  |  |
| Cardiology Follow-up | Medications & Plan | `hfMeds` | Guideline-Directed Medical Therapy (GDMT) | `textarea` | Y |  |  |
| Cardiology Follow-up | Medications & Plan | `cardPlan` | Assessment & Plan | `textarea` | Y |  |  |

### Dermatology Follow-up — `dermatology_followup_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dermatology Follow-up | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| Dermatology Follow-up | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| Dermatology Follow-up | Patient & Diagnosis | `provider` | Provider | `typeahead` | Y |  |  |
| Dermatology Follow-up | Patient & Diagnosis | `primaryDx` | Primary Diagnosis | `text` | Y |  |  |
| Dermatology Follow-up | Patient & Diagnosis | `visitType` | Visit Type | `select` | Y |  |  |
| Dermatology Follow-up | Skin Exam | `bodyAreaAffected` | Body Areas Affected | `text` | Y |  |  |
| Dermatology Follow-up | Skin Exam | `bsa` | BSA (Body Surface Area Affected) | `select` | Y |  |  |
| Dermatology Follow-up | Skin Exam | `pasi` | PASI Score (psoriasis) | `number` |  |  |  |
| Dermatology Follow-up | Skin Exam | `dlqi` | DLQI Score (quality of life impact) | `number` |  |  |  |
| Dermatology Follow-up | Skin Exam | `lesionDescr` | Lesion Description | `textarea` | Y |  |  |
| Dermatology Follow-up | Skin Exam | `suspiciousLesions` | Suspicious Lesions / Biopsy | `textarea` |  |  |  |
| Dermatology Follow-up | Treatment | `currentTreatment` | Current Treatment | `textarea` | Y |  |  |
| Dermatology Follow-up | Treatment | `treatmentResponse` | Treatment Response | `select` | Y |  |  |
| Dermatology Follow-up | Treatment | `planChanges` | Plan / Changes | `textarea` | Y |  |  |

### ENT / Otolaryngology — `otolaryngology_visit_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ENT / Otolaryngology Visit | Patient & Complaint | `patientId` | Patient | `typeahead` | Y |  |  |
| ENT / Otolaryngology Visit | Patient & Complaint | `visitDate` | Visit Date | `date` | Y |  |  |
| ENT / Otolaryngology Visit | Patient & Complaint | `provider` | Provider | `typeahead` | Y |  |  |
| ENT / Otolaryngology Visit | Patient & Complaint | `chiefComplaint` | Chief Complaint | `select` | Y |  |  |
| ENT / Otolaryngology Visit | Head & Neck Exam | `earExam` | Ear Exam | `textarea` | Y |  |  |
| ENT / Otolaryngology Visit | Head & Neck Exam | `noseExam` | Nose/Sinus Exam | `textarea` | Y |  |  |
| ENT / Otolaryngology Visit | Head & Neck Exam | `throatExam` | Throat / Oral Cavity | `textarea` | Y |  |  |
| ENT / Otolaryngology Visit | Head & Neck Exam | `nasoendoscopy` | Flexible Nasolaryngoscopy (if performed) | `textarea` |  |  |  |
| ENT / Otolaryngology Visit | Assessment & Plan | `entPlan` | Assessment & Plan | `textarea` | Y |  |  |

### Endocrinology Visit — `endocrinology_visit_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Endocrinology Follow-up | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| Endocrinology Follow-up | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| Endocrinology Follow-up | Patient & Diagnosis | `provider` | Provider | `typeahead` | Y |  |  |
| Endocrinology Follow-up | Patient & Diagnosis | `primaryDx` | Primary Endocrine Diagnosis | `select` | Y |  |  |
| Endocrinology Follow-up | Patient & Diagnosis | `visitType` | Visit Type | `select` | Y |  |  |
| Endocrinology Follow-up | Key Labs (Endocrine) | `a1c` | A1C (%) | `number` |  |  |  |
| Endocrinology Follow-up | Key Labs (Endocrine) | `a1cTrend` | A1C Trend vs Last Visit | `select` |  |  |  |
| Endocrinology Follow-up | Key Labs (Endocrine) | `glucoseToday` | Fasting Glucose Today (mg/dL) | `number` |  |  |  |
| Endocrinology Follow-up | Key Labs (Endocrine) | `tsh` | TSH (mIU/L) | `number` |  |  |  |
| Endocrinology Follow-up | Key Labs (Endocrine) | `freeT4` | Free T4 (ng/dL) | `number` |  |  |  |
| Endocrinology Follow-up | Key Labs (Endocrine) | `lipidSummary` | Lipids (summary) | `text` |  |  |  |
| Endocrinology Follow-up | Key Labs (Endocrine) | `uacr` | UACR (mg/g, DM nephropathy screen) | `number` |  |  |  |
| Endocrinology Follow-up | Key Labs (Endocrine) | `vitD` | Vitamin D 25-OH (ng/mL) | `number` |  |  |  |
| Endocrinology Follow-up | Key Labs (Endocrine) | `dexaResult` | DEXA Result (T-score / Z-score) | `text` |  |  |  |
| Endocrinology Follow-up | Assessment & Plan | `glucoseData` | CGM / Glucose Log Data | `textarea` |  |  |  |
| Endocrinology Follow-up | Assessment & Plan | `endoPlan` | Plan / Medication Changes | `textarea` | Y |  |  |

### Gastroenterology Visit — `gastroenterology_visit_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Gastroenterology Follow-up | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| Gastroenterology Follow-up | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| Gastroenterology Follow-up | Patient & Diagnosis | `provider` | Provider | `typeahead` | Y |  |  |
| Gastroenterology Follow-up | Patient & Diagnosis | `primaryDx` | Primary GI Diagnosis | `text` | Y |  |  |
| Gastroenterology Follow-up | Patient & Diagnosis | `visitType` | Visit Type | `select` | Y |  |  |
| Gastroenterology Follow-up | Symptom Assessment | `symptoms` | Current GI Symptoms | `textarea` | Y |  |  |
| Gastroenterology Follow-up | Symptom Assessment | `diseaseActivity` | Disease Activity Assessment | `select` | Y |  |  |
| Gastroenterology Follow-up | Symptom Assessment | `caiHbiScore` | Disease Activity Score (Harvey-Bradshaw / Simple CAI / etc.) | `text` |  |  |  |
| Gastroenterology Follow-up | Labs & Plan | `labsToday` | Key Labs / Biomarkers | `textarea` | Y |  |  |
| Gastroenterology Follow-up | Labs & Plan | `currentMeds` | Current GI Medications | `textarea` | Y |  |  |
| Gastroenterology Follow-up | Labs & Plan | `endoscopyPlan` | Next Endoscopy / Imaging | `text` | Y |  |  |
| Gastroenterology Follow-up | Labs & Plan | `giPlan` | Assessment & Plan | `textarea` | Y |  |  |

### Hematology / Oncology — `hematology_oncology_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hematology / Oncology Follow-up | Patient & Disease | `patientId` | Patient | `typeahead` | Y |  |  |
| Hematology / Oncology Follow-up | Patient & Disease | `visitDate` | Visit Date | `date` | Y |  |  |
| Hematology / Oncology Follow-up | Patient & Disease | `provider` | Provider | `typeahead` | Y |  |  |
| Hematology / Oncology Follow-up | Patient & Disease | `cancerDx` | Cancer / Hematologic Diagnosis | `text` | Y |  |  |
| Hematology / Oncology Follow-up | Patient & Disease | `visitType` | Visit Type | `select` | Y |  |  |
| Hematology / Oncology Follow-up | Patient & Disease | `ecogPs` | ECOG Performance Status | `select` | Y |  |  |
| Hematology / Oncology Follow-up | Labs & Tumor Markers | `cbcSummary` | CBC Summary | `text` | Y |  |  |
| Hematology / Oncology Follow-up | Labs & Tumor Markers | `tumorMarkers` | Tumor Markers / Disease-Specific Labs | `textarea` |  |  |  |
| Hematology / Oncology Follow-up | Labs & Tumor Markers | `imagingSummary` | Recent Imaging / Disease Assessment | `textarea` | Y |  |  |
| Hematology / Oncology Follow-up | Treatment & Plan | `currentTreatment` | Current Treatment | `textarea` | Y |  |  |
| Hematology / Oncology Follow-up | Treatment & Plan | `sideEffects` | Treatment Side Effects / Toxicity | `textarea` | Y |  |  |
| Hematology / Oncology Follow-up | Treatment & Plan | `oncoPlan` | Assessment & Plan | `textarea` | Y |  |  |

### Infectious Disease — `infectious_disease_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Infectious Disease Consultation | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| Infectious Disease Consultation | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| Infectious Disease Consultation | Patient & Diagnosis | `provider` | Provider | `typeahead` | Y |  |  |
| Infectious Disease Consultation | Patient & Diagnosis | `primaryDx` | Primary ID Diagnosis | `select` | Y |  |  |
| Infectious Disease Consultation | Patient & Diagnosis | `visitType` | Visit Type | `select` | Y |  |  |
| Infectious Disease Consultation | HIV Labs & ART (if applicable) | `hivStatus` | HIV Status / Stage | `select` | Y |  |  |
| Infectious Disease Consultation | HIV Labs & ART (if applicable) | `viralLoad` | HIV Viral Load (copies/mL) | `text` |  |  |  |
| Infectious Disease Consultation | HIV Labs & ART (if applicable) | `cd4Count` | CD4 Count (cells/uL) | `number` |  |  |  |
| Infectious Disease Consultation | HIV Labs & ART (if applicable) | `cd4Pct` | CD4 Percentage (%) | `number` |  |  |  |
| Infectious Disease Consultation | HIV Labs & ART (if applicable) | `artRegimen` | Current ART Regimen | `textarea` |  |  |  |
| Infectious Disease Consultation | HIV Labs & ART (if applicable) | `hivScreening` | HIV Preventive Care Screenings | `textarea` |  |  |  |
| Infectious Disease Consultation | Assessment & Plan | `idPlan` | Assessment & Plan | `textarea` | Y |  |  |

### Nephrology / CKD — `nephrology_visit_cf`

Screen: 1 page(s) · 3 section(s) · 20 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Nephrology / CKD Follow-up | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Nephrology / CKD Follow-up | Patient | `visitDate` | Visit Date | `date` | Y |  |  |
| Nephrology / CKD Follow-up | Patient | `provider` | Provider | `typeahead` | Y |  |  |
| Nephrology / CKD Follow-up | Patient | `primaryDx` | Primary Nephrology Diagnosis | `select` | Y |  |  |
| Nephrology / CKD Follow-up | Patient | `visitType` | Visit Type | `select` | Y |  |  |
| Nephrology / CKD Follow-up | Labs & Kidney Function | `gfr` | eGFR (mL/min/1.73m2) | `number` | Y |  |  |
| Nephrology / CKD Follow-up | Labs & Kidney Function | `creatinine` | Serum Creatinine (mg/dL) | `number` |  |  |  |
| Nephrology / CKD Follow-up | Labs & Kidney Function | `bun` | BUN (mg/dL) | `number` |  |  |  |
| Nephrology / CKD Follow-up | Labs & Kidney Function | `uacr` | Urine Albumin:Creatinine Ratio (UACR, mg/g) | `number` |  |  |  |
| Nephrology / CKD Follow-up | Labs & Kidney Function | `potassium` | Potassium (mEq/L) | `number` |  |  |  |
| Nephrology / CKD Follow-up | Labs & Kidney Function | `bicarb` | Bicarbonate (mEq/L) | `number` |  |  |  |
| Nephrology / CKD Follow-up | Labs & Kidney Function | `phos` | Phosphorus (mg/dL) | `number` |  |  |  |
| Nephrology / CKD Follow-up | Labs & Kidney Function | `pth` | PTH (pg/mL) | `number` |  |  |  |
| Nephrology / CKD Follow-up | Labs & Kidney Function | `hemoglobin` | Hemoglobin (g/dL) | `number` |  |  |  |
| Nephrology / CKD Follow-up | Labs & Kidney Function | `labTrend` | Kidney Function Trend | `select` | Y |  |  |
| Nephrology / CKD Follow-up | CKD Management | `bpControl` | Blood Pressure Control | `select` | Y |  |  |
| Nephrology / CKD Follow-up | CKD Management | `ckdMedications` | CKD-Targeted Medications | `textarea` | Y |  |  |
| Nephrology / CKD Follow-up | CKD Management | `dietCounseling` | Dietary Counseling / Restrictions | `textarea` |  |  |  |
| Nephrology / CKD Follow-up | CKD Management | `dialysisPlanning` | Dialysis / Transplant Planning | `textarea` |  |  |  |
| Nephrology / CKD Follow-up | CKD Management | `nextVisit` | Next Visit | `date` |  |  |  |

### Neurology Visit — `neurology_visit_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Neurology Follow-up | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| Neurology Follow-up | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| Neurology Follow-up | Patient & Diagnosis | `provider` | Provider | `typeahead` | Y |  |  |
| Neurology Follow-up | Patient & Diagnosis | `primaryDx` | Primary Neurologic Diagnosis | `text` | Y |  |  |
| Neurology Follow-up | Patient & Diagnosis | `visitType` | Visit Type | `select` | Y |  |  |
| Neurology Follow-up | Neurological Exam | `cognitiveScreen` | Cognitive Screen | `text` | Y |  |  |
| Neurology Follow-up | Neurological Exam | `neuroExam` | Neurological Exam Findings | `textarea` | Y |  |  |
| Neurology Follow-up | Neurological Exam | `updrsScore` | Disease-Specific Score (UPDRS / EDSS / HIT-6 / etc.) | `text` |  |  |  |
| Neurology Follow-up | Medications & Plan | `currentMeds` | Current Neurologic Medications | `textarea` | Y |  |  |
| Neurology Follow-up | Medications & Plan | `medicationChanges` | Medication Changes Today | `textarea` |  |  |  |
| Neurology Follow-up | Medications & Plan | `neuroPlan` | Assessment & Plan | `textarea` | Y |  |  |

### Ophthalmology Visit — `ophthalmology_visit_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Ophthalmology Exam | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Ophthalmology Exam | Patient & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| Ophthalmology Exam | Patient & Visit | `provider` | Provider | `typeahead` | Y |  |  |
| Ophthalmology Exam | Patient & Visit | `chiefComplaint` | Chief Complaint / Visit Type | `select` | Y |  |  |
| Ophthalmology Exam | Visual Acuity & Refraction | `vaODsc` | VA OD (Right eye) — Uncorrected | `text` | Y |  |  |
| Ophthalmology Exam | Visual Acuity & Refraction | `vaOSsc` | VA OS (Left eye) — Uncorrected | `text` | Y |  |  |
| Ophthalmology Exam | Visual Acuity & Refraction | `vaODcc` | VA OD — Corrected (best corrected) | `text` |  |  |  |
| Ophthalmology Exam | Visual Acuity & Refraction | `vaOScc` | VA OS — Corrected | `text` |  |  |  |
| Ophthalmology Exam | Visual Acuity & Refraction | `iopOD` | IOP OD (mmHg) | `number` |  |  |  |
| Ophthalmology Exam | Visual Acuity & Refraction | `iopOS` | IOP OS (mmHg) | `number` |  |  |  |
| Ophthalmology Exam | Visual Acuity & Refraction | `pupilsPerrla` | Pupils PERRLA, no APD | `checkbox` |  |  |  |
| Ophthalmology Exam | Slit Lamp & Fundus Exam | `anteriorSegment` | Anterior Segment (Slit Lamp) | `textarea` | Y |  |  |
| Ophthalmology Exam | Slit Lamp & Fundus Exam | `posteriorSegment` | Posterior Segment (Dilated Exam) | `textarea` | Y |  |  |
| Ophthalmology Exam | Slit Lamp & Fundus Exam | `diabeticRetina` | Diabetic Retinopathy Level (if applicable) | `select` | Y |  |  |
| Ophthalmology Exam | Slit Lamp & Fundus Exam | `glaucomaStatus` | Glaucoma / IOP Status | `select` | Y |  |  |
| Ophthalmology Exam | Assessment & Plan | `ophPlan` | Assessment & Plan | `textarea` | Y |  |  |

### Orthopedic Visit — `orthopedic_visit_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Orthopedic Surgery Follow-up | Patient & Procedure | `patientId` | Patient | `typeahead` | Y |  |  |
| Orthopedic Surgery Follow-up | Patient & Procedure | `visitDate` | Visit Date | `date` | Y |  |  |
| Orthopedic Surgery Follow-up | Patient & Procedure | `provider` | Provider | `typeahead` | Y |  |  |
| Orthopedic Surgery Follow-up | Patient & Procedure | `diagnosisOrProcedure` | Diagnosis / Procedure | `text` | Y |  |  |
| Orthopedic Surgery Follow-up | Patient & Procedure | `visitType` | Visit Type | `select` | Y |  |  |
| Orthopedic Surgery Follow-up | Patient & Procedure | `surgeryDate` | Surgery Date (if applicable) | `date` |  |  |  |
| Orthopedic Surgery Follow-up | Musculoskeletal Exam | `pain` | Pain Score (0-10) | `select` | Y |  |  |
| Orthopedic Surgery Follow-up | Musculoskeletal Exam | `functionalStatus` | Functional Status / Activity | `textarea` | Y |  |  |
| Orthopedic Surgery Follow-up | Musculoskeletal Exam | `woundStatus` | Wound / Incision Status | `select` | Y |  |  |
| Orthopedic Surgery Follow-up | Musculoskeletal Exam | `xrayFindings` | X-ray / Imaging Findings | `textarea` | Y |  |  |
| Orthopedic Surgery Follow-up | Plan | `weightBearing` | Weight-Bearing Status | `select` | Y |  |  |
| Orthopedic Surgery Follow-up | Plan | `therapyPlan` | PT/OT Plan | `text` | Y |  |  |
| Orthopedic Surgery Follow-up | Plan | `medications` | Pain / Medication Plan | `text` |  |  |  |
| Orthopedic Surgery Follow-up | Plan | `dvtScreen` | DVT Prophylaxis / Screen | `select` |  |  |  |
| Orthopedic Surgery Follow-up | Plan | `nextVisit` | Next Follow-up | `date` |  |  |  |

### PM&R Evaluation — `pm_rehabilitation_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| PM&R Evaluation | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| PM&R Evaluation | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| PM&R Evaluation | Patient & Diagnosis | `provider` | Provider | `typeahead` | Y |  |  |
| PM&R Evaluation | Patient & Diagnosis | `primaryDx` | Primary Diagnosis / Condition | `text` | Y |  |  |
| PM&R Evaluation | Patient & Diagnosis | `visitType` | Visit Type | `select` | Y |  |  |
| PM&R Evaluation | Functional Status | `fimScore` | FIM Score (Functional Independence Measure) | `text` | Y |  |  |
| PM&R Evaluation | Functional Status | `mobilityStatus` | Mobility Status | `select` | Y |  |  |
| PM&R Evaluation | Functional Status | `adlStatus` | ADL Status | `textarea` | Y |  |  |
| PM&R Evaluation | Rehabilitation Plan | `rehabilitationGoals` | Rehabilitation Goals | `textarea` | Y |  |  |
| PM&R Evaluation | Rehabilitation Plan | `therapyPrescription` | Therapy Prescription | `textarea` | Y |  |  |
| PM&R Evaluation | Rehabilitation Plan | `equipmentNeeds` | Equipment / Home Modifications | `textarea` |  |  |  |
| PM&R Evaluation | Rehabilitation Plan | `projectedDischarge` | Projected Discharge Setting / Date | `text` | Y |  |  |

### Pulmonology Visit — `pulmonology_visit_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pulmonology Follow-up | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| Pulmonology Follow-up | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| Pulmonology Follow-up | Patient & Diagnosis | `provider` | Provider | `typeahead` | Y |  |  |
| Pulmonology Follow-up | Patient & Diagnosis | `primaryDx` | Primary Pulmonary Diagnosis | `select` | Y |  |  |
| Pulmonology Follow-up | Patient & Diagnosis | `visitType` | Visit Type | `select` | Y |  |  |
| Pulmonology Follow-up | Symptoms & PFT | `dyspneaScale` | mMRC Dyspnea Scale | `select` | Y |  |  |
| Pulmonology Follow-up | Symptoms & PFT | `catScore` | CAT Score (COPD Assessment Test, 0-40) | `number` |  |  |  |
| Pulmonology Follow-up | Symptoms & PFT | `exacerbationsLastYear` | COPD Exacerbations Past 12 Months | `number` |  |  |  |
| Pulmonology Follow-up | Symptoms & PFT | `symptoms` | Respiratory Symptoms | `textarea` | Y |  |  |
| Pulmonology Follow-up | Symptoms & PFT | `pftResult` | Most Recent PFT / Spirometry | `textarea` | Y |  |  |
| Pulmonology Follow-up | Medications & Plan | `inhalerRegimen` | Inhaler / Pulmonary Medications | `textarea` | Y |  |  |
| Pulmonology Follow-up | Medications & Plan | `oxygenStatus` | Supplemental Oxygen Status | `select` |  |  |  |
| Pulmonology Follow-up | Medications & Plan | `pulmPlan` | Assessment & Plan | `textarea` | Y |  |  |

### Rheumatology Visit — `rheumatology_visit_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Rheumatology Follow-up | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| Rheumatology Follow-up | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| Rheumatology Follow-up | Patient & Diagnosis | `provider` | Provider | `typeahead` | Y |  |  |
| Rheumatology Follow-up | Patient & Diagnosis | `primaryDx` | Primary Diagnosis | `text` | Y |  |  |
| Rheumatology Follow-up | Patient & Diagnosis | `diseaseOnset` | Disease Onset / Duration | `text` |  |  |  |
| Rheumatology Follow-up | Disease Activity | `dasScore` | Disease Activity Score (DAS-28 or equivalent) | `text` | Y |  |  |
| Rheumatology Follow-up | Disease Activity | `jointExam` | Joint Exam | `textarea` | Y |  |  |
| Rheumatology Follow-up | Disease Activity | `extraArticular` | Extra-articular Manifestations | `textarea` |  |  |  |
| Rheumatology Follow-up | Disease Activity | `patientGlobal` | Patient Global Assessment (0-10) | `select` | Y |  |  |
| Rheumatology Follow-up | Labs & Medications | `labsToday` | Key Lab Results | `textarea` | Y |  |  |
| Rheumatology Follow-up | Labs & Medications | `currentMeds` | Current Medications | `textarea` | Y |  |  |
| Rheumatology Follow-up | Labs & Medications | `immunizationsRheum` | Immunization Status (immunocompromised considerations) | `textarea` |  |  |  |
| Rheumatology Follow-up | Labs & Medications | `rheumPlan` | Assessment & Plan | `textarea` | Y |  |  |

### Transplant Follow-up — `transplant_followup_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Transplant Follow-up Visit | Patient & Transplant Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Transplant Follow-up Visit | Patient & Transplant Details | `visitDate` | Visit Date | `date` | Y |  |  |
| Transplant Follow-up Visit | Patient & Transplant Details | `provider` | Transplant Provider | `typeahead` | Y |  |  |
| Transplant Follow-up Visit | Patient & Transplant Details | `organType` | Transplanted Organ | `select` | Y |  |  |
| Transplant Follow-up Visit | Patient & Transplant Details | `transplantDate` | Transplant Date | `date` | Y |  |  |
| Transplant Follow-up Visit | Patient & Transplant Details | `visitContext` | Visit Context | `select` | Y |  |  |
| Transplant Follow-up Visit | Organ Function & Immunosuppression | `organFunction` | Organ Function Assessment | `textarea` | Y |  |  |
| Transplant Follow-up Visit | Organ Function & Immunosuppression | `immunosuppression` | Immunosuppression Regimen | `textarea` | Y |  |  |
| Transplant Follow-up Visit | Organ Function & Immunosuppression | `complications` | Post-transplant Complications / History | `textarea` | Y |  |  |
| Transplant Follow-up Visit | Plan & Monitoring | `nextVisit` | Next Transplant Clinic Visit | `date` |  |  |  |
| Transplant Follow-up Visit | Plan & Monitoring | `plan` | Assessment & Plan | `textarea` | Y |  |  |

### Urology Visit — `urology_visit_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Urology Follow-up | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| Urology Follow-up | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| Urology Follow-up | Patient & Diagnosis | `provider` | Provider | `typeahead` | Y |  |  |
| Urology Follow-up | Patient & Diagnosis | `primaryDx` | Primary Urology Diagnosis | `select` | Y |  |  |
| Urology Follow-up | Patient & Diagnosis | `visitType` | Visit Type | `select` | Y |  |  |
| Urology Follow-up | Urinary Symptoms | `ipssScore` | IPSS Score (BPH / voiding symptoms) | `select` | Y |  |  |
| Urology Follow-up | Urinary Symptoms | `symptoms` | Urinary Symptom Narrative | `textarea` | Y |  |  |
| Urology Follow-up | Labs & Plan | `psaToday` | PSA Today (ng/mL) | `number` |  |  |  |
| Urology Follow-up | Labs & Plan | `psaTrend` | PSA Trend | `select` |  |  |  |
| Urology Follow-up | Labs & Plan | `otherLabs` | Other Relevant Labs | `text` |  |  |  |
| Urology Follow-up | Labs & Plan | `currentMeds` | Current Urology Medications | `textarea` | Y |  |  |
| Urology Follow-up | Labs & Plan | `uroPlan` | Assessment & Plan | `textarea` | Y |  |  |

### Vascular Surgery — `vascular_surgery_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Vascular Surgery Follow-up | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| Vascular Surgery Follow-up | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| Vascular Surgery Follow-up | Patient & Diagnosis | `provider` | Provider | `typeahead` | Y |  |  |
| Vascular Surgery Follow-up | Patient & Diagnosis | `primaryDx` | Primary Vascular Diagnosis | `select` | Y |  |  |
| Vascular Surgery Follow-up | Patient & Diagnosis | `visitType` | Visit Type | `select` | Y |  |  |
| Vascular Surgery Follow-up | Vascular Exam & Studies | `pulses` | Peripheral Pulses | `textarea` | Y |  |  |
| Vascular Surgery Follow-up | Vascular Exam & Studies | `abi` | ABI (Ankle-Brachial Index) | `text` | Y |  |  |
| Vascular Surgery Follow-up | Vascular Exam & Studies | `duplex` | Duplex / Ultrasound Findings | `textarea` |  |  |  |
| Vascular Surgery Follow-up | Assessment & Plan | `walking` | Claudication / Walking Distance | `select` | Y |  |  |
| Vascular Surgery Follow-up | Assessment & Plan | `medications` | Vascular Medications | `textarea` | Y |  |  |
| Vascular Surgery Follow-up | Assessment & Plan | `vascPlan` | Assessment & Plan | `textarea` | Y |  |  |

## Reference

### CARC/RARC Codes — `reference_cf`

Screen: 2 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `CLAIMS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Claim Adjustment Reason Codes (CARC) | Filter | `refCategory` | Category | `select` |  |  |  |
| Claim Adjustment Reason Codes (CARC) | Code Detail | `refCode` | Code | `text` |  |  |  |
| Claim Adjustment Reason Codes (CARC) | Code Detail | `refDescription` | Description | `text` |  |  |  |
| Claim Adjustment Reason Codes (CARC) | Code Detail | `refGroup` | Group (CARC only) | `text` |  |  |  |
| Claim Adjustment Reason Codes (CARC) | Code Detail | `refCategoryDisplay` | Category | `text` |  |  |  |
| Remittance Advice Remark Codes (RARC) | RARC Detail | `rarcCode` | Code | `text` |  |  |  |
| Remittance Advice Remark Codes (RARC) | RARC Detail | `rarcDescription` | Description | `text` |  |  |  |
| Remittance Advice Remark Codes (RARC) | RARC Detail | `rarcCategoryDisplay` | Category | `text` |  |  |  |

### CPT Stats — `reference_cpt_stats`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CPT Reference Statistics | Statistics | `total` | Total Codes | `text` |  |  |  |
| CPT Reference Statistics | Statistics | `cptCount` | CPT Codes | `text` |  |  |  |
| CPT Reference Statistics | Statistics | `hcpcsCount` | HCPCS Codes | `text` |  |  |  |
| CPT Reference Statistics | Statistics | `active` | Active Codes | `text` |  |  |  |
| CPT Reference Statistics | Statistics | `lastUpdated` | Last Updated | `text` |  |  |  |

### CPT Stats — `reference_cpt_stats_cf`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CPT Code Statistics | Reference Table Summary | `cptTotal` | Total Codes | `number` |  |  |  |
| CPT Code Statistics | Reference Table Summary | `cptCptCount` | CPT Codes | `number` |  |  |  |
| CPT Code Statistics | Reference Table Summary | `cptHcpcsCount` | HCPCS Codes | `number` |  |  |  |
| CPT Code Statistics | Reference Table Summary | `cptActive` | Active Codes | `number` |  |  |  |
| CPT Code Statistics | Reference Table Summary | `cptLastUpdated` | Last Updated | `text` |  |  |  |

### CPT Stats — `REFERENCE_CPT_STATS`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CPT Code Statistics (read-only) | CPT / HCPCS Code Database Statistics (aggregate counts from cpt_codes table) | `rcptTotal` | Total Codes (read-only) | `text` |  |  |  |
| CPT Code Statistics (read-only) | CPT / HCPCS Code Database Statistics (aggregate counts from cpt_codes table) | `rcptCptCount` | CPT + LOCAL_DEMO Count (active; read-only) | `text` |  |  |  |
| CPT Code Statistics (read-only) | CPT / HCPCS Code Database Statistics (aggregate counts from cpt_codes table) | `rcptHcpcsCount` | HCPCS Count (active; read-only) | `text` |  |  |  |
| CPT Code Statistics (read-only) | CPT / HCPCS Code Database Statistics (aggregate counts from cpt_codes table) | `rcptActive` | Total Active Codes (read-only) | `text` |  |  |  |
| CPT Code Statistics (read-only) | CPT / HCPCS Code Database Statistics (aggregate counts from cpt_codes table) | `rcptLastUpdated` | Last Updated (ISO 8601; read-only) | `text` |  |  |  |

### Care Roles — `care_roles`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `CARE_ROLES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Care Roles | crListSection | `crId` | ID | `text` |  |  |  |
| Care Roles | crListSection | `crCode` | Code | `text` |  |  |  |
| Care Roles | crListSection | `crName` | Name | `text` |  |  |  |
| Care Roles | crListSection | `crDescription` | Description | `text` |  |  |  |

### Code Search — `reference_coding_search_cf`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `CHARGE_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Code Lookup | Search Parameters | `rcsQuery` | Search Query | `text` |  |  |  |
| Code Lookup | Search Parameters | `rcsType` | Code Type | `select` |  |  |  |
| Code Lookup | Search Parameters | `rcsPracticeId` | Practice ID (for charge-master match) | `text` |  |  |  |
| Code Lookup | Search Parameters | `rcsCategory` | Category Filter | `text` |  |  |  |
| Code Lookup | Search Parameters | `rcsBillable` | Billable Only | `select` |  |  |  |
| Code Lookup | Search Parameters | `rcsSoundsLike` | Sounds Like Search | `checkbox` |  |  |  |
| Code Lookup | Search Parameters | `rcsLimit` | Result Limit (1-100, default 40) | `number` |  |  |  |
| Code Lookup | Results | `rcsTotalResults` | Total Results | `number` |  |  |  |
| Code Lookup | Results | `rcsSourceNote` | Source Note | `text` |  |  |  |
| Code Lookup | Results | `rcsProcedureCodes` | Procedure Codes (JSON) | `textarea` |  |  |  |
| Code Lookup | Results | `rcsDiagnosisCodes` | Diagnosis Codes (JSON) | `textarea` |  |  |  |

### Code Search — `REFERENCE_CODING_SEARCH`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB BUILT · tables `CHARGE_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Code Result | Code | `rcsCode` | Code | `text` |  |  |  |
| Code Result | Code | `rcsDescription` | Description | `text` |  |  |  |
| Code Result | Code | `rcsCodeSystem` | Code System (CPT, ICD10, HCPCS, RxNorm) | `text` |  |  |  |
| Code Result | Code | `rcsIsActive` | Active | `checkbox` |  |  |  |
| Code Result | Code | `rcsFee` | Practice Fee (if practiceId provided) | `text` |  |  |  |

### ICD-10 Stats — `reference_icd10_stats_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ICD-10 Code Statistics | Reference Table Summary | `icd10Total` | Total Codes | `number` |  |  |  |
| ICD-10 Code Statistics | Reference Table Summary | `icd10Active` | Active Codes | `number` |  |  |  |
| ICD-10 Code Statistics | Reference Table Summary | `icd10Billable` | Billable Codes | `number` |  |  |  |
| ICD-10 Code Statistics | Reference Table Summary | `icd10LastUpdated` | Last Updated | `text` |  |  |  |

### ICD-10 Stats — `REFERENCE_ICD10_STATS`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ICD-10 Code Statistics (read-only) | ICD-10 Code Database Statistics (aggregate counts from icd10_codes table) | `ricdTotal` | Total Codes (read-only) | `text` |  |  |  |
| ICD-10 Code Statistics (read-only) | ICD-10 Code Database Statistics (aggregate counts from icd10_codes table) | `ricdActive` | Active Codes (read-only) | `text` |  |  |  |
| ICD-10 Code Statistics (read-only) | ICD-10 Code Database Statistics (aggregate counts from icd10_codes table) | `ricdBillable` | Billable + Active Codes (read-only) | `text` |  |  |  |
| ICD-10 Code Statistics (read-only) | ICD-10 Code Database Statistics (aggregate counts from icd10_codes table) | `ricdLastUpdated` | Last Updated (ISO 8601; read-only) | `text` |  |  |  |

### ICD-10 Stats — `reference_icd10_stats`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ICD-10 Reference Statistics | Statistics | `total` | Total Codes | `text` |  |  |  |
| ICD-10 Reference Statistics | Statistics | `active` | Active Codes | `text` |  |  |  |
| ICD-10 Reference Statistics | Statistics | `billable` | Billable Codes | `text` |  |  |  |
| ICD-10 Reference Statistics | Statistics | `lastUpdated` | Last Updated | `text` |  |  |  |

### Medication Search — `reference_medications_search_cf`

Screen: 2 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Search Medications | Search Parameters | `rmedsQuery` | Search Query | `text` |  |  |  |
| Search Medications | Search Parameters | `rmedsTty` | Term Type (TTY) | `select` |  |  |  |
| Search Medications | Search Parameters | `rmedsSoundsLike` | Sounds Like Search | `checkbox` |  |  |  |
| Search Medications | Search Parameters | `rmedsLimit` | Result Limit (1-100, default 40) | `number` |  |  |  |
| Search Medications | Result Summary | `rmedsTotal` | Total Results | `number` |  |  |  |
| Search Medications | Result Summary | `rmedsFallbackSource` | Source | `text` |  |  |  |
| Medication Detail | Selected Medication | `rmedsRxcui` | RxCUI | `text` |  |  |  |
| Medication Detail | Selected Medication | `rmedsName` | Name | `text` |  |  |  |
| Medication Detail | Selected Medication | `rmedsSynonym` | Synonym | `text` |  |  |  |
| Medication Detail | Selected Medication | `rmedsBrandName` | Brand Name | `text` |  |  |  |
| Medication Detail | Selected Medication | `rmedsDoseForm` | Dose Form | `text` |  |  |  |
| Medication Detail | Selected Medication | `rmedsRoute` | Route | `text` |  |  |  |
| Medication Detail | Selected Medication | `rmedsStrength` | Strength | `text` |  |  |  |
| Medication Detail | Selected Medication | `rmedsNdc` | NDC | `text` |  |  |  |
| Medication Detail | Selected Medication | `rmedsIngredientName` | Ingredient Name | `text` |  |  |  |
| Medication Detail | Selected Medication | `rmedsTtyDisplay` | Term Type | `text` |  |  |  |
| Medication Detail | Selected Medication | `rmedsSource` | Data Source | `text` |  |  |  |

### Medication Stats — `REFERENCE_MEDICATIONS_STATS`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medication Code Statistics (read-only) | RxNorm Medication Statistics (aggregate counts from medication_codes table) | `rmsTotal` | Total Medication Codes (read-only) | `text` |  |  |  |
| Medication Code Statistics (read-only) | RxNorm Medication Statistics (aggregate counts from medication_codes table) | `rmsActive` | Active Codes (read-only) | `text` |  |  |  |
| Medication Code Statistics (read-only) | RxNorm Medication Statistics (aggregate counts from medication_codes table) | `rmsPrescribable` | Prescribable Codes (SCD/SBD/GPCK/BPCK TTY active; read-only) | `text` |  |  |  |
| Medication Code Statistics (read-only) | RxNorm Medication Statistics (aggregate counts from medication_codes table) | `rmsWithNdc` | Codes With NDC (active; read-only) | `text` |  |  |  |
| Medication Code Statistics (read-only) | RxNorm Medication Statistics (aggregate counts from medication_codes table) | `rmsLastUpdated` | Last Updated (ISO 8601; read-only) | `text` |  |  |  |

### Medication Stats — `reference_medications_stats_cf`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medication Code Statistics | Reference Table Summary | `rmstatTotal` | Total Codes | `number` |  |  |  |
| Medication Code Statistics | Reference Table Summary | `rmstatActive` | Active Codes | `number` |  |  |  |
| Medication Code Statistics | Reference Table Summary | `rmstatPrescribable` | Prescribable (SCD/SBD/GPCK/BPCK) | `number` |  |  |  |
| Medication Code Statistics | Reference Table Summary | `rmstatWithNdc` | With NDC | `number` |  |  |  |
| Medication Code Statistics | Reference Table Summary | `rmstatLastUpdated` | Last Updated | `text` |  |  |  |

### Medications Stats — `reference_medications_stats`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medications Reference Statistics | Statistics | `total` | Total Codes | `text` |  |  |  |
| Medications Reference Statistics | Statistics | `active` | Active Codes | `text` |  |  |  |
| Medications Reference Statistics | Statistics | `prescribable` | Prescribable (SCD/SBD/GPCK/BPCK) | `text` |  |  |  |
| Medications Reference Statistics | Statistics | `withNdc` | With NDC | `text` |  |  |  |
| Medications Reference Statistics | Statistics | `lastUpdated` | Last Updated | `text` |  |  |  |

### Payers Master — `payers_master`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT · tables `PAYERS_MASTER`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Payer | Payer Details | `name` | Payer Name | `text` | Y |  |  |
| Payer | Payer Details | `payerId` | Payer ID (EDI) | `text` |  |  |  |
| Payer | Payer Details | `payerType` | Type | `select` |  |  |  |
| Payer | Payer Details | `address` | Address | `textarea` |  |  |  |
| Payer | Payer Details | `phone` | Phone | `text` |  |  |  |
| Payer | Payer Details | `isActive` | Active | `checkbox` |  |  |  |

### Rule Grammar — `rule_grammar`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Rule Grammar Schema | Grammar | `grammarVersion` | Grammar Version | `text` |  |  |  |
| Rule Grammar Schema | Grammar | `fields` | Available Fields | `textarea` |  |  |  |
| Rule Grammar Schema | Grammar | `ops` | Operators | `textarea` |  |  |  |
| Rule Grammar Schema | Grammar | `maxDepth` | Max Depth | `text` |  |  |  |
| Rule Grammar Schema | Grammar | `maxInValues` | Max IN Values | `text` |  |  |  |
| Rule Grammar Schema | Grammar | `schemaUrl` | Schema URL | `text` |  |  |  |

### Rules — `rules`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT · tables `PAYERS_MASTER`, `PAYER_RULES`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Rule | Rule Details | `ruleType` | Rule Type | `text` |  |  |  |
| Rule | Rule Details | `code` | Code | `text` |  |  |  |
| Rule | Rule Details | `description` | Description | `textarea` |  |  |  |
| Rule | Rule Details | `limit` | Limit | `text` |  |  |  |
| Rule | Rule Details | `payerId` | Payer | `text` |  |  |  |
| Rule | Rule Details | `effectiveDate` | Effective Date | `text` |  |  |  |

## Behavioral Health

### ADHD Assessment — `behavioral_health_adhd_assessment_cf`

Screen: 1 page(s) · 4 section(s) · 33 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ADHD Assessment | Patient Profile and Referral | `adhd_age` | Patient Age | `number` |  |  |  |
| ADHD Assessment | Patient Profile and Referral | `adhd_patient_type` | Patient Type | `select` |  |  |  |
| ADHD Assessment | Patient Profile and Referral | `adhd_referral_source` | Referral Source / Chief Concern | `select` |  |  |  |
| ADHD Assessment | Patient Profile and Referral | `adhd_symptom_onset` | Age of Symptom Onset | `select` |  |  |  |
| ADHD Assessment | Patient Profile and Referral | `adhd_duration` | Duration of Symptoms | `select` |  |  |  |
| ADHD Assessment | Inattention Symptoms (DSM-5 Criterion A1) | `adhd_inat_careless` | 1. Often makes careless mistakes or lacks attention to detail (school, work, activities) | `select` |  |  |  |
| ADHD Assessment | Inattention Symptoms (DSM-5 Criterion A1) | `adhd_inat_sustain` | 2. Often has difficulty sustaining attention in tasks or play activities | `select` |  |  |  |
| ADHD Assessment | Inattention Symptoms (DSM-5 Criterion A1) | `adhd_inat_listen` | 3. Often does not seem to listen when spoken to directly | `select` |  |  |  |
| ADHD Assessment | Inattention Symptoms (DSM-5 Criterion A1) | `adhd_inat_followthrough` | 4. Often fails to follow through on instructions or finish tasks | `select` |  |  |  |
| ADHD Assessment | Inattention Symptoms (DSM-5 Criterion A1) | `adhd_inat_organize` | 5. Often has difficulty organizing tasks and activities | `select` |  |  |  |
| ADHD Assessment | Inattention Symptoms (DSM-5 Criterion A1) | `adhd_inat_avoid` | 6. Often avoids or dislikes tasks requiring sustained mental effort | `select` |  |  |  |
| ADHD Assessment | Inattention Symptoms (DSM-5 Criterion A1) | `adhd_inat_loses` | 7. Often loses things necessary for tasks (keys, phone, homework, tools) | `select` |  |  |  |
| ADHD Assessment | Inattention Symptoms (DSM-5 Criterion A1) | `adhd_inat_distracted` | 8. Often easily distracted by extraneous stimuli | `select` |  |  |  |
| ADHD Assessment | Inattention Symptoms (DSM-5 Criterion A1) | `adhd_inat_forgetful` | 9. Often forgetful in daily activities | `select` |  |  |  |
| ADHD Assessment | Inattention Symptoms (DSM-5 Criterion A1) | `adhd_inat_count` | Total Inattention Criterion Symptoms Endorsed (0-9) | `number` |  |  |  |
| ADHD Assessment | Hyperactivity-Impulsivity Symptoms (DSM-5 Criterion A2) | `adhd_hyp_fidgets` | 1. Often fidgets or squirms in seat | `select` |  |  |  |
| ADHD Assessment | Hyperactivity-Impulsivity Symptoms (DSM-5 Criterion A2) | `adhd_hyp_leaves_seat` | 2. Often leaves seat when remaining seated is expected | `select` |  |  |  |
| ADHD Assessment | Hyperactivity-Impulsivity Symptoms (DSM-5 Criterion A2) | `adhd_hyp_runs` | 3. Often runs about or climbs in inappropriate situations (or feels restless in adults) | `select` |  |  |  |
| ADHD Assessment | Hyperactivity-Impulsivity Symptoms (DSM-5 Criterion A2) | `adhd_hyp_quiet` | 4. Often unable to play or engage in leisure activities quietly | `select` |  |  |  |
| ADHD Assessment | Hyperactivity-Impulsivity Symptoms (DSM-5 Criterion A2) | `adhd_hyp_motor` | 5. Often on the go as if driven by a motor | `select` |  |  |  |
| ADHD Assessment | Hyperactivity-Impulsivity Symptoms (DSM-5 Criterion A2) | `adhd_hyp_talks` | 6. Often talks excessively | `select` |  |  |  |
| ADHD Assessment | Hyperactivity-Impulsivity Symptoms (DSM-5 Criterion A2) | `adhd_hyp_blurts` | 7. Often blurts out answers before questions are completed | `select` |  |  |  |
| ADHD Assessment | Hyperactivity-Impulsivity Symptoms (DSM-5 Criterion A2) | `adhd_hyp_waits` | 8. Often has difficulty awaiting turn | `select` |  |  |  |
| ADHD Assessment | Hyperactivity-Impulsivity Symptoms (DSM-5 Criterion A2) | `adhd_hyp_interrupts` | 9. Often interrupts or intrudes on others (conversations or activities) | `select` |  |  |  |
| ADHD Assessment | Hyperactivity-Impulsivity Symptoms (DSM-5 Criterion A2) | `adhd_hyp_count` | Total Hyperactivity-Impulsivity Criterion Symptoms Endorsed (0-9) | `number` |  |  |  |
| ADHD Assessment | DSM-5 Criteria Met and Treatment Plan | `adhd_presentation` | ADHD Presentation (if criteria met) | `select` |  |  |  |
| ADHD Assessment | DSM-5 Criteria Met and Treatment Plan | `adhd_severity` | Severity Specifier | `select` |  |  |  |
| ADHD Assessment | DSM-5 Criteria Met and Treatment Plan | `adhd_functional_impairment` | Functional Impairment Settings | `select` |  |  |  |
| ADHD Assessment | DSM-5 Criteria Met and Treatment Plan | `adhd_differential` | Differential Diagnosis Considerations (anxiety, depression, learning disability, trauma, sleep disorder, ASD) | `textarea` |  |  |  |
| ADHD Assessment | DSM-5 Criteria Met and Treatment Plan | `adhd_treatment_plan` | Initial Treatment Plan | `select` |  |  |  |
| ADHD Assessment | DSM-5 Criteria Met and Treatment Plan | `adhd_medication_started` | Medication Prescribed (name, dose, schedule) | `textarea` |  |  |  |
| ADHD Assessment | DSM-5 Criteria Met and Treatment Plan | `adhd_followup` | Follow-Up Plan | `select` |  |  |  |
| ADHD Assessment | DSM-5 Criteria Met and Treatment Plan | `adhd_notes` | ADHD Assessment Notes (history, collateral reports, rating scales used) | `textarea` |  |  |  |

### Addiction Medicine Eval — `addiction_medicine_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Addiction Medicine / SUD Evaluation | Patient & Referral | `patientId` | Patient | `typeahead` | Y |  |  |
| Addiction Medicine / SUD Evaluation | Patient & Referral | `evalDate` | Evaluation Date | `date` | Y |  |  |
| Addiction Medicine / SUD Evaluation | Patient & Referral | `provider` | Provider | `typeahead` | Y |  |  |
| Addiction Medicine / SUD Evaluation | Patient & Referral | `visitType` | Visit Type | `select` | Y |  |  |
| Addiction Medicine / SUD Evaluation | Patient & Referral | `referralSource` | Referral Source | `select` |  |  |  |
| Addiction Medicine / SUD Evaluation | Substance Use History | `primarySubstance` | Primary Substance | `select` | Y |  |  |
| Addiction Medicine / SUD Evaluation | Substance Use History | `dsmCriteria` | DSM-5 SUD Severity | `select` | Y |  |  |
| Addiction Medicine / SUD Evaluation | Substance Use History | `auditScore` | AUDIT-C / AUDIT Score (alcohol) | `text` |  |  |  |
| Addiction Medicine / SUD Evaluation | Substance Use History | `dastScore` | DAST-10 Score (drugs) | `text` |  |  |  |
| Addiction Medicine / SUD Evaluation | Substance Use History | `substanceHistory` | Substance Use Narrative | `textarea` | Y |  |  |
| Addiction Medicine / SUD Evaluation | Substance Use History | `withdrawal` | Current Withdrawal Status | `select` | Y |  |  |
| Addiction Medicine / SUD Evaluation | MAT & Treatment Plan | `matPlan` | MAT Medication | `select` | Y |  |  |
| Addiction Medicine / SUD Evaluation | MAT & Treatment Plan | `matDetails` | MAT Details / Initiation | `textarea` | Y |  |  |
| Addiction Medicine / SUD Evaluation | MAT & Treatment Plan | `counselingReferral` | Counseling / Support Services | `textarea` | Y |  |  |
| Addiction Medicine / SUD Evaluation | MAT & Treatment Plan | `nextVisit` | Next Visit (UDA + refill) | `date` |  |  |  |

### Adult ADHD — `adult_adhd_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ADHD Assessment | Presenting Concerns | `age_onset` | Reported Age of Symptom Onset | `number` |  |  |  |
| ADHD Assessment | Presenting Concerns | `duration` | Duration of Current Symptoms | `text` |  |  |  |
| ADHD Assessment | Presenting Concerns | `settings_impaired` | Settings Where Impaired | `select` |  |  |  |
| ADHD Assessment | Presenting Concerns | `prior_diagnosis` | Prior diagnosis of ADHD as a child | `checkbox` |  |  |  |
| ADHD Assessment | Screening Scores | `asrs_inattention` | ASRS Inattention Score | `number` |  |  |  |
| ADHD Assessment | Screening Scores | `asrs_hyperactivity` | ASRS Hyperactivity Score | `number` |  |  |  |
| ADHD Assessment | Screening Scores | `asrs_total` | ASRS Total Score | `number` |  |  |  |
| ADHD Assessment | Screening Scores | `asrs_interpretation` | ASRS Interpretation | `select` |  |  |  |
| ADHD Assessment | Differential and Plan | `comorbidities` | Co-occurring Conditions Considered | `text` |  |  |  |
| ADHD Assessment | Differential and Plan | `assessment` | Assessment | `textarea` |  |  |  |
| ADHD Assessment | Differential and Plan | `treatment_plan` | Treatment Plan | `textarea` |  |  |  |

### Anxiety Disorders — `behavioral_health_anxiety_disorders_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Anxiety Disorders — Evaluation and Treatment | Anxiety Disorder Diagnosis | `anxiety_type` | Primary Anxiety Disorder (DSM-5) | `select` |  |  |  |
| Anxiety Disorders — Evaluation and Treatment | Anxiety Disorder Diagnosis | `gad7` | GAD-7 Score (0-21; mild 5-9, moderate 10-14, severe 15-21) | `number` |  |  |  |
| Anxiety Disorders — Evaluation and Treatment | Anxiety Disorder Diagnosis | `panic_frequency` | Panic Attack Frequency (per week/month) and Severity (expected vs. unexpected) | `text` |  |  |  |
| Anxiety Disorders — Evaluation and Treatment | Medical Causes Excluded | `medical_causes` | Medical Causes Ruled Out (hyperthyroidism, pheochromocytoma, cardiac arrhythmia, hypoglycemia, caffeine, stimulants, withdrawal) | `textarea` |  |  |  |
| Anxiety Disorders — Evaluation and Treatment | Medical Causes Excluded | `comorbidities` | Psychiatric Comorbidities (MDD co-occurs in 50%+; OCD; PTSD; SUD — address all) | `textarea` |  |  |  |
| Anxiety Disorders — Evaluation and Treatment | Treatment | `psychotherapy` | Psychotherapy | `select` |  |  |  |
| Anxiety Disorders — Evaluation and Treatment | Treatment | `medication` | First-Line Pharmacotherapy | `select` |  |  |  |
| Anxiety Disorders — Evaluation and Treatment | Treatment | `avoid` | Benzodiazepines avoided as monotherapy (dependence risk; impair cognitive processing in therapy; short-term bridge only if severe acute distress) | `checkbox` |  |  |  |

### Behavioral Health Intake — `behavioral_health_intake_cf`

Screen: 2 page(s) · 4 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Initial Intake | Patient & Referral | `patientId` | Patient | `typeahead` | Y |  |  |
| Initial Intake | Patient & Referral | `intakeDate` | Intake Date | `date` | Y |  |  |
| Initial Intake | Patient & Referral | `clinician` | Clinician (Psychiatrist / LCSW / LPC) | `typeahead` | Y |  |  |
| Initial Intake | Patient & Referral | `referralSource` | Referral Source | `select` | Y |  |  |
| Initial Intake | Patient & Referral | `chiefComplaint` | Chief Complaint / Presenting Problem | `text` | Y |  |  |
| Initial Intake | Patient & Referral | `urgency` | Clinical Urgency | `select` | Y |  |  |
| Initial Intake | Presenting Concerns | `hpi` | History of Present Illness | `textarea` | Y |  |  |
| Initial Intake | Presenting Concerns | `safetyCrisis` | Safety Screen | `select` | Y |  |  |
| History & Plan | Psychiatric & Personal History | `psychiatricHistory` | Psychiatric History | `textarea` | Y |  |  |
| History & Plan | Psychiatric & Personal History | `familyHistory` | Family Psychiatric History | `textarea` |  |  |  |
| History & Plan | Diagnosis & Treatment Plan | `mseNarrative` | Mental Status Summary | `textarea` | Y |  |  |
| History & Plan | Diagnosis & Treatment Plan | `diagnosis` | DSM-5 Diagnoses | `textarea` | Y |  |  |
| History & Plan | Diagnosis & Treatment Plan | `treatmentPlan` | Treatment Plan | `textarea` | Y |  |  |

### Child Adolescent BH — `behavioral_health_child_adolescent_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Child and Adolescent Mental Health Evaluation | Developmental and School History | `developmental_milestones` | Developmental Milestone Status | `select` |  |  |  |
| Child and Adolescent Mental Health Evaluation | Developmental and School History | `academic_performance` | Academic Performance and School Accommodations (IEP, 504 plan, grade retention, learning disability evaluation needed) | `textarea` |  |  |  |
| Child and Adolescent Mental Health Evaluation | Developmental and School History | `aces_score` | ACEs Score (Adverse Childhood Experiences — 0-10; score 4+ = significantly increased health risk) | `number` |  |  |  |
| Child and Adolescent Mental Health Evaluation | Presenting Concerns | `primary_diagnosis` | Primary Presenting Concern | `select` |  |  |  |
| Child and Adolescent Mental Health Evaluation | Presenting Concerns | `safety_screen` | Safety assessed (Columbia CSSRS for youth; firearms in home; bullying, cyberbullying, sexual abuse) | `checkbox` |  |  |  |
| Child and Adolescent Mental Health Evaluation | Treatment Plan | `therapy_type` | Psychotherapy | `select` |  |  |  |
| Child and Adolescent Mental Health Evaluation | Treatment Plan | `school_coordination` | School coordination (communicate with guidance, teacher, school psychologist; IEP/504 update as needed) | `checkbox` |  |  |  |
| Child and Adolescent Mental Health Evaluation | Treatment Plan | `family_involvement` | Family Involvement (caregiver mental health addressed; parental stress; SUD in household; custody/legal situation) | `textarea` |  |  |  |

### Eating Disorder — `eating_disorder_assessment_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Eating Disorder Assessment | SCOFF Screen | `scoff_score` | SCOFF Total Score | `number` |  |  |  |
| Eating Disorder Assessment | SCOFF Screen | `scoff_positive` | SCOFF Result | `select` |  |  |  |
| Eating Disorder Assessment | SCOFF Screen | `bmi` | BMI | `number` |  |  |  |
| Eating Disorder Assessment | SCOFF Screen | `percent_ideal_bw` | Percent Ideal Body Weight | `number` |  |  |  |
| Eating Disorder Assessment | Clinical Features | `restriction_present` | Dietary restriction | `checkbox` |  |  |  |
| Eating Disorder Assessment | Clinical Features | `purging_present` | Purging behaviors | `checkbox` |  |  |  |
| Eating Disorder Assessment | Clinical Features | `binge_present` | Binge episodes | `checkbox` |  |  |  |
| Eating Disorder Assessment | Clinical Features | `excessive_exercise` | Excessive exercise | `checkbox` |  |  |  |
| Eating Disorder Assessment | Clinical Features | `body_dysmorphia` | Body image distortion | `checkbox` |  |  |  |
| Eating Disorder Assessment | Clinical Features | `medical_complications` | Medical Complications | `textarea` |  |  |  |
| Eating Disorder Assessment | Diagnosis and Plan | `diagnosis` | Working Diagnosis | `select` |  |  |  |
| Eating Disorder Assessment | Diagnosis and Plan | `level_of_care` | Level of Care | `select` |  |  |  |
| Eating Disorder Assessment | Diagnosis and Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Eating Disorder Eval — `eating_disorder_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Eating Disorder Evaluation | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Eating Disorder Evaluation | Patient | `evalDate` | Evaluation Date | `date` | Y |  |  |
| Eating Disorder Evaluation | Patient | `provider` | Provider | `typeahead` | Y |  |  |
| Eating Disorder Evaluation | Patient | `referralSource` | Referral Source | `select` |  |  |  |
| Eating Disorder Evaluation | Patient | `visitType` | Visit Type | `select` | Y |  |  |
| Eating Disorder Evaluation | Eating Disorder Screen & Diagnosis | `primaryDx` | Primary Eating Disorder Diagnosis (DSM-5) | `select` | Y |  |  |
| Eating Disorder Evaluation | Eating Disorder Screen & Diagnosis | `eat26Score` | EAT-26 Score (or equivalent screen) | `select` |  |  |  |
| Eating Disorder Evaluation | Eating Disorder Screen & Diagnosis | `bmiCurrent` | Current BMI | `number` |  |  |  |
| Eating Disorder Evaluation | Eating Disorder Screen & Diagnosis | `bmiHistory` | Weight History | `text` | Y |  |  |
| Eating Disorder Evaluation | Eating Disorder Screen & Diagnosis | `behaviorsPresent` | Eating Behaviors / Compensatory Behaviors | `textarea` | Y |  |  |
| Eating Disorder Evaluation | Eating Disorder Screen & Diagnosis | `medicalComplications` | Medical Complications / Labs | `textarea` | Y |  |  |
| Eating Disorder Evaluation | Treatment & Safety | `levelOfCare` | Recommended Level of Care | `select` | Y |  |  |
| Eating Disorder Evaluation | Treatment & Safety | `hospitalCriteria` | Medical Hospitalization Criteria (JAMA criteria) | `select` | Y |  |  |
| Eating Disorder Evaluation | Treatment & Safety | `treatmentTeam` | Treatment Team | `textarea` | Y |  |  |

### Opioid Risk — `opioid_risk_assessment_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Opioid Risk Assessment | Opioid Risk Tool (ORT) | `family_hx_substance` | Family history of substance abuse | `checkbox` |  |  |  |
| Opioid Risk Assessment | Opioid Risk Tool (ORT) | `personal_hx_substance` | Personal history of substance abuse | `checkbox` |  |  |  |
| Opioid Risk Assessment | Opioid Risk Tool (ORT) | `hx_preadolescent_abuse` | History of preadolescent sexual abuse | `checkbox` |  |  |  |
| Opioid Risk Assessment | Opioid Risk Tool (ORT) | `hx_depression` | Psychological disease (depression) | `checkbox` |  |  |  |
| Opioid Risk Assessment | Opioid Risk Tool (ORT) | `hx_adhd_ocd_bipolar` | Psychological disease (ADD/OCD/Bipolar) | `checkbox` |  |  |  |
| Opioid Risk Assessment | Opioid Risk Tool (ORT) | `hx_schizophrenia` | Psychological disease (Schizophrenia) | `checkbox` |  |  |  |
| Opioid Risk Assessment | Opioid Risk Tool (ORT) | `age_16_45` | Age 16-45 | `checkbox` |  |  |  |
| Opioid Risk Assessment | Opioid Risk Tool (ORT) | `ort_score` | ORT Total Score | `number` |  |  |  |
| Opioid Risk Assessment | Risk Classification | `ort_category` | Risk Category | `select` |  |  |  |
| Opioid Risk Assessment | Risk Classification | `uds_ordered` | Urine drug screen ordered | `checkbox` |  |  |  |
| Opioid Risk Assessment | Risk Classification | `pdmp_reviewed` | PDMP reviewed | `checkbox` |  |  |  |
| Opioid Risk Assessment | Risk Classification | `informed_consent_signed` | Informed consent signed | `checkbox` |  |  |  |
| Opioid Risk Assessment | Plan | `monitoring_frequency` | Monitoring Visit Frequency | `select` |  |  |  |
| Opioid Risk Assessment | Plan | `notes` | Plan Notes | `textarea` |  |  |  |

### PTSD Assessment — `ptsd_assessment_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| PTSD Assessment | Trauma History | `trauma_type` | Primary Trauma Type | `select` |  |  |  |
| PTSD Assessment | Trauma History | `trauma_date` | Approximate Trauma Date | `date` |  |  |  |
| PTSD Assessment | Trauma History | `ongoing_threat` | Ongoing trauma or threat present | `checkbox` |  |  |  |
| PTSD Assessment | PCL-5 Screen | `pcl5_score` | PCL-5 Total Score | `number` |  |  |  |
| PTSD Assessment | PCL-5 Screen | `pcl5_interpretation` | PCL-5 Interpretation | `select` |  |  |  |
| PTSD Assessment | PCL-5 Screen | `intrusion_score` | Intrusion Cluster (B) | `number` |  |  |  |
| PTSD Assessment | PCL-5 Screen | `avoidance_score` | Avoidance Cluster (C) | `number` |  |  |  |
| PTSD Assessment | Treatment Plan | `psychotherapy_type` | Recommended Psychotherapy | `select` |  |  |  |
| PTSD Assessment | Treatment Plan | `medication_considered` | Pharmacotherapy considered | `checkbox` |  |  |  |
| PTSD Assessment | Treatment Plan | `referral_made` | Specialty referral made | `checkbox` |  |  |  |
| PTSD Assessment | Treatment Plan | `notes` | Assessment and Plan Notes | `textarea` |  |  |  |

### Personality Disorders — `behavioral_health_personality_disorders_cf`

Screen: 1 page(s) · 3 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Personality Disorder Assessment and Treatment | Personality Disorder Type | `pd_type` | Personality Disorder (DSM-5 Cluster) | `select` |  |  |  |
| Personality Disorder Assessment and Treatment | Personality Disorder Type | `self_harm_history` | Self-harm history (NSSI or parasuicidal behavior — key feature in BPD; current safety assessed) | `checkbox` |  |  |  |
| Personality Disorder Assessment and Treatment | BPD-Specific Assessment | `zanarini_score` | ZAN-BPD Score or DIB-R (Zanarini Rating Scale; tracks symptom severity over treatment) | `text` |  |  |  |
| Personality Disorder Assessment and Treatment | BPD-Specific Assessment | `crises_frequency` | Crisis Frequency in Past Month (ED visits, hospitalization, NSSI, suicidal ideation episodes) | `number` |  |  |  |
| Personality Disorder Assessment and Treatment | Evidence-Based Treatment | `psychotherapy` | Evidence-Based Psychotherapy | `select` |  |  |  |
| Personality Disorder Assessment and Treatment | Evidence-Based Treatment | `medication_role` | Medication (adjunctive only — no FDA-approved medication for BPD; low-dose antipsychotic for cognitive-perceptual symptoms; SSRI for mood/impulsivity; mood stabilizer for affective dysregulation) | `textarea` |  |  |  |

### Psych Med Management — `medication_management_visit_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Psychiatric Medication Management (Brief) | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Psychiatric Medication Management (Brief) | Patient & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| Psychiatric Medication Management (Brief) | Patient & Visit | `provider` | Prescriber (Psychiatrist / NP) | `typeahead` | Y |  |  |
| Psychiatric Medication Management (Brief) | Patient & Visit | `diagnoses` | Active Psychiatric Diagnoses | `text` | Y |  |  |
| Psychiatric Medication Management (Brief) | Patient & Visit | `visitInterval` | Interval Since Last Visit | `select` |  |  |  |
| Psychiatric Medication Management (Brief) | Symptom Check & Medication Review | `moodScreen` | Current Symptom Status | `textarea` | Y |  |  |
| Psychiatric Medication Management (Brief) | Symptom Check & Medication Review | `sideEffects` | Medication Side Effects | `textarea` | Y |  |  |
| Psychiatric Medication Management (Brief) | Symptom Check & Medication Review | `currentMeds` | Current Psychiatric Medications | `textarea` | Y |  |  |
| Psychiatric Medication Management (Brief) | Assessment & Plan | `assessment` | Treatment Response | `select` | Y |  |  |
| Psychiatric Medication Management (Brief) | Assessment & Plan | `plan` | Plan | `textarea` | Y |  |  |
| Psychiatric Medication Management (Brief) | Assessment & Plan | `nextVisit` | Next Appointment | `date` |  |  |  |

### Psychiatry Evaluation — `psychiatry_evaluation_cf`

Screen: 2 page(s) · 4 section(s) · 20 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Psychiatric Evaluation | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Psychiatric Evaluation | Patient & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| Psychiatric Evaluation | Patient & Visit | `provider` | Psychiatrist / PMHNP | `typeahead` | Y |  |  |
| Psychiatric Evaluation | Patient & Visit | `visitType` | Visit Type | `select` | Y |  |  |
| Psychiatric Evaluation | Patient & Visit | `referralSource` | Referral Source | `text` |  |  |  |
| Psychiatric Evaluation | Psychiatric History | `chiefComplaint` | Chief Complaint | `text` | Y |  |  |
| Psychiatric Evaluation | Psychiatric History | `hpi` | History of Present Illness | `textarea` | Y |  |  |
| Psychiatric Evaluation | Psychiatric History | `pastPsychHx` | Past Psychiatric History | `textarea` | Y |  |  |
| Mental Status & Plan | Mental Status Examination | `appearance` | Appearance / Behavior | `text` | Y |  |  |
| Mental Status & Plan | Mental Status Examination | `speech` | Speech | `text` | Y |  |  |
| Mental Status & Plan | Mental Status Examination | `mood` | Mood (patient-stated) | `text` | Y |  |  |
| Mental Status & Plan | Mental Status Examination | `affect` | Affect | `text` | Y |  |  |
| Mental Status & Plan | Mental Status Examination | `thoughtProcess` | Thought Process | `text` | Y |  |  |
| Mental Status & Plan | Mental Status Examination | `thoughtContent` | Thought Content | `text` | Y |  |  |
| Mental Status & Plan | Mental Status Examination | `cognition` | Cognition / Insight / Judgment | `text` | Y |  |  |
| Mental Status & Plan | Diagnosis & Plan | `dsm5Diagnoses` | DSM-5 Diagnoses | `textarea` | Y |  |  |
| Mental Status & Plan | Diagnosis & Plan | `safetyAssessment` | Safety Assessment | `select` | Y |  |  |
| Mental Status & Plan | Diagnosis & Plan | `safetyPlan` | Safety Plan (if applicable) | `textarea` |  |  |  |
| Mental Status & Plan | Diagnosis & Plan | `medications` | Psychotropic Medications | `textarea` | Y |  |  |
| Mental Status & Plan | Diagnosis & Plan | `psychotherapy` | Therapy Recommendations | `textarea` | Y |  |  |
