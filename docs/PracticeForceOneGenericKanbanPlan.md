---
title: "PracticeForceOneGenericKanbanPlan"
---

# PracticeForceOne — Generic Workflow / Kanban Framework Plan

## 🧊 FROZEN CONTRACTS — ratified 2026-08-10, not migration behavior

**Two decisions are now frozen by founder directive while the board count is still small.** They are
**permanent contracts, not transitional states.** Anyone reading this later: do not "clean these up."

### 1. Canonical work truth — the producer ruling

> **The SERVER work projection is canonical work truth. @AgentDLP certifies it.**
>
> **UI enrichment MAY add** formatted patient detail, presentation context, friendly labels and
> other non-authoritative display enrichment.
>
> **UI enrichment MAY NOT redefine** any of the seven: whether work exists · status · ownership ·
> current workflow state · patient · reason · actionability.

**The checkable test:** if removing every client-side fetch changed the **answer** to any of those
seven, the client has redefined truth and the build is wrong. It may change how the answer *looks*;
it may not change what the answer *is*.

*Accepted by the founder 2026-08-10 unless @AgentARCH finds a concrete contradiction.*

### 2. Board / lane key model — **PERMANENT**

> **`<boardId>::<laneId>`**
> **A bare `<laneId>` means the Primary board — permanently.**

**Two conditions from @AgentARCH, both binding:**

1. **A `boardId` must never contain `::`.** The separator is reserved; a board id containing it would
   make the key ambiguous. Validate at authoring time, not at read time.
2. **The bare-lane-id form is PERMANENT Primary-board compatibility — it is NOT a migration state
   awaiting cleanup.** Every existing key is a bare lane id and keeps meaning Primary forever.
   **There is no future migration that rewrites bare keys**, and proposing one is a defect.

**Why bare-means-Primary is permanent rather than temporary:** it makes the whole model backward
compatible by construction — no migration, no touched key, no window in which a board's cards could
be misfiled. A "temporary" compatibility form is one somebody eventually deletes; a permanent one is
a contract. This is deliberately the latter.

**Frozen now, per the founder's instruction, while the board count is small enough that freezing
costs nothing.**

---


**Status: PLAN — nothing in this document is built.** · **Owner: AgentFuture** · **Date: 2026-08-09**
**Governing directive:** AgentFuture Directive — Generic Workflow / Kanban Framework (founder, 2026-08-09)
**Related:** [PracticeForceOneWorkflowEngine](PracticeForceOneWorkflowEngine.html) · [PracticeForceOneWorkflowEditor](PracticeForceOneWorkflowEditor.html) · [PracticeForceOneKanbanEditor](PracticeForceOneKanbanEditor.html) · [PracticeForceOneKanbanFields](PracticeForceOneKanbanFields.html) · [PracticeForceOneKanbanLaneReference](PracticeForceOneKanbanLaneReference.html) · [PracticeForceOnePlatformArchitecture](PracticeForceOnePlatformArchitecture.html)

---

## 0. The headline finding — read this before anything else

**PracticeForceOne already has a definition-driven workflow engine. We are not building a second one.**

The directive's §36 warns: *"I do NOT want a second workflow subsystem because we failed to recognize
one already exists."* That risk is real and immediate — one **does** exist, it is documented, and it
already satisfies a large fraction of the directive:

- `engine_configs` is the Definition Repository. Workflow definitions live at
  **`config_type='workflow'`, `config_key=<workflowId>`** — so `primary-visit` is already *one
  workflow among many possible ones*. **The `workflowDefinitionId` concept required by §2 already
  exists as a first-class storage key.**
- Definitions are already scoped **per practice**, with `practice_id = NULL` meaning global template,
  and a documented lookup order of practice → org global → built-in default. **§3 practice isolation
  has substrate today.**
- Definitions already have a **`stage`** of `preprod` | `prod`, with a **Promote** action and a
  **Copy from…** action. **§22 draft→publish and "Clone Workflow" largely exist.**
- A workflow definition already carries `steps[]` with `entity`, `screen`, `url`, `lanes[]`,
  `prev`/`next`, and **`completeWhen: { entity, statusIn }`**. **§13's automatic movement from
  persisted truth is already the implemented model, not a thing to invent.**
- `operations/default` is already a **registry of named operations** (endpoint, input, produces,
  completesStep, emitsEvent). **§11's "declare permitted actions, never arbitrary executable code"
  already has its mechanism.**
- `metadata/entity.*` already defines non-patient entity schemas — `claim`, `appointment`,
  `encounter`, `documentVerification`, `portalRequest`, and more.
- `worklist/claims` already proves a **work queue with columns, views and filters is a definition**.

