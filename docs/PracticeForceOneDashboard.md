---
title: "PracticeForceOneDashboard"
---

# PracticeForceOne™ Dashboard — Hardening Assessment & Target-State Design

**Last reviewed: 2026-07-24**

**Owner:** AgentDashboard · **Assessment authored:** 2026-06-14 · **Status:** Deep-dive assessment (Part I) + preserved target-state design (Part II)
**Mandate (founder):** *"I need a deep dive expert to understand the Dashboard events and if they really do provide useful and actionable information. When I look at it I see a blur of numbers and can't tell if it's really helpful in making decisions… make recommendations for turning this into a true hardened product."*
**Method steer (founder):** *"do this analysis in the context of real-to-life workflows."* → This assessment is graded against the **Day-in-the-Life-of-a-Patient (DLP)** chain ([PracticeForceOneDLP.md](PracticeForceOneDLP.md) · [PracticeForceOneMR5ScenariosInventory.md](PracticeForceOneMR5ScenariosInventory.md)) — the real clinic spine A→G — and the real roles who work it.

> **🧪 Operating or testing the dashboard?** See the companion **[PracticeForceOneDashboardOperatorGuide.md](PracticeForceOneDashboardOperatorGuide.html)** — the practical "how to drive it and how to test it" manual (controls, the 19 tiles, the trust tiers to believe under test, the Denials tile's deep-link to the worklist, and an end-to-end test procedure for after a reseed). *This* doc is the assessment of *whether* the dashboard is good; that doc is *how* to operate it.
> **📋 Tracking the hardening work?** The live task table is **[PracticeForceOneDashboardTable.md](PracticeForceOneDashboardTable.html)** (R1–R6 / P0–P3 as rows, with status).

> **⏱ POINT-IN-TIME NOTICE (read first, added 2026-06-23).** Part I below is a snapshot assessment authored **2026-06-14** and graded against the dashboard *as it stood that day*. Several of its present-tense problem statements have **since been fixed** — do NOT read them as the current live state. Most importantly: the §4 "kill-shot" in-memory automation counter is **fixed** — `DashboardAutomationActivityRoutes.script` now derives the automation tallies from the durable, tenant-scoped `source_record_events` table (grouped by `event_type`, SUM of `event_payload.count`), so the scrub/ERA/secondary/eligibility/AR-followup/appeals counters now **survive a deploy and are scoped to the caller's authorized practices** (D8.3 / D4.1; only `webhooksProcessed`/`erasProcessed`/scheduler-status remain intentionally in-memory dedup/runtime state). The §3/§4b provenance badges (R5c) are **live** on all tiles, Tier-D/E tiles are labeled (D1.2/D1.3), the §7b Denials click-to-work drawer was removed in favor of deep-link (`84bb7a85a`), and the **Appendix-A "one model, two lenses" invariant gate is GREEN** (dashboard tile counts == kanban card counts; current live build: **1943**). For the current status of every R/P item see [PracticeForceOneDashboardTable.md](PracticeForceOneDashboardTable.html). The assessment text below is preserved as the original verified analysis of record.

> **How to read this doc.** **Part I** is the assessment the founder asked for: what the dashboard *is* today, why it reads as a "blur," whether each number maps to a real decision a real role makes during a real clinic day, and what to do about it (R1–R6, a decisions-first v2 layout, a P0–P3 roadmap, and the testing gaps). **Part II** is the previously-drafted event-sourced dashboard **design proposal** (Agent4, 2026-06-05), preserved verbatim — it is the convergent **target state** the Part I recommendations build toward. Read Part I first; it tells you *why* Part II is the right destination and *what to do before* you get there.

---
---

# PART I — Assessment & Hardening Recommendations

## 0. Executive verdict

**The dashboard is a competent *instrumentation panel* and a poor *decision tool* — and one tier of its numbers is not currently trustworthy.** That gap is exactly the "blur" the founder sees.

Three findings drive everything below:

1. **It reports activity, not decisions.** ~19 widgets each answer *"how many / how much"* but almost none answer *"so what"* (is that good or bad, vs. what target/trend) or *"now what"* (who must do what, on which record). A wall of context-free counts reads as noise even when every number is individually correct.
2. **Several tiers of numbers are not what they appear.** *Verified widget-by-widget against all three route files + the HTML (§1, §3).* Three distinct trust problems coexist: (a) the **automation** widget is served from **in-process memory counters** (`RcmCounters.autoCounters[…]`, `processedWebhookIds`, `processedEraTrns`) — per-Cloud-Run-instance, never persisted, reset on every deploy, not summed across the 2 instances, and **not even tenant-scoped**; (b) three widgets (**autopilot, rcmAutopilot, payerLearning**) are **client-side contract stubs** (`window.PracticeForceOne*`, gated by `localStorage` flags) that can render plausible numbers with **no server data behind them**; (c) five widgets (**sourceCoverage, rcmAutopilot, payerLearning, lostWork, actions**) are **composed in the browser** from multiple table endpoints, so their numbers are **not reproducible or auditable server-side.** A dashboard with three different "this number might not mean what you think" failure modes trains users to discount *all* of it — including the genuinely trustworthy table-backed tier.
3. **There is no role lens.** A front-desk clerk, a biller, a provider, and the owner see the same undifferentiated grid, but they make completely different decisions at completely different points in the DLP spine. No single user's job is served well, so the whole thing feels like "someone else's report."

**Bottom line:** the data *foundation* is good (real RCM tables, real endpoints) and the future direction (Part II's event log) is right. But shipped as-is, the dashboard fails its one job — *helping someone decide what to do next.* It is fixable without waiting for the full Part II rebuild; §6–§9 give the path.

---

## 1. What the dashboard actually is today

**Surface:** `ui/public/dashboard.html` — a fixed grid of **~19 widgets**, identical for every user, rendered from a handful of summary endpoints.

**Widget inventory (as built) — verified widget-by-widget against `dashboard.html` + all three route files (2026-06-14):**

| # | Widget (id) | Endpoint(s) it fetches | Served by | Exact backing source | Tenant-scoped | Tier (§3) |
|---|---|---|---|---|---|---|
| 1 | events | `/api/workflow-events` | (cross-router) | **TABLE** — `WORKFLOW_EVENTS` | ✅ practiceId | **A** |
| 2 | sourceCoverage | `/api/workflow-events` | (cross-router) | **CLIENT-DERIVED** — browser keyword-matches events into 8 domains | ✅ | **C** |
| 3 | notifications | `/api/notifications` | (cross-router) | **TABLE** — `NOTIFICATIONS` (unread) | ⚠️ org-scoped, not practice | **A** |
| 4 | intake | `/api/admin/portal-users` | (cross-router) | **TABLE** — `PORTAL_USERS` (status/lifecycle) | ✅ | **A** |
| 5 | autopilot | *(none — client JS)* | client contract | **CONTRACT STUB** — `window.PracticeForceOneAutopilot.listPlaybooks()` | n/a (client) | **E** |
| 6 | risk | `/api/workflow/claim-review` | (cross-router) | **TABLE** — `CLAIMS` (readiness/issue codes) | ✅ | **A** |
| 7 | denialRiskTiers | `/api/workflow/claim-review` | (cross-router) | **TABLE** — `CLAIMS` (preventable-denial risk score) | ✅ | **A** |
| 8 | kpis | `/api/dashboard/summary` + `/api/dashboard/ar-aging` | **DashboardRoutes** | **TABLE** — `CLAIMS` (+ payments) | ✅ | **A** |
| 9 | pipeline | `/api/claims` | (cross-router) | **TABLE** — `CLAIMS` status distribution | ✅ | **A** |
| 10 | aging | `/api/dashboard/ar-aging` | **DashboardRoutes** | **TABLE** — `CLAIMS` balance, live aging buckets | ✅ | **A** |
| 11 | denials | `/api/denials` | (cross-router) | **TABLE** — `DENIALS` (open/pending) | ✅ | **A** |
| 12 | denialReasons | `/api/denials` | (cross-router) | **TABLE** — `DENIALS` aggregated by CARC | ✅ | **A** |
| 13 | rcmAutopilot | `/api/denials` + `/api/claims` | client contract | **CLIENT-DERIVED + STUB** — `window.PracticeForceOneRcmRiskRails.prepareRcmAutopilot()` | ✅ (inputs) | **C / E** |
| 14 | payerLearning | `/api/denials` + `/api/claims` | client contract | **CLIENT-DERIVED + STUB** — `…suggestPayerRuleLearning()` | ✅ (inputs) | **C / E** |
| 15 | deadlines | `/api/reports?type=timely-filing-aging` + `/api/denials` | (cross-router) | **TABLE** — `REPORTS` (timely-filing) + `DENIALS` (appeal deadlines) | ✅ | **A / B** |
| 16 | lostWork | 5 endpoints (claims, claim-review, workflow-events, notifications, portal-users) | composite | **CLIENT-DERIVED COMPOSITE** — risk score summed in browser | ✅ (inputs) | **C** |
| 17 | automation | `/api/dashboard/automation-activity` | **DashboardAutomationActivityRoutes** | **IN-MEMORY** — `RcmCounters.autoCounters[0..7]` + `processedWebhookIds`/`processedEraTrns` `.size()` + `lastSchedulerRun` | ❌ **org-wide, no practice filter** | **D** |
| 18 | actions | `/api/dashboard/workflow-summary` + claims + denials + portal-users | **DashboardWorkflowSummaryRoutes** + composite | **DERIVED** — workflow queue counts + composite | ✅ | **B / C** |
| 19 | feed | `/api/workflow-events` | (cross-router) | **TABLE** — `WORKFLOW_EVENTS` (severity/time/category filtered) | ✅ | **A** |

**Dashboard-owned endpoints (6, in the three `Dashboard*Routes.script` files):** `/api/dashboard/summary` · `/api/dashboard/ar-aging` · `/api/dashboard/trends` · `/api/dashboard/top-payers` · `/api/dashboard/automation-activity` · `/api/dashboard/workflow-summary`. The remaining widgets call **cross-router** endpoints (`/api/claims`, `/api/denials`, `/api/workflow-events`, `/api/notifications`, `/api/workflow/claim-review`, `/api/admin/portal-users`, `/api/reports`) served elsewhere — i.e. **the dashboard is mostly a client-side aggregator over other routers' endpoints, not a dedicated dashboard service.**

**Source-coverage model:** 8 domains — registration · scheduling · clinical · coding · edi · payment · denial · security (defined as a static `MR3_DASHBOARD_SOURCE_COVERAGE` array in the HTML; coverage is decided by **client-side keyword matching** over the event feed, not a server query).

**Observation:** the table-backed tier (A — 11 widgets) is real and trustworthy. The problems are **framing** (§2), **trust across four non-A tiers** (§3–§4b), and **audience** (§5) — *not* "wrong data" in the A tier.

---

## 2. Why it reads as a "blur" — the three root causes

A number becomes *decision-useful* only when it answers three questions in sequence. The current widgets answer the first and stop:

| The 3 questions a useful metric answers | Current dashboard |
|---|---|
| **"What?"** — the number | ✅ Yes — 19 of them |
| **"So what?"** — vs. a target, a trend, a threshold; is this good or bad? | ❌ Almost never. Counts float without a target line, a delta, or a red/green verdict. |
| **"Now what?"** — what action, by whom, on which record? | ❌ Almost never. Numbers are not clickable to the underlying work; nothing says "you, biller, work these 14." |

**Root cause 1 — No decision hierarchy.** All 19 widgets carry equal visual weight. There is no "these 3 things need a human *today*, everything else is context." The eye has nowhere to land first → "blur."

**Root cause 2 — No "so what."** Counts lack the three things that turn a number into a judgment: a **target/threshold**, a **trend/delta vs. prior period**, and a **good/bad verdict color**. "14 denials" is meaningless; "14 denials, ▲ 6 vs. last week, target < 8 → RED" is a decision.

**Root cause 3 — No "now what."** Even when a number *is* alarming, the dashboard is a dead end — you cannot click "14 denials" to get *the 14 denials* and work them. (Part II's drill-down is the structural fix; §6 R4 is the interim.)

**Plus the trust tax (§4)** — which silently discounts every number, including the good ones.

---

## 3. Provenance tiers — not all numbers deserve equal trust

Grading the 19 widgets by **where the number actually comes from** (verified in §1) is the single most clarifying lens, and it must become **visible on the dashboard itself**. There are **five** tiers, not three — and only one is fully trustworthy as displayed:

- **Tier A — Table-backed, server-computed, reproducible (11 widgets: events, notifications, intake, risk, denialRiskTiers, kpis, pipeline, aging, denials, denialReasons, feed; deadlines part-A).** Queried on demand from real RCM/clinical tables (`CLAIMS`, `DENIALS`, `WORKFLOW_EVENTS`, `NOTIFICATIONS`, `PORTAL_USERS`, `REPORTS`). **Trustworthy and auditable. This is the asset.**
- **Tier B — Server-derived (actions/workflow-summary counts; deadlines part-B).** Computed server-side from tables via rules/aggregation. Trustworthy *if* the derivation is documented — today it mostly isn't.
- **Tier C — Client-side composite/derived (sourceCoverage, rcmAutopilot, payerLearning, lostWork, actions-part).** The **browser** fetches several table endpoints and computes the number locally. The inputs are real, but the result is **not reproducible or auditable server-side**, drifts if any input call fails partially, and cannot be queried by anything other than the page.
- **Tier D — In-memory process counters (automation).** Served straight from `RcmCounters.autoCounters[0..7]` + `processedWebhookIds.size()` + `processedEraTrns.size()`. **Not trustworthy as displayed** — per-instance, deploy-reset, never persisted, not tenant-scoped (§4).
- **Tier E — Client-side contract stubs (autopilot, rcmAutopilot, payerLearning).** Rendered from `window.PracticeForceOne*` JS contracts gated by `localStorage` flags (`MR3_RCM_AUTOPILOT_ENABLED`, `MR3_SELF_TUNING_PAYER_RULES_ENABLED`). These are **scaffolding/read-only contracts** — they can paint plausible-looking output with **no authoritative server data** behind it (§4b).

(rcmAutopilot and payerLearning straddle C and E: real denial/claim inputs, but composed and labeled by a client contract behind a flag.)

**Hardening rule:** every widget must **declare its tier** (a small badge/tooltip — "live from ledger" vs. "computed in your browser" vs. "process counter, volatile" vs. "preview contract"). A user who can see the provenance calibrates trust per-tile instead of distrusting everything equally.

---

## 4. Trust problem #1 — the in-memory automation counter (the kill-shot finding)

*Scope (corrected after verification): this affects exactly **one** widget — `automation` (#17), served by `DashboardAutomationActivityRoutes.script`. It does **not** affect `events`/`feed` (those read the `WORKFLOW_EVENTS` table) — an earlier draft mislabeled them.*

`DashboardAutomationActivityRoutes.script` serves the automation widget verbatim from process memory:

- `RcmCounters.autoCounters[0..7]` — 8 integer counters incremented in-process as automation runs.
- `processedWebhookIds` / `processedEraTrns` — in-memory de-dup sets; their `.size()` is shown as a count.

On the current deployment this means:

1. **Per-instance, not global.** Cloud Run runs **2 instances**; each holds its *own* counters. A request load-balanced to instance A shows A's numbers; the next refresh may hit instance B and show *different* numbers. **They are never summed.**
2. **Reset on every deploy.** Each deploy starts fresh processes → counters silently return toward zero. "Autopilot executions today" can *drop* after a deploy with no real change in activity.
3. **Never persisted.** There is no table behind them. History cannot be reconstructed; "since I last looked" is impossible; an audit cannot verify them.

**Consequence:** these widgets can legitimately show numbers that **disagree with each other and with reality within the same minute.** This is the most corrosive item on the board — not because the feature is broken, but because *a dashboard that visibly contradicts itself destroys trust in the trustworthy tiers too.* This is very likely a real contributor to the founder's "I can't tell if it's helpful" reaction.

4. **Not tenant-scoped.** The `/api/dashboard/automation-activity` handler takes **no `practiceId` filter** — the counters are **org-wide** (in fact process-wide). In a multi-practice org, this widget shows one practice's user numbers it has no business seeing, and conflates all practices' automation into one figure. This is both a correctness bug and a (mild) tenant-isolation smell on a read surface.

**Fix (P0, §8):** persist automation activity as durable, tenant-scoped rows (the natural seed of Part II's `system_events`), and until then **label the automation widget "live process activity (volatile, per-instance, org-wide) — not a system-of-record count."** Honesty first, durability second.

---

## 4b. Trust problems #2 and #3 — contract stubs and client-side composition

Verification surfaced two trust failure modes the first draft missed. Both are arguably *worse* than the in-memory counter, because they look exactly like real data.

**#2 — Contract stubs (Tier E): `autopilot`, `rcmAutopilot`, `payerLearning`.** These render from client-side JS contracts (`window.PracticeForceOneAutopilot`, `window.PracticeForceOneRcmRiskRails`) gated by `localStorage` flags (`MR3_RCM_AUTOPILOT_ENABLED`, `MR3_SELF_TUNING_PAYER_RULES_ENABLED`). They show a "Read only" pill but otherwise look like live tiles. The risk: a tile that presents **preview/scaffold output as if it were operational data**. A user cannot tell "this is a feature preview" from "this is my practice's real autopilot activity." **Fix:** mark Tier-E tiles unambiguously as *Preview / not yet operational* (or hide them off the default layout until the server side exists), and never let a flag silently turn a preview into something that reads as authoritative.

**#3 — Client-side composition (Tier C): `sourceCoverage`, `lostWork`, `rcmAutopilot`, `payerLearning`, `actions`.** Each is computed **in the browser** by fetching multiple table endpoints and combining them locally — e.g. `lostWork` sums risk across **five** endpoints (claims + claim-review + workflow-events + notifications + portal-users). Consequences: (a) **not reproducible/auditable** — no server query yields the number, so it can't be tested, alerted on, or reconciled; (b) **silent partial failure** — if one of the five calls errors or is slow, the composite is *wrong but still renders a number*; (c) **logic lives in the page**, so two clients (or a future mobile view) can disagree. **Fix:** move composite/derived metrics server-side (a real endpoint that returns the number and is unit-testable), which also lets them carry targets/thresholds (§6 R2) and feed alerts.

**Why this matters for the founder's question:** "a blur of numbers I can't trust" is *literally accurate* — of 19 tiles, **11 are trustworthy (Tier A)**, **1 is volatile (D)**, **3 are previews that look real (E)**, and **5 are unauditable browser composites (C)**. Eight of nineteen tiles carry a hidden asterisk, with **no visual cue** distinguishing them from the eleven good ones. That is the mechanical cause of the "I can't tell if it's helpful" reaction.

---

## 5. The missing role lens — map the dashboard to the real clinic day (DLP)

The founder's steer — *"in the context of real-to-life workflows"* — is the decisive test. PracticeForceOne already has a **canonical real-life workflow**: the DLP chain, certified A→G. Walk it, name the role who acts at each seam, name the decision they make, and ask **"is there a dashboard number that helps them make it?"**

| DLP phase (real step) | Role who decides | The real decision at this step | Does today's dashboard help? | Gap → what a hardened dashboard owes this role |
|---|---|---|---|---|
| **A01–A06** Registration → confirm → **staff review** → chart link → intake | **Front desk / Staff** | "Which new portal registrations are waiting on me to review & activate?" (the A03→A04 queue) | ⚠️ Partial — `intake` count exists, but it's a number, not the worklist | **Worklist tile:** "N registrations pending review → [work them]," oldest-first, clickable to the review item |
| **B01–B04** Insurance capture → **eligibility** → booking → reminder | **Front desk / Staff** | "Whose eligibility is unverified before their visit? Which copay do I collect?" | ❌ No eligibility-gap tile | **Pre-visit readiness tile:** today/tomorrow's appts missing eligibility or copay-on-file |
| **C01–C02** Check-in → **copay at TOS** | **Front desk / Staff** | "Did we collect the copay we were owed? Who checked in but didn't pay?" | ❌ Not surfaced | **TOS-collection tile:** copay due vs. collected today |
| **D01–D07** Vitals → med rec → orders → **results→ack** → eRx → dx → **sign** | **MA / Provider** | "What needs *me*? Unacked critical results; encounters open/unsigned; orders overdue." | ⚠️ `deadlines` + `notifications` touch this, but not role-filtered | **Provider action tile:** *my* unsigned encounters, *my* unacknowledged critical results, *my* overdue orders (this is the D04/D07 seam — the highest-risk clinical decisions) |
| **E01–E03** Charge review → **scrub** → **837 submit** | **Biller** | "What's sitting in charge review? What failed scrub? What's ready to submit?" | ⚠️ `pipeline` shows status counts, not the worklist | **Biller worklist:** charge-review backlog, scrub-failures, submit-ready — each clickable |
| **F01–F03** 999/277 acks → status → **835/ERA** | **Biller / System** | "Which claims are stuck (no ack, no status, aging in clearinghouse)?" | ⚠️ `pipeline`/`aging` are close but claim-A/R-centric, not clearinghouse-stuck-centric | **Stuck-claims tile:** submitted but un-acked > N days (the F-phase exception queue) |
| **G01–G02** ERA auto-post → **patient balance → statement → payment** | **Biller / System** | "Did money post correctly? Whose balance needs a statement? What's unposted?" | ⚠️ `aging`/`kpis` adjacent; unposted-ERA not explicit | **Posting tile:** unposted remits, statement-ready balances |
| **Denials** (cross-phase, off the happy path) | **Biller / Denial specialist** | "Which denials, by reason, are worth working *today*, and which appeals are due?" | ✅ Best-served area — `denials`, `denialReasons`, `denialRiskTiers`, `deadlines` | Add target/trend + clickable worklist; this is the model the rest should follow |
| **G03** Journey audit completeness | **Auditor / Admin** | "Is anything un-auditable? Any security events?" | ⚠️ `security` coverage only | **Compliance tile:** audit-gap / security-event surface (admin-only) |
| **All phases, money & throughput** | **Owner** | "Is the practice healthy this week — A/R, denial rate, first-pass yield, throughput — vs. last week and vs. target?" | ❌ The counts exist but with **no targets and no trends**, so they don't answer the owner's actual question | **Owner scorecard:** 4–6 KPIs each with target + trend + verdict color (this directly answers "is it helpful for decisions") |

**What this table proves:** the dashboard's *coverage* roughly spans the real workflow, but it surfaces **activity counts where each role needs a worklist or a verdict.** Denials is the one area done close to right — and tellingly, it's the area with reasons, tiers, and deadlines (closest to "so what / now what"). **The fix is to make every phase look like the denials area: a number with a target/trend and a click-through to the actual work.**

---

## 6. Recommendations (R1–R6)

**R1 — Adopt a decision hierarchy: "Act / Watch / Context."** Re-rank every widget into three bands. **Act** (top, large, ≤ 5 tiles): things a human must do today, role-filtered, clickable to the work. **Watch** (middle): trends/rates with targets and verdict colors. **Context** (bottom, small/collapsible): raw activity counts. This single change kills most of the "blur."

**R2 — Give every Watch metric a "so what": target + trend + verdict.** No bare numbers. Each KPI shows value, target/threshold, delta vs. prior period, and a red/amber/green verdict. Reuse the denials area as the reference implementation.

**R3 — Make the dashboard role-aware.** Ship default layouts per role (front-desk / MA / provider / biller / denial / owner / admin) mapped to the §5 decisions. A user starts on the view that serves *their* job, then personalizes (the Part II layout engine).

**R4 — Make Act tiles drillable to the worklist.** Every "you must act" number clicks through to the actual records (pending registrations, unsigned encounters, scrub failures, stuck claims, due appeals). Interim: link to the existing list endpoints/pages; long-term: Part II event drill-down.

**R5 — Fix the trust tiers (the kill-shot, plural).** (a) **Immediately** label the **Tier-D** automation widget volatile/per-instance/org-wide; mark **Tier-E** stubs as *Preview / not operational* (or drop from default layout); flag **Tier-C** composites as browser-computed. (b) **Then** persist automation activity to durable, tenant-scoped rows — this *is* the first slice of Part II's `system_events` — and **move Tier-C composites server-side** so they become reproducible/testable/alertable. (c) Add the **provenance badge** (§3) to every widget. (d) Add the missing **`practiceId` filter** to `/api/dashboard/automation-activity`.

**R6 — Validate against the real workflow, continuously.** Wire dashboard assertions into the **DLP chain** (§9): when DLP-A03 creates a registration, the front-desk "pending review" tile must increment; when DLP-D07 signs, the biller charge-review tile must increment; when DLP-G01 posts, the unposted-remit tile must decrement. A dashboard that is *tested against the real day* stops drifting into decoration.

---

## 7. Proposed v2 layout (decisions-first, role-default = biller shown)

```
┌─ ACT — needs a human today ───────────────────────────────────────────────┐
│  [ Charge review: 12 ▸ ]  [ Scrub failures: 3 ▸ ]  [ Stuck claims >7d: 5 ▸ ]│
│  [ Appeals due ≤48h: 4 ▸ ]  [ Unposted ERAs: 2 ▸ ]      (each → worklist)   │
├─ WATCH — is the practice healthy? (target · trend · verdict) ──────────────┤
│  Denial rate 9% ▲ (tgt <7% 🔴)   First-pass 88% ▼ (tgt >92% 🟡)            │
│  A/R >90d $14k ▲ (tgt <$10k 🔴)  Days-in-A/R 38 ▬ (tgt <35 🟡)             │
├─ CONTEXT — activity (collapsible; provenance-badged) ─────────────────────┤
│  Automation runs ⚙volatile  Source coverage 8/8  Recent feed ▸            │
└────────────────────────────────────────────────────────────────────────────┘
```

The same shell renders front-desk (pending registrations / eligibility gaps / TOS copay), provider (my unsigned / my critical results / my overdue orders), and owner (the Watch scorecard, full-width) by swapping which tiles populate Act/Watch per role.

---

## 7b. Click-to-work worklists (founder-confirmed direction, 2026-06-14)

> **⚠ UPDATE (founder, 2026-06-16 — supersedes the "always in-place drawer" decision below):** the in-place **drawer pattern is reserved for *terminal 1-click* tiles only** (e.g. a future "Unposted ERAs → Post", "Acknowledge critical result"). **Substantive** tiles (denials, charge review, etc.) **deep-link** to their work page, where the multi-step judgment work lives. The **Denials drawer prototype** (described below as the model) was **removed 2026-06-16** (commit `84bb7a85a`) — it just funneled the operator to the worklist, so the tile now deep-links to `worklist.html` directly. **No tile carries an in-place drawer today.** Read the drawer narrative below as the *original* P1 design intent; the live behavior and the standing principle are deep-link-first.

**The concept (founder):** clicking certain widgets opens a **worklist grid the user can "work" to clear blockers.** This is the concrete realization of R4 ("now what") and is the single highest-value upgrade — it turns the dashboard from a *report* into a *cockpit*. **UI decision (founder): in-place drawer/modal** — the grid slides open over the dashboard with inline row actions; the user works items without leaving the page, and the tile count updates live.

**The closed-loop pattern (this is what makes it "clearing blockers," not just "viewing a list"):**

```
[ Charge review: 12 ▸ ]  ──click──►  drawer: worklist grid (12 rows, oldest first)
                                       each row has the blocker + an inline action
        ▲                                      │ work a row (Code / Approve / Appeal / Post / Activate)
        └──────── tile shows 11 ◄──────────────┘ action writes to the real table → row drops off → count decrements
```

Three properties are mandatory or it isn't a worklist: (1) **inline action per row** that performs the real state transition; (2) **the row leaves the grid** when its blocker clears; (3) **the tile count decrements** in lockstep (stock-vs-flow reconciliation — the count *is* the grid length).

**Which tiles are workable — and which are not (gated by provenance, §3):** a tile can be "worked" only if it is backed by **real rows with a state the action advances** — i.e. **Tier A**. This is the second reason to fix provenance first (P0): you cannot build a trustworthy worklist on a volatile counter (Tier D), a preview stub (Tier E), or an unauditable browser composite (Tier C).

| Workable "Act" tile (Tier A) | Blocker (row state) | Inline action → clears by | Existing work surface to reuse |
|---|---|---|---|
| Charge review | uncoded / unapproved charge | Code / Approve → claim created | `claim-review.html` |
| Scrub failures | claim `scrub_error` | Fix → resubmit | `claim-review.html` / `edi-queue.html` |
| Denials | open denial | Draft / Submit appeal · Write-off → resolved | `denials.html` / `worklist.html` |
| Stuck claims | submitted, un-acked > N days | Status inquiry / follow-up | `edi-queue.html` |
| A/R aging | aged claim w/ balance | Follow-up note / inquiry | `worklist.html` |
| Unposted ERAs | remit not posted | Post → claim paid | `payments.html` |
| Intake | portal registration pending review | Review → activate | `portal-users.html` |
| Deadlines | appeal / filing due | Act before date | `denials.html` / `worklist.html` |
| (Provider) results / encounters | unacked critical result · unsigned encounter | Acknowledge / Sign | `kanban.html` |

**Not workable:** `automation` (Tier D — a counter, nothing to work), `autopilot`/`payerLearning` (Tier E — no real rows), `sourceCoverage` (Tier C — a coverage indicator). **Special case — `lostWork` ("No-Lost-Work"):** it is a *roll-up* of the workable tiles, so clicking it should **expand into the contributing worklists** (a worklist-of-worklists), not be a flat list. It is conceptually already the front door to this whole flow.

**Architecture fit (no new layers — per the JAC monolith rules):** each worklist needs only (a) a **filtered list endpoint** returning the rows (most already exist behind the work surfaces above) and (b) a **row-action endpoint** for the state transition (also mostly existing — the work pages already do these actions). The drawer is **one reusable client component** (grid + row-action dispatch + optimistic count update) parameterized per tile by `{ listEndpoint, columns, rowActions }`. All endpoints stay in the router, use generated CRUD, and carry `practice_id` scope. The live count-decrement is the same closed-loop the Part II event log formalizes (an action emits an event; the tile re-counts).

**Build path:** the founder-chosen **drawer** is the target for the "Act" tiles; until a tile's drawer exists, it can deep-link to its existing work page (above) as a fallback — so this ships incrementally without a big-bang rewrite.

---

## 8. Hardening roadmap (P0–P3)

| Phase | Goal | Work |
|---|---|---|
| **P0 — Stop the bleeding (trust)** | No widget lies | R5a label Tier-D volatile + Tier-E as Preview + Tier-C as browser-computed · R5c provenance badges on all 19 · R5d add `practiceId` to automation-activity · document each Tier-B derivation |
| **P1 — Make it decide (framing)** | Numbers answer "so what / now what" | R1 Act/Watch/Context bands · R2 target+trend+verdict on Watch · R4 click-to-work **drawer worklists** on Act tiles (§7b — reusable grid component, closed-loop count decrement) |
| **P2 — Make it personal (audience)** | Each role lands on their job | R3 role default layouts (the §5 map) · persist per-user layout (Part II D4) |
| **P3 — Make it durable & real (foundation)** | One trustworthy, drillable source | R5b persist automation → `system_events` seed · converge onto Part II event log · R6 DLP-tested widgets |

P0 is **days** (labeling + badges + docs) and removes the most damaging problem. P1–P2 are the "turn it into a decision tool" core. P3 is the Part II rebuild, now de-risked because P0–P2 already defined *what* the widgets must mean.

---

## 9. Testing & validation gaps (what "hardened" requires)

- **No widget is asserted against a known workflow state.** → R6: add dashboard assertions to the DLP chain at the A03/D07/E01/F03/G01 seams.
- **Tier-C counters have no test that survives a deploy or a 2-instance split.** → after R5b, assert persisted counts are deploy-stable and instance-independent.
- **No role-view test.** → assert each role's default layout renders its §5 Act tiles and *not* another role's.
- **No "so what" test.** → assert Watch tiles render target+delta+verdict, not bare numbers.
- **No drill-down integrity test.** → assert an Act count equals the length of the worklist it links to (the stock-vs-flow reconciliation of Part II §15 item 19).
- **Tier-C composites can't be tested at all** (logic lives in the browser). → after moving them server-side (R5b), unit-test each composite; add a partial-failure test (one input endpoint errors → metric reports degraded, not a wrong number).
- **No tenancy test on automation-activity.** → after R5d, assert two practices in one org see different, correctly-scoped automation numbers.
- **No Tier-E guard.** → assert preview/stub tiles never render as authoritative when their `localStorage` flag is off.

---

## 10. How Part I leads into Part II

Everything above converges on the design already drafted below: an **immutable, tenant-scoped event log** (fixes the Tier-D in-memory counter and lets Tier-C composites become server-side, queryable counts), **drill-down everywhere** (fixes "now what"), **per-user configurable, role-defaulted widgets** (fixes audience), and **targets/trends/thresholds** (fixes "so what"). Part II is the **right destination.**

**Key discovery from verification — the foundation already partially exists.** The `events` and `feed` widgets already read a real **`WORKFLOW_EVENTS` table** via `/api/workflow-events`. That is the embryo of Part II's `system_events`. So P3 is **convergence, not greenfield**: extend the existing event table/emission rather than build a parallel pipeline, and migrate the Tier-C/D/E tiles onto it one at a time. That materially lowers the cost and risk of the Part II rebuild.

**Founder decision (2026-06-14): one log for everything** (§15.1 resolved → *unify*). There is exactly one append-only `system_events` store; every emitter — `WORKFLOW_EVENTS` (the seed), partner/eRx events, business events, data-layer CRUD events, and the HIPAA audit subset — writes to it through the single `emitEvent(...)` helper. No federation. This makes the worklist closed-loop (§7b) clean: a row action emits one event, and every tile that counts it re-counts from the same source of truth.

Part I's contribution is the **sequencing and the acceptance test**: harden trust and framing *first* (P0–P2, mostly on today's data), then converge onto the event log (P3, building on `WORKFLOW_EVENTS`) — and validate the whole thing against the **real DLP clinic day** so the dashboard earns trust by being demonstrably useful at each real decision point, not by having more widgets.

---
---

# PART II — Target-State Design (preserved proposal)

> *The following is the event-sourced dashboard **design proposal** authored by Agent4 on 2026-06-05, preserved verbatim. Part I above is the current-state assessment and the recommended path; this Part II is the convergent target state those recommendations build toward. Its §15 open questions still require founder/architect sign-off.*

## 1. Vision

A single, **event-sourced**, fully **configurable** command dashboard where **every meaningful action in the system is an event** — EDI transmissions and receipts, Kanban movements, registrations, check-ins, encounters, eRx messages, claims, denials, payments, logins, AI runs, autopilot executions — and every event is **logged immutably** so it can be **counted from any point in time, including all of history**.

Three founding properties:

1. **Universal event log** — one append-only record of everything that happens, system-wide, tenant-scoped.
2. **Per-user, resettable stats** — each user has their own counters with their own **baseline**; a user can **completely reset** any counter to start counting fresh, **without affecting anyone else** (events are never deleted — only the user's baseline moves).
3. **Configurable widgets** — each user controls **which widgets are visible and in what order**, and the time window each one counts over.

This replaces the current fixed dashboard (AR aging / trends / top payers / summary) with a living, drillable, real-time event surface.

---

## 2. Why Replace the Existing Dashboard

The current dashboard (`/api/dashboard/summary`, `/ar-aging`, `/trends`, `/top-payers`) is a small set of **hard-coded RCM tiles**, computed on demand from claim/AR tables. Limits:

- Fixed widgets, fixed order, same for every user.
- RCM-only; it cannot show scheduling, clinical, EDI, portal, eRx, Kanban, security, or AI activity.
- No "since I last looked / since I reset" counting; no arbitrary time-window or true historical counting.
- No event-level drill-down ("what are these 14 denials, exactly?").
- Recomputed from live tables, so it can't answer "how many 837s did we transmit between 9am and noon last Tuesday?"

An event-sourced model answers all of these uniformly.

---

## 3. Core Principles

1. **Everything is an event — literally everything.** Every data **create / update / delete**, every **transaction**, every transmission/receipt, every status change, every login, and every count-changing operation emits an event. Nothing in the system mutates data or crosses a boundary without producing a tracked, countable event.
2. **Append-only, immutable.** Events are never updated or deleted; corrections are new events. This is what makes "count from any time, including historical" trivially correct.
3. **One emission point, many consumers.** A shared `emitEvent(...)` helper writes every event; the Kanban auto-promotion (MR3 B1), Autopilot, notifications, **and** this dashboard all consume the same stream.
4. **PHI-light.** Events carry IDs, categories, and scrubbed summaries — not raw PHI. Patient-level drill-down is access-controlled and audited.
5. **Tenant-scoped always.** Every event and every query carries `practice_id` / `org_id`.
6. **Per-user perception, shared truth.** The log is shared and immutable; each user's *view* (counters, baselines, layout) is personal.
7. **Captured at the data layer.** Because PracticeForceOne uses generated JEO/CRUD classes (the JAC monolith pattern), universal data-change events (`<entity>.created` / `.updated` / `.deleted`) are emitted **automatically from the generated CRUD layer** — so *every* table write on *every* entity is tracked without hand-instrumenting each endpoint. This is the guarantee that "everything is tracked, nothing is missed."

---

## 4. The Universal Event Model

### 4.1 Event record schema (`system_events`)

Append-only table (proposed). One row per event.

| Field | Type | Notes |
|---|---|---|
| `event_id` | UUID PK | |
| `event_seq` | BIGINT (monotonic) | global ordering / cursor for "count since" |
| `event_time` | TIMESTAMPTZ | when it happened |
| `org_id`, `practice_id` | UUID | tenant scope (indexed) |
| `actor_user_id` | UUID null | who caused it (null = system/partner) |
| `actor_role` | VARCHAR | front_desk / clinical / provider / coding / billing / denial / admin / system |
| `event_type` | VARCHAR | dotted, e.g. `claim.submitted`, `edi.835.received`, `kanban.card.promoted` |
| `event_category` | VARCHAR | scheduling / registration / clinical / erx / coding / edi / rcm / denial / kanban / payment / admin / security / ai / autopilot |
| `source_type` | VARCHAR | appointment / encounter / claim / denial / portal_user / erx_prescription / kanban_card … |
| `source_id` | VARCHAR | the record id (for drill-down) |
| `patient_id` | UUID null | for patient-scoped counts (access-controlled) |
| `correlation_id` | VARCHAR null | ties a workflow chain (e.g. an EDI exchange) |
| `direction` | VARCHAR null | inbound / outbound (EDI, eRx, partner) |
| `summary` | TEXT | short, scrubbed, human-readable |
| `metadata` | JSONB | scrubbed structured detail (amounts, codes, lane from→to) |
| `success` | BOOLEAN | |
| `severity` | VARCHAR | info / warning / critical |
| `contains_phi` | BOOLEAN | governs drill-down access |
| `created_at` | TIMESTAMPTZ | ingest time |

Indexes: `(practice_id, event_time)`, `(practice_id, event_type, event_time)`, `(practice_id, event_category, event_time)`, `(practice_id, actor_user_id, event_time)`, `(patient_id, event_time)`, `event_seq`.

### 4.2 Sources to unify

PracticeForceOne already emits event-like data in several places. The dashboard unifies them behind one log (see §15 for "unify vs federate"):

- `audit_log` (HIPAA audit — e.g. `appointment_cancelled`, PHI access)
- Router **business events** (`logBusinessEvent`)
- `external_partner_events` + `partner_callback_queue` (EDI / eRx / partner)
- `erx_messages` (NewRx/CancelRx/responses)
- **MR3 source-record event bus** (F0.1) — Kanban state transitions, review attestations (B12)
- EDI/claim transaction queue (837/835/270/271/276/277/278/999)
- **Staging seed population** — emits seeded, back-dated historical events so demo clinics aren't empty (see §12.1)

### 4.3 Event Taxonomy — the deep dive (what gets logged)

Representative, not exhaustive; the registry (§15) governs additions. **Everything below becomes a countable, displayable event.**

| Category | Event types (examples) |
|---|---|
| **Scheduling** | `appointment.created` · `appointment.rescheduled` · `appointment.cancelled` · `appointment.no_show` · `appointment.arrived` · `appointment.checked_in` · `slot.booked` · `waitlist.added` · `waitlist.offer_sent` · `waitlist.filled` · `recall.generated` · `eligibility.checked_at_booking` |
| **Registration / Patient** | `patient.created` · `patient.updated` · `portal.registration.submitted` · `portal.registration.reviewed` · `portal.user.created` · `portal.email.verified` · `chart.created` · `chart.linked` · `insurance.added` · `insurance.verified` · `insurance.updated` · `card.uploaded` |
| **Portal / Check-in** | `portal.checkin.submitted` · `portal.checkin.reviewed` · `dynamic_form.submitted` · `medication.entered` · `allergy.entered` · `consent.signed` · `kiosk.code.generated` |
| **Clinical / Encounter** | `encounter.created` · `rooming.started` · `intake.completed` · `encounter.signed` · `encounter.undo_signed` · `encounter.corrected` · `encounter.superseded` · `clinical_task.created` · `clinical_task.completed` · `order.placed` · `result.received` · `result.acknowledged` |
| **eRx** | `erx.newrx.transmitted` · `erx.newrx.accepted` · `erx.cancelrx.transmitted` · `erx.refill.requested` · `erx.rxchange.received` · `erx.fill_status.received` · `erx.epcs.blocked` · `erx.pharmacy.queried` |
| **Coding / Charge** | `charge_review.created` · `charge.coded` · `charge.approved` · `charge.optimized` · `ncci.edit.flagged` · `mue.edit.flagged` · `medical_necessity.flagged` |
| **EDI / Claims** | `claim.created` · `claim.scrubbed` · `claim.submitted` · `edi.837.transmitted` · `edi.999.received` · `edi.277ca.received` · `edi.835.received` · `payment.posted` · `eligibility.270.sent` · `eligibility.271.received` · `claim.276.sent` · `claim.277.received` · `auth.278.sent` |
| **Denials / A-R** | `denial.received` · `denial.reasoned` · `appeal.drafted` · `appeal.submitted` · `appeal.status_changed` · `denial.resolved` · `denial.written_off` · `ar.followup_note` · `ar.status_inquiry_sent` |
| **Kanban / Workflow** | `kanban.card.created` · `kanban.card.promoted` (lane from→to) · `kanban.card.reverted` · `kanban.card.blocked` · `kanban.card.unblocked` · `kanban.card.assigned` · `kanban.review.recorded` (B12) · `kanban.autopilot.run` |
| **Payments / Balance** | `statement.sent` · `patient_payment.received` · `balance.updated` · `refund.issued` |
| **Admin / Config** | `user.created` · `user.role_changed` · `practice.created` · `feature_flag.changed` · `rule.created` · `rule.applied` · `staging.seed_run` · `staging.reset` · `script_builder.run` |
| **Security / Audit** | `auth.login` · `auth.logout` · `auth.failed` · `phi.accessed` · `break_the_glass` · `password.changed` · `mfa.enrolled` · `session.idle_timeout` |
| **AI** | `ai.denial_score.generated` · `ai.appeal.generated` · `ai.coding.suggested` · `ai.copilot.query` · `ai.reasoner.run` |
| **Autopilot (MR3)** | `autopilot.plan.created` · `autopilot.executed` · `autopilot.confirmed` · `autopilot.reverted` |
| **Data layer (universal CRUD & transactions)** | `<entity>.created` · `<entity>.updated` · `<entity>.deleted` for **every** table (patient, appointment, claim, insurance, encounter, charge, payment, rule, user, …) · `db.transaction.committed` · optional field-level `<entity>.field_changed` (§15) — **auto-emitted from the generated CRUD layer** so no write is untracked |

---

## 5. Per-User Stats & Resettable Counters

The key requirement: **each user can completely reset any event count**, and counting can start **from any chosen time, including all history**.

### 5.1 Model (`user_dashboard_counters`)

| Field | Notes |
|---|---|
| `user_id` | owner |
| `scope_key` | what is counted: an `event_type`, a `event_category`, or a widget id |
| `baseline_at` | the "count since" timestamp (default: account creation / epoch for "all history") |
| `baseline_seq` | optional `event_seq` cursor for exact, gap-free counting |
| `reset_at`, `reset_by` | audit of the last reset |
| `label` | optional user label |

### 5.2 Semantics

- **Displayed count** for a widget = `COUNT(events WHERE practice scope AND filter AND event_time >= baseline_at)` (or `event_seq > baseline_seq`).
- **Reset** = set `baseline_at = now()` (or a user-chosen timestamp) → the count restarts at 0. **No events are deleted.**
- **Count from any time / historical** = the counting engine accepts an explicit `from`/`to`; the per-user baseline is just that widget's default `from`. Historical totals query the full log; "all time" uses the epoch baseline.
- **Per-user isolation** — because reset only moves *that user's* baseline, two users watching the same event type can have different "since reset" counts over the same shared, immutable log.
- **Undo-able reset** — keep prior baselines (history of resets) so a reset can be reverted (open question §15).

---

## 6. Counting & Aggregation Engine

- **Live counts** — direct queries against `system_events` for recent windows (indexed by practice + time).
- **Rollups** — pre-aggregated `event_rollups` (per `practice_id`, `event_type`, hour/day) for fast historical and trend queries at scale; live tail + rollup union for "today."
- **Time windows** — every widget supports: since-my-reset · today · last 24h · 7d · 30d · custom range · all time · vs prior period (delta).
- **Drill-down** — any count is clickable → the underlying event list → the source record (claim, denial, appointment, card…). This is the "what are these exactly?" answer the old dashboard lacks.
- **Distinct vs occurrence counting** — widgets can count events (occurrences) or distinct entities (e.g. distinct claims) — see §15.

---

## 7. Widget Framework

### 7.1 Configuration (`user_dashboard_layout`)

| Field | Notes |
|---|---|
| `user_id` | |
| `widget_id` | catalog id |
| `visible` | show/hide (per requirement) |
| `position` | order (per requirement) |
| `size` | sm / md / lg / full |
| `config_json` | event filter, time window, target/threshold, chart type |

- **Default layout per role** (front desk vs biller vs provider vs admin), overridable per user.
- Persisted server-side so it follows the user across devices.

### 7.2 Widget catalog

Widgets cover both **flow** (events over time — transmissions, updates, movements, deletes) and **stock** (current totals — how many patients, open claims, active denials *right now*). "Everything" means both.

- **Stat / Counter (flow)** — a single number of events (e.g. "837s transmitted since reset," "records updated today") with reset button + delta.
- **Data count (stock)** — a current total of any entity (patients, active claims, open denials, today's appointments) with delta vs a prior point — derived from the event log (`created` − `deleted`) or a live entity count.
- **Trend line** — events over time.
- **Bar / stacked bar** — composition (e.g. claims by status; the fixed Reviewer-Progress concept generalized).
- **Rate** — derived metrics (denial rate, first-pass yield, no-show rate, review-completion rate).
- **Funnel** — patient → scheduled → arrived → documented → coded → claimed → paid.
- **Aging** — buckets (A/R aging, blocker aging, denial aging).
- **Live feed** — real-time scrolling event stream (filterable).
- **Leaderboard / Top-N** — by user, payer, CARC code, provider, lane.
- **Heatmap** — activity by hour/day (e.g. when denials arrive).
- **Gauge / SLA** — against a target with thresholds + alerting.
- **Comparison** — this period vs prior.

Every widget binds to an **event filter** (category/type/actor/direction/patient/payer) + a **time window**, so the catalog is small but infinitely composable.

---

## 8. Dashboard UX (the "revolutionary" part)

- **Drag-and-drop** reorder; toggle visibility; resize — the user composes their own command surface.
- **Real-time** — widgets update as events arrive (SSE/WebSocket or short-poll; see §15).
- **Per-widget reset** — a visible "Reset count" control with "since <time>" framing, plus "counting since you reset on <date>."
- **Drill-down everywhere** — click any number → event list → record.
- **Multiple saved dashboards / views** (e.g. "My morning front-desk view," "Billing close view").
- **Thresholds & alerts** — a widget can flag/notify when a count or rate crosses a target (ties MR3 notifications B3/B4).
- **Responsive + tablet**, dark/light.
- **Role-aware defaults** so a new user starts useful, then personalizes.

---

## 9. Architecture & Data Flow

```
 action in router/UI ──► emitEvent(type, category, source, actor, summary, meta, phi)
                               │  (single shared helper; scrubs PHI)
                               ▼
                         system_events  (append-only, tenant-scoped)
                          │            │
             rollup jobs ─┘            └─► live consumers:
             (event_rollups)               • Kanban auto-promotion (MR3 B1)
                          │                • Autopilot triggers (MR3 H)
                          ▼                • Notifications (MR3 B3/B4)
            counting engine (live + rollup) • this Dashboard
                          │
                          ▼
        widgets  ◄── user_dashboard_layout (visibility/order/config)
                 ◄── user_dashboard_counters (baselines/resets)
```

- Reuse the **MR3 event bus emission point** (F0.1) so Kanban automation and the dashboard share one source of truth — do not build a parallel pipeline.
- Architecture rules hold: emit from the router (no new endpoint layers); persist via generated CRUD or approved direct SQL for the append-only log/rollups; tenant scope everywhere.

---

## 10. Performance & Scale

- Append-only writes are cheap; the cost is read aggregation → solved by `event_rollups` + indexes.
- Hot path widgets read rollups for history + a small live tail.
- Retention policy for raw events vs rollups (open question §15) — e.g. keep raw 13–25 months, rollups indefinitely.
- Event volume estimate needed (events/visit, visits/day) to size storage (§15).

---

## 11. Security, Tenancy & PHI

- **PHI-light events** — store IDs + scrubbed summaries; `contains_phi` gates drill-down.
- **Tenant scope** on every event and query (`practice_id`/`org_id`).
- **Role-based widget access** — security/audit events visible to admins only; clinical drill-down respects chart access.
- The event log is itself **auditable** and complements (does not replace) the HIPAA `audit_log` — see §15 on their relationship.

---

## 12. Migration From the Existing Dashboard

1. Stand up `system_events` + `emitEvent` and wire emitters across the router (incrementally by category).
2. **Backfill** historical rollups from existing tables (`audit_log`, claims, denials, `external_partner_events`, `erx_messages`) so day-one history isn't empty.
3. Re-create the current tiles (AR aging, trends, top payers, summary) as default widgets so nothing is lost.
4. Ship the new dashboard behind a flag; switch the default; retire `dashboard.html`.

### 12.1 Staging-Driven Event Population (the seed sets the event tracking)

**Requirement:** populating staging/demo data must also populate the event log, so a freshly seeded clinic shows realistic history — counts, trends, aging, leaderboards — instead of an empty dashboard.

- The staging seed (`staging-seed-data.json` → promote/seed) **emits the corresponding lifecycle events** for every seeded entity (patient, registration, appointment incl. cancelled/no-show, encounter, charge, claim, EDI 837/835/270/271, denial, appeal, payment, eRx message, Kanban movement) through the same shared `emitEvent` helper — never a separate path.
- Seeded events carry **realistic, back-dated timestamps** spread across a configurable historical window (e.g. last 90 days), weighted to business hours/weekdays, so trend/heatmap/aging widgets look real on day one.
- The seed defines an **event-tracking profile**: historical window, time distribution, per-category volume mix, and success/failure rates — making demos tunable and reproducible.
- **Reset/clear parity:** seeded events are tagged `metadata.seeded = true`. When staging clears/resets a practice, it purges that practice's seeded events (tenant-scoped) **without touching real events**, so demo resets are clean and seeded vs. live activity stay distinguishable and separately countable.
- This is the demo-data equivalent of historical **backfill** (§12 step 2): seeded events give "all-time" and historical counts substance immediately, and let the per-user reset (§5) be demonstrated against a populated baseline.
- **Owner alignment:** staging/seed is Agent3's lane; the seeder calls the shared event emitter rather than writing events itself.

---

## 13. Relationship to MR3

This dashboard **rides the MR3 event bus** (F0.1) rather than duplicating it, and surfaces the same events that drive **Kanban auto-promotion (B1)**, **notifications (B3/B4)**, **review attestations (B12)**, and **Autopilot (Pillar H)**. Recommended: treat the universal event log as a **shared MR3 foundation** and the dashboard as a consumer. See §15 on whether this is its own release or an MR3 pillar.

---

## 14. Implementation Phases

| Phase | Deliverable |
|---|---|
| D1 | `system_events` log + shared `emitEvent` helper + PHI scrub; emit for top categories (EDI, Kanban, scheduling, registration) |
| D2 | Backfill rollups from existing tables; `event_rollups` + counting engine (live + rollup, time windows) |
| D3 | Per-user counters + reset (`user_dashboard_counters`); historical + "since reset" counting |
| D4 | Widget framework + `user_dashboard_layout` (visibility/order/size/config) + role defaults |
| D5 | Revolutionary UX: drag/drop, real-time feed, drill-down, thresholds/alerts, saved views |
| D6 | Re-create existing tiles as widgets; flag-flip default; retire old dashboard |

---

## 15. Issues / Open Questions To Be Addressed

> These need founder/architect decisions before/while building.

> **✅ FOUNDER DECISION (2026-06-14): ONE LOG FOR EVERYTHING.** Resolves item 1 below in favor of **unify** — a single append-only `system_events` store that *every* emitter writes to through the one shared `emitEvent(...)` helper. No federation/union over separate tables. The existing `WORKFLOW_EVENTS` table is the seed and converges into this single log; `external_partner_events`, `erx_messages`, business events, and the data-layer CRUD events all land in it. This also steers item 2: `audit_log` becomes a **subset/view of the one log** (the single log is the system-of-record), *provided* it preserves the HIPAA properties the design already mandates — append-only, immutable, tamper-evident, tenant-scoped, retained — and PHI-access events (`phi.accessed`) are first-class. Compliance must not regress; that is the one thing to verify when folding audit into the single log (item 2).

1. ~~**Unify vs federate.**~~ **RESOLVED → UNIFY (one log for everything).** A single `system_events` table all emitters write to. (Federation rejected.)
2. **Relationship to `audit_log`** *(narrowed by the one-log decision).* `audit_log` folds into the single `system_events` log as the audit subset. Remaining item to confirm: that the single log meets every HIPAA audit obligation (immutability/tamper-evidence, required fields, retention) so consolidating does not weaken compliance — and whether any regulator-facing export must still present an "audit-log-shaped" view.
3. **PHI policy in events.** Exactly what may appear in `summary`/`metadata`? Confirm scrub rules; confirm patient-level drill-down access model (and that drill-down itself emits a `phi.accessed` event).
4. **Reset semantics.** Reset to **now** only, or to a **user-chosen** timestamp? Are resets **undo-able** (keep baseline history)? Can a user reset **per event type**, **per category**, **per widget**, or all three?
5. **"Count from any time, including historical" fidelity.** Historical counts depend on **backfill accuracy** from legacy tables — which categories can be reconstructed reliably, and which only start counting from go-live?
6. **Real-time transport on Cloud Run.** SSE / WebSocket / short-poll? Cloud Run request/timeout and connection limits affect this choice.
7. **Event volume & retention.** Estimated events per visit/day → storage sizing. Raw-event retention window vs rollup retention? Archival?
8. **Counting definition.** Default to counting **occurrences** (events) or **distinct entities** (e.g. distinct claims)? Per-widget toggle?
9. **Multi-practice / org scope.** For users spanning practices, do counters aggregate across practices, or one dashboard per practice? Cross-practice benchmarking widget?
10. **Role-based event visibility.** Which roles may see which event categories (esp. security/audit, financial, clinical)? Default layouts per role?
11. **Taxonomy governance.** Who owns the `event_type` registry? Naming convention enforcement so new emitters stay consistent?
12. **Release placement.** Is this its **own release**, or **MR3 Pillar I** (built on the F0.1 event bus)? Ownership across Agent1/2/3?
13. **Backfill cost.** Effort/feasibility of reconstructing historical rollups from current tables vs starting history at go-live.
14. **Performance targets.** Acceptable widget load latency at scale; rollup refresh cadence (real-time vs minutes).
15. **Alerting scope.** Do widget thresholds notify (tie to MR3 B3/B4), and through which channels?
16. **Default vs personalized.** Do admins set/lock certain widgets for all users, or is everything user-configurable?
17. **Seeded-event realism & isolation.** What historical window and time-distribution should staging-seeded events use (§12.1)? Confirm `metadata.seeded = true` tagging so seeded vs. real events are distinguishable, countable separately, and purged on staging reset without touching real events.
18. **Universal-CRUD volume & granularity.** Auto-emitting an event on every create/update/delete (Principle 7) is high volume — confirm acceptable write/storage cost, whether **field-level** change tracking is in scope or only record-level, and whether **read/view** access is tracked or only mutations.
19. **Stock vs flow reconciliation.** For "current count" (stock) widgets, derive totals from the event log (`created` − `deleted`) or query live entity tables — and how do we reconcile the two so a stock widget never drifts from the source table?

---

## 16. Appendix — Design Summary

- **One immutable, tenant-scoped event log** captures everything; **per-user baselines** make counts personal and resettable; **configurable widgets** (visibility + order) let each user build their own real-time command surface; the dashboard **counts from any time, including all history**, with drill-down to the source record — and it **rides the MR3 event bus** rather than duplicating it.

*Part II design proposal — resolve §15 before/while building. — Agent4, 2026-06-05*

---

*Part I assessment authored 2026-06-14 by AgentDashboard; widget inventory (§1/§3) verified widget-by-widget against `dashboard.html` + `DashboardRoutes.script` + `DashboardAutomationActivityRoutes.script` + `DashboardWorkflowSummaryRoutes.script`. Verdict: solid 11-widget table-backed core, but **8 of 19 tiles carry a hidden trust asterisk** across four non-A provenance tiers (1 volatile in-memory, 3 preview stubs, 5 unauditable browser composites) with no visual cue — the mechanical cause of the founder's "blur." Fixable via P0–P3 (P0 is honesty/labeling, days of work) without waiting for the full Part II rebuild, which is now **convergence onto the already-existing `WORKFLOW_EVENTS` table**, not greenfield. Validated against the real DLP clinic day. Part II preserved as the convergent target state.*

---

## Review Epilog — 2026-06-23

Reviewed 2026-06-23 as part of a full PracticeForceOne wiki truth-pass. Status: UPDATED.

- Classified as **reference** (a point-in-time deep-dive assessment + preserved event-sourced target-state design). Verified the doc against repo evidence: the platform framing (Cloud Run, multi-instance, deploy-reset counters) is accurate; all sibling-doc links resolve; links already use relative `[Page](Page.md)` form (no `[[wikilinks]]` to fix); the referenced commit `84bb7a85a` (Denials drawer removal) is real.
- The assessment is a **2026-06-14 snapshot** and is correctly dated as such, but several of its present-tense problem statements have since been resolved and a reader today could mistake them for current state. Added a top-of-doc "POINT-IN-TIME NOTICE" pointing to current truth: the §4 "kill-shot" in-memory automation counter is **fixed** (`DashboardAutomationActivityRoutes.script` now reads the durable, tenant-scoped `source_record_events` table per D8.3/D4.1 — verified in source: tallies derive from `event_type` + SUM(`event_payload.count`), deploy-stable, practice-scoped); provenance badges (R5c) are live; Tier-D/E tiles are labeled; the click-to-work drawer was removed in favor of deep-link; and the Appendix-A invariant gate is GREEN (tile counts == kanban cards, live build ~2015). Body of the dated assessment left intact as the original analysis of record.
- No fabricated build numbers introduced; the only build reference added (~2015, Appendix-A invariant green) is corroborated by [PracticeForceOneDashboardTable.md](PracticeForceOneDashboardTable.html) and memory. Nothing requires founder attention.

## Review Epilog — 2026-07-24

- Live build is now **1943** (gate 251/251 GREEN); the Appendix-A invariant remains GREEN — dashboard tile counts == kanban card counts confirmed.
- C1 operational exactness (19/19 exactness, 14/14 bands) remains complete and LIVE since build 1683; C4/D4.1 durable automation counters are still the open workstream.
- The Platform Architecture North Star (FOUNDER 2026-07-19) reinforces this doc's direction: the Dashboard is a generic Runtime Engine reading Definitions; domain-specific counts belong in Business Services, not hardcoded in the dashboard renderer.
- MR status update: MR2–MR7 DELIVERED; MR8/MR9/MR10 active. August demo path (CF-14 gate) PASSES on build 1943.
