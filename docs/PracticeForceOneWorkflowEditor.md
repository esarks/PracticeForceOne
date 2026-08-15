---
title: "PracticeForceOneWorkflowEditor"
---

# PracticeForceOne — Workflow Editor

**Last reviewed: 2026-07-24**

**What it is:** a visual editor for the **Workflow Engine** definitions. A workflow is a *definition* (not code):
it describes the end-to-end path a patient/claim takes through the practice — the **steps**, how they **transition**,
which **Kanban lanes** each step covers, and **when a step is considered complete**. The runtime engines (the Kanban
board, the "next action" links, the step tracker) *read* this definition; nothing about the workflow is hard-coded.

- **URL:** `/ui/workflow-editor.html` · **Menu:** System → **Workflow Editor** (admin only)
- **Owner of the engine:** AgentDLP (Workflow Engine). The editor is the authoring surface over it.
- **Storage:** `engine_configs`, `config_type='workflow'`, scoped **per practice × stage** (see *Per-practice lifecycle*).

### The editor edits FOUR definitions (all `type=workflow`, joined by lane `id`)
| Section on the page | Stored as | Defines |
|---|---|---|
| **Kanban Lanes** (§1a) | `key=lanes` | *What lanes exist and how they look* — id, title, short label, role, order, hidden. |
| **Workflow Behavior** (§1b) | `key=<workflowId>` (e.g. `primary-visit`) | *The flow* — steps, transitions, the screen each maps to, completion rules. |
| **Blockers** (§1c) | `key=blockers` | *The "Why blocked" row content* — per blocker: label, explanation, fix button, root cause. |
| **Review Gates** (§1d) | `key=review_gate` | *Which reviews each lane requires* to advance, plus the review labels. |