**So the honest scope of this initiative is narrow and deep, not broad and new.** Three structural
gaps stand between what exists and what the directive asks for. Everything else is configuration,
extension, or explicitly not to be built.

---

## 1. The three gaps that actually matter

### GAP 1 — The definition-driven lane-assignment hook **is already built, and is structurally dead**

This is the most important finding in the code survey, and it is better news than the documentation
suggests.

**The hook exists and is wired.** `util/WorkflowLanes.laneFor()` gets **first refusal at five call
sites** — claim (`WorkflowBoardRoutes.script:445`), encounter (`:716`), charge_review (`:812`),
appointment (`:923`) and portal_user (`:1038`) — before each falls through to its compiled chain.
`laneFor` itself (`WorkflowLanes.script:261-286`) is first-match-wins over a `laneRules` array
supporting `entityType` / `statusIn` / `notStatusIn`, and it refuses to place a card in a lane that
is not in the resolved `laneOrder`. **That is a working definition-driven assignment engine.**

**It cannot fire.** `rulesFrom()` requires the definition body to be a JSON **object**
(`WorkflowLanes.script:91`), while both live practices publish the lane catalog as a bare **array**
(`docs/platform/FROZEN-LANE-ORDER.json`: `"laneDefinitionKey": "kanban_card/lanes"`). A grep for
`laneRules` finds it in **four files, none of them a published definition** — no practice has ever
supplied one. AgentARCH documented exactly this shape mismatch in `AGENTS.md:48382-48387`, ending
with **"Do not do this"** — because the naive fix is to convert the published catalog from array to
object form, and that catalog is the **founder-frozen lane order**.

**So Gap 1 is not "build lane assignment." It is "route `laneRules` to a reader that can see it,
without reshaping the frozen catalog."** That is a far smaller and safer change than the
documentation implies — **and it is the single highest-value change in this initiative.**

> ### ✅ RESOLVED 2026-08-09 by @AgentDLP (the Workflow Engine's owner)
>
> **`laneRules` lives at `config_type='kanban_card'`, `config_key='lane_rules'` — a SIBLING KEY.**
>
> Their evidence, read off Medical prod: that type already holds **44 keys** — every lane id, plus
> the frozen `lanes` array, plus **`blockers`**, **`review_gate`** and `default`. Two non-lane
> business-rule objects already live as sibling keys under this exact type and ride the same
> practice×stage resolver with org fallback. `lane_rules` is **the third instance of an established
> pattern, not a new mechanism**:
> - the frozen catalog stays a bare array, **byte-identical** — the D3 gate is met by construction
>   and the founder's lane-order freeze cannot be touched even accidentally;
> - no schema change, no new store, no second resolver (§36 "do not build what exists");
> - practice-scoped override with org fallback comes free, so **Oasis rules cannot reach Medical** —
>   §9 guarantee 4 delivered by the storage choice rather than by new code;
> - the Kanban editor already edits sibling keys, so an admin surface exists the day it ships.
>
> **Rejected — my original suggestion:** carrying rules on `workflow/<id>`. It reads well but splits
> lane assignment across two config types and forces the board resolver to read twice — the "two
> producers of one fact" shape that has repeatedly bitten this platform (card/panel drift, the two
> rule namespaces). **One type, sibling keys.** *AgentFuture accepts in full.*
>
> **D3 is ACCEPTED by @AgentDLP as the Workflow Engine's Phase 2**, on their schedule, behind the
> founder's priorities 1–3, shipping with an executable journey that proves **a new lane id receives
> a card with no deploy**. First-match-wins stays; the compiled chain remains the fallback.
>
> **Blast radius they disclosed (carried into D3 planning):** the **37 lane-termination journeys**
> (DLP3+3A–3U Medical, DLP4+4A–4N Oasis) drive lanes by writing entity status and letting the
> compiled chain map it. Once `laneRules` is authoritative a published rule can move a card the
> journey expects elsewhere and the suite reports a lane gap — **"that is the alarm working, not
> breaking."** D3 and the journey update land in the same window. Separately,
> `bin/check-lane-coverage.mjs` assumes **one board per practice** and D4 breaks that assumption.

The documentation states the consequence plainly.
[PracticeForceOneWorkflowEditor](PracticeForceOneWorkflowEditor.html):

> *"A **brand-new** lane id shows an **empty** column until Phase 2 moves the status→lane
> **assignment** rules out of `WorkflowBoardRoutes` into the definition."*

[PracticeForceOneReCenterKanban](PracticeForceOneReCenterKanban.html), independently:

> *"The honest limitation: **lane ids are still engine built-ins**, so a renamed lane behaves as the
> lane it renames."*

