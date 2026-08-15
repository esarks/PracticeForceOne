---
title: "PracticeForceOneFounderRoadmap"
---

# PracticeForceOne Founder Roadmap

Review date: 2026-07-24
Last updated: 2026-07-24

## Purpose

This roadmap prioritizes PracticeForceOne as a founder-led, AI-assisted **configurable healthcare application platform** (FOUNDER DIRECTIVE 2026-07-19) with growing ambulatory clinical depth. It was originally written against the product state through MR2; since then MR3-MR7 have ALL been delivered (MR7 closed 2026-07-07). Active MRs as of 2026-07-24: MR8 (platform security + governance), MR9 (ECW Front Office/Portal parity), MR10 (Architecture Upgrade Program, paper-only pre-August). The **August clinic demo** (Schedule→Check-In→Eligibility→Chart→Encounter→Checkout, 14 CF forms, gate 251/251 GREEN on build 1943) is the current TOP priority. The strategic priorities below remain the founder's operating frame; per-release tracking lives in the MR tables ([PracticeForceOneMR8Table](<PracticeForceOneMR8Table.md>), [PracticeForceOneMR9Table](<PracticeForceOneMR9Table.md>)).

## Current Product Baseline

PracticeForceOne now includes:

1. Mature RCM workflows for eligibility, authorizations, claims, EDI, denials, appeals, payments, statements, ERA, reporting, audit, and AI-assisted revenue work.
2. Patient Portal registration and check-in with Medicare, insurance, card evidence, medication, allergy, and Dynamic Forms capture.
3. Portal Users review for submitted registration and check-in packets.
4. Patient Chart for portal evidence, insurance, medication/allergy context, clinical follow-up, and encounter context.
5. Calendar and provider openings for appointment creation and modification.
6. Kanban as the daily operating command center for front desk, clinical, provider, billing, blocked work, and follow-up workflows.
7. Encounter pilot with save/sign/return-to-Kanban and charge-review handoff.
8. Charge Review with dynamic CPT/HCPCS search expectations and claim handoff.
9. Care-plan-lite clinical follow-up tasks.
10. MR2 static evidence, UAT catalog, help coverage, training docs, and wiki release documentation.

## Founder Priority

The founder priority is:

> Prove the full patient-to-payment workflow in a real ambulatory operating day, then sell the workflow control and revenue impact.

That means the highest-value work is not broad feature count. It is making the live workflow dependable:

1. Portal submission creates the right clinic work.
2. Staff can review registration and check-in without missing evidence.
3. Card images load everywhere staff needs them.
4. Kanban reflects the true state of the visit.
5. Encounter context never loses patient/appointment identity.
6. Charge review finds codes and moves cleanly into billing.
7. Billing can complete the claim/payment/denial/statement loop.

## Immediate Roadmap

| Priority | Outcome | Why it matters |
| --- | --- | --- |
| 1 | Credentialed runtime UAT for MR2 | Static evidence is strong; founder confidence requires live browser/API proof |
| 2 | Portal image evidence hardening | Staff must see actual cards, not broken previews or empty file names |
| 3 | Patient Chart insurance save hardening | Insurance edits are core to registration and billing readiness |
| 4 | Kanban duplicate-card and invalid-state prevention | The board must be trusted as the operating command center |
| 5 | Patient Arrived and appointment-link workflow | Front desk must move work cleanly into clinic flow |
| 6 | Encounter save/sign context preservation | Provider workflow cannot lose patient or appointment context |
| 7 | Charge Review CPT/HCPCS staging data and search | Billing cannot work if codes are not searchable |
| 8 | Full use-case training walkthroughs | Clinic users need role-based, step-by-step workflow support |

## Customer-Ready Definition

PracticeForceOne is ready for a pilot clinic when:

1. Portal registration can be completed and reviewed.
2. Portal check-in can be completed and reviewed.
3. Patient Chart saves insurance and medication edits reliably.
4. Card evidence previews from Portal Users, Patient Chart, and check-in review.
5. Kanban cards do not duplicate or appear in invalid states.
6. Arrival, rooming, provider, sign, charge, and billing actions move the same card through the correct lanes.
7. Encounter save/sign works from a real appointment-linked patient.
8. CPT/HCPCS and medication searches are populated and return multiple relevant matches.
9. Billing can complete claim, denial/payment, statement, and closure workflows.
10. Training and help docs match the actual screens.

## Sales Narrative

PracticeForceOne should be presented as:

1. A daily operations board for the practice.
2. A patient intake and evidence capture workflow.
3. A chart-to-charge-to-claim bridge.
4. A revenue operations system with denial prevention and appeals support.
5. A platform that can add deeper clinical record depth over time.

Avoid selling full certified clinical system depth until the product has the structured clinical data, interoperability, governance, and runtime evidence to support that claim.

## Build Discipline

1. Keep slices narrow.
2. Preserve JAC architecture.
3. Push wiki and code checkpoints as work completes.
4. Tie every feature to a user-visible workflow.
5. Keep AI suggestions human-reviewed.
6. Update UAT, help, training, and wiki docs with behavior changes.
7. Prioritize runtime proof over speculative roadmap breadth.

## Related Documents

- [PracticeForceOneFullFeatures](<PracticeForceOneFullFeatures.md>)
- [PracticeForceOneWorkflowDescription](<PracticeForceOneWorkflowDescription.md>)
- [PracticeForceOneTraining](<PracticeForceOneTraining.md>)
- [PracticeForceOneMR2UATEvidenceMatrix](<PracticeForceOneMR2UATEvidenceMatrix.md>)

---

## Review Epilog -- 2026-06-23

Reviewed 2026-06-23 as part of a full PracticeForceOne wiki truth-pass. Status: UPDATED.

- Verified the strategic narrative (founder priority, customer-ready definition, sales narrative, build discipline) is evergreen and still accurate; no changes to that prose.
- Corrected the stale "product state through MR2" framing in Purpose: MR3-MR6 are delivered (MR6 delivered 2026-06-22, live build ~1953) and MR7 is the active backlog; added pointers to the MR6/MR7 tables. Refreshed Review/Last-updated dates to 2026-06-23. Converted the Related Documents links from bare wiki-style to relative [Page](<Page.md>) form.
- Flag: the "Immediate Roadmap" priority table is written from the MR2 runtime-UAT era. Most of those outcomes (credentialed runtime UAT, image-evidence hardening, Kanban duplicate/invalid-state prevention, encounter context preservation, charge-review search) have since been addressed across MR3-MR6. Left the table as the founder's prioritization frame rather than rewrite it; founder may want to re-cut it against the live MR7 backlog.

## Review Epilog -- 2026-07-24

- Live build 1943, gate 251/251 GREEN. August demo path (14 CF forms) PASSES — this is now the active top priority, not runtime UAT.
- Updated Purpose section: MR7 DELIVERED 2026-07-07; active MRs now MR8/MR9/MR10; platform is a "configurable healthcare application platform" (FOUNDER DIRECTIVE 2026-07-19, not merely a revenue platform); updated table pointers to MR8/MR9 tables.
- "Immediate Roadmap" table retained as historical founder prioritization frame (the MR2-era items have been substantially addressed). Founder should re-cut against current August demo + MR8/MR9 backlog.
- Strategic narrative, customer-ready definition, build discipline, and sales guidance remain accurate and were not changed.
