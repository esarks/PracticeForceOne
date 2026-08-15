---
title: "PracticeForceOneCFTrackingFields2"
---

# CF Tracking — Field-Level Detail (part 2 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Clinical**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Clinical

### Behavioral Health — `behavioral_health_cf`

Screen: 1 page(s) · 3 section(s) · 20 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Behavioral Health Assessment | Assessment Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Behavioral Health Assessment | Assessment Details | `assessmentDate` | Assessment Date | `date` | Y |  |  |
| Behavioral Health Assessment | Assessment Details | `assessmentType` | Assessment Type | `select` |  |  |  |
| Behavioral Health Assessment | Assessment Details | `referralSource` | Referral Source | `select` |  |  |  |
| Behavioral Health Assessment | PHQ-9 Depression Screening | `phq1` | 1. Little interest or pleasure in doing things | `select` |  |  |  |
| Behavioral Health Assessment | PHQ-9 Depression Screening | `phq2` | 2. Feeling down, depressed, or hopeless | `select` |  |  |  |
| Behavioral Health Assessment | PHQ-9 Depression Screening | `phq3` | 3. Trouble falling or staying asleep | `select` |  |  |  |
| Behavioral Health Assessment | PHQ-9 Depression Screening | `phq4` | 4. Feeling tired or having little energy | `select` |  |  |  |
| Behavioral Health Assessment | PHQ-9 Depression Screening | `phq5` | 5. Poor appetite or overeating | `select` |  |  |  |
| Behavioral Health Assessment | PHQ-9 Depression Screening | `phq6` | 6. Feeling bad about yourself / failure | `select` |  |  |  |
| Behavioral Health Assessment | PHQ-9 Depression Screening | `phq7` | 7. Trouble concentrating | `select` |  |  |  |
| Behavioral Health Assessment | PHQ-9 Depression Screening | `phq8` | 8. Moving/speaking slowly or being fidgety | `select` |  |  |  |
| Behavioral Health Assessment | PHQ-9 Depression Screening | `phq9` | 9. Thoughts that you would be better off dead | `select` |  |  |  |
| Behavioral Health Assessment | PHQ-9 Depression Screening | `phqTotal` | PHQ-9 Total Score | `number` |  |  |  |
| Behavioral Health Assessment | PHQ-9 Depression Screening | `phqSeverity` | Depression Severity | `select` |  |  |  |
| Behavioral Health Assessment | Behavioral Health Plan | `suicidalIdeation` | Suicidal Ideation Assessment | `select` |  |  |  |
| Behavioral Health Assessment | Behavioral Health Plan | `safetyPlan` | Safety plan completed with patient | `checkbox` |  |  |  |
| Behavioral Health Assessment | Behavioral Health Plan | `crisisResources` | Crisis resources provided (988, local ER) | `checkbox` |  |  |  |
| Behavioral Health Assessment | Behavioral Health Plan | `bhReferral` | Referral Made | `select` |  |  |  |
| Behavioral Health Assessment | Behavioral Health Plan | `bhNotes` | Clinical Notes | `textarea` |  |  |  |

### Breast Oncology — `breast_oncology_cf`

Screen: 2 page(s) · 8 section(s) · 67 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Evaluation | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Evaluation | `providerName` | Oncologist | `text` |  |  |  |
| Evaluation | Evaluation | `treatmentIntent` | Treatment Intent | `select` |  |  |  |
| Evaluation | Tumor Characteristics | `histology` | Histology | `select` |  |  |  |
| Evaluation | Tumor Characteristics | `grade` | Histologic Grade (1-3) | `number` |  |  |  |
| Evaluation | Tumor Characteristics | `primarySide` | Primary Side | `select` |  |  |  |
| Evaluation | Tumor Characteristics | `tumorSizeCm` | Tumor Size (cm) | `number` |  |  |  |
| Evaluation | Tumor Characteristics | `multifocal` | Multifocal | `checkbox` |  |  |  |
| Evaluation | Tumor Characteristics | `multicentric` | Multicentric | `checkbox` |  |  |  |
| Evaluation | Tumor Characteristics | `inflammatory` | Inflammatory | `checkbox` |  |  |  |
| Evaluation | Tumor Characteristics | `dcisComponent` | DCIS Component | `checkbox` |  |  |  |
| Evaluation | Tumor Characteristics | `nippleInvolvement` | Nipple Involvement | `checkbox` |  |  |  |
| Evaluation | Tumor Characteristics | `chestWallInvolvement` | Chest Wall Involvement | `checkbox` |  |  |  |
| Evaluation | Biomarkers | `erStatus` | ER Status | `select` |  |  |  |
| Evaluation | Biomarkers | `erPercent` | ER (%) | `number` |  |  |  |
| Evaluation | Biomarkers | `prStatus` | PR Status | `select` |  |  |  |
| Evaluation | Biomarkers | `prPercent` | PR (%) | `number` |  |  |  |
| Evaluation | Biomarkers | `her2Status` | HER2 Status | `select` |  |  |  |
| Evaluation | Biomarkers | `her2Ihc` | HER2 IHC (0-3) | `number` |  |  |  |
| Evaluation | Biomarkers | `her2Low` | HER2-Low (1+ or 2+/FISH-) | `checkbox` |  |  |  |
| Evaluation | Biomarkers | `ki67Percent` | Ki-67 (%) | `number` |  |  |  |
| Evaluation | Biomarkers | `tnbc` | TNBC | `checkbox` |  |  |  |
| Evaluation | Biomarkers | `pdl1Sp142` | PD-L1 SP142 (IC%) | `number` |  |  |  |
| Evaluation | Biomarkers | `pdl1Sp263` | PD-L1 SP263 (TC%) | `number` |  |  |  |
| Evaluation | Biomarkers | `pdl122c3` | PD-L1 22C3 (CPS) | `number` |  |  |  |
| Evaluation | Genomic Tests | `oncotypeDxDone` | OncotypeDX Done | `checkbox` |  |  |  |
| Evaluation | Genomic Tests | `oncotypeRecurrenceScore` | OncotypeDX RS | `number` |  |  |  |
| Evaluation | Genomic Tests | `oncotypeRiskCategory` | OncotypeDX Risk | `select` |  |  |  |
| Evaluation | Genomic Tests | `pam50Done` | PAM50/Prosigna Done | `checkbox` |  |  |  |
| Evaluation | Genomic Tests | `pam50Subtype` | PAM50 Subtype | `select` |  |  |  |
| Evaluation | Genomic Tests | `mammaprintDone` | Mammaprint Done | `checkbox` |  |  |  |
| Evaluation | Genomic Tests | `mammaprintResult` | Mammaprint Result | `select` |  |  |  |
| Evaluation | AJCC 8th Staging | `ajccTStage` | pT Stage | `text` |  |  |  |
| Evaluation | AJCC 8th Staging | `ajccNStage` | pN Stage | `text` |  |  |  |
| Evaluation | AJCC 8th Staging | `ajccMStage` | M Stage | `text` |  |  |  |
| Evaluation | AJCC 8th Staging | `ajccOverallStage` | Overall Stage | `text` |  |  |  |
| Evaluation | AJCC 8th Staging | `pathologicCompleteResponse` | pCR | `checkbox` |  |  |  |
| Evaluation | AJCC 8th Staging | `slnbNodesRemoved` | SLNB Nodes Removed | `number` |  |  |  |
| Evaluation | AJCC 8th Staging | `slnbNodesPositive` | SLNB Nodes Positive | `number` |  |  |  |
| Evaluation | AJCC 8th Staging | `distantMetastases` | Distant Metastases | `checkbox` |  |  |  |
| Evaluation | AJCC 8th Staging | `boneMetastases` | Bone Mets | `checkbox` |  |  |  |
| Evaluation | AJCC 8th Staging | `liverMetastases` | Liver Mets | `checkbox` |  |  |  |
| Evaluation | AJCC 8th Staging | `lungMetastases` | Lung Mets | `checkbox` |  |  |  |
| Evaluation | AJCC 8th Staging | `brainMetastases` | Brain Mets | `checkbox` |  |  |  |
| Evaluation | Germline Testing | `germlineTestingDone` | Germline Testing Done | `checkbox` |  |  |  |
| Evaluation | Germline Testing | `brca1Status` | BRCA1 | `select` |  |  |  |
| Evaluation | Germline Testing | `brca2Status` | BRCA2 | `select` |  |  |  |
| Evaluation | Germline Testing | `palb2Mutation` | PALB2 | `checkbox` |  |  |  |
| Evaluation | Germline Testing | `chek2Mutation` | CHEK2 | `checkbox` |  |  |  |
| Evaluation | Germline Testing | `atmMutation` | ATM | `checkbox` |  |  |  |
| Evaluation | Somatic Molecular | `pik3caMutation` | PIK3CA Mutation | `checkbox` |  |  |  |
| Evaluation | Somatic Molecular | `esr1Mutation` | ESR1 Mutation | `checkbox` |  |  |  |
| Evaluation | Somatic Molecular | `esr1Variant` | ESR1 Variant | `text` |  |  |  |
| Evaluation | Somatic Molecular | `msiStatus` | MSI Status | `select` |  |  |  |
| Evaluation | Somatic Molecular | `tmb` | TMB (mut/Mb) | `number` |  |  |  |
| Evaluation | Somatic Molecular | `tmbHigh` | TMB-High (≥10) | `checkbox` |  |  |  |
| Follow-Up Visits | Oncology Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Follow-Up Visits | Oncology Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Follow-Up Visits | Oncology Visit | `visitType` | Visit Type | `select` |  |  |  |
| Follow-Up Visits | Oncology Visit | `treatmentResponse` | Treatment Response | `select` |  |  |  |
| Follow-Up Visits | Oncology Visit | `ca153` | CA 15-3 (U/mL) | `number` |  |  |  |
| Follow-Up Visits | Oncology Visit | `lvefPct` | LVEF (%) | `number` |  |  |  |
| Follow-Up Visits | Oncology Visit | `endocrineAgentCurrent` | Current Endocrine Agent | `text` |  |  |  |
| Follow-Up Visits | Oncology Visit | `cdk46AgentCurrent` | Current CDK4/6 Inhibitor | `text` |  |  |  |
| Follow-Up Visits | Oncology Visit | `recurrenceSuspected` | Recurrence Suspected | `checkbox` |  |  |  |
| Follow-Up Visits | Oncology Visit | `notes` | Notes / Plan | `textarea` |  |  |  |

