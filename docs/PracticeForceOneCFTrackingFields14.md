---
title: "PracticeForceOneCFTrackingFields14"
---

# CF Tracking — Field-Level Detail (part 14 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Clinical**, **Admin**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Clinical

### Vitals History — `patient_vitals_history_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `ENCOUNTERS`, `ENCOUNTER_VITALS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Vitals Detail | Blood Pressure & Pulse | `bpSystolic` | BP Systolic (mmHg) | `number` |  |  |  |
| Vitals Detail | Blood Pressure & Pulse | `bpDiastolic` | BP Diastolic (mmHg) | `number` |  |  |  |
| Vitals Detail | Blood Pressure & Pulse | `bpPosition` | Position | `text` |  |  |  |
| Vitals Detail | Blood Pressure & Pulse | `pulse` | Pulse (bpm) | `number` |  |  |  |
| Vitals Detail | Blood Pressure & Pulse | `pulseRhythm` | Rhythm | `text` |  |  |  |
| Vitals Detail | Blood Pressure & Pulse | `respRate` | Resp Rate | `number` |  |  |  |
| Vitals Detail | Anthropometrics | `heightIn` | Height (in) | `number` |  |  |  |
| Vitals Detail | Anthropometrics | `weightLbs` | Weight (lbs) | `number` |  |  |  |
| Vitals Detail | Anthropometrics | `bmi` | BMI | `number` |  |  |  |
| Vitals Detail | Anthropometrics | `waistCm` | Waist (cm) | `number` |  |  |  |
| Vitals Detail | Anthropometrics | `headCircumferenceCm` | Head Circ. (cm) | `number` |  |  |  |
| Vitals Detail | Other Signs | `temperature` | Temperature (�F) | `number` |  |  |  |
| Vitals Detail | Other Signs | `tempRoute` | Route | `text` |  |  |  |
| Vitals Detail | Other Signs | `spo2` | SpO2 (%) | `number` |  |  |  |
| Vitals Detail | Other Signs | `painScore` | Pain Score (0-10) | `number` |  |  |  |
| Vitals Detail | Other Signs | `smokingStatus` | Smoking Status | `text` |  |  |  |
| Vitals Detail | Other Signs | `recordedAt` | Recorded At | `text` |  |  |  |

### Weight Management — `weight_management_cf`

Screen: 1 page(s) · 4 section(s) · 25 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Weight Management / Obesity Treatment Note | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Weight Management / Obesity Treatment Note | Patient & Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Weight Management / Obesity Treatment Note | Patient & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| Weight Management / Obesity Treatment Note | Patient & Visit | `provider` | Provider | `typeahead` | Y |  |  |
| Weight Management / Obesity Treatment Note | Patient & Visit | `visitNumber` | Visit Number in Program | `select` |  |  |  |
| Weight Management / Obesity Treatment Note | Anthropometrics | `currentWeight` | Current Weight (lbs) | `number` | Y |  |  |
| Weight Management / Obesity Treatment Note | Anthropometrics | `startWeight` | Starting Weight (lbs) | `number` |  |  |  |
| Weight Management / Obesity Treatment Note | Anthropometrics | `weightChange` | Weight Change Since Last Visit (lbs) | `number` |  |  |  |
| Weight Management / Obesity Treatment Note | Anthropometrics | `bmi2` | BMI | `number` | Y |  |  |
| Weight Management / Obesity Treatment Note | Anthropometrics | `bmiCategory` | BMI Category | `select` |  |  |  |
| Weight Management / Obesity Treatment Note | Anthropometrics | `waistCirc2` | Waist Circumference (inches) | `number` |  |  |  |
| Weight Management / Obesity Treatment Note | Anthropometrics | `weightLossGoalLbs` | Total Weight Loss Goal (lbs) | `number` |  |  |  |
| Weight Management / Obesity Treatment Note | Anthropometrics | `weightLossPct` | % of Initial Weight Lost to Date (%) | `number` |  |  |  |
| Weight Management / Obesity Treatment Note | Treatment Plan | `dietPlan` | Diet Intervention | `select` |  |  |  |
| Weight Management / Obesity Treatment Note | Treatment Plan | `exercisePlan` | Physical Activity Plan | `select` |  |  |  |
| Weight Management / Obesity Treatment Note | Treatment Plan | `behavioralSupport` | Behavioral Support | `select` |  |  |  |
| Weight Management / Obesity Treatment Note | Treatment Plan | `pharmacotherapy` | Pharmacotherapy | `select` |  |  |  |
| Weight Management / Obesity Treatment Note | Treatment Plan | `surgicalEval` | Bariatric Surgery | `select` |  |  |  |
| Weight Management / Obesity Treatment Note | Related Comorbidities | `comorbidDm` | Type 2 Diabetes / prediabetes — impact of weight loss on glycemic control discussed | `checkbox` |  |  |  |
| Weight Management / Obesity Treatment Note | Related Comorbidities | `comorbidHtn` | Hypertension — antihypertensive adjustment anticipated with weight loss | `checkbox` |  |  |  |
| Weight Management / Obesity Treatment Note | Related Comorbidities | `comorbidHld` | Hyperlipidemia — lipid improvement expected with weight loss | `checkbox` |  |  |  |
| Weight Management / Obesity Treatment Note | Related Comorbidities | `comorbidOsa` | Sleep apnea — CPAP may be discontinued with ≥10% weight loss | `checkbox` |  |  |  |
| Weight Management / Obesity Treatment Note | Related Comorbidities | `comorbidOaJoint` | Osteoarthritis — weight loss goal for joint unloading benefit | `checkbox` |  |  |  |
| Weight Management / Obesity Treatment Note | Related Comorbidities | `comorbidNafld` | NAFLD / fatty liver — liver function and imaging monitoring planned | `checkbox` |  |  |  |
| Weight Management / Obesity Treatment Note | Related Comorbidities | `comorb iditiesNotes` | Notes on Comorbidity Management | `textarea` |  |  |  |

### Women's Health — `womens_health_cf`

Screen: 1 page(s) · 3 section(s) · 25 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Women's Health / OB-GYN History | Gynecological History | `patientId` | Patient | `typeahead` | Y |  |  |
| Women's Health / OB-GYN History | Gynecological History | `assessmentDate` | Assessment Date | `date` | Y |  |  |
| Women's Health / OB-GYN History | Gynecological History | `lmp` | Last Menstrual Period (LMP) | `date` |  |  |  |
| Women's Health / OB-GYN History | Gynecological History | `cycleRegularity` | Menstrual Cycle | `select` |  |  |  |
| Women's Health / OB-GYN History | Gynecological History | `cycleLength` | Cycle Length (days) | `number` |  |  |  |
| Women's Health / OB-GYN History | Gynecological History | `periodDuration` | Period Duration (days) | `number` |  |  |  |
| Women's Health / OB-GYN History | Gynecological History | `dysmenorrhea` | Dysmenorrhea (painful periods) | `select` |  |  |  |
| Women's Health / OB-GYN History | Gynecological History | `lastPap` | Last Pap Smear / Cervical Cytology | `date` |  |  |  |
| Women's Health / OB-GYN History | Gynecological History | `papResult` | Last Pap Result | `select` |  |  |  |
| Women's Health / OB-GYN History | Gynecological History | `lastMammogram` | Last Mammogram | `date` |  |  |  |
| Women's Health / OB-GYN History | Gynecological History | `mammogramResult` | Mammogram Result | `select` |  |  |  |
| Women's Health / OB-GYN History | Obstetric History (G/P) | `gravida` | Gravida (total pregnancies) | `number` |  |  |  |
| Women's Health / OB-GYN History | Obstetric History (G/P) | `para` | Para (deliveries ≥20 weeks) | `number` |  |  |  |
| Women's Health / OB-GYN History | Obstetric History (G/P) | `termDeliveries` | Term deliveries (T) | `number` |  |  |  |
| Women's Health / OB-GYN History | Obstetric History (G/P) | `pretermDeliveries` | Preterm deliveries (P) | `number` |  |  |  |
| Women's Health / OB-GYN History | Obstetric History (G/P) | `abortions` | Abortions/miscarriages (A) | `number` |  |  |  |
| Women's Health / OB-GYN History | Obstetric History (G/P) | `livingChildren` | Living children (L) | `number` |  |  |  |
| Women's Health / OB-GYN History | Obstetric History (G/P) | `deliveryMethods` | Prior Delivery Methods | `select` |  |  |  |
| Women's Health / OB-GYN History | Obstetric History (G/P) | `pregnancyComplications` | Pregnancy Complications | `textarea` |  |  |  |
| Women's Health / OB-GYN History | Obstetric History (G/P) | `currentPregnancy` | Currently pregnant | `checkbox` |  |  |  |
| Women's Health / OB-GYN History | Obstetric History (G/P) | `edd` | Estimated Due Date (if pregnant) | `date` |  |  |  |
| Women's Health / OB-GYN History | Contraception & Reproductive | `contraceptionMethod` | Current Contraception | `select` |  |  |  |
| Women's Health / OB-GYN History | Contraception & Reproductive | `menopauseAge` | Age at Menopause | `number` |  |  |  |
| Women's Health / OB-GYN History | Contraception & Reproductive | `hrtUse` | Hormone Replacement Therapy (HRT) | `select` |  |  |  |
| Women's Health / OB-GYN History | Contraception & Reproductive | `obgynNotes` | Women's Health Notes | `textarea` |  |  |  |

### Women's Health Annual — `womens_health_annual_cf`

