---
title: "PracticeForceOneCFTrackingFields11"
---

# CF Tracking — Field-Level Detail (part 11 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Clinical**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Clinical

### Preventive Medicine — `preventive_medicine_cf`

Screen: 1 page(s) · 7 section(s) · 105 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Preventive Examination | Visit Information | `patientId` | Patient | `lookup` | Y |  |  |
| Preventive Examination | Visit Information | `examDate` | Exam Date | `date` |  |  |  |
| Preventive Examination | Visit Information | `providerName` | Provider | `text` |  |  |  |
| Preventive Examination | Visit Information | `visitType` | Visit Type | `select` |  |  |  |
| Preventive Examination | Visit Information | `lastPreventiveExamDate` | Last Preventive Exam | `date` |  |  |  |
| Preventive Examination | Visit Information | `age` | Age | `number` |  |  |  |
| Preventive Examination | Visit Information | `sex` | Sex | `select` |  |  |  |
| Preventive Examination | Visit Information | `raceEthnicity` | Race/Ethnicity | `text` |  |  |  |
| Preventive Examination | Social & Lifestyle History | `tobaccoUse` | Tobacco Use | `checkbox` |  |  |  |
| Preventive Examination | Social & Lifestyle History | `packYears` | Pack-Years | `number` |  |  |  |
| Preventive Examination | Social & Lifestyle History | `alcoholUse` | Alcohol Use | `checkbox` |  |  |  |
| Preventive Examination | Social & Lifestyle History | `drinksPerWeek` | Drinks/Week | `number` |  |  |  |
| Preventive Examination | Social & Lifestyle History | `drugUse` | Drug Use | `checkbox` |  |  |  |
| Preventive Examination | Social & Lifestyle History | `physicalActivityMinPerWeek` | Physical Activity (min/wk) | `number` |  |  |  |
| Preventive Examination | Social & Lifestyle History | `dietQuality` | Diet Quality | `select` |  |  |  |
| Preventive Examination | Social & Lifestyle History | `occupation` | Occupation | `text` |  |  |  |
| Preventive Examination | Social & Lifestyle History | `relationshipStatus` | Relationship Status | `text` |  |  |  |
| Preventive Examination | Social & Lifestyle History | `livingSituation` | Living Situation | `text` |  |  |  |
| Preventive Examination | Social & Lifestyle History | `socialSupport` | Social Support | `select` |  |  |  |
| Preventive Examination | Measurements & Vitals | `heightCm` | Height (cm) | `number` |  |  |  |
| Preventive Examination | Measurements & Vitals | `weightKg` | Weight (kg) | `number` |  |  |  |
| Preventive Examination | Measurements & Vitals | `bmi` | BMI | `number` |  |  |  |
| Preventive Examination | Measurements & Vitals | `bmiCategory` | BMI Category | `select` |  |  |  |
| Preventive Examination | Measurements & Vitals | `bpSystolic` | BP Systolic | `number` |  |  |  |
| Preventive Examination | Measurements & Vitals | `bpDiastolic` | BP Diastolic | `number` |  |  |  |
| Preventive Examination | Measurements & Vitals | `heartRate` | Heart Rate | `number` |  |  |  |
| Preventive Examination | Measurements & Vitals | `visionOd` | Vision OD | `text` |  |  |  |
| Preventive Examination | Measurements & Vitals | `visionOs` | Vision OS | `text` |  |  |  |
| Preventive Examination | Measurements & Vitals | `hearingScreen` | Hearing Screen | `select` |  |  |  |
| Preventive Examination | Physical Examination | `generalAppearance` | General Appearance | `text` |  |  |  |
| Preventive Examination | Physical Examination | `heent` | HEENT | `text` |  |  |  |
| Preventive Examination | Physical Examination | `thyroidExam` | Thyroid | `text` |  |  |  |
| Preventive Examination | Physical Examination | `cardiovascular` | Cardiovascular | `text` |  |  |  |
| Preventive Examination | Physical Examination | `murmurPresent` | Murmur Present | `checkbox` |  |  |  |
| Preventive Examination | Physical Examination | `respiratory` | Respiratory | `text` |  |  |  |
| Preventive Examination | Physical Examination | `abdominal` | Abdomen | `text` |  |  |  |
| Preventive Examination | Physical Examination | `breastExamDone` | Breast Exam Done | `checkbox` |  |  |  |
| Preventive Examination | Physical Examination | `pelvicExamDone` | Pelvic Exam Done | `checkbox` |  |  |  |
| Preventive Examination | Physical Examination | `papSmearDone` | Pap Smear Done | `checkbox` |  |  |  |
| Preventive Examination | Physical Examination | `prostateExamDone` | Prostate Exam Done | `checkbox` |  |  |  |
| Preventive Examination | Physical Examination | `rectalExamDone` | Rectal Exam Done | `checkbox` |  |  |  |
| Preventive Examination | Physical Examination | `musculoskeletal` | Musculoskeletal | `text` |  |  |  |
| Preventive Examination | Physical Examination | `skinFullBody` | Skin (Full Body) | `text` |  |  |  |
| Preventive Examination | Physical Examination | `skinFindings` | Skin Findings | `text` |  |  |  |
| Preventive Examination | Physical Examination | `neurological` | Neurological | `text` |  |  |  |
| Preventive Examination | Physical Examination | `psychiatric` | Psychiatric | `text` |  |  |  |
| Preventive Examination | Laboratory Results | `lipidPanelDate` | Lipid Panel Date | `date` |  |  |  |
| Preventive Examination | Laboratory Results | `ldlMgdl` | LDL (mg/dL) | `number` |  |  |  |
| Preventive Examination | Laboratory Results | `hdlMgdl` | HDL (mg/dL) | `number` |  |  |  |
| Preventive Examination | Laboratory Results | `triglycerides` | Triglycerides | `number` |  |  |  |
| Preventive Examination | Laboratory Results | `hba1c` | HbA1c (%) | `number` |  |  |  |
| Preventive Examination | Laboratory Results | `hba1cDate` | HbA1c Date | `date` |  |  |  |
| Preventive Examination | Laboratory Results | `glucoseFasting` | Fasting Glucose | `number` |  |  |  |
| Preventive Examination | Laboratory Results | `glucoseDate` | Glucose Date | `date` |  |  |  |
| Preventive Examination | Laboratory Results | `creatinine` | Creatinine | `number` |  |  |  |
| Preventive Examination | Laboratory Results | `eGFR` | eGFR | `number` |  |  |  |
| Preventive Examination | Laboratory Results | `creatinineDate` | Creatinine Date | `date` |  |  |  |
| Preventive Examination | Laboratory Results | `tsh` | TSH | `number` |  |  |  |
| Preventive Examination | Laboratory Results | `tshDate` | TSH Date | `date` |  |  |  |
| Preventive Examination | Laboratory Results | `wbc` | WBC | `number` |  |  |  |
| Preventive Examination | Laboratory Results | `hemoglobin` | Hemoglobin | `number` |  |  |  |
| Preventive Examination | Laboratory Results | `platelets` | Platelets | `number` |  |  |  |
| Preventive Examination | Laboratory Results | `psaLevel` | PSA (ng/mL) | `number` |  |  |  |
| Preventive Examination | Laboratory Results | `psaDate` | PSA Date | `date` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `stoolFitDone` | Stool FIT Done | `checkbox` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `stoolFitDate` | FIT Date | `date` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `stoolFitResult` | FIT Result | `text` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `colonoscopyStatus` | Colonoscopy Status | `text` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `colonoscopyDate` | Colonoscopy Date | `date` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `colonoscopyNextDue` | Next Due | `date` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `mammogramStatus` | Mammogram Status | `text` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `mammogramDate` | Mammogram Date | `date` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `mammogramResult` | Mammogram Result | `text` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `ldctLungStatus` | LDCT Lung Status | `text` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `ldctLungDate` | LDCT Date | `date` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `cervicalScreenStatus` | Cervical Screen Status | `text` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `cervicalScreenDate` | Cervical Screen Date | `date` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `cervicalScreenResult` | Cervical Screen Result | `text` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `dexaTScore_hip` | DEXA T-Score (Hip) | `number` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `dexaTScore_spine` | DEXA T-Score (Spine) | `number` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `frax10yr` | FRAX 10yr Fracture Risk (%) | `number` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `aaaDiameter` | AAA Screening Diameter (cm) | `number` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `hepCResult` | Hep C Result | `text` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `hivResult` | HIV Result | `text` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `depressionScreen` | Depression Screen Tool | `text` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `depressionScreenScore` | Depression Score | `number` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `depressionScreenResult` | Depression Screen Result | `text` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `cognitiveScreen` | Cognitive Screen Tool | `text` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `cognitiveScreenScore` | Cognitive Score | `number` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `fallRiskLevel` | Fall Risk Level | `select` |  |  |  |
| Preventive Examination | Cancer & Disease Screenings | `domesticViolenceScreen` | Domestic Violence Screen Done | `checkbox` |  |  |  |
| Preventive Examination | Advance Care Planning & Counseling | `advanceDirectiveOnFile` | Advance Directive On File | `checkbox` |  |  |  |
| Preventive Examination | Advance Care Planning & Counseling | `advanceDirectiveDate` | Advance Directive Date | `date` |  |  |  |
| Preventive Examination | Advance Care Planning & Counseling | `healthcareProxyName` | Healthcare Proxy Name | `text` |  |  |  |
| Preventive Examination | Advance Care Planning & Counseling | `dvrStatusDiscussed` | DNR/POLST Discussed | `checkbox` |  |  |  |
| Preventive Examination | Advance Care Planning & Counseling | `statinDiscussed` | Statin Therapy Discussed | `checkbox` |  |  |  |
| Preventive Examination | Advance Care Planning & Counseling | `aspirinDiscussed` | Aspirin Therapy Discussed | `checkbox` |  |  |  |
| Preventive Examination | Advance Care Planning & Counseling | `immunizationsReviewed` | Immunizations Reviewed | `checkbox` |  |  |  |
| Preventive Examination | Advance Care Planning & Counseling | `immunizationsPending` | Immunizations Pending | `text` |  |  |  |
| Preventive Examination | Advance Care Planning & Counseling | `overallHealthStatus` | Overall Health Status | `select` |  |  |  |
| Preventive Examination | Advance Care Planning & Counseling | `healthGoals` | Health Goals | `textarea` |  |  |  |
| Preventive Examination | Advance Care Planning & Counseling | `problemList` | Problem List | `textarea` |  |  |  |
| Preventive Examination | Advance Care Planning & Counseling | `nextPreventiveExamYears` | Next Exam In (years) | `number` |  |  |  |
| Preventive Examination | Advance Care Planning & Counseling | `assessmentNotes` | Assessment Notes | `textarea` |  |  |  |
| Preventive Examination | Advance Care Planning & Counseling | `plan` | Plan | `textarea` |  |  |  |

