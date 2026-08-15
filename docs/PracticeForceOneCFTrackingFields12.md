---
title: "PracticeForceOneCFTrackingFields12"
---

# CF Tracking — Field-Level Detail (part 12 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Clinical**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Clinical

### Review of Systems — `encounter_ros_cf`

Screen: 1 page(s) · 8 section(s) · 30 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Review of Systems (ROS) | Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Review of Systems (ROS) | Context | `encounterId` | Encounter ID | `text` | Y |  |  |
| Review of Systems (ROS) | Context | `rosDate` | Date | `date` | Y |  |  |
| Review of Systems (ROS) | Constitutional | `constitFever` | Fever | `select` |  |  |  |
| Review of Systems (ROS) | Constitutional | `constitFatigue` | Fatigue / Malaise | `select` |  |  |  |
| Review of Systems (ROS) | Constitutional | `constitWeightChange` | Weight Change | `select` |  |  |  |
| Review of Systems (ROS) | Constitutional | `constitNightSweats` | Night Sweats | `select` |  |  |  |
| Review of Systems (ROS) | Cardiovascular | `cvChestPain` | Chest Pain / Pressure | `select` |  |  |  |
| Review of Systems (ROS) | Cardiovascular | `cvPalpitations` | Palpitations | `select` |  |  |  |
| Review of Systems (ROS) | Cardiovascular | `cvEdema` | Leg Swelling / Edema | `select` |  |  |  |
| Review of Systems (ROS) | Cardiovascular | `cvSyncope` | Syncope / Near-Syncope | `select` |  |  |  |
| Review of Systems (ROS) | Respiratory | `respDyspnea` | Dyspnea / SOB | `select` |  |  |  |
| Review of Systems (ROS) | Respiratory | `respCough` | Cough | `select` |  |  |  |
| Review of Systems (ROS) | Respiratory | `respWheezing` | Wheezing | `select` |  |  |  |
| Review of Systems (ROS) | Respiratory | `respHemoptysis` | Hemoptysis | `select` |  |  |  |
| Review of Systems (ROS) | Gastrointestinal | `giNausea` | Nausea / Vomiting | `select` |  |  |  |
| Review of Systems (ROS) | Gastrointestinal | `giAbdPain` | Abdominal Pain | `select` |  |  |  |
| Review of Systems (ROS) | Gastrointestinal | `giDiarrhea` | Diarrhea | `select` |  |  |  |
| Review of Systems (ROS) | Gastrointestinal | `giConstipation` | Constipation | `select` |  |  |  |
| Review of Systems (ROS) | Gastrointestinal | `giBloodStool` | Blood in Stool | `select` |  |  |  |
| Review of Systems (ROS) | Neurological | `neuroHeadache` | Headache | `select` |  |  |  |
| Review of Systems (ROS) | Neurological | `neuroDizziness` | Dizziness | `select` |  |  |  |
| Review of Systems (ROS) | Neurological | `neuroNumbing` | Numbness / Tingling | `select` |  |  |  |
| Review of Systems (ROS) | Neurological | `neuroWeakness` | Focal Weakness | `select` |  |  |  |
| Review of Systems (ROS) | Musculoskeletal | `mskJointPain` | Joint Pain / Swelling | `select` |  |  |  |
| Review of Systems (ROS) | Musculoskeletal | `mskBackPain` | Back Pain | `select` |  |  |  |
| Review of Systems (ROS) | Musculoskeletal | `mskMuscleWeakness` | Muscle Weakness | `select` |  |  |  |
| Review of Systems (ROS) | ROS Summary | `rosComplete` | ROS documented and complete | `checkbox` |  |  |  |
| Review of Systems (ROS) | ROS Summary | `systemsPositive` | Number of Systems Positive | `number` |  |  |  |
| Review of Systems (ROS) | ROS Summary | `rosFreeText` | ROS Free Text / Additional Systems | `textarea` |  |  |  |

### Rheumatology — `rheumatology_cf`

Screen: 3 page(s) · 8 section(s) · 49 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Assessment | Assessment | `patientId` | Patient | `lookup` | Y |  |  |
| Assessment | Assessment | `assessmentDate` | Assessment Date | `date` |  |  |  |
| Assessment | Assessment | `assessedBy` | Assessed By | `text` |  |  |  |
| Assessment | Assessment | `primaryDiagnosis` | Primary Diagnosis (ICD-10) | `text` |  |  |  |
| Assessment | Assessment | `diseaseDurationMo` | Disease Duration (months) | `number` |  |  |  |
| Assessment | Assessment | `encounterId` | Encounter ID | `text` |  |  |  |
| Assessment | RA Disease Activity | `das28Crp` | DAS28-CRP | `number` |  |  |  |
| Assessment | RA Disease Activity | `das28Esr` | DAS28-ESR | `number` |  |  |  |
| Assessment | RA Disease Activity | `cdaiScore` | CDAI Score | `number` |  |  |  |
| Assessment | RA Disease Activity | `sdaiScore` | SDAI Score | `number` |  |  |  |
| Assessment | RA Disease Activity | `rapid3Score` | RAPID3 Score | `number` |  |  |  |
| Assessment | RA Disease Activity | `rapid3Severity` | RAPID3 Severity | `select` |  |  |  |
| Assessment | Spondyloarthropathy / Lupus | `basadaiScore` | BASDAI Score (0-10) | `number` |  |  |  |
| Assessment | Spondyloarthropathy / Lupus | `asdasCrp` | ASDAS-CRP | `number` |  |  |  |
| Assessment | Spondyloarthropathy / Lupus | `sledaiScore` | SLEDAI Score | `number` |  |  |  |
| Assessment | Spondyloarthropathy / Lupus | `sledaiCategory` | SLEDAI Activity | `select` |  |  |  |
| Assessment | Inflammatory Markers | `esrMmHr` | ESR (mm/hr) | `number` |  |  |  |
| Assessment | Inflammatory Markers | `crpMgL` | CRP (mg/L) | `number` |  |  |  |
| Assessment | Inflammatory Markers | `rfIuMl` | RF (IU/mL) | `number` |  |  |  |
| Assessment | Inflammatory Markers | `antiCcpUMl` | Anti-CCP (U/mL) | `number` |  |  |  |
| Assessment | Inflammatory Markers | `anaTiter` | ANA Titer | `text` |  |  |  |
| Assessment | Inflammatory Markers | `complementC3` | Complement C3 (mg/dL) | `number` |  |  |  |
| Assessment | Inflammatory Markers | `complementC4` | Complement C4 (mg/dL) | `number` |  |  |  |
| Assessment | Inflammatory Markers | `antiDsdna` | Anti-dsDNA (IU/mL) | `number` |  |  |  |
| Assessment | Patient-Reported | `haqScore` | HAQ Score (0-3) | `number` |  |  |  |
| Assessment | Patient-Reported | `patientGlobalVas` | Patient Global VAS (0-100) | `number` |  |  |  |
| Assessment | Patient-Reported | `providerGlobalVas` | Provider Global VAS (0-100) | `number` |  |  |  |
| Assessment | Patient-Reported | `morningStiffnessMin` | Morning Stiffness (min) | `number` |  |  |  |
| Assessment | Plan | `plan` | Assessment & Plan | `textarea` |  |  |  |
| Assessment | Plan | `followUpInterval` | Follow-Up Interval | `text` |  |  |  |
| Joint Exams | Joint Count | `patientId` | Patient | `lookup` | Y |  |  |
| Joint Exams | Joint Count | `examDate` | Exam Date | `date` |  |  |  |
| Joint Exams | Joint Count | `examinedBy` | Examined By | `text` |  |  |  |
| Joint Exams | Joint Count | `jointSet` | Joint Set | `select` |  |  |  |
| Joint Exams | Joint Count | `swollenJointCount` | Swollen Joint Count (SJC) | `number` |  |  |  |
| Joint Exams | Joint Count | `tenderJointCount` | Tender Joint Count (TJC) | `number` |  |  |  |
| Joint Exams | Joint Count | `extraArticular` | Extra-Articular Findings | `textarea` |  |  |  |
| Joint Exams | Joint Count | `notes` | Notes | `textarea` |  |  |  |
| Biologic Infusions | Infusion | `patientId` | Patient | `lookup` | Y |  |  |
| Biologic Infusions | Infusion | `infusionDate` | Infusion Date | `date` |  |  |  |
| Biologic Infusions | Infusion | `medicationName` | Medication | `text` | Y |  |  |
| Biologic Infusions | Infusion | `medicationClass` | Drug Class | `select` |  |  |  |
| Biologic Infusions | Infusion | `doseMg` | Dose (mg) | `number` |  |  |  |
| Biologic Infusions | Infusion | `infusionNumber` | Infusion # | `number` |  |  |  |
| Biologic Infusions | Infusion | `infusionDurationMin` | Infusion Duration (min) | `number` |  |  |  |
| Biologic Infusions | Infusion | `route` | Route | `select` |  |  |  |
| Biologic Infusions | Infusion | `tbScreenDate` | TB Screen Date | `date` |  |  |  |
| Biologic Infusions | Infusion | `adverseReaction` | Adverse Reaction | `checkbox` |  |  |  |
| Biologic Infusions | Infusion | `adverseReactionNotes` | Reaction Notes | `textarea` |  |  |  |

