---
title: "PracticeForceOneCFTrackingFields3"
---

# CF Tracking — Field-Level Detail (part 3 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Clinical**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Clinical

### Chronic Pain Assessment — `chronic_pain_assessment_cf`

Screen: 1 page(s) · 4 section(s) · 24 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Pain Assessment | Patient & Pain Profile | `patientId` | Patient | `typeahead` | Y |  |  |
| Chronic Pain Assessment | Patient & Pain Profile | `assessDate` | Assessment Date | `date` | Y |  |  |
| Chronic Pain Assessment | Patient & Pain Profile | `provider` | Provider | `typeahead` | Y |  |  |
| Chronic Pain Assessment | Patient & Pain Profile | `painDx` | Pain Diagnosis | `text` | Y |  |  |
| Chronic Pain Assessment | Patient & Pain Profile | `painDuration` | Duration of Chronic Pain | `text` |  |  |  |
| Chronic Pain Assessment | Patient & Pain Profile | `painLocation` | Pain Location | `text` | Y |  |  |
| Chronic Pain Assessment | Brief Pain Inventory (BPI) | `bpiWorst` | Worst Pain in Past 24 Hours (0-10) | `select` | Y |  |  |
| Chronic Pain Assessment | Brief Pain Inventory (BPI) | `bpiLeast` | Least Pain in Past 24 Hours (0-10) | `select` | Y |  |  |
| Chronic Pain Assessment | Brief Pain Inventory (BPI) | `bpiAverage` | Average Pain (0-10) | `select` | Y |  |  |
| Chronic Pain Assessment | Brief Pain Inventory (BPI) | `bpiNow` | Pain Right Now (0-10) | `select` | Y |  |  |
| Chronic Pain Assessment | Brief Pain Inventory (BPI) | `bpiActivity` | Interference: General Activity (0-10) | `select` | Y |  |  |
| Chronic Pain Assessment | Brief Pain Inventory (BPI) | `bpiMood` | Interference: Mood (0-10) | `select` | Y |  |  |
| Chronic Pain Assessment | Brief Pain Inventory (BPI) | `bpiSleep` | Interference: Sleep (0-10) | `select` | Y |  |  |
| Chronic Pain Assessment | Brief Pain Inventory (BPI) | `bpiWork` | Interference: Work (0-10) | `select` | Y |  |  |
| Chronic Pain Assessment | Brief Pain Inventory (BPI) | `currentRelief` | Pain Relief from Treatments (%) | `select` |  |  |  |
| Chronic Pain Assessment | Opioid Risk Assessment | `currentOpioid` | Currently on opioid therapy | `checkbox` |  |  |  |
| Chronic Pain Assessment | Opioid Risk Assessment | `opioidMed` | Current Opioid | `text` |  |  |  |
| Chronic Pain Assessment | Opioid Risk Assessment | `mme` | Current MME/Day (morphine milligram equivalents) | `number` |  |  |  |
| Chronic Pain Assessment | Opioid Risk Assessment | `ortScore` | ORT (Opioid Risk Tool) Score | `select` |  |  |  |
| Chronic Pain Assessment | Opioid Risk Assessment | `pdmpChecked` | PDMP checked today | `checkbox` |  |  |  |
| Chronic Pain Assessment | Opioid Risk Assessment | `pdmpFindings` | PDMP Findings | `text` |  |  |  |
| Chronic Pain Assessment | Opioid Risk Assessment | `udaResult` | UDA Result (if performed) | `select` |  |  |  |
| Chronic Pain Assessment | Treatment Plan | `currentTreatments` | Current Pain Treatments | `textarea` | Y |  |  |
| Chronic Pain Assessment | Treatment Plan | `planChanges` | Plan Changes Today | `textarea` | Y |  |  |

### Clinical Notes — `clinical_notes_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clinical Note | Note Header | `patient_id` | Patient | `typeahead` |  |  |  |
| Clinical Note | Note Header | `encounter_date` | Encounter Date | `date` | Y |  |  |
| Clinical Note | Note Header | `note_type` | Note Type | `select` |  |  |  |
| Clinical Note | Note Header | `status` | Status | `select` |  |  |  |
| Clinical Note | Note Header | `subject_line` | Subject Line | `text` |  |  |  |
| Clinical Note | Note Header | `cosign_required` | Co-Sign Required | `checkbox` |  |  |  |
| Clinical Note | Note Header | `cosigner_id` | Co-Signer (Attending) | `typeahead` |  |  |  |
| Clinical Note | SOAP Content | `hpi_text` | History of Present Illness (HPI) | `textarea` |  |  |  |
| Clinical Note | SOAP Content | `subjective` | Subjective | `textarea` |  |  |  |
| Clinical Note | SOAP Content | `objective` | Objective | `textarea` |  |  |  |
| Clinical Note | SOAP Content | `assessment` | Assessment | `textarea` |  |  |  |
| Clinical Note | SOAP Content | `plan` | Plan | `textarea` |  |  |  |
| Clinical Note | Co-Sign Details | `cosigned_at` | Co-Signed At | `date` |  |  |  |
| Clinical Note | Co-Sign Details | `cosign_notes` | Co-Sign Notes | `textarea` |  |  |  |
| Clinical Note | Co-Sign Details | `rejection_reason` | Rejection Reason | `textarea` |  |  |  |
| Clinical Note | Co-Sign Details | `finalized_at` | Finalized At | `date` |  |  |  |

### Clinical Notes — `clinical_notes_ext_cf`

Screen: 3 page(s) · 4 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Subjective | Chief Complaint & HPI | `chiefComplaint` | Chief complaint | `text` |  |  |  |
| Subjective | Chief Complaint & HPI | `hpi` | History of present illness (HPI) | `textarea` |  |  |  |
| Subjective | Chief Complaint & HPI | `reviewOfSystems` | Review of systems (ROS) | `textarea` |  |  |  |
| Objective / Assessment | Objective | `physicalExam` | Physical examination | `textarea` |  |  |  |
| Objective / Assessment | Assessment & Plan | `assessment` | Assessment | `textarea` |  |  |  |
| Objective / Assessment | Assessment & Plan | `plan` | Plan | `textarea` |  |  |  |
| Objective / Assessment | Assessment & Plan | `followUpInstructions` | Follow-up instructions | `textarea` |  |  |  |
| Co-Sign & Metadata | Note Metadata | `noteType` | Note type | `select` |  |  |  |
| Co-Sign & Metadata | Note Metadata | `status` | Status | `text` |  |  |  |
| Co-Sign & Metadata | Note Metadata | `supervisingProvider` | Supervising provider | `typeahead` |  |  |  |
| Co-Sign & Metadata | Note Metadata | `cosignedAt` | Co-signed at | `text` |  |  |  |

### Clinical Tasks — `CLINICAL_TASKS`

Screen: 1 page(s) · 1 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `CLINICAL_TASKS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clinical Task | Task | `ctId` | Task ID (read-only) | `text` |  |  |  |
| Clinical Task | Task | `ctPracticeId` | Practice ID (required) | `text` | Y |  |  |
| Clinical Task | Task | `ctPatientId` | Patient ID (optional) | `text` |  |  |  |
| Clinical Task | Task | `ctTitle` | Title (required) | `text` | Y |  |  |
| Clinical Task | Task | `ctDescription` | Description | `textarea` |  |  |  |
| Clinical Task | Task | `ctTaskType` | Task Type (lab_review/prescription/referral/follow_up/administrative/other) | `text` |  |  |  |
| Clinical Task | Task | `ctStatus` | Status (open/pending/completed/cancelled) | `text` |  |  |  |
| Clinical Task | Task | `ctPriority` | Priority (low/medium/high/urgent) | `text` |  |  |  |
| Clinical Task | Task | `ctAssignedTo` | Assigned To (user ID) | `text` |  |  |  |
| Clinical Task | Task | `ctDueAt` | Due Date/Time (ISO 8601) | `text` |  |  |  |
| Clinical Task | Task | `ctEncounterId` | Encounter ID (optional) | `text` |  |  |  |

### Clinical Tasks — `clinical_tasks_cf`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `CLINICAL_TASKS`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Task | Task Details | `taskType` | Task type | `select` |  |  |  |
| Task | Task Details | `priority` | Priority | `select` |  |  |  |
| Task | Task Details | `title` | Title / summary | `text` | Y |  |  |
| Task | Task Details | `description` | Description / instructions | `textarea` |  |  |  |
| Task | Task Details | `dueDate` | Due date | `date` |  |  |  |
| Task | Task Details | `status` | Status | `select` |  |  |  |
| Task | Task Details | `assignedTo` | Assigned to | `typeahead` |  |  |  |
| Task | Task Details | `completedAt` | Completed at | `text` |  |  |  |
| Task | Task Details | `completionNotes` | Completion notes | `textarea` |  |  |  |

### Clinical Visit Notes — `clinical_visit_notes_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Visit Note | Note | `patientId` | Patient | `lookup` | Y |  |  |
| Visit Note | Note | `noteDate` | Note Date | `date` |  |  |  |
| Visit Note | Note | `visitType` | Visit Type | `select` | Y |  |  |
| Visit Note | Note | `providerName` | Provider | `text` |  |  |  |
| Visit Note | Note | `icd10Codes` | ICD-10 Codes | `text` |  |  |  |
| Visit Note | Note | `cptCodes` | CPT Codes | `text` |  |  |  |
| Visit Note | SOAP Note | `chiefComplaint` | Chief Complaint / Subjective | `textarea` |  |  |  |
| Visit Note | SOAP Note | `summary` | Assessment & Plan | `textarea` |  |  |  |
| Visit Note | SOAP Note | `noteData` | Additional Note Content (JSON / free text) | `textarea` |  |  |  |

