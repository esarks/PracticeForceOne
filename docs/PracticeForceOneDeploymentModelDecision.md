---
title: "PracticeForceOneDeploymentModelDecision"
---

# Deployment-Model Decision — founder memo (⛔ item 7, CI/CD backlog)

**Last reviewed: 2026-07-24**

**Prepared:** 2026-07-07 by AgentMR7 · **Status: AWAITING FOUNDER DECISION — nothing here is executed.** This is the prep for worklist item 7 in the [CICD MR table](<PracticeForceOneCICDMRTable.md>); item 8 (decommission the legacy queue runner) is gated on it.

> **2026-07-24 context:** AgentCICD RETIRED 2026-07-07 (CI/CD absorbed into AgentMR7). Both lanes remain operational as of build 1943. This decision is still open — fleet currently runs DUAL-LANE pending founder resolution. Agents use `bin\cloud-deploy.ps1` (cloud lane); founder PC lane is `bin\ci-deploy.ps1`. See `CICDSteps.md` for the current dual-lane contract.

## The question

PracticeForceOne currently has **two working ways to deploy**. Do we keep both permanently, or make the cloud pipeline the only path?

## What the two lanes are today

| | **PC lane** (`bin\ci-deploy.ps1`) | **Cloud lane** (`bin\cloud-deploy.ps1`) |
|---|---|---|
| Where it builds | Your PC (OneDrive working tree) | Cloud Build, from an uploaded snapshot |
| Safety gate | Preflight suite BEFORE submit; promotes immediately after deploy | Full 199-scenario characterization gate against a no-traffic candidate; promotes ONLY on green |
| Speed | ~15 min | ~40 min |
| Data-layer freshness | PC-compiled classes (fresh because preflight compiles them) | **Hermetic as of C1.3 (2026-07-07): deletes + recompiles the shipped data layer in-pipeline** |
| Rollback protection | None at promote (immediate) | Content-monotonicity guard + `:blessed` tag (2026-07-07): a gate-green candidate carrying OLDER content than live is REFUSED — the build-1672 incident cannot recur cloud-side |
| Provenance | Full (commit, dirty flag, real content hash) | Full since `daef77313`/C1.3 polish (same hash algorithm as PC now) |
| Depends on | Your PC being on, OneDrive not corrupting the tree mid-build | Nothing local except `git push` + one submit command |

## What just changed (why this decision is ripe)

1. **C1.3 hermetic compile-data landed** — the cloud pipeline no longer trusts any bytecode from a PC; the one remaining "PC classes are fresher" argument is gone once the planted-stale negative test is green ×2.
2. **The 1672 content-rollback** (older cloud candidate promoted over your 403 fix) is now structurally blocked in the cloud lane. The PC lane still promotes immediately with no equivalent guard — **the same race in the other direction remains open as long as both lanes run**.
3. Both lanes already share the build counter, deploy lock, and env-var set — but every yaml/env change must be made twice, and we have shipped real incidents from them drifting (CORS env-wipe 06-30, memory/scale drift 07-04, traffic-promotion defect 07-06).

## Option A — cloud-only (recommended)

All deploys go through `bin\cloud-deploy.ps1` (or, once item 5 lands, a push to master triggers the pipeline automatically). `ci-deploy.ps1` stays in the repo as a **documented break-glass path** (used only if Cloud Build itself is down), clearly marked so it isn't the habit.

- **You gain:** one config to maintain, every deploy gated + monotonic + `:blessed`, no dependency on the PC/OneDrive for releases, the SEV1-1651 stale-class category retired.
- **You give up:** the ~15-min quick push (cloud is ~40 min end-to-end). For a "founder wants it live NOW" moment that difference is real.
- **Prereqs before flipping:** C1.3 negative test green ×2 (in progress today), a few consecutive clean cloud cycles, and ideally item 5 (push trigger) so deploys don't even need a PC terminal.

## Option B — permanent dual-lane

Keep both. To be honest about the cost: the PC lane then needs its own monotonicity guard at promote, and every pipeline change stays a two-file edit forever. It preserves the fast path and your existing muscle memory.

## Recommendation

**Option A**, flipped only after the prereqs above are green — with `ci-deploy.ps1` kept as break-glass. The dual-lane races and config drift have caused more real incidents (1672, env wipes, 0%-traffic promote) than the cloud lane's slowness ever has. Item 8 (decommission the legacy queue runner) executes only after you say so.

**To decide:** reply in AGENTS.md or the CICD table with "Option A", "Option B", or questions. Nothing changes until then.

---

## Review Epilog — 2026-07-24

- Decision remains OPEN. Both lanes operational on build 1943.
- Updated header with current context: AgentCICD retired 2026-07-07; CI/CD ownership transferred to AgentMR7; dual-lane continues per `CICDSteps.md`.
- The Option A recommendation and the technical analysis (monotonicity guard, provenance, drift incidents) remain accurate and unchanged.
- Pre-requisites for Option A (C1.3 negative test green ×2, consecutive clean cloud cycles) were satisfied at the time of AgentCICD retirement — the only remaining gate is the founder's explicit decision.
