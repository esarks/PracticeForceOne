---
title: "Home"
---

# Welcome to the ArchitectsCompanion Wiki!

This wiki contains comprehensive documentation for JAC (Java Architects Companion) and the JAC-NEWGEN modernization initiative.

## ðŸ“š Core Documentation

### ðŸ“˜ [CLAUDE.md](CLAUDE.html)
**JAC Overview & Quick Reference**
- Core architecture and components
- Script syntax and XML integration features
- Project structure and compilation process
- Getting started guide

### ðŸš€ [NEWGEN.md](NEWGEN.html)
**JAC-NEWGEN: Next-Generation Platform Vision** (200+ pages)
- Complete architectural analysis
- 4GL paradigm and multi-paradigm development
- Web server integration and agent framework
- JIT compilation engine design
- Enterprise features (logging, observability, security)
- Deployment architecture and reference implementations

### ðŸ—ºï¸ [Roadmap.md](Roadmap.html)
**JAC-NEWGEN Implementation Roadmap**
- **12-month phased transformation plan**
- **Phase 1 (Months 1-3):** Foundation - JIT engine, web server, observability, agents
- **Phase 2 (Months 4-6):** Developer Experience - documentation, IDE, templates
- **Phase 3 (Months 7-9):** 4GL Features - JAC-QL, visual programming, schema tools
- **Phase 4 (Months 10-12):** Production Ready - tracing, security, Kubernetes, CI/CD
- Week-by-week tasks, deliverables, and success metrics
- Risk management and milestone checklists

### [PracticeForceOneArchAsses7-26-2026](PracticeForceOneArchAsses7-26-2026.html)
**PracticeForceOne - Architecture Assessment** (2026-07-26, AgentARCH) — **CURRENT**
- Full purity / JAC-adherence / artifact-relevance deep dive from live guardrail runs
- Verdict: structure is clean (0 non-JAC SQL sites, 461/461 router registry, ratchets green); debt is hygiene + metadata purity
- §5 ranked queue = AgentARCH's work list; §6 records same-day remediation (code fixes, hygiene sweep, build 1975 deploy diagnosis)

### [PracticeForceOneArchitectureAssessment](PracticeForceOneArchitectureAssessment)
**PracticeForceOne - Architecture Assessment** (2026-06-22, superseded by the 7-26 assessment above)
- Five-dimension graded deep dive from the standpoint of a senior dev new to the app
- Structure C+ / JAC Compliance B- / Maintainability C+ / Production Readiness C+ / Sustainability C- (overall C+)
- A concrete **Path to A** for every dimension
- Top cross-cutting risks + a 4-phase remediation roadmap (Phase 0 = safety/compliance)

---

## ðŸ”§ Technical Documentation

### âš™ï¸ [AllPhases.md](AllPhases.html)
**JAC Build System Documentation**
- **Complete build process explanation** for `allphases.bat`
- **Two-phase compilation:** Bootstrap + self-compilation
- **Phase 1:** Compiles 51 Java files â†’ `jac.jar` (580KB)
- **Phase 2:** JAC self-compiles scripts â†’ `mic.jar` (200KB)
- Build time: 20-35 seconds (full clean build)
- Environment configuration and troubleshooting
- Comparison to Maven/Gradle and modernization roadmap
- Source file analysis and dependency documentation

### ðŸš€ [Jrun.md](Jrun.html)
**JAC Runtime System: .jrun File Execution**
- **Double-click to run:** Windows file association launcher
- **Complete execution flow:** jrundirect.bat â†’ setJrunEnvironment â†’ Jrun.bat â†’ Job.bat â†’ SetJob.bat â†’ Java
- **JIT compilation:** Automatic on-demand script compilation (0.5-1.5 seconds)
- **Environment setup:** 70+ JARs, comprehensive classpath (Jetty, PostgreSQL, HAPI, Google APIs)
- **HelloWorld walkthrough:** Complete example from .jrun to output
- **Advanced features:** Debug mode, profiling, custom JVM settings
- **Troubleshooting guide:** Common errors and solutions
- **File association setup:** Registry configuration for .jrun files

