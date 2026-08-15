---
title: "PracticeForceOneCFTrackingFields9"
---

# CF Tracking — Field-Level Detail (part 9 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Clinical**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Clinical

### Oncology — `oncology_cf`

Screen: 2 page(s) · 6 section(s) · 48 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Assessment | Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Assessment | Visit | `assessmentDate` | Date | `date` |  |  |  |
| Assessment | Visit | `oncologist` | Oncologist | `text` |  |  |  |
| Assessment | Visit | `status` | Status | `select` |  |  |  |
| Assessment | Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Assessment | Visit | `followUpInterval` | Follow-Up Interval | `text` |  |  |  |
| Assessment | Diagnosis | `cancerType` | Cancer Type | `text` | Y |  |  |
| Assessment | Diagnosis | `cancerSubtype` | Subtype / Histology | `text` |  |  |  |
| Assessment | Diagnosis | `icd10Code` | ICD-10 Code | `text` |  |  |  |
| Assessment | Diagnosis | `stagingSystem` | Staging System | `select` |  |  |  |
| Assessment | Diagnosis | `stagingBasis` | Staging Basis | `select` |  |  |  |
| Assessment | TNM Staging | `tStage` | T Stage | `text` |  |  |  |
| Assessment | TNM Staging | `nStage` | N Stage | `text` |  |  |  |
| Assessment | TNM Staging | `mStage` | M Stage | `text` |  |  |  |
| Assessment | TNM Staging | `ajccStage` | AJCC Overall Stage | `select` |  |  |  |
| Assessment | Biomarkers | `erStatus` | ER Status | `select` |  |  |  |
| Assessment | Biomarkers | `prStatus` | PR Status | `select` |  |  |  |
| Assessment | Biomarkers | `her2Status` | HER2 Status | `select` |  |  |  |
| Assessment | Biomarkers | `grade` | Grade | `select` |  |  |  |
| Assessment | Biomarkers | `microsatelliteInstability` | MSI / MMR Status | `select` |  |  |  |
| Assessment | Biomarkers | `tmbMutationsMb` | TMB (mut/Mb) | `number` |  |  |  |
| Assessment | Disease Status & Treatment | `diseaseStatus` | Disease Status | `select` |  |  |  |
| Assessment | Disease Status & Treatment | `treatmentIntent` | Treatment Intent | `select` |  |  |  |
| Assessment | Disease Status & Treatment | `currentRegimen` | Current Regimen | `text` |  |  |  |
| Assessment | Disease Status & Treatment | `clinicalTrialId` | Clinical Trial ID | `text` |  |  |  |
| Assessment | Disease Status & Treatment | `plan` | Assessment & Plan | `textarea` |  |  |  |
| Chemo Administration | Chemo Administration | `patientId` | Patient | `lookup` | Y |  |  |
| Chemo Administration | Chemo Administration | `administrationDate` | Date | `date` |  |  |  |
| Chemo Administration | Chemo Administration | `regimenName` | Regimen | `text` | Y |  |  |
| Chemo Administration | Chemo Administration | `cycleNumber` | Cycle # | `number` |  |  |  |
| Chemo Administration | Chemo Administration | `dayOfCycle` | Day of Cycle | `number` |  |  |  |
| Chemo Administration | Chemo Administration | `heightCm` | Height (cm) | `number` |  |  |  |
| Chemo Administration | Chemo Administration | `weightKg` | Weight (kg) | `number` |  |  |  |
| Chemo Administration | Chemo Administration | `bsaM2` | BSA (m²) | `number` |  |  |  |
| Chemo Administration | Chemo Administration | `creatinineClearance` | CrCl (mL/min) | `number` |  |  |  |
| Chemo Administration | Chemo Administration | `ancKUl` | ANC (k/µL) | `number` |  |  |  |
| Chemo Administration | Chemo Administration | `hemoglobinGDl` | Hemoglobin (g/dL) | `number` |  |  |  |
| Chemo Administration | Chemo Administration | `plateletCount` | Platelets (k/µL) | `number` |  |  |  |
| Chemo Administration | Chemo Administration | `altUL` | ALT (U/L) | `number` |  |  |  |
| Chemo Administration | Chemo Administration | `totalBilirubin` | Total Bilirubin | `number` |  |  |  |
| Chemo Administration | Chemo Administration | `hydrationLiters` | Hydration (L) | `number` |  |  |  |
| Chemo Administration | Chemo Administration | `infusionReaction` | Infusion Reaction | `checkbox` |  |  |  |
| Chemo Administration | Chemo Administration | `doseReduced` | Dose Reduced | `checkbox` |  |  |  |
| Chemo Administration | Chemo Administration | `reductionReason` | Reduction Reason | `text` |  |  |  |
| Chemo Administration | Chemo Administration | `delayReason` | Delay Reason | `text` |  |  |  |
| Chemo Administration | Chemo Administration | `administeredBy` | Administered By | `text` |  |  |  |
| Chemo Administration | Chemo Administration | `supervisingOncologist` | Supervising Oncologist | `text` |  |  |  |
| Chemo Administration | Chemo Administration | `notes` | Notes | `textarea` |  |  |  |

### Ophthalmology — `ophthalmology_cf`

