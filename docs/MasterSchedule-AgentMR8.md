---
title: "MasterSchedule AgentMR8"
---

# MasterSchedule — AgentMR8 assignments

**15 tasks** (demo-path 5 + parity 10). Mirror of `MasterSchedule.xlsx` (single source of truth, edited directly by all lanes; AgentDLP regenerates these mirrors). Full cross-lane view + dependency chains are in the xlsx.

> Coordinator = AgentMR8. If a parity row is not truly yours, flag AgentDLP. Depends On = must finish first; Blocks = waits on this.

Live build 1718 · updated 2026-07-11

## August-Demo (Phase 1) — 5 tasks

| ID | Area | Task | Depends On | Blocks | Status | Priority/Size | Source | Notes |
|---|---|---|---|---|---|---|---|---|
| X-2 | Platform | Deploy pipeline stability (pool + lock reclaim) | — | — | Done | INFRA | Demo path |  |
| PR-1 | Production | Audit-fallback log sink (R15) | — | — | Done | INFRA | Demo path |  |
| PR-2 | Production | Uptime alerting (R3) | — | — | Done | INFRA | Demo path |  |
| PR-3 | Production | Automated daily backups (R1) | — | PR-4 | In Progress | INFRA | Demo path |  |
| PR-5 | Production | Security/HIPAA/audit hardening (ongoing, stability-first) | — | 10 tasks | In Progress | INFRA | Demo path |  |

## Parity (post-demo) — 10 tasks

| ID | Area | Task | Depends On | Blocks | Status | Priority/Size | Source | Notes |
|---|---|---|---|---|---|---|---|---|
| ECW-SEC-1 | SEC Security | patient-level confidentiality + break-the-glass + delegation | PR-5 | — | Open | — | ECW |  |
| ECW-AU-1 | AU Audit | note-distribution automation (natural PFO autopilot candidate) | PR-5 | — | Open | — | ECW |  |
| ECW-OUT-1 | OUT Interop | recall/outreach registry — top-tier Major Release item (revenue + quality; pairs w/ K-autopilots + letter templates) | PR-5 | — | Open | — | ECW |  |
| ECW-OUT-2 | OUT Interop | pediatric WCV due/past-due surfacing at the point of contact (feeds the recall registry item) | PR-5 | — | Open | — | ECW |  |
| ECW-SEC-2 | SEC Security | confidential-chart flag + audited break-the-glass override (VIP/employee charts) | PR-5 | — | Open | — | ECW |  |
| ECW-SEC-3 | SEC Security | note-section access log incl read-audit (HIPAA access-accounting) + copy/paste provenance view | PR-5 | — | Open | — | ECW |  |
| ECW-SEC-4 | SEC Security | patient-cohort access groups admin | PR-5 | — | Open | — | ECW |  |
| ECW-SEC-5 | SEC Security | domain-partitioned audit console + auto-secured visit rules | PR-5 | — | Open | — | ECW |  |
| ECW-OUT-3 | OUT Interop | portal-message queue + recorded voice outreach | PR-5 | — | Open | — | ECW |  |
| ECW-SEC-6 | SEC Security | workstation lock (HIPAA walk-away) | PR-5 | — | Open | — | ECW |  |
