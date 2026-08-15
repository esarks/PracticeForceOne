---
title: "PracticeForceOneFuturePlan"
---

# PracticeForceOne — Future Plan: organizing and attacking the North Star

**Status: PLAN. Nothing here is authorized work and nothing has been built from it.**
**Author: AgentFuture** · **2026-08-09** · **Supersedes nothing. Reprioritizes nothing.**
**Inputs:** [PracticeForceOneOracleArchitectureDebate](PracticeForceOneOracleArchitectureDebate.html) ·
[PracticeForceOneTheFutureOfEHRandPFO](PracticeForceOneTheFutureOfEHRandPFO.html) ·
[PracticeForceOneGenericKanbanPlan](PracticeForceOneGenericKanbanPlan.html)

---

## 0. What this plan is, and what it is not

**It is** the organizing answer to one question: *what is the minimum additional architecture that
turns today's PFO into the North Star, who owns each piece, in what order, and how do we know each
step actually worked?*

**It is not:**
- a reprioritization — **registration → scheduling, Journey v3, the checkout/payment loop, Patient ID
  adoption, Oasis correctness and audit expansion remain in force and come first**;
- an AI program — no phase below begins with a model;
- a new subsystem — every phase is an evolution of something that already exists;
- authorization to build. **Each phase requires an explicit prioritization decision from the founder.**

**The single most important organizing decision in this document:**

> **There is no parallel "intelligent platform" initiative. The North Star rides work that is
> already queued.** The Generic Workflow instance model, the `laneRules` conversion and the context
> convergence are not adjacent to this vision — **they are it.** Creating a separate AI track would
> guarantee two half-finished architectures.

---

## 1. The destination

> **PracticeForceOne is an intelligent ambulatory practice operating platform that maintains one
> governed account of what is known, derived, inferred and unresolved about each patient and practice
> across clinical, administrative and financial workflows. It continuously identifies what requires
> attention, explains why, proposes the next appropriate action with supporting evidence, and
> executes authorized actions deterministically through governed services. Every consequential action
> and outcome becomes part of the record that informs what happens next.**

**Four principles, which are also acceptance tests:**

1. **Users manage decisions and exceptions; PFO manages workflow.**
2. **Reasoners propose. Governed services execute.**
3. **Derive truth; persist judgment.**
4. **Every intelligent capability must be provable as a journey.**

---

## 2. The minimum architecture — **RULED by the founder, 2026-08-09**

**Superseded:** this section previously said "two primitives." The founder's execution directive
(*Finish the Spine*, canonical at `docs/founder-execution-directive-finish-the-spine-2026-08-09.md`)
settled it, and the answer is tighter than the debate's:

### There is exactly ONE irreducible new primitive: durable Action / work state

A persisted record of **what needs to happen · why · for which patient/practice/encounter · who owns
it · when created · when due · whether actionable · what satisfies it · whether accepted, modified,
dismissed, completed, superseded or expired · and which controlled PFO service performs it.**

**It must not be another UI-only card model.** It is the durable judgment record beneath Kanban,
Encounter recommendations, the Action Center, billing queues, eligibility work, follow-up work, and
any future reasoner.

### Governed context is a CONTRACT, not a new primitive and not a store

*"Do not create a second semantic database just to say we have one."* Facts derive from authoritative
records, distinguishing **known · derived · inferred · unresolved**.

**New hard requirement, and it is a defect class we do not currently name:** every consumer must be
able to distinguish **"there is no data"** from **"I failed to obtain the data."**
**No silent empty context.** *(This is the same failure family as a failed lookup rendering as an
empty list — it has bitten this platform before.)*

### Re-evaluation does not justify an event bus

Synchronous re-evaluation when someone is present; a scheduled sweep for unattended/time-based work.
**No generalized event infrastructure** unless a proven journey requires latency or semantics that a
sweep cannot provide. **And the audit log is not an event bus.**

### Build order is a ruling, not a preference

**Durable action state comes BEFORE automatic re-evaluation.** Inverting it risks resurrecting
dismissed work, duplicating recommendations, and losing ownership, aging and deadlines.

**Two constraints that must be present from the first line of schema, not retrofitted:**
- **DB-enforced identity/idempotency.** A repeated evaluation of the same unresolved need must
  **reconcile with the existing open action, not create eleven copies.**
- **Superseded ≠ dismissed.** They are different states with different meanings and must not collapse.

---

## 3. Phase plan

**Every phase ends on a passing journey, never on "built."** That rule exists because PFO's
demonstrated failure mode is finishing a spine and not connecting it — a definition-driven lane
engine was built correctly, wired at five call sites, and **has never once executed**
(`util/WorkflowLanes.script:91`; `WorkflowBoardRoutes.script:445, :716, :812, :923, :1038`).

### Phase 0 — Open rulings. No code. **RULING TRACKER — maintained by AgentFuture.**

**This table is the coordination artifact.** Per the execution directive §13 my job is to collect
rulings, name owners for unresolved questions, and surface convergence and disagreement — not to
answer these. **Status column is the fleet's, not mine.**

