---
title: "PracticeForceOneFirstCustomerGoLiveChecklist"
---

# First Customer Go-Live Checklist — PracticeForceOne

**Date:** 2026-07-06 · **Last reviewed: 2026-07-24** · **Author:** AgentMR8 · **Premise:** a real practice signs tomorrow — this is everything between the signature and a safe first day of live use. · **Companions:** [Production Risk Register](<PracticeForceOneProductionRiskRegister.md>) · [Vendor Activation Playbook](<PracticeForceOneVendorActivationPlaybook.md>) · [Operations Runbook Review](<PracticeForceOneOperationsRunbookReview.md>)

Checkboxes are ordered. **Bold** items are hard gates — do not go live past an unchecked one.

## Phase A — Platform safety (before any customer data; ~1 day of switches)

- [ ] **Backups firing**: flip `schedule_enabled` in the backup console; verify a scheduled row lands in `backup_journal` within 24h (R1)
- [ ] **Cloud SQL automated backups + PITR enabled** (`gcloud sql instances patch`) (R1)
- [ ] **Restore drill executed once** (M8-12): restore latest backup to a scratch instance, point a probe at it, verify row counts + a known record; write the timing down — that number *is* your RTO (R1)
- [ ] **Staging posture off**: `ALLOW_DESTRUCTIVE_STAGING_OPS` removed, `PORTAL_TEST_MODE` removed, `JAC_ENV` flipped (M7-10 Phase 2; coordinate the fleet — staging workflows move to the shadow service) (R2)
- [ ] **Alerting live**: uptime check on `/api/health` + alert channel to founder phone/email; Cloud SQL availability alert (R3)
- [ ] SMTP moved off personal Gmail (SendGrid, domain-authenticated) — customer-facing email must not come from a personal account (R7)
- [ ] Confirm current build green: gate 251/251 GREEN on the serving build (live: build **1943**); rerun `bin\dlp7-verify.ps1` for DLP journey confirmation
- [ ] Rollback rehearsal: promote previous revision and back (OPERATIONS.md §2) — 5 minutes, proves the muscle

## Phase B — Practice provisioning (day 1–2)

- [ ] Create org + practice via the real signup path (register → verify → activate) — *not* staging seed tools
- [ ] Practice profile complete: NPI, TIN, taxonomy, address, place-of-service
- [ ] **RBAC roles assigned per real staff list** (matrix already founder-approved); per-practice RBAC toggle ON; verify one deny case per role from the admin grid
- [ ] MFA enrollment for all staff users (TOTP live); portal MFA policy communicated to patients (enforced-when-enrolled)
- [ ] Payer list loaded for the practice's actual payer mix (PAYERS_MASTER has the global set; practice-payer mapping via Practice Payers)
- [ ] Fee schedule / charge master entries for the practice's top codes
- [ ] Booking rules + self-scheduling guardrails configured (M8-41 founder settings)
- [ ] Appointment reminder policy (email channel live today; SMS per M8-40 activation)
- [ ] AI flags per founder policy: `COPILOT/RISK_SCORING/…_ENABLED` real variants on, `*_MOCK_*` **off** for this practice (verified live table `ai_feature_flags` is per-practice); autopilot stays off until the founder window
- [ ] Drug-interaction flag: stays OFF until drug-DB partner (M8-54, documented)

## Phase C — Data migration (day 2–5, size-dependent)

