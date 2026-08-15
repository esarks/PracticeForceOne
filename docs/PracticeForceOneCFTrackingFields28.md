---
title: "PracticeForceOneCFTrackingFields28"
---

# CF Tracking — Field-Level Detail (part 28 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **RCM**, **Allergy and Immunology**, **Urology**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## RCM

### Dashboard — `dashboard`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `CLAIMS`, `DENIALS`, `PAYMENTS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dashboard Summary | Claims | `totalClaims` | Total Claims | `text` |  |  |  |
| Dashboard Summary | Claims | `totalCharges` | Total Charges | `text` |  |  |  |
| Dashboard Summary | Claims | `totalBalance` | Total Balance | `text` |  |  |  |
| Dashboard Summary | Claims | `draftCount` | Draft | `text` |  |  |  |
| Dashboard Summary | Claims | `submittedCount` | Submitted | `text` |  |  |  |
| Dashboard Summary | Claims | `paidCount` | Paid | `text` |  |  |  |
| Dashboard Summary | Claims | `deniedCount` | Denied | `text` |  |  |  |
| Dashboard Summary | Payments | `totalPaid` | Total Paid | `text` |  |  |  |
| Dashboard Summary | Payments | `paymentsCount` | Payments Count | `text` |  |  |  |
| Dashboard Summary | Denials | `openDenials` | Open Denials | `text` |  |  |  |
| Dashboard Summary | Denials | `deniedAmount` | Denied Amount | `text` |  |  |  |

### Denials — `DENIALS`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `APPEALS`, `AUDIT_LOG`, `CLAIMS`, `DENIALS`, `DENIAL_REASONINGS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Denial | Denial Details | `denClaimId` | Claim ID | `text` |  |  |  |
| Denial | Denial Details | `denDenialCode` | Denial Code | `text` |  |  |  |
| Denial | Denial Details | `denDenialReason` | Denial Reason | `text` |  |  |  |
| Denial | Denial Details | `denDenialCategory` | Category | `text` |  |  |  |
| Denial | Denial Details | `denStatus` | Status | `text` |  |  |  |
| Denial | Denial Details | `denAmount` | Denied Amount | `text` |  |  |  |
| Denial | Denial Details | `denDenialDate` | Denial Date | `date` |  |  |  |
| Denial | Denial Details | `denActionDeadline` | Action Deadline | `date` |  |  |  |
| Denial | Denial Details | `denNotes` | Notes | `text` |  |  |  |

### Dunning Series — `LETTER_DUNNING_SERIES`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Letter Dunning Series | Dunning Series (ECW-LT-2; letter_dunning_series table; automated multi-step letter sequences for AR follow-up; steps=JSON array of {dayOffset, templateId, action}) | `ldsId` | Series ID (read-only UUID) | `text` |  |  |  |
| Letter Dunning Series | Dunning Series (ECW-LT-2; letter_dunning_series table; automated multi-step letter sequences for AR follow-up; steps=JSON array of {dayOffset, templateId, action}) | `ldsName` | Series Name (required; max 120 chars) | `text` | Y |  |  |
| Letter Dunning Series | Dunning Series (ECW-LT-2; letter_dunning_series table; automated multi-step letter sequences for AR follow-up; steps=JSON array of {dayOffset, templateId, action}) | `ldsDescription` | Description (optional) | `textarea` |  |  |  |
| Letter Dunning Series | Dunning Series (ECW-LT-2; letter_dunning_series table; automated multi-step letter sequences for AR follow-up; steps=JSON array of {dayOffset, templateId, action}) | `ldsSteps` | Steps (JSON array; [{dayOffset, templateId, action}]; required) | `textarea` | Y |  |  |
| Letter Dunning Series | Dunning Series (ECW-LT-2; letter_dunning_series table; automated multi-step letter sequences for AR follow-up; steps=JSON array of {dayOffset, templateId, action}) | `ldsActive` | Active (true/false; default true) | `checkbox` |  |  |  |

### EDI — `EDI`

Screen: 1 page(s) · 1 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `AUTHORIZATIONS`, `CLAIMS`, `CLAIM_EXCEPTIONS`, `PATIENTS`, `PAYERS_MASTER`, `REMITTANCE_BATCHES`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| EDI Transaction | EDI Transaction (X12 837/835/277/278/999/TA1) | `ediId` | Transaction ID (read-only) | `text` |  |  |  |
| EDI Transaction | EDI Transaction (X12 837/835/277/278/999/TA1) | `ediClaimId` | Claim ID | `text` |  |  |  |
| EDI Transaction | EDI Transaction (X12 837/835/277/278/999/TA1) | `ediTransactionType` | Transaction Set (837P/835/277/278/999/TA1) | `text` |  |  |  |
| EDI Transaction | EDI Transaction (X12 837/835/277/278/999/TA1) | `ediInterchangeId` | Interchange Control Number (ISA13) | `text` |  |  |  |
| EDI Transaction | EDI Transaction (X12 837/835/277/278/999/TA1) | `ediFunctionalGroupId` | Functional Group Control Number (GS06) | `text` |  |  |  |
| EDI Transaction | EDI Transaction (X12 837/835/277/278/999/TA1) | `ediTransactionSetId` | Transaction Set Control Number (ST02) | `text` |  |  |  |
| EDI Transaction | EDI Transaction (X12 837/835/277/278/999/TA1) | `ediPayerId` | Payer ID (EDI trading partner) | `text` |  |  |  |
| EDI Transaction | EDI Transaction (X12 837/835/277/278/999/TA1) | `ediStatus` | EDI Status (pending/submitted/accepted/rejected/error) | `text` |  |  |  |
| EDI Transaction | EDI Transaction (X12 837/835/277/278/999/TA1) | `ediErrorCode` | Error Code (999 AAA segment) | `text` |  |  |  |
| EDI Transaction | EDI Transaction (X12 837/835/277/278/999/TA1) | `ediCreatedAt` | Created At (ISO 8601) | `text` |  |  |  |
| EDI Transaction | EDI Transaction (X12 837/835/277/278/999/TA1) | `ediRawSegment` | Raw Segment Excerpt (EDI element) | `textarea` |  |  |  |

### EDI Queue — `workflow_edi_queue_cf`

Screen: 2 page(s) · 2 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `CLAIMS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| EDI Queue | Filter | `weqPracticeId` | Practice ID (optional, all authorized if blank) | `text` |  |  |  |
| EDI Claim Detail | Claim / EDI Information | `weqId` | Claim ID | `text` |  |  |  |
| EDI Claim Detail | Claim / EDI Information | `weqClaimNumber` | Claim Number | `text` |  |  |  |
| EDI Claim Detail | Claim / EDI Information | `weqPatientId` | Patient ID | `text` |  |  |  |
| EDI Claim Detail | Claim / EDI Information | `weqPayerId` | Payer ID | `text` |  |  |  |
| EDI Claim Detail | Claim / EDI Information | `weqTotalCharge` | Total Charge | `text` |  |  |  |
| EDI Claim Detail | Claim / EDI Information | `weqStatus` | Claim Status | `text` |  |  |  |
| EDI Claim Detail | Claim / EDI Information | `weqEdiStatus` | EDI Status | `text` |  |  |  |
| EDI Claim Detail | Claim / EDI Information | `weqEdiBatchId` | EDI Batch ID | `text` |  |  |  |
| EDI Claim Detail | Claim / EDI Information | `weqEdiControlNumber` | EDI Control Number | `text` |  |  |  |
| EDI Claim Detail | Claim / EDI Information | `weqSubmittedAt` | Submitted At | `text` |  |  |  |
| EDI Claim Detail | Claim / EDI Information | `weqSubmittedBy` | Submitted By | `text` |  |  |  |
| EDI Claim Detail | Claim / EDI Information | `weqSubmissionCount` | Submission Count | `number` |  |  |  |
| EDI Claim Detail | Claim / EDI Information | `weqAcknowledgedAt` | Acknowledged At | `text` |  |  |  |
| EDI Claim Detail | Claim / EDI Information | `weqDaysSinceSubmit` | Days Since Submit | `number` |  |  |  |

### Eligibility Queue — `workflow_eligibility_queue_cf`

Screen: 2 page(s) · 2 section(s) · 23 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Eligibility Queue | Filter | `welqPracticeId` | Practice ID (optional, all authorized if blank) | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqId` | Check ID | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqPatientName` | Patient | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqPatientId` | Patient ID | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqPatientInsuranceId` | Insurance ID | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqServiceDate` | Service Date | `date` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqServiceType` | Service Type | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqStatus` | Status | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqResponseCode` | Response Code | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqResponseMessage` | Response Message | `textarea` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqCoverageActive` | Coverage Active | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqCopay` | Copay | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqDeductible` | Deductible | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqDeductibleRemaining` | Deductible Remaining | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqCoinsurancePercent` | Coinsurance % | `number` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqCheckedAt` | Checked At | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqCheckedBy` | Checked By | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqClearinghouse` | Clearinghouse | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqDaysSinceCheck` | Days Since Check | `number` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqQueueCategory` | Queue Category | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqRefreshPriority` | Refresh Priority | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqRecommendedAction` | Recommended Action | `text` |  |  |  |
| Eligibility Check Detail | Eligibility Check | `welqNextRefreshDueAt` | Next Refresh Due | `text` |  |  |  |

### Export — `EXPORT`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB PARTIAL · tables `CLAIMS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Data Export | Export (REPORTS_EXPORT RBAC; org-scoped CSV download) | `expType` | Export Type (claims/payments/denials) | `text` |  |  |  |
| Data Export | Export (REPORTS_EXPORT RBAC; org-scoped CSV download) | `expFormat` | Format (csv) | `text` |  |  |  |

### Group NPI Rules — `GROUP_NPI_RULES`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Group NPI Rule | Group NPI Rule (ECW-BI-11; group_npi_rules table; maps group NPI to provider/facility/payer for HCFA box 33 routing; effective date range) | `gnrId` | Rule ID (read-only UUID) | `text` |  |  |  |
| Group NPI Rule | Group NPI Rule (ECW-BI-11; group_npi_rules table; maps group NPI to provider/facility/payer for HCFA box 33 routing; effective date range) | `gnrGroupNpi` | Group NPI (required; 15 chars max) | `text` | Y |  |  |
| Group NPI Rule | Group NPI Rule (ECW-BI-11; group_npi_rules table; maps group NPI to provider/facility/payer for HCFA box 33 routing; effective date range) | `gnrProviderId` | Provider ID (optional; scope to specific provider) | `text` |  |  |  |
| Group NPI Rule | Group NPI Rule (ECW-BI-11; group_npi_rules table; maps group NPI to provider/facility/payer for HCFA box 33 routing; effective date range) | `gnrFacilityId` | Facility ID (optional; scope to specific facility) | `text` |  |  |  |
| Group NPI Rule | Group NPI Rule (ECW-BI-11; group_npi_rules table; maps group NPI to provider/facility/payer for HCFA box 33 routing; effective date range) | `gnrPayerId` | Payer ID (optional; scope to specific payer) | `text` |  |  |  |
| Group NPI Rule | Group NPI Rule (ECW-BI-11; group_npi_rules table; maps group NPI to provider/facility/payer for HCFA box 33 routing; effective date range) | `gnrEffectiveDateFrom` | Effective From (YYYY-MM-DD; optional) | `text` |  |  |  |
| Group NPI Rule | Group NPI Rule (ECW-BI-11; group_npi_rules table; maps group NPI to provider/facility/payer for HCFA box 33 routing; effective date range) | `gnrEffectiveDateTo` | Effective To (YYYY-MM-DD; optional) | `text` |  |  |  |
| Group NPI Rule | Group NPI Rule (ECW-BI-11; group_npi_rules table; maps group NPI to provider/facility/payer for HCFA box 33 routing; effective date range) | `gnrDescription` | Description (optional; max 200 chars) | `text` |  |  |  |
| Group NPI Rule | Group NPI Rule (ECW-BI-11; group_npi_rules table; maps group NPI to provider/facility/payer for HCFA box 33 routing; effective date range) | `gnrActive` | Active (true/false; default true) | `checkbox` |  |  |  |

### ICD-CPT Rules — `icd_cpt_rules`

Screen: 2 page(s) · 2 section(s) · 12 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ICD to CPT Rules | icrListSection | `icrId` | ID | `text` |  |  |  |
| ICD to CPT Rules | icrListSection | `icrIcd10Code` | ICD-10 Code | `text` |  |  |  |
| ICD to CPT Rules | icrListSection | `icrCptCode` | CPT Code | `text` |  |  |  |
| ICD to CPT Rules | icrListSection | `icrModifier` | Modifier | `text` |  |  |  |
| ICD to CPT Rules | icrListSection | `icrAutoSuggest` | Auto-Suggest | `text` |  |  |  |
| ICD to CPT Rules | icrListSection | `icrActive` | Active | `text` |  |  |  |
| ICD to CPT Rules | icrListSection | `icrCreatedAt` | Created At | `text` |  |  |  |
| ICD-CPT Rule Details | icrEditSection | `icrEditPracticeId` | Practice ID (optional) | `text` |  |  |  |
| ICD-CPT Rule Details | icrEditSection | `icrEditIcd10Code` | ICD-10 Code | `text` | Y |  |  |
| ICD-CPT Rule Details | icrEditSection | `icrEditCptCode` | CPT Code | `text` | Y |  |  |
| ICD-CPT Rule Details | icrEditSection | `icrEditModifier` | Modifier | `text` |  |  |  |
| ICD-CPT Rule Details | icrEditSection | `icrEditAutoSuggest` | Auto-Suggest | `select` |  |  |  |

### Payments — `payments_cf`

