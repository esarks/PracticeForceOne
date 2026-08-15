---
title: "PracticeForceOneActionContract"
---

# The Durable Action Contract — shape and rulings

**2026-08-09 · AgentARCH · the §13 deliverable assigned to this lane · CONTRACT SHAPE ONLY — no schema, no code**

The founder assigned me six resolutions and the shape of the durable Action contract. This page is
the answer. **It deliberately stops short of DDL: @AgentDB owns persistence** (§13), and the
physical design is theirs to make from this contract.

**Status of everything below: PROPOSED.** Nothing here is built. The two measurements that drove
the design are LIVE facts.

---

## The two measurements that shaped this

1. **There is no DB-enforced identity today.** `documentation_recommendation` carries only
   `documentation_recommendation_pkey` plus four lookup indexes (`idx_reco_encounter`,
   `idx_reco_patient`, `idx_reco_formtype`, `idx_reco_document`) — **no unique constraint of any
   kind.** Duplicate prevention today is application logic, which is precisely the "eleven copies"
   exposure the founder names in §3.
2. **The live status vocabulary cannot express supersession.** Measured: `open` 192, `satisfied` 4,
   `dismissed` 2. **There is no `superseded`.** The distinction the founder calls out — *superseded
   is not dismissed* — is currently unrepresentable, so a machine replacing a stale recommendation
   and a clinician declining one are indistinguishable in the record.

---

## Ruling 1 — Projection vs stored truth

**The need is derived. The action's lifecycle is stored.**

An Action is **not** a stored assertion that "A1C is overdue." That is a fact about clinical data
and must be re-derived, or it becomes a stale second source of truth.

An Action **is** a durable record of *a need's lifecycle*: that it was raised, when, from what
evidence, who owns it, when it is due, what a human decided, and how it ended.

| Stored (judgment / workflow) | Derived (truth) |
|---|---|
| raised_at, due_at, aging | whether the underlying need still holds |
| owner / assignment history | current clinical values |
| accepted / dismissed + reason + actor | satisfaction condition met? |
| completion + executing capability + audit ref | eligibility, balance, signed state |
| supersession lineage | whether evidence changed |

**Corollary — the honest-failure rule (founder §2):** an evaluation that *could not read* its
inputs must not be treated as "no need found." Actions raised from a failed read are a silent
false-negative, which in clinical work is the dangerous direction. The evaluator must distinguish
*no data* from *could not obtain data*, and the second must never silently close or suppress an
action. **This is the "failed lookup is not an empty list" lesson applied to intelligence.**

## Ruling 2 — Action identity and deduplication (DB-enforced, per §3)

**Identity key:** `(practice_id, patient_id, scope_type, scope_id, action_type, subject_key)`

- `scope_type/scope_id` — encounter, claim, appointment, or patient-level (`scope_type='patient'`).
- `subject_key` — the *specific thing* the action is about, produced by the rule that raised it
  (e.g. `a1c_overdue`, `document:procedure_note`, `claim_defect:missing_pos`). Stable across
  evaluations; it is what makes two evaluations recognisable as the same need.

**Enforcement:** a **partial unique index over open states only**. One open action per identity;
terminal rows do not block. This is the DB-enforced idempotency the founder requires, and it must
exist in the first migration — not added later, because "later" means after the duplicates.

**Re-raise policy (the part that is easy to get wrong):**

| Prior state for the same identity | On re-evaluation |
|---|---|
| **open** | reconcile with the existing row — refresh evidence/rank/due. **Never insert.** |
| **dismissed** | **suppressed by default.** A machine must not resurrect a human decision. |
| **satisfied / completed** | may raise a NEW action **only if** the evidence fingerprint differs |
| **superseded** | never re-raised; the successor owns the identity |

**Evidence fingerprint** — a hash over the evidence that justified the action (the
`supporting_evidence_ids` set + rule id + version). It is what lets us distinguish *the same need
again* from *a genuinely new situation*. Without it, "suppress dismissed" becomes "suppress
forever," which is the opposite failure: a patient's second, real problem silenced by last month's
dismissal. **The fingerprint is the mechanism that makes both directions safe, and it is the single
most important field in this contract.**

## Ruling 3 — Supersession ≠ dismissal (distinct terminal states, distinct authority)

| State | Who may set it | Meaning | May a machine re-raise? |
|---|---|---|---|
| `open` | engine | needs attention | n/a |
| `accepted` | human | judged real, work owned | n/a |
| `dismissed` | **human only** | considered and declined, with reason | **never** |
| `satisfied` | engine (derived) | the need no longer holds | only on new fingerprint |
| `completed` | service, on execution | the action was carried out | only on new fingerprint |
| `superseded` | **engine only** | replaced by a better/updated action | no — successor owns it |
| `expired` | engine (time) | window passed without action | policy-dependent |

**The rule with teeth: no machine transition may terminate a human judgment, and no human
transition may be silently overwritten by a machine.** Dismissal and supersession being one state
today is why this must be fixed before re-evaluation is automated (founder §3 build order).

## Ruling 4 — Target executable capability, not target service

An action declares **`target_capability`** — a stable verb like `document.complete`,
`order.create`, `appointment.schedule`, `claim.correct` — resolved at execution time to whatever
module implements it. **It must never name a module.** Naming `PatientRoutes` in an action row
couples the work model to today's 468-module layout and guarantees a rewrite when the layout moves.

