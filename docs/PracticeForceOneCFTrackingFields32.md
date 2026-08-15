---
title: "PracticeForceOneCFTrackingFields32"
---

# CF Tracking — Field-Level Detail (part 32 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Primary Care**, **Front Office**, **Hospital Medicine**, **Ophthalmology**, **Neonatology**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Primary Care

### URI / Cold — `upper_respiratory_infection_cf`

Screen: 1 page(s) · 3 section(s) · 23 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Upper Respiratory Infection | Symptom Assessment | `symptom_days` | Symptom Duration (days) | `number` |  |  |  |
| Upper Respiratory Infection | Symptom Assessment | `nasal_congestion` | Nasal congestion | `checkbox` |  |  |  |
| Upper Respiratory Infection | Symptom Assessment | `rhinorrhea` | Rhinorrhea (runny nose) | `select` |  |  |  |
| Upper Respiratory Infection | Symptom Assessment | `sore_throat` | Sore throat | `checkbox` |  |  |  |
| Upper Respiratory Infection | Symptom Assessment | `cough` | Cough | `select` |  |  |  |
| Upper Respiratory Infection | Symptom Assessment | `fever` | Fever (>100.4°F) | `checkbox` |  |  |  |
| Upper Respiratory Infection | Symptom Assessment | `temperature` | Temperature (°F) | `number` |  |  |  |
| Upper Respiratory Infection | Symptom Assessment | `myalgia` | Myalgia / body aches | `checkbox` |  |  |  |
| Upper Respiratory Infection | Symptom Assessment | `headache` | Headache | `checkbox` |  |  |  |
| Upper Respiratory Infection | Symptom Assessment | `ear_pain` | Ear pain | `checkbox` |  |  |  |
| Upper Respiratory Infection | Symptom Assessment | `facial_pain` | Facial pressure / sinus pain | `checkbox` |  |  |  |
| Upper Respiratory Infection | Strep Assessment (CENTOR / McIsaac) | `centor_exudate` | Tonsillar exudate | `checkbox` |  |  |  |
| Upper Respiratory Infection | Strep Assessment (CENTOR / McIsaac) | `centor_tender_nodes` | Tender anterior cervical nodes | `checkbox` |  |  |  |
| Upper Respiratory Infection | Strep Assessment (CENTOR / McIsaac) | `centor_fever_hx` | Fever history (>38°C) | `checkbox` |  |  |  |
| Upper Respiratory Infection | Strep Assessment (CENTOR / McIsaac) | `centor_no_cough` | No cough | `checkbox` |  |  |  |
| Upper Respiratory Infection | Strep Assessment (CENTOR / McIsaac) | `rapid_strep` | Rapid Strep Test | `select` |  |  |  |
| Upper Respiratory Infection | Strep Assessment (CENTOR / McIsaac) | `covid_flu_tested` | COVID-19 / Influenza Testing | `select` |  |  |  |
| Upper Respiratory Infection | Plan | `diagnosis` | Final Diagnosis | `select` |  |  |  |
| Upper Respiratory Infection | Plan | `antibiotics` | Antibiotics prescribed (documented indication) | `checkbox` |  |  |  |
| Upper Respiratory Infection | Plan | `antibiotic_name` | Antibiotic and Duration (if prescribed) | `text` |  |  |  |
| Upper Respiratory Infection | Plan | `antiviral` | Antiviral prescribed (oseltamivir/nirmatrelvir-ritonavir) | `checkbox` |  |  |  |
| Upper Respiratory Infection | Plan | `symptomatic_treatment` | Symptomatic Treatment Recommended | `textarea` |  |  |  |
| Upper Respiratory Infection | Plan | `return_precautions` | Return Precautions | `text` |  |  |  |

### UTI — `urinary_tract_infection_cf`

Screen: 1 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Urinary Tract Infection | Symptoms | `dysuria` | Dysuria (pain with urination) | `checkbox` |  |  |  |
| Urinary Tract Infection | Symptoms | `frequency` | Urinary frequency | `checkbox` |  |  |  |
| Urinary Tract Infection | Symptoms | `urgency` | Urinary urgency | `checkbox` |  |  |  |
| Urinary Tract Infection | Symptoms | `hematuria` | Gross hematuria | `checkbox` |  |  |  |
| Urinary Tract Infection | Symptoms | `suprapubic_pain` | Suprapubic / pelvic pain | `checkbox` |  |  |  |
| Urinary Tract Infection | Symptoms | `flank_pain` | Flank / CVA pain (upper tract concern) | `checkbox` |  |  |  |
| Urinary Tract Infection | Symptoms | `fever` | Fever (>100.4°F) | `checkbox` |  |  |  |
| Urinary Tract Infection | Symptoms | `nausea_vomiting` | Nausea / vomiting | `checkbox` |  |  |  |
| Urinary Tract Infection | Symptoms | `days_of_symptoms` | Duration of Symptoms (days) | `number` |  |  |  |
| Urinary Tract Infection | Workup | `ua_performed` | Urinalysis (UA) performed | `checkbox` |  |  |  |
| Urinary Tract Infection | Workup | `ua_leukocyte_esterase` | Leukocyte Esterase | `select` |  |  |  |
| Urinary Tract Infection | Workup | `ua_nitrites` | Nitrites | `select` |  |  |  |
| Urinary Tract Infection | Workup | `ua_wbc` | UA WBC (per HPF) | `text` |  |  |  |
| Urinary Tract Infection | Workup | `urine_culture` | Urine Culture | `select` |  |  |  |
| Urinary Tract Infection | Workup | `organism` | Organism / Sensitivity (if culture done) | `text` |  |  |  |
| Urinary Tract Infection | Plan | `uti_type` | UTI Classification | `select` |  |  |  |
| Urinary Tract Infection | Plan | `antibiotic` | Antibiotic Treatment | `select` |  |  |  |
| Urinary Tract Infection | Plan | `phenazopyridine` | Phenazopyridine for symptom relief (max 2 days) | `checkbox` |  |  |  |
| Urinary Tract Infection | Plan | `hospital_admission` | Hospital admission required (severe pyelonephritis / sepsis) | `checkbox` |  |  |  |

## Front Office

### Appointment Queue — `appointment_queue_cf`

Screen: 2 page(s) · 2 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Bump List | Bump Entry | `patientId` | Patient ID | `text` |  | patientId |  |
| Bump List | Bump Entry | `providerId` | Provider ID | `text` |  | providerId |  |
| Bump List | Bump Entry | `visitType` | Visit Type | `text` |  | visitType |  |
| Bump List | Bump Entry | `bumpedReason` | Bumped Reason | `textarea` |  | bumpedReason |  |
| Bump List | Bump Entry | `status` | Status | `select` |  | status |  |
| Bump List | Bump Entry | `rescheduledTo` | Rescheduled To (Appt ID) | `text` |  | rescheduledTo |  |
| Bump List | Bump Entry | `notes` | Notes | `textarea` |  | notes |  |
| ASAP List | ASAP Entry | `patientId` | Patient ID | `text` |  | patientId |  |
| ASAP List | ASAP Entry | `preferredProviderId` | Preferred Provider | `text` |  | preferredProviderId |  |
| ASAP List | ASAP Entry | `visitType` | Visit Type | `text` |  | visitType |  |
| ASAP List | ASAP Entry | `preferredTimeRange` | Preferred Time Range | `text` |  | preferredTimeRange |  |
| ASAP List | ASAP Entry | `status` | Status | `select` |  | status |  |
| ASAP List | ASAP Entry | `offeredSlot` | Offered Slot | `text` |  | offeredSlot |  |
| ASAP List | ASAP Entry | `notes` | Notes | `textarea` |  | notes |  |

### Appointments — `appointments_register_cf`

Screen: 0 page(s) · 0 section(s) · 0 field(s) · UI STUB · DB BUILT · tables `APPOINTMENTS`, `APPOINTMENT_WAITLIST`, `AUDIT_LOG`, `CALENDAR_RESOURCE_BLOCKS`, `ENCOUNTERS`, `PORTAL_CHECK_IN_QUESTIONNAIRES`, `PRACTICES`, `PROVIDER_AVAILABILITY_TEMPLATES`

_No fields declared (nav stub)._

### Check-In — `check_in_cf`

Screen: 1 page(s) · 4 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Check-In | Patient Verification | `patientId` | Patient | `typeahead` | Y |  |  |
| Patient Check-In | Patient Verification | `patientDob` | Date of Birth (verify) | `date` | Y |  |  |
| Patient Check-In | Patient Verification | `appointmentId` | Appointment ID | `text` |  |  |  |
| Patient Check-In | Patient Verification | `appointmentTime` | Scheduled Time | `text` |  |  |  |
| Patient Check-In | Insurance Verification | `primaryInsurance` | Primary Insurance | `text` |  |  |  |
| Patient Check-In | Insurance Verification | `insuranceMemberId` | Member ID | `text` |  |  |  |
| Patient Check-In | Insurance Verification | `copayDue` | Copay Due ($) | `number` |  |  |  |
| Patient Check-In | Insurance Verification | `eligibilityStatus` | Eligibility Status | `select` |  |  |  |
| Patient Check-In | Insurance Verification | `eligibilityNotes` | Eligibility Notes | `textarea` |  |  |  |
| Patient Check-In | Visit Information | `chiefComplaint` | Chief Complaint / Reason for Visit | `textarea` | Y |  |  |
| Patient Check-In | Visit Information | `urgencyLevel` | Urgency | `select` |  |  |  |
| Patient Check-In | Visit Information | `appointmentType` | Visit Type | `select` |  |  |  |
| Patient Check-In | Consents & Acknowledgements | `hipaaAck` | Patient received/reviewed HIPAA Notice of Privacy Practices | `checkbox` |  |  |  |
| Patient Check-In | Consents & Acknowledgements | `financialAck` | Patient acknowledges financial responsibility / copay obligations | `checkbox` |  |  |  |
| Patient Check-In | Consents & Acknowledgements | `treatmentConsent` | Patient consents to treatment | `checkbox` |  |  |  |
| Patient Check-In | Consents & Acknowledgements | `consentNotes` | Consent Notes | `textarea` |  |  |  |
| Patient Check-In | Consents & Acknowledgements | `checkInTime` | Check-In Time | `text` |  |  |  |
| Patient Check-In | Consents & Acknowledgements | `checkInStatus` | Check-In Status | `select` |  |  |  |

### Demographics Audit Log — `demographics_log_cf`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `ENCOUNTERS`, `PATIENTS`, `PROVIDERS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Demographics Change Log | Change Entry | `fieldName` | Field | `text` |  | fieldName |  |
| Demographics Change Log | Change Entry | `oldValue` | Previous Value | `text` |  | oldValue |  |
| Demographics Change Log | Change Entry | `newValue` | New Value | `text` |  | newValue |  |
| Demographics Change Log | Change Entry | `changeSource` | Source | `text` |  | changeSource |  |
| Demographics Change Log | Change Entry | `changedByName` | Changed By | `text` |  | changedByName |  |
| Demographics Change Log | Change Entry | `changedAt` | When | `text` |  | changedAt |  |

### Document Verifications — `patient_doc_verifications_cf`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Document Verifications | Documents | `docType` | Document Type | `text` |  | docType |  |
| Document Verifications | Documents | `status` | Status | `text` |  | status |  |
| Document Verifications | Documents | `expiryStatus` | Expiry Status | `text` |  | expiryStatus |  |
| Document Verifications | Documents | `verifiedAt` | Verified At | `text` |  | verifiedAt |  |
| Document Verifications | Documents | `expiresOn` | Expires On | `text` |  | expiresOn |  |
| Document Verifications | Documents | `notes` | Notes | `text` |  | notes |  |
| Document Verifications | Documents | `appointmentId` | Appointment ID | `text` |  | appointmentId |  |
| Document Verifications | Documents | `updatedAt` | Updated | `text` |  | updatedAt |  |

### Family Booking — `family_booking_cf`