| # | Open question | Owner | Status | Why it blocks |
|---|---|---|---|---|
| 1 | **Action identity / deduplication** | @AgentARCH | ✅ **DELIVERED** — practice+patient+scope+action_type+`subject_key`, PARTIAL UNIQUE INDEX over open states **in the first migration**, plus `evidence_fingerprint` | — |
| 2 | **Supersession semantics** | @AgentARCH | ✅ **DELIVERED** — `dismissed` human-only, never machine-resurrected; `superseded` engine-only and **requires a successor reference** | — |
| 3 | **Action contract shape** | @AgentARCH | ✅ **DELIVERED** — wiki `PracticeForceOneActionContract` (`9ac0806`); shape only, @AgentDB owns persistence | — |
| 4 | **Server-side transition legality** | @AgentARCH | ✅ **DELIVERED** — ONE server-side function; surfaces never write status; refused transition **errors**, never silently no-ops | — |
| 5 | **Projection vs stored truth** | @AgentARCH | ✅ **DELIVERED** — *"derive the need, store the lifecycle"* | — |
| 6 | **Durable action persistence + DB-enforced identity** | **@AgentDB** | OPEN | Directive §13 assigns persistence truth here; does `kanban_card_overrides` generalize? |
| 7 | **Does recommendation → action preserve the evidence/why contract?** | **@AgentCF** | OPEN | **If generalizing weakens explainability, we do not generalize.** Our strongest asset |
| 8 | **Can Kanban / Action Center / worklists consume one action model** without a rewrite? | **@AgentUI** | OPEN | Directive §5: do not build a fourth attention surface |
| 9 | **Is the action-state journey walkable** as the proof gate? | **@AgentDLP** | OPEN | Directive §12 makes DLP the acceptance standard |
| 10 | **Does audit carry enough to explain an action months later**, and is a scheduled sweep auditable? | **@AgentInfrastructure** | OPEN | Directive §11: the sweep's consequences must remain auditable |
| 11 | **Does one action + one context contract survive a second specialty?** | **@AgentAesthetics** | OPEN | Directive §10: Oasis proves generality or exposes an incomplete shared contract |

**Exit:** written rulings from the named owners. **Nothing else. No code.**

### Phase 1 — One action type, end to end. **The smallest honest proof.**

Take **one non-documentation action** — the eligibility exception — through the full contract:
proposed, owned, due, acted, audited. Deliberately not a documentation recommendation, because those
already carry work state and would prove nothing about generality.

**Exit journey (@AgentDLP):** eligibility fails Tuesday for a Thursday appointment → the action is
created with an owner and a due time → a second staff member can see it is already being worked →
resolution transitions it → the audit shows who and when.
**Economic test:** the patient's coverage problem is resolved **before arrival**, and two people do
not call the payer.

### Phase 2 — Generalize recommendation into action

`DOCUMENTATION_RECOMMENDATION` becomes an `action_type` **without losing a single existing
attribute** — reason, evidence, rule, consequence, work state.
**Owner: @AgentCF** (their engine, their contract).
**Exit journey:** every currently-passing documentation-recommendation journey still passes,
unchanged. **Regression-free is the entire acceptance criterion.**

### Phase 3 — Context convergence, starting with the drift we already have

**Do not begin by designing a context service.** Begin by removing the contradictions:

1. **One card producer.** Today the board is rebuilt client-side (`ui/public/kanban.js` ~`:2236`)
   *and* emitted by a server projection (`util/WorkflowBoardRoutes.script:174`). Converge on the
   server producer. **This is cleanup that pays immediately and is a prerequisite for P1.**
2. Retire the four hard-coded copies of lane order.
3. Move `ownerRole` and aging out of the browser (`kanban.js:3086-3095`) onto the action.
4. **Then** define the context contract over what is left.

**Owner: @AgentUI + @AgentDLP** for 1–3; **@AgentARCH + @AgentDB** for 4.
**Exit journey:** two surfaces asked about the same patient at the same moment return the same
answer — provable by a test that queries both and diffs them.

### Phase 4 — Attention becomes one model with several views

Kanban, Action Center and worklists become **projections over the action store**, keeping their
distinct shapes.
**Owner: @AgentUI**, contract from **@AgentFuture**.
**Exit journey:** the same overdue item appears in a lane, an encounter panel and a biller's queue,
and **completing it once clears it everywhere**.

### Phase 5 — A second evidence producer (unstructured narrative)

Only after P1 and P2. The requirement is **governed extraction with provenance**, not comprehension:
extracted facts arrive as evidence carrying source type, source id, source field, confidence and
supersession — **fields that already exist in `clinical_evidence`** — and are **never storable in the
same field as clinician-entered structured data**.
**Owner: @AgentCF** (evidence assembler), boundary from **@AgentARCH**.
**Exit journey:** a fact present only in narrative produces a recommendation whose evidence links
back to the exact source text, and a contradicting structured value surfaces the conflict rather than
resolving it.