The **board overlays the lanes catalog by `id`** (no catalog = today's lanes exactly). The workflow
definition drives the step rail / next-action links. Page order, top→bottom: **Lanes fields → [↓/↑] →
Lanes JSON → Workflow fields → [↓/↑] → Workflow JSON.**

---

## 1a. Kanban Lanes definition (`key=lanes`)

The **what lanes exist / how they look** catalog. Edit graphically (one row per lane) or as JSON.
Array order = board order; **All Work** is always pinned first.

```jsonc
[
  { "id": "review_registration", "title": "Review Registration", "shortLabel": "Reg",
    "role": "front_desk", "hidden": false },
  { "id": "insurance_exception", "title": "Insurance Exception", "shortLabel": "Ins", "role": "front_desk" }
  // …
]
```

| Field | Meaning |
|---|---|
| `id` | **Join key** — matches the board lane + the workflow steps' `lanes[]`. **Don't change** for an existing lane (orphans its cards). |
| `title` | Column heading. |
| `shortLabel` | Compact label (lane nav / narrow views). |
| `role` | Band/color: `front_desk` · `clinical` · `provider` · `billing` · `denial` · `all`. |
| `hidden` | `true` removes the lane (and its cards) from the board. |
| *(array order)* | Board column order (All Work pinned first). |

**Phase 1 vs Phase 2:** today this controls lane **presentation** (rename / reorder / show-hide / add).
Renaming/reordering/hiding **existing** lanes works fully (the `id`, and therefore card assignment,
is unchanged). A **brand-new** lane id shows an **empty** column until **Phase 2** moves the status→lane
**assignment** rules out of `WorkflowBoardRoutes` into the definition. Default catalog = the 22 built-in
lanes (`all_work` … `blocked_review`).

---

## 1b. Workflow Behavior definition (`key=<workflowId>`)

Pick the workflow in the **Workflow** dropdown (e.g. **Patient Visit** `primary-visit`). It has two parts:

### Workflow header
| Field | Meaning |
|---|---|
| **Workflow name** | Human label ("Patient Visit"). |
| **Description** | One line describing the workflow. |
| **Lane order** | Comma-separated list of Kanban **lane ids**, in the order they appear on the board (left → right). This is the board's column sequence. |
| **Cross-cutting lanes** | Lanes that apply across the whole workflow rather than a single step (e.g. `blocked_review`). |

### Steps
The workflow is an ordered list of **steps**. Each step is one stage of work with these fields:

| Field | Meaning |
|---|---|
| **Step id** | Unique id for the step (referenced by other steps' Prev/Next). |
| **Label** | What the step is called ("Appointment", "Eligibility", "Encounter"…). |
| **Entity** | The domain record the step acts on: `appointment`, `encounter`, `claim`, … |
| **Screen (CF formType)** | The Configurable-Form screen this step opens (e.g. `appointments_cf`). |
| **URL** | Where the step's action link goes, e.g. `/ui/cf.html?formType=appointments_cf&patientId={patientId}`. `{patientId}` and similar tokens are filled in at runtime. |
| **Lanes** | Comma-separated Kanban **lane ids** this step covers. A step can span several lanes. |
| **Prev step / Next step** | The step ids before/after this one — the **transitions** that define the path. |
| **Complete when — entity / status in** | The **completion rule**: the step is done when its entity reaches one of the listed statuses (e.g. entity `appointment`, status in `checked_in, roomed, checked_out, completed`). This is how the engine knows to advance a patient to the next step. |

> **How it drives the app:** `Lane order` lays out the Kanban board's columns. Each **step** ties a set of lanes to a
> **CF screen** (the "open/next-action" link) and a **completion rule**. When a record hits a completing status, the
> engine advances it along the **Prev/Next** transitions. Change the definition here → the board and its actions change,
> no deploy.

---

## 1c. Blocker Catalog (`key=blockers`)

The **content of the Kanban "Why blocked" rows** — previously hardcoded in the board renderer, now a definition.
For each blocker (matched by id or substring) you set its **label**, **explanation** sentence, **fix button**
(label + url), and **root-cause** bucket. Edit one row per blocker, or as JSON.

```jsonc
{
  "portal_registration": {
    "label": "Portal registration pending review",
    "explanation": "Portal registration must be reviewed and linked to the chart.",
    "fix": { "label": "Review portal packet", "url": "{nextHref}" },
    "rootCause": "portal_review"
  },
  "eligibility": {
    "label": "Eligibility not cleared",
    "explanation": "Coverage or eligibility evidence is missing or not cleared for rooming.",
    "fix": { "label": "Fix insurance", "url": "{nextHref}" },
    "rootCause": "insurance_auth"
  }
  // …
}
```

| Field | Meaning |
|---|---|
| *(key)* | Blocker **id**, or a **substring** to match against the card's blocker codes (e.g. key `ar_` matches `ar_payer_balance`). Exact id wins; otherwise the first substring hit. |
| `label` | The chip / row heading text. |
| `explanation` | The sentence shown under the label in the Why-Blocked row. |
| `fix.label` | The fix button's text (e.g. "Fix insurance", "Work denial"). |
| `fix.url` | The fix button's link. Tokens: `{nextHref}` = the card's primary action link; `{denialDeepLink}` = the claim's denial deep-link. |
| `rootCause` | The bucket used to group cards sharing a blocker (the "Focus all" / bulk-clear grouping). |

**Fallback:** any blocker with no catalog entry renders today's **built-in** label/explanation/fix (safe — a blank
catalog = the board exactly as it is now). This is the first slice of the **Business-Rules layer**: the *reason text*
is now authorable; *which* blockers a card carries is still computed by the board (that's a later conversion).

---

## 1d. Review Gates (`key=review_gate`)

Which **sign-off reviews each lane requires** before a card can advance, plus the **display labels** for each review
type. Previously the hardcoded `REVIEW_GATE_LANES` / `REVIEW_GATE_LABELS` maps.

```jsonc
{
  "lanes": {
    "review_registration": ["registration", "chart"],
    "needs_pre_check_in":  ["check_in"],
    "patient_arrived":     ["check_in"],
    "insurance_exception": ["insurance"]
  },
  "labels": { "registration": "Registration", "chart": "Chart", "insurance": "Insurance", "check_in": "Check-in" }
}
```

| Part | Meaning |
|---|---|
| `lanes.<laneId>` | The list of **review types** that lane's cards must have attested before they advance (the checklist in the Review Gate panel). Empty list = no gate. |
| `labels.<reviewType>` | The human label for a review type wherever it's shown ("Advance blocked: Registration, Chart review required."). |

**Fallback:** a lane with no entry uses today's built-in gate; an unmapped review type shows its raw id.

---

## 2. Per-practice lifecycle — the core idea

Every practice has its **own** workflow, in **two stages**:

- **Pre-production (`preprod`)** — your **draft**. Edit here. The live clinic is *not* affected.
- **Production (`prod`)** — what the **runtime actually uses** for that practice.
- **Global template** — the master copy that **new practices are cloned from**. It's the starting point, not a live menu.

At the top of the editor:

- **Practice** dropdown — *Global template*, or a specific clinic.
- **Stage** dropdown — *Pre-production* or *Production* (hidden when you're on the Global template).

So the mental model is: **edit in a practice's Pre-production → review → Promote to Production.** Nothing you type is
live until you Promote (or you save directly while on the Production stage — allowed, but you'll normally use preprod).

---

## 3. How to use it — walkthroughs

### A. Tweak a practice's live workflow safely
1. **Practice** = your clinic · **Stage** = **Pre-production**.
2. Pick the **Workflow** (e.g. Patient Visit).
3. Edit steps — rename a label, change a step's **Screen/URL**, adjust **Lanes**, fix a **Next** transition, or change a
   **Complete when** status. Add a step with **+ Step**, reorder with **↑ ↓**, remove with **✕**.
4. Click **Save** — this saves to *Pre-production* (still not live).
5. When it looks right, click **▶ Promote to Production** — this publishes your practice's pre-production definitions to
   production; the change is now live for that clinic. (Promote moves *all* of that practice's definition types at once —
   see note below.)

### B. Start a new practice from the template
1. **Practice** = the new clinic · **Stage** = Pre-production.
2. Click **Copy from…**, enter `global` (the template) — this seeds the new practice's pre-production from the Global
   template. Adjust as needed, then **Promote to Production**.

### C. Copy a workflow from one practice to another (and across stages)
Use the dedicated **Definition Propagation** tool (Admin → **Definition Propagation**) — it's built for exactly this:
1. **Source** = the practice you're copying *from*, **Source stage** = e.g. Pre-production.
2. **What to copy** = **Workflows only**.
3. **Destination** = one or more practices, **Destination stage** = e.g. Production.
4. Copy. This copies the workflow definition from the source (practice, stage) into each destination (practice, stage),
   in **either** direction (preprod↔prod). Copying *into* Production overwrites that clinic's live workflow (you'll be
   asked to confirm).

> Use the **Workflow Editor** to *author/edit* one workflow; use **Definition Propagation** to *move* workflows between
> practices/stages in bulk.

---

## 4. The JSON view + Push / Pull

Both sections (Lanes and Workflow Behavior) show a **JSON** box that mirrors the fields. Between the fields
and the JSON are two sync controls:

- **↓ Fields to JSON** — regenerate the JSON from the current field values (push down).
- **↑ JSON to Fields** — parse the JSON and repopulate the fields (pull up).

So you can edit either way and sync. Then persist: **Save Lanes** for the lanes catalog, **Save** for the
workflow definition (both write to the selected Practice × Stage). The graphical form and the JSON always
edit the same definition.

---

## 5. Guardrails

Before saving, the editor warns (but doesn't block) on likely mistakes:
- a step's **Next/Prev** points at a step id that doesn't exist,
- a step lists a **Lane** that isn't in **Lane order**.

You can save anyway (some setups are intentional), but these usually indicate a typo. *(Deeper engine-level validation
is owned by the Workflow Engine — AgentDLP; the editor's checks are a first line of defense.)*

---

## 6. Quick reference

| Action | Where |
|---|---|
| Edit a workflow's steps/transitions/lanes | Workflow Editor |
| Save a draft | **Save** (writes to the selected Practice + Stage) |
| Make a draft live for a clinic | **▶ Promote to Production** |
| Seed a new/other practice from the template | **Copy from…** → `global`, or **Definition Propagation** |
| Move a workflow between practices/stages in bulk | **Definition Propagation** (What to copy = *Workflows only*) |
| Preview vs live | **Stage** = Pre-production vs Production |

---

## 7. Live reference — Bay Area Cardiology (fully built-out example)

The **Bay Area Cardiology** practice has all four definitions written out explicitly (prod + preprod), so
you can open any of them and see a complete, real example rather than an empty fallback:

| Definition | Where to see it | Editor |
|---|---|---|
| **Lanes catalog** (`key=lanes`, 22 lanes) | Workflow Editor → *Lanes* section | this page |
| **Workflow behavior** (`key=primary-visit`, 10 steps) | Workflow Editor → *Workflow Behavior* | this page |
| **Card face** (21 lanes) | Kanban Editor → *Card face* | `PracticeForceOneKanbanEditor.md` |
| **Right panel** (21 lanes, full section lists) | Kanban Editor → *Right panel* | `PracticeForceOneKanbanEditor.md` |
| **Every lane's card + panel JSON** (all 21, live) | full copy-from reference | **`PracticeForceOneKanbanLaneReference.md`** |

### Per-lane card + panel JSON — see every current setting

**`PracticeForceOneKanbanLaneReference.md`** lists, for **all 21 lanes**, the live `kanban_card` and the
full `kanban_panel` **sections** JSON — including the dynamic **Next Resolution** (`nextResolution`) and
**Review Gate** (`gate`) sections. Below is one lane inline so you can see the shape (Review Registration —
the only front-desk lane that carries a Review Gate):

```jsonc
// kanban_panel["review_registration"]  — the ordered section list = the whole right panel
{ "sections": [
    { "type": "lead" },                                  // name + chips + Next Resolution header
    { "type": "details", "title": "Registration", "rows": [
        { "label": "Patient",            "field": "patientName" },
        { "label": "DOB",                "field": "patientDob" },
        { "label": "Phone",              "field": "phone" },
        { "label": "Requested provider", "field": "providerName" },
        { "label": "Requested reason",   "field": "visitReason" } ] },
    { "type": "gate" },            // ← Review Gate checklist (which reviews from key=review_gate)
    { "type": "nextResolution" },  // ← Next Resolution panel (label from the workflow step)
    { "type": "autopilots" }, { "type": "whyBlocked" }, { "type": "why" },
    { "type": "move" }, { "type": "scheduling" }, { "type": "technical" }
] }
```

The `details` **rows** are yours to define (`label` + `field`). The `gate` and `nextResolution` sections have
no rows of their own — their **content** comes from the other definitions: the **Review Gate** checklist from
`key=review_gate` (§1d), the **Next Resolution** label from the workflow step (§1b), and any **Why-blocked**
rows from `key=blockers` (§1c). The panel def only decides that a section **shows** and **where**.

Compact lanes-catalog example (one entry):
```jsonc
[ { "id": "patient_scheduled", "title": "Patient Scheduled", "shortLabel": "Appt",
    "role": "front_desk",
    "subtitle": "Appointments on the selected business date for arrival and check-in." } ]
```
The `subtitle` is the **"Why:"** line in the card's Next Resolution panel — edit it here and the panel
updates. (The Next Resolution **title + buttons** are being migrated from hardcoded `nextAction` into the
workflow **steps** so they become editable here too — see the step's `label` / `url` / `prev` / `next`.)

**Related pages:** `PracticeForceOneKanbanEditor.md` (card + panel), `PracticeForceOneMenuKey.md` (menu),
the per-practice definition model (`PerPracticeDefinitionsPlan.md`, ArchitectsCompanion repo).

*Maintained by AgentUI. The Workflow Engine itself is owned by AgentDLP; this page documents the editor.*

## Review Epilog — 2026-07-24

- Content accurate as of build 1943; the four-definition model (lanes/workflow/blockers/review_gate in `engine_configs`) is current and matches the live system.
- Bay Area Cardiology example remains the canonical fully-built-out reference practice; all cross-links to KanbanEditor and KanbanLaneReference docs are valid.
- The workflow engine is a generic Runtime Engine reading Definitions — consistent with the Platform Architecture North Star (FOUNDER 2026-07-19): no healthcare knowledge lives in the engine.
- Definition Propagation tool (§3C) is live; per-practice lifecycle (preprod → prod → promote) is operational.
