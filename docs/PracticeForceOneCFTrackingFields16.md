---
title: "PracticeForceOneCFTrackingFields16"
---

# CF Tracking — Field-Level Detail (part 16 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Admin**, **Cardiology**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Admin

### Provider Schedule — `provider_schedule_cf`

Screen: 1 page(s) · 4 section(s) · 31 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider Schedule Setup | Provider | `providerId` | Provider | `typeahead` | Y |  |  |
| Provider Schedule Setup | Provider | `practiceId` | Practice | `text` |  |  |  |
| Provider Schedule Setup | Provider | `effectiveDate` | Effective Date | `date` | Y |  |  |
| Provider Schedule Setup | Regular Hours | `monEnabled` | Monday | `checkbox` |  |  |  |
| Provider Schedule Setup | Regular Hours | `monStart` | Monday Start | `text` |  |  |  |
| Provider Schedule Setup | Regular Hours | `monEnd` | Monday End | `text` |  |  |  |
| Provider Schedule Setup | Regular Hours | `tueEnabled` | Tuesday | `checkbox` |  |  |  |
| Provider Schedule Setup | Regular Hours | `tueStart` | Tuesday Start | `text` |  |  |  |
| Provider Schedule Setup | Regular Hours | `tueEnd` | Tuesday End | `text` |  |  |  |
| Provider Schedule Setup | Regular Hours | `wedEnabled` | Wednesday | `checkbox` |  |  |  |
| Provider Schedule Setup | Regular Hours | `wedStart` | Wednesday Start | `text` |  |  |  |
| Provider Schedule Setup | Regular Hours | `wedEnd` | Wednesday End | `text` |  |  |  |
| Provider Schedule Setup | Regular Hours | `thuEnabled` | Thursday | `checkbox` |  |  |  |
| Provider Schedule Setup | Regular Hours | `thuStart` | Thursday Start | `text` |  |  |  |
| Provider Schedule Setup | Regular Hours | `thuEnd` | Thursday End | `text` |  |  |  |
| Provider Schedule Setup | Regular Hours | `friEnabled` | Friday | `checkbox` |  |  |  |
| Provider Schedule Setup | Regular Hours | `friStart` | Friday Start | `text` |  |  |  |
| Provider Schedule Setup | Regular Hours | `friEnd` | Friday End | `text` |  |  |  |
| Provider Schedule Setup | Regular Hours | `satEnabled` | Saturday | `checkbox` |  |  |  |
| Provider Schedule Setup | Regular Hours | `satStart` | Saturday Start | `text` |  |  |  |
| Provider Schedule Setup | Regular Hours | `satEnd` | Saturday End | `text` |  |  |  |
| Provider Schedule Setup | Slot Defaults | `defaultSlotMinutes` | Default Slot Duration (minutes) | `number` |  |  |  |
| Provider Schedule Setup | Slot Defaults | `lunchBreakStart` | Lunch Break Start | `text` |  |  |  |
| Provider Schedule Setup | Slot Defaults | `lunchBreakEnd` | Lunch Break End | `text` |  |  |  |
| Provider Schedule Setup | Slot Defaults | `maxPatientsPerDay` | Max Patients Per Day | `number` |  |  |  |
| Provider Schedule Setup | Slot Defaults | `overbook` | Allow overbooking (above max) | `checkbox` |  |  |  |
| Provider Schedule Setup | Block / Time Off | `blockDate` | Block Date | `date` |  |  |  |
| Provider Schedule Setup | Block / Time Off | `blockReason` | Block Reason | `text` |  |  |  |
| Provider Schedule Setup | Block / Time Off | `blockAllDay` | Block All Day | `checkbox` |  |  |  |
| Provider Schedule Setup | Block / Time Off | `blockStart` | Partial Block Start (if not all day) | `text` |  |  |  |
| Provider Schedule Setup | Block / Time Off | `blockEnd` | Partial Block End | `text` |  |  |  |

### Provider Teams — `provider_teams`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDER_TEAMS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider Team | Team | `name` | Team Name | `text` | Y |  |  |
| Provider Team | Team | `practiceId` | Practice | `text` |  |  |  |
| Provider Team | Team | `leadProviderId` | Lead Provider | `text` |  |  |  |
| Provider Team | Team | `memberProviderIds` | Member Providers | `text` |  |  |  |
| Provider Team | Team | `description` | Description | `textarea` |  |  |  |
| Provider Team | Team | `isActive` | Active | `checkbox` |  |  |  |

### Providers — `providers_cf`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider | Provider | `firstName` | First Name | `text` | Y |  |  |
| Provider | Provider | `lastName` | Last Name | `text` | Y |  |  |
| Provider | Provider | `credentials` | Credentials | `text` |  |  |  |
| Provider | Provider | `specialty` | Specialty | `text` |  |  |  |
| Provider | Provider | `npi` | NPI | `text` |  |  |  |
| Provider | Provider | `email` | Email | `email` |  |  |  |
| Provider | Provider | `phone` | Phone | `tel` |  |  |  |

### Providers — `provider_cf`

Screen: 1 page(s) · 2 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider | Provider Info | `last_name` | Last Name | `text` |  | last_name |  |
| Provider | Provider Info | `first_name` | First Name | `text` |  | first_name |  |
| Provider | Provider Info | `credentials` | Credentials | `text` |  | credentials |  |
| Provider | Provider Info | `specialty` | Specialty | `text` |  | specialty |  |
| Provider | Provider Info | `npi` | NPI | `text` |  | npi |  |
| Provider | Provider Info | `taxonomy_code` | Taxonomy Code | `text` |  | taxonomy_code |  |
| Provider | Provider Info | `email` | Email | `text` |  | email |  |
| Provider | Provider Info | `phone` | Phone | `text` |  | phone |  |
| Provider | Provider Info | `provider_type` | Provider Type | `text` |  | provider_type |  |
| Provider | Roles | `is_active` | Active | `text` |  | is_active |  |
| Provider | Roles | `is_rendering` | Rendering | `text` |  | is_rendering |  |
| Provider | Roles | `is_referring` | Referring | `text` |  | is_referring |  |
| Provider | Roles | `is_supervising` | Supervising | `text` |  | is_supervising |  |

### Providers — `PROVIDERS`

Screen: 1 page(s) · 1 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider | Provider (PROVIDERSCrud; org-scoped via practices; PROVIDERS_MANAGE for writes) | `prvId` | Provider ID (read-only UUID) | `text` |  |  |  |
| Provider | Provider (PROVIDERSCrud; org-scoped via practices; PROVIDERS_MANAGE for writes) | `prvFirstName` | First Name (required) | `text` | Y |  |  |
| Provider | Provider (PROVIDERSCrud; org-scoped via practices; PROVIDERS_MANAGE for writes) | `prvLastName` | Last Name (required) | `text` | Y |  |  |
| Provider | Provider (PROVIDERSCrud; org-scoped via practices; PROVIDERS_MANAGE for writes) | `prvNpi` | NPI (10 digits; required) | `text` | Y |  |  |
| Provider | Provider (PROVIDERSCrud; org-scoped via practices; PROVIDERS_MANAGE for writes) | `prvSpecialty` | Specialty | `text` |  |  |  |
| Provider | Provider (PROVIDERSCrud; org-scoped via practices; PROVIDERS_MANAGE for writes) | `prvCredentials` | Credentials (MD/DO/NP/PA/etc.) | `text` |  |  |  |
| Provider | Provider (PROVIDERSCrud; org-scoped via practices; PROVIDERS_MANAGE for writes) | `prvEmail` | Email | `text` |  |  |  |
| Provider | Provider (PROVIDERSCrud; org-scoped via practices; PROVIDERS_MANAGE for writes) | `prvPhone` | Phone | `text` |  |  |  |
| Provider | Provider (PROVIDERSCrud; org-scoped via practices; PROVIDERS_MANAGE for writes) | `prvDeaNumber` | DEA Number (AES-256-GCM encrypted at rest) | `text` |  |  |  |
| Provider | Provider (PROVIDERSCrud; org-scoped via practices; PROVIDERS_MANAGE for writes) | `prvTaxonomy` | Taxonomy Code | `text` |  |  |  |
| Provider | Provider (PROVIDERSCrud; org-scoped via practices; PROVIDERS_MANAGE for writes) | `prvPracticeId` | Practice ID (required for create) | `text` |  |  |  |
| Provider | Provider (PROVIDERSCrud; org-scoped via practices; PROVIDERS_MANAGE for writes) | `prvIsActive` | Is Active (true/false; default true) | `checkbox` |  |  |  |

### Providers — `providers`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider | Provider Details | `firstName` | First Name | `text` | Y |  |  |
| Provider | Provider Details | `lastName` | Last Name | `text` | Y |  |  |
| Provider | Provider Details | `npi` | NPI | `text` |  |  |  |
| Provider | Provider Details | `specialty` | Specialty | `text` |  |  |  |
| Provider | Provider Details | `credentials` | Credentials | `text` |  |  |  |
| Provider | Provider Details | `email` | Email | `text` |  |  |  |
| Provider | Provider Details | `phone` | Phone | `text` |  |  |  |
| Provider | Provider Details | `taxonomyCode` | Taxonomy Code | `text` |  |  |  |
| Provider | Provider Details | `isActive` | Active | `checkbox` |  |  |  |

### Providers — `providers_admin_cf`

Screen: 0 page(s) · 0 section(s) · 0 field(s) · UI STUB · DB BUILT · tables `PRACTICES`, `PROVIDERS`

_No fields declared (nav stub)._

### Proxy Access — `proxy_access_cf`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Proxy Access (ECW-AD-6) | Proxy Access Configuration | `patientDob` | Patient Date of Birth | `date` |  |  |  |
| Pediatric Proxy Access (ECW-AD-6) | Proxy Access Configuration | `proxyActive` | Proxy Access Active | `checkbox` |  |  |  |
| Pediatric Proxy Access (ECW-AD-6) | Proxy Access Configuration | `proxyExpiryDate` | Proxy Auto-Expiry Date | `date` |  |  |  |
| Pediatric Proxy Access (ECW-AD-6) | Proxy Access Configuration | `proxyPrivacyScope` | Adolescent Privacy Scope | `select` |  |  |  |
| Pediatric Proxy Access (ECW-AD-6) | Proxy Access Configuration | `sensitiveTopicsBlocked` | Sensitive Topics Blocked from Proxy | `textarea` |  |  |  |
| Pediatric Proxy Access (ECW-AD-6) | Proxy Access Configuration | `ageOutNotificationSent` | Age-Out Notification Sent | `checkbox` |  |  |  |
| Pediatric Proxy Access (ECW-AD-6) | Proxy Access Configuration | `ageOutNotificationDate` | Age-Out Notification Date | `date` |  |  |  |
| Pediatric Proxy Access (ECW-AD-6) | Proxy Access Configuration | `proxyReviewNote` | Proxy Review Note | `textarea` |  |  |  |

### QI Initiative — `quality_improvement_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Quality Improvement Initiative | Initiative Details | `initiativeTitle` | Initiative Title | `text` | Y |  |  |
| Quality Improvement Initiative | Initiative Details | `owner` | Initiative Owner | `typeahead` | Y |  |  |
| Quality Improvement Initiative | Initiative Details | `startDate` | Start Date | `date` | Y |  |  |
| Quality Improvement Initiative | Initiative Details | `targetDate` | Target Completion Date | `date` | Y |  |  |
| Quality Improvement Initiative | Initiative Details | `hedisOrPqrs` | Quality Program | `select` |  |  |  |
| Quality Improvement Initiative | Quality Measure | `measureName` | Quality Measure | `text` | Y |  |  |
| Quality Improvement Initiative | Quality Measure | `measureId` | Measure ID | `text` |  |  |  |
| Quality Improvement Initiative | Quality Measure | `currentPerformance` | Current Performance Rate (%) | `number` |  |  |  |
| Quality Improvement Initiative | Quality Measure | `targetPerformance` | Target Performance Rate (%) | `number` |  |  |  |
| Quality Improvement Initiative | Quality Measure | `denominator` | Denominator (eligible patients) | `number` |  |  |  |
| Quality Improvement Initiative | Quality Measure | `numerator` | Numerator (met measure) | `number` |  |  |  |
| Quality Improvement Initiative | PDSA Cycle | `plan` | Plan — Problem Identification & Intervention | `textarea` | Y |  |  |
| Quality Improvement Initiative | PDSA Cycle | `doActions` | Do — Actions Implemented | `textarea` |  |  |  |
| Quality Improvement Initiative | PDSA Cycle | `studyResults` | Study — Results Observed | `textarea` |  |  |  |
| Quality Improvement Initiative | PDSA Cycle | `actPlan` | Act — Next Steps | `textarea` |  |  |  |

### Quality Measures — `quality_measure_cf`

Screen: 1 page(s) · 4 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Quality Measure Dashboard & Gap Closure | Patient Quality Gaps | `patientId` | Patient | `typeahead` | Y |  |  |
| Quality Measure Dashboard & Gap Closure | Patient Quality Gaps | `measureYear` | Measurement Year | `select` |  |  |  |
| Quality Measure Dashboard & Gap Closure | HEDIS Measures (Commercial/Medicare) | `bcs` | BCS — Breast Cancer Screening (mammogram) | `select` |  |  |  |
| Quality Measure Dashboard & Gap Closure | HEDIS Measures (Commercial/Medicare) | `ccs` | CCS — Cervical Cancer Screening (Pap + HPV) | `select` |  |  |  |
| Quality Measure Dashboard & Gap Closure | HEDIS Measures (Commercial/Medicare) | `col` | COL — Colorectal Cancer Screening | `select` |  |  |  |
| Quality Measure Dashboard & Gap Closure | HEDIS Measures (Commercial/Medicare) | `cdc` | CDC — Diabetes Care (HbA1c, LDL, BP, eye exam, kidney) | `select` |  |  |  |
| Quality Measure Dashboard & Gap Closure | HEDIS Measures (Commercial/Medicare) | `cbp` | CBP — Controlling Blood Pressure (< 140/90) | `select` |  |  |  |
| Quality Measure Dashboard & Gap Closure | HEDIS Measures (Commercial/Medicare) | `spc` | SPC — Statin for Cardiovascular Disease | `select` |  |  |  |
| Quality Measure Dashboard & Gap Closure | HEDIS Measures (Commercial/Medicare) | `flu` | FLU — Flu Vaccination | `select` |  |  |  |
| Quality Measure Dashboard & Gap Closure | HEDIS Measures (Commercial/Medicare) | `pbh` | PBH — Depression Screening + Follow-Up | `select` |  |  |  |
| Quality Measure Dashboard & Gap Closure | UDS Measures (FQHC / Community Health) | `udsHbp` | UDS — Hypertension: BP Controlled | `select` |  |  |  |
| Quality Measure Dashboard & Gap Closure | UDS Measures (FQHC / Community Health) | `udsDiabetes` | UDS — Diabetes: HbA1c < 9% | `select` |  |  |  |
| Quality Measure Dashboard & Gap Closure | UDS Measures (FQHC / Community Health) | `udsDepression` | UDS — Depression Remission at 12 months | `select` |  |  |  |
| Quality Measure Dashboard & Gap Closure | UDS Measures (FQHC / Community Health) | `udsChildBmi` | UDS — Child BMI Assessment | `select` |  |  |  |
| Quality Measure Dashboard & Gap Closure | Gap Closure Actions | `gapsClosed` | Quality Gaps Addressed Today | `textarea` |  |  |  |
| Quality Measure Dashboard & Gap Closure | Gap Closure Actions | `patientsOutreach` | Patient outreach letter / portal message sent re: open gaps | `checkbox` |  |  |  |
| Quality Measure Dashboard & Gap Closure | Gap Closure Actions | `reportingPeriod` | Reporting Period Status | `select` |  |  |  |

### Records Release — `records_release_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medical Records Release (ROI) | Release of Information | `patientId` | Patient | `typeahead` | Y |  |  |
| Medical Records Release (ROI) | Release of Information | `requestDate` | Request Date | `date` | Y |  |  |
| Medical Records Release (ROI) | Release of Information | `requestType` | Request Type | `select` |  |  |  |
| Medical Records Release (ROI) | Release of Information | `releaseTo` | Release To | `text` | Y |  |  |
| Medical Records Release (ROI) | Release of Information | `releaseToAddress` | Release To Address / Fax | `textarea` |  |  |  |
| Medical Records Release (ROI) | Records Scope | `recordTypes` | Record Types | `select` |  |  |  |
| Medical Records Release (ROI) | Records Scope | `dateRangeFrom` | Records From Date | `date` |  |  |  |
| Medical Records Release (ROI) | Records Scope | `dateRangeTo` | Records To Date | `date` |  |  |  |
| Medical Records Release (ROI) | Records Scope | `specificVisit` | Specific Visit / Encounter | `text` |  |  |  |
| Medical Records Release (ROI) | Records Scope | `purpose` | Purpose of Release | `select` |  |  |  |
| Medical Records Release (ROI) | Fulfillment | `authorizationSigned` | Patient authorization signed and on file | `checkbox` | Y |  |  |
| Medical Records Release (ROI) | Fulfillment | `authorizationDate` | Authorization Date | `date` |  |  |  |
| Medical Records Release (ROI) | Fulfillment | `authorizationExpiration` | Authorization Expiration | `date` |  |  |  |
| Medical Records Release (ROI) | Fulfillment | `deliveryMethod` | Delivery Method | `select` |  |  |  |
| Medical Records Release (ROI) | Fulfillment | `releaseDate` | Records Released Date | `date` |  |  |  |
| Medical Records Release (ROI) | Fulfillment | `releasedBy` | Released By | `text` |  |  |  |
| Medical Records Release (ROI) | Fulfillment | `pageCount` | Pages Released | `number` |  |  |  |
| Medical Records Release (ROI) | Fulfillment | `roiNotes` | ROI Notes | `textarea` |  |  |  |

### Referral Directory — `referral_directory_cf`

Screen: 1 page(s) · 2 section(s) · 18 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Referring Provider Directory | Search & Filter | `searchQuery` | Search (name, NPI, organization) | `text` |  |  |  |
| Referring Provider Directory | Search & Filter | `specialty` | Specialty Filter | `text` |  |  |  |
| Referring Provider Directory | Search & Filter | `state` | State | `select` |  |  |  |
| Referring Provider Directory | Search & Filter | `languages` | Languages Spoken Filter | `text` |  |  |  |
| Referring Provider Directory | Add / Edit Referring Provider | `refFirstName` | First Name | `text` | Y |  |  |
| Referring Provider Directory | Add / Edit Referring Provider | `refLastName` | Last Name | `text` | Y |  |  |
| Referring Provider Directory | Add / Edit Referring Provider | `refCredentials` | Credentials | `text` |  |  |  |
| Referring Provider Directory | Add / Edit Referring Provider | `refSpecialty` | Specialty | `text` | Y |  |  |
| Referring Provider Directory | Add / Edit Referring Provider | `refNpi` | NPI Number | `text` |  |  |  |
| Referring Provider Directory | Add / Edit Referring Provider | `refOrganization` | Organization / Practice Name | `text` |  |  |  |
| Referring Provider Directory | Add / Edit Referring Provider | `refPhone` | Phone | `tel` |  |  |  |
| Referring Provider Directory | Add / Edit Referring Provider | `refFax` | Fax | `tel` |  |  |  |
| Referring Provider Directory | Add / Edit Referring Provider | `refEmail` | Email | `email` |  |  |  |
| Referring Provider Directory | Add / Edit Referring Provider | `refAddress` | Address Line 1 | `text` |  |  |  |
| Referring Provider Directory | Add / Edit Referring Provider | `refCity` | City | `text` |  |  |  |
| Referring Provider Directory | Add / Edit Referring Provider | `refState` | State | `select` |  |  |  |
| Referring Provider Directory | Add / Edit Referring Provider | `refZip` | ZIP Code | `text` |  |  |  |
| Referring Provider Directory | Add / Edit Referring Provider | `refLanguages` | Languages Spoken | `text` |  |  |  |

### Referring Providers — `referring_providers_cf`

Screen: 1 page(s) · 2 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `REFERRING_PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Referring Provider | Identity | `npi` | NPI | `text` | Y |  |  |
| Referring Provider | Identity | `first_name` | First Name | `text` | Y |  |  |
| Referring Provider | Identity | `last_name` | Last Name | `text` | Y |  |  |
| Referring Provider | Identity | `credentials` | Credentials (MD, DO, NP...) | `text` |  |  |  |
| Referring Provider | Identity | `specialty` | Specialty | `text` |  |  |  |
| Referring Provider | Identity | `taxonomy_code` | Taxonomy Code | `text` |  |  |  |
| Referring Provider | Identity | `organization` | Organization / Group | `text` |  |  |  |
| Referring Provider | Contact | `phone` | Phone | `text` |  |  |  |
| Referring Provider | Contact | `fax` | Fax | `text` |  |  |  |
| Referring Provider | Contact | `address_line1` | Address Line 1 | `text` |  |  |  |
| Referring Provider | Contact | `city` | City | `text` |  |  |  |
| Referring Provider | Contact | `state` | State | `text` |  |  |  |
| Referring Provider | Contact | `zip_code` | ZIP Code | `text` |  |  |  |
| Referring Provider | Contact | `practice_id` | Practice ID | `text` |  |  |  |
| Referring Provider | Contact | `is_active` | Active | `checkbox` |  |  |  |

### Referring Providers — `referring_providers`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `REFERRING_PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Referring Provider | Provider | `firstName` | First Name | `text` | Y |  |  |
| Referring Provider | Provider | `lastName` | Last Name | `text` | Y |  |  |
| Referring Provider | Provider | `npi` | NPI | `text` |  |  |  |
| Referring Provider | Provider | `specialty` | Specialty | `text` |  |  |  |
| Referring Provider | Provider | `phone` | Phone | `text` |  |  |  |
| Referring Provider | Provider | `fax` | Fax | `text` |  |  |  |
| Referring Provider | Provider | `address` | Address | `textarea` |  |  |  |
| Referring Provider | Provider | `isActive` | Active | `checkbox` |  |  |  |

### Referring Providers — `REFERRING_PROVIDERS`

