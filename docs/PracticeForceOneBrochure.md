---
title: "PracticeForceOneBrochure"
---

# PracticeForceOne Brochure

Review date: 2026-07-24
Last updated: 2026-07-24

**Last reviewed: 2026-07-24**

Status: Current customer-facing brochure. Live prod build: **1943** (gate 251/251 GREEN). MR2–MR7 all delivered; active MRs: MR8 (platform security), MR9 (ECW parity), MR10 (architecture upgrade, paper-only). CF catalog: 540+ definitions live. August 2026 demo path (Schedule→Check-In→Eligibility→Chart→Encounter→Checkout) verified end-to-end.

## Every Patient. Every Task. Every Claim. One Platform.

PracticeForceOne is a complete ambulatory clinic operating platform. It connects portal registration, check-in, scheduling, chart review, encounter workflow, coding, claims, payer response, payments, denials, A/R, patient balances, follow-up, and management oversight in one daily command center.

Clinics do not fail because one person missed one step. They struggle because the work crosses too many disconnected systems. PracticeForceOne makes the work visible, assigns the next action, and keeps the patient, appointment, chart, encounter, claim, and balance connected.

## What The Clinic Can See

PracticeForceOne gives the team one place to answer:

- Who is trying to register.
- Who is scheduled.
- Who has arrived.
- Who still needs check-in, rooming, insurance review, or provider documentation.
- Which encounters are ready to sign.
- Which charges are ready to code.
- Which claims are ready, submitted, denied, paid, or waiting.
- Which A/R, patient balance, and follow-up work needs action.
- Which work is blocked, assigned, stale, or unowned.

## Built For The Real Clinic Day

| Clinic Need | PracticeForceOne Capability |
| --- | --- |
| New patient registration | Portal registration, email confirmation, Portal Users review, create/link chart, duplicate prevention |
| Patient check-in | Portal/iPad/kiosk check-in, visit reason, forms, medications, allergies, insurance, Medicare, consent |
| Insurance evidence | Medicare, primary, secondary, payer Other, Use Medicare, card images, portal evidence, staff review |
| Scheduling | Provider calendar, full-day slots, provider openings, create/modify appointment, Kanban return focus |
| Daily work control | Source-record Kanban lanes from Patient Scheduled through Patient Balance Needed |
| Clinical readiness | Patient Chart, submitted forms, medications, allergies, clinical follow-up, care-plan tasks |
| Provider workflow | Encounter launch, draft/save, documentation states, ready-to-sign, sign, undo-sign, coding handoff |
| Coding and charge review | CPT/HCPCS dynamic search, NCCI, MUE, charge optimization, ready-to-claim workflow |
| Revenue cycle | Claims, scrub, ready-to-submit, payer response, payments/ERA, denials, appeals, A/R, patient balance |
| Management | All Work, owner views, blocked summaries, assigned-to controls, reports, UAT evidence, audit/runtime logs |

## Patient Access

Patients can register and check in through the portal. They can provide demographics, contact details, Medicare, primary insurance, secondary insurance, card images, medications, allergies, visit reason, forms, and consent/contact information.

The clinic stays in control. Patient-submitted information is evidence until staff or provider review accepts it into the chart or workflow.

## Portal Users

Portal Users gives staff a queue for portal registrations, check-ins, submitted forms, establishment requests, insurance evidence, medication evidence, and chart linking.

Staff can review a registration, create a patient chart, link to an existing chart, inspect card images, review submitted insurance and medications, and keep the correct source record attached to the Kanban card.

## Patient Chart

The Patient Chart keeps demographics, contacts, Medicare, insurance, card evidence, portal forms, check-in packets, medications, allergies, problems, documents, encounters, and clinical follow-up together.

Staff can edit insurance, use Medicare to fill primary insurance, choose Other when a payer is not listed, review portal evidence, edit medications after entry, and return to the correct Kanban context.

## Calendar And Scheduling

