---
title: "PracticeForceOneKanbanFields"
---

# PracticeForceOne Kanban Fields — the complete card + right-panel configuration reference

*AgentDLP 2026-08-07; canonical field + action set added by AgentCF 2026-08-09 from the founder's `PracticeForceOneKanban` list (§4a, §4b supersede all earlier enumerations). Compiled from the running system: the renderer (`ui/public/kanban.js`), the
authored definitions (`docs/kanban/kanban-cards.json` / `kanban-panels.json`), and the publisher
(`bin/publish-kanban-layout.mjs`). Everything on this page is definition-driven — no code change
is needed to add, remove, reorder, or relabel any of it.*

**SEE IT LIVE:** ReCenter Medical → Kanban → **Review Registration** lane. The card and its right
panel there are configured with every element on this page (published 2026-08-07, practice-scoped
— no other practice or lane changed). Restore recipe at the bottom.

---

## 1. Where the configuration lives

| Thing | Storage | Notes |
|---|---|---|
| Per-lane **card** definition | `engine_configs` · `type=kanban_card` · `key=<laneId>` | one DB row per lane |
| Per-lane **right panel** definition | `engine_configs` · `type=kanban_panel` · `key=<laneId>` | one DB row per lane |
| Lane catalog (order, titles, roles, advance) | `type=kanban_card` · `key=lanes` | **FOUNDER-FROZEN**: lane order and the 16 advance labels change only on founder instruction |
| Review-gate requirements | `type=kanban_card` · `key=review_gate` | which reviews each lane requires |

Resolution is **practice × stage** with org fallback: a practice-scoped row wins for that practice;
otherwise the org/global row serves. The board loads these at startup (`loadKanbanCardDefs` /
`loadKanbanPanelDefs` / `loadKanbanLaneCatalog`) — a hard refresh of the board picks up a new
definition; no deploy, no restart.

The authored source of truth for the org-wide layout is `docs/kanban/kanban-cards.json` +
`kanban-panels.json`, published together by `bin/publish-kanban-layout.mjs` (`--check` reports
drift; `--publish` writes). Publishing them together is deliberate — the card face and the panel
are one design, and they drifted when edited separately.

---

## 2. The CARD definition (`type=kanban_card`, `key=<laneId>`)

### Top-level knobs

| Key | Type | What it does |
|---|---|---|
| `rows` | array | The card face, top to bottom — see row types below |
| `subtitleFields` | array of field names | The one-line summary under the title. **Derived rule:** the first three fields of the lane's panel `details` (minus `patientName`, already the title) — you scan by the same facts you then read in full |
| `separator` | string | Joins `subtitleFields` (default `" | "`) |
| `extraFields` | array of `{label, field}` | Additional labeled facts on the face |
| `actions` | object | The card's buttons — `next` and `secondary` arrays, below |
| `legacy` | string | Historical note only, not rendered |

### Row types (`rows[]`)

| `type` | Keys | Renders |
|---|---|---|
| `title` | `field`, `showAssignment` | The card title (patient name); `showAssignment:true` adds the assignment control |
| `field` | `field`, `label`, `format` (`date`) | One labeled fact, e.g. `DOB: 04/16/1964` |
| `subtitle` | `fields[]`, `separator` | A joined line of facts; multiple subtitle rows allowed |
| `portalCode` | — | The patient's portal/kiosk code block when one exists |
| `chips` | `fields[]` (optional — omit for the default set) | Status chips; vocabulary: `ai_priority`, `insurance`, `date`, `provider`, `room`, `due_now`, `stale`, `blockers` |
| `actions` | `controls[]` | The button row — control kinds below |

### Card action controls (`rows[].controls[]` on the `actions` row)

| `kind` | Renders |
|---|---|
| `primary-action` | The lane's advance/next action (label from `actions.next`) |
| `secondary-actions` | Secondary links; `limit: N` caps how many show |
| `portal-code` | Generate/show portal check-in code |
| `undo` | Undo the last advance |
| `no-show` | Mark no-show (where applicable) |
| `back` | Send the card back a lane |
| `events` | Open the card's event history |
| `journey` | Open the patient journey view |
| `delete` | Remove the card (danger-styled) |

