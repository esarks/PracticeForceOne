---
title: "PracticeForceOneMR9Table"
---

# PracticeForceOne MR9 Table — Clinic Demonstration Readiness Program

**Last reviewed: 2026-07-24**

**👥 PROGRAM DIRECTIVE (founder 2026-07-10, ALL agents — one engineering org, one objective):** Workflow > Features · Demonstration > Infrastructure · UX > engineering elegance · platform capability over one-off features · work is complete only when it passes behavioral tests + gates, integrates with adjacent lanes, updates the master table, and records deploy evidence. **Lane map:** AgentCF = CF platform + front-office surfaces · **AgentMR9 = patient-facing workflows, Portal Pages, patient experience, workflow polish (+ this readiness program M9-90..93)** · AgentDLP = portal architecture/navigation/paging/security boundaries/presentation + certification · AgentMR8 = production readiness (security/audit/compliance/deploy stability — **the §2 security-hardening carry below migrates to the MR8 lane**; MR9's M9-44/tripwire cargo already shipped stays MR9-verified). Status updates use the 5-question format on AGENTS.md.

**🏥 MISSION (founder directive 2026-07-10): MR9 is no longer a traditional backlog — it is the Clinic Demonstration Readiness Program.** The objective is NOT feature completion; it is that **a real multi-provider clinic performs an entire patient visit on PracticeForceOne during the August demonstration**. Every engineering decision answers *"does this improve the August clinic demonstration?"* — no ⇒ below the line unless absolutely required infrastructure. The 7-step demo path is the architectural spine; secondary workflows are not optimized until the path feels complete, polished, and effortless. Success is measured by whether a physician can sit down, run an entire clinic day, and leave convinced PFO is ready to be their next EHR. **Sections M9-90..M9-93 below are the program; the legacy backlog (§1..§8) survives underneath with its demo-lens triage.**

**Opened:** 2026-07-07 (at MR7 engineering-complete + MR8 mission-complete) · **Status:** ACTIVE — this is the live backlog · **Owner:** **AgentMR9** (assigned 2026-07-07; AgentMR7 stewards MR7 release surfaces) · **Predecessors:** **[MR7 — 🏁 engineering complete](<PracticeForceOneMR7Table.md>)** (2026-07-07) and **[MR8 — 🏁 FORMALLY CLOSED](<PracticeForceOneMR8Table.md>)** (2026-07-07). Every item **not complete** at MR7 close was pushed here (founder direction 2026-07-07); MR7 IDs are preserved in brackets for traceability, and each pushed MR7 row is stamped `⏩ pushed to MR9`. **Every item not complete at MR8 mission-close is also here** (same founder direction, same day): explicit rows in **§8** + [M8-x] IDs on the overlapping §3/§4 rows; the [MR8 table](<PracticeForceOneMR8Table.md>) rows are stamped with their M9 destinations. Full history/detail lives in the [MR7](<PracticeForceOneMR7Table.md>)/[MR8](<PracticeForceOneMR8Table.md>) tables — rows here are deliberately terse.

> **How to read this:** §1 is the founder's own queue (the [Founder Action Checklists](<PracticeForceOneFounderActionChecklists.md>) is its executable form — approve→paste→verify). §2–§7 are grouped by gate: engineering carry, features/vendor, launch-ops, CI/CD residual, toolchain, other-agent tails. **Live risk context:** [Production Risk Register](<PracticeForceOneProductionRiskRegister.md>) (R-numbers cited per row).

**🏥 FOUNDER DIRECTIVE 2026-07-10 (SUPERSEDING) — AUGUST CLINIC DEMONSTRATION:** the August clinic meeting is the highest priority across ALL workstreams. Objective = a real clinic operating its daily workflow on PFO, NOT feature completion. Decision rules: workflow over features · demonstration over infrastructure · every item answers *"does this improve the August demonstration?"* or defers unless *required* infrastructure · think complete clinical scenarios. **PRIMARY PATH: Schedule → Appointment Search → Check-In → Eligibility → Patient Chart → Encounter → Checkout.**
**📊 STATUS AT A GLANCE (AgentMR9, updated 2026-07-12 ~17:45Z · live 1734 · VERIFICATION PHASE):**
| State | Items |
|---|---|
| 🎯 **The acceptance bar** | Founder 07-12: a PFO-NAIVE provider completes a full visit with no workflow break, confusing transition, or unfinished feature. M9-90's demo-surface column certifies against a first-time user. |
| ✅ **CLOSED TODAY (evidence-stamped)** | **F-5 nameless rows** fixed END-TO-END + durable (API split fields live 1731 · stored configs PUT'd · seeds byte-mirrored — all 3 surfaces re-captured w/ full names) · **carry chain LIVE-VERIFIED** (appointment open → ChartCF auto-focus, CDP walk PASS) · **F-9** follow-up layout (live 1731) · **F-10** eligibility list cleared-no-defect · **M9-92 integrity** second-run-zero (cast+dictionaries intact) · **Run 2 headless scope complete** (staff 3 + patient 4 authenticated captures via new portal-session harness mode) · **narration beats 5/5 scripts** · Step-Transition Ledger (6 hops evidenced) |
| ✅ **LIVE + PROVEN (prior)** | M9-12 RBAC fail-safe (1693) · M9-13 portal-MFA reset (1693) · M9-14 headers (1711) · M9-44 tripwire (1713) · CF-65 seed + panel (1715, scheduleStepReady) · CF2-F1 prefill (1715/1717, re-verified visually 07-12) |
| 📜 **M9-91: Script #1 REHEARSED headless (Runs 1+2)** | All 7 step surfaces verified + narration beats written. **Next milestone = the founder's human walk — everything is staged.** |
| 🔶 **Open with owners** | @AgentCF: **F-4** cf-host jargon headers (biggest remaining first-time-user item) · **F-11** list date-range shows UAT noise · Check-InCF "Run Eligibility" next-step action (last sidebar-hop on the spine) · @AgentDLP: kanban-as-search naming · DLPCF2-3/CF1-D3/CF1-D1 re-certs · L4 CDP (fix pattern sent) |
| ⛔ **Waiting on founder** | Script #1 human walk · M9-7 typeahead decision (possibly superseded by slotgrid) · M9-31 PITR residual · vendor signatures (M9-80/24..27) |
| ⏸ **Below the line** | 18 parity rows (07-12 orchestration directive) · all feature rows per 07-10 directives · M9-23 repo surgery PARKED |

**MR9 demo-lens triage (2026-07-10, AgentMR9):**
- **⬆ ACTIVE under the directive:** **M9-44** pool/idle-in-txn root-cause (required infra — a DB blip mid-demo is the catastrophic failure mode; AgentMR9's current item). Founder ⛔ items now demo-relevant: **M9-4** alerting (demo-day safety, ~15 min), **M9-7** Calendar Provider typeahead (**it IS the Schedule step** — re-raised, needs the founder to name the control), **M9-31** backups+restore drill.
- **⏸ DEFERRED until after the demo** (fail the demo question, not required infra): M9-15 tenancy sprints · M9-16 gauges · M9-17 error aggregation · M9-18 tech debt · M9-19 fetch wrapper · M9-20/21/22 features · M9-46 audit replay · M9-30 env split (risky mid-prep) · M9-33 load test · M9-35/36/37 · §6 toolchain. **M9-23 repo surgery explicitly PARKED — no risky git ops during demo prep.**
- **Unchanged lanes:** demo-path UI surfaces = AgentCF's August set ([CF table](<PracticeForceOneCFTable.md>) §9/§10); DLP demo-loop harness = AgentDLP; CI/CD = AgentMR7 (deploy-lock contention is actively costing August builds — CF lost two). Vendor rows (M9-24..27, M9-80..) stay on the founder's signature clock; the demo's Eligibility step runs on the live 270/271 pipeline + manual-verify without them.
- **📱 PORTAL REFINEMENT (founder 2026-07-10, second directive):** Portal work continues **only where it improves the August demonstration**; any patient-facing workflow not in the August scenarios moves **below the line**. In-scope: the Check-In step's actual surfaces (front-desk/kiosk check-in incl. the portal-pages iPad wizard; registration only as demo-intake feed). Below the line as of today: **M9-8** identity proofing · **M9-6** portal-module 401-body unification · the portal halves of **M9-26** (statements/payments/messaging) and **M9-27** (self-scheduling booking rules) — their vendor gates were already unmet; the demo question now defers them regardless. Portal MFA / portal-experience polish beyond the check-in flow: below the line (@AgentDLP's Portal Experience mission filters accordingly).

---

## M9-90 — Demonstration Readiness (the August acceptance checklist)

**🏛 FOUNDER PRIORITY (2026-07-11): ALL DLPCF scenarios run on NEW CF screens.** Certification rule (per [DLPCF1](<PracticeForceOneDLPCF1.md>) §coverage): a step certifies **GREEN-ON-CF** only on its CF screen; classic-surface passes are INTERIM. Screen-gap ownership: **Appointment SearchCF · SchedulingCF · Check-InCF · CheckoutCF = AgentCF** (front-office) · **PortalCF (patient side: onboarding + the iPad pre-check-in packet, with established-patient PREFILL per DLPCF2-3) = AgentMR9** — plan: AgentCF exposes a portal-session auth seam in `cf-runtime.js` (platform capability, their lane); MR9 builds the `/portal/portal-cf.html` host + packet pfo-cf-v1 definitions + `/api/portal/*` bindings on it (wizard pages map to CF pages natively). Certification of every run stays **AgentDLP** (DLPCF1 run 2 portal chapters · DLPCF2 run 1). Defect CF1-D1 (kanban-carried search kills EncounterCF row-click) = @AgentCF, demo-visible.

**🎯 THE PRIMARY SUCCESS METRIC (founder 2026-07-12 — the acceptance bar for every row below):** *a provider who has NEVER seen PracticeForceOne completes an entire patient visit — scheduling through checkout — without a workflow break, confusing transition, or unfinished feature.* The demo-surface column certifies against a FIRST-TIME user: jargon, nameless rows, and dead-end transitions are metric failures, not polish.

**The operational acceptance checklist: every clinical scenario that must work flawlessly.** Grounding (2026-07-10): the **DLP journey chain already proves the full visit lifecycle at the API level** — 41 chained gate scenarios (DLP-A00→G04 + H-series) covering registration→intake→insurance→eligibility(success+failure)→booking→check-in→vitals→meds/allergies→orders→results→eRx→diagnosis→documentation/sign→charge→claim→scrub→837→acks→277→835→posting→statement, self-cleaning and repeatable. **What that does NOT prove is the human-driven screen walk** — the demo layer. Each scenario below needs BOTH columns green before August. Certification = a rehearsed M9-91 script run on the demo dataset, witnessed, with zero improvisation.

| Scenario | API proof (gate) | Demo-surface status (human-driven) | Gap / next |
|---|---|---|---|
| **New patient** (register→review→chart) | ✅ DLP-A01..A05 | 🔨 portal-pages iPad wizard LIVE; staff review flow LIVE | script rehearsal |
| **Existing patient** (recognized, history visible) | ✅ chain re-entry + H03 | 🔨 ChartCF LIVE; kanban patient-carry LIVE | script rehearsal |
| **Insurance update** (+ secondary/COB) | ✅ DLP-B01, H04 | 🔨 chart insurance surfaces LIVE; COB demo data verified live 07-12 (Linda: Medicare P1 + PPO Retiree P2, both active) | script rehearsal |
| **Appointment search** | ➖ (engine live server-side) | ☐ **GAP — ECW-E slice ③ (AgentCF, in flight)** | THE open UI gap on the spine |
| **Schedule / booking** | ✅ DLP-B03/B04 | 🔨 calendar LIVE; slotgrid widget landed (cfr010); ⚠ appointments_cf list renders NAMELESS rows (F-5 casing — CF config fix pending); CF-65 seed LIVE+integrity-verified 07-12 | F-5 config fix (CF/DLP) + M9-7 typeahead (⛔ founder) |
| **Check-in** | ✅ DLP-C01 | 🔨 kanban Patient-Arrived LIVE + portal/kiosk check-in LIVE (patient side verified authenticated 07-12: prefill + dedupe banner); ⚠ staff Check-InCF list nameless (F-5) | F-5 config fix, then script rehearsal |
| **Eligibility success** | ✅ DLP-B02 | ✅ EligibilityCF list VERIFIED rendering 07-12 (F-10 cleared: names resolve Last, First; benefits columns populate) — F-4 header + F-8 wording polish remain | script rehearsal |
| **Eligibility failure** (caught up front) | ✅ DLP-H02 | 🔨 half-verified 07-12: Robert's failed check RENDERS in the list (Completed / Active=false / blank benefits — visually distinct); detail-view walk still to do | detail-view UX walk |
| **Intake** (forms→chart) | ✅ DLP-A06 | 🔨 dynamic forms + review LIVE | script rehearsal |
| **Provider encounter** (room→vitals→document→sign) | ✅ DLP-D01..D07 | 🔨 EncounterCF LIVE (1695+, definition-driven actions) | script rehearsal |
| **Diagnosis** (ICD-10 coding) | ✅ DLP-D06 | 🔨 in EncounterCF (collections) | script rehearsal |
| **Orders** (CPOE→result→ack) | ✅ DLP-D03/D04 | ☐ verify the result-return walk on screens | UX walk |
| **Medication** (reconcile + eRx) | ✅ DLP-D02/D05, H06 | 🔨 eRx orders in EncounterCF (cf005); allergies+NKDA LIVE | EPCS stays simulated (M9-83 vendor) |
| **Checkout** | ✅ **VERIFIED 2026-07-10: gap CLOSED** — `POST /api/patient-payments` live since build 1589; DLP-C02 records the TOS copay (201 + id + amount asserted); only the scenario TITLE still says "pinned" (stale text, @AgentDLP) | 🔨 payments UI exists; ⚠ CheckoutCF list nameless (F-5); AgentCF checkout sliver queued | F-5 config fix, then script rehearsal |
| **Payment** (copay TOS + ERA posting) | ✅ patient side C02 (see Checkout) + ERA side DLP-F03/G01 exact-money | 🔨 same surfaces | script rehearsal |
| **Claim generation** | ✅ DLP-E01..E03, F01/F02 | 🔨 claims UI LIVE | script rehearsal |
| **Dashboard updates** (the day reflected live) | ✅ counters proven (Dashboard C1 19/19) | 🔨 cockpit LIVE (Act/Watch/Context) | demo-relevant work only (per coordination map) |

## M9-91 — Demonstration Scripts (rehearsable, zero improvisation)

Scripts live in **[PracticeForceOneDemoScripts.md](<PracticeForceOneDemoScripts.md>)** — each defines Patient · Provider · Insurance · Reason for visit · Expected workflow · Expected system behavior · Expected outputs. Status: **Script 1 (established patient, full visit) DRAFTED 2026-07-10**; planned: #2 new patient w/ portal registration, #3 eligibility-failure recovery, #4 insurance change + COB, #5 multi-provider day (the full clinic-day finale). Rehearsal ledger (per script: last run date, build, result, friction found) lives on the same page. A script is DONE when it runs twice consecutively on a freshly seeded practice with zero improvisation.

## M9-92 — Demonstration Data Quality (feels like a real practice)


**Integrity check 2026-07-12 (live 1726):** idempotent panel re-run = second-run-zero on every counter (dictionaries: 7 visit types / 8 claim statuses / 8 providers-with-availability / scheduleStepReady:true / 23 CF definitions; panel: Margaret chart+prior encounter+problems+allergies+meds+vitals, Robert failed-eligibility check, Linda, Tue 2026-07-14 10:00 appointment) — demo staging verified demo-ready. Cast contact info (email+cell) confirmed rendering-ready. Patient-side CF2-F1 prefill + T5 duplicate-submission banner visually confirmed on the authenticated check-in capture.
Everything on screen must read like a real medical practice — no placeholders, no `uat-*@test...` artifacts visible, no "Test Patient". Seed base = the CF-65 pack (dictionaries + availability) + the demo practice dataset. Audit ledger:

> **✅ M9-92-POLLUTION (RESOLVED 2026-07-14 via founder-approved Option A):** demo moved to a dedicated CLEAN practice **Coastal Internal Medicine `160e14fa`** (cast+dictionaries only, verified 3 patients/3 realistic appts, zero junk; Margaret `fd2e9eb5`, appt Tue 07-21). Non-destructive: no practice created (repurposed an empty one), no live data purged. `Bay Area Cardiology a7e14cc0` stays the gate's polluted throwaway (list[0]). Durable half handed to MR8/DLP: pin `UAT_PRACTICE_ID=a7e14cc0` in the gate so it never targets Coastal (no guaranteed ORDER BY on /api/practices). ORIGINAL FINDING (kept for history): **⛔ FOUNDER DECISION:** the demo practice **Bay Area Cardiology** (`a7e14cc0`) is heavily polluted with test fixtures. Measured live: **patients 40/56 (71%) are obvious junk** (MedProbe / MedPromo / UATSeed / Lisinopril#### / RiskUnsigned / GenderGuard), **appointments 127/147 (86%) cancelled + 106/147 UAT-reason**, **encounters ~95 unsigned "UAT-CF-*/UAT-CHAR-*" leftovers**. Any raw CF list a presenter opens (Patients, Encounters, and the Schedule/Check-In lists per F-11) shows a wall of fake data mixed with the real cast. **Root cause:** the gate/characterization suite targets Bay Area Cardiology (the harness's first practice) and many scenarios don't self-clean (unsigned encounters + persistent scale/med-probe seeds), so a one-time purge would re-pollute on the next gate run. **Durable fix (recommended, non-destructive): a DEDICATED clean demo practice** seeded with only the cast + a realistic roster, with the gate/characterization repointed at a throwaway practice — NOT the demo practice. Alternative (destructive, needs approval + doesn't durably hold): scoped purge of test fixtures. MR9 will NOT delete live data unilaterally; awaiting founder decision. Directly reduces demo-day failure risk (scope-guard 07-14).

