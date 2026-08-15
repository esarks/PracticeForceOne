---
title: "PracticeForceOneArchitectureAssessment2026 08 14"
---

﻿# PracticeForceOne Architecture Assessment ΓÇö 2026-08-14

**Assessment date:** 2026-08-14  
**Assessment type:** Deep static-source architecture review  
**Source reviewed:** Full uploaded `claimsprocessing` source snapshot supplied 2026-08-14  
**Primary focus:** Architecture drift, JAC/DDL authority, persistence, schema lifecycle, maintainability, specialty/platform convergence, tenant isolation, build/deploy integrity, and remediation priorities.

> **Important scope note:** This document is a static-source architectural assessment. It describes what is present in the supplied source snapshot and the behavior implied by that source. It is not, by itself, proof of the exact currently deployed production revision or runtime database state. Production claims should continue to be proven by the existing DLP, characterization, health/provenance, and deployment gates.

---

## Executive Assessment

PracticeForceOne has a strong architectural direction, but implementation growth has outpaced architectural convergence.

The platform should **not** be rewritten and should **not** be split into microservices simply to address the current debt. The right target is a **modular JAC-based monolith** with stricter architectural ownership:

- one canonical desired schema model,
- one production migration path,
- one persistence contract,
- one practice isolation boundary,
- one set of reusable platform capabilities,
- specialty behavior expressed primarily as definitions and metadata rather than specialty-specific infrastructure,
- and deployment gates that enforce the architecture rather than merely document it.

The architecture is directionally good. The largest problem is **convergence**.

A useful shorthand assessment is:

> **B-level architectural direction with C-level convergence.**

That means the north star is substantially correct, many of the right mechanisms already exist, and the system is repairable without a rewrite. However, multiple competing ways of defining schema, creating tables, accessing persistence, and implementing specialty behavior are now active at the same time. That creates operational and maintenance risk even when individual features work.

The highest-risk area is **schema authority fragmentation**. The second is **specialty/platform duplication**. The third is **practice-level isolation not yet being fully carried through the identity/request context**. A fourth major issue is the **fragility of the JAC build/generation toolchain**, which currently relies on local-machine-specific compatibility techniques.

The recommended strategy is therefore:

1. Freeze new architectural drift.
2. Repair migration identity and failure semantics.
3. Eliminate request-path DDL.
4. Make the JAC schema model semantically complete for durable application-owned relational entities.
5. Converge persistence by domain onto generated CRUD / Query / Write / declared views.
6. Stop specialty infrastructure replication.
7. Complete practice-level identity and isolation.
8. Make the JAC build toolchain hermetic and deterministic.
9. Reduce large UI/router hotspots incrementally behind characterization and browser gates.
10. Generate an architecture scorecard on every build so drift is continuously measurable.

---

# 1. Architectural North Star

PracticeForceOne should remain a **configurable healthcare application platform implemented as a modular JAC monolith**.

The strongest existing architectural ideas should be preserved:

- ADR-driven decisions and evidence-over-assertion governance.
- JAC-generated JEO/CRUD as the durable relational spine.
- `ClaimsProcessingDdl.xml` as the desired relational model for application-owned entities.
- `ClaimsProcessingViews.xml` for named complex read models.
- `Query.script` and `Write.script` as governed query/write escape hatches where generated CRUD is not sufficient.
- `SchemaLifecycle` as the mechanism for separating schema readiness from request processing.
- `DbConnectionFactory` ownership of database connectivity.
- Authentication deny-by-default.
- Candidate ΓåÆ gate ΓåÆ rendered/browser proof ΓåÆ promote deployment discipline.
- DLP's principle that tests must not manufacture green.
- Definition-driven forms, workflows, rules, menus, dashboards, Kanbans, and inference.
- The Focused Kanban/control-tower model.

The system should **not** be purified into ΓÇ£everything must literally be JAC.ΓÇ¥ JavaScript UI, Node test tooling, Python AI, SQL migrations, and PostgreSQL-native capabilities can all legitimately exist. The important rule is that they must not become independent competing architectures for the system of record.

The central architectural rule should be:

> **A new clinical or business capability may not create its own infrastructure.**

A new feature should not casually introduce all of the following as its normal implementation pattern:

- `NewFeatureRoutes.script`
- `NewFeature.ensureSchema()`
- `new_feature_table`
- new request-time `CREATE TABLE`
- new PreparedStatement persistence conventions
- a new specialty signature mechanism
- a new specialty audit mechanism
- a new specialty workflow mechanism
- a new specialty tenant model

Instead, a new capability should normally do one of four things:

1. add or change a definition,
2. extend a reusable generic platform capability,
3. add a legitimate canonical domain entity to the JAC model,
4. or introduce an explicitly approved architecture exception with clear ownership and tests.

---

# 2. Repository Shape and Measured Composition

The source is a large modular monolith with a significant amount of generated code and tooling.

## 2.1 Major measured areas

Approximate/static counts from the supplied snapshot:

| Area | Measured shape |
|---|---:|
| `server/ClaimsProcessingRouter.script` | ~10,094 LOC |
| `util/` | 573 files, 571 `.script`, ~17.2 MB |
| `*Routes.script` modules | **469** |
| Route modules visibly registered in router | **469 / 469** |
| `data/` | 1,401 files, ~76.7 MB |
| `ddl/` | 129 files, 128 SQL |
| `ui/public/` | 2,306 files, ~24.9 MB |
| `tests/` | 466 files, ~4.9 MB |
| `bin/` | 484 files, ~5.3 MB |
| `ai/` | 20 files, ~1.7 MB |
| `.deploy/` | ~92 MB in supplied source folder |

The upload did not contain `.git` metadata, so the assessment cannot reliably distinguish which generated/scratch/deploy files are actually Git-tracked from which are local artifacts.

## 2.2 Largest maintainability hotspots

Large files include:

| File | Approx. LOC |
|---|---:|
| `ui/public/js/cf-runtime.js` | 29,415 |
| `ui/public/uat-tests.js` | 14,244 |
| `data/PATIENTS.script` | 13,353 generated |
| `ui/public/kanban.js` | 11,880 |
| `data/CLAIMS.script` | 10,632 generated |
| `ui/public/staging.js` | 10,429 |
| `server/ClaimsProcessingRouter.script` | 10,094 |
| `ui/public/practice-ehr.js` | 8,439 |
| `bin/uat-characterize.ps1` | 7,173 |

These sizes identify maintainability pressure, but they do **not** imply that the largest files should be rewritten first. The architecture risk is currently greater in schema/persistence/isolation than in file size.

---

# 3. ADR Discipline ΓÇö Strong Direction, Uneven Enforcement

The repository contains a useful ADR set:

- **ADR-001** ΓÇö Canonical Persistence
- **ADR-002** ΓÇö Generated CRUD First
- **ADR-003** ΓÇö Approved Raw SQL Exceptions
- **ADR-004** ΓÇö Metadata Before Specialty Code
- **ADR-005** ΓÇö Authentication Deny-by-Default
- **ADR-006** ΓÇö Workflow Owns Orchestration
- **ADR-007** ΓÇö Document Inference Architecture
- **ADR-008** ΓÇö Canonical Platform Layers
- **ADR-009** ΓÇö Practice Is the Isolation Boundary

The ADR index explicitly establishes the right philosophy: a major decision should be written once, enforcement should be named, and evidence should be preferred over assertion.

The weakness is that **some ADR status text has become stale relative to the code**, and some named checks exist but are not actually build-blocking.

For example, ADR-005 still contains historical wording that no longer reflects the current route-auth scan. Current source analysis of the route auth checker showed:

- 469 route modules scanned,
- one public forgot-password route deliberately public by design,
- **0 wired modules with no visible authentication**,
- **0 unwired no-auth modules**.

That is a good architectural improvement and should be reflected in the durable architecture documentation.

The larger governance lesson is:

> **A checker existing in `bin/` is not the same thing as an architectural rule being enforced.**

The architecture should define a complete chain:

**ADR says ENFORCED ΓåÆ checker exists ΓåÆ checker registry marks ENFORCE ΓåÆ production build invokes it ΓåÆ positive-control test proves it blocks bad change.**

A future ΓÇ£checker of checkersΓÇ¥ should verify this chain automatically.

---

# 4. JAC and Schema Authority ΓÇö The Largest Architectural Risk

## 4.1 Canonical JAC schema condition

`data/ClaimsProcessingDdl.xml` contains:

- **119 table declarations**
- **118 unique table names**
- one duplicate declaration: **`ENCOUNTER_VITALS`**

All 118 unique declared tables appear to have both generated:

- `{TABLE}.script`
- `{TABLE}Crud.script`

That is positive: the current XML declarations are materially connected to generated persistence artifacts.

However, `ENCOUNTER_VITALS` is declared twice and the duplicate declarations are not identical. Several field sizes differ between the two definitions. `ClaimsProcessingMake.xml` also lists `ENCOUNTER_VITALS` twice.

This is a concrete example of a defect that the current generated-data checks do not catch. Existing checks primarily prove that expected generated files exist; they do not prove that the model itself is semantically non-contradictory.

### Required improvement

Add a **semantic JAC model checker** that validates at minimum:

- unique table names,
- unique field names within a table,
- unique component names,
- unique view names,
- valid primary-key definitions,
- valid foreign-key references,
- consistent nullability/type/size declarations,
- no duplicate `MakeAll` components,
- and generated coverage from the canonical model.

The duplicate `ENCOUNTER_VITALS` declaration should be repaired only once the intended field definition is confirmed, then regenerated and regression-tested.

---

# 5. Four Effective Schema Authorities Currently Exist

The biggest architectural concern is that the source currently has several independent mechanisms capable of defining application schema.

Static analysis found approximately:

| Schema mechanism | Approximate measured scope |
|---|---:|
| JAC XML (`ClaimsProcessingDdl.xml`) | 118 unique app tables |
| SQL under `ddl/` | ~229 unique `CREATE TABLE` targets |
| Runtime `.script` `CREATE TABLE` | ~595 unique table names |
| Runtime tables not in JAC XML | ~540 |
| Runtime tables outside both JAC XML and SQL DDL | ~528 |

There were roughly **618ΓÇô619 runtime `CREATE TABLE` occurrences** depending on parsing detail.

This is the clearest evidence of architecture drift.

A system with one desired schema authority and one migration history is understandable. A system with hundreds of tables that can be materialized from runtime code outside both the desired model and the migration lineage is much harder to reason about, deploy safely, migrate, test, and audit.

Examples of runtime-created specialty/domain tables include names such as:

- `acupuncture_evaluations`
- `acupuncture_sessions`
- `addiction_assessments`
- `adolescent_wellness_exams`
- `aesthetic_outcome_assessments`
- `bariatric_assessments`
- `bh_session_notes`
- `cardio_assessments`
- `clinical_visit_notes`

The concern is not that each of these concepts is illegitimate. The concern is that durable business entities are being created by a second or third schema mechanism rather than being classified and owned by the canonical data architecture.

---

# 6. Runtime DDL Drift and Enforcement Gap

The repository already recognizes inline DDL as debt.

`bin/inline-ddl-baseline.json` records a historical baseline of:

- total: **349**
- recorded: **2026-07-09**

Using the same broad style of static line scanning against the supplied source, the current snapshot contains approximately:

- **1,251 inline-DDL matching lines**
- spread across roughly **284 files**
- including roughly **619 `CREATE TABLE` occurrences**

High-concentration files include:

| File | Approx. inline-DDL matches |
|---|---:|
| `util/PracticeEhrBridgeSchema.script` | 64 |
| `ai/copilot/CopilotOrchestrator.script` | 60 |
| `util/ClinicalDataSchema.script` | 51 |
| `util/PortalSupport.script` | 35 |
| `util/AppealDrafter.script` | 27 |
| `ai/ml/RuleCandidateDiscovery.script` | 27 |
| `ai/ml/DenialPredictor.script` | 20 |
| `util/PracticeEhrPartnerEventSchema.script` | 16 |
| `util/BehavioralHealthRoutes.script` | 15 |

The exact count is less important than the direction: the runtime DDL surface is large and materially exceeds the historic baseline.

## 6.1 Existing checker governance gap

`bin/checker-registry.json` indicates:

- `check-inline-ddl-ratchet.ps1` ΓåÆ **MANUAL-RUNTIME**
- `check-request-path-ddl-ratchet.ps1` ΓåÆ **MANUAL-RUNTIME**
- `check-query-layer-ratchet.ps1` ΓåÆ **OBSERVE**
- `check-raw-sql-ratchet.ps1` ΓåÆ **OBSERVE**

The registry notes that the inline-DDL checker is static and runnable but is **not wired into `pipeline/cloudbuild-deploy.yaml`**.

Therefore the architecture currently has a strong documented rule and useful diagnostic tools, but not a guaranteed build-blocking enforcement chain.

### Required response

Do **not** simply rebaseline the inline-DDL count from ~349 to ~1,251 and declare success.

Instead:

1. inventory/classify the current legacy debt,
2. establish a controlled grandfathered baseline,
3. make **new growth fail the build**,
4. then burn down the legacy set by domain.

The first objective is **no new runtime DDL debt**. The second is gradual elimination.

---

# 7. SchemaLifecycle ΓÇö Correct Mechanism, Very Low Adoption

The source contains a good architectural mechanism in `SchemaLifecycle`, but it is not yet broadly used.

Running the request-path DDL checker against the supplied source reported:

- `ensureSchema` implementations: **57**
- behind `SchemaLifecycle` guard: **1**
- unguarded: **56**
- startup-ensured but unguarded: **10**
- lazy-only: **46**
- converted example: `PortalSupport.script`

The checker identifies next candidates including:

- `DiagnosticOrdersRoutes`
- `EligibilityBenefitBrowserRoutes`
- `EngineConfigStore`
- `PatientDemographicsExtRoutes`
- `PatientDocumentVerificationsRoutes`
- `PatientVisitStatusRoutes`
- `PortalRequestsRoutes`
- `ReferralDirectoryRoutes`
- `ReferralManagementRoutes`
- `VisitSummaryRoutes`

## 7.1 Correct migration sequence

The 10 startup-ensured modules are the safest first conversions:

1. prove startup/migration creates what they require,
2. add lifecycle readiness guard,
3. prove requests execute no DDL,
4. remove or disable request-time schema mutation.

For the 46 lazy-only modules, the order is critical:

1. first move their required schema into migration/startup ownership,
2. verify a clean database receives the required objects,
3. only then guard/remove the lazy `ensureSchema` behavior.

Guarding first without creating the schema elsewhere would simply convert architecture debt into runtime failure.

The eventual target should be:

> **Request-path DDL = zero.**

---

# 8. Indirect Request-Path DDL Must Also Be Eliminated

A notable hole exists through `model/DatabaseInit.ensureCodingReferenceTables()`.

That method can execute schema mutation for reference tables such as:

- `cpt_codes`
- `icd10_codes`
- `medication_codes`
- related indexes

It is called from request-oriented route modules including:

- `ReferenceMedicationsPopulateRxnormRoutes`
- `ReferenceCodingSearchRoutes`
- `ReferenceIcd10StatsRoutes`
- `ReferenceCptUploadRoutes`
- `ReferenceMedicationsStatsRoutes`
- `ReferenceCptStatsRoutes`
- `ReferenceMedicationsUploadRoutes`
- `ReferenceMedicationsSearchRoutes`
- `ReferenceIcd10UploadRoutes`
- `StagingRoutes`

That means a simple static exemption for `DatabaseInit` can hide a request ΓåÆ helper ΓåÆ DDL path.

The architectural requirement must therefore be **call-path based**, not merely file-name based.

Reference tables should be created by controlled startup/migration/bootstrap. Requests should use them or fail fast with a clear schema-not-ready error; they should not repair the database as a side effect of serving a request.

---

# 9. Migration Runner ΓÇö Integrity Defects Need Early Repair

`model/DatabaseInit.applyPendingMigrations()` currently implements a migration ledger and transactional application of new migration files, which is directionally correct.

However, several integrity issues are present.

## 9.1 Current behavior

The runner:

- ensures `schema_migrations`,
- loads applied numeric versions,
- discovers files under `ddl/migrations`,
- derives version from a numeric filename prefix,
- if the ledger is empty, can treat the first run as a baseline and record existing migrations without executing them,
- applies new files transactionally,
- records via `INSERT ... ON CONFLICT (version) DO NOTHING`,
- and can catch a top-level migration error and continue boot.

## 9.2 Current migration set

The supplied source contains:

- 59 SQL files in `ddl/migrations`
- 58 numbered files
- numeric versions 1ΓÇô56 with version 38 absent
- duplicate numeric versions:
  - `029_backup_journal.sql`
  - `029_field_encryption_widen_and_blind_index.sql`
  - `033_clinical_documents_modules_and_dimensions.sql`
  - `033_provisional_patient_chart.sql`
  - `034_chart_status_insert_guard.sql`
  - `034_clinical_documents_domain.sql`
- one non-numbered migration:
  - `fix_missing_patient_insurance_ids.sql`

This is a migration identity defect because distinct files can map to the same primary ledger key.

## 9.3 Required migration contract

The migration system should move to the following contract:

1. **Every migration has a unique immutable identity.**
   - Prefer full filename or a unique normalized identifier.
   - If numeric versions remain, duplicate version prefixes must fail static validation.