Screen: 3 page(s) · 12 section(s) · 84 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Eye Exam | Exam | `patientId` | Patient | `lookup` | Y |  |  |
| Eye Exam | Exam | `examDate` | Exam Date | `date` |  |  |  |
| Eye Exam | Exam | `examType` | Exam Type | `select` |  |  |  |
| Eye Exam | Exam | `chiefComplaint` | Chief Complaint | `text` |  |  |  |
| Eye Exam | Exam | `examinerId` | Examiner | `text` |  |  |  |
| Eye Exam | Exam | `encounterId` | Encounter ID | `text` |  |  |  |
| Eye Exam | Visual Acuity | `vaOdSc` | VA OD (sc) | `text` |  |  |  |
| Eye Exam | Visual Acuity | `vaOsSc` | VA OS (sc) | `text` |  |  |  |
| Eye Exam | Visual Acuity | `vaOdCc` | VA OD (cc) | `text` |  |  |  |
| Eye Exam | Visual Acuity | `vaOsCc` | VA OS (cc) | `text` |  |  |  |
| Eye Exam | Visual Acuity | `vaOuCc` | VA OU (cc) | `text` |  |  |  |
| Eye Exam | IOP | `iopOdMmhg` | IOP OD (mmHg) | `number` |  |  |  |
| Eye Exam | IOP | `iopOsMmhg` | IOP OS (mmHg) | `number` |  |  |  |
| Eye Exam | IOP | `iopMethod` | IOP Method | `select` |  |  |  |
| Eye Exam | IOP | `iopTime` | IOP Time | `text` |  |  |  |
| Eye Exam | External / Adnexa | `pupils` | Pupils (PERRL/APD) | `text` |  |  |  |
| Eye Exam | External / Adnexa | `eom` | Extraocular Motility | `text` |  |  |  |
| Eye Exam | External / Adnexa | `coverTest` | Cover Test | `text` |  |  |  |
| Eye Exam | External / Adnexa | `confrontationFields` | Confrontation Visual Fields | `text` |  |  |  |
| Eye Exam | Anterior Segment (Slit Lamp) | `lidsLashesOd` | Lids/Lashes OD | `text` |  |  |  |
| Eye Exam | Anterior Segment (Slit Lamp) | `lidsLashesOs` | Lids/Lashes OS | `text` |  |  |  |
| Eye Exam | Anterior Segment (Slit Lamp) | `conjunctivaScleraOd` | Conj/Sclera OD | `text` |  |  |  |
| Eye Exam | Anterior Segment (Slit Lamp) | `conjunctivaScleraOs` | Conj/Sclera OS | `text` |  |  |  |
| Eye Exam | Anterior Segment (Slit Lamp) | `corneaOd` | Cornea OD | `text` |  |  |  |
| Eye Exam | Anterior Segment (Slit Lamp) | `corneaOs` | Cornea OS | `text` |  |  |  |
| Eye Exam | Anterior Segment (Slit Lamp) | `anteriorChamberOd` | AC OD | `text` |  |  |  |
| Eye Exam | Anterior Segment (Slit Lamp) | `anteriorChamberOs` | AC OS | `text` |  |  |  |
| Eye Exam | Anterior Segment (Slit Lamp) | `lensOd` | Lens OD | `text` |  |  |  |
| Eye Exam | Anterior Segment (Slit Lamp) | `lensOs` | Lens OS | `text` |  |  |  |
| Eye Exam | Posterior Segment (Dilated) | `discOd` | Disc OD | `text` |  |  |  |
| Eye Exam | Posterior Segment (Dilated) | `discOs` | Disc OS | `text` |  |  |  |
| Eye Exam | Posterior Segment (Dilated) | `cupDiscRatioOd` | C/D OD | `number` |  |  |  |
| Eye Exam | Posterior Segment (Dilated) | `cupDiscRatioOs` | C/D OS | `number` |  |  |  |
| Eye Exam | Posterior Segment (Dilated) | `maculaOd` | Macula OD | `text` |  |  |  |
| Eye Exam | Posterior Segment (Dilated) | `maculaOs` | Macula OS | `text` |  |  |  |
| Eye Exam | Posterior Segment (Dilated) | `vesselsOd` | Vessels OD | `text` |  |  |  |
| Eye Exam | Posterior Segment (Dilated) | `vesselsOs` | Vessels OS | `text` |  |  |  |
| Eye Exam | Posterior Segment (Dilated) | `peripheryOd` | Periphery OD | `text` |  |  |  |
| Eye Exam | Posterior Segment (Dilated) | `peripheryOs` | Periphery OS | `text` |  |  |  |
| Eye Exam | Posterior Segment (Dilated) | `dilationDrops` | Dilation Drops | `text` |  |  |  |
| Eye Exam | Assessment & Plan | `assessment` | Assessment | `textarea` |  |  |  |
| Eye Exam | Assessment & Plan | `plan` | Plan | `textarea` |  |  |  |
| Eye Exam | Assessment & Plan | `followUpInterval` | Follow-Up | `text` |  |  |  |
| Visual Fields | Visual Field Test | `patientId` | Patient | `lookup` | Y |  |  |
| Visual Fields | Visual Field Test | `testDate` | Test Date | `date` |  |  |  |
| Visual Fields | Visual Field Test | `eye` | Eye | `select` |  |  |  |
| Visual Fields | Visual Field Test | `testType` | Test Type | `select` |  |  |  |
| Visual Fields | Visual Field Test | `strategy` | Strategy | `text` |  |  |  |
| Visual Fields | Visual Field Test | `fixationLosses` | Fixation Losses | `text` |  |  |  |
| Visual Fields | Visual Field Test | `falsePositives` | False Positives % | `text` |  |  |  |
| Visual Fields | Visual Field Test | `falseNegatives` | False Negatives % | `text` |  |  |  |
| Visual Fields | Visual Field Test | `meanDeviation` | MD (dB) | `number` |  |  |  |
| Visual Fields | Visual Field Test | `meanDeviationP` | MD P-value | `text` |  |  |  |
| Visual Fields | Visual Field Test | `patternStdDev` | PSD (dB) | `number` |  |  |  |
| Visual Fields | Visual Field Test | `vfiPct` | VFI % | `number` |  |  |  |
| Visual Fields | Visual Field Test | `ghtResult` | GHT Result | `text` |  |  |  |
| Visual Fields | Visual Field Test | `interpretation` | Interpretation | `textarea` |  |  |  |
| Optical Prescriptions | Prescription | `patientId` | Patient | `lookup` | Y |  |  |
| Optical Prescriptions | Prescription | `prescribedDate` | Date | `date` |  |  |  |
| Optical Prescriptions | Prescription | `expiryDate` | Expiry Date | `date` |  |  |  |
| Optical Prescriptions | Prescription | `prescriptionType` | Type | `select` |  |  |  |
| Optical Prescriptions | Prescription | `prescriberName` | Prescriber | `text` |  |  |  |
| Optical Prescriptions | Prescription | `prescriberNpi` | NPI | `text` |  |  |  |
| Optical Prescriptions | OD (Right Eye) | `odSphere` | Sphere | `number` |  |  |  |
| Optical Prescriptions | OD (Right Eye) | `odCylinder` | Cylinder | `number` |  |  |  |
| Optical Prescriptions | OD (Right Eye) | `odAxis` | Axis | `number` |  |  |  |
| Optical Prescriptions | OD (Right Eye) | `odAdd` | Add | `number` |  |  |  |
| Optical Prescriptions | OD (Right Eye) | `odPrism` | Prism | `text` |  |  |  |
| Optical Prescriptions | OS (Left Eye) | `osSphere` | Sphere | `number` |  |  |  |
| Optical Prescriptions | OS (Left Eye) | `osCylinder` | Cylinder | `number` |  |  |  |
| Optical Prescriptions | OS (Left Eye) | `osAxis` | Axis | `number` |  |  |  |
| Optical Prescriptions | OS (Left Eye) | `osAdd` | Add | `number` |  |  |  |
| Optical Prescriptions | OS (Left Eye) | `osPrism` | Prism | `text` |  |  |  |
| Optical Prescriptions | PD / Lens | `pdTotalMm` | PD Total (mm) | `number` |  |  |  |
| Optical Prescriptions | PD / Lens | `pdOdMm` | PD OD (mm) | `number` |  |  |  |
| Optical Prescriptions | PD / Lens | `pdOsMm` | PD OS (mm) | `number` |  |  |  |
| Optical Prescriptions | PD / Lens | `lensType` | Lens Type | `text` |  |  |  |
| Optical Prescriptions | PD / Lens | `lensMaterial` | Material | `text` |  |  |  |
| Optical Prescriptions | PD / Lens | `coating` | Coating | `text` |  |  |  |
| Optical Prescriptions | PD / Lens | `clBrand` | CL Brand | `text` |  |  |  |
| Optical Prescriptions | PD / Lens | `clBaseCurve` | CL Base Curve | `number` |  |  |  |
| Optical Prescriptions | PD / Lens | `clDiameter` | CL Diameter (mm) | `number` |  |  |  |
| Optical Prescriptions | PD / Lens | `clWearSchedule` | CL Wear Schedule | `text` |  |  |  |
| Optical Prescriptions | PD / Lens | `notes` | Notes | `textarea` |  |  |  |

### Optometry — `optometry_cf`