Screen: 1 page(s) · 3 section(s) · 27 field(s) · UI LIVE · DB BUILT · tables `PAYMENTS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Payment Detail | Payment | `id` | Payment ID | `text` |  |  |  |
| Payment Detail | Payment | `paymentNumber` | Payment Number | `text` |  |  |  |
| Payment Detail | Payment | `payerClaimNumber` | Payer Claim Number | `text` |  |  |  |
| Payment Detail | Payment | `paymentDate` | Payment Date | `text` |  |  |  |
| Payment Detail | Payment | `postedDate` | Posted Date | `text` |  |  |  |
| Payment Detail | Payment | `paymentType` | Payment Type | `text` |  |  |  |
| Payment Detail | Payment | `status` | Status | `text` |  |  |  |
| Payment Detail | Payment | `isManual` | Manual Payment | `checkbox` |  |  |  |
| Payment Detail | Payment | `manualReason` | Manual Reason | `text` |  |  |  |
| Payment Detail | Amounts | `totalCharge` | Total Charge | `number` |  |  |  |
| Payment Detail | Amounts | `allowedAmount` | Allowed Amount | `number` |  |  |  |
| Payment Detail | Amounts | `paidAmount` | Paid Amount | `number` |  |  |  |
| Payment Detail | Amounts | `adjustedAmount` | Adjusted Amount | `number` |  |  |  |
| Payment Detail | Amounts | `patientResponsibility` | Patient Responsibility | `number` |  |  |  |
| Payment Detail | References | `claimId` | Claim ID | `text` |  |  |  |
| Payment Detail | References | `claimNumber` | Claim Number | `text` |  |  |  |
| Payment Detail | References | `remittanceBatchId` | Remittance Batch ID | `text` |  |  |  |
| Payment Detail | References | `batchNumber` | Batch Number | `text` |  |  |  |
| Payment Detail | References | `eftTraceNumber` | EFT Trace Number | `text` |  |  |  |
| Payment Detail | References | `checkNumber` | Check Number | `text` |  |  |  |
| Payment Detail | References | `patientName` | Patient Name | `text` |  |  |  |
| Payment Detail | References | `payerName` | Payer Name | `text` |  |  |  |
| Payment Detail | References | `serviceDate` | Service Date | `text` |  |  |  |
| Payment Detail | References | `createdAt` | Created At | `text` |  |  |  |
| Payment Detail | References | `practiceId` | Practice ID | `text` |  |  |  |
| Payment Detail | References | `isRecoupment` | Recoupment | `checkbox` |  |  |  |
| Payment Detail | References | `recoupmentReason` | Recoupment Reason | `text` |  |  |  |

### Payments — `PAYMENTS`

Screen: 1 page(s) · 1 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `PAYMENTS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Payment | Payment (ERA 835 / manual posting) | `pymId` | Payment ID (read-only) | `text` |  |  |  |
| Payment | Payment (ERA 835 / manual posting) | `pymClaimId` | Claim ID | `text` |  |  |  |
| Payment | Payment (ERA 835 / manual posting) | `pymPaymentNumber` | Payment / Check Number | `text` |  |  |  |
| Payment | Payment (ERA 835 / manual posting) | `pymPayerClaimNumber` | Payer Claim Control Number | `text` |  |  |  |
| Payment | Payment (ERA 835 / manual posting) | `pymPaymentDate` | Payment Date (YYYY-MM-DD) | `text` |  |  |  |
| Payment | Payment (ERA 835 / manual posting) | `pymPaidAmount` | Paid Amount ($) | `text` |  |  |  |
| Payment | Payment (ERA 835 / manual posting) | `pymPaymentType` | Payment Type (check/eft/credit_card/patient) | `text` |  |  |  |
| Payment | Payment (ERA 835 / manual posting) | `pymAdjustmentAmount` | Adjustment Amount ($) | `text` |  |  |  |
| Payment | Payment (ERA 835 / manual posting) | `pymAdjustmentReason` | Adjustment Reason Code (CO/PR/OA/PI) | `text` |  |  |  |
| Payment | Payment (ERA 835 / manual posting) | `pymStatus` | Status (posted/pending/reversed) | `text` |  |  |  |

### Prior Auth Request — `prior_authorization_request_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prior Authorization Request | Request Details | `auth_type` | Authorization Type | `select` |  |  |  |
| Prior Authorization Request | Request Details | `urgency` | Urgency | `select` |  |  |  |
| Prior Authorization Request | Request Details | `item_requested` | Medication / Procedure / Service Requested | `text` |  |  |  |
| Prior Authorization Request | Request Details | `icd10_code` | ICD-10 Diagnosis Code(s) | `text` |  |  |  |
| Prior Authorization Request | Request Details | `cpt_hcpcs_code` | CPT / HCPCS Code(s) | `text` |  |  |  |
| Prior Authorization Request | Request Details | `quantity_requested` | Quantity / Duration Requested | `text` |  |  |  |
| Prior Authorization Request | Clinical Justification | `clinical_indication` | Clinical Indication | `textarea` |  |  |  |
| Prior Authorization Request | Clinical Justification | `step_therapy_failed` | Step Therapy / First-Line Alternatives Tried and Failed | `textarea` |  |  |  |
| Prior Authorization Request | Clinical Justification | `supporting_evidence` | Supporting Clinical Evidence / Guidelines | `textarea` |  |  |  |
| Prior Authorization Request | Status Tracking | `submission_date` | Submission Date | `date` |  |  |  |
| Prior Authorization Request | Status Tracking | `status` | Authorization Status | `select` |  |  |  |
| Prior Authorization Request | Status Tracking | `auth_number` | Authorization Number (if approved) | `text` |  |  |  |
| Prior Authorization Request | Status Tracking | `valid_from` | Valid From | `date` |  |  |  |
| Prior Authorization Request | Status Tracking | `valid_through` | Valid Through | `date` |  |  |  |

### Prior Authorizations — `AUTHORIZATIONS`

Screen: 1 page(s) · 1 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `AUTHORIZATIONS`, `AUTH_REQUIRED_RULES`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prior Authorization | Authorization (ECW-BI-18) | `azId` | Auth ID (read-only) | `text` |  |  |  |
| Prior Authorization | Authorization (ECW-BI-18) | `azPracticeId` | Practice ID (required) | `text` | Y |  |  |
| Prior Authorization | Authorization (ECW-BI-18) | `azPatientId` | Patient ID (required) | `text` | Y |  |  |
| Prior Authorization | Authorization (ECW-BI-18) | `azPayerId` | Payer ID (required) | `text` | Y |  |  |
| Prior Authorization | Authorization (ECW-BI-18) | `azProviderId` | Provider ID (optional) | `text` |  |  |  |
| Prior Authorization | Authorization (ECW-BI-18) | `azCptCode` | CPT Code (procedure requiring auth) | `text` |  |  |  |
| Prior Authorization | Authorization (ECW-BI-18) | `azIcd10Code` | ICD-10 Diagnosis Code | `text` |  |  |  |
| Prior Authorization | Authorization (ECW-BI-18) | `azAuthNumber` | Authorization Number (from payer) | `text` |  |  |  |
| Prior Authorization | Authorization (ECW-BI-18) | `azStatus` | Status (pending/approved/denied/expired/cancelled) | `text` |  |  |  |
| Prior Authorization | Authorization (ECW-BI-18) | `azEffectiveDate` | Effective Date (YYYY-MM-DD) | `text` |  |  |  |
| Prior Authorization | Authorization (ECW-BI-18) | `azExpirationDate` | Expiration Date (YYYY-MM-DD) | `text` |  |  |  |
| Prior Authorization | Authorization (ECW-BI-18) | `azUnitsApproved` | Units Approved (integer) | `text` |  |  |  |
| Prior Authorization | Authorization (ECW-BI-18) | `azUnitsUsed` | Units Used (integer) | `text` |  |  |  |
| Prior Authorization | Authorization (ECW-BI-18) | `azNotes` | Notes | `textarea` |  |  |  |

### Quality Measures — `QUALITY_MEASURES`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Quality Measure | Quality Measure (ECW-BI-30; QualityMeasuresRoutes; PQRS/MIPS HEDIS measures; seeded standard CMS measures (CMS110/128/130/147/165/182/226/236/317/349/50/69/68/2 + DSRIP-LSM01); custom measures addable via POST; GET /suggest for per-visit applicable measures; attestations tracked separately via quality_measures_attestations) | `qmId` | Measure ID (read-only UUID) | `text` |  |  |  |
| Quality Measure | Quality Measure (ECW-BI-30; QualityMeasuresRoutes; PQRS/MIPS HEDIS measures; seeded standard CMS measures (CMS110/128/130/147/165/182/226/236/317/349/50/69/68/2 + DSRIP-LSM01); custom measures addable via POST; GET /suggest for per-visit applicable measures; attestations tracked separately via quality_measures_attestations) | `qmMeasureNumber` | Measure Number (required; e.g. CMS110/CMS128; max 40) | `text` | Y |  |  |
| Quality Measure | Quality Measure (ECW-BI-30; QualityMeasuresRoutes; PQRS/MIPS HEDIS measures; seeded standard CMS measures (CMS110/128/130/147/165/182/226/236/317/349/50/69/68/2 + DSRIP-LSM01); custom measures addable via POST; GET /suggest for per-visit applicable measures; attestations tracked separately via quality_measures_attestations) | `qmName` | Measure Name (required; max 200 chars) | `text` | Y |  |  |
| Quality Measure | Quality Measure (ECW-BI-30; QualityMeasuresRoutes; PQRS/MIPS HEDIS measures; seeded standard CMS measures (CMS110/128/130/147/165/182/226/236/317/349/50/69/68/2 + DSRIP-LSM01); custom measures addable via POST; GET /suggest for per-visit applicable measures; attestations tracked separately via quality_measures_attestations) | `qmDescription` | Description (required; full measure text) | `textarea` | Y |  |  |
| Quality Measure | Quality Measure (ECW-BI-30; QualityMeasuresRoutes; PQRS/MIPS HEDIS measures; seeded standard CMS measures (CMS110/128/130/147/165/182/226/236/317/349/50/69/68/2 + DSRIP-LSM01); custom measures addable via POST; GET /suggest for per-visit applicable measures; attestations tracked separately via quality_measures_attestations) | `qmCptTriggers` | CPT Triggers (optional; comma-separated CPT codes that trigger this measure) | `text` |  |  |  |
| Quality Measure | Quality Measure (ECW-BI-30; QualityMeasuresRoutes; PQRS/MIPS HEDIS measures; seeded standard CMS measures (CMS110/128/130/147/165/182/226/236/317/349/50/69/68/2 + DSRIP-LSM01); custom measures addable via POST; GET /suggest for per-visit applicable measures; attestations tracked separately via quality_measures_attestations) | `qmIcdTriggers` | ICD-10 Triggers (optional; comma-separated ICD codes) | `text` |  |  |  |
| Quality Measure | Quality Measure (ECW-BI-30; QualityMeasuresRoutes; PQRS/MIPS HEDIS measures; seeded standard CMS measures (CMS110/128/130/147/165/182/226/236/317/349/50/69/68/2 + DSRIP-LSM01); custom measures addable via POST; GET /suggest for per-visit applicable measures; attestations tracked separately via quality_measures_attestations) | `qmActive` | Active (true/false; default true) | `checkbox` |  |  |  |

### Reconciliation — `RECONCILIATION`

Screen: 1 page(s) · 1 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `CLAIMS`, `PATIENTS`, `PAYMENTS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Reconciliation | Payment-to-Claim Reconciliation (read-only) | `recId` | Payment ID | `text` |  |  |  |
| Reconciliation | Payment-to-Claim Reconciliation (read-only) | `recPaymentNumber` | Payment Number | `text` |  |  |  |
| Reconciliation | Payment-to-Claim Reconciliation (read-only) | `recPayerClaimNumber` | Payer Claim Number | `text` |  |  |  |
| Reconciliation | Payment-to-Claim Reconciliation (read-only) | `recPaymentDate` | Payment Date | `text` |  |  |  |
| Reconciliation | Payment-to-Claim Reconciliation (read-only) | `recPaidAmount` | Paid Amount ($) | `text` |  |  |  |
| Reconciliation | Payment-to-Claim Reconciliation (read-only) | `recPaymentType` | Payment Type (check/eft/credit_card/patient) | `text` |  |  |  |
| Reconciliation | Payment-to-Claim Reconciliation (read-only) | `recStatus` | Status (matched/unmatched/partial) | `text` |  |  |  |
| Reconciliation | Payment-to-Claim Reconciliation (read-only) | `recClaimId` | Matched Claim ID | `text` |  |  |  |
| Reconciliation | Payment-to-Claim Reconciliation (read-only) | `recClaimNumber` | Matched Claim Number | `text` |  |  |  |
| Reconciliation | Payment-to-Claim Reconciliation (read-only) | `recPatientName` | Patient Name | `text` |  |  |  |

### Reconciliation — `reconciliation_cf`

Screen: 2 page(s) · 2 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `CLAIMS`, `PATIENTS`, `PAYMENTS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Reconciliation Summary | Payment Statistics | `recTotalPayments` | Total Payments | `number` |  |  |  |
| Reconciliation Summary | Payment Statistics | `recMatchedPayments` | Matched Payments | `number` |  |  |  |
| Reconciliation Summary | Payment Statistics | `recUnmatchedPayments` | Unmatched Payments | `number` |  |  |  |
| Reconciliation Summary | Payment Statistics | `recTotalPaid` | Total Paid | `text` |  |  |  |
| Reconciliation Summary | Payment Statistics | `recMatchedAmount` | Matched Amount | `text` |  |  |  |
| Reconciliation Summary | Payment Statistics | `recUnmatchedAmount` | Unmatched Amount | `text` |  |  |  |
| Reconciliation Summary | Payment Statistics | `recReconciliationRate` | Reconciliation Rate (%) | `text` |  |  |  |
| Reconciliation Summary | Payment Statistics | `recReconciliationStatus` | Reconciliation Status | `select` |  |  |  |
| Reconciliation Summary | Payment Statistics | `recRecommendedAction` | Recommended Action | `text` |  |  |  |
| Unmatched Payments | Payment Detail | `recUnmId` | Payment ID | `text` |  |  |  |
| Unmatched Payments | Payment Detail | `recUnmPaymentNumber` | Payment Number | `text` |  |  |  |
| Unmatched Payments | Payment Detail | `recUnmPayerClaimNumber` | Payer Claim Number | `text` |  |  |  |
| Unmatched Payments | Payment Detail | `recUnmPaymentDate` | Payment Date | `date` |  |  |  |
| Unmatched Payments | Payment Detail | `recUnmPaidAmount` | Paid Amount | `text` |  |  |  |
| Unmatched Payments | Payment Detail | `recUnmPaymentType` | Payment Type | `text` |  |  |  |
| Unmatched Payments | Payment Detail | `recUnmStatus` | Status | `text` |  |  |  |
| Unmatched Payments | Payment Detail | `recUnmClaimId` | Claim ID | `text` |  |  |  |
| Unmatched Payments | Payment Detail | `recUnmClaimNumber` | Claim Number | `text` |  |  |  |
| Unmatched Payments | Payment Detail | `recUnmPatientName` | Patient | `text` |  |  |  |
| Unmatched Payments | Payment Detail | `recUnmMatchStatus` | Match Status | `text` |  |  |  |
| Unmatched Payments | Payment Detail | `recUnmRecommendedAction` | Recommended Action | `text` |  |  |  |

### Remittance (ERA) — `REMITTANCE`

Screen: 1 page(s) · 1 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Remittance Batch | Remittance Batch (ERA 835) | `remId` | Batch ID (read-only) | `text` |  |  |  |
| Remittance Batch | Remittance Batch (ERA 835) | `remPracticeId` | Practice ID (required) | `text` | Y |  |  |
| Remittance Batch | Remittance Batch (ERA 835) | `remPayerId` | Payer ID | `text` |  |  |  |
| Remittance Batch | Remittance Batch (ERA 835) | `remBatchNumber` | Batch Number | `text` |  |  |  |
| Remittance Batch | Remittance Batch (ERA 835) | `remCheckNumber` | Check / EFT Check Number | `text` |  |  |  |
| Remittance Batch | Remittance Batch (ERA 835) | `remEftTraceNumber` | EFT Trace Number | `text` |  |  |  |
| Remittance Batch | Remittance Batch (ERA 835) | `remBatchDate` | Batch Date (YYYY-MM-DD) | `text` |  |  |  |
| Remittance Batch | Remittance Batch (ERA 835) | `remPaymentMethod` | Payment Method (check/eft/virtual_card) | `text` |  |  |  |
| Remittance Batch | Remittance Batch (ERA 835) | `remTotalAmount` | Total Amount ($) | `text` |  |  |  |
| Remittance Batch | Remittance Batch (ERA 835) | `remAppliedAmount` | Applied Amount ($) | `text` |  |  |  |
| Remittance Batch | Remittance Batch (ERA 835) | `remUnappliedAmount` | Unapplied Amount ($) | `text` |  |  |  |
| Remittance Batch | Remittance Batch (ERA 835) | `remTotalClaims` | Total Claims in Batch | `text` |  |  |  |
| Remittance Batch | Remittance Batch (ERA 835) | `remStatus` | Status (pending/posted/partial/error) | `text` |  |  |  |
| Remittance Batch | Remittance Batch (ERA 835) | `remEdiFileName` | EDI 835 File Name | `text` |  |  |  |

