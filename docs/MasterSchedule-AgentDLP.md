---
title: "MasterSchedule AgentDLP"
---

# MasterSchedule — AgentDLP assignments

**63 tasks** (27 Done). Mirror of `MasterSchedule.xlsx` (single source of truth, edited directly by all lanes; AgentDLP regenerates these mirrors by READING the xlsx). Full cross-lane view + dependency chains are in the xlsx.

> Coordinator = AgentDLP. If a parity row is not truly yours, flag AgentDLP. Depends On = must finish first; Blocks = waits on this.

Live build 1734 · updated 2026-07-12

## August-Demo (P1) — 48 tasks

| ID | Area | Task | Depends On | Blocks | Status | Priority/Size | Source | Notes |
|---|---|---|---|---|---|---|---|---|
| X-3 | Platform | Nav-audit each deploy (CF forms shipped without a sidebar link) | — | 15 tasks | In Progress | P1 | Demo path | Caught AppointmentsCF |
| S-2 | 1 Schedule | Wire AppointmentsCF into sidebar navigation | S-1 | — | Done | P1 | Demo path | Was un-discoverable |
| S-5 | 1 Schedule | Certify Schedule on CF -> GREEN-ON-CF | S-1,S-3 | — | Done | P1 | Demo path | Two-step SchedulingCF slot picker certified on 1725 |
| AS-3 | 2 Appt Search | Certify Appointment Search on CF -> GREEN-ON-CF | AS-1 | — | Open | P1 | Demo path |  |
| PP-1 | 3 Portal/Check-In | New Patient Intake entry carries clinic into wizard | — | — | Done | P1 | Demo path | portalpages07 |
| PP-2 | 3 Portal/Check-In | Portal wizard: header Send + visible submit errors | — | — | Done | P0 | Demo path | portalpages09 deeper fix; LIVE+CERT 1719 |
| CI-2 | 3 Portal/Check-In | Certify Check-InCF | CI-1 | — | In Progress | P1 | Demo path | Render-cert PASS on 1715; in-journey GREEN-ON-CF pending (CERT-3) |
| CI-3 | 3 Portal/Check-In | Check-In review -> insurance promotion (unknown-payer fix) | — | EL-2 | Done | P0 | Demo path | CF1-D2 fixed + re-certified 1713 |
| EL-2 | 4 Eligibility | Certify Eligibility over promoted coverage | EL-1,CI-3 | — | Done | P1 | Demo path |  |
| PC-2 | 5 Chart/Rooming | Certify Rooming/Intake as a distinct nurse step | PC-1 | — | Done | P1 | Demo path | DLPCF1 run 4 |
| EN-3 | 6 Encounter | Certify Provider Encounter | EN-1 | CH-2 | Done | P1 | Demo path | DLPCF1 run 4 |
| CO-3 | 7 Checkout | Certify Checkout (next-appt + payment) -> GREEN-ON-CF | CO-1,CO-2 | — | Open | P1 | Demo path |  |
| CH-2 | 8 Charge/Coding | Certify Charge Coding (charge-review -> claim) | CH-1,EN-3 | CL-4 | Done | P1 | Demo path | DLPCF1 run 4 |
| CL-4 | 9 Claims/EDI | Certify Scrubbing + Clearinghouse Submission | CL-1,CL-3,CH-2 | DN-2 | Done | P1 | Demo path | DLPCF1 run 4 |
| DN-2 | 10 Denials | Certify Denial Processing & Resolution | CL-4 | — | Done | P1 | Demo path | DLPCF1 run 4 |
| CERT-1 | Certification | DLPCF1 FULL 14-step runner + run | — | CERT-2, CERT-4, CERT-7, CERT-8, CERT-9 | Done | P0 | Demo path | 14/15 on 1715 |
| CERT-2 | Certification | DLPCF2 full runner (established-patient continuity) | CERT-1 | — | Open | P1 | Demo path |  |
| CERT-3 | Certification | Certify AppointmentsCF/Check-InCF/CheckoutCF in-journey | S-1,CI-1,CO-1 | — | Open | P1 | Demo path |  |
| CERT-4 | Certification | Illustrated per-step walkthroughs (screenshots -> docx) | CERT-1 | — | Open | P1 | Demo path |  |
| CERT-5 | Certification | Re-certify on every demo-path build | — | — | In Progress | P1 | Demo path | Standing duty |
| CERT-6 | Certification | DLPCF Certification Library (scenario index by population x insurance x workflow) | — | — | In Progress | P1 | Demo path | Library framework published; 10-scenario clinic cross-section |
| CERT-7 | Certification | DLPCF3 Pediatric well-child (Medicaid, guardian) - runner + run | CERT-1 | CERT-10 | Open | P1 | Demo path | New population+payer+workflow; DEFINED |
| CERT-8 | Certification | DLPCF4 Self-pay/uninsured (time-of-service payment) - runner + run | CERT-1 | CERT-10 | Open | P1 | Demo path | Money path without insurance |
| CERT-9 | Certification | DLPCF5 Dual coverage (Medicare+secondary) + denial->appeal - runner + run | CERT-1 | CERT-10 | Open | P1 | Demo path | COB + denial depth |
| CERT-10 | Certification | DLPCF6-10 (workers-comp/auth, telehealth, AWV, walk-in/no-show, complex visit) | CERT-7,CERT-8,CERT-9 | — | Open | P2 | Demo path | Full clinic-week coverage |
| PR-6 | Production | SecurityFilter enforcement (T2c/T2d) | — | — | Parked | INFRA | Demo path | PARKED until after demo |
| KB-1 | Kanban / Front-desk | Kanban "Insurance verified" chip when eligibility is active | — | — | Done | P1 | Founder 07-11 | LIVE 1720; CERT-C pass |
| KB-2 | Kanban / eRx | Send a stranded no-pharmacy eRx draft from the board | — | — | Done | P0 | Founder 07-11 | LIVE 1721; CERT-A pass, UI re-cert pending |
| S-3 | 1 Schedule | SchedulingCF native slotgrid (month+day slot picker) | — | — | Done | P1 | Founder 07-11/12 | LIVE+CERT 1725; cfr011 |
| RS-1 | 1 Schedule | ResourceCF (rooms/equipment blocks) | — | — | Done | P2 | Founder 07-11/12 | LIVE 1726 |
| AV-1 | 1 Schedule | AvailabilityCF (templates browse) | — | — | Done | P2 | Founder 07-11/12 | LIVE 1726; editor = follow-up |
| KB-3 | Kanban | Future-checkin no longer vanishes | — | — | Done | P0 | Founder 07-11/12 | LIVE 1731 (09f561a75) |
| ST-1 | Staging | Restage seeds visit types | — | — | In Progress | P1 | Founder 07-11/12 | wire demo appointment_types seed into restage |
| KB-4 | Kanban | Kanban -> EncounterCF nav | — | — | Done | P1 | Founder 07-12 | LIVE 1731 (a48cc074f); browser-certified |
| KB-5 | Kanban | Kanban -> Check-InCF nav | — | — | Done | P1 | Founder 07-12 | LIVE 1734 (0940a1b67); verified served+config+API |
| KB-6 | Kanban | Duplicate Open Encounter dedup | — | — | Done | P1 | Founder 07-12 | LIVE 1733 (2bdc103be) |
| KB-7 | Kanban | Kanban -> CheckoutCF nav | — | — | Open | P1 | Founder 07-12 | no checkout lane; ownership Q to AgentCF |
| CERT-EE | Certification | End-to-end workflow cert (6 lenses) | — | — | In Progress | P1 | Founder 07-12 | charter shift; cert-ledger-0712.md; blocked on browser harness (L4) |
| CFX-1 | Legacy->CF Program | Legacy->CF conversion program (umbrella) | — | — | In Progress | P1 | Founder 07-12 | tracker PracticeForceOneCFConversionTable.md |
| CFX-2 | Legacy->CF Program | Portal UsersCF (1st net-new) | — | — | In Progress | P1 | Founder 07-12 | config re-PUT pending |
| CFX-3 | Legacy->CF Program | Twin-retire batch 1 (7 full-CRUD) | — | — | Done | P1 | Founder 07-12 | LIVE 1736; evidence-based |
| CFX-4 | Legacy->CF Program | Held twins parity gaps | — | — | Open | P1 | Founder 07-12 | 9 held (read-only/browse CFs); founder Q open |
| CFX-5 | Legacy->CF Program | Next net-new P1 CFs (Payments/Verify-Insurance/Pharmacies) | — | — | Open | P1 | Founder 07-12 | demo-path |
| SCF-1 | Scheduling | AvailabilityCF drag-paint availgrid | — | — | Done | P1 | Founder 07-13 | LIVE 1746 |
| SCF-2 | Scheduling | SchedulingCF book+modify | — | — | Done | P1 | Founder 07-13 | LIVE |
| SCF-3 | Scheduling | Kanban Create/Review-Reg -> CF | — | — | Done | P1 | Founder 07-13 | LIVE |
| SCF-4 | Scheduling | Provider CalendarCF | — | — | Done | P1 | Founder 07-13 | LIVE 1746 |
| SCF-5 | Scheduling | Patient PCP + auto-populate | — | — | Done | P1 | Founder 07-13 | LIVE 1744 |

