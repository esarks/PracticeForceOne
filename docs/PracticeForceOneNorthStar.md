---
title: "PracticeForceOneNorthStar"
---

# PracticeForceOne — North Star Directive

> ## FOUNDER BROADCAST IX — "Build the Demonstration, Not the Components" (2026-07-31, later)
>
> **Final phase before the August clinic demonstration.** One question on every engineering
> decision: **"Does this make the August demonstration stronger?"** If no, it is not the highest
> priority. The founder will personally drive ONE complete patient journey — portal through next
> appointment — as one continuous experience; the product is measured by that journey, not by
> APIs, rules, tables, or reports.
>
> **Inside the Encounter:** the evidence that triggered each recommendation, why it was
> recommended, what action to take, one-click document creation, automatic section placement,
> completion, the recommendation disappearing, and the next step naturally appearing — "I should
> never have to wonder what to do next. The software should already know."
>
> **Staging:** the legacy staging process is FINISHED — no further investment. Complete the new
> staging environment, retire the legacy implementation; a restage yields a complete,
> demonstration-ready environment with no manual cleanup, no legacy artifacts, no ambiguity.
> (AgentARCH coordinates the transition.)
>
> **UAT catalog REPLACED:** obsolete journeys, stale demos, and legacy DLP walkthroughs are
> removed; the catalog republishes around one objective — demonstrate the Documentation Inference
> Engine (evidence → inference → recommendation → review → creation → completion → disappearance →
> continuation). "Quality is no longer measured by the number of tests. Quality is measured by the
> quality of the demonstration." Legacy menu entries that no longer represent the direction are
> removed.
>
> **Definition of success:** one journey, immediately understood — "intelligence not
> configuration, guidance not navigation, evidence not assumptions, recommendations not forms; a
> provider whose next step is always obvious because the platform has already done the thinking."

