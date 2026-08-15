---
title: "PracticeForceOneKanbanEditor"
---

# PracticeForceOne Kanban Editor — Definition Reference

Last updated: 2026-07-26
**Last reviewed: 2026-07-26** (re-derived from `ui/public/kanban.js`; runtime behaviour changes of 2026-07-26 live on build 1974)
Status: Authoritative reference for every tag and sub-tag recognized by the Kanban Engine.

Related: [PracticeForceOneKanban.md](PracticeForceOneKanban.html)

---

## Overview

The Kanban Engine is definition-driven. All card face layouts, right-panel section orders, action
buttons, lane transitions, chip sets, blocker copy, and review gates come from **six** row shapes in
`engine_configs`:

| `engine_configs.type` | `engine_configs.key` | Controls | Section |
|---|---|---|---|
| `kanban_card` | `lanes` | Lane catalog (order, titles, roles, transitions) | §1 |
| `kanban_card` | `<laneId>` | Card face layout (rows, actions, subtitle) | §2 |
| `kanban_panel` | `<laneId>` | Right-panel section order and content | §3 |
| `kanban_card` | `blockers` | Blocker catalog — label / explanation / fix link / root cause | §11.1 |
| `kanban_card` | `review_gate` | Review-gate checklist per lane + review-type labels | §11.2 |
| `kanban_override` | `overrides` | Per-card lane overrides written by `advance` / `revert` | §11.3 |

The Kanban Editor at `/ui/kanban-editor.html` writes and reads these rows. You can also PUT them
directly via `/api/engine-configs`. Every row is resolved **per practice × stage** (pre-production /
production); a missing row falls back to hardcoded behavior, never to an error.

---

## 1. Lane Catalog — `kanban_card` key=`lanes`

### Where lanes are defined

Lane definitions live in two places, resolved at runtime in this order:

1. **DB override (per practice/stage):** `engine_configs` row with `type=kanban_card`, `key=lanes`.
   The Kanban Editor's **Lanes** mode writes here. This is the canonical location for any
   per-practice customization of lane order, titles, roles, or transitions.

2. **Code fallback (`DEFAULT_LANES` in `kanban-editor.js`):** When no DB row exists for a practice,
   the engine falls back to the hardcoded `DEFAULT_LANES` array in
   `ui/public/js/kanban-editor.js`. This defines the global workflow sequence and all lane IDs.
   Editing `DEFAULT_LANES` requires a code deploy; editing the DB row does not.

**Rule:** always PUT a `kanban_card/lanes` row for a practice before changing lane order or adding
lane-specific card/panel definitions — the fallback is global, not practice-aware.

The full `DEFAULT_LANES` sequence (code baseline as of 2026-07-23):

```
review_registration, patient_needs_schedule, patient_scheduled, patient_arrived,
insurance_exception, ready_for_intake, ready_to_encounter, ready_for_provider,
visit_in_progress, in_room, provider_visit_complete, clinical_follow_up,
documentation_incomplete, ready_to_sign, discharge_pending, post_visit_paperwork,
ready_for_coding, ready_to_claim, claim_needs_scrub, ready_to_submit,
claim_submitted, claim_in_adjudication, claim_payment_received, claim_exception,
payer_response, billing_hold, prior_auth_pending, denial_appeal, ar_follow_up,
awaiting_scheduling, appointment_confirmed, needs_pre_check_in, patient_balance,
blocked_review
```

The `value` is an **ordered array** of lane objects. Array order is the canonical workflow sequence
(left → right on the board); `advance`/`revert` on each lane drive the definition-based forward and
backward transitions rendered by the `move` panel section and `action-button`/`undo-button` controls.

> **What a definition transition actually does.** `advance.to` / `revert.to` move the card **on the
> board only** — the engine writes a `kanban_override` row (`{ "<cardId>": "<laneId>" }`, see §11.3)
> and re-renders. It does **not** write the underlying entity's status: a definition `advance` on a
> `ready_for_intake` card does not check the patient in or set `appointments.status`. Backend status
> writes come from the engine's built-in `card.nextAction` (the "Send to Room", "Check in" etc.
> buttons the board computes per lane), which is what `action-button` falls through to when the lane
> has no `advance.to`. Use definition transitions for board/workflow shaping; leave real state
> changes to the computed action.

### Lane object

| Tag | Type | Required | Description |
|---|---|---|---|
| `id` | string | yes | Unique lane identifier — must match `kanban_card` and `kanban_panel` keys |
| `title` | string | yes | Display name shown in lane headers and right-panel lead |
| `shortLabel` | string | | Abbreviated label for narrow board columns |
| `role` | string | | Staff role that owns this lane: `all`, `front_desk`, `clinical`, `provider`, `billing`, `admin`, `denial` |
| `hidden` | boolean | | `true` hides the lane column from the board view |
| `advance` | object | | Forward transition (see below) |
| `revert` | object | | Backward transition (see below) |

### `advance` / `revert` objects

| Tag | Type | Description |
|---|---|---|
| `to` | string | Destination lane ID |
| `label` | string | Button label (default: `"Advance"` or `"Undo"`) |
| `requireInputs` | string[] | Field keys that must be non-empty before the transition fires; the engine shows an error and focuses the first empty input |

