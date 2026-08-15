---
title: "MasterSchedule AgentMR9"
---

# MasterSchedule — AgentMR9 assignments

**22 tasks** (demo-path 4 + parity 18). Mirror of `MasterSchedule.xlsx` (single source of truth, edited directly by all lanes; AgentDLP regenerates these mirrors). Full cross-lane view + dependency chains are in the xlsx.

> Coordinator = AgentMR9. If a parity row is not truly yours, flag AgentDLP. Depends On = must finish first; Blocks = waits on this.

Live build 1718 · updated 2026-07-11

## August-Demo (Phase 1) — 4 tasks

| ID | Area | Task | Depends On | Blocks | Status | Priority/Size | Source | Notes |
|---|---|---|---|---|---|---|---|---|
| S-4 | 1 Schedule | M9-7 Calendar Provider typeahead (the Schedule step) | X-1 | — | Blocked | P1 | Demo path |  |
| PP-3 | 3 Portal/Check-In | CF1-D3 portal date-picker autofill fix | — | — | In Progress | P2 | Demo path |  |
| PP-4 | 3 Portal/Check-In | Portal-CF host (patient-facing -> Configurable Forms) | X-4 | 18 tasks | Open | P1 | Demo path |  |
| PP-5 | 3 Portal/Check-In | CF2-F1 established-patient packet PREFILL | — | — | In Progress | P1 | Demo path |  |

## Parity (post-demo) — 18 tasks

| ID | Area | Task | Depends On | Blocks | Status | Priority/Size | Source | Notes |
|---|---|---|---|---|---|---|---|---|
| ECW-PT-1 | PT Patient portal | portal statements + results/records release + messaging center | PP-4 | — | Open | — | ECW |  |
| ECW-PT-2 | PT Patient portal | staff-initiated invite w/ identity-challenge activation + T&C consent capture + resend-activation recovery | PP-4 | — | Open | — | ECW |  |
| ECW-PT-3 | PT Patient portal | portal dashboard cards + refill/referral request flows + proxy/family linking | PP-4 | — | Open | — | ECW |  |
| ECW-PT-4 | PT Patient portal | patient-facing consolidated record view/download (info-blocking compliance) | PP-4 | — | Open | — | ECW |  |
| ECW-PT-5 | PT Patient portal | portal content/field configuration console + staff review-import queue for new-patient registrations (pairs w/ note 66 field-level reconciliation) | PP-4 | — | Open | — | ECW |  |
| ECW-PT-6 | PT Patient portal | communication preference engine + patient program/registry flags | PP-4 | — | Open | — | ECW |  |
| CER-PT-1 | PT Patient portal | invitation-based enrollment w/ expiring links + reminder (safer than credential handout) | PP-4 | — | Open | M | Cerner |  |
| CER-PT-2 | PT Patient portal | consumer health-library surface + portal IA w/ unread badges | PP-4 | — | Open | M | Cerner |  |
| CER-PT-3 | PT Patient portal | staged identity-proofing at portal claim (match-against-chart + OTP) | PP-4 | — | Open | M | Cerner |  |
| CER-PT-4 | PT Patient portal | assignable pre-visit form queue + caregiver-proxy switching (CF-lane fit: clipboards = CF form configs assigned to appointments) | PP-4 | — | Open | L | Cerner |  |
| CER-PT-5 | PT Patient portal | patient-side video-visit join w/ readiness pre-check (pairs w/ CER-FO modality + telehealth-consent rows) | PP-4 | — | Open | L | Cerner |  |
| CER-PT-6 | PT Patient portal | mobile biometric auth if/when PFO ships a patient app | PP-4 | — | Open | M | Cerner |  |
| CER-PT-7 | PT Patient portal | portal transaction set — refill request, self-schedule changes, bill pay, pre-visit forms (extends CER-PT-4/CER-PT-5) | PP-4 | — | Open | L | Cerner |  |
| CER-MB-1 | MB Mobile | mobile clinician surface: vitals review + photo capture patterns | PP-4 | — | Open | L | Cerner |  |
| CER-MB-2 | MB Mobile | mobile inbox + structured phone-triage template (extends CER-MC rows) | PP-4 | — | Open | L | Cerner |  |
| CER-MB-3 | MB Mobile | refill-remaining visualization + provider-side video-visit badge are the transferable ideas | PP-4 | — | Open | L | Cerner |  |
| CER-MB-4 | MB Mobile | offline-sync pattern for low-connectivity mobile visits (home-health domain, reference) | PP-4 | — | Open | L | Cerner |  |
| CER-MB-5 | MB Mobile | none — hospital porter/OB/workforce domains, recorded for corpus completeness | PP-4 | — | Open | — | Cerner |  |
