---
title: "PracticeForceOneCFTrackingFields7"
---

# CF Tracking — Field-Level Detail (part 7 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Clinical**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Clinical

### Medical Certifications — `medical_certifications_cf`

Screen: 1 page(s) · 3 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Certification | Certification | `patientId` | Patient | `lookup` | Y |  |  |
| Certification | Certification | `certificationName` | Certification Name | `text` | Y |  |  |
| Certification | Certification | `certificationType` | Certification Type | `select` |  |  |  |
| Certification | Certification | `status` | Status | `select` |  |  |  |
| Certification | Certification | `determination` | Determination | `select` |  |  |  |
| Certification | Certification | `issuedDate` | Issued Date | `date` |  |  |  |
| Certification | Certification | `expirationDate` | Expiration Date | `date` |  |  |  |
| Certification | Certification | `examDate` | Exam Date | `date` |  |  |  |
| Certification | Certification | `issuingProvider` | Issuing Provider | `text` |  |  |  |
| Certification | Certification | `certificateNumber` | Certificate # | `text` |  |  |  |
| Certification | Certification | `formType` | Form Type | `text` |  |  |  |
| Certification | Requesting Entity | `requestingEntity` | Requesting Entity | `text` |  |  |  |
| Certification | Requesting Entity | `requestingContact` | Contact | `text` |  |  |  |
| Certification | Requesting Entity | `purpose` | Purpose | `text` |  |  |  |
| Certification | Exam Findings & Restrictions | `examFindings` | Exam Findings | `textarea` |  |  |  |
| Certification | Exam Findings & Restrictions | `restrictions` | Restrictions | `textarea` |  |  |  |
| Certification | Exam Findings & Restrictions | `functionalCapacity` | Functional Capacity | `text` |  |  |  |
| Certification | Exam Findings & Restrictions | `determinationNotes` | Determination Notes | `textarea` |  |  |  |
| Certification | Exam Findings & Restrictions | `followUpRequired` | Follow-Up Required | `checkbox` |  |  |  |
| Certification | Exam Findings & Restrictions | `followUpDate` | Follow-Up Date | `date` |  |  |  |
| Certification | Exam Findings & Restrictions | `notes` | Notes | `textarea` |  |  |  |

### Medical History — `past_medical_history_cf`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB MISSING

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| History Item | Medical History | `conditionType` | Category | `select` | Y |  |  |
| History Item | Medical History | `status` | Status | `select` |  |  |  |
| History Item | Medical History | `description` | Condition / procedure description | `text` | Y |  |  |
| History Item | Medical History | `icd10Code` | ICD-10 code | `text` |  |  |  |
| History Item | Medical History | `cptCode` | CPT code (surgery) | `text` |  |  |  |
| History Item | Medical History | `year` | Year | `number` |  |  |  |
| History Item | Medical History | `treatingProvider` | Treating provider / facility | `text` |  |  |  |
| History Item | Medical History | `notes` | Notes | `textarea` |  |  |  |

### Medicare AWV — `awv_cf`

Screen: 2 page(s) · 5 section(s) · 24 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Health Risk Assessment | AWV Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Health Risk Assessment | AWV Context | `awvDate` | AWV Date | `date` | Y |  |  |
| Health Risk Assessment | AWV Context | `awvType` | AWV Type | `select` | Y |  |  |
| Health Risk Assessment | AWV Context | `awvProvider` | Provider | `typeahead` | Y |  |  |
| Health Risk Assessment | Health Risk Assessment (HRA) | `selfRatedHealth` | Self-Rated Health Status | `select` |  |  |  |
| Health Risk Assessment | Health Risk Assessment (HRA) | `fallsHistory` | Falls in Past 12 Months | `select` | Y |  |  |
| Health Risk Assessment | Health Risk Assessment (HRA) | `fallWithInjury` | Fall With Injury in Past 12 Months | `select` |  |  |  |
| Health Risk Assessment | Health Risk Assessment (HRA) | `depressionScreen` | PHQ-2 Depression Screen | `select` | Y |  |  |
| Health Risk Assessment | Health Risk Assessment (HRA) | `cognitiveScreen` | Cognitive Screen (Mini-Cog or MMSE) | `select` | Y |  |  |
| Health Risk Assessment | Health Risk Assessment (HRA) | `functionalStatus` | Functional Status / ADLs | `textarea` |  |  |  |
| Screenings & Prevention Plan | Preventive Screenings Review | `mammogramStatus` | Mammogram | `select` |  |  |  |
| Screenings & Prevention Plan | Preventive Screenings Review | `colonoscopyStatus` | Colorectal Cancer Screening | `select` |  |  |  |
| Screenings & Prevention Plan | Preventive Screenings Review | `papStatus` | Pap Smear (females, ≤65) | `select` |  |  |  |
| Screenings & Prevention Plan | Preventive Screenings Review | `aorticAneurysm` | Abdominal Aortic Aneurysm Screening (males, 65-75, ever-smoker) | `select` |  |  |  |
| Screenings & Prevention Plan | Preventive Screenings Review | `lungCancerScreen` | Lung Cancer Screening CT (50-80 yo, 20 pack-year, current/quit <15yr) | `select` |  |  |  |
| Screenings & Prevention Plan | Preventive Screenings Review | `boneDesity` | DEXA Bone Density (females ≥65, males ≥70 or risk factors) | `select` |  |  |  |
| Screenings & Prevention Plan | Preventive Screenings Review | `diabetesScreen` | Diabetes Screening (prediabetes risk) | `select` |  |  |  |
| Screenings & Prevention Plan | Immunizations & Prevention | `fluVax` | Influenza Vaccine | `select` |  |  |  |
| Screenings & Prevention Plan | Immunizations & Prevention | `pneumoVax` | Pneumococcal Vaccine (PCV15/20 + PPSV23) | `select` |  |  |  |
| Screenings & Prevention Plan | Immunizations & Prevention | `shinglesVax` | Shingrix (Zoster) Vaccine Series | `select` |  |  |  |
| Screenings & Prevention Plan | Immunizations & Prevention | `covidVax` | COVID-19 Vaccine | `select` |  |  |  |
| Screenings & Prevention Plan | AWV Summary & Personalized Prevention Plan | `awvVitals` | Height / Weight / BMI | `textarea` |  |  |  |
| Screenings & Prevention Plan | AWV Summary & Personalized Prevention Plan | `awvMedList` | Medication List Reviewed | `textarea` | Y |  |  |
| Screenings & Prevention Plan | AWV Summary & Personalized Prevention Plan | `personalized Prevention` | Personalized Prevention Plan | `textarea` | Y |  |  |

### Medication Reconciliation — `medication_reconciliation_cf`

