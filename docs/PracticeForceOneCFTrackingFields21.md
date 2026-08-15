---
title: "PracticeForceOneCFTrackingFields21"
---

# CF Tracking — Field-Level Detail (part 21 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Billing**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Billing

### Billing Rules — `billing_rules_cf`

Screen: 1 page(s) · 1 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `PAYERS_MASTER`, `PAYER_RULES`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Billing Rule | Rule Details | `id` | Rule ID | `text` |  |  |  |
| Billing Rule | Rule Details | `type` | Rule Type | `select` |  |  |  |
| Billing Rule | Rule Details | `cptCode` | CPT Code | `text` |  |  |  |
| Billing Rule | Rule Details | `maxUnits` | Max Units | `number` |  |  |  |
| Billing Rule | Rule Details | `description` | Description | `textarea` |  |  |  |
| Billing Rule | Rule Details | `rationale` | Rationale | `textarea` |  |  |  |
| Billing Rule | Rule Details | `effectiveDate` | Effective Date | `date` |  |  |  |
| Billing Rule | Rule Details | `payerName` | Payer (if payer-specific) | `text` |  |  |  |
| Billing Rule | Rule Details | `timelyFilingDays` | Timely Filing Days | `number` |  |  |  |
| Billing Rule | Rule Details | `modifier` | Modifier | `text` |  |  |  |

### Charge Automation — `charge_capture_cf`

Screen: 2 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ICD�?'CPT Auto-Suggest Rules | Charge Rule | `icdCode` | ICD-10 Code | `text` | Y | icdCode |  |
| ICD�?'CPT Auto-Suggest Rules | Charge Rule | `cptCode` | CPT Code | `text` | Y | cptCode |  |
| ICD�?'CPT Auto-Suggest Rules | Charge Rule | `description` | Description | `text` |  | description |  |
| ICD�?'CPT Auto-Suggest Rules | Charge Rule | `autoSuggest` | Auto-Suggest on Charge Entry | `checkbox` |  | autoSuggest |  |
| ICD�?'CPT Auto-Suggest Rules | Charge Rule | `active` | Active | `checkbox` |  | active |  |
| Controlled Rx Policies | Controlled Substance Policy | `scheduleLevel` | CSA Schedule | `select` | Y | scheduleLevel |  |
| Controlled Rx Policies | Controlled Substance Policy | `faxBanned` | Fax Banned | `checkbox` |  | faxBanned |  |
| Controlled Rx Policies | Controlled Substance Policy | `requiresDeaNumber` | Requires DEA Number | `checkbox` |  | requiresDeaNumber |  |
| Controlled Rx Policies | Controlled Substance Policy | `notes` | Policy Notes | `textarea` |  | notes |  |

### Charge Details — `patient_charge_details_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Charges | PC / SC Split | `pcCharge` | PC Charge ($) | `number` |  |  |  |
| Charges | PC / SC Split | `scCharge` | SC Charge ($) | `number` |  |  |  |
| Charges | PC / SC Split | `totalCharge` | Total Charge ($) | `computed` |  |  |  |
| Charges | Insurance & Copay | `expectedInsurancePayment` | Expected insurance payment ($) | `number` |  |  |  |
| Charges | Insurance & Copay | `patientResponsibility` | Patient responsibility ($) | `number` |  |  |  |
| Charges | Insurance & Copay | `copayAmount` | Copay amount ($) | `number` |  |  |  |
| Charges | Insurance & Copay | `copayCollected` | Copay collected ($) | `number` |  |  |  |
| Charges | Insurance & Copay | `copayWaived` | Copay waived | `checkbox` |  |  |  |
| Charges | Insurance & Copay | `copayWaivedReason` | Waiver reason | `text` |  |  |  |
| Charges | Write-Off & Notes | `writeOffAmount` | Write-off amount ($) | `number` |  |  |  |
| Charges | Write-Off & Notes | `writeOffReason` | Write-off reason | `text` |  |  |  |
| Charges | Write-Off & Notes | `feeScheduleOverride` | Fee schedule override | `checkbox` |  |  |  |
| Charges | Write-Off & Notes | `overrideReason` | Override reason | `text` |  |  |  |
| Charges | Write-Off & Notes | `statementNote` | Statement note | `text` |  |  |  |

### Charge Entry — `cpt_charge_entry_cf`

Screen: 1 page(s) · 4 section(s) · 22 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CPT Charge Entry | Visit / Encounter | `patientId` | Patient | `typeahead` | Y |  |  |
| CPT Charge Entry | Visit / Encounter | `encounterId` | Encounter ID | `text` | Y |  |  |
| CPT Charge Entry | Visit / Encounter | `dos2` | Date of Service | `date` | Y |  |  |
| CPT Charge Entry | Visit / Encounter | `renderingProvider` | Rendering Provider | `typeahead` | Y |  |  |
| CPT Charge Entry | Visit / Encounter | `facilityType` | Facility Type | `select` |  |  |  |
| CPT Charge Entry | CPT / Procedure Codes | `cpt1` | CPT Code 1 | `text` | Y |  |  |
| CPT Charge Entry | CPT / Procedure Codes | `cpt1Modifier` | Modifier 1 | `text` |  |  |  |
| CPT Charge Entry | CPT / Procedure Codes | `cpt1Units` | Units | `number` |  |  |  |
| CPT Charge Entry | CPT / Procedure Codes | `cpt2` | CPT Code 2 | `text` |  |  |  |
| CPT Charge Entry | CPT / Procedure Codes | `cpt2Modifier` | Modifier 2 | `text` |  |  |  |
| CPT Charge Entry | CPT / Procedure Codes | `cpt3` | CPT Code 3 | `text` |  |  |  |
| CPT Charge Entry | CPT / Procedure Codes | `cpt3Modifier` | Modifier 3 | `text` |  |  |  |
| CPT Charge Entry | CPT / Procedure Codes | `additionalCPTs` | Additional CPTs / G-Codes | `textarea` |  |  |  |
| CPT Charge Entry | Diagnoses (ICD-10) | `dx1` | Primary Diagnosis (ICD-10) | `text` | Y |  |  |
| CPT Charge Entry | Diagnoses (ICD-10) | `dx2` | Secondary Diagnosis | `text` |  |  |  |
| CPT Charge Entry | Diagnoses (ICD-10) | `dx3` | Third Diagnosis | `text` |  |  |  |
| CPT Charge Entry | Diagnoses (ICD-10) | `dx4` | Fourth Diagnosis | `text` |  |  |  |
| CPT Charge Entry | Billing & Compliance Notes | `e_m_level` | E/M Level Justification | `select` |  |  |  |
| CPT Charge Entry | Billing & Compliance Notes | `timeIfUsed` | Total Time (minutes) — if time-based | `number` |  |  |  |
| CPT Charge Entry | Billing & Compliance Notes | `telehealth95Modifier` | Telehealth: Modifier 95 appended; synchronous AV technology | `checkbox` |  |  |  |
| CPT Charge Entry | Billing & Compliance Notes | `coderNotes` | Coder Notes / Flags | `textarea` |  |  |  |
| CPT Charge Entry | Billing & Compliance Notes | `chargeStatus` | Charge Status | `select` | Y |  |  |

### Charge Master — `CHARGE_MASTER`

Screen: 1 page(s) · 1 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `CHARGE_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Fee Schedule Entry | Fee Schedule Entry | `cmId` | Entry ID (read-only) | `text` |  |  |  |
| Fee Schedule Entry | Fee Schedule Entry | `cmPracticeId` | Practice ID (required) | `text` | Y |  |  |
| Fee Schedule Entry | Fee Schedule Entry | `cmCptCode` | CPT/HCPCS Code (required) | `text` | Y |  |  |
| Fee Schedule Entry | Fee Schedule Entry | `cmModifier` | Modifier (optional) | `text` |  |  |  |
| Fee Schedule Entry | Fee Schedule Entry | `cmDescription` | Description | `text` |  |  |  |
| Fee Schedule Entry | Fee Schedule Entry | `cmDefaultChargeAmount` | Default Charge Amount ($) | `text` | Y |  |  |
| Fee Schedule Entry | Fee Schedule Entry | `cmDefaultUnits` | Default Units (integer) | `text` |  |  |  |
| Fee Schedule Entry | Fee Schedule Entry | `cmEffectiveDate` | Effective Date (YYYY-MM-DD) | `text` |  |  |  |
| Fee Schedule Entry | Fee Schedule Entry | `cmActive` | Active | `checkbox` |  |  |  |
| Fee Schedule Entry | Fee Schedule Entry | `cmNotes` | Notes | `textarea` |  |  |  |

### Charge Master — `charge_master_cf`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `CHARGE_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CPT Code | CPT Information | `cptCode` | CPT Code | `text` |  | cptCode |  |
| CPT Code | CPT Information | `modifier` | Modifier | `text` |  | modifier |  |
| CPT Code | CPT Information | `description` | Description | `text` |  | description |  |
| CPT Code | CPT Information | `defaultChargeAmount` | Default Charge | `text` |  | defaultChargeAmount |  |
| CPT Code | CPT Information | `defaultUnits` | Default Units | `text` |  | defaultUnits |  |
| CPT Code | CPT Information | `active` | Active | `text` |  | active |  |
| CPT Code | CPT Information | `effectiveDate` | Effective Date | `text` |  | effectiveDate |  |
| CPT Code | CPT Information | `notes` | Notes | `textarea` |  | notes |  |

