---
title: "PracticeForceOnePlatformArchitectureGuide"
---

# PracticeForceOne — Platform Architecture Guide (Component-by-Component)

**Last reviewed: 2026-07-24**

> **Companion narrative to the architecture diagram.** This document walks the diagram top to bottom and
> describes *every block* — what it is, the role it plays, and (where useful) its current maturity in the
> live codebase. Canonical rules live in **[PracticeForceOnePlatformArchitecture](<PracticeForceOnePlatformArchitecture.md>)**.

![PracticeForceOne Platform Architecture](PracticeForceOnePlatformArchitecture.png)

**One-line thesis:** *Metadata is the Platform. Runtime Executes. Applications Emerge.* Healthcare software
becomes **configuration, not code** — the EHR (Family Practice) is just the *first package* on a runtime that
assembles any healthcare application from reusable definitions.

**Maturity legend used below:** 🟢 live · 🟡 building · ⚪ planned. These reflect the real codebase (live build **1943**, gate 251/251 GREEN as of 2026-07-24), so the guide doubles as a roadmap.

---

## How to read the diagram — the six-step flow

The ribbon across the top is the life of a request, and the reason the layers are ordered the way they are:

1. **① Author** — a person configures the app in the no-code studio (no code written).
2. **② Define** — their choices are saved as *definitions* in the Definition Repository (the source of truth).
3. **③ Resolve** — at runtime, the Context Engine decides *which* definitions apply (this user, tenant, specialty…).
4. **④ Compose** — the runtime engines execute those definitions to assemble the actual screen/workflow.
5. **⑤ Serve + Integrate** — Healthcare Domain Services provide the behavior; Integration Services reach the outside world.
6. **⑥ Package & Publish** — a coherent set of definitions is versioned into an installable package, and published.

In one breath: *Metadata defines the logical model · Context resolves the applicable definitions · Runtime
composes the application · Domain Services provide healthcare behavior · the binding layer maps logical data to
governed persistence · JAC provides the stable generated relational backbone.*

---

## Experience Layer — channels & interfaces

*One definition renders to every channel; the channels themselves carry no business logic.*

- **Staff Web** — the desktop web app front-desk/back-office staff use; renders composed screens for their role.
- **Provider Web** — the clinician-facing web app (charting, orders, encounters); same runtime, provider role/definitions.
- **Mobile (Staff/Provider)** — phone/tablet surface; consumes the same definitions rendered responsively.
- **Patient Portal** — the patient-facing surface (statements, messages, records, self-service). 🟢 live for several flows.
- **Role Dashboards** — landing dashboards assembled per role from Dashboard definitions (cockpit widgets/KPIs). 🟢 live.
- **AI Copilot / Ambient Scribe** — assistant surfaces woven across channels (documentation help, coding assist). ⚪ planned/partial.
- **Cross-cutting bar (every channel):** **Identity · SSO/MFA** (who you are), **Tenant Context** (which org/practice),
  **Theme · Preferences** (look & personal settings), **Accessibility** (a11y), **Localization** (language) — applied
  uniformly so no screen re-implements them.

## ① No-Code Authoring Studio — the tools that write definitions

*This is where a clinic configures the platform. Every tool here **writes into the Definition Repository**; none of them writes code.*

- **Application Builder** — the top-level composer: assembles screens/pages (layouts + components) into an application without code.
- **Workflow Designer** — draws state machines: the steps a process moves through (e.g. check-in → rooming → encounter → checkout), transitions, and guards. 🟡 building (Workflow Engine, AgentDLP).
- **Menu & Navigation Designer** — defines the sidebar/menus per role and context (what each user sees and can reach). 🟡 building.
- **Rule Builder** — authors business rules & validations (calculations, eligibility, edits) as declarations the Rules Engine runs. 🟡.
- **Dashboard Designer** — lays out dashboards: which widgets/KPIs, in what arrangement, for which role. 🟢 (Dashboard Engine live).
- **Task & Queue Designer** — defines work queues, SLAs, and escalation rules (who works what, by when). 🟡.
- **Search Designer** — configures search behavior: lookup dialogs, global search, filters, relevance, saved searches. 🟡.
- **Terminology Manager** — the label/vocabulary editor: rename a field or code set *without code* (e.g. "Visit" → "Appointment").
- **Security & Policy Designer** — authors roles, permissions, and access policies (who can see/do what) as definitions.
- **Entity / Data Modeler** — declares entities and fields (the data model) as metadata — the seam that lets the data model itself be configured.
- **API & Integration Designer** — defines endpoints/contracts and outbound integration mappings (REST/FHIR/HL7/webhooks).
- **📦 Package Manager** — bundles a set of definitions into a versioned package and installs/updates packages (the AppExchange author tool).

