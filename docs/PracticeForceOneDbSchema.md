---
title: "PracticeForceOneDbSchema"
---

# PracticeForceOne Database Schema

Review date: 2026-07-24
Last updated: 2026-07-24

## Overview

PracticeForceOne uses PostgreSQL 15+ with the following extensions:
- **uuid-ossp** - UUID generation
- **pgcrypto** - Password hashing
- **vector** - RAG embeddings (pgvector)
- **pg_trgm** - Fuzzy text matching

**Database**: Google Cloud SQL for PostgreSQL **g1-small tier**, max_connections=100 (region us-central1; tier bumped 2026-07-18 — connection-exhaustion incident class structurally closed). Daily backups active.
**Instance host**: 34.57.207.175 (port 5432)
**Database Name**: claimsprocessing

The application tier (service "claimsprocessing-api", the JAC router) runs on
Google Cloud Run and connects to this Cloud SQL instance via the PostgreSQL JDBC
driver. See [PracticeForceOneGCP](<PracticeForceOneGCP.md>) for the canonical
platform topology and secrets handling.


## Schema Files

| File | Description | Tables |
| --- | --- | --- |
| 01_extensions.sql | PostgreSQL extensions | - |
| 02_organizations.sql | Multi-tenant foundation | organizations, practices |
| 03_users.sql | Authentication | users, user_sessions, api_keys |
| 04_patients.sql | Patient demographics | patients, patient_insurances, eligibility_checks |
| 05_payers.sql | Insurance payers | payers_master, practice_payers, payer_contracts, fee_schedule_items |
| 06_providers.sql | Healthcare providers | providers, provider_enrollments, referring_providers |
| 07_claims.sql | Claims management | claims, claim_lines, claim_status_history, claim_scrub_results |
| 08_payments.sql | Payment processing | remittance_batches, payments, payment_lines, payment_adjustments, patient_payments, secondary_billing_queue |
| 09_denials.sql | Denial management | denials, appeals, appeal_templates, worklists, denial_actions, denial_analytics |
| 10_audit.sql | HIPAA compliance | audit_log, api_request_log, auth_audit, export_audit, job_audit |
| 11_pending_registrations.sql | Registration flow | pending_registrations, password_reset_tokens |

> Note: the table above lists the original foundational schema files. The live
> schema has since grown well beyond these - the authoritative, complete set of
> DDL files (numbered through `56_document_folders.sql` as of 2026-06-23, plus
> `08a_payments_enhancement.sql`, plus the `ddl/migrations/` delta files) lives in
> `jac2024/app/com/claimsprocessing/ddl/schema/`. That directory is the source of
> truth; this page documents the core entities.

Current deployed schema deltas since the original table list:

- `22_authorizations.sql` includes CMS-0057-F fields `is_expedited`, `appeal_status`, and `appealed_at`; migrations `004_add_authorizations_is_expedited.sql` and `005_add_authorizations_pa_appeal.sql` were applied for the live PA SLA/appeals surface.
- `05_payers.sql` includes `payer_contracts` and `fee_schedule_items`; Charge Optimization reads historical allowed amounts from payment/claim data and uses seeded fee schedule fixtures for demos.
- `app_settings` stores org-scoped settings such as `testing_date.enabled` and `testing_date.value`, read through `ClockHelper`.
- `payments.allowed_amount` and claim-line charge fields are now first-class analytics inputs for underbilling/overbilling detection.


## Entity Relationship Diagram

 " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " "
 " organizations " " " 1:N " " " practices " " " 1:N " " " patients "
 "" " " " " " " " " " " " " " " " " " " "" " " " " " " " " " " " " " " " " " " "" " " " " " " " " " " " " " " " " " "
 " " "
 " " "
 1:N 1:N 1:N
 " " "
 " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " "
 " users " " providers " " patient_insurances "
 "" " " " " " " " " " " " " " " " " " " "" " " " " " " " " " " " " " " " " " " "" " " " " " " " " " " " " " " " " " "
 " "
 1:N "
 " "
 - "
 " " " " " " " " " " " " " " " " " " " "
 " claims " - " " " " " " " " " " " " " " "
 "" " " " " " " " " " " " " " " " " " "
 "
 " " " " " " " " " " " " " " " " " " " " " " " " " " " " "
 1:N 1:N 1:N
 " " "
 " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " " "
 " claim_lines " " payments " " denials "
 "" " " " " " " " " " " " " "" " " " " " " " " " " " " "" " " " " " " " " " " " "
 " "
 1:N 1:N
 " "
 " " " " " " " " " " " " " " " " " " " " " " " " " "
 " payment_ " " appeals "
 " adjustments " "" " " " " " " " " " " " "
 "" " " " " " " " " " " " "


