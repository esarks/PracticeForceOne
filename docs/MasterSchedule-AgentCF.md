---
title: "MasterSchedule AgentCF"
---

# MasterSchedule — AgentCF assignments

**435 tasks** (demo-path 17 + parity 418). Mirror of `MasterSchedule.xlsx` (single source of truth, edited directly by all lanes; AgentDLP regenerates these mirrors). Full cross-lane view + dependency chains are in the xlsx.

> Coordinator = AgentCF. If a parity row is not truly yours, flag AgentDLP. Depends On = must finish first; Blocks = waits on this.

Live build ~1874 (commit `4f851a5c7`; 3 builds WORKING) · updated 2026-07-22 · **57+ CF formTypes live (waves 1–15 + AgentUI wave); ECW 250/250 screen-level parity complete; Phase II deepening 🟡→🟢 per engine; AgentDB owns all backend (new 2026-07-22)**

## August-Demo (Phase 1) — 17 tasks

| ID | Area | Task | Depends On | Blocks | Status | Priority/Size | Source | Notes |
|---|---|---|---|---|---|---|---|---|
| X-4 | Platform | CF runtime capability expansion (pfo-cf-v1) - the platform IS the product | — | 56 tasks | In Progress | P1 | Demo path | Phase II: tabbed WQ engine live; render modes live; 57+ formTypes; deepening 🟡→🟢 per engine |
| S-1 | 1 Schedule | AppointmentsCF - appointment search + scheduling booking | X-4 | 31 tasks | Done | P1 | Demo path |  |
| S-3 | 1 Schedule | SchedulingCF booking depth (openings-driven slot pick) | S-1 | S-5 | Open | P1 | Demo path |  |
| AS-1 | 2 Appt Search | Appointment SearchCF (patient-first lookup) | S-1 | AS-2, AS-3 | Done | P1 | Demo path |  |
| CI-1 | 3 Portal/Check-In | Check-InCF (front-desk check-in surface) | X-4 | 90 tasks | Done | P1 | Demo path |  |
| EL-1 | 4 Eligibility | EligibilityCF surface | X-4 | EL-2 | Done | P1 | Demo path |  |
| PC-1 | 5 Chart/Rooming | Patient ChartCF (7-page detail) | X-4 | 15 tasks | Done | P1 | Demo path |  |
| PC-3 | 5 Chart/Rooming | RoomingCF/IntakeCF split (optional) | EN-1 | — | Open | P2 | Demo path |  |
| EN-1 | 6 Encounter | EncounterCF (typeaheads/computed/collections/sign) | X-4 | 210 tasks | Done | P1 | Demo path |  |
| EN-2 | 6 Encounter | CF1-D1 fix - carried-search row-click dead on EncounterCF | — | — | Done | P1 | Demo path |  |
| CO-1 | 7 Checkout | CheckoutCF surface | X-4 | CO-2, CO-3, CERT-3 | Done | P0 | Demo path |  |
| CO-2 | 7 Checkout | CF1-F-PAY - patient copay/payment at checkout | CO-1 | CO-3 | Done | P0 | Demo path |  |
| CH-1 | 8 Charge/Coding | Charge ReviewCF + Charge MasterCF | X-4 | CH-2 | Done | P1 | Demo path |  |
| CL-1 | 9 Claims/EDI | ClaimsCF surface | X-4 | 39 tasks | Done | P1 | Demo path |  |
| CL-2 | 9 Claims/EDI | Claim scrub view (clean-claim gate surface) | CL-1 | — | Open | P2 | Demo path |  |
| CL-3 | 9 Claims/EDI | EDICF clearinghouse submission surface | X-4 | CL-4 | Done | P1 | Demo path |  |
| DN-1 | 10 Denials | DenialsCF / AR-worklistCF surface | X-4 | — | Done | P1 | Demo path | denial_cf v1.1 live with tabbed work-queue (new/in_appeal/awaiting_payer/resolved/written_off); WQS fix commit a2e3a0494 in build |

## Parity (post-demo) — 418 tasks

