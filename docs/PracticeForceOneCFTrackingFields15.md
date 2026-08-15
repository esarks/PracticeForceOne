---
title: "PracticeForceOneCFTrackingFields15"
---

# CF Tracking — Field-Level Detail (part 15 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Admin**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Admin

### Letter Admin — `letter_admin_cf`

Screen: 4 page(s) · 4 section(s) · 22 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Letter Template (ECW-LT-1) | Template Definition (ECW-LT-1) | `templateName` | Template Name | `text` | Y |  |  |
| Letter Template (ECW-LT-1) | Template Definition (ECW-LT-1) | `templateType` | Template Type | `select` |  |  |  |
| Letter Template (ECW-LT-1) | Template Definition (ECW-LT-1) | `specialty` | Specialty Scope | `text` |  |  |  |
| Letter Template (ECW-LT-1) | Template Definition (ECW-LT-1) | `letterBody` | Letter Body | `textarea` |  |  |  |
| Patient Letter Execution & Log (ECW-LT-2) | Letter Execution Record (ECW-LT-2) | `letterTemplateName` | Template Used | `text` |  |  |  |
| Patient Letter Execution & Log (ECW-LT-2) | Letter Execution Record (ECW-LT-2) | `recipientName` | Recipient Name | `text` |  |  |  |
| Patient Letter Execution & Log (ECW-LT-2) | Letter Execution Record (ECW-LT-2) | `recipientAddress` | Recipient Address | `text` |  |  |  |
| Patient Letter Execution & Log (ECW-LT-2) | Letter Execution Record (ECW-LT-2) | `sentDate` | Sent Date | `date` |  |  |  |
| Patient Letter Execution & Log (ECW-LT-2) | Letter Execution Record (ECW-LT-2) | `deliveryMethod` | Delivery Method | `select` |  |  |  |
| Patient Letter Execution & Log (ECW-LT-2) | Letter Execution Record (ECW-LT-2) | `deliveryStatus` | Delivery Status | `select` |  |  |  |
| Patient Letter Execution & Log (ECW-LT-2) | Letter Execution Record (ECW-LT-2) | `dunningSeriesStep` | Dunning Series Step | `select` |  |  |  |
| Patient Letter Execution & Log (ECW-LT-2) | Letter Execution Record (ECW-LT-2) | `communicationLogNote` | Communication Log Note | `textarea` |  |  |  |
| Letter Draft → Assign → Finalize (ECW-LT-3) | Letter Workflow (ECW-LT-3) | `draftStatus` | Draft Status | `select` |  |  |  |
| Letter Draft → Assign → Finalize (ECW-LT-3) | Letter Workflow (ECW-LT-3) | `assignedTo` | Assigned To | `text` |  |  |  |
| Letter Draft → Assign → Finalize (ECW-LT-3) | Letter Workflow (ECW-LT-3) | `assignedDate` | Assigned Date | `date` |  |  |  |
| Letter Draft → Assign → Finalize (ECW-LT-3) | Letter Workflow (ECW-LT-3) | `reviewedBy` | Reviewed / Approved By | `text` |  |  |  |
| Letter Draft → Assign → Finalize (ECW-LT-3) | Letter Workflow (ECW-LT-3) | `reviewDate` | Review Date | `date` |  |  |  |
| Letter Draft → Assign → Finalize (ECW-LT-3) | Letter Workflow (ECW-LT-3) | `chartFiled` | Filed to Chart | `checkbox` |  |  |  |
| Letter Draft → Assign → Finalize (ECW-LT-3) | Letter Workflow (ECW-LT-3) | `chartFileDate` | Chart File Date | `date` |  |  |  |
| Letter Draft → Assign → Finalize (ECW-LT-3) | Letter Workflow (ECW-LT-3) | `auditNote` | Audit / Revision Note | `textarea` |  |  |  |
| Merge Field Mapping & PDF Forms (ECW-AD-16) | Merge Field Definitions (ECW-AD-16) | `mergeFieldRegistry` | Merge Field Registry | `textarea` |  |  |  |
| Merge Field Mapping & PDF Forms (ECW-AD-16) | Merge Field Definitions (ECW-AD-16) | `pdfFormMapping` | PDF Form Field Mapping | `textarea` |  |  |  |

### Letter Templates — `letter_templates_cf`

Screen: 1 page(s) · 1 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Template | Template Information | `templateName` | Name | `text` |  | templateName |  |
| Template | Template Information | `templateType` | Type | `text` |  | templateType |  |
| Template | Template Information | `subject` | Subject | `text` |  | subject |  |
| Template | Template Information | `status` | Status | `text` |  | status |  |
| Template | Template Information | `isActive` | Active | `text` |  | isActive |  |
| Template | Template Information | `version` | Version | `text` |  | version |  |
| Template | Template Information | `mergeFields` | Merge Fields | `text` |  | mergeFields |  |
| Template | Template Information | `assignedToUserId` | Assigned To | `text` |  | assignedToUserId |  |
| Template | Template Information | `finalizedAt` | Finalized At | `text` |  | finalizedAt |  |
| Template | Template Information | `bodyTemplate` | Body | `textarea` |  | bodyTemplate |  |

### Locations — `locations_cf`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PRACTICE_LOCATIONS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Location | Location | `name` | Name | `text` |  |  |  |
| Location | Location | `city` | City | `text` |  |  |  |
| Location | Location | `state` | State | `text` |  |  |  |
| Location | Location | `zipCode` | ZIP | `text` |  | zip_code |  |
| Location | Location | `phone` | Phone | `text` |  |  |  |
| Location | Location | `placeOfServiceCode` | Place of Service | `text` |  | place_of_service_code |  |
| Location | Location | `isActive` | Active | `text` |  | is_active |  |

### Mandatory Fields — `mandatory_fields_cf`

Screen: 1 page(s) · 4 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Mandatory / Required Field Settings | Scope | `practiceId` | Practice (for per-practice overrides) | `text` |  |  |  |
| Mandatory / Required Field Settings | Scope | `applyScope` | Scope | `select` |  |  |  |
| Mandatory / Required Field Settings | Patient Demographics | `reqPatientDob` | Date of Birth is required | `checkbox` |  |  |  |
| Mandatory / Required Field Settings | Patient Demographics | `reqPatientGender` | Sex / Gender is required | `checkbox` |  |  |  |
| Mandatory / Required Field Settings | Patient Demographics | `reqPatientSsn` | SSN is required | `checkbox` |  |  |  |
| Mandatory / Required Field Settings | Patient Demographics | `reqPatientPhone` | Phone Number is required | `checkbox` |  |  |  |
| Mandatory / Required Field Settings | Patient Demographics | `reqPatientAddress` | Address is required | `checkbox` |  |  |  |
| Mandatory / Required Field Settings | Patient Demographics | `reqPatientEthnicity` | Race/Ethnicity is required (Meaningful Use) | `checkbox` |  |  |  |
| Mandatory / Required Field Settings | Patient Demographics | `reqPatientLanguage` | Preferred Language is required (Meaningful Use) | `checkbox` |  |  |  |
| Mandatory / Required Field Settings | Encounter / Visit | `reqEncounterChiefComplaint` | Chief Complaint is required | `checkbox` |  |  |  |
| Mandatory / Required Field Settings | Encounter / Visit | `reqEncounterProvider` | Rendering Provider is required | `checkbox` |  |  |  |
| Mandatory / Required Field Settings | Encounter / Visit | `reqEncounterDiagnosis` | At least one Diagnosis is required before sign-off | `checkbox` |  |  |  |
| Mandatory / Required Field Settings | Encounter / Visit | `reqEncounterVitals` | Vitals are required before sign-off | `checkbox` |  |  |  |
| Mandatory / Required Field Settings | Encounter / Visit | `reqEncounterCpt` | At least one CPT code is required for billing | `checkbox` |  |  |  |
| Mandatory / Required Field Settings | Insurance | `reqPrimaryInsurance` | Primary insurance required for scheduling | `checkbox` |  |  |  |
| Mandatory / Required Field Settings | Insurance | `reqInsuranceCopay` | Copay amount required at check-in | `checkbox` |  |  |  |
| Mandatory / Required Field Settings | Insurance | `reqInsuranceEligibility` | Insurance eligibility check required before check-in | `checkbox` |  |  |  |

### Messaging Campaigns — `MESSAGING_CAMPAIGNS`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Messaging Campaign | Campaign (ECW-EN-3; messaging_campaigns + campaign_messages tables; template-based outbound voice/SMS/email/letter; mock transport; POST /{id}/launch queues messages; GET /{id}/messages shows per-recipient delivery status; practice-scoped) | `mcId` | Campaign ID (read-only UUID) | `text` |  |  |  |
| Messaging Campaign | Campaign (ECW-EN-3; messaging_campaigns + campaign_messages tables; template-based outbound voice/SMS/email/letter; mock transport; POST /{id}/launch queues messages; GET /{id}/messages shows per-recipient delivery status; practice-scoped) | `mcName` | Campaign Name (required; max 200 chars) | `text` | Y |  |  |
| Messaging Campaign | Campaign (ECW-EN-3; messaging_campaigns + campaign_messages tables; template-based outbound voice/SMS/email/letter; mock transport; POST /{id}/launch queues messages; GET /{id}/messages shows per-recipient delivery status; practice-scoped) | `mcCampaignType` | Campaign Type (default custom; e.g. recall/appointment-reminder/wellness) | `text` |  |  |  |
| Messaging Campaign | Campaign (ECW-EN-3; messaging_campaigns + campaign_messages tables; template-based outbound voice/SMS/email/letter; mock transport; POST /{id}/launch queues messages; GET /{id}/messages shows per-recipient delivery status; practice-scoped) | `mcChannel` | Channel (sms/voice/email/letter; default sms) | `text` |  |  |  |
| Messaging Campaign | Campaign (ECW-EN-3; messaging_campaigns + campaign_messages tables; template-based outbound voice/SMS/email/letter; mock transport; POST /{id}/launch queues messages; GET /{id}/messages shows per-recipient delivery status; practice-scoped) | `mcStatus` | Status (draft/scheduled/launched/completed; read-only after launch) | `text` |  |  |  |
| Messaging Campaign | Campaign (ECW-EN-3; messaging_campaigns + campaign_messages tables; template-based outbound voice/SMS/email/letter; mock transport; POST /{id}/launch queues messages; GET /{id}/messages shows per-recipient delivery status; practice-scoped) | `mcMessageTemplate` | Message Template (required; supports {firstName}/{lastName}/{date} tokens) | `textarea` | Y |  |  |
| Messaging Campaign | Campaign (ECW-EN-3; messaging_campaigns + campaign_messages tables; template-based outbound voice/SMS/email/letter; mock transport; POST /{id}/launch queues messages; GET /{id}/messages shows per-recipient delivery status; practice-scoped) | `mcTargetCohort` | Target Cohort (JSON; criteria for patient selection; optional) | `textarea` |  |  |  |
| Messaging Campaign | Campaign (ECW-EN-3; messaging_campaigns + campaign_messages tables; template-based outbound voice/SMS/email/letter; mock transport; POST /{id}/launch queues messages; GET /{id}/messages shows per-recipient delivery status; practice-scoped) | `mcScheduledAt` | Scheduled At (ISO 8601; optional; for future launch) | `text` |  |  |  |