Screen: 1 page(s) · 1 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `REFERRING_PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Referring Provider | Referring / External Provider | `rpId` | Provider ID (read-only) | `text` |  |  |  |
| Referring Provider | Referring / External Provider | `rpPracticeId` | Practice ID (required) | `text` | Y |  |  |
| Referring Provider | Referring / External Provider | `rpFirstName` | First Name (required) | `text` | Y |  |  |
| Referring Provider | Referring / External Provider | `rpLastName` | Last Name (required) | `text` | Y |  |  |
| Referring Provider | Referring / External Provider | `rpNpi` | NPI Number (10-digit) | `text` |  |  |  |
| Referring Provider | Referring / External Provider | `rpSpecialty` | Specialty | `text` |  |  |  |
| Referring Provider | Referring / External Provider | `rpCredentials` | Credentials (MD/DO/NP/PA) | `text` |  |  |  |
| Referring Provider | Referring / External Provider | `rpPhone` | Phone | `text` |  |  |  |
| Referring Provider | Referring / External Provider | `rpFax` | Fax | `text` |  |  |  |
| Referring Provider | Referring / External Provider | `rpAddressLine1` | Address Line 1 | `text` |  |  |  |
| Referring Provider | Referring / External Provider | `rpCity` | City | `text` |  |  |  |
| Referring Provider | Referring / External Provider | `rpState` | State | `text` |  |  |  |
| Referring Provider | Referring / External Provider | `rpZipCode` | ZIP Code | `text` |  |  |  |
| Referring Provider | Referring / External Provider | `rpIsActive` | Is Active | `checkbox` |  |  |  |

### Required Fields — `required_fields_cf`

Screen: 1 page(s) · 2 section(s) · 7 field(s) · UI LIVE · DB MISSING · tables `APPOINTMENTS`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `ELIGIBILITY_CHECKS`, `ENCOUNTERS`, `PAYERS_MASTER`, `PAYMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Required Field Policy (ECW-AD-18/27) | Policy Definition (ECW-AD-18) | `entityType` | Entity Type | `select` |  |  |  |
| Required Field Policy (ECW-AD-18/27) | Policy Definition (ECW-AD-18) | `visitType` | Visit Type Filter | `text` |  |  |  |
| Required Field Policy (ECW-AD-18/27) | Policy Definition (ECW-AD-18) | `contextScope` | Context Scope | `select` |  |  |  |
| Required Field Policy (ECW-AD-18/27) | Policy Definition (ECW-AD-18) | `policyName` | Policy Name | `text` | Y |  |  |
| Required Field Policy (ECW-AD-18/27) | Policy Definition (ECW-AD-18) | `isActive` | Policy Active | `checkbox` |  |  |  |
| Required Field Policy (ECW-AD-18/27) | Required Fields (ECW-AD-27) | `requiredFieldsJson` | Required Fields JSON | `textarea` |  |  |  |
| Required Field Policy (ECW-AD-18/27) | Required Fields (ECW-AD-27) | `conditionalLogicNote` | Conditional Logic Note | `textarea` |  |  |  |

### Rules — `rules_cf`

Screen: 2 page(s) · 2 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `PAYERS_MASTER`, `PAYER_RULES`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Billing Rule Search | Filters | `rulType` | Rule Type | `select` |  |  |  |
| Billing Rule Search | Filters | `rulSearch` | Search Text | `text` |  |  |  |
| Billing Rule Search | Filters | `rulPayerId` | Payer ID (for payer rules) | `text` |  |  |  |
| Rule Detail | Selected Rule | `rulId` | ID | `text` |  |  |  |
| Rule Detail | Selected Rule | `rulRuleType` | Type | `text` |  |  |  |
| Rule Detail | Selected Rule | `rulDescription` | Description | `text` |  |  |  |
| Rule Detail | Selected Rule | `rulPayerName` | Payer Name | `text` |  |  |  |
| Rule Detail | Selected Rule | `rulRuleName` | Rule Name | `text` |  |  |  |
| Rule Detail | Selected Rule | `rulErrorCode` | Error/Rule Code | `text` |  |  |  |
| Rule Detail | Selected Rule | `rulSuggestion` | Suggestion | `text` |  |  |  |
| Rule Detail | Selected Rule | `rulAction` | Action | `text` |  |  |  |
| Rule Detail | Selected Rule | `rulSeverity` | Severity | `text` |  |  |  |
| Rule Detail | Selected Rule | `rulPriority` | Priority | `number` |  |  |  |
| Rule Detail | Selected Rule | `rulEffectiveDate` | Effective Date | `date` |  |  |  |
| Rule Detail | Selected Rule | `rulIsActive` | Active | `checkbox` |  |  |  |
| Rule Detail | Selected Rule | `rulCondition` | Condition JSON | `textarea` |  |  |  |

### Rx Provider Credentials — `RX_PROVIDER_CREDENTIALS`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `PATIENT_INSURANCES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider Rx Credential | Rx Provider Credentials (ECW-RX-1; RxPrescribingRoutes; GET /api/rx-provider-credentials?providerId= = list; POST = create; PUT /{id} = update; DELETE /{id} = remove; rx_provider_credentials table; fields: id/providerId/deaNumber(format: 2-letter+7-digit)/schedules(controlled-substance schedules: II/III/IV/V)/sureScriptsId/npi/isActive/expiresAt; org-scoped; show=true browsable admin catalog) | `rpcId` | Credential ID (read-only UUID) | `text` |  |  |  |
| Provider Rx Credential | Rx Provider Credentials (ECW-RX-1; RxPrescribingRoutes; GET /api/rx-provider-credentials?providerId= = list; POST = create; PUT /{id} = update; DELETE /{id} = remove; rx_provider_credentials table; fields: id/providerId/deaNumber(format: 2-letter+7-digit)/schedules(controlled-substance schedules: II/III/IV/V)/sureScriptsId/npi/isActive/expiresAt; org-scoped; show=true browsable admin catalog) | `rpcProviderId` | Provider ID (required; UUID) | `text` | Y |  |  |
| Provider Rx Credential | Rx Provider Credentials (ECW-RX-1; RxPrescribingRoutes; GET /api/rx-provider-credentials?providerId= = list; POST = create; PUT /{id} = update; DELETE /{id} = remove; rx_provider_credentials table; fields: id/providerId/deaNumber(format: 2-letter+7-digit)/schedules(controlled-substance schedules: II/III/IV/V)/sureScriptsId/npi/isActive/expiresAt; org-scoped; show=true browsable admin catalog) | `rpcDeaNumber` | DEA Number (2-letter + 7-digit; e.g. AB1234563) | `text` |  |  |  |
| Provider Rx Credential | Rx Provider Credentials (ECW-RX-1; RxPrescribingRoutes; GET /api/rx-provider-credentials?providerId= = list; POST = create; PUT /{id} = update; DELETE /{id} = remove; rx_provider_credentials table; fields: id/providerId/deaNumber(format: 2-letter+7-digit)/schedules(controlled-substance schedules: II/III/IV/V)/sureScriptsId/npi/isActive/expiresAt; org-scoped; show=true browsable admin catalog) | `rpcSchedules` | DEA Schedules (controlled substance schedules; e.g. II,III,IV) | `text` |  |  |  |
| Provider Rx Credential | Rx Provider Credentials (ECW-RX-1; RxPrescribingRoutes; GET /api/rx-provider-credentials?providerId= = list; POST = create; PUT /{id} = update; DELETE /{id} = remove; rx_provider_credentials table; fields: id/providerId/deaNumber(format: 2-letter+7-digit)/schedules(controlled-substance schedules: II/III/IV/V)/sureScriptsId/npi/isActive/expiresAt; org-scoped; show=true browsable admin catalog) | `rpcSureScriptsId` | SureScripts ID (electronic prescribing network ID) | `text` |  |  |  |
| Provider Rx Credential | Rx Provider Credentials (ECW-RX-1; RxPrescribingRoutes; GET /api/rx-provider-credentials?providerId= = list; POST = create; PUT /{id} = update; DELETE /{id} = remove; rx_provider_credentials table; fields: id/providerId/deaNumber(format: 2-letter+7-digit)/schedules(controlled-substance schedules: II/III/IV/V)/sureScriptsId/npi/isActive/expiresAt; org-scoped; show=true browsable admin catalog) | `rpcNpi` | NPI (10-digit National Provider Identifier) | `text` |  |  |  |
| Provider Rx Credential | Rx Provider Credentials (ECW-RX-1; RxPrescribingRoutes; GET /api/rx-provider-credentials?providerId= = list; POST = create; PUT /{id} = update; DELETE /{id} = remove; rx_provider_credentials table; fields: id/providerId/deaNumber(format: 2-letter+7-digit)/schedules(controlled-substance schedules: II/III/IV/V)/sureScriptsId/npi/isActive/expiresAt; org-scoped; show=true browsable admin catalog) | `rpcIsActive` | Is Active (true/false) | `checkbox` |  |  |  |
| Provider Rx Credential | Rx Provider Credentials (ECW-RX-1; RxPrescribingRoutes; GET /api/rx-provider-credentials?providerId= = list; POST = create; PUT /{id} = update; DELETE /{id} = remove; rx_provider_credentials table; fields: id/providerId/deaNumber(format: 2-letter+7-digit)/schedules(controlled-substance schedules: II/III/IV/V)/sureScriptsId/npi/isActive/expiresAt; org-scoped; show=true browsable admin catalog) | `rpcExpiresAt` | Expires At (DEA/SureScripts expiration; YYYY-MM-DD) | `text` |  |  |  |

### School/Work Notes — `school_work_note_cf`

Screen: 1 page(s) · 4 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| School / Work Note | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| School / Work Note | Patient | `noteDate` | Note Date | `date` | Y |  |  |
| School / Work Note | Note Type | `noteType` | Note Type | `select` | Y |  |  |
| School / Work Note | Note Type | `reasonForAbsence` | Reason for Absence | `select` |  |  |  |
| School / Work Note | Dates & Restrictions | `absentFrom` | Absent From Date | `date` | Y |  |  |
| School / Work Note | Dates & Restrictions | `absentThrough` | Absent Through Date | `date` | Y |  |  |
| School / Work Note | Dates & Restrictions | `returnDate` | Cleared to Return Date | `date` |  |  |  |
| School / Work Note | Dates & Restrictions | `restrictions` | Restrictions / Accommodations | `textarea` |  |  |  |
| School / Work Note | Dates & Restrictions | `requiresAccommodation` | Ongoing accommodation required (ADA) | `checkbox` |  |  |  |
| School / Work Note | Dates & Restrictions | `accommodationDetail` | Accommodation Details | `textarea` |  |  |  |
| School / Work Note | Letter / Note Content | `noteNarrative` | Letter Body / Note Text | `textarea` | Y |  |  |
| School / Work Note | Letter / Note Content | `deliverTo` | Deliver / Address To | `text` |  |  |  |
| School / Work Note | Letter / Note Content | `noteMethod` | Delivery Method | `select` |  |  |  |

### Security Settings — `security_settings_cf`

Screen: 1 page(s) · 5 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Security & Access Control Settings | Session & Timeout | `sessionTimeoutMinutes` | Idle Session Timeout (minutes) | `number` |  |  |  |
| Security & Access Control Settings | Session & Timeout | `sessionLockEnabled` | Enable workstation lock (HIPAA lockout) | `checkbox` |  |  |  |
| Security & Access Control Settings | Session & Timeout | `showLogoutWarning` | Show logout warning before timeout | `checkbox` |  |  |  |
| Security & Access Control Settings | Session & Timeout | `logoutWarningMinutes` | Warning shown N minutes before timeout | `number` |  |  |  |
| Security & Access Control Settings | Password Policy | `passwordMinLength` | Minimum Password Length | `number` |  |  |  |
| Security & Access Control Settings | Password Policy | `passwordRequireUppercase` | Require uppercase letter | `checkbox` |  |  |  |
| Security & Access Control Settings | Password Policy | `passwordRequireNumber` | Require number | `checkbox` |  |  |  |
| Security & Access Control Settings | Password Policy | `passwordRequireSpecial` | Require special character | `checkbox` |  |  |  |
| Security & Access Control Settings | Password Policy | `passwordExpiryDays` | Password Expiry (days, 0=never) | `number` |  |  |  |
| Security & Access Control Settings | Password Policy | `passwordHistoryCount` | Password History (cannot reuse last N) | `number` |  |  |  |
| Security & Access Control Settings | Multi-Factor Authentication | `mfaRequired` | MFA Requirement | `select` |  |  |  |
| Security & Access Control Settings | Multi-Factor Authentication | `mfaMethods` | Allowed MFA Methods | `text` |  |  |  |
| Security & Access Control Settings | Access Restrictions | `ipWhitelistEnabled` | Enable IP whitelist (restrict logins by IP) | `checkbox` |  |  |  |
| Security & Access Control Settings | Access Restrictions | `ipWhitelist` | Allowed IP Addresses / Ranges | `textarea` |  |  |  |
| Security & Access Control Settings | Access Restrictions | `maxLoginAttempts` | Maximum Failed Login Attempts Before Lockout | `number` |  |  |  |
| Security & Access Control Settings | Access Restrictions | `lockoutDurationMinutes` | Account Lockout Duration (minutes) | `number` |  |  |  |
| Security & Access Control Settings | Access Restrictions | `allowConcurrentSessions` | Allow concurrent sessions (same user, multiple devices) | `checkbox` |  |  |  |
| Security & Access Control Settings | Audit & Compliance | `auditAllAccess` | Audit all record access (full PHI access log) | `checkbox` |  |  |  |
| Security & Access Control Settings | Audit & Compliance | `auditRetentionDays` | Audit Log Retention (days) | `number` |  |  |  |
| Security & Access Control Settings | Audit & Compliance | `hipaaBreachNotificationEmail` | HIPAA Breach Notification Email | `email` |  |  |  |

### Session Locks — `session_locks_cf`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB MISSING

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Session Lock | Lock Details | `resource_type` | Resource Type | `text` |  |  |  |
| Session Lock | Lock Details | `resource_id` | Resource ID | `text` |  |  |  |
| Session Lock | Lock Details | `locked_by_name` | Locked By | `text` |  |  |  |
| Session Lock | Lock Details | `locked_at` | Locked At | `date` |  |  |  |
| Session Lock | Lock Details | `expires_at` | Expires At | `date` |  |  |  |

### Slot Display Config — `slot_config_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `ENCOUNTERS`, `PATIENTS`, `PROVIDERS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Schedule Slot Text Configuration | Slot Display Settings | `showEligibilityIcon` | Show Eligibility Icon on Slot | `checkbox` |  | showEligibilityIcon |  |
| Schedule Slot Text Configuration | Slot Display Settings | `patientPopupTimeoutSec` | Patient Popup Timeout (seconds) | `number` |  | patientPopupTimeoutSec |  |

### Staff Management — `staff_management_cf`

Screen: 1 page(s) · 2 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Staff & User Account Management | Create / Edit Staff Member | `firstName` | First Name | `text` | Y |  |  |
| Staff & User Account Management | Create / Edit Staff Member | `lastName` | Last Name | `text` | Y |  |  |
| Staff & User Account Management | Create / Edit Staff Member | `email` | Email (login) | `email` | Y |  |  |
| Staff & User Account Management | Create / Edit Staff Member | `role` | Role | `select` | Y |  |  |
| Staff & User Account Management | Create / Edit Staff Member | `npi` | NPI (if provider) | `text` |  |  |  |
| Staff & User Account Management | Create / Edit Staff Member | `deaNumber` | DEA Number (if prescriber) | `text` |  |  |  |
| Staff & User Account Management | Create / Edit Staff Member | `stateLicense` | State License Number | `text` |  |  |  |
| Staff & User Account Management | Create / Edit Staff Member | `specialty` | Specialty / Department | `text` |  |  |  |
| Staff & User Account Management | Create / Edit Staff Member | `supervising` | Supervising Provider (for NP/PA) | `typeahead` |  |  |  |
| Staff & User Account Management | Create / Edit Staff Member | `active` | Active Account | `checkbox` |  |  |  |
| Staff & User Account Management | Create / Edit Staff Member | `canPrescribe` | Prescribing privileges | `checkbox` |  |  |  |
| Staff & User Account Management | Create / Edit Staff Member | `canAccessFinancials` | Access to financial/billing data | `checkbox` |  |  |  |
| Staff & User Account Management | Practice Assignment | `primaryPractice` | Primary Practice | `text` |  |  |  |
| Staff & User Account Management | Practice Assignment | `additionalPractices` | Additional Practices (comma-sep) | `text` |  |  |  |

### Stale Alerts — `stale_workflow_alerts_cf`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Stale Alert | Alert Details | `alert_type` | Alert Type | `text` |  |  |  |
| Stale Alert | Alert Details | `patient_id` | Patient | `typeahead` |  |  |  |
| Stale Alert | Alert Details | `created_at` | Created At | `date` |  |  |  |
| Stale Alert | Alert Details | `days_stale` | Days Stale | `number` |  |  |  |
| Stale Alert | Alert Details | `message` | Alert Message | `textarea` |  |  |  |
| Stale Alert | Alert Details | `status` | Status | `select` |  |  |  |

### Supervision — `provider_supervision`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDER_SUPERVISION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider Supervision | Supervision Relationship | `supervisorProviderId` | Supervisor | `text` | Y |  |  |
| Provider Supervision | Supervision Relationship | `supervisedProviderId` | Supervised Provider | `text` | Y |  |  |
| Provider Supervision | Supervision Relationship | `practiceId` | Practice | `text` |  |  |  |
| Provider Supervision | Supervision Relationship | `supervisionType` | Supervision Type | `text` |  |  |  |
| Provider Supervision | Supervision Relationship | `effectiveDate` | Effective Date | `text` |  |  |  |
| Provider Supervision | Supervision Relationship | `endDate` | End Date | `text` |  |  |  |
| Provider Supervision | Supervision Relationship | `isActive` | Active | `checkbox` |  |  |  |

### Template Versions — `template_evolution_cf`

Screen: 1 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB MISSING · tables `APPOINTMENTS`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `ELIGIBILITY_CHECKS`, `ENCOUNTERS`, `PAYERS_MASTER`, `PAYMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Template Version & Recovery (ECW-CL-67) | Template Evolution History | `templateName` | Template Name | `text` |  |  |  |
| Template Version & Recovery (ECW-CL-67) | Template Evolution History | `currentVersion` | Current Version | `text` |  |  |  |
| Template Version & Recovery (ECW-CL-67) | Template Evolution History | `publishedDate` | Current Version Published | `date` |  |  |  |
| Template Version & Recovery (ECW-CL-67) | Template Evolution History | `priorVersions` | Prior Versions (latest first) | `textarea` |  |  |  |
| Template Version & Recovery (ECW-CL-67) | Legacy Note Data Recovery | `legacyNotesCount` | Notes Using Prior Versions | `number` |  |  |  |
| Template Version & Recovery (ECW-CL-67) | Legacy Note Data Recovery | `recoveryAction` | Data Recovery Action | `select` |  |  |  |
| Template Version & Recovery (ECW-CL-67) | Legacy Note Data Recovery | `affectedFields` | Affected Fields / Sections | `textarea` |  |  |  |
| Template Version & Recovery (ECW-CL-67) | Legacy Note Data Recovery | `recoveryNote` | Recovery Notes | `textarea` |  |  |  |

### Testing Date — `SETTINGS_TESTING_DATE`

Screen: 1 page(s) · 1 section(s) · 3 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Testing Date Override | Testing Date (QA override for service date calculations; ORG_SETTINGS to modify) | `stdEnabled` | Testing Date Enabled (true/false) | `checkbox` |  |  |  |
| Testing Date Override | Testing Date (QA override for service date calculations; ORG_SETTINGS to modify) | `stdValue` | Override Date (YYYY-MM-DD; used when enabled=true) | `text` |  |  |  |
| Testing Date Override | Testing Date (QA override for service date calculations; ORG_SETTINGS to modify) | `stdUpdatedAt` | Last Updated (read-only) | `text` |  |  |  |

### Theme Settings — `SETTINGS_THEME`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| UI Theme Preferences | Theme Settings (mode/colors/font/compact; ORG_SETTINGS to save; no persistent storage yet) | `sthmMode` | Mode (light/dark; default light) | `text` |  |  |  |
| UI Theme Preferences | Theme Settings (mode/colors/font/compact; ORG_SETTINGS to save; no persistent storage yet) | `sthmPrimaryColor` | Primary Color (hex; default #1976d2) | `text` |  |  |  |
| UI Theme Preferences | Theme Settings (mode/colors/font/compact; ORG_SETTINGS to save; no persistent storage yet) | `sthmSecondaryColor` | Secondary Color (hex; default #424242) | `text` |  |  |  |
| UI Theme Preferences | Theme Settings (mode/colors/font/compact; ORG_SETTINGS to save; no persistent storage yet) | `sthmAccentColor` | Accent Color (hex; default #82b1ff) | `text` |  |  |  |
| UI Theme Preferences | Theme Settings (mode/colors/font/compact; ORG_SETTINGS to save; no persistent storage yet) | `sthmFontSize` | Font Size (small/medium/large; default medium) | `text` |  |  |  |
| UI Theme Preferences | Theme Settings (mode/colors/font/compact; ORG_SETTINGS to save; no persistent storage yet) | `sthmCompactMode` | Compact Mode (true/false; default false) | `checkbox` |  |  |  |
| UI Theme Preferences | Theme Settings (mode/colors/font/compact; ORG_SETTINGS to save; no persistent storage yet) | `sthmSidebarCollapsed` | Sidebar Collapsed (true/false; default false) | `checkbox` |  |  |  |
| UI Theme Preferences | Theme Settings (mode/colors/font/compact; ORG_SETTINGS to save; no persistent storage yet) | `sthmShowNotifications` | Show Notifications (true/false; default true) | `checkbox` |  |  |  |

### User Settings — `user_preferences_cf`

Screen: 1 page(s) · 2 section(s) · 12 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| User Settings | Display Preferences | `nav.stage` | Navigation Stage | `select` |  |  |  |
| User Settings | Display Preferences | `defaultView` | Default View | `select` |  |  |  |
| User Settings | Display Preferences | `itemsPerPage` | Items Per Page | `number` |  |  |  |
| User Settings | Display Preferences | `dateFormat` | Date Format | `select` |  |  |  |
| User Settings | Display Preferences | `timezone` | Timezone | `text` |  |  |  |
| User Settings | Display Preferences | `language` | Language | `select` |  |  |  |
| User Settings | Workflow Preferences | `autoSaveNotes` | Auto-Save Notes | `checkbox` |  |  |  |
| User Settings | Workflow Preferences | `defaultEncounterTemplate` | Default Encounter Template | `text` |  |  |  |
| User Settings | Workflow Preferences | `defaultOrderProvider` | Default Order Provider | `text` |  |  |  |
| User Settings | Workflow Preferences | `showPatientAlerts` | Show Patient Alerts on Login | `checkbox` |  |  |  |
| User Settings | Workflow Preferences | `notificationEmail` | Notification Email | `email` |  |  |  |
| User Settings | Workflow Preferences | `outOfOfficeMessage` | Out-of-Office Message | `textarea` |  |  |  |

### Users — `users_cf`

Screen: 3 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `ORGANIZATIONS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| User | User Profile | `usrId` | User ID | `text` |  |  |  |
| User | User Profile | `usrEmail` | Email | `text` | Y |  |  |
| User | User Profile | `usrFirstName` | First Name | `text` | Y |  |  |
| User | User Profile | `usrLastName` | Last Name | `text` | Y |  |  |
| User | User Profile | `usrRole` | Role | `select` | Y |  |  |
| User | User Profile | `usrPhone` | Phone | `text` |  |  |  |
| User | User Profile | `usrIsActive` | Active | `checkbox` |  |  |  |
| User | User Profile | `usrPracticeIds` | Practice IDs (comma-separated UUIDs) | `textarea` |  |  |  |
| Create User | New User | `usrCreateEmail` | Email (required) | `text` | Y |  |  |
| Create User | New User | `usrCreateFirstName` | First Name (required) | `text` | Y |  |  |
| Create User | New User | `usrCreateLastName` | Last Name (required) | `text` | Y |  |  |
| Create User | New User | `usrCreatePassword` | Initial Password (required) | `text` | Y |  |  |
| Create User | New User | `usrCreateRole` | Role | `select` | Y |  |  |
| Create User | New User | `usrCreatePhone` | Phone | `text` |  |  |  |
| Create User | New User | `usrCreatePracticeIds` | Practice IDs (comma-separated UUIDs) | `textarea` |  |  |  |
| Change Password | Password Update | `usrCurrentPassword` | Current Password | `text` | Y |  |  |
| Change Password | Password Update | `usrNewPassword` | New Password | `text` | Y |  |  |