**You can define a lane today and nothing will ever land in it** — not because the mechanism is
missing, but because the one shape it reads has never been published. Everything else in this plan
is subordinate to closing that.

**Related debt to retire with it:** four independent hard-coded copies of the lane progression
survive — `WorkflowBoardRoutes.script:189` (`WB_LANE_PROGRESSION`), `WorkflowsRoutes.script:29`
(`LANE_ORDER`), `ui/public/kanban.js:394` (the 22-lane spine) and `kanban.js:2617`
(`LANE_PROGRESSION`). A generic framework cannot have four sources of lane order.

### GAP 2 — There is one shared lane catalog, and card/panel definitions are keyed by lane id alone

The live catalog is **`kanban_card` / `lanes`** — the founder-designated source of truth and the
first entry in `WorkflowLanes.LANE_SOURCES` (`WorkflowLanes.script:177-181`), ahead of the legacy
`workflow/lanes` and `workflow/default`. *(Note: [PracticeForceOneWorkflowEngine](PracticeForceOneWorkflowEngine.html)
documents the catalog as `workflow/lanes`; that page is **stale on this point** and should be
corrected — the code and `docs/platform/FROZEN-LANE-ORDER.json` both say `kanban_card/lanes`.)*

It is a **single catalog** that all boards draw from; a workflow selects and orders a subset via
`laneOrder`. Meanwhile `kanban_card/<laneId>` and `kanban_panel/<laneId>` are keyed **by lane id**,
not by workflow.

Consequence: two workflows that both want a lane called `ready_for_review` would **collide** — same
lane id, same card face, same panel. The directive's §2 isolation requirement
(*"`workflowDefinitionId = REFERRAL` must never appear on `PATIENT_DAY`"*) cannot be guaranteed by
the current key structure. **Lanes, card faces and panels must become workflow-scoped.**

### GAP 2b — Transitions are enforced in the **browser only**

Transitions *are* definition-driven — `advance` / `revert` are declared per lane in the catalog, and
`kanban.js:9309-9323` states outright that *"definition-based transitions override hardcoded logic
when configured on the lane."* `executeDefinedTransition` (`kanban.js:6704-6720`) even validates
`requireInputs`.

**But the survey found no server-side transition model at all.** Legality is decided client-side.
For the patient board — an internal tool over already-authorized data — that has been tolerable. For
a generic framework it is not: §12 makes the definition decide what is legal, and §28 forbids a
workflow becoming a way around security. **Transition legality must become a server-evaluated
contract before any workflow is exposed to a role that should not be able to skip a lane.**
This is AgentARCH's ruling to make.

### GAP 3 — There is no workflow *instance* identity for subjects the board does not already compute

Today a card is **derived**: the board computes cards from the live state of patients, appointments,
encounters and claims. There is no `workflow_instance` row. That is a genuine architectural virtue —
it is exactly the founder's §13 principle, *"Kanban should visualize persisted truth rather than
become an independent source of truth"* — and it is why the patient board has never drifted from
reality.

Confirmed by the survey: **no `workflow_definitions`, `workflow_instances`, `lanes`, `transitions` or
`work_items` table exists.** Cards are emitted from six hard-coded entity types
(`WorkflowBoardRoutes.script:1313` — `claim, encounter, charge_review, appointment, portal_user,
clinical_follow_up`), and `patientId` is a **positional parameter of the emitter itself**
(`WorkflowBoardRoutes.script:174`). `WorkflowEnginePlan.md` once proposed a `workflow_definitions`
table; it was never built, because definitions landed in `engine_configs` instead — **that was the
right call and should not be revisited.**

But §7 asks for a workflow instance, §14 asks for ownership, and §16 asks for SLA aging. **Those are
facts no existing domain row carries.** A referral row has a status; it does not have "assigned to
Jennie on Tuesday, due in 3 days, escalated once."

**Two existing objects are strong reuse candidates and should be evaluated before any new table:**
- **`kanban_card_overrides`** (DDL `ClaimsProcessingDdl.xml:2134`, API
  `util/KanbanCardOverridesRoutes.script:16`) — composite PK `(PRACTICE_ID, CARD_KEY, OVERRIDE_TYPE)`
  carrying `ASSIGNED_USER_ID`, `ASSIGNED_LABEL` and a soft delete. It is keyed by an **opaque card
  key and knows nothing about patients** — the most subject-agnostic object on the board today, and
  a natural home for the assignment half of the instance.
- **`SOURCE_RECORD_EVENTS`** (`ClaimsProcessingDdl.xml:2059`) — `EVENT_TYPE`, `SOURCE_TYPE`,
  `SOURCE_ID`, `PRIOR_STATE`, `NEW_STATE`: already a generic transition log. **The activity timeline
  (§19) is a projection over this. Do not build a second event store.**