### Problem List — `problem_list_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Active Problem List | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Active Problem List | Patient | `reviewDate` | Problem List Review Date | `date` | Y |  |  |
| Active Problem List | Patient | `reviewProvider` | Reviewed By | `typeahead` | Y |  |  |
| Active Problem List | Chronic / Active Problems | `problem1` | Problem 1 (Diagnosis / ICD-10) | `text` |  |  |  |
| Active Problem List | Chronic / Active Problems | `problem2` | Problem 2 | `text` |  |  |  |
| Active Problem List | Chronic / Active Problems | `problem3` | Problem 3 | `text` |  |  |  |
| Active Problem List | Chronic / Active Problems | `problem4` | Problem 4 | `text` |  |  |  |
| Active Problem List | Chronic / Active Problems | `problem5` | Problem 5 | `text` |  |  |  |
| Active Problem List | Chronic / Active Problems | `problem6` | Problem 6 | `text` |  |  |  |
| Active Problem List | Chronic / Active Problems | `problem7` | Problem 7 | `text` |  |  |  |
| Active Problem List | Chronic / Active Problems | `problem8` | Problem 8 | `text` |  |  |  |
| Active Problem List | Chronic / Active Problems | `additionalProblems` | Additional Problems (if more than 8) | `textarea` |  |  |  |
| Active Problem List | Resolved / Historical Problems | `resolvedProblems` | Resolved / Inactive Problems | `textarea` |  |  |  |
| Active Problem List | Surgical & Social History Summary | `surgicalSummary` | Surgical History Summary | `textarea` |  |  |  |
| Active Problem List | Surgical & Social History Summary | `smokingStatus` | Smoking / Tobacco Status | `select` |  |  |  |
| Active Problem List | Surgical & Social History Summary | `alcoholStatus` | Alcohol Use | `select` |  |  |  |

### Procedure Consent — `procedure_consent_cf`

Screen: 1 page(s) · 3 section(s) · 20 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Informed Consent for Procedure | Patient & Procedure | `patientId` | Patient | `typeahead` | Y |  |  |
| Informed Consent for Procedure | Patient & Procedure | `procedureName2` | Procedure Name | `text` | Y |  |  |
| Informed Consent for Procedure | Patient & Procedure | `consentDate` | Consent Date | `date` | Y |  |  |
| Informed Consent for Procedure | Patient & Procedure | `obtainedBy` | Consent Obtained By | `typeahead` | Y |  |  |
| Informed Consent for Procedure | Information Provided to Patient | `indicationExplained` | Indication / purpose of procedure explained | `checkbox` |  |  |  |
| Informed Consent for Procedure | Information Provided to Patient | `procedureExplained` | Procedure steps explained in understandable terms | `checkbox` |  |  |  |
| Informed Consent for Procedure | Information Provided to Patient | `risksExplained` | Risks explained | `checkbox` |  |  |  |
| Informed Consent for Procedure | Information Provided to Patient | `risksDescription` | Risks Discussed | `textarea` | Y |  |  |
| Informed Consent for Procedure | Information Provided to Patient | `benefitsExplained` | Expected benefits explained | `checkbox` |  |  |  |
| Informed Consent for Procedure | Information Provided to Patient | `benefitsDescription` | Expected Benefit | `text` |  |  |  |
| Informed Consent for Procedure | Information Provided to Patient | `alternativesExplained` | Alternatives to procedure explained | `checkbox` |  |  |  |
| Informed Consent for Procedure | Information Provided to Patient | `alternativesDescription` | Alternatives Discussed | `textarea` |  |  |  |
| Informed Consent for Procedure | Information Provided to Patient | `noTreatmentOption` | Option to decline procedure / no treatment discussed | `checkbox` |  |  |  |
| Informed Consent for Procedure | Consent Capacity & Agreement | `capacityConfirmed` | Decision-Making Capacity | `select` | Y |  |  |
| Informed Consent for Procedure | Consent Capacity & Agreement | `guardianName` | Parent / Proxy Name (if not patient) | `text` |  |  |  |
| Informed Consent for Procedure | Consent Capacity & Agreement | `questionsAnswered` | All patient questions answered to satisfaction | `checkbox` |  |  |  |
| Informed Consent for Procedure | Consent Capacity & Agreement | `patientAgreed` | Patient / representative agreed to proceed with procedure | `checkbox` | Y |  |  |
| Informed Consent for Procedure | Consent Capacity & Agreement | `consentMethod2` | Consent Method | `select` |  |  |  |
| Informed Consent for Procedure | Consent Capacity & Agreement | `interpreterUsed` | Interpreter used (language barrier) | `checkbox` |  |  |  |
| Informed Consent for Procedure | Consent Capacity & Agreement | `interpreterLanguage` | Interpreter Language / Service | `text` |  |  |  |

### Procedure Note — `procedure_note_cf`

Screen: 1 page(s) · 4 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| In-Office Procedure Note | Patient & Procedure | `patientId` | Patient | `typeahead` | Y |  |  |
| In-Office Procedure Note | Patient & Procedure | `encounterId` | Encounter ID | `text` |  |  |  |
| In-Office Procedure Note | Patient & Procedure | `procedureDate` | Procedure Date | `date` | Y |  |  |
| In-Office Procedure Note | Patient & Procedure | `procedureName` | Procedure Name | `text` | Y |  |  |
| In-Office Procedure Note | Patient & Procedure | `cptCode3` | CPT Code | `text` | Y |  |  |
| In-Office Procedure Note | Patient & Procedure | `icdCode` | ICD-10 Code | `text` |  |  |  |
| In-Office Procedure Note | Patient & Procedure | `performingProvider` | Performing Provider | `typeahead` | Y |  |  |
| In-Office Procedure Note | Consent & Preparation | `consentOnFile` | Informed consent obtained and on file | `checkbox` |  |  |  |
| In-Office Procedure Note | Consent & Preparation | `patientPositioning` | Patient Positioning | `text` |  |  |  |
| In-Office Procedure Note | Consent & Preparation | `sitePrep` | Site Preparation | `textarea` |  |  |  |
| In-Office Procedure Note | Consent & Preparation | `anesthesiaUsed` | Anesthesia | `text` |  |  |  |
| In-Office Procedure Note | Procedure Description | `techniqueDescription` | Technique / Procedure Description | `textarea` | Y |  |  |
| In-Office Procedure Note | Procedure Description | `specimenSentPn` | Specimen(s) Sent | `textarea` |  |  |  |
| In-Office Procedure Note | Procedure Description | `ultrasoundGuided` | Ultrasound guidance used (CPT 76942) | `checkbox` |  |  |  |
| In-Office Procedure Note | Procedure Description | `fluoro` | Fluoroscopy guidance used (CPT 77002) | `checkbox` |  |  |  |
| In-Office Procedure Note | Outcome & Follow-Up | `complications2` | Intra-procedural Complications | `select` |  |  |  |
| In-Office Procedure Note | Outcome & Follow-Up | `immediateOutcome` | Immediate Post-Procedure Status | `textarea` |  |  |  |
| In-Office Procedure Note | Outcome & Follow-Up | `procedureInstructions` | Post-Procedure Instructions | `textarea` |  |  |  |
| In-Office Procedure Note | Outcome & Follow-Up | `followUpPn` | Follow-Up | `text` |  |  |  |