### Users — `users`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `ORGANIZATIONS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| User | User Details | `firstName` | First Name | `text` | Y |  |  |
| User | User Details | `lastName` | Last Name | `text` | Y |  |  |
| User | User Details | `email` | Email | `text` | Y |  |  |
| User | User Details | `role` | Role | `select` | Y |  |  |
| User | User Details | `practiceIds` | Practice IDs | `textarea` |  |  |  |
| User | User Details | `isActive` | Active | `checkbox` |  |  |  |
| User | User Details | `mfaEnabled` | MFA Enabled | `checkbox` |  |  |  |

### Users — `USERS`

Screen: 1 page(s) · 2 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `ORGANIZATIONS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| User | User Account | `usrId` | User ID (read-only) | `text` |  |  |  |
| User | User Account | `usrEmail` | Email (required; unique) | `text` | Y |  |  |
| User | User Account | `usrFirstName` | First Name | `text` |  |  |  |
| User | User Account | `usrLastName` | Last Name | `text` |  |  |  |
| User | User Account | `usrPhone` | Phone | `text` |  |  |  |
| User | User Account | `usrRole` | Role (biller/admin/provider/super_admin; USERS_MANAGE) | `text` |  |  |  |
| User | User Account | `usrStatus` | Status (active/inactive/suspended) | `text` |  |  |  |
| User | User Account | `usrPracticeIds` | Practice IDs (JSON array) | `textarea` |  |  |  |
| User | User Account | `usrMfaEnabled` | MFA Required (USERS_MANAGE) | `checkbox` |  |  |  |
| User | User Account | `usrIsActive` | Is Active | `checkbox` |  |  |  |
| User | Change Password (POST /users/change-password) | `usrCurrentPassword` | Current Password (required for change) | `text` |  |  |  |
| User | Change Password (POST /users/change-password) | `usrNewPassword` | New Password (required for change) | `text` |  |  |  |

### Users & Staff — `users_admin_cf`

Screen: 0 page(s) · 0 section(s) · 0 field(s) · UI STUB · DB BUILT · tables `AUDIT_LOG`, `ORGANIZATIONS`, `USERS`

_No fields declared (nav stub)._

### Visit Types — `visit_types_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENT_TYPES`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Visit Type | Visit Type | `name` | Name | `text` | Y |  |  |
| Visit Type | Visit Type | `defaultDurationMinutes` | Default Duration (minutes) | `number` |  |  |  |
| Visit Type | Visit Type | `color` | Calendar Color | `select` |  |  |  |
| Visit Type | Visit Type | `isActive` | Active (bookable) | `checkbox` |  |  |  |
| Visit Type | Scheduling Rules | `reasonsForVisit` | Reasons for Visit (comma separated) | `textarea` |  |  |  |
| Visit Type | Scheduling Rules | `maxDailySlots` | Max Daily Slots | `number` |  |  |  |
| Visit Type | Scheduling Rules | `maxHourlySlots` | Max Hourly Slots | `number` |  |  |  |
| Visit Type | Scheduling Rules | `encounterTypeAssociation` | Encounter Type | `select` |  |  |  |
| Visit Type | Scheduling Rules | `allowPatientSelfSchedule` | Allow Patient Self-Schedule | `checkbox` |  |  |  |
| Visit Type | Scheduling Rules | `requireReferral` | Require Referral | `checkbox` |  |  |  |

### Vitals Config — `vitals_config_cf`

Screen: 1 page(s) · 4 section(s) · 23 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Vitals Capture Configuration | Measurement Units | `heightUnit` | Height Unit | `select` |  |  |  |
| Vitals Capture Configuration | Measurement Units | `weightUnit` | Weight Unit | `select` |  |  |  |
| Vitals Capture Configuration | Measurement Units | `tempUnit` | Temperature Unit | `select` |  |  |  |
| Vitals Capture Configuration | Required Vitals per Visit Type | `reqBP` | Blood Pressure (systolic/diastolic) required | `checkbox` |  |  |  |
| Vitals Capture Configuration | Required Vitals per Visit Type | `reqPulse` | Pulse / Heart Rate required | `checkbox` |  |  |  |
| Vitals Capture Configuration | Required Vitals per Visit Type | `reqTemp` | Temperature required | `checkbox` |  |  |  |
| Vitals Capture Configuration | Required Vitals per Visit Type | `reqHeight` | Height required | `checkbox` |  |  |  |
| Vitals Capture Configuration | Required Vitals per Visit Type | `reqWeight` | Weight required | `checkbox` |  |  |  |
| Vitals Capture Configuration | Required Vitals per Visit Type | `reqRespRate` | Respiratory Rate required | `checkbox` |  |  |  |
| Vitals Capture Configuration | Required Vitals per Visit Type | `reqSpo2` | SpO2 / Oxygen Saturation required | `checkbox` |  |  |  |
| Vitals Capture Configuration | Required Vitals per Visit Type | `reqPainScore` | Pain Score (0-10) required | `checkbox` |  |  |  |
| Vitals Capture Configuration | Vital Sign Alert Thresholds | `bpSysHigh` | BP Systolic High Alert (mmHg) | `number` |  |  |  |
| Vitals Capture Configuration | Vital Sign Alert Thresholds | `bpSysLow` | BP Systolic Low Alert (mmHg) | `number` |  |  |  |
| Vitals Capture Configuration | Vital Sign Alert Thresholds | `bpDiaHigh` | BP Diastolic High Alert (mmHg) | `number` |  |  |  |
| Vitals Capture Configuration | Vital Sign Alert Thresholds | `pulseHigh` | Pulse High Alert (bpm) | `number` |  |  |  |
| Vitals Capture Configuration | Vital Sign Alert Thresholds | `pulseLow` | Pulse Low Alert (bpm) | `number` |  |  |  |
| Vitals Capture Configuration | Vital Sign Alert Thresholds | `spo2Low` | SpO2 Low Alert (%) | `number` |  |  |  |
| Vitals Capture Configuration | Vital Sign Alert Thresholds | `tempHigh` | Temperature High Alert (°F) | `number` |  |  |  |
| Vitals Capture Configuration | Display Options | `showBmiAuto` | Auto-calculate and display BMI from height/weight | `checkbox` |  |  |  |
| Vitals Capture Configuration | Display Options | `showBpPosition` | Show BP position (sitting/standing/lying) | `checkbox` |  |  |  |
| Vitals Capture Configuration | Display Options | `showPulseRhythm` | Show pulse rhythm (regular/irregular) | `checkbox` |  |  |  |
| Vitals Capture Configuration | Display Options | `showSmokingStatus` | Show smoking status in vitals panel | `checkbox` |  |  |  |
| Vitals Capture Configuration | Display Options | `showHeadCircumference` | Show head circumference (for pediatrics) | `checkbox` |  |  |  |

### Workflows — `workflow_browser_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Workflow Definition | Workflow | `id` | Workflow ID | `text` |  |  |  |
| Workflow Definition | Workflow | `name` | Name | `text` |  |  |  |
| Workflow Definition | Workflow | `stepCount` | Step Count | `number` |  |  |  |
| Workflow Definition | Workflow | `description` | Description | `textarea` |  |  |  |

## Cardiology

### AF Ablation and Rhythm Control — `cardiology_atrial_fibrillation_ablation_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Atrial Fibrillation — Rhythm vs. Rate, Ablation, and Anticoagulation | Rhythm vs. Rate Control Strategy | `strategy` | Rhythm vs. Rate Control Decision | `select` |  |  |  |
| Atrial Fibrillation — Rhythm vs. Rate, Ablation, and Anticoagulation | Catheter Ablation and Periprocedural Anticoagulation | `ablation_criteria` | Ablation — Indications, Outcomes, and Complications (pulmonary vein isolation (PVI): cornerstone; point-by-point RF (CARTO-EnSite) vs. single-shot (cryoablation, PVAC, FARAPULSE pulsed-field ablation — PFA); CASTLE-AF: ablation in AF+HFrEF: 38% relative reduction mortality + HF hospitalization; CABANA trial (AF without HF): ablation + antiarrhythmics superior for primary endpoint only in per-protocol analysis; SUCCESS RATES: paroxysmal AF: 80% single-procedure freedom from AF at 12 months; persistent AF: 50-60%; complications: pulmonary vein stenosis (1%), stroke/TIA (1%), tamponade (1-2%), phrenic nerve injury, atrio-esophageal fistula (<0.1%; most feared), esophageal temp monitoring during RF) | `text` |  |  |  |
| Atrial Fibrillation — Rhythm vs. Rate, Ablation, and Anticoagulation | Catheter Ablation and Periprocedural Anticoagulation | `periop_oac` | Periprocedural Anticoagulation | `select` |  |  |  |