Ownership and aging are, today, **computed in the browser** — `ownerRole` from a hard-coded
value→lane→action table (`kanban.js:3086-3095`) and `dueAt`/`ageMinutes` at roughly twelve sites.
So "who owns this and how long has it waited" is currently a *rendering* answer, not server truth.
§15 accountability requires it to become server truth.

**This tension is the central design decision of the initiative, and §4 below resolves it.**

---

## 2. Gap analysis (§35)

**Evidence base: a full code survey of the live tree was completed 2026-08-09** (routes, lane
resolver, definition store, card emitters, transitions, assignment/SLA, DDL). Claims below carry
`file:line` where they are code facts. This substantially delivers **D1**; what remains for the
formal D1 sign-off is ARCH review and confirmation of the two reuse candidates in Gap 3.

| # | Required capability | Class | Notes |
|---|---|---|---|
| §2 | Workflow definition identity | **EXISTS** | `config_type='workflow'`, `config_key=<workflowId>` |
| §3 | Practice / org / platform scoping | **EXISTS** | `practice_id` NULL = global template; documented lookup order |
| §4 | Workflow definition record (name, description, active) | **EXTEND** | Header fields exist; needs `subjectType`, `active`, `version` |
| §5 | Per-workflow ordered lanes | **GENERALIZE** | Catalog is `kanban_card/lanes`, resolved by `WorkflowLanes.script:177-181`; single + shared — Gap 2. Four hard-coded copies to retire |
| §5b | **Lane assignment from definition** | **EXISTS BUT DEAD → home RESOLVED** | `laneFor()` wired at 5 call sites; `laneRules` unreadable (array-vs-object, `WorkflowLanes.script:91`). **Home = `kanban_card/lane_rules`** (@AgentDLP, 08-09); **D3 accepted as Phase 2** |
| §6 | Lane metadata (order, terminal, roles, SLA, entry/exit) | **EXTEND** | `id/title/shortLabel/role/hidden/ownerRole/description` exist; terminal, SLA, criteria are new fields |
| §7 | Workflow instance | **NEW (minimal)** | See §4 — hybrid, deliberately thin |
| §8 | Non-patient subjects | **GENERALIZE** | `metadata/entity.*` exists for claim/appointment/etc.; the *board* is patient-keyed |
| §9 | Patient ID as first-class context | **EXISTS** | Use `util/PatientRef` canonical resolver — do not add another identifier |
| §10 | Configurable card design | **EXISTS → re-key** | `kanban_card` schema is sufficient; must become workflow-scoped |
| §11 | Configurable actions | **EXISTS** | `operations/default` registry; extend the catalog, not the mechanism |
| §12 | Explicit transitions | **EXISTS (client) → NEW (server)** | `advance`/`revert` declared per lane, definition beats code (`kanban.js:9309-9323`); **no server-side transition model** — Gap 2b |
| §8b | Card subject model | **HARD-CODED** | Six fixed entity types (`WorkflowBoardRoutes.script:1313`); `patientId` positional in the emitter (`:174`); orphan filter drops non-roster patients (`:1293`) |
| §13 | Manual + automatic movement | **EXISTS (automatic)** / **EXTEND (manual)** | `completeWhen{entity,statusIn}` is the automatic half and is the right model |
| §14 | Assignment / ownership + history | **EXTEND (reuse)** | `kanban_card_overrides` already carries `ASSIGNED_USER_ID`/`ASSIGNED_LABEL` on an **opaque, patient-agnostic** card key — evaluate before any new table. `ownerRole` is computed in the UI (`kanban.js:3086`) |
| §15 | Accountability questions | **DERIVED** | Falls out of §14 + §19 once they exist |
| §16 | SLA / aging | **NEW (config) + EXTEND (render)** | `isDueNow` / `isStale` chip conditions exist as *rendering* concepts |
| §17 | Priority | **EXTEND** | `priority` is already a card field/chip |
| §18 | Filters and views | **EXISTS elsewhere** | `worklist` engine does columns/views/filters and is **the only subject-generic precedent** (subject = claim, no lanes). Distinct from `kanban_lane_configs`, which is per-user lane *visibility* |
| §19 | Activity timeline | **EXISTS** | `SOURCE_RECORD_EVENTS` (`ClaimsProcessingDdl.xml:2059`) already has `SOURCE_TYPE`/`SOURCE_ID`/`PRIOR_STATE`/`NEW_STATE` — project it, never a second log |
| §20 | Enterprise audit | **EXTEND** | Wire to `util/ChangeAudit.script` (AgentInfrastructure owns the registry) |
| §21 | Versioning | **NEW** | `stage` is not a version — see §6 |
| §22 | Draft → publish | **EXISTS** | preprod/prod + Promote + Copy from… |
| §23 | Templates | **EXISTS** | The global template + Copy from… IS the template mechanism |
| §24 | Workflow Builder UI | **EXTEND** | Workflow Editor + Kanban Editor exist; builder is their generalization (AgentUI) |
| §25 | Cross-workflow automation | **EXTEND** | Via `operations` + events; never direct table access |
| §26 | One subject, many workflows | **NEW (guarantee)** | Falls out of instance identity; must be explicitly tested |
| §27 | Workflow directory | **NEW (small)** | A list over authorized definitions; `menu` already routes `type:"workflow"` |
| §28–29 | Security + permissions | **EXTEND** | RouteGuard + `ownsPracticeParam` + RBAC exist; add workflow-level permissions |
| §30 | Reporting | **DO NOT BUILD (now)** | Ensure the persistence model *allows* it; build no analytics today |
| §31 | DLP journeys ≠ clinic workflows | **GUARDRAIL** | Not a build item; a rule this plan must not violate |

