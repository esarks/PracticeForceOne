---
title: "PracticeForceOneCFTrackingFields10"
---

# CF Tracking — Field-Level Detail (part 10 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Clinical**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Clinical

### Pain Medicine — `pain_medicine_cf`

Screen: 2 page(s) · 6 section(s) · 89 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Evaluation | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Evaluation | `provider` | Provider | `text` |  |  |  |
| Evaluation | Evaluation | `chiefPainComplaint` | Chief Pain Complaint | `textarea` |  |  |  |
| Evaluation | Evaluation | `painOnset` | Pain Onset | `date` |  |  |  |
| Evaluation | Evaluation | `painDuration` | Duration | `text` |  |  |  |
| Evaluation | Evaluation | `painFrequency` | Frequency | `text` |  |  |  |
| Evaluation | Pain Assessment | `nrsAverage` | NRS Average (0–10) | `number` |  |  |  |
| Evaluation | Pain Assessment | `nrsWorst` | NRS Worst (0–10) | `number` |  |  |  |
| Evaluation | Pain Assessment | `nrsLeast` | NRS Least (0–10) | `number` |  |  |  |
| Evaluation | Pain Assessment | `nrsCurrent` | NRS Current (0–10) | `number` |  |  |  |
| Evaluation | Pain Assessment | `cervicalPain` | Cervical Pain | `checkbox` |  |  |  |
| Evaluation | Pain Assessment | `lumbarPain` | Lumbar/SI Pain | `checkbox` |  |  |  |
| Evaluation | Pain Assessment | `headachePain` | Headache/Facial | `checkbox` |  |  |  |
| Evaluation | Pain Assessment | `neuropathicPain` | Neuropathic Features | `checkbox` |  |  |  |
| Evaluation | Pain Assessment | `crpsPresent` | CRPS | `checkbox` |  |  |  |
| Evaluation | Pain Assessment | `painRadiation` | Radiation Pattern | `text` |  |  |  |
| Evaluation | Pain Assessment | `sleepImpact` | Sleep Impact | `text` |  |  |  |
| Evaluation | Pain Assessment | `adlImpact` | ADL Impact | `text` |  |  |  |
| Evaluation | Pain Assessment | `workImpact` | Work Impact | `text` |  |  |  |
| Evaluation | Risk Stratification | `ortScore` | ORT Score (0–26) | `number` |  |  |  |
| Evaluation | Risk Stratification | `ortPersonalSubstanceAbuseHx` | ORT Personal Substance Hx | `checkbox` |  |  |  |
| Evaluation | Risk Stratification | `ortFamilySubstanceAbuseHx` | ORT Family Substance Hx | `checkbox` |  |  |  |
| Evaluation | Risk Stratification | `ortPsychHistory` | ORT Psych History | `checkbox` |  |  |  |
| Evaluation | Risk Stratification | `direScore` | DIRE Score | `number` |  |  |  |
| Evaluation | Risk Stratification | `phq9Score` | PHQ-9 Score | `number` |  |  |  |
| Evaluation | Risk Stratification | `gad7Score` | GAD-7 Score | `number` |  |  |  |
| Evaluation | Risk Stratification | `pcl5Score` | PCL-5 Score | `number` |  |  |  |
| Evaluation | Risk Stratification | `sudHistoryPresent` | SUD History Present | `checkbox` |  |  |  |
| Evaluation | Risk Stratification | `pdmpChecked` | PDMP Checked | `checkbox` |  |  |  |
| Evaluation | Risk Stratification | `pdmpDate` | PDMP Date | `date` |  |  |  |
| Evaluation | Risk Stratification | `pdmpFindings` | PDMP Findings | `text` |  |  |  |
| Evaluation | Risk Stratification | `udsObtained` | UDS Obtained | `checkbox` |  |  |  |
| Evaluation | Risk Stratification | `udsDate` | UDS Date | `date` |  |  |  |
| Evaluation | Risk Stratification | `udsResult` | UDS Result | `text` |  |  |  |
| Evaluation | Risk Stratification | `csaSigned` | CSA Signed | `checkbox` |  |  |  |
| Evaluation | Risk Stratification | `csaDate` | CSA Date | `date` |  |  |  |
| Evaluation | Prior Treatment | `priorPT` | Prior Physical Therapy | `checkbox` |  |  |  |
| Evaluation | Prior Treatment | `priorPTResponse` | PT Response | `text` |  |  |  |
| Evaluation | Prior Treatment | `priorChiropractic` | Prior Chiropractic | `checkbox` |  |  |  |
| Evaluation | Prior Treatment | `priorPsychology` | Prior Psychology/CBT | `checkbox` |  |  |  |
| Evaluation | Prior Treatment | `priorSurgery` | Prior Surgery | `checkbox` |  |  |  |
| Evaluation | Prior Treatment | `priorSurgeryDescription` | Surgery Description | `text` |  |  |  |
| Evaluation | Prior Treatment | `priorOpioid` | Prior Opioid Use | `checkbox` |  |  |  |
| Evaluation | Prior Treatment | `priorOpioidAgent` | Prior Opioid Agent | `text` |  |  |  |
| Evaluation | Prior Treatment | `priorOpioidMme` | Prior Opioid MME/day | `number` |  |  |  |
| Evaluation | Prior Treatment | `aberrantBehaviorHistory` | Aberrant Behavior History | `checkbox` |  |  |  |
| Evaluation | Diagnosis & Plan | `primaryPainDiagnosis` | Primary Pain Diagnosis | `text` |  |  |  |
| Evaluation | Diagnosis & Plan | `icd10Codes` | ICD-10 Codes | `text` |  |  |  |
| Evaluation | Diagnosis & Plan | `painClassification` | Pain Classification | `select` |  |  |  |
| Evaluation | Diagnosis & Plan | `opioidTherapyIndicated` | Opioid Therapy Indicated | `checkbox` |  |  |  |
| Evaluation | Diagnosis & Plan | `plannedOpioid` | Planned Opioid | `text` |  |  |  |
| Evaluation | Diagnosis & Plan | `plannedMmeDay` | Planned MME/day | `number` |  |  |  |
| Evaluation | Diagnosis & Plan | `plannedAdjuvants` | Planned Adjuvants | `text` |  |  |  |
| Evaluation | Diagnosis & Plan | `plannedInterventions` | Planned Interventions | `text` |  |  |  |
| Evaluation | Diagnosis & Plan | `nonPharmacologicPlan` | Non-Pharmacologic Plan | `text` |  |  |  |
| Evaluation | Diagnosis & Plan | `udsFrequency` | UDS Frequency | `text` |  |  |  |
| Evaluation | Diagnosis & Plan | `returnVisitWeeks` | Return Visit (weeks) | `number` |  |  |  |
| Evaluation | Diagnosis & Plan | `treatmentGoals` | Treatment Goals | `textarea` |  |  |  |
| Evaluation | Diagnosis & Plan | `evalNotes` | Notes | `textarea` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Follow-Up Visits | Pain Medicine Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `visitNumber` | Visit # | `number` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `provider` | Provider | `text` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `nrsAverageToday` | NRS Average Today | `number` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `nrsWorstToday` | NRS Worst Today | `number` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `painChangeSinceLast` | Pain Change Since Last | `select` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `functionChange` | Function Change | `select` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `sleepQuality` | Sleep Quality | `text` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `currentOpioid` | Current Opioid | `text` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `currentMmeDay` | Current MME/day | `number` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `opioidAdherence` | Opioid Adherence | `checkbox` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `aberrantBehaviorToday` | Aberrant Behavior | `checkbox` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `aberrantBehaviorDescription` | Aberrant Description | `text` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `udsToday` | UDS Obtained | `checkbox` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `pdmpToday` | PDMP Checked | `checkbox` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `pillCountDone` | Pill Count Done | `checkbox` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `refillAuthorized` | Refill Authorized | `checkbox` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `refillQuantity` | Refill Quantity | `number` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `procedurePerformed` | Procedure Performed | `checkbox` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `procedureType` | Procedure Type | `text` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `procedureSite` | Procedure Site | `text` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `guidanceType` | Image Guidance | `text` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `procedureComplications` | Procedure Complications | `checkbox` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `medicationChange` | Medication Change | `checkbox` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `medicationChangeDetails` | Medication Change Details | `text` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `nextVisitWeeks` | Next Visit (weeks) | `number` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `referrals` | Referrals | `text` |  |  |  |
| Follow-Up Visits | Pain Medicine Visit | `visitNotes` | Notes | `textarea` |  |  |  |