### Module Settings — `module_settings_cf`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB MISSING · tables `APPOINTMENTS`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `ELIGIBILITY_CHECKS`, `ENCOUNTERS`, `PAYERS_MASTER`, `PAYMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Module Activation (ECW-AD-14) | Module Configuration | `moduleName` | Module Name | `text` |  |  |  |
| Module Activation (ECW-AD-14) | Module Configuration | `moduleKey` | Module Key | `text` |  |  |  |
| Module Activation (ECW-AD-14) | Module Configuration | `isActive` | Module Active | `checkbox` |  |  |  |
| Module Activation (ECW-AD-14) | Module Configuration | `tier` | Subscription Tier | `select` |  |  |  |
| Module Activation (ECW-AD-14) | Module Configuration | `activatedDate` | Activated Date | `date` |  |  |  |
| Module Activation (ECW-AD-14) | Module Configuration | `licenseCount` | Licensed User Count | `number` |  |  |  |
| Module Activation (ECW-AD-14) | Module Configuration | `settingsJson` | Per-Module Settings (JSON) | `textarea` |  |  |  |
| Module Activation (ECW-AD-14) | Module Configuration | `adminNote` | Admin Note | `textarea` |  |  |  |

### Operations Monitor — `operations_monitoring_cf`

Screen: 4 page(s) · 5 section(s) · 32 field(s) · UI LIVE · DB PARTIAL · tables `APPOINTMENTS`, `AUDIT_LOG`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `ELIGIBILITY_CHECKS`, `ENCOUNTERS`, `PAYERS_MASTER`, `PAYMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Scheduled Jobs Status (ECW-OPS-1) | Background Jobs Monitor | `jobName` | Job Name | `text` |  |  |  |
| Scheduled Jobs Status (ECW-OPS-1) | Background Jobs Monitor | `lastRunAt` | Last Run | `text` |  |  |  |
| Scheduled Jobs Status (ECW-OPS-1) | Background Jobs Monitor | `lastRunDuration` | Duration (seconds) | `number` |  |  |  |
| Scheduled Jobs Status (ECW-OPS-1) | Background Jobs Monitor | `lastRunStatus` | Last Run Status | `select` |  |  |  |
| Scheduled Jobs Status (ECW-OPS-1) | Background Jobs Monitor | `nextScheduled` | Next Scheduled | `text` |  |  |  |
| Scheduled Jobs Status (ECW-OPS-1) | Background Jobs Monitor | `jobNotes` | Notes | `textarea` |  |  |  |
| Provider Productivity (ECW-OPS-2) | Provider Utilization & No-Show Analytics | `reportPeriod` | Report Period | `select` |  |  |  |
| Provider Productivity (ECW-OPS-2) | Provider Utilization & No-Show Analytics | `providerFilter` | Provider Filter | `text` |  |  |  |
| Provider Productivity (ECW-OPS-2) | Provider Utilization & No-Show Analytics | `scheduledAppointments` | Scheduled Appointments | `number` |  |  |  |
| Provider Productivity (ECW-OPS-2) | Provider Utilization & No-Show Analytics | `completedAppointments` | Completed | `number` |  |  |  |
| Provider Productivity (ECW-OPS-2) | Provider Utilization & No-Show Analytics | `noShowCount` | No-Shows | `number` |  |  |  |
| Provider Productivity (ECW-OPS-2) | Provider Utilization & No-Show Analytics | `cancellationCount` | Cancellations | `number` |  |  |  |
| Provider Productivity (ECW-OPS-2) | Provider Utilization & No-Show Analytics | `utilizationRate` | Utilization Rate (%) | `number` |  |  |  |
| Provider Productivity (ECW-OPS-2) | Provider Utilization & No-Show Analytics | `averageSlotFill` | Avg Slot Fill Time (min) | `number` |  |  |  |
| Data Integrity Report (ECW-OPS-3) | Data Integrity & Cleanup Advisory | `orphanedClaims` | Orphaned Claims (no encounter) | `number` |  |  |  |
| Data Integrity Report (ECW-OPS-3) | Data Integrity & Cleanup Advisory | `missingDx` | Claims Missing Diagnosis | `number` |  |  |  |
| Data Integrity Report (ECW-OPS-3) | Data Integrity & Cleanup Advisory | `unprocessedRemittances` | Unprocessed ERA/Remittances | `number` |  |  |  |
| Data Integrity Report (ECW-OPS-3) | Data Integrity & Cleanup Advisory | `stalePriorAuths` | Stale Prior Auths (expired) | `number` |  |  |  |
| Data Integrity Report (ECW-OPS-3) | Data Integrity & Cleanup Advisory | `duplicatePatients` | Potential Duplicate Patients | `number` |  |  |  |
| Data Integrity Report (ECW-OPS-3) | Data Integrity & Cleanup Advisory | `incompleteEncounters` | Incomplete Encounters (>7 days) | `number` |  |  |  |
| Data Integrity Report (ECW-OPS-3) | Data Integrity & Cleanup Advisory | `integrityNote` | Advisory Notes | `textarea` |  |  |  |
| Field Locks & Triage Templates | Field-Level Edit Locks (ECW-AD-20) | `lockEntityType` | Entity Type | `select` |  |  |  |
| Field Locks & Triage Templates | Field-Level Edit Locks (ECW-AD-20) | `lockedFieldName` | Field Name to Lock | `text` |  |  |  |
| Field Locks & Triage Templates | Field-Level Edit Locks (ECW-AD-20) | `lockAfterStatus` | Lock After Status | `select` |  |  |  |
| Field Locks & Triage Templates | Field-Level Edit Locks (ECW-AD-20) | `unlockRequiresRole` | Unlock Requires Role | `select` |  |  |  |
| Field Locks & Triage Templates | Field-Level Edit Locks (ECW-AD-20) | `labelTemplateName` | Label Template (ECW-AD-20) | `text` |  |  |  |
| Field Locks & Triage Templates | Field-Level Edit Locks (ECW-AD-20) | `labelTemplateContent` | Label Template Content | `textarea` |  |  |  |
| Field Locks & Triage Templates | Triage Templates (ECW-OPS-7) | `triageTemplateName` | Triage Template Name | `text` | Y |  |  |
| Field Locks & Triage Templates | Triage Templates (ECW-OPS-7) | `triageContext` | Triage Context | `select` |  |  |  |
| Field Locks & Triage Templates | Triage Templates (ECW-OPS-7) | `triageOrdersLinked` | Linked Order Types | `text` |  |  |  |
| Field Locks & Triage Templates | Triage Templates (ECW-OPS-7) | `triageProtocol` | Triage Protocol / Script | `textarea` |  |  |  |
| Field Locks & Triage Templates | Triage Templates (ECW-OPS-7) | `triageEscalationRule` | Escalation Rule | `select` |  |  |  |

### Org Settings — `organization_settings_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `ORGANIZATIONS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Organization | Organization Identity | `name` | Organization Name | `text` | Y |  |  |
| Organization | Organization Identity | `contact_email` | Contact Email | `email` |  |  |  |
| Organization | Organization Identity | `logo_url` | Logo URL | `text` |  |  |  |
| Organization | Organization Identity | `primary_color` | Primary Color (hex) | `text` |  |  |  |
| Organization | Organization Identity | `plan_tier` | Plan Tier | `select` |  |  |  |
| Organization | Feature Configuration | `mfa_required` | MFA Required | `checkbox` |  |  |  |
| Organization | Feature Configuration | `session_timeout_minutes` | Session Timeout (minutes) | `number` |  |  |  |
| Organization | Feature Configuration | `hipaa_audit_enabled` | HIPAA Audit Enabled | `checkbox` |  |  |  |
| Organization | Feature Configuration | `patient_portal_enabled` | Patient Portal Enabled | `checkbox` |  |  |  |
| Organization | Feature Configuration | `feature_flags` | Feature Flags (JSON) | `textarea` |  |  |  |

### Organization — `organizations`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `ORGANIZATIONS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Organization | Organization Details | `name` | Name | `text` | Y |  |  |
| Organization | Organization Details | `address` | Address | `textarea` |  |  |  |
| Organization | Organization Details | `phone` | Phone | `text` |  |  |  |
| Organization | Organization Details | `email` | Email | `text` |  |  |  |
| Organization | Organization Details | `npi` | NPI | `text` |  |  |  |
| Organization | Organization Details | `taxId` | Tax ID | `text` |  |  |  |
| Organization | Organization Details | `settings` | Settings (JSON) | `textarea` |  |  |  |

### Organization — `organizations_cf`