### Charge Review — `charge_review_workqueue_cf`

Screen: 0 page(s) · 0 section(s) · 0 field(s) · UI STUB · DB BUILT · tables `CHARGE_REVIEW_QUEUE`, `ENCOUNTERS`

_No fields declared (nav stub)._

### Charge Review — `charge_review_wq_cf`

Screen: 0 page(s) · 0 section(s) · 0 field(s) · UI STUB · DB BUILT · tables `CHARGE_REVIEW_QUEUE`, `ENCOUNTERS`

_No fields declared (nav stub)._

### Charge Review — `charge_review_cf`

Screen: 2 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLAIM_LINES`, `CLAIM_STATUS_HISTORY`, `ELIGIBILITY_CHECKS`, `PATIENT_INSURANCES`, `PAYERS_MASTER`, `PAYER_RULES`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Charge Review | Claim Summary | `claimNumber` | Claim # | `text` |  | claimNumber |  |
| Charge Review | Claim Summary | `serviceDateFrom` | Date of Service | `text` |  | serviceDateFrom |  |
| Charge Review | Claim Summary | `status` | Status | `text` |  | status |  |
| Charge Review | Claim Summary | `totalCharge` | Total Charge | `text` |  | totalCharge |  |
| Charge Review | Claim Summary | `balance` | Balance | `text` |  | balance |  |
| Charge Review | Claim Summary | `ediStatus` | EDI Status | `text` |  | ediStatus |  |
| Charge Review | Diagnoses & Notes | `diagnosisCodes` | Diagnosis Codes (ICD-10) | `text` |  | diagnosisCodes |  |
| Charge Review | Diagnoses & Notes | `billingNotes` | Billing Notes | `textarea` |  | billingNotes |  |
| Charge Lines | CPT Codes & Charges | `cptCode` | CPT Code | `text` |  | cptCode |  |
| Charge Lines | CPT Codes & Charges | `description` | Description | `text` |  | description |  |
| Charge Lines | CPT Codes & Charges | `units` | Units | `text` |  | units |  |
| Charge Lines | CPT Codes & Charges | `chargeAmount` | Charge | `text` |  | chargeAmount |  |

### Charge Review — `CHARGE_REVIEW`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `CHARGE_REVIEW_QUEUE`, `ENCOUNTERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Charge Review Item | Charge Review | `crId` | Review Item ID (read-only) | `text` |  |  |  |
| Charge Review Item | Charge Review | `crPracticeId` | Practice ID | `text` |  |  |  |
| Charge Review Item | Charge Review | `crPatientId` | Patient ID | `text` |  |  |  |
| Charge Review Item | Charge Review | `crEncounterId` | Encounter ID | `text` |  |  |  |
| Charge Review Item | Charge Review | `crProcedureCode` | Procedure Code (CPT/HCPCS) | `text` |  |  |  |
| Charge Review Item | Charge Review | `crChargeAmount` | Charge Amount ($) | `text` |  |  |  |
| Charge Review Item | Charge Review | `crStatus` | Status (pending/approved/rejected) | `text` |  |  |  |
| Charge Review Item | Charge Review | `crNote` | Review Note | `textarea` |  |  |  |

### Claim Status Codes — `claim_status_codes_reg_cf`

Screen: 0 page(s) · 0 section(s) · 0 field(s) · UI STUB · DB BUILT · tables `CLAIM_STATUS_CODES`, `PRACTICES`

_No fields declared (nav stub)._

### Claim Submission — `claim_submission_cf`

Screen: 1 page(s) · 2 section(s) · 14 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Claim Submission & Status Tracking | Filter Claims | `patientId` | Patient | `typeahead` |  |  |  |
| Claim Submission & Status Tracking | Filter Claims | `payerId` | Payer | `typeahead` |  |  |  |
| Claim Submission & Status Tracking | Filter Claims | `claimStatus` | Claim Status | `select` |  |  |  |
| Claim Submission & Status Tracking | Filter Claims | `dosFrom` | DOS From | `date` |  |  |  |
| Claim Submission & Status Tracking | Filter Claims | `dosTo` | DOS To | `date` |  |  |  |
| Claim Submission & Status Tracking | Claim Detail | `claimId` | Claim ID | `text` |  |  |  |
| Claim Submission & Status Tracking | Claim Detail | `icn` | ICN / Payer Claim Number | `text` |  |  |  |
| Claim Submission & Status Tracking | Claim Detail | `claimType` | Claim Type | `select` |  |  |  |
| Claim Submission & Status Tracking | Claim Detail | `billType` | Bill Type (UB-04) | `select` |  |  |  |
| Claim Submission & Status Tracking | Claim Detail | `priorAuthNumber` | Prior Auth Number | `text` |  |  |  |
| Claim Submission & Status Tracking | Claim Detail | `referringNpi` | Referring Provider NPI | `text` |  |  |  |
| Claim Submission & Status Tracking | Claim Detail | `renderingNpi` | Rendering Provider NPI | `text` | Y |  |  |
| Claim Submission & Status Tracking | Claim Detail | `billingNpi` | Billing NPI | `text` | Y |  |  |
| Claim Submission & Status Tracking | Claim Detail | `placeOfService` | Place of Service | `select` |  |  |  |

### Claims — `claims_cf`

Screen: 2 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLAIM_LINES`, `CLAIM_STATUS_HISTORY`, `CLINICAL_TASKS`, `ELIGIBILITY_CHECKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PAYER_RULES`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Claim Detail | Scrub Results | `statusReason` | Scrub Errors / Status Reason | `textarea` |  |  |  |
| Claim Detail | Scrub Results | `internalNotes` | NCCI / MUE Warnings | `textarea` |  |  |  |
| Claim Detail | Claim | `claimNumber` | Claim # | `text` |  |  |  |
| Claim Detail | Claim | `status` | Status | `text` |  |  |  |
| Claim Detail | Claim | `claimType` | Type | `text` |  |  |  |
| Claim Detail | Claim | `serviceDateFrom` | Service From | `text` |  |  |  |
| Claim Detail | Claim | `serviceDateTo` | Service To | `text` |  |  |  |
| Claim Detail | Claim | `ediStatus` | EDI Status | `text` |  |  |  |
| Claim Detail | Claim | `totalCharge` | Charged | `text` |  |  |  |
| Claim Detail | Claim | `totalPaid` | Paid | `text` |  |  |  |
| Claim Detail | Claim | `balance` | Balance | `text` |  |  |  |
| Claim Detail | Claim | `totalAllowed` | Allowed | `text` |  |  |  |
| Claim Detail | Claim | `daysInAr` | Days in A/R | `text` |  |  |  |
| Claim Detail | Claim | `agingBucket` | Age Bucket | `text` |  |  |  |
| Claim Detail | Claim | `submittedAt` | Submitted | `text` |  |  |  |
| Claim Detail | Claim | `createdAt` | Created | `text` |  |  |  |
| Claim Detail | Claim | `billingNotes` | Billing Notes | `textarea` |  |  |  |
| Claim Lines | Service Lines | `claimLines` | Billed service lines | `collection` |  |  |  |

### Claims Adjustment — `claims_adjustment_cf`

Screen: 1 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Claim Adjustment / Rebill | Original Claim | `patientId` | Patient | `typeahead` | Y |  |  |
| Claim Adjustment / Rebill | Original Claim | `originalClaimId` | Original Claim ID | `text` | Y |  |  |
| Claim Adjustment / Rebill | Original Claim | `adjustmentType` | Adjustment Type | `select` | Y |  |  |
| Claim Adjustment / Rebill | Original Claim | `adjustmentReason` | Reason for Adjustment | `textarea` | Y |  |  |
| Claim Adjustment / Rebill | Adjustment Line Items | `adjustedLines` | Adjusted Line Items | `textarea` | Y |  |  |
| Claim Adjustment / Rebill | Adjustment Line Items | `supportingDocs` | Supporting Documentation | `textarea` |  |  |  |

### Claims Audit — `claims_audit_cf`

Screen: 1 page(s) · 3 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Claims Audit | Audit Scope | `auditType` | Audit Type | `select` | Y |  |  |
| Claims Audit | Audit Scope | `dateFrom` | Claim Date From | `date` | Y |  |  |
| Claims Audit | Audit Scope | `dateTo` | Claim Date To | `date` | Y |  |  |
| Claims Audit | Audit Scope | `provider` | Provider (if specific) | `typeahead` |  |  |  |
| Claims Audit | Audit Scope | `payer` | Payer (if specific) | `text` |  |  |  |
| Claims Audit | Audit Scope | `cptCodes` | CPT Codes Under Review | `textarea` |  |  |  |
| Claims Audit | Audit Scope | `sampleSize` | Sample Size (#claims) | `number` |  |  |  |
| Claims Audit | Audit Findings | `claimsReviewed` | Claims Reviewed | `number` |  |  |  |
| Claims Audit | Audit Findings | `claimsCorrect` | Claims Correct (#) | `number` |  |  |  |
| Claims Audit | Audit Findings | `claimsWithErrors` | Claims with Errors (#) | `number` |  |  |  |
| Claims Audit | Audit Findings | `errorRate` | Error Rate (%) | `number` |  |  |  |
| Claims Audit | Audit Findings | `overbillingAmount` | Overbilling Amount ($) | `number` |  |  |  |
| Claims Audit | Audit Findings | `underbillingAmount` | Underbilling Amount ($) | `number` |  |  |  |
| Claims Audit | Audit Findings | `errorTypes` | Error Types Identified | `textarea` |  |  |  |
| Claims Audit | Audit Findings | `auditFindings` | Detailed Findings | `textarea` |  |  |  |
| Claims Audit | Corrective Action Plan | `refundRequired` | Refund / repayment required | `checkbox` |  |  |  |
| Claims Audit | Corrective Action Plan | `refundAmount` | Refund Amount ($) | `number` |  |  |  |
| Claims Audit | Corrective Action Plan | `educationRequired` | Provider / coder education required | `checkbox` |  |  |  |
| Claims Audit | Corrective Action Plan | `correctiveActions` | Corrective Action Plan | `textarea` |  |  |  |
| Claims Audit | Corrective Action Plan | `followUpDate` | Follow-up Review Date | `date` |  |  |  |
| Claims Audit | Corrective Action Plan | `auditNotes` | Audit Notes | `textarea` |  |  |  |

### Claims Submission — `claims_submission_wq_cf`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLAIM_LINES`, `CLAIM_STATUS_HISTORY`, `CLINICAL_TASKS`, `ELIGIBILITY_CHECKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PAYER_RULES`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Claim | Claim Details | `claim_number` | Claim Number | `text` |  |  |  |
| Claim | Claim Details | `patient_id` | Patient | `typeahead` |  |  |  |
| Claim | Claim Details | `payer_name` | Payer | `text` |  |  |  |
| Claim | Claim Details | `service_date` | Service Date | `date` |  |  |  |
| Claim | Claim Details | `billed_amount` | Billed Amount | `number` |  |  |  |
| Claim | Claim Details | `status` | Status | `select` |  |  |  |
| Claim | Claim Details | `notes` | Notes | `textarea` |  |  |  |

