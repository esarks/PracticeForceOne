---
title: "PracticeForceOneTaxonomy"
---

# PracticeForceOne Taxonomy — Every Topic in the Project

**Date:** 2026-06-12 (last reviewed 2026-07-24) · **Author:** Agent1 · **Audience:** clinic owners and partners evaluating PracticeForceOne — this tree exists to show, honestly and completely, **how much is involved in making a product like this work**. Every branch below is a real topic this project has designed, built, tested, documented, or actively manages. Nothing is padding.

**How to read it:** eleven top-level domains, each expanding into tiers. Plain-language first; technical terms carry a short explanation in parentheses. Source documents (from the project wiki and working folder, ~300 documents total) are cited per branch so any topic can be explored in depth.

---

## 1. The Product — what PracticeForceOne does

- **Practice management & scheduling** *(PracticeForceOneHowToScheduling, SchedulePlan, MR3QuickScheduleFoundation)*
  - Appointments — booking, rescheduling, cancel, no-show, check-in/check-out lifecycle
  - Provider calendars, availability templates, multi-provider views
  - Waitlist with auto-fill; overbook guardrails; quick-schedule
  - Temporal validation (end-before-start, double-booking prevention)
  - Resource & room blocks; clinic locations
- **Clinical EHR** *(PracticeForceOnePracticeEHR + Capabilities/ClinicalDataDepth/BuildPlan, MR4CpoeOrderModel)*
  - Encounters — check-in → documentation → sign → check-out lifecycle
  - Clinical notes (SOAP), note versioning, amendments, signed-note immutability, sign-gate (an empty encounter cannot be signed)
  - Vitals with physiologic-range validation; problems; allergies; diagnoses
  - Medications — reconciliation, refills with bounds-checking; ePrescribing (eRx) with controlled-substance (EPCS) blocking
  - Orders (CPOE — computerized provider order entry): order sets, due dates, overdue escalation, closed-loop follow-up ("no lost orders")
  - Results — abnormal/critical severity, acknowledgement, unacknowledged-critical escalation with provider notification, patient-release gating
  - Clinical tasks; care teams; provider supervision; patient chart
  - Clinical decision support rules (CDS) with override audit trails
- **Revenue cycle management (RCM)** *(PracticeForceOneEDI, PracticeForceOneDenialResolutionWorkflow, MR4RcmModuleExtractionSpec)*
  - Claims — creation from charges, scrubbing (pre-submission error checking), submission, status tracking, soft-delete safety
  - Eligibility & benefits verification — on-demand checks, scheduled re-checks, refresh queues
  - Prior authorizations — requests, appeals on auth denials, SLA monitoring, document linkage, medical-necessity evidence
  - EDI (the electronic insurance "wire formats"): 837 claims out, 835 remittances in, 270/271 eligibility, 276/277 claim status, 278 auth, 999/TA1 acknowledgments; queues and audit of every exchange
  - Payments & remittance — ERA auto-posting with exact money math, manual payments, reconciliation, recoupments, batch actions
  - Denials — worklists, root-cause reasoning, routing, resolution workflows
  - Appeals — letter generation, templates, submission tracking, outcomes
  - A/R follow-up — aging, automated status inquiry, follow-up queues
  - Patient statements; secondary billing; charge review queue; charge optimization; fee schedules
- **Patient portal** *(PracticeForceOnePortal, MR4-PortalOwnershipCert-Plan)*
  - Self-registration with email confirmation; clinic-activation gating; kiosk and quick-access login codes
  - Pre-check-in questionnaires; dynamic forms; follow-up submissions with staff review
  - Patient documents upload; appointments view; strict patient-to-patient isolation
  - Staff-side portal administration — account lifecycle, chart linking, access revocation
- **AI & automation** *(PracticeForceOneAI, AI-COVERAGE-MATRIX, MR3AutopilotEngine)*
  - Biller copilot — conversational assistant with audited tool calls, scoped corrections (patient/claim/denial/insurance fields), reason-and-act chains
  - Denial reasoner — analyzes denial causes; auto-run on remittance ingest; outcome tagging to learn what worked
  - Appeal drafter — AI-generated appeal letters with patient notes context
  - Predictive risk scoring on claims; drift monitoring on the model
  - Coding assistant (CPT/ICD-10 suggestions)
  - Self-tuning rule discovery (candidate-only, human-reviewer-gated)
  - Prompt engineering — the maintained AI prompt library behind every assistant feature *(PracticeForceOneAIPrompts)*
  - Autopilots — arrival, check-in, assignment balancing, one-tap actions; default-off behind flags; execution ledger for every automated act
  - Feature-flag governance — every AI capability individually switchable per practice, with mock modes for safe testing