Screen: 1 page(s) · 4 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `ORGANIZATIONS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Organization | Identity | `name` | Organization Name | `text` | Y |  |  |
| Organization | Identity | `type` | Type | `select` |  |  |  |
| Organization | Identity | `npi` | NPI | `text` |  |  |  |
| Organization | Identity | `tax_id` | Tax ID (EIN) | `text` |  |  |  |
| Organization | Address | `address_line1` | Address Line 1 | `text` |  |  |  |
| Organization | Address | `address_line2` | Address Line 2 | `text` |  |  |  |
| Organization | Address | `city` | City | `text` |  |  |  |
| Organization | Address | `state` | State | `text` |  |  |  |
| Organization | Address | `zip_code` | ZIP Code | `text` |  |  |  |
| Organization | Contact | `phone` | Phone | `text` |  |  |  |
| Organization | Contact | `email` | Email | `email` |  |  |  |
| Organization | Contact | `website` | Website | `text` |  |  |  |
| Organization | Subscription (Read-Only) | `subscription_tier` | Tier | `text` |  |  |  |
| Organization | Subscription (Read-Only) | `subscription_status` | Status | `text` |  |  |  |

### Organization — `ORGANIZATIONS`

Screen: 1 page(s) · 1 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `ORGANIZATIONS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgId` | Organization ID (read-only UUID) | `text` |  |  |  |
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgName` | Organization Name (required) | `text` | Y |  |  |
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgType` | Type (physician_practice/hospital/clinic/etc.) | `text` |  |  |  |
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgTaxId` | Tax ID (EIN; 9 digits) | `text` |  |  |  |
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgNpi` | NPI (10 digits) | `text` |  |  |  |
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgAddressLine1` | Address Line 1 | `text` |  |  |  |
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgAddressLine2` | Address Line 2 | `text` |  |  |  |
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgCity` | City | `text` |  |  |  |
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgState` | State (2-letter) | `text` |  |  |  |
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgZipCode` | ZIP Code | `text` |  |  |  |
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgPhone` | Phone | `text` |  |  |  |
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgEmail` | Email | `text` |  |  |  |
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgWebsite` | Website URL | `text` |  |  |  |
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgSubscriptionTier` | Subscription Tier (read-only) | `text` |  |  |  |
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgSubscriptionStatus` | Subscription Status (read-only) | `text` |  |  |  |
| Organization Profile | Organization Settings (ORGANIZATIONSCrud; ORG_SETTINGS RBAC for writes) | `orgIsActive` | Is Active (read-only) | `checkbox` |  |  |  |

### Patient Access Groups — `PATIENT_ACCESS_GROUPS`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Access Group | Patient Cohort Access Group (Admin Only for Mutations) | `pagId` | Group ID (read-only) | `text` |  |  |  |
| Access Group | Patient Cohort Access Group (Admin Only for Mutations) | `pagName` | Group Name (required; e.g. VIP, Employees, Behavioral Health) | `text` | Y |  |  |
| Access Group | Patient Cohort Access Group (Admin Only for Mutations) | `pagDescription` | Description | `textarea` |  |  |  |
| Access Group | Patient Cohort Access Group (Admin Only for Mutations) | `pagPracticeId` | Practice ID (optional scope) | `text` |  |  |  |
| Access Group | Patient Cohort Access Group (Admin Only for Mutations) | `pagIsRestricted` | Restricted (only granted staff may view member charts) | `checkbox` |  |  |  |
| Access Group | Patient Cohort Access Group (Admin Only for Mutations) | `pagMemberCount` | Member Count (read-only) | `text` |  |  |  |
| Access Group | Patient Cohort Access Group (Admin Only for Mutations) | `pagGrantCount` | Granted Staff Count (read-only) | `text` |  |  |  |

### Patient Access Groups — `patient_access_groups_cf`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Access Group | Group Information | `name` | Name | `text` |  | name |  |
| Access Group | Group Information | `description` | Description | `textarea` |  | description |  |
| Access Group | Group Information | `restricted` | Restricted | `text` |  | restricted |  |
| Access Group | Group Information | `memberCount` | Member Count | `text` |  | memberCount |  |
| Access Group | Group Information | `grantCount` | Grant Count | `text` |  | grantCount |  |
| Access Group | Group Information | `createdAt` | Created | `text` |  | createdAt |  |

### Patient Complaint — `patient_complaint_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Complaint / Grievance Report | Complaint Intake | `patientId` | Patient | `typeahead` | Y |  |  |
| Patient Complaint / Grievance Report | Complaint Intake | `dateReceived` | Date Received | `date` | Y |  |  |
| Patient Complaint / Grievance Report | Complaint Intake | `receivedBy` | Received By | `typeahead` | Y |  |  |
| Patient Complaint / Grievance Report | Complaint Intake | `complaintMethod` | How Received | `select` |  |  |  |
| Patient Complaint / Grievance Report | Complaint Intake | `complainantRelationship` | Complainant | `select` |  |  |  |
| Patient Complaint / Grievance Report | Complaint Intake | `complaintCategory` | Complaint Category | `select` | Y |  |  |
| Patient Complaint / Grievance Report | Complaint Intake | `complaintDescription` | Complaint Description | `textarea` | Y |  |  |
| Patient Complaint / Grievance Report | Investigation & Response | `investigatedBy` | Investigated By | `typeahead` |  |  |  |
| Patient Complaint / Grievance Report | Investigation & Response | `investigationFindings` | Investigation Findings | `textarea` |  |  |  |
| Patient Complaint / Grievance Report | Investigation & Response | `staffInvolved` | Staff / Provider Involved | `textarea` |  |  |  |
| Patient Complaint / Grievance Report | Investigation & Response | `rootCause` | Root Cause | `select` |  |  |  |
| Patient Complaint / Grievance Report | Resolution | `actionTaken` | Corrective Action Taken | `textarea` | Y |  |  |
| Patient Complaint / Grievance Report | Resolution | `patientNotified` | Patient notified of resolution | `checkbox` |  |  |  |
| Patient Complaint / Grievance Report | Resolution | `notificationDate` | Patient Notification Date | `date` |  |  |  |
| Patient Complaint / Grievance Report | Resolution | `status` | Complaint Status | `select` | Y |  |  |
| Patient Complaint / Grievance Report | Resolution | `qiReported` | Reported to Quality Improvement committee | `checkbox` |  |  |  |

### Patient Letters — `patient_letters_cf`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Letter | Letter | `patient_id` | Patient | `typeahead` |  |  |  |
| Patient Letter | Letter | `template_id` | Template | `typeahead` |  |  |  |
| Patient Letter | Letter | `letter_date` | Letter Date | `date` |  |  |  |
| Patient Letter | Letter | `status` | Status | `select` |  |  |  |
| Patient Letter | Letter | `notes` | Notes | `textarea` |  |  |  |

### Patient Survey — `patient_satisfaction_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Experience Survey | Visit Information | `patientId` | Patient | `typeahead` | Y |  |  |
| Patient Experience Survey | Visit Information | `visitDate` | Visit Date | `date` | Y |  |  |
| Patient Experience Survey | Visit Information | `provider` | Provider Seen | `typeahead` |  |  |  |
| Patient Experience Survey | Visit Information | `surveyDate` | Survey Completed Date | `date` | Y |  |  |
| Patient Experience Survey | Access & Scheduling | `easeOfScheduling` | Ease of Scheduling Appointment | `select` | Y |  |  |
| Patient Experience Survey | Access & Scheduling | `waitTimeOffice` | Wait Time in Office | `select` | Y |  |  |
| Patient Experience Survey | Access & Scheduling | `waitTimeAppt` | Time to Get an Appointment When Needed | `select` |  |  |  |
| Patient Experience Survey | Quality of Care | `providerListened` | Provider Listened Carefully to You | `select` | Y |  |  |
| Patient Experience Survey | Quality of Care | `providerExplained` | Provider Explained Things Clearly | `select` | Y |  |  |
| Patient Experience Survey | Quality of Care | `providerRespect` | Provider Treated You with Respect | `select` | Y |  |  |
| Patient Experience Survey | Quality of Care | `staffCourtesy` | Staff Courtesy and Helpfulness | `select` | Y |  |  |
| Patient Experience Survey | Quality of Care | `overallRating` | Overall Rating of This Visit (0-10 scale) | `select` | Y |  |  |
| Patient Experience Survey | Loyalty & Feedback | `wouldRecommend` | Would You Recommend This Practice to Family / Friends? | `select` | Y |  |  |
| Patient Experience Survey | Loyalty & Feedback | `bestExperience` | What Did We Do Well? | `textarea` |  |  |  |
| Patient Experience Survey | Loyalty & Feedback | `improvements` | What Can We Improve? | `textarea` |  |  |  |
| Patient Experience Survey | Loyalty & Feedback | `followUp` | Patient requests a follow-up call about concerns | `checkbox` |  |  |  |

### Payers — `payers_cf`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `PAYERS_MASTER`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Payer | Payer | `name` | Name | `text` |  |  |  |
| Payer | Payer | `payer_type` | Type | `text` |  |  |  |
| Payer | Payer | `payer_id` | Payer ID | `text` |  |  |  |
| Payer | Payer | `edi_payer_id` | EDI Payer ID | `text` |  |  |  |
| Payer | Payer | `edi_receiver_id` | EDI Receiver ID | `text` |  |  |  |
| Payer | Payer | `accepts_electronic` | Accepts Electronic | `text` |  |  |  |
| Payer | Payer | `phone` | Phone | `text` |  |  |  |
| Payer | Payer | `website` | Website | `text` |  |  |  |
| Payer | Payer | `is_active` | Active | `text` |  |  |  |

### Payers Master — `payers_master_cf`

