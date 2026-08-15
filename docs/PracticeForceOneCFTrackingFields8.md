---
title: "PracticeForceOneCFTrackingFields8"
---

# CF Tracking — Field-Level Detail (part 8 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Clinical**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Clinical

### Neurosurgery — `neurosurgery_cf`

Screen: 3 page(s) · 8 section(s) · 89 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Consult | Consult | `patientId` | Patient | `lookup` | Y |  |  |
| Consult | Consult | `consultDate` | Date | `date` |  |  |  |
| Consult | Consult | `referralSource` | Referral Source | `text` |  |  |  |
| Consult | Consult | `urgency` | Urgency | `select` |  |  |  |
| Consult | Consult | `chiefComplaint` | Chief Complaint | `text` |  |  |  |
| Consult | Consult | `encounterId` | Encounter ID | `text` |  |  |  |
| Consult | Symptoms | `headache` | Headache | `checkbox` |  |  |  |
| Consult | Symptoms | `headacheLocation` | Headache Location | `text` |  |  |  |
| Consult | Symptoms | `headacheSeverity` | Headache Severity (0-10) | `number` |  |  |  |
| Consult | Symptoms | `seizures` | Seizures | `checkbox` |  |  |  |
| Consult | Symptoms | `seizureType` | Seizure Type | `text` |  |  |  |
| Consult | Symptoms | `lastSeizureDate` | Last Seizure Date | `date` |  |  |  |
| Consult | Symptoms | `focalDeficit` | Focal Deficit | `checkbox` |  |  |  |
| Consult | Symptoms | `deficitDescription` | Deficit Description | `text` |  |  |  |
| Consult | Symptoms | `visualChanges` | Visual Changes | `checkbox` |  |  |  |
| Consult | Symptoms | `speechChanges` | Speech Changes | `checkbox` |  |  |  |
| Consult | Symptoms | `cognitiveChanges` | Cognitive Changes | `checkbox` |  |  |  |
| Consult | Symptoms | `syncope` | Syncope | `checkbox` |  |  |  |
| Consult | Neurologic Examination | `gcsE` | GCS Eyes (1-4) | `number` |  |  |  |
| Consult | Neurologic Examination | `gcsV` | GCS Verbal (1-5) | `number` |  |  |  |
| Consult | Neurologic Examination | `gcsM` | GCS Motor (1-6) | `number` |  |  |  |
| Consult | Neurologic Examination | `gcsTotal` | GCS Total | `number` |  |  |  |
| Consult | Neurologic Examination | `mmseScore` | MMSE Score | `number` |  |  |  |
| Consult | Neurologic Examination | `mocaScore` | MoCA Score | `number` |  |  |  |
| Consult | Neurologic Examination | `karnofskyScore` | Karnofsky Score | `number` |  |  |  |
| Consult | Neurologic Examination | `ecogStatus` | ECOG Status (0-4) | `number` |  |  |  |
| Consult | Neurologic Examination | `motorRightUpper` | Motor R-Upper (0-5) | `number` |  |  |  |
| Consult | Neurologic Examination | `motorLeftUpper` | Motor L-Upper (0-5) | `number` |  |  |  |
| Consult | Neurologic Examination | `motorRightLower` | Motor R-Lower (0-5) | `number` |  |  |  |
| Consult | Neurologic Examination | `motorLeftLower` | Motor L-Lower (0-5) | `number` |  |  |  |
| Consult | Imaging Review | `ctHeadDone` | CT Head Done | `checkbox` |  |  |  |
| Consult | Imaging Review | `ctHeadFindings` | CT Findings | `text` |  |  |  |
| Consult | Imaging Review | `ctMidlineShiftMm` | CT Midline Shift (mm) | `number` |  |  |  |
| Consult | Imaging Review | `mriBrainDone` | MRI Brain Done | `checkbox` |  |  |  |
| Consult | Imaging Review | `mriBrainFindings` | MRI Brain Findings | `text` |  |  |  |
| Consult | Imaging Review | `mriLesionSizeCm` | Lesion Size (cm) | `number` |  |  |  |
| Consult | Imaging Review | `mriLesionLocation` | Lesion Location | `text` |  |  |  |
| Consult | Imaging Review | `mriEnhancement` | Enhancement | `checkbox` |  |  |  |
| Consult | Imaging Review | `mriMassEffect` | Mass Effect | `checkbox` |  |  |  |
| Consult | Imaging Review | `mriSpineDone` | MRI Spine Done | `checkbox` |  |  |  |
| Consult | Imaging Review | `mriSpineFindings` | MRI Spine Findings | `text` |  |  |  |
| Consult | Imaging Review | `mriCordCompression` | Cord Compression | `checkbox` |  |  |  |
| Consult | Imaging Review | `ctaDone` | CTA Done | `checkbox` |  |  |  |
| Consult | Imaging Review | `ctaFindings` | CTA Findings | `text` |  |  |  |
| Consult | Imaging Review | `dsaDone` | DSA Done | `checkbox` |  |  |  |
| Consult | Imaging Review | `dsaFindings` | DSA Findings | `text` |  |  |  |
| Consult | Diagnosis | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| Consult | Diagnosis | `lesionLocation` | Lesion Location | `text` |  |  |  |
| Consult | Diagnosis | `whoGrade` | WHO Grade | `select` |  |  |  |
| Consult | Diagnosis | `idhStatus` | IDH Status | `select` |  |  |  |
| Consult | Diagnosis | `mgmtStatus` | MGMT Status | `select` |  |  |  |
| Consult | Surgical Plan | `surgeryRecommended` | Surgery Recommended | `checkbox` |  |  |  |
| Consult | Surgical Plan | `procedurePlanned` | Procedure Planned | `text` |  |  |  |
| Consult | Surgical Plan | `surgicalApproach` | Approach | `text` |  |  |  |
| Consult | Surgical Plan | `awakeCraniotomyPlanned` | Awake Craniotomy Planned | `checkbox` |  |  |  |
| Consult | Surgical Plan | `navigationPlanned` | Navigation Planned | `checkbox` |  |  |  |
| Consult | Surgical Plan | `icuPostOp` | ICU Post-Op | `checkbox` |  |  |  |
| Consult | Surgical Plan | `estimatedDurationHrs` | Estimated Duration (hrs) | `number` |  |  |  |
| Consult | Surgical Plan | `consentObtained` | Consent Obtained | `checkbox` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `patientId` | Patient | `lookup` | Y |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `procedureDate` | Procedure Date | `date` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `procedureType` | Procedure Type | `select` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `approach` | Approach | `text` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `positioning` | Positioning | `text` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `navigationUsed` | Navigation Used | `checkbox` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `navigationSystem` | Navigation System | `text` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `navigationAccuracyMm` | Navigation Accuracy (mm) | `number` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `awakeCraniotomy` | Awake Craniotomy | `checkbox` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `awaketolerated` | Awake Tolerated | `checkbox` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `iomSsepChanges` | IOM SSEP Changes | `checkbox` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `iomMepChanges` | IOM MEP Changes | `checkbox` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `iomLanguageErrors` | IOM Language Errors | `checkbox` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `tumorType` | Tumor Type | `text` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `extentOfResection` | Extent of Resection | `select` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `grossTotalResection` | GTR Confirmed | `checkbox` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `aneurysmLocation` | Aneurysm Location | `text` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `clipType` | Clip Type | `text` |  |  |  |
| Craniotomy Procedures | Craniotomy Procedure | `clipSizeMm` | Clip Size (mm) | `number` |  |  |  |
| Spine Procedures | Spine Procedure | `patientId` | Patient | `lookup` | Y |  |  |
| Spine Procedures | Spine Procedure | `procedureDate` | Procedure Date | `date` |  |  |  |
| Spine Procedures | Spine Procedure | `procedureType` | Procedure Type | `select` |  |  |  |
| Spine Procedures | Spine Procedure | `spinalRegion` | Spinal Region | `select` |  |  |  |
| Spine Procedures | Spine Procedure | `primaryLevel` | Primary Level (e.g. L4-L5) | `text` |  |  |  |
| Spine Procedures | Spine Procedure | `approach` | Approach | `text` |  |  |  |
| Spine Procedures | Spine Procedure | `instrumented` | Instrumented | `checkbox` |  |  |  |
| Spine Procedures | Spine Procedure | `levelsInstrumented` | Levels Instrumented | `number` |  |  |  |
| Spine Procedures | Spine Procedure | `estimatedBloodLossMl` | EBL (mL) | `number` |  |  |  |
| Spine Procedures | Spine Procedure | `fluoroscopyUsed` | Fluoroscopy Used | `checkbox` |  |  |  |
| Spine Procedures | Spine Procedure | `procedureNotes` | Procedure Notes | `textarea` |  |  |  |