Screen: 2 page(s) · 12 section(s) · 114 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Eye Exam | Exam | `patientId` | Patient | `lookup` | Y |  |  |
| Eye Exam | Exam | `examDate` | Exam Date | `date` |  |  |  |
| Eye Exam | Exam | `optometrist` | Optometrist | `text` |  |  |  |
| Eye Exam | Exam | `examType` | Exam Type | `select` |  |  |  |
| Eye Exam | Exam | `chiefComplaint` | Chief Complaint | `text` |  |  |  |
| Eye Exam | Visual Acuity | `vaOdDistanceSc` | VA OD Distance SC | `text` |  |  |  |
| Eye Exam | Visual Acuity | `vaOdDistanceCc` | VA OD Distance CC | `text` |  |  |  |
| Eye Exam | Visual Acuity | `vaOdNearSc` | VA OD Near SC | `text` |  |  |  |
| Eye Exam | Visual Acuity | `vaOdNearCc` | VA OD Near CC | `text` |  |  |  |
| Eye Exam | Visual Acuity | `vaOsDistanceSc` | VA OS Distance SC | `text` |  |  |  |
| Eye Exam | Visual Acuity | `vaOsDistanceCc` | VA OS Distance CC | `text` |  |  |  |
| Eye Exam | Visual Acuity | `vaOsNearSc` | VA OS Near SC | `text` |  |  |  |
| Eye Exam | Visual Acuity | `vaOsNearCc` | VA OS Near CC | `text` |  |  |  |
| Eye Exam | Visual Acuity | `vaOuDistanceCc` | VA OU Distance CC | `text` |  |  |  |
| Eye Exam | Visual Acuity | `vaOuNearCc` | VA OU Near CC | `text` |  |  |  |
| Eye Exam | Binocular Vision & Pupils | `coverTest` | Cover Test | `text` |  |  |  |
| Eye Exam | Binocular Vision & Pupils | `eoms` | EOMs | `text` |  |  |  |
| Eye Exam | Binocular Vision & Pupils | `versions` | Versions | `text` |  |  |  |
| Eye Exam | Binocular Vision & Pupils | `npc` | NPC | `text` |  |  |  |
| Eye Exam | Binocular Vision & Pupils | `pupilOd` | Pupil OD | `text` |  |  |  |
| Eye Exam | Binocular Vision & Pupils | `pupilOs` | Pupil OS | `text` |  |  |  |
| Eye Exam | Binocular Vision & Pupils | `apdPresent` | APD Present | `checkbox` |  |  |  |
| Eye Exam | Binocular Vision & Pupils | `confrontationOd` | Confrontation OD | `text` |  |  |  |
| Eye Exam | Binocular Vision & Pupils | `confrontationOs` | Confrontation OS | `text` |  |  |  |
| Eye Exam | Binocular Vision & Pupils | `stereopsisSeconds` | Stereopsis (arc sec) | `number` |  |  |  |
| Eye Exam | Binocular Vision & Pupils | `colorVisionOd` | Color Vision OD | `text` |  |  |  |
| Eye Exam | Binocular Vision & Pupils | `colorVisionOs` | Color Vision OS | `text` |  |  |  |
| Eye Exam | Manifest Refraction | `rxOdSphere` | OD Sphere | `text` |  |  |  |
| Eye Exam | Manifest Refraction | `rxOdCylinder` | OD Cylinder | `text` |  |  |  |
| Eye Exam | Manifest Refraction | `rxOdAxis` | OD Axis | `number` |  |  |  |
| Eye Exam | Manifest Refraction | `rxOdAdd` | OD Add | `text` |  |  |  |
| Eye Exam | Manifest Refraction | `rxOsSphere` | OS Sphere | `text` |  |  |  |
| Eye Exam | Manifest Refraction | `rxOsCylinder` | OS Cylinder | `text` |  |  |  |
| Eye Exam | Manifest Refraction | `rxOsAxis` | OS Axis | `number` |  |  |  |
| Eye Exam | Manifest Refraction | `rxOsAdd` | OS Add | `text` |  |  |  |
| Eye Exam | IOP & CCT | `iopOd` | IOP OD (mmHg) | `number` |  |  |  |
| Eye Exam | IOP & CCT | `iopOs` | IOP OS (mmHg) | `number` |  |  |  |
| Eye Exam | IOP & CCT | `iopMethod` | IOP Method | `select` |  |  |  |
| Eye Exam | IOP & CCT | `cctOd` | CCT OD (µm) | `number` |  |  |  |
| Eye Exam | IOP & CCT | `cctOs` | CCT OS (µm) | `number` |  |  |  |
| Eye Exam | Slit Lamp | `slLidsOd` | Lids OD | `text` |  |  |  |
| Eye Exam | Slit Lamp | `slLidsOs` | Lids OS | `text` |  |  |  |
| Eye Exam | Slit Lamp | `slConjunctivaOd` | Conjunctiva OD | `text` |  |  |  |
| Eye Exam | Slit Lamp | `slConjunctivaOs` | Conjunctiva OS | `text` |  |  |  |
| Eye Exam | Slit Lamp | `slCorneaOd` | Cornea OD | `text` |  |  |  |
| Eye Exam | Slit Lamp | `slCorneaOs` | Cornea OS | `text` |  |  |  |
| Eye Exam | Slit Lamp | `slAcOd` | AC OD | `text` |  |  |  |
| Eye Exam | Slit Lamp | `slAcOs` | AC OS | `text` |  |  |  |
| Eye Exam | Slit Lamp | `slLensOd` | Lens OD | `text` |  |  |  |
| Eye Exam | Slit Lamp | `slLensOs` | Lens OS | `text` |  |  |  |
| Eye Exam | Fundus | `fundusMethod` | Fundus Method | `select` |  |  |  |
| Eye Exam | Fundus | `discOd` | Disc OD | `text` |  |  |  |
| Eye Exam | Fundus | `discOs` | Disc OS | `text` |  |  |  |
| Eye Exam | Fundus | `cdRatioOd` | C/D Ratio OD | `text` |  |  |  |
| Eye Exam | Fundus | `cdRatioOs` | C/D Ratio OS | `text` |  |  |  |
| Eye Exam | Fundus | `maculaOd` | Macula OD | `text` |  |  |  |
| Eye Exam | Fundus | `maculaOs` | Macula OS | `text` |  |  |  |
| Eye Exam | Fundus | `vesselsOd` | Vessels OD | `text` |  |  |  |
| Eye Exam | Fundus | `vesselsOs` | Vessels OS | `text` |  |  |  |
| Eye Exam | Fundus | `vfDone` | Visual Field Done | `checkbox` |  |  |  |
| Eye Exam | Fundus | `octDone` | OCT Done | `checkbox` |  |  |  |
| Eye Exam | Fundus | `fundusPhotosDone` | Fundus Photos Done | `checkbox` |  |  |  |
| Eye Exam | Assessment & Plan | `diagnoses` | Diagnoses | `textarea` |  |  |  |
| Eye Exam | Assessment & Plan | `newRxOdSphere` | New Rx OD Sphere | `text` |  |  |  |
| Eye Exam | Assessment & Plan | `newRxOdCylinder` | New Rx OD Cylinder | `text` |  |  |  |
| Eye Exam | Assessment & Plan | `newRxOdAxis` | New Rx OD Axis | `number` |  |  |  |
| Eye Exam | Assessment & Plan | `newRxOdAdd` | New Rx OD Add | `text` |  |  |  |
| Eye Exam | Assessment & Plan | `newRxOsSphere` | New Rx OS Sphere | `text` |  |  |  |
| Eye Exam | Assessment & Plan | `newRxOsCylinder` | New Rx OS Cylinder | `text` |  |  |  |
| Eye Exam | Assessment & Plan | `newRxOsAxis` | New Rx OS Axis | `number` |  |  |  |
| Eye Exam | Assessment & Plan | `newRxOsAdd` | New Rx OS Add | `text` |  |  |  |
| Eye Exam | Assessment & Plan | `newRxLensType` | Lens Type | `text` |  |  |  |
| Eye Exam | Assessment & Plan | `newRxLensMaterial` | Lens Material | `text` |  |  |  |
| Eye Exam | Assessment & Plan | `newRxLensCoating` | Lens Coating | `text` |  |  |  |
| Eye Exam | Assessment & Plan | `returnVisitMonths` | Return Visit (months) | `number` |  |  |  |
| Contact Lenses | Contact Lens Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Contact Lenses | Contact Lens Visit | `fitDate` | Visit Date | `date` |  |  |  |
| Contact Lenses | Contact Lens Visit | `optometrist` | Optometrist | `text` |  |  |  |
| Contact Lenses | Contact Lens Visit | `visitType` | Visit Type | `select` |  |  |  |
| Contact Lenses | CL Rx — OD | `clOdBrand` | OD Brand | `text` |  |  |  |
| Contact Lenses | CL Rx — OD | `clOdType` | OD Type | `text` |  |  |  |
| Contact Lenses | CL Rx — OD | `clOdMaterial` | OD Material | `text` |  |  |  |
| Contact Lenses | CL Rx — OD | `clOdBc` | OD Base Curve | `text` |  |  |  |
| Contact Lenses | CL Rx — OD | `clOdDiameter` | OD Diameter | `text` |  |  |  |
| Contact Lenses | CL Rx — OD | `clOdSphere` | OD Sphere | `text` |  |  |  |
| Contact Lenses | CL Rx — OD | `clOdCylinder` | OD Cylinder | `text` |  |  |  |
| Contact Lenses | CL Rx — OD | `clOdAxis` | OD Axis | `number` |  |  |  |
| Contact Lenses | CL Rx — OD | `clOdAdd` | OD Add | `text` |  |  |  |
| Contact Lenses | CL Rx — OD | `clOdModality` | OD Modality | `select` |  |  |  |
| Contact Lenses | CL Rx — OS | `clOsBrand` | OS Brand | `text` |  |  |  |
| Contact Lenses | CL Rx — OS | `clOsType` | OS Type | `text` |  |  |  |
| Contact Lenses | CL Rx — OS | `clOsMaterial` | OS Material | `text` |  |  |  |
| Contact Lenses | CL Rx — OS | `clOsBc` | OS Base Curve | `text` |  |  |  |
| Contact Lenses | CL Rx — OS | `clOsDiameter` | OS Diameter | `text` |  |  |  |
| Contact Lenses | CL Rx — OS | `clOsSphere` | OS Sphere | `text` |  |  |  |
| Contact Lenses | CL Rx — OS | `clOsCylinder` | OS Cylinder | `text` |  |  |  |
| Contact Lenses | CL Rx — OS | `clOsAxis` | OS Axis | `number` |  |  |  |
| Contact Lenses | CL Rx — OS | `clOsAdd` | OS Add | `text` |  |  |  |
| Contact Lenses | CL Rx — OS | `clOsModality` | OS Modality | `select` |  |  |  |
| Contact Lenses | Fit Assessment | `vaOdWithCl` | VA OD with CL | `text` |  |  |  |
| Contact Lenses | Fit Assessment | `vaOsWithCl` | VA OS with CL | `text` |  |  |  |
| Contact Lenses | Fit Assessment | `clFitCentrationOd` | Centration OD | `text` |  |  |  |
| Contact Lenses | Fit Assessment | `clFitCentrationOs` | Centration OS | `text` |  |  |  |
| Contact Lenses | Fit Assessment | `clFitMovementOd` | Movement OD | `text` |  |  |  |
| Contact Lenses | Fit Assessment | `clFitMovementOs` | Movement OS | `text` |  |  |  |
| Contact Lenses | Fit Assessment | `clFitCoverageOd` | Coverage OD | `text` |  |  |  |
| Contact Lenses | Fit Assessment | `clFitCoverageOs` | Coverage OS | `text` |  |  |  |
| Contact Lenses | Fit Assessment | `overRefractionOd` | Over-Refraction OD | `text` |  |  |  |
| Contact Lenses | Fit Assessment | `overRefractionOs` | Over-Refraction OS | `text` |  |  |  |
| Contact Lenses | Fit Assessment | `patientComfortable` | Patient Comfortable | `checkbox` |  |  |  |
| Contact Lenses | Fit Assessment | `wearScheduleHours` | Wear Schedule (hrs/day) | `number` |  |  |  |
| Contact Lenses | Fit Assessment | `wearScheduleDays` | Wear Schedule (days/wk) | `number` |  |  |  |
| Contact Lenses | Fit Assessment | `replacementSchedule` | Replacement Schedule | `text` |  |  |  |
| Contact Lenses | Fit Assessment | `solutionRecommended` | Solution Recommended | `text` |  |  |  |