Screen: 2 page(s) · 3 section(s) · 23 field(s) · UI LIVE · DB BUILT · tables `PAYERS_MASTER`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Payer Detail | Payer | `pymId` | ID | `text` |  |  |  |
| Payer Detail | Payer | `pymPayerId` | Payer ID | `text` | Y |  |  |
| Payer Detail | Payer | `pymName` | Payer Name | `text` | Y |  |  |
| Payer Detail | Payer | `pymPayerType` | Payer Type | `select` |  |  |  |
| Payer Detail | Payer | `pymPhone` | Phone | `text` |  |  |  |
| Payer Detail | Payer | `pymWebsite` | Website | `text` |  |  |  |
| Payer Detail | Payer | `pymClaimsAddress` | Claims Address | `textarea` |  |  |  |
| Payer Detail | EDI / Clearinghouse | `pymEdiPayerId` | EDI Payer ID | `text` |  |  |  |
| Payer Detail | EDI / Clearinghouse | `pymEdiReceiverId` | EDI Receiver ID | `text` |  |  |  |
| Payer Detail | EDI / Clearinghouse | `pymEdiQualifier` | EDI Qualifier | `text` |  |  |  |
| Payer Detail | EDI / Clearinghouse | `pymAvaility` | Availity ID | `text` |  |  |  |
| Payer Detail | EDI / Clearinghouse | `pymChangeHc` | Change Healthcare ID | `text` |  |  |  |
| Payer Detail | EDI / Clearinghouse | `pymAcceptsElectronic` | Accepts Electronic Claims | `checkbox` |  |  |  |
| Payer Detail | EDI / Clearinghouse | `pymIsActive` | Active | `checkbox` |  |  |  |
| Add Payer | New Master Payer | `pymCreatePayerId` | Payer ID (required) | `text` | Y |  |  |
| Add Payer | New Master Payer | `pymCreateName` | Payer Name (required) | `text` | Y |  |  |
| Add Payer | New Master Payer | `pymCreatePayerType` | Payer Type | `select` |  |  |  |
| Add Payer | New Master Payer | `pymCreateEdiPayerId` | EDI Payer ID | `text` |  |  |  |
| Add Payer | New Master Payer | `pymCreateEdiReceiverId` | EDI Receiver ID | `text` |  |  |  |
| Add Payer | New Master Payer | `pymCreatePhone` | Phone | `text` |  |  |  |
| Add Payer | New Master Payer | `pymCreateWebsite` | Website | `text` |  |  |  |
| Add Payer | New Master Payer | `pymCreateAvaility` | Availity ID | `text` |  |  |  |
| Add Payer | New Master Payer | `pymCreateChangeHc` | Change Healthcare ID | `text` |  |  |  |

### Payers Master — `PAYERS_MASTER`

Screen: 1 page(s) · 1 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `PAYERS_MASTER`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Payer Master Record | Payer Master (EDI clearinghouse payer configuration; PAYERS_MASTERCrud) | `pmId` | Record ID (UUID; read-only) | `text` |  |  |  |
| Payer Master Record | Payer Master (EDI clearinghouse payer configuration; PAYERS_MASTERCrud) | `pmPayerId` | Payer ID (required; clearinghouse payer code) | `text` | Y |  |  |
| Payer Master Record | Payer Master (EDI clearinghouse payer configuration; PAYERS_MASTERCrud) | `pmName` | Payer Name (required) | `text` | Y |  |  |
| Payer Master Record | Payer Master (EDI clearinghouse payer configuration; PAYERS_MASTERCrud) | `pmPayerType` | Payer Type (commercial/medicare/medicaid/tricare/workers_comp) | `text` |  |  |  |
| Payer Master Record | Payer Master (EDI clearinghouse payer configuration; PAYERS_MASTERCrud) | `pmEdiPayerId` | EDI Payer ID | `text` |  |  |  |
| Payer Master Record | Payer Master (EDI clearinghouse payer configuration; PAYERS_MASTERCrud) | `pmEdiReceiverId` | EDI Receiver ID | `text` |  |  |  |
| Payer Master Record | Payer Master (EDI clearinghouse payer configuration; PAYERS_MASTERCrud) | `pmAvailityId` | Availity ID | `text` |  |  |  |
| Payer Master Record | Payer Master (EDI clearinghouse payer configuration; PAYERS_MASTERCrud) | `pmChangeHcId` | Change Healthcare ID | `text` |  |  |  |
| Payer Master Record | Payer Master (EDI clearinghouse payer configuration; PAYERS_MASTERCrud) | `pmPhone` | Phone | `text` |  |  |  |
| Payer Master Record | Payer Master (EDI clearinghouse payer configuration; PAYERS_MASTERCrud) | `pmWebsite` | Website | `text` |  |  |  |
| Payer Master Record | Payer Master (EDI clearinghouse payer configuration; PAYERS_MASTERCrud) | `pmClaimsAddress` | Claims Address | `textarea` |  |  |  |
| Payer Master Record | Payer Master (EDI clearinghouse payer configuration; PAYERS_MASTERCrud) | `pmAcceptsElectronic` | Accepts Electronic (true/false; default true) | `checkbox` |  |  |  |
| Payer Master Record | Payer Master (EDI clearinghouse payer configuration; PAYERS_MASTERCrud) | `pmIsActive` | Is Active (true/false; default true) | `checkbox` |  |  |  |

### Pharmacies — `pharmacies_cf`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `ERX_AUDIT_EVENTS`, `ERX_MESSAGES`, `ERX_PHARMACIES`, `ERX_PRESCRIPTIONS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_MEDICATIONS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pharmacy | Pharmacy | `storeName` | Name | `text` |  |  |  |
| Pharmacy | Pharmacy | `ncpdpId` | NCPDP ID | `text` |  |  |  |
| Pharmacy | Pharmacy | `pharmacyType` | Type | `text` |  |  |  |
| Pharmacy | Pharmacy | `addressLine1` | Address | `text` |  |  |  |
| Pharmacy | Pharmacy | `city` | City | `text` |  |  |  |
| Pharmacy | Pharmacy | `state` | State | `text` |  |  |  |
| Pharmacy | Pharmacy | `postalCode` | ZIP | `text` |  |  |  |
| Pharmacy | Pharmacy | `phone` | Phone | `text` |  |  |  |
| Pharmacy | Pharmacy | `isActive` | Active | `text` |  |  |  |

### Population Health — `population_health_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Population Health & Disease Registry Management | Disease Registry Filter | `registryType` | Registry / Disease Focus | `select` | Y |  |  |
| Population Health & Disease Registry Management | Disease Registry Filter | `provider` | Provider Panel | `typeahead` |  |  |  |
| Population Health & Disease Registry Management | Disease Registry Filter | `lastVisitFilter` | Last Visit Filter | `select` |  |  |  |
| Population Health & Disease Registry Management | Disease Registry Filter | `gapFilter` | Quality Gap Filter | `select` |  |  |  |
| Population Health & Disease Registry Management | Outreach Campaign | `outreachGoal` | Outreach Goal / Description | `textarea` | Y |  |  |
| Population Health & Disease Registry Management | Outreach Campaign | `outreachMethod` | Outreach Method | `select` |  |  |  |
| Population Health & Disease Registry Management | Outreach Campaign | `targetPatientCount` | Target Patient Count | `number` |  |  |  |
| Population Health & Disease Registry Management | Outreach Campaign | `startDate` | Outreach Start Date | `date` |  |  |  |
| Population Health & Disease Registry Management | Outreach Campaign | `endDate` | Outreach End Date | `date` |  |  |  |
| Population Health & Disease Registry Management | Outreach Results Tracking | `patientsContacted` | Patients Successfully Contacted | `number` |  |  |  |
| Population Health & Disease Registry Management | Outreach Results Tracking | `appointmentsScheduled` | Appointments Scheduled | `number` |  |  |  |
| Population Health & Disease Registry Management | Outreach Results Tracking | `gapsClosed` | Quality Gaps Closed | `number` |  |  |  |
| Population Health & Disease Registry Management | Outreach Results Tracking | `declinedCount` | Patients Declined Outreach | `number` |  |  |  |
| Population Health & Disease Registry Management | Outreach Results Tracking | `campaignNotes` | Campaign Notes / Results | `textarea` |  |  |  |

### Portal Setup — `patient_portal_setup_cf`

Screen: 1 page(s) · 4 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Portal Enrollment | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Patient Portal Enrollment | Patient | `enrollmentDate` | Enrollment Date | `date` | Y |  |  |
| Patient Portal Enrollment | Patient | `enrolledBy` | Enrolled By | `typeahead` | Y |  |  |
| Patient Portal Enrollment | Portal Access | `portalEmail` | Portal Email Address | `text` | Y |  |  |
| Patient Portal Enrollment | Portal Access | `mobilePhone` | Mobile Phone (for 2FA / notifications) | `text` |  |  |  |
| Patient Portal Enrollment | Portal Access | `registrationMethod` | Registration Method | `select` |  |  |  |
| Patient Portal Enrollment | Portal Access | `activationStatus` | Activation Status | `select` | Y |  |  |
| Patient Portal Enrollment | Portal Permissions | `viewLabResults` | Can view lab results (immediate release) | `checkbox` |  |  |  |
| Patient Portal Enrollment | Portal Permissions | `viewMedList` | Can view medication list | `checkbox` |  |  |  |
| Patient Portal Enrollment | Portal Permissions | `viewNotes` | Can view visit notes (OpenNotes) | `checkbox` |  |  |  |
| Patient Portal Enrollment | Portal Permissions | `requestRefills` | Can request prescription refills | `checkbox` |  |  |  |
| Patient Portal Enrollment | Portal Permissions | `sendMessages` | Can send secure messages to care team | `checkbox` |  |  |  |
| Patient Portal Enrollment | Portal Permissions | `requestAppts` | Can request appointments online | `checkbox` |  |  |  |
| Patient Portal Enrollment | Portal Permissions | `payBills` | Can pay bills / view statements | `checkbox` |  |  |  |
| Patient Portal Enrollment | Portal Permissions | `designatedRepresentative` | Authorized Representative (if applicable) | `text` |  |  |  |
| Patient Portal Enrollment | Patient Training | `trainingProvided` | Portal tutorial / demonstration provided | `checkbox` |  |  |  |
| Patient Portal Enrollment | Patient Training | `handoutGiven` | Portal quick-start guide / handout given | `checkbox` |  |  |  |
| Patient Portal Enrollment | Patient Training | `techBarrierAssessed` | Technology Literacy Assessment | `select` |  |  |  |

### Portal Users — `portalUsers`

