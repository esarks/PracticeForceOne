---
title: "PracticeForceOneCFTrackingFields4"
---

# CF Tracking — Field-Level Detail (part 4 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Clinical**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Clinical

### Documents — `documents_cf`

Screen: 1 page(s) · 5 section(s) · 27 field(s) · UI LIVE · DB BUILT · tables `APPEALS`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `DOCUMENTS`, `DOCUMENT_ACCESS_LOG`, `DOCUMENT_FOLDERS`, `PATIENTS`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Document Details | Document Information | `filename` | Filename | `text` |  |  |  |
| Document Details | Document Information | `documentType` | Document Type | `select` |  |  |  |
| Document Details | Document Information | `category` | Category | `select` |  |  |  |
| Document Details | Document Information | `status` | Status | `select` |  |  |  |
| Document Details | Document Information | `description` | Description | `textarea` |  |  |  |
| Document Details | Order & Patient Links (ECW-DOC-4) | `patientId` | Linked Patient | `text` |  |  |  |
| Document Details | Order & Patient Links (ECW-DOC-4) | `claimId` | Linked Claim | `text` |  |  |  |
| Document Details | Order & Patient Links (ECW-DOC-4) | `authorizationId` | Linked Authorization | `text` |  |  |  |
| Document Details | Order & Patient Links (ECW-DOC-4) | `orderResultId` | Linked Order/Result | `text` |  |  |  |
| Document Details | Document Lifecycle (ECW-DOC-5/10) | `versionNumber` | Version | `number` |  |  |  |
| Document Details | Document Lifecycle (ECW-DOC-5/10) | `processed` | Processed | `checkbox` |  |  |  |
| Document Details | Document Lifecycle (ECW-DOC-5/10) | `expiryDate` | Document Expiry Date (ECW-DOC-10) | `date` |  |  |  |
| Document Details | Document Lifecycle (ECW-DOC-5/10) | `expiryCategory` | Expiry Policy Category | `select` |  |  |  |
| Document Details | Document Lifecycle (ECW-DOC-5/10) | `signatureRequired` | Signature Required | `checkbox` |  |  |  |
| Document Details | Document Lifecycle (ECW-DOC-5/10) | `signedAt` | Signed Date | `date` |  |  |  |
| Document Details | Document Lifecycle (ECW-DOC-5/10) | `signedBy` | Signed By | `text` |  |  |  |
| Document Details | Document Lifecycle (ECW-DOC-5/10) | `processingNotes` | Processing Notes | `textarea` |  |  |  |
| Document Details | Physician Review (ECW-DOC-2) | `reviewRequired` | Review required (flag for physician) | `checkbox` |  |  |  |
| Document Details | Physician Review (ECW-DOC-2) | `reviewedBy` | Reviewed by | `typeahead` |  |  |  |
| Document Details | Physician Review (ECW-DOC-2) | `reviewedAt` | Review date | `date` |  |  |  |
| Document Details | Physician Review (ECW-DOC-2) | `reviewOutcome` | Review outcome | `select` |  |  |  |
| Document Details | Physician Review (ECW-DOC-2) | `reviewNotes` | Review notes | `textarea` |  |  |  |
| Document Details | Fax Composer | `faxNumber` | Destination fax number | `text` |  |  |  |
| Document Details | Fax Composer | `faxRecipient` | Recipient name | `text` |  |  |  |
| Document Details | Fax Composer | `faxRecipientOrg` | Recipient organization | `text` |  |  |  |
| Document Details | Fax Composer | `urgentFax` | Mark URGENT | `checkbox` |  |  |  |
| Document Details | Fax Composer | `coverSheetNotes` | Cover sheet notes | `textarea` |  |  |  |

### Drug Interaction Overrides — `drug_interactions_cf`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Drug Interaction Override History | Override Record | `drug1` | Drug | `text` |  | drug1 |  |
| Drug Interaction Override History | Override Record | `againstItem` | Interacts With | `text` |  | againstItem |  |
| Drug Interaction Override History | Override Record | `interactionType` | Interaction Type | `text` |  | interactionType |  |
| Drug Interaction Override History | Override Record | `severity` | Severity | `select` |  | severity |  |
| Drug Interaction Override History | Override Record | `overrideReason` | Override Reason | `text` |  | overrideReason |  |
| Drug Interaction Override History | Override Record | `overrideAction` | Action Taken | `text` |  | overrideAction |  |
| Drug Interaction Override History | Override Record | `overriddenAt` | Date / Time | `text` |  | overriddenAt |  |

### E-Prescribing — `eprescribing_cf`

Screen: 1 page(s) · 3 section(s) · 20 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Electronic Prescription | Patient & Encounter | `patientId` | Patient | `typeahead` | Y |  |  |
| Electronic Prescription | Patient & Encounter | `encounterId` | Encounter ID | `text` |  |  |  |
| Electronic Prescription | Patient & Encounter | `rxDate` | Prescription Date | `date` | Y |  |  |
| Electronic Prescription | Patient & Encounter | `prescriberNpi` | Prescriber NPI | `text` | Y |  |  |
| Electronic Prescription | Medication | `drugName` | Drug Name | `typeahead` | Y |  |  |
| Electronic Prescription | Medication | `strength` | Strength / Dose | `text` | Y |  |  |
| Electronic Prescription | Medication | `doseForm` | Dose Form | `select` |  |  |  |
| Electronic Prescription | Medication | `sig` | Sig (Directions) | `text` | Y |  |  |
| Electronic Prescription | Medication | `quantity` | Quantity | `number` | Y |  |  |
| Electronic Prescription | Medication | `quantityUnit` | Quantity Unit | `select` |  |  |  |
| Electronic Prescription | Medication | `daysSupply` | Days' Supply | `number` | Y |  |  |
| Electronic Prescription | Medication | `refills` | Refills Authorized | `number` |  |  |  |
| Electronic Prescription | Medication | `daw` | DAW / Substitution | `select` |  |  |  |
| Electronic Prescription | Pharmacy & Special Instructions | `pharmacyName` | Pharmacy | `typeahead` |  |  |  |
| Electronic Prescription | Pharmacy & Special Instructions | `pharmacyNcpdpId` | Pharmacy NCPDP ID | `text` |  |  |  |
| Electronic Prescription | Pharmacy & Special Instructions | `isControlled` | Controlled Substance | `checkbox` |  |  |  |
| Electronic Prescription | Pharmacy & Special Instructions | `deaSchedule` | DEA Schedule (if controlled) | `select` |  |  |  |
| Electronic Prescription | Pharmacy & Special Instructions | `diagnosisCode` | Diagnosis (ICD-10) | `typeahead` | Y |  |  |
| Electronic Prescription | Pharmacy & Special Instructions | `notes` | Prescription Notes / Clinical Context | `textarea` |  |  |  |
| Electronic Prescription | Pharmacy & Special Instructions | `sendToPharmacy` | Send electronically to pharmacy (E-Rx) | `checkbox` |  |  |  |

### ECG Interpretation — `ecg_interpretation_cf`