Screen: 1 page(s) · 2 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `ENCOUNTERS`, `PATIENTS`, `PROVIDERS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Family / Household Booking | Anchor Appointment | `patientId` | Patient ID | `text` |  | patientId |  |
| Family / Household Booking | Anchor Appointment | `visitType` | Visit Type | `text` |  | visitType |  |
| Family / Household Booking | Anchor Appointment | `date` | Date | `date` |  | date |  |
| Family / Household Booking | Household Members | `contactName` | Member Name | `text` |  | contactName |  |
| Family / Household Booking | Household Members | `relationship` | Relationship | `text` |  | relationship |  |
| Family / Household Booking | Household Members | `linkedPatientName` | Linked Patient | `text` |  | linkedPatientName |  |
| Family / Household Booking | Household Members | `linkedDob` | Date of Birth | `date` |  | linkedDob |  |

### Patient Enrollment — `patient_enrollment_cf`

Screen: 2 page(s) · 5 section(s) · 37 field(s) · UI LIVE · DB MISSING

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Enrollment — Personal Information | Personal Information | `firstName` | First Name | `text` | Y |  |  |
| Enrollment — Personal Information | Personal Information | `lastName` | Last Name | `text` | Y |  |  |
| Enrollment — Personal Information | Personal Information | `middleName` | Middle Name | `text` |  |  |  |
| Enrollment — Personal Information | Personal Information | `dob` | Date of Birth | `date` | Y |  |  |
| Enrollment — Personal Information | Personal Information | `gender` | Sex (biological) | `select` | Y |  |  |
| Enrollment — Personal Information | Personal Information | `genderIdentity` | Gender Identity (optional) | `select` |  |  |  |
| Enrollment — Personal Information | Personal Information | `ssn` | SSN (last 4) | `text` |  |  |  |
| Enrollment — Personal Information | Personal Information | `maritalStatus` | Marital Status | `select` |  |  |  |
| Enrollment — Personal Information | Personal Information | `race` | Race (Meaningful Use) | `select` |  |  |  |
| Enrollment — Personal Information | Personal Information | `ethnicity` | Ethnicity (Meaningful Use) | `select` |  |  |  |
| Enrollment — Personal Information | Personal Information | `preferredLanguage` | Preferred Language | `text` |  |  |  |
| Enrollment — Personal Information | Contact Information | `phone` | Phone (cell) | `tel` | Y |  |  |
| Enrollment — Personal Information | Contact Information | `phoneHome` | Phone (home) | `tel` |  |  |  |
| Enrollment — Personal Information | Contact Information | `phoneWork` | Phone (work) | `tel` |  |  |  |
| Enrollment — Personal Information | Contact Information | `email` | Email | `email` | Y |  |  |
| Enrollment — Personal Information | Contact Information | `address1` | Address Line 1 | `text` | Y |  |  |
| Enrollment — Personal Information | Contact Information | `address2` | Address Line 2 | `text` |  |  |  |
| Enrollment — Personal Information | Contact Information | `city` | City | `text` | Y |  |  |
| Enrollment — Personal Information | Contact Information | `state` | State | `select` |  |  |  |
| Enrollment — Personal Information | Contact Information | `zip` | ZIP Code | `text` | Y |  |  |
| Enrollment — Insurance | Primary Insurance | `primaryInsurer` | Primary Payer | `typeahead` | Y |  |  |
| Enrollment — Insurance | Primary Insurance | `primaryMemberId` | Member ID / Policy Number | `text` | Y |  |  |
| Enrollment — Insurance | Primary Insurance | `primaryGroupNumber` | Group Number | `text` |  |  |  |
| Enrollment — Insurance | Primary Insurance | `primaryEffective` | Effective Date | `date` |  |  |  |
| Enrollment — Insurance | Primary Insurance | `primaryTermDate` | Term Date | `date` |  |  |  |
| Enrollment — Insurance | Primary Insurance | `primaryRelationship` | Patient Relationship to Subscriber | `select` |  |  |  |
| Enrollment — Insurance | Primary Insurance | `primarySubscriberName` | Subscriber Name (if not self) | `text` |  |  |  |
| Enrollment — Insurance | Primary Insurance | `primarySubscriberDob` | Subscriber DOB (if not self) | `date` |  |  |  |
| Enrollment — Insurance | Secondary Insurance (if applicable) | `secondaryInsurer` | Secondary Payer | `typeahead` |  |  |  |
| Enrollment — Insurance | Secondary Insurance (if applicable) | `secondaryMemberId` | Secondary Member ID | `text` |  |  |  |
| Enrollment — Insurance | Secondary Insurance (if applicable) | `secondaryGroupNumber` | Secondary Group Number | `text` |  |  |  |
| Enrollment — Insurance | Consents | `consentTreatment` | Consent to Treatment signed | `checkbox` | Y |  |  |
| Enrollment — Insurance | Consents | `consentHipaa` | HIPAA Notice of Privacy Practices signed | `checkbox` | Y |  |  |
| Enrollment — Insurance | Consents | `consentFinancial` | Financial Responsibility agreement signed | `checkbox` |  |  |  |
| Enrollment — Insurance | Consents | `portalConsent` | Patient Portal enrollment consent | `checkbox` |  |  |  |
| Enrollment — Insurance | Consents | `hipaaReleaseToFamilyNames` | HIPAA authorized to release to (family members) | `text` |  |  |  |
| Enrollment — Insurance | Consents | `enrollmentDate` | Enrollment Date | `date` | Y |  |  |

### Patient Readiness — `patient_readiness_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `PATIENTS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Registration Readiness | Readiness Checklist | `label` | Item | `text` |  | label |  |
| Registration Readiness | Readiness Checklist | `status` | Status | `text` |  | status |  |
| Registration Readiness | Readiness Checklist | `detail` | Detail | `text` |  | detail |  |
| Registration Readiness | Readiness Checklist | `key` | Key | `text` |  | key |  |

### Patient Registration — `patient_registration_cf`

Screen: 6 page(s) · 13 section(s) · 58 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Demographics | Name | `last_name` | Last Name | `text` |  | last_name |  |
| Demographics | Name | `first_name` | First Name | `text` |  | first_name |  |
| Demographics | Name | `middle_name` | Middle Name | `text` |  | middle_name |  |
| Demographics | Name | `suffix` | Suffix | `text` |  | suffix |  |
| Demographics | Personal | `date_of_birth` | Date of Birth | `text` |  | date_of_birth |  |
| Demographics | Personal | `gender` | Gender | `text` |  | gender |  |
| Demographics | Personal | `marital_status` | Marital Status | `text` |  | marital_status |  |
| Demographics | Personal | `mrn` | MRN | `text` |  | mrn |  |
| Demographics | Personal | `account_number` | Account # | `text` |  | account_number |  |
| Demographics | Personal | `ssn_last_four` | SSN Last 4 | `text` |  | ssn_last_four |  |
| Demographics | Provider | `preferred_provider_name` | Preferred Provider | `text` |  | preferred_provider_name |  |
| Demographics | Provider | `primary_care_physician` | Primary Care Physician | `text` |  | primary_care_physician |  |
| Contact | Address | `address_line1` | Address Line 1 | `text` |  | address_line1 |  |
| Contact | Address | `address_line2` | Address Line 2 | `text` |  | address_line2 |  |
| Contact | Address | `city` | City | `text` |  | city |  |
| Contact | Address | `state` | State | `text` |  | state |  |
| Contact | Address | `zip_code` | Zip Code | `text` |  | zip_code |  |
| Contact | Phone / Email | `phone_cell` | Cell Phone | `text` |  | phone_cell |  |
| Contact | Phone / Email | `phone_home` | Home Phone | `text` |  | phone_home |  |
| Contact | Phone / Email | `phone_work` | Work Phone | `text` |  | phone_work |  |
| Contact | Phone / Email | `email` | Email | `text` |  | email |  |
| Contact | Phone / Email | `preferred_appointment_time` | Preferred Appt Time | `text` |  | preferred_appointment_time |  |
| Contact | Phone / Email | `preferred_language` | Preferred Language | `text` |  | preferred_language |  |
| Contact | Emergency Contact | `emergency_contact_name` | Name | `text` |  | emergency_contact_name |  |
| Contact | Emergency Contact | `emergency_contact_phone` | Phone | `text` |  | emergency_contact_phone |  |
| Contact | Emergency Contact | `emergency_contact_relationship` | Relationship | `text` |  | emergency_contact_relationship |  |
| Contact | Employment | `employer` | Employer | `text` |  | employer |  |
| Contact | Employment | `occupation` | Occupation | `text` |  | occupation |  |
| Insurance | Primary Insurance | `insurancePlanName` | Plan Name | `text` |  | insurancePlanName |  |
| Insurance | Primary Insurance | `memberId` | Member ID | `text` |  | memberId |  |
| Insurance | Primary Insurance | `groupNumber` | Group Number | `text` |  | groupNumber |  |
| Insurance | Primary Insurance | `copay` | Copay | `text` |  | copay |  |
| Insurance | Primary Insurance | `deductible` | Deductible | `text` |  | deductible |  |
| Insurance | Primary Insurance | `effectiveDate` | Effective Date | `text` |  | effectiveDate |  |
| Medical History | Medical Conditions | `medical_history` | Medical History | `textarea` |  | medical_history |  |
| Medical History | Medical Conditions | `medical_conditions` | Current Conditions | `textarea` |  | medical_conditions |  |
| Medical History | Medical Conditions | `surgical_history` | Surgical History | `textarea` |  | surgical_history |  |
| Medical History | Medical Conditions | `family_history` | Family History | `textarea` |  | family_history |  |
| Medical History | Medical Conditions | `allergies_text` | Allergies (free text) | `textarea` |  | allergies_text |  |
| Social History | Social Determinants of Health | `race` | Race | `text` |  | race |  |
| Social History | Social Determinants of Health | `ethnicity` | Ethnicity | `text` |  | ethnicity |  |
| Social History | Social Determinants of Health | `living_situation` | Living Situation | `text` |  | living_situation |  |
| Social History | Social Determinants of Health | `veteran_status` | Veteran Status | `text` |  | veteran_status |  |
| Social History | Social Determinants of Health | `religious_preference` | Religious Preference | `text` |  | religious_preference |  |
| Social History | Substance Use | `smoking_status` | Smoking Status | `text` |  | smoking_status |  |
| Social History | Substance Use | `alcohol_use` | Alcohol Use | `text` |  | alcohol_use |  |
| Social History | Substance Use | `drug_use` | Drug Use | `text` |  | drug_use |  |
| Consents | Consent & HIPAA | `consent_to_treat` | Consent to Treat | `text` |  | consent_to_treat |  |
| Consents | Consent & HIPAA | `hipaa_acknowledgement` | HIPAA Acknowledgement | `text` |  | hipaa_acknowledgement |  |
| Consents | Consent & HIPAA | `consent_to_share` | Consent to Share | `text` |  | consent_to_share |  |
| Consents | Consent & HIPAA | `consent_financial_responsibility` | Financial Responsibility | `text` |  | consent_financial_responsibility |  |
| Consents | Consent & HIPAA | `release_of_information` | Release of Information | `text` |  | release_of_information |  |
| Consents | Consent & HIPAA | `assignment_of_benefits` | Assignment of Benefits | `text` |  | assignment_of_benefits |  |
| Consents | Consent & HIPAA | `telehealth_consent` | Telehealth Consent | `text` |  | telehealth_consent |  |
| Consents | Advance Directives | `advance_directives` | Advance Directives | `text` |  | advance_directives |  |
| Consents | Advance Directives | `living_will` | Living Will | `text` |  | living_will |  |
| Consents | Advance Directives | `healthcare_surrogate` | Healthcare Surrogate | `text` |  | healthcare_surrogate |  |
| Consents | Advance Directives | `power_of_attorney` | Power of Attorney | `text` |  | power_of_attorney |  |

### Portal Messages — `patient_portal_messages_cf`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `ORGANIZATIONS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Portal Secure Messaging | Inbox Filter | `filterStatus` | Status | `select` |  |  |  |
| Patient Portal Secure Messaging | Inbox Filter | `filterMessageType` | Message Type | `select` |  |  |  |
| Patient Portal Secure Messaging | Inbox Filter | `filterPatientId` | Filter by Patient | `typeahead` |  |  |  |
| Patient Portal Secure Messaging | Inbox Filter | `filterAssignedTo` | Assigned To | `typeahead` |  |  |  |
| Patient Portal Secure Messaging | Compose / Reply | `toPatientId` | To (Patient) | `typeahead` | Y |  |  |
| Patient Portal Secure Messaging | Compose / Reply | `subject` | Subject | `text` | Y |  |  |
| Patient Portal Secure Messaging | Compose / Reply | `composeMessageType` | Message Type | `select` |  |  |  |
| Patient Portal Secure Messaging | Compose / Reply | `messageBody` | Message | `textarea` | Y |  |  |
| Patient Portal Secure Messaging | Compose / Reply | `highPriority` | High Priority | `checkbox` |  |  |  |
| Patient Portal Secure Messaging | Compose / Reply | `attachResultsFlag` | Attach relevant test results to this message | `checkbox` |  |  |  |
| Patient Portal Secure Messaging | Compose / Reply | `fromProvider` | From (Provider / Staff) | `typeahead` |  |  |  |

### Referrals — `referrals_cf`

Screen: 1 page(s) · 6 section(s) · 36 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Referral | Referral | `patientId` | Patient | `lookup` | Y |  |  |
| Referral | Referral | `referralType` | Type | `select` |  |  |  |
| Referral | Referral | `priority` | Priority | `select` |  |  |  |
| Referral | Referral | `specialty` | Specialty | `text` | Y |  |  |
| Referral | Referral | `referredTo` | Referred To (provider/facility) | `text` |  |  |  |
| Referral | Referral | `orderingProviderId` | Referring Provider | `lookup` |  |  |  |
| Referral | Referral | `referralDate` | Referral Date | `date` |  |  |  |
| Referral | Referral | `status` | Status | `select` |  |  |  |
| Referral | Referral | `authNumber` | Auth # | `text` |  |  |  |
| Referral | Referral | `visitsAuthorized` | Visits Authorized | `number` |  |  |  |
| Referral | Referral | `reason` | Reason for Referral | `textarea` |  |  |  |
| Referral | Direction & Source | `direction` | Direction | `select` |  |  |  |
| Referral | Direction & Source | `referralSource` | Referring Source (if inbound) | `text` |  |  |  |
| Referral | Direction & Source | `inboundReason` | Reason for Referral (from source) | `textarea` |  |  |  |
| Referral | Direction & Source | `inboundUrgency` | Urgency | `select` |  |  |  |
| Referral | Direction & Source | `insuranceAuthRequired` | Insurance Auth Required | `checkbox` |  |  |  |
| Referral | Referral Outcome Tracking | `outcomeStatus` | Outcome Status | `select` |  |  |  |
| Referral | Referral Outcome Tracking | `outcomeDate` | Outcome Date | `date` |  |  |  |
| Referral | Referral Outcome Tracking | `specialistConsultNote` | Specialist Consult Summary | `textarea` |  |  |  |
| Referral | Referral Outcome Tracking | `nonComplianceReason` | Non-Compliance Reason | `select` |  |  |  |
| Referral | Referral Outcome Tracking | `loopClosed` | Referral Loop Closed | `checkbox` |  |  |  |
| Referral | Referral Outcome Tracking | `loopClosedDate` | Loop Closed Date | `date` |  |  |  |
| Referral | Attachment Bundle & P2P Exchange (ECW-RF-7) | `ccdGenerated` | CCD Included in Bundle | `checkbox` |  |  |  |
| Referral | Attachment Bundle & P2P Exchange (ECW-RF-7) | `ccdGeneratedDate` | CCD Generated Date | `date` |  |  |  |
| Referral | Attachment Bundle & P2P Exchange (ECW-RF-7) | `attachmentList` | Attached Documents (comma-sep) | `text` |  |  |  |
| Referral | Attachment Bundle & P2P Exchange (ECW-RF-7) | `transmissionMethod` | Transmission Method | `select` |  |  |  |
| Referral | Attachment Bundle & P2P Exchange (ECW-RF-7) | `transmissionDate` | Transmitted Date | `date` |  |  |  |
| Referral | Attachment Bundle & P2P Exchange (ECW-RF-7) | `transmissionConfirmation` | Transmission Confirmation # | `text` |  |  |  |
| Referral | Attachment Bundle & P2P Exchange (ECW-RF-7) | `attachmentNotes` | Attachment Notes | `textarea` |  |  |  |
| Referral | Referral Audit Trail (ECW-RF-4) | `deletedAt` | Deleted At (if soft-deleted) | `text` |  |  |  |
| Referral | Referral Audit Trail (ECW-RF-4) | `deletedBy` | Deleted By | `text` |  |  |  |
| Referral | Referral Audit Trail (ECW-RF-4) | `deletionReason` | Deletion Reason | `select` |  |  |  |
| Referral | Referral Audit Trail (ECW-RF-4) | `auditNote` | Audit Note | `textarea` |  |  |  |
| Referral | Duplicate Detection (ECW-RF-6) | `dupCheckStatus` | Duplicate Check Status | `select` |  |  |  |
| Referral | Duplicate Detection (ECW-RF-6) | `existingReferralId` | Existing Referral ID (if dup) | `text` |  |  |  |
| Referral | Duplicate Detection (ECW-RF-6) | `dupCheckNote` | Duplicate Check Note | `textarea` |  |  |  |

### Today's Office Visits — `office_visits_cf`

Screen: 1 page(s) · 1 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `PATIENTS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Visit Detail | Visit Information | `patientName` | Patient | `text` |  | patientName |  |
| Visit Detail | Visit Information | `startAt` | Start Time | `text` |  | startAt |  |
| Visit Detail | Visit Information | `endAt` | End Time | `text` |  | endAt |  |
| Visit Detail | Visit Information | `durationMinutes` | Duration (min) | `text` |  | durationMinutes |  |
| Visit Detail | Visit Information | `visitReason` | Visit Reason | `text` |  | visitReason |  |
| Visit Detail | Visit Information | `appointmentType` | Appt Type | `text` |  | appointmentType |  |
| Visit Detail | Visit Information | `status` | Status | `text` |  | status |  |
| Visit Detail | Visit Information | `stage` | Stage | `text` |  | stage |  |
| Visit Detail | Visit Information | `stageSince` | Stage Since | `text` |  | stageSince |  |
| Visit Detail | Visit Information | `room` | Room | `text` |  | room |  |
| Visit Detail | Visit Information | `arrivedAt` | Arrived At | `text` |  | arrivedAt |  |

### Tracking Board — `tracking_board_cf`

Screen: 1 page(s) · 1 section(s) · 3 field(s) · UI LIVE · DB BUILT · tables `PATIENTS`, `PRACTICES`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Tracking Board - Today's Patient Flow | Stage | `stage` | Stage | `text` |  | stage |  |
| Tracking Board - Today's Patient Flow | Stage | `count` | Count | `number` |  | count |  |
| Tracking Board - Today's Patient Flow | Stage | `label` | Label | `text` |  | label |  |

### Visit Status Tracker — `patient_visit_status_cf`

Screen: 2 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Current Visit Status | Current Status | `current` | Current Status | `text` |  | current |  |
| Current Visit Status | Current Status | `currentRoom` | Current Room | `text` |  | currentRoom |  |
| Status History | History | `createdAt` | Time | `text` |  | createdAt |  |
| Status History | History | `status` | Status | `text` |  | status |  |
| Status History | History | `room` | Room | `text` |  | room |  |
| Status History | History | `note` | Note | `text` |  | note |  |

### Web Encounters — `web_encounters_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `ORGANIZATIONS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Web Encounters & Call-Back Queue | Queue Filters | `status` | Status Filter | `select` |  |  |  |
| Web Encounters & Call-Back Queue | Queue Filters | `practiceId` | Practice ID | `text` |  |  |  |
| Web Encounters & Call-Back Queue | Create Web Encounter | `patientId` | Patient | `typeahead` | Y |  |  |
| Web Encounters & Call-Back Queue | Create Web Encounter | `reason` | Reason / Message | `textarea` | Y |  |  |
| Web Encounters & Call-Back Queue | Create Web Encounter | `encounterChannel` | Channel | `select` |  |  |  |
| Web Encounters & Call-Back Queue | Create Web Encounter | `channelPreference` | Preferred Response Channel | `select` |  |  |  |
| Web Encounters & Call-Back Queue | Create Web Encounter | `highPriority` | High Priority / Urgent | `checkbox` |  |  |  |
| Web Encounters & Call-Back Queue | Create Web Encounter | `secureMessageFlag` | Contains Secure Message / PHI | `checkbox` |  |  |  |
| Web Encounters & Call-Back Queue | Create Web Encounter | `assignedTo` | Assign To | `typeahead` |  |  |  |
| Web Encounters & Call-Back Queue | Call-Back Request (Call-Me-Now) | `cbPatientId` | Patient | `typeahead` | Y |  |  |
| Web Encounters & Call-Back Queue | Call-Back Request (Call-Me-Now) | `cbReason` | Reason for Call-Back | `textarea` | Y |  |  |
| Web Encounters & Call-Back Queue | Call-Back Request (Call-Me-Now) | `cbPreferredTime` | Preferred Time | `text` |  |  |  |
| Web Encounters & Call-Back Queue | Call-Back Request (Call-Me-Now) | `cbPreferredPhone` | Preferred Phone Number | `tel` |  |  |  |

## Hospital Medicine

### Daily Progress Note — `hospitalist_daily_progress_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Daily Progress Note | Subjective | `interval` | Interval History (overnight events, patient-reported symptoms, nursing notes) | `textarea` |  |  |  |
| Daily Progress Note | Objective | `vitals` | Vitals (Tmax, BP range, HR, RR, SpO2) | `text` |  |  |  |
| Daily Progress Note | Objective | `io` | I/O (24-hour — intake, urine output, net) | `text` |  |  |  |
| Daily Progress Note | Objective | `exam_interval` | Interval Physical Exam (changes from prior; focused on active problems) | `textarea` |  |  |  |
| Daily Progress Note | Objective | `labs_results` | Labs / Imaging Results (relevant intervals, new findings) | `textarea` |  |  |  |
| Daily Progress Note | Assessment and Plan | `problems` | Problem-Based Assessment and Plan (numbered — include all active issues) | `textarea` |  |  |  |
| Daily Progress Note | Assessment and Plan | `discharge_readiness` | Discharge Readiness | `select` |  |  |  |
| Daily Progress Note | Assessment and Plan | `discharge_barriers` | Remaining Barriers to Discharge | `text` |  |  |  |

