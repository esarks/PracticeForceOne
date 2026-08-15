---
title: "PracticeForceOneVendorActivationPlaybook"
---

# Vendor Activation Playbook — PracticeForceOne

**Date:** 2026-07-06 · **Last reviewed: 2026-07-24** · **Author:** AgentMR8 · **Premise:** engineering is complete; these are the *activation* plans that start the day each contract is signed. · **Companions:** [MR8 Table](<PracticeForceOneMR8Table.md>) · [Production Risk Register](<PracticeForceOneProductionRiskRegister.md>) (R12/R13 apply to every package)

**Read this first (founder):** every package below assumes three platform preconditions are already done — they are the same three switches from the readiness report: **backups on (R1), staging posture off (R2), one uptime alert (R3)**. Real payer/payment credentials must never enter a service that still carries destructive staging tools — that was your own Wave-1 rule (M7-10), and it stands.

**Universal effort key:** effort = engineering time after credentials arrive. Calendar time is usually dominated by **vendor enrollment latency** (payer enrollments: 2–8 weeks; noted per package).

---

## M8-1 — Clearinghouse (the keystone)

**What exists:** all five EDI generators live + validated (837P, 837I, 270, 276, 278); 999/TA1/277 acknowledgment parsing; `WebhooksClearinghouseRoutes` inbound receiver; EDI work queue (`WorkflowEdiQueueRoutes`); mock clearinghouse end-to-end (suite-verified). **What is honestly a stub:** `AdminClearinghouseRoutes` (the connection-config console) returns mock data and does not persist connections — connection persistence + the real transport adapter are the activation build.

**Vendor short-list:** Availity · Optum (Change) · Waystar · **Office Ally** (lowest-friction/lowest-cost for a small-practice start; Availity for breadth). Decision criteria: payer coverage for the pilot practice's payer mix, SFTP vs REST API, eligibility (270/271 real-time) support on the same contract, per-claim pricing.

**Implementation sequence:**
1. Contract + complete clearinghouse enrollment for the pilot practice's NPIs/TINs (starts the payer-enrollment clock — do this first, everything else runs in parallel).
2. Build connection persistence in `AdminClearinghouseRoutes` (real table, generated CRUD) + credential storage in **Secret Manager** (never in the DB or env — same pattern as `field-encryption-key`).
3. Build the transport adapter behind the existing seam (SFTP batch or REST, per vendor): outbound 837 submission from the EDI queue; inbound pickup of 999/TA1/277/271/835 into the existing parsers.
4. Wire `WebhooksClearinghouseRoutes` (or polling) to the vendor's notification model.
5. Payer-shakeout: submit test claims (vendor test mode), fix companion-guide quirks (R12 — budget 2–4 weeks).
6. Parallel-run: real claims for 1–2 payers while the practice's legacy path stays warm; expand payer-by-payer.

**Credentials required:** clearinghouse account (submitter ID, SFTP keys or API client+secret), per-payer enrollments (own timeline), pilot practice NPI/TIN/taxonomy.
**Configuration checklist:** connection record (host, submitter ID, ISA/GS envelope IDs) → Secret Manager secrets mounted as env → practice→clearinghouse mapping → payer list activation flags.
**Deployment checklist:** normal gated deploy; new secrets added to BOTH deploy configs (env-superset rule); characterization gate green; staging posture OFF (precondition).
**Testing plan:** vendor test-mode 837 round-trip (999 accept) → deliberate reject (999/TA1 error path) → 277 status flow → one real low-dollar claim per payer before volume.
**Rollback:** connection flag off → EDI queue reverts to hold/mock; claims stay queued, nothing lost (queue is durable).
**Effort:** **2–3 weeks engineering** after credentials; **4–10 weeks calendar** including enrollments.
**Risks:** payer-specific 837 quirks (R12); enrollment stalls (chase weekly); ISA/GS envelope mistakes flagged by 999s (test mode catches).

---

## M8-2 — Real-time eligibility (rides M8-1)

**What exists:** `EligibilityRoutes` + eligibility work queue + schedules; 270 generation / 271 consumption; coverage cache; check-in integration. Mock transport today.