## Table Definitions

### 1. Organizations (02_organizations.sql)

#### organizations
Top-level tenant representing billing services.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| name | VARCHAR(255) | Organization name |
| type | VARCHAR(20) | billing_service, practice |
| tax_id | VARCHAR(20) | Federal tax ID |
| npi | VARCHAR(10) | National Provider Identifier |
| subscription_tier | VARCHAR(20) | starter, professional, enterprise |
| subscription_status | VARCHAR(20) | active, suspended, cancelled |
| settings | JSONB | Branding, features, preferences |
| is_active | BOOLEAN | Soft delete flag |

#### practices
Healthcare practices managed by billing services.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| org_id | UUID | FK to organizations |
| name | VARCHAR(255) | Practice name |
| npi | VARCHAR(10) | Practice NPI |
| tax_id | VARCHAR(20) | Tax ID |
| clearinghouse | VARCHAR(50) | availity, change_hc |
| onboarding_status | VARCHAR(20) | pending, in_progress, complete |
| settings | JSONB | Payer configs, defaults |


### 2. Users (03_users.sql)

#### users
System users for authentication.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| org_id | UUID | FK to organizations |
| email | VARCHAR(255) | Unique per org |
| password_hash | VARCHAR(255) | PBKDF2-SHA256 |
| first_name | VARCHAR(100) | First name |
| last_name | VARCHAR(100) | Last name |
| role | VARCHAR(30) | admin, manager, biller, viewer |
| permissions | JSONB | Additional permissions |
| practice_ids | UUID[] | Assigned practices |
| status | VARCHAR(20) | active, inactive, locked |
| mfa_enabled | BOOLEAN | MFA status |

#### user_sessions
JWT refresh token management.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| user_id | UUID | FK to users |
| refresh_token_hash | VARCHAR(255) | Hashed token |
| expires_at | TIMESTAMP | Expiration time |
| is_valid | BOOLEAN | Active session |

#### api_keys
Programmatic API access.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| org_id | UUID | FK to organizations |
| key_hash | VARCHAR(255) | Hashed API key |
| key_prefix | VARCHAR(8) | First 8 chars for ID |
| scopes | TEXT[] | Permissions |
| rate_limit | INTEGER | Requests per hour |


### 3. Patients (04_patients.sql)

#### patients
Patient demographics.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| practice_id | UUID | FK to practices |
| mrn | VARCHAR(50) | Medical Record Number |
| first_name | VARCHAR(100) | First name |
| last_name | VARCHAR(100) | Last name |
| date_of_birth | DATE | DOB |
| gender | CHAR(1) | M, F, U, O |
| ssn_last_four | VARCHAR(4) | Last 4 SSN |
| address_line1 | VARCHAR(255) | Address |
| phone_cell | VARCHAR(20) | Cell phone |

#### patient_insurances
Patient insurance policies.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| patient_id | UUID | FK to patients |
| payer_id | UUID | FK to payers |
| priority | INTEGER | 1=primary, 2=secondary, 3=tertiary |
| subscriber_id | VARCHAR(50) | Member ID |
| group_number | VARCHAR(50) | Group number |
| relationship_code | VARCHAR(2) | X12 code (18=self, 01=spouse) |
| effective_date | DATE | Coverage start |
| termination_date | DATE | Coverage end |


### 4. Payers (05_payers.sql)

#### payers_master
Master list of insurance payers (shared).

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| payer_id | VARCHAR(20) | Unique clearinghouse ID |
| name | VARCHAR(255) | Payer name |
| payer_type | VARCHAR(30) | commercial, medicare, medicaid |
| edi_payer_id | VARCHAR(20) | EDI identifier |
| availity_id | VARCHAR(20) | Availity routing ID |
| accepts_electronic | BOOLEAN | Electronic submission |

