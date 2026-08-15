---
title: "PracticeForceOneCFTrackingFields39"
---

# CF Tracking — Field-Level Detail (part 39 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Communication**, **Hospitalist**, **Perioperative**, **Pulmonary**, **Rehabilitation Medicine**, **Telehealth**, **Aesthetics**, **Care Management**, **ENT / Otolaryngology**, **GI Oncology**, **Gynecology Oncology**, **Neurosurgery**, **OB/GYN / Endocrinology**, **Orders**, **Orthopedic Oncology**, **Pediatric Neurology**, **Platform**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Communication

### Care Team Message — `care_team_message_cf`

Screen: 1 page(s) · 2 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Internal Care Team Message / Task | Message | `patientId` | Related Patient (if applicable) | `typeahead` |  |  |  |
| Internal Care Team Message / Task | Message | `encounterId` | Related Encounter / Visit | `text` |  |  |  |
| Internal Care Team Message / Task | Message | `messageDate` | Date | `date` | Y |  |  |
| Internal Care Team Message / Task | Message | `fromProvider` | From | `typeahead` | Y |  |  |
| Internal Care Team Message / Task | Message | `toProvider` | To (Assigned) | `typeahead` | Y |  |  |
| Internal Care Team Message / Task | Message | `messageType` | Type | `select` | Y |  |  |
| Internal Care Team Message / Task | Message | `priority2` | Priority | `select` | Y |  |  |
| Internal Care Team Message / Task | Message | `subject2` | Subject | `text` | Y |  |  |
| Internal Care Team Message / Task | Message | `messageBody` | Message | `textarea` | Y |  |  |
| Internal Care Team Message / Task | Message | `dueBy` | Due By Date | `date` |  |  |  |
| Internal Care Team Message / Task | Task Status | `taskStatus` | Status | `select` | Y |  |  |
| Internal Care Team Message / Task | Task Status | `reply` | Reply / Completion Notes | `textarea` |  |  |  |
| Internal Care Team Message / Task | Task Status | `completedBy` | Completed By | `typeahead` |  |  |  |
| Internal Care Team Message / Task | Task Status | `completedDate` | Completed Date | `date` |  |  |  |

### Correspondence — `patient_correspondence_cf`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Correspondence Log | Correspondence Entry | `patientId` | Patient | `typeahead` | Y |  |  |
| Patient Correspondence Log | Correspondence Entry | `correspondenceDate` | Date | `date` | Y |  |  |
| Patient Correspondence Log | Correspondence Entry | `correspondenceType` | Type | `select` | Y |  |  |
| Patient Correspondence Log | Correspondence Entry | `direction` | Direction | `select` |  |  |  |
| Patient Correspondence Log | Correspondence Entry | `subject` | Subject / Purpose | `select` |  |  |  |
| Patient Correspondence Log | Correspondence Entry | `staffMember` | Staff / Provider | `typeahead` |  |  |  |
| Patient Correspondence Log | Correspondence Entry | `durationMinutes` | Duration (minutes) | `number` |  |  |  |
| Patient Correspondence Log | Notes | `patientContact` | Patient Reached | `select` |  |  |  |
| Patient Correspondence Log | Notes | `correspondenceNotes` | Notes | `textarea` | Y |  |  |
| Patient Correspondence Log | Notes | `actionRequired` | Follow-Up Action | `select` |  |  |  |
| Patient Correspondence Log | Notes | `followUpDate` | Follow-Up Date (if applicable) | `date` |  |  |  |

### Messages — `message_center_cf`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Secure Message Center | Compose Message | `messageType` | Message Type | `select` |  |  |  |
| Secure Message Center | Compose Message | `recipient` | To (Patient) | `typeahead` |  |  |  |
| Secure Message Center | Compose Message | `staffRecipient` | To (Staff) | `typeahead` |  |  |  |
| Secure Message Center | Compose Message | `subject` | Subject | `text` | Y |  |  |
| Secure Message Center | Compose Message | `messageBody` | Message | `textarea` | Y |  |  |
| Secure Message Center | Compose Message | `priority` | Priority | `select` |  |  |  |
| Secure Message Center | Compose Message | `relatedEncounterId` | Related Encounter ID | `text` |  |  |  |
| Secure Message Center | Inbox | `inboxFilter` | Filter | `select` |  |  |  |
| Secure Message Center | Inbox | `unreadCount` | Unread Messages | `number` |  |  |  |
| Secure Message Center | Inbox | `lastMessageDate` | Most Recent Message | `date` |  |  |  |
| Secure Message Center | Inbox | `inboxNotes` | Message Notes | `textarea` |  |  |  |

### Portal Message — `portal_message_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Portal Secure Message | Message Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Patient Portal Secure Message | Message Context | `messageDate` | Message Date | `date` | Y |  |  |
| Patient Portal Secure Message | Message Context | `direction` | Direction | `select` | Y |  |  |
| Patient Portal Secure Message | Message Context | `category` | Message Category | `select` | Y |  |  |
| Patient Portal Secure Message | Message Context | `priority` | Priority | `select` |  |  |  |
| Patient Portal Secure Message | Message Content | `subject` | Subject | `text` | Y |  |  |
| Patient Portal Secure Message | Message Content | `patientMessage` | Patient's Message (if incoming) | `textarea` |  |  |  |
| Patient Portal Secure Message | Message Content | `practiceReply` | Practice Reply | `textarea` | Y |  |  |
| Patient Portal Secure Message | Routing & Resolution | `assignedTo` | Assigned To | `typeahead` |  |  |  |
| Patient Portal Secure Message | Routing & Resolution | `providerReviewedBy` | Provider Who Reviewed / Approved Reply | `typeahead` |  |  |  |
| Patient Portal Secure Message | Routing & Resolution | `responseTime` | Response Time | `text` |  |  |  |
| Patient Portal Secure Message | Routing & Resolution | `messageStatus` | Message Status | `select` | Y |  |  |
| Patient Portal Secure Message | Routing & Resolution | `encounterId` | Related Encounter (if applicable) | `text` |  |  |  |

## Hospitalist

### Admission Note — `hospital_admission_note_cf`

Screen: 1 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hospital Admission Note | Admission Details | `admission_type` | Admission Type | `select` |  |  |  |
| Hospital Admission Note | Admission Details | `admitting_dx` | Admitting Diagnosis | `text` |  |  |  |
| Hospital Admission Note | Admission Details | `source` | Admission Source | `select` |  |  |  |
| Hospital Admission Note | Admission Details | `code_status` | Code Status | `select` |  |  |  |
| Hospital Admission Note | Clinical Status on Admission | `temp` | Temperature (°F) | `number` |  |  |  |
| Hospital Admission Note | Clinical Status on Admission | `hr` | Heart Rate (bpm) | `number` |  |  |  |
| Hospital Admission Note | Clinical Status on Admission | `rr` | Respiratory Rate | `number` |  |  |  |
| Hospital Admission Note | Clinical Status on Admission | `sbp` | SBP (mmHg) | `number` |  |  |  |
| Hospital Admission Note | Clinical Status on Admission | `dbp` | DBP (mmHg) | `number` |  |  |  |
| Hospital Admission Note | Clinical Status on Admission | `spo2` | SpO2 (%) | `number` |  |  |  |
| Hospital Admission Note | Clinical Status on Admission | `oxygen_support` | Oxygen Support | `select` |  |  |  |
| Hospital Admission Note | Clinical Status on Admission | `gcs` | GCS (if altered mental status) | `number` |  |  |  |
| Hospital Admission Note | Admission Plan | `primary_problem` | Primary Problem and Working Diagnosis | `textarea` |  |  |  |
| Hospital Admission Note | Admission Plan | `active_problems` | Active Medical Problems List | `textarea` |  |  |  |
| Hospital Admission Note | Admission Plan | `diagnostic_plan` | Diagnostic Plan | `textarea` |  |  |  |
| Hospital Admission Note | Admission Plan | `therapeutic_plan` | Therapeutic Plan | `textarea` |  |  |  |
| Hospital Admission Note | Admission Plan | `consults_ordered` | Consults Ordered | `text` |  |  |  |
| Hospital Admission Note | Admission Plan | `dvt_prophylaxis` | DVT prophylaxis ordered | `checkbox` |  |  |  |
| Hospital Admission Note | Admission Plan | `diet` | Diet Order | `select` |  |  |  |

### Care Transition — `care_transition_cf`

Screen: 1 page(s) · 2 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Care Transition Note | Transition Details | `transition_type` | Type of Transition | `select` |  |  |  |
| Care Transition Note | Transition Details | `receiving_provider` | Receiving Provider / Team | `text` |  |  |  |
| Care Transition Note | Clinical Handoff (IPASS) | `illness_severity` | Illness Severity | `select` |  |  |  |
| Care Transition Note | Clinical Handoff (IPASS) | `patient_summary` | Patient Summary (brief HPI + hospital course) | `textarea` |  |  |  |
| Care Transition Note | Clinical Handoff (IPASS) | `action_list` | Action List / To-Dos for Receiving Provider | `textarea` |  |  |  |
| Care Transition Note | Clinical Handoff (IPASS) | `situation_awareness` | Situation Awareness (if patient deteriorates, consider...) | `textarea` |  |  |  |
| Care Transition Note | Clinical Handoff (IPASS) | `synthesis_by_receiver` | Read-back / synthesis by receiver confirmed (verbal) | `checkbox` |  |  |  |

### Discharge Summary — `hospital_discharge_summary_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hospital Discharge Summary | Hospitalization Summary | `admission_date` | Admission Date | `date` |  |  |  |
| Hospital Discharge Summary | Hospitalization Summary | `discharge_date` | Discharge Date | `date` |  |  |  |
| Hospital Discharge Summary | Hospitalization Summary | `length_of_stay_days` | Length of Stay (days) | `number` |  |  |  |
| Hospital Discharge Summary | Hospitalization Summary | `principal_dx` | Principal Discharge Diagnosis | `text` |  |  |  |
| Hospital Discharge Summary | Hospitalization Summary | `secondary_dx` | Secondary Diagnoses / Comorbidities | `textarea` |  |  |  |
| Hospital Discharge Summary | Hospitalization Summary | `procedures_performed` | Procedures Performed | `textarea` |  |  |  |
| Hospital Discharge Summary | Clinical Course | `hospital_course` | Brief Hospital Course | `textarea` |  |  |  |
| Hospital Discharge Summary | Discharge Plan | `disposition` | Discharge Disposition | `select` |  |  |  |
| Hospital Discharge Summary | Discharge Plan | `condition_at_discharge` | Condition at Discharge | `select` |  |  |  |
| Hospital Discharge Summary | Discharge Plan | `followup_provider` | Follow-up Physician / Provider | `text` |  |  |  |
| Hospital Discharge Summary | Discharge Plan | `followup_within_days` | Follow-up Within (days) | `number` |  |  |  |
| Hospital Discharge Summary | Discharge Plan | `pending_results` | Pending Lab / Culture Results at Discharge | `textarea` |  |  |  |
| Hospital Discharge Summary | Discharge Plan | `discharge_meds` | Key Discharge Medications / Changes | `textarea` |  |  |  |
| Hospital Discharge Summary | Discharge Plan | `patient_education` | Patient education and discharge instructions provided | `checkbox` |  |  |  |
| Hospital Discharge Summary | Discharge Plan | `return_precautions` | Return Precautions (when to return to ED) | `textarea` |  |  |  |

### Rapid Response — `rapid_response_note_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Rapid Response / Code Note | Event Details | `event_type` | Event Type | `select` |  |  |  |
| Rapid Response / Code Note | Event Details | `event_time` | Event Date / Time | `text` |  |  |  |
| Rapid Response / Code Note | Event Details | `location` | Location (unit / room) | `text` |  |  |  |
| Rapid Response / Code Note | Event Details | `triggered_by` | Triggered By | `select` |  |  |  |
| Rapid Response / Code Note | Presenting Condition | `presenting_issue` | Primary Presenting Issue | `select` |  |  |  |
| Rapid Response / Code Note | Presenting Condition | `rhythm` | Initial Rhythm (if cardiac) | `select` |  |  |  |
| Rapid Response / Code Note | Presenting Condition | `rosc` | ROSC achieved (return of spontaneous circulation) | `checkbox` |  |  |  |
| Rapid Response / Code Note | Interventions and Outcome | `interventions` | Interventions Performed | `textarea` |  |  |  |
| Rapid Response / Code Note | Interventions and Outcome | `outcome` | Outcome | `select` |  |  |  |
| Rapid Response / Code Note | Interventions and Outcome | `notes` | Additional Notes | `textarea` |  |  |  |

## Perioperative

### Pre-Anesthesia Eval — `pre_anesthesia_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pre-Anesthesia Evaluation | Patient & Procedure | `patientId` | Patient | `typeahead` | Y |  |  |
| Pre-Anesthesia Evaluation | Patient & Procedure | `evalDate` | Evaluation Date | `date` | Y |  |  |
| Pre-Anesthesia Evaluation | Patient & Procedure | `provider` | Anesthesiologist / CRNA | `typeahead` | Y |  |  |
| Pre-Anesthesia Evaluation | Patient & Procedure | `plannedProcedure` | Planned Procedure | `text` | Y |  |  |
| Pre-Anesthesia Evaluation | Patient & Procedure | `surgeonName` | Surgeon | `text` | Y |  |  |
| Pre-Anesthesia Evaluation | Patient & Procedure | `surgeryDate` | Planned Surgery Date | `date` | Y |  |  |
| Pre-Anesthesia Evaluation | Patient & Procedure | `anesthesiaType` | Planned Anesthesia Type | `select` | Y |  |  |
| Pre-Anesthesia Evaluation | Anesthesia-Relevant History | `priorAnesthesia` | Prior Anesthesia / Complications | `select` | Y |  |  |
| Pre-Anesthesia Evaluation | Anesthesia-Relevant History | `asaClass` | ASA Physical Status Classification | `select` | Y |  |  |
| Pre-Anesthesia Evaluation | Anesthesia-Relevant History | `airwayAssessment` | Airway Assessment | `textarea` | Y |  |  |
| Pre-Anesthesia Evaluation | Anesthesia-Relevant History | `significantHx` | Significant Medical History | `textarea` | Y |  |  |
| Pre-Anesthesia Evaluation | Pre-op Labs & Clearance | `preOpLabs` | Pre-op Labs / Studies | `textarea` | Y |  |  |
| Pre-Anesthesia Evaluation | Pre-op Labs & Clearance | `medicationManagement` | Medication Management Instructions | `textarea` | Y |  |  |
| Pre-Anesthesia Evaluation | Pre-op Labs & Clearance | `clearance` | Anesthesia Clearance | `select` | Y |  |  |
| Pre-Anesthesia Evaluation | Pre-op Labs & Clearance | `anesthesiaPlan` | Anesthesia Plan | `textarea` | Y |  |  |

### Pre-Op Medical Clearance — `perioperative_preop_clearance_cf`

Screen: 1 page(s) · 5 section(s) · 22 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Preoperative Medical Clearance | Surgical Procedure and Risk | `preop_procedure` | Planned Surgical Procedure | `text` |  |  |  |
| Preoperative Medical Clearance | Surgical Procedure and Risk | `preop_surgeon` | Referring Surgeon and Specialty | `text` |  |  |  |
| Preoperative Medical Clearance | Surgical Procedure and Risk | `preop_planned_date` | Planned Surgery Date | `date` |  |  |  |
| Preoperative Medical Clearance | Surgical Procedure and Risk | `preop_anesthesia_type` | Anticipated Anesthesia Type | `select` |  |  |  |
| Preoperative Medical Clearance | Surgical Procedure and Risk | `preop_surgical_risk` | Surgical Risk Category (ACC/AHA) | `select` |  |  |  |
| Preoperative Medical Clearance | Surgical Procedure and Risk | `preop_urgency` | Urgency | `select` |  |  |  |
| Preoperative Medical Clearance | Cardiac Risk Assessment (ACC/AHA Algorithm) | `preop_active_cardiac` | Active Cardiac Conditions (Step 1 — DEFER if present) | `select` |  |  |  |
| Preoperative Medical Clearance | Cardiac Risk Assessment (ACC/AHA Algorithm) | `preop_revised_cardiac_risk` | Revised Cardiac Risk Index (RCRI) Score | `select` |  |  |  |
| Preoperative Medical Clearance | Cardiac Risk Assessment (ACC/AHA Algorithm) | `preop_rcri_factors` | RCRI Risk Factors Present | `select` |  |  |  |
| Preoperative Medical Clearance | Cardiac Risk Assessment (ACC/AHA Algorithm) | `preop_mets` | Functional Capacity (METs) | `select` |  |  |  |
| Preoperative Medical Clearance | Cardiac Risk Assessment (ACC/AHA Algorithm) | `preop_stress_test` | Preoperative Stress Testing Decision | `select` |  |  |  |
| Preoperative Medical Clearance | Pulmonary and Other Risk Assessment | `preop_pulm_risk` | Pulmonary Risk Factors | `select` |  |  |  |
| Preoperative Medical Clearance | Pulmonary and Other Risk Assessment | `preop_anticoag` | Anticoagulation Management | `select` |  |  |  |
| Preoperative Medical Clearance | Pulmonary and Other Risk Assessment | `preop_glycemic` | Perioperative Glycemic Management (Diabetic Patients) | `select` |  |  |  |
| Preoperative Medical Clearance | Medication Management Instructions | `preop_hold_meds` | Medications to HOLD Before Surgery (name, how many days, specific instructions) | `textarea` |  |  |  |
| Preoperative Medical Clearance | Medication Management Instructions | `preop_continue_meds` | Medications to CONTINUE Until Surgery (with sip of water) | `textarea` |  |  |  |
| Preoperative Medical Clearance | Medication Management Instructions | `preop_npo_instructions` | NPO Instructions | `select` |  |  |  |
| Preoperative Medical Clearance | Clearance Decision and Optimization | `preop_asa_class` | ASA Physical Status Classification | `select` |  |  |  |
| Preoperative Medical Clearance | Clearance Decision and Optimization | `preop_clearance_status` | Clearance Decision | `select` |  |  |  |
| Preoperative Medical Clearance | Clearance Decision and Optimization | `preop_optimization_plan` | Optimization Plan (if deferred — specific targets, referrals, timeline) | `textarea` |  |  |  |
| Preoperative Medical Clearance | Clearance Decision and Optimization | `preop_labs_ordered` | Preoperative Labs Ordered | `select` |  |  |  |
| Preoperative Medical Clearance | Clearance Decision and Optimization | `preop_notes` | Clearance Note and Communication to Surgical Team | `textarea` |  |  |  |

