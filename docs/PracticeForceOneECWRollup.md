---
title: "PracticeForceOneECWRollup"
---

# PracticeForceOne ECW — Program Rollup & Summary

**The one-page consolidated view of the eClinicalWorks (eCW) parity program:** assessment status,
implementation scoreboard, coverage, gaps, and where everything lives. Maintained by AgentECW.

**Last reviewed: 2026-07-24** | Live build: 1943 | Gate: 251/251 GREEN | MR2–MR7 DELIVERED · MR8/MR9/MR10 ACTIVE

**As of 2026-07-22 · reflects build ~1874 (live commit `4f851a5c7`); 3 Cloud Builds WORKING carrying additional ECW backends.** *(Review note 2026-07-24: current live build is 1943 with gate 251/251 GREEN; scoreboard rows below reflect the 2026-07-22 snapshot — AgentECW updates rows on MasterSchedule sync.)*

> 🚨 **PRIORITY: ACTIVE — Phase II (founder directive 2026-07-19): maximize FINDINGS CLOSED PER REUSABLE ENGINE.** ECW screen-level parity is 100% addressed (all 250 CF-assigned findings have a 🟡 minimum working screen). Phase II focus: **deepen 🟡→🟢 per existing engine** before expanding to new screens. See `PLATFORM-ARCHITECTURE.md` and `AGENTS.md`.

> **AgentDB charter (2026-07-22, founder):** ALL backend route/DDL/CRUD work now centralized in AgentDB — absorbs the backend scope previously split across AgentMR9/AgentDLP/AgentMR8/AgentECW. AgentDB pre-stages APIs under the Backend-Ahead-of-CF contract; AgentCF binds UI.

---

## At a glance

- **Assessment: ✅ COMPLETE** — **268 findings** from a 100%-reviewed corpus (**1,778 eCW screens** / 2,078 images ledgered).
- **Implementation: 🟢 13 live · 🟡 255 working screen · ⏸️ 0 deferred · ⬜ 0 not started** (of 268). Screen-level parity 100% addressed (250/250 CF-assigned findings at 🟡+). 3 builds WORKING will add more 🟡 rows on landing.
- **CF configs live:** 57+ zero-deploy CF formTypes (waves 1–15 + AgentUI wave); nav catalog 303 definitions total.
- **eCW breadth captured:** ~85–90% of the everyday patient-visit workflow; ~65–75% of eCW's total screen surface (back-office / BI / interop / healow are the gaps — see below).
- **Owners:** AgentCF (bulk CF implementation) · **AgentDB (ALL backend/DDL/routes — NEW 2026-07-22)** · AgentMR9 (portal, in transition to AgentDB for backend) · AgentDLP (workflow engine + GL) · AgentMR8 (security engine).

---

## 1. Implementation scoreboard (per domain)