### Procedure Orders — `procedure_orders_wq_cf`

Screen: 1 page(s) · 1 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_ORDERS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `NOTIFICATION_DELIVERIES`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PAYER_RULES`, `PRACTICES`, `SOURCE_RECORD_EVENTS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Procedure Order | Procedure Details | `patient_id` | Patient | `typeahead` |  |  |  |
| Procedure Order | Procedure Details | `order_name` | Procedure Name | `text` | Y |  |  |
| Procedure Order | Procedure Details | `cpt_code` | CPT Code | `text` |  |  |  |
| Procedure Order | Procedure Details | `dx_code` | Diagnosis Code | `text` |  |  |  |
| Procedure Order | Procedure Details | `ordering_provider` | Ordering Provider | `text` |  |  |  |
| Procedure Order | Procedure Details | `performing_provider` | Performing Provider | `text` |  |  |  |
| Procedure Order | Procedure Details | `ordered_date` | Ordered Date | `date` |  |  |  |
| Procedure Order | Procedure Details | `scheduled_date` | Scheduled Date | `date` |  |  |  |
| Procedure Order | Procedure Details | `location` | Location | `text` |  |  |  |
| Procedure Order | Procedure Details | `clinical_indication` | Clinical Indication | `textarea` |  |  |  |
| Procedure Order | Procedure Details | `priority` | Priority | `select` |  |  |  |
| Procedure Order | Procedure Details | `status` | Status | `select` |  |  |  |

### Provider Handoff (SBAR) — `provider_handoff_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider Handoff / SBAR | Handoff Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Provider Handoff / SBAR | Handoff Details | `handoffDate` | Handoff Date | `date` | Y |  |  |
| Provider Handoff / SBAR | Handoff Details | `handoffTime` | Handoff Time | `text` |  |  |  |
| Provider Handoff / SBAR | Handoff Details | `fromProvider` | Handing Off Provider | `typeahead` | Y |  |  |
| Provider Handoff / SBAR | Handoff Details | `toProvider` | Receiving Provider | `typeahead` | Y |  |  |
| Provider Handoff / SBAR | Handoff Details | `handoffType` | Handoff Type | `select` | Y |  |  |
| Provider Handoff / SBAR | SBAR Communication | `situation` | S — Situation (what is happening) | `textarea` | Y |  |  |
| Provider Handoff / SBAR | SBAR Communication | `background` | B — Background (relevant history) | `textarea` | Y |  |  |
| Provider Handoff / SBAR | SBAR Communication | `assessment` | A — Assessment (current status) | `textarea` | Y |  |  |
| Provider Handoff / SBAR | SBAR Communication | `recommendation` | R — Recommendation / Actions Needed | `textarea` | Y |  |  |

### Psychiatry — `psychiatry_cf`

Screen: 1 page(s) · 5 section(s) · 43 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Assessment | Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Assessment | Visit | `assessmentDate` | Date | `date` |  |  |  |
| Assessment | Visit | `psychiatrist` | Clinician | `text` |  |  |  |
| Assessment | Visit | `visitType` | Visit Type | `select` |  |  |  |
| Assessment | Visit | `primaryDiagnosis` | Primary Diagnosis (ICD-10) | `text` |  |  |  |
| Assessment | Visit | `status` | Status | `select` |  |  |  |
| Assessment | Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Assessment | Mental Status Exam (MSE) | `mseAppearance` | Appearance | `text` |  |  |  |
| Assessment | Mental Status Exam (MSE) | `mseBehavior` | Behavior | `text` |  |  |  |
| Assessment | Mental Status Exam (MSE) | `mseSpeech` | Speech | `text` |  |  |  |
| Assessment | Mental Status Exam (MSE) | `mseMood` | Mood | `text` |  |  |  |
| Assessment | Mental Status Exam (MSE) | `mseAffect` | Affect | `text` |  |  |  |
| Assessment | Mental Status Exam (MSE) | `mseThoughtProcess` | Thought Process | `text` |  |  |  |
| Assessment | Mental Status Exam (MSE) | `mseThoughtContent` | Thought Content | `textarea` |  |  |  |
| Assessment | Mental Status Exam (MSE) | `msePerceptualDisturbances` | Perceptual Disturbances | `textarea` |  |  |  |
| Assessment | Mental Status Exam (MSE) | `mseCognition` | Cognition | `text` |  |  |  |
| Assessment | Mental Status Exam (MSE) | `mseInsight` | Insight | `select` |  |  |  |
| Assessment | Mental Status Exam (MSE) | `mseJudgment` | Judgment | `select` |  |  |  |
| Assessment | Risk Assessment | `siPresent` | Suicidal Ideation (SI) | `checkbox` |  |  |  |
| Assessment | Risk Assessment | `siIdeation` | SI Type | `select` |  |  |  |
| Assessment | Risk Assessment | `siPlan` | SI — Plan | `checkbox` |  |  |  |
| Assessment | Risk Assessment | `siIntent` | SI — Intent | `checkbox` |  |  |  |
| Assessment | Risk Assessment | `siMeansAccess` | SI — Means Access | `checkbox` |  |  |  |
| Assessment | Risk Assessment | `hiPresent` | Homicidal Ideation (HI) | `checkbox` |  |  |  |
| Assessment | Risk Assessment | `selfHarmPresent` | Self-Harm | `checkbox` |  |  |  |
| Assessment | Risk Assessment | `selfHarmType` | Self-Harm Type | `text` |  |  |  |
| Assessment | Risk Assessment | `hospitalizationRisk` | Hospitalization Risk | `select` |  |  |  |
| Assessment | Clinical Scales | `phq9Score` | PHQ-9 Score | `number` |  |  |  |
| Assessment | Clinical Scales | `phq9Severity` | PHQ-9 Severity | `select` |  |  |  |
| Assessment | Clinical Scales | `gad7Score` | GAD-7 Score | `number` |  |  |  |
| Assessment | Clinical Scales | `gad7Severity` | GAD-7 Severity | `select` |  |  |  |
| Assessment | Clinical Scales | `madrsScore` | MADRS Score | `number` |  |  |  |
| Assessment | Clinical Scales | `ymrsScore` | YMRS Score | `number` |  |  |  |
| Assessment | Clinical Scales | `whodas20Score` | WHODAS 2.0 Score | `number` |  |  |  |
| Assessment | Clinical Scales | `sleepHours` | Sleep Hours/Night | `number` |  |  |  |
| Assessment | Clinical Scales | `sleepQuality` | Sleep Quality | `select` |  |  |  |
| Assessment | Treatment | `medicationAdherence` | Medication Adherence | `select` |  |  |  |
| Assessment | Treatment | `sideEffects` | Side Effects | `textarea` |  |  |  |
| Assessment | Treatment | `therapyType` | Therapy Type | `select` |  |  |  |
| Assessment | Treatment | `therapyFrequency` | Therapy Frequency | `text` |  |  |  |
| Assessment | Treatment | `disposition` | Disposition | `select` |  |  |  |
| Assessment | Treatment | `followUpInterval` | Follow-Up Interval | `text` |  |  |  |
| Assessment | Treatment | `plan` | Assessment & Plan | `textarea` |  |  |  |

### Pulmonary Rehab — `pulmonary_rehab_cf`