### Clinical Workflow — `clinical_workflow_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clinical Workflow Board | Daily Schedule View | `viewDate` | Date | `date` | Y |  |  |
| Clinical Workflow Board | Daily Schedule View | `viewProvider` | Provider | `typeahead` |  |  |  |
| Clinical Workflow Board | Daily Schedule View | `viewLocation` | Location / Room | `text` |  |  |  |
| Clinical Workflow Board | Daily Schedule View | `viewStatus` | Filter by Status | `select` |  |  |  |
| Clinical Workflow Board | Workflow Actions | `selectedPatient` | Selected Patient | `typeahead` |  |  |  |
| Clinical Workflow Board | Workflow Actions | `currentStatus` | Current Visit Status | `select` |  |  |  |
| Clinical Workflow Board | Workflow Actions | `roomAssignment` | Room Assignment | `text` |  |  |  |
| Clinical Workflow Board | Workflow Actions | `waitTime` | Wait Time (minutes) | `number` |  |  |  |
| Clinical Workflow Board | Workflow Actions | `workflowNotes` | Workflow Notes | `textarea` |  |  |  |

### Co-Sign Queue — `supervision_cf`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `AUDIT_LOG`, `CHARGE_REVIEW_QUEUE`, `ENCOUNTERS`, `ENCOUNTER_DIAGNOSES`, `ENCOUNTER_NOTES`, `ENCOUNTER_NOTE_AMENDMENTS`, `ENCOUNTER_NOTE_VERSIONS`, `ENCOUNTER_VITALS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Supervision Co-Sign (ECW-CL-63) | Supervision Requirements | `supervisionType` | Supervision Type | `select` |  |  |  |
| Supervision Co-Sign (ECW-CL-63) | Supervision Requirements | `renderingProvider` | Rendering Provider | `text` |  |  |  |
| Supervision Co-Sign (ECW-CL-63) | Supervision Requirements | `supervisingProvider` | Supervising Physician | `text` |  |  |  |
| Supervision Co-Sign (ECW-CL-63) | Supervision Requirements | `samplingRate` | Sampling Rate (%) | `number` |  |  |  |
| Supervision Co-Sign (ECW-CL-63) | Supervision Requirements | `coSignStatus` | Co-Sign Status | `select` |  |  |  |
| Supervision Co-Sign (ECW-CL-63) | Supervision Requirements | `coSignDate` | Co-Sign Date | `date` |  |  |  |
| Supervision Co-Sign (ECW-CL-63) | Supervision Requirements | `coSignNote` | Co-Sign Note / Amendments | `textarea` |  |  |  |

### Cognitive Assessment — `cognitive_assessment_cf`

Screen: 1 page(s) · 4 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cognitive Screening Assessment | Patient & Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Cognitive Screening Assessment | Patient & Context | `assessmentDate` | Assessment Date | `date` | Y |  |  |
| Cognitive Screening Assessment | Patient & Context | `assessor` | Assessed By | `typeahead` | Y |  |  |
| Cognitive Screening Assessment | Patient & Context | `testIndication` | Indication | `select` |  |  |  |
| Cognitive Screening Assessment | Mini-Cog Assessment | `miniCogWord1` | Word 1 Used | `text` |  |  |  |
| Cognitive Screening Assessment | Mini-Cog Assessment | `miniCogWord2` | Word 2 Used | `text` |  |  |  |
| Cognitive Screening Assessment | Mini-Cog Assessment | `miniCogWord3` | Word 3 Used | `text` |  |  |  |
| Cognitive Screening Assessment | Mini-Cog Assessment | `clockDrawScore` | Clock Drawing (CDT) Score | `select` | Y |  |  |
| Cognitive Screening Assessment | Mini-Cog Assessment | `wordRecall` | Word Recall Score | `select` | Y |  |  |
| Cognitive Screening Assessment | Mini-Cog Assessment | `miniCogTotal` | Mini-Cog Total Score | `select` | Y |  |  |
| Cognitive Screening Assessment | Mini-Cog Assessment | `miniCogResult` | Mini-Cog Result | `select` | Y |  |  |
| Cognitive Screening Assessment | MoCA (Montreal Cognitive Assessment) — Optional | `mocaTotal` | MoCA Total Score (0-30) | `number` |  |  |  |
| Cognitive Screening Assessment | MoCA (Montreal Cognitive Assessment) — Optional | `mocaResult` | MoCA Result | `select` |  |  |  |
| Cognitive Screening Assessment | MoCA (Montreal Cognitive Assessment) — Optional | `educationAdjust` | Education adjustment applied (+1 point for ≤12 years education) | `checkbox` |  |  |  |
| Cognitive Screening Assessment | Assessment Summary & Plan | `informant` | Informant (if available) | `text` |  |  |  |
| Cognitive Screening Assessment | Assessment Summary & Plan | `informantObservations` | Informant Observations | `textarea` |  |  |  |
| Cognitive Screening Assessment | Assessment Summary & Plan | `clinicalImpression` | Clinical Impression | `select` | Y |  |  |
| Cognitive Screening Assessment | Assessment Summary & Plan | `workupOrdered` | Workup Ordered | `textarea` |  |  |  |

### Colorectal Oncology — `colorectal_oncology_cf`

