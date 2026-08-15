---
title: "PracticeForceOneDashboardTable"
---

# PracticeForceOne Dashboard — Hardening Task Table (DashboardTable)

**Owner:** AgentDashboard · **Created:** 2026-06-15 · **Last updated:** 2026-07-24 · **Last reviewed: 2026-07-24** · **Status:** ACTIVE — mission = **"Operations Cockpit Perfection"** (founder, 2026-07-07). **C1 operational exactness: ✅ COMPLETE — LIVE on build 1683 + runtime-proven (`verify-dashboard-exactness.mjs` 19/19, `verify-dashboard-bands.mjs` 14/14)**; 7 approximation findings fixed same day (C2 ledger). Next: **C4/D4.1 durable automation counters** → C2 leftovers (A/R LIMIT-200, cross-entity pipe links) → **C3 role walks**.
**Active workstream (latest, 2026-06-22):** **D8 — Appendix A "one model, two lenses" unification** is **✅ COMPLETE (live build ~2015)** — the count-equals-cards board invariant is DEPLOY-GATE GREEN (dashboard tile counts == kanban cards across the real lanes; 10/12 exact-MATCH, only the 2 architectural thin-`PORTAL_USERS` known-gaps remain). Only optional D8.6 polish (override-deletes, full A.2 map across entities) and the seed-fixture follow-ups are still open. Earlier deep-dives **D5/D6/D7 are COMPLETE (2026-06-21)**: Reset View honesty fix (D5.1), Event Feed limit 50→500 + pagination (D5.2), "Visits in Progress" clinical tile (D5.3) shipped on build `76f64fa0`; the portal `/portal/me` 401 race (D7-F6) was **fixed + verified** at build 1908 (commit `2a5209e26`). See the D5/D6/D7/D8 sections below.
**Mission:** turn the event dashboard from an instrumentation panel into a trustworthy, role-aware **decision/cockpit** surface — fix the trust tiers, make every number answer "so what / now what," and converge onto one durable event log. Tasking form of the assessment [PracticeForceOneDashboard.md](<PracticeForceOneDashboard.md>) (read it for the why); operator/test manual is [PracticeForceOneDashboardOperatorGuide.md](<PracticeForceOneDashboardOperatorGuide.md>); smoke = [RB-561](<runbooks/RB-561-dashboard-smoke-test.md>).

**Status legend:** Open · In&nbsp;Progress · ✅ Done (date + proof) · ⏸ Held · ⛔ Founder-gated.
**Convention:** rows map to the assessment's recommendations (R1–R6) and phases (P0–P3). A row is Done only with runtime proof.

**Founder decisions in force:** (1) **one log for everything** — a single append-only `system_events` store, no federation (resolves assessment §15.1); (2) click-to-work: the **in-place drawer is reserved for *terminal 1-click* tiles only**; substantive tiles (denials, charge review, etc.) **deep-link** to their work page (founder, 2026-06-16, superseding the 2026-06-14 "always drawer" decision — the Denials drawer prototype was removed in commit `84bb7a85a`); (3) analysis is graded against **real clinic workflows** (the DLP spine).

---

## FOUNDER TASKING — 2026-07-07: Operations Cockpit Perfection (ACTIVE MISSION)

> **The mission changed.** Stop building dashboard features; start perfecting the operational command
> center. The single grading question: *"Can a real clinic operate from this dashboard all day without
> hunting for information?"* The Dashboard is judged by how quickly someone completes real work, not by
> widget count. No new architecture, no redesign, no new event systems — perfect what exists.
> Constraints preserved: Appendix A, layout, no new widget categories, no parallel event systems,
> one-model-two-lenses, Dashboard/Kanban invariant, DLP validation, provenance, role-aware philosophy.
> **Runtime proof for every completed improvement.** Done = a clinic manager can run an entire shift
> from this screen with every action flowing to the exact work requiring attention.

**The five priorities (each has its own ledger below):**

| P | Mission | Ledger |
|---|---|---|
| **C1** | Complete D2.3 operational exactness — every actionable count opens exactly its work, destination pre-filtered, **dashboard count == worklist count** | §C1 table |
| **C2** | Eliminate approximation — audit every widget for disagree/stale/over/under-count/partial-failure lies | §C2 audit ledger |
| **C3** | Operational workflow validation — run full clinic days per role (front desk / MA / provider / biller / denials / admin), record + remove friction | queued behind C1 slice 3 |
| **C4** | Finish remaining D4 durable-state work — persist automation activity (tenant-scoped), server-side composites, converge on the single `system_events` log | existing D4 rows (D4.1/D4.2/D4.3) |
| **C5** | Operational quality bar per tile — correct · actionable · explainable · drillable · regression-tested (all five or not done) | applied per tile as C1/C2 close |

### C1 — Exactness ledger (founder examples → state)

| Count | Exact destination | Status |
|---|---|---|
| Scrub Failures | `claims.html?status=scrub_error` (statusFilter preset) | ✅ LIVE 1681 (`70eae78cf`, slice 1) |
| Pending Registrations | `kanban.html?focus=review_registration` (lane focus; count==cards invariant covers parity) | ✅ LIVE (pre-existing) |
| Eligibility needs attention | `eligibility-queue.html?view=failed` — failed view == the summary predicate exactly (audit: claim-review + edi-queue action items already EXACT, identical WHEREs) | ✅ **LIVE 1683 + verified** (19/19 run: failed view lands, count parity 0==0 on empty book) |
| Revenue at risk >90d | `ar-followup.html?view=90-plus` — NEW combined 90-119+120+ system view (the exact at-risk population); No-Lost-Work drawer + exception rows land there too | ✅ **LIVE 1683** (`6e41175e2`); dollar-parity *gate* still blocked on C2-9 (LIMIT 200) |
| Denials / claims pending review / EDI pipeline / A/R follow-up (action items) | `worklist.html?view=needs-attention` · `claim-review.html` · `edi-queue.html` · `ar-followup.html` — the last three audited EXACT as-is (destination endpoint == count query) | ✅ audit pass 2026-07-07 (denials fixed in slice 2) |
| Appeals Due | `worklist.html?view=approaching-deadline` — view preset on arrival; predicate = due ≤14d **including overdue**, parity-locked to the chip | ✅ **LIVE 1683 + verified** (19/19 run: view lands pre-filtered; chip==sidebar==rows, 0==0 empty book) |
| Denials need attention (action item) | `worklist.html?view=needs-attention` — NEW view mirroring workflow-summary's exact status set (open/pending/in_review/new) | ✅ **LIVE 1683 + verified** (19/19 run) |
| Timely Filing | `reports.html?run=timely_filing_aging` — report already run on arrival | ✅ **LIVE 1683 + verified** (19/19 run: report visible + correct title on arrival) |
| Unsigned Encounters | Visits chips render from **board lane truth** (`/workflow/board` laneCounts for visit_in_progress / ready_to_sign / ready_for_coding — the exact lanes they open); QV drawers list the lane's cards via shared `boardLaneDrawerItems`; honest "approximate (board unavailable)" fallback | ✅ **LIVE 1683 + verified on a REAL book: chips 6/0/6 == lanes 6/0/6** (C2-4 closed) |
| Charge Review | **Exact tile built (D5-F7 closed):** action item "N encounters awaiting charge review" counts the board's charge_review cards in ready_for_coding → `practice-ehr-charge-review.html?view=pending`, a new pending-work queue view filtered to the SAME status set (pending/returned/needs_coding/draft/ready_for_review/in_review/in_progress); `?status=` presets the dropdown | ✅ **LIVE 1683 + verified on a REAL book: action item 6 == pending queue rows 6** |
| Unposted ERAs | **It IS a real data state** (correction): `REMITTANCE_BATCHES` is created `status='pending'` on 835 receipt (EraRoutes:155) and flipped `'posted'` only on completion (:781) — pending = received-not-posted (mid-processing failure), previously invisible. New: payments.html **ERA Batches (835) table** (All/Unposted/Posted, `?view=unposted` pre-filtered) + dashboard action item "N ERA batches received but not posted" from the same endpoint+filter | ✅ **LIVE 1683 + verified** (19/19 run: pre-filtered landing; no-item ⇒ empty table held) |

### C2 — Approximation audit ledger (found so far; grows as the audit sweeps all 20 widgets)

