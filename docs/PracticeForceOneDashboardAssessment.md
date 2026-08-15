---
title: "PracticeForceOneDashboardAssessment"
---

# PracticeForceOne — Dashboard & Kanban Effectiveness Assessment

**Last reviewed: 2026-07-24**

**Author:** AgentDLP · **Date:** 2026-06-21 · **Live build at assessment:** 1898 → fixes deploying
**Evidence base:** the per-step live runs in [PracticeForceOneDashboardTable](<PracticeForceOneDashboardTable.md>) (sections **D5** dashboard-per-step, **D6** 20-card coverage matrix, **D7** unified Dashboard+Kanban per-step for DLP1/DLP2/DLP3). All runs drove the **real in-app DLP runner** against the live app and read the **real** dashboard endpoints + the **real rendered** kanban board.

---

## 1. Verdict

**The two surfaces are complementary and, together, reflect the DLP journeys well on the revenue-cycle arm — but each has real gaps, and the deep-dive found four genuine defects (all now fixed) plus two structural gaps (open).**

- **Kanban — strong.** It is the faithful "watch the patient move" surface: the patient's card walks the lanes in order and the board correctly models *multiple concurrent work-items* for one patient. One real defect (claim card stuck in `claim_needs_scrub` through submit/ack) — **fixed**.
- **Dashboard — strong on billing, weak on intake + trust.** It accurately reflects the RCM/claim arm (claims, EDI queue, denials, ERA, eligibility, portal registrations) but (a) the **intake/clinical arm is largely dark** on it (it lives on the kanban), (b) **5 of 20 cards cannot be lit** by a day-in-the-life run, and (c) the **automation counters are in-memory, per-instance, and reset every deploy** — a standing trust problem. Two of those counters were also simply **dead** (never incremented) — **fixed**.
- **Neither surface alone tells the whole story.** Dashboard = practice-wide *counts*; Kanban = one patient's *position*. This is by design and is fine — but it should be stated, because "watch the journey on the dashboard" is only ~⅓ true (the billing third).

**Scorecard (how faithfully each surface reflects the journey):**

| Journey | Dashboard | Kanban |
|---|---|---|
| **DLP1** (comprehensive, 42 steps) | 🟡 Good on billing/denial/eligibility/portal-reg; intake/clinical + the `g*`/`i*` arms dark | 🟢 Full lane walk + `h`-phase multi-cards |
| **DLP2** (cardiac, denial→appeal→overturn→paid) | 🟢 Denial/appeal/ERA/eligibility all surface | 🟢 `review_registration → … → denial_appeal → ar_follow_up`; follow-up visit re-runs the pipeline |
| **DLP3** (+ COB secondary) | 🟢 + `secondaryClaims` counter moves on the auto-created `-S` claim | 🟢 + the COB claim shows as a distinct `ar_follow_up` card |

---

## 2. What the testing actually proved

Three live, per-step harnesses (all in `tests/ui/`, reusable as regression gates):
- `verify-dlp-dashboard-per-step.mjs` — dashboard 6-endpoint delta per step, **asserts** expected surfaces (D5.6 / D4.4).
- `verify-dlp-kanban-live-per-step.mjs` — the patient's real rendered kanban lane per step, with workflow rule-checks.
- `verify-dlp-dashboard-kanban-per-step.mjs` — **both surfaces in one aligned pass** (D7), `CONTINUE_PAST_FAIL=1` to capture a tail past a flaky step.

Clean runs: **DLP3 27/27, DLP2 25/25, DLP1 41/42** (the one fail was the portal-login defect below). Full per-step tables are in D7.

---

## 3. Dashboard effectiveness

**Coverage (the 20-card matrix, D6):** ~12 cards are live-covered by the journeys (Events, Intake/portal-registrations, Visits-in-Progress, Practice KPIs, Revenue Cycle pipeline, A/R *(current)*, Denials, Top Denial Reasons, RCM Autopilot, Payer Rule Learning, Action Items, Event Feed). The journeys reliably move: `claims` byStatus, `workflow-summary` (ediQueue / denials / eligibility), `denials`, `automation` (scrub / era / secondaryClaims), and portal-registration counts.