Screen: 1 page(s) · 10 section(s) · 69 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DOCUMENTS`, `DYNAMIC_FORMS`, `PATIENTS`, `PAYERS_MASTER`, `PORTAL_AUDIT_EVENTS`, `PORTAL_CHECK_IN_QUESTIONNAIRES`, `PORTAL_EMAIL_CONFIRMATIONS`, `PORTAL_PATIENT_ESTABLISHMENT_REQUESTS`, `PORTAL_PATIENT_RELATIONSHIPS`, `PORTAL_SESSIONS`, `PORTAL_USERS`, `PRACTICES`, `PROVIDERS`, `USER_MFA`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Portal Account & Registration Review | Portal Account | `portalName` | Portal User | `text` |  | patientName |  |
| Portal Account & Registration Review | Portal Account | `email` | Email | `text` |  |  |  |
| Portal Account & Registration Review | Portal Account | `phone` | Phone | `text` |  |  |  |
| Portal Account & Registration Review | Portal Account | `status` | Status | `text` |  |  |  |
| Portal Account & Registration Review | Portal Account | `practiceName` | Practice | `text` |  |  |  |
| Portal Account & Registration Review | Portal Account | `patientLifecycleStatus` | Lifecycle | `text` |  |  |  |
| Portal Account & Registration Review | Portal Account | `activeChartPatientName` | Linked Patient Chart | `text` |  |  |  |
| Portal Account & Registration Review | Portal Account | `reqReviewStatus` | Registration Review Status | `text` |  | patientForms.0.reviewStatus |  |
| Portal Account & Registration Review | Portal Account | `formId` |  | `hidden` |  | patientForms.0.id |  |
| Portal Account & Registration Review | Patient | `reqName` | Legal Name | `text` |  | patientForms.0.requestedLegalName |  |
| Portal Account & Registration Review | Patient | `reqDob` | Date of Birth | `text` |  | patientForms.0.requestedDob |  |
| Portal Account & Registration Review | Patient | `reqEmail` | Email | `text` |  | patientForms.0.requestedEmail |  |
| Portal Account & Registration Review | Patient | `reqPhone` | Phone | `text` |  | patientForms.0.requestedPhone |  |
| Portal Account & Registration Review | Patient | `reqClinic` | Requested Clinic | `text` |  | patientForms.0.requestedClinicName |  |
| Portal Account & Registration Review | Appointment Request | `apptReason` | Reason for Visit | `text` |  | patientForms.0.formData.appointment.reason |  |
| Portal Account & Registration Review | Appointment Request | `apptTime` | Preferred Time | `text` |  | patientForms.0.formData.appointment.preferredTime |  |
| Portal Account & Registration Review | Appointment Request | `apptProvider` | Preferred Provider | `lookup` |  | patientForms.0.formData.appointment.preferredProviderId |  |
| Portal Account & Registration Review | Appointment Request | `apptNeeds` | Needs Appointment | `text` |  | patientForms.0.formData.appointment.needsAppointment |  |
| Portal Account & Registration Review | Appointment Request | `apptWaitlist` | Waitlist Requested | `text` |  | patientForms.0.formData.appointment.waitlistRequested |  |
| Portal Account & Registration Review | Address & Demographics | `addr1` | Address | `text` |  | patientForms.0.requestedAddress.addressLine1 |  |
| Portal Account & Registration Review | Address & Demographics | `addr2` | Address Line 2 | `text` |  | patientForms.0.requestedAddress.addressLine2 |  |
| Portal Account & Registration Review | Address & Demographics | `city` | City | `text` |  | patientForms.0.requestedAddress.city |  |
| Portal Account & Registration Review | Address & Demographics | `state` | State | `text` |  | patientForms.0.requestedAddress.state |  |
| Portal Account & Registration Review | Address & Demographics | `zip` | ZIP | `text` |  | patientForms.0.requestedAddress.zipCode |  |
| Portal Account & Registration Review | Address & Demographics | `gender` | Gender | `text` |  | patientForms.0.requestedAddress.gender |  |
| Portal Account & Registration Review | Address & Demographics | `language` | Preferred Language | `text` |  | patientForms.0.formData.demographics.preferredLanguage |  |
| Portal Account & Registration Review | Address & Demographics | `marital` | Marital Status | `text` |  | patientForms.0.formData.demographics.maritalStatus |  |
| Portal Account & Registration Review | Address & Demographics | `race` | Race | `text` |  | patientForms.0.formData.demographics.race |  |
| Portal Account & Registration Review | Address & Demographics | `ethnicity` | Ethnicity | `text` |  | patientForms.0.formData.demographics.ethnicity |  |
| Portal Account & Registration Review | Address & Demographics | `veteran` | Veteran Status | `text` |  | patientForms.0.formData.demographics.veteranStatus |  |
| Portal Account & Registration Review | Address & Demographics | `employer` | Employer | `text` |  | patientForms.0.formData.demographics.employer |  |
| Portal Account & Registration Review | Primary Insurance | `insPayer` | Payer | `text` |  | patientForms.0.requestedInsurance.payer |  |
| Portal Account & Registration Review | Primary Insurance | `insPlanName` | Plan Name | `text` |  | patientForms.0.requestedInsurance.planName |  |
| Portal Account & Registration Review | Primary Insurance | `insPlanType` | Plan Type | `text` |  | patientForms.0.requestedInsurance.planType |  |
| Portal Account & Registration Review | Primary Insurance | `insMemberId` | Member ID | `text` |  | patientForms.0.requestedInsurance.memberId |  |
| Portal Account & Registration Review | Primary Insurance | `insGroup` | Group # | `text` |  | patientForms.0.requestedInsurance.groupNumber |  |
| Portal Account & Registration Review | Primary Insurance | `insSubscriber` | Subscriber | `text` |  | patientForms.0.requestedInsurance.subscriberName |  |
| Portal Account & Registration Review | Primary Insurance | `insSubDob` | Subscriber DOB | `text` |  | patientForms.0.requestedInsurance.subscriberDateOfBirth |  |
| Portal Account & Registration Review | Primary Insurance | `insRel` | Relationship to Subscriber | `text` |  | patientForms.0.requestedInsurance.relationshipToSubscriber |  |
| Portal Account & Registration Review | Secondary Insurance | `sinsPayer` | Payer | `text` |  | patientForms.0.requestedInsurance.secondaryInsurance.payer |  |
| Portal Account & Registration Review | Secondary Insurance | `sinsPlanName` | Plan Name | `text` |  | patientForms.0.requestedInsurance.secondaryInsurance.planName |  |
| Portal Account & Registration Review | Secondary Insurance | `sinsMemberId` | Member ID | `text` |  | patientForms.0.requestedInsurance.secondaryInsurance.memberId |  |
| Portal Account & Registration Review | Secondary Insurance | `sinsGroup` | Group # | `text` |  | patientForms.0.requestedInsurance.secondaryInsurance.groupNumber |  |
| Portal Account & Registration Review | Secondary Insurance | `sinsSubscriber` | Subscriber | `text` |  | patientForms.0.requestedInsurance.secondaryInsurance.subscriberName |  |
| Portal Account & Registration Review | Emergency Contact | `ecName` | Name | `text` |  | patientForms.0.formData.emergencyContact.name |  |
| Portal Account & Registration Review | Emergency Contact | `ecRel` | Relationship | `text` |  | patientForms.0.formData.emergencyContact.relationship |  |
| Portal Account & Registration Review | Emergency Contact | `ecPhone` | Phone | `text` |  | patientForms.0.formData.emergencyContact.phone |  |
| Portal Account & Registration Review | Financial / Responsible Party | `finResp` | Responsible Party | `text` |  | patientForms.0.formData.financial.responsibleParty |  |
| Portal Account & Registration Review | Financial / Responsible Party | `finGuarantor` | Guarantor | `text` |  | patientForms.0.formData.financial.guarantorName |  |
| Portal Account & Registration Review | Financial / Responsible Party | `finWc` | Workers' Comp | `text` |  | patientForms.0.formData.financial.workersCompensation |  |
| Portal Account & Registration Review | Financial / Responsible Party | `finAuto` | Auto Accident | `text` |  | patientForms.0.formData.financial.autoAccident |  |
| Portal Account & Registration Review | Financial / Responsible Party | `finLiab` | Liability Coverage | `text` |  | patientForms.0.formData.financial.liabilityCoverage |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cTreat` | Consent to Treat | `text` |  | patientForms.0.formData.consents.consentToTreat |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cHipaa` | HIPAA Acknowledgement | `text` |  | patientForms.0.formData.consents.hipaaAcknowledgement |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cAob` | Assignment of Benefits | `text` |  | patientForms.0.formData.consents.assignmentOfBenefits |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cRoi` | Release of Information | `text` |  | patientForms.0.formData.consents.releaseOfInformation |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cFin` | Financial Responsibility | `text` |  | patientForms.0.formData.consents.financialResponsibility |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cTele` | Telehealth Consent | `text` |  | patientForms.0.formData.consents.telehealthConsent |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cShare` | Consent to Share | `text` |  | patientForms.0.formData.consents.consentToShare |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cFinal` | Final Approval | `text` |  | patientForms.0.formData.consents.finalApproval |  |
| Portal Account & Registration Review | Medical & Social History | `pcp` | Primary Care Physician | `text` |  | patientForms.0.formData.medicalHistory.primaryCarePhysician |  |
| Portal Account & Registration Review | Medical & Social History | `referring` | Referring Physician | `text` |  | patientForms.0.formData.medicalHistory.referringPhysician |  |
| Portal Account & Registration Review | Medical & Social History | `guardianName` | Guardian / Responsible Party | `text` |  | patientForms.0.requestedMedicalHistory.guardianName |  |
| Portal Account & Registration Review | Medical & Social History | `smoking` | Smoking Status | `text` |  | patientForms.0.formData.socialHistory.smokingStatus |  |
| Portal Account & Registration Review | Medical & Social History | `alcohol` | Alcohol Use | `text` |  | patientForms.0.formData.socialHistory.alcoholUse |  |
| Portal Account & Registration Review | Medical & Social History | `occupation` | Occupation | `text` |  | patientForms.0.formData.socialHistory.occupation |  |
| Portal Account & Registration Review | Medical & Social History | `medHistory` | Medical History | `textarea` |  | patientForms.0.requestedMedicalHistory.medicalHistory |  |
| Portal Account & Registration Review | Medical & Social History | `curMeds` | Current Medications | `textarea` |  | patientForms.0.requestedMedicalHistory.currentMedications |  |
| Portal Account & Registration Review | Medical & Social History | `allergies` | Allergies | `textarea` |  | patientForms.0.requestedMedicalHistory.allergies |  |

### Portal Users — `portal_users_cf`

Screen: 1 page(s) · 10 section(s) · 69 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DOCUMENTS`, `DYNAMIC_FORMS`, `PATIENTS`, `PAYERS_MASTER`, `PORTAL_AUDIT_EVENTS`, `PORTAL_CHECK_IN_QUESTIONNAIRES`, `PORTAL_EMAIL_CONFIRMATIONS`, `PORTAL_PATIENT_ESTABLISHMENT_REQUESTS`, `PORTAL_PATIENT_RELATIONSHIPS`, `PORTAL_SESSIONS`, `PORTAL_USERS`, `PRACTICES`, `PROVIDERS`, `USER_MFA`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Portal Account & Registration Review | Portal Account | `portalName` | Portal User | `text` |  | patientName |  |
| Portal Account & Registration Review | Portal Account | `email` | Email | `text` |  |  |  |
| Portal Account & Registration Review | Portal Account | `phone` | Phone | `text` |  |  |  |
| Portal Account & Registration Review | Portal Account | `status` | Status | `text` |  |  |  |
| Portal Account & Registration Review | Portal Account | `practiceName` | Practice | `text` |  |  |  |
| Portal Account & Registration Review | Portal Account | `patientLifecycleStatus` | Lifecycle | `text` |  |  |  |
| Portal Account & Registration Review | Portal Account | `activeChartPatientName` | Linked Patient Chart | `text` |  |  |  |
| Portal Account & Registration Review | Portal Account | `reqReviewStatus` | Registration Review Status | `text` |  | patientForms.0.reviewStatus |  |
| Portal Account & Registration Review | Portal Account | `formId` |  | `hidden` |  | patientForms.0.id |  |
| Portal Account & Registration Review | Patient | `reqName` | Legal Name | `text` |  | patientForms.0.requestedLegalName |  |
| Portal Account & Registration Review | Patient | `reqDob` | Date of Birth | `text` |  | patientForms.0.requestedDob |  |
| Portal Account & Registration Review | Patient | `reqEmail` | Email | `text` |  | patientForms.0.requestedEmail |  |
| Portal Account & Registration Review | Patient | `reqPhone` | Phone | `text` |  | patientForms.0.requestedPhone |  |
| Portal Account & Registration Review | Patient | `reqClinic` | Requested Clinic | `text` |  | patientForms.0.requestedClinicName |  |
| Portal Account & Registration Review | Appointment Request | `apptReason` | Reason for Visit | `text` |  | patientForms.0.formData.appointment.reason |  |
| Portal Account & Registration Review | Appointment Request | `apptTime` | Preferred Time | `text` |  | patientForms.0.formData.appointment.preferredTime |  |
| Portal Account & Registration Review | Appointment Request | `apptProvider` | Preferred Provider | `lookup` |  | patientForms.0.formData.appointment.preferredProviderId |  |
| Portal Account & Registration Review | Appointment Request | `apptNeeds` | Needs Appointment | `text` |  | patientForms.0.formData.appointment.needsAppointment |  |
| Portal Account & Registration Review | Appointment Request | `apptWaitlist` | Waitlist Requested | `text` |  | patientForms.0.formData.appointment.waitlistRequested |  |
| Portal Account & Registration Review | Address & Demographics | `addr1` | Address | `text` |  | patientForms.0.requestedAddress.addressLine1 |  |
| Portal Account & Registration Review | Address & Demographics | `addr2` | Address Line 2 | `text` |  | patientForms.0.requestedAddress.addressLine2 |  |
| Portal Account & Registration Review | Address & Demographics | `city` | City | `text` |  | patientForms.0.requestedAddress.city |  |
| Portal Account & Registration Review | Address & Demographics | `state` | State | `text` |  | patientForms.0.requestedAddress.state |  |
| Portal Account & Registration Review | Address & Demographics | `zip` | ZIP | `text` |  | patientForms.0.requestedAddress.zipCode |  |
| Portal Account & Registration Review | Address & Demographics | `gender` | Gender | `text` |  | patientForms.0.requestedAddress.gender |  |
| Portal Account & Registration Review | Address & Demographics | `language` | Preferred Language | `text` |  | patientForms.0.formData.demographics.preferredLanguage |  |
| Portal Account & Registration Review | Address & Demographics | `marital` | Marital Status | `text` |  | patientForms.0.formData.demographics.maritalStatus |  |
| Portal Account & Registration Review | Address & Demographics | `race` | Race | `text` |  | patientForms.0.formData.demographics.race |  |
| Portal Account & Registration Review | Address & Demographics | `ethnicity` | Ethnicity | `text` |  | patientForms.0.formData.demographics.ethnicity |  |
| Portal Account & Registration Review | Address & Demographics | `veteran` | Veteran Status | `text` |  | patientForms.0.formData.demographics.veteranStatus |  |
| Portal Account & Registration Review | Address & Demographics | `employer` | Employer | `text` |  | patientForms.0.formData.demographics.employer |  |
| Portal Account & Registration Review | Primary Insurance | `insPayer` | Payer | `text` |  | patientForms.0.requestedInsurance.payer |  |
| Portal Account & Registration Review | Primary Insurance | `insPlanName` | Plan Name | `text` |  | patientForms.0.requestedInsurance.planName |  |
| Portal Account & Registration Review | Primary Insurance | `insPlanType` | Plan Type | `text` |  | patientForms.0.requestedInsurance.planType |  |
| Portal Account & Registration Review | Primary Insurance | `insMemberId` | Member ID | `text` |  | patientForms.0.requestedInsurance.memberId |  |
| Portal Account & Registration Review | Primary Insurance | `insGroup` | Group # | `text` |  | patientForms.0.requestedInsurance.groupNumber |  |
| Portal Account & Registration Review | Primary Insurance | `insSubscriber` | Subscriber | `text` |  | patientForms.0.requestedInsurance.subscriberName |  |
| Portal Account & Registration Review | Primary Insurance | `insSubDob` | Subscriber DOB | `text` |  | patientForms.0.requestedInsurance.subscriberDateOfBirth |  |
| Portal Account & Registration Review | Primary Insurance | `insRel` | Relationship to Subscriber | `text` |  | patientForms.0.requestedInsurance.relationshipToSubscriber |  |
| Portal Account & Registration Review | Secondary Insurance | `sinsPayer` | Payer | `text` |  | patientForms.0.requestedInsurance.secondaryInsurance.payer |  |
| Portal Account & Registration Review | Secondary Insurance | `sinsPlanName` | Plan Name | `text` |  | patientForms.0.requestedInsurance.secondaryInsurance.planName |  |
| Portal Account & Registration Review | Secondary Insurance | `sinsMemberId` | Member ID | `text` |  | patientForms.0.requestedInsurance.secondaryInsurance.memberId |  |
| Portal Account & Registration Review | Secondary Insurance | `sinsGroup` | Group # | `text` |  | patientForms.0.requestedInsurance.secondaryInsurance.groupNumber |  |
| Portal Account & Registration Review | Secondary Insurance | `sinsSubscriber` | Subscriber | `text` |  | patientForms.0.requestedInsurance.secondaryInsurance.subscriberName |  |
| Portal Account & Registration Review | Emergency Contact | `ecName` | Name | `text` |  | patientForms.0.formData.emergencyContact.name |  |
| Portal Account & Registration Review | Emergency Contact | `ecRel` | Relationship | `text` |  | patientForms.0.formData.emergencyContact.relationship |  |
| Portal Account & Registration Review | Emergency Contact | `ecPhone` | Phone | `text` |  | patientForms.0.formData.emergencyContact.phone |  |
| Portal Account & Registration Review | Financial / Responsible Party | `finResp` | Responsible Party | `text` |  | patientForms.0.formData.financial.responsibleParty |  |
| Portal Account & Registration Review | Financial / Responsible Party | `finGuarantor` | Guarantor | `text` |  | patientForms.0.formData.financial.guarantorName |  |
| Portal Account & Registration Review | Financial / Responsible Party | `finWc` | Workers' Comp | `text` |  | patientForms.0.formData.financial.workersCompensation |  |
| Portal Account & Registration Review | Financial / Responsible Party | `finAuto` | Auto Accident | `text` |  | patientForms.0.formData.financial.autoAccident |  |
| Portal Account & Registration Review | Financial / Responsible Party | `finLiab` | Liability Coverage | `text` |  | patientForms.0.formData.financial.liabilityCoverage |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cTreat` | Consent to Treat | `text` |  | patientForms.0.formData.consents.consentToTreat |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cHipaa` | HIPAA Acknowledgement | `text` |  | patientForms.0.formData.consents.hipaaAcknowledgement |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cAob` | Assignment of Benefits | `text` |  | patientForms.0.formData.consents.assignmentOfBenefits |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cRoi` | Release of Information | `text` |  | patientForms.0.formData.consents.releaseOfInformation |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cFin` | Financial Responsibility | `text` |  | patientForms.0.formData.consents.financialResponsibility |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cTele` | Telehealth Consent | `text` |  | patientForms.0.formData.consents.telehealthConsent |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cShare` | Consent to Share | `text` |  | patientForms.0.formData.consents.consentToShare |  |
| Portal Account & Registration Review | Consents & Acknowledgements | `cFinal` | Final Approval | `text` |  | patientForms.0.formData.consents.finalApproval |  |
| Portal Account & Registration Review | Medical & Social History | `pcp` | Primary Care Physician | `text` |  | patientForms.0.formData.medicalHistory.primaryCarePhysician |  |
| Portal Account & Registration Review | Medical & Social History | `referring` | Referring Physician | `text` |  | patientForms.0.formData.medicalHistory.referringPhysician |  |
| Portal Account & Registration Review | Medical & Social History | `guardianName` | Guardian / Responsible Party | `text` |  | patientForms.0.requestedMedicalHistory.guardianName |  |
| Portal Account & Registration Review | Medical & Social History | `smoking` | Smoking Status | `text` |  | patientForms.0.formData.socialHistory.smokingStatus |  |
| Portal Account & Registration Review | Medical & Social History | `alcohol` | Alcohol Use | `text` |  | patientForms.0.formData.socialHistory.alcoholUse |  |
| Portal Account & Registration Review | Medical & Social History | `occupation` | Occupation | `text` |  | patientForms.0.formData.socialHistory.occupation |  |
| Portal Account & Registration Review | Medical & Social History | `medHistory` | Medical History | `textarea` |  | patientForms.0.requestedMedicalHistory.medicalHistory |  |
| Portal Account & Registration Review | Medical & Social History | `curMeds` | Current Medications | `textarea` |  | patientForms.0.requestedMedicalHistory.currentMedications |  |
| Portal Account & Registration Review | Medical & Social History | `allergies` | Allergies | `textarea` |  | patientForms.0.requestedMedicalHistory.allergies |  |

### Practice Analytics — `practice_analytics_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Practice Analytics | Report Parameters | `reportType` | Report Type | `select` | Y |  |  |
| Practice Analytics | Report Parameters | `dateFrom` | Start Date | `date` | Y |  |  |
| Practice Analytics | Report Parameters | `dateTo` | End Date | `date` | Y |  |  |
| Practice Analytics | Report Parameters | `provider` | Provider (optional) | `typeahead` |  |  |  |
| Practice Analytics | Report Parameters | `groupBy` | Group By | `select` |  |  |  |
| Practice Analytics | Key Metrics Summary | `patientVisits` | Patient Visits | `number` |  |  |  |
| Practice Analytics | Key Metrics Summary | `newPatients` | New Patients | `number` |  |  |  |
| Practice Analytics | Key Metrics Summary | `noShowRate` | No-Show Rate (%) | `number` |  |  |  |
| Practice Analytics | Key Metrics Summary | `collectionRate` | Collection Rate (%) | `number` |  |  |  |
| Practice Analytics | Key Metrics Summary | `totalCharges` | Total Charges ($) | `number` |  |  |  |
| Practice Analytics | Key Metrics Summary | `totalPayments` | Total Payments ($) | `number` |  |  |  |
| Practice Analytics | Key Metrics Summary | `netRevenue` | Net Revenue ($) | `number` |  |  |  |
| Practice Analytics | Key Metrics Summary | `daysInAR` | Days in A/R | `number` |  |  |  |
| Practice Analytics | Key Metrics Summary | `denialRate` | Denial Rate (%) | `number` |  |  |  |
| Practice Analytics | Analysis Notes | `trendsNotes` | Trend Analysis Notes | `textarea` |  |  |  |
| Practice Analytics | Analysis Notes | `actionItems` | Action Items | `textarea` |  |  |  |
| Practice Analytics | Analysis Notes | `reportGeneratedBy` | Report Generated By | `text` |  |  |  |
| Practice Analytics | Analysis Notes | `reportDate` | Report Date | `date` |  |  |  |