### CCM Enrollments — `ccm_enrollment_cf`

Screen: 1 page(s) · 1 section(s) · 11 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CCM Enrollment | Enrollment Info | `status` | Status | `select` |  |  |  |
| CCM Enrollment | Enrollment Info | `enrollmentDate` | Enrollment Date | `date` |  |  |  |
| CCM Enrollment | Enrollment Info | `riskLevel` | Risk Level | `select` |  |  |  |
| CCM Enrollment | Enrollment Info | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| CCM Enrollment | Enrollment Info | `careManager` | Care Manager | `text` |  |  |  |
| CCM Enrollment | Enrollment Info | `billingProvider` | Billing Provider | `text` |  |  |  |
| CCM Enrollment | Enrollment Info | `consentObtained` | Consent Obtained | `checkbox` |  |  |  |
| CCM Enrollment | Enrollment Info | `consentDate` | Consent Date | `date` |  |  |  |
| CCM Enrollment | Enrollment Info | `nextReviewDate` | Next Review Date | `date` |  |  |  |
| CCM Enrollment | Enrollment Info | `careGoals` | Care Goals | `textarea` |  |  |  |
| CCM Enrollment | Enrollment Info | `carePlan` | Care Plan Summary | `textarea` |  |  |  |

### CCM Management — `ccm_monthly_note_cf`

Screen: 1 page(s) · 1 section(s) · 12 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CCM Enrollment | Enrollment | `enrollmentDate` | Enrollment Date | `date` |  |  |  |
| CCM Enrollment | Enrollment | `status` | Status | `select` |  |  |  |
| CCM Enrollment | Enrollment | `riskLevel` | Risk Level | `select` |  |  |  |
| CCM Enrollment | Enrollment | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| CCM Enrollment | Enrollment | `careManager` | Care Manager | `text` |  |  |  |
| CCM Enrollment | Enrollment | `billingProvider` | Billing Provider | `text` |  |  |  |
| CCM Enrollment | Enrollment | `consentObtained` | Consent Obtained | `select` |  |  |  |
| CCM Enrollment | Enrollment | `consentDate` | Consent Date | `date` |  |  |  |
| CCM Enrollment | Enrollment | `nextReviewDate` | Next Review | `date` |  |  |  |
| CCM Enrollment | Enrollment | `chronicConditions` | Chronic Conditions | `textarea` |  |  |  |
| CCM Enrollment | Enrollment | `careGoals` | Care Goals | `textarea` |  |  |  |
| CCM Enrollment | Enrollment | `carePlan` | Care Plan | `textarea` |  |  |  |

### CDM Programs — `chronic_disease_management_cf`

Screen: 2 page(s) · 4 section(s) · 24 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Enrollment | Enrollment | `patientId` | Patient | `lookup` | Y |  |  |
| Enrollment | Enrollment | `programId` | Program ID | `text` | Y |  |  |
| Enrollment | Enrollment | `enrollmentDate` | Enrollment Date | `date` |  |  |  |
| Enrollment | Enrollment | `careManager` | Care Manager | `text` |  |  |  |
| Enrollment | Enrollment | `riskLevel` | Risk Level | `select` |  |  |  |
| Enrollment | Enrollment | `status` | Status | `select` |  |  |  |
| Enrollment | Current Clinical Metrics | `controlStatus` | Control Status | `select` |  |  |  |
| Enrollment | Current Clinical Metrics | `lastA1c` | Last A1c (%) | `number` |  |  |  |
| Enrollment | Current Clinical Metrics | `lastA1cDate` | A1c Date | `date` |  |  |  |
| Enrollment | Current Clinical Metrics | `lastSbp` | Last SBP (mmHg) | `number` |  |  |  |
| Enrollment | Current Clinical Metrics | `lastDbp` | Last DBP (mmHg) | `number` |  |  |  |
| Enrollment | Current Clinical Metrics | `lastBpDate` | BP Date | `date` |  |  |  |
| Enrollment | Current Clinical Metrics | `lastLdl` | Last LDL (mg/dL) | `number` |  |  |  |
| Enrollment | Current Clinical Metrics | `lastWeightKg` | Last Weight (kg) | `number` |  |  |  |
| Enrollment | Current Clinical Metrics | `lastBmi` | Last BMI | `number` |  |  |  |
| Enrollment | Care Schedule | `nextVisitDate` | Next Visit Date | `date` |  |  |  |
| Enrollment | Care Schedule | `nextLabDate` | Next Lab Date | `date` |  |  |  |
| Enrollment | Care Schedule | `enrollmentNotes` | Notes | `textarea` |  |  |  |
| Metrics History | Metric Reading | `metricDate` | Date | `date` |  |  |  |
| Metrics History | Metric Reading | `metricType` | Metric Type | `select` |  |  |  |
| Metrics History | Metric Reading | `metricValue` | Value | `number` | Y |  |  |
| Metrics History | Metric Reading | `metricUnit` | Unit | `text` |  |  |  |
| Metrics History | Metric Reading | `controlStatus` | Control Status at Reading | `select` |  |  |  |
| Metrics History | Metric Reading | `notes` | Notes | `text` |  |  |  |

### CDS Alert — `cds_alert_cf`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clinical Decision Support Alert | Alert Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Clinical Decision Support Alert | Alert Details | `encounterId` | Encounter ID | `text` |  |  |  |
| Clinical Decision Support Alert | Alert Details | `alertDate` | Alert Date | `date` | Y |  |  |
| Clinical Decision Support Alert | Alert Details | `alertType` | Alert Type | `select` | Y |  |  |
| Clinical Decision Support Alert | Alert Details | `severity` | Severity | `select` | Y |  |  |
| Clinical Decision Support Alert | Alert Details | `alertContent` | Alert Description | `textarea` | Y |  |  |
| Clinical Decision Support Alert | Provider Response | `acknowledgedBy` | Alert Acknowledged By | `typeahead` | Y |  |  |
| Clinical Decision Support Alert | Provider Response | `acknowledgedDate` | Acknowledged Date | `date` | Y |  |  |
| Clinical Decision Support Alert | Provider Response | `providerResponse` | Provider Action Taken | `select` | Y |  |  |
| Clinical Decision Support Alert | Provider Response | `overrideRationale` | Override / Clinical Rationale | `textarea` |  |  |  |
| Clinical Decision Support Alert | Provider Response | `alertTired` | Alert fatigue concern — provider has seen this alert >3 times this week | `checkbox` |  |  |  |

### COPD Exacerbation — `copd_exacerbation_cf`

