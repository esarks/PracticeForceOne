---
title: "PracticeForceOneProductionConfidenceAttestation"
---

# PracticeForceOne — Production Confidence Attestation (MR8)

**Owner:** AgentMR8 (production readiness — "you own production confidence") · **Last reviewed: 2026-07-24** · **Purpose:** the demo-phase directive asks every completed item to carry deployment evidence, certification status, and remaining follow-up. This is the standing ledger for the production-readiness lane, **re-verified against LIVE, not self-reported.** Method: each row was checked against live production or the cloud project the day it is stamped — not asserted from notes.

**Live baseline at last full MR8 verification:** build **1734** (2026-07-12). **Current live build: 1943**, gate 251/251 GREEN. The ledger rows below were verified at 1734; the platform has continued to advance — re-verify any row before citing it to a customer.

---

## Production-readiness ledger (MasterSchedule PR-/X- rows)

| Item | What it guarantees (clinic terms) | Deployment evidence | Verified live | Follow-up |
|---|---|---|---|---|
| **X-1** gcloud auth | The whole fleet can deploy at all | founder reauth; **auth preflight in `cloud-deploy.ps1` (2026-07-14)** — stale token now fails in ~2s with the exact fix, not a multi-minute hang | ✅ authed `ptm@esarks.com` | **Root cause = Workspace reauth policy on USER creds (lapses ~daily).** Preflight is the demo-phase mitigation; **post-demo permanent fix = service-account or git-push trigger** (esarks-github connection exists) so the deploy stops depending on user login |
| **X-2** deploy pipeline stability | A failed build can't wedge the deploy lane during demo prep | orphan-reclaim `15685044a`; pool defect-pair `0f80cf637` | ✅ **first fully-automatic orphan reclaim fired live on 1717** (dead build's lock taken over in one poll); no pool reclaim fires since 1714 | none |
| **PR-1** audit-fallback sink (R15) | Audit events survive to the 6-yr HIPAA horizon, not 30 days | bucket + sink created 2026-07-11 | ✅ bucket ACTIVE, 2200-day retention, sink live | optional: replay-to-AUDIT_LOG job (MR9 candidate) |
| **PR-2** uptime alerting (R3) | A mid-demo outage pages a human instead of going unnoticed | uptime check + 2 alert policies 2026-07-11 | ✅ **428/428 checks passed last hour**; both policies ENABLED; email → ptm@esarks.com | tune thresholds if noisy |
| **PR-3** automated daily backups (R1) | Worst-case data loss ≤ 24 h instead of unbounded | enabled 2026-07-11, 08:00 UTC, 7 retained | ✅ **three consecutive automated backups SUCCESSFUL (07-11 + 07-12 + 07-13)** — daily cadence proven | PITR still founder-gated (PR-4) |
| **PR-4** restore drill | We can actually restore, fast, with intact data — not just that backups exist | **DRILL EXECUTED 2026-07-12** (isolated clone-restore, zero prod impact) | ✅ **restore proven data-intact: 7,441 rows across key tables, 0 orphaned appointments; RTO ~17 min in-place / ~31 min clone** | PITR flip = founder window (separate); re-run drill monthly |
| **PR-5** security/HIPAA/audit hardening (ongoing) | Money and config surfaces can't be poisoned by a typo or a bad actor | payment guard `e101c39a9` (1717); CF config URL-hygiene `4fef4d58d` (1714); prefill PHI-scope review PASS | ✅ **live probes 2026-07-12:** negative payment → HTTP 400; `javascript:` config href → HTTP 400 | ongoing umbrella; next items post-demo |
| **PR-7** CF configuration governance | Hundreds of config forms governed like source code (post-August #1) | design published (`CFGovernanceDesign.md`), MR10 folds absorbed | ⚙ design complete; **implementation post-demo** | founder decisions D-1…D-4; G1 = audit+versions |
| **PR-8** gate relative-date conversion | The scheduling gate can't self-break when the temporal flag flips near demo week | `65851731a` (generic scope) — **LIVE on 1734** | ✅ **gate-proven** (all converted scenarios green on the 392ce925 candidate) **+ behavior-proven on live** (scheduling 14/14 + e2e 3/3) | **@AgentDLP:** 4 DLP-* journey scenarios (Aug 12–25) remain; don't flip `SCHEDULING_TEMPORAL_VALIDATION` until they land |

## Certification status (who has signed off on what)

- **Deploy pipeline (X-2):** self-certified by the gate + a real failure event (1717 orphan reclaim). No external cert needed.
- **Backups (PR-3/PR-4):** self-verified against Cloud SQL backup history **AND certified by a restore drill (2026-07-12)** — data-intact, RTO measured. We can now prove backups *exist, succeed, and restore fast with intact data*. Runbook: `docs/runbooks/backup-restore.md`.
- **Security guards (PR-5):** verified by live probe + in-gate scenarios (K1-b payment, CF-1 URL-hygiene). DLPCF journey certification (AgentDLP) exercises the Checkout payment path end-to-end.
- **PR-8:** behavior-preservation certified against live; the flag-ON contract is *designed* correct but **cannot be certified until the flag is actually flipped in a test** — noted as a residual.

## Honest residuals (what confidence we do NOT yet have)

1. ~~**Restore is unrehearsed**~~ **CLOSED 2026-07-12** — restore drill executed: data-intact (7,441 rows, 0 orphans), RTO ~17 min in-place / ~31 min clone. Runbook has the repeatable method; re-run monthly.
2. **PITR is off** — sub-24h data loss is still possible; enabling it can restart the instance, so it waits for a founder window.
3. **Instance-deletion is uncovered** — Cloud SQL backups die with the instance; no GCS export job yet (runbook §3).
4. **Temporal-flag contract unproven live** (PR-8) — the flag-ON scheduling rules have never run against real traffic.
5. **Config governance is paper** (PR-7) — the C-grade governance debt from the CF assessment is designed, not built; correct for the demo phase, but real until G1 ships.
6. **Deploy auth still on user creds** — the ~daily Workspace reauth lapse is mitigated (fast-fail preflight, 2026-07-14) but not eliminated; the permanent fix (service-account or git-push trigger) is deferred post-demo to avoid deploy-lane churn during prep. Founder decision on which path when we get there.

---
*Re-verify cadence: on every production-readiness change and at least weekly through the demo. Cross-refs: [ProductionRiskRegister](<PracticeForceOneProductionRiskRegister.md>) · [CFGovernanceDesign](<PracticeForceOneCFGovernanceDesign.md>) · [CFArchitectureAssessment](<PracticeForceOneCFArchitectureAssessment.md>) · MasterSchedule tab AgentMR8. Backup/restore runbook: `docs/runbooks/backup-restore.md`.*

---

## Review Epilog — 2026-07-24

Reviewed 2026-07-24. Status: UPDATED.

- Updated baseline note: last full MR8 verification was at build 1734 (2026-07-12); current live build is **1943** (gate 251/251 GREEN). Ledger rows are accurate as of 1734 — re-verify individually before citing.
- Ledger status as of this review: PR-1 (audit sink), PR-2 (uptime alerting), PR-3 (daily backups), PR-4 (restore drill with measured RTO ~17 min), PR-5 (security guards), X-1 (deploy auth preflight), X-2 (deploy pipeline stability) all confirmed ✅ at 1734; PR-7 (CF governance) ⚙ design complete, implementation post-August; PR-8 (gate relative-date) ✅ behavior-proven on live.
- August demo five priorities (Final August Sprint section) remain accurate for pre-demo preparation; no changes needed.
- Honest residuals: PITR still founder-gated; instance-deletion GCS export still open; deploy auth on user creds (preflight mitigated, SA/trigger fix post-demo).

---

## Final August Sprint — MR8 deliverable (2026-07-16, live 1783)

The five questions, answered from the production-readiness seat (evidence, not claims):

**1. Could a physician complete an entire clinic day without returning to ECW?**
From the infrastructure layer: **yes — nothing in production-readiness forces an ECW return.** The 18-step workflow passes end-to-end at the API layer (full characterization 137/137 on live; CF-14 demo spine certified), the platform self-heals (pool reclaim + deploy-lock orphan reclaim), backs up (4-day cadence + a restore drill with a measured ~17-min RTO), and is monitored (uptime + connection alerts to the founder). Feature-completeness of the 18 steps is CF/DLP/MR9's certification to give; the *foundation* they run on is solid.

**2. Where would users hesitate?** Not from infrastructure — it's invisible when healthy. The one transient I found (Kanban status read-after-write) is masked by the UI's 900ms reload, so the card moves on the first click. No infra-caused hesitation.

**3. What would cause confusion during a live demonstration?** From my lane, only one realistic path: **a deploy during the demo window.** A safe-canary deploy briefly doubles connection pools and mints revisions; on the 25-slot db-f1-micro that's the one time infra could blip. Mitigated by DB_POOL_MAX=3, but the clean answer is to **freeze deploys during the demo.**

**4. What remaining work is genuine demo risk (my lane)?** No DEMO BLOCKERS in production-readiness. The honest residuals: connection-exhaustion root cause (stale-revision accumulation — mitigated, not eliminated); PITR off (≤24h loss window, covered by backups+drill); the recurring gcloud lapse (blocks ad-hoc deploys, not the running demo).

**5. Five highest-priority MR8 actions if the demo were tomorrow:**
   1. **Freeze the deploy lane during the demo window** + clean stale Cloud Run revisions beforehand (max connection headroom).
   2. **Full-suite re-certification** on the exact build being demo'd (fresh 137/137 the morning of).
   3. **Confirm backup + restore readiness** (latest backup present; drill recipe at hand).
   4. **Verify monitoring is armed** (uptime + connection alerts enabled; founder email working).
   5. **Land all pending fixes (incl. the G-1 uuid fix) in ONE clean gated deploy well before the window, then freeze** — nothing pending rides in mid-demo.

### Ranked MR8 issues
- **DEMO BLOCKER:** none in production-readiness.
- **HIGH:** deploy-during-demo connection pressure → freeze deploys + pre-clean stale revisions.
- **MEDIUM:** recurring gcloud auth lapse (blocks ad-hoc deploys; preflight makes it a 10-sec fix); PITR off (loss window, mitigated).
- **POST-DEMO:** G-1 config-audit version-snapshot half; config governance G-2/tenancy (founder D-1); all 6 ECW-SEC parity rows (Phase-1 audit: none needed for a normal patient day); stale-revision auto-cleanup pipeline fix; the permanent deploy-auth (SA/trigger) fix.

**Phase-1 ECW audit result:** all 6 ECW-SEC rows are exception/admin/compliance features — a physician/biller/front-desk does **not** return to ECW for a *normal* patient day for any of them, and the security backend that matters (PHI read-audit, break-glass) is LIVE+proven. All POST-DEMO.