### Acute Coronary Syndrome — `cardiology_acs_management_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Coronary Syndrome: STEMI, NSTEMI/UA, Antiplatelet Therapy, and Secondary Prevention | ACS Classification, STEMI Reperfusion, GRACE/TIMI Scoring, and Troponin | `acs_classification` | STEMI Primary PCI Door-to-Balloon 90 Minutes, Fibrinolysis If No PCI 120 min, NSTEMI GRACE Score, Hs-Troponin 0/1/3h Rule-In/Out | `select` |  |  |  |
| Acute Coronary Syndrome: STEMI, NSTEMI/UA, Antiplatelet Therapy, and Secondary Prevention | ACS Classification, STEMI Reperfusion, GRACE/TIMI Scoring, and Troponin | `acs_antithrombotic` | ACS Antiplatelet Therapy: Aspirin, Ticagrelor PLATO, Prasugrel TRITON, Cangrelor IV, GPIIb/IIIa, and Anticoagulation -- ACS ANTIPLATELET THERAPY: ASPIRIN (ASPIRIN LOADING 162-325 mg CHEWED [faster absorption]; THEN 81 mg DAILY INDEFINITELY; COX-1 IRREVERSIBLE INHIBITION; reduces TXA2-mediated platelet aggregation; ESSENTIAL [reduce STEMI mortality 23% ISIS-2 landmark 1988; 10% reduction recurring ACS]; ENTERIC COATED ASPIRIN SLOWER ABSORPTION [not recommended for loading]; P2Y12 INHIBITORS [dual antiplatelet; DAPT; MANDATORY with PCI + stent; ACS]: TICAGRELOR [Brilinta; REVERSIBLE P2Y12 INHIBITOR; PLATO NEJM 2010: TICAGRELOR vs CLOPIDOGREL in ACS: CV DEATH + MI + STROKE: 9.8% vs 11.7%; HR 0.84; MORTALITY REDUCTION 21% vs clopidogrel [UNIQUE: CLOPIDOGREL DID NOT SHOW MORTALITY BENEFIT]; DYSPNEA [COMMON; NON-DOSE-LIMITING; MECHANISM ADENOSINE REUPTAKE; RESOLVES SPONTANEOUSLY]; BRADYCARDIA [VENTRICULAR PAUSES]; AVOID WITH STRONG CYP3A4 INHIBITORS [CLARITHROMYCIN; KETOCONAZOLE] AND INDUCERS [RIFAMPIN; CARBAMAZEPINE; PHENYTOIN]; AVOID ASPIRIN ABOVE 100 mg/day [REDUCES TICAGRELOR EFFICACY via unclear mechanism; use aspirin 81 mg QD ONLY with ticagrelor]; PREFERRED OVER CLOPIDOGREL FOR STEMI + NSTEMI (AHA Class I); LOADING DOSE: 180 mg PO then 90 mg BID]; PRASUGREL [Effient; IRREVERSIBLE P2Y12; TRITON-TIMI 38 NEJM 2007: prasugrel vs clopidogrel in ACS WITH PCI: CV death + MI + stroke: 9.9% vs 12.1%; HR 0.81; MORE BLEEDING [fatal bleeding 0.4% vs 0.1%]; NET CLINICAL BENEFIT FAVORS PRASUGREL IN OVERALL ACS PCI POPULATION; ABSOLUTE CONTRAINDICATIONS: PRIOR STROKE OR TIA [INCREASED NET HARM; FDA BLACK BOX]; AGE ABOVE 75 [net benefit marginal; only use if high-risk diabetes + MI]; WEIGHT BELOW 60 kg [increased bleeding; consider lower dose 5 mg]; LOADING DOSE: 60 mg PO; MAINTENANCE 10 mg QD; AVOID IN STEMI TREATED WITH FIBRINOLYSIS]; CLOPIDOGREL [Plavix; PRODRUG; CYP2C19 METABOLIZED; PLATELET-INACTIVATED; RESPONSE VARIABILITY: CYP2C19*2 + *3 LOSS-OF-FUNCTION ALLELES [20-30% patients; reduced clopidogrel active metabolite; REDUCED PLATELET INHIBITION; CYP2C19 POOR METABOLIZER = CLOPIDOGREL INEFFECTIVE; TEST WITH PHARMACOGENOMIC TESTING; SWITCH TO TICAGRELOR or PRASUGREL in poor metabolizers]; PPI INTERACTION [OMEPRAZOLE inhibits CYP2C19; reduces clopidogrel efficacy; use PANTOPRAZOLE or RABEPRAZOLE instead; clinical significance: modest but use non-interacting PPI]; LOADING DOSE: 600 mg; MAINTENANCE 75 mg QD; CANGRELOR [Kengreal; IV P2Y12 inhibitor; RAPID ONSET [15 min]; RAPID OFFSET [1h]; USED IN CATH LAB: BRIDGE for patients not pre-loaded; or cangrelor as peri-procedural; CHAMPION PHOENIX NEJM 2013: cangrelor vs clopidogrel 600 mg at PCI: primary composite 4.7% vs 5.9%; p=0.005]; GPIIb/IIIa INHIBITORS [final common platelet aggregation pathway; ABCIXIMAB; TIROFIBAN; EPTIFIBATIDE; DIMINISHED ROLE with modern P2Y12 inhibitors; STILL USED: bail-out thrombectomy; large thrombus burden; TIROFIBAN preferred for NSTEMI upstream in high-risk]); ANTICOAGULATION IN ACS: HEPARIN [UFH IV; ACT-GUIDED in cath lab; PTT 50-70s; ANTIDOTE: PROTAMINE]; ENOXAPARIN [LMWH; 1 mg/kg SQ Q12h; ATOLL; SYNERGY; slightly superior to UFH in meta-analysis; RENAL ADJUSTMENT CrCl below 30: 1 mg/kg QD]; BIVALIRUDIN [ANGIOMAX; DIRECT THROMBIN INHIBITOR; HORIZONS-AMI NEJM 2008: STEMI primary PCI: bivalirudin vs UFH + GPIIb/IIIa: 30-day mortality LOWER with bivalirudin; LESS MAJOR BLEEDING [3.1% vs 4.8%]; BUT INCREASED STENT THROMBOSIS EARLY [0.3% vs 0.4%]; HEAT-PPCI [UFH no GPIIb/IIIa vs bivalirudin]: UFH safer; CURRENT PRACTICE: less bivalirudin use [UFH dominant]; ACS 2018 AHA: UFH preferred for STEMI]; FONDAPARINUX [ARIXTRA; FACTOR Xa INHIBITOR; OASIS-6: fondaparinux vs UFH in STEMI: REDUCED 30-day DEATH + REINFARCTION; CANNOT USE ALONE FOR PCI [must add UFH due to catheter thrombosis risk]; USED FOR CONSERVATIVE-MANAGED NSTEMI] | `text` |  |  |  |
| Acute Coronary Syndrome: STEMI, NSTEMI/UA, Antiplatelet Therapy, and Secondary Prevention | ACS Secondary Prevention: DAPT Duration, Statins, ACEI, Beta-Blockers, and Post-MI Care | `acs_dapt` | DAPT 12 Months Standard Post-ACS, Extended PEGASUS-TIMI 54 Ticagrelor 60mg, DAPT Score, Bleeding Risk Modifications | `select` |  |  |  |
| Acute Coronary Syndrome: STEMI, NSTEMI/UA, Antiplatelet Therapy, and Secondary Prevention | ACS Secondary Prevention: DAPT Duration, Statins, ACEI, Beta-Blockers, and Post-MI Care | `acs_notes` | ACS Management Notes and Cardiology/Interventional Cardiology/Cardiac Surgery/Cardiac Rehabilitation/Pharmacy/Dietitian/Social Work/Palliative Care Coordination | `textarea` |  |  |  |

### Acute Pericarditis — `cardiology_acute_pericarditis_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Pericarditis — Diagnosis, Effusion, and Treatment | Diagnosis, Etiology, and ECG Findings | `peri_f1` | Acute Pericarditis Evaluation: EPIDEMIOLOGY (5 pct ACUTE CHEST PAIN PRESENTATIONS ED; MALE PREDOMINANCE 20-50Y; MOST COMMON DISEASE PERICARDIUM; RECURRENCE RATE 20-30 pct; ETIOLOGY (IDIOPATHIC VIRAL MOST COMMON 70-90 pct DEVELOPED WORLD; COXSACKIE A AND B ECHOVIRUS ADENOVIRUS; CMV EBV HHV6; INFLUENZA; HIV; AUTOIMMUNE CONNECTIVE TISSUE DISEASE (LUPUS RHEUMATOID ARTHRITIS SJOGREN SCLERODERMA; POST-CARDIAC INJURY SYNDROME (DRESSLER SYNDROME: POST-MI USUALLY WEEKS; POST-CARDIAC SURGERY; POST-ABLATION; SECONDARY IMMUNE-MEDIATED; BACTERIAL PURULENT: STAPHYLOCOCCUS STREPTOCOCCUS PNEUMOCOCCUS; HIGH MORTALITY; TUBERCULOSIS TB HIGH INCIDENCE DEVELOPING WORLD; NEOPLASTIC LUNG BREAST LYMPHOMA METASTATIC; UREMIA RENAL FAILURE; RADIATION MEDIASTINAL; TRAUMA; DIAGNOSTIC CRITERIA 2 OF 4 (1 PLEURITIC CHEST PAIN SHARP POSITIONAL; 2 FRICTION RUB LEATHERY SCRATCHING TRIPHASIC; 3 DIFFUSE ST ELEVATION CONCAVE UPWARD SADDLE-SHAPE; 4 NEW PERICARDIAL EFFUSION; ECG EVOLUTION: STAGE 1 DIFFUSE ST ELEVATION PR DEPRESSION; STAGE 2 NORMALIZATION; STAGE 3 T WAVE INVERSIONS; STAGE 4 NORMALIZATION; LABS: CRP ELEVATED MOST SENSITIVE MARKER; ESR ELEVATED; WBC NORMAL TO MILDLY ELEVATED; TROPONIN ELEVATED MYOPERICARDITIS; ANA ANTI-dsDNA ANCA RHEUM EVALUATION; TSH; PPD QUANTIFERON IF TB RISK; ECHOCARDIOGRAPHY: EFFUSION FUNCTION RV COLLAPSE TAMPONADE; CT CHEST RULE OUT OTHER CAUSES; CMR INFLAMMATION GADOLINIUM ENHANCEMENT) | `text` |  |  |  |
| Acute Pericarditis — Diagnosis, Effusion, and Treatment | Diagnosis, Etiology, and ECG Findings | `peri_f2` | Treatment, Effusion, and Complications | `select` |  |  |  |

### Adult Congenital Heart Disease — `cardiology_achd_adult_congenital_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ACHD — ASD, VSD, ToF, Fontan, Eisenmenger, Pregnancy | Simple Shunt Lesions in Adults | `asd_vsd` | ASD Closure Indications (Qp/Qs), Transcatheter vs. Surgical ASD Repair, and VSD in Adults (ADULT CONGENITAL HEART DISEASE (ACHD): EPIDEMIOLOGY: >2.5 million US adults with ACHD; complex ACHD growing due to surgical survival; specialist care required; ACHD COMPLEXITY (ACC/AHA 2018): SIMPLE: isolated ASD (sinus venosus); small VSD; mild pulmonic stenosis; corrected ACHD; MODERATE: primum ASD; moderate VSD; AVSD; coarctation; COMPLEX: complex single ventricle; ToF; Fontan; Eisenmenger; transposition; ATRIAL SEPTAL DEFECT (ASD) IN ADULTS: TYPES: OSTIUM SECUNDUM (70%): most common; percutaneous closure; SINUS VENOSUS (10-15%): associated anomalous pulmonary venous return (PAPVR); surgical; PRIMUM (15-20%): atrioventricular canal; cleft mitral valve; CORONARY SINUS ASD (rare); SPONTANEOUS CLOSURE: secundum ASD may close in early childhood; not in adults; HEMODYNAMICS: LEFT-TO-RIGHT SHUNT; QP/QS (pulmonary-to-systemic flow ratio); >1.5 = significant; CONSEQUENCES: RV VOLUME OVERLOAD; paradoxical embolism; atrial arrhythmias (AF; flutter); pulmonary hypertension (late); cryptogenic stroke; CLOSURE INDICATIONS: SYMPTOMATIC (dyspnea; paradoxical embolism); OR ASYMPTOMATIC with Qp/Qs >=1.5 + right heart dilation; OR CRYPTOGENIC STROKE/TIA: PFO + ASD; TRANSCATHETER CLOSURE: SECUNDUM ASD <=38mm with adequate rim; AMPLATZER SEPTAL OCCLUDER; PFO CLOSURE DEVICES: GORE Cardioform; TRANSCATHETER vs. MEDICAL: RESPECT; CLOSURE I; REDUCE; PC trials for stroke prevention; SURGICAL ASD REPAIR: sinus venosus; primum; large or unfavorable anatomy; DIRECT SUTURE or patch; CONCOMITANT: PAPVR reimplantation; MITRAL VALVE REPAIR (primum); VSD IN ADULTS: PERIMEMBRANOUS (most common); MUSCULAR; OUTLET (supracristal); INLET; SMALL RESTRICTIVE VSD: usually benign; spontaneous closure common; aortic regurgitation risk (perimembranous + outlet); MODERATE-LARGE VSD: LV VOLUME OVERLOAD; closure indicated; PAH risk | `text` |  |  |  |
| ACHD — ASD, VSD, ToF, Fontan, Eisenmenger, Pregnancy | Simple Shunt Lesions in Adults | `eisenmenger` | Eisenmenger Syndrome, WHO FC, Bosentan BREATHE-5 Trial, and Lung Transplant Evaluation | `select` |  |  |  |
| ACHD — ASD, VSD, ToF, Fontan, Eisenmenger, Pregnancy | Tetralogy of Fallot and Fontan Circulation | `tof_adults` | ToF Long-Term Issues — Pulmonary Regurgitation, RV Dilation, PVR Timing, and Arrhythmia Risk (TETRALOGY OF FALLOT (ToF) IN ADULTS: ANATOMY: VSD + RVOTO + OVERRIDING AORTA + RV HYPERTROPHY; surgical repair in infancy (usually); LONG-TERM ISSUES AFTER REPAIR: PULMONARY REGURGITATION (PR): most common residual; free PR from transannular patch; progressive RV dilation; TOLERATED for years but eventually RV dysfunction; PULMONARY VALVE REPLACEMENT (PVR) TIMING: RV indexed end-diastolic volume (RVEDVi) >160 mL/m2; RVEDVi >160 predicts non-normalized RV post-PVR; SYMPTOMS; sustained VT; RVOTO restenosis; QRS DURATION: >=180 ms = risk marker for VT/VF + sudden death; increasing QRS duration = progressive RV dilation; ARRHYTHMIA: INCISIONAL ATRIAL TACHYCARDIA (right atrial scar re-entry); VENTRICULAR TACHYCARDIA: scar-based; sustained VT = risk of sudden death; ELECTROPHYSIOLOGY STUDY (EPS): if symptomatic VT or wide QRS; ICD: documented VT/VF or high-risk features; CATHETER ABLATION: RVOTO scar VT; AORTIC DILATION: aortic root dilatation over time; aortic regurgitation; IMAGING: CARDIAC MRI: GOLD STANDARD for RV size + function; assess PR fraction; ECHO: standard; limited RV quantification; EXERCISE TESTING: functional assessment; arrhythmia provocation; ENDOCARDITIS PROPHYLAXIS: residual defects; prosthetic valves; PERCUTANEOUS PULMONARY VALVE (PPVI): MELODY VALVE (Medtronic): transcatheter; in a conduit; SAPIEN 3 (Edwards): in native RVOT (limited anatomy); CRESCENDO criteria; pulmonary regurgitation + RVOTO = ideal candidate; ALTERNATIVES TO HOMOGRAFT: BIOLOGICAL CONDUIT; bioprosthetic pulmonary valve | `text` |  |  |  |
| ACHD — ASD, VSD, ToF, Fontan, Eisenmenger, Pregnancy | Tetralogy of Fallot and Fontan Circulation | `fontan` | Fontan Physiology, Fontan-Associated Liver Disease (FALD), PLE, and Transition to Adult Care | `select` |  |  |  |

### Advanced HF / LVAD Eval — `cardiology_heart_failure_advanced_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Advanced Heart Failure — LVAD and Cardiac Transplant Evaluation | Advanced HF Criteria ("I NEED HELP") | `stage_d_criteria` | ACCF/AHA Stage D Identification | `select` |  |  |  |
| Advanced Heart Failure — LVAD and Cardiac Transplant Evaluation | Advanced HF Criteria ("I NEED HELP") | `lvad_candidacy` | LVAD (MCS) Candidacy | `select` |  |  |  |
| Advanced Heart Failure — LVAD and Cardiac Transplant Evaluation | Cardiac Transplant Evaluation | `transplant_criteria` | Transplant Eligibility Criteria (ISHLT guidelines; VO2 max <12 mL/kg/min on GDMT; dependent on LVAD or IV inotropes; refractory VT; age generally <70 (program-dependent); no active malignancy; no active infection; no fixed PVR >5 Wood units or TPG >15 mmHg; no severe COPD; BMI <35 generally; psychosocial assessment; social support; abstinence from substances; financial counseling) | `text` |  |  |  |
| Advanced Heart Failure — LVAD and Cardiac Transplant Evaluation | Cardiac Transplant Evaluation | `rhc_hemodynamics` | Right Heart Catheterization (RHC) Findings (PCWP (wedge) normal <12; elevated ≥18 = elevated filling pressures; CI <2.0 L/min/m2 = low output; PVR = (MPAP - PCWP) / CO in Wood units; >3 WU = significant; vasodilator challenge (nitroprusside, milrinone, inhaled NO) to test reversibility; HVPG if liver disease; must repeat post-LVAD if PVR was elevated to confirm reversibility) | `text` |  |  |  |

### Advanced HF — LVAD and Transplant — `cardiology_advanced_heart_failure_lvad_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Advanced HF — LVAD, INTERMACS, Transplant, Inotropes | Advanced Heart Failure Definition and Evaluation | `ahf_eval` | Advanced HF Definition, INTERMACS Profiles, and Hemodynamic Assessment (ADVANCED HEART FAILURE DEFINITION (2018 ESC + AHA/ACC): PERSISTENT SEVERE SYMPTOMS (NYHA IIIb-IV) despite OPTIMAL GUIDELINE-DIRECTED MEDICAL THERAPY (GDMT); LOW EF (<=35%) in most (but can include HFpEF with refractory symptoms); RECURRENT HOSPITALIZATIONS or high BNP/NT-proBNP; PROGRESSIVE DECLINE; END-ORGAN DYSFUNCTION (renal, hepatic); ADVANCED HF CONSIDERATION CRITERIA (I NEED HELP mnemonic): I: Inotropes or infusions dependent; N: NYHA IV symptoms; E: End-organ dysfunction (renal/hepatic); E: ejection fraction <25%; D: Defibrillator shocks (recurrent VT/VF); H: Hospitalizations >=2 in 12 months for HF; E: Edema (persists despite diuretics); L: Low blood pressure (SBP <90); P: ProBNP persistently elevated (NT-proBNP >=1000 or BNP >=400); INTERAGENCY REGISTRY FOR MECHANICALLY ASSISTED CIRCULATORY SUPPORT (INTERMACS) PROFILES: PROFILE 1: CRITICAL CARDIOGENIC SHOCK; crash and burn; PROFILE 2: PROGRESSIVE DECLINE on inotropic support; PROFILE 3: STABLE BUT INOTROPE DEPENDENT; PROFILE 4: RESTING SYMPTOMS; PROFILE 5: EXERTION INTOLERANT; PROFILE 6: EXERTION LIMITED; PROFILE 7: ADVANCED NYHA III; REFERRAL TO ADVANCED HF CENTER: PROFILE 1-3: urgent MCS consideration; PROFILE 4-6: elective evaluation; HEMODYNAMIC ASSESSMENT (RIGHT HEART CATHETERIZATION): CARDIAC OUTPUT (CO): Fick or thermodilution; CARDIAC INDEX (CI) <2.2 L/min/m2 = cardiogenic; PULMONARY CAPILLARY WEDGE PRESSURE (PCWP) >18 mmHg = elevated filling; PULMONARY VASCULAR RESISTANCE (PVR): FIXED PVR >5 Wood units = transplant contraindication; TRANSPULMONARY GRADIENT (TPG) = mean PAP - PCWP; DIASTOLIC PULMONARY GRADIENT (DPG) = diastolic PAP - PCWP; PULMONARY VASCULAR REACTIVITY TESTING: vasodilator trial; nitroprusside or sildenafil; reversibility of PVR; 6-MINUTE WALK TEST; CARDIOPULMONARY EXERCISE TESTING (CPET): peak VO2 <=12 mL/kg/min = poor prognosis; VE/VCO2 slope >35 = worse; PROGNOSIS: HEART FAILURE SURVIVAL SCORE (HFSS); SEATTLE HF MODEL (SHFM); MAGGIC; INTERMACS scores | `text` |  |  |  |
| Advanced HF — LVAD, INTERMACS, Transplant, Inotropes | Advanced Heart Failure Definition and Evaluation | `mcs` | Temporary MCS — IABP, Impella, Tandem Heart, and VA-ECMO | `select` |  |  |  |
| Advanced HF — LVAD, INTERMACS, Transplant, Inotropes | LVAD and Heart Transplant | `heartmate3` | HeartMate 3, Destination Therapy vs. Bridge to Transplant, MOMENTUM 3 Trial (LEFT VENTRICULAR ASSIST DEVICE (LVAD): MODERN DEVICES: HEARTMATE 3 (HM3): CENTRIFUGAL FLOW pump; FULLY MAGNETICALLY LEVITATED impeller; NO MECHANICAL BEARINGS (reduces pump thrombosis); FDA 2017; MOMENTUM 3 TRIAL: HM3 vs. HeartMate II; 2-year survival 79% vs. 60%; ELIMINATION OF PUMP THROMBOSIS; LESS STROKE than axial flow; HEARTWARE HVAD: centrifugal flow; COMPETING DEVICE; withdrawn from market (2021; manufacturing issues + inferior outcomes vs. HM3 in final analysis); INDICATION FOR LVAD: BRIDGE TO TRANSPLANT (BTT): maintain eligibility during wait; DESTINATION THERAPY (DT): permanent support if NOT transplant candidate (advanced age, comorbidities); REMATCH TRIAL: DT-LVAD vs. optimal medical therapy in non-transplant candidates; 52% vs. 25% survival at 1 year (LVAD); initiated the DT concept; BRIDGE TO DECISION (BTD): uncertain transplant candidacy; time-limited trial; BRIDGE TO RECOVERY: rare; young inflammatory cardiomyopathy; CANDIDACY ASSESSMENT: NO FIXED PVR >5 Wood units; no uncorrectable severe MR; no severe RV failure (RV support may be needed); no sepsis/malignancy; psychosocial support; LVAD COMPLICATIONS: GI BLEEDING: arteriovenous malformations; acquired von Willebrand disease (loss of high-molecular-weight VWF multimers due to shear stress); AORTIC REGURGITATION (progressive with continuous flow); STROKE (ischemic + hemorrhagic); DRIVELINE INFECTION (most common; exit site + deep); PUMP THROMBOSIS (HM3: rare; HM2: higher); RV FAILURE post-LVAD; ANTICOAGULATION: warfarin (INR 2-3) + aspirin; FOLLOW-UP: DEVICE CLINIC monthly; ECHO; HVAD parameters monitoring | `text` |  |  |  |
| Advanced HF — LVAD, INTERMACS, Transplant, Inotropes | LVAD and Heart Transplant | `hxtx` | Heart Transplant UNOS Criteria, Waitlist Status, and Post-Transplant Immunosuppression | `select` |  |  |  |

### Afib Management — `cardiology_afib_management_cf`

Screen: 1 page(s) · 4 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Atrial Fibrillation Management | AFib Classification and Burden | `afib_type` | AFib Type | `select` |  |  |  |
| Atrial Fibrillation Management | AFib Classification and Burden | `afib_first_detected` | First Detected Episode | `select` |  |  |  |
| Atrial Fibrillation Management | AFib Classification and Burden | `afib_etiologies` | Likely Etiology or Trigger | `select` |  |  |  |
| Atrial Fibrillation Management | AFib Classification and Burden | `afib_symptoms` | Symptom Burden (EHRA Classification) | `select` |  |  |  |
| Atrial Fibrillation Management | AFib Classification and Burden | `afib_ventricular_rate` | Current Ventricular Rate (bpm) | `text` |  |  |  |
| Atrial Fibrillation Management | Stroke Risk and Anticoagulation | `afib_chads_score` | CHA2DS2-VASc Score | `select` |  |  |  |
| Atrial Fibrillation Management | Stroke Risk and Anticoagulation | `afib_chads_factors` | CHA2DS2-VASc Risk Factors Present | `select` |  |  |  |
| Atrial Fibrillation Management | Stroke Risk and Anticoagulation | `afib_anticoag_agent` | Anticoagulation Agent | `select` |  |  |  |
| Atrial Fibrillation Management | Stroke Risk and Anticoagulation | `afib_bleed_risk` | Bleeding Risk (HAS-BLED Assessment) | `select` |  |  |  |
| Atrial Fibrillation Management | Rate Control vs. Rhythm Control | `afib_strategy` | Treatment Strategy | `select` |  |  |  |
| Atrial Fibrillation Management | Rate Control vs. Rhythm Control | `afib_rate_control_agent` | Rate Control Medication | `select` |  |  |  |
| Atrial Fibrillation Management | Rate Control vs. Rhythm Control | `afib_rate_target` | Ventricular Rate Target | `select` |  |  |  |
| Atrial Fibrillation Management | Rate Control vs. Rhythm Control | `afib_antiarrhythmic` | Antiarrhythmic Drug (AAD) for Rhythm Control | `select` |  |  |  |
| Atrial Fibrillation Management | Rate Control vs. Rhythm Control | `afib_cardioversion` | Electrical Cardioversion Plan | `select` |  |  |  |
| Atrial Fibrillation Management | Rate Control vs. Rhythm Control | `afib_ablation` | Ablation Strategy | `select` |  |  |  |
| Atrial Fibrillation Management | Monitoring and Follow-Up | `afib_echo` | Echocardiogram | `select` |  |  |  |
| Atrial Fibrillation Management | Monitoring and Follow-Up | `afib_holter` | Cardiac Monitoring | `select` |  |  |  |
| Atrial Fibrillation Management | Monitoring and Follow-Up | `afib_thyroid` | Thyroid Function | `select` |  |  |  |
| Atrial Fibrillation Management | Monitoring and Follow-Up | `afib_followup` | Follow-Up Plan | `select` |  |  |  |
| Atrial Fibrillation Management | Monitoring and Follow-Up | `afib_notes` | AFib Management Notes and Plan | `textarea` |  |  |  |

### Afib Rate vs Rhythm Control — `cardiology_atrial_fibrillation_rate_rhythm_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Atrial Fibrillation — Rate vs Rhythm Control Strategy | AF Classification and Stroke Risk | `af_type` | AF Classification | `select` |  |  |  |
| Atrial Fibrillation — Rate vs Rhythm Control Strategy | AF Classification and Stroke Risk | `chads_vasc` | CHA2DS2-VASc Score (CHF 1pt; HTN 1pt; Age ≥75 2pts; Diabetes 1pt; Stroke/TIA 2pts; Vascular disease 1pt; Age 65-74 1pt; Sex female 1pt; score ≥2 in males or ≥3 in females = anticoagulation recommended; score 1 male or 2 female = consider; DOAC preferred over warfarin for non-valvular AF) | `number` |  |  |  |
| Atrial Fibrillation — Rate vs Rhythm Control Strategy | Rate and Rhythm Control Strategy | `anticoagulation` | Anticoagulation Choice | `select` |  |  |  |
| Atrial Fibrillation — Rate vs Rhythm Control Strategy | Rate and Rhythm Control Strategy | `rhythm_control` | Rhythm Control Approach | `select` |  |  |  |

### Aortic Aneurysm — `cardiology_aortic_aneurysm_cf`

Screen: 1 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Aortic Aneurysm and Dissection: Surveillance, Repair Thresholds, and Genetic Syndromes | Classification, Imaging, and Repair Thresholds | `aortic_classification` | Aortic Aneurysm Classification and Imaging | `select` |  |  |  |
| Aortic Aneurysm and Dissection: Surveillance, Repair Thresholds, and Genetic Syndromes | Classification, Imaging, and Repair Thresholds | `aortic_repair` | Repair Strategies: EVAR, TEVAR, and Open Surgery | `select` |  |  |  |
| Aortic Aneurysm and Dissection: Surveillance, Repair Thresholds, and Genetic Syndromes | Genetic Syndromes, Dissection Management, and Medical Therapy | `aortic_genetic_syndromes` | Hereditary Thoracic Aortic Disease (HTAD) | `select` |  |  |  |
| Aortic Aneurysm and Dissection: Surveillance, Repair Thresholds, and Genetic Syndromes | Genetic Syndromes, Dissection Management, and Medical Therapy | `aortic_dissection_acute` | Acute Aortic Dissection: Emergency Management | `select` |  |  |  |
| Aortic Aneurysm and Dissection: Surveillance, Repair Thresholds, and Genetic Syndromes | Genetic Syndromes, Dissection Management, and Medical Therapy | `aortic_medical` | Medical Therapy and Long-Term Surveillance — beta-blockers: first-line for all aortic aneurysms (reduce dP/dt and heart rate; atenolol 50-100 mg QD; metoprolol succinate); ARBs: losartan 50-100 mg QD (Marfan and BAV; blocks TGF-beta pathway; aortic stiffness); statins: stabilize plaque; reduce progression (epidemiologic data); smoking cessation: highest impact modifiable risk; BP target below 130/80 (strict 120/80 for dissection); doxycycline: anti-MMP effect; investigational; avoid fluoroquinolones in known aortic aneurysm (FDA 2018 black box: increased risk of aortic dissection/rupture; avoid if alternative available); imaging follow-up: US Q1-2 years for AAA below 5 cm; CTA Q1 year for TAA; registry: HTAD patient maintained in center database; family screening (first-degree relatives): echo and CTA for index case with HTAD; genetic counseling; multidisciplinary aortic clinic (cardiac surgery, vascular surgery, cardiology, genetics, radiology); patient education: ER card for dissection symptoms (sudden severe tearing chest/back pain = call 911) | `text` |  |  |  |
| Aortic Aneurysm and Dissection: Surveillance, Repair Thresholds, and Genetic Syndromes | Genetic Syndromes, Dissection Management, and Medical Therapy | `aortic_notes` | Aortic Aneurysm/Dissection Notes and Cardiac Surgery/Vascular Surgery/Cardiology/Radiology/Genetics Coordination | `textarea` |  |  |  |

### Aortic Dissection — `cardiology_aortic_dissection_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Aortic Dissection: Emergency Assessment and Management | Diagnosis and Classification | `dissection_type` | Stanford Classification and Aortic Anatomy | `select` |  |  |  |
| Acute Aortic Dissection: Emergency Assessment and Management | Diagnosis and Classification | `dissection_imaging` | Imaging Strategy | `select` |  |  |  |
| Acute Aortic Dissection: Emergency Assessment and Management | Diagnosis and Classification | `dissection_risk` | Predisposing Conditions and Syndromic Aortopathy | `select` |  |  |  |
| Acute Aortic Dissection: Emergency Assessment and Management | Diagnosis and Classification | `dissection_biomarkers` | Laboratory Assessment — D-dimer (elevated in aortic dissection; negative D-dimer helps rule out acute AD in low pre-test probability; ADD risk score: age below 40 + no known aortic disease + abrupt onset + no aortic pain features: if score 0 + D-dimer below 500: high sensitivity rule-out); CBC, BMP, troponin, LFTs, lactate; coagulation panel (DIC in Type A); type and crossmatch for surgery; CBC for anemia; type A: hold for immediate OR | `text` |  |  |  |
| Acute Aortic Dissection: Emergency Assessment and Management | Medical and Procedural Management | `dissection_bp_control` | Anti-Impulse Therapy (Blood Pressure and HR Control) | `select` |  |  |  |
| Acute Aortic Dissection: Emergency Assessment and Management | Medical and Procedural Management | `dissection_surgery` | Surgical Planning (Type A) | `select` |  |  |  |
| Acute Aortic Dissection: Emergency Assessment and Management | Medical and Procedural Management | `dissection_tevar` | TEVAR for Complicated Type B | `select` |  |  |  |
| Acute Aortic Dissection: Emergency Assessment and Management | Medical and Procedural Management | `dissection_malperfusion` | Malperfusion Syndrome Management | `select` |  |  |  |
| Acute Aortic Dissection: Emergency Assessment and Management | Medical and Procedural Management | `dissection_followup` | Post-Discharge Surveillance and Long-Term Care | `select` |  |  |  |
| Acute Aortic Dissection: Emergency Assessment and Management | Medical and Procedural Management | `dissection_notes` | Aortic Dissection Management Notes and Cardiovascular Surgery/Interventional/ICU Coordination | `textarea` |  |  |  |

### Aortic Stenosis — `aortic_stenosis_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Aortic Stenosis Assessment | Echo Parameters | `peak_velocity` | Peak Aortic Velocity (m/s) | `number` |  |  |  |
| Aortic Stenosis Assessment | Echo Parameters | `mean_gradient` | Mean Gradient (mmHg) | `number` |  |  |  |
| Aortic Stenosis Assessment | Echo Parameters | `ava` | Aortic Valve Area (cm²) | `number` |  |  |  |
| Aortic Stenosis Assessment | Echo Parameters | `lvef` | LVEF (%) | `number` |  |  |  |
| Aortic Stenosis Assessment | Echo Parameters | `severity_grade` | Severity | `select` |  |  |  |
| Aortic Stenosis Assessment | Symptoms | `angina` | Angina | `checkbox` |  |  |  |
| Aortic Stenosis Assessment | Symptoms | `syncope` | Syncope or presyncope | `checkbox` |  |  |  |
| Aortic Stenosis Assessment | Symptoms | `dyspnea_on_exertion` | Dyspnea on exertion | `checkbox` |  |  |  |
| Aortic Stenosis Assessment | Symptoms | `heart_failure` | Signs of heart failure | `checkbox` |  |  |  |
| Aortic Stenosis Assessment | Plan | `intervention_recommended` | Intervention Recommended | `select` |  |  |  |
| Aortic Stenosis Assessment | Plan | `next_echo` | Next Echo Due | `text` |  |  |  |
| Aortic Stenosis Assessment | Plan | `notes` | Notes | `textarea` |  |  |  |

### Aortic Stenosis — `cardiology_aortic_stenosis_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Aortic Stenosis: Severity Grading, Timing of Intervention, TAVR vs SAVR Decision | Aortic Stenosis Diagnosis: Echocardiographic Grading and Symptom Assessment | `as_class` | Aortic Stenosis Grading by Echocardiography: Mild AVA Above 1.5 cm2; Moderate AVA 1.0-1.5 cm2; Severe AVA Below 1.0 cm2 Mean Gradient Above 40 mmHg Vmax Above 4 m/s; Very Severe AVA Below 0.6 cm2 Vmax Above 5 m/s; Low-Flow Low-Gradient Classical: EF Below 50% AVA Below 1 cm2 Mean Gradient Below 40; Low-Flow Low-Gradient Paradoxical: EF Preserved Low Flow SVi Below 35; Normal-Flow Low-Gradient EF Preserved; Dobutamine Stress Echo True Severe vs Pseudo-Severe: Reserve FR Above 20% Vmax Increases Above 4; Calcium Scoring CT: Males Above 2000 AU; Females Above 1200 AU Severe; Symptoms SAD Syncope Angina Dyspnea; Natural History Latent Phase Decades Then Rapid; Symptom Onset 2-3 Year Mortality 50%; NYHA Functional Class; Bicuspid Aortic Valve Most Common Congenital; BAV Aortopathy Dilated Ascending Aortic Root; Rheumatic Multivalvular Commissural Fusion; Degenerative Calcific Most Common Adults | `select` |  |  |  |
| Aortic Stenosis: Severity Grading, Timing of Intervention, TAVR vs SAVR Decision | Aortic Stenosis Diagnosis: Echocardiographic Grading and Symptom Assessment | `as_workup` | AS Workup and Risk Assessment | `text` |  |  |  |
| Aortic Stenosis: Severity Grading, Timing of Intervention, TAVR vs SAVR Decision | Aortic Stenosis Intervention: TAVR vs SAVR Trials and Timing Decision | `as_treatment` | Aortic Stenosis Intervention TAVR vs SAVR Key Trials: Symptomatic Severe D: AVR Class I Regardless Risk; PARTNER 1 TAVR vs No Intervention High-Risk: TAVR Superior Inoperable; PARTNER 2 TAVR vs SAVR Intermediate Risk: TAVR Non-Inferior; PARTNER 3 TAVR vs SAVR Low Risk: TAVR Non-Inferior SAVR at 2 Years; Evolut Low Risk TAVR vs SAVR Low Risk: TAVR Non-Inferior; Evolut R TAVR Supra-Annular: Hemodynamics PPM Prevention; TAVR Preferred: High-Intermediate Risk Elderly; Iliofemoral Access Good; No Planned CABG; SAVR Preferred: Low Surgical Risk Young Below 65; Bicuspid BAV Complex; CABG Required Concomitant CAD; No Iliofemoral Access; Annulus Sizing Concern; Mechanical Valve Young Patient Long Durability Preferred; Asymptomatic Severe C1 C2: Watchful Waiting Standard Until Symptoms; Early AVR Emerging Evidence: AVATAR RECOVERY EASY Trials Early TAVR Asymptomatic Superior Outcomes; VMax Above 5 Mean Above 60 EF Drop Below 50 Exercise Abnormality AVR Without Symptoms; Balloon Valvuloplasty Bridge to Definitive if Hemodynamically Unstable; HALT-AS Anti-Thrombotic TAVR; Leaflet Thrombosis Rivaroxaban vs DAPT | `select` |  |  |  |
| Aortic Stenosis: Severity Grading, Timing of Intervention, TAVR vs SAVR Decision | Aortic Stenosis Intervention: TAVR vs SAVR Trials and Timing Decision | `as_notes_detail` | Aortic Stenosis Management Plan and Notes: AVA Vmax Mean Gradient on Echo, Hemodynamic Stage A-D, EF and LV Function, BAV Aortopathy Ascending Size, CT Calcium Score, Symptom Status Dyspnea Syncope Angina, STS Risk Score, Frailty, Iliofemoral Access CT, TAVR vs SAVR Recommendation and Rationale, Concomitant CAD CABG Plan, Post-TAVR Antiplatelet Plan, Coordination Notes | `textarea` |  |  |  |
| Aortic Stenosis: Severity Grading, Timing of Intervention, TAVR vs SAVR Decision | Aortic Stenosis Management Notes | `as_mgmt_notes` | Aortic Stenosis Management Notes and Cardiology Structural/Interventional Cardiology TAVR/Cardiac Surgery SAVR CABG/Anesthesia Cardiac/Radiology CT Annulus Sizing/Vascular Surgery Access/Electrophysiology PPM AV Block/Rehabilitation Cardiac/Neurology Stroke Embolic/Pharmacy Antiplatelet DAPT/Nursing Education/Social Work/Coordination Notes | `textarea` |  |  |  |

### Aortic Stenosis and TAVR — `cardiology_aortic_stenosis_tavr_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Severe Aortic Stenosis — TAVR vs. SAVR, Valve Selection, and Monitoring | Aortic Stenosis Severity and Workup | `as_f1` | Aortic Stenosis Grading: SEVERE = AVA Under 1.0 cm2 AND Mean Gradient Over 40 mmHg AND Peak Velocity Over 4.0 m/s (All Three Concordant); MODERATE = AVA 1.0-1.5 cm2; Mild = AVA Over 1.5 cm2; LOW-FLOW LOW-GRADIENT (LFLG): AVA Under 1.0 cm2 BUT Mean Gradient Under 40 (EF Reduced or Preserved); DOBUTAMINE STRESS ECHO or CT Calcium Score to Discriminate True Severe vs. Pseudo-Severe; WORKUP: TTE and TEE; CT Aorta and Iliofemoral Access for TAVR Planning; Coronary Angiography (PCI Before TAVR if Significant CAD); Right Heart Cath if PAH Suspected; STS Risk Score; Frailty Assessment (5-Meter Walk; Grip Strength; KATZ ADL); Multidisciplinary Heart Team Decision | `text` |  |  |  |
| Severe Aortic Stenosis — TAVR vs. SAVR, Valve Selection, and Monitoring | Aortic Stenosis Severity and Workup | `as_f2` | AS Intervention Timing: SYMPTOMATIC Severe AS (Angina; Syncope; HF) = CLASS I INTERVENE Regardless Age or EF; ASYMPTOMATIC Severe AS: Class IIa If Very Severe (Peak Velocity Over 5.0; Rapid Progression; Exercise Intolerance); Surgical Risk Assessment STS Score (Low Under 4%; Intermediate 4-8%; High Over 8%; Prohibitive Over 15% or Other Factors); PARTNER 3 and Evolut Low-Risk: TAVR = SAVR at 2 Years in Low-Risk Patients (All-Cause Mortality and Stroke) | `select` |  |  |  |
| Severe Aortic Stenosis — TAVR vs. SAVR, Valve Selection, and Monitoring | Post-TAVR Management and Complications | `as_f3` | Post-TAVR Antiplatelet and Anticoagulation: DUAL ANTIPLATELET (DAPT) Aspirin 75-100 mg + Clopidogrel 75 mg x1-3 Months (POPular TAVI No-OAC Arm; Aspirin Alone May Be Sufficient Low-Bleeding-Risk); ASPIRIN ALONE: POPular TAVI Trial Aspirin Superior DAPT for Bleeding Without Stroke Excess; OAC-INDICATED (AF): OAC Alone (No Additional DAPT; AUGUSTUS Trial Data Extrapolation); RIVAROXABAN: GALILEO Trial Increased Bleeding No Benefit Over DAPT; Avoid Rivaroxaban Routine Post-TAVR; VALVE THROMBOSIS: Subclinical CT Leaflet Motion Reduction 10-15% (RESOLVE/SAVORY); Anticoagulation Resolves Most; MONITORING: TTE at 1 Month and Annually; CONDUCTION: New LBBB or High-Degree AVB (Permanent Pacemaker 10-20% TAVR vs. 3-5% SAVR; Evolut Higher PPM Rate) | `text` |  |  |  |
| Severe Aortic Stenosis — TAVR vs. SAVR, Valve Selection, and Monitoring | Post-TAVR Management and Complications | `as_f4` | TAVR Complications and Lifetime Planning: PARAVALVULAR LEAK (PVL): Mild PVL Common; Moderate-Severe = Worse Outcomes; Balloon Post-Dilation or Valve-in-Valve; VASCULAR ACCESS: Hematoma; Pseudoaneurysm; AV Fistula; Vessel Rupture (Rare); STROKE: 1-3% 30-Day Risk; Cerebral Protection Devices Reduce Silent Emboli; PERMANENT PACEMAKER: 10-20%; Predictors Baseline RBBB; Deep Implant; Self-Expanding Valves; ACUTE KIDNEY INJURY: Contrast Volume; Hypotension; 5-10%; ANNULAR RUPTURE: Rare But Fatal (CT Planning Key); STRUCTURAL VALVE DEGENERATION (SVD): 10-15 Year Horizon; Redo TAVR (TAVI-in-TAVI) Feasible; LIFETIME PLAN: Young Patients Consider SAVR or Bioprosthetic SAVR for TAVI-in-TAVI Later; Mechanical Valve SAVR for Durable Anticoagulated Young Patients; Shared Decision Making | `text` |  |  |  |

### Arrhythmia Management — `cardiology_arrhythmia_management_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiac Arrhythmia: AF Management, Ventricular Arrhythmias, ICD, and Channelopathies | Atrial Fibrillation: Classification, Risk Stratification, Rate/Rhythm, and Anticoagulation | `af_class` | AF: Paroxysmal Below 7d, Persistent Above 7d, Long-Standing Persistent Above 12mo, Permanent; CHA2DS2-VASc Score 0-1 No AC, 2+ DOAC; Rate Control HR Below 80 or 110 | `select` |  |  |  |
| Cardiac Arrhythmia: AF Management, Ventricular Arrhythmias, ICD, and Channelopathies | Atrial Fibrillation: Classification, Risk Stratification, Rate/Rhythm, and Anticoagulation | `af_ablation` | AF Catheter Ablation PVI Cryoablation RF Pulsed Field Ablation, AVNRT Slow Pathway Ablation, WPW Accessory Pathway, VT Ablation -- AF CATHETER ABLATION: PULMONARY VEIN ISOLATION [PVI; CORNERSTONE OF AF ABLATION; ELECTRICALLY ISOLATE ALL 4 PVS FROM LA BODY; ELIMINATES TRIGGER SOURCES; RADIOFREQUENCY [RF; POINT-BY-POINT; THERMISTOR-TIP CATHETERS; CONTACT FORCE; LASSO VERIFICATION]; CRYOABLATION [ARCTIC FRONT; BALLOON; CIRCUMFERENTIAL PV ISOLATION; FASTER; GOOD FOR PAROXYSMAL]; PULSED FIELD ABLATION [PFA; NEWEST; IRREVERSIBLE ELECTROPORATION; CARDIAC-SPECIFIC; AVOIDS ESOPHAGEAL + PHRENIC INJURY; FARAPULSE; FIRE AND ICE-PFA; VERY RAPID PROCEDURE; EXCELLENT SAFETY PROFILE]; SUCCESS RATES: PAROXYSMAL AF [80-90% FREEDOM FROM AF AT 1 YEAR]; PERSISTENT AF [60-80%; ADJUNCTIVE LESIONS NEEDED]; LONG-STANDING PERSISTENT [LOWER; 50-60%]; COMPLICATIONS [PULMONARY VEIN STENOSIS; CARDIAC TAMPONADE [1%]; THROMBOEMBOLIC STROKE; ESOPHAGEAL FISTULA [RARE; FATAL]; PHRENIC NERVE PALSY; ATRIAL FLUTTER POST-ABLATION]; INDICATIONS: SYMPTOMATIC PAROXYSMAL AF ON AAD FAILURE OR AS FIRST-LINE [GUIDELINE IIA]; PERSISTENT AF SYMPTOMATIC; HEART FAILURE + AF [CASTLE-AF TRIAL NEJM 2018: ABLATION vs MEDICAL IN AF + EF BELOW 35%: DEATH OR HF HOSPITALIZATION: 28% vs 44%; IMPROVED EF + QOL]; SUPRAVENTRICULAR TACHYCARDIA ABLATION: AVNRT [ATRIOVENTRICULAR NODAL REENTRANT TACHYCARDIA; MOST COMMON SVT; SLOW-FAST MOST COMMON [P WAVE AFTER QRS OR IN QRS; PSEUDO-S WAVE V1; PSEUDO-R PRIME]; ABRUPT ONSET/OFFSET; VALSALVA/ADENOSINE TERMINATES; ABLATION: SLOW PATHWAY MODIFICATION [POSTEROINFERIOR TRIANGLE OF KOCH; 97-99% SUCCESS; RARE COMPLETE AV BLOCK RISK]; AVRT [ATRIOVENTRICULAR REENTRANT TACHYCARDIA; ACCESSORY PATHWAY; ORTHODROMIC [NARROW QRS DOWN AV NODE UP AP]; ANTIDROMIC [WIDE QRS DOWN AP UP AV NODE]]; WPW [WOLFF-PARKINSON-WHITE; DELTA WAVE ON ECG [PRE-EXCITATION]; SHORT PR BELOW 120 MS; SLURRED QRS UPSTROKE; RISK OF SCD [AF + FAST AP CONDUCTION → VF]; HIGH-RISK FEATURES: SHORT EFFECTIVE REFRACTORY PERIOD [AERP] BELOW 250 MS; MINIMAL ANTEGRADE RP AT MAXIMUM EXERCISE; MULTIPLE APs; HISTORY SYNCOPE; ABLATION: ACCESSORY PATHWAY ABLATION [SUCCESS 95%+; ANATOMIC LOCATION-DEPENDENT RISK; LEFT-SIDED AP LOWEST RISK; RIGHT-SIDED ANTERO-SEPTAL HIGHEST]]; VENTRICULAR TACHYCARDIA ABLATION: SCAR-RELATED VT [SUBSTRATE MODIFICATION; ENDO/EPICARDIAL APPROACH; BIPOLAR MAPPING + PACE MAPPING]; IDIOPATHIC VT [RIGHT VENTRICULAR OUTFLOW TRACT [RVOT]; FASCICULAR VT [MAHAIM; VERAPAMIL-SENSITIVE]; EXCELLENT ABLATION OUTCOMES]; ELECTRICAL STORM [3 OR MORE SUSTAINED VT/VF IN 24 HOURS; EMERGENCY]; MANAGEMENT: SEDATION [INTUBATION IF NEEDED]; OVERDRIVE PACING; IV AMIODARONE; STELLATE GANGLION BLOCKADE [LEFT SGB; REFRACTORY VT STORM]; DEEP SEDATION [GENERAL ANESTHESIA]; URGENT ABLATION [BEST LONG-TERM SOLUTION]; SUBSTRATE MODIFICATION; CORONARY REVASCULARIZATION IF ISCHEMIA-TRIGGERED] | `text` |  |  |  |
| Cardiac Arrhythmia: AF Management, Ventricular Arrhythmias, ICD, and Channelopathies | Ventricular Arrhythmias, ICD, Channelopathies, and Cardiac Arrest | `arrhythmia_icd` | ICD Primary Prevention EF Below 35% NYHA II-III MADIT-II SCD-HeFT, Secondary Prevention VF/VT Survivors, Subcutaneous SICD, Wearable WCD | `select` |  |  |  |
| Cardiac Arrhythmia: AF Management, Ventricular Arrhythmias, ICD, and Channelopathies | Ventricular Arrhythmias, ICD, Channelopathies, and Cardiac Arrest | `arrhythmia_arrest` | Cardiac Arrest ROSC Post-Cardiac Arrest Care TTM Coronary Angiography, Long QT Management Mexiletine, Amiodarone Antiarrhythmics -- POST-CARDIAC ARREST CARE: RETURN OF SPONTANEOUS CIRCULATION [ROSC; POST-RESUSCITATION CARE]: TARGETED TEMPERATURE MANAGEMENT [TTM; THERAPEUTIC HYPOTHERMIA]: HYPOTHERMIA TRIALS [NEJM 2002: TTM 32-34 vs NO TTM: IMPROVED NEUROLOGIC OUTCOME]; TTM 1 TRIAL [NEJM 2013: 33 vs 36 DEGREES: NO DIFFERENCE; BOTH BENEFICIAL vs HIGH FEVER]; TTM 2 TRIAL [NEJM 2021: HYPOTHERMIA 33 vs NORMOTHERMIA 37 [FEVER AVOIDANCE]: NO SIGNIFICANT DIFFERENCE; CURRENT PRACTICE: TARGETED NORMOTHERMIA [36-37.5] + ACTIVE FEVER PREVENTION [AVOID ABOVE 37.7 FOR 72 HOURS]; ICE PACK; COOLING BLANKET; ENDOVASCULAR COOLING; PROGNOSTICATION [MINIMUM 72 HOURS POST-ARREST BEFORE NEUROPROGNOSTICATION]: CLINICAL EXAM [MOTOR RESPONSE; PUPILLARY + CORNEAL REFLEXES; MYOCLONUS; NEUROPROGNOSTICATION EXAM AT 72H+]; EEG [MALIGNANT PATTERNS: BURST SUPPRESSION; SUPPRESSION; STATUS EPILEPTICUS POST-ARREST = POOR; BENIGN: CONTINUOUS BACKGROUND WITHIN 24H]; SOMATOSENSORY EVOKED POTENTIALS [N20 CORTICAL RESPONSE ABSENT BILATERALLY = POOR PROGNOSIS; VERY SPECIFIC]; NEURON-SPECIFIC ENOLASE [NSE ABOVE 60 mcg/L AT 48-72H = POOR]; BRAIN MRI/CT [DWI LESIONS EXTENT; HYPOXIC-ISCHEMIC ENCEPHALOPATHY PATTERN]; CORONARY ANGIOGRAPHY POST-CARDIAC ARREST: PRIOR STANDARD: IMMEDIATE CATH ALL POST-ROSC; EVIDENCE UPDATE: COACT TRIAL NEJM 2019 [IMMEDIATE VS DELAYED CAG IN ROSC WITHOUT ST ELEVATION: NO SURVIVAL BENEFIT FROM IMMEDIATE CAG]; PEARL TRIAL 2022 [SIMILAR FINDING]; CURRENT PRACTICE: IMMEDIATE CAG FOR: STEMI POST-ARREST; HEMODYNAMIC INSTABILITY; HIGH CLINICAL SUSPICION CULPRIT OCCLUSION; DELAYED CAG ACCEPTABLE IF STABLE + NO STEMI; ANTIARRHYTHMICS FOR CHRONIC VT PREVENTION: AMIODARONE [MOST EFFECTIVE; AVOID IN NORMAL EF [OPTIC; THYROID; PULMONARY TOXICITY NOT JUSTIFIED UNLESS NO ALTERNATIVE]; SOTALOL [CLASS III; QT PROLONGATION; AVOID IN QTC ABOVE 500; BRADYCARDIA; RENAL DOSE]; MEXILETINE [CLASS IB; ORAL LIDOCAINE; SODIUM CHANNEL; ADD-ON TO AMIODARONE OR SOTALOL FOR REFRACTORY VT; 150-300 mg TID; NAUSEA; NEUROLOGIC]; LIDOCAINE IV [ACUTE VT/VF; LESS EFFECTIVE THAN AMIODARONE FOR SHOCK-REFRACTORY VF [AMIODARONE VS LIDOCAINE VS PLACEBO ROC-ALPS TRIAL]; QUINIDINE [TYPE IA; BRUGADA; SHORT QT SYNDROME; J-WAVE SYNDROMES; 324-648 mg TID]; PROCAINAMIDE IV [ACUTE VT STABLE; PREFERRED FOR WPW-RELATED WIDE COMPLEX TACHYCARDIA EMERGENCY [NOT ADENOSINE IN PRE-EXCITED AF: ADENOSINE IN WPW = VENTRICULAR FIBRILLATION RISK; USE PROCAINAMIDE or IBUTILIDE]]; LONG QT MANAGEMENT: BETA-BLOCKERS [NADOLOL; PROPRANOLOL; LQTS 1 + 2 PARTICULARLY]; MEXILETINE [LQTS 3]; AVOID QT-PROLONGING DRUGS [AZITHROMYCIN; FLUOROQUINOLONES; ANTIPSYCHOTICS; METHADONE; HALOPERIDOL; QUETIAPINE; ONDANSETRON; HYDROXYCHLOROQUINE; LIST AT CREDIBLEMEDS.ORG]; PERMANENT PACING [BRADYCARDIA-DEPENDENT PAUSE-RELATED TDP; REDUCE PAUSES]; LEFT CARDIAC SYMPATHETIC DENERVATION [LCSD; SURGICAL; LEFT STELLATE GANGLION; REDUCES VT/VF; OPTION WHEN BETA-BLOCKER INSUFFICIENT OR ICD NOT AVAILABLE] | `text` |  |  |  |
| Cardiac Arrhythmia: AF Management, Ventricular Arrhythmias, ICD, and Channelopathies | Ventricular Arrhythmias, ICD, Channelopathies, and Cardiac Arrest | `arrhythmia_notes` | Arrhythmia Management Notes and Electrophysiology/Cardiology/CT Surgery/Pharmacy/Cardiac Rehab/Genetics Coordination | `textarea` |  |  |  |

### Arrhythmogenic Cardiomyopathy (ARVC) — `cardiology_arrhythmogenic_cardiomyopathy_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ARVC/AC — Task Force Criteria, Genetics, SCD Risk, and Antiarrhythmics | Task Force Criteria and Genetics | `task_force` | Modified Task Force Criteria 2010 (ARRHYTHMOGENIC CARDIOMYOPATHY (AC/ARVC): fibro-fatty replacement of myocardium; predominantly RV (classic); biventricular or LV-dominant forms; MODIFIED TASK FORCE CRITERIA (2010): MAJOR + MINOR criteria; Definite diagnosis: 2 major OR 1 major + 2 minor OR 4 minor; CATEGORIES: (1) Global/regional dysfunction and structural alteration (echo/CMR/angiography); (2) Tissue characterization (endomyocardial biopsy: fibro-fatty replacement); (3) Repolarization abnormalities (inverted T waves V1-V3 in absence of RBBB; major criterion); (4) Depolarization/conduction abnormalities: epsilon wave (major) or SAECG late potentials; (5) Arrhythmias: LBBB-pattern VT, >1000 VPBs/24h, NSVT (minor-major); (6) Family history/genetics; EPSILON WAVE: small positive deflection after QRS in V1-V2-V3; fibrous slow conduction; pathognomonic; IMAGING: CMR: RVEF <40% (major); regional RV akinesis/dyskinesis/aneurysm; RV dilation; FATTY INFILTRATION: CMR gadolinium LGE (subepicardial/mid-myocardial); echo: inferior-lateral RV wall motion abnormality; TRABECULAR ABNORMALITY on CMR (accordion-sign) | `text` |  |  |  |
| ARVC/AC — Task Force Criteria, Genetics, SCD Risk, and Antiarrhythmics | Task Force Criteria and Genetics | `genetics` | Genetic Testing and Inheritance | `select` |  |  |  |
| ARVC/AC — Task Force Criteria, Genetics, SCD Risk, and Antiarrhythmics | SCD Risk and Antiarrhythmic Management | `scd_risk` | ARVC SCD Risk Stratification and ICD (SCD RISK FACTORS: prior cardiac arrest/VF; syncope (presumed arrhythmic); sustained VT; severe RV dysfunction (RVEF <35%); extensive LGE on CMR; young age at diagnosis; proband; multiple gene mutations; CALCULATOR: ARVC RISK CALCULATOR (Risk-AC): validated 5-year SCD/appropriate ICD shock risk; inputs: sex, age, NSVT, VPB burden, syncopal history, RVEF, LVEF; outputs 5-year SCD risk; RISK >10%: ICD recommended; RISK 5-10%: ICD reasonable; ICD IMPLANTATION: TRANSVENOUS: standard; SUBCUTANEOUS ICD (S-ICD): no pacing capability; preferred for some patients; lead erosion risk with standard ICD in RV fibro-fatty tissue; ICM (implantable cardiac monitor): for risk stratification in borderline cases; SPORTS RESTRICTION: MANDATORY: competitive athletics restriction for ALL patients with AC regardless of symptoms; FAMILY MEMBER SCREENING: gene-positive/phenotype-negative family members: restrict from competitive sports pending full phenotyping; CATHETER ABLATION: substrate ablation (endocardial + epicardial) for VT storm; reduces ICD shocks; not curative; complementary to ICD; success 75% at 1 year; recurrence expected; EPICARDIAL ABLATION: requires surgical access or pericardial approach; preferred for deep epicardial substrate | `text` |  |  |  |
| ARVC/AC — Task Force Criteria, Genetics, SCD Risk, and Antiarrhythmics | SCD Risk and Antiarrhythmic Management | `antiarrhythmics` | Antiarrhythmic Therapy in ARVC | `select` |  |  |  |

### Atrial Fibrillation — `cardiology_atrial_fibrillation_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Atrial Fibrillation: Stroke Risk Stratification, Anticoagulation, Rate Control, and Rhythm Management | Atrial Fibrillation: Classification, CHA2DS2-VASc, and HAS-BLED Risk Stratification | `af_class` | Atrial Fibrillation Classification: Paroxysmal AF: Self-Terminating Less Than 7 Days Usually Less Than 48H; Persistent AF: Duration Above 7 Days or Requiring Cardioversion; Long-Standing Persistent AF: Continuous Above 12 Months; Permanent AF: Rhythm Control No Longer Pursued; Lone AF: Without Structural Heart Disease; Valvular AF: Mitral Stenosis or Mechanical Heart Valve MS or Mechanical Valve; Non-Valvular AF: Without MS or Mechanical Valve; NVAF Classified CHA2DS2-VASc for DOAC; CHA2DS2-VASc Score: CHF Congestive HF 1; Hypertension 1; Age Above 75 Two Points; Diabetes Mellitus 1; Stroke TIA Prior Two Points; Vascular Disease PAD or MI 1; Age 65-74 1; Female Sex 1; Max 9 Points; Anticoagulation: Score 2 or Above Men 3 Above Women Oral Anticoagulation; Score 1 Men Consider; Females Add 1 Point Sex Category; HAS-BLED Bleeding Risk: Hypertension Uncontrolled 1; Abnormal Renal or Liver Function 1 Each; Stroke Prior 1; Bleeding Prior or Predisposition 1; Labile INR Warfarin 1; Elderly Above 65 1; Drugs NSAIDs ASA or Alcohol 1; Maximum 9; Above 3 High Risk Bleeding But Not Contraindication Anticoagulation; Address Modifiable Factors; Etiology: HTN Most Common; Ischemic Heart Disease; HF; Valvular; Thyroid Hyperthyroid; Alcohol Binge Holiday Heart; Sleep Apnea; Pericarditis; Post-Cardiac Surgery; Post-Ablation Early; Sepsis; Pulmonary Embolism; Lone AF Young Without Structural | `select` |  |  |  |
| Atrial Fibrillation: Stroke Risk Stratification, Anticoagulation, Rate Control, and Rhythm Management | Atrial Fibrillation: Classification, CHA2DS2-VASc, and HAS-BLED Risk Stratification | `af_workup` | Atrial Fibrillation Workup and Risk Assessment | `text` |  |  |  |
| Atrial Fibrillation: Stroke Risk Stratification, Anticoagulation, Rate Control, and Rhythm Management | AF Treatment: Anticoagulation DOAC, Rate Control, Rhythm Control, and Ablation | `af_treatment` | Atrial Fibrillation Treatment: Anticoagulation: DOACs Superior Warfarin NVAF Stroke Prevention: Apixaban Eliquis 5mg BID RE-LY Preferred Safety Profile Less Bleeding Stroke; Reduce 2.5mg BID If 2 of 3: Age Above 80 Weight Below 60kg Creatinine Above 1.5; Rivaroxaban Xarelto 20mg QD with dinner ROCKET-AF; Edoxaban Savaysa 60mg QD Reduce 30mg; Dabigatran Pradaxa 150mg BID RE-LY; Warfarin Valvular AF MS Mechanical Valve Only; Target INR 2-3; Reversal: Idarucizumab Praxbind Dabigatran; Andexanet Alfa Factor Xa Reversal; Rate Control: Metoprolol IV Oral Titrate; Diltiazem Verapamil Calcium Channel Blocker Non-DHP; Digoxin QD Rest Rate Control Alone Not Exercise; Target Below 80 BPM Rest; Rhythm Control: Cardioversion Electrical DC 200-360J Biphasic; Chemical Cardioversion: Flecainide 300mg Oral Pill-in-Pocket Paroxysmal No Structural; Propafenone 600mg Oral Similar; IV Ibutilide Procainamide Hospital; Amiodarone 200mg QD Maintenance Effective All; Dronedarone 400mg BID Less Effective HF Contraindicated EF Below 35; Sotalol Renal Adjust QTc Monitor; Dofetilide Tikosyn Inpatient Load QTc; EAST-AFNET 4 Early Rhythm Control Superior Rate; Ablation: Pulmonary Vein Isolation PVI Catheter Ablation Cryoablation vs RF; CABANA Trial Ablation vs Medical; CASTLE-AF HF EF Low Ablation Superior; LAA Occlusion Watchman Device PROTECT-AF PREVAIL 2.3cm Minimum; AMULET Left Appendage Occlusion; Non-Inferiority vs DOAC LAA Occlusion High Bleed Risk | `select` |  |  |  |
| Atrial Fibrillation: Stroke Risk Stratification, Anticoagulation, Rate Control, and Rhythm Management | AF Treatment: Anticoagulation DOAC, Rate Control, Rhythm Control, and Ablation | `af_notes_detail` | AF Management Plan and Notes: AF Type Paroxysmal Persistent Permanent, CHA2DS2-VASc Score and Components, HAS-BLED Score Modifiable Factors Addressed, Anticoagulation Agent Dose and Reduction, Rate Control Agent and Target HR, Rhythm Control Plan AAD or Ablation, Cardioversion History, LAA Occlusion Plan or Device, Thyroid TSH Result, OSA Screen Result, Cardiac Function EF LA Size, Coordination Notes | `textarea` |  |  |  |
| Atrial Fibrillation: Stroke Risk Stratification, Anticoagulation, Rate Control, and Rhythm Management | AF Management Notes | `af_mgmt_notes` | AF Management Notes and Cardiology Electrophysiology Ablation LAA Occlusion/Cardiology Structural Heart Valve/Hematology Anticoagulation Bridge/Neurology Stroke History TIA/Pharmacy DOAC Renal Dosing Drug Interactions P-gp CYP3A4/Nephrology eGFR Renal Dosing/Sleep Medicine OSA CPAP/Primary Care Modifiable Risk Factor Hypertension/Cardiac Surgery Hybrid Maze/Coordination Notes | `textarea` |  |  |  |

### Atrial Flutter — `cardiology_atrial_flutter_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Atrial Flutter — Typical vs Atypical, Rate Control, and Ablation | Atrial Flutter Classification and Diagnosis | `aflutter_f1` | Atrial Flutter Evaluation: EPIDEMIOLOGY (SECOND MOST COMMON SUSTAINED ATRIAL ARRHYTHMIA AFTER AFIB; 200000 NEW CASES US ANNUALLY; MALE PREDOMINANCE 2.5:1; RISK FACTORS: UNDERLYING STRUCTURAL HEART DISEASE; ATRIAL ENLARGEMENT; CONGENITAL HEART DISEASE POST REPAIR; CARDIAC SURGERY; CKD; HYPERTENSION; PULMONARY DISEASE COPD; HYPERTHYROIDISM; TYPICAL ATRIAL FLUTTER MOST COMMON (COUNTERCLOCKWISE REENTRY CIRCUIT RIGHT ATRIUM; USES CAVOTRICUSPID ISTHMUS CTI; SAWTOOTH PATTERN NEGATIVE FLUTTER WAVES V1 POSITIVE; ATRIAL RATE 250-350 BPM; 2:1 AV CONDUCTION VENTRICULAR RATE 150 BPM CLASSIC; 3:1 4:1 VARIABLE CONDUCTION; ATYPICAL FLUTTER (CLOCKWISE TYPICAL; OTHER RIGHT ATRIAL CIRCUITS; LEFT ATRIAL FLUTTER POST-AFIB ABLATION; INCISIONAL AROUND SCAR; ECG DIAGNOSIS (REGULAR VENTRICULAR RATE; SAWTOOTH PATTERN II III AVF INFERIOR LEADS; FLUTTER WAVES VISIBLE SLOW VENTRICULAR RATE; VAGAL MANEUVER ADENOSINE UNMASK FLUTTER WAVES; NO ISOELECTRIC BASELINE; TYPICAL FLUTTER 150 BPM 2:1 BLOCK CONSIDER FLUTTER; RELATIONSHIP WITH ATRIAL FIBRILLATION (50 pct WITH FLUTTER HAVE CONCURRENT AFIB; SHARED RISK FACTORS; FLUTTER ABLATION MAY NOT PREVENT AFIB; ANTICOAGULATION DECISION SAME AS AFIB; STROKE RISK SIMILAR AFIB) | `text` |  |  |  |
| Atrial Flutter — Typical vs Atypical, Rate Control, and Ablation | Atrial Flutter Classification and Diagnosis | `aflutter_f2` | Rate Control, Cardioversion, and Ablation | `select` |  |  |  |

### Atrial Flutter (CTI Ablation) — `cardiology_electrophysiology_atrial_flutter_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Atrial Flutter — Classification, Ablation, and Anticoagulation | Flutter Classification and Diagnosis | `flutter_dx` | Atrial Flutter Classification (TYPICAL ATRIAL FLUTTER (CTI-dependent): cavotricuspid isthmus (CTI) dependent re-entry; COUNTERCLOCKWISE (CCW) flutter: most common; sawtooth pattern (negative flutter waves II, III, aVF; positive in V1); CLOCKWISE (CW) flutter: positive in II, III, aVF; negative in V1 (reverse typical); ECG: flutter rate 250-300 bpm; VENTRICULAR RATE: depends on AV conduction (2:1 = 150 bpm most common; 4:1 = 75 bpm; variable); IMPORTANT: 2:1 AV block with heart rate exactly 150 = ALWAYS think flutter; diagnose with vagal maneuver or adenosine (briefly increases AV block, reveals flutter waves); ATYPICAL FLUTTER: non-CTI-dependent; MULTIPLE MECHANISMS: post-cardiac surgery scar; prior RF ablation scar; mitral isthmus; roof-dependent; superior vena cava; DIAGNOSIS: EP study with entrainment mapping; DIFFERENTIATION FROM AFIB: flutter: regular ventricular response (unless variable AV conduction); AFib: irregularly irregular; differentiation can be difficult at rates 150-160; ADENOSINE TEST: 6-12 mg rapid IV push; transiently blocks AV node; reveals flutter waves or AF; atrial activity assessment) | `text` |  |  |  |
| Atrial Flutter — Classification, Ablation, and Anticoagulation | Flutter Classification and Diagnosis | `mechanisms` | Flutter Mechanisms and ECG Patterns | `select` |  |  |  |
| Atrial Flutter — Classification, Ablation, and Anticoagulation | Treatment and Anticoagulation | `cti_ablation` | CTI Ablation Procedure and Outcomes (CTI ABLATION: treatment of choice for typical flutter (Class I); PROCEDURE: radiofrequency or cryoablation; point-by-point RF lesions across CTI; ENDPOINT: bidirectional CTI block (block in both directions confirmed by differential pacing); no flutter inducibility; ACUTE SUCCESS: >95%; RECURRENCE RATE: 5-10% within 2 years (most common: incomplete CTI block); repeat ablation very effective; COMPLICATIONS: AV block (0.5-1%; uncommon; CTI adjacent to AV node); pericardial effusion (<1%); IRRIGATION: irrigated RF tip catheters (cooled tip): more effective lesions; lower steam-pop risk; CRYOABLATION: for CTI; lower risk; less pain; no steam-pop; comparable efficacy; OUTCOMES: better symptoms + QOL vs. antiarrhythmics; flutter elimination in >90%; ATYPICAL FLUTTER ABLATION: more complex; requires 3D mapping; success ~80-85%; higher recurrence than CTI flutter; POST-ABLATION: confirm bidirectional block before finishing; repeat flutter induction; 30-min waiting period; HYBRID APPROACH: if coexisting AFib: ablate flutter + consider AFib ablation in same session; RATE CONTROL: AV nodal agents (beta-blocker, diltiazem, digoxin); RHYTHM CONTROL: cardioversion + ablation) | `text` |  |  |  |
| Atrial Flutter — Classification, Ablation, and Anticoagulation | Treatment and Anticoagulation | `anticoagulation` | Anticoagulation Strategy for Atrial Flutter | `select` |  |  |  |

### CAD / ACS — `cardiology_cad_acs_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Coronary Artery Disease and ACS | ACS Workup and Revascularization | `cad_f1` | ACS Classification: STEMI (ST Elevation Over 1mm 2 Contiguous Leads or LBBB New; ACTIVATE CATH LAB NOW; Door-to-Balloon Under 90M Onset Under 12H; Thrombolytics Under 30M If No PCI Available); NSTEMI (Troponin Rise + Ischemia Sx Without ST Elevation); UNSTABLE ANGINA (Sx Without Troponin Rise); hsTROPONIN: Rise-Fall Pattern Required (Sample 0H 1H 3H); GRACE SCORE: In-Hospital Mortality Risk (High Over 140 = Invasive Under 24H; Low Under 108 = Conservative OK); TIMI SCORE: NSTEMI Risk (Over 3 = Early Invasive); WORKUP: ECG Q3-5M x 3; Serial hsTn; Echo (WMA LVEF); CXR; CBC BMP PT; CATH: Left Heart Catheterization + Coronary Angiography; IVUS or FFR (Functional Significance Intermediate Lesion FFR Under 0.8 = Stenosis Significant); SYNTAX SCORE (Lesion Complexity; CABG vs PCI Guide); RISK FACTORS: Smoking; HTN; DM; Dyslipidemia; Family History; Obesity; CKD | `text` |  |  |  |
| Coronary Artery Disease and ACS | ACS Workup and Revascularization | `cad_f2` | PCI vs CABG and Medical Therapy | `select` |  |  |  |

### CAD / PCI / DAPT — `cardiology_coronary_artery_disease_pci_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Coronary Artery Disease — PCI and DAPT Management | Catheterization Findings | `lesion_severity` | Lesion Severity and Revascularization Decision | `select` |  |  |  |
| Coronary Artery Disease — PCI and DAPT Management | Catheterization Findings | `syntax` | SYNTAX Score (SYNergy between PCI with TAXUS and Cardiac Surgery; quantifies coronary complexity; 0-22 = low (PCI acceptable); 23-32 = intermediate; >32 = high (CABG preferred for 3-vessel or left main); ISCHEMIA: SYNTAX >33 CABG superior for mortality; Heart Team discussion for intermediate-high) | `number` |  |  |  |
| Coronary Artery Disease — PCI and DAPT Management | DAPT Duration and Antiplatelet Management | `p2y12` | P2Y12 Inhibitor Selection | `select` |  |  |  |
| Coronary Artery Disease — PCI and DAPT Management | DAPT Duration and Antiplatelet Management | `dapt_duration` | DAPT Duration | `select` |  |  |  |

### CAD Prevention Lipids — `cardiology_cad_prevention_lipids_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CAD/ASCVD Prevention: Lipid Management, Blood Pressure, and Antiplatelet Therapy | ASCVD Risk Assessment, Lipid Goals, and Statin Therapy | `cad_class` | ASCVD 10-Year Risk: PCE Pooled Cohort Equations Age Gender Race Lipids SBP Diabetes Smoking; Low Below 5%; Borderline 5-7.5%; Intermediate 7.5-20%; High Above 20%; Very High ASCVD: Multiple Events or Multivascular or LDL Above 190 Familial Hypercholesterolemia; Statin Intensity: High Rosuvastatin 20-40mg Atorvastatin 40-80mg; Moderate; Low; LDL Goal Very High Below 55 Below 70 Below 100; Non-HDL ApoB | `select` |  |  |  |
| CAD/ASCVD Prevention: Lipid Management, Blood Pressure, and Antiplatelet Therapy | ASCVD Risk Assessment, Lipid Goals, and Statin Therapy | `cad_treatment` | Lipid-Lowering Agents: High-Intensity Statins Rosuvastatin 20-40mg QD Atorvastatin 40-80mg QD JUPITER PROVE-IT PROVE-IT; PCSK9 Inhibitors Evolocumab Repatha 140mg Q2W or 420mg QM FOURIER LDL 59% Reduction; Alirocumab Praluent 75-150mg Q2W ODYSSEY; Inclisiran siRNA 284mg Q6M; Ezetimibe 10mg QD IMPROVE-IT; Bempedoic Acid Nexletol 180mg QD CLEAR; EPA Icosapentaenoic Acid Vascepa 4g QD REDUCE-IT 25% CV Events; Aspirin Secondary Prevention; DAPT Duration ACS/PCI -- LIPID-LOWERING PHARMACOTHERAPY: HIGH-INTENSITY STATINS [50%+ LDL REDUCTION; FIRST-LINE ESTABLISHED ASCVD + HIGH-RISK PRIMARY PREVENTION]: ATORVASTATIN [LIPITOR; 40-80 mg QD; MOST PRESCRIBED; PROVE-IT TIMI 22 NEJM 2004: 80 mg SUPERIOR 40 mg POST-ACS; 4S; ASCOT-LLA]; ROSUVASTATIN [CRESTOR; GENERIC; 20-40 mg QD; JUPITER NEJM 2008: PRIMARY PREVENTION hsCRP ABOVE 2 + NORMAL LDL; RR 0.56; HEPATIC UPTAKE TRANSPORTER CREATINE KINASE]; MODERATE-INTENSITY [30-49% REDUCTION; INTERMEDIATE RISK; STATIN INTOLERANT ALTERNATIVE]: ATORVASTATIN 10-20 mg; ROSUVASTATIN 5-10 mg; SIMVASTATIN 20-40 mg; PRAVASTATIN 40-80 mg; LOVASTATIN 40 mg [MOST CYP3A4 INTERACTIONS; AVOID CERTAIN DRUGS]; FLUVASTATIN 80 mg; PITAVASTATIN 1-4 mg [LEAST DRUG INTERACTIONS; DIABETES DATA]; STATIN SAFETY + INTOLERANCE: MYOPATHY [MYALGIA WITHOUT CK ELEVATION 5-10%; STATIN-ASSOCIATED MUSCLE SYMPTOMS SAMS; CREATINE KINASE ABOVE 10x ULN = MYOSITIS; ABOVE 40x = RHABDOMYOLYSIS]; HEPATOTOXICITY [ASYMPTOMATIC TRANSAMINASE RISE BELOW 3x ULN NOT CONTRAINDICATION; SEVERE HEPATIC DISEASE CONTRAINDICATED]; DIABETES [MODEST INCREASE 10-20%; HIGHER DOSE HIGHER RISK; OUTWEIGHED BY CV BENEFIT]; DRUG INTERACTIONS [CYP3A4 [ATORVASTATIN; LOVASTATIN; SIMVASTATIN]: AVOID CLARITHROMYCIN; ITRACONAZOLE; CYCLOSPORINE; GEMFIBROZIL; AMIODARONE]; NON-STATIN LIPID-LOWERING AGENTS: EZETIMIBE [ZETIA; INHIBIT NPC1L1 INTESTINAL CHOLESTEROL ABSORPTION; 10 mg QD; LDL 15-20% ADDITIONAL REDUCTION; IMPROVE-IT NEJM 2015: POST-ACS SIMVA+EZE: CV DEATH/MI/STROKE HR 0.936 [6.4% RELATIVE BENEFIT; MODEST BUT REAL]; SAFE; NO MYOPATHY; COMBINED STATIN VYTORIN]; PCSK9 INHIBITORS [MONOCLONAL ANTIBODIES; LDL 50-60% ADDITIONAL REDUCTION]: EVOLOCUMAB [REPATHA; 140 mg SC Q2W OR 420 mg SC QM [AUTO-INJECTOR/PUSHTRONEX]; FOURIER NEJM 2017: ESTABLISHED ASCVD: LDL 59% REDUCTION [87 to 30 mg/dL]; MI/STROKE HR 0.80 [20% REDUCTION]; FDA 2015; INJECTION SITE; COST MAJOR BARRIER; PRIOR-AUTH REQUIRED]; ALIROCUMAB [PRALUENT; 75-150 mg SC Q2W; ODYSSEY OUTCOMES NEJM 2018: POST-ACS: DEATH 15% REDUCTION; CV EVENTS HR 0.85]; INCLISIRAN [LEQVIO; SIRNA RNA INTERFERENCE; 284 mg SC AT BASELINE; 3M; THEN Q6M [ONLY 2 INJECTIONS/YEAR]; FDA 2021; LDL 50% REDUCTION SUSTAINED; ORION-10+11; PCSK9 MESSENGER RNA DEGRADATION; COMPELLING ADHERENCE]; BEMPEDOIC ACID [NEXLETOL; ACL [ATP CITRATE LYASE] INHIBITOR; UPSTREAM STATIN PATHWAY; 180 mg QD; ACTIVATED ONLY LIVER [LESS MUSCLE]; CLEAR NEJM 2023: PRIMARY PREVENTION STATIN-INTOLERANT: MI/STROKE/REVASCULARIZATION HR 0.87 [13% REDUCTION]; LDL 21% REDUCTION; URIC ACID INCREASE GOUT RISK]; OMEGA-3 FATTY ACIDS [VERY HIGH TG REDUCTION 45%]: ICOSAPENTAENOIC ACID [EPA-ONLY; VASCEPA; 4 g QD [2 g BID]; REDUCE-IT NEJM 2018: ON-STATIN HIGH TG [150-499]: 25% CV EVENT REDUCTION [HR 0.75; NNT 21 AT 5Y]; FDA 2019 SECONDARY PREVENTION CV+TG ABOVE 150; VASCEPA MECHANISM [BEYOND TG; ANTI-INFLAMMATORY; ANTI-PLATELET; MEMBRANE STABILIZATION; MINERAL OIL CONTROL DEBATE]]; DHA+EPA COMBINED [LOVAZA; GENERIC; 4 g QD; TG REDUCTION 30-50%; NO CV OUTCOME BENEFIT STRENGTH; LDL INCREASE SLIGHT]; ASPIRIN [PRIMARY PREVENTION: USPSTF 2022 GRADE C AGES 40-59 ABOVE 10% ASCVD RISK [INDIVIDUAL DECISION]; GRADE D ABOVE 60Y [HARM OUTWEIGHS BENEFIT; BLEEDING]; ASPREE NEJM 2018: NO BENEFIT 75 mg QD HEALTHY ADULTS ABOVE 70]; SECONDARY PREVENTION [ESTABLISHED ASCVD; ACS; STENT]: ASPIRIN 81 mg QD INDEFINITE; DAPT [DUAL ANTIPLATELET; ASPIRIN + P2Y12 INHIBITOR]: POST-ACS [TICAGRELOR 90 mg BID OR PRASUGREL 10 mg QD SUPERIOR CLOPIDOGREL; AT LEAST 12 MONTHS]; POST-PCI STABLE CAD [CLOPIDOGREL 75 mg QD x6 MONTHS MINIMUM]; EXTENDED DAPT [ABOVE 12 MONTHS: DAPT SCORE ABOVE 2; HIGH-RISK FEATURES; WEIGHT BLEEDING RISK] | `text` |  |  |  |
| CAD/ASCVD Prevention: Lipid Management, Blood Pressure, and Antiplatelet Therapy | CAD Prevention Management Notes | `cad_prev_notes` | CAD Prevention Notes and Cardiology/Preventive Cardiology/Primary Care/Pharmacy/Nursing/Dietitian/Cardiac Rehab/Endocrinology/Genetics FH Screening Coordination | `textarea` |  |  |  |

### CAD Secondary Prevention — `cardiology_cad_secondary_prevention_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Coronary Artery Disease (CAD) Secondary Prevention | CAD History and Revascularization | `cad_event_type` | Index Cardiovascular Event | `select` |  |  |  |
| Coronary Artery Disease (CAD) Secondary Prevention | CAD History and Revascularization | `cad_vessels` | Vessel Disease | `select` |  |  |  |
| Coronary Artery Disease (CAD) Secondary Prevention | CAD History and Revascularization | `cad_pci_details` | Most Recent PCI Date and Vessel(s) Treated, Stent Type (BMS or DES generation) | `text` |  |  |  |
| Coronary Artery Disease (CAD) Secondary Prevention | CAD History and Revascularization | `cad_ef` | Most Recent LV Ejection Fraction (%) and Date — EF below 35% triggers ICD consideration; EF below 50% = reduced or mildly reduced | `text` |  |  |  |
| Coronary Artery Disease (CAD) Secondary Prevention | Secondary Prevention Medical Therapy | `cad_dapt` | Antiplatelet / DAPT Therapy | `select` |  |  |  |
| Coronary Artery Disease (CAD) Secondary Prevention | Secondary Prevention Medical Therapy | `cad_statin` | Statin Therapy | `select` |  |  |  |
| Coronary Artery Disease (CAD) Secondary Prevention | Secondary Prevention Medical Therapy | `cad_ace_arb` | ACE Inhibitor or ARB | `select` |  |  |  |
| Coronary Artery Disease (CAD) Secondary Prevention | Secondary Prevention Medical Therapy | `cad_beta_blocker` | Beta-Blocker Therapy | `select` |  |  |  |
| Coronary Artery Disease (CAD) Secondary Prevention | Secondary Prevention Medical Therapy | `cad_aldosterone` | Aldosterone Antagonist (post-MI EF below 40%) | `select` |  |  |  |
| Coronary Artery Disease (CAD) Secondary Prevention | Secondary Prevention Medical Therapy | `cad_colchicine` | Colchicine (Anti-inflammatory CV risk reduction) | `select` |  |  |  |
| Coronary Artery Disease (CAD) Secondary Prevention | Angina Assessment and Surveillance | `cad_ccs_class` | Canadian Cardiovascular Society (CCS) Angina Class | `select` |  |  |  |
| Coronary Artery Disease (CAD) Secondary Prevention | Angina Assessment and Surveillance | `cad_stress_test` | Functional Testing / Stress Imaging | `select` |  |  |  |
| Coronary Artery Disease (CAD) Secondary Prevention | Angina Assessment and Surveillance | `cad_antianginal` | Antianginal Therapy | `select` |  |  |  |
| Coronary Artery Disease (CAD) Secondary Prevention | Angina Assessment and Surveillance | `cad_cardiac_rehab` | Cardiac Rehabilitation | `select` |  |  |  |
| Coronary Artery Disease (CAD) Secondary Prevention | Angina Assessment and Surveillance | `cad_notes` | CAD Secondary Prevention Notes and Cardiology Coordination | `textarea` |  |  |  |

### CAD/ACS — `cardiology_cad_acs_management_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Coronary Artery Disease and ACS: Diagnosis, Revascularization, DAPT, and Secondary Prevention | ACS Classification, Diagnosis, and Acute Management | `acs_class` | STEMI ST-Elevation MI (New LBBB); NSTEMI Non-ST-Elevation MI Troponin+; UA Unstable Angina Troponin-; hs-cTn Rise Fall 1-3h Algorithm 0/1h; Primary PCI Goal Door-to-Balloon 90min; Fibrinolysis Alteplase if No PCI Within 120min; Anticoagulation Heparin Bivalirudin; Aspirin 325mg Load | `select` |  |  |  |
| Coronary Artery Disease and ACS: Diagnosis, Revascularization, DAPT, and Secondary Prevention | ACS Classification, Diagnosis, and Acute Management | `acs_antiplatelet` | DAPT: Aspirin 81mg Lifetime + P2Y12 Inhibitor 12 months Post-ACS; Ticagrelor 90mg BID PLATO NEJM 2009 16% RRR vs Clopidogrel; Prasugrel 10mg QD TRITON NEJM 2007 19% RRR No Prior Stroke/TIA; Clopidogrel Safer Bleeding Elderly; DAPT Duration Extension 30mg PEGASUS; Cangrelor IV Pre-Loading -- ANTIPLATELET THERAPY ACS: ASPIRIN [ASA; LOAD 325 mg ACUTE; MAINTENANCE 81 mg QD LIFETIME; INHIBITS COX-1 [TXA2 SYNTHESIS]; IRREVERSIBLE; DAPT BACKBONE]: P2Y12 INHIBITORS [ADP RECEPTOR BLOCK; PLATELET AGGREGATION INHIBITION; 12 MONTHS POST-ACS MINIMUM]: TICAGRELOR [BRILINTA; PLATO TRIAL NEJM 2009: 18,624 ACS PATIENTS: TICAGRELOR 90 mg BID vs CLOPIDOGREL 75 mg QD: PRIMARY ENDPOINT [CV DEATH+MI+STROKE] 9.8% vs 11.7% [RRR 16%]; MAJOR BLEEDING SIMILAR; DYSPNEA [~14%; ADENOSINE MECHANISM; DISCONTINUATION 1%]; FDA 2011; PREFERRED NSTEMI/STEMI IF NO HIGH BLEEDING RISK; REVERSAL: NO ANTIDOTE [PLATELET TRANSFUSION]; HOLD 5 DAYS BEFORE SURGERY; MAINTENANCE DOSE 90 mg BID [60 mg BID AFTER FIRST 12 MONTHS PEGASUS]]; PRASUGREL [EFFIENT; TRITON-TIMI 38 NEJM 2007: ACS UNDERGOING PCI: PRASUGREL 60 mg LOAD + 10 mg QD vs CLOPIDOGREL 300 mg + 75 mg: CV DEATH+MI+STROKE 9.9% vs 12.1% [RRR 19%]; MORE BLEEDING [LIFE-THREATENING 1.4% vs 0.9%]; DO NOT USE IF PRIOR STROKE/TIA [HARM]; AGE ABOVE 75 [GENERALLY AVOID; 5 mg IF MUST]; WEIGHT BELOW 60 kg [5 mg]; FDA 2009; PREFERRED POST-PCI STEMI; CANGRELOR [KENGREAL; IV P2Y12 ANTAGONIST; RAPID ONSET/OFFSET; FOR PCI PATIENTS NOT PRELOADED; CHAMPION PHOENIX; BRIDGE PRE-SURGERY]; CLOPIDOGREL [PLAVIX; 300-600 mg LOAD + 75 mg QD; SLOWER ONSET; PRODRUG [CYP2C19 METABOLISM]; CYP2C19*2/*3 POOR METABOLIZERS [25-30% POPULATION] REDUCED EFFECT; GENOTYPE TESTING CONSIDERED HIGH-RISK PCI; SAFER BLEEDING THAN PRASUGREL/TICAGRELOR; PREFERRED ELDERLY/HIGH-BLEEDING RISK/CCS INDICATION]; DAPT DURATION [INDIVIDUALIZE BLEEDING VS ISCHEMIC RISK]: ACS STANDARD [12 MONTHS DAPT; P2Y12 + ASPIRIN]; HIGH BLEEDING RISK [6 MONTHS THEN STOP P2Y12 OR MONOTHERAPY P2Y12]; EXTENDED DAPT [ABOVE 12 MONTHS]: PEGASUS-TIMI 54 NEJM 2015: TICAGRELOR 90 mg BID OR 60 mg BID VS PLACEBO ADDED TO ASA 1-3 YEARS POST-MI: PRIMARY 60 mg DOSE: CV DEATH+MI+STROKE 7.77% vs 9.04%; BLEEDING INCREASED; SELECT HIGH ISCHEMIC RISK [DM; MULTIVESSEL; CKD; PRIOR MI; AGE; COMPLEX PCI]; PRASUGREL+ASA DAPT-TRIAL POST-30-MONTHS: EXTENDED BENEFIT HIGH-RISK PATIENTS; PPI CO-PRESCRIPTION [OMEPRAZOLE/PANTOPRAZOLE; GI PROTECTION ON DAPT; AVOID OMEPRAZOLE WITH CLOPIDOGREL [CYP2C19 INTERACTION; USE PANTOPRAZOLE]] | `text` |  |  |  |
| Coronary Artery Disease and ACS: Diagnosis, Revascularization, DAPT, and Secondary Prevention | Stable CAD, Revascularization Decisions, and Secondary Prevention | `cad_revascularization` | Stable CAD: ISCHEMIA NEJM 2020 Conservative Non-Inferior PCI for Stable Moderate-Severe Ischemia; COURAGE NEJM 2007 Optimal Medical Therapy; FFR-Guided PCI FAME 2 vs Medical; OCT/IVUS Guidance; CABG for Left Main 3-Vessel DM EXCEL SYNTAX; Fractional Flow Reserve | `select` |  |  |  |
| Coronary Artery Disease and ACS: Diagnosis, Revascularization, DAPT, and Secondary Prevention | Stable CAD, Revascularization Decisions, and Secondary Prevention | `cad_secondary` | Secondary Prevention Post-ACS/CAD: High-Intensity Statin Atorvastatin 40-80mg LDL Below 70; PCSK9i Evolocumab FOURIER LDL Below 55; Colchicine 0.5mg QD COLCOT LDL 23% MACE; REDUCE-IT Icosapentaenoic Acid 4g/d; Beta-Blocker ACEi ARB RAS; Ezetimibe IMPROVE-IT; BP Below 130/80 -- SECONDARY PREVENTION ACS/STABLE CAD: ANTIPLATELET [SEE DAPT SECTION; ASPIRIN LIFETIME; P2Y12 12M POST-ACS]; STATIN THERAPY [ALL CAD PATIENTS; HIGH-INTENSITY; LIFETIME]: ATORVASTATIN [LIPITOR; 40-80 mg QD; LDL GOAL BELOW 70 mg/dL POST-ACS; BELOW 55 mg/dL VERY HIGH RISK [2+ MACE]; FIRST-LINE; GENERIC]; ROSUVASTATIN [CRESTOR; 20-40 mg QD; EQUALLY EFFICACIOUS; GENERIC]; HIGH-INTENSITY STATIN TARGET [ABOVE 50% LDL REDUCTION BASELINE]; EZETIMIBE [ZETIA; 10 mg QD; INHIBITS NPC1L1 INTESTINAL CHOLESTEROL; IMPROVE-IT NEJM 2015: EZETIMIBE+SIMVASTATIN vs SIMVASTATIN: MACE 32.7% vs 34.7% [RRR 6.4%]; ADD TO STATIN IF LDL ABOVE GOAL; GENERIC]; PCSK9 INHIBITORS [INJECTABLE ANTI-PCSK9 mAb; REDUCE LDL 50-60% ON TOP OF STATIN]: EVOLOCUMAB [REPATHA; FOURIER NEJM 2017: EVOLOCUMAB 140 mg Q2W OR 420 mg Q4W vs PLACEBO ON BACKGROUND STATIN: CV DEATH+MI+STROKE 9.8% vs 11.3% [HR 0.80]; LDL 87 TO 30 mg/dL; FDA 2015]; ALIROCUMAB [PRALUENT; ODYSSEY OUTCOMES NEJM 2018: POST-ACS STATIN; MACE 9.5% vs 11.1%; FDA 2015]; INCLISIRAN [LEQVIO; SIRNA PCSK9; 284 mg SQ Q6M AFTER LOADING; SIMILAR EFFICACY; 2x/YEAR CONVENIENCE]; BETA-BLOCKERS [POST-MI: METOPROLOL SUCCINATE; CARVEDILOL; BISOPROLOL; INITIATE ACUTELY; 1-3+ YEARS POST-STEMI; HRREDUCTION BENEFIT; ANTI-ARRHYTHMIC; REDUCE RECURRENT MI; CONTINUE IF LV DYSFUNCTION; BENEFIT WITHOUT LV DYSFUNCTION UNCLEAR BEYOND 1-3Y]; ACE INHIBITOR/ARB [ALL POST-MI EF BELOW 40% [LIFE-SAVING]; DIABETES; ALSO BENEFIT PRESERVED EF ATHEROSCLEROSIS; RAMIPRIL HOPE; LISINOPRIL GISSI-3; VALSARTAN VALIANT]; COLCHICINE [COLCOT NEJM 2019: 0.5 mg QD POST-MI ACUTE PHASE: MACE 5.5% vs 7.1% [HR 0.77]; ANTI-INFLAMMATORY; LoDoCo2 NEJM 2020: STABLE CAD 0.5 mg QD: MACE 2.5% vs 3.6%; FDA 2023 CAD INDICATION; GI INTOLERANCE DOSE-LIMITING; AVOID CYP3A4/P-gp INHIBITORS]; ICOSAPENTAENOIC ACID [EPA; VASCEPA; REDUCE-IT NEJM 2018: VASCEPA 4 g/DAY vs MINERAL OIL PLACEBO STATIN-TREATED ELEVATED TG [150-499]: MACE 17.2% vs 22.0% [HR 0.75; ARR 4.8%]; TG REDUCTION + DIRECT CARDIOVASCULAR EFFECTS; FDA 2019 HIGH-CV-RISK ELEVATED TG]; BLOOD PRESSURE CONTROL [TARGET BELOW 130/80 mmHg POST-ACS/CAD]; CARDIAC REHAB [CLASS I INDICATION POST-MI/CABG/STABLE CAD; EXERCISE TRAINING + EDUCATION + RISK FACTOR MODIFICATION; MORTALITY BENEFIT 20-25%; UNDERUTILIZED]; SMOKING CESSATION [HIGHEST MODIFIABLE RISK FACTOR; VARENICLINE [CHANTIX]; NRT; BUPROPION] | `text` |  |  |  |

### CHF Management — `chf_management_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CHF / Heart Failure Management | Patient & HF Classification | `patientId` | Patient | `typeahead` | Y |  |  |
| CHF / Heart Failure Management | Patient & HF Classification | `visitDate` | Visit Date | `date` | Y |  |  |
| CHF / Heart Failure Management | Patient & HF Classification | `provider` | Provider (Cardiologist / Heart Failure Specialist) | `typeahead` | Y |  |  |
| CHF / Heart Failure Management | Patient & HF Classification | `hfType` | HF Type | `select` | Y |  |  |
| CHF / Heart Failure Management | Patient & HF Classification | `currentEF` | Most Recent EF (%) | `text` | Y |  |  |
| CHF / Heart Failure Management | Patient & HF Classification | `echoDate` | Most Recent Echo Date | `date` |  |  |  |
| CHF / Heart Failure Management | Patient & HF Classification | `nyha` | NYHA Functional Class | `select` | Y |  |  |
| CHF / Heart Failure Management | Volume Status & Symptoms | `weight` | Weight Today (lbs) | `number` | Y |  |  |
| CHF / Heart Failure Management | Volume Status & Symptoms | `weightChange` | Weight Change (vs. last visit / dry weight) | `text` | Y |  |  |
| CHF / Heart Failure Management | Volume Status & Symptoms | `symptoms` | Current Symptoms | `textarea` | Y |  |  |
| CHF / Heart Failure Management | Volume Status & Symptoms | `physicalExam` | Cardiovascular Exam | `textarea` | Y |  |  |
| CHF / Heart Failure Management | GDMT & Plan | `gdmt` | Guideline-Directed Medical Therapy (GDMT) | `textarea` | Y |  |  |
| CHF / Heart Failure Management | GDMT & Plan | `nextVisit` | Next Visit | `date` |  |  |  |
| CHF / Heart Failure Management | GDMT & Plan | `plan` | Assessment & Plan | `textarea` | Y |  |  |

### CV Risk Factor Management — `cardiology_lipid_hypertension_combined_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CV Risk — Polypill, ASCVD Calculator, and Hypertension + Lipid Synergy | ASCVD Risk Calculation and Risk Enhancers | `ascvd_calc` | Pooled Cohort Equations and Risk Enhancers (ACC/AHA 2019 CHOLESTEROL GUIDELINES; STEP 1: CALCULATE 10-YEAR ASCVD RISK using Pooled Cohort Equations (PCE): age + sex + race + total cholesterol + HDL + systolic BP + BP treatment + diabetes + smoking; LOW: <5%; BORDERLINE: 5-7.5%; INTERMEDIATE: 7.5-20%; HIGH: >=20%; SECONDARY PREVENTION (clinical ASCVD): HIGH RISK — high-intensity statin regardless of PCE; STEP 2: RISK-ENHANCING FACTORS (for borderline/intermediate to upgrade therapy): family history premature ASCVD (<55 male, <65 female first-degree); LDL >=160 mg/dL; hs-CRP >=2 mg/L; ABI <0.9 (PAD); ankle-brachial index; metabolic syndrome; pre-diabetes; CKD (eGFR 15-60); inflammatory conditions (RA, psoriasis, HIV, SLE); high-risk ethnicity (South Asian); CORONARY ARTERY CALCIUM (CAC) SCORE: useful when uncertain (borderline risk OR patient preference for or against statins); CAC=0: very low risk (statin may be withheld except diabetes/smoking); CAC 1-99: favorable (low-moderate intensity statin); CAC >=100 or >=75th percentile for age/sex/ethnicity: statin (high-intensity); CAC >=1000: very high risk (statin + ezetimibe); CORONARY CTA (CCTA): coronary plaque quantification + stenosis; not routine for risk stratification but emerging role | `text` |  |  |  |
| CV Risk — Polypill, ASCVD Calculator, and Hypertension + Lipid Synergy | ASCVD Risk Calculation and Risk Enhancers | `statin_targets` | Statin Intensity and LDL-C Targets | `select` |  |  |  |
| CV Risk — Polypill, ASCVD Calculator, and Hypertension + Lipid Synergy | Polypill and Combination Approach | `polypill` | Polypill Strategy and Adherence (POLYPILL CONCEPT: single pill combining statin + antihypertensive + aspirin (where indicated); EVIDENCE: TIPS-3 trial (2020): polypill (rosuvastatin 10 mg + ramipril + hydrochlorothiazide) + aspirin: CV events 21% reduction vs. placebo in intermediate-risk population; POLICAP trial; ADHERENCE: polypill improves adherence by 20-35% vs. individual components; FIXED-DOSE COMBINATIONS AVAILABLE: statin + ACEi; statin + CCB; multiple antihypertensives; FDA-approved combinations increasing; SIMPLIFICATION: fewer daily pills; once-daily dosing; reduced prescription complexity; LIMITATIONS: dose inflexibility; difficulty adjusting individual components; not suitable for all patients; HYPERTENSION + HYPERLIPIDEMIA INTERACTION: shared metabolic syndrome substrate; metabolic syndrome: TG + waist + glucose + BP + HDL; treatment synergy; THIAZIDE + STATIN COMBINATION: thiazide modestly raises LDL (2-5%); offset by statin; acceptable combination; ALDOSTERONE ANTAGONIST (SPIRONOLACTONE): resistant hypertension; beneficial in HFpEF; GLOBAL CV RISK: treat all risk factors simultaneously; addressing multiple risk factors provides multiplicative benefit (exponential more than additive); POLYVASCULAR DISEASE (CORONARY + PAD + STROKE): COMPASS trial: rivaroxaban 2.5 mg BID + aspirin 100 mg: 28% CV event reduction; approved for ASCVD/PAD; ANTITHROMBOTIC IN CVD: aspirin 81 mg QD (secondary prevention; primary prevention benefit unclear); clopidogrel alternative; P2Y12 + aspirin: 12 months ACS; ongoing dual antiplatelet: PEGASUS trial in selected post-MI) | `text` |  |  |  |
| CV Risk — Polypill, ASCVD Calculator, and Hypertension + Lipid Synergy | Polypill and Combination Approach | `htn_lipid` | Hypertension and Dyslipidemia Combined Management | `select` |  |  |  |

### Cardiac Amyloidosis — `cardiology_amyloidosis_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiac Amyloidosis: Diagnosis and Treatment | Diagnosis and Subtype Classification | `amyloid_type` | Amyloid Type | `select` |  |  |  |
| Cardiac Amyloidosis: Diagnosis and Treatment | Diagnosis and Subtype Classification | `amyloid_echo` | Echocardiographic Features | `select` |  |  |  |
| Cardiac Amyloidosis: Diagnosis and Treatment | Diagnosis and Subtype Classification | `amyloid_ecg` | ECG Findings | `select` |  |  |  |
| Cardiac Amyloidosis: Diagnosis and Treatment | Diagnosis and Subtype Classification | `amyloid_pyp_scan` | Technetium Pyrophosphate (PYP) Scan | `select` |  |  |  |
| Cardiac Amyloidosis: Diagnosis and Treatment | Diagnosis and Subtype Classification | `amyloid_biomarkers` | Biomarkers and Staging — NT-proBNP (ATTR staging: Stage I below 3000 pg/mL + troponin I below 0.05 ng/mL: median survival 66 months; Stage II: either elevated; Stage III: both elevated: 24 months); eGFR (renal involvement); BNP monitoring trajectory; serum free kappa/lambda ratio (screen for AL); TTR gene sequencing (all ATTR patients); 6MWT and KCCQ-12 for functional status and QoL | `text` |  |  |  |
| Cardiac Amyloidosis: Diagnosis and Treatment | Disease-Specific and Heart Failure Treatment | `amyloid_attr_treatment` | ATTR-CM Disease-Modifying Therapy | `select` |  |  |  |
| Cardiac Amyloidosis: Diagnosis and Treatment | Disease-Specific and Heart Failure Treatment | `amyloid_hf_management` | Heart Failure Management in Cardiac Amyloidosis | `select` |  |  |  |
| Cardiac Amyloidosis: Diagnosis and Treatment | Disease-Specific and Heart Failure Treatment | `amyloid_transplant` | Advanced Therapies and Transplant | `select` |  |  |  |
| Cardiac Amyloidosis: Diagnosis and Treatment | Disease-Specific and Heart Failure Treatment | `amyloid_monitoring` | Monitoring Schedule — NT-proBNP and troponin Q3-6 months; echo Q6-12 months (wall thickness, strain, EF, valve function); 6MWT and KCCQ-12; eGFR quarterly; liver enzymes if patisiran/vutrisiran; TTR level (confirms dosing compliance with silencer agents); 24-hour Holter for syncope or palpitations; TTR concentration monitoring during siRNA therapy | `text` |  |  |  |
| Cardiac Amyloidosis: Diagnosis and Treatment | Disease-Specific and Heart Failure Treatment | `amyloid_notes` | Cardiac Amyloidosis Management Notes and Cardiology/Hematology/Genetics/EP Coordination | `textarea` |  |  |  |

### Cardiac Amyloidosis — `cardiology_cardiac_amyloidosis_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiac Amyloidosis ATTR and AL: Diagnosis, Non-Biopsy Pathway, and Transthyretin Stabilizers | Cardiac Amyloidosis Diagnosis: Echocardiography, PYP Scan, and Typing | `amyl_class` | Cardiac Amyloidosis Types: ATTR Transthyretin Amyloidosis: ATTRwt Wild-Type Non-Hereditary Age-Related Male Above 60; ATTRv Hereditary Variant TTR Mutation V122I African American; V30M Portuguese Polyneuropathy; T60A Irish; 50+ Mutations; AL Amyloidosis: Light Chain Immunoglobulin Lambda Kappa Plasma Cell Dyscrasia; Distinguish ATTR From AL Critical Different Prognosis Treatment; Non-Biopsy Diagnosis ATTR: Technetium Pyrophosphate Tc-PYP Scan Grade 2 or 3 H:CL Ratio Above 1.5; Exclude AL Serum Free Light Chain SFLC Ratio Normal SPEP UPEP Negative; High Sensitivity 98% Specificity Grade 2-3 Without Monoclonal Protein; If SFLC Abnormal Biopsy Required; Biopsy Congo Red Apple-Green Birefringence; Abdominal Fat Pad; Bone Marrow if AL; Echo Concentric Hypertrophy Granular Sparkling; Thick Walls Low Voltage ECG; Low-Flow Low-Gradient AS Coexistence; Elevated BNP NT-proBNP; Restrictive Pattern Diastology; Paradoxical Low-Flow Heart Failure; Lean HFpEF Thin Person Thick Heart; Prognosis: AL Mean Survival 8M Untreated; ATTR Median Survival 2.5-3.5Y Untreated | `select` |  |  |  |
| Cardiac Amyloidosis ATTR and AL: Diagnosis, Non-Biopsy Pathway, and Transthyretin Stabilizers | Cardiac Amyloidosis Diagnosis: Echocardiography, PYP Scan, and Typing | `amyl_features` | Cardiac Amyloidosis Clinical Features and Red Flags: Heart Failure Preserved Ejection Fraction Thick Walls; Disproportionate LVH; Bilateral Carpal Tunnel Precede Diagnosis; Lumbar Spinal Stenosis; Peripheral Neuropathy ATTRv; Autonomic Neuropathy Orthostatic Hypotension ATTRv; Bilateral Biceps Tendon Spontaneous Rupture; Nephrotic Syndrome AL; Macroglossia AL; Periorbital Purpura AL Shoulder Pad Sign AL; Low Voltage Despite Thick Walls; Pseudo-Infarct ECG Anterior; Defibrillator ICD Sudden Death Risk; Conduction Disease Pacemaker; AF Anticoagulate All Amyloid AF High Thromboembolic Risk Even CHADS Below 2; Digoxin Toxicity Amyloid Binds Digoxin Dangerous; Calcium Channel Blockers Extreme Hypotension Avoid; Diuretics Use Cautiously Volume Depletion Preload Dependent; AL Treatment Daratumumab Bortezomib CyBorD VCd Myeloma-Based; Stem Cell Transplant Select AL; Better Outcomes Earlier Diagnosis -- AMYLOIDOSIS RED FLAGS AND CLINICAL PEARLS: CLINICAL RED FLAGS [TRIGGER EVALUATION]: THICK HEART THIN ECG [WALL THICKNESS ABOVE 12 mm BUT LOW VOLTAGE ECG = AMYLOID UNTIL PROVEN OTHERWISE]; LEAN HFpEF [NORMAL BMI HFpEF; UNLIKE TYPICAL OBESE HFpEF]; DISPROPORTIONATE LVH [WALL THICKNESS ABOVE 12 mm WITHOUT CLEAR CAUSE]; BILATERAL CTS [90% ATTRwt; OFTEN 5-10 YEARS BEFORE HF DIAGNOSIS; REFER FOR AMYLOID EVALUATION]; SPONTANEOUS BICEPS TENDON RUPTURE [BILATERAL POPEYE DEFORMITY; HIGHLY SUSPICIOUS ATTR]; LUMBAR SPINAL STENOSIS [COMMON ATTR; EXCISED LIGAMENTUM FLAVUM FOR AMYLOID TYPING]; ORTHOSTATIC HYPOTENSION [ATTRv AUTONOMIC]; PERIPHERAL NEUROPATHY [ATTRv; SYMMETRIC LENGTH-DEPENDENT; PAINFUL SMALL FIBER EARLY]; NEPHROTIC SYNDROME [AL; 30-40% RENAL AMYLOID]; MACROGLOSSIA [NEARLY PATHOGNOMONIC AL; TONGUE ENLARGEMENT]; PERIORBITAL PURPURA [RACCOON EYES; SPONTANEOUS AL BLEEDING]; SHOULDER PAD SIGN [PERIARTICULAR AMYLOID AL]; CARDIAC SPECIFIC COMPLICATIONS: HEART BLOCK [CONDUCTION SYSTEM INFILTRATION; PACEMAKER IMPLANT]; AF/FLUTTER [ATRIAL INFILTRATION; ANTICOAGULATE ALL AMYLOID+AF REGARDLESS CHA2DS2-VASc — HIGH INTRACARDIAC THROMBUS RISK; SINUS RHYTHM DOES NOT PRECLUDE ANTICOAGULATION RECOMMENDATION SOME GUIDELINES]; SCD RISK [ICD CONTROVERSIAL; DEATH TYPICALLY ELECTROMECHANICAL DISSOCIATION NOT REFIBRILLATION]; LOW-FLOW LOW-GRADIENT AS [COEXISTENCE COMMON ELDERLY; AMYLOID CONFOUNDS EF]; MEDICATION HAZARDS [SPECIFIC TO AMYLOID]: DIGOXIN [BINDS AMYLOID FIBRILS; DRAMATICALLY INCREASED TOXICITY; AVOID IN CARDIAC AMYLOIDOSIS]; VERAPAMIL DILTIAZEM [NEGATIVE INOTROPE SEVERE; PROFOUND HYPOTENSION; AVOID]; DIURETICS [PRELOAD DEPENDENT; OVER-DIURESIS CAUSES LOW-OUTPUT; CAUTIOUS SMALL DOSE TITRATION]; NITRATES [PRELOAD SENSITIVE; AVOID]; ACEi/ARB [USE CAUTIOUSLY; CAN CAUSE HYPOTENSION] | `text` |  |  |  |
| Cardiac Amyloidosis ATTR and AL: Diagnosis, Non-Biopsy Pathway, and Transthyretin Stabilizers | ATTR Treatment: TTR Stabilizers, Silencers, and AL Chemotherapy | `amyl_treatment` | Cardiac ATTR Treatment: TTR Stabilizers: Tafamidis 61mg QD Vyndamax Non-Ionized or 80mg QD Vyndaqel Ionized; ATTR-ACT Trial NEJM 2018 RCT Placebo 30% Mortality Reduction; All Cause Mortality Hospitalization Primary Endpoint; FDA 2019 ATTRwt ATTRv Cardiac; Wild-Type All; Hereditary Cardiac Predominant; Acoramidis Attruby 800mg BID Non-Ionized TTR Stabilizer ATTRiCM-001 FDA 2025; TTR Silencers Gene Silencing Eliminate Production: Patisiran Onpattro siRNA 0.3mg/kg IV Q3W Apollo-B NEJM 2022 Cardiac ATTR Polyneuropathy; Vutrisiran Amvuttra 25mg SQ Q3M HELIOS-B 2024; Eplontersen Wainua ASO SQ Monthly Ionis; ATTRv Polyneuropathy Indicated But Off-Label Cardiac Emerging; AL Treatment: Daratumumab+Bortezomib+Cyclophosphamide+Dexamethasone DVCd CyBorD; Dara-CyBorD Andromeda Trial FDA 2021; Autologous Stem Cell Transplant Select Eligible AL; Isatuximab Elranatamab Bispecific Emerging Refractory; Natriuretic Peptide-Guided Diuresis; ACEi ARB Caution; Loop Diuretic; Beta-Blocker Heart Rate 60-80; Spironolactone Cautious; Cardiac Rehabilitation Emerging ATTR | `select` |  |  |  |
| Cardiac Amyloidosis ATTR and AL: Diagnosis, Non-Biopsy Pathway, and Transthyretin Stabilizers | ATTR Treatment: TTR Stabilizers, Silencers, and AL Chemotherapy | `amyl_notes_detail` | Amyloidosis Management Plan and Notes: Type ATTR or AL, ATTRwt vs ATTRv Mutation, PYP Scan Grade and Ratio, AL Workup SFLC SPEP Result, CMR Native T1 ECV, Biopsy Result if Obtained, BNP NT-proBNP, NYHA Class, TTR Stabilizer or Silencer Selected, AL Chemotherapy Regimen, Dangerous Medication Avoidance, ICD Discussion, Genetic Testing Cascade Screening, Coordination Notes | `textarea` |  |  |  |
| Cardiac Amyloidosis ATTR and AL: Diagnosis, Non-Biopsy Pathway, and Transthyretin Stabilizers | Cardiac Amyloidosis Management Notes | `amyl_mgmt_notes` | Cardiac Amyloidosis Notes and Cardiology HF Amyloid Specialist/Hematology AL Myeloma/Cardiac Imaging Echo CMR/Nuclear Medicine PYP Scan/Neurology ATTRv Polyneuropathy/Genetic Counseling Hereditary TTR/Pharmacy Tafamidis Patisiran/Social Work High Cost Drug Assistance/Cardiac Electrophysiology ICD Pacemaker/Cardiac Surgery Transplant Evaluation/Nursing/Coordination Notes | `textarea` |  |  |  |

### Cardiac Arrhythmia — `cardiac_arrhythmia_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiac Arrhythmia Management | Patient & Arrhythmia Type | `patientId` | Patient | `typeahead` | Y |  |  |
| Cardiac Arrhythmia Management | Patient & Arrhythmia Type | `visitDate` | Visit Date | `date` | Y |  |  |
| Cardiac Arrhythmia Management | Patient & Arrhythmia Type | `provider` | Cardiologist / Electrophysiologist | `typeahead` | Y |  |  |
| Cardiac Arrhythmia Management | Patient & Arrhythmia Type | `arrhythmiaType` | Arrhythmia Type | `select` | Y |  |  |
| Cardiac Arrhythmia Management | Patient & Arrhythmia Type | `afBurden` | AF Burden / Device Data (if monitored) | `text` |  |  |  |
| Cardiac Arrhythmia Management | Stroke Risk & Anticoagulation | `cha2ds2vasc` | CHA2DS2-VASc Score | `select` | Y |  |  |
| Cardiac Arrhythmia Management | Stroke Risk & Anticoagulation | `hasbled` | HAS-BLED Score (Bleeding Risk) | `text` |  |  |  |
| Cardiac Arrhythmia Management | Stroke Risk & Anticoagulation | `anticoagulationStatus` | Anticoagulation Status | `textarea` | Y |  |  |
| Cardiac Arrhythmia Management | Rhythm Control & Plan | `rateRhythmStrategy` | Rate vs. Rhythm Control Strategy | `select` | Y |  |  |
| Cardiac Arrhythmia Management | Rhythm Control & Plan | `heartRate` | Resting Heart Rate (bpm) | `number` |  |  |  |
| Cardiac Arrhythmia Management | Rhythm Control & Plan | `currentMeds` | Rate/Rhythm Medications | `textarea` | Y |  |  |
| Cardiac Arrhythmia Management | Rhythm Control & Plan | `plan` | Assessment & Plan | `textarea` | Y |  |  |

### Cardiac CT and CCTA — `cardiology_cardiac_ct_ccta_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiac CT — CCTA, Calcium Score, CT-FFR, CAD-RADS | CCTA Indications and Technique | `ccta_dx` | CCTA vs. Functional Testing, PROMISE Trial, SCOT-HEART, and Appropriate Use Criteria (CORONARY CT ANGIOGRAPHY (CCTA): TECHNIQUE: 64-slice or higher multidetector CT; retrospective or prospective ECG gating; heart rate control (metoprolol; ivabradine); sublingual nitrates for coronary dilation; CONTRAST: iodinated; creatinine/GFR consideration; RADIATION: prospective gating reduces dose (~1-3 mSv vs. 8-15 mSv retrospective); PROMISE TRIAL (2015): 10,003 patients with stable chest pain; CCTA vs. FUNCTIONAL TESTING (stress ECG; nuclear; echo); NO DIFFERENCE in primary endpoint (death; MI; hospitalization; major procedural complication); CCTA led to MORE DOWNSTREAM TESTING and MORE REVASCULARIZATION but LESS MI at 2 years; SCOT-HEART TRIAL (2015/2018): CCTA vs. standard care in stable chest pain; 5-year results: CCTA reduced fatal/non-fatal MI (2.3% vs. 3.9%); MECHANISM: CCTA revealed non-obstructive CAD; prompted statin initiation; PERIOPERATIVE EVALUATION: CT now NOT routinely used pre-surgery; noninvasive stress testing for selected patients; EMERGENCY DEPARTMENT CHEST PAIN: TRIPLE RULE OUT: CT angiography for aorta + pulmonary arteries + coronary arteries; CCTA in low-intermediate risk acute chest pain (ACRIN PA 4005; CT-STAT); ACC/AHA APPROPRIATE USE CRITERIA FOR CCTA: APPROPRIATE: new onset suspected stable CAD (intermediate pre-test probability); ED chest pain; prior stress test unable to interpret; UNCERTAIN: low pre-test probability; CCTA LIMITATIONS: poor in arrhythmia; tachycardia; heavy coronary calcification (Agatston >400; blooming artifact); obesity; STENT EVALUATION: limited for in-stent restenosis (<3mm stent); large stents better; CCTA FOR STRUCTURAL HEART: pre-TAVR planning; AF ablation (pulmonary vein anatomy); left atrial appendage occlusion planning; congenital heart; CONGENITAL HEART DISEASE: CCTA preferred over invasive angiography in many cases; STRUCTURAL ASSESSMENT; pulmonary veins; ASD; VSD | `text` |  |  |  |
| Cardiac CT — CCTA, Calcium Score, CT-FFR, CAD-RADS | CCTA Indications and Technique | `cad_rads` | CAD-RADS 2.0 Classification System and Management Recommendations | `select` |  |  |  |
| Cardiac CT — CCTA, Calcium Score, CT-FFR, CAD-RADS | Coronary Calcium Scoring and CT-FFR | `cac` | Agatston Score Interpretation, MESA Study, Statin Reclassification, and ASCVD Risk Integration (CORONARY ARTERY CALCIUM (CAC) SCORING: TECHNIQUE: NON-CONTRAST CT; Agatston score (plaque area x density coefficient); CALCIUM SCAN: ~1 mSv; no contrast; AGATSTON SCORE INTERPRETATION: 0: no plaque; VERY LOW RISK; if ASCVD 7.5-20% + CAC=0: withhold statin (MESA data); 1-99: minimal to mild; PERCENTILE BASED ON AGE/SEX/ETHNICITY; 100-399: moderate; 100+ = ACC/AHA threshold to recommend statin; >=400: extensive; HIGH RISK regardless of Framingham; PERCENTILE: 75th percentile for age = statin consideration; >75th = high priority; MESA RISK SCORE: integrates CAC + traditional ASCVD risk factors; superior to Framingham; ACC/AHA CHOLESTEROL GUIDELINES 2019: CAC USED FOR TREATMENT DECISION IN INTERMEDIATE-RISK (ASCVD 7.5-20%): CAC=0: reasonably withhold statin (unless smoking/DM/strong family history); CAC 1-99 or <75th %ile: favor statin; CAC >=100 or >=75th %ile: statin recommended; ABI, hsCRP, ankle-brachial index also considered; STATIN RECLASSIFICATION: CAC=0 reclassifies ~40% of intermediate-risk DOWNWARD; reduces unnecessary statin prescriptions; MESA TRIAL: CAC superior to other traditional risk markers for incident CVD; FAMILY HISTORY: independent predictor; complements CAC; HIGH SENSITIVITY CRP (hsCRP): predicts risk; JUPITER trial (rosuvastatin in hsCRP >=2); CAC PROGRESSION: annual increase of >15 Agatston units = increased risk; DIABETES PATIENTS: most have positive CAC if >50 years; CAC can guide intensity of statin; YOUNGER PATIENTS (<40): CAC rarely indicated; focus on risk factor modification; WOMEN: under-screened; CAC useful due to Framingham risk underestimation; PATIENT EDUCATION: CAC as motivational tool; improves adherence | `text` |  |  |  |
| Cardiac CT — CCTA, Calcium Score, CT-FFR, CAD-RADS | Coronary Calcium Scoring and CT-FFR | `ctffr` | CT-FFR HeartFlow FFRCT, PLATFORM and NXT Trials, and Fractional Flow Reserve Correlation | `select` |  |  |  |

### Cardiac Channelopathies — `cardiology_brugada_channelopathies_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Brugada, Long QT, CPVT, and Inherited Arrhythmia Syndromes | Brugada Syndrome | `brugada_dx` | Brugada ECG Pattern, Genetics, and Risk Stratification (BRUGADA SYNDROME: AUTOSOMAL DOMINANT; SCN5A mutations (Nav1.5 sodium channel); 20-25% of cases; PENETRANCE: variable; males > females (testosterone effects); PATTERN TYPE 1 (DIAGNOSTIC): coved-type ST elevation >=2 mm in V1-V2 followed by negative T wave; spontaneous or sodium channel blocker-induced; TYPE 2: saddle-back (not diagnostic); TYPE 3: <2 mm ST elevation; PROVOCATIVE TESTING: FLECAINIDE, AJMALINE, PROCAINAMIDE IV: unmask type 1 pattern; used when type 2 or equivocal; CLINICAL SIGNIFICANCE: syncope, aborted SCD, VF/polymorphic VT; events at REST or SLEEP (vagal predominance); FEVER TRIGGER (key): fever → sodium channel inactivation → unmasked; TEMP CONTROL essential; paracetamol promptly; RISK STRATIFICATION: ABORTED SCD: HIGH RISK; ICD; SYMPTOMATIC (syncope/seizure): INTERMEDIATE; ICD vs. careful observation; ASYMPTOMATIC: LOW; debate; ECG risk: spontaneous vs. induced type 1; PROGRAMMED ELECTRICAL STIMULATION (PES): controversial; induced VF = ICD in some guidelines; RISK SCORES: BRUGADA SYNDROME RISK SCORE 2019 (Sieira-Brugada); ERS 2022: ICD for symptomatic; medication or no intervention for asymptomatic; GENETICS: SCN5A sequencing; probands and first-degree relatives; FAMILY HISTORY OF SCD: increases risk; BRUGADA SYNDROME DRUGS TO AVOID: sodium channel blockers (flecanide, ajmaline, propafenone, disopyramide); TCAs; cocaine; alcohol excess; hyperthermia; TREATMENT: ICD: definitive; QUINIDINE (type IA): Ito (transient outward potassium) blocker; reduces events; electrical storm; useful when ICD not feasible; CATHETER ABLATION: epicardial right ventricular outflow tract (RVOT); clinical trials; effective for VF storm; ISOPROTERENOL: acute electrical storm | `text` |  |  |  |
| Brugada, Long QT, CPVT, and Inherited Arrhythmia Syndromes | Brugada Syndrome | `lqts` | Long QT Syndrome and Drug-Induced QT Prolongation | `select` |  |  |  |
| Brugada, Long QT, CPVT, and Inherited Arrhythmia Syndromes | CPVT and Short QT Syndrome | `cpvt` | Catecholaminergic Polymorphic VT — Diagnosis and Treatment (CPVT (CATECHOLAMINERGIC POLYMORPHIC VENTRICULAR TACHYCARDIA): AUTOSOMAL DOMINANT: RYR2 (ryanodine receptor 2 type 2): 65%; AUTOSOMAL RECESSIVE: CASQ2 (calsequestrin): 2%; PATHOPHYSIOLOGY: abnormal calcium release from SR during exercise → delayed afterdepolarizations → triggered VT; CLINICAL: EXERCISE OR EMOTIONAL STRESS-TRIGGERED bidirectional VT (alternating QRS axis) or polymorphic VT → syncope or SCD; STRUCTURAL HEART: NORMAL; QTc: NORMAL; DIAGNOSIS: EXERCISE STRESS TEST: bidirectional VT at heart rate 100-120 bpm = PATHOGNOMONIC; HOLTER: ambulatory bidirectional VT; EPINEPHRINE CHALLENGE: in selected cases; GENETIC TESTING: RYR2 + CASQ2; probands + family; TREATMENT: BETA-BLOCKERS: nadolol preferred (long-acting); propranolol; MAX DOSE essential; STRICT COMPLIANCE (life-threatening if missed dose during exercise); FLECAINIDE: CLASS IC; RYR2 blocker; ADJUNCT to beta-blocker; reduces arrhythmia burden (CASQ2 trial data); COMBINATION: nadolol + flecainide = current recommended combination; ICD: ABORTED SCD; syncope on beta-blocker; IMPORTANT: ICD SHOCKS → catecholamine surge → MORE VT (storm risk); ALWAYS add beta-blocker + flecainide with ICD; SYMPATHETIC DENERVATION: left cardiac sympathetic denervation (LCSD): bilateral thoracoscopic; reduce events; EXERCISE RESTRICTION: competitive sports contraindicated; vigorous recreational: risk; FLECAINIDE MONITORING: QRS widening; proarrhythmia in structurally abnormal hearts — SAFE in structurally normal CPVT | `text` |  |  |  |
| Brugada, Long QT, CPVT, and Inherited Arrhythmia Syndromes | CPVT and Short QT Syndrome | `sqt` | Short QT Syndrome and Inherited SCD Evaluation | `select` |  |  |  |
