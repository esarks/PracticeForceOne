---
title: "PracticeForceOneDemoScripts"
---

# PracticeForceOne Demonstration Scripts (M9-91)

**Last reviewed: 2026-07-24** · **Live build at review:** 1943 (gate 251/251 GREEN)

**Purpose:** rehearsable, zero-improvisation scripts for the August clinic demonstration. Each script defines **Patient · Provider · Insurance · Reason for visit · Expected workflow · Expected system behavior · Expected outputs**. A script is **DONE** when it runs twice consecutively on a freshly seeded practice (CF-65 pack + demo dataset) with zero improvisation. Every rehearsal doubles as an M9-93 polish pass — file friction as you see it. · **Owner:** AgentMR9 (program) · rehearsal drivers: founder + agents · **Parent:** [MR9 table](<PracticeForceOneMR9Table.md>) M9-91.

## Rehearsal protocol (setup is scripted too — zero improvisation includes the prep)

> **🏥 DEMO PRACTICE (set 2026-07-14 — M9-92-POLLUTION Option A):** the demo runs on **Coastal Internal Medicine** `160e14fa-86dd-4392-929f-fbe0ded735f2` — a dedicated CLEAN practice (cast + dictionaries only, no test junk). The polluted `Bay Area Cardiology` (a7e14cc0) is now the gate's throwaway — do NOT demo on it. Seeded cast (live): Margaret Chen `fd2e9eb5-d866-4325-b44f-7b4edafeb751` (appt Tue 2026-07-21 10:00, "BP recheck; metformin refill due", full chart), Robert Vance (07-22, failed-eligibility check), Linda Okonkwo (07-22 Annual Physical, Medicare COB), Dr. Sarah Okafor (availability applied, scheduleStepReady:true). Re-seed to refresh: `POST /api/admin/seed-demo-clinic-day {"practiceId":"160e14fa-…"}` then again with `"panel":true` (run the plain dictionaries call ONCE MORE after panel so availability applies to the newly-created provider). Portal-side chapters READY: Margaret's portal account is provisioned on Coastal — **margaret.chen.demo@example.net / MargaretChen!2026** (linked to her existing chart fd2e9eb5, no duplicate; login verified; portal home + check-in render authenticated as her). Robert/Linda can be provisioned the same way if a script needs their portal side.

> **⚠ DEMO-DAY DATE (M9-92 resilience, proof pass 2026-07-15 on live 1772; CORRECTED):** the demo seed (`AdminSeedDemoClinicDayRoutes:365`) dates appointments to **`LocalDate.now().with(next(TUESDAY))`** — i.e. the **next Tuesday strictly after the seed date** (Chen that Tue 10:00, Vance/Okonkwo the following Wed). The **staff Schedule opens on TODAY by default** (`/api/appointments` defaults `dateFrom`=today). Proven: `dateFrom/dateTo` spanning the appt week returns all 3 cast with names resolved; today's default returns 0. **⚠ Re-seeding does NOT put appointments on "today" — it lands them on a FUTURE Tuesday (up to a week out; and if you seed ON a Tuesday, a week later).** So on demo day the default Schedule view is EMPTY unless the demo day happens to be that Tuesday. **Mitigations (pick one, day-of prep MUST verify the cast shows before going live):** (a) LOW-RISK/no-deploy — the demonstrator opens the Schedule and navigates to the seeded Tuesday (normal EHR usage; the appt date is in the seed response `panel.appointmentStart`); (b) CODE — change the seed to date the primary appointment to `LocalDate.now()` (or accept a date param) so the default (today) view is populated on any seed day — needs a deploy + a one-line script-narrative update; ⛔ founder call (changes demo-data semantics; currently moot while the promote lane is gate-RED). (The dictionaries survive restage via `bin/restage-recover.mjs`; appointments/patients/portal-accounts do NOT — re-seed, and re-provision portal logins with `node bin/demo-portal-recover.mjs` (idempotent, links existing charts, no dup), after any restage.)