### New Patient/Consult Note — `new_patient_consult_cf`

Screen: 1 page(s) · 4 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| New Patient / Consultation Visit Note | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| New Patient / Consultation Visit Note | Patient & Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| New Patient / Consultation Visit Note | Patient & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| New Patient / Consultation Visit Note | Patient & Visit | `visitType` | Visit Type | `select` | Y |  |  |
| New Patient / Consultation Visit Note | Patient & Visit | `referralSource` | Referred By | `text` |  |  |  |
| New Patient / Consultation Visit Note | History of Present Illness (HPI) | `chiefComplaint` | Chief Complaint | `text` | Y |  |  |
| New Patient / Consultation Visit Note | History of Present Illness (HPI) | `hpiNarrative` | HPI Narrative | `textarea` | Y |  |  |
| New Patient / Consultation Visit Note | Past Medical / Surgical / Family History | `pmh` | Past Medical History | `textarea` | Y |  |  |
| New Patient / Consultation Visit Note | Past Medical / Surgical / Family History | `surgicalHistory` | Past Surgical History | `textarea` |  |  |  |
| New Patient / Consultation Visit Note | Past Medical / Surgical / Family History | `familyHistory` | Family History | `textarea` |  |  |  |
| New Patient / Consultation Visit Note | Past Medical / Surgical / Family History | `allergies` | Allergies | `textarea` | Y |  |  |
| New Patient / Consultation Visit Note | Past Medical / Surgical / Family History | `medications` | Current Medications | `textarea` | Y |  |  |
| New Patient / Consultation Visit Note | Assessment & Plan | `assessment` | Assessment | `textarea` | Y |  |  |
| New Patient / Consultation Visit Note | Assessment & Plan | `plan` | Plan | `textarea` | Y |  |  |
| New Patient / Consultation Visit Note | Assessment & Plan | `followUp` | Follow-Up | `select` |  |  |  |

### Note Addendum — `clinical_addendum_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clinical Note Addendum / Late Entry | Original Note Reference | `patientId` | Patient | `typeahead` | Y |  |  |
| Clinical Note Addendum / Late Entry | Original Note Reference | `originalNoteDate` | Original Note Date | `date` | Y |  |  |
| Clinical Note Addendum / Late Entry | Original Note Reference | `addendumDate` | Addendum / Amendment Date | `date` | Y |  |  |
| Clinical Note Addendum / Late Entry | Original Note Reference | `originalEncounterId` | Original Encounter ID | `text` |  |  |  |
| Clinical Note Addendum / Late Entry | Original Note Reference | `originalNoteType` | Original Note Type | `text` |  |  |  |
| Clinical Note Addendum / Late Entry | Original Note Reference | `addendumBy` | Addendum Written By | `typeahead` | Y |  |  |
| Clinical Note Addendum / Late Entry | Reason & Content | `addendumType` | Addendum Type | `select` | Y |  |  |
| Clinical Note Addendum / Late Entry | Reason & Content | `reasonForAddendum` | Reason for Addendum | `text` | Y |  |  |
| Clinical Note Addendum / Late Entry | Reason & Content | `addendumContent` | Addendum Content | `textarea` | Y |  |  |
| Clinical Note Addendum / Late Entry | Reason & Content | `originalNoteCorrected` | Original Note Status | `select` |  |  |  |

### Note Macros — `NOTE_MACROS`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Note Macro / Smart Note | Note Macro (ECW-CL-83/84; note_macros table; user-managed shortcuts expanding to canned text; isSmartNote=true enables embedded interactive prompts) | `nmId` | Macro ID (read-only UUID) | `text` |  |  |  |
| Note Macro / Smart Note | Note Macro (ECW-CL-83/84; note_macros table; user-managed shortcuts expanding to canned text; isSmartNote=true enables embedded interactive prompts) | `nmName` | Macro Name (required; max 200 chars) | `text` | Y |  |  |
| Note Macro / Smart Note | Note Macro (ECW-CL-83/84; note_macros table; user-managed shortcuts expanding to canned text; isSmartNote=true enables embedded interactive prompts) | `nmShortcut` | Shortcut (required; max 20 chars; typed to expand) | `text` | Y |  |  |
| Note Macro / Smart Note | Note Macro (ECW-CL-83/84; note_macros table; user-managed shortcuts expanding to canned text; isSmartNote=true enables embedded interactive prompts) | `nmScope` | Scope (global/assessments/hpi/procedure/treatment; default global) | `text` |  |  |  |
| Note Macro / Smart Note | Note Macro (ECW-CL-83/84; note_macros table; user-managed shortcuts expanding to canned text; isSmartNote=true enables embedded interactive prompts) | `nmContent` | Expanded Content Text (required; canned text or smart-note template) | `textarea` | Y |  |  |
| Note Macro / Smart Note | Note Macro (ECW-CL-83/84; note_macros table; user-managed shortcuts expanding to canned text; isSmartNote=true enables embedded interactive prompts) | `nmIsSmartNote` | Is Smart Note (true/false; enables interactive prompt tokens) | `checkbox` |  |  |  |
| Note Macro / Smart Note | Note Macro (ECW-CL-83/84; note_macros table; user-managed shortcuts expanding to canned text; isSmartNote=true enables embedded interactive prompts) | `nmActive` | Active (true/false; default true) | `checkbox` |  |  |  |

### Note Macros — `note_macros`

Screen: 3 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Note Macros | nmListSection | `nmId` | ID | `text` |  |  |  |
| Note Macros | nmListSection | `nmName` | Name | `text` |  |  |  |
| Note Macros | nmListSection | `nmShortcut` | Shortcut | `text` |  |  |  |
| Note Macros | nmListSection | `nmScope` | Scope | `text` |  |  |  |
| Note Macros | nmListSection | `nmActive` | Active | `text` |  |  |  |
| Note Macro Details | nmEditSection | `nmEditName` | Name | `text` | Y |  |  |
| Note Macro Details | nmEditSection | `nmEditShortcut` | Shortcut (trigger text) | `text` | Y |  |  |
| Note Macro Details | nmEditSection | `nmEditContent` | Content | `textarea` |  |  |  |
| Note Macro Details | nmEditSection | `nmEditPracticeId` | Practice ID (optional) | `text` |  |  |  |
| Note Macro Details | nmEditSection | `nmEditScope` | Scope | `select` |  |  |  |
| Expand Macro | nmExpandSection | `nmExpandShortcut` | Shortcut | `text` | Y |  |  |
| Expand Macro | nmExpandSection | `nmExpandPracticeId` | Practice ID (optional) | `text` |  |  |  |
| Expand Macro | nmExpandSection | `nmExpandResult` | Expanded Content | `textarea` |  |  |  |

### Note Macros — `note_macros_cf`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Note Macro | Macro Details | `name` | Macro Name | `text` | Y |  |  |
| Note Macro | Macro Details | `shortcut` | Shortcut Key | `text` | Y |  |  |
| Note Macro | Macro Details | `scope` | Scope | `select` | Y |  |  |
| Note Macro | Macro Details | `content` | Macro Content | `textarea` | Y |  |  |
| Note Macro | Macro Details | `is_smart_note` | Smart Note (AI-assisted) | `checkbox` |  |  |  |
| Note Macro | Macro Details | `active` | Active | `checkbox` |  |  |  |

### Note Templates — `NOTE_TEMPLATES`