### Rx Prescribing — `rx_prescribing_cf`

Screen: 3 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `PATIENT_INSURANCES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sig Builder Options | Sig Option | `optionType` | Option Type | `select` | Y | optionType |  |
| Sig Builder Options | Sig Option | `optionValue` | Value | `text` | Y | optionValue |  |
| Sig Builder Options | Sig Option | `drugClass` | Drug Class | `text` |  | drugClass |  |
| Sig Builder Options | Sig Option | `isDefault` | Default | `checkbox` |  | isDefault |  |
| Formulary Status | Formulary Entry | `drugName` | Drug Name | `text` |  | drugName |  |
| Formulary Status | Formulary Entry | `strength` | Strength | `text` |  | strength |  |
| Formulary Status | Formulary Entry | `formularyTier` | Formulary Tier | `select` |  | formularyTier |  |
| Formulary Status | Formulary Entry | `awpPerUnit` | AWP / Unit ($) | `text` |  | awpPerUnit |  |
| Formulary Status | Formulary Entry | `awpPerDay` | AWP / Day ($) | `text` |  | awpPerDay |  |
| Formulary Status | Formulary Entry | `genericName` | Generic Name | `text` |  | genericName |  |
| Formulary Status | Formulary Entry | `genericAwpPerDay` | Generic AWP / Day ($) | `text` |  | genericAwpPerDay |  |
| Provider Rx Credentials | Rx Credentials | `deaNumber` | DEA Number | `text` |  | deaNumber |  |
| Provider Rx Credentials | Rx Credentials | `nadeanNumber` | NADEAN Number | `text` |  | nadeanNumber |  |
| Provider Rx Credentials | Rx Credentials | `stateControlledRxCertificate` | State Controlled Rx Cert | `text` |  | stateControlledRxCertificate |  |
| Provider Rx Credentials | Rx Credentials | `stateControlledRxId` | State Controlled Rx ID | `text` |  | stateControlledRxId |  |

### Rx Refill Request — `prescription_refill_cf`

Screen: 1 page(s) · 3 section(s) · 22 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prescription Refill Request Workflow | Refill Request | `patientId` | Patient | `typeahead` | Y |  |  |
| Prescription Refill Request Workflow | Refill Request | `requestDate` | Request Date | `date` | Y |  |  |
| Prescription Refill Request Workflow | Refill Request | `requestSource` | Request Source | `select` | Y |  |  |
| Prescription Refill Request Workflow | Refill Request | `medicationName` | Medication Requested | `typeahead` | Y |  |  |
| Prescription Refill Request Workflow | Refill Request | `doseStrength` | Dose / Strength | `text` |  |  |  |
| Prescription Refill Request Workflow | Refill Request | `pharmacy` | Pharmacy | `text` |  |  |  |
| Prescription Refill Request Workflow | Refill Request | `refillsRequested` | Refills Requested | `number` |  |  |  |
| Prescription Refill Request Workflow | Refill Request | `lastFillDate` | Last Fill Date (from pharmacy) | `date` |  |  |  |
| Prescription Refill Request Workflow | Clinical Review | `lastVisit` | Date of Last Visit | `date` |  |  |  |
| Prescription Refill Request Workflow | Clinical Review | `dueForVisit` | Patient overdue for visit before refill | `checkbox` |  |  |  |
| Prescription Refill Request Workflow | Clinical Review | `chronicMed` | Chronic medication with established regimen | `checkbox` |  |  |  |
| Prescription Refill Request Workflow | Clinical Review | `controlledSubstance` | Controlled substance (Schedule II-V) | `checkbox` |  |  |  |
| Prescription Refill Request Workflow | Clinical Review | `scheduleClass` | Schedule Class | `select` |  |  |  |
| Prescription Refill Request Workflow | Clinical Review | `pdmpReview` | PDMP reviewed (controlled substances) | `checkbox` |  |  |  |
| Prescription Refill Request Workflow | Clinical Review | `labsNeeded` | Lab monitoring required before refill | `checkbox` |  |  |  |
| Prescription Refill Request Workflow | Clinical Review | `labsPending` | Labs Pending / Overdue | `text` |  |  |  |
| Prescription Refill Request Workflow | Refill Decision | `decision` | Decision | `select` | Y |  |  |
| Prescription Refill Request Workflow | Refill Decision | `refillNote` | Refill Note / Communication | `textarea` |  |  |  |
| Prescription Refill Request Workflow | Refill Decision | `sentToPharmacy` | eRx sent to pharmacy | `checkbox` |  |  |  |
| Prescription Refill Request Workflow | Refill Decision | `patientNotified` | Patient notified of decision | `checkbox` |  |  |  |
| Prescription Refill Request Workflow | Refill Decision | `completedBy` | Completed By | `typeahead` | Y |  |  |
| Prescription Refill Request Workflow | Refill Decision | `completedDate` | Completed Date | `date` | Y |  |  |

### Rx Refill Requests — `erx_refill_cf`

Screen: 1 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `ERX_AUDIT_EVENTS`, `ERX_MESSAGES`, `ERX_PHARMACIES`, `ERX_PRESCRIPTIONS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_MEDICATIONS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Refill Request | Prescription Info | `medicationName` | Medication | `text` |  | medicationName |  |
| Refill Request | Prescription Info | `dose` | Dose | `text` |  | dose |  |
| Refill Request | Prescription Info | `frequency` | Frequency | `text` |  | frequency |  |
| Refill Request | Prescription Info | `quantity` | Quantity | `text` |  | quantity |  |
| Refill Request | Prescription Info | `daysSupply` | Days Supply | `text` |  | daysSupply |  |
| Refill Request | Prescription Info | `status` | Status | `text` |  | status |  |
| Refill Request | Notes | `pharmacyNote` | Pharmacy Note | `textarea` |  | pharmacyNote |  |
| Refill Request | Notes | `notes` | Internal Notes | `textarea` |  | notes |  |

### SDOH — `patient_sdoh_cf`

Screen: 3 page(s) · 5 section(s) · 23 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Employment & Housing | Employment | `occupation` | Occupation | `text` |  |  |  |
| Employment & Housing | Employment | `employerName` | Employer | `text` |  |  |  |
| Employment & Housing | Employment | `householdSize` | Household size | `number` |  |  |  |
| Employment & Housing | Employment | `annualIncomeRange` | Annual income range | `select` |  |  |  |
| Employment & Housing | Employment | `educationLevel` | Education level | `select` |  |  |  |
| Employment & Housing | Employment | `insuranceType` | Insurance type | `select` |  |  |  |
| Employment & Housing | Housing & Status (UDS) | `housingSituation` | Housing situation | `select` |  |  |  |
| Employment & Housing | Housing & Status (UDS) | `isHomeless` | Experiencing homelessness | `checkbox` |  |  |  |
| Employment & Housing | Housing & Status (UDS) | `isPublicHousing` | Public/subsidized housing | `checkbox` |  |  |  |
| Employment & Housing | Housing & Status (UDS) | `isVeteran` | Veteran | `checkbox` |  |  |  |
| Employment & Housing | Housing & Status (UDS) | `isSeasonalMigrantWorker` | Seasonal/migrant worker | `checkbox` |  |  |  |
| Language & Access Barriers | Language Access (UDS) | `isLimitedEnglishProficiency` | Limited English proficiency (LEP) | `checkbox` |  |  |  |
| Language & Access Barriers | Language Access (UDS) | `preferredLanguage` | Preferred language | `text` |  |  |  |
| Language & Access Barriers | Language Access (UDS) | `interpreterNeeded` | Interpreter needed | `checkbox` |  |  |  |
| Language & Access Barriers | Access Barriers (AHC HRSN) | `foodInsecurity` | Food insecurity | `select` |  |  |  |
| Language & Access Barriers | Access Barriers (AHC HRSN) | `transportationBarrier` | Transportation barrier | `checkbox` |  |  |  |
| Language & Access Barriers | Access Barriers (AHC HRSN) | `utilitiesShutoffRisk` | Utilities shutoff risk | `checkbox` |  |  |  |
| Language & Access Barriers | Access Barriers (AHC HRSN) | `safetyConcerns` | Safety concerns at home | `checkbox` |  |  |  |
| Language & Access Barriers | Access Barriers (AHC HRSN) | `socialIsolation` | Social isolation | `checkbox` |  |  |  |
| Behavioral Screening | Screening (SBIRT / PHQ) | `substanceUseScreening` | Substance use screening (AUDIT-C/DAST) | `textarea` |  |  |  |
| Behavioral Screening | Screening (SBIRT / PHQ) | `mentalHealthScreening` | Mental health screening (PHQ-2/GAD-7) | `textarea` |  |  |  |
| Behavioral Screening | Screening (SBIRT / PHQ) | `screenedDate` | Screened date | `date` |  |  |  |
| Behavioral Screening | Screening (SBIRT / PHQ) | `screenedBy` | Screened by | `text` |  |  |  |

### SDOH Screening — `social_determinants_health_cf`

