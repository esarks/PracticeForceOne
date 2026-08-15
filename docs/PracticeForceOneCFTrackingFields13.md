---
title: "PracticeForceOneCFTrackingFields13"
---

# CF Tracking — Field-Level Detail (part 13 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Clinical**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Clinical

### Thoracic Oncology — `thoracic_oncology_cf`

Screen: 2 page(s) · 5 section(s) · 101 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Tumor & Staging | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Tumor & Staging | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Tumor & Staging | `providerName` | Oncologist | `text` |  |  |  |
| Evaluation | Tumor & Staging | `cancerType` | Cancer Type | `select` |  |  |  |
| Evaluation | Tumor & Staging | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| Evaluation | Tumor & Staging | `icd10` | ICD-10 | `text` |  |  |  |
| Evaluation | Tumor & Staging | `histology` | Histology (NSCLC) | `select` |  |  |  |
| Evaluation | Tumor & Staging | `ajccTStage` | T Stage | `text` |  |  |  |
| Evaluation | Tumor & Staging | `ajccNStage` | N Stage | `text` |  |  |  |
| Evaluation | Tumor & Staging | `ajccMStage` | M Stage | `text` |  |  |  |
| Evaluation | Tumor & Staging | `ajccOverallStage` | Overall Stage | `text` |  |  |  |
| Evaluation | Tumor & Staging | `tumorSizeCm` | Tumor Size (cm) | `number` |  |  |  |
| Evaluation | Tumor & Staging | `distantMetastases` | Distant Metastases | `checkbox` |  |  |  |
| Evaluation | Tumor & Staging | `brainMetastases` | Brain Metastases | `checkbox` |  |  |  |
| Evaluation | Tumor & Staging | `sclcExtent` | SCLC Extent | `select` |  |  |  |
| Evaluation | Tumor & Staging | `mesotheliomaType` | Mesothelioma Type | `text` |  |  |  |
| Evaluation | Tumor & Staging | `asbestosExposure` | Asbestos Exposure | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `egfrMutation` | EGFR Mutation | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `egfrExon` | EGFR Exon | `text` |  |  |  |
| Evaluation | Molecular Profiling | `egfrVariant` | EGFR Variant | `text` |  |  |  |
| Evaluation | Molecular Profiling | `alkRearrangement` | ALK Rearrangement | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `alkPartner` | ALK Fusion Partner | `text` |  |  |  |
| Evaluation | Molecular Profiling | `ros1Rearrangement` | ROS1 Rearrangement | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `brafMutation` | BRAF Mutation | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `brafV600e` | BRAF V600E | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `metAmplification` | MET Amplification | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `metExon14Skip` | MET Exon 14 Skip | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `retFusion` | RET Fusion | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `ntrkFusion` | NTRK Fusion | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `krasG12c` | KRAS G12C | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `her2Mutation` | HER2 Mutation | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `her2Amplification` | HER2 Amplification | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `pdl1Tps` | PD-L1 TPS (%) | `number` |  |  |  |
| Evaluation | Molecular Profiling | `pdl1Cps` | PD-L1 CPS | `number` |  |  |  |
| Evaluation | Molecular Profiling | `tmb` | TMB (mut/Mb) | `number` |  |  |  |
| Evaluation | Molecular Profiling | `msiStatus` | MSI Status | `text` |  |  |  |
| Evaluation | Molecular Profiling | `liquidBiopsyDone` | Liquid Biopsy Done | `checkbox` |  |  |  |
| Evaluation | Workup | `ctChestDate` | CT Chest Date | `date` |  |  |  |
| Evaluation | Workup | `ctChestResult` | CT Chest Result | `text` |  |  |  |
| Evaluation | Workup | `petCtDate` | PET/CT Date | `date` |  |  |  |
| Evaluation | Workup | `petCtResult` | PET/CT Result | `text` |  |  |  |
| Evaluation | Workup | `mriBrainDate` | MRI Brain Date | `date` |  |  |  |
| Evaluation | Workup | `mriBrainResult` | MRI Brain Result | `text` |  |  |  |
| Evaluation | Workup | `bronchoscopyDone` | Bronchoscopy Done | `checkbox` |  |  |  |
| Evaluation | Workup | `ebusDone` | EBUS Done | `checkbox` |  |  |  |
| Evaluation | Workup | `ebusResult` | EBUS Result | `text` |  |  |  |
| Evaluation | Workup | `thoracentesisDone` | Thoracentesis Done | `checkbox` |  |  |  |
| Evaluation | Workup | `pleuralEffusionSide` | Pleural Effusion Side | `text` |  |  |  |
| Evaluation | Workup | `fev1PctPredicted` | FEV1 %pred | `number` |  |  |  |
| Evaluation | Workup | `dlcoPctPredicted` | DLCO %pred | `number` |  |  |  |
| Evaluation | Workup | `tumorBoardDate` | Tumor Board Date | `date` |  |  |  |
| Evaluation | Workup | `tumorBoardRecommendation` | Tumor Board Recommendation | `textarea` |  |  |  |
| Evaluation | Treatment Plan | `treatmentIntent` | Treatment Intent | `select` |  |  |  |
| Evaluation | Treatment Plan | `surgeryPlanned` | Surgery Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `surgeryType` | Surgery Type | `text` |  |  |  |
| Evaluation | Treatment Plan | `sbrtPlanned` | SBRT Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `sbrtFractions` | SBRT Fractions | `number` |  |  |  |
| Evaluation | Treatment Plan | `conventionalRtPlanned` | Conventional RT Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `concurrentCrt` | Concurrent Chemoradiation | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `pciPlanned` | PCI Planned (SCLC) | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `chemotherapyPlanned` | Chemotherapy Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `targetedTherapyPlanned` | Targeted Therapy Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `targetedAgent` | Targeted Agent | `text` |  |  |  |
| Evaluation | Treatment Plan | `ioTherapyPlanned` | IO Therapy Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `ioAgent` | IO Agent | `text` |  |  |  |
| Evaluation | Treatment Plan | `pembrolizumabPlanned` | Pembrolizumab | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `atezolizumabPlanned` | Atezolizumab | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `durvalumabMaintenance` | Durvalumab Maintenance | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `clinicalTrialOffered` | Clinical Trial Offered | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `smokingCessationReferral` | Smoking Cessation Referral | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `pulmonaryRehabReferral` | Pulmonary Rehab Referral | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `palliativeCareReferral` | Palliative Care Referral | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `ecogPerformanceStatus` | ECOG PS | `number` |  |  |  |
| Evaluation | Treatment Plan | `evalNotes` | Notes | `textarea` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Treatment Visits | Thoracic Oncology Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `visitType` | Visit Type | `select` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `treatmentResponse` | Treatment Response | `select` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `recurrenceSuspected` | Recurrence Suspected | `checkbox` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `chemoCycle` | Chemo Cycle # | `number` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `chemoAgent` | Chemo Agent | `text` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `targetedTherapyCycle` | Targeted Cycle # | `number` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `targetedAgent` | Targeted Agent | `text` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `ioCycle` | IO Cycle # | `number` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `ioAgent` | IO Agent | `text` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `pneumonitisGrade` | Pneumonitis Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `colitisGrade` | Colitis Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `hepatitisGrade` | Hepatitis Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `neuropathyGrade` | Neuropathy Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `fatigueGrade` | Fatigue Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `neutropeniaGrade` | Neutropenia Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `dyspneaGrade` | Dyspnea Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `hemoptysis` | Hemoptysis | `checkbox` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `doseHeld` | Dose Held | `checkbox` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `holdReason` | Hold Reason | `text` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `ioPermanentlyDiscontinued` | IO Permanently D/C'd | `checkbox` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `spirometryFev1` | FEV1 (L) | `number` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `ecogPerformanceStatus` | ECOG PS | `number` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `nextVisitDate` | Next Visit | `date` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `nextImagingDate` | Next Imaging | `date` |  |  |  |
| Treatment Visits | Thoracic Oncology Visit | `visitNotes` | Notes | `textarea` |  |  |  |