### Coding Reference — `coding_search_cf`

Screen: 1 page(s) · 1 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `CHARGE_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Code Detail | Code Information | `code` | Code | `text` |  |  |  |
| Code Detail | Code Information | `code_system` | Code System | `select` |  |  |  |
| Code Detail | Code Information | `short_description` | Short Description | `text` |  |  |  |
| Code Detail | Code Information | `long_description` | Long Description | `textarea` |  |  |  |
| Code Detail | Code Information | `category` | Category | `text` |  |  |  |
| Code Detail | Code Information | `status_indicator` | Status Indicator | `text` |  |  |  |
| Code Detail | Code Information | `global_period` | Global Period | `text` |  |  |  |
| Code Detail | Code Information | `is_active` | Active | `checkbox` |  |  |  |
| Code Detail | Code Information | `requires_modifier` | Requires Modifier | `checkbox` |  |  |  |
| Code Detail | Code Information | `bilateral_allowed` | Bilateral Allowed | `checkbox` |  |  |  |
| Code Detail | Code Information | `cm_description` | Practice Description | `text` |  |  |  |
| Code Detail | Code Information | `cm_amount` | Practice Fee | `number` |  |  |  |
| Code Detail | Code Information | `cm_units` | Default Units | `number` |  |  |  |

### Denial Worklist — `worklists_cf`

Screen: 1 page(s) · 1 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `DENIALS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Denial Detail | Denial Information | `claimId` | Claim ID | `text` |  | claimId |  |
| Denial Detail | Denial Information | `denialDate` | Denial Date | `text` |  | denialDate |  |
| Denial Detail | Denial Information | `denialCode` | Denial Code | `text` |  | denialCode |  |
| Denial Detail | Denial Information | `denialReason` | Denial Reason | `text` |  | denialReason |  |
| Denial Detail | Denial Information | `denialCategory` | Category | `text` |  | denialCategory |  |
| Denial Detail | Denial Information | `deniedAmount` | Denied Amount | `text` |  | deniedAmount |  |
| Denial Detail | Denial Information | `appealDeadline` | Appeal Deadline | `text` |  | appealDeadline |  |
| Denial Detail | Denial Information | `daysUntilDeadline` | Days Until Deadline | `text` |  | daysUntilDeadline |  |
| Denial Detail | Denial Information | `status` | Status | `text` |  | status |  |
| Denial Detail | Denial Information | `priority` | Priority | `text` |  | priority |  |
| Denial Detail | Denial Information | `priorityScore` | Priority Score | `text` |  | priorityScore |  |
| Denial Detail | Denial Information | `assignedTo` | Assigned To | `text` |  | assignedTo |  |
| Denial Detail | Denial Information | `suggestedAction` | Suggested Action | `textarea` |  | suggestedAction |  |
| Denial Detail | Denial Information | `appealSuccessProbability` | Appeal Success % | `text` |  | appealSuccessProbability |  |

### Denials — `denials_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `APPEALS`, `AUDIT_LOG`, `CLAIMS`, `DENIALS`, `DENIAL_REASONINGS`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Denial Details | Denial | `claimNumber` | Claim number | `text` |  |  |  |
| Denial Details | Denial | `payerName` | Payer | `text` |  |  |  |
| Denial Details | Denial | `denialDate` | Denial date | `date` |  |  |  |
| Denial Details | Denial | `amount` | Denied amount | `number` |  |  |  |
| Denial Details | Denial | `denialCode` | Denial code (CARC) | `text` |  |  |  |
| Denial Details | Denial | `status` | Status | `select` |  |  |  |
| Denial Details | Denial | `denialReason` | Denial reason | `textarea` |  |  |  |
| Denial Details | Resolution | `assignedTo` | Assigned to | `typeahead` |  |  |  |
| Denial Details | Resolution | `dueDate` | Follow-up due | `date` |  |  |  |
| Denial Details | Resolution | `workNotes` | Work notes | `textarea` |  |  |  |

### E&M Coding — `encounter_em_coding_cf`

Screen: 1 page(s) · 4 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| E&M Level Coder Assist | Coding Inputs (2021 AMA Guidelines) | `encounterId` | Encounter ID | `text` | Y |  |  |
| E&M Level Coder Assist | Coding Inputs (2021 AMA Guidelines) | `patientType` | Patient Type | `select` | Y |  |  |
| E&M Level Coder Assist | Coding Inputs (2021 AMA Guidelines) | `numDx` | Number of Diagnoses / Management Options | `number` | Y |  |  |
| E&M Level Coder Assist | Coding Inputs (2021 AMA Guidelines) | `numTests` | Number of Data Sources Reviewed | `number` |  |  |  |
| E&M Level Coder Assist | Coding Inputs (2021 AMA Guidelines) | `numMeds` | Number of Medications Managed | `number` |  |  |  |
| E&M Level Coder Assist | Coding Inputs (2021 AMA Guidelines) | `timeMinutes` | Total Time on Date of Service (minutes) | `number` |  |  |  |
| E&M Level Coder Assist | Coding Inputs (2021 AMA Guidelines) | `complexity` | MDM Complexity (manual override) | `select` |  |  |  |
| E&M Level Coder Assist | Suggested E&M Level | `suggestedLevel` | Suggested E&M Level | `text` |  |  |  |
| E&M Level Coder Assist | Suggested E&M Level | `suggestedCpt` | Suggested CPT Code | `text` |  |  |  |
| E&M Level Coder Assist | Suggested E&M Level | `mdmBasis` | Coding Basis (MDM vs. Time) | `text` |  |  |  |
| E&M Level Coder Assist | Suggested E&M Level | `rationale` | Coding Rationale | `textarea` |  |  |  |
| E&M Level Coder Assist | Provider Decision | `finalCpt` | Final CPT Code | `text` |  |  |  |
| E&M Level Coder Assist | Provider Decision | `finalEmLevel` | Final E&M Level | `select` |  |  |  |
| E&M Level Coder Assist | Provider Decision | `overrideReason` | Override Reason (if different from suggestion) | `textarea` |  |  |  |
| E&M Level Coder Assist | Provider Decision | `modifier` | Modifier | `select` |  |  |  |
| E&M Level Coder Assist | CCI Edit Check | `cptCodesToCheck` | Additional CPT Codes (for CCI check) | `textarea` |  |  |  |
| E&M Level Coder Assist | CCI Edit Check | `cciResults` | CCI Edit Results | `textarea` |  |  |  |

### EDI Queue — `edi_queue_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Queue Item | EDI Queue Item | `claimId` | Claim | `text` |  | claim_id |  |
| Queue Item | EDI Queue Item | `transactionType` | Transaction | `text` |  | transaction_type |  |
| Queue Item | EDI Queue Item | `status` | Status | `text` |  |  |  |
| Queue Item | EDI Queue Item | `createdAt` | Queued | `text` |  | created_at |  |

### EDI Submissions — `edi_cf`