## Parity (post-demo) — 15 tasks

| ID | Area | Task | Depends On | Blocks | Status | Priority/Size | Source | Notes |
|---|---|---|---|---|---|---|---|---|
| ECW-GL-1 | GL Global/nav | global work-queue jellybean bar + consistent module rail | X-3 | — | Live — 1794 | — | ECW | LIVE+PROVEN 1794: 3 front-desk beans (Sched/Arr/Room = today's board) + 5 RCM queue beans, workflow-ordered, Kanban deep-links, 60s-cached; gl1-deepen-proof 5/5; sidebar.js 0bd91c7d0 + 545ec4208 |
| ECW-GL-2 | GL Global/nav | per-user favorites/pinning (belongs to the per-user preferences engine gap) | X-3 | — | Open | — | ECW | global · Favorites |
| ECW-GL-3 | GL Global/nav | concurrent-edit locking (or at least conflict detection) on patient demographics + shared entities | X-3 | — | Live — 1793 | — | ECW | LIVE+PROVEN 1793: gl3-proof 8/8 (acquire/renew/check/cross-user-conflict/holder-only-release/tenancy-403); /api/record-locks + patients.js hook; RecordLocksRoutes 776364021 |
| CER-GL-1 | GL Global/nav | banner w/ code-status + safety/process/isolation alerts + encounter status | X-3 | — | Open | M | Cerner | Demographics banner |
| CER-GL-2 | GL Global/nav | chart-context state warnings (wrong-encounter protection) | X-3 | — | Open | S | Cerner | Discharged-patient guard |
| CER-GL-3 | GL Global/nav | patient tab strip (M6-9 PatientContext is the seed) | X-3 | — | Open | M | Cerner | Tabbed patient sessions |
| CER-GL-4 | GL Global/nav | per-role chart-section scoping + chart PDF export | X-3 | — | Open | M | Cerner | Role-scoped chart + Print to PDF |
| CER-GL-5 | GL Global/nav | care-team multi-patient organizer surfaces | X-3 | — | Open | L | Cerner | Multi-patient team tools |
| CER-GL-6 | GL Global/nav | PFO pattern already close — extend cross-app | X-3 | — | Open | S | Cerner | In-app help portal |
| CER-GL-7 | GL Global/nav | user-built typed patient lists (census/panel worklists; CF-adjacent query lists) | X-3 | — | Open | L | Cerner | Typed patient-list builder |
| CER-GL-8 | GL Global/nav | access-purpose prompt + audit dimension (HIPAA minimum-necessary; pairs w/ CER-GL-7) | X-3 | — | Open | M | Cerner | Purpose-of-access prompt |
| CER-GL-9 | GL Global/nav | list-driven multi-patient overview w/ severity/new-results columns | X-3 | — | Open | L | Cerner | Patient Overview rounding grid |
| CER-GL-10 | GL Global/nav | encounter-context chart open + flag columns in search results | X-3 | — | Open | M | Cerner | Encounter Search |
| CER-GL-11 | GL Global/nav | config-driven banner layout (direct CF-lane fit: banner as a pfo-cf-v1 config; extends CER-GL-1) | X-3 | — | Open | M | Cerner | Configurable demographics banner |
| EPI-GL-1 | GL Global/nav | patient context rail + configurable summary widgets w/ completion checklists (CF-adjacent) | X-3 | — | Open | L | Epic | Storyboard context rail + Summary widgets |