### Thyroid Management — `thyroid_management_cf`

Screen: 1 page(s) · 5 section(s) · 20 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Thyroid Disease Management | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| Thyroid Disease Management | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| Thyroid Disease Management | Patient & Diagnosis | `provider` | Provider | `typeahead` | Y |  |  |
| Thyroid Disease Management | Patient & Diagnosis | `thyroidDx` | Thyroid Diagnosis | `select` | Y |  |  |
| Thyroid Disease Management | Lab Values | `tshValue` | TSH (mU/L) | `number` |  |  |  |
| Thyroid Disease Management | Lab Values | `tshDate` | TSH Date | `date` |  |  |  |
| Thyroid Disease Management | Lab Values | `tshTrend` | TSH Trend | `select` |  |  |  |
| Thyroid Disease Management | Lab Values | `ft4Value` | Free T4 (ng/dL) | `number` |  |  |  |
| Thyroid Disease Management | Lab Values | `ft3Value` | Free T3 (pg/mL, if checked) | `number` |  |  |  |
| Thyroid Disease Management | Lab Values | `tpoAb` | Anti-TPO Antibodies | `select` |  |  |  |
| Thyroid Disease Management | Lab Values | `tgab` | Anti-Thyroglobulin Antibodies | `select` |  |  |  |
| Thyroid Disease Management | Medications | `currentRx` | Current Thyroid Medication | `text` |  |  |  |
| Thyroid Disease Management | Medications | `doseChange` | Dose Change Today | `select` | Y |  |  |
| Thyroid Disease Management | Medications | `newDose` | New Dose (if changed) | `text` |  |  |  |
| Thyroid Disease Management | Medications | `medicationNotes` | Medication Notes | `textarea` |  |  |  |
| Thyroid Disease Management | Imaging & Nodules | `thyroidUltrasound` | Thyroid Ultrasound | `select` |  |  |  |
| Thyroid Disease Management | Imaging & Nodules | `noduleDetails` | Nodule Details (if applicable) | `textarea` |  |  |  |
| Thyroid Disease Management | Symptom Review | `hypoSymptoms` | Hypothyroid Symptoms | `textarea` |  |  |  |
| Thyroid Disease Management | Symptom Review | `hyperSymptoms` | Hyperthyroid Symptoms | `textarea` |  |  |  |
| Thyroid Disease Management | Symptom Review | `followUpInterval` | Next Follow-up | `select` | Y |  |  |

### Transplant Hepatology — `transplant_hepatology_cf`

