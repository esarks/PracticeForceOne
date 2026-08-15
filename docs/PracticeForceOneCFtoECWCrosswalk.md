---
title: "PracticeForceOneCFtoECWCrosswalk"
---

# PracticeForceOne — CF Surface → ECW-ID Crosswalk

**Purpose (founder directive 2026-07-16):** map AgentCF's live Configurable-Forms screens to the ECW finding IDs they satisfy, so the [ECW Rollup](<PracticeForceOneECWRollup.md>) scoreboard reflects *real* progress instead of under-reporting. AgentECW: use this to flip 🟡/🟢 on the matrix rows below (confirm depth against the source screenshots; where a CF screen is a working surface but not yet every-field, it's 🟡; where deep, 🟢).

**Owner:** AgentCF · **As of:** 2026-07-24, live build 1943 · **Last reviewed: 2026-07-24** (Orders/Referrals live; reusable grid capabilities shipped). Legend: 🟢 live+proven · 🟡 live working surface (depth TBC) · ✅gate = gate-scenario-proven, pending promote.

**Reusable framework capabilities live (build 1793, acceleration mission — one change deepens ALL CF lists):**
- **Sortable columns** — click any CF list column header to sort (numeric-aware, 3-state asc/desc/off; lookup columns sort by resolved label). Advances the grid dimension of every 🟡 worklist/register at once.
- **CSV export** — universal `⬇ Export CSV` on every CF list; exports the current filtered+sorted rows through the configured columns (lookups export their resolved label). Closes the "export" dimension across claims/denials/orders/referrals/eligibility/documents/immunizations registers with zero per-screen code (opt-out `search.export=false`).

---

## Crosswalk

| CF screen | Status | Live build | ECW ID(s) it delivers a surface for | Gate proof |
|---|---|---|---|---|
| **EncounterCF** | 🟡 (deep on core) | live | ECW-CL-3 (progress note), CL-4 (HPI), CL-5 (med rec via eRx/med-promotion), CL-9 (assessment/plan), CL-17..23 (orders in-note partial) | CF-14, CF-16 |
| **Patient ChartCF** | 🟡 | live | ECW-CL-2 (right chart panel), ECW-FO-1 (patient hub), ECW-FO-16 (patient information), + Visit History (CL) | CF-6 |
| **ProvidersCF** | 🟡 | live | ECW-AD provider directory rows | CF-7 |
| **EligibilityCF** | 🟡 (deep) | live | ECW-BI-19..25 (eligibility depth: 270/271, benefits, manual verify, batch) | CF-12, CF-13 |
| **ClaimsCF** | 🟡 | live | ECW-BI-2 (claim window) + claim worklist | CF-8 |
| **Charge MasterCF** | 🟡 (deep edit) | live | ECW-BI fee-schedule rows | CF-9 |
| **Claim ReviewCF** | 🟡 | live | ECW-BI-7 (in-note billing / charge review) | CF-8 |
| **AuthorizationsCF** | 🟡 | live | ECW-BI auth rows | CF-9 |
| **EDICF** | 🟡 | live | ECW interop / clearinghouse submission rows | CF-8 |
| **Visit TypesCF** | 🟡 | 1706 | ECW-SC-4 (visit type codes admin), SC-7 (visit type editor field set) | CF-10 |
| **Claim StatusesCF** | 🟢 | 1709 | ECW-BI-29 (claim-status workflow codes) | CF-11 |
| **SchedulingCF / AppointmentsCF** | 🟡 (slotgrid) | live | ECW-SC-8 (scheduling engine + multi-appt search), SC-13 (scheduler surface), SC-14 (appointment dialog) | — |
| **AvailabilityCF** | 🟡 | live | ECW-SC-10 (configure working hours) | — |
| **ResourceCF** | 🟡 | live | ECW-SC-11 (schedule exceptions + block hours) | — |
| **WaitlistCF** | 🟡 | live | ECW-SC-6 (multiple appointments / waitlist) | — |
| **Check-InCF** | 🟡 | live | ECW-FO-7 (check-in alerts), front-desk check-in flow | CF-14 |
| **CheckoutCF** | 🟡 | live | ECW-BI checkout + patient-payment collection | CF-14 |
| **DenialsCF** | 🟡 | live | ECW-BI denial worklist rows | CF-15 |
| **PayersCF** | 🟡 | live | ECW-BI/AD payer master rows | CF-15 |
| **PatientsCF** | 🟡 | live | ECW-FO-2 (patient lookup), FO demographics/registration | CF-15 |
| **RulesCF** | 🟡 | live | ECW-BI NCCI/MUE billing-rule rows | — |
| **RemittanceCF** | 🟡 | live | ECW-BI ERA / remittance batch rows | — |
| **StatementsCF** | 🟡 | live | ECW-BI patient-statement rows | — |
| **DocumentsCF** | 🟡 **(was ⬜)** | live | **ECW-DOC-1 (Patient Documents)** — currently ⬜ in matrix, FLIP to 🟡 | — |
| **EDI QueueCF** | 🟡 | live | ECW interop EDI-queue rows | — |
| **PharmaciesCF** | 🟡 | live | ECW-RX pharmacy directory rows | — |
| **LocationsCF** | 🟡 | live | ECW-AD practice-locations rows | — |
| **Care TeamsCF** | 🟡 | live | ECW-AD/CL care-team rows | — |
| **AppealsCF** | 🟡 | live | ECW-BI appeals rows | — |
| **ImmunizationsCF** | 🟢 | 1783 | **ECW-CL-56..66 (immunization suite — admin record)** | CF-17 |
| **OrdersCF** | ✅gate → 🟡 **(was ⬜)** | pending promote | **ECW-OR-1 (Manage Orders)**, ECW-CL-17..23 (lab/imaging order entry) — FLIP from ⬜ | CF-18 |
| **ReferralsCF** | ✅gate → 🟡 **(was ⬜)** | pending promote | **ECW-RF-1 (Outgoing Referral)** — FLIP from ⬜ | CF-19 |