2. **The ledger stores filename and checksum.**
   - Previously applied migrations are verified on every boot/deploy.
   - Historical migration contents must not silently change.

3. **No silent first-run baselining.**
   - Baselining is an explicit administrator operation.
   - It must validate the database against the expected baseline before marking migrations applied.

4. **Migration failure is deployment failure.**
   - `schemaPhase=failed` must prevent a candidate from becoming promotable.
   - Boot should not simply log migration corruption and continue as though the application is healthy.

5. **The migration ledger is authoritative history.**
   - It is not a best-effort hint.

The duplicate 029/033/034 files must be dispositioned carefully. They should **not** simply be renamed in place without checking how any existing live ledger records them. Historical migration repair needs an explicit transition plan.

---

# 10. `ddl/schema` vs `ddl/migrations`

The source contains two SQL histories/shapes:

- `ddl/schema`
- `ddl/migrations`

They do not currently read as one obvious executable lineage.

The target should be:

- **`ddl/migrations/` = the only production schema evolution mechanism.**
- `ddl/schema/` = generated current-state snapshot, bootstrap artifact, documentation, or archive ΓÇö but not a second migration history.

A future generated schema snapshot can be very useful for:

- clean-room database creation,
- local/test bootstrap,
- disaster recovery validation,
- schema diffing,
- architecture audits.

But live upgrades should occur through ordered, verified migrations.

---

# 11. Recommended JAC Schema Ownership Model

JAC should remain central. It should not be replaced.

The clean target responsibility model is:

## 11.1 `ClaimsProcessingDdl.xml`

Authoritative **desired state** for durable application-owned relational entities that JAC can represent:

- tables,
- columns,
- sizes/types,
- nullability,
- primary keys,
- foreign keys,
- supported constraints.

## 11.2 `ClaimsProcessingViews.xml`

Authoritative named complex read models and joins that should be reused rather than reimplemented as ad hoc SQL.

## 11.3 Generated JEO/CRUD

The default persistence mechanism for normal entity reads and writes.

## 11.4 `Query.script`

Governed runtime query builder for projections, aggregates, filters, scope-aware access, and query shapes not adequately represented by generated CRUD.

## 11.5 `Write.script`

Governed write path where generated CRUD is not a good fit but controlled scope/identifier rules can still be enforced.

## 11.6 `ddl/migrations`

The **only executable production schema evolution path**.

Migrations also legitimately own PostgreSQL-native constructs that JAC does not represent well, such as:

- specialized indexes,
- partial indexes,
- triggers,
- functions,
- extensions,
- data migrations,
- certain native constraints.

This is not ΓÇ£two sources of truthΓÇ¥ if responsibilities are explicit:

> **JAC XML = desired state.**  
> **Migrations = verified history for reaching that desired state.**

## 11.7 Generated schema manifest

Generate a machine-readable artifact from the JAC model, for example `schema-manifest.json`, containing:

- entity/table name,
- fields,
- SQL/JAC type,
- size,
- nullability,
- primary key,
- foreign keys,
- tenant-key classification,
- generated artifact names.

That manifest can become the input to architecture checks and to `SchemaCatalog`.

The desired direction for `SchemaCatalog` is:

**JAC desired model ΓåÆ generated schema manifest ΓåÆ governed runtime catalog**, with the live database used to verify drift rather than define the application's model by accident.

---

# 12. Persistence Architecture ΓÇö Good Components, Low Convergence

Outside generated `data/`, the source contains approximately **3,700 raw `prepareStatement` calls** spread across more than 430 files.

Approximate observed generated/governed persistence usage includes:

- generated CRUD reads: ~625
- generated `batchCreate`: ~157
- generated updates: ~218
- generated removes: ~27
- external `Query.on(...)` usage: only a few sites
- external `Write.into(...)` usage: effectively none in the snapshot

The exact numbers are less important than the shape:

> `Query` and `Write` are architecturally promising, but raw JDBC remains the dominant custom persistence technique.

## 12.1 Do not perform a random SQL conversion campaign

Converting thousands of PreparedStatements one by one without domain ownership would create churn and risk without guaranteeing convergence.

Convert by **capability/domain**.

For each persistence use case:

- normal entity ΓåÆ generated CRUD,
- supported projection/filter ΓåÆ `Query`,
- controlled custom write ΓåÆ `Write`,
- reusable complex join ΓåÆ declared JAC view,
- genuine PostgreSQL-native/bulk/analytics/transport exception ΓåÆ approved raw SQL with explicit marker and tests.

Every approved raw SQL exception should prove at least:

- tenant/practice scope,
- identifier safety,
- parameter binding,
- audit behavior where relevant,
- idempotency where relevant,
- and characterization coverage.

---

# 13. Specialty Drift ΓÇö Platform Capabilities Must Win

ADR-004 is correct: specialty differences should generally be **definitions and metadata executed by generic engines**, not cloned infrastructure.

The source still contains many specialty route modules and specialty-specific runtime schema.

That does not mean specialty logic is wrong. It means the architecture needs a stronger rule about **what a specialty is allowed to own**.

A specialty may configure or extend canonical capabilities. It should not independently own copies of:

- patient identity,
- encounter identity,
- documentation truth,
- evidence,
- signatures,
- workflow,
- audit,
- payments,
- inventory semantics,
- messaging,
- authentication,
- authorization,
- tenant boundaries.

When a specialty reveals a platform gap, build the reusable capability once, then configure it for the specialty.

## 13.1 Generalize the existing aesthetics fork checker

`check-aesthetics-platform-forks.mjs` is a good pattern because it detects specialty reimplementation of canonical concerns.

Generalize this into something like:

> `check-platform-capability-forks`

with canonical owners for:

- patient,
- practice,
- encounter,
- clinical document,
- signature,
- evidence,
- procedure,
- photography/media,
- inventory,
- payment,
- claim,
- audit,
- auth/security,
- messaging,
- workflow.