### Order AOE Templates — `aoe_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| AOE Question Template | Template Details | `orderCode` | Order Code | `text` | Y | orderCode |  |
| AOE Question Template | Template Details | `orderType` | Order Type | `select` | Y | orderType |  |

### Order Dx Matrix — `order_dx_matrix_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Order x Diagnosis Pointer Matrix | Dx Pointers | `orderId` | Order ID | `text` |  | orderId |  |
| Order x Diagnosis Pointer Matrix | Dx Pointers | `diagnosisIds` | Diagnosis ICD Codes (comma-separated) | `text` |  | diagnosisIds |  |

### Order Manager — `orders_manager_cf`

Screen: 0 page(s) · 0 section(s) · 0 field(s) · UI STUB · DB BUILT · tables `CLINICAL_ORDERS`, `NOTIFICATION_DELIVERIES`, `PATIENTS`, `PATIENT_INSURANCES`, `PAYER_RULES`, `SOURCE_RECORD_EVENTS`, `USERS`

_No fields declared (nav stub)._

### Order Results — `clinical_order_results_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `CLINICAL_ORDERS`, `CLINICAL_ORDER_RESULTS`, `NOTIFICATION_DELIVERIES`, `PATIENTS`, `SOURCE_RECORD_EVENTS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Result Detail | Order Information | `orderType` | Order type | `text` |  |  |  |
| Result Detail | Order Information | `orderName` | Order name | `text` |  |  |  |
| Result Detail | Order Information | `orderCode` | CPT/LOINC code | `text` |  |  |  |
| Result Detail | Order Information | `status` | Status | `text` |  |  |  |
| Result Detail | Order Information | `orderedBy` | Ordered by | `text` |  |  |  |
| Result Detail | Order Information | `orderedAt` | Ordered at | `text` |  |  |  |
| Result Detail | Order Information | `resultDate` | Result date | `text` |  |  |  |
| Result Detail | Order Information | `performingLab` | Performing lab/facility | `text` |  |  |  |
| Result Detail | Result | `resultSummary` | Result summary (structured) | `textarea` |  |  |  |
| Result Detail | Result | `resultNarrative` | Result narrative / interpretation | `textarea` |  |  |  |
| Result Detail | Result | `criticalFlag` | Critical / abnormal flag | `checkbox` |  |  |  |
| Result Detail | Physician Review | `reviewedAt` | Reviewed at | `text` |  |  |  |
| Result Detail | Physician Review | `reviewedBy` | Reviewed by | `text` |  |  |  |
| Result Detail | Physician Review | `reviewNotes` | Review notes | `textarea` |  |  |  |

### Order Set Builder — `order_set_template_cf`

Screen: 1 page(s) · 4 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Order Set Template | Order Set Details | `orderSetName` | Order Set Name | `text` | Y |  |  |
| Order Set Template | Order Set Details | `category` | Category | `select` | Y |  |  |
| Order Set Template | Order Set Details | `specialty` | Specialty | `select` |  |  |  |
| Order Set Template | Order Set Details | `diagnosisTrigger` | Diagnosis / Trigger ICD-10 (for smart suggestion) | `text` |  |  |  |
| Order Set Template | Order Set Details | `setAuthor` | Created By | `typeahead` | Y |  |  |
| Order Set Template | Order Set Details | `setStatus` | Status | `select` | Y |  |  |
| Order Set Template | Labs / Diagnostics in Set | `labOrders` | Lab Orders | `textarea` |  |  |  |
| Order Set Template | Labs / Diagnostics in Set | `imagingOrders` | Imaging Orders | `textarea` |  |  |  |
| Order Set Template | Labs / Diagnostics in Set | `diagnosticOrders` | Other Diagnostics | `textarea` |  |  |  |
| Order Set Template | Medications in Set | `medicationsIncluded` | Medications (optional — confirm before prescribing) | `textarea` |  |  |  |
| Order Set Template | Referrals & Education | `referralsIncluded` | Referrals in Set | `textarea` |  |  |  |
| Order Set Template | Referrals & Education | `patientEducation` | Patient Education Materials | `textarea` |  |  |  |

### Order Sets — `ORDER_SETS`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clinical Order Set | Order Set (ECW-OR-3 + ECW-CL-73; order_sets + order_set_items tables; dx-triggered named bundles: lab/imaging/procedure/medication/education items; one-click order set application at encounter charting; GET /search for catalog; POST /{id}/apply to place on encounter; org+practice-scoped) | `osId` | Order Set ID (read-only UUID) | `text` |  |  |  |
| Clinical Order Set | Order Set (ECW-OR-3 + ECW-CL-73; order_sets + order_set_items tables; dx-triggered named bundles: lab/imaging/procedure/medication/education items; one-click order set application at encounter charting; GET /search for catalog; POST /{id}/apply to place on encounter; org+practice-scoped) | `osName` | Order Set Name (required; max 160 chars) | `text` | Y |  |  |
| Clinical Order Set | Order Set (ECW-OR-3 + ECW-CL-73; order_sets + order_set_items tables; dx-triggered named bundles: lab/imaging/procedure/medication/education items; one-click order set application at encounter charting; GET /search for catalog; POST /{id}/apply to place on encounter; org+practice-scoped) | `osDescription` | Description (optional) | `textarea` |  |  |  |
| Clinical Order Set | Order Set (ECW-OR-3 + ECW-CL-73; order_sets + order_set_items tables; dx-triggered named bundles: lab/imaging/procedure/medication/education items; one-click order set application at encounter charting; GET /search for catalog; POST /{id}/apply to place on encounter; org+practice-scoped) | `osCategory` | Category (optional; max 60 chars; e.g. Preventive/Diabetes/Hypertension) | `text` |  |  |  |
| Clinical Order Set | Order Set (ECW-OR-3 + ECW-CL-73; order_sets + order_set_items tables; dx-triggered named bundles: lab/imaging/procedure/medication/education items; one-click order set application at encounter charting; GET /search for catalog; POST /{id}/apply to place on encounter; org+practice-scoped) | `osDxCode` | Primary Dx Code (optional; ICD-10 trigger; max 20 chars) | `text` |  |  |  |
| Clinical Order Set | Order Set (ECW-OR-3 + ECW-CL-73; order_sets + order_set_items tables; dx-triggered named bundles: lab/imaging/procedure/medication/education items; one-click order set application at encounter charting; GET /search for catalog; POST /{id}/apply to place on encounter; org+practice-scoped) | `osDxCode2` | Secondary Dx Code (optional; ICD-10; max 20 chars) | `text` |  |  |  |
| Clinical Order Set | Order Set (ECW-OR-3 + ECW-CL-73; order_sets + order_set_items tables; dx-triggered named bundles: lab/imaging/procedure/medication/education items; one-click order set application at encounter charting; GET /search for catalog; POST /{id}/apply to place on encounter; org+practice-scoped) | `osIsFavorite` | Is Favorite (true/false; per-user quick-access) | `checkbox` |  |  |  |
| Clinical Order Set | Order Set (ECW-OR-3 + ECW-CL-73; order_sets + order_set_items tables; dx-triggered named bundles: lab/imaging/procedure/medication/education items; one-click order set application at encounter charting; GET /search for catalog; POST /{id}/apply to place on encounter; org+practice-scoped) | `osIsQuick` | Is Quick (true/false; show in quick-order toolbar) | `checkbox` |  |  |  |
| Clinical Order Set | Order Set (ECW-OR-3 + ECW-CL-73; order_sets + order_set_items tables; dx-triggered named bundles: lab/imaging/procedure/medication/education items; one-click order set application at encounter charting; GET /search for catalog; POST /{id}/apply to place on encounter; org+practice-scoped) | `osActive` | Active (true/false; default true) | `checkbox` |  |  |  |