Screen: 2 page(s) · 5 section(s) · 94 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Enrollment | Enrollment | `patientId` | Patient | `lookup` | Y |  |  |
| Enrollment | Enrollment | `enrollmentDate` | Enrollment Date | `date` |  |  |  |
| Enrollment | Enrollment | `referringProvider` | Referring Provider | `text` |  |  |  |
| Enrollment | Enrollment | `referralDate` | Referral Date | `date` |  |  |  |
| Enrollment | Enrollment | `qualifyingDiagnosis` | Qualifying Diagnosis | `text` |  |  |  |
| Enrollment | Enrollment | `qualifyingDiagnosisCodes` | ICD-10 Codes | `text` |  |  |  |
| Enrollment | Enrollment | `phase` | Phase | `select` |  |  |  |
| Enrollment | Enrollment | `insuranceAuthorized` | Insurance Authorized | `checkbox` |  |  |  |
| Enrollment | Enrollment | `insuranceAuthNumber` | Auth Number | `text` |  |  |  |
| Enrollment | Enrollment | `sessionsAuthorized` | Sessions Authorized | `number` |  |  |  |
| Enrollment | Enrollment | `programStartDate` | Program Start Date | `date` |  |  |  |
| Enrollment | Enrollment | `programEndPlanned` | Planned End Date | `date` |  |  |  |
| Enrollment | Enrollment | `programSetting` | Program Setting | `select` |  |  |  |
| Enrollment | Enrollment | `sessionsPerWeek` | Sessions/Week | `number` |  |  |  |
| Enrollment | Enrollment | `sessionDurationMin` | Session Duration (min) | `number` |  |  |  |
| Enrollment | Baseline Assessment | `heightCm` | Height (cm) | `number` |  |  |  |
| Enrollment | Baseline Assessment | `weightKg` | Weight (kg) | `number` |  |  |  |
| Enrollment | Baseline Assessment | `bmi` | BMI | `number` |  |  |  |
| Enrollment | Baseline Assessment | `restingHR` | Resting HR | `number` |  |  |  |
| Enrollment | Baseline Assessment | `bpSystolic` | BP Systolic | `number` |  |  |  |
| Enrollment | Baseline Assessment | `bpDiastolic` | BP Diastolic | `number` |  |  |  |
| Enrollment | Baseline Assessment | `restingSpo2` | Resting SpO2 (%) | `number` |  |  |  |
| Enrollment | Baseline Assessment | `restingO2Lpm` | Supplemental O2 at Rest (Lpm) | `number` |  |  |  |
| Enrollment | Baseline Assessment | `fev1Liters` | FEV1 (L) | `number` |  |  |  |
| Enrollment | Baseline Assessment | `fev1PctPredicted` | FEV1 %pred | `number` |  |  |  |
| Enrollment | Baseline Assessment | `fvcLiters` | FVC (L) | `number` |  |  |  |
| Enrollment | Baseline Assessment | `fvcPctPredicted` | FVC %pred | `number` |  |  |  |
| Enrollment | Baseline Assessment | `dlcoPct` | DLCO %pred | `number` |  |  |  |
| Enrollment | Baseline Assessment | `goldStage` | GOLD Stage | `select` |  |  |  |
| Enrollment | Baseline Assessment | `sixMinWalkM` | 6MWT Distance (m) | `number` |  |  |  |
| Enrollment | Baseline Assessment | `sixMinWalkPredictedPct` | 6MWT %predicted | `number` |  |  |  |
| Enrollment | Baseline Assessment | `spo2Nadir6Mwt` | SpO2 Nadir 6MWT (%) | `number` |  |  |  |
| Enrollment | Baseline Assessment | `mmrcScore` | mMRC Dyspnea Score (0–4) | `number` |  |  |  |
| Enrollment | Baseline Assessment | `catScore` | CAT Score (0–40) | `number` |  |  |  |
| Enrollment | Baseline Assessment | `sgrqTotal` | SGRQ Total | `number` |  |  |  |
| Enrollment | Baseline Assessment | `bodeIndex` | BODE Index | `number` |  |  |  |
| Enrollment | Baseline Assessment | `homeOxygenRest` | Home O2 at Rest (Lpm) | `number` |  |  |  |
| Enrollment | Baseline Assessment | `homeOxygenExertion` | Home O2 Exertion (Lpm) | `number` |  |  |  |
| Enrollment | Baseline Assessment | `homeOxygenSleep` | Home O2 Sleep (Lpm) | `number` |  |  |  |
| Enrollment | Diagnoses & Medications | `copdPresent` | COPD | `checkbox` |  |  |  |
| Enrollment | Diagnoses & Medications | `copdPhenotype` | COPD Phenotype | `text` |  |  |  |
| Enrollment | Diagnoses & Medications | `asthmaPresent` | Asthma | `checkbox` |  |  |  |
| Enrollment | Diagnoses & Medications | `ildPresent` | ILD | `checkbox` |  |  |  |
| Enrollment | Diagnoses & Medications | `ildType` | ILD Type | `text` |  |  |  |
| Enrollment | Diagnoses & Medications | `bronchiectasis` | Bronchiectasis | `checkbox` |  |  |  |
| Enrollment | Diagnoses & Medications | `postCovidLungDisease` | Post-COVID | `checkbox` |  |  |  |
| Enrollment | Diagnoses & Medications | `smokingStatus` | Smoking Status | `select` |  |  |  |
| Enrollment | Diagnoses & Medications | `smokingCessationCounseled` | Cessation Counseling Done | `checkbox` |  |  |  |
| Enrollment | Diagnoses & Medications | `lastExacerbationDate` | Last Exacerbation | `date` |  |  |  |
| Enrollment | Diagnoses & Medications | `exacerbationsLastYear` | Exacerbations Last Year | `number` |  |  |  |
| Enrollment | Diagnoses & Medications | `sabaPresent` | SABA (rescue) | `checkbox` |  |  |  |
| Enrollment | Diagnoses & Medications | `labaPresent` | LABA | `checkbox` |  |  |  |
| Enrollment | Diagnoses & Medications | `lamaPresent` | LAMA | `checkbox` |  |  |  |
| Enrollment | Diagnoses & Medications | `icsPresent` | ICS | `checkbox` |  |  |  |
| Enrollment | Diagnoses & Medications | `tripleTherapy` | Triple Therapy | `checkbox` |  |  |  |
| Enrollment | Exercise Prescription | `spo2TargetMin` | Target SpO2 Min (%) | `number` |  |  |  |
| Enrollment | Exercise Prescription | `borgDyspneaTarget` | Target Borg Dyspnea | `number` |  |  |  |
| Enrollment | Exercise Prescription | `intensityMethod` | Intensity Method | `text` |  |  |  |
| Enrollment | Exercise Prescription | `walkingSpeedMph` | Walking Speed (mph) | `number` |  |  |  |
| Enrollment | Exercise Prescription | `cyclingWatts` | Cycling Watts | `number` |  |  |  |
| Enrollment | Exercise Prescription | `ueTrainingPlanned` | UE Training | `checkbox` |  |  |  |
| Enrollment | Exercise Prescription | `leTrainingPlanned` | LE Training | `checkbox` |  |  |  |
| Enrollment | Exercise Prescription | `imtPlanned` | Inspiratory Muscle Training | `checkbox` |  |  |  |
| Enrollment | Exercise Prescription | `nutritionalAssessmentDone` | Nutritional Assessment Done | `checkbox` |  |  |  |
| Enrollment | Exercise Prescription | `dietitianReferral` | Dietitian Referral | `checkbox` |  |  |  |
| Enrollment | Exercise Prescription | `sessionsCompleted` | Sessions Completed | `number` |  |  |  |
| Enrollment | Exercise Prescription | `dischargeStatus` | Discharge Status | `select` |  |  |  |
| Sessions | Pulmonary Rehab Session | `patientId` | Patient | `lookup` | Y |  |  |
| Sessions | Pulmonary Rehab Session | `sessionDate` | Session Date | `date` |  |  |  |
| Sessions | Pulmonary Rehab Session | `sessionNumber` | Session # | `number` |  |  |  |
| Sessions | Pulmonary Rehab Session | `supervisedBy` | Supervised By | `text` |  |  |  |
| Sessions | Pulmonary Rehab Session | `sessionType` | Session Type | `select` |  |  |  |
| Sessions | Pulmonary Rehab Session | `preHR` | Pre HR | `number` |  |  |  |
| Sessions | Pulmonary Rehab Session | `preBpSystolic` | Pre BP Sys | `number` |  |  |  |
| Sessions | Pulmonary Rehab Session | `preSpo2` | Pre SpO2 (%) | `number` |  |  |  |
| Sessions | Pulmonary Rehab Session | `preBorgDyspnea` | Pre Borg Dyspnea (0–10) | `number` |  |  |  |
| Sessions | Pulmonary Rehab Session | `preBorgFatigue` | Pre Borg Fatigue (0–10) | `number` |  |  |  |
| Sessions | Pulmonary Rehab Session | `clearedToExercise` | Cleared to Exercise | `checkbox` |  |  |  |
| Sessions | Pulmonary Rehab Session | `holdReason` | Hold Reason | `text` |  |  |  |
| Sessions | Pulmonary Rehab Session | `o2DuringExercise` | O2 During Exercise | `checkbox` |  |  |  |
| Sessions | Pulmonary Rehab Session | `o2LpmDuringExercise` | O2 (Lpm) During Exercise | `number` |  |  |  |
| Sessions | Pulmonary Rehab Session | `walkingDone` | Walking Done | `checkbox` |  |  |  |
| Sessions | Pulmonary Rehab Session | `walkingDurationMin` | Walking Duration (min) | `number` |  |  |  |
| Sessions | Pulmonary Rehab Session | `walkingDistanceM` | Walking Distance (m) | `number` |  |  |  |
| Sessions | Pulmonary Rehab Session | `spo2Nadir` | SpO2 Nadir (%) | `number` |  |  |  |
| Sessions | Pulmonary Rehab Session | `cyclingDone` | Cycling Done | `checkbox` |  |  |  |
| Sessions | Pulmonary Rehab Session | `cyclingDurationMin` | Cycling Duration (min) | `number` |  |  |  |
| Sessions | Pulmonary Rehab Session | `educationTopic` | Education Topic | `text` |  |  |  |
| Sessions | Pulmonary Rehab Session | `totalSessionDurationMin` | Total Duration (min) | `number` |  |  |  |
| Sessions | Pulmonary Rehab Session | `adverseEvent` | Adverse Event | `checkbox` |  |  |  |
| Sessions | Pulmonary Rehab Session | `significantDesaturation` | Significant Desaturation | `checkbox` |  |  |  |
| Sessions | Pulmonary Rehab Session | `cancellation` | Session Cancelled | `checkbox` |  |  |  |
| Sessions | Pulmonary Rehab Session | `cancellationReason` | Cancellation Reason | `text` |  |  |  |
| Sessions | Pulmonary Rehab Session | `sessionNotes` | Notes | `textarea` |  |  |  |

