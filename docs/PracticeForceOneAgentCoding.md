---
title: "PracticeForceOneAgentCoding"
---

# PracticeForceOne — AgentCodingDepartment

**Lane:** AgentCodingDepartment · **Coordinator code:** `CD` · **Opened:** 2026-07-25
**Benchmark product:** [CodingDepartment.com](https://codingdepartment.com/) + **OASIS Optimizer**
**Corpus:** `C:\Users\ptm\Downloads\CodingDepartment\` (29 page captures, 62 raw app-UI assets, `INDEX.md` + `capture-log.json`)

Read [PracticeForceOnePlatformArchitecture](PracticeForceOnePlatformArchitecture.html) first. Every row below is scored as a **platform capability**, not a screen: the deliverable is an engine + definitions, never a hand-built coding page.

---

## 1. What the benchmark is

CodingDepartment.com (est. 2012, HQ Texas; delivery hubs Dumaguete City & Davao City, PH) is an outsourced **home health / hospice coding, OASIS review and billing** operation. What matters to us is not the service business — it is the **software they ship to clients**, which is a Salesforce build:

- **Client-facing portal** — branded *CodingDepartment.com*, nav `Home · All Charts · Patient Analytics · Invoicing · More`, plus `+ Add a Patient` and live chat. Runs on Salesforce Experience Cloud (`codingdepartment.my.site.com/portal`).
- **Internal coder app — "Assessment Auditor"** — Salesforce Lightning, nav `Home · Accounts · Charts · ICD 10-CM · Employee Details · Time Cards · Start Work · Tasks`.
- Four marketed modules over an "Advanced Proprietary OASIS Scrubber": **Profit Maximizer · Error Minimizer · Data Analyzer · Issue Tracker**.

### The one idea worth stealing

Their whole product is a **re-scoring waterfall**. A chart is priced four times and the deltas are shown to the customer as money (`Computer-Hompage-Image.png`):

| Stage | Clinical Group | Comorbidity | Functional Score | HIPPS | Case Mix Wt | Weighted Rate | Δ Revenue |
|---|---|---|---|---|---|---|---|
| Initial Data | MS_REHAB | None | 24 (Low) | 3EA11 | 0.6061 | $1,246.96 | — |
| Dx Confirmation | MS_REHAB | Low | 24 (Low) | 3EA21 | 0.6683 | $1,374.93 | **+$521.56** |
| Updated M Items | MS_REHAB | None | 32 (Medium) | 3EB11 | 0.6889 | $1,417.31 | **+$150.20** |
| Optimized Results | WOUND | Low | 32 (Medium) | 3CB21 | 1.0944 | $2,251.56 | **+$1,555.13** |

That is a **reimbursement-grouper engine with an audit trail per intervention**. PFO has nothing like it in any specialty — the generalized capability is "score an encounter under a payment model, re-score after each documentation change, and attribute the revenue delta to the change that caused it."

---

## 2. Screen inventory (what we have evidence for)

| # | Screen | Evidence | Anatomy |
|---|---|---|---|
| CD-S1 | Patient Analytics / KPI dashboard | `data-analyzer.png` | Dashboard *Key Performance Index* → *OASIS Optimizer: Revenue and PDGM*: **Optimization Report** table (approval month, avg initial case-mix, avg optimized case-mix, sum + avg optimized revenue, record count), **Revenue Difference Rate** bar chart, and Admission Source / Timing / Comorbidity Adjustment / Functional Impairment distribution tiles |
| CD-S2 | Coder chart grid + live validation | `error-v4.png` | ICD-10 row grid (code · description · clinical group · per-row flag checkboxes · add/remove), chart left rail `Communications · Notes & Attachments · Oasis Optimization Report`, blocking dialog: *"The primary diagnosis assigned does not belong to a clinical group and is not billable under the PDGM…"* |
| CD-S3 | Issue Tracker — Open Communications | `issue-tracker-v7-1.png` | Tabs `All Issues · Compliance Issues · Dx Confirmation · OASIS Check · POC Issues · Completed Charts`; filters Issue Type / Sub Type; grid Reply(**Respond**) · **Age** · Patient · Issue Sub Type · Issue Detail |
| CD-S4 | Optimization Report (per chart) | `OasisPreview.png` | Raw Data ‖ Optimized Results ‖ Impact Analysis, changed cells in red, footer = 30-day period wage-adjusted payment delta ($894.43 → $1,306.02, +46.02%) |
| CD-S5 | Revenue Impact Analysis | `Computer-Hompage-Image.png` | The 4-stage waterfall above |
| CD-S6 | Client portal login | `03_Client_Portal/salesforce-portal-login--full.png` | Salesforce Experience Cloud; app behind auth not captured (no credentials, none attempted) |
| CD-S7 | Service catalog + pricing | `02_Services_Workflow/services--full.png` | 8 priced service lines (below) |

**Service lines** (their unit economics, useful for our pricing model): ICD-10-CM coding $25/assessment · OASIS optimization $35/assessment · Plan of Care (485) $10 · QA chart review $5/note capped $75/episode · OASIS transcription $20/episode · billing 3% of revenue (NOA verification, T-status, denials, EFT) · ADR assistance $100/ADR · dental support 3%.

**Claimed EMR integration surface:** Axxess · HCHB · WellSky · KanTime · PointClickCare · Data Soft Logic · Netsmart · Alora.

---

## 3. Gap analysis vs PracticeForceOne

Baseline check run 2026-07-25 against `jac2024/app/com/claimsprocessing` (`server`, `util`, `ui`, `data`): **`HIPPS`, `PDGM`, `OASIS`, `case_mix`, `clinical_group`, `plan_of_care`, `485`, `HHVBP` → 0 files each.** This is greenfield. PFO's existing coding surface is *ambulatory professional* coding only (`encounter_em_coding_cf` + `EMCodingRoutes`: 2021 AMA MDM E&M leveling, CCI edits, modifiers; `cpt_charge_entry_cf`), which does not overlap the home-health post-acute model at any point.

| Row | Capability | Benchmark | PFO today | Status | Platform framing |
|---|---|---|---|---|---|
| **CD-1** | **Payment-model grouper engine** | PDGM: admission source × episode timing × clinical group × comorbidity adj × functional level → HIPPS + case-mix weight → wage-adjusted rate | none | 🔴 GAP | A **Business Rules Engine definition set**, not code. Grouper = versioned rule definitions (CY2025/CY2026) executed by the generic rules runtime. Reusable for RAF/HCC, DRG, RUG-IV. |
| **CD-2** | **Re-scoring waterfall + revenue attribution** | 4-stage Initial → Dx Confirmation → Updated M Items → Optimized, per-stage Δ | none | 🔴 GAP | Generic **"score snapshot" capability**: any scored entity keeps an ordered chain of scorings with the triggering change. Applies to E&M leveling and risk adjustment on day one. |
| **CD-3** | **Assessment instrument runtime (OASIS-E)** | OASIS-E item set, M-items drive payment; transcription service | none | 🔴 GAP | **Definition Repository** work: OASIS-E is a form definition for the CF runtime + an item→rule binding. Do NOT hardcode an OASIS screen. Same runtime must then serve MDS, IRF-PAI, PHQ-9. |
| **CD-4** | **Real-time coding validation** | Blocking dialog on non-clinical-group primary Dx; "autocorrect for coding" | CCI edits only (`/api/em-coding/cci-check`, 10-pair mock seam) | 🟡 PARTIAL | Promote validation from a route to **Rules Engine definitions** with a shared violation contract (severity, blocking vs advisory, remediation text) so every form gets it. |
| **CD-5** | **Coder↔clinician query loop (Issue Tracker)** | Typed queries with **age**, sub-type taxonomy, Respond action, completion tab | none (generic tasks only) | 🔴 GAP | **Task Engine + Workflow Engine** definition: a "documentation query" work item type with SLA aging, typed sub-types, and a reply thread bound to the chart. Directly reusable for prior-auth and denials. |
| **CD-6** | **Coding work queue / chart lifecycle** | All Charts, Start Work, Completed Charts, per-coder Time Cards | kanban work queues exist | 🟡 PARTIAL | Extend the existing work-queue engine with a **coding queue definition**; productivity (charts/coder/day, turnaround) as Dashboard Engine definitions. |
| **CD-7** | **Revenue-integrity analytics** | Optimization report by month, revenue difference rate, distribution tiles | dashboards exist; no revenue-integrity metrics | 🟡 PARTIAL | Dashboard definitions over CD-2's score-snapshot data. No new dashboard code. |
| **CD-8** | **Plan of Care / CMS-485** | POC generation, physician orders, med profile review, pediatric + palliative variants | none | 🔴 GAP | Document/definition composition — a CF definition + orders service, not a bespoke 485 page. |
| **CD-9** | **Post-acute episode billing** | NOA verification, T-status management, EFT tracking, denials | pro-fee claims + denials exist | 🟡 PARTIAL | Extend the claims domain service with an **episode-based billing** model behind the same persistence contract. |
| **CD-10** | **ADR / audit response packet** | $100/ADR: coding review, OASIS analysis, 485 review, QA audit | none | 🔴 GAP | **Package/export capability**: assemble an evidence packet from chart artifacts on demand. Reusable for RAC, payer audits, state surveys. |
| **CD-11** | **Outsourced-coder tenancy** | External coding firm works inside the agency's charts, scoped by Account | RBAC + tenant isolation live (build 1834 Security Engine) | 🟢 LIKELY COVERED | Verify `ProtectedAccess.mayAccess` supports an **external-org delegate** actor before claiming it. |
| **CD-12** | **Regulatory version currency** | 13 posts tracking CY2025 → CY2026 rules, DC Function Score, GG items, MSPB, HHVBP | n/a | 🔴 GAP | Argues for **effective-dated definition versioning** in the Definition Repository — grouper CY2025 vs CY2026 must coexist and be selected by service date. Feeds [PracticeForceOneMR10Table](PracticeForceOneMR10Table.html) governance. |

**Scoreboard:** 7 🔴 GAP · 4 🟡 PARTIAL · 1 🟢 likely covered.

---

## 4. Where this lane should start

The corpus says the same thing three different ways: **the product is a scoring engine with an audit trail, and every screen is a view of it.** So the platform order is:

1. **CD-2 score-snapshot capability** (generic, no healthcare knowledge in the runtime) — unlocks CD-1, CD-4, CD-7 and immediately improves the existing E&M lane.
2. **CD-1 grouper as rule definitions**, effective-dated (CD-12), starting with the PDGM CY2026 set.
3. **CD-3 OASIS-E as a CF definition** on the existing form runtime — proves the assessment-instrument path without a new screen stack.
4. **CD-5 typed query loop** on the Task/Workflow engines — the highest-reuse item on the board (coding queries, prior-auth, denials, ADRs all collapse into it).

CD-8/9/10 are follow-on once 1–3 exist. Nothing here should ship as a bespoke "home health coding screen."

## 5. Scope note for the founder

This benchmark is **post-acute (home health / hospice)**, not family practice or aesthetics. Two readings, and they lead to different work:

- **(a) Capability mining** — take CD-1/2/3/5 as generic platform engines that make PFO better at the coding and revenue-integrity work it already does. *This is how the table above is written, and it is safe to start now.*
- **(b) Market entry** — actually stand up a home-health vertical (OASIS-E, PDGM, 485, NOA billing). That is a new care-setting commitment with its own regulatory surface and is **not** an August-demo item.

Proceeding on (a) unless told otherwise. Nothing in this lane touches the August demo path (Schedule → Check-In → Eligibility → Chart → Encounter → Checkout).

---

## Capture provenance

Headless Chrome (puppeteer-core, system Chrome), 1440×900 @2x full-page + above-fold, product pages also at 430×932 mobile. 29/29 pages captured, 0 failures; 94/94 image assets downloaded (62 unique). Public marketing and login pages only — the authenticated Salesforce app was **not** entered and no credentials were used or attempted. Vendor-published UI images may be idealized composites; treat exact column sets as indicative.

Sources: [CodingDepartment.com](https://codingdepartment.com/) · [OASIS Optimizer](https://codingdepartment.com/oasis-optimizer/) · [Services](https://codingdepartment.com/services/) · [Benefits](https://codingdepartment.com/benefits/) · [oasisoptimizer.com](https://oasisoptimizer.com/)