### Order Sets — `order_sets_cf`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB BUILT · tables `CLAIMS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Order Set | Details | `name` | Name | `text` | Y |  |  |
| Order Set | Details | `category` | Category | `select` |  |  |  |
| Order Set | Details | `dx_code` | Associated Diagnosis | `typeahead` |  |  |  |
| Order Set | Details | `description` | Description | `textarea` |  |  |  |
| Order Set | Details | `is_active` | Active | `checkbox` |  |  |  |

### Orders — `orders_cf`

Screen: 1 page(s) · 7 section(s) · 35 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_ORDERS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `NOTIFICATION_DELIVERIES`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PAYER_RULES`, `PRACTICES`, `PROVIDERS`, `SOURCE_RECORD_EVENTS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Order | Diagnostic Order | `patientId` | Patient | `lookup` | Y |  |  |
| Order | Diagnostic Order | `orderType` | Order Type | `select` | Y |  |  |
| Order | Diagnostic Order | `priority` | Priority | `select` |  |  |  |
| Order | Diagnostic Order | `orderName` | Order | `text` | Y |  |  |
| Order | Diagnostic Order | `orderCode` | Code | `text` |  |  |  |
| Order | Diagnostic Order | `dueAt` | Due | `date` |  |  |  |
| Order | Diagnostic Order | `diagnosisCodes` | Diagnosis Codes | `text` |  |  |  |
| Order | Diagnostic Order | `instructions` | Clinical Reason / Instructions | `textarea` |  |  |  |
| Order | Diagnosis–CPT Association | `primaryDxCode` | Primary Diagnosis Code (ICD-10) | `text` |  |  |  |
| Order | Diagnosis–CPT Association | `primaryDxDescription` | Diagnosis Description | `text` |  |  |  |
| Order | Diagnosis–CPT Association | `medicalNecessityJustification` | Medical Necessity Justification | `textarea` |  |  |  |
| Order | ABN (Advance Beneficiary Notice) | `abnRequired` | ABN Required | `checkbox` |  |  |  |
| Order | ABN (Advance Beneficiary Notice) | `abnIssued` | ABN Issued to Patient | `checkbox` |  |  |  |
| Order | ABN (Advance Beneficiary Notice) | `abnSignedDate` | ABN Signed Date | `date` |  |  |  |
| Order | ABN (Advance Beneficiary Notice) | `abnPatientChoice` | Patient Choice (ABN Option) | `select` |  |  |  |
| Order | ABN (Advance Beneficiary Notice) | `abnNotes` | ABN Notes | `textarea` |  |  |  |
| Order | Order Sets | `orderSetName` | Order Set Applied | `text` |  |  |  |
| Order | Order Sets | `orderSetSource` | Order Set Source | `select` |  |  |  |
| Order | Order Sets | `orderSetNotes` | Order Set Notes | `textarea` |  |  |  |
| Order | Interaction Browser & Concurrency Locks (ECW-CL-49) | `interactionCheckStatus` | Interaction Check Status | `select` |  |  |  |
| Order | Interaction Browser & Concurrency Locks (ECW-CL-49) | `interactionAlerts` | Interaction Alert Summary | `textarea` |  |  |  |
| Order | Interaction Browser & Concurrency Locks (ECW-CL-49) | `concurrencyLockStatus` | Concurrent Order Lock | `select` |  |  |  |
| Order | Interaction Browser & Concurrency Locks (ECW-CL-49) | `overrideJustification` | Interaction Override Justification | `textarea` |  |  |  |
| Order | Order-Dx Matrix & Education (ECW-CL-51) | `orderIndicationDx` | Ordering Indication (ICD-10) | `text` |  |  |  |
| Order | Order-Dx Matrix & Education (ECW-CL-51) | `infobuttonLink` | InfoButton Education Link | `text` |  |  |  |
| Order | Order-Dx Matrix & Education (ECW-CL-51) | `orderMedicalNecessity` | Medical Necessity | `select` |  |  |  |
| Order | Order-Dx Matrix & Education (ECW-CL-51) | `orderNecessityNote` | Medical Necessity Note | `textarea` |  |  |  |
| Order | Order Entry Questions & Reorder (ECW-CL-52) | `orderQuestion1` | Clinical Question 1 | `text` |  |  |  |
| Order | Order Entry Questions & Reorder (ECW-CL-52) | `orderAnswer1` | Answer 1 | `text` |  |  |  |
| Order | Order Entry Questions & Reorder (ECW-CL-52) | `orderQuestion2` | Clinical Question 2 | `text` |  |  |  |
| Order | Order Entry Questions & Reorder (ECW-CL-52) | `orderAnswer2` | Answer 2 | `text` |  |  |  |
| Order | Order Entry Questions & Reorder (ECW-CL-52) | `reorderCarryForwardDx` | Reorder — Carry Forward Dx | `checkbox` |  |  |  |
| Order | Order Entry Questions & Reorder (ECW-CL-52) | `reorderSource` | Reorder Based On | `select` |  |  |  |
| Order | Order Entry Questions & Reorder (ECW-CL-52) | `rxCancelTransactionStatus` | Rx Cancel Transaction Status | `select` |  |  |  |
| Order | Order Entry Questions & Reorder (ECW-CL-52) | `rxCancelReason` | Cancel Reason | `text` |  |  |  |

### Orders — `order_tracking_cf`

Screen: 1 page(s) · 2 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Order Tracking | Order Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Order Tracking | Order Details | `orderType` | Order Type | `select` | Y |  |  |
| Order Tracking | Order Details | `orderDate` | Order Date | `date` | Y |  |  |
| Order Tracking | Order Details | `orderedBy` | Ordered By | `typeahead` |  |  |  |
| Order Tracking | Order Details | `orderDescription` | Order Description | `text` | Y |  |  |
| Order Tracking | Order Details | `orderCode` | Order Code | `text` |  |  |  |
| Order Tracking | Order Details | `priority` | Priority | `select` |  |  |  |
| Order Tracking | Order Details | `clinicalIndication` | Clinical Indication / Diagnosis | `textarea` |  |  |  |
| Order Tracking | Order Status | `orderStatus` | Status | `select` |  |  |  |
| Order Tracking | Order Status | `resultDate` | Result Date | `date` |  |  |  |
| Order Tracking | Order Status | `resultSummary` | Result Summary | `textarea` |  |  |  |
| Order Tracking | Order Status | `actionRequired` | Provider action required on results | `checkbox` |  |  |  |
| Order Tracking | Order Status | `patientNotified` | Patient notified of results | `checkbox` |  |  |  |
| Order Tracking | Order Status | `notificationDate` | Patient Notification Date | `date` |  |  |  |
| Order Tracking | Order Status | `followUpNotes` | Follow-Up Notes | `textarea` |  |  |  |