Screen: 1 page(s) · 1 section(s) · 10 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clinical Note Template | Note Template (ECW-CL-77; note_templates + note_template_sections; generic or patient-specific; section-scoped SOAP merge; CC association; order-set linkage; org/practice-scoped) | `ntId` | Template ID (read-only UUID) | `text` |  |  |  |
| Clinical Note Template | Note Template (ECW-CL-77; note_templates + note_template_sections; generic or patient-specific; section-scoped SOAP merge; CC association; order-set linkage; org/practice-scoped) | `ntName` | Template Name (required; max 200 chars) | `text` | Y |  |  |
| Clinical Note Template | Note Template (ECW-CL-77; note_templates + note_template_sections; generic or patient-specific; section-scoped SOAP merge; CC association; order-set linkage; org/practice-scoped) | `ntDescription` | Description (optional) | `textarea` |  |  |  |
| Clinical Note Template | Note Template (ECW-CL-77; note_templates + note_template_sections; generic or patient-specific; section-scoped SOAP merge; CC association; order-set linkage; org/practice-scoped) | `ntCategory` | Category (optional; for grouping/search) | `text` |  |  |  |
| Clinical Note Template | Note Template (ECW-CL-77; note_templates + note_template_sections; generic or patient-specific; section-scoped SOAP merge; CC association; order-set linkage; org/practice-scoped) | `ntVisitType` | Visit Type (optional; e.g. Follow-Up/New Patient) | `text` |  |  |  |
| Clinical Note Template | Note Template (ECW-CL-77; note_templates + note_template_sections; generic or patient-specific; section-scoped SOAP merge; CC association; order-set linkage; org/practice-scoped) | `ntIsPublic` | Is Public (true/false; default true; false = author-only) | `checkbox` |  |  |  |
| Clinical Note Template | Note Template (ECW-CL-77; note_templates + note_template_sections; generic or patient-specific; section-scoped SOAP merge; CC association; order-set linkage; org/practice-scoped) | `ntIsFavorite` | Is Favorite (true/false; user preference) | `checkbox` |  |  |  |
| Clinical Note Template | Note Template (ECW-CL-77; note_templates + note_template_sections; generic or patient-specific; section-scoped SOAP merge; CC association; order-set linkage; org/practice-scoped) | `ntChiefComplaints` | Chief Complaints (comma-separated; for auto-suggestion) | `text` |  |  |  |
| Clinical Note Template | Note Template (ECW-CL-77; note_templates + note_template_sections; generic or patient-specific; section-scoped SOAP merge; CC association; order-set linkage; org/practice-scoped) | `ntOrderSetIds` | Order Set IDs (comma-separated UUIDs; linked order sets) | `text` |  |  |  |
| Clinical Note Template | Note Template (ECW-CL-77; note_templates + note_template_sections; generic or patient-specific; section-scoped SOAP merge; CC association; order-set linkage; org/practice-scoped) | `ntActive` | Active (true/false; default true) | `checkbox` |  |  |  |

### Note Templates — `note_templates`

Screen: 2 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Note Templates | ntListSection | `ntId` | ID | `text` |  |  |  |
| Note Templates | ntListSection | `ntName` | Name | `text` |  |  |  |
| Note Templates | ntListSection | `ntCategory` | Category | `text` |  |  |  |
| Note Templates | ntListSection | `ntActive` | Active | `text` |  |  |  |
| Note Templates | ntListSection | `ntCreatedAt` | Created At | `text` |  |  |  |
| Template Details | ntEditSection | `ntEditName` | Template Name | `text` | Y |  |  |
| Template Details | ntEditSection | `ntEditCategory` | Category | `text` |  |  |  |
| Template Details | ntEditSection | `ntEditContent` | Content | `textarea` |  |  |  |
| Template Details | ntEditSection | `ntEditPracticeId` | Practice ID (optional) | `text` |  |  |  |

### Note Templates — `note_templates_cf`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Note Template | Template Details | `name` | Template Name | `text` | Y |  |  |
| Note Template | Template Details | `description` | Description | `textarea` |  |  |  |
| Note Template | Template Details | `category` | Category | `text` |  |  |  |
| Note Template | Template Details | `visit_type` | Visit Type | `text` |  |  |  |
| Note Template | Template Details | `chief_complaints` | Chief Complaints | `textarea` |  |  |  |
| Note Template | Template Details | `order_set_ids` | Order Set IDs (comma-separated) | `text` |  |  |  |
| Note Template | Template Details | `is_public` | Shared with Practice | `checkbox` |  |  |  |
| Note Template | Template Details | `is_favorite` | Favorite | `checkbox` |  |  |  |
| Note Template | Template Details | `active` | Active | `checkbox` |  |  |  |

### Nurse Triage — `nurse_triage_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Nurse Triage / Telephone Assessment | Triage Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Nurse Triage / Telephone Assessment | Triage Details | `triageDate` | Date | `date` | Y |  |  |
| Nurse Triage / Telephone Assessment | Triage Details | `triageTime` | Time | `text` |  |  |  |
| Nurse Triage / Telephone Assessment | Triage Details | `contactType` | Contact Type | `select` |  |  |  |
| Nurse Triage / Telephone Assessment | Triage Details | `triageNurse` | Triaging Staff | `typeahead` |  |  |  |
| Nurse Triage / Telephone Assessment | Chief Complaint & Assessment | `chiefComplaint` | Chief Complaint Category | `select` | Y |  |  |
| Nurse Triage / Telephone Assessment | Chief Complaint & Assessment | `complaintDescription` | Complaint Description | `textarea` | Y |  |  |
| Nurse Triage / Telephone Assessment | Chief Complaint & Assessment | `onset` | Onset | `select` |  |  |  |
| Nurse Triage / Telephone Assessment | Chief Complaint & Assessment | `severity` | Severity (0-10) | `range` |  |  |  |
| Nurse Triage / Telephone Assessment | Chief Complaint & Assessment | `associatedSymptoms` | Associated Symptoms | `textarea` |  |  |  |
| Nurse Triage / Telephone Assessment | Chief Complaint & Assessment | `relevantHistory` | Relevant History / Current Meds | `textarea` |  |  |  |
| Nurse Triage / Telephone Assessment | Triage Decision | `triageLevel` | Triage Level | `select` | Y |  |  |
| Nurse Triage / Telephone Assessment | Triage Decision | `providerConsulted` | Provider consulted during triage | `checkbox` |  |  |  |
| Nurse Triage / Telephone Assessment | Triage Decision | `providerName` | Consulting Provider | `typeahead` |  |  |  |
| Nurse Triage / Telephone Assessment | Triage Decision | `homeAdvice` | Home Care Advice Given | `textarea` |  |  |  |
| Nurse Triage / Telephone Assessment | Triage Decision | `followUpInstructions` | Follow-Up Instructions | `textarea` |  |  |  |
| Nurse Triage / Telephone Assessment | Triage Decision | `triageNotes` | Triage Notes | `textarea` |  |  |  |

### Nursing Assessment — `nursing_assessment_cf`

Screen: 1 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Nursing Assessment | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Nursing Assessment | Patient & Visit | `assessDate` | Assessment Date | `date` | Y |  |  |
| Nursing Assessment | Patient & Visit | `assessTime` | Time | `text` |  |  |  |
| Nursing Assessment | Patient & Visit | `nurse` | RN / LPN | `typeahead` | Y |  |  |
| Nursing Assessment | Patient & Visit | `visitContext` | Visit Context | `select` | Y |  |  |
| Nursing Assessment | Vitals | `bpSystolic` | BP Systolic (mmHg) | `number` |  |  |  |
| Nursing Assessment | Vitals | `bpDiastolic` | BP Diastolic (mmHg) | `number` |  |  |  |
| Nursing Assessment | Vitals | `heartRate` | Heart Rate (bpm) | `number` |  |  |  |
| Nursing Assessment | Vitals | `respiratoryRate` | Respiratory Rate (/min) | `number` |  |  |  |
| Nursing Assessment | Vitals | `temperature` | Temperature (F) | `number` |  |  |  |
| Nursing Assessment | Vitals | `spO2` | SpO2 (%) | `number` |  |  |  |
| Nursing Assessment | Vitals | `weight` | Weight (lbs) | `number` |  |  |  |
| Nursing Assessment | Vitals | `height` | Height (inches) | `number` |  |  |  |
| Nursing Assessment | Vitals | `painScore` | Pain Score (NRS 0-10) | `select` | Y |  |  |
| Nursing Assessment | Vitals | `vitalNotes` | Vital Signs Notes | `text` |  |  |  |
| Nursing Assessment | Nursing Assessment | `chiefComplaint` | Chief Complaint / Reason for Visit | `text` | Y |  |  |
| Nursing Assessment | Nursing Assessment | `history` | Brief History / Presenting Concern | `textarea` | Y |  |  |
| Nursing Assessment | Nursing Assessment | `interventions` | Nursing Interventions / Education | `textarea` | Y |  |  |
| Nursing Assessment | Nursing Assessment | `followUp` | Follow-up Scheduled | `date` |  |  |  |