Screen: 1 page(s) · 4 section(s) · 25 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ECG / EKG Tracing Interpretation | Patient & Test | `patientId` | Patient | `typeahead` | Y |  |  |
| ECG / EKG Tracing Interpretation | Patient & Test | `encounterId` | Encounter ID | `text` |  |  |  |
| ECG / EKG Tracing Interpretation | Patient & Test | `ecgDate` | ECG Date | `date` | Y |  |  |
| ECG / EKG Tracing Interpretation | Patient & Test | `ecgTime` | ECG Time | `text` |  |  |  |
| ECG / EKG Tracing Interpretation | Patient & Test | `indication` | Indication | `select` | Y |  |  |
| ECG / EKG Tracing Interpretation | Patient & Test | `performedBy` | ECG Performed By | `typeahead` |  |  |  |
| ECG / EKG Tracing Interpretation | Patient & Test | `interpretedBy` | Interpreted / Overread By | `typeahead` | Y |  |  |
| ECG / EKG Tracing Interpretation | Measurements | `heartRate` | Heart Rate (bpm) | `number` |  |  |  |
| ECG / EKG Tracing Interpretation | Measurements | `prInterval` | PR Interval (ms) | `number` |  |  |  |
| ECG / EKG Tracing Interpretation | Measurements | `qrsDuration` | QRS Duration (ms) | `number` |  |  |  |
| ECG / EKG Tracing Interpretation | Measurements | `qtInterval` | QT Interval (ms) | `number` |  |  |  |
| ECG / EKG Tracing Interpretation | Measurements | `qtcBazett` | QTc Bazett (ms) | `number` |  |  |  |
| ECG / EKG Tracing Interpretation | Measurements | `qrsAxis` | QRS Axis (degrees) | `text` |  |  |  |
| ECG / EKG Tracing Interpretation | ECG Interpretation | `rhythm` | Rhythm | `select` | Y |  |  |
| ECG / EKG Tracing Interpretation | ECG Interpretation | `intervals` | Intervals | `select` |  |  |  |
| ECG / EKG Tracing Interpretation | ECG Interpretation | `conductionDefect` | Conduction Defect | `select` |  |  |  |
| ECG / EKG Tracing Interpretation | ECG Interpretation | `stChanges` | ST Segment Changes | `select` |  |  |  |
| ECG / EKG Tracing Interpretation | ECG Interpretation | `qWaves` | Pathological Q waves present (prior MI pattern) | `checkbox` |  |  |  |
| ECG / EKG Tracing Interpretation | ECG Interpretation | `qWaveLocation` | Q Wave Location | `text` |  |  |  |
| ECG / EKG Tracing Interpretation | ECG Interpretation | `lvhCriteria` | LVH criteria met (voltage criteria) | `checkbox` |  |  |  |
| ECG / EKG Tracing Interpretation | ECG Interpretation | `rvhPattern` | RVH / right heart strain pattern | `checkbox` |  |  |  |
| ECG / EKG Tracing Interpretation | ECG Interpretation | `earlyRepol` | Early repolarization pattern (benign J-point elevation) | `checkbox` |  |  |  |
| ECG / EKG Tracing Interpretation | Clinical Interpretation & Action | `overallInterpretation` | Overall Interpretation | `select` | Y |  |  |
| ECG / EKG Tracing Interpretation | Clinical Interpretation & Action | `clinicalNote` | Clinical Interpretation Note | `textarea` | Y |  |  |
| ECG / EKG Tracing Interpretation | Clinical Interpretation & Action | `actionTaken` | Clinical Action | `textarea` |  |  |  |

### ED Visit Note — `emergency_department_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Emergency Department Visit Note | Patient & Triage | `patientId` | Patient | `typeahead` | Y |  |  |
| Emergency Department Visit Note | Patient & Triage | `arrivalDate` | Arrival Date | `date` | Y |  |  |
| Emergency Department Visit Note | Patient & Triage | `arrivalTime` | Arrival Time | `text` |  |  |  |
| Emergency Department Visit Note | Patient & Triage | `provider` | Attending Emergency Physician | `typeahead` | Y |  |  |
| Emergency Department Visit Note | Patient & Triage | `esiLevel` | ESI Triage Level | `select` | Y |  |  |
| Emergency Department Visit Note | Patient & Triage | `arrivalMode` | Mode of Arrival | `select` |  |  |  |
| Emergency Department Visit Note | HPI & Initial Assessment | `chiefComplaint` | Chief Complaint | `text` | Y |  |  |
| Emergency Department Visit Note | HPI & Initial Assessment | `hpi` | History of Present Illness | `textarea` | Y |  |  |
| Emergency Department Visit Note | HPI & Initial Assessment | `triageVitals` | Triage Vitals | `textarea` | Y |  |  |
| Emergency Department Visit Note | Workup & Disposition | `workup` | Workup Ordered | `textarea` | Y |  |  |
| Emergency Department Visit Note | Workup & Disposition | `treatment` | ED Treatment / Interventions | `textarea` | Y |  |  |
| Emergency Department Visit Note | Workup & Disposition | `disposition` | Disposition | `select` | Y |  |  |
| Emergency Department Visit Note | Workup & Disposition | `dispositionNotes` | Disposition Notes | `textarea` | Y |  |  |

### Encounter Checkout — `encounter_checkout_cf`

Screen: 1 page(s) · 4 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Checkout — Disposition | Visit Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Checkout — Disposition | Visit Context | `encounterId` | Encounter ID | `text` | Y |  |  |
| Checkout — Disposition | Visit Context | `checkoutDate` | Checkout Date | `date` | Y |  |  |
| Checkout — Disposition | Disposition | `checkoutStatus` | Checkout Status | `select` | Y |  |  |
| Checkout — Disposition | Disposition | `disposition` | Disposition | `select` |  |  |  |
| Checkout — Disposition | Disposition | `returnInValue` | Return In | `number` |  |  |  |
| Checkout — Disposition | Disposition | `returnInUnit` | Return Unit | `select` |  |  |  |
| Checkout — Disposition | Disposition | `returnReason` | Return For / Reason | `text` |  |  |  |
| Checkout — Disposition | Work / School Excuse | `workExcuseDays` | Work Excuse Days | `number` |  |  |  |
| Checkout — Disposition | Work / School Excuse | `workRestrictions` | Work Restrictions | `textarea` |  |  |  |
| Checkout — Disposition | Work / School Excuse | `schoolExcuseDays` | School Excuse Days | `number` |  |  |  |
| Checkout — Disposition | After-Visit Summary | `patientInstructions` | Patient Instructions | `textarea` |  |  |  |
| Checkout — Disposition | After-Visit Summary | `avsPrinted` | AVS Printed / Provided to Patient | `checkbox` |  |  |  |
| Checkout — Disposition | After-Visit Summary | `checkedOutBy` | Checked Out By | `text` |  |  |  |

### Encounter Cohort — `ENCOUNTER_COHORT`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT · tables `ENCOUNTERS`, `PATIENTS`, `PATIENT_PROBLEMS`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Encounter Cohort Results | Cohort (read-only; FO-15) | `ecId` | Encounter ID | `text` |  |  |  |
| Encounter Cohort Results | Cohort (read-only; FO-15) | `ecEncounterDate` | Encounter Date | `text` |  |  |  |
| Encounter Cohort Results | Cohort (read-only; FO-15) | `ecStatus` | Visit Status | `text` |  |  |  |
| Encounter Cohort Results | Cohort (read-only; FO-15) | `ecEncounterType` | Encounter Type | `text` |  |  |  |
| Encounter Cohort Results | Cohort (read-only; FO-15) | `ecPatientId` | Patient ID | `text` |  |  |  |
| Encounter Cohort Results | Cohort (read-only; FO-15) | `ecPatientCount` | Unique Patient Count (aggregate) | `text` |  |  |  |

### Encounters — `encounters_register_cf`

Screen: 0 page(s) · 0 section(s) · 0 field(s) · UI STUB · DB BUILT · tables `APPOINTMENTS`, `AUDIT_LOG`, `CHARGE_REVIEW_QUEUE`, `ENCOUNTERS`, `ENCOUNTER_DIAGNOSES`, `ENCOUNTER_NOTES`, `ENCOUNTER_NOTE_AMENDMENTS`, `ENCOUNTER_NOTE_VERSIONS`, `ENCOUNTER_VITALS`

_No fields declared (nav stub)._

### Encounters — `ENCOUNTERS`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `AUDIT_LOG`, `CHARGE_REVIEW_QUEUE`, `ENCOUNTERS`, `ENCOUNTER_DIAGNOSES`, `ENCOUNTER_NOTES`, `ENCOUNTER_NOTE_AMENDMENTS`, `ENCOUNTER_NOTE_VERSIONS`, `ENCOUNTER_VITALS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Encounter | Encounter | `encId` | Encounter ID (read-only) | `text` |  |  |  |
| Encounter | Encounter | `encPatientId` | Patient ID (required) | `text` | Y |  |  |
| Encounter | Encounter | `encPracticeId` | Practice ID (required) | `text` | Y |  |  |
| Encounter | Encounter | `encProviderId` | Provider ID (required) | `text` | Y |  |  |
| Encounter | Encounter | `encAppointmentId` | Appointment ID (optional) | `text` |  |  |  |
| Encounter | Encounter | `encStatus` | Status (draft/signed/finalized) | `text` |  |  |  |
| Encounter | Encounter | `encDateOfService` | Date of Service (YYYY-MM-DD) | `text` |  |  |  |
| Encounter | Encounter | `encChiefComplaint` | Chief Complaint | `textarea` |  |  |  |
| Encounter | Encounter | `encVisitType` | Visit Type | `text` |  |  |  |