### Pain Mgmt Procedure — `pain_management_procedure_cf`

Screen: 1 page(s) · 2 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pain Management Procedure Note | Patient & Procedure | `patientId` | Patient | `typeahead` | Y |  |  |
| Pain Management Procedure Note | Patient & Procedure | `procedureDate` | Procedure Date | `date` | Y |  |  |
| Pain Management Procedure Note | Patient & Procedure | `provider` | Performing Provider | `typeahead` | Y |  |  |
| Pain Management Procedure Note | Patient & Procedure | `procedureType` | Procedure Type | `select` | Y |  |  |
| Pain Management Procedure Note | Patient & Procedure | `indicatingDx` | Indication / Diagnosis | `text` | Y |  |  |
| Pain Management Procedure Note | Patient & Procedure | `fluoroscopy` | Fluoroscopic guidance used | `checkbox` |  |  |  |
| Pain Management Procedure Note | Patient & Procedure | `ultrasound` | Ultrasound guidance used | `checkbox` |  |  |  |
| Pain Management Procedure Note | Patient & Procedure | `cptCode` | CPT Code(s) | `text` | Y |  |  |
| Pain Management Procedure Note | Procedure Details | `preProcedure` | Pre-Procedure Assessment | `textarea` | Y |  |  |
| Pain Management Procedure Note | Procedure Details | `procedureNarrative` | Procedure Narrative | `textarea` | Y |  |  |
| Pain Management Procedure Note | Procedure Details | `postProcedure` | Post-Procedure / Discharge | `textarea` | Y |  |  |
| Pain Management Procedure Note | Procedure Details | `complications` | Complications | `select` | Y |  |  |

### Patient Activity Timeline — `patient_activities_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Activity Timeline | Activities | `timestamp` | Time | `text` |  | timestamp |  |
| Activity Timeline | Activities | `type` | Type | `text` |  | type |  |
| Activity Timeline | Activities | `title` | Title | `text` |  | title |  |
| Activity Timeline | Activities | `detail` | Detail | `text` |  | detail |  |

### Patient Alerts — `patient_alerts_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Alert | Alert Information | `category` | Category | `text` |  | category |  |
| Alert | Alert Information | `alertText` | Alert Text | `textarea` |  | alertText |  |
| Alert | Alert Information | `active` | Active | `text` |  | active |  |
| Alert | Alert Information | `updatedAt` | Updated | `text` |  | updatedAt |  |

### Patient Education — `patient_education_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Education Materials | Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Patient Education Materials | Context | `encounterId` | Encounter ID | `text` |  |  |  |
| Patient Education Materials | Context | `deliveryDate` | Materials Provided Date | `date` |  |  |  |
| Patient Education Materials | Materials Assigned | `topic1` | Education Topic 1 | `typeahead` |  |  |  |
| Patient Education Materials | Materials Assigned | `topic1Language` | Topic 1 Language | `select` |  |  |  |
| Patient Education Materials | Materials Assigned | `topic1Delivered` | Delivery Method | `select` |  |  |  |
| Patient Education Materials | Materials Assigned | `topic2` | Education Topic 2 | `typeahead` |  |  |  |
| Patient Education Materials | Materials Assigned | `topic2Language` | Topic 2 Language | `select` |  |  |  |
| Patient Education Materials | Materials Assigned | `topic3` | Education Topic 3 | `typeahead` |  |  |  |
| Patient Education Materials | Teach-Back / Comprehension | `teachBackMethod` | Comprehension Method Used | `select` |  |  |  |
| Patient Education Materials | Teach-Back / Comprehension | `comprehensionLevel` | Patient Comprehension | `select` |  |  |  |
| Patient Education Materials | Teach-Back / Comprehension | `interpreterUsed` | Medical interpreter used for education session | `checkbox` |  |  |  |
| Patient Education Materials | Teach-Back / Comprehension | `interpreterLanguage` | Interpreter Language | `text` |  |  |  |
| Patient Education Materials | Teach-Back / Comprehension | `educationNotes` | Education Session Notes | `textarea` |  |  |  |

### Patient Education — `patient_education_review_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Education Documentation | Patient & Session | `patientId` | Patient | `typeahead` | Y |  |  |
| Patient Education Documentation | Patient & Session | `educationDate` | Education Date | `date` | Y |  |  |
| Patient Education Documentation | Patient & Session | `educator` | Educator / Provider | `typeahead` | Y |  |  |
| Patient Education Documentation | Patient & Session | `sessionDuration` | Session Duration (minutes) | `number` |  |  |  |
| Patient Education Documentation | Patient & Session | `learnersPresent` | Learner(s) Present | `select` |  |  |  |
| Patient Education Documentation | Education Topics | `topicCategory` | Primary Topic Category | `select` | Y |  |  |
| Patient Education Documentation | Education Topics | `topicDetails` | Topics Covered (detail) | `textarea` | Y |  |  |
| Patient Education Documentation | Education Topics | `materialsGiven` | Education Materials Provided | `textarea` |  |  |  |
| Patient Education Documentation | Learning Assessment | `learnerReadiness` | Learner Readiness to Learn | `select` |  |  |  |
| Patient Education Documentation | Learning Assessment | `learnerUnderstanding` | Post-Education Understanding | `select` | Y |  |  |
| Patient Education Documentation | Learning Assessment | `teachBackMethod` | Assessment Method | `select` |  |  |  |
| Patient Education Documentation | Learning Assessment | `barriers` | Identified Barriers to Learning / Adherence | `textarea` |  |  |  |
| Patient Education Documentation | Learning Assessment | `followUpPlan2` | Follow-Up Education Plan | `textarea` |  |  |  |

### Patient Goals — `patient_goals_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Care Goal | Goal | `patientId` | Patient | `lookup` | Y |  |  |
| Care Goal | Goal | `goalCategory` | Category | `select` |  |  |  |
| Care Goal | Goal | `priority` | Priority | `select` |  |  |  |
| Care Goal | Goal | `goalDescription` | Goal Description | `textarea` | Y |  |  |
| Care Goal | Goal | `goalStatement` | SMART Goal Statement | `textarea` |  |  |  |
| Care Goal | Target | `targetValue` | Target Value | `text` |  |  |  |
| Care Goal | Target | `targetUnit` | Unit | `text` |  |  |  |
| Care Goal | Target | `targetDate` | Target Date | `date` |  |  |  |
| Care Goal | Target | `baselineValue` | Baseline Value | `text` |  |  |  |
| Care Goal | Target | `baselineDate` | Baseline Date | `date` |  |  |  |
| Care Goal | Target | `startDate` | Start Date | `date` |  |  |  |
| Care Goal | Interventions & Plan | `interventionNotes` | Interventions | `textarea` |  |  |  |
| Care Goal | Interventions & Plan | `barrierNotes` | Barriers | `textarea` |  |  |  |
| Care Goal | Interventions & Plan | `isPatientDefined` | Patient-Defined Goal | `checkbox` |  |  |  |

### Patient Insurances — `patient_insurances_cf`

