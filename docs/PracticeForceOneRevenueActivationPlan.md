---
title: "PracticeForceOneRevenueActivationPlan"
---

# Revenue Activation Plan — PracticeForceOne

**Date:** 2026-07-07 · **Last reviewed: 2026-07-24** · **Author:** AgentMR8 · **Status of the code:** engineering complete & production-verified (original baseline: build 1683; **current live build: 1943**, gate 251/251 GREEN; field-encryption plaintext debt retired at 1683) · **Companions:** [Vendor Activation Playbook](<PracticeForceOneVendorActivationPlaybook.md>) (per-integration detail lives there — this plan is the sequenced founder view) · [Production Risk Register](<PracticeForceOneProductionRiskRegister.md>) · [First Customer Go-Live Checklist](<PracticeForceOneFirstCustomerGoLiveChecklist.md>)

---

## The one-paragraph version

Every revenue integration is built and tested against mock transports; **none of them can make money until one contract is signed: the clearinghouse (M8-1)**. Signing it starts a 4–10-week enrollment clock that nothing else can shorten, so it is the only item on this week's critical path. Everything else in this plan — eligibility, ERA auto-posting, the live AI denial-recovery loop, payments, statements, reminders — either rides that contract or is independent and small. Total engineering after credentials: **~7–9 weeks**. Total calendar: **~10–14 weeks, dominated by payer enrollments**.

## What you (founder) do, in order

| When | Action | Why now |
|---|---|---|
| **This week** | Pick + sign the clearinghouse (short-list & criteria in the [playbook §M8-1](<PracticeForceOneVendorActivationPlaybook.md>)); start payer enrollments for the pilot practice's NPIs/TINs | The enrollment clock is the whole schedule |
| **Before any real credential enters prod** | Flip the three platform switches: **R1 backups+PITR, R2 staging-posture off, R3 one uptime alert** (+ the 2-minute R15 log sink) | Your own Wave-1 rule (M7-10): no payer credentials in a system carrying destructive staging tools |
| At contract | Kick off **ERA + EFT enrollments per payer** (often separate from claim enrollment) and, if doing reminders, **Twilio A2P 10DLC registration** | Both are calendar-bound vendor queues |
| During enrollment weeks | Approve the Stripe account (M8-5) and SendGrid domain auth (retires R7/Gmail) | Independent of the clearinghouse; fills the waiting time |
| At transport-live | Approve the **AI flag window**: per-practice `ai_reasoner`/`ai_appeals`/`ai_risk` real-mode on; `ai_autopilot` (master one-tap flag) when you're ready | This is the payoff — hours of work, not weeks |

## Activation sequence (engineering view)

```
Sign M8-1 ──► enrollments run (4–10 wks, vendor-side)
   │
   ├─ wk 1–3: connection persistence (AdminClearinghouseRoutes) + transport adapter
   │          (SFTP/REST per vendor) + webhook wiring  ── the ONLY real build left
   ├─ wk 3–5: payer shakeout in vendor test mode (R12: budget 2–4 wks for quirks)
   ├─ then:   M8-2 eligibility (3–5 days)  ⚠ R13 gate (see below)
   ├─ then:   M8-3 ERA in review-mode (1–2 wks) → per-payer auto-post ramp  ⚠ R13 gate
   ├─ then:   M8-4 AI loop LIVE = flag flips only (hours)
   ├─ parallel: M8-5 Stripe (1–2 wks) → M8-6 e-statements (1 wk)
   └─ parallel: M8-40 reminders (1 wk + 10DLC calendar)
```

## ⚠ The two hard gates (do not activate past them)

1. **R13 — blind-index readers (now load-bearing).** As of 2026-07-07 the encryption backfill retired every plaintext row: **zero plaintext `subscriber_id` values remain in the database.** Any M8-2/M8-3 code that matches on subscriber ID MUST query `SUBSCRIBER_ID_BIDX = FieldCipher.blindIndex(value)` and decrypt reads — plaintext equality now matches *nothing*. This is a checklist line in both playbook packages; the MR82-lane reader change ships before those activations.
2. **R1/R2/R3 platform switches before real credentials.** Backups are still OFF (re-verified 2026-07-07). A payer-connected system without backups is an unacceptable liability posture for the first customer.

## Configuration inventory (code-grounded, verified 2026-07-07)

**Environment/secret conventions:** secrets live in **Secret Manager** mounted as env (pattern: `field-encryption-key` → `FIELD_ENCRYPTION_KEY`); every new env var must be added to **BOTH** deploy configs (`cloudbuild.yaml` + `pipeline/cloudbuild-deploy.yaml`) — the env-superset rule that closed the env-wipe incident class.