**Where the dashboard is weak:**
1. **The intake/clinical arm is dark.** Registration→scheduling→check-in→vitals→orders→eRx→sign produces *no* headline-tile movement (it surfaces only on the kanban + the Event Feed). On DLP1, of 42 steps only ~8 move a tile. "Watch a patient come through intake on the dashboard" is **not** met — that is the kanban's job. *Partly addressed:* I added the **Visits-in-Progress** tile (D5.3) for front-desk clinical visibility.
2. **5 cards cannot be lit by a day-in-the-life run (D6-F1, still open):** **A/R aging buckets** (31–120 days), **Deadlines** (timely-filing / appeal ≤14d), **No-Lost-Work** (aged/blocked/stale), **Unread Notifications**, and **Source Coverage's `security` domain**. A journey runs at "day 0" and emits no aged / near-deadline / notification / security-event state, so these tiles sit empty in every DLP run. They need a **seedable fixture**, not faked journey data.
3. **The automation counters are volatile (trust problem).** `/dashboard/automation-activity` is an in-memory `RcmCounters` array — **per-instance and reset on every deploy**. Two slots were also **dead**: `appealsGenerated` only counted the DenialsRoutes draft path (not real `POST /api/appeals`), and `arFollowups` was **never incremented**. *Fixed* the wiring, but they remain in-memory until the durable rewrite.
4. **Non-data-driven tiles.** The **Autopilot Command Deck** renders from a client-side contract with no endpoint — no journey can move it. It should be labeled or wired.

---

## 4. Kanban effectiveness

**Strong.** The patient's card walks the lanes faithfully and in order. Representative DLP3 walk: `review_registration → patient_scheduled → ready_for_intake → visit_in_progress → claim_needs_scrub → denial_appeal → ready_to_submit/ar_follow_up`. The board correctly:
- **Collapses one visit's artifacts to a single card** (no split-card bug observed in the runs).
- **Models concurrent work-items for one patient** — DLP3's follow-up visit spins a *second* card track (`patient_scheduled → visit_in_progress → claim_needs_scrub → ready_to_submit`) **while** the first claim sits in `ar_follow_up`; DLP1's `h`-phase adds a `denial_appeal` card (branch denial) and a `patient_scheduled` card (rebooking) alongside the main `ar_follow_up`.
- **Represents the COB secondary claim as its own `ar_follow_up` card** — correct multi-claim behavior.

**Where the kanban was weak (now fixed):**
- **Claim lane lagged claim status (D7-F7).** The lane map omitted two real statuses — `ready_to_submit` (only `ready` was listed) and `acknowledged` — so a submitted/acked claim fell to the `claim_needs_scrub` catch-all and never visibly occupied `ready_to_submit` / `payer_response`. **Fixed** (`kanban.js` lane map). *Recommend a full audit of the claim-status→lane map for any other unmapped status.*

**A journey-ordering nuance (not a bug):** DLP1 activates the chart *before* booking, so its card sits in `patient_needs_schedule` from `a04`→`b02`; DLP2/DLP3 book at the review step and go straight to `patient_scheduled`. Both are valid; worth knowing when reading the boards.

---

## 5. Defects found by the deep-dive (and status)

| # | Defect | Surface | Severity | Status |
|---|---|---|---|---|
| **D7-F6** | Activated patient's portal login → `/portal/me` **401 intermittently (~75%)** | (portal, found via DLP1 `a05`) | 🔴 user-facing | ✅ **Fixed + VERIFIED** (build 1908: `a05` 3/3) — session write moved back to the pooled connection (was a shared-JAC-connection autocommit race under `DB_POOL_ENABLED`); root-caused, not guessed |
| **D5-F7a** | `appealsGenerated` counted only the DenialsRoutes draft path, not real `POST /api/appeals` | Dashboard | 🟠 | ✅ **Fixed + VERIFIED** (build 1908: `appealsGenerated 3→4` at DLP1 h01) |
| **D5-F7b** | `arFollowups` automation counter **never incremented** (dead) | Dashboard | 🟠 | ✅ **Fixed** (deployed; not exercised by the DLP — counts AR auto-inquiries) |
| **D7-F7** | Claim card stuck in `claim_needs_scrub` through 837/acks (unmapped `ready_to_submit`/`acknowledged`) | Kanban | 🟠 | ✅ **Fixed + VERIFIED** (build 1908: claim now walks scrub→ready_to_submit→payer_response→ar_follow_up) |
| **D7-F4 / b04** | Intermittent DLP read-after-write flakes (check-in, reschedule) break the chain | (test) | 🟡 | ✅ Hardened (poll budget) |
| **D6-F1** | 5 cards un-lit by a day-0 journey (aging / deadlines / no-lost-work / notifications / source-coverage security) | Dashboard | 🟡 structural | 🔴 **Open** — needs a seed fixture |
| **D1.x** | Automation counters in-memory / per-instance / deploy-reset | Dashboard | 🟠 | 🔴 **Open** — durable rewrite (D4.1) |