Screen: 3 page(s) · 5 section(s) · 22 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `AUTHORIZATIONS`, `CLAIMS`, `CLAIM_EXCEPTIONS`, `PATIENTS`, `PAYERS_MASTER`, `REMITTANCE_BATCHES`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| EDI Submission | Submission Details | `id` | Claim ID | `text` |  |  |  |
| EDI Submission | Submission Details | `claimNumber` | Claim Number | `text` |  |  |  |
| EDI Submission | Submission Details | `ediBatchId` | EDI Batch ID | `text` |  |  |  |
| EDI Submission | Submission Details | `ediControlNumber` | Control Number | `text` |  |  |  |
| EDI Submission | Submission Details | `transactionType` | Transaction Type | `text` |  |  |  |
| EDI Submission | Submission Details | `ediStatus` | EDI Status | `select` |  |  |  |
| EDI Submission | Submission Details | `clearinghouse` | Clearinghouse | `text` |  |  |  |
| EDI Submission | Submission Details | `submittedAt` | Submitted At | `text` |  |  |  |
| EDI Submission | Submission Details | `submittedBy` | Submitted By | `text` |  |  |  |
| EDI Submission | Submission Details | `submissionCount` | Submission Count | `number` |  |  |  |
| Submit Claims | Stage for EDI | `ediClaimIds` | Claim IDs (comma-separated) | `textarea` | Y |  |  |
| Submit Claims | Result | `ediBatchResultId` | Batch ID | `text` |  |  |  |
| Submit Claims | Result | `ediResultControlNumber` | Control Number | `text` |  |  |  |
| Submit Claims | Result | `ediSubmittedCount` | Submitted Count | `number` |  |  |  |
| Submit Claims | Result | `ediResultMessage` | Message | `text` |  |  |  |
| Ingest EDI Response | Paste X12 Response | `ediResponseType` | Response Type | `select` |  |  |  |
| Ingest EDI Response | Paste X12 Response | `ediX12Body` | X12 Content (paste raw EDI) | `textarea` |  |  |  |
| Ingest EDI Response | Parse Result | `ediMatchedCount` | Matched | `number` |  |  |  |
| Ingest EDI Response | Parse Result | `ediUpdatedCount` | Updated | `number` |  |  |  |
| Ingest EDI Response | Parse Result | `ediUnmatchedCount` | Unmatched | `number` |  |  |  |
| Ingest EDI Response | Parse Result | `ediExceptionsPersisted` | Exceptions Created | `number` |  |  |  |
| Ingest EDI Response | Parse Result | `ediParseClassification` | Classification | `text` |  |  |  |

### ERA / EOB Review — `era_eob_review_cf`

Screen: 1 page(s) · 2 section(s) · 16 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Electronic Remittance Advice (ERA) & EOB Review | Filter | `payerId` | Payer | `typeahead` |  |  |  |
| Electronic Remittance Advice (ERA) & EOB Review | Filter | `checkDate` | Check / EFT Date | `date` |  |  |  |
| Electronic Remittance Advice (ERA) & EOB Review | Filter | `checkNumber` | Check / EFT Number | `text` |  |  |  |
| Electronic Remittance Advice (ERA) & EOB Review | Filter | `status` | Status | `select` |  |  |  |
| Electronic Remittance Advice (ERA) & EOB Review | Payment Line Review | `patientId` | Patient | `typeahead` |  |  |  |
| Electronic Remittance Advice (ERA) & EOB Review | Payment Line Review | `claimId` | Claim ID | `text` |  |  |  |
| Electronic Remittance Advice (ERA) & EOB Review | Payment Line Review | `cptCode` | CPT Code | `text` |  |  |  |
| Electronic Remittance Advice (ERA) & EOB Review | Payment Line Review | `billedAmount` | Billed Amount ($) | `number` |  |  |  |
| Electronic Remittance Advice (ERA) & EOB Review | Payment Line Review | `allowedAmount` | Allowed Amount ($) | `number` |  |  |  |
| Electronic Remittance Advice (ERA) & EOB Review | Payment Line Review | `paidAmount` | Paid Amount ($) | `number` |  |  |  |
| Electronic Remittance Advice (ERA) & EOB Review | Payment Line Review | `adjustmentAmount` | Contractual Adjustment ($) | `number` |  |  |  |
| Electronic Remittance Advice (ERA) & EOB Review | Payment Line Review | `adjustmentReason` | Adjustment Reason Code | `text` |  |  |  |
| Electronic Remittance Advice (ERA) & EOB Review | Payment Line Review | `denialCode` | Denial Reason Code (if denied) | `text` |  |  |  |
| Electronic Remittance Advice (ERA) & EOB Review | Payment Line Review | `remarkCode` | Remark Code | `text` |  |  |  |
| Electronic Remittance Advice (ERA) & EOB Review | Payment Line Review | `patientResponsibility` | Patient Responsibility ($) | `number` |  |  |  |
| Electronic Remittance Advice (ERA) & EOB Review | Payment Line Review | `postAction` | Post Action | `select` |  |  |  |

### ERA Remittance — `era_remittance_cf`

Screen: 1 page(s) · 2 section(s) · 14 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ERA Batch | Batch Header | `checkNumber` | Check / EFT Number | `text` |  |  |  |
| ERA Batch | Batch Header | `checkDate` | Check Date | `date` |  |  |  |
| ERA Batch | Batch Header | `eraType` | ERA Type | `select` |  |  |  |
| ERA Batch | Batch Header | `payerName` | Payer Name | `text` | Y |  |  |
| ERA Batch | Batch Header | `payerId` | Payer ID | `text` |  |  |  |
| ERA Batch | Batch Header | `payerNpi` | Payer NPI | `text` |  |  |  |
| ERA Batch | Batch Header | `payeeName` | Payee Name | `text` |  | payeeName |  |
| ERA Batch | Batch Header | `payeeNpi` | Payee NPI | `text` |  | payeeNpi |  |
| ERA Batch | Batch Header | `source` | Source | `select` |  |  |  |
| ERA Batch | Batch Header | `status` | Status | `text` |  | status |  |
| ERA Batch | Amounts | `totalCharge` | Total Billed | `number` |  |  |  |
| ERA Batch | Amounts | `totalPayment` | Total Payment | `number` | Y |  |  |
| ERA Batch | Amounts | `totalAdjustment` | Total Adjustment | `number` |  |  |  |
| ERA Batch | Amounts | `notes` | Notes | `textarea` |  |  |  |

### Eligibility Svc Map — `eligibility_svc_map_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `ENCOUNTERS`, `PATIENTS`, `PROVIDERS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Visit Type �?' Service Category | Service Category Mapping | `visitTypeCode` | Visit Type Code | `text` | Y | visitTypeCode |  |
| Visit Type �?' Service Category | Service Category Mapping | `serviceCategoryCode` | X12 Service Category Code | `text` | Y | serviceCategoryCode |  |
| Visit Type �?' Service Category | Service Category Mapping | `serviceCategoryLabel` | Service Category Label | `text` |  | serviceCategoryLabel |  |
| Visit Type �?' Service Category | Service Category Mapping | `copayAutoUpdate` | Auto-Update Copay from 271 Response | `checkbox` |  | copayAutoUpdate |  |

### Fee Schedule — `fee_schedule_cf`

Screen: 1 page(s) · 4 section(s) · 28 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Practice Fee Schedule Configuration | Fee Schedule Details | `scheduleId` | Schedule Name / ID | `text` | Y |  |  |
| Practice Fee Schedule Configuration | Fee Schedule Details | `effectiveDate` | Effective Date | `date` | Y |  |  |
| Practice Fee Schedule Configuration | Fee Schedule Details | `endDate` | End Date (leave blank if current) | `date` |  |  |  |
| Practice Fee Schedule Configuration | Fee Schedule Details | `payer` | Payer / Plan (blank = standard chargemaster) | `text` |  |  |  |
| Practice Fee Schedule Configuration | Fee Schedule Details | `specialty` | Specialty / Department | `select` |  |  |  |
| Practice Fee Schedule Configuration | E/M Visit Fees | `fee99202` | 99202 — New patient, low complexity ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | E/M Visit Fees | `fee99203` | 99203 — New patient, moderate complexity ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | E/M Visit Fees | `fee99204` | 99204 — New patient, high complexity ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | E/M Visit Fees | `fee99205` | 99205 — New patient, very high complexity ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | E/M Visit Fees | `fee99212` | 99212 — Established patient, minimal ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | E/M Visit Fees | `fee99213` | 99213 — Established patient, low ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | E/M Visit Fees | `fee99214` | 99214 — Established patient, moderate ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | E/M Visit Fees | `fee99215` | 99215 — Established patient, high ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | Preventive & Wellness Fees | `feeG0438` | G0438 — Initial AWV ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | Preventive & Wellness Fees | `feeG0439` | G0439 — Subsequent AWV ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | Preventive & Wellness Fees | `fee99385` | 99385 — New patient preventive, 18-39yo ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | Preventive & Wellness Fees | `fee99386` | 99386 — New patient preventive, 40-64yo ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | Preventive & Wellness Fees | `fee99387` | 99387 — New patient preventive, 65+yo ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | Preventive & Wellness Fees | `fee99395` | 99395 — Est patient preventive, 18-39yo ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | Preventive & Wellness Fees | `fee99396` | 99396 — Est patient preventive, 40-64yo ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | Preventive & Wellness Fees | `fee99397` | 99397 — Est patient preventive, 65+yo ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | Common Procedures | `fee36415` | 36415 — Venipuncture ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | Common Procedures | `fee93000` | 93000 — ECG with interpretation ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | Common Procedures | `fee94010` | 94010 — Spirometry ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | Common Procedures | `fee20610` | 20610 — Arthrocentesis, major joint ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | Common Procedures | `fee12001` | 12001 — Laceration repair, simple ($) | `number` |  |  |  |
| Practice Fee Schedule Configuration | Common Procedures | `additionalFees` | Additional CPT Fees (CPT → amount) | `textarea` |  |  |  |
| Practice Fee Schedule Configuration | Common Procedures | `notes` | Fee Schedule Notes | `textarea` |  |  |  |