### Pulmonology — `pulmonology_cf`

Screen: 2 page(s) · 7 section(s) · 34 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Assessment | Assessment | `patientId` | Patient | `lookup` | Y |  |  |
| Assessment | Assessment | `assessmentDate` | Assessment Date | `date` |  |  |  |
| Assessment | Assessment | `assessedBy` | Assessed By | `text` |  |  |  |
| Assessment | Assessment | `primaryDiagnosis` | Primary Diagnosis (ICD-10) | `text` |  |  |  |
| Assessment | Assessment | `encounterId` | Encounter ID | `text` |  |  |  |
| Assessment | COPD / Obstructive Disease | `goldStage` | GOLD Stage | `select` |  |  |  |
| Assessment | COPD / Obstructive Disease | `dyspneaScaleMmrc` | mMRC Dyspnea (0-4) | `number` |  |  |  |
| Assessment | COPD / Obstructive Disease | `catScore` | CAT Score (0-40) | `number` |  |  |  |
| Assessment | Asthma | `ginaStep` | GINA Step (1-5) | `number` |  |  |  |
| Assessment | Asthma | `acqScore` | ACQ Score | `number` |  |  |  |
| Assessment | Asthma | `asthmaSeverity` | Asthma Severity | `select` |  |  |  |
| Assessment | Plan | `plan` | Assessment & Plan | `textarea` |  |  |  |
| Assessment | Plan | `followUpInterval` | Follow-Up Interval | `text` |  |  |  |
| PFT / Spirometry | Test Info | `patientId` | Patient | `lookup` | Y |  |  |
| PFT / Spirometry | Test Info | `testDate` | Test Date | `date` |  |  |  |
| PFT / Spirometry | Test Info | `testType` | Test Type | `select` |  |  |  |
| PFT / Spirometry | Test Info | `spirometryQuality` | Quality Grade (A-F) | `text` |  |  |  |
| PFT / Spirometry | Test Info | `preBronch` | Pre-Bronchodilator | `checkbox` |  |  |  |
| PFT / Spirometry | Spirometry Values | `fvcPreL` | FVC Pre (L) | `number` |  |  |  |
| PFT / Spirometry | Spirometry Values | `fvcPrePct` | FVC Pre %pred | `number` |  |  |  |
| PFT / Spirometry | Spirometry Values | `fev1PreL` | FEV1 Pre (L) | `number` |  |  |  |
| PFT / Spirometry | Spirometry Values | `fev1PrePct` | FEV1 Pre %pred | `number` |  |  |  |
| PFT / Spirometry | Spirometry Values | `fev1FvcPre` | FEV1/FVC Pre | `number` |  |  |  |
| PFT / Spirometry | Spirometry Values | `fvcPostL` | FVC Post (L) | `number` |  |  |  |
| PFT / Spirometry | Spirometry Values | `fev1PostL` | FEV1 Post (L) | `number` |  |  |  |
| PFT / Spirometry | Spirometry Values | `fev1PostPct` | FEV1 Post %pred | `number` |  |  |  |
| PFT / Spirometry | Spirometry Values | `bronchodilatorResponse` | Bronchodilator Response | `checkbox` |  |  |  |
| PFT / Spirometry | Spirometry Values | `dlcoPct` | DLCO %pred | `number` |  |  |  |
| PFT / Spirometry | Spirometry Values | `pefLs` | PEF (L/s) | `number` |  |  |  |
| PFT / Spirometry | Spirometry Values | `fef2575Ls` | FEF25-75% (L/s) | `number` |  |  |  |
| PFT / Spirometry | Interpretation | `pattern` | Pattern | `select` |  |  |  |
| PFT / Spirometry | Interpretation | `severity` | Severity | `select` |  |  |  |
| PFT / Spirometry | Interpretation | `interpretation` | Full Interpretation | `textarea` |  |  |  |
| PFT / Spirometry | Interpretation | `interpretedBy` | Interpreted By | `text` |  |  |  |

### Quick Phrases — `keywords_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Quick Phrase | Phrase Details | `keyword` | Trigger Keyword | `text` | Y |  |  |
| Quick Phrase | Phrase Details | `context` | Field Context | `select` | Y |  |  |
| Quick Phrase | Phrase Details | `phrase` | Expanded Phrase | `textarea` | Y |  |  |
| Quick Phrase | Phrase Details | `active` | Active | `checkbox` |  |  |  |

### Quick Phrases — `keywords`

Screen: 2 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Quick Phrases | kwListSection | `kwId` | ID | `text` |  |  |  |
| Quick Phrases | kwListSection | `kwContext` | Context | `text` |  |  |  |
| Quick Phrases | kwListSection | `kwKeyword` | Keyword | `text` |  |  |  |
| Quick Phrases | kwListSection | `kwPhrase` | Phrase | `text` |  |  |  |
| Quick Phrases | kwListSection | `kwActive` | Active | `text` |  |  |  |
| Quick Phrase Details | kwEditSection | `kwEditContext` | Context | `select` |  |  |  |
| Quick Phrase Details | kwEditSection | `kwEditKeyword` | Keyword (shortcut) | `text` | Y |  |  |
| Quick Phrase Details | kwEditSection | `kwEditPhrase` | Phrase (expanded text) | `textarea` | Y |  |  |
| Quick Phrase Details | kwEditSection | `kwEditPracticeId` | Practice ID (optional) | `text` |  |  |  |

### RPM Alerts — `rpm_alerts_cf`

Screen: 1 page(s) · 1 section(s) · 10 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| RPM Alert Detail | Alert Details | `monitoringType` | Monitoring Type | `text` |  |  |  |
| RPM Alert Detail | Alert Details | `alertType` | Alert Type | `text` |  |  |  |
| RPM Alert Detail | Alert Details | `severity` | Severity | `text` |  |  |  |
| RPM Alert Detail | Alert Details | `status` | Status | `text` |  |  |  |
| RPM Alert Detail | Alert Details | `alertValue` | Measured Value | `text` |  |  |  |
| RPM Alert Detail | Alert Details | `thresholdValue` | Threshold | `text` |  |  |  |
| RPM Alert Detail | Alert Details | `alertDate` | Alert Date | `date` |  |  |  |
| RPM Alert Detail | Alert Details | `acknowledgedBy` | Acknowledged By | `text` |  |  |  |
| RPM Alert Detail | Alert Details | `resolvedBy` | Resolved By | `text` |  |  |  |
| RPM Alert Detail | Alert Details | `clinicalNotes` | Clinical Notes | `textarea` |  |  |  |

### Radiology Results — `radiology_results_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Radiology / Imaging Results Review | Study Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Radiology / Imaging Results Review | Study Details | `encounterId` | Encounter ID | `text` |  |  |  |
| Radiology / Imaging Results Review | Study Details | `studyDate` | Study Date | `date` | Y |  |  |
| Radiology / Imaging Results Review | Study Details | `studyType` | Study Type | `select` | Y |  |  |
| Radiology / Imaging Results Review | Study Details | `bodyPart` | Body Part / Region | `text` |  |  |  |
| Radiology / Imaging Results Review | Study Details | `facility` | Radiology Facility | `text` |  |  |  |
| Radiology / Imaging Results Review | Study Details | `radiologist` | Interpreting Radiologist | `text` |  |  |  |
| Radiology / Imaging Results Review | Study Details | `indication` | Clinical Indication | `textarea` |  |  |  |
| Radiology / Imaging Results Review | Radiology Report Summary | `radFindings` | Key Findings (from report) | `textarea` | Y |  |  |
| Radiology / Imaging Results Review | Radiology Report Summary | `biradsMammogram` | BI-RADS Category (mammogram only) | `select` |  |  |  |
| Radiology / Imaging Results Review | Radiology Report Summary | `incidentalFindings` | Incidental Findings | `textarea` |  |  |  |
| Radiology / Imaging Results Review | Radiology Report Summary | `urgency` | Result Urgency | `select` |  |  |  |
| Radiology / Imaging Results Review | Clinical Interpretation & Plan | `reviewingProvider` | Reviewed By | `typeahead` | Y |  |  |
| Radiology / Imaging Results Review | Clinical Interpretation & Plan | `reviewDate` | Review Date | `date` | Y |  |  |
| Radiology / Imaging Results Review | Clinical Interpretation & Plan | `clinicalInterpretation` | Clinical Interpretation | `textarea` | Y |  |  |
| Radiology / Imaging Results Review | Clinical Interpretation & Plan | `clinicalPlan` | Clinical Plan | `textarea` |  |  |  |
| Radiology / Imaging Results Review | Clinical Interpretation & Plan | `patientNotified` | Patient notified of results | `checkbox` |  |  |  |
| Radiology / Imaging Results Review | Clinical Interpretation & Plan | `notifyMethod` | Notification Method | `select` |  |  |  |