Legend: 🟢 deep every-field parity delivered · 🟡 a **live, working screen exists** (a real build-slice, or one of AgentCF's ~28 live configurable screens covering that eCW screen at **demo depth** — parity pending) · ⏸️ deferred post-demo · ⬜ not started. **🟡 = "clickable today, not finished."**

| Domain | Total | 🟢 Live | 🟡 Working | ⏸️ Deferred | ⬜ Not started |
|---|---|---|---|---|---|
| Clinical | 85 | 3 | 82 | 0 | 0 |
| Admin & Security | 34 | 1 | 33 | 0 | 0 |
| Billing / RCM | 31 | 1 | 30 | 0 | 0 |
| Scheduling | 26 | 0 | 26 | 0 | 0 |
| Front Office | 22 | 0 | 22 | 0 | 0 |
| Operations / Outreach / AI | 22 | 1 | 21 | 0 | 0 |
| Documents & Letters | 14 | 0 | 14 | 0 | 0 |
| Rx / Pharmacy | 9 | 0 | 9 | 0 | 0 |
| Portal & Global | 9 | 7 | 2 | 0 | 0 |
| Referrals / Orders / Labs | 16 | 0 | 16 | 0 | 0 |
| **Total** | **268** | **13** | **253** | **0** | **0** |

---

## 2. What's live / working now

- **🟢 Live (13):** ECW-CL-3 (EncounterCF progress note) · ECW-CL-4 (EncounterCF structured HPI) · ECW-CL-12 (ImmunizationsCF) · ECW-BI-31 (Claim StatusesCF) · ECW-SEC-1 (confidential charts, 1834) · ECW-OUT-1 · ECW-GL-1 (1794) · ECW-PT-1 (1788) · ECW-PT-2 (1793) · ECW-PT-4 (1783) · ECW-PT-5 (1793) · ECW-GL-3 (1793) · ECW-PT-6 (1789)
- **🟡 Working screens (57+ CF formTypes live, waves 1–15 + AgentUI wave):** scheduling_cf · check_in_cf (v1.3) · eligibility_cf (v2.5) · patient_chart_cf (v6.5, 26 pages incl. SDOH+benefits) · encounter_cf (v6.3, vitals+meds+quality) · claims_cf · charge_review_cf · patient_registration_cf · referral_cf · authorization_cf · erx_prescriptions_cf · orders_cf (diagnostic_orders_cf) · denial_cf (v1.1, tabbed WQ) · payment_cf · statement_cf · erx_refill_cf · lab_results_cf · remittance_cf · provider_cf · appeal_cf · immunizations_cf · clinical_tasks_cf (tabbed WQ) · documents_cf · telephone_encounters_cf · worklists_cf · patient_alerts_cf · office_visits_cf · recall_registry_cf · care_roles_cf · charge_master_cf · referring_providers_cf · payers_master_cf · practice_locations_cf · letter_templates_cf · users_cf · appointment_types_cf · practices_cf · patient_insurances_cf · notifications_cf · payment_detail_cf · patient_activities_cf · rules_cf · workflow_events_cf · patient_readiness_cf · audit_cf · provider_teams_cf · patient_family_links_cf · patient_comm_prefs_cf · practice_payers_cf · patient_access_groups_cf · appeal_templates_cf · patient_doc_verifications_cf · patient_visit_status_cf · autopilot_executions_cf · scheduled_reports_cf · runtime_logs_cf — PLUS AgentUI wave (15 new formTypes, build `12bd0ce5`): patient_sdoh_cf · patient_charge_details_cf · visit_summary_cf · quality_measures_cf · eligibility_benefit_browser_cf · patient_family_history_cf · telehealth_session_cf · clinical_notes_ext_cf · schedule_enhancements_cf · patient_demographics_log_cf · patient_care_gaps_cf · referral_details_cf · evidence_gaps_cf · documents_cf v1.1 — nav catalog: **303 total definitions**.
- **Backends riding 3 WORKING builds (will become 🟡 on land):** PatientSdohRoutes (ECW-CL-21) · FamilyHistoryRoutes (ECW-CL-79) · PatientChargeDetailsRoutes (ECW-BI-19) · QualityMeasuresRoutes (ECW-BI-30) · VisitSummaryRoutes (ECW-CL-66) · EligibilityBenefitBrowserRoutes (ECW-BI-20/21) · PatientVitalsHistoryRoutes fix (ECW-CL-36–39) · ReferralDirectoryRoutes (ECW-RF-2) · UserFavoritesRoutes (ECW-GL-2) · AutosendRulesRoutes (ECW-AU-1) · SessionLockRoutes (ECW-SEC-6) · WebEncounterOutreachRoutes (ECW-OUT-3). Also: DenialsRoutes WQS fix + vitals column fix (`a2e3a0494`, `a99ddae75`).
- **⏸️ Deferred (0):** none — no ECW rows currently deferred

> The 🟡 count reflects AgentECW's first-pass surface→ECW crosswalk; AgentCF is confirming field-level depth per row. Real coverage will firm up (up or down) once CF signs off. See §6.

---

## 3. Coverage — how much of eCW we captured

Saturation evidence: the final ~180 video frames yielded only 8 new findings; independent sources converged on the same screens. Remaining risk is **whole missing areas, not missed depth** in reviewed ones.

| eCW area | Est. coverage | Note |
|---|---|---|
| Front office & scheduling | ~90% | Official V12 guides near-exhaustive |
| Tel/web encounters, documents, letters | ~90% | Dedicated guides |
| Clinical documentation | ~80–85% | Plan+Objective guides + videos; Subjective/Assessment guides not harvestable |
| Portal (web) | ~75% | healow mobile out of scope |
| Admin & security | ~70% | System-Admin guide is 2014-era |
| Interop / registries / P2P | ~40% | CCDA/Carequality glimpsed |
| **Billing back office** | **~45–50%** | Biller cockpit under-evidenced — **weakest**, rows are a floor |
| Reports / analytics (eBO) | ~30% | eCW BI suite essentially unseen |
| Specialty long tail | ~25% | OB, behavioral health, dental, PT/OT absent |

---

## 4. What we're missing (coverage gaps)

- **Billing back office** — A/R follow-up consoles, collections & statement **batch runs**, denial worklists at scale, refunds/credit-balances/unapplied cash, **month-end/period close**, COB posting depth.
- **eBO — the eCW Business Optimizer / BI & reporting suite** — report builder, dashboard library, scheduled distribution. A whole product barely seen.
- **Regulatory / quality reporting** — MIPS/MACRA, **UDS (FQHC)**, PCMH, HEDIS, eCQM submission.
- **Interoperability / HIE** — CCDA exchange, **Carequality/CommonWell/TEFCA**, DIRECT messaging, external-record reconcile.
- **Specialty modules** — OB/prenatal, **behavioral health**, dental, PT/OT, cardiology, oncology.
- **healow patient-engagement ecosystem** — mobile app, Kiosk, Pay, Open Access self-scheduling, TeleVisits, CCM/RPM (excluded by desktop-only scope).
- **Sunoh.ai** — eCW's flagship AI ambient scribe. Zero coverage.

**Highest-yield source grabs to close these:** (1) an eCW **Billing / eBO user guide** (~30–50 findings), (2) a **results/labs workflow guide**, (3) **healow + Sunoh.ai** docs, (4) an **interoperability/HIE** reference. The ledger pipeline is rerun-safe — new imagery only surfaces new rows.

---

## 5. Priority — the 24-theme Major Release shortlist

The 268 findings cluster into 24 release-scale themes ranked by revenue/workflow impact (full table in [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>)). Top of the list: **Patient Recall/Registry · Referral + pre-auth engine · Eligibility depth · Manual payment posting + guarantors · Availability engine · Problem list + histories · Dx-anchored plan + order sets · Immunizations · Telephone/web encounters · Document management.**

**Fastest ways to move the number (per the 2026-07-16 priority directive):**
1. **Deepen the 44 🟡 working screens to 🟢** — they already render; converting demo-depth to full every-field parity is the highest-yield, lowest-risk work (CF).
2. **Attack the 24 CF-binding rows** — they reuse the configurable-forms engine, so they're the cheapest net-new builds.
3. **Un-defer the 4 portal rows** (MR9) and the ECW-SEC surface (MR8).
4. **Publish CF's surface→ECW crosswalk** — so the 🟡/🟢 numbers reflect reality and we stop under-reporting real progress.

### 5b. Fastest path by reusable engine (2026-07-18 founder directive: findings-closed-per-week, engines over features)

Findings cluster into five reusable engines. Ranked by **findings each engine would close** (open+working rows it subsumes, from the live `MasterSchedule.xlsx` scan) × **workflow-completion value**:

| Engine | Closes (domains) | ~Findings | Owner | Status |
|---|---|---|---|---|
| **Clinical Documentation** (structured hx · vitals · assessment · templates · macros · CDS) | CL | ~82 open | AgentCF / EncounterCF | 🟡 deepening — **the single biggest lever** |
| **Scheduling** (availability · resources · blocks · series · families · waitlists · search) | SC | ~25 open | AgentCF (SchedulingCF/AvailabilityCF live) | 🟡 deepening |
| **Diagnostic Order** (labs · imaging · procedures · referrals · one lifecycle · OrderTransport seam) | RF · OR · LB + CL order-sets | ~16 | AgentCF (§9-DOE, task #23) | 🟡 OR-1/RF-1 live; lifecycle building |
| **Results** (inbox · abnormal flags · ack · provider review · trending · patient notification) | LB results · OPS inbox · CL review | ~10–15 | **UNOWNED** | ⬜ — the inbound half of the order loop |
| **Medication Lifecycle** (ordering · list · reconcile · refill · discontinue · interactions · history) | RX · CL meds | ~9–15 | partial (eRx/Med-promotion live) | ⬜ RX is 0/9 live |

**The two highest-ROI architectural moves that are currently unowned or cold:**

1. **Stand up the Results Engine** *(biggest unowned lever, completes a whole workflow)*. CF's Diagnostic Order Engine sends orders *out*; nothing brings results *back*. A single results inbox — where **labs, imaging, and referral responses** all land, get abnormal-flagged, acknowledged, provider-reviewed, trended, and trigger patient notification — closes the `Order → Result → Review → Notify` tail (Rule 3), reuses across all order types (Rule 4), and helps the nurse (triage), provider (review/ack), and front desk (notify) at once (Rule 5). It plugs into the DOE lifecycle rather than forking a parallel stack. **Needs an owner + a coordinate-with-CF handshake.**
2. **Generalize eRx/Med-promotion into the Medication Lifecycle Engine** — RX is 0/9 live despite eRx surfaces existing; one lifecycle (order→list→reconcile→refill→discontinue→interactions) turns scattered med screens into a closed loop.

**Rule 2 (finish before expand):** 14 rows sit 🟡 working — converting those to 🟢 outranks any net-new screen. **Rule 7 (leverage):** the Clinical Documentation Engine (82 CL rows) is the largest single number to move; the Results Engine is the largest *unowned* workflow to close.

### 5c. Delivery topology — the "Backend-Ahead-of-CF" (BAC) contract (founder-approved 2026-07-18)

**AgentCF owns all UI, so it is the program's serialization point — every finding funnels through it.** The fleet accelerates CF by taking everything that is *not* UI off its critical path: non-CF agents (MR8/MR9/ECW/DLP) pre-stage the backend/engine/data/API so CF's per-finding work shrinks to *bind UI to an existing, tested endpoint*.

| Rule | What it means |
|---|---|
| **Pull-driven** | Build backends for CF's **next-queued** ECW-IDs, in CF's stated order — never speculatively. CF publishes its near-term queue. |
| **Named consumer** | No backend lands without a specific ECW-ID CF will bind. Backend with no consumer = waste. |
| **Deepen, don't fork** | Mandatory pre-check: extend the existing route/table/engine; no parallel stacks. |
| **Contract handoff** | Each backend posts in AGENTS: endpoint (path/params/response/auth-scope) + a behavioral characterize scenario + the ECW-ID(s) it unblocks. |
| **Two-half scoring** | Backend-committed = 🟡; flips 🟢 only when CF's UI lands + deploys + verified. AgentECW tracks the "backend-ready, awaiting CF UI" set. |

This is Rule 4 (reusable engines) as a *team topology*: N engines built in parallel, consumed serially but cheaply; each engine makes the next finding on it nearly free. **Backend-ready, awaiting CF UI:** ECW-LB-1 (results trend/graph), ECW-SEC-5 (audit console API).

### 5d. AgentUI — CF definition editors + per-practice configurability engine (2026-07-19)

Two AgentUI contributions that accelerate the CF-based ECW migration and add a genuine eCW admin-parity capability:

- **Visual CF definition editors (live).** Graphical authoring for the definitions ECW screens are built from, so AgentCF (the §5c serialization point) *binds behavior* instead of hand-writing JSON: the **form CF editor** (`/ui/cf-editor.html`), the **Kanban card + right-panel editor** (`/ui/kanban-editor.html`; the board renders per-lane definitions — legacy-faithful `subtitleFields`), and the **Menu editor** (`/ui/menu-editor.html`; dynamic sidebar). Each reads/writes the same definition store the runtime serves; edits are deploy-free.
- **Per-practice × stage definition engine (backend live 2026-07-19; promote/copy finalizing on the next deploy).** eCW is multi-practice/multi-facility; this scopes **every** definition (forms, menus, workflows, kanban, …) to `practice × stage`: a **Global template**, per-practice **pre-production** (edit) + **production** (runtime serves), a governed **Promote (preprod→prod)**, **copy practice→practice**, and an isolated **testing practice** — one `copyDefinitionSet` primitive over `/api/engine-configs` (`?practice=&stage=` + `POST {action:copy|promote}`). Fully independent per practice (no cross-practice bleed). Kanban + Menu editors already expose the Practice/Stage/Promote/Copy controls; form CF editor + runtime practice-awareness are rolling out.

Maps to **Admin & Security** (practice/facility configuration + staged config deployment) — **@AgentECW to assign ECW-ID(s)** so the generated matrices track it. Design: `PerPracticeDefinitionsPlan.md` (ArchitectsCompanion repo). Owner: AgentUI.

---

## 6. How the numbers are sourced (caveats)

- Counts = most-advanced status per finding across **all `MasterSchedule.xlsx` sheets** (the main tab lags the per-agent sheets, so the unified scan catches MR9/MR8 completions the main tab misses) **+ AgentECW's surface→ECW crosswalk**.
- The ECW-row rollup **structurally undercounts** until AgentCF publishes an authoritative surface→ECW-ID map — CF tracks its 28 live screens under its own IDs (S-1, CI-1, EN-1…), not the ECW-* IDs. Treat 🟢/🟡 as a **floor**.
- "Live" here = the **deep every-field finding**, not a demo sliver.

---

## 7. Where everything lives (document map)

| Artifact | What it holds |
|---|---|
| **This page** | The consolidated rollup / single summary |
| [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>) | Master ledger (268 rows), 24-theme shortlist, nav/chrome inventory, per-row PFO implementation target, top-of-page scoreboard |
| `PracticeForceOneECWMatrix*` (10 pages) | Field-level spec per domain + per-domain Completion Status scoreboard |
| [PracticeForceOneECWDeepDive](<PracticeForceOneECWDeepDive.md>) | Strategic capability comparison (pre-assessment; superseded for screen detail) |
| [PracticeForceOneECWPracticeFusion](<PracticeForceOneECWPracticeFusion.md>) | 3-way comparison (PFO / eCW / Practice Fusion) |
| `MasterSchedule.xlsx` | Backlog + raw per-row status (main tab + per-agent sheets) |
| `PerPracticeDefinitionsPlan.md` (ArchitectsCompanion) | Per-practice × stage definition model + `copyDefinitionSet` (promote/copy/testing-practice) — AgentUI |
| `review-ledger.tsv` (in `Downloads\ecw`) | Evidence — every finding traces to its screenshot files |

---

*Maintained by AgentECW (documentation lane). Implementation owned by the coordinators in `MasterSchedule.xlsx`. Regenerate the scoreboard numbers from the matrix pages' Completion Status sections after each fleet status change.*

---

## Review Epilog — 2026-07-24

- Live build updated to 1943; gate 251/251 GREEN; MR2–MR7 delivered; MR8/MR9/MR10 active.
- AgentDB charter (2026-07-22) centralizes all backend route/DDL/CRUD work — reflected in §5 owners list.
- CF catalog has grown to 540+ definitions; Phase II directive is active (maximize 🟡→🟢 per reusable engine).
- Scoreboard rows in §1 reflect the 2026-07-22 snapshot; AgentECW updates on MasterSchedule sync — do not hand-edit individual counts.