Screen: 1 page(s) · 4 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medication Reconciliation | Patient & Reconciliation Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Medication Reconciliation | Patient & Reconciliation Context | `medRecDate` | Reconciliation Date | `date` | Y |  |  |
| Medication Reconciliation | Patient & Reconciliation Context | `reconciler` | Reconciled By | `typeahead` | Y |  |  |
| Medication Reconciliation | Patient & Reconciliation Context | `reconciliationType` | Reconciliation Type | `select` | Y |  |  |
| Medication Reconciliation | Patient & Reconciliation Context | `sourceDocuments` | Information Sources Used | `textarea` |  |  |  |
| Medication Reconciliation | Current Medication List | `med1` | Medication 1 | `text` |  |  |  |
| Medication Reconciliation | Current Medication List | `med2` | Medication 2 | `text` |  |  |  |
| Medication Reconciliation | Current Medication List | `med3` | Medication 3 | `text` |  |  |  |
| Medication Reconciliation | Current Medication List | `med4` | Medication 4 | `text` |  |  |  |
| Medication Reconciliation | Current Medication List | `med5` | Medication 5 | `text` |  |  |  |
| Medication Reconciliation | Current Medication List | `med6` | Medication 6 | `text` |  |  |  |
| Medication Reconciliation | Current Medication List | `med7` | Medication 7 | `text` |  |  |  |
| Medication Reconciliation | Current Medication List | `med8` | Medication 8 | `text` |  |  |  |
| Medication Reconciliation | Current Medication List | `additionalMeds` | Additional Medications (list if more than 8) | `textarea` |  |  |  |
| Medication Reconciliation | OTC & Supplements | `otcSupplements` | OTC Medications & Supplements | `textarea` |  |  |  |
| Medication Reconciliation | Changes Made | `discrepanciesFound` | Discrepancies found between chart and patient report | `checkbox` |  |  |  |
| Medication Reconciliation | Changes Made | `discrepancyDetail` | Discrepancy Details | `textarea` |  |  |  |
| Medication Reconciliation | Changes Made | `medicationsStarted` | Medications Started Today | `textarea` |  |  |  |
| Medication Reconciliation | Changes Made | `medicationsStopped` | Medications Stopped Today | `textarea` |  |  |  |
| Medication Reconciliation | Changes Made | `highRiskMedReview` | High-risk medications reviewed (anticoagulants, insulin, opioids, narrow therapeutic index) | `checkbox` |  |  |  |
| Medication Reconciliation | Changes Made | `patientCounseled` | Patient counseled on medication changes | `checkbox` |  |  |  |

### Medications — `patient_medications_cf`

Screen: 1 page(s) · 2 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `PATIENT_MEDICATIONS`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medication | Drug Information | `drugName` | Drug name | `text` |  |  |  |
| Medication | Drug Information | `ndcCode` | NDC code | `text` |  |  |  |
| Medication | Drug Information | `strength` | Strength | `text` |  |  |  |
| Medication | Drug Information | `dosageForm` | Dosage form | `select` |  |  |  |
| Medication | Drug Information | `sig` | Sig (directions) | `text` |  |  |  |
| Medication | Drug Information | `quantity` | Quantity | `number` |  |  |  |
| Medication | Drug Information | `refills` | Refills | `number` |  |  |  |
| Medication | Drug Information | `daysSupply` | Days supply | `number` |  |  |  |
| Medication | Drug Information | `route` | Route | `select` |  |  |  |
| Medication | Status & Dates | `status` | Status | `select` |  |  |  |
| Medication | Status & Dates | `prescriptionType` | Type | `select` |  |  |  |
| Medication | Status & Dates | `startDate` | Start date | `date` |  |  |  |
| Medication | Status & Dates | `endDate` | End/stop date | `date` |  |  |  |
| Medication | Status & Dates | `prescriberName` | Prescriber | `typeahead` |  |  |  |
| Medication | Status & Dates | `pharmacyNotes` | Pharmacy / dispense notes | `textarea` |  |  |  |

### Melanoma Oncology — `melanoma_oncology_cf`

Screen: 2 page(s) · 6 section(s) · 87 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Tumor & Pathology | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Tumor & Pathology | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Tumor & Pathology | `providerName` | Oncologist | `text` |  |  |  |
| Evaluation | Tumor & Pathology | `melanomaSubtype` | Melanoma Subtype | `select` |  |  |  |
| Evaluation | Tumor & Pathology | `primarySite` | Primary Site | `text` |  |  |  |
| Evaluation | Tumor & Pathology | `breslowThicknessMm` | Breslow Thickness (mm) | `number` |  |  |  |
| Evaluation | Tumor & Pathology | `clarkLevel` | Clark Level | `number` |  |  |  |
| Evaluation | Tumor & Pathology | `ulceration` | Ulceration | `checkbox` |  |  |  |
| Evaluation | Tumor & Pathology | `mitoticRatePerMm2` | Mitotic Rate (/mm²) | `number` |  |  |  |
| Evaluation | Tumor & Pathology | `marginsStatus` | Margins | `select` |  |  |  |
| Evaluation | Tumor & Pathology | `biopsyDate` | Biopsy Date | `date` |  |  |  |
| Evaluation | Tumor & Pathology | `biopsyType` | Biopsy Type | `text` |  |  |  |
| Evaluation | Staging | `ajccTStage` | T Stage | `text` |  |  |  |
| Evaluation | Staging | `ajccNStage` | N Stage | `text` |  |  |  |
| Evaluation | Staging | `ajccMStage` | M Stage | `text` |  |  |  |
| Evaluation | Staging | `ajccOverallStage` | Overall Stage | `text` |  |  |  |
| Evaluation | Staging | `sentinelNodeBiopsyDone` | SLNB Done | `checkbox` |  |  |  |
| Evaluation | Staging | `slnbDate` | SLNB Date | `date` |  |  |  |
| Evaluation | Staging | `slnbNodesPositive` | SLNB Nodes Positive | `number` |  |  |  |
| Evaluation | Staging | `slnbResult` | SLNB Result | `text` |  |  |  |
| Evaluation | Staging | `distantMetastases` | Distant Metastases | `checkbox` |  |  |  |
| Evaluation | Staging | `brainMetastases` | Brain Metastases | `checkbox` |  |  |  |
| Evaluation | Staging | `brainMetastasesCount` | Brain Mets Count | `number` |  |  |  |
| Evaluation | Staging | `ldh` | LDH (U/L) | `number` |  |  |  |
| Evaluation | Staging | `ldhDate` | LDH Date | `date` |  |  |  |
| Evaluation | Molecular Profiling | `brafMutation` | BRAF Mutation | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `brafV600e` | BRAF V600E | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `brafV600k` | BRAF V600K | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `nrasMutation` | NRAS Mutation | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `kitMutation` | KIT Mutation | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `nf1Mutation` | NF1 Mutation | `checkbox` |  |  |  |
| Evaluation | Molecular Profiling | `pdl1Tps` | PD-L1 TPS (%) | `number` |  |  |  |
| Evaluation | Molecular Profiling | `pdl1Cps` | PD-L1 CPS | `number` |  |  |  |
| Evaluation | Molecular Profiling | `tmb` | TMB (mut/Mb) | `number` |  |  |  |
| Evaluation | Molecular Profiling | `msiStatus` | MSI Status | `text` |  |  |  |
| Evaluation | Molecular Profiling | `germlineTestingDone` | Germline Testing Done | `checkbox` |  |  |  |
| Evaluation | Imaging | `petCtDate` | PET/CT Date | `date` |  |  |  |
| Evaluation | Imaging | `petCtResult` | PET/CT Result | `text` |  |  |  |
| Evaluation | Imaging | `ctCabDate` | CT C/A/B Date | `date` |  |  |  |
| Evaluation | Imaging | `ctCabResult` | CT C/A/B Result | `text` |  |  |  |
| Evaluation | Imaging | `mriBrainDate` | MRI Brain Date | `date` |  |  |  |
| Evaluation | Imaging | `mriBrainResult` | MRI Brain Result | `text` |  |  |  |
| Evaluation | Treatment Plan | `treatmentIntent` | Intent | `select` |  |  |  |
| Evaluation | Treatment Plan | `pembrolizumabPlanned` | Pembrolizumab Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `nivolumabPlanned` | Nivolumab Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `ipilimumabPlanned` | Ipilimumab Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `nivoIpiCombo` | Nivo+Ipi Combo | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `relatlimabPlanned` | Relatlimab Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `dabrafenibPlanned` | Dabrafenib Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `trametinibPlanned` | Trametinib Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `radiationPlanned` | Radiation Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `sbrsPlanned` | SBRS/SRS Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `clinicalTrialOffered` | Clinical Trial Offered | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `palliativeCareReferral` | Palliative Care Referral | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `ecogPerformanceStatus` | ECOG PS | `number` |  |  |  |
| Evaluation | Treatment Plan | `tumorBoardDate` | Tumor Board Date | `date` |  |  |  |
| Evaluation | Treatment Plan | `tumorBoardRecommendation` | Tumor Board Recommendation | `textarea` |  |  |  |
| Evaluation | Treatment Plan | `treatmentPlan` | Treatment Plan | `textarea` |  |  |  |
| Evaluation | Treatment Plan | `evalNotes` | Notes | `textarea` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Treatment Visits | Melanoma Treatment Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `visitType` | Visit Type | `select` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `treatmentResponse` | Treatment Response | `select` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `ioAgentCurrent` | IO Agent | `text` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `ioCycle` | IO Cycle # | `number` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `targetedAgentCurrent` | Targeted Agent | `text` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `targetedCycle` | Targeted Cycle # | `number` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `recurrenceSuspected` | Recurrence Suspected | `checkbox` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `newLesions` | New Lesions | `checkbox` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `ldh` | LDH | `number` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `imagingOrdered` | Imaging Ordered | `checkbox` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `brainImagingOrdered` | Brain Imaging Ordered | `checkbox` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `pneumonitisGrade` | Pneumonitis Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `colitisGrade` | Colitis Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `dermatitisGrade` | Dermatitis Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `hypothyroidism` | Hypothyroidism | `checkbox` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `vitiligo` | Vitiligo | `checkbox` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `myocarditis` | Myocarditis | `checkbox` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `doseHeld` | Dose Held | `checkbox` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `holdReason` | Hold Reason | `text` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `steroidStarted` | Steroid Started | `checkbox` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `ioPermanentlyDiscontinued` | IO Permanently D/C'd | `checkbox` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `dermoscopyDone` | Dermoscopy Done | `checkbox` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `ecogPerformanceStatus` | ECOG PS | `number` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `nextVisitDate` | Next Visit | `date` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `nextImagingDate` | Next Imaging | `date` |  |  |  |
| Treatment Visits | Melanoma Treatment Visit | `visitNotes` | Notes | `textarea` |  |  |  |

