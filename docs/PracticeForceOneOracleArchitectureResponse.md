---
title: "PracticeForceOneOracleArchitectureResponse"
---

# Oracle's Next-Generation EHR vs PracticeForceOne — Architecture Response

**Status: DISCUSSION — nothing proposed here is approved or built.** · **Opened by AgentFuture, 2026-08-09**
**All lanes are invited to disagree in place.** Add your section; do not overwrite mine.
**Related:** [PracticeForceOnePlatformArchitecture](PracticeForceOnePlatformArchitecture.html) · [PracticeForceOneGenericKanbanPlan](PracticeForceOneGenericKanbanPlan.html)

Every current-state claim below was **measured in the code this week**, not read from our own
documentation — which has been wrong twice recently about this exact area.

---

## A. Oracle architecture assessment — substance vs marketing

**Substance (real architectural commitments):**
- **Semantic understanding of unstructured clinical content.** This is the genuinely hard part and
  Oracle means it. It requires model infrastructure and corpora we do not have.
- **Context shared across coordinated agents** rather than per-feature context assembly.
- **Human-in-the-loop on consequential actions** — an explicit authorization boundary.
- **Open agent architecture / customer-defined agents** — an extension model, not just features.
- **The interaction inversion:** from `screen → menu → form → save` to
  `context → intelligence → recommendation → action → authorization`. This is the real claim.

**Marketing (or at least unproven):**
- "AI-first" as an architecture statement. Every EHR will say this within a year.
- Conversational/voice as a *primary* interaction model for clinical work. Voice is excellent for
  dictation and poor for consequential state changes, which need visible confirmation.
- "Agents" as a specific architecture rather than a packaging of capabilities. Oracle needs many
  agents because it has an enormous surface; agent count is not a maturity signal.

**The one thing we should take seriously and not dismiss:** the interaction inversion. It is
correct, and it is a UX consequence of an architecture, not a feature.

---

## B. PFO current-state mapping (measured)

| Oracle capability | PFO equivalent | Maturity | Honest difference |
|---|---|---|---|
| Cloud-native | Cloud Run + Cloud SQL, hermetic gated deploy | **EXISTS** | Comparable in kind, far smaller in scale |
| Semantic clinical understanding | Deterministic rules over **structured** evidence (one CDIE evaluator, 131 catalogue entries) | **PARTIAL — and different in kind** | **Oracle is genuinely ahead.** We do not comprehend unstructured text |
| Context-aware UX | Per-surface context assembly | **PARTIAL / fragmented** | **No canonical context service** — see E1 |
| AI patient summaries | — | **MISSING** | Needs a context service first |
| Longitudinal timeline | `SOURCE_RECORD_EVENTS` (event ledger with prior/new state) | **ARCHITECTURALLY ENABLED** | Substrate exists; **no projection, no surface** |
| Conversational/voice | — | **MISSING** | Deliberately; see M |
| AI-assisted documentation | Documentation Inference Engine, live | **EXISTS** | Rules-driven rather than model-driven |
| AI-assisted coding | Charge review + coding workflow; coding assist gated off | **PARTIAL** | Blocked on AMA licensing + BAA, not on architecture |
| AI recommendations | Documentation recommendations with lifecycle | **EXISTS** | Ours are explainable **by construction** — see C1 |
| Agents sharing context | One evaluator; no agent framework | **MISSING** | May be **NOT DESIRABLE** — see I |
| Suggested actions queued | Action Center + Kanban + worklists | **PARTIAL, fragmented** | Three surfaces, one idea — see J |
| Human-in-the-loop | Accept / dismiss / decline with reason; sign never blocked | **EXISTS** | Genuinely strong |
| "Needs Attention" | Kanban lanes, Action Center, dashboards | **PARTIAL** | We make users find work in three places |
| Personalized workflow | Definitions per practice × stage, role bands | **EXISTS** | Practice-level yes; person-level thin |
| Open/customer-defined agents | Definition Repository (`engine_configs`) + `operations` registry | **ARCHITECTURALLY ENABLED** | We have the extension seam without calling it agents |
| Third-party model integration | — | **MISSING** | Needs the action contract first |
| Integrated clinical + business | CDIE + Kanban RCM + payments + portal, one platform | **EXISTS** | **This is our real asymmetry** — see C2 |
| Portal AI | Portal exists; no AI | **MISSING** | Low priority |
| RCM integration | Claims, scrub, denials, appeals, ERA, payments | **EXISTS** | Oracle treats this as downstream; for us it is core |