**No-regression pass 2026-07-14 (live 1765):** after the med-promotion (CF-16, signed-eRx→Medication List + Start Date column), ChartCF eRx full-order upgrade, and CF new-record patient-carry deploy, re-captured chart_cf + encounter_cf — **NO REGRESSION** (F-4 clinical titles "Patient"/"Encounter" hold, F-5 columns intact, demo cast present with contact info). CF-16 med-promotion gate-certified green against the candidate. Artifacts: `build/dlp-artifacts/mr9-noregress-1765/`.

| Domain | State | Notes |
|---|---|---|
| Practice/clinic identity | ☐ audit | real-looking name, address, NPI, phone; not "UAT Practice" on any demo screen |
| Patients | ☐ audit | realistic names/DOBs/addresses; diverse panel; NO test-tagged rows on demo screens |
| Providers | ☐ audit | real-looking names + credentials + NPIs; match availability seed |
| Schedules | 🔨 CF-65 seeded (recurring) | book realistic appointment mix for demo week (M9-91 scripts drive this) |
| Insurance/payers | ☐ audit | recognizable payer names, plausible member IDs, copay/deductible realism |
| Diagnoses/meds/allergies | ☐ audit | clinically coherent per patient (age/sex/problem-list consistency) |
| Vitals/encounters | ☐ audit | in-range histories; the Vitals History section must look like a real chart |
| Billing/payments/messages | ☐ audit | claim history at realistic ages/statuses; statements with plausible balances |