### Nutrition Assessments — `clinical_nutrition_cf`

Screen: 1 page(s) · 5 section(s) · 31 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Assessment | Referral | `patientId` | Patient | `lookup` | Y |  |  |
| Assessment | Referral | `assessmentDate` | Assessment Date | `date` |  |  |  |
| Assessment | Referral | `providerName` | Dietitian | `text` |  |  |  |
| Assessment | Referral | `referralSource` | Referral Source | `text` |  |  |  |
| Assessment | Referral | `referralDiagnosis` | Referring Diagnosis | `text` |  |  |  |
| Assessment | Referral | `mntIndication` | MNT Indication | `text` |  |  |  |
| Assessment | Anthropometrics | `heightCm` | Height (cm) | `number` |  |  |  |
| Assessment | Anthropometrics | `weightKg` | Weight (kg) | `number` |  |  |  |
| Assessment | Anthropometrics | `bmi` | BMI (auto) | `number` |  |  |  |
| Assessment | Anthropometrics | `bmiCategory` | BMI Category | `text` |  |  |  |
| Assessment | Anthropometrics | `usualBodyWeightKg` | Usual Body Weight (kg) | `number` |  |  |  |
| Assessment | Anthropometrics | `weightChangeKg` | Weight Change (kg) | `number` |  |  |  |
| Assessment | Anthropometrics | `weightChangePct` | Weight Change (%) | `number` |  |  |  |
| Assessment | Anthropometrics | `weightChangeTimeframe` | Over Timeframe | `text` |  |  |  |
| Assessment | Dietary History | `dietType` | Current Diet Type | `select` |  |  |  |
| Assessment | Dietary History | `dietQualityRating` | Diet Quality | `select` |  |  |  |
| Assessment | Dietary History | `caloriesEstimatedKcal` | Est. Calories (kcal/day) | `number` |  |  |  |
| Assessment | Dietary History | `proteinEstimatedG` | Est. Protein (g/day) | `number` |  |  |  |
| Assessment | Dietary History | `appetite` | Appetite | `text` |  |  |  |
| Assessment | Dietary History | `diet24hRecall` | 24-Hour Recall | `textarea` |  |  |  |
| Assessment | Key Labs | `albuminGDl` | Albumin (g/dL) | `number` |  |  |  |
| Assessment | Key Labs | `prealbuminMgDl` | Prealbumin (mg/dL) | `number` |  |  |  |
| Assessment | Key Labs | `hba1c` | HbA1c (%) | `number` |  |  |  |
| Assessment | Key Labs | `glucoseMgDl` | Glucose (mg/dL) | `number` |  |  |  |
| Assessment | Key Labs | `totalCholesterol` | Total Cholesterol | `number` |  |  |  |
| Assessment | Key Labs | `triglycerides` | Triglycerides | `number` |  |  |  |
| Assessment | Nutrition Diagnosis & Plan | `malnutritionDiagnosis` | Malnutrition Diagnosis | `select` |  |  |  |
| Assessment | Nutrition Diagnosis & Plan | `malnutritionSeverity` | Severity | `select` |  |  |  |
| Assessment | Nutrition Diagnosis & Plan | `nutritionGoals` | Nutrition Goals | `textarea` |  |  |  |
| Assessment | Nutrition Diagnosis & Plan | `nutritionInterventions` | Interventions | `textarea` |  |  |  |
| Assessment | Nutrition Diagnosis & Plan | `followupRecommendation` | Follow-Up Recommendation | `text` |  |  |  |

### Nutrition Counseling — `nutrition_counseling_cf`

Screen: 1 page(s) · 3 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medical Nutrition Therapy & Dietary Counseling | Patient & Referral | `patientId` | Patient | `typeahead` | Y |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Patient & Referral | `encounterId` | Encounter ID | `text` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Patient & Referral | `ntDate` | Counseling Date | `date` | Y |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Patient & Referral | `referralReason` | Nutrition Referral Reason | `select` | Y |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Patient & Referral | `sessionNumber` | Session # | `number` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutritional Assessment | `height` | Height | `text` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutritional Assessment | `weight` | Weight (lbs) | `number` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutritional Assessment | `bmi` | BMI | `number` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutritional Assessment | `weightGoal` | Goal Weight (lbs) | `number` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutritional Assessment | `calorieNeeds` | Estimated Caloric Needs (kcal/day) | `number` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutritional Assessment | `typicalDailyIntake` | 24-Hour Diet Recall / Typical Intake | `textarea` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutritional Assessment | `foodIntolerances` | Food Intolerances / Allergies | `text` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutritional Assessment | `dietaryPattern` | Current Dietary Pattern | `select` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutrition Plan | `targetCalories` | Target Caloric Intake (kcal/day) | `number` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutrition Plan | `carbGoal` | Carbohydrate Goal | `text` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutrition Plan | `proteinGoal` | Protein Goal | `text` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutrition Plan | `sodiumLimit` | Sodium Restriction | `select` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutrition Plan | `fluidLimit` | Fluid Restriction (if applicable) | `text` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutrition Plan | `behaviorGoals` | Behavior Change Goals (SMART) | `textarea` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutrition Plan | `educationTopicsNutrition` | Education Topics Covered | `textarea` |  |  |  |
| Medical Nutrition Therapy & Dietary Counseling | Nutrition Plan | `nextNtVisit` | Next Visit Interval | `select` |  |  |  |

### Nutrition Therapy — `dietitian_cf`