Screen: 1 page(s) · 5 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Social Determinants of Health Screening | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Social Determinants of Health Screening | Patient | `screenDate` | Screen Date | `date` | Y |  |  |
| Social Determinants of Health Screening | Patient | `screenedBy` | Screened By | `typeahead` | Y |  |  |
| Social Determinants of Health Screening | Housing & Transportation | `housingStatus` | Housing Stability | `select` | Y |  |  |
| Social Determinants of Health Screening | Housing & Transportation | `housingDetail` | Housing Details | `textarea` |  |  |  |
| Social Determinants of Health Screening | Housing & Transportation | `transportation` | Transportation Access | `select` | Y |  |  |
| Social Determinants of Health Screening | Food & Financial Security | `foodSecurity` | Food Security | `select` | Y |  |  |
| Social Determinants of Health Screening | Food & Financial Security | `foodDetail` | Food Security Details | `textarea` |  |  |  |
| Social Determinants of Health Screening | Food & Financial Security | `financialStress` | Financial Security | `select` | Y |  |  |
| Social Determinants of Health Screening | Food & Financial Security | `utilities` | Utilities / Heating | `select` |  |  |  |
| Social Determinants of Health Screening | Safety & Social Support | `domesticViolence` | Personal Safety (DV Screen) | `select` | Y |  |  |
| Social Determinants of Health Screening | Safety & Social Support | `socialSupport` | Social Support / Isolation | `select` | Y |  |  |
| Social Determinants of Health Screening | Safety & Social Support | `stressors` | Other Social Stressors | `textarea` |  |  |  |
| Social Determinants of Health Screening | Identified Needs & Referrals | `healthRelatedSocialNeeds` | Health-Related Social Needs Identified | `textarea` | Y |  |  |
| Social Determinants of Health Screening | Identified Needs & Referrals | `referrals` | Referrals / Resources Provided | `textarea` | Y |  |  |

### Skin Screening — `skin_cancer_screening_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Skin Cancer Screening | Patient & Risk Factors | `patientId` | Patient | `typeahead` | Y |  |  |
| Skin Cancer Screening | Patient & Risk Factors | `examDate` | Exam Date | `date` | Y |  |  |
| Skin Cancer Screening | Patient & Risk Factors | `provider` | Provider | `typeahead` | Y |  |  |
| Skin Cancer Screening | Patient & Risk Factors | `skinType` | Fitzpatrick Skin Type | `select` |  |  |  |
| Skin Cancer Screening | Patient & Risk Factors | `riskFactors` | Risk Factors | `textarea` |  |  |  |
| Skin Cancer Screening | Full Body Skin Exam | `fullBodyExamDone` | Full body skin examination performed | `checkbox` |  |  |  |
| Skin Cancer Screening | Full Body Skin Exam | `scalp` | Scalp | `select` |  |  |  |
| Skin Cancer Screening | Full Body Skin Exam | `faceNeck` | Face / Neck | `select` |  |  |  |
| Skin Cancer Screening | Full Body Skin Exam | `trunk` | Trunk | `select` |  |  |  |
| Skin Cancer Screening | Full Body Skin Exam | `upperExtremities` | Upper Extremities | `select` |  |  |  |
| Skin Cancer Screening | Full Body Skin Exam | `lowerExtremities` | Lower Extremities | `select` |  |  |  |
| Skin Cancer Screening | Full Body Skin Exam | `lesionDetails` | Lesion Details (if found) | `textarea` |  |  |  |
| Skin Cancer Screening | Assessment & Plan | `findingsSummary` | Overall Finding | `select` | Y |  |  |
| Skin Cancer Screening | Assessment & Plan | `biopsyPerformed` | Biopsy performed today | `checkbox` |  |  |  |
| Skin Cancer Screening | Assessment & Plan | `biopsyDetails` | Biopsy Details | `textarea` |  |  |  |
| Skin Cancer Screening | Assessment & Plan | `skinScreeningPlan` | Follow-up Plan | `textarea` |  |  |  |

### Sleep Medicine — `sleep_medicine_cf`

Screen: 3 page(s) · 9 section(s) · 67 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sleep Study | Study | `patientId` | Patient | `lookup` | Y |  |  |
| Sleep Study | Study | `studyDate` | Study Date | `date` |  |  |  |
| Sleep Study | Study | `studyType` | Study Type | `select` |  |  |  |
| Sleep Study | Study | `bmi` | BMI | `number` |  |  |  |
| Sleep Study | Study | `neckCircumferenceCm` | Neck (cm) | `number` |  |  |  |
| Sleep Study | Study | `studyIndication` | Indication | `text` |  |  |  |
| Sleep Study | PSG Technical | `totalRecordingTimeMin` | Total Recording Time (min) | `number` |  |  |  |
| Sleep Study | PSG Technical | `totalSleepTimeMin` | TST (min) | `number` |  |  |  |
| Sleep Study | PSG Technical | `sleepEfficiency` | Sleep Efficiency (%) | `number` |  |  |  |
| Sleep Study | PSG Technical | `sleepOnsetLatencyMin` | SOL (min) | `number` |  |  |  |
| Sleep Study | PSG Technical | `remLatencyMin` | REM Latency (min) | `number` |  |  |  |
| Sleep Study | PSG Technical | `wasoMin` | WASO (min) | `number` |  |  |  |
| Sleep Study | Sleep Architecture | `n1Pct` | N1 (%) | `number` |  |  |  |
| Sleep Study | Sleep Architecture | `n2Pct` | N2 (%) | `number` |  |  |  |
| Sleep Study | Sleep Architecture | `n3Pct` | N3 (%) | `number` |  |  |  |
| Sleep Study | Sleep Architecture | `remPct` | REM (%) | `number` |  |  |  |
| Sleep Study | Respiratory Events | `ahi` | AHI (overall) | `number` |  |  |  |
| Sleep Study | Respiratory Events | `ahiNrem` | AHI NREM | `number` |  |  |  |
| Sleep Study | Respiratory Events | `ahiRem` | AHI REM | `number` |  |  |  |
| Sleep Study | Respiratory Events | `ahiSupine` | AHI Supine | `number` |  |  |  |
| Sleep Study | Respiratory Events | `ahiNonSupine` | AHI Non-Supine | `number` |  |  |  |
| Sleep Study | Respiratory Events | `rdi` | RDI | `number` |  |  |  |
| Sleep Study | Respiratory Events | `odi` | ODI | `number` |  |  |  |
| Sleep Study | Respiratory Events | `apneaCount` | Apneas Total | `number` |  |  |  |
| Sleep Study | Respiratory Events | `hypopneaCount` | Hypopneas Total | `number` |  |  |  |
| Sleep Study | Respiratory Events | `centralApneaCount` | Central Apneas | `number` |  |  |  |
| Sleep Study | Respiratory Events | `longestApneaSec` | Longest Apnea (sec) | `number` |  |  |  |
| Sleep Study | Respiratory Events | `snoringPct` | Snoring (%) | `number` |  |  |  |
| Sleep Study | Oxygen Saturation | `baselineSpo2` | Baseline SpO2 (%) | `number` |  |  |  |
| Sleep Study | Oxygen Saturation | `nadirSpo2` | Nadir SpO2 (%) | `number` |  |  |  |
| Sleep Study | Oxygen Saturation | `avgSpo2Sleep` | Avg SpO2 Sleep (%) | `number` |  |  |  |
| Sleep Study | Oxygen Saturation | `t90Pct` | T90 (%) | `number` |  |  |  |
| Sleep Study | Titration / PAP | `splitNight` | Split Night | `checkbox` |  |  |  |
| Sleep Study | Titration / PAP | `cpapOptimalPressure` | CPAP Optimal Pressure (cmH2O) | `number` |  |  |  |
| Sleep Study | Titration / PAP | `bipapIpap` | BiPAP IPAP | `number` |  |  |  |
| Sleep Study | Titration / PAP | `bipapEpap` | BiPAP EPAP | `number` |  |  |  |
| Sleep Study | Titration / PAP | `asvUsed` | ASV Used | `checkbox` |  |  |  |
| Sleep Study | Titration / PAP | `positionalOsa` | Positional OSA | `checkbox` |  |  |  |
| Sleep Study | Interpretation | `osaSeverity` | OSA Severity | `select` |  |  |  |
| Sleep Study | Interpretation | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| Sleep Study | Interpretation | `clinicalImpression` | Clinical Impression | `textarea` |  |  |  |
| Sleep Study | Interpretation | `recommendations` | Recommendations | `textarea` |  |  |  |
| Sleep Consults | Sleep Consult | `patientId` | Patient | `lookup` | Y |  |  |
| Sleep Consults | Sleep Consult | `consultDate` | Consult Date | `date` |  |  |  |
| Sleep Consults | Sleep Consult | `visitType` | Visit Type | `select` |  |  |  |
| Sleep Consults | Sleep Consult | `referralReason` | Referral Reason | `text` |  |  |  |
| Sleep Consults | Sleep Consult | `isiScore` | ISI Score | `number` |  |  |  |
| Sleep Consults | Sleep Consult | `stopBangScore` | STOP-BANG Score | `number` |  |  |  |
| Sleep Consults | Sleep Consult | `epworthScore` | Epworth Sleepiness Score | `number` |  |  |  |
| Sleep Consults | Sleep Consult | `osaRisk` | OSA Risk | `select` |  |  |  |
| Sleep Consults | Sleep Consult | `insomnia` | Insomnia | `checkbox` |  |  |  |
| Sleep Consults | Sleep Consult | `snoring` | Snoring | `checkbox` |  |  |  |
| Sleep Consults | Sleep Consult | `witnessedApneas` | Witnessed Apneas | `checkbox` |  |  |  |
| Sleep Consults | Sleep Consult | `sleepStudyOrdered` | Sleep Study Ordered | `checkbox` |  |  |  |
| Sleep Consults | Sleep Consult | `papPrescribed` | PAP Prescribed | `checkbox` |  |  |  |
| PAP Therapy Visits | PAP Therapy Follow-Up | `patientId` | Patient | `lookup` | Y |  |  |
| PAP Therapy Visits | PAP Therapy Follow-Up | `visitDate` | Visit Date | `date` |  |  |  |
| PAP Therapy Visits | PAP Therapy Follow-Up | `deviceType` | Device Type | `select` |  |  |  |
| PAP Therapy Visits | PAP Therapy Follow-Up | `compliancePct` | Compliance (% days >4 hrs) | `number` |  |  |  |
| PAP Therapy Visits | PAP Therapy Follow-Up | `usageHoursPerNight` | Avg Usage (hrs/night) | `number` |  |  |  |
| PAP Therapy Visits | PAP Therapy Follow-Up | `residualAhi` | Residual AHI | `number` |  |  |  |
| PAP Therapy Visits | PAP Therapy Follow-Up | `leakRate` | Leak Rate (L/min) | `number` |  |  |  |
| PAP Therapy Visits | PAP Therapy Follow-Up | `epworthScore` | Epworth Score | `number` |  |  |  |
| PAP Therapy Visits | PAP Therapy Follow-Up | `maskType` | Mask Type | `text` |  |  |  |
| PAP Therapy Visits | PAP Therapy Follow-Up | `prescribedPressure` | Prescribed Pressure (cmH2O) | `number` |  |  |  |
| PAP Therapy Visits | PAP Therapy Follow-Up | `pressureChange` | Pressure Change | `checkbox` |  |  |  |
| PAP Therapy Visits | PAP Therapy Follow-Up | `adherenceNotes` | Adherence / Plan Notes | `textarea` |  |  |  |