**Implementation sequence:** activate after M8-1's transport exists — point the 270/271 exchange at the clearinghouse's real-time eligibility endpoint (usually REST even when claims are SFTP); map vendor response codes; enable per-practice.
**⚠ MANDATORY (R13):** before activation, MR82-lane's agreed reader change ships — eligibility readers that equality-match `subscriber_id` must query `SUBSCRIBER_ID_BIDX = blindIndex(value)` (fallback to plaintext equality when `blindIndex()` returns null) and decrypt subscriber/group reads. **Do not activate without this** — encrypted rows would silently fail to match.
**Credentials:** same clearinghouse account; real-time eligibility endpoint keys (sometimes a separate product SKU — confirm in contract).
**Testing:** known-covered test member (vendor sandbox) → active/inactive/copay assertions → check-in surface shows results → suite Eligibility group green against real transport.
**Rollback:** per-practice eligibility flag off → schedule/queue pauses; UI falls back to manual verify.
**Effort:** **3–5 days** engineering after M8-1 transport. **Risks:** payer 271 variance in benefit-detail segments; cache staleness policy needs a founder default (suggest 24h).

---

## M8-3 — ERA auto-posting (rides M8-1)

**What exists:** `EraRoutes` + `RemittanceRoutes` (835 parse → payment/adjustment posting → denial routing into the work queue), reconciliation views, `MockEraRoutes` proving the full path; ERA denial/payment automation exercised by DLP7 step-flow on every gate.

**Implementation sequence:** enroll for ERA delivery per payer (often separate from claim enrollment!) → transport picks up 835 files from the clearinghouse mailbox → feed the existing parser → **parallel-run posting in review mode** (post to a review queue, human approves) for 2–4 weeks → flip to auto-post per payer as trust builds.
**⚠ MANDATORY (R13):** same blind-index reader obligation as M8-2 for any 835→claim matching on subscriber ID.
**Credentials:** ERA enrollment per payer (EFT enrollment usually pairs with it — do both at once).
**Testing:** vendor test 835 → posting matches the suite's ERA scenarios; deliberate unbalanced 835 → exception queue; denial 835 → lands in denial workqueue (feeds M8-4).
**Rollback:** per-payer auto-post flag off → 835s land in review queue only (no data loss; postings reversible via the existing reversal path).
**Effort:** **1–2 weeks** engineering + the review-mode ramp. **Risks:** PLB (provider-level adjustment) segments are the classic parser gap — test explicitly; duplicate-835 delivery (idempotency by 835 control number).

---

## M8-4 — AI denial-recovery loop goes LIVE (no vendor — the payoff)

Not a vendor package, but the reason the three above exist: once M8-1/2/3 stream real denials, flipping the per-practice AI flags (`ai_feature_flags`: real variants on, `*_MOCK_*` off) + the founder's `MR3_AUTOPILOT_ENABLED` window turns on the differentiator on live money. Every action is already audited (K1 ledger); autopilot one-taps are default-OFF until your window. **Effort: hours.** This sequencing is why M8-1 is the keystone.

---

## M8-5 — Patient payments (card/ACH)

**What exists:** `PatientPaymentsRoutes` (`POST /api/patient-payments` — tenant-scoped recording of copay/statement payments, shipped for DLP), `PaymentsRoutes`/`ManualPaymentsRoutes`, patient-balance ledger. Missing by design: the processor hop itself (checkout + webhook).

**Vendor:** **Stripe** (recommended: fastest integration, Terminal option for card-present later) or a healthcare-specific processor if surcharging/HSA rules matter to the pilot.
**Implementation sequence:** Stripe account + webhook endpoint → portal "Pay now" → Stripe Checkout session → webhook (`payment_intent.succeeded`) posts via the existing `PatientPaymentsRoutes` path → receipt email. Desk-side: same flow from the staff UI.
**Credentials:** Stripe publishable + secret key (Secret Manager), webhook signing secret.
**Testing:** Stripe test cards end-to-end (success/decline/refund) → ledger balance assertions (the DLP-G02 scenario already proves the ledger math).
**Rollback:** feature flag off → portal hides Pay Now; manual recording path (already live) continues.
**Effort:** **1–2 weeks** engineering. **Risks:** webhook idempotency (Stripe retries — key on event ID); refund flow needs a staff surface decision (v1: Stripe dashboard + manual ledger reversal, documented).