---

## C. PFO advantages — defensible only

1. **Explainability is structural, not aspirational.** A recommendation in PFO cannot exist without
   a reason, the chart evidence it rests on, the rule that produced it, a consequence if ignored,
   and a work state. Oracle *promises* explainable AI; we *cannot emit an unexplained
   recommendation* because the contract does not permit one. That is a genuine architectural lead,
   and it came from a product rule ("a recommendation that cannot be completed is worse than none"),
   not from an AI decision.
2. **Intelligence already spans clinical + administrative + financial.** Oracle is redefining the
   clinician's EHR. Our rules, work queues and money already live in one platform with one audit
   trail. **A clinical event causing an administrative consequence is a one-platform problem for us
   and an integration problem for Oracle.**
3. **Deterministic execution behind reasoning, already enforced.** `operations/default` is a
   registry of named operations (endpoint, inputs, produces, completesStep, emitsEvent) and
   definitions are forbidden from carrying executable code. **We built "reason vs execute" before
   anyone framed it that way.**
4. **Definition-driven multi-tenancy with stages.** Per practice × stage, exact reads with no
   silent inheritance, copy and promote. Configuration is a first-class product, not an admin panel.
5. **Immutable audit at the database**, with field-level before/after and change sets.
6. **One evaluator for every specialty.** No specialty forks — proven across medical and aesthetics.

## D. Oracle advantages — real ones

1. **Semantic comprehension of unstructured text.** We have nothing comparable and should not
   pretend otherwise.
2. **Model infrastructure, safety tooling and evaluation practice** at a scale we cannot match.
3. **Voice and ambient capture maturity.**
4. **An extension ecosystem** — third parties will build for Oracle.
5. **Trust and procurement gravity.** For many buyers "nobody was fired for buying Oracle" is the
   whole evaluation.
6. **Longitudinal breadth** across care settings we deliberately do not serve.

---

## E. Architectural gaps — what the vision actually requires

**E1. There is no canonical patient context.** Measured: the Kanban board's cards are rebuilt
**client-side** from six hard-coded entity types while a **separate server projection** emits its
own; the chart bundle is a third assembly; CDIE gathers its own evidence. **Four consumers, four
context assemblies.** Everything in §7–§9 of the directive requires one governed context service.
This is the single largest gap and it is ours, not Oracle's, to admit.

**E2. There is no durable action object.** Board cards are **derived** on every render — nothing
records that a card entered a lane, who owns it, or how long it has waited. No
`workflow_instance` table exists. **Derived-truth was the right call for fidelity and the wrong call
for accountability**, and it means §12's Action Graph has nowhere to live today.

**E3. No timeline projection.** `SOURCE_RECORD_EVENTS` already carries `SOURCE_TYPE`, `SOURCE_ID`,
`PRIOR_STATE`, `NEW_STATE` — the substrate is there and unused as a narrative surface.

**E4. Attention is fragmented** across Kanban, Action Center, worklists and dashboards.

**E5. Transition legality is enforced in the browser.** Fine for an internal board; disqualifying
for an action model where authorization is the point.

**E6. Known drift that contradicts "one context":** two card producers, four hard-coded copies of
lane order, and a definition-driven lane-assignment engine that is wired at five call sites and
**cannot fire** because the rules body is the wrong JSON shape.

---

## F. Revised North Star (proposed)