### Endocrinology — `endocrinology_cf`

Screen: 2 page(s) · 7 section(s) · 40 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Assessment | Assessment | `patientId` | Patient | `lookup` | Y |  |  |
| Assessment | Assessment | `assessmentDate` | Assessment Date | `date` |  |  |  |
| Assessment | Assessment | `assessedBy` | Assessed By | `text` |  |  |  |
| Assessment | Assessment | `conditionFocus` | Condition Focus | `select` |  |  |  |
| Assessment | Assessment | `encounterId` | Encounter ID | `text` |  |  |  |
| Assessment | Vitals / Anthropometrics | `weightKg` | Weight (kg) | `number` |  |  |  |
| Assessment | Vitals / Anthropometrics | `bmi` | BMI | `number` |  |  |  |
| Assessment | Vitals / Anthropometrics | `bloodPressure` | Blood Pressure | `text` |  |  |  |
| Assessment | Diabetes | `a1cPct` | A1C % | `number` |  |  |  |
| Assessment | Diabetes | `a1cDate` | A1C Date | `date` |  |  |  |
| Assessment | Diabetes | `fastingGlucose` | Fasting Glucose (mg/dL) | `number` |  |  |  |
| Assessment | Diabetes | `diabetesType` | Diabetes Type | `select` |  |  |  |
| Assessment | Diabetes | `diabetesDurationYr` | Duration (years) | `number` |  |  |  |
| Assessment | Diabetes | `hypoglycemiaFreq` | Hypoglycemia Frequency | `text` |  |  |  |
| Assessment | Diabetes | `footExamDone` | Foot Exam Done | `checkbox` |  |  |  |
| Assessment | Diabetes | `retinalExamDate` | Retinal Exam Date | `date` |  |  |  |
| Assessment | Diabetes | `nephropathyScreen` | Nephropathy Screen | `text` |  |  |  |
| Assessment | Thyroid | `tshValue` | TSH (mIU/L) | `number` |  |  |  |
| Assessment | Thyroid | `tshDate` | TSH Date | `date` |  |  |  |
| Assessment | Thyroid | `freeT4` | Free T4 (ng/dL) | `number` |  |  |  |
| Assessment | Thyroid | `freeT3` | Free T3 (pg/mL) | `number` |  |  |  |
| Assessment | Thyroid | `thyroidPeroxidaseAb` | Anti-TPO (IU/mL) | `number` |  |  |  |
| Assessment | Thyroid | `thyroglobulinAb` | Anti-TG (IU/mL) | `number` |  |  |  |
| Assessment | Bone Density (DEXA) | `dexaDate` | DEXA Date | `date` |  |  |  |
| Assessment | Bone Density (DEXA) | `dexaSpineTscore` | Spine T-Score | `number` |  |  |  |
| Assessment | Bone Density (DEXA) | `dexaHipTscore` | Hip T-Score | `number` |  |  |  |
| Assessment | Bone Density (DEXA) | `dexaInterpretation` | DEXA Interpretation | `select` |  |  |  |
| Assessment | Plan | `plan` | Assessment & Plan | `textarea` |  |  |  |
| Assessment | Plan | `followUpInterval` | Follow-Up Interval | `text` |  |  |  |
| Glucose Logs | Glucose Log Entry | `patientId` | Patient | `lookup` | Y |  |  |
| Glucose Logs | Glucose Log Entry | `logDate` | Date | `date` |  |  |  |
| Glucose Logs | Glucose Log Entry | `logTime` | Time | `text` |  |  |  |
| Glucose Logs | Glucose Log Entry | `mealContext` | Meal Context | `select` |  |  |  |
| Glucose Logs | Glucose Log Entry | `glucoseMgDl` | Glucose (mg/dL) | `number` |  |  |  |
| Glucose Logs | Glucose Log Entry | `insulinDoseUnits` | Insulin Dose (units) | `number` |  |  |  |
| Glucose Logs | Glucose Log Entry | `insulinType` | Insulin Type | `text` |  |  |  |
| Glucose Logs | Glucose Log Entry | `carbsGrams` | Carbs (g) | `number` |  |  |  |
| Glucose Logs | Glucose Log Entry | `activityMinutes` | Activity (min) | `number` |  |  |  |
| Glucose Logs | Glucose Log Entry | `hypoglycemia` | Hypoglycemia Episode | `checkbox` |  |  |  |
| Glucose Logs | Glucose Log Entry | `notes` | Notes | `text` |  |  |  |

### Epilepsy Clinic — `epilepsy_clinic_cf`

Screen: 2 page(s) · 7 section(s) · 63 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Evaluation | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Evaluation | `providerName` | Neurologist | `text` |  |  |  |
| Evaluation | Evaluation | `evalType` | Evaluation Type | `select` |  |  |  |
| Evaluation | Evaluation | `epilepsySyndrome` | Epilepsy Syndrome | `text` |  |  |  |
| Evaluation | Evaluation | `etiology` | Etiology | `select` |  |  |  |
| Evaluation | Seizure History | `seizureOnsetDate` | Seizure Onset Date | `date` |  |  |  |
| Evaluation | Seizure History | `seizureOnsetAge` | Onset Age (years) | `number` |  |  |  |
| Evaluation | Seizure History | `seizureFrequencyPerMonth` | Seizures / Month | `number` |  |  |  |
| Evaluation | Seizure History | `lastSeizureDate` | Last Seizure | `date` |  |  |  |
| Evaluation | Seizure History | `seizureFree` | Seizure Free | `checkbox` |  |  |  |
| Evaluation | Seizure History | `seizureFreeDurationMonths` | Seizure-Free Duration (months) | `number` |  |  |  |
| Evaluation | Seizure History | `statusEpilepticusHistory` | Status Epilepticus History | `checkbox` |  |  |  |
| Evaluation | Seizure History | `nocturnalSeizures` | Nocturnal Seizures | `checkbox` |  |  |  |
| Evaluation | Seizure History | `febrileSeizuresHistory` | Febrile Seizure History | `checkbox` |  |  |  |
| Evaluation | Seizure History | `autoimmuneEpilepsy` | Autoimmune Epilepsy | `checkbox` |  |  |  |
| Evaluation | Seizure History | `autoimmuneAntibody` | Autoimmune Antibody | `text` |  |  |  |
| Evaluation | EEG & Imaging | `interictalEegDone` | Interictal EEG | `checkbox` |  |  |  |
| Evaluation | EEG & Imaging | `interictalEegDate` | Interictal EEG Date | `date` |  |  |  |
| Evaluation | EEG & Imaging | `interictalEegFocus` | EEG Focus | `text` |  |  |  |
| Evaluation | EEG & Imaging | `videoEegDone` | Video EEG Done | `checkbox` |  |  |  |
| Evaluation | EEG & Imaging | `videoEegDate` | Video EEG Date | `date` |  |  |  |
| Evaluation | EEG & Imaging | `mriDone` | MRI Done | `checkbox` |  |  |  |
| Evaluation | EEG & Imaging | `mriDate` | MRI Date | `date` |  |  |  |
| Evaluation | EEG & Imaging | `mriLesionLocation` | MRI Lesion Location | `text` |  |  |  |
| Evaluation | EEG & Imaging | `petDone` | PET Done | `checkbox` |  |  |  |
| Evaluation | EEG & Imaging | `spectDone` | SPECT Done | `checkbox` |  |  |  |
| Evaluation | EEG & Imaging | `wadaDone` | Wada Done | `checkbox` |  |  |  |
| Evaluation | EEG & Imaging | `wadaDominantHemisphere` | Dominant Hemisphere | `select` |  |  |  |
| Evaluation | AED Management | `drugResistantEpilepsy` | Drug-Resistant Epilepsy | `checkbox` |  |  |  |
| Evaluation | AED Management | `drugResistantTrials` | Failed AED Trials | `number` |  |  |  |
| Evaluation | AED Management | `aedAdherenceConcern` | Adherence Concern | `checkbox` |  |  |  |
| Evaluation | Surgical & Neuromodulation | `surgicalEvaluationIndicated` | Surgical Eval Indicated | `checkbox` |  |  |  |
| Evaluation | Surgical & Neuromodulation | `surgicalCandidacy` | Surgical Candidacy | `select` |  |  |  |
| Evaluation | Surgical & Neuromodulation | `vagusNerveStimulatorCandidate` | VNS Candidate | `checkbox` |  |  |  |
| Evaluation | Surgical & Neuromodulation | `vnsCurrent` | VNS Implanted | `checkbox` |  |  |  |
| Evaluation | Surgical & Neuromodulation | `responsiveNeurostimulationCandidate` | RNS Candidate | `checkbox` |  |  |  |
| Evaluation | Surgical & Neuromodulation | `deepBrainStimulationCandidate` | DBS Candidate | `checkbox` |  |  |  |
| Evaluation | Surgical & Neuromodulation | `ketogenicDietCandidate` | Ketogenic Diet Candidate | `checkbox` |  |  |  |
| Evaluation | Surgical & Neuromodulation | `ketogenicDietOn` | Ketogenic Diet Active | `checkbox` |  |  |  |
| Evaluation | Safety & QOL | `drivingStatus` | Driving Status | `select` |  |  |  |
| Evaluation | Safety & QOL | `sudepCounselingDone` | SUDEP Counseling Done | `checkbox` |  |  |  |
| Evaluation | Safety & QOL | `seizureActionPlanProvided` | Seizure Action Plan Provided | `checkbox` |  |  |  |
| Evaluation | Safety & QOL | `qualityOfLifeScore` | QOL Score | `number` |  |  |  |
| Evaluation | Safety & QOL | `evalNotes` | Notes | `textarea` |  |  |  |
| Evaluation | Safety & QOL | `recommendations` | Recommendations | `textarea` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Follow-Up Visits | Follow-Up Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `providerName` | Neurologist | `text` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `seizuresSinceLastVisit` | Seizures Since Last Visit | `number` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `lastSeizureDate` | Last Seizure Date | `date` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `seizureFreeSinceLastVisit` | Seizure Free Since Last Visit | `checkbox` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `aedAdherence` | AED Adherence | `select` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `aedChangeMade` | AED Change Made | `checkbox` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `drugLevelAgent` | Drug Level Agent | `text` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `drugLevelResult` | Drug Level Result | `number` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `drugLevelUnit` | Unit | `text` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `drugLevelInTherapeuticRange` | In Therapeutic Range | `checkbox` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `vnsCheckDone` | VNS Check Done | `checkbox` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `rnsInterrogationDone` | RNS Interrogation Done | `checkbox` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `drivingStatus` | Driving Status | `text` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `nextVisitDate` | Next Visit | `date` |  |  |  |
| Follow-Up Visits | Follow-Up Visit | `visitNotes` | Notes | `textarea` |  |  |  |