### Already live (no action)
| Var | Purpose |
|---|---|
| `FIELD_ENCRYPTION_ENABLED` + `FIELD_ENCRYPTION_KEY` | field encryption (LIVE; never remove the key var) |
| `RBAC_ENFORCEMENT_ENABLED` + `RBAC_UI_GATING` (+ `RBAC_KILL_SWITCH`) | RBAC (LIVE) |
| `SMTP_ENABLED`, `SMTP_HOST`, `SMTP_USERNAME`, `SMTP_PASSWORD`, `SMTP_FROM_ADDRESS`, `SMTP_FROM_NAME` | email channel (works today on Gmail — R7: repoint to SendGrid during M8-6/M8-40) |
| `ANTHROPIC_API_KEY`, `LLM_REASONER_ENABLED`, `LLM_REASONER_AUTO`, `MR3_RISK_TIER_REFINEMENT_ENABLED` | AI stack (key mounted; reasoner env gates) |
| `WEBHOOK_SECRET` | clearinghouse webhook receiver auth (`WebhooksClearinghouseRoutes`) — rotate to a vendor-specific value at M8-1 activation |

### Per-practice flags (DB, via the admin AI-flags console — not env)
`ai_reasoner` · `ai_appeals` · `ai_coding` · `ai_risk` · `ai_rules` · `ai_copilot` · `ai_batch` · **`ai_autopilot`** (master flag the `DenialAutopilotExecutor` checks per practice — this is the founder's M8-4 one-tap; the old `MR3_AUTOPILOT_ENABLED` env is retired). Each has real + mock variants; activation = real ON, mock OFF, per practice.

### New at each activation (create in Secret Manager, mount in both configs)
| Package | Secrets/creds |
|---|---|
| M8-1 Clearinghouse | submitter ID, SFTP key or API client+secret, ISA/GS envelope IDs (config record, not secret), per-payer enrollments |
| M8-2 Eligibility | real-time 270/271 endpoint keys (confirm it's on the same contract SKU) |
| M8-3 ERA | ERA + EFT enrollment per payer (vendor-side; no new app secret) |
| M8-5 Payments | `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET` *(names to be introduced by the activation build)* |
| M8-6 Statements | SendGrid API key + domain auth (replaces the `SMTP_*` Gmail values) |
| M8-40 Reminders | Twilio SID / auth token / messaging service SID + number; A2P 10DLC registration |

## Deployment, validation & rollback (uniform across packages)

- **Deploy path:** `bin\cloud-deploy.ps1` (gated safe-canary; provenance-stamped) — never bare submits; PC-lane `ci-deploy.ps1` remains valid until the C3 cutover.
- **Validation ladder per activation:** characterization gate green on the candidate → package-specific smoke from the [playbook](<PracticeForceOneVendorActivationPlaybook.md>) testing plan (vendor test mode first, one low-dollar real transaction before volume) → `bin\run-tests.bat` suite groups for the touched domain → DLP7 journey on the promoted build.
- **Rollback:** every package rolls back by **flag, not redeploy** (connection/per-practice/per-payer flags → queues hold durably, mock/manual paths resume). Full-build rollback = re-promote the previous gate-blessed revision.
- **Smoke-test evidence:** record each activation's smoke results in `CurrentTasksPlan.md` + stamp the MR8Table — same proof discipline as every deploy.

## What turns into revenue, when

1. **Weeks 1–5 (shakeout):** claims flow electronically; acknowledgment visibility (999/TA1/277) replaces black-hole submission.
2. **ERA ramp:** payment posting labor drops to review-clicks; denials stream into the work queue automatically.
3. **AI flip (hours after ERA):** every real denial gets an AI explanation, drafted appeal, and risk score — audited end-to-end. **This is the demo that closes the next customer, running on real money.**
4. **Payments + statements:** patient balances become collectable cash with a pay link.
5. **Reminders:** each prevented no-show is directly recovered revenue; independent of everything above.

---

## Review Epilog — 2026-07-24

Reviewed 2026-07-24. Status: UPDATED.

- Updated header build reference from 1683 to current live build **1943** (gate 251/251 GREEN); original 1683 baseline retained as evidence anchor.
- Activation sequence and hard-gate descriptions (R13 blind-index reader, R1/R2/R3 platform switches) remain accurate and current; no body edits needed.
- M8-1 clearinghouse is still the critical-path keystone; sequencing summary unchanged.
- R1 (backups) status as of 2026-07-11: daily automated backups enabled + restore drill proven (RTO ~17 min); R3 (alerting): uptime + SQL connection alerts live. These were open risks at doc creation; now mitigated (see Production Confidence Attestation).
