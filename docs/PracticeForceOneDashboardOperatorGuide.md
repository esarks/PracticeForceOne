---
title: "PracticeForceOneDashboardOperatorGuide"
---

# PracticeForceOne™ Operator & Test Guide

**Last reviewed: 2026-07-24**

**Audience:** anyone **operating** or **testing** PracticeForceOne — front desk, MA, provider, biller, denial specialist, admin, owner, QA.
**Scope:** the command dashboard **plus every operator-facing workflow** — the full clinic spine (registration → A/R) and the off-spine workflows. This is the practical "how do I drive it, and exactly how do I test it" manual, page by page, with the real on-screen labels, endpoints, and error contracts.
**Companions:** [PracticeForceOneWorkflowProof.md](PracticeForceOneWorkflowProof.md) (**the end-to-end PROOF the full cycle functions** — registration→payment→denials, via the DLP chain, with the dashboard as witness) · [PracticeForceOneDLPStepByStep.md](PracticeForceOneDLPStepByStep.md) (**every step of every DLP journey + what you see on screen** when you run it) · [PracticeForceOneDashboard.md](PracticeForceOneDashboard.html) (dashboard *assessment*) · [PracticeForceOneMR5ScenariosInventory.md](PracticeForceOneMR5ScenariosInventory.md) (the DLP scenario IDs) · [runbooks/README.md](<runbooks/README.md>) (the tester's-desk runbooks) · [RB-561](<runbooks/RB-561-dashboard-smoke-test.md>) (dashboard smoke test).
**Authored:** 2026-06-14 · AgentDashboard · verified against `ui/public/*.html`, `util/*Routes.script`, the router, and the DLP scenario inventory.

---

## How to read this guide

> **Two desks, one book.**
> - **Operators** — jump to your workflow chapter (§5 A–I). Each page subsection has a **step-by-step operate flow** in the actual on-screen labels.
> - **Testers** — read §7 (the contracts that look like bugs but aren't) and §8 (how to test), then follow the per-page **Test** lines and the runbooks. The branch workflows (§6) are the off-happy-path forks.
> - **Everyone** — read §1–§4 first (access, the common pattern, and the dashboard).

A few conventions used throughout:

- **Labels in bold quotes** (e.g. **"Create Account"**, **"Sign"**) are the literal button/field/tab text on screen.
- **Endpoints** are given as `METHOD /path` with the key request-body fields. Standard success envelope is `{ "success": true, "data": {...} }`; standard error envelope is `{ "success": false, "error": { "code": "...", "message": "..." } }`.
- **Test** lines name the DLP scenario IDs (A01…H06) and/or the runbook that exercises the page.
- Every read and write is **tenant-scoped** to the selected practice/org. You only ever see and act on the selected practice's data; a cross-practice leak is a bug, not a feature.

### Table of contents

1. [Access, roles, and the page map](#1-access-roles-and-the-page-map)
2. [How to operate any workflow](#2-how-to-operate-any-workflow-the-common-pattern)
3. [The Dashboard](#3-the-dashboard-the-command-surface)
4. [The clinic spine at a glance](#4-the-clinic-spine-at-a-glance)
5. [Deep per-workflow chapters](#5-deep-per-workflow-chapters)
   - [A. Registration, Intake & Portal onboarding](#chapter-a--registration-intake--portal-onboarding)
   - [B. Insurance, Eligibility & Scheduling](#chapter-b--insurance-eligibility--scheduling)
   - [C. Check-in & Copay](#chapter-c--check-in--copay)
   - [D. Clinical encounter + chart + prior auth](#chapter-d--clinical-encounter--chart--prior-auth)
   - [E. Coding & Claim](#chapter-e--coding--claim)
   - [F. Clearinghouse & EDI](#chapter-f--clearinghouse--edi)
   - [G. Posting, Statements, Balance & A/R](#chapter-g--posting-statements-balance--ar)
   - [H. Denials & Appeals](#chapter-h--denials--appeals)
   - [I. Off-spine workflows](#chapter-i--off-spine-workflows)
6. [Branch workflows H01–H06](#6-branch-workflows-h01h06)
7. [Operator-time contracts reference](#7-operator-time-contracts-reference)
8. [Testing the workflows](#8-testing-the-workflows-the-testers-desk)
9. [Known issues / expected behavior](#9-known-issues--expected-behavior)
10. [Reporting a real bug](#10-reporting-a-real-bug)

---

## 1. Access, roles, and the page map

1. **Open** the app (prod `https://claimsprocessing-api-jlf45pqlma-uc.a.run.app/ui/`), **log in** at `/ui/login.html` (a page redirects there if you have no token). Patients use the separate **portal** at `/portal/login.html`.
2. **Pick the practice** in the top selector — almost everything is scoped to the selected practice/org. Switching it reloads data.
3. **Sidebar** navigates between workflow pages; the **Kanban board** (`/ui/kanban.html`) is the cross-workflow "what needs doing" hub.

Staff JWTs default to an 8-hour expiry; patient portal session tokens to 2 hours. A `401` mid-session usually means the token expired — re-login and you're back (save work every few minutes).

**Roles → their primary pages:**

| Role | Primary pages |
|---|---|
| **Front desk** | `patients.html`, `eligibility-queue.html`, `eligibility.html`, `check-patient-insurance.html`, `verify-insurance.html`, `practice-ehr-calendar.html`, `kanban.html`, `payments.html` |
| **MA** | `kanban.html`, `practice-ehr-encounter.html`, `patient-chart.html`, `practice-ehr-calendar.html` |
| **Provider** | `practice-ehr-encounter.html`, `patient-chart.html`, `authorizations.html`, eRx (in encounter) |
| **Biller** | `practice-ehr-charge-review.html`, `claims.html`, `edi-queue.html`, `remittance.html`, `statements.html`, `ar-followup.html`, `charge-optimization.html` |
| **Denial specialist** | `worklist.html`, `denials.html`, `appeals.html`, `ai-features.html`, dashboard Denials tile (→ worklist) |
| **Admin** | `portal-users.html`, `users.html`, `rules.html`, `dynamic-forms.html`, `audit.html`, `staging.html`, `settings.html` |
| **Owner / billing manager** | `dashboard.html`, `reports.html`, `practices.html`, `organizations.html` |
| **Patient (portal)** | `/portal/register.html`, `/portal/confirm-email.html`, `/portal/login.html`, `/portal/check-in.html` |

---

## 2. How to operate any workflow (the common pattern)

Every workflow follows the same shape, so once you know one you know all:

1. **Select the practice**, open the workflow's page (table above).
2. **The page is a work surface** — a list/queue you filter, plus actions per row.
3. **An action writes to the database** (real CRUD) and usually **changes a status**, which moves the item out of its queue and into the next one.
4. **The Kanban board reflects the cross-workflow state** — a blocked item shows *why* it's blocked (the **"WHY BLOCKED"** panel) and the fix checklist; clearing the blocker advances the card.
5. **Watch for the contract** — many actions enforce a rule (empty sign → 422, double-book → 409, etc.); §7 is the full list.

---

## 3. The Dashboard (the command surface)

`/ui/dashboard.html` — the cross-workflow overview and, increasingly, a place to *work* items directly.

### 3.1 Controls (top bar)

| Control | What it does |
|---|---|
| **Practice selector** | Scopes all tiles to one practice (switch to verify tenant isolation) |
| **Configure** | Show/hide each of the 19 tiles |
| **Drag a tile** | Reorder; layout persists per browser (`localStorage` `pfo.eventDashboard.*`) |
| **Time window / Category / Search** | Filter the event-driven tiles (Events / Feed / Source Coverage) |
| **Reset counters** | Restart your "since I reset" event baselines (does **not** delete data) |
| **Saved views** | Save/recall a tile layout (e.g. "Billing view") |

### 3.2 Every widget explained — what it shows, what you do with it, how it clears work

This is the per-widget reference. For each tile: **Shows** (the number) · **How it works** (source) · **Action it should drive** (the decision) · **Act here?** (can you clear it from the dashboard today, or must you drill out) · **Keeps work moving by** (the workflow value). The honest scoreboard of which tiles actually move work today is at the end (§3.2.6).

> The mental model: a dashboard tile earns its place only if it makes someone **do something**. So each widget below is judged on *the action it drives*, not the number it prints. Where a tile drives no action today, it says so.

#### 3.2.1 Work-clearing tiles (the "Act" set — open work you knock down)

**Denials** 🟢
- **Shows:** open denied count + rate + "won."
- **How it works:** live from the `DENIALS` table (`/api/denials`).
- **Action it should drive:** work each denial — appeal it, mark it won, or write it off.
- **Act here?** ↪ **Deep-link** → `worklist.html` (open denials). The tile sends you to the denials worklist, where the real appeal work lives; you work the denial there (§3.4). *(An in-place drawer prototype lived here until 2026-06-16; it was removed — see §3.4.)*
- **Keeps work moving by:** routing denied dollars straight to the worklist that recovers or closes them, instead of letting them age.

**Deadlines** 🟢
- **Shows:** appeals/timely-filing deadlines approaching (≤14d) or overdue.
- **How it works:** `REPORTS` (timely-filing) + `DENIALS` appeal dates.
- **Action it should drive:** file/appeal **before** the date — miss it and the money is gone permanently.
- **Act here?** ⛏ **Drill** → `worklist.html` / `denials.html`.
- **Keeps work moving by:** making time-critical losses impossible to miss.

**Intake** 🟢
- **Shows:** portal registrations pending staff review.
- **How it works:** `PORTAL_USERS` (`/api/admin/portal-users`).
- **Action it should drive:** review → create patient + link chart → activate (so the patient can be scheduled/seen).
- **Act here?** ⛏ **Drill** → `portal-users.html`.
- **Keeps work moving by:** clearing the front-door bottleneck — new patients don't get stuck before they can be booked.

**Unread (notifications)** 🟢
- **Shows:** unread notifications, incl. **critical**.
- **How it works:** `NOTIFICATIONS` (`/api/notifications?unreadOnly=true`).
- **Action it should drive:** acknowledge critical results (releases to patient — patient-safety), complete tasks.
- **Act here?** ⛏ **Drill** → notifications.
- **Keeps work moving by:** surfacing the things a human must see *now* before they become incidents.

**Risk Rails** 🟢
- **Shows:** claims flagged not-ready (E2 eligibility, E3 auth, E4 coding/NCCI/MUE).
- **How it works:** `CLAIMS` claim-review readiness (`/api/workflow/claim-review`).
- **Action it should drive:** fix the flagged claim **before** submit (verify eligibility, attach auth, fix coding).
- **Act here?** ⛏ **Drill** → `claim-review.html`.
- **Keeps work moving by:** stopping denials before they happen — fix once now vs. appeal later.

**Denial Risk Tiers** 🟢
- **Shows:** claims bucketed by preventable-denial risk (critical/high/med/low) pre-submission.
- **How it works:** `CLAIMS` risk score.
- **Action it should drive:** work the critical/high claims first to de-risk them before they go out.
- **Act here?** ⛏ **Drill** → `claim-review.html`.
- **Keeps work moving by:** prioritizing the claims most likely to bounce, so prevention effort goes where it pays.

**Revenue Cycle (pipeline)** 🟢
- **Shows:** claim counts by status (draft / scrub_error / submitted / accepted / paid / denied).
- **How it works:** `CLAIMS` status distribution (`/api/claims`).
- **Action it should drive:** clear the *stuck* bucket — fix scrub errors, chase un-acked submits, post accepted-not-paid.
- **Act here?** ⛏ **Drill** → `claims.html` / `edi-queue.html` / `remittance.html` per bucket.
- **Keeps work moving by:** showing where cash is jammed mid-cycle so you unjam it.

**A/R (aging)** 🟢
- **Shows:** open balance by age bucket (0-30 … 121+).
- **How it works:** `CLAIMS` balances, live day calc.
- **Action it should drive:** work the old buckets — status inquiry, rebill, statement, or write-off.
- **Act here?** ⛏ **Drill** → `ar-followup.html`.
- **Keeps work moving by:** keeping receivables from aging into timely-filing loss.

**Action Items** 🟡
- **Shows:** cross-workflow to-do counts (scrub errors, claim-review, EDI, eligibility, A/R, denials, registrations).
- **How it works:** `/api/dashboard/workflow-summary` + composed in the browser.
- **Action it should drive:** pick the biggest queue and work it.
- **Act here?** ⛏ **Drill** → each item links to its work page.
- **Keeps work moving by:** a single "what needs doing" roll-up across the whole practice.

**No-Lost-Work** 🟡
- **Shows:** composite "work at risk of slipping" (blocked claims + A/R 90+ + unread + pending registrations + stale events + deadlines).
- **How it works:** computed in the browser from ~5 endpoints.
- **Action it should drive:** drill into whichever contributor is climbing.
- **Act here?** ⛏ **Drill** into the contributing worklists (it's a roll-up of the tiles above).
- **Keeps work moving by:** a safety net so nothing falls through the cracks unnoticed.

#### 3.2.2 Health / scorecard tiles (watch — they tell you *if* you're winning)

**Practice KPIs** 🟢/🅑
- **Shows:** denial rate, first-pass yield, days-in-A/R, charge/balance summary.
- **How it works:** `CLAIMS` (+ A/R).
- **Action it should drive:** if a KPI is off-target/trending wrong, find the driver and fix the process.
- **Act here?** 🔎 **Analyze** → `reports.html` for the by-payer/provider/code breakdown.
- **Keeps work moving by:** the headline health read — tells you *whether* the work is actually paying off (needs target+trend to be useful — see assessment R2).

**Top Denial Reasons** 🟢
- **Shows:** top CARC codes by count/$.
- **How it works:** `DENIALS` aggregated by CARC.
- **Action it should drive:** a *systemic* fix — a dominant CARC means an upstream workflow is failing for many claims (e.g. CO-197 = auth not captured).
- **Act here?** 🔧 **Process fix** (encode a payer rule, tighten eligibility/auth capture) — not a single-claim action.
- **Keeps work moving by:** turning one-off appeals into root-cause prevention.

#### 3.2.3 Activity / flow tiles (awareness — weakest on action; see the events deep-dive §3.5.x)

**Events** 🟢
- **Shows:** count of recent workflow events in the current filter.
- **How it works:** `WORKFLOW_EVENTS`/`SOURCE_RECORD_EVENTS` table (`/api/workflow-events`).
- **Action it should drive:** *intended* to surface things needing attention — **but it counts activity occurrences, not open work**, and events carry no open/done state.
- **Act here?** ⚠ **Mostly not** — filter the feed and drill to a record; few events map to a fix.
- **Keeps work moving by:** awareness of throughput/anomalies — **today it does not reconcile to a to-do list** (this is the known gap; events are flow, actions come from state).

**Event Feed** 🟢
- **Shows:** live scrolling event stream (filter by category/severity/time).
- **How it works:** same table; rendered as a list.
- **Action it should drive:** spot an error/anomaly or a stalled workflow → investigate.
- **Act here?** ⚠ **Drill to record only** — no per-event action; a generic "Open Kanban" link.
- **Keeps work moving by:** a real-time pulse — useful for *noticing*, not for *clearing*.

**Source Coverage** 🟡
- **Shows:** which of 8 domains have recent activity (registration→security).
- **How it works:** **browser keyword-match** over the event feed — *not* a state query.
- **Action it should drive:** a dark domain = that workflow may have stalled → go look.
- **Act here?** ⛏ **Drill** → the domain's work page.
- **Keeps work moving by:** a coverage "traffic light" — flags a workflow that went quiet; it shows *flow*, **not** "this domain has open work."

#### 3.2.4 Volatile tile (hint only — never a system-of-record)

**Automation** 🟠
- **Shows:** automation run counters (scrub pass/fail, ERA pay/deny, secondary, eligibility, A/R inquiries, appeals).
- **How it works:** **in-memory process counters** — per-instance, reset on every deploy, org-wide.
- **Action it should drive:** at most a *direction hint* (e.g. ERA-denials climbing = a denial wave) → act on the **table-backed** tiles, not this.
- **Act here?** ❌ **No** — nothing to clear; the absolute number isn't trustworthy.
- **Keeps work moving by:** little, today — its real value arrives when persisted (roadmap D4.1).

#### 3.2.5 Preview tiles (not operational — no live data)

**Autopilot · RCM Autopilot · Payer Rule Learning** 🔵
- **Shows:** suggested playbooks / auto-actions / payer-rule suggestions.
- **How it works:** client-side `window.PracticeForceOne*` contracts behind `localStorage` flags.
- **Action it should drive:** *eventually* one-tap automations — **but these are scaffolding with no live data**.
- **Act here?** ❌ **No** — preview only; a "Read only" pill.
- **Keeps work moving by:** nothing yet — they're a preview of the autopilot roadmap, not an operating surface.

#### 3.2.6 Honest scoreboard — which tiles actually move work *today*

| Behavior today | Tiles |
|---|---|
| ✅ **Clears work in place** (drawer) | (none today — the Denials drawer prototype was removed 2026-06-16; in-place clearing is reserved for terminal 1-click tiles, not yet built) |
| ↪ **Drives work via deep-link / drill-to-page** | Denials (→ `worklist.html`), Deadlines, Intake, Unread, Risk Rails, Denial Risk Tiers, Revenue Cycle, A/R, Action Items, No-Lost-Work |
| 🔎 **Analyze / process-fix** (no single-item clear) | Practice KPIs, Top Denial Reasons |
| ⚠ **Awareness only** (doesn't reconcile to a to-do) | Events, Event Feed, Source Coverage |
| ❌ **No action** (volatile / preview) | Automation, Autopilot, RCM Autopilot, Payer Rule Learning |

**The takeaway for "keeping things moving":** the 10 "Act" tiles are the engine — they point at real open work and deep-link you to the page where you clear it (Denials → `worklist.html`, the rest to their own work pages). The KPIs/Top-Reasons tiles tell you *whether* it's working and where the systemic leaks are. The event tiles are *awareness*, not a worklist — which is exactly why they don't reconcile to "things to do" (events record what happened; actions come from open state). The volatile/preview tiles drive nothing today and should be read as such. The in-place click-to-work **drawer pattern is reserved for *terminal 1-click* tiles** (e.g. a future "Unposted ERAs → Post" or "Acknowledge critical result") — substantive tiles like Denials deep-link to their work page instead. NO tile carries an in-place drawer today (the Denials drawer was the prototype and was removed 2026-06-16). The hardening roadmap (assessment §7b, DashboardTable D2.3) tracks any future terminal-1-click drawers.

### 3.3 Trust tiers — what to believe under test (critical)

> Each tile now carries a **provenance badge** in its header (🟢 Live / 🟡 Computed / 🟠 Volatile / 🔵 Preview) with a hover tooltip — hover any tile to see how much to trust its number. The tiers:

- **🟢 Table-backed** (the 12 above) — reflect the DB; test as real.
- **🟡 Browser composites** (Source Coverage, No-Lost-Work, Action Items, RCM/Payer stubs) — computed in the page; a partial load can render a wrong-but-plausible number. **Reload before reporting.**
- **🟠 In-memory** (**Automation**) — per-instance, **resets on deploy**, not summed, not practice-scoped. Numbers jumping between refreshes is **expected, not a bug.** Don't assert exact values.
- **🔵 Preview stubs** (Autopilot, RCM Autopilot, Payer Rule Learning) — `localStorage`-flag-gated scaffolding with a "Read only" pill; **not operational data.**

### 3.4 Why Denials deep-links (and when in-place clearing applies)

The Denials tile **deep-links to `/ui/worklist.html`** (open denials): click it and you land on the denials worklist, where you actually work each denial — draft/submit an appeal, mark it won, or write it off — alongside the full claim and CARC context. The real appeal work has always lived on the worklist/appeals pages; the tile's job is to route you there fast.

**The in-place "drawer" pattern is reserved for *terminal 1-click* tiles only.** A drawer earns its place only when the action is a single, decisive tap that completes the work without further context — e.g. a future "Unposted ERAs → Post" or "Acknowledge critical result." **Substantive** tiles (Denials, Charge review, etc.) drive multi-step judgment work, so they **deep-link** to their work page instead of trying to cram a worklist into a dashboard drawer.

> **History:** an in-place Denials drawer (Appeal / Won / Write-off, with a closed-loop count) shipped as the prototype for this pattern and was **removed 2026-06-16** (commit `84bb7a85a`). The decision: the drawer just funneled the operator to the worklist anyway, so the tile now links there directly. **No tile currently has an in-place drawer.**

**Smoke test:** [RB-561 — Run the Dashboard Smoke Test](<runbooks/RB-561-dashboard-smoke-test.md>).

---

## 3.5 Diagnostic & remediation catalog — what you can view & fix from the dashboard

The dashboard is a **triage surface**: each tile is a *signal* that points at a workflow problem. This catalog is the deep dive — for **every** tile and the common cross-tile failure patterns: what the signal means, **how to debug it** (where to drill), the **likely root cause**, and **the fix**.

> **How "fixed through the dashboard" works today.** Every Act tile is a **drill-to-fix / deep-link**: you click into the tile's work page and fix it there (Denials → `worklist.html`; the rest to their own pages). **No tile fixes in place today** — the in-place drawer pattern is reserved for *terminal 1-click* tiles (e.g. a future "Unposted ERAs → Post"), and the one prototype (Denials) was removed 2026-06-16 (§3.4). Future terminal-1-click drawers are tracked on the roadmap (assessment §7b / DashboardTable D2.3). Trust caveats from §3.3 always apply — a 🟠/🔵/🟡 tile is a *hint*, not a system-of-record signal.

### 3.5.1 Per-tile diagnostic → fix matrix

**Denials (🟢) — deep-links to the denials worklist**

| Signal | Workflow issue | Debug (drill) | Likely root cause (by CARC) | Fix |
|---|---|---|---|---|
| Denied count/rate climbing | payers rejecting claims; revenue at risk | tile → `worklist.html` (open denials) → inspect Claim#/Payer/**CARC**/Amount/Deadline; cross-check Top Denial Reasons | CO-27 eligibility/coverage · CO-197 auth/precert missing · CO-29 timely filing · CO-96 non-covered · CO-16 missing info · CO-11 dx↔procedure · CO-18 duplicate · CO-22 COB | on the worklist: **Appeal** (recoverable), **Won** (overturned), **Write-off** (uncollectible); or → `appeals.html` for a full appeal |
| "Won" count flat while denied rises | appeals not being worked / lost | `worklist.html` + Deadlines tile | nobody working the queue | work the worklist top-down (oldest deadline first) |

**Top Denial Reasons (🟢) — reveals *systemic* (process) failures**

| Signal | Means | Debug | Root cause | Fix (upstream, not single-claim) |
|---|---|---|---|---|
| One CARC dominates | a workflow *upstream* is failing for many claims | note the dominant CARC → trace to its phase | CO-197 → auth not captured at scheduling/clinical (Phase B/D); CO-27 → eligibility not run (Phase B); CO-29 → claims sitting in A/R too long (Phase F/G) | fix the *process*: enforce eligibility at booking, capture auth, work A/R faster; encode a payer rule in `rules.html`; feeds Payer Rule Learning |

**Denial Risk Tiers (🟢) — fix *before* the denial happens**

| Signal | Means | Debug | Root cause | Fix |
|---|---|---|---|---|
| Claims in **critical/high** preventable-risk (pre-submission) | these will likely be denied if submitted as-is | drill → `claim-review.html`; read the risk drivers | missing eligibility/auth, NCCI/MUE flags, medical-necessity | fix the claim *before* submit (verify eligibility, attach auth, fix coding) — prevents the denial outright |

**Risk Rails (🟢) — claim readiness/issue codes**

| Signal (issue code) | Means | Debug | Fix |
|---|---|---|---|
| **E2** ELIGIBILITY_NOT_VERIFIED | claim has no verified coverage | → `claim-review.html` / `eligibility.html` | run eligibility (Phase B) before submit |
| **E3** AUTHORIZATION_REQUIRED | service needs prior auth | → `authorizations.html` | obtain/attach the 278 auth |
| **E4** NCCI_EDIT / MUE_EXCEEDED / DUPLICATE_CPT / MEDICAL_NECESSITY | coding will be rejected | → `claim-review.html` / `charge-optimization.html` | fix modifiers/units/unbundling/dx linkage |

**Revenue Cycle / pipeline (🟢) — claims stuck mid-cycle**

| Bucket piling up | Means | Debug | Fix |
|---|---|---|---|
| **draft** | charges not worked into claims | → `claim-review.html` | approve charge → claim |
| **scrub_error** | claim blocked by validation | → `claims.html` Services/Diagnosis tabs | fix the scrub code (MISSING_DIAGNOSIS / FUTURE_DOS / INVALID_CPT / PAYER_RULE_VIOLATION) → re-submit |
| **submitted** but not advancing | stuck at clearinghouse (no 999/277) | → `edi-queue.html` "Awaiting Ack" | **Check Status 276**; resubmit if rejected 999 |
| **accepted** but not **paid** | ERA not posted | → `remittance.html` Batches (Received) | Import + Post the 835 |
| **pending** (payer) long | payer slow / lost | → `ar-followup.html` | 276 status inquiry |

*(status machine: `draft → ready → scrub_pending → scrub_error ↔ (fix) → submitted → acknowledged → accepted → paid/partial/denied`)*

**A/R aging (🟢)**

| Signal | Means | Debug | Fix |
|---|---|---|---|
| **91-120 / 121+** buckets growing | old receivables; timely-filing risk | → `ar-followup.html`; why aged? | 276 inquiry, follow-up note, rebill, patient statement, or write-off if truly uncollectible |

**KPIs (🟢/B)**

| Signal | Means | Debug | Fix |
|---|---|---|---|
| denial rate ▲ / first-pass yield ▼ / days-in-A/R ▲ | RCM health degrading | which driver? (Denials/pipeline/aging) → `reports.html` breakdown by payer/provider/code | attack the worst payer/provider/code; the KPI is the headline, reports is the autopsy |

**Intake (🟢)**

| Signal | Means | Debug | Fix |
|---|---|---|---|
| pending registrations piling | new patients can't be scheduled/seen | → `portal-users.html` | review → create patient + link chart → activate (DLP-A04); reject duplicates. *Contract: login is 403 ACCOUNT_PENDING_REVIEW until activated.* |

**Unread / notifications (🟢)**

| Signal | Means | Debug | Fix |
|---|---|---|---|
| unread **critical** notifications | unacknowledged critical results / escalations / tasks | → notifications | acknowledge the critical result (releases to patient — **patient-safety**); complete the task |

**Deadlines (🟢) — time-critical**

| Signal | Means | Debug | Fix |
|---|---|---|---|
| appeals/filing due ≤14d or **overdue** | missing the date = permanently lost revenue | → `worklist.html` / `denials.html` | draft+submit the appeal / file the claim **now** |

**Event Feed & Events (🟢)**

| Signal | Means | Debug | Fix |
|---|---|---|---|
| error/anomaly events; or a workflow with **no** events | a step is failing or a workflow has stalled | filter the feed by category/severity → drill to the source record | resolve the specific failing step |

**Source Coverage (🟡 computed)**

| Signal | Means | Debug | Fix | Caveat |
|---|---|---|---|---|
| a domain is **dark** (registration/scheduling/clinical/coding/edi/payment/denial/security) | that workflow isn't producing activity — likely stalled | click the domain → its work page | investigate the stall (e.g. EDI dark = submissions stopped → edi-queue) | computed in-browser; **reload** before concluding it's really dark |

**No-Lost-Work & Action Items (🟡 composite)**

| Signal | Means | Debug | Fix | Caveat |
|---|---|---|---|---|
| composite "at-risk work" / to-do counts climbing | work slipping (blocked claims + A/R 90+ + unread + pending registrations + stale events + deadlines) | drill into the **contributing** worklists (it rolls up the other tiles) | work each contributor | browser-composite; a wrong-looking number → reload |

**Automation (🟠 volatile) — *hint only, not a fix surface***

| Signal | Means | Debug | Caveat |
|---|---|---|---|
| scrub-failed / ERA-denials climbing | a *direction* hint of a bad-claim or denial wave | **cross-check the table-backed tiles** (Denials, pipeline) — act on those, not this | per-instance, **resets on deploy**, org-wide; a drop ≠ a workflow failure. Never debug off the absolute number |

**Autopilot / RCM Autopilot / Payer Rule Learning (🔵 preview)** — **not a diagnostic surface.** Preview scaffolding; no live data; nothing to debug or fix here yet.

### 3.5.2 Failure-scenario catalog (the dashboard "fingerprint" of common breakages)

| # | Workflow breakage | Dashboard fingerprint (what you'll see) | Fix path |
|---|---|---|---|
| 1 | **Eligibility not run before visits** | Denials CO-27 spike + Risk Rails **E2** + Top Reasons dominated by CO-27 | enforce eligibility at booking (Phase B); work the affected denials |
| 2 | **Prior auth missing** | Denials CO-197 + Risk Rails **E3** | capture auth (`authorizations.html`); appeal the denied |
| 3 | **Claims stuck after submit** | pipeline `submitted` not advancing + EDI "Awaiting Ack" climbing | 276 status inquiry; resubmit rejected 999 |
| 4 | **Scrub failures piling** | pipeline `scrub_error` + Action Items (scrub) | fix coding on `claims.html` → resubmit |
| 5 | **ERA arrived but not posted** | pipeline `accepted`-not-`paid` + remittance Batches in **Received** | Import + Post the 835 (`remittance.html`) |
| 6 | **Denials not being worked** | Denials open ▲ + Deadlines appeals-due ▲ | tile → `worklist.html`; work the denials there; escalate before deadlines |
| 7 | **A/R blowing out** | aging 91+/121+ ▲ + Deadlines (timely filing) | `ar-followup.html`: inquiry/rebill/statement |
| 8 | **New patients stuck at the door** | Intake pending ▲ + Source Coverage **registration** dark | `portal-users.html` review → activate |
| 9 | **Critical result unacknowledged** | Unread **critical** ▲ | acknowledge → release (patient-safety) |
| 10 | **A whole workflow stalled** | Source Coverage domain dark + that domain's events absent in the Feed | drill the domain → its work page; find the wedge |
| 11 | **Coding quality dropping** | KPIs first-pass ▼ + Denial Risk Tiers high ▲ + E4 flags | `charge-optimization.html`; provider coding feedback |
| 12 | **Automation/scheduler stopped** | Automation counts flat when activity expected *(hint only)* + table tiles not advancing | verify the scheduler/automation health (don't trust the counter's absolute value — §3.3 🟠) |

### 3.5.3 What you **cannot** (yet) fix from the dashboard — honest gaps

- **Every tile is drill-to-fix / deep-link, not fix-in-place** — no tile clears work in place today; each sends you to its work page (Denials → `worklist.html`). The in-place drawer pattern is reserved for *terminal 1-click* tiles, none built yet; the Denials drawer prototype was removed 2026-06-16. (Roadmap: DashboardTable D2.3.)
- **No clinical fix-in-place** — unsigned encounters / unacked results surface via Unread / No-Lost-Work, but you sign/acknowledge in the encounter/chart, not on the dashboard.
- **Security/audit isn't a first-class tile** — only the Source Coverage "security" domain hints at it; real audit review is `audit.html`.
- **The volatile (🟠) and preview (🔵) tiers are not diagnostic** — never open a debug investigation off an Automation absolute count or a preview stub.
- **Composite (🟡) tiles can mislead on a partial load** — always reload before treating a composite number as the truth.

---

## 4. The clinic spine at a glance

The canonical end-to-end flow, in clinic order. Each phase links to its deep chapter below.

| Phase | Who | Pages | Hands off by |
|---|---|---|---|
| **A — Registration & onboarding** | patient → front desk / admin | portal register/confirm, `portal-users.html`, `patients.html`, `dynamic-forms.html` | activating the portal user + creating/linking the patient |
| **B — Coverage & scheduling** | front desk | `eligibility-queue.html`, `eligibility.html`, `check-patient-insurance.html`, `verify-insurance.html`, `practice-ehr-calendar.html` | a booked appointment with a verified copay |
| **C — Check-in & copay** | front desk | `kanban.html`, `practice-ehr-calendar.html`, `payments.html` | flipping the appointment to checked-in (creates encounter) + collecting the copay |
| **D — Clinical** | MA → provider | `practice-ehr-encounter.html`, `patient-chart.html`, `authorizations.html` | **signing** the note (creates the charge-review item) |
| **E — Coding & claim** | biller | `practice-ehr-charge-review.html`, `claims.html` | approving the charge + a scrub-clean claim |
| **F — Clearinghouse** | biller / system | `edi-queue.html`, `remittance.html` | 837 submitted, acks processed, 835 received |
| **G — Payment & closure** | system / biller / patient / auditor | `remittance.html`, `statements.html`, `ar-followup.html`, `audit.html` | posting the ERA, statementing the residual, zero balance |

> **Scenario-ID note for testers.** Per [PracticeForceOneMR5ScenariosInventory.md](PracticeForceOneMR5ScenariosInventory.md), the DLP IDs map to the spine like this: registration/intake = **A01–A06**; insurance/eligibility/scheduling = **B01–B04**; check-in/copay = **C01–C02**; clinical = **D01–D07**; coding & claim = **E01 (charge review → claim) · E02 (scrub) · E03 (837 submit)**; clearinghouse = **F01 (999/TA1 acks) · F02 (276/277 status) · F03 (835/ERA)**; posting & closure = **G01 (ERA posting) · G02 (statement → payment → zero balance) · G03 (audit completeness) · G04 (cleanup)**; branches = **H01–H06**. The per-page **Test** lines below use these IDs.

---

## 5. Deep per-workflow chapters

---

## Chapter A — Registration, Intake & Portal onboarding

The front door. Staff onboard themselves (register → verify email → login), patients self-register on the portal, and an admin reviews/activates portal accounts and links them to patient charts. Admins also build the intake forms patients fill in.

### A.1 Staff register — `/ui/register.html`

**Purpose/role:** practice staff create the first account during onboarding (creates an organization + admin user in one transaction). Public, unauthenticated.

**Operate:** the page loads the practice list, then you fill **"First Name"**, **"Last Name"**, **"Email"**, **"Password"**, **"Confirm Password"**, pick the **"Practice"** dropdown, and click **"Create Account"**. A 6-digit verification code is emailed (or returned inline in the JSON for `@test.*` emails / when email is disabled), and you're taken to the verify page.

| | |
|---|---|
| **Endpoint** | `GET /api/auth/registration-practices` (fills the dropdown); `POST /api/auth/register` — `organizationName, practiceId, firstName, lastName, email, password` |
| **Validation & errors** | `400 VALIDATION_ERROR` (missing field / bad email regex / weak password); `409 EMAIL_EXISTS`; `429 RATE_LIMITED` (per-IP, bypassed for `@test.*`); `500 REGISTRATION_DB_ERROR` |
| **Test** | **A01** (register→verify→login), **A02** (weak password → 400), **A06** (duplicate email → 409) |
| **Gotchas** | "No practices available" = no active rows in PRACTICES; weak-password rejects mean 8+ chars with mixed case, number, symbol. |

### A.2 Verify email — `/ui/verify.html`

**Purpose/role:** confirm email ownership; on success the org + user records are created and a JWT is issued.

**Operate:** the email shows read-only; enter the 6-digit **"Verification Code"** (auto-filled for `@test.*`) and click **"Verify Email"**. On success you're redirected to `/ui/dashboard.html`.

| | |
|---|---|
| **Endpoint** | `POST /api/auth/verify` — `email, code`; resend via `POST /api/auth/resend-code` |
| **Validation & errors** | `400 INVALID_CODE` (increments attempt counter), `400 CODE_EXPIRED` (>15 min), `404 NOT_FOUND` (no pending registration), `429 TOO_MANY_ATTEMPTS` (≥5 failures → locked) |
| **Test** | **A01**, **A03** (brute-force lockout: 5 wrong codes → 429, admin clears `verification_attempts`) |
| **Gotchas** | code TTL is 15 min; after 5 wrong tries the account locks pending admin reset of the attempt counter. |

### A.3 Login & password reset — `/ui/login.html`, `/ui/forgot-password.html`, `/ui/reset-password.html`

**Purpose/role:** authenticate staff; recover access.

**Operate (login):** enter **"Email"** + **"Password"**, click **"Sign In"**. If MFA is enrolled, the page reveals the **"Authentication code"** field — enter a 6-digit TOTP (or a 10-digit recovery code) and submit again.
**Operate (reset):** on `forgot-password.html` enter **"Email"**, click **"Send Reset Link"** (always returns success, to prevent email enumeration). Follow the link to `reset-password.html?token=…`, set **"New Password"** + **"Confirm Password"**, click **"Reset Password"**.

| | |
|---|---|
| **Endpoints** | `POST /api/auth/login` (`email, password`) → may return `mfaRequired:true`; `POST /api/auth/mfa/login-verify` (`email, password, code` or `recoveryCode`); `POST /api/auth/forgot-password` (`email`); `POST /api/auth/reset-password` (`token, newPassword`) |
| **Validation & errors** | login: `401 AUTH_FAILED`, `403 ACCOUNT_PENDING_REVIEW` / `ACCOUNT_INACTIVE` / `REVOKED`, `423 ACCOUNT_LOCKED` (5 failures, auto-unlock after `ACCOUNT_LOCKOUT_MINUTES`, default 15). Reset: `400 INVALID_TOKEN` (expired >1h, already used, or no match). |
| **Test** | **A04** (forgot→reset→login with new password; token is single-use; reset clears `locked_until` + `failed_login_count`) |
| **Gotchas** | lockout is checked *before* the password to avoid timing leaks; a successful reset also unlocks the account. |

### A.4 Patient self-registration & confirm — `/portal/register.html`, `/portal/confirm-email.html`, `/portal/login.html`

**Purpose/role:** patients create their own portal account and (optionally) submit a full new-patient intake.

**Operate (register):** fill **"First Name"**, **"Last Name"**, **"Date of Birth"**, **"Email"**, **"Password"**, **"Confirm Password"** (optional **"Phone"**, **"Last 4 of SSN"**) and click **"Create Portal Account"**. For a new-patient intake the payload also carries clinic, address, insurance, allergies/medications and an appointment request.
**Operate (confirm):** enter **"Email"** + **"Confirmation Code"**, click **"Confirm Email"**. **"Resend Email"** issues a fresh code.
**Operate (login):** the portal login page has three sections — a front-desk **"Six Digit Code"** + **"Patient Birthdate"** quick-access path, an **"Email"**/**"Password"** **"Sign In"**, and a **"Start New Patient Intake"** path.

| | |
|---|---|
| **Endpoints** | `POST /portal/auth/register` (`firstName, lastName, dateOfBirth, email, password, phone, ssnLastFour, intakeType, clinicIdentifier, …`); `POST /portal/auth/confirm-email` (`email, code`); `POST /portal/auth/resend-confirmation`; `POST /portal/auth/login` (`email, password`); `POST /portal/auth/quick-access-login` (`code, dateOfBirth`) |
| **Validation & errors** | register: `400 VALIDATION_ERROR`, `409 EMAIL_EXISTS`. Confirm: `400 INVALID_CODE` / `CODE_EXPIRED`, `429 TOO_MANY_ATTEMPTS` (≥5). Login: `401 AUTH_FAILED`, `403 EMAIL_CONFIRMATION_REQUIRED`, **`403 ACCOUNT_PENDING_REVIEW`** (intake not yet approved), `403 ACCOUNT_REVOKED`. |
| **Test** | **A05** (self-register new-patient intake → confirm → login; account lands `pending_review` until admin approves) |
| **Gotchas** | after confirming email, a new-patient intake stays `pending_review` until the admin matches/approves it (see A.5); quick-access codes are single-use and DOB-gated. |

### A.5 Admin portal-user review — `/ui/portal-users.html`

**Purpose/role:** admins (role `admin`/`super_admin`) review pending portal registrations, link them to a patient, and activate access. This is the gate that opens A05.

**Operate:** the table shows **"Portal User"**, **"Patient / Practice"**, **"Status"**, **"Confirmations"**, **"Sessions"**, **"Last Login"**, **"Actions"**. **Search** and **filter by status**; click edit to open the panel (**"First Name"**, **"Last Name"**, **"Email"**, **"Phone"**, **"Status"** = Active / Pending Confirmation / Pending Review / Revoked) and click **"Save Portal User"**. Approving a new-patient intake sets `patient_lifecycle_status = established_patient`, which flips the portal user to active.

| | |
|---|---|
| **Endpoints** | `GET /api/admin/portal-users?q=&status=`; `PUT /api/admin/portal-users/{id}` (`firstName, lastName, email, phone, status`) |
| **Validation & errors** | `400 VALIDATION_ERROR`, `403 FORBIDDEN` (non-admin: "Admin role required for portal user maintenance"), `404 NOT_FOUND`, `409 EMAIL_EXISTS` (new email in use) |
| **Test** | **A05** completion (approve intake → portal login succeeds), **A04** gate (login blocked `403 ACCOUNT_PENDING_REVIEW` until activation) |
| **Gotchas** | a non-super admin only sees portal users tied to their org's practices; only super-admin sees cross-org. An email change drops the account to pending_confirmation. |

### A.6 Patient management — `/ui/patients.html`

**Purpose/role:** staff create and maintain patient demographics, contact, insurance, chart, and portal links. Roles: admin/provider/staff.

**Operate (walk-in):** in the **Quick Add Walk-In** panel pick **"Clinic"**, fill **"First Name"**, **"Last Name"**, **"Birth Date"** (optional **"Phone"**, **"SSN Last 4"**) and click **"Quick Add to Kanban"** — the patient appears on Kanban for scheduling.
**Operate (full record):** open a row to get the modal tabs **Demographics**, **Contact**, **Insurance**, **Portal**, **Chart**, **Notes**; click **"Save"**. The **Insurance** tab's **"+ Add Insurance"** modal captures **"Payer"**, **"Subscriber ID"**, **"Group Number"**, **"Plan Name"**, **"Plan Type"**, effective/term dates, **"Copay"**, deductible/coinsurance/OOP, and **"Relationship to Patient"**.

| | |
|---|---|
| **Endpoints** | `POST /api/patients/quick-add` (`clinicId, firstName, lastName, dateOfBirth, phone, ssnLastFour`); `POST /api/patients`, `PUT /api/patients/{id}`; `POST /api/patients/{id}/insurances` (`payerId, priority, subscriberId, groupNumber, planName, planType, copay, …, relationshipCode`); `GET /api/patient-insurances?patientId=` |
| **Test** | supports **A05/A06**, **B01** (insurance on file), **C01** (walk-in path) |
| **Gotchas** | the Insurance modal is empty if PAYERS_MASTER has no payers; a self-registered relationship sits `pending_review` until A.5 approval. |

### A.7 Dynamic forms — `/ui/dynamic-forms.html`

**Purpose/role:** admins author JSON form templates used for portal intake, check-in, consent and screening. Roles: admin/super_admin.

**Operate:** the table lists **"Form"**, **"Type"** (registration / check_in / consent / screening / specialty), **"Version"**, **"Status"**, **"Updated"**. **"New Form"** opens the editor (**"Form Key"**, **"Form Name"**, **"Form Type"**, **"Version"**, **"Status"**, and a **"Configuration JSON"** textarea). Use **"Format JSON"**, **"Validate"**, **"Preview"**, **"Clone Version"**, then **"Save Configuration"**.

| | |
|---|---|
| **Endpoints** | `GET/POST /api/admin/dynamic-forms`; `PUT /api/admin/dynamic-forms/{id}`; `DELETE /api/admin/dynamic-forms/{id}` |
| **Test** | **A01–A06** intake (approved-form meds must appear on the chart read-back) |
| **Gotchas** | only `active` forms appear on the portal; editing an active form affects **new** submissions only (past submissions are immutable); server-side cache can take 5–10 min to refresh. |

---

## Chapter B — Insurance, Eligibility & Scheduling

Confirm the patient is covered, capture the copay the visit will collect, and book the appointment. The copay verified here is the number Chapter C collects and Chapter G nets out.

### B.1 Eligibility queue — `/ui/eligibility-queue.html`

**Purpose/role:** the bulk-verification dashboard. Billing coordinators run batches and schedules; front desk spots coverage gaps before check-in.

**Operate:** select a practice; the stats row shows Total Checks / Failed / Stale Coverage / Refresh Due / Active. Pick a system worklist — **"All Checks"**, **"Failed Verifications"**, **"Stale Coverage"**, **"Refresh Due"**, **"Recent (Active)"**. Per row, **"Verify"** runs a single check; select rows + **"Run Batch Verification"** for many. Save a custom worklist with **"New"** (**"Worklist Name"**, **"Description"**, **Category/Status/Min Days** filters → **"Create Worklist"**). Set up a **"Recurring Refresh Schedule"** (**"Name"**, **"Frequency"** Daily/Weekly/Monthly, **"Refresh After"** days, **"Max Patients"**, **"Save"**), then **"Run"** or **"Delete"** it. **"Export to CSV"** and **"Refresh"** round out the page.

| | |
|---|---|
| **Endpoints** | `GET /api/workflow/eligibility-queue?practiceId=`; `POST /api/eligibility/check` (`patientId, patientInsuranceId`); `POST /api/eligibility/batch` (`practiceId, patientIds[]`); `POST /api/eligibility/schedule` (`practiceId, name, frequency, refreshDays, maxPatients`); `GET /api/eligibility/scheduled?practiceId=`; `POST /api/eligibility/scheduled/{id}/run`; `DELETE /api/eligibility/scheduled/{id}` |
| **Validation & errors** | `400 "practiceId is required"`, `400 "refreshDays must be between 1 and 365"`, `409` (verification already in progress), `504` (clearinghouse timeout >60s), `404 "Schedule not found"` |
| **Test** | **B01** (stale-coverage categorization), **B03** (scheduled batch refresh queues ≤ maxPatients), **B04** (failed-check categorization + retry) |
| **Gotchas** | "stale" = `daysSinceCheck ≥ threshold`; a 504 from the clearinghouse is transient — retry in ~5 min. |

### B.2 Eligibility verification (single patient) — `/ui/eligibility.html`

**Purpose/role:** the detailed single-patient check with full benefit breakdown.

**Operate:** in the **Quick Eligibility Check** card pick **Patient**, **Insurance**, **Service Date**, **Service Type**, click **"Check"**. The full **"Check Eligibility"** modal adds optional **Provider**, service-type checkboxes, **Procedure Codes** and **Diagnosis Codes**. Results open the **Eligibility Details** modal with tabs **Benefits**, **Deductibles & OOP**, **Copays & Coinsurance**, **Limitations**, **Raw Response**; **"Export PDF"**, **"Re-Check"**, **"Close"**. Other tabs: **"Check History"**, **"Scheduled Checks"** (**"Schedule Check"** → **Patient/Insurance/Check Date/Frequency**), **"Coverage Alerts"**.

| | |
|---|---|
| **Endpoints** | `POST /api/eligibility/check` (`patientId, patientInsuranceId, serviceDate, providerId?, serviceTypes[]?, procedureCodes[]?, diagnosisCodes[]?`); `GET /api/eligibility?patientId=&insuranceId=&limit=`; `POST /api/eligibility/schedule` |
| **Validation & errors** | `400 "serviceDate cannot be in the future"`, `400 "Patient has no active insurances"`, `409` (duplicate check in progress), `504` (clearinghouse timeout) |
| **Test** | **B02** (the verified copay is the number collected at check-in), **H02** (failure path → readable reason + retry) |
| **Gotchas** | the copay shown here must equal the copay collected in C and netted in G — see the B02/C02 reconciliation in §6. |

### B.3 Insurance check & verify pages — `/ui/check-patient-insurance.html`, `/ui/verify-insurance.html`, `/ui/verify-insurance-match.html`

**Purpose/role:** three coverage-confirmation surfaces. `check-patient-insurance.html` and `verify-insurance-match.html` are diagnostics (do the insurances exist, and will they populate the claims dropdown?); `verify-insurance.html` is the **pre-check-in checkpoint** reached from the Kanban *Patient Arrived* lane.

**Operate (verify-insurance):** pick the patient (or arrive from Kanban). The **"Patient Contact"** panel and **"Active Insurances"** table confirm identity and coverage; the color-coded **"Eligibility Confirmation"** panel shows green (Verified, with copay + deductible-remaining), yellow (Pending), or red (Failed). If failed/inactive, click **"Run eligibility"**; **"Back to Kanban"** returns you.
**Operate (verify-insurance-match):** pick a patient to compare the patient-record insurances against the simulated claims-form dropdown, with green/yellow/blue/red verification results and a link to `claims.html`.

| | |
|---|---|
| **Endpoints** | `GET /api/verify-insurance?patientId=`; `GET /api/patient-insurances?patientId=` |
| **Validation & errors** | `404 "Patient not found"` |
| **Test** | **C01** (patient insurances populate the claims dropdown; primary present; COB flagged) |
| **Gotchas** | an empty dropdown means no active insurance on file — add it on `patients.html` first. |

### B.4 Practice EHR calendar — `/ui/practice-ehr-calendar.html`

**Purpose/role:** the scheduling hub — create/reschedule/cancel appointments, mark check-in/no-show, block resources, check availability, and open the encounter.

**Operate:** select practice; the grid offers **"Previous"**/**"Today"**/**"Next"**, a provider filter, and view modes **"Week"**, **"Provider Day"**, **"Resource Day"**. Statuses are color-coded: **Scheduled** (gray/blue), **Checked In** (green), **Cancelled** (strikethrough), **No-Show** (red). To book: search the patient (**"Search by name…"**) or expand **Quick Patient Setup** + **"Create Patient"**; set **Provider**, **Start**, **End** (or a duration button — **"15 Min"**/**"30 Min"**/**"45 Min"**/**"60 Min"**), pick a **Visit Type** preset (**"Follow-up - 30 min"**, **"Annual wellness - 45 min"**, **"Procedure - 60 min"**, **"Telehealth - 30 min"**, **"Urgent visit - 15 min"**), **Location** (**"Main Clinic"**, **"Telehealth"**, **"Procedure Suite"**), **Room/Resource** and **Reason**, then **"Create Appointment"**. Reschedule by editing fields or the **−15 Min / +15 Min** nudge buttons + **"Save Appointment Changes"**. Footer actions: **"Check In"**, **"Open Encounter"**, **"Check Eligibility"**, **"Open Authorization"**, **"Find in Kanban"**, **"Block Selected Time"**, **"Cancel Appointment"**.

The **Provider Calendar** (`/ui/practice-ehr-provider-calendar.html`) paints 15-minute availability with **Paint Mode** + **Block Reason**, **"Mark All Available"**, **"Block Lunch"**, **"Save Availability"**, **"Save Weekly Template"**, and **"Apply Template Range"**. The **Availability Templates** page (`/ui/practice-ehr-availability-templates.html`) edits reusable Sun–Sat patterns (**"Business Week"**, **"All Day Week"** presets, range painter, day-copy tools, **"Save Template"**).

| | |
|---|---|
| **Endpoints** | `GET /api/appointments?practiceId=&dateFrom=&dateTo=&providerId=`; `POST /api/appointments` (`patientId, providerId, start, end, visitType, location, resource, reason, overbookOverride, overbookReason`); `PUT /api/appointments/{id}`; `POST /api/appointments/{id}/check-in`; `DELETE /api/appointments/{id}`; `GET /api/provider-availability?providerId=&date=`; `PUT /api/provider-availability`; `POST /api/availability-templates`, `POST /api/availability-templates/{id}/apply` |
| **Validation & errors** | `400 "Appointment end time must be after start time"`, `400 "Cannot create/modify appointment in the past"`, `400` (missing required), **`409 "Provider is already booked during this time"`** (double-book; flag-ON), `409`/`422` overbook without override (requires the **"Allow provider overbook with documented reason"** checkbox + reason) |
| **Test** | **B03** (booking + double-book 409), **H03** (no-show transition) |
| **Gotchas** | the duration buttons compute End from Start — clear a stale End or it won't update; if the navigator grid is all-red, the provider has no availability marked. |

---

## Chapter C — Check-in & Copay

Visit day. Check the patient in (which creates the encounter) and collect the copay verified in Chapter B.

### C.1 Kanban check-in path — `/ui/kanban.html` (Patient Arrived lane)

**Purpose/role:** the front-desk arrival workflow.

**Operate:** open Kanban, find the patient's card in **Patient Arrived** (use the lane search if needed), click it for the detail panel — patient info, **Appointment Context**, **Insurance Context** (primary, member ID, **Copay**, deductible remaining), the **"WHY BLOCKED"** panel, and the **Arrival Autopilot** checklist. Optionally **"Verify Insurance"** (Chapter B.3), then click **"Check In"** / **"Complete Check-In"**. The card flips to green, records a timestamp, and auto-moves to **Rooming** → **Ready for Provider**. Pre-check-in answers (medicines, allergies, visit reason) surface from the patient portal.

| | |
|---|---|
| **Endpoints** | `GET /api/kanban/cards?lane=patient_arrived&focusPatientId=`; `POST /api/appointments/{id}/check-in`; `GET /api/portal-staff/check-in-status?appointmentId=`; `GET /api/portal-staff/check-in-submissions?appointmentId=` |
| **Validation & errors** | `409 "Appointment is already checked in"`, `400 "Cannot check in a cancelled appointment"`, `400 "Patient has no active insurance"`, `400 "Patient has not completed pre-check-in"` |
| **Test** | **C01** (check-in flips status + creates the encounter), **C02** (copay reconciliation) |
| **Gotchas** | check-in requires an upcoming appointment; a financial-verify warning is a yellow note, not a hard block. |

### C.2 Patient portal check-in — `/portal/check-in.html`

**Purpose/role:** the patient's pre-appointment questionnaire (kiosk/iPad or from home).

**Operate:** the patient reaches it via a front-desk **"Generate Check-In Code"** 6-digit single-use code or a portal login, picks **Regular Check-In** or **Full Check-In**, answers **Step 1 Visit Reason**, **Step 2 Medicines & Allergies** (**"+ Add Medicine"**), **Step 3 Consent** (treatment + financial), and clicks **"Send Check-In"**. Staff then review it in the Kanban detail panel.

| | |
|---|---|
| **Endpoints** | `GET /api/portal/questionnaires/pre-check-in?form=regular|full`; `POST /api/portal/check-in` (`appointmentId?, formType, submission{visitReason, medicines[], allergies[], consent, financialConsent}`); `GET /api/portal/appointments`; `GET /api/portal/medications/search?q=` |
| **Validation & errors** | `400 "Visit reason is required and must be at least 5 characters"`, `400 "You must consent to treatment to proceed"`, `400 "Appointment is already checked in"`, `401 "Invalid or expired check-in code"`, `403 "This check-in code has already been used"` |
| **Test** | feeds **C01**; kiosk-code failure → 401/403 with staff re-issuing a new code |
| **Gotchas** | the code is single-use; once submitted, generate a new one for any re-entry. |

### C.3 Copay collection — `/ui/payments.html`

**Purpose/role:** record patient copay/coinsurance and post payer remittances. (ERA import detail is in Chapter G; here it's the point-of-service copay.)

**Operate:** select practice; the stats cards show Total Received / Payment Count / Recoupments / Patient Payments. Click **"+ Manual Payment"**, search the **Claim**, set **Payment Date**, optional **Check/EFT Number**, **Paid Amount** (= the verified copay), optional **Adjustment**, **Patient Responsibility**, **CARC Code**, **Notes** ("Copay at check-in"), then **"Post Payment"**. Filter the table by **Search** and **Type** (All / ERA / Manual Entry / Patient Payment / Recoupment).

| | |
|---|---|
| **Endpoints** | `POST /api/payments` (`claimId, paymentDate, checkNumber, paidAmount, adjustmentAmount, patientResponsibility, carcCode, paymentType, notes`); `GET /api/payments?practiceId=&dateFrom=&dateTo=&type=`; `GET /api/payments/stats?practiceId=&days=` |
| **Validation & errors** | `404 "Claim not found"`, `400 "Payment date cannot be in the future"`, `400 "Paid amount must be greater than zero"`, `409` (duplicate payment for same claim/date/amount) |
| **Test** | **C02** (copay collected = charge-review patient responsibility; collected before charge approval) |
| **Gotchas** | record the copay with `paymentType: "patient"` and a clear note so the C02 reconciliation matches. |

---

## Chapter D — Clinical encounter + chart + prior auth

MA rooms and takes vitals; provider documents and signs. Signing is the clinical→billing seam — it creates the charge-review item.

### D.1 Encounter documentation — `/ui/practice-ehr-encounter.html`

**Purpose/role:** the provider's three-tab encounter (the MA assists rooming/vitals). Reached from the calendar or Kanban with `?appointmentId=`.

**Operate:**
- **Tab 1 — Encounter:** set **Patient**, **Provider**, **Date**, **Encounter Type** (**"Office Visit"**, **"Telehealth"**, **"Procedure"**, **"Lab"**, **"Imaging"**), **Chief Complaint**, click **"Create"** (status `draft`). Quick actions: **"Go to Intake / Vitals"**, **"Go to Clinical Note"**, **"Save Encounter & Go to Kanban"**.
- **Tab 2 — Intake / Vitals:** the 9-field grid with enforced ranges — Heart Rate 20–300 bpm, Systolic 50–300, Diastolic 20–200, O₂ Sat 50–100%, Temp 90–110 °F, Resp Rate 4–60, Weight 1–999 lbs, Height 12–108 in, **BMI** (read-only, computed), **Pain Score** 0–10 slider. **"Save Vitals"**, **"Save & Ready for Provider"**, **"Continue to Note →"**.
- **Tab 3 — Clinical Note:** the SOAP textareas (**Subjective/Objective/Assessment/Plan**); **Diagnosis** (search ICD-10, **"Add Diagnosis"**, per-row **"Make Primary"**); **Medications** (RxNorm search, dose/frequency/source/status, **"Add Medication"**, per-row **"Discontinue"** / **"eRx"**); **"Patient Portal Forms"** card with **"Refresh Forms"** + **"Import answers"**. Finish with **"Sign"**.

After signing the note is read-only ("This note has been signed by … You can only amend, not edit."); use the **"Amend signed note"** panel (**amendment text** + **reason** → **"Add Amendment"**). **"Undo Sign"** (signer only, with a confirm modal) returns it to draft/ready while still in the clinical stage.

| | |
|---|---|
| **Endpoints** | `POST /api/encounters` (`patientId, providerId, encounterDate, encounterType, chiefComplaint, practiceId`); `PUT /api/encounters/{id}` (vitals + SOAP + `diagnoses[]` + `medications[]`); `POST /api/encounters/{id}/sign`; `POST /api/encounters/{id}/undo-sign`; `POST /api/encounters/{id}/amendments`; `GET /api/reference/coding-search?q=&type=`; `GET /api/reference/medications/search?q=` |
| **Validation & errors** | **`400 "Vitals out of range"`** (flag-ON), `400 "All diagnosis codes must be valid ICD-10"`, **`409 "Encounter already signed"`** (immutable note), **`422`** empty signature block, `409 "Cannot undo sign: encounter in billing stage"` |
| **Test** | **D01** (happy path → Kanban *Ready for Review* + charge-review), **D02** (vital out-of-range rejected), **D03** (med status flip → reconciled), **D04** (amendment leaves original immutable) |
| **Gotchas** | the **"Sign"** button stays disabled until ≥1 SOAP field, a provider, and ≥1 diagnosis are present; a vitals save may show a transient `409 uidUpdate conflict` even though the data saved (reload). |

### D.2 CPOE orders & results — encounter CPOE panel + `patient-chart.html` Result Inbox

**Purpose/role:** the provider places orders, reviews results, **acknowledges**, and **releases** to the patient portal.

**Operate:** **"New Lab Order"** → set order code, diagnosis, priority → **"Create"** (draft) → **"Sign"**. Results arrive (status `resulted`) in the **Result Inbox**; critical results show **"CRITICAL: Must be acknowledged"**. Click **"Acknowledge"**, then **"Release to Patient"**.

| | |
|---|---|
| **Endpoints** | `GET /api/clinical-orders?patientId=`; `POST /api/clinical-order-results` (`orderId, resultName, value, unit, referenceRange, severity`); `POST /api/clinical-order-results/{id}/acknowledge`; `POST /api/clinical-order-results/{id}/release`; `GET /api/clinical-orders/necessity-check?…` (advisory) |
| **Validation & errors** | **`409 RELEASE_GATED "Critical results must be acknowledged before release"`**; an unacknowledged critical result also blocks charge review |
| **Test** | **D05** (order→result→acknowledge closed loop), **D06** (critical result release gating: release-before-ack → 409, then acknowledge → release 200) |
| **Gotchas** | the portal shows a result summary, not raw values; necessity-check is advisory and never blocks. |

### D.3 eRx / EPCS — encounter medication tab

**Purpose/role:** the prescriber transmits a NewRx through the mock NCPDP SCRIPT adapter.

**Operate:** on a medication row click **"Send to Pharmacy →"**, search the pharmacy (mock: **"Mock CVS Pharmacy #1001"**, **"Mock Walgreens #2001"**, **"Mock Mail Order Pharmacy"**), **"Select"**, and submit. The chart's **"eRx Network Status"** then shows Accepted / Pending Fill / Filled / Cancelled. Controlled substances are blocked with **"⚠ Controlled substance eRx not yet enabled for your practice"**.

| | |
|---|---|
| **Endpoints** | `GET /api/erx/pharmacies?practiceId=&q=`; `GET /api/erx/prescriptions?practiceId=&patientId=`; `POST /api/erx/prescriptions` (`practiceId, patientId, medicationId, pharmacyId, medicationName, rxnormCode, ndc, sigText, quantity, daysSupply, refills, daw, controlledSchedule`); `PUT /api/erx/prescriptions/{id}?action=cancel` |
| **Validation & errors** | `400 "VALIDATION: practiceId, patientId, pharmacyId required"`, `404 "Pharmacy not found"`, **`409 EPCS_REQUIRED`** — "Controlled-substance eRx is blocked until EPCS identity proofing, MFA signing, DEA credentialing, and vendor certification are configured." |
| **Test** | **D07** (Schedule II med → `409 EPCS_REQUIRED`, button stays disabled, fallback print) |
| **Gotchas** | the mock adapter always returns "accepted" — no real fill/reject; demo/testing only. |

### D.4 Patient chart — `/ui/patient-chart.html`

**Purpose/role:** the longitudinal record (problems, allergies, meds, vitals, encounters, documents, results). Roles: provider/MA.

**Operate:** search the patient (**"Name, MRN, DOB, phone…"**). The KPI row shows Encounters / Problems / Allergies / Medications / Documents. Maintain **Active Problems** ([View]/[Edit]/[Resolve]/[Delete]), **Allergies** (**"Add Allergen"**, per-row [Remove]), and **Medications** (RxNorm search → dose/frequency, **Source**, **Status** = Active / Needs review / Reconciled / Inactive / Discontinued / Unknown, **"Add Medication"**, per-row [Edit]/[Discontinue]/[Notes]). Med-rec is the green/yellow/gray status discipline here.

| | |
|---|---|
| **Endpoints** | `GET /api/patients/{id}`; `GET/POST /api/patients/{id}/{problems|allergies|medications}`; `PUT/DELETE …/{id}`; `GET /api/patients/{id}/vitals`, `/encounters`, `/appointments`; `GET /api/erx/prescriptions?patientId=`; `GET /api/documents?patientId=` |
| **Test** | **D03** (status flip persists on reload) |
| **Gotchas** | a med-status edit returns `200` but the badge may not refresh until you reload (the page doesn't auto re-fetch). |

### D.5 Prior authorization — `/ui/authorizations.html`

**Purpose/role:** providers/billing/front-desk create and track prior auths and referrals, including CMS-0057-F SLA tracking.

**Operate:** the stats row shows Total / Pending / Approved / Expiring / Low/Exhausted; filter by **search**, **status**, **payer**, **risk**, and **SLA** (and the SLA tabs **"All / Breached / Approaching / On Time / Safe"**). **"New Authorization"** opens the modal (**patient**, **payer**, **auth type** = Prior Authorization / Referral, **status**, **service type**, **CPT codes**, **diagnosis codes**, **authorization number**, **requested/approved/used units**, start/end dates, notes → **"Save"**). Per-row **[View]** edits; **[Use Unit]** increments used units. The **Missing Auth Check** panel runs a scrub via **"Run Scrub Check"**.

| | |
|---|---|
| **Endpoints** | `GET /api/authorizations?practiceId=`; `POST /api/authorizations`; `PUT /api/authorizations/{id}`; `POST /api/authorizations/{id}/278` (generate EDI 278); `POST /api/edi/278` (ingest response); `POST /api/scrub` |
| **Validation & errors** | scrub returns `AUTH_REQUIRED` (error: "CPT {x} requires prior authorization for this payer") and `AUTH_LOW_UNITS` (warning) |
| **Test** | branch input to **H01-class** auth denials; supports the claim scrub story in E |
| **Gotchas** | on edit, patient/payer/auth-type are immutable; **[Use Unit]** only appears when status is approved and used < approved. |

---

## Chapter E — Coding & Claim

The biller turns the signed encounter into a clean claim: review/confirm the charge, create the claim, scrub it, and fix any scrub errors.

### E.1 Charge review — `/ui/practice-ehr-charge-review.html`

**Purpose/role:** review the signed charge, confirm coding, and approve it into claim creation.

**Operate:** filter the queue by **status** (**"All"**, **"Ready"**, **"In Review"**, **"Approved"**, **"Returned"**). Edit the charge lines (CPT/HCPCS, Mod1/Mod2, Dx, Units, Charge) via **"Add Line"** and **"Save Charges"**; **"Suggest Codes"** offers CPT/ICD-10 suggestions from the note. **"Approve"** locks the charge (status `approved`, available in Claims) or **"Return to Provider"** sends it back (status `returned`).

| | |
|---|---|
| **Endpoints** | `POST /api/charges/{id}/approve`; `POST /api/charges/{id}/suggest-codes`; `POST /api/charges/{id}/return` (`reason`) |
| **Validation & errors** | approval requires the encounter **checked_out (signed)**, ≥1 service line (CPT), ≥1 diagnosis (ICD-10), and a non-future DOS |
| **Test** | **E01** — approve → claim creation (diagnoses auto-populate in `claims.html`). Return-to-Provider and Suggest-Codes are features of this same E01 step. |
| **Gotchas** | a charge can't be approved before the note is signed — that's the seam from D. |

### E.2 Claim creation / edit & scrub — `/ui/claims.html`

**Purpose/role:** build/edit the claim and validate it (scrub) before it generates an 837.

**Operate:** the claim form has tabs **Basic Info**, **Providers**, **Diagnosis**, **Services**, **Other Info**, **Notes**, **History**. On **Basic Info** set Patient, **Patient Insurance**, **Payer Priority** (1=Primary/2=Secondary/3=Tertiary), **Claim Type** (Professional 837P / Institutional 837I), **Claim Frequency** (1 Original / 7 Replacement / 8 Void), service dates, place of service, prior-auth/referral numbers. **Providers** requires a Billing provider; **Diagnosis** marks the principal; **Services** lists CPT lines with modifiers, DX pointers, units, charge, plus the **Coding Assistant** and the amount summary. Save with the form, then **submit** — which runs the scrub and, if clean, the EDI. Fix scrub errors on the **Services/Diagnosis** tabs and re-submit. The claim status machine runs `draft → ready → scrub_pending → scrub_error ↔ (fix) → submitted → acknowledged → accepted → paid/partial/denied`.

| | |
|---|---|
| **Endpoints** | `GET /api/claims?practiceId=&status=`; `GET /api/claims/{id}`; `POST /api/claims` (full field set incl. `lines[]`); `PUT /api/claims/{id}`; `DELETE /api/claims/{id}` (soft); `POST /api/claims/{id}/submit` (empty body); `POST /api/claims/bulk` (`action:"submit", claim_ids[], practiceId`); `POST /api/scrub` |
| **Validation & errors (scrub codes)** | `MISSING_PATIENT`/`MISSING_PROVIDER`/`MISSING_PAYER`/`MISSING_DIAGNOSIS`/`MISSING_DOS` (400, ERROR), `FUTURE_DOS` (400, ERROR), `INVALID_CPT` (400, ERROR), `INVALID_MODIFIER_COMBO` (422, WARNING), `CHARGE_MISMATCH` (422, WARNING, line sum vs total ±$0.01), `PAYER_RULE_VIOLATION` (400). Submitting while in scrub_error → **`409 SUBMIT_BLOCKED_SCRUB_ERROR`** ("Claim has scrub errors. Please fix and re-submit."). |
| **Test** | **E02** — scrub blocks on missing diagnosis, future DOS (`FUTURE_DOS`), and payer-rule violation; a clean claim passes. **E03** — submit generates the 837. |
| **Gotchas** | an empty `diagnosisCodes` string `""` or `{}` normalizes to "no diagnosis"; future-DOS respects the org testing-date override, so a misconfigured override can produce a false `FUTURE_DOS`. |

### E.3 Charge optimization — `/ui/charge-optimization.html`

**Purpose/role:** pre-submission CPT/ICD validation with unbundling/NCCI/MUE warnings; feeds the scrub story. Biller-facing.

**Operate:** review the flagged claims, resolve unbundling/MUE/NCCI warnings, and clear pre-submission risk before the claim is scrubbed and submitted.

---

## Chapter F — Clearinghouse & EDI

Submit the 837, process payer acknowledgments, chase status, and receive the 835.

### F.1 EDI queue — `/ui/edi-queue.html`

**Purpose/role:** monitor the EDI batch lifecycle (pending → submitted → acknowledged → accepted/rejected).

**Operate:** the stats cards show Pending / Submitted / Accepted / Rejected. Pick a worklist: **"All EDI Claims"**, **"Pending Submission"**, **"Awaiting Ack"**, **"Awaiting Payer Response"**, **"Rejected/Needs Correction"**, **"276 Status Inquiries"**. The table shows Claim #, Batch ID, Patient, Payer, Amount, EDI Status, Submitted Date, Control #, Days, and **View**/**Resubmit** actions; bulk actions are **"Resubmit Selected"**, **"Check Status 276"**, **"Export CSV"**. Submitting generates the 837P/837I, creates an EDI batch (control number), and advances `edi_status`. 277 STC categories map to status: `A0/A1/A2` → acknowledged; `A3–A7` → rejected; `F1/F2` → paid; `F0/F4` → denied; `D0` → pending.

| | |
|---|---|
| **Endpoints** | `POST /api/claims/{id}/submit` (837 generation; returns `ediBatchId, ediStatus, ediControlNumber`); `POST /api/claims/bulk`; `POST /api/claims/{id}/status-inquiry` (276, `practiceId`); `GET /api/workflow/edi-queue?practiceId=`; `POST /api/edi/277`; `POST /api/edi/999` |
| **Validation & errors** | submit while scrub_error present → **`409 SUBMIT_BLOCKED_SCRUB_ERROR`** (response includes `scrubErrors[]`); 277 returns `{ matched, updated, unmatched, unmatchedClaimNumbers[] }` |
| **Test** | **E03** (837P generation/submit) · **F01** (999/TA1 ack; a rejected 999/277CA routes to the exception worklist) · **F02** (276/277 status → `matched=1, newStatus="acknowledged"`) |
| **Gotchas** | a rejected 999/277CA routes to the rejected/exception worklist; control numbers are unique per batch per practice and not reused within 30 days. |

---

## Chapter G — Posting, Statements, Balance & A/R

Post the payer's ERA, statement the patient residual, drive the balance to zero, and work aged claims. Secondary/COB forks here.

### G.1 ERA / payment posting — `/ui/remittance.html`

**Purpose/role:** import the 835 remittance, preview matching, and post payments to claims.

**Operate:** tabs are **Batches**, **Payments**, **Secondary Queue**. Click **"Import ERA (835)"**, select the file, preview matching (Total Claims / Matched / Unmatched), then **"Post All Payments"** (or **"Process Selected"**). A batch moves Received → Posting → Posted → Reconciled; the batch modal has sub-tabs **Claims**, **Adjustments**, **Denials**, **Secondary**. Money math is exact: `Balance = Total_Charge − (Total_Allowed − Total_Adjusted) − Total_Paid − Patient_Responsibility`.

| | |
|---|---|
| **Endpoints** | `POST /api/era` (`practiceId?, payerId, eraContent (X12 835), fileName, totalAmount, paymentMethod, checkNumber, paymentDate`); `POST /api/remittance/{batch-id}/post` |
| **Validation & errors** | **`409 DUPLICATE_ERA`** — "ERA with TRN X has already been imported. Skipping to prevent duplicate payments." (TRN dedup runs *before* any posting); **`409 INVALID_STATE`** — "Only posted batches can be reconciled"; `500` is sanitized (no SQL echo) |
| **Test** | **F03** (835/ERA arrives) · **G01** posting arithmetic exact; re-posting the same ERA is idempotent (duplicate PAYMENT rows detected by `(claim_id, remittance_batch_id)` and skipped, claim totals not re-updated) |
| **Gotchas** | TRN dedup is both in-memory (per-instance) and in the DB (`EFT_TRACE_NUMBER`) — the DB is the real guard; a duplicate ERA hitting a different instance still gets a 409 from the DB check. |

### G.2 Patient statements — `/ui/statements.html`

**Purpose/role:** generate patient statements (charges, payments, adjustments, balances by aging bucket).

**Operate:** **"Generate Statement"** (single patient + date range) or **"Batch Generate"** (min balance + date range). The detail modal shows claim lines and aging buckets (current, 31-60, 61-90, 91-120, 120+, total due); **"Print"** renders printable HTML. Per claim: `patientResponsibility = max(0, billed − allowed + adj − paid)`.

| | |
|---|---|
| **Endpoints** | `GET /api/statements` / `GET /api/statements/{id}`; `POST /api/statements` (`practiceId, patientId, fromDate, toDate`); `POST /api/statements/batch`; `GET /api/statements/{id}/html` |
| **Test** | **G02** residual statement → patient pays → balance zero (**G03** audit completeness + **G04** cleanup close the thread) |
| **Gotchas** | a statement includes only claims whose service date falls inside the requested window — widen the date range if a claim is missing. |

### G.3 A/R aging / follow-up — `/ui/ar-followup.html`

**Purpose/role:** manage aged claims (30+ days), send status inquiries, and route to secondary billing.

**Operate:** stats cards show Total A/R Amount, Claims 90+, Avg Days, Total Claims. Worklists: **"All Aged"**, **"30-59 Days"**, **"60-89 Days"**, **"90-119 Days"**, **"120+ Days"**. The table shows Claim #, Patient, Payer, Service/Submitted dates, Days in A/R, Balance, Status, Aging Bucket, Action Needed, and **View**/**Send 276**/**Add Note** actions; bulk **"Send Status Inquiry 276"** + **"Export CSV"**. Recommended action escalates by bucket (60-89 → "Send status inquiry (276) or call payer"; 120+ → "Critical — escalate to supervisor").

| | |
|---|---|
| **Endpoints** | `GET /api/workflow/ar-followup?practiceId=&agingBucket=&status=` (claims with `status IN (submitted,acknowledged,pending,partial)` and balance>0); `POST /api/claims/{id}/status-inquiry` (276); `PUT /api/claims/{id}` (note) |
| **Test** | **H05** (60-day aged claim lands in worklist with `agingBucket="60-89"` + a status-inquiry recommendation) |
| **Gotchas** | days-in-A/R are recomputed each query and honor the testing-date override; bulk inquiry loops per claim, logging failures without blocking the rest. |

### G.4 Secondary insurance / COB — Secondary Queue in `/ui/remittance.html`

**Purpose/role:** route a claim's remaining balance to the secondary payer after the primary pays.

**Operate:** with the primary claim `paid`/`partial`, payment posted, and balance>0, open the batch's **Secondary** tab, check the eligible claim, and **"Process Selected"** — the claim moves into the secondary queue (`on_hold` → `in_secondary_workflow` → `awaiting_secondary_response` → `secondary_paid`/`secondary_denied` → `completed`). Secondary balance = `(Charge − Primary_Allowed + Primary_Adjusted) − Primary_Paid`.

| | |
|---|---|
| **Endpoints** | `GET /api/secondary-billing`; `POST /api/secondary-billing/create` (`primaryClaimId, secondaryPayerId, practiceId`); `POST /api/secondary-billing/{id}/submit`; `GET /api/secondary-billing/{id}` |
| **Test** | **H04** (primary paid → secondary claim created `on_hold` with correct `secondaryBalance`) |
| **Gotchas** | **do NOT double-click "Process Selected."** Secondary billing has a known idempotency issue (`RCM-SECONDARY-BILLING-NOT-IDEMPOTENT`) — a duplicate secondary INSERT can create an orphan claim and, in the worst case, poison the DB pool (login starts 500ing). After a successful create the status leaves `on_hold` and the button is no longer re-clickable. If you hit the poisoned-pool symptom, see RB-106. Run H04 against fresh seed. |

---

## Chapter H — Denials & Appeals

When a claim is denied, work it: triage on the worklist, manage the denial (with optional AI reasoning), draft and submit an appeal, and track the outcome. Money never posts wrong while an appeal is open.

### H.1 Worklist — `/ui/worklist.html`

**Purpose/role:** the unified, priority-bucketed denial worklist. Roles: `denials.view` (read), `denials.assign`/`denials.appeal` (act).

**Operate:** select practice; stat cards show **"Total in Worklists"**, **"High Priority"**, **"Approaching Deadline"**, **"Assigned to Me"**. Pick a system worklist (**"High Priority"**, **"Approaching Deadline"**, **"Unassigned"**, **"Assigned to Me"**, **"All Denials"**) or save a custom one with **"New Worklist"** (Name, Description, Status/Category/Priority/Min Amount filters). The 11-column table (Claim #, Patient, Payer, Denial Code, Category, Amount, Status, Priority, Deadline) flags deadlines ≤7 days. Bulk: **"Assign Selected"**, **"Create Appeals"**, **"Export to CSV"**.

| | |
|---|---|
| **Endpoints** | `GET /api/denials?practiceId=&status=` (`new|assigned|in_review|appealed|resolved|written_off`); `POST /api/denials/bulk/assign` (`denialIds[], assignedTo, status`) |
| **Validation & errors** | `403 FORBIDDEN` — "Viewing denials requires the denials.view permission"; bulk-assign 403 if lacking `denials.assign` |
| **Test** | **H01** (denial→appeal→overturn worklist entry) |
| **Gotchas** | saved worklists live in `localStorage['savedWorklists_{practiceId}']`; a cache flush loses them (re-create with **"New Worklist"**). |

### H.2 Denials — `/ui/denials.html`

**Purpose/role:** detailed denial management with AI reasoning, action log, and appeal creation.

**Operate:** stat cards show **"Open Denials"**, **"Total Denied Amount"**, **"Appeals Pending"**, **"Recovery Rate"**. Filter by search, **Status**, **Category** (eligibility / authorization / coding / medical_necessity / timely_filing / duplicate / bundling / missing_info), **Priority**. The detail modal has tabs **Details** (CARC/RARC/remark + editable Status/Priority/Assigned To → **"Save Changes"**), **AI** (**"Generate / Refresh Reasoning"** → Root Cause, Recommended Action, Supporting Evidence, Alternatives, Model Details — needs `LLM_REASONER_ENABLED`), **Appeals** (**"Create New Appeal"**), **Action Log** (**"Add Action"** → Type + Note → **"Log Action"**), **Notes**.

| | |
|---|---|
| **Endpoints** | `POST /api/denials/{id}/resolve` (`status, resolvedAmount, resolvedDate, notes, appealId?`); `POST /api/denials/{id}/write-off` (`status, writeOffReason ∈ {uncollectable, patient_responsible, contractual_adj, other}, writeOffAmount, notes`); `POST /api/denials/{id}/draft-appeal` (`appealLevel, useAiGeneration, overrideReason?`); `POST /api/denials/{id}/generate-appeal` (`appealLevel, includePatientDocs`) |
| **Validation & errors** | write-off: reason must be one of the 4 enums, `writeOffAmount` >0 and ≤ deniedAmount; generate-appeal: **`500 AI_UNAVAILABLE`** "LLM appeal generation service is not available" (when the flag is off) |
| **Test** | **H01** (review + AI reasoning + Level-1 appeal) |
| **Gotchas** | AI reasoning is off by default in prod (`LLM_REASONER_ENABLED`); enable per-practice or write the appeal manually. |

### H.3 Appeals — `/ui/appeals.html`

**Purpose/role:** create/manage/track multi-level appeals with AI letter generation and (in UAT) a mock payer queue. Roles: `denials.appeal`, `denials.review`.

**Operate:** stat cards show **"Open Appeals"**, **"Won (30d)"**, **"Amount Recovered"**, **"Success Rate"**; filter by Status (draft / submitted / pending_response / won / lost / partial) and Level. **"+ New Appeal"** picks the denied claim, **Appeal Level** (1 First Level / 2 Second Level / 3 External Review), **Appeal Type** (written / peer_to_peer / external), deadline and template. Write or auto-draft the **"Appeal Letter Content"** with **"✨ Generate with Claude AI"**, then **"Save Draft"** (status draft) or **"Submit Appeal"** (status submitted, queued to the mock payer in UAT). The detail modal offers **Edit** / **Approve** / **View Evidence**.

| | |
|---|---|
| **Endpoints** | `POST /api/appeals` (`denialId, claimId, appealLevel, appealType, submissionMethod, letterContent, deadline, status`) → 201 with `appealNumber` (APL-…); `GET /api/appeals/{id}`; `PUT /api/appeals/{id}/status` (`status ∈ won|lost|partial, responseNotes, recoveredAmount`); `PUT /api/appeals/{id}/final` (`finalLetter`); `POST /api/appeals/{id}/review` |
| **Validation & errors** | `400 BAD_REQUEST` (missing denialId/claimId), `403 FORBIDDEN` (lacks `denials.appeal`), `404 NOT_FOUND` (claim/denial out of practice scope), `500 INTERNAL_ERROR` (DB insert) |
| **Test** | **H01** (submit → queued as mock external tx in `AUDIT_LOG`, status `waiting_for_mock_action`; mock-response → appeal `won`, denial `resolved`) |
| **Gotchas** | submitting flips the denial to `appealed`; an appealed denial is still open money (see the dashboard's two-number behavior in §3.4). |

### H.4 AI features & copilot — `/ui/ai-features.html`

**Purpose/role:** denial-risk prediction, appeal generation, and a biller chat copilot. Tabs: **"Denial Risk Analysis"**, **"Appeal Generator"**, **"Chat Assistant"**.

**Operate:** **Risk** tab buckets claims Low (<30%) / Medium (30-70%) / High (>70%) / Not Scored; **"Analyze All Claims"** scores the batch. **Appeal Generator** lists denials awaiting appeal (**"Generate Appeal"**, **"Create Draft Appeal"**) and generated appeals (**View**/**Edit**/**Approve**). **Chat** requires a selected practice ("Practice context: {name}"), then **"Ask a question about your claims data…"** + **Send**.

| | |
|---|---|
| **Endpoints** | `POST /api/claims/{id}/risk-score`; `POST /api/claims/batch/risk-score`; `POST /api/denials/{id}/generate-appeal`; `POST /api/copilot/chat` (`practiceId, message, sessionId?`) → `{ sessionId, response, toolCalls[], sources[] }` |
| **Validation & errors** | flag-gated; `500 AI_UNAVAILABLE` when the LLM is off |
| **Test** | supports **H01** (AI reasoning + appeal letter); mock mode for DLP |
| **Gotchas** | the **Send** button stays disabled until a practice is selected; rate-limit/token-budget errors → retry after ~60s or write manually. |

---

## Chapter I — Off-spine workflows

### I.1 Kanban board — `/ui/kanban.html`

**Purpose/role:** the patient-to-cash state board and the cross-workflow "what needs doing" hub. Roles: `workflow.view`, `workflow.manage`.

**Operate:** toolbar dropdowns set **View** (All work / Front desk / Clinical team / Provider / Billing / Denial team / Blocked only), **Assigned To**, **Business Date**, **Horizon** (default Next 30 days), **Lane Order** (AI priority / Manual), **Focus** (All / Due now / Stale / Blocked), and **Search**. Summary cards: **"TOTAL WORK ITEMS"**, **"DUE NOW"**, **"STALE (>3 DAYS)"**, **"BLOCKED/GATES"**. Lanes: **"Front Desk Check-in"**, **"Clinical Review"**, **"Provider Signature"**, **"Billing QA"**, **"Denial Management"**, **"Blocked"**. Each card offers **View / Update / Unblock**; the detail panel has Claim Context, Workflow Status, the **"WHY BLOCKED"** panel, an **"AUTOPILOT ARRIVALS"** checklist, and **"RESOLUTION"** (Action + Apply, Priority, Notes). Create manual cards or schedule requests, and apply card overrides (**Override Reason**, **Priority Override**, **Gate Override = force_proceed**).

| | |
|---|---|
| **Endpoints** | `GET/POST /api/kanban/manual-cards`; `PUT /api/kanban/manual-cards/{id}`; `GET/POST /api/kanban/schedule-requests`; `PUT /api/kanban/schedule-requests/{id}`; `POST /api/kanban/card-overrides` (`cardId, practiceId, overrideReason, priorityOverride, gateOverride, notes`) |
| **Gotchas** | an empty blocker panel usually means gates are still evaluating — click **"Refresh"**, wait a few seconds; a stuck "Pending" autopilot arrival can be moved with **Gate Override: force_proceed** (log it). |

### I.2 Audit log & compliance — `/ui/audit.html`

**Purpose/role:** the compliance surface — PHI-access trail, security controls, break-glass review, anomaly disposition.

**Operate:** the MR3 cards (MFA Events, Break-Glass Events, PHI Accesses, Security Failures, Exports) and the **"Security Enforcement Checklist"** summarize posture; the **"PHI Access Anomaly Review & Disposition"** cards offer **Allow** / **Block** / **Review Details**. Search the trail by Date From/To, **Action** (create/update/delete/view/login/logout/export), **Entity Type**, and **User**; rows open the full JSON record.

| | |
|---|---|
| **Endpoints** | `POST /api/audit/search`; `GET /api/audit?dateFrom=&dateTo=&action=&entity=&user=&page=&limit=` |
| **Test** | **G**-phase closure (the whole journey is reconstructable from `audit_log`) |
| **Gotchas** | an empty trail usually means `AUDIT_ENABLED` is off. |

### I.3 Staging / test console — `/ui/staging.html`

**Purpose/role:** the tester's cockpit — seed UAT data, configure mock payers, run the DLP chain, and promote/clear data. Guard: `JAC_ENV ∈ {dev, staging}`; RBAC `org.settings` (admin only).

**Operate:** seed **Core Test Data** (**"Seed Practices"**, **"Seed Patients"** with test-purpose tags, **"Seed Providers"**, **"Seed Payers"**, **"Seed Insurance"**), **Claims Data**, **Mock Configuration** (**"Seed Mock Payers"** with behaviors like *Accept all*, *Deny high-risk*, *Slow payer 30+ days*; **Adjudication Rules**), and **Reference Codes**. In the **Tests** tab pick a batch (DLP Journey, DLP2 Journey, DLP3 Journey, Core Revenue Cycle, …), set Screenshot Mode, and **"Run Tests"**, then read **Results**/**History**. Promote with **"Promote to Production"** and clean up with **"Reset Test Data"** / ClearDLP.

| | |
|---|---|
| **Endpoints** | `POST /api/staging/seed/{practices|patients|claims}`; `POST /api/staging/promote-to-prod` (`practiceId, recordTypes[], mode`); `POST /api/staging/reset-test-data`; `POST /api/staging/clear-dlp/{runId}`; `POST /api/staging/mock-response/{appealId}` |
| **Validation & errors** | `404` if a clear-dlp runId isn't in the audit log |
| **Test** | the cockpit for §8; the DLP chain self-cleans via ClearDLP (RB-105) |
| **Gotchas** | staging endpoints are dev/staging-only; a clear-dlp 404 means the runId format is wrong (e.g. `RB-553-20260614`). |

### I.4 Rules — `/ui/rules.html`

**Purpose/role:** maintain the scrub/validation rule sets. Roles: `org.settings`.

**Operate:** tabs are **"MUE Limits"**, **"NCCI Edits"**, **"Payer Rules"**, **"Timely Filing"**, **"Modifier Rules"**. Import via CSV drag or **"Fetch from CMS"** (MUE/NCCI). Timely-filing examples: Medicare 365/365, Commercial 180-365/60-180, Medicaid 180/180.

| | |
|---|---|
| **Endpoints** | `POST /api/admin/rules/upload/{ncci|mue|timely|payer}` (`filename, content`); `POST /api/admin/rules/fetch/{ncci|mue}` |
| **Validation & errors** | `400 VALIDATION_ERROR` — e.g. "Column 'carc_code' not found in CSV" |

### I.5 Reporting / BI — `/ui/reports.html`

**Purpose/role:** the owner's analytics — A/R-aging trends, top payers, provider productivity, denial-rate-by-code. `/api/reports`. (Operated like any list/filter surface; the deep reports research did not enumerate its on-screen controls, so drive it by its filters and exports.)

### I.6 Reference / config & admin — `reference-codes.html`, `cpt-codes`, `icd-codes`, `medication-codes`, `payers.html`, `providers.html`, `practices.html`, `provider-teams.html`, `organizations.html`, `users.html`, `settings.html`

**Purpose/role:** maintain code sets, payers, providers, tenants, and accounts.

- **Users** (`users.html`) — invite/manage/deactivate, assign roles/practices; filters Role/Status; per-row **[Edit]**, **[Reset Password]**, **[Disable]**.
- **Organizations** (`organizations.html`) — super-admin tenant settings (name, contacts, tax ID, feature flags incl. AI/RBAC, audit retention, key rotation).
- **Practices** (`practices.html`) — name/NPI/tax ID, address, contacts, Clearinghouse (None / Availity / Change Healthcare) + encrypted credentials.
- **Providers** (`providers.html`) — name/NPI/license, specialty/taxonomy, network status, TIN; **Provider Teams** (`provider-teams.html`) groups them.
- **Payers** (`payers.html`) — payer ID/plan/type, timely-filing/appeal deadlines, EDI capabilities (271, 276/277, ERA).
- **Reference codes** (`reference-codes.html`) — CARC, RARC, ICD-10, CPT/HCPCS, Adjustment, Place of Service, Modifier (ICD-10 & CPT link to dedicated pages).
- **Settings** (`settings.html`) — Profile; MFA setup (QR + Base32 key, **"Verify & Enable"**, recovery codes; **"Disable MFA"** needs the password); Notification Preferences.

| | |
|---|---|
| **Endpoints** | `/api/users`, `/api/organizations`, `/api/practices`, `/api/providers`, `/api/payers`, reference reads |
| **Gotchas** | MFA "Secret Not Generated" is a transient RNG failure — retry, else reset and re-invite. |

---

## 6. Branch workflows H01–H06

The off-happy-path forks. Each is short; the deep "how" lives in the chapter named.

| Branch | Forks at | Who / pages | What it does | Deep chapter | Test |
|---|---|---|---|---|---|
| **H01 — Denial → appeal → overturn** | denied 835 (F/G) | denial specialist · `worklist.html`, `denials.html`, `appeals.html`, `ai-features.html` (dashboard Denials tile deep-links to `worklist.html`) | denial → AI reasoner → Level-1 written appeal draft+submit → mock payer response → appeal **won**, denial **resolved**; money never posts wrong | [H](#chapter-h--denials--appeals) | **H01** |
| **H02 — Eligibility failure** | B02 (inactive/error) | front desk · `eligibility.html`, `eligibility-queue.html`, `verify-insurance.html` | inactive/failed coverage surfaces *before* the visit with a readable reason; fix member ID + **"Re-Check"**, or self-pay/reschedule | [B](#chapter-b--insurance-eligibility--scheduling) | **H02** |
| **H03 — No-show → reschedule** | B03 | front desk · `practice-ehr-calendar.html`, `kanban.html` | mark the appointment no-show (no encounter, no auto charge); rebook keeps patient/insurance | [B.4](#chapter-b--insurance-eligibility--scheduling) | **H03** |
| **H04 — Secondary insurance (COB)** | primary paid (G) | biller · `remittance.html` (Secondary Queue) | primary 835 posts → secondary claim auto-created `on_hold` → secondary remit; combined math exact | [G.4](#chapter-g--posting-statements-balance--ar) | **H04** |
| **H05 — A/R aging → auto follow-up** | F (no 277) | biller · `ar-followup.html`, `worklist.html` | aged claim lands in the A/R worklist (`agingBucket` + recommended action) → scheduled 276 inquiry | [G.3](#chapter-g--posting-statements-balance--ar) | **H05** |
| **H06 — eRx controlled / refill** | D | provider/MA · `practice-ehr-encounter.html`, `patient-chart.html` | controlled-substance Rx blocked (`409 EPCS_REQUIRED`, fallback print); pharmacy refill triage → approve → re-transmit | [D.3](#chapter-d--clinical-encounter--chart--prior-auth) | **D07 / H06** |

> ⚠ **COB caution (testers):** secondary billing has a known idempotency issue (`RCM-SECONDARY-BILLING-NOT-IDEMPOTENT`) — a duplicate secondary INSERT can poison the DB pool. Run H04 against fresh seed; **do not double-click "Process Selected"**; if login starts 500ing, see RB-106.

---

## 7. Operator-time contracts (the "looks like a bug but isn't" reference)

### 7.1 Dashboard trust tiers
See §3.3 / §9 — Automation is volatile, the stubs are previews, the composites can mis-render on partial load. Don't file these as bugs.

### 7.2 Hard preconditions (you'll get an error if skipped)
- Activate portal user (A.5) before **Create patient** linkage (A04).
- Eligibility (B02) needs **patient + active insurance**.
- Appointment (B03) needs **patient + provider availability**; in the past → 400.
- Check-in (C01) needs an **upcoming appointment**.
- Sign (D07) needs **≥1 SOAP field + provider + ≥1 diagnosis**.
- Release a critical result (D06) needs a prior **acknowledge**.
- Charge-review approval (E01) needs the encounter **checked_out (signed)**, ≥1 CPT, ≥1 ICD-10, non-future DOS.
- Claim submit is **blocked while `scrub_error`**.
- ERA reconcile needs the batch **posted**.

### 7.3 Error-code contracts (intended behavior)
| Code | Meaning | Where |
|---|---|---|
| **400** | validation (bad dates, out-of-range vitals, invalid ICD/CPT, past appointment) | B.4, D.1, E.2 |
| **403 ACCOUNT_PENDING_REVIEW** | portal login before activation | A.4→A.5 |
| **403 FORBIDDEN** | missing RBAC permission (denials.view/assign, admin role) | H.1, A.5 |
| **409 EMAIL_EXISTS / DUPLICATE_CREATE** | account/patient already exists | A.1, A.6 |
| **409 "Provider is already booked…"** | overlapping appointment (flag-ON) | B.4 |
| **409 EPCS_REQUIRED** | controlled-substance rx without EPCS | D.3 |
| **409 "Encounter already signed" / 422 (empty sign)** | edit a signed note / sign with no content | D.1 |
| **409 RELEASE_GATED** | release a critical result before acknowledge | D.2 |
| **409 SUBMIT_BLOCKED_SCRUB_ERROR** | submit a claim in scrub_error | E.2, F.1 |
| **409 DUPLICATE_ERA** | re-import an already-imported 835 (TRN dedup) | G.1 |
| **422 INVALID_MODIFIER_COMBO / CHARGE_MISMATCH** | scrub warnings | E.2 |
| **500 AI_UNAVAILABLE** | LLM feature off | H.2/H.4 |

### 7.4 Flag-gated behaviors
Vitals range (D01), EPCS (D05/D07), empty-sign and immutability (D07), double-book (B03), RBAC (denials/kanban/admin), and the AI features (reasoning/appeal/copilot) are all flag-gated. Scrub future-DOS and A/R aging honor the **org testing-date override** (`/api/settings/testing-date`). If a contract above doesn't fire on a test target, check the flag/override before filing a bug.

---

## 8. Testing the workflows (the tester's desk)

**The runbook family** ([runbooks/README.md](<runbooks/README.md>), 550s series):

| Runbook | Use |
|---|---|
| [RB-553](<runbooks/RB-553-run-dlp-chain.md>) | **Run the DLP chain** — the master end-to-end (A→G + branches; 10-patient cohort × 3 claims through charge → eligibility → submit → EOB → denial triage → appeal). The single best "does the whole system work" test |
| [RB-551](<runbooks/RB-551-run-uat-suite.md>) | Run the full UAT suite |
| [RB-552](<runbooks/RB-552-run-focused-uat.md>) | Run a focused domain/scenario (test one workflow) |
| [RB-556](<runbooks/RB-556-ui-browser-smoke.md>) | UI/browser smoke (pages load + render) |
| [RB-561](<runbooks/RB-561-dashboard-smoke-test.md>) | Dashboard smoke incl. the Denials tile → worklist deep-link |
| [RB-554](<runbooks/RB-554-uat-dlp-artifacts-report.md>) | Read/report the run artifacts |
| [RB-555](<runbooks/RB-555-author-scenario.md>) | Author a new scenario |

**Data setup:** use the **staging console** (`staging.html`) to seed reference data, test patients (with test-purpose tags), mock payers and claims, or RB-108 (demo reset/reseed) / RB-116 (full restage) for a clean, populated practice. The DLP chain **self-cleans** via ClearDLP (RB-105 → `POST /api/staging/clear-dlp/{runId}`). Run denial-action/write tests against **freshly-seeded** data, never real records.

**UAT execution (staging.html → Tests tab):** pick a batch (e.g. DLP Journey = H01/H02/H03; DLP2 = heart-condition + appeal; DLP3 = secondary insurance + COB), set the toolbar (email `ptm@esarks.com`, password, practice, target URL), choose Screenshot Mode, **"Run Tests"** (a headless browser logs in, drives the pages, asserts status/data, screenshots failures), then read **Results** and **History** (CSV/JSON download).

**Per-workflow smoke (quick map):**

| Workflow | How to smoke | Backing test |
|---|---|---|
| Registration | register → confirm → review → activate; expect 403-before-activation | DLP-A01…A06 |
| Eligibility/scheduling | capture insurance → check → book; expect double-book 409 | DLP-B01…B04 |
| Check-in/copay | check in → collect copay | DLP-C01–C02 |
| Clinical/sign | vitals→orders→results→sign; expect empty-sign 422, EPCS 409, release-gated 409 | DLP-D01…D07 |
| Coding/charge-review | charge-review approve → claim | DLP-E01 |
| Claim scrub + submit | submit; expect missing-dx / future-DOS / payer-rule blocks, then 837 | DLP-E02…E03 |
| Clearinghouse/EDI | 999/TA1 acks → 276/277 status | DLP-F01…F02 |
| Posting/AR | ERA arrives → import + post → statement → zero balance; expect idempotent re-post (409 DUPLICATE_ERA) | DLP-F03, G01…G02 + RB-553 |
| Denials | dashboard Denials tile → `worklist.html`: appeal/won/write-off | DLP-H01 + RB-561 |
| Dashboard | tiles populate, tenant scope, Denials tile → worklist navigation | RB-561 |

**What "pass" means:** the action's status change **persists** (visible on a reload and on the relevant work page / Kanban), the intended **contract** fires (the 4xx/409/422 cases), and **tenancy holds** (another practice is unaffected).

---

## 9. Known issues / expected behavior

These are documented contracts that can look like bugs. Rule them out before filing.

**Dashboard trust tiers (recap of §3.3):**
- **Automation** tile (🟠) is per-instance, **resets on deploy**, not summed, not practice-scoped — jumping numbers are expected.
- The 🔵 preview stubs (Autopilot, RCM Autopilot, Payer Rule Learning) carry a "Read only" pill — not operational data.
- The 🟡 browser composites can mis-render on a partial load — **reload before reporting**.

**Contracts that look like bugs but aren't:**
- **An appealed denial still counts as "Denied"** — on the worklist an appeal moves the denial to *in review* but the dashboard Denials "Denied" stat drops only on Won/Write-off, because an appealed denial is still open money. Not a bug. §3.4.
- **A signed note won't edit** (`409 "Encounter already signed"`) and an empty sign is rejected (`422`) — by design; amend, don't edit. D.1.
- **A critical result won't release** (`409 RELEASE_GATED`) until acknowledged. D.2.
- **A controlled-substance eRx is blocked** (`409 EPCS_REQUIRED`) — EPCS isn't configured; print instead. D.3.
- **A claim won't submit** (`409 SUBMIT_BLOCKED_SCRUB_ERROR`) while in scrub_error — fix the scrub first. E.2/F.1.
- **Re-importing the same ERA is a no-op** (`409 DUPLICATE_ERA`) — TRN dedup, idempotent posting. G.1.
- **A med-status edit's badge doesn't refresh** until reload — the page doesn't auto re-fetch (200 was returned; data saved). D.4.
- **A vitals save shows a transient `409 uidUpdate conflict`** even though the data saved — reload. D.1.
- **`FUTURE_DOS` on a date that looks valid** — the org testing-date override is set; check `/api/settings/testing-date`. §7.4.

**Secondary-billing idempotency caution / RB-106:** secondary billing is **not idempotent** (`RCM-SECONDARY-BILLING-NOT-IDEMPOTENT`). Double-clicking **"Process Selected"** can create a duplicate secondary claim and, in the worst case, poison the DB connection pool so that even login returns 500. Run H04 on fresh seed, never double-click, and if the pool poisons follow **RB-106**.

---

## 10. Reporting a real bug

After ruling out §7 and §9 (expected contracts / trust tiers), capture:

- the **workflow + page** and the exact **on-screen label** you clicked,
- the **practice** selected,
- **expected vs actual**,
- whether it **survives a reload**,
- any **error code / toast text** (the precise string),
- the relevant **record id** (claim #, denial id, patient, appeal #, ERA TRN),
- the **build number** from `GET /api/health` (`provenance.buildNumber`).

File in `ISSUES.md`. For a deploy/infra symptom see the 200s/300s runbooks; for a poisoned-pool 500 see **RB-106**.

---

*Operator & test guide authored 2026-06-14 by AgentDashboard, expanded with verified per-page detail.*

---

## Review Epilog — 2026-06-23

Reviewed 2026-06-23 as part of a full PracticeForceOne wiki truth-pass. Status: UPDATED.

- Classified as a reference (operator + tester how-to / contract) doc, not status. Verified its factual claims against the repo and current ground truth: the secondary-billing idempotency caution (`RCM-SECONDARY-BILLING-NOT-IDEMPOTENT`, RB-106, "do not double-click Process Selected") is STILL OPEN per `jac2024/app/com/claimsprocessing/ISSUES.md` (only a defensive rollback fix landed; the full idempotency fix is still owed by the RCM owner), so §3.5/§6/§9 remain accurate. The Denials in-place drawer removal (commit `84bb7a85a`, 2026-06-16, deep-link to `worklist.html`) is confirmed in git history, so §3.2/§3.4/§3.5 are current.
- The doc correctly tells operators to read the live build from `GET /api/health` (`provenance.buildNumber`) rather than hard-coding a build number, so no stale-build edits were needed (live prod is ~2048; the local counter at build-manifest.json 1618 is a local counter, not live).
- Corrected a duplicated `### 3.3 Trust tiers` heading (the section header was emitted twice back-to-back) — removed the duplicate.
- No body-prose, endpoint, or error-contract drift found; the trust-tier model (Automation 🟠 in-memory/per-instance/resets-on-deploy) matches the known dashboard in-memory-counter caveat. Left the 2026-06-14 "Authored" date as-is (it records original authorship; this pass did not re-verify every page's on-screen labels against the live UI).

## Review Epilog — 2026-07-24

- Live build is now **1943** (gate 251/251 GREEN); the operator guide's endpoint contracts and role-page table remain accurate.
- Several legacy pages listed in the Role → pages table (patients.html, patient-chart.html, encounters.html, eligibility.html, etc.) now have Configurable Form equivalents (540+ CF definitions live). Operators should note the CF launcher at `/ui/cf.html?formType=cf_launcher` surfaces all nav-stamped CF forms — no sidebar edit required.
- The August demo path (Schedule → Check-In → Eligibility → Chart → Encounter → Checkout) is fully CF-backed and gate-proven on build 1943.
- MR2–MR7 DELIVERED; RBAC enforcement ON in production since build 1534; MR8/MR9/MR10 active.