### Sleep Study Results — `sleep_study_results_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sleep Study Results Review | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Sleep Study Results Review | Patient | `reviewDate` | Review Date | `date` | Y |  |  |
| Sleep Study Results Review | Patient | `provider` | Provider | `typeahead` | Y |  |  |
| Sleep Study Results Review | Sleep Study Results | `studyType` | Study Type | `select` | Y |  |  |
| Sleep Study Results Review | Sleep Study Results | `studyDate` | Study Date | `date` | Y |  |  |
| Sleep Study Results Review | Sleep Study Results | `sleepLab` | Sleep Lab / Service | `text` |  |  |  |
| Sleep Study Results Review | Sleep Study Results | `ahi` | AHI — Apnea-Hypopnea Index (events/hour) | `number` | Y |  |  |
| Sleep Study Results Review | Sleep Study Results | `ahiCategory` | AHI Severity | `select` | Y |  |  |
| Sleep Study Results Review | Sleep Study Results | `odiNadir` | ODI / O2 Nadir (%) | `number` |  |  |  |
| Sleep Study Results Review | Sleep Study Results | `rera` | RDI (including RERAs, if available) | `number` |  |  |  |
| Sleep Study Results Review | Sleep Study Results | `additionalFindings` | Additional Sleep Study Findings | `textarea` |  |  |  |
| Sleep Study Results Review | Treatment Plan | `cpapIndicated` | CPAP/BiPAP therapy indicated | `checkbox` |  |  |  |
| Sleep Study Results Review | Treatment Plan | `cpapType` | PAP Therapy Type | `select` |  |  |  |
| Sleep Study Results Review | Treatment Plan | `prescribedPressure` | Prescribed Pressure | `text` |  |  |  |
| Sleep Study Results Review | Treatment Plan | `maskType` | Mask Type | `select` |  |  |  |
| Sleep Study Results Review | Treatment Plan | `cpapVendor` | DME Supplier / CPAP Vendor | `text` |  |  |  |
| Sleep Study Results Review | Treatment Plan | `followUpPlan` | Follow-up Plan | `textarea` | Y |  |  |

### Smart Screeners — `encounter_smart_forms_cf`

Screen: 1 page(s) · 7 section(s) · 43 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Standardized Screeners & Scoring | Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Standardized Screeners & Scoring | Context | `encounterId` | Encounter ID | `text` | Y |  |  |
| Standardized Screeners & Scoring | Context | `administeredBy` | Administered By | `text` |  |  |  |
| Standardized Screeners & Scoring | PHQ-2 (Depression Screen) | `phq2Q1` | Little interest or pleasure in doing things? | `select` |  |  |  |
| Standardized Screeners & Scoring | PHQ-2 (Depression Screen) | `phq2Q2` | Feeling down, depressed, or hopeless? | `select` |  |  |  |
| Standardized Screeners & Scoring | PHQ-2 (Depression Screen) | `phq2Score` | PHQ-2 Total Score | `number` |  |  |  |
| Standardized Screeners & Scoring | PHQ-2 (Depression Screen) | `phq2Result` | PHQ-2 Result | `text` |  |  |  |
| Standardized Screeners & Scoring | PHQ-9 (If PHQ-2 ≥ 3) | `phq9Q1` | 1. Little interest or pleasure | `select` |  |  |  |
| Standardized Screeners & Scoring | PHQ-9 (If PHQ-2 ≥ 3) | `phq9Q2` | 2. Feeling down or depressed | `select` |  |  |  |
| Standardized Screeners & Scoring | PHQ-9 (If PHQ-2 ≥ 3) | `phq9Q3` | 3. Trouble sleeping or sleeping too much | `select` |  |  |  |
| Standardized Screeners & Scoring | PHQ-9 (If PHQ-2 ≥ 3) | `phq9Q4` | 4. Feeling tired or little energy | `select` |  |  |  |
| Standardized Screeners & Scoring | PHQ-9 (If PHQ-2 ≥ 3) | `phq9Q5` | 5. Poor appetite or overeating | `select` |  |  |  |
| Standardized Screeners & Scoring | PHQ-9 (If PHQ-2 ≥ 3) | `phq9Q6` | 6. Feeling bad about yourself | `select` |  |  |  |
| Standardized Screeners & Scoring | PHQ-9 (If PHQ-2 ≥ 3) | `phq9Q7` | 7. Trouble concentrating | `select` |  |  |  |
| Standardized Screeners & Scoring | PHQ-9 (If PHQ-2 ≥ 3) | `phq9Q8` | 8. Moving/speaking slowly or restless | `select` |  |  |  |
| Standardized Screeners & Scoring | PHQ-9 (If PHQ-2 ≥ 3) | `phq9Q9` | 9. Thoughts of self-harm or being better off dead | `select` |  |  |  |
| Standardized Screeners & Scoring | PHQ-9 (If PHQ-2 ≥ 3) | `phq9Score` | PHQ-9 Total Score | `number` |  |  |  |
| Standardized Screeners & Scoring | PHQ-9 (If PHQ-2 ≥ 3) | `phq9RiskLevel` | PHQ-9 Severity | `text` |  |  |  |
| Standardized Screeners & Scoring | PHQ-9 (If PHQ-2 ≥ 3) | `phq9SafetyFlag` | Safety Flag: Q9 > 0 (requires immediate safety assessment) | `checkbox` |  |  |  |
| Standardized Screeners & Scoring | GAD-7 (Anxiety Screen) | `gad7Q1` | 1. Feeling nervous or on edge | `select` |  |  |  |
| Standardized Screeners & Scoring | GAD-7 (Anxiety Screen) | `gad7Q2` | 2. Not able to stop or control worrying | `select` |  |  |  |
| Standardized Screeners & Scoring | GAD-7 (Anxiety Screen) | `gad7Q3` | 3. Worrying too much about different things | `select` |  |  |  |
| Standardized Screeners & Scoring | GAD-7 (Anxiety Screen) | `gad7Q4` | 4. Trouble relaxing | `select` |  |  |  |
| Standardized Screeners & Scoring | GAD-7 (Anxiety Screen) | `gad7Q5` | 5. Being so restless it is hard to sit still | `select` |  |  |  |
| Standardized Screeners & Scoring | GAD-7 (Anxiety Screen) | `gad7Q6` | 6. Becoming easily annoyed or irritable | `select` |  |  |  |
| Standardized Screeners & Scoring | GAD-7 (Anxiety Screen) | `gad7Q7` | 7. Feeling afraid as if something awful might happen | `select` |  |  |  |
| Standardized Screeners & Scoring | GAD-7 (Anxiety Screen) | `gad7Score` | GAD-7 Score | `number` |  |  |  |
| Standardized Screeners & Scoring | GAD-7 (Anxiety Screen) | `gad7Result` | GAD-7 Severity | `text` |  |  |  |
| Standardized Screeners & Scoring | AUDIT-C (Alcohol Screen) | `auditQ1` | 1. How often do you have a drink containing alcohol? | `select` |  |  |  |
| Standardized Screeners & Scoring | AUDIT-C (Alcohol Screen) | `auditQ2` | 2. How many drinks on a typical drinking day? | `select` |  |  |  |
| Standardized Screeners & Scoring | AUDIT-C (Alcohol Screen) | `auditQ3` | 3. How often 6 or more drinks on one occasion? | `select` |  |  |  |
| Standardized Screeners & Scoring | AUDIT-C (Alcohol Screen) | `auditcScore` | AUDIT-C Score | `number` |  |  |  |
| Standardized Screeners & Scoring | AUDIT-C (Alcohol Screen) | `auditcResult` | AUDIT-C Result | `text` |  |  |  |
| Standardized Screeners & Scoring | Tobacco / Smoking Screen | `tobaccoUse` | Current Tobacco Use? | `select` |  |  |  |
| Standardized Screeners & Scoring | Tobacco / Smoking Screen | `tobaccoPacks` | Pack Years (if current/former) | `number` |  |  |  |
| Standardized Screeners & Scoring | Tobacco / Smoking Screen | `tobaccoQuitYear` | Year Quit (if former) | `number` |  |  |  |
| Standardized Screeners & Scoring | Tobacco / Smoking Screen | `tobaccoCessationCounseled` | Cessation counseling offered | `checkbox` |  |  |  |
| Standardized Screeners & Scoring | Falls Risk Screen | `fallsHistory` | 1 or more falls in past year? | `checkbox` |  |  |  |
| Standardized Screeners & Scoring | Falls Risk Screen | `fallsBalanceProblem` | Balance or gait problem? | `checkbox` |  |  |  |
| Standardized Screeners & Scoring | Falls Risk Screen | `fallsMedications` | High-risk medications (sedatives, antihypertensives, diuretics, psychotropics)? | `checkbox` |  |  |  |
| Standardized Screeners & Scoring | Falls Risk Screen | `fallsVisionImpaired` | Vision impairment? | `checkbox` |  |  |  |
| Standardized Screeners & Scoring | Falls Risk Screen | `fallsRiskLevel` | Falls Risk Level | `text` |  |  |  |
| Standardized Screeners & Scoring | Falls Risk Screen | `fallsInterventions` | Interventions / Referrals | `textarea` |  |  |  |