Example:
```json
{
  "id": "ready_for_intake",
  "title": "Ready For Rooming",
  "role": "clinical",
  "advance": { "to": "ready_to_encounter", "label": "Send to Room", "requireInputs": ["roomNumber"] },
  "revert":  { "to": "patient_arrived",    "label": "Undo Check-In" }
}
```

---

## 2. Card Face Definition — `kanban_card` key=`<laneId>`

The `value` object controls what appears on each card in the board column.

### Top-level tags

| Tag | Type | Description |
|---|---|---|
| `rows[]` | array | **Primary layout.** Ordered list of row objects (see §2.1). When present, replaces the legacy layout entirely. |
| `subtitleFields[]` | string[] | Legacy. Field names joined into the subtitle line. Superseded by a `subtitle` row in `rows[]`. |
| `separator` | string | Separator for `subtitleFields` (default: `" | "`). |
| `subtitle` | string | Legacy. Static subtitle template with `{fieldName}` tokens. |
| `extraFields[]` | object[] | Legacy. Extra meta rows `{field, label}`. |
| `actions` | object | Button overrides (see §2.2). |

### 2.1 `rows[]` — card face rows

Each row renders one visual line on the card. Rows are rendered in order.

---

#### `type: "title"`

The card's primary identity line (patient name or record title) with an assignment chip.

| Tag | Type | Default | Description |
|---|---|---|---|
| `field` | string | `"title"` | Card field to render as the bold title |
| `showAssignment` | boolean | `true` | When true, renders the assignment chip (assigned-to name or role) next to the title |

The **VIP heart** (♥ filled when the patient has a chart note, ♡ otherwise; click opens the note
dialog) renders automatically *only* when `field` is `"title"` or omitted **and** the card carries a
`patientId`. Pointing `field` at any other card field silently drops the heart.

```json
{ "type": "title", "field": "title", "showAssignment": true }
```

---

#### `type: "field"`

A single field value rendered as a meta line, optionally with a label prefix.

| Tag | Type | Description |
|---|---|---|
| `field` | string | Card field name (see §5 for available token fields) |
| `label` | string | Optional prefix label (e.g. `"DOB"`) |
| `format` | string | `"date"` formats the value as a short date (`Jul 19, 2026`) |

```json
{ "type": "field", "field": "patientDob", "label": "DOB", "format": "date" }
```

---

#### `type: "subtitle"`

Multiple fields joined into a single meta line.

| Tag | Type | Default | Description |
|---|---|---|---|
| `fields` | string[] | | Card field names to join; empty/null values are skipped |
| `separator` | string | `" | "` | Join separator |

```json
{ "type": "subtitle", "fields": ["visitDate", "chiefComplaint", "providerName"], "separator": " | " }
```

---

#### `type: "chips"`

Status chip badges row.

| Tag | Type | Description |
|---|---|---|
| `fields` | string[] | Chip categories to include (ordered). Omit `fields` to render all chips. |

Available chip categories:

| Category | Renders |
|---|---|
| `status` | `card.chipStatus` — e.g. appointment status |
| `date` | `card.chipDate` — e.g. appointment date/time |
| `provider` | `card.chipProvider` — provider name chip |
| `room` | `card.chipRoom` — room assignment (styled blue) |
| `insurance` | Insurance-verified badge with copay (green checkmark) |
| `ai_priority` | AI priority score + factor chips (only when AI sort is active) |
| `due_now` | Red "due now" chip when the card is overdue |
| `stale` | Red "stale" chip when the card has not moved in too long |
| `blockers` | One red chip per active blocker |

```json
{ "type": "chips", "fields": ["status", "date", "provider", "blockers"] }
```

---

### 2.2 `actions` — button overrides

The `actions` object overrides the default button rendering on the card face and in the right-panel
lead block. The definition takes precedence over the backend-computed `card.nextAction`.

| Tag | Type | Description |
|---|---|---|
| `next` | object or object[] | Primary action button override (see below) |
| `secondary[]` | object[] | Secondary action links (up to 2 shown on card). **REPLACES the engine's built-in secondaries — see the warning below.** |
| `backward` | object | Backward navigation link |
| `showEvents` | boolean | `false` hides the Events button (default: `true`) |
| `showJourney` | boolean | `false` hides the Journey button (default: `true`) |
| `showDelete` | boolean | `false` hides the Delete button (default: `true`) |

> **⚠️ `secondary[]` replaces, it does not extend.** When a lane definition declares `secondary[]`,
> the engine's own secondary actions for that lane are dropped entirely. This is how "Open Encounter"
> silently disappeared from Rooming / Intake on 2026-07-26: the lane's definition listed only
> "Modify appointment", and the card's primary action is a status write, so nothing on the card
> reached the encounter. **If you declare `secondary[]`, re-declare every action you still want.**

> **Chrome flags follow the lane the card is RENDERED IN (since 2026-07-26).** `showEvents`,
> `showJourney` and `showDelete` are read from the *rendered* lane's definition first, then fall back
> to the card's own lane. This is what makes **All Work** configurable: it is an aggregate column
> holding other lanes' cards, so before this change its definition was inert and the per-lane
> `showDelete:false` values won. Set the flag on `all_work` to govern the All Work column; leave a
> flag unset there and each card keeps its own lane's behaviour.

#### `next` / `secondary[]` / `backward` objects