### Reports — `reports`

Screen: 1 page(s) · 1 section(s) · 3 field(s) · UI LIVE · DB MISSING · tables `APPOINTMENTS`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `ELIGIBILITY_CHECKS`, `ENCOUNTERS`, `PAYERS_MASTER`, `PAYMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Report | Report Parameters | `practiceId` | Practice | `text` |  |  |  |
| Report | Report Parameters | `fromDate` | From Date | `text` |  |  |  |
| Report | Report Parameters | `toDate` | To Date | `text` |  |  |  |

### Reports — `REPORTS`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB MISSING · tables `APPOINTMENTS`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `ELIGIBILITY_CHECKS`, `ENCOUNTERS`, `PAYERS_MASTER`, `PAYMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Report | Analytics Report (REPORTS_VIEW RBAC; ECW-BI-* report family) | `rptType` | Report Type | `text` |  |  |  |
| Report | Analytics Report (REPORTS_VIEW RBAC; ECW-BI-* report family) | `rptPracticeId` | Practice ID | `text` |  |  |  |
| Report | Analytics Report (REPORTS_VIEW RBAC; ECW-BI-* report family) | `rptDateFrom` | Date From | `text` |  |  |  |
| Report | Analytics Report (REPORTS_VIEW RBAC; ECW-BI-* report family) | `rptDateTo` | Date To | `text` |  |  |  |
| Report | Analytics Report (REPORTS_VIEW RBAC; ECW-BI-* report family) | `rptGeneratedAt` | Generated At | `text` |  |  |  |
| Report | Analytics Report (REPORTS_VIEW RBAC; ECW-BI-* report family) | `rptSummary` | Summary Data (JSON / table rows) | `textarea` |  |  |  |

### Result Charge Rules — `result_charge_rules`

Screen: 2 page(s) · 2 section(s) · 15 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Result-Based Charge Rules | rcrListSection | `rcrId` | ID | `text` |  |  |  |
| Result-Based Charge Rules | rcrListSection | `rcrResultType` | Result Type | `text` |  |  |  |
| Result-Based Charge Rules | rcrListSection | `rcrTriggerCode` | Trigger Code | `text` |  |  |  |
| Result-Based Charge Rules | rcrListSection | `rcrCptCode` | CPT Code | `text` |  |  |  |
| Result-Based Charge Rules | rcrListSection | `rcrIcd10Default` | ICD-10 Default | `text` |  |  |  |
| Result-Based Charge Rules | rcrListSection | `rcrDescription` | Description | `text` |  |  |  |
| Result-Based Charge Rules | rcrListSection | `rcrUnits` | Units | `text` |  |  |  |
| Result-Based Charge Rules | rcrListSection | `rcrActive` | Active | `text` |  |  |  |
| Add Charge Rule | rcrCreateSection | `rcrCreatePracticeId` | Practice ID (optional) | `text` |  |  |  |
| Add Charge Rule | rcrCreateSection | `rcrCreateResultType` | Result Type | `select` |  |  |  |
| Add Charge Rule | rcrCreateSection | `rcrCreateTriggerCode` | Trigger Code (LOINC/CPT) | `text` |  |  |  |
| Add Charge Rule | rcrCreateSection | `rcrCreateCptCode` | CPT Code to Charge | `text` | Y |  |  |
| Add Charge Rule | rcrCreateSection | `rcrCreateIcd10Default` | ICD-10 Default | `text` |  |  |  |
| Add Charge Rule | rcrCreateSection | `rcrCreateDescription` | Description | `textarea` |  |  |  |
| Add Charge Rule | rcrCreateSection | `rcrCreateUnits` | Default Units | `text` |  |  |  |

### Rule Grammar — `RULE_GRAMMAR`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Rule Grammar Schema (read-only) | Rule Grammar (fields, operators, limits for RuleGrammarValidator) | `rgGrammarVersion` | Grammar Version (read-only) | `text` |  |  |  |
| Rule Grammar Schema (read-only) | Rule Grammar (fields, operators, limits for RuleGrammarValidator) | `rgFields` | Available Fields (JSON array; read-only) | `textarea` |  |  |  |
| Rule Grammar Schema (read-only) | Rule Grammar (fields, operators, limits for RuleGrammarValidator) | `rgOps` | Available Operators (JSON array; read-only) | `textarea` |  |  |  |
| Rule Grammar Schema (read-only) | Rule Grammar (fields, operators, limits for RuleGrammarValidator) | `rgMaxDepth` | Max Nesting Depth (read-only) | `text` |  |  |  |
| Rule Grammar Schema (read-only) | Rule Grammar (fields, operators, limits for RuleGrammarValidator) | `rgMaxInValues` | Max IN() Array Values (read-only) | `text` |  |  |  |
| Rule Grammar Schema (read-only) | Rule Grammar (fields, operators, limits for RuleGrammarValidator) | `rgSchemaUrl` | JSON Schema URL (read-only) | `text` |  |  |  |

### Rules Catalog — `RULES`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `PAYERS_MASTER`, `PAYER_RULES`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Claim Rule | Rule (MUE/NCCI/Payer/Timely-Filing/Modifier) | `rulId` | Rule ID (read-only) | `text` |  |  |  |
| Claim Rule | Rule (MUE/NCCI/Payer/Timely-Filing/Modifier) | `rulType` | Rule Type (mue/ncci/payer/timely-filing/modifiers) | `text` |  |  |  |
| Claim Rule | Rule (MUE/NCCI/Payer/Timely-Filing/Modifier) | `rulCptCode` | CPT / HCPCS Code | `text` |  |  |  |
| Claim Rule | Rule (MUE/NCCI/Payer/Timely-Filing/Modifier) | `rulDescription` | Rule Description | `textarea` |  |  |  |
| Claim Rule | Rule (MUE/NCCI/Payer/Timely-Filing/Modifier) | `rulMaxUnits` | Max Units Allowed (MUE) | `text` |  |  |  |
| Claim Rule | Rule (MUE/NCCI/Payer/Timely-Filing/Modifier) | `rulDays` | Timely Filing Days (timely-filing) | `text` |  |  |  |
| Claim Rule | Rule (MUE/NCCI/Payer/Timely-Filing/Modifier) | `rulPayerId` | Payer ID (payer-specific rules) | `text` |  |  |  |
| Claim Rule | Rule (MUE/NCCI/Payer/Timely-Filing/Modifier) | `rulEffectiveDate` | Effective Date (YYYY-MM-DD) | `text` |  |  |  |

### Scheduled Reports — `SCHEDULED_REPORTS`