### Smoking Cessation — `smoking_cessation_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Tobacco Cessation Counseling | Patient & Assessment | `patientId` | Patient | `typeahead` | Y |  |  |
| Tobacco Cessation Counseling | Patient & Assessment | `encounterId` | Encounter ID | `text` |  |  |  |
| Tobacco Cessation Counseling | Patient & Assessment | `counselingDate` | Counseling Date | `date` | Y |  |  |
| Tobacco Cessation Counseling | Patient & Assessment | `counselor` | Provider / Counselor | `typeahead` | Y |  |  |
| Tobacco Cessation Counseling | 5 A's Framework | `ask` | ASK — Tobacco Use Status | `select` | Y |  |  |
| Tobacco Cessation Counseling | 5 A's Framework | `packsPerDayCs` | Packs per Day | `select` | Y |  |  |
| Tobacco Cessation Counseling | 5 A's Framework | `yearsSmoked` | Years Smoked | `number` |  |  |  |
| Tobacco Cessation Counseling | 5 A's Framework | `packYears` | Pack-Years (ppd × years) | `number` |  |  |  |
| Tobacco Cessation Counseling | 5 A's Framework | `advise` | ADVISE — Clear Cessation Advice Given | `select` | Y |  |  |
| Tobacco Cessation Counseling | 5 A's Framework | `assess` | ASSESS — Readiness to Quit | `select` | Y |  |  |
| Tobacco Cessation Counseling | 5 A's Framework | `quitDate` | Target Quit Date (if ready) | `date` |  |  |  |
| Tobacco Cessation Counseling | 5 A's Framework | `assist` | ASSIST — Treatment Offered | `select` | Y |  |  |
| Tobacco Cessation Counseling | 5 A's Framework | `arrange` | ARRANGE — Follow-Up | `select` | Y |  |  |
| Tobacco Cessation Counseling | Cessation Plan | `cptCessation` | CPT Code (Cessation Counseling) | `select` |  |  |  |
| Tobacco Cessation Counseling | Cessation Plan | `triggerIdentified` | Triggers / Barriers Identified | `textarea` |  |  |  |
| Tobacco Cessation Counseling | Cessation Plan | `copingStrategies` | Coping Strategies Discussed | `textarea` |  |  |  |

### Social History / SDOH — `social_history_cf`

Screen: 1 page(s) · 9 section(s) · 36 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Social History & Social Determinants of Health | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Social History & Social Determinants of Health | Patient | `encounterId` | Encounter ID | `text` |  |  |  |
| Social History & Social Determinants of Health | Patient | `collectedDate` | Date Collected | `date` | Y |  |  |
| Social History & Social Determinants of Health | Tobacco & Smoking | `tobaccoStatus` | Tobacco Status | `select` | Y |  |  |
| Social History & Social Determinants of Health | Tobacco & Smoking | `tobaccoType` | Type(s) | `text` |  |  |  |
| Social History & Social Determinants of Health | Tobacco & Smoking | `tobaccoPacksPerDay` | Packs/Day (if cigarettes) | `number` |  |  |  |
| Social History & Social Determinants of Health | Tobacco & Smoking | `tobaccoYearsSmoked` | Years Smoked | `number` |  |  |  |
| Social History & Social Determinants of Health | Tobacco & Smoking | `tobaccoQuitYear` | Year Quit (if former) | `number` |  |  |  |
| Social History & Social Determinants of Health | Tobacco & Smoking | `cessationCounseled` | Tobacco cessation counseling provided | `checkbox` |  |  |  |
| Social History & Social Determinants of Health | Alcohol | `alcoholStatus` | Alcohol Use | `select` | Y |  |  |
| Social History & Social Determinants of Health | Alcohol | `alcoholDrinksPerWeek` | Drinks per Week | `number` |  |  |  |
| Social History & Social Determinants of Health | Substance Use | `recreationalDrugUse` | Recreational Drug Use | `select` |  |  |  |
| Social History & Social Determinants of Health | Occupation & Education | `occupation` | Occupation | `text` |  |  |  |
| Social History & Social Determinants of Health | Occupation & Education | `employer` | Employer | `text` |  |  |  |
| Social History & Social Determinants of Health | Occupation & Education | `educationLevel` | Education Level | `select` |  |  |  |
| Social History & Social Determinants of Health | Occupation & Education | `occupationalHazards` | Occupational Hazards (if relevant) | `textarea` |  |  |  |
| Social History & Social Determinants of Health | Family & Relationships | `maritalStatus` | Marital Status | `select` |  |  |  |
| Social History & Social Determinants of Health | Family & Relationships | `livingSituation` | Living Situation | `select` |  |  |  |
| Social History & Social Determinants of Health | Family & Relationships | `dependents` | Dependents | `text` |  |  |  |
| Social History & Social Determinants of Health | Exercise & Diet | `exerciseFrequency` | Exercise Frequency | `select` |  |  |  |
| Social History & Social Determinants of Health | Exercise & Diet | `exerciseType` | Exercise Type | `text` |  |  |  |
| Social History & Social Determinants of Health | Exercise & Diet | `dietType` | Diet Type | `select` |  |  |  |
| Social History & Social Determinants of Health | Social Determinants of Health (SDOH) | `foodInsecurity` | Food insecurity: difficulty affording enough food | `checkbox` |  |  |  |
| Social History & Social Determinants of Health | Social Determinants of Health (SDOH) | `housingInstability` | Housing instability or unsafe housing | `checkbox` |  |  |  |
| Social History & Social Determinants of Health | Social Determinants of Health (SDOH) | `transportationBarrier` | Transportation barrier to healthcare | `checkbox` |  |  |  |
| Social History & Social Determinants of Health | Social Determinants of Health (SDOH) | `financialStrain` | Financial strain / unable to pay for medications or care | `checkbox` |  |  |  |
| Social History & Social Determinants of Health | Social Determinants of Health (SDOH) | `socialIsolation` | Social isolation / lack of social support | `checkbox` |  |  |  |
| Social History & Social Determinants of Health | Social Determinants of Health (SDOH) | `domesticViolence` | Domestic violence / interpersonal safety concern | `checkbox` |  |  |  |
| Social History & Social Determinants of Health | Social Determinants of Health (SDOH) | `sdohReferral` | SDOH Referrals / Resources Provided | `textarea` |  |  |  |
| Social History & Social Determinants of Health | Additional Social History | `sexuallyActive` | Sexually Active | `select` |  |  |  |
| Social History & Social Determinants of Health | Additional Social History | `sexualOrientation` | Sexual Orientation | `select` |  |  |  |
| Social History & Social Determinants of Health | Additional Social History | `genderIdentityFull` | Gender Identity | `select` |  |  |  |
| Social History & Social Determinants of Health | Additional Social History | `travelHistory` | Recent Travel (past 6 months) | `textarea` |  |  |  |
| Social History & Social Determinants of Health | Additional Social History | `militaryHistory` | Military / Veteran Status | `select` |  |  |  |
| Social History & Social Determinants of Health | Additional Social History | `primaryLanguage` | Primary Language | `select` |  |  |  |
| Social History & Social Determinants of Health | Additional Social History | `interpreterNeeded` | Medical interpreter needed for clinical communications | `checkbox` |  |  |  |