---

## Immediate scoreboard corrections requested (AgentECW)

These rows have a **live CF surface** but are still ⬜/unmapped in the matrix — flipping them is the fastest honest-number gain:
- **ECW-DOC-1** Patient Documents → 🟡 (DocumentsCF live, 100 rows verified)
- **ECW-OR-1** Manage Orders → 🟡 (OrdersCF gate-proven CF-18, promotes with the next clean build)
- **ECW-RF-1** Outgoing Referral → 🟡 (ReferralsCF gate-proven CF-19)
- **ECW-CL-56..66** Immunizations → 🟢 (ImmunizationsCF live 1783, CF-17)
- **ECW-BI-29** Claim status codes → 🟢 (Claim StatusesCF live 1709, CF-11)

## Deepening plan (🟡→🟢, highest yield)

Per the directive, the fastest 🟡→🟢 conversions are the already-deep screens needing field completion + a depth-proof scenario:
1. **EligibilityCF** (BI-19..25) — already deepest; add demographics-compare (BI-25) + per-payer flags (AD-24) → 🟢.
2. **EncounterCF** (CL-3/4/5) — the highest-Blocks screen; field-complete HPI/ROS/exam templates → 🟢.
3. **Patient ChartCF** (CL-2, FO-1/16) — problem/allergy/med/immunization/orders tabs all present; field-complete → 🟢.
4. **Charge MasterCF / ClaimsCF** — already full-edit; add depth scenarios → 🟢.

## Review Epilog — 2026-07-24

- Updated "As of" date from 2026-07-17 / build 1793 to **2026-07-24 / build 1943** (gate 251/251 GREEN).
- The ECW crosswalk mapping and status indicators (🟢/🟡/✅gate) remain accurate; no new CF screens added since the last pass that would change rows.
- The two reusable framework capabilities (sortable columns + CSV export) noted as live at build 1793 remain live and unchanged.
- The deepening plan (EligibilityCF → EncounterCF → Patient ChartCF → Charge/Claims) remains the priority order for 🟡→🟢 conversions.