### Phase 6 — Scheduled re-evaluation (not an event bus)

A periodic pass over durable actions answering *what is open, unresolved, overdue*.
**Exit journey:** something needing attention is surfaced **while nobody is looking at it**.
**Guard: if anyone proposes an event bus here, re-read Phase 0's first ruling** — it means context
was materialized and the design changed underneath us.

---

## 4. Lane ownership

| Lane | Owns in this plan |
|---|---|
| **@AgentARCH** | Every Phase 0 ruling; the action/context boundaries; security and tenant isolation; server-side transition legality |
| **@AgentDB** | Canonical persistence for actions and work state; whether an existing table generalizes; reconciliation |
| **@AgentCF** | Clinical action semantics; recommendation → action without losing the why; the evidence producer contract |
| **@AgentUI** | Surfaces as views; one card producer; ownership and aging off the browser; the attention model |
| **@AgentDLP** | **The gate.** Every phase exit is a journey they certify. Also the `laneRules` conversion |
| **@AgentInfrastructure** | Audit participation for actions; observability; the operational view of what is overdue |
| **@AgentAesthetics** | Second-specialty validation — does one context and one action model survive Oasis? |
| **@AgentFuture** | Coordination; the Action Contract definition; keeping it generic; the mock→real external bridge |

**Rule carried forward: I coordinate and define contracts. I do not implement inside another lane's
domain.**

---

## 5. Gates — how a phase is allowed to finish

A phase is complete only when **all four** hold:

1. **A journey passes** with a starting state, actor, action, persisted consequence and observable
   end state — certified by @AgentDLP, not by the implementing lane.
2. **The economic test is met** — the phase removes work a human currently does by remembering.
   Candidate measures: ten staff actions become two · a forgotten thing reliably gets done · a
   40-minute closeout becomes 15 · an eligibility problem resolved before arrival.
3. **Nothing regressed** — existing journeys still pass.
4. **It is connected, not merely built.** No phase completes on a substrate that nothing calls.

---

## 6. What we will not do

| Not building | Why it is attractive | Why it would be a mistake now | Reconsider when |
|---|---|---|---|
| Generalized multi-agent framework | Current vocabulary; maps to our lane structure | No shared context for agents to coordinate over; we have **one** evaluator serving every specialty | P1 exists **and** a reasoning capability genuinely cannot live in the existing evaluator |
| Event bus / subscription layer | Feels like the modern answer | Inherits ordering, replay, idempotency, storms; **not required** if context is projected | Context is materialized, or latency becomes a measured clinic problem |
| Voice / conversational interface | Highly visible, demos well | Voice is good for dictation, poor for consequential state changes needing visible confirmation | The action model exists and voice becomes another intent source |
| Generic clinical chatbot | Obvious Oracle parallel | Unbounded surface, unexplainable answers, no workflow consequence | Never in this form; "Ask PFO" over governed context is the defensible version |
| Second context store | Would make one team faster | Recreates the exact fragmentation we are fixing | Never |
| Model with write access to the chart | Removes human bottleneck | Destroys the explainability contract that is our strongest asset | Never |
| Renaming things to match the vision | Cheap, feels like progress | Renaming without the primitives is how architecture theater starts | After the primitive it describes actually exists |

---

## 7. Leading indicators that this is failing

Watch these rather than waiting for a milestone to slip:

1. **A phase reports "built" without a journey.** The failure mode, by name.
2. **A second context assembly appears** while Phase 3 is open.
3. **"Agent" reappears as a runtime term** — it means the vocabulary is moving faster than the design.
4. **An unexplained recommendation ships.** The differentiator is gone the day that happens.
5. **A new surface is prioritized over a primitive.** Surfaces are visible; primitives are not. This
   is the contest we have historically lost.
6. **Anyone claims Level 4 maturity.** Today PFO is a strong Level 2 with one Level 3 domain.

---

## 8. Sequencing against current delivery

**This plan starts behind the clinic-readiness work, not beside it.** Phase 0 costs no
implementation time — it is rulings, and several are already queued from the Generic Workflow plan.
Phase 1 should not begin until the founder explicitly prioritizes it against registration →
scheduling, Journey v3 and the checkout loop.

**The honest argument for doing Phase 0 now anyway:** every ruling in it is already blocking work
that is already queued. Answering them costs nothing and unblocks the Kanban program regardless of
whether this vision is ever pursued.

---

## 9. The one-paragraph version

**PFO does not need an AI strategy. It needs two things it nearly has: one governed account of what
is true, and actions that persist.** Everything the North Star describes — attention, explanation,
proposal, safe execution, a closing loop — follows from those two plus the definition-driven
execution PFO already has. The work is not a new stack; it is finishing spines the platform already
started, in an order where each step ends with something a tester can observe. **The risk is not that
this is too ambitious. It is that it is invisible, and loses every contest against a screen.**

— AgentFuture, 2026-08-09 · **nothing built; every phase requires explicit authorization**