Screen: 1 page(s) · 4 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| COPD Exacerbation Assessment | Patient & Baseline | `patientId` | Patient | `typeahead` | Y |  |  |
| COPD Exacerbation Assessment | Patient & Baseline | `visitDate` | Visit Date | `date` | Y |  |  |
| COPD Exacerbation Assessment | Patient & Baseline | `provider` | Provider | `typeahead` | Y |  |  |
| COPD Exacerbation Assessment | Patient & Baseline | `goldStage` | GOLD Stage (Baseline) | `select` | Y |  |  |
| COPD Exacerbation Assessment | Patient & Baseline | `baselineSpO2` | Baseline O2 Sat (%) | `number` |  |  |  |
| COPD Exacerbation Assessment | Patient & Baseline | `exacerbationFreq` | Exacerbation Frequency (prior 12 months) | `select` |  |  |  |
| COPD Exacerbation Assessment | Acute Presentation | `symptonOnset` | Symptom Onset | `text` |  |  |  |
| COPD Exacerbation Assessment | Acute Presentation | `dyspnea` | Dyspnea Severity | `select` | Y |  |  |
| COPD Exacerbation Assessment | Acute Presentation | `sputumChange` | Sputum Change | `select` |  |  |  |
| COPD Exacerbation Assessment | Acute Presentation | `trigger` | Likely Trigger | `select` |  |  |  |
| COPD Exacerbation Assessment | Vitals & Exam | `spO2Today` | O2 Sat Today (%) | `number` | Y |  |  |
| COPD Exacerbation Assessment | Vitals & Exam | `respiratoryRate` | Respiratory Rate | `number` |  |  |  |
| COPD Exacerbation Assessment | Vitals & Exam | `peakFlow` | Peak Flow (L/min) | `number` |  |  |  |
| COPD Exacerbation Assessment | Vitals & Exam | `auscultation` | Lung Auscultation | `select` |  |  |  |
| COPD Exacerbation Assessment | Vitals & Exam | `accessoryMuscles` | Accessory muscle use / intercostal retractions | `checkbox` |  |  |  |
| COPD Exacerbation Assessment | Vitals & Exam | `pursedLip` | Pursed lip breathing | `checkbox` |  |  |  |
| COPD Exacerbation Assessment | Treatment Plan | `antibiotics` | Antibiotics | `select` | Y |  |  |
| COPD Exacerbation Assessment | Treatment Plan | `steroids` | Systemic Steroids | `select` | Y |  |  |
| COPD Exacerbation Assessment | Treatment Plan | `inhalerChange` | Inhaler Adjustments | `textarea` |  |  |  |
| COPD Exacerbation Assessment | Treatment Plan | `dispositionCOPD` | Disposition | `select` | Y |  |  |
| COPD Exacerbation Assessment | Treatment Plan | `followUpCOPD` | Follow-up | `select` |  |  |  |

### CS Agreement — `controlled_substance_agreement_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Controlled Substance Treatment Agreement & Monitoring | Patient & Agreement | `patientId` | Patient | `typeahead` | Y |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Patient & Agreement | `encounterId` | Encounter ID | `text` |  |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Patient & Agreement | `agreementDate` | Agreement Date | `date` | Y |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Patient & Agreement | `prescribingProvider` | Prescribing Provider | `typeahead` | Y |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Patient & Agreement | `controlledSubstances` | Controlled Substances Prescribed | `textarea` | Y |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Compliance Monitoring This Visit | `pdmpReviewed` | PDMP reviewed today (NY I-STOP) | `checkbox` |  |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Compliance Monitoring This Visit | `pdmpConcerns` | PDMP Concerns Noted | `textarea` |  |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Compliance Monitoring This Visit | `udsCollected` | Urine drug screen collected today | `checkbox` |  |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Compliance Monitoring This Visit | `udsResult` | UDS Result | `textarea` |  |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Compliance Monitoring This Visit | `pillCount` | Pill count performed | `checkbox` |  |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Compliance Monitoring This Visit | `pillCountResult` | Pill Count Result | `text` |  |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Compliance Monitoring This Visit | `agreementViolation` | Agreement violation noted | `checkbox` |  |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Compliance Monitoring This Visit | `violationDetails` | Violation Details & Plan | `textarea` |  |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Agreement Terms (if new/renewal) | `newAgreement` | New controlled substance agreement signed this visit | `checkbox` |  |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Agreement Terms (if new/renewal) | `agreementTerms` | Patient Agreement Terms Confirmed | `textarea` |  |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Agreement Terms (if new/renewal) | `riskAssessment` | Risk Assessment (ORT Score) | `select` |  |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Agreement Terms (if new/renewal) | `naloxonePrescribed` | Naloxone (Narcan) prescribed / on file | `checkbox` |  |  |  |
| Controlled Substance Treatment Agreement & Monitoring | Agreement Terms (if new/renewal) | `nextMonitoring` | Next Monitoring Visit | `select` |  |  |  |

### Cardiac EP — `cardiac_ep_cf`

Screen: 3 page(s) · 6 section(s) · 79 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| EP Study | EP Study | `patientId` | Patient | `lookup` | Y |  |  |
| EP Study | EP Study | `studyDate` | Study Date | `date` |  |  |  |
| EP Study | EP Study | `sheathCount` | Sheath Count | `number` |  |  |  |
| EP Study | EP Study | `encounterId` | Encounter ID | `text` |  |  |  |
| EP Study | Baseline Intervals | `baselineHr` | HR (bpm) | `number` |  |  |  |
| EP Study | Baseline Intervals | `prIntervalMs` | PR (ms) | `number` |  |  |  |
| EP Study | Baseline Intervals | `qrsDurationMs` | QRS (ms) | `number` |  |  |  |
| EP Study | Baseline Intervals | `qtMs` | QT (ms) | `number` |  |  |  |
| EP Study | Baseline Intervals | `qtcMs` | QTc (ms) | `number` |  |  |  |
| EP Study | Baseline Intervals | `ahIntervalMs` | AH (ms) | `number` |  |  |  |
| EP Study | Baseline Intervals | `hvIntervalMs` | HV (ms) | `number` |  |  |  |
| EP Study | Baseline Intervals | `snrtMs` | SNRT (ms) | `number` |  |  |  |
| EP Study | Baseline Intervals | `csnrtMs` | cSNRT (ms) | `number` |  |  |  |
| EP Study | Baseline Intervals | `avnrpMs` | AVNRP (ms) | `number` |  |  |  |
| EP Study | Baseline Intervals | `aerp600Ms` | AERP @600 (ms) | `number` |  |  |  |
| EP Study | Baseline Intervals | `aerp500Ms` | AERP @500 (ms) | `number` |  |  |  |
| EP Study | Induction & Arrhythmia | `inductionProtocol` | Induction Protocol | `text` |  |  |  |
| EP Study | Induction & Arrhythmia | `arrhythmiaInduced` | Arrhythmia Induced | `checkbox` |  |  |  |
| EP Study | Induction & Arrhythmia | `inducedArrhythmiaType` | Induced Arrhythmia Type | `text` |  |  |  |
| EP Study | Induction & Arrhythmia | `vtCycleLengthMs` | VT Cycle Length (ms) | `number` |  |  |  |
| EP Study | Induction & Arrhythmia | `vtMorphology` | VT Morphology (LBBB/RBBB/indeterminate) | `text` |  |  |  |
| EP Study | Induction & Arrhythmia | `vtAxis` | VT Axis (e.g. superior, inferior) | `text` |  |  |  |
| EP Study | Induction & Arrhythmia | `isoproterenolDoseMcg` | Isoproterenol Dose (mcg/min) | `number` |  |  |  |
| EP Study | Induction & Arrhythmia | `adenosineDoseMg` | Adenosine Dose (mg) | `number` |  |  |  |
| EP Study | Induction & Arrhythmia | `mappingSystem` | Mapping System | `text` |  |  |  |
| EP Study | Result | `diagnostic` | Diagnostic Study | `checkbox` |  |  |  |
| EP Study | Result | `epDiagnosis` | EP Diagnosis | `text` |  |  |  |
| EP Study | Result | `recommendedTherapy` | Recommended Therapy | `select` |  |  |  |
| EP Study | Result | `fluoroscopyTimeMin` | Fluoroscopy Time (min) | `number` |  |  |  |
| EP Study | Result | `radiationDoseMgy` | Radiation Dose (mGy) | `number` |  |  |  |
| EP Study | Result | `contrastVolumeMl` | Contrast (mL) | `number` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `patientId` | Patient | `lookup` | Y |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `procedureDate` | Procedure Date | `date` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `indication` | Indication | `select` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `afType` | AF Type | `select` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `energyType` | Energy Type | `select` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `irrigated` | Irrigated Catheter | `checkbox` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `transseptalPunctures` | Transseptal Punctures | `number` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `iceGuidance` | ICE Guidance | `checkbox` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `rfPowerW` | RF Power (W) | `number` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `cryoTempC` | Cryo Temp (°C) | `number` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `rspvIsolated` | RSPV Isolated | `checkbox` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `ripvIsolated` | RIPV Isolated | `checkbox` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `lspvIsolated` | LSPV Isolated | `checkbox` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `lipvIsolated` | LIPV Isolated | `checkbox` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `entranceBlockBilateral` | Entrance Block Bilateral | `checkbox` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `exitBlockBilateral` | Exit Block Bilateral | `checkbox` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `adenosineDormantTested` | Adenosine Dormant Tested | `checkbox` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `ctiLine` | CTI Line | `checkbox` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `ctiBidirectionalBlock` | CTI Bidirectional Block | `checkbox` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `slowPathwayAblated` | Slow Pathway Ablated | `checkbox` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `accessoryPathwayLocation` | Accessory Pathway Location | `text` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `acuteSuccess` | Acute Success | `checkbox` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `fluoroscopyTimeMin` | Fluoroscopy (min) | `number` |  |  |  |
| Catheter Ablations | Catheter Ablation Procedure | `procedureTimeMin` | Procedure Time (min) | `number` |  |  |  |
| Device Implants | Cardiac Device Implantation | `patientId` | Patient | `lookup` | Y |  |  |
| Device Implants | Cardiac Device Implantation | `implantDate` | Implant Date | `date` |  |  |  |
| Device Implants | Cardiac Device Implantation | `deviceType` | Device Type | `select` |  |  |  |
| Device Implants | Cardiac Device Implantation | `deviceSubtype` | Pacing Mode (VVI/DDD etc.) | `text` |  |  |  |
| Device Implants | Cardiac Device Implantation | `indication` | Indication | `text` |  |  |  |
| Device Implants | Cardiac Device Implantation | `manufacturer` | Manufacturer | `text` |  |  |  |
| Device Implants | Cardiac Device Implantation | `deviceModel` | Device Model | `text` |  |  |  |
| Device Implants | Cardiac Device Implantation | `deviceSerial` | Device Serial # | `text` |  |  |  |
| Device Implants | Cardiac Device Implantation | `implantSite` | Implant Site | `select` |  |  |  |
| Device Implants | Cardiac Device Implantation | `rvImpedanceOhm` | RV Impedance (Ω) | `number` |  |  |  |
| Device Implants | Cardiac Device Implantation | `rvThresholdV` | RV Threshold (V) | `number` |  |  |  |
| Device Implants | Cardiac Device Implantation | `rvSensingMv` | RV Sensing (mV) | `number` |  |  |  |
| Device Implants | Cardiac Device Implantation | `raImpedanceOhm` | RA Impedance (Ω) | `number` |  |  |  |
| Device Implants | Cardiac Device Implantation | `raThresholdV` | RA Threshold (V) | `number` |  |  |  |
| Device Implants | Cardiac Device Implantation | `raSensingMv` | RA Sensing (mV) | `number` |  |  |  |
| Device Implants | Cardiac Device Implantation | `lvImpedanceOhm` | LV Impedance (Ω) | `number` |  |  |  |
| Device Implants | Cardiac Device Implantation | `lvThresholdV` | LV Threshold (V) | `number` |  |  |  |
| Device Implants | Cardiac Device Implantation | `lowerRateBpm` | Lower Rate (bpm) | `number` |  |  |  |
| Device Implants | Cardiac Device Implantation | `upperRateBpm` | Upper Rate (bpm) | `number` |  |  |  |
| Device Implants | Cardiac Device Implantation | `avDelayMs` | AV Delay (ms) | `number` |  |  |  |
| Device Implants | Cardiac Device Implantation | `vtDetectionBpm` | VT Detection Rate (bpm) | `number` |  |  |  |
| Device Implants | Cardiac Device Implantation | `vfDetectionBpm` | VF Detection Rate (bpm) | `number` |  |  |  |
| Device Implants | Cardiac Device Implantation | `atpProgrammed` | ATP Programmed | `checkbox` |  |  |  |
| Device Implants | Cardiac Device Implantation | `antibioticPocketWash` | Antibiotic Pocket Wash | `checkbox` |  |  |  |