### ðŸ› [How-to-Debug-VC.md](How-to-Debug-VC.html)
**Debugging JAC Applications with Visual Studio Code**
- **Complete VS Code setup:** Extension installation and workspace configuration
- **Debugger configuration:** launch.json setup for remote attach on port 8000
- **Step-by-step debugging workflow:** Enable debug mode â†’ Start .jrun â†’ Set breakpoints â†’ Attach debugger
- **Understanding what you're debugging:** Generated .java files (NOT .script files)
- **Breakpoint strategies:** Line, conditional, logpoint, and exception breakpoints
- **Troubleshooting guide:** Connection refused, source not found, breakpoints not working
- **Advanced debugging:** Multiple scripts, JAC framework internals, remote debugging
- **Quick reference:** Keyboard shortcuts and common debug commands

### ðŸŽ“ [Demo.md](Demo.html)
**JAC Demonstrations & Examples**
- **13 major demonstration categories** covering all JAC features
- **Basic examples:** HelloWorld, loops, JSON processing, string parsing
- **Advanced examples:** Web automation, RETE rules engine, COM/Office automation
- **Real-world applications:** Report generation, agent automation, callback patterns
- **Complete execution instructions** for each demonstration
- **Troubleshooting guide** for common issues
- **Performance optimization** tips and best practices
- **Learning path** from beginner to advanced JAC development

### ðŸ—ï¸ [ARM-JAC-MIC.md](ARM-JAC-MIC.html)
**Three-Layer Architecture Explained**
- **JAC Engine:** Core compiler & runtime (26 classes, 177 KB jar)
- **ARM Templates:** Architects Resource Model (19 Java + 62 scripts)
- **MIC Framework:** Model-Interface-Controller (24 classes, 209 KB jar)
- **Build process:** Two-phase compilation (Phase 1: Bootstrap, Phase 2: Self-compilation)
- **Component interaction:** Dependency hierarchy and runtime flow
- **File organization:** Complete source and output structure
- **Class hierarchy:** From JAC engine to user applications

### âš™ï¸ [jac2024-conf.md](jac2024-conf.html)
**Build Templates & Code Generation (conf/ folder)**
- **22 template files** controlling how .script files become Java code
- **Make files:** jac.make, mic.make, micScriptComponent.make (14 templates)
- **Import scripts:** ScriptImport.script vs micImport.script (Jakarta servlet, JSON support)
- **Prefix/postfix scripts:** Class structure generation
- **Template system:** Variables, directives, and substitution
- **Customization guide:** Adding imports, creating custom templates
- **Compilation flow:** From .script â†’ .make template â†’ .java â†’ .class

### ðŸ”§ [jac2024-config.md](jac2024-config.html)
**Runtime Configuration (config/ folder)**
- **Properties.xml:** Database connections, type mappings, connection pooling
- **20 configuration files:** 3 XML + 17 SQL files
- **Type mappings:** Java â†” SQL type conversion (boolean, int, string, date, etc.)
- **Database configuration:** PostgreSQL, MySQL, Oracle, SQL Server support
- **SQL library:** Reusable queries, functions, and DDL statements
- **Multiple environments:** Dev/test/prod configuration strategies
- **Connection pooling:** openCount settings for concurrent users

### ðŸ—„ï¸ [Database-Setup.md](Database-Setup.html)
**PostgreSQL Database Configuration for JAC**
- **PostgreSQL 17 setup:** Installation and configuration guide
- **Database credentials:** postgres superuser password: "esarks"
- **JAC integration:** Properties.xml configuration
- **Connection testing:** Verification and troubleshooting
- **PowerShell commands:** Windows-specific setup instructions
- **Multiple databases:** esarks (default) and jac_demo (examples)
- **Common issues:** Connection refused, authentication errors, permission problems

### ðŸŽ¯ [BuildExamplesPlan.md](BuildExamplesPlan.md)
**Next-Level Demonstrations Build Plan**
- **19 comprehensive examples** across JAC Core, ARM Templates, and MIC Framework
- **JSON Processing:** NEW implementation with parsing, generation, and schema validation
- **JAC Core examples:** Advanced XML, dynamic loading, database integration, custom properties
- **ARM Template examples:** Web server/routing, logging, rules engine, reports, custom templates
- **MIC Framework examples:** CRUD app, wizards, data grids, dashboards, REST APIs
- **Integrated examples:** Blog system, inventory management, authentication, reporting system
- **60-week implementation plan** with priorities and success criteria
- **Location:** `ArchitectsCompanion/demonstrationNextLevel/`