### Recall Registry — `recall_registry_cf`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Recall Entry | Patient Information | `firstName` | First Name | `text` |  | firstName |  |
| Recall Entry | Patient Information | `lastName` | Last Name | `text` |  | lastName |  |
| Recall Entry | Patient Information | `phone` | Phone | `text` |  | phone |  |
| Recall Entry | Patient Information | `lastVisit` | Last Visit | `text` |  | lastVisit |  |
| Recall Entry | Patient Information | `monthsOverdue` | Months Overdue | `text` |  | monthsOverdue |  |
| Recall Entry | Patient Information | `neverSeen` | Never Seen | `text` |  | neverSeen |  |

### Referral Details — `referral_detail_extensions_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Referral Details | Authorization | `auth_type` | Auth Type | `select` |  |  |  |
| Referral Details | Authorization | `auth_code` | Auth Code | `text` |  |  |  |
| Referral Details | Authorization | `pos_code` | Place of Service Code | `text` |  |  |  |
| Referral Details | Status | `status` | Status | `select` |  |  |  |
| Referral Details | Status | `sub_status` | Sub-status | `text` |  |  |  |
| Referral Details | Status | `appt_date` | Appointment Date | `date` |  |  |  |
| Referral Details | Status | `appt_time` | Appointment Time | `text` |  |  |  |
| Referral Details | Status | `received_date` | Received Date | `date` |  |  |  |
| Referral Details | Status | `priority` | Priority | `select` |  |  |  |
| Referral Details | E&M Complexity | `em_complexity_points` | Complexity Points | `number` |  |  |  |
| Referral Details | E&M Complexity | `complexity_notes` | Complexity Notes | `textarea` |  |  |  |

### Referral Details — `referral_detail_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Referral Extension Details | Authorization | `authType` | Auth Type | `select` |  | authType |  |
| Referral Extension Details | Authorization | `authCode` | Auth Code | `text` |  | authCode |  |
| Referral Extension Details | Authorization | `posCode` | POS Code | `text` |  | posCode |  |
| Referral Extension Details | Authorization | `priority` | Priority | `select` |  | priority |  |
| Referral Extension Details | Referral Status | `status` | Status | `select` |  | status |  |
| Referral Extension Details | Referral Status | `subStatus` | Sub-Status | `text` |  | subStatus |  |
| Referral Extension Details | Referral Status | `apptDate` | Appointment Date | `date` |  | apptDate |  |
| Referral Extension Details | Referral Status | `receivedDate` | Received Date | `date` |  | receivedDate |  |
| Referral Extension Details | E&M Complexity | `emComplexityPoints` | E&M Complexity Points | `number` |  | emComplexityPoints |  |
| Referral Extension Details | E&M Complexity | `complexityNotes` | Complexity Notes | `textarea` |  | complexityNotes |  |

### Referral Details — `referral_details_cf`

Screen: 2 page(s) · 2 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Referral Info | Referral Details | `referralTo` | Refer to provider/facility | `typeahead` |  |  |  |
| Referral Info | Referral Details | `referralType` | Referral type | `select` |  |  |  |
| Referral Info | Referral Details | `priority` | Priority | `select` |  |  |  |
| Referral Info | Referral Details | `clinicalReason` | Clinical reason / diagnosis | `textarea` |  |  |  |
| Referral Info | Referral Details | `servicesRequested` | Services requested | `textarea` |  |  |  |
| Referral Info | Referral Details | `authRequired` | Prior authorization required | `checkbox` |  |  |  |
| Referral Info | Referral Details | `authNumber` | Auth number (if obtained) | `text` |  |  |  |
| Tracking | Status & Follow-Up | `status` | Status | `text` |  |  |  |
| Tracking | Status & Follow-Up | `appointmentDate` | Appt scheduled (at specialist) | `text` |  |  |  |
| Tracking | Status & Follow-Up | `reportReceived` | Consult report received | `checkbox` |  |  |  |
| Tracking | Status & Follow-Up | `reportDate` | Report date | `text` |  |  |  |
| Tracking | Status & Follow-Up | `followUpActions` | Follow-up actions | `textarea` |  |  |  |

### Referral Directory — `REFERRAL_DIRECTORY`

Screen: 1 page(s) · 1 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`, `REFERRING_PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Referring Provider Card | Provider Directory (ECW-RF-2; ReferralDirectoryRoutes; GET /api/referral-directory; REQUIRED practiceId; optional q/specialty/state/languages/limit; unified UNION of referring_providers (external) + providers (internal, provider_type=referring); rich cards with address/phone/fax/email/languages/is_favorited; /specialties + /languages for filter dropdowns; raw SQL sanctioned) | `rdirId` | Provider ID (read-only UUID) | `text` |  |  |  |
| Referring Provider Card | Provider Directory (ECW-RF-2; ReferralDirectoryRoutes; GET /api/referral-directory; REQUIRED practiceId; optional q/specialty/state/languages/limit; unified UNION of referring_providers (external) + providers (internal, provider_type=referring); rich cards with address/phone/fax/email/languages/is_favorited; /specialties + /languages for filter dropdowns; raw SQL sanctioned) | `rdirSource` | Source (referring=external; internal=staff provider; read-only) | `text` |  |  |  |
| Referring Provider Card | Provider Directory (ECW-RF-2; ReferralDirectoryRoutes; GET /api/referral-directory; REQUIRED practiceId; optional q/specialty/state/languages/limit; unified UNION of referring_providers (external) + providers (internal, provider_type=referring); rich cards with address/phone/fax/email/languages/is_favorited; /specialties + /languages for filter dropdowns; raw SQL sanctioned) | `rdirName` | Provider Name (read-only) | `text` |  |  |  |
| Referring Provider Card | Provider Directory (ECW-RF-2; ReferralDirectoryRoutes; GET /api/referral-directory; REQUIRED practiceId; optional q/specialty/state/languages/limit; unified UNION of referring_providers (external) + providers (internal, provider_type=referring); rich cards with address/phone/fax/email/languages/is_favorited; /specialties + /languages for filter dropdowns; raw SQL sanctioned) | `rdirSpecialty` | Specialty (read-only) | `text` |  |  |  |
| Referring Provider Card | Provider Directory (ECW-RF-2; ReferralDirectoryRoutes; GET /api/referral-directory; REQUIRED practiceId; optional q/specialty/state/languages/limit; unified UNION of referring_providers (external) + providers (internal, provider_type=referring); rich cards with address/phone/fax/email/languages/is_favorited; /specialties + /languages for filter dropdowns; raw SQL sanctioned) | `rdirAddress` | Address (read-only) | `text` |  |  |  |
| Referring Provider Card | Provider Directory (ECW-RF-2; ReferralDirectoryRoutes; GET /api/referral-directory; REQUIRED practiceId; optional q/specialty/state/languages/limit; unified UNION of referring_providers (external) + providers (internal, provider_type=referring); rich cards with address/phone/fax/email/languages/is_favorited; /specialties + /languages for filter dropdowns; raw SQL sanctioned) | `rdirPhone` | Phone (read-only) | `text` |  |  |  |
| Referring Provider Card | Provider Directory (ECW-RF-2; ReferralDirectoryRoutes; GET /api/referral-directory; REQUIRED practiceId; optional q/specialty/state/languages/limit; unified UNION of referring_providers (external) + providers (internal, provider_type=referring); rich cards with address/phone/fax/email/languages/is_favorited; /specialties + /languages for filter dropdowns; raw SQL sanctioned) | `rdirFax` | Fax (read-only) | `text` |  |  |  |
| Referring Provider Card | Provider Directory (ECW-RF-2; ReferralDirectoryRoutes; GET /api/referral-directory; REQUIRED practiceId; optional q/specialty/state/languages/limit; unified UNION of referring_providers (external) + providers (internal, provider_type=referring); rich cards with address/phone/fax/email/languages/is_favorited; /specialties + /languages for filter dropdowns; raw SQL sanctioned) | `rdirNpi` | NPI (read-only) | `text` |  |  |  |
| Referring Provider Card | Provider Directory (ECW-RF-2; ReferralDirectoryRoutes; GET /api/referral-directory; REQUIRED practiceId; optional q/specialty/state/languages/limit; unified UNION of referring_providers (external) + providers (internal, provider_type=referring); rich cards with address/phone/fax/email/languages/is_favorited; /specialties + /languages for filter dropdowns; raw SQL sanctioned) | `rdirLanguagesSpoken` | Languages Spoken (read-only) | `text` |  |  |  |
| Referring Provider Card | Provider Directory (ECW-RF-2; ReferralDirectoryRoutes; GET /api/referral-directory; REQUIRED practiceId; optional q/specialty/state/languages/limit; unified UNION of referring_providers (external) + providers (internal, provider_type=referring); rich cards with address/phone/fax/email/languages/is_favorited; /specialties + /languages for filter dropdowns; raw SQL sanctioned) | `rdirIsFavorited` | Is Favorited (true/false; read-only) | `text` |  |  |  |