Screen: 1 page(s) · 4 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Women's Health Annual Exam | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Women's Health Annual Exam | Patient | `examDate` | Exam Date | `date` | Y |  |  |
| Women's Health Annual Exam | Patient | `provider` | Provider | `typeahead` | Y |  |  |
| Women's Health Annual Exam | Patient | `age` | Age | `number` |  |  |  |
| Women's Health Annual Exam | Patient | `reproductiveStatus` | Reproductive Status | `select` | Y |  |  |
| Women's Health Annual Exam | Gynecologic History | `lmp` | Last Menstrual Period (LMP) | `date` |  |  |  |
| Women's Health Annual Exam | Gynecologic History | `cycleRegularity` | Cycle Regularity | `select` |  |  |  |
| Women's Health Annual Exam | Gynecologic History | `contraception` | Contraception / Family Planning | `select` |  |  |  |
| Women's Health Annual Exam | Gynecologic History | `obsHistory` | OB History (G/P/A) | `textarea` |  |  |  |
| Women's Health Annual Exam | Gynecologic History | `gynSurgeries` | Prior Gynecologic Surgeries | `textarea` |  |  |  |
| Women's Health Annual Exam | Screening Status | `papSmear` | Pap Smear | `select` | Y |  |  |
| Women's Health Annual Exam | Screening Status | `papInterval` | Pap Interval | `select` |  |  |  |
| Women's Health Annual Exam | Screening Status | `lastPapDate` | Last Pap Smear Date | `date` |  |  |  |
| Women's Health Annual Exam | Screening Status | `mammogram` | Mammography | `select` |  |  |  |
| Women's Health Annual Exam | Screening Status | `lastMammoDate` | Last Mammogram Date | `date` |  |  |  |
| Women's Health Annual Exam | Screening Status | `boneHealth` | Bone Density (DEXA) | `select` |  |  |  |
| Women's Health Annual Exam | Menopause / Hormonal Concerns | `menopauseSymptoms` | Menopause / Hormonal Symptoms | `textarea` |  |  |  |
| Women's Health Annual Exam | Menopause / Hormonal Concerns | `hrtDiscussed` | HRT / hormonal therapy discussed today | `checkbox` |  |  |  |
| Women's Health Annual Exam | Menopause / Hormonal Concerns | `hrtPlan` | HRT / Management Plan | `textarea` |  |  |  |

### Workflow Board — `workflow_board_cf`

Screen: 1 page(s) · 2 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `CHARGE_REVIEW_QUEUE`, `CLAIMS`, `CLINICAL_TASKS`, `DENIALS`, `ENCOUNTERS`, `PORTAL_PATIENT_ESTABLISHMENT_REQUESTS`, `PORTAL_USERS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Work Item | Work Item | `entityType` | Entity Type | `select` |  |  |  |
| Work Item | Work Item | `lane` | Lane | `text` |  |  |  |
| Work Item | Work Item | `subLane` | Sub-Lane | `text` |  |  |  |
| Work Item | Work Item | `patientName` | Patient | `text` |  |  |  |
| Work Item | Work Item | `status` | Status | `text` |  |  |  |
| Work Item | Work Item | `priority` | Priority | `select` |  |  |  |
| Work Item | Work Item | `reason` | Reason for Lane | `text` |  |  |  |
| Work Item | References | `claimNumber` | Claim Number | `text` |  |  |  |
| Work Item | References | `claimId` | Claim ID | `text` |  |  |  |
| Work Item | References | `balance` | Balance | `number` |  |  |  |
| Work Item | References | `daysInAr` | Days in A/R | `number` |  |  |  |
| Work Item | References | `appointmentDate` | Appointment Date | `date` |  |  |  |
| Work Item | References | `encounterId` | Encounter ID | `text` |  |  |  |
| Work Item | References | `createdAt` | Created At | `date` |  |  |  |

## Admin

### AI Feature Flags — `admin_ai_flags_cf`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| AI Feature Flag | Flag | `flagName` | Flag Name | `text` |  |  |  |
| AI Feature Flag | Flag | `description` | Description | `textarea` |  |  |  |
| AI Feature Flag | Flag | `category` | Category | `text` |  |  |  |
| AI Feature Flag | Flag | `effectiveEnabled` | Effective State (read-only) | `checkbox` |  |  |  |
| AI Feature Flag | Flag | `effectiveSource` | Effective Source | `text` |  |  |  |
| AI Feature Flag | Override State | `hasScopeOverride` | Has Practice Override | `checkbox` |  |  |  |
| AI Feature Flag | Override State | `scopeEnabled` | Practice Enabled | `checkbox` |  |  |  |
| AI Feature Flag | Override State | `globalEnabled` | Global Enabled | `checkbox` |  |  |  |
| AI Feature Flag | Override State | `envValue` | Env Variable Value | `text` |  |  |  |
| AI Feature Flag | Override State | `updatedBy` | Updated By | `text` |  |  |  |
| AI Feature Flag | Override State | `updatedAt` | Updated At | `text` |  |  |  |

### AI Flags — `admin_ai_flags`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| AI Feature Flags | Flag | `name` | Flag Name | `text` | Y |  |  |
| AI Feature Flags | Flag | `enabled` | Enabled | `checkbox` |  |  |  |
| AI Feature Flags | Flag | `description` | Description | `text` |  |  |  |
| AI Feature Flags | Flag | `updatedBy` | Updated By | `text` |  |  |  |
| AI Feature Flags | Flag | `updatedAt` | Updated At | `text` |  |  |  |

### Access Groups — `patient_access_groups`

Screen: 1 page(s) · 1 section(s) · 3 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Access Groups | Group Definition | `name` | Group Name | `text` | Y |  |  |
| Patient Access Groups | Group Definition | `description` | Description | `textarea` |  |  |  |
| Patient Access Groups | Group Definition | `isRestricted` | Restricted (Limit Visibility) | `checkbox` |  |  |  |

### Advance Directive — `advance_directive_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Advance Directive Documentation | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Advance Directive Documentation | Patient | `documentDate` | Document Date | `date` | Y |  |  |
| Advance Directive Documentation | Patient | `reviewedBy` | Reviewed By | `typeahead` | Y |  |  |
| Advance Directive Documentation | Advance Directive Status | `livingWillStatus` | Living Will / Advance Directive | `select` | Y |  |  |
| Advance Directive Documentation | Advance Directive Status | `livingWillDate` | Living Will Date (if on file) | `date` |  |  |  |
| Advance Directive Documentation | Advance Directive Status | `molstPolstStatus` | MOLST / POLST Form | `select` | Y |  |  |
| Advance Directive Documentation | Advance Directive Status | `dnarStatus` | DNR / DNAR Status | `select` | Y |  |  |
| Advance Directive Documentation | Healthcare Proxy / Power of Attorney | `hcProxyStatus` | Healthcare Proxy (HCP) Document | `select` | Y |  |  |
| Advance Directive Documentation | Healthcare Proxy / Power of Attorney | `hcProxyName` | Healthcare Proxy Name | `text` |  |  |  |
| Advance Directive Documentation | Healthcare Proxy / Power of Attorney | `hcProxyRelationship` | Relationship to Patient | `text` |  |  |  |
| Advance Directive Documentation | Healthcare Proxy / Power of Attorney | `hcProxyPhone` | Proxy Phone | `text` |  |  |  |
| Advance Directive Documentation | Healthcare Proxy / Power of Attorney | `altProxyName` | Alternate Proxy Name | `text` |  |  |  |
| Advance Directive Documentation | Healthcare Proxy / Power of Attorney | `dpoa` | Durable Power of Attorney (Financial) | `select` |  |  |  |
| Advance Directive Documentation | Documented Wishes | `artificialNutrition` | Artificial Nutrition / Hydration | `select` |  |  |  |
| Advance Directive Documentation | Documented Wishes | `ventilatorWishes` | Mechanical Ventilator | `select` |  |  |  |
| Advance Directive Documentation | Documented Wishes | `additionalWishes` | Additional Documented Wishes / Patient Statements | `textarea` |  |  |  |

### Alert Rules — `cds_rules_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Alert Rule | Rule Definition | `name` | Rule Name | `text` |  |  |  |
| Alert Rule | Rule Definition | `ruleType` | Rule Type | `select` |  |  |  |
| Alert Rule | Rule Definition | `severity` | Severity | `select` |  |  |  |
| Alert Rule | Rule Definition | `status` | Status | `select` |  |  |  |
| Alert Rule | Rule Definition | `actionText` | Alert Message | `textarea` |  |  |  |
| Alert Rule | Rule Definition | `description` | Description | `textarea` |  |  |  |
| Alert Rule | Rule Configuration | `criteriaJson` | Criteria (JSON) | `textarea` |  |  |  |
| Alert Rule | Rule Configuration | `roleScope` | Role Scope (comma separated) | `text` |  |  |  |
| Alert Rule | Rule Configuration | `overrideRequiresReason` | Override Requires Reason | `checkbox` |  |  |  |

### Appointment Types — `appointment_types_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENT_TYPES`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Appointment Type | Type Information | `name` | Name | `text` |  | name |  |
| Appointment Type | Type Information | `defaultDurationMinutes` | Duration (min) | `text` |  | defaultDurationMinutes |  |
| Appointment Type | Type Information | `color` | Color | `text` |  | color |  |
| Appointment Type | Type Information | `isActive` | Active | `text` |  | isActive |  |

### Appointment Types — `APPOINTMENT_TYPES`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENT_TYPES`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Appointment Type | Visit Type (ECW-SC-5) | `atId` | Type ID (read-only) | `text` |  |  |  |
| Appointment Type | Visit Type (ECW-SC-5) | `atName` | Name (required) | `text` | Y |  |  |
| Appointment Type | Visit Type (ECW-SC-5) | `atDefaultDurationMinutes` | Default Duration (minutes) | `text` |  |  |  |
| Appointment Type | Visit Type (ECW-SC-5) | `atColor` | Color (hex or named color) | `text` |  |  |  |
| Appointment Type | Visit Type (ECW-SC-5) | `atPracticeId` | Practice ID (optional scope) | `text` |  |  |  |
| Appointment Type | Visit Type (ECW-SC-5) | `atIsActive` | Is Active | `checkbox` |  |  |  |
| Appointment Type | Visit Type (ECW-SC-5) | `atDescription` | Description | `textarea` |  |  |  |