### ðŸ”§ [JSON-Implementation.md](JSON-Implementation.html)
**JSON Support for JAC**
- **Purpose:** Add native JSON parsing, generation, and validation to JAC
- **Architecture:** Mirror XML implementation for consistency
- **Files to create:** ParseJson.java, ParseJsonSchema.java, JsonGenerator.java, JsonConverter.java (~1,400 lines)
- **Files to modify:** ScriptHelper.java, SymbolTable.java, phase1List.txt (~130 lines)
- **Dependencies:** Gson library (already available)
- **Property syntax:** `<!json:element!>` and `<![json:element]!>` (same as XML)
- **Features:** Parse JSON, navigate properties, generate JSON, validate schemas, JSONâ†”XML conversion
- **Timeline:** 6 weeks (4 dev + 1 testing + 1 docs)

### ðŸ—ºï¸ [JSON-Roadmap.md](JSON-Roadmap.html)
**JSON Implementation Week-by-Week Plan**
- **6-week detailed implementation roadmap**
- **Week 1-2:** Core parsing (ParseJson.java) and JAC integration
- **Week 3:** Property navigation and JSON generation (JsonGenerator.java)
- **Week 4:** Schema validation (ParseJsonSchema.java)
- **Week 5:** Comprehensive testing and performance optimization
- **Week 6:** Conversion utilities (JsonConverter.java) and documentation
- **Daily task breakdown** with deliverables and success criteria
- **Risk management** and mitigation strategies
- **Performance targets:** Parse 1MB JSON < 100ms, Generate 1000 props < 50ms

---

## ðŸ“Š Strategic Analysis

### [PracticeForceOne.md](PracticeForceOne.md)
**PracticeForceOne™ Marketing Brochure**
- Product positioning for PracticeForceOne.
- Tagline: Every patient. Every task. Every claim. One platform.
- Platform pillars covering patient command center, calendar, Kanban, portal, chart, coding, revenue cycle, and administration.

### [PracticeForceOnePracticeEHR.md](PracticeForceOnePracticeEHR.md)
**PracticeForceOne™ Practice EHR Replacement Plan**

### [PracticeForceOneReCenterKanban.md](PracticeForceOneReCenterKanban.html)
**ReCenter Kanban — Why These Lanes**
- Rationale for every lane in ReCenter Medical LLC (23) and ReCenter Oasis LLC (16), and why seven claims lanes are deliberately absent from a cash-pay board.
- How a practice-scoped lane catalog resolves through PracticeContext, and why deleting one blanks that board rather than inheriting another.
- The honest limitation: lane ids are still engine built-ins, so a renamed lane behaves as the lane it renames.

### [PracticeForceOneGenericKanbanPlan.md](PracticeForceOneGenericKanbanPlan.html)
**Generic Workflow / Kanban Framework — PLAN (AgentFuture, 2026-08-09)**
- The capability: *the clinic defines the workflow, PFO executes it* — unlimited isolated Kanban workflows (referrals, prior auth, supplement orders, recall…) with no code and no deploy.
- Starts from what already exists: `engine_configs` workflow definitions, per-practice scoping, preprod→prod promote, `completeWhen` automatic movement, the operations registry. **We are not building a second engine.**
- Names the three real gaps — lane *assignment* is hard-coded (a new lane renders an empty column), lanes/cards/panels are keyed globally rather than per workflow, and there is no workflow instance carrying ownership or SLA.
- Resolves the central tension: the subject row stays the source of truth; a thin instance carries only what no domain row has.

### [PracticeForceOneKanban.md](PracticeForceOneKanban.html)
**Kanban Card & Right-Panel Catalog — the available fields and actions for ALL kanban types** (founder spec, 2026-08-09)
- The 16 card/panel fields and 21 action buttons any board may declare — a platform catalog, not a board layout.
- Per-item status measured against live code: 8 available · 5 client-only · 1 missing · 2 need the workflow instance.
- Surfaces three findings: **Patient ID is on no card** (contradicts a governing directive), there are **two card producers** (server projection + client rebuild) which a catalog for all board types cannot have, and **"Card placed in Queue At" cannot be derived** — independent confirmation that the workflow instance is needed.