Screen: 2 page(s) · 7 section(s) · 99 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Evaluation | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Evaluation | `providerName` | Hepatologist | `text` |  |  |  |
| Evaluation | Evaluation | `referralSource` | Referral Source | `text` |  |  |  |
| Evaluation | Evaluation | `referralReason` | Referral Reason | `text` |  |  |  |
| Evaluation | Evaluation | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| Evaluation | Evaluation | `icd10` | ICD-10 | `text` |  |  |  |
| Evaluation | Evaluation | `diseaseEtiology` | Disease Etiology | `text` |  |  |  |
| Evaluation | Liver Disease Details | `cirrhosisPresent` | Cirrhosis | `checkbox` |  |  |  |
| Evaluation | Liver Disease Details | `nafldPresent` | NAFLD/NASH | `checkbox` |  |  |  |
| Evaluation | Liver Disease Details | `bmi` | BMI | `number` |  |  |  |
| Evaluation | Liver Disease Details | `diabetes` | Diabetes | `checkbox` |  |  |  |
| Evaluation | Liver Disease Details | `alcoholicLiverDisease` | Alcoholic Liver Disease | `checkbox` |  |  |  |
| Evaluation | Liver Disease Details | `lastAlcohol` | Last Alcohol | `date` |  |  |  |
| Evaluation | Liver Disease Details | `sobrietyMonths` | Sobriety (months) | `number` |  |  |  |
| Evaluation | Liver Disease Details | `hbvSurfaceAntigen` | HBsAg | `select` |  |  |  |
| Evaluation | Liver Disease Details | `hbvDnaIu` | HBV DNA (IU/mL) | `number` |  |  |  |
| Evaluation | Liver Disease Details | `hcvGenotype` | HCV Genotype | `text` |  |  |  |
| Evaluation | Liver Disease Details | `hcvRna` | HCV RNA | `text` |  |  |  |
| Evaluation | Liver Disease Details | `hcvSvr` | HCV SVR Achieved | `checkbox` |  |  |  |
| Evaluation | Liver Disease Details | `pscPresent` | PSC | `checkbox` |  |  |  |
| Evaluation | Liver Disease Details | `pbcPresent` | PBC | `checkbox` |  |  |  |
| Evaluation | Liver Disease Details | `aihPresent` | AIH | `checkbox` |  |  |  |
| Evaluation | Liver Disease Details | `hcc` | HCC | `checkbox` |  |  |  |
| Evaluation | Liver Disease Details | `hccMilanCriteria` | Within Milan Criteria | `checkbox` |  |  |  |
| Evaluation | Liver Disease Details | `hccLesionCount` | HCC Lesion Count | `number` |  |  |  |
| Evaluation | Liver Disease Details | `hccLargestLesionCm` | Largest Lesion (cm) | `number` |  |  |  |
| Evaluation | Liver Disease Details | `afp` | AFP (ng/mL) | `number` |  |  |  |
| Evaluation | Liver Disease Details | `locoregionalTherapy` | Locoregional Therapy Done | `checkbox` |  |  |  |
| Evaluation | Disease Severity Scores | `meldScore` | MELD Score | `number` |  |  |  |
| Evaluation | Disease Severity Scores | `meldNaScore` | MELD-Na Score | `number` |  |  |  |
| Evaluation | Disease Severity Scores | `childPughScore` | Child-Pugh Score | `number` |  |  |  |
| Evaluation | Disease Severity Scores | `childPughClass` | Child-Pugh Class | `select` |  |  |  |
| Evaluation | Disease Severity Scores | `albumin` | Albumin (g/dL) | `number` |  |  |  |
| Evaluation | Disease Severity Scores | `inr` | INR | `number` |  |  |  |
| Evaluation | Disease Severity Scores | `bilirubin` | Bilirubin (mg/dL) | `number` |  |  |  |
| Evaluation | Disease Severity Scores | `creatinine` | Creatinine (mg/dL) | `number` |  |  |  |
| Evaluation | Disease Severity Scores | `sodium` | Sodium (mEq/L) | `number` |  |  |  |
| Evaluation | Disease Severity Scores | `gfr` | GFR (mL/min) | `number` |  |  |  |
| Evaluation | Complications | `ascitesGrade` | Ascites Grade (0–3) | `number` |  |  |  |
| Evaluation | Complications | `diureticRefractory` | Diuretic-Refractory Ascites | `checkbox` |  |  |  |
| Evaluation | Complications | `tipsPlaced` | TIPS Placed | `checkbox` |  |  |  |
| Evaluation | Complications | `sbpHistory` | SBP History | `checkbox` |  |  |  |
| Evaluation | Complications | `sbpEpisodeCount` | SBP Episode Count | `number` |  |  |  |
| Evaluation | Complications | `heGrade` | HE Grade (0–4) | `number` |  |  |  |
| Evaluation | Complications | `heLactulose` | Lactulose | `checkbox` |  |  |  |
| Evaluation | Complications | `heRifaximin` | Rifaximin | `checkbox` |  |  |  |
| Evaluation | Complications | `varicesHistory` | Variceal Bleeding History | `checkbox` |  |  |  |
| Evaluation | Complications | `evlDone` | EVL Done | `checkbox` |  |  |  |
| Evaluation | Complications | `hrsType` | HRS Type | `select` |  |  |  |
| Evaluation | Complications | `hpsPresent` | HPS Present | `checkbox` |  |  |  |
| Evaluation | Transplant Clearances | `cardiacClearanceDate` | Cardiac Clearance Date | `date` |  |  |  |
| Evaluation | Transplant Clearances | `cardiacTestType` | Cardiac Test Type | `text` |  |  |  |
| Evaluation | Transplant Clearances | `cardiacEf` | Cardiac EF (%) | `number` |  |  |  |
| Evaluation | Transplant Clearances | `pulmonaryFev1Pct` | Pulmonary FEV1 %pred | `number` |  |  |  |
| Evaluation | Transplant Clearances | `renalGfr` | Renal GFR | `number` |  |  |  |
| Evaluation | Transplant Clearances | `psychosocialClearance` | Psychosocial Clearance | `checkbox` |  |  |  |
| Evaluation | Transplant Clearances | `substanceAbuseClearance` | Substance Abuse Clearance | `checkbox` |  |  |  |
| Evaluation | Transplant Clearances | `financialClearance` | Financial Clearance | `checkbox` |  |  |  |
| Evaluation | Transplant Clearances | `socialWorkClearance` | Social Work Clearance | `checkbox` |  |  |  |
| Evaluation | Transplant Clearances | `dentalClearanceDate` | Dental Clearance Date | `date` |  |  |  |
| Evaluation | Transplant Clearances | `mdcDate` | MDC Date | `date` |  |  |  |
| Evaluation | Transplant Clearances | `mdcDecision` | MDC Decision | `text` |  |  |  |
| Evaluation | Listing Status | `listingStatus` | Listing Status | `select` |  |  |  |
| Evaluation | Listing Status | `listingDate` | Listing Date | `date` |  |  |  |
| Evaluation | Listing Status | `exceptionPointsApproved` | Exception Points Approved | `checkbox` |  |  |  |
| Evaluation | Listing Status | `exceptionPoints` | Exception Points | `number` |  |  |  |
| Evaluation | Listing Status | `contraindications` | Contraindications | `textarea` |  |  |  |
| Evaluation | Listing Status | `listingNotes` | Listing Notes | `textarea` |  |  |  |
| Evaluation | Listing Status | `evalNotes` | Notes | `textarea` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `providerName` | Provider | `text` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `transplantDate` | Transplant Date | `date` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `donorType` | Donor Type | `select` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `alt` | ALT (U/L) | `number` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `ast` | AST (U/L) | `number` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `alp` | ALP (U/L) | `number` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `bilirubin` | Bilirubin (mg/dL) | `number` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `inr` | INR | `number` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `albumin` | Albumin (g/dL) | `number` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `creatinine` | Creatinine (mg/dL) | `number` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `gfr` | GFR (mL/min) | `number` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `tacrolimusTrough` | Tacrolimus Trough (ng/mL) | `number` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `mycophenolate` | Mycophenolate (mg) | `number` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `prednisone` | Prednisone (mg) | `number` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `immunosuppressionChanges` | IS Changes | `text` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `rejectionSuspected` | Rejection Suspected | `checkbox` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `rejectionType` | Rejection Type | `select` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `biopsyDone` | Biopsy Done | `checkbox` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `banffGrade` | Banff Grade | `text` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `rejectionTreatment` | Rejection Treatment | `text` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `cmvViremiaPresent` | CMV Viremia | `checkbox` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `cmvDna` | CMV DNA (IU/mL) | `number` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `hccRecurrence` | HCC Recurrence | `checkbox` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `graftFunctionStatus` | Graft Function | `select` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `nextVisitDate` | Next Visit | `date` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `labsInterval` | Labs Interval | `text` |  |  |  |
| Post-Transplant / Follow-Up Visits | Transplant Hepatology Visit | `visitNotes` | Notes | `textarea` |  |  |  |

### Treatment Timeline — `treatment_timeline_cf`

