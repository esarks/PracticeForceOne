---
title: "PracticeForceOneWorkflowEngine"
---

# PracticeForceOne — Engine Configuration Reference

**Last reviewed: 2026-07-24**

> All runtime engines read their behavior from **`engine_configs`** — the Definition Repository.
> This document lists every **recognizable** `config_type` and `config_key` that actually exists
> in the live system, with the real values and schemas.
>
> **Note on CF Forms:** Configurable Form definitions live in the separate **`form_configurations`**
> table, not in `engine_configs`. They are accessed via `/api/form-configurations?formType=X`.

---

## The `engine_configs` Table

| Column | Type | Meaning |
|---|---|---|
| `config_type` | VARCHAR 60 | Which engine this record drives. |
| `config_key` | VARCHAR 160 | Sub-key within that engine. |
| `config_json` | TEXT (JSON) | The definition body. |
| `practice_id` | UUID / NULL | Practice scope. **NULL = global org template** (fallback for all practices). |
| `org_id` | UUID | Organisation scope. |
| `stage` | VARCHAR | `preprod` (draft) · `prod` (live). |

**Lookup order:** practice_id + stage → org global → built-in defaults.

**API:**
- `GET /api/engine-configs?type=X&key=Y[&practice=UUID&stage=preprod|prod]`
- `PUT /api/engine-configs { type, key, value, [practice, stage] }` *(admin role)*
- `POST /api/engine-configs { action:copy|promote, srcPractice, srcStage, dstPractice, dstStage, configType? }`

---

## All Recognised config_types (live in DB, 2026-07-21)

| `config_type` | `config_key` | Scope | Status |
|---|---|---|---|
| `workflow` | `lanes` | global + per-practice | ✅ live |
| `workflow` | `primary-visit` | global + per-practice | ✅ live (global); per-practice optional |
| `workflow` | `blockers` | global + per-practice | ✅ live (global); per-practice optional |
| `workflow` | `review_gate` | global + per-practice | ✅ live (global); per-practice optional |
| `kanban_card` | `default` | global + per-practice | ✅ live |
| `kanban_panel` | `default` | global + per-practice | ✅ live |
| `menu` | `default` | global + per-practice | ✅ live |
| `metadata` | `vocab.claim_status` | global | ✅ live |
| `metadata` | `vocab.appointment_status` | global | ✅ live |
| `metadata` | `vocab.encounter_status` | global | ✅ live |
| `metadata` | `vocab.board_lanes` | global | ✅ live |
| `metadata` | `vocab.doc_verification_status` | global | ✅ live |
| `metadata` | `vocab.doc_expiry_status` | global | ✅ live |
| `metadata` | `vocab.alert_category` | global | ✅ live |
| `metadata` | `vocab.message_direction` | global | ✅ live |
| `metadata` | `vocab.message_status` | global | ✅ live |
| `metadata` | `vocab.portal_request_type` | global | ✅ live |
| `metadata` | `vocab.portal_request_status` | global | ✅ live |
| `metadata` | `entity.patient` | global | ✅ live |
| `metadata` | `entity.appointment` | global | ✅ live |
| `metadata` | `entity.encounter` | global | ✅ live |
| `metadata` | `entity.claim` | global | ✅ live |
| `metadata` | `entity.documentVerification` | global | ✅ live |
| `metadata` | `entity.patientAlert` | global | ✅ live |
| `metadata` | `entity.portalMessage` | global | ✅ live |
| `metadata` | `entity.portalRequest` | global | ✅ live |
| `search` | `default` | global | ✅ live |
| `worklist` | `claims` | global | ✅ live |
| `operations` | `default` | global | ✅ live |
| `form` | `<formType>` | **NOT in engine_configs** — see form_configurations table | — |

---

## 1. `workflow` — Workflow Engine

### `workflow/lanes` (global + per-practice override)

What lanes exist on the Kanban board: id, title, short label, role band, order, visibility.