- **Workflow & work management** *(PracticeForceOneKanban, PracticeForceOneWorkflowInventory)*
  - Kanban boards with automation; unified worklists; team inboxes; stale-alert sweeps; escalation runs; review gates with attestations; business-event logging
- **Interoperability** *(PracticeForceOneHL7, MR4-PillarG-FHIR-Design, MR4Hl7OruIngest)*
  - FHIR R4 API (the healthcare data-exchange standard): Patient, Encounter, Practitioner, Coverage, Claim submit/inquire/response, metadata
  - HL7 v2 ORU (lab-results ingestion) and HL7 orders-outbound design; C-CDA document exchange design; interface audit *(MR4-PillarG2-Hl7OrdersDesign, MR4-PillarG2-CCDA-Design, MR4-PillarG4-InterfaceAuditDesign)*
  - External vendor adapter contracts — formal integration contracts for eRx vendors and payment processors before any vendor is chosen *(MR4ErxVendorAdapterContract, MR4PaymentsAdapterContract)*
  - Clearinghouse webhooks; partner platform events; mock external services for safe testing
- **Reporting & analytics** *(MR4-PillarH-Reporting-Design)*
  - Reports catalog; scheduled report delivery; PA metrics; dashboards (work, automation activity, workflow summaries); runtime report snapshots
- **Administration & reference data** *(REFERENCE-CODE-MAINTENANCE)*
  - Organizations → practices → providers → locations hierarchy; payer management; user management & roles
  - Reference code sets — ICD-10, CPT/HCPCS, medications (RxNorm) with upload/search/stats maintenance
  - Rules engine with versioning; dynamic form configuration
  - In-app developer tooling — the Script Builder (a development lane inside the application itself) *(ClaimsProcessingScriptBuilder)*

## 2. The Technology Platform

- **The JAC toolchain** (the founder-owned code generator the whole data layer is built with) *(ARM-JAC-MIC, GenerateJeo, GenerateService, JAC_Generators_DeepDive_Analysis, JACJEOFix)*
  - Script dialect & template engine; XML schema definitions; generated JEO/CRUD classes (one per database table)
  - The full generator family — DDL (database schema), JEO/CRUD (data access), Service, Controller, Frame & Dtable (UI generation), Report/ReportPro (report generation with its own design/migration program) *(GenerateDdl, GenerateController, GenerateFrame, GenerateDtable, GenerateReportPro\*)*
  - Build system — MakeAll pipeline, phased builds (AllPhases), jrun execution runtime, build-system directory conventions *(MakeAll, Jrun, build-system\*)*
  - JSON support implementation & roadmap inside the toolchain *(JSON-Implementation, JSON-Roadmap)*
  - Developer experience — how-to-write-script guides, debugging guides, IDE tooling, migration/reverse-merge utilities *(HowToWriteScript, How-to-Debug, VCIDE, MigrateUtil, ReverseMerge)*
  - Generated-code constraints management — e.g. Java method-size ("code too large") limits in large generated classes and the engineering around them *(MR4ClaimsCodeTooLargeFix)*
  - The jac2026.1 error contract — generated reads/writes that can no longer silently swallow database failures (LEGACY/LOG/STRICT modes, sanitized exceptions, rollback hygiene, batch atomicity)
  - Generator test harness — golden-output diffs and behavioral tests against a live database, so the generator itself has quality gates
  - Versioned toolchain releases with release notes
  - Sibling applications proving platform generality (AllowanceAlley demo app + its test orchestration) *(AllowanceAlley\*)*