Screen: 2 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `PATIENT_MEDICATIONS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Treatment Timeline | Timeline Entry | `noteDate` | Note Date | `date` |  | noteDate |  |
| Treatment Timeline | Timeline Entry | `noteType` | Note Type | `text` |  | noteType |  |
| Treatment Timeline | Timeline Entry | `status` | Status | `text` |  | status |  |
| Treatment Timeline | Timeline Entry | `authorId` | Author | `text` |  | authorId |  |
| Treatment Timeline | Timeline Entry | `assessment` | Assessment | `textarea` |  | assessment |  |
| Treatment Timeline | Timeline Entry | `plan` | Plan | `textarea` |  | plan |  |
| Visit Summary | Summary Details | `encounterId` | Encounter | `text` |  | encounterId |  |
| Visit Summary | Summary Details | `visitDate` | Visit Date | `date` |  | visitDate |  |
| Visit Summary | Summary Details | `providerId` | Provider | `text` |  | providerId |  |
| Visit Summary | Summary Details | `chiefComplaint` | Chief Complaint | `text` |  | chiefComplaint |  |
| Visit Summary | Summary Details | `declineReason` | Decline Reason | `text` |  | declineReason |  |

### Triage — `triage_assessment_cf`

Screen: 1 page(s) · 4 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clinical Triage Assessment | Patient & Arrival | `patientId` | Patient | `typeahead` | Y |  |  |
| Clinical Triage Assessment | Patient & Arrival | `triageDate` | Triage Date | `date` | Y |  |  |
| Clinical Triage Assessment | Patient & Arrival | `arrivalTime` | Arrival Time | `text` |  |  |  |
| Clinical Triage Assessment | Patient & Arrival | `arrivalMode` | Arrival Mode | `select` |  |  |  |
| Clinical Triage Assessment | Patient & Arrival | `triageNurse` | Triaging Nurse / MA | `typeahead` | Y |  |  |
| Clinical Triage Assessment | Chief Complaint & Urgency | `chiefComplaint3` | Chief Complaint (patient's own words) | `textarea` | Y |  |  |
| Clinical Triage Assessment | Chief Complaint & Urgency | `triageLevel` | Triage Acuity Level | `select` | Y |  |  |
| Clinical Triage Assessment | Chief Complaint & Urgency | `painScore2` | Pain Score | `select` | Y |  |  |
| Clinical Triage Assessment | Triage Vital Signs | `triageBP` | Blood Pressure | `text` | Y |  |  |
| Clinical Triage Assessment | Triage Vital Signs | `triageHR` | Heart Rate (bpm) | `number` | Y |  |  |
| Clinical Triage Assessment | Triage Vital Signs | `triageRR` | Respiratory Rate (/min) | `number` |  |  |  |
| Clinical Triage Assessment | Triage Vital Signs | `triageTemp` | Temperature (°F) | `number` |  |  |  |
| Clinical Triage Assessment | Triage Vital Signs | `triageO2` | O2 Saturation (%) | `number` | Y |  |  |
| Clinical Triage Assessment | Triage Vital Signs | `triageWeight` | Weight (lbs) | `number` |  |  |  |
| Clinical Triage Assessment | Safety Flags & Disposition | `allergiesVerified` | Allergies verified / updated in chart | `checkbox` |  |  |  |
| Clinical Triage Assessment | Safety Flags & Disposition | `fallRiskId` | Fall Risk | `select` |  |  |  |
| Clinical Triage Assessment | Safety Flags & Disposition | `domesticViolenceScreen` | Domestic Violence Screen | `select` |  |  |  |
| Clinical Triage Assessment | Safety Flags & Disposition | `suicideScreen` | Suicide / Self-Harm Screen | `select` |  |  |  |
| Clinical Triage Assessment | Safety Flags & Disposition | `triageDisposition` | Triage Disposition | `select` | Y |  |  |

### Urgent Care — `urgent_care_cf`

Screen: 1 page(s) · 5 section(s) · 86 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Urgent Care Visit | Triage | `patientId` | Patient | `lookup` | Y |  |  |
| Urgent Care Visit | Triage | `visitDate` | Visit Date | `date` |  |  |  |
| Urgent Care Visit | Triage | `visitTime` | Visit Time | `text` |  |  |  |
| Urgent Care Visit | Triage | `providerName` | Provider | `text` |  |  |  |
| Urgent Care Visit | Triage | `arrivalMode` | Arrival Mode | `select` |  |  |  |
| Urgent Care Visit | Triage | `triageLevel` | Triage Level (1–5) | `select` |  |  |  |
| Urgent Care Visit | Triage | `triageNurse` | Triage Nurse | `text` |  |  |  |
| Urgent Care Visit | Triage | `triageChiefComplaint` | Triage Chief Complaint | `text` |  |  |  |
| Urgent Care Visit | Triage | `tempC` | Temp (°C) | `number` |  |  |  |
| Urgent Care Visit | Triage | `heartRate` | Heart Rate | `number` |  |  |  |
| Urgent Care Visit | Triage | `respiratoryRate` | Resp Rate | `number` |  |  |  |
| Urgent Care Visit | Triage | `bpSystolic` | BP Systolic | `number` |  |  |  |
| Urgent Care Visit | Triage | `bpDiastolic` | BP Diastolic | `number` |  |  |  |
| Urgent Care Visit | Triage | `spo2` | SpO2 (%) | `number` |  |  |  |
| Urgent Care Visit | Triage | `weightKg` | Weight (kg) | `number` |  |  |  |
| Urgent Care Visit | Triage | `painVas` | Pain VAS (0–10) | `number` |  |  |  |
| Urgent Care Visit | History of Present Illness | `chiefComplaint` | Chief Complaint | `text` |  |  |  |
| Urgent Care Visit | History of Present Illness | `onsetDate` | Onset Date | `date` |  |  |  |
| Urgent Care Visit | History of Present Illness | `symptomDuration` | Duration | `number` |  |  |  |
| Urgent Care Visit | History of Present Illness | `symptomDurationUnit` | Duration Unit | `select` |  |  |  |
| Urgent Care Visit | History of Present Illness | `onsetCharacter` | Onset Character | `text` |  |  |  |
| Urgent Care Visit | History of Present Illness | `location` | Location | `text` |  |  |  |
| Urgent Care Visit | History of Present Illness | `radiation` | Radiation | `text` |  |  |  |
| Urgent Care Visit | History of Present Illness | `severity110` | Severity (1–10) | `number` |  |  |  |
| Urgent Care Visit | History of Present Illness | `aggravatingFactors` | Aggravating Factors | `text` |  |  |  |
| Urgent Care Visit | History of Present Illness | `alleviatingFactors` | Alleviating Factors | `text` |  |  |  |
| Urgent Care Visit | History of Present Illness | `associatedSymptoms` | Associated Symptoms | `text` |  |  |  |
| Urgent Care Visit | History of Present Illness | `pmh` | PMH | `text` |  |  |  |
| Urgent Care Visit | History of Present Illness | `medications` | Current Medications | `text` |  |  |  |
| Urgent Care Visit | History of Present Illness | `allergies` | Allergies | `text` |  |  |  |
| Urgent Care Visit | History of Present Illness | `hpiNarrative` | HPI Narrative | `textarea` |  |  |  |
| Urgent Care Visit | Physical Examination | `generalAppearance` | General Appearance | `text` |  |  |  |
| Urgent Care Visit | Physical Examination | `heent` | HEENT | `text` |  |  |  |
| Urgent Care Visit | Physical Examination | `neck` | Neck | `text` |  |  |  |
| Urgent Care Visit | Physical Examination | `chestLungs` | Chest/Lungs | `text` |  |  |  |
| Urgent Care Visit | Physical Examination | `cardiovascular` | Cardiovascular | `text` |  |  |  |
| Urgent Care Visit | Physical Examination | `abdomen` | Abdomen | `text` |  |  |  |
| Urgent Care Visit | Physical Examination | `extremities` | Extremities | `text` |  |  |  |
| Urgent Care Visit | Physical Examination | `skinDermatology` | Skin | `text` |  |  |  |
| Urgent Care Visit | Physical Examination | `neurological` | Neurological | `text` |  |  |  |
| Urgent Care Visit | Physical Examination | `musculoskeletal` | Musculoskeletal | `text` |  |  |  |
| Urgent Care Visit | Physical Examination | `focusedExamNotes` | Focused Exam Notes | `textarea` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `rapidStrepResult` | Rapid Strep | `select` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `rapidFluResult` | Rapid Flu A/B | `select` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `rapidCovidResult` | Rapid COVID | `select` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `urinalysisDone` | Urinalysis Done | `checkbox` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `uaResult` | UA Result | `text` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `fingerstickGlucose` | Fingerstick Glucose (mg/dL) | `number` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `pocHcg` | POC hCG | `select` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `ecgDone` | ECG Done | `checkbox` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `ecgResult` | ECG Result | `text` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `wbc` | WBC (K/µL) | `number` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `hemoglobin` | Hemoglobin (g/dL) | `number` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `platelets` | Platelets (K/µL) | `number` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `troponin` | Troponin | `number` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `dDimer` | D-Dimer (ng/mL) | `number` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `cxrDone` | CXR Done | `checkbox` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `cxrResult` | CXR Result | `text` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `ctHeadDone` | CT Head Done | `checkbox` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `ctResult` | CT Result | `text` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `ultrasoundDone` | Ultrasound Done | `checkbox` |  |  |  |
| Urgent Care Visit | Point-of-Care Testing | `ultrasoundResult` | Ultrasound Result | `text` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `icd10` | ICD-10 | `text` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `clinicalImpression` | Clinical Impression | `textarea` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `proceduresPerformed` | Procedures Performed | `text` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `ivAccessPlaced` | IV Access Placed | `checkbox` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `ivFluidsGiven` | IV Fluids Given | `checkbox` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `ivFluidType` | IV Fluid Type | `text` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `ivFluidVolumeMl` | IV Fluid Volume (mL) | `number` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `oxygenGiven` | Oxygen Given | `checkbox` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `nebulizerGiven` | Nebulizer Given | `checkbox` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `splintApplied` | Splint Applied | `checkbox` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `splintType` | Splint Type | `text` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `lacerationRepair` | Laceration Repair | `checkbox` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `sutures` | Sutures | `number` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `disposition` | Disposition | `select` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `dischargeCondition` | Discharge Condition | `select` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `admitTo` | Admit To | `text` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `transferTo` | Transfer To | `text` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `transferReason` | Transfer Reason | `text` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `prescriptionsGiven` | Prescriptions Given | `checkbox` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `prescriptionDetails` | Prescription Details | `text` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `followUpProvider` | Follow-Up Provider | `text` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `followUpDays` | Follow-Up In (days) | `number` |  |  |  |
| Urgent Care Visit | Treatment & Disposition | `dischargeInstructions` | Discharge Instructions | `textarea` |  |  |  |

### Urology — `urology_cf`

Screen: 2 page(s) · 7 section(s) · 55 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Assessment | Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Assessment | Visit | `assessmentDate` | Date | `date` |  |  |  |
| Assessment | Visit | `urologist` | Urologist | `text` |  |  |  |
| Assessment | Visit | `primaryDiagnosis` | Primary Diagnosis (ICD-10) | `text` |  |  |  |
| Assessment | Visit | `visitReason` | Visit Reason | `text` |  |  |  |
| Assessment | Visit | `status` | Status | `select` |  |  |  |
| Assessment | Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Assessment | LUTS / Voiding | `ipssScore` | IPSS Score (0-35) | `number` |  |  |  |
| Assessment | LUTS / Voiding | `ipssCategory` | IPSS Category | `select` |  |  |  |
| Assessment | LUTS / Voiding | `qolScore` | QOL Score (0-6) | `number` |  |  |  |
| Assessment | LUTS / Voiding | `auaSymptomScore` | AUA Symptom Score | `number` |  |  |  |
| Assessment | LUTS / Voiding | `maxFlowRateMlS` | Qmax (mL/s) | `number` |  |  |  |
| Assessment | LUTS / Voiding | `avgFlowRateMlS` | Qavg (mL/s) | `number` |  |  |  |
| Assessment | LUTS / Voiding | `voidedVolumeMl` | Voided Volume (mL) | `number` |  |  |  |
| Assessment | LUTS / Voiding | `postVoidResidualMl` | Post-Void Residual (mL) | `number` |  |  |  |
| Assessment | LUTS / Voiding | `pvrMethod` | PVR Method | `select` |  |  |  |
| Assessment | Incontinence | `incontinenceType` | Incontinence Type | `select` |  |  |  |
| Assessment | Incontinence | `leakageEpisodesDay` | Leakage Episodes/Day | `number` |  |  |  |
| Assessment | Incontinence | `padUsageDay` | Pads/Day | `number` |  |  |  |
| Assessment | Incontinence | `iciqScore` | ICIQ-UI Score | `number` |  |  |  |
| Assessment | PSA / Prostate | `psaNgMl` | PSA (ng/mL) | `number` |  |  |  |
| Assessment | PSA / Prostate | `psaDate` | PSA Date | `date` |  |  |  |
| Assessment | PSA / Prostate | `psaDensity` | PSA Density | `number` |  |  |  |
| Assessment | PSA / Prostate | `psaVelocityNgMlYr` | PSA Velocity (ng/mL/yr) | `number` |  |  |  |
| Assessment | PSA / Prostate | `prostateVolumeCc` | Prostate Volume (cc) | `number` |  |  |  |
| Assessment | PSA / Prostate | `dreFindings` | DRE Findings | `text` |  |  |  |
| Assessment | Sexual Function | `iief5Score` | IIEF-5 Score (5-25) | `number` |  |  |  |
| Assessment | Sexual Function | `iief5Category` | IIEF-5 Category | `select` |  |  |  |
| Assessment | Sexual Function | `fsfiScore` | FSFI Score | `number` |  |  |  |
| Assessment | Kidney / Urinalysis | `creatinineMgDl` | Creatinine (mg/dL) | `number` |  |  |  |
| Assessment | Kidney / Urinalysis | `egfrMlMin` | eGFR (mL/min) | `number` |  |  |  |
| Assessment | Kidney / Urinalysis | `stoneHistory` | Stone History | `checkbox` |  |  |  |
| Assessment | Kidney / Urinalysis | `lastStoneDate` | Last Stone Date | `date` |  |  |  |
| Assessment | Kidney / Urinalysis | `stoneComposition` | Stone Composition | `text` |  |  |  |
| Assessment | Kidney / Urinalysis | `uaWbc` | UA WBC | `text` |  |  |  |
| Assessment | Kidney / Urinalysis | `uaRbc` | UA RBC | `text` |  |  |  |
| Assessment | Kidney / Urinalysis | `uaNitrites` | UA Nitrites | `text` |  |  |  |
| Assessment | Kidney / Urinalysis | `uaLeukocyteEsterase` | UA Leukocyte Esterase | `text` |  |  |  |
| Assessment | Kidney / Urinalysis | `urineCultureResult` | Urine Culture | `text` |  |  |  |
| Assessment | Kidney / Urinalysis | `plan` | Assessment & Plan | `textarea` |  |  |  |
| Assessment | Kidney / Urinalysis | `followUpInterval` | Follow-Up Interval | `text` |  |  |  |
| Voiding Diary | Voiding Diary Entry | `patientId` | Patient | `lookup` | Y |  |  |
| Voiding Diary | Voiding Diary Entry | `diaryDate` | Date | `date` |  |  |  |
| Voiding Diary | Voiding Diary Entry | `diaryTime` | Time | `text` |  |  |  |
| Voiding Diary | Voiding Diary Entry | `entryType` | Entry Type | `select` |  |  |  |
| Voiding Diary | Voiding Diary Entry | `fluidIntakeMl` | Fluid Intake (mL) | `number` |  |  |  |
| Voiding Diary | Voiding Diary Entry | `fluidType` | Fluid Type | `text` |  |  |  |
| Voiding Diary | Voiding Diary Entry | `voidedVolumeMl` | Voided Volume (mL) | `number` |  |  |  |
| Voiding Diary | Voiding Diary Entry | `urgencyScore` | Urgency Score (0-4) | `number` |  |  |  |
| Voiding Diary | Voiding Diary Entry | `urgencyIncontinence` | Urge Incontinence | `checkbox` |  |  |  |
| Voiding Diary | Voiding Diary Entry | `stressIncontinence` | Stress Incontinence | `checkbox` |  |  |  |
| Voiding Diary | Voiding Diary Entry | `leakageAmount` | Leakage Amount | `select` |  |  |  |
| Voiding Diary | Voiding Diary Entry | `nocturia` | Nocturia | `checkbox` |  |  |  |
| Voiding Diary | Voiding Diary Entry | `activityAtTime` | Activity | `text` |  |  |  |
| Voiding Diary | Voiding Diary Entry | `notes` | Notes | `textarea` |  |  |  |

### Vascular Medicine — `vascular_medicine_cf`

Screen: 2 page(s) · 8 section(s) · 121 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Evaluation | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Evaluation | `providerName` | Provider | `text` |  |  |  |
| Evaluation | Evaluation | `referralReason` | Referral Reason | `text` |  |  |  |
| Evaluation | Evaluation | `chiefComplaint` | Chief Complaint | `textarea` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `diabetes` | Diabetes | `checkbox` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `diabetesDurationYears` | Diabetes Duration (years) | `number` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `hypertension` | Hypertension | `checkbox` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `dyslipidemia` | Dyslipidemia | `checkbox` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `smokingStatus` | Smoking Status | `select` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `packYears` | Pack-Years | `number` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `ckdStage` | CKD Stage | `text` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `egfr` | eGFR (mL/min) | `number` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `coronaryArteryDisease` | CAD | `checkbox` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `priorMi` | Prior MI | `checkbox` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `priorPci` | Prior PCI | `checkbox` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `priorCabg` | Prior CABG | `checkbox` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `atrialFibrillation` | Atrial Fibrillation | `checkbox` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `heartFailure` | Heart Failure | `checkbox` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `leftVentricularEf` | LVEF (%) | `number` |  |  |  |
| Evaluation | Cardiovascular Risk Factors | `bmi` | BMI | `number` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `padPresent` | PAD Present | `checkbox` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `claudicationSymptoms` | Claudication Symptoms | `checkbox` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `claudicationDistanceMeters` | Claudication Distance (m) | `number` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `restPain` | Rest Pain | `checkbox` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `tissueLoss` | Tissue Loss | `checkbox` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `rutherfordClass` | Rutherford Class | `text` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `abiRight` | ABI Right | `number` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `abiLeft` | ABI Left | `number` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `abiDate` | ABI Date | `date` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `toeBloodPressureRight` | TBI Right | `number` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `toeBloodPressureLeft` | TBI Left | `number` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `woundPresent` | Wound Present | `checkbox` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `woundLocation` | Wound Location | `text` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `woundSizeCm` | Wound Size (cm) | `number` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `woundInfection` | Wound Infection | `checkbox` |  |  |  |
| Evaluation | Peripheral Arterial Disease | `osteomyelitisSuspected` | Osteomyelitis Suspected | `checkbox` |  |  |  |
| Evaluation | Aortic Disease | `aaaPresent` | AAA Present | `checkbox` |  |  |  |
| Evaluation | Aortic Disease | `aaaMaxDiameterCm` | AAA Max Diameter (cm) | `number` |  |  |  |
| Evaluation | Aortic Disease | `aaaDate` | AAA Measurement Date | `date` |  |  |  |
| Evaluation | Aortic Disease | `aaaPriorDiameterCm` | Prior Diameter (cm) | `number` |  |  |  |
| Evaluation | Aortic Disease | `aaaPriorDate` | Prior Measurement Date | `date` |  |  |  |
| Evaluation | Aortic Disease | `aaaMorphology` | AAA Morphology | `text` |  |  |  |
| Evaluation | Aortic Disease | `aaaRepairIndicated` | Repair Indicated | `checkbox` |  |  |  |
| Evaluation | Aortic Disease | `aaaRepairType` | Repair Type | `select` |  |  |  |
| Evaluation | Aortic Disease | `priorAorticRepair` | Prior Aortic Repair | `checkbox` |  |  |  |
| Evaluation | Carotid & VTE | `carotidDisease` | Carotid Disease | `checkbox` |  |  |  |
| Evaluation | Carotid & VTE | `carotidStenosisRight` | Carotid Stenosis R (%) | `number` |  |  |  |
| Evaluation | Carotid & VTE | `carotidStenosisLeft` | Carotid Stenosis L (%) | `number` |  |  |  |
| Evaluation | Carotid & VTE | `priorTiaStroke` | Prior TIA/Stroke | `checkbox` |  |  |  |
| Evaluation | Carotid & VTE | `priorCeaCas` | Prior CEA/CAS | `checkbox` |  |  |  |
| Evaluation | Carotid & VTE | `dvtHistory` | DVT History | `checkbox` |  |  |  |
| Evaluation | Carotid & VTE | `dvtLocation` | DVT Location | `text` |  |  |  |
| Evaluation | Carotid & VTE | `peHistory` | PE History | `checkbox` |  |  |  |
| Evaluation | Carotid & VTE | `vteProvoked` | VTE Provoked | `checkbox` |  |  |  |
| Evaluation | Carotid & VTE | `vteProvokedCause` | Provoked Cause | `text` |  |  |  |
| Evaluation | Carotid & VTE | `vteHistory` | VTE History | `checkbox` |  |  |  |
| Evaluation | Carotid & VTE | `thrombophiliaWorkup` | Thrombophilia Workup Done | `checkbox` |  |  |  |
| Evaluation | Carotid & VTE | `anticoagulationCurrent` | Anticoagulation Current | `checkbox` |  |  |  |
| Evaluation | Carotid & VTE | `anticoagAgent` | Anticoagulant Agent | `text` |  |  |  |
| Evaluation | Carotid & VTE | `anticoagDurationPlan` | Duration Plan | `text` |  |  |  |
| Evaluation | Carotid & VTE | `anticoagulationIndefinite` | Indefinite Anticoagulation | `checkbox` |  |  |  |
| Evaluation | Carotid & VTE | `ivcFilterPlaced` | IVC Filter Placed | `checkbox` |  |  |  |
| Evaluation | Venous Insufficiency | `venousInsufficiency` | Venous Insufficiency | `checkbox` |  |  |  |
| Evaluation | Venous Insufficiency | `ceapClass` | CEAP Class | `text` |  |  |  |
| Evaluation | Venous Insufficiency | `varicoseVeins` | Varicose Veins | `checkbox` |  |  |  |
| Evaluation | Venous Insufficiency | `lowerExtremityEdema` | LE Edema | `checkbox` |  |  |  |
| Evaluation | Venous Insufficiency | `venousUlcer` | Venous Ulcer | `checkbox` |  |  |  |
| Evaluation | Venous Insufficiency | `venousUlcerLocation` | Ulcer Location | `text` |  |  |  |
| Evaluation | Venous Insufficiency | `compressionStockingsMmhg` | Compression Stocking (mmHg) | `number` |  |  |  |
| Evaluation | Venous Insufficiency | `ablationDate` | Ablation Date | `date` |  |  |  |
| Evaluation | Venous Insufficiency | `ablationType` | Ablation Type | `text` |  |  |  |
| Evaluation | Medications & Plan | `aspirinPresent` | Aspirin | `checkbox` |  |  |  |
| Evaluation | Medications & Plan | `clopidogrelPresent` | Clopidogrel | `checkbox` |  |  |  |
| Evaluation | Medications & Plan | `statinAgent` | Statin Agent | `text` |  |  |  |
| Evaluation | Medications & Plan | `statinDose` | Statin Dose | `text` |  |  |  |
| Evaluation | Medications & Plan | `aceArbPresent` | ACE/ARB | `checkbox` |  |  |  |
| Evaluation | Medications & Plan | `cilostazolPresent` | Cilostazol | `checkbox` |  |  |  |
| Evaluation | Medications & Plan | `supervisedExerciseReferral` | Supervised Exercise Referral | `checkbox` |  |  |  |
| Evaluation | Medications & Plan | `woundCareReferral` | Wound Care Referral | `checkbox` |  |  |  |
| Evaluation | Medications & Plan | `interventionPlanned` | Intervention Planned | `checkbox` |  |  |  |
| Evaluation | Medications & Plan | `interventionType` | Intervention Type | `text` |  |  |  |
| Evaluation | Medications & Plan | `interventionUrgency` | Intervention Urgency | `select` |  |  |  |
| Evaluation | Medications & Plan | `amputationRisk` | Amputation Risk | `select` |  |  |  |
| Evaluation | Medications & Plan | `vascularSurgeryConsult` | Vascular Surgery Consult | `checkbox` |  |  |  |
| Evaluation | Medications & Plan | `evalNotes` | Notes | `textarea` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `providerName` | Provider | `text` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `abiRight` | ABI Right | `number` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `abiLeft` | ABI Left | `number` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `abiChangeRight` | ABI Change R | `number` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `abiChangeLeft` | ABI Change L | `number` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `claudicationDistance` | Claudication Distance (m) | `number` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `symptomsChange` | Symptoms Change | `select` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `woundHealing` | Wound Healing | `select` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `woundSizeCm` | Wound Size (cm) | `number` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `aaaCurrentDiameterCm` | AAA Current Diameter (cm) | `number` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `aaaImagingType` | AAA Imaging Type | `text` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `aaaImagingDate` | AAA Imaging Date | `date` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `aaaGrowthSinceLast` | AAA Growth Since Last (cm) | `number` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `aaaInterventionUrgency` | Intervention Urgency | `text` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `anticoagAgent` | Anticoag Agent | `text` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `anticoagCompliance` | Anticoag Compliance | `checkbox` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `inr` | INR | `number` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `inrDate` | INR Date | `date` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `inrInRange` | INR In Range | `checkbox` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `bleedingEvent` | Bleeding Event | `checkbox` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `thrombosisEvent` | Thrombosis Event | `checkbox` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `bpSystolic` | BP Systolic | `number` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `ldl` | LDL (mg/dL) | `number` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `ldlAtGoal` | LDL at Goal | `checkbox` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `hba1c` | HbA1c (%) | `number` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `smokingStatusUpdate` | Smoking Status | `select` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `exerciseMinutesWeek` | Exercise (min/week) | `number` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `medicationChanges` | Medication Changes | `text` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `nextVisitDate` | Next Visit | `date` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `nextImagingDate` | Next Imaging Date | `date` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `nextImagingType` | Next Imaging Type | `text` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `referrals` | Referrals | `text` |  |  |  |
| Follow-Up Visits | Vascular Medicine Visit | `visitNotes` | Notes | `textarea` |  |  |  |

### Vision Screening — `vision_screening_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Vision Screening | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Vision Screening | Patient | `screenDate` | Screening Date | `date` | Y |  |  |
| Vision Screening | Patient | `provider` | Provider | `typeahead` | Y |  |  |
| Vision Screening | Patient | `screenIndication` | Indication | `select` | Y |  |  |
| Vision Screening | Visual Acuity | `rightUncorrected` | Right Eye (OD) — Uncorrected | `text` |  |  |  |
| Vision Screening | Visual Acuity | `leftUncorrected` | Left Eye (OS) — Uncorrected | `text` |  |  |  |
| Vision Screening | Visual Acuity | `rightCorrected` | Right Eye (OD) — Corrected | `text` |  |  |  |
| Vision Screening | Visual Acuity | `leftCorrected` | Left Eye (OS) — Corrected | `text` |  |  |  |
| Vision Screening | Visual Acuity | `correctionType` | Current Correction | `select` |  |  |  |
| Vision Screening | Visual Acuity | `iop` | Intraocular Pressure (mmHg — if measured) | `text` |  |  |  |
| Vision Screening | Fundal Examination (if performed) | `fundusPerformed` | Fundoscopy / fundal photo performed | `checkbox` |  |  |  |
| Vision Screening | Fundal Examination (if performed) | `retinalFindings` | Retinal Findings | `select` |  |  |  |
| Vision Screening | Fundal Examination (if performed) | `diabeticEyeScreen` | Diabetic Eye Screen Result (if applicable) | `select` |  |  |  |
| Vision Screening | Plan | `visionResult` | Overall Screening Result | `select` | Y |  |  |
| Vision Screening | Plan | `optometryReferral` | Optometry / ophthalmology referral placed | `checkbox` |  |  |  |
| Vision Screening | Plan | `visionNotes` | Notes | `textarea` |  |  |  |