### Practice Defaults — `practice_defaults_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Practice Default Settings | Front Office | `defaultApptDuration` | Default Appointment Duration (minutes) | `number` |  |  |  |
| Practice Default Settings | Front Office | `appointmentReminderDays` | Appointment Reminder (days before) | `number` |  |  |  |
| Practice Default Settings | Front Office | `allowOnlineScheduling` | Allow patients to schedule online (portal) | `checkbox` |  |  |  |
| Practice Default Settings | Front Office | `requireInsuranceAtSchedule` | Require insurance at time of scheduling | `checkbox` |  |  |  |
| Practice Default Settings | Front Office | `autoCheckInEnabled` | Enable auto check-in via kiosk / portal | `checkbox` |  |  |  |
| Practice Default Settings | Front Office | `defaultCopayCollection` | Default Copay Collection Time | `select` |  |  |  |
| Practice Default Settings | Clinical Defaults | `defaultEncounterType` | Default Encounter Type | `select` |  |  |  |
| Practice Default Settings | Clinical Defaults | `defaultVitalTemplate` | Default Vitals Template | `select` |  |  |  |
| Practice Default Settings | Clinical Defaults | `autoGenerateAvs` | Auto-generate After-Visit Summary at checkout | `checkbox` |  |  |  |
| Practice Default Settings | Clinical Defaults | `requireProviderId` | Require rendering provider on all encounters | `checkbox` |  |  |  |
| Practice Default Settings | Clinical Defaults | `defaultRosFormat` | Default ROS Format | `select` |  |  |  |
| Practice Default Settings | Referral Defaults | `defaultReferralUrgency` | Default Referral Urgency | `select` |  |  |  |
| Practice Default Settings | Referral Defaults | `requireReferralAuth` | Require prior auth for all referrals | `checkbox` |  |  |  |
| Practice Default Settings | Referral Defaults | `autoFaxReferrals` | Auto-fax referrals to external providers | `checkbox` |  |  |  |
| Practice Default Settings | Eligibility Defaults | `autoCheckEligibility` | Auto-check Eligibility | `select` |  |  |  |
| Practice Default Settings | Eligibility Defaults | `eligibilityPayerId` | Default Payer for Batch Eligibility | `text` |  |  |  |