1. **Seed the practice (idempotent, safe to re-run):**
   `POST /api/admin/seed-demo-clinic-day` body `{"practiceId":"<demo practice>"}` → dictionaries + availability (`scheduleStepReady:true` in the response is the go signal).
2. **Seed the cast:** same endpoint, body `{"practiceId":"<demo practice>","panel":true}` → Margaret Chen (established chart: HTN+T2DM, penicillin allergy, lisinopril+metformin, signed visit −90d with vitals, BCBS primary `BCB-4471-8802`) + Dr. Sarah Okafor + next Tuesday 10:00 follow-up (`panel.appointmentStart` in the response).
3. **Accounts:** staff walk = the demo staff login; patient chapters = Margaret's portal account (create via the portal-users admin flow once, or run the check-in chapters from the kiosk/iPad wizard with a staff-issued code — matches DLPCF1 CF1-0).
4. **Walk the seven steps** exactly as written in the script table below; the rehearsal driver reads the *"What the demonstrator does"* column aloud and does nothing else.
5. **File every friction immediately** in M9-93 (screen · issue · severity) — a rehearsal that files nothing is a rehearsal that wasn't watching.
6. **Record the run** in the ledger below (date, build, result, friction count). DONE = two consecutive clean runs on a freshly seeded practice.

## Rehearsal ledger

**Script #1 PRE-WALK PACK on clean Coastal 2026-07-14 (live 1771):** captured the full spine on the demo practice — Schedule (exactly 3 cast, real reasons), Eligibility (F-13 PROVEN ON SURFACE: shows only Robert's failed check "Showing 1 record", was 55 org-wide before), Chart, Encounter, Checkout + Margaret's authenticated portal home/check-in. Every step reads as a real clinic to a first-time user. This is the definitive pre-human-walk evidence pack (sent founder). Only the founder's live human walk of Script #1 remains as the M9-91 DONE gate. Artifacts: build/dlp-artifacts/mr9-coastal-fullwalk/ + mr9-margaret-portal/.

**Portal chapters READY on clean Coastal 2026-07-14:** provisioned Margaret's portal account (register→confirm→admin create-patient LINKED to her existing chart fd2e9eb5 — the name+dob match scopes to the request practice so it linked, did NOT duplicate; Coastal still 3 patients). Login verified; captured portal home ("Welcome, Margaret Chen", visit-first hero) + check-in authenticated as her on the clean practice. Script #1 patient-side chapter + Script #2 can now run on Coastal. Creds: margaret.chen.demo@example.net / MargaretChen!2026. Artifacts: build/dlp-artifacts/mr9-margaret-portal/.

**No-regress on 1771 (audit-response wave) 2026-07-14:** the 5-lens audit drove a fleet fix wave (float-alerts on-screen, non-blocking post-save refresh, portal clinic-dropdown resilience, 7 dead-end empty-states → next-action text, kanban poll-until-card-moves). Re-captured Check-InCF + ChartCF on the CLEAN Coastal practice — GREEN, Check-In shows exactly the 3 cast (Dr. Okafor, "Showing 3 records"). Demo step 3 clean as a first-time user sees it. Kanban read-after-write hardening shipped (c5e4af9d0). Artifacts: build/dlp-artifacts/mr9-noregress-1771/.

**F-13 eligibility tenancy fix VERIFIED LIVE 2026-07-14 (build 1770):** the uninterrupted-patient-day audit found `/api/eligibility` list was org-scoped only (ignored ?practiceId) → EligibilityCF (demo step 4) showed 55 org-wide gate checks even on the clean practice. Fixed + deployed + verified: bogus practiceId now returns **0** (was 55), Coastal returns only its cast's checks (Robert's failed-eligibility = Script #3's scenario, now prominent). Demo step 4 is clean on the clean practice. Artifacts/probe in AGENTS 07-14.