### Social Work — `social_work_cf`

Screen: 2 page(s) · 8 section(s) · 56 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Referral | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Referral | `evalDate` | Evaluation Date | `date` |  |  |  |
| Evaluation | Referral | `socialWorker` | Social Worker | `text` |  |  |  |
| Evaluation | Referral | `referralSource` | Referral Source | `text` |  |  |  |
| Evaluation | Referral | `referralReason` | Referral Reason | `textarea` |  |  |  |
| Evaluation | Referral | `encounterId` | Encounter ID | `text` |  |  |  |
| Evaluation | SDOH Screening (AHC-HRSN / Gravity) | `housingInstability` | Housing Instability | `checkbox` |  |  |  |
| Evaluation | SDOH Screening (AHC-HRSN / Gravity) | `housingSituation` | Housing Situation | `select` |  |  |  |
| Evaluation | SDOH Screening (AHC-HRSN / Gravity) | `foodInsecurity` | Food Insecurity | `checkbox` |  |  |  |
| Evaluation | SDOH Screening (AHC-HRSN / Gravity) | `transportationNeeds` | Transportation Barriers | `checkbox` |  |  |  |
| Evaluation | SDOH Screening (AHC-HRSN / Gravity) | `utilityDifficulty` | Utility Difficulty | `checkbox` |  |  |  |
| Evaluation | SDOH Screening (AHC-HRSN / Gravity) | `safetyConcern` | Safety Concern at Home | `checkbox` |  |  |  |
| Evaluation | SDOH Screening (AHC-HRSN / Gravity) | `interpersonalViolence` | Interpersonal Violence Concern | `checkbox` |  |  |  |
| Evaluation | SDOH Screening (AHC-HRSN / Gravity) | `socialIsolation` | Social Isolation | `checkbox` |  |  |  |
| Evaluation | SDOH Screening (AHC-HRSN / Gravity) | `socialIsolationUclaScore` | UCLA Loneliness Score | `number` |  |  |  |
| Evaluation | SDOH Screening (AHC-HRSN / Gravity) | `financialStrain` | Financial Strain | `checkbox` |  |  |  |
| Evaluation | SDOH Screening (AHC-HRSN / Gravity) | `languageBarrier` | Language Barrier | `checkbox` |  |  |  |
| Evaluation | SDOH Screening (AHC-HRSN / Gravity) | `preferredLanguage` | Preferred Language | `text` |  |  |  |
| Evaluation | SDOH Screening (AHC-HRSN / Gravity) | `sdohTotalPositive` | Total SDOH Positives | `number` |  |  |  |
| Evaluation | Employment & Education | `employmentStatus` | Employment Status | `select` |  |  |  |
| Evaluation | Employment & Education | `educationLevel` | Education Level | `text` |  |  |  |
| Evaluation | Employment & Education | `healthLiteracy` | Health Literacy | `select` |  |  |  |
| Evaluation | Mental Health Screening | `depressionScreening` | Depression Screen Result | `select` |  |  |  |
| Evaluation | Mental Health Screening | `phq2Score` | PHQ-2 Score | `number` |  |  |  |
| Evaluation | Mental Health Screening | `phq9Score` | PHQ-9 Score | `number` |  |  |  |
| Evaluation | Mental Health Screening | `anxietyScreening` | Anxiety Screen Result | `select` |  |  |  |
| Evaluation | Mental Health Screening | `gad2Score` | GAD-2 Score | `number` |  |  |  |
| Evaluation | Mental Health Screening | `gad7Score` | GAD-7 Score | `number` |  |  |  |
| Evaluation | Mental Health Screening | `suicidalIdeationHistory` | History of Suicidal Ideation | `checkbox` |  |  |  |
| Evaluation | Mental Health Screening | `mentalHealthTreatmentCurrent` | Currently in MH Treatment | `checkbox` |  |  |  |
| Evaluation | Mental Health Screening | `mhTreatmentDescription` | MH Treatment Description | `text` |  |  |  |
| Evaluation | Substance Use | `alcoholUse` | Alcohol Use | `select` |  |  |  |
| Evaluation | Substance Use | `auditCScore` | AUDIT-C Score | `number` |  |  |  |
| Evaluation | Substance Use | `drugUse` | Drug Use Positive | `checkbox` |  |  |  |
| Evaluation | Substance Use | `dast10Score` | DAST-10 Score | `number` |  |  |  |
| Evaluation | Substance Use | `tobaccoUse` | Tobacco Use | `select` |  |  |  |
| Evaluation | Domestic Violence Screening (HITS) | `dvsPerformed` | DV Screen Performed | `checkbox` |  |  |  |
| Evaluation | Domestic Violence Screening (HITS) | `hitsHurt` | HITS: Physically Hurt (1-4) | `number` |  |  |  |
| Evaluation | Domestic Violence Screening (HITS) | `hitsInsult` | HITS: Insult / Talk Down (1-4) | `number` |  |  |  |
| Evaluation | Domestic Violence Screening (HITS) | `hitsThreaten` | HITS: Threaten (1-4) | `number` |  |  |  |
| Evaluation | Domestic Violence Screening (HITS) | `hitsScream` | HITS: Scream / Curse (1-4) | `number` |  |  |  |
| Evaluation | Domestic Violence Screening (HITS) | `hitsTotal` | HITS Total | `number` |  |  |  |
| Evaluation | Domestic Violence Screening (HITS) | `dvsPositive` | DV Screen Positive (≥11) | `checkbox` |  |  |  |
| Evaluation | Domestic Violence Screening (HITS) | `dvsSafetyPlanProvided` | Safety Plan Provided | `checkbox` |  |  |  |
| Evaluation | Domestic Violence Screening (HITS) | `hotlineProvided` | Hotline Number Provided | `checkbox` |  |  |  |
| Evaluation | Domestic Violence Screening (HITS) | `shelterReferral` | Shelter Referral Made | `checkbox` |  |  |  |
| Evaluation | Care Plan Summary | `psychosocialSummary` | Psychosocial Assessment Summary | `textarea` |  |  |  |
| Evaluation | Care Plan Summary | `followUpPlan` | Follow-Up Plan | `textarea` |  |  |  |
| Follow-Up Visits | Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Follow-Up Visits | Visit | `visitNumber` | Visit # | `number` |  |  |  |
| Follow-Up Visits | Visit | `socialWorker` | Social Worker | `text` |  |  |  |
| Follow-Up Visits | Visit | `contactType` | Contact Type | `select` |  |  |  |
| Follow-Up Visits | Visit | `contactDurationMin` | Duration (min) | `number` |  |  |  |
| Follow-Up Visits | Visit | `contactWith` | Contacted With | `select` |  |  |  |
| Follow-Up Visits | Visit | `sdohUpdateNotes` | SDOH Update Notes | `textarea` |  |  |  |
| Follow-Up Visits | Visit | `visitNotes` | Visit Notes | `textarea` |  |  |  |

### Specialist Consult Note — `specialist_consult_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Specialist Consultation Note | Patient & Referral Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Specialist Consultation Note | Patient & Referral Context | `consultDate` | Consultation Date | `date` | Y |  |  |
| Specialist Consultation Note | Patient & Referral Context | `consultType` | Consultation Type | `select` | Y |  |  |
| Specialist Consultation Note | Patient & Referral Context | `referringProvider` | Referring Provider | `text` |  |  |  |
| Specialist Consultation Note | Patient & Referral Context | `consultingProvider` | Consulting Provider / Specialist | `typeahead` | Y |  |  |
| Specialist Consultation Note | Patient & Referral Context | `consultingSpecialty` | Consulting Specialty | `select` |  |  |  |
| Specialist Consultation Note | Patient & Referral Context | `reasonForConsult` | Reason for Consultation | `textarea` | Y |  |  |
| Specialist Consultation Note | History & Clinical Summary | `hpiSummary` | History of Present Illness / Relevant History | `textarea` | Y |  |  |
| Specialist Consultation Note | History & Clinical Summary | `pertinentWorkup` | Pertinent Prior Workup | `textarea` |  |  |  |
| Specialist Consultation Note | Consultation Exam & Assessment | `consultExam` | Physical Examination Findings | `textarea` | Y |  |  |
| Specialist Consultation Note | Consultation Exam & Assessment | `consultAssessment` | Assessment | `textarea` | Y |  |  |
| Specialist Consultation Note | Consultation Exam & Assessment | `consultPlan` | Recommendations / Plan | `textarea` | Y |  |  |
| Specialist Consultation Note | Consultation Exam & Assessment | `returnToReferring` | Return to Referring Provider | `select` |  |  |  |