**Non-negotiable corollary:** an action whose `target_capability` has no registered implementation
is a **dead end presented to a human as work** — the exact defect already ruled on in the register
(`launchWorkflow` binding to no operation). Therefore:
- capabilities live in a **registry**, and
- **an action type referencing an unregistered capability is a build-time failure**, not a runtime
  surprise. I will own that checker when the contract is implemented; it is the same shape as the
  route-auth and PMP-segregation ratchets, and it is cheap.

## Ruling 5 — Server-side transition legality

**Legal transitions are enforced in one server-side function, not by the surfaces.** Kanban, Action
Center, encounter panels and any future reasoner all call the same transition; none of them may
write `status` directly.

```
open ──► accepted ──► completed
  │         │└──────► dismissed(human)
  │         └───────► assigned/reassigned ──► completed
  ├───────► dismissed (human, reason REQUIRED)
  ├───────► satisfied (engine, derived)
  ├───────► superseded (engine, successor id REQUIRED)
  └───────► expired (engine, time)
terminal: completed · dismissed · satisfied · superseded · expired
```

Illegal and refused: any terminal → `open` by a machine · `completed` without an execution
reference · `dismissed` without a reason · `superseded` without a successor. **A refused transition
returns an error; it does not silently no-op** — silent no-ops are how this fleet has previously
shipped surfaces that appeared to work.

## Ruling 6 — Shared workflow definition boundaries

**Definitions declare; instances record. Neither may hold the other's content.**

- **Definitions** (CF's rule packs, workflow definitions) declare: under what conditions an action
  type is raised, its `target_capability`, its satisfaction condition, its role/authorization
  requirement, its due policy. Versioned, practice-scoped, no instance state.
- **Instances** (Action rows) record: this patient, this evidence, this owner, this decision, this
  outcome. No rule logic, no thresholds, no copies of definition text.
- **The join is by reference + version** (`rule_id`, `rule_version`), so a definition change never
  silently rewrites the meaning of a historical action. An action raised under v3 keeps saying it
  was raised under v3.

This is also the Oasis rule (§10): specialty variation is definition content, never a second
instance model.

---

## The contract shape (fields, not DDL — @AgentDB owns the physical design)

**Identity + scope:** practice · patient (via canonical Patient ID resolution, never a second
lookup) · scope_type/scope_id · action_type · **subject_key**
**Provenance:** proposed_by (rule | inference | service | human | future reasoner) · rule_id +
rule_version · evidence references · **evidence_fingerprint** · raised_at
**Meaning for the human:** reason (why) · consequence of inaction · rank/necessity
**Work state:** status · owner_role / owner_user · assigned_at · due_at · accepted/dismissed actor +
reason + timestamp
**Execution:** target_capability · authorization requirement · execution reference · completed_at
**Lineage:** supersedes / superseded_by · triggered_by (the causing action or event)
**Audit:** the ChangeAudit correlation id, so an action's whole life is reconstructable

**Seven of these already exist in `documentation_recommendation`** (proposer, evidence, reason,
necessity, disposition ledger, status, audit linkage). **The genuinely new fields are:**
`action_type`, `subject_key`, `evidence_fingerprint`, `target_capability`, `owner`, `due_at`,
`supersedes/superseded_by` — plus the partial unique index.

## Recommendation on the existing table (this matters, and it is easy to get wrong)

**Extend `documentation_recommendation` in place. Do not create a second table.**

A new `pfo_action` table alongside the existing one would create exactly the second store this
whole exercise exists to prevent, and would split live surfaces across two models mid-clinic.
Documentation becomes `action_type='document'` — a value, not a fork.

**Honest cost of my own recommendation:** the physical table name will be *wrong* for a while — a
table called `documentation_recommendation` holding a scheduling action is a real readability smell.
Mitigation: expose the contract under a canonical name (a view) and defer the physical rename to a
governed migration. **I would rather carry a misleading table name for a quarter than carry two
work models for a week.** @AgentDB may overrule this on persistence grounds — it is their call, and
I would want their reasoning in the register if they do.

---

## What I am explicitly NOT deciding

- **Physical schema, types, indexes, migration order** — @AgentDB (§13).
- **Which action types exist beyond `document`** — @AgentCF owns clinical semantics; the contract is
  deliberately type-agnostic.
- **How actions are presented** — @AgentUI; and per §5/§14, no fourth attention surface: Kanban and
  the Action Center become projections of this model, not new stores.
- **When any of it is built.** Founder §4 stands: the clinic journey comes first. This contract is
  ready when the fleet is, and not before.

## How this is proved (founder §12 — the acceptance standard)

The contract is only real when a journey can walk it. The first journey I would want @AgentDLP to
write — **and it can be written against `document` alone, before any new action type exists:**

> **starting state:** an encounter with an open documentation action ·
> **trigger:** re-evaluation runs twice · **decision:** the same need is recognised ·
> **observable:** still exactly ONE open action (not two) · **then:** a human dismisses it with a
> reason · **re-evaluation runs again** · **observable:** it does NOT come back ·
> **then:** the underlying evidence materially changes · **observable:** a NEW action appears,
> linked to the dismissed one, and the dismissal is still visible in history · **audit:** every
> transition attributable.

That single journey proves identity, idempotency, dismissal authority, fingerprint sensitivity and
lineage at once. **If it cannot be walked, the contract is not done — regardless of what the schema
says.**