### Delirium (Advanced Management) — `hospitalist_delirium_depth_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Delirium — CAM, PADIS, Antipsychotics, Non-Pharm Bundles | Delirium Assessment and Subtypes | `cam` | CAM and CAM-ICU Assessment Tools (DELIRIUM DEFINITION: acute brain dysfunction; INATTENTION + ALTERED CONSCIOUSNESS + FLUCTUATING COURSE + DISORGANIZED THINKING; PREVALENCE: 14-56% hospitalized elderly; up to 80% in ICU; ASSOCIATED: increased mortality, LOS, nursing home placement; LONG-TERM COGNITIVE IMPAIRMENT; CONFUSION ASSESSMENT METHOD (CAM): FEATURE 1: Acute onset + fluctuating course; FEATURE 2: Inattention (serial 7s, months backward); FEATURE 3: Disorganized thinking; FEATURE 4: Altered level of consciousness; CAM POSITIVE: Feature 1 + 2 + (3 OR 4); SENSITIVITY 94%, SPECIFICITY 89%; CAM-ICU: modified for ventilated patients; RASS (Richmond Agitation-Sedation Scale) + CAM-ICU features; STEP 1: RASS not -4 or -5; STEP 2: CAM-ICU features; POSITIVE if features 1+2 + (3 or 4); VALIDATED in ICU; 3D-CAM: 3-minute version; rapid bedside; bCAM: brief CAM for ED; DELIRIUM SUBTYPES: HYPERACTIVE: agitation; restlessness; pulling lines; most recognized; 25% of delirium; HYPOACTIVE: lethargy; withdrawal; inattention; most common (50%); OFTEN MISSED; worse prognosis; MIXED: 25%; DSM-5 CRITERIA: 5 domains: disturbed consciousness, cognitive change, acute onset + fluctuating, medical etiology, NOT explained by dementia; DIFFERENTIAL: DEMENTIA (gradual onset; not fluctuating; attention often preserved); PSYCHIATRIC (psychosis: clear consciousness); SUNDOWNING: evening worsening + lucid daytime | `text` |  |  |  |
| Delirium — CAM, PADIS, Antipsychotics, Non-Pharm Bundles | Delirium Assessment and Subtypes | `etiology` | Delirium Etiology Mnemonic and Risk Factors | `select` |  |  |  |
| Delirium — CAM, PADIS, Antipsychotics, Non-Pharm Bundles | Pharmacologic and Non-Pharmacologic Management | `pharm` | Antipsychotics in Delirium — Evidence and PADIS Guidelines (PADIS GUIDELINES 2018 (PAIN, AGITATION, DELIRIUM, IMMOBILITY, SLEEP): ANALGESIA-FIRST APPROACH: treat pain before sedation; SEDATION: minimize; RASS 0 to -2 (light sedation) target (vs. deep: RASS -3 to -5); DAILY AWAKENING TRIALS: paired SAT + SBT; SEDATION AGENTS: PROPOFOL (fast on/off; metabolic acidosis long-term); DEXMEDETOMIDINE (alpha-2 agonist; less delirium than benzos: MENDS2 trial; bradycardia/hypotension); BENZOS: avoid (precipitate/worsen delirium); USE: alcohol/benzo withdrawal; ANTIPSYCHOTICS FOR DELIRIUM: HOPE-ICU TRIAL: haloperidol vs. placebo: NO DIFFERENCE in delirium-free days; MIND-USA TRIAL: haloperidol or ziprasidone vs. placebo: NO DIFFERENCE; CURRENT EVIDENCE: ANTIPSYCHOTICS DO NOT REDUCE: delirium duration, severity, or mortality in non-agitated patients; HALOPERIDOL: historical standard; IV 0.5-2 mg Q4-6h; STILL USED for agitation control (SYMPTOM management — not preventing delirium); QTc monitoring; ATYPICAL ANTIPSYCHOTICS (quetiapine, olanzapine, risperidone): AVOID in ICU per PADIS (no benefit on delirium outcomes); QUETIAPINE: sleep; anxiety; hyperactive; RESERVED for agitation when non-pharmacologic fails; CAUTION: QTc, falls, sedation; HALOPERIDOL CONTRAINDICATION: Parkinson disease (severe EPS); DLB (lethal sensitivity); BENZOS GENERALLY AVOIDED EXCEPT: alcohol/benzo withdrawal; severe agitation (CIWA >20); mechanical ventilation; ALCOHOL WITHDRAWAL DELIRIUM TREMENS: benzos (lorazepam, diazepam); SYMPTOM-TRIGGERED: CIWA protocol; phenobarbital adjunct | `text` |  |  |  |
| Delirium — CAM, PADIS, Antipsychotics, Non-Pharm Bundles | Pharmacologic and Non-Pharmacologic Management | `prevention` | Non-Pharmacologic Bundles and Delirium Transition Outcomes | `select` |  |  |  |

### Delirium (CAM Assessment) — `hospital_medicine_delirium_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Delirium — Assessment, Prevention, and Treatment | CAM Diagnostic Algorithm | `cam_features` | CAM-ICU / CAM Assessment (Inouye 1990) | `select` |  |  |  |
| Delirium — Assessment, Prevention, and Treatment | CAM Diagnostic Algorithm | `delirium_subtype` | Delirium Subtype | `select` |  |  |  |
| Delirium — Assessment, Prevention, and Treatment | HELP Program Non-Pharmacologic Bundle | `help_bundle` | HELP Bundle (Hospital Elder Life Program — Inouye; 6 risk domains: cognitive impairment (orientation, therapeutic activities 3x/day), sleep deprivation (non-pharmacologic sleep protocol, noise reduction, avoid sleep interruptions, earplugs), immobility (early mobilization, PT within 24h, ambulation 3x/day), vision impairment (glasses, magnifiers), hearing impairment (hearing aids, portable amplifiers), dehydration (oral hydration encouragement, IV fluids if unable); HELP reduces delirium incidence 33-40%, delirium episodes, ADL decline; AHA/ASA 2016: bundle superior to pharmacotherapy; ABCDEF bundle in ICU: Assess pain, Both SAT+SBT, Choice sedation, Delirium screen/treat, Early mobility, Family engagement) | `text` |  |  |  |
| Delirium — Assessment, Prevention, and Treatment | HELP Program Non-Pharmacologic Bundle | `medication_management` | Medication Optimization (high-risk medication review: deprescribe sedatives, anticholinergics, opioids (minimize, multi-modal analgesia instead), H2-blockers (use PPI if needed); pain control essential (untreated pain precipitates delirium); Foley removal protocol (reduces risk); sleep hygiene: melatonin 0.5-3 mg QHS (MENDS2 trial: melatonin + light therapy); avoid night-time vital sign interruptions; restraint avoidance protocol; hydration monitoring; nutritional support; constipation management; urinary retention (Foley free vs intermittent cath)) | `text` |  |  |  |

### Discharge Planning / TOC — `hospital_medicine_discharge_planning_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Discharge Planning and Transitions of Care | Discharge Readiness | `clinical_criteria` | Clinical Discharge Criteria Met | `select` |  |  |  |
| Discharge Planning and Transitions of Care | Discharge Readiness | `disposition` | Disposition | `select` |  |  |  |
| Discharge Planning and Transitions of Care | Transitions of Care | `medication_reconciliation` | Medication Reconciliation Status | `select` |  |  |  |
| Discharge Planning and Transitions of Care | Transitions of Care | `followup_plan` | Follow-Up Plan (PCP within 7 days for high-risk; specialty follow-up appointments scheduled; discharge summary faxed to PCP; 30-day readmission risk: LACE score; heart failure: weight monitoring, 3-day phone call, diuresis instructions) | `text` |  |  |  |
| Discharge Planning and Transitions of Care | Transitions of Care | `patient_education` | Patient and Family Education Documented (teach-back method: "What are the three most important things you need to do when you get home?"; warning signs to return to ED; medication changes; new diagnoses explained; interpreter used if language barrier) | `textarea` |  |  |  |

### Discharge Planning / Transitions — `hospital_medicine_transitions_care_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Discharge Planning and Transitions of Care | Disposition Assessment | `disposition_level` | Discharge Disposition | `select` |  |  |  |
| Discharge Planning and Transitions of Care | Disposition Assessment | `readmission_risk` | Readmission Risk Reduction (HOSPITAL score: Hemoglobin <12, Oncologic discharge diagnosis, Sodium <135, Procedure during admission, Type of admission (urgent/emergent), number of Admissions <6 months, Length of stay ≥5 days; score ≥5 = high risk (>20% 30-day readmission); interventions: post-discharge phone call (24-48h), pharmacist medication reconciliation, Transitional Care Nurse for high-risk, patient portal access, bridge clinic appointment (hospital-run), Bridges program, C-Train for CHF, COPD clinic same-day follow-up) | `text` |  |  |  |
| Discharge Planning and Transitions of Care | Medication Reconciliation and Safety | `high_risk_meds` | High-Risk Medication Review at Discharge (anticoagulants: ensure INR follow-up for warfarin, bridge protocol; insulin: diabetes educator before discharge if new insulin; opioids: avoid discharge on IV PCA equivalent — convert to PO; naloxone Rx for opioid discharge; Beers Criteria for elderly: avoid antipsychotics for agitation, benzodiazepines, anticholinergics, NSAIDs; medication adherence tools: pill organizer, blister packs, pharmacy synchronization; 30-day supply with refills; 90-day if possible for chronic conditions) | `text` |  |  |  |
| Discharge Planning and Transitions of Care | Medication Reconciliation and Safety | `followup_plan` | Follow-up Plan Documentation (PCP name and contact number; appointment date and time; cardiology/specialist follow-up if applicable; labs pending at discharge: list each test + which provider will follow up + by when; imaging result pending: specify; wound check: when and with whom; return precautions: written and verbal — specific reasons to return to ED (e.g., O2 sat <90%, fever >101, chest pain, signs of DVT); home O2: SpO2 threshold for titration; dietary restrictions; activity restrictions; weight log for CHF patients with specific threshold to call provider) | `textarea` |  |  |  |

### Discharge Summary — `hospitalist_discharge_summary_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Discharge Summary | Hospital Course Summary | `admission_date` | Admission Date | `date` |  |  |  |
| Discharge Summary | Hospital Course Summary | `discharge_date` | Discharge Date | `date` |  |  |  |
| Discharge Summary | Hospital Course Summary | `admitting_diagnosis` | Admitting Diagnosis | `text` |  |  |  |
| Discharge Summary | Hospital Course Summary | `primary_discharge_diagnosis` | Primary Discharge Diagnosis | `text` |  |  |  |
| Discharge Summary | Hospital Course Summary | `secondary_diagnoses` | Secondary Diagnoses (comorbidities addressed or affecting care) | `textarea` |  |  |  |
| Discharge Summary | Hospital Course Summary | `hospital_course` | Hospital Course (narrative: key events, procedures, specialist consultations, response to treatment) | `textarea` |  |  |  |
| Discharge Summary | Procedures and Key Diagnostics | `procedures_performed` | Procedures Performed (date, finding, result) | `textarea` |  |  |  |
| Discharge Summary | Procedures and Key Diagnostics | `key_labs` | Key Labs on Discharge (CBC, BMP, relevant levels) | `textarea` |  |  |  |
| Discharge Summary | Discharge Instructions | `discharge_condition` | Condition at Discharge | `select` |  |  |  |
| Discharge Summary | Discharge Instructions | `discharge_disposition` | Discharge Disposition | `select` |  |  |  |
| Discharge Summary | Discharge Instructions | `medications_discharged` | Discharge Medications (all active meds — new, changed, stopped; reasons for changes) | `textarea` |  |  |  |
| Discharge Summary | Discharge Instructions | `activity_restrictions` | Activity Restrictions / Diet | `textarea` |  |  |  |
| Discharge Summary | Follow-Up Plan | `followup_appointments` | Follow-Up Appointments (provider, date/timeframe, reason) | `textarea` |  |  |  |
| Discharge Summary | Follow-Up Plan | `pending_results` | Pending Results at Discharge (lab, imaging, path — responsible provider) | `textarea` |  |  |  |
| Discharge Summary | Follow-Up Plan | `return_precautions` | Return Precautions (when to return to ED / call MD) | `textarea` |  |  |  |
| Discharge Summary | Follow-Up Plan | `patient_education` | Patient / family educated on diagnosis, medications, follow-up, and warning signs | `checkbox` |  |  |  |

### Falls Risk — `hospitalist_falls_prevention_cf`

Screen: 1 page(s) · 2 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Falls Risk Assessment | Morse Fall Scale | `fall_hx` | History of Falls (3 months) | `select` |  |  |  |
| Falls Risk Assessment | Morse Fall Scale | `secondary_diagnosis` | Secondary Diagnosis | `select` |  |  |  |
| Falls Risk Assessment | Morse Fall Scale | `ambulatory_aid` | Ambulatory Aid | `select` |  |  |  |
| Falls Risk Assessment | Morse Fall Scale | `iv_heplock` | IV / Hep-Lock | `select` |  |  |  |
| Falls Risk Assessment | Morse Fall Scale | `gait` | Gait | `select` |  |  |  |
| Falls Risk Assessment | Morse Fall Scale | `mental_status` | Mental Status | `select` |  |  |  |
| Falls Risk Assessment | Morse Fall Scale | `morse_total` | Morse Total Score (≥45 = high risk; 25-44 = moderate; <25 = low) | `number` |  |  |  |
| Falls Risk Assessment | Fall Prevention Interventions | `bed_alarm` | Bed / chair alarm activated | `checkbox` |  |  |  |
| Falls Risk Assessment | Fall Prevention Interventions | `low_bed` | Bed in lowest position, side rails up × 2-3 | `checkbox` |  |  |  |
| Falls Risk Assessment | Fall Prevention Interventions | `call_light` | Call light within reach, patient instructed to call before getting up | `checkbox` |  |  |  |
| Falls Risk Assessment | Fall Prevention Interventions | `non_slip_footwear` | Non-slip footwear provided | `checkbox` |  |  |  |
| Falls Risk Assessment | Fall Prevention Interventions | `hourly_rounding` | Hourly rounding ordered (4 Ps: pain, position, potty, personal items) | `checkbox` |  |  |  |
| Falls Risk Assessment | Fall Prevention Interventions | `medications_reviewed` | High-risk medications reviewed (opioids, benzodiazepines, antihypertensives, diuretics) | `checkbox` |  |  |  |
| Falls Risk Assessment | Fall Prevention Interventions | `pt_consult` | Physical therapy consultation for mobility and gait assessment | `checkbox` |  |  |  |

### Inpatient Admission — `hospitalist_admission_cf`

Screen: 1 page(s) · 5 section(s) · 29 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Inpatient Admission H&P | Presenting Problem | `cc` | Chief Complaint | `text` |  |  |  |
| Inpatient Admission H&P | Presenting Problem | `hpi` | History of Present Illness (onset, severity, quality, radiation, associated symptoms, modifying factors, time course) | `textarea` |  |  |  |
| Inpatient Admission H&P | Past Medical and Surgical History | `pmh` | Past Medical History (diagnoses, comorbidities) | `textarea` |  |  |  |
| Inpatient Admission H&P | Past Medical and Surgical History | `psh` | Past Surgical History | `textarea` |  |  |  |
| Inpatient Admission H&P | Past Medical and Surgical History | `medications` | Home Medications (reconciled — include OTC and supplements) | `textarea` |  |  |  |
| Inpatient Admission H&P | Past Medical and Surgical History | `allergies` | Allergies and Reactions | `textarea` |  |  |  |
| Inpatient Admission H&P | Past Medical and Surgical History | `family_hx` | Family History (cardiovascular, cancer, autoimmune) | `textarea` |  |  |  |
| Inpatient Admission H&P | Past Medical and Surgical History | `social_hx` | Social History (tobacco, alcohol, drugs, occupation, housing, functional status) | `textarea` |  |  |  |
| Inpatient Admission H&P | Review of Systems | `ros_constitutional` | Constitutional (fever, chills, fatigue, weight change) | `text` |  |  |  |
| Inpatient Admission H&P | Review of Systems | `ros_cv` | Cardiovascular (chest pain, palpitations, edema, orthopnea) | `text` |  |  |  |
| Inpatient Admission H&P | Review of Systems | `ros_pulm` | Pulmonary (dyspnea, cough, hemoptysis, wheezing) | `text` |  |  |  |
| Inpatient Admission H&P | Review of Systems | `ros_gi` | GI (nausea, vomiting, diarrhea, constipation, melena, hematochezia) | `text` |  |  |  |
| Inpatient Admission H&P | Review of Systems | `ros_neuro` | Neurological (headache, dizziness, weakness, paresthesia, syncope) | `text` |  |  |  |
| Inpatient Admission H&P | Review of Systems | `ros_other` | Other pertinent positives and negatives | `text` |  |  |  |
| Inpatient Admission H&P | Physical Examination | `vitals` | Vital Signs (T / BP / HR / RR / SpO2 / Wt) | `text` |  |  |  |
| Inpatient Admission H&P | Physical Examination | `gen` | General (well/ill-appearing, in distress, NAD) | `text` |  |  |  |
| Inpatient Admission H&P | Physical Examination | `heent` | HEENT | `text` |  |  |  |
| Inpatient Admission H&P | Physical Examination | `neck` | Neck / Lymph Nodes | `text` |  |  |  |
| Inpatient Admission H&P | Physical Examination | `cardio` | Cardiovascular (RRR, murmurs, JVP, edema) | `text` |  |  |  |
| Inpatient Admission H&P | Physical Examination | `pulm` | Pulmonary (CTA, wheeze, crackles, dullness) | `text` |  |  |  |
| Inpatient Admission H&P | Physical Examination | `abdomen` | Abdomen (soft, tender, organomegaly, BS) | `text` |  |  |  |
| Inpatient Admission H&P | Physical Examination | `neuro` | Neurological (oriented, cranial nerves, motor, gait) | `text` |  |  |  |
| Inpatient Admission H&P | Physical Examination | `skin` | Skin / Extremities (rash, wounds, pulses, clubbing, cyanosis) | `text` |  |  |  |
| Inpatient Admission H&P | Assessment and Plan | `primary_diagnosis` | Primary Diagnosis / Working Diagnosis | `text` |  |  |  |
| Inpatient Admission H&P | Assessment and Plan | `problem_list` | Problem List with Plans (numbered) | `textarea` |  |  |  |
| Inpatient Admission H&P | Assessment and Plan | `code_status` | Code Status | `select` |  |  |  |
| Inpatient Admission H&P | Assessment and Plan | `dvt_prophy` | DVT Prophylaxis | `select` |  |  |  |
| Inpatient Admission H&P | Assessment and Plan | `estimated_discharge` | Anticipated Discharge Date | `date` |  |  |  |
| Inpatient Admission H&P | Assessment and Plan | `disposition_plan` | Discharge Planning / Barriers (SNF, home health, DME, follow-up needed) | `textarea` |  |  |  |

### Inpatient Hyperglycemia — `hospital_medicine_inpatient_hyperglycemia_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Inpatient DM Management — Targets, Insulin Protocols, DKA/HHS, Steroid Hyperglycemia | Inpatient Glucose Targets and Monitoring | `glucose_targets` | ADA Inpatient Glucose Targets ICU 140-180, Non-ICU 140-180, Hypoglycemia Prevention Protocol and HbA1c Thresholds (INPATIENT HYPERGLYCEMIA: ADA/AACE CONSENSUS TARGETS: ICU: 140-180 mg/dL (NICE-SUGAR TRIAL: intensive 80-110 vs. conventional <180; INCREASED MORTALITY in intensive; conventional now standard); NON-ICU (GENERAL MEDICINE/SURGICAL): 140-180 mg/dL pre-meal; <180 mg/dL random; OBSTETRICS: TIGHTER: fasting <95; 1h postprandial <140; 2h <120; CARDIAC SURGERY (CABG): 110-150 mg/dL continuous insulin infusion (CIRCUITS study); HYPOGLYCEMIA THRESHOLDS: HYPOGLYCEMIA: BG <70 mg/dL (alert value); CLINICALLY SIGNIFICANT: <54 mg/dL (serious); SEVERE: <40 mg/dL (very serious; often symptomatic); TREATMENT HYPOGLYCEMIA: 15-20g fast-acting carbs (if PO); 25 mL D50W (12.5 g dextrose) IV if NPO; recheck in 15 min; repeat if <70; IDENTIFY CAUSE: insulin dose; NPO status; reduced PO intake; renal impairment (reduced insulin clearance); GLUCOMETER MONITORING: Q4-6h in non-ICU; Q1-2h in ICU on drip; POINT-OF-CARE TESTING: CAPILLARY BLOOD GLUCOSE; LIMITATIONS: hematocrit extremes; edema; shock (low perfusion); CONTINUOUS GLUCOSE MONITORING (CGM): ADA approved for inpatient use; Dexcom G6/G7; Abbott Libre; supplemental readings required; ADMISSION HbA1c: screen all patients >45 years or risk factors; identifies undiagnosed DM; WHAT HbA1c TELLS YOU: AVERAGE BG OVER 3 MONTHS; 6.5% = ~140 mg/dL average; 8% = ~183; 10% = ~240; 12% = ~298; KETONE MONITORING: type 1; DKA suspected; URINE KETONES (acetoacetate); SERUM BETA-HYDROXYBUTYRATE (3-HB): more accurate; >3 mmol/L = DKA | `text` |  |  |  |
| Inpatient DM Management — Targets, Insulin Protocols, DKA/HHS, Steroid Hyperglycemia | Inpatient Glucose Targets and Monitoring | `insulin_protocols` | Basal-Bolus-Correction Insulin (BBC) Protocol, Sliding Scale Insulin Pitfalls, Continuous IV Insulin Drip Indications, and Transition to Subcutaneous | `select` |  |  |  |
| Inpatient DM Management — Targets, Insulin Protocols, DKA/HHS, Steroid Hyperglycemia | DKA and HHS Inpatient Management | `dka_overview` | DKA Diagnostic Criteria (Glucose >250, pH <7.30, Bicarbonate <15, Ketones), Fluid Resuscitation, and Anion Gap Closure Protocol (DIABETIC KETOACIDOSIS (DKA): DIAGNOSTIC CRITERIA: GLUCOSE: >250 mg/dL (may be lower in EUGLYCEMIC DKA: SGLT2 inhibitors; pregnancy; alcohol; fasting); pH: <7.30; BICARBONATE: <15 mEq/L; KETONES: serum or urine positive; ANION GAP (AG): >12 (calculated Na - Cl - HCO3); SEVERITY: MILD: pH 7.25-7.30; Bicarb 15-18; mild mental status change; MODERATE: pH 7.00-7.24; Bicarb 10-15; SEVERE: pH <7.00; Bicarb <10; stupor/coma; PRECIPITANTS (5 Is): INFECTION (most common; pneumonia; UTI); INSULIN OMISSION; ISCHEMIA (MI; CVA; mesenteric); INFARCTION; INTOXICATION (cocaine; alcohol); NEW-ONSET T1DM; SGLT2 INHIBITOR (euglycemic DKA); FLUIDS: FIRST HOUR: 1-1.5 L NORMAL SALINE (0.9% NaCl) IV; replaces severe volume depletion; SUBSEQUENT: 0.45% NaCl or 0.9% NaCl at 250-500 mL/h based on corrected sodium; SWITCH TO D5-0.45 NaCl: when BG <250 mg/dL (prevents hypoglycemia while ketones still clearing); POTASSIUM: CRITICAL: DO NOT START INSULIN if K+ <3.5 mEq/L; replete first; INSULIN STOPS K+ SHIFT INTO CELLS (worsens hypokalemia); POTASSIUM PROTOCOL: K+ 3.5-5.5: add 20-40 mEq/L to IV fluid; K+ <3.5: IV K+ replacement before insulin; K+ >5.5: no potassium; monitor Q2h; INSULIN: REGULAR INSULIN IV INFUSION: 0.1 units/kg/h; no bolus (bolus not superior + more hypoglycemia); RESOLUTION CRITERIA (DKA): GLUCOSE <250; pH >7.30; BICARBONATE >15; ANION GAP CLOSED (AG <=12); KEY: ANION GAP MUST CLOSE (not just glucose); check DELTA-DELTA to assess mixed disorders; PHOSPHATE: ROUTINE REPLACEMENT NOT RECOMMENDED (no improved outcomes); replace if severe symptomatic hypophosphatemia (<1 mg/dL) or cardiac/respiratory compromise; BICARBONATE: NOT RECOMMENDED unless pH <6.9 (risk of cerebral edema; paradoxical CNS acidosis); CEREBRAL EDEMA: COMPLICATION of DKA; mostly children; headache; confusion; TREATMENT: mannitol or hypertonic saline; RESOLUTION TO SQ: overlap basal insulin 2h before stopping drip | `text` |  |  |  |
| Inpatient DM Management — Targets, Insulin Protocols, DKA/HHS, Steroid Hyperglycemia | DKA and HHS Inpatient Management | `hhs_steroid` | HHS Diagnostic Criteria Glucose >600 Osmolality >320, Steroid-Induced Hyperglycemia NPH Timing, and Enteral Nutrition Hyperglycemia | `select` |  |  |  |

### Rapid Response (RRT / MET) — `hospitalist_rapid_response_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Rapid Response Team — Activation, ISBARR, and Crisis Management | RRT Activation Criteria | `physiologic_criteria` | Physiologic Activation Criteria (ANY one criterion sufficient for RRT activation; Vital Sign Triggers: HR <40 or >130; SBP <90 or >200 mmHg; RR <8 or >28; SpO2 <90% on O2; temperature <35 or >41 C; urine output <50 mL/4h; blood glucose <50 or >450 mg/dL; Neurological: acute mental status change (GCS decrease by 2+ points); new seizure; stroke symptoms (FAST); Patient/Family Concern Criteria (Allow families to call RRT): "This does not feel right"; change from baseline; CONCERN criteria (Condition, Our concern, Escalate, Next steps); Nurse concern: nursing instinct — allows call without specific vital sign threshold) | `text` |  |  |  |
| Rapid Response Team — Activation, ISBARR, and Crisis Management | RRT Activation Criteria | `early_warning` | Early Warning Scoring Systems | `select` |  |  |  |
| Rapid Response Team — Activation, ISBARR, and Crisis Management | ISBARR Communication and Transfer | `isbarr` | ISBARR Handoff Framework (Identify: caller name + unit + patient name + MRN; Situation: what is happening NOW (acute change, chief complaint, vital sign abnormality); Background: admission diagnosis, relevant PMH, allergies, current medications, recent labs/vitals trend, procedures; Assessment: clinical impression (what you think is happening); Recommendation: what you need (order, medication, evaluation, transfer); Read-back: verify orders read back; confirm understanding; SBAR inadequacy = ISBARR with Read-back added; Joint Commission National Patient Safety Goal #2: handoff communication; I-PASS: Illness severity, Patient summary, Action list, Situation awareness, Synthesis by receiver) | `text` |  |  |  |
| Rapid Response Team — Activation, ISBARR, and Crisis Management | ISBARR Communication and Transfer | `rrt_structure` | RRT Team Composition and ICU Transfer | `select` |  |  |  |

### Rapid Response / Deteriorating Patient — `hospital_medicine_rapid_response_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Rapid Response — NEWS2, MEWS, SBAR, ICU Criteria, and Escalation | Early Warning Scores and Clinical Deterioration Recognition | `ews` | NEWS2, MEWS, and Track-and-Trigger Systems for Clinical Deterioration (EARLY WARNING SCORING SYSTEMS: PURPOSE: identify at-risk patients BEFORE arrest; reduce preventable harm; structured escalation; NEWS2 (NATIONAL EARLY WARNING SCORE 2; Royal College of Physicians, UK 2017): PARAMETERS + SCORING: RESPIRATORY RATE: <=8 bpm = 3; 9-11 = 1; 12-20 = 0; 21-24 = 2; >=25 = 3; OXYGEN SATURATION (SpO2): Scale 1 (non-hypercapnic): <=91 = 3; 92-93 = 2; 94-95 = 1; >=96 = 0; Scale 2 (COPD + chronic hypercapnia target 88-92%): >=93 = 2 if on O2; SUPPLEMENTAL O2: any O2 = +2; SYSTOLIC BP: <=90 = 3; 91-100 = 2; 101-110 = 1; 111-219 = 0; >=220 = 3; HEART RATE: <=40 = 3; 41-50 = 1; 51-90 = 0; 91-110 = 1; 111-130 = 2; >=131 = 3; LEVEL OF CONSCIOUSNESS (AVPU): Alert = 0; new confusion = 3; Voice/Pain/Unresponsive = 3; TEMPERATURE: <=35.0 = 3; 35.1-36.0 = 1; 36.1-38.0 = 0; 38.1-39.0 = 1; >=39.1 = 2; NEWS2 SCORING INTERPRETATION: 0 = routine monitoring; 1-4 = increase monitoring; 5-6 or any single parameter 3 = URGENT REVIEW; >=7 = EMERGENCY RESPONSE + ICU consideration; MEWS (MODIFIED EARLY WARNING SCORE): similar; 5 parameters; >=5 = urgent; PEWS (PEDIATRIC EWS): children-specific; SEPSIS TRIGGER: NEWS2 >=5 = potential sepsis; NATIONAL SEPSIS PROTOCOL; TRACK-AND-TRIGGER SYSTEMS: SINGLE-PARAMETER: any extreme value triggers response; AGGREGATE-SCORING: score-based (NEWS2, MEWS); COMBINATION: most sensitive; MEWS validation: prospective; cardiac arrest prediction; ICU admission; 28-day mortality | `text` |  |  |  |
| Rapid Response — NEWS2, MEWS, SBAR, ICU Criteria, and Escalation | Early Warning Scores and Clinical Deterioration Recognition | `rrt_activation` | Rapid Response Team Activation Criteria and SBAR Communication | `select` |  |  |  |
| Rapid Response — NEWS2, MEWS, SBAR, ICU Criteria, and Escalation | ICU Transfer Criteria and Deteriorating Patient Management | `icu_criteria` | ICU Admission Criteria, Step-Down Units, and Intermediate Care (ICU ADMISSION CRITERIA: ABSOLUTE ICU: MECHANICAL VENTILATION (invasive or NIV failing); HEMODYNAMIC INSTABILITY: vasopressor requirement; MAP <65 despite resuscitation; CARDIAC ARREST (post-resuscitation care); STATUS EPILEPTICUS; SEVERE SEPTIC SHOCK; RELATIVE ICU INDICATORS (may need step-down/intermediate): NEW CONFUSION + MULTISYSTEM INVOLVEMENT; SEVERE PNEUMONIA (CURB-65 >=4 or PSI class V); ACUTE RESPIRATORY FAILURE: RR >=30 + SpO2 <92% on >=60% FiO2; SEVERE METABOLIC ACIDOSIS: pH <7.2; RHABDOMYOLYSIS: Cr rise >0.3 mg/dL/day + CK >10,000; AKI: KDIGO stage 3; HEPATIC ENCEPHALOPATHY (grade 3-4); HIGH-RISK CARDIAC: NSTEMI with cardiogenic shock; malignant arrhythmia; post-TAVR; STEP-DOWN/INTERMEDIATE CARE UNIT (IMC): INTERMEDIATE between ICU and floor; TELEMETRY (cardiac monitoring); less invasive monitoring; INDICATIONS: post-procedure observation; NSTEMI stable; post-arrhythmia cardioversion; mild sepsis improving; post-respiratory failure extubation; OBSERVATION STATUS (OBS): billing distinction; not same as inpatient; patient costs higher; CMS criteria; POTENTIAL ICU AVOIDANCE TOOLS: HIGH-FLOW NASAL OXYGEN (HFNO): high-flow O2 (up to 60 L/min); heated humidified; reduces work of breathing; reduces intubation need; BIPAP/CPAP (NIV): reduces intubation in AECOPD, ACPE; PREOPERATION: PACU step-down; ICU DISCHARGE CRITERIA: hemodynamically stable; no active vasopressors; able to protect airway; stable respiratory status; follow commands; TRANSITION PLANNING: nursing handover; family communication; code status discussion | `text` |  |  |  |
| Rapid Response — NEWS2, MEWS, SBAR, ICU Criteria, and Escalation | ICU Transfer Criteria and Deteriorating Patient Management | `code_status` | Goals of Care, DNR/DNI, POLST, and Post-Resuscitation Care | `select` |  |  |  |

### Sepsis Bundle (Hour-1) — `hospital_medicine_sepsis_bundle_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sepsis Bundle — Hour-1, Vasopressors, Steroids, Source Control | Hour-1 Bundle and Initial Resuscitation | `bundle` | Surviving Sepsis Campaign Hour-1 Bundle 2021 (SEPSIS DEFINITION (Sepsis-3): life-threatening organ dysfunction from dysregulated host response to infection; SOFA score >=2 points from baseline; qSOFA (bedside: AMS + RR>=22 + SBP<=100): sensitivity 70%, specificity 79% for sepsis; SEPTIC SHOCK: vasopressors required to maintain MAP>=65 + serum lactate >2 mmol/L despite adequate resuscitation; HOUR-1 BUNDLE: (1) MEASURE LACTATE: re-measure if initial >2 mmol/L; lactate >4 = high risk → aggressive resuscitation; (2) BLOOD CULTURES x2 BEFORE ANTIBIOTICS: peripheral + central if present; draw within 1 hour; (3) BROAD-SPECTRUM ANTIBIOTICS: start within 1 hour of sepsis recognition (before cultures if necessary); every hour delay in antibiotics = increased mortality; (4) CRYSTALLOID FLUIDS 30 mL/kg: within 3 hours; reassess with dynamic measures (PLR, PPV, SVV) rather than CVP; (5) VASOPRESSORS if MAP <65 after fluids; SSC 2021 survival approach; FLUID RESPONSIVENESS: pulse pressure variation (PPV) >13% on ventilator predicts fluid response; passive leg raise (PLR): CO increase >=10%) | `text` |  |  |  |
| Sepsis Bundle — Hour-1, Vasopressors, Steroids, Source Control | Hour-1 Bundle and Initial Resuscitation | `antibiotics` | Empiric Antibiotic Selection for Sepsis | `select` |  |  |  |
| Sepsis Bundle — Hour-1, Vasopressors, Steroids, Source Control | Vasopressors, Steroids, and Source Control | `vasopressors` | Vasopressor Escalation Protocol (FIRST-LINE: NOREPINEPHRINE (NE): 0.01-3 mcg/kg/min IV; most evidence; reduces HR vs. dopamine; lower arrhythmia risk; DOPAMINE: avoided in septic shock (SOAP II trial: more arrhythmias; higher 28-day mortality in shock subgroup); exception: may use in low HR or bradycardia; MAP TARGET: >=65 mmHg; higher targets (80-85) in chronic hypertensives may reduce AKI (SEPSISPAM trial: no mortality difference but higher MAP reduced RRT in chronic hypertensive); ADD-ON TO NE: VASOPRESSIN: 0.03-0.04 units/min fixed dose; vasopressin-deficient state in septic shock (VASST trial: no overall benefit; survival benefit in less severe shock); reduces NE requirement; EPINEPHRINE: 0.01-0.5 mcg/kg/min; add when NE + vasopressin insufficient; increases HR + lactate (glycogenolysis); PHENYLEPHRINE: alpha-1 only; avoid in septic shock (reduces CO); use if tachyarrhythmia limits NE; ANGIOTENSIN II (Giapreza): adjunct for refractory vasodilatory shock (ATHOS-3 trial: reduces vasopressor requirement; approved FDA 2017); METHYLENE BLUE: last resort; nitric oxide synthase inhibitor; case reports only; LEVOSIMENDAN: for cardiogenic septic shock (cardiac sensitizer); limited evidence) | `text` |  |  |  |
| Sepsis Bundle — Hour-1, Vasopressors, Steroids, Source Control | Vasopressors, Steroids, and Source Control | `steroids_source` | Corticosteroids and Source Control Timing | `select` |  |  |  |

### Sepsis Bundles and Management — `hospital_medicine_sepsis_bundles_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sepsis-3 Definition, SSC Bundles, Fluids, Vasopressors, Antibiotics | Sepsis Diagnosis and Risk Stratification | `sepsis_dx` | Sepsis-3 Definitions, qSOFA, SOFA Score, and Septic Shock Recognition (SEPSIS-3 DEFINITIONS (JAMA 2016 TASK FORCE): SEPSIS: life-threatening organ dysfunction caused by dysregulated host response to infection; ORGAN DYSFUNCTION: acute change in SOFA score >=2 points; SEPTIC SHOCK: SEPSIS + vasopressor required to maintain MAP >=65 mmHg + LACTATE >2 mmol/L despite fluid resuscitation; PREVIOUS DEFINITIONS (SEPSIS-1/2): SIRS criteria (temp; HR; RR; WBC); no longer used diagnostically in Sepsis-3; qSOFA (QUICK SOFA): SCREENING outside ICU; ALTERED MENTATION (GCS <15); RR >=22; SBP <=100; 2+ = high risk; LOW SENSITIVITY (Seymour meta-analysis); NOT recommended as diagnostic criterion (SSC 2021); SOFA SCORE (SEQUENTIAL ORGAN FAILURE ASSESSMENT): 6 systems; 0-4 each; PaO2/FiO2 ratio; GCS; bilirubin; MAP/vasopressors; creatinine; platelet; SOFA >=2 = organ dysfunction; TOTAL SOFA; LACTATE: marker of tissue hypoperfusion; LACTATE >2 mmol/L + sepsis = HIGH RISK; LACTATE >4 mmol/L = septic shock criteria (hemodynamic); NORMALIZATION OF LACTATE: associated with improved outcomes; TARGET lactate clearance; BLOOD CULTURES: 2 sets BEFORE antibiotics; 20-30 mL per set; aerobic + anaerobic bottles; TIME SENSITIVE: every 1-hour delay in antibiotics = 7% increase in mortality; PROCALCITONIN (PCT): rises in bacterial infection (24-48h); peak 48h; useful for ANTIBIOTIC DE-ESCALATION; STOP antibiotics if PCT falls >80% from peak or <0.25-0.5 ng/mL; NOT diagnostic tool (many false positives); LACTATE CLEARANCE PROTOCOL: repeat lactate in 2 hours; target >10% clearance; SEPSIS SCREENING: SBAR; EWS (Early Warning Score); Modified EWS (MEWS); NEWS2; AUTOMATED ALERTS from electronic health records; CULTURE SETS: URINE CULTURE; RESPIRATORY: sputum; BAL for intubated; WOUNDS; CSF if meningitis suspected; IMAGING: CXR; CT for source identification | `text` |  |  |  |
| Sepsis-3 Definition, SSC Bundles, Fluids, Vasopressors, Antibiotics | Sepsis Diagnosis and Risk Stratification | `sepsis_source` | Sepsis Source Identification, Empiric Antibiotic Approach, and Antibiogram Use | `select` |  |  |  |
| Sepsis-3 Definition, SSC Bundles, Fluids, Vasopressors, Antibiotics | SSC Hour-1 Bundle and Hemodynamic Targets | `hour1_bundle` | Surviving Sepsis Campaign Hour-1 Bundle Elements, 30 mL/kg Crystalloid, and MAP Targets (SURVIVING SEPSIS CAMPAIGN (SSC) 2018 HOUR-1 BUNDLE: COMPLETE WITHIN 1 HOUR OF RECOGNITION: 1) MEASURE LACTATE; re-measure if initial lactate >2 mmol/L; 2) BLOOD CULTURES x2 sets BEFORE antibiotics; do NOT delay antibiotics beyond 45 minutes to obtain cultures; 3) ADMINISTER BROAD-SPECTRUM ANTIBIOTICS (within 1 hour; 3 hours for non-shock sepsis per some guidelines); 4) ADMINISTER 30 mL/kg IV CRYSTALLOID for hypotension or lactate >=4; 5) VASOPRESSORS if hypotension during or after fluid resuscitation; MAINTAIN MAP >=65 mmHg; FLUID RESUSCITATION EVIDENCE: 30 mL/kg INITIAL BOLUS (SSC recommendation); CRYSTALLOID CHOICE: NORMAL SALINE (0.9% NaCl): historically standard; HYPERCHLOREMIC ACIDOSIS risk with large volumes; BALANCED CRYSTALLOIDS (LACTATED RINGERS; PLASMALYTE; Normosol): SMART TRIAL (ICU; 15,000 patients): balanced crystalloid vs. NS; lower rate of MAKE30 (major adverse kidney event); SALT-ED TRIAL (non-ICU): similar benefits; CURRENT PREFERENCE: BALANCED CRYSTALLOIDS; FLUID RESPONSIVENESS ASSESSMENT: PASSIVE LEG RAISE (PLR) test: raise legs 45 degrees; increase CO >=10% = fluid responsive; most reliable non-invasive predictor; PULSE PRESSURE VARIATION (PPV) >13%: fluid responsive (mechanically ventilated; sinus rhythm; no ARDS); IVC DIAMETER: collapsibility index; mixed evidence; STROKE VOLUME VARIATION; TARGETS: MAP >=65 mmHg; LACTATE CLEARANCE >=10% in 2h; URINE OUTPUT >=0.5 mL/kg/h; CVP (central venous pressure): no longer a target; misleading; CONSERVATIVE FLUID STRATEGY AFTER INITIAL RESUSCITATION: FACCT TRIAL (liberal vs. conservative in ARDS): conservative strategy improved ventilator-free days; CLASSIC TRIAL: restrictive vs. standard fluid resuscitation in sepsis: no difference in 90-day mortality (ICU-ROX); ALBIOS TRIAL: albumin + crystalloid vs. crystalloid alone; no mortality benefit; some benefit in early SAPS | `text` |  |  |  |
| Sepsis-3 Definition, SSC Bundles, Fluids, Vasopressors, Antibiotics | SSC Hour-1 Bundle and Hemodynamic Targets | `vasopressors` | Norepinephrine First-Line, Vasopressin Add-On, Hydrocortisone for Catecholamine-Resistant Shock | `select` |  |  |  |