| Tag | Type | Description |
|---|---|---|
| `label` | string | Button/link label |
| `href` | string | URL template with `{fieldName}` tokens; when set, renders as an `<a>` link instead of a button |
| `action` | string | Built-in behavior instead of a link: `"advance"` (on `next`) or `"revert"` (on `backward`). See below. |
| `showWhen` | string | Card field name; item only renders when that field is truthy |
| `hideWhen` | string | Card field name; item is hidden when that field is truthy |

`next` may be an array — the engine picks the first entry whose `showWhen`/`hideWhen` conditions pass.

##### `action` values

| Value | Valid on | Behavior |
|---|---|---|
| `"advance"` | `next` | Renders the primary button as a lane advance: moves the card to the lane catalog's `advance.to` (§1) by writing a `kanban_override` row. With no `advance.to` on the lane it alerts *"Advance transition not configured for this lane."* |
| `"revert"` | `backward` | Renders the Back chip as a lane revert: moves the card to the lane catalog's `revert.to`. Without `action`, `backward` renders as a plain `href` link. |

**Precedence:** `href` wins over `action`. An entry with both renders as a link and the `action` is
ignored.

**Two caveats worth knowing before you author:**

1. **`action` is card-face only.** The card face honors `action: "advance"` / `"revert"`; the
   **right-panel** lead block renders `next` only when it has an `href` and otherwise falls back to
   the engine-computed action button, and renders `backward` only as an `href` link. So a def whose
   `next`/`backward` uses `action` shows the definition button on the card but the computed button in
   the panel. To drive the panel, use the `nextResolution` section's `action-button` / `undo-button`
   controls (§3.1) — those read the same lane catalog `advance.to` / `revert.to`.
2. **`action` on `secondary[]` is parsed but inert.** Secondary items render as links in both the
   card face and the panel; only `href` is honored. Give every secondary entry an `href`.

The live `ready_for_intake` card definition uses exactly this shape:

```json
"actions": {
  "next":     { "action": "advance", "label": "Next ->" },
  "backward": { "action": "revert",  "label": "<- Back" },
  "secondary": [
    { "label": "Modify appointment",
      "href": "/ui/cf.html?formType=appointments_cf&recordId={appointmentId}&practiceId={practiceId}",
      "showWhen": "appointmentId" }
  ],
  "showJourney": true,
  "showEvents": true,
  "showDelete": false
}
```

```json
"actions": {
  "next": [
    { "label": "Open Chart", "href": "/ui/chart.html?patientId={patientId}", "showWhen": "patientId" },
    { "label": "Create Patient", "href": "/ui/patient-new.html" }
  ],
  "secondary": [
    { "label": "Schedule", "href": "/ui/calendar.html?patientId={patientId}" }
  ],
  "backward": { "label": "Back to Arrived", "href": "#" },
  "showEvents": true,
  "showJourney": true,
  "showDelete": false
}
```

---

## 3. Right-Panel Definition — `kanban_panel` key=`<laneId>`

The `value` object controls the right panel shown when a card is selected.

### Top-level tags

| Tag | Type | Description |
|---|---|---|
| `sections[]` | array | Ordered list of panel section objects. The engine renders each section in order. |

### Section object — common fields

Every section supports:

| Tag | Type | Default | Description |
|---|---|---|---|
| `type` | string | | Section type key (required) — see §3.1 |
| `enabled` | boolean | `true` | Set `false` to hide this section without removing it from the definition |
| `title` | string | | Custom section heading (only used by sections that render a heading) |

### 3.1 Section types

---

#### `lead` — patient header

Renders: lane label, patient name (h3), card subtitle (p), and a chip row.

| Tag | Type | Description |
|---|---|---|
| `fields[]` | string[] | Chip categories to show in the lead chip row (same values as card-face `chips` row). Omit for all chips. |
| `controls[]` | array | When present, **replaces** the entire auto-rendered lead with custom controls (same control kinds as `nextResolution`). |

```json
{ "type": "lead", "fields": ["status", "date", "provider", "insurance", "blockers"] }
```

---

#### `details` — custom detail rows

Renders: a labeled grid of field/value pairs. Also aliased as `custom`.

| Tag | Type | Description |
|---|---|---|
| `title` | string | Section heading (default: `"Details"`) |
| `rows[]` | object[] | Each `{field, label}`: `field` is the card field name, `label` is the display label |

```json
{
  "type": "details",
  "title": "Claim Info",
  "rows": [
    { "field": "claimNumber", "label": "Claim #" },
    { "field": "payerName",   "label": "Payer" },
    { "field": "amountFmt",   "label": "Amount" }
  ]
}
```

---

#### `gate` — eligibility check panel *(auto)*

Renders: review gate checklist (sign-off required before advance) + registration review panel.
No configurable sub-tags. Include or exclude to show/hide the gate.

```json
{ "type": "gate" }
```

---

#### `nextResolution` — primary action section

Renders: the heading, instructions, inputs, and action buttons for moving the card.

| Tag | Type | Description |
|---|---|---|
| `controls[]` | array | Ordered controls. If empty or absent, the engine falls back to the legacy hardcoded panel for this lane. |

##### Control kinds

Controls are objects with a required `kind` field.

---

**`lane-badge`** — lane title label

Renders the lane's display title as a small label span. No other tags.

```json
{ "kind": "lane-badge" }
```

---

**`h3`** — patient name heading

| Tag | Type | Description |
|---|---|---|
| `field` | string | Card field to render; falls back to `patientName` then `title` |

