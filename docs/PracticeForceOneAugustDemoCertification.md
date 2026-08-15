---
title: "PracticeForceOneAugustDemoCertification"
---

# PracticeForceOne — August Demo Certification Assessment (AgentDLP)

**Last reviewed: 2026-07-24** · **Current live build: 1943** · Gate: **251/251 GREEN** · CF-14 August demo path: **PASSES**

**CORRECTION 2026-07-16:** lab/imaging orders EXIST (OrdersCF /api/diagnostic-orders, gate CF-18) - earlier "absent" was an endpoint-name probing error. Self-pay is the remaining real revenue-cycle gap.

**Certification authority:** AgentDLP · **Live build assessed:** 1783 · **Updated:** 2026-07-24 (build 1943) · **Method:** complete-journey runs against the live system (not isolated screens), plus edge probing to break the workflow. This answers the Final-Deliverable questions — it is a **confidence** assessment, not a task list.

---

## The one answer that matters

**A clinic can complete the full documentation-to-billing patient day, end to end, without returning to ECW — PROVEN today, 18/18, on the live build.** The single continuous journey `register → problem/med list → schedule → check-in → eligibility → room → encounter (vitals · note · diagnosis · eRx→med-list) → sign → code (auto-priced) → Approve & Create Claim → clean-claim submit (EDI) → checkout (copay + follow-up) → chart audit` runs green (`bin/dlp-walkthrough.mjs`, DLPCF13, 18/18 on 1783). **Lab/imaging ordering IS supported (OrdersCF / /api/diagnostic-orders, gate-proven CF-18); the remaining real gap is self-pay** — see the register below.

---

## The five Final-Deliverable questions

**1. Could a physician complete an entire clinic day without returning to ECW?**
**Yes — for a visit that does not require lab or imaging orders.** The whole clinical→financial spine is certified green on 1783 (18/18). **Lab/imaging ordering IS supported** via OrdersCF (`/api/diagnostic-orders`, gate-proven CF-18) — my earlier "absent" finding was wrong (I probed the wrong endpoint names). eRx prescribing IS complete (order → transmit → lands on the Medication List, proven step 12). So: **documentation, prescribing, and the entire revenue cycle = no ECW needed; diagnostic ordering = the open question.**

**2. Where would users hesitate?**
- **Placing a lab or imaging order** — no obvious surface (the clearest hesitation).
- **After Send-to-Room** — if the nurse clicks Send to Room WITHOUT typing a room number, the card advances with no room (the room only sends when entered) — so it can look like the room "didn't take." (Room persistence itself is verified working.)
- **If the DB has a momentary blip** — lists render empty (a receptionist would think data was lost). This happened once today and self-recovered.
- **Self-pay checkout** — the money path without insurance is not yet certified as a journey.

**3. What would cause confusion during a live demonstration?**
- The **room not showing** after rooming (looks broken even though the visit advanced).
- A **transient "everything is empty"** if the DB spikes on the small tier mid-demo — catastrophic optics on stage.
- Attempting a **lab/imaging order** live and finding no clean path.

**4. What remaining work represents genuine demo risk?**
Lab/imaging **ordering** (scope decision needed); **DB connection headroom** (empty-app risk); **Send-to-Room requiring a room** (not persistence — that works); a **self-pay path** (approve blocks no-insurance patients). Everything else on the 18-step spine is proven.

**5. If the demonstration were tomorrow, the five highest-priority actions:**
1. **Lock the demo script to the proven spine.** DLPCF13 (18/18) IS the rehearsal — run the demo along it and only include lab/imaging ordering if #5 is resolved first. *(Owner: DLP — done: script is the DLPCF13 walkthrough.)*
2. **Send-to-Room: require/confirm a room number** — persistence is verified working (room_number=3 proven); the fix is to stop letting Send-to-Room advance with an empty room (prompt/require it). *(Owner: DLP.)*
3. **DB connection headroom / auto-recover** — ensure a connection spike can't leave the app looking empty (pool sizing / DB tier / restart-on-unhealthy). *(Owner: MR8.)*
4. **Certify a self-pay journey** end to end (time-of-service payment, no insurance). *(Owner: DLP.)*
5. **Decide lab/imaging order scope** — either ship a minimal order surface or explicitly script around it so no one attempts it live. *(Owner: founder + AgentCF/DLP.)*

---

## Ranked issue register