### Referral Orders — `referral_orders_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Referral Orders | Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Referral Orders | Context | `encounterId` | Encounter ID | `text` | Y |  |  |
| Referral Orders | Referral 1 | `ref1Type` | Referral Type | `select` |  |  |  |
| Referral Orders | Referral 1 | `ref1Specialty` | Specialty | `text` |  |  |  |
| Referral Orders | Referral 1 | `ref1ReferredTo` | Referred To (Provider/Facility) | `text` |  |  |  |
| Referral Orders | Referral 1 | `ref1Urgency` | Urgency | `select` |  |  |  |
| Referral Orders | Referral 1 | `ref1Diagnosis` | Diagnosis Code (ICD-10) | `typeahead` |  |  |  |
| Referral Orders | Referral 1 | `ref1Reason` | Reason for Referral | `textarea` |  |  |  |
| Referral Orders | Referral 1 | `ref1AuthNumber` | Prior Auth Number (if obtained) | `text` |  |  |  |
| Referral Orders | Referral 2 (if needed) | `ref2Type` | Referral Type | `select` |  |  |  |
| Referral Orders | Referral 2 (if needed) | `ref2Specialty` | Specialty | `text` |  |  |  |
| Referral Orders | Referral 2 (if needed) | `ref2ReferredTo` | Referred To | `text` |  |  |  |
| Referral Orders | Referral 2 (if needed) | `ref2Urgency` | Urgency | `select` |  |  |  |
| Referral Orders | Referral 2 (if needed) | `ref2Reason` | Reason for Referral | `textarea` |  |  |  |

### Referral Tracking — `referral_tracking_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Specialist Referral | Patient & Referral | `patientId` | Patient | `typeahead` | Y |  |  |
| Specialist Referral | Patient & Referral | `referralDate` | Referral Date | `date` | Y |  |  |
| Specialist Referral | Patient & Referral | `orderingProvider` | Ordering Provider | `typeahead` | Y |  |  |
| Specialist Referral | Patient & Referral | `specialty` | Specialty Referred To | `select` | Y |  |  |
| Specialist Referral | Patient & Referral | `specialistName` | Specialist / Practice Name | `text` |  |  |  |
| Specialist Referral | Patient & Referral | `urgency3` | Urgency | `select` |  |  |  |
| Specialist Referral | Clinical Reason | `referralReason` | Reason for Referral | `textarea` | Y |  |  |
| Specialist Referral | Clinical Reason | `diagnosisCodes3` | Diagnosis Code(s) | `text` |  |  |  |
| Specialist Referral | Clinical Reason | `relevantHistory` | Relevant History / Prior Workup | `textarea` |  |  |  |
| Specialist Referral | Status Tracking | `referralStatus` | Referral Status | `select` | Y |  |  |
| Specialist Referral | Status Tracking | `apptDate2` | Appointment Date (if scheduled) | `date` |  |  |  |
| Specialist Referral | Status Tracking | `consultReceived` | Consult Note Received Date | `date` |  |  |  |
| Specialist Referral | Status Tracking | `consultSummary` | Consult Recommendations | `textarea` |  |  |  |
| Specialist Referral | Status Tracking | `closedDate` | Referral Closed Date | `date` |  |  |  |

### Referrals — `referral_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Referral | Referral Info | `referralDate` | Referral Date | `text` |  | referralDate |  |
| Referral | Referral Info | `specialty` | Specialty | `text` |  | specialty |  |
| Referral | Referral Info | `referralType` | Type | `text` |  | referralType |  |
| Referral | Referral Info | `priority` | Priority | `text` |  | priority |  |
| Referral | Referral Info | `referredTo` | Referred To | `text` |  | referredTo |  |
| Referral | Referral Info | `status` | Status | `text` |  | status |  |
| Referral | Referral Info | `authNumber` | Auth Number | `text` |  | authNumber |  |
| Referral | Clinical | `reason` | Reason for Referral | `textarea` |  | reason |  |
| Referral | Clinical | `notes` | Notes | `textarea` |  | notes |  |

### Referrals — `referrals_wq_cf`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Referral | Referral Details | `patient_id` | Patient | `typeahead` |  |  |  |
| Referral | Referral Details | `specialty` | Specialty | `text` | Y |  |  |
| Referral | Referral Details | `referred_to` | Referred To | `text` |  |  |  |
| Referral | Referral Details | `referral_date` | Referral Date | `date` |  |  |  |
| Referral | Referral Details | `referral_reason` | Referral Reason | `textarea` |  |  |  |
| Referral | Referral Details | `urgency` | Urgency | `select` |  |  |  |
| Referral | Referral Details | `status` | Status | `select` |  |  |  |
| Referral | Referral Details | `authorization_number` | Auth Number | `text` |  |  |  |
| Referral | Referral Details | `notes` | Notes | `textarea` |  |  |  |

### Refill Requests — `erx_refills_wq_cf`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Refill Request | Refill Details | `patient_id` | Patient | `typeahead` |  |  |  |
| Refill Request | Refill Details | `medication_name` | Medication | `text` |  |  |  |
| Refill Request | Refill Details | `ndc` | NDC Code | `text` |  |  |  |
| Refill Request | Refill Details | `quantity` | Quantity | `number` |  |  |  |
| Refill Request | Refill Details | `days_supply` | Days Supply | `number` |  |  |  |
| Refill Request | Refill Details | `pharmacy_name` | Pharmacy | `text` |  |  |  |
| Refill Request | Refill Details | `requested_at` | Requested | `date` |  |  |  |
| Refill Request | Refill Details | `status` | Status | `select` |  |  |  |
| Refill Request | Refill Details | `denial_reason` | Denial Reason | `textarea` |  |  |  |

### Remote Monitoring — `rpm_cf`

Screen: 3 page(s) · 7 section(s) · 48 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Enrollment | Enrollment | `patientId` | Patient | `lookup` | Y |  |  |
| Enrollment | Enrollment | `enrollmentDate` | Enrollment Date | `date` |  |  |  |
| Enrollment | Enrollment | `monitoringType` | Monitoring Type | `select` | Y |  |  |
| Enrollment | Enrollment | `primaryDiagnosis` | Primary ICD-10 | `text` |  |  |  |
| Enrollment | Enrollment | `careManager` | Care Manager | `text` |  |  |  |
| Enrollment | Enrollment | `billingProvider` | Billing Provider | `text` |  |  |  |
| Enrollment | Device | `deviceType` | Device Type | `text` |  |  |  |
| Enrollment | Device | `deviceId` | Device ID / Serial | `text` |  |  |  |
| Enrollment | Device | `deviceVendor` | Vendor | `text` |  |  |  |
| Enrollment | Device | `setupCompleted` | Setup Complete (CPT 99453) | `checkbox` |  |  |  |
| Enrollment | Device | `setupDate` | Setup Date | `date` |  |  |  |
| Enrollment | Device | `setupCptBilled` | 99453 Billed | `checkbox` |  |  |  |
| Enrollment | Consent & Status | `consentObtained` | Consent Obtained | `checkbox` |  |  |  |
| Enrollment | Consent & Status | `consentDate` | Consent Date | `date` |  |  |  |
| Enrollment | Consent & Status | `status` | Status | `select` |  |  |  |
| Enrollment | Alert Thresholds | `bpSystolicLow` | SBP Low | `number` |  |  |  |
| Enrollment | Alert Thresholds | `bpSystolicHigh` | SBP High | `number` |  |  |  |
| Enrollment | Alert Thresholds | `bpDiastolicLow` | DBP Low | `number` |  |  |  |
| Enrollment | Alert Thresholds | `bpDiastolicHigh` | DBP High | `number` |  |  |  |
| Enrollment | Alert Thresholds | `heartRateLow` | HR Low | `number` |  |  |  |
| Enrollment | Alert Thresholds | `heartRateHigh` | HR High | `number` |  |  |  |
| Enrollment | Alert Thresholds | `glucoseLow` | Glucose Low | `number` |  |  |  |
| Enrollment | Alert Thresholds | `glucoseHigh` | Glucose High | `number` |  |  |  |
| Enrollment | Alert Thresholds | `spo2Low` | SpO2 Low | `number` |  |  |  |
| Enrollment | Alert Thresholds | `weightChangeAlert` | Weight Change Alert | `number` |  |  |  |
| Enrollment | Notes | `disenrollmentReason` | Disenrollment Reason | `textarea` |  |  |  |
| Enrollment | Notes | `notes` | Clinical Notes | `textarea` |  |  |  |
| Readings | Reading | `readingDate` | Date | `date` |  |  |  |
| Readings | Reading | `readingTime` | Time | `text` |  |  |  |
| Readings | Reading | `source` | Source | `select` |  |  |  |
| Readings | Reading | `bpSystolic` | SBP (mmHg) | `number` |  |  |  |
| Readings | Reading | `bpDiastolic` | DBP (mmHg) | `number` |  |  |  |
| Readings | Reading | `heartRate` | Heart Rate (bpm) | `number` |  |  |  |
| Readings | Reading | `glucose` | Glucose (mg/dL) | `number` |  |  |  |
| Readings | Reading | `glucoseMealContext` | Meal Context | `select` |  |  |  |
| Readings | Reading | `weightLbs` | Weight (lbs) | `number` |  |  |  |
| Readings | Reading | `spo2` | SpO2 (%) | `number` |  |  |  |
| Readings | Reading | `temperature` | Temperature (°F) | `number` |  |  |  |
| Readings | Reading | `painScore` | Pain Score (0-10) | `number` |  |  |  |
| Readings | Reading | `notes` | Notes | `text` |  |  |  |
| Alerts | Alert | `alertType` | Alert Type | `text` |  |  |  |
| Alerts | Alert | `severity` | Severity | `text` |  |  |  |
| Alerts | Alert | `alertValue` | Triggered Value | `text` |  |  |  |
| Alerts | Alert | `thresholdValue` | Threshold | `text` |  |  |  |
| Alerts | Alert | `status` | Status | `text` |  |  |  |
| Alerts | Alert | `createdAt` | Created | `text` |  |  |  |
| Alerts | Alert | `alertMessage` | Alert Message | `textarea` |  |  |  |
| Alerts | Alert | `resolutionNotes` | Resolution Notes | `textarea` |  |  |  |

