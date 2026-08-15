---
title: "PracticeForceOnePlatformArchitecture"
---

# PracticeForceOne — Platform Architecture (Canonical, Fleet-Wide)

**Last reviewed: 2026-08-08 (AgentARCH — post-remediation; see the security/audit layer section added below)**

> **2026-07-26: the founder issued a top-level governing directive that sits ABOVE this page —
> [PracticeForceOneNorthStar](PracticeForceOneNorthStar.html) (Intelligent Clinical Platform: evidence →
> knowledge → documentation → workflow → outcomes; the 7-question architectural test before any
> feature; AgentARCH guards purity).** This page remains the canonical layer/rules reference; where
> they speak to the same topic, the North Star governs.

> **FOUNDER DIRECTIVE, 2026-07-19. This is the North Star for every lane and every PR.**
> Read this at the start of a session before designing anything.
> Diagram: [`PracticeForceOnePlatformArchitecture.png`](PracticeForceOnePlatformArchitecture.png)
> (editable source: [`PracticeForceOnePlatformArchitecture.html`](PracticeForceOnePlatformArchitecture.html)).

## The mission has evolved

We are **not** building individual screens. We are **not** building an EHR.
We are building a **configurable healthcare application platform** that assembles applications
from **reusable definitions + platform engines**.

> **Metadata is the Platform. Runtime Executes. Applications Emerge.**
> Healthcare software becomes **configuration, not code**. The EHR is just the **first package**;
> specialties and non-EHR apps are installs, not projects.

**North Star:** a clinic can rename a field, rearrange a screen, add a workflow, create a specialty,
build a module, change terminology, add approval steps / business rules, or build an entirely new
healthcare application — **without modifying application code.** The runtime assembles the app from definitions.

## The reading order (how the platform runs)

**① Author** (no-code studio) → **② Define** (definitions = source of truth) → **③ Resolve** (context
selects the applicable definitions) → **④ Compose** (runtime engines assemble the app) → **⑤ Serve +
Integrate** (domain services + FHIR/HL7/EDI) → **⑥ Package & Publish** (version → marketplace).

Or in one breath: **Metadata defines the logical model · Context resolves the applicable definitions ·
Runtime composes the application · Domain services provide healthcare behavior · the binding layer maps
logical data to governed persistence · JAC provides the stable generated relational backbone.**

## Every capability belongs to exactly one layer

1. **Runtime Engines** — generic; know as little about healthcare as possible; they *execute definitions*:
   Forms Runtime (CF) · Workflow · Menu/Navigation · Dashboard · Task/Queue · Business Rules · Search · Security.
   *(There is no separate "Metadata Engine" — the **Definition Repository** IS the metadata system; every engine queries it.)*
2. **Healthcare Domain Services** — reusable domain knowledge; **expose APIs; own NO presentation;
   specialty-neutral** (every package reuses them): Patient · Encounter · Scheduling · Orders/Results ·
   Medication · Billing/Claims · Eligibility · Referral · Document · Communication · Payment.
3. **Definitions** — describe applications; replace custom code: Workflow · Menu · Form · Dashboard ·
   Business Rules · Task · Terminology · Entity Metadata · Search · Security Policies · Specialty Config.

**Context Engine** sits between the Definition Repository and the runtime: it resolves *which* definitions
apply (who/tenant/specialty/device/patient/role/workflow) — so the same runtime becomes a different
application per user, tenant, and specialty.

## THE NON-NEGOTIABLE — Unified Persistence Contract

Forms Runtime, Rules Engine, Search Engine, and Domain Services must **never** branch on where a field is
stored (generated column vs JSON vs custom-object store vs migrated native entity). They call **one logical
contract**, and the Data-Layer Integration layer resolves the physical strategy:

```
read(entity, id, field)
write(entity, id, field, value)
query(entity, criteria)
validate(entity, values)
audit(entity, change)
```

**There must be NO `if native / else if JSON / else if custom object` anywhere in the UI or services.**
If that branching leaks into consumers, the architecture is undermined. Only once persistence is hidden
behind this contract does the *same metadata field* participate consistently across **forms · workflows ·
rules · APIs · search · dashboards · reporting · auditing · interoperability** — i.e. the **data** is
configurable, not merely the screen.

### Data-Layer Integration — the four physical strategies behind the contract

| Strategy | Role | Status |
|---|---|---|
| **JAC-Generated CRUD** | Native typed columns; the **durable relational spine / system of record** (XML schema → generated JEO+CRUD, tenant-scoped, indexed). | 🟢 live |
| **JSON Extension Fields** | `custom_data` JSONB per entity; per-tenant/package fields, no DDL, GIN-indexed — add a field instantly. | ⚪ planned |
| **Custom Objects (EAV)** | Generic entity/attribute/value store; define an entirely new entity by configuration. | ⚪ planned |
| **Governed Migration Pipeline** | Designer change → schema XML → auto-regen JAC CRUD → Change-Set → Dev→Test→Prod; proven config becomes first-class native schema. | ⚪ planned |