```json
{ "kind": "h3" }
```

---

**`subtitle`** — subtitle paragraph

| Tag | Type | Description |
|---|---|---|
| `field` | string | Card field to render; falls back to `subtitle` |

```json
{ "kind": "subtitle" }
```

---

**`chip-row`** — inline chip badges

| Tag | Type | Description |
|---|---|---|
| `items[]` | array | Chip item objects (see below) |

Chip item kinds:

| `kind` | Tags | Description |
|---|---|---|
| `chip` | `field`, `class?` | Renders `card[field]` as a chip span |
| `chip-if` | `condition`, `label`, `class?` | Renders if condition is met: `"isDueNow"` or `"isStale"` |
| `chip-blockers` | `class?` | Renders one chip per active blocker |

```json
{
  "kind": "chip-row",
  "items": [
    { "kind": "chip",      "field": "priority" },
    { "kind": "chip-if",   "condition": "isDueNow", "label": "due now", "class": "kanban-chip blocker" },
    { "kind": "chip-blockers" }
  ]
}
```

---

**`heading`** — section heading

| Tag | Type | Description |
|---|---|---|
| `text` | string | Static heading text; renders as `<h4>` |

```json
{ "kind": "heading", "text": "Review Registration" }
```

---

**`paragraph`** — instruction paragraph

| Tag | Type | Description |
|---|---|---|
| `text` | string | Static paragraph text |

```json
{ "kind": "paragraph", "text": "Review the submitted registration, then approve or return." }
```

---

**`label`** — inline label span

| Tag | Type | Default | Description |
|---|---|---|---|
| `text` | string | | Static label text |
| `class` | string | `"kanban-next-resolution-label"` | CSS class |

```json
{ "kind": "label", "text": "Next step:" }
```

---

**`strong`** — bold card field value

| Tag | Type | Default | Description |
|---|---|---|---|
| `field` | string | | Card field path; dot-notation supported (e.g. `"nextAction.label"`) |
| `class` | string | `"kanban-next-resolution-action"` | CSS class |

```json
{ "kind": "strong", "field": "nextAction.label" }
```

---

**`reason`** — workflow reason text

| Tag | Type | Default | Description |
|---|---|---|---|
| `field` | string | | Card field path; falls back to the first workflow reason (`ctx.allReasons[0]`) |
| `prefix` | string | `""` | Static text prepended to the value |
| `class` | string | `"kanban-next-resolution-why"` | CSS class |

```json
{ "kind": "reason", "prefix": "Reason: " }
```

---

**`text-input`** — text input field

| Tag | Type | Default | Description |
|---|---|---|---|
| `field` | string | `"val"` | Key written to `data-ctrl-input-field`; referenced by `requireInputs` in lane transitions |
| `label` | string | | Visible input label |
| `placeholder` | string | `""` | Placeholder text |
| `maxlength` | number | `50` | Maximum character length |

Pre-populated from `card[field]` when a value exists.

```json
{ "kind": "text-input", "field": "roomNumber", "label": "Room #", "placeholder": "e.g. 3, B12", "maxlength": 20 }
```

---

**`action-button`** — primary advance button

| Tag | Type | Description |
|---|---|---|
| `label` | string | Button label; overrides lane catalog `advance.label` and default `"Advance"` |
| `action` | string | Special action: `"room"` fires the save-room endpoint instead of the lane transition |

Resolution order:
1. Lane catalog has `advance.to` → fires `executeDefinedTransition` (respects `requireInputs`)
2. `action: "room"` → fires save-room action
3. Neither configured → falls back to `renderDetailAction(card)` (backend-computed `nextAction`)

The `move` section is automatically suppressed when this control is present, to prevent duplicate buttons.

```json
{ "kind": "action-button", "label": "Mark Pre-Check-In Complete" }
```

---

**`undo-button`** — revert button

| Tag | Type | Description |
|---|---|---|
| `label` | string | Button label; overrides lane catalog `revert.label` and default `"Undo"` |

Resolution order:
1. Lane catalog has `revert.to` → fires `executeDefinedTransition` with revert
2. Otherwise → renders `card.undoAction` button if available

The `move` section is automatically suppressed when this control is present.

```json
{ "kind": "undo-button", "label": "Return to Scheduled" }
```

---

**`navigate-button`** — link / navigation button

| Tag | Type | Default | Description |
|---|---|---|---|
| `label` | string | `"Go"` | Link label |
| `href` | string | `"#"` | URL template with `{fieldName}` tokens |
| `class` | string | `"btn btn-secondary"` | CSS class |
| `showWhen` | string | | Card field name; renders only when truthy |
| `hideWhen` | string | | Card field name; hides when truthy |

```json
{ "kind": "navigate-button", "label": "Open Chart", "href": "/ui/chart.html?patientId={patientId}", "showWhen": "patientId" }
```

---

**`data-row`** — label/value row

| Tag | Type | Description |
|---|---|---|
| `field` | string | Card field path; dot-notation supported; row is omitted when the resolved value is empty |
| `label` | string | Row label; falls back to `field` name |

```json
{ "kind": "data-row", "field": "payerName", "label": "Payer" }
```

---

**`portal-arrival`** — portal arrival button

Renders the "Patient Arrived" button wired to the portal arrival action. Produces no output for
any lane other than `review_registration`. No configurable sub-tags.

```json
{ "kind": "portal-arrival" }
```