### Extended Demographics — `patient_demographics_ext_cf`

Screen: 3 page(s) · 8 section(s) · 30 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Demographics | Reporting Demographics (FO-3) | `race` | Race | `text` |  |  |  |
| Demographics | Reporting Demographics (FO-3) | `ethnicity` | Ethnicity | `text` |  |  |  |
| Demographics | Reporting Demographics (FO-3) | `language` | Language | `text` |  |  |  |
| Demographics | Reporting Demographics (FO-3) | `translator_needed` | Translator Needed | `checkbox` |  |  |  |
| Demographics | Reporting Demographics (FO-3) | `vfc_eligibility` | VFC Eligibility | `text` |  |  |  |
| Demographics | Reporting Demographics (FO-3) | `immunization_registry_consent` | Immunization Registry Consent | `checkbox` |  |  |  |
| Demographics | Reporting Demographics (FO-3) | `birth_order` | Birth Order | `number` |  |  |  |
| Demographics | Reporting Demographics (FO-3) | `external_mrn` | External MRN | `text` |  |  |  |
| Demographics | Patient Status | `deceased` | Deceased | `checkbox` |  |  |  |
| Demographics | Patient Status | `deceased_date` | Deceased Date | `date` |  |  |  |
| Demographics | Patient Status | `suppress_statements` | Suppress Statements | `checkbox` |  |  |  |
| Demographics | Patient Status | `self_pay` | Self-Pay | `checkbox` |  |  |  |
| Demographics | Patient Status | `default_facility` | Default Facility | `text` |  |  |  |
| Emergency & Guarantor (FO-4) | Emergency Contact | `emergency_contact_name` | Emergency Contact Name | `text` |  |  |  |
| Emergency & Guarantor (FO-4) | Emergency Contact | `emergency_contact_phone` | Emergency Contact Phone | `tel` |  |  |  |
| Emergency & Guarantor (FO-4) | Guarantor | `guarantor_name` | Guarantor Name | `text` |  |  |  |
| Emergency & Guarantor (FO-4) | Guarantor | `guarantor_relationship` | Relationship | `text` |  |  |  |
| Emergency & Guarantor (FO-4) | Guarantor | `guarantor_phone` | Guarantor Phone | `tel` |  |  |  |
| Emergency & Guarantor (FO-4) | Patient Alert | `patient_alert` | Alert Text | `textarea` |  |  |  |
| Emergency & Guarantor (FO-4) | Patient Alert | `patient_alert_active` | Alert Active | `checkbox` |  |  |  |
| Emergency & Guarantor (FO-4) | Consents | `release_of_information` | Release of Information | `checkbox` |  |  |  |
| Emergency & Guarantor (FO-4) | Consents | `rx_history_consent` | Rx History Consent | `checkbox` |  |  |  |
| Emergency & Guarantor (FO-4) | Consents | `advance_directive_status` | Advance Directive Status | `text` |  |  |  |
| Additional Info (FO-22) | Preferred Identity | `preferred_name` | Preferred Name | `text` |  |  |  |
| Additional Info (FO-22) | Preferred Identity | `previous_name` | Previous Name | `text` |  |  |  |
| Additional Info (FO-22) | Preferred Identity | `pronouns` | Pronouns | `text` |  |  |  |
| Additional Info (FO-22) | Preferred Identity | `marital_status` | Marital Status | `select` |  |  |  |
| Additional Info (FO-22) | Preferred Identity | `employment_status` | Employment Status | `select` |  |  |  |
| Additional Info (FO-22) | USCDI (FO-20) | `sexual_orientation` | Sexual Orientation | `text` |  |  |  |
| Additional Info (FO-22) | USCDI (FO-20) | `gender_identity` | Gender Identity | `text` |  |  |  |

### Fall Risk Assessment — `fall_risk_assessment_cf`

Screen: 1 page(s) · 4 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Fall Risk Assessment | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Fall Risk Assessment | Patient | `assessmentDate` | Assessment Date | `date` | Y |  |  |
| Fall Risk Assessment | Patient | `assessor` | Assessed By | `typeahead` | Y |  |  |
| Fall Risk Assessment | Patient | `assessmentContext` | Assessment Context | `select` |  |  |  |
| Fall Risk Assessment | Morse Fall Scale Scoring | `fallHistory` | 1. History of Falls (within 3 months) | `select` | Y |  |  |
| Fall Risk Assessment | Morse Fall Scale Scoring | `secondaryDx` | 2. Secondary Diagnosis | `select` | Y |  |  |
| Fall Risk Assessment | Morse Fall Scale Scoring | `ambulatoryAid` | 3. Ambulatory Aid | `select` | Y |  |  |
| Fall Risk Assessment | Morse Fall Scale Scoring | `ivHepLock` | 4. IV or IV Access | `select` | Y |  |  |
| Fall Risk Assessment | Morse Fall Scale Scoring | `gaitBalance` | 5. Gait / Transferring | `select` | Y |  |  |
| Fall Risk Assessment | Morse Fall Scale Scoring | `mentalStatus` | 6. Mental Status | `select` | Y |  |  |
| Fall Risk Assessment | Morse Fall Scale Scoring | `morseScore` | Total Morse Fall Score (0-125) | `number` | Y |  |  |
| Fall Risk Assessment | Morse Fall Scale Scoring | `riskCategory` | Risk Category | `select` | Y |  |  |
| Fall Risk Assessment | Functional Assessment | `timedGetUp` | Timed Up and Go (TUG) Test | `select` | Y |  |  |
| Fall Risk Assessment | Functional Assessment | `timedGetUpSeconds` | TUG Time (seconds) | `number` |  |  |  |
| Fall Risk Assessment | Functional Assessment | `oneLegStand` | One-Leg Stand (balance) | `select` |  |  |  |
| Fall Risk Assessment | Interventions | `fallPrecautionsOrdered` | Fall precautions ordered / instructed | `checkbox` |  |  |  |
| Fall Risk Assessment | Interventions | `wristbandApplied` | Fall risk wristband applied | `checkbox` |  |  |  |
| Fall Risk Assessment | Interventions | `interventions2` | Interventions Implemented | `textarea` |  |  |  |