*(The former "Dashboard Kanban Workflow Plan" entry pointed here but the page did not exist — dead link, now a real page.)*
- Assessment and implementation plan for a Dashboard Kanban that directs users to the next patient-to-cash work item by role.
- Ambulatory EHR replacement scope for small and independent practices
- Integration plan for scheduling, charting, portal, e-prescribing, labs, and PracticeForceOne™ RCM
- Phased delivery plan, team/cost estimates, risks, and backlog

### [PracticeForceOneHowToSchedule.md](PracticeForceOneHowToSchedule.md)
**How Scheduling Works**
- Practical guide for scheduling from Calendar, Patient Chart, Kanban, and Waitlist Match.
- Explains how Availability Templates, Provider Calendar, Provider Openings, and Calendar appointment creation fit together.

### Day-in-the-Life Walkthroughs (verified end-to-end journeys)
Step-by-step teaching walkthroughs — each traces one patient through the whole system with the exact screen, API call, payload, codes, dollar amounts, and Kanban/Dashboard movement per step. Verified live and re-run after deploys/restaging.
- **▶ [PracticeForceOneDLPWalkthroughs.md](PracticeForceOneDLPWalkthroughs.html) — THE INDEX: all 46 deep-dive walkthroughs**, grouped by practice and journey family (full clinical day · point of sale/retail · registration→human review · one journey per Kanban lane). Generated from the journey definitions, so it can never drift from what the harness actually runs. **Start here** — the individual pages below are a hand-picked few of the same set.
- [PracticeForceOneDLP1DeepDiveWalkthrough.md](PracticeForceOneDLP1DeepDiveWalkthrough.html) — **DLP1: the Wednesday demonstration, ReCenter Medical** (Eleanor Whitfield, 68 — CHF, AFib on warfarin + ibuprofen, CKD). Portal registration → full visit → the engine raises ~28 clinical actions → sign REFUSED until required safety work is done. Includes the one-sentence story, per-step room narrative, and the live finale script.
- [PracticeForceOneDLP1ADeepDiveWalkthrough.md](PracticeForceOneDLP1ADeepDiveWalkthrough.html) — **DLP1A: full portal registration → human review, then STOP** (Howard Brenner, 71, establishing care). Every portal field submitted; the registration lands in Review Registration and the journey ends where the practice's decision begins.
- [PracticeForceOneDLP2DeepDiveWalkthrough.md](PracticeForceOneDLP2DeepDiveWalkthrough.html) — **DLP2: the Wednesday demonstration, ReCenter Oasis** (Marisol Reyes, 33 — first neurotoxin treatment). Same engine, aesthetics rules: consent, Good Faith Exam, product-lot capture; sign REFUSED until the record is safe.
- [PracticeForceOneDLP2ADeepDiveWalkthrough.md](PracticeForceOneDLP2ADeepDiveWalkthrough.html) — **DLP2A: full portal registration → human review, then STOP** (Priya Sundaram, 33, first-time consultation). The aesthetics twin of DLP1A.

### [PracticeForceOneLinkedIn2.md](PracticeForceOneLinkedIn2.md)
**LinkedIn Series 2: How to Implement Real Agent AIs in a Working Application**
- Follow-up article plan for practical examples from the PracticeForceOne™ multi-agent workflow
- Covers startup packets, coordination files, memory, handoffs, definition of done, model fit, browser UAT, and future automation

### [PracticeForceOneEHR.md](PracticeForceOneEHR.md)
**PracticeForceOne™ Full EHR + Patient Portal Scoping**
- Full EHR and patient portal build-vs-layer strategy
- Clinical, interoperability, regulatory, and patient engagement scope
- Gap analysis against current PracticeForceOne™ capabilities

### [PracticeForceOneDashboard.md](PracticeForceOneDashboard.html)
**PracticeForceOne™ Dashboard — Revolutionary Configurable Event Dashboard**
- Replaces the existing dashboard with an event-sourced, fully configurable command surface (per-user widget visibility + order)
- Universal immutable event log: **everything** is tracked — EDI transmissions/receipts, Kanban movement, registrations, every data create/update/delete and transaction (auto-emitted at the generated CRUD layer)
- Per-user resettable counters with baselines; count from any time including all history; staging seed populates back-dated events so demos aren't empty
- Deep event taxonomy, widget framework (flow + stock), architecture, migration, and an Issues/Open-Questions section