### Specialist Consult Note — `specialist_consult_note_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Specialist Consultation Note | Patient & Referral | `patientId` | Patient | `typeahead` | Y |  |  |
| Specialist Consultation Note | Patient & Referral | `noteDate` | Note Date | `date` | Y |  |  |
| Specialist Consultation Note | Patient & Referral | `noteDirection` | Note Direction | `select` | Y |  |  |
| Specialist Consultation Note | Patient & Referral | `specialty` | Specialty | `text` | Y |  |  |
| Specialist Consultation Note | Patient & Referral | `specialistName` | Specialist Name | `text` |  |  |  |
| Specialist Consultation Note | Patient & Referral | `specialistNpi` | Specialist NPI | `text` |  |  |  |
| Specialist Consultation Note | Patient & Referral | `referralId` | Referral Tracking ID (if linked) | `text` |  |  |  |
| Specialist Consultation Note | Reason for Consult | `reasonForConsult` | Reason for Consultation | `textarea` | Y |  |  |
| Specialist Consultation Note | Reason for Consult | `relevantHistory` | Relevant History Provided | `textarea` |  |  |  |
| Specialist Consultation Note | Specialist Findings (Inbound) | `specialistFindings` | Specialist Findings | `textarea` |  |  |  |
| Specialist Consultation Note | Specialist Findings (Inbound) | `specialistImpression` | Specialist Impression | `textarea` |  |  |  |
| Specialist Consultation Note | Specialist Findings (Inbound) | `specialistPlan` | Specialist Plan / Recommendations | `textarea` |  |  |  |
| Specialist Consultation Note | Specialist Findings (Inbound) | `pcpActionNotes` | PCP Review Notes | `textarea` |  |  |  |
| Specialist Consultation Note | Care Coordination | `followUpWithPcp` | Follow-up with PCP recommended | `checkbox` |  |  |  |
| Specialist Consultation Note | Care Coordination | `coManagement` | Co-management arrangement established | `checkbox` |  |  |  |
| Specialist Consultation Note | Care Coordination | `transferOfCare` | Transfer of care (specialist now primary for this condition) | `checkbox` |  |  |  |

### Spirometry / PFT — `spirometry_cf`

Screen: 1 page(s) · 4 section(s) · 20 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Spirometry / Pulmonary Function Test (PFT) | Patient & Test | `patientId` | Patient | `typeahead` | Y |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Patient & Test | `encounterId` | Encounter ID | `text` |  |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Patient & Test | `testDate` | Test Date | `date` | Y |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Patient & Test | `indication` | Indication | `select` | Y |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Patient & Test | `bronchodilatorGiven` | Post-bronchodilator spirometry performed | `checkbox` |  |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Pre-Bronchodilator Values | `preFvc` | FVC (L) | `number` |  |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Pre-Bronchodilator Values | `preFvcPct` | FVC % Predicted | `number` |  |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Pre-Bronchodilator Values | `preFev1` | FEV1 (L) | `number` |  |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Pre-Bronchodilator Values | `preFev1Pct` | FEV1 % Predicted | `number` |  |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Pre-Bronchodilator Values | `preFev1Fvc` | FEV1/FVC Ratio | `number` |  |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Pre-Bronchodilator Values | `prePef` | PEF (L/sec) | `number` |  |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Post-Bronchodilator Values (if performed) | `postFvc` | Post-BD FVC (L) | `number` |  |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Post-Bronchodilator Values (if performed) | `postFev1` | Post-BD FEV1 (L) | `number` |  |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Post-Bronchodilator Values (if performed) | `postFev1Pct` | Post-BD FEV1 % Predicted | `number` |  |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Post-Bronchodilator Values (if performed) | `fev1ResponsePct` | FEV1 % Change (bronchodilator response) | `number` |  |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Post-Bronchodilator Values (if performed) | `significantResponse` | Significant bronchodilator response (≥ 12% + 200mL FEV1 improvement) | `checkbox` |  |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Interpretation | `pattern` | Spirometry Pattern | `select` | Y |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Interpretation | `severity` | Severity (if abnormal) | `select` |  |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Interpretation | `goldStage` | COPD GOLD Stage (if applicable) | `select` |  |  |  |
| Spirometry / Pulmonary Function Test (PFT) | Interpretation | `clinicalInterpretation` | Clinical Interpretation & Plan | `textarea` | Y |  |  |

### Sports Medicine — `sports_medicine_cf`

Screen: 1 page(s) · 4 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Musculoskeletal / Sports Medicine Evaluation | Patient & Injury | `patientId` | Patient | `typeahead` | Y |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Patient & Injury | `visitDate` | Visit Date | `date` | Y |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Patient & Injury | `provider` | Provider | `typeahead` | Y |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Patient & Injury | `chiefComplaint` | Chief Complaint | `text` | Y |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Patient & Injury | `injuryDate` | Date of Injury / Onset | `date` |  |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Patient & Injury | `injuryMechanism` | Mechanism of Injury / Onset | `textarea` |  |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Patient & Injury | `activityLevel` | Activity Level | `select` |  |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Symptoms | `painScore` | Pain Score (0-10) | `select` | Y |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Symptoms | `painCharacter` | Pain Character | `select` |  |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Symptoms | `swelling` | Swelling | `select` |  |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Symptoms | `weightBearing` | Weight Bearing Status | `select` |  |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Musculoskeletal Exam | `inspectionFindings` | Inspection / Palpation | `textarea` |  |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Musculoskeletal Exam | `rom` | Range of Motion | `textarea` |  |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Musculoskeletal Exam | `specialTests` | Special Tests | `textarea` |  |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Assessment & Plan | `impressionDx` | Impression / Working Diagnoses | `textarea` | Y |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Assessment & Plan | `imagingOrdered` | Imaging Ordered | `textarea` |  |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Assessment & Plan | `immediateTreatment` | Immediate Treatment | `textarea` |  |  |  |
| Musculoskeletal / Sports Medicine Evaluation | Assessment & Plan | `followUpPlan` | Follow-up Plan | `textarea` |  |  |  |

### Sports Physical — `sports_physical_cf`

Screen: 1 page(s) · 4 section(s) · 31 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pre-Participation Physical Evaluation (PPE) | Patient & Sport | `patientId` | Patient | `typeahead` | Y |  |  |
| Pre-Participation Physical Evaluation (PPE) | Patient & Sport | `encounterId` | Encounter ID | `text` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Patient & Sport | `examDate` | Exam Date | `date` | Y |  |  |
| Pre-Participation Physical Evaluation (PPE) | Patient & Sport | `sport` | Sport(s) | `text` | Y |  |  |
| Pre-Participation Physical Evaluation (PPE) | Patient & Sport | `school` | School / Organization | `text` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Patient & Sport | `grade` | Grade / Level | `select` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Cardiac / Sudden Death Screening History | `chestPain` | Chest pain/discomfort with exertion | `checkbox` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Cardiac / Sudden Death Screening History | `syncope` | Unexplained syncope or near-syncope | `checkbox` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Cardiac / Sudden Death Screening History | `exertionalDyspnea` | Excessive/unexplained dyspnea with exertion | `checkbox` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Cardiac / Sudden Death Screening History | `palpitations` | Heart palpitations during exercise | `checkbox` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Cardiac / Sudden Death Screening History | `murmur` | Known heart murmur | `checkbox` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Cardiac / Sudden Death Screening History | `hypertensionHx` | History of hypertension | `checkbox` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Cardiac / Sudden Death Screening History | `familyScd` | Family history of sudden cardiac death < 50 yrs | `checkbox` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Cardiac / Sudden Death Screening History | `familyHcm` | Family history of HCM, Marfan, Long QT | `checkbox` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Cardiac / Sudden Death Screening History | `heatIllness` | Prior heat illness or heat stroke | `checkbox` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Cardiac / Sudden Death Screening History | `concussionHx` | Prior concussion (when, how many) | `checkbox` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Cardiac / Sudden Death Screening History | `concussionDetails` | Concussion Details | `text` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Physical Exam | `height` | Height | `text` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Physical Exam | `weight` | Weight (lbs) | `number` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Physical Exam | `bpRight` | BP Right Arm | `text` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Physical Exam | `bpLeft` | BP Left Arm | `text` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Physical Exam | `pulse` | Pulse (bpm) | `number` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Physical Exam | `vision` | Vision (corrected) | `text` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Physical Exam | `heartExam` | Heart Exam | `select` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Physical Exam | `lungsExam` | Lung Exam | `select` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Physical Exam | `musculoskeletal` | Musculoskeletal | `select` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Physical Exam | `mskNotes` | MSK Notes | `textarea` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Clearance Decision | `clearanceDecision` | Clearance Decision | `select` | Y |  |  |
| Pre-Participation Physical Evaluation (PPE) | Clearance Decision | `restrictions` | Restrictions (if any) | `textarea` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Clearance Decision | `followUpRequired` | Follow-up required before season starts | `checkbox` |  |  |  |
| Pre-Participation Physical Evaluation (PPE) | Clearance Decision | `equipmentRequired` | Required Equipment | `text` |  |  |  |

### Surgical History — `surgical_history_cf`