### Cardiac Rehab — `cardiac_rehab_cf`

Screen: 2 page(s) · 3 section(s) · 51 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Enrollment | Enrollment | `patientId` | Patient | `lookup` | Y |  |  |
| Enrollment | Enrollment | `enrollmentDate` | Enrollment Date | `date` |  |  |  |
| Enrollment | Enrollment | `referringProvider` | Referring Provider | `text` |  |  |  |
| Enrollment | Enrollment | `referralDate` | Referral Date | `date` |  |  |  |
| Enrollment | Enrollment | `qualifyingDiagnosis` | Qualifying Diagnosis | `select` |  |  |  |
| Enrollment | Enrollment | `qualifyingEventDate` | Qualifying Event Date | `date` |  |  |  |
| Enrollment | Enrollment | `phase` | Phase | `select` |  |  |  |
| Enrollment | Enrollment | `programSetting` | Program Setting | `text` |  |  |  |
| Enrollment | Enrollment | `sessionsAuthorized` | Sessions Authorized | `number` |  |  |  |
| Enrollment | Enrollment | `sessionsPerWeek` | Sessions/Week | `number` |  |  |  |
| Enrollment | Enrollment | `sessionDurationMin` | Session Duration (min) | `number` |  |  |  |
| Enrollment | Enrollment | `insuranceAuthorized` | Insurance Authorized | `checkbox` |  |  |  |
| Enrollment | Enrollment | `authorizationNumber` | Auth Number | `text` |  |  |  |
| Enrollment | Enrollment | `programStartDate` | Program Start | `date` |  |  |  |
| Enrollment | Enrollment | `programEndDatePlanned` | Planned End Date | `date` |  |  |  |
| Enrollment | Initial Assessment | `initialAssessmentDate` | Assessment Date | `date` |  |  |  |
| Enrollment | Initial Assessment | `heightIn` | Height (in) | `number` |  |  |  |
| Enrollment | Initial Assessment | `weightLbs` | Weight (lbs) | `number` |  |  |  |
| Enrollment | Initial Assessment | `bmi` | BMI | `number` |  |  |  |
| Enrollment | Initial Assessment | `restingBpSystolic` | Resting BP Systolic | `number` |  |  |  |
| Enrollment | Initial Assessment | `restingBpDiastolic` | Resting BP Diastolic | `number` |  |  |  |
| Enrollment | Initial Assessment | `restingHr` | Resting HR | `number` |  |  |  |
| Enrollment | Initial Assessment | `restingSpo2` | Resting SpO2 (%) | `number` |  |  |  |
| Enrollment | Initial Assessment | `lvefPct` | LVEF (%) | `number` |  |  |  |
| Enrollment | Initial Assessment | `lvefMethod` | LVEF Method | `select` |  |  |  |
| Enrollment | Initial Assessment | `vo2MaxMlKgMin` | VO2 Max (mL/kg/min) | `number` |  |  |  |
| Enrollment | Initial Assessment | `sixMinWalkM` | 6-Min Walk Distance (m) | `number` |  |  |  |
| Enrollment | Initial Assessment | `metsFunctionalCapacity` | METs | `number` |  |  |  |
| Enrollment | Initial Assessment | `riskStratification` | Risk Stratification | `select` |  |  |  |
| Exercise Sessions | Exercise Session | `patientId` | Patient | `lookup` | Y |  |  |
| Exercise Sessions | Exercise Session | `sessionDate` | Session Date | `date` |  |  |  |
| Exercise Sessions | Exercise Session | `sessionNumber` | Session # | `number` |  |  |  |
| Exercise Sessions | Exercise Session | `preHr` | Pre HR | `number` |  |  |  |
| Exercise Sessions | Exercise Session | `preBpSystolic` | Pre BP Systolic | `number` |  |  |  |
| Exercise Sessions | Exercise Session | `preBpDiastolic` | Pre BP Diastolic | `number` |  |  |  |
| Exercise Sessions | Exercise Session | `preSpo2` | Pre SpO2 (%) | `number` |  |  |  |
| Exercise Sessions | Exercise Session | `peakHrAchieved` | Peak HR Achieved | `number` |  |  |  |
| Exercise Sessions | Exercise Session | `targetHrMin` | Target HR Min | `number` |  |  |  |
| Exercise Sessions | Exercise Session | `targetHrMax` | Target HR Max | `number` |  |  |  |
| Exercise Sessions | Exercise Session | `targetHrAchieved` | Target HR Achieved | `checkbox` |  |  |  |
| Exercise Sessions | Exercise Session | `postRpe` | RPE (Borg 6-20) | `number` |  |  |  |
| Exercise Sessions | Exercise Session | `exerciseDurationMin` | Total Exercise (min) | `number` |  |  |  |
| Exercise Sessions | Exercise Session | `postHr` | Post HR | `number` |  |  |  |
| Exercise Sessions | Exercise Session | `postBpSystolic` | Post BP Systolic | `number` |  |  |  |
| Exercise Sessions | Exercise Session | `anginaSymptoms` | Angina Symptoms | `checkbox` |  |  |  |
| Exercise Sessions | Exercise Session | `shortnessOfBreath` | Shortness of Breath | `checkbox` |  |  |  |
| Exercise Sessions | Exercise Session | `arrhythmiaDetected` | Arrhythmia Detected | `checkbox` |  |  |  |
| Exercise Sessions | Exercise Session | `sessionModified` | Session Modified | `checkbox` |  |  |  |
| Exercise Sessions | Exercise Session | `modificationReason` | Modification Reason | `text` |  |  |  |
| Exercise Sessions | Exercise Session | `nitroglycerin` | Nitroglycerin Used | `checkbox` |  |  |  |
| Exercise Sessions | Exercise Session | `sessionNotes` | Notes | `textarea` |  |  |  |