> **PracticeForceOne is an intelligent ambulatory practice operating platform. It maintains one
> governed understanding of each patient and each practice; continuously determines what needs
> human attention; explains why; proposes the next appropriate action; and executes authorized
> actions deterministically across clinical, administrative and financial work — leaving a complete
> record of what happened and why.**

**Improvement on the candidate:** the draft said "understands the patient, the encounter, and the
business workflow." *Understanding* is the word Oracle owns and the one we are weakest on. Our
claim should lead with **one governed understanding** (singular, auditable) and **explains why**,
because those are the parts we can actually defend today.

---

## G. Architectural principles (ten)

1. **One context.** A patient's state is assembled once, governed, and consumed by rules, surfaces
   and agents alike. Competing context stores are a defect.
2. **Reason and execute are different layers.** Intelligence proposes; domain services execute.
   Nothing that reasons may write authoritative clinical or financial data directly.
3. **No unexplained recommendation.** Evidence, rule, timestamp, consequence and required
   authorization are mandatory attributes, not optional metadata.
4. **Deterministic at execution.** The same authorized action produces the same result, whatever
   proposed it.
5. **Derive truth; persist judgment.** Business state is derived from the record; ownership,
   assignment, timing and human decisions are persisted because nothing else holds them.
6. **Definitions, not forks.** Specialty and practice differences are configuration.
7. **Isolation by construction.** Practice scope comes from storage and identity, not from
   remembering to filter.
8. **Every consequential act is auditable and reversible-or-refused.**
9. **Attention is the interface.** Users manage decisions and exceptions, not navigation.
10. **Every completed action changes context; every material context change invites re-evaluation.**

---

## H. Target architecture (layers)

```text
Canonical Record (JAC-generated CRUD spine + governed extensions)
        ↓
Patient / Practice Context Service      ← E1: does not exist yet
        ↓
Reasoning: deterministic rules · inference · (later) model-assisted extraction
        ↓
Action Contract  — proposed action + evidence + authorization requirement
        ↓
Action Store (durable: owner · assigned · due · state · supersession)  ← E2: does not exist yet
        ↓
Attention Surfaces (Kanban · Action Center · worklists — VIEWS, not stores)
        ↓
Human authorization (policy-driven; some acts auto-executable)
        ↓
Deterministic Services (domain APIs, PaymentService, Workflow Engine)
        ↓
Audit + Events (SOURCE_RECORD_EVENTS + immutable audit_log)
        ↓
Context updated → re-evaluation
```

**Load-bearing point: the two missing boxes are the two we are already arguing about elsewhere.**
The Generic Workflow instance model and the context service are not Kanban features — they are the
substrate this entire vision needs. That reframes a pending ARCH ruling as strategically decisive.

---

## I. Action / agent model — and a challenge

**Challenge to the premise: "agents" is probably the wrong abstraction for PFO, and adopting it
would be architecture theater.** Oracle needs many agents because it has an enormous surface and
many teams. We have one evaluator that already serves every specialty. Splitting it into eleven
named agents would multiply coordination cost and create exactly the duplication our own rules
forbid.

**What we actually need is the Action Contract, not agents.** Whatever reasons — a rule, an
inference pass, a future model, or a human — emits the same structured object: actor, patient,
practice, context, proposed action, evidence, reason, authorization requirement, validation,
executable service, reversibility, expected state transition.

Then "agents" becomes a *packaging* decision we can make later, cheaply, without re-architecting.
**If a capability cannot express itself as an Action Contract, it does not belong in the platform.**

**On models:** use them at the **edges** — extracting structure from unstructured input, and
summarizing for humans — and keep the **decision layer deterministic**. This is not timidity; it is
the only posture that preserves our explainability advantage. Racing Oracle on semantic
comprehension is a race we lose; making semantic output *safe and accountable* is a race we can win.

---

## J. Unified attention model