Screen: 2 page(s) · 8 section(s) · 78 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| MNT Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| MNT Evaluation | Evaluation | `evalDate` | Date | `date` |  |  |  |
| MNT Evaluation | Evaluation | `dietitian` | Dietitian | `text` |  |  |  |
| MNT Evaluation | Evaluation | `referralReason` | Referral Reason | `text` |  |  |  |
| MNT Evaluation | Evaluation | `referralSource` | Referral Source | `text` |  |  |  |
| MNT Evaluation | Evaluation | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| MNT Evaluation | Anthropometrics | `heightIn` | Height (inches) | `number` |  |  |  |
| MNT Evaluation | Anthropometrics | `weightLbs` | Weight (lbs) | `number` |  |  |  |
| MNT Evaluation | Anthropometrics | `bmi` | BMI | `number` |  |  |  |
| MNT Evaluation | Anthropometrics | `ibwLbs` | IBW (lbs) | `number` |  |  |  |
| MNT Evaluation | Anthropometrics | `usualBodyWeightLbs` | Usual Body Weight (lbs) | `number` |  |  |  |
| MNT Evaluation | Anthropometrics | `weightChangePct` | % Weight Change | `number` |  |  |  |
| MNT Evaluation | Anthropometrics | `waistCircumferenceIn` | Waist Circumference (in) | `number` |  |  |  |
| MNT Evaluation | Anthropometrics | `bodyFatPct` | Body Fat % | `number` |  |  |  |
| MNT Evaluation | Labs | `hgbA1c` | HbA1c (%) | `number` |  |  |  |
| MNT Evaluation | Labs | `hgbA1cDate` | HbA1c Date | `date` |  |  |  |
| MNT Evaluation | Labs | `fastingGlucose` | Fasting Glucose (mg/dL) | `number` |  |  |  |
| MNT Evaluation | Labs | `totalCholesterol` | Total Cholesterol | `number` |  |  |  |
| MNT Evaluation | Labs | `ldl` | LDL | `number` |  |  |  |
| MNT Evaluation | Labs | `hdl` | HDL | `number` |  |  |  |
| MNT Evaluation | Labs | `triglycerides` | Triglycerides | `number` |  |  |  |
| MNT Evaluation | Labs | `creatinine` | Creatinine | `number` |  |  |  |
| MNT Evaluation | Labs | `egfr` | eGFR | `number` |  |  |  |
| MNT Evaluation | Labs | `albumin` | Albumin (g/dL) | `number` |  |  |  |
| MNT Evaluation | Labs | `vitaminD` | Vitamin D (ng/mL) | `number` |  |  |  |
| MNT Evaluation | Labs | `vitaminB12` | Vitamin B12 (pg/mL) | `number` |  |  |  |
| MNT Evaluation | Diet History | `dietType` | Diet Type | `select` |  |  |  |
| MNT Evaluation | Diet History | `mealsPerDay` | Meals/Day | `number` |  |  |  |
| MNT Evaluation | Diet History | `snacksPerDay` | Snacks/Day | `number` |  |  |  |
| MNT Evaluation | Diet History | `hydrationOzDay` | Fluids (oz/day) | `number` |  |  |  |
| MNT Evaluation | Diet History | `cooksAtHome` | Cooks at Home | `checkbox` |  |  |  |
| MNT Evaluation | Diet History | `alcoholUse` | Alcohol Use | `text` |  |  |  |
| MNT Evaluation | Diet History | `alcoholDrinksWeek` | Drinks/Week | `number` |  |  |  |
| MNT Evaluation | GI & Appetite | `appetiteLevel` | Appetite | `select` |  |  |  |
| MNT Evaluation | GI & Appetite | `chewingDifficulty` | Chewing Difficulty | `checkbox` |  |  |  |
| MNT Evaluation | GI & Appetite | `swallowingDifficulty` | Swallowing Difficulty | `checkbox` |  |  |  |
| MNT Evaluation | GI & Appetite | `nausea` | Nausea | `checkbox` |  |  |  |
| MNT Evaluation | GI & Appetite | `vomiting` | Vomiting | `checkbox` |  |  |  |
| MNT Evaluation | GI & Appetite | `constipation` | Constipation | `checkbox` |  |  |  |
| MNT Evaluation | GI & Appetite | `diarrhea` | Diarrhea | `checkbox` |  |  |  |
| MNT Evaluation | Estimated Needs | `estimatedEnergyKcal` | Energy (kcal/day) | `number` |  |  |  |
| MNT Evaluation | Estimated Needs | `energyMethod` | Method | `select` |  |  |  |
| MNT Evaluation | Estimated Needs | `estimatedProteinG` | Protein (g/day) | `number` |  |  |  |
| MNT Evaluation | Estimated Needs | `proteinGPerKg` | Protein (g/kg) | `number` |  |  |  |
| MNT Evaluation | Estimated Needs | `estimatedFluidMl` | Fluid (mL/day) | `number` |  |  |  |
| MNT Evaluation | Estimated Needs | `carbDistributionPct` | Carb % | `number` |  |  |  |
| MNT Evaluation | Estimated Needs | `fatDistributionPct` | Fat % | `number` |  |  |  |
| MNT Evaluation | Estimated Needs | `proteinDistributionPct` | Protein % | `number` |  |  |  |
| MNT Evaluation | Nutrition Plan | `mealPlanType` | Meal Plan Type | `text` |  |  |  |
| MNT Evaluation | Nutrition Plan | `calorieTarget` | Calorie Target | `number` |  |  |  |
| MNT Evaluation | Nutrition Plan | `carbGramsPerMeal` | Carb (g/meal) | `number` |  |  |  |
| MNT Evaluation | Nutrition Plan | `carbGramsPerSnack` | Carb (g/snack) | `number` |  |  |  |
| MNT Evaluation | Nutrition Plan | `sodiumMgLimit` | Sodium Limit (mg/day) | `number` |  |  |  |
| MNT Evaluation | Nutrition Plan | `fluidRestrictionMl` | Fluid Restriction (mL) | `number` |  |  |  |
| MNT Evaluation | Nutrition Plan | `proteinRestrictionG` | Protein Restriction (g) | `number` |  |  |  |
| MNT Evaluation | Nutrition Plan | `sessionsPlanned` | Sessions Planned | `number` |  |  |  |
| MNT Evaluation | Nutrition Plan | `frequencyPerMonth` | Frequency/Month | `number` |  |  |  |
| MNT Evaluation | Nutrition Plan | `followUpPlan` | Follow-Up Plan | `textarea` |  |  |  |
| MNT Sessions | MNT Session | `patientId` | Patient | `lookup` | Y |  |  |
| MNT Sessions | MNT Session | `sessionDate` | Session Date | `date` |  |  |  |
| MNT Sessions | MNT Session | `sessionNumber` | Session # | `number` |  |  |  |
| MNT Sessions | MNT Session | `dietitian` | Dietitian | `text` |  |  |  |
| MNT Sessions | MNT Session | `sessionDurationMin` | Duration (min) | `number` |  |  |  |
| MNT Sessions | MNT Session | `sessionType` | Session Type | `select` |  |  |  |
| MNT Sessions | MNT Session | `weightTodayLbs` | Weight Today (lbs) | `number` |  |  |  |
| MNT Sessions | MNT Session | `weightChangeSinceLast` | Change Since Last (lbs) | `number` |  |  |  |
| MNT Sessions | MNT Session | `weightChangeSinceEval` | Change Since Eval (lbs) | `number` |  |  |  |
| MNT Sessions | MNT Session | `hgbA1cToday` | HbA1c Today | `number` |  |  |  |
| MNT Sessions | MNT Session | `glucoseToday` | Glucose Today (mg/dL) | `number` |  |  |  |
| MNT Sessions | MNT Session | `foodLogReviewed` | Food Log Reviewed | `checkbox` |  |  |  |
| MNT Sessions | MNT Session | `hepCompliance` | HEP Compliance | `select` |  |  |  |
| MNT Sessions | MNT Session | `readinessToChange` | Readiness to Change (0-10) | `number` |  |  |  |
| MNT Sessions | MNT Session | `confidenceRuler` | Confidence Ruler (0-10) | `number` |  |  |  |
| MNT Sessions | MNT Session | `smartGoalText` | SMART Goal | `textarea` |  |  |  |
| MNT Sessions | MNT Session | `mealPlanAdherence` | Meal Plan Adherence | `select` |  |  |  |
| MNT Sessions | MNT Session | `nutritionStatusUpdate` | Nutrition Status Update | `text` |  |  |  |
| MNT Sessions | MNT Session | `clinicalNotes` | Clinical Notes | `textarea` |  |  |  |
| MNT Sessions | MNT Session | `nextSessionDate` | Next Session Date | `date` |  |  |  |

### OSA / CPAP Follow-up — `osa_management_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| OSA Management / CPAP Follow-up | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| OSA Management / CPAP Follow-up | Patient | `visitDate` | Visit Date | `date` | Y |  |  |
| OSA Management / CPAP Follow-up | Patient | `provider` | Provider | `typeahead` | Y |  |  |
| OSA Management / CPAP Follow-up | Patient | `visitType` | Visit Type | `select` | Y |  |  |
| OSA Management / CPAP Follow-up | OSA Severity & Device | `osaDiagnosis` | OSA Severity at Diagnosis | `select` | Y |  |  |
| OSA Management / CPAP Follow-up | OSA Severity & Device | `baselineAhi` | Baseline AHI (from diagnostic study) | `number` |  |  |  |
| OSA Management / CPAP Follow-up | OSA Severity & Device | `treatmentDevice` | Treatment Device | `select` | Y |  |  |
| OSA Management / CPAP Follow-up | CPAP Compliance Data | `cpapPressure` | CPAP Pressure (cmH2O) | `text` |  |  |  |
| OSA Management / CPAP Follow-up | CPAP Compliance Data | `avgUsage` | Average Nightly Usage (past 30 days) | `text` | Y |  |  |
| OSA Management / CPAP Follow-up | CPAP Compliance Data | `residualAhi` | Residual AHI (from device data) | `number` |  |  |  |
| OSA Management / CPAP Follow-up | CPAP Compliance Data | `leakRate` | Mask Leak Rate (L/min) | `text` |  |  |  |
| OSA Management / CPAP Follow-up | CPAP Compliance Data | `epworthScore` | Epworth Sleepiness Scale (ESS) | `select` | Y |  |  |
| OSA Management / CPAP Follow-up | CPAP Compliance Data | `symptoms` | Symptom Response | `textarea` | Y |  |  |
| OSA Management / CPAP Follow-up | CPAP Compliance Data | `maskIssues` | Mask / Device Issues | `textarea` |  |  |  |
| OSA Management / CPAP Follow-up | Plan | `osaPlan` | Assessment & Plan | `textarea` | Y |  |  |
| OSA Management / CPAP Follow-up | Plan | `nextStudy` | Repeat Sleep Study Indicated | `select` |  |  |  |