**DO NOT BUILD list (explicit):** a second Kanban engine · a second definitions store · a second
events log · a second patient identifier · workflow-specific React components · a separate analytics
architecture · per-workflow route modules · any executable code inside a workflow definition.

---

## 3. Target architecture — the smallest contract (§36)

Conceptual names on the left; **the existing PFO object that should carry them** on the right. The
goal is to add as little new persistence as possible.

| Concept | Realized as | New? |
|---|---|---|
| `WorkflowDefinition` | `engine_configs` · `config_type='workflow'` · `config_key=<workflowId>` | exists |
| `WorkflowDefinitionVersion` | a `version` inside the definition body + immutable published copies | **new (small)** |
| `LaneDefinition` | lanes **inside** the workflow definition (moved out of the shared catalog) | generalize |
| `TransitionDefinition` | `steps[].prev/next` + explicit `transitions[]` with guards | extend |
| `CardDefinition` / `PanelDefinition` | `kanban_card` / `kanban_panel`, re-keyed by `workflowId` + lane | re-key |
| `WorkflowInstance` | **hybrid** — see §4 | **new (thin)** |
| `Assignment` | fields on the instance + history events | **new** |
| `WorkflowEvent` | `SOURCE_RECORD_EVENTS` (canonical ledger) + `audit_log` via ChangeAudit | exists |

**One workflow definition should be a single self-contained document.** Today a workflow's behavior
is spread across four sibling keys (`lanes`, `<workflowId>`, `blockers`, `review_gate`) that join by
lane id — which is exactly why lanes are shared and workflows cannot be isolated. A generic workflow
should own its lanes, cards, panels, transitions, actions and SLAs **within its own definition**,
so that copying it copies everything and deleting it deletes nothing else.

> **Migration note:** `primary-visit` and its 22-lane catalog must keep working exactly as they do
> now. The existing patient board is the most valuable surface in the product and its lane order is
> **founder-frozen**. The generic model must therefore be *additive*: new workflows own their lanes;
> `primary-visit` continues to read the shared catalog until it is deliberately migrated, if ever.

---

## 4. The central decision — derived vs instantiated

The patient board derives cards from live state and stores no board rows. A generic framework needs
ownership, aging and lanes for things the board cannot compute. Both models are right for different
workflows, and picking only one breaks something.

**Proposed resolution — the subject row remains the source of truth; the instance carries only what
the subject cannot.**

```text
SUBJECT ROW (referral, order, claim, patient…)   ← business truth: status, dates, amounts
        +
WORKFLOW INSTANCE (thin)                          ← workflow truth ONLY:
                                                     workflowDefinitionId, definitionVersion,
                                                     subjectType + subjectId, owner, assignedAt,
                                                     priority, SLA clock, currentLane (when NOT derivable),
                                                     status, timestamps
```

Rules that keep this honest:

1. **If a lane can be derived from the subject's own persisted status, it MUST be derived**
   (`completeWhen` semantics). Never copy a business status onto the instance to make a card move —
   that is the duplicate-state failure the directive forbids in §13.
2. **The instance never holds business data.** No amounts, no clinical facts, no statuses that exist
   elsewhere. If a field would be a second copy of domain truth, it does not belong here.
3. **`currentLane` is written only for workflows whose lanes are not derivable** (e.g. a purely
   administrative process with no domain status). For derived workflows it is a cache at most, and
   the derivation always wins on conflict.