### Sepsis Hour-1 Bundle — `hospitalist_sepsis_care_bundle_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sepsis — Hour-1 Bundle and Care Management | Sepsis Recognition and Severity | `sepsis_criteria` | Sepsis-3 Severity Classification | `select` |  |  |  |
| Sepsis — Hour-1 Bundle and Care Management | Sepsis Recognition and Severity | `lactate` | Initial Lactate (mmol/L; Surviving Sepsis Campaign: obtain immediately; >2 = organ hypoperfusion; >4 = severe hypoperfusion — 50% mortality; remeasure at 2 hours if initial >2; lactate clearance ≥10% at 2 hours associated with improved survival; venous lactate acceptable for screening) | `number` |  |  |  |
| Sepsis — Hour-1 Bundle and Care Management | Hour-1 Bundle (CMS SEP-1) | `hour1_antibiotics` | Empiric Antibiotic Selection | `select` |  |  |  |
| Sepsis — Hour-1 Bundle and Care Management | Hour-1 Bundle (CMS SEP-1) | `fluid_resuscitation` | Fluid Resuscitation and Vasopressors (30 mL/kg IV crystalline (NS or LR) within 3 hours if lactate ≥4 or hypotension; SMART trial: LR (balanced) reduces composite kidney/death vs. NS; dynamic fluid responsiveness testing: PLR (passive leg raise), pulse pressure variation, stroke volume variation >13% on mechanical ventilation; norepinephrine if MAP <65 after fluids — target MAP ≥65; conservative vs. liberal fluid post-resuscitation CLOVERS trial; albumin adjunct if refractory shock) | `text` |  |  |  |
| Sepsis — Hour-1 Bundle and Care Management | Source Control and Monitoring | `source_control_needed` | Source Control Action | `select` |  |  |  |

