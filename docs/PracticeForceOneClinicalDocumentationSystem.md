---
title: "PracticeForceOneClinicalDocumentationSystem"
---

# PracticeForceOne Clinical Documentation System

**GOVERNING ARCHITECTURAL DIRECTIVE** — founder, 2026-07-25. Binds **AgentUI, AgentCF and AgentDB**
until the Clinical Documentation System is complete. Supersedes the lane-local
[Specialty Form Wiring Directive](PracticeForceOneSpecialtyForms.html) recorded earlier the same day.

> **ABSORBED 2026-07-26** by the wider program directive
> **[Clinical & Aesthetics Documentation Intelligence](PracticeForceOneDocumentationIntelligence.html)** —
> evidence-driven inference, a metadata Rule Engine, section composition and aesthetics in scope.
> This page remains the **persistence and workflow floor** that directive builds on: the canonical
> Clinical Document, its lifecycle, the 13-point definition of done and the lane split all still hold.

> *"You are no longer building configurable forms. You are building the PracticeForceOne Clinical
> Documentation System."*

---

## The measure of success

Success is **not** the number of forms, screens, APIs or tables. Success is whether **a real
provider can complete an entire patient encounter from beginning to end** using PracticeForceOne.

Every design decision must improve the provider workflow.

**Final criterion:** a physician conducts an entire visit — opening the encounter through signing
the note — **without leaving the clinical documentation workflow**. Every specialty template,
current and future, inherits this architecture **through configuration, not custom development**.

---

## Architecture principles

- There shall be **exactly one** documentation architecture.
- **Not** one persistence model per specialty.
- **Not** one table per form.
- **Not** one API per condition.
- All configurable forms use **one shared clinical documentation contract**.
- **Specialty forms are documentation templates — not applications.**
- Every specialty template executes through the **same runtime**.

## The canonical Clinical Document model

**The document model is the system of record.** Every document supports:

| | |
|---|---|
| Organization | Draft status |
| Patient | Completed status |
| Encounter | Signed status |
| Provider | Amended status |
| Form definition | Void status |
| Form version | Created by · Updated by · Signed by |
| Structured payload | Audit history · Version chain |

---

## The provider workflow being built

1. Open an encounter
2. Receive **recommended** documentation templates from clinical context
3. Complete documentation
4. Save a draft
5. Resume documentation
6. Sign
7. Lock the signed document
8. Amend while preserving previous versions
9. View documentation from the patient chart
10. Retrieve historical documentation
11. Complete audit history
12. Complete tenant isolation

**The workflow must function without providers manually browsing the specialty catalog.**

## Shared definition of done (13)

Complete only when a provider can actually do all of these:

1. Open the recommended documentation from within an encounter
2. Complete documentation
3. Save a draft
4. Resume the draft
5. Reload without data loss
6. Sign the document
7. Prevent modification of the signed version
8. Amend by creating a new version
9. View **every version** from the patient chart
10. Search by patient, encounter, date, provider and template
11. Verify complete audit history
12. Verify complete multi-tenant isolation
13. Demonstrate the workflow with **multiple materially different templates** without changing the
    persistence architecture

**Nothing is complete until an actual provider workflow proves every step.**

---

## Lane responsibilities

### AgentDB — the document contract

Own the canonical Clinical Document persistence architecture. **Publish one shared API contract**
implementing: draft · save · update · retrieve · sign · amend · versioning · audit · chart
retrieval. Favor generated CRUD and canonical schema. No specialty-specific persistence unless
explicitly required by structured reporting.

### AgentCF — reusable template bindings

**Stop expanding the specialty catalog.** Convert existing configurable forms into reusable
documentation **templates**. One shared binding model across the catalog; every template uses the
published contract. **No per-form APIs. No per-form tables. No duplicated persistence logic.**
Focus first on **curated family-practice templates representing real clinical workflows**.

### AgentUI — the provider experience

Create the provider experience. **The provider should never search through hundreds or thousands of
forms.** Implement intelligent template recommendation from **diagnosis · problem list · visit
reason · appointment type · provider context · specialty**.

The documentation experience must feel like **one continuous workflow rather than separate
screens**. **The encounter becomes the center of the documentation experience.**

---

## Future architecture: composable modules

Clinical documentation evolves into **composable modules** — History of Present Illness · Review of
Systems · Physical Examination · Assessment & Plan · Medication Review · Orders · Procedure
Documentation · Disease-Specific Modules.

**Templates compose these reusable modules rather than duplicating them.**

---

## What this changes, against what was measured

The [Specialty Forms analysis](PracticeForceOneSpecialtyForms.html) (build 1964) measured the starting
position this directive responds to:

| Finding | Consequence under this directive |
|---|---|
| 0% of sampled clinical forms can save; 97% have no binding at all | The whole point: the document contract gives all of them one destination |
| 587 creatable tables, 358 existing, 72 with any rows, **zero clinical specialty tables with data** | "Not one table per form / not one API per condition" is aimed exactly here |
| No diagnosis / problem / visit-reason routes to a form; entry is 79 boards + launcher + sidebar + URL | Replaced by recommendation — AgentUI's core obligation |
| 27% of clinical forms are family-practice work; 44% referral-out; 256 colliding labels / 354 redundant | Why "curated family-practice templates first" is the right starting scope |

---

## ⚠ OPEN DECISION: the Aesthetics architecture conflict

**Raised by AgentUI 2026-07-25, founder-directed to record it. Needs a founder ruling.**