### Family & Contacts — `patient_family_links_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Family/Contact Link | Contact Information | `relatedName` | Name | `text` |  | relatedName |  |
| Family/Contact Link | Contact Information | `relationship` | Relationship | `text` |  | relationship |  |
| Family/Contact Link | Contact Information | `prefPhone` | Preferred Phone | `text` |  | prefPhone |  |
| Family/Contact Link | Contact Information | `workPhone` | Work Phone | `text` |  | workPhone |  |
| Family/Contact Link | Contact Information | `careRole` | Care Role | `text` |  | careRole |  |
| Family/Contact Link | Contact Information | `userType` | User Type | `text` |  | userType |  |
| Family/Contact Link | Permissions | `isFamily` | Family Member | `text` |  | isFamily |  |
| Family/Contact Link | Permissions | `isHipaa` | HIPAA Authorized | `text` |  | isHipaa |  |
| Family/Contact Link | Permissions | `isPrimary` | Primary Contact | `text` |  | isPrimary |  |
| Family/Contact Link | Permissions | `displayInIcw` | Show in ICW | `text` |  | displayInIcw |  |

### Fertility — `fertility_cf`

Screen: 2 page(s) · 6 section(s) · 63 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Consultation | Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Consultation | Visit | `consultDate` | Consultation Date | `date` |  |  |  |
| Consultation | Visit | `reiPhysician` | REI Physician | `text` |  |  |  |
| Consultation | Visit | `consultType` | Visit Type | `select` |  |  |  |
| Consultation | Visit | `status` | Status | `select` |  |  |  |
| Consultation | Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Consultation | Patient History | `age` | Age | `number` |  |  |  |
| Consultation | Patient History | `bmi` | BMI | `number` |  |  |  |
| Consultation | Patient History | `gravida` | Gravida | `number` |  |  |  |
| Consultation | Patient History | `para` | Para | `number` |  |  |  |
| Consultation | Patient History | `infertilityDurationMonths` | Infertility Duration (months) | `number` |  |  |  |
| Consultation | Patient History | `infertilityType` | Infertility Type | `select` |  |  |  |
| Consultation | Patient History | `menstrualCycleLength` | Cycle Length (days) | `number` |  |  |  |
| Consultation | Patient History | `cycleRegularity` | Cycle Regularity | `select` |  |  |  |
| Consultation | Patient History | `dysmenorrhea` | Dysmenorrhea | `checkbox` |  |  |  |
| Consultation | Patient History | `dyspareunia` | Dyspareunia | `checkbox` |  |  |  |
| Consultation | Patient History | `pelvicPain` | Pelvic Pain | `checkbox` |  |  |  |
| Consultation | Patient History | `priorIuiCycles` | Prior IUI Cycles | `number` |  |  |  |
| Consultation | Patient History | `priorIvfCycles` | Prior IVF Cycles | `number` |  |  |  |
| Consultation | Patient History | `embryosFrozen` | Embryos Frozen | `number` |  |  |  |
| Consultation | Partner / Semen Analysis | `partnerAge` | Partner Age | `number` |  |  |  |
| Consultation | Partner / Semen Analysis | `semenAnalysisDate` | Semen Analysis Date | `date` |  |  |  |
| Consultation | Partner / Semen Analysis | `saVolume` | SA Volume (mL) | `number` |  |  |  |
| Consultation | Partner / Semen Analysis | `saConcentration` | Concentration (M/mL) | `number` |  |  |  |
| Consultation | Partner / Semen Analysis | `saTotalMotilityPct` | Total Motility (%) | `number` |  |  |  |
| Consultation | Partner / Semen Analysis | `saProgressiveMotilityPct` | Progressive Motility (%) | `number` |  |  |  |
| Consultation | Partner / Semen Analysis | `saMorphologyPct` | Normal Morphology (%) | `number` |  |  |  |
| Consultation | Partner / Semen Analysis | `saWhoCriteria` | WHO Criteria | `select` |  |  |  |
| Consultation | Partner / Semen Analysis | `saInterpretation` | SA Interpretation | `select` |  |  |  |
| Consultation | Hormone / Ovarian Reserve Labs | `day3Fsh` | Day 3 FSH | `number` |  |  |  |
| Consultation | Hormone / Ovarian Reserve Labs | `day3Lh` | Day 3 LH | `number` |  |  |  |
| Consultation | Hormone / Ovarian Reserve Labs | `day3E2` | Day 3 E2 | `number` |  |  |  |
| Consultation | Hormone / Ovarian Reserve Labs | `amh` | AMH (ng/mL) | `number` |  |  |  |
| Consultation | Hormone / Ovarian Reserve Labs | `amhDate` | AMH Date | `date` |  |  |  |
| Consultation | Hormone / Ovarian Reserve Labs | `antralFollicleCountOd` | AFC Right (OD) | `number` |  |  |  |
| Consultation | Hormone / Ovarian Reserve Labs | `antralFollicleCountOs` | AFC Left (OS) | `number` |  |  |  |
| Consultation | Hormone / Ovarian Reserve Labs | `antralFollicleCountTotal` | AFC Total | `number` |  |  |  |
| Consultation | Hormone / Ovarian Reserve Labs | `thyroidTsh` | TSH | `number` |  |  |  |
| Consultation | Hormone / Ovarian Reserve Labs | `prolactin` | Prolactin | `number` |  |  |  |
| Consultation | Hormone / Ovarian Reserve Labs | `fastingGlucose` | Fasting Glucose | `number` |  |  |  |
| Consultation | Hormone / Ovarian Reserve Labs | `fastingInsulin` | Fasting Insulin | `number` |  |  |  |
| Consultation | Hormone / Ovarian Reserve Labs | `homaIr` | HOMA-IR | `number` |  |  |  |
| Consultation | Hormone / Ovarian Reserve Labs | `hgbA1c` | HbA1c (%) | `number` |  |  |  |
| Consultation | Diagnosis & Treatment Plan | `treatmentPlan` | Treatment Plan | `select` |  |  |  |
| Consultation | Diagnosis & Treatment Plan | `prognosis` | Prognosis | `select` |  |  |  |
| Consultation | Diagnosis & Treatment Plan | `plan` | Assessment & Plan | `textarea` |  |  |  |
| Consultation | Diagnosis & Treatment Plan | `followUpInterval` | Follow-Up Interval | `text` |  |  |  |
| Treatment Cycles | Treatment Cycle | `patientId` | Patient | `lookup` | Y |  |  |
| Treatment Cycles | Treatment Cycle | `cycleStartDate` | Cycle Start | `date` |  |  |  |
| Treatment Cycles | Treatment Cycle | `cycleNumber` | Cycle # | `number` |  |  |  |
| Treatment Cycles | Treatment Cycle | `cycleType` | Cycle Type | `select` |  |  |  |
| Treatment Cycles | Treatment Cycle | `triggerDate` | Trigger Date | `date` |  |  |  |
| Treatment Cycles | Treatment Cycle | `triggerType` | Trigger Type | `text` |  |  |  |
| Treatment Cycles | Treatment Cycle | `eggsRetrieved` | Eggs Retrieved | `number` |  |  |  |
| Treatment Cycles | Treatment Cycle | `miiCount` | MII (Mature) | `number` |  |  |  |
| Treatment Cycles | Treatment Cycle | `twoProNuclei` | 2PN (Fertilized) | `number` |  |  |  |
| Treatment Cycles | Treatment Cycle | `blastocystsAvailable` | Blastocysts | `number` |  |  |  |
| Treatment Cycles | Treatment Cycle | `embryosTransferred` | Embryos Transferred | `number` |  |  |  |
| Treatment Cycles | Treatment Cycle | `transferDate` | Transfer Date | `date` |  |  |  |
| Treatment Cycles | Treatment Cycle | `betaHcgDate` | Beta hCG Date | `date` |  |  |  |
| Treatment Cycles | Treatment Cycle | `betaHcgResult` | Beta hCG (mIU/mL) | `number` |  |  |  |
| Treatment Cycles | Treatment Cycle | `cycleOutcome` | Cycle Outcome | `select` |  |  |  |
| Treatment Cycles | Treatment Cycle | `notes` | Notes | `textarea` |  |  |  |