### Appt Reminder Config — `appointment_reminder_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Appointment Reminder Configuration | Reminder Template Settings | `reminderName` | Reminder Name | `text` | Y |  |  |
| Appointment Reminder Configuration | Reminder Template Settings | `apptTypes` | Applies to Appointment Types | `textarea` |  |  |  |
| Appointment Reminder Configuration | Reminder Template Settings | `reminderStatus` | Status | `select` | Y |  |  |
| Appointment Reminder Configuration | Reminder Channels | `smsEnabled` | SMS Text Reminder enabled | `checkbox` |  |  |  |
| Appointment Reminder Configuration | Reminder Channels | `smsTiming` | SMS — Send How Early | `select` |  |  |  |
| Appointment Reminder Configuration | Reminder Channels | `smsMessage` | SMS Message Template | `textarea` |  |  |  |
| Appointment Reminder Configuration | Reminder Channels | `voiceEnabled` | Automated Voice Call enabled | `checkbox` |  |  |  |
| Appointment Reminder Configuration | Reminder Channels | `voiceTiming` | Voice Call — Send How Early | `select` |  |  |  |
| Appointment Reminder Configuration | Reminder Channels | `emailEnabled` | Email Reminder enabled | `checkbox` |  |  |  |
| Appointment Reminder Configuration | Reminder Channels | `emailTiming` | Email — Send How Early | `select` |  |  |  |
| Appointment Reminder Configuration | Reminder Channels | `portalEnabled` | Patient Portal notification enabled | `checkbox` |  |  |  |
| Appointment Reminder Configuration | Confirmation & No-Show Handling | `confirmationRequired` | Require patient confirmation (auto-cancel if no response) | `checkbox` |  |  |  |
| Appointment Reminder Configuration | Confirmation & No-Show Handling | `autoCancelHours` | Auto-cancel if no confirm within (hours) | `number` |  |  |  |
| Appointment Reminder Configuration | Confirmation & No-Show Handling | `noShowFollowup` | Auto-send no-show follow-up message if patient misses appointment | `checkbox` |  |  |  |
| Appointment Reminder Configuration | Confirmation & No-Show Handling | `noShowMessage` | No-Show Follow-Up Message | `textarea` |  |  |  |
| Appointment Reminder Configuration | Confirmation & No-Show Handling | `preparationInstructions` | Visit Preparation Instructions (included in reminder) | `textarea` |  |  |  |

### Appt Types — `appointment_type_config_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `CLAIMS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Appointment Type Configuration | Appointment Type Details | `typeName` | Appointment Type Name | `text` | Y |  |  |
| Appointment Type Configuration | Appointment Type Details | `typeCode` | Internal Code | `text` |  |  |  |
| Appointment Type Configuration | Appointment Type Details | `category` | Category | `select` |  |  |  |
| Appointment Type Configuration | Appointment Type Details | `defaultDuration` | Default Duration (minutes) | `number` | Y |  |  |
| Appointment Type Configuration | Appointment Type Details | `colorCode` | Calendar Color | `select` |  |  |  |
| Appointment Type Configuration | Scheduling Rules | `requiresReferral` | Requires referral on file | `checkbox` |  |  |  |
| Appointment Type Configuration | Scheduling Rules | `requiresAuth` | Requires prior authorization | `checkbox` |  |  |  |
| Appointment Type Configuration | Scheduling Rules | `newPatientOnly` | New patients only | `checkbox` |  |  |  |
| Appointment Type Configuration | Scheduling Rules | `estPatientOnly` | Established patients only | `checkbox` |  |  |  |
| Appointment Type Configuration | Scheduling Rules | `allowOnlineBooking` | Allow online patient booking (portal) | `checkbox` |  |  |  |
| Appointment Type Configuration | Scheduling Rules | `requiresPreVisitForms` | Require pre-visit intake forms | `checkbox` |  |  |  |
| Appointment Type Configuration | Scheduling Rules | `preVisitForms` | Pre-visit Form Types (comma separated) | `text` |  |  |  |
| Appointment Type Configuration | Scheduling Rules | `eligibilityCheck` | Auto-run eligibility check at booking | `checkbox` |  |  |  |
| Appointment Type Configuration | Billing Defaults | `defaultCpt` | Default CPT Code | `typeahead` |  |  |  |
| Appointment Type Configuration | Billing Defaults | `defaultPos` | Default Place of Service | `select` |  |  |  |
| Appointment Type Configuration | Billing Defaults | `collectCopayAtBooking` | Collect copay / deposit at booking | `checkbox` |  |  |  |

### Audit Console — `audit_console_cf`

Screen: 0 page(s) · 0 section(s) · 0 field(s) · UI STUB · DB BUILT · tables `AUDIT_LOG`

_No fields declared (nav stub)._

### Audit Log — `audit_cf`

Screen: 1 page(s) · 1 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Audit Entry | Audit Information | `eventTime` | Time | `text` |  | eventTime |  |
| Audit Entry | Audit Information | `userEmail` | User | `text` |  | userEmail |  |
| Audit Entry | Audit Information | `eventType` | Event Type | `text` |  | eventType |  |
| Audit Entry | Audit Information | `eventCategory` | Category | `text` |  | eventCategory |  |
| Audit Entry | Audit Information | `action` | Action | `text` |  | action |  |
| Audit Entry | Audit Information | `endpoint` | Endpoint | `text` |  | endpoint |  |
| Audit Entry | Audit Information | `requestMethod` | Method | `text` |  | requestMethod |  |
| Audit Entry | Audit Information | `resourceType` | Resource Type | `text` |  | resourceType |  |
| Audit Entry | Audit Information | `resourceId` | Resource ID | `text` |  | resourceId |  |
| Audit Entry | Audit Information | `resourceName` | Resource Name | `text` |  | resourceName |  |
| Audit Entry | Audit Information | `ipAddress` | IP Address | `text` |  | ipAddress |  |
| Audit Entry | Audit Information | `accessedPhi` | PHI Access | `text` |  | accessedPhi |  |
| Audit Entry | Audit Information | `errorMessage` | Error | `text` |  | errorMessage |  |
| Audit Entry | Audit Information | `notes` | Notes | `textarea` |  | notes |  |

### Audit Log — `audit_log_cf`

Screen: 0 page(s) · 0 section(s) · 0 field(s) · UI STUB · DB BUILT

_No fields declared (nav stub)._

### Autopilot Executions — `autopilot_executions_cf`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `AUTOPILOT_EXECUTIONS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Execution Details | Execution Information | `executedAt` | Executed At | `text` |  | executedAt |  |
| Execution Details | Execution Information | `planSummary` | Plan Summary | `text` |  | planSummary |  |
| Execution Details | Execution Information | `confidence` | Confidence Score | `text` |  | confidence |  |
| Execution Details | Execution Information | `riskPassed` | Risk Passed | `text` |  | riskPassed |  |
| Execution Details | Execution Information | `hardStop` | Hard Stop | `text` |  | hardStop |  |
| Execution Details | Execution Information | `approvedBy` | Approved By | `text` |  | approvedBy |  |
| Execution Details | Execution Information | `resultJson` | Result | `textarea` |  | resultJson |  |

### Autosend Queue — `autosend_queue_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Queue Item Detail | Delivery | `status` | Status | `text` |  |  |  |
| Queue Item Detail | Delivery | `transportModality` | Method | `text` |  |  |  |
| Queue Item Detail | Delivery | `attemptCount` | Attempts | `number` |  |  |  |
| Queue Item Detail | Delivery | `recipientType` | Recipient Type | `text` |  |  |  |
| Queue Item Detail | Delivery | `externalFax` | External Fax | `text` |  |  |  |
| Queue Item Detail | Delivery | `sentAt` | Sent At | `text` |  |  |  |
| Queue Item Detail | Delivery | `lastAttemptAt` | Last Attempt | `text` |  |  |  |
| Queue Item Detail | Delivery | `createdAt` | Queued At | `text` |  |  |  |
| Queue Item Detail | Context | `ruleId` | Rule ID | `text` |  |  |  |
| Queue Item Detail | Context | `encounterId` | Encounter ID | `text` |  |  |  |
| Queue Item Detail | Context | `noteId` | Note ID | `text` |  |  |  |
| Queue Item Detail | Error / Skip | `errorMessage` | Error Message | `textarea` |  |  |  |
| Queue Item Detail | Error / Skip | `skipReason` | Skip Reason | `text` |  |  |  |

### Autosend Rules — `autosend_rules_cf`

Screen: 1 page(s) · 4 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`, `REFERRING_PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Autosend Rules | Rule Context | `name` | Rule Name | `text` | Y |  |  |
| Autosend Rules | Trigger Criteria | `triggerEvent` | Trigger Event | `select` | Y |  |  |
| Autosend Rules | Trigger Criteria | `visitTypeFilter` | Visit Type Filter (optional) | `text` |  |  |  |
| Autosend Rules | Trigger Criteria | `providerFilter` | Provider Filter (optional) | `typeahead` |  |  |  |
| Autosend Rules | Trigger Criteria | `lookbackDays` | Lookback Days (for queue processing) | `number` |  |  |  |
| Autosend Rules | Trigger Criteria | `resendRestrictionDays` | Minimum Days Between Resends | `number` |  |  |  |
| Autosend Rules | Recipient | `recipientType` | Recipient Type | `select` | Y |  |  |
| Autosend Rules | Recipient | `recipientId` | Recipient (if provider/internal) | `typeahead` |  |  |  |
| Autosend Rules | Recipient | `externalFax` | External Fax Number (if fax) | `tel` |  |  |  |
| Autosend Rules | Recipient | `transportModality` | Transport Modality | `select` |  |  |  |
| Autosend Rules | Rule Status | `enabled` | Rule Enabled | `checkbox` |  |  |  |

### Autosend Rules — `autosend_rules`

Screen: 2 page(s) · 2 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Autosend Rules | asrListSection | `asrId` | ID | `text` |  |  |  |
| Autosend Rules | asrListSection | `asrName` | Name | `text` |  |  |  |
| Autosend Rules | asrListSection | `asrEnabled` | Enabled | `text` |  |  |  |
| Autosend Rules | asrListSection | `asrVisitTypeFilter` | Visit Type Filter | `text` |  |  |  |
| Autosend Rules | asrListSection | `asrRecipientType` | Recipient Type | `text` |  |  |  |
| Autosend Rules | asrListSection | `asrTransportModality` | Transport | `text` |  |  |  |
| Autosend Rules | asrListSection | `asrTriggerEvent` | Trigger Event | `text` |  |  |  |
| Autosend Rule Details | asrEditSection | `asrEditPracticeId` | Practice ID | `text` | Y |  |  |
| Autosend Rule Details | asrEditSection | `asrEditName` | Rule Name | `text` | Y |  |  |
| Autosend Rule Details | asrEditSection | `asrEditRecipientType` | Recipient Type | `select` |  |  |  |
| Autosend Rule Details | asrEditSection | `asrEditRecipientId` | Recipient ID | `text` |  |  |  |
| Autosend Rule Details | asrEditSection | `asrEditExternalFax` | External Fax | `text` |  |  |  |
| Autosend Rule Details | asrEditSection | `asrEditTransportModality` | Transport | `select` |  |  |  |
| Autosend Rule Details | asrEditSection | `asrEditTriggerEvent` | Trigger Event | `select` |  |  |  |
| Autosend Rule Details | asrEditSection | `asrEditVisitTypeFilter` | Visit Type Filter | `text` |  |  |  |
| Autosend Rule Details | asrEditSection | `asrEditProviderFilter` | Provider Filter | `text` |  |  |  |
| Autosend Rule Details | asrEditSection | `asrEditLookbackDays` | Lookback Days | `text` |  |  |  |
| Autosend Rule Details | asrEditSection | `asrEditResendRestrictionDays` | Resend Restriction Days | `text` |  |  |  |

