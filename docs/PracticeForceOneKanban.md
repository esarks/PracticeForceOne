---
title: "PracticeForceOneKanban"
---

# PracticeForceOne — Kanban Card & Right-Panel Catalog

**The available fields for cards and the right panel, for ALL kanban types.** Founder
specification, 2026-08-09. · **Owner: AgentFuture** (Generic Workflow Framework) ·
**Related:** [PracticeForceOneGenericKanbanPlan](PracticeForceOneGenericKanbanPlan.html) ·
[PracticeForceOneKanbanEditor](PracticeForceOneKanbanEditor.html) ·
[PracticeForceOneKanbanFields](PracticeForceOneKanbanFields.html) ·
[PracticeForceOneWorkflowEditor](PracticeForceOneWorkflowEditor.html)

This is a **platform catalog, not a board layout.** It says what any board's card face and right
panel *may* display and *may* do. Which of these a given board actually shows is that board's own
definition — see the Generic Kanban plan. Nothing here is board-specific and nothing here is
patient-only by assumption.

**Status vocabulary:** ✅ **AVAILABLE** (pickable in the editor and populated today) ·
⚠️ **CLIENT-ONLY** (assembled in `kanban.js`, not emitted by the server board projection) ·
🔴 **MISSING** (no producer sets it) · 🧱 **NEEDS INSTANCE** (cannot be derived — requires the
workflow-instance record proposed in the plan's §4).

---

## 1. Fields

| # | Field (founder's name) | Catalog id | Status | Note |
|---|---|---|---|---|
| 1 | Patient Name | `patientName` | ✅ AVAILABLE | |
| 2 | **Patient ID** | `patientNumber` | 🔴 **MISSING** | **See finding A — the six-char Patient ID is live in the database and emitted by NEITHER card producer.** |
| 3 | User ID | `portalUserId` | ✅ AVAILABLE | Portal account id. If "User ID" means the *staff* user, that is a separate field and not currently on a card. |
| 4 | DOB | `patientDob` · `patientDobLabel` | ✅ AVAILABLE | |
| 5 | Age | `dobAge` | ⚠️ CLIENT-ONLY | A render *format* (DOB → derived age), not a stored field. Correct — age must never be persisted. |
| 6 | Scheduled with provider | `providerName` · `providerNameDisplay` | ✅ AVAILABLE | |
| 7 | Scheduled appointment date | `appointmentDate` · `apptWhen` | ✅ AVAILABLE | |
| 8 | Chief Complaint | `chiefComplaint` | ⚠️ CLIENT-ONLY | In the editor's pick list; assembled client-side. |
| 9 | Visit Type | `appointmentTypeName` | ⚠️ CLIENT-ONLY | **Not in the editor's field list** — usable only by hand-editing JSON. |
| 10 | Visit Reason | `visitReason` | ✅ AVAILABLE | |
| 11 | Top Diagnosis | `topDiagnosis` | ⚠️ CLIENT-ONLY | On @AgentCF's card view-model queue; not pickable in the editor. |
| 12 | Role / Assignment | `ownerRole` · `assignedTo` | ✅ AVAILABLE | `ownerRole` is computed in the browser from a hard-coded table — see finding B. |
| 13 | Phone | `phone` | ✅ AVAILABLE | |
| 14 | Insurance | `primaryInsurance` · `insuranceCopay` | ✅ AVAILABLE | |
| 15 | **Card placed in Queue At** | `queuedAt` | 🧱 **NEEDS INSTANCE** | **See finding C — this cannot be derived from any domain row.** |
| 16 | **Time since Card placed in Queue** (live on refresh) | `timeInQueue` | 🧱 **NEEDS INSTANCE** | Derived from #15 at render, never stored. Depends entirely on #15. |

**Scoreboard: 8 available · 5 client-only · 1 missing · 2 need the instance.**

### Supporting fields already in the catalog (not requested, worth knowing)

`title` · `mrn` · `address` · `practiceName` · `room` / `roomNumber` / `roomDisplay` · `priority` ·
`dueAt` / `formattedDueAt` · `status` · `entityType` / `entityId` · `claimNumber` / `claimLabel` /
`amountFmt` / `balance` / `payerName` / `daysInAr` / `denialReason` / `riskScore` ·
`registrationStatus` / `scheduleStatus` / `submittedWhen` / `preferredTime` / `appointmentLinked` ·
`reviewTypeLabel` · `stateLabel` · `cardNote` · ids (`patientId`, `appointmentId`, `encounterId`,
`checkInId`, `practiceId`).

**Chips** (lead section): `status` · `date` · `provider` · `room` · `insurance` · `ai_priority` ·
`due_now` · `stale` · `blockers`.

---

## 2. Action buttons

An action is a **declared, named operation** — never executable code in a definition (directive
§11). Three kinds: **navigate** (open another PFO surface), **state** (change persisted truth), and
**card lifecycle** (move/remove the card).

| # | Action | Kind | Status |
|---|---|---|---|
| 1 | Portal Registration | navigate | ✅ surface exists |
| 2 | Patient Chart | navigate | ✅ |
| 3 | Patient Insurance | navigate | ✅ |
| 4 | Verify Patient Insurance | state | ✅ eligibility check exists (`operations/eligibility.check`) |
| 5 | Schedule New Appointment | navigate | ✅ |
| 6 | Reschedule Current Appointment | state | ✅ |
| 7 | Cancel Appointment **and remove card** | state + lifecycle | ⚠️ cancel exists; "remove card" is a **card-lifecycle** act, see finding C |
| 8 | Mark No-Show | state | ✅ appointment status |
| 9 | Get Portal Code for Patient | state | ✅ quick-access/kiosk codes exist |
| 10 | Move card **backward** | lifecycle | ✅ `revert` — declared per lane, **browser-enforced only** (finding D) |
| 11 | Move card **forward** | lifecycle | ✅ `advance` — same caveat |
| 12 | Enter Room and Room Patient | state | ✅ `room` action with text input exists today |
| 13 | Encounter | navigate | ✅ |
| 14 | Check-In | state | ✅ |
| 15 | Check-Out | state | ✅ |
| 16 | Charge Coding | navigate | ✅ |
| 17 | Create Claim | state | ✅ `operations/claim.createFromReview` |
| 18 | Scrub Claim | state | ✅ `/api/scrub` |
| 19 | Appeal Denial | state | ✅ appeals exist |
| 20 | View Payor Response | navigate | ✅ |
| 21 | Collect Payment from Patient | state | ✅ PaymentService checkout — **the canonical money path**; never a second one |

**All 21 have a home.** The work is not building them — it is **declaring** them in the operations
registry so any board can name them, rather than each board's renderer knowing them.

---

## 3. Three findings this catalog exposes

### 🔴 Finding A — "Patient ID" is on no card, and that contradicts a governing directive

The six-character **Patient ID** is live in the database (every chart and portal account backfilled)
and the Patient ID directive says to show it **wherever a patient is referenced**. Measured
2026-08-09: `patientNumber` appears **zero times** in the server board projection
(`util/WorkflowBoardRoutes.script`) **and zero times** in the client card builder
(`ui/public/kanban.js`). It is not in the editor's field list either.

**So the board still identifies patients by name and UUID.** This is the cheapest high-value item in
the whole catalog and it is a directive-compliance gap, not a feature request.
**Owners: @AgentDB (emit it) + @AgentUI (display it).**

### ⚠️ Finding B — there are TWO card producers, and a catalog for "all kanban types" needs one

The server emits cards from six hard-coded entity types (`WorkflowBoardRoutes.script:1313`), and
`kanban.js` **independently rebuilds cards client-side** from the same six sources
(`buildCards`, ~`:2236`). That is why five requested fields are "client-only": `chiefComplaint`,
`appointmentTypeName`, `topDiagnosis`, `dobAge` and the aging fields exist in the browser and not in
the projection.

**A field catalog that is supposed to serve *all* kanban types cannot have two producers** — a new
board would silently get a different field set than Primary depending on which producer fed it.
This is the same "two producers of one fact" class @AgentDLP cited when siting `lane_rules`.
**Consolidation is a precondition for generic boards, and it belongs with @AgentUI + @AgentDLP.**

### 🧱 Finding C — "Card placed in Queue At" cannot be derived, and independently proves the plan's §4

Items 15 and 16 are the two fields no domain row can answer. A card's lane is **derived** from
entity status on every render; nothing anywhere records **when this card entered this lane**.
`ageMinutes` and `dueAt` exist but measure the *entity's* age, not **time in queue** — and they are
computed in the browser.

The founder's own field list therefore requires the **workflow instance** proposed in the Generic
Kanban plan §4: a thin record carrying only what no domain row has — owner, assignment time,
priority, SLA clock, **and the lane-entry timestamp**. Same for action 7's "remove card": removing a
card is a statement about the *card*, not about the appointment, and today it is a client-side
soft-delete.

**This is independent confirmation of the plan's central design decision, arriving from the product
side rather than the architecture side. @AgentARCH — this is a second reason to rule on §4.**

### ⚠️ Finding D — forward/backward are enforced in the browser only

`advance` / `revert` are declared per lane and definitions already beat code
(`kanban.js:9309-9323`), but there is **no server-side transition model**. Fine for an internal
board; **not** fine once boards are handed to roles that must not skip lanes (directive §28).
Ruling: @AgentARCH (plan Gap 2b).

---

## 4. What this means for the framework

1. **Fields and actions are platform catalogs**; a board's *definition* picks from them. Neither the
   card renderer nor the panel renderer should know a board's name.
2. **Nothing here is patient-only.** The catalog must degrade honestly for non-patient subjects
   (a referral or inventory board simply has no `patientDob`), which is why the board definition
   carries a `subject`.
3. **Blank means blank.** The editor's existing rule holds: a field a board does not declare renders
   nothing. No hidden defaults.
4. **A field must not be pickable before a producer sets it.** The editor's own comment records this
   scar — `appointmentDate` was in use while unselectable, *"which is how a field list silently
   becomes wrong."* The five client-only fields above should become pickable **as** they become
   server-emitted, not before.

---

*Catalog captured verbatim from the founder 2026-08-09; per-item status measured against live code
the same day. Nothing in §3 is built.*

— AgentFuture, 2026-08-09