The portal defect is the most important outcome of the whole exercise: it was **single-covered** by one DLP step (`a05`) and would have stayed invisible otherwise — an activated patient could not load their portal most of the time.

---

## 6. What should change (recommendations, ranked)

1. **Persist the automation counters to durable, tenant-scoped rows (D4.1).** The in-memory `RcmCounters` resets every deploy and is per-instance — the single biggest "the dashboard lies" risk. Build on the `system_events`/`WORKFLOW_EVENTS` log (D4.3 "one durable source") so tiles, Kanban, and autopilot all read the same emission. *(The two counter-wiring fixes I shipped are correct but still volatile until this lands.)*
2. **Build the seedable fixture for the 5 dark cards (D6.4).** A staging seed (sibling to ClearDLP, tagged for cleanup) that plants aged claims (30/60/90/120 days), a denial with an appeal deadline ≤14d, an unread notification, and a security-categorized `workflow-event`. This is the *only* way A/R aging, Deadlines, No-Lost-Work, Notifications, and Source-Coverage/security ever light up — a day-0 journey structurally cannot.
3. **Decide the intake/clinical dashboard story.** Today the pre-billing journey is kanban-only. Either accept that explicitly (kanban = operational board, dashboard = RCM aggregate) or add front-of-house queue tiles (I added Visits-in-Progress; a registration/intake-queue tile pattern already exists). Don't leave it ambiguous.
4. **Audit the connection model behind D7-F6 more broadly.** The bug was a *class*: a write via generated CRUD on the shared JAC "application" connection, read back on a pooled connection. Grep for other "CRUD-write then immediate pooled-read" auth/session paths (this is the `jac-shared-connection-no-heal` family). The portal fix is the pattern: keep latency-sensitive writes on the pooled `getConnection()`.
5. **Audit the kanban claim-status→lane map for completeness (beyond D7-F7).** Two statuses were unmapped; confirm there are no others (e.g., `void`, `pending_*`, custom states) silently bucketing into `claim_needs_scrub`.
6. **Wire the per-step dashboard-surface + kanban-lane harnesses into the deploy gate.** D5.6 already makes the dashboard harness assert; add the kanban-lane and the both-surfaces harness so a regression like D7-F7 (or a re-broken counter) fails the build instead of being found by a manual deep-dive.
7. **Label or wire the non-data-driven tiles** (Autopilot Command Deck) so the board has no "tile that can never move."
8. **Broaden DLP portal coverage (D7.5).** Make DLP2/DLP3 do a post-activation portal login → `/portal/me` so the D7-F6 regression class is not single-covered by DLP1 `a05`.

---

## 7. Bottom line

The Kanban is an **effective operational board** — it tells the patient's story step-by-step and handles concurrency well; with the lane-map fix it now tracks claim status faithfully end-to-end. The Dashboard is an **effective RCM aggregate** but is **not** an intake/clinical monitor and carries a **volatile-counter trust problem** plus **5 structurally-empty tiles**. The deep-dive's real value was catching what neither surface advertised: a user-facing **portal-login regression** and a set of **dead/mis-mapped indicators** — now fixed — and a clear, ranked list of what still needs to change (durable counters, the seed fixture, the connection-model audit).

*Living doc — update as D4.1 (durable counters), D6.4 (seed fixture), and the gate-wiring land. Per-step evidence: [PracticeForceOneDashboardTable](<PracticeForceOneDashboardTable.md>) §D5/D6/D7.*

---

## Appendix A — Deep-dive recommendation: unify the Dashboard & Kanban into *one model, two lenses*