### Card buttons (`actions`)

```json
"actions": {
  "next":      [ { "showWhen": "portalUserId", "hideWhen": "...", "label": "Review registration", "href": "/ui/cf.html?...&recordId={portalUserId}" } ],
  "secondary": [ { "showWhen": "patientId", "label": "Open Patient Chart", "href": "/ui/patient-chart.html?patientId={patientId}" } ]
}
```

- `showWhen` / `hideWhen` test a card field for truthiness — the first matching `next` entry wins.
- `href` templates substitute any card field via `{fieldName}` (URL-encoded).
- **The advance labels are founder-protected.** The 16 event-asserting labels must never be
  reverted; a republish from files clobbers them if the files are stale — check first.

---

## 3. The RIGHT PANEL definition (`type=kanban_panel`, `key=<laneId>`)

A panel is an ordered `sections[]` array. **Order is the point** (arrays are compared
order-sensitively by the publisher). Any section takes `enabled: false` to switch it off without
deleting it.

### The two publisher-enforced invariants

1. **The lane's own work leads.** Section index 0 is `lead` (identity); index 1 must be
   ACTION-BEARING — the lane's purpose-built section where one exists (`gate`, `documentation`,
   `denial`, `arFollowup`, `visitInProgress`, `clinicalFollowUp`), otherwise `nextResolution`.
   Never `details` — reading demographics is not what any lane is for.
2. **The card summary derives from the panel.** `subtitleFields` = first three panel `details`
   fields minus `patientName`. Authored twice, they drift (measured: a card showed the CLAIM
   amount while its panel showed the BALANCE).

### Section types

| `type` | Keys | Renders |
|---|---|---|
| `lead` | — | Identity block: patient, subtitle, chips |
| `gate` | — | The Review Gate (registration/chart review attestation) |
| `nextResolution` | `controls[]` (optional) | The generic action section; fully declarable via controls — vocabulary below |
| `panel` | `controls[]` | **Fully-declared section**: renders exactly the controls listed, nothing decided in code |
| `details` | `title`, `rows[]` of `{field, label}` | Labeled facts — the panel's readable core |
| `custom` | same as `details` | Alias of `details` |
| `documentation` | — | The documentation/recommendations block for the encounter |
| `scheduling` | — | Scheduling context/actions |
| `autopilots` | — | Pre-check-in, check-in, post-visit, portal kiosk code, eRx-draft one-taps (front-desk/clinical lanes) |
| `denial` | — | Denial resolution workspace *(renders only when denial facts exist)* |
| `arFollowup` | — | A/R follow-up workspace *(data-dependent)* |
| `visitInProgress` | — | In-visit workspace *(data-dependent)* |
| `readyToSign` | — | Ready-to-sign workspace *(data-dependent; carries the declinedCount notice)* |
| `clinicalFollowUp` | — | Clinical follow-up workspace *(data-dependent)* |
| `whyBlocked` | — | What holds this card, from the blocker catalog |
| `why` | — | The card's "why is this here" explanation |
| `move` | — | Advance / revert controls |
| `technical` | `rows[]` of names | The technical strip; row vocabulary: `name`, `phone`, `address`, `insurance`, `assignmentControl`, `entity`, `sourceMarker`, `cardId`, `ownerRole`, `assignment`, `dueAt`, `ageMinutes`, `sourceRecord` |

### Declared-control vocabulary (`nextResolution.controls[]` and `panel.controls[]`)

Layout/text: `h3 {text}` · `heading {text}` · `paragraph {text}` · `label {text}` ·
`subtitle` (the definition-driven card subtitle) · `lane-badge` · `chip-row`

Facts: `strong {field}` · `reason {field, prefix}` · `data-row {field, label}` ·
`chip {field}` · `chip-if {field}` · `chip-blockers` · `list {…}` (needs a registered list source)

Actions: `primary-action {variant}` · `secondary-actions` ·
`action-button {label, href, showWhen, hideWhen}` · `navigate-button {label, href, showWhen}` ·
`undo-button` · `back-button` · `cancel-button` · `text-input {…}`

Workflow blocks: `review-gate {compact}` · `portal-code-panel` · `portal-arrival` ·
`blocker-autoclear` · `blocker-focus-chip`