### Backups — `backups_cf`

Screen: 4 page(s) · 4 section(s) · 19 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Backup Entry | Backup Details | `id` | Journal ID | `text` |  |  |  |
| Backup Entry | Backup Details | `operation` | Operation | `text` |  |  |  |
| Backup Entry | Backup Details | `triggerType` | Trigger Type | `text` |  |  |  |
| Backup Entry | Backup Details | `cloudSqlBackupId` | Cloud SQL Backup ID | `text` |  |  |  |
| Backup Entry | Backup Details | `cloudSqlOpName` | Cloud SQL Op Name | `text` |  |  |  |
| Backup Entry | Backup Details | `status` | Status | `text` |  |  |  |
| Backup Entry | Backup Details | `requestedByEmail` | Requested By Email | `text` |  |  |  |
| Backup Entry | Backup Details | `description` | Description | `text` |  |  |  |
| Backup Entry | Backup Details | `errorText` | Error Text | `text` |  |  |  |
| Backup Entry | Backup Details | `createdAt` | Created At | `text` |  |  |  |
| Backup Entry | Backup Details | `updatedAt` | Updated At | `text` |  |  |  |
| Trigger Backup | Backup Parameters | `description` | Description (optional) | `text` |  |  |  |
| Schedule Settings | Backup Schedule | `scheduleEnabled` | Schedule Enabled | `checkbox` |  |  |  |
| Schedule Settings | Backup Schedule | `frequency` | Frequency | `select` |  |  |  |
| Schedule Settings | Backup Schedule | `hourOfDay` | Hour of Day (0-23 ET) | `number` |  |  |  |
| Schedule Settings | Backup Schedule | `dayOfWeek` | Day of Week (0=Sun, weekly only) | `number` |  |  |  |
| Schedule Settings | Backup Schedule | `retentionCount` | Retention Count (backups to keep) | `number` |  |  |  |
| Restore Backup | DESTRUCTIVE: Restore from Backup | `backupId` | Cloud SQL Backup ID | `text` | Y |  |  |
| Restore Backup | DESTRUCTIVE: Restore from Backup | `confirm` | Type RESTORE to confirm | `text` | Y |  |  |

### Backups — `BACKUPS`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Database Backup | Cloud SQL Backup Journal (admin-only writes; DESTRUCTIVE restore requires explicit admin confirm) | `bkpId` | Backup ID (read-only) | `text` |  |  |  |
| Database Backup | Cloud SQL Backup Journal (admin-only writes; DESTRUCTIVE restore requires explicit admin confirm) | `bkpStatus` | Status (pending/running/complete/failed) | `text` |  |  |  |
| Database Backup | Cloud SQL Backup Journal (admin-only writes; DESTRUCTIVE restore requires explicit admin confirm) | `bkpSize` | Backup Size | `text` |  |  |  |
| Database Backup | Cloud SQL Backup Journal (admin-only writes; DESTRUCTIVE restore requires explicit admin confirm) | `bkpCreatedAt` | Created At (ISO 8601) | `text` |  |  |  |
| Database Backup | Cloud SQL Backup Journal (admin-only writes; DESTRUCTIVE restore requires explicit admin confirm) | `bkpDescription` | Description / Notes | `textarea` |  |  |  |

### Batch Messaging — `batch_messaging_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Messaging Campaign | Campaign Setup | `campaignName` | Campaign Name | `text` | Y |  |  |
| Patient Messaging Campaign | Campaign Setup | `campaignType` | Campaign Type | `select` | Y |  |  |
| Patient Messaging Campaign | Campaign Setup | `messageChannel` | Delivery Channel | `select` | Y |  |  |
| Patient Messaging Campaign | Campaign Setup | `subject` | Subject Line (email/portal) | `text` |  |  |  |
| Patient Messaging Campaign | Message Content | `messageTemplate` | Message Template | `textarea` | Y |  |  |
| Patient Messaging Campaign | Message Content | `scheduledSendTime` | Scheduled Send Date | `date` | Y |  |  |
| Patient Messaging Campaign | Recipients | `targetPopulation` | Target Population Criteria | `textarea` |  |  |  |
| Patient Messaging Campaign | Recipients | `recipientCount` | Estimated Recipient Count | `number` |  |  |  |
| Patient Messaging Campaign | Recipients | `approvedBy` | Approved By (Provider / Manager) | `typeahead` |  |  |  |

### Break-Glass — `break_glass`

Screen: 2 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Break-Glass Invocations (Admin) | bgInvocationsSection | `bgGrantId` | Grant ID | `text` |  |  |  |
| Break-Glass Invocations (Admin) | bgInvocationsSection | `bgInvokedAt` | Invoked At | `text` |  |  |  |
| Break-Glass Invocations (Admin) | bgInvocationsSection | `bgUserId` | User ID | `text` |  |  |  |
| Break-Glass Invocations (Admin) | bgInvocationsSection | `bgUserEmail` | User Email | `text` |  |  |  |
| Break-Glass Invocations (Admin) | bgInvocationsSection | `bgPatientId` | Patient ID | `text` |  |  |  |
| Declare Emergency Access | bgDeclareSection | `bgReason` | Reason (min 10 characters required) | `textarea` | Y |  |  |
| Declare Emergency Access | bgDeclareSection | `bgPatientId` | Patient ID (optional) | `text` |  |  |  |
| Declare Emergency Access | bgDeclareSection | `bgDurationMinutes` | Duration (minutes, 5-480, default 120) | `text` |  |  |  |

### Care Roles — `care_roles_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `CARE_ROLES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Care Role | Care Role Details | `id` | Role ID | `text` |  |  |  |
| Care Role | Care Role Details | `code` | Code | `text` |  |  |  |
| Care Role | Care Role Details | `name` | Name | `text` |  |  |  |
| Care Role | Care Role Details | `description` | Description | `textarea` |  |  |  |

### Care Roles — `CARE_ROLES`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `CARE_ROLES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Care Role | Role | `crId` | Role ID | `text` |  |  |  |
| Care Role | Role | `crCode` | Role Code (e.g. PCP, SPECIALIST, HOSPITALIST) | `text` | Y |  |  |
| Care Role | Role | `crName` | Display Name | `text` | Y |  |  |
| Care Role | Role | `crDescription` | Description | `text` |  |  |  |

### Care Teams — `care_teams_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`, `PROVIDER_TEAMS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Care Team | Care Team | `name` | Team Name | `text` |  |  |  |
| Care Team | Care Team | `leadProviderId` | Lead Provider | `lookup` |  |  |  |
| Care Team | Care Team | `description` | Description | `textarea` |  |  |  |
| Care Team | Care Team | `isActive` | Active | `text` |  | is_active |  |

### Clearinghouse — `admin_clearinghouse_cf`

Screen: 1 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clearinghouse Connection | Connection | `name` | Connection Name | `text` | Y |  |  |
| Clearinghouse Connection | Connection | `type` | Connection Type | `select` | Y |  |  |
| Clearinghouse Connection | Connection | `host` | Host / Endpoint URL | `text` |  |  |  |
| Clearinghouse Connection | Connection | `is_primary` | Primary Clearinghouse | `checkbox` |  |  |  |
| Clearinghouse Connection | Connection | `status` | Status | `select` |  |  |  |
| Clearinghouse Connection | Transaction Stats | `connection_status` | Connection Status | `text` |  |  |  |
| Clearinghouse Connection | Transaction Stats | `success_count` | Success Count | `number` |  |  |  |
| Clearinghouse Connection | Transaction Stats | `failure_count` | Failure Count | `number` |  |  |  |

### Clearinghouse — `ADMIN_CLEARINGHOUSE`

Screen: 1 page(s) · 1 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clearinghouse Connection | EDI Clearinghouse Connection (ORG_SETTINGS for create/update/delete) | `chId` | Connection ID (read-only) | `text` |  |  |  |
| Clearinghouse Connection | EDI Clearinghouse Connection (ORG_SETTINGS for create/update/delete) | `chName` | Clearinghouse Name (required) | `text` | Y |  |  |
| Clearinghouse Connection | EDI Clearinghouse Connection (ORG_SETTINGS for create/update/delete) | `chType` | Type (mock/availity/change-healthcare/waystar/office-ally) | `text` |  |  |  |
| Clearinghouse Connection | EDI Clearinghouse Connection (ORG_SETTINGS for create/update/delete) | `chStatus` | Status (active/paused/error) | `text` |  |  |  |
| Clearinghouse Connection | EDI Clearinghouse Connection (ORG_SETTINGS for create/update/delete) | `chConnectionStatus` | Connection Status (connected/disconnected/testing) | `text` |  |  |  |
| Clearinghouse Connection | EDI Clearinghouse Connection (ORG_SETTINGS for create/update/delete) | `chHost` | Host / Endpoint URL | `text` |  |  |  |
| Clearinghouse Connection | EDI Clearinghouse Connection (ORG_SETTINGS for create/update/delete) | `chIsPrimary` | Is Primary Clearinghouse | `checkbox` |  |  |  |
| Clearinghouse Connection | EDI Clearinghouse Connection (ORG_SETTINGS for create/update/delete) | `chSubmitterId` | Submitter ID | `text` |  |  |  |
| Clearinghouse Connection | EDI Clearinghouse Connection (ORG_SETTINGS for create/update/delete) | `chUsername` | Username / Login | `text` |  |  |  |
| Clearinghouse Connection | EDI Clearinghouse Connection (ORG_SETTINGS for create/update/delete) | `chSuccessCount` | Successful Submissions (read-only) | `text` |  |  |  |
| Clearinghouse Connection | EDI Clearinghouse Connection (ORG_SETTINGS for create/update/delete) | `chFailureCount` | Failed Submissions (read-only) | `text` |  |  |  |