### [PracticeForceOneMR3.md](PracticeForceOneMR3.md)
**PracticeForceOne™ Major Release 3 — Competitive Deep Dive & Build Recommendation Ledger**
- Deep comparison vs eClinicalWorks & Practice Fusion (and Epic/athena/Tebra/AdvancedMD/Waystar generally), with an all-cylinders capability matrix
- Three strategic axes — ease of use, reduced risk, and **Autopilot** (event-triggered, intent-driven, minimal-prompt automation: "schedule 3 months out, Dr. X, Monday morning" → done in one confirm)
- 8 build pillars as an approve/hold ledger: Quick Schedule, Kanban automation & notifications, clinical maturity (eRx/EPCS/labs), ease of use, reduced risk, AI, interoperability/specialty, Autopilot Command Deck
- ~66 individually approvable `MR3-x#` recommendations with ease/risk/effort ratings, sequencing, and success metrics

### [PracticeForceOneMR3Table.md](PracticeForceOneMR3Table.md)
**PracticeForceOne™ MR3 — Approval Table** — the same 75 recommendations as a compact, checkable Approve/Hold table (one row each, by pillar)

### [PracticeForceOneMR3Plan.md](PracticeForceOneMR3Plan.md)
**PracticeForceOne™ MR3 — Multi-Agent Coordination Plan** — the single build-coordination doc Agent1/Agent2/Agent3 start from: per-agent backlogs by wave (Agent1 28 / Agent2 31 / Agent3 16), shared foundations, dependency-ordered waves, handoff contracts, hot-file serialization, deploy discipline, and definition of done

### [PracticeForceOneMR3Backlog.mg](PracticeForceOneMR3Backlog.mg)
**PracticeForceOne™ MR3 Backlog** — post-MR3 follow-up reminders for invariants, edge cases, polish, and gated work to revisit after the active MR3 task table is complete.

### [PracticeForceOneLegal.md](PracticeForceOneLegal.html)
**PracticeForceOne™ Legal, Regulatory & Certification Path to Real-Clinic Go-Live**
- Deep dive from fully-developed app to legally deployable production integration
- Ten parallel workstreams: HIPAA/BAAs, state law (CMIA/CCPA), clearinghouse/payer EDI, Surescripts eRx, EPCS/DEA, ONC certification, code-set/drug-DB licensing, SOC 2/HITRUST, insurance, fraud-and-abuse/FDA
- **MVP view** (~$120k–$300k, ~2–4 mo) vs **`> MVP` view** (eRx/EPCS + SOC 2 → ~$300k–$600k; + ONC/HITRUST → ~$600k–$1.2M+)
- Cost tables, critical-path timeline, risk register, attorney-engagement guidance, and a full acronym/definitions glossary (NOT legal advice)

### [BusinessCase.md](BusinessCase.html)
**Development Justification & Financial Analysis**
- **Market Opportunity:** $40B+ TAM, 19% CAGR
- **Investment Required:** $800K Year 1
- **Expected Returns:** $22.5M revenue by Year 5
- **ROI:** 3,033% (5-year), NPV $15M-$45M
- **Strategic Rationale:** Cost savings, no vendor lock-in, proven foundation
- Problem statement and solution overview
- Financial projections and profitability analysis
- Technical feasibility assessment
- Risk assessment and mitigation strategies
- **Recommendation:** PROCEED with full execution

### ðŸŽ¯ [CompetitiveAnalysis.md](CompetitiveAnalysis.html)
**Market Positioning & Competitive Landscape**
- **Market Size:** $41.5B total, $18.2B addressable
- **Direct Competitors:** OutSystems, Mendix, Power Apps, Salesforce, Oracle APEX
- **Competitive Advantages:** 97% cost savings, zero lock-in, no low-code ceiling
- **Market Positioning:** "Enterprise-grade RAD without enterprise price tag"
- Detailed SWOT analysis
- Go-to-market strategy (developer-led growth)
- Pricing analysis and TCO comparisons
- Differentiation strategy and positioning statements

---

## ðŸŽ¯ Quick Start

**New to JAC?** Start here:
1. Read [CLAUDE.md](CLAUDE.html) for basic JAC concepts (15 minutes)
2. Try [Demo.md](Demo.html) demonstrations - start with HelloWorld (30 minutes)
3. Review [NEWGEN.md](NEWGEN.html) for the modernization vision (1 hour)
4. Study [Roadmap.md](Roadmap.html) for implementation details (30 minutes)