---

#### `autopilots` — one-tap automation *(auto)*

Renders: pre check-in, check-in, post-visit, portal kiosk, and eRx draft automation panels where
applicable. No configurable sub-tags.

```json
{ "type": "autopilots" }
```

---

#### `whyBlocked` — active blockers *(auto)*

Renders: a list of active blockers preventing the card from progressing. No configurable sub-tags.

```json
{ "type": "whyBlocked" }
```

---

#### `why` — workflow context

Renders: a bulleted list of workflow reasons explaining why the card is in this lane.

| Tag | Type | Default | Description |
|---|---|---|---|
| `title` | string | `"Why it's here"` | Section heading |

```json
{ "type": "why", "title": "Why this claim is here" }
```

---

#### `denial` — denial resolution panel *(auto)*

Renders: CARC code decode, denial category, appeal deadline countdown, denied amount, and action
buttons (Create denial record / Mark resolved / Write-off). Drawn from card denial data.
Intended for the `denial_appeal` lane. No configurable sub-tags.

```json
{ "type": "denial" }
```

---

#### `arFollowup` — A/R resolution panel *(auto)*

Renders: outstanding balance, days in A/R, follow-up note input, and action buttons (Status inquiry /
Add follow-up note). Drawn from card A/R data. Intended for the `ar_followup` lane.
No configurable sub-tags.

```json
{ "type": "arFollowup" }
```

---

#### `visitInProgress` — encounter action panel *(auto)*

Renders: primary encounter action (Open Encounter) and "Mark Ready to Sign" button when available.
Intended for the `visit_in_progress` lane. No configurable sub-tags.

```json
{ "type": "visitInProgress" }
```

---

#### `readyToSign` — signature panel *(auto)*

Renders: primary encounter action, "Open Encounter" link, and "Return to In Progress" button when
available. Intended for the `ready_to_sign` lane. No configurable sub-tags.

```json
{ "type": "readyToSign" }
```

---

#### `clinicalFollowUp` — task action panel *(auto)*

Renders: due date (when present), "Complete Task" / "Cancel Task" / "Open Chart" buttons for
`entityType = clinical_follow_up` cards, or primary action + resolve button for generic follow-ups.
Intended for the `clinical_follow_up` lane. No configurable sub-tags.

```json
{ "type": "clinicalFollowUp" }
```

---

#### `move` — advance / revert *(auto)*

Renders: the Advance and Revert buttons from the lane catalog (`advance.to` / `revert.to`).

**Suppressed automatically** when the `nextResolution` section already contains `action-button` or
`undo-button` controls, to prevent duplicate buttons.

No configurable sub-tags.

```json
{ "type": "move" }
```

---

#### `scheduling` — scheduling panel

Renders a scheduling context block.

| Tag | Type | Default | Description |
|---|---|---|---|
| `title` | string | `"Scheduling"` | Section heading |
| `controls[]` | array | | When present, renders only `data-row` and `navigate-button` items (other kinds filtered out). Omit for the default panel (appointment date + "Schedule appointment" link). |

```json
{
  "type": "scheduling",
  "title": "Appointment",
  "controls": [
    { "kind": "data-row",        "field": "apptWhen", "label": "Appointment" },
    { "kind": "navigate-button", "label": "Open Calendar", "href": "/ui/calendar.html?patientId={patientId}" }
  ]
}
```

---

#### `technical` — patient & card details

Renders a collapsible `<details>` block of patient and card data.

| Tag | Type | Default | Description |
|---|---|---|---|
| `title` | string | `"Patient & technical details"` | Summary label for the `<details>` element |
| `rows[]` | array | (all fields) | Named technical fields to show. Each entry is a string key or `{field, label}`. Omit for the full default set. |

Available technical field keys:

| Key | Default label | Value |
|---|---|---|
| `name` | Name | Patient name / card title |
| `phone` | Phone | Patient phone from directory |
| `address` | Address | Patient address from directory |
| `insurance` | Insurance | Patient primary insurance |
| `entity` | Entity | `entityType` + `entityId` |
| `sourceMarker` | Source marker | Source ownership marker |
| `cardId` | Card identity | `sourceRecordKey` / `cardId` / `id` |
| `ownerRole` | Owner role | Card owner role |
| `assignment` | Assignment | Assigned-to text |
| `dueAt` | Due / event date | Formatted due date |
| `ageMinutes` | Age in workflow | Human-readable age (e.g. `"3h 12m"`) |
| `sourceRecord` | Source record | Source record summary label |

```json
{
  "type": "technical",
  "title": "Card details",
  "rows": ["name", "phone", "insurance", "entity", "cardId", "dueAt"]
}
```

---

## 4. `resolveField` — field path syntax

The `field` tag in controls and rows uses a resolver that looks up values in this order:

1. `card[field]` — direct card property
2. `card.nested.path` — dot-notation traversal (e.g. `"nextAction.label"`)
3. `reasons[0]` → `ctx.allReasons[0]` — indexed array notation for workflow reasons
4. `ctx[field]` — rendering context: `appointmentWhen`, `patientPhone`, `patientAddress`, `patientInsurance`, `allReasons`
5. `ctx.p[field]` — patient directory row

Returns empty string when not found.

---

## 5. Token fields — `{fieldName}` in `href` templates

`resolveHref` replaces `{fieldName}` with `encodeURIComponent(card[fieldName])`.