### Clearinghouse — `admin_clearinghouse`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clearinghouse Connection | Connection | `name` | Connection Name | `text` | Y |  |  |
| Clearinghouse Connection | Connection | `clearinghouseType` | Type | `select` | Y |  |  |
| Clearinghouse Connection | Connection | `endpoint` | Endpoint URL | `text` |  |  |  |
| Clearinghouse Connection | Connection | `submitterId` | Submitter ID | `text` |  |  |  |
| Clearinghouse Connection | Connection | `isActive` | Active | `checkbox` |  |  |  |
| Clearinghouse Connection | Connection | `testMode` | Test Mode | `checkbox` |  |  |  |

### Clinical Dictionary — `clinical_dictionary_cf`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB MISSING · tables `APPOINTMENTS`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `ELIGIBILITY_CHECKS`, `ENCOUNTERS`, `PAYERS_MASTER`, `PAYMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clinical Concept (ECW-AD-1) | Coded Concept Definition | `conceptType` | Concept Type | `select` |  |  |  |
| Clinical Concept (ECW-AD-1) | Coded Concept Definition | `code` | Standard Code | `text` |  |  |  |
| Clinical Concept (ECW-AD-1) | Coded Concept Definition | `displayName` | Display Name | `text` | Y |  |  |
| Clinical Concept (ECW-AD-1) | Coded Concept Definition | `synonyms` | Synonyms / Aliases | `text` |  |  |  |
| Clinical Concept (ECW-AD-1) | Coded Concept Definition | `preferredTerm` | Preferred Term in UI | `text` |  |  |  |
| Clinical Concept (ECW-AD-1) | Coded Concept Definition | `isActive` | Active in Practice | `checkbox` |  |  |  |
| Clinical Concept (ECW-AD-1) | Coded Concept Definition | `isDefault` | Default for Type | `checkbox` |  |  |  |
| Clinical Concept (ECW-AD-1) | Coded Concept Definition | `sortOrder` | Sort Order | `number` |  |  |  |
| Clinical Concept (ECW-AD-1) | Coded Concept Definition | `notes` | Admin Notes | `textarea` |  |  |  |

### Compliance Evidence — `compliance_evidence_cf`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Compliance Summary | Audit Overview | `totalEvents` | Total Events | `number` |  |  |  |
| Compliance Summary | Audit Overview | `windowDays` | Window (days) | `number` |  |  |  |
| Compliance Summary | Audit Overview | `byCategory` | By Category (JSON) | `textarea` |  |  |  |
| Compliance Summary | Audit Overview | `dispositions` | Dispositions (JSON) | `textarea` |  |  |  |
| Compliance Summary | Audit Overview | `byType` | By Event Type (JSON) | `textarea` |  |  |  |

### Consent to Treat — `consent_to_treat_cf`

Screen: 1 page(s) · 4 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Consent to Treat & Financial Responsibility | Patient Identity | `patientId` | Patient | `typeahead` | Y |  |  |
| Consent to Treat & Financial Responsibility | Patient Identity | `consentDate` | Consent Date | `date` | Y |  |  |
| Consent to Treat & Financial Responsibility | Patient Identity | `signatory` | Name of Person Signing (if not patient) | `text` |  |  |  |
| Consent to Treat & Financial Responsibility | Patient Identity | `signatoryRelationship` | Relationship (if not patient) | `select` |  |  |  |
| Consent to Treat & Financial Responsibility | Consent Provisions | `consentForTreatment` | Patient / representative consents to medical examination and treatment | `checkbox` |  |  |  |
| Consent to Treat & Financial Responsibility | Consent Provisions | `hipaaNoticeAcknowledged` | HIPAA Notice of Privacy Practices received and acknowledged | `checkbox` |  |  |  |
| Consent to Treat & Financial Responsibility | Consent Provisions | `assignmentOfBenefits` | Assignment of insurance benefits to provider accepted | `checkbox` |  |  |  |
| Consent to Treat & Financial Responsibility | Consent Provisions | `releaseOfInfo` | Authorization to release medical information to insurance for billing accepted | `checkbox` |  |  |  |
| Consent to Treat & Financial Responsibility | Consent Provisions | `financialResponsibility` | Patient accepts financial responsibility for non-covered services, copays, coinsurance, and deductibles | `checkbox` |  |  |  |
| Consent to Treat & Financial Responsibility | Consent Provisions | `noSurpriseActNotice` | Good Faith Estimate / No Surprises Act notice provided | `checkbox` |  |  |  |
| Consent to Treat & Financial Responsibility | Insurance on File | `primaryInsuranceName` | Primary Insurance | `text` |  |  |  |
| Consent to Treat & Financial Responsibility | Insurance on File | `primaryMemberId` | Primary Member ID | `text` | Y |  |  |
| Consent to Treat & Financial Responsibility | Insurance on File | `primaryGroupNumber` | Primary Group Number | `text` |  |  |  |
| Consent to Treat & Financial Responsibility | Insurance on File | `secondaryInsuranceName` | Secondary Insurance | `text` |  |  |  |
| Consent to Treat & Financial Responsibility | Insurance on File | `secondaryMemberId` | Secondary Member ID | `text` |  |  |  |
| Consent to Treat & Financial Responsibility | Insurance on File | `insuranceCardsCopied` | Insurance card(s) scanned / copied | `checkbox` |  |  |  |
| Consent to Treat & Financial Responsibility | Insurance on File | `copayAmount` | Copay Collected Today ($) | `number` |  |  |  |
| Consent to Treat & Financial Responsibility | Insurance on File | `copayCollectionNote` | Copay Collection Note | `text` |  |  |  |
| Consent to Treat & Financial Responsibility | Staff Verification | `idVerified` | Photo ID verified | `checkbox` |  |  |  |
| Consent to Treat & Financial Responsibility | Staff Verification | `staffName` | Staff Member Completing Form | `typeahead` | Y |  |  |
| Consent to Treat & Financial Responsibility | Staff Verification | `consentMethod` | Consent Method | `select` |  |  |  |

### Consents — `consent_management_cf`

Screen: 1 page(s) · 2 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Consent Management | Patient & Consent Type | `patientId` | Patient | `typeahead` | Y |  |  |
| Consent Management | Patient & Consent Type | `consentType` | Consent Type | `select` | Y |  |  |
| Consent Management | Patient & Consent Type | `consentDate` | Date Signed | `date` | Y |  |  |
| Consent Management | Patient & Consent Type | `consentStatus` | Status | `select` |  |  |  |
| Consent Management | Consent Details | `procedureDescription` | Procedure / Purpose | `textarea` |  |  |  |
| Consent Management | Consent Details | `risksDiscussed` | Risks and benefits discussed | `checkbox` |  |  |  |
| Consent Management | Consent Details | `alternativesDiscussed` | Alternatives discussed | `checkbox` |  |  |  |
| Consent Management | Consent Details | `questionsAnswered` | Patient questions answered | `checkbox` |  |  |  |
| Consent Management | Consent Details | `patientCompetent` | Patient verified competent to give consent | `checkbox` |  |  |  |
| Consent Management | Consent Details | `witnessName` | Witness Name | `text` |  |  |  |
| Consent Management | Consent Details | `signerRelation` | Signer Relationship (if not patient) | `select` |  |  |  |
| Consent Management | Consent Details | `expirationDate` | Consent Expiration Date | `date` |  |  |  |
| Consent Management | Consent Details | `consentNotes` | Consent Notes | `textarea` |  |  |  |

### Custom Fields — `custom_demographics_cf`

Screen: 1 page(s) · 1 section(s) · 10 field(s) · UI LIVE · DB MISSING · tables `APPOINTMENTS`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `ELIGIBILITY_CHECKS`, `ENCOUNTERS`, `PAYERS_MASTER`, `PAYMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Custom Demographics Field (ECW-AD-25) | Field Definition | `fieldLabel` | Field Label | `text` | Y |  |  |
| Custom Demographics Field (ECW-AD-25) | Field Definition | `fieldKey` | Field Key (API name) | `text` |  |  |  |
| Custom Demographics Field (ECW-AD-25) | Field Definition | `fieldType` | Field Type | `select` |  |  |  |
| Custom Demographics Field (ECW-AD-25) | Field Definition | `fieldChoices` | Choices (for select/radio, comma-sep) | `text` |  |  |  |
| Custom Demographics Field (ECW-AD-25) | Field Definition | `placementSection` | Placement Section | `select` |  |  |  |
| Custom Demographics Field (ECW-AD-25) | Field Definition | `isRequired` | Required | `checkbox` |  |  |  |
| Custom Demographics Field (ECW-AD-25) | Field Definition | `conditionalParentField` | Conditional Parent Field | `text` |  |  |  |
| Custom Demographics Field (ECW-AD-25) | Field Definition | `conditionalParentValue` | Conditional Parent Value | `text` |  |  |  |
| Custom Demographics Field (ECW-AD-25) | Field Definition | `noteSurface` | Auto-Surface in Notes | `checkbox` |  |  |  |
| Custom Demographics Field (ECW-AD-25) | Field Definition | `isActive` | Active | `checkbox` |  |  |  |

### Data Quality — `data_quality_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB MISSING · tables `APPOINTMENTS`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `ELIGIBILITY_CHECKS`, `ENCOUNTERS`, `PAYERS_MASTER`, `PAYMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Coded-Data Remediation (ECW-AD-8) | Allergy Remediation | `freeTextAllergyCount` | Free-Text Allergies (uncoded) | `number` |  |  |  |
| Coded-Data Remediation (ECW-AD-8) | Allergy Remediation | `duplicateAllergyCount` | Potential Duplicate Allergies | `number` |  |  |  |
| Coded-Data Remediation (ECW-AD-8) | Allergy Remediation | `allergyRemediationNote` | Remediation Note | `textarea` |  |  |  |
| Coded-Data Remediation (ECW-AD-8) | Problem List Remediation | `unspecifiedDxCount` | Unspecified ICD-10 Codes on Problems | `number` |  |  |  |
| Coded-Data Remediation (ECW-AD-8) | Problem List Remediation | `inactiveProblemCount` | Inactive Problems (>2 years no activity) | `number` |  |  |  |
| Coded-Data Remediation (ECW-AD-8) | Problem List Remediation | `problemRemediationNote` | Remediation Note | `textarea` |  |  |  |
| Coded-Data Remediation (ECW-AD-8) | Medication List Remediation | `freeTextMedCount` | Free-Text Medications (uncoded) | `number` |  |  |  |
| Coded-Data Remediation (ECW-AD-8) | Medication List Remediation | `staleMedCount` | Stale Active Medications (>12 months no refill) | `number` |  |  |  |
| Coded-Data Remediation (ECW-AD-8) | Medication List Remediation | `medRemediationNote` | Remediation Note | `textarea` |  |  |  |

### Device Profiles — `device_profiles_cf`

Screen: 1 page(s) · 1 section(s) · 11 field(s) · UI LIVE · DB MISSING · tables `APPOINTMENTS`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `ELIGIBILITY_CHECKS`, `ENCOUNTERS`, `PAYERS_MASTER`, `PAYMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Workstation Device Profile (ECW-AD-21) | Device / Workstation Configuration | `deviceName` | Device Name | `text` | Y |  |  |
| Workstation Device Profile (ECW-AD-21) | Device / Workstation Configuration | `deviceType` | Device Type | `select` |  |  |  |
| Workstation Device Profile (ECW-AD-21) | Device / Workstation Configuration | `location` | Location | `text` |  |  |  |
| Workstation Device Profile (ECW-AD-21) | Device / Workstation Configuration | `ipAddress` | IP Address | `text` |  |  |  |
| Workstation Device Profile (ECW-AD-21) | Device / Workstation Configuration | `macAddress` | MAC Address | `text` |  |  |  |
| Workstation Device Profile (ECW-AD-21) | Device / Workstation Configuration | `printerName` | Default Printer | `text` |  |  |  |
| Workstation Device Profile (ECW-AD-21) | Device / Workstation Configuration | `labelPrinterName` | Label Printer Name | `text` |  |  |  |
| Workstation Device Profile (ECW-AD-21) | Device / Workstation Configuration | `barcodeScanner` | Barcode Scanner Connected | `checkbox` |  |  |  |
| Workstation Device Profile (ECW-AD-21) | Device / Workstation Configuration | `specimenLabelTemplate` | Specimen Label Template | `text` |  |  |  |
| Workstation Device Profile (ECW-AD-21) | Device / Workstation Configuration | `isActive` | Device Active | `checkbox` |  |  |  |
| Workstation Device Profile (ECW-AD-21) | Device / Workstation Configuration | `notes` | Notes | `textarea` |  |  |  |