#### practice_payers
Practice-specific payer configurations.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| practice_id | UUID | FK to practices |
| payer_master_id | UUID | FK to payers_master |
| provider_id | VARCHAR(50) | Provider ID with payer |
| enrollment_status | VARCHAR(20) | pending, enrolled, inactive |
| timely_filing_days | INTEGER | Filing deadline (default 365) |
| claim_rules | JSONB | Payer-specific rules |

#### payer_contracts
Fee schedule contracts.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| practice_payer_id | UUID | FK to practice_payers |
| effective_date | DATE | Contract start |
| reimburse_method | VARCHAR(30) | fee_schedule, percentage_of_medicare |
| reimburse_percent | DECIMAL(5,2) | Percentage if applicable |


### 5. Providers (06_providers.sql)

#### providers
Healthcare providers (rendering, billing, supervising).

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| practice_id | UUID | FK to practices |
| npi | VARCHAR(10) | National Provider ID |
| first_name | VARCHAR(100) | First name |
| last_name | VARCHAR(100) | Last name |
| credentials | VARCHAR(50) | MD, DO, NP, PA |
| taxonomy_code | VARCHAR(10) | Specialty taxonomy |
| provider_type | VARCHAR(30) | billing, rendering, supervising |

#### provider_enrollments
Payer enrollments per provider.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| provider_id | UUID | FK to providers |
| practice_payer_id | UUID | FK to practice_payers |
| provider_number | VARCHAR(50) | Payer-assigned ID |
| status | VARCHAR(20) | pending, enrolled, inactive |
| is_par | BOOLEAN | Participating provider |
| caqh_id | VARCHAR(20) | CAQH ID |


### 6. Claims (07_claims.sql)

#### claims
Claim header records.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| practice_id | UUID | FK to practices |
| patient_id | UUID | FK to patients |
| claim_number | VARCHAR(50) | Unique per practice |
| claim_type | VARCHAR(20) | professional, institutional |
| claim_frequency | VARCHAR(2) | 1=original, 7=replacement, 8=void |
| payer_id | UUID | FK to payers |
| service_date_from | DATE | Service start |
| service_date_to | DATE | Service end |
| place_of_service | VARCHAR(2) | POS code |
| billing_provider_id | UUID | FK to providers |
| rendering_provider_id | UUID | FK to providers |
| diagnosis_codes | VARCHAR(10)[] | ICD-10 codes |
| total_charge | DECIMAL(10,2) | Total billed |
| total_paid | DECIMAL(10,2) | Total received |
| status | VARCHAR(30) | draft, submitted, paid, denied |
| denial_risk_score | DECIMAL(5,4) | AI prediction (0-1) |
| days_in_ar | INTEGER | Days in A/R |
| aging_bucket | VARCHAR(20) | 0-30, 31-60, 61-90, etc. |

**Status Values**: draft, ready, pending_scrub, scrubbing, scrub_error, ready_to_submit, submitted, acknowledged, pending, paid, partial, denied, appealed, written_off, closed

#### claim_lines
Line item details.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| claim_id | UUID | FK to claims |
| line_number | INTEGER | Line sequence |
| procedure_code | VARCHAR(10) | CPT/HCPCS |
| modifier1-4 | VARCHAR(2) | Modifiers |
| diagnosis_pointers | INTEGER[] | Pointer to header diagnoses |
| units | DECIMAL(10,2) | Service units |
| charge_amount | DECIMAL(10,2) | Line charge |
| paid_amount | DECIMAL(10,2) | Line payment |
| status | VARCHAR(20) | pending, paid, denied |

#### claim_status_history
Audit trail of status changes.

| Column | Type | Description |
| --- | --- | --- |
| claim_id | UUID | FK to claims |
| old_status | VARCHAR(30) | Previous status |
| new_status | VARCHAR(30) | New status |
| changed_at | TIMESTAMP | Change time |
| changed_by | UUID | User ID |


### 7. Payments (08_payments.sql)

#### remittance_batches
ERA (835) batches from payers.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| practice_id | UUID | FK to practices |
| batch_number | VARCHAR(50) | Batch identifier |
| check_number | VARCHAR(50) | Check/EFT number |
| batch_date | DATE | Payment date |
| total_amount | DECIMAL(12,2) | Batch total |
| applied_amount | DECIMAL(12,2) | Amount posted |
| status | VARCHAR(20) | received, posting, posted |
| raw_835 | TEXT | Original 835 content |

