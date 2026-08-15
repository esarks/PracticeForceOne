---
title: "PracticeForceOneOnePager"
---

# PracticeForceOne One-Pager

Review date: 2026-07-24
Last updated: 2026-07-24

**Last reviewed: 2026-07-24**

Status: Current executive one-page summary. Live prod build: **1943** (gate 251/251 GREEN). MR2–MR7 all delivered. Active: MR8 (platform security), MR9 (ECW parity), MR10 (architecture upgrade, paper-only). CF catalog: 540+ definitions live.

## PracticeForceOne

Every patient. Every task. Every claim. One platform.

PracticeForceOne is a standalone ambulatory clinic operating platform that connects patient access, portal review, scheduling, Patient Chart, Kanban, encounter workflow, coding, claims, denials, payments, A/R, patient balances, follow-up, management oversight, staging, audit, and administration.

## Who It Helps

| Audience | Value |
| --- | --- |
| Practice owner | Sees what is stuck today across patient flow and revenue cycle |
| Practice manager | Tracks blocked, stale, assigned, unassigned, and high-risk work |
| Front desk | Reviews registrations, schedules patients, marks arrival, resolves insurance exceptions |
| Clinical staff | Reviews check-in packets, rooms patients, reconciles medications, completes follow-up |
| Provider | Opens encounters, documents visits, signs notes, hands work to coding |
| Coder/biller | Searches CPT/HCPCS, reviews charges, scrubs claims, works denials and A/R |
| Administrator | Manages practices, users, payers, reference data, staging, audit, runtime logs, and settings |

## Core Modules

- Patient Portal: registration, email confirmation, kiosk/iPad check-in, forms, medication/allergy capture, Medicare and insurance card evidence.
- Portal Users: staff review, Review Registration, create/link chart, submitted evidence, medication evidence, card images, and duplicate prevention.
- Patient Chart: demographics, insurance, documents, portal forms, medications, allergies, problems, encounters, clinical follow-up, and review status.
- Calendar: provider availability, full-day slots, provider openings, create/modify appointment, and Kanban return focus.
- Kanban: source-record operating board from Patient Needs Appointment through Patient Balance Needed.
- Encounter: rooming, provider documentation, ready-to-sign, sign, undo-sign, corrected/superseded, and coding handoff.
- Charge Review: CPT/HCPCS search by code/description, multiple matches, NCCI, MUE, charge optimization, and ready-to-claim.
- RCM: claims, scrub, ready-to-submit, payer response, payments/ERA, denials/appeals, A/R, and patient balance.
- Admin/Ops: organizations, practices, users, providers, payers, reference data, clearinghouse, staging, UAT, audit, runtime logs, help, and security.

## Key Differentiators

- One command center for patient flow and revenue-cycle work.
- Source-record Kanban cards with clear next actions.
- Patient-submitted portal data is visible without bypassing staff review.
- Scheduling, arrival, check-in, rooming, provider documentation, signing, and coding remain distinct states.
- Medicare, primary, secondary, payer Other, Use Medicare, and card images are part of the insurance workflow.
- Medication and CPT/HCPCS search are dynamic, description-aware, and return multiple matches.
- Mock payer and staging workflows make demos, training, and UAT repeatable.
- AI-assisted coding, denial, appeal, and charge optimization features are governed by feature flags, audit, human review, and PHI controls.

## Current Release Status

MR2–MR7 are all delivered. Active development: **MR8** (platform security and governance), **MR9** (ECW portal + front-office parity), **MR10** (architecture upgrade program, paper-only pre-August). The full capability catalog is documented in [PracticeForceOneFullFeatures.md](<PracticeForceOneFullFeatures.md>).

Gate CF-14: **251/251 GREEN** on live build 1943. Deploys promote through the hermetic safe-canary `bin\cloud-deploy.ps1` path. CF catalog: 540+ configurable form definitions live (pfo-cf-v1). August 2026 demo path (Schedule→Check-In→Eligibility→Chart→Encounter→Checkout) verified end-to-end with demo data ready (Bay Area Cardiology, Steve Chen, 6 patients).

Production payer connectivity (clearinghouse M8-1 keystone), real-clinic cutover, e-prescribing (Surescripts M8-30), lab/imaging interfaces, and broad external EHR integration remain future milestone decisions.

---

## Review Epilog — 2026-07-24

Reviewed 2026-07-24. Status: UPDATED.

- Updated status header and "Current Release Status" section: live build is now **1943** (gate 251/251 GREEN); MR2–MR7 all delivered; active MRs are MR8/MR9/MR10; CF catalog at 540+ definitions; August demo path verified.
- Platform identity confirmed: one-pager describes a "standalone ambulatory clinic operating platform" — consistent with the configurable healthcare app platform directive; no "EHR product identity" corrections needed.
- Deploy path updated to `bin\cloud-deploy.ps1` (hermetic safe-canary); removed reference to stale MR7Table active-backlog framing.
- Previous epilog (2026-06-23) retained above this entry.