### VTE Prophylaxis (Padua/Caprini) — `hospital_medicine_pe_prophylaxis_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| VTE Prophylaxis — Medical and Surgical Risk Scoring | Medical Inpatient VTE Prophylaxis | `padua_score` | Padua Score for Medical Inpatients (active cancer (3), prior VTE (3), reduced mobility (3), thrombophilia (3), prior trauma/surgery <1 month (2), age >=70 (1), cardiac/respiratory failure (1), acute MI/stroke (1), infection/rheumatological disorder (1), obesity BMI >30 (1), hormonal treatment (1); Padua total 0-20; HIGH RISK >=4: pharmacologic prophylaxis; LOW RISK <4: early ambulation only (ADOPT trial); pharmacologic options: enoxaparin 40 mg SC QD; dalteparin 5000 units SC QD; UFH 5000 units SC TID; fondaparinux 2.5 mg SC QD; DOACs: rivaroxaban or apixaban NOT approved for general medical prophylaxis; APEX trial (betrixaban): extended prophylaxis 35-42 days reduced VTE in high-risk medical patients; extended prophylaxis after discharge: not routine without ongoing risk) | `text` |  |  |  |
| VTE Prophylaxis — Medical and Surgical Risk Scoring | Medical Inpatient VTE Prophylaxis | `contraindications` | Pharmacologic Prophylaxis Contraindications and Alternatives | `select` |  |  |  |
| VTE Prophylaxis — Medical and Surgical Risk Scoring | Surgical VTE Prophylaxis and Extended Duration | `caprini` | Caprini Score for Surgical Patients (age: 41-60 (1pt), 61-74 (2pts), >=75 (3pts); types surgery: major surgery >45 min (2pts), laparoscopic >45 min (2pts), malignancy (2pts), confinement >72h (1pt), immobilizing plaster cast (2pts), CVA, prior VTE (3pts each), family history VTE (3pts); Factor V Leiden/prothrombin mutation/lupus anticoag/anti-cardiolipin Ab (3pts each); HIGH RISK >=3: mechanical + pharmacologic; VERY HIGH RISK >=5: heparin + IPC + consider extended prophylaxis; cancer surgery: 28 days extended LMWH recommended (ENOXACAN II + FAME studies; reduces VTE 60%); hip/knee arthroplasty: rivaroxaban 10 mg QD x 35 days (hip) or 14 days (knee); apixaban 2.5 mg BID x 35 days (hip) or 12 days (knee); XAMOS/RECORD trials) | `text` |  |  |  |
| VTE Prophylaxis — Medical and Surgical Risk Scoring | Surgical VTE Prophylaxis and Extended Duration | `extended_prophylaxis` | Extended Prophylaxis Indications | `select` |  |  |  |

## Ophthalmology

### AMD — `ophthalmology_amd_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Age-Related Macular Degeneration Management | AMD Classification | `amd_type_right` | AMD Type - Right Eye | `select` |  |  |  |
| Age-Related Macular Degeneration Management | AMD Classification | `amd_type_left` | AMD Type - Left Eye | `select` |  |  |  |
| Age-Related Macular Degeneration Management | AMD Classification | `amd_va_right` | BCVA Right Eye | `text` |  |  |  |
| Age-Related Macular Degeneration Management | AMD Classification | `amd_va_left` | BCVA Left Eye | `text` |  |  |  |
| Age-Related Macular Degeneration Management | AMD Classification | `amd_metamorphopsia` | Metamorphopsia / Amsler Grid Changes | `select` |  |  |  |
| Age-Related Macular Degeneration Management | AMD Classification | `amd_risk_factors` | Key Risk Factors | `select` |  |  |  |
| Age-Related Macular Degeneration Management | Imaging | `amd_oct_fluid` | OCT Macular Fluid (neovascular AMD) | `select` |  |  |  |
| Age-Related Macular Degeneration Management | Imaging | `amd_fa_or_octa` | FA or OCT Angiography Findings | `select` |  |  |  |
| Age-Related Macular Degeneration Management | Imaging | `amd_drusen_size` | Drusen Characteristics | `select` |  |  |  |
| Age-Related Macular Degeneration Management | Treatment | `amd_areds2` | AREDS2 Supplement (intermediate or advanced AMD in other eye) | `select` |  |  |  |
| Age-Related Macular Degeneration Management | Treatment | `amd_anti_vegf_agent` | Intravitreal Anti-VEGF (neovascular AMD) | `select` |  |  |  |
| Age-Related Macular Degeneration Management | Treatment | `amd_injection_protocol` | Injection Protocol | `select` |  |  |  |
| Age-Related Macular Degeneration Management | Treatment | `amd_ga_treatment` | Geographic Atrophy Treatment | `select` |  |  |  |
| Age-Related Macular Degeneration Management | Treatment | `amd_low_vision` | Low Vision Rehabilitation | `select` |  |  |  |
| Age-Related Macular Degeneration Management | Treatment | `amd_home_amsler` | Home Amsler Grid Monitoring | `select` |  |  |  |
| Age-Related Macular Degeneration Management | Treatment | `amd_follow_up` | Follow-Up Interval | `select` |  |  |  |
| Age-Related Macular Degeneration Management | Treatment | `amd_notes` | Additional Notes | `textarea` |  |  |  |