Screen: 1 page(s) · 3 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `PATIENTS`, `PATIENT_INSURANCES`, `PAYERS_MASTER`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Insurance Record | Coverage | `pinsId` | Insurance ID | `text` |  |  |  |
| Insurance Record | Coverage | `pinsPatientId` | Patient ID (required) | `text` | Y |  |  |
| Insurance Record | Coverage | `pinsPayerId` | Payer ID (from master) | `text` | Y |  |  |
| Insurance Record | Coverage | `pinsPayerName` | Payer Name | `text` |  |  |  |
| Insurance Record | Coverage | `pinsPlanName` | Plan Name | `text` |  |  |  |
| Insurance Record | Coverage | `pinsPriority` | Priority | `select` | Y |  |  |
| Insurance Record | Coverage | `pinsEffectiveDate` | Effective Date | `date` |  |  |  |
| Insurance Record | Coverage | `pinsTerminationDate` | Termination Date | `date` |  |  |  |
| Insurance Record | Coverage | `pinsIsActive` | Active | `checkbox` |  |  |  |
| Insurance Record | Member / Subscriber | `pinsSubscriberId` | Subscriber ID (encrypted) | `text` | Y |  |  |
| Insurance Record | Member / Subscriber | `pinsGroupNumber` | Group Number (encrypted) | `text` |  |  |  |
| Insurance Record | Member / Subscriber | `pinsMemberFirstName` | Member First Name | `text` |  |  |  |
| Insurance Record | Member / Subscriber | `pinsMemberLastName` | Member Last Name | `text` |  |  |  |
| Insurance Record | Member / Subscriber | `pinsMemberDob` | Member Date of Birth | `date` |  |  |  |
| Insurance Record | Member / Subscriber | `pinsRelationship` | Relationship to Patient | `select` |  |  |  |
| Insurance Record | Cost Sharing | `pinsCopay` | Copay ($) | `number` |  |  |  |
| Insurance Record | Cost Sharing | `pinsDeductible` | Deductible ($) | `number` |  |  |  |
| Insurance Record | Cost Sharing | `pinsDeductibleMet` | Deductible Met ($) | `number` |  |  |  |
| Insurance Record | Cost Sharing | `pinsOutOfPocketMax` | Out-of-Pocket Max ($) | `number` |  |  |  |
| Insurance Record | Cost Sharing | `pinsPriorAuthRequired` | Prior Auth Required | `checkbox` |  |  |  |
| Insurance Record | Cost Sharing | `pinsNotes` | Notes | `textarea` |  |  |  |

### Patient Safety Screen — `patient_safety_screening_cf`

Screen: 1 page(s) · 5 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Safety Screening | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Patient Safety Screening | Patient | `screenDate` | Screen Date | `date` | Y |  |  |
| Patient Safety Screening | Patient | `screenedBy` | Screened By | `typeahead` | Y |  |  |
| Patient Safety Screening | Suicide / Self-Harm Risk | `phq2` | PHQ-2 Rapid Screen | `select` | Y |  |  |
| Patient Safety Screening | Suicide / Self-Harm Risk | `c_ssrs` | Suicidal Ideation Screen (C-SSRS / direct ask) | `select` | Y |  |  |
| Patient Safety Screening | Suicide / Self-Harm Risk | `safetyPlanDone` | Safety plan completed (if any ideation identified) | `checkbox` |  |  |  |
| Patient Safety Screening | Suicide / Self-Harm Risk | `lethality` | Lethality Assessment Notes (if positive screen) | `textarea` |  |  |  |
| Patient Safety Screening | Fall Risk | `fallRiskRapid` | Fall Risk Quick Screen | `select` | Y |  |  |
| Patient Safety Screening | Fall Risk | `fallHistory` | Falls in Past 12 Months | `text` |  |  |  |
| Patient Safety Screening | Interpersonal Violence | `dvScreen` | Domestic / Intimate Partner Violence Screen | `select` | Y |  |  |
| Patient Safety Screening | Interpersonal Violence | `childSafety` | Child / Elder Safety Concern (if applicable) | `select` |  |  |  |
| Patient Safety Screening | Other Safety Concerns | `weaponAccess` | Firearm / Weapon Safety (if applicable) | `select` |  |  |  |
| Patient Safety Screening | Other Safety Concerns | `drivingConcern` | Driving Safety Concern (elderly / impaired) | `select` |  |  |  |
| Patient Safety Screening | Other Safety Concerns | `safetyPlan` | Overall Safety Plan / Actions Taken | `textarea` | Y |  |  |

### Patient Transfers — `patient_transfer_cf`

Screen: 1 page(s) · 1 section(s) · 12 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Transfer | Transfer Details | `transferType` | Direction | `select` | Y |  |  |
| Patient Transfer | Transfer Details | `transferPriority` | Priority | `select` |  |  |  |
| Patient Transfer | Transfer Details | `transportMode` | Transport Mode | `text` |  |  |  |
| Patient Transfer | Transfer Details | `sendingFacility` | Sending Facility | `text` |  |  |  |
| Patient Transfer | Transfer Details | `receivingFacility` | Receiving Facility | `text` |  |  |  |
| Patient Transfer | Transfer Details | `receivingProvider` | Receiving Provider | `text` |  |  |  |
| Patient Transfer | Transfer Details | `levelOfCareFrom` | Level of Care (From) | `text` |  |  |  |
| Patient Transfer | Transfer Details | `levelOfCareTo` | Level of Care (To) | `text` |  |  |  |
| Patient Transfer | Transfer Details | `emtalaApplicable` | EMTALA Applicable | `select` |  |  |  |
| Patient Transfer | Transfer Details | `primaryDiagnosis` | Primary Diagnosis | `textarea` |  |  |  |
| Patient Transfer | Transfer Details | `status` | Status | `text` |  | status |  |
| Patient Transfer | Transfer Details | `transferNumber` | Transfer # | `text` |  | transferNumber |  |

### Patients — `patients_cf`

Screen: 1 page(s) · 2 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Registration | Patient | `firstName` | First Name | `text` | Y |  |  |
| Registration | Patient | `lastName` | Last Name | `text` | Y |  |  |
| Registration | Patient | `dateOfBirth` | Date of Birth | `date` | Y |  |  |
| Registration | Patient | `gender` | Sex | `select` | Y |  |  |
| Registration | Patient | `phone` | Phone | `tel` |  |  |  |
| Registration | Patient | `email` | Email | `email` |  |  |  |
| Registration | Patient | `addressLine1` | Address | `text` |  |  |  |
| Registration | Patient | `city` | City | `text` |  |  |  |
| Registration | Patient | `state` | State | `text` |  |  |  |
| Registration | Patient | `zipCode` | ZIP | `text` |  |  |  |
| Registration | Additional Demographics | `middleName` | Middle Name | `text` |  | middleName |  |
| Registration | Additional Demographics | `suffix` | Suffix | `text` |  | suffix |  |
| Registration | Additional Demographics | `mrn` | MRN | `text` |  | mrn |  |
| Registration | Additional Demographics | `accountNumber` | Account # | `text` |  | accountNumber |  |
| Registration | Additional Demographics | `ssnLastFour` | SSN (last 4) | `text` |  | ssnLastFour |  |
| Registration | Additional Demographics | `phoneCell` | Cell Phone | `tel` |  | phoneCell |  |
| Registration | Additional Demographics | `phoneHome` | Home Phone | `tel` |  | phoneHome |  |
| Registration | Additional Demographics | `phoneWork` | Work Phone | `tel` |  | phoneWork |  |
| Registration | Additional Demographics | `addressLine2` | Address Line 2 | `text` |  | addressLine2 |  |
| Registration | Additional Demographics | `relationship` | Relationship | `text` |  | relationship |  |
| Registration | Additional Demographics | `notes` | Notes | `textarea` |  | notes |  |

### Patients — `PATIENTS`