### Obesity / Bariatric Mgmt — `bariatric_management_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Obesity Medicine / Bariatric Management | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Obesity Medicine / Bariatric Management | Patient | `visitDate` | Visit Date | `date` | Y |  |  |
| Obesity Medicine / Bariatric Management | Patient | `provider` | Provider | `typeahead` | Y |  |  |
| Obesity Medicine / Bariatric Management | Patient | `visitType` | Visit Type | `select` | Y |  |  |
| Obesity Medicine / Bariatric Management | Anthropometrics & Vitals | `weight` | Weight (lbs / kg) | `number` | Y |  |  |
| Obesity Medicine / Bariatric Management | Anthropometrics & Vitals | `height` | Height (inches / cm) | `number` | Y |  |  |
| Obesity Medicine / Bariatric Management | Anthropometrics & Vitals | `bmi` | BMI | `number` | Y |  |  |
| Obesity Medicine / Bariatric Management | Anthropometrics & Vitals | `waistCirc` | Waist Circumference (cm) | `number` |  |  |  |
| Obesity Medicine / Bariatric Management | Anthropometrics & Vitals | `weightHistory` | Weight History / Change | `text` | Y |  |  |
| Obesity Medicine / Bariatric Management | Anthropometrics & Vitals | `bpAtVisit` | Blood Pressure | `text` |  |  |  |
| Obesity Medicine / Bariatric Management | Anthropometrics & Vitals | `a1c` | Most Recent A1C (%) | `number` |  |  |  |
| Obesity Medicine / Bariatric Management | Anthropometrics & Vitals | `ldl` | Most Recent LDL (mg/dL) | `number` |  |  |  |
| Obesity Medicine / Bariatric Management | Treatment | `dietIntervention` | Dietary Intervention | `textarea` | Y |  |  |
| Obesity Medicine / Bariatric Management | Treatment | `physicalActivity` | Physical Activity Plan | `textarea` | Y |  |  |
| Obesity Medicine / Bariatric Management | Treatment | `aomPrescribed` | Anti-Obesity Medication (AOM) | `select` | Y |  |  |
| Obesity Medicine / Bariatric Management | Treatment | `aomDetails` | AOM Details | `textarea` |  |  |  |
| Obesity Medicine / Bariatric Management | Treatment | `surgeryStatus` | Bariatric Surgery Status | `select` |  |  |  |
| Obesity Medicine / Bariatric Management | Treatment | `nextVisit` | Next Visit | `date` |  |  |  |

### Obesity / Weight Management — `obesity_management_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Obesity / Weight Management Visit | Patient & Anthropometrics | `patientId` | Patient | `typeahead` | Y |  |  |
| Obesity / Weight Management Visit | Patient & Anthropometrics | `visitDate` | Visit Date | `date` | Y |  |  |
| Obesity / Weight Management Visit | Patient & Anthropometrics | `provider` | Provider | `typeahead` | Y |  |  |
| Obesity / Weight Management Visit | Patient & Anthropometrics | `weightKg` | Weight (kg) | `number` | Y |  |  |
| Obesity / Weight Management Visit | Patient & Anthropometrics | `heightCm` | Height (cm) | `number` | Y |  |  |
| Obesity / Weight Management Visit | Patient & Anthropometrics | `bmi` | BMI (kg/m2) | `number` |  |  |  |
| Obesity / Weight Management Visit | Patient & Anthropometrics | `waistCircCm` | Waist Circumference (cm) | `number` |  |  |  |
| Obesity / Weight Management Visit | Patient & Anthropometrics | `weightGoalKg` | Weight Goal (kg) | `number` |  |  |  |
| Obesity / Weight Management Visit | Patient & Anthropometrics | `obesityClass` | Obesity Classification | `select` | Y |  |  |
| Obesity / Weight Management Visit | Comorbidity Assessment | `comorbidities` | Obesity-Related Comorbidities | `textarea` | Y |  |  |
| Obesity / Weight Management Visit | Comorbidity Assessment | `priorInterventions` | Prior Weight Loss Interventions | `textarea` | Y |  |  |
| Obesity / Weight Management Visit | Treatment Plan | `plan` | Obesity Treatment Plan | `textarea` | Y |  |  |

### Obstetrics / Prenatal — `obstetrics_cf`

Screen: 3 page(s) · 4 section(s) · 40 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| OB Record | Obstetric History (G/P) | `patientId` | Patient | `lookup` | Y |  |  |
| OB Record | Obstetric History (G/P) | `gravida` | Gravida | `number` |  |  |  |
| OB Record | Obstetric History (G/P) | `para` | Para | `number` |  |  |  |
| OB Record | Obstetric History (G/P) | `termDeliveries` | Term | `number` |  |  |  |
| OB Record | Obstetric History (G/P) | `pretermDeliveries` | Preterm | `number` |  |  |  |
| OB Record | Obstetric History (G/P) | `abortions` | Abortions / Losses | `number` |  |  |  |
| OB Record | Obstetric History (G/P) | `livingChildren` | Living Children | `number` |  |  |  |
| OB Record | Obstetric History (G/P) | `priorCesarean` | Prior Cesarean | `checkbox` |  |  |  |
| OB Record | Obstetric History (G/P) | `priorCesareanReason` | Cesarean Reason | `text` |  |  |  |
| OB Record | Obstetric History (G/P) | `priorPostpartumHemorrhage` | Prior PPH | `checkbox` |  |  |  |
| OB Record | Obstetric History (G/P) | `priorPreeclampsia` | Prior Preeclampsia | `checkbox` |  |  |  |
| OB Record | Obstetric History (G/P) | `priorGestationalDiabetes` | Prior GDM | `checkbox` |  |  |  |
| OB Record | Obstetric History (G/P) | `priorPretermBirth` | Prior Preterm Birth | `checkbox` |  |  |  |
| OB Record | Current Pregnancy | `lmp` | LMP | `date` |  |  |  |
| OB Record | Current Pregnancy | `eddByLmp` | EDD by LMP | `date` |  |  |  |
| OB Record | Current Pregnancy | `eddByUltrasound` | EDD by Ultrasound | `date` |  |  |  |
| OB Record | Current Pregnancy | `eddConfirmed` | EDD Confirmed | `date` |  |  |  |
| OB Record | Current Pregnancy | `gestationalAgeAtRegistrationWeeks` | GA at Registration (wks) | `number` |  |  |  |
| OB Record | Current Pregnancy | `conceptionMethod` | Conception Method | `select` |  |  |  |
| Prenatal Visits | Prenatal Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Prenatal Visits | Prenatal Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Prenatal Visits | Prenatal Visit | `gestationalAgeWeeks` | GA (weeks + days) | `text` |  |  |  |
| Prenatal Visits | Prenatal Visit | `weightKg` | Weight (kg) | `number` |  |  |  |
| Prenatal Visits | Prenatal Visit | `bloodPressure` | Blood Pressure | `text` |  |  |  |
| Prenatal Visits | Prenatal Visit | `fundalHeightCm` | Fundal Height (cm) | `number` |  |  |  |
| Prenatal Visits | Prenatal Visit | `fetalHeartTone` | FHT (bpm) | `number` |  |  |  |
| Prenatal Visits | Prenatal Visit | `fetalPresentation` | Presentation | `select` |  |  |  |
| Prenatal Visits | Prenatal Visit | `urineProtein` | Urine Protein | `select` |  |  |  |
| Prenatal Visits | Prenatal Visit | `urineGlucose` | Urine Glucose | `text` |  |  |  |
| Prenatal Visits | Prenatal Visit | `edema` | Edema | `text` |  |  |  |
| Prenatal Visits | Prenatal Visit | `maternalSymptoms` | Maternal Symptoms | `textarea` |  |  |  |
| Prenatal Visits | Prenatal Visit | `fetalMovement` | Fetal Movement | `text` |  |  |  |
| Prenatal Visits | Prenatal Visit | `visitNotes` | Notes / Plan | `textarea` |  |  |  |
| Antepartum Tests | Antepartum Test | `patientId` | Patient | `lookup` | Y |  |  |
| Antepartum Tests | Antepartum Test | `testDate` | Test Date | `date` |  |  |  |
| Antepartum Tests | Antepartum Test | `testType` | Test Type | `select` |  |  |  |
| Antepartum Tests | Antepartum Test | `gestationalAgeWeeks` | GA (weeks) | `number` |  |  |  |
| Antepartum Tests | Antepartum Test | `result` | Result / Summary | `text` |  |  |  |
| Antepartum Tests | Antepartum Test | `resultNormal` | Result Normal | `checkbox` |  |  |  |
| Antepartum Tests | Antepartum Test | `actionRequired` | Action Required | `text` |  |  |  |