**Executive/Business Stakeholder?** Start here:
1. Read [BusinessCase.md](BusinessCase.html) Executive Summary (5 minutes)
2. Review [CompetitiveAnalysis.md](CompetitiveAnalysis.html) Market Opportunity (10 minutes)
3. Review [Roadmap.md](Roadmap.html) Timeline Summary (5 minutes)

**Developer/Architect?** Start here:
1. Read [CLAUDE.md](CLAUDE.html) for architecture overview (15 minutes)
2. Understand [ARM-JAC-MIC.md](ARM-JAC-MIC.html) three-layer architecture (30 minutes)
3. Setup database: [Database-Setup.md](Database-Setup.html) PostgreSQL configuration (20 minutes)
4. Learn configuration: [jac2024-conf.md](jac2024-conf.html) templates, [jac2024-config.md](jac2024-config.html) runtime (45 minutes)
5. Run [Demo.md](Demo.html) examples - try advanced demos (1-2 hours)
6. Review [BuildExamplesPlan.md](BuildExamplesPlan.md) for next-level examples (30 minutes)
7. Deep dive [NEWGEN.md](NEWGEN.html) technical sections (2-3 hours)
8. Review [Roadmap.md](Roadmap.html) Phase 1-4 deliverables (1 hour)

---

## ðŸŽ¯ Project Goals

**Transform JAC into JAC-NEWGEN:**
- âœ… **10x faster development** with zero build step (JIT compilation)
- âœ… **4GL declarative programming** (JAC-QL query language)
- âœ… **Production-grade observability** and monitoring (Prometheus, OpenTelemetry)
- âœ… **Cloud-native deployment** (Docker, Kubernetes, Helm)
- âœ… **Enterprise security** and compliance (RBAC, sandboxing, audit logs)
- âœ… **Visual programming** and AI-assisted development (Blockly + future AI)
- âœ… **Zero vendor lock-in** (open source, standard Java output)
- âœ… **97% cost savings** vs. commercial low-code platforms

---

## ðŸ“ˆ Business Value

| Metric | Target |
|--------|--------|
| **Market Opportunity** | $40B+ TAM, 19% CAGR |
| **Development Investment** | $800K (Year 1) |
| **Expected Revenue** | $650K (Y2), $4.5M (Y3), $22.5M (Y5) |
| **ROI** | 3,033% (5-year) |
| **NPV** | $15M-$45M (risk-adjusted) |
| **Payback Period** | 18-36 months |
| **Cost vs. OutSystems** | 97% savings ($1M+ over 3 years) |

---

## ðŸ† Competitive Positioning

**Market Position:** "Enterprise-grade RAD without the enterprise price tag"

**Key Differentiators:**
1. **No Vendor Lock-In:** Standard Java output, deploy anywhere
2. **No Low-Code Ceiling:** Full programming power when needed
3. **Zero Build Step:** JIT compilation = instant feedback
4. **Enterprise-Grade:** Observability, security, deployment built-in
5. **Open Source:** Apache 2.0 license, community-driven

**vs. Competitors:**
- **OutSystems/Mendix:** 97% cost savings, no vendor lock-in
- **Microsoft Power Apps:** Production performance, multi-cloud
- **Spring Boot:** 10x productivity with JAC-QL, zero build step
- **Oracle APEX:** Modern cloud-native architecture, multi-database

---

## ðŸ“… Timeline

| Phase | Duration | Key Deliverables | Status |
|-------|----------|------------------|--------|
| **Phase 1: Foundation** | Months 1-3 | JIT engine, Jetty 12.1.2 âœ…, JSON support âœ…, logging, metrics, agents | Partially Complete |
| **Phase 2: Developer Experience** | Months 4-6 | Docs, templates, VS Code extension, Web IDE | Planned |
| **Phase 3: 4GL Features** | Months 7-9 | JAC-QL, SQL generation, visual programming | Planned |
| **Phase 4: Production Ready** | Months 10-12 | Tracing, security, Kubernetes, CI/CD | Planned |

**Total Timeline:** 12 months to production-ready platform

---

## ðŸ¤ Contributing

JAC-NEWGEN is open source (Apache 2.0). Contributions welcome!