## M9-93 — Demonstration Polish (commercial product, not engineering project)

Per-screen review of every demo-path surface: loading states · success messages · error wording · empty states · button consistency · icons · alignment · typography · visual consistency · workflow smoothness. Method: each M9-91 rehearsal doubles as a polish pass — every friction observed gets a row here (screen · issue · severity · owner · fixed-in). UI surfaces are mostly AgentCF's (CF definitions make polish config-speed) + kanban/dashboard lanes; MR9 files and tracks, owners fix. Ledger opens at the first rehearsal.

**Friction ledger (M9-93) — opened 2026-07-11 by the first think-like-the-patient walk (live 1715, static+DOM audit of Margaret's path):**

| # | Screen | Friction ("what should this user do next?" test) | Severity | Owner | Status |
|---|---|---|---|---|---|
| F-1 | Portal home (index.html) | Page leads with ACCOUNT PLUMBING, not the visit: a technical "signed in with patient portal credentials... separate from PracticeForceOne" sentence, email-verification status line + Verify button, and "Checking insurance information..." all sit ABOVE the next-appointment/check-in action. Margaret's what-next answer should be first: "Your visit is Tuesday 10:00 — Start Check-In." | HIGH (demo-visible) | AgentMR9 | **FIXED + LIVE on 1772** (`9ba105f4f`, ancestor-verified) — visit-first hero, Start Check-In primary, plumbing to a side card, prefill promise in copy; ids preserved. Ledger corrected 07-15: was stale "awaiting deploy". |
| F-2 | Portal login (login.html) | Three entry paths on one page (Front Desk Code / Sign In / New Patient Intake) — order is right (code first) but the page never SAYS who each path is for; a first-time kiosk user must infer. One line of role copy per block ("Checking in for a visit? Use the code from the front desk.") | MED | AgentMR9 | **FIXED + LIVE on 1772** (`84d2b8337`, ancestor-verified) — walk found the code+intake blocks already carried role copy; the CREDENTIALS block had none — "Portal Account Sign-In" heading + who-is-this-for line added. Ledger corrected 07-15: was stale "awaiting deploy". |
| F-3 | Check-in (check-in.html) | Clean: clear title, loading state, single Send action (+ DLP's any-page Send). No friction filed. | — | — | VALIDATED |
| F-4 | EVERY cf.html screen (host header) | Page title shows the host name ("RecordCF") or raw form name instead of the clinical task, and the subtitle is engineering-speak: "Configurable Forms: this page is rendered entirely from a JSON configuration…" — on the receptionist's Schedule screen, the provider's chart, everywhere. Also "Rendering with: … v1.1 (default)" metadata visible. The clinic sees the plumbing, not the task. | HIGH (demo-visible, every CF screen) | AgentCF/AgentDLP (host) → **fixed by MR9** | **FIXED + LIVE on 1747** (`56a4c037e`, announce-first): page title = the active config's clinical formName (?label= still wins), jargon subtitle deleted; verified by re-capture — schedule opens as "Appointment", not "RecordCF". Every current + future CF screen inherits. |
| F-5 | SchedulingCF landing (appointments_cf) | (a) Schedule step lands on a RECORD LIST, not the slot grid (slotgrid widget landed cfr010 — landing-view question remains). (b) Blank-row ROOT CAUSE DIAGNOSED (MR9, 07-12): list `search.columns` use snake_case fields (`patient_last_name`,`start_at`,`provider_last_name`,`visit_reason`) but `/api/appointments` returns camelCase (`patientName`,`startAt`,`providerName`,`visitReason`) — only `status` matches, so every appointment renders as a bare status chip with NO patient name. API returns combined `patientName`, so the Last/First split columns can't populate at all. Zero-deploy config fix possible, but appointments config is DLP/CF's active slotgrid surface — they own the edit. | HIGH — SCOPE WIDENED 07-12: blast radius = ALL THREE appointment-backed configs (appointments/check-in/checkout defaults) i.e. demo steps 1, 3 AND 7 all render nameless rows. Verified per-API: /api/appointments returns camelCase; /api/patients, /api/authorizations, /api/payers-master return snake_case (those configs fine). One config fix pattern, three files. | AgentCF + AgentDLP (active surface) | **FIXED END-TO-END 07-12 ~15:00Z**: MR9 applied the stored-config column fix (read-modify-write on the CURRENT configs — CF's slotgrid/consolidation edits preserved; rollback snapshots in scratchpad f5-rollback/), verified by re-capture: schedule list renders the full cast (Chen Margaret / Vance / Okonkwo with When/Type/Provider/Reason). Residual for @AgentCF: mirror camelCase columns into the SEED files so a reseed doesn't revert, + F-11 |
| F-8 | EligibilityCF list header | Button "Batch Refresh Stale (270)" — X12 jargon on a front-desk screen; reads like "270 stale checks" next to an EMPTY list ("No eligibility checks for this practice"). Suggest "Re-check outdated coverage" (keep the count only if it's a real count scoped to this practice). Credit: the empty state + "Click + New to run one" CTA is exactly right; EncounterCF's empty state likewise. | LOW-MED (demo step 4 polish) | AgentCF | OPEN — filed from rehearsal run 1 review completion |
| F-9 | Portal follow-up questionnaire | "How are you doing?" labels+inputs flowed INLINE on shared lines (renderer appended bare label/input without the portal-field block wrapper every other portal form uses). Patient-side capture surfaced it. FIXED same cycle — each question now wrapped in div.portal-field. | MED (patient-facing polish) | AgentMR9 | FIXED — **LIVE on 1731** (adccd6f2f in promoted build; portal-field wrappers ship) |
| F-10 | EligibilityCF list (step 4) | INVESTIGATED + CLEARED 07-12: run-1 capture showed an empty list, but re-capture proves the surface correct — 5 checks render, patient names resolve "Last, First" via lookup, Robert Vance's seeded FAILED check visible (Completed / Active=false / blank benefits — right for a failed 271, Script #3 setup intact). The empty screen was pre-data timing (the Verified rows came from the later gate run), not a defect. Step 4 demo surface = WORKING (F-4 header + F-8 wording remain). | — | AgentMR9 | CLEARED — no defect |
| F-11 | Appointments/Check-In/Checkout list defaults | The list URL spans 2000–2099, so a first-time receptionist sees YEARS of cancelled UAT fixtures before today's schedule. **STRENGTHENED 07-14 (live 1761 no-regress capture):** worse on **Check-InCF** — its placeholder says "Search today's schedule…" but the list shows **85 rows / 2 pages** dominated by 2000-01-15 UAT-PASTDATE + weeks of "Anderson Lisa … Cancelled" fixtures. On demo step 3 that reads as broken. Fix (config-level, zero-deploy): list default = today/this week + hide cancelled. | **HIGH (demo step 3, first-time-user; "today's schedule" mismatch)** | AgentCF (config defaults) | OPEN — strengthened from 07-14 no-regress capture |
| F-6 | ChartCF roster (demo data) | Bay Area SAMPLE roster shows empty Cell + Email columns. Verified: the M9-92 demo cast (Margaret/Robert/Linda) is already seeded with email + phone_cell — the demo practice renders full columns; the blank screen was the wrong-practice context (see F-7). Residual: CF may want em-dash rendering for empty cells generally. | LOW (demo cast unaffected) | AgentCF (empty-cell render polish) | AMENDED after seed verification — demo-side closed |
| F-1b | Portal home hero (concrete visit) | F-1 made the hero visit-FIRST but the copy stayed GENERIC ("Here for a visit?") — it never showed the patient's ACTUAL next appointment. The ledger's own F-1 target was "Your visit is Tuesday 10:00 — Start Check-In." Fix: `renderPortalNextVisit()` fetches /api/portal/appointments on the home page and renders "Your next visit: <date/time> with <provider> — <reason>" above the check-in CTA (reuses formatAppointmentDate for identical tz behavior; fails silent to generic copy). | MED (first-time-patient "what next?", demo portal step) | AgentMR9 | **LIVE on 1774** (`6f4724298`, ancestor of live `d62ae5ca5`) — verified: deployed portal.js has `renderPortalNextVisit`, index.html has the `portalNextVisit` hero + token `nextvisit01`; API returns Margaret's appt 507a2591 (Tue 7/21 Dr Okafor) so the hero populates "Your next visit: …". Rode the DLP lane's 1774 deploy after MR8 unblocked the gate (`34830aad9` made CF-GOV G-1 observational). |
| F-7 | Practice context for the demo | RESOLVED-INVALID (07-12): verified via /api/patients that the demo cast (Margaret Chen et al.) lives IN Bay Area Cardiology (a7e14cc0) — the capture practice was correct; the empty schedule was the F-5 field-name mismatch, not wrong practice. Residual kept: rehearsal protocol now names the demo practice explicitly. | — | AgentMR9 | CLOSED (invalid; folded into F-5) |


---

## §1 — Founder actions & decisions (the ⛔ queue — executable checklists exist for A-items)

| MR9 [MR7] | Item | Gate / state | Checklist |
|---|---|---|---|
| **M9-1 [M7-10 Ph2 · R2]** | **Disarm destructive staging ops in prod** — flip `ALLOW_DESTRUCTIVE_STAGING_OPS=false` (+ config sync, AgentMR7 does the follow-through). Sequence AFTER backups (M9-31). | ⛔ founder window | [A3](<PracticeForceOneFounderActionChecklists.md>) |
| **M9-2 [M7-18 rem-a]** | **Staff MFA enforcement flip** — `MFA_LOGIN_ENFORCEMENT_ENABLED=true` (enrolled-only challenged; code live since 1665). | ⛔ founder window | [A4](<PracticeForceOneFounderActionChecklists.md>) |
| **M9-3 [CICD item 7]** | **Deployment-model decision** — Option A cloud-only (recommended) vs Option B dual-lane. Unblocks M9-40/41/43. | ⛔ founder decision — [memo](<PracticeForceOneDeploymentModelDecision.md>) | [A5](<PracticeForceOneFounderActionChecklists.md>) |
| **M9-4 [R3 · CICD item 6]** | **Alerting** — uptime check on `/api/health` + pager channel + build-failure alert. The register's cheapest critical gap. | ⛔ founder (~15 min) | [A1](<PracticeForceOneFounderActionChecklists.md>) |
| **M9-5 [R-conn]** | **DB connection-ceiling decision** — tier bump (recommended at first customer) vs `max_connections` vs stay. | ⛔ founder decision | [A6](<PracticeForceOneFounderActionChecklists.md>) |
| **M9-6 [M7-4]** | **401-body call for the final 9 optional-auth modules** — unify to canonical vs preserve as intentional exclusions; then the small implementation. | ⛔ founder call → ~hours of eng | — |
| **M9-7 [M7-5]** | **Calendar Provider dropdown → searchable typeahead** — needs founder to name WHICH provider control + confirm typeahead (free text breaks appointment creation). | ⛔ founder clarification → eng | — |
| **M9-8 [M7-90]** | **Patient identity proofing without phone/email** (DOB + clinic-issued single-use PIN, tiered assurance; full design + guardrails in [MR7 §8](<PracticeForceOneMR7Table.md>)). | ⛔ founder/product + compliance sign-off → build | — |

## §2 — Security & architecture engineering carry

| MR9 [MR7] | Item | Gate / owner |
|---|---|---|
| **M9-10 [M7-15 Ph2 · R8]** | **SecurityFilter enforcement flip** — after AgentDLP's T2c shadow-corpus rebuild + T2d flip memo (structural `/api/*` coverage live since 1682). | AgentDLP prereq → ⛔ flip approval |
| **M9-11 [M7-15 Ph3]** | Per-route **body validation** on non-clinical routes after regex tuning (never central — single-read stream + clinical/EDI false-positives). | eng, after M9-10 |
| **M9-12 [M7-17 rem]** | ✅ **CODE-COMPLETE `3c86a9157`** (2026-07-07, AgentMR9; rides next deploy) — RBAC **code-default ON**: missing/empty `RBAC_ENFORCEMENT_ENABLED` now = ENFORCED in both `PermissionHelper.rbacEnforced()` + `RbacGate.enforcingOn()` (prod already ON since 1534 → zero live change; env-wipe can't disable auth anymore; `=false` still disables, `RBAC_KILL_SWITCH` intact). Key unification resolved by **deleting** the zero-caller `SecurityHelper.script` (the divergent colon-key matrix) — one matrix remains. | ✅ AgentMR9 — **LIVE on 1693** (ancestry-verified; behavior-preserving on prod, env already ON) |
| **M9-13 [M7-18 rem-b]** | ✅ **DONE — LIVE + PROVEN on 1693** (2026-07-07, AgentMR9, `03c9eda41`) — **staff-side portal-MFA reset**: `reset-mfa` action in AdminPortalUsersRoutes (deletes `user_mfa` row via org-scope gate, revokes sessions, `portal.mfa.reset_by_staff` audit, reply-checked) + Reset MFA button on portal-users. Runtime proof: gate scenario step 8 PASS on live 1693 ("staff reset-mfa deletes enrollment, idempotent second call, direct login OK"). | ✅ AgentMR9 — complete |
| **M9-14 [M7-1x rem]** | ✅ **CODE-COMPLETE `64f2df566`** (2026-07-08, AgentMR9; rides next deploy) — security-headers sliver CLOSED: `addSecurityHeaders()` added to all 24 remaining self-CORS modules (11 portal + 13 staff/public incl. the anonymous auth surface); every route module now gets headers via N2 preamble or inline call. | AgentMR9 — verify headers on next deployed build |
| **M9-15 [M7-62 + M7-61(b2)]** | **Tenant-scope structural enforcement** — `TenantedQuery`/auto-inject layer (or linter) so a forgotten `org_id` can't leak cross-tenant. HIPAA-grade. | eng, ~2–3 sprints |
| **M9-16 [M7-20]** | In-app **pool/error/latency gauges** at `/api/monitoring` beyond the existing `dbHeal` block. | eng |
| **M9-17 [M7-82]** | **Error aggregation + request-ID correlation + post-promote auto-rollback** (Cloud Error Reporting; richer than M9-16). | eng |
| **M9-18 [M7-22]** | Tech debt: dead `_q` AUDIT_LOG JEO · 22.5k-line `CopilotOrchestrator` refactor · ephemeral file logging. *(cache-busting sub-item was delivered — `bust-cache.ps1`)* | eng, low |
| **M9-19 [M7-64 rem]** | **Shared `api()` fetch wrapper + date helpers** — 552 fetch sites / 193 token reads across 40 pages. Deliberately deferred pre-launch (refactor risk ≫ value); the escapeHtml half shipped in MR7. | eng, MR9-sized |
| **M9-46 [M7-72 residual · R15]** | **Audit-fallback replay job** — reconcile `[AUDIT-FALLBACK]` Cloud Logging lines into `AUDIT_LOG` (the log-sink half is the founder R15 one-paster). | eng (MR8's M8-23 shipped the capture side) |
| **M9-44 [R5]** | 🔧 **TRIPWIRE SHIPPED, RECLAIM WITHDRAWN** (2026-07-10, AgentMR9) — root cause of the 07-04 finding holds (leaked autocommit-off on the shared JAC conn + heartbeat SELECT 1 = eternal txn; heals blind to it). ① idle-txn tripwire + `dbHeal.idleTxnHeals` = KEPT (`0a6a2883d`, inert, JAC-conn-only). ② reclaim-on-heartbeat = **WITHDRAWN** (`e5aebfed4`) after gate red `fb646d78` (DLP-D07 note-sign HTTP-0 hang): the 5s reclaim yanked the eligibility-scheduler's legitimately-held 5-8min pooled lease → two owners, one socket. **Filed to the MR8 production-readiness lane: reclaim must close-not-reuse (latent on the pressure path too) + scheduler per-unit connections.** Safe-canary worked: candidate never took traffic. | AgentMR9 — verify tripwire counter on promote |

## §3 — Features & vendor remainder

**In-house (ungated):**
| MR9 [MR7] | Feature |
|---|---|
| **M9-20 [M7-25]** | Cross-coverage, handoff, **team inbox**, delegation rules, team-based Kanban views |
| **M9-21 [M7-26]** | Provider **credentialing** — payer enrollment + license/DEA/NPI tracking with expiration alerts |
| **M9-22 [M7-27]** | Owner **BI dashboards** — trends by provider/payer/location/visit-type + scheduled/emailed delivery |
| **M9-23 [M7-28 + M7-78]** | **Stop committing build artifacts + evict ~1.5 GB dead weight** — `.gitignore **/*.class` + `git rm --cached` (~1,245 files) + jacBuild8/13/23 trees, `.bak/.new`, committed node_modules, bundled JDKs. *Repo-wide/risky git op; now safer post-C1.3 (both lanes compile hermetically).* |
| **M9-28** | **ConfigurableForms → CF lane, ACTIVE** (founder direction 2026-07-07; renamed CR→CF 2026-07-08) — peeled off into the master **[CF table](<PracticeForceOneCFTable.md>)**, owned by **AgentCF** and executing fast: EncounterCF + Patient ChartCF live on a generic `cf-runtime.js` (zero engine code for form #2), collections, typeaheads/computed fields, definition-driven actions — deployed+proven through build 1698. Visibility-only here; do not duplicate. |

**Vendor/contract-gated** *(the single biggest "complete app" gap — can't bill/prescribe/collect on mocks; execution per the [Vendor Activation Playbook](<PracticeForceOneVendorActivationPlaybook.md>); R12 shakeout + R13 blind-index switch are hard checklist items):*
| MR9 [MR7] | Feature | Gate |
|---|---|---|
| **M9-24 [M7-29 · M8-1/M8-2/M8-3]** | Real clearinghouse/payer integration (837/835/270-271/276-277/278) replacing mock transports — **the revenue keystone**; activation build ≈2–3 wks after credentials ([Revenue Activation Plan](<PracticeForceOneRevenueActivationPlan.md>)); **hard gate M9-86 (R13) before eligibility/ERA matching goes live** | Clearinghouse contract + sandbox |
| **M9-25 [M7-29b]** | Direct secure messaging / e-fax for referrals & results, delivery tracking + retry | Direct/eFax vendor |
| **M9-26 [M7-29c · M8-5/M8-6]** | Portal statements + **real payments** + secure two-way messaging (Stripe path + e-statements scoped in the playbook: ~2–3 wks combined) | Payment processor |
| **M9-27 [M7-29d · M8-40/M8-41]** | Two-way patient **texting** (compliant vendor + consent) + reminders SMS channel (email channel already live) + portal self-scheduling booking-rules config | Texting vendor + consent; email off personal Gmail = R7, same package; A2P 10DLC clock 1–3 wks |

## §4 — Launch-readiness / operations

| MR9 [MR7] | Item | Note |
|---|---|---|
| **M9-30 [M7-30 + M7-10 Ph3 + M7-74]** | **Environment split** DEV→PREPROD→PROD: separate Cloud Run + Cloud SQL, `JAC_ENV=production`, staging/mock routes OUT of the prod binary, `PORTAL_TEST_MODE` off in prod (gate-coupled — the deploy gate reads inline verification codes; rehome its scenarios or read codes out-of-band). | before first customer |
| **M9-31 [M7-31 · R1]** | **Backups/PITR + rehearsed restore** (M8-12 drill). | ⛔ founder switches ([A2](<PracticeForceOneFounderActionChecklists.md>), MR8's package) |
| **M9-32 [M7-32]** | UAT data-hygiene generalization (fixture tagging, staging sweeper beyond the journey domain). | partially delivered (ClearDLP/run-id) |
| **M9-33 [M7-33 · M8-11 · R10]** | **Data-tier scaling + load test** (tier-up pairs with M9-5; 10× load, p95 < 2s) during first-customer pilot. | eng + pilot data |
| **M9-34 [M7-34]** | **Migrations in the pipeline** — `schema_migrations` ledger; deploy applies or refuses; inline-DDL burn-down (ratchet exists). | eng |
| **M9-35 [M7-35]** | Local/offline stack — docker-compose (app+Postgres+seed); full suite from fresh clone < 30 min. | eng |
| **M9-36 [M7-36]** | Runbooks + API reference continuation (endpoint inventory v0). | opportunistic |
| **M9-37 [M7-37]** | Continuity & open-source prep — identity de-monopolization, JAC handbook + 2nd maintainer, OSS prep. | ⛔ founder |
| **M9-38 [M7-38]** | Commercial readiness — flag graduation (⛔), tenant onboarding productized, pilot-clinic runbook (see MR8's [Go-Live Checklist](<PracticeForceOneFirstCustomerGoLiveChecklist.md>)). | ⛔ founder + eng |
| **M9-39 [M7-71 rem · M8-13 · R4]** | **2nd-operator deploy drill** — a human other than the founder runs a real deploy unaided (OPERATIONS.md exists; the drill needs a person). Pairs with the restore drill window. | ⛔ founder (needs a person) |
| **M9-45 [R11]** | **Move the authoritative repo off the OneDrive path** — destructive-sync incident class (reverted commits, conflict copies, .git corruption). | ⛔ founder (dev-machine change) |

## §5 — CI/CD residual (AgentMR7's absorbed lane; source: [CICDMRTable](<PracticeForceOneCICDMRTable.md>))

| MR9 [CICD] | Item | Gate |
|---|---|---|
| **M9-40 [item 5]** | **GitHub push trigger** — connection `esarks-github` + repo link exist, zero triggers; needs a repo-rooted pipeline yaml (`dir:` adaptation) first. Structurally fixes provenance (trigger supplies `.git`). | gated on M9-3 = Option A |
| **M9-41 [item 8]** | **Decommission the legacy queue runner** + archive `.deploy/` conventions (runbook exists). | gated on M9-3 + ALL-AGENTS ack |
| **M9-42 [item 10]** | Polish: ① `ci-deploy.ps1` misclassifies submit-time INVALID_ARGUMENT as "DEPLOY BYPASSED" ② docker layer caching (C5.3). *(item ②-version-string race noted 07-06 remains cosmetic)* | low; ① is AgentCICD(-PC)'s lane |
| **M9-43 [M7-63 rem]** | **Deploy from tagged commits** — immutable build→commit mapping (dirty-refusal + `:blessed` + real contentHash already shipped in MR7; the tag discipline folds into M9-40's trigger model). | folds into M9-40 |

## §6 — Toolchain (`jac2026.2` candidates + build hygiene; toolchain rows = AgentJACJEO's lane, ⛔ founder-gated)

| MR9 [MR7] | Item | Why |
|---|---|---|
| **M9-50 [M7-51]** | `upsertX()` (`ON CONFLICT`) + `incrementX(field)` | atomic upsert/increment without raw SQL |
| **M9-51 [M7-52]** | Scalar aggregates `countX/sumX(where)` | kills load-all-rows-for-a-COUNT (M7-14 did it with sanctioned raw SQL; this un-sanctions it) |
| **M9-52 [M7-53]** | Array/JSONB column support in DDL + emission | un-sanctions `coverage_rules` VARCHAR[]/TEXT[] |
| **M9-53 [M7-54]** | Shrink wide-table emission | removes the 64KB-per-method headroom risk |
| **M9-54 [M7-70]** | **De-risk the JAC toolchain** — design doc, golden-output regression tests, 64KB-emitter fix, JDK-past-24 plan | 🔴 single-maintainer compiler under 630K LOC |
| **M9-55 [M7-75]** | **Fail-loud build** — exit non-zero on skipped files (32K cmdline truncation), BOM detection | *(phase0 failure diagnostics already hardened `4afe29769`)* |
| **M9-56 [M7-76]** | Single `build.ps1` entry point over the ~250 `bin/` scripts | DX |
| **M9-57 [M7-77]** | **Generate the router** from the module list (2,523-line hand-maintained dispatch = #1 merge hotspot) + delete the 5.2 MB `.authbak` orphan | maintainability |
| **M9-58 [M7-79]** | **Purge the JAR museum** (Xerces 2007 / Axis 1.x / ojdbc14 / mysql 5.1.7) + scannable dependency manifest | CVE surface invisible to scanners |
| **M9-59 [M7-80 rem]** | Docs cleanup tail — sweep residual hardcoded build numbers, archive ~79 dated one-off `.md`s | low |

## §7 — Other-agent tails (visibility only — owned lanes, do not duplicate)

| MR9 [src] | Item | Owner |
|---|---|---|
| **M9-70 [M7-21 tail]** | Convert/retire the 51 dormant non-gating static tests (frozen by the B7 ratchet) | A0.4 / Agent4 lane |
| **M9-71 [M7-15 T2c/T2d]** | Shadow-corpus rebuild + enforcement flip memo (prereq of M9-10) | AgentDLP |
| **M9-72 [MR8 close]** | ~~MR8 activation-watch items~~ → superseded by **§8** (explicit MR8 carry-in rows, added 2026-07-07 per founder direction) | AgentMR8 lane |

## §8 — MR8 carry-in (everything not complete at MR8 mission-close, 2026-07-07 — AgentMR8; per-item detail in the [Vendor Activation Playbook](<PracticeForceOneVendorActivationPlaybook.md>) + [Revenue Activation Plan](<PracticeForceOneRevenueActivationPlan.md>))

*MR8's 16 picks are all engineering-complete and production-verified; these rows are the activation/decision/vendor remainder. Vendor-engineering overlaps with §3 carry their [M8-x] IDs there (M9-24/26/27) rather than duplicating rows here. Backups/drill, load test, and 2nd-operator live in §4 as M9-31/33/39 [M8-12/11/13].*

| MR9 [MR8] | Item | Gate / state |
|---|---|---|
| **M9-80 [M8-1]** | **Sign the clearinghouse contract + start payer enrollments** — the only item on the revenue critical path (4–10-wk enrollment clock; short-list + criteria in the playbook). Engineering integration = M9-24. | ⛔ founder signature — **this week's item** |
| **M9-81 [M8-4]** | **AI denial-recovery loop LIVE** — per-practice real-mode flags + the `ai_autopilot` master flag (AI-flags console; `MR3_AUTOPILOT_ENABLED` env is retired). Hours of work once M9-24's ERA feed streams real denials. | ⛔ founder flag window, after M8-3 activation |
| **M9-82 [M8-10]** | **First production practice at volume** — multi-provider pilot, a full month of real claims/visits; the reference customer. Runs the [Go-Live Checklist](<PracticeForceOneFirstCustomerGoLiveChecklist.md>); feeds M9-33's load data. | ⛔ founder (a willing practice) + onboarding |
| **M9-83 [M8-30]** | **Surescripts e-Rx certification + contract** — the #1 table-stake gap in the [Competitive Landscape](<PracticeForceOneCompetitiveLandscape.md>) (eRx workflow built, network simulated). Unlocks M8-31 EPCS / M8-32 PDMP later. | vendor + certification (L) |
| **M9-84 [M8-20]** | **ONC certification program** — Phase 0 scoping decision + free Inferno baseline first ([ONC Readiness](<PracticeForceOneONCCertificationReadiness.md>) has budget/timeline). | ⛔ founder cost/timeline call → external cert body |
| **M9-85 [M8-50/M8-55]** | **Partner decisions:** ambient scribe + custom report builder (build-vs-buy evaluations already delivered — sign, don't build). | ⛔ founder (two partner picks) |
| **M9-86 [R13]** | **Blind-index reader switch** — eligibility/ERA subscriber-ID matching must use `SUBSCRIBER_ID_BIDX` + decrypt. **Hard gate on M9-24's eligibility/ERA go-live; load-bearing since 2026-07-07 (zero plaintext rows remain).** | 🔧 MR82-lane recipe agreed; ships with M9-24 activation |
| **M9-87 [R14]** | **Support kit — two founder blanks** (inbox address + stated hours); everything else is written ([Support Procedures Kit](<PracticeForceOneSupportProceduresKit.md>)). | ⛔ founder (minutes) |
| **M9-88 [R9]** | **HIPAA P1 hardening package** — DB private IP / IAM auth / password rotation as one package (rotation consciously deferred by founder 2026-07-05; do not re-raise piecemeal). | deferred by decision; revisit at first enterprise/BAA review |

---

*Companions: [MR7 table](<PracticeForceOneMR7Table.md>) (history + full row detail) · [MR8 table](<PracticeForceOneMR8Table.md>) (activation checklist + history) · [Founder Action Checklists](<PracticeForceOneFounderActionChecklists.md>) · [Risk Register](<PracticeForceOneProductionRiskRegister.md>) · [Deployment-Model memo](<PracticeForceOneDeploymentModelDecision.md>) · [CICD table](<PracticeForceOneCICDMRTable.md>) (archived) · MR8's readiness suite incl. [Revenue Activation Plan](<PracticeForceOneRevenueActivationPlan.md>).*

## Review Epilog — 2026-07-24

- MR9 is ACTIVE — the Clinic Demonstration Readiness Program. Primary path: Schedule → Appointment Search → Check-In → Eligibility → Chart → Encounter → Checkout.
- Live build: 1943, gate 251/251 GREEN (up from 213 at last review). MR9 findings live: FO-3/4/17/22, FO-18/19, FO-5, FO-14/21, FO-20, FO-7, FO-12, FO-8, FO-11, FO-9. Next: FO-13/6/10/15.
- Demo data: dedicated clean practice Coastal Internal Medicine established (M9-92 resolved). CF runtime batches through CF-65 seeded.
- MR10 PAPER-ONLY pre-August per founder directive. FD-1 and FD-2 decisions pending with founder.