The checker should prevent new specialty infrastructure while legacy forks are retired behind characterization parity.

---

# 14. Authentication Is Healthier; Practice Isolation Is Not Yet Complete

The authentication architecture has improved materially.

The current static route-auth checker found no wired unauthenticated route modules other than a deliberate public forgot-password endpoint.

The more important remaining problem is **practice isolation**.

## 14.1 Current identity shape

`JwtHelper.script` currently carries claims such as:

- user/sub,
- `org_id`,
- role,
- email,
- issued/expiry times.

It does **not** make active `practice_id` a first-class token claim.

`RequestContext.script` similarly contains:

- userId,
- orgId,
- role,
- email,

but not the active practice.

`RouteGuard.ownsPractice()` validates that a caller-supplied practice belongs to the user's organization. That is useful, but it primarily protects **cross-organization** access. It does not, by itself, make one practice inside an organization inaccessible from another sibling practice.

ADR-009 explicitly declares the practice as the isolation boundary. The request identity model needs to fully implement that decision.

## 14.2 Target isolation flow

The target should be:

**login ΓåÆ active practice selection ΓåÆ token/session contains `practice_id` ΓåÆ `RequestContext.practiceId` ΓåÆ every PHI read/write is scoped to active practice**

A caller-supplied `practice_id` should either:

- match the active practice,
- or require an explicit cross-practice capability with auditable justification.

Add characterization/DLP proof with at least two practices in the same organization showing that a normal user cannot cross-read or cross-write sibling-practice PHI.

## 14.3 JWT maintainability

The current JWT implementation performs custom HS256 and homegrown JSON string construction/parsing. That becomes increasingly fragile as identity claims become richer.

After the practice-boundary work is stable, replace the low-level token implementation with a mature, version-pinned JWT library behind the existing authentication abstraction. This is a maintainability/security hardening task, not a reason to redesign the whole auth system.

---

# 15. JAC Build and Generation Toolchain ΓÇö Clever but Fragile

The source contains a technically clever compatibility bridge, but it is not a maintainable long-term build architecture.

`bin/generate-with-local-jdk.bat` depends on machine-specific paths including values under a user profile such as:

- `C:\Users\ptm\.codex\memories\claimsprocessing-local-jdk23`
- local JAC class trees
- local JAC jar locations

The generation path also patches Java class-file versions so JDK24-produced classes can be consumed by a JDK23 JAC environment.

`bin/phase-generate.bat` contains logic that can continue even when the generator exits non-zero if expected scripts were still produced.

`bin/compile-router.bat` can likewise treat a non-zero JAC result as survivable when a fresh class artifact exists.

This means:

- the same command can report failure yet be considered successful,
- build correctness depends partly on artifact freshness heuristics,
- class headers are manipulated to bridge toolchain mismatch,
- and generation depends on machine-local memory/tool paths.

That is too fragile for the durable architecture.

## 15.1 Target toolchain

The desired build should have:

- one pinned JDK level for generation/compile compatibility,
- one pinned JAC distribution,
- all build inputs versioned or hermetically supplied,
- one canonical generator entry point,
- one canonical compile entry point,
- identical local/cloud semantics,
- no class-file byte-version patching,
- no dependency on `C:\Users\...` personal-machine paths,
- no ambiguous ΓÇ£non-zero but maybe okayΓÇ¥ result.

If JAC requires Java 23, compile compatible inputs to Java 23 bytecode and run them consistently. A newer JVM can run older compatible bytecode; the build should not need to rewrite class-file headers as a normal step.

There are also many `bin/add-*-generated.ps1` scripts. This is another sign that generation orchestration has become manual and table-specific.

Generation should increasingly be driven from the canonical model (`ClaimsProcessingMake.xml` / DDL definitions) rather than from a growing collection of ΓÇ£which add-X script do I run?ΓÇ¥ procedures.

---

# 16. Deployment Architecture ΓÇö Current Safe Path Is a Strength

The safer deployment architecture is one of the stronger parts of the current platform.

The active path through `bin/cloud-deploy.ps1` and `pipeline/cloudbuild-deploy.yaml` follows a much safer pattern:

- build candidate,
- deploy no-traffic candidate,
- ensure fixtures/readiness,
- run characterization,
- execute rendered/browser gate,
- promote only after proof.

This should be preserved.

A legacy root `cloudbuild.yaml` still exists and represents a more direct deployment shape. Even if current single-deploy-path checks prevent accidental use, retaining a plausible obsolete deployment file can confuse future operators and agents.

Once current deployment governance is fully confirmed, archive, neutralize, or clearly quarantine obsolete deployment entry points so the canonical production path is visually and mechanically obvious.

---

# 17. Router Maintainability

`ClaimsProcessingRouter.script` is large at roughly 10,094 LOC, but the architecture has already improved by moving behavior into **469 route modules** that are all visibly wired.

Therefore the router is increasingly a **composition root**, not merely a giant business-logic god file.

Do not make router rewriting a top remediation priority.

A later maintainability improvement could generate route registration from a manifest/registry, reducing repetitive wiring and allowing structural validation of:

- route ownership,
- authentication policy,
- practice scope,
- feature flags,
- dependency registration.

But this should come after schema, migration, lifecycle, and isolation convergence.

---

# 18. UI Maintainability

Several JavaScript files are now large enough to slow comprehension and increase change collision risk:

- `cf-runtime.js` ~29.4k LOC
- `kanban.js` ~11.9k LOC
- `staging.js` ~10.4k LOC
- `practice-ehr.js` ~8.4k LOC

Do **not** rewrite them wholesale.

Extract stable modules incrementally behind existing browser and characterization tests.

For example, `kanban.js` has plausible extraction seams such as:

- kanban API/client,
- state/model,
- render,
- actions/commands,
- focus definitions,
- lane behavior,
- detail panel,
- priority/ranking.

The same approach can later be applied to `cf-runtime.js`: identify stable responsibilities, extract one at a time, keep behavior green, and avoid a framework migration unless there is a separate compelling business case.