- **GitHub:** (repository to be published)
- **Discord:** (community server to be created)
- **Discussions:** GitHub Discussions (coming soon)

---

## ðŸ“ž Contact

**Owner:** Architects of Software Design, Corp.
**Documentation Version:** 1.2
**Last Updated:** 2025-01-21

## âš¡ Recent Updates

### October 2025
- ðŸŽ‰ **XML to JSON Conversion COMPLETE** - **344 of 355 XML files converted to JSON** (97% success rate) - JAC now has complete dual XML/JSON format support! (Oct 27, 2025)
- âœ… **All 6 Generators Support JSON** - GenerateDdl, GenerateJeo, GenerateReport, GenerateReportPro, GenerateDtable, and GenerateService fully support both XML and JSON input formats (Oct 27, 2025)
- âœ… **Major Directories Converted** - com/esarks/examples (40+ files), paul (35+ files), scripts_migrate (131 files), schemas (19 files), EHRM (46 files) (Oct 27, 2025)
- âœ… **AllowanceAlley System Fully Converted** - 8 database tables + 16 CRUD services + 4 application components now use JSON (Oct 27, 2025)
- âœ… **Backward Compatibility Maintained** - XML files continue to work, JSON preferred when both formats exist (Oct 27, 2025)

### January 2025
- âœ… **VS Code Debugging Guide Complete** - Comprehensive How-to-Debug-VC.md with step-by-step setup and troubleshooting (Jan 21, 2025)
- âœ… **JDK 24 Debug Compatibility** - Updated Job.bat with modern debug flags (-agentlib:jdwp) replacing deprecated -Xdebug/-Xnoagent (Jan 21, 2025)
- âœ… **Batch File Cleanup** - All 16 batch files updated to v20251021a with consistent logging and versioning (Jan 21, 2025)
- âœ… **Build System Fully Operational** - All compilation errors resolved, clean build with JDK 24 (Jan 20, 2025)
- âœ… **Jetty 12.1.2 Migration Complete** - Upgraded from Mortbay Jetty 6.x to Eclipse Jetty 12.1.2 with Jakarta EE 10
- âœ… **Jakarta Servlet Migration Complete** - All servlet imports migrated from javax.servlet to jakarta.servlet
- âœ… **JSON Support Implemented** - Full JSON parsing, generation, schema validation, and conversion capabilities added to JAC core
- âœ… **Deprecation Warnings Suppressed** - Java 24 compatibility warnings resolved with @SuppressWarnings annotations
- âœ… **Folder Structure Simplified** - Consolidated jac2024/jrun/bin/ into jac2024/bin/ for cleaner organization

---

## ðŸ“– Document Quick Reference

| Document | Purpose | Length | Audience |
|----------|---------|--------|----------|
| **CLAUDE.md** | JAC overview & quick start | 5 pages | Developers, new users |
| **NEWGEN.md** | Complete architectural vision | 200+ pages | Architects, technical leads |
| **Roadmap.md** | 12-month implementation plan | 54 pages | Project managers, developers |
| **AllPhases.md** | Build system deep-dive | 35 pages | Build engineers, developers |
| **Jrun.md** | Runtime system & execution | 42 pages | Developers, system admins |
| **How-to-Debug-VC.md** | VS Code debugging guide | 30 pages | Developers, debuggers |
| **Demo.md** | Demonstrations & examples | 48 pages | Developers, learners, students |
| **ARM-JAC-MIC.md** | Three-layer architecture | 38 pages | Architects, developers, engineers |
| **BuildExamplesPlan.md** | Next-level examples plan | 45 pages | Developers, architects, contributors |
| **JSON-Implementation.md** | JSON support implementation | 27 pages | Developers, architects |
| **JSON-Roadmap.md** | JSON 6-week roadmap | 60 pages | Developers, project managers |
| **jac2024-conf.md** | Build templates & code generation | 50 pages | Developers, build engineers |
| **jac2024-config.md** | Runtime configuration system | 60 pages | Developers, system admins |
| **Database-Setup.md** | PostgreSQL configuration | 25 pages | Developers, DBAs |
| **BusinessCase.md** | Financial justification | 60 pages | Executives, stakeholders |
| **CompetitiveAnalysis.md** | Market analysis | 45 pages | Business strategists, executives |

**Total Documentation:** 825+ pages of comprehensive planning and analysis