### Procedural Sedation — `procedural_sedation_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Procedural Sedation Note | Patient & Procedure | `patientId` | Patient | `typeahead` | Y |  |  |
| Procedural Sedation Note | Patient & Procedure | `procedureDate` | Procedure Date | `date` | Y |  |  |
| Procedural Sedation Note | Patient & Procedure | `provider` | Performing Provider | `typeahead` | Y |  |  |
| Procedural Sedation Note | Patient & Procedure | `sedProvider` | Sedation Provider (if different) | `text` |  |  |  |
| Procedural Sedation Note | Patient & Procedure | `procedure` | Procedure | `text` | Y |  |  |
| Procedural Sedation Note | Patient & Procedure | `sedLevel` | Target Sedation Level | `select` | Y |  |  |
| Procedural Sedation Note | Pre-Procedure | `preSedHx` | Pre-Sedation Assessment | `textarea` | Y |  |  |
| Procedural Sedation Note | Pre-Procedure | `medications` | Medications Administered | `textarea` | Y |  |  |
| Procedural Sedation Note | Monitoring & Recovery | `monitoringData` | Monitoring During Procedure | `textarea` | Y |  |  |
| Procedural Sedation Note | Monitoring & Recovery | `complications` | Complications | `select` | Y |  |  |
| Procedural Sedation Note | Monitoring & Recovery | `recoveryDischarge` | Recovery & Discharge Criteria | `textarea` | Y |  |  |

### Surgical Medical Clearance — `surgical_clearance_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pre-Operative Medical Clearance | Patient & Procedure | `patientId` | Patient | `typeahead` | Y |  |  |
| Pre-Operative Medical Clearance | Patient & Procedure | `visitDate` | Clearance Date | `date` | Y |  |  |
| Pre-Operative Medical Clearance | Patient & Procedure | `provider` | Clearing Provider (PCP / Internist) | `typeahead` | Y |  |  |
| Pre-Operative Medical Clearance | Patient & Procedure | `procedure` | Planned Procedure | `text` | Y |  |  |
| Pre-Operative Medical Clearance | Patient & Procedure | `surgeon` | Surgeon / Specialty | `text` | Y |  |  |
| Pre-Operative Medical Clearance | Patient & Procedure | `surgeryDate` | Planned Surgery Date | `date` | Y |  |  |
| Pre-Operative Medical Clearance | Medical Evaluation | `cardiacRisk` | Revised Cardiac Risk Index (RCRI) | `select` | Y |  |  |
| Pre-Operative Medical Clearance | Medical Evaluation | `functionalCapacity` | Functional Capacity (METs) | `select` | Y |  |  |
| Pre-Operative Medical Clearance | Medical Evaluation | `activeCardiacConditions` | Active Cardiac Conditions (if any) | `textarea` |  |  |  |
| Pre-Operative Medical Clearance | Medical Evaluation | `medicalConditions` | Medical Summary & Active Problems | `textarea` | Y |  |  |
| Pre-Operative Medical Clearance | Clearance Decision | `workupOrdered` | Pre-op Workup Ordered / Reviewed | `textarea` | Y |  |  |
| Pre-Operative Medical Clearance | Clearance Decision | `clearanceDecision` | Medical Clearance Decision | `select` | Y |  |  |
| Pre-Operative Medical Clearance | Clearance Decision | `clearanceLetter` | Clearance Letter Summary (for surgeon file) | `textarea` | Y |  |  |

## Pulmonary

### COPD GOLD 2024 — `pulmonology_copd_gold2024_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| COPD GOLD 2024: Diagnosis, Exacerbation Prevention, Pharmacotherapy, and Interventions | COPD Diagnosis, GOLD Grades, ABCE Assessment, and Exacerbation Risk Stratification | `copd_class` | GOLD Spirometry Grades: 1 FEV1 Above 80%; 2 50-79%; 3 30-49%; 4 Below 30%; Post-BD FEV1/FVC Below 0.70 Required; GOLD Groups ABCE: A Low Exacerbation Risk Low Symptoms; B High Symptoms; E High Exacerbation Above 2 Mod or 1 Severe; CAT mMRC; SGRQ; 6MWT; DLCO Alpha-1 Antitrypsin; CT Emphysema Pattern Centrilobular Panlobular | `select` |  |  |  |
| COPD GOLD 2024: Diagnosis, Exacerbation Prevention, Pharmacotherapy, and Interventions | COPD Diagnosis, GOLD Grades, ABCE Assessment, and Exacerbation Risk Stratification | `copd_treatment` | COPD Pharmacotherapy: Group A SABA PRN; Group B LAMA or LABA Dual LAMA+LABA; Group E Triple ICS+LAMA+LABA IMPACT ETHOS; Dupilumab Dupixent Eos Above 300 BOREAS 34% Exacerbation Reduction; Azithromycin 500mg 3x/wk Reduce Exacerbations; Roflumilast 500mcg QD PDE4; LTOT PaO2 Below 55 SaO2 Below 88%; NPPV Hypercapnia; Rehab; LVRS NETT Upper Lobe; Bronchoscopic BTVA Zephyr -- COPD 2024 PHARMACOTHERAPY: INHALED BRONCHODILATORS [CORNERSTONE; NO TOLERANCE DEVELOPS]: SABA [SHORT-ACTING BETA2 AGONIST; ALBUTEROL/SALBUTAMOL; PRN RESCUE; ALL GROUPS]; SAMA [IPRATROPIUM; ATROVENT; Q6H; ADD-ON OR ALTERNATIVE]; LABA [LONG-ACTING BETA2 AGONIST; FORMOTEROL; INDACATEROL; VILANTEROL; OLODATEROL]; LAMA [LONG-ACTING MUSCARINIC ANTAGONIST; TIOTROPIUM SPIRIVA HANDIHALER/RESPIMAT; UMECLIDINIUM; GLYCOPYRROLATE; ACLIDINIUM; SUPERIOR LABA FOR HYPERINFLATION+EXERCISE]; DUAL LAMA+LABA [GROUP B PREFERRED INITIAL; BETTER SYMPTOM CONTROL VS MONOTHERAPY; UMECLIDINIUM/VILANTEROL [ANORO]; TIOTROPIUM+OLODATEROL [STIOLTO]; GLYCOPYRROLATE/INDACATEROL [ULTIBRO]; GLYCOPYRROLATE/FORMOTEROL [BEVESPI]]; TRIPLE THERAPY [ICS+LAMA+LABA; GROUP E BLOOD EOS ABOVE 100; ALSO GROUP B PERSISTENT SYMPTOMATIC DESPITE DUAL]: IMPACT NEJM 2018 [FLUTICASONE FUROATE/UMECLIDINIUM/VILANTEROL [TRELEGY ELLIPTA] VS DUAL; ANNUAL EXACERBATION RATE 0.91 vs 1.07 VS FF/VI ALONE; ALL-CAUSE MORTALITY SIGNAL]; ETHOS NEJM 2020 [BUDESONIDE/GLYCOPYRROLATE/FORMOTEROL [BREZTRI AEROSPHERE]; MODERATE-SEVERE EXACERBATIONS REDUCED]; ICS RISKS [PNEUMONIA [30% INCREASE COPD ICS+]; ORAL CANDIDIASIS; OSTEOPOROSIS; ADRENAL SUPPRESSION; CATARACT; WITHDRAW ICS IF EOS BELOW 100 LOW BENEFIT/HARM]; DUPILUMAB [ANTI-IL-4Ra; DUPIXENT; BOREAS NEJM 2023: BLOOD EOS ABOVE 300; DUPILUMAB 300 mg Q2W: ANNUAL MOD-SEVERE EXACERBATIONS 0.78 vs 1.10 [RATE RATIO 0.70; 30% REDUCTION]; FEV1 IMPROVEMENT 160 mL VS PLACEBO; FDA 2024 COPD WITH EOS ABOVE 300; FIRST BIOLOGIC APPROVED COPD; 300 mg SC Q2W]; AZITHROMYCIN [500 mg 3x/WEEK OR 250 mg QD; ALBERT NEJM 2011: EXACERBATION REDUCTION 22%; FREQUENT EXACERBATOR PHENOTYPE; HEARING TEST BASELINE; QTc SCREEN; MAC SPUTUM CULTURE SCREEN; EAR TOXICITY CONCERN LONG-TERM]; ROFLUMILAST [DALIRESP; PDE4 INHIBITOR; 500 MCAG QD ORAL; CHRONIC BRONCHITIS + FEV1 BELOW 50% + FREQUENT EXACERBATIONS; NAUSEA WEIGHT LOSS HEADACHE; CONTRAINDICATED LIVER FAILURE]; N-ACETYLCYSTEINE [NAC; 600 mg BID; ANTIOXIDANT MUCOLYTIC; NEPHRIC PROTECTION EVIDENCE LIMITED; LOW-COST]; SMOKING CESSATION [MOST IMPORTANT INTERVENTION; DISEASE-MODIFYING]: VARENICLINE [CHANTIX; 0.5 mg QD WK1; 1 mg BID WK2-12; SUPERIOR NRT; CV SAFETY CONFIRMED EAGLES TRIAL]; BUPROPION [150 mg BID]; COMBINATION [BEST NRT = PATCH+LOZENGE]; E-CIGARETTES [NOT RECOMMENDED; INSUFFICIENT SAFETY]; OXYGEN THERAPY [LTOT LONG-TERM OXYGEN]: INDICATION [REST PaO2 AT OR BELOW 55 mmHg; OR SaO2 AT OR BELOW 88%; OR PaO2 55-59 WITH SECONDARY POLYCYTHEMIA/PULM HTN/EDEMA]; ABOVE 15H/DAY MINIMUM; NOCTURNAL OXYGEN [NOCTURNAL DESATURATION BELOW 88%; NOT CLEARLY PROVEN MORTALITY BENEFIT HOT-HME]; NPPV [NON-INVASIVE POSITIVE PRESSURE VENTILATION; BILEVEL PAP BPAP; ACUTE COPD EXACERBATION WITH HYPERCAPNIC RESPIRATORY FAILURE; CHRONIC NOCTURNAL BPAP + LTOT HOHNSORG NEJM 2017: REDUCED ADMISSION+MORTALITY STABLE HYPERCAPNIC COPD]; LUNG VOLUME REDUCTION: SURGICAL LVRS [NETT NEJM 2003: HETEROGENEOUS UPPER-LOBE EMPHYSEMA + LOW EXERCISE CAPACITY: SUPERIOR MEDICAL; SURVIVAL + QOL]; ENDOBRONCHIAL VALVES [ZEPHYR VALVE; BTVA BRONCHOSCOPIC THERMAL VAPOR ABLATION; VALVE ELIGIBILITY [MINIMAL COLLATERAL VENTILATION]; LIBERATION TRIAL; FEV1 IMPROVEMENT 100-150 mL; APPROPRIATE EMPHYSEMA]; ENDOBRONCHIAL COILS [EUROSTAR]; PULMONARY REHABILITATION [ALL STABLE COPD ABOVE mMRC 1; 12 WEEKS; MOST EFFICACIOUS NON-PHARMACOLOGIC COPD; EXERCISE TOLERANCE; EXACERBATION REDUCTION; EDUCATION] | `text` |  |  |  |
| COPD GOLD 2024: Diagnosis, Exacerbation Prevention, Pharmacotherapy, and Interventions | COPD Management Notes | `copd_mgmt_notes` | COPD Management Notes and Pulmonology/Respiratory Therapy/Thoracic Surgery/Pharmacy/Nursing/Pulmonary Rehab/Smoking Cessation/Palliative Care/Social Work Coordination | `textarea` |  |  |  |