Screen: 2 page(s) · 6 section(s) · 54 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Evaluation | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Evaluation | `providerName` | Oncologist | `text` |  |  |  |
| Evaluation | Evaluation | `cancerType` | Cancer Type | `select` |  |  |  |
| Evaluation | Evaluation | `primarySite` | Primary Site (e.g. Sigmoid, Descending) | `text` |  |  |  |
| Evaluation | Evaluation | `histology` | Histology | `text` |  |  |  |
| Evaluation | Evaluation | `differentiation` | Differentiation | `select` |  |  |  |
| Evaluation | Evaluation | `treatmentIntent` | Treatment Intent | `select` |  |  |  |
| Evaluation | MMR / MSI / Lynch | `microsatelliteInstability` | MSI Status | `select` |  |  |  |
| Evaluation | MMR / MSI / Lynch | `mmrStatus` | MMR Status | `select` |  |  |  |
| Evaluation | MMR / MSI / Lynch | `mlh1` | MLH1 | `select` |  |  |  |
| Evaluation | MMR / MSI / Lynch | `msh2` | MSH2 | `select` |  |  |  |
| Evaluation | MMR / MSI / Lynch | `msh6` | MSH6 | `select` |  |  |  |
| Evaluation | MMR / MSI / Lynch | `pms2` | PMS2 | `select` |  |  |  |
| Evaluation | MMR / MSI / Lynch | `lynchSyndromeSuspected` | Lynch Syndrome Suspected | `checkbox` |  |  |  |
| Evaluation | MMR / MSI / Lynch | `lynchGermlineConfirmed` | Lynch Confirmed | `checkbox` |  |  |  |
| Evaluation | MMR / MSI / Lynch | `lynchGermlineGene` | Lynch Gene | `text` |  |  |  |
| Evaluation | Molecular Markers | `krasMutation` | KRAS Mutation | `checkbox` |  |  |  |
| Evaluation | Molecular Markers | `krasCodon` | KRAS Codon | `text` |  |  |  |
| Evaluation | Molecular Markers | `krasMutationVariant` | KRAS Variant | `text` |  |  |  |
| Evaluation | Molecular Markers | `nrasMutation` | NRAS Mutation | `checkbox` |  |  |  |
| Evaluation | Molecular Markers | `brafV600e` | BRAF V600E | `checkbox` |  |  |  |
| Evaluation | Molecular Markers | `ntrKFusion` | NTRK Fusion | `checkbox` |  |  |  |
| Evaluation | Molecular Markers | `retFusion` | RET Fusion | `checkbox` |  |  |  |
| Evaluation | Molecular Markers | `her2Amplification` | HER2 Amplification | `checkbox` |  |  |  |
| Evaluation | Molecular Markers | `tmb` | TMB (mut/Mb) | `number` |  |  |  |
| Evaluation | Molecular Markers | `tmbHigh` | TMB-High (≥10) | `checkbox` |  |  |  |
| Evaluation | AJCC 8th Staging | `ajccTStage` | T Stage | `text` |  |  |  |
| Evaluation | AJCC 8th Staging | `ajccNStage` | N Stage | `text` |  |  |  |
| Evaluation | AJCC 8th Staging | `ajccMStage` | M Stage | `text` |  |  |  |
| Evaluation | AJCC 8th Staging | `ajccOverallStage` | Overall Stage | `text` |  |  |  |
| Evaluation | AJCC 8th Staging | `nodesPositive` | Nodes Positive | `number` |  |  |  |
| Evaluation | AJCC 8th Staging | `nodesRemoved` | Nodes Removed | `number` |  |  |  |
| Evaluation | AJCC 8th Staging | `distantMetastases` | Distant Metastases | `checkbox` |  |  |  |
| Evaluation | AJCC 8th Staging | `liverMetastases` | Liver Mets | `checkbox` |  |  |  |
| Evaluation | AJCC 8th Staging | `lungMetastases` | Lung Mets | `checkbox` |  |  |  |
| Evaluation | AJCC 8th Staging | `peritonealMetastases` | Peritoneal Mets | `checkbox` |  |  |  |
| Evaluation | AJCC 8th Staging | `peritonealCancerIndex` | PCI Score | `number` |  |  |  |
| Evaluation | AJCC 8th Staging | `cea` | Baseline CEA | `number` |  |  |  |
| Evaluation | Rectal-Specific | `distanceFromAnalVergeCm` | Distance from Anal Verge (cm) | `number` |  |  |  |
| Evaluation | Rectal-Specific | `sphincterInvolvement` | Sphincter Involvement | `checkbox` |  |  |  |
| Evaluation | Rectal-Specific | `sphincterPreservationIntent` | Sphincter Preservation Intent | `checkbox` |  |  |  |
| Evaluation | Rectal-Specific | `mesorectalFasciaThreatened` | MRF Threatened | `checkbox` |  |  |  |
| Evaluation | Rectal-Specific | `mrfDistanceMm` | CRM Distance (mm) | `number` |  |  |  |
| Evaluation | Rectal-Specific | `extamuralVenousInvasion` | EMVI | `checkbox` |  |  |  |
| Follow-Up Visits | Oncology Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Follow-Up Visits | Oncology Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Follow-Up Visits | Oncology Visit | `visitType` | Visit Type | `select` |  |  |  |
| Follow-Up Visits | Oncology Visit | `treatmentResponse` | Treatment Response | `select` |  |  |  |
| Follow-Up Visits | Oncology Visit | `cea` | CEA (ng/mL) | `number` |  |  |  |
| Follow-Up Visits | Oncology Visit | `ceaTrend` | CEA Trend | `select` |  |  |  |
| Follow-Up Visits | Oncology Visit | `peripheralNeuropathyGrade` | Peripheral Neuropathy Grade (0-4) | `number` |  |  |  |
| Follow-Up Visits | Oncology Visit | `recurrenceSuspected` | Recurrence Suspected | `checkbox` |  |  |  |
| Follow-Up Visits | Oncology Visit | `notes` | Notes / Plan | `textarea` |  |  |  |

### Communication Preferences — `patient_comm_prefs_cf`

Screen: 1 page(s) · 2 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Communication Preferences | Contact Preferences | `language` | Preferred Language | `text` |  | language |  |
| Communication Preferences | Contact Preferences | `preferredPhone` | Preferred Phone | `text` |  | preferredPhone |  |
| Communication Preferences | Contact Preferences | `textEnabled` | Text Enabled | `text` |  | textEnabled |  |
| Communication Preferences | Reminder Settings | `reminderHealthMaintenance` | Health Maintenance Reminders | `text` |  | reminderHealthMaintenance |  |
| Communication Preferences | Reminder Settings | `reminderLabResults` | Lab Result Reminders | `text` |  | reminderLabResults |  |
| Communication Preferences | Reminder Settings | `excludeFromRegistrySearch` | Exclude from Registry | `text` |  | excludeFromRegistrySearch |  |
| Communication Preferences | Reminder Settings | `inactivePatient` | Inactive Patient | `text` |  | inactivePatient |  |

### Concussion Rehab — `concussion_rehab_cf`