| ID | Area | Task | Depends On | Blocks | Status | Priority/Size | Source | Notes |
|---|---|---|---|---|---|---|---|---|
| ECW-BI-1 | BI Billing | batch-based manual posting UX + posted/unposted reconciliation totals + fast patient-payment entry | CL-1 | — | Open | — | ECW |  |
| ECW-BI-2 | BI Billing | multi-payer bill-to on one claim, supervising/rendering split, claim error+log tabs in-window, HCFA print, patient-portion rollup | CL-1 | — | Open | — | ECW |  |
| ECW-BI-3 | BI Billing | manual check/EOB posting workspace w/ live check-balance reconciliation + CPT-level posting | CL-1 | — | Open | — | ECW |  |
| ECW-BI-4 | BI Billing | line-level manual posting + fee-schedule variance + responsibility cascade | CL-1 | — | Open | — | ECW |  |
| ECW-BI-5 | BI Billing | guarantor (responsible party) entity + posting by guarantor | CL-1 | — | Open | — | ECW |  |
| ECW-BI-6 | BI Billing | payment batch lifecycle + lock | CL-1 | — | Open | — | ECW |  |
| ECW-CL-1 | CL Clinical | encounter types beyond office visit (telephone/web), note lock state visible, no-show/non-billable rollups | EN-1 | — | Open | — | ECW |  |
| ECW-DOC-1 | DOC Documents | category folder tree + scan/fax/OCR pipeline + per-category forms | PC-1 | — | Open | — | ECW |  |
| ECW-CL-2 | CL Clinical | side-panel while charting + family/social/surgical structured histories + order sets | EN-1 | — | Open | — | ECW |  |
| ECW-CL-3 | CL Clinical | nurse-intake fields + interpreter + gyn/OB hx + ROS section | EN-1 | — | Open | — | ECW |  |
| ECW-CL-4 | CL Clinical | structured HPI w/ symptom attributes + template library + denies-all | EN-1 | — | Open | — | ECW |  |
| ECW-CL-5 | CL Clinical | patient med list + reconciliation workflow + interaction check | EN-1 | — | Open | — | ECW |  |
| ECW-CL-6 | CL Clinical | full structured history suite + verified attestations + PL promotion | EN-1 | — | Open | — | ECW |  |
| ECW-CL-7 | CL Clinical | vitals history grid + graphing + growth charts | EN-1 | — | Open | — | ECW |  |
| ECW-CL-8 | CL Clinical | exam template grid + defaults + drawing | EN-1 | — | Open | — | ECW |  |
| ECW-CL-9 | CL Clinical | assessment reuse + PL integration + smart ICD search | EN-1 | — | Open | — | ECW |  |
| ECW-CL-10 | CL Clinical | per-dx plan structure + Rx grid + education + referral hooks | EN-1 | — | Open | — | ECW |  |
| ECW-OR-1 | OR Orders | unified order manager + future/standing orders + defaults + result CC routing | EN-1 | — | Open | — | ECW |  |
| ECW-CL-11 | CL Clinical | terminology-layer search UX | EN-1 | — | Open | — | ECW |  |
| ECW-OR-2 | OR Orders | dx→CPT association at order time + ABN artifact | EN-1 | — | Open | — | ECW |  |
| ECW-RF-1 | RF Referrals | referral module (in+out) w/ lifecycle + tracking-to-consult-report | EN-1 | — | Open | — | ECW |  |
| ECW-CL-12 | CL Clinical | immunization module w/ inventory decrement + billing hook | EN-1 | — | Open | — | ECW |  |
| ECW-BI-7 | BI Billing | E&M coding assist + claim edits in encounter + follow-up capture→scheduling link | CL-1 | — | Open | — | ECW |  |
| ECW-CL-13 | CL Clinical | note lock styles/preview + fax/record | EN-1 | — | Open | — | ECW |  |
| ECW-FO-1 | FO Front office | hub w/ counts + action launcher + balance surface | CI-1 | — | Open | — | ECW |  |
| ECW-FO-2 | FO Front office | multi-key lookup + family copy + RTS flag | CI-1 | — | Open | — | ECW |  |
| ECW-CL-14 | CL Clinical | telephone/virtual encounter module w/ assignment queue + refill workflow | EN-1 | — | Open | — | ECW |  |
| ECW-RX-1 | RX Prescriptions | Rx benefit-eligibility surface + education + multi-channel send in the mock contract | EN-1 | — | Open | — | ECW |  |
| ECW-FO-3 | FO Front office | demographic completeness (esp. race/ethnicity/language for reporting + statement/finance flags) | CI-1 | — | Open | — | ECW |  |
| ECW-AD-1 | AD Admin | clinical-dictionary admin surfaces | X-4 | — | Open | — | ECW |  |
| ECW-CL-15 | CL Clinical | ship standard screening instrument library on dynamic-forms + score capture | EN-1 | — | Open | — | ECW |  |
| ECW-AN-1 | AN Analytics | population registry query + recall campaign engine | X-4 | — | Open | — | ECW |  |
| ECW-CL-16 | CL Clinical | AVS generation + education library | EN-1 | — | Open | — | ECW |  |
| ECW-AD-2 | AD Admin | guarantor + referring-physician + employer/attorney entities, patient merge tool | X-4 | — | Open | — | ECW |  |
| ECW-FO-4 | FO Front office | guarantor/emergency contact + consent flags + patient alert popup | CI-1 | — | Open | — | ECW |  |
| ECW-LB-1 | LB Labs | results inbox/review queue + cumulative view + portal publish control | EN-1 | — | Open | — | ECW |  |
| ECW-EN-1 | EN Encounter | communication-preferences model | EN-1 | — | Open | — | ECW |  |
| ECW-EN-2 | EN Encounter | recall/outreach worklist (pairs w/ Registry) | EN-1 | — | Open | — | ECW |  |
| ECW-SC-1 | SC Scheduling | bump list on calendar cancel/move | S-1 | — | Open | — | ECW |  |
| ECW-EN-3 | EN Encounter | outbound messaging campaign surface | EN-1 | — | Open | — | ECW |  |
| ECW-SC-2 | SC Scheduling | appointment clipboard ops + prints | S-1 | — | Open | — | ECW |  |
| ECW-CL-17 | CL Clinical | encounter-message queue w/ assignment (ties to I3 team-inbox thread) | EN-1 | — | Open | — | ECW |  |
| ECW-LB-2 | LB Labs | order/result tracking queue | EN-1 | — | Open | — | ECW |  |
| ECW-OR-3 | OR Orders | order-set bundles | EN-1 | — | Open | — | ECW |  |
| ECW-SC-3 | SC Scheduling | appointment-level billing hooks | S-1 | — | Open | — | ECW |  |
| ECW-AD-3 | AD Admin | registry export surface | X-4 | — | Open | — | ECW |  |
| ECW-CL-18 | CL Clinical | structured ROS w/ per-category defaults (speed-of-charting feature, not just a section) | EN-1 | — | Open | — | ECW |  |
| ECW-CL-19 | CL Clinical | structured family-history grid (feeds CDS + risk) | EN-1 | — | Open | — | ECW |  |
| ECW-AN-2 | AN Analytics | quality/UDS-style measure dashboard w/ period compare | X-4 | — | Open | — | ECW |  |
| ECW-AD-4 | AD Admin | measure library admin surface (pairs w/ MAQ dashboard ENH) | X-4 | — | Open | — | ECW |  |
| ECW-CL-20 | CL Clinical | interaction check surface at Rx entry w/ override audit | EN-1 | — | Open | — | ECW |  |
| ECW-AD-5 | AD Admin | web-enable + proxy + unlock/reset actions reachable from the patient record; per-type reminder prefs | X-4 | — | Open | — | ECW |  |
| ECW-AD-6 | AD Admin | pediatric proxy access w/ auto age-out (HIPAA adolescent privacy) | X-4 | — | Open | — | ECW |  |
| ECW-CL-21 | CL Clinical | SDOH capture (UDS/FQHC reporting + risk stratification) | EN-1 | — | Open | — | ECW |  |
| ECW-BI-8 | BI Billing | statement delivery preference per patient | CL-1 | — | Open | — | ECW |  |
| ECW-FO-5 | FO Front office | field-level portal-edit review+merge queue | CI-1 | — | Open | — | ECW |  |
| ECW-CL-22 | CL Clinical | practice->patient messaging w/ templates + modality prefs + audit | EN-1 | — | Open | — | ECW |  |
| ECW-CL-23 | CL Clinical | per-patient medication history timeline + refill action surface (PDMP = mock-seam) | EN-1 | — | Open | — | ECW |  |
| ECW-RX-2 | RX Prescriptions | structured sig builder for the Rx surface (pairs w/ mock eRx seam) | EN-1 | — | Open | — | ECW |  |
| ECW-CL-24 | CL Clinical | structured assessment picker + care-gap prompt at point of care | EN-1 | — | Open | — | ECW |  |
| ECW-CL-25 | CL Clinical | in-office med administration record (pairs w/ immunization lot inventory note) | EN-1 | — | Open | — | ECW |  |
| ECW-FO-6 | FO Front office | appointment-side financial+readiness panel | CI-1 | — | Open | — | ECW |  |
| ECW-CL-26 | CL Clinical | AWV visit template (G0438/G0439 revenue + compliance) | EN-1 | — | Open | — | ECW |  |
| ECW-AD-7 | AD Admin | practice-behavior defaults admin surface | X-4 | — | Open | — | ECW |  |
| ECW-CL-27 | CL Clinical | medication summary visualization (extends med-timeline note) | EN-1 | — | Open | — | ECW |  |
| ECW-CL-28 | CL Clinical | implant/device list on chart (ONC UDI requirement) | EN-1 | — | Open | — | ECW |  |
| ECW-AI-1 | AI AI | in-workflow AI entry points (PFO has the flag plumbing; needs chart-level surfaces) | X-4 | — | Open | — | ECW |  |
| ECW-AD-8 | AD Admin | coded-data remediation consoles (allergies today; same pattern fits meds/problems) | X-4 | — | Open | — | ECW |  |
| ECW-AD-9 | AD Admin | action-level permission registry + role-membership matrix UI + facility scoping; extends [security] PSAC note | X-4 | — | Open | — | ECW |  |
| ECW-BI-9 | BI Billing | printable CMS-1500 PDF from claim (payers w/o EDI + patient/legal requests); low priority | CL-1 | — | Open | — | ECW |  |
| ECW-AD-10 | AD Admin | per-user preference profile + out-of-office inbox forwarding (pairs w/ I3 team-inbox) + copy-settings-to-users admin action | X-4 | — | Open | — | ECW |  |
| ECW-AD-11 | AD Admin | per-user home-page preference + per-user alert-threshold settings (small, high perceived polish) | X-4 | — | Open | — | ECW |  |
| ECW-CL-29 | CL Clinical | structured result-attribute model + per-analyte trend view on results (device connectivity itself stays mocked) | EN-1 | — | Open | — | ECW |  |
| ECW-BI-10 | BI Billing | result-triggered charge hook (pairs w/ immunization billable auto-charge note) + controlled-substance transmission policy config | CL-1 | — | Open | — | ECW |  |
| ECW-AD-12 | AD Admin | provider credentialing model (license/DEA expiry feeds claim validity + Rx authority; expiry alerts natural autopilot candidate) | X-4 | — | Open | — | ECW |  |
| ECW-BI-11 | BI Billing | payer/facility-scoped provider billing-ID override model feeding claim generation | CL-1 | — | Open | — | ECW |  |
| ECW-AD-13 | AD Admin | staff-as-resource flag for scheduling + favorites-scoped staff pickers | X-4 | — | Open | — | ECW |  |
| ECW-BI-12 | BI Billing | full guarantor model w/ these fields + guarantor account view | CL-1 | — | Open | — | ECW |  |
| ECW-RX-3 | RX Prescriptions | add eRx-capable + mail-order flags and city lookup to pharmacy records (pairs w/ mock eRx seam) | EN-1 | — | Open | — | ECW |  |
| ECW-BI-13 | BI Billing | guarantor-level A/R + statement generation | CL-1 | — | Open | — | ECW |  |
| ECW-SC-4 | SC Scheduling | visit-type admin table (color, duration, active flag, custom statuses) feeding calendar + kanban | S-1 | — | Open | — | ECW |  |
| ECW-AD-14 | AD Admin | module-level activation surface w/ status + per-module settings drill-in | X-4 | — | Open | — | ECW |  |
| ECW-AD-15 | AD Admin | login-session audit view (user, IP, login/logout times, active-session count) | X-4 | — | Open | — | ECW |  |
| ECW-OPS-1 | OPS Operations | scheduled-jobs status surface (job name, last run, duration, status, notes) covering autopilot/EDI/eligibility/statement jobs | X-4 | — | Open | — | ECW |  |
| ECW-SC-5 | SC Scheduling | telehealth visit type + join-link placeholder + pre-visit questionnaire (video transport stays mocked) | S-1 | — | Open | — | ECW |  |
| ECW-CL-30 | CL Clinical | arrived-status hook + doc-side panel placeholder + auto telehealth modifier (95/GT) on telehealth visit-type claims | EN-1 | — | Open | — | ECW |  |
| ECW-BI-14 | BI Billing | POS auto-derivation from visit type | CL-1 | — | Open | — | ECW |  |
| ECW-CL-31 | CL Clinical | unified end-of-visit send queue (transports mocked) — pairs w/ Common Send-style per-item mode selection | EN-1 | — | Open | — | ECW |  |
| ECW-FO-7 | FO Front office | categorized patient-alert popup at check-in | CI-1 | — | Open | — | ECW |  |
| ECW-FO-8 | FO Front office | notify hook at check-in (modern analog = SMS "we're ready" ping); mock-seam | CI-1 | — | Open | — | ECW |  |
| ECW-SC-6 | SC Scheduling | multi-appointment/series booking + appointment packages + waitlist queue | S-1 | — | Open | — | ECW |  |
| ECW-CL-32 | CL Clinical | end-of-visit order consolidation surface w/ future-order scheduling feeding front-desk booking | EN-1 | — | Open | — | ECW |  |
| ECW-FO-9 | FO Front office | resource-schedule view + aftercare follow-up queue | CI-1 | — | Open | — | ECW |  |
| ECW-FO-10 | FO Front office | wait-time + time-in-status timers, room assignment, vitals-flag surfacing, discharge queue on the kanban board | CI-1 | — | Open | — | ECW |  |
| ECW-FO-11 | FO Front office | patient interaction timeline (calls/messages/check-ins) w/ typed filter — pairs w/ audit events already captured server-side | CI-1 | — | Open | — | ECW |  |
| ECW-RF-2 | RF Referrals | referral-target directory w/ specialty/distance/language matching | EN-1 | — | Open | — | ECW |  |
| ECW-RF-3 | RF Referrals | referral/auth work-queue w/ status tabs, visit-count burn-down, saved filters, 278 hook | EN-1 | — | Open | — | ECW |  |
| ECW-AD-16 | AD Admin | merge-field letter templates (referral, patient letters) w/ PDF form mapping | X-4 | — | Open | — | ECW |  |
| ECW-RF-4 | RF Referrals | delete-audit views embedded in each work-queue module (who deleted what from where) | EN-1 | — | Open | — | ECW |  |
| ECW-RF-5 | RF Referrals | inbound e-referral request queue (transport mocked) | EN-1 | — | Open | — | ECW |  |
| ECW-RF-6 | RF Referrals | duplicate-detection prompts on referral/auth/appointment creation | EN-1 | — | Open | — | ECW |  |
| ECW-RF-7 | RF Referrals | referral attachment bundle incl generated CCD (P2P transport mocked) | EN-1 | — | Open | — | ECW |  |
| ECW-AN-3 | AN Analytics | referral-source revenue report (marketing/relationship value) | X-4 | — | Open | — | ECW |  |
| ECW-RF-8 | RF Referrals | referral outcome tracking w/ structured non-compliance reasons (quality reporting + care-gap follow-up) | EN-1 | — | Open | — | ECW |  |
| ECW-DOC-2 | DOC Documents | document review flags + expiry + misfile-move + outbound fax/send composer (transport mocked) | PC-1 | — | Open | — | ECW |  |
| ECW-RF-9 | RF Referrals | payer+procedure pre-auth requirement rules auto-spawning auth work items (big RCM win; pairs w/ K-autopilots) | EN-1 | — | Open | — | ECW |  |
| ECW-CL-33 | CL Clinical | order compendium w/ performing-lab routing + future-order lane + ABN + result-CC list | EN-1 | — | Open | — | ECW |  |
| ECW-RF-10 | RF Referrals | per-work-item field audit log + 278 rejection-code surfacing w/ failed-rework queue | EN-1 | — | Open | — | ECW |  |
| ECW-DOC-3 | DOC Documents | scanned/inbound document triage queue w/ provider assignment + reassign (front-office daily driver) | PC-1 | — | Open | — | ECW |  |
| ECW-DOC-4 | DOC Documents | order-linked results filing + metadata templates + auto-assignment | PC-1 | — | Open | — | ECW |  |
| ECW-DOC-5 | DOC Documents | doc search + soft-delete/restore + signature stamping + tag taxonomy | PC-1 | — | Open | — | ECW |  |
| ECW-DOC-6 | DOC Documents | inbound-fax triage inbox (mock transport) w/ soft-delete lifecycle | PC-1 | — | Open | — | ECW |  |
| ECW-FO-12 | FO Front office | expiring-document surfacing at scheduling touchpoints | CI-1 | — | Open | — | ECW |  |
| ECW-DOC-7 | DOC Documents | outbound-fax queue w/ retry + failure triage (mock transport) | PC-1 | — | Open | — | ECW |  |
| ECW-DOC-8 | DOC Documents | failure-notice messages into a staff inbox (pairs w/ I3 team-inbox concept) | PC-1 | — | Open | — | ECW |  |
| ECW-DOC-9 | DOC Documents | rule-based inbound-document routing + per-doc portal publish flag | PC-1 | — | Open | — | ECW |  |
| ECW-AD-17 | AD Admin | per-user preferences engine (the single biggest configurability gap vs eCW) | X-4 | — | Open | — | ECW |  |
| ECW-BI-15 | BI Billing | visit-type price list (televisit/concierge/no-show flat fees) feeding claim generation | CL-1 | — | Open | — | ECW |  |
| ECW-DOC-10 | DOC Documents | category-level doc-expiry policy feeding the appointment Document Verification panel | PC-1 | — | Open | — | ECW |  |
| ECW-SC-7 | SC Scheduling | full visit-type model (drives claim/copay requirements, portal booking visibility, MU exclusion) | S-1 | — | Open | — | ECW |  |
| ECW-AD-18 | AD Admin | admin-configurable required-field policy per entity (pairs w/ dynamic-forms engine) | X-4 | — | Open | — | ECW |  |
| ECW-AD-19 | AD Admin | absence coverage w/ delegate/reassign + context-scoped required-field matrix | X-4 | — | Open | — | ECW |  |
| ECW-AD-20 | AD Admin | field-level edit locks + label templates (specimen labeling pairs w/ orders) | X-4 | — | Open | — | ECW |  |
| ECW-SC-8 | SC Scheduling | slot-search engine w/ provider-attribute filters + booking locks | S-1 | — | Open | — | ECW |  |
| ECW-SC-9 | SC Scheduling | composable slot format + visit-type->service-category mapping w/ copay auto-update (direct fit to our 270/271 pipeline) | S-1 | — | Open | — | ECW |  |
| ECW-CL-34 | CL Clinical | advance-directive entity + primary-directive display | EN-1 | — | Open | — | ECW |  |
| ECW-SC-10 | SC Scheduling | availability rules engine driving slot search + booking constraints | S-1 | — | Open | — | ECW |  |
| ECW-SC-11 | SC Scheduling | day-exceptions + block hours w/ bump-list rebooking queue | S-1 | — | Open | — | ECW |  |
| ECW-SC-12 | SC Scheduling | reason-based booking search + booking caps (protects clinic capacity; portal-facing win) | S-1 | — | Open | — | ECW |  |
| ECW-AD-21 | AD Admin | workstation device-profile settings (specimen/barcode labels pair w/ orders) | X-4 | — | Open | — | ECW |  |
| ECW-LT-1 | LT Letters | letter template library w/ chart filing | PC-1 | — | Open | — | ECW |  |
| ECW-LT-2 | LT Letters | patient-letter execution + dunning series + communication log | PC-1 | — | Open | — | ECW |  |
| ECW-LT-3 | LT Letters | letter draft->assign->finalize workflow w/ audit | PC-1 | — | Open | — | ECW |  |
| ECW-SC-13 | SC Scheduling | slot-level eligibility state (extends note on 270/271 copay auto-update) + department dimension + facility color coding | S-1 | — | Open | — | ECW |  |
| ECW-FO-13 | FO Front office | office-visits list view (the front-desk workhorse screen) | CI-1 | — | Open | — | ECW |  |
| ECW-SC-14 | SC Scheduling | booking-form field parity (this is the single densest scheduling screen) | S-1 | — | Open | — | ECW |  |
| ECW-SC-15 | SC Scheduling | provider care-groups + centralized-resource mode | S-1 | — | Open | — | ECW |  |
| ECW-FO-14 | FO Front office | family/household entity linking guardians+HIPAA contacts across charts | CI-1 | — | Open | — | ECW |  |
| ECW-SC-16 | SC Scheduling | recurring visits + visit sub-types + payer-driven referral-required prompt | S-1 | — | Open | — | ECW |  |
| ECW-SC-17 | SC Scheduling | pre-visit orders/readiness surface on the booking (front desk sees what to collect/schedule) | S-1 | — | Open | — | ECW |  |
| ECW-SC-18 | SC Scheduling | in-context demographic micro-edits + address validation + demographics change log + care-gap banner at booking | S-1 | — | Open | — | ECW |  |
| ECW-SC-19 | SC Scheduling | move-up (ASAP) queue w/ slot-finder + field-level appointment audit log | S-1 | — | Open | — | ECW |  |
| ECW-SC-20 | SC Scheduling | group appointments + reserve-slot + day-level bulk copy (recurring-cohort scheduling) | S-1 | — | Open | — | ECW |  |
| ECW-BI-16 | BI Billing | supervisor+pay-to+rendering triple on the visit (incident-to and supervised-NP billing depends on it) | CL-1 | — | Open | — | ECW |  |
| ECW-BI-17 | BI Billing | billing cases (workers-comp/MVA/liability episodes grouping visits + claims under one case w/ its own responsible party) | CL-1 | — | Open | — | ECW |  |
| ECW-BI-18 | BI Billing | structured billing-note templates | CL-1 | — | Open | — | ECW |  |
| ECW-SC-21 | SC Scheduling | constraint-driven series slot search | S-1 | — | Open | — | ECW |  |
| ECW-SC-22 | SC Scheduling | patient-preference matching (gender/language/new-patient/proximity) — direct portal self-scheduling enabler | S-1 | — | Open | — | ECW |  |
| ECW-AI-2 | AI AI | HCC/potential-condition review worklist (VBC revenue; pairs w/ PFO AI-flags plumbing) | X-4 | — | Open | — | ECW |  |
| ECW-SC-23 | SC Scheduling | recurrence engine + appointment-level custom fields | S-1 | — | Open | — | ECW |  |
| ECW-AD-22 | AD Admin | configurable color-coded patient alert library | X-4 | — | Open | — | ECW |  |
| ECW-SC-24 | SC Scheduling | referential delete guards tied to encounter documentation | S-1 | — | Open | — | ECW |  |
| ECW-BI-19 | BI Billing | visit-level charge/copay detail + per-visit fee-schedule override | CL-1 | — | Open | — | ECW |  |
| ECW-SC-25 | SC Scheduling | household same-visit booking (pediatrics/family-practice workflow) | S-1 | — | Open | — | ECW |  |
| ECW-BI-20 | BI Billing | deductible surfacing at point of scheduling (collections win; extends the 270/271 copay auto-update note) | CL-1 | — | Open | — | ECW |  |
| ECW-BI-21 | BI Billing | structured benefit browser over stored 271s | CL-1 | — | Open | — | ECW |  |
| ECW-BI-22 | BI Billing | sliding-fee discount engine (mandatory for FQHC market; pairs w/ visit-type charge config + self-pay pricing) | CL-1 | — | Open | — | ECW |  |
| ECW-SC-26 | SC Scheduling | availability-first booking search (front-desk speed + the exact surface a portal self-scheduler needs) | S-1 | — | Open | — | ECW |  |
| ECW-BI-23 | BI Billing | batch eligibility runs + structured 271 report | CL-1 | — | Open | — | ECW |  |
| ECW-BI-24 | BI Billing | manual verify + PCP-match tracking (Medicaid MCO workflows) | CL-1 | — | Open | — | ECW |  |
| ECW-AD-23 | AD Admin | practice-defaults console w/ per-domain tabs | X-4 | — | Open | — | ECW |  |
| ECW-AD-24 | AD Admin | per-payer 270/271 behavior flags (real payers diverge; this is why eCW eligibility works across Medicaid MCOs) | X-4 | — | Open | — | ECW |  |
| ECW-BI-25 | BI Billing | payer-vs-chart demographics reconcile (kills claim rejections from name/DOB mismatches) | CL-1 | — | Open | — | ECW |  |
| ECW-OPS-2 | OPS Operations | provider utilization/no-show analytics (ties working-hours engine to actuals) | X-4 | — | Open | — | ECW |  |
| ECW-FO-15 | FO Front office | cohort query + outreach actions (the ad-hoc sibling of the recall registry) | CI-1 | — | Open | — | ECW |  |
| ECW-FO-16 | FO Front office | demographics field parity (master checklist for the ECW table) | CI-1 | — | Open | — | ECW |  |
| ECW-FO-17 | FO Front office | multi-value demographic code sets + referential prompts | CI-1 | — | Open | — | ECW |  |
| ECW-FO-18 | FO Front office | address history + typed addresses (statements go to mailing, seasonal snowbirds, campus students) | CI-1 | — | Open | — | ECW |  |
| ECW-FO-19 | FO Front office | international addresses + county coding (county drives Medicaid/UDS reporting) | CI-1 | — | Open | — | ECW |  |
| ECW-FO-20 | FO Front office | SOGI capture w/ audit (USCDI/quality-program requirement) | CI-1 | — | Open | — | ECW |  |
| ECW-CL-35 | CL Clinical | advance-directive capture w/ primary display | EN-1 | — | Open | — | ECW |  |
| ECW-BI-26 | BI Billing | coverage field parity (COB, Medigap, alternate claim names) | CL-1 | — | Open | — | ECW |  |
| ECW-BI-27 | BI Billing | injury-case claim data (these fields feed CMS-1500 boxes 10/14/16/18 directly) | CL-1 | — | Open | — | ECW |  |
| ECW-BI-28 | BI Billing | WC disability tracking + case visit rollup | CL-1 | — | Open | — | ECW |  |
| ECW-FO-21 | FO Front office | care-team object + parameterized family copy + taggable custom fields | CI-1 | — | Open | — | ECW |  |
| ECW-FO-22 | FO Front office | demographics page-2 parity (esp. statement/collections excludes + leave-message consent) | CI-1 | — | Open | — | ECW |  |
| ECW-AD-25 | AD Admin | admin-defined demographics fields w/ conditional children + note surfacing (AgentCF-adjacent: same sections->questions shape) | X-4 | — | Open | — | ECW |  |
| ECW-OPS-3 | OPS Operations | integrity/cleanup report suite w/ scheduled remediation jobs | X-4 | — | Open | — | ECW |  |
| ECW-CL-36 | CL Clinical | longitudinal vitals grid + growth charts + abnormal flagging | EN-1 | — | Open | — | ECW |  |
| ECW-CL-37 | CL Clinical | newborn vitals + hearing/APGAR capture | EN-1 | — | Open | — | ECW |  |
| ECW-AD-26 | AD Admin | configurable vitals w/ percentile datasets + plausibility guard | X-4 | — | Open | — | ECW |  |
| ECW-CL-38 | CL Clinical | exception-coded vitals w/ mandatory gate (quality-measure denominators need the refusal codes) | EN-1 | — | Open | — | ECW |  |
| ECW-CL-39 | CL Clinical | typed vital editors (screening-vitals data needed for pediatric quality measures) | EN-1 | — | Open | — | ECW |  |
| ECW-CL-40 | CL Clinical | growth-chart rendering + per-provider vitals panels | EN-1 | — | Open | — | ECW |  |
| ECW-CL-41 | CL Clinical | result review window + note-merge mechanics | EN-1 | — | Open | — | ECW |  |
| ECW-CL-42 | CL Clinical | specialty exam modules (vision shows the pattern: structured per-specialty objective screens) | EN-1 | — | Open | — | ECW |  |
| ECW-CL-43 | CL Clinical | shared quick-phrase library per field context | EN-1 | — | Open | — | ECW |  |
| ECW-CL-44 | CL Clinical | templated exam engine w/ per-specialty categories + provider defaults | EN-1 | — | Open | — | ECW |  |
| ECW-CL-45 | CL Clinical | joint table + body-diagram documentation (specialty differentiator) | EN-1 | — | Open | — | ECW |  |
| ECW-CL-46 | CL Clinical | embedded clinical score calculators fed by structured exam data | EN-1 | — | Open | — | ECW |  |
| ECW-CL-47 | CL Clinical | findings->codes automation + audiology charting | EN-1 | — | Open | — | ECW |  |
| ECW-CL-48 | CL Clinical | dx-anchored plan/orders surface (the core clinician workflow screen) | EN-1 | — | Open | — | ECW |  |
| ECW-CL-49 | CL Clinical | interaction browser contract + concurrency locks on orders | EN-1 | — | Open | — | ECW |  |
| ECW-RX-4 | RX Prescriptions | structured sig contract + dual-notes + split-fill | EN-1 | — | Open | — | ECW |  |
| ECW-CL-50 | CL Clinical | referral field parity + E&M complexity inputs | EN-1 | — | Open | — | ECW |  |
| ECW-RX-5 | RX Prescriptions | reconciliation statuses + external-history merge + compounds | EN-1 | — | Open | — | ECW |  |
| ECW-RX-6 | RX Prescriptions | coverage + cost surfaces in the ordering grid (medication-adherence lever) | EN-1 | — | Open | — | ECW |  |
| ECW-AI-3 | AI AI | practice-pattern order suggestions + preventive-alert compliance states + NDC mapping | X-4 | — | Open | — | ECW |  |
| ECW-CL-51 | CL Clinical | order-dx matrix + infobutton education | EN-1 | — | Open | — | ECW |  |
| ECW-RX-7 | RX Prescriptions | one-click continue/refill actions + med timeline | EN-1 | — | Open | — | ECW |  |
| ECW-CL-52 | CL Clinical | order-entry questions + reorder dx carry-forward + Rx cancel transaction | EN-1 | — | Open | — | ECW |  |
| ECW-CL-53 | CL Clinical | procedure documentation templates | EN-1 | — | Open | — | ECW |  |
| ECW-CL-54 | CL Clinical | immunization forecasting + registry export | EN-1 | — | Open | — | ECW |  |
| ECW-CL-55 | CL Clinical | vaccine lot inventory + code-mapped immunization catalog (VFC compliance) | EN-1 | — | Open | — | ECW |  |
| ECW-CL-56 | CL Clinical | administration-time safety + inventory decrement guards | EN-1 | — | Open | — | ECW |  |
| ECW-CL-57 | CL Clinical | refusal/suppression audit trail | EN-1 | — | Open | — | ECW |  |
| ECW-CL-58 | CL Clinical | covered by imm notes — field-matrix fodder | EN-1 | — | Open | — | ECW |  |
| ECW-AD-27 | AD Admin | admin-configurable per-context required-field engine (feeds ConfigurableForms/CR work) | X-4 | — | Open | — | ECW |  |
| ECW-OPS-4 | OPS Operations | registry submit queue + query/reconcile loop | X-4 | — | Open | — | ECW |  |
| ECW-CL-59 | CL Clinical | inventory alerting + per-patient registry consent | EN-1 | — | Open | — | ECW |  |
| ECW-CL-60 | CL Clinical | preventive-medicine wellness-plan section (pairs w/ wellness-guidelines CDSS note) | EN-1 | — | Open | — | ECW |  |
| ECW-CL-61 | CL Clinical | lock guards + styles + addendum trail | EN-1 | — | Open | — | ECW |  |
| ECW-CL-62 | CL Clinical | chart annotations + supervising-provider capture | EN-1 | — | Open | — | ECW |  |
| ECW-CL-63 | CL Clinical | supervision co-sign queue + sampling rules | EN-1 | — | Open | — | ECW |  |
| ECW-CL-64 | CL Clinical | secure notes + transmittable chart abstract | EN-1 | — | Open | — | ECW |  |
| ECW-CL-65 | CL Clinical | longitudinal treatment matrix | EN-1 | — | Open | — | ECW |  |
| ECW-CL-66 | CL Clinical | configurable AVS (after-visit summary) | EN-1 | — | Open | — | ECW |  |
| ECW-DOC-11 | DOC Documents | consult-letter generation from note content | PC-1 | — | Open | — | ECW |  |
| ECW-CL-67 | CL Clinical | template-evolution data recovery | EN-1 | — | Open | — | ECW |  |
| ECW-CL-68 | CL Clinical | scored screening-form library (relates to ConfigurableForms M9-28) | EN-1 | — | Open | — | ECW |  |
| ECW-CL-69 | CL Clinical | computed scoring engine | EN-1 | — | Open | — | ECW |  |
| ECW-CL-70 | CL Clinical | superbill + requisition templates | EN-1 | — | Open | — | ECW |  |
| ECW-OPS-5 | OPS Operations | phone-message work queue (pairs w/ M9 fax/task queues) | X-4 | — | Open | — | ECW |  |
| ECW-OPS-6 | OPS Operations | phone-encounter documentation object (bridges scheduling+clinical+rx) | X-4 | — | Open | — | ECW |  |
| ECW-OPS-7 | OPS Operations | triage templates + linked-order awareness | X-4 | — | Open | — | ECW |  |
| ECW-OPS-8 | OPS Operations | coverage delegation for work queues | X-4 | — | Open | — | ECW |  |
| ECW-CL-71 | CL Clinical | pre-lock order-transmission checklist | EN-1 | — | Open | — | ECW |  |
| ECW-CL-72 | CL Clinical | macro/dot-phrase engine + inline data tokens | EN-1 | — | Open | — | ECW |  |
| ECW-CL-73 | CL Clinical | condition order-set bundles | EN-1 | — | Open | — | ECW |  |
| ECW-LB-3 | LB Labs | specimen + routing capture | EN-1 | — | Open | — | ECW |  |
| ECW-BI-29 | BI Billing | ICD->CPT rule engine | CL-1 | — | Open | — | ECW |  |
| ECW-BI-30 | BI Billing | quality-measure attestation at charge time | CL-1 | — | Open | — | ECW |  |
| ECW-BI-31 | BI Billing | status-driven work routing (maps to PFO claims Kanban) | CL-1 | — | Open | — | ECW |  |
| ECW-AD-28 | AD Admin | order-compendium admin w/ fee-schedule link | X-4 | — | Open | — | ECW |  |
| ECW-RX-8 | RX Prescriptions | Rx event jellybean w/ per-status counts (refill requests, change requests, cancel acks, transmission errors, fill notifications) as mock-seam over the eRx transport | EN-1 | — | Open | — | ECW |  |
| ECW-CL-74 | CL Clinical | Verify Histories one-tap + right-rail staleness indicator | EN-1 | — | Open | — | ECW |  |
| ECW-CL-75 | CL Clinical | T.Inj administration editor w/ J-code billing linkage + inventory decrement + dx-link (mock-seam for interactions) | EN-1 | — | Open | — | ECW |  |
| ECW-CL-76 | CL Clinical | confirm before charting on future encounters (prevents wrong-date documentation) | EN-1 | — | Open | — | ECW |  |
| ECW-OPS-9 | OPS Operations | patient program-participation block (ACO/CCM/RPM/portal/messenger consent+enrollment states) surfaced on hub + filterable | X-4 | — | Open | — | ECW |  |
| ECW-CL-77 | CL Clinical | template library w/ section-scoped merge + CC association + order-set linkage + public/private sharing | EN-1 | — | Open | — | ECW |  |
| ECW-CL-78 | CL Clinical | user-extensible ROS/exam dictionaries w/ per-category defaults | EN-1 | — | Open | — | ECW |  |
| ECW-CL-79 | CL Clinical | family-history condition columns should be a code-mapped configurable dictionary (custom display names flow into the note text) | EN-1 | — | Open | — | ECW |  |
| ECW-CL-80 | CL Clinical | chained history-review wizard + free-text-allergy safety warning | EN-1 | — | Open | — | ECW |  |
| ECW-CL-81 | CL Clinical | problem-list window w/ lifecycle columns + external-dx segregation + copy-to-history | EN-1 | — | Open | — | ECW |  |
| ECW-CL-82 | CL Clinical | guided ICD-10 specificity refinement (kills unspecified-code denials) | EN-1 | — | Open | — | ECW |  |
| ECW-RX-9 | RX Prescriptions | transmission-mode + credential fields + dual pharmacy directory in the mock contract | EN-1 | — | Open | — | ECW |  |
| ECW-CL-83 | CL Clinical | user-managed dot-phrase console w/ per-section scoping + shortcut expansion | EN-1 | — | Open | — | ECW |  |
| ECW-CL-84 | CL Clinical | templated dot-phrases w/ interactive prompt tokens | EN-1 | — | Open | — | ECW |  |
| ECW-CL-85 | CL Clinical | clinician-authored structured question sets on note items (same sections->questions shape as CF work) | EN-1 | — | Open | — | ECW |  |
| CER-CL-1 | CL Clinical | prioritized chart-section roadmap (per CER rows below) | EN-1 | — | Open | L | Cerner |  |
| CER-CL-2 | CL Clinical | single-scroll workflow surface option | EN-1 | — | Open | M | Cerner |  |
| CER-CL-3 | CL Clinical | user-composable workflow — direct CF-lane (pfo-cf-v1) validation | EN-1 | — | Open | M | Cerner |  |
| CER-CL-4 | CL Clinical | visit snapshot w/ deltas + reminders + portal flag | EN-1 | — | Open | L | Cerner |  |
| CER-CL-5 | CL Clinical | currently-viewing marker + windowed history | EN-1 | — | Open | S | Cerner |  |
| CER-CL-6 | CL Clinical | problem-list lifecycle feeding the encounter | EN-1 | — | Open | M | Cerner |  |
| CER-CL-7 | CL Clinical | visit-diagnosis vs problem-list split (drives billing dx pointers) | EN-1 | — | Open | M | Cerner |  |
| CER-CL-8 | CL Clinical | problem metadata depth | EN-1 | — | Open | M | Cerner |  |
| CER-CL-9 | CL Clinical | terminology-layer search UX (eCW parallel confirmed) | EN-1 | — | Open | L | Cerner |  |
| CER-CL-10 | CL Clinical | reverse-check + NKA/NKMA + reviewed-by/at audit | EN-1 | — | Open | M | Cerner |  |
| CER-CL-11 | CL Clinical | longitudinal flowsheet grid | EN-1 | — | Open | L | Cerner |  |
| CER-CL-12 | CL Clinical | sign step + per-value audit trail | EN-1 | — | Open | L | Cerner |  |
| CER-CL-13 | CL Clinical | user-customizable rows/bands (CF JSON fit) | EN-1 | — | Open | M | Cerner |  |
| CER-CL-14 | CL Clinical | per-patient results browser — most-used clinician surface | EN-1 | — | Open | L | Cerner |  |
| CER-CL-15 | CL Clinical | result versioning + forward-for-review | EN-1 | — | Open | M | Cerner |  |
| CER-CL-16 | CL Clinical | per-patient result graphing | EN-1 | — | Open | M | Cerner |  |
| CER-CL-17 | CL Clinical | tag-and-carry results | EN-1 | — | Open | S | Cerner |  |
| CER-CL-18 | CL Clinical | DI report structure + imaging hook | EN-1 | — | Open | M | Cerner |  |
| CER-CL-19 | CL Clinical | point-of-care device results w/ provenance | EN-1 | — | Open | S | Cerner |  |
| CER-CL-20 | CL Clinical | scoring + notification documentation | EN-1 | — | Open | M | Cerner |  |
| CER-CL-21 | CL Clinical | task engine w/ chart-done semantics | EN-1 | — | Open | L | Cerner |  |
| CER-CL-22 | CL Clinical | MAR surface (infusion clinics = ambulatory case) | EN-1 | — | Open | L | Cerner |  |
| CER-CL-23 | CL Clinical | template catalog + favorites + role scoping | EN-1 | — | Open | M | Cerner |  |
| CER-CL-24 | CL Clinical | insert-results + draft-vs-signed notes | EN-1 | — | Open | M | Cerner |  |
| CER-CL-25 | CL Clinical | endorsement/CC routing at signature | EN-1 | — | Open | M | Cerner |  |
| CER-CL-26 | CL Clinical | revision provenance — documentation-integrity grade | EN-1 | — | Open | M | Cerner |  |
| CER-CL-27 | CL Clinical | doc retraction w/ audit | EN-1 | — | Open | M | Cerner |  |
| CER-CL-28 | CL Clinical | doc browser + class taxonomy | EN-1 | — | Open | M | Cerner |  |
| CER-CL-29 | CL Clinical | doc state machine + shared saved filters | EN-1 | — | Open | M | Cerner |  |
| CER-CL-30 | CL Clinical | charting correction model on forms | EN-1 | — | Open | M | Cerner |  |
| CER-CL-31 | CL Clinical | CF-1 contract: required sections + performed-on + score-scale types | EN-1 | — | Open | M | Cerner |  |
| CER-CL-32 | CL Clinical | form-answer→order hook (CF/CR + K-autopilot convergence) | EN-1 | — | Open | M | Cerner |  |
| CER-CL-33 | CL Clinical | structured social history (quality-measure feed) | EN-1 | — | Open | M | Cerner |  |
| CER-CL-34 | CL Clinical | home-medication history workflow | EN-1 | — | Open | M | Cerner |  |
| CER-CL-35 | CL Clinical | patient med list w/ rec-state + queues | EN-1 | — | Open | L | Cerner |  |
| CER-CL-36 | CL Clinical | derived-value calc + provenance | EN-1 | — | Open | S | Cerner |  |
| CER-CL-37 | CL Clinical | transport/handoff ticket + alert vocabulary | EN-1 | — | Open | S | Cerner |  |
| CER-CL-38 | CL Clinical | printable patient handoff | EN-1 | — | Open | S | Cerner |  |
| CER-CL-39 | CL Clinical | screening instruments that set safety flags | EN-1 | — | Open | S | Cerner |  |
| CER-CL-40 | CL Clinical | ACP/code-status data structures | EN-1 | — | Open | M | Cerner |  |
| CER-CL-41 | CL Clinical | clinical visit-outcome status | EN-1 | — | Open | S | Cerner |  |
| CER-CL-42 | CL Clinical | person-level operational comments | EN-1 | — | Open | S | Cerner |  |
| CER-CL-43 | CL Clinical | typed provider relationships | EN-1 | — | Open | M | Cerner |  |
| CER-CL-44 | CL Clinical | pronouns/preferred + SDM/guardianship | EN-1 | — | Open | M | Cerner |  |
| CER-CL-45 | CL Clinical | jurisdiction/statutory form-library hook | EN-1 | — | Open | S | Cerner |  |
| CER-CL-46 | CL Clinical | per-allergen provenance + reconciliation-completed stamp | EN-1 | — | Open | M | Cerner |  |
| CER-CL-47 | CL Clinical | autotext/dot-phrase engine (high clinician-speed value; eCW parallel) | EN-1 | — | Open | M | Cerner |  |
| CER-CL-48 | CL Clinical | exam template w/ editable normals | EN-1 | — | Open | M | Cerner |  |
| CER-CL-49 | CL Clinical | section-level reconciliation state (extends founder Verified pattern) | EN-1 | — | Open | M | Cerner |  |
| CER-CL-50 | CL Clinical | per-dx plan structure (eCW confirms the same model) | EN-1 | — | Open | M | Cerner |  |
| CER-CL-51 | CL Clinical | note auto-composition from structured data | EN-1 | — | Open | L | Cerner |  |
| CER-CL-52 | CL Clinical | payer/comp-board form-note templates w/ auto-transmission + coded injury classification | EN-1 | — | Open | L | Cerner |  |
| CER-CL-53 | CL Clinical | coded procedure/surgical history + family/pregnancy/implant registries w/ reviewed stamp | EN-1 | — | Open | L | Cerner |  |
| CER-CL-54 | CL Clinical | structured handoff (severity + summary + shared actions) feeding the multi-patient grid (pairs w/ CER-GL-9) | EN-1 | — | Open | L | Cerner |  |
| CER-CL-55 | CL Clinical | attending-attestation addendum (teaching-clinic billing compliance; low priority for private-practice target) | EN-1 | — | Open | S | Cerner |  |
| CER-OR-1 | OR Orders | order favorites + shared folders | EN-1 | — | Open | M | Cerner |  |
| CER-OR-2 | OR Orders | order-set/plan engine w/ phases + future/standing orders | EN-1 | — | Open | L | Cerner |  |
| CER-OR-3 | OR Orders | order state machine + communication orders | EN-1 | — | Open | M | Cerner |  |
| CER-OR-4 | OR Orders | per-order audit + referral-order attrs that drive scheduling | EN-1 | — | Open | M | Cerner |  |
| CER-OR-5 | OR Orders | saved order-view presets | EN-1 | — | Open | S | Cerner |  |
| CER-OR-6 | OR Orders | in-office-vs-prescription split (matches eCW) | EN-1 | — | Open | M | Cerner |  |
| CER-OR-7 | OR Orders | future-order due-tracking worklist (recall/chase engine) | EN-1 | — | Open | M | Cerner |  |
| CER-OR-8 | OR Orders | curated quick-order page + signature cart w/ dx association (top clinician-speed construct; CF-configurable layout) | EN-1 | — | Open | L | Cerner |  |
| CER-OR-9 | OR Orders | prescription quick-picks w/ prebuilt sigs | EN-1 | — | Open | M | Cerner |  |
| CER-OR-10 | OR Orders | prescription output routing + printable Rx artifact | EN-1 | — | Open | M | Cerner |  |
| CER-OR-11 | OR Orders | referral order w/ required routing fields feeding scheduling | EN-1 | — | Open | M | Cerner |  |
| CER-OR-12 | OR Orders | external medication-fill history integration point | EN-1 | — | Open | L | Cerner |  |
| CER-OR-13 | OR Orders | order/plan binding to future visits w/ phase offsets (feeds CER-OR-7 chase list) | EN-1 | — | Open | L | Cerner |  |
| CER-OR-14 | OR Orders | dose calculator w/ sourced patient parameters (infusion/peds safety) | EN-1 | — | Open | M | Cerner |  |
| CER-OR-15 | OR Orders | coverage/equivalence guidance inside order sets (pairs w/ eCW formulary row) | EN-1 | — | Open | M | Cerner |  |
| CER-OR-16 | OR Orders | order-sentence autocomplete | EN-1 | — | Open | S | Cerner |  |
| CER-OR-17 | OR Orders | per-order-type detail forms w/ required indication + safety screens + result-CC recipients | EN-1 | — | Open | M | Cerner |  |
| CER-OR-18 | OR Orders | transition-of-care med/order reconciliation workspace (admission/discharge safety + compliance measure) | EN-1 | — | Open | L | Cerner |  |
| CER-OR-19 | OR Orders | formulary-substitution hook at order sign (pairs w/ CER-OR-15 payer advisories) | EN-1 | — | Open | M | Cerner |  |
| CER-OR-20 | OR Orders | allergy/drug-interaction screen at sign w/ audited override reasons (patient-safety baseline; pairs w/ allergy reverse-check row) | EN-1 | — | Open | L | Cerner |  |
| CER-MC-1 | MC Meds | staff messaging w/ phone-call documentation | EN-1 | — | Open | L | Cerner |  |
| CER-MC-2 | MC Meds | team pool inboxes | EN-1 | — | Open | M | Cerner |  |
| CER-MC-3 | MC Meds | unified inbox w/ proxy + deficiency queue | EN-1 | — | Open | L | Cerner |  |
| CER-MC-4 | MC Meds | structured dispositions + follow-up engine | EN-1 | — | Open | M | Cerner |  |
| CER-MC-5 | MC Meds | endorsement semantics + chart fidelity | EN-1 | — | Open | M | Cerner |  |
| CER-MC-6 | MC Meds | templated attachments | EN-1 | — | Open | S | Cerner |  |
| CER-MC-7 | MC Meds | message-open tracking + unopened escalation queue (closes the loop on results/instructions sent to patients) | EN-1 | — | Open | M | Cerner |  |
| CER-FO-1 | FO Front office | as-of flow states + resource groups + chair/equipment resources | CI-1 | — | Open | L | Cerner |  |
| CER-FO-2 | FO Front office | multi-resource columns + live coloring | CI-1 | — | Open | M | Cerner |  |
| CER-FO-3 | FO Front office | hold status + EOD reconciliation step | CI-1 | — | Open | M | Cerner |  |
| CER-FO-4 | FO Front office | book organization + WIP staging + suggest/request modes | CI-1 | — | Open | L | Cerner |  |
| CER-FO-5 | FO Front office | appointment-type schema + eligibility hook at booking | CI-1 | — | Open | M | Cerner |  |
| CER-FO-6 | FO Front office | totals + interpreter + comments + modality | CI-1 | — | Open | M | Cerner |  |
| CER-FO-7 | FO Front office | label/wristband + form print pipeline | CI-1 | — | Open | M | Cerner |  |
| CER-FO-8 | FO Front office | appointment request/waitlist queue w/ date windows | CI-1 | — | Open | M | Cerner |  |
| CER-FO-9 | FO Front office | itinerary + preparation-instruction packet at confirm | CI-1 | — | Open | M | Cerner |  |
| CER-FO-10 | FO Front office | book view modes + slot inquiry | CI-1 | — | Open | S | Cerner |  |
| CER-FO-11 | FO Front office | booking suggestion engine (K-autopilot adjacent) | CI-1 | — | Open | L | Cerner |  |
| CER-FO-12 | FO Front office | setup/cleanup buffers per appointment type | CI-1 | — | Open | S | Cerner |  |
| CER-FO-13 | FO Front office | batch reschedule + appointment linking + locks | CI-1 | — | Open | M | Cerner |  |
| CER-FO-14 | FO Front office | payment capture + med-necessity + superbill at the front desk | CI-1 | — | Open | M | Cerner |  |
| CER-FO-15 | FO Front office | user-configurable list columns (CF-adjacent) | CI-1 | — | Open | S | Cerner |  |
| CER-FO-16 | FO Front office | reminder opt-in per appointment + fax-out channel | CI-1 | — | Open | M | Cerner |  |
| CER-FO-17 | FO Front office | schedule blocking (blocked-time appointment type) | CI-1 | — | Open | M | Cerner |  |
| CER-FO-18 | FO Front office | multi-appointment sequencing + group-session booking | CI-1 | — | Open | L | Cerner |  |
| CER-FO-19 | FO Front office | recurring-series booking w/ per-instance management (infusion/PT/rehab case) | CI-1 | — | Open | L | Cerner |  |
| CER-FO-20 | FO Front office | cross-axis schedule inquiry surface (front-desk ops) | CI-1 | — | Open | M | Cerner |  |
| CER-FO-21 | FO Front office | reason codes + comments on appointment state changes (no-show/cancel analytics feed) | CI-1 | — | Open | S | Cerner |  |
| CER-FO-22 | FO Front office | day-rebalancing drag view between providers | CI-1 | — | Open | M | Cerner |  |
| CER-FO-23 | FO Front office | deferred reschedule queue w/ patient constraints (extends CER-FO-8) | CI-1 | — | Open | M | Cerner |  |
| CER-FO-24 | FO Front office | appointment-encounter linked lifecycle at cancel/check-in | CI-1 | — | Open | M | Cerner |  |
| CER-FO-25 | FO Front office | multi-resource duration model (room/chair vs staff occupancy; utilization + capacity math) — extends CER-FO-1/CER-FO-12 | CI-1 | — | Open | M | Cerner |  |
| CER-FO-26 | FO Front office | comment layers on schedule objects + contact-attempt log (front-desk operational memory) | CI-1 | — | Open | M | Cerner |  |
| CER-FO-27 | FO Front office | per-user scheduling workflow defaults (pairs w/ CER-RG-16 org shortlist + inquiry column prefs) | CI-1 | — | Open | S | Cerner |  |
| CER-FO-28 | FO Front office | appointment-to-appointment linkage w/ reason (companion/same-day visits; complements CER-FO-17 sequences + CER-FO-24 encounter link) | CI-1 | — | Open | S | Cerner |  |
| CER-FO-29 | FO Front office | appointment lifecycle audit viewer (dispute resolution; complements CER-FO-21 reason codes) | CI-1 | — | Open | S | Cerner |  |
| CER-RG-1 | RG Registration | encounter-type taxonomy incl series + phone (eCW telephone-encounter parallel) | CI-1 | — | Open | L | Cerner |  |
| CER-RG-2 | RG Registration | pre-registration pipeline | CI-1 | — | Open | M | Cerner |  |
| CER-RG-3 | RG Registration | search-then-create flow | CI-1 | — | Open | S | Cerner |  |
| CER-RG-4 | RG Registration | multi-address + preferred-contact | CI-1 | — | Open | M | Cerner |  |
| CER-RG-5 | RG Registration | typed contacts incl guardian | CI-1 | — | Open | S | Cerner |  |
| CER-RG-6 | RG Registration | encounter↔referral/waitlist linkage + validation flag | CI-1 | — | Open | M | Cerner |  |
| CER-RG-7 | RG Registration | in-context action menus on patient rows | CI-1 | — | Open | M | Cerner |  |
| CER-RG-8 | RG Registration | pre-reg record linked to referral + provider slots | CI-1 | — | Open | M | Cerner |  |
| CER-RG-9 | RG Registration | patient preferred-service-provider slots + telehealth consent | CI-1 | — | Open | M | Cerner |  |
| CER-RG-10 | RG Registration | ambulatory analog: exam-room readiness states on the day board | CI-1 | — | Open | M | Cerner |  |
| CER-RG-11 | RG Registration | eligibility-context attributes at registration (residency/intake/attestation flags) | CI-1 | — | Open | S | Cerner |  |
| CER-RG-12 | RG Registration | facesheet artifact + encounter-qualified doc printing (extends CER-FO-7) | CI-1 | — | Open | M | Cerner |  |
| CER-RG-13 | RG Registration | encounter-hygiene worklist for never-arrived pre-registrations (keeps billing/reporting clean) | CI-1 | — | Open | M | Cerner |  |
| CER-RG-14 | RG Registration | external patient-registry lookup hook at registration (US analog: regional HIE/EMPI query) | CI-1 | — | Open | L | Cerner |  |
| CER-RG-15 | RG Registration | expected-arrivals day queue (pairs w/ CER-RG-13) | CI-1 | — | Open | M | Cerner |  |
| CER-RG-16 | RG Registration | per-user multi-location shortlist for encounter/appointment creation (matters once a tenant has many sites) | CI-1 | — | Open | S | Cerner |  |
| CER-RG-17 | RG Registration | portal-offer status field at registration/check-in (drives enrollment outreach lists) | CI-1 | — | Open | S | Cerner |  |
| CER-BI-1 | BI Billing | verification stamp + guarantor entity + TPL flag + coverage windows | CL-1 | — | Open | L | Cerner |  |
| CER-BI-2 | BI Billing | coordination-of-benefits + coverage-per-encounter | CL-1 | — | Open | M | Cerner |  |
| CER-BI-3 | BI Billing | carrier→plan→alias hierarchy | CL-1 | — | Open | M | Cerner |  |
| CER-BI-4 | BI Billing | charge state machine pre-claim + ABN tracking | CL-1 | — | Open | L | Cerner |  |
| CER-BI-5 | BI Billing | CDM layer + charge decomposition + revenue codes | CL-1 | — | Open | L | Cerner |  |
| CER-BI-6 | BI Billing | chart-adjacent charge triage | CL-1 | — | Open | M | Cerner |  |
| CER-RF-1 | RF Referrals | referral docs-received checklist | EN-1 | — | Open | M | Cerner |  |
| CER-RF-2 | RF Referrals | required-doc deficiency engine | EN-1 | — | Open | M | Cerner |  |
| CER-RF-3 | RF Referrals | ROI workflow w/ disclosure accounting (HIPAA) | EN-1 | — | Open | M | Cerner |  |
| CER-RF-4 | RF Referrals | inbound-document indexing queue | EN-1 | — | Open | M | Cerner |  |
| CER-RF-5 | RF Referrals | status-staged referral pipeline w/ stage timestamps (SLA/aging feed) + saved views | EN-1 | — | Open | L | Cerner |  |
| CER-ED-1 | ED Emergency | dept-stats strip + LOS/acuity timers + role-assignment columns | CI-1 | — | Open | L | Cerner |  |
| CER-ED-2 | ED Emergency | pre-arrival intake + attach flow (walk-in/transfer parallel) | CI-1 | — | Open | M | Cerner |  |
| CER-ED-3 | ED Emergency | named event timers + staff assignment on cards | CI-1 | — | Open | M | Cerner |  |
| CER-ED-4 | ED Emergency | role-scoped board comments | CI-1 | — | Open | S | Cerner |  |
| CER-ED-5 | ED Emergency | shift check-in/out w/ patient handover | CI-1 | — | Open | M | Cerner |  |
| CER-ED-6 | ED Emergency | name-similarity safety flag on lists | CI-1 | — | Open | S | Cerner |  |
| CER-ED-7 | ED Emergency | enrich kanban panel w/ triage vitals + history counts | CI-1 | — | Open | M | Cerner |  |
| CER-ED-8 | ED Emergency | board-level quick-order flyouts w/ favorites | CI-1 | — | Open | M | Cerner |  |
| CER-ED-9 | ED Emergency | context variants of the same workflow (CF definitions per context) | CI-1 | — | Open | M | Cerner |  |
| CER-ED-10 | ED Emergency | results-endorsement + reorder from the board card | CI-1 | — | Open | M | Cerner |  |
| CER-ED-11 | ED Emergency | post-visit result-callback queue (pairs w/ CER-OR-7 chase list) | CI-1 | — | Open | M | Cerner |  |
| CER-ED-12 | ED Emergency | personal work-counter chips + structured depart step | CI-1 | — | Open | M | Cerner |  |
| CER-ED-13 | ED Emergency | user-addable workspace views per role | CI-1 | — | Open | S | Cerner |  |
| CER-ED-14 | ED Emergency | auto-composed printable discharge/visit-summary handout | CI-1 | — | Open | M | Cerner |  |
| CER-ED-15 | ED Emergency | safety/state badges on board rows | CI-1 | — | Open | S | Cerner |  |
| CER-ED-16 | ED Emergency | education-topic library w/ language variants + structured follow-up destination/timeframe at discharge (extends CER-ED-13 handout) | CI-1 | — | Open | M | Cerner |  |
| CER-ED-17 | ED Emergency | repeat-visit-within-N-days screen at check-in/triage (quality metric; pairs w/ results-callback row) | CI-1 | — | Open | S | Cerner |  |
| CER-ED-18 | ED Emergency | configurable clinical-value columns on the day board (urgent-care/infusion fit) | CI-1 | — | Open | M | Cerner |  |
| CER-ED-19 | ED Emergency | post-visit disposition/unsigned-work review board (catches LWBS + unfinished documentation) | CI-1 | — | Open | M | Cerner |  |
| CER-ED-20 | ED Emergency | cross-practice/multi-site board w/ per-domain pending counts + jump-to-section shortcuts (org-level view for multi-location groups) | CI-1 | — | Open | L | Cerner |  |
| CER-AN-1 | AN Analytics | report catalog + favorites | X-4 | — | Open | M | Cerner |  |
| CER-AN-2 | AN Analytics | background runs + saved outputs + export choice | X-4 | — | Open | M | Cerner |  |
| EPI-CL-1 | CL Clinical | advisory card pattern w/ accept/decline + coded ack reasons | EN-1 | — | Open | M | Epic |  |
| EPI-CL-2 | CL Clinical | med/order lifecycle actions (hold/expire/renew/cosign) + pending-changes cart on sign | EN-1 | — | Open | L | Epic |  |
| EPI-CL-3 | CL Clinical | structured exam grid that composes note text — prime ConfigurableForms collab candidate | EN-1 | — | Open | L | Epic |  |
| EPI-CL-4 | CL Clinical | problem-list lifecycle model (POA, principal, reviewed-state, encounter vs chronic split) | EN-1 | — | Open | M | Epic |  |
| EPI-CL-5 | CL Clinical | admission/discharge med-rec workflow w/ AVS output | EN-1 | — | Open | L | Epic |  |
| EPI-CL-6 | CL Clinical | note↔order linkage + procedure note templates | EN-1 | — | Open | M | Epic |  |
| EPI-CL-7 | CL Clinical | staged discharge navigator w/ unresulted-work surfacing | EN-1 | — | Open | M | Epic |  |
| EPI-CL-8 | CL Clinical | unified chart-review browser w/ compare + filters (CF-adjacent column prefs) | EN-1 | — | Open | L | Epic |  |