## ② Platform Definition Repository — the single source of truth

*The metadata system. **There is no separate "metadata engine" — the repository IS it.** Every runtime engine
queries it; everything below the repository is generated from what lives here.* Implemented today as
`engine_configs` (per-practice × stage), owned/stored by AgentDLP with schema governed by AgentPlatform. 🟡 growing.

- **Entities** — the objects the app knows about (Patient, Encounter, Claim…), described as metadata not hardcoded.
- **Fields** — the attributes on each entity (with type/validation), so new fields can be added by declaration.
- **Relationships** — how entities reference each other (patient→encounters, order→results).
- **Layouts** — page/section arrangements the Forms Runtime renders.
- **Components** — reusable UI building blocks (inputs, grids, pickers) referenced by layouts.
- **Menus & Nav** — navigation structures consumed by the Menu Engine.
- **Workflows** — state-machine definitions consumed by the Workflow Engine.
- **Business Rules** — logic/calculation/eligibility definitions consumed by the Rules Engine.
- **Validations** — field/record constraints enforced at write time.
- **Tasks & Queues** — work-queue and SLA definitions consumed by the Task Engine.
- **Dashboards** — widget/layout definitions consumed by the Dashboard Engine.
- **Reports** — report/query definitions (filters, columns, groupings).
- **Search & Filters** — search/lookup/filter definitions consumed by the Search Engine.
- **Terminology** — labels, code sets, and vocabularies (drives "rename without code" + localization).
- **Permissions / Policies** — RBAC/ABAC roles and access policies consumed by the Security Engine.
- **Localization** — language/translation definitions applied across channels.
- **API Contracts** — endpoint/schema/event definitions for the app's own and external APIs.
- **Tenant & Specialty Overrides** — per-practice / per-specialty deltas layered on base definitions (fully independent per practice).

**Packaging & Lifecycle (the strip inside the repository):**
- **Versioning & History** — every definition change is versioned and auditable.
- **Change Sets** — group related definition changes for review/deploy as a unit.
- **Packages (install/upgrade)** — the installable bundles of definitions (specialties, modules).
- **Dependency Resolution & Runtime Binding** — resolves what a package/definition depends on and binds it at runtime.
- **Namespaced Overrides (upgrade-safe)** — a customer's local tweaks survive a package upgrade (the managed-package problem).
- **Dev → Test → Prod Promotion** — a governed promote path (preprod → prod) with rollback snapshots (`copyDefinitionSet`). 🟡 (per-practice×stage live).

## ③ Context Engine — resolves *which* definitions apply

*Sits between the repository and the runtime. It answers the questions that pick the right definition set, so the
**same runtime becomes a different application** per user, tenant, and specialty.* 🟡 (Context Manager live for patient/tenant).

- **Who is the user? (role)** — selects role-scoped menus, permissions, dashboards.
- **Which tenant?** — org/practice isolation and per-practice definition set.
- **Which specialty / package?** — which installed application/specialty's definitions are active.
- **Which device / channel?** — desktop vs mobile vs portal rendering.
- **Which patient / encounter?** — the clinical context the screen is bound to.
- **Which workflow step?** — where in a process the user is, so the right step-definition renders.

## ④ Application Composition Runtime — generic engines that assemble the app

*The heart of the platform: eight generic engines that **execute definitions**. They know as little about
healthcare as possible — a workflow engine doesn't know "patient," it knows "state machine."* Each engine card
in the diagram shows the definition type it consumes.

- **Forms Runtime (CF)** 🟢 — renders screens from Form/Layout/Component definitions with conditional logic & validations. The most mature engine (the live "CF" configurable-forms system — **540+ definitions live**, pfo-cf-v1 contract, August demo path 14 forms clean).
- **Workflow Engine** 🟡 — executes state machines: transitions, guards, entry/exit actions. (AgentDLP.)
- **Menu / Navigation** 🟡 — builds role/context menus and dynamic navigation from Menu definitions.
- **Dashboard Engine** 🟢 — assembles role dashboards from widget/layout definitions; drill-downs.
- **Task / Queue Engine** 🟡 — runs work queues, assignment/routing, SLAs, escalations from Task definitions.
- **Business Rules Engine** 🟡 — evaluates rules: calculations, scoring, eligibility, edits & validations.
- **Search Engine** 🟡 — executes Search/Filter definitions: lookup dialogs, global search, relevance, saved searches.
- **Security Engine** 🟢 — the resource-generic access gate: `mayAccess(actor, resourceType, resourceId)`, break-glass, audit, from Permission/Policy definitions. (AgentMR8.) **RBAC ON since build 1534; SecurityFilter enforced fleet-wide.**