4. **Ownership, assignment history, priority and SLA are workflow facts, not domain facts** — they
   legitimately live on the instance because no domain row has them today.

This gives the patient board a zero-change path (it stays derived), gives Referral Management a real
instance with an owner and an aging clock, and prevents the framework from becoming a shadow copy of
the chart.

---

## 5. Subject genericity (§8)

The framework must never assume `card == patient`. Proposed model:

- A definition declares `subjectType` (`PATIENT`, `ENCOUNTER`, `REFERRAL`, `ORDER`, `CLAIM`,
  `AUTHORIZATION`, `PAYMENT`, `DOCUMENT`, `INVENTORY_ITEM`, `TASK`, `CUSTOM`).
- Each subject type resolves through an existing `metadata/entity.<name>` schema wherever one exists —
  that is what supplies field labels and types to the card/panel renderer.
- **Patient association is an optional dimension, not the identity.** When a subject has a patient,
  the instance carries a patient reference resolved through the canonical `util/PatientRef` resolver,
  and the card shows the six-character **Patient ID** — never a UUID, and never a new identifier
  (Patient ID directive, 2026-08-07).
- A subject may hold instances in **many** workflows simultaneously (§26); completing one must not
  affect the others. This is a guarantee to be *tested*, not merely asserted — see §9.

---

## 6. Versioning and publish (§21, §22)

`stage` (preprod/prod) is a *lifecycle*, not a *version*: promoting overwrites, and a promoted edit
would silently reinterpret history. The directive is explicit — *"Never silently reinterpret
historical workflow state using a newly edited definition."*

Proposed:

- A published definition gets an immutable **`definitionVersion`**; publishing writes a new version
  rather than mutating the last one.
- **Every instance records the `definitionVersion` it was created under** and continues to execute
  against it.
- **Default policy: existing instances remain on their version**; migration to a newer version is an
  explicit administrator action with a preview of what changes.
- Draft/validate/publish reuses the existing preprod → Promote machinery; **Clone reuses
  `POST /api/engine-configs {action:copy}`**, which already exists.

**Validation before publish must at minimum reject:** a lane referenced by a transition but not
defined; an unreachable lane; no terminal lane; a transition to a lane in another workflow; an action
not present in the operations registry; a card field that resolves against no entity schema.

---

## 7. Security (§28, §29)

Every workflow request enforces the existing chain, in order:
**authentication → practice authorization → workflow permission → subject authorization → action
authorization.**

The first two already exist fleet-wide (RouteGuard, `ownsPracticeParam` on all gate sites, build
2211). The new layer is workflow-level permission — `WORKFLOW_VIEW / CREATE / ASSIGN / MOVE /
COMPLETE` and `WORKFLOW_DEFINITION_VIEW / EDIT / PUBLISH`.

**The non-negotiable rule: a workflow must never become a path to data a user could not reach
directly.** Subject authorization is evaluated against the subject itself, not inherited from board
membership. A card appearing on a board is never, by itself, authorization to open what it points at.
**AgentARCH rules this boundary; this lane does not decide it.**

---

## 8. Audit (§20)

Workflow configuration *and* execution are auditable through the existing
`util/ChangeAudit.script` — one capture helper, no per-handler reimplementation. Events:
`WORKFLOW_CREATED / CHANGED / ACTIVATED / DEACTIVATED`, `INSTANCE_CREATED`, `LANE_CHANGED`,
`OWNER_CHANGED`, `PRIORITY_CHANGED`, `ACTION_PERFORMED`, `INSTANCE_COMPLETED / CANCELLED`.

Patient-associated workflow events participate in **Enterprise Patient Audit**, which
**AgentInfrastructure owns** — this lane supplies the event contract and does not build the registry.

The activity timeline (§19) is a **projection over `SOURCE_RECORD_EVENTS`**, the canonical event
ledger. Do not create a per-workflow note table; that is the "separate communication histories"
duplication the founder has already ruled against.

---

## 9. Isolation — the guarantee, and how it will be proven

Isolation is the directive's non-negotiable, so it gets tests rather than assurances. The following
must be demonstrable:

1. Creating, editing, publishing or deleting workflow B produces **no change** in workflow A's
   definition, lanes, cards, or instances.
2. An instance of B **never** appears on A's board — including when both reference the same patient.
3. Two workflows may use **identical lane ids** with no interaction.
4. An Oasis workflow change leaves ReCenter Medical byte-identical, and vice versa.
5. **The existing patient board is unaffected by the entire initiative** — same lanes, same order,
   same cards. Lane order is founder-frozen; this work must not touch it.
6. Deleting workflow B removes B's instances and nothing else.

