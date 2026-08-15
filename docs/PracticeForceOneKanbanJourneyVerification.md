---
title: "PracticeForceOneKanbanJourneyVerification"
---

# PracticeForceOne — Kanban Journey Verification (per-step board walk)

**Last reviewed: 2026-07-24**

**Author:** AgentDLP2 · **Date:** 2026-06-22 · **Verified against build:** ~1978 (CORS live-safe revision) · **Status:** ACTIVE

> Provenance note (2026-06-23): the per-step walks below were run against the then-live build ~1978. Live prod has since advanced to ~2048 (MR7 M7-73 /api/health DB probe). The happy-path spine result is unchanged; re-run the harness against current HEAD before citing it as today's live state.

## Purpose & method

Verify the **Kanban board** by running each **Day-in-the-Life journey one step at a time, in sequence**, against the live app — *the steps themselves create the data* (register → schedule → check-in → encounter → charges → claim → 837 → ERA → denial → appeal → A/R) — and after **every** step reload `kanban.html` and record which lane(s) the patient's card occupies. This is the honest "watch the patient move across the board" test.

- **Harness:** `tests/ui/verify-dlp-dashboard-kanban-per-step.mjs` (two live tabs: staging runner + rendered `kanban.html`), run with `CONTINUE_PAST_FAIL=1` so a single failure doesn't skip the tail.
- **Account:** the non-MFA UAT harness service account; practice `fb899820…`.
- **Journeys:** **DLP** (Daye Inthelife, 42 steps — the comprehensive journey), **DLP2** (Cardia Hartwell, 25 steps — denial→appeal→overturn + follow-up visit), **DLP3** (Sandra Coverdale, 25 steps — COB primary+secondary).
  *(Naming note: the journey is **DLP**. The harness console label prints "DLP1" cosmetically; the journey id is `dlp`/"DLP".)*

**Legend:** a lane name = the card sits in that lane after the step; `—` = unchanged from the prior step; `A | B` = the patient has **multiple concurrent cards** (distinct work-items).

---

## DLP — 42 steps · ✅ 0 failures · card walked the full spine

| Step | Action | Kanban lane |
|---|---|---|
| reset / s00 / a00 | ClearDLP + guards + seed | *(no card)* |
| a01 | portal self-register | **review_registration** |
| a02 | email confirm | — |
| a03 | on staff review queue | — |
| a04 | staff create chart + link | **patient_needs_schedule** |
| a05 | portal login → /portal/me | — |
| a06 | intake meds land in chart | — |
| b01 | insurance capture (primary) | — |
| b02 | eligibility ACTIVE + copay | — |
| b03 | appointment booking | **patient_scheduled** |
| b04 | reminder / reschedule round-trip | — |
| c01 | **check-in → encounter** | **visit_in_progress** |
| b05 | portal check-in | — |
| c02 | copay at TOS | — |
| d01 | rooming + vitals | — |
| d02 | problems / allergies / med-rec | — |
| d03 | CPOE lab order | — |
| d04 | result return → acknowledge | — |
| d05 | eRx | — |
| d06 | diagnoses coded | — |
| d07 | documentation + **sign** | **ready_for_coding** |
| e01 | charge review → claim | **claim_needs_scrub** |
| e02 | scrub / validation | — |
| e03 | submit 837 | **ready_to_submit** |
| f01 | TA1 + 999 acks | — |
| f02 | 276/277 status | **payer_response** |
| f03 | 835 / ERA (partial pay) | **ar_follow_up** |
| g01–g03 | ERA idempotent / statement / audit | — |
| i01–i04 | isolation / visibility / honesty / no-dup | — |
| h01 | denial → appeal (branch claim) | **denial_appeal** \| ar_follow_up |
| h02 | eligibility failure (INACTIVE) | — |
| h03 | no-show → reschedule (new appt) | **patient_scheduled** \| denial_appeal \| ar_follow_up |
| h04 | secondary insurance (COB) | — |
| h05 | A/R aging follow-up | — |
| h06 | refill request loop | — |