### Care Coordination — `care_coordination_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Care Coordination / Interdisciplinary Team Meeting | Meeting & Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Care Coordination / Interdisciplinary Team Meeting | Meeting & Patient | `meetingDate` | Meeting Date | `date` | Y |  |  |
| Care Coordination / Interdisciplinary Team Meeting | Meeting & Patient | `coordinationType` | Coordination Type | `select` | Y |  |  |
| Care Coordination / Interdisciplinary Team Meeting | Meeting & Patient | `teamMembersPresent` | Team Members Present | `textarea` |  |  |  |
| Care Coordination / Interdisciplinary Team Meeting | Meeting & Patient | `totalMinutes` | Total Time Spent (minutes) | `number` |  |  |  |
| Care Coordination / Interdisciplinary Team Meeting | Patient Status Summary | `activeProblems` | Active Problems Discussed | `textarea` | Y |  |  |
| Care Coordination / Interdisciplinary Team Meeting | Patient Status Summary | `recentUtilization` | Recent Utilization | `textarea` |  |  |  |
| Care Coordination / Interdisciplinary Team Meeting | Patient Status Summary | `currentMeds` | Key Medications / Adherence Issues | `textarea` |  |  |  |
| Care Coordination / Interdisciplinary Team Meeting | Coordination Plan | `actionItems` | Action Items & Owner | `textarea` | Y |  |  |
| Care Coordination / Interdisciplinary Team Meeting | Coordination Plan | `patientGoals` | Patient-Centered Goals | `textarea` |  |  |  |
| Care Coordination / Interdisciplinary Team Meeting | Coordination Plan | `barriers` | Identified Barriers | `textarea` |  |  |  |
| Care Coordination / Interdisciplinary Team Meeting | Coordination Plan | `nextMeeting` | Next Team Check-In | `select` |  |  |  |
| Care Coordination / Interdisciplinary Team Meeting | Coordination Plan | `ccmBilling` | CCM/PCM Billing (if applicable) | `select` |  |  |  |

### Care Gaps — `care_gaps_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `ENCOUNTERS`, `PATIENTS`, `PROVIDERS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Care Gaps | Preventive Care Status | `lastWcvLabel` | Last Well-Child Visit | `text` |  | lastWcvLabel |  |
| Patient Care Gaps | Preventive Care Status | `lastAvLabel` | Last Annual Visit | `text` |  | lastAvLabel |  |

### Care Management — `care_management_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Care Management Program | Program Enrollment | `patientId` | Patient | `typeahead` | Y |  |  |
| Care Management Program | Program Enrollment | `programType` | Program Type | `select` | Y |  |  |
| Care Management Program | Program Enrollment | `enrollmentDate` | Enrollment Date | `date` | Y |  |  |
| Care Management Program | Program Enrollment | `careManager` | Care Manager | `typeahead` |  |  |  |
| Care Management Program | Program Enrollment | `consentObtained` | Patient consent for care management obtained | `checkbox` | Y |  |  |
| Care Management Program | Program Enrollment | `primaryDiagnoses` | Primary Qualifying Diagnoses | `textarea` | Y |  |  |
| Care Management Program | Care Plan | `carePlanDate` | Care Plan Date | `date` |  |  |  |
| Care Management Program | Care Plan | `carePlanGoals` | Care Plan Goals | `textarea` |  |  |  |
| Care Management Program | Care Plan | `careInterventions` | Planned Interventions | `textarea` |  |  |  |
| Care Management Program | Care Plan | `communityResources` | Community Resources / Social Support | `textarea` |  |  |  |
| Care Management Program | Care Plan | `barrierIdentified` | Barriers to Care | `textarea` |  |  |  |
| Care Management Program | Monthly Contact Log | `contactDate` | Contact Date | `date` |  |  |  |
| Care Management Program | Monthly Contact Log | `contactMethod` | Contact Method | `select` |  |  |  |
| Care Management Program | Monthly Contact Log | `contactDurationMin` | Duration (minutes) | `number` |  |  |  |
| Care Management Program | Monthly Contact Log | `totalMinutesThisMonth` | Total Minutes This Month | `number` |  |  |  |
| Care Management Program | Monthly Contact Log | `contactTopics` | Topics Addressed | `textarea` |  |  |  |
| Care Management Program | Monthly Contact Log | `patientStatus` | Patient Status | `select` |  |  |  |
| Care Management Program | Monthly Contact Log | `contactNotes` | Contact Notes | `textarea` |  |  |  |

### Care Plan — `care_plan_cf`

Screen: 1 page(s) · 4 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Care Plan | Patient & Plan Scope | `patientId` | Patient | `typeahead` | Y |  |  |
| Chronic Care Plan | Patient & Plan Scope | `planCreatedDate` | Plan Created Date | `date` | Y |  |  |
| Chronic Care Plan | Patient & Plan Scope | `planReviewDate` | Next Review Date | `date` | Y |  |  |
| Chronic Care Plan | Patient & Plan Scope | `careManager` | Care Manager / Provider | `typeahead` | Y |  |  |
| Chronic Care Plan | Patient & Plan Scope | `programType` | Program Type | `select` | Y |  |  |
| Chronic Care Plan | Conditions & Goals | `chronicConditions` | Chronic Conditions Addressed | `textarea` | Y |  |  |
| Chronic Care Plan | Conditions & Goals | `overallGoals` | Patient-Centered Goals | `textarea` | Y |  |  |
| Chronic Care Plan | Interventions & Care Team | `medicationReconciled` | Medication reconciliation completed | `checkbox` |  |  |  |
| Chronic Care Plan | Interventions & Care Team | `interventions` | Care Interventions | `textarea` | Y |  |  |
| Chronic Care Plan | Interventions & Care Team | `careTeam` | Care Team Members | `textarea` |  |  |  |
| Chronic Care Plan | Interventions & Care Team | `communityResources` | Community Resources / Social Supports | `textarea` |  |  |  |
| Chronic Care Plan | Monitoring & Follow-Up | `selfMonitoring` | Self-Monitoring Instructions | `textarea` |  |  |  |
| Chronic Care Plan | Monitoring & Follow-Up | `emergencyPlan` | Emergency Action Plan | `textarea` |  |  |  |
| Chronic Care Plan | Monitoring & Follow-Up | `planStatus` | Plan Status | `select` | Y |  |  |

### Care Summary — `care_summary_cf`

Screen: 1 page(s) · 4 section(s) · 22 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Care Summary | Summary Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Care Summary | Summary Details | `summaryType` | Summary Type | `select` | Y |  |  |
| Care Summary | Summary Details | `summaryDate` | Summary Date | `date` | Y |  |  |
| Care Summary | Summary Details | `encounterId` | Related Encounter ID | `text` |  |  |  |
| Care Summary | Summary Details | `receivingProvider` | Receiving Provider (if referral) | `typeahead` |  |  |  |
| Care Summary | Clinical Information | `reasonForVisit` | Reason for Visit / Chief Complaint | `textarea` |  |  |  |
| Care Summary | Clinical Information | `diagnoses` | Diagnoses | `textarea` |  |  |  |
| Care Summary | Clinical Information | `procedures` | Procedures Performed | `textarea` |  |  |  |
| Care Summary | Clinical Information | `medicationsReconciled` | Medication list reconciled | `checkbox` |  |  |  |
| Care Summary | Clinical Information | `currentMeds` | Current Medications | `textarea` |  |  |  |
| Care Summary | Clinical Information | `allergies` | Allergies | `textarea` |  |  |  |
| Care Summary | Follow-Up Plan | `followUpInstructions` | Follow-Up Instructions | `textarea` |  |  |  |
| Care Summary | Follow-Up Plan | `nextAppointmentDate` | Next Appointment Date | `date` |  |  |  |
| Care Summary | Follow-Up Plan | `referralsOrdered` | Referrals Ordered | `textarea` |  |  |  |
| Care Summary | Follow-Up Plan | `labsOrdered` | Labs / Imaging Ordered | `textarea` |  |  |  |
| Care Summary | Follow-Up Plan | `patientGoals` | Patient Goals / Education | `textarea` |  |  |  |
| Care Summary | Follow-Up Plan | `careCoordinationNotes` | Care Coordination Notes | `textarea` |  |  |  |
| Care Summary | Summary Delivery | `givenToPatient` | Summary given to patient at visit | `checkbox` |  |  |  |
| Care Summary | Summary Delivery | `sentToPortal` | Summary sent to patient portal | `checkbox` |  |  |  |
| Care Summary | Summary Delivery | `sentToProvider` | Summary sent to receiving provider | `checkbox` |  |  |  |
| Care Summary | Summary Delivery | `deliveryDate` | Delivery Date | `date` |  |  |  |
| Care Summary | Summary Delivery | `deliveryMethod` | Delivery Method | `select` |  |  |  |