### Memory Clinic — `memory_clinic_cf`

Screen: 2 page(s) · 7 section(s) · 65 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Evaluation | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Evaluation | `providerName` | Neurologist | `text` |  |  |  |
| Evaluation | Evaluation | `referralSource` | Referral Source | `text` |  |  |  |
| Evaluation | Evaluation | `referralReason` | Referral Reason | `text` |  |  |  |
| Evaluation | Cognitive Testing | `mmseScore` | MMSE Score | `number` |  |  |  |
| Evaluation | Cognitive Testing | `mmseDate` | MMSE Date | `date` |  |  |  |
| Evaluation | Cognitive Testing | `mocaScore` | MoCA Score | `number` |  |  |  |
| Evaluation | Cognitive Testing | `mocaDate` | MoCA Date | `date` |  |  |  |
| Evaluation | Cognitive Testing | `cdrGlobal` | CDR Global | `select` |  |  |  |
| Evaluation | Cognitive Testing | `cdrBoxTotal` | CDR Sum of Boxes | `number` |  |  |  |
| Evaluation | Cognitive Testing | `faqScore` | FAQ Score | `number` |  |  |  |
| Evaluation | Cognitive Testing | `neuropsychTestingDone` | Neuropsych Testing Done | `checkbox` |  |  |  |
| Evaluation | Diagnosis | `primaryDiagnosis` | Primary Diagnosis | `select` |  |  |  |
| Evaluation | Diagnosis | `primaryIcd10` | ICD-10 | `text` |  |  |  |
| Evaluation | Diagnosis | `diagnosisStage` | Stage | `select` |  |  |  |
| Evaluation | Diagnosis | `biomarkerClassification` | AT(N) Classification | `text` |  |  |  |
| Evaluation | Biomarkers | `petAmyloidDone` | Amyloid PET Done | `checkbox` |  |  |  |
| Evaluation | Biomarkers | `amyloidPositive` | Amyloid Positive | `checkbox` |  |  |  |
| Evaluation | Biomarkers | `lpDone` | CSF LP Done | `checkbox` |  |  |  |
| Evaluation | Biomarkers | `csfAbeta42` | CSF Abeta42 (pg/mL) | `number` |  |  |  |
| Evaluation | Biomarkers | `csfPhosphoTau181` | CSF pTau181 (pg/mL) | `number` |  |  |  |
| Evaluation | Biomarkers | `plasmaAbeta4240Done` | Plasma Abeta42/40 Done | `checkbox` |  |  |  |
| Evaluation | Biomarkers | `plasmaPtau217Done` | Plasma pTau217 Done | `checkbox` |  |  |  |
| Evaluation | Treatment | `cholinesteraseInhibitor` | Cholinesterase Inhibitor | `checkbox` |  |  |  |
| Evaluation | Treatment | `ciAgent` | Agent | `text` |  |  |  |
| Evaluation | Treatment | `ciDose` | Dose | `text` |  |  |  |
| Evaluation | Treatment | `memantine` | Memantine | `checkbox` |  |  |  |
| Evaluation | Treatment | `memantineDose` | Memantine Dose | `text` |  |  |  |
| Evaluation | Treatment | `antiAmyloidInfusionEligible` | Anti-Amyloid Eligible | `checkbox` |  |  |  |
| Evaluation | Treatment | `lecanemab` | Lecanemab (Leqembi) | `checkbox` |  |  |  |
| Evaluation | Treatment | `donanemab` | Donanemab (Kisunla) | `checkbox` |  |  |  |
| Evaluation | Treatment | `ariaRisk` | ARIA Risk | `text` |  |  |  |
| Evaluation | Safety & Social | `drivingStatus` | Driving Status | `select` |  |  |  |
| Evaluation | Safety & Social | `wanderingRisk` | Wandering Risk | `checkbox` |  |  |  |
| Evaluation | Safety & Social | `firearmInHome` | Firearm in Home | `checkbox` |  |  |  |
| Evaluation | Safety & Social | `caregiverName` | Caregiver | `text` |  |  |  |
| Evaluation | Safety & Social | `caregiverBurdenScore` | Caregiver Burden Score | `number` |  |  |  |
| Evaluation | Safety & Social | `poaFinancial` | POA Financial | `checkbox` |  |  |  |
| Evaluation | Safety & Social | `poaMedical` | POA Medical/Healthcare | `checkbox` |  |  |  |
| Evaluation | Safety & Social | `advanceDirective` | Advance Directive | `checkbox` |  |  |  |
| Evaluation | Safety & Social | `alzheimersAssociationReferral` | Alzheimer's Assoc. Referral | `checkbox` |  |  |  |
| Evaluation | Safety & Social | `clinicalTrialEligible` | Clinical Trial Eligible | `checkbox` |  |  |  |
| Evaluation | Safety & Social | `evalNotes` | Notes | `textarea` |  |  |  |
| Follow-Up Visits | Memory Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Follow-Up Visits | Memory Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Follow-Up Visits | Memory Visit | `monthsFromDiagnosis` | Months from Diagnosis | `number` |  |  |  |
| Follow-Up Visits | Memory Visit | `mocaScore` | MoCA Score | `number` |  |  |  |
| Follow-Up Visits | Memory Visit | `cdrGlobal` | CDR Global | `number` |  |  |  |
| Follow-Up Visits | Memory Visit | `cdrBoxTotal` | CDR Sum of Boxes | `number` |  |  |  |
| Follow-Up Visits | Memory Visit | `changeFromLast` | Change from Last | `select` |  |  |  |
| Follow-Up Visits | Memory Visit | `functionalDeclineSinceLast` | Functional Decline Since Last | `checkbox` |  |  |  |
| Follow-Up Visits | Memory Visit | `cholinesteraseInhibitorContinued` | ChEI Continued | `checkbox` |  |  |  |
| Follow-Up Visits | Memory Visit | `ciAgent` | ChEI Agent | `text` |  |  |  |
| Follow-Up Visits | Memory Visit | `ciDose` | ChEI Dose | `text` |  |  |  |
| Follow-Up Visits | Memory Visit | `antiAmyloidActive` | Anti-Amyloid Active | `checkbox` |  |  |  |
| Follow-Up Visits | Memory Visit | `antiAmyloidAgent` | Anti-Amyloid Agent | `text` |  |  |  |
| Follow-Up Visits | Memory Visit | `infusionCount` | Infusion # | `number` |  |  |  |
| Follow-Up Visits | Memory Visit | `ariaMonitoringMriDate` | ARIA Monitoring MRI Date | `date` |  |  |  |
| Follow-Up Visits | Memory Visit | `ariaFinding` | ARIA Finding | `text` |  |  |  |
| Follow-Up Visits | Memory Visit | `caregiverBurdenScore` | Caregiver Burden Score | `number` |  |  |  |
| Follow-Up Visits | Memory Visit | `goalsOfCareDiscussed` | Goals of Care Discussed | `checkbox` |  |  |  |
| Follow-Up Visits | Memory Visit | `hospiceCriteriaMet` | Hospice Criteria Met | `checkbox` |  |  |  |
| Follow-Up Visits | Memory Visit | `nextVisitDate` | Next Visit | `date` |  |  |  |
| Follow-Up Visits | Memory Visit | `visitNotes` | Notes | `textarea` |  |  |  |