### Occupational Medicine — `occupational_med_cf`

Screen: 2 page(s) · 5 section(s) · 78 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Evaluation | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Evaluation | `providerName` | Provider | `text` |  |  |  |
| Evaluation | Evaluation | `visitType` | Visit Type | `select` |  |  |  |
| Evaluation | Evaluation | `referralSource` | Referral Source | `text` |  |  |  |
| Evaluation | Evaluation | `employerName` | Employer Name | `text` |  |  |  |
| Evaluation | Evaluation | `employerContact` | Employer Contact | `text` |  |  |  |
| Evaluation | Evaluation | `jobTitle` | Job Title | `text` |  |  |  |
| Evaluation | Evaluation | `jobDuties` | Job Duties | `textarea` |  |  |  |
| Evaluation | Evaluation | `yearsInJob` | Years in Job | `number` |  |  |  |
| Evaluation | Evaluation | `chiefComplaint` | Chief Complaint | `textarea` |  |  |  |
| Evaluation | Injury / Illness | `injuryIllnessType` | Injury/Illness Type | `select` |  |  |  |
| Evaluation | Injury / Illness | `injuryDate` | Injury/Onset Date | `date` |  |  |  |
| Evaluation | Injury / Illness | `injuryTime` | Injury Time | `text` |  |  |  |
| Evaluation | Injury / Illness | `injuryLocation` | Location of Injury | `text` |  |  |  |
| Evaluation | Injury / Illness | `injuryMechanism` | Mechanism | `textarea` |  |  |  |
| Evaluation | Injury / Illness | `bodyPartInjured` | Body Part Injured | `text` |  |  |  |
| Evaluation | Injury / Illness | `witnessed` | Witnessed | `checkbox` |  |  |  |
| Evaluation | Injury / Illness | `reportedToSupervisor` | Reported to Supervisor | `checkbox` |  |  |  |
| Evaluation | Injury / Illness | `oshaRecordable` | OSHA Recordable | `checkbox` |  |  |  |
| Evaluation | Injury / Illness | `wcClaimNumber` | WC Claim Number | `text` |  |  |  |
| Evaluation | Injury / Illness | `wcCarrier` | WC Carrier | `text` |  |  |  |
| Evaluation | Injury / Illness | `exposureType` | Exposure Type | `text` |  |  |  |
| Evaluation | Injury / Illness | `chemicalName` | Chemical Name | `text` |  |  |  |
| Evaluation | Examination | `bpSystolic` | BP Systolic | `number` |  |  |  |
| Evaluation | Examination | `bpDiastolic` | BP Diastolic | `number` |  |  |  |
| Evaluation | Examination | `heartRate` | Heart Rate | `number` |  |  |  |
| Evaluation | Examination | `weightKg` | Weight (kg) | `number` |  |  |  |
| Evaluation | Examination | `visionRight` | Vision R | `text` |  |  |  |
| Evaluation | Examination | `visionLeft` | Vision L | `text` |  |  |  |
| Evaluation | Examination | `generalExam` | General | `textarea` |  |  |  |
| Evaluation | Examination | `mskExam` | MSK Exam | `textarea` |  |  |  |
| Evaluation | Examination | `neuroExam` | Neuro Exam | `textarea` |  |  |  |
| Evaluation | Examination | `respExam` | Respiratory Exam | `textarea` |  |  |  |
| Evaluation | Examination | `skinExam` | Skin Exam | `textarea` |  |  |  |
| Evaluation | Examination | `fvc_pct` | FVC %pred | `number` |  |  |  |
| Evaluation | Examination | `fev1_pct` | FEV1 %pred | `number` |  |  |  |
| Evaluation | Examination | `audiogramDone` | Audiogram Done | `checkbox` |  |  |  |
| Evaluation | Examination | `drugScreenDone` | Drug Screen Done | `checkbox` |  |  |  |
| Evaluation | Work Status & Plan | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| Evaluation | Work Status & Plan | `icd10` | ICD-10 | `text` |  |  |  |
| Evaluation | Work Status & Plan | `workRelated` | Work-Related | `checkbox` |  |  |  |
| Evaluation | Work Status & Plan | `workRelatedRationale` | Causation Rationale | `textarea` |  |  |  |
| Evaluation | Work Status & Plan | `workStatus` | Work Status | `select` |  |  |  |
| Evaluation | Work Status & Plan | `rtwDate` | RTW Date | `date` |  |  |  |
| Evaluation | Work Status & Plan | `liftingLimitLbs` | Lifting Limit (lbs) | `number` |  |  |  |
| Evaluation | Work Status & Plan | `carryingLimitLbs` | Carrying Limit (lbs) | `number` |  |  |  |
| Evaluation | Work Status & Plan | `noOverheadWork` | No Overhead Work | `checkbox` |  |  |  |
| Evaluation | Work Status & Plan | `noRepetitiveMotion` | No Repetitive Motion | `checkbox` |  |  |  |
| Evaluation | Work Status & Plan | `noDriving` | No Driving | `checkbox` |  |  |  |
| Evaluation | Work Status & Plan | `fmlaStartDate` | FMLA Start Date | `date` |  |  |  |
| Evaluation | Work Status & Plan | `fmlaEndDate` | FMLA End Date | `date` |  |  |  |
| Evaluation | Work Status & Plan | `dotExamPassed` | DOT Exam Passed | `checkbox` |  |  |  |
| Evaluation | Work Status & Plan | `dotCertificateExpiry` | DOT Certificate Expiry | `date` |  |  |  |
| Evaluation | Work Status & Plan | `treatmentPlan` | Treatment Plan | `textarea` |  |  |  |
| Evaluation | Work Status & Plan | `nextAppointment` | Next Appointment | `date` |  |  |  |
| Evaluation | Work Status & Plan | `evalNotes` | Notes | `textarea` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `providerName` | Provider | `text` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `workStatus` | Work Status | `select` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `daysOffWork` | Days Off Work | `number` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `totalDaysLost` | Total Days Lost | `number` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `intervalHistory` | Interval History | `textarea` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `painScale` | Pain Scale (0–10) | `number` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `functionalStatus` | Functional Status | `text` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `treatmentCompliance` | Treatment Compliance | `checkbox` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `ptSessionsCompleted` | PT Sessions Completed | `number` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `examFindings` | Exam Findings | `textarea` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `liftingLimitLbs` | Lifting Limit (lbs) | `number` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `rtwTargetDate` | RTW Target Date | `date` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `rtwAchieved` | RTW Achieved | `checkbox` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `mmiDate` | MMI Date | `date` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `wholePersonImpairmentPct` | WPI % | `number` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `medicationsAdjusted` | Medications Adjusted | `checkbox` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `referrals` | Referrals | `text` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `nextVisitDate` | Next Visit | `date` |  |  |  |
| Follow-Up Visits | Occupational Medicine Visit | `visitNotes` | Notes | `textarea` |  |  |  |

### Occupational Therapy — `occupational_therapy_cf`