---

# 19. What Is Already Architecturally Strong

The architecture review should not be read as ΓÇ£the system is badly designed.ΓÇ¥ Several important foundations are good and should be actively protected.

## Preserve these

1. **ADR discipline** and the evidence-over-assertion mindset.
2. **Generated JAC CRUD** for canonical application tables.
3. **JAC views** for named shared read models.
4. **`DbConnectionFactory`** and centralized DB connection ownership.
5. **`SchemaLifecycle`** as the desired readiness boundary.
6. **`Query` / `Write` design** with identifier governance and tenant-scope intent.
7. **Route authentication standardization.**
8. **Candidate/gate/render/promote deployment discipline.**
9. **DLP's refusal to manufacture green.**
10. **Rendered browser gates** for actual behavior, not only source scans.
11. **Metadata/definition engines** as the future platform model.
12. **Focused Kanban / control tower** as a platform capability instead of isolated dashboard screens.
13. **Characterization before replacement** for risky legacy behavior.

The goal is to make implementation consistently obey these ideas.

---

# 20. Recommended Remediation Sequence

## Phase 1 ΓÇö Freeze New Schema Drift

**Goal:** stop the problem from getting larger.

Actions:

- Wire the static inline-DDL ratchet into the real cloud/release gate.
- Add positive-control proof that a new unapproved runtime `CREATE/ALTER` fails the build.
- Do not blindly reset the legacy baseline.
- Generate an inventory of existing inline DDL by owner/domain/table.
- Require ARCH/DB disposition for any new durable table.

**Exit condition:** no new unclassified runtime DDL can merge/deploy.

---

## Phase 2 ΓÇö Repair Migration Integrity

**Goal:** make schema evolution trustworthy before moving more schema into it.

Actions:

- Reject duplicate migration identities statically.
- Resolve duplicate 029/033/034 histories with a live-safe plan.
- Store filename + checksum in migration ledger.
- Verify historical checksum on every run.
- Replace implicit first-run baselining with an explicit validated admin action.
- Make migration failure a candidate/deploy blocker.

**Exit condition:** migration history is unique, immutable, verifiable, and fail-fast.

---

## Phase 3 ΓÇö Eliminate Request-Path DDL

**Goal:** a request never changes schema.

Actions:

- Convert the 10 startup-ensured `ensureSchema` modules first.
- Move each lazy-only module's schema into migration/startup before guarding/removing lazy creation.
- Remove indirect request DDL through `DatabaseInit.ensureCodingReferenceTables()`.
- Add call-path-aware testing for request ΓåÆ helper ΓåÆ DDL.

**Metric:** unguarded request-path `ensureSchema` **56 ΓåÆ 0**.

**Exit condition:** request-path DDL = 0.

---

## Phase 4 ΓÇö Establish JAC Schema Closure

**Goal:** every durable application-owned relational entity has an explicit architectural owner.

Actions:

- Fix duplicate `ENCOUNTER_VITALS` declarations in DDL/Make XML.
- Add semantic model validation.
- Classify all runtime-created tables:
  - canonical durable JAC entity,
  - PostgreSQL-native/migration-owned construct,
  - transport/log/ephemeral infrastructure,
  - test/staging-only,
  - obsolete/retire.
- Move legitimate durable application entities into the canonical JAC model.
- Generate `schema-manifest.json`.
- Compare manifest to migration outcome and live schema.

**Exit condition:** durable relational state is explainable from the canonical model plus explicitly classified native objects.

---

## Phase 5 ΓÇö Converge Persistence by Domain

**Goal:** reduce direct JDBC without destabilizing behavior.

Actions:

- Pick one domain/capability at a time.
- Characterize current behavior first.
- Move normal access to generated CRUD.
- Move supported queries to `Query`.
- Move controlled writes to `Write`.
- Move reusable joins to JAC views.
- Preserve only approved raw SQL exceptions.
- Require tenant/audit/idempotency proof for exceptions.

**Exit condition:** no domain requires multiple unrelated persistence idioms for the same canonical entity.

---

## Phase 6 ΓÇö Stop Specialty Replication

**Goal:** specialty differences become metadata/configuration rather than cloned platform infrastructure.

Actions:

- Generalize the aesthetics fork checker to all specialties.
- Establish canonical platform owners for common capabilities.
- Block new specialty patient/encounter/signature/audit/payment/workflow infrastructure.
- Migrate legacy specialty forks only after behavioral parity is characterized.

**Exit condition:** adding a specialty primarily adds definitions, not infrastructure.

---

## Phase 7 ΓÇö Complete Practice-Level Isolation

**Goal:** ADR-009 becomes the actual identity and data boundary.

Actions:

- Carry active `practice_id` in login/session/token.
- Add `practiceId` to `RequestContext`.
- Require every PHI read/write to scope to active practice.
- Validate caller-supplied practice IDs against active practice.
- Add explicit audited cross-practice permission only where needed.
- Add same-org/two-practice DLP proof.

**Exit condition:** a user in Practice A cannot normally read/write Practice B data even when both share one organization.

---

## Phase 8 ΓÇö Normalize the JAC Toolchain

**Goal:** one reproducible build everywhere.

Actions:

- Pin JDK/JAC versions.
- Remove personal-machine path dependencies.
- Eliminate class-header version patching.
- Make generator/compile exit semantics unambiguous.
- Make cloud and local generation behavior identical.
- Replace table-specific generation helper proliferation with model-driven generation.

**Exit condition:** a clean agent/cloud environment can generate and compile without hidden local state.

---

## Phase 9 ΓÇö Reduce Maintainability Hotspots Incrementally

**Goal:** improve comprehensibility without large rewrite risk.

Actions:

- Generate route registration where practical.
- Extract stable UI modules from `kanban.js`, `cf-runtime.js`, `practice-ehr.js`, and `staging.js` one seam at a time.
- Keep browser gates and DLP behavior green after each extraction.