### Vital Signs — `vital_signs_cf`

Screen: 1 page(s) · 4 section(s) · 24 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Vital Signs | Patient & Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Vital Signs | Patient & Context | `encounterId` | Encounter ID | `text` |  |  |  |
| Vital Signs | Patient & Context | `vsDate` | Date | `date` | Y |  |  |
| Vital Signs | Patient & Context | `vsTime` | Time | `text` |  |  |  |
| Vital Signs | Patient & Context | `takenBy` | Taken By | `typeahead` | Y |  |  |
| Vital Signs | Vital Signs | `vsBP` | Blood Pressure (mmHg) | `text` | Y |  |  |
| Vital Signs | Vital Signs | `vsBP2ndRead` | Blood Pressure — 2nd Reading | `text` |  |  |  |
| Vital Signs | Vital Signs | `vsHR` | Heart Rate (bpm) | `number` | Y |  |  |
| Vital Signs | Vital Signs | `vsRR` | Respiratory Rate (/min) | `number` |  |  |  |
| Vital Signs | Vital Signs | `vsTemp` | Temperature (°F) | `number` |  |  |  |
| Vital Signs | Vital Signs | `vsTempRoute` | Temperature Route | `select` |  |  |  |
| Vital Signs | Vital Signs | `vsO2` | O2 Saturation (%) | `number` | Y |  |  |
| Vital Signs | Vital Signs | `vsO2Supplement` | O2 Supplementation | `select` |  |  |  |
| Vital Signs | Anthropometrics | `vsHt` | Height | `text` |  |  |  |
| Vital Signs | Anthropometrics | `vsWt` | Weight (lbs) | `number` |  |  |  |
| Vital Signs | Anthropometrics | `vsWtKg` | Weight (kg) | `number` |  |  |  |
| Vital Signs | Anthropometrics | `vsBMI` | BMI | `number` |  |  |  |
| Vital Signs | Anthropometrics | `vsHeadCirc` | Head Circumference (cm) — pediatric | `number` |  |  |  |
| Vital Signs | Anthropometrics | `vsWaistCirc` | Waist Circumference (cm) | `number` |  |  |  |
| Vital Signs | Additional Monitoring | `vsBloodGlucose` | Blood Glucose (mg/dL) | `number` |  |  |  |
| Vital Signs | Additional Monitoring | `vsBloodGlucoseTiming` | Blood Glucose Timing | `select` |  |  |  |
| Vital Signs | Additional Monitoring | `vsPain` | Pain Score | `select` |  |  |  |
| Vital Signs | Additional Monitoring | `vsPeakFlow` | Peak Flow (L/min) — asthma monitoring | `number` |  |  |  |
| Vital Signs | Additional Monitoring | `vsNotes` | Notes / Flags | `textarea` |  |  |  |