### Financial Policy — `patient_financial_responsibility_cf`

Screen: 1 page(s) · 4 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Financial Responsibility Acknowledgment | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Financial Responsibility Acknowledgment | Patient | `signedDate` | Date Signed | `date` | Y |  |  |
| Financial Responsibility Acknowledgment | Patient | `completedBy` | Completed By (staff) | `typeahead` |  |  |  |
| Financial Responsibility Acknowledgment | Insurance / Coverage | `primaryInsurance` | Primary Insurance | `text` |  |  |  |
| Financial Responsibility Acknowledgment | Insurance / Coverage | `secondaryInsurance` | Secondary Insurance (if any) | `text` |  |  |  |
| Financial Responsibility Acknowledgment | Insurance / Coverage | `eligibilityVerified` | Insurance eligibility verified today | `checkbox` |  |  |  |
| Financial Responsibility Acknowledgment | Insurance / Coverage | `copayCollected` | Copay Collected ($) | `number` |  |  |  |
| Financial Responsibility Acknowledgment | Insurance / Coverage | `copayWaived` | Copay waived (financial hardship documented) | `checkbox` |  |  |  |
| Financial Responsibility Acknowledgment | Patient Acknowledgments | `ackAssignment` | Patient authorizes assignment of benefits to this practice | `checkbox` |  |  |  |
| Financial Responsibility Acknowledgment | Patient Acknowledgments | `ackBalance` | Patient accepts responsibility for any balance not covered by insurance | `checkbox` |  |  |  |
| Financial Responsibility Acknowledgment | Patient Acknowledgments | `ackCopay` | Patient understands copays / deductibles / coinsurance are due at time of service | `checkbox` |  |  |  |
| Financial Responsibility Acknowledgment | Patient Acknowledgments | `ackCollections` | Patient understands unpaid balances may be sent to collections after 90 days | `checkbox` |  |  |  |
| Financial Responsibility Acknowledgment | Patient Acknowledgments | `ackCancellation` | Patient acknowledges 24-hour cancellation policy (fee for no-shows) | `checkbox` |  |  |  |
| Financial Responsibility Acknowledgment | Payment Plan (if applicable) | `paymentPlanNeeded` | Payment plan established | `checkbox` |  |  |  |
| Financial Responsibility Acknowledgment | Payment Plan (if applicable) | `monthlyAmount` | Monthly Payment Amount ($) | `number` |  |  |  |
| Financial Responsibility Acknowledgment | Payment Plan (if applicable) | `paymentPlanStartDate` | First Payment Date | `date` |  |  |  |
| Financial Responsibility Acknowledgment | Payment Plan (if applicable) | `totalBalance` | Total Outstanding Balance ($) | `number` |  |  |  |
| Financial Responsibility Acknowledgment | Payment Plan (if applicable) | `financialAssistance` | Financial Assistance Program | `select` |  |  |  |

### Group NPI Rules — `group_npi_rules_cf`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Group NPI Rules | NPI Rule | `groupNpi` | Group NPI | `text` | Y | groupNpi |  |
| Group NPI Rules | NPI Rule | `providerId` | Provider ID | `text` |  | providerId |  |
| Group NPI Rules | NPI Rule | `facilityId` | Facility ID | `text` |  | facilityId |  |
| Group NPI Rules | NPI Rule | `payerId` | Payer ID | `text` |  | payerId |  |
| Group NPI Rules | NPI Rule | `effectiveDateFrom` | Effective From | `date` |  | effectiveDateFrom |  |
| Group NPI Rules | NPI Rule | `effectiveDateTo` | Effective To | `date` |  | effectiveDateTo |  |
| Group NPI Rules | NPI Rule | `description` | Description | `text` |  | description |  |

### ICD-CPT Rules — `icd_cpt_rules_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ICD-CPT Rule | Code Association | `icd10_code` | ICD-10 Code | `text` | Y |  |  |
| ICD-CPT Rule | Code Association | `cpt_code` | CPT Code | `text` | Y |  |  |
| ICD-CPT Rule | Code Association | `cpt_description` | CPT Description | `text` |  |  |  |
| ICD-CPT Rule | Code Association | `category` | Category (Lab, Procedure, etc.) | `text` |  |  |  |
| ICD-CPT Rule | Charge Defaults | `default_fee` | Default Fee | `number` |  |  |  |
| ICD-CPT Rule | Charge Defaults | `units` | Default Units | `number` |  |  |  |
| ICD-CPT Rule | Charge Defaults | `modifiers` | Modifiers (comma-separated) | `text` |  |  |  |
| ICD-CPT Rule | Charge Defaults | `auto_suggest` | Auto-Suggest on Diagnosis Entry | `checkbox` |  |  |  |
| ICD-CPT Rule | Charge Defaults | `active` | Active | `checkbox` |  |  |  |

### Insurance Verification — `insurance_verification_cf`

Screen: 1 page(s) · 3 section(s) · 22 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Insurance Eligibility Verification | Patient & Appointment | `patientId` | Patient | `typeahead` | Y |  |  |
| Insurance Eligibility Verification | Patient & Appointment | `verificationDate` | Verification Date | `date` | Y |  |  |
| Insurance Eligibility Verification | Patient & Appointment | `dos3` | Date of Service | `date` | Y |  |  |
| Insurance Eligibility Verification | Patient & Appointment | `verifiedBy` | Verified By | `typeahead` | Y |  |  |
| Insurance Eligibility Verification | Patient & Appointment | `verificationMethod` | Verification Method | `select` |  |  |  |
| Insurance Eligibility Verification | Primary Insurance | `primaryPayer` | Primary Payer Name | `text` | Y |  |  |
| Insurance Eligibility Verification | Primary Insurance | `primaryPlan` | Plan Name / Product | `text` |  |  |  |
| Insurance Eligibility Verification | Primary Insurance | `primaryMemberId2` | Member ID | `text` | Y |  |  |
| Insurance Eligibility Verification | Primary Insurance | `primaryGroupId` | Group ID | `text` |  |  |  |
| Insurance Eligibility Verification | Primary Insurance | `primaryEffDate` | Coverage Effective Date | `date` |  |  |  |
| Insurance Eligibility Verification | Primary Insurance | `primaryTermDate` | Coverage Termination Date | `date` |  |  |  |
| Insurance Eligibility Verification | Primary Insurance | `primaryEligible` | Eligibility Status | `select` | Y |  |  |
| Insurance Eligibility Verification | Primary Insurance | `primaryCopay` | Copay — Office Visit ($) | `number` |  |  |  |
| Insurance Eligibility Verification | Primary Insurance | `primaryDeductible` | Annual Deductible ($) | `number` |  |  |  |
| Insurance Eligibility Verification | Primary Insurance | `primaryDeductibleMet` | Deductible Met YTD ($) | `number` |  |  |  |
| Insurance Eligibility Verification | Primary Insurance | `primaryOOPMax` | Out-of-Pocket Maximum ($) | `number` |  |  |  |
| Insurance Eligibility Verification | Primary Insurance | `primaryOOPMet` | Out-of-Pocket Met YTD ($) | `number` |  |  |  |
| Insurance Eligibility Verification | Primary Insurance | `primaryNotes` | Coverage Notes / Restrictions | `textarea` |  |  |  |
| Insurance Eligibility Verification | Secondary Insurance | `secondaryPayer` | Secondary Payer Name | `text` |  |  |  |
| Insurance Eligibility Verification | Secondary Insurance | `secondaryMemberId2` | Secondary Member ID | `text` |  |  |  |
| Insurance Eligibility Verification | Secondary Insurance | `secondaryEligible` | Secondary Eligibility | `select` |  |  |  |
| Insurance Eligibility Verification | Secondary Insurance | `coordinationOfBenefits` | Coordination of Benefits (COB) | `select` |  |  |  |

### Medical Evidence Gaps — `medical_evidence_gaps_cf`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLAIM_LINES`, `PATIENTS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dx Coverage Gap Analysis | Coverage Gap | `claimId` | Claim ID | `text` |  | claimId |  |
| Dx Coverage Gap Analysis | Coverage Gap | `cptCode` | CPT Code | `text` |  | cptCode |  |
| Dx Coverage Gap Analysis | Coverage Gap | `missingDx` | Missing Dx Code | `text` |  | missingDx |  |
| Dx Coverage Gap Analysis | Coverage Gap | `rule` | Coverage Rule | `text` |  | rule |  |
| Dx Coverage Gap Analysis | Coverage Gap | `suggestedDx` | Suggested Dx | `text` |  | suggestedDx |  |