The Calendar shows provider availability, full-day slots, and openings. Staff can create appointments and save appointment changes without incorrectly advancing the patient to arrival, rooming, or provider-ready states.

## Kanban Command Center

Kanban is the live operating map of the practice. Cards are generated from source records: appointments, portal registrations, check-in packets, encounters, claims, denials, A/R items, patient balances, and clinical follow-up tasks.

Current lanes cover the clinic day and revenue workflow: Patient Needs Appointment, Patient Scheduled, Needs Pre-Check-In, Review Registration, Patient Arrived, Insurance Exception, Ready For Rooming, Rooming / Intake In Progress, Ready For Provider, Provider Encounter In Progress, Clinical Follow-Up, Provider Documentation Incomplete, Ready To Sign Encounter, Ready For Coding, Ready To Claim, Ready To Submit, Payer Response, Denial / Appeal Needed, A/R Follow-Up, and Patient Balance Needed.

The right pane gives staff the next action: review registration, modify appointment, mark patient arrived, verify insurance, check in, send to room, open encounter, sign, code, work a claim, work a denial, complete follow-up, or remove the card when allowed.

## Encounter And Clinical Follow-Up

The encounter workspace supports rooming, provider documentation, ready-to-sign, signature, undo-sign, corrected/superseded documentation, portal-form import, and coding handoff.

Clinical Follow-Up and care-plan-lite tasks help the team track follow-up, order/result review, procedure readiness, due dates, owners, completion, and cancellation.

## Coding, Claims, And RCM

PracticeForceOne connects signed documentation to coding and charge review, then to claims, payer response, denials, appeals, payments, A/R, patient balance, and reporting.

CPT/HCPCS search works by code or description. It supports contains matching, all-token matching, and multiple relevant matches. Searching for a term like office should find office-visit codes even when the description does not start with office.

Mock clearinghouse and mock payer workflows support training and UAT until production integrations are approved.

## AI With Guardrails

PracticeForceOne supports AI-assisted billing and denial workflows where enabled, including coding assistance, denial explanation, appeal drafting, charge optimization, and operational recommendations.

AI remains assistive and auditable. Feature flags, PHI scrub controls, human review, and deterministic mock behavior govern usage.

## Built For Growth

PracticeForceOne supports one clinic, multiple practices, billing-service operations, seeded staging environments, import preview, demo reset, reference-code promotion, audit logs, runtime logs, help, user acceptance testing, and release evidence.

## Why It Is Different

- The patient, appointment, chart, encounter, claim, denial, and balance stay connected.
- The daily board shows work, owner, blocker, and next action.
- Patient-submitted data is visible without bypassing clinic review.
- Scheduling, arrival, rooming, provider documentation, signing, coding, and billing remain distinct states.
- Revenue-cycle work is operational work, not only a report.
- Training, staging, evidence, and auditability are built into the product.

## Current Boundary

Current proof uses seeded data, mock payer infrastructure, static validators, runtime UAT wrapper support, help/training coverage, and release evidence. Credentialed browser/API UAT still requires `UAT_PASSWORD`. Production payer connectivity and real-clinic cutover are separate approval decisions.

---

## Review Epilog — 2026-07-24

Reviewed 2026-07-24 as part of a full PracticeForceOne wiki truth-pass. Status: UPDATED.

- Platform identity confirmed accurate: brochure positions PracticeForceOne as an ambulatory clinic operating platform (consistent with the Founder 2026-07-19 configurable healthcare app platform directive); no "EHR as product identity" language found to correct.
- Updated status header: live build is now **1943** (gate 251/251 GREEN); MR2–MR7 all delivered; active MRs are MR8/MR9/MR10; CF catalog at 540+ definitions; August demo path verified end-to-end.
- Capability narrative (portal, Kanban lanes, encounter workflow, coding/claims/RCM, AI-with-guardrails, mock-payer boundary) remains accurate and was left intact in tone and substance.
- Previous epilog (2026-06-23) retained above this entry for historical context.