Screen: 2 page(s) · 8 section(s) · 86 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Injury History | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Injury History | `evalDate` | Eval Date | `date` |  |  |  |
| Evaluation | Injury History | `clinician` | Clinician | `text` |  |  |  |
| Evaluation | Injury History | `injuryDate` | Injury Date | `date` |  |  |  |
| Evaluation | Injury History | `daysSinceInjury` | Days Since Injury | `number` |  |  |  |
| Evaluation | Injury History | `mechanismOfInjury` | Mechanism | `text` |  |  |  |
| Evaluation | Injury History | `sportActivity` | Sport / Activity | `text` |  |  |  |
| Evaluation | Injury History | `helmetWorn` | Helmet Worn | `checkbox` |  |  |  |
| Evaluation | Injury History | `lossOfConsciousness` | LOC | `checkbox` |  |  |  |
| Evaluation | Injury History | `locDurationSec` | LOC Duration (sec) | `number` |  |  |  |
| Evaluation | Injury History | `postTraumaticAmnesia` | Post-Traumatic Amnesia | `checkbox` |  |  |  |
| Evaluation | Injury History | `ptaDurationMin` | PTA Duration (min) | `number` |  |  |  |
| Evaluation | Injury History | `retrogradeAmnesia` | Retrograde Amnesia | `checkbox` |  |  |  |
| Evaluation | Injury History | `priorConcussions` | Prior Concussions | `number` |  |  |  |
| Evaluation | Injury History | `priorConcussionMostRecent` | Most Recent Prior Concussion | `date` |  |  |  |
| Evaluation | Injury History | `imagingPerformed` | Imaging Performed | `checkbox` |  |  |  |
| Evaluation | Injury History | `imagingResults` | Imaging Results | `text` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5SymptomHeadache` | Headache (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5PressureInHead` | Pressure in Head (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5NeckPain` | Neck Pain (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5Nausea` | Nausea (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5Dizziness` | Dizziness (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5BlurredVision` | Blurred Vision (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5BalanceProblems` | Balance Problems (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5LightSensitivity` | Light Sensitivity (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5NoiseSensitivity` | Noise Sensitivity (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5SlowedDown` | Slowed Down (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5Foggy` | Feeling in Fog (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5NotFeelingRight` | Not Feeling Right (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5DifficultyConcentrating` | Difficulty Concentrating (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5DifficultyRemembering` | Difficulty Remembering (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5Fatigue` | Fatigue / Low Energy (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5Drowsiness` | Drowsiness (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5MoreEmotional` | More Emotional (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5Irritability` | Irritability (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5Sadness` | Sadness (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5Nervous` | Nervous/Anxious (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5Numbness` | Numbness/Tingling (0-6) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5TotalSymptoms` | Total Symptoms (0-22) | `number` |  |  |  |
| Evaluation | SCAT-5 Symptom Evaluation | `scat5SeverityScore` | Total Severity (0-132) | `number` |  |  |  |
| Evaluation | SAC — Neurocognitive | `sacOrientation` | Orientation (0-5) | `number` |  |  |  |
| Evaluation | SAC — Neurocognitive | `sacImmediateMemory` | Immediate Memory (0-15) | `number` |  |  |  |
| Evaluation | SAC — Neurocognitive | `sacConcentration` | Concentration (0-5) | `number` |  |  |  |
| Evaluation | SAC — Neurocognitive | `sacDelayedRecall` | Delayed Recall (0-5) | `number` |  |  |  |
| Evaluation | SAC — Neurocognitive | `sacTotal` | SAC Total (0-30) | `number` |  |  |  |
| Evaluation | BESS — Balance | `bessFirmDouble` | Firm — Double Leg (errors) | `number` |  |  |  |
| Evaluation | BESS — Balance | `bessFirmSingle` | Firm — Single Leg (errors) | `number` |  |  |  |
| Evaluation | BESS — Balance | `bessFirmTandem` | Firm — Tandem (errors) | `number` |  |  |  |
| Evaluation | BESS — Balance | `bessFoamDouble` | Foam — Double Leg (errors) | `number` |  |  |  |
| Evaluation | BESS — Balance | `bessFoamSingle` | Foam — Single Leg (errors) | `number` |  |  |  |
| Evaluation | BESS — Balance | `bessFoamTandem` | Foam — Tandem (errors) | `number` |  |  |  |
| Evaluation | BESS — Balance | `bessTotalErrors` | BESS Total Errors | `number` |  |  |  |
| Evaluation | VOMS — Vestibulo-Ocular | `vomsSmootPursuitHorizontal` | Smooth Pursuit H — Symptom | `checkbox` |  |  |  |
| Evaluation | VOMS — Vestibulo-Ocular | `vomsSmoothPursuitVertical` | Smooth Pursuit V — Symptom | `checkbox` |  |  |  |
| Evaluation | VOMS — Vestibulo-Ocular | `vomsSaccadesHorizontalSymptom` | Saccades H — Symptom Provocation | `number` |  |  |  |
| Evaluation | VOMS — Vestibulo-Ocular | `vomsSaccadesVerticalSymptom` | Saccades V — Symptom Provocation | `number` |  |  |  |
| Evaluation | VOMS — Vestibulo-Ocular | `vomsVorHorizontalSymptom` | VOR H — Symptom | `number` |  |  |  |
| Evaluation | VOMS — Vestibulo-Ocular | `vomsVorVerticalSymptom` | VOR V — Symptom | `number` |  |  |  |
| Evaluation | VOMS — Vestibulo-Ocular | `vomsConvergenceNearPointCm` | Convergence Near Point (cm) | `number` |  |  |  |
| Evaluation | VOMS — Vestibulo-Ocular | `vomsAccommodationRightCm` | Accommodation Right (cm) | `number` |  |  |  |
| Evaluation | VOMS — Vestibulo-Ocular | `vomsAccommodationLeftCm` | Accommodation Left (cm) | `number` |  |  |  |
| Evaluation | VOMS — Vestibulo-Ocular | `vomsTotalSymptomScore` | VOMS Total Symptom Score | `number` |  |  |  |
| Evaluation | VOMS — Vestibulo-Ocular | `extraocularMovementIntact` | Extraocular Movement Intact | `checkbox` |  |  |  |
| Evaluation | VOMS — Vestibulo-Ocular | `convergenceInsufficiency` | Convergence Insufficiency | `checkbox` |  |  |  |
| Evaluation | Cervical & Cognitive | `cervicalPain` | Cervical Pain | `checkbox` |  |  |  |
| Evaluation | Cervical & Cognitive | `cervicalRomRestricted` | Cervical ROM Restricted | `checkbox` |  |  |  |
| Evaluation | Cervical & Cognitive | `cervicogenicComponentSuspected` | Cervicogenic Component | `checkbox` |  |  |  |
| Evaluation | Cervical & Cognitive | `cognitiveFatigueReported` | Cognitive Fatigue | `checkbox` |  |  |  |
| Evaluation | Cervical & Cognitive | `screenTimeToleranceMin` | Screen Tolerance (min) | `number` |  |  |  |
| Evaluation | Cervical & Cognitive | `readingToleranceMin` | Reading Tolerance (min) | `number` |  |  |  |
| Evaluation | Cervical & Cognitive | `schoolAttendance` | School Attendance | `text` |  |  |  |
| Evaluation | Return-to-Play Plan | `rtpStage` | RTP Stage | `select` |  |  |  |
| Evaluation | Return-to-Play Plan | `rtpStageClearedDate` | Stage Cleared Date | `date` |  |  |  |
| Evaluation | Return-to-Play Plan | `fullClearanceDate` | Full Clearance Date | `date` |  |  |  |
| Evaluation | Return-to-Play Plan | `clearedBy` | Cleared By | `text` |  |  |  |
| Evaluation | Return-to-Play Plan | `sessionsPlanned` | Sessions Planned | `number` |  |  |  |
| Evaluation | Return-to-Play Plan | `frequencyPerWeek` | Frequency (per week) | `number` |  |  |  |
| Evaluation | Return-to-Play Plan | `aerobicTolerance` | Aerobic Tolerance | `text` |  |  |  |
| Rehab Sessions | Rehab Session | `patientId` | Patient | `lookup` | Y |  |  |
| Rehab Sessions | Rehab Session | `sessionDate` | Session Date | `date` |  |  |  |
| Rehab Sessions | Rehab Session | `sessionNumber` | Session # | `number` |  |  |  |
| Rehab Sessions | Rehab Session | `clinician` | Clinician | `text` |  |  |  |
| Rehab Sessions | Rehab Session | `totalSymptomCountToday` | Symptom Count Today | `number` |  |  |  |
| Rehab Sessions | Rehab Session | `totalSeverityToday` | Severity Score Today | `number` |  |  |  |
| Rehab Sessions | Rehab Session | `rtpStageToday` | RTP Stage Today | `number` |  |  |  |
| Rehab Sessions | Rehab Session | `patientResponse` | Patient Response | `select` |  |  |  |

### Controlled Rx Policy — `controlled_rx_policy_cf`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Controlled Rx Policy | Policy | `policy_name` | Policy Name | `text` | Y |  |  |
| Controlled Rx Policy | Policy | `drug_schedule` | DEA Schedule | `select` |  |  |  |
| Controlled Rx Policy | Policy | `max_days_supply` | Max Days Supply | `number` |  |  |  |
| Controlled Rx Policy | Policy | `require_pdmp_check` | Require PDMP Check | `checkbox` |  |  |  |
| Controlled Rx Policy | Policy | `require_urine_screen` | Require Urine Screen | `checkbox` |  |  |  |
| Controlled Rx Policy | Policy | `notes` | Policy Notes | `textarea` |  |  |  |
| Controlled Rx Policy | Policy | `is_active` | Active | `checkbox` |  |  |  |

### DME Order — `dme_order_cf`

Screen: 1 page(s) · 4 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Durable Medical Equipment Order | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Durable Medical Equipment Order | Patient | `orderDate` | Order Date | `date` | Y |  |  |
| Durable Medical Equipment Order | Patient | `orderingProvider` | Ordering Provider | `typeahead` | Y |  |  |
| Durable Medical Equipment Order | Equipment | `dmeCategory` | DME Category | `select` | Y |  |  |
| Durable Medical Equipment Order | Equipment | `dmeSpecific` | Specific Item / Model | `text` |  |  |  |
| Durable Medical Equipment Order | Equipment | `hcpcsCode` | HCPCS Code | `text` |  |  |  |
| Durable Medical Equipment Order | Equipment | `quantity` | Quantity | `number` | Y |  |  |
| Durable Medical Equipment Order | Equipment | `rentalVsPurchase` | Rental vs. Purchase | `select` |  |  |  |
| Durable Medical Equipment Order | Medical Necessity | `primaryDx` | Primary Diagnosis (ICD-10) | `text` | Y |  |  |
| Durable Medical Equipment Order | Medical Necessity | `lengthOfNeed` | Length of Need | `select` | Y |  |  |
| Durable Medical Equipment Order | Medical Necessity | `medicalNecessityNarrative` | Medical Necessity Narrative | `textarea` | Y |  |  |
| Durable Medical Equipment Order | Supplier & Prior Auth | `dmeSupplier` | DME Supplier | `text` |  |  |  |
| Durable Medical Equipment Order | Supplier & Prior Auth | `priorAuthRequired` | Prior authorization required | `checkbox` |  |  |  |
| Durable Medical Equipment Order | Supplier & Prior Auth | `priorAuthNumber` | Prior Auth Number (if obtained) | `text` |  |  |  |

### DSME / Diabetes Education — `dsme_cf`

Screen: 2 page(s) · 10 section(s) · 81 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| DSME Program | Enrollment | `patientId` | Patient | `lookup` | Y |  |  |
| DSME Program | Enrollment | `referralDate` | Referral Date | `date` |  |  |  |
| DSME Program | Enrollment | `educator` | DSME Educator | `text` |  |  |  |
| DSME Program | Enrollment | `referringProvider` | Referring Provider | `text` |  |  |  |
| DSME Program | Enrollment | `programFormat` | Program Format | `select` |  |  |  |
| DSME Program | Enrollment | `programStatus` | Status | `select` |  |  |  |
| DSME Program | Enrollment | `sessionsPlanned` | Sessions Planned | `number` |  |  |  |
| DSME Program | Enrollment | `programStartDate` | Start Date | `date` |  |  |  |
| DSME Program | Enrollment | `programEndDate` | End Date | `date` |  |  |  |
| DSME Program | Diabetes Profile | `diabetesType` | Diabetes Type | `select` |  |  |  |
| DSME Program | Diabetes Profile | `diabetesDurationYears` | Duration (years) | `number` |  |  |  |
| DSME Program | Diabetes Profile | `a1cAtReferral` | A1c at Referral (%) | `number` |  |  |  |
| DSME Program | Diabetes Profile | `fastingGlucoseAtReferral` | Fasting Glucose (mg/dL) | `number` |  |  |  |
| DSME Program | Diabetes Profile | `timeInRangePercent` | Time in Range (%) | `number` |  |  |  |
| DSME Program | Diabetes Profile | `cgmUse` | CGM Use | `checkbox` |  |  |  |
| DSME Program | Diabetes Profile | `insulinUse` | Insulin Use | `checkbox` |  |  |  |
| DSME Program | Diabetes Profile | `insulinRegimen` | Insulin Regimen | `select` |  |  |  |
| DSME Program | Oral / Non-Insulin Agents | `metformin` | Metformin | `checkbox` |  |  |  |
| DSME Program | Oral / Non-Insulin Agents | `sglt2Inhibitor` | SGLT-2 Inhibitor | `checkbox` |  |  |  |
| DSME Program | Oral / Non-Insulin Agents | `glp1Agonist` | GLP-1 Agonist | `checkbox` |  |  |  |
| DSME Program | Oral / Non-Insulin Agents | `dpp4Inhibitor` | DPP-4 Inhibitor | `checkbox` |  |  |  |
| DSME Program | Oral / Non-Insulin Agents | `sulfonylurea` | Sulfonylurea | `checkbox` |  |  |  |
| DSME Program | Oral / Non-Insulin Agents | `thiazolidinedione` | Thiazolidinedione | `checkbox` |  |  |  |
| DSME Program | Comorbidities | `hypertension` | Hypertension | `checkbox` |  |  |  |
| DSME Program | Comorbidities | `dyslipidemia` | Dyslipidemia | `checkbox` |  |  |  |
| DSME Program | Comorbidities | `obesity` | Obesity | `checkbox` |  |  |  |
| DSME Program | Comorbidities | `ckd` | CKD | `checkbox` |  |  |  |
| DSME Program | Comorbidities | `ckdStage` | CKD Stage | `number` |  |  |  |
| DSME Program | Comorbidities | `cardiovascularDisease` | CVD | `checkbox` |  |  |  |
| DSME Program | Comorbidities | `peripheralNeuropathy` | Peripheral Neuropathy | `checkbox` |  |  |  |
| DSME Program | Comorbidities | `retinopathy` | Retinopathy | `checkbox` |  |  |  |
| DSME Program | Comorbidities | `dkaHistory` | DKA History | `checkbox` |  |  |  |
| DSME Program | Comorbidities | `hypoglycemiaHistory` | Hypoglycemia History | `checkbox` |  |  |  |
| DSME Program | Comorbidities | `bmi` | BMI | `number` |  |  |  |
| DSME Program | Psychosocial / Learning | `diabetesDistress` | Diabetes Distress | `checkbox` |  |  |  |
| DSME Program | Psychosocial / Learning | `diabetesDistressDds2Score` | DDS-2 Score | `number` |  |  |  |
| DSME Program | Psychosocial / Learning | `depression` | Depression | `checkbox` |  |  |  |
| DSME Program | Psychosocial / Learning | `phq9Score` | PHQ-9 Score | `number` |  |  |  |
| DSME Program | Psychosocial / Learning | `primaryLanguage` | Primary Language | `text` |  |  |  |
| DSME Program | Psychosocial / Learning | `requiresInterpreter` | Requires Interpreter | `checkbox` |  |  |  |
| DSME Program | Psychosocial / Learning | `literacyLevel` | Literacy Level | `select` |  |  |  |
| DSME Program | Psychosocial / Learning | `technologyComfort` | Technology Comfort | `select` |  |  |  |
| DSME Program | Goals & Outcomes | `a1cGoal` | A1c Goal (%) | `number` |  |  |  |
| DSME Program | Goals & Outcomes | `weightLossGoalLbs` | Weight Loss Goal (lbs) | `number` |  |  |  |
| DSME Program | Goals & Outcomes | `sessionsCompleted` | Sessions Completed | `number` |  |  |  |
| DSME Program | Goals & Outcomes | `a1cAtCompletion` | A1c at Completion (%) | `number` |  |  |  |
| DSME Program | Goals & Outcomes | `weightChangeLbs` | Weight Change (lbs) | `number` |  |  |  |
| DSME Program | Goals & Outcomes | `selfEfficacyChange` | Self-Efficacy Change | `select` |  |  |  |
| Sessions | Session Details | `patientId` | Patient | `lookup` | Y |  |  |
| Sessions | Session Details | `sessionDate` | Session Date | `date` |  |  |  |
| Sessions | Session Details | `sessionNumber` | Session # | `number` |  |  |  |
| Sessions | Session Details | `educator` | Educator | `text` |  |  |  |
| Sessions | Session Details | `sessionFormat` | Format | `select` |  |  |  |
| Sessions | Session Details | `sessionDurationMin` | Duration (min) | `number` |  |  |  |
| Sessions | Session Details | `bloodGlucoseToday` | BG Today (mg/dL) | `number` |  |  |  |
| Sessions | Session Details | `a1cToday` | A1c Today (%) | `number` |  |  |  |
| Sessions | Session Details | `weightTodayLbs` | Weight (lbs) | `number` |  |  |  |
| Sessions | ADA Core Topics | `topicDiabetesOverview` | Diabetes Overview | `checkbox` |  |  |  |
| Sessions | ADA Core Topics | `topicHealthyEating` | Healthy Eating | `checkbox` |  |  |  |
| Sessions | ADA Core Topics | `topicPhysicalActivity` | Physical Activity | `checkbox` |  |  |  |
| Sessions | ADA Core Topics | `topicMedications` | Medications | `checkbox` |  |  |  |
| Sessions | ADA Core Topics | `topicMonitoring` | Monitoring (BGM/CGM) | `checkbox` |  |  |  |
| Sessions | ADA Core Topics | `topicPreventingComplications` | Preventing Complications | `checkbox` |  |  |  |
| Sessions | ADA Core Topics | `topicProblemSolving` | Problem Solving | `checkbox` |  |  |  |
| Sessions | ADA Core Topics | `topicHealthyCoping` | Healthy Coping | `checkbox` |  |  |  |
| Sessions | ADA Core Topics | `topicReducingRisks` | Reducing Risks | `checkbox` |  |  |  |
| Sessions | ADA Core Topics | `topicStayingHealthy` | Staying Healthy | `checkbox` |  |  |  |
| Sessions | Clinical Skills | `hypoglycemiaTeaching` | Hypoglycemia Teaching | `checkbox` |  |  |  |
| Sessions | Clinical Skills | `ruleOf15Taught` | Rule of 15 Taught | `checkbox` |  |  |  |
| Sessions | Clinical Skills | `glucagonUseTaught` | Glucagon Use Taught | `checkbox` |  |  |  |
| Sessions | Clinical Skills | `footCareTeaching` | Foot Care Teaching | `checkbox` |  |  |  |
| Sessions | Clinical Skills | `footExamPerformed` | Foot Exam Performed | `checkbox` |  |  |  |
| Sessions | Clinical Skills | `monofilamentPerformed` | Monofilament Test | `checkbox` |  |  |  |
| Sessions | Clinical Skills | `insulinTechniqueReviewed` | Insulin Technique | `checkbox` |  |  |  |
| Sessions | Clinical Skills | `carbCountingIntro` | Carb Counting (Intro) | `checkbox` |  |  |  |
| Sessions | Clinical Skills | `carbCountingAdvanced` | Carb Counting (Advanced) | `checkbox` |  |  |  |
| Sessions | Action Plan | `actionPlanSet` | Action Plan Set | `checkbox` |  |  |  |
| Sessions | Action Plan | `actionPlanDetails` | Action Plan | `textarea` |  |  |  |
| Sessions | Action Plan | `patientConfidenceScale` | Patient Confidence (1-10) | `number` |  |  |  |
| Sessions | Action Plan | `nextSessionDate` | Next Session Date | `date` |  |  |  |
| Sessions | Action Plan | `notes` | Session Notes | `textarea` |  |  |  |

### Dermatology — `dermatology_cf`

Screen: 4 page(s) · 5 section(s) · 64 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lesion Catalog | Lesion | `patientId` | Patient | `lookup` | Y |  |  |
| Lesion Catalog | Lesion | `lesionLabel` | Lesion Label | `text` |  |  |  |
| Lesion Catalog | Lesion | `firstNotedDate` | First Noted | `date` |  |  |  |
| Lesion Catalog | Lesion | `lastEvaluatedDate` | Last Evaluated | `date` |  |  |  |
| Lesion Catalog | Lesion | `lesionType` | Lesion Type | `text` |  |  |  |
| Lesion Catalog | Lesion | `anatomicalSite` | Anatomical Site | `text` |  |  |  |
| Lesion Catalog | Lesion | `laterality` | Laterality | `select` |  |  |  |
| Lesion Catalog | Lesion | `sizeMm` | Size (mm) | `number` |  |  |  |
| Lesion Catalog | Lesion | `durationMonths` | Duration (months) | `number` |  |  |  |
| Lesion Catalog | ABCDE / Morphology | `morphology` | Morphology | `text` |  |  |  |
| Lesion Catalog | ABCDE / Morphology | `color` | Color | `text` |  |  |  |
| Lesion Catalog | ABCDE / Morphology | `border` | Border | `text` |  |  |  |
| Lesion Catalog | ABCDE / Morphology | `asymmetry` | Asymmetry (ABCDE-A) | `checkbox` |  |  |  |
| Lesion Catalog | ABCDE / Morphology | `abcdeScore` | ABCDE Total Score | `number` |  |  |  |
| Lesion Catalog | ABCDE / Morphology | `evolution` | Evolution / Change | `textarea` |  |  |  |
| Lesion Catalog | ABCDE / Morphology | `symptoms` | Symptoms (itch/bleed/pain) | `textarea` |  |  |  |
| Lesion Catalog | ABCDE / Morphology | `clinicalImpression` | Clinical Impression | `text` |  |  |  |
| Lesion Catalog | ABCDE / Morphology | `status` | Status | `select` |  |  |  |
| Lesion Catalog | ABCDE / Morphology | `notes` | Notes | `textarea` |  |  |  |
| Biopsies | Biopsy | `patientId` | Patient | `lookup` | Y |  |  |
| Biopsies | Biopsy | `biopsyDate` | Biopsy Date | `date` |  |  |  |
| Biopsies | Biopsy | `biopsyType` | Biopsy Type | `select` |  |  |  |
| Biopsies | Biopsy | `anatomicalSite` | Anatomical Site | `text` |  |  |  |
| Biopsies | Biopsy | `laterality` | Laterality | `text` |  |  |  |
| Biopsies | Biopsy | `specimenLabel` | Specimen Label | `text` |  |  |  |
| Biopsies | Biopsy | `performingProvider` | Performing Provider | `text` |  |  |  |
| Biopsies | Biopsy | `labName` | Lab Name | `text` |  |  |  |
| Biopsies | Biopsy | `accessionNumber` | Accession # | `text` |  |  |  |
| Biopsies | Biopsy | `pathResultDate` | Path Result Date | `date` |  |  |  |
| Biopsies | Biopsy | `pathologicalDiagnosis` | Pathological Diagnosis | `textarea` |  |  |  |
| Biopsies | Biopsy | `marginStatus` | Margin Status | `select` |  |  |  |
| Biopsies | Biopsy | `breslowThickness` | Breslow Thickness (mm) | `number` |  |  |  |
| Biopsies | Biopsy | `clarkLevel` | Clark Level (I-V) | `number` |  |  |  |
| Biopsies | Biopsy | `ulceration` | Ulceration | `checkbox` |  |  |  |
| Biopsies | Biopsy | `resultSummary` | Result Summary | `textarea` |  |  |  |
| Biopsies | Biopsy | `followUpPlan` | Follow-Up Plan | `textarea` |  |  |  |
| Phototherapy | Phototherapy Session | `patientId` | Patient | `lookup` | Y |  |  |
| Phototherapy | Phototherapy Session | `sessionDate` | Date | `date` |  |  |  |
| Phototherapy | Phototherapy Session | `therapyType` | Therapy Type | `select` |  |  |  |
| Phototherapy | Phototherapy Session | `sessionNumber` | Session # | `number` |  |  |  |
| Phototherapy | Phototherapy Session | `doseMjCm2` | Dose (mJ/cm²) | `number` |  |  |  |
| Phototherapy | Phototherapy Session | `exposureSeconds` | Exposure (sec) | `number` |  |  |  |
| Phototherapy | Phototherapy Session | `bodyAreasTreated` | Body Areas Treated | `text` |  |  |  |
| Phototherapy | Phototherapy Session | `erythemaResponse` | Erythema Response | `select` |  |  |  |
| Phototherapy | Phototherapy Session | `nextDoseMjCm2` | Next Dose (mJ/cm²) | `number` |  |  |  |
| Phototherapy | Phototherapy Session | `administeredBy` | Administered By | `text` |  |  |  |
| Phototherapy | Phototherapy Session | `adverseReaction` | Adverse Reaction | `text` |  |  |  |
| Wound Care | Wound Assessment | `patientId` | Patient | `lookup` | Y |  |  |
| Wound Care | Wound Assessment | `assessmentDate` | Date | `date` |  |  |  |
| Wound Care | Wound Assessment | `woundLabel` | Wound Label | `text` |  |  |  |
| Wound Care | Wound Assessment | `woundType` | Wound Type | `text` |  |  |  |
| Wound Care | Wound Assessment | `anatomicalSite` | Anatomical Site | `text` |  |  |  |
| Wound Care | Wound Assessment | `lengthCm` | Length (cm) | `number` |  |  |  |
| Wound Care | Wound Assessment | `widthCm` | Width (cm) | `number` |  |  |  |
| Wound Care | Wound Assessment | `depthCm` | Depth (cm) | `number` |  |  |  |
| Wound Care | Wound Assessment | `woundBed` | Wound Bed | `text` |  |  |  |
| Wound Care | Wound Assessment | `exudateAmount` | Exudate Amount | `select` |  |  |  |
| Wound Care | Wound Assessment | `exudateType` | Exudate Type | `text` |  |  |  |
| Wound Care | Wound Assessment | `periwound` | Periwound | `text` |  |  |  |
| Wound Care | Wound Assessment | `healingProgress` | Healing Progress | `select` |  |  |  |
| Wound Care | Wound Assessment | `dressingType` | Dressing Type | `text` |  |  |  |
| Wound Care | Wound Assessment | `treatmentApplied` | Treatment Applied | `textarea` |  |  |  |
| Wound Care | Wound Assessment | `painScore` | Pain Score (0-10) | `number` |  |  |  |
| Wound Care | Wound Assessment | `assessedBy` | Assessed By | `text` |  |  |  |

### Dermatology Visit — `dermatology_visit_cf`

Screen: 1 page(s) · 3 section(s) · 22 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dermatology / Skin Evaluation | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Dermatology / Skin Evaluation | Patient & Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Dermatology / Skin Evaluation | Patient & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| Dermatology / Skin Evaluation | Patient & Visit | `visitReason` | Visit Reason | `select` | Y |  |  |
| Dermatology / Skin Evaluation | Skin Lesion Description | `lesionLocation` | Lesion Location | `text` |  |  |  |
| Dermatology / Skin Evaluation | Skin Lesion Description | `lesionType` | Primary Lesion Type | `select` |  |  |  |
| Dermatology / Skin Evaluation | Skin Lesion Description | `lesionSize` | Lesion Size (mm x mm) | `text` |  |  |  |
| Dermatology / Skin Evaluation | Skin Lesion Description | `lesionColor` | Color | `text` |  |  |  |
| Dermatology / Skin Evaluation | Skin Lesion Description | `lesionBorder` | Border | `select` |  |  |  |
| Dermatology / Skin Evaluation | Skin Lesion Description | `abcde` | ABCDE Melanoma Assessment | `textarea` |  |  |  |
| Dermatology / Skin Evaluation | Skin Lesion Description | `symptomsPruritus` | Pruritus (itching) present | `checkbox` |  |  |  |
| Dermatology / Skin Evaluation | Skin Lesion Description | `symptomsPain` | Pain or tenderness present | `checkbox` |  |  |  |
| Dermatology / Skin Evaluation | Skin Lesion Description | `durationLesion` | Duration | `text` |  |  |  |
| Dermatology / Skin Evaluation | Assessment & Treatment | `dermDx` | Diagnosis (ICD-10) | `typeahead` | Y |  |  |
| Dermatology / Skin Evaluation | Assessment & Treatment | `dermClinicalImpression` | Clinical Impression | `textarea` |  |  |  |
| Dermatology / Skin Evaluation | Assessment & Treatment | `biopsyPerformed` | Skin biopsy performed | `checkbox` |  |  |  |
| Dermatology / Skin Evaluation | Assessment & Treatment | `biopsyType` | Biopsy Type | `select` |  |  |  |
| Dermatology / Skin Evaluation | Assessment & Treatment | `biopsySentTo` | Biopsy Sent To | `text` |  |  |  |
| Dermatology / Skin Evaluation | Assessment & Treatment | `procedurePerformedDerm` | In-Office Procedure | `select` |  |  |  |
| Dermatology / Skin Evaluation | Assessment & Treatment | `topicalRx` | Topical Medications Prescribed | `textarea` |  |  |  |
| Dermatology / Skin Evaluation | Assessment & Treatment | `oralRx` | Oral Medications Prescribed | `textarea` |  |  |  |
| Dermatology / Skin Evaluation | Assessment & Treatment | `nextDermVisit` | Next Visit | `select` |  |  |  |

### Diabetes Mgmt — `diabetes_management_cf`

Screen: 1 page(s) · 4 section(s) · 25 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Diabetes Management Visit | Visit Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Diabetes Management Visit | Visit Details | `visitDate` | Visit Date | `date` | Y |  |  |
| Diabetes Management Visit | Visit Details | `diabetesType` | Diabetes Type | `select` | Y |  |  |
| Diabetes Management Visit | Visit Details | `yearsDiagnosed` | Years Since Diagnosis | `number` |  |  |  |
| Diabetes Management Visit | Glycemic Control | `a1cValue` | HbA1c (%) | `number` | Y |  |  |
| Diabetes Management Visit | Glycemic Control | `a1cDate` | A1C Date | `date` | Y |  |  |
| Diabetes Management Visit | Glycemic Control | `a1cGoal` | A1C Goal (%) | `number` |  |  |  |
| Diabetes Management Visit | Glycemic Control | `fastingGlucose` | Fasting Glucose (mg/dL) | `number` |  |  |  |
| Diabetes Management Visit | Glycemic Control | `homeMonitoring` | Home Glucose Monitoring | `select` |  |  |  |
| Diabetes Management Visit | Glycemic Control | `averageGlucose` | Average Glucose (from monitor/CGM) mg/dL | `number` |  |  |  |
| Diabetes Management Visit | Glycemic Control | `timeInRange` | Time in Range % (CGM) | `number` |  |  |  |
| Diabetes Management Visit | Glycemic Control | `hypoglycemiaEpisodes` | Hypoglycemia Episodes (since last visit) | `select` |  |  |  |
| Diabetes Management Visit | Complication Screening | `microalbuminuria` | Urine Albumin-to-Creatinine Ratio (UACR) | `select` |  |  |  |
| Diabetes Management Visit | Complication Screening | `creatinine` | Creatinine / eGFR | `number` |  |  |  |
| Diabetes Management Visit | Complication Screening | `diabeticEyeExam` | Dilated Eye Exam | `select` |  |  |  |
| Diabetes Management Visit | Complication Screening | `footExam` | Comprehensive Foot Exam | `select` |  |  |  |
| Diabetes Management Visit | Complication Screening | `footExamFindings` | Foot Exam Findings | `textarea` |  |  |  |
| Diabetes Management Visit | Complication Screening | `dentalReferral` | Dental referral encouraged (periodontal disease risk) | `checkbox` |  |  |  |
| Diabetes Management Visit | Complication Screening | `statin` | Statin Therapy | `select` |  |  |  |
| Diabetes Management Visit | Medication Review | `insulinRegimen` | Insulin Regimen (if applicable) | `textarea` |  |  |  |
| Diabetes Management Visit | Medication Review | `oralMeds` | Oral / Injectable Medications | `textarea` |  |  |  |
| Diabetes Management Visit | Medication Review | `medicationChanges` | Medication Changes Today | `textarea` |  |  |  |
| Diabetes Management Visit | Medication Review | `hypoglycemiaPlan` | Hypoglycemia Treatment Plan | `textarea` |  |  |  |
| Diabetes Management Visit | Medication Review | `glucagonRx` | Glucagon / Nasal glucagon prescribed | `checkbox` |  |  |  |
| Diabetes Management Visit | Medication Review | `diabetesNotes` | Diabetes Management Notes | `textarea` |  |  |  |

### Diabetes Visit — `diabetes_visit_cf`

Screen: 1 page(s) · 5 section(s) · 33 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Diabetes Management Visit | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Diabetes Management Visit | Patient & Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Diabetes Management Visit | Patient & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| Diabetes Management Visit | Patient & Visit | `dmType` | Diabetes Type | `select` | Y |  |  |
| Diabetes Management Visit | Patient & Visit | `yearsDiagnosed` | Years Since Diagnosis | `number` |  |  |  |
| Diabetes Management Visit | Lab Results | `hba1c` | HbA1c (%) | `number` |  |  |  |
| Diabetes Management Visit | Lab Results | `hba1cDate` | HbA1c Date | `date` |  |  |  |
| Diabetes Management Visit | Lab Results | `hba1cTrend` | HbA1c Trend vs Last | `select` |  |  |  |
| Diabetes Management Visit | Lab Results | `fastingGlucose` | Fasting Glucose (mg/dL) | `number` |  |  |  |
| Diabetes Management Visit | Lab Results | `ldl` | LDL (mg/dL) | `number` |  |  |  |
| Diabetes Management Visit | Lab Results | `triglycerides` | Triglycerides (mg/dL) | `number` |  |  |  |
| Diabetes Management Visit | Lab Results | `creatinine` | Creatinine (mg/dL) | `number` |  |  |  |
| Diabetes Management Visit | Lab Results | `egfr` | eGFR (mL/min/1.73m2) | `number` |  |  |  |
| Diabetes Management Visit | Lab Results | `uacr` | Urine Albumin/Creatinine Ratio (mg/g) | `number` |  |  |  |
| Diabetes Management Visit | Lab Results | `uacrCategory` | UACR Category | `select` |  |  |  |
| Diabetes Management Visit | Lab Results | `tsh` | TSH (Type 1 and females — annual) | `number` |  |  |  |
| Diabetes Management Visit | Home Glucose Monitoring | `smbgFreq` | SMBG / CGM Monitoring Frequency | `select` |  |  |  |
| Diabetes Management Visit | Home Glucose Monitoring | `typicalFastingRange` | Typical Fasting BG Range | `text` |  |  |  |
| Diabetes Management Visit | Home Glucose Monitoring | `typicalPostmealRange` | Typical Post-Meal BG Range | `text` |  |  |  |
| Diabetes Management Visit | Home Glucose Monitoring | `hypoglycemiaFreq` | Hypoglycemia Frequency | `select` |  |  |  |
| Diabetes Management Visit | Home Glucose Monitoring | `hypoglycemiaUnawareness` | Hypoglycemia unawareness reported | `checkbox` |  |  |  |
| Diabetes Management Visit | Diabetes Complications Review | `retinalExamDate` | Last Retinal Exam Date | `date` |  |  |  |
| Diabetes Management Visit | Diabetes Complications Review | `retinalResult` | Retinal Exam Result | `select` |  |  |  |
| Diabetes Management Visit | Diabetes Complications Review | `neuropathyScreened` | Peripheral neuropathy screened (monofilament/vibration) | `checkbox` |  |  |  |
| Diabetes Management Visit | Diabetes Complications Review | `neuropathyPresent` | Peripheral neuropathy detected | `checkbox` |  |  |  |
| Diabetes Management Visit | Diabetes Complications Review | `footExam` | Foot Exam | `select` |  |  |  |
| Diabetes Management Visit | Diabetes Complications Review | `lastFootExamDate` | Last Foot Exam Date | `date` |  |  |  |
| Diabetes Management Visit | Diabetes Complications Review | `dentalExam` | Dental Exam (annual) | `select` |  |  |  |
| Diabetes Management Visit | Medications & Plan | `oralMeds` | Current Diabetes Oral/Injectable Medications | `textarea` |  |  |  |
| Diabetes Management Visit | Medications & Plan | `insulinRegimen` | Insulin Regimen (if applicable) | `textarea` |  |  |  |
| Diabetes Management Visit | Medications & Plan | `medicationChanges` | Medication Changes This Visit | `textarea` |  |  |  |
| Diabetes Management Visit | Medications & Plan | `dmGoal` | Individualized HbA1c Goal | `text` |  |  |  |
| Diabetes Management Visit | Medications & Plan | `nextDmVisit` | Next DM Visit Interval | `select` |  |  |  |

### Diabetic Foot Care — `diabetic_foot_care_cf`

Screen: 1 page(s) · 5 section(s) · 24 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Diabetic Foot Examination | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Diabetic Foot Examination | Patient | `examDate` | Exam Date | `date` | Y |  |  |
| Diabetic Foot Examination | Patient | `provider` | Provider | `typeahead` | Y |  |  |
| Diabetic Foot Examination | Patient | `diabetesType` | Diabetes Type | `select` |  |  |  |
| Diabetic Foot Examination | Patient | `a1cRecent` | Most Recent A1C (%) | `number` |  |  |  |
| Diabetic Foot Examination | Patient | `diabetesDuration` | Duration of Diabetes | `text` |  |  |  |
| Diabetic Foot Examination | Neurological Assessment | `monofilamentLeft` | Monofilament (10g) — Left Foot | `select` | Y |  |  |
| Diabetic Foot Examination | Neurological Assessment | `monofilamentRight` | Monofilament (10g) — Right Foot | `select` | Y |  |  |
| Diabetic Foot Examination | Neurological Assessment | `vibrationLeft` | Vibration (128Hz tuning fork) — Left | `select` | Y |  |  |
| Diabetic Foot Examination | Neurological Assessment | `vibrationRight` | Vibration (128Hz tuning fork) — Right | `select` | Y |  |  |
| Diabetic Foot Examination | Neurological Assessment | `reflexesAchilles` | Achilles Reflexes | `select` |  |  |  |
| Diabetic Foot Examination | Vascular Assessment | `dpPulseLeft` | Dorsalis Pedis Pulse — Left | `select` | Y |  |  |
| Diabetic Foot Examination | Vascular Assessment | `dpPulseRight` | Dorsalis Pedis Pulse — Right | `select` | Y |  |  |
| Diabetic Foot Examination | Vascular Assessment | `ptPulseLeft` | Posterior Tibial Pulse — Left | `select` | Y |  |  |
| Diabetic Foot Examination | Vascular Assessment | `ptPulseRight` | Posterior Tibial Pulse — Right | `select` | Y |  |  |
| Diabetic Foot Examination | Vascular Assessment | `abiPerformed` | Ankle-Brachial Index (ABI) performed | `checkbox` |  |  |  |
| Diabetic Foot Examination | Vascular Assessment | `abiLeft` | ABI Left | `number` |  |  |  |
| Diabetic Foot Examination | Vascular Assessment | `abiRight` | ABI Right | `number` |  |  |  |
| Diabetic Foot Examination | Skin / Structural | `skinColor` | Skin Color | `select` |  |  |  |
| Diabetic Foot Examination | Skin / Structural | `skinIntegrity` | Skin Integrity | `select` | Y |  |  |
| Diabetic Foot Examination | Skin / Structural | `ulcerDescription` | Wound / Ulcer Details (if present) | `textarea` |  |  |  |
| Diabetic Foot Examination | Skin / Structural | `footDeformity` | Structural Deformities / Nail Changes | `textarea` |  |  |  |
| Diabetic Foot Examination | Risk Classification & Plan | `iwgdfRisk` | IWGDF Risk Category | `select` | Y |  |  |
| Diabetic Foot Examination | Risk Classification & Plan | `footCarePlan` | Foot Care Plan | `textarea` | Y |  |  |

### Diabetic Foot Exam — `diabetes_foot_exam_cf`

Screen: 1 page(s) · 5 section(s) · 26 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Comprehensive Diabetic Foot Exam | Patient & Exam Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Comprehensive Diabetic Foot Exam | Patient & Exam Context | `examDate` | Exam Date | `date` | Y |  |  |
| Comprehensive Diabetic Foot Exam | Patient & Exam Context | `lastHbA1c` | Most Recent HbA1c (%) | `number` |  |  |  |
| Comprehensive Diabetic Foot Exam | Patient & Exam Context | `lastHbA1cDate` | HbA1c Date | `date` |  |  |  |
| Comprehensive Diabetic Foot Exam | Patient & Exam Context | `diabetesDuration` | Duration of Diabetes (years) | `number` |  |  |  |
| Comprehensive Diabetic Foot Exam | Patient & Exam Context | `diabetesType` | Diabetes Type | `select` |  |  |  |
| Comprehensive Diabetic Foot Exam | Visual Inspection | `skinIntegrity` | Skin Integrity | `select` | Y |  |  |
| Comprehensive Diabetic Foot Exam | Visual Inspection | `ulcerDescription` | Ulcer / Wound Description (if any) | `textarea` |  |  |  |
| Comprehensive Diabetic Foot Exam | Visual Inspection | `nailCondition` | Nail Condition | `select` |  |  |  |
| Comprehensive Diabetic Foot Exam | Visual Inspection | `deformities` | Structural Deformities | `select` |  |  |  |
| Comprehensive Diabetic Foot Exam | Visual Inspection | `footwearAssessed` | Footwear inspected | `checkbox` |  |  |  |
| Comprehensive Diabetic Foot Exam | Visual Inspection | `footwearNotes` | Footwear Notes | `text` |  |  |  |
| Comprehensive Diabetic Foot Exam | Neurological Assessment | `monofil10g` | 10g Monofilament (Semmes-Weinstein) | `select` | Y |  |  |
| Comprehensive Diabetic Foot Exam | Neurological Assessment | `monofil10gRSites` | Right Foot Sites Detected (#/4) | `text` |  |  |  |
| Comprehensive Diabetic Foot Exam | Neurological Assessment | `monofil10gLSites` | Left Foot Sites Detected (#/4) | `text` |  |  |  |
| Comprehensive Diabetic Foot Exam | Neurological Assessment | `vibrationPerception` | 128Hz Tuning Fork — Vibration | `select` |  |  |  |
| Comprehensive Diabetic Foot Exam | Neurological Assessment | `ankleReflexes` | Ankle Reflexes | `select` |  |  |  |
| Comprehensive Diabetic Foot Exam | Vascular Assessment | `dpPulseRight` | Dorsalis Pedis Pulse — Right | `select` |  |  |  |
| Comprehensive Diabetic Foot Exam | Vascular Assessment | `dpPulseLeft` | Dorsalis Pedis Pulse — Left | `select` |  |  |  |
| Comprehensive Diabetic Foot Exam | Vascular Assessment | `ptPulseRight` | Posterior Tibial Pulse — Right | `select` |  |  |  |
| Comprehensive Diabetic Foot Exam | Vascular Assessment | `ptPulseLeft` | Posterior Tibial Pulse — Left | `select` |  |  |  |
| Comprehensive Diabetic Foot Exam | Vascular Assessment | `capillaryRefill` | Capillary Refill | `select` |  |  |  |
| Comprehensive Diabetic Foot Exam | Vascular Assessment | `abi` | ABI (Ankle-Brachial Index) — if measured | `number` |  |  |  |
| Comprehensive Diabetic Foot Exam | Risk Classification & Plan | `riskCategory` | IWGDF Risk Classification | `select` | Y |  |  |
| Comprehensive Diabetic Foot Exam | Risk Classification & Plan | `referrals` | Referrals / Orders | `textarea` |  |  |  |
| Comprehensive Diabetic Foot Exam | Risk Classification & Plan | `educationProvided` | Foot care education provided (inspect daily, moisturize excluding between toes, appropriate footwear) | `checkbox` |  |  |  |

### Diagnostic Orders — `diagnostic_orders_cf`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Order Details | Order Information | `orderType` | Order Type | `text` |  | orderType |  |
| Order Details | Order Information | `orderCode` | Order Code | `text` |  | orderCode |  |
| Order Details | Order Information | `clinicalReason` | Clinical Reason | `text` |  | clinicalReason |  |
| Order Details | Order Information | `orderedDate` | Ordered Date | `text` |  | orderedDate |  |
| Order Details | Order Information | `priority` | Priority | `text` |  | priority |  |
| Order Details | Order Information | `orderingProviderId` | Ordering Provider | `text` |  | orderingProviderId |  |
| Order Details | Order Information | `sourceEncounterId` | Encounter ID | `text` |  | sourceEncounterId |  |
| Order Details | Order Information | `patientId` | Patient ID | `text` |  | patientId |  |

### Discharge Instructions — `discharge_instructions_cf`

Screen: 1 page(s) · 4 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Post-Visit / Discharge Instructions | Patient & Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Post-Visit / Discharge Instructions | Patient & Context | `encounterId` | Encounter ID | `text` |  |  |  |
| Post-Visit / Discharge Instructions | Patient & Context | `dischargeDate` | Discharge Date | `date` | Y |  |  |
| Post-Visit / Discharge Instructions | Patient & Context | `dischargingProvider` | Discharging Provider | `typeahead` | Y |  |  |
| Post-Visit / Discharge Instructions | Patient & Context | `dischargeCondition` | Condition at Discharge | `select` |  |  |  |
| Post-Visit / Discharge Instructions | Diagnosis & Instructions | `dischargeDiagnosis` | Discharge Diagnosis | `text` | Y |  |  |
| Post-Visit / Discharge Instructions | Diagnosis & Instructions | `activityRestrictions` | Activity Restrictions | `textarea` |  |  |  |
| Post-Visit / Discharge Instructions | Diagnosis & Instructions | `dietInstructions` | Diet Instructions | `textarea` |  |  |  |
| Post-Visit / Discharge Instructions | Diagnosis & Instructions | `woundCareInstructions` | Wound / Procedure Site Care | `textarea` |  |  |  |
| Post-Visit / Discharge Instructions | Medications & Prescriptions | `newMedications` | New / Changed Medications | `textarea` | Y |  |  |
| Post-Visit / Discharge Instructions | Medications & Prescriptions | `continuedMedications` | Continue Home Medications | `textarea` |  |  |  |
| Post-Visit / Discharge Instructions | Medications & Prescriptions | `stoppedMedications` | Medications to STOP | `textarea` |  |  |  |
| Post-Visit / Discharge Instructions | Follow-Up & Warning Signs | `followUpDate` | Follow-Up Appointment Date | `date` |  |  |  |
| Post-Visit / Discharge Instructions | Follow-Up & Warning Signs | `followUpProvider` | Follow-Up With | `text` |  |  |  |
| Post-Visit / Discharge Instructions | Follow-Up & Warning Signs | `warningSignsReturnEd` | Warning Signs — Return to ED Immediately | `textarea` | Y |  |  |
| Post-Visit / Discharge Instructions | Follow-Up & Warning Signs | `warningSignsCallOffice` | Warning Signs — Call the Office | `textarea` |  |  |  |
| Post-Visit / Discharge Instructions | Follow-Up & Warning Signs | `instructionsGiven` | Written discharge instructions given to patient / family | `checkbox` |  |  |  |
| Post-Visit / Discharge Instructions | Follow-Up & Warning Signs | `patientUnderstands` | Patient / family verbalized understanding of instructions | `checkbox` |  |  |  |
| Post-Visit / Discharge Instructions | Follow-Up & Warning Signs | `instructionsLanguage` | Instructions Language | `select` |  |  |  |