- **Application architecture** *(PracticeForceOneMR4Table Pillar A, MR4A2RouterSplitBlueprint)*
  - The six architecture guardrails (endpoints only in registered route modules; generated CRUD for normal data access; raw SQL only in sanctioned lanes; no layered api/services/repositories sprawl; never hand-edit generated code; tenant scope on every query)
  - Router→module split — 164 domain modules from one 48,000-line monolith
  - Generated database Views pipeline for complex reads; DDL/migration discipline
  - Helpers — password, JWT, permissions, clock, JSON
- **Data architecture** *(PracticeForceOneDbSchema, PracticeForceOneCommercialDbSchema, Schema)*
  - Multi-tenant model: organization → practice → patient, enforced on every read and write
  - 100+ generated tables; schema migrations; staging/seed data design
- **Cloud infrastructure** *(PracticeForceOneGCP, MigrationToGoogleCloud, GcpCostControl, DNS)*
  - Google Cloud Run (the application), Cloud SQL Postgres (the database), Artifact Registry (container images), Secret Manager (credentials), Cloud Logging/Monitoring
  - Firebase Hosting (marketing site); Google Cloud DNS; domain strategy (.com = marketing, .net = application); SSL certificate management
  - Containerization (Docker) and the embedded web server (Jetty) *(DockerStart, JettyTestGuide)*
  - **Topologies evaluated and consciously deferred or rejected** — Kubernetes, microservices vs. the modular monolith, Nginx fronting, transition-to-stateless design *(Jetty-Docker-Kubernetes, PracticeForceOneMicroservices, PracticeForceOneNginx, TransitionToStateless)* — knowing what you chose *not* to build is part of the architecture
  - Cost controls and budget-conscious sizing decisions
  - Repository governance — private visibility management, GitHub milestones, the browsable wiki mirror, future public-repo publishing pipeline

## 3. Quality, Testing & Verification