### Disability / FMLA — `disability_fmla_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Disability / FMLA Documentation | Request Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Disability / FMLA Documentation | Request Details | `requestDate` | Request Date | `date` | Y |  |  |
| Disability / FMLA Documentation | Request Details | `requestType` | Request Type | `select` | Y |  |  |
| Disability / FMLA Documentation | Request Details | `employer` | Employer / School | `text` |  |  |  |
| Disability / FMLA Documentation | Request Details | `formRequired` | Form Required | `text` |  |  |  |
| Disability / FMLA Documentation | Medical Condition & Restrictions | `primaryCondition` | Primary Diagnosis (ICD-10) | `typeahead` | Y |  |  |
| Disability / FMLA Documentation | Medical Condition & Restrictions | `conditionDescription` | Condition Description | `textarea` | Y |  |  |
| Disability / FMLA Documentation | Medical Condition & Restrictions | `incapacityDescription` | Incapacity / Functional Limitations | `textarea` |  |  |  |
| Disability / FMLA Documentation | Medical Condition & Restrictions | `treatmentPlan` | Treatment Plan | `textarea` |  |  |  |
| Disability / FMLA Documentation | Medical Condition & Restrictions | `leaveStartDate` | Leave / Restriction Start Date | `date` |  |  |  |
| Disability / FMLA Documentation | Medical Condition & Restrictions | `expectedReturnDate` | Expected Return Date | `date` |  |  |  |
| Disability / FMLA Documentation | Medical Condition & Restrictions | `intermittentLeave` | Intermittent leave needed (episodic) | `checkbox` |  |  |  |
| Disability / FMLA Documentation | Medical Condition & Restrictions | `intermittentFrequency` | Intermittent Leave Frequency | `text` |  |  |  |
| Disability / FMLA Documentation | Medical Condition & Restrictions | `workRestrictions` | Work Restrictions | `textarea` |  |  |  |
| Disability / FMLA Documentation | Provider Certification | `certifyingProvider` | Certifying Provider | `typeahead` | Y |  |  |
| Disability / FMLA Documentation | Provider Certification | `certificationDate` | Certification Date | `date` | Y |  |  |
| Disability / FMLA Documentation | Provider Certification | `medicalNecessity` | Medical necessity confirmed for requested leave/accommodation | `checkbox` |  |  |  |
| Disability / FMLA Documentation | Provider Certification | `formCompletionNotes` | Notes on Form Completion | `textarea` |  |  |  |

### Document Management — `document_management_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Document Filing | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Patient Document Filing | Patient | `receivedDate` | Document Received Date | `date` | Y |  |  |
| Patient Document Filing | Patient | `uploadedBy` | Uploaded / Filed By | `typeahead` |  |  |  |
| Patient Document Filing | Document Details | `documentName` | Document Name | `text` | Y |  |  |
| Patient Document Filing | Document Details | `documentType` | Document Type | `select` | Y |  |  |
| Patient Document Filing | Document Details | `source` | Source | `select` | Y |  |  |
| Patient Document Filing | Document Details | `documentDate` | Document Date (if different from received) | `date` |  |  |  |
| Patient Document Filing | Document Details | `providerName` | Authoring Provider / Facility | `text` |  |  |  |
| Patient Document Filing | Document Details | `facilityName` | Sending Facility | `text` |  |  |  |
| Patient Document Filing | Document Details | `isConfidential` | Confidential document (restricted access) | `checkbox` |  |  |  |
| Patient Document Filing | Document Details | `tags` | Tags (comma-separated) | `textarea` |  |  |  |
| Patient Document Filing | Review Status | `reviewStatus` | Status | `select` | Y |  |  |
| Patient Document Filing | Review Status | `reviewNotes` | Review Notes | `textarea` |  |  |  |

### Documentation Rules — `cdie_rules_cf`

Screen: 1 page(s) · 3 section(s) · 6 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Documentation Rule | Rule | `key` | Rule ID | `text` | Y | key |  |
| Documentation Rule | Rule | `value.salience` | Priority (higher fires first) | `number` |  | value.salience |  |
| Documentation Rule | Rule | `value.description` | What this rule detects | `textarea` |  | value.description |  |
| Documentation Rule | Rule | `value.enabled` | Enabled | `checkbox` |  | value.enabled |  |
| Documentation Rule | WHEN — conditions evaluated against encounter evidence | `value.when` | Condition (all / any / not, with exists · missing · matches · includesMatch · countAtLeast · between · comparisons) | `textarea` |  | value.when |  |
| Documentation Rule | THEN — documentation the engine requires or triggers | `value.then` | Outputs (requireDocument · requireSection · requireConsent · requireSignature · requirePhotograph · requireBodyMap · requireInventory · requireCodingReview · triggerEducation · triggerFollowUp · triggerScheduling · triggerQualityReporting · triggerFhirMapping · launchWorkflow) | `textarea` |  | value.then |  |

### Dot Phrases — `dot_phrases_cf`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB MISSING · tables `APPOINTMENTS`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `ELIGIBILITY_CHECKS`, `ENCOUNTERS`, `PAYERS_MASTER`, `PAYMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dot Phrase / Macro (ECW-CL-72/83/84) | Phrase Definition (ECW-CL-83) | `shortcut` | Shortcut (.key) | `text` | Y |  |  |
| Dot Phrase / Macro (ECW-CL-72/83/84) | Phrase Definition (ECW-CL-83) | `phraseTitle` | Phrase Title | `text` | Y |  |  |
| Dot Phrase / Macro (ECW-CL-72/83/84) | Phrase Definition (ECW-CL-83) | `sectionScope` | Section Scope | `select` |  |  |  |
| Dot Phrase / Macro (ECW-CL-72/83/84) | Phrase Definition (ECW-CL-83) | `visibility` | Visibility | `select` |  |  |  |
| Dot Phrase / Macro (ECW-CL-72/83/84) | Phrase Definition (ECW-CL-83) | `phraseText` | Phrase Text (ECW-CL-72) | `textarea` |  |  |  |
| Dot Phrase / Macro (ECW-CL-72/83/84) | Interactive Prompt Tokens (ECW-CL-84) | `hasPromptTokens` | Contains Interactive Prompts | `checkbox` |  |  |  |
| Dot Phrase / Macro (ECW-CL-72/83/84) | Interactive Prompt Tokens (ECW-CL-84) | `token1Label` | Prompt 1 Label | `text` |  |  |  |
| Dot Phrase / Macro (ECW-CL-72/83/84) | Interactive Prompt Tokens (ECW-CL-84) | `token1Type` | Prompt 1 Type | `select` |  |  |  |
| Dot Phrase / Macro (ECW-CL-72/83/84) | Interactive Prompt Tokens (ECW-CL-84) | `token2Label` | Prompt 2 Label | `text` |  |  |  |
| Dot Phrase / Macro (ECW-CL-72/83/84) | Interactive Prompt Tokens (ECW-CL-84) | `token2Type` | Prompt 2 Type | `select` |  |  |  |
| Dot Phrase / Macro (ECW-CL-72/83/84) | Interactive Prompt Tokens (ECW-CL-84) | `inlineDataTokens` | Inline Data Tokens Used | `textarea` |  |  |  |

### Dunning Series — `letter_dunning_series_cf`

Screen: 1 page(s) · 1 section(s) · 3 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dunning Series | Series | `name` | Series Name | `text` | Y |  |  |
| Dunning Series | Series | `description` | Description | `textarea` |  |  |  |
| Dunning Series | Series | `is_active` | Active | `checkbox` |  |  |  |

### Entity Admin — `entities_admin_cf`