#### payments
Individual claim payments.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| claim_id | UUID | FK to claims |
| remittance_batch_id | UUID | FK to batches |
| payment_date | DATE | Payment date |
| paid_amount | DECIMAL(10,2) | Amount paid |
| adjusted_amount | DECIMAL(10,2) | Adjustments |
| payment_type | VARCHAR(20) | insurance, patient, refund |

#### payment_adjustments
CARC/RARC adjustment codes.

| Column | Type | Description |
| --- | --- | --- |
| payment_id | UUID | FK to payments |
| group_code | VARCHAR(2) | CO, PR, OA, PI |
| reason_code | VARCHAR(10) | CARC code |
| remark_codes | VARCHAR(10)[] | RARC codes |
| amount | DECIMAL(10,2) | Adjustment amount |

**Group Codes**: CO=Contractual Obligation, PR=Patient Responsibility, OA=Other Adjustment, PI=Payer Initiated


### 8. Denials (09_denials.sql)

#### denials
Denied claims tracking.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| claim_id | UUID | FK to claims |
| denial_date | DATE | Denial date |
| denial_code | VARCHAR(10) | CARC code |
| denial_category | VARCHAR(30) | eligibility, authorization, coding, etc. |
| denied_amount | DECIMAL(10,2) | Amount denied |
| status | VARCHAR(20) | new, assigned, appealed, resolved |
| assigned_to | UUID | FK to users |
| priority | INTEGER | 1=highest, 10=lowest |
| appeal_deadline | DATE | Deadline to appeal |
| ai_analysis | JSONB | AI recommendations |
| appeal_success_probability | DECIMAL(5,4) | AI prediction |

**Denial Categories**: eligibility, authorization, coding, medical_necessity, timely_filing, duplicate, bundling, missing_info, other

#### appeals
Appeal submissions.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| denial_id | UUID | FK to denials |
| claim_id | UUID | FK to claims |
| appeal_level | INTEGER | 1=first, 2=second, 3=external |
| appeal_type | VARCHAR(30) | written, peer_to_peer, external |
| letter_content | TEXT | Appeal letter |
| ai_generated | BOOLEAN | AI-generated flag |
| status | VARCHAR(20) | draft, submitted, won, lost |
| recovered_amount | DECIMAL(10,2) | Amount recovered |

#### worklists
Configurable denial worklists.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| practice_id | UUID | FK to practices |
| name | VARCHAR(100) | Worklist name |
| filter_criteria | JSONB | Filter rules |
| sort_by | VARCHAR(50) | Sort field |
| default_assignee | UUID | Auto-assign user |


### 9. Audit (10_audit.sql)

#### audit_log
Comprehensive audit trail for HIPAA.

| Column | Type | Description |
| --- | --- | --- |
| id | BIGSERIAL | Primary key |
| event_time | TIMESTAMP | Event timestamp |
| user_id | UUID | Acting user |
| org_id | UUID | Organization |
| event_type | VARCHAR(50) | login, create, read, update, delete |
| event_category | VARCHAR(30) | auth, patient, claim, payment |
| resource_type | VARCHAR(50) | Affected resource type |
| resource_id | UUID | Affected resource ID |
| old_values | JSONB | Previous values |
| new_values | JSONB | New values |
| accessed_phi | BOOLEAN | PHI access flag |

#### auth_audit
Authentication events.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| event_type | VARCHAR(30) | login_success, login_failed, logout |
| user_id | UUID | User ID |
| ip_address | VARCHAR(45) | Client IP |
| success | BOOLEAN | Event outcome |


### 10. Registration (11_pending_registrations.sql)

#### pending_registrations
Pre-verification registrations.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| email | VARCHAR(255) | Email address |
| password_hash | VARCHAR(255) | Hashed password |
| first_name | VARCHAR(100) | First name |
| last_name | VARCHAR(100) | Last name |
| org_name | VARCHAR(255) | Organization name |
| verification_code | VARCHAR(6) | 6-digit code |
| verification_expires | TIMESTAMP | Code expiration |
| attempts | INTEGER | Verification attempts |

#### password_reset_tokens
Password recovery tokens.

| Column | Type | Description |
| --- | --- | --- |
| id | UUID | Primary key |
| user_id | UUID | FK to users |
| token_hash | VARCHAR(255) | Hashed token |
| expires_at | TIMESTAMP | Token expiration |
| used | BOOLEAN | Token used flag |


## Common Patterns