Screen: 1 page(s) · 1 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Surgical & Procedure History | Surgery / Procedure | `patientId` | Patient | `typeahead` | Y |  |  |
| Surgical & Procedure History | Surgery / Procedure | `procedureName` | Procedure / Surgery Name | `text` | Y |  |  |
| Surgical & Procedure History | Surgery / Procedure | `procedureDate` | Date | `date` | Y |  |  |
| Surgical & Procedure History | Surgery / Procedure | `surgeon` | Surgeon / Physician | `text` |  |  |  |
| Surgical & Procedure History | Surgery / Procedure | `facility` | Facility / Hospital | `text` |  |  |  |
| Surgical & Procedure History | Surgery / Procedure | `anesthesiaType` | Anesthesia Type | `select` |  |  |  |
| Surgical & Procedure History | Surgery / Procedure | `indication` | Indication / Reason | `textarea` |  |  |  |
| Surgical & Procedure History | Surgery / Procedure | `complications` | Complications | `select` |  |  |  |
| Surgical & Procedure History | Surgery / Procedure | `complicationDetails` | Complication Details | `textarea` |  |  |  |
| Surgical & Procedure History | Surgery / Procedure | `outcome` | Outcome | `select` |  |  |  |
| Surgical & Procedure History | Surgery / Procedure | `implants` | Implants or devices placed (pacemaker, joint replacement, stent, mesh, etc.) | `checkbox` |  |  |  |
| Surgical & Procedure History | Surgery / Procedure | `implantDetails` | Implant / Device Details | `textarea` |  |  |  |
| Surgical & Procedure History | Surgery / Procedure | `procedureNotes` | Additional Notes | `textarea` |  |  |  |

### Telehealth Session — `telehealth_session_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Session Details | Session Setup | `sessionType` | Session type | `select` |  |  |  |
| Session Details | Session Setup | `platform` | Platform | `select` |  |  |  |
| Session Details | Session Setup | `consentObtained` | Patient consent obtained | `checkbox` |  |  |  |
| Session Details | Session Setup | `connectionQuality` | Connection quality | `select` |  |  |  |
| Session Details | Session Setup | `sessionStartAt` | Session start | `text` |  |  |  |
| Session Details | Session Setup | `sessionEndAt` | Session end | `text` |  |  |  |
| Session Details | Session Setup | `durationMinutes` | Duration (min) | `number` |  |  |  |
| Session Details | Session Setup | `location` | Patient location | `text` | Y |  |  |
| Session Details | Clinical Notes | `sessionNotes` | Session notes / visit summary | `textarea` |  |  |  |
| Session Details | Clinical Notes | `technicalIssues` | Technical issues noted | `textarea` |  |  |  |

### Telehealth Visit Note — `telehealth_visit_note_cf`

Screen: 1 page(s) · 4 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Telehealth Visit Note | Patient & Platform | `patientId` | Patient | `typeahead` | Y |  |  |
| Telehealth Visit Note | Patient & Platform | `visitDate` | Visit Date | `date` | Y |  |  |
| Telehealth Visit Note | Patient & Platform | `provider` | Provider | `typeahead` | Y |  |  |
| Telehealth Visit Note | Patient & Platform | `platform` | Telehealth Platform | `select` | Y |  |  |
| Telehealth Visit Note | Patient & Platform | `visitType` | Visit Type | `select` | Y |  |  |
| Telehealth Visit Note | Patient & Platform | `telehealthConsent` | Telehealth informed consent obtained at visit start | `checkbox` |  |  |  |
| Telehealth Visit Note | Patient & Platform | `patientLocation` | Patient's Location During Visit | `text` | Y |  |  |
| Telehealth Visit Note | Reason for Visit / HPI | `chiefComplaint` | Chief Complaint | `text` | Y |  |  |
| Telehealth Visit Note | Reason for Visit / HPI | `hpi` | History of Present Illness | `textarea` | Y |  |  |
| Telehealth Visit Note | Self-Reported Vitals | `selfBP` | Blood Pressure (self-reported) | `text` |  |  |  |
| Telehealth Visit Note | Self-Reported Vitals | `selfWeight` | Weight (self-reported) | `text` |  |  |  |
| Telehealth Visit Note | Self-Reported Vitals | `selfHR` | Heart Rate (self-reported or wearable) | `number` |  |  |  |
| Telehealth Visit Note | Self-Reported Vitals | `selfO2` | SpO2 (pulse ox at home, if available) | `number` |  |  |  |
| Telehealth Visit Note | Assessment & Plan | `telehealthExamFindings` | Video Exam Observations | `textarea` |  |  |  |
| Telehealth Visit Note | Assessment & Plan | `assessment` | Assessment | `textarea` | Y |  |  |
| Telehealth Visit Note | Assessment & Plan | `plan` | Plan | `textarea` | Y |  |  |
| Telehealth Visit Note | Assessment & Plan | `visitTime` | Total Video Visit Time (minutes) | `number` | Y |  |  |
| Telehealth Visit Note | Assessment & Plan | `cptTelehealth` | E/M Code (Telehealth) | `select` |  |  |  |

### Telephone Encounters — `telephone_encounters_cf`

Screen: 2 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Call Details | Caller Information | `patientName` | Patient | `text` |  | patientName |  |
| Call Details | Caller Information | `callerName` | Caller Name | `text` |  | callerName |  |
| Call Details | Caller Information | `callerPhone` | Caller Phone | `text` |  | callerPhone |  |
| Call Details | Caller Information | `callDateTime` | Date/Time | `text` |  | callDateTime |  |
| Call Details | Caller Information | `callDurationMins` | Duration (min) | `text` |  | callDurationMins |  |
| Call Details | Caller Information | `encounterType` | Encounter Type | `text` |  | encounterType |  |
| Call Details | Call Content | `subject` | Subject | `text` |  | subject |  |
| Call Details | Call Content | `disposition` | Disposition | `text` |  | disposition |  |
| Call Details | Call Content | `priority` | Priority | `text` |  | priority |  |
| Call Details | Call Content | `status` | Status | `text` |  | status |  |
| Call Details | Call Content | `callbackRequested` | Callback Requested | `text` |  | callbackRequested |  |
| Call Details | Call Content | `callbackCompletedAt` | Callback Completed | `text` |  | callbackCompletedAt |  |
| Call Details | Call Content | `message` | Message | `textarea` |  | message |  |
| Call Details | Call Content | `notes` | Notes | `textarea` |  | notes |  |
| All Calls | Calls | `patientName` | Patient | `text` |  | patientName |  |
| All Calls | Calls | `subject` | Subject | `text` |  | subject |  |
| All Calls | Calls | `status` | Status | `text` |  | status |  |
| All Calls | Calls | `callDateTime` | Date/Time | `text` |  | callDateTime |  |

### Telephone Triage — `telephone_triage_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Telephone Triage / Nurse Advice | Call Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Telephone Triage / Nurse Advice | Call Details | `callDate` | Call Date | `date` | Y |  |  |
| Telephone Triage / Nurse Advice | Call Details | `callTime` | Call Time | `text` |  |  |  |
| Telephone Triage / Nurse Advice | Call Details | `takenBy` | Taken By (RN / MA / provider) | `typeahead` | Y |  |  |
| Telephone Triage / Nurse Advice | Call Details | `callerRelationship` | Caller | `select` |  |  |  |
| Telephone Triage / Nurse Advice | Presenting Complaint | `chiefComplaint` | Chief Complaint | `text` | Y |  |  |
| Telephone Triage / Nurse Advice | Presenting Complaint | `symptomOnset` | Onset | `text` |  |  |  |
| Telephone Triage / Nurse Advice | Presenting Complaint | `associatedSymptoms` | Associated Symptoms / Description | `textarea` | Y |  |  |
| Telephone Triage / Nurse Advice | Triage Decision | `acuityLevel` | Triage Acuity | `select` | Y |  |  |
| Telephone Triage / Nurse Advice | Triage Decision | `adviceGiven` | Advice / Instructions Given | `textarea` | Y |  |  |
| Telephone Triage / Nurse Advice | Triage Decision | `providerNotified` | Provider notified | `checkbox` |  |  |  |
| Telephone Triage / Nurse Advice | Triage Decision | `providerName` | Provider Notified | `text` |  |  |  |
| Telephone Triage / Nurse Advice | Triage Decision | `callback` | Callback / Follow-up Required | `select` |  |  |  |

### Templates — `template_library_cf`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB MISSING · tables `APPOINTMENTS`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `ELIGIBILITY_CHECKS`, `ENCOUNTERS`, `PAYERS_MASTER`, `PAYMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Note Template (ECW-CL-77) | Template Definition | `templateName` | Template Name | `text` | Y |  |  |
| Note Template (ECW-CL-77) | Template Definition | `specialty` | Specialty | `select` |  |  |  |
| Note Template (ECW-CL-77) | Template Definition | `visitType` | Visit Type | `text` |  |  |  |
| Note Template (ECW-CL-77) | Template Definition | `chiefComplaintAssociation` | CC Association | `text` |  |  |  |
| Note Template (ECW-CL-77) | Template Definition | `visibility` | Visibility | `select` |  |  |  |
| Note Template (ECW-CL-77) | Template Definition | `orderSetLinked` | Linked Order Set | `text` |  |  |  |
| Note Template (ECW-CL-77) | Section-Scoped Merge Content | `hpiSection` | HPI Section Template | `textarea` |  |  |  |
| Note Template (ECW-CL-77) | Section-Scoped Merge Content | `rosSection` | ROS Section Template | `textarea` |  |  |  |
| Note Template (ECW-CL-77) | Section-Scoped Merge Content | `examSection` | Physical Exam Template | `textarea` |  |  |  |
| Note Template (ECW-CL-77) | Section-Scoped Merge Content | `assessmentSection` | Assessment Template | `textarea` |  |  |  |
| Note Template (ECW-CL-77) | Section-Scoped Merge Content | `planSection` | Plan Template | `textarea` |  |  |  |