Screen: 3 page(s) · 3 section(s) · 20 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Referring Physician Entity (ECW-AD-2) | Referring Physician / External Provider | `physicianFirstName` | First Name | `text` |  |  |  |
| Referring Physician Entity (ECW-AD-2) | Referring Physician / External Provider | `physicianLastName` | Last Name | `text` |  |  |  |
| Referring Physician Entity (ECW-AD-2) | Referring Physician / External Provider | `physicianNpi` | NPI | `text` |  |  |  |
| Referring Physician Entity (ECW-AD-2) | Referring Physician / External Provider | `physicianSpecialty` | Specialty | `text` |  |  |  |
| Referring Physician Entity (ECW-AD-2) | Referring Physician / External Provider | `physicianPhone` | Phone | `tel` |  |  |  |
| Referring Physician Entity (ECW-AD-2) | Referring Physician / External Provider | `physicianFax` | Fax | `tel` |  |  |  |
| Referring Physician Entity (ECW-AD-2) | Referring Physician / External Provider | `physicianAddress` | Practice Address | `text` |  |  |  |
| Referring Physician Entity (ECW-AD-2) | Referring Physician / External Provider | `physicianTaxId` | Tax ID / EIN | `text` |  |  |  |
| Employer / Attorney Entity (ECW-AD-2) | Employer / Attorney Info | `entityType` | Entity Type | `select` |  |  |  |
| Employer / Attorney Entity (ECW-AD-2) | Employer / Attorney Info | `entityName` | Name / Company | `text` | Y |  |  |
| Employer / Attorney Entity (ECW-AD-2) | Employer / Attorney Info | `entityContact` | Contact Person | `text` |  |  |  |
| Employer / Attorney Entity (ECW-AD-2) | Employer / Attorney Info | `entityPhone` | Phone | `tel` |  |  |  |
| Employer / Attorney Entity (ECW-AD-2) | Employer / Attorney Info | `entityFax` | Fax | `tel` |  |  |  |
| Employer / Attorney Entity (ECW-AD-2) | Employer / Attorney Info | `entityAddress` | Address | `text` |  |  |  |
| Employer / Attorney Entity (ECW-AD-2) | Employer / Attorney Info | `entityNotes` | Notes | `textarea` |  |  |  |
| Patient Merge Tool (ECW-AD-2) | Duplicate Patient Merge | `masterPatientId` | Master Patient ID (keep) | `text` |  |  |  |
| Patient Merge Tool (ECW-AD-2) | Duplicate Patient Merge | `duplicatePatientId` | Duplicate Patient ID (merge away) | `text` |  |  |  |
| Patient Merge Tool (ECW-AD-2) | Duplicate Patient Merge | `mergeReason` | Merge Reason | `select` |  |  |  |
| Patient Merge Tool (ECW-AD-2) | Duplicate Patient Merge | `mergeReviewedBy` | Reviewed By | `text` |  |  |  |
| Patient Merge Tool (ECW-AD-2) | Duplicate Patient Merge | `mergeNote` | Merge Notes | `textarea` |  |  |  |

### Evidence Summary — `compliance_evidence_summary`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Compliance Evidence | Evidence Summary | `windowDays` | Window Days | `text` |  |  |  |
| Compliance Evidence | Evidence Summary | `totalAuditEvents` | Total Audit Events | `text` |  |  |  |
| Compliance Evidence | Evidence Summary | `phiAccessCount` | PHI Access Count | `text` |  |  |  |
| Compliance Evidence | Evidence Summary | `mfaEnforced` | MFA Enforced | `checkbox` |  |  |  |
| Compliance Evidence | Evidence Summary | `encryptionEnabled` | Encryption Enabled | `checkbox` |  |  |  |
| Compliance Evidence | Evidence Summary | `rbacEnabled` | RBAC Enabled | `checkbox` |  |  |  |

### Exports — `export_queue_cf`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB MISSING · tables `CLAIMS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Export Job | Export Details | `export_type` | Export Type | `select` |  |  |  |
| Export Job | Export Details | `date_from` | From Date | `date` |  |  |  |
| Export Job | Export Details | `date_to` | To Date | `date` |  |  |  |
| Export Job | Export Details | `format` | Format | `text` |  |  |  |
| Export Job | Export Details | `requested_at` | Requested | `date` |  |  |  |
| Export Job | Export Details | `requested_by` | Requested By | `text` |  |  |  |
| Export Job | Export Details | `status` | Status | `select` |  |  |  |
| Export Job | Export Details | `record_count` | Record Count | `number` |  |  |  |
| Export Job | Export Details | `file_name` | File Name | `text` |  |  |  |

### FMLA / Disability — `fmla_disability_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| FMLA / Disability Form Completion | Patient & Request | `patientId` | Patient | `typeahead` | Y |  |  |
| FMLA / Disability Form Completion | Patient & Request | `formType` | Form Type | `select` | Y |  |  |
| FMLA / Disability Form Completion | Patient & Request | `requestReceivedDate` | Request Received Date | `date` | Y |  |  |
| FMLA / Disability Form Completion | Patient & Request | `dueDate` | Form Due Date | `date` |  |  |  |
| FMLA / Disability Form Completion | Patient & Request | `employer` | Employer / Payer | `text` |  |  |  |
| FMLA / Disability Form Completion | Medical Information | `condition` | Condition / Diagnosis Description | `textarea` | Y |  |  |
| FMLA / Disability Form Completion | Medical Information | `icd10Code` | Primary ICD-10 Diagnosis Code | `typeahead` |  |  |  |
| FMLA / Disability Form Completion | Medical Information | `leaveStartDate` | Leave / Disability Start Date | `date` |  |  |  |
| FMLA / Disability Form Completion | Medical Information | `expectedReturn` | Expected Return to Work/Activity Date | `date` |  |  |  |
| FMLA / Disability Form Completion | Medical Information | `continuousLeave` | Continuous leave (off work continuously) | `checkbox` |  |  |  |
| FMLA / Disability Form Completion | Medical Information | `intermittentLeave` | Intermittent leave (episodic absences) | `checkbox` |  |  |  |
| FMLA / Disability Form Completion | Medical Information | `intermittentFrequency` | Intermittent Frequency | `text` |  |  |  |
| FMLA / Disability Form Completion | Medical Information | `workRestrictions` | Work/Activity Restrictions | `textarea` |  |  |  |
| FMLA / Disability Form Completion | Completion Status | `formStatus` | Form Status | `select` | Y |  |  |
| FMLA / Disability Form Completion | Completion Status | `faxedTo` | Faxed To (fax number) | `text` |  |  |  |
| FMLA / Disability Form Completion | Completion Status | `faxDate` | Fax Date | `date` |  |  |  |
| FMLA / Disability Form Completion | Completion Status | `adminFee` | Administrative Fee Collected ($) | `number` |  |  |  |
| FMLA / Disability Form Completion | Completion Status | `notes` | Notes | `textarea` |  |  |  |

### FMLA / Disability — `fmla_paperwork_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| FMLA / Short-Term Disability Completion | Patient & Employer | `patientId` | Patient | `typeahead` | Y |  |  |
| FMLA / Short-Term Disability Completion | Patient & Employer | `requestDate` | Request Date | `date` | Y |  |  |
| FMLA / Short-Term Disability Completion | Patient & Employer | `completingProvider` | Completing Provider | `typeahead` | Y |  |  |
| FMLA / Short-Term Disability Completion | Patient & Employer | `formType2` | Form Type | `select` | Y |  |  |
| FMLA / Short-Term Disability Completion | Patient & Employer | `employer` | Employer Name | `text` |  |  |  |
| FMLA / Short-Term Disability Completion | Patient & Employer | `insurer` | Insurer / Carrier (if applicable) | `text` |  |  |  |
| FMLA / Short-Term Disability Completion | Medical Condition | `primaryCondition` | Primary Diagnosis / Condition | `text` | Y |  |  |
| FMLA / Short-Term Disability Completion | Medical Condition | `conditionChronicity` | Condition Chronicity | `select` | Y |  |  |
| FMLA / Short-Term Disability Completion | Medical Condition | `incapacityStart` | Incapacity Start Date | `date` | Y |  |  |
| FMLA / Short-Term Disability Completion | Medical Condition | `estimatedReturn` | Estimated Return to Work Date | `date` |  |  |  |
| FMLA / Short-Term Disability Completion | Medical Condition | `returnRestrictions` | Return to Work Status | `select` |  |  |  |
| FMLA / Short-Term Disability Completion | Medical Condition | `workRestrictions` | Work Restrictions (if returning with restrictions) | `textarea` |  |  |  |
| FMLA / Short-Term Disability Completion | Intermittent Leave (if applicable) | `intermittentLeave` | Intermittent leave requested / authorized | `checkbox` |  |  |  |
| FMLA / Short-Term Disability Completion | Intermittent Leave (if applicable) | `episodeFrequency` | Expected Episode Frequency | `text` |  |  |  |
| FMLA / Short-Term Disability Completion | Intermittent Leave (if applicable) | `episodeDuration` | Episode Duration per Occurrence | `text` |  |  |  |
| FMLA / Short-Term Disability Completion | Clinical Findings | `clinicalJustification` | Clinical Justification | `textarea` | Y |  |  |