### Patient Ledger — `patient_ledger_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Financial Ledger | Patient Account | `patientId` | Patient | `typeahead` | Y |  |  |
| Patient Financial Ledger | Patient Account | `ledgerDate` | Transaction Date | `date` | Y |  |  |
| Patient Financial Ledger | Patient Account | `accountNumber` | Account Number | `text` |  |  |  |
| Patient Financial Ledger | Transaction Entry | `transactionType` | Transaction Type | `select` | Y |  |  |
| Patient Financial Ledger | Transaction Entry | `transactionAmount` | Amount ($) | `number` |  |  |  |
| Patient Financial Ledger | Transaction Entry | `encounterId` | Related Encounter / Claim ID | `text` |  |  |  |
| Patient Financial Ledger | Transaction Entry | `dos` | Date of Service | `date` |  |  |  |
| Patient Financial Ledger | Transaction Entry | `cptCodes` | CPT Code(s) | `text` |  |  |  |
| Patient Financial Ledger | Transaction Entry | `diagnosisCodes` | ICD-10 Code(s) | `text` |  |  |  |
| Patient Financial Ledger | Transaction Entry | `payer` | Payer | `text` |  |  |  |
| Patient Financial Ledger | Balance & Notes | `prevBalance` | Previous Balance ($) | `number` |  |  |  |
| Patient Financial Ledger | Balance & Notes | `newBalance` | New Balance After Transaction ($) | `number` |  |  |  |
| Patient Financial Ledger | Balance & Notes | `agingBucket` | Aging Bucket | `select` |  |  |  |
| Patient Financial Ledger | Balance & Notes | `notes` | Transaction Notes | `textarea` |  |  |  |
| Patient Financial Ledger | Balance & Notes | `collectionStatus` | Collection Status | `select` |  |  |  |

### Patient Statements — `statement_cf`

Screen: 1 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB BUILT · tables `CLAIMS`, `PATIENTS`, `PATIENT_STATEMENTS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Statement | Statement Info | `statementDate` | Statement Date | `text` |  | statementDate |  |
| Statement | Statement Info | `patientName` | Patient | `text` |  | patientName |  |
| Statement | Statement Info | `balance` | Balance Due | `text` |  | balance |  |
| Statement | Statement Info | `dueDate` | Due Date | `text` |  | dueDate |  |
| Statement | Statement Info | `status` | Status | `text` |  | status |  |
| Statement | Notes | `notes` | Internal Notes | `textarea` |  | notes |  |

### Payment Details — `payment_detail_cf`

Screen: 1 page(s) · 2 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `PAYMENTS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Payment | Payment Information | `paymentNumber` | Payment Number | `text` |  | paymentNumber |  |
| Payment | Payment Information | `claimNumber` | Claim Number | `text` |  | claimNumber |  |
| Payment | Payment Information | `payerClaimNumber` | Payer Claim # | `text` |  | payerClaimNumber |  |
| Payment | Payment Information | `paymentDate` | Payment Date | `text` |  | paymentDate |  |
| Payment | Payment Information | `postedDate` | Posted Date | `text` |  | postedDate |  |
| Payment | Payment Information | `serviceDate` | Service Date | `text` |  | serviceDate |  |
| Payment | Payment Information | `patientName` | Patient | `text` |  | patientName |  |
| Payment | Payment Information | `payerName` | Payer | `text` |  | payerName |  |
| Payment | Payment Information | `paymentType` | Payment Type | `text` |  | paymentType |  |
| Payment | Payment Information | `status` | Status | `text` |  | status |  |
| Payment | Financials | `totalCharge` | Total Charge | `text` |  | totalCharge |  |
| Payment | Financials | `allowedAmount` | Allowed Amount | `text` |  | allowedAmount |  |
| Payment | Financials | `paidAmount` | Paid Amount | `text` |  | paidAmount |  |
| Payment | Financials | `adjustedAmount` | Adjusted Amount | `text` |  | adjustedAmount |  |
| Payment | Financials | `patientResponsibility` | Patient Responsibility | `text` |  | patientResponsibility |  |