- [ ] Patient demographics import (CSV → patients; the DLP registration path validates shape); MRN continuity decision (keep legacy MRNs)
- [ ] Active insurance records (subscriber IDs will encrypt on write — that's by design; bidx makes them searchable)
- [ ] Problem/med/allergy lists (or C-CDA import-preview path per chart if the legacy EHR exports C-CDA)
- [ ] Open A/R decision: **recommended = don't migrate open claims** — run legacy A/R down in the old system, start new claims in PFO (cleanest cutover; revisit only if the practice insists)
- [ ] Migration verification: row counts + spot-check 10 random patients end-to-end + one full DLP-style journey on the practice's own data

## Phase D — Humans (parallel with C)

- [ ] Staff training: the **DLP walkthroughs on this wiki are the training material** (front-desk journey, RCM journey, portal journey — six-piece teaching format, already written)
- [ ] Dashboard "?" in-app help verified on the practice's enabled widgets
- [ ] **Support channel stood up** (R14): support@ inbox + a triage note (who answers, response-time expectation, escalation to founder); status expectations set in writing (even one paragraph beats nothing)
- [ ] **2nd-operator drill** (R4): one person besides the founder performs a deploy + a rollback + reads the restore runbook, unaided, from OPERATIONS.md
- [ ] Go-live day support plan: founder (or trained operator) reachable during the first two clinic days

## Phase E — Vendor activation (calendar-parallel; see the [Playbook](<PracticeForceOneVendorActivationPlaybook.md>))

- [ ] M8-1 clearinghouse contract signed → enrollments filed for this practice's payers (**the long pole — file in week 1**)
- [ ] Eligibility (M8-2) + ERA (M8-3) activated per playbook once transport is live — including the **R13 blind-index reader change** before flip
- [ ] Payments (M8-5) / statements (M8-6) / SMS reminders (M8-40) per practice preference
- [ ] Until clearinghouse is live: **paper/legacy claim submission continues via the practice's current path** — set this expectation in the contract (PFO runs scheduling/clinical/portal from day 1; billing cutover follows enrollment)

## Phase F — Go-live day + first month

- [ ] Day 0: morning health check; watch `[AUDIT-FALLBACK]` stream and error logs during first live hours
- [ ] Day 1–7: daily backup-journal check; daily error-log sweep; end-of-day check-in with practice manager
- [ ] Week 2: first-week metrics review (appointments booked, encounters closed, claims staged)
- [ ] Week 4: M8-10 evidence package — this pilot **is** the "prove it at a real practice" milestone; capture volumes, uptime, and issues for the reference-customer story
- [ ] Month 1: re-score the [Risk Register](<PracticeForceOneProductionRiskRegister.md>); schedule the recurring restore-drill cadence (quarterly)

---

## Missing operational artifacts (found by this review — build during Phase A/B)

| # | Artifact | Status | Effort |
|---|---|---|---|
| 1 | **Backup/restore runbook section** in OPERATIONS.md (procedure, RTO/RPO, drill log) | missing — see [Runbook Review](<PracticeForceOneOperationsRunbookReview.md>) | write during the drill (half-day, incl. the drill) |
| 2 | **New-practice onboarding guide** (Phase B as a repeatable doc) | missing — this checklist's Phase B is the seed | half-day |
| 3 | **Data-migration guide** (import formats, verification recipe) | missing — Phase C is the seed | half-day, refined during first migration |
| 4 | **Support triage runbook** (channels, severities, response targets, escalation) | missing (R14) | 1–2 hours for the minimal version |
| 5 | **Administrator guide** (practice-admin view: users, roles, payers, flags) | partial — RBAC HowTo + admin grid exist; needs a practice-admin-facing page | 1 day |
| 6 | **End-user guide** | **exists in substance** — the DLP walkthrough series; needs a landing page ordering them by role | 1–2 hours |
| 7 | Uptime/alerting configuration note (what alerts exist, where they go) | missing (create with R3) | 30 min |
| 8 | Customer-facing SLA/expectations one-pager | missing (R14) | founder voice — 1 hour |

**Reality check:** none of the missing artifacts is large — the platform's documentation debt is concentrated in *operator-* and *customer-facing* packaging, not substance. Total ~3 focused days, most naturally written while executing Phases A–D for the first time.

---

## Review Epilog — 2026-07-24

Reviewed 2026-07-24. Status: UPDATED.

- Updated Phase A gate-green check: "suite 480/480 + DLP7 20/20" updated to current gate 251/251 GREEN on live build **1943**.
- Phase A platform-safety items (R1 backups, R3 alerting): as of 2026-07-11, both are DONE (daily backups + restore drill proven RTO ~17 min; uptime + SQL alerts live); Phase A checklist items remain unchecked as a formal go-live gate (requires founder sign-off).
- Phase B–F checklist, vendor activation sequence, and missing-artifact table remain accurate and current — no other edits required.
- August 2026 demo path (Schedule→Check-In→Eligibility→Chart→Encounter→Checkout) verified end-to-end; demo data ready (Bay Area Cardiology, Steve Chen, 6 patients) — directly relevant to Phase D staff training and Phase F go-live preparation.