### Practice Locations — `practice_locations_cf`

Screen: 1 page(s) · 1 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PRACTICE_LOCATIONS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Location | Location Info | `plocId` | Location ID | `text` |  |  |  |
| Location | Location Info | `plocPracticeId` | Practice ID (required) | `text` | Y |  |  |
| Location | Location Info | `plocName` | Location Name (required) | `text` | Y |  |  |
| Location | Location Info | `plocAddress1` | Address 1 | `text` |  |  |  |
| Location | Location Info | `plocAddress2` | Address 2 | `text` |  |  |  |
| Location | Location Info | `plocCity` | City | `text` |  |  |  |
| Location | Location Info | `plocState` | State | `text` |  |  |  |
| Location | Location Info | `plocZip` | ZIP | `text` |  |  |  |
| Location | Location Info | `plocPhone` | Phone | `text` |  |  |  |
| Location | Location Info | `plocFax` | Fax | `text` |  |  |  |
| Location | Location Info | `plocIsActive` | Active | `checkbox` |  |  |  |
| Location | Location Info | `plocIsPrimary` | Primary Location | `checkbox` |  |  |  |
| Location | Location Info | `plocNpi` | Location NPI | `text` |  |  |  |
| Location | Location Info | `plocPlaceOfService` | Place of Service Code | `text` |  |  |  |

### Practice Payers — `practice_payers_cf`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `PAYERS_MASTER`, `PRACTICES`, `PRACTICE_PAYERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Practice Payer | Payer Configuration | `ppayId` | Mapping ID | `text` |  |  |  |
| Practice Payer | Payer Configuration | `ppayPracticeId` | Practice ID (required) | `text` | Y |  |  |
| Practice Payer | Payer Configuration | `ppayPayerId` | Payer ID (from master, required) | `text` | Y |  |  |
| Practice Payer | Payer Configuration | `ppayEdiPayerId` | EDI Payer ID Override | `text` |  |  |  |
| Practice Payer | Payer Configuration | `ppayContractNumber` | Contract Number | `text` |  |  |  |
| Practice Payer | Payer Configuration | `ppayFeeSchedule` | Fee Schedule | `text` |  |  |  |
| Practice Payer | Payer Configuration | `ppayIsActive` | Active | `checkbox` |  |  |  |
| Practice Payer | Payer Configuration | `ppayAcceptsElectronic` | Accepts Electronic Claims | `checkbox` |  |  |  |
| Practice Payer | Payer Configuration | `ppayPriorAuthRequired` | Prior Auth Required | `checkbox` |  |  |  |

### Practice Reports — `practice_reports_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Practice Reports & Analytics | Report Configuration | `reportType` | Report Type | `select` | Y |  |  |
| Practice Reports & Analytics | Report Configuration | `practiceId` | Practice (blank = all practices) | `text` |  |  |  |
| Practice Reports & Analytics | Report Configuration | `providerId` | Provider Filter | `typeahead` |  |  |  |
| Practice Reports & Analytics | Report Configuration | `dateFrom` | Date From | `date` | Y |  |  |
| Practice Reports & Analytics | Report Configuration | `dateTo` | Date To | `date` | Y |  |  |
| Practice Reports & Analytics | Report Configuration | `groupBy` | Group By | `select` |  |  |  |
| Practice Reports & Analytics | Output Format | `outputFormat` | Output Format | `select` |  |  |  |
| Practice Reports & Analytics | Output Format | `includeCharts` | Include visual charts (bar/line) | `checkbox` |  |  |  |
| Practice Reports & Analytics | Output Format | `scheduledFrequency` | Scheduled Frequency (if recurring) | `select` |  |  |  |
| Practice Reports & Analytics | Output Format | `emailRecipients` | Email Report Recipients | `email` |  |  |  |

### Practice Settings — `practice_admin_cf`

Screen: 0 page(s) · 0 section(s) · 0 field(s) · UI STUB · DB BUILT · tables `PRACTICES`

_No fields declared (nav stub)._

### Practices — `practices_cf`