### Follow-Up Instructions — `follow_up_instructions_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Follow-Up Patient Instructions | Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Follow-Up Patient Instructions | Context | `encounterId` | Encounter ID | `text` | Y |  |  |
| Follow-Up Patient Instructions | Instructions | `inst1Type` | Instruction 1 Type | `select` |  |  |  |
| Follow-Up Patient Instructions | Instructions | `inst1Title` | Instruction 1 Title | `text` |  |  |  |
| Follow-Up Patient Instructions | Instructions | `inst1Body` | Instruction 1 Detail | `textarea` |  |  |  |
| Follow-Up Patient Instructions | Instructions | `inst1Url` | Instruction 1 URL (optional) | `text` |  |  |  |
| Follow-Up Patient Instructions | Instructions | `inst2Type` | Instruction 2 Type | `select` |  |  |  |
| Follow-Up Patient Instructions | Instructions | `inst2Title` | Instruction 2 Title | `text` |  |  |  |
| Follow-Up Patient Instructions | Instructions | `inst2Body` | Instruction 2 Detail | `textarea` |  |  |  |
| Follow-Up Patient Instructions | Instructions | `inst3Type` | Instruction 3 Type | `select` |  |  |  |
| Follow-Up Patient Instructions | Instructions | `inst3Title` | Instruction 3 Title | `text` |  |  |  |
| Follow-Up Patient Instructions | Instructions | `inst3Body` | Instruction 3 Detail | `textarea` |  |  |  |
| Follow-Up Patient Instructions | Return Precautions (Red Flags) | `returnPrecautions` | Return to ED / Call If... | `textarea` |  |  |  |
| Follow-Up Patient Instructions | Return Precautions (Red Flags) | `emergencyPhone` | Emergency / After-Hours Phone | `tel` |  |  |  |

### GYN Annual Exam — `gynecology_annual_cf`

Screen: 1 page(s) · 5 section(s) · 22 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Gynecology Annual Exam | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Gynecology Annual Exam | Patient & Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Gynecology Annual Exam | Patient & Visit | `gynVisitDate` | Visit Date | `date` | Y |  |  |
| Gynecology Annual Exam | Patient & Visit | `gynVisitType` | Visit Type | `select` | Y |  |  |
| Gynecology Annual Exam | Menstrual & Reproductive History | `lmpGyn` | Last Menstrual Period | `date` |  |  |  |
| Gynecology Annual Exam | Menstrual & Reproductive History | `cycleInterval` | Cycle Interval | `text` |  |  |  |
| Gynecology Annual Exam | Menstrual & Reproductive History | `cycleDuration` | Cycle Duration | `text` |  |  |  |
| Gynecology Annual Exam | Menstrual & Reproductive History | `menstrualConcerns` | Menstrual Concerns | `select` |  |  |  |
| Gynecology Annual Exam | Menstrual & Reproductive History | `gravida` | Gravida | `number` |  |  |  |
| Gynecology Annual Exam | Menstrual & Reproductive History | `para` | Para (T-P-A-L) | `text` |  |  |  |
| Gynecology Annual Exam | Menstrual & Reproductive History | `menopausalStatus` | Menopausal Status | `select` |  |  |  |
| Gynecology Annual Exam | Contraception | `currentContraception` | Current Contraception | `select` |  |  |  |
| Gynecology Annual Exam | Contraception | `contraceptionChange` | Contraception Change Requested | `select` |  |  |  |
| Gynecology Annual Exam | Cervical Cancer Screening | `papSmearDue` | Pap smear due at this visit | `checkbox` |  |  |  |
| Gynecology Annual Exam | Cervical Cancer Screening | `lastPapDate` | Last Pap Smear Date | `date` |  |  |  |
| Gynecology Annual Exam | Cervical Cancer Screening | `lastPapResult` | Last Pap Result | `select` |  |  |  |
| Gynecology Annual Exam | Cervical Cancer Screening | `hpvCoTest` | HPV co-testing done / ordered | `checkbox` |  |  |  |
| Gynecology Annual Exam | Cervical Cancer Screening | `papAndHpvResult` | Co-Test Result | `text` |  |  |  |
| Gynecology Annual Exam | Cervical Cancer Screening | `colposcopyHx` | History of colposcopy / LEEP / cone biopsy | `checkbox` |  |  |  |
| Gynecology Annual Exam | Breast Health | `cbe` | Clinical Breast Exam (CBE) | `select` |  |  |  |
| Gynecology Annual Exam | Breast Health | `lastMammogram` | Last Mammogram Date | `date` |  |  |  |
| Gynecology Annual Exam | Breast Health | `mammogramResult` | Last Mammogram Result | `select` |  |  |  |

### Gastroenterology — `gastroenterology_cf`