### Orthopaedics — `orthopaedics_cf`

Screen: 2 page(s) · 5 section(s) · 69 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Assessment | Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Assessment | Visit | `assessmentDate` | Date | `date` |  |  |  |
| Assessment | Visit | `surgeon` | Surgeon | `text` |  |  |  |
| Assessment | Visit | `primaryDiagnosis` | Primary Diagnosis (ICD-10) | `text` |  |  |  |
| Assessment | Visit | `anatomicRegion` | Anatomic Region | `select` |  |  |  |
| Assessment | Visit | `laterality` | Laterality | `select` |  |  |  |
| Assessment | Visit | `visitReason` | Visit Reason | `select` |  |  |  |
| Assessment | Visit | `status` | Status | `select` |  |  |  |
| Assessment | Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Assessment | Pain & Range of Motion | `vasPain` | VAS Pain (0-10) | `number` |  |  |  |
| Assessment | Pain & Range of Motion | `vasFunction` | VAS Function (0-10) | `number` |  |  |  |
| Assessment | Pain & Range of Motion | `strengthGrade` | Strength Grade (0-5) | `text` |  |  |  |
| Assessment | Pain & Range of Motion | `gripStrengthKg` | Grip Strength (kg) | `number` |  |  |  |
| Assessment | Pain & Range of Motion | `romFlexionDeg` | Flexion (°) | `number` |  |  |  |
| Assessment | Pain & Range of Motion | `romExtensionDeg` | Extension (°) | `number` |  |  |  |
| Assessment | Pain & Range of Motion | `romAbductionDeg` | Abduction (°) | `number` |  |  |  |
| Assessment | Pain & Range of Motion | `romAdductionDeg` | Adduction (°) | `number` |  |  |  |
| Assessment | Pain & Range of Motion | `romInternalRotationDeg` | Int. Rotation (°) | `number` |  |  |  |
| Assessment | Pain & Range of Motion | `romExternalRotationDeg` | Ext. Rotation (°) | `number` |  |  |  |
| Assessment | Pain & Range of Motion | `romPronationDeg` | Pronation (°) | `number` |  |  |  |
| Assessment | Pain & Range of Motion | `romSupinationDeg` | Supination (°) | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `koosPain` | KOOS Pain | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `koosSymptoms` | KOOS Symptoms | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `koosAdl` | KOOS ADL | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `koosSport` | KOOS Sport | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `koosQol` | KOOS QOL | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `hoosPain` | HOOS Pain | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `hoosSymptoms` | HOOS Symptoms | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `hoosAdl` | HOOS ADL | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `hoosSport` | HOOS Sport | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `hoosQol` | HOOS QOL | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `dashScore` | DASH Score | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `dashWorkScore` | DASH Work Module | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `odiScore` | ODI Score | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `ndiScore` | NDI Score | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `promisPiScore` | PROMIS Pain Interference | `number` |  |  |  |
| Assessment | Functional Outcome Scores | `promisPfScore` | PROMIS Physical Function | `number` |  |  |  |
| Assessment | Imaging & Plan | `imagingType` | Imaging Type | `select` |  |  |  |
| Assessment | Imaging & Plan | `imagingDate` | Imaging Date | `date` |  |  |  |
| Assessment | Imaging & Plan | `imagingFindings` | Imaging Findings | `textarea` |  |  |  |
| Assessment | Imaging & Plan | `kellgrenLawrenceGrade` | K-L Grade (0-4) | `number` |  |  |  |
| Assessment | Imaging & Plan | `treatmentPlan` | Treatment Plan | `select` |  |  |  |
| Assessment | Imaging & Plan | `surgicalCandidate` | Surgical Candidate | `checkbox` |  |  |  |
| Assessment | Imaging & Plan | `surgeryType` | Surgery Type | `text` |  |  |  |
| Assessment | Imaging & Plan | `followUpInterval` | Follow-Up Interval | `text` |  |  |  |
| Fracture Records | Fracture Management | `patientId` | Patient | `lookup` | Y |  |  |
| Fracture Records | Fracture Management | `treatmentDate` | Treatment Date | `date` |  |  |  |
| Fracture Records | Fracture Management | `injuryDate` | Injury Date | `date` |  |  |  |
| Fracture Records | Fracture Management | `surgeon` | Surgeon | `text` |  |  |  |
| Fracture Records | Fracture Management | `fractureSite` | Fracture Site | `text` | Y |  |  |
| Fracture Records | Fracture Management | `laterality` | Laterality | `select` |  |  |  |
| Fracture Records | Fracture Management | `aoOtaClassification` | AO/OTA Classification | `text` |  |  |  |
| Fracture Records | Fracture Management | `openFracture` | Open Fracture | `checkbox` |  |  |  |
| Fracture Records | Fracture Management | `gustiloGrade` | Gustilo Grade | `select` |  |  |  |
| Fracture Records | Fracture Management | `displacement` | Displacement | `text` |  |  |  |
| Fracture Records | Fracture Management | `comminution` | Comminution | `checkbox` |  |  |  |
| Fracture Records | Fracture Management | `intraarticular` | Intra-Articular | `checkbox` |  |  |  |
| Fracture Records | Fracture Management | `neurovascularIntact` | Neurovascular Intact | `checkbox` |  |  |  |
| Fracture Records | Fracture Management | `treatmentType` | Treatment Type | `select` |  |  |  |
| Fracture Records | Fracture Management | `implantType` | Implant Type | `text` |  |  |  |
| Fracture Records | Fracture Management | `implantManufacturer` | Implant Manufacturer | `text` |  |  |  |
| Fracture Records | Fracture Management | `screwsCount` | Screw Count | `number` |  |  |  |
| Fracture Records | Fracture Management | `weightBearingStatus` | Weight-Bearing Status | `select` |  |  |  |
| Fracture Records | Fracture Management | `callusFormation` | Callus Formation | `checkbox` |  |  |  |
| Fracture Records | Fracture Management | `delayedUnion` | Delayed Union | `checkbox` |  |  |  |
| Fracture Records | Fracture Management | `nonunion` | Non-Union | `checkbox` |  |  |  |
| Fracture Records | Fracture Management | `malunion` | Mal-Union | `checkbox` |  |  |  |
| Fracture Records | Fracture Management | `complications` | Complications | `textarea` |  |  |  |
| Fracture Records | Fracture Management | `followUpPlan` | Follow-Up Plan | `textarea` |  |  |  |

### Outreach Campaigns — `outreach_campaigns_cf`

Screen: 1 page(s) · 1 section(s) · 12 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Outreach Campaign | Campaign Info | `campaignName` | Campaign Name | `text` | Y |  |  |
| Outreach Campaign | Campaign Info | `campaignType` | Type | `select` |  |  |  |
| Outreach Campaign | Campaign Info | `status` | Status | `text` |  |  |  |
| Outreach Campaign | Campaign Info | `targetCondition` | Target Condition | `text` |  |  |  |
| Outreach Campaign | Campaign Info | `targetIcd10Codes` | Target ICD-10 Codes | `text` |  |  |  |
| Outreach Campaign | Campaign Info | `outreachMethod` | Outreach Method | `select` |  |  |  |
| Outreach Campaign | Campaign Info | `targetAgeMin` | Min Age | `number` |  |  |  |
| Outreach Campaign | Campaign Info | `targetAgeMax` | Max Age | `number` |  |  |  |
| Outreach Campaign | Campaign Info | `targetGender` | Target Gender | `select` |  |  |  |
| Outreach Campaign | Campaign Info | `startDate` | Start Date | `date` |  |  |  |
| Outreach Campaign | Campaign Info | `endDate` | End Date | `date` |  |  |  |
| Outreach Campaign | Campaign Info | `messageTemplate` | Message Template | `textarea` |  |  |  |