### Age-Related Macular Degeneration — `ophthalmology_age_related_macular_degeneration_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| AMD — Dry AMD, Wet AMD, Anti-VEGF, and Complement Inhibitors | Dry AMD and Geographic Atrophy | `amd_f1` | Dry AMD (90% of AMD): Drusen (Small <63 mcm, Medium 63-124 mcm, Large >=125 mcm), Geographic Atrophy (Advanced; RPE Loss + Photoreceptor Loss), CFH/ARMS2/HTRA1 Genetic Risk Variants, AREDS2 Supplements (Vitamin C/E/Lutein/Zeaxanthin/Zinc, 25% Risk Reduction Large Drusen), and Amsler Grid Self-Monitoring (DRY AMD: PATHOGENESIS: COMPLEMENT DYSREGULATION (CFH; C3; C2; Factor B; Factor I polymorphisms); lipid/lipoprotein deposition; oxidative stress; DRUSEN: SMALL (<63 mcm; no treatment); MEDIUM (63-124 mcm; elevated risk; monitor); LARGE (>=125 mcm; HIGH RISK for progression; AREDS2 supplements); STAGING: EARLY: small/medium drusen; NO vision loss; INTERMEDIATE: >=1 large drusen OR pigmentary changes; LATE: WET AMD or GEOGRAPHIC ATROPHY (GA); GEOGRAPHIC ATROPHY (GA): ADVANCED DRY AMD; RPE + photoreceptor loss; slow progression; macular GA = central vision loss; PERIFOVEAL GA initially; AREDS2 SUPPLEMENTS: FDA 2001 (original AREDS); AREDS2 (2013): Vitamin C 500mg + Vitamin E 400 IU + Lutein 10mg + Zeaxanthin 2mg + Zinc 80mg + Cupric oxide 2mg; 25% RISK REDUCTION for progression from intermediate/large-drusen AMD to advanced; REPLACE beta-carotene with lutein/zeaxanthin (beta-carotene increases lung cancer risk in smokers); AMSLER GRID: daily self-monitoring; distortion or new scotoma = urgent ophthalmology evaluation; GENETIC: CFH Y402H; ARMS2 A69S; HTRA1; RISK: smoking doubles risk; BMI; diet (Mediterranean protective); OPTICAL COHERENCE TOMOGRAPHY (OCT): staging; drusen volume; GA area; FUNDUS AUTOFLUORESCENCE (FAF): GA boundary; RPE metabolic activity) | `text` |  |  |  |
| AMD — Dry AMD, Wet AMD, Anti-VEGF, and Complement Inhibitors | Dry AMD and Geographic Atrophy | `amd_f2` | Geographic Atrophy Complement Inhibitors: Pegcetacoplan (Syfovre) Anti-C3 Monthly/Alternate Month Intravitreal FDA 2023, Avacincaptad Pegol (Izervay) Anti-C5 Monthly Intravitreal FDA 2023, Slows GA Progression 17-23% but Does Not Restore Vision, and Endophthalmitis Risk | `select` |  |  |  |
| AMD — Dry AMD, Wet AMD, Anti-VEGF, and Complement Inhibitors | Wet/Neovascular AMD Anti-VEGF | `amd_f3` | Wet AMD (Neovascular AMD, nAMD): Choroidal Neovascularization (CNV) Type 1/2/3, Anti-VEGF Monthly then Treat-and-Extend, Ranibizumab (Lucentis), Bevacizumab (Avastin Off-Label CATT Trial Non-Inferior), Aflibercept (Eylea 2 mg Monthly x3 then Q8W), Brolucizumab, and Faricimab Dual VEGF+Ang-2 (TENAYA/LUCERNE Q16W) (WET AMD PATHOGENESIS: VEGF-A drives CHOROIDAL NEOVASCULARIZATION (CNV); TYPE 1 (subretinal pigment epithelial; OCCULT): polypoidal choroidal vasculopathy (PCV) variant; TYPE 2 (subretinal; CLASSIC); TYPE 3 (retinal angiomatous proliferation RAP; FROM RETINA); ANTI-VEGF GOLD STANDARD: LOADING PHASE: monthly x3 injections; MAINTENANCE: TREAT-AND-EXTEND (T&E) or PRN; RANIBIZUMAB (Lucentis): anti-VEGF-A Fab; FDA 2006; 0.5 mg intravitreal; monthly; BEVACIZUMAB (Avastin): off-label; CATT TRIAL (NEJM 2011): non-inferior to ranibizumab at 2 years; cost advantage (ranibizumab $2000/dose vs. bevacizumab $50); AFLIBERCEPT (Eylea): VEGF trap (VEGF-A; VEGF-B; PlGF); 2 mg intravitreal; monthly x3 then Q8W; FDA 2011; HIGH-DOSE EYLEA 8 mg (Eylea HD): Q12-16W maintenance; FDA 2023; BROLUCIZUMAB (Beovu): anti-VEGF-A scFv; 6 mg Q12W maintenance; VASCULITIS RISK (retinal occlusion); FARICIMAB (Vabysmo): DUAL blockade VEGF-A + Ang-2 (angiopoietin-2); FDA 2022; 6 mg; Q16W maintenance (TENAYA/LUCERNE trials); BEST trial: BEVACIZUMAB vs. RANIBIZUMAB similar; HARBOR: 2 mg ranibizumab not superior to 0.5 mg; TREAT-AND-EXTEND: after loading; extend interval 2 weeks each visit if stable; max Q16W; reduce if recurrence; TARGET: DRY RETINA on OCT (no SRF; IRF) | `text` |  |  |  |
| AMD — Dry AMD, Wet AMD, Anti-VEGF, and Complement Inhibitors | Wet/Neovascular AMD Anti-VEGF | `amd_f4` | Wet AMD Treatment Monitoring: OCT Monthly for Activity (SRF/IRF Fluid), Faricimab TENAYA/LUCERNE Non-Inferior at Q16W 45% Patients, Port Delivery System Ranibizumab PDS 0.5 mL Q6-Month Refill, and Combination Anti-VEGF + Photodynamic Therapy for Polypoidal Choroidal Vasculopathy | `select` |  |  |  |

### Anterior Segment — `ophthalmology_anterior_segment_cf`

Screen: 1 page(s) · 2 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Anterior Segment Examination | Corneal Assessment | `corneal_finding` | Corneal Finding | `select` |  |  |  |
| Anterior Segment Examination | Corneal Assessment | `fluorescein_staining` | Fluorescein Staining Pattern | `select` |  |  |  |
| Anterior Segment Examination | Anterior Uveitis Assessment | `cells_right` | Cells — OD (SUN grading) | `select` |  |  |  |
| Anterior Segment Examination | Anterior Uveitis Assessment | `flare_right` | Flare — OD | `select` |  |  |  |
| Anterior Segment Examination | Anterior Uveitis Assessment | `kp` | Keratic Precipitates (KP) | `select` |  |  |  |
| Anterior Segment Examination | Anterior Uveitis Assessment | `synechiae` | Posterior synechiae (iris adherent to lens — dilate with cycloplegic to break) | `checkbox` |  |  |  |
| Anterior Segment Examination | Anterior Uveitis Assessment | `uveitis_treatment` | Uveitis Treatment (prednisolone acetate 1% q1h taper; cyclopentolate 1% BID; systemic etiology workup) | `textarea` |  |  |  |

### Cataract Eval — `cataract_evaluation_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cataract Evaluation | Acuity and Refraction | `va_od_cc` | BCVA OD | `text` |  |  |  |
| Cataract Evaluation | Acuity and Refraction | `va_os_cc` | BCVA OS | `text` |  |  |  |
| Cataract Evaluation | Acuity and Refraction | `refraction_od` | Refraction OD | `text` |  |  |  |
| Cataract Evaluation | Acuity and Refraction | `refraction_os` | Refraction OS | `text` |  |  |  |
| Cataract Evaluation | Slit Lamp / Lens Findings | `nuclear_od` | Nuclear Sclerosis OD | `select` |  |  |  |
| Cataract Evaluation | Slit Lamp / Lens Findings | `nuclear_os` | Nuclear Sclerosis OS | `select` |  |  |  |
| Cataract Evaluation | Slit Lamp / Lens Findings | `psc_od` | Posterior Subcapsular OD | `checkbox` |  |  |  |
| Cataract Evaluation | Slit Lamp / Lens Findings | `psc_os` | Posterior Subcapsular OS | `checkbox` |  |  |  |
| Cataract Evaluation | Slit Lamp / Lens Findings | `cortical_od` | Cortical cataract OD | `checkbox` |  |  |  |
| Cataract Evaluation | Slit Lamp / Lens Findings | `cortical_os` | Cortical cataract OS | `checkbox` |  |  |  |
| Cataract Evaluation | Surgical Planning | `surgery_recommended` | Surgery Recommendation | `select` |  |  |  |
| Cataract Evaluation | Surgical Planning | `iol_preference` | IOL Preference Discussed | `select` |  |  |  |
| Cataract Evaluation | Surgical Planning | `target_refraction` | Target Refraction | `text` |  |  |  |
| Cataract Evaluation | Surgical Planning | `notes` | Notes | `textarea` |  |  |  |

### Cataract Surgical Plan — `ophthalmology_cataract_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cataract Evaluation and Surgical Planning | Cataract Assessment | `bcva_right` | BCVA — OD (Snellen e.g., 20/80) | `text` |  |  |  |
| Cataract Evaluation and Surgical Planning | Cataract Assessment | `bcva_left` | BCVA — OS | `text` |  |  |  |
| Cataract Evaluation and Surgical Planning | Cataract Assessment | `locs_right` | LOCS III Classification — OD | `select` |  |  |  |
| Cataract Evaluation and Surgical Planning | Cataract Assessment | `locs_left` | LOCS III — OS | `select` |  |  |  |
| Cataract Evaluation and Surgical Planning | Cataract Assessment | `visual_symptoms` | Visual Symptoms (glare, halos, blurred vision at distance/near, monocular diplopia) | `textarea` |  |  |  |
| Cataract Evaluation and Surgical Planning | Surgical Planning | `surgery_indicated` | Surgery indicated (VA ≤20/40 with significant functional limitation, or worse VA with comorbidity requiring fundus view) | `checkbox` |  |  |  |
| Cataract Evaluation and Surgical Planning | Surgical Planning | `first_eye` | First Eye for Surgery | `select` |  |  |  |
| Cataract Evaluation and Surgical Planning | Surgical Planning | `iol_type` | IOL Type | `select` |  |  |  |
| Cataract Evaluation and Surgical Planning | Surgical Planning | `iol_power` | IOL Power Calculation (biometry — SRK-T / Haigis / Barrett Universal — target refraction) | `text` |  |  |  |
| Cataract Evaluation and Surgical Planning | Surgical Planning | `technique` | Phacoemulsification Technique | `select` |  |  |  |
| Cataract Evaluation and Surgical Planning | Post-Op Protocol | `drops` | Post-Operative Drops (steroid — prednisolone 1%; NSAID — ketorolac; antibiotic — moxifloxacin × 4 weeks) | `textarea` |  |  |  |
| Cataract Evaluation and Surgical Planning | Post-Op Protocol | `restrictions` | Restrictions (no rubbing, no swimming × 2 weeks, no heavy lifting × 4 weeks) | `textarea` |  |  |  |
| Cataract Evaluation and Surgical Planning | Post-Op Protocol | `follow_up_schedule` | Follow-Up Schedule (day 1 / week 1 / month 1 / month 3) | `text` |  |  |  |

### Diabetic Retinopathy — `ophthalmology_diabetic_retinopathy_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Diabetic Retinopathy: Screening, Staging, and Management | Retinopathy Staging and Risk Assessment | `dr_stage` | Diabetic Retinopathy Stage (ETDRS/DRSS) | `select` |  |  |  |
| Diabetic Retinopathy: Screening, Staging, and Management | Retinopathy Staging and Risk Assessment | `dr_dme` | Diabetic Macular Edema (DME) Status | `select` |  |  |  |
| Diabetic Retinopathy: Screening, Staging, and Management | Retinopathy Staging and Risk Assessment | `dr_last_exam` | Last Dilated Eye Exam (date, findings, VA OD/OS, IOP) — ADA 2024: T1D annual dilated exam starting 5 years after diagnosis; T2D annual dilated exam at diagnosis (more prevalent DR at T2D diagnosis); pregnancy with diabetes: exam before conception or first trimester; rapid glycemic improvement paradoxically worsens DR short-term (DCCT phenomenon) | `text` |  |  |  |
| Diabetic Retinopathy: Screening, Staging, and Management | Retinopathy Staging and Risk Assessment | `dr_systemic` | Systemic Risk Factor Status: HbA1c, blood pressure, LDL, eGFR — hyperglycemia and hypertension most modifiable DR risk factors; dyslipidemia contributes; nephropathy parallels retinopathy; fenofibrate may reduce progression (ACCORD EYE trial: 40% reduction in DR progression with fenofibrate + statins); semaglutide/liraglutide data emerging | `text` |  |  |  |
| Diabetic Retinopathy: Screening, Staging, and Management | Treatment Protocol | `dr_anti_vegf` | Intravitreal Anti-VEGF Therapy | `select` |  |  |  |
| Diabetic Retinopathy: Screening, Staging, and Management | Treatment Protocol | `dr_laser` | Laser Photocoagulation | `select` |  |  |  |
| Diabetic Retinopathy: Screening, Staging, and Management | Treatment Protocol | `dr_vitrectomy` | Vitrectomy Indications | `select` |  |  |  |
| Diabetic Retinopathy: Screening, Staging, and Management | Treatment Protocol | `dr_teleretinal` | Teleretinal Screening Program | `select` |  |  |  |
| Diabetic Retinopathy: Screening, Staging, and Management | Treatment Protocol | `dr_notes` | Diabetic Retinopathy Management Notes and Ophthalmology/Endocrinology Coordination | `textarea` |  |  |  |

### Diabetic Retinopathy Screen — `diabetic_retinopathy_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Diabetic Retinopathy Evaluation | Patient & Diabetes Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Diabetic Retinopathy Evaluation | Patient & Diabetes Context | `examDate` | Exam Date | `date` | Y |  |  |
| Diabetic Retinopathy Evaluation | Patient & Diabetes Context | `provider` | Ophthalmologist / Optometrist | `typeahead` | Y |  |  |
| Diabetic Retinopathy Evaluation | Patient & Diabetes Context | `diabetesType` | Diabetes Type | `select` | Y |  |  |
| Diabetic Retinopathy Evaluation | Patient & Diabetes Context | `diabetesDuration` | Duration of Diabetes | `text` | Y |  |  |
| Diabetic Retinopathy Evaluation | Patient & Diabetes Context | `a1c` | Most Recent A1C (%) | `number` |  |  |  |
| Diabetic Retinopathy Evaluation | Patient & Diabetes Context | `bpControl` | BP at Last Visit | `text` |  |  |  |
| Diabetic Retinopathy Evaluation | Ophthalmic Examination | `visualAcuity` | Visual Acuity | `textarea` | Y |  |  |
| Diabetic Retinopathy Evaluation | Ophthalmic Examination | `iop` | Intraocular Pressure | `textarea` |  |  |  |
| Diabetic Retinopathy Evaluation | Ophthalmic Examination | `fundusExam` | Fundus / Retinal Examination | `textarea` | Y |  |  |
| Diabetic Retinopathy Evaluation | Ophthalmic Examination | `drGrading` | DR Severity Grading (ICDR Scale) | `select` | Y |  |  |
| Diabetic Retinopathy Evaluation | Ophthalmic Examination | `dmePresent` | Diabetic Macular Edema (DME) | `select` | Y |  |  |
| Diabetic Retinopathy Evaluation | Assessment & Plan | `treatmentDecision` | Treatment Decision | `select` | Y |  |  |
| Diabetic Retinopathy Evaluation | Assessment & Plan | `plan` | Assessment & Plan | `textarea` | Y |  |  |

### Glaucoma — `ophthalmology_glaucoma_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Glaucoma: IOP Assessment, Medical Therapy, Laser, and Surgical Options | Glaucoma Diagnosis: Types, Optic Nerve Assessment, and Visual Field Testing | `glaucoma_class` | Glaucoma Diagnosis and Classification: Primary Open-Angle Glaucoma POAG: Most Common; Open Anterior Chamber Angle; IOP Typically Elevated But 30-40% Normal Tension NTG; Optic Nerve Damage Cup-to-Disc Ratio Above 0.6; Visual Field Loss Characteristic Arcuate; Nerve Fiber Layer RNFL Thinning OCT; Primary Angle-Closure Glaucoma PACG: Anatomically Narrow Angle; Iridocorneal Contact; Appositional Closure Pupillary Block; Acute Angle-Closure Crisis: Painful Red Eye Halos Blurred Vision Nausea; IOP Above 40-60 Rapid Treatment Emergency; Secondary Glaucoma: Exfoliation XFG Pseudoexfoliation Most Common Secondary Worldwide; Pigmentary Glaucoma Pigment Dispersion; Neovascular NVG Diabetes PDR; Traumatic; Inflammatory Uveitic; Steroid-Induced Corticosteroid Use; Normal Tension NTG: IOP Always Normal Below 21; Vascular Dysregulation; Migraine Raynaud; Treat IOP Still Benefits; IOP Measurement: Goldmann Applanation Gold Standard; Pachymetry CCT Corneal Thickness IOP Adjustment; Thin Cornea Underestimates IOP; Thick Over; Optic Disc Imaging: Disc Photo Cup-to-Disc Ratio CDR; OCT Retinal Nerve Fiber Layer RNFL Ganglion Cell Complex GCC; Macular OCT; Visual Fields: Humphrey 24-2 30-2 SITA Standard Fast; Goldmann Kinetic; Swedish Interactive Threshold Algorithm; MD Mean Deviation PSD Pattern; Risk Factors: IOP Elevated; Family History; African American; Age Above 60; Thin Cornea; Disc Hemorrhage; Cup-to-Disc Above 0.6; Myopia; Diabetes Hypertension | `select` |  |  |  |
| Glaucoma: IOP Assessment, Medical Therapy, Laser, and Surgical Options | Glaucoma Diagnosis: Types, Optic Nerve Assessment, and Visual Field Testing | `glaucoma_workup` | Glaucoma Baseline Assessment and Follow-Up Schedule | `text` |  |  |  |
| Glaucoma: IOP Assessment, Medical Therapy, Laser, and Surgical Options | Glaucoma Medical, Laser, and Surgical Treatment | `glaucoma_treatment` | Glaucoma Medical Treatment First-Line: Prostaglandin Analogs Most Effective Once Daily Lower IOP 25-35%: Latanoprost Xalatan 0.005% QHS; Bimatoprost Lumigan 0.01% QHS; Travoprost Travatan Z 0.004% QHS; Tafluprost Zioptan Unit Dose Preservative-Free; Latanoprostene Bunod Vyzulta Nitric Oxide Releasing Prostaglandin; SE Prostaglandin: Eyelash Growth Darkening; Iris Pigmentation Permanent Heterochromia; Periorbital Fat Atrophy Deepening Superior Sulcus PGA-Associated PAP; Uveitis Relative Contraindication; Beta-Blockers Second-Line or Add-On: Timolol 0.5% BID or QD Gel; Betaxolol Cardioselective Less Respiratory SE; SE: Bradycardia; Bronchoconstriction Contraindicated COPD Asthma; Depression; Decreased Libido; Alpha-2 Agonists: Brimonidine Alphagan P 0.1% 0.15% TID; Pediatric Contraindicated Below 5 Years CNS Depression; Apraclonidine; SE: Allergy; Drowsiness; Dry Mouth; CAI Carbonic Anhydrase Inhibitors Topical: Dorzolamide Trusopt 2% TID; Brinzolamide Azopt 1% TID; Oral Acetazolamide Diamox 250-500mg QID Third-Line Systemic SE; Combination: Cosopt DZD+ Timolol; Combigan Brimonidine+Timolol; Rho Kinase Inhibitor ROCK: Netarsudil Rhopressa 0.02% QHS Aqueous Outflow; Combination Rocklatan Latanoprost+Netarsudil; SLT Selective Laser Trabeculoplasty: Laser Trabecular Meshwork; 20-30% IOP Reduction; First-Line Option LiGHT Trial Non-Inferior Drops; Repeat Every 3-5 Years; Argon ALT Less Repeatable; LPI Peripheral Iridotomy Angle-Closure; Surgery: Trabeculectomy Gold Standard Drainage Bleb; Tube Shunt Ahmed Baerveldt; MIGS Minimally Invasive Kahook iStent Hydrus CyPass; Trabectome; Canaloplasty; Ex-PRESS; Cyclodestruction Laser Body Refractory | `select` |  |  |  |
| Glaucoma: IOP Assessment, Medical Therapy, Laser, and Surgical Options | Glaucoma Medical, Laser, and Surgical Treatment | `glaucoma_notes_detail` | Glaucoma Management Plan and Notes: Glaucoma Type POAG NTG PACG XFG, IOP Mean and Diurnal Range, CCT Pachymetry, CDR and RNFL OCT Baseline and Trend, VF MD Baseline and Trend, Target IOP, Current Drops and Schedule, Adherence Assessment, SLT History and Outcome, Surgical Intervention Status, Angle Gonioscopy Grade, Coordination Notes | `textarea` |  |  |  |
| Glaucoma: IOP Assessment, Medical Therapy, Laser, and Surgical Options | Glaucoma Management Notes | `glaucoma_mgmt_notes` | Glaucoma Management Notes and Ophthalmology Glaucoma Specialist/Optometry Co-Management VF OCT Monitoring/Pharmacy Drop Technique Adherence Counseling/Primary Care Beta-Blocker Contraindications/Pulmonology Timolol Bronchospasm/Cardiology Bradycardia/Nursing Drop Administration Technique/Patient Education Nanodrops Adherence/Low Vision Services VF Loss/Coordination Notes | `textarea` |  |  |  |

### Glaucoma Depth — `ophthalmology_glaucoma_depth_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| POAG — IOP Targets, Medical Therapy, SLT, MIGS, NTG | Glaucoma Diagnosis and Staging | `glaucoma_overview` | POAG Definition, IOP as Risk Factor, Optic Nerve Evaluation, and Humphrey Visual Field Testing (PRIMARY OPEN-ANGLE GLAUCOMA (POAG): DEFINITION: chronic progressive optic neuropathy with characteristic visual field loss + optic nerve damage; OPEN drainage angle on gonioscopy; ELEVATED IOP most cases (>21 mmHg) but NOT required; IOP AS RISK FACTOR: OHTS TRIAL (Ocular Hypertension Treatment Study): medical IOP reduction in ocular hypertensives reduced 5-year POAG incidence from 9.5% to 4.4%; IOP REDUCTION remains cornerstone of treatment; RISK FACTORS: elevated IOP; VERTICAL CUP-TO-DISC RATIO (C/D ratio) >0.6; THIN CORNEA (central corneal thickness <555 microns); family history; BLACK ANCESTRY; age >40; EPIDEMIOLOGY: 60 million affected worldwide; 2nd leading cause of blindness; OPTIC NERVE ASSESSMENT: DISC PHOTO + OCT ONH (Optic Nerve Head) ANALYSIS: RNFL (Retinal Nerve Fiber Layer) thickness map; NEURORETINAL RIM; FOCAL NOTCHING; DISC HEMORRHAGE (sign of active disease); PROGRESSIVE C/D ENLARGEMENT; OCT RNFL: SUPERIOR + INFERIOR arcuate bundles first affected; OPTIC COHERENCE TOMOGRAPHY ANGIOGRAPHY (OCTA): optic disc perfusion; HUMPHREY VISUAL FIELD (HVF): AUTOMATED PERIMETRY; 24-2 program (most common); VISUAL FIELD DEFECT PATTERNS: NASAL STEP; ARCUATE (Bjerrum) SCOTOMA; PARACENTRAL SCOTOMA; INFERIOR ALTITUDINAL; SUPERIOR TEMPORAL WEDGE; CENTRAL ISLAND (end-stage); INTERPRETATION: PATTERN DEVIATION; RELIABILITY INDICES (fixation losses; false positives; false negatives); MEAN DEVIATION (MD); PATTERN STANDARD DEVIATION (PSD); VFI (Visual Field Index); GLAUCOMA HEMIFIELD TEST; PROGRESSION ANALYSIS: EVENT-BASED (threshold change vs. baseline); TREND-BASED (rate of MD change in dB/year; fast progression <-2 dB/year); GONIOSCOPY: OPEN ANGLE confirmed; Shaffer grading; Trabecular meshwork visibility; SLIT-LAMP: anterior segment; cornea; lens; INTRAOCULAR PRESSURE: GOLDMANN APPLANATION TONOMETRY (GAT): gold standard; DIURNAL VARIATION: IOP varies 2-6 mmHg; measure at multiple times; PACHYMETRY: thin cornea underestimates IOP with GAT; correct for CCT; TONOPEN; ICare; non-contact | `text` |  |  |  |
| POAG — IOP Targets, Medical Therapy, SLT, MIGS, NTG | Glaucoma Diagnosis and Staging | `ntg` | Normal-Tension Glaucoma CNTGS Trial, Cerebrospinal Fluid Pressure, and Vascular Hypothesis | `select` |  |  |  |
| POAG — IOP Targets, Medical Therapy, SLT, MIGS, NTG | Glaucoma Medical, Laser, and Surgical Treatment | `medical_therapy` | Prostaglandin Analogs, Beta-Blockers, Alpha-2 Agonists, CAIs, and Rho-Kinase Inhibitors (GLAUCOMA MEDICAL THERAPY: IOP TARGET: INDIVIDUALIZE; typically 20-30% reduction from untreated baseline; lower for advanced disease or NTG; PROSTAGLANDIN ANALOGS (PGAs): FIRST-LINE; QHS dosing; LATANOPROST (Xalatan): FP receptor; 0.005%; BIMATOPROST (Lumigan): prostamide; 0.01%; TRAVOPROST (Travatan Z); TAFLUPROST (Zioptan; preservative-free); LATANOPROSTENE BUNOD (Vyzulta): NO-releasing; additional cGMP pathway; SIDE EFFECTS: IRIS PIGMENTATION CHANGE (irreversible; brown pigment in light irises); EYELASH CHANGES (hypertrichosis; darkening); PERIORBITAL FAT ATROPHY; PROSTAGLANDIN-ASSOCIATED PERIORBITOPATHY; CONJUNCTIVAL HYPEREMIA; AVOID IN UVEITIC GLAUCOMA; AVOID IN PREGNANCY; BETA-BLOCKERS: TIMOLOL 0.5% BID or 0.25% QD (gel); BETAXOLOL (cardioselective beta-1); SYSTEMIC ABSORPTION: bradycardia; bronchospasm; depression; sexual dysfunction; CONTRAINDICATIONS: asthma; COPD; heart block; ALPHA-2 AGONISTS: BRIMONIDINE 0.2% TID: ALPHA-2 selective; AVOID in infants (sedation + apnea); ALLERGY (delayed hypersensitivity 10-15%); APRACLONIDINE (short-term); CARBONIC ANHYDRASE INHIBITORS (CAIs): DORZOLAMIDE 2% TID; BRINZOLAMIDE 1% BID; SULFA ALLERGY; SYSTEMIC: ACETAZOLAMIDE (Diamox): oral; potent; hypokalemia; renal stones; metabolic acidosis; short-term or refractory; RHO-KINASE (ROCK) INHIBITOR: NETARSUDIL (Rhopressa) 0.02% QHS; MULTIPLE MECHANISMS: increases trabecular outflow; reduces episcleral venous pressure; reduces aqueous humor production; HYPEREMIA (red eye) most common side effect; CONJUNCTIVAL HEMORRHAGE; COMBINATION: LATANOPROSTENE + NETARSUDIL (Rocklatan): single drop; FIXED COMBINATION DROPS: COSOPT (timolol + dorzolamide); COMBIGAN (timolol + brimonidine); SIMBRINZA (brimonidine + brinzolamide); simplify regimen; improve adherence; COMPLIANCE: ONCE DAILY preferred; QD > BID; preservative-free for compliance + allergy | `text` |  |  |  |
| POAG — IOP Targets, Medical Therapy, SLT, MIGS, NTG | Glaucoma Medical, Laser, and Surgical Treatment | `slt_migs` | Selective Laser Trabeculoplasty LiGHT Trial, MIGS Devices (iStent, Hydrus, Kahook), and Trabeculectomy | `select` |  |  |  |

### Glaucoma Management — `glaucoma_management_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Glaucoma Management Visit | Patient & Glaucoma Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Glaucoma Management Visit | Patient & Glaucoma Details | `visitDate` | Visit Date | `date` | Y |  |  |
| Glaucoma Management Visit | Patient & Glaucoma Details | `provider` | Ophthalmologist / Glaucoma Specialist | `typeahead` | Y |  |  |
| Glaucoma Management Visit | Patient & Glaucoma Details | `glaucomaType` | Glaucoma Type | `select` | Y |  |  |
| Glaucoma Management Visit | Patient & Glaucoma Details | `severity` | Severity | `select` |  |  |  |
| Glaucoma Management Visit | Exam & Monitoring Data | `iop` | Intraocular Pressure | `textarea` | Y |  |  |
| Glaucoma Management Visit | Exam & Monitoring Data | `visualField` | Visual Field (Humphrey 24-2) | `textarea` | Y |  |  |
| Glaucoma Management Visit | Exam & Monitoring Data | `oct` | OCT RNFL / Optic Nerve | `textarea` | Y |  |  |
| Glaucoma Management Visit | Management Plan | `medications` | Current Glaucoma Medications | `textarea` | Y |  |  |
| Glaucoma Management Visit | Management Plan | `plan` | Assessment & Plan | `textarea` | Y |  |  |

### Glaucoma Management — `ophthalmology_glaucoma_management_cf`

Screen: 1 page(s) · 2 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Glaucoma: Diagnosis, Target IOP, and Treatment Ladder | Diagnosis and Classification | `glaucoma_type` | Glaucoma Classification | `select` |  |  |  |
| Glaucoma: Diagnosis, Target IOP, and Treatment Ladder | Diagnosis and Classification | `glaucoma_monitoring` | Structural and Functional Monitoring — IOP (Goldmann applanation: gold standard; pachymetry-corrected): measure bilateral at each visit; frequency: stable patients Q6 months; progressing: Q3 months; CCT (central corneal thickness): measured once; thin cornea underestimates true IOP; thick cornea overestimates; OCT RNFL: Q6-12 months; GCL (ganglion cell layer): macula GCL-IPL analysis; optic disc photos: annual; Humphrey visual fields (SITA-Standard 24-2 or SITA-Faster; 10-2 for central VF): Q6-12 months; progression analysis (GPA: Guided Progression Analysis; MD slope; event vs trend analysis); corneal hysteresis (CH): low CH = independent glaucoma progression risk (OHTS/CIGTS data) | `text` |  |  |  |
| Glaucoma: Diagnosis, Target IOP, and Treatment Ladder | IOP Lowering Therapy: Medical, Laser, and Surgical | `glaucoma_target_iop` | Target IOP and Disease Stage | `select` |  |  |  |
| Glaucoma: Diagnosis, Target IOP, and Treatment Ladder | IOP Lowering Therapy: Medical, Laser, and Surgical | `glaucoma_medications` | Medical IOP-Lowering Agents | `select` |  |  |  |
| Glaucoma: Diagnosis, Target IOP, and Treatment Ladder | IOP Lowering Therapy: Medical, Laser, and Surgical | `glaucoma_laser` | Laser Treatment | `select` |  |  |  |
| Glaucoma: Diagnosis, Target IOP, and Treatment Ladder | IOP Lowering Therapy: Medical, Laser, and Surgical | `glaucoma_surgery` | Surgical Options (Conventional and MIGS) | `select` |  |  |  |
| Glaucoma: Diagnosis, Target IOP, and Treatment Ladder | IOP Lowering Therapy: Medical, Laser, and Surgical | `glaucoma_notes` | Glaucoma Management Notes and Ophthalmology/Glaucoma Specialist/Optometry/PCP Coordination | `textarea` |  |  |  |

### Retina / Vitreoretinal — `ophthalmology_retina_vitreoretinal_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Retina and Vitreoretinal Surgery Assessment | Vitreoretinal Diagnosis | `primary_dx` | Primary Diagnosis | `select` |  |  |  |
| Retina and Vitreoretinal Surgery Assessment | Vitreoretinal Diagnosis | `va_preop` | Pre-op Visual Acuity (Snellen; affected eye; e.g. 20/200 or counting fingers; macula-on RRD: same-day or next-day urgency; macula-off: 1-7 day window; document lens status: phakic/pseudophakic/aphakic; IOP; pupil; RPE disruption on OCT) | `text` |  |  |  |
| Retina and Vitreoretinal Surgery Assessment | Surgical Planning | `surgical_approach` | Vitreoretinal Surgical Approach | `select` |  |  |  |
| Retina and Vitreoretinal Surgery Assessment | Surgical Planning | `tamponade` | Tamponade Agent | `select` |  |  |  |

### Retinal Disease — `retinal_disease_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Retinal Disease Visit | Visual Acuity | `va_od_sc` | VA OD (sc) | `text` |  |  |  |
| Retinal Disease Visit | Visual Acuity | `va_os_sc` | VA OS (sc) | `text` |  |  |  |
| Retinal Disease Visit | Visual Acuity | `va_od_cc` | VA OD (cc) | `text` |  |  |  |
| Retinal Disease Visit | Visual Acuity | `va_os_cc` | VA OS (cc) | `text` |  |  |  |
| Retinal Disease Visit | OCT Findings | `oct_crt_od` | Central Retinal Thickness OD (microns) | `number` |  |  |  |
| Retinal Disease Visit | OCT Findings | `oct_crt_os` | Central Retinal Thickness OS (microns) | `number` |  |  |  |
| Retinal Disease Visit | OCT Findings | `fluid_present_od` | Subretinal/intraretinal fluid OD | `checkbox` |  |  |  |
| Retinal Disease Visit | OCT Findings | `fluid_present_os` | Subretinal/intraretinal fluid OS | `checkbox` |  |  |  |
| Retinal Disease Visit | Diagnosis and Treatment | `primary_diagnosis` | Primary Retinal Diagnosis | `select` |  |  |  |
| Retinal Disease Visit | Diagnosis and Treatment | `anti_vegf_injection` | Anti-VEGF injection today | `checkbox` |  |  |  |
| Retinal Disease Visit | Diagnosis and Treatment | `anti_vegf_agent` | Anti-VEGF Agent | `select` |  |  |  |
| Retinal Disease Visit | Diagnosis and Treatment | `next_injection_interval` | Next Injection Interval | `select` |  |  |  |
| Retinal Disease Visit | Diagnosis and Treatment | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Retinal Diseases — `ophthalmology_retinal_diseases_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| AMD, Diabetic Retinopathy, RVO, RP, and OCT | Age-Related Macular Degeneration | `amd_dx` | Dry AMD Drusen and GA, Wet AMD Anti-VEGF, and Faricimab TENAYA/LUCERNE (AGE-RELATED MACULAR DEGENERATION (AMD): EPIDEMIOLOGY: leading cause of vision loss >=50 years; RISK FACTORS: age; smoking (strongest modifiable); family history; white race; CFH Y402H (complement factor H) and ARMS2 A69S polymorphisms; CLASSIFICATION: DRY AMD (ATROPHIC): 80-90% of AMD; DRUSEN: yellow deposits under retina (lipid/protein); SMALL (<63 microns): early AMD; MEDIUM (63-124 microns): intermediate; LARGE (>=125 microns): advanced risk; GEOGRAPHIC ATROPHY (GA): loss of RPE + photoreceptors; central visual loss; TREATMENT FOR GA: PEGCETACOPLAN (SYFOVRE): intravitreal; C3 complement inhibitor; FDA 2023; reduces GA growth rate 22-29%; monthly or Q2M injection; AVACINCAPTAD PEGOL (IZERVAY): C5 complement inhibitor; FDA 2023; Q4W; WET AMD (NEOVASCULAR): 10-15% but responsible for 90% of severe vision loss; CHOROIDAL NEOVASCULARIZATION (CNV): abnormal blood vessels from choroid through Bruch membrane; LEAKAGE + BLEEDING; ANTI-VEGF THERAPY: gold standard for wet AMD; RANIBIZUMAB (LUCENTIS): 0.5 mg Q4W; BEVACIZUMAB (AVASTIN): off-label; cheaper; similar efficacy (CATT trial); AFLIBERCEPT (EYLEA): 2 mg Q4W x3, then Q8W; longer interval; FARICIMAB (VABYSMO): dual inhibitor (anti-VEGF-A + anti-Ang-2); TENAYA/LUCERNE trials: non-inferior to aflibercept with Q8-16W dosing; fewer injections; FDA 2022; BROLUCIZUMAB (BEOVU): anti-VEGF-A; Q12W after induction; VASCULITIS risk (discontinue if); PRN vs. TREAT-AND-EXTEND (TAE) dosing: TAE preferred (extends interval based on response); MONITORING: OCT (optical coherence tomography) monthly in first year; DRYSENSE AI: home monitoring | `text` |  |  |  |
| AMD, Diabetic Retinopathy, RVO, RP, and OCT | Age-Related Macular Degeneration | `dr` | Diabetic Retinopathy ETDRS Grading, Anti-VEGF, and Laser Photocoagulation | `select` |  |  |  |
| AMD, Diabetic Retinopathy, RVO, RP, and OCT | Retinal Vein Occlusion and Retinitis Pigmentosa | `rvo` | CRVO vs. BRVO, Anti-VEGF for Macular Edema, and Neovascular Glaucoma Prevention (RETINAL VEIN OCCLUSION (RVO): TYPES: CENTRAL RVO (CRVO): blockage at lamina cribrosa; ALL QUADRANTS affected; BRANCH RVO (BRVO): blockage at AV crossing; ONE QUADRANT; HEMICENTRAL RVO: ischemic; RISK FACTORS: HYPERTENSION (most common); hyperlipidemia; diabetes; glaucoma; hypercoagulable state; OCP (in young women); ISCHEMIC vs. NON-ISCHEMIC (CRVO): ISCHEMIC: poor vision (<20/200); afferent pupillary defect; >10 disc areas of capillary non-perfusion on FFA; HIGH RISK of neovascularization + neovascular glaucoma (NVG); NON-ISCHEMIC: better prognosis; NVG PREVENTION: follow up monthly; anti-VEGF (ranibizumab, aflibercept) or PRP if neovascular iris (rubeosis); MACULAR EDEMA IN RVO: ANTI-VEGF: FIRST-LINE; BRVO: SHORE trial (aflibercept); SCORE2 trial (ranibizumab vs. bevacizumab); CRVO: COPERNICUS (aflibercept); CRUISE (ranibizumab); DEXAMETHASONE IMPLANT (OZURDEX): 0.7 mg biodegradable; intravitreal injection; 3-6 month duration; CATARACT + IOP elevation risk; useful in post-cataract, pregnancy, anti-VEGF refractors; SUSTAINED-RELEASE STEROID: ILUVIEN (fluocinolone acetonide 0.19 mg): 36 months; chronic DME; SYSTEMIC WORKUP FOR RVO: fasting glucose; lipid panel; CBC; coags; homocysteine; anti-phospholipid antibodies; hypercoagulable panel (Protein C/S, Factor V Leiden) if <50 or no systemic risk factors; blood pressure management; aspirin (evidence limited); NATURAL HISTORY: BRVO: 50% spontaneous improvement; CRVO: worse; ischemic prognosis poor | `text` |  |  |  |
| AMD, Diabetic Retinopathy, RVO, RP, and OCT | Retinal Vein Occlusion and Retinitis Pigmentosa | `rp_oct` | Retinitis Pigmentosa, ERG, Voretigene Neparvovec, and OCT Layers | `select` |  |  |  |

### Uveitis — `ophthalmology_uveitis_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Uveitis — Classification, Systemic Associations, and Immunosuppression | Uveitis Classification, Etiology, and Diagnosis | `uv_f1` | Uveitis Evaluation: DEFINITION (INTRAOCULAR INFLAMMATION; UVEAL TRACT: IRIS CILIARY BODY CHOROID; EPIDEMIOLOGY (10-20 pct SEVERE VISUAL IMPAIRMENT UVEITIS; ACTIVE WORKING AGE; CLASSIFICATION BY ANATOMY (ANTERIOR UVEITIS: IRIS CILIARY BODY; MOST COMMON 90 pct; IRITIS IRIDOCYCLITIS; INTERMEDIATE UVEITIS: PARS PLANA VITREOUS; PARS PLANITIS SNOWBANKING; POSTERIOR UVEITIS: CHOROID RETINA; CHORIORETINITIS; PANUVEITIS: ALL SEGMENTS; MOST SEVERE; TEMPORAL CLASSIFICATION (ACUTE: SUDDEN ONSET UNDER 3 MONTHS LIMITED; CHRONIC: PERSISTENT OVER 3 MONTHS; RECURRENT: REPEATED EPISODES INACTIVE INTERVALS; ETIOLOGY (IDIOPATHIC MOST COMMON; SPONDYLOARTHROPATHY HLA-B27 (ANKYLOSING SPONDYLITIS REACTIVE ARTHRITIS PSORIATIC ARTHRITIS IBD-ASSOCIATED; ANTERIOR ACUTE NONGRANULOMATOUS; SARCOIDOSIS: GRANULOMATOUS BILATERAL; TOXOPLASMOSIS: POSTERIOR FOCAL; RETINOCHOROIDITIS; VIRAL: HSV VZV CMV RUBELLA; TUBERCULOSIS: GRANULOMATOUS POSTERIOR; SYPHILIS TREPONEMA: ALL FORMS GREAT MIMICKER; LYME DISEASE; BEHCET DISEASE: HYPOPYON ANTERIOR POSTERIOR; HLA-B51; VOGT-KOYANAGI-HARADA VKH: BILATERAL DIFFUSE; MENINGISM; POLIOSIS VITILIGO; MULTIPLE SCLEROSIS: INTERMEDIATE ANTERIOR; JUVENILE IDIOPATHIC ARTHRITIS JIA: ANTERIOR SILENT; ANA POSITIVE; LENS-ASSOCIATED; SYMPTOMS (ANTERIOR: PHOTOPHOBIA PAIN REDNESS BLURRED VISION; POSTERIOR: FLOATERS BLURRED VISION; PAIN LESS COMMON; SLIT LAMP EXAMINATION ESSENTIAL: CELLS FLARE MUTTON FAT KP; KERATIC PRECIPITATES) | `text` |  |  |  |
| Uveitis — Classification, Systemic Associations, and Immunosuppression | Uveitis Classification, Etiology, and Diagnosis | `uv_f2` | Treatment Corticosteroids Steroid Sparing Biologics | `select` |  |  |  |

## Neonatology

### CHD Newborn Eval — `nicu_congenital_heart_disease_cf`

Screen: 1 page(s) · 3 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Congenital Heart Disease — Newborn Evaluation | Critical CHD Screening | `cchd_screen` | Critical CHD Screen (Pulse Ox at >24h; CCHD positive criteria) | `select` |  |  |  |
| Congenital Heart Disease — Newborn Evaluation | Critical CHD Screening | `four_extremity_bp` | 4-extremity blood pressures checked (coarctation: >10 mmHg upper-lower extremity gradient = suspicious) | `checkbox` |  |  |  |
| Congenital Heart Disease — Newborn Evaluation | Cardiac Lesion | `chd_type` | Congenital Heart Defect Type | `select` |  |  |  |
| Congenital Heart Disease — Newborn Evaluation | Cardiac Lesion | `echo_findings` | Echocardiogram Key Findings (anatomy, function, duct dependency, PA pressure, gradients) | `textarea` |  |  |  |
| Congenital Heart Disease — Newborn Evaluation | Management | `pge1` | PGE1 (prostaglandin E1 = alprostadil) initiated (duct-dependent lesion: 0.05-0.1 mcg/kg/min; monitor for apnea) | `checkbox` |  |  |  |
| Congenital Heart Disease — Newborn Evaluation | Management | `surgical_timeline` | Cardiac Surgery / Catheterization Timeline (definitive repair vs. palliation; transfer to cardiac center) | `text` |  |  |  |
| Congenital Heart Disease — Newborn Evaluation | Management | `family_counseling` | Family Counseling (diagnosis, prognosis, surgical plan, genetics referral — 22q11 if conotruncal defect; Down syndrome if AV canal) | `textarea` |  |  |  |

### HIE Cooling Protocol — `nicu_hypoxic_ischemic_encephalopathy_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hypoxic-Ischemic Encephalopathy (HIE) — Therapeutic Hypothermia | HIE Diagnosis and Eligibility | `gestational_age_term` | Gestational Age at Birth | `select` |  |  |  |
| Hypoxic-Ischemic Encephalopathy (HIE) — Therapeutic Hypothermia | HIE Diagnosis and Eligibility | `perinatal_event` | Perinatal sentinel event identified (cord prolapse, uterine rupture, shoulder dystocia, abruption, emergency C/S) | `checkbox` |  |  |  |
| Hypoxic-Ischemic Encephalopathy (HIE) — Therapeutic Hypothermia | HIE Diagnosis and Eligibility | `apgar_criteria` | APGAR Scores at 1, 5, 10 minutes (pH or BD at birth; criteria: pH <7.0, BD >16, or Apgar <5 at 10 min, or resuscitation >10 min) | `text` |  |  |  |
| Hypoxic-Ischemic Encephalopathy (HIE) — Therapeutic Hypothermia | HIE Diagnosis and Eligibility | `sarnat_grade` | Sarnat Encephalopathy Grade | `select` |  |  |  |
| Hypoxic-Ischemic Encephalopathy (HIE) — Therapeutic Hypothermia | Therapeutic Hypothermia Protocol | `cooling_start_time` | Cooling Initiation Time (target: within 6 hours of birth for maximum neuroprotection benefit) | `text` |  |  |  |
| Hypoxic-Ischemic Encephalopathy (HIE) — Therapeutic Hypothermia | Therapeutic Hypothermia Protocol | `target_temperature` | Target Core Temperature: 33-34 deg C x 72 hours (rectal or esophageal probe — continuous monitoring) | `text` |  |  |  |
| Hypoxic-Ischemic Encephalopathy (HIE) — Therapeutic Hypothermia | Therapeutic Hypothermia Protocol | `rewarming_rate` | Rewarming Rate: 0.5 deg C per hour (slow rewarming over 6-7 hours after 72h — prevent rebound seizures) | `text` |  |  |  |
| Hypoxic-Ischemic Encephalopathy (HIE) — Therapeutic Hypothermia | Therapeutic Hypothermia Protocol | `amplitude_eeg` | Continuous aEEG (amplitude-integrated EEG) monitoring during cooling (seizure detection; background pattern — burst suppression, flat trace = poor prognosis) | `checkbox` |  |  |  |
| Hypoxic-Ischemic Encephalopathy (HIE) — Therapeutic Hypothermia | Prognostic Assessment | `mri_timing` | Brain MRI Timing | `select` |  |  |  |
| Hypoxic-Ischemic Encephalopathy (HIE) — Therapeutic Hypothermia | Prognostic Assessment | `mri_pattern` | MRI Injury Pattern | `select` |  |  |  |
| Hypoxic-Ischemic Encephalopathy (HIE) — Therapeutic Hypothermia | Prognostic Assessment | `family_meeting` | Family meeting held (prognosis discussion; developmental follow-up plan; early intervention referral; palliative care if appropriate) | `checkbox` |  |  |  |

### NICU Admission — `nicu_admission_cf`

Screen: 1 page(s) · 4 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| NICU Neonatal Admission Assessment | Birth Information | `ga_birth` | Gestational Age at Birth (weeks + days) | `text` |  |  |  |
| NICU Neonatal Admission Assessment | Birth Information | `birth_weight` | Birth Weight (grams) | `number` |  |  |  |
| NICU Neonatal Admission Assessment | Birth Information | `apgar_1min` | APGAR at 1 min (0-10) | `number` |  |  |  |
| NICU Neonatal Admission Assessment | Birth Information | `apgar_5min` | APGAR at 5 min (0-10) | `number` |  |  |  |
| NICU Neonatal Admission Assessment | Birth Information | `delivery_mode` | Mode of Delivery | `select` |  |  |  |
| NICU Neonatal Admission Assessment | Birth Information | `resuscitation` | Delivery Room Resuscitation (PPV, intubation, surfactant, epinephrine) | `textarea` |  |  |  |
| NICU Neonatal Admission Assessment | Maternal History | `gbs_status` | GBS Status | `select` |  |  |  |
| NICU Neonatal Admission Assessment | Maternal History | `maternal_infections` | Maternal Infections (HSV, HIV, HepB, CMV, toxo, TORCH) | `textarea` |  |  |  |
| NICU Neonatal Admission Assessment | Maternal History | `rom_duration` | Duration ROM before delivery (PROM >18h = sepsis risk) | `text` |  |  |  |
| NICU Neonatal Admission Assessment | Maternal History | `maternal_fever` | Maternal fever in labor (chorioamnionitis risk) | `checkbox` |  |  |  |
| NICU Neonatal Admission Assessment | Maternal History | `maternal_medications` | Maternal Medications (steroids, MgSO4, antibiotics, opioids, SSRIs) | `textarea` |  |  |  |
| NICU Neonatal Admission Assessment | Neonatal Exam | `skin_color` | Skin Color | `select` |  |  |  |
| NICU Neonatal Admission Assessment | Neonatal Exam | `respiratory` | Respiratory (air entry, grunting, flaring, retractions, CPAP/ventilator) | `textarea` |  |  |  |
| NICU Neonatal Admission Assessment | Neonatal Exam | `cardiovascular` | Cardiovascular (HR, murmur, pulses, cap refill) | `textarea` |  |  |  |
| NICU Neonatal Admission Assessment | Neonatal Exam | `neuro` | Neurological (tone, activity, fontanelle, reflexes) | `textarea` |  |  |  |
| NICU Neonatal Admission Assessment | NICU Plan | `primary_diagnosis` | Admission Diagnosis | `text` |  |  |  |
| NICU Neonatal Admission Assessment | NICU Plan | `respiratory_support` | Respiratory Support | `select` |  |  |  |
| NICU Neonatal Admission Assessment | NICU Plan | `nutrition` | Nutrition Plan | `select` |  |  |  |
| NICU Neonatal Admission Assessment | NICU Plan | `sepsis_workup` | Sepsis workup initiated (CBC, blood culture, empiric ampicillin + gentamicin) | `checkbox` |  |  |  |
| NICU Neonatal Admission Assessment | NICU Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### NICU Graduate Follow-Up — `neonatology_nicu_graduate_followup_cf`

Screen: 1 page(s) · 2 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| NICU Graduate (High-Risk Infant) Follow-Up | Birth and NICU History | `nicu_gestational_age` | Gestational Age at Birth (weeks + days) and Birth Weight (grams) | `text` |  |  |  |
| NICU Graduate (High-Risk Infant) Follow-Up | Birth and NICU History | `nicu_prematurity_category` | Prematurity Category | `select` |  |  |  |
| NICU Graduate (High-Risk Infant) Follow-Up | Birth and NICU History | `nicu_corrected_age` | Corrected Age (CA) at Visit — CA = chronological age minus weeks of prematurity; use CA for developmental milestones until age 2-3 years; growth plotted by CA until 24-36 months | `text` |  |  |  |
| NICU Graduate (High-Risk Infant) Follow-Up | Birth and NICU History | `nicu_ivh` | Intraventricular Hemorrhage (IVH) Grade (Papile classification) | `select` |  |  |  |
| NICU Graduate (High-Risk Infant) Follow-Up | Birth and NICU History | `nicu_bpd` | Bronchopulmonary Dysplasia (BPD) Severity | `select` |  |  |  |
| NICU Graduate (High-Risk Infant) Follow-Up | Birth and NICU History | `nicu_rop` | Retinopathy of Prematurity (ROP) Status | `select` |  |  |  |
| NICU Graduate (High-Risk Infant) Follow-Up | Birth and NICU History | `nicu_nec` | Necrotizing Enterocolitis (NEC) History | `select` |  |  |  |
| NICU Graduate (High-Risk Infant) Follow-Up | Neurodevelopmental Surveillance | `nicu_developmental_screen` | Developmental Screening (by Corrected Age) | `select` |  |  |  |
| NICU Graduate (High-Risk Infant) Follow-Up | Neurodevelopmental Surveillance | `nicu_gross_motor` | Gross Motor Development | `select` |  |  |  |
| NICU Graduate (High-Risk Infant) Follow-Up | Neurodevelopmental Surveillance | `nicu_hearing` | Hearing Status | `select` |  |  |  |
| NICU Graduate (High-Risk Infant) Follow-Up | Neurodevelopmental Surveillance | `nicu_vision` | Vision and Ophthalmology Status | `select` |  |  |  |
| NICU Graduate (High-Risk Infant) Follow-Up | Neurodevelopmental Surveillance | `nicu_ei_services` | Early Intervention and Therapy Services | `select` |  |  |  |
| NICU Graduate (High-Risk Infant) Follow-Up | Neurodevelopmental Surveillance | `nicu_nutrition` | Nutritional Status and Feeding | `select` |  |  |  |
| NICU Graduate (High-Risk Infant) Follow-Up | Neurodevelopmental Surveillance | `nicu_rsv_prophylaxis` | RSV Prophylaxis (Palivizumab / Nirsevimab) | `select` |  |  |  |
| NICU Graduate (High-Risk Infant) Follow-Up | Neurodevelopmental Surveillance | `nicu_notes` | NICU Graduate Follow-Up Notes and Specialist Coordination | `textarea` |  |  |  |

### NICU Graduate Follow-Up — `neonatal_icu_followup_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| NICU Graduate Developmental Follow-Up Visit | Patient & NICU History | `patientId` | Patient (Infant) | `typeahead` | Y |  |  |
| NICU Graduate Developmental Follow-Up Visit | Patient & NICU History | `visitDate` | Visit Date | `date` | Y |  |  |
| NICU Graduate Developmental Follow-Up Visit | Patient & NICU History | `provider` | Developmental Pediatrician / Neonatology Follow-Up | `typeahead` | Y |  |  |
| NICU Graduate Developmental Follow-Up Visit | Patient & NICU History | `chronologicalAge` | Chronological Age | `text` |  |  |  |
| NICU Graduate Developmental Follow-Up Visit | Patient & NICU History | `correctedAge` | Corrected Age (for premature infants) | `text` |  |  |  |
| NICU Graduate Developmental Follow-Up Visit | Patient & NICU History | `gestationalAge` | Gestational Age at Birth | `text` |  |  |  |
| NICU Graduate Developmental Follow-Up Visit | Patient & NICU History | `birthWeight` | Birth Weight (grams) | `text` |  |  |  |
| NICU Graduate Developmental Follow-Up Visit | NICU Complications & Current Status | `nicuComplications` | NICU Complications (for risk stratification) | `textarea` | Y |  |  |
| NICU Graduate Developmental Follow-Up Visit | NICU Complications & Current Status | `currentStatus` | Current Health Status | `textarea` | Y |  |  |
| NICU Graduate Developmental Follow-Up Visit | Developmental Assessment & Plan | `developmental` | Developmental Milestone Assessment (Corrected Age) | `textarea` | Y |  |  |
| NICU Graduate Developmental Follow-Up Visit | Developmental Assessment & Plan | `plan` | Assessment & Plan | `textarea` | Y |  |  |

### NICU Preemie Progress — `nicu_premature_infant_cf`

Screen: 1 page(s) · 4 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Premature Infant Daily Progress Note (NICU) | Infant Demographics | `gestational_age_birth` | Gestational Age at Birth (weeks) | `number` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Infant Demographics | `corrected_gestational_age` | Corrected Gestational Age Today (weeks + days) | `text` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Infant Demographics | `postnatal_day` | Day of Life (DOL) | `number` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Infant Demographics | `birth_weight_g` | Birth Weight (grams) | `number` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Infant Demographics | `current_weight_g` | Current Weight (grams) | `number` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Respiratory Status | `respiratory_support` | Respiratory Support | `select` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Respiratory Status | `ventilator_settings` | Ventilator Settings (PIP/PEEP/RR/FiO2/Ti or HFOV Hz/MAP/amplitude) | `text` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Respiratory Status | `fio2` | Current FiO2 (%) | `number` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Respiratory Status | `spo2_target` | SpO2 Target Range (per institutional protocol — typically 90-95% for <36 wks; avoid hyperoxia for ROP) | `text` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Respiratory Status | `caffeine` | Caffeine citrate ongoing (apnea of prematurity: 5-10 mg/kg/day; standard for <34 weeks) | `checkbox` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Nutrition / Feeds | `feeding_type` | Feeding Type | `select` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Nutrition / Feeds | `feed_volume` | Current Feed Volume (mL/kg/day) | `number` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Nutrition / Feeds | `fortifier` | Human milk fortifier added (HMF — for EBM; target 24-28 kcal/oz for VLBW; optimize growth) | `checkbox` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Nutrition / Feeds | `weight_gain` | Weight Gain Rate (g/day; target 15-20 g/kg/day for VLBW infants) | `text` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Prematurity Complications | `ivh` | IVH Status (Papile Classification — serial HUS) | `select` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Prematurity Complications | `nec_risk` | NEC Status | `select` |  |  |  |
| Premature Infant Daily Progress Note (NICU) | Prematurity Complications | `rop_screening` | ROP screening on schedule (first exam at 31 weeks corrected OR 4 weeks postnatal; whichever later; ophthalmology follow-up until vascularization complete) | `checkbox` |  |  |  |