**Kanban, Action Center and worklists should become views over one work/action model, not three
stores.** They differ legitimately in shape — Kanban is spatial and shows flow, the Action Center is
a checklist inside an encounter, a worklist is a table — and those differences are worth keeping.
What is not worth keeping is three answers to "what needs my attention?"

**Test for the design:** the same overdue item must be able to appear in a lane, in an encounter
panel, and in a biller's queue, and completing it once must clear it everywhere. Today it cannot,
because there is no shared object — only three derivations.

---

## K. 12–24 month vision (direction, not backlog)

- **Near:** one context service; a durable action object; one attention model behind three views;
  the timeline projection over events we already store.
- **Middle:** the Action Contract as the only way anything proposes work; model-assisted extraction
  at the edges with deterministic decisions; closed loops within a domain (order → result → review).
- **Later:** closed loops across domains (clinical → financial → outreach → clinical), and a
  practice-level attention model for owners rather than only role queues.

---

## L. Immediate implications for work in flight

- **Consistent and strategically load-bearing:** the Generic Workflow instance model and the
  `laneRules` conversion. Both are prerequisites for this vision, not Kanban polish.
- **Consistent:** payments provider abstraction, the Patient ID program, audit expansion, Definition
  Repository work.
- **Tension to resolve, not a violation:** the Kanban's derived-card model. Derivation should remain
  the source of *business* truth; the action object must hold *judgment* — owner, timing, decisions.
- **Inconsistent with the vision if left alone:** two card producers, four lane-order copies,
  browser-only transition legality. Each is small; together they say "no single context."

---

## M. Do-not-build

Voice for its own sake · a generic chatbot · autonomous clinical decisions · any model with write
access to the chart · a second context store · an agent framework adopted for terminology · hospital
and acute-care functionality · AI features not attached to a workflow consequence · black-box
recommendations of any kind · duplicate AI infrastructure alongside the existing rules engine.

---

## The two questions, answered directly

**If we had known Oracle would announce this, what would we change — and what did we already get
right?**

**We would have built the context service and the action object before building surfaces.** We built
Kanban, the Action Center and worklists first, and each one grew its own context assembly. That is
now the main thing standing between us and the vision, and it is self-inflicted.

**We would be surprised how much we already got right:** explainability as a hard contract; the
`operations` registry drawing the reason/execute line years before it was fashionable;
definitions-not-code with per-practice stages; immutable audit; one evaluator across specialties;
and evidence-driven completion (`completeWhen.evidence`) rather than status columns someone
remembered to set.

**What can PFO become that Oracle's EHR is not?**

**The operating system of the practice rather than the clinician's assistant.** Oracle is making the
EHR understand the clinician. The larger opportunity is a platform where a clinical event creates
administrative work, an administrative failure surfaces as a clinical risk, a financial event
generates outreach, and the system continuously reports what still needs a human — across the whole
lifecycle, with one audit trail.

**Oracle's loop ends at execution. Ours can close** — because we own claims, ERA, denials, payments
and recall, which Oracle treats as downstream integrations. **But we cannot honestly claim it yet:
closing the loop requires durable actions and one context, and today we have neither.** That, not
semantic understanding, is the gap that decides whether this vision is real.

---

## Maturity — brutally

| Level | State |
|---|---|
| 1 System of Record | **SOLID** |
| 2 System of Workflow | **YES — but workflow is derived, not instantiated** |
| 3 System of Intelligence | **PARTIAL** — real, deterministic, explainable; narrow (documentation-centric) and context is fragmented |
| 4 System of Action | **EARLY PARTIAL** — operations registry and one-tap completions exist; no durable action object, no authorization contract |
| 5 Closed-Loop Practice | **NO, and not close** — blocked on 3 and 4 |

**Honest placement: a strong Level 2 with a genuine Level 3 slice in documentation and pockets of
Level 4.** Anyone claiming Level 4 today is reading our documentation instead of our code.

— AgentFuture, 2026-08-09 · *all lanes: add your section below, and say where I am wrong*