### Care Transition — `transition_of_care_cf`

Screen: 1 page(s) · 4 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Care Transition / Post-Hospital Follow-Up | Patient & Transition | `patientId` | Patient | `typeahead` | Y |  |  |
| Care Transition / Post-Hospital Follow-Up | Patient & Transition | `encounterId` | Encounter ID | `text` |  |  |  |
| Care Transition / Post-Hospital Follow-Up | Patient & Transition | `visitDate` | Follow-Up Visit Date | `date` | Y |  |  |
| Care Transition / Post-Hospital Follow-Up | Patient & Transition | `transitionType` | Transition Type | `select` | Y |  |  |
| Care Transition / Post-Hospital Follow-Up | Patient & Transition | `dischargeDate` | Discharge / Transition Date | `date` | Y |  |  |
| Care Transition / Post-Hospital Follow-Up | Patient & Transition | `dischargeFacility` | Discharging Facility | `text` | Y |  |  |
| Care Transition / Post-Hospital Follow-Up | Patient & Transition | `admittingDiagnosis` | Admitting / Primary Diagnosis | `textarea` | Y |  |  |
| Care Transition / Post-Hospital Follow-Up | Discharge Summary Review | `dischargeSummaryReviewed` | Discharge summary reviewed | `checkbox` |  |  |  |
| Care Transition / Post-Hospital Follow-Up | Discharge Summary Review | `dischargeMeds` | Discharge Medications (from D/C summary) | `textarea` |  |  |  |
| Care Transition / Post-Hospital Follow-Up | Discharge Summary Review | `medicationReconciliation` | Medication Reconciliation | `select` |  |  |  |
| Care Transition / Post-Hospital Follow-Up | Discharge Summary Review | `newDiagnoses` | New Diagnoses from Hospitalization | `textarea` |  |  |  |
| Care Transition / Post-Hospital Follow-Up | Discharge Summary Review | `pendingResults` | Pending Results / Labs from Hospitalization | `textarea` |  |  |  |
| Care Transition / Post-Hospital Follow-Up | Current Assessment | `recoveryStatus` | Recovery Status | `select` | Y |  |  |
| Care Transition / Post-Hospital Follow-Up | Current Assessment | `readmissionRisk` | Readmission Risk Assessment | `select` |  |  |  |
| Care Transition / Post-Hospital Follow-Up | Current Assessment | `functionalStatus` | Functional Status vs. Pre-Hospitalization Baseline | `select` |  |  |  |
| Care Transition / Post-Hospital Follow-Up | Current Assessment | `caregiverPresent` | Caregiver present / engaged | `checkbox` |  |  |  |
| Care Transition / Post-Hospital Follow-Up | Transition Plan | `followUpPlan` | Follow-Up Plan | `textarea` | Y |  |  |
| Care Transition / Post-Hospital Follow-Up | Transition Plan | `homeHealth` | Home health ordered | `checkbox` |  |  |  |
| Care Transition / Post-Hospital Follow-Up | Transition Plan | `phoneCheckScheduled` | Nurse phone check scheduled post-visit | `checkbox` |  |  |  |
| Care Transition / Post-Hospital Follow-Up | Transition Plan | `returnPrecs` | Return Precautions Given | `textarea` |  |  |  |
| Care Transition / Post-Hospital Follow-Up | Transition Plan | `tcmBillingLevel` | TCM Billing Level | `select` |  |  |  |

### Caregiver Assessment — `caregiver_assessment_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Caregiver Assessment | Caregiver Information | `patientId` | Care Recipient (Patient) | `typeahead` | Y |  |  |
| Caregiver Assessment | Caregiver Information | `assessmentDate` | Assessment Date | `date` | Y |  |  |
| Caregiver Assessment | Caregiver Information | `provider` | Provider | `typeahead` | Y |  |  |
| Caregiver Assessment | Caregiver Information | `caregiverName` | Caregiver Name | `text` | Y |  |  |
| Caregiver Assessment | Caregiver Information | `caregiverRelationship` | Relationship to Patient | `select` | Y |  |  |
| Caregiver Assessment | Caregiver Information | `caregiverAge` | Caregiver Age | `number` |  |  |  |
| Caregiver Assessment | Caregiver Information | `caregiverHealth` | Caregiver's Own Health Status | `select` |  |  |  |
| Caregiver Assessment | Caregiving Demands | `hoursPerWeek` | Hours per Week Caregiving | `number` |  |  |  |
| Caregiver Assessment | Caregiving Demands | `caregivingDuration` | Duration of Caregiving Role | `text` |  |  |  |
| Caregiver Assessment | Caregiving Demands | `tasksProvided` | Tasks Provided | `textarea` |  |  |  |
| Caregiver Assessment | Caregiving Demands | `employmentStatus` | Caregiver Employment Status | `select` |  |  |  |
| Caregiver Assessment | Burden Assessment | `zaritScore` | Zarit Burden Interview Score (0-48) | `number` |  |  |  |
| Caregiver Assessment | Burden Assessment | `zaritCategory` | Burden Level | `select` |  |  |  |
| Caregiver Assessment | Burden Assessment | `caregiverWellbeing` | Caregiver Wellbeing / Concerns | `textarea` |  |  |  |
| Caregiver Assessment | Burden Assessment | `supportSystem` | Support System | `textarea` |  |  |  |
| Caregiver Assessment | Plan for Caregiver Support | `caregiverPlan` | Caregiver Support Plan | `textarea` | Y |  |  |

### Chart Notes — `secure_notes_cf`

Screen: 2 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chart Note | Note | `note_category` | Category | `select` |  | note_category |  |
| Chart Note | Note | `is_secure` | Secure Note (restricted access) | `checkbox` |  | is_secure |  |
| Chart Note | Note | `pinned` | Pinned (show at top) | `checkbox` |  | pinned |  |
| Chart Note | Note | `note_text` | Note Text | `textarea` | Y | note_text |  |
| Medical Summary | Demographics | `firstName` | First Name | `text` |  | firstName |  |
| Medical Summary | Demographics | `lastName` | Last Name | `text` |  | lastName |  |
| Medical Summary | Demographics | `dob` | Date of Birth | `date` |  | dob |  |
| Medical Summary | Demographics | `gender` | Gender | `text` |  | gender |  |
| Medical Summary | Demographics | `phone` | Phone | `tel` |  | phone |  |
| Medical Summary | Demographics | `email` | Email | `email` |  | email |  |

### Chart Prep — `chart_prep_cf`