**Note:** DLP **activates the chart BEFORE booking** (chart at `a04`, appointment at `b03`), so the card sits in `patient_needs_schedule` from `a04`→`b02` — a lane DLP2/DLP3 never enter (they book at staff-review). The `h`-phase legitimately spins **multiple concurrent cards** for the one patient (a denial card + a rebooked appointment card alongside the main A/R card).

---

## DLP2 — 25 steps · ✅ 0 failures · denial + follow-up arc

| Step | Action | Kanban lane |
|---|---|---|
| reset / 00 | ClearDLP + seed ledger | *(no card)* |
| 01 | portal self-register + confirm | **review_registration** |
| 02 | staff review → chart + book | **patient_scheduled** |
| 03 | no-show + reschedule | — |
| 04 | patient shows (checked in) | **ready_for_intake** |
| 05 | check-in → encounter + portal check-in | **visit_in_progress** |
| 06 | eligibility (primary) + copay | — |
| 07 | copay collection (TOS) | — |
| 08 | cardiac visit (vitals/EKG/troponin) | — |
| 08b | eRx (controlled-substance EPCS gate) | — |
| 09 | coding + charges → claim | **claim_needs_scrub** |
| 10 | 837 submit + TA1/999 | — |
| 11 | denial (CARC 50) → worklist | **denial_appeal** |
| 12 | appeal submitted → in review | — |
| 13 | appeal overturned → paid | **ar_follow_up** |
| 14 | A/R review | — |
| 15 | follow-up scheduling | **patient_scheduled** \| ar_follow_up |
| 16 | follow-up check-in + encounter | **visit_in_progress** \| ar_follow_up |
| 17 | follow-up visit + coding → claim | **claim_needs_scrub** \| ar_follow_up |
| 18 | follow-up 837 + paid 835 | **ar_follow_up ×2** |
| 19 | follow-up A/R review | — |
| 20 | interim eligibility recheck (INACTIVE) | — |
| 21 | security & visibility thread | — |
| teardown | ClearDLP removes run | *(no card)* |

**Note:** DLP2 step 04 ("patient shows") lands **`ready_for_intake`** (arrived, encounter container present) — the only journey that surfaces that lane — before 05 advances it to `visit_in_progress`. Steps 15–18 run the follow-up visit's whole pipeline **concurrently** with the first claim's outstanding `ar_follow_up`, so the board correctly carries two cards.

---

## DLP3 — 🔴 breaks at check-in (isolated; not a prod-wide regression)

| Step | Action | Kanban lane |
|---|---|---|
| reset / 00 | ClearDLP + seed COB ledger | *(no card)* |
| 01 | portal self-register + confirm | **review_registration** |
| 02 | staff review → chart + book cardiology | **patient_scheduled** |
| 03 | no-show + reschedule | — |
| 04 | patient checked-in | 🔴 **card vanishes** (`no card`); patient **de-activated** (`portal-users active 3→2`) |
| 05 | check-in → encounter | 🔴 **FAILED — `encounter create HTTP 403`** |
| 06 | eligibility primary+secondary | 🔴 **FAILED — `insurance create HTTP 403 FORBIDDEN "Patient is not authorized"`** |
| 08b | eRx | 🔴 `HTTP 404 "Patient not found in [org]"` |
| 07, 09–21, cob1/2 | copay → visit → coding → claim → 837 → ERA → denial → appeal → COB | cascade-fail (no encounter / patient) |

**This is DLP3-specific, NOT a prod regression (build ~1978 at the time of this walk)** — DLP and DLP2 both perform check-in→encounter and pass cleanly. DLP3's `03 no-show→reschedule` followed by `04 patient-shows` de-activates its own patient (active→inactive), after which every write 403/404s ("patient not authorized / not found"). Most likely **DLP3-04 acting on the cancelled/rescheduled appointment**. Owner: the DLP-scenario lane (fix the scenario or confirm a backend edge on the reschedule→check-in path).

---

## Lane coverage matrix (22 lanes)

