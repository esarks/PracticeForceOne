---
title: "MasterSchedule Founder"
---

# MasterSchedule — Founder assignments

**6 tasks** (demo-path 6 + parity 0). Mirror of `MasterSchedule.xlsx` (single source of truth, edited directly by all lanes; AgentDLP regenerates these mirrors). Full cross-lane view + dependency chains are in the xlsx.

> Coordinator = Founder. If a parity row is not truly yours, flag AgentDLP. Depends On = must finish first; Blocks = waits on this.

Live build 1718 · updated 2026-07-11

## August-Demo (Phase 1) — 6 tasks

| ID | Area | Task | Depends On | Blocks | Status | Priority/Size | Source | Notes |
|---|---|---|---|---|---|---|---|---|
| X-1 | Blocker | gcloud auth login (dev machine) - unblocks EVERY lane's cloud deploy | — | S-4 | Done | P0 | Demo path |  |
| AS-2 | 2 Appt Search | Founder pick: THE Appointment Search surface | AS-1 | — | Open | P2 | Demo path |  |
| PR-4 | Production | PITR flip + restore drill | PR-3 | — | Blocked | INFRA | Demo path |  |
| FDR-2 | Founder | T5 duplicate-active-insurance guard decision | — | — | Open | P2 | Demo path |  |
| FDR-3 | Founder | Appointment Search surface pick (=AS-2) | — | — | Open | P2 | Demo path |  |
| FDR-4 | Founder | Feature-flag flips (drug-interaction, AI autopilot...) | — | — | Open | P2 | Demo path |  |