Screen: 1 page(s) · 4 section(s) · 23 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pre-Visit Chart Preparation | Appointment | `patientId` | Patient | `typeahead` | Y |  |  |
| Pre-Visit Chart Preparation | Appointment | `apptDate` | Appointment Date | `date` | Y |  |  |
| Pre-Visit Chart Preparation | Appointment | `apptType` | Appointment Type | `text` |  |  |  |
| Pre-Visit Chart Preparation | Appointment | `preparedBy` | Prepared By | `typeahead` | Y |  |  |
| Pre-Visit Chart Preparation | Medical Record Review | `lastVisitReviewed` | Last visit note reviewed | `checkbox` |  |  |  |
| Pre-Visit Chart Preparation | Medical Record Review | `problemListReviewed` | Problem list current and accurate | `checkbox` |  |  |  |
| Pre-Visit Chart Preparation | Medical Record Review | `medListReviewed` | Medication list reconciled / up to date | `checkbox` |  |  |  |
| Pre-Visit Chart Preparation | Medical Record Review | `allergiesReviewed` | Allergies reviewed and verified | `checkbox` |  |  |  |
| Pre-Visit Chart Preparation | Medical Record Review | `outstandingLabsReviewed` | Outstanding lab / imaging results reviewed and flagged for provider | `checkbox` |  |  |  |
| Pre-Visit Chart Preparation | Medical Record Review | `outstandingReferralsReviewed` | Pending referrals / consultations reviewed | `checkbox` |  |  |  |
| Pre-Visit Chart Preparation | Medical Record Review | `pendingResultsNotes` | Outstanding Items to Flag | `textarea` |  |  |  |
| Pre-Visit Chart Preparation | Preventive Care Gaps | `mammogramDue` | Mammogram — overdue / order needed | `checkbox` |  |  |  |
| Pre-Visit Chart Preparation | Preventive Care Gaps | `colonoscopyDue` | Colorectal screening — overdue / order needed | `checkbox` |  |  |  |
| Pre-Visit Chart Preparation | Preventive Care Gaps | `papDue` | Pap smear — due / order needed | `checkbox` |  |  |  |
| Pre-Visit Chart Preparation | Preventive Care Gaps | `fluDue` | Flu vaccine — due this season | `checkbox` |  |  |  |
| Pre-Visit Chart Preparation | Preventive Care Gaps | `pneumoDue` | Pneumococcal vaccine — due | `checkbox` |  |  |  |
| Pre-Visit Chart Preparation | Preventive Care Gaps | `shingrixDue` | Shingrix — series incomplete | `checkbox` |  |  |  |
| Pre-Visit Chart Preparation | Preventive Care Gaps | `a1cDue` | HbA1c — overdue (diabetic patient) | `checkbox` |  |  |  |
| Pre-Visit Chart Preparation | Preventive Care Gaps | `additionalCareGaps` | Other Care Gaps / Reminders | `textarea` |  |  |  |
| Pre-Visit Chart Preparation | Room Preparation | `roomReady` | Exam room prepared | `checkbox` |  |  |  |
| Pre-Visit Chart Preparation | Room Preparation | `equipmentNeeded` | Special Equipment / Supplies Needed | `textarea` |  |  |  |
| Pre-Visit Chart Preparation | Room Preparation | `interpreterNeeded` | Interpreter Needed | `select` |  |  |  |
| Pre-Visit Chart Preparation | Room Preparation | `formsNeeded` | Forms to Print / Provide | `textarea` |  |  |  |

### Check-In Code — `portal_check_in_code_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `APPOINTMENT_WAITLIST`, `AUDIT_LOG`, `CALENDAR_RESOURCE_BLOCKS`, `ENCOUNTERS`, `PATIENTS`, `PORTAL_CHECK_IN_QUESTIONNAIRES`, `PORTAL_KIOSK_CHECK_IN_CODES`, `PORTAL_PATIENT_RELATIONSHIPS`, `PORTAL_USERS`, `PRACTICES`, `PROVIDER_AVAILABILITY_TEMPLATES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Generate Check-In Code | Appointment | `appointmentId` | Appointment | `typeahead` |  |  |  |
| Generate Check-In Code | Generated Code | `code` | Check-In Code | `text` |  |  |  |
| Generate Check-In Code | Generated Code | `expiresAt` | Expires At | `date` |  |  |  |
| Generate Check-In Code | Generated Code | `patientName` | Patient Name | `text` |  |  |  |

### Check-In Status — `portal_check_in_status_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `PORTAL_CHECK_IN_QUESTIONNAIRES`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Check-In Questionnaire | Status | `patientId` | Patient ID | `text` |  |  |  |
| Check-In Questionnaire | Status | `status` | Status | `select` |  |  |  |
| Check-In Questionnaire | Status | `submittedAt` | Submitted At | `date` |  |  |  |
| Check-In Questionnaire | Status | `createdAt` | Started At | `date` |  |  |  |

### Chiropractic — `chiropractic_cf`

Screen: 2 page(s) · 10 section(s) · 74 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Evaluation | `evalDate` | Eval Date | `date` |  |  |  |
| Evaluation | Evaluation | `chiropractor` | Chiropractor | `text` |  |  |  |
| Evaluation | Evaluation | `chiefComplaint` | Chief Complaint | `text` |  |  |  |
| Evaluation | Evaluation | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| Evaluation | Evaluation | `visitsPlanned` | Visits Planned | `number` |  |  |  |
| Evaluation | Evaluation | `frequencyPerWeek` | Frequency/Week | `number` |  |  |  |
| Evaluation | Evaluation | `durationWeeks` | Duration (weeks) | `number` |  |  |  |
| Evaluation | Evaluation | `techniquePlanned` | Technique Planned | `text` |  |  |  |
| Evaluation | Postural Analysis | `headTilt` | Head Tilt | `text` |  |  |  |
| Evaluation | Postural Analysis | `shoulderHigh` | High Shoulder | `select` |  |  |  |
| Evaluation | Postural Analysis | `pelvicTilt` | Pelvic Tilt | `text` |  |  |  |
| Evaluation | Postural Analysis | `scoliosis` | Scoliosis | `checkbox` |  |  |  |
| Evaluation | Postural Analysis | `kyphosis` | Kyphosis | `checkbox` |  |  |  |
| Evaluation | Cervical ROM (°) | `cervFlex` | Flexion | `number` |  |  |  |
| Evaluation | Cervical ROM (°) | `cervExt` | Extension | `number` |  |  |  |
| Evaluation | Cervical ROM (°) | `cervRotRight` | Rotation Right | `number` |  |  |  |
| Evaluation | Cervical ROM (°) | `cervRotLeft` | Rotation Left | `number` |  |  |  |
| Evaluation | Cervical ROM (°) | `cervLatFlexRight` | Lat Flex Right | `number` |  |  |  |
| Evaluation | Cervical ROM (°) | `cervLatFlexLeft` | Lat Flex Left | `number` |  |  |  |
| Evaluation | Lumbar ROM (°) | `lumbFlex` | Flexion | `number` |  |  |  |
| Evaluation | Lumbar ROM (°) | `lumbExt` | Extension | `number` |  |  |  |
| Evaluation | Lumbar ROM (°) | `lumbRotRight` | Rotation Right | `number` |  |  |  |
| Evaluation | Lumbar ROM (°) | `lumbRotLeft` | Rotation Left | `number` |  |  |  |
| Evaluation | Lumbar ROM (°) | `lumbLatFlexRight` | Lat Flex Right | `number` |  |  |  |
| Evaluation | Lumbar ROM (°) | `lumbLatFlexLeft` | Lat Flex Left | `number` |  |  |  |
| Evaluation | Orthopedic Tests | `slrRight` | SLR Right | `text` |  |  |  |
| Evaluation | Orthopedic Tests | `slrLeft` | SLR Left | `text` |  |  |  |
| Evaluation | Orthopedic Tests | `spurling` | Spurling | `text` |  |  |  |
| Evaluation | Orthopedic Tests | `kemp` | Kemp | `text` |  |  |  |
| Evaluation | Orthopedic Tests | `faber` | FABER | `text` |  |  |  |
| Evaluation | Orthopedic Tests | `gaenslen` | Gaenslen | `text` |  |  |  |
| Evaluation | Orthopedic Tests | `oberTest` | Ober Test | `text` |  |  |  |
| Evaluation | Orthopedic Tests | `reflexesBiceps` | Biceps Reflex | `text` |  |  |  |
| Evaluation | Orthopedic Tests | `reflexesPatellar` | Patellar Reflex | `text` |  |  |  |
| Evaluation | Orthopedic Tests | `reflexesAchilles` | Achilles Reflex | `text` |  |  |  |
| Evaluation | X-Ray Findings | `xrayPerformed` | X-Ray Performed | `checkbox` |  |  |  |
| Evaluation | X-Ray Findings | `xrayViews` | Views Taken | `text` |  |  |  |
| Evaluation | X-Ray Findings | `xrayFindings` | X-Ray Findings | `textarea` |  |  |  |
| Evaluation | X-Ray Findings | `discDegeneration` | Disc Degeneration | `checkbox` |  |  |  |
| Evaluation | X-Ray Findings | `osteophytes` | Osteophytes | `checkbox` |  |  |  |
| Evaluation | X-Ray Findings | `foraminalNarrowing` | Foraminal Narrowing | `checkbox` |  |  |  |
| Visits | Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Visits | Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Visits | Visit | `visitNumber` | Visit # | `number` |  |  |  |
| Visits | Visit | `chiropractor` | Chiropractor | `text` |  |  |  |
| Visits | Visit | `painVasToday` | Pain VAS Today (0–10) | `number` |  |  |  |
| Visits | Visit | `painLocation` | Pain Location | `text` |  |  |  |
| Visits | Visit | `painComparedToLast` | Compared to Last Visit | `select` |  |  |  |
| Visits | Current ROM (°) | `visitCervFlex` | Cervical Flex | `number` |  |  |  |
| Visits | Current ROM (°) | `visitCervExt` | Cervical Ext | `number` |  |  |  |
| Visits | Current ROM (°) | `visitLumbFlex` | Lumbar Flex | `number` |  |  |  |
| Visits | Current ROM (°) | `visitLumbExt` | Lumbar Ext | `number` |  |  |  |
| Visits | Adjustments Performed | `adjustmentsPerformed` | Adjustments Performed | `checkbox` |  |  |  |
| Visits | Adjustments Performed | `techniquePrimary` | Primary Technique | `text` |  |  |  |
| Visits | Adjustments Performed | `levelsAdjusted` | Levels Adjusted | `text` |  |  |  |
| Visits | Adjustments Performed | `diversified` | Diversified | `checkbox` |  |  |  |
| Visits | Adjustments Performed | `gonstead` | Gonstead | `checkbox` |  |  |  |
| Visits | Adjustments Performed | `activator` | Activator | `checkbox` |  |  |  |
| Visits | Adjustments Performed | `thompsonDrop` | Thompson Drop | `checkbox` |  |  |  |
| Visits | Adjustments Performed | `sot` | SOT | `checkbox` |  |  |  |
| Visits | Adjustments Performed | `flexionDistraction` | Flexion-Distraction | `checkbox` |  |  |  |
| Visits | Adjunct Therapies | `electricalStimulation` | Electrical Stimulation | `checkbox` |  |  |  |
| Visits | Adjunct Therapies | `ultrasound` | Ultrasound | `checkbox` |  |  |  |
| Visits | Adjunct Therapies | `mechanicalTraction` | Mechanical Traction | `checkbox` |  |  |  |
| Visits | Adjunct Therapies | `coldPack` | Cold Pack | `checkbox` |  |  |  |
| Visits | Adjunct Therapies | `hotPack` | Hot Pack | `checkbox` |  |  |  |
| Visits | Adjunct Therapies | `lowLevelLaser` | Low-Level Laser | `checkbox` |  |  |  |
| Visits | Adjunct Therapies | `intersegmentalTraction` | Intersegmental Traction | `checkbox` |  |  |  |
| Visits | Adjunct Therapies | `cervicalTraction` | Cervical Traction | `checkbox` |  |  |  |
| Visits | Adjunct Therapies | `manualTherapy` | Manual Therapy | `checkbox` |  |  |  |
| Visits | Adjunct Therapies | `stretching` | Stretching | `checkbox` |  |  |  |
| Visits | Adjunct Therapies | `therapeuticExercise` | Therapeutic Exercise | `checkbox` |  |  |  |
| Visits | Adjunct Therapies | `nextVisitDate` | Next Visit Date | `date` |  |  |  |

