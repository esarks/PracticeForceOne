---
title: "PracticeForceOneCFConversionTable"
---

# PracticeForceOne — Legacy → Configurable-Forms (CF) Conversion Program

**Owner: AgentDLP** (founder decision 2026-07-12: convert every non-CF page to CF, systematically; DLP builds net-new CFs full-fidelity incl. the cf-runtime engine capabilities they need). CF engine file `cf-runtime.js` is shared with **AgentCF** — additive/announced edits only. Ownership split in AGENTS.md 2026-07-12.

## ⭐ PROGRAM CHARTER (founder directive 2026-07-13) — this is a coordinated modernization effort, NOT isolated screen rewrites

**Success = the elimination of legacy architecture without introducing regression risk — NOT the count of converted screens.** Every conversion must:
1. **Preserve existing behavior** — the converted workflow does what the legacy did (verified), no lost actions/fields/edge cases.
2. **Reduce duplicate logic** — reuse shared components (CF runtime widgets, lookups, SqlSafe, generated CRUD); don't re-implement.
3. **Strengthen workflow consistency** — integrate seamlessly with **SchedulingCF, Kanban, and the CF runtime** (deep-links, PatientContext carry, shared nav).
4. **Leave NO parallel implementation behind** — retire the legacy page (redirect/remove the file, not just the sidebar link) once the CF is a verified replacement. A legacy page still reachable = unfinished conversion.

**Per-page Definition of Done (before/while converting):** (a) confirm ownership (AGENTS.md); (b) identify reusable shared components; (c) map the legacy behavior to preserve; (d) integrate with SchedulingCF/Kanban/runtime; (e) retire the legacy page + prove no regression. A row is ✅ only when its legacy is gone with no regression — not when the CF merely exists.