### Payment Plans — `payment_plans_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Payment Plan | Payment Plan Setup | `patientId` | Patient | `typeahead` | Y |  |  |
| Patient Payment Plan | Payment Plan Setup | `planDate` | Plan Start Date | `date` | Y |  |  |
| Patient Payment Plan | Payment Plan Setup | `totalBalance` | Total Balance Owed ($) | `number` | Y |  |  |
| Patient Payment Plan | Payment Plan Setup | `downPayment` | Down Payment ($) | `number` |  |  |  |
| Patient Payment Plan | Payment Plan Setup | `paymentAmount` | Monthly Payment Amount ($) | `number` | Y |  |  |
| Patient Payment Plan | Payment Plan Setup | `paymentFrequency` | Payment Frequency | `select` |  |  |  |
| Patient Payment Plan | Payment Plan Setup | `planDuration` | Plan Duration (months) | `number` | Y |  |  |
| Patient Payment Plan | Payment Plan Setup | `interestRate` | Interest Rate (%) | `number` |  |  |  |
| Patient Payment Plan | Payment Method | `paymentMethod` | Payment Method | `select` |  |  |  |
| Patient Payment Plan | Payment Method | `autopayAuthorized` | Patient authorizes automatic payment processing | `checkbox` |  |  |  |
| Patient Payment Plan | Payment Method | `lastFour` | Last 4 Digits (card/account) | `text` |  |  |  |
| Patient Payment Plan | Payment Method | `firstPaymentDate` | First Payment Due Date | `date` |  |  |  |
| Patient Payment Plan | Plan Status & History | `planStatus` | Plan Status | `select` |  |  |  |
| Patient Payment Plan | Plan Status & History | `paymentsReceived` | Payments Received (#) | `number` |  |  |  |
| Patient Payment Plan | Plan Status & History | `amountPaid` | Amount Paid to Date ($) | `number` |  |  |  |
| Patient Payment Plan | Plan Status & History | `remainingBalance` | Remaining Balance ($) | `number` |  |  |  |
| Patient Payment Plan | Plan Status & History | `nextPaymentDate` | Next Payment Due | `date` |  |  |  |
| Patient Payment Plan | Plan Status & History | `planNotes` | Plan Notes | `textarea` |  |  |  |

### Payment Plans — `payment_plan_cf`

Screen: 2 page(s) · 3 section(s) · 23 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Plan | Plan | `patientId` | Patient | `lookup` | Y |  |  |
| Plan | Plan | `guarantorId` | Guarantor ID | `text` |  |  |  |
| Plan | Plan | `status` | Status | `select` |  |  |  |
| Plan | Plan | `totalBalance` | Total Balance ($) | `number` | Y |  |  |
| Plan | Plan | `downPayment` | Down Payment ($) | `number` |  |  |  |
| Plan | Plan | `planBalance` | Plan Balance ($) | `number` |  |  |  |
| Plan | Plan | `installmentAmount` | Installment Amount ($) | `number` | Y |  |  |
| Plan | Plan | `frequency` | Frequency | `select` |  |  |  |
| Plan | Plan | `startDate` | Start Date | `date` |  |  |  |
| Plan | Plan | `endDate` | End Date | `date` |  |  |  |
| Plan | Plan | `paidAmount` | Paid to Date ($) | `number` |  |  |  |
| Plan | Plan | `remainingBalance` | Remaining Balance ($) | `number` |  |  |  |
| Plan | Auto-Pay | `autoPayEnrolled` | Auto-Pay Enrolled | `checkbox` |  |  |  |
| Plan | Auto-Pay | `autoPayMethod` | Payment Method | `select` |  |  |  |
| Plan | Auto-Pay | `notes` | Notes | `textarea` |  |  |  |
| Installments | Installment Schedule | `dueDate` | Due Date | `date` |  |  |  |
| Installments | Installment Schedule | `amountDue` | Amount Due ($) | `number` |  |  |  |
| Installments | Installment Schedule | `amountPaid` | Amount Paid ($) | `number` |  |  |  |
| Installments | Installment Schedule | `status` | Status | `select` |  |  |  |
| Installments | Installment Schedule | `paidDate` | Paid Date | `date` |  |  |  |
| Installments | Installment Schedule | `paymentMethod` | Payment Method | `text` |  |  |  |
| Installments | Installment Schedule | `transactionRef` | Transaction Ref | `text` |  |  |  |
| Installments | Installment Schedule | `notes` | Notes | `text` |  |  |  |

### Payments — `payment_cf`

Screen: 1 page(s) · 2 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `PAYMENTS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Payment | Payment Info | `paymentDate` | Payment Date | `text` |  | paymentDate |  |
| Payment | Payment Info | `payerName` | Payer | `text` |  | payerName |  |
| Payment | Payment Info | `paymentAmount` | Amount | `text` |  | paymentAmount |  |
| Payment | Payment Info | `paymentType` | Type | `text` |  | paymentType |  |
| Payment | Payment Info | `checkNumber` | Check/Ref Number | `text` |  | checkNumber |  |
| Payment | Payment Info | `status` | Status | `text` |  | status |  |
| Payment | Posting Notes | `notes` | Notes | `textarea` |  | notes |  |

### Payments — `payments_posting_cf`

Screen: 0 page(s) · 0 section(s) · 0 field(s) · UI STUB · DB BUILT · tables `PAYMENTS`

_No fields declared (nav stub)._

### Practice Payers — `PRACTICE_PAYERS`

Screen: 1 page(s) · 1 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `PAYERS_MASTER`, `PRACTICES`, `PRACTICE_PAYERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Practice-Payer Enrollment | Payer Enrollment | `ppyId` | Record ID (read-only) | `text` |  |  |  |
| Practice-Payer Enrollment | Payer Enrollment | `ppyPracticeId` | Practice ID (required for POST) | `text` | Y |  |  |
| Practice-Payer Enrollment | Payer Enrollment | `ppyPayerMasterId` | Payer Master ID (required for POST) | `text` | Y |  |  |
| Practice-Payer Enrollment | Payer Enrollment | `ppyPayerName` | Payer Name (resolved) | `text` |  |  |  |
| Practice-Payer Enrollment | Payer Enrollment | `ppyPayerId` | EDI Payer ID (clearinghouse) | `text` |  |  |  |
| Practice-Payer Enrollment | Payer Enrollment | `ppyEdiPayerId` | EDI Payer ID (override) | `text` |  |  |  |
| Practice-Payer Enrollment | Payer Enrollment | `ppyEdiReceiverId` | EDI 837 Receiver ID (override) | `text` |  |  |  |
| Practice-Payer Enrollment | Payer Enrollment | `ppyProviderId` | Billing Provider ID (optional) | `text` |  |  |  |
| Practice-Payer Enrollment | Payer Enrollment | `ppyGroupNumber` | Group Number | `text` |  |  |  |
| Practice-Payer Enrollment | Payer Enrollment | `ppyEnrollmentStatus` | Enrollment Status (pending/active/inactive) | `text` |  |  |  |
| Practice-Payer Enrollment | Payer Enrollment | `ppyTimelyFilingDays` | Timely Filing Days (integer) | `text` |  |  |  |
| Practice-Payer Enrollment | Payer Enrollment | `ppyClearinghouse` | Clearinghouse (override) | `text` |  |  |  |
| Practice-Payer Enrollment | Payer Enrollment | `ppySubmissionMethod` | Submission Method (clearinghouse/paper/direct/other) | `text` |  |  |  |

### Prior Auth — `authorizations_wq_cf`

Screen: 1 page(s) · 1 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `AUTHORIZATIONS`, `AUTH_REQUIRED_RULES`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prior Authorization | Authorization | `patient_id` | Patient | `typeahead` |  |  |  |
| Prior Authorization | Authorization | `service_type` | Service Type | `text` | Y |  |  |
| Prior Authorization | Authorization | `cpt_code` | CPT Code(s) | `text` |  |  |  |
| Prior Authorization | Authorization | `dx_code` | Diagnosis Code | `text` |  |  |  |
| Prior Authorization | Authorization | `payer_name` | Payer | `text` |  |  |  |
| Prior Authorization | Authorization | `submitted_date` | Submitted Date | `date` |  |  |  |
| Prior Authorization | Authorization | `auth_number` | Authorization Number | `text` |  |  |  |
| Prior Authorization | Authorization | `approved_units` | Approved Units | `number` |  |  |  |
| Prior Authorization | Authorization | `valid_from` | Valid From | `date` |  |  |  |
| Prior Authorization | Authorization | `valid_through` | Valid Through | `date` |  |  |  |
| Prior Authorization | Authorization | `status` | Status | `select` |  |  |  |
| Prior Authorization | Authorization | `notes` | Notes | `textarea` |  |  |  |

### Prior Auth Request — `prior_auth_request_cf`

Screen: 1 page(s) · 4 section(s) · 25 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prior Authorization Request | Request Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Prior Authorization Request | Request Details | `requestDate` | Request Date | `date` | Y |  |  |
| Prior Authorization Request | Request Details | `urgency` | Urgency | `select` |  |  |  |
| Prior Authorization Request | Request Details | `requestingProvider` | Requesting Provider | `typeahead` | Y |  |  |
| Prior Authorization Request | Request Details | `insurancePayer` | Insurance / Payer | `text` | Y |  |  |
| Prior Authorization Request | Request Details | `memberNumber` | Member ID | `text` |  |  |  |
| Prior Authorization Request | Request Details | `groupNumber` | Group Number | `text` |  |  |  |
| Prior Authorization Request | Service / Procedure | `serviceType` | Service Type | `select` |  |  |  |
| Prior Authorization Request | Service / Procedure | `procedureCode` | Procedure / CPT Code | `typeahead` |  |  |  |
| Prior Authorization Request | Service / Procedure | `ndc` | NDC (for medications) | `text` |  |  |  |
| Prior Authorization Request | Service / Procedure | `diagnosisCode` | Diagnosis (ICD-10) | `typeahead` | Y |  |  |
| Prior Authorization Request | Service / Procedure | `serviceDescription` | Service Description | `textarea` | Y |  |  |
| Prior Authorization Request | Service / Procedure | `startDate` | Requested Service Start Date | `date` |  |  |  |
| Prior Authorization Request | Service / Procedure | `endDate` | Requested Service End Date (if ongoing) | `date` |  |  |  |
| Prior Authorization Request | Service / Procedure | `unitsRequested` | Units / Visits Requested | `number` |  |  |  |
| Prior Authorization Request | Clinical Justification | `clinicalNarrative` | Clinical Narrative | `textarea` | Y |  |  |
| Prior Authorization Request | Clinical Justification | `priorTreatments` | Prior Treatments / Step Therapy | `textarea` |  |  |  |
| Prior Authorization Request | Clinical Justification | `supportingDocs` | Supporting Documentation Attached | `select` |  |  |  |
| Prior Authorization Request | Authorization Status | `authStatus` | Authorization Status | `select` |  |  |  |
| Prior Authorization Request | Authorization Status | `authNumber` | Authorization Number | `text` |  |  |  |
| Prior Authorization Request | Authorization Status | `authApprovalDate` | Approval / Decision Date | `date` |  |  |  |
| Prior Authorization Request | Authorization Status | `authExpirationDate` | Authorization Expiration Date | `date` |  |  |  |
| Prior Authorization Request | Authorization Status | `denialReason` | Denial Reason / Notes | `textarea` |  |  |  |
| Prior Authorization Request | Authorization Status | `appealPending` | Appeal in progress | `checkbox` |  |  |  |
| Prior Authorization Request | Authorization Status | `authNotes` | Authorization Notes | `textarea` |  |  |  |

### Prior Auth Rules — `prior_auth_rules_cf`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `AUTHORIZATIONS`, `AUTH_REQUIRED_RULES`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pre-Auth Requirement Rule (ECW-RF-9) | Auth Rule Definition | `payerName` | Payer Name | `text` | Y |  |  |
| Pre-Auth Requirement Rule (ECW-RF-9) | Auth Rule Definition | `payerId` | Payer ID | `text` |  |  |  |
| Pre-Auth Requirement Rule (ECW-RF-9) | Auth Rule Definition | `cptCode` | CPT / HCPCS Code | `text` | Y |  |  |
| Pre-Auth Requirement Rule (ECW-RF-9) | Auth Rule Definition | `icdFilter` | ICD-10 Filter (if any) | `text` |  |  |  |
| Pre-Auth Requirement Rule (ECW-RF-9) | Auth Rule Definition | `authRequired` | Prior Auth Required | `select` |  |  |  |
| Pre-Auth Requirement Rule (ECW-RF-9) | Auth Rule Definition | `urgentAuthProcess` | Urgent Auth Process | `text` |  |  |  |
| Pre-Auth Requirement Rule (ECW-RF-9) | Auth Rule Definition | `typicalLeadDays` | Typical Lead Time (days) | `number` |  |  |  |
| Pre-Auth Requirement Rule (ECW-RF-9) | Auth Rule Definition | `autoSpawnWorkItem` | Auto-Spawn Auth Work Item | `checkbox` |  |  |  |
| Pre-Auth Requirement Rule (ECW-RF-9) | Auth Rule Definition | `ruleNotes` | Rule Notes | `textarea` |  |  |  |

### Prior Authorization — `prior_auth_cf`

Screen: 2 page(s) · 4 section(s) · 22 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Request Details | Patient & Insurance | `patientId` | Patient | `typeahead` | Y |  |  |
| Request Details | Patient & Insurance | `encounterId` | Related Encounter | `text` |  |  |  |
| Request Details | Patient & Insurance | `requestDate` | Request Submitted Date | `date` | Y |  |  |
| Request Details | Patient & Insurance | `payer` | Insurance Payer | `text` | Y |  |  |
| Request Details | Patient & Insurance | `memberId` | Member ID | `text` | Y |  |  |
| Request Details | Patient & Insurance | `groupNumber` | Group Number | `text` |  |  |  |
| Request Details | Authorization Request | `requestType` | Request Type | `select` | Y |  |  |
| Request Details | Authorization Request | `serviceDescription` | Service / Medication Requested | `textarea` | Y |  |  |
| Request Details | Authorization Request | `cptHcpcsCode` | CPT / HCPCS Code | `text` |  |  |  |
| Request Details | Authorization Request | `diagnosisCodes2` | ICD-10 Diagnosis Code(s) | `text` | Y |  |  |
| Request Details | Authorization Request | `urgency2` | Urgency | `select` | Y |  |  |
| Request Details | Authorization Request | `startDate` | Requested Start Date | `date` | Y |  |  |
| Request Details | Authorization Request | `endDate` | Requested End Date | `date` |  |  |  |
| Clinical Justification & Tracking | Clinical Justification | `clinicalJustification` | Clinical Justification | `textarea` | Y |  |  |
| Clinical Justification & Tracking | Clinical Justification | `priorTreatmentsFailed` | Prior Treatments Tried / Failed | `textarea` |  |  |  |
| Clinical Justification & Tracking | Clinical Justification | `supportingDocuments` | Supporting Documents Attached | `textarea` |  |  |  |
| Clinical Justification & Tracking | Authorization Tracking | `authStatus` | Authorization Status | `select` | Y |  |  |
| Clinical Justification & Tracking | Authorization Tracking | `authNumber` | Authorization Number (if approved) | `text` |  |  |  |
| Clinical Justification & Tracking | Authorization Tracking | `approvedDates` | Approved Dates | `text` |  |  |  |
| Clinical Justification & Tracking | Authorization Tracking | `denialReason` | Denial Reason (if denied) | `textarea` |  |  |  |
| Clinical Justification & Tracking | Authorization Tracking | `peerToPeerDate` | Peer-to-Peer Date (if scheduled) | `date` |  |  |  |
| Clinical Justification & Tracking | Authorization Tracking | `expirationDate` | Auth Expiration Date | `date` |  |  |  |

### Provider Billing — `provider_billing_cf`

Screen: 2 page(s) · 2 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Payer Provider Billing Overrides | Billing ID Override | `payerId` | Payer ID | `text` | Y | payerId |  |
| Payer Provider Billing Overrides | Billing ID Override | `providerId` | Provider ID | `text` | Y | providerId |  |
| Payer Provider Billing Overrides | Billing ID Override | `npi` | NPI | `text` |  | npi |  |
| Payer Provider Billing Overrides | Billing ID Override | `taxId` | Tax ID | `text` |  | taxId |  |
| Payer Provider Billing Overrides | Billing ID Override | `pinNumber` | PIN (HCFA 24J) | `text` |  | pinNumber |  |
| Payer Provider Billing Overrides | Billing ID Override | `groupNumber` | Group Number (HCFA 33) | `text` |  | groupNumber |  |
| Payer Provider Billing Overrides | Billing ID Override | `emcId` | EMC ID | `text` |  | emcId |  |
| Payer Provider Billing Overrides | Billing ID Override | `commercialId` | Commercial ID | `text` |  | commercialId |  |
| Payer Provider Billing Overrides | Billing ID Override | `effectiveDate` | Effective Date | `date` |  | effectiveDate |  |
| Payer Provider Billing Overrides | Billing ID Override | `endDate` | End Date | `date` |  | endDate |  |
| Appointment Provider Overrides | Rendering / Supervising / Pay-To | `appointmentId` | Appointment ID | `text` |  | appointmentId |  |
| Appointment Provider Overrides | Rendering / Supervising / Pay-To | `renderingProviderId` | Rendering Provider | `text` |  | renderingProviderId |  |
| Appointment Provider Overrides | Rendering / Supervising / Pay-To | `supervisorProviderId` | Supervising Provider | `text` |  | supervisorProviderId |  |
| Appointment Provider Overrides | Rendering / Supervising / Pay-To | `payToProviderId` | Pay-To Provider | `text` |  | payToProviderId |  |
| Appointment Provider Overrides | Rendering / Supervising / Pay-To | `renderingName` | Rendering Name | `text` |  | renderingName |  |
| Appointment Provider Overrides | Rendering / Supervising / Pay-To | `supervisorName` | Supervisor Name | `text` |  | supervisorName |  |
| Appointment Provider Overrides | Rendering / Supervising / Pay-To | `payToName` | Pay-To Name | `text` |  | payToName |  |

### Provider Billing — `provider_billing_overrides_cf`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB PARTIAL · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider Billing Override | Override | `provider_id` | Provider | `typeahead` |  |  |  |
| Provider Billing Override | Override | `override_type` | Override Type | `select` |  |  |  |
| Provider Billing Override | Override | `override_value` | Override Value | `text` | Y |  |  |
| Provider Billing Override | Override | `effective_date` | Effective Date | `date` |  |  |  |
| Provider Billing Override | Override | `is_active` | Active | `checkbox` |  |  |  |

### Provider Billing IDs — `payer_provider_billing_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider Billing ID Override | Scope | `provider_id` | Provider | `typeahead` |  |  |  |
| Provider Billing ID Override | Scope | `payer_id` | Payer | `typeahead` |  |  |  |
| Provider Billing ID Override | Scope | `service_date_from` | Effective From | `date` |  |  |  |
| Provider Billing ID Override | Scope | `service_date_to` | Effective To | `date` |  |  |  |
| Provider Billing ID Override | Scope | `active` | Active | `checkbox` |  |  |  |
| Provider Billing ID Override | Legacy Billing IDs (HCFA Box 24J/33) | `pin_number` | PIN Number | `text` |  |  |  |
| Provider Billing ID Override | Legacy Billing IDs (HCFA Box 24J/33) | `group_number` | Group Number | `text` |  |  |  |
| Provider Billing ID Override | Legacy Billing IDs (HCFA Box 24J/33) | `emc_provider_id` | EMC Provider ID | `text` |  |  |  |
| Provider Billing ID Override | Legacy Billing IDs (HCFA Box 24J/33) | `commercial_number` | Commercial Number | `text` |  |  |  |
| Provider Billing ID Override | Legacy Billing IDs (HCFA Box 24J/33) | `provider_number` | Provider Number | `text` |  |  |  |
| Provider Billing ID Override | Legacy Billing IDs (HCFA Box 24J/33) | `site_id` | Site ID | `text` |  |  |  |
| Provider Billing ID Override | Billing Overrides | `npi_override` | NPI Override | `text` |  |  |  |
| Provider Billing ID Override | Billing Overrides | `tax_id_override` | Tax ID Override | `text` |  |  |  |
| Provider Billing ID Override | Billing Overrides | `billing_name_override` | Billing Name Override | `text` |  |  |  |
| Provider Billing ID Override | Billing Overrides | `billing_address_override` | Billing Address Override | `textarea` |  |  |  |

### Remittance — `remittance_cf`

Screen: 2 page(s) · 3 section(s) · 23 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Batch Detail | Batch Information | `remId` | ID | `text` |  |  |  |
| Batch Detail | Batch Information | `remPracticeId` | Practice ID | `text` |  |  |  |
| Batch Detail | Batch Information | `remPayerId` | Payer ID | `text` |  |  |  |
| Batch Detail | Batch Information | `remPayerName` | Payer Name | `text` |  |  |  |
| Batch Detail | Batch Information | `remBatchNumber` | Batch Number | `text` |  |  |  |
| Batch Detail | Batch Information | `remCheckNumber` | Check Number | `text` |  |  |  |
| Batch Detail | Batch Information | `remEftTraceNumber` | EFT Trace Number | `text` |  |  |  |
| Batch Detail | Batch Information | `remBatchDate` | Batch Date | `date` |  |  |  |
| Batch Detail | Batch Information | `remReceivedDate` | Received Date | `date` |  |  |  |
| Batch Detail | Batch Information | `remPaymentMethod` | Payment Method | `select` |  |  |  |
| Batch Detail | Batch Information | `remStatus` | Status | `select` |  |  |  |
| Batch Detail | Amounts | `remTotalAmount` | Total Amount | `text` |  |  |  |
| Batch Detail | Amounts | `remAppliedAmount` | Applied Amount | `text` |  |  |  |
| Batch Detail | Amounts | `remUnappliedAmount` | Unapplied Amount | `text` |  |  |  |
| Batch Detail | Amounts | `remPaidAmount` | Paid Amount | `text` |  |  |  |
| Batch Detail | Amounts | `remAdjustmentAmount` | Adjustment Amount | `text` |  |  |  |
| Batch Detail | Amounts | `remTotalClaims` | Total Claims | `number` |  |  |  |
| Batch Detail | Amounts | `remPostedClaims` | Posted Claims | `number` |  |  |  |
| Batch Detail | Amounts | `remPendingClaims` | Pending Claims | `number` |  |  |  |
| Batch Detail | Amounts | `remEdiFileName` | EDI File Name | `text` |  |  |  |
| Batch Detail | Amounts | `remRecommendedAction` | Recommended Action | `text` |  |  |  |
| Post / Reconcile | Batch Lifecycle | `remActionBatchId` | Batch ID | `text` | Y |  |  |
| Post / Reconcile | Batch Lifecycle | `remActionType` | Action | `select` | Y |  |  |

### Result Charge Rules — `result_charge_rules_cf`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lab/Procedure Result Charge Rules | Charge Trigger | `resultType` | Result Type | `select` | Y | resultType |  |
| Lab/Procedure Result Charge Rules | Charge Trigger | `triggerCode` | Trigger Code | `text` |  | triggerCode |  |
| Lab/Procedure Result Charge Rules | Charge Trigger | `cptCode` | CPT Code | `text` | Y | cptCode |  |
| Lab/Procedure Result Charge Rules | Charge Trigger | `icd10Default` | ICD-10 Default | `text` |  | icd10Default |  |
| Lab/Procedure Result Charge Rules | Charge Trigger | `description` | Description | `text` |  | description |  |
| Lab/Procedure Result Charge Rules | Charge Trigger | `units` | Units | `number` |  | units |  |