Screen: 3 page(s) · 9 section(s) · 59 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| GI Assessment | Assessment | `patientId` | Patient | `lookup` | Y |  |  |
| GI Assessment | Assessment | `assessmentDate` | Date | `date` |  |  |  |
| GI Assessment | Assessment | `assessedBy` | Assessed By | `text` |  |  |  |
| GI Assessment | Assessment | `primaryDiagnosis` | Primary Diagnosis (ICD-10) | `text` |  |  |  |
| GI Assessment | Assessment | `encounterId` | Encounter ID | `text` |  |  |  |
| GI Assessment | GI Symptoms | `bowelFrequencyDay` | Bowel Frequency / day | `number` |  |  |  |
| GI Assessment | GI Symptoms | `bristolStoolType` | Bristol Stool Type (1-7) | `number` |  |  |  |
| GI Assessment | GI Symptoms | `bloodInStool` | Blood in Stool | `checkbox` |  |  |  |
| GI Assessment | GI Symptoms | `abdominalPainVas` | Abdominal Pain (0-10) | `number` |  |  |  |
| GI Assessment | GI Symptoms | `nausea` | Nausea | `checkbox` |  |  |  |
| GI Assessment | GI Symptoms | `vomiting` | Vomiting | `checkbox` |  |  |  |
| GI Assessment | GI Symptoms | `dysphagia` | Dysphagia | `checkbox` |  |  |  |
| GI Assessment | GI Symptoms | `heartburn` | Heartburn / GERD | `checkbox` |  |  |  |
| GI Assessment | GI Symptoms | `weightLossLbs` | Weight Loss (lbs) | `number` |  |  |  |
| GI Assessment | H. pylori | `hPyloriTestType` | Test Type | `select` |  |  |  |
| GI Assessment | H. pylori | `hPyloriResult` | Result | `select` |  |  |  |
| GI Assessment | H. pylori | `hPyloriTestDate` | Test Date | `date` |  |  |  |
| GI Assessment | Laboratory | `hgbGDl` | Hgb (g/dL) | `number` |  |  |  |
| GI Assessment | Laboratory | `albuminGDl` | Albumin (g/dL) | `number` |  |  |  |
| GI Assessment | Laboratory | `altUL` | ALT (U/L) | `number` |  |  |  |
| GI Assessment | Laboratory | `astUL` | AST (U/L) | `number` |  |  |  |
| GI Assessment | Laboratory | `alkPhosUL` | Alk Phos (U/L) | `number` |  |  |  |
| GI Assessment | Laboratory | `bilirubinTotal` | Bilirubin Total (mg/dL) | `number` |  |  |  |
| GI Assessment | Laboratory | `fecalCalprotectin` | Fecal Calprotectin (µg/g) | `number` |  |  |  |
| GI Assessment | Laboratory | `crpMgL` | CRP (mg/L) | `number` |  |  |  |
| GI Assessment | Plan | `plan` | Assessment & Plan | `textarea` |  |  |  |
| GI Assessment | Plan | `followUpInterval` | Follow-Up Interval | `text` |  |  |  |
| Endoscopy / Colonoscopy | Procedure | `patientId` | Patient | `lookup` | Y |  |  |
| Endoscopy / Colonoscopy | Procedure | `procedureDate` | Procedure Date | `date` |  |  |  |
| Endoscopy / Colonoscopy | Procedure | `procedureType` | Procedure Type | `select` |  |  |  |
| Endoscopy / Colonoscopy | Procedure | `endoscopist` | Endoscopist | `text` |  |  |  |
| Endoscopy / Colonoscopy | Procedure | `indication` | Indication | `text` |  |  |  |
| Endoscopy / Colonoscopy | Procedure | `anesthesiaType` | Anesthesia | `select` |  |  |  |
| Endoscopy / Colonoscopy | Bowel Prep / BBPS (Colonoscopy) | `bowelPrepAgent` | Prep Agent | `text` |  |  |  |
| Endoscopy / Colonoscopy | Bowel Prep / BBPS (Colonoscopy) | `bbpsRightColon` | BBPS Right (0-3) | `number` |  |  |  |
| Endoscopy / Colonoscopy | Bowel Prep / BBPS (Colonoscopy) | `bbpsTransverse` | BBPS Transverse (0-3) | `number` |  |  |  |
| Endoscopy / Colonoscopy | Bowel Prep / BBPS (Colonoscopy) | `bbpsLeftColon` | BBPS Left (0-3) | `number` |  |  |  |
| Endoscopy / Colonoscopy | Bowel Prep / BBPS (Colonoscopy) | `bbpsTotal` | BBPS Total (0-9) | `number` |  |  |  |
| Endoscopy / Colonoscopy | Bowel Prep / BBPS (Colonoscopy) | `cecalIntubation` | Cecal Intubation | `checkbox` |  |  |  |
| Endoscopy / Colonoscopy | Bowel Prep / BBPS (Colonoscopy) | `withdrawalTimeSec` | Withdrawal Time (sec) | `number` |  |  |  |
| Endoscopy / Colonoscopy | Findings | `findingsSummary` | Findings Summary | `textarea` |  |  |  |
| Endoscopy / Colonoscopy | Findings | `polypsRemoved` | Polyps Removed | `number` |  |  |  |
| Endoscopy / Colonoscopy | Findings | `adenomasDetected` | Adenomas Detected | `number` |  |  |  |
| Endoscopy / Colonoscopy | Findings | `largestPolypMm` | Largest Polyp (mm) | `number` |  |  |  |
| Endoscopy / Colonoscopy | Findings | `polypMorphology` | Polyp Morphology | `select` |  |  |  |
| Endoscopy / Colonoscopy | Findings | `biopsiesTaken` | Biopsies Taken | `number` |  |  |  |
| Endoscopy / Colonoscopy | Findings | `histologyPending` | Histology Pending | `checkbox` |  |  |  |
| Endoscopy / Colonoscopy | Findings | `nextSurveillanceYr` | Next Surveillance (years) | `number` |  |  |  |
| Endoscopy / Colonoscopy | Findings | `complications` | Complications | `text` |  |  |  |
| IBD Activity | IBD Disease Activity | `patientId` | Patient | `lookup` | Y |  |  |
| IBD Activity | IBD Disease Activity | `assessmentDate` | Date | `date` |  |  |  |
| IBD Activity | IBD Disease Activity | `ibdType` | IBD Type | `select` |  |  |  |
| IBD Activity | IBD Disease Activity | `mayoScore` | Mayo Score (UC, 0-12) | `number` |  |  |  |
| IBD Activity | IBD Disease Activity | `harveyBradshawScore` | Harvey-Bradshaw (CD) | `number` |  |  |  |
| IBD Activity | IBD Disease Activity | `uceisTotalScore` | UCEIS Total (0-8) | `number` |  |  |  |
| IBD Activity | IBD Disease Activity | `steroidDependent` | Steroid Dependent | `checkbox` |  |  |  |
| IBD Activity | IBD Disease Activity | `hospitalizedInYear` | Hospitalized This Year | `checkbox` |  |  |  |
| IBD Activity | IBD Disease Activity | `biologicTherapy` | Current Biologic | `text` |  |  |  |
| IBD Activity | IBD Disease Activity | `notes` | Notes | `textarea` |  |  |  |

### Gender-Affirming Care — `gender_affirming_care_cf`