Screen: 1 page(s) · 1 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `SCHEDULED_REPORTS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Scheduled Report | Scheduled Report (REPORTS_EXPORT RBAC for writes) | `schId` | Schedule ID (read-only) | `text` |  |  |  |
| Scheduled Report | Scheduled Report (REPORTS_EXPORT RBAC for writes) | `schName` | Schedule Name (required) | `text` | Y |  |  |
| Scheduled Report | Scheduled Report (REPORTS_EXPORT RBAC for writes) | `schReportType` | Report Type (required) | `text` | Y |  |  |
| Scheduled Report | Scheduled Report (REPORTS_EXPORT RBAC for writes) | `schPracticeId` | Practice ID (required) | `text` | Y |  |  |
| Scheduled Report | Scheduled Report (REPORTS_EXPORT RBAC for writes) | `schCronExpression` | Cron Expression (e.g. 0 8 * * 1 = Mon 8am) | `text` |  |  |  |
| Scheduled Report | Scheduled Report (REPORTS_EXPORT RBAC for writes) | `schFrequency` | Frequency (daily/weekly/monthly) | `text` |  |  |  |
| Scheduled Report | Scheduled Report (REPORTS_EXPORT RBAC for writes) | `schEmailRecipients` | Email Recipients (comma-separated) | `text` |  |  |  |
| Scheduled Report | Scheduled Report (REPORTS_EXPORT RBAC for writes) | `schFileFormat` | File Format (pdf/csv/xlsx) | `text` |  |  |  |
| Scheduled Report | Scheduled Report (REPORTS_EXPORT RBAC for writes) | `schIsActive` | Is Active | `checkbox` |  |  |  |
| Scheduled Report | Scheduled Report (REPORTS_EXPORT RBAC for writes) | `schLastRunAt` | Last Run At (read-only) | `text` |  |  |  |
| Scheduled Report | Scheduled Report (REPORTS_EXPORT RBAC for writes) | `schNextRunAt` | Next Run At (read-only) | `text` |  |  |  |

### Sliding Fee Schedules — `SLIDING_FEE_SCHEDULES`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sliding Fee Schedule | Sliding Fee Schedule (ECW-BI-22; SlidingFeeRoutes; FQHC/safety-net FPL-based discount; sliding_fee_schedules + sliding_fee_tiers tables; GET/POST/PUT/DELETE /{id}/tiers for FPL tier management; POST /evaluate returns applicable tier for patient income+family-size; org+practice-scoped) | `sfsId` | Schedule ID (read-only UUID) | `text` |  |  |  |
| Sliding Fee Schedule | Sliding Fee Schedule (ECW-BI-22; SlidingFeeRoutes; FQHC/safety-net FPL-based discount; sliding_fee_schedules + sliding_fee_tiers tables; GET/POST/PUT/DELETE /{id}/tiers for FPL tier management; POST /evaluate returns applicable tier for patient income+family-size; org+practice-scoped) | `sfsName` | Schedule Name (required; max 120 chars) | `text` | Y |  |  |
| Sliding Fee Schedule | Sliding Fee Schedule (ECW-BI-22; SlidingFeeRoutes; FQHC/safety-net FPL-based discount; sliding_fee_schedules + sliding_fee_tiers tables; GET/POST/PUT/DELETE /{id}/tiers for FPL tier management; POST /evaluate returns applicable tier for patient income+family-size; org+practice-scoped) | `sfsDescription` | Description (optional) | `textarea` |  |  |  |
| Sliding Fee Schedule | Sliding Fee Schedule (ECW-BI-22; SlidingFeeRoutes; FQHC/safety-net FPL-based discount; sliding_fee_schedules + sliding_fee_tiers tables; GET/POST/PUT/DELETE /{id}/tiers for FPL tier management; POST /evaluate returns applicable tier for patient income+family-size; org+practice-scoped) | `sfsFplYear` | FPL Year (optional; Federal Poverty Level poverty year; e.g. 2025) | `text` |  |  |  |
| Sliding Fee Schedule | Sliding Fee Schedule (ECW-BI-22; SlidingFeeRoutes; FQHC/safety-net FPL-based discount; sliding_fee_schedules + sliding_fee_tiers tables; GET/POST/PUT/DELETE /{id}/tiers for FPL tier management; POST /evaluate returns applicable tier for patient income+family-size; org+practice-scoped) | `sfsEffectiveDate` | Effective Date (YYYY-MM-DD; optional) | `text` |  |  |  |
| Sliding Fee Schedule | Sliding Fee Schedule (ECW-BI-22; SlidingFeeRoutes; FQHC/safety-net FPL-based discount; sliding_fee_schedules + sliding_fee_tiers tables; GET/POST/PUT/DELETE /{id}/tiers for FPL tier management; POST /evaluate returns applicable tier for patient income+family-size; org+practice-scoped) | `sfsEndDate` | End Date (YYYY-MM-DD; optional) | `text` |  |  |  |
| Sliding Fee Schedule | Sliding Fee Schedule (ECW-BI-22; SlidingFeeRoutes; FQHC/safety-net FPL-based discount; sliding_fee_schedules + sliding_fee_tiers tables; GET/POST/PUT/DELETE /{id}/tiers for FPL tier management; POST /evaluate returns applicable tier for patient income+family-size; org+practice-scoped) | `sfsIsDefault` | Is Default (true/false; used when no explicit schedule assigned to patient) | `checkbox` |  |  |  |

## Allergy and Immunology

### Allergic Rhinitis Asthma — `allergy_allergic_asthma_rhinitis_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Allergic Rhinitis and Asthma — Allergen Testing, Pharmacotherapy, and Immunotherapy | Allergic Rhinitis Classification, Diagnosis, and Triggers | `ar_f1` | Allergic Rhinitis Evaluation: EPIDEMIOLOGY (400 MILLION WORLDWIDE; 20-30 pct US ADULTS; ATOPIC MARCH CONNECTION; CLASSIFICATION ARIA GUIDELINES (INTERMITTENT: UNDER 4 DAYS/WEEK Or UNDER 4 WEEKS; PERSISTENT: OVER 4 DAYS/WEEK And OVER 4 WEEKS; MILD: NORMAL SLEEP ACTIVITIES WORK; MODERATE-SEVERE: ABNORMAL SLEEP ACTIVITIES; SEASONAL PERENNIAL DISTINCTION LESS USEFUL; ALLERGEN TRIGGERS (SEASONAL: TREE POLLEN SPRING; GRASS POLLEN SPRING SUMMER; RAGWEED FALL; ALTERNARIA CLADOSPORIUM MOLD; PERENNIAL: HOUSE DUST MITE MOST COMMON WORLDWIDE; CAT DOG PET DANDER; COCKROACH; ASPERGILLUS INDOOR MOLD; OCCUPATIONAL ALLERGENS; SYMPTOMS (NASAL: CONGESTION RHINORRHEA PRURITUS SNEEZING; OCULAR: PRURITUS TEARING INJECTION ALLERGIC CONJUNCTIVITIS; SYMPTOMS WORSE ON EXPOSURE; BETTER INDOORS WHEN POLLEN IF OUTDOOR ALLERGIC; COMORBIDITIES (ASTHMA: UNITED AIRWAY DISEASE 40 pct RHINITIS HAVE ASTHMA; CHRONIC SINUSITIS: INFLAMMATORY MUCOSAL; NASAL POLYPS ASPIRIN EXACERBATED RESPIRATORY DISEASE AERD SAMTER TRIAD; EOSINOPHILIC ESOPHAGITIS; SLEEP DISORDERED BREATHING CONGESTION; DIAGNOSIS (SKIN PRICK TESTING GOLD STANDARD: ALLERGEN-SPECIFIC IgE EVALUATION; INTRADERMAL TESTING MORE SENSITIVE; SPECIFIC IgE SERUM CORRELATION; NASAL SMEAR EOSINOPHILS: SUPPORTS ALLERGIC; PHYSICAL: PALE BOGGY TURBINATES; ALLERGIC SHINERS; DENNIE-MORGAN LINES; NASAL CREASE TRANSVERSE ALLERGIC SALUTE) | `text` |  |  |  |
| Allergic Rhinitis and Asthma — Allergen Testing, Pharmacotherapy, and Immunotherapy | Allergic Rhinitis Classification, Diagnosis, and Triggers | `ar_f2` | Pharmacotherapy and Allergen Immunotherapy | `select` |  |  |  |

### Anaphylaxis — `allergy_immunology_anaphylaxis_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Anaphylaxis and Allergic Reaction Assessment | Trigger and Clinical Presentation | `trigger` | Suspected Trigger | `select` |  |  |  |
| Anaphylaxis and Allergic Reaction Assessment | Trigger and Clinical Presentation | `grade` | Severity Grade (WAO classification) | `select` |  |  |  |
| Anaphylaxis and Allergic Reaction Assessment | Acute Treatment and Discharge Plan | `epinephrine_given` | Epinephrine Given | `select` |  |  |  |
| Anaphylaxis and Allergic Reaction Assessment | Acute Treatment and Discharge Plan | `observation` | Observation Duration | `select` |  |  |  |
| Anaphylaxis and Allergic Reaction Assessment | Acute Treatment and Discharge Plan | `discharge_plan` | Discharge Plan (EpiPen 0.3 mg × 2; administration training; anaphylaxis action plan; Medic Alert bracelet; follow-up allergy/immunology within 1-4 weeks; trigger avoidance counseling) | `textarea` |  |  |  |

### Anaphylaxis — `allergy_anaphylaxis_cf`

Screen: 1 page(s) · 3 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Anaphylaxis Evaluation and Management | Anaphylaxis Episode Details | `ana_trigger` | Identified Trigger | `select` |  |  |  |
| Anaphylaxis Evaluation and Management | Anaphylaxis Episode Details | `ana_onset` | Time from Trigger to Symptoms | `select` |  |  |  |
| Anaphylaxis Evaluation and Management | Anaphylaxis Episode Details | `ana_severity` | Anaphylaxis Severity Grade | `select` |  |  |  |
| Anaphylaxis Evaluation and Management | Anaphylaxis Episode Details | `ana_symptoms` | Presenting Symptoms (urticaria, angioedema, wheezing, hypotension, vomiting, syncope, LOC) | `textarea` |  |  |  |
| Anaphylaxis Evaluation and Management | Anaphylaxis Episode Details | `ana_epinephrine_given` | Epinephrine Administered | `select` |  |  |  |
| Anaphylaxis Evaluation and Management | Anaphylaxis Episode Details | `ana_biphasic_risk` | Biphasic Reaction Risk Assessment | `select` |  |  |  |
| Anaphylaxis Evaluation and Management | Diagnostic Workup | `ana_tryptase` | Serum Tryptase (draw within 1-3 hours of event, mcg/L) | `text` |  |  |  |
| Anaphylaxis Evaluation and Management | Diagnostic Workup | `ana_tryptase_baseline` | Baseline Serum Tryptase (4+ hours after resolution, mcg/L) | `text` |  |  |  |
| Anaphylaxis Evaluation and Management | Diagnostic Workup | `ana_tryptase_elevated` | Tryptase Elevation Interpretation | `select` |  |  |  |
| Anaphylaxis Evaluation and Management | Diagnostic Workup | `ana_specific_ige_testing` | Specific IgE Testing (if trigger unclear - include allergens tested and results) | `textarea` |  |  |  |
| Anaphylaxis Evaluation and Management | Diagnostic Workup | `ana_mastocytosis_workup` | Mastocytosis/MCAS Evaluation | `select` |  |  |  |
| Anaphylaxis Evaluation and Management | Ongoing Management and Prevention | `ana_epinephrine_rx` | Epinephrine Auto-Injector Prescription | `select` |  |  |  |
| Anaphylaxis Evaluation and Management | Ongoing Management and Prevention | `ana_action_plan` | Anaphylaxis Emergency Action Plan | `select` |  |  |  |
| Anaphylaxis Evaluation and Management | Ongoing Management and Prevention | `ana_medic_alert` | Medical Alert Identification | `select` |  |  |  |
| Anaphylaxis Evaluation and Management | Ongoing Management and Prevention | `ana_venom_immunotherapy` | Venom Immunotherapy (VIT) - for hymenoptera anaphylaxis | `select` |  |  |  |
| Anaphylaxis Evaluation and Management | Ongoing Management and Prevention | `ana_drug_desensitization` | Drug Desensitization | `select` |  |  |  |
| Anaphylaxis Evaluation and Management | Ongoing Management and Prevention | `ana_cofactor_avoidance` | Cofactor Avoidance (EIAE) | `select` |  |  |  |
| Anaphylaxis Evaluation and Management | Ongoing Management and Prevention | `ana_antihistamine_scheduled` | Scheduled Antihistamines (idiopathic or MCAS) | `select` |  |  |  |
| Anaphylaxis Evaluation and Management | Ongoing Management and Prevention | `ana_follow_up` | Follow-Up Plan | `select` |  |  |  |
| Anaphylaxis Evaluation and Management | Ongoing Management and Prevention | `ana_notes` | Additional Notes | `textarea` |  |  |  |

### Angioedema — `angioedema_evaluation_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Angioedema Evaluation | Angioedema Characterization | `angioedema_type` | Type (by mechanism) | `select` |  |  |  |
| Angioedema Evaluation | Angioedema Characterization | `location` | Location of Swelling | `select` |  |  |  |
| Angioedema Evaluation | Angioedema Characterization | `airway_involvement` | Laryngeal / airway involvement (life-threatening — manage urgently) | `checkbox` |  |  |  |
| Angioedema Evaluation | Angioedema Characterization | `urticaria_concurrent` | Concurrent urticaria present | `checkbox` |  |  |  |
| Angioedema Evaluation | Laboratory Workup | `c4_level` | Complement C4 (mg/dL) | `number` |  |  |  |
| Angioedema Evaluation | Laboratory Workup | `c1_inh_level` | C1-Inhibitor Level (%) | `number` |  |  |  |
| Angioedema Evaluation | Laboratory Workup | `c1_inh_function` | C1-Inhibitor Function (%) | `number` |  |  |  |
| Angioedema Evaluation | Laboratory Workup | `c1q` | C1q Level (mg/dL) | `number` |  |  |  |
| Angioedema Evaluation | Acute and Long-Term Management | `ace_stopped` | ACE inhibitor stopped (if implicated — do not switch to ARB for HAE) | `checkbox` |  |  |  |
| Angioedema Evaluation | Acute and Long-Term Management | `hae_acute_tx` | HAE Acute Treatment (if HAE) | `select` |  |  |  |
| Angioedema Evaluation | Acute and Long-Term Management | `hae_prophylaxis` | HAE Long-Term Prophylaxis | `select` |  |  |  |
| Angioedema Evaluation | Acute and Long-Term Management | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Drug Allergy — `allergy_drug_hypersensitivity_cf`

Screen: 1 page(s) · 3 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Drug Hypersensitivity Evaluation | Reported Reaction | `dh_implicated_drug` | Implicated Drug (generic name) | `text` |  |  |  |
| Drug Hypersensitivity Evaluation | Reported Reaction | `dh_drug_class` | Drug Class | `select` |  |  |  |
| Drug Hypersensitivity Evaluation | Reported Reaction | `dh_reaction_date` | Reaction Date (or year) | `date` |  |  |  |
| Drug Hypersensitivity Evaluation | Reported Reaction | `dh_latency` | Latency (time from drug to reaction onset) | `select` |  |  |  |
| Drug Hypersensitivity Evaluation | Reported Reaction | `dh_reaction_type` | Reaction Manifestation | `select` |  |  |  |
| Drug Hypersensitivity Evaluation | Reported Reaction | `dh_severity` | Reaction Severity | `select` |  |  |  |
| Drug Hypersensitivity Evaluation | Reported Reaction | `dh_hospitalized` | Hospitalization Required | `select` |  |  |  |
| Drug Hypersensitivity Evaluation | Reported Reaction | `dh_treatment_of_reaction` | Treatment of Reaction (epinephrine, antihistamines, steroids, supportive care) | `textarea` |  |  |  |
| Drug Hypersensitivity Evaluation | Allergy Evaluation | `dh_penicillin_skin_test` | Penicillin Skin Testing (if applicable) | `select` |  |  |  |
| Drug Hypersensitivity Evaluation | Allergy Evaluation | `dh_cross_reactivity` | Cross-Reactivity Assessment | `select` |  |  |  |
| Drug Hypersensitivity Evaluation | Allergy Evaluation | `dh_hla_testing` | Pharmacogenomic / HLA Testing | `select` |  |  |  |
| Drug Hypersensitivity Evaluation | Allergy Evaluation | `dh_scar_work_up` | SCAR (Severe Cutaneous Adverse Reaction) Workup | `select` |  |  |  |
| Drug Hypersensitivity Evaluation | Management and Drug Allergy Label | `dh_delabeling` | Drug Allergy De-labeling | `select` |  |  |  |
| Drug Hypersensitivity Evaluation | Management and Drug Allergy Label | `dh_graded_challenge_protocol` | Graded Challenge Protocol (if performed) | `select` |  |  |  |
| Drug Hypersensitivity Evaluation | Management and Drug Allergy Label | `dh_desensitization` | Drug Desensitization (if drug essential despite confirmed allergy) | `select` |  |  |  |
| Drug Hypersensitivity Evaluation | Management and Drug Allergy Label | `dh_alternative_prescribed` | Safe Alternative Drug Prescribed | `text` |  |  |  |
| Drug Hypersensitivity Evaluation | Management and Drug Allergy Label | `dh_avoidance_instructions` | Avoidance Instructions and Cross-Reactive Drug List | `textarea` |  |  |  |
| Drug Hypersensitivity Evaluation | Management and Drug Allergy Label | `dh_epipen` | Epinephrine Auto-Injector Prescribed | `select` |  |  |  |
| Drug Hypersensitivity Evaluation | Management and Drug Allergy Label | `dh_medic_alert` | Medical Alert Bracelet / ID | `select` |  |  |  |
| Drug Hypersensitivity Evaluation | Management and Drug Allergy Label | `dh_notes` | Additional Notes | `textarea` |  |  |  |

### Drug Allergy / Challenge — `allergy_immunology_drug_allergy_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Drug Allergy Evaluation and Challenge | Drug Allergy History | `reported_drug` | Reported Drug Allergy and Reaction (drug name, dose, indication, reaction type/symptoms, time to onset from exposure, treatment required, year) | `text` |  |  |  |
| Drug Allergy Evaluation and Challenge | Drug Allergy History | `reaction_phenotype` | Reaction Phenotype | `select` |  |  |  |
| Drug Allergy Evaluation and Challenge | Drug Challenge / Desensitization | `risk_stratification` | Risk Stratification for Challenge | `select` |  |  |  |
| Drug Allergy Evaluation and Challenge | Drug Challenge / Desensitization | `challenge_outcome` | Challenge / Desensitization Outcome | `select` |  |  |  |

### Drug Allergy Eval — `drug_allergy_evaluation_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Drug Allergy / ADR Evaluation | Reported Reaction History | `implicated_drug` | Implicated Drug (name + class) | `text` |  |  |  |
| Drug Allergy / ADR Evaluation | Reported Reaction History | `reaction_description` | Reaction Description (symptoms + timing) | `textarea` |  |  |  |
| Drug Allergy / ADR Evaluation | Reported Reaction History | `time_to_onset` | Time from Drug to Reaction | `select` |  |  |  |
| Drug Allergy / ADR Evaluation | Reported Reaction History | `anaphylaxis` | Anaphylaxis occurred (hypotension / airway) | `checkbox` |  |  |  |
| Drug Allergy / ADR Evaluation | Reported Reaction History | `drug_discontinued` | Drug was discontinued at reaction | `checkbox` |  |  |  |
| Drug Allergy / ADR Evaluation | Allergy Evaluation | `penicillin_spt` | Penicillin / Beta-lactam Skin Test (if indicated) | `select` |  |  |  |
| Drug Allergy / ADR Evaluation | Allergy Evaluation | `drug_challenge` | Drug Challenge / Graded Challenge | `select` |  |  |  |
| Drug Allergy / ADR Evaluation | Allergy Evaluation | `cross_reactivity` | Cross-Reactivity Analysis (alternative drug options) | `textarea` |  |  |  |
| Drug Allergy / ADR Evaluation | Resolution and Documentation | `allergy_confirmed` | Drug allergy confirmed — added to permanent medical record | `checkbox` |  |  |  |
| Drug Allergy / ADR Evaluation | Resolution and Documentation | `allergy_de_labeled` | Drug allergy de-labeled (low-risk — removed from allergy list) | `checkbox` |  |  |  |
| Drug Allergy / ADR Evaluation | Resolution and Documentation | `alternative_drug` | Alternative Drug Recommended | `text` |  |  |  |
| Drug Allergy / ADR Evaluation | Resolution and Documentation | `desensitization_planned` | Drug desensitization protocol planned (if no alternative) | `checkbox` |  |  |  |
| Drug Allergy / ADR Evaluation | Resolution and Documentation | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Drug Allergy Evaluation — `allergy_drug_allergy_delabeling_cf`

Screen: 1 page(s) · 2 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Drug Allergy Evaluation and Delabeling | Drug Allergy History | `dae_reported_drug` | Reported Drug Allergy (drug name, dose, route) | `text` |  |  |  |
| Drug Allergy Evaluation and Delabeling | Drug Allergy History | `dae_reaction_type` | Reported Reaction Type | `select` |  |  |  |
| Drug Allergy Evaluation and Delabeling | Drug Allergy History | `dae_reaction_timing` | Timing of Reaction After Drug Exposure | `select` |  |  |  |
| Drug Allergy Evaluation and Delabeling | Drug Allergy History | `dae_original_indication` | Original Indication for the Drug | `text` |  |  |  |
| Drug Allergy Evaluation and Delabeling | Drug Allergy History | `dae_years_ago` | Approximate Years Since Reaction | `text` |  |  |  |
| Drug Allergy Evaluation and Delabeling | Drug Allergy History | `dae_tolerability_now` | Recent Exposure to Same or Related Drugs | `select` |  |  |  |
| Drug Allergy Evaluation and Delabeling | Risk Stratification and Testing Plan | `dae_drug_class` | Drug Class Being Evaluated | `select` |  |  |  |
| Drug Allergy Evaluation and Delabeling | Risk Stratification and Testing Plan | `dae_risk_level` | Risk Stratification for Testing | `select` |  |  |  |
| Drug Allergy Evaluation and Delabeling | Risk Stratification and Testing Plan | `dae_skin_test` | Skin Testing (intradermal + prick test) | `select` |  |  |  |
| Drug Allergy Evaluation and Delabeling | Risk Stratification and Testing Plan | `dae_graded_challenge` | Graded Oral Challenge Performed | `select` |  |  |  |
| Drug Allergy Evaluation and Delabeling | Risk Stratification and Testing Plan | `dae_desensitization` | Desensitization (if drug required despite allergy) | `select` |  |  |  |
| Drug Allergy Evaluation and Delabeling | Risk Stratification and Testing Plan | `dae_record_update` | Allergy Record Update | `select` |  |  |  |
| Drug Allergy Evaluation and Delabeling | Risk Stratification and Testing Plan | `dae_notes` | Drug Allergy Evaluation Notes and Recommendations to Prescribers | `textarea` |  |  |  |

### Eosinophilic Disorders — `eosinophilic_disorders_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Eosinophilic Disorder Evaluation | Eosinophilia Classification | `eos_absolute` | Absolute Eosinophil Count (cells/μL) | `number` |  |  |  |
| Eosinophilic Disorder Evaluation | Eosinophilia Classification | `eos_severity` | Eosinophilia Severity | `select` |  |  |  |
| Eosinophilic Disorder Evaluation | Eosinophilia Classification | `disorder` | Primary Eosinophilic Disorder | `select` |  |  |  |
| Eosinophilic Disorder Evaluation | End-Organ Assessment | `cardiac_involvement` | Cardiac involvement (Löffler endocarditis — echo ordered) | `checkbox` |  |  |  |
| Eosinophilic Disorder Evaluation | End-Organ Assessment | `pulmonary_involvement` | Pulmonary involvement (PIE / Löffler syndrome) | `checkbox` |  |  |  |
| Eosinophilic Disorder Evaluation | End-Organ Assessment | `skin_involvement` | Skin involvement (urticaria / rash / angioedema) | `checkbox` |  |  |  |
| Eosinophilic Disorder Evaluation | End-Organ Assessment | `gi_involvement` | GI involvement (dysphagia / abdominal pain / diarrhea) | `checkbox` |  |  |  |
| Eosinophilic Disorder Evaluation | Treatment | `systemic_corticosteroid` | Systemic corticosteroids prescribed (if HES / end-organ) | `checkbox` |  |  |  |
| Eosinophilic Disorder Evaluation | Treatment | `biologic` | Biologic Therapy | `select` |  |  |  |
| Eosinophilic Disorder Evaluation | Treatment | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Food Allergy — `allergy_food_allergy_cf`

Screen: 1 page(s) · 3 section(s) · 22 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Food Allergy Evaluation | Food Allergens (FALCPA 9 Major Allergens) | `fa_peanut` | Peanut Allergy | `select` |  |  |  |
| Food Allergy Evaluation | Food Allergens (FALCPA 9 Major Allergens) | `fa_tree_nuts` | Tree Nut Allergy (specify: cashew, walnut, almond, pistachio, pecan, hazelnut) | `textarea` |  |  |  |
| Food Allergy Evaluation | Food Allergens (FALCPA 9 Major Allergens) | `fa_milk` | Cow Milk Allergy | `select` |  |  |  |
| Food Allergy Evaluation | Food Allergens (FALCPA 9 Major Allergens) | `fa_egg` | Egg Allergy | `select` |  |  |  |
| Food Allergy Evaluation | Food Allergens (FALCPA 9 Major Allergens) | `fa_wheat` | Wheat Allergy | `select` |  |  |  |
| Food Allergy Evaluation | Food Allergens (FALCPA 9 Major Allergens) | `fa_shellfish` | Shellfish Allergy (crustacean vs mollusk - shrimp, crab, lobster, oyster, clam, scallop) | `textarea` |  |  |  |
| Food Allergy Evaluation | Food Allergens (FALCPA 9 Major Allergens) | `fa_fish` | Fish Allergy (specify species if possible) | `textarea` |  |  |  |
| Food Allergy Evaluation | Food Allergens (FALCPA 9 Major Allergens) | `fa_soy` | Soy Allergy | `select` |  |  |  |
| Food Allergy Evaluation | Food Allergens (FALCPA 9 Major Allergens) | `fa_sesame` | Sesame Allergy (9th major allergen since 2023) | `select` |  |  |  |
| Food Allergy Evaluation | Food Allergens (FALCPA 9 Major Allergens) | `fa_alpha_gal` | Alpha-Gal Syndrome (mammalian meat, tick-bite associated) | `select` |  |  |  |
| Food Allergy Evaluation | Allergy Testing | `fa_skin_prick_test` | Skin Prick Test (SPT) Result | `select` |  |  |  |
| Food Allergy Evaluation | Allergy Testing | `fa_specific_ige` | Allergen-Specific IgE (ImmunoCAP kU/L values for relevant foods) | `text` |  |  |  |
| Food Allergy Evaluation | Allergy Testing | `fa_peanut_component` | Peanut Component Testing (Ara h 2) | `select` |  |  |  |
| Food Allergy Evaluation | Allergy Testing | `fa_oral_food_challenge` | Oral Food Challenge (OFC) - gold standard | `select` |  |  |  |
| Food Allergy Evaluation | Allergy Testing | `fa_oas` | Oral Allergy Syndrome (OAS / Pollen-Food Allergy) | `select` |  |  |  |
| Food Allergy Evaluation | Management | `fa_epipen_prescribed` | Epinephrine Auto-Injector | `select` |  |  |  |
| Food Allergy Evaluation | Management | `fa_action_plan` | Written Emergency Action Plan | `select` |  |  |  |
| Food Allergy Evaluation | Management | `fa_avoidance_counseling` | Avoidance Counseling | `select` |  |  |  |
| Food Allergy Evaluation | Management | `fa_oit` | Oral Immunotherapy (OIT) | `select` |  |  |  |
| Food Allergy Evaluation | Management | `fa_school_504` | School Accommodations (504 Plan) | `select` |  |  |  |
| Food Allergy Evaluation | Management | `fa_tolerance_recheck` | Tolerance Recheck Planning | `select` |  |  |  |
| Food Allergy Evaluation | Management | `fa_notes` | Additional Notes | `textarea` |  |  |  |

### Food Allergy (OIT / OFC) — `allergy_immunology_food_allergy_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Food Allergy — IgE Diagnosis, OFC, OIT, and Anaphylaxis | Food Allergy Diagnosis and Risk Assessment | `ige_diagnosis` | IgE-Mediated Food Allergy Diagnosis (skin prick test (SPT): wheal >=3 mm larger than negative control; serum specific IgE (sIgE); neither SPT nor sIgE alone confirm allergy (sensitivity high, specificity poor); sensitization vs. clinical allergy; gold standard: oral food challenge (OFC/double-blind placebo-controlled food challenge DBPCFC); component-resolved diagnostics (CRD): peanut (Ara h 2 >0.1 kU/L: high PPV for clinical allergy; Ara h 1/3/6; Ara h 8 (birch pollen-related, likely tolerant)); tree nuts (Ana o 3 cashew; Jug r 1 walnut); milk (casein vs. whey — casein less likely to tolerate heated milk); egg (ovomucoid: baked egg intolerant; ovalbumin: may tolerate baked)) | `text` |  |  |  |
| Food Allergy — IgE Diagnosis, OFC, OIT, and Anaphylaxis | Food Allergy Diagnosis and Risk Assessment | `ofc` | Oral Food Challenge Protocol | `select` |  |  |  |
| Food Allergy — IgE Diagnosis, OFC, OIT, and Anaphylaxis | Oral Immunotherapy and Biologics | `peanut_oit` | Oral Immunotherapy (OIT) for Peanut Allergy (Palforzia (peanut OIT; FDA approved Jan 2020; ages 4-17 initial; maintenance 300 mg/day peanut protein; reduces severity of accidental exposure; PALISADE trial: 67% desensitized (able to tolerate 600 mg); does NOT provide full immunity — dietary peanut still restricted; adverse events: abdominal pain most common; eosinophilic esophagitis (EoE) risk 2-3%; anaphylaxis risk; administer with food; avoid exercise 2h after dose; EPICX-4: community OIT; rice flour OIT off-label; egg/milk OIT: PACE trial (egg) — 75% desensitized; tree nut OIT investigational; XOLAIR + OIT combination (dupilumab, omalizumab): safety improvement) | `text` |  |  |  |
| Food Allergy — IgE Diagnosis, OFC, OIT, and Anaphylaxis | Oral Immunotherapy and Biologics | `biologics_allergy` | Biologic Adjuncts for Food Allergy OIT | `select` |  |  |  |

### Food Allergy Eval — `food_allergy_evaluation_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Food Allergy Evaluation | Allergen History | `suspected_foods` | Suspected Food Allergen(s) | `text` |  |  |  |
| Food Allergy Evaluation | Allergen History | `reaction_type` | Reaction Symptoms | `select` |  |  |  |
| Food Allergy Evaluation | Allergen History | `anaphylaxis_history` | History of anaphylaxis to food | `checkbox` |  |  |  |
| Food Allergy Evaluation | Allergen History | `epinephrine_rx` | Epinephrine auto-injector currently prescribed | `checkbox` |  |  |  |
| Food Allergy Evaluation | Allergy Testing | `spt_done` | Skin prick test (SPT) performed | `checkbox` |  |  |  |
| Food Allergy Evaluation | Allergy Testing | `spt_results` | SPT Results (food, wheal size mm) | `text` |  |  |  |
| Food Allergy Evaluation | Allergy Testing | `specific_ige` | Serum-specific IgE (ImmunoCAP) obtained | `checkbox` |  |  |  |
| Food Allergy Evaluation | Allergy Testing | `specific_ige_results` | Specific IgE Results and Classes (kUA/L) | `text` |  |  |  |
| Food Allergy Evaluation | Allergy Testing | `oral_challenge_done` | Oral food challenge (OFC) performed | `checkbox` |  |  |  |
| Food Allergy Evaluation | Allergy Testing | `ofc_result` | OFC Result | `select` |  |  |  |
| Food Allergy Evaluation | Management Plan | `strict_avoidance` | Strict food avoidance counseled | `checkbox` |  |  |  |
| Food Allergy Evaluation | Management Plan | `oit_candidate` | Oral immunotherapy (OIT) candidate (peanut / milk / egg) | `checkbox` |  |  |  |
| Food Allergy Evaluation | Management Plan | `eai_training` | Epinephrine auto-injector training provided | `checkbox` |  |  |  |
| Food Allergy Evaluation | Management Plan | `anaphylaxis_action_plan` | Anaphylaxis action plan issued | `checkbox` |  |  |  |
| Food Allergy Evaluation | Management Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Food Allergy Management — `food_allergy_management_cf`

Screen: 1 page(s) · 2 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Food Allergy Evaluation & Management | Patient & Allergy Profile | `patientId` | Patient | `typeahead` | Y |  |  |
| Food Allergy Evaluation & Management | Patient & Allergy Profile | `visitDate` | Visit Date | `date` | Y |  |  |
| Food Allergy Evaluation & Management | Patient & Allergy Profile | `provider` | Allergist / Immunologist / PCP | `typeahead` | Y |  |  |
| Food Allergy Evaluation & Management | Patient & Allergy Profile | `suspectedAllergens` | Suspected Food Allergens | `textarea` | Y |  |  |
| Food Allergy Evaluation & Management | Patient & Allergy Profile | `reactionHistory` | Reaction History | `textarea` | Y |  |  |
| Food Allergy Evaluation & Management | Allergy Testing & Management | `testing` | Allergy Testing Results | `textarea` | Y |  |  |
| Food Allergy Evaluation & Management | Allergy Testing & Management | `plan` | Assessment & Management Plan | `textarea` | Y |  |  |

### Hereditary Angioedema (HAE) — `allergy_immunology_hereditary_angioedema_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| HAE — C1-INH Deficiency, Acute Treatment, and Prophylaxis | HAE Diagnosis and Types | `hae_types` | HAE Types and Pathophysiology (HEREDITARY ANGIOEDEMA (HAE): bradykinin-mediated swelling (NOT histamine-mediated); DOES NOT respond to epinephrine, antihistamines, or steroids; potentially life-threatening laryngeal edema; TYPE I (80-85%): low C1-INH antigen + function; C1q normal; MUTATION: SERPING1 gene (>500 mutations); autosomal dominant; TYPE II (15-20%): normal or elevated C1-INH antigen BUT dysfunctional; low C4; DIAGNOSIS: low C4 (most sensitive; decreased during attack AND between attacks); TYPE III/nC1INH-HAE (formerly Estrogen-associated): normal C1-INH antigen and function; FXII mutation (factor XII gain-of-function; estrogen activates); estrogen-exacerbated; kasumi-related; WORKUP: C4 (screening; low in 98%); C1q (low = acquired; normal = HAE); C1-INH antigen + function; gene testing; ACQUIRED ANGIOEDEMA: AE-C1INH: lymphoproliferative disease consumes C1-INH; low C1q (unlike HAE); test for lymphoma; BRADYKININ ANGIOEDEMA FROM ACEi: most common cause of drug-induced; bradykinin accumulation; manage with C1-INH or icatibant; HEREDITARY SPECTRUM: same gene can produce different severity; TRIGGERS: infection, stress, trauma, procedures, estrogen (OCP, pregnancy) | `text` |  |  |  |
| HAE — C1-INH Deficiency, Acute Treatment, and Prophylaxis | HAE Diagnosis and Types | `acute_treatment` | Acute HAE Attack Treatment | `select` |  |  |  |
| HAE — C1-INH Deficiency, Acute Treatment, and Prophylaxis | Long-Term Prophylaxis and Trigger Management | `ltp` | Long-Term Prophylaxis Options (INDICATIONS FOR LTP: frequent attacks (>1/month); attacks causing significant disability or risk; difficulty with acute treatment access; LTP OPTIONS: LANADELUMAB (Takhzyro): plasma kallikrein inhibitor; anti-kallikrein monoclonal antibody; 300 mg SC Q2W (can extend to Q4W after 6 months if controlled); HERITAGE trial: 87% reduction in attacks vs. placebo; first-line biologic prophylaxis; BEROTRALSTAT (Orladeyo): oral plasma kallikrein inhibitor; 150 mg PO QD; ZENITH-1 trial: 44% attack reduction; convenience of oral; ICATIBANT HOME THERAPY: self-injection for acute attacks; ALL patients should have home treatment prescribed; C1-INH CONCENTRATE: IV or SC (HAEGARDA: SC C1-INH 60 units/kg 2x/week); more frequent administration; TRANEXAMIC ACID: antifibrinolytic; older agent; less effective; still used in some settings; DANAZOL (attenuated androgen): increases C1-INH production; effective but significant side effects (virilization, hepatotoxicity, polycythemia); avoid in children, pregnancy; reserve for those not tolerating biologics; SHORT-TERM PROPHYLAXIS (STP): before surgery, dental, procedures; C1-INH IV 1000-1500 units OR icatibant 30 mg SC 1-2h before procedure; ANDROGEN PRIMING before procedures) | `text` |  |  |  |
| HAE — C1-INH Deficiency, Acute Treatment, and Prophylaxis | Long-Term Prophylaxis and Trigger Management | `triggers` | Trigger Management and Pediatric HAE | `select` |  |  |  |

### Immunodeficiency — `immunodeficiency_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Immunodeficiency Assessment | Primary Immunodeficiency | `pi_type` | Immunodeficiency Type | `select` |  |  |  |
| Immunodeficiency Assessment | Primary Immunodeficiency | `age_diagnosis` | Age at Diagnosis (years) | `number` |  |  |  |
| Immunodeficiency Assessment | Primary Immunodeficiency | `prior_serious_infections` | Serious infections in past year | `number` |  |  |  |
| Immunodeficiency Assessment | Immunologic Labs | `igg` | IgG (mg/dL) | `number` |  |  |  |
| Immunodeficiency Assessment | Immunologic Labs | `iga` | IgA (mg/dL) | `number` |  |  |  |
| Immunodeficiency Assessment | Immunologic Labs | `igm` | IgM (mg/dL) | `number` |  |  |  |
| Immunodeficiency Assessment | Immunologic Labs | `igg_trough` | IgG Trough Level (if on IVIG) | `number` |  |  |  |
| Immunodeficiency Assessment | Immunologic Labs | `cd4` | CD4 Count (if applicable) | `number` |  |  |  |
| Immunodeficiency Assessment | Treatment and Prophylaxis | `ig_replacement` | Immunoglobulin Replacement | `select` |  |  |  |
| Immunodeficiency Assessment | Treatment and Prophylaxis | `antibiotic_prophylaxis` | Antibiotic prophylaxis prescribed | `checkbox` |  |  |  |
| Immunodeficiency Assessment | Treatment and Prophylaxis | `antifungal_prophylaxis` | Antifungal prophylaxis prescribed | `checkbox` |  |  |  |
| Immunodeficiency Assessment | Treatment and Prophylaxis | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Immunodeficiency Workup — `immunodeficiency_workup_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Primary Immunodeficiency Evaluation | Clinical Features | `age_onset` | Age at Onset of Recurrent Infections (years) | `number` |  |  |  |
| Primary Immunodeficiency Evaluation | Clinical Features | `infection_types` | Types and Organisms of Recurrent Infections | `textarea` |  |  |  |
| Primary Immunodeficiency Evaluation | Clinical Features | `hospitalizations_for_infection` | Hospitalizations for Infection (lifetime) | `number` |  |  |  |
| Primary Immunodeficiency Evaluation | Clinical Features | `family_hx_pid` | Family history of immunodeficiency or recurrent infections | `checkbox` |  |  |  |
| Primary Immunodeficiency Evaluation | Clinical Features | `autoimmune_features` | Autoimmune features (cytopenias, arthritis, IBD) | `checkbox` |  |  |  |
| Primary Immunodeficiency Evaluation | Immunologic Workup | `cbc_diff` | CBC with Differential | `select` |  |  |  |
| Primary Immunodeficiency Evaluation | Immunologic Workup | `igg` | IgG (mg/dL) | `number` |  |  |  |
| Primary Immunodeficiency Evaluation | Immunologic Workup | `iga` | IgA (mg/dL) | `number` |  |  |  |
| Primary Immunodeficiency Evaluation | Immunologic Workup | `igm` | IgM (mg/dL) | `number` |  |  |  |
| Primary Immunodeficiency Evaluation | Immunologic Workup | `ige` | IgE (IU/mL) | `number` |  |  |  |
| Primary Immunodeficiency Evaluation | Immunologic Workup | `vaccine_titers` | Vaccine antibody titers obtained (tetanus/pneumococcal) | `checkbox` |  |  |  |
| Primary Immunodeficiency Evaluation | Immunologic Workup | `lymphocyte_subset` | Lymphocyte subset panel (CD4/CD8/CD19/NK) | `checkbox` |  |  |  |
| Primary Immunodeficiency Evaluation | Diagnosis and Treatment | `pid_diagnosis` | Primary Immunodeficiency Diagnosis | `select` |  |  |  |
| Primary Immunodeficiency Evaluation | Diagnosis and Treatment | `ivig_scig` | IVIG / SCIG prescribed | `checkbox` |  |  |  |
| Primary Immunodeficiency Evaluation | Diagnosis and Treatment | `ivig_dose` | IVIG Dose and Frequency | `text` |  |  |  |
| Primary Immunodeficiency Evaluation | Diagnosis and Treatment | `prophylactic_antibiotics` | Prophylactic antibiotics prescribed | `checkbox` |  |  |  |
| Primary Immunodeficiency Evaluation | Diagnosis and Treatment | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Immunotherapy — `allergy_immunotherapy_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Allergen Immunotherapy Management | Indication and Candidate Assessment | `ait_diagnosis` | Primary Diagnosis for Immunotherapy | `select` |  |  |  |
| Allergen Immunotherapy Management | Indication and Candidate Assessment | `ait_allergens` | Sensitizing Allergens (from SPT/IgE results - pollens, molds, dust mites, pet dander, cockroach) | `textarea` |  |  |  |
| Allergen Immunotherapy Management | Indication and Candidate Assessment | `ait_type` | Immunotherapy Type | `select` |  |  |  |
| Allergen Immunotherapy Management | Build-Up Protocol | `ait_buildup_schedule` | Build-Up Schedule | `select` |  |  |  |
| Allergen Immunotherapy Management | Build-Up Protocol | `ait_current_vial` | Current Vial and Dose (e.g., Vial 3, 0.50 mL) | `text` |  |  |  |
| Allergen Immunotherapy Management | Build-Up Protocol | `ait_buildup_reactions` | Build-Up Adverse Reactions | `select` |  |  |  |
| Allergen Immunotherapy Management | Build-Up Protocol | `ait_premedication` | Premedication for Injections | `select` |  |  |  |
| Allergen Immunotherapy Management | Maintenance Phase | `ait_maintenance_dose` | Maintenance Dose Achieved (e.g., 0.5 mL at 1:1 v/v concentration) | `text` |  |  |  |
| Allergen Immunotherapy Management | Maintenance Phase | `ait_maintenance_interval` | Maintenance Injection Interval | `select` |  |  |  |
| Allergen Immunotherapy Management | Maintenance Phase | `ait_clinical_response` | Clinical Response to Immunotherapy | `select` |  |  |  |
| Allergen Immunotherapy Management | Maintenance Phase | `ait_duration_planned` | Planned Total Duration | `select` |  |  |  |
| Allergen Immunotherapy Management | Maintenance Phase | `ait_completion_status` | Immunotherapy Completion Status | `select` |  |  |  |
| Allergen Immunotherapy Management | Maintenance Phase | `ait_observing_period` | Post-Injection Observation (SCIT) | `select` |  |  |  |
| Allergen Immunotherapy Management | Maintenance Phase | `ait_notes` | Additional Notes | `textarea` |  |  |  |

### Primary Immunodeficiency — `allergy_immunology_immunodeficiency_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Primary Immunodeficiency Evaluation | Clinical Presentation | `warning_signs` | Jeffrey Modell Warning Signs Present | `select` |  |  |  |
| Primary Immunodeficiency Evaluation | Clinical Presentation | `pid_category` | Suspected PID Category | `select` |  |  |  |
| Primary Immunodeficiency Evaluation | Immunologic Workup | `labs` | Immunologic Laboratory Evaluation (CBC + diff; immunoglobulins IgG/IgA/IgM/IgE; vaccine titers (tetanus, pneumococcus, diphtheria) pre and 4-week post-immunization; lymphocyte subset panel CD3/4/8/19/56; DHR for CGD; complement CH50/C3/C4; HIV) | `textarea` |  |  |  |
| Primary Immunodeficiency Evaluation | Immunologic Workup | `igg_therapy` | Immunoglobulin Replacement Therapy (IVIg or SCIg; indication: CVID/XLA/IgG subclass with recurrent infections; goal IgG trough >500-700 mg/dL; dosing: 400-600 mg/kg q3-4 weeks IVIG or weekly SCIg) | `text` |  |  |  |

### Primary Immunodeficiency — `allergy_primary_immunodeficiency_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Primary Immunodeficiency (PID) Management | Diagnosis and Classification | `pid_type` | PID Diagnosis | `select` |  |  |  |
| Primary Immunodeficiency (PID) Management | Diagnosis and Classification | `pid_warning_signs` | Jeffrey Modell Foundation Warning Signs Fulfilled | `select` |  |  |  |
| Primary Immunodeficiency (PID) Management | Diagnosis and Classification | `pid_genetics` | Genetic Testing / Gene Panel | `select` |  |  |  |
| Primary Immunodeficiency (PID) Management | Immunologic Laboratory Assessment | `pid_igg` | IgG Level (mg/dL) — low below 700 in adults; IVIG target trough above 700-800 or higher based on clinical response; IgG half-life 21 days (IVIG) vs constant (SCIG) | `text` |  |  |  |
| Primary Immunodeficiency (PID) Management | Immunologic Laboratory Assessment | `pid_iga_igm` | IgA (mg/dL) and IgM (mg/dL) — document all three immunoglobulins at baseline and annually | `text` |  |  |  |
| Primary Immunodeficiency (PID) Management | Immunologic Laboratory Assessment | `pid_lymphocyte_panel` | Lymphocyte Subset Panel (Flow Cytometry) | `select` |  |  |  |
| Primary Immunodeficiency (PID) Management | Immunologic Laboratory Assessment | `pid_vaccine_response` | Vaccine Response Testing | `select` |  |  |  |
| Primary Immunodeficiency (PID) Management | Immunologic Laboratory Assessment | `pid_nihr_exclusion` | Secondary Causes Excluded | `select` |  |  |  |
| Primary Immunodeficiency (PID) Management | Immunoglobulin Replacement and Prophylaxis | `pid_igg_replacement` | Immunoglobulin Replacement Therapy | `select` |  |  |  |
| Primary Immunodeficiency (PID) Management | Immunoglobulin Replacement and Prophylaxis | `pid_antibiotics_prophylaxis` | Prophylactic Antibiotic Therapy | `select` |  |  |  |
| Primary Immunodeficiency (PID) Management | Immunoglobulin Replacement and Prophylaxis | `pid_bronchiectasis_monitoring` | Bronchiectasis Monitoring (common complication of PID) | `select` |  |  |  |
| Primary Immunodeficiency (PID) Management | Immunoglobulin Replacement and Prophylaxis | `pid_live_vaccine` | Live Vaccine Contraindication | `select` |  |  |  |
| Primary Immunodeficiency (PID) Management | Immunoglobulin Replacement and Prophylaxis | `pid_notes` | PID Management Notes and Immunology Specialist Coordination | `textarea` |  |  |  |

### Primary Immunodeficiency — `immunology_primary_immunodeficiency_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Primary Immunodeficiency — Classification, Diagnosis, and Replacement Therapy | Classification and Common Disorders | `pid_f1` | Primary Immunodeficiency Evaluation: CLASSIFICATION IUIS (OVER 450 KNOWN PRIMARY IMMUNODEFICIENCIES; BROADLY (ANTIBODY DEFICIENCIES MOST COMMON 50-60 pct; COMBINED T AND B CELL DEFICIENCIES; PHAGOCYTE DEFECTS; COMPLEMENT DEFICIENCIES; INNATE IMMUNITY DISORDERS; ANTIBODY DEFICIENCIES (COMMON VARIABLE IMMUNODEFICIENCY CVID MOST COMMON SYMPTOMATIC (LATE ONSET OVER 18Y; LOW IgG AND IgA Or IgM; NORMAL OR LOW B CELLS; ABSENT SPECIFIC ANTIBODY RESPONSE VACCINES; SINOPULMONARY INFECTIONS; AUTOIMMUNITY GRANULOMAS MALIGNANCY RISK; MANAGEMENT IV Or SC IMMUNOGLOBULIN LIFELONG; X-LINKED AGAMMAGLOBULINEMIA XLA BRUTON BTK GENE (BOYS ONLY X-LINKED; B-CELLS ABSENT; NO CIRCULATING IMMUNOGLOBULINS; PRESENTS 6-12 MONTHS MATERNAL ANTIBODY WANES; RECURRENT BACTERIAL INFECTIONS ENCAPSULATED ORGANISMS; IVIG REPLACEMENT LIFELONG; IgG SUBCLASS DEFICIENCY: SPECIFIC SUBCLASS LOW IgG1 IgG2 IgG3 Or IgG4; SELECTIVE IgA DEFICIENCY MOST COMMON 1:700 OFTEN ASYMPTOMATIC; SEVERE COMBINED IMMUNODEFICIENCY SCID (T AND B CELL ABSENT; MULTIPLE GENETIC FORMS ADA DEFICIENCY IL2RG X-LINKED; PRESENTS FIRST YEAR LIFE; FATAL WITHOUT TREATMENT; OPPORTUNISTIC INFECTIONS; HEMATOPOIETIC STEM CELL TRANSPLANT HSCT CURATIVE; GENE THERAPY ADENOSINE DEAMINASE ADA-SCID; DIGEORGE SYNDROME 22Q11.2 DELETION (THYMUS HYPOPLASIA; T-CELL DEFICIENCY; CARDIAC DEFECTS TETRALOGY TRUNCUS; HYPOCALCEMIA PARATHYROID; FACIAL FEATURES; SPECTRUM COMPLETE VERSUS PARTIAL; WISKOTT-ALDRICH SYNDROME WAS (BOYS WASp GENE X-LINKED; TRIAD: ECZEMA THROMBOCYTOPENIA INFECTIONS; T CELL AND B CELL DYSFUNCTION; HSCT CURATIVE; CHRONIC GRANULOMATOUS DISEASE CGD (NADPH OXIDASE DEFECT PHAGOCYTES; RECURRENT BACTERIAL FUNGAL INFECTIONS; ASPERGILLUS CATALASE-POSITIVE ORGANISMS; GRANULOMA FORMATION COLITIS; PROPHYLAXIS TMP-SMX ITRACONAZOLE INTERFERON GAMMA; HSCT GENE THERAPY) | `text` |  |  |  |
| Primary Immunodeficiency — Classification, Diagnosis, and Replacement Therapy | Classification and Common Disorders | `pid_f2` | Immunoglobulin Replacement and Diagnosis | `select` |  |  |  |

### SCIT Injection Visit — `allergy_scit_injection_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Allergen Immunotherapy (SCIT) Injection Visit | Pre-Injection Patient Status | `scit_pre_peak_flow` | Pre-Injection Peak Flow (if asthmatic, L/min) | `text` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Pre-Injection Patient Status | `scit_asthma_control` | Asthma Control Status (Asthmatic Patients) | `select` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Pre-Injection Patient Status | `scit_systemic_illness` | Current Illness or Fever | `select` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Pre-Injection Patient Status | `scit_medications_today` | New Medications Affecting Immunotherapy Risk | `select` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Pre-Injection Patient Status | `scit_last_reaction` | Reaction at Last Visit | `select` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Injection Administration | `scit_vial_set` | Vial Set Number(s) Injected (e.g., Set 1, Set 2, or vial IDs) | `text` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Injection Administration | `scit_vial_concentration` | Current Vial Concentration (Treatment Phase) | `select` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Injection Administration | `scit_dose_ml` | Volume Injected (mL) per Vial Set | `text` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Injection Administration | `scit_injection_site` | Injection Site | `select` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Injection Administration | `scit_dose_adjustment` | Dose Adjustment This Visit | `select` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Injection Administration | `scit_missed_visits` | Missed Injection Interval | `select` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Post-Injection Observation | `scit_wait_time` | Observation Period Completed | `select` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Post-Injection Observation | `scit_local_reaction` | Local Reaction Observed | `select` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Post-Injection Observation | `scit_systemic_reaction` | Systemic Reaction (SR) During Observation | `select` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Post-Injection Observation | `scit_epinephrine_used` | Epinephrine Administration | `select` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Post-Injection Observation | `scit_patient_tolerated` | Overall Visit Outcome | `select` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Post-Injection Observation | `scit_next_visit` | Next Injection Visit Date | `date` |  |  |  |
| Allergen Immunotherapy (SCIT) Injection Visit | Post-Injection Observation | `scit_notes` | Injection Visit Notes (reaction details, dose schedule modifications, patient instructions) | `textarea` |  |  |  |

### Severe Asthma Biologic — `allergy_immunology_asthma_biologic_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Severe Asthma — Biologic Candidate Assessment | Asthma Phenotype and Biomarkers | `eos_count` | Blood Eosinophil Count (cells/μL; ≥150 = eligible for anti-IL5 (mepolizumab/reslizumab/benralizumab); ≥300 = stronger benefit signal; ≥400 = highest responder; also check FeNO (fractional exhaled nitric oxide): ≥25 ppb = type 2 inflammation; serum IgE for anti-IgE eligibility; measure off systemic steroids for accuracy) | `number` |  |  |  |
| Severe Asthma — Biologic Candidate Assessment | Asthma Phenotype and Biomarkers | `feno` | FeNO (ppb; <25 = low; 25-50 = intermediate; >50 = high Th2 inflammation; GINA severe asthma biomarker; dupilumab benefit regardless of eosinophil level if FeNO ≥25; combined biomarker approach; point-of-care NIOX VERO) | `number` |  |  |  |
| Severe Asthma — Biologic Candidate Assessment | Biologic Agent Selection | `biologic_agent` | Recommended Biologic Agent | `select` |  |  |  |
| Severe Asthma — Biologic Candidate Assessment | Biologic Agent Selection | `monitoring` | Response Monitoring (assess at 4-6 months: exacerbation frequency, OCS dose reduction, ACQ-5 or ACT score, FEV1, FeNO; "super-responder" = eos 0 on anti-IL5; "non-responder" at 12 months = consider switching biologic; biomarker-guided switching algorithm; GINA step 5 guidance; patient adherence and inhaler technique re-evaluated before declaring failure) | `text` |  |  |  |

### Severe Asthma Biologics — `allergy_immunology_asthma_biologics_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Severe Asthma — Biologic Therapy Selection | Asthma Phenotype and Biomarkers | `eosinophil_count` | Blood Eosinophil Count (cells/μL; ≥300 predicts Type 2 response; ≥150 threshold for some biologics; highest level in past 12 months) | `number` |  |  |  |
| Severe Asthma — Biologic Therapy Selection | Asthma Phenotype and Biomarkers | `ige_total` | Total IgE (IU/mL; omalizumab eligibility: 30-700 for skin-prick positive allergen-driven asthma) | `number` |  |  |  |
| Severe Asthma — Biologic Therapy Selection | Asthma Phenotype and Biomarkers | `feno` | FeNO (ppb; fractional exhaled nitric oxide; >25 ppb = elevated; >50 ppb = high eosinophilic airway inflammation; dupilumab independent of eosinophil count if FeNO elevated) | `number` |  |  |  |
| Severe Asthma — Biologic Therapy Selection | Biologic Selection | `biologic_choice` | Biologic Selected | `select` |  |  |  |
| Severe Asthma — Biologic Therapy Selection | Biologic Selection | `ocs_sparing` | Oral Corticosteroid Dependence | `select` |  |  |  |

## Urology

### BPH / LUTS — `bph_urology_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| BPH / LUTS Evaluation | Symptom Assessment | `ipss_score` | IPSS Score (0-35) | `number` |  |  |  |
| BPH / LUTS Evaluation | Symptom Assessment | `ipss_category` | IPSS Severity | `select` |  |  |  |
| BPH / LUTS Evaluation | Symptom Assessment | `qol_score` | QoL Score (0-6) | `number` |  |  |  |
| BPH / LUTS Evaluation | Symptom Assessment | `pvr` | Post-Void Residual (mL by US) | `number` |  |  |  |
| BPH / LUTS Evaluation | Symptom Assessment | `max_flow_rate` | Qmax (mL/s, uroflowmetry) | `number` |  |  |  |
| BPH / LUTS Evaluation | Diagnostic Workup | `psa` | PSA (ng/mL) | `number` |  |  |  |
| BPH / LUTS Evaluation | Diagnostic Workup | `prostate_volume_cc` | Prostate Volume (cc by TRUS/US) | `number` |  |  |  |
| BPH / LUTS Evaluation | Diagnostic Workup | `urinalysis_done` | Urinalysis performed | `checkbox` |  |  |  |
| BPH / LUTS Evaluation | Diagnostic Workup | `upper_tract_imaging` | Upper tract imaging (renal US) obtained | `checkbox` |  |  |  |
| BPH / LUTS Evaluation | Treatment Plan | `treatment` | Treatment Selection | `select` |  |  |  |
| BPH / LUTS Evaluation | Treatment Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### BPH / LUTS — `urology_bph_luts_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| BPH and LUTS — Assessment and Management | Diagnosis, Symptom Assessment, and Treatment | `bph_f1` | BPH LUTS Evaluation: EPIDEMIOLOGY (50 pct MEN Over 50Y Histologic BPH; 80 pct Over 80Y; LOWER URINARY TRACT SYMPTOMS LUTS = Storage Voiding Post-Micturition; STORAGE LUTS: Urgency Frequency Nocturia Urgency Incontinence; VOIDING LUTS: Weak Stream Intermittency Hesitancy Straining Incomplete Emptying; POST-MICTURITION Dribbling Incomplete; PATHOPHYSIOLOGY STATIC COMPONENT: Prostate Enlargement Mechanical Obstruction; DYNAMIC COMPONENT: Smooth Muscle Alpha-1 Adrenergic Tone Bladder Neck Internal Sphincter; OVERACTIVE BLADDER OAB Detrusor Overactivity Storage; BLADDER OUTFLOW OBSTRUCTION BOO Detrusor Hypocontractility Or Obstruction Voiding; DIFFERENTIAL DIAGNOSIS (URINARY TRACT INFECTION UTI Urinalysis Culture; PROSTATE CANCER PSA; BLADDER CANCER Hematuria Cystoscopy; URETHRAL STRICTURE Young Men; NEUROGENIC BLADDER DM Parkinson Spinal Cord; MEDICATIONS Diuretics Anticholinergics; INITIAL WORKUP: DIGITAL RECTAL EXAM DRE Prostate Size Consistency; URINALYSIS Infection Hematuria Glucose; SERUM PSA If Concern Cancer; POST-VOID RESIDUAL PVR By Bladder Scan Or Catheterization Under 150 mL Normal; AUA IPSS INTERNATIONAL PROSTATE SYMPTOM SCORE 0-35 Questions (7 Symptom Items Incomplete Emptying Frequency Intermittency Urgency Stream Straining Nocturia; 0-7 Mild 8-19 Moderate 20-35 Severe; QOL Quality Of Life Single Question 0-6); UROFLOWMETRY Qmax Under 10 mL/s Obstruction Likely; 10-15 Equivocal; Pressure-Flow Studies Urodynamics Gold Standard Invasive; RENAL FUNCTION BMP If Obstructive Uropathy Suspected; ULTRASOUND Renal Bilateral Hydronephrosis) | `text` |  |  |  |
| BPH and LUTS — Assessment and Management | Diagnosis, Symptom Assessment, and Treatment | `bph_f2` | Medical and Surgical Treatment for BPH | `select` |  |  |  |

### BPH / LUTS — `urology_bph_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Benign Prostatic Hyperplasia: IPSS Assessment, Medical Therapy, and Procedural Options | BPH Diagnosis: IPSS, Symptom Assessment, and Urodynamics | `bph_class` | BPH Diagnostic Assessment: IPSS International Prostate Symptom Score: 7 Items 0-5 Each; Total 0-7 Mild 8-19 Moderate 20-35 Severe; Quality of Life 0-6; Bother Score; Symptoms: Incomplete Emptying; Frequency; Intermittency; Urgency; Weak Stream; Straining; Nocturia; Urodynamics Uroflowmetry Qmax Below 10 Obstructed 10-15 Equivocal Above 15 Likely Not Obstructed; PVR Post-Void Residual Ultrasound Catheter; Prostate Volume DRE Ultrasound TRUS PSA 0.15 per Gram; PSA Velocity; PSA Density; AUA Guidelines Moderate IPSS 8-19 or Bothersome Mild Treat; Hematuria Workup Cystoscopy; Urinalysis Infection Hematuria; Renal Function BMP; Upper Tract Imaging If Renal Insufficiency Large PVR; Bladder Outlet Obstruction BOO Detrusor Overactivity OAB Overlap; Urodynamics Pressure-Flow Study Gold Standard Obstruction | `select` |  |  |  |
| Benign Prostatic Hyperplasia: IPSS Assessment, Medical Therapy, and Procedural Options | BPH Diagnosis: IPSS, Symptom Assessment, and Urodynamics | `bph_comorbid` | BPH Complications and Differential Diagnosis: Acute Urinary Retention AUR Urologic Emergency; Recurrent UTI; Bladder Stones Calculi; Renal Insufficiency Hydronephrosis; Hematuria BPH Related; Differential: Prostate Cancer Concurrent; Prostatitis Acute Chronic; Bladder Cancer; Neurogenic Bladder; Detrusor Overactivity OAB; Urethral Stricture; Medication-Induced Decongestants Sympathomimetics Anticholinergics; Lifestyle Modifications: Fluid Management Evening Fluid Restriction; Avoid Alcohol Caffeine; Timed Voiding Bladder Training; Treat Constipation; Weight Loss; Watchful Waiting Mild IPSS 0-7 Without Bother; Annual IPSS Review -- BPH COMPLICATIONS AND DIFFERENTIAL: ABSOLUTE INDICATIONS FOR SURGICAL TREATMENT [AUA GUIDELINES]: ACUTE URINARY RETENTION [REQUIRING CATHETERIZATION; ESPECIALLY MULTIPLE EPISODES; SURGICAL PREFERRED]; RENAL INSUFFICIENCY [FROM BOO; BILATERAL HYDRONEPHROSIS]; REFRACTORY HEMATURIA [PROSTATIC ORIGIN]; BLADDER STONES [SECONDARY BOO]; RECURRENT UTI [SECONDARY LARGE PVR]; DIFFERENTIAL DIAGNOSIS: PROSTATE CANCER [CONCURRENT BPH+PROSTATE CANCER COMMON; PSA; BIOPSY IF SUSPICIOUS]; PROSTATITIS [ACUTE BACTERIAL: FEVER CHILLS PERINEAL PAIN; CHRONIC PELVIC PAIN SYNDROME CPPS; ANTIBIOTICS CHRONIC PELVIC PAIN; OVERLAP LUTS]; OAB [OVERACTIVE BLADDER; PRIMARILY DETRUSOR OVERACTIVITY; STORAGE SYMPTOMS PREDOMINATE; ANTIMUSCARINIC BETA-3 AGONIST TREATMENT]; URETHRAL STRICTURE [URETHRAL NARROWING; BULBAR MOST COMMON; HISTORY TRAUMA GONORRHEA CATHETER; URETHROGRAM]; NEUROGENIC BLADDER [STROKE MS PARKINSON DM SPINAL; URODYNAMICS REQUIRED; BACLOFEN CLEAN INTERMITTENT CATH]; MEDICATIONS WORSENING LUTS: ANTICHOLINERGICS [WORSEN VOIDING; INCREASE PVR; CONSTIPATION]; SYMPATHOMIMETICS [ALPHA-AGONIST; DECONGESTANTS [PSEUDOEPHEDRINE PHENYLEPHRINE]; TONE INCREASE SMOOTH MUSCLE; WORSEN VOIDING]; DIURETICS [INCREASE URGENCY FREQUENCY NOCTURIA]; CALCIUM CHANNEL BLOCKERS [DECREASE DETRUSOR CONTRACTION; WORSEN VOIDING]; LIFESTYLE MODIFICATIONS [FIRST-LINE ALL PATIENTS]: FLUID MANAGEMENT [AVOID LARGE FLUID BOLUS; RESTRICT FLUIDS 2H BEFORE BED; TARGET 1.5-2L/DAY; AVOID CAFFEINE ALCOHOL DIURETIC EFFECT]; TIMED VOIDING [Q2-3H REGARDLESS URGE; BLADDER RETRAINING]; CONSTIPATION TREATMENT [INCREASES BLADDER OUTLET PRESSURE]; BEHAVIORAL STRATEGIES; PELVIC FLOOR PT SELECTED | `text` |  |  |  |
| Benign Prostatic Hyperplasia: IPSS Assessment, Medical Therapy, and Procedural Options | BPH Medical and Procedural Treatment: Alpha Blockers, 5-ARIs, and Minimally Invasive | `bph_treatment` | BPH Medical Treatment: Alpha-1 Blockers Monotherapy First-Line: Tamsulosin 0.4mg QD After Meal Most Prescribed; Silodosin 8mg QD Uroselective Alpha1A Most Selective; Alfuzosin 10mg QR; Doxazosin Terazosin Titrate BP Effect; 5-Alpha Reductase Inhibitors 5-ARI Prostate Volume Above 30g: Finasteride Proscar 5mg QD Type 2 Only; Dutasteride Avodart 0.5mg QD Type 1+2 Superior Finasteride; 12 Month Onset Symptom Reduction 25% PSA Reduction; Combination Alpha+5ARI Superior Mono: CombAT Dutasteride+Tamsulosin; Medical Therapy of Prostatic Symptoms MTOPS Finasteride+Doxazosin; PDE5 Inhibitor Tadalafil 5mg QD FDA Approved BPH Erectile Dysfunction; Anticholinergic Antimuscarinic OAB Overlap Caution PVR; Beta-3 Mirabegron Vibegron OAB Storage Symptoms; Minimally Invasive: UroLift Prostatic Urethral Lift; Rezum Water Vapor Thermal Therapy; Aquablation Aquabeam Robotic; TUMT; TUNA; Surgical: TURP Gold Standard Monopolar Bipolar; HoLEP Holmium Laser Large Prostate Above 100g; TURP Band Retrograde Ejaculation 65-90%; Open Simple Prostatectomy Very Large Above 100g | `select` |  |  |  |
| Benign Prostatic Hyperplasia: IPSS Assessment, Medical Therapy, and Procedural Options | BPH Medical and Procedural Treatment: Alpha Blockers, 5-ARIs, and Minimally Invasive | `bph_notes_detail` | BPH Management Plan and Notes: IPSS Score Total and QOL, Prostate Volume Estimate, PSA Level and Density, Post-Void Residual, Qmax Uroflowmetry, Current Medical Therapy and Duration, Sexual Function Impact, Prior Procedures, AUR History, Surgical Candidacy, Ophthalmology IFIS Alert if Tamsulosin, Referral Decision, Next Assessment Date, Coordination Notes | `textarea` |  |  |  |
| Benign Prostatic Hyperplasia: IPSS Assessment, Medical Therapy, and Procedural Options | BPH Management Notes | `bph_mgmt_notes` | BPH Management Notes and Urology Specialty/Primary Care LUTS Management/Pharmacy Tamsulosin Dutasteride/Radiology TRUS/Pathology PSA Interpretation/Anesthesia Surgical Risk/Ophthalmology IFIS Alert/PT Pelvic Floor/Nursing Catheter Care/Social Work/Coordination Notes | `textarea` |  |  |  |

### BPH Comprehensive — `urology_benign_prostatic_hyperplasia_depth_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| BPH — Comprehensive Assessment and Treatment Planning | LUTS Severity and Assessment | `ipss` | IPSS Score (International Prostate Symptom Score; 7 questions 0-5 each; +1 QoL question; 0-7 = mild; 8-19 = moderate; 20-35 = severe; storage symptoms: urgency, frequency, nocturia; voiding: weak stream, intermittency, incomplete emptying, straining) | `number` |  |  |  |
| BPH — Comprehensive Assessment and Treatment Planning | LUTS Severity and Assessment | `qmax` | Qmax Uroflowmetry (mL/sec; >15 = normal; 10-15 = equivocal; <10 = obstructed; paired with post-void residual PVR; volume >150 mL for valid study; Schafer nomogram; free flow vs. pressure-flow study for definitive obstruction diagnosis) | `number` |  |  |  |
| BPH — Comprehensive Assessment and Treatment Planning | Medical Therapy (Active or Prior) | `alpha_blocker` | Alpha-Blocker Therapy | `select` |  |  |  |
| BPH — Comprehensive Assessment and Treatment Planning | Medical Therapy (Active or Prior) | `five_ari` | 5-Alpha Reductase Inhibitor (5-ARI) | `select` |  |  |  |
| BPH — Comprehensive Assessment and Treatment Planning | Surgical Planning | `surgical_approach` | Surgical Approach Selection | `select` |  |  |  |

### BPH Management — `benign_prostatic_hyperplasia_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Benign Prostatic Hyperplasia Management Visit | Patient & Symptom Score | `patientId` | Patient | `typeahead` | Y |  |  |
| Benign Prostatic Hyperplasia Management Visit | Patient & Symptom Score | `visitDate` | Visit Date | `date` | Y |  |  |
| Benign Prostatic Hyperplasia Management Visit | Patient & Symptom Score | `provider` | Urologist / Provider | `typeahead` | Y |  |  |
| Benign Prostatic Hyperplasia Management Visit | Patient & Symptom Score | `ipss` | IPSS Score (International Prostate Symptom Score, 0-35) | `number` | Y |  |  |
| Benign Prostatic Hyperplasia Management Visit | Patient & Symptom Score | `qualityOfLife` | Quality of Life (IPSS Question 8) | `select` | Y |  |  |
| Benign Prostatic Hyperplasia Management Visit | Patient & Symptom Score | `ipssInterpretation` | IPSS Severity | `select` | Y |  |  |
| Benign Prostatic Hyperplasia Management Visit | Workup & Examination | `dre` | Digital Rectal Exam (DRE) | `textarea` | Y |  |  |
| Benign Prostatic Hyperplasia Management Visit | Workup & Examination | `labs` | PSA & Labs | `textarea` | Y |  |  |
| Benign Prostatic Hyperplasia Management Visit | Workup & Examination | `ultrasound` | Prostate Ultrasound / Imaging | `textarea` | Y |  |  |
| Benign Prostatic Hyperplasia Management Visit | Treatment Plan | `plan` | Assessment & Treatment Plan | `textarea` | Y |  |  |

### BPH Management — `urology_bph_management_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Benign Prostatic Hyperplasia (BPH) Management | Symptom Assessment and Evaluation | `bph_ipss` | IPSS / AUA Symptom Score (0-35) | `select` |  |  |  |
| Benign Prostatic Hyperplasia (BPH) Management | Symptom Assessment and Evaluation | `bph_ipss_score` | Total IPSS Score (numeric) and QoL Question Score (0-6) | `text` |  |  |  |
| Benign Prostatic Hyperplasia (BPH) Management | Symptom Assessment and Evaluation | `bph_psa` | Total PSA (ng/mL) and Date — elevated PSA in BPH (usually below 10); rapid PSA rise or above 0.35 ng/mL/year: consider prostate cancer evaluation; 5-ARI halves PSA after 6 months of use | `text` |  |  |  |
| Benign Prostatic Hyperplasia (BPH) Management | Symptom Assessment and Evaluation | `bph_prostate_size` | Prostate Volume (mL) by TRUS or POCUS or DRE Estimate — prostate above 30 mL: 5-ARI more beneficial; prostate above 80 mL: consider surgical evaluation; PSA/prostate volume ratio for cancer suspicion | `text` |  |  |  |
| Benign Prostatic Hyperplasia (BPH) Management | Symptom Assessment and Evaluation | `bph_uroflow` | Peak Urine Flow Rate (Qmax, mL/sec) — normal above 15 mL/sec; Qmax below 10: significant obstruction; Qmax 10-15: borderline; post-void residual (PVR) by ultrasound — PVR above 300 mL increases AUR risk | `text` |  |  |  |
| Benign Prostatic Hyperplasia (BPH) Management | Symptom Assessment and Evaluation | `bph_complications` | BPH Complications | `select` |  |  |  |
| Benign Prostatic Hyperplasia (BPH) Management | Medical Treatment | `bph_alpha_blocker` | Alpha-1 Adrenergic Blocker (fastest symptom relief) | `select` |  |  |  |
| Benign Prostatic Hyperplasia (BPH) Management | Medical Treatment | `bph_5ari` | 5-Alpha Reductase Inhibitor (5-ARI, reduces prostate size) | `select` |  |  |  |
| Benign Prostatic Hyperplasia (BPH) Management | Medical Treatment | `bph_combination` | Combination Alpha-Blocker + 5-ARI Therapy | `select` |  |  |  |
| Benign Prostatic Hyperplasia (BPH) Management | Medical Treatment | `bph_anticholinergic_avoid` | Medications That Worsen BPH (Avoid) | `select` |  |  |  |
| Benign Prostatic Hyperplasia (BPH) Management | Minimally Invasive and Surgical Options | `bph_procedure_history` | Minimally Invasive Surgical Therapy (MIST) | `select` |  |  |  |
| Benign Prostatic Hyperplasia (BPH) Management | Minimally Invasive and Surgical Options | `bph_urology_referral` | Urology Referral Status | `select` |  |  |  |
| Benign Prostatic Hyperplasia (BPH) Management | Minimally Invasive and Surgical Options | `bph_notes` | BPH Management Notes and Bladder Diary Findings | `textarea` |  |  |  |

### Bladder Cancer — `urology_bladder_cancer_surveillance_cf`

Screen: 1 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Bladder Cancer Surveillance and Management | Cancer History and Staging | `bca_stage` | Bladder Cancer Stage | `select` |  |  |  |
| Bladder Cancer Surveillance and Management | Cancer History and Staging | `bca_histology` | Histological Subtype | `select` |  |  |  |
| Bladder Cancer Surveillance and Management | Cancer History and Staging | `bca_smoking` | Smoking History | `select` |  |  |  |
| Bladder Cancer Surveillance and Management | Surveillance and Treatment Protocol | `bca_cystoscopy` | Cystoscopy Surveillance Schedule | `select` |  |  |  |
| Bladder Cancer Surveillance and Management | Surveillance and Treatment Protocol | `bca_bcg` | BCG Intravesical Therapy Status | `select` |  |  |  |
| Bladder Cancer Surveillance and Management | Surveillance and Treatment Protocol | `bca_intravesical_chemo` | Intravesical Chemotherapy (Non-BCG) | `select` |  |  |  |
| Bladder Cancer Surveillance and Management | Surveillance and Treatment Protocol | `bca_systemic_therapy` | Systemic Therapy for Advanced/Metastatic Disease | `select` |  |  |  |
| Bladder Cancer Surveillance and Management | Surveillance and Treatment Protocol | `bca_notes` | Bladder Cancer Management Notes and Urology/Oncology Coordination | `textarea` |  |  |  |

### Erectile Dysfunction — `erectile_dysfunction_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Erectile Dysfunction Evaluation & Management | Patient & Severity | `patientId` | Patient | `typeahead` | Y |  |  |
| Erectile Dysfunction Evaluation & Management | Patient & Severity | `visitDate` | Visit Date | `date` | Y |  |  |
| Erectile Dysfunction Evaluation & Management | Patient & Severity | `provider` | Provider / Urologist | `typeahead` | Y |  |  |
| Erectile Dysfunction Evaluation & Management | Patient & Severity | `iief5` | IIEF-5 Score (International Index of Erectile Function, 5-25) | `number` |  |  |  |
| Erectile Dysfunction Evaluation & Management | Patient & Severity | `iief5Severity` | IIEF-5 Severity Category | `select` | Y |  |  |
| Erectile Dysfunction Evaluation & Management | Patient & Severity | `duration` | Duration of ED | `text` |  |  |  |
| Erectile Dysfunction Evaluation & Management | Patient & Severity | `edType` | ED Type (Clinical Classification) | `select` | Y |  |  |
| Erectile Dysfunction Evaluation & Management | Workup & Cardiovascular Risk | `labs` | Hormone & Metabolic Labs | `textarea` | Y |  |  |
| Erectile Dysfunction Evaluation & Management | Workup & Cardiovascular Risk | `cardiovascularRisk` | Princeton III Cardiovascular Risk Assessment | `textarea` | Y |  |  |
| Erectile Dysfunction Evaluation & Management | Treatment Plan | `plan` | Assessment & Treatment Plan | `textarea` | Y |  |  |

### Erectile Dysfunction — `urology_erectile_dysfunction_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Erectile Dysfunction — Evaluation and Treatment | Assessment and Pharmacotherapy | `ed_f1` | ED Evaluation: DEFINITION: Persistent Inability Achieve or Maintain Erection Satisfactory Sexual Activity Over 6M; PREVALENCE: 40 pct Over 40Y; 70 pct Over 70Y; Strong CV Risk Correlation (Princeton III Consensus); ASSESSMENT: IIEF INTERNATIONAL INDEX ERECTILE FUNCTION (15 Items; SHIM Short 5 Items; Under 21 = ED; 22-25 No ED; Classify Mild/Moderate/Severe); PSYCHOGENIC vs ORGANIC: Morning Erections (NPT; If Present Suggests Psychogenic); Abrupt Onset; Young Age; Relationship Issues; Performance Anxiety; ORGANIC: Gradual Onset; Older; CVD DM Risk; Surgery Radiation; Testosterone Low; LABS: Testosterone Total AM (Over 300 ng/dL Normal; Under 200 Low; 200-300 Borderline; Free T If Obese High SHBG; Repeat AM; LH FSH PRL If Low T; TSH; FBG HbA1c; Lipids CMP); ED AS CV RISK MARKER (Same Pathophysiology Atherosclerosis; ED Precedes CVD 3-5Y; Framingham Risk; If Intermediate CV Risk: Stress Test Before Sex Resume; Princeton Protocol); RISK FACTORS: DM Neuropathy Vasculopathy; HTN; Smoking; Alcohol; Low T Hypogonadism; Medications (Beta-Blockers; SSRIs; Anti-Androgens; Opioids; Diuretics); Pelvic Surgery Radiation (Nerve Sparing RP) | `text` |  |  |  |
| Erectile Dysfunction — Evaluation and Treatment | Assessment and Pharmacotherapy | `ed_f2` | PDE5 Inhibitors and Advanced Therapy | `select` |  |  |  |

### Kidney Stone Management — `urology_kidney_stone_cf`

Screen: 1 page(s) · 3 section(s) · 21 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Kidney Stone Management | Stone Presentation and Imaging | `ks_visit_type` | Visit Type | `select` |  |  |  |
| Kidney Stone Management | Stone Presentation and Imaging | `ks_pain` | Current Flank Pain / Colic | `select` |  |  |  |
| Kidney Stone Management | Stone Presentation and Imaging | `ks_stone_location` | Stone Location on Imaging | `select` |  |  |  |
| Kidney Stone Management | Stone Presentation and Imaging | `ks_stone_size` | Largest Stone Size on CT (mm) | `text` |  |  |  |
| Kidney Stone Management | Stone Presentation and Imaging | `ks_hu_density` | Hounsfield Unit Density on CT (HU) — affects ESWL success (below 1000 HU favors ESWL) | `text` |  |  |  |
| Kidney Stone Management | Stone Presentation and Imaging | `ks_hydronephrosis` | Hydronephrosis | `select` |  |  |  |
| Kidney Stone Management | Stone Presentation and Imaging | `ks_infection` | Infection (Struvite Stone or Obstructed Infected Kidney) | `select` |  |  |  |
| Kidney Stone Management | Stone Composition and Metabolic Profile | `ks_composition_type` | Stone Composition (if analyzed) | `select` |  |  |  |
| Kidney Stone Management | Stone Composition and Metabolic Profile | `ks_24h_urine_done` | 24-Hour Urine Metabolic Workup | `select` |  |  |  |
| Kidney Stone Management | Stone Composition and Metabolic Profile | `ks_24h_volume` | 24h Urine Volume (mL/day) — target above 2500 mL | `text` |  |  |  |
| Kidney Stone Management | Stone Composition and Metabolic Profile | `ks_24h_calcium` | 24h Urine Calcium (mg/day) — normal below 200 mg/day women, below 250 mg/day men | `text` |  |  |  |
| Kidney Stone Management | Stone Composition and Metabolic Profile | `ks_24h_oxalate` | 24h Urine Oxalate (mg/day) — normal below 40 mg/day | `text` |  |  |  |
| Kidney Stone Management | Stone Composition and Metabolic Profile | `ks_24h_citrate` | 24h Urine Citrate (mg/day) — target above 320 mg/day (low citrate = hypocitraturia; potassium citrate supplementation) | `text` |  |  |  |
| Kidney Stone Management | Stone Composition and Metabolic Profile | `ks_24h_uric_acid` | 24h Urine Uric Acid (mg/day) — target below 600 mg/day | `text` |  |  |  |
| Kidney Stone Management | Stone Composition and Metabolic Profile | `ks_24h_ph` | 24h Urine pH — low pH (below 5.5) favors uric acid stones; alkalinize with potassium citrate | `text` |  |  |  |
| Kidney Stone Management | Treatment Plan | `ks_met_alpha_blocker` | Medical Expulsive Therapy (MET) — stones 5-10 mm | `select` |  |  |  |
| Kidney Stone Management | Treatment Plan | `ks_intervention` | Planned Surgical Intervention | `select` |  |  |  |
| Kidney Stone Management | Treatment Plan | `ks_prevention_meds` | Preventive Medications | `select` |  |  |  |
| Kidney Stone Management | Treatment Plan | `ks_hydration_goal` | Hydration Counseling | `select` |  |  |  |
| Kidney Stone Management | Treatment Plan | `ks_diet_counseling` | Dietary Recommendations (low sodium, low oxalate for calcium-oxalate, low purine for uric acid, adequate dietary calcium 1000-1200 mg/day — paradoxically reduces urinary oxalate) | `textarea` |  |  |  |
| Kidney Stone Management | Treatment Plan | `ks_notes` | Kidney Stone Management Notes | `textarea` |  |  |  |

### Kidney Stones — `urology_kidney_stones_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Nephrolithiasis — Evaluation and Management | Diagnosis and Stone Type | `stone_f1` | Kidney Stone Evaluation: PRESENTATION: Acute Unilateral Flank Pain Colicky Radiating Groin Labia or Testicle; Hematuria 90 pct (Can Be Absent); Nausea Vomiting; URGENCY: Obstructing Stone + Fever = EMERGENCY (Sepsis Source; Drain Immediately); AKI Solitary Kidney; Intractable Pain or Vomiting; IMAGING: CT KUB Non-Contrast GOLD STANDARD (99 pct Sensitivity; Identify Size Location Density HU); US (Preferred Pregnancy Children; Lower Sensitivity; Detect Hydronephrosis); KUB Plain Film (Miss Radiolucent Uric Acid Stones); STONE TYPES: CALCIUM OXALATE 75-80 pct (Radiopaque; Oxalate Food: Spinach Nuts Chocolate; Low Urinary Citrate; Low Fluid; Hypercalciuria); CALCIUM PHOSPHATE (RTA; Hyperparathyroid; High Urine pH); URIC ACID 10 pct (Radiolucent CT; Low Urine pH; Gout; DM; Metabolic Sy; Alkalinize Urine); STRUVITE STAGHORN (Urease Bacteria Proteus Klebsiella; Infected; Large Branching; Women UTI); CYSTINE (Rare; Genetic; Low Urine pH; Hexagonal Crystals; Alkalinize; D-Pen); 24H URINE METABOLIC WORKUP: Indicated Recurrent or High-Risk (Volume; Calcium; Oxalate; Citrate; Uric Acid; pH; Sodium; Creatinine) | `text` |  |  |  |
| Nephrolithiasis — Evaluation and Management | Diagnosis and Stone Type | `stone_f2` | Acute Management and Surgical Intervention | `select` |  |  |  |