Rules the panel keeps: lane panels carry context and one-taps, **never a second copy of the
primary CTA** (that lives in `nextResolution`/the card); buttons are **text-label only, no icons**
(founder design rule).

---

## 4. Field resolution — what `field:` can name

**⚠ THE CARD FACE BINDS THE VIEW-MODEL, NOT THE RAW API PAYLOAD.** The board transforms each
work item into a per-entity-type view-model before rendering, and the property names differ.
Measured on the live showcase (2026-08-07): binding the raw payload names `dob`/`email`/`status`
rendered nothing while `entityType` rendered — the view-model for a `portal_registration` card
carries `patientDob`, `practiceName`, `priority`, `ownerRole`, `dueAt`, `ageMinutes`,
`portalUserId`, `registrationStatus`, `reviewTypeLabel`, `appointmentLinked`, `nextAction`,
`blockers`, `chips` … but never `email` or raw `status`. When a bound field renders empty on a
card that plainly has the data, the NAME is wrong for the view-model — find the card builder in
`kanban.js` (search the lane's `reviewTypeLabel`-style constant) and bind what it actually sets.
Panel `details`/`custom`/`technical` sections additionally fall back to the patient context
(`ctx.p`), so patient-chart fields resolve there that the card face cannot see.

A `field` binds to the card's view-model properties, with three forms:

- **Plain name** — `patientDob`, `phone`, `providerName`…
- **Dotted path** — `nextAction.label` walks nested objects
- **Array index** — `reasons[0]`

Unresolved fields render as empty (the row simply doesn't show) — a definition can safely name a
field only some cards carry.

Note: most cards carry no `patientName` in the raw board JSON — the UI resolves it via
`patientId`. A name absent from the payload proves nothing.

### 4a. THE CANONICAL CARD FIELD SET (founder, `PracticeForceOneKanban`)

*This list supersedes every earlier field enumeration on this page.* These are the facts a card
and its right panel are expected to be able to show. Bind them by the **Binding name** column;
each renders empty when the source is absent, so a definition may name a field only some cards
carry.

| # | Founder's field | Binding name | Source |
|---|---|---|---|
| 1 | Patient Name | `patientName` | card (resolved via `patientId` when absent from the payload) |
| 2 | Patient ID | `patientDisplayId` ▸ fallback `patientId` | the six-character human Patient ID (AgentDB); UUID only until adoption reaches this surface |
| 3 | User ID | `portalUserId` | portal account behind the registration |
| 4 | DOB | `patientDob` | card / patient context |
| 5 | **Age** | **`patientAge`** | **DERIVED at render from DOB — never stored, cannot go stale** |
| — | DOB + Age in one cell | **`dobAge`** | **DERIVED** — `1958-12-13 (Age 67)` |
| 6 | Scheduled with provider | `providerName` (or `providerNameDisplay`) | appointment |
| 7 | Scheduled appointment date | `apptWhen` (or `visitDate`, `formattedDueAt`) | appointment |
| 8 | Chief Complaint | `chiefComplaint` | encounter / registration |
| 9 | **Visit Type** | **`visitType`** | **DERIVED** — resolves `visitType`/`appointmentType`/`appointmentTypeName`/`encounterType` |
| 10 | Visit Reason | `visitReason` | appointment / registration |
| 11 | **Top Diagnosis** | **`topDiagnosis`** | **DERIVED** — principal diagnosis; resolves `topDiagnosis`/`primaryDiagnosis`/`diagnosisCode`/`diagnoses[0]` |
| 12 | Role / Assignment | `ownerRole`, `assignedTo` (+ the `assignmentControl` technical row) | workflow |
| 13 | Phone | `phone` | patient context |
| 14 | Insurance | `primaryInsurance` (+ `insuranceCopay`) | coverage |
| 15 | **Card placed in Queue At** | **`placedAt`** | **DERIVED** — absolute, readable; falls back through `queuedAt`/`createdAt`/`submittedWhen`/`dueAt` |
| 16 | **Time since placed, live** | **`queuedFor`** | **DERIVED** — recomputed from `boardNowMs()` on EVERY render, so it ages between refreshes (raw minutes remain on `ageMinutes`) |

The six **DERIVED** names are computed in `resolveField` (`ui/public/kanban.js`), deliberately not
in the six per-entity card builders — a builder-by-builder copy is how one fact ends up spelled
three ways, and a new lane would silently lack them. Every other property the board API emits for
a card also remains bindable: the list is open, and a new API field is immediately usable.

### 4b. THE CANONICAL ACTION SET (founder, `PracticeForceOneKanban`)

*This list supersedes every earlier button enumeration on this page.* Most are declared per lane —
no code — using the `actions`/`controls` vocabulary in §2 and §3.

| Founder's action | How it is declared |
|---|---|
| Portal Registration | `next`/`action-button` → the registration review CF (`showWhen: portalUserId`) |
| Patient Chart | `action-button` → `/ui/patient-chart.html?patientId={patientId}` |
| Patient Insurance | `action-button` → the chart's insurance tab |
| Verify Patient Insurance | `action-button` → the eligibility check for `{patientId}` |
| Schedule New Appointment | `action-button` → SchedulingCF carrying `patientId` + `patientName` |
| Reschedule Current Appointment | `action-button` → SchedulingCF with `recordId={appointmentId}` |
| Cancel Appointment and remove card | `delete` control (danger-styled) |
| Mark No-Show | `no-show` control |
| Get Portal Code for Patient | `portal-code` control / `portal-code-panel` section |
| Move card backward | `back` control |
| Move card forward | `primary-action` (the lane's advance — **its label is founder-protected**) |
| Enter Room and Room Patient | `primary-action` on the rooming lanes |
| Encounter | `action-button` → EncounterCF for `{encounterId}`/`{patientId}` |
| Check-In / Check-Out | the `autopilots` section one-taps |
| Charge Coding | `action-button` → the encounter's coding surface |
| Create Claim / Scrub Claim | `action-button` on the revenue lanes |
| Appeal Denial | the `denial` section workspace |
| View Payor Response | the payer-response workspace / `action-button` |
| Collect Payment from Patient | `action-button` → checkout carrying `{patientId}` (PaymentService) |

Buttons are **text-label only, no icons** (founder design rule), and a lane panel never carries a
second copy of the primary CTA.

---

## 5. HOW TO CONFIGURE — the worked example (this is what produced the live showcase)

**Read what a practice currently resolves** (org fallback included):

```
GET /api/engine-configs?type=kanban_panel&practice=<practiceId>&stage=prod
```

⚠ Use `practice=`, not `practiceId=` — the same endpoint returns DIFFERENT definitions for the
two parameters.

**Write a practice-scoped definition** — `PUT`, never `POST` (`POST /api/engine-configs` is the
practice-to-practice COPY operation):

```
PUT /api/engine-configs
{ "type": "kanban_panel", "key": "review_registration",
  "practice": "<practiceId>", "stage": "prod", "value": { ...sections... } }
```

**Verify by canonical readback** — GET it back and compare with sorted object keys; raw
`JSON.stringify` comparison false-alarms on key order (arrays stay order-sensitive on purpose).

**See it** — hard-refresh the Kanban board; definitions load at startup, no deploy needed.

The exact script that published the showcase (backup → PUT both → canonical verify, and
`--restore` to put the previous definitions back) is preserved in the session scratchpad as
`publish-kanban-showcase.mjs`, with the pre-showcase definitions saved alongside as
`backup-kanban_card-review_registration.json` / `backup-kanban_panel-review_registration.json`.
The org-wide authored layout in `docs/kanban/` is untouched — deleting the practice-scoped rows
(or PUT-ing the backups back) restores ReCenter Medical to the shared definition.

---

## 6. Governance

- **Lane ORDER and lane set are founder-frozen** — no agent adds/removes/reorders lanes or
  republishes the lane catalog without founder instruction (`review_registration` first).
- **The 16 advance labels are founder-protected** — never revert them; a file-based republish can
  clobber them silently.
- Card and panel publish **together** (`bin/publish-kanban-layout.mjs`) for the org-wide layout;
  practice-scoped experiments use the PUT recipe above and never touch other practices.
- Aesthetics practices never share configurations with medical practices — the logged-in
  practice decides (founder rule); practice-scoped rows are the mechanism.