### Multi-Tenancy
All tables include `org_id` or `practice_id` for tenant isolation. Row-level security should be implemented:

```sql
-- Example RLS policy
CREATE POLICY practice_isolation ON patients
 USING (practice_id IN (SELECT practice_id FROM user_practice_access WHERE user_id = current_user_id()));

### Soft Delete
Most tables use soft delete pattern:
- `is_active BOOLEAN DEFAULT TRUE`
- `deleted_at TIMESTAMP WITH TIME ZONE`

### Audit Timestamps
All tables include:
- `created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()`
- `updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()`
- `created_by UUID`
- `updated_by UUID`

### Update Trigger
```sql
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
 NEW.updated_at = NOW();
 RETURN NEW;
END;
$$ language 'plpgsql';


## Indexes

Key indexes for performance:

```sql
-- Claims queries
CREATE INDEX idx_claims_practice ON claims(practice_id);
CREATE INDEX idx_claims_status ON claims(status);
CREATE INDEX idx_claims_aging ON claims(aging_bucket, days_in_ar);
CREATE INDEX idx_claims_denial_risk ON claims(denial_risk_score);

-- Patient lookup
CREATE INDEX idx_patients_name ON patients(last_name, first_name);
CREATE INDEX idx_patients_dob ON patients(date_of_birth);

-- Payment reconciliation
CREATE INDEX idx_payments_claim ON payments(claim_id);
CREATE INDEX idx_payments_date ON payments(payment_date);

-- Denial worklists
CREATE INDEX idx_denials_priority ON denials(priority, priority_score);
CREATE INDEX idx_denials_deadline ON denials(appeal_deadline);


## Schema Migration

DDL/migrations are applied separately from the app deploy (the hermetic Cloud
Build deploy via `pipeline/cloudbuild-deploy.yaml` does NOT run schema DDL). Apply
schemas in order with the `postgres` superuser (matching
`bin/apply-migration-24.ps1`):
```bash
psql -h 34.57.207.175 -U postgres -d claimsprocessing -f ddl/schema/01_extensions.sql
psql -h 34.57.207.175 -U postgres -d claimsprocessing -f ddl/schema/02_organizations.sql
# ... continue through the latest ddl/schema/*.sql file, then ddl/migrations/*.sql


*Document Version: 1.2*
*Last Updated: 2026-07-24*

---

## Review Epilog -- 2026-06-23

Reviewed 2026-06-23 as part of a full PracticeForceOne wiki truth-pass. Status: UPDATED.

- Verified the DB platform against repo evidence: Google Cloud SQL for PostgreSQL, instance host 34.57.207.175:5432, database `claimsprocessing` (confirmed in PracticeForceOneGCP.md, cloudbuild-deploy.yaml, and bin/apply-migration-24.ps1). Extensions (uuid-ossp, pgcrypto, vector, pg_trgm) confirmed against ddl/schema/01_extensions.sql. The documented core table definitions still match the foundational DDL files and are evergreen reference content.
- Corrected drift: refreshed header/footer dates (was 2026-06-05 / "January 7, 2026", doc version 1.0 -> 1.1); added Cloud Run application-tier context with a relative link to PracticeForceOneGCP; noted the live schema has grown to 50+ DDL files (through 56_document_folders.sql) with the ddl/schema/ directory as the source of truth; fixed the migration apply command to use the `postgres` superuser (was `-U claimsprocessing`) and clarified that hermetic Cloud Build deploy does not run schema DDL.
- Flag for founder: the doc states "PostgreSQL 15+"; CLAUDE.md references PostgreSQL 17 as the default and apply-migration-24.ps1 invokes a local PostgreSQL 18 psql client. The "15+" floor is not strictly wrong (it is a minimum), so it was left as-is -- confirm the actual Cloud SQL major version if a precise pin is wanted.

## Review Epilog -- 2026-07-24

- Live build 1943, gate 251/251 GREEN. Core table definitions and connection details remain accurate.
- Updated DB tier: g1-small + max_connections=100 (bumped 2026-07-18; connection-exhaustion incident class structurally closed). Daily backups confirmed active.
- No schema table changes needed; the 50+ DDL file note and ddl/schema/ source-of-truth statement remain accurate. Demo data: Bay Area Cardiology, Provider Steve Chen, 6 patients (`node bin/demo-setup.mjs` resets).