### Remote Patient Monitoring — `rpm_enrollment_cf`

Screen: 1 page(s) · 2 section(s) · 18 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| RPM Enrollment | Enrollment | `monitoringType` | Monitoring Type | `select` | Y |  |  |
| RPM Enrollment | Enrollment | `status` | Status | `select` |  |  |  |
| RPM Enrollment | Enrollment | `enrollmentDate` | Enrollment Date | `date` |  |  |  |
| RPM Enrollment | Enrollment | `billingProvider` | Billing Provider | `text` |  |  |  |
| RPM Enrollment | Enrollment | `careManager` | Care Manager | `text` |  |  |  |
| RPM Enrollment | Enrollment | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| RPM Enrollment | Enrollment | `deviceType` | Device Type | `text` |  |  |  |
| RPM Enrollment | Enrollment | `deviceId` | Device ID / Serial | `text` |  |  |  |
| RPM Enrollment | Enrollment | `transmissionFrequency` | Transmission Frequency | `text` |  |  |  |
| RPM Enrollment | Alert Thresholds | `bpSystolicHigh` | BP Systolic High | `number` |  |  |  |
| RPM Enrollment | Alert Thresholds | `bpSystolicLow` | BP Systolic Low | `number` |  |  |  |
| RPM Enrollment | Alert Thresholds | `bpDiastolicHigh` | BP Diastolic High | `number` |  |  |  |
| RPM Enrollment | Alert Thresholds | `heartRateHigh` | HR High | `number` |  |  |  |
| RPM Enrollment | Alert Thresholds | `heartRateLow` | HR Low | `number` |  |  |  |
| RPM Enrollment | Alert Thresholds | `glucoseHigh` | Glucose High (mg/dL) | `number` |  |  |  |
| RPM Enrollment | Alert Thresholds | `glucoseLow` | Glucose Low (mg/dL) | `number` |  |  |  |
| RPM Enrollment | Alert Thresholds | `weightChangeThreshold` | Weight Change Threshold (lbs) | `number` |  |  |  |
| RPM Enrollment | Alert Thresholds | `spo2Low` | SpO2 Low (%) | `number` |  |  |  |

### Research Enrollment — `clinical_research_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clinical Research Participation | Patient & Study | `patientId` | Patient | `typeahead` | Y |  |  |
| Clinical Research Participation | Patient & Study | `studyTitle` | Study Title | `text` | Y |  |  |
| Clinical Research Participation | Patient & Study | `studyClinicalTrialsId` | ClinicalTrials.gov ID | `text` |  |  |  |
| Clinical Research Participation | Patient & Study | `studySponsor` | Sponsor | `text` |  |  |  |
| Clinical Research Participation | Patient & Study | `studyPhase` | Study Phase | `select` |  |  |  |
| Clinical Research Participation | Patient & Study | `principalInvestigator` | Principal Investigator | `typeahead` |  |  |  |
| Clinical Research Participation | Enrollment & Consent | `screeningDate` | Screening Date | `date` |  |  |  |
| Clinical Research Participation | Enrollment & Consent | `eligibilityStatus` | Eligibility Status | `select` | Y |  |  |
| Clinical Research Participation | Enrollment & Consent | `eligibilityNotes` | Eligibility Notes | `textarea` |  |  |  |
| Clinical Research Participation | Enrollment & Consent | `consentDate2` | Informed Consent Date | `date` |  |  |  |
| Clinical Research Participation | Enrollment & Consent | `consentVersion` | Consent Form Version | `text` |  |  |  |
| Clinical Research Participation | Enrollment & Consent | `participantId` | Study Participant ID | `text` |  |  |  |
| Clinical Research Participation | Participation Status | `enrollmentDate` | Enrollment Date | `date` |  |  |  |
| Clinical Research Participation | Participation Status | `studyArm` | Treatment Arm / Group | `text` |  |  |  |
| Clinical Research Participation | Participation Status | `currentStatus` | Current Study Status | `select` | Y |  |  |
| Clinical Research Participation | Participation Status | `adverseEvents` | Adverse Events / Protocol Deviations | `textarea` |  |  |  |
| Clinical Research Participation | Participation Status | `studyCoordinator` | Study Coordinator Contact | `text` |  |  |  |

### Result Charge Rules — `RESULT_CHARGE_RULES`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Result-Based Charge Rule | Result Charge Rule (ECW-BI-10; result_charge_rules table; CPT+dx auto-trigger when lab/imaging result arrives; org/practice-scoped) | `rcrId` | Rule ID (read-only UUID) | `text` |  |  |  |
| Result-Based Charge Rule | Result Charge Rule (ECW-BI-10; result_charge_rules table; CPT+dx auto-trigger when lab/imaging result arrives; org/practice-scoped) | `rcrResultType` | Result Type (required: lab/imaging/procedure; default lab) | `text` | Y |  |  |
| Result-Based Charge Rule | Result Charge Rule (ECW-BI-10; result_charge_rules table; CPT+dx auto-trigger when lab/imaging result arrives; org/practice-scoped) | `rcrTriggerCode` | Trigger Code (LOINC/CPT/panel code; optional) | `text` |  |  |  |
| Result-Based Charge Rule | Result Charge Rule (ECW-BI-10; result_charge_rules table; CPT+dx auto-trigger when lab/imaging result arrives; org/practice-scoped) | `rcrCptCode` | CPT Code (required; charge to auto-create) | `text` | Y |  |  |
| Result-Based Charge Rule | Result Charge Rule (ECW-BI-10; result_charge_rules table; CPT+dx auto-trigger when lab/imaging result arrives; org/practice-scoped) | `rcrIcd10Default` | ICD-10 Default (optional default dx for this charge) | `text` |  |  |  |
| Result-Based Charge Rule | Result Charge Rule (ECW-BI-10; result_charge_rules table; CPT+dx auto-trigger when lab/imaging result arrives; org/practice-scoped) | `rcrDescription` | Description (max 200 chars) | `text` |  |  |  |
| Result-Based Charge Rule | Result Charge Rule (ECW-BI-10; result_charge_rules table; CPT+dx auto-trigger when lab/imaging result arrives; org/practice-scoped) | `rcrUnits` | Units (default 1) | `text` |  |  |  |
| Result-Based Charge Rule | Result Charge Rule (ECW-BI-10; result_charge_rules table; CPT+dx auto-trigger when lab/imaging result arrives; org/practice-scoped) | `rcrActive` | Active (true/false; default true) | `checkbox` |  |  |  |

### Results Review — `results_review_cf`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT · tables `CLINICAL_ORDERS`, `CLINICAL_ORDER_RESULTS`, `NOTIFICATION_DELIVERIES`, `PATIENTS`, `SOURCE_RECORD_EVENTS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Result Details | Result | `test_name` | Test Name | `text` |  |  |  |
| Result Details | Result | `result_date` | Result Date | `date` |  |  |  |
| Result Details | Result | `result_value` | Result Value | `text` |  |  |  |
| Result Details | Result | `reference_range` | Reference Range | `text` |  |  |  |
| Result Details | Result | `status` | Status | `select` |  |  |  |
| Result Details | Result | `notes` | Clinical Notes | `textarea` |  |  |  |