Screen: 1 page(s) · 3 section(s) · 20 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient | Demographics | `patId` | Patient ID | `text` |  |  |  |
| Patient | Demographics | `patFirstName` | First Name | `text` | Y |  |  |
| Patient | Demographics | `patLastName` | Last Name | `text` | Y |  |  |
| Patient | Demographics | `patDateOfBirth` | Date of Birth | `date` |  |  |  |
| Patient | Demographics | `patSex` | Sex (M, F, O) | `text` |  |  |  |
| Patient | Demographics | `patGender` | Gender Identity | `text` |  |  |  |
| Patient | Demographics | `patRace` | Race | `text` |  |  |  |
| Patient | Demographics | `patEthnicity` | Ethnicity | `text` |  |  |  |
| Patient | Contact | `patEmail` | Email | `text` |  |  |  |
| Patient | Contact | `patPhoneHome` | Phone (Home) | `text` |  |  |  |
| Patient | Contact | `patPhoneCell` | Phone (Cell) | `text` |  |  |  |
| Patient | Contact | `patAddressLine1` | Address Line 1 | `text` |  |  |  |
| Patient | Contact | `patAddressLine2` | Address Line 2 | `text` |  |  |  |
| Patient | Contact | `patCity` | City | `text` |  |  |  |
| Patient | Contact | `patState` | State | `text` |  |  |  |
| Patient | Contact | `patZipCode` | Zip Code | `text` |  |  |  |
| Patient | Clinical | `patMrn` | MRN | `text` |  |  |  |
| Patient | Clinical | `patPracticeId` | Practice ID | `text` |  |  |  |
| Patient | Clinical | `patStatus` | Status (active, inactive) | `text` |  |  |  |
| Patient | Clinical | `patSsnLastFour` | SSN Last 4 (encrypted) | `text` |  |  |  |

### Pharmacies — `erx_pharmacies_cf`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pharmacy Details | Pharmacy Information | `storeName` | Pharmacy Name | `text` |  |  |  |
| Pharmacy Details | Pharmacy Information | `pharmacyType` | Type | `text` |  |  |  |
| Pharmacy Details | Pharmacy Information | `ncpdpId` | NCPDP ID | `text` |  |  |  |
| Pharmacy Details | Pharmacy Information | `addressLine1` | Address | `text` |  |  |  |
| Pharmacy Details | Pharmacy Information | `city` | City | `text` |  |  |  |
| Pharmacy Details | Pharmacy Information | `state` | State | `text` |  |  |  |
| Pharmacy Details | Pharmacy Information | `postalCode` | ZIP | `text` |  |  |  |
| Pharmacy Details | Pharmacy Information | `phone` | Phone | `tel` |  |  |  |
| Pharmacy Details | Pharmacy Information | `isActive` | Active | `checkbox` |  |  |  |

### Pharmacist Consult (MTM) — `pharmacist_consult_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pharmacist MTM Consultation | Patient & Consultation | `patientId` | Patient | `typeahead` | Y |  |  |
| Pharmacist MTM Consultation | Patient & Consultation | `consultDate` | Consultation Date | `date` | Y |  |  |
| Pharmacist MTM Consultation | Patient & Consultation | `pharmacist` | Clinical Pharmacist | `typeahead` | Y |  |  |
| Pharmacist MTM Consultation | Patient & Consultation | `referringProvider` | Referring Provider | `typeahead` | Y |  |  |
| Pharmacist MTM Consultation | Patient & Consultation | `consultReason` | Reason for Consultation | `select` | Y |  |  |
| Pharmacist MTM Consultation | Comprehensive Medication Review | `medicationList` | Complete Medication List (reconciled) | `textarea` | Y |  |  |
| Pharmacist MTM Consultation | Comprehensive Medication Review | `drugProblems` | Drug Therapy Problems Identified | `textarea` | Y |  |  |
| Pharmacist MTM Consultation | Plan & Action Items | `recommendations` | Pharmacist Recommendations | `textarea` | Y |  |  |
| Pharmacist MTM Consultation | Plan & Action Items | `followUp` | Follow-up Plan | `select` | Y |  |  |

### Pharmacy / MTM Review — `clinical_pharmacy_review_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clinical Pharmacy / Medication Therapy Management | Patient & Review Type | `patientId` | Patient | `typeahead` | Y |  |  |
| Clinical Pharmacy / Medication Therapy Management | Patient & Review Type | `reviewDate` | Review Date | `date` | Y |  |  |
| Clinical Pharmacy / Medication Therapy Management | Patient & Review Type | `pharmacist` | Reviewing Pharmacist / Provider | `typeahead` | Y |  |  |
| Clinical Pharmacy / Medication Therapy Management | Patient & Review Type | `reviewType` | Review Type | `select` | Y |  |  |
| Clinical Pharmacy / Medication Therapy Management | Medication Review | `totalMedCount` | Total Medications Reviewed | `number` |  |  |  |
| Clinical Pharmacy / Medication Therapy Management | Medication Review | `problemsIdentified` | Drug Therapy Problems Identified | `textarea` | Y |  |  |
| Clinical Pharmacy / Medication Therapy Management | Medication Review | `interventions` | Pharmacist Interventions | `textarea` | Y |  |  |
| Clinical Pharmacy / Medication Therapy Management | Medication Review | `medicationChanges` | Medication Changes Made / Recommended | `textarea` | Y |  |  |
| Clinical Pharmacy / Medication Therapy Management | Follow-up | `providerCommunication` | Provider Communication | `textarea` |  |  |  |
| Clinical Pharmacy / Medication Therapy Management | Follow-up | `nextMtm` | Next MTM Review Scheduled | `date` |  |  |  |

### Phone Encounter — `phone_encounter_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Telephone Encounter Documentation | Call Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Telephone Encounter Documentation | Call Context | `callDate` | Call Date | `date` | Y |  |  |
| Telephone Encounter Documentation | Call Context | `callTime` | Call Time | `text` |  |  |  |
| Telephone Encounter Documentation | Call Context | `callDuration` | Call Duration (minutes) | `number` |  |  |  |
| Telephone Encounter Documentation | Call Context | `staffHandling` | Staff Handling Call | `typeahead` | Y |  |  |
| Telephone Encounter Documentation | Call Context | `callInitiator` | Call Initiated By | `select` | Y |  |  |
| Telephone Encounter Documentation | Call Context | `callerName` | Caller Name (if not patient) | `text` |  |  |  |
| Telephone Encounter Documentation | Reason & Documentation | `callCategory` | Call Category | `select` | Y |  |  |
| Telephone Encounter Documentation | Reason & Documentation | `chiefReason` | Chief Reason for Call | `textarea` | Y |  |  |
| Telephone Encounter Documentation | Reason & Documentation | `clinicalContent` | Clinical Content / Assessment | `textarea` | Y |  |  |
| Telephone Encounter Documentation | Action & Plan | `actionTaken` | Action Taken | `select` | Y |  |  |
| Telephone Encounter Documentation | Action & Plan | `adviceGiven` | Advice / Instructions Given | `textarea` |  |  |  |
| Telephone Encounter Documentation | Action & Plan | `prescriptionSent` | Prescription Sent (if any) | `textarea` |  |  |  |
| Telephone Encounter Documentation | Action & Plan | `providerNotified` | Provider notified of call | `checkbox` |  |  |  |
| Telephone Encounter Documentation | Action & Plan | `providerName` | Provider Notified | `text` |  |  |  |
| Telephone Encounter Documentation | Action & Plan | `followUpPlan` | Follow-Up Plan | `text` |  |  |  |

### Physical Exam — `encounter_physical_exam_cf`