**Global default (22 lanes, live):**
```
review_registration, patient_needs_schedule, patient_scheduled, needs_pre_check_in,
patient_arrived, insurance_exception, ready_for_intake, ready_to_encounter,
ready_for_provider, visit_in_progress, clinical_follow_up, documentation_incomplete,
ready_to_sign, ready_for_coding, ready_to_claim, claim_needs_scrub, ready_to_submit,
payer_response, denial_appeal, ar_follow_up, patient_balance, blocked_review
```

**Schema:**
```jsonc
[
  {
    "id": "patient_arrived",       // join key — card assignment + panel lookup
    "title": "Patient Arrived",    // column heading
    "shortLabel": "Arrived",       // compact nav label
    "role": "front_desk",          // band: front_desk | clinical | provider | billing | denial | all
    "hidden": false,               // true = remove column from board (cards stay assigned)
    "ownerRole": "front_desk",     // ownership display
    "description": "Check patient in"
  }
]
```

---

### `workflow/primary-visit` (global + per-practice override)

The **Patient Visit** workflow definition — steps, transitions, completion rules, screen mappings.

**Global content (live):** fields `laneOrder`, `name`, `description`, `id`.

**Schema:**
```jsonc
{
  "id": "primary-visit",
  "name": "Patient Visit",
  "description": "Front-desk to check-out flow",
  "laneOrder": ["patient_arrived", "ready_for_intake", "ready_to_encounter", "..."],
  "crossCuttingLanes": ["blocked_review"],
  "steps": [
    {
      "id": "arrival",
      "label": "Arrival",
      "entity": "appointment",
      "screen": "appointments_cf",
      "url": "/ui/cf.html?formType=appointments_cf&patientId={patientId}",
      "lanes": ["patient_arrived"],
      "prev": null,
      "next": "intake",
      "completeWhen": {
        "entity": "appointment",
        "statusIn": ["checked_in", "roomed", "checked_out", "completed"]
      }
    }
  ]
}
```

---

### `workflow/blockers` (global + per-practice override)

The "Why Blocked" catalog — per blocker id: label shown in chip, explanation text, fix button, root-cause bucket.

**Global content (live keys):** `denial`, `clearance_required`, `pending_email`, `prior_auth`