The founder asked "would you want Aesthetics to be included?" — **the system is already answering it
by default, and the default contradicts this directive.**

### What is already built

| Artefact | State |
|---|---|
| `util/AestheticsRoutes.script` | Its own API — `/api/aesthetic-treatments` |
| `ddl/migrations/031_create_aesthetics.sql` | **Its own table** |
| `aesthetic-intake / -consents / -photos / -injection-log` definitions | Four CF configs, bound to the aesthetics endpoint |
| commit `a160e8093` | *"separate the aesthetics vertical from the baseline clinic"* |
| **`encounter` in `AestheticsRoutes.script`** | **0 occurrences** |

So aesthetics currently has **its own persistence, its own API, and no encounter** — a *second
documentation architecture*, forming while this directive declares there shall be exactly one.

**This is not a criticism of the aesthetics lane.** That work predates the directive and the
"separate the vertical" commit looks like a deliberate, reasonable call at the time. The point is
that the decision is being made by momentum rather than by ruling, and it gets more expensive daily.

### Why aesthetics genuinely is different

From the fields already authored in `aesthetic-injection-log` (24 fields):

- **No encounter, no claim, often no diagnosis** — cash-pay
- The documentation unit is a **treatment series over months**, not a single encounter
- **Spatial payload** — `treatmentArea`, `injectionPlane`: locations on anatomy, not form fields
- **Product traceability** — `lotNumber`, `lotExpiry`, `manufacturer`: recall and medico-legal requirements with no family-practice analog
- **Supervision model** — `gfeId` (Good Faith Exam), `supervisingProvider`
- **Photo series** — before/after comparison as primary clinical evidence

### Why that makes it the best available test of the canonical model

Definition of done **#13** requires *multiple materially different templates without changing the
persistence architecture*. Three family-practice notes resemble each other and prove little. **An
aesthetic injection log is the genuinely different template**: if the canonical Clinical Document
can carry spatial annotations, a photo series, lot traceability and a multi-session journey with an
**optional** encounter, the model is proven general. If it cannot, that must surface *before* the
curated family-practice set is bound to it — not after.

### The ruling needed

| Option | Consequence |
|---|---|
| **A — Fold in.** Aesthetics uses the canonical Clinical Document; `encounter` becomes optional; add a treatment-series concept | One architecture holds. Costs: the document model must handle optional-encounter and series semantics from day one. |
| **B — Separate product.** Aesthetics keeps its own architecture, explicitly out of the Clinical Documentation System | Also coherent — but then "exactly one documentation architecture" must be scoped to *clinical* documentation, and the boundary written down. |
| **C — Status quo (drift)** | **Not defensible.** The directive says one architecture while a second is being built. |

**AgentUI's recommendation: A, with staged timing** — adopt aesthetics as a *design constraint now*
(so the model does not preclude optional-encounter, series, spatial and photo payloads), and *build*
it fourth, after the family-practice set proves the workflow. Design inclusion costs nothing today
and prevents a rewrite; build inclusion now would pull the model toward generality before it works
once — which is the failure mode that produced ~1,700 unusable forms.

**Business context** (from the 2026-07-25 aesthetics market research): the hybrid family + aesthetics
practice is materially underserved — pure aesthetics platforms lack insurance billing and EHRs lack
photo/consent/membership handling, leaving essentially one purpose-built competitor. PracticeForceOne
already has the insurance side, so this is an adjacency the architecture would uniquely serve rather
than a detour from family practice.

**@AgentDB** — this is the single biggest input to the canonical model's shape. **@AgentAesthetics** —
this decides whether your lane converges on the shared contract or stays a separate product.

---

## Two tensions worth resolving early

Raised by AgentUI so effort is not spent twice. Neither blocks the directive.

**1. Converting the catalog vs composing modules.** The directive asks AgentCF to convert existing
forms into templates, *and* (Future Architecture) says templates should compose reusable modules
rather than duplicate them. Most of the ~1,700 condition forms are flat 13-field, single-page
definitions that largely restate HPI / ROS / exam / assessment content. If modules become the unit
of composition, converting all 1,700 flat definitions first is work the module model would then
supersede. **Suggested resolution:** convert the curated family-practice set now, build the module
model against it, and let the remaining catalog be re-composed from modules rather than converted
one by one.

**2. "Across the catalog" vs "curated family-practice first".** The measurements say 44% of clinical
forms document work a family practice refers out, and 18% of the catalog is duplicated. Binding all
of it would carry the duplication into the new architecture. **Suggested resolution:** treat
curation as a gate before binding — a form earns a binding when a real workflow needs it. This also
satisfies "no expansion" without freezing genuinely needed work.

---

## Status

| Lane | State |
|---|---|
| AgentDB | Persistence architecture + contract — **leads; contract not yet published** |
| AgentCF | Binder pattern in progress (`8536e386f`); catalog expansion frozen |
| AgentUI | Recommendation engine **starting now** (needs no contract); open-in-context, draft/resume, sign, amend, chart view **blocked pending the contract** |

AgentUI's contract requirements are stated in `AGENTS.md` (`8ca5b6ea1`) and tracked as
`SFW-UI-1..4` on MasterSchedule: resume by (patient, encounter, formType); server-side immutable
signed payload; amendment referencing a retrievable original; patient-level chart retrieval with
per-row summary; and **server-side org scoping** — client-supplied `practiceId` cannot prove
definition-of-done #12.

Related: [Specialty Forms analysis](PracticeForceOneSpecialtyForms.html) ·
[Platform Architecture](PracticeForceOnePlatformArchitecture.html)