Screen: 4 page(s) · 14 section(s) · 94 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Identity | Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Identity | Visit | `assessmentDate` | Assessment Date | `date` |  |  |  |
| Identity | Visit | `providerName` | Provider | `text` |  |  |  |
| Identity | Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Identity | Gender Identity | `genderIdentity` | Gender Identity | `text` | Y |  |  |
| Identity | Gender Identity | `pronouns` | Pronouns | `text` |  |  |  |
| Identity | Gender Identity | `sexAssignedAtBirth` | Sex Assigned at Birth | `select` |  |  |  |
| Identity | Gender Identity | `preferredName` | Preferred Name | `text` |  |  |  |
| Identity | Gender Identity | `legalName` | Legal Name | `text` |  |  |  |
| Identity | Gender Identity | `sexualOrientation` | Sexual Orientation | `text` |  |  |  |
| Identity | Social & Legal Transition | `socialTransitionStatus` | Social Transition Status | `text` |  |  |  |
| Identity | Social & Legal Transition | `socialTransitionDate` | Social Transition Date | `date` |  |  |  |
| Identity | Social & Legal Transition | `legalNameChange` | Legal Name Change | `checkbox` |  |  |  |
| Identity | Social & Legal Transition | `legalNameChangeDate` | Name Change Date | `date` |  |  |  |
| Identity | Social & Legal Transition | `legalGenderMarkerChange` | Legal Gender Marker Changed | `checkbox` |  |  |  |
| Identity | Social & Legal Transition | `legalMarkerDate` | Marker Change Date | `date` |  |  |  |
| Identity | History | `ageFirstGenderAwareness` | Age First Gender Awareness | `number` |  |  |  |
| Identity | History | `consistentCrossGenderIdentity` | Consistent Cross-gender Identity | `checkbox` |  |  |  |
| Identity | History | `relationshipStatus` | Relationship Status | `text` |  |  |  |
| Identity | History | `livingSituation` | Living Situation | `text` |  |  |  |
| Identity | History | `supportSystemQuality` | Support System | `select` |  |  |  |
| Mental Health | Mental Health Provider | `mentalHealthProvider` | MH Provider Name | `text` |  |  |  |
| Mental Health | Mental Health Provider | `dsm5GenderDysphoriaDx` | DSM-5 Gender Dysphoria Dx | `checkbox` |  |  |  |
| Mental Health | Mental Health Provider | `mhpLetterOnFile` | MHP Letter On File | `checkbox` |  |  |  |
| Mental Health | Mental Health Provider | `mhpLetterDate` | MHP Letter Date | `date` |  |  |  |
| Mental Health | Safety & Wellbeing | `safetyAtHome` | Safe at Home | `checkbox` |  |  |  |
| Mental Health | Safety & Wellbeing | `safetyConcerns` | Safety Concerns | `textarea` |  |  |  |
| Mental Health | Safety & Wellbeing | `priorTrauma` | Prior Trauma | `checkbox` |  |  |  |
| Mental Health | Safety & Wellbeing | `traumaDescription` | Trauma Description | `text` |  |  |  |
| Mental Health | Safety & Wellbeing | `depressionPhq9` | PHQ-9 Score | `number` |  |  |  |
| Mental Health | Safety & Wellbeing | `anxietyGad7` | GAD-7 Score | `number` |  |  |  |
| Mental Health | Safety & Wellbeing | `suicidalIdeation` | Suicidal Ideation | `checkbox` |  |  |  |
| Mental Health | Safety & Wellbeing | `siPlan` | SI with Plan | `checkbox` |  |  |  |
| Mental Health | Safety & Wellbeing | `siAttempts` | Prior SI Attempts | `checkbox` |  |  |  |
| Mental Health | Safety & Wellbeing | `substanceUse` | Substance Use | `checkbox` |  |  |  |
| Mental Health | Safety & Wellbeing | `substanceDetails` | Substance Details | `text` |  |  |  |
| Mental Health | Safety & Wellbeing | `eatingConcerns` | Eating Concerns | `checkbox` |  |  |  |
| Medical | Vitals | `heightCm` | Height (cm) | `number` |  |  |  |
| Medical | Vitals | `weightKg` | Weight (kg) | `number` |  |  |  |
| Medical | Vitals | `bmi` | BMI | `number` |  |  |  |
| Medical | Vitals | `bpSystolic` | SBP | `number` |  |  |  |
| Medical | Vitals | `bpDiastolic` | DBP | `number` |  |  |  |
| Medical | Prior Hormone / Blocker Use | `priorHormoneUse` | Prior Hormone Use | `checkbox` |  |  |  |
| Medical | Prior Hormone / Blocker Use | `priorHormoneSource` | Source | `text` |  |  |  |
| Medical | Prior Hormone / Blocker Use | `priorHormoneDuration` | Duration | `text` |  |  |  |
| Medical | Prior Hormone / Blocker Use | `priorPubertyBlocker` | Prior Puberty Blocker | `checkbox` |  |  |  |
| Medical | Prior Hormone / Blocker Use | `blockerAgent` | Blocker Agent | `text` |  |  |  |
| Medical | Prior Hormone / Blocker Use | `blockerStartDate` | Blocker Start Date | `date` |  |  |  |
| Medical | Prior Hormone / Blocker Use | `tannerStage` | Tanner Stage | `number` |  |  |  |
| Medical | Baseline Labs | `labDrawDate` | Lab Draw Date | `date` |  |  |  |
| Medical | Baseline Labs | `baselineEstradiolPgMl` | Estradiol (pg/mL) | `number` |  |  |  |
| Medical | Baseline Labs | `baselineTestosteroneNgDl` | Testosterone (ng/dL) | `number` |  |  |  |
| Medical | Baseline Labs | `baselineLhMiuMl` | LH (mIU/mL) | `number` |  |  |  |
| Medical | Baseline Labs | `baselineFshMiuMl` | FSH (mIU/mL) | `number` |  |  |  |
| Medical | Baseline Labs | `baselineProlactin` | Prolactin | `number` |  |  |  |
| Medical | Baseline Labs | `baselineShbgNmolL` | SHBG (nmol/L) | `number` |  |  |  |
| Medical | Baseline Labs | `baselineHgb` | Hgb | `number` |  |  |  |
| Medical | Baseline Labs | `baselineHct` | Hct | `number` |  |  |  |
| Medical | Baseline Labs | `baselineLipidTc` | Total Cholesterol | `number` |  |  |  |
| Medical | Baseline Labs | `baselineLipidLdl` | LDL | `number` |  |  |  |
| Medical | Baseline Labs | `baselineLipidHdl` | HDL | `number` |  |  |  |
| Medical | Baseline Labs | `baselineGlucose` | Glucose | `number` |  |  |  |
| Medical | Baseline Labs | `baselineHba1c` | HbA1c (%) | `number` |  |  |  |
| Medical | Baseline Labs | `baselineCr` | Creatinine | `number` |  |  |  |
| Medical | Baseline Labs | `baselineAlt` | ALT | `number` |  |  |  |
| Medical | Baseline Labs | `baselinePsa` | PSA | `number` |  |  |  |
| Hormone Plan | Hormone Therapy | `hormoneTherapyDesired` | Hormone Therapy Desired | `checkbox` |  |  |  |
| Hormone Plan | Hormone Therapy | `hormoneTherapyType` | Therapy Type | `select` |  |  |  |
| Hormone Plan | Hormone Therapy | `hormoneStartDate` | Start Date | `date` |  |  |  |
| Hormone Plan | Feminizing Regimen | `feminingRegimenPlanned` | Feminizing Regimen Planned | `checkbox` |  |  |  |
| Hormone Plan | Feminizing Regimen | `estrogenAgent` | Estrogen Agent | `text` |  |  |  |
| Hormone Plan | Feminizing Regimen | `estrogenDose` | Estrogen Dose | `text` |  |  |  |
| Hormone Plan | Feminizing Regimen | `estrogenRoute` | Route | `text` |  |  |  |
| Hormone Plan | Feminizing Regimen | `antiandroGenAgent` | Anti-androgen Agent | `text` |  |  |  |
| Hormone Plan | Feminizing Regimen | `antiandroGenDose` | Anti-androgen Dose | `text` |  |  |  |
| Hormone Plan | Feminizing Regimen | `progesteroneDesired` | Progesterone Desired | `checkbox` |  |  |  |
| Hormone Plan | Feminizing Regimen | `progesteroneAgent` | Progesterone Agent | `text` |  |  |  |
| Hormone Plan | Feminizing Regimen | `progesteroneDose` | Progesterone Dose | `text` |  |  |  |
| Hormone Plan | Masculinizing Regimen | `masculinizingRegimenPlanned` | Masculinizing Regimen Planned | `checkbox` |  |  |  |
| Hormone Plan | Masculinizing Regimen | `testosteroneAgent` | Testosterone Agent | `text` |  |  |  |
| Hormone Plan | Masculinizing Regimen | `testosteroneDose` | Testosterone Dose | `text` |  |  |  |
| Hormone Plan | Masculinizing Regimen | `testosteroneRoute` | Route | `text` |  |  |  |
| Hormone Plan | Masculinizing Regimen | `pubertyBlockerContinued` | Puberty Blocker Continued | `checkbox` |  |  |  |
| Hormone Plan | Consent & WPATH | `wpathSocVersion` | WPATH SOC Version | `text` |  |  |  |
| Hormone Plan | Consent & WPATH | `informedConsentModel` | Informed Consent Model | `checkbox` |  |  |  |
| Hormone Plan | Consent & WPATH | `writtenConsentObtained` | Written Consent Obtained | `checkbox` |  |  |  |
| Hormone Plan | Consent & WPATH | `consentDate` | Consent Date | `date` |  |  |  |
| Hormone Plan | Consent & WPATH | `assessmentNotes` | Assessment Notes | `textarea` |  |  |  |
| Hormone Plan | Surgical Goals | `topSurgeryDesired` | Top Surgery Desired | `checkbox` |  |  |  |
| Hormone Plan | Surgical Goals | `topSurgeryType` | Top Surgery Type | `text` |  |  |  |
| Hormone Plan | Surgical Goals | `bottomSurgeryDesired` | Bottom Surgery Desired | `checkbox` |  |  |  |
| Hormone Plan | Surgical Goals | `bottomSurgeryType` | Bottom Surgery Type | `text` |  |  |  |
| Hormone Plan | Surgical Goals | `facialFeminingizationDesired` | Facial Feminization Desired | `checkbox` |  |  |  |
| Hormone Plan | Surgical Goals | `voiceTherapyDesired` | Voice Therapy Desired | `checkbox` |  |  |  |

### Gender-Affirming Care — `transgender_care_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Transgender / Gender-Affirming Care | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Transgender / Gender-Affirming Care | Patient | `visitDate` | Visit Date | `date` | Y |  |  |
| Transgender / Gender-Affirming Care | Patient | `provider` | Provider | `typeahead` | Y |  |  |
| Transgender / Gender-Affirming Care | Patient | `genderIdentity` | Gender Identity (patient stated) | `text` | Y |  |  |
| Transgender / Gender-Affirming Care | Patient | `pronouns` | Pronouns | `text` | Y |  |  |
| Transgender / Gender-Affirming Care | Patient | `visitType` | Visit Type | `select` | Y |  |  |
| Transgender / Gender-Affirming Care | Hormone Therapy | `currentHrt` | Current Gender-Affirming Hormone Therapy | `text` |  |  |  |
| Transgender / Gender-Affirming Care | Hormone Therapy | `hrtStartDate` | HRT Start Date | `date` |  |  |  |
| Transgender / Gender-Affirming Care | Hormone Therapy | `labsToday` | Labs Drawn / Reviewed Today | `select` | Y |  |  |
| Transgender / Gender-Affirming Care | Hormone Therapy | `labValues` | Key Lab Values | `textarea` |  |  |  |
| Transgender / Gender-Affirming Care | Hormone Therapy | `hrtPlan` | HRT Plan / Changes | `textarea` | Y |  |  |
| Transgender / Gender-Affirming Care | Preventive Care (anatomy-based) | `preventiveScreenings` | Preventive Care Screenings (anatomy-based) | `textarea` | Y |  |  |
| Transgender / Gender-Affirming Care | Preventive Care (anatomy-based) | `mentalHealth` | Mental Health / Wellbeing | `textarea` | Y |  |  |