Screen: 1 page(s) · 2 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Practice | Practice Info | `prcId` | Practice ID | `text` |  |  |  |
| Practice | Practice Info | `prcName` | Name (required) | `text` | Y |  |  |
| Practice | Practice Info | `prcDisplayName` | Display Name | `text` |  |  |  |
| Practice | Practice Info | `prcNpi` | NPI | `text` |  |  |  |
| Practice | Practice Info | `prcTaxId` | Tax ID | `text` |  |  |  |
| Practice | Practice Info | `prcSpecialty` | Specialty | `text` |  |  |  |
| Practice | Practice Info | `prcOnboardingStatus` | Onboarding Status | `text` |  |  |  |
| Practice | Practice Info | `prcIsActive` | Active | `checkbox` |  |  |  |
| Practice | Contact | `prcAddress1` | Address 1 | `text` |  |  |  |
| Practice | Contact | `prcAddress2` | Address 2 | `text` |  |  |  |
| Practice | Contact | `prcCity` | City | `text` |  |  |  |
| Practice | Contact | `prcState` | State | `text` |  |  |  |
| Practice | Contact | `prcZip` | ZIP | `text` |  |  |  |
| Practice | Contact | `prcPhone` | Phone | `text` |  |  |  |
| Practice | Contact | `prcFax` | Fax | `text` |  |  |  |
| Practice | Contact | `prcEmail` | Email | `text` |  |  |  |
| Practice | Contact | `prcWebsite` | Website | `text` |  |  |  |

### Practices — `practices`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Practice | Practice Details | `name` | Practice Name | `text` | Y |  |  |
| Practice | Practice Details | `npi` | NPI | `text` |  |  |  |
| Practice | Practice Details | `taxId` | Tax ID | `text` |  |  |  |
| Practice | Practice Details | `phone` | Phone | `text` |  |  |  |
| Practice | Practice Details | `address` | Address | `textarea` |  |  |  |
| Practice | Practice Details | `specialty` | Specialty | `text` |  |  |  |
| Practice | Practice Details | `isActive` | Active | `checkbox` |  |  |  |

### Practices — `PRACTICES`

Screen: 1 page(s) · 3 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Practice | Practice Info | `prcId` | Practice ID (read-only) | `text` |  |  |  |
| Practice | Practice Info | `prcName` | Name (required) | `text` | Y |  |  |
| Practice | Practice Info | `prcDisplayName` | Display Name | `text` |  |  |  |
| Practice | Practice Info | `prcNpi` | NPI | `text` |  |  |  |
| Practice | Practice Info | `prcTaxId` | Tax ID | `text` |  |  |  |
| Practice | Practice Info | `prcTaxonomyCode` | Taxonomy Code | `text` |  |  |  |
| Practice | Practice Info | `prcSpecialty` | Specialty | `text` |  |  |  |
| Practice | Practice Info | `prcPhone` | Phone | `text` |  |  |  |
| Practice | Practice Info | `prcFax` | Fax | `text` |  |  |  |
| Practice | Practice Info | `prcEmail` | Email | `text` |  |  |  |
| Practice | Address | `prcAddressLine1` | Address Line 1 | `text` |  |  |  |
| Practice | Address | `prcAddressLine2` | Address Line 2 | `text` |  |  |  |
| Practice | Address | `prcCity` | City | `text` |  |  |  |
| Practice | Address | `prcState` | State | `text` |  |  |  |
| Practice | Address | `prcZipCode` | ZIP Code | `text` |  |  |  |
| Practice | Billing | `prcBillingName` | Billing Name | `text` |  |  |  |
| Practice | Billing | `prcBillingNpi` | Billing NPI | `text` |  |  |  |
| Practice | Billing | `prcBillingTaxId` | Billing Tax ID | `text` |  |  |  |
| Practice | Billing | `prcClearinghouse` | Clearinghouse | `text` |  |  |  |
| Practice | Billing | `prcClearinghouseId` | Clearinghouse ID | `text` |  |  |  |
| Practice | Billing | `prcOnboardingStatus` | Onboarding Status (pending/active/suspended) | `text` |  |  |  |

### Provider Billing Overrides — `payer_provider_billing`

Screen: 2 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider Billing Overrides | ppbListSection | `ppbId` | ID | `text` |  |  |  |
| Provider Billing Overrides | ppbListSection | `ppbProviderId` | Provider ID | `text` |  |  |  |
| Provider Billing Overrides | ppbListSection | `ppbPayerId` | Payer ID | `text` |  |  |  |
| Provider Billing Overrides | ppbListSection | `ppbFacilityId` | Facility ID | `text` |  |  |  |
| Provider Billing Overrides | ppbListSection | `ppbServiceDateFrom` | Effective From | `text` |  |  |  |
| Provider Billing Overrides | ppbListSection | `ppbServiceDateTo` | Effective To | `text` |  |  |  |
| Provider Billing Overrides | ppbListSection | `ppbActive` | Active | `text` |  |  |  |
| Override Details | Scope | `ppbEditProviderId` | Provider ID | `text` | Y |  |  |
| Override Details | Scope | `ppbEditPayerId` | Payer ID (optional) | `text` |  |  |  |
| Override Details | Scope | `ppbEditFacilityId` | Facility ID (optional) | `text` |  |  |  |
| Override Details | Scope | `ppbEditPracticeId` | Practice ID (optional) | `text` |  |  |  |
| Override Details | Scope | `ppbEditServiceDateFrom` | Effective From | `date` |  |  |  |
| Override Details | Scope | `ppbEditServiceDateTo` | Effective To | `date` |  |  |  |
| Override Details | Billing Identifiers | `ppbEditRenderingNpi` | Rendering NPI Override | `text` |  |  |  |
| Override Details | Billing Identifiers | `ppbEditBillingNpi` | Billing NPI Override | `text` |  |  |  |
| Override Details | Billing Identifiers | `ppbEditGroupNpi` | Group NPI Override | `text` |  |  |  |
| Override Details | Billing Identifiers | `ppbEditTaxonomyCode` | Taxonomy Code Override | `text` |  |  |  |
| Override Details | Billing Identifiers | `ppbEditSupervisorId` | Supervisor Provider ID | `text` |  |  |  |
| Override Details | Billing Identifiers | `ppbEditPayToId` | Pay-To Provider ID | `text` |  |  |  |

### Provider Groups — `provider_management_cf`

Screen: 2 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider Care Groups (ECW-SC-15) | Care Group Definition (ECW-SC-15) | `careGroupName` | Care Group Name | `text` | Y |  |  |
| Provider Care Groups (ECW-SC-15) | Care Group Definition (ECW-SC-15) | `careGroupType` | Group Type | `select` |  |  |  |
| Provider Care Groups (ECW-SC-15) | Care Group Definition (ECW-SC-15) | `groupMembers` | Group Members (comma-sep IDs) | `textarea` |  |  |  |
| Provider Care Groups (ECW-SC-15) | Care Group Definition (ECW-SC-15) | `centralizedResourceMode` | Centralized Resource Mode | `checkbox` |  |  |  |
| Provider Care Groups (ECW-SC-15) | Care Group Definition (ECW-SC-15) | `centralizedResourceNote` | Centralized Resource Notes | `textarea` |  |  |  |
| Coverage Delegation & Absence (ECW-AD-19 / ECW-OPS-8) | Absence Coverage Assignment (ECW-AD-19) | `absenceStartDate` | Absence Start | `date` |  |  |  |
| Coverage Delegation & Absence (ECW-AD-19 / ECW-OPS-8) | Absence Coverage Assignment (ECW-AD-19) | `absenceEndDate` | Absence End | `date` |  |  |  |
| Coverage Delegation & Absence (ECW-AD-19 / ECW-OPS-8) | Absence Coverage Assignment (ECW-AD-19) | `absenceType` | Absence Type | `select` |  |  |  |
| Coverage Delegation & Absence (ECW-AD-19 / ECW-OPS-8) | Absence Coverage Assignment (ECW-AD-19) | `coveringProviderId` | Covering Provider | `text` |  |  |  |
| Coverage Delegation & Absence (ECW-AD-19 / ECW-OPS-8) | Absence Coverage Assignment (ECW-AD-19) | `coveringProviderName` | Covering Provider Name | `text` |  |  |  |
| Coverage Delegation & Absence (ECW-AD-19 / ECW-OPS-8) | Absence Coverage Assignment (ECW-AD-19) | `coverageNote` | Coverage Instructions | `textarea` |  |  |  |
| Coverage Delegation & Absence (ECW-AD-19 / ECW-OPS-8) | Work Queue Delegation (ECW-OPS-8) | `delegateOrderReview` | Delegate Order Review Queue | `checkbox` |  |  |  |
| Coverage Delegation & Absence (ECW-AD-19 / ECW-OPS-8) | Work Queue Delegation (ECW-OPS-8) | `delegateResultReview` | Delegate Result Review Queue | `checkbox` |  |  |  |
| Coverage Delegation & Absence (ECW-AD-19 / ECW-OPS-8) | Work Queue Delegation (ECW-OPS-8) | `delegateMessages` | Delegate Patient Messages | `checkbox` |  |  |  |
| Coverage Delegation & Absence (ECW-AD-19 / ECW-OPS-8) | Work Queue Delegation (ECW-OPS-8) | `delegateRxRefills` | Delegate Rx Refill Requests | `checkbox` |  |  |  |
| Coverage Delegation & Absence (ECW-AD-19 / ECW-OPS-8) | Work Queue Delegation (ECW-OPS-8) | `delegatePriorAuths` | Delegate Prior Auth Requests | `checkbox` |  |  |  |
| Coverage Delegation & Absence (ECW-AD-19 / ECW-OPS-8) | Work Queue Delegation (ECW-OPS-8) | `delegationScope` | Delegation Scope | `select` |  |  |  |

### Provider Panels — `provider_panels`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDER_PANELS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider Panel | Panel | `name` | Panel Name | `text` | Y |  |  |
| Provider Panel | Panel | `practiceId` | Practice | `text` |  |  |  |
| Provider Panel | Panel | `providerId` | Provider | `text` |  |  |  |
| Provider Panel | Panel | `maxPatients` | Max Patients | `text` |  |  |  |
| Provider Panel | Panel | `currentCount` | Current Count | `text` |  |  |  |
| Provider Panel | Panel | `isOpen` | Open to New Patients | `checkbox` |  |  |  |
| Provider Panel | Panel | `specialties` | Specialties | `text` |  |  |  |