```
apptWhen          providerName       visitReason        visitDate
chiefComplaint    claimLabel         amountFmt          payerName
patientName       patientDob         priority           dueAt
insuranceCopay    title              claimNumber        balance
room              roomNumber         assignedTo         mrn
phone             address            primaryInsurance   entityType
entityId          ownerRole          reviewTypeLabel    registrationStatus
practiceName      appointmentLinked  submittedWhen      scheduleStatus
preferredTime     patientDobLabel    subjectLabel       providerNameDisplay
formattedDueAt    stateLabel         roomDisplay        cardNote
checkInId         appointmentId      encounterId        patientId
practiceId        portalUserId
```

---

## 6. Canonical section order

The editor's "Insert default template" button uses this order. Sections not in `sections[]` are not rendered.

```
lead → details → gate → nextResolution → autopilots → whyBlocked → why →
denial → arFollowup → visitInProgress → readyToSign → clinicalFollowUp →
move → scheduling → technical
```

---

## 7. Complete panel example — `needs_pre_check_in`

```json
{
  "sections": [
    { "type": "lead", "fields": ["status", "date", "provider", "insurance", "blockers"] },
    { "type": "gate" },
    {
      "type": "nextResolution",
      "controls": [
        { "kind": "heading",       "text": "Pre Check-In" },
        { "kind": "paragraph",     "text": "Verify demographics, insurance, and consent forms before the patient arrives." },
        { "kind": "action-button", "label": "Mark Pre-Check-In Complete" },
        { "kind": "undo-button",   "label": "Back to Scheduled" }
      ]
    },
    { "type": "autopilots" },
    { "type": "whyBlocked" },
    { "type": "why" },
    { "type": "move" },
    { "type": "scheduling" },
    { "type": "technical" }
  ]
}
```

---

## 8. Complete example — adding `test_review_lane` lane + right panel

This example adds a custom review lane between *Patient Needs Appointment* and *Patient Scheduled*.

### Step 1 — Lanes catalog (`kanban_card` key=`lanes`)

The lanes array uses four fields per entry: `id`, `title`, `shortLabel`, `role`.
Add your new lane at the position you want it to appear on the board.
The full array with `test_review_lane` inserted after `patient_needs_schedule`:

```json
[
  { "role": "all",        "shortLabel": "All",   "id": "all_work",              "title": "All Work" },
  { "role": "front_desk", "shortLabel": "Reg",   "id": "review_registration",   "title": "Review Registration" },
  { "role": "front_desk", "shortLabel": "Appt?", "id": "patient_needs_schedule","title": "Patient Needs Appointment" },
  { "id": "test_review_lane", "title": "Test Review Lane", "shortLabel": "Test", "role": "all" },
  { "role": "front_desk", "shortLabel": "Appt",  "id": "patient_scheduled",     "title": "Patient Scheduled" },
  { "role": "front_desk", "shortLabel": "Arr",   "id": "patient_arrived",       "title": "Patient Arrived" },
  { "role": "front_desk", "shortLabel": "Ins",   "id": "insurance_exception",   "title": "Insurance Exception" },
  { "role": "clinical",   "shortLabel": "Room",  "id": "ready_for_intake",      "title": "Ready For Rooming" },
  { "role": "clinical",   "shortLabel": "Intk",  "id": "ready_to_encounter",    "title": "Rooming / Intake In Progress" },
  { "role": "provider",   "shortLabel": "Prov",  "id": "ready_for_provider",    "title": "Ready For Provider" },
  { "role": "provider",   "shortLabel": "Enc",   "id": "visit_in_progress",     "title": "Provider Encounter In Progress" },
  { "role": "clinical",   "shortLabel": "F/U",   "id": "clinical_follow_up",    "title": "Clinical Follow-Up" },
  { "role": "provider",   "shortLabel": "Doc",   "id": "documentation_incomplete","title": "Provider Documentation Incomplete" },
  { "role": "provider",   "shortLabel": "Sign",  "id": "ready_to_sign",         "title": "Ready To Sign Encounter" },
  { "role": "billing",    "shortLabel": "Code",  "id": "ready_for_coding",      "title": "Ready For Coding" },
  { "role": "billing",    "shortLabel": "Claim", "id": "ready_to_claim",        "title": "Ready To Claim" },
  { "role": "billing",    "shortLabel": "Scrub", "id": "claim_needs_scrub",     "title": "Claim Needs Scrub" },
  { "role": "billing",    "shortLabel": "Sub",   "id": "ready_to_submit",       "title": "Ready To Submit" },
  { "role": "billing",    "shortLabel": "Payer", "id": "payer_response",        "title": "Payer Response Needed" },
  { "role": "denial",     "shortLabel": "Den",   "id": "denial_appeal",         "title": "Denial / Appeal Needed" },
  { "role": "billing",    "shortLabel": "A/R",   "id": "ar_follow_up",          "title": "A/R Follow-Up" },
  { "role": "front_desk", "shortLabel": "Bal",   "id": "patient_balance",       "title": "Patient Balance Needed" },
  { "role": "all",        "shortLabel": "Blk",   "id": "blocked_review",        "title": "Blocked / Needs Review" }
]
```

The new entry is the only change from the base catalog — position in the array controls column order on the board.

### Step 2 — Right panel (`kanban_panel` key=`test_review_lane`)