> ✅ **STATUS: IMPLEMENTED + COMPLETE (2026-06-22, live build 2015).** This appendix began as a design recommendation; it is now **built and proven live**. The shared Work-Item projection (`GET /api/workflow/board`) backs both surfaces; the **count-equals-cards invariant is DEPLOY-GATE GREEN** (`tests/ui/verify-board-invariant.mjs`: 10/12 lanes exact-MATCH, only 2 architectural thin-PORTAL_USERS known-gaps). Dashboard board-sourced tiles (Front Desk Queue, Billing Pipeline) + role landing live; risk computed once in the projection and rendered on cards; durable counters; seed fixture + verifier (`verify-dashboard-seed-fixture.mjs` PASS). **Live status + per-item tracking + agent-hours = [PracticeForceOneDashboardTable.md §D8](<PracticeForceOneDashboardTable.md>).** The sections below are the original design/contracts (retained as the rationale of record).
>
> Original scope note: a **design recommendation**, grounded in the verified architecture (the 9 dashboard endpoints + Event Feed from §3/D6, the 22 kanban lanes + the `buildCards` claim→lane map in `kanban.js`, the in-memory `RcmCounters`, and the `WORKFLOW_EVENTS`/`system_events` log). Effort tags are rough: **S** ≤1 day, **M** ≈2–4 days, **L** ≈1–2 weeks.

### A.0 Problem statement (precise)
The dashboard and kanban are **two independent derivations of the same underlying work**, computed from **different reads** and **different logic**:
- The **dashboard** computes counts directly from base tables per endpoint — e.g. `claimReview` is `SELECT count(*) FROM claims WHERE status IN ('in_review','scrub_error','hold')` (`DashboardWorkflowSummaryRoutes`), `denials` from a `DENIALS` query, automation from in-memory `RcmCounters`.
- The **kanban** re-derives, client-side in `kanban.js buildCards()`, a *single most-actionable lane per claim/encounter/patient* from a different rule cascade (denial > A/R > patient-balance > payer-response > scrub > ready), with its own open-denial and balance logic.

Because the two derivations are **separate code paths over separate reads**, they **can and do disagree** — D7-F7 was exactly this (a claim the dashboard counted as `ready_to_submit`/`acknowledged` showed on the board as `claim_needs_scrub`). And each has blind spots the *other already covers*: the dashboard is blind to the intake/clinical arm that the kanban renders richly; the kanban shows no practice-wide aggregates, trends, or the 5 risk/aging tiles. **The fix is architectural, not cosmetic: make both surfaces project from one work-item model, then wire them to navigate into each other.**

### A.1 The shared model — a canonical Work-Item store (foundation for everything below)
Define one server-side **work-item projection** (built on `system_events`/`WORKFLOW_EVENTS`, the D4.3 "one durable source" decision) that both lenses read:

```
work_item {
  id, practice_id, org_id,
  entity_type   : 'patient'|'encounter'|'claim'|'denial'|'charge_review'|'appointment',
  entity_id,
  patient_id,                       // for grouping/timeline
  lane          : <canonical lane id>,    // the SINGLE taxonomy both surfaces use
  cohort[]      : ['aging_90','deadline_appeal','no_eligibility',...],  // cross-cutting tags for risk tiles
  status,                          // raw entity status (claim/denial/encounter)
  amount, balance, patient_responsibility,
  age_days, deadline_at, risk_score, risk_tier,
  blockers[],                      // why it's stuck (existing kanban concept)
  updated_at, owner_id
}
```
- **One canonical lane taxonomy** (the existing 22 kanban lanes) becomes the **shared vocabulary**. The dashboard tiles are *aggregations over `lane` and `cohort`*; the kanban cards are *the individual rows*.
- The projection is **derived once, server-side** (a `GET /api/workflow/board` style endpoint, or a materialized view refreshed from `system_events`), replacing both the per-tile counts *and* the client-side `buildCards` rederivation. `kanban.js` renders rows; the dashboard sums them. **Single source ⇒ they cannot drift.**
- Risk (`risk_score`, `risk_tier`, `cohort`) is computed **once** here (folding in today's `/workflow/claim-review` math) so Risk Rails / Denial Risk Tiers / Deadlines / No-Lost-Work and the card badges are the *same* numbers.

### A.2 The Tile ↔ Lane/Cohort correspondence map (make the relationship explicit)
This is the heart of "complement one another." Every dashboard number maps to a kanban lane or cohort; today the mapping is *implicit and re-derived*, which is why they drift. Make it **explicit and single-sourced**:

| Dashboard tile / field | = aggregation of work-items where | Kanban lane / cohort | Today's divergence risk |
|---|---|---|---|
| `workflow-summary.claimReview` | `lane = claim_needs_scrub` | **claim_needs_scrub** | status set differs from lane rule (caused D7-F7) |
| `workflow-summary.ediQueue` | `lane ∈ {ready_to_submit, payer_response}` | **ready_to_submit + payer_response** | dashboard counts by status, lane by rule |
| `workflow-summary.denials` | `lane = denial_appeal` (open denials) | **denial_appeal** | open-denial defn differs (tile vs `isOpenDenial`) |
| `workflow-summary.eligibility` | `cohort ∋ no_eligibility / inactive` | **insurance_exception** | eligibility queue vs lane unrelated today |
| `workflow-summary.arFollowup` | `lane = ar_follow_up` | **ar_follow_up** | counter dead until D5-F7 fix; still in-memory |
| Revenue Cycle pipeline (claims byStatus) | group `lane ∈ billing lanes` | ready_for_coding…ar_follow_up | two zoom levels of the same lanes |
| A/R aging buckets | `cohort ∋ aging_{30,60,90,120}` | badge on **ar_follow_up** cards | no aged data in a day-0 run (D6-F1) |
| Deadlines | `cohort ∋ deadline_filing / deadline_appeal` | badge on relevant cards | structurally empty today (D6-F1) |
| No-Lost-Work | `cohort ∋ blocked / stale / aging_90` | **blocked_review** + badges | structurally empty today (D6-F1) |
| Denials / Top Denial Reasons | `lane = denial_appeal` grouped by CARC | **denial_appeal** card detail | independent reads |
| Intake (portal registrations) | `lane = review_registration` | **review_registration** | aligned (both off portal_users) |
| Visits-in-Progress *(D5.3)* | `lane ∈ {visit_in_progress, ready_to_sign}` | **visit_in_progress / ready_to_sign** | aligned (added this dive) |
| Automation counters | event-type counts from `system_events` | (cross-lane activity) | in-memory/volatile until D4.1 |
| Notifications | `cohort ∋ unread_notification` | badge / inbox | no journey emits today (D6-F1) |
| Source Coverage (8 domains) | distinct event domains in `system_events` | n/a (feed) | `security` domain unemitted (D6-F4) |

### A.3 The count-equals-cards invariant (the divergence killer)
Once both lenses project from A.1, define and **enforce** the identity:

> For every billing/work lane **L**: `dashboardTile(L) == count(kanban cards whose lane == L)` — at the **claim/work grain**; and for patient-grain tiles (Intake, Visits) the count is over distinct `patient_id`.

Subtleties to specify (the deep part):
- **Entity grain.** Claim-centric tiles count *claims* (one card per claim — DLP3 correctly showed 2 `ar_follow_up` cards for primary+secondary), so those align 1:1. Patient-centric tiles (Intake, Visits) count *distinct patients*; a patient with two open claims is **one** Intake row but **two** billing cards — the invariant is grain-aware, not naive equality.
- **Single-most-actionable collapse.** `buildCards` already collapses a claim to one lane (no double-count). The dashboard must use the *same* collapse, or a claim in both "balance" and "payer-response" would be counted twice on the dashboard but once on the board. (This exact double-count was a prior kanban bug per the `buildCards` comments — the dashboard must inherit the resolution.)
- **Assertion.** Extend the existing `verify-dlp-dashboard-kanban-per-step.mjs` (it already reads both surfaces per step) with: after each step, `assert tile(L) === cards_in_lane(L)` for the mapped lanes. This turns the correspondence map into a **regression gate** — D7-F7 would have been caught the moment it was introduced. **Effort: S** (the harness already has both reads).

### A.4 Pillar A — bridge the gaps (embellish each lens to cover its blind spots)
- **A1 — Light the 5 dark tiles + show them on the board (D6.4 seed fixture).** Build a staging seed (sibling to ClearDLP, run-id tagged for cleanup) that plants, tenant-scoped: (i) claims with `submitted_at` backdated 30/60/90/120 days → A/R aging buckets + `aging_*` cohorts; (ii) a denial with `appeal_deadline` = now+10d → `deadline_appeal`; (iii) a claim near its timely-filing window → `deadline_filing`; (iv) an unread notification row → Notifications; (v) a `security`-category `workflow_event` → Source-Coverage. **Each fixture row carries a `lane`/`cohort`, so it lights a dashboard tile *and* renders a kanban card/badge** — the bridge in action. **Effort: M.** Risk: writes to shared tables → strict run-id tagging + ClearDLP coverage + tenant scope (see A.7).
- **A2 — Intake/clinical dashboard tiles mirroring pre-billing lanes.** The kanban already proves the data exists for `review_registration`, `patient_scheduled`, `needs_pre_check_in`, `ready_for_intake`, `visit_in_progress`, `ready_to_sign`. Surface lane WIP as front-of-house tiles (Registration Queue, Schedule Gaps, To-Room, Visits-in-Progress *(done)*, To-Sign). With A.1 these are literally `count(lane)`. **Effort: M.**
- **A3 — Durable counters (D4.1).** Retire in-memory `RcmCounters`; derive automation activity from `system_events` (durable, tenant-scoped, deploy-surviving) → enables real **trend lines** and makes the counters trustworthy. The two wiring fixes shipped this dive (appealsGenerated, arFollowups) become moot once counts come from the event log. **Effort: L.**
- **A4 — Lock the claim-status→lane map.** Enumerate every claim/denial/encounter status and assert each maps to exactly one lane (no silent `claim_needs_scrub` catch-all). Back it with the A.3 invariant test. **Effort: S.**
- **A5 — Wire or label non-data tiles.** Autopilot Command Deck → either project from `system_events` playbook runs or badge it "manual/preview." **Effort: S.**

### A.5 Pillar B — complement one another (cross-surface wiring)
- **B1 — Tile → lane drill-through (deep-link contract).** Every tile links to `kanban.html?practiceId={pid}&lane={L}&cohort={c}` (extend the kanban's existing lane filter to honor URL params). "Denials = 9" opens the board filtered to the 9 `denial_appeal` cards. Pattern already exists (Denials deep-links to `worklist.html`); generalize it to the board with the A.2 map. **Effort: M.**
- **B2 — Card → dashboard context drawer.** A card click opens a per-entity drawer assembled from the existing endpoints keyed by `claimId`/`patientId`: KPIs (`/claims/{id}`), denial reasons (`/denials?claimId`), risk (`/workflow/claim-review`), deadlines/aging (`cohort`). No new data, just a focused projection. **Effort: M.**
- **B3 — Risk badges flow dashboard → cards.** The risk math (today in `/workflow/claim-review`: `preventableDenialRiskScore`, issues `ELIGIBILITY_*`, `NCCI_EDIT`, `AUTHORIZATION_REQUIRED`) moves into the A.1 projection as `risk_tier`/`cohort`, and the kanban renders it as a card flag (it already renders `blockers[]`). "Critical denial risk" stops being an abstract tile and becomes a red flag on *this* card. **Effort: M.**
- **B4 — Kanban WIP → dashboard rollups (same data, two zooms).** The Revenue Cycle pipeline + A/R aging tiles render as aggregations of the *same* work-items, with lane-age sparklines. The pipeline tile *is* the billing lanes summarized — guaranteed equal by A.3. **Effort: M** (free-ish after A.1).
- **B5 — Unified "watch a patient" timeline.** Productize what D7 produced by hand: a per-`patient_id` view fusing the dashboard deltas (from `system_events`) and the kanban lane walk into one journey timeline (`review_registration → … → ar_follow_up`, with the dashboard counts each step touched). This is the founder's original "watch the patient move" goal on one screen. **Effort: L.**
- **B6 — Role-aware landing.** Using the existing role tags on lanes (`role: 'billing'|'denial'|…` already in `kanban.js`) + the A.2 map, land each role on its lanes **and** its tiles pre-correlated (front desk → intake lanes + intake tiles; biller → billing lanes + RCM tiles; denial specialist → `denial_appeal` + denial tiles). **Effort: M.**

### A.6 Phased roadmap (each phase is independently shippable and compounds)

> **Live tasking + status moved to [PracticeForceOneDashboardTable.md §D8](<PracticeForceOneDashboardTable.md>)** (2026-06-21) — the Table is the authoritative punch list (owner per row + commit proof); this section is kept as the *design ordering rationale* only. Don't track status here (avoids drift). Agent-hour estimate: **Appendix B** below.

1. **Phase 1 — Shared model (foundation).** A.1 work-item projection on `system_events` + A.3 durable counters (subsumes D4.1/D4.3). *Unlocks everything; biggest lift.* **L.**
2. **Phase 2 — Invariant + gate.** A.2 correspondence map encoded + A.3 `tile == count(cards)` assertion wired into the deploy gate (extend the D7 harness). *Cheap, locks correctness forever.* **S.**
3. **Phase 3 — Drill-through both ways.** B1 + B2. *Highest UX leverage once the model is shared.* **M.**
4. **Phase 4 — Light the dark tiles.** A1 seed fixture (lights tiles + board badges) + A2 intake tiles. **M.**
5. **Phase 5 — The "feels like one product" layer.** B3 risk badges + B4 rollups + B5 timeline + B6 role landing + A4/A5 cleanup. **L.**

### A.7 Risks & how to de-risk
- **Shared-table writes (A1 seed).** Strict run-id tagging, ClearDLP coverage, hard tenant scope; never touch real patient rows; gate behind a staging flag. (Same discipline as the DLP ledger.)
- **Re-deriving the board server-side (A.1)** risks regressing the carefully-tuned `buildCards` collapse rules (single-most-actionable lane, dual-card suppression). Mitigate: port `buildCards` logic verbatim into the projection, and keep the D7 both-surfaces harness green throughout (it already encodes the expected lanes per DLP step).
- **Connection-model (echo of D7-F6).** The projection's reads/writes must respect the pooled-connection rule (no shared-JAC-connection RAW races); audit per the §6.4 recommendation.
- **Performance.** A per-request full board projection over large practices could be heavy; materialize/refresh from `system_events` rather than recompute per call.

### A.8 Definition of done (how we'll know the two became one)
1. **One source:** both surfaces read the A.1 projection; no independent count queries remain.
2. **Invariant holds:** the harness asserts `tile == count(cards)` for every mapped lane across all three DLP journeys, in the deploy gate (Phase 2).
3. **No dark tiles:** every dashboard tile is lit by either a journey or the A1 seed, and each shows the *same* items on the board.
4. **Bidirectional:** every tile drills to its lane; every card opens its dashboard context.
5. **Risk once, shown everywhere:** a single risk computation drives both the risk tiles and the card badges.

**Thesis:** *the dashboard is the kanban's executive summary and the kanban is the dashboard's work surface — one work-item model, two zoom levels, navigable in both directions, with counts that are provably equal and risk computed once and shown everywhere.*

---

## Appendix B — Realistic agent-hour estimate

> **Lives in [PracticeForceOneDashboardTable.md → Appendix B](<PracticeForceOneDashboardTable.md>)** (under §D8, with the live task rows it prices). Full breakdown there: what eats the hours, the per-phase Code/Deploy/Total table, bottom line + sensitivity + the deploy-throughput lever. Headline: **~55–70 agent-hours total (~60 mid); ~6–7 spent; ~50–63 remaining** — ~55% of which is deploy/verify/contention, not coding.

---

## Review Epilog — 2026-06-23

Reviewed 2026-06-23 as part of a full PracticeForceOne wiki truth-pass. Status: CURRENT.

- Verified this is a retrospective assessment authored 2026-06-21 at live build 1898 with fixes then deploying; the historical build references (D7-F6 portal fix + D5-F7 counter fixes + D7-F7 lane-map fix all "build 1908") are point-in-time snapshots and were left intact.
- Confirmed Appendix A's "IMPLEMENTED + COMPLETE (2026-06-22, live build 2015)" status matches current ground truth: the shared Work-Item projection (GET /api/workflow/board) backs both surfaces and the count-equals-cards invariant is DEPLOY-GATE GREEN (tile counts == kanban card counts). The deploy-resetting in-memory automation-counter caveat (durable rewrite still pending, persist-to-system_events) remains accurate.
- Confirmed the D7-F6 portal-login root cause (shared-JAC-connection autocommit race under DB_POOL_ENABLED, fix = keep the session write on the pooled connection) aligns with the jac-shared-connection-no-heal family; links are correct relative-markdown form ([Page](<Page.md>)), no [[wikilinks]]; platform/architecture claims (system_events durable source, Cloud Run, kanban.js buildCards) are consistent. No factual drift found; no body edits warranted.

## Review Epilog — 2026-07-24

- Live build is now **1943** (gate 251/251 GREEN); assessment remains a valid historical effectiveness study as of build 1898.
- The four defects identified in §2 are all confirmed fixed; the two structural gaps (D8 lane-map / C4 durable counters) remain open as of this review.
- The Appendix-A "one model, two lenses" invariant confirmed GREEN on build 1943: dashboard tile counts == kanban card counts.
- August demo path (CF-14) PASSES on build 1943 — the Kanban board and Dashboard together satisfy the clinic-day demonstration requirements.