Screen: 1 page(s) · 3 section(s) · 24 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Physical Examination | Encounter Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Physical Examination | Encounter Context | `encounterId` | Encounter ID | `text` | Y |  |  |
| Physical Examination | Encounter Context | `examDate` | Exam Date | `date` | Y |  |  |
| Physical Examination | Encounter Context | `examProvider` | Examining Provider | `typeahead` | Y |  |  |
| Physical Examination | Encounter Context | `visitType2` | Visit Type | `select` |  |  |  |
| Physical Examination | Vital Signs | `bpSys` | Systolic BP (mmHg) | `number` |  |  |  |
| Physical Examination | Vital Signs | `bpDia` | Diastolic BP (mmHg) | `number` |  |  |  |
| Physical Examination | Vital Signs | `hr` | Heart Rate (bpm) | `number` |  |  |  |
| Physical Examination | Vital Signs | `rr` | Respiratory Rate (/min) | `number` |  |  |  |
| Physical Examination | Vital Signs | `tempF` | Temperature (°F) | `number` |  |  |  |
| Physical Examination | Vital Signs | `o2Sat` | O2 Saturation (%) | `number` |  |  |  |
| Physical Examination | Vital Signs | `ht` | Height | `text` |  |  |  |
| Physical Examination | Vital Signs | `wt` | Weight (lbs) | `number` |  |  |  |
| Physical Examination | Vital Signs | `bmiCalc` | BMI | `number` |  |  |  |
| Physical Examination | Vital Signs | `painScore` | Pain Score | `select` |  |  |  |
| Physical Examination | Physical Examination Findings | `generalAppearance` | General Appearance | `textarea` |  |  |  |
| Physical Examination | Physical Examination Findings | `heentPe` | HEENT | `textarea` |  |  |  |
| Physical Examination | Physical Examination Findings | `cardiovascularPe` | Cardiovascular | `textarea` |  |  |  |
| Physical Examination | Physical Examination Findings | `respiratoryPe` | Respiratory / Lungs | `textarea` |  |  |  |
| Physical Examination | Physical Examination Findings | `abdominalPe` | Abdomen | `textarea` |  |  |  |
| Physical Examination | Physical Examination Findings | `extremitiesPe` | Extremities / Musculoskeletal | `textarea` |  |  |  |
| Physical Examination | Physical Examination Findings | `neurologicalPe` | Neurological | `textarea` |  |  |  |
| Physical Examination | Physical Examination Findings | `skinPe` | Skin | `textarea` |  |  |  |
| Physical Examination | Physical Examination Findings | `additionalSystemsPe` | Additional Systems / Focused Exam | `textarea` |  |  |  |

### Physical Therapy — `physical_therapy_cf`

Screen: 3 page(s) · 6 section(s) · 40 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Referral | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Referral | `therapyType` | Therapy Type | `select` | Y |  |  |
| Evaluation | Referral | `evaluationDate` | Evaluation Date | `date` |  |  |  |
| Evaluation | Referral | `referralDiagnosis` | Referral Diagnosis | `textarea` |  |  |  |
| Evaluation | Referral | `chiefComplaint` | Chief Complaint | `textarea` |  |  |  |
| Evaluation | Referral | `encounterId` | Encounter ID | `text` |  |  |  |
| Evaluation | Examination | `painLevel` | Pain Level (0-10) | `number` |  |  |  |
| Evaluation | Examination | `painLocation` | Pain Location | `text` |  |  |  |
| Evaluation | Examination | `functionalStatus` | Functional Status | `textarea` |  |  |  |
| Evaluation | Examination | `rangeOfMotion` | Range of Motion | `textarea` |  |  |  |
| Evaluation | Examination | `strengthTesting` | Strength Testing | `textarea` |  |  |  |
| Evaluation | Examination | `specialTests` | Special Tests | `textarea` |  |  |  |
| Evaluation | Examination | `postureAssessment` | Posture Assessment | `textarea` |  |  |  |
| Evaluation | Examination | `gaitAssessment` | Gait Assessment | `textarea` |  |  |  |
| Evaluation | Treatment Plan | `shortTermGoals` | Short-Term Goals | `textarea` |  |  |  |
| Evaluation | Treatment Plan | `longTermGoals` | Long-Term Goals | `textarea` |  |  |  |
| Evaluation | Treatment Plan | `prognosis` | Prognosis | `select` |  |  |  |
| Evaluation | Treatment Plan | `visitFrequency` | Visit Frequency | `text` |  |  |  |
| Evaluation | Treatment Plan | `estimatedDuration` | Estimated Duration | `text` |  |  |  |
| Evaluation | Treatment Plan | `status` | Status | `select` |  |  |  |
| Session Notes | Session | `sessionDate` | Session Date | `date` |  |  |  |
| Session Notes | Session | `sessionNum` | Session # | `number` |  |  |  |
| Session Notes | Session | `durationMinutes` | Duration (min) | `number` |  |  |  |
| Session Notes | Session | `attendance` | Attendance | `select` |  |  |  |
| Session Notes | Session | `painLevel` | Pain Level (0-10) | `number` |  |  |  |
| Session Notes | Session | `cptUnits` | CPT Units Billed | `number` |  |  |  |
| Session Notes | SOAP + Progress | `subjective` | Subjective | `textarea` |  |  |  |
| Session Notes | SOAP + Progress | `treatments` | Treatments Performed | `textarea` |  |  |  |
| Session Notes | SOAP + Progress | `responseToTx` | Response to Treatment | `textarea` |  |  |  |
| Session Notes | SOAP + Progress | `exercisesPerformed` | Exercises / HEP Performed | `textarea` |  |  |  |
| Session Notes | SOAP + Progress | `hepReviewed` | Home Exercise Program Reviewed | `checkbox` |  |  |  |
| Session Notes | SOAP + Progress | `progressTowardGoals` | Progress Toward Goals | `textarea` |  |  |  |
| Session Notes | SOAP + Progress | `plan` | Plan / Next Steps | `textarea` |  |  |  |
| Outcome Measures | Outcome Measure | `measureDate` | Date | `date` |  |  |  |
| Outcome Measures | Outcome Measure | `measureType` | Measure | `select` |  |  |  |
| Outcome Measures | Outcome Measure | `score` | Score | `number` |  |  |  |
| Outcome Measures | Outcome Measure | `maxScore` | Max Score | `number` |  |  |  |
| Outcome Measures | Outcome Measure | `interpretation` | Interpretation | `text` |  |  |  |
| Outcome Measures | Outcome Measure | `isInitial` | Initial Assessment | `checkbox` |  |  |  |
| Outcome Measures | Outcome Measure | `notes` | Notes | `textarea` |  |  |  |

### Post-Acute / SNF Visit — `post_acute_care_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Post-Acute Care / SNF Visit Note | Patient & Facility | `patientId` | Patient | `typeahead` | Y |  |  |
| Post-Acute Care / SNF Visit Note | Patient & Facility | `visitDate` | Visit Date | `date` | Y |  |  |
| Post-Acute Care / SNF Visit Note | Patient & Facility | `visitTime` | Visit Time | `text` |  |  |  |
| Post-Acute Care / SNF Visit Note | Patient & Facility | `provider` | Attending Provider | `typeahead` | Y |  |  |
| Post-Acute Care / SNF Visit Note | Patient & Facility | `facility` | Facility Name | `text` | Y |  |  |
| Post-Acute Care / SNF Visit Note | Patient & Facility | `admitDate` | SNF Admission Date | `date` | Y |  |  |
| Post-Acute Care / SNF Visit Note | Patient & Facility | `admitDiagnosis` | Admission Diagnosis | `text` | Y |  |  |
| Post-Acute Care / SNF Visit Note | Patient & Facility | `visitType` | Visit Type | `select` | Y |  |  |
| Post-Acute Care / SNF Visit Note | Current Clinical Status | `vitals` | Vitals (per nursing records) | `textarea` | Y |  |  |
| Post-Acute Care / SNF Visit Note | Current Clinical Status | `interval` | Interval Update Since Last Visit | `textarea` | Y |  |  |
| Post-Acute Care / SNF Visit Note | Current Clinical Status | `therapyProgress` | Therapy Progress | `select` |  |  |  |
| Post-Acute Care / SNF Visit Note | Plan & Discharge | `medicationReview` | Medication Review / Changes | `textarea` | Y |  |  |
| Post-Acute Care / SNF Visit Note | Plan & Discharge | `dischargePlan` | Discharge Planning | `textarea` | Y |  |  |
| Post-Acute Care / SNF Visit Note | Plan & Discharge | `dischargeDisposition` | Discharge Disposition | `select` |  |  |  |

### Post-Hospital Follow-up — `post_hospital_cf`