**Exit condition:** large files shrink because responsibilities moved behind stable contracts, not because of a big-bang rewrite.

---

## Phase 10 ΓÇö Produce an Architecture Scorecard on Every Build

Recommended scorecard metrics:

- JAC unique table declarations
- duplicate JAC entity count
- canonical-schema coverage
- runtime DDL occurrence count
- request-path DDL count
- lazy `ensureSchema` count
- duplicate migration identity count
- migration checksum mismatch count
- raw PreparedStatement count
- approved raw SQL exception count
- generated CRUD usage by domain
- `Query` usage
- `Write` usage
- specialty capability-fork count
- routes without auth
- PHI endpoints without active practice scope
- toolchain machine-local dependency count
- class-version patch count
- legacy deploy-path count

The scorecard should show trend, not just current values.

---

# 21. Immediate Priority ΓÇö What Should Be Fixed First

If only three architectural efforts can begin immediately, they should be:

### 1. Migration identity, checksum, and fail-fast semantics

Because every later schema cleanup depends on migrations being trustworthy.

### 2. Build-blocking ΓÇ£no new runtime DDLΓÇ¥ enforcement

Because architectural debt cannot be burned down while the same mechanism is still growing.

### 3. Remove indirect request DDL and migrate the first SchemaLifecycle candidates

Because request-order-dependent schema creation is an operational correctness risk, not merely a style issue.

After those, continue toward JAC schema closure.

---

# 22. Suggested Agent Ownership

This assessment should drive coordinated work without causing every agent to edit the same architectural surfaces.

## AgentARCH

Own:

- canonical schema ownership contract,
- semantic JAC model checker,
- checker-of-checkers governance,
- generalized platform capability fork checker,
- practice-isolation contract,
- architecture scorecard definitions.

Do not own wholesale schema migration implementation.

## AgentDB

Own:

- migration ledger redesign,
- duplicate migration disposition,
- filename/checksum verification,
- JAC-vs-runtime table inventory,
- durable-table classification,
- moving eligible durable entities into canonical JAC/migrations,
- removal of request-time schema repair.

## AgentInfrastructure

Own:

- wiring architectural ratchets into the real deployment gate,
- positive-control proof,
- hermetic JDK/JAC toolchain,
- removal of personal-path and class-version-patch dependencies,
- canonical build/deploy entry-point clarity.

## AgentCF / AgentAesthetics / AgentFuture

Own within their domains:

- no new specialty schema forks,
- definitions-first implementation,
- migration from specialty infrastructure to reusable canonical capabilities,
- use of the unified persistence path.

## AgentUI

Own:

- no schema responsibilities,
- no persistence architecture invention in the client,
- incremental extraction of large JS files only behind behavioral/browser tests,
- consumption of canonical APIs/definitions.

## AgentDLP

Own proof that architecture changes preserve behavior:

- two-practice isolation scenarios,
- schema-not-ready scenarios,
- migration-failure scenarios,
- persistence parity during conversion,
- no request-time DDL behavior,
- specialty/canonical behavior parity.

DLP remains the behavioral authority; static checkers should not substitute for runtime proof.

---

# 23. Non-Negotiable Rules for All Agents

Until this architecture debt is materially reduced:

1. **No new `ensureSchema` in request-capable code.**
2. **No new runtime `CREATE TABLE` / `ALTER TABLE` for durable application entities.**
3. **No new specialty table without ARCH/DB classification.**
4. **No new raw SQL where generated CRUD / Query / Write / declared view already covers the shape.**
5. **No new sibling persistence model for patient, encounter, signature, audit, payment, workflow, or tenant identity.**
6. **No hand-editing generated `data/*.script` to solve model behavior.**
7. **No migration that can share an identity with another migration.**
8. **No deployment that promotes after migration failure.**
9. **No PHI endpoint that trusts a caller-supplied practice ID without active-practice validation.**
10. **No architecture rule described as ΓÇ£enforcedΓÇ¥ unless the real release path executes and positively proves the enforcement.**

---

# 24. Concrete Success Criteria

The following outcomes would demonstrate that the remediation is working.

## JAC/model

- Duplicate `ENCOUNTER_VITALS` removed from `ClaimsProcessingDdl.xml`.
- Duplicate `ENCOUNTER_VITALS` removed from `ClaimsProcessingMake.xml`.
- Generated data rebuilt with no behavior regression.
- Semantic JAC checker passes and blocks deliberate duplicate-table positive control.

## Migration integrity

- Duplicate numeric migration IDs 029/033/034 safely dispositioned.
- New migration identity checker fails duplicate IDs.
- `schema_migrations` records immutable identity + filename + checksum.
- Historical checksum mismatch fails readiness/deploy.
- Silent empty-ledger baselining removed.
- Explicit baseline operation validates the database before recording history.
- Migration failure blocks candidate promotion.

## Runtime DDL

- Static inline-DDL ratchet is invoked by the real release/deploy pipeline.
- Controlled legacy inventory exists.
- New unapproved inline DDL fails the build.
- Unguarded request-path `ensureSchema`: **56 ΓåÆ 0**.
- `DatabaseInit.ensureCodingReferenceTables()` no longer mutates schema from request paths.
- Request-path DDL: **0**.

## Canonical schema closure

- Every durable runtime-created table has an explicit disposition.
- JAC canonical coverage rises over time.
- `schema-manifest.json` generated from JAC definitions.
- Manifest-vs-migration/live-schema drift is checked automatically.

## Persistence

- Raw PreparedStatement count trends downward by domain.
- `Query` and `Write` adoption trends upward where they are appropriate.
- Approved raw SQL exceptions are explicitly marked and tested.
- No domain conversion is declared complete until behavioral parity is proven.

## Specialty/platform

- Generalized capability-fork checker active.
- New specialties introduce definitions before new infrastructure.
- No new specialty copies of canonical identity/signature/audit/payment/workflow mechanisms.