---

## M8-6 — Patient statements

**What exists:** `StatementsRoutes` (statement generation from the balance ledger), statement data live in reports. Missing: delivery (print/mail vendor or e-delivery) + the pay link (wants M8-5 first).

**Vendor:** e-delivery first (email statement + portal view + Stripe pay link = **no print vendor needed for the pilot**); add a print/mail house (e.g., Lob, or the clearinghouse's statement product) only when a practice demands paper.
**Sequence:** M8-5 first → statement email template w/ secure portal link → batch send from the existing statement generation → track sent/viewed/paid.
**Credentials:** none beyond M8-5 + real SMTP/SendGrid (R7 — replace Gmail as part of this).
**Testing:** statement math vs ledger (suite groups exist); email render; pay-link → payment → balance-zero assertion (DLP-G02 pattern).
**Rollback:** stop the batch job; statements remain viewable in-portal.
**Effort:** **~1 week** engineering (e-delivery path). **Risks:** deliverability (needs the SendGrid move); statement-cycle policy is a founder config (suggest monthly, min-balance $5).

---

## M8-40 — Appointment reminders

**What exists:** `AppointmentReminderService` — due-scan, idempotency, delivery rows all live; **email channel works today** (EmailService/SMTP). The code comment says it plainly: "SMS/voice (Twilio) is a future swap-in: add a channel arg + a second delivery row; the scaffolding is channel-agnostic."

**Vendor:** **Twilio** (SMS + voice) + **SendGrid** (email — same contract family; also retires R7/Gmail).
**Sequence:** SendGrid cutover for the existing email channel (config swap) → Twilio SMS channel (the swap-in above) → confirm/reschedule reply handling (inbound webhook → appointment status) → voice only if the pilot asks.
**Credentials:** Twilio SID/auth token/messaging service + a provisioned number (**+ A2P 10DLC registration — 1–3 weeks, start at signing**); SendGrid API key + domain authentication (SPF/DKIM on practiceforceone.com).
**Testing:** reminder fires per schedule (idempotency: exactly one per appointment per window — the service's select logic already enforces this); STOP/opt-out honored; confirm-reply flips appointment status.
**Rollback:** channel flag off → email-only (already live) or fully off; no data risk.
**Effort:** **~1 week** engineering. **Risks:** A2P 10DLC registration latency (calendar, not code); TCPA compliance = practice-level consent config (capture consent at registration — field exists in portal registration).

---

## Sequencing summary (founder's one-glance version)

| Order | Package | Engineering | Calendar (incl. vendor) | Unlocks |
|---|---|---|---|---|
| 1 | **M8-1 Clearinghouse** | 2–3 wks | 4–10 wks (enrollments) | everything below + **M8-4 live AI on real money** |
| 2 | M8-2 Eligibility | 3–5 days | +1 wk | check-in coverage confidence |
| 2 | M8-3 ERA | 1–2 wks | +2–4 wks review-ramp | auto-posting + live denial feed |
| 3 | M8-5 Payments | 1–2 wks | 2 wks | patient money in |
| 4 | M8-6 Statements | 1 wk | 1 wk after M8-5 | balances actually collected |
| any | M8-40 Reminders | 1 wk | +1–3 wks (10DLC) | no-show revenue; independent of the rest |

**Total engineering to full activation: ~7–9 weeks. Total calendar: ~10–14 weeks, dominated by enrollments — which is why signing M8-1 is the only thing on today's critical path.**

---

## Review Epilog — 2026-07-24

Reviewed 2026-07-24. Status: CURRENT — no body edits required.

- All per-vendor activation packages (M8-1 through M8-40) remain accurate: engineering seams, credentials patterns, testing plans, rollback paths, and effort estimates unchanged.
- Platform preconditions (R1 backups, R2 staging posture, R3 alerting): as of 2026-07-11, R1 (daily backups + restore drill) and R3 (uptime + SQL alerts) are DONE; R2 (staging posture flip) awaits founder go-live window.
- R13 blind-index reader obligation remains an open engineering checklist item for M8-2/M8-3 activation — unchanged from original.
- Live build is now **1943** (gate 251/251 GREEN); M8-1 clearinghouse contract remains the critical-path keystone.