Screen: 1 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Post-Hospital / TCM Follow-Up | Discharge Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Post-Hospital / TCM Follow-Up | Discharge Details | `followUpDate` | Follow-Up Visit Date | `date` | Y |  |  |
| Post-Hospital / TCM Follow-Up | Discharge Details | `dischargeDate` | Hospital Discharge Date | `date` | Y |  |  |
| Post-Hospital / TCM Follow-Up | Discharge Details | `facility` | Discharging Facility | `text` |  |  |  |
| Post-Hospital / TCM Follow-Up | Discharge Details | `admissionReason` | Admission Diagnosis / Reason | `textarea` | Y |  |  |
| Post-Hospital / TCM Follow-Up | Discharge Details | `dischargeDiagnosis` | Discharge Diagnosis | `textarea` |  |  |  |
| Post-Hospital / TCM Follow-Up | Discharge Details | `tcmType` | TCM Type | `select` |  |  |  |
| Post-Hospital / TCM Follow-Up | Medication Reconciliation | `medReconciled` | Medication reconciliation completed | `checkbox` | Y |  |  |
| Post-Hospital / TCM Follow-Up | Medication Reconciliation | `newMedications` | New Medications Started at Hospital | `textarea` |  |  |  |
| Post-Hospital / TCM Follow-Up | Medication Reconciliation | `stoppedMedications` | Medications Stopped at Hospital | `textarea` |  |  |  |
| Post-Hospital / TCM Follow-Up | Medication Reconciliation | `changedMedications` | Medication Changes | `textarea` |  |  |  |
| Post-Hospital / TCM Follow-Up | Medication Reconciliation | `highRiskMeds` | High-risk medications reviewed (anticoagulants, insulin, etc.) | `checkbox` |  |  |  |
| Post-Hospital / TCM Follow-Up | Follow-Up Plan | `currentStatus` | Patient Status | `select` |  |  |  |
| Post-Hospital / TCM Follow-Up | Follow-Up Plan | `pendingResults` | Pending Results / Studies | `textarea` |  |  |  |
| Post-Hospital / TCM Follow-Up | Follow-Up Plan | `newProblems` | New Problems Identified | `textarea` |  |  |  |
| Post-Hospital / TCM Follow-Up | Follow-Up Plan | `specialistFollowUp` | Specialist Follow-Up | `textarea` |  |  |  |
| Post-Hospital / TCM Follow-Up | Follow-Up Plan | `functionalStatus` | Functional Status Post-Discharge | `select` |  |  |  |
| Post-Hospital / TCM Follow-Up | Follow-Up Plan | `readmissionRisk` | Readmission Risk | `select` |  |  |  |
| Post-Hospital / TCM Follow-Up | Follow-Up Plan | `postHospitalNotes` | Clinical Notes | `textarea` |  |  |  |

### Post-Op Follow-Up — `postop_followup_cf`

Screen: 1 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Post-Operative Visit Note | Patient & Procedure | `patientId` | Patient | `typeahead` | Y |  |  |
| Post-Operative Visit Note | Patient & Procedure | `encounterId` | Encounter ID | `text` |  |  |  |
| Post-Operative Visit Note | Patient & Procedure | `procedurePerformed` | Procedure Performed | `text` | Y |  |  |
| Post-Operative Visit Note | Patient & Procedure | `surgeryDate` | Surgery Date | `date` | Y |  |  |
| Post-Operative Visit Note | Patient & Procedure | `daysSurgery` | Days Post-Op | `number` |  |  |  |
| Post-Operative Visit Note | Patient & Procedure | `surgeonName` | Surgeon / Operating Provider | `text` |  |  |  |
| Post-Operative Visit Note | Patient & Procedure | `facility` | Surgical Facility | `text` |  |  |  |
| Post-Operative Visit Note | Post-Op Assessment | `incisionStatus` | Incision/Wound Status | `select` |  |  |  |
| Post-Operative Visit Note | Post-Op Assessment | `drainOutput` | Drain Output (if applicable) | `text` |  |  |  |
| Post-Operative Visit Note | Post-Op Assessment | `painLevel` | Pain Level (0-10) | `select` |  |  |  |
| Post-Operative Visit Note | Post-Op Assessment | `painControl` | Pain Control Adequacy | `select` |  |  |  |
| Post-Operative Visit Note | Post-Op Assessment | `activityLevel` | Activity Level | `select` |  |  |  |
| Post-Operative Visit Note | Post-Op Assessment | `dietTolerance` | Diet Tolerance | `select` |  |  |  |
| Post-Operative Visit Note | Post-Op Assessment | `complications` | Complications / Concerns | `textarea` |  |  |  |
| Post-Operative Visit Note | Post-Op Plan | `medicationChanges` | Medication Changes | `textarea` |  |  |  |
| Post-Operative Visit Note | Post-Op Plan | `physicalTherapy` | Physical therapy referral placed | `checkbox` |  |  |  |
| Post-Operative Visit Note | Post-Op Plan | `ptProtocol` | PT Protocol | `text` |  |  |  |
| Post-Operative Visit Note | Post-Op Plan | `nextAppt` | Next Follow-Up Interval | `select` |  |  |  |
| Post-Operative Visit Note | Post-Op Plan | `surgeryClearance` | Surgical Episode Status | `select` |  |  |  |

### Pre-Employment Exam — `pre_employment_exam_cf`

Screen: 1 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pre-Employment / Occupational Health Exam | Patient & Employer | `patientId` | Patient | `typeahead` | Y |  |  |
| Pre-Employment / Occupational Health Exam | Patient & Employer | `examDate` | Exam Date | `date` | Y |  |  |
| Pre-Employment / Occupational Health Exam | Patient & Employer | `provider` | Provider | `typeahead` | Y |  |  |
| Pre-Employment / Occupational Health Exam | Patient & Employer | `employer2` | Employer / Company | `text` | Y |  |  |
| Pre-Employment / Occupational Health Exam | Patient & Employer | `jobTitle` | Job Title / Position | `text` | Y |  |  |
| Pre-Employment / Occupational Health Exam | Patient & Employer | `examType` | Exam Type | `select` | Y |  |  |
| Pre-Employment / Occupational Health Exam | Physical Examination | `heightIn` | Height (inches) | `number` |  |  |  |
| Pre-Employment / Occupational Health Exam | Physical Examination | `weightLbs` | Weight (lbs) | `number` |  |  |  |
| Pre-Employment / Occupational Health Exam | Physical Examination | `bpExam` | Blood Pressure | `text` |  |  |  |
| Pre-Employment / Occupational Health Exam | Physical Examination | `pulseExam` | Pulse | `number` |  |  |  |
| Pre-Employment / Occupational Health Exam | Physical Examination | `visionRight` | Visual Acuity — Right Eye | `text` |  |  |  |
| Pre-Employment / Occupational Health Exam | Physical Examination | `visionLeft` | Visual Acuity — Left Eye | `text` |  |  |  |
| Pre-Employment / Occupational Health Exam | Physical Examination | `hearingExam` | Hearing Screening | `select` |  |  |  |
| Pre-Employment / Occupational Health Exam | Physical Examination | `lifting` | Lift Capacity Test | `select` |  |  |  |
| Pre-Employment / Occupational Health Exam | Physical Examination | `generalExam` | General Physical Exam Findings | `textarea` |  |  |  |
| Pre-Employment / Occupational Health Exam | Occupational Determination | `determination` | Medical Determination | `select` | Y |  |  |
| Pre-Employment / Occupational Health Exam | Occupational Determination | `restrictions` | Restrictions / Limitations (if applicable) | `textarea` |  |  |  |
| Pre-Employment / Occupational Health Exam | Occupational Determination | `certificationExpiration` | Certification Expiration (if applicable, e.g., DOT 2-year) | `date` |  |  |  |
| Pre-Employment / Occupational Health Exam | Occupational Determination | `additionalWorkup` | Additional Workup Ordered | `textarea` |  |  |  |

### Pre-Op Assessment — `preop_assessment_cf`