**⚠️ Current parallel-implementation DEBT to close (honest self-audit against #4):** twin-retire batch 1 removed 7 sidebar links but the legacy PAGE FILES remain (reachable by URL) — must redirect/remove them. HELD twins (Claims/Payers/EDI/Denials read-only CFs; Calendar; New-Encounter coding) are legacy+partial-CF coexisting — close by bringing the CF to parity (write actions) THEN retiring. Portal UsersCF replaced portal-users.html in nav but the file remains. **Priority shifts from adding new CFs to closing these parallels before the demo.**

Live build 1943 · updated 2026-07-24 · **Last reviewed: 2026-07-24**. Status: ⬜ not started · 🟡 in progress · ✅ = legacy eliminated + no regression (not just "CF exists").

## A. Net-new CF needed (no existing twin) — the real build work

| Page (`/ui/*.html`) | New formType | Pri | Status | Notes |
|---|---|---|---|---|
| portal-users | portal_users_cf | P1 | ✅ live 1735 (inc1) | FIRST conversion DONE. List + status filter + read-only registration review (from patientForms[0]) + Create Patient/Chart. Engine adds shipped: dotted `readField` paths + `search.filters` dropdowns (both additive, no new field type). Inc2 follow-up: parsed insurance/history render, Mark Registration Reviewed (review-form{formId}), admin actions (resend/reset-pw/reset-mfa/revoke/remove-access/delete). |
| payments | payments_cf | P1 | ⬜ | Checkout demo step; front-desk copay posting (money-guard live). CF-F-PAY. |
| pharmacies | pharmacies_cf | P1 | ⬜ | eRx demo step; pharmacy directory (EncounterCF eRx picks from it). |
| verify-insurance | verify_insurance_cf | P1 | ⬜ | Eligibility demo step; contact+coverage+eligibility check. Kanban already links here. |
| remittance | remittance_cf | P2 | ⬜ |  |
| appeals | appeals_cf | P2 | ⬜ |  |
| ar-followup | ar_followup_cf | P2 | ⬜ |  |
| secondary-billing | secondary_billing_cf | P2 | ⬜ |  |
| statements | statements_cf | P2 | ⬜ |  |
| clearinghouse | clearinghouse_cf | P2 | ⬜ |  |
| edi-queue | edi_queue_cf | P2 | ⬜ |  |
| eligibility-queue | eligibility_queue_cf | P2 | ⬜ |  |
| organizations | organizations_cf | P2 | ⬜ |  |
| practices | practices_cf | P2 | ⬜ |  |
| practice-locations | practice_locations_cf | P2 | ⬜ |  |
| provider-teams | provider_teams_cf | P2 | ⬜ |  |
| rbac-admin | rbac_admin_cf | P2 | ⬜ |  |
| users | users_cf | P2 | ⬜ |  |
| reports | reports_cf | P3 | ⬜ |  |
| audit | audit_cf | P3 | ⬜ |  |
| cpt-codes | cpt_codes_cf | P3 | ⬜ |  |
| icd-codes | icd_codes_cf | P3 | ⬜ |  |
| medication-codes | medication_codes_cf | P3 | ⬜ |  |
| reference-codes | reference_codes_cf | P3 | ⬜ |  |
| rules | rules_cf | P3 | ⬜ |  |
| documents | documents_cf | P3 | ⬜ |  |
| dynamic-forms | dynamic_forms_cf | P3 | ⬜ |  |
| check-patient-insurance | check_patient_insurance_cf | P3 | ⬜ |  |
| verify-insurance-match | verify_insurance_match_cf | P3 | ⬜ |  |

## B. Legacy TWIN pages — retire / re-point (DLP wiring lane)

**Retire gate = the CF must be a genuine replacement, verified by evidence (its definition has create+update bindings), NOT just "a config exists."** Read-only CFs and browse-only/partial CFs are HELD so retiring them doesn't strip actions the legacy page still owns.

**Batch 1 sidebar retirement shipped (build in flight 4a024fad → verify live):** the 7 full-CRUD twins below.

| Legacy page | Existing CF | Status | Notes |
|---|---|---|---|
| providers | providers_cf | ✅ sidebar retired (b1) | CF create+update. Replaced in-place (ProvidersCF). |
| patients | patients_cf | ✅ sidebar retired (b1) | CF create+update. Replaced in-place (PatientsCF). |
| patient-chart | patient_chart_cf | ✅ sidebar retired (b1) | CF create=5/update=5. Patient ChartCF stays in sidebar. |
| encounters | encounter_cf | ✅ sidebar retired (b1) | CF create+update. EncounterCF stays in sidebar (browse). |
| charge-master | charge_master_cf | ✅ sidebar retired (b1) | CF create+update. Charge MasterCF in-place. |
| eligibility | eligibility_cf | ✅ sidebar retired (b1) | CF create + run-check request. EligibilityCF in-place. |
| authorizations | authorizations_cf | ✅ sidebar retired (b1) | CF create+update. AuthorizationsCF in-place. |
| payers | payers_cf | ⏸ HELD | CF is **read-only** (create=0/update=0) — payer edit still on legacy. Needs CF write parity first. |
| edi | edi_cf | ⏸ HELD | CF **read-only**. Submit/transport actions on legacy. |
| denials | denials_cf | ⏸ HELD | CF **read-only**. Resolve/appeal actions on legacy. |
| claims | claims_cf | ⏸ HELD | CF **read-only**. Scrub/submit/status on the RCM page. |
| claim-review | claim_review_cf | ⏸ HELD | CF **read-only**. Approve→claim action on legacy. |
| practice-ehr-availability-templates | availability_cf | ⏸ HELD | AvailabilityCF is **browse-only** (no editor). Blocked by AV-2 editor (Section A follow-up). |
| practice-ehr-calendar | appointments_cf (SchedulingCF) | ⏸ HELD | SchedulingCF books via slotgrid but not the full provider-day grid/modify. Kanban schedule/modify deep-links stay legacy pending parity. |
| practice-ehr-charge-review | claim_review_cf / charge_master_cf | ⏸ HELD | Charge-review workflow has no faithful CF twin yet. |
| practice-ehr-encounter | encounter_cf | ⏸ HELD | EncounterCF doesn't cover charge coding; kanban ready_for_coding lane uses this page. |

## C. Evaluate — likely stay bespoke (not CRUD-form-shaped: AI, dev tools, settings, dashboards)

`ai-features`, `charge-optimization`, `medical-evidence`, `pa-metrics`, `practice-ai-settings`, `backups`, `runtime-log`, `script-builder`, `diagnostic`, `staging`, `settings`, `theme-settings`, `verify`

Excluded from the program (auth, dashboard cockpit, kanban board, EHR-home hub, CF wrappers): `login, register, forgot/reset-password, dashboard, kanban, practice-ehr, cf/encounter-cf/patient-chart-cf wrappers, worklist, button-tactile-demo`.


## Review Epilog — 2026-07-24

- Live build updated from 1746 to **1943** (gate 251/251 GREEN).
- Section A: portal_users_cf (P1) remains the only ✅ completed conversion; remaining P1 items (payments_cf, pharmacies_cf, verify_insurance_cf) still ⬜ open.
- Section B: Batch 1 sidebar retirements shipped (7 full-CRUD twins); HELD twins (Claims/Payers/EDI/Denials/Calendar) remain on hold pending write-parity.
- The parallel-implementation debt note remains accurate: retiring the sidebar link but leaving the legacy page file reachable by URL is still an open obligation for all HELD items.