### Chronic Disease Mgmt — `chronic_disease_cf`

Screen: 1 page(s) · 3 section(s) · 20 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Disease Management | Condition & Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Chronic Disease Management | Condition & Patient | `condition` | Condition | `select` | Y |  |  |
| Chronic Disease Management | Condition & Patient | `conditionOther` | Other Condition | `text` |  |  |  |
| Chronic Disease Management | Condition & Patient | `diagnosisDate` | Diagnosis Date | `date` |  |  |  |
| Chronic Disease Management | Condition & Patient | `managementDate` | Management Visit Date | `date` | Y |  |  |
| Chronic Disease Management | Disease Control Status | `controlStatus` | Disease Control | `select` |  |  |  |
| Chronic Disease Management | Disease Control Status | `a1c` | A1C (%) | `number` |  |  |  |
| Chronic Disease Management | Disease Control Status | `a1cDate` | A1C Date | `date` |  |  |  |
| Chronic Disease Management | Disease Control Status | `ldl` | LDL (mg/dL) | `number` |  |  |  |
| Chronic Disease Management | Disease Control Status | `ldlDate` | LDL Date | `date` |  |  |  |
| Chronic Disease Management | Disease Control Status | `eGFR` | eGFR (if CKD) | `number` |  |  |  |
| Chronic Disease Management | Disease Control Status | `bpGoalMet` | Blood pressure goal met (<140/90 or per guideline) | `checkbox` |  |  |  |
| Chronic Disease Management | Disease Control Status | `medicationAdherence` | Medication Adherence | `select` |  |  |  |
| Chronic Disease Management | Management Plan | `medicationChanges` | Medication Changes | `textarea` |  |  |  |
| Chronic Disease Management | Management Plan | `lifestyleGoals` | Lifestyle Goals | `textarea` |  |  |  |
| Chronic Disease Management | Management Plan | `monitoringPlan` | Monitoring Plan | `textarea` |  |  |  |
| Chronic Disease Management | Management Plan | `selfManagementEducation` | Self-management education provided | `checkbox` |  |  |  |
| Chronic Disease Management | Management Plan | `specialistReferral` | Specialist Referral | `text` |  |  |  |
| Chronic Disease Management | Management Plan | `nextVisit` | Next Follow-Up | `select` |  |  |  |
| Chronic Disease Management | Management Plan | `cdmNotes` | Management Notes | `textarea` |  |  |  |

### Chronic Disease Mgmt — `chronic_disease_mgmt_cf`

Screen: 1 page(s) · 5 section(s) · 26 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Disease Management Visit | Visit Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Chronic Disease Management Visit | Visit Context | `encounterId` | Encounter ID | `text` | Y |  |  |
| Chronic Disease Management Visit | Visit Context | `visitDate` | Visit Date | `date` | Y |  |  |
| Chronic Disease Management Visit | Visit Context | `disease` | Primary Chronic Condition Being Managed | `select` | Y |  |  |
| Chronic Disease Management Visit | Diabetes Control (if applicable) | `hba1c` | HbA1c (%) | `number` |  |  |  |
| Chronic Disease Management Visit | Diabetes Control (if applicable) | `hba1cDate` | HbA1c Date | `date` |  |  |  |
| Chronic Disease Management Visit | Diabetes Control (if applicable) | `hba1cTrend` | HbA1c Trend | `select` |  |  |  |
| Chronic Disease Management Visit | Diabetes Control (if applicable) | `fastingGlucose` | Fasting Glucose (mg/dL) | `number` |  |  |  |
| Chronic Disease Management Visit | Diabetes Control (if applicable) | `insulinTherapy` | On insulin therapy | `checkbox` |  |  |  |
| Chronic Disease Management Visit | Diabetes Control (if applicable) | `hypoglycemiaEvents` | Hypoglycemia Events (last 30 days) | `number` |  |  |  |
| Chronic Disease Management Visit | Diabetes Control (if applicable) | `diabeticFootExam` | Diabetic foot exam performed today | `checkbox` |  |  |  |
| Chronic Disease Management Visit | Diabetes Control (if applicable) | `diabeticEyeExamDate` | Last Dilated Eye Exam Date | `date` |  |  |  |
| Chronic Disease Management Visit | Diabetes Control (if applicable) | `microalbuminDate` | Last Urine Microalbumin Date | `date` |  |  |  |
| Chronic Disease Management Visit | Blood Pressure / Hypertension (if applicable) | `bpToday` | BP Today (systolic/diastolic) | `text` |  |  |  |
| Chronic Disease Management Visit | Blood Pressure / Hypertension (if applicable) | `bpGoal` | BP Goal | `text` |  |  |  |
| Chronic Disease Management Visit | Blood Pressure / Hypertension (if applicable) | `bpControlled` | BP Control Status | `select` |  |  |  |
| Chronic Disease Management Visit | Blood Pressure / Hypertension (if applicable) | `bpMedCount` | Number of Antihypertensives on Regimen | `number` |  |  |  |
| Chronic Disease Management Visit | Lipid Management | `ldl` | LDL (mg/dL) | `number` |  |  |  |
| Chronic Disease Management Visit | Lipid Management | `ldlDate` | LDL Date | `date` |  |  |  |
| Chronic Disease Management Visit | Lipid Management | `ldlGoal` | LDL Goal | `text` |  |  |  |
| Chronic Disease Management Visit | Lipid Management | `onStatin` | On statin therapy | `checkbox` |  |  |  |
| Chronic Disease Management Visit | Lipid Management | `statinIntensity` | Statin Intensity | `select` |  |  |  |
| Chronic Disease Management Visit | CDM Plan Update | `medicationChanges` | Medication Changes | `textarea` |  |  |  |
| Chronic Disease Management Visit | CDM Plan Update | `orderThisVisit` | Orders Placed Today | `textarea` |  |  |  |
| Chronic Disease Management Visit | CDM Plan Update | `cdmEducation` | Education / Counseling Provided | `textarea` |  |  |  |
| Chronic Disease Management Visit | CDM Plan Update | `returnVisitDays` | Return Visit (days) | `number` |  |  |  |