### ILD/IPF — `pulmonology_ild_ipf_management_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Interstitial Lung Disease and IPF: Diagnosis, Antifibrotic Therapy, and Multidisciplinary Management | ILD Classification, HRCT Diagnosis, and Physiologic Assessment | `ild_class` | ILD Classification: IPF/UIP Basal Subpleural Honeycombing Traction Bronchiectasis; NSIP Bilateral Ground Glass; COP Consolidation; HP Hypersensitivity Pneumonitis Allergen History; CTD-ILD SSc-ILD SLE-ILD RA-ILD; DLCO FVC TLC Restriction; 6MWT SpO2 Desaturation; Multidisciplinary Diagnosis MDT | `select` |  |  |  |
| Interstitial Lung Disease and IPF: Diagnosis, Antifibrotic Therapy, and Multidisciplinary Management | ILD Classification, HRCT Diagnosis, and Physiologic Assessment | `ild_treatment` | IPF Antifibrotic: Nintedanib INPULSIS NEJM 2014 FVC Decline Reduced 50%; Pirfenidone ASCEND NEJM 2014 Reduce FVC Decline 47.9%; INSTAGE Combination Not Superior; CTD-ILD: Nintedanib SENSCIS SSc-ILD FVC Preserved; Tocilizumab FaSScinate/FOCUSSED; Lung Transplant Bilateral Preferred; LTOT O2 Below 88%; PH-ILD Treprostinil INCREASE -- IPF ANTIFIBROTIC THERAPY [DISEASE-MODIFYING; SLOWS NOT REVERSES]: NINTEDANIB [OFEV; TYROSINE KINASE INHIBITOR [TKI]; TARGETS PDGFR/VEGFR/FGFR [FIBROTIC PATHWAYS]; INPULSIS TRIALS NEJM 2014 [INPULSIS-1 + INPULSIS-2]: NINTEDANIB 150 mg BID vs PLACEBO: ANNUAL FVC DECLINE REDUCED FROM -223 mL TO -113 mL [50% REDUCTION]; FDA 2014; DOSE 150 mg BID WITH FOOD; REDUCE 100 mg BID IF INTOLERABLE; ADVERSE EFFECTS [DIARRHEA [61%; MOST COMMON; LOPERAMIDE; HOLD DOSE]; NAUSEA; LIVER ENZYME ELEVATION [CHECK LFTs Q3M]]; CTD-ILD LABEL: SENSCIS NEJM 2019 [SSc-ILD]: NINTEDANIB 150 mg BID vs PLACEBO: FVC DECLINE -52.4 vs -93.3 mL/YEAR [44% REDUCTION]; FDA 2019 SSc-ILD; ALSO RA-ILD; OTHER CTD-ILD]; PIRFENIDONE [ESBRIET; ANTI-FIBROTIC; MECHANISM [REDUCES TGF-BETA; COLLAGEN SYNTHESIS]; ASCEND NEJM 2014: FVC DECLINE REDUCED 47.9% vs PLACEBO; FDA 2014; 267 mg TID TITRATE OVER 2 WEEKS TO 801 mg TID; ADVERSE EFFECTS [PHOTOSENSITIVITY [USE SUNSCREEN; AVOID PROLONGED SUN]; NAUSEA [TAKE WITH FOOD]; LFT ELEVATION]; INSTAGE TRIAL [NINTEDANIB+PIRFENIDONE COMBINATION: GI TOXICITY HIGHER; NOT SUPERIOR FVC; COMBINATION NOT RECOMMENDED]; SELECTION [NO HEAD-TO-HEAD; PATIENT TOLERABILITY; COST; GI VS PHOTOSENSITIVITY; BOTH EQUALLY EFFECTIVE]; DO NOT DELAY [START AT DIAGNOSIS; REGARDLESS FVC PERCENT PREDICTED]; CTD-ILD SPECIFIC [IMMUNOSUPPRESSION + ANTIFIBROTIC]: SSc-ILD [CYCLOPHOSPHAMIDE [SCLERODERMA LUNG STUDY I]; MYCOPHENOLATE [SLS-II NEJM 2016: MMF VS CYC EQUIVALENT BENEFIT LESS TOXICITY; PREFERRED]; TOCILIZUMAB [FOCUSSED NEJM 2020: FVC PRESERVED TOCILIZUMAB 162 mg QW; FDA 2021 SSc-ILD]; NINTEDANIB]; HP-FIBROTIC [ANTIGEN AVOIDANCE [MOST IMPORTANT]; STEROIDS ACUTE; AZATHIOPRINE/MMF FIBROTIC]; DM-ILD [CYCLOPHOSPHAMIDE; RITUXIMAB MDA-5 AGGRESSIVE]; LUNG TRANSPLANT [ILD/IPF]: BILATERAL SEQUENTIAL LUNG TRANSPLANT [BSLT; PREFERRED OVER SINGLE; BETTER LONG-TERM OUTCOMES]; LISTING CRITERIA [FVC BELOW 80% WITH DECLINE ABOVE 10% IN 6M; DLCO BELOW 40%; DESATURATION BELOW 88% ON 6MWT; HCAP CRITERIA]; WAITLIST PRIORITY [LAS [LUNG ALLOCATION SCORE] HIGHER FOR ILD VS COPD; MEDIAN WAIT 6-24 MONTHS VARIES]; 5-YEAR SURVIVAL 50-55% POST-TRANSPLANT; PH ASSOCIATED ILD [PH-ILD; TREPROSTINIL INHALED [TYVASO; INCREASE TRIAL NEJM 2021: TREPROSTINIL VS PLACEBO ILD+PH: 6MWT +31m; FDA 2021]; LTOT [SUPPLEMENTAL O2; NOCTURNAL; EXERTIONAL; SpO2 BELOW 88%; IMPROVE SYMPTOMS; UNCLEAR SURVIVAL BENEFIT ILD UNLIKE COPD] | `text` |  |  |  |
| Interstitial Lung Disease and IPF: Diagnosis, Antifibrotic Therapy, and Multidisciplinary Management | ILD/IPF Management Notes | `ild_mgmt_notes` | ILD/IPF Management Notes and Pulmonology/Rheumatology/Radiology/Pathology/Transplant/Pharmacy/Pulmonary Rehab/Palliative Care/Social Work/Nursing Coordination | `textarea` |  |  |  |

### Pulmonary Hypertension — `pulmonology_pulmonary_arterial_hypertension_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pulmonary Arterial Hypertension: Diagnosis, Risk Stratification, and Sequential/Combination Therapy | PAH Diagnosis, WHO Classification, and Hemodynamic Criteria | `pah_class` | WHO 2022 PH Definition: mPAP Above 20 mmHg + PVR Above 2 WU + PAWP Below 15 mmHg; RHC Gold Standard; Group 1 PAH: Idiopathic IPAH Heritable BMPR2 CTD HIV Portal; WHO FC I-IV; 6MWT BNP; PVOD PCH | `select` |  |  |  |
| Pulmonary Arterial Hypertension: Diagnosis, Risk Stratification, and Sequential/Combination Therapy | PAH Diagnosis, WHO Classification, and Hemodynamic Criteria | `pah_risk` | PAH Risk Stratification: Low WHO FC I-II 6MWT Above 440m BNP Below 50 No RV Dysfunction; Intermediate; High WHO FC IV 6MWT Below 165m BNP Above 300 Pericardial Effusion CI Below 2; Treat-to-Target All Three Low-Risk Goals ESC 2022 -- PAH RISK STRATIFICATION (ESC/ERS 2022; TREAT-TO-TARGET): LOW RISK [FAVORABLE; TARGET; ALL 3 CRITERIA]: WHO FUNCTIONAL CLASS I OR II; 6-MINUTE WALK DISTANCE [6MWT] ABOVE 440 m; NT-proBNP BELOW 300 ng/L [BNP BELOW 50 pg/mL]; NO SIGNS RV FAILURE [PERICARDIAL EFFUSION ABSENT; RA AREA BELOW 18 cm2; TAPSE/PAPE ABOVE 0.32 m/s/mmHg]; CI ABOVE 2.5 L/MIN/M2; SVO2 ABOVE 65%; INTERMEDIATE RISK [2/3 CRITERIA LOW-RISK; MODERATE MORTALITY 5-10%/YEAR]: NOT ALL LOW; NOT ALL HIGH; HIGH RISK [ANY HIGH-RISK FEATURES; HOSPITALIZATION RISK ABOVE 10%/YEAR]: WHO FC IV; 6MWT BELOW 165 m; NT-proBNP ABOVE 1100 [BNP ABOVE 300]; PERICARDIAL EFFUSION; CI BELOW 2 L/MIN/M2; SVO2 BELOW 60%; SBP BELOW 90; ESCALATE THERAPY URGENTLY; ESC 2022 TREAT-TO-TARGET [AGGRESSIVE INITIAL COMBINATION]: GOAL: ALL PATIENTS ACHIEVE LOW-RISK STATUS AT 3-6 MONTHS; COMBINATION FROM DIAGNOSIS; REASSESS RISK EVERY 3-6 MONTHS; IF NOT LOW RISK = ESCALATE; FUNCTIONAL CLASS SYMPTOMS: FC I [NO LIMITATION; ORDINARY PHYSICAL ACTIVITY]; FC II [SLIGHT LIMITATION; COMFORTABLE AT REST; ORDINARY ACTIVITY CAUSES DYSPNEA/FATIGUE/CHEST PAIN/NEAR-SYNCOPE]; FC III [MARKED LIMITATION; COMFORTABLE AT REST; LESS THAN ORDINARY CAUSES SYMPTOMS]; FC IV [UNABLE TO CARRY OUT ANY ACTIVITY; SYMPTOMS AT REST; EVIDENCE RV FAILURE]; MONITORING [EVERY 3-6 MONTHS; CLINICAL; 6MWT; ECHO; LABS; BNP/NT-proBNP; ANNUAL RHC IN EXPERT CENTER]; PAH-SPECIFIC THERAPY DECISION [EXPERT CENTER CONSULTATION FOR ALL PAH] | `text` |  |  |  |
| Pulmonary Arterial Hypertension: Diagnosis, Risk Stratification, and Sequential/Combination Therapy | PAH Pharmacotherapy: ERA, PDE5i, sGC, Prostacyclin, and Combination | `pah_drugs` | Initial Combination: Ambrisentan+Tadalafil AMBITION NEJM 2015 50% Risk Reduction vs Mono; ERA Bosentan BREATHE-1 Macitentan SERAPHIN; PDE5i Sildenafil Tadalafil; sGC Riociguat PATENT; Selexipag GRIPHON; IV Epoprostenol TRIUMPH; Sotatercept STELLAR ActRIIA Activin Receptor | `select` |  |  |  |
| Pulmonary Arterial Hypertension: Diagnosis, Risk Stratification, and Sequential/Combination Therapy | PAH Pharmacotherapy: ERA, PDE5i, sGC, Prostacyclin, and Combination | `pah_notes` | PAH Management Notes and Pulmonology/Cardiology/Rheumatology/Heart Failure/Transplant/Pharmacy/Nursing/Palliative Care/Social Work Coordination | `textarea` |  |  |  |

### Severe Asthma — `pulmonology_severe_asthma_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Severe Asthma: Phenotyping, Biologic Selection, and Step Therapy | Severe Asthma Diagnosis, Phenotyping, and Biomarker Assessment | `asthma_class` | GINA 2024 Severity: Step 4-5 High-Dose ICS+LABA; Severe Uncontrolled: Exacerbations ACO or PFT Impairment FEV1 Below 80; T2-High Phenotype: Eosinophil Above 150-300 FeNO Above 20-25 ppb Atopy IgE; T2-Low: Neutrophilic Obesity Smoking; FeNO Fractional Exhaled Nitric Oxide; Induced Sputum; Aspirin-Exacerbated AERD NSAIDs; Vocal Cord Dysfunction | `select` |  |  |  |
| Severe Asthma: Phenotyping, Biologic Selection, and Step Therapy | Severe Asthma Diagnosis, Phenotyping, and Biomarker Assessment | `asthma_biologic` | Asthma Biologics: Omalizumab Anti-IgE INNOVATE 26% Exacerbation Reduction; Mepolizumab Anti-IL-5 MENSA 53%; Benralizumab Anti-IL-5Ra SIROCCO+CALIMA 51%; Dupilumab IL-4Ra QUEST 48-70%; Tezepelumab Anti-TSLP NAVIGATOR 70% All Phenotypes; Itepekimab Anti-IL-33; Oral Steroid Weaning; Bronchial Thermoplasty; Add-on Azithromycin -- SEVERE ASTHMA BIOLOGICS: OMALIZUMAB [XOLAIR; ANTI-IgE; MONOCLONAL IgG; NEUTRALIZES SERUM IgE; PREVENTS HIGH-AFFINITY FcERI BINDING; INNOVATE TRIAL: 26% REDUCTION SEVERE EXACERBATIONS; FDA 2003 ALLERGIC ASTHMA; ELIGIBILITY [IgE 30-1500 IU/mL + POSITIVE SKIN TEST/SPECIFIC IgE + AGE ABOVE 6Y + MODERATE-SEVERE PERSISTENT]; DOSE [WEIGHT+IgE DOSING TABLE; 150-375 mg SC Q2-4W]; RESPONSE [ASSESS 16 WEEKS; ANAPHYLAXIS [0.1-0.2%; OBSERVE 30 MIN EACH DOSE; REMS]]; MEPOLIZUMAB [NUCALA; ANTI-IL-5; REDUCES EOSINOPHIL PRODUCTION FROM BONE MARROW; MENSA NEJM 2014: EOSINOPHILIC SEVERE ASTHMA [BLOOD EOS ABOVE 150 ICS; ABOVE 300 UNCONTROLLED] 53% EXACERBATION REDUCTION; SIRIUS: 50% ORAL CS REDUCTION; FDA 2015; DOSE 100 mg SC QM; ALSO FDA: EOSINOPHILIC GPA; HYPEREOSINOPHILIC SYNDROME; NASAL POLYPS; SAFETY EXCELLENT; UPPER RESPIRATORY INJECTION SITE]; BENRALIZUMAB [FASENRA; ANTI-IL-5 RECEPTOR ALPHA [IL-5Ra]; DEPLETES EOSINOPHILS VIA ADCC [NEAR-COMPLETE ELIMINATION]; SIROCCO NEJM 2016+CALIMA: 51% EXACERBATION REDUCTION; FDA 2017; ELIGIBILITY [BLOOD EOS ABOVE 300 UNCONTROLLED; ABOVE 150 ICS-SUPPRESSED]; DOSE [30 mg SC Q4W x3 THEN Q8W MAINTENANCE; FASTER EVERY-8-WEEK MAINTENANCE]; ZONDA: 75% ORAL CS REDUCTION; EOSINOPHIL DEPLETION NEAR-COMPLETE DIFFERENT FROM MEPOLIZUMAB RECEPTOR]; DUPILUMAB [DUPIXENT; ANTI-IL-4Ra SUBUNIT [BLOCKS IL-4 + IL-13]; QUEST NEJM 2018: ALL COMERS: 48% EXACERBATION REDUCTION; ABOVE 70% REDUCTION IN EOS ABOVE 150+FeNO ABOVE 25 SUBGROUP; FDA 2018 MODERATE-SEVERE ASTHMA; 200-300 mg SC Q2W; ALSO FDA ATOPIC DERMATITIS; CRSwNP; PRURIGO; EOSINOPHILIC ESOPHAGITIS; EOE; TYPE-1/TYPE-2 DIABETES EXPLORED; PREFERRED NASAL POLYPS COMORBIDITY; PREFERRED AERD; PREFERRED T2-HIGH MULTIPLE COMORBID TYPE-2 CONDITIONS; FeNO ABOVE 25 BEST PREDICTOR]; TEZEPELUMAB [TEZSPIRE; ANTI-TSLP [THYMIC STROMAL LYMPHOPOIETIN; EPITHELIAL ALARMIN; UPSTREAM OF IL-4/IL-5/IL-13]; NAVIGATOR NEJM 2021: ALL-COMERS INCLUDING T2-LOW: 70% EXACERBATION REDUCTION [BROAD POPULATION]; MOST EFFECTIVE IN T2-HIGH BUT BENEFIT T2-LOW; FDA 2021; 210 mg SC QM; PREFERRED IF PHENOTYPE UNCERTAIN OR T2-LOW; BROADEST INDICATION ALL ASTHMA]; ITEPEKIMAB [ANTI-IL-33 ALARMIN; ZEFFIX; LATER TRIAL; OPTION]; DUPIXENT VS TEZEPELUMAB [CLINICAL CHOICE]: T2-HIGH [EOSINOPHILIC+ATOPIC+NASAL POLYPS: DUPILUMAB MULTIPLE COMORBID; T2-HIGH SIMPLE: MEPOLIZUMAB OR BENRALIZUMAB]; UNCERTAIN T2 STATUS [TEZEPELUMAB PREFERRED; BROADEST COVERAGE]; ORAL CORTICOSTEROID-DEPENDENT [ALL BIOLOGICS REDUCE; MEPOLIZUMAB SIRIUS; BENRALIZUMAB ZONDA; OCS REDUCTION PRIMARY ENDPOINT]; BRONCHIAL THERMOPLASTY [BTh; RADIOFREQUENCY ABLATION OF AIRWAY SMOOTH MUSCLE; FDA 2010; REDUCES ASTHMA ATTACKS; REVERSIBLE BRONCHOCONSTRICTION REDUCED; CONSIDER SEVERE ASTHMA BIOLOGIC INELIGIBLE; 3 BRONCHOSCOPY SESSIONS; COUGHING POST-PROCEDURE; BENEFIT UP TO 5 YEARS]; ADD-ON THERAPIES [AZITHROMYCIN 500 mg 3x/WEEK [AZITHRO ASTHMA TRIPLE THERAPY; REDUCES EXACERBATIONS NON-EOSINOPHILIC]; MONTELUKAST; TIOTROPIUM SPIRIVA RESPIMAT [LAMA ADD-ON STEP 4-5] | `text` |  |  |  |
| Severe Asthma: Phenotyping, Biologic Selection, and Step Therapy | Severe Asthma Management Notes | `asthma_mgmt_notes` | Severe Asthma Management Notes and Pulmonology/Allergy-Immunology/ENT Nasal Polyps/Pharmacy/Nursing/Asthma Educator/Respiratory Therapy/Social Work Coordination | `textarea` |  |  |  |

## Rehabilitation Medicine

### Amputee / Prosthetics — `pmr_amputee_prosthetics_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Amputee and Prosthetics Evaluation | Amputation Information | `level` | Amputation Level | `select` |  |  |  |
| Amputee and Prosthetics Evaluation | Amputation Information | `etiology` | Amputation Etiology | `select` |  |  |  |
| Amputee and Prosthetics Evaluation | Amputation Information | `surgery_date` | Date of Amputation | `date` |  |  |  |
| Amputee and Prosthetics Evaluation | Amputation Information | `stump_healed` | Residual limb healed / closed (prosthetic fitting generally after 6-8 weeks) | `checkbox` |  |  |  |
| Amputee and Prosthetics Evaluation | Functional Status and Medicare K-Level | `k_level` | Medicare Functional Classification Level (K-level) | `select` |  |  |  |
| Amputee and Prosthetics Evaluation | Functional Status and Medicare K-Level | `contralateral_limb` | Contralateral Limb Status (pulse, neuropathy, wounds — risk of second amputation) | `text` |  |  |  |
| Amputee and Prosthetics Evaluation | Functional Status and Medicare K-Level | `phantom_pain` | Phantom limb pain present (mirror therapy, pregabalin, SNRIs, mirror box, TENS) | `checkbox` |  |  |  |
| Amputee and Prosthetics Evaluation | Prosthetics Plan | `prosthetic_type` | Prosthetic Type (lower extremity) | `select` |  |  |  |
| Amputee and Prosthetics Evaluation | Prosthetics Plan | `socket_type` | Socket / Suspension | `select` |  |  |  |
| Amputee and Prosthetics Evaluation | Prosthetics Plan | `preprosthetic_goals` | Pre-Prosthetic Rehabilitation Goals (residual limb shaping, desensitization, strengthening, balance, transfers) | `textarea` |  |  |  |

### Cardiac Rehab — `pmr_cardiac_rehab_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiac Rehabilitation Assessment | Referral Indication | `qualifying_diagnosis` | Qualifying Diagnosis (CMS-covered) | `select` |  |  |  |
| Cardiac Rehabilitation Assessment | Referral Indication | `event_date` | Index Cardiac Event / Procedure Date | `date` |  |  |  |
| Cardiac Rehabilitation Assessment | Referral Indication | `ef` | Current LVEF (% — baseline for exercise prescription) | `number` |  |  |  |
| Cardiac Rehabilitation Assessment | Exercise Risk Stratification (AACVPR) | `risk_level` | Risk Level | `select` |  |  |  |
| Cardiac Rehabilitation Assessment | Exercise Risk Stratification (AACVPR) | `mets_functional` | Functional Capacity (METs — from exercise stress test; target 5-7 METs by end of CR) | `number` |  |  |  |
| Cardiac Rehabilitation Assessment | Exercise Risk Stratification (AACVPR) | `beta_blocker` | On beta-blocker (adjust exercise heart rate prescription — use RPE instead of target HR) | `checkbox` |  |  |  |
| Cardiac Rehabilitation Assessment | Exercise Prescription | `training_hr_target` | Target HR Range (Karvonen formula: resting + 60-80% HRR; or RPE 12-14 on Borg scale if BB) | `text` |  |  |  |
| Cardiac Rehabilitation Assessment | Exercise Prescription | `session_duration` | Session Duration (minutes — goal 30-60 minutes aerobic) | `number` |  |  |  |
| Cardiac Rehabilitation Assessment | Exercise Prescription | `sessions_per_week` | Sessions per Week | `select` |  |  |  |
| Cardiac Rehabilitation Assessment | Exercise Prescription | `total_sessions` | Total Supervised Sessions | `select` |  |  |  |
| Cardiac Rehabilitation Assessment | Exercise Prescription | `education_topics` | Education Topics (cardiac risk factors, diet, smoking cessation, medication adherence, return to activity, sexual activity) | `textarea` |  |  |  |

### Stroke Rehab — `pmr_stroke_rehab_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Stroke Rehabilitation Assessment | Stroke History | `stroke_date` | Stroke Date | `date` |  |  |  |
| Stroke Rehabilitation Assessment | Stroke History | `stroke_type` | Stroke Type | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Stroke History | `territory` | Vascular Territory (MCA / ACA / PCA / basilar / PICA / lacunar) | `text` |  |  |  |
| Stroke Rehabilitation Assessment | Stroke History | `nihss_on_admission` | NIHSS on Admission (0-42) | `number` |  |  |  |
| Stroke Rehabilitation Assessment | Stroke History | `mRS_premorbid` | Premorbid Functional Status (mRS) | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Post-Stroke Deficits | `motor` | Motor Deficits (hemiplegia / hemiparesis — UE/LE; spasticity — Ashworth scale; neglect) | `textarea` |  |  |  |
| Stroke Rehabilitation Assessment | Post-Stroke Deficits | `aphasia` | Aphasia Type | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Post-Stroke Deficits | `dysphagia` | Dysphagia (bedside swallow screen — SLP evaluation; MBSS / FEES if fails; aspiration precautions) | `checkbox` |  |  |  |
| Stroke Rehabilitation Assessment | Post-Stroke Deficits | `cognitive` | Cognitive Deficits (memory, attention, executive function — MoCA score, neglect screen) | `textarea` |  |  |  |
| Stroke Rehabilitation Assessment | Rehabilitation Plan | `fim_score` | FIM Score (18-126 — 18=total assist; 126=full independence; predicts IRF eligibility) | `number` |  |  |  |
| Stroke Rehabilitation Assessment | Rehabilitation Plan | `level_of_care` | Recommended Level of Care | `select` |  |  |  |
| Stroke Rehabilitation Assessment | Rehabilitation Plan | `therapy_goals` | Short-Term Therapy Goals (ambulation, ADL independence, communication) | `textarea` |  |  |  |
| Stroke Rehabilitation Assessment | Rehabilitation Plan | `spasticity_management` | Spasticity Management (baclofen, tizanidine, botulinum toxin injection — Ashworth ≥2) | `textarea` |  |  |  |

### TBI Rehab — `pmr_tbi_rehab_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| TBI Rehabilitation Assessment | TBI Classification | `severity` | TBI Severity | `select` |  |  |  |
| TBI Rehabilitation Assessment | TBI Classification | `mechanism` | Mechanism | `select` |  |  |  |
| TBI Rehabilitation Assessment | TBI Classification | `gcs_lowest` | Lowest GCS Score (post-resuscitation) | `number` |  |  |  |
| TBI Rehabilitation Assessment | TBI Classification | `pta_duration` | Post-Traumatic Amnesia Duration (PTA — inability to form new memories; document end date) | `text` |  |  |  |
| TBI Rehabilitation Assessment | Ranchos Los Amigos Scale (Consciousness) | `ranchos_level` | Ranchos Los Amigos Level | `select` |  |  |  |
| TBI Rehabilitation Assessment | Rehabilitation Plan | `agitation_management` | Agitation Management (amantadine 100-200mg BID — accelerates recovery; avoid benzos/haloperidol; structured environment) | `textarea` |  |  |  |
| TBI Rehabilitation Assessment | Rehabilitation Plan | `cognitive_rehab` | Cognitive Rehabilitation (memory aids, compensatory strategies, neuropsychology assessment) | `textarea` |  |  |  |
| TBI Rehabilitation Assessment | Rehabilitation Plan | `therapies` | Therapy Orders (PT: mobility/balance/transfers; OT: ADLs/cognition/splinting; SLP: dysphagia/communication; cognitive) | `textarea` |  |  |  |
| TBI Rehabilitation Assessment | Rehabilitation Plan | `return_to_work_drive` | Return to Work / Drive Clearance | `select` |  |  |  |

## Telehealth

### Med Management Telehealth — `telehealth_med_management_cf`

Screen: 1 page(s) · 5 section(s) · 21 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medication Management and Refill Visit | Visit Setup | `medmgmt_consent` | Telehealth Consent | `select` |  |  |  |
| Medication Management and Refill Visit | Visit Setup | `medmgmt_patient_location` | Patient State / Location (licensing requirement) | `text` |  |  |  |
| Medication Management and Refill Visit | Visit Setup | `medmgmt_visit_type` | Primary Visit Purpose | `select` |  |  |  |
| Medication Management and Refill Visit | Chronic Condition Status Review | `medmgmt_conditions` | Primary Condition Being Managed | `select` |  |  |  |
| Medication Management and Refill Visit | Chronic Condition Status Review | `medmgmt_control_level` | Condition Control Level | `select` |  |  |  |
| Medication Management and Refill Visit | Chronic Condition Status Review | `medmgmt_self_reported_values` | Patient-Reported Home Monitoring Values (BP readings, blood glucose, peak flow, weight) | `textarea` |  |  |  |
| Medication Management and Refill Visit | Chronic Condition Status Review | `medmgmt_last_labs_result` | Most Recent Lab Results Reviewed (HbA1c, TSH, lipids, BMP, etc.) | `textarea` |  |  |  |
| Medication Management and Refill Visit | Medication Adherence and Side Effects | `medmgmt_adherence_level` | Medication Adherence | `select` |  |  |  |
| Medication Management and Refill Visit | Medication Adherence and Side Effects | `medmgmt_adherence_barriers` | Adherence Barriers | `select` |  |  |  |
| Medication Management and Refill Visit | Medication Adherence and Side Effects | `medmgmt_side_effects` | Side Effects Reported | `select` |  |  |  |
| Medication Management and Refill Visit | Medication Adherence and Side Effects | `medmgmt_side_effects_detail` | Side Effect Details | `textarea` |  |  |  |
| Medication Management and Refill Visit | Medication Review and Changes | `medmgmt_meds_reconciled` | Medication Reconciliation | `select` |  |  |  |
| Medication Management and Refill Visit | Medication Review and Changes | `medmgmt_refill_plan` | Refill Plan | `select` |  |  |  |
| Medication Management and Refill Visit | Medication Review and Changes | `medmgmt_pharmacy` | Pharmacy for e-Prescribe (name, location, or chain) | `text` |  |  |  |
| Medication Management and Refill Visit | Medication Review and Changes | `medmgmt_rx_notes` | Prescription Details (medication, dose, frequency, quantity, refills) | `textarea` |  |  |  |
| Medication Management and Refill Visit | Medication Review and Changes | `medmgmt_controlled_substance` | Controlled Substance Management | `select` |  |  |  |
| Medication Management and Refill Visit | Treatment Goals and Follow-Up | `medmgmt_treatment_targets` | Treatment Targets Reviewed (e.g., goal BP under 130/80, HbA1c below 7%) | `textarea` |  |  |  |
| Medication Management and Refill Visit | Treatment Goals and Follow-Up | `medmgmt_lifestyle` | Lifestyle Counseling | `select` |  |  |  |
| Medication Management and Refill Visit | Treatment Goals and Follow-Up | `medmgmt_labs_ordered` | Follow-Up Labs Ordered | `select` |  |  |  |
| Medication Management and Refill Visit | Treatment Goals and Follow-Up | `medmgmt_followup` | Next Visit | `select` |  |  |  |
| Medication Management and Refill Visit | Treatment Goals and Follow-Up | `medmgmt_notes` | Clinical Notes | `textarea` |  |  |  |

### Mental Health Telehealth — `telehealth_mental_health_cf`

Screen: 1 page(s) · 4 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Mental Health Follow-Up (Telehealth) | Visit Setup and Safety Screen | `mh_consent` | Telehealth Consent | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Visit Setup and Safety Screen | `mh_patient_location` | Patient Current Location / State (licensing) | `text` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Visit Setup and Safety Screen | `mh_private_setting` | Privacy of Patient Setting | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Visit Setup and Safety Screen | `mh_safety_screen` | Safety Screen (Suicidality) | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Visit Setup and Safety Screen | `mh_primary_diagnosis` | Primary Psychiatric Diagnosis | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Symptom Review and Rating Scales | `mh_phq9_score` | PHQ-9 Score (Depression) | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Symptom Review and Rating Scales | `mh_gad7_score` | GAD-7 Score (Anxiety) | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Symptom Review and Rating Scales | `mh_mood_overall` | Patient-Reported Mood (Overall) | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Symptom Review and Rating Scales | `mh_sleep` | Sleep Quality | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Symptom Review and Rating Scales | `mh_energy_concentration` | Energy and Concentration | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Symptom Review and Rating Scales | `mh_functioning` | Functional Status (Work / School / Social) | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Medication Review | `mh_current_medications` | Current Psychiatric Medications (name, dose, frequency) | `textarea` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Medication Review | `mh_medication_response` | Response to Current Regimen | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Medication Review | `mh_side_effects` | Medication Side Effects | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Medication Review | `mh_adherence` | Medication Adherence | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Assessment and Treatment Plan | `mh_medication_plan` | Medication Plan | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Assessment and Treatment Plan | `mh_therapy_status` | Psychotherapy Status | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Assessment and Treatment Plan | `mh_crisis_plan` | Crisis Resources Reviewed | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Assessment and Treatment Plan | `mh_follow_up` | Next Appointment | `select` |  |  |  |
| Mental Health Follow-Up (Telehealth) | Assessment and Treatment Plan | `mh_notes` | Clinical Notes and Plan Details | `textarea` |  |  |  |

### New Patient Telehealth — `telehealth_new_patient_cf`

Screen: 1 page(s) · 6 section(s) · 34 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| New Patient Virtual Visit | Telehealth Consent and Technical Setup | `tele_consent_obtained` | Informed Consent for Telehealth | `select` |  |  |  |
| New Patient Virtual Visit | Telehealth Consent and Technical Setup | `tele_platform` | Platform Used | `select` |  |  |  |
| New Patient Virtual Visit | Telehealth Consent and Technical Setup | `tele_tech_quality` | Technical Quality | `select` |  |  |  |
| New Patient Virtual Visit | Telehealth Consent and Technical Setup | `tele_patient_location` | Patient Location / State During Visit (required for licensing) | `text` |  |  |  |
| New Patient Virtual Visit | Telehealth Consent and Technical Setup | `tele_provider_location` | Provider Location / State During Visit | `text` |  |  |  |
| New Patient Virtual Visit | Telehealth Consent and Technical Setup | `tele_interpreter` | Interpreter Services | `select` |  |  |  |
| New Patient Virtual Visit | History of Present Illness and Reason for Visit | `tele_reason` | Reason for New Patient Visit | `text` |  |  |  |
| New Patient Virtual Visit | History of Present Illness and Reason for Visit | `tele_referral_source` | Referral Source | `select` |  |  |  |
| New Patient Virtual Visit | History of Present Illness and Reason for Visit | `tele_primary_concern` | Primary Concern (HPI) | `textarea` |  |  |  |
| New Patient Virtual Visit | History of Present Illness and Reason for Visit | `tele_hpi_onset` | Onset, Duration, Character, Modifying Factors | `text` |  |  |  |
| New Patient Virtual Visit | Past Medical and Surgical History | `tele_pmh_list` | Past Medical History (diagnoses, chronic conditions) | `textarea` |  |  |  |
| New Patient Virtual Visit | Past Medical and Surgical History | `tele_psh_list` | Past Surgical History | `textarea` |  |  |  |
| New Patient Virtual Visit | Past Medical and Surgical History | `tele_allergies` | Drug Allergies and Reactions | `textarea` |  |  |  |
| New Patient Virtual Visit | Past Medical and Surgical History | `tele_medications` | Current Medications (name, dose, frequency) | `textarea` |  |  |  |
| New Patient Virtual Visit | Past Medical and Surgical History | `tele_family_hx` | Family History (first-degree relatives, hereditary conditions) | `textarea` |  |  |  |
| New Patient Virtual Visit | Past Medical and Surgical History | `tele_social_hx` | Social History Key Points | `select` |  |  |  |
| New Patient Virtual Visit | Review of Systems | `tele_ros_general` | Constitutional | `select` |  |  |  |
| New Patient Virtual Visit | Review of Systems | `tele_ros_cv` | Cardiovascular | `select` |  |  |  |
| New Patient Virtual Visit | Review of Systems | `tele_ros_resp` | Respiratory | `select` |  |  |  |
| New Patient Virtual Visit | Review of Systems | `tele_ros_gi` | Gastrointestinal | `select` |  |  |  |
| New Patient Virtual Visit | Review of Systems | `tele_ros_msk` | Musculoskeletal | `select` |  |  |  |
| New Patient Virtual Visit | Review of Systems | `tele_ros_neuro` | Neurological | `select` |  |  |  |
| New Patient Virtual Visit | Review of Systems | `tele_ros_psych` | Psychiatric | `select` |  |  |  |
| New Patient Virtual Visit | Telehealth-Adapted Physical Examination | `tele_gen_appearance` | General Appearance (Visual) | `select` |  |  |  |
| New Patient Virtual Visit | Telehealth-Adapted Physical Examination | `tele_self_reported_vitals` | Patient-Reported Vitals (home BP, weight, pulse oximetry if available) | `textarea` |  |  |  |
| New Patient Virtual Visit | Telehealth-Adapted Physical Examination | `tele_skin_visible` | Skin (camera-visible areas) | `select` |  |  |  |
| New Patient Virtual Visit | Telehealth-Adapted Physical Examination | `tele_exam_limitations` | Examination Limitations Documented (exam limited by telehealth; in-person follow-up recommended for: _____) | `textarea` |  |  |  |
| New Patient Virtual Visit | Assessment and Plan | `tele_diagnoses` | Assessment (diagnoses and ICD-10 codes) | `textarea` |  |  |  |
| New Patient Virtual Visit | Assessment and Plan | `tele_plan` | Plan (medications, labs, referrals, follow-up) | `textarea` |  |  |  |
| New Patient Virtual Visit | Assessment and Plan | `tele_new_rx` | New Prescriptions | `select` |  |  |  |
| New Patient Virtual Visit | Assessment and Plan | `tele_labs_ordered` | Labs Ordered | `select` |  |  |  |
| New Patient Virtual Visit | Assessment and Plan | `tele_imaging_ordered` | Imaging Ordered | `select` |  |  |  |
| New Patient Virtual Visit | Assessment and Plan | `tele_follow_up` | Follow-Up Plan | `select` |  |  |  |
| New Patient Virtual Visit | Assessment and Plan | `tele_care_coordination` | Care Coordination (PCP notification, specialist letters, care summary sent) | `textarea` |  |  |  |

### RPM Review — `remote_patient_monitoring_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Remote Patient Monitoring Review | RPM Program | `monitoring_type` | Primary Monitoring Type | `select` |  |  |  |
| Remote Patient Monitoring Review | RPM Program | `monitoring_days_this_period` | Days Monitored This Billing Period | `number` |  |  |  |
| Remote Patient Monitoring Review | RPM Program | `adherence_pct` | Transmission Adherence (%) | `number` |  |  |  |
| Remote Patient Monitoring Review | Data Review | `bp_avg_systolic` | Average SBP (if BP monitoring) | `number` |  |  |  |
| Remote Patient Monitoring Review | Data Review | `bp_avg_diastolic` | Average DBP | `number` |  |  |  |
| Remote Patient Monitoring Review | Data Review | `glucose_avg` | Average Glucose (mg/dL) | `number` |  |  |  |
| Remote Patient Monitoring Review | Data Review | `weight_trend` | Weight Trend (if monitored) | `select` |  |  |  |
| Remote Patient Monitoring Review | Data Review | `alerts_triggered` | Clinical Alerts Triggered This Period | `number` |  |  |  |
| Remote Patient Monitoring Review | Data Review | `alert_response_actions` | Alert Response Actions Taken | `textarea` |  |  |  |
| Remote Patient Monitoring Review | Plan | `medication_adjustment` | Medication adjustment based on RPM data | `checkbox` |  |  |  |
| Remote Patient Monitoring Review | Plan | `patient_counseled` | Patient counseled on RPM findings | `checkbox` |  |  |  |
| Remote Patient Monitoring Review | Plan | `continue_rpm` | Continue RPM program | `checkbox` |  |  |  |
| Remote Patient Monitoring Review | Plan | `notes` | Clinical Notes and Plan | `textarea` |  |  |  |

## Aesthetics

### Aesthetic Consents — `aesthetic_consents_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Consent | Consent | `patientId` | Client | `lookup` | Y |  |  |
| Consent | Consent | `modality` | Modality | `select` | Y |  |  |
| Consent | Consent | `validThrough` | Valid Through | `date` |  |  |  |
| Consent | Disclosure | `procedureDescription` | Procedure / product & areas | `textarea` |  |  |  |
| Consent | Disclosure | `risksDisclosed` | Risks disclosed | `textarea` |  |  |  |
| Consent | Disclosure | `benefitsDisclosed` | Expected results & duration | `textarea` |  |  |  |
| Consent | Disclosure | `alternativesDisclosed` | Alternatives | `textarea` |  |  |  |
| Consent | Disclosure | `offLabelDisclosure` | Off-label / compounded disclosure (AES-CN-27/28) | `textarea` |  |  |  |
| Consent | Capacity, Guardian & Witness | `clientCapacity` | Client capacity | `select` |  |  |  |
| Consent | Capacity, Guardian & Witness | `questionsAnswered` | All questions answered | `checkbox` |  |  |  |
| Consent | Capacity, Guardian & Witness | `guardianName` | Guardian / authorized signer | `text` |  |  |  |
| Consent | Capacity, Guardian & Witness | `guardianRelationship` | Relationship | `text` |  |  |  |
| Consent | Capacity, Guardian & Witness | `interpreterUsed` | Interpreter used | `checkbox` |  |  |  |
| Consent | Capacity, Guardian & Witness | `interpreterName` | Interpreter name | `text` |  |  |  |
| Consent | Capacity, Guardian & Witness | `language` | Language | `text` |  |  |  |
| Consent | Capacity, Guardian & Witness | `providerName` | Provider obtaining consent | `text` |  |  |  |

### Aesthetic Intake & Skin Assessment — `aesthetic_intake_cf`

Screen: 1 page(s) · 4 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Aesthetic Intake | Goals & Areas of Interest (AES-IN-6) | `patientId` | Client | `lookup` | Y |  |  |
| Aesthetic Intake | Goals & Areas of Interest (AES-IN-6) | `submittedVia` | Submitted Via | `select` |  |  |  |
| Aesthetic Intake | Goals & Areas of Interest (AES-IN-6) | `primaryConcerns` | Primary concerns | `textarea` | Y |  |  |
| Aesthetic Intake | Goals & Areas of Interest (AES-IN-6) | `areasOfInterest` | Interested in | `text` |  |  |  |
| Aesthetic Intake | Goals & Areas of Interest (AES-IN-6) | `eventTimeline` | Event / timeline | `text` |  |  |  |
| Aesthetic Intake | Goals & Areas of Interest (AES-IN-6) | `clientQuestions` | Questions for the provider | `textarea` |  |  |  |
| Aesthetic Intake | Aesthetic & Medical History (AES-IN-2/5) | `overallHealth` | Overall health | `select` |  |  |  |
| Aesthetic Intake | Aesthetic & Medical History (AES-IN-2/5) | `priorTreatment` | Previous aesthetic treatment | `select` |  |  |  |
| Aesthetic Intake | Aesthetic & Medical History (AES-IN-2/5) | `currentMedications` | Current medications & supplements | `textarea` |  |  |  |
| Aesthetic Intake | Aesthetic & Medical History (AES-IN-2/5) | `medicationChanges` | Medication changes since last visit | `checkbox` |  |  |  |
| Aesthetic Intake | Aesthetic & Medical History (AES-IN-2/5) | `priorSatisfaction` | Prior treatment satisfaction (0-10) | `number` |  |  |  |
| Aesthetic Intake | Skin Assessment (AES-IN-4) | `fitzpatrickType` | Fitzpatrick type | `select` |  |  |  |
| Aesthetic Intake | Skin Assessment (AES-IN-4) | `glogauType` | Glogau photoaging | `select` |  |  |  |
| Aesthetic Intake | Skin Assessment (AES-IN-4) | `isotretinoin12mo` | Isotretinoin in last 12 months | `checkbox` |  |  |  |
| Aesthetic Intake | Contraindication Screen (AES-IN-2/3/8) | `pregnantNursing` | Pregnant or nursing | `select` |  |  |  |
| Aesthetic Intake | Contraindication Screen (AES-IN-2/3/8) | `allergyUpdate` | Allergy / sensitivity to report | `checkbox` |  |  |  |
| Aesthetic Intake | Contraindication Screen (AES-IN-2/3/8) | `allergens` | Allergens (AES-IN-3) | `textarea` |  |  |  |
| Aesthetic Intake | Contraindication Screen (AES-IN-2/3/8) | `smokingStatus` | Smoking status | `select` |  |  |  |
| Aesthetic Intake | Contraindication Screen (AES-IN-2/3/8) | `alcoholRecent` | Alcohol in the last 24-48h | `select` |  |  |  |

### Cosmetic Injection Log — `aesthetic_injection_log_cf`

Screen: 1 page(s) · 3 section(s) · 24 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Injection | Treatment | `patientId` | Client | `lookup` | Y |  |  |
| Injection | Treatment | `treatmentDate` | Date | `date` |  |  |  |
| Injection | Treatment | `treatmentTime` | Time | `text` |  |  |  |
| Injection | Treatment | `productClass` | Product class | `select` | Y |  |  |
| Injection | Treatment | `productName` | Product | `text` | Y |  |  |
| Injection | Treatment | `unitsOrSyringes` | Units / Syringes | `text` | Y |  |  |
| Injection | Treatment | `treatmentArea` | Treatment area | `select` |  |  |  |
| Injection | Treatment | `injectionPlane` | Plane / technique | `select` |  |  |  |
| Injection | Treatment | `injector` | Injector | `text` |  |  |  |
| Injection | Treatment | `supervisingProvider` | Supervising provider (GFE) | `text` |  |  |  |
| Injection | Treatment | `gfeId` | Good Faith Exam ID (AES-T1) | `text` |  |  |  |
| Injection | Traceability — lot & expiry (AES-P6) | `lotNumber` | Lot Number | `text` | Y |  |  |
| Injection | Traceability — lot & expiry (AES-P6) | `lotExpiry` | Expiry | `date` |  |  |  |
| Injection | Traceability — lot & expiry (AES-P6) | `manufacturer` | Manufacturer | `text` |  |  |  |
| Injection | Traceability — lot & expiry (AES-P6) | `ndcCode` | NDC | `text` |  |  |  |
| Injection | Traceability — lot & expiry (AES-P6) | `sessionNumber` | Session # in series | `number` |  |  |  |
| Injection | Traceability — lot & expiry (AES-P6) | `rebookDue` | Recall / rebook due | `date` |  |  |  |
| Injection | Traceability — lot & expiry (AES-P6) | `serviceCode` | CPT / service code | `text` |  |  |  |
| Injection | Traceability — lot & expiry (AES-P6) | `seriesComplete` | Series complete | `checkbox` |  |  |  |
| Injection | Observation & Outcome | `observationMinutes` | Post-treatment observation (min) | `number` |  |  |  |
| Injection | Observation & Outcome | `observationCompleted` | Observation completed | `checkbox` |  |  |  |
| Injection | Observation & Outcome | `adverseEvent` | Adverse event | `checkbox` |  |  |  |
| Injection | Observation & Outcome | `adverseEventDetail` | Adverse event detail | `textarea` |  |  |  |
| Injection | Observation & Outcome | `techniqueNotes` | Technique notes | `textarea` |  |  |  |

## Care Management

### CCM Complex Care — `care_management_ccm_comprehensive_cf`

Screen: 1 page(s) · 4 section(s) · 21 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Complex Chronic Care Management (CCM) | CCM Eligibility and Service Time | `ccm_eligible_conditions` | CCM-Qualifying Chronic Conditions | `select` |  |  |  |
| Complex Chronic Care Management (CCM) | CCM Eligibility and Service Time | `ccm_service_minutes` | CCM Service Time This Month | `select` |  |  |  |
| Complex Chronic Care Management (CCM) | CCM Eligibility and Service Time | `ccm_billing_month` | Billing Month and Year | `text` |  |  |  |
| Complex Chronic Care Management (CCM) | CCM Eligibility and Service Time | `ccm_care_manager` | Care Manager Name and Role | `text` |  |  |  |
| Complex Chronic Care Management (CCM) | CCM Eligibility and Service Time | `ccm_supervising_physician` | Supervising Physician | `text` |  |  |  |
| Complex Chronic Care Management (CCM) | Chronic Condition Status | `ccm_condition1_name` | Primary Condition 1 | `text` |  |  |  |
| Complex Chronic Care Management (CCM) | Chronic Condition Status | `ccm_condition1_status` | Condition 1 Control | `select` |  |  |  |
| Complex Chronic Care Management (CCM) | Chronic Condition Status | `ccm_condition2_name` | Primary Condition 2 | `text` |  |  |  |
| Complex Chronic Care Management (CCM) | Chronic Condition Status | `ccm_condition2_status` | Condition 2 Control | `select` |  |  |  |
| Complex Chronic Care Management (CCM) | Chronic Condition Status | `ccm_labs_reviewed` | Recent Labs Reviewed | `select` |  |  |  |
| Complex Chronic Care Management (CCM) | Care Plan Goals and Barriers | `ccm_active_goals` | Active Care Plan Goals (SMART: Specific, Measurable, Attainable, Relevant, Time-bound) | `textarea` |  |  |  |
| Complex Chronic Care Management (CCM) | Care Plan Goals and Barriers | `ccm_goal_progress` | Progress Toward Goals | `select` |  |  |  |
| Complex Chronic Care Management (CCM) | Care Plan Goals and Barriers | `ccm_barriers` | Identified Barriers to Care | `select` |  |  |  |
| Complex Chronic Care Management (CCM) | Care Plan Goals and Barriers | `ccm_interventions` | Interventions This Month (patient education, medication review, referrals, community resources) | `textarea` |  |  |  |
| Complex Chronic Care Management (CCM) | Care Coordination Activities | `ccm_patient_contact_method` | Primary Contact Method This Month | `select` |  |  |  |
| Complex Chronic Care Management (CCM) | Care Coordination Activities | `ccm_hospital_ed` | Hospital or ED Visits Since Last Contact | `select` |  |  |  |
| Complex Chronic Care Management (CCM) | Care Coordination Activities | `ccm_referrals_placed` | Referrals or Transitions | `select` |  |  |  |
| Complex Chronic Care Management (CCM) | Care Coordination Activities | `ccm_medication_reconciliation` | Medication Reconciliation | `select` |  |  |  |
| Complex Chronic Care Management (CCM) | Care Coordination Activities | `ccm_care_plan_updated` | Care Plan Updated | `select` |  |  |  |
| Complex Chronic Care Management (CCM) | Care Coordination Activities | `ccm_patient_engagement` | Patient Engagement Level | `select` |  |  |  |
| Complex Chronic Care Management (CCM) | Care Coordination Activities | `ccm_notes` | Care Manager Monthly Note | `textarea` |  |  |  |

### CCM Monthly Note — `chronic_care_management_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Care Management Monthly Note | CCM Service Details | `billing_period_month` | Billing Month/Year (e.g., July 2026) | `text` |  |  |  |
| Chronic Care Management Monthly Note | CCM Service Details | `total_minutes` | Total Clinical Staff Time This Month (minutes) | `number` |  |  |  |
| Chronic Care Management Monthly Note | CCM Service Details | `ccm_level` | CCM Level Billed | `select` |  |  |  |
| Chronic Care Management Monthly Note | CCM Service Details | `chronic_conditions` | Qualifying Chronic Conditions (2+ required) | `textarea` |  |  |  |
| Chronic Care Management Monthly Note | CCM Service Details | `patient_consent_on_file` | Written CCM consent on file | `checkbox` |  |  |  |
| Chronic Care Management Monthly Note | Care Plan Review | `care_plan_updated` | Comprehensive care plan reviewed / updated this month | `checkbox` |  |  |  |
| Chronic Care Management Monthly Note | Care Plan Review | `medication_reconciliation` | Medication reconciliation completed | `checkbox` |  |  |  |
| Chronic Care Management Monthly Note | Care Plan Review | `care_transitions` | Care transitions coordinated (ED visit / hospitalization follow-up) | `checkbox` |  |  |  |
| Chronic Care Management Monthly Note | Care Plan Review | `specialist_coordination` | Coordination with specialists documented | `checkbox` |  |  |  |
| Chronic Care Management Monthly Note | Care Plan Review | `patient_goals_reviewed` | Patient health goals reviewed | `checkbox` |  |  |  |
| Chronic Care Management Monthly Note | Contacts This Month | `patient_contacts_count` | Patient/Caregiver Contacts (calls/messages) | `number` |  |  |  |
| Chronic Care Management Monthly Note | Contacts This Month | `provider_contacts_count` | Provider/Specialist Contacts | `number` |  |  |  |
| Chronic Care Management Monthly Note | Contacts This Month | `issues_addressed` | Issues Addressed This Month | `textarea` |  |  |  |

### Case Management Note — `case_management_note_cf`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Case Management / Care Coordination Note | Patient & Program | `patientId` | Patient | `typeahead` | Y |  |  |
| Case Management / Care Coordination Note | Patient & Program | `noteDate` | Note Date | `date` | Y |  |  |
| Case Management / Care Coordination Note | Patient & Program | `caseManager` | Case Manager / Care Coordinator | `typeahead` | Y |  |  |
| Case Management / Care Coordination Note | Patient & Program | `programType` | Program / Activity Type | `select` | Y |  |  |
| Case Management / Care Coordination Note | Patient & Program | `contactType` | Contact Type | `select` | Y |  |  |
| Case Management / Care Coordination Note | Case Management Activity | `timeSpent` | Time Spent (minutes) | `number` |  |  |  |
| Case Management / Care Coordination Note | Case Management Activity | `barriersSdoh` | Barriers / SDOH Issues Addressed | `textarea` |  |  |  |
| Case Management / Care Coordination Note | Case Management Activity | `referralsCoordinated` | Referrals Coordinated / Follow-up Status | `textarea` | Y |  |  |
| Case Management / Care Coordination Note | Case Management Activity | `patientEngagement` | Patient Engagement Level | `select` | Y |  |  |
| Case Management / Care Coordination Note | Case Management Activity | `nextContact` | Next Planned Contact / Follow-up | `date` |  |  |  |
| Case Management / Care Coordination Note | Case Management Activity | `cmNotes` | Case Management Notes | `textarea` | Y |  |  |

## ENT / Otolaryngology

### Head/Neck Cancer — `ent_head_neck_cancer_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Head and Neck Cancer Evaluation | Primary Lesion | `site` | Primary Site | `select` |  |  |  |
| Head and Neck Cancer Evaluation | Primary Lesion | `hpv_status` | HPV / p16 Status | `select` |  |  |  |
| Head and Neck Cancer Evaluation | TNM Staging (AJCC 8th) | `t_stage` | T Stage | `select` |  |  |  |
| Head and Neck Cancer Evaluation | TNM Staging (AJCC 8th) | `n_stage` | N Stage | `select` |  |  |  |
| Head and Neck Cancer Evaluation | TNM Staging (AJCC 8th) | `m_stage` | M Stage | `select` |  |  |  |
| Head and Neck Cancer Evaluation | Multidisciplinary Treatment Plan | `primary_modality` | Primary Treatment Modality | `select` |  |  |  |
| Head and Neck Cancer Evaluation | Multidisciplinary Treatment Plan | `reconstruction` | Reconstructive surgery planned (free flap — fibula, radial forearm, ALT; microvascular) | `checkbox` |  |  |  |
| Head and Neck Cancer Evaluation | Multidisciplinary Treatment Plan | `dental_clearance` | Dental clearance before RT (extractions; fluoride trays — osteoradionecrosis prevention) | `checkbox` |  |  |  |
| Head and Neck Cancer Evaluation | Multidisciplinary Treatment Plan | `swallowing` | Speech and swallowing therapy referral (dysphagia — prophylactic exercises pre-RT) | `checkbox` |  |  |  |
| Head and Neck Cancer Evaluation | Multidisciplinary Treatment Plan | `tumor_board` | Multidisciplinary tumor board (H&N MDT) reviewed / planned | `checkbox` |  |  |  |

### Thyroid Nodule — `ent_thyroid_nodule_cf`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Thyroid Nodule Evaluation (ACR TIRADS) | Nodule Characteristics | `composition` | Composition | `select` |  |  |  |
| Thyroid Nodule Evaluation (ACR TIRADS) | Nodule Characteristics | `echogenicity` | Echogenicity | `select` |  |  |  |
| Thyroid Nodule Evaluation (ACR TIRADS) | Nodule Characteristics | `shape` | Shape | `select` |  |  |  |
| Thyroid Nodule Evaluation (ACR TIRADS) | Nodule Characteristics | `margin` | Margin | `select` |  |  |  |
| Thyroid Nodule Evaluation (ACR TIRADS) | Nodule Characteristics | `calcifications` | Echogenic Foci | `select` |  |  |  |
| Thyroid Nodule Evaluation (ACR TIRADS) | Nodule Characteristics | `tirads_score` | ACR TIRADS Score (0-12: TR1=0, TR2=2, TR3=3, TR4=4-6, TR5=≥7) | `number` |  |  |  |
| Thyroid Nodule Evaluation (ACR TIRADS) | Nodule Characteristics | `tirads_category` | TIRADS Category | `select` |  |  |  |
| Thyroid Nodule Evaluation (ACR TIRADS) | Nodule Characteristics | `size_largest` | Largest Diameter (cm) | `number` |  |  |  |
| Thyroid Nodule Evaluation (ACR TIRADS) | FNA and Bethesda | `fna_indicated` | FNA (fine-needle aspiration) biopsy indicated (per TIRADS + size) | `checkbox` |  |  |  |
| Thyroid Nodule Evaluation (ACR TIRADS) | FNA and Bethesda | `bethesda` | Bethesda Classification (if FNA done) | `select` |  |  |  |
| Thyroid Nodule Evaluation (ACR TIRADS) | FNA and Bethesda | `molecular_testing` | Molecular testing ordered (Afirma / ThyroSeq — Bethesda III/IV for risk stratification) | `checkbox` |  |  |  |

### Vertigo / Vestibular — `ent_vertigo_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Vertigo and Vestibular Disorders | Vertigo Characterization | `true_vertigo` | True vertigo (spinning sensation — peripheral or central; distinguish from presyncope/lightheadedness) | `checkbox` |  |  |  |
| Vertigo and Vestibular Disorders | Vertigo Characterization | `trigger` | Trigger | `select` |  |  |  |
| Vertigo and Vestibular Disorders | Vertigo Characterization | `duration` | Episode Duration | `select` |  |  |  |
| Vertigo and Vestibular Disorders | Vertigo Characterization | `associated_symptoms` | Associated Symptoms (tinnitus + hearing loss = Ménière's; headache = vestibular migraine; neurological = central) | `textarea` |  |  |  |
| Vertigo and Vestibular Disorders | Vestibular Exam | `nystagmus` | Nystagmus Pattern | `select` |  |  |  |
| Vertigo and Vestibular Disorders | Vestibular Exam | `head_impulse_test` | Head Impulse Test (HIT) | `select` |  |  |  |
| Vertigo and Vestibular Disorders | Vestibular Exam | `hints_exam` | HINTS (Head-Impulse, Nystagmus, Test-of-Skew) | `select` |  |  |  |
| Vertigo and Vestibular Disorders | Treatment | `diagnosis` | Working Diagnosis | `select` |  |  |  |
| Vertigo and Vestibular Disorders | Treatment | `epley_performed` | Epley canalith repositioning maneuver performed in office (BPPV — document response) | `checkbox` |  |  |  |
| Vertigo and Vestibular Disorders | Treatment | `vrt_referral` | Vestibular rehabilitation therapy (VRT) referral (physiotherapy — central compensation) | `checkbox` |  |  |  |
| Vertigo and Vestibular Disorders | Treatment | `mri_ordered` | MRI brain/posterior fossa ordered (central signs / unilateral SNHL / new neurological findings) | `checkbox` |  |  |  |

## GI Oncology

### Gastric Cancer — `gi_oncology_gastric_cancer_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Gastric and GEJ Cancer — Staging, Surgery, Perioperative Chemotherapy, and Systemic Therapy | Gastric Cancer Classification, Risk Factors, and Diagnosis | `gc_f1` | Gastric Cancer Evaluation: EPIDEMIOLOGY (5TH MOST COMMON CANCER WORLDWIDE; DECLINING INCIDENCE US; HIGH INCIDENCE EAST ASIA SOUTH AMERICA; MALE PREDOMINANCE 2:1; PATHOLOGY (LAUREN CLASSIFICATION: INTESTINAL TYPE: GLANDULAR ASSOCIATED H PYLORI LOWER SOCIOECONOMIC; DIFFUSE TYPE: SIGNET RING CELLS WORSE PROGNOSIS HEREDITARY; MIXED INDETERMINATE; ANATOMIC LOCATION (DISTAL ANTRUM BODY MOST COMMON INTESTINAL; PROXIMAL CARDIA GEJ: INCREASING US OBESITY GERD BARRETT; CLASSIFIED WITH ESOPHAGEAL ADENOCARCINOMA TREATMENT; RISK FACTORS (H PYLORI STRONGEST MODIFIABLE; CHRONIC GASTRITIS INTESTINAL METAPLASIA PROGRESSION; SMOKED PROCESSED FOODS NITRITES; SMOKING; FAMILY HISTORY; HEREDITARY DIFFUSE GASTRIC CANCER HDGC CDH1 MUTATION: PROPHYLACTIC GASTRECTOMY CONSIDERED; LYNCH SYNDROME HNPCC MSI; HEREDITARY NONPOLYPOSIS; CLINICAL PRESENTATION (EARLY: VAGUE DYSPEPSIA OFTEN NONE; LATE: DYSPHAGIA PROXIMAL; WEIGHT LOSS; EPIGASTRIC PAIN; HEMATEMESIS MELENA; ANEMIA; EARLY SATIETY FULLNESS; KRUKENBERG TUMOR OVARIAN METASTASIS; SISTER MARY JOSEPH NODULE UMBILICAL METASTASIS; VIRCHOW NODE LEFT SUPRACLAVICULAR; DIAGNOSIS (EGD WITH BIOPSY: MULTIPLE BIOPSIES 6-8; ENDOSCOPIC ULTRASOUND: LOCAL STAGING T AND N; CT CHEST ABDOMEN PELVIS STAGING; PET SCAN: METASTATIC DISEASE NON-DIFFUSE TYPE; PERITONEAL STAGING LAPAROSCOPY: PERITONEAL METASTASIS 25 pct CT MISS; MANDATORY BEFORE RESECTION LOCALLY ADVANCED; HER2 IHC FISH: ALL METASTATIC GASTRIC) | `text` |  |  |  |
| Gastric and GEJ Cancer — Staging, Surgery, Perioperative Chemotherapy, and Systemic Therapy | Gastric Cancer Classification, Risk Factors, and Diagnosis | `gc_f2` | Surgery Perioperative Chemotherapy and Systemic Therapy | `select` |  |  |  |

### HCC — `gi_oncology_hepatocellular_carcinoma_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hepatocellular Carcinoma HCC — Staging, Locoregional Therapy, and Systemic Treatment | HCC Epidemiology, Risk Factors, Surveillance, and Diagnosis | `hcc_f1` | HCC Evaluation: EPIDEMIOLOGY (6TH MOST COMMON CANCER WORLDWIDE; 3RD CAUSE CANCER DEATH; 85-90 pct CIRRHOSIS BACKGROUND; INCREASING INCIDENCE US NAFLD; RISK FACTORS (CIRRHOSIS: HEPATITIS B HEPATITIS C ALCOHOLIC NASH NAFLD; HEPATITIS B WITHOUT CIRRHOSIS ALSO RISK; AFLATOXIN: ASPERGILLUS MOLDY GRAINS; DIABETES OBESITY METABOLIC SYNDROME; HEMOCHROMATOSIS WILSON DISEASE; SURVEILLANCE RECOMMENDATIONS (HIGH RISK PATIENTS: ULTRASOUND EVERY 6 MONTHS; CIRRHOSIS ANY CAUSE; HEPATITIS B CIRRHOSIS; HEPATITIS B WITHOUT CIRRHOSIS: SELECTED SUBGROUPS; AFP NOT ADEQUATE ALONE; AASLD EASL GUIDELINES ULTRASOUND BASED; DIAGNOSIS (DYNAMIC CT Or MRI HEPATIC PROTOCOL: ARTERIAL ENHANCEMENT THEN VENOUS WASHOUT LIRADS SYSTEM; LIRAD 5 MAJOR HCC CRITERIA; BIOPSY: NOT ALWAYS REQUIRED TYPICAL IMAGING; REQUIRED ATYPICAL FEATURES; STAGING BCLC BARCELONA CLINIC LIVER CANCER (STAGE 0 VERY EARLY: SINGLE TUMOR UNDER 2 cm; STAGE A EARLY: SINGLE Or 3 TUMORS EACH UNDER 3 cm; CANDIDATE CURATIVE; STAGE B INTERMEDIATE: MULTIFOCAL; STAGE C ADVANCED: VASCULAR INVASION Or EXTRAHEPATIC; STAGE D END STAGE: PST 3-4 CHILD PUGH C; LIVER FUNCTION ASSESSMENT (CHILD PUGH SCORE A B C; MELD SCORE; PERFORMANCE STATUS PST; PORTAL HYPERTENSION; BILIRUBINS ALBUMIN COAGULOPATHY; AFP: RISING OVER 400 ng/mL HIGHLY SPECIFIC; MOST HCC AFP UNDER 400; COMBINING AFP AFP-L3 DCP ELEVATED HCC) | `text` |  |  |  |
| Hepatocellular Carcinoma HCC — Staging, Locoregional Therapy, and Systemic Treatment | HCC Epidemiology, Risk Factors, Surveillance, and Diagnosis | `hcc_f2` | Locoregional Therapies Systemic Treatment and Transplant | `select` |  |  |  |

### Pancreatic Cancer — `gi_oncology_pancreatic_cancer_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pancreatic Adenocarcinoma — Resectability, Chemotherapy, and Supportive Care | Pancreatic Cancer Epidemiology, Diagnosis, and Resectability | `panc_f1` | Pancreatic Cancer Evaluation: EPIDEMIOLOGY (50000 NEW CASES US ANNUALLY; 4TH LEADING CANCER DEATH; PROJECTED 2ND BY 2030; 5-YEAR SURVIVAL 11 pct POOR; OFTEN LATE STAGE DIAGNOSIS; RISK FACTORS (SMOKING DOUBLES RISK; OBESITY DIABETES; CHRONIC PANCREATITIS; FAMILY HISTORY 10 pct; HEREDITARY: BRCA1 BRCA2 PALB2 ATM CDKN2A MLH1 MSH2 STK11 PRSS1; PEUTZ-JEGHERS HIGHEST RISK; PATHOLOGY (PANCREATIC DUCTAL ADENOCARCINOMA PDAC 85 pct; HEAD 70 pct BODY TAIL 30 pct; NEUROENDOCRINE SEPARATE ENTITY; ACINAR CELL CARCINOMA RARE; CLINICAL PRESENTATION (HEAD TUMORS: PAINLESS JAUNDICE COURVOISIER SIGN PALPABLE GALLBLADDER; DARK URINE PALE STOOLS PRURITUS; WEIGHT LOSS ANOREXIA; BODY TAIL TUMORS: ABDOMINAL BACK PAIN; NEW ONSET DIABETES; DIAGNOSIS (CT ABDOMEN PELVIS PANCREAS PROTOCOL: STANDARD; MRCP ADDITIONAL DUCTAL EVALUATION; EUS ENDOSCOPIC ULTRASOUND FINE NEEDLE ASPIRATION: TISSUE DIAGNOSIS; MOST SENSITIVE; ERCP BILIARY OBSTRUCTION STENTING; CA 19-9 SERUM: NOT DIAGNOSTIC MONITORING; ELEVATED 80 pct; FALSELY ELEVATED BENIGN BILIARY OBSTRUCTION; FALSELY LOW LEWIS-NEGATIVE BLOOD GROUP; CEA LESS USEFUL; RESECTABILITY ASSESSMENT (RESECTABLE: NO SMA SMV PV CONTACT; NO DISTANT METASTASIS; BORDERLINE RESECTABLE: VENOUS CONTACT WITHOUT RECONSTRUCTION; LIMITED ARTERIAL ABUTMENT; LOCALLY ADVANCED UNRESECTABLE: ARTERIAL ENCASEMENT OVER 180 DEGREES; METASTATIC: LIVER PERITONEUM LUNG) | `text` |  |  |  |
| Pancreatic Adenocarcinoma — Resectability, Chemotherapy, and Supportive Care | Pancreatic Cancer Epidemiology, Diagnosis, and Resectability | `panc_f2` | Surgery Chemotherapy and Supportive Management | `select` |  |  |  |

## Gynecology Oncology

### Cervical Cancer — `gynecology_oncology_cervical_cancer_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cervical Cancer — HPV Prevention, FIGO Staging, Chemoradiation, and Systemic Therapy | Cervical Cancer Epidemiology, HPV, Screening, and Staging | `cca_f1` | Cervical Cancer Evaluation: EPIDEMIOLOGY (4TH MOST COMMON CANCER WOMEN WORLDWIDE; 14000 NEW US CASES ANNUALLY; HIGHEST INCIDENCE LOW-INCOME COUNTRIES; DECLINING INCIDENCE SCREENING; HPV ASSOCIATION (NEARLY 100 pct HPV POSITIVE; HIGH RISK HPV 16 18 MOST CERVICAL CANCER; HPV 16: 50 pct SQUAMOUS CELL; HPV 18: 70 pct ADENOCARCINOMA; E6 E7 ONCOPROTEINS P53 RB INACTIVATION; PREVENTION (HPV VACCINE 9-VALENT GARDASIL: 9-45 YEARS; 2-3 DOSES DEPENDING AGE; HIGHLY EFFECTIVE PREVENT HPV 16 18 31 33 45 52 58; VACCINATION MALE AND FEMALE; REDUCES CANCER INCIDENCE; PATHOLOGY (SQUAMOUS CELL 70-80 pct: TRANSFORMATION ZONE; ADENOCARCINOMA 20-25 pct: ENDOCERVICAL GLANDS; ADENOSQUAMOUS RARE; SMALL CELL NEUROENDOCRINE MOST AGGRESSIVE; STAGING FIGO 2018 (IA MICROINVASIVE; IA1 UNDER 3mm INVASION; IA2 3-5mm INVASION; IB1 OVER 5mm UNDER 2 cm; IB2 2-4 cm; IB3 OVER 4 cm; IIA NO PARAMETRIUM 2A1 UNDER 4 cm 2A2 OVER; IIB PARAMETRIUM INVOLVEMENT; IIIA LOWER THIRD VAGINA; IIIB HYDRONEPHROSIS PELVIC WALL; IIIC NODAL; IVA BLADDER RECTUM; IVB DISTANT; CLINICAL PRESENTATION (POSTCOITAL BLEEDING; INTERMENSTRUAL BLEEDING; VAGINAL DISCHARGE; ADVANCED: PELVIC PAIN FLANK PAIN LEG EDEMA FISTULA; EARLY OFTEN ASYMPTOMATIC SCREENING DETECTED) | `text` |  |  |  |
| Cervical Cancer — HPV Prevention, FIGO Staging, Chemoradiation, and Systemic Therapy | Cervical Cancer Epidemiology, HPV, Screening, and Staging | `cca_f2` | Treatment by Stage and Systemic Therapy | `select` |  |  |  |

### Endometrial Cancer — `gynecology_oncology_endometrial_cancer_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Endometrial Cancer — Staging, Surgery, Chemotherapy, and Molecular Targeting | Endometrial Cancer Classification, Risk Factors, and Staging | `ec_f1` | Endometrial Cancer Evaluation: EPIDEMIOLOGY (MOST COMMON GYNECOLOGIC CANCER US; 65000 NEW CASES ANNUALLY; MOST DIAGNOSED EARLY; 5-YEAR SURVIVAL STAGE I 95 pct; RISK FACTORS (OBESITY ESTROGEN EXCESS STRONGEST; UNOPPOSED ESTROGEN THERAPY; PCOS ANOVULATION; NULLIPARITY; DIABETES METABOLIC SYNDROME; TAMOXIFEN BREAST CANCER; LYNCH SYNDROME HNPCC: LIFETIME RISK 60 pct; MLH1 MSH2 MSH6 PMS2; PROTECTIVE: COMBINED OCP; PROGESTERONE OPPOSITION; PATHOLOGY CLASSIFICATION (TYPE 1 ENDOMETRIOID 80 pct: ESTROGEN DRIVEN; MOSTLY EARLY STAGE; GRADE 1-3; MICROSATELLITE INSTABILITY; PIK3CA KRAS PTEN MUTATION; TYPE 2 SEROUS CLEAR CELL 20 pct: TP53 MUTATION; AGGRESSIVE EARLY SPREAD; MICROSATELLITE STABLE; HER2 AMPLIFICATION SEROUS; CARCINOSARCOMA RARE AGGRESSIVE; MOLECULAR CLASSIFICATION TCGA (POLE ULTRAMUTATED: BEST PROGNOSIS; MMR DEFICIENT MSI-H: IMMUNOTHERAPY RESPONSIVE; COPY NUMBER LOW: P53 WILD TYPE; COPY NUMBER HIGH SEROUS LIKE: TP53 MUTATION WORST; STAGING FIGO 2023 (IA ORGAN CONFINED UNDER 50 pct MYOMETRIAL; IB OVER 50 pct MYOMETRIAL; IC SEROSAL; IIA CERVICAL STROMA; IIB CERVICAL GLANDS; IIIA ADNEXA PERITONEUM; IIIB VAGINAL; IIIC1 PELVIC NODAL; IIIC2 PARAAORTIC NODAL; IVA BLADDER BOWEL; IVB DISTANT; CLINICAL PRESENTATION (POST-MENOPAUSAL BLEEDING: MOST COMMON; ABNORMAL PREMENOPAUSAL BLEEDING; ENDOMETRIAL BIOPSY DIAGNOSIS GOLD STANDARD) | `text` |  |  |  |
| Endometrial Cancer — Staging, Surgery, Chemotherapy, and Molecular Targeting | Endometrial Cancer Classification, Risk Factors, and Staging | `ec_f2` | Surgery Adjuvant Therapy and Systemic Treatment | `select` |  |  |  |

### Ovarian Cancer — `gynecology_oncology_ovarian_cancer_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Ovarian Cancer — Staging, Debulking Surgery, Chemotherapy, and PARP Inhibitors | Ovarian Cancer Epidemiology, Histology, and Diagnosis | `oc_f1` | Ovarian Cancer Evaluation: EPIDEMIOLOGY (5TH MOST COMMON GYNECOLOGIC CANCER DEATHS; 20000 NEW US CASES ANNUALLY; MOST DIAGNOSED ADVANCED STAGE; 5-YEAR SURVIVAL STAGE III-IV 30 pct; RISK FACTORS (BRCA1 BRCA2 HIGHEST RISK: BRCA1 44 pct LIFETIME; BRCA2 17 pct; LYNCH SYNDROME HNPCC: MLH1 MSH2; FAMILY HISTORY FIRST DEGREE; OLDER AGE; NULLIPARITY ENDOMETRIOSIS; TALC PERINEAL USE CONTROVERSIAL; PROTECTIVE: ORAL CONTRACEPTIVE USE; BREASTFEEDING; PATHOLOGY (HIGH GRADE SEROUS MOST COMMON 70 pct: FALLOPIAN TUBE ORIGIN; TP53 MUTATION UNIVERSAL; BRCA HRD OFTEN; ENDOMETRIOID: CLEAR CELL: CHEMOTHERAPY RESISTANT; LOW GRADE SEROUS: INDOLENT; MUCINOUS: APPENDIX RULE OUT; BORDERLINE MALIGNANT POTENTIAL; CLINICAL PRESENTATION (VAGUE SYMPTOMS: BLOATING FULLNESS EARLY SATIETY; PELVIC ABDOMINAL PAIN; URINARY FREQUENCY URGENCY; WEIGHT CHANGE; ASCITES DISTENSION LATE; SHORTNESS OF BREATH PLEURAL EFFUSION; DIAGNOSIS (TRANSVAGINAL ULTRASOUND: MORPHOLOGY COMPLEXITY; CT CHEST ABDOMEN PELVIS: STAGING PERITONEAL DISEASE; SERUM CA-125: ELEVATED 80 pct STAGE III-IV; NORMAL EARLY STAGE; NON-SPECIFIC ELEVATED BENIGN DISEASE; HE4 HUMAN EPIDIDYMIS PROTEIN 4: COMPLEMENTARY; RISK OF MALIGNANCY ALGORITHM ROMA; HER2 LESS RELEVANT; MRI AMBIGUOUS ULTRASOUND; STAGING FIGO SURGICAL (I OVARY ONLY; II PELVIS; III PERITONEAL; IV DISTANT PARENCHYMAL) | `text` |  |  |  |
| Ovarian Cancer — Staging, Debulking Surgery, Chemotherapy, and PARP Inhibitors | Ovarian Cancer Epidemiology, Histology, and Diagnosis | `oc_f2` | Surgery Chemotherapy PARP Inhibitors and Maintenance | `select` |  |  |  |

## Neurosurgery

### Cerebrovascular Surgery — `neurosurgery_vascular_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cerebrovascular Surgical Assessment | Intracranial Aneurysm | `aneurysm_size` | Maximum Aneurysm Diameter (mm; ISUIA data: <7 mm posterior communicating or posterior fossa has higher rupture risk) | `number` |  |  |  |
| Cerebrovascular Surgical Assessment | Intracranial Aneurysm | `aneurysm_location` | Aneurysm Location | `select` |  |  |  |
| Cerebrovascular Surgical Assessment | Intracranial Aneurysm | `treatment` | Treatment Approach | `select` |  |  |  |
| Cerebrovascular Surgical Assessment | Arteriovenous Malformation (AVM) | `spetzler_martin` | Spetzler-Martin Grade | `select` |  |  |  |
| Cerebrovascular Surgical Assessment | Arteriovenous Malformation (AVM) | `avm_treatment` | AVM Treatment Modality | `select` |  |  |  |

### Craniotomy / Brain Tumor — `neurosurgery_craniotomy_cf`

Screen: 1 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Craniotomy and Intracranial Tumor Assessment | Tumor Classification | `tumor_type` | Tumor Type | `select` |  |  |  |
| Craniotomy and Intracranial Tumor Assessment | Tumor Classification | `who_grade` | WHO 2021 CNS Grade | `select` |  |  |  |
| Craniotomy and Intracranial Tumor Assessment | Tumor Classification | `molecular` | Molecular Markers (IDH1/2, MGMT methylation, EGFR, TERT promoter, 1p/19q, BRAF, H3K27M for midline; drives treatment selection and prognosis) | `text` |  |  |  |
| Craniotomy and Intracranial Tumor Assessment | Surgical Planning | `extent_resection` | Planned Extent of Resection | `select` |  |  |  |
| Craniotomy and Intracranial Tumor Assessment | Surgical Planning | `awake_craniotomy` | Awake Craniotomy | `select` |  |  |  |
| Craniotomy and Intracranial Tumor Assessment | Surgical Planning | `neuromonitoring` | Intraoperative Monitoring (MEP/SSEP for motor/sensory cortex; ECoG for seizure foci; 5-ALA fluorescence-guided resection; iMRI for real-time resection extent) | `text` |  |  |  |

### Spine Surgery — `neurosurgery_spine_degenerative_cf`

Screen: 1 page(s) · 3 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Spine Surgery Evaluation — Degenerative and Traumatic | Surgical Indication | `indication` | Primary Indication | `select` |  |  |  |
| Spine Surgery Evaluation — Degenerative and Traumatic | Surgical Indication | `levels` | Spine Levels Involved (e.g., C5-C6, L4-L5-S1; indicate primary symptomatic level; correlate exam and MRI) | `text` |  |  |  |
| Spine Surgery Evaluation — Degenerative and Traumatic | Neurologic Assessment | `motor_deficits` | Motor Deficits (muscle group, grade 0-5; C5=deltoid, C6=wrist ext, C7=triceps, C8=finger flex, T1=interossei; L2=hip flex, L3=quad, L4=dorsiflexion, L5=EHL, S1=plantar flex) | `text` |  |  |  |
| Spine Surgery Evaluation — Degenerative and Traumatic | Neurologic Assessment | `myelopathy_signs` | Myelopathy Signs (cervical cord; Lhermitte, Hoffman, Babinski, hyperreflexia, clonus; mJOA score — moderate ≤11, severe ≤7; surgical urgency for progressive myelopathy) | `text` |  |  |  |
| Spine Surgery Evaluation — Degenerative and Traumatic | Neurologic Assessment | `cauda_equina` | Cauda Equina Syndrome Suspected | `select` |  |  |  |
| Spine Surgery Evaluation — Degenerative and Traumatic | Planned Procedure | `approach` | Surgical Approach | `select` |  |  |  |

## OB/GYN / Endocrinology

### Gestational Diabetes — `gestational_diabetes_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Gestational Diabetes Follow-Up Visit | Patient & GDM Status | `patientId` | Patient | `typeahead` | Y |  |  |
| Gestational Diabetes Follow-Up Visit | Patient & GDM Status | `visitDate` | Visit Date | `date` | Y |  |  |
| Gestational Diabetes Follow-Up Visit | Patient & GDM Status | `provider` | MFM / Endocrinologist / OB | `typeahead` | Y |  |  |
| Gestational Diabetes Follow-Up Visit | Patient & GDM Status | `ga` | Gestational Age | `text` | Y |  |  |
| Gestational Diabetes Follow-Up Visit | Patient & GDM Status | `gdmManagement` | GDM Management Type | `select` | Y |  |  |
| Gestational Diabetes Follow-Up Visit | Glucose Log Review | `glucoseLog` | Glucose Log Summary (past 2 weeks) | `textarea` | Y |  |  |
| Gestational Diabetes Follow-Up Visit | Glucose Log Review | `fetalGrowth` | Fetal Surveillance Results | `textarea` | Y |  |  |
| Gestational Diabetes Follow-Up Visit | Treatment Adjustment & Delivery Plan | `plan` | Assessment & Management Plan | `textarea` | Y |  |  |

### PCOS Management — `polycystic_ovary_syndrome_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| PCOS Management Visit | Patient & Diagnosis Criteria | `patientId` | Patient | `typeahead` | Y |  |  |
| PCOS Management Visit | Patient & Diagnosis Criteria | `visitDate` | Visit Date | `date` | Y |  |  |
| PCOS Management Visit | Patient & Diagnosis Criteria | `provider` | Gynecologist / Endocrinologist / PCP | `typeahead` | Y |  |  |
| PCOS Management Visit | Patient & Diagnosis Criteria | `rotterdam` | Rotterdam Criteria Met (2 of 3) | `select` | Y |  |  |
| PCOS Management Visit | Patient & Diagnosis Criteria | `pcosPheno` | PCOS Phenotype | `select` | Y |  |  |
| PCOS Management Visit | Labs & Clinical Features | `lh` | LH (mIU/mL) | `number` |  |  |  |
| PCOS Management Visit | Labs & Clinical Features | `fsh` | FSH (mIU/mL) | `number` |  |  |  |
| PCOS Management Visit | Labs & Clinical Features | `testosterone` | Total Testosterone (ng/dL) | `number` |  |  |  |
| PCOS Management Visit | Labs & Clinical Features | `dheas` | DHEA-S (mcg/dL) | `number` |  |  |  |
| PCOS Management Visit | Labs & Clinical Features | `amh` | AMH (ng/mL) | `number` |  |  |  |
| PCOS Management Visit | Labs & Clinical Features | `clinicalFeatures` | Clinical Assessment | `textarea` | Y |  |  |
| PCOS Management Visit | Treatment Plan | `fertilityGoal` | Reproductive Goal | `select` | Y |  |  |
| PCOS Management Visit | Treatment Plan | `plan` | Assessment & Treatment Plan | `textarea` | Y |  |  |

### Premature Ovarian Insufficiency — `premature_ovarian_insufficiency_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Premature Ovarian Insufficiency (POI) Management Visit | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| Premature Ovarian Insufficiency (POI) Management Visit | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| Premature Ovarian Insufficiency (POI) Management Visit | Patient & Diagnosis | `provider` | GYN / Endocrinologist | `typeahead` | Y |  |  |
| Premature Ovarian Insufficiency (POI) Management Visit | Patient & Diagnosis | `poiEtiology` | POI Etiology | `select` | Y |  |  |
| Premature Ovarian Insufficiency (POI) Management Visit | Patient & Diagnosis | `ageOnset` | Age at POI Diagnosis | `number` | Y |  |  |
| Premature Ovarian Insufficiency (POI) Management Visit | Diagnostic Workup | `labs` | Diagnostic Labs (ESH/ASRM Criteria) | `textarea` | Y |  |  |
| Premature Ovarian Insufficiency (POI) Management Visit | Diagnostic Workup | `fertility` | Fertility Counseling | `textarea` | Y |  |  |
| Premature Ovarian Insufficiency (POI) Management Visit | HRT & Long-Term Health | `hrt` | Hormone Replacement Therapy (NON-OPTIONAL in POI) | `textarea` | Y |  |  |
| Premature Ovarian Insufficiency (POI) Management Visit | HRT & Long-Term Health | `plan` | Assessment & Plan | `textarea` | Y |  |  |

## Orders

### Imaging Order — `imaging_order_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Diagnostic Imaging Order | Patient & Order | `patientId` | Patient | `typeahead` | Y |  |  |
| Diagnostic Imaging Order | Patient & Order | `encounterId` | Encounter ID | `text` |  |  |  |
| Diagnostic Imaging Order | Patient & Order | `orderDate` | Order Date | `date` | Y |  |  |
| Diagnostic Imaging Order | Patient & Order | `orderingProvider` | Ordering Provider | `typeahead` | Y |  |  |
| Diagnostic Imaging Order | Patient & Order | `urgency4` | Urgency | `select` | Y |  |  |
| Diagnostic Imaging Order | Study Details | `modalityType` | Modality | `select` | Y |  |  |
| Diagnostic Imaging Order | Study Details | `bodyPart2` | Body Part / Region | `text` | Y |  |  |
| Diagnostic Imaging Order | Study Details | `withContrast` | Contrast | `select` |  |  |  |
| Diagnostic Imaging Order | Study Details | `views` | Views / Protocol | `text` |  |  |  |
| Diagnostic Imaging Order | Study Details | `cptCodeImaging` | CPT Code | `text` |  |  |  |
| Diagnostic Imaging Order | Study Details | `preferredFacility` | Preferred Facility | `text` |  |  |  |
| Diagnostic Imaging Order | Clinical Information | `diagnosisCodes5` | ICD-10 Code(s) | `text` | Y |  |  |
| Diagnostic Imaging Order | Clinical Information | `clinicalIndication2` | Clinical Indication | `textarea` | Y |  |  |
| Diagnostic Imaging Order | Clinical Information | `relevantHistory2` | Relevant History / Prior Studies | `textarea` |  |  |  |
| Diagnostic Imaging Order | Clinical Information | `pregnancyStatus` | Pregnancy Status (females) | `select` |  |  |  |
| Diagnostic Imaging Order | Clinical Information | `contrastAllergy` | Contrast Allergy / Contraindications | `select` |  |  |  |

### Lab Order — `lab_order_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Laboratory Order | Patient & Order Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Laboratory Order | Patient & Order Context | `encounterId` | Encounter ID | `text` |  |  |  |
| Laboratory Order | Patient & Order Context | `orderDate` | Order Date | `date` | Y |  |  |
| Laboratory Order | Patient & Order Context | `orderingProvider` | Ordering Provider | `typeahead` | Y |  |  |
| Laboratory Order | Patient & Order Context | `orderPriority` | Priority | `select` | Y |  |  |
| Laboratory Order | Patient & Order Context | `collectionSite` | Collection Site | `select` |  |  |  |
| Laboratory Order | Tests Ordered | `panelName` | Common Panels (check one or list individually below) | `select` | Y |  |  |
| Laboratory Order | Tests Ordered | `specificTests` | Additional Tests / Specific Panels | `textarea` |  |  |  |
| Laboratory Order | Tests Ordered | `specimenType` | Specimen Type | `select` |  |  |  |
| Laboratory Order | Clinical Information | `diagnosisCodes4` | ICD-10 Diagnosis Code(s) | `text` | Y |  |  |
| Laboratory Order | Clinical Information | `clinicalIndicator` | Clinical Indication | `textarea` |  |  |  |
| Laboratory Order | Clinical Information | `fastingRequired` | Fasting required (patient instructed) | `checkbox` |  |  |  |
| Laboratory Order | Clinical Information | `patientInstructions` | Patient Instructions | `textarea` |  |  |  |
| Laboratory Order | Clinical Information | `copyToProvider` | Copy Results To | `text` |  |  |  |

### Therapy Orders — `therapy_orders_cf`

Screen: 1 page(s) · 4 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Therapy Order (PT / OT / ST) | Order Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Therapy Order (PT / OT / ST) | Order Details | `orderDate` | Order Date | `date` | Y |  |  |
| Therapy Order (PT / OT / ST) | Order Details | `orderedBy` | Ordering Provider | `typeahead` | Y |  |  |
| Therapy Order (PT / OT / ST) | Order Details | `therapyType` | Therapy Type | `select` | Y |  |  |
| Therapy Order (PT / OT / ST) | Order Details | `settingType` | Setting | `select` |  |  |  |
| Therapy Order (PT / OT / ST) | Clinical Indication | `diagnosis` | Primary Diagnosis (ICD-10) | `typeahead` | Y |  |  |
| Therapy Order (PT / OT / ST) | Clinical Indication | `functionalLimitations` | Functional Limitations | `textarea` | Y |  |  |
| Therapy Order (PT / OT / ST) | Clinical Indication | `therapyGoals` | Therapy Goals | `textarea` | Y |  |  |
| Therapy Order (PT / OT / ST) | Clinical Indication | `precautions` | Precautions / Contraindications | `textarea` |  |  |  |
| Therapy Order (PT / OT / ST) | Therapy Prescription | `frequencyPerWeek` | Frequency (sessions/week) | `number` | Y |  |  |
| Therapy Order (PT / OT / ST) | Therapy Prescription | `durationWeeks` | Duration (weeks) | `number` | Y |  |  |
| Therapy Order (PT / OT / ST) | Therapy Prescription | `totalVisits` | Total Visits Authorized | `number` |  |  |  |
| Therapy Order (PT / OT / ST) | Therapy Prescription | `startDate` | Start Date | `date` |  |  |  |
| Therapy Order (PT / OT / ST) | Therapy Prescription | `preferredFacility` | Preferred Therapy Facility | `text` |  |  |  |
| Therapy Order (PT / OT / ST) | Therapy Prescription | `specialInstructions` | Special Instructions | `textarea` |  |  |  |
| Therapy Order (PT / OT / ST) | Status & Progress | `referralStatus` | Referral Status | `select` |  |  |  |
| Therapy Order (PT / OT / ST) | Status & Progress | `sessionsCompleted` | Sessions Completed | `number` |  |  |  |
| Therapy Order (PT / OT / ST) | Status & Progress | `progressNote` | Progress Update | `textarea` |  |  |  |

## Orthopedic Oncology

### Bone Tumor — `orthopedic_oncology_bone_tumor_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Bone Tumor — Staging and Surgical Planning | Diagnosis and Staging | `tumor_type` | Bone Tumor Type | `select` |  |  |  |
| Bone Tumor — Staging and Surgical Planning | Diagnosis and Staging | `enneking_stage` | Enneking / MSTS Stage | `select` |  |  |  |
| Bone Tumor — Staging and Surgical Planning | Surgical Plan | `surgical_margins` | Planned Surgical Margins | `select` |  |  |  |
| Bone Tumor — Staging and Surgical Planning | Surgical Plan | `reconstruction` | Reconstruction After Resection | `select` |  |  |  |

### Shoulder Instability / RC — `sports_medicine_shoulder_instability_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Shoulder Instability and Rotator Cuff Tear Assessment | Shoulder Instability | `instability_type` | Instability Pattern | `select` |  |  |  |
| Shoulder Instability and Rotator Cuff Tear Assessment | Shoulder Instability | `glenoid_bone_loss` | Glenoid Bone Loss (%; >25% = Latarjet procedure; 15-25% = consider Latarjet; <15% = arthroscopic Bankart adequate if Hill-Sachs engaging) | `number` |  |  |  |
| Shoulder Instability and Rotator Cuff Tear Assessment | Rotator Cuff Tear | `tear_pattern` | Rotator Cuff Tear Pattern | `select` |  |  |  |
| Shoulder Instability and Rotator Cuff Tear Assessment | Rotator Cuff Tear | `fatty_infiltration` | Goutallier Fatty Infiltration Grade | `select` |  |  |  |

### Soft Tissue Sarcoma — `orthopedic_oncology_soft_tissue_sarcoma_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Soft Tissue Sarcoma Assessment | Histology and Staging | `histology` | Sarcoma Histotype | `select` |  |  |  |
| Soft Tissue Sarcoma Assessment | Histology and Staging | `fnclcc_grade` | FNCLCC Histological Grade | `select` |  |  |  |
| Soft Tissue Sarcoma Assessment | Multidisciplinary Treatment | `radiation` | Radiation Therapy Role | `select` |  |  |  |
| Soft Tissue Sarcoma Assessment | Multidisciplinary Treatment | `chemotherapy` | Systemic Therapy | `select` |  |  |  |

## Pediatric Neurology

### Autism Spectrum Disorder — `pediatric_neurology_autism_spectrum_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Autism Spectrum Disorder — Diagnosis and Early Intervention | DSM-5 Diagnostic Criteria | `social_communication` | Social Communication Deficits (DSM-5 Criterion A) | `select` |  |  |  |
| Autism Spectrum Disorder — Diagnosis and Early Intervention | DSM-5 Diagnostic Criteria | `diagnostic_tools` | Diagnostic Assessment Tools (ADOS-2: Autism Diagnostic Observation Schedule — gold standard observational; ADI-R: Autism Diagnostic Interview-Revised — caregiver interview; M-CHAT-R/F: 16-24 months screening; CARS-2; GARS-3; developmental pediatrics or child psychiatry referral; early diagnosis before 3 years optimal; hearing test and genetic workup for all new diagnoses) | `text` |  |  |  |
| Autism Spectrum Disorder — Diagnosis and Early Intervention | Comorbidities and Genetic Workup | `comorbidities` | Comorbidity Assessment (ADHD 40-80% — methylphenidate lower response vs. neurotypical, higher side effects; anxiety 40%; OCD overlap; epilepsy 20-30% — EEG if regression or seizure concern; GI issues (constipation, GERD); sleep disorders (melatonin first-line); intellectual disability 30%; genetics: chromosomal microarray (CNV detection) for all ASD; FMR1 (fragile X) for all males; PTEN if macrocephaly; Rett syndrome (MECP2) in females) | `text` |  |  |  |
| Autism Spectrum Disorder — Diagnosis and Early Intervention | Comorbidities and Genetic Workup | `intervention` | Early Intervention Plan | `select` |  |  |  |

### Pediatric Epilepsy — `pediatric_epilepsy_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Epilepsy Management Visit | Patient & Epilepsy Type | `patientId` | Patient | `typeahead` | Y |  |  |
| Pediatric Epilepsy Management Visit | Patient & Epilepsy Type | `visitDate` | Visit Date | `date` | Y |  |  |
| Pediatric Epilepsy Management Visit | Patient & Epilepsy Type | `provider` | Pediatric Neurologist | `typeahead` | Y |  |  |
| Pediatric Epilepsy Management Visit | Patient & Epilepsy Type | `childAge` | Age (years) | `number` | Y |  |  |
| Pediatric Epilepsy Management Visit | Patient & Epilepsy Type | `epilepsyType` | Epilepsy Syndrome / Seizure Type | `select` | Y |  |  |
| Pediatric Epilepsy Management Visit | Patient & Epilepsy Type | `lastSeizure` | Date of Most Recent Seizure | `date` |  |  |  |
| Pediatric Epilepsy Management Visit | Seizure Control & Medications | `seizureControl` | Seizure Control Assessment | `textarea` | Y |  |  |
| Pediatric Epilepsy Management Visit | Seizure Control & Medications | `medications` | Antiseizure Medication Review | `textarea` | Y |  |  |
| Pediatric Epilepsy Management Visit | Treatment Plan & School Safety | `plan` | Assessment & Plan | `textarea` | Y |  |  |

### Pediatric Epilepsy Syndromes — `pediatric_neurology_epilepsy_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Epilepsy Syndromes — Dravet, LGS, Spasms, and KD | Age-Specific Epilepsy Syndromes | `infantile_spasms` | Infantile Spasms (West Syndrome) (onset 3-12 months; hypsarrhythmia on EEG (chaotic high-amplitude pattern); clinical: clusters of spasms (axial flexion or extension) on waking; URGENT: ACTH vs. vigabatrin; CHILD STUDY: ACTH 150 units/m2/day x2 weeks superior to placebo; UKISS: vigabatrin vs. ACTH: equal efficacy; COMBINED (ACTH + vigabatrin): ISISS trial ongoing; TREATMENT STANDARD (AAN/CNS 2012): HIGH-DOSE ACTH 150 units/m2/day QD x14 days (preferred); OR vigabatrin 50-150 mg/kg/day (especially tuberous sclerosis complex — vigabatrin superior); prednisolone 40-60 mg/day (oral steroid): used in UK as alternative; TSC-associated spasms: vigabatrin first-line (EPISTOP); response: check EEG at 2 weeks; non-response: switch or combination; PROGNOSIS: poor (only 30% developmental outcome if pre-existing brain abnormality); cryptocrypt syndrome (no identified cause): better prognosis; infantile spasms: URGENT EVALUATION (MRI brain, metabolic panel, genetics) | `text` |  |  |  |
| Pediatric Epilepsy Syndromes — Dravet, LGS, Spasms, and KD | Age-Specific Epilepsy Syndromes | `dravet` | Dravet Syndrome and SCN1A | `select` |  |  |  |
| Pediatric Epilepsy Syndromes — Dravet, LGS, Spasms, and KD | Lennox-Gastaut and Ketogenic Diet | `lgs` | Lennox-Gastaut Syndrome (LGS) (onset 1-7 years; multiple seizure types (tonic most characteristic, atonic (drop attacks), atypical absence); slow spike-wave on EEG (1.5-2.5 Hz); mental retardation common; TREATMENT: valproate (first-line), rufinamide (BANZEL), lamotrigine (reduce slowly — lowers seizure threshold if too rapid), clobazam, topiramate; fenfluramine (REIN-LGS trial): FDA approved LGS 2020; cannabidiol (Epidiolex): FDA approved LGS; GWPCARE trials; seizure freedom rare; goal: reduce drop attacks; VNS (vagus nerve stimulator); ketogenic diet; CORPUS CALLOSOTOMY: reduces atonic (drop attacks) 50-80%; division of anterior 2/3 corpus callosum; FELBAMATE (Felbatol): LGS approved; aplastic anemia + hepatotoxicity risk; REMS program; reserve for refractory LGS) | `text` |  |  |  |
| Pediatric Epilepsy Syndromes — Dravet, LGS, Spasms, and KD | Lennox-Gastaut and Ketogenic Diet | `ketogenic_diet` | Ketogenic Diet (KD) for Epilepsy | `select` |  |  |  |

## Platform

### Kanban Lane Configs — `KANBAN_CONFIGS`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Kanban Lane Config | Kanban Lane Config (KanbanLaneConfigsRoutes; GET /api/kanban-configs = list all org configs; POST = create (owner=caller); PUT /{id} = update name/lane_ids (OWNER ONLY); DELETE /{id} = remove (OWNER ONLY); kanban_lane_configs table (idempotent DDL; sanctioned raw SQL); fields: id/org_id/name/owner_user_id/owner_name/lane_ids (comma or JSON array of lane slugs: patient_scheduled/patient_arrived/ready_for_intake/...); everyone in org can READ+APPLY any config, only creator can edit/delete; show=true browsable shared org catalog) | `klcId` | Config ID (read-only UUID) | `text` |  |  |  |
| Kanban Lane Config | Kanban Lane Config (KanbanLaneConfigsRoutes; GET /api/kanban-configs = list all org configs; POST = create (owner=caller); PUT /{id} = update name/lane_ids (OWNER ONLY); DELETE /{id} = remove (OWNER ONLY); kanban_lane_configs table (idempotent DDL; sanctioned raw SQL); fields: id/org_id/name/owner_user_id/owner_name/lane_ids (comma or JSON array of lane slugs: patient_scheduled/patient_arrived/ready_for_intake/...); everyone in org can READ+APPLY any config, only creator can edit/delete; show=true browsable shared org catalog) | `klcName` | Config Name (required; e.g. Front Desk View / Billing Only) | `text` | Y |  |  |
| Kanban Lane Config | Kanban Lane Config (KanbanLaneConfigsRoutes; GET /api/kanban-configs = list all org configs; POST = create (owner=caller); PUT /{id} = update name/lane_ids (OWNER ONLY); DELETE /{id} = remove (OWNER ONLY); kanban_lane_configs table (idempotent DDL; sanctioned raw SQL); fields: id/org_id/name/owner_user_id/owner_name/lane_ids (comma or JSON array of lane slugs: patient_scheduled/patient_arrived/ready_for_intake/...); everyone in org can READ+APPLY any config, only creator can edit/delete; show=true browsable shared org catalog) | `klcOwnerName` | Owner Name (read-only; set from JWT name/email on create) | `text` |  |  |  |
| Kanban Lane Config | Kanban Lane Config (KanbanLaneConfigsRoutes; GET /api/kanban-configs = list all org configs; POST = create (owner=caller); PUT /{id} = update name/lane_ids (OWNER ONLY); DELETE /{id} = remove (OWNER ONLY); kanban_lane_configs table (idempotent DDL; sanctioned raw SQL); fields: id/org_id/name/owner_user_id/owner_name/lane_ids (comma or JSON array of lane slugs: patient_scheduled/patient_arrived/ready_for_intake/...); everyone in org can READ+APPLY any config, only creator can edit/delete; show=true browsable shared org catalog) | `klcLaneIds` | Lane IDs (comma-separated lane slugs to show; e.g. patient_scheduled,patient_arrived,ready_for_intake) | `textarea` | Y |  |  |
| Kanban Lane Config | Kanban Lane Config (KanbanLaneConfigsRoutes; GET /api/kanban-configs = list all org configs; POST = create (owner=caller); PUT /{id} = update name/lane_ids (OWNER ONLY); DELETE /{id} = remove (OWNER ONLY); kanban_lane_configs table (idempotent DDL; sanctioned raw SQL); fields: id/org_id/name/owner_user_id/owner_name/lane_ids (comma or JSON array of lane slugs: patient_scheduled/patient_arrived/ready_for_intake/...); everyone in org can READ+APPLY any config, only creator can edit/delete; show=true browsable shared org catalog) | `klcCreatedAt` | Created At (ISO 8601; read-only) | `text` |  |  |  |
| Kanban Lane Config | Kanban Lane Config (KanbanLaneConfigsRoutes; GET /api/kanban-configs = list all org configs; POST = create (owner=caller); PUT /{id} = update name/lane_ids (OWNER ONLY); DELETE /{id} = remove (OWNER ONLY); kanban_lane_configs table (idempotent DDL; sanctioned raw SQL); fields: id/org_id/name/owner_user_id/owner_name/lane_ids (comma or JSON array of lane slugs: patient_scheduled/patient_arrived/ready_for_intake/...); everyone in org can READ+APPLY any config, only creator can edit/delete; show=true browsable shared org catalog) | `klcUpdatedAt` | Updated At (ISO 8601; read-only) | `text` |  |  |  |

### Notifications — `NOTIFICATIONS`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `NOTIFICATION_DELIVERIES`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Notification | Notification | `ntfId` | Notification ID | `text` |  |  |  |
| Notification | Notification | `ntfType` | Type (claim_alert/result_review/task_assigned/workflow/system) | `text` |  |  |  |
| Notification | Notification | `ntfTitle` | Title | `text` |  |  |  |
| Notification | Notification | `ntfBody` | Body | `textarea` |  |  |  |
| Notification | Notification | `ntfPriority` | Priority (low/medium/high/urgent) | `text` |  |  |  |
| Notification | Notification | `ntfIsRead` | Is Read | `checkbox` |  |  |  |
| Notification | Notification | `ntfCreatedAt` | Created At | `text` |  |  |  |
| Notification | Notification | `ntfResourceType` | Resource Type (claim/patient/order/task) | `text` |  |  |  |
| Notification | Notification | `ntfResourceId` | Resource ID (link to context) | `text` |  |  |  |

### Workflow Board — `WORKFLOW_BOARD`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `CHARGE_REVIEW_QUEUE`, `CLAIMS`, `CLINICAL_TASKS`, `DENIALS`, `ENCOUNTERS`, `PORTAL_PATIENT_ESTABLISHMENT_REQUESTS`, `PORTAL_USERS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Work Item | Workflow Board (WorkflowBoardRoutes; GET /api/workflow/board; JWT authenticate; optional practiceId/boardDate/horizonDays; SERVER-SIDE SINGLE-SOURCE OF TRUTH for Kanban + Event Dashboard parity (D7-F7 count-equals-cards invariant); projects ALL entity types: CLAIMS (lane via wbClaimLane: denial_appeal/ar_follow_up/patient_balance/payer_response/claim_needs_scrub/ready_to_submit) + ENCOUNTERS + CHARGE_REVIEW_QUEUE (ready_for_coding/ready_to_claim) + APPOINTMENTS (window-filtered: patient_scheduled/patient_arrived/ready_for_intake/insurance_exception/blocked_review) + PORTAL_USERS (review_registration/patient_needs_schedule) + CLINICAL_TASKS (clinical_follow_up); suppression passes + collapseToOneCardPerPatient; 22-lane WB_LANE_PROGRESSION; B3/D8.11 per-claim riskScore/riskTier from STATUS_REASON; CLAIMSCrud+DENIALSCrud+PRACTICESCrud+ENCOUNTERSCrud+CHARGE_REVIEW_QUEUECrud+APPOINTMENTSCrud+PORTAL_USERSCrud+PORTAL_PATIENT_ESTABLISHMENT_REQUESTSCrud+CLINICAL_TASKSCrud; org-scoped; returns {workItems, laneCounts, entityScope, generatedAt}) | `wbId` | Work Item ID (entityType:entityId:lane; read-only) | `text` |  |  |  |
| Work Item | Workflow Board (WorkflowBoardRoutes; GET /api/workflow/board; JWT authenticate; optional practiceId/boardDate/horizonDays; SERVER-SIDE SINGLE-SOURCE OF TRUTH for Kanban + Event Dashboard parity (D7-F7 count-equals-cards invariant); projects ALL entity types: CLAIMS (lane via wbClaimLane: denial_appeal/ar_follow_up/patient_balance/payer_response/claim_needs_scrub/ready_to_submit) + ENCOUNTERS + CHARGE_REVIEW_QUEUE (ready_for_coding/ready_to_claim) + APPOINTMENTS (window-filtered: patient_scheduled/patient_arrived/ready_for_intake/insurance_exception/blocked_review) + PORTAL_USERS (review_registration/patient_needs_schedule) + CLINICAL_TASKS (clinical_follow_up); suppression passes + collapseToOneCardPerPatient; 22-lane WB_LANE_PROGRESSION; B3/D8.11 per-claim riskScore/riskTier from STATUS_REASON; CLAIMSCrud+DENIALSCrud+PRACTICESCrud+ENCOUNTERSCrud+CHARGE_REVIEW_QUEUECrud+APPOINTMENTSCrud+PORTAL_USERSCrud+PORTAL_PATIENT_ESTABLISHMENT_REQUESTSCrud+CLINICAL_TASKSCrud; org-scoped; returns {workItems, laneCounts, entityScope, generatedAt}) | `wbEntityType` | Entity Type (claim/encounter/charge_review/appointment/portal_user/clinical_follow_up; read-only) | `text` |  |  |  |
| Work Item | Workflow Board (WorkflowBoardRoutes; GET /api/workflow/board; JWT authenticate; optional practiceId/boardDate/horizonDays; SERVER-SIDE SINGLE-SOURCE OF TRUTH for Kanban + Event Dashboard parity (D7-F7 count-equals-cards invariant); projects ALL entity types: CLAIMS (lane via wbClaimLane: denial_appeal/ar_follow_up/patient_balance/payer_response/claim_needs_scrub/ready_to_submit) + ENCOUNTERS + CHARGE_REVIEW_QUEUE (ready_for_coding/ready_to_claim) + APPOINTMENTS (window-filtered: patient_scheduled/patient_arrived/ready_for_intake/insurance_exception/blocked_review) + PORTAL_USERS (review_registration/patient_needs_schedule) + CLINICAL_TASKS (clinical_follow_up); suppression passes + collapseToOneCardPerPatient; 22-lane WB_LANE_PROGRESSION; B3/D8.11 per-claim riskScore/riskTier from STATUS_REASON; CLAIMSCrud+DENIALSCrud+PRACTICESCrud+ENCOUNTERSCrud+CHARGE_REVIEW_QUEUECrud+APPOINTMENTSCrud+PORTAL_USERSCrud+PORTAL_PATIENT_ESTABLISHMENT_REQUESTSCrud+CLINICAL_TASKSCrud; org-scoped; returns {workItems, laneCounts, entityScope, generatedAt}) | `wbEntityId` | Entity ID (UUID; read-only) | `text` |  |  |  |
| Work Item | Workflow Board (WorkflowBoardRoutes; GET /api/workflow/board; JWT authenticate; optional practiceId/boardDate/horizonDays; SERVER-SIDE SINGLE-SOURCE OF TRUTH for Kanban + Event Dashboard parity (D7-F7 count-equals-cards invariant); projects ALL entity types: CLAIMS (lane via wbClaimLane: denial_appeal/ar_follow_up/patient_balance/payer_response/claim_needs_scrub/ready_to_submit) + ENCOUNTERS + CHARGE_REVIEW_QUEUE (ready_for_coding/ready_to_claim) + APPOINTMENTS (window-filtered: patient_scheduled/patient_arrived/ready_for_intake/insurance_exception/blocked_review) + PORTAL_USERS (review_registration/patient_needs_schedule) + CLINICAL_TASKS (clinical_follow_up); suppression passes + collapseToOneCardPerPatient; 22-lane WB_LANE_PROGRESSION; B3/D8.11 per-claim riskScore/riskTier from STATUS_REASON; CLAIMSCrud+DENIALSCrud+PRACTICESCrud+ENCOUNTERSCrud+CHARGE_REVIEW_QUEUECrud+APPOINTMENTSCrud+PORTAL_USERSCrud+PORTAL_PATIENT_ESTABLISHMENT_REQUESTSCrud+CLINICAL_TASKSCrud; org-scoped; returns {workItems, laneCounts, entityScope, generatedAt}) | `wbLane` | Kanban Lane (see WB_LANE_PROGRESSION 22 values; read-only) | `text` |  |  |  |
| Work Item | Workflow Board (WorkflowBoardRoutes; GET /api/workflow/board; JWT authenticate; optional practiceId/boardDate/horizonDays; SERVER-SIDE SINGLE-SOURCE OF TRUTH for Kanban + Event Dashboard parity (D7-F7 count-equals-cards invariant); projects ALL entity types: CLAIMS (lane via wbClaimLane: denial_appeal/ar_follow_up/patient_balance/payer_response/claim_needs_scrub/ready_to_submit) + ENCOUNTERS + CHARGE_REVIEW_QUEUE (ready_for_coding/ready_to_claim) + APPOINTMENTS (window-filtered: patient_scheduled/patient_arrived/ready_for_intake/insurance_exception/blocked_review) + PORTAL_USERS (review_registration/patient_needs_schedule) + CLINICAL_TASKS (clinical_follow_up); suppression passes + collapseToOneCardPerPatient; 22-lane WB_LANE_PROGRESSION; B3/D8.11 per-claim riskScore/riskTier from STATUS_REASON; CLAIMSCrud+DENIALSCrud+PRACTICESCrud+ENCOUNTERSCrud+CHARGE_REVIEW_QUEUECrud+APPOINTMENTSCrud+PORTAL_USERSCrud+PORTAL_PATIENT_ESTABLISHMENT_REQUESTSCrud+CLINICAL_TASKSCrud; org-scoped; returns {workItems, laneCounts, entityScope, generatedAt}) | `wbPatientId` | Patient ID (read-only; empty for unmatched portal registrations) | `text` |  |  |  |
| Work Item | Workflow Board (WorkflowBoardRoutes; GET /api/workflow/board; JWT authenticate; optional practiceId/boardDate/horizonDays; SERVER-SIDE SINGLE-SOURCE OF TRUTH for Kanban + Event Dashboard parity (D7-F7 count-equals-cards invariant); projects ALL entity types: CLAIMS (lane via wbClaimLane: denial_appeal/ar_follow_up/patient_balance/payer_response/claim_needs_scrub/ready_to_submit) + ENCOUNTERS + CHARGE_REVIEW_QUEUE (ready_for_coding/ready_to_claim) + APPOINTMENTS (window-filtered: patient_scheduled/patient_arrived/ready_for_intake/insurance_exception/blocked_review) + PORTAL_USERS (review_registration/patient_needs_schedule) + CLINICAL_TASKS (clinical_follow_up); suppression passes + collapseToOneCardPerPatient; 22-lane WB_LANE_PROGRESSION; B3/D8.11 per-claim riskScore/riskTier from STATUS_REASON; CLAIMSCrud+DENIALSCrud+PRACTICESCrud+ENCOUNTERSCrud+CHARGE_REVIEW_QUEUECrud+APPOINTMENTSCrud+PORTAL_USERSCrud+PORTAL_PATIENT_ESTABLISHMENT_REQUESTSCrud+CLINICAL_TASKSCrud; org-scoped; returns {workItems, laneCounts, entityScope, generatedAt}) | `wbStatus` | Entity Status (normalized lowercase; read-only) | `text` |  |  |  |
| Work Item | Workflow Board (WorkflowBoardRoutes; GET /api/workflow/board; JWT authenticate; optional practiceId/boardDate/horizonDays; SERVER-SIDE SINGLE-SOURCE OF TRUTH for Kanban + Event Dashboard parity (D7-F7 count-equals-cards invariant); projects ALL entity types: CLAIMS (lane via wbClaimLane: denial_appeal/ar_follow_up/patient_balance/payer_response/claim_needs_scrub/ready_to_submit) + ENCOUNTERS + CHARGE_REVIEW_QUEUE (ready_for_coding/ready_to_claim) + APPOINTMENTS (window-filtered: patient_scheduled/patient_arrived/ready_for_intake/insurance_exception/blocked_review) + PORTAL_USERS (review_registration/patient_needs_schedule) + CLINICAL_TASKS (clinical_follow_up); suppression passes + collapseToOneCardPerPatient; 22-lane WB_LANE_PROGRESSION; B3/D8.11 per-claim riskScore/riskTier from STATUS_REASON; CLAIMSCrud+DENIALSCrud+PRACTICESCrud+ENCOUNTERSCrud+CHARGE_REVIEW_QUEUECrud+APPOINTMENTSCrud+PORTAL_USERSCrud+PORTAL_PATIENT_ESTABLISHMENT_REQUESTSCrud+CLINICAL_TASKSCrud; org-scoped; returns {workItems, laneCounts, entityScope, generatedAt}) | `wbRiskScore` | Risk Score (0-99; claim entity only; B3/D8.11 denial risk; read-only) | `text` |  |  |  |
| Work Item | Workflow Board (WorkflowBoardRoutes; GET /api/workflow/board; JWT authenticate; optional practiceId/boardDate/horizonDays; SERVER-SIDE SINGLE-SOURCE OF TRUTH for Kanban + Event Dashboard parity (D7-F7 count-equals-cards invariant); projects ALL entity types: CLAIMS (lane via wbClaimLane: denial_appeal/ar_follow_up/patient_balance/payer_response/claim_needs_scrub/ready_to_submit) + ENCOUNTERS + CHARGE_REVIEW_QUEUE (ready_for_coding/ready_to_claim) + APPOINTMENTS (window-filtered: patient_scheduled/patient_arrived/ready_for_intake/insurance_exception/blocked_review) + PORTAL_USERS (review_registration/patient_needs_schedule) + CLINICAL_TASKS (clinical_follow_up); suppression passes + collapseToOneCardPerPatient; 22-lane WB_LANE_PROGRESSION; B3/D8.11 per-claim riskScore/riskTier from STATUS_REASON; CLAIMSCrud+DENIALSCrud+PRACTICESCrud+ENCOUNTERSCrud+CHARGE_REVIEW_QUEUECrud+APPOINTMENTSCrud+PORTAL_USERSCrud+PORTAL_PATIENT_ESTABLISHMENT_REQUESTSCrud+CLINICAL_TASKSCrud; org-scoped; returns {workItems, laneCounts, entityScope, generatedAt}) | `wbRiskTier` | Risk Tier (critical/high/medium/low; claim entity only; read-only) | `text` |  |  |  |