**JAC stays the durable spine.** JSON extensions + package-defined objects provide agility. The governed
migration pipeline lets proven configuration graduate into first-class native schema over time.

### Version & Upgrade Compatibility

A package upgrade changes **behavior AND stored data** — they must be promoted **together**. The migration
pipeline must explicitly account for: **definition version · storage-schema version · package version ·
backward-compatibility · rollback feasibility · data transformation · search-index rebuild ·
analytics-model refresh.**

## Applications are packages; the endgame is a marketplace

The **Application Layer** = installable **packages** of definitions on one shared runtime — clinical
specialties (Family Practice = the reference package; Cardiology, Peds, Behavioral Health, PT, Urgent Care)
**and** non-EHR apps (Call Center, Referral Mgmt, Care Coordination, Pop Health, Revenue Cycle, Prior Auth,
Quality Reporting). The **Extensibility Model** (Packages → Extensions → Plugins) lets third parties
contribute AI agents, workflows, dashboards, rules, UI components, integrations, and specialty packages
**as definitions, none touching core code** — publishing to a **marketplace** (AppExchange model) where
customers **install** instead of commissioning custom development.

## Rules for every PR

- **Platform-first:** before any feature ask "can this be a reusable platform capability?" If yes, build the
  capability FIRST, then the feature using it. **Never solve the same problem twice.**
- **Workflow rule:** think in COMPLETE workflows, never isolated pages.
- **Configuration rule:** the runtime must NOT know about Patient/Encounter/Claim/Medication/Referral/
  Appointment — those belong to domain services + metadata. The runtime executes definitions.
- **Persistence rule (non-negotiable):** consumers use the Unified Persistence Contract only. No storage branching.
- **Simplicity rule:** every PR makes the platform more declarative · reusable · less coupled · easier to
  configure/understand/extend.

## Phase II — Build the Platform (Founder directive, 2026-07-19)

> *"Stop thinking about building Family Practice. Start thinking about building the platform that makes
> Family Practice — and every future healthcare application — the easiest application you'll ever build."*

**The metric shifted: maximize FINDINGS CLOSED PER REUSABLE ENGINE, not raw findings.** Every PR should
increase *platform capability*, not just implement another feature.

**Priority order (do work in this sequence):**
1. Deepen existing 🟡 working screens into 🟢 full parity (**finish before expanding** — production quality > demo breadth).
2. Extend a reusable engine before creating a new screen.
3. Complete workflows before adding isolated functionality.
4. Reuse an existing Domain Service before creating a new API.
5. Extend existing metadata before introducing a new format.

**Before implementing ANYTHING, answer these — if any is "yes", build the reusable capability first:**
Can this become a reusable engine? · Can this become metadata instead of code? · Can another application
reuse this? · Can another specialty reuse this? · Does this remove hard-coded behavior?

**Definition Repository first:** nothing becomes runtime behavior until it exists as a definition
(forms · menus · workflow · rules · dashboard · search · tasks · permissions · packages · localization).
The runtime executes definitions; it never hard-codes healthcare behavior.

**Every new field or entity must DECLARE** (operationalizes the Unified Persistence Contract):
storage strategy · validation · searchability · reporting · audit behavior · interoperability mapping.

### Every PR must state
**Platform Impact:** which reusable engine improved? · which metadata definitions were added? · which
hard-coded behavior was eliminated? · which ECW findings were closed? · which future development got easier?
**Runtime Impact:** which runtime engine consumes this? · which Domain Service owns the behavior? · which
definitions changed? · which storage strategy is used? · does this improve package capability?

### Definition of Done (a capability is complete only when)
metadata exists · runtime consumes it · a Domain Service supports it · persistence is bound · search works ·
rules work · dashboards work · APIs work · audit works · package install works.

## Engine ownership registry & lane charters (never duplicate — extend)

**Nine reusable engines have single owners. If your feature needs one of these, EXTEND it — do not build a
second implementation. Check here first.**