**Schema:**
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
    "explanation": "Coverage or eligibility evidence is missing.",
    "fix": { "label": "Fix insurance", "url": "{nextHref}" },
    "rootCause": "insurance_auth"
  }
}
```

Blocker key = exact id match, or substring match against the card's blocker codes. Unmatched blockers use built-in labels.

---

### `workflow/review_gate` (global + per-practice override)

Which review types each lane requires before a card can advance; the display labels for each type.

**Global content (live):** keys `lanes`, `labels`

**Schema:**
```jsonc
{
  "lanes": {
    "review_registration": ["registration", "chart"],
    "needs_pre_check_in":  ["check_in"],
    "patient_arrived":     ["check_in"],
    "insurance_exception": ["insurance"]
  },
  "labels": {
    "registration": "Registration",
    "chart": "Chart",
    "check_in": "Check-in",
    "insurance": "Insurance"
  }
}
```

---

## 2. `kanban_card` — Kanban Card Face

Per-lane subtitle template and extra field rows rendered on every card in the Kanban column.
Key is always `default`. Global template provides defaults; practice override wins.

**Global content (live lanes):** `ready_to_encounter`, `ready_to_claim`, `claim_needs_scrub`, `patient_needs_schedule`

**Bay Area Cardiology prod (8 lanes):** `ready_to_encounter`, `ready_to_claim`, `ar_follow_up`, `ready_for_intake`, `ready_to_submit`, `denial_appeal`, `patient_arrived`, `ready_for_coding`

**Schema:**
```jsonc
{
  "patient_arrived": {
    "subtitle": "{appointmentWhen}",        // {field} tokens replaced at render time
    "extraFields": [
      { "label": "Provider", "field": "providerName" },
      { "label": "Visit",    "field": "appointmentTypeName" }
    ]
  },
  "ready_to_submit": {
    "subtitle": "Claim #{claimNumber} — {payerName}",
    "extraFields": [
      { "label": "Total", "field": "totalCharge" }
    ]
  },
  "ready_for_intake": {
    "subtitle": "Room {roomNumber}",
    "extraFields": [
      { "label": "Provider", "field": "providerName" }
    ]
  }
}
```

A lane with no entry uses the card's built-in `title` from the server.

---

## 3. `kanban_panel` — Kanban Right Panel

The right panel that opens when a card is selected. Composed of **sections** in order.
Each section has a `type` that names the renderer, and optionally a `controls` array that
defines every individual UI element in that section at control level.

Key is always `default`. Practice override wins over global.

**Global content (live lanes):** `ready_to_encounter`, `ready_to_claim`, `claim_needs_scrub`, `patient_needs_schedule`

**Bay Area Cardiology prod (6 lanes with full control definitions):**
`patient_arrived`, `ready_for_intake`, `ready_to_encounter`, `ready_for_coding`, `ready_to_submit`, `denial_appeal`

**Schema:**
```jsonc
{
  "patient_arrived": {
    "sections": [
      { "type": "lead",          "controls": [...] },
      { "type": "nextResolution","title": "Next Resolution", "controls": [...] },
      { "type": "details",       "title": "Appointment Details", "rows": [...] },
      { "type": "gate",          "enabled": true },
      { "type": "autopilots",    "enabled": true },
      { "type": "why",           "title": "Why it's here" },
      { "type": "move",          "enabled": true },
      { "type": "scheduling",    "title": "Scheduling", "controls": [...] },
      { "type": "technical",     "enabled": true }
    ]
  }
}
```

### Section types

#### `lead` — Patient identity header
```jsonc
{
  "type": "lead",
  "controls": [
    { "kind": "lane-badge" },
    { "kind": "h3",       "field": "patientName" },
    { "kind": "subtitle", "field": "title" },
    { "kind": "chip-row", "items": [
      { "kind": "chip",          "field": "priority" },
      { "kind": "chip-if",       "condition": "isDueNow", "label": "due now", "class": "blocker" },
      { "kind": "chip-if",       "condition": "isStale",  "label": "stale",   "class": "blocker" },
      { "kind": "chip-blockers", "field": "blockers",                          "class": "blocker" }
    ]}
  ]
}
```

#### `nextResolution` — Primary call-to-action block
Standard advance:
```jsonc
{
  "type": "nextResolution",
  "title": "Next Resolution",
  "controls": [
    { "kind": "label",         "text": "Next Resolution",   "class": "kanban-next-resolution-label" },
    { "kind": "strong",        "field": "nextAction.label", "class": "kanban-next-resolution-action" },
    { "kind": "reason",        "field": "reasons[0]",  "prefix": "Why: ", "class": "kanban-next-resolution-why" },
    { "kind": "action-button", "action": "advance" }
  ]
}
```

Room-entry variant (Ready for Rooming):
```jsonc
{
  "type": "nextResolution",
  "title": "Send to Room",
  "controls": [
    { "kind": "label",         "text": "Send to Room" },
    { "kind": "text-input",    "placeholder": "Room # (e.g. 3, B12)", "field": "roomNumber", "action": "room", "maxlength": 20 },
    { "kind": "action-button", "action": "room", "label": "Send to Room" }
  ]
}
```

#### `details` — Label : value data grid
```jsonc
{
  "type": "details",
  "title": "Appointment Details",
  "rows": [
    { "label": "Appointment Time", "field": "appointmentWhen" },
    { "label": "Visit Type",       "field": "appointmentTypeName" },
    { "label": "Provider",         "field": "providerName" },
    { "label": "Room",             "field": "roomNumber" },
    { "label": "Insurance",        "field": "patientInsurance" },
    { "label": "Copay",            "field": "insuranceCopay" }
  ]
}
```

#### `scheduling` — Scheduling block with navigate button
```jsonc
{
  "type": "scheduling",
  "title": "Scheduling",
  "controls": [
    { "kind": "data-row",        "label": "Appointment / visit", "field": "appointmentWhen" },
    { "kind": "navigate-button", "href": "/ui/cf.html?formType=appointments_cf&new=1",
                                 "label": "Schedule appointment", "class": "btn btn-secondary" }
  ]
}
```

#### Pass-through sections (no controls needed)
```jsonc
{ "type": "gate",       "enabled": true }   // review gate checklist from workflow/review_gate
{ "type": "autopilots", "enabled": true }   // autopilot one-tap buttons
{ "type": "whyBlocked", "enabled": true }   // blocker rows from workflow/blockers
{ "type": "why",        "title": "Why it's here" }  // reasons narrative
{ "type": "move",       "enabled": true }   // advance / revert controls
{ "type": "technical",  "enabled": true }   // patient & system debug details
```

### Control kind reference

| `kind` | Used in | Required | Optional |
|---|---|---|---|
| `lane-badge` | `lead` | — | — |
| `h3` | `lead` | `field` | `class` |
| `subtitle` | `lead` | `field` | `class` |
| `chip-row` | `lead` | `items[]` | — |
| `chip` | chip-row item | `field` | `class` |
| `chip-if` | chip-row item | `condition`, `label` | `class` |
| `chip-blockers` | chip-row item | `field` | `class` |
| `label` | `nextResolution` | `text` | `class` |
| `strong` | `nextResolution` | `field` | `class` |
| `reason` | `nextResolution` | `field` | `prefix`, `class` |
| `action-button` | `nextResolution` | `action` | `label` |
| `text-input` | `nextResolution` | `placeholder`, `field`, `action` | `maxlength` |
| `data-row` | `scheduling` | `label`, `field` | — |
| `navigate-button` | `scheduling` | `href`, `label` | `class` |

**`action` values:** `advance` (primary CTA) · `room` (send-to-room)  
**`condition` values:** `isDueNow` · `isStale`  
**`field` paths:** dot notation (`nextAction.label`) · array index (`reasons[0]`)

---

## 4. `menu` — Navigation Engine

Sidebar navigation menu per practice. Replaces the static 108-entry `sidebar.js`.
Key is always `default`.

**Global content (live):** 8 items (single flat list)

**Bay Area Cardiology prod:** 4 zones — Today (4 items) · Clinical (4 items) · Billing & RCM (5 items) · Administration (4 items)

**Schema:**
```jsonc
{
  "zones": [
    {
      "id": "today",
      "label": "Today",
      "items": [
        { "id": "dashboard",    "label": "Dashboard",       "href": "/ui/dashboard.html",                       "icon": "home" },
        { "id": "schedule",     "label": "Today's Schedule","href": "/ui/cf.html?formType=scheduling_cf",       "icon": "calendar" },
        { "id": "kanban",       "label": "Workflow Board",  "href": "/ui/kanban.html",                          "icon": "kanban" },
        { "id": "patient-visit","label": "Patient Visit",   "type": "workflow", "workflowId": "primary-visit",  "icon": "stethoscope" }
      ]
    },
    {
      "id": "billing",
      "label": "Billing & RCM",
      "items": [
        { "id": "claims",   "label": "Claims",   "href": "/ui/claims.html",                        "icon": "file" },
        { "id": "denials",  "label": "Denials",  "href": "/ui/worklist.html?source=denials",        "icon": "alert-triangle" }
      ]
    }
  ]
}
```

| Field | Meaning |
|---|---|
| `zones[].label` | Section heading. |
| `items[].href` | Direct navigation URL. |
| `items[].type` = `"workflow"` | Opens the named workflow's step rail. |
| `items[].workflowId` | Must match a `workflow/<id>` key. |
| `items[].icon` | Feather icon name. |

---

## 5. `metadata` — Metadata Engine

Vocabularies (code/label tables) and entity schemas. Always global (org template). Seeded by `DefinitionSeeds.ensureCoreSeeds()`.

### Vocabularies (all `config_type = metadata`, `config_key = vocab.<name>`)

| Key | Live values |
|---|---|
| `vocab.claim_status` | `draft`, `ready`, `submitted`, `accepted`, `partial`, `paid`, `denied`, `closed`, `written_off` |
| `vocab.appointment_status` | `scheduled`, `checked_in`, `rooming`, `roomed`, `in_exam`, `with_provider`, `checked_out`, `completed`, `cancelled`, `no_show` |
| `vocab.encounter_status` | `draft`, `in_progress`, `ready_for_provider`, `ready_to_sign`, `signed`, `completed`, `billed`, `closed` |
| `vocab.board_lanes` | 22 lane ids (the canonical board lane order — see `workflow/lanes` for details) |
| `vocab.doc_verification_status` | `pending`, `received`, `verified`, `waived` |
| `vocab.doc_expiry_status` | `none`, `current`, `expiring`, `expired` |
| `vocab.alert_category` | `Global`, `Billing`, `Insurance`, `MU`, `PaymentPlan` |
| `vocab.message_direction` | `patient_to_practice`, `practice_to_patient` |
| `vocab.message_status` | `unread`, `read`, `replied` |
| `vocab.portal_request_type` | `refill`, `referral`, `family_link` |
| `vocab.portal_request_status` | `submitted`, `in_review`, `fulfilled`, `closed` |

**Vocab schema** — a vocab is just the array of code strings (labels are derived at render time):
```jsonc
["draft", "ready", "submitted", "accepted", "partial", "paid", "denied", "closed", "written_off"]
```

---

### Entities (all `config_type = metadata`, `config_key = entity.<name>`)

| Key | Fields (live) |
|---|---|
| `entity.patient` | `firstName` · `lastName` · `dob` (date) · `mrn` (text) · `sex` (text) |
| `entity.appointment` | `startAt` (datetime) · `status` (vocab:appointment_status) · `appointmentTypeName` · `providerName` · `roomNumber` |
| `entity.encounter` | `status` (vocab:encounter_status) · `encounterDate` (date) · `providerName` |
| `entity.claim` | `claimNumber` · `status` (vocab:claim_status) · `totalCharge` (currency) · `balance` (currency) · `payerName` · `patientName` |
| `entity.documentVerification` | `docType` (text) · `status` (vocab:doc_verification_status) · `expiresOn` (date) · `expiryStatus` (vocab:doc_expiry_status) |
| `entity.patientAlert` | `category` (vocab:alert_category) · `alertText` (text) · `active` (boolean) |
| `entity.portalMessage` | `subject` · `body` · `direction` (vocab:message_direction) · `status` (vocab:message_status) |
| `entity.portalRequest` | `requestType` (vocab:portal_request_type) · `status` (vocab:portal_request_status) · `detail` (text) |

**EntitySchema:**
```jsonc
{
  "entity": "appointment",
  "label": "Appointment",
  "fields": [
    { "id": "startAt",              "label": "Time",       "type": "datetime" },
    { "id": "status",               "label": "Status",     "type": "select", "vocab": "appointment_status" },
    { "id": "appointmentTypeName",  "label": "Visit Type", "type": "text" },
    { "id": "providerName",         "label": "Provider",   "type": "text" },
    { "id": "roomNumber",           "label": "Room",       "type": "text" }
  ]
}
```

**Field types:** `text` · `date` · `datetime` · `select` (vocab-backed) · `currency` · `boolean`

---

## 6. `search` — Search Engine

Global search bar and command palette. Declares which entities are searchable, how results map to a uniform card.

**`config_key = default` (global, live)**  
**2 sources live:** `patient`, `claim`

**Schema:**
```jsonc
{
  "sources": [
    {
      "entity": "patient",
      "type": "Patient",
      "icon": "users",
      "listUrl": "/api/patients?practiceId={practiceId}&search={query}&limit=8",
      "itemsPath": ["patients", "data.patients", "items"],
      "requireField": ["id", "patientId"],
      "clientFilter": false,
      "limit": 6,
      "map": {
        "href": "/ui/patient-chart-cf.html?recordId={id|patientId}&patientId={id|patientId}",
        "label": ["{lastName}, {firstName}", "{name}", "Patient"],
        "meta": [
          { "text": "Patient" },
          { "prefix": " - DOB ", "field": "dateOfBirth|date_of_birth" },
          { "prefix": " - MRN ", "field": "mrn|accountNumber" }
        ],
        "keywords": "{lastName} {firstName} {dateOfBirth} {mrn} {email} {phoneCell}",
        "context": {
          "patientId": "{id|patientId}",
          "patientName": "@label",
          "patientMrn": "{mrn|accountNumber}",
          "patientDob": "{dateOfBirth|date_of_birth}"
        }
      }
    }
  ]
}
```

Adding a new entity to global search = add a source entry with `listUrl`, `itemsPath`, `map` and save to `search/default`.

---

## 7. `worklist` — Worklist Engine

Declarative work-queue: columns, views, filters, row actions. Proves a worklist is a DEFINITION, not code.

**`config_key = claims` (global, live)**

**Schema:**
```jsonc
{
  "id": "claims",
  "label": "Claims",
  "listUrl": "/api/claims?practiceId={practiceId}",
  "itemsPath": "claims",
  "columns": [
    { "header": "Claim #",   "field": "claimNumber", "kind": "link",     "link": "/ui/claims.html?id={id}" },
    { "header": "Patient",   "field": "patientName", "kind": "text" },
    { "header": "Status",    "field": "status",      "kind": "badge" },
    { "header": "Total",     "field": "totalCharge", "kind": "currency" },
    { "header": "Balance",   "field": "balance",     "kind": "currency" }
  ],
  "views": [
    { "id": "ready", "name": "Ready to Submit", "filter": { "field": "status", "op": "in", "value": ["draft","ready"] } },
    { "id": "all",   "name": "All Claims" }
  ],
  "rowActionUrl": "/ui/claims.html?id={id}",
  "rowActionLabel": "View"
}
```

**Column kinds:** `text` · `link` (clickable with `link` template) · `badge` · `currency`  
**View filter ops:** `in` · `eq` · `gt` · `lt`

---

## 8. `operations` — Business Operations Registry

Named operations (automations): their API endpoint, inputs, what they produce, which workflow step they complete, what event they emit.

**`config_key = default` (global, live keys):** `eligibility.check`, `claim.createFromReview`

**Schema:**
```jsonc
{
  "eligibility.check": {
    "endpoint": "POST /api/eligibility/check",
    "input": ["patientId", "insuranceId"],
    "produces": { "entity": "eligibilityCheck", "status": "active" },
    "completesStep": "eligibility"
  },
  "claim.createFromReview": {
    "endpoint": "POST /api/charge-review/{reviewId}/approve",
    "input": ["reviewId"],
    "produces": { "entity": "claim", "status": "draft" },
    "completesStep": "claim",
    "emitsEvent": "claim.created",
    "component": "ClaimBusinessLogic.createClaimFromReview"
  }
}
```

---

## 9. `form` / Configurable Forms

CF form definitions are **NOT stored in `engine_configs`**. They live in the **`form_configurations`** table.

- **API:** `GET /api/form-configurations?formType=X[&practiceId=UUID]`
- **PUT:** `PUT /api/form-configurations` `{ formType, definition, [practiceId] }`
- **Editor:** `/ui/cf-editor.html`
- **Runtime:** `/ui/js/cf-runtime.js` reads the stored config at form load time

See [PracticeForceOneCFEditor.md](PracticeForceOneCFEditor.md) for the full form definition schema.  
540+ CF form configs are live (patient chart, scheduling, eligibility, encounters, orders, providers, payers, etc.).

---

## Bay Area Cardiology (prod) — Live Inventory

Practice `18eb2605-cb43-4565-9eaf-29488fc72e5d` — what's in the DB right now:

| config_type | config_key | In prod | Notes |
|---|---|---|---|
| `workflow` | `lanes` | ✅ 22 lanes | Cardiology-specific labels (Registration Review → Patient Balance) |
| `workflow` | `primary-visit` | ❌ uses global | Global primary-visit workflow; no cardiology override yet |
| `workflow` | `blockers` | ❌ uses global | Global blocker catalog (denial, clearance_required, pending_email, prior_auth) |
| `workflow` | `review_gate` | ❌ uses global | Global review gate (registration/chart/check_in/insurance) |
| `kanban_card` | `default` | ✅ 8 lanes | Cardiology subtitle templates + extra fields per lane |
| `kanban_panel` | `default` | ✅ 6 lanes | Full control-level section definitions per lane |
| `menu` | `default` | ✅ 4 zones | Today / Clinical / Billing & RCM / Administration |

**Query all 7 from the live API:**
```
/api/engine-configs?type=workflow&key=lanes&practice=18eb2605-cb43-4565-9eaf-29488fc72e5d&stage=prod
/api/engine-configs?type=kanban_card&key=default&practice=18eb2605-cb43-4565-9eaf-29488fc72e5d&stage=prod
/api/engine-configs?type=kanban_panel&key=default&practice=18eb2605-cb43-4565-9eaf-29488fc72e5d&stage=prod
/api/engine-configs?type=menu&key=default&practice=18eb2605-cb43-4565-9eaf-29488fc72e5d&stage=prod
```

**`kanban_panel` patient_arrived sections (control-level, in prod now):**

| Section | Controls |
|---|---|
| `lead` | `lane-badge` · `h3(patientName)` · `subtitle(title)` · `chip-row[chip(priority), chip-if(isDueNow), chip-if(isStale), chip-blockers(blockers)]` |
| `nextResolution` | `label("Next Resolution")` · `strong(nextAction.label)` · `reason(reasons[0], "Why: ")` · `action-button(advance)` |
| `details` | 6 rows: Appointment Time, Visit Type, Provider, Room, Insurance, Copay |
| `gate` | enabled (reads from workflow/review_gate) |
| `autopilots` | enabled |
| `why` | "Why it's here" |
| `move` | enabled |
| `scheduling` | `data-row(appointmentWhen)` · `navigate-button(/ui/cf.html?formType=appointments_cf&new=1)` |
| `technical` | enabled |

**`kanban_panel` ready_for_intake (room-entry nextResolution):**

| Section | Controls |
|---|---|
| `nextResolution` | `label("Send to Room")` · `text-input(roomNumber, action=room, maxlength=20)` · `action-button(room, "Send to Room")` |

---

*Last updated: 2026-07-24 — All config_types and values verified against live build 1943. Reviewed 2026-07-24.*

## Review Epilog — 2026-07-24

- Updated "Last updated" from 2026-07-21 and build reference from 1865 → **1943** (current live build, gate 251/251 GREEN).
- CF form configs count updated: the prior "57+ CF form configs" is now **540+** (live on build 1943; 540+ definitions in `form_configurations` table).
- All `engine_configs` config_types documented here (workflow, kanban_card, kanban_panel, menu, metadata, search, worklist, operations) remain current; no new config_types added since the last verified pass.
- The `form_configurations` table (CF definitions, separate from `engine_configs`) has grown significantly — see [PracticeForceOneCFTable](<PracticeForceOneCFTable.md>) for the current catalog.