**@AgentDLP owns the executable proof** of these as journeys (§31: a DLP journey validates the
system; a Generic Workflow is a clinic process — the two must not be merged).

---

## 10. Delivery plan

| Phase | Deliverable | Owner | Gate |
|---|---|---|---|
| **D1** | **Generic Workflow Gap Analysis** — every capability classified EXISTS / EXTEND / GENERALIZE / NEW / DO NOT BUILD, with file:line evidence for every hard-coded claim | AgentFuture | Founder + ARCH review |
| **D2** | **Architecture Contract** — the smallest object model, reusing existing objects; instance model ratified; versioning policy chosen | AgentFuture proposes · **AgentARCH rules** · AgentDB owns persistence | ARCH sign-off before any schema |
| **D3** | **Gap 1: make `laneRules` reachable at `kanban_card/lane_rules`** — sibling key, **RESOLVED by @AgentDLP 08-09**; frozen array catalog untouched. Engine already exists at 5 call sites | **@AgentDLP — ACCEPTED as Workflow Engine Phase 2**, behind founder priorities 1–3 | A new lane id receives cards with no deploy, frozen lane order byte-identical; ships with DLP's executable journey, landed in the same window as the 37-journey update |
| **D3b** | **Gap 2b: server-side transition legality** | AgentARCH rules · AgentDLP implements | A forbidden transition is refused by the server, not just hidden in the UI |
| **D4** | **Gap 2: workflow-scoped lanes/cards/panels** | AgentDLP + AgentUI | Two workflows share a lane id with zero interaction |
| **D5** | **Gap 3: thin instance + ownership + SLA** | AgentDB persistence · AgentFuture contract | A card answers who owns it and how long it has waited |
| **D6** | **PROOF 1 — Referral Management** as pure configuration | AgentFuture configures · UI renders · DLP validates | **If it needs referral-specific engine code, the abstraction is wrong** |
| **D7** | **PROOF 2 — Supplement Orders** on the same engine, unchanged | same | Different lanes, cards, actions, subject, SLA — **zero engine changes** |
| **D8** | **Workflow Directory + Builder** | AgentUI | An administrator creates a workflow with no engineer |

**Sequencing rule:** D3 before everything downstream. Until a defined lane can receive a card, every
other capability is decoration.

**Founder priority note:** the current fleet priorities (registration→scheduling, journey v3,
checkout loop) outrank this initiative. This plan is written to be executed **without starving**
that work — D1 and D2 are documents, and D3 is the only large engineering item.

---

## 11. Lane ownership (§34)

**AgentFuture owns:** framework and product definition, the generic architecture proposal, the
definition lifecycle, template strategy, cross-lane coordination, and the standing duty to keep the
capability generic. **This lane does not implement architecture owned by another lane.**

| Lane | Owns here |
|---|---|
| **AgentARCH** | Security boundary, definition architecture, versioning ruling, isolation enforcement |
| **AgentDB** | Canonical persistence — instance model, indices, tenancy columns |
| **AgentDLP** | **The Workflow Engine itself** (existing owner) + executable validation journeys |
| **AgentUI** | Workflow Directory, board renderer, Workflow Builder, Kanban/Workflow Editors |
| **AgentInfrastructure** | Audit participation, observability, operational governance |
| **AgentCF** | Clinical actions, patient/encounter contracts, trigger semantics |
| **AgentAesthetics** | Oasis use cases and specialty validation |

**Coordination requirement before D3:** the Workflow Engine is AgentDLP's, and the editors are
AgentUI's. This plan is a proposal to them, not an instruction.

---

## 12. Risks

1. **Building a second engine by accident** — the directive's own §36 risk. Mitigated by D1 being
   evidence-based discovery and by this plan starting from what exists.
2. **Breaking the patient board.** It is the product's most valuable surface and its lane order is
   founder-frozen. Mitigation: the generic model is *additive*; `primary-visit` changes nothing.
3. **Instance drift** — the framework becoming a shadow copy of clinical truth. Mitigated by the
   §4 rules; violations should fail review.
4. **Lane-id collision** across workflows — Gap 2; must be closed before a second workflow ships.
5. **A workflow becoming a security bypass** — mitigated by subject-level authorization (§7); ARCH
   rules it.
6. **Scope displacement** — this is a platform capability competing with priorities 1–3. Mitigated by
   the sequencing note in §10.

---

## 13. Definition of done

The clinic says *"tell us the process you want to track"* and an administrator defines a workflow —
lanes, card fields, actions, assignments, rules, transitions, SLA, permissions — **with no engineer,
no new board, no new routing, no duplicated patient state, no duplicated security, and no deploy.**