### PDMP Check — `pdmp_check_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| PDMP Check Documentation | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| PDMP Check Documentation | Patient & Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| PDMP Check Documentation | Patient & Visit | `checkDate` | PDMP Check Date | `date` | Y |  |  |
| PDMP Check Documentation | Patient & Visit | `checkedBy` | Checked By | `typeahead` | Y |  |  |
| PDMP Check Documentation | Patient & Visit | `checkReason` | Reason for PDMP Check | `select` | Y |  |  |
| PDMP Check Documentation | PDMP Findings | `stateChecked` | State(s) Checked | `text` |  |  |  |
| PDMP Check Documentation | PDMP Findings | `lastCheckDate` | Date of PDMP Report Reviewed | `date` |  |  |  |
| PDMP Check Documentation | PDMP Findings | `overallResult` | Overall PDMP Result | `select` | Y |  |  |
| PDMP Check Documentation | PDMP Findings | `specificFindings` | Specific Findings (prescribers, medications, dates) | `textarea` |  |  |  |
| PDMP Check Documentation | PDMP Findings | `morphineMilliequivalents` | Total MME/day (morphine milliequivalents) | `number` |  |  |  |
| PDMP Check Documentation | Clinical Action | `actionTaken2` | Action Taken | `select` | Y |  |  |
| PDMP Check Documentation | Clinical Action | `prescriptionWritten` | Controlled substance prescription written after PDMP review | `checkbox` |  |  |  |
| PDMP Check Documentation | Clinical Action | `drugPrescribed` | Drug Prescribed | `text` |  |  |  |
| PDMP Check Documentation | Clinical Action | `naloxonePrescribed` | Naloxone (Narcan) co-prescribed | `checkbox` |  |  |  |
| PDMP Check Documentation | Clinical Action | `clinicalNotes` | Clinical Notes | `textarea` |  |  |  |

### PDMP Monitoring — `pdmp_monitoring_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| PDMP / Controlled Substance Monitoring | Monitoring Session | `patientId` | Patient | `typeahead` | Y |  |  |
| PDMP / Controlled Substance Monitoring | Monitoring Session | `monitoringDate` | Monitoring Date | `date` | Y |  |  |
| PDMP / Controlled Substance Monitoring | Monitoring Session | `prescribingProvider` | Prescribing Provider | `typeahead` |  |  |  |
| PDMP / Controlled Substance Monitoring | Monitoring Session | `controlledSubstance` | Controlled Substance Prescribed | `text` | Y |  |  |
| PDMP / Controlled Substance Monitoring | Monitoring Session | `substance` | DEA Schedule | `select` |  |  |  |
| PDMP / Controlled Substance Monitoring | PDMP Database Check | `pdmpChecked` | PDMP database checked prior to prescribing | `checkbox` | Y |  |  |
| PDMP / Controlled Substance Monitoring | PDMP Database Check | `pdmpCheckDate` | PDMP Check Date | `date` |  |  |  |
| PDMP / Controlled Substance Monitoring | PDMP Database Check | `pdmpFindings` | PDMP Findings | `select` |  |  |  |
| PDMP / Controlled Substance Monitoring | PDMP Database Check | `pdmpNotes` | PDMP Findings Notes | `textarea` |  |  |  |
| PDMP / Controlled Substance Monitoring | Controlled Substance Agreement | `agreementOnFile` | Controlled Substance Agreement | `select` |  |  |  |
| PDMP / Controlled Substance Monitoring | Controlled Substance Agreement | `udsOrdered` | Urine drug screen ordered | `checkbox` |  |  |  |
| PDMP / Controlled Substance Monitoring | Controlled Substance Agreement | `udsDate` | UDS Date | `date` |  |  |  |
| PDMP / Controlled Substance Monitoring | Controlled Substance Agreement | `udsResults` | UDS Results | `select` |  |  |  |
| PDMP / Controlled Substance Monitoring | Controlled Substance Agreement | `pillCountCompleted` | Pill count completed | `checkbox` |  |  |  |
| PDMP / Controlled Substance Monitoring | Controlled Substance Agreement | `pillCountNotes` | Pill Count Notes | `text` |  |  |  |
| PDMP / Controlled Substance Monitoring | Controlled Substance Agreement | `prescribingDecision` | Prescribing Decision | `select` |  |  |  |
| PDMP / Controlled Substance Monitoring | Controlled Substance Agreement | `pdmpClinicalNotes` | Clinical Notes | `textarea` |  |  |  |

### POC Testing — `poc_tests_cf`

Screen: 1 page(s) · 4 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Test Result | Test | `patientId` | Patient | `lookup` | Y |  |  |
| Test Result | Test | `testDate` | Test Date | `date` |  |  |  |
| Test Result | Test | `testTime` | Time | `text` |  |  |  |
| Test Result | Test | `testName` | Test Name | `select` | Y |  |  |
| Test Result | Test | `testCategory` | Category | `text` |  |  |  |
| Test Result | Test | `cptCode` | CPT Code | `text` |  |  |  |
| Test Result | Test | `specimenType` | Specimen Type | `text` |  |  |  |
| Test Result | Result | `resultValue` | Result Value | `text` | Y |  |  |
| Test Result | Result | `resultNumeric` | Numeric Value | `number` |  |  |  |
| Test Result | Result | `resultUnit` | Unit | `text` |  |  |  |
| Test Result | Result | `resultFlag` | Flag | `select` |  |  |  |
| Test Result | Result | `referenceRange` | Reference Range | `text` |  |  |  |
| Test Result | Result | `interpretation` | Interpretation | `select` |  |  |  |
| Test Result | Performed By / QC | `performedBy` | Performed By | `text` |  |  |  |
| Test Result | Performed By / QC | `deviceName` | Device | `text` |  |  |  |
| Test Result | Performed By / QC | `lotNumber` | Lot Number | `text` |  |  |  |
| Test Result | Performed By / QC | `controlPassed` | QC Control Passed | `checkbox` |  |  |  |
| Test Result | Performed By / QC | `waivedTest` | CLIA-Waived | `checkbox` |  |  |  |
| Test Result | Performed By / QC | `resultAcknowledged` | Result Acknowledged | `checkbox` |  |  |  |
| Test Result | Clinical Notes | `clinicalNotes` | Clinical Notes / Action Taken | `textarea` |  |  |  |
| Test Result | Clinical Notes | `diagnosisCodes` | Diagnosis Codes (ICD-10) | `text` |  |  |  |

### POC Testing — `point_of_care_testing_cf`

Screen: 1 page(s) · 4 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Point-of-Care Test Administration & Result | Patient & Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Point-of-Care Test Administration & Result | Patient & Context | `encounterId` | Encounter ID | `text` | Y |  |  |
| Point-of-Care Test Administration & Result | Patient & Context | `orderedBy` | Ordered By | `typeahead` | Y |  |  |
| Point-of-Care Test Administration & Result | Patient & Context | `performedBy` | Performed By | `typeahead` | Y |  |  |
| Point-of-Care Test Administration & Result | Patient & Context | `testDate` | Test Date | `date` | Y |  |  |
| Point-of-Care Test Administration & Result | Patient & Context | `testTime` | Test Time | `text` | Y |  |  |
| Point-of-Care Test Administration & Result | Test Performed | `testType` | POC Test Type | `select` | Y |  |  |
| Point-of-Care Test Administration & Result | Test Performed | `kitLotNumber` | Kit Lot Number | `text` |  |  |  |
| Point-of-Care Test Administration & Result | Test Performed | `kitExpiration` | Kit Expiration Date | `date` |  |  |  |
| Point-of-Care Test Administration & Result | Test Performed | `deviceId` | Device / Analyzer ID | `text` |  |  |  |
| Point-of-Care Test Administration & Result | Result | `result` | Result | `select` | Y |  |  |
| Point-of-Care Test Administration & Result | Result | `numericResult` | Numeric Result (if applicable) | `text` |  |  |  |
| Point-of-Care Test Administration & Result | Result | `controlRun` | QC / control run completed | `checkbox` |  |  |  |
| Point-of-Care Test Administration & Result | Result | `controlResult` | QC Control Result | `select` |  |  |  |
| Point-of-Care Test Administration & Result | Clinical Interpretation & Action | `clinicalInterpretation` | Clinical Interpretation | `textarea` |  |  |  |
| Point-of-Care Test Administration & Result | Clinical Interpretation & Action | `treatmentInitiated` | Treatment initiated based on POC result | `checkbox` |  |  |  |
| Point-of-Care Test Administration & Result | Clinical Interpretation & Action | `confirmatorySent` | Confirmatory lab specimen sent (e.g., culture) | `checkbox` |  |  |  |
| Point-of-Care Test Administration & Result | Clinical Interpretation & Action | `patientInformedPoc` | Patient informed of result | `checkbox` |  |  |  |

### PT Evaluation — `physical_therapy_eval_cf`