## Practice isolation

- `practice_id` is first-class in session/token/request context.
- Two practices within one org are included in DLP fixtures.
- Normal Practice A user cannot read/write Practice B PHI.
- Explicit cross-practice access, if needed, is authorized and audited.

## Toolchain

- Build succeeds without `C:\Users\ptm\.codex\memories` dependencies.
- No class-version byte patching.
- Pinned JAC/JDK versions are reproducible in cloud and local lanes.
- Generator non-zero means failure; success is no longer inferred from stale/fresh artifacts.

---

# 25. Architecture Quality Assessment by Area

| Area | Assessment | Comment |
|---|---|---|
| Overall architectural direction | **Strong** | ADRs and platform-first direction are sound. |
| Modular monolith approach | **Strong** | Appropriate for current product stage; no microservice rewrite needed. |
| JAC generated persistence spine | **Strong foundation** | Complete for current declared XML tables, but canonical schema is not closed. |
| Schema authority | **High risk** | Multiple independent table-creation mechanisms. |
| Migration integrity | **High risk** | Duplicate identities, weak baseline/checksum semantics, non-fail-fast behavior. |
| Request-path schema lifecycle | **High risk** | 56 unguarded `ensureSchema` implementations in snapshot. |
| Persistence convergence | **Needs substantial work** | Raw PreparedStatement still dominant. |
| Metadata/specialty strategy | **Correct direction, incomplete execution** | Specialty infrastructure continues to proliferate. |
| Authentication | **Improved/healthy direction** | Static route auth coverage looks strong. |
| Practice isolation | **Incomplete** | Org-level identity is stronger than practice-level context. |
| Deployment gate | **Strong** | Candidate/gate/render/promote should be preserved. |
| JAC build toolchain | **Fragile** | Machine-local paths and class-version patching are maintainability liabilities. |
| Router structure | **Acceptable** | Large composition root but route modularization is meaningful. |
| UI maintainability | **Growing debt** | Large JS files should be split incrementally, not rewritten. |
| Test/DLP philosophy | **Strong** | Runtime behavioral proof is a major asset. |

---

# 26. Founder-Level Conclusion

PracticeForceOne is **not at a rewrite point**.

The architecture has already developed many of the right building blocks: ADRs, JAC-generated persistence, declarative views, route modularization, schema lifecycle intent, safe deployment, DLP proof, and a metadata-driven platform direction.

The problem is that the implementation has accumulated **parallel architectural paths faster than the canonical architecture has absorbed them**.

The remedy is convergence, not reinvention.

The highest-value move is to make one architecture become unavoidable:

> **One desired schema. One migration history. One persistence contract. One practice boundary. One set of platform capabilities. Specialty as configuration. Evidence in every gate.**

If those principles are enforced incrementally, PracticeForceOne can continue shipping while architecture debt is reduced. The system can become materially easier to maintain and safer to deploy without discarding the platform already built.

---

# Appendix A ΓÇö Key Source Findings

## A.1 Route architecture

- 469 `*Routes.script` modules detected.
- 469 appear wired in `ClaimsProcessingRouter.script`.
- Current auth checker found no wired unauthenticated route modules except intentional public forgot-password behavior.

## A.2 Canonical JAC model

- 119 table declarations.
- 118 unique table names.
- Duplicate `ENCOUNTER_VITALS` declaration.
- All 118 unique declared tables have generated JEO and CRUD artifacts.

## A.3 Schema fragmentation

- ~229 unique SQL `CREATE TABLE` targets under `ddl/`.
- ~595 unique runtime-created table names.
- ~540 runtime table names not represented in JAC XML.
- ~528 runtime table names outside both JAC XML and SQL DDL sets.

These counts are static/regex-oriented and should be treated as architecture-inventory measurements rather than exact live-database counts.

## A.4 Request/schema lifecycle

- 57 `ensureSchema` implementations.
- 1 lifecycle-guarded.
- 56 unguarded.
- 10 startup-ensured but unguarded.
- 46 lazy-only.

## A.5 Migrations

- 59 files in `ddl/migrations`.
- 58 numbered.
- duplicate 029, 033, and 034 numeric identities.
- one non-numbered fix migration.

## A.6 Persistence

- roughly 3,700 direct `prepareStatement` usages outside generated data code.
- governed `Query`/`Write` architecture exists but is lightly adopted.

## A.7 Toolchain

- current generation depends on JDK23/JDK24 compatibility workarounds.
- personal-machine `.codex\memories` paths are referenced.
- class-file version patching is used.
- some generation/compile scripts tolerate non-zero tool exits based on output freshness.

---

# Appendix B ΓÇö Architecture Decision Summary

For future work, use this decision matrix:

| Need | Preferred mechanism |
|---|---|
| New durable application entity | Add to JAC desired model + generated CRUD + migration |
| Complex reusable read | JAC declared view |
| Dynamic scoped query | `Query` |
| Governed custom write | `Write` |
| PostgreSQL-native index/function/trigger | Migration, explicitly classified |
| Data backfill/transformation | Migration |
| Specialty variation | Definition/metadata over generic platform capability |
| New workflow | Workflow engine definition, not bespoke specialty orchestrator |
| Schema readiness | Startup/migration + `SchemaLifecycle`, never request repair |
| Authentication | Central route guard/context |
| Tenant isolation | Active `practice_id` in identity/context and all PHI persistence |
| Exceptional raw SQL | Approved exception + scope/safety/audit/idempotency tests |
| Production release | Candidate ΓåÆ gates ΓåÆ rendered/DLP proof ΓåÆ promote |

---

# Appendix C ΓÇö Architecture Rule to Repeat in Reviews

> **Before adding code, ask whether the change creates a new implementation of a capability PracticeForceOne already owns. If yes, extend the canonical capability instead. If the canonical capability is insufficient, improve it once for the platform before adding the specialty behavior.**