Screen: 1 page(s) · 4 section(s) · 31 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pre-Operative Medical Assessment & Clearance | Patient & Procedure | `patientId` | Patient | `typeahead` | Y |  |  |
| Pre-Operative Medical Assessment & Clearance | Patient & Procedure | `encounterId` | Encounter ID | `text` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Patient & Procedure | `procedure` | Planned Procedure | `text` | Y |  |  |
| Pre-Operative Medical Assessment & Clearance | Patient & Procedure | `surgeonName` | Surgeon / Requesting Provider | `text` | Y |  |  |
| Pre-Operative Medical Assessment & Clearance | Patient & Procedure | `plannedSurgeryDate` | Planned Surgery Date | `date` | Y |  |  |
| Pre-Operative Medical Assessment & Clearance | Patient & Procedure | `anesthesiaType` | Planned Anesthesia | `select` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Medical History Review | `cvRisk` | Cardiac Risk (RCRI) | `select` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Medical History Review | `recentMI` | MI within last 12 months | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Medical History Review | `chf` | Active CHF | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Medical History Review | `significantDm` | Insulin-dependent diabetes | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Medical History Review | `ckd` | Chronic kidney disease (Cr > 2.0) | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Medical History Review | `cvAccident` | History of CVA / TIA | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Medical History Review | `anticoagulants` | On anticoagulants (warfarin, DOAC, heparin) | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Medical History Review | `anticoagulantMed` | Anticoagulant Medication | `text` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Medical History Review | `anticoagulantPlan` | Anticoagulation Bridge Plan | `textarea` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Medical History Review | `antiplatelet` | On antiplatelet (aspirin, Plavix, Brilinta) | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Medical History Review | `pertinentMeds` | Other Pertinent Medications to Address | `textarea` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Pre-Op Testing | `cbcOrdered` | CBC ordered/reviewed | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Pre-Op Testing | `bmpOrdered` | BMP / CMP ordered/reviewed | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Pre-Op Testing | `coagStudies` | Coagulation studies (PT/INR, PTT) ordered/reviewed | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Pre-Op Testing | `typeAndScreen` | Type & screen ordered | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Pre-Op Testing | `ekg` | EKG ordered/reviewed | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Pre-Op Testing | `chestXray` | Chest X-ray ordered/reviewed | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Pre-Op Testing | `echoOrdered` | Echocardiogram ordered/reviewed | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Pre-Op Testing | `stressTest` | Stress test / cardiac clearance ordered/reviewed | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Pre-Op Testing | `hba1cPreop` | HbA1c (diabetics) | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Pre-Op Testing | `uaPreop` | Urinalysis | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Pre-Op Testing | `urinePregTest` | Urine pregnancy test (females of childbearing age) | `checkbox` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Clearance | `clearanceStatus` | Medical Clearance Status | `select` | Y |  |  |
| Pre-Operative Medical Assessment & Clearance | Clearance | `clearanceConditions` | Conditions / Restrictions | `textarea` |  |  |  |
| Pre-Operative Medical Assessment & Clearance | Clearance | `asaClass` | ASA Physical Status Class | `select` |  |  |  |

### Prenatal Visit — `prenatal_visit_cf`

Screen: 1 page(s) · 5 section(s) · 30 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Obstetric Prenatal Visit | Patient & Pregnancy | `patientId` | Patient | `typeahead` | Y |  |  |
| Obstetric Prenatal Visit | Patient & Pregnancy | `encounterId` | Encounter ID | `text` |  |  |  |
| Obstetric Prenatal Visit | Patient & Pregnancy | `visitDate` | Visit Date | `date` | Y |  |  |
| Obstetric Prenatal Visit | Patient & Pregnancy | `lmp` | Last Menstrual Period (LMP) | `date` |  |  |  |
| Obstetric Prenatal Visit | Patient & Pregnancy | `edd` | Estimated Due Date (EDD) | `date` |  |  |  |
| Obstetric Prenatal Visit | Patient & Pregnancy | `gestationalAge` | Gestational Age | `text` |  |  |  |
| Obstetric Prenatal Visit | Patient & Pregnancy | `gravida` | Gravida | `number` |  |  |  |
| Obstetric Prenatal Visit | Patient & Pregnancy | `para` | Para (T-P-A-L) | `text` |  |  |  |
| Obstetric Prenatal Visit | Vitals & Measurements | `obWeight` | Weight (lbs) | `number` |  |  |  |
| Obstetric Prenatal Visit | Vitals & Measurements | `weightGainTotal` | Total Weight Gain (lbs from pre-pregnancy) | `number` |  |  |  |
| Obstetric Prenatal Visit | Vitals & Measurements | `obBp` | Blood Pressure | `text` |  |  |  |
| Obstetric Prenatal Visit | Vitals & Measurements | `obPulse` | Pulse | `number` |  |  |  |
| Obstetric Prenatal Visit | Vitals & Measurements | `fhr` | Fetal Heart Rate (bpm) | `number` |  |  |  |
| Obstetric Prenatal Visit | Vitals & Measurements | `fundusHeight` | Fundal Height (cm) | `number` |  |  |  |
| Obstetric Prenatal Visit | Vitals & Measurements | `fetalPresentation` | Fetal Presentation (if applicable) | `select` |  |  |  |
| Obstetric Prenatal Visit | Vitals & Measurements | `edema` | Edema | `select` |  |  |  |
| Obstetric Prenatal Visit | Labs / Testing This Visit | `urineProtein` | Urine Protein (dipstick) | `select` |  |  |  |
| Obstetric Prenatal Visit | Labs / Testing This Visit | `urineSugar` | Urine Glucose (dipstick) | `select` |  |  |  |
| Obstetric Prenatal Visit | Labs / Testing This Visit | `glucoseToleranceTest` | Glucose Tolerance Test (24-28 weeks) | `select` |  |  |  |
| Obstetric Prenatal Visit | Labs / Testing This Visit | `groupBStrep` | Group B Strep (35-37 weeks) | `select` |  |  |  |
| Obstetric Prenatal Visit | Symptoms & Concerns | `fetalMovement` | Fetal Movement (after 20 weeks) | `select` |  |  |  |
| Obstetric Prenatal Visit | Symptoms & Concerns | `contractions` | Contractions | `select` |  |  |  |
| Obstetric Prenatal Visit | Symptoms & Concerns | `bleedingSpotting` | Vaginal Bleeding / Spotting | `select` |  |  |  |
| Obstetric Prenatal Visit | Symptoms & Concerns | `preeclampsiaSymptoms` | Preeclampsia symptoms: headache, vision changes, RUQ pain, sudden swelling | `checkbox` |  |  |  |
| Obstetric Prenatal Visit | Symptoms & Concerns | `patientConcerns` | Patient Concerns | `textarea` |  |  |  |
| Obstetric Prenatal Visit | Plan | `nextVisitWeeks` | Next Visit Interval | `select` |  |  |  |
| Obstetric Prenatal Visit | Plan | `nextVisitDate` | Next Visit Date | `date` |  |  |  |
| Obstetric Prenatal Visit | Plan | `ultrasoundOrdered` | Ultrasound ordered | `checkbox` |  |  |  |
| Obstetric Prenatal Visit | Plan | `ultrasoundType` | Ultrasound Type | `text` |  |  |  |
| Obstetric Prenatal Visit | Plan | `laborAndDeliveryUnit` | Planned L&D Facility | `text` |  |  |  |

### Prescriptions — `erx_prescriptions_cf`