**Final architectural test.** *"Can you create a workflow for tracking patients who need outside
imaging?"* → **Yes, configure a workflow.** *"Can Oasis have a completely different workflow for
treatment follow-ups?"* → **Yes, configure another.** *"Will that affect our normal patient
Kanban?"* → **No.**

If satisfying any of those requires a hard-coded board, workflow-specific routing, a new engine,
duplicated state or security, or a deployment — **the problem has not been solved correctly.**

---

## 13b. Coordination status — asks are OUT, answers pending

Per the founder's instruction to coordinate with every lane before building, numbered asks were
posted to `AGENTS.md` on 2026-08-09. **Nothing proceeds past D2 until the critical-path three are
answered.**

| Lane | Asked | Critical path? | Status |
|---|---|---|---|
| **AgentDLP** | Accept D3; **where `laneRules` safely lives**; journey blast radius; isolation proof (§9) | was the #1 blocker | ✅ **ANSWERED 08-09** — `kanban_card/lane_rules`; **D3 accepted as Phase 2**; blast radius = the 37 lane-termination journeys; `check-lane-coverage.mjs` assumes one board per practice (breaks at D4) |
| **AgentARCH** | Instance model (§4); one self-contained definition vs four joined keys; **server-side transition legality (Gap 2b)**; versioning policy | **YES — #1 and #3** | awaiting |
| **AgentDB** | `kanban_card_overrides` as the assignment home; `SOURCE_RECORD_EVENTS` as timeline source; no new patient identifier; `workflow_definitions` table stays unbuilt | no — informs D5 | awaiting |
| **AgentUI** | `workflowId` scope in the card/panel renderer; `ownerRole`/`ageMinutes` to server truth; Directory + Builder are theirs; **WorkflowEngine wiki page is stale** | no — D4/D8 | awaiting |
| **AgentInfrastructure** | Does the workflow audit-event list fit the coverage registry; Enterprise Patient Audit participation | no — D5 | awaiting |
| **AgentCF** | `operations/default` as the action mechanism; **PMP `pmp_review` / `controlledSchedule` overlap** — a controlled-substance review should be a definition on this engine, not a parallel mini-workflow | no — but avoid duplication | awaiting |
| **AgentAesthetics** | Oasis use cases (Treatment Follow-Up · Photography Review · Product Reorder); **sharpest isolation test**; whether the framework worsens the lane-drift class | no — D7 | awaiting |

**Explicitly not asked of any lane:** to drop the founder's current priorities. This initiative sits
behind registration→scheduling, journey v3, the checkout loop, Patient ID adoption, Oasis
correctness and audit expansion. D1/D2 are documents; **D3 is the only large engineering item and it
belongs to AgentDLP's engine on AgentDLP's schedule.**

## 14. Open questions

**For the founder:**
1. **Priority placement** — where does this sit against registration→scheduling, journey v3 and the
   checkout loop? This plan assumes *behind* them, documents first.
2. **Version-migration policy** — confirm the default that existing instances stay on their version
   and migration is explicit.
3. **Patient-board migration** — should `primary-visit` eventually migrate onto the generic model, or
   remain deliberately special? (Recommendation: leave it alone until two generic workflows are live.)

**For the lanes:**
4. **@AgentDLP** — you own the Workflow Engine. Do you accept D3 as its "Phase 2", and **what is the
   safe home for `laneRules`** given ARCH's "do not reshape the frozen catalog" ruling
   (`AGENTS.md:48382-48387`)? Is journey-v3 already moving this boundary?
5. **@AgentARCH** — (a) the instance model and versioning ruling; (b) whether a workflow definition
   should become one self-contained document rather than four joined keys; (c) **server-side
   transition legality (Gap 2b)** — today a transition is decided in the browser.
6. **@AgentDB** — **is `kanban_card_overrides` the right home for assignment** (opaque card key,
   patient-agnostic, already server-backed), or does the thin instance want its own table? And is
   `SOURCE_RECORD_EVENTS` the agreed timeline source?
7. **@AgentUI** — can the card/panel renderer accept a `workflowId` scope without a rewrite, and can
   `ownerRole`/`ageMinutes` move from browser computation to server truth?
8. **@AgentUI / @AgentDLP** — retiring the four hard-coded lane-progression copies
   (`WorkflowBoardRoutes.script:189`, `WorkflowsRoutes.script:29`, `kanban.js:394`, `kanban.js:2617`):
   whose, and when?

---

*Nothing here is built; nothing here is ratified. §2's classification now rests on a completed code
survey of the live tree (2026-08-09) and carries `file:line` evidence; formal D1 sign-off awaits
ARCH review and confirmation of the Gap 3 reuse candidates.*

— AgentFuture, 2026-08-09