### Men's Health Annual — `mens_health_exam_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Men's Health Annual Exam | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Men's Health Annual Exam | Patient | `examDate` | Exam Date | `date` | Y |  |  |
| Men's Health Annual Exam | Patient | `provider` | Provider | `typeahead` | Y |  |  |
| Men's Health Annual Exam | Patient | `age` | Age | `number` |  |  |  |
| Men's Health Annual Exam | Preventive Screening | `psa` | PSA Screening (Prostate) | `select` | Y |  |  |
| Men's Health Annual Exam | Preventive Screening | `testicular` | Testicular Exam | `select` |  |  |  |
| Men's Health Annual Exam | Preventive Screening | `colorectalMen` | Colorectal Cancer Screening | `select` |  |  |  |
| Men's Health Annual Exam | Preventive Screening | `abdominalAorta` | Abdominal Aortic Aneurysm (AAA) Screen | `select` |  |  |  |
| Men's Health Annual Exam | Preventive Screening | `lungCancerMen` | Lung Cancer Screening (LDCT) | `select` |  |  |  |
| Men's Health Annual Exam | Sexual / Urological Health | `erectileDysfunction` | Erectile Dysfunction (ED) | `select` |  |  |  |
| Men's Health Annual Exam | Sexual / Urological Health | `lowerUrinarySymptoms` | Lower Urinary Tract Symptoms (LUTS) | `select` |  |  |  |
| Men's Health Annual Exam | Sexual / Urological Health | `testosteroneScreen` | Testosterone Screening | `select` |  |  |  |
| Men's Health Annual Exam | Sexual / Urological Health | `stiRisk` | STI Screening | `select` |  |  |  |
| Men's Health Annual Exam | Mental Health & Lifestyle | `phq9Men` | PHQ-9 Depression Screen | `select` | Y |  |  |
| Men's Health Annual Exam | Mental Health & Lifestyle | `alcoholScreen` | AUDIT-C (Alcohol Screen) | `select` |  |  |  |
| Men's Health Annual Exam | Mental Health & Lifestyle | `smokingStatus` | Smoking / Tobacco | `select` |  |  |  |

### Mental Health Note — `mental_health_progress_cf`

Screen: 1 page(s) · 4 section(s) · 28 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Mental Health / Behavioral Health Progress Note | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Mental Health / Behavioral Health Progress Note | Patient & Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Patient & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| Mental Health / Behavioral Health Progress Note | Patient & Visit | `sessionType` | Session Type | `select` | Y |  |  |
| Mental Health / Behavioral Health Progress Note | Patient & Visit | `visitNumber` | Session # | `number` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Mental Status Exam (MSE) | `appearance` | Appearance | `select` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Mental Status Exam (MSE) | `behavior` | Behavior & Psychomotor | `select` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Mental Status Exam (MSE) | `speech` | Speech | `select` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Mental Status Exam (MSE) | `mood` | Mood (patient's own words) | `text` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Mental Status Exam (MSE) | `affect` | Affect | `select` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Mental Status Exam (MSE) | `thoughtProcess` | Thought Process | `select` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Mental Status Exam (MSE) | `thoughtContent` | Thought Content | `select` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Mental Status Exam (MSE) | `perception` | Perceptual Disturbances | `select` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Mental Status Exam (MSE) | `cognition` | Cognition | `select` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Mental Status Exam (MSE) | `insight` | Insight | `select` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Mental Status Exam (MSE) | `judgment` | Judgment | `select` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Safety Assessment | `siAssessment` | Suicidal Ideation (C-SSRS) | `select` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Safety Assessment | `hiAssessment` | Homicidal Ideation | `select` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Safety Assessment | `meansRestriction` | Means restriction counseling provided (firearms, medications) | `checkbox` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Safety Assessment | `safetyPlanUpdated` | Safety plan reviewed / updated with patient | `checkbox` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Safety Assessment | `crisisResources` | Crisis resources provided (988 lifeline, local ER) | `checkbox` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Safety Assessment | `highRiskDisposition` | High-Risk Disposition (if SI/HI present) | `select` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Treatment Plan & Plan | `sessionFocus` | Session Focus / Interventions | `textarea` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Treatment Plan & Plan | `medicationsMh` | Psychiatric Medications (if prescriber) | `textarea` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Treatment Plan & Plan | `medicationChangesMh` | Medication Changes | `textarea` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Treatment Plan & Plan | `mhGoalProgress` | Goal Progress Since Last Session | `select` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Treatment Plan & Plan | `nextMhVisit` | Next Visit Interval | `select` |  |  |  |
| Mental Health / Behavioral Health Progress Note | Treatment Plan & Plan | `coordinationNote` | Care Coordination | `textarea` |  |  |  |

### Mental Status Exam — `mental_status_exam_cf`