Screen: 1 page(s) · 4 section(s) · 25 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Physical Therapy Initial Evaluation | Patient & Referral | `patientId` | Patient | `typeahead` | Y |  |  |
| Physical Therapy Initial Evaluation | Patient & Referral | `encounterId` | Encounter / Visit ID | `text` |  |  |  |
| Physical Therapy Initial Evaluation | Patient & Referral | `evalDate` | Evaluation Date | `date` | Y |  |  |
| Physical Therapy Initial Evaluation | Patient & Referral | `therapist` | Physical Therapist | `typeahead` | Y |  |  |
| Physical Therapy Initial Evaluation | Patient & Referral | `referringMd` | Referring Provider | `typeahead` |  |  |  |
| Physical Therapy Initial Evaluation | Patient & Referral | `referralDx` | Diagnosis / Reason for PT | `typeahead` | Y |  |  |
| Physical Therapy Initial Evaluation | Patient & Referral | `referralNotes` | Referral Notes | `text` |  |  |  |
| Physical Therapy Initial Evaluation | Subjective | `chiefComplaint` | Chief Complaint / Patient's Goals | `textarea` | Y |  |  |
| Physical Therapy Initial Evaluation | Subjective | `painScore` | Pain Score (0-10) | `select` |  |  |  |
| Physical Therapy Initial Evaluation | Subjective | `painDescription` | Pain Description | `textarea` |  |  |  |
| Physical Therapy Initial Evaluation | Subjective | `functionLimitations` | Functional Limitations | `textarea` |  |  |  |
| Physical Therapy Initial Evaluation | Subjective | `priorPt` | Prior PT for this condition | `checkbox` |  |  |  |
| Physical Therapy Initial Evaluation | Subjective | `priorPtOutcome` | Prior PT Outcome | `text` |  |  |  |
| Physical Therapy Initial Evaluation | Objective Assessment | `rom` | Range of Motion (ROM) | `textarea` | Y |  |  |
| Physical Therapy Initial Evaluation | Objective Assessment | `strength` | Manual Muscle Testing (MMT) | `textarea` |  |  |  |
| Physical Therapy Initial Evaluation | Objective Assessment | `gait` | Gait Assessment | `select` |  |  |  |
| Physical Therapy Initial Evaluation | Objective Assessment | `balanceFalls` | Balance / Fall Risk | `select` |  |  |  |
| Physical Therapy Initial Evaluation | Objective Assessment | `functionalMobility` | Functional Mobility Findings | `textarea` |  |  |  |
| Physical Therapy Initial Evaluation | Objective Assessment | `specialTests` | Special Tests / Outcome Measures | `textarea` |  |  |  |
| Physical Therapy Initial Evaluation | Assessment & Plan | `assessment` | Assessment / Problem List | `textarea` | Y |  |  |
| Physical Therapy Initial Evaluation | Assessment & Plan | `goals` | PT Goals (SMART) | `textarea` | Y |  |  |
| Physical Therapy Initial Evaluation | Assessment & Plan | `interventions` | Treatment Plan / Interventions | `textarea` |  |  |  |
| Physical Therapy Initial Evaluation | Assessment & Plan | `frequency` | PT Frequency | `select` | Y |  |  |
| Physical Therapy Initial Evaluation | Assessment & Plan | `duration` | PT Duration | `select` | Y |  |  |
| Physical Therapy Initial Evaluation | Assessment & Plan | `homeExerciseProgram` | Home exercise program provided | `checkbox` |  |  |  |

### Pain Assessment — `pain_assessment_cf`

Screen: 1 page(s) · 2 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pain Assessment | Pain Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Pain Assessment | Pain Details | `assessmentDate` | Assessment Date | `date` | Y |  |  |
| Pain Assessment | Pain Details | `painScale` | Pain Score (0-10) | `range` |  |  |  |
| Pain Assessment | Pain Details | `painLocation` | Pain Location | `text` | Y |  |  |
| Pain Assessment | Pain Details | `painCharacter` | Pain Character | `select` |  |  |  |
| Pain Assessment | Pain Details | `painOnset` | Onset | `select` |  |  |  |
| Pain Assessment | Pain Details | `painDuration` | Duration | `text` |  |  |  |
| Pain Assessment | Pain Details | `painRadiation` | Pain radiates to other areas | `checkbox` |  |  |  |
| Pain Assessment | Pain Details | `radiationDescription` | Radiation Description | `text` |  |  |  |
| Pain Assessment | Pain Details | `aggravatingFactors` | Aggravating Factors | `textarea` |  |  |  |
| Pain Assessment | Pain Details | `relievingFactors` | Relieving Factors | `textarea` |  |  |  |
| Pain Assessment | Pain Details | `functionalImpact` | Functional Impact | `select` |  |  |  |
| Pain Assessment | Pain Management | `currentPainMeds` | Current Pain Medications | `textarea` |  |  |  |
| Pain Assessment | Pain Management | `nonPharmacological` | Non-pharmacological Treatments | `textarea` |  |  |  |
| Pain Assessment | Pain Management | `treatmentEffectiveness` | Current Treatment Effectiveness | `select` |  |  |  |
| Pain Assessment | Pain Management | `painGoal` | Patient Pain Goal (0-10) | `number` |  |  |  |
| Pain Assessment | Pain Management | `painPlan` | Pain Management Plan | `textarea` |  |  |  |
| Pain Assessment | Pain Management | `referralNeeded` | Referral Needed | `select` |  |  |  |

### Pain Management — `pain_management_cf`

Screen: 1 page(s) · 4 section(s) · 25 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pain Management Visit | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Pain Management Visit | Patient & Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Pain Management Visit | Patient & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| Pain Management Visit | Pain Assessment | `painScore` | Pain Score (0-10) | `select` | Y |  |  |
| Pain Management Visit | Pain Assessment | `painLocation` | Pain Location | `text` | Y |  |  |
| Pain Management Visit | Pain Assessment | `painQuality` | Pain Quality | `select` |  |  |  |
| Pain Management Visit | Pain Assessment | `radiation` | Radiation Pattern | `text` |  |  |  |
| Pain Management Visit | Pain Assessment | `painDuration` | Duration / Chronicity | `select` |  |  |  |
| Pain Management Visit | Pain Assessment | `aggravatingFactors` | Aggravating Factors | `text` |  |  |  |
| Pain Management Visit | Pain Assessment | `relievingFactors` | Relieving Factors | `text` |  |  |  |
| Pain Management Visit | Pain Assessment | `functionalImpact` | Functional Impact | `select` |  |  |  |
| Pain Management Visit | Pain Medications & Monitoring | `currentPainMeds` | Current Pain Medications | `textarea` |  |  |  |
| Pain Management Visit | Pain Medications & Monitoring | `opioidPrescribed` | Opioid(s) prescribed | `checkbox` |  |  |  |
| Pain Management Visit | Pain Medications & Monitoring | `opioidName` | Opioid Medication(s) | `text` |  |  |  |
| Pain Management Visit | Pain Medications & Monitoring | `mme` | Total Daily MME (morphine milligram equivalents) | `number` |  |  |  |
| Pain Management Visit | Pain Medications & Monitoring | `pdmpChecked` | PDMP (prescription drug monitoring) checked today | `checkbox` |  |  |  |
| Pain Management Visit | Pain Medications & Monitoring | `udsOrdered` | Urine drug screen ordered / reviewed | `checkbox` |  |  |  |
| Pain Management Visit | Pain Medications & Monitoring | `udsResult` | UDS Result | `select` |  |  |  |
| Pain Management Visit | Pain Medications & Monitoring | `opioidAgreement` | Opioid risk agreement / informed consent on file | `checkbox` |  |  |  |
| Pain Management Visit | Pain Medications & Monitoring | `naloxonePrescribed` | Naloxone (Narcan) prescribed | `checkbox` |  |  |  |
| Pain Management Visit | Plan | `nonPharmacologic` | Non-Pharmacologic Treatments | `textarea` |  |  |  |
| Pain Management Visit | Plan | `injections` | Injections / Procedures | `select` |  |  |  |
| Pain Management Visit | Plan | `referral` | Referrals Placed | `textarea` |  |  |  |
| Pain Management Visit | Plan | `medicationChanges` | Medication Changes | `textarea` |  |  |  |
| Pain Management Visit | Plan | `nextPainVisit` | Next Visit | `select` |  |  |  |