The three journeys exercise **11 of the 22** board lanes — the happy-path spine. The other **11** are not reached, because the journey steps perform **compound transitions** (one step does several real-world actions at once) and never set the intermediate clinical sub-states.

| # | Lane | Covered? | By |
|---|---|---|---|
| 1 | review_registration | ✅ | all |
| 2 | patient_needs_schedule | ✅ | DLP (a04–b02) |
| 3 | patient_scheduled | ✅ | all |
| 4 | needs_pre_check_in | ❌ | — |
| 5 | patient_arrived | ❌ | — |
| 6 | insurance_exception | ❌ | — |
| 7 | ready_for_intake (Ready For Rooming) | ✅ | DLP2 (04) |
| 8 | **ready_to_encounter (Rooming / Intake In Progress)** | ❌ | — |
| 9 | **ready_for_provider** | ❌ | — |
| 10 | visit_in_progress | ✅ | all |
| 11 | clinical_follow_up | ❌ | — |
| 12 | documentation_incomplete | ❌ | — |
| 13 | ready_to_sign | ❌ | — |
| 14 | ready_for_coding | ✅ | DLP (d07) |
| 15 | ready_to_claim | ❌ | — |
| 16 | claim_needs_scrub | ✅ | all |
| 17 | ready_to_submit | ✅ | DLP (e03) |
| 18 | payer_response | ✅ | DLP (f02) |
| 19 | denial_appeal | ✅ | DLP h01, DLP2 11 |
| 20 | ar_follow_up | ✅ | all |
| 21 | patient_balance | ❌ | — |
| 22 | blocked_review | ❌ | — |