| # | Finding | Status |
|---|---|---|
| C2-1 | **Appeal-due drift:** dashboard counted overdue appeals (`days ≤ 14`), worklist's Approaching Deadline view excluded them (`> 0`) — the most-urgent items were invisible at the destination | ✅ Fixed in `b50fd0b40` (worklist now includes overdue; shared predicate comment locks parity) |
| C2-2 | **Denials action-item drift:** `workflow-summary.denials` counts `STATUS IN (open,pending,in_review,new)` but the worklist "All Open" is `NOT IN (resolved,written_off)` — an `appealed` denial appears in one, not the other | ✅ Fixed in `b50fd0b40` (action item now lands on a view with the server's exact status set) |
| C2-3 | **Cross-practice drift:** worklist always auto-selected `practices[0]`, ignoring the practice chosen on the dashboard (shared `localStorage.practiceId`) — deep-linked counts could compare different practices | ✅ Fixed in `b50fd0b40` (worklist honors + writes the shared practice key) |
| C2-4 | **Visits "To sign" chip** counted `ready_to_sign + complete + documentation_incomplete + pending_documentation` encounters but opens ONLY the `ready_to_sign` lane — and NO client-side count over raw `/encounters` can match the board (ownership rules skip charge/claim-owned encounters; appointment status re-lanes) | ✅ Fixed in `08b787683` — chips render from board laneCounts (the lanes they open); drawers share `boardLaneDrawerItems`; degraded fallback labeled "approximate" |
| C2-7 | **payments.js auto-selected `practices[0]`** ignoring the shared practice key (same class as C2-3) | ✅ Fixed in `3969f07f8` |
| C2-5 | **Automation counters** in-memory, per-instance, reset on deploy; `arFollowups` slot never increments; `appealsGenerated` misses the real `POST /api/appeals` path (D5-F4/F7) | 🔴 Open — this IS the C4/D4.1 work |
| C2-6 | Remaining 20-widget sweep (events, notifications, KPIs, aging buckets, risk tiers, source coverage…) — systematic disagree/stale/over/under/partial-failure pass | Open — next after C1 slice 3 |
| C2-8 | **Eligibility action item** counted problems only (summary: status error OR coverage inactive, 90d) but landed on the queue's "All Checks" default — user had to re-find the problems. `queueCategory==='failed'` is the identical predicate | ✅ Fixed `f6e933b0d` — `eligibility-queue.html?view=failed` preset + exact deep-link + shared practice key. *(Claim-review and EDI-queue audited same pass: already EXACT — identical WHERE clauses to their pages.)* |
| C2-9 | **A/R follow-up endpoint truncates at `LIMIT 200`** — with a book >200 the page under-shows vs the dashboard count. Also: dashboard riskAmt counts any claim with balance & ≥90d from `/claims`; the endpoint restricts to AR statuses (submitted/pending/acknowledged/partial) — populations can drift at the margins | 🔴 Open — needs a count-first endpoint or paging before the dollar-parity check can be gated |
| C2-10 | **Clock-source drift (test-only):** summary's eligibility window uses DB `CURRENT_TIMESTAMP`, the queue endpoint uses `ClockHelper` (honors the testing-date override) — equal in production, can drift under a test clock | 🟠 Noted (accepted; only bites with the override active) |
| C2-11 | **Revenue Cycle pipeline dropped claims:** `renderClaimWidgets`' status keys missed `ready_to_submit` (written by EdiRoutes:888), `appealed`, `closed` — those claims matched no stage and silently vanished from the pipeline sums (under-count) | ✅ Fixed `04cfedafb` — **LIVE 1683** (SC_ALIAS maps them to ready/denied/paid) |
| C2-12 | **Pipeline stage links cross entities:** Denied stage counts CLAIMS (now incl. appealed) but links to the DENIALS worklist; Partial → ar-followup shows the wider AR set. Exactness needs grouped-status deep-links on claims.html (`?status=denied,appealed`) | 🔴 Open (Watch-band tile — lower priority than Act tiles) |

**Deploy log:** first carrier build `803eb8e0` (08:35Z) FAILED in the new C1.3 compile-data step (argfile
comma-binding bug — CICD lane's, fixed `6d7a7e499`; not dashboard cargo). Resubmit `8ed9acd6` queued behind
another lane's deploy which landed as **live build 1683 (`0e988a937`) carrying ALL dashboard commits**
(ancestry-verified incl. `04cfedafb`), so `8ed9acd6` was **cancelled as redundant** (its older snapshot would
have regressed 1683; deploy lock self-heals via the 40-min stale takeover).

## ✅ C1 RUNTIME PROOF — 2026-07-07, live build 1683

- **`verify-dashboard-exactness.mjs` → 19/19 PASS** against live: every deep-link pre-filtered on arrival;
  **Visits chips == board lanes on a real book (6/0/6 == 6/0/6)**; **charge-review action item == pending
  queue rows (6 == 6)**; appeal/needs-attention/ERA/eligibility parity held on empty books (0==0 — re-run
  after a DLP journey for non-zero bite); Timely Filing report pre-run on arrival; 0 console errors.
- **`verify-dashboard-bands.mjs` → 14/14 PASS** (no D2.1/D2.2 regression).
- C1 exactness rows below are now **LIVE + runtime-proven** (C2-11 pipeline fix also in 1683).

**Runtime gate for C1:** `tests/ui/verify-dashboard-exactness.mjs` (behavioral CDP) — follows each deep-link
from the rendered dashboard and asserts the destination lands pre-filtered with **dashboard count == sidebar
count == rendered rows**. Harness honesty proven twice: correctly FAILed the 8 pre-fix checks on 1681, then
**19/19 PASS on 1683** (proof block above). Standing follow-up: re-run after a DLP journey populates denials
so the appeal/needs-attention/ERA/eligibility parity checks bite on a non-zero book.

---

## Status & TODO — 2026-07-07 (AgentDashboard checkpoint — D2 slice LIVE-VERIFIED)

**What landed since the 07-06 checkpoint:** the deploy the whole slice was waiting on arrived — **live build
1681** (provenance commit `6e58ab8ad`; all three lane commits `fa865f3e6` / `70eae78cf` / `0c33657d6` confirmed
ancestors via `git merge-base --is-ancestor`). Post-deploy proof ladder run 2026-07-07:

- **D2.1 + D2.2 (bands + Watch framing): ✅ `tests/ui/verify-dashboard-bands.mjs` 14/14 PASS against live 1681**
  (behavioral CDP as `uat-harness@esarks.com`): band order Act→Watch→Context, all 20 rendered widgets placed
  under their assigned band, none unbanded; Denials reference-impl target+trend+verdict; A/R >90d, KPI
  avg-days-A/R, Revenue-Cycle collections trend, Automation 7d-vs-prior throughput framing, Top-CARC
  concentration, Risk-Tier action verdicts all populate; config panel groups toggles by band; 0 console errors.
- **All-Work focus fix (`0c33657d6`) + P2 slice 1 claims `?status=` deep-link (`70eae78cf`): serving verified** —
  live `/ui/kanban.js` and `/ui/claims.js` downloaded and **byte-identical (`diff`) to the fixed sources**.
  Note: cache-busting has moved to **content hashes** (`kanban.js?v=9978bed444`, `claims.js?v=4332db849a`) — the
  `allworkfocus01` / `statusdeeplink01` tags named in the 07-06 notes are superseded; verify by content, not tag.
  No behavioral harness exists for the card-click→farthest-right-lane walk (new static fingerprints are
  B7-ratchet-blocked); a founder click spot-check on the board is the remaining nicety, not a gate.

**Net:** the D2 P1 deliverables (T1–T3 below) are **live and runtime-proven**; open work continues on P2
exactness (T4), P3 passive-metric audit, P4 per-tile state matrix, P5 role walks, configurable `WATCH_TARGETS`
+ durable automation trend.

### TODO (open work, in priority order — updated 2026-07-07)

| # | Task | Maps | Status |
|---|---|---|---|
| T1 | **Live-verify the All-Work focus fix** (clicking a card focuses/scrolls its farthest-right lane copy, never the All Work duplicate) | founder 2026-07-06 | ✅ Serving-verified 2026-07-07 (build 1681): live `kanban.js` byte-identical to the fixed source. Behavioral click walk has no harness (B7 ratchet blocks new static fingerprints) — founder spot-click welcome, not gating |
| T2 | **D2.1 — Act / Watch / Context tile banding** | R1 / P1 | ✅ **LIVE + verified 2026-07-07** (build 1681, `fa865f3e6`) — `verify-dashboard-bands.mjs` **14/14 PASS** against live |
| T3 | **D2.2 — target + trend + verdict on Watch tiles** (denials = reference impl) | R2 / P1 | ✅ Slice 1 **LIVE + verified 2026-07-07** (build 1681; all 8 framings populate per the 14/14 run). Open follow-ups: per-practice configurable targets, durable automation trend (→ D4.1) |
| T4 | **D2.3 / P2 — Act tiles open exact filtered work** | R4 | ✅ **COMPLETE 2026-07-07 — LIVE 1683, exactness verifier 19/19** (superseded by the C1 ledger above: appeals-due, needs-attention, charge review, unposted ERAs, eligibility-failed, A/R 90-plus, visits lane truth all shipped + proven same day) |
| T4b | **C4 / D4.1 — durable tenant-scoped automation counters** (retire in-memory `RcmCounters`; fix dead `arFollowups` slot + `appealsGenerated` path while persisting) | C4 | Open — **next up** |
| T5 | **D3.2 — persist per-user layout server-side** (today `localStorage` only; D3.1 role landing largely covered by D8.14) | R3 / P2 | Open |
| T6 | **D7.5 — DLP2/DLP3 post-activation portal login → `/portal/me`** so the a05 regression class isn't single-covered | D7-F6 | Open — coordinate with AgentDLP (their journey files) |
| T7 | **D8.6 optional polish** — projection override-deletes + full A.2 map across entities | A.2/A.3 | Open (optional; not required for the invariant guarantee) |
| T8 | **RB-561 dashboard smoke rehearsed by a non-author** (exit-bar item 5) | D0.3 | Open |

*(P3 passive-metric audit — events/notifications tiles are the candidates — and P4 per-tile state matrix /
P5 role walks are the founder's remaining "make it decide" priorities; they queue behind T4.)*

*(D8.17 full-lane DLP coverage — 21/22 lanes, `patient_balance` outstanding — is AgentDLP2's row, tracked in §D8.)*

---

## Previous checkpoint — 2026-07-06 (AgentDashboard, founder-requested)

**Where the lane stands:** the hardening program (D0–D8 / Appendix A) is **COMPLETE** — the count-equals-cards
board invariant has been deploy-gate GREEN since live build ~2015 (2026-06-22). Since then the lane has run in
**founder-directed UI/ops mode**. Shipped since the last checkpoint: dashboard **widget quick-view + sub-widget
scoping** (live build 1600, 2026-06-29) · 3 founder-directed fixes in the patients insurance modal (2026-06-29) ·
kanban **click-scoots-lane-into-view** (`db1ea758f`) · portal emergency-contact relationship dropdown (`db1ea758f`) ·
PracticeForceOne **napkin-pitch drawing** + editable SVG (`1b4b80f03`). Fleet-watch work also closed out: the
`e96a24cee` destructive-sync alarm (all lanes recovered), the ServiceJeo stale-runtime-jar deploy block
(resolved, prod 2151-era), the Cloud Run connection-slot incident, and the **provenance `gitCommit:"unknown"`
thread — ✅ RESOLVED: build 1665 stamps the deployed commit again** (verified 2026-07-06; deployed-ancestor
checks work once more).

**In flight at that checkpoint (since resolved — see 2026-07-07 above):** kanban **card focus/scroll always
targeted the All Work duplicate, never the farthest-right lane copy** (founder report 2026-07-06). Root cause:
`scrollCardIntoView.align()` re-resolved the card with an unscoped first-match `document.querySelector`, which
always lands on the All Work copy (All Work is the first lane in the DOM and duplicates every card). Fixed to
take the LAST lane-card match (= farthest-right lane; All Work only as sole-copy fallback), commit `0c33657d6`
— **rode build 1681, serving-verified 2026-07-07**. *(The TODO table that lived here is superseded by the
2026-07-07 table above.)*

---

## D0 — Assessment & documentation — ✅ DONE

| ID | Feature / Deliverable | Validation | Status |
|---|---|---|---|
| D0.1 | **Deep-dive assessment** — verified widget-by-widget inventory, 5 provenance tiers, real-workflow/DLP role map, R1–R6, P0–P3 roadmap, Part II target-state design preserved | `PracticeForceOneDashboard.md` on master | ✅ Done (2026-06-14, commit `5b04c487b`) |
| D0.2 | **Operator & test guide** — all workflows, per-page step-by-step + endpoints + error contracts + DLP test IDs + troubleshooting | `PracticeForceOneDashboardOperatorGuide.md`, 795 lines, on master | ✅ Done (2026-06-14→15, commits `dbd29ce77`, `fd1553fa8`) |
| D0.3 | **Dashboard smoke runbook** | `runbooks/RB-561-dashboard-smoke-test.md` on master; registered in runbook index | ✅ Done (2026-06-14) — 🔴 not yet rehearsed (flips to fully-Done on first non-author run) |

---

## D1 — P0 Trust / honesty (cheap, urgent — "no widget lies")

*The 8-of-19 hidden-asterisk problem (assessment §3–§4b). Days of work, removes the worst of the "blur."*

| ID | Maps | Feature | Validation | Status |
|---|---|---|---|---|
| D1.1 | R5c | **Provenance badge on all 19 tiles** (🟢 live / 🟡 computed / 🟠 volatile / 🔵 preview) — `WIDGET_PROVENANCE` map + `stampProvenanceBadges()` in `dashboard.html`, hover tooltip per tier | each tile shows its tier; tester can calibrate | ✅ **LIVE on prod** 2026-06-15 — committed (`ea9d25d54`), serving on rev `01852` (cache-bust verified) |
| D1.2 | R5a | **Label the Automation tile** volatile / per-instance / org-wide (Tier D) | badge + tooltip: "per-instance, reset on every deploy, org-wide — NOT a system-of-record count" | ✅ **Built** 2026-06-15 (the 🟠 badge) |
| D1.3 | R5a | **Mark Tier-E preview stubs** (Autopilot, RCM Autopilot, Payer Rule Learning) as *Preview / not operational* | 🔵 badge + tooltip "Preview / not yet operational — no live data" | ✅ **Built** 2026-06-15 |
| D1.4 | R5d | ~~Add `practiceId` to `/api/dashboard/automation-activity`~~ **Reframed** | the in-memory `RcmCounters` are not keyed by practice, so a real per-practice filter is impossible without persistence — the honest P0 fix is the **org-wide label (D1.2)**; the true per-practice fix is **D4.1** (persist) | ✅ Honest-label done (D1.2); per-practice → folded into **D4.1** |
| D1.5 | R5c | **Document each Tier-B/C derivation** (how the composites compute) | operator guide §3.3 trust tiers + the per-tile table | ✅ Done (operator guide on master) |

---

## D2 — P1 Make it decide (framing — "so what / now what") — **ACTIVE WORKSTREAM (founder tasking 2026-07-06)**

> **Founder mission change (2026-07-06):** the lane moves from instrumentation engineering to
> *Director-of-Operations* thinking — every widget must answer **"what should this person do next?"**
> Five priorities: P1 Act/Watch/Context bands · P2 every Act tile opens exact filtered work (no
> searching, no extra clicks) · P3 remove passive metrics · P4 operational polish (empty/loading/
> degraded/stale states) · P5 role-based workflow validation walks. Constraints: no Appendix-A
> redesign, no new architecture/event stores, preserve the one-model-two-lenses invariant,
> runtime proof for every completed feature.

| ID | Maps | Feature | Validation | Status |
|---|---|---|---|---|
| D2.1 | R1 | **Act / Watch / Context hierarchy** — every widget carries a fixed band; grid renders 3 labeled bands (Act on top); reorder/role-landing operate within a band; config toggles grouped by band. Also re-synced the widget catalog to the real DOM (dead intake/intakeQueue/clinicalQueue/pipelineRollup entries removed; kanbanView + visits now managed + provenance-badged; automation badge volatile→live per D8.3) | runtime proof = `tests/ui/verify-dashboard-bands.mjs` (CDP behavioral: band order, per-widget placement, config grouping, 0 console errors) against the deployed build | ✅ **LIVE + verified 2026-07-07** (`fa865f3e6`, build 1681) — verifier **14/14 PASS** against live |
| D2.2 | R2 | **Target + trend + verdict** on Watch tiles — `WATCH_TARGETS` labeled defaults + RAG pills + monthly trend arrows fed by the H3 trends report (months=3). Denials = reference impl (RAG on rate + target ≤8% + denialRatePct trend); A/R >90d-share verdict; KPI avg-days-A/R verdict; Revenue Cycle collections/volume trend; Top-CARC concentration verdict; Risk-Tier act-now verdict; Automation 7d-vs-prior throughput (computed from event window, labeled) | same verifier asserts all 8 framings populate (no naked numbers) | ✅ Slice 1 **LIVE + verified 2026-07-07** (build 1681; all 8 framings asserted in the 14/14 run). Open follow-ups: per-practice configurable targets, durable automation trend (→ D4.1) |
| D2.3 | R4 | **Click-to-work on Act tiles** — terminal-1-click tiles get an in-place drawer; substantive tiles deep-link to their work page | see D2.3 rollout below | In&nbsp;Progress — **P2 slice 1 LIVE on 1681, serving-verified 2026-07-07 (`70eae78cf`)**: `claims.html?status=` now real (statusFilter preset on arrival; scrub-failures action item → `?status=scrub_error` exact); Visits chips → board lanes (drawer detail link follows); Deadlines chips → timely-filing report / denials worklist. Kanban View lane chips already compliant (per-lane drawer + `?focus=`). Next: appeals-due exact filter on worklist, charge-review exactness, unposted-ERAs surface |

### D2.3 — Click-to-work rollout (per tile)

> **Principle (founder, 2026-06-16):** the in-place **drawer pattern is reserved for *terminal 1-click* tiles only** (e.g. a future "Unposted ERAs → Post", "Acknowledge critical result"). **Substantive** tiles (denials, charge review, etc.) **deep-link** to their work page, where the multi-step judgment work actually lives. The Denials drawer prototype (the first row below) was **removed 2026-06-16** (commit `84bb7a85a`); Denials now deep-links to `worklist.html`. **No tile carries an in-place drawer today.**

| Tile | Action(s) | Status |
|---|---|---|
| **Denials** | Appeal / Won / Write-off | ↪ **Deep-links to `worklist.html`** — drawer removed 2026-06-16 (commit `84bb7a85a`). The prototype drawer just funneled to the worklist, so the tile now links there directly. (Drawer was LIVE `ea9d25d54` 2026-06-15 → removed.) |
| Charge review | code/approve → claim | Open (next prototype candidate) |
| Scrub failures | fix → resubmit | Open |
| Stuck claims (un-acked >N d) | status inquiry / follow-up | Open |
| Appeals due | draft/submit appeal | Open |
| Unposted ERAs | post | Open |
| Intake (pending registrations) | review → activate | Open |
| Provider: unsigned encounters / unacked critical results / overdue orders | sign / ack | Open |

---

## D3 — P2 Make it personal (audience — role-aware)

| ID | Maps | Feature | Validation | Status |
|---|---|---|---|---|
| D3.1 | R3 | **Role-default layouts** (front-desk / MA / provider / biller / denial / owner / admin) mapped to the §5 decisions | each role lands on its Act tiles, not another's | Open |
| D3.2 | R3 | **Persist per-user layout server-side** (today it's `localStorage` only) | layout follows the user across devices | Open |

---

## D4 — P3 Durable & real (the "one log" foundation)

*Founder decision: ONE append-only `system_events` log; converge — don't build a parallel pipeline. `WORKFLOW_EVENTS` already exists (events/feed read it) and is the seed.*

| ID | Maps | Feature | Validation | Status |
|---|---|---|---|---|
| D4.1 | R5b | **Persist automation activity to durable, tenant-scoped rows** (retire the in-memory `RcmCounters`) | counts survive a deploy + are instance-independent | Open |
| D4.2 | R5b | **Move Tier-C composites server-side** (reproducible/testable endpoints) | each composite has a unit-testable endpoint; partial-failure reports degraded not wrong | Open |
| D4.3 | §15.1 | **Converge onto the single `system_events` log** building on `WORKFLOW_EVENTS` (the unify decision) | one emission point; tiles + Kanban + autopilot consume it | Open |
| D4.4 | R6 | **DLP-tested widgets** — assert tile counts at the A03/D07/E01/F03/G01 seams | dashboard assertions wired into the DLP chain | ✅ Done 2026-06-21 — per-step run DONE (D5) + assertions wired (D5.6): `verify-dlp-dashboard-per-step.mjs` drives the real DLP runner and gates on the dashboard surfaces moving (exit non-zero on a miss). Standing regression guard; can be added to the deploy gate later. |

---

## D5 — Live DLP-step → Dashboard verification (founder deep-dive, 2026-06-21)

> **STATUS: ✅ COMPLETE (2026-06-21).** All 6 tasks done (D5.1–D5.6). 3 fixes LIVE (Reset View, Event Feed 500+paginate, Visits-in-Progress tile); all 3 DLP journeys mapped per-step (DLP1 42, DLP2 23/23, DLP3 25/25); 7 findings recorded (D5-F1…F7); dashboard-surfacing now an asserting regression gate (D5.6 → **D4.4 closed**). Remaining counter bugs from D5-F7 fold into the durable-persistence work **D4.1/D4.2/D4.3** (still open, awaiting founder go).

**Goal:** run the DLP one step at a time and confirm, at each step, **exactly where it surfaces on the dashboard** (which tile / the Event Feed) and whether the number is correct. This is the granular execution of **D4.4**.

### How the dashboard is actually wired (verified `dashboard.html:621-674`)
The dashboard is **two worlds**:
- **~15 headline tiles** render from **current server state** via 8 endpoints: `/claims`, `/dashboard/workflow-summary` (claimReview/ediQueue/eligibility/arFollowup/denials), `/denials`, `/dashboard/automation-activity` (in-memory counter), `/notifications`, `/workflow/claim-review`, `/reports?type=timely-filing-aging`, `/admin/portal-users`.
- **One Event Feed** renders from `/workflow-events?limit=50`.

### Methodology (per step)
1. Snapshot the 6 data endpoints (`workflow-events`, `dashboard/workflow-summary`, `dashboard/automation-activity`, `claims`, `denials`, `admin/portal-users`) **before**.
2. Run the single DLP step.
3. Snapshot **after**; diff → record which tile/feed changed and whether it's correct.

### D5 findings / issues

| ID | Finding | Detail | Status |
|---|---|---|---|
| **D5-F1** | **"Reset Counters" only re-windows the Event Feed — it does NOT reset the tiles** | `resetDashboardCounters()` (`dashboard.html:1234`) just writes a `localStorage` baseline timestamp + sets the window to "Since reset". That baseline is consumed by **one** function, `renderFilteredDashboard()`, which filters **only the Event Feed + the "events match" count**. Every headline tile (claims, queues, denials, automation, portal regs, deadlines…) ignores it and shows live current state. The **Automation** tile is an in-memory per-instance counter with **no server reset endpoint** (only a deploy/restart clears it). So the button looks broken: the prominent numbers don't move. It is effectively *"set event-feed baseline,"* mislabeled. | ✅ **FIXED 2026-06-21** (build `61f93d16`): relabeled **"Reset View"** + tooltip; added a visible *"● Showing activity since HH:MM"* indicator; the **Automation** tile now shows activity **since reset** (snapshots the counter). Live work-queue tiles stay current-state **by design** — the tooltip says clear their data to zero them. |
| **D5-F2** | **Event Feed `limit=50` saturates — ~95% of DLP events are invisible** | The feed fetches `/workflow-events?limit=50`. Live per-step harness proof: after the run's initial 50-event backfill, the feed count **sticks at 50 and never moves** — events from a*/b*/c*/d*/e*/f*/h* scroll off the top-50 window almost immediately. Only `reset`, `c01`, `h03` were ever visible (and only because their event was in the newest-3 at snapshot). `limit=200` returns 200, so the data exists — the feed just under-reports it. **The Event Feed materially under-reports DLP activity.** | 🔴 **FIXED 2026-06-21** (D5.2, build `76f64fa0`): feed now fetches `limit=500` with a "Show 25 more" paginator, so older activity is reachable. Deeper one-log convergence still ties to **D4.3**. |
| **D5-F3** | **The entire intake/clinical arm is DARK on the dashboard** | a00, a02–a06, b01–b05, c02, d01–d07 move **no** dashboard tile, and (per F2) their events scroll off the feed. Registration / scheduling / check-in / eligibility-capture / intake / encounter / clinical steps surface **nothing** on the 6 dashboard endpoints — everything before charge/claim (`e01`) is invisible here; it lives only on the **Kanban**. "Watch the patient move through intake on the Event Dashboard" is **not met**. | 🔴 **ADDRESSED 2026-06-21** (D5.3, build `76f64fa0`): founder chose ADD — shipped the **"Visits in Progress"** front-of-house clinical tile (encounter-state keyed: in-visit / to-sign / signed). Registration already had the Intake tile. |
| **D5-F4** | **`automation-activity` is in-memory + cumulative-since-instance (residue across runs)** | PRE already showed `era.payments=2` from a prior run under the same practice. The counter moved correctly for ERA pay/deny (f03, h01) but it is **cumulative since instance start, not per-journey**, and resets on deploy — unreliable as a per-step signal. (Same root as the known counter-trust problem; durable fix = **D4.1**.) | 🟠 Confirmed (2026-06-21) — matches D1.2 / D4.1. |
| **D5-F5** | **`g*` / `i*` arms produce zero dashboard movement** | g01–g03 and i01–i04 bump no tile and emit no visible feed row. The `automation-activity.secondaryClaims` / `appealsGenerated` fields the dashboard renders **never appeared in the response and never moved** through a full DLP1 run — confirm whether secondary-claim / appeal automation is wired to emit those counters (else those widgets sit at 0). | ✅ **Resolved 2026-06-21** by D5.5 + D5-F7: `secondaryClaims` **IS** wired (fired on DLP3-13/18 — the balance-bearing primary 835 auto-creates the -S claim in EraRoutes; it just doesn't trigger in DLP1, which has no COB). `appealsGenerated` is **mis-wired** (bumps only on the DenialsRoutes draft path, not `POST /api/appeals`) — fold into D4.1. |
| **D5-F6** | **D07 sign → charge-review handoff did NOT bump a dashboard queue** | `workflow-summary.claimReview` never moved across the whole run; the only claim-side tile movement was `claims.status` (E01 draft, E03 ready_to_submit) and `ediQueue` (E03). The "charge review pending" queue tile the dashboard renders stayed flat at D07. Verify whether the signed-encounter→charge-review handoff feeds `workflow-summary.claimReview`. | ✅ Resolved by D5-F7 audit: `claimReview` counts **claims**, not the charge-review handoff (which has no tile). |
| **D5-F7** | **Counter audit (D5.4): `claimReview` semantics + 2 dead/mis-wired automation counters** | (a) `claimReview` (`DashboardWorkflowSummaryRoutes:84`) counts CLAIMS in `STATUS IN ('in_review','scrub_error','hold')` — **not** the D07 charge-review handoff, which has **no dashboard tile** (D2.3 "Charge review" is unbuilt). (b) The automation counter is `RcmCounters.autoCounters[8]` (0=scrubPass 1=scrubFail 2=eraPay 3=eraDeny 4=secondary 5=eligFlags 6=followups 7=appeals). Increment sites: scrub `ClaimsRoutes:794/804`, era `EraRoutes:725/726`, secondary `EraRoutes:452/682`, eligFlags `ClaimsRoutes:530/555`, appeals `DenialsRoutes:912`. **Bug 1:** slot 6 `arFollowups` is **NEVER incremented** → that automation counter is permanently 0 (dead). **Bug 2:** `appealsGenerated`[7] is bumped only by the *DenialsRoutes draft-appeal* path, **not** by `POST /api/appeals` (AppealsRoutes) that the DLP + real appeal flow use → DLP appeals don't count. `secondaryClaims`=0 for DLP1 is correct (COB is a DLP2 thing). All in-memory, reset on deploy (D5-F4). | 🔴 **Audit done 2026-06-21.** Fix during **D4.1** persist: increment slot 6, unify the appeal-counter path (or count in AppealsRoutes), and build the **Charge Review** tile (D2.3). |

### D5 per-step observation table — OBSERVED (live harness run, 2026-06-21, DLP1, practice `fb899820`)

_Source: `tests/ui/verify-dlp-dashboard-per-step.mjs` — ran all 42 DLP1 steps one at a time, snapshotting the 6 dashboard endpoints after each. "Observed" = the only endpoint/field that actually changed vs the prior step._  
**Legend:** ✅ surfaces on a tile · 📜 feed-only (scrolls off, see D5-F2) · ➖ no dashboard change · 🔴 expected-but-missing.

| DLP step | Action | **Observed dashboard delta** | Tag |
|---|---|---|---|
| Pre / `reset` | ClearDLP all + baseline | `workflow-events` backfills to 50 (saturates) | — |
| `a01` | portal self-register | **`admin/portal-users`: status `pending_review` 0→1** (Portal Registrations tile +1) | ✅ |
| `a02`,`a03` | confirm email + staff queue | (no change) | ➖ |
| `a04` | staff review → create patient | **`admin/portal-users`: `active` +1, `pending_review` 1→0** | ✅ |
| `a05`,`a06` | portal access + intake meds | (no change) | ➖ |
| `b01`–`b04` | insurance + eligibility(ACTIVE) + appt + reminder | (no change) — **eligibility tile does NOT move here** | ➖ |
| `c01` | check-in + encounter | `workflow-events` newest changed only (then scrolls off) | 📜 |
| `b05`,`c02` | check-in portal + copay | (no change) | ➖ |
| `d01`–`d07` | vitals → orders → result → eRx → dx → **sign** | (no change) — **D07 sign did NOT bump `claimReview`** (see D5-F6) | 🔴 |
| `e01` | charge-review → claim | **`claims`: `draft` 59→60** (claim created) | ✅ |
| `e02` | scrub preview | (no change) | ➖ |
| `e03` | submit 837 | **`claims`: `ready_to_submit` 0→1; `workflow-summary.ediQueue` 0→1** | ✅ |
| `f01` | TA1 + 999 | (no change) | ➖ |
| `f02` | 277 status | **`claims`: `acknowledged` 0→1** | ✅ |
| `f03` | 835/ERA (partial) | **`claims`: `partial` +1; `automation.era.payments` +1, `erasProcessed` +1** | ✅ |
| `g01`–`g03` | ERA idempotent / statement / audit | (no change) | ➖ |
| `i01`–`i04` | isolation / visibility / honesty / no-dup | (no change) | ➖ |
| `h01` | denial → appeal | **`claims`: `denied` +1; `denials` 10→11; `automation.era.denials` +1** | ✅ |
| `h02` | eligibility failure (INACTIVE) | **`workflow-summary.eligibility` 4→5** | ✅ |
| `h03` | no-show → reschedule | `workflow-events` newest changed only | 📜 |
| `h04`–`h06` | secondary insurance / A-R aging / refill | (no change) | ➖ |

**Net (DLP1 → dashboard):** of 42 steps, **8 move a tile** (a01, a04, e01, e03, f02, f03, h01, h02), **2 are feed-only** (c01, h03 — and even those scroll off), **30 are dark.** The dashboard reflects the **RCM/claim arm** (claims status, EDI queue, denials, ERA counters, portal registrations); the **intake/clinical arm and the g*/i* arms are invisible** (D5-F3). The Event Feed is unusable as a per-step signal at `limit=50` (D5-F2).

### D5 next actions (tasking)
| ID | Task | Status |
|---|---|---|
| D5.1 | **Reset View** honesty fix | ✅ LIVE 2026-06-21 — see D5-F1 |
| D5.2 | **Raise/paginate the Event Feed** (limit 50->500 + Show-more) | ✅ LIVE 2026-06-21 (build `76f64fa0`) |
| D5.3 | **Front-of-house tile** — founder: ADD it. Intake/registration was already the Intake tile; added a **"Visits in Progress"** clinical tile (encounter-state keyed: in-visit / to-sign / signed) | ✅ LIVE 2026-06-21 (build `76f64fa0`) |
| D5.4 | **Verify charge-review + counter wiring** | ✅ Done 2026-06-21 — see **D5-F7** (audit: claimReview=claims-not-charge-review; slot-6 arFollowups dead; appealsGenerated only on DenialsRoutes path; fixes fold into D4.1) |
| D5.5 | Per-step run for **DLP2 / DLP3** | ✅ Done 2026-06-21 — DLP2 23/23, DLP3 25/25; same RCM-arm surfaces as DLP1; **D5-F7 confirmed live** (appeal via /api/appeals moved only `denials`, `appealsGenerated` stayed 0; `claimReview` never moved). `secondaryClaims` IS wired (fires in EraRoutes on the balance-bearing primary 835 that auto-creates the -S claim — DLP3-13/18, not the COB steps). |
| D5.6 | Wire the harness assertions into the DLP chain (this **completes D4.4**) | ✅ Done 2026-06-21 — `verify-dlp-dashboard-per-step.mjs` now ASSERTS, per journey, that every expected dashboard surface moved at least once (`movedSurfaces()` → `EXPECTED[journey]`) and **exits non-zero** on a missing surface or any failed step. Expected surfaces grounded in the D5.5 run: RCM core (claims.total, summary.ediQueue, summary.denials, denials.total, automation.era.denials, automation.era.payments, events.total) for all three; + portalUsers.pendingReview for DLP2/DLP3; + automation.secondaryClaims for DLP3. POSITIVE-only — deliberately does NOT assert the known-dead counters (appealsGenerated/arFollowups, D5-F7) so wiring them later won't false-RED. Now a real regression gate for dashboard surfacing. |

---

## D6 — Dashboard-card → DLP-coverage matrix (founder ask: "every card supported by a journey", 2026-06-21)

> **STATUS: ✅ COMPLETE (2026-06-21).** 20-card inventory + coverage matrix built (D6.1); DLP2/DLP3 reviewed for DLP1 consistency + embellished (D6.2, commit `9648d4e0d`, live build 1898); deep-dive re-run green (D6.3 — DLP2 25/25, DLP3 27/27). **Outcome:** ~12 cards live-covered; `-20` adds the eligibility work-queue to DLP2/DLP3; the `-21` security thread is a consistency/parity win but does **not** light a dashboard card (D6-F4). **5 cards remain un-coverable by a day-in-the-life journey** — Unread Notifications, A/R aging, Deadlines, No-Lost-Work (need aged/near-deadline/notification seed data, D6-F1), and Source Coverage's security domain (no DLP security-event source, D6-F4). These need an infra fixture (D6.4), not faked journey data. Autopilot Command Deck is non-data-driven (D6-F2).

**Card inventory:** 20 cards over 9 fetched endpoints + the Event Feed (full list `dashboard.html:643-714, 899`): `/claims`, `/dashboard/workflow-summary`, `/denials`, `/dashboard/automation-activity`, `/workflow-events`, `/notifications`, `/workflow/claim-review`, `/reports?type=timely-filing-aging`, `/admin/portal-users`, `/encounters`.

### D6 consistency review — DLP2/DLP3 vs DLP1
DLP2/DLP3 have a **superior** denial arc (denial→appeal→**overturn→paid**; DLP1 `h01` only drafts the appeal) and a follow-up-visit arc (steps 15–19) DLP1 lacks. But they were **missing DLP1's** security/isolation thread (`i01–i04`) and its INACTIVE-eligibility front-catch (`h02`). **Embellishment (commit `9648d4e0d`, additive, before teardown):**
- **`DLP2-20` / `DLP3-20` interim eligibility recheck (INACTIVE)** — mirrors DLP1 `h02`; lights the **Eligibility** tile (`workflow-summary.eligibility`, a proven mover from D5.4) + **Risk Rails** (ELIGIBILITY_INACTIVE issue).
- **`DLP2-21` / `DLP3-21` security & visibility thread** — mirrors DLP1 `i02/i03/i04` (portal-sees-own-chart, unauth-401, honesty probe, no-duplicate guarantee); adds the **security** thread → feeds **Source Coverage**.

### D6 coverage matrix (20 cards)
**Legend:** ✅ covered (live-proven) · 🟡 embellishment closes (pending live re-run proof) · 🟠 partial/known-bug · 🔴 structural gap (not journey-coverable) · ⚪ N/A (not data-driven).

| # | Card | Driven by | DLP coverage | Status |
|---|---|---|---|---|
| 1 | Events (filtered count) | workflow-events count | all journeys emit events | ✅ |
| 2 | **Source Coverage** (8 domains incl. security) | workflow-events keyword match | 7/8 domains (registration/scheduling/clinical/coding/edi/payment/denial); **security domain is NOT emitted by any DLP step as a workflow-event** (D6-F4) | 🔴 security domain |
| 3 | **Unread Notifications** | /notifications unreadCount | no journey confirmed to emit an unread notification | 🔴 needs a notification-emitting step |
| 4 | Intake (portal registrations) | portal-users status | DLP1 a01/a04; DLP2/3 01/02 | ✅ |
| 5 | Visits in Progress | encounters status | check-in→encounter (all) | ✅ |
| 6 | Autopilot (Command Deck) | local `PracticeForceOneAutopilot` contract (no endpoint) | not data/endpoint-driven | ⚪ |
| 7 | **Risk Rails** (pre-submit issues) | claim-review issues | **-20** lights the eligibility **work-queue** (`workflow-summary.eligibility 4→5`, proven D6.3) — but Risk Rails reads `/workflow/claim-review`, which the per-step harness doesn't snapshot → claim-review-level proof pending | 🟡 |
| 8 | Denial Risk Tiers | claim-review preventableDenialRiskScore | every journey creates claims (score computed server-side) | 🟡 confirm it populates |
| 9 | Practice KPIs | claims count/balance/AR | all | ✅ |
| 10 | Revenue Cycle pipeline | claims byStatus | all (draft→ready→submitted→paid/partial/denied) | ✅ |
| 11 | **A/R aging buckets** (31-60/61-90/91-120) | claims daysInAr | **NONE** — journeys create day-0 claims; DLP1 h05 doesn't age | 🔴 structural — needs seedable aged claims |
| 12 | Denials (rate/appealed/overturned) | denials + claims | DLP1 h01; DLP2/3 11/12/13 (fuller) | ✅ |
| 13 | Top Denial Reasons (CARC) | denials denialCode/carc | DLP2/3-11 CARC 50; DLP1 h01 CO-50 | ✅ confirm CARC renders |
| 14 | RCM Autopilot | claims w/ balance + denials | partial-pay balances + denials (all) | ✅ |
| 15 | Payer Rule Learning | denials + claims | denials exist (all) | ✅ |
| 16 | **Deadlines** (timely-filing + appeal ≤14d) | reports timely-filing-aging + denials appealDeadline | **NONE** — fresh claims not near filing; appeal deadline not ≤14d | 🔴 structural — needs near-deadline seed |
| 17 | **No-Lost-Work** (aged/blocked/stale) | claim-review blocked + claims≥90d + unread + stale events | **NONE** — needs aged/stale state | 🔴 structural — needs aged/stale seed |
| 18 | Automation (live counters) | automation-activity | scrub+era (all), secondary (DLP3); **appeals/arFollowups DEAD** | 🟠 D5-F7 |
| 19 | Action Items | workflow-summary + portal + claims | all | ✅ |
| 20 | Event Feed | workflow-events filtered | all | ✅ |

### D6 findings
- **D6-F1 — 4 cards cannot be lit by a realistic day-in-the-life journey:** **A/R aging buckets (11)**, **Deadlines (16)**, **No-Lost-Work (17)** all need claims that are 31–120 days old / past a filing or appeal deadline; **Unread Notifications (3)** needs an emitted notification. A "day in the life" runs at day 0, so these are **structural** — they need a **seedable aged/near-deadline/notification fixture** (a staging seed, sibling to ClearDLP), NOT faked journey data. Recorded as a task, ties to D4.1 durable-state work. *(Honest dead-end: do not pretend the journey covers these.)*
- **D6-F2 — Autopilot Command Deck (6) is not data-driven** — it renders from a client-side `PracticeForceOneAutopilot` contract with no endpoint, so no journey can move it. Out of scope for journey coverage.
- **D6-F3 — embellishment proven (D6.3, live build 1898):** `-20` lights the **eligibility work-queue** (`workflow-summary.eligibility 4→5`) in both DLP2 and DLP3 — now gated in the harness `EXPECTED`. Both journeys green (DLP2 25/25 · 8/8, DLP3 27/27 · 9/9). DLP2/DLP3 now have DLP1's isolation/honesty/no-dup + eligibility front-catch (consistency parity achieved).
- **D6-F4 — `-21` does NOT feed Source Coverage; the "security" domain has no DLP source at all.** The `-21` thread is portal *reads* + a deliberately-*failed* write + a *dry-run* clear — none emit a `workflow-events` row, so it moved no dashboard surface ("(no dashboard change)"). More broadly: **Source Coverage's `security` domain is fed by real auth/audit events, which the DLP never emits as workflow-events** — so no journey lights it. It is a genuine gap, not a labeling issue. Options: (a) accept Source Coverage as a 7/8-domain card by design, or (b) add a real security-event emitter the DLP can trip (e.g., a logged auth-denied or audit-access event surfaced into `workflow-events`). *(Honest correction of the pre-run D6-F3 hypothesis.)*

### D6 tasking
| ID | Task | Status |
|---|---|---|
| D6.1 | Card inventory + coverage matrix (20 cards) | ✅ Done 2026-06-21 (above) |
| D6.2 | Embellish DLP2/DLP3 (eligibility recheck + security thread) for parity + coverage | ✅ Done 2026-06-21 (commit `9648d4e0d`); deploying |
| D6.3 | Re-run the per-step deep-dive on embellished DLP2/DLP3 (live build 1898, deploy `98b5d194`) | ✅ Done 2026-06-21 — **DLP2 25/25 (assertions 8/8), DLP3 27/27 (assertions 9/9)**. **`-20` moves `workflow-summary.eligibility 4→5` in both** (eligibility work-queue lit; now gated in the harness `EXPECTED`). **`-21` = "(no dashboard change)"**: it does portal *reads* + a *failed* write + a *dry-run* clear → emits **no** workflow-events, so it does **not** feed Source Coverage (hypothesis corrected — see D6-F4). Parity win stands (isolation/honesty/no-dup now in DLP2/DLP3). |
| D6.4 | Seedable aged/near-deadline/notification fixture to light cards 3/11/16/17 (D6-F1) — infra, ties to D4.1 | 🔴 Open (proposed) |

---

## D7 — Per-step **Dashboard + Kanban** unified accounting (founder deep-dive, 2026-06-21)

> **STATUS: ✅ COMPLETE (2026-06-21).** For **every step** of DLP1/DLP2/DLP3, both surfaces documented — the Event Dashboard delta *and* the Kanban lane — from identical state via one combined harness. **DLP3 ✅ (27/27), DLP2 ✅ (25/25), DLP1 ✅ (41/42, continue-mode).** Tables below. The deep-dive's headline catches: **🟠 D7-F6** (intermittent portal `/portal/me` 401 after login — failed 3 of 4 runs, a read-after-write race that degraded since build `76f64fa0`, single-covered by `a05`) and **D7-F7** (the claim's kanban lane lags its claim status through the EDI/ack phase).

### Method + harness
New single-pass harness **`tests/ui/verify-dlp-dashboard-kanban-per-step.mjs`** (commit `4402e1e09`): two live tabs (staging = runner+ledger+dashboard fetches; kanban = real rendered board). After each step it records, from the **identical state**, the dashboard 6-endpoint delta **and** the DLP patient's kanban card lane(s) (reading `kanban.html`'s own `loadBoard()` + rendered `.kanban-lane` sections, ignoring the `all_work` aggregate). One run per step (not two passes) so the two surfaces are aligned. Board pinned to `2026-08-01` + 730-day horizon so every DLP appointment (Aug→Dec 2026) is in range.

**Kanban lane order** (intake→billing): `patient_needs_schedule · review_registration · patient_scheduled · needs_pre_check_in · patient_arrived · insurance_exception · ready_for_intake · ready_to_encounter · ready_for_provider · visit_in_progress · clinical_follow_up · documentation_incomplete · ready_to_sign · ready_for_coding · ready_to_claim · claim_needs_scrub · ready_to_submit · payer_response · denial_appeal · ar_follow_up · patient_balance · blocked_review`.

### DLP3 — unified per-step accounting (✅ clean, 27/27, live build 1898)
| Step | Action | **Dashboard delta** | **Kanban lane(s)** |
|---|---|---|---|
| reset | ClearDLP slate | (none) | (no patient) |
| 00 | seed COB cardiac ledger | (none) | (no patient) |
| 01 | portal self-register + email confirm | `portal-users 0→1` (pending_review +1) | **review_registration** |
| 02 | staff review → chart + book cardiology visit | `portal-users` active +1, pending_review→0 | **patient_scheduled** |
| 03 | no-show + reschedule | `workflow-events` (appointment.status_changed) | patient_scheduled |
| 04 | patient shows (checked in) | `workflow-events` (appointment.status_changed) | **ready_for_intake** |
| 05 | check-in → encounter + portal check-in | (none) | **visit_in_progress** |
| 06 | eligibility primary+secondary + copay | (none) | visit_in_progress |
| 07 | copay collection (TOS payment) | (none) | visit_in_progress |
| 08 | cardiac visit (vitals/problems/EKG/troponin) | (none) | visit_in_progress |
| 08b | eRx (controlled-substance EPCS gate) | (none) | visit_in_progress |
| 09 | coding + charges → claim | `claims 85→86 [draft +1]` | **claim_needs_scrub** |
| 10 | 837 submit + TA1/999 acks | `claims [draft→ready_to_submit]; ediQueue 0→1` | claim_needs_scrub |
| 11 | denial (CARC 50) → worklist | `claims [denied +1]; summary.denials 8→9; denials 10→11; auto.era.denials +1` | **denial_appeal** |
| 12 | appeal submitted → in review | `summary.denials 9→8` | denial_appeal |
| 13 | appeal overturned → paid; secondary **auto-created** | `claims [denied→partial, ready +1]; ediQueue 0→1; auto.era.payments +1, secondaryClaims 0→1` | **ready_to_submit, ar_follow_up** |
| cob1 | secondary (COB) claim present | (none) | ready_to_submit, ar_follow_up |
| cob2 | submit + pay secondary claim | `claims [paid +1]; auto.era.payments +1` | **ar_follow_up** |
| 14 | A/R review (primary+secondary) | (none) | ar_follow_up |
| 15 | follow-up scheduling | (none) | **patient_scheduled, ar_follow_up** |
| 16 | follow-up check-in + encounter | `workflow-events` (appointment.status_changed) | **visit_in_progress, ar_follow_up** |
| 17 | follow-up visit + coding → claim | `claims 87→88 [draft +1]` | **claim_needs_scrub, ar_follow_up** |
| 18 | follow-up 837 + paid 835 | `claims [draft→partial, ready +1]; ediQueue 1→2; auto.era.payments +1, secondaryClaims 1→2` | **ready_to_submit, ar_follow_up ×2** |
| 19 | follow-up A/R review | (none) | ready_to_submit, ar_follow_up ×2 |
| 20 | interim eligibility recheck INACTIVE *(embellishment)* | `summary.eligibility 4→5` | ready_to_submit, ar_follow_up ×2 |
| 21 | security & visibility thread *(embellishment)* | (none) | ready_to_submit, ar_follow_up ×2 |
| teardown | ClearDLP removes run | claims→baseline; denials 11→10; portal-users 1→0 | (no card) |

### DLP1 — unified per-step accounting (continue-past-fail mode, 41/42 pass; build 1898)
_Comprehensive 42-step journey "Daye Inthelife". Captured with `CONTINUE_PAST_FAIL=1` so the `a05`/`b04` race-flakes don't skip the tail. Distinct shape: DLP1 **activates the chart BEFORE booking** (appointment is `b03`), so the card sits in `patient_needs_schedule` from `a04`→`b02`, unlike DLP2/DLP3 which book at step 02._
| Step | Action | **Dashboard delta** | **Kanban lane(s)** |
|---|---|---|---|
| reset / s00 / a00 | ClearDLP + guard probes + seed | (none) | (no patient) |
| a01 | portal self-register (login refused pre-confirm) | `portal-users 0→1` (pending_review +1) | **review_registration** |
| a02 | email confirm (login gated 403) | (none) | review_registration |
| a03 | registration on staff review queue | (none) | review_registration |
| a04 | staff create patient + chart link | `portal-users` active +1, pending_review→0 | **patient_needs_schedule** |
| a05 | portal login → `/portal/me` ⚠️ **intermittent 401 (D7-F6)** | (none) | patient_needs_schedule |
| a06 | intake meds land in chart | (none) | patient_needs_schedule |
| b01 | insurance capture (primary) | (none) | patient_needs_schedule |
| b02 | eligibility ACTIVE + copay | (none) | patient_needs_schedule |
| b03 | appointment booking | (none) | **patient_scheduled** |
| b04 | reminder/reschedule round-trip | (none) | patient_scheduled ⚠️ flaky (reschedule-persist race) |
| c01 | check-in → encounter | `workflow-events` (appointment.status_changed) | **visit_in_progress** |
| b05 | portal check-in (post check-in) | (none) | visit_in_progress |
| c02 | copay at TOS | (none) | visit_in_progress |
| d01 | rooming + vitals | (none) | visit_in_progress |
| d02 | problems / allergies / med rec | (none) | visit_in_progress |
| d03 | CPOE lab order | (none) | visit_in_progress |
| d04 | result return → acknowledge | (none) | visit_in_progress |
| d05 | eRx (EPCS blocked 409) | (none) | visit_in_progress |
| d06 | diagnoses coded | (none) | visit_in_progress |
| d07 | documentation + sign → charge_review | (none) | **ready_for_coding** |
| e01 | charge review → claim | `claims 85→86 [draft +1]` | **claim_needs_scrub** |
| e02 | scrub / validation | (none) | claim_needs_scrub |
| e03 | submit 837 | `claims [draft→ready_to_submit]; ediQueue 0→1` | claim_needs_scrub |
| f01 | TA1 + 999 acks | (none) | claim_needs_scrub |
| f02 | 276/277 status | `claims [ready_to_submit→acknowledged]` | claim_needs_scrub |
| f03 | 835/ERA (partial pay) | `claims [acknowledged→partial]; auto.era.payments +1` | **ar_follow_up** |
| g01 | ERA idempotent re-post | (none) | ar_follow_up |
| g02 | patient balance → statement | (none) | ar_follow_up |
| g03 | audit-trail completeness | (none) | ar_follow_up |
| i01 | tenant isolation | (none) | ar_follow_up |
| i02 | portal visibility | (none) | ar_follow_up |
| i03 | honesty probe | (none) | ar_follow_up |
| i04 | no-duplicate guarantee | (none) | ar_follow_up |
| h01 | denial → appeal (a SEPARATE branch claim) | `claims [denied +1]; denials 10→11; auto.era.denials +1` | **denial_appeal, ar_follow_up** |
| h02 | eligibility failure (INACTIVE) | `summary.eligibility 4→5` | denial_appeal, ar_follow_up |
| h03 | no-show → reschedule (new appt) | `workflow-events` (appointment.status_changed) | **patient_scheduled, denial_appeal, ar_follow_up** |
| h04 | secondary insurance (COB) | (none) | patient_scheduled, denial_appeal, ar_follow_up |
| h05 | A/R aging follow-up surface | (none) | patient_scheduled, denial_appeal, ar_follow_up |
| h06 | refill request loop | (none) | patient_scheduled, denial_appeal, ar_follow_up |

**DLP1 kanban observations:** (a) the claim card sits in **`claim_needs_scrub` from creation through 837 + acks** (e01–f02) and jumps straight to **`ar_follow_up`** when the 835 posts (f03) — it never visibly occupies `ready_to_submit`/`payer_response` lanes (D7-F7). (b) The `h`-phase legitimately spins **multiple concurrent cards** for the one patient — `h01`'s branch denial adds a `denial_appeal` card, `h03`'s rebooking adds a `patient_scheduled` card — alongside the main `ar_follow_up`, confirming the board models several open work-items per patient.

### DLP2 — unified per-step accounting (✅ clean, 25/25, live build 1898)
_Cardiac thread "Cardia", denial→appeal→overturn→paid, follow-up visit; NO COB (that's DLP3)._
| Step | Action | **Dashboard delta** | **Kanban lane(s)** |
|---|---|---|---|
| reset / 00 | ClearDLP slate + seed ledger | (none) | (no patient) |
| 01 | portal self-register + email confirm | `portal-users 0→1` (pending_review +1) | **review_registration** |
| 02 | staff review → chart + book cardiology visit | `portal-users` active +1, pending_review→0 | **patient_scheduled** |
| 03 | no-show + reschedule | `workflow-events` (appointment.status_changed) | patient_scheduled |
| 04 | patient shows (checked in) | `workflow-events` (appointment.status_changed) | **ready_for_intake** |
| 05 | check-in → encounter + portal check-in | (none) | **visit_in_progress** |
| 06 | eligibility (primary) ACTIVE + copay | (none) | visit_in_progress |
| 07 | copay collection (TOS payment) | (none) | visit_in_progress |
| 08 | cardiac visit (vitals/problems/EKG/troponin) | (none) | visit_in_progress |
| 08b | eRx (controlled-substance EPCS gate) | (none) | visit_in_progress |
| 09 | coding + charges → claim | `claims 85→86 [draft +1]` | **claim_needs_scrub** |
| 10 | 837 submit + TA1/999 acks | `claims [draft→ready_to_submit]; ediQueue 0→1` | claim_needs_scrub |
| 11 | denial (CARC 50) → worklist | `claims [denied +1]; summary.denials 8→9; denials 10→11; auto.era.denials +1` | **denial_appeal** |
| 12 | appeal submitted → in review | `summary.denials 9→8` | denial_appeal |
| 13 | appeal overturned → paid | `claims [denied→partial]; ediQueue 0→1; auto.era.payments +1` | **ar_follow_up** |
| 14 | A/R review (resolved) | (none) | ar_follow_up |
| 15 | follow-up scheduling | (none) | **patient_scheduled, ar_follow_up** |
| 16 | follow-up check-in + encounter | `workflow-events` (appointment.status_changed) | **visit_in_progress, ar_follow_up** |
| 17 | follow-up visit + coding → claim | `claims 86→87 [draft +1]` | **claim_needs_scrub, ar_follow_up** |
| 18 | follow-up 837 + paid 835 | `claims [draft→partial]; ediQueue 1→2; auto.era.payments +1` | **ar_follow_up ×2** |
| 19 | follow-up A/R review | (none) | ar_follow_up ×2 |
| 20 | interim eligibility recheck INACTIVE *(embellishment)* | `summary.eligibility 4→5` | ar_follow_up ×2 |
| 21 | security & visibility thread *(embellishment)* | (none) | ar_follow_up ×2 |
| teardown | ClearDLP removes run | claims→baseline; denials 11→10; portal-users 1→0 | (no card) |

**DLP2 vs DLP3 contrast (the COB signal):** at step 13 DLP2's card is a single `ar_follow_up` (one claim) where DLP3's is `ready_to_submit, ar_follow_up` (the overturn 835 auto-created the secondary); at step 18 DLP2 shows `ar_follow_up ×2` (initial + follow-up claims) where DLP3 adds a `ready_to_submit` for the secondary. The COB arm is exactly the extra card.

### D7 findings
- **D7-F1 — the two surfaces are complementary, not redundant.** The **dashboard** shows practice-wide *counts* (claims by status, queue totals, automation counters); the **kanban** shows the *one patient's* workflow *position*. DLP3's card walks `review_registration → patient_scheduled → ready_for_intake → visit_in_progress → claim_needs_scrub → denial_appeal → ready_to_submit/ar_follow_up` — a position story the dashboard counters never tell. To "watch a patient move," the **Kanban** is the surface; the dashboard is the aggregate.
- **D7-F2 — the COB secondary claim is a distinct `ar_follow_up` card.** From DLP3-13 on, the board carries the primary claim + the auto-created secondary as **separate** work items; by step 18 there are **two `ar_follow_up` cards** + a `ready_to_submit` (primary, secondary, and the follow-up claim). Correct multi-claim behavior — each billable claim is its own card.
- **D7-F3 — the follow-up visit re-runs the whole pipeline concurrently.** Steps 15–18 spin a *second* card track (`patient_scheduled → visit_in_progress → claim_needs_scrub → ready_to_submit`) **while** the first claim still sits in `ar_follow_up` — the board correctly shows both the in-flight follow-up visit and the outstanding A/R for the same patient at once.
- **D7-F4 — DLP2 `-04` check-in is a true intermittent flake** (failed once, then clean 25/25 on retry-attempt-1). The chain's `broken` flag skips the tail on any failure, so a flake costs the whole run; candidate hardening is a bounded retry on the check-in read-after-write (the step already polls 8×, so this is rare).
- **🟠 D7-F6 — INTERMITTENT (high-rate) portal `/portal/me` 401 after a fresh login.** DLP1 `a05` failed **3 of 4 runs** (passed on the 4th): an activated portal patient does `POST /api/portal/auth/login` → **200 + a token**, then `GET /api/portal/me` with that token → **HTTP 401** (token *rejected*, not "no chart"). It's a *race*, not a hard break — a 401 (token-rejected) on a freshly-issued token points to a **read-after-write lag on the portal session/token store** (`/portal/me` validating before the login's session row commits), the same class as the DLP's other RAW races (`b04` reschedule-persist, `c01`/DLP2-`04` check-in). Reproduces through the portal's own endpoints, so a real user could hit a portal-login failure ~most of the time on the first try. **It passed reliably in the D5 build (`76f64fa0`) and degraded by build `1898`** — so a recent change widened the window. **Coverage gap:** `a05` is the ONLY DLP step exercising post-activation portal login → `/portal/me`; DLP2/DLP3 never set `L.portalToken` (their `/portal/me` checks are guarded and skip), so they don't catch it — and my DLP3-21 `/portal/me` assertion was silently skipped for the same reason (D7.5 closes this). **Candidate culprits (recent portal-auth commits):** `d07582734` (security headers on the 3 portal credential-login endpoints), `3d73b09a3` (authenticateOnly across PortalStaff modules), `89cccefac` (FAILED_LOGIN_COUNT). **Action (D7.4):** add a brief retry on `/portal/me` to confirm the RAW-race hypothesis, then bisect for the widened window. Likely AgentMisc/MR6 lane.
- **D7-F7 — ✅ FIXED + VERIFIED (build 1908):** the claim card's kanban lane lagged its claim status. **Root cause:** `kanban.js buildCards` lane map omitted two real statuses — `ready_to_submit` (only `ready` was listed) and `acknowledged` — so they fell to the `claim_needs_scrub` catch-all. **Fix** (commit `51aaef5ac`): added them to the `ready_to_submit` and `payer_response` lanes. **Verified:** the claim now walks `claim_needs_scrub (e01) → ready_to_submit (e03) → payer_response (f02) → ar_follow_up (f03)`. Original analysis: In DLP1 the single claim sits in **`claim_needs_scrub` from creation through the 837 + TA1/999 + 277 acks** (e01–f02, even as `claims.byStatus` goes draft→ready_to_submit→acknowledged) and only moves to **`ar_follow_up`** when the 835 posts (f03) — it never occupies `ready_to_submit` or `payer_response` lanes. So the **dashboard** (claims byStatus, ediQueue) tracks submit/ack but the **kanban lane** does not; the board treats "submitted, awaiting remit" as still-in-`claim_needs_scrub`. Worth confirming whether that's intended bucketing or a lane-mapping gap (the dashboard is the finer-grained signal for the EDI/payer-response phase).
- **D7-F5 — embellishment cross-checked on the kanban too.** `-20` (eligibility recheck) moves `summary.eligibility 4→5` but does **not** move the patient's lane; `-21` (security thread) moves neither surface (re-confirms D6-F4). Both are work-queue / parity steps, not card-advancing steps — consistent with their intent.

### D7 tasking
| ID | Task | Status |
|---|---|---|
| D7.1 | Combined per-step Dashboard+Kanban harness | ✅ Done 2026-06-21 (`4402e1e09`) |
| D7.2 | DLP3 + DLP2 unified accounting (27/27, 25/25) | ✅ Done 2026-06-21 (above) |
| D7.3 | DLP1 unified accounting (continue-past-fail mode, since `a05` race blocks the normal chain) | ✅ Done 2026-06-21 (41/42; only `b04` reschedule-persist race failed) |
| D7.4 | 🟠 **Confirm + fix D7-F6 portal `/portal/me` 401** | ✅ **FIXED + VERIFIED 2026-06-21 (build 1908)** — root cause was the shared-JAC-connection autocommit race (login wrote the `portal_sessions` row via generated CRUD on the shared JAC "application" connection while `/portal/me` reads on a separate pooled connection under `DB_POOL_ENABLED`; the shared conn's autocommit could be transiently false → row invisible → 401). Fix: `PortalAuthLoginRoutes` session write reverted to raw SQL on the pooled `getConnection()` (commit `2a5209e26`). DLP1 `a05` now **3/3** (was ~75% fail). NOT the 3 suspected commits — the `DB_POOL` flip + MR4-A5 CRUD conversion (`de70dc57e`). |
| D7.5 | Close the coverage gap: make DLP2/DLP3 do a post-activation portal login → `/portal/me` (so `a05`'s regression class isn't single-covered) | 🔴 Open (proposed) |

---

## D8 — Appendix A: unify Dashboard + Kanban (one model, two lenses) — ACTIVE

> **STATUS: ✅ COMPLETE (2026-06-22, live build 2015). The "one model, two lenses" guarantee is PROVEN: the board invariant is DEPLOY-GATE GREEN — dashboard tile counts == kanban cards across every real lane (10/12 exact-MATCH; only the 2 architectural thin-PORTAL_USERS known-gaps remain).** ALL D8 rows are done + live, including **D8.9** (seed fixture verifier PASS — all 3 dark tiles light). Only **optional D8.6 polish** remains (override-deletes, full A.2 map across entities — not required for the guarantee). This §D8 is the **authoritative live status + agent-hour estimate** for **Appendix A** of [PracticeForceOneDashboardAssessment.md](<PracticeForceOneDashboardAssessment.md>) (which keeps the design rationale, the A.2 map, and the contracts). **Co-implemented by AgentDLP (projection + backend + `dashboard.html` + router + phase0 + seed + deploys + invariant harness) and AgentDLP2 (`kanban.js` + new files)** per the `AGENTS.md` partition (`9fda625fb`, ACK `fa3f35b47`).
>
> **Progress snapshot (2026-06-22, build 2001 live; 2004 deploying):**
> - **AgentDLP2 kanban lane FULLY DONE + LIVE:** A4(D8.5, full-scope encounter/charge-review maps + `auditLaneMaps`), B1(D8.7), B2(D8.8), B3(D8.11, projection-sourced `riskScore`/`riskTier`), B5(D8.13), B6/D8.14 kanban half (role→view). `verify-kanban-appendix-ui.mjs` 5/5 PASS.
> - **AgentDLP side — ALL LIVE except D8.9 verify:** D8.1✅(1913) · D8.2✅(2001, appt-window fix) · D8.3✅(2001, durable counters `durable:true`) · D8.4✅ · **D8.6✅ invariant DEPLOY-GATE GREEN on 2001** (blocked_review +53 projection fix + patient_scheduled harness date-pin fix — both root-caused; projection faithful, 10/12 lanes MATCH) · D8.10✅(1996, Front Desk + To-schedule) · D8.12✅(1996, Billing Pipeline rollup) · D8.14✅(1996, role landing) · D8.15✅(1996, Autopilot label).
> - **D8.9 ✅ DONE (build 2015):** `verify-dashboard-seed-fixture.mjs` RESULT PASS — all 3 dark tiles light; the run found + fixed a 5-deploy NOT-NULL cascade (CREATED_BY uuid → payer/billing/place_of_service → diagnosis_codes + denial fields → notification created_at via raw SQL) and leaked fixture rows were swept. **Appendix A is functionally COMPLETE.** **Open (optional polish only):** D8.6 override-deletes + full A.2 map across entities; wire the (Chrome-based) invariant into the deploy gate as a post-deploy check.

### Appendix A — Deep-dive recommendation (full design, brought in-table per founder 2026-06-21)

> Scope note: this appendix is a **design recommendation**, grounded in the verified architecture (the 9 dashboard endpoints + Event Feed from §3/D6, the 22 kanban lanes + the `buildCards` claim→lane map in `kanban.js`, the in-memory `RcmCounters`, and the `WORKFLOW_EVENTS`/`system_events` log). It is not yet scheduled work; it proposes the target architecture, the exact contracts, the invariants, a phased roadmap, the edge cases, and the test strategy. Effort tags are rough: **S** ≤1 day, **M** ≈2–4 days, **L** ≈1–2 weeks.

#### A.0 Problem statement (precise)
The dashboard and kanban are **two independent derivations of the same underlying work**, computed from **different reads** and **different logic**:
- The **dashboard** computes counts directly from base tables per endpoint — e.g. `claimReview` is `SELECT count(*) FROM claims WHERE status IN ('in_review','scrub_error','hold')` (`DashboardWorkflowSummaryRoutes`), `denials` from a `DENIALS` query, automation from in-memory `RcmCounters`.
- The **kanban** re-derives, client-side in `kanban.js buildCards()`, a *single most-actionable lane per claim/encounter/patient* from a different rule cascade (denial > A/R > patient-balance > payer-response > scrub > ready), with its own open-denial and balance logic.

Because the two derivations are **separate code paths over separate reads**, they **can and do disagree** — D7-F7 was exactly this (a claim the dashboard counted as `ready_to_submit`/`acknowledged` showed on the board as `claim_needs_scrub`). And each has blind spots the *other already covers*: the dashboard is blind to the intake/clinical arm that the kanban renders richly; the kanban shows no practice-wide aggregates, trends, or the 5 risk/aging tiles. **The fix is architectural, not cosmetic: make both surfaces project from one work-item model, then wire them to navigate into each other.**

#### A.1 The shared model — a canonical Work-Item store (foundation for everything below)
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

#### A.2 The Tile ↔ Lane/Cohort correspondence map (make the relationship explicit)
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

#### A.3 The count-equals-cards invariant (the divergence killer)
Once both lenses project from A.1, define and **enforce** the identity:

> For every billing/work lane **L**: `dashboardTile(L) == count(kanban cards whose lane == L)` — at the **claim/work grain**; and for patient-grain tiles (Intake, Visits) the count is over distinct `patient_id`.

Subtleties to specify (the deep part):
- **Entity grain.** Claim-centric tiles count *claims* (one card per claim — DLP3 correctly showed 2 `ar_follow_up` cards for primary+secondary), so those align 1:1. Patient-centric tiles (Intake, Visits) count *distinct patients*; a patient with two open claims is **one** Intake row but **two** billing cards — the invariant is grain-aware, not naive equality.
- **Single-most-actionable collapse.** `buildCards` already collapses a claim to one lane (no double-count). The dashboard must use the *same* collapse, or a claim in both "balance" and "payer-response" would be counted twice on the dashboard but once on the board. (This exact double-count was a prior kanban bug per the `buildCards` comments — the dashboard must inherit the resolution.)
- **Assertion.** Extend the existing `verify-dlp-dashboard-kanban-per-step.mjs` (it already reads both surfaces per step) with: after each step, `assert tile(L) === cards_in_lane(L)` for the mapped lanes. This turns the correspondence map into a **regression gate** — D7-F7 would have been caught the moment it was introduced. **Effort: S** (the harness already has both reads).

#### A.4 Pillar A — bridge the gaps (embellish each lens to cover its blind spots)
- **A1 — Light the 5 dark tiles + show them on the board (D6.4 seed fixture).** Build a staging seed (sibling to ClearDLP, run-id tagged for cleanup) that plants, tenant-scoped: (i) claims with `submitted_at` backdated 30/60/90/120 days → A/R aging buckets + `aging_*` cohorts; (ii) a denial with `appeal_deadline` = now+10d → `deadline_appeal`; (iii) a claim near its timely-filing window → `deadline_filing`; (iv) an unread notification row → Notifications; (v) a `security`-category `workflow_event` → Source-Coverage. **Each fixture row carries a `lane`/`cohort`, so it lights a dashboard tile *and* renders a kanban card/badge** — the bridge in action. **Effort: M.** Risk: writes to shared tables → strict run-id tagging + ClearDLP coverage + tenant scope (see A.7).
- **A2 — Intake/clinical dashboard tiles mirroring pre-billing lanes.** The kanban already proves the data exists for `review_registration`, `patient_scheduled`, `needs_pre_check_in`, `ready_for_intake`, `visit_in_progress`, `ready_to_sign`. Surface lane WIP as front-of-house tiles (Registration Queue, Schedule Gaps, To-Room, Visits-in-Progress *(done)*, To-Sign). With A.1 these are literally `count(lane)`. **Effort: M.**
- **A3 — Durable counters (D4.1).** Retire in-memory `RcmCounters`; derive automation activity from `system_events` (durable, tenant-scoped, deploy-surviving) → enables real **trend lines** and makes the counters trustworthy. The two wiring fixes shipped this dive (appealsGenerated, arFollowups) become moot once counts come from the event log. **Effort: L.**
- **A4 — Lock the claim-status→lane map.** Enumerate every claim/denial/encounter status and assert each maps to exactly one lane (no silent `claim_needs_scrub` catch-all). Back it with the A.3 invariant test. **Effort: S.**
- **A5 — Wire or label non-data tiles.** Autopilot Command Deck → either project from `system_events` playbook runs or badge it "manual/preview." **Effort: S.**

#### A.5 Pillar B — complement one another (cross-surface wiring)
- **B1 — Tile → lane drill-through (deep-link contract).** Every tile links to `kanban.html?practiceId={pid}&lane={L}&cohort={c}` (extend the kanban's existing lane filter to honor URL params). "Denials = 9" opens the board filtered to the 9 `denial_appeal` cards. Pattern already exists (Denials deep-links to `worklist.html`); generalize it to the board with the A.2 map. **Effort: M.**
- **B2 — Card → dashboard context drawer.** A card click opens a per-entity drawer assembled from the existing endpoints keyed by `claimId`/`patientId`: KPIs (`/claims/{id}`), denial reasons (`/denials?claimId`), risk (`/workflow/claim-review`), deadlines/aging (`cohort`). No new data, just a focused projection. **Effort: M.**
- **B3 — Risk badges flow dashboard → cards.** The risk math (today in `/workflow/claim-review`: `preventableDenialRiskScore`, issues `ELIGIBILITY_*`, `NCCI_EDIT`, `AUTHORIZATION_REQUIRED`) moves into the A.1 projection as `risk_tier`/`cohort`, and the kanban renders it as a card flag (it already renders `blockers[]`). "Critical denial risk" stops being an abstract tile and becomes a red flag on *this* card. **Effort: M.**
- **B4 — Kanban WIP → dashboard rollups (same data, two zooms).** The Revenue Cycle pipeline + A/R aging tiles render as aggregations of the *same* work-items, with lane-age sparklines. The pipeline tile *is* the billing lanes summarized — guaranteed equal by A.3. **Effort: M** (free-ish after A.1).
- **B5 — Unified "watch a patient" timeline.** Productize what D7 produced by hand: a per-`patient_id` view fusing the dashboard deltas (from `system_events`) and the kanban lane walk into one journey timeline (`review_registration → … → ar_follow_up`, with the dashboard counts each step touched). This is the founder's original "watch the patient move" goal on one screen. **Effort: L.**
- **B6 — Role-aware landing.** Using the existing role tags on lanes (`role: 'billing'|'denial'|…` already in `kanban.js`) + the A.2 map, land each role on its lanes **and** its tiles pre-correlated (front desk → intake lanes + intake tiles; biller → billing lanes + RCM tiles; denial specialist → `denial_appeal` + denial tiles). **Effort: M.**

#### A.6 Phased roadmap (each phase is independently shippable and compounds)

> **Live tasking + status moved to [PracticeForceOneDashboardTable.md §D8](<PracticeForceOneDashboardTable.md>)** (2026-06-21) — the Table is the authoritative punch list (owner per row + commit proof); this section is kept as the *design ordering rationale* only. Don't track status here (avoids drift). Agent-hour estimate: **Appendix B** below.

1. **Phase 1 — Shared model (foundation).** A.1 work-item projection on `system_events` + A.3 durable counters (subsumes D4.1/D4.3). *Unlocks everything; biggest lift.* **L.**
2. **Phase 2 — Invariant + gate.** A.2 correspondence map encoded + A.3 `tile == count(cards)` assertion wired into the deploy gate (extend the D7 harness). *Cheap, locks correctness forever.* **S.**
3. **Phase 3 — Drill-through both ways.** B1 + B2. *Highest UX leverage once the model is shared.* **M.**
4. **Phase 4 — Light the dark tiles.** A1 seed fixture (lights tiles + board badges) + A2 intake tiles. **M.**
5. **Phase 5 — The "feels like one product" layer.** B3 risk badges + B4 rollups + B5 timeline + B6 role landing + A4/A5 cleanup. **L.**

#### A.7 Risks & how to de-risk
- **Shared-table writes (A1 seed).** Strict run-id tagging, ClearDLP coverage, hard tenant scope; never touch real patient rows; gate behind a staging flag. (Same discipline as the DLP ledger.)
- **Re-deriving the board server-side (A.1)** risks regressing the carefully-tuned `buildCards` collapse rules (single-most-actionable lane, dual-card suppression). Mitigate: port `buildCards` logic verbatim into the projection, and keep the D7 both-surfaces harness green throughout (it already encodes the expected lanes per DLP step).
- **Connection-model (echo of D7-F6).** The projection's reads/writes must respect the pooled-connection rule (no shared-JAC-connection RAW races); audit per the §6.4 recommendation.
- **Performance.** A per-request full board projection over large practices could be heavy; materialize/refresh from `system_events` rather than recompute per call.

#### A.8 Definition of done (how we'll know the two became one)
1. **One source:** both surfaces read the A.1 projection; no independent count queries remain.
2. **Invariant holds:** the harness asserts `tile == count(cards)` for every mapped lane across all three DLP journeys, in the deploy gate (Phase 2).
3. **No dark tiles:** every dashboard tile is lit by either a journey or the A1 seed, and each shows the *same* items on the board.
4. **Bidirectional:** every tile drills to its lane; every card opens its dashboard context.
5. **Risk once, shown everywhere:** a single risk computation drives both the risk tiles and the card badges.

**Thesis:** *the dashboard is the kanban's executive summary and the kanban is the dashboard's work surface — one work-item model, two zoom levels, navigable in both directions, with counts that are provably equal and risk computed once and shown everywhere.*

---

### Appendix B — Realistic agent-hour estimate (not the S/M/L human-day tags)

> Authored by **AgentDLP2, 2026-06-21**. Appendix A's effort tags (**S** ≤1 day, **M** 2–4 days, **L** 1–2 weeks) are *human-developer calendar* estimates. This is the honest **agent-hour** number — wall-clock time of a Claude Code agent actively driving the work, including its own compile/deploy/verify loops — with the padding stripped out. Grounded in **observed velocity in this repo**: the entire D5/D6/D7 per-step deep-dive *plus* the Phase-1 projection (`WorkflowBoardRoutes`) *plus* the Phase-2 harness (`verify-board-invariant.mjs`) *plus* A4 all landed on **one day (2026-06-21)**. Agents write the *code* fast; the cost is elsewhere.

**B.1 — What actually eats the hours (and what doesn't):**
- **Code generation is cheap.** Porting a `buildCards` branch, adding a tile, wiring a deep-link — minutes-to-~1h each. The S/M/L tags massively over-count this because they price human typing/reading, not agent throughput.
- **The deploy + verify loop is the dominant cost.** Every shippable increment needs a **cloud build (~25 min, gate included)**, often **serialized behind other concurrent agents' deploys** (the lane contention documented all over `AGENTS.md`), then a **headless-Chrome CDP verification run against live prod**. Budget **~1–2h of loop/wait per verified increment regardless of code size.**
- **DLP flakes tax re-runs.** Read-after-write races (portal `/portal/me`, check-in, reschedule-persist) fail a whole chained run; re-runs are routine. Add ~10–20% to anything verified through the DLP.
- **JAC/toolchain traps** (exit-0 compile errors, BOM-kills-compiler, 64KB-per-method on wide tables, OneDrive locks, phase0 hardcoded helper-list) cost real debugging time on backend/`.script` work specifically — not on `kanban.js`/UI work.

So the honest split is roughly **~45% active coding / ~55% deploy-verify-contention-flake overhead.**

**B.2 — Per-phase agent-hours:**

| Phase | Scope | Code (h) | Deploy/verify/contention (h) | **Total (h)** | Status |
|---|---|---|---|---|---|
| **P1 — Shared model** | A.1 projection (all 5 entity types) + A.3 durable counters on `system_events` (retire in-memory `RcmCounters`, the real schema/persistence lift) | 9 | 10 | **~19** | claim-slice DONE (~3h spent); multi-entity + durable counters remain |
| **P2 — Invariant + gate** | make projection faithful (clock skew + override-deletes), encode the A.2 map, wire `tile==count(cards)` into the deploy gate, green across DLP1/2/3 | 2 | 2 | **~4** | harness + A4 DONE (~3.5h spent); ~1–2h tuning remains |
| **P3 — Drill-through both ways** | B1 tile→lane URL links + B2 card→dashboard context drawer | 4 | 3 | **~7** | open |
| **P4 — Light the dark tiles** | A1 seed fixture (tenant-scoped, run-id-tagged, ClearDLP-covered) + A2 intake tiles | 4 | 3.5 | **~7.5** | seed scaffolded (`StagingSeedDashboardRoutes`); hardening + tiles remain |
| **P5 — "One product" layer** | B3 risk badges + B4 rollups + **B5 unified patient timeline (the big one)** + B6 role landing + A4/A5 cleanup | 12 | 8 | **~20** | A4 DONE |
| | **TOTAL (from scratch)** | **~31** | **~26.5** | **~57** | |

**B.3 — Bottom line:**
- **Full Appendix A, end to end: ~55–70 agent-hours (~60 midpoint).**
- **Already invested: ~6–7 agent-hours** (P1 claim-slice projection, P2 harness, A4 lane-map lock).
- **Remaining: ~50–63 agent-hours.**

**Sensitivity (the honest range):** a single agent with an **uncontended deploy lane and no DLP flakes** could compress the remaining to **~35–40h** (overhead collapses). The realistic number *with this repo's current friction* (shared deploy lane, multiple concurrent agents, periodic flakes) is **~50–60h**. The number that would be wrong in *either* direction is "a couple of days" (under) or the literal sum of the S/M/L tags ≈ 5–7 *human-weeks* (over — that prices human labor, not agent throughput).

**The single biggest lever** is not coding speed — it's **deploy throughput**: cutting the ~25-min gated build and de-contending the lane (the AgentCICD C5 incremental-build work) would remove the largest slice of these hours directly.

**Task rows:**

| ID | Maps | Task | Owner | Status |
|---|---|---|---|---|
| D8.1 | A.1 | **Work-item projection — CLAIM slice** (`GET /api/workflow/board`, port of `buildCards` claim branch incl. D7-F7 fix) | AgentDLP | ✅ Done 2026-06-21 (`ab67b65c5`, `util/WorkflowBoardRoutes.script`); **LIVE build 1913**, invariant 6/6 PASS |
| D8.2 | A.1 | **Projection — remaining entities** (encounter / charge-review / appointment / portal-registration) + collapse/override parity | AgentDLP | ✅ **DONE + LIVE+VERIFIED build 1988.** Appointment date-window re-applied with the correct nullable-timestamp getter (`ab33c25b5`: `isSTART_ATNull()`/`getSTART_ATPropertyValue()`); the earlier `getSTART_AT((Timestamp)null)→null` regression that zeroed the active-appt lanes is fixed. Invariant on 1988: **10/13 rendered lanes exact-MATCH + 3 documented KNOWN-GAP** (projection-only thin-PORTAL_USERS: review_registration/patient_needs_schedule/blocked_review). clinical_follow_up entity (AgentDLP2) folded in + MATCHes 9/9. No active-appt over/under-count. |
| D8.3 | A.3/D4.1/D4.3 | **Durable counters** — retire in-memory `RcmCounters`, derive automation from `system_events` (tenant-scoped, deploy-surviving) | AgentDLP | ✅ **DONE + LIVE+VERIFIED build 1988** (`a5bff3767`) — `/api/dashboard/automation-activity` aggregates `source_record_events` per practice (GROUP BY event_type), deploy-surviving; response shape unchanged + `"durable":true` (confirmed live). Scheduler-loop counters still in-memory (TODO, low-value). |
| D8.4 | A.3 | **Count-equals-cards harness** (`verify-board-invariant.mjs`) — projection `laneCounts` vs rendered board claim cards | AgentDLP | ✅ Done 2026-06-21 (`a4fd034f7`); reports per-lane diff |
| D8.5 | A.4 | **Lock status→lane maps** — canonical `CLAIM_STATUS_LANES` (+ encounter & charge-review maps); `__test.auditLaneMaps`; base-lane parity with `wbClaimLane()` 18/18 | AgentDLP2 | ✅ Done 2026-06-21 — claim (`fa3f35b47`) + **full scope** encounter/charge-review maps + combined audit (`d3a85ffb8`), `ui/public/kanban.js` |
| D8.6 | A.3 | **Make projection faithful + wire gate green** — fix the 2 known gaps (clock skew; override `deletedKeys`), encode A.2 map, green across DLP1/2/3, add to deploy gate | AgentDLP (proj) + AgentDLP2 (run) | 🟡 Claim slice faithful — **invariant 6/6 PASS on build 1913** (`verify-board-invariant.mjs`, AgentDLP `b6f65759d`). **Board-side cross-check added** (`8ce0a87ac`, my smoke prints dashboard-tile vs board-lane deltas, informational). **Remaining (AgentDLP):** projection clock-skew + override-deletes fixes, full A.2 map across entities, add the assertion to the deploy gate. **Full-board now 15/18 exact-match + 3 documented KNOWN-GAPs (thin PORTAL_USERS x2; blocked_review windowless-vs-dated); harness green-gates on those (`830ef6a6d`). ✅ gate-409 CLEARED → HEAD promoted (build 1978); full-board faithfulness + invariant-as-deploy-gate (`eff11c622`) now LIVE. ✅ **PROJECTION NOW FAITHFUL — invariant DEPLOY-GATE GREEN on build 2001** (10/12 lanes exact-MATCH; only the 2 architectural thin-PORTAL_USERS known-gaps remain: review_registration +21, patient_needs_schedule +2 — projection-only registration lanes that render no kanban card). **Two root-causes fixed:** (1) **blocked_review +53** — the projection emitted EVERY future cancelled appt into blocked_review; kanban `appointmentRowsForBoard` (~1701-1713) drops future cancelled/terminal appts (only SAME-DAY inactive reach it). Added same-day guard `if (!apptIsSameDay && wbIsInactiveApptStatus(status)) continue;` (`394aea9b2`, LIVE build 2001) → gap GONE. (2) **patient_scheduled -1** was a **HARNESS bug, not a projection gap** — diagnosed via `dump-lane-card.mjs`: the kanban's async testing-date init (kanban.js ~544-553) reset the board date to today() AFTER the harness pinned BOARD_DATE, so the board rendered at today while the projection was queried at 2026-08-01, leaking a pre-board-date scheduled appt (`b81dcd65`, 2026-07-05) into patient_scheduled. Fixed `verify-board-invariant.mjs` to pin robustly (set value + dispatch `change` + retry until it sticks) → patient_scheduled now 0=0 MATCH. **Projection was correct all along.** Remaining (AgentDLP, polish): override-deletes, full A.2 map across entities. |
| D8.7 | B1 | **Tile → lane drill-through** — `kanban.html?lane=&cohort=` URL params (kanban) + deep-links on every tile (dashboard) | AgentDLP2 (kanban) + AgentDLP (dash) | ✅ **Kanban half LIVE+VERIFIED build 1938** (`9021c3df4`; smoke: `?lane=denial_appeal` → only 11 denial_appeal cards + deep-link banner, PASS). Open: dashboard tile deep-links (AgentDLP) |
| D8.8 | B2 | **Card → dashboard context drawer** (per-entity, from existing endpoints) | AgentDLP2 | ✅ **LIVE+VERIFIED build 1938** (`fe884f733`; smoke: claim card → Dashboard-context panel renders KPIs, PASS) |
| D8.9 | A1/D6.4 | **Seed fixture** — aged/near-deadline/notification/security rows (tenant-scoped, run-id-tagged, ClearDLP-covered) to light cards 3/11/16/17 + Source-Coverage security | AgentDLP | ✅ **DONE + VERIFIED LIVE build 2015.** `verify-dashboard-seed-fixture.mjs` **RESULT: PASS** — all 3 dark tiles light (A/R aging +4, Deadlines +1, Unread via seed counts since `/api/notifications` caps at 50) and ClearDLP cleans up. Leaked rows from the earlier 500'd runs swept from the DB. **Light-the-dark-tiles run found + fixed a 5-deploy NOT-NULL cascade:** (1) PATIENTS/CLAIMS `setCREATED_BY` literal → uuid FK 500 → `setCREATED_BY(userId)` (LIVE 2001); (2) CLAIMS `payer_id` NOT NULL unset → 500; (3) CLAIMS missed NOT-NULL `billing_provider_id` + `place_of_service` (per information_schema; `rendering_provider_id` is NULLABLE). Fix: resolve payer/billing/place-of-service from an existing claim in the practice (raw lookup) + totals 0.00. Also: the org has **5 active practices** but only one has claims, so the seed picked an arbitrary claim-less practice → NO_PAYER; verifier now passes `practiceId`. **Then the [[jac-jeo-unset-fields-bind-null]] gotcha bit:** the JEO binds NULL for EVERY unset field, so NOT-NULL columns WITH a DB default still 500 — CLAIMS `diagnosis_codes` (default `'{}'`) and the DENIALS `denial_category`/`denial_code`/`denied_amount`. Pulled the FULL NOT-NULL list (regardless of default) from information_schema and set them all (`diagnosis_codes='{Z00.00}'`, denial fields) — CLAIMS + DENIALS now insert clean (verified on 2013). Final straggler: NOTIFICATION_DELIVERIES `created_at`/`updated_at` (NOT NULL now() default, JEO binds null) — **converted that insert to raw SQL** (DB defaults apply, like the source_record_events insert) + made it non-fatal. **Ships build ~2015** — genuinely complete; verifier then lights the A/R-aging dark tile. **Cost note: a 5-deploy NOT-NULL cascade — each insert masked the next; should have pulled the full multi-table schema + used raw SQL up front.** |
| D8.10 | A2 | **Intake/clinical dashboard tiles** mirroring pre-billing lanes (Registration Queue, Schedule Gaps, To-Room, To-Sign) | AgentDLP | ✅ **DONE (committed, awaiting deploy).** Front Desk Queue tile (`b0ffdde2d`) LIVE on 1988 + now extended with the **To-schedule chip** (`patient_needs_schedule`) so all five intake lanes (review/schedule/scheduled/room/sign) are mirrored, each chip deep-linking to its lane. Single-sourced from the projection `laneCounts` → counts == cards. |
| D8.11 | B3 | **Risk badges flow dashboard → cards** (risk computed once in the projection, rendered as card flags) | AgentDLP2 (kanban) + AgentDLP (proj) | ✅ **DONE + LIVE+VERIFIED build 1978** — projection emits `riskScore`/`riskTier` (verified live: 1 critical / 10 high / 12 medium / 62 low) AND the board consumes it (`eee1d1198` overlay live in served JS). Risk computed ONCE, shown on the card. Smoke 5/5. (Remaining parity TODO = AgentDLP: fold claim-review eligibility/auth issues into the projection score) |
| D8.12 | B4 | **Kanban WIP → dashboard rollups** (pipeline/AR tiles as aggregations of the same work-items) | AgentDLP | ✅ **DONE (committed, awaiting deploy).** New **Billing Pipeline (Board)** tile in `dashboard.html` — aggregates the billing-half lane counts from the SAME `/api/workflow/board` projection (To-code / Scrub-submit / In-payer / Denials / A/R), each chip deep-linking to its lane. Count-equals-cards by construction (same source the kanban renders). Registered in `widgetCatalog`; `renderPipelineRollupWidget()` fed by `loadBoardLanes()`. |
| D8.13 | B5 | **Unified "watch a patient" timeline** (per-`patient_id` dashboard-delta + lane-walk on one screen) | AgentDLP2 | ✅ **LIVE+VERIFIED build 1953** (`143eb4a70`; smoke: 358 Journey tags, modal shows the "Where they are now" lane-walk, PASS). "Journey" tag → modal fusing the patient's open work-items (lane-walk in journey order) + event history from `/kanban/card-events`. Next (enhancement): fold in per-step dashboard counter deltas once the projection emits them |
| D8.14 | B6 | **Role-aware landing** (each role lands on its lanes + its tiles, pre-correlated) | AgentDLP + AgentDLP2 | ✅ **DONE (committed, awaiting deploy).** Kanban half pre-existing (`roleToKanbanView()`/`applyDefaultViewFromUser()`). **Dashboard half added:** `ROLE_PRIORITY_TILES` map + `roleLandingOrder()` make the *fallback* widget order lead with each role's tiles (biller→Billing Pipeline/RC/A/R/risk; front-desk→Front Desk Queue/intake; denial→denials/risk-tiers; provider/clinical→intake/risk; owner→KPIs/pipeline). Reads `user.role`; respects any saved layout (only reorders the un-customized default). |
| D8.15 | A5 | **Wire or label non-data tiles** (Autopilot Command Deck → project or badge "manual/preview") | AgentDLP | ✅ **DONE (committed, awaiting deploy).** Autopilot + RCM-Autopilot tiles already carry the `preview` pill ("Preview"/"Default off") + "Review only; no auto-post" meta; firmed up the Autopilot meta to read explicitly "manual preview only — plans the next safe step, never writes" so the non-data/manual nature is unmistakable. |
| D8.16 | test | **Kanban-UI live smoke** for B1/B2/B3/B5 (`tests/ui/verify-kanban-appendix-ui.mjs`) — CDP asserts lane filter + risk chip + Journey modal + dashboard-context panel; positive (data-conditional checks SKIP) | AgentDLP2 | ✅ Built (`e7a4d66de`) + **5/5 PASS** (build 1953, re-verified on **1978**; now also prints the D8.6 board↔dashboard cross-check) |
| D8.17 | R6 | **DLP full-lane coverage** — restructure the **DLP** journey so it visits **all 22 kanban lanes** (founder ask). Granular intake steps (arrived/rooming/intake/in-progress), encounter-status lanes (doc-incomplete/ready-to-sign), clinical-task, eligibility-exception, board pinned to the visit day so appointment-loop lanes render. Doc: [PracticeForceOneDLP.md](<PracticeForceOneDLP.md>) | AgentDLP2 | In&nbsp;Progress — **batch-1/2/3 all LIVE (build 1605, `807ac353`)**. batch-2 confirmed +`clinical_follow_up`/`ready_to_sign`/`patient_arrived` (13/22 via DLP alone). **Root cause found:** b04 reschedules to **08-21**, so the verification board must pin to that day for the appointment to be resident (unmasks ready_to_encounter/ready_for_provider/ready_for_intake/insurance_exception) — fixed. batch-3 adds ready_to_claim(e00b), patient_balance(h07), blocked_review(h08) + commit-polls for the encounter-status lanes. **VERIFIED build 1607: 20 of 22 lanes reachable by DLP** (documentation_incomplete fixed — encounters.status is VARCHAR(20), so 24-char `documentation_incomplete` silently failed; use `unsigned`). **3 stragglers:** `ready_to_claim` (transient approved-no-claim window — flaky capture, lit some runs); `patient_balance` (main claim carries an A/R state that masks it → needs a dedicated clean claim w/ balance==patientResponsibility); `needs_pre_check_in` (needs backend `pre_check_in_required` flag — no column). **✅ VERIFIED build 1609: 21 of 22 lanes walk in DLP** — added `needs_pre_check_in` (new backend `pre_check_in_required` flag on appointments + DLP step b03c) and `ready_to_claim` (poll now checks THIS charge-review by id, not any stale 'approved'). **Only `patient_balance` left:** `POST /api/claims` forces draft+patientResponsibility=0, and the main claim is A/R-entangled — needs a dedicated non-A/R claim PUT to partial+patientResponsibility, contingent on the claims PUT persisting patientResponsibility (uncertain — main-claim attempt didn't stick). DLP3 has a separate check-in regression (de-activation→403/404) |

> **Decision — kanban consuming `/api/workflow/board` is intentionally deferred (not a gap):** the projection was *ported from* `kanban.js buildCards()`, and the invariant already PASSES 6/6, so having the board re-read the projection today is circular and adds risk with no visible gain. It becomes worthwhile only once **D8.3 durable counters** make the projection (on `system_events`) the system-of-record the board *can't* re-derive locally — at which point the kanban switches to consuming it. Sequenced after D8.3.

---

## Related / cross-lane (tracked elsewhere, noted for context)

- **CICD cloud cutover** — AgentDashboard's deploy path converts to the cloud pipeline once AgentCICD flips (C3.2). I verified the cutover blocker (7 missing prod env settings) + the build-equivalence signal; tracked in [PracticeForceOneCICDMRTable](<PracticeForceOneCICDMRTable.md>). (The D2.3-Denials drawer prototype shipped then was removed 2026-06-16, commit `84bb7a85a`; Denials now deep-links to `worklist.html`.)
- **Live bugs surfaced by the assessment** (candidates for ISSUES.md / MR6): the Tier-E preview stubs presenting as live (D1.3), and the non-tenant-scoped automation counter (D1.4).

---

## Definition of done (the dashboard hardening exit bar)

1. **No widget lies** (D1) — every tile's provenance is visible; the volatile/preview/composite tiers are labeled; automation is tenant-scoped.
2. **Every number decides** (D2) — Act/Watch/Context; Watch tiles carry target+trend+verdict; Act tiles drive work (substantive tiles deep-link to their work page; terminal-1-click tiles get an in-place drawer).
3. **Each role lands on its job** (D3) — role-default layouts, persisted server-side.
4. **One durable source** (D4) — automation + composites server-side on the single `system_events` log; widgets validated against the DLP day.
5. RB-561 rehearsed by a non-author; the operator guide reflects the shipped click-to-work behavior (deep-links today; drawers when terminal-1-click tiles ship).

*Table created 2026-06-15 by AgentDashboard from the assessment's R1–R6 / P0–P3. Update rows in place with date + proof as work ships.*

---

## Review Epilog — 2026-06-23

Reviewed 2026-06-23 as part of a full PracticeForceOne wiki truth-pass. Status: UPDATED.

- Classified as a **status** doc (tracks verifiable dashboard build/ship/gate state). Deep-verified the live-build references against ground truth and the repo: the body's most recent live build (~2015 for the dashboard count-equals-cards invariant DEPLOY-GATE GREEN) matches ground truth; the doc correctly does NOT stamp the local build counter (build-manifest.json = 1618, generatedAt 2026-06-23) as live. Spot-checked referenced commits (`76f64fa0`, `61f93d16`, `9648d4e0d`, `4402e1e09`, `51aaef5ac`, `394aea9b2`, `84bb7a85a`, `ea9d25d54`, `2a5209e26`) — all present in git history.
- Corrected the stale page header: "Last updated" 2026-06-21 -> 2026-06-22 and the "Active workstream" block, which still pointed at the D5 deep-dive even though D8 / Appendix A ("one model, two lenses") completed 2026-06-22 at live build ~2015. Header now leads with the D8 COMPLETE state and the GREEN invariant gate, and notes D5/D6/D7 are complete (incl. the D7-F6 portal `/portal/me` 401 race FIXED+VERIFIED at build 1908, commit `2a5209e26`, confirmed in the repo).
- Flag: the MEMORY note "Portal /portal/me 401 race" still describes D7-F6 as escalated/single-covered — that note predates the commit `2a5209e26` fix; the residual is only the test-coverage gap D7.5 (make DLP2/DLP3 also exercise post-activation portal login), which remains correctly open. No doc change needed; noted for the founder.
- Flag: line 506 (D8.9 prose) contains a `[[jac-jeo-unset-fields-bind-null]]` double-bracket reference. Left as-is because it points to an agent MEMORY note, not a wiki page — converting it to a relative markdown link would create a broken link.
- Did NOT touch the substantive D1-D8 row content, the Appendix A/B design text, or the agent-hour estimate; all verified consistent with ground truth (MR6 delivered, hermetic Cloud Build deploy, in-memory RcmCounters -> durable system_events fix path). No fabricated numbers or dates introduced.

## Review Epilog — 2026-07-24

- Live build is now **1943** (gate 251/251 GREEN); C1 operational exactness COMPLETE and LIVE since build 1683 (19/19 exactness, 14/14 bands) — status unchanged and still accurate.
- C4/D4.1 durable automation counters remain the primary open workstream; C2 leftovers (A/R LIMIT-200, cross-entity pipe links) and C3 role walks still open.
- The D8 Appendix-A "one model, two lenses" invariant (tile counts == kanban card counts) confirmed GREEN on build 1943.
- MR status: MR2–MR7 DELIVERED; MR8/MR9/MR10 active. August demo path (CF-14 gate) PASSES on build 1943.