Screen: 1 page(s) · 5 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Mental Status Examination | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Mental Status Examination | Patient & Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Mental Status Examination | Patient & Visit | `mseDate` | Date | `date` | Y |  |  |
| Mental Status Examination | Patient & Visit | `mseProvider` | Clinician | `typeahead` | Y |  |  |
| Mental Status Examination | Observation & Appearance | `appearance` | Appearance | `select` | Y |  |  |
| Mental Status Examination | Observation & Appearance | `behavior` | Behavior / Psychomotor Activity | `select` | Y |  |  |
| Mental Status Examination | Observation & Appearance | `eyeContact` | Eye Contact | `select` |  |  |  |
| Mental Status Examination | Observation & Appearance | `speechRate` | Speech | `select` | Y |  |  |
| Mental Status Examination | Mood & Affect | `moodPatientStated` | Mood (patient's own words) | `text` | Y |  |  |
| Mental Status Examination | Mood & Affect | `affect` | Affect | `select` | Y |  |  |
| Mental Status Examination | Mood & Affect | `moodCongruence` | Mood-Affect Congruence | `select` |  |  |  |
| Mental Status Examination | Thought & Perception | `thoughtProcess` | Thought Process | `select` | Y |  |  |
| Mental Status Examination | Thought & Perception | `thoughtContent` | Thought Content | `select` | Y |  |  |
| Mental Status Examination | Thought & Perception | `thoughtContentNotes` | Thought Content Details | `text` |  |  |  |
| Mental Status Examination | Thought & Perception | `perceptualDisturbances` | Perceptual Disturbances | `select` | Y |  |  |
| Mental Status Examination | Thought & Perception | `siHi` | Suicidal / Homicidal Ideation | `select` | Y |  |  |
| Mental Status Examination | Cognition & Insight | `orientation` | Orientation | `select` | Y |  |  |
| Mental Status Examination | Cognition & Insight | `memory` | Memory | `select` |  |  |  |
| Mental Status Examination | Cognition & Insight | `concentration` | Concentration / Attention | `select` |  |  |  |
| Mental Status Examination | Cognition & Insight | `insight` | Insight | `select` | Y |  |  |
| Mental Status Examination | Cognition & Insight | `judgment` | Judgment | `select` | Y |  |  |

### Minor Procedure — `minor_procedure_cf`

Screen: 1 page(s) · 4 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Minor Office Procedure Note | Patient & Procedure | `patientId` | Patient | `typeahead` | Y |  |  |
| Minor Office Procedure Note | Patient & Procedure | `encounterId` | Encounter ID | `text` |  |  |  |
| Minor Office Procedure Note | Patient & Procedure | `procedureDate` | Procedure Date | `date` | Y |  |  |
| Minor Office Procedure Note | Patient & Procedure | `procedureType` | Procedure Type | `select` | Y |  |  |
| Minor Office Procedure Note | Patient & Procedure | `procedureSite` | Site / Location | `text` |  |  |  |
| Minor Office Procedure Note | Patient & Procedure | `procedureProvider` | Performing Provider | `typeahead` | Y |  |  |
| Minor Office Procedure Note | Preparation | `consentObtained` | Informed consent obtained and documented | `checkbox` |  |  |  |
| Minor Office Procedure Note | Preparation | `premedication` | Pre-medication / Sedation | `text` |  |  |  |
| Minor Office Procedure Note | Preparation | `anesthesia` | Local Anesthesia Used | `select` |  |  |  |
| Minor Office Procedure Note | Preparation | `anesthesiaAmount` | Anesthesia Amount / Route | `text` |  |  |  |
| Minor Office Procedure Note | Procedure Description | `procedureDescription` | Procedure Details | `textarea` | Y |  |  |
| Minor Office Procedure Note | Procedure Description | `specimenSent` | Specimen Sent to Pathology | `select` |  |  |  |
| Minor Office Procedure Note | Procedure Description | `ebl` | Estimated Blood Loss | `text` |  |  |  |
| Minor Office Procedure Note | Procedure Description | `complications` | Complications | `select` |  |  |  |
| Minor Office Procedure Note | Post-Procedure Care | `postProcCondition` | Patient Condition Post-Procedure | `select` |  |  |  |
| Minor Office Procedure Note | Post-Procedure Care | `dischargeInstructions` | Discharge Instructions | `textarea` |  |  |  |
| Minor Office Procedure Note | Post-Procedure Care | `cptCode` | CPT Code(s) | `text` |  |  |  |
| Minor Office Procedure Note | Post-Procedure Care | `followUp3` | Follow-Up Plan | `text` |  |  |  |

### Nephrology — `nephrology_cf`

Screen: 1 page(s) · 7 section(s) · 49 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Assessment | Assessment | `patientId` | Patient | `lookup` | Y |  |  |
| Assessment | Assessment | `assessmentDate` | Date | `date` |  |  |  |
| Assessment | Assessment | `nephrologist` | Nephrologist | `text` |  |  |  |
| Assessment | Assessment | `primaryDiagnosis` | Primary Diagnosis (ICD-10) | `text` |  |  |  |
| Assessment | Assessment | `ckdEtiology` | CKD Etiology | `text` |  |  |  |
| Assessment | Assessment | `status` | Status | `select` |  |  |  |
| Assessment | Assessment | `encounterId` | Encounter ID | `text` |  |  |  |
| Assessment | CKD Staging | `creatinineMgDl` | Creatinine (mg/dL) | `number` |  |  |  |
| Assessment | CKD Staging | `egfrMlMin` | eGFR (mL/min/1.73m²) | `number` |  |  |  |
| Assessment | CKD Staging | `ckdCategory` | CKD Category | `select` |  |  |  |
| Assessment | CKD Staging | `egfrChangeMlMinYr` | eGFR Change Rate (mL/min/yr) | `number` |  |  |  |
| Assessment | CKD Staging | `bunMgDl` | BUN (mg/dL) | `number` |  |  |  |
| Assessment | CKD Staging | `uricAcidMgDl` | Uric Acid (mg/dL) | `number` |  |  |  |
| Assessment | CKD Staging | `dialysisModality` | Dialysis Modality | `select` |  |  |  |
| Assessment | CKD Staging | `transplantReferral` | Transplant Referral | `checkbox` |  |  |  |
| Assessment | CKD Staging | `accessType` | Dialysis Access Type | `text` |  |  |  |
| Assessment | CKD Staging | `accessSite` | Access Site | `text` |  |  |  |
| Assessment | Urinalysis / Proteinuria | `urineAcrMgG` | Urine ACR (mg/g) | `number` |  |  |  |
| Assessment | Urinalysis / Proteinuria | `albuminuriaCategory` | Albuminuria Category | `select` |  |  |  |
| Assessment | Urinalysis / Proteinuria | `urinePcrMgG` | Urine PCR (mg/g) | `number` |  |  |  |
| Assessment | Urinalysis / Proteinuria | `urineProtein24hG` | 24h Urine Protein (g) | `number` |  |  |  |
| Assessment | Urinalysis / Proteinuria | `urineRbc` | Urine RBC | `text` |  |  |  |
| Assessment | Urinalysis / Proteinuria | `urineWbc` | Urine WBC | `text` |  |  |  |
| Assessment | Urinalysis / Proteinuria | `urineCasts` | Urine Casts | `text` |  |  |  |
| Assessment | Electrolytes | `sodiumMeqL` | Sodium (mEq/L) | `number` |  |  |  |
| Assessment | Electrolytes | `potassiumMeqL` | Potassium (mEq/L) | `number` |  |  |  |
| Assessment | Electrolytes | `chlorideMeqL` | Chloride (mEq/L) | `number` |  |  |  |
| Assessment | Electrolytes | `bicarbonateMetqL` | Bicarbonate (mEq/L) | `number` |  |  |  |
| Assessment | Electrolytes | `serumPhosphorusMgDl` | Phosphorus (mg/dL) | `number` |  |  |  |
| Assessment | Electrolytes | `serumCalciumMgDl` | Calcium (mg/dL) | `number` |  |  |  |
| Assessment | Electrolytes | `magnesiumMgDl` | Magnesium (mg/dL) | `number` |  |  |  |
| Assessment | Electrolytes | `albuminGDl` | Albumin (g/dL) | `number` |  |  |  |
| Assessment | Mineral Metabolism | `pthPgMl` | PTH (pg/mL) | `number` |  |  |  |
| Assessment | Mineral Metabolism | `vitD25ohNgMl` | 25-OH Vitamin D (ng/mL) | `number` |  |  |  |
| Assessment | Mineral Metabolism | `vitD125PgMl` | 1,25 Vitamin D (pg/mL) | `number` |  |  |  |
| Assessment | Anemia / Iron Studies | `hgbGDl` | Hemoglobin (g/dL) | `number` |  |  |  |
| Assessment | Anemia / Iron Studies | `hctPct` | Hematocrit (%) | `number` |  |  |  |
| Assessment | Anemia / Iron Studies | `ferritinNgMl` | Ferritin (ng/mL) | `number` |  |  |  |
| Assessment | Anemia / Iron Studies | `transferrinSatPct` | Transferrin Sat (%) | `number` |  |  |  |
| Assessment | Anemia / Iron Studies | `epoAgent` | EPO Agent | `text` |  |  |  |
| Assessment | Anemia / Iron Studies | `epoRoute` | EPO Route | `text` |  |  |  |
| Assessment | Anemia / Iron Studies | `ironTherapy` | IV Iron Therapy | `checkbox` |  |  |  |
| Assessment | Anemia / Iron Studies | `ironAgent` | Iron Agent | `text` |  |  |  |
| Assessment | Volume Status | `weightKg` | Weight (kg) | `number` |  |  |  |
| Assessment | Volume Status | `dryWeightKg` | Dry Weight (kg) | `number` |  |  |  |
| Assessment | Volume Status | `volumeStatus` | Volume Status | `select` |  |  |  |
| Assessment | Volume Status | `edemaGrade` | Edema Grade | `select` |  |  |  |
| Assessment | Volume Status | `plan` | Assessment & Plan | `textarea` |  |  |  |
| Assessment | Volume Status | `followUpInterval` | Follow-Up Interval | `text` |  |  |  |

### Neuro-Oncology — `neuro_oncology_cf`

Screen: 2 page(s) · 6 section(s) · 104 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Tumor & Classification | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Tumor & Classification | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Tumor & Classification | `providerName` | Neuro-Oncologist | `text` |  |  |  |
| Evaluation | Tumor & Classification | `whoDiagnosis` | WHO Diagnosis | `text` |  |  |  |
| Evaluation | Tumor & Classification | `whoGrade` | WHO Grade | `select` |  |  |  |
| Evaluation | Tumor & Classification | `whoCns5Classification` | WHO CNS5 Classification | `text` |  |  |  |
| Evaluation | Tumor & Classification | `tumorLocation` | Tumor Location | `text` |  |  |  |
| Evaluation | Tumor & Classification | `tumorLaterality` | Laterality | `select` |  |  |  |
| Evaluation | Tumor & Classification | `multifocal` | Multifocal | `checkbox` |  |  |  |
| Evaluation | Tumor & Classification | `leptomeningealDisease` | Leptomeningeal Disease | `checkbox` |  |  |  |
| Evaluation | Tumor & Classification | `diagnosisDate` | Diagnosis Date | `date` |  |  |  |
| Evaluation | Tumor & Classification | `kpsScore` | KPS Score | `number` |  |  |  |
| Evaluation | Tumor & Classification | `ecogPs` | ECOG PS | `number` |  |  |  |
| Evaluation | Tumor & Classification | `diseaseStatus` | Disease Status | `select` |  |  |  |
| Evaluation | Molecular Pathology | `idhStatus` | IDH Status | `select` |  |  |  |
| Evaluation | Molecular Pathology | `idhMutation` | IDH Mutation Type | `text` |  |  |  |
| Evaluation | Molecular Pathology | `mgmtMethylationStatus` | MGMT Status | `select` |  |  |  |
| Evaluation | Molecular Pathology | `mgmtMethylationPct` | MGMT Methylation % | `number` |  |  |  |
| Evaluation | Molecular Pathology | `tertPromoterMutation` | TERT Promoter Mutation | `text` |  |  |  |
| Evaluation | Molecular Pathology | `chromosomal1p19qCodeletion` | 1p/19q Codeletion | `checkbox` |  |  |  |
| Evaluation | Molecular Pathology | `egfrAmplification` | EGFR Amplification | `checkbox` |  |  |  |
| Evaluation | Molecular Pathology | `egfrViiiMutation` | EGFRvIII Mutation | `checkbox` |  |  |  |
| Evaluation | Molecular Pathology | `brafMutation` | BRAF Mutation | `checkbox` |  |  |  |
| Evaluation | Molecular Pathology | `ptenLoss` | PTEN Loss | `checkbox` |  |  |  |
| Evaluation | Molecular Pathology | `ntrkFusion` | NTRK Fusion | `checkbox` |  |  |  |
| Evaluation | Molecular Pathology | `methylationProfilingDone` | Methylation Profiling Done | `checkbox` |  |  |  |
| Evaluation | Molecular Pathology | `methylationClass` | Methylation Class | `text` |  |  |  |
| Evaluation | Clinical Presentation | `seizures` | Seizures | `checkbox` |  |  |  |
| Evaluation | Clinical Presentation | `seizureType` | Seizure Type | `text` |  |  |  |
| Evaluation | Clinical Presentation | `antiEpileptic` | AED Prescribed | `checkbox` |  |  |  |
| Evaluation | Clinical Presentation | `aedAgent` | AED Agent | `text` |  |  |  |
| Evaluation | Clinical Presentation | `aedDose` | AED Dose | `text` |  |  |  |
| Evaluation | Clinical Presentation | `focalDeficit` | Focal Deficit | `checkbox` |  |  |  |
| Evaluation | Clinical Presentation | `focalDeficitDescription` | Focal Deficit Description | `text` |  |  |  |
| Evaluation | Clinical Presentation | `cognitiveImpairment` | Cognitive Impairment | `checkbox` |  |  |  |
| Evaluation | Clinical Presentation | `aphasia` | Aphasia | `checkbox` |  |  |  |
| Evaluation | Clinical Presentation | `headache` | Headache | `checkbox` |  |  |  |
| Evaluation | Clinical Presentation | `dexamethasoneCurrent` | Dexamethasone Current | `checkbox` |  |  |  |
| Evaluation | Clinical Presentation | `dexamethasoneDoseMg` | Dexamethasone Dose (mg) | `number` |  |  |  |
| Evaluation | MRI & Imaging | `mriBrainDate` | MRI Brain Date | `date` |  |  |  |
| Evaluation | MRI & Imaging | `mriBrainResult` | MRI Brain Result | `text` |  |  |  |
| Evaluation | MRI & Imaging | `contrastEnhancingSizeCm` | Enhancing Size (cm) | `text` |  |  |  |
| Evaluation | MRI & Imaging | `t2FlairSizeCm` | T2/FLAIR Size (cm) | `text` |  |  |  |
| Evaluation | MRI & Imaging | `newLesion` | New Lesion on MRI | `checkbox` |  |  |  |
| Evaluation | MRI & Imaging | `pseudoprogressionSuspected` | Pseudoprogression Suspected | `checkbox` |  |  |  |
| Evaluation | MRI & Imaging | `radiationNecrosisSuspected` | Radiation Necrosis Suspected | `checkbox` |  |  |  |
| Evaluation | MRI & Imaging | `ranoResponse` | RANO Response | `select` |  |  |  |
| Evaluation | MRI & Imaging | `petDone` | PET Done | `checkbox` |  |  |  |
| Evaluation | MRI & Imaging | `petDate` | PET Date | `date` |  |  |  |
| Evaluation | MRI & Imaging | `petResult` | PET Result | `text` |  |  |  |
| Evaluation | Prior & Current Treatment | `surgeryDone` | Surgery Done | `checkbox` |  |  |  |
| Evaluation | Prior & Current Treatment | `surgeryDate` | Surgery Date | `date` |  |  |  |
| Evaluation | Prior & Current Treatment | `surgeryType` | Surgery Type | `text` |  |  |  |
| Evaluation | Prior & Current Treatment | `extentOfResection` | Extent of Resection | `select` |  |  |  |
| Evaluation | Prior & Current Treatment | `radiationDone` | Radiation Done | `checkbox` |  |  |  |
| Evaluation | Prior & Current Treatment | `radiationDoseGy` | Radiation Dose (Gy) | `number` |  |  |  |
| Evaluation | Prior & Current Treatment | `radiationFractions` | Fractions | `number` |  |  |  |
| Evaluation | Prior & Current Treatment | `tmzConcurrent` | Concurrent TMZ | `checkbox` |  |  |  |
| Evaluation | Prior & Current Treatment | `adjuvantChemoDone` | Adjuvant Chemo Done | `checkbox` |  |  |  |
| Evaluation | Prior & Current Treatment | `adjuvantChemoAgent` | Adjuvant Chemo Agent | `text` |  |  |  |
| Evaluation | Prior & Current Treatment | `adjuvantChemoCycles` | Adjuvant Cycles Completed | `number` |  |  |  |
| Evaluation | Prior & Current Treatment | `bevacizumabDone` | Bevacizumab Done | `checkbox` |  |  |  |
| Evaluation | Prior & Current Treatment | `tumorTreatingFieldsDone` | Tumor Treating Fields Done | `checkbox` |  |  |  |
| Evaluation | Prior & Current Treatment | `treatmentPlan` | Current Treatment Plan | `textarea` |  |  |  |
| Evaluation | Prior & Current Treatment | `chemoAgent` | Chemo Agent | `text` |  |  |  |
| Evaluation | Prior & Current Treatment | `chemoCycle` | Cycle # | `number` |  |  |  |
| Evaluation | Prior & Current Treatment | `clinicalTrial` | Clinical Trial | `checkbox` |  |  |  |
| Evaluation | Prior & Current Treatment | `trialName` | Trial Name | `text` |  |  |  |
| Evaluation | Prior & Current Treatment | `hospiceConsult` | Hospice Consult | `checkbox` |  |  |  |
| Evaluation | Prior & Current Treatment | `evalNotes` | Notes | `textarea` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Treatment Visits | Neuro-Oncology Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `cycleNumber` | Cycle # | `number` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `weekOnTherapy` | Week on Therapy | `number` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `kpsScore` | KPS Score | `number` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `ecogPs` | ECOG PS | `number` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `functionalStatusDescription` | Functional Status | `text` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `neuroExamChange` | Neuro Exam Change | `checkbox` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `neuroExamFindings` | Neuro Exam Findings | `text` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `seizureChange` | Seizure Change | `checkbox` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `mriDone` | MRI Done | `checkbox` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `mriDate` | MRI Date | `date` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `ranoResponse` | RANO Response | `select` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `pseudoprogressionVsTrue` | Pseudoprogression vs True | `checkbox` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `newLesion` | New Lesion | `checkbox` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `chemoAgent` | Chemo Agent | `text` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `chemoCycle` | Chemo Cycle # | `number` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `chemoAdministered` | Chemo Administered | `checkbox` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `chemoHeld` | Chemo Held | `checkbox` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `holdReason` | Hold Reason | `text` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `bevacizumabAdministered` | Bevacizumab Given | `checkbox` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `ttfCompliance` | TTF Compliance | `text` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `dexamethasoneDoseMg` | Dexamethasone Dose (mg) | `number` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `dexamethasoneChange` | Dexamethasone Change | `text` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `fatigueGrade` | Fatigue Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `nauseaGrade` | Nausea Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `neutropeniaGrade` | Neutropenia Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `thrombocytopeniaGrade` | Thrombocytopenia Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `dvtPe` | DVT/PE | `checkbox` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `palliativeFocusDiscussed` | Palliative Focus Discussed | `checkbox` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `hospiceReferral` | Hospice Referral | `checkbox` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `nextMriDate` | Next MRI Date | `date` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `nextVisitDate` | Next Visit | `date` |  |  |  |
| Treatment Visits | Neuro-Oncology Visit | `visitNotes` | Notes | `textarea` |  |  |  |

### Neurology — `neurology_cf`

Screen: 3 page(s) · 10 section(s) · 61 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Assessment | Assessment | `patientId` | Patient | `lookup` | Y |  |  |
| Assessment | Assessment | `assessmentDate` | Date | `date` |  |  |  |
| Assessment | Assessment | `assessedBy` | Assessed By | `text` |  |  |  |
| Assessment | Assessment | `primaryDiagnosis` | Primary Diagnosis (ICD-10) | `text` |  |  |  |
| Assessment | Assessment | `neuroConditionCategory` | Category | `select` |  |  |  |
| Assessment | Assessment | `status` | Status | `select` |  |  |  |
| Assessment | Assessment | `encounterId` | Encounter ID | `text` |  |  |  |
| Assessment | Assessment | `followUpInterval` | Follow-Up Interval | `text` |  |  |  |
| Assessment | Stroke / TIA — mRS | `mrsScore` | Modified Rankin Scale (0-6) | `number` |  |  |  |
| Assessment | Stroke / TIA — mRS | `mrsCategory` | mRS Category | `select` |  |  |  |
| Assessment | Cognitive — MoCA | `mocaScore` | MoCA Score (0-30) | `number` |  |  |  |
| Assessment | Cognitive — MoCA | `mocaCategory` | MoCA Category | `select` |  |  |  |
| Assessment | Cognitive — MoCA | `clockDraw` | Clock Draw | `select` |  |  |  |
| Assessment | Parkinson's — Hoehn & Yahr | `hoehnYahr` | Hoehn & Yahr Stage (0-5) | `number` |  |  |  |
| Assessment | Parkinson's — Hoehn & Yahr | `updrsMotorScore` | UPDRS Motor Score | `number` |  |  |  |
| Assessment | Parkinson's — Hoehn & Yahr | `updrsAdlScore` | UPDRS ADL Score | `number` |  |  |  |
| Assessment | Headache — MIDAS | `headacheType` | Headache Type | `select` |  |  |  |
| Assessment | Headache — MIDAS | `midasScore` | MIDAS Score | `number` |  |  |  |
| Assessment | Headache — MIDAS | `midasGrade` | MIDAS Grade | `select` |  |  |  |
| Assessment | Headache — MIDAS | `headacheDaysPerMonth` | Headache Days/Month | `number` |  |  |  |
| Assessment | Headache — MIDAS | `preventiveMedication` | Preventive Medication | `text` |  |  |  |
| Assessment | Multiple Sclerosis — EDSS | `edssScore` | EDSS Score (0-10) | `number` |  |  |  |
| Assessment | Multiple Sclerosis — EDSS | `msType` | MS Type | `select` |  |  |  |
| Assessment | Multiple Sclerosis — EDSS | `relapseInPast3Months` | Relapse in Past 3 Months | `checkbox` |  |  |  |
| Assessment | Multiple Sclerosis — EDSS | `dmt` | Disease-Modifying Therapy | `text` |  |  |  |
| Assessment | Epilepsy | `lastSeizureDate` | Last Seizure Date | `date` |  |  |  |
| Assessment | Epilepsy | `seizureType` | Seizure Type | `text` |  |  |  |
| Assessment | Epilepsy | `seizureFrequencyPerMonth` | Frequency/Month | `number` |  |  |  |
| Assessment | Epilepsy | `aedMedication` | AED Medication(s) | `text` |  |  |  |
| Assessment | Epilepsy | `aedLevel` | AED Drug Level | `text` |  |  |  |
| Assessment | Assessment & Plan | `plan` | Assessment & Plan | `textarea` |  |  |  |
| Seizure Log | Seizure Event | `patientId` | Patient | `lookup` | Y |  |  |
| Seizure Log | Seizure Event | `eventDate` | Event Date | `date` | Y |  |  |
| Seizure Log | Seizure Event | `eventTime` | Approximate Time | `text` |  |  |  |
| Seizure Log | Seizure Event | `seizureType` | Seizure Type | `text` |  |  |  |
| Seizure Log | Seizure Event | `ilaeClassification` | ILAE Classification | `text` |  |  |  |
| Seizure Log | Seizure Event | `durationSeconds` | Duration (seconds) | `number` |  |  |  |
| Seizure Log | Seizure Event | `awarenessLevel` | Awareness | `select` |  |  |  |
| Seizure Log | Seizure Event | `auraPresent` | Aura Present | `checkbox` |  |  |  |
| Seizure Log | Seizure Event | `auraDescription` | Aura Description | `text` |  |  |  |
| Seizure Log | Seizure Event | `witnessed` | Witnessed | `checkbox` |  |  |  |
| Seizure Log | Seizure Event | `medicationMissed` | Medication Missed | `checkbox` |  |  |  |
| Seizure Log | Seizure Event | `etohPrior` | Alcohol Prior | `checkbox` |  |  |  |
| Seizure Log | Seizure Event | `sleepHoursPrior` | Sleep Hours Prior | `number` |  |  |  |
| Seizure Log | Seizure Event | `injuryOccurred` | Injury Occurred | `checkbox` |  |  |  |
| Seizure Log | Seizure Event | `injuryDescription` | Injury Description | `text` |  |  |  |
| Seizure Log | Seizure Event | `emergencyVisit` | Emergency Visit | `checkbox` |  |  |  |
| Seizure Log | Seizure Event | `notes` | Notes | `textarea` |  |  |  |
| EMG / NCS | EMG / NCS Study | `patientId` | Patient | `lookup` | Y |  |  |
| EMG / NCS | EMG / NCS Study | `studyDate` | Study Date | `date` |  |  |  |
| EMG / NCS | EMG / NCS Study | `electrodiagnostician` | Electrodiagnostician | `text` |  |  |  |
| EMG / NCS | EMG / NCS Study | `indication` | Indication | `text` |  |  |  |
| EMG / NCS | EMG / NCS Study | `skinTemperatureC` | Skin Temp (°C) | `number` |  |  |  |
| EMG / NCS | EMG / NCS Study | `ncsSummary` | NCS Summary | `textarea` |  |  |  |
| EMG / NCS | EMG / NCS Study | `emgSummary` | EMG Summary | `textarea` |  |  |  |
| EMG / NCS | EMG / NCS Study | `electrodiagnosis` | Electrodiagnosis | `textarea` |  |  |  |
| EMG / NCS | EMG / NCS Study | `severity` | Severity | `select` |  |  |  |
| EMG / NCS | EMG / NCS Study | `axonalComponent` | Axonal Component | `checkbox` |  |  |  |
| EMG / NCS | EMG / NCS Study | `demyelinatingComponent` | Demyelinating Component | `checkbox` |  |  |  |
| EMG / NCS | EMG / NCS Study | `localization` | Localization | `text` |  |  |  |
| EMG / NCS | EMG / NCS Study | `status` | Status | `select` |  |  |  |

### Neuropsych Testing — `neuropsych_testing_cf`

Screen: 2 page(s) · 6 section(s) · 33 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Referral & Evaluator | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Referral & Evaluator | `evalDate` | Evaluation Date | `date` |  |  |  |
| Evaluation | Referral & Evaluator | `evaluator` | Evaluator (Psychologist) | `text` |  |  |  |
| Evaluation | Referral & Evaluator | `referralReason` | Referral Question / Reason | `textarea` |  |  |  |
| Evaluation | Referral & Evaluator | `referralSource` | Referral Source | `text` |  |  |  |
| Evaluation | Referral & Evaluator | `encounterId` | Encounter ID | `text` |  |  |  |
| Evaluation | Tests Administered | `testBattery` | Test Battery Description | `textarea` |  |  |  |
| Evaluation | Tests Administered | `testingDurationHours` | Testing Duration (hours) | `number` |  |  |  |
| Evaluation | Tests Administered | `testingSessionCount` | Sessions | `number` |  |  |  |
| Evaluation | Cognitive Domains | `intellect_fsiq` | FSIQ (Composite) | `number` |  |  |  |
| Evaluation | Cognitive Domains | `intellectLabel` | Intellectual Level | `text` |  |  |  |
| Evaluation | Cognitive Domains | `attentionImpaired` | Attention Impaired | `checkbox` |  |  |  |
| Evaluation | Cognitive Domains | `memoryImpaired` | Memory Impaired | `checkbox` |  |  |  |
| Evaluation | Cognitive Domains | `executiveFunctionImpaired` | Executive Function Impaired | `checkbox` |  |  |  |
| Evaluation | Cognitive Domains | `languageImpaired` | Language Impaired | `checkbox` |  |  |  |
| Evaluation | Cognitive Domains | `processingSpeedImpaired` | Processing Speed Impaired | `checkbox` |  |  |  |
| Evaluation | Cognitive Domains | `visuospatialImpaired` | Visuospatial Impaired | `checkbox` |  |  |  |
| Evaluation | Behavioral & Emotional | `depressionRating` | Depression Rating | `text` |  |  |  |
| Evaluation | Behavioral & Emotional | `anxietyRating` | Anxiety Rating | `text` |  |  |  |
| Evaluation | Behavioral & Emotional | `adhdScreenPositive` | ADHD Screen Positive | `checkbox` |  |  |  |
| Evaluation | Behavioral & Emotional | `adhdType` | ADHD Type | `select` |  |  |  |
| Evaluation | Behavioral & Emotional | `autismScreenPositive` | Autism Screen Positive | `checkbox` |  |  |  |
| Evaluation | Behavioral & Emotional | `psychosisScreen` | Psychosis Noted | `checkbox` |  |  |  |
| Evaluation | Diagnosis & Recommendations | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| Evaluation | Diagnosis & Recommendations | `secondaryDiagnoses` | Secondary Diagnoses | `text` |  |  |  |
| Evaluation | Diagnosis & Recommendations | `clinicalSummary` | Clinical Impressions Summary | `textarea` |  |  |  |
| Evaluation | Diagnosis & Recommendations | `recommendations` | Recommendations | `textarea` |  |  |  |
| Feedback Sessions | Feedback Session | `feedbackDate` | Feedback Date | `date` |  |  |  |
| Feedback Sessions | Feedback Session | `attendees` | Attendees | `text` |  |  |  |
| Feedback Sessions | Feedback Session | `findingsDiscussed` | Findings Discussed | `textarea` |  |  |  |
| Feedback Sessions | Feedback Session | `patientReaction` | Patient Reaction / Questions | `textarea` |  |  |  |
| Feedback Sessions | Feedback Session | `recommendationsReviewed` | Recommendations Reviewed | `checkbox` |  |  |  |
| Feedback Sessions | Feedback Session | `referralsMade` | Referrals Made | `text` |  |  |  |