### Vitals — `vitals_cf`

Screen: 1 page(s) · 2 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Vital Signs | Vital Signs | `measurementDate` | Date | `date` | Y |  |  |
| Vital Signs | Vital Signs | `measurementTime` | Time | `text` |  |  |  |
| Vital Signs | Vital Signs | `bpSystolic` | BP Systolic (mmHg) | `number` |  |  |  |
| Vital Signs | Vital Signs | `bpDiastolic` | BP Diastolic (mmHg) | `number` |  |  |  |
| Vital Signs | Vital Signs | `heartRate` | Heart Rate (bpm) | `number` |  |  |  |
| Vital Signs | Vital Signs | `respiratoryRate` | Respiratory Rate (/min) | `number` |  |  |  |
| Vital Signs | Vital Signs | `temperature` | Temperature (°F) | `number` |  |  |  |
| Vital Signs | Vital Signs | `o2Saturation` | O2 Saturation (%) | `number` |  |  |  |
| Vital Signs | Vital Signs | `weightLbs` | Weight (lbs) | `number` |  |  |  |
| Vital Signs | Vital Signs | `heightIn` | Height (inches) | `number` |  |  |  |
| Vital Signs | Vital Signs | `bmi` | BMI (auto-calculated) | `number` |  |  |  |
| Vital Signs | Vital Signs | `painScale` | Pain Scale (0-10) | `range` |  |  |  |
| Vital Signs | Vitals Notes | `position` | Position During BP | `select` |  |  |  |
| Vital Signs | Vitals Notes | `oxygenSupplemental` | Patient on supplemental oxygen | `checkbox` |  |  |  |
| Vital Signs | Vitals Notes | `supplementalLpm` | O2 Flow Rate (L/min) | `number` |  |  |  |
| Vital Signs | Vitals Notes | `vitalsNotes` | Vitals Notes | `textarea` |  |  |  |
| Vital Signs | Vitals Notes | `recordedBy` | Recorded By | `text` |  |  |  |