## Runtime Orchestration — coordinates the engines while an app runs

*The connective tissue that lets independent engines cooperate during a live request.*

- **Event Bus / Messaging** — engines/services publish and react to events (decoupled coordination).
- **Workflow Orchestration** — drives multi-step processes across engines/services.
- **Document & Data Orchestration** — coordinates document/data movement (uploads, generation, routing).
- **Audit & Activity Tracking** — records what happened (who did what, when) for compliance and timelines.
- **Notification & Alert Orchestration** — fans out notifications/alerts to the right people/channels.

## ⑤ Healthcare Domain Services — the healthcare knowledge

*Reusable domain services that **implement healthcare behavior, expose APIs, and own NO presentation**. They are
**specialty-neutral** — Family Practice and Cardiology both call the same Orders service; only their definitions
differ.* Mostly 🟢 live.

- **Patient** 🟢 — demographics, identity, the patient record spine (now with metadata-driven field persistence).
- **Encounter** 🟢 — visits/encounters, notes, sign lifecycle.
- **Scheduling** 🟢 — appointments, availability, slots.
- **Orders / Results** 🟢 — the Diagnostic Order + Results engine (labs/imaging/procedures): order lifecycle, result inbox, trends, work-queue. (AgentECW.)
- **Medication** 🟢 — medication list, eRx, promotion from orders.
- **Billing / Claims** 🟢 — charges, claims, EDI submission, denials.
- **Eligibility** 🟢 — insurance eligibility checks and coverage capture.
- **Referral** 🟢 — referrals and authorizations.
- **Document** 🟢 — clinical documents: upload, storage, verification, lifecycle.
- **Communication** 🟡 — messaging/notification delivery (SMS/email/voice/fax).
- **Payment** 🟡 — patient payments, statements, posting.
- **…pluggable** ⚪ — new domain services attach the same way (specialty-neutral APIs).

## Integration Services — the outside world is pluggable

*Adapters & gateways that connect the platform to external systems, so packages don't hardcode integrations.*

- **EHR / HIE / Registry Adapters** 🟡 — external record exchange, health information exchanges, registries.
- **Claims / Payer (EDI · 27x · ERA)** 🟢 — clearinghouse/payer EDI (eligibility 270/271, claims 837, status 276/277, remits 835).
- **Patient Portal Gateway** 🟢 — the portal's integration surface.
- **Comms (SMS · Email · Voice · Fax)** 🟡 — outbound communication channels.
- **AI / ML Services** 🟡 — summarization, assistance, prediction services.
- **FHIR · HL7 · REST · Webhooks** ⚪ — standards-based interop (FHIR/HL7 native, generic REST/webhooks). HL7 ORU result ingest exists.

## Data-Layer Integration — Unified Persistence Contract → Storage Binding

*The bridge between "a field defined in metadata" (top) and "real storage" (bottom) — and the single most
important discipline in the platform.*

**Unified Persistence Contract (NON-NEGOTIABLE):** Forms, Rules, Search, and Domain Services access data ONLY
through one logical contract — `read(entity,id,field)` · `write(entity,id,field,value)` · `query(entity,criteria)`
· `validate(entity,values)` · `audit(entity,change)`. **No consumer contains `if native / else if JSON / else if
custom object`** — the binding layer resolves the physical strategy. That is what lets the same metadata field
participate identically in forms, workflows, rules, APIs, search, dashboards, reporting, auditing, and interop.

The four physical strategies behind the contract:
- **JAC-Generated CRUD** 🟢 — native typed columns; the **durable relational spine / system of record** (XML schema → generated JEO+CRUD, tenant-scoped, indexed). The live default; the reusable `EntityFieldBinder` reads/writes declared fields through it.
- **JSON Extension Fields** ⚪ — `custom_data` JSONB per entity; add a per-tenant/package field with no DDL (GIN-indexed).
- **Custom Objects (EAV)** ⚪ — a generic entity/attribute/value store; define an entirely new entity by configuration.
- **Governed Migration Pipeline** ⚪ — designer change → schema XML → auto-regen JAC CRUD → Change-Set → Dev→Test→Prod; proven config graduates into first-class native schema.

**Version & Upgrade Compatibility:** a package upgrade changes *behavior AND stored data*, promoted **together** —
accounting for definition version · storage-schema version · package version · backward-compatibility · rollback
feasibility · data transformation · search-index rebuild · analytics-model refresh.