Screen: 2 page(s) · 6 section(s) · 79 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Evaluation | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Evaluation | `evaluator` | OT Evaluator | `text` |  |  |  |
| Evaluation | Evaluation | `referralSource` | Referral Source | `text` |  |  |  |
| Evaluation | Evaluation | `referralDiagnosis` | Referral Diagnosis | `text` |  |  |  |
| Evaluation | Evaluation | `primaryOccupation` | Primary Occupation/Role | `text` |  |  |  |
| Evaluation | Evaluation | `livingArrangement` | Living Arrangement | `text` |  |  |  |
| Evaluation | Evaluation | `supportSystem` | Support System | `text` |  |  |  |
| Evaluation | Evaluation | `homeEnvironment` | Home Environment | `text` |  |  |  |
| Evaluation | Evaluation | `priorLevelOfFunction` | Prior Level of Function | `textarea` |  |  |  |
| Evaluation | Evaluation | `patientGoals` | Patient Goals | `textarea` |  |  |  |
| Evaluation | ADL Assessment (FIM 0–6) | `adlFeeding` | Feeding | `number` |  |  |  |
| Evaluation | ADL Assessment (FIM 0–6) | `adlGrooming` | Grooming | `number` |  |  |  |
| Evaluation | ADL Assessment (FIM 0–6) | `adlBathing` | Bathing | `number` |  |  |  |
| Evaluation | ADL Assessment (FIM 0–6) | `adlUpperBodyDressing` | Upper Dressing | `number` |  |  |  |
| Evaluation | ADL Assessment (FIM 0–6) | `adlLowerBodyDressing` | Lower Dressing | `number` |  |  |  |
| Evaluation | ADL Assessment (FIM 0–6) | `adlToileting` | Toileting | `number` |  |  |  |
| Evaluation | ADL Assessment (FIM 0–6) | `adlToiletTransfer` | Toilet Transfer | `number` |  |  |  |
| Evaluation | ADL Assessment (FIM 0–6) | `adlTubTransfer` | Tub/Shower Transfer | `number` |  |  |  |
| Evaluation | ADL Assessment (FIM 0–6) | `adlBladderManagement` | Bladder Mgmt | `number` |  |  |  |
| Evaluation | ADL Assessment (FIM 0–6) | `adlBowelManagement` | Bowel Mgmt | `number` |  |  |  |
| Evaluation | ADL Assessment (FIM 0–6) | `fimMotorTotal` | FIM Motor Total | `number` |  |  |  |
| Evaluation | ADL Assessment (FIM 0–6) | `fimCognitiveTotal` | FIM Cognitive Total | `number` |  |  |  |
| Evaluation | UE Function | `gripStrengthR` | Grip Strength R (lbs) | `number` |  |  |  |
| Evaluation | UE Function | `gripStrengthL` | Grip Strength L (lbs) | `number` |  |  |  |
| Evaluation | UE Function | `lateralPinchR` | Lateral Pinch R | `number` |  |  |  |
| Evaluation | UE Function | `lateralPinchL` | Lateral Pinch L | `number` |  |  |  |
| Evaluation | UE Function | `tipPinchR` | Tip Pinch R | `number` |  |  |  |
| Evaluation | UE Function | `tipPinchL` | Tip Pinch L | `number` |  |  |  |
| Evaluation | UE Function | `shoulderFlexionR` | Shoulder Flex R (°) | `number` |  |  |  |
| Evaluation | UE Function | `shoulderFlexionL` | Shoulder Flex L (°) | `number` |  |  |  |
| Evaluation | UE Function | `elbowFlexionR` | Elbow Flex R (°) | `number` |  |  |  |
| Evaluation | UE Function | `elbowFlexionL` | Elbow Flex L (°) | `number` |  |  |  |
| Evaluation | UE Function | `wristExtR` | Wrist Ext R (°) | `number` |  |  |  |
| Evaluation | UE Function | `wristExtL` | Wrist Ext L (°) | `number` |  |  |  |
| Evaluation | UE Function | `fineMotorIntact` | Fine Motor Intact | `checkbox` |  |  |  |
| Evaluation | UE Function | `tremorPresent` | Tremor Present | `checkbox` |  |  |  |
| Evaluation | UE Function | `spasticityPresent` | Spasticity Present | `checkbox` |  |  |  |
| Evaluation | UE Function | `modifiedAshworthScore` | Modified Ashworth Score | `number` |  |  |  |
| Evaluation | Cognitive & Visual | `mocaScore` | MoCA Score | `number` |  |  |  |
| Evaluation | Cognitive & Visual | `mmseScore` | MMSE Score | `number` |  |  |  |
| Evaluation | Cognitive & Visual | `attentionDeficits` | Attention Deficits | `checkbox` |  |  |  |
| Evaluation | Cognitive & Visual | `memoryDeficits` | Memory Deficits | `checkbox` |  |  |  |
| Evaluation | Cognitive & Visual | `executiveFunctionImpaired` | Executive Function Impaired | `checkbox` |  |  |  |
| Evaluation | Cognitive & Visual | `safetyAwareness` | Safety Awareness Intact | `checkbox` |  |  |  |
| Evaluation | Cognitive & Visual | `visualNeglect` | Visual Neglect | `checkbox` |  |  |  |
| Evaluation | Cognitive & Visual | `neglectSide` | Neglect Side | `select` |  |  |  |
| Evaluation | Cognitive & Visual | `visualFieldDeficit` | Visual Field Deficit | `checkbox` |  |  |  |
| Evaluation | Cognitive & Visual | `depthPerceptionImpaired` | Depth Perception Impaired | `checkbox` |  |  |  |
| Evaluation | Plan & Goals | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| Evaluation | Plan & Goals | `barthelIndex` | Barthel Index | `number` |  |  |  |
| Evaluation | Plan & Goals | `dashScore` | DASH Score | `number` |  |  |  |
| Evaluation | Plan & Goals | `copmGoals` | COPM Goals | `textarea` |  |  |  |
| Evaluation | Plan & Goals | `splintIndicated` | Splint Indicated | `checkbox` |  |  |  |
| Evaluation | Plan & Goals | `splintType` | Splint Type | `text` |  |  |  |
| Evaluation | Plan & Goals | `assistiveTechNeeded` | Assistive Technology Needed | `checkbox` |  |  |  |
| Evaluation | Plan & Goals | `skilledCareJustification` | Skilled Care Justification | `textarea` |  |  |  |
| Evaluation | Plan & Goals | `sessionsPlanned` | Sessions Planned | `number` |  |  |  |
| Evaluation | Plan & Goals | `frequencyPerWeek` | Frequency/Week | `number` |  |  |  |
| Evaluation | Plan & Goals | `durationWeeks` | Duration (weeks) | `number` |  |  |  |
| Treatment Sessions | OT Session | `patientId` | Patient | `lookup` | Y |  |  |
| Treatment Sessions | OT Session | `sessionDate` | Session Date | `date` |  |  |  |
| Treatment Sessions | OT Session | `sessionNumber` | Session # | `number` |  |  |  |
| Treatment Sessions | OT Session | `therapist` | Therapist | `text` |  |  |  |
| Treatment Sessions | OT Session | `sessionDurationMin` | Duration (min) | `number` |  |  |  |
| Treatment Sessions | OT Session | `sessionType` | Session Type | `select` |  |  |  |
| Treatment Sessions | OT Session | `sessionFocus` | Session Focus | `text` |  |  |  |
| Treatment Sessions | OT Session | `adlTrainingPerformed` | ADL Training | `checkbox` |  |  |  |
| Treatment Sessions | OT Session | `iadlTrainingPerformed` | IADL Training | `checkbox` |  |  |  |
| Treatment Sessions | OT Session | `ueStrengtheningPerformed` | UE Strengthening | `checkbox` |  |  |  |
| Treatment Sessions | OT Session | `cognitiveRehabPerformed` | Cognitive Rehab | `checkbox` |  |  |  |
| Treatment Sessions | OT Session | `visualPerceptualTherapy` | Visual-Perceptual Therapy | `checkbox` |  |  |  |
| Treatment Sessions | OT Session | `sensoryRetraining` | Sensory Retraining | `checkbox` |  |  |  |
| Treatment Sessions | OT Session | `splintingPerformed` | Splinting | `checkbox` |  |  |  |
| Treatment Sessions | OT Session | `homeProgramProvided` | Home Program Provided | `checkbox` |  |  |  |
| Treatment Sessions | OT Session | `homeProgramCompliance` | Home Program Compliance | `select` |  |  |  |
| Treatment Sessions | OT Session | `patientResponse` | Patient Response | `select` |  |  |  |
| Treatment Sessions | OT Session | `shortTermGoalsProgress` | STG Progress | `textarea` |  |  |  |
| Treatment Sessions | OT Session | `sessionNotes` | Session Notes | `textarea` |  |  |  |