```json
{
  "sections": [
    { "type": "lead", "enabled": true },
    {
      "type": "why",
      "enabled": true,
      "title": "Chart review required before scheduling"
    },
    {
      "type": "details",
      "enabled": true,
      "title": "Patient details",
      "rows": [
        { "field": "apptWhen",         "label": "Appointment" },
        { "field": "providerName",     "label": "Provider" },
        { "field": "visitReason",      "label": "Visit reason" },
        { "field": "patientDobLabel",  "label": "Date of birth" },
        { "field": "primaryInsurance", "label": "Insurance" }
      ]
    },
    {
      "type": "nextResolution",
      "enabled": true,
      "controls": [
        { "kind": "heading",         "text": "Test Review" },
        { "kind": "paragraph",       "text": "Review the patient chart, verify demographics and insurance, then mark complete to schedule the appointment." },
        { "kind": "navigate-button", "label": "Open Chart", "href": "/ui/chart.html?patientId={patientId}", "showWhen": "patientId" },
        { "kind": "action-button",   "label": "Test Review Completed" },
        { "kind": "undo-button" }
      ]
    },
    { "type": "technical", "enabled": true }
  ]
}
```

### Notes

- The lane entry only needs `id`, `title`, `shortLabel`, `role` — no `advance`/`revert` required.
- The `action-button` and `undo-button` in the right panel fire the backend-computed next/undo action for the card, or fall back to prompting the user to move the card manually via the `move` section.
- Save the lanes array first, then save the right panel definition. Both must be saved under **Pre-production** before you promote.

---

## 9. Complete card face example — `needs_pre_check_in`

```json
{
  "rows": [
    { "type": "title",    "field": "title", "showAssignment": true },
    { "type": "field",    "field": "patientDob", "label": "DOB", "format": "date" },
    { "type": "subtitle", "fields": ["apptWhen", "providerName", "visitReason"], "separator": " | " },
    { "type": "chips",    "fields": ["status", "date", "insurance", "blockers"] }
  ],
  "actions": {
    "next": { "label": "Open Chart", "href": "/ui/chart.html?patientId={patientId}" },
    "showDelete": false
  }
}
```

---

## 10. Adding a right panel to a new lane — step by step

When you create a new lane (added to the lanes catalog, card face configured), the right panel
starts empty. Without a panel definition the board falls back to a generic `move` section showing
raw Advance/Revert buttons. Here is the minimal path to get a proper action button:

### Step 1 — Open the panel editor

In the Kanban Editor (`/ui/kanban-editor.html`):

1. **What to edit** → `Right panel (detail)`
2. **Lane** → select your new lane
3. **Stage** → Pre-production

An empty JSON textarea appears. Paste the minimal template below.

### Step 2 — Paste the minimal panel JSON

Replace the textarea contents with this, substituting your own text:

```json
{
  "sections": [
    { "type": "lead", "enabled": true },
    {
      "type": "nextResolution",
      "enabled": true,
      "controls": [
        { "kind": "heading",       "text": "YOUR HEADING" },
        { "kind": "paragraph",     "text": "Staff instructions before clicking complete." },
        { "kind": "action-button", "label": "YOUR COMPLETION LABEL" },
        { "kind": "undo-button" }
      ]
    }
  ]
}
```

- Replace `YOUR HEADING` with e.g. `"Pre-Authorization Review"`
- Replace `YOUR COMPLETION LABEL` with e.g. `"Mark Review Complete"`
- The `action-button` automatically fires your lane's `advance.to` destination
- The `undo-button` automatically fires your lane's `revert.to` destination
- No extra wiring — both read from the lane catalog entry you already defined

### Step 3 — Add optional context sections

Insert these between `lead` and `nextResolution` to give staff more context:

**Show a "why it's here" note:**
```json
{ "type": "why", "title": "Reason this card needs review" }
```

**Show patient data rows:**
```json
{
  "type": "details",
  "title": "Patient details",
  "rows": [
    { "field": "apptWhen",        "label": "Appointment" },
    { "field": "providerName",    "label": "Provider" },
    { "field": "visitReason",     "label": "Visit reason" },
    { "field": "patientDobLabel", "label": "Date of birth" },
    { "field": "primaryInsurance","label": "Insurance" }
  ]
}
```

**Add a chart link:**
```json
{ "kind": "navigate-button", "label": "Open Chart", "href": "/ui/chart.html?patientId={patientId}", "showWhen": "patientId" }
```
(Add this as a control inside `nextResolution.controls[]`, before the `action-button`.)

### Step 4 — Save and promote

1. Click **Save**
2. Verify the panel in the board preview (Pre-production)
3. Click **▶ Promote to Production** when ready

See §8 for the complete `example_review` right panel definition.

---

## 11. Business-rules & state definitions

Three more definition rows drive the board. They ride the same practice × stage plumbing as the
lane/card/panel rows, and each falls back to hardcoded behavior when absent.

### 11.1 Blocker catalog — `kanban_card` key=`blockers`

Drives the **Why Blocked** rows (`whyBlocked` panel section) and the blocker chips. The `value` is an
**object map**, not an array: each key is a blocker id (or a substring to match against one).