### Fee Schedules — `FEE_SCHEDULES`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Fee Schedule | Fee Schedule (ECW-BI-19; PatientChargeDetailsRoutes; GET /api/fee-schedules?practiceId=&payerId=&active=true = list; GET /api/fee-schedules/{id}/rate?cptCode=&modifier= = single rate lookup for override display; fee_schedules table: id/org_id/practice_id/payer_id/name/effective_date/expiry_date/is_default/active; fee_schedule_line_items: id/schedule_id/cpt_code/modifier/rate; payer+practice-scoped fee schedule catalog; sanctioned raw DDL + analytics; show=true admin browsable catalog) | `fsId` | Fee Schedule ID (read-only UUID) | `text` |  |  |  |
| Fee Schedule | Fee Schedule (ECW-BI-19; PatientChargeDetailsRoutes; GET /api/fee-schedules?practiceId=&payerId=&active=true = list; GET /api/fee-schedules/{id}/rate?cptCode=&modifier= = single rate lookup for override display; fee_schedules table: id/org_id/practice_id/payer_id/name/effective_date/expiry_date/is_default/active; fee_schedule_line_items: id/schedule_id/cpt_code/modifier/rate; payer+practice-scoped fee schedule catalog; sanctioned raw DDL + analytics; show=true admin browsable catalog) | `fsName` | Fee Schedule Name (required; e.g. Aetna 2026 Standard) | `text` | Y |  |  |
| Fee Schedule | Fee Schedule (ECW-BI-19; PatientChargeDetailsRoutes; GET /api/fee-schedules?practiceId=&payerId=&active=true = list; GET /api/fee-schedules/{id}/rate?cptCode=&modifier= = single rate lookup for override display; fee_schedules table: id/org_id/practice_id/payer_id/name/effective_date/expiry_date/is_default/active; fee_schedule_line_items: id/schedule_id/cpt_code/modifier/rate; payer+practice-scoped fee schedule catalog; sanctioned raw DDL + analytics; show=true admin browsable catalog) | `fsPracticeId` | Practice ID (optional; null = org-wide schedule) | `text` |  |  |  |
| Fee Schedule | Fee Schedule (ECW-BI-19; PatientChargeDetailsRoutes; GET /api/fee-schedules?practiceId=&payerId=&active=true = list; GET /api/fee-schedules/{id}/rate?cptCode=&modifier= = single rate lookup for override display; fee_schedules table: id/org_id/practice_id/payer_id/name/effective_date/expiry_date/is_default/active; fee_schedule_line_items: id/schedule_id/cpt_code/modifier/rate; payer+practice-scoped fee schedule catalog; sanctioned raw DDL + analytics; show=true admin browsable catalog) | `fsPayerId` | Payer ID (optional; null = all-payer schedule) | `text` |  |  |  |
| Fee Schedule | Fee Schedule (ECW-BI-19; PatientChargeDetailsRoutes; GET /api/fee-schedules?practiceId=&payerId=&active=true = list; GET /api/fee-schedules/{id}/rate?cptCode=&modifier= = single rate lookup for override display; fee_schedules table: id/org_id/practice_id/payer_id/name/effective_date/expiry_date/is_default/active; fee_schedule_line_items: id/schedule_id/cpt_code/modifier/rate; payer+practice-scoped fee schedule catalog; sanctioned raw DDL + analytics; show=true admin browsable catalog) | `fsEffectiveDate` | Effective Date (YYYY-MM-DD; when schedule takes effect) | `text` | Y |  |  |
| Fee Schedule | Fee Schedule (ECW-BI-19; PatientChargeDetailsRoutes; GET /api/fee-schedules?practiceId=&payerId=&active=true = list; GET /api/fee-schedules/{id}/rate?cptCode=&modifier= = single rate lookup for override display; fee_schedules table: id/org_id/practice_id/payer_id/name/effective_date/expiry_date/is_default/active; fee_schedule_line_items: id/schedule_id/cpt_code/modifier/rate; payer+practice-scoped fee schedule catalog; sanctioned raw DDL + analytics; show=true admin browsable catalog) | `fsExpiryDate` | Expiry Date (YYYY-MM-DD; optional; null = no expiry) | `text` |  |  |  |
| Fee Schedule | Fee Schedule (ECW-BI-19; PatientChargeDetailsRoutes; GET /api/fee-schedules?practiceId=&payerId=&active=true = list; GET /api/fee-schedules/{id}/rate?cptCode=&modifier= = single rate lookup for override display; fee_schedules table: id/org_id/practice_id/payer_id/name/effective_date/expiry_date/is_default/active; fee_schedule_line_items: id/schedule_id/cpt_code/modifier/rate; payer+practice-scoped fee schedule catalog; sanctioned raw DDL + analytics; show=true admin browsable catalog) | `fsIsDefault` | Is Default (true/false; default schedule for this payer+practice) | `checkbox` |  |  |  |
| Fee Schedule | Fee Schedule (ECW-BI-19; PatientChargeDetailsRoutes; GET /api/fee-schedules?practiceId=&payerId=&active=true = list; GET /api/fee-schedules/{id}/rate?cptCode=&modifier= = single rate lookup for override display; fee_schedules table: id/org_id/practice_id/payer_id/name/effective_date/expiry_date/is_default/active; fee_schedule_line_items: id/schedule_id/cpt_code/modifier/rate; payer+practice-scoped fee schedule catalog; sanctioned raw DDL + analytics; show=true admin browsable catalog) | `fsActive` | Active (true/false) | `checkbox` |  |  |  |

### Global Alerts — `global_alerts_cf`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Global Alerts & Notices Configuration | Create / Edit Alert | `alertType` | Alert Type | `select` | Y |  |  |
| Global Alerts & Notices Configuration | Create / Edit Alert | `severity` | Severity | `select` | Y |  |  |
| Global Alerts & Notices Configuration | Create / Edit Alert | `alertTitle` | Alert Title | `text` | Y |  |  |
| Global Alerts & Notices Configuration | Create / Edit Alert | `alertBody` | Alert Body | `textarea` | Y |  |  |
| Global Alerts & Notices Configuration | Create / Edit Alert | `targetRoles` | Target Roles (comma-sep) | `text` |  |  |  |
| Global Alerts & Notices Configuration | Create / Edit Alert | `showBanner` | Show as top-of-screen banner | `checkbox` |  |  |  |
| Global Alerts & Notices Configuration | Create / Edit Alert | `requireAcknowledgment` | Require user acknowledgment before proceeding | `checkbox` |  |  |  |
| Global Alerts & Notices Configuration | Create / Edit Alert | `startDate` | Display Start Date | `date` |  |  |  |
| Global Alerts & Notices Configuration | Create / Edit Alert | `endDate` | Display End Date (blank = indefinite) | `date` |  |  |  |
| Global Alerts & Notices Configuration | Create / Edit Alert | `active` | Alert Active | `checkbox` |  |  |  |
| Global Alerts & Notices Configuration | Alert Preview | `previewNote` | Preview Notes | `textarea` |  |  |  |

### Group NPI Rules — `group_npi_rules`

Screen: 2 page(s) · 2 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Group NPI Rules | gnrListSection | `gnrId` | ID | `text` |  |  |  |
| Group NPI Rules | gnrListSection | `gnrGroupNpi` | Group NPI | `text` |  |  |  |
| Group NPI Rules | gnrListSection | `gnrProviderId` | Provider ID | `text` |  |  |  |
| Group NPI Rules | gnrListSection | `gnrFacilityId` | Facility ID | `text` |  |  |  |
| Group NPI Rules | gnrListSection | `gnrPayerId` | Payer ID | `text` |  |  |  |
| Group NPI Rules | gnrListSection | `gnrEffectiveDateFrom` | Effective From | `text` |  |  |  |
| Group NPI Rules | gnrListSection | `gnrEffectiveDateTo` | Effective To | `text` |  |  |  |
| Group NPI Rules | gnrListSection | `gnrActive` | Active | `text` |  |  |  |
| Add Group NPI Rule | gnrCreateSection | `gnrCreateGroupNpi` | Group NPI | `text` | Y |  |  |
| Add Group NPI Rule | gnrCreateSection | `gnrCreateProviderId` | Provider ID (optional) | `text` |  |  |  |
| Add Group NPI Rule | gnrCreateSection | `gnrCreateFacilityId` | Facility ID (optional) | `text` |  |  |  |
| Add Group NPI Rule | gnrCreateSection | `gnrCreatePayerId` | Payer ID (optional) | `text` |  |  |  |
| Add Group NPI Rule | gnrCreateSection | `gnrCreatePracticeId` | Practice ID (optional) | `text` |  |  |  |
| Add Group NPI Rule | gnrCreateSection | `gnrCreateEffectiveDateFrom` | Effective From | `date` |  |  |  |
| Add Group NPI Rule | gnrCreateSection | `gnrCreateEffectiveDateTo` | Effective To | `date` |  |  |  |

### HIPAA Auth / Records — `hipaa_authorization_cf`

Screen: 1 page(s) · 4 section(s) · 20 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| HIPAA Authorization for Release of Medical Records | Patient Identity | `patientId` | Patient | `typeahead` | Y |  |  |
| HIPAA Authorization for Release of Medical Records | Patient Identity | `requestDate` | Request Date | `date` | Y |  |  |
| HIPAA Authorization for Release of Medical Records | Patient Identity | `requestorName` | Requestor Name (if different from patient) | `text` |  |  |  |
| HIPAA Authorization for Release of Medical Records | Patient Identity | `requestorRelationship` | Requestor Relationship | `select` |  |  |  |
| HIPAA Authorization for Release of Medical Records | Patient Identity | `requestorPhone` | Requestor Phone | `text` |  |  |  |
| HIPAA Authorization for Release of Medical Records | Records Requested | `recordType` | Type of Records | `select` | Y |  |  |
| HIPAA Authorization for Release of Medical Records | Records Requested | `dateFrom` | Records From Date | `date` |  |  |  |
| HIPAA Authorization for Release of Medical Records | Records Requested | `dateTo` | Records Through Date | `date` |  |  |  |
| HIPAA Authorization for Release of Medical Records | Records Requested | `specificRecords` | Specific Records Requested | `textarea` |  |  |  |
| HIPAA Authorization for Release of Medical Records | Recipient & Purpose | `recipientName` | Recipient Name / Organization | `text` | Y |  |  |
| HIPAA Authorization for Release of Medical Records | Recipient & Purpose | `recipientAddress` | Recipient Address / Fax | `textarea` |  |  |  |
| HIPAA Authorization for Release of Medical Records | Recipient & Purpose | `purposeOfDisclosure` | Purpose of Disclosure | `select` | Y |  |  |
| HIPAA Authorization for Release of Medical Records | Recipient & Purpose | `expiration` | Authorization Expiration Date | `date` | Y |  |  |
| HIPAA Authorization for Release of Medical Records | Recipient & Purpose | `format` | Delivery Format | `select` |  |  |  |
| HIPAA Authorization for Release of Medical Records | Processing Status | `authorizationVerified` | Authorization verified (signed, dated, non-expired) | `checkbox` |  |  |  |
| HIPAA Authorization for Release of Medical Records | Processing Status | `identityVerified` | Requestor identity verified | `checkbox` |  |  |  |
| HIPAA Authorization for Release of Medical Records | Processing Status | `mentalHealthSeparate` | Sensitive records (MH/SUD/HIV) handled under separate authorization | `checkbox` |  |  |  |
| HIPAA Authorization for Release of Medical Records | Processing Status | `processedBy` | Processed By | `typeahead` |  |  |  |
| HIPAA Authorization for Release of Medical Records | Processing Status | `processedDate` | Records Released Date | `date` |  |  |  |
| HIPAA Authorization for Release of Medical Records | Processing Status | `status` | Request Status | `select` | Y |  |  |