Screen: 1 page(s) · 9 section(s) · 59 field(s) · UI LIVE · DB BUILT · tables `ERX_AUDIT_EVENTS`, `ERX_MESSAGES`, `ERX_PHARMACIES`, `ERX_PRESCRIPTIONS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_MEDICATIONS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prescription | Prescription Details | `medicationName` | Medication | `text` |  |  |  |
| Prescription | Prescription Details | `dosage` | Dosage / Sig | `text` |  |  |  |
| Prescription | Prescription Details | `quantity` | Quantity | `number` |  |  |  |
| Prescription | Prescription Details | `refills` | Refills | `number` |  |  |  |
| Prescription | Prescription Details | `daysSupply` | Days Supply | `number` |  |  |  |
| Prescription | Prescription Details | `status` | Transmission Status | `select` |  |  |  |
| Prescription | Prescription Details | `prescribedAt` | Prescribed Date | `text` |  |  |  |
| Prescription | Prescription Details | `pharmacyName` | Pharmacy | `text` |  |  |  |
| Prescription | Prescriber Notes | `prescribingProviderName` | Prescriber | `text` |  |  |  |
| Prescription | Prescriber Notes | `notes` | Notes | `textarea` |  |  |  |
| Prescription | Prescriber Notes | `icd10Codes` | Diagnoses (ICD-10) | `text` |  |  |  |
| Prescription | Structured Sig (Directions) | `sigDose` | Dose | `text` |  |  |  |
| Prescription | Structured Sig (Directions) | `sigRoute` | Route | `select` |  |  |  |
| Prescription | Structured Sig (Directions) | `sigFrequency` | Frequency | `select` |  |  |  |
| Prescription | Structured Sig (Directions) | `sigDosageForm` | Dosage Form | `select` |  |  |  |
| Prescription | Structured Sig (Directions) | `sigTiming` | Timing / Instructions | `text` |  |  |  |
| Prescription | Structured Sig (Directions) | `sigDuration` | Duration | `text` |  |  |  |
| Prescription | Structured Sig (Directions) | `sigMaxDailyDose` | Max Daily Dose | `text` |  |  |  |
| Prescription | Structured Sig (Directions) | `sigAdditionalInstructions` | Additional Instructions | `textarea` |  |  |  |
| Prescription | Split Fill / Reconciliation | `splitFill` | Split Fill | `checkbox` |  |  |  |
| Prescription | Split Fill / Reconciliation | `splitFillQuantity1` | Split Fill — First Qty | `number` |  |  |  |
| Prescription | Split Fill / Reconciliation | `splitFillQuantity2` | Split Fill — Second Qty | `number` |  |  |  |
| Prescription | Split Fill / Reconciliation | `reconciliationStatus` | Reconciliation Status | `select` |  |  |  |
| Prescription | Split Fill / Reconciliation | `pharmacyNotes` | Pharmacy Notes | `textarea` |  |  |  |
| Prescription | Split Fill / Reconciliation | `prescribingNotes` | Prescribing Notes (internal) | `textarea` |  |  |  |
| Prescription | Rx Benefit & Eligibility (ECW-RX-1) | `benefitCheckStatus` | Benefit Check Status | `select` |  |  |  |
| Prescription | Rx Benefit & Eligibility (ECW-RX-1) | `benefitTier` | Formulary Tier | `select` |  |  |  |
| Prescription | Rx Benefit & Eligibility (ECW-RX-1) | `estimatedCopay` | Estimated Copay ($) | `number` |  |  |  |
| Prescription | Rx Benefit & Eligibility (ECW-RX-1) | `estimatedRetailCost` | Retail Cash Price ($) | `number` |  |  |  |
| Prescription | Rx Benefit & Eligibility (ECW-RX-1) | `alternativeOptions` | Alternative / Lower-Cost Options | `textarea` |  |  |  |
| Prescription | Rx Benefit & Eligibility (ECW-RX-1) | `patientEducationSent` | Patient Education Sent | `checkbox` |  |  |  |
| Prescription | Rx Benefit & Eligibility (ECW-RX-1) | `educationChannel` | Education Channel | `select` |  |  |  |
| Prescription | Coverage & Cost Surfaces (ECW-RX-6) | `coverageEffectiveDate` | Coverage Effective | `date` |  |  |  |
| Prescription | Coverage & Cost Surfaces (ECW-RX-6) | `coverageTermDate` | Coverage Term | `date` |  |  |  |
| Prescription | Coverage & Cost Surfaces (ECW-RX-6) | `insuranceCoveredAmount` | Insurance Covers ($) | `number` |  |  |  |
| Prescription | Coverage & Cost Surfaces (ECW-RX-6) | `patientResponsibility` | Patient Responsibility ($) | `number` |  |  |  |
| Prescription | Coverage & Cost Surfaces (ECW-RX-6) | `annualDeductibleMet` | Annual Deductible Met | `checkbox` |  |  |  |
| Prescription | Coverage & Cost Surfaces (ECW-RX-6) | `goodRxCode` | GoodRx / Coupon Code | `text` |  |  |  |
| Prescription | Coverage & Cost Surfaces (ECW-RX-6) | `rxCostNote` | Cost Note | `textarea` |  |  |  |
| Prescription | Rx Event Tracking (ECW-RX-8) | `refillRequestCount` | Open Refill Requests | `number` |  |  |  |
| Prescription | Rx Event Tracking (ECW-RX-8) | `changeRequestCount` | Change Requests Pending | `number` |  |  |  |
| Prescription | Rx Event Tracking (ECW-RX-8) | `cancelAckStatus` | Cancel Ack Status | `select` |  |  |  |
| Prescription | Rx Event Tracking (ECW-RX-8) | `transmissionErrorCount` | Transmission Errors | `number` |  |  |  |
| Prescription | Rx Event Tracking (ECW-RX-8) | `fillNotificationStatus` | Fill Notification | `select` |  |  |  |
| Prescription | Rx Event Tracking (ECW-RX-8) | `rxEventNote` | Event Notes | `textarea` |  |  |  |
| Prescription | Transmission & Pharmacy Directory (ECW-RX-9) | `transmissionMode` | Transmission Mode | `select` |  |  |  |
| Prescription | Transmission & Pharmacy Directory (ECW-RX-9) | `ePrescribeCredentialId` | ePrescribe Credential / NPI | `text` |  |  |  |
| Prescription | Transmission & Pharmacy Directory (ECW-RX-9) | `primaryPharmacy` | Primary Pharmacy | `text` |  |  |  |
| Prescription | Transmission & Pharmacy Directory (ECW-RX-9) | `primaryPharmacyNcpdp` | Primary NCPDP | `text` |  |  |  |
| Prescription | Transmission & Pharmacy Directory (ECW-RX-9) | `alternatePharmacy` | Alternate Pharmacy | `text` |  |  |  |
| Prescription | Transmission & Pharmacy Directory (ECW-RX-9) | `alternatePharmacyNcpdp` | Alternate NCPDP | `text` |  |  |  |
| Prescription | Transmission & Pharmacy Directory (ECW-RX-9) | `pharmacyPreferenceNote` | Pharmacy Preference Note | `textarea` |  |  |  |
| Prescription | Drug Interaction Check & Override Audit (ECW-CL-20) | `ddInteractionStatus` | Drug-Drug Check Status | `select` |  |  |  |
| Prescription | Drug Interaction Check & Override Audit (ECW-CL-20) | `ddInteractionDetail` | Drug-Drug Interaction Detail | `textarea` |  |  |  |
| Prescription | Drug Interaction Check & Override Audit (ECW-CL-20) | `daInteractionStatus` | Drug-Allergy Check Status | `select` |  |  |  |
| Prescription | Drug Interaction Check & Override Audit (ECW-CL-20) | `daInteractionDetail` | Drug-Allergy Interaction Detail | `textarea` |  |  |  |
| Prescription | Drug Interaction Check & Override Audit (ECW-CL-20) | `interactionOverrideBy` | Override Performed By | `text` |  |  |  |
| Prescription | Drug Interaction Check & Override Audit (ECW-CL-20) | `interactionOverrideReason` | Override Clinical Reason | `textarea` |  |  |  |
| Prescription | Drug Interaction Check & Override Audit (ECW-CL-20) | `interactionOverrideDate` | Override Date/Time | `text` |  |  |  |

### Preventive Care — `preventive_care_cf`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Preventive Screening | Screening Info | `screeningType` | Screening Type | `select` | Y |  |  |
| Preventive Screening | Screening Info | `status` | Status | `select` |  |  |  |
| Preventive Screening | Screening Info | `performedDate` | Date Performed | `date` |  |  |  |
| Preventive Screening | Screening Info | `dueDate` | Due Date | `date` |  |  |  |
| Preventive Screening | Screening Info | `nextDueDate` | Next Due Date | `date` |  |  |  |
| Preventive Screening | Screening Info | `location` | Location / Facility | `text` |  |  |  |
| Preventive Screening | Screening Info | `orderingProvider` | Ordering Provider | `text` |  |  |  |
| Preventive Screening | Screening Info | `result` | Result / Findings | `text` |  |  |  |
| Preventive Screening | Screening Info | `notes` | Notes | `textarea` |  |  |  |