| Tag | Type | Description |
|---|---|---|
| `label` | string | Display label for the blocker chip/row (falls back to the raw blocker id) |
| `explanation` | string | Plain-English sentence shown under the blocker |
| `rootCause` | string | Why this happens — shown as the diagnostic line |
| `fix` | object | `{ label, url }` — renders a fix link. `url` supports two tokens: `{nextHref}` (the card's computed next destination) and `{denialDeepLink}` (the card's denial deep link); both fall back to the next href. |
| `match[]` | string[] | Extra substrings that should resolve to this entry |

**Resolution order:** exact key match → any entry whose key (normalized) is a substring of the
blocker → any entry with a `match[]` substring hit → no entry (hardcoded fallback).

```json
{
  "encounter_container_needed": {
    "label": "No encounter yet",
    "explanation": "This visit has no encounter container, so clinical intake cannot start.",
    "rootCause": "Check-in created the appointment but the encounter was never opened.",
    "fix": { "label": "Open check-in", "url": "{nextHref}" },
    "match": ["encounter container", "needs encounter"]
  }
}
```

### 11.2 Review gates — `kanban_card` key=`review_gate`

Drives the **review-gate checklist** (the `gate` panel section): which review types must be signed
off before a card advances, per lane.

| Tag | Type | Description |
|---|---|---|
| `lanes` | object | `{ "<laneId>": ["registration", "chart", …] }` — the review types required in that lane. A lane absent from the map uses the hardcoded gate. |
| `labels` | object | `{ "<reviewType>": "Display Label" }` — display name per review type |

```json
{
  "lanes":  { "review_registration": ["registration"], "insurance_exception": ["registration", "chart"] },
  "labels": { "registration": "Registration", "chart": "Chart" }
}
```

### 11.3 Card lane overrides — `kanban_override` key=`overrides`

Written by the engine, not usually hand-authored. The `value` is a flat map of card id → lane id:

```json
{ "appointment:2f1c…:ready_for_intake": "ready_to_encounter" }
```

Every definition `advance` / `revert` (§2.2 `action`, and the `move` section's buttons) PUTs this
row. Because it is keyed by **card id**, an override survives board reloads but is dropped when the
card's identity changes across a real status transition (e.g. an appointment card becoming an
encounter card). Clearing a card's entry returns it to its computed lane.

---

## Review Epilog — 2026-07-26 (AgentDLP) — behaviour changes now LIVE (build 1974)

Three things in this reference changed in the runtime today; all are live and reflected above.

1. **Chrome flags are view-aware.** `showEvents`/`showJourney`/`showDelete` now resolve from the lane
   a card is rendered in, falling back to the card's own lane. Configuring **All Work** finally does
   something — previously its definition was inert and per-lane `showDelete:false` won everywhere.
2. **`secondary[]` replaces the engine's built-ins** — documented with the warning above after it
   removed the only route to the encounter from Rooming / Intake.
3. **A definition can relabel a button without rebinding it**, and that caused every kanban
   complaint logged on 2026-07-26: a Check-In button labelled "Begin Intake", a working advance
   labelled "Patient Ready for Provider", and a lane whose only forward action opened a screen. The
   labels are corrected in `PracticeForceOneKanbanLaneReference.md`. **Author labels that state what
   the button does** — the editor's action + destination pickers (added the same day) exist to keep
   the label and the wiring together.

Also live: `Back ?` on 9 lanes was a **cp1252 round-trip** corrupting `Back →`. Keep non-ASCII out of
stored labels, or write definitions as strict UTF-8 and read the row back to verify.

## Review Epilog — 2026-07-25 (AgentDLP)

Re-derived every tag and sub-tag directly from `ui/public/kanban.js` against live build 1963 and
reconciled the document. **Verified unchanged:** the 4 card row types (`title`/`field`/`subtitle`/
`chips`), all 15 `nextResolution` control kinds, the 3 chip-item kinds, all 16 panel section types
(incl. the `custom` alias for `details`), the `showEvents`/`showJourney`/`showDelete` defaults
(true unless explicitly `false`), lane `hidden`, `requireInputs`, and `resolveHref`'s
`{fieldName}` → `encodeURIComponent(card[field])` substitution (unknown tokens resolve to empty).

**Corrected / added this pass:**

- **`actions.*.action`** (`"advance"` / `"revert"`) was entirely undocumented even though the live
  lane definitions use it — added to §2.2 with precedence (`href` beats `action`), the card-face-only
  caveat, and the inert-on-`secondary` caveat.
- **Definition transitions write a board override, not entity status** — stated up front in §1; the
  previous wording let "advance" read as a real workflow state change.
- **Three definition rows were missing from the Overview** (`blockers`, `review_gate`,
  `kanban_override/overrides`) — documented in the new §11 with their exact shapes and the blocker
  resolution order.
- **VIP heart rule** on the `title` row (only renders for `field: "title"`/omitted with a
  `patientId`) — added to §2.1.

## Review Epilog — 2026-07-24

- Document verified accurate as of build 1943; all section types, control kinds, and token fields documented in §3/§5 match the live Kanban Engine.
- The lane catalog baseline (`DEFAULT_LANES` in `kanban-editor.js`) is current — 34 lanes listed in §1. The canonical workflow lane sequence (review_registration → … → blocked_review) is unchanged.
- The CF-based lane editor (`/ui/kanban-editor.html`) writes `engine_configs` rows directly; all edits are definition-driven with no deploy required.
- The `then.navigate` template() resolution fix (build 1943-family) affects `navigate-button` href tokens — `{id}` resolves from `currentRecordId` per the CF template() contract.