| Engine / Domain | Owner | Charter (founder marching orders) |
|---|---|---|
| **Application Composition Runtime** (Forms/CF, Menu) | **AgentCF** | Own it. Every new screen should reduce the UI code required for the *next* screen. |
| **Patient-facing Workflows** (portal, messaging, notifications, self-service) | **AgentMR9** | Own every workflow that touches patients — make them metadata-driven workflows, not isolated features. |
| **Security & Governance Engine** (permissions, audit, staged deploys, package promotion, tenant isolation, config governance) | **AgentMR8** | Own platform security & governance as reusable platform capabilities, not app features. |
| **Operating Experience** (navigation, search, dashboards, context, AI, notifications) | **AgentDLP** | Make the platform feel like one cohesive app regardless of which package is installed. |
| **Workflow Engine** | AgentDLP | State machines / transitions as definitions. |
| **Diagnostic Order + Results Engine, Medication Lifecycle** (Domain Services: Orders/Results/Meds) | **AgentECW** | Backend/business-service half; API-only, no presentation; feeds the runtime via the persistence contract. |
| **Clinical Documentation Engine** | AgentCF (EncounterCF) | Structured docs as definitions. |
| **Dashboard Engine** | AgentDLP | Widgets/layouts as definitions. |
| **Definition Authoring Studio** (visual editors: form/kanban/menu; per-practice def tooling) | **AgentUI** | Authors definitions INTO the repository. The Authoring layer — distinct from CF's Composition Runtime (authoring ≠ execution; don't fold in). |
| **Definition Repository** (`EngineConfigStore`/`EngineConfigRoutes`; per-practice×stage schema; `copyDefinitionSet`) | **AgentDLP** (store impl) · **AgentPlatform** (schema/contract governance) | The one definition store. Schema/contract/versioning changes route through AgentPlatform. |
| **Entity field metadata / Unified Persistence binding** (`EntityFieldBinder` + entity field defs) | **AgentPlatform** | Metadata-driven read/write over generated CRUD; entity field lists migrate into the Definition Repository as `config_type='entity'` defs. |

### AgentPlatform — architecture steward (AgentECW, dual role from 2026-07-19)
Does **NOT build features** — **protects platform integrity** as the other lanes add capability fast. Owns:
the **Definition Repository** · the **metadata schema** · **package/version compatibility** · the **Unified
Persistence Contract** · the **Data-Model strategy** · **runtime composition rules** · **architectural
governance** (this document). Reviews cross-cutting design, arbitrates engine boundaries (the registry above),
and holds the line on the non-negotiables (persistence contract, Definition-Repository-first, no duplicate
engines). Also keeps the ECW scoreboard — now measured as *findings closed per reusable engine*.

## The proof milestone

**"Family Practice onto a fresh tenant, zero code."** When a specialty installs as a package with no code
changes, the thesis is proven. Every specialty after that is a package, not a project.

## Maturity (grounded in the live codebase, 2026-07-24)

Live build: **1943** (commit 8472d3751). Gate 251/251 GREEN. August demo path (Schedule→Check-In→Eligibility→Chart→Encounter→Checkout) PASSES — 14 CF forms, all clean. CF catalog: **540+ definitions live**, pfo-cf-v1 contract, nav metadata on all demo-path forms.

- 🟢 **Live:** Forms Runtime (CF, 540+ definitions), Dashboard Engine, Security Engine (ProtectedAccess / RBAC ON since build 1534), and the core domain services (Patient/Encounter/Scheduling/Orders/Results/Medication/Billing/Claims/Eligibility/Referral/Document), Claims/Payer EDI, Patient Portal Gateway, **JAC-Generated CRUD**. MR2–MR7 ALL DELIVERED. MR8 platform security + governance live. Demo data: Bay Area Cardiology, Provider Steve Chen, 6 patients.
- 🟡 **Building:** Workflow, Menu, Task/Queue, Business Rules, Search engines; Communication/Payment services; EHR/AI-ML adapters; Family Practice + Revenue Cycle packages. MR9 (ECW Front Office/Portal parity), MR10 (Architecture Upgrade Program, paper-only pre-August).
- ⚪ **Planned:** JSON/EAV/migration data strategies, Package/Version management, FHIR, every specialty beyond Family Practice, the marketplace. Per-practice definitions (long-term: ALL definitions scoped per-practice; interim = org-level; migration post-August).

*Today the **screens** are configurable; the **data model** becomes configurable as the extension strategies
land behind the persistence contract. This doc is honest about that gap.*

---
### Maintaining the diagram (canonical location = this repo)

The diagram source of truth is **`PracticeForceOnePlatformArchitecture.html`** in this
repo (NOT Downloads). To update it: edit that `.html`, then re-render the `.png` beside it:

```bash
chrome --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1620,2300 --screenshot=<scratch>/arch.png \
  file:///.../PracticeForceOnePlatformArchitecture.html
cp <scratch>/arch.png PracticeForceOnePlatformArchitecture.png   # then commit both
```

*Render to a scratch path and `cp` in — OneDrive can hold a lock on the tracked `.png` and reject a direct
headless write (Access denied 0x5).* Commit the `.html` + `.png` together so they never drift.

*Maintained by AgentECW (scorekeeper). Related: `AGENTS.md` (fleet channel), agent memory
`platform-architecture-directive.md`.*

---

## Review Epilog — 2026-07-24

- Content verified against live build 1943 (gate 251/251 GREEN, August demo path PASSES with 14 CF forms). No structural changes required — the platform architecture, three-layer model, and non-negotiables were already accurate.
- Updated the Maturity section from "2026-07-19" to "2026-07-24"; added CF catalog count (540+), RBAC status (ON since 1534), MR delivery state (MR2–MR7 ALL DELIVERED, MR8/9/10 active), demo data facts, and per-practice definitions long-term plan.
- No agent ownership changes; the engine registry table remains current.