### Vitals Flowsheet — `vitals_history_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Vitals Flowsheet — History & Trends | Filter | `patientId` | Patient | `typeahead` | Y |  |  |
| Vitals Flowsheet — History & Trends | Filter | `dateFrom` | From Date | `date` |  |  |  |
| Vitals Flowsheet — History & Trends | Filter | `dateTo` | To Date | `date` |  |  |  |
| Vitals Flowsheet — History & Trends | Filter | `limit` | Max Records | `number` |  |  |  |
| Vitals Flowsheet — History & Trends | Trend Graph | `vitalType` | Vital to Graph | `select` |  |  |  |
| Vitals Flowsheet — History & Trends | Most Recent Values (read-only) | `latestBpSystolic` | BP Systolic (mmHg) | `number` |  |  |  |
| Vitals Flowsheet — History & Trends | Most Recent Values (read-only) | `latestBpDiastolic` | BP Diastolic (mmHg) | `number` |  |  |  |
| Vitals Flowsheet — History & Trends | Most Recent Values (read-only) | `latestPulse` | Pulse (bpm) | `number` |  |  |  |
| Vitals Flowsheet — History & Trends | Most Recent Values (read-only) | `latestTemp` | Temperature (°F) | `number` |  |  |  |
| Vitals Flowsheet — History & Trends | Most Recent Values (read-only) | `latestWeight` | Weight (lbs) | `number` |  |  |  |
| Vitals Flowsheet — History & Trends | Most Recent Values (read-only) | `latestHeight` | Height (in) | `number` |  |  |  |
| Vitals Flowsheet — History & Trends | Most Recent Values (read-only) | `latestBmi` | BMI | `number` |  |  |  |
| Vitals Flowsheet — History & Trends | Most Recent Values (read-only) | `latestSpo2` | SpO2 (%) | `number` |  |  |  |
| Vitals Flowsheet — History & Trends | Most Recent Values (read-only) | `latestRespRate` | Resp Rate (bpm) | `number` |  |  |  |
| Vitals Flowsheet — History & Trends | Most Recent Values (read-only) | `latestPainScore` | Pain Score (0-10) | `number` |  |  |  |
| Vitals Flowsheet — History & Trends | Most Recent Values (read-only) | `latestRecordedAt` | Last Recorded | `date` |  |  |  |