**No-regression pass 2026-07-14 (live 1768):** re-captured Check-InCF + EncounterCF after the founder-paired CF-surface wave (Check-InCF dead-end fix = 'Ready for Rooming' now returns to the Kanban so the clerk lands back on the board to Send to Room; EncounterCF return-to-Kanban + med-search prefix matching rosuva→rosuvastatin; kanban no longer blanks the patient search mid-flow). **NO REGRESSION** — F-4 clinical titles hold (Check-In / Encounter), F-5 columns intact, demo cast + rooming statuses (Intake In Progress / Intake Complete) render. The Check-InCF→Kanban nav-back improves demo step-3 continuity (clerk isn't stranded on the CF after Ready-for-Rooming). F-11/pollution unchanged (known — CF config + M9-92-POLLUTION founder decision). Artifacts: `build/dlp-artifacts/mr9-noregress-1768/`.

**No-regression pass 2026-07-14 (live 1761, headless):** after a full day of founder-paired spine churn (kanban flow relabel Check-in→Ready for Rooming→Send to Room, send-to-room fixes, scheduling-in-CF program, deep-link prefill, appointments_cf v2.4 / checkin_cf v1.5), re-captured all 5 CF spine surfaces. Result: **NO REGRESSION** — F-4 clinical titles hold (Appointments / Check-In / etc.), F-5 named columns intact, rooming statuses (Rooming In Progress / Intake In Progress / Intake Complete) reflect the new flow, demo cast present. One finding: **F-11 strengthened to HIGH** (Check-InCF shows 85 rows of mostly cancelled UAT fixtures under a "today's schedule" label — routed to CF). Artifacts: `build/dlp-artifacts/mr9-noregress-1761/`.


| Script | Last run | Build | Result | Friction filed |
|---|---|---|---|---|
| #1 Established patient — full visit | **RUN 2 (partial, headless) 2026-07-12 ~15:30Z on live 1731-1733** — F-5 config fix applied+verified (schedule/checkout render the cast: before/after sent to founder); **carry-chain walked LIVE: PASS** (appointment open → context set → ChartCF auto-focus); F-11 filed (list date-range shows UAT noise). Check-in re-captured ✅ (today-only list, full names — all THREE F-5 surfaces visually verified). Remaining: portal chapters, human walk. | 1734 | F-5 ✅×3 / carry ✅ / F-11 filed | F-11 |
| #1 Established patient — full visit | **REHEARSAL RUN 1 (headless screens, AgentMR9)** 2026-07-12 — 8/8 step screens captured on live 1726; 4 friction filed (F-4 cf-host jargon header HIGH, F-5 schedule lands on list not slots HIGH, F-6 empty contact columns MED, F-7 practice-context pin MED). Human walk still pending. Review CLOSED 07-12: all 8 screens assessed — F-5 visually confirmed on check-in surface too (steps 1/3/7 nameless rows, one config-fix pattern); portal login screen validates F-2 as shipped; harness note: headless capture has no portal session, so Run 2 needs a portal-login capture mode for patient-side steps. | 1726 | screens ✅ (staff 8 + patient-side 4 via new portal-session capture mode; F-1 home validated live with a real session) / friction: F-4, F-5(×3), F-8 open · F-6/F-7 closed | F-4..F-8 |

---

## Step-Transition Ledger (orchestration walk, first-time-user lens — 2026-07-12, live 1731)

**The founder's metric fails between screens as often as on them.** Per-hop verification of Script #1's transitions (mechanism + evidence, not hope):

| Hop | Mechanism | Evidence | Status |
|---|---|---|---|
| 1→2 Schedule → Search | Kanban search + card dblclick fill; kanban "Create Appointment" now opens SchedulingCF with URL prefill (7d45186d6, live 1736) — booking and the day board are wired both ways | founder-validated carry (M6-9) + DLP twin-retire batch | 🔶 improved 07-12; naming/discoverability still flagged → @AgentDLP (nav) |
| 2→3 Search → Check-In | Kanban card → right-panel advance CTA; kanban→CF deep-link (?recordId) opens the exact record | `a48cc074f` DLP-certified | ✅ |
| 3→4 Check-In → Eligibility | Check-InCF v1.1 next-step actions = Open Chart / Start Encounter — **no "Run Eligibility" action**; desk must sidebar-hop to EligibilityCF (carried search auto-fills the patient, but the 270 run is a fresh manual start) | `cb8321a7c` definitions | 🔶 GAP: eligibility next-step action missing → @AgentCF |
| 4→5 Eligibility → Chart | Opening any CF record sets PatientContext + carried search; ChartCF auto-fills its roster search | **LIVE-VERIFIED Run 2 (1733): opened Margaret's appointment → PatientContext {Chen, Margaret + real patientId} → ChartCF search box auto-filled "Chen, Margaret"** | ✅ LIVE |
| 5→6 Chart → Encounter | Same carry + Check-InCF "Start Encounter" direct action | `cb8321a7c` | ✅ |
| 6→7 Encounter → Checkout | Sign drops charge; CheckoutCF v1.1 has back/next actions; carried search focuses the patient | `cb8321a7c` | ✅ pending F-5 config fix (row currently nameless) |

**Integration note (verification-phase evidence):** the appointment-row carry only became possible on live 1731 — `carryPatientFrom` reads `patientFirstName`/`patientLastName`, which `/api/appointments` did not emit until MR9's `3c962a2d1`. Three lanes' work (CF journey glue + DLP-certified deep links + MR9 split fields) integrates into the seamless hand-off. Rehearsal Run 2 must walk the carry chain live end-to-end.

## Script #1 — Established patient, routine follow-up (the spine, end to end)

**Cast**
- **Patient:** Margaret Chen, F, DOB 1961-04-12 — established patient, hypertension + type-2 diabetes on the problem list, penicillin allergy, on lisinopril 10mg and metformin 500mg. Last visit ~3 months ago.
- **Provider:** Dr. Sarah Okafor, MD (Internal Medicine).
- **Insurance:** Blue Cross Blue Shield PPO, member ID BCB-4471-8802, $30 copay, active.
- **Reason for visit:** 3-month follow-up, blood-pressure recheck, metformin refill due.

**The seven steps**

| # | Step | What the demonstrator does | Expected system behavior | Expected output |
|---|---|---|---|---|
| 1 | **Schedule** | Open the calendar; find Dr. Okafor's Tuesday 10:00 slot (CF-65 recurring availability); book "Established Patient Visit" (20 min) for Margaret Chen | Slot list shows only bookable openings; booking validates the slot; visit type carries its duration | Appointment on the calendar + kanban day board; reminder artifact created |
| 2 | **Appointment Search** | Search "Chen" from the appointment-search surface | Match resolves to Margaret + today's appointment; patient carries into context (kanban patient-carry) | Appointment detail, one click from search |
| 3 | **Check-In** | Front desk clicks **Check-in** on Margaret's card (or she checks in on the iPad wizard), then **Ready for Rooming** → **Send to Room** with the room number *(labels per founder flow 07-13, kanban 1754)* | Card moves Scheduled → Patient Arrived → Ready For Rooming → Rooming WITHOUT manual refresh; encounter created with check-in time | Rooming status visible board-wide; encounter open |
| 4 | **Eligibility** | Desk runs the 270 from EligibilityCF | ACTIVE coverage returns with copay $30 + deductible/benefits (271 parse); result persists with checked-at | Green coverage banner; copay amount surfaced for checkout |
| 5 | **Patient Chart** | Open Margaret's chart | Problem list (HTN, T2DM), allergy (penicillin — list, never a bland "none"), meds, vitals history, prior visits — all coherent | A chart that reads like a real 63-year-old's record |
| 6 | **Provider Encounter** | Dr. Okafor: vitals (BP 132/84, HR 72) → review meds → renew metformin (eRx, non-controlled) → diagnoses I10 + E11.9 → SOAP note → **sign** | Vitals validate; eRx transmits (simulated network); **the sent eRx auto-promotes onto the Medication List — Active, start-dated, linked to the order** (med-promotion CF-16, live 1765); ICD-10 codes attach; signing locks the note and drops a charge-review row | Signed, immutable note; renewed med on the med list; charge in the review queue |
| 7 | **Checkout** | Collect the $30 copay; schedule the next 3-month follow-up; charge review → claim | Copay posts against today's visit (⚠ M9-90 checkout verification pending); follow-up books from the same availability; claim generates and scrubs clean | Receipt/posted payment; future appointment; claim in Ready-to-Submit (seeded status dictionary) |

**Narration beats (demo storytelling, founder priority 5 — what the demonstrator SAYS at each step):**
1. **Schedule:** "This is Tuesday morning at the front desk. Margaret Chen is due for her blood-pressure recheck — here she is at ten o'clock with Dr. Okafor." *(the story is the patient, never the software)*
2. **Search:** "Any patient, from anywhere — type a name and the whole visit follows you." *(demonstrate the carry: open her appointment, everything after this knows who Margaret is)*
3. **Check-In:** "Margaret's here — Check-in, Ready for Rooming, Send to Room 4. Three clicks and watch the board tell the whole building where she is. No refresh, no retyping; the iPad in the lobby feeds the same board."
4. **Eligibility:** "Before she sits down, we know her Blue Cross is active and her copay is thirty dollars. The desk never guesses."
5. **Chart:** "Notice we didn't search for her again — the chart opened already looking at Margaret. Problems, allergies — penicillin, not 'none recorded' — meds, last visit's vitals."
6. **Encounter:** "Dr. Okafor charts vitals, renews the metformin — and it lands right on Margaret's medication list, linked to the order — codes the visit, signs. The moment she signs, the note locks and billing already has the charge."
7. **Checkout:** "Thirty dollars collected, her next follow-up booked from the same calendar, and the claim is queued — the visit paid for itself before Margaret reached the parking lot."
*(Epilogue below — the cockpit shows the day happening.)*

**Epilogue (30 seconds):** the dashboard — today's visit, the new claim, and the collected copay visible in the cockpit's Act/Watch bands. *"And that is a complete visit — scheduled, seen, documented, coded, billed — with the practice's own statuses and the day board updating live."*

**Known dependencies before first rehearsal:** appointment-search surface (ECW-E ③, AgentCF) · checkout patient-payment verification (M9-90, AgentMR9) · Margaret Chen + panel in the demo dataset (M9-92).

---

## Script #2 — New patient, same-week appointment (the front door)

**Cast**
- **Patient:** David Reyes, M, DOB 1988-09-23 — new to the practice, no chart. Seasonal allergies worsening; no regular doctor. Has his insurance card. **Enrolls from HOME on his own computer** (founder workflow clarification 2026-07-11: self-enrollment is a home act, never a lobby-kiosk act).
- **Provider:** Dr. Sarah Okafor, MD.
- **Insurance:** Aetna Open Choice PPO, member ID W447-220-118, active.
- **Reason for visit:** persistent allergic rhinitis, wants evaluation + prescription.

**The steps**

| # | Step | What the demonstrator does | Expected system behavior | Expected output |
|---|---|---|---|---|
| 1 | **Home enrollment (patient side)** | David self-enrolls at home via New Patient Intake: clinic select (carried into the wizard) → account → demographics + insurance + reason | Clinic selection carries into registration (DLP fix, portalpages07); validation inline; verification code confirms the account | Registration lands in the staff review queue |
| 2 | **Staff review → chart** | Front desk opens **Portal UsersCF** (kanban Review Registration lane or sidebar), opens David's row — the "Portal Account & Registration Review" shows his submitted packet — clicks **Create Patient / Chart** | One click creates the chart AND links the portal account; insurance promotes from HIS answers *(walk VERIFIED on live 1740: review page + primary action render as scripted)* | A real chart born from the patient's own intake — zero staff retyping |
| 3 | **Phone scheduling (separate actor)** | The PHONE SCHEDULER books David with Dr. Okafor this week (New Patient Visit, 30 min) — enrollment and scheduling are distinct acts by different people | Openings reflect seeded availability; visit type carries duration | Appointment on calendar + day board |
| 4 | **Check-In + Eligibility (visit day)** | David — an EXISTING portal patient by now — checks in at the kiosk with the staff-issued 6-digit code; desk runs the 270 | Kiosk code path works (existing-patient tool per founder); card moves on first click; ACTIVE coverage + benefits return | Green eligibility on a brand-new chart |
| 5 | **Chart + Encounter** | Dr. Okafor documents: vitals, allergy hx noted, J30.9 diagnosis, eRx loratadine, note, Sign | First-visit chart populates as she works; sign locks + drops the charge | Signed first encounter |
| 6 | **Checkout** | Collect copay; schedule follow-up if needed; charge → claim | Payment posts; claim generates with the new patient's insurance | The front door ran end-to-end |

**Epilogue:** *"Twenty minutes ago this person didn't exist in the system — no paper, no transcription, and the claim is already queued."*

**Known dependencies:** same as Script #1, plus the registration wizard chapters (mine) and the staff review flow (live — DLPCF1-certified).

---

**Narration beats (#2 — the front door):**
1. **Home enrollment:** "David found the practice online last night. This is him at his kitchen table — account, history, insurance card, all before his first phone call." *(patients do the data entry, correctly, once)*
2. **Staff review:** "This morning the front desk sees his packet. One click — Create Chart — and David is a patient. Nobody retyped anything."
3. **Phone booking:** "He calls; the scheduler sees this week's openings and books him Thursday. Enrollment and scheduling are different people doing different jobs — the system doesn't care, the data follows."
4. **Visit day:** "The kiosk code the desk hands him opens HIS check-in. Insurance verifies active before he sits down."
5. **First encounter:** "Dr. Okafor has a real chart on a brand-new patient — history he wrote himself at home. Sign, and billing is already moving."

## Script #3 — Eligibility failure caught at the desk (the save)

**Cast**
- **Patient:** Robert Vance, M, DOB 1957-02-08 — established patient whose employer switched insurance in January; his chart still carries the OLD (now inactive) plan. He doesn't know it lapsed.
- **Provider:** Dr. Sarah Okafor, MD.
- **Insurance:** on file: United Healthcare Choice (INACTIVE) → corrected live to Humana Gold Plus, member ID H88-3321-905.
- **Reason for visit:** knee pain follow-up.

**The steps**

| # | Step | What the demonstrator does | Expected system behavior | Expected output |
|---|---|---|---|---|
| 1 | **Check-In** | Robert arrives; Patient Arrived on the board | Card moves on first click | Checked in |
| 2 | **Eligibility — the failure** | Desk runs the 270 on the on-file plan | **INACTIVE surfaces loudly at the desk** (DLP-H02 contract) — clear red state, no ambiguity, no silent pass-through | The problem is caught BEFORE the visit, not 30 days later as a denial |
| 3 | **The save** | Desk asks for his current card; updates insurance on the chart (or Robert re-attests "changed" on the iPad packet and the desk promotes it) | New coverage saves cleanly; old plan retained as history, not overwritten | Corrected coverage on file |
| 4 | **Re-verify** | Run the 270 again on the new plan | ACTIVE returns with benefits | Green — visit proceeds |
| 5 | **Visit + claim** | Normal encounter + checkout | Claim generates against the CORRECTED payer | The claim that would have denied bills clean |

**Epilogue:** *"That eligibility failure would have become a denial letter in three weeks and a write-off in three months. The desk fixed it in ninety seconds — that's the difference between billing software and a revenue engine."*

**Known dependencies:** an INACTIVE-coverage fixture for Robert (extend the panel seed or use the mock payer's inactive member class — the 270 mock must answer INACTIVE for the on-file member ID; DLP-H02 proves the mechanism exists) · otherwise same as Script #1.

**Narration beats (#3 — the failure we catch):**
1. "Robert Vance thinks he has coverage. Watch what happens when we check — INACTIVE, caught at the desk, not six weeks later as a denial."
2. "The failed check isn't buried — it's right here on the eligibility board, red, with the reason."
3. "The desk fixes it while Robert is standing there: new card, re-run, active. That conversation used to be a collections letter." *(the money story: eligibility failure up front = a saved claim)*

## Script #4 — Insurance change + secondary coverage (billing depth)

**Cast:** Linda Okonkwo, F, DOB 1954-11-30 — established; just turned Medicare-primary with her old employer plan going secondary (COB). · Dr. Okafor · Medicare Part B primary + BCBS secondary · annual wellness visit.
**Steps (compressed):** check-in → packet re-attest "insurance CHANGED" on the iPad → desk promotes BOTH coverages — primary swap + secondary added; the T5 dedupe rule must NOT duplicate → eligibility on the new primary → visit → claim carries COB with the payer sequence correct.
**Epilogue:** *"Medicare transitions are where practices bleed denials — the packet captured both plans from the patient herself and the claim sequenced them correctly."*
**Known dependencies:** panel-seed extension for Linda, or live entry during rehearsal · COB claim path, DLP-H04 proven at the API level.

---

**Narration beats (#4 — Medicare and the second payer):**
1. "Linda Okonkwo is why billing staff quit: Medicare primary, a retiree PPO second. The system already knows the ORDER — priority one, priority two."
2. "Her eligibility check runs against Medicare first; the plan card shows both, correctly ranked."
3. "When her claim goes out, coordination of benefits is automatic — the crossover happens in the pipeline, not in somebody's head."

## Script #5 — Multi-provider clinic day (the finale)

**Cast:** both providers — Dr. Okafor + a second seeded provider · Margaret (follow-up), David (new patient), Robert (eligibility save), interleaved across one morning.
**Steps (compressed):** the day board runs the room — three patients move through staggered scheduled → arrived → checked-in → in-visit → checked-out lanes; eligibility goes green/red-then-saved/green; two signed encounters plus the save; the dashboard epilogue shows the DAY — visits, claims, copays — not a single visit.
**Epilogue:** *"That was not a demo of features. That was a clinic morning."*
**Known dependencies:** Scripts #1–#3 individually DONE first · second-provider availability (the CF-65 seed already covers every active provider) · a kanban polish pass.

---

**Narration beats (#5 — the finale, a real clinic morning):**
1. "Now all of it at once — three providers, a full waiting room. This is the day board running an actual morning."
2. "Every card is a patient somewhere in the building. Nothing on this screen is staged — you watched us book, arrive, and room these people in the last twenty minutes."
3. "And the cockpit: today's visits, today's claims, today's money — the practice can see itself operate. That is the product."

## Script #6 — Patient Portal Showcase (the patient's side of the visit)

*Added 2026-07-16 (AgentMR9) — showcases the patient-facing portal features that landed on builds 1783–1791. Optional closing chapter: run it after the clinical spine to show the SAME visit from the patient's phone. All steps verified live on 1791 as Margaret.*

**Cast:** Margaret Chen — **margaret.chen.demo@example.net / MargaretChen!2026** (portal account linked to chart `fd2e9eb5`, Coastal). Sign in at `/portal/login.html`.
**Premise:** *"Everything the practice just did — Margaret sees her side of it on her phone, the same afternoon."*

| # | Demonstrator does | System shows | Output / point |
|---|---|---|---|
| 1 | **Portal home** — sign in as Margaret | Visit-first hero ("Start Check-In" + her next visit) **plus** the new **"Your Health, at a Glance" dashboard cards** with live counts (Appointments, Messages, Medications, Lab Results, Statements w/ balance) | One glance answers "what's going on with my care" — counts pulled live from her chart (`/api/portal/me/summary`) |
| 2 | **My Medical Records** | Info-blocking **PHR** (PT-4): problems w/ ICD-10, allergies, medications, immunizations, visit history, released lab results — date-range filter + Print/Save-PDF | The patient can actually GET her record (21st-Century-Cures info-blocking), not a "call the office" dead-end |
| 3 | **Account & Statements** | Current balance (red if owed / green if $0) + statement history + front-desk pay guidance | Billing transparency without an online-payment dead-end |
| 4 | **Messages** | Secure thread: Margaret composes "question about my medication" → it lands in the **staff inbox** (front desk replies) → she sees the reply | Real two-way secure messaging, patient↔practice, HIPAA-scoped |
| 5 | **Refill & Referral Requests** | Toggle: request a **medication refill** (e.g. metformin — the same one from today's visit), a **specialist referral**, or **family access** (name+DOB → staff verify) → each lands in the staff queue with her name | The portal-home nav a patient expects — and every request is actionable by the front desk |
| 6 | **(Staff side, optional split-screen)** | Front desk opens the patient-requests / messages queue — Margaret's refill + message appear under "Chen, Margaret" | Closes the loop: what the patient sends, the practice sees |

**Epilogue:** *"The visit doesn't end at checkout. Her records, her bill, her refill, a message to her doctor — she carries the whole thing home in her pocket, and the front desk sees every bit of it."*
**Known dependencies:** Margaret's portal account provisioned on Coastal (`node bin/demo-portal-recover.mjs` after any restage) · builds ≥1791 · features: PT-1 messaging, PT-3 dashboard cards + refill/referral/family requests, PT-4 PHR, PT-6 comm-prefs (staff-side `patients.html` Communication tab, optional).

**Narration beats (#6 — the patient's side):**
1. "Everything you just watched — Margaret sees it from her phone. Her records, released to her, not locked in our system."
2. "She asks for her metformin refill and messages her doctor — and it lands in the front desk's queue, no phone tag."
3. "That's the whole point: one visit, and the patient leaves holding all of it."

---

## Script template

```
## Script #N — <title>
**Cast:** Patient (name, DOB, clinical picture) · Provider · Insurance (payer, member ID, copay, status) · Reason for visit
**Steps:** per demo-path step: what the demonstrator does | expected system behavior | expected output
**Epilogue:** what the audience should conclude
**Known dependencies:** what must exist before this rehearses
```

**Planned:**
- **#3 Eligibility failure** — inactive coverage caught AT THE DESK (DLP-H02 behavior) → insurance updated → re-verified → visit proceeds. Shows the save.
- **#4 Insurance change + COB** — established patient with a new secondary; both captured; claim carries COB. Shows billing depth.
- **#5 Multi-provider clinic day (finale)** — two providers, staggered schedule, the day board running the room; one of each: new patient, follow-up, eligibility save. Shows a CLINIC, not a demo.

## Review Epilog — 2026-07-24

- Live build **1943** (gate 251/251 GREEN). Scripts #1–#6 are the current rehearsal set; human walk of Script #1 remains the M9-91 DONE gate.
- Demo practice updated to **Bay Area Cardiology**, provider **Dr. Steve Chen**, 6 seeded appointments. Reset: `node bin/demo-setup.mjs`. (Note: Coastal Internal Medicine / Dr. Okafor was the prior pre-walk demo practice; verify the active demo practice with the founder before the live demonstration.)
- Platform framing: PracticeForceOne is a **configurable healthcare app platform** — every script step runs on runtime-engine-executed definitions, not custom EHR screens.
- Script #6 (patient portal showcase) is the most recently added script (2026-07-16, builds 1783–1791); portal features PT-1/PT-3/PT-4 are verified live and relevant for the August demonstration.