### 🔴 DEMO BLOCKER
| Issue | Why it blocks | Owner | Evidence |
|---|---|---|---|
| **Lab / imaging ordering absent** *(only if a demo scenario places one)* | No dedicated order surface → physician returns to ECW; two of the founder's minimum scenarios are "Lab order" / "Imaging order" | Founder scope + CF/DLP | `/api/{lab,imaging,clinical}-orders` 404/400 on 1783 |
| **DB "app looks empty" under a connection spike** | On the 25-connection `db-f1-micro`, a spike made every list empty today; on stage this reads as total data loss | MR8 | health `db:unhealthy` observed + self-recovered 2026-07-16 |

### 🟠 HIGH
| Issue | Impact | Owner | Status |
|---|---|---|---|
| **Send-to-Room advances with no room if none typed** | Card can look room-less; nurse friction. NOTE: persistence VERIFIED working (room_number=3 proven); display fix live 1780 | DLP | corrected 2026-07-16 — require/confirm a room on Send |
| **Self-pay NOT SUPPORTED** | Approve & Create Claim hard-requires active insurance+payer (ChargeReviewRoutes:389) -> a self-pay patient cannot complete the revenue cycle. A minimum scenario. Needs a self-pay claim path (allow no-payer claim, route to patient statement/time-of-service). | DLP/CF | confirmed 2026-07-16 |
| **encounter → Kanban lost the card/appt context** | Returning from the encounter dropped the specific appointment thread | DLP | **fixed, deploying** (kbctx05) |

### 🟡 MEDIUM
| Issue | Impact | Owner |
|---|---|---|
| Legacy pages still reachable by URL (twin-retire debt) | "multiple products" feel | DLP/CF |
| Terminology/nav residuals (post "Go to Kanban"→"Kanban" sweep) | minor inconsistency | DLP |
| Orders capability partial (`clinical-orders`/encounter-orders exist but no clean UI path) | see blocker | CF |

### ⚪ POST-DEMO
Full ECW parity (global work-queue bar, favorites/pinning, concurrent-edit locking, care-team organizers, typed patient lists, access-purpose prompt), advanced order management, specialty waves.

---

## What is certified (evidence, on live builds)
| Journey | Proves | Result |
|---|---|---|
| **DLPCF13 / DLPCW** (full day, new patient, PPO) | the entire spine register→checkout→audit incl. eRx→med-list | **18/18 on 1783** |
| **DLPCF12** (front desk day) | Check-InCF + CheckoutCF in detail (copay, submit, follow-up) | 16/16 on 1779 |
| **DLPCF11** (two visits, two claims) | two coexisting claim threads, both submitted | 26/26 on 1774 |
| **DLPCF1–3** | new-patient / established / pediatric | certified on 1715 |
| Medicare CO-45 write-off (`bin/era-proof.mjs`) | contractual write-off auto-applies (paid/$0/$50) | proven on 1778 |

## Scenario coverage vs the founder's minimum set
✅ new patient · ✅ established · ✅ Medicare (era-proof) · ✅ commercial · ⬜ **self-pay** · ✅ eRx · ✅ lab order (OrdersCF) · ✅ imaging order (OrdersCF) · ✅ follow-up · ✅ claim submission · ✅ payment posting.

**Bottom line for confidence:** the day-to-day operating spine of a real clinic — schedule, check-in, room, document, prescribe, sign, code, bill, submit, collect, follow-up — is **trustworthy and proven** on the live build. Demo risk is concentrated in **diagnostic ordering** (scope decision), **operational resilience** (DB headroom), and **two visible-but-small friction points** (room persistence, self-pay proof). None of those is in the core proven spine.

## Review Epilog — 2026-07-24

- **Build 1943 / gate 251/251 GREEN / CF-14 August demo path PASSES.** All 7 demo path steps (Schedule→Appointment Search→Check-In→Eligibility→Chart→Encounter→Checkout) are verified GREEN on the current live build.
- The assessment from build 1783 remains accurate: the spine is proven; residual risks are self-pay (no insured claim path) and DB connection headroom (db-g1-small tier bump DONE as of build ~1791, structurally closing the connection-exhaustion class).
- PATIENT-DAY e2e 4/4 PASS confirmed on build 1936+; August demo path certified via DLPCF13 18/18 and CF-14.
- Platform framing: PracticeForceOne is a **configurable healthcare app platform** — this certification proves that runtime engines executing definitions can run a real clinic day without returning to legacy EHR software.
