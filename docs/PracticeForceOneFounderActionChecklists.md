---
title: "PracticeForceOneFounderActionChecklists"
---

# Founder Action Checklists — everything waiting on you, ready to execute

**Prepared:** 2026-07-07 by AgentMR7 (release steward) · **Last reviewed: 2026-07-24** · **Live state at preparation verified against build 1683** (`gcloud run services describe`, 12:xx UTC): `ALLOW_DESTRUCTIVE_STAGING_OPS=true` · `MFA_LOGIN_ENFORCEMENT_ENABLED` absent (off) · `SECFILTER_SHADOW_MODE=true`, enforcement off · `JAC_ENV=staging` · `PORTAL_TEST_MODE=1` · maxScale=20. **Current live build: 1943 — re-verify env state before executing any checklist item.**

Each item below is reduced to **approve → paste → verify**. Risks and rollback are stated per item. Ordering follows the [Risk Register](<PracticeForceOneProductionRiskRegister.md>)'s "top-3 to retire this week," then the decisions. Nothing here executes without you.

---

## A1 — Alerting: one uptime check + a pager (Risk R3, ~15 min, ~free)

**Why first:** today, nobody is paged if prod goes down; discovery = next agent session or a customer.
**Prereqs:** none. **Risk:** none (observability only). **Rollback:** delete the check/policy.

1. Cloud Console → Monitoring → Alerting → **Create notification channel** → Email → `ptm@esarks.com` (add SMS if you want phone pages).
2. Monitoring → Uptime checks → **Create**: URL `https://claimsprocessing-api-jlf45pqlma-uc.a.run.app/api/health`, protocol HTTPS, check every 5 min, alert on failure → attach the channel.
3. (Optional, pages on deploy-pipeline failures — CI/CD item 6) Alerting → **Create policy** → log-based condition, filter: `resource.type="build" AND severity>=ERROR` → same channel.

**Verify:** Monitoring shows the check green; "test notification" arrives in your inbox.

## A2 — Backups + PITR + restore drill (Risk R1 — AgentMR8's package)

Owned/documented by MR8 — three switches: app backup `schedule_enabled` in the Backups UI, Cloud SQL automated backups + PITR in the console, then schedule the M8-12 restore drill. See the [Risk Register R1 row](<PracticeForceOneProductionRiskRegister.md>) and MR8's readiness report. **Do A2 before A3** (disarm destructive tooling only after backups exist).

## A3 — Disarm destructive staging ops in prod (M7-10 Phase 2, Risk R2, ~5 min)

**Prereqs (all verified):** the deploy gate uses only `/api/staging/clear-dlp`, which stays ungated; the flag mechanism has been live+exercised since build 1638; **A2 backups should be ON first** (register sequencing).
**Risk:** your manual restage tooling (`clear-tables`, `reset-test-data`, `seed-icd10`) returns 403 while flipped — that is the point; flip back for a planned restage window.
**Rollback:** set the var back to `true` (same command) — instant, reversible.

```
gcloud run services update claimsprocessing-api --region us-central1 --update-env-vars ALLOW_DESTRUCTIVE_STAGING_OPS=false
```

Then keep it durable: tell the fleet (AGENTS.md) so both deploy configs (`cloudbuild.yaml` + `pipeline/cloudbuild-deploy.yaml`) get the same value — otherwise the next deploy re-arms it. I will make the config edits on your "A3 is flipped" message.

**Verify:** `POST /api/staging/clear-tables` → 403; `clear-dlp` still works (next deploy gate stays green).

## A4 — Staff MFA enforcement (M7-18 second half, ~2 min)

**Prereqs (all verified):** code live since 1665; portal half lifecycle-validated 14/14; enforcement challenges **only users who enrolled** (unenrolled staff log in unchanged); the deploy gate auto-detects the flag; the UAT harness account is MFA-off by design; your own account is already enrolled.
**Risk:** enrolled users (you) must have the authenticator/recovery codes at hand from the next login.
**Rollback:** set `false` — instant.

```
gcloud run services update claimsprocessing-api --region us-central1 --update-env-vars MFA_LOGIN_ENFORCEMENT_ENABLED=true
```

Same durability note as A3: on your confirmation I sync both deploy configs.

**Verify:** your next login challenges for TOTP; a non-enrolled staff account logs in directly.

## A5 — Deployment-model decision (⛔ decision only — 2-minute read)

Read [PracticeForceOneDeploymentModelDecision](<PracticeForceOneDeploymentModelDecision.md>). Reply **"Option A"** (cloud-only, recommended) or **"Option B"** (permanent dual-lane) in AGENTS.md or here.
**What your answer triggers (me, no further founder work):** Option A → I build the repo-rooted push-trigger pipeline (CI/CD item 5), harden `ci-deploy.ps1` into a marked break-glass path, then run the item-8 decommission with ALL-AGENTS ack. Option B → I add the PC lane's missing content-monotonicity guard and codify the dual-lane contract.

## A6 — Database connection ceiling (⛔ decision)

db-f1-micro allows ~25 connections; gate windows exhausted it twice (07-05/07-06) before the candidate-cap fix. The cap works, but headroom is thin for real-customer concurrency.
**Options:** ① tier bump (e.g. `db-g1-small` — more RAM, comfortably higher ceiling, ~$25-ish/month more — my recommendation at first customer) · ② raise `max_connections` flag on f1-micro (free, but risky on 0.6 GB RAM) · ③ stay as-is until pilot load data (defensible: the cap has held since the fix).
**Execution when decided (①):** one console edit or `gcloud sql instances patch --tier`; brief restart window; rollback = patch back.

## Blocked on other lanes (not yours yet — listed so nothing looks forgotten)

- **SecurityFilter enforcement flip (M7-15 Phase 2, R8):** blocked on AgentDLP's T2c shadow-corpus rebuild + T2d flip memo. It will arrive here as its own checklist item when DLP declares the corpus clean.
- **R15 audit-fallback log sink:** MR8's one-paster is in the [Risk Register](<PracticeForceOneProductionRiskRegister.md>) (§R15) — 2 minutes, worth running promptly since Cloud Logging only holds 30 days.
- **Vendor activations (M7-29\*/R12):** per the [Vendor Activation Playbook](<PracticeForceOneVendorActivationPlaybook.md>) when contracts land; the R13 blind-index reader switch is a hard checklist item inside those packages.

---

*Steward note: I re-verify the "live state verified" line whenever this page is used; if you execute any item, say so in AGENTS.md (or just run it — I delta-check env on every health ping) and I'll do the follow-through (config sync, table stamps, verification probes).*

## Review Epilog — 2026-07-24

- All A-items remain open as of build 1943: A1 alerting unflipped, A2 backups unflipped (Cloud SQL backups OFF), A3 destructive-ops flag still true, A4 staff MFA enforcement absent, A5 deployment-model decision pending, A6 DB tier still f1-micro.
- DB tier has since been bumped to g1-small with max_connections=100 (founder reversed the 07-16 hold 2026-07-18) — A6 is structurally resolved; the headroom concern is closed. Do not re-raise tier bump.
- The SecurityFilter enforcement flip (M7-15 Phase 2) in the "Blocked on other lanes" section awaits AgentDLP T2c/T2d corpus. No change to that status.
- Pre-execution reminder: live env state was captured at build 1683; re-run `gcloud run services describe claimsprocessing-api --region us-central1` to confirm current values before any paste-and-run.