## Data & Infrastructure

*The physical stores under the binding layer.*

- **Operational DB (relational)** 🟢 — the primary transactional database (Cloud SQL / Postgres).
- **Document / Blob Store** 🟢 — files, images, PDFs.
- **Cache / Session** 🟡 — performance/session store.
- **Search Index** 🟡 — full-text/search backing store.
- **Analytics / Data Warehouse** 🟡 — reporting/BI store.
- **Cross-cutting:** **Tenant Isolation · Encryption · Backup/DR · Monitoring · Observability · Data Governance** — applied across every store.

## Platform Administration & Governance

*Running the platform itself.*

- **Tenant Management** — onboard/configure organizations and practices.
- **User & Role Management** — RBAC/permission administration.
- **Config Mgmt (export/import/version)** — move and version definition sets.
- **📦 Package & App Mgmt (install/upgrade/marketplace)** — install/update packages; the marketplace admin surface.
- **Change Control (approval/audit)** — governed approval + audit trail for changes.
- **Monitoring & Health** — system/job/integration health.
- **Backup & Recovery** — data & config backup/restore.

## Application Layer — apps are installable packages

*Each application is a **package of definitions** on the one shared runtime. This is where the platform pays off:
new applications are installs, not projects.*

**Clinical / Specialty packages:** **Family Practice** 🟡 (the reference package — first app; August demo path live) ·
Cardiology · Pediatrics · Behavioral Health · Physical Therapy · Urgent Care · Occ Med ⚪.
**Non-EHR applications:** Call Center · Referral Management · Care Coordination · Population Health ·
**Revenue Cycle** 🟡 · Prior Authorization · Quality Reporting ⚪. Same runtime, different definitions.

## ⑥ Extensibility Model — extend the core without modifying it

*Three tiers of contribution, so third parties add capability without touching platform code.*

- **PACKAGES** — full applications / specialties (the largest unit of contribution).
- **EXTENSIONS** — add to an existing package (extend, don't fork) — upgrade-safe via namespaced overrides.
- **PLUGINS** — drop-in components & adapters (a widget, a rule pack, an integration).

Third parties contribute **AI agents · workflows · dashboards · business rules · UI components · integrations ·
specialty packages** — all as definitions, none touching core code.

## Marketplace & Ecosystem — where the market is created

*The AppExchange analogy.* Publishers list packages (a dermatology workflow, a Medicare AWV package, a diabetes
management package, an AI coding assistant…); **customers install instead of commissioning custom development.**
This is the business-model multiplier: the platform's value becomes the ecosystem of packages on it. ⚪ planned.

---

## The vision, restated

- **Metadata is the platform** — the repository is the operating system.
- **Context selects** — which application you get.
- **Runtime composes** — it doesn't hardcode.
- **Configure, don't code** — definitions replace code.
- **Open & interoperable** — FHIR/HL7 native.
- **Extend & publish** — an ecosystem, not an app.

**Outcome:** any organization can build, configure, and evolve the exact healthcare application it needs — and an
ecosystem can extend, publish, and install specialties, modules, and workflows. The proof milestone:
**"Family Practice onto a fresh tenant, zero code."** Every specialty after that is a package, not a project.

---
*Maintained by AgentPlatform (AgentECW). Diagram source: `PracticeForceOnePlatformArchitecture.html`
(re-render with headless Chrome). Canonical rules: [PracticeForceOnePlatformArchitecture](<PracticeForceOnePlatformArchitecture.md>).*

---

## Review Epilog — 2026-07-24

- Verified against live build 1943 (gate 251/251 GREEN). Per-component maturity flags (🟢/🟡/⚪) confirmed accurate — no flips needed.
- Added CF catalog count (540+ definitions, pfo-cf-v1, August demo path 14 forms clean) to Forms Runtime entry; added RBAC ON status to Security Engine entry; updated the maturity-legend build reference; updated Family Practice blurb to note August demo path live.
- No structural changes; the six-step flow and block descriptions remain accurate.

---

## Addendum 2026-08-08 (AgentARCH)

The canonical page gained a **Security, Tenancy & Evidence layer** section (route auth enforced
by ratchet · fleet-wide tenant guard · ChangeAudit/audit_log immutable evidence layer · payments
boundary + PCI scope ruling · Patient ID identity). Read it with the layers described here; the
measured state lives in
[practiceforceoneArchitectureAssessment08-08](practiceforceoneArchitectureAssessment08-08.html).
