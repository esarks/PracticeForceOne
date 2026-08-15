---
title: "PracticeForceOneSupportProceduresKit"
---

# Support Procedures Kit — PracticeForceOne (Minimal Viable Support, v1)

**Date:** 2026-07-07 · **Last reviewed: 2026-07-24** · **Author:** AgentMR8 · **Purpose:** retire risk **R14** — the machinery a paying customer expects on day one. Everything here is ready to adopt; the only founder inputs are the two ☐ decisions at the top. · **Companions:** [Go-Live Checklist](<PracticeForceOneFirstCustomerGoLiveChecklist.md>) · [Risk Register](<PracticeForceOneProductionRiskRegister.md>) · `OPERATIONS.md` (repo)

## Founder decisions (the only blanks)

- ☐ **Support inbox address** — suggest `support@practiceforceone.com` (Workspace group → founder + future hires; NOT the personal Gmail already flagged in R7).
- ☐ **Stated support hours** for contract v1 — suggest "business hours ET, SEV1 monitored via alerting" (honest until R3 alerting + a second operator exist).

## Severity ladder & response targets (contract-safe starter language)

| Sev | Definition | Response target | Resolution posture |
|---|---|---|---|
| **SEV1** | Production down, data loss, PHI exposure suspected, cannot treat/bill patients | 1 hour (business hrs); best-effort off-hours until R3 alerting is live | all-hands until restored; incident report within 2 business days |
| **SEV2** | Major function degraded (claims won't submit, ERA not posting, portal down) with workaround absent | 4 business hours | fix or workaround same/next business day |
| **SEV3** | Function degraded with workaround, non-blocking bug | 1 business day | scheduled into the active lane |
| **SEV4** | Question, how-to, cosmetic, feature request | 2 business days | answered or logged to backlog |

**SLA v1 (put in the first contract, honestly):** target 99.5% monthly availability measured at `/api/health`, excluding announced maintenance windows (suggest: Sun 06:00–08:00 ET, used rarely). No financial credits in v1 — commit to the incident-report discipline instead. *(Do not promise 99.9% — single-region, no HA replica yet.)*

## Triage runbook (first 10 minutes of any report)

1. **Confirm scope:** `GET /api/health` — status, `dbResponseMs`, `provenance.buildNumber` (identifies exactly what's serving).
2. **One user or everyone?** One user → RBAC/role/practice-scope first (`rbac-admin`, user's practice assignment); everyone → platform.
3. **Platform path:** Cloud Run logs (filter the request path; `[AUDIT-FALLBACK]` lines = DB connectivity window), Cloud SQL status, recent deploys (`BUILD-STATUS.md` + provenance vs git).
4. **Match against the known incident classes** (fleet-documented): packaging `NoClassDefFound` · NOT-NULL create failures · env-wipe (login answers 200-empty/500 instead of 401) · empty-id `22P02` · pool idle-in-transaction · content-rollback (provenance commit not descendant of previous).
5. **Rollback decision:** if a deploy correlates → re-promote the previous `:blessed` revision (traffic pin, no rebuild — minutes). Data issues → **stop, assess against backups BEFORE any write** (see R1 status!).
6. **Communicate** using the templates below at: acknowledgment → hourly during SEV1 → resolution.

## Communication templates

**Acknowledgment (send within the response target):**
> We've received your report of [X] and are investigating now. Current impact: [known scope]. Next update by [time]. — PracticeForceOne Support

**Resolution:**
> The issue affecting [X] was resolved at [time]. Cause: [one plain-English sentence]. Effect on your data: [none / specifics]. Prevention: [one sentence]. Full incident report: [attached/link, SEV1–2 only].

## Escalation & on-call reality (v1, honest)

- Founder is the human escalation point (R4 stands until the second-operator drill).
- Agents perform diagnosis/repair during working sessions; the R3 uptime alert (once flipped) is what pages a human off-hours.
- PHI-exposure suspicion = SEV1 **plus** the HIPAA clock: preserve logs, do not delete anything, assess breach-notification duty before customer communication beyond acknowledgment.

## What this kit deliberately defers

Ticketing system (inbox + a shared label is enough below ~5 customers) · public status page (email suffices at 1–2 customers) · financial SLA credits · 24/7 coverage. Revisit each at customer #3 or the first enterprise deal, whichever comes first.

## Review Epilog — 2026-07-24

- Document accurate as written. The two founder-decision blanks (support inbox address, stated support hours) remain open and are the only blockers to activating this kit.
- R3 alerting (uptime check) is still unflipped — the off-hours SEV1 monitoring promise requires A1 from the Founder Action Checklists to be executed first.
- Triage runbook references `BUILD-STATUS.md` and `/api/health` provenance — both verified accurate at live build 1943.
- Fleet incident classes referenced in step 4 are current (6 classes: packaging NoClassDefFound, NOT-NULL create failures, env-wipe, empty-id 22P02, pool idle-in-txn, content-rollback).