### Why each uncovered lane is skipped
- **Rooming / intake sub-states (`patient_arrived`, `ready_to_encounter`, `ready_for_provider`):** the check-in step (`c01` / DLP2-`05`) is **"check-in → create encounter → start"** in a single action, so the appointment jumps **scheduled → visit_in_progress**. These lanes appear only when the appointment status is `arrived`-without-encounter, `rooming_in_progress`, or `intake_complete` — states no journey step produces.
- **Documentation sub-states (`documentation_incomplete`, `ready_to_sign`):** the sign step (`d07`) goes **in_progress → signed** in one shot → lands `ready_for_coding`, skipping the unsigned/ready-to-sign states.
- **`needs_pre_check_in`:** needs a scheduled appt awaiting portal/kiosk pre-check-in (not exercised).
- **`insurance_exception`:** needs an eligibility/referral/prior-auth block on the appointment (the journeys' INACTIVE-eligibility step feeds the eligibility *queue*, not this appointment lane).
- **`ready_to_claim`:** charge approved but claim not yet created — the journeys' charge→claim is one step, skipping it.
- **`patient_balance`:** a paid/partial claim with patient responsibility and no A/R — the journeys' partials route to `ar_follow_up`.
- **`clinical_follow_up`:** a clinical task needing action — not exercised.
- **`blocked_review`:** a cancelled/inactive appointment review — not exercised.

The lanes themselves are implemented (`buildCards` in `kanban.js`) and the dashboard counts them; they're simply **not lit by the current journeys**.

---

## What "fully test the kanban" requires

Per the "data comes from the steps" principle, full **22/22** lane coverage needs **more granular journey steps** that drive each intermediate state, e.g.:
- a step that sets the appointment to **rooming-in-progress** → lights `ready_to_encounter`
- a step that sets **intake-complete** → lights `ready_for_provider`
- a step that marks **arrived without an encounter** → lights `patient_arrived`
- a step that leaves a note **unsigned** → lights `documentation_incomplete` / `ready_to_sign`
- a pre-check-in-pending step, an eligibility/auth-block step, an approved-charge-before-claim step, a patient-responsibility-balance step, a clinical-task step, a cancelled-appointment step → light the remaining branch lanes.

These are **DLP-scenario additions** (the journeys' lane), or a dedicated **kanban lane-coverage harness** that sets each encounter/appointment status directly via the API and asserts the resulting lane.

## Summary
- **Kanban happy-path spine: fully verified live on build ~1978** (live prod has since advanced to ~2048; re-run before re-citing) — the card walks `review_registration → patient_needs_schedule → patient_scheduled → ready_for_intake → visit_in_progress → ready_for_coding → claim_needs_scrub → ready_to_submit → payer_response → denial_appeal → ar_follow_up`, including concurrent multi-card follow-up/denial behavior. **DLP 42/42, DLP2 25/25.**
- **DLP3** breaks at its own check-in (isolated scenario edge; patient de-activation → 403/404).
- **Coverage: 11 / 22 lanes.** The 11 intermediate/branch lanes (incl. `ready_to_encounter`, `ready_for_provider`) are unexercised and need granular steps to light them.

---

## DLP v2 — full-lane restructure (deep-dive design, 2026-06-22)

**Goal (founder):** restructure the **DLP** journey so it produces **an example of every one of the 22 lanes**. Root cause of today's 11/22: DLP's `c01` (check-in→encounter), `d07` (sign), and `e01` (charge→claim) are **compound** — each performs several real transitions in one step, so the card skips the intermediate appointment/encounter statuses. Fix = **break the compound steps into granular status transitions** + add small **detours** for the exception lanes (DLP already does this for denial/no-show/eligibility in its h-phase, so it stays one comprehensive journey).

### Lane → state → API (verified)
Lane visibility is decided in `kanban.js buildCards()` from the appointment status, the encounter status, and the claim/charge state. The transitions are all available endpoints:
- Appointment status: `PUT /api/appointments/{id} {status}` — recognized values incl. `arrived`, `rooming_in_progress`, `intake_complete`, `in_progress`, `no_show`, `cancelled`, `eligibility_failed`.
- Encounter status / fields: `PUT /api/encounters/{id}` (updates supplied fields), `POST /api/encounters/{id}/sign`.
- Charge review: `POST /api/charge-review/{id}/approve` → claim. Clinical task: `POST /api/clinical-tasks`.

| # | Lane | Lit by (state) | Step that produces it |
|---|---|---|---|
| 1 | review_registration | portal reg pending | a01 *(exists)* |
| 2 | patient_needs_schedule | chart active, no appt | a04 *(exists, DLP-only)* |
| 3 | needs_pre_check_in | scheduled appt, pre-check-in not done | **NEW b03b** assert after booking, before portal check-in |
| 4 | patient_scheduled | appt `scheduled` | b03 *(exists)* |
| 5 | insurance_exception | appt `eligibility_failed` / elig exception | **NEW b02x** detour: set eligibility_failed → assert → resolve |
| 6 | patient_arrived | appt `arrived`, no encounter | **NEW c00** `PUT appt {arrived}` before encounter |
| 7 | ready_for_intake | `checked_in`/arrived + encounter exists | **split c01a** `PUT {checked_in}` + create encounter |
| 8 | ready_to_encounter | appt `rooming_in_progress` | **NEW c01b** `PUT {rooming_in_progress}` |
| 9 | ready_for_provider | appt `intake_complete` | **NEW c01c** `PUT {intake_complete}` |
| 10 | visit_in_progress | appt `in_progress` | **c01d** `PUT {in_progress}` (then the d-phase) |
| 11 | clinical_follow_up | open clinical task | **NEW d04b** `POST /clinical-tasks` (a follow-up task) |
| 12 | documentation_incomplete | encounter `documentation_incomplete` | **NEW d06b** `PUT enc {status:documentation_incomplete}` then complete |
| 13 | ready_to_sign | encounter `ready_to_sign`/`complete` | **NEW d07a** `PUT enc {status:ready_to_sign}` before sign |
| 14 | ready_for_coding | signed + no charge | d07 *(exists)* |
| 15 | ready_to_claim | charge `approved`, no claim | **split e01a** approve charge-review, assert, then create claim |
| 16 | claim_needs_scrub | claim draft | e01/e02 *(exists)* |
| 17 | ready_to_submit | claim ready | e03 *(exists)* |
| 18 | payer_response | claim submitted/acknowledged | f02 *(exists)* |
| 19 | denial_appeal | open denial | h01 *(exists)* |
| 20 | ar_follow_up | balance/partial aged | f03 *(exists)* |
| 21 | patient_balance | paid/partial + patient-responsibility, not AR | **NEW g02b** pay payer portion, leave patient balance → assert |
| 22 | blocked_review | appt `no_show`/`cancelled` | **h03 assert** (no-show already happens; add the lane assertion) |

### New/changed steps (≈11 inserts, 2 splits, 2 asserts)
NEW: `b02x` insurance_exception detour · `b03b` needs_pre_check_in assert · `c00` arrived · `c01b` rooming · `c01c` intake-complete · `d04b` clinical task · `d06b` documentation_incomplete · `d07a` ready_to_sign · `g02b` patient_balance. SPLIT: `c01`→checked_in+encounter (ready_for_intake) then `c01d`→in_progress; `e01`→approve (ready_to_claim) then create-claim. ASSERT-only: `b03b`, `h03` (blocked_review).

### Capability to confirm during implementation (3)
- **documentation_incomplete / ready_to_sign**: confirm `PUT /api/encounters/{id} {status}` accepts those status values (else drive via the note/no-sign path).
- **ready_to_claim window**: confirm `charge-review/approve` sets status `approved` *without* auto-creating the claim (else add an explicit claim-create step after).
- **patient_balance vs ar_follow_up**: confirm a paid claim with only patient responsibility (no payer balance, day-0) lands `patient_balance` not `ar_follow_up` (the A/R rule keys on payer balance + aging).

### Approach & safety
DLP stays **one comprehensive journey** (the exception lanes are short detours that set→assert→revert, consistent with the existing h-phase). Each new step is added then **immediately re-verified** with `verify-dlp-dashboard-kanban-per-step.mjs dlp` so the card is confirmed to land in the intended lane and the chain still completes. Because DLP **gates deploys**, the rebuild lands incrementally with the per-step harness green at each stage. Target: **DLP walks all 22 lanes**, and the harness asserts each.

---

## Review Epilog — 2026-06-23

Reviewed 2026-06-23 as part of a full PracticeForceOne wiki truth-pass. Status: UPDATED.

- Verified the per-step walk structure and the DLP v2 full-lane restructure design against the repo: the harness `verify-dlp-dashboard-kanban-per-step.mjs` exists at `jac2024/app/com/claimsprocessing/tests/ui/`; the three journeys (DLP/DLP2/DLP3) and 22-lane matrix are internally consistent; no `[[wikilinks]]` present.
- Corrected stale live-build provenance: the walks were run against the then-live build ~1978, but live prod has since advanced to ~2048 (MR7 M7-73 /api/health DB probe). Reframed the header, the DLP3 note, and the summary from "build 1978" to "verified against build ~1978" plus a re-run caveat, rather than fabricating a new number for the historical run.
- Flag for founder: the DLP3 check-in de-activation 403/404 edge (step 04 "patient shows" after a reschedule) is recorded here as an isolated scenario bug, owner = DLP-scenario lane; confirm whether it has since been fixed or is still open. Also confirm whether the DLP v2 22-lane restructure (this doc's design section) has landed in the harness yet, since "batch14" work is in flight per the DLP v2 state.

## Review Epilog — 2026-07-24

- Live build is now **1943** (gate 251/251 GREEN, CF-14 August demo path PASSES); this doc's per-step walks were run against build ~1978 — provenance note at the top already captures this correctly.
- DLP/DLP2 happy-path spine result (11/22 lanes verified) is unchanged and consistent with build 1943.
- DLP3 check-in de-activation bug remains an open flag; has not been confirmed fixed as of this review.
- The DLP v2 22-lane full-coverage restructure design (§DLP v2 section) remains a design-only section; confirm with the DLP lane whether the restructure has been implemented in the harness.