- **Behavioral characterization suite** — **251 gate scenarios** (GREEN as of build 1943, 2026-07-24) across domains including scheduling, clinical, RCM, platform, security, portal, CF, FHIR, admin, end-to-end *(AutoTesting, MR4-B7-TestStrategyPolicy)*
  - Persistence round-trips (write → re-read → assert) designed to catch silent failures
  - Tenant-isolation scenarios (organization B provably cannot touch organization A's data)
  - Forced-failure scenarios (deliberately break a write → the system must refuse loudly, never lie)
  - Edge-behavior pinning → graduation to hard validation as features harden
- **Quality ratchets** (automated counters that may only improve, enforced at every deploy): raw-SQL count, inline-DDL count, legacy-test retirement, where-clause safety
- **Gates** — pre-deploy characterization gate, post-deploy verification gate, architecture compliance check, compile gates
- **Test infrastructure** — UAT harness accounts and fixtures, two-organization isolation testing, high-risk fixture catalogs, scenario catalogs (safe/self-contained scenario configs), use-case test suites, UI smoke tests, latency baselines, parity baselines for converted code, evidence packaging *(HighRiskFixtureCatalog, MR4CoverageLedger, COVERAGE-GAP-INVENTORY, MR2UseCaseTesting)*
- **Toolchain testing** — generator golden/behavioral suites (the tests that test the code that writes the code)

## 4. Building & Shipping (Delivery Engineering)

- **CI/CD pipeline** *(CICDSteps, PracticeForceOneCICDConverstion, PracticeForceOneCICDMRTable)*
  - Today (since the 2026-06-14 cutover): hermetic cloud builds — GitHub as system of record, Google Cloud Build executing from-source builds in a Linux container, deploy a no-traffic candidate, run the characterization gate, promote to 100% only on green; build numbering and provenance stamping (every running build proves exactly which code it carries). The legacy single-PC queued deploy path is retained break-glass only.
  - Build hermeticity (the guarantee that what ships is built from committed source, never local machine state)
- **Environments** — current single DEV environment; future DEV → PREPROD → PROD promotion topology (documented, scheduled for pre-launch)
- **Release engineering** — version/build manifests, deploy transcripts, failure markers, rollback considerations, break-glass procedures

## 5. Security, Privacy & Compliance

- **Authentication** *(MR4MfaTotp)* — PBKDF2 password hashing, JWT sessions, MFA/TOTP with recovery codes, password reset with single-use expiring tokens, account-lockout roadmap, kiosk/quick-access codes for the portal
- **Authorization** — role-based access control (RBAC) with a 165-permission model, admin gating, break-glass emergency access with audit
- **Tenant isolation** *(MR4TenantIsolationCertification)* — certified org/practice scoping, portal patient-ownership certification, cross-tenant leak detection in the test suite
- **PHI protection** — access flagging on every protected-health-information touch, document access logging, log redaction, field-level encryption design *(MR4FieldEncryption)*, sanitized error messages (no SQL or patient values in errors)
- **Secrets management** — Google Secret Manager for all credentials, no secrets in code/docs/wiki policy, agent access bootstrap pattern
- **HIPAA program** *(HIPAA Plan, HIPAA-COMPLIANCE/-RISK-ANALYSIS/-SECURITY-POLICY/-TECHNICAL-CONTROLS/-INCIDENT-RESPONSE, BAA-VENDOR-INVENTORY)* — risk analysis, security policy, technical controls mapping, incident response plan, business-associate vendor inventory, compliance evidence collection *(MR4ComplianceEvidence)*
- **Application security** — SQL-injection defenses (parameterized queries program), CORS policy, security headers, audit log integrity

## 6. Operations & Reliability

- **Observability** *(PracticeForceOneMR4Observability, PracticeForceOneLogging, PracticeForceOneOpenSearch)* — structured per-request logging with full attribution, log-based metrics (request rate, error rate, latency percentiles), client-side error telemetry, build provenance in the health endpoint, alert policy design
- **Incident management** *(MR4IncidentResponse, ISSUES.md)* — a real, written incident history with root causes and structural fixes:
  - Database connection exhaustion (thundering-herd reconnect) → synchronized factory + boot-resilient retry
  - Poisoned shared connections (unrolled-back transactions) → connection probing + hygiene
  - Silent write failures (the "lying success" class) → fixed at the code generator
  - Unattributed data wipes → access hardening, restore recipes, attribution investigation
  - Deploy-queue wedges and silent drops → heartbeat self-healing + failure markers
- **Data management** — fixture seeding, demo reset procedures, migration apply discipline, backup/restore planning (scheduled pre-launch), UAT data hygiene
- **Runbooks & procedures** — recovery recipes (account restore, queue recovery, DNS/cert), documentation index, scheduled-task playbooks
- **Performance** — latency baselines, Cloud SQL tier planning, connection pooling, load-test planning *(PracticeForceOneCloudSqlTierProposal, MR4LatencyBaseline)*

## 7. Risks — identified, managed, resolved

- **Structural risks (found and fixed)** *(PracticeForceOneMR4PostAssessment, JACJEOFix)* — the silent-write-failure class; the sparse-update regression class; generator output verified only in production; unfiltered generated deletes
- **Operational risks (managed)** — single shared environment (accepted for build phase, split scheduled), no tested backups yet (cost-deferred, pre-launch trigger), data-accumulation test flakes, queue fragility (automated away)
- **Continuity risks ("bus factor")** *(PracticeForceOneOpenSource Part 1)* — seven enumerated single points of failure (toolchain knowledge, build host, cloud identities, dialect knowledge, recovery knowledge, decision bottleneck, database) each with a remediation path
- **Commercial/diligence risks** — proprietary toolchain perception, environment story, certification gaps — each mapped to a plan
- **Risk acceptance discipline** — founder decisions explicitly recorded with revisit triggers (what is deferred, why, and when it must be revisited)

## 8. The Program — how the work is organized

- **Major releases** — MR2 (standalone RCM foundation) *(PracticeForceOneMajorRelease2, MR2 worksheets/checklists)* → MR3 (workflow, kanban, autopilots, encounter workspace) *(PracticeForceOneMR3Table + design docs)* → MR4 (architectural integrity: router split, generated-CRUD conversion, RBAC, observability, clinical safety — graded A- at exit) *(PracticeForceOneMR4Table, PracticeForceOneMR4PostAssessment)* → MR5 (launch readiness: new data-layer verification, CI/CD platform, security bar, operability) *(PracticeForceOneMR5Table)* → MR6 (wave-1 security + UX pillar + section-R audit; delivered 2026-06-22) *(PracticeForceOneMR6Table)* → **MR7 DELIVERED 2026-07-07** (CORS allowlist, raw-SQL closure, /api/health DB probe, ops/incident runbook; AgentCICD retired — CI/CD absorbed into AgentMR7) *(PracticeForceOneMR7Table)* → plus dedicated single-agent MRs: JACJEO (toolchain fix) *(JACJEOMRTable)*, CICD (pipeline conversion, COMPLETE+RETIRED 2026-07-07) *(PracticeForceOneCICDMRTable)*, and JAC (raw-SQL to generated-CRUD elimination) *(PracticeForceOneJACTable)*. **Active (2026-07-24):** MR8 (platform security + governance, Security Engine live), MR9 (ECW Front Office/Portal parity), MR10 (Architecture Upgrade Program, paper-only pre-August)
- **The multi-agent development model** *(PracticeForceOneAgentCoordination, AGENTS.md)* — six AI agents with defined lanes and hot-file ownership, an inter-agent communication channel with incident roll-calls, wiki-authoritative task tables, GitHub milestones, evidence-based "done" (runtime proof required, never "it compiles")
- **Decision governance** — founder-gated decisions (flags, spend, scope) explicitly marked and relayed; postponements recorded with triggers
- **Course corrections** — the architectural-drift episode and the full JAC reset that recovered from it (a layered api/services/repositories sprawl was built, recognized as drift, and systematically reverted — the origin of today's guardrails) *(RevertJACPlan, docs/archive)*
- **Documentation system** — status plans, build status with proofs, issues register with root causes, blockers tracking (internal and user/external), task plans, documentation index, feature inventories & crosswalks, file-tree references, this taxonomy *(UserBlockers, PracticeForceOneFullCrosswalk, PracticeForceOneFullInventory, FileTree)*
- **Assessments & reviews** — architecture post-assessments with grade cards, periodic point-in-time assessments with remediation plans (May/June review cycles), deep-dive review trackers, third-party-AI analyses *(PracticeForceOneClaudeAnalysis, PracticeForceOneGPTAnalysis, 6-8-26 Assessment/Remediation, 5-17-2026 Worklists)*
- **AI tooling for building the product itself** — multiple AI coding systems in harness (the Claude Code agent fleet, Codex execution lanes), agent identity/memory/heartbeat configuration, goal sheets *(CodexSteps, IDENTITY/SOUL/TOOLS/HEARTBEAT/USER, GoalSheetl)*

## 9. Business & Go-to-Market

- **Market analysis** *(PracticeForceOneBusinessAnalysis, BusinessCase, CompetitiveAnalysis)* — business opportunity, business plan, marketing plan, ROI calculator for clinics *(PracticeForceOneROICalculator, MarketingPlan)*
- **Product identity** — naming and branding evolution (ClaimsProcessing → PracticeForceOne), the original proposal that started it all *(ProductName, ClaimsProcessingProposal)*
- **Competitive positioning** — deep-dive comparisons against Waystar, Epic/Cerner, eClinicalWorks/Practice Fusion *(PracticeForceOneComparisonDeepDivetoWaystar, PracticeForceOneEpicCernerComparison, PracticeForceOneECWPracticeFusion)*
- **Monetization scenarios** *(PracticeForceOneOpenSource Part 4)* — hosted SaaS (the backbone), support subscriptions, implementation services, full-service billing, white-label platform licensing, metered AI add-ons, dual licensing, transaction-line margins — and the named trap to avoid (never monetize patient data)
- **Open-source strategy** *(PracticeForceOneOpenSource)* — source-available licensing (FSL) with closed governance (SQLite model), trademark plan, fresh-cut public repository preparation, publish-when-hardened sequencing
- **Sales & marketing collateral** — brochure, one-pager, executive sales deck, market slick, 20+ LinkedIn article series, provider-response materials *(PracticeForceOneBrochure, PracticeForceOneOnePager, PracticeForceOneExecutiveSales, PracticeForceOneLinkedIn\*)*
- **Customer-facing materials** — full user guides (v1.0 + workflow guide), training program, UX overhaul plan, mockups, demo procedures *(PracticeForceOneFullUserGuide, PracticeForceOneTraining, PracticeForceOneUXOverhaul)*
- **Web presence** — practiceforceone.com (marketing) and .net (application) with DNS/SSL infrastructure; legal topics *(PracticeForceOneLegal)*
- **Implementation & onboarding** — pilot-clinic runbook (planned), tenant provisioning, data-migration intake, payer enrollment pathways
- **Founder roadmap** *(PracticeForceOneFounderRoadmap, Roadmap)*

## 10. Continuity & Sustainability

- **Bus-factor remediation** *(PracticeForceOneOpenSource Parts 1–2)* — pipeline off the personal PC (in progress), identity de-monopolization (second human on every account), continuity envelope, the JAC handbook, the second-maintainer milestone
- **Cost sustainability** — explicit budget gating of every expensive item (backups, scaling, environment split all deferred with triggers); active-work cost floor ≈ cloud build minutes only
- **Knowledge durability** — runbooks from incident narratives, agent memory systems, release notes, this documentation corpus (~300 documents)
- **Succession & governance** — closed-governance model with a small trusted team as the durable steward; license strategy that guarantees the software outlives any single company or person

## 11. Heritage & Domain Expertise

- **Prior EHRM work** *(PracticeForceOnePriorEHRM)* — VA Electronic Health Record Modernization engagements with Oracle-Cerner and Booz Allen Hamilton: EPI deployment training programs, site device questionnaires, pre-deployment walkthroughs (2019–2026)
- **VBA Compensation & Pension** — Disability Benefits Questionnaire (DBQ) program work, exam management, provider questionnaires
- **VA Purchased Care claims heritage** — 2012–2016 requirements corpus (claims processing BRDs, fee basis, improper payments) — the direct domain ancestry of PracticeForceOne's revenue-cycle depth
- **The JAC lineage** *(ARM-JAC-MIC, ApplicationFundamentals)* — two decades of the founder's generator-driven development platform, now versioned, tested, and modernized for this product

---

## The takeaway for clinic owners

A practice-management product is the visible 10%: the screens your staff will use. This taxonomy is the other 90% — the insurance wire formats, the safety interlocks on clinical data, the test suites that prove a write can't silently fail, the incident discipline, the compliance program, the deployment machinery, and the continuity planning that means the product survives any single person or machine. Every branch above is already real in this project: built, in active progress, or explicitly scheduled with its trigger recorded. That is what it takes.

*Sources: the full PracticeForceOne wiki (~170 pages) and the ClaimsProcessing working folder (~130 documents incl. docs/). Compiled 2026-06-12; descendant documents are linked per branch.*

---

## Review Epilog — 2026-06-23

Reviewed 2026-06-23 as part of a full PracticeForceOne wiki truth-pass. Status: UPDATED.

- Classified as a marketing/narrative taxonomy (evergreen breadth overview for clinic owners/partners); platform claims verified against current truth (Google Cloud Run + Cloud SQL Postgres + Secret Manager, modular monolith, JAC toolchain) and remain accurate.
- Corrected section 4 CI/CD: the cloud-build conversion described as "in progress" shipped at the 2026-06-14 hermetic Cloud Build cutover (build no-traffic candidate, run the gate, promote on green); the legacy single-PC queued deploy is now break-glass only.
- Corrected section 8 "Major releases": added MR6 (delivered 2026-06-22, wave-1 security + UX + section-R audit) and MR7 (current active backlog) to the release chain, and added the JAC raw-SQL-elimination single-agent MR.
- Flag for founder: the section-8 "six AI agents" count and the original 2026-06-12 header date were left as-is (the agent fleet has grown well beyond six, but the exact current count was not re-counted, and only a subset of the ~300 cited descendant docs was re-verified this pass).

## Review Epilog — 2026-07-24

- Live build 1943, gate 251/251 GREEN (up from 141 scenarios at the prior review). August demo path passes.
- Updated section 8 "Major releases": MR7 DELIVERED 2026-07-07 (AgentCICD retired; CI/CD absorbed into AgentMR7); added MR8 (platform security + governance, live), MR9 (ECW parity, active), MR10 (Architecture Upgrade Program, paper-only pre-August).
- Updated section 3 characterization suite count: 141 → 251 gate scenarios.
- Header date annotation added (last reviewed 2026-07-24); evergreen platform/cloud/JAC claims remain accurate.