> ## FOUNDER BROADCAST VIII — "One Team. One Journey. One Documentation Inference Engine." (2026-07-31)
>
> **Roster formalized:** the running agents are DLP, CF, UI, DB, Aesthetics, ARCH — nothing may be
> addressed to MR7, MR8, JAC, or any retired agent; **AgentARCH owns coordination and disposition
> of retired-lane work** (deployment, production readiness, deployment safety, and security
> coordination are now permanently in the ARCH lane — "Coordinate. Protect the architecture. Do
> not author clinical behavior").
>
> **ONE canonical journey, portal-first:** Portal → Appointment → Pre-Visit Questionnaires →
> Evidence Collection → Arrival → Check-In → Rooming → Encounter → Inference → Recommendations →
> Coding → Charge Review → Claim → Completion → Follow-Up → Next Appointment. The engine consumes
> evidence continuously; by the time the provider opens the Encounter it has already evaluated the
> scheduling reason, patient-entered history, questionnaires, medications, allergies,
> demographics, prior documentation, and payer/org/specialty requirements. **The provider never
> begins with a blank screen.**
>
> **The Encounter is the product.** "Today I still cannot clearly see the value of the
> Documentation Inference Engine inside the Encounter. That becomes our highest priority."
> Immediately visible inside the Encounter: recommendations with evidence and why · one-click
> document creation · automatic section placement · auto-disappearance when satisfied · no
> searching, hunting, or manual document selection. Every recommendation answers: why am I seeing
> this · what evidence · what document · what happens when I complete it · why did it disappear ·
> what next.
>
> **UAT/journey RESET:** all historical journeys, stale UAT scenarios, duplicate demos, and legacy
> validation paths are deprecated; the catalog republishes around ONE objective — only journeys
> that demonstrate evidence→inference→recommendation→action→creation→completion→disappearance
> provider-visibly survive. "The Documentation Inference Engine is now the demonstration."
> Specific orders: the Patient Needs Appointment lane's primary action opens Scheduling; the
> legacy restage retires and the new staging workflow becomes the only one — the founder awaits
> the go-ahead for the first production-quality restage.
>
> **Reporting:** answer first — "how does this improve the provider's experience during the
> canonical patient journey?" No lane reports, rule counts, or database statistics. **Show, don't
> tell.**

> ## FOUNDER BROADCAST VII — "Complete the Intelligent Clinical Documentation Engine" (2026-07-30 night, consolidates VI)
>
> "The provider supplies clinical information. PracticeForceOne does the thinking." The provider
> never decides which document, consent, questionnaire, inventory record, coding task, or workflow
> step — the RECOMMENDATION ENGINE owns that decision, determined automatically from evidence.
>
> **Priorities in order:** 1 — finish the Margaret Chen journey end-to-end without manual
> intervention. 2 — provider cognition (every unnecessary click is technical debt; present exactly
> what is needed when it is needed). 3 — metadata everywhere (replace switch statements, specialty
> branches, hardcoded URLs/buttons/renderers/workflows with definitions). 4 — production stability
> ("a feature that cannot be deployed safely is unfinished"). 5 — security ("now part of product
> quality": deny-by-default, auth enforcement, DB hardening, security ratchets).
>
> **The 5-question test** (any "no" ⇒ redesign): reduces provider effort? · eliminates a manual
> decision? · removes hardcoded logic? · reusable by every specialty? · benefits another specialty
> unmodified? **Canonical-first:** ONE documentation repository, evidence store, recommendation
> engine, inventory model, workflow engine, signature engine, knowledge graph, persistence model —
> no forks, no parallel implementations, **no temporary solutions that become permanent.**
>
> Lane guidance unchanged from VI except sharpened: ARCH — "convert today's discoveries into
> tomorrow's ratchets." Philosophy: optimize the provider experience, the clinical workflow, the
> patient journey — never components, forms, or screens. Ask *"what is the provider trying to
> accomplish,"* not *"what screen are they on."*

> ## FOUNDER BROADCAST VI — "Complete the Intelligent Clinical Documentation Engine" (2026-07-30)
>
> **Mission: complete the Intelligent Clinical Documentation Engine.** The provider never hunts
> for documents, never determines which forms apply, never manually assembles evidence — the
> platform continuously INFERS documentation requirements from history, encounter context,
> diagnoses, medications, procedures, orders, prior documentation, regulatory requirements, and
> workflow state. The goal is no longer ECW parity: **the first EHR where clinicians spend LESS
> time documenting because the system already understands what the encounter requires.**
>
> **Three questions before building anything** (any "no" ⇒ not the highest priority): does this
> reduce provider effort? · does this eliminate another manual decision? · does this remove
> another branch of code?
>
> **The five immediate priorities:**
> 1. **Stabilize production deployment** — eliminate DB pool exhaustion during deploys.
> 2. Complete the Documentation Engine — recommendations always explainable, actionable,
>    completable, intelligently organized.
> 3. Provider workflow polish — rooming, encounters, recommendation presentation.
> 4. Complete canonical inventory + follow-up workflow — the whole journey without manual
>    intervention.
> 5. Keep deleting duplicate architectures, specialty forks, legacy paths, runtime branching —
>    until the platform operates almost entirely from metadata and inference.
>
> **Founder scoreboard (2026-07-30):** Clinical Platform 88 · Documentation Engine 83 · CF 92 ·
> Workflow 86 · Inference 80 · UI 82 · Architecture 91 · DB 90 · **Production Stability 70** ·
> Vision Alignment 95. Per-lane: CF finishes the Engine's metadata; DLP makes every
> recommendation actionable (zero unreachable blockers; why/what/where/when-complete); UI makes
> providers stop thinking; DB finishes canonical truth; Aesthetics proves universality
> ("could cardiology use this?"); **ARCH protects the platform — deployment instability FIRST,
> duplication removal, boundaries, canonical inventory architecture, North Star alignment. No new
> architecture may increase complexity; every release reduces it.**

> ## FOUNDER BROADCAST V — "Build the Product, Not the Components" (2026-07-29, later)
>
> Phase shift: **the architecture, documentation model, and metadata are no longer the bottleneck —
> the provider's day is.** Every decision answers ONE question: **"Does this make the provider's
> day easier?"** If no, it is not a P0. The provider never decides which document to open, never
> hunts, never wonders why the system asks, never loses work — **the system already knows.**
> Evidence → inference → recommendations → documentation → coding → revenue; everything else
> supports that flow.
>
> **Lane identities:** DLP — the clinician's SECOND BRAIN: every recommendation explainable,
> actionable, completable, dismissible, auditable; disappears when satisfied; always says WHY;
> always takes the provider to the work. CF — clinical knowledge: specialties disappear behind one
> engine; a new specialty is configuration, not programming. UI — cognition: every screen answers
> *what needs my attention / why / what next*; recommendations feel like conversation, not alerts;
> the encounter is the center. DB — truth: ONE source of truth, documentation repository,
> inventory model, evidence store, workflow history; never a specialty fork. Aesthetics — prove
> universality: never request an aesthetics-specific feature unless medicine genuinely cannot use
> it. **ARCH — protect convergence: delete duplicate systems, duplicate ownership, duplicate
> concepts; one owner per feature, one implementation per capability, one existence per concept —
> success is measured by what no longer exists.**
>
> **The 5-question design test** (any "no" ⇒ reconsider): Would a physician naturally expect this?
> · Does it remove work? · Does another specialty immediately benefit? · Is there only one
> implementation? · Does it make the Margaret Chen clinic day SHORTER?
>
> Success is no longer APIs written, rules created, tables added, metadata expanded, or components
> completed. Success: *a physician walks into a room, the system already understands the visit,
> quietly assembles everything required, and the physician simply practices medicine.* **We are
> building an EHR that THINKS.**

> ## FOUNDER BROADCAST IV — "Complete the Patient Journey" (2026-07-29)
>
> **ONE measurable objective: Margaret Chen** (seeded via `POST /admin/seed-demo-clinic-day`)
> moves through the complete 15-step journey — open encounter → evidence → inference →
> top-priority obligations (5-7 visible) → one visible action per blocking recommendation →
> automatic completion recognition → sign the canonical document → charge review → suggest codes →
> apply/approve → charges → claim → billing confirmed → follow-up → **prove nothing was copied,
> re-entered, or stored in a parallel system.** Any break in this journey is the highest-priority
> task in the owning lane. **The journey outranks every backlog.**
>
> **Eight FINAL founder rulings** (full text with the founder; register updated):
> 1. **DR-1 CONFIRMED** — CF owns the knowledge substrate; DLP owns the ONE runtime evaluator +
>    orchestration; UI consumes, never authors; DB owns canonical persistence; Aesthetics goes
>    through shared metadata. No second evaluator, rule language, or inference path — ever.
> 2. **Encounter surface** — legacy EHR encounter stays the "Open Encounter" destination until
>    EncounterCF passes the DR-15 parity bar; the destination stays DEFINITION-driven.
> 3. **Canonical store** — `clinical_form_instances` is the system of record; `encounter_notes`
>    is legacy-in-convergence (no new readers/writers; migrate with provenance after parity).
> 4. **Recommendation presentation** — encounter obligations SEPARATE from patient care gaps;
>    5-7 primary items visible, rest collapsed; high-risk longitudinal items need explicit
>    disposition rules.
> 5. **Registration Review stays** until chart sync provably auto-completes it.
> 6. **`billing.apply_member_pricing` must not execute** until idempotency + audit contract exist.
> 7. **`requirePhotograph` stays** — build the capture surface; never delete an obligation to go green.
> 8. **DB-6 Path A** — measured incremental, not a redesign.
>
> **Fleet blockers before any backlog:** the 7 completion events (consent.captured/revoked,
> inventory.lot_recorded, coding.reviewed/review_returned, signature_signed/waived — multi-event
> completion supported, tenant-scoped, idempotent, auditable, verified DEPLOYED); recommendation
> reachability (target: **zero unreachable blocking recommendations**, ratchet wired into the
> gate); evidence breadth through the SHARED contract (vitals, labs, meds, allergies, diagnoses,
> problems, questionnaires, procedures, prior encounters, consent/document state, photos/body
> maps, inventory, context); CF publishes the recommendation→encounter-section map and UI
> navigates with it. **Mandatory 6-part reporting format** for every agent report: journey work
> done · deployed proof · first remaining break · owner+dependency · duplication check · single
> next action.

> ## FOUNDER BROADCAST III — "Stop Optimizing Backlogs. Optimize the Platform." (2026-07-28)
>
> **Backlogs are now SECONDARY. The platform is primary.** Do not ask "what is next on my task
> list?" — ask **"what removes the largest obstacle to one complete patient journey?"** If the
> answer is not the first item on your list, work the larger obstacle.
>
> **The August demonstration is redefined:** not a feature demo — **proof that an actual clinic
> could operate on PracticeForceOne.** Success: a patient is scheduled → checks in → clinical
> evidence gathered → documentation inferred → provider completes the encounter → coding suggested
> → charges generated → billing proceeds → follow-up scheduled. Nothing entered twice, nothing
> copied, no hunting for the next step. **If this journey breaks, that break becomes the highest
> priority in the system.**
>
> **Priority order (effective immediately):**
> 1. Anything preventing a complete patient-day scenario (breaks in scheduling → encounter →
>    documentation → coding → billing).
> 2. Anything preventing intelligent documentation from deciding automatically (evidence,
>    inference, recommendations, documentation, workflow, completion).
> 3. Anything eliminating duplicate implementations — every duplicate removed permanently
>    increases development velocity.
> 4. Provider experience — remove every unnecessary click, search, screen, decision, relentlessly.
> 5. Everything else.
>
> **Per-lane expectations:** DLP — every recommendation gets exactly ONE executable completion
> path, then think whole-encounter lifecycle. CF — keep removing hardcoded clinical behavior; the
> future is metadata. UI — every screen makes the next clinical decision obvious. DB — close the
> documentation↔coding↔billing↔canonical-model seams. Aesthetics — prove aesthetics is
> configuration, and anything only aesthetics needs today is something another specialty needs
> tomorrow. **ARCH — keep aggressively eliminating duplication and make ownership decisions
> QUICKLY: "architectural uncertainty is now more expensive than architectural mistakes."**
>
> **Universal pre-work test:** does this move one patient further through the complete clinical
> journey? If not — will it permanently simplify the platform for every future specialty? If
> neither is yes, it is probably not today's highest-value task.
>
> *One patient. One encounter. One clinical story. One platform.*

> ## FOUNDER BROADCAST II — "Every Agent Reads. Every Agent Executes." (2026-07-27, later)
>
> **Success is measured by ONE thing:** whether a clinic can complete an **entire patient day**
> without disconnected systems, duplicate implementations, or provider confusion — NOT by tasks,
> commits, or green builds. Do not optimize your lane; optimize the patient journey
> (Appointment → Registration → Check-in → Rooming → Encounter → Documentation → Orders → Coding →
> Claims → ERA → Payment → Follow-up → Analytics) with **never** a point where information is
> re-entered, copied, searched for, or translated.
>
> **The 5 pre-code questions** (any "more complex" answer ⇒ redesign): strengthens the canonical
> model? · eliminates rather than introduces duplication? · reduces provider effort? · usable by
> every specialty unmodified? · if every module adopted this approach, simpler or more complex?
>
> **Platform Rules — ONE of each:** clinical model · evidence model · inference engine ·
> recommendation engine · documentation engine · workflow engine · canonical persistence · coding
> pipeline · patient story. Another implementation discovered ⇒ STOP, route through AgentARCH
> before extending it.
>
> **Current Platform Objectives:** (1) one fully integrated patient-day scenario, scheduling
> through billing; (2) every documentation recommendation has exactly one executable action and one
> completion path; (3) **eliminate every remaining duplicate identified by AgentARCH** — the live
> checklist is the [Duplication Register](PracticeForceOneDuplicationRegister.html)'s Objective-3 section;
> (4) expand documentation intelligence through reusable metadata, never specialty code; (5) fewer
> clicks, less searching, less deciding, everywhere; (6) every specialty = configuration on one
> engine.
>
> **Definition of Done:** compiling is not done — done is a **measured platform improvement**, and
> the best implementation is the one every other specialty and future capability reuses unchanged.
> *Build one platform. Build it once. Build it correctly. Everything else is technical debt.*

> ## FOUNDER BROADCAST — North Star Alignment (2026-07-27, binds all agents)
>
> **The one-question test for every decision:** *"Does this make PracticeForceOne feel like one
> integrated clinical operating system, or another collection of independent features?"* If the
> latter — stop and redesign. The provider thinks about the patient; the software thinks about
> everything else.
>
> Operative points (full text with the founder):
> 1. **One canonical pipeline** — Evidence → Inference → Documentation → Workflow → Coding →
>    Billing → Analytics → Follow-up. No alternate documentation paths, specialty workflows,
>    duplicate engines, or second document repositories. Everything feeds the same clinical spine.
> 2. **Duplication protocol is now FORMAL:** on discovering another workflow/rules engine/
>    recommendation engine/document store/persistence path/inference engine/redundant UI —
>    **STOP. Document it. Bring it through AgentARCH** (a row in the
>    [Duplication Register](PracticeForceOneDuplicationRegister.html)). One implementation always beats two.
> 3. **Metadata before code**, always: configuration over switches, definitions over specialty
>    logic, inference over hardcoding. Every feature that becomes metadata permanently reduces cost.
> 4. **Think like an entire clinic** — the whole patient journey (scheduling → portal →
>    registration → rooming → provider → documentation → orders → coding → claims → ERA →
>    collections → quality → follow-up) as ONE continuous experience.
> 5. **Build for every specialty**: ask "how does medicine work?", then prove each specialty is
>    merely configuration.
> 6. **Minimize provider effort** — never hunt, never remember; every unnecessary click is
>    technical debt.
> 7. **Build trust**: every recommendation answers *why*, cites evidence, is traceable and
>    reproducible.
> 8. **Clinical data is sacred**: no duplicated patient information, no lost provenance, no
>    weakened auditing, no generated-CRUD bypass, no table-per-form designs — canonical entities only.
> 9. **Provider experience matters**: minimal clicks/scrolling, keyboard-first, intelligent
>    defaults, immediate responsiveness — the software disappears behind the workflow.
> 10. **The August demonstration demonstrates CONFIDENCE, not features:** one patient, one complete
>     encounter, one coherent workflow, one clinical story, no disconnected experiences — the
>     observer believes *"this clinic could actually run here."*
>
> **Success:** the clinician walks in thinking only about the patient while the platform quietly
> understands the encounter, determines documentation, guides workflow, captures structured
> evidence, satisfies regulation, produces billing artifacts, and leaves a rich record — without
> the clinician ever wondering which form, screen, or workflow comes next.
> **Build one platform. Build it once. Build it correctly.**

## Clinical Documentation Intelligence Initiative

**TOP-LEVEL GOVERNING DIRECTIVE** — founder, 2026-07-26 (revision 2). Effective immediately.
Binds **AgentDLP, AgentCF, AgentUI, AgentDB, AgentAesthetics, AgentARCH**. Supersedes the
2026-07-26 revision 1 of this page and sits above
[Documentation Intelligence](PracticeForceOneDocumentationIntelligence.html) and
[Clinical Documentation System](PracticeForceOneClinicalDocumentationSystem.html), which become its
documentation and persistence layers.

> **All six agents get the exact same North Star; each gets a different area of responsibility.**
> Founder, on why: *"Right now, I think your greatest risk is not missing features — it's allowing
> six agents to independently invent six documentation systems."*

**You are no longer building forms.** You are building an intelligent clinical documentation
platform. Every architectural decision must move PracticeForceOne toward a future where providers
never search for documentation. Documentation is **inferred** from patient evidence, clinical
context, specialty guidelines, quality measures, workflow and physician intent.

**The documentation engine — not the provider — determines what documentation is required. The
provider validates, edits and signs. Not builds.**

## Core principle

The Clinical Documentation Engine is the **center** of PracticeForceOne. Everything else feeds it
or consumes it.

```
Patient → Clinical Evidence → Inference Engine → Clinical Documentation Engine
        → Canonical Clinical Document → Rendering Engine → Coding → RCM
        → Analytics → Quality Reporting → FHIR / Interoperability → AI
```

**No component may bypass this architecture.**

## Canonical clinical document

Assume every specialty note is merely another manifestation of **one** canonical clinical document.

**Never build:** specialty-specific persistence · specialty-specific APIs · specialty-specific
storage · specialty-specific workflow.

**Instead build:** `Definition → Evidence → Inference → Sections → Rendering → Persistence`.

## Evidence first

The engine infers documentation from: patient demographics · problems · diagnoses · history ·
orders · labs · vitals · medications · allergies · procedures · questionnaires · images · devices ·
scheduling context · encounter type · provider specialty · quality measures · risk adjustment ·
care gaps · clinical guidelines · previous encounters.

**A provider should never have to hunt through hundreds or thousands of forms.**

## Knowledge layer

**Medical knowledge must never live inside UI components.** Separate: clinical knowledge ·
inference rules · rendering rules · persistence rules · workflow rules · terminology · decision
support · quality measures · coding rules.

**Clinical forms become renderings of structured knowledge.**

## AI first

Every new feature must ask: can AI **infer** this · **recommend** this · **complete** this ·
**summarize** this · **explain** this · **validate** this · **detect missing evidence** ·
**generate this documentation automatically**?

**If yes — build the architecture now.**

## Provider experience

The provider should experience:

```
Open chart → Review automatically assembled documentation → Modify if necessary → Sign
```

**Not:** choose specialty · choose form · choose template · choose sections · choose checklists ·
choose workflows.

## Agent responsibilities

| Lane | Owns |
|---|---|
| **AgentDLP** | **The Documentation Intelligence Layer** — Clinical Documentation Engine, inference orchestration, documentation recommendations, document assembly, evidence routing, dynamic section generation, encounter synthesis, canonical document generation, documentation lifecycle, AI documentation support. **Objective: eliminate provider documentation decisions wherever safely possible.** |
| **AgentCF** | **The Clinical Form Definition Platform** — canonical document definitions, metadata, specialty definitions, reusable sections, reusable controls, terminology, field catalog, validation, documentation metadata, inheritance. **Never think in terms of forms — think in reusable clinical knowledge.** |
| **AgentUI** | **Provider cognition.** Reduce clicks, scrolling, searching. Surface: recommended documentation · missing documentation · recommended orders · recommended diagnoses · recommended quality measures · suggested coding · suggested follow-up · suggested referrals. **Documentation should appear naturally from workflow.** |
| **AgentDB** | **Canonical persistence.** No specialty tables, schemas or duplicated persistence. One canonical documentation model supporting versioning, auditing, clinical evidence, FHIR mapping, analytics, AI retrieval, knowledge-graph integration. **Future-proof for specialties that do not yet exist.** |
| **AgentAesthetics** | **Do not build a separate aesthetics documentation system.** Aesthetics must *prove the canonical engine is universal*. Anything aesthetics needs should improve the engine for every specialty. **One documentation engine, one persistence layer, one inference engine, many specialties.** |
| **AgentARCH** | **Architectural integrity.** Reject duplicate concepts · persistence · APIs · documentation · workflows · inference · metadata. **Challenge any implementation that creates a second way of solving the same problem.** |

## Long-term vision

PracticeForceOne is **not** attempting to become another configurable EHR. It is becoming an
**intelligent clinical operating system**.

The long-term competitive advantage is not thousands of forms. It is a system that understands
clinical evidence well enough to **determine what documentation should exist before the provider
asks for it.** Every commit should move the platform closer to that vision.

---

## ⚠ Ownership conflict this revision creates — needs a founder ruling

Raised by AgentUI, 2026-07-26, because it is exactly the "two ways to solve the same problem" risk
the directive exists to prevent.

**Inference and recommendation have now been assigned to two different lanes by two governing
documents:**

| Document | Owner of inference / recommendation |
|---|---|
| [Documentation Intelligence](PracticeForceOneDocumentationIntelligence.html) (2026-07-26 rev 1) | **AgentCF** — "Evidence Engine, Rule Engine, Template Composer, **Recommendation Engine**, Inference". That directive explicitly *moved* Recommendation **from AgentUI to AgentCF**. |
| **This revision** | **AgentDLP** — "inference orchestration, documentation recommendations, document assembly, evidence routing". AgentCF is narrowed to *definitions, metadata, sections, terminology, validation, inheritance*. |

Both readings are defensible — AgentDLP orchestrates at runtime, AgentCF authors the rules the
orchestrator executes — but **left unstated, both lanes will build an inference engine**, which is
the precise failure mode this directive names. **Recommended resolution:** AgentCF owns the *rule
and definition substrate* (what CAN be inferred, expressed as metadata); AgentDLP owns the *runtime
engine* that evaluates it against live evidence and assembles the document. One store, one
evaluator. **Awaiting founder confirmation.**

> **AgentARCH, same day: an INTERIM RULING adopting exactly this seam is now active** (issued under
> the v2 mandate so neither lane stalls and neither builds a second evaluator) — full text and the
> fleet-wide seam inventory live in the **[Duplication Register](PracticeForceOneDuplicationRegister.html)**
> (DR-1). ⛔ Founder: confirm or override in one line.

## AgentUI position under revision 2 (2026-07-26)

**Lane restated:** provider cognition. Surface recommendations; never author them. Under the
ownership split above, AgentUI **consumes** what AgentDLP's engine emits and AgentCF's metadata
defines — and must not grow a third inference path, however tempting a "quick client-side rule"
looks.

**What now fails harder than it did under revision 1.** The provider-experience section is no
longer a test to score against — it is directive text: *"Not: choose specialty · choose form ·
choose template · choose sections."* That is a direct prohibition on:

- **the form launcher** — its entire purpose is "which form would you like?"
- **the 79 generated specialty launch boards** — navigation through a form library
- **any specialty picker** on the clinical surface

These remain live today. They are **transitional surfaces to retire**, not assets, and should be
removed as the recommendation surface replaces them — not maintained in parallel, which would be
the two-systems failure again.

**Interim scaffolding to retire deliberately:** the context→template mapping AgentUI stores in
`engine_configs` is a *static map, not inference*. It is scaffolding to be **absorbed by the engine
AgentDLP now owns**, and is recorded here so it is retired on purpose rather than surviving by
inertia.

**In-flight work that is orthogonal to this directive:** the provisional patient chart and portal
intake (registration/check-in parity, chart write-through). This is **patient intake, not provider
cognition** — it does not advance the documentation engine. It continues because the founder
directed it explicitly and gated portal testing on it (2026-07-26), and it does feed the engine
*evidence* (demographics, history, consents, medications) which the inference layer will need. But
it should not be mistaken for progress against this North Star.

### ⛔ Deploy blocked fleet-wide, 2026-07-26 (not AgentUI)

`util/ClinicalEvidenceRoutes.script` is **uncommitted**, **is registered in the router**, and its
two entities (`CLINICAL_EVIDENCE`, `DOCUMENTATION_RECOMMENDATION`) are **absent from
`data/ClaimsProcessingDdl.xml`** — so the in-cloud `generate` cannot create their data classes and
`compile-router` then fails. Every lane's deploy fails until the DDL entries land or the
registration is pulled. `bin/phase0.ps1` is red locally for the same reason (**0 of 560** — it
compiles as one batch). Raised in `AGENTS.md`.

**Trap recorded while chasing it:** running `phase0.ps1` locally rewrites ~82 generated
`data/*Crud.script` files with *different semantics* — `getIDPropertyValue().getValueString()`
becomes `.toString()`. Do **not** commit that drift; `git checkout -- data/` after a local phase0.

## Already-materialising instance of the stated risk

The founder's concern is not hypothetical — a second documentation architecture is already forming
and was escalated before this directive landed: the **Aesthetics documentation system** (own table,
own API, zero `encounter` references). See
[Clinical Documentation System](PracticeForceOneClinicalDocumentationSystem.html). Under this revision
AgentAesthetics is explicitly told *not* to build one, so that escalation now has an answer —
**it must fold into the canonical engine.**

---

## Appendix — measured findings carried forward from revision 1 (2026-07-26)

These are facts, not directive text, so they survive the revision. The seven-question Final
Architectural Test from revision 1 has been superseded by the Core Principle + AI-first questions
above, but the audit it produced still stands and still condemns the same work.

### AgentUI: the revision-1 test applied to work in flight

Run honestly, including where it condemns my own recent work. Eleven commits are built and
undeployed; this is what the test says about them.

### Passes

| Work | Why it holds |
|---|---|
| **String-choices fix** (74 select/radio fields across 16 of 60 definitions rendered blank) | Fixed once in the runtime, not per definition — Q1/Q2/Q5. Evidence capture is impossible when inputs are broken. |
| **Practice scoping on form definitions** | Q1/Q4 — the last unscoped configurable store; per-practice rules and templates are impossible without it. |
| **One intake form** (register + check-in unified; 57 of 63 fields were already identical) | Q1/Q5/Q6 — differences expressed as `whenAnonymous`/`whenAuthenticated` metadata instead of two files that drifted twice in a day. |
| **`slots` field type** | Q2 — a reusable runtime capability, not a scheduling screen. |
| **Legacy encounter retired** | Q7 — one documentation surface, not two. |
| **Board date "Today" vs specific** | Q6 — removes an invisible default that silently pinned the board. |

### Fails the test — and I built or maintained them today

| Work | Which question it fails |
|---|---|
| **79 generated specialty launch boards** | **Q3 and Q7.** Boards are *navigation through a form library* — precisely what "replace navigation with recommendations" retires. I spent effort today stamping `noPatientCarry` on all 79 and de-duplicating them. Under this directive they are a transitional surface, not an asset. |
| **The form launcher** | **Q3/Q7.** Its entire purpose is "which form would you like?" — Principle 1 says never ask. |
| **Menu entries** (Clear DB Connections, Forms Editor bridge) | **Q6/Q7 partially.** Legitimate operator tooling, but "replace menus with intelligent guidance" means the *clinical* surface should not grow menu entries. Recorded as tension, not resolved. |
| **Interim context→template mapping in `engine_configs`** | **Q3.** A static mapping is not inference. It is scaffolding to be **absorbed by the Rule Engine**, and is recorded so it is retired deliberately. |

### The honest gap

The directive assumes a platform that infers. Measured on live build 1964:

- **0% of sampled clinical forms can persist anything** — no evidence can be recorded, so nothing can
  be inferred from it
- **No Evidence, Inference, Recommendation or Rule entity exists** — Principle 5's engine has no
  substrate
- **Every recommendation must cite its evidence** (AI readiness) — this requires the `Inference` and
  `Evidence` entities from day one, not retrofitted, or explanations become guesses
- ~~**⛔ DB-11**: JAC regeneration cannot run on the build machine, so new canonical entities cannot
  reach the generated data layer. This blocks AgentDB's canonical model, and therefore Principles 4–5~~
  **— WRONG, corrected 2026-07-26 (see below). It does not block the canonical model.**
- ~~**11 commits built, nothing deployed**~~ — cleared; shipped in builds 1974/1975

### DB-11 correction — AgentUI, 2026-07-26

I wrote the line above and it was wrong, so I am striking it rather than quietly editing it.

The cloud pipeline runs an **in-cloud `generate` step** (~18 min) on every deploy, so the deployed
data layer is regenerated from `data/ClaimsProcessingDdl.xml`. **New columns do reach production.**
Proof: `CHART_STATUS` exists in the DDL XML and in the *live* generated INSERT, while the committed
`data/PATIENTSCrud.script` has zero references to it.

What is genuinely blocked is **local compile** against a new column — so a route calling
`setCHART_STATUS(...)` cannot be built on the dev machine until the generated tree catches up. That
makes canonical-entity work *two-phase* (migration + DDL XML ship first, setters second), not
impossible. **Lanes that parked canonical-model work on DB-11 should re-plan.** Full detail:
[Documentation Intelligence](PracticeForceOneDocumentationIntelligence.html).

**@AgentARCH** — one item still needs the architectural authority this directive creates: the
[Aesthetics architecture conflict](PracticeForceOneClinicalDocumentationSystem.html) (a second
documentation architecture forming: own table, own API, zero `encounter` references). DB-11 is
**withdrawn** as an architectural blocker and downgraded to a local-toolchain nuisance.

### Portal lane — measured state, 2026-07-26 (AgentUI)

Against live build 1974/1975, so the North Star is scored on facts:

| Claim | Verified state |
|---|---|
| **One CF form for registration + check-in** | **True and live.** Both entry points request `portal_intake_cf`; the register/check-in difference is `whenAnonymous`/`whenAuthenticated` metadata, not two files. Q1/Q5/Q6 pass. |
| **…and it is per-practice configurable** | **Now yes — live.** `portal_intake_cf` seeded into `DYNAMIC_FORMS_CONFIGURATION` practice-scoped to Bay Area Cardiology; `GET /api/portal/form-definition?formType=portal_intake_cf&practiceId=…` returns **HTTP 200** from the Definition Repository (was 404 → seed fallback). Data change, so it took effect without a deploy. **Still missing: a `stage` column** (preprod/prod) — AgentCF + AgentDB own that half. |
| **Portal creates a provisional chart at registration** | **Built, awaiting deploy (PROV-2/3/4).** The chart is now written inside the registration transaction as `chart_status='provisional'`, `chart_source='patient_portal'`; staff review **promotes** it to `active` with reviewer provenance instead of creating a chart; and PROV-4 landed **first** so no unreviewed chart can appear in a clinical list, even briefly. One definition of "provisional" lives in `util/ChartScope.script`. All compile-verified; **not live** — deploy is blocked fleet-wide (see below). |
| **Check-in updates the chart** | **Built, awaiting deploy (PROV-5).** Check-in now writes through to the chart using the *existing* `EntityFieldBinder` + `PatientEntityFields.hubFields()` binder rather than a second field mapping. Per-field guarded, so a check-in can only ADD what the patient answered, never blank a field by omitting it. Best-effort: `dynamic_forms` stays the system of record, because failing a check-in would strand a patient in the waiting room. |

**The pattern underneath all four:** the portal reliably captures answers into `dynamic_forms`, and
only the **staff-review merge** promotes them onto the chart. Registration goes through that merge,
so it lands; check-in has no merge, so it does not. This is a real instance of Q3 failing —
evidence is captured but nothing infers from it, and a human retypes.

Related: [Documentation Intelligence](PracticeForceOneDocumentationIntelligence.html) ·
[Clinical Documentation System](PracticeForceOneClinicalDocumentationSystem.html) ·
[Specialty Forms analysis](PracticeForceOneSpecialtyForms.html) ·
[Platform Architecture](PracticeForceOnePlatformArchitecture.html)
