---
title: "PracticeForceOneCFGovernanceDesign"
---

# PracticeForceOne — Configuration Governance Design (CF-GOV, v1 draft)

**Last reviewed: 2026-07-24**

**Author:** AgentMR8 (production readiness) · **Date:** 2026-07-11 · **Charter:** founder strategic direction 2026-07-11 — *"The Configurable Forms platform is now central to PracticeForce One. It must be governed with the same rigor as source code. Begin designing governance that will support hundreds of configurable forms."*
**Status:** DESIGN — no implementation before the August demonstration (stability-first). Schedule row: PR-7. Live build as of review: **1943** (gate 251/251 GREEN; CF catalog 540+ definitions, pfo-cf-v1 contract live).
**Grounding:** the [CF Architecture Assessment](<PracticeForceOneCFArchitectureAssessment.md>) (full code review, 2026-07-11 — criterion 8 "Configuration governance: C" is the debt this design retires) and the shipped runtime/route as they exist on live 1714+.

---

## 1. The governing idea

A configurable form **is** the screen a receptionist checks someone in on and a provider documents care on. When a definition changes, the clinic's working environment changes — instantly, for everyone. Source code earns that power only after review, tests, gates, and attribution; configuration currently gets it after one admin PUT. Governance closes that gap **without giving up the zero-deploy speed that makes CF the product**:

> **Every active configuration is, at all times: attributable (who made it), explicable (what changed and why), reversible (one step back to the prior version), validated (structurally and against its live bindings), scoped (who it applies to is deliberate), and covered (a behavioral scenario proves its bindings).**

Code gets this from git + the deploy gate. Configuration gets it from the mechanisms below.

## 2. What exists today (don't rebuild)

| Already shipped | Where |
|---|---|
| Structural validation on PUT (pages→sections→fields, types, lookups, action shapes) | `FormConfigurationsRoutes` |
| URL hygiene on PUT (`/api/` bindings only; no scripts/external hrefs) | shipped 1714 (`4fef4d58d`) |
| Draft → active lifecycle, single active default per formType, protected delete (409 on active) | routes + runtime |
| Admin-only writes; staff read; formType-scoped GET | routes |
| Git-versioned seed files for every default definition | `ui/form-configs/*.json` |
| Behavioral binding-contract scenarios in the deploy gate (**CF-1…CF-14, August demo path PASSES**) | `bin/uat-characterize.ps1` |
| Data-access inheritance (RBAC/tenancy/ratchets ride the existing routes — CF adds no data surface) | by construction |
| **540+ CF definitions live** (pfo-cf-v1 contract, nav metadata stamped on all demo-path forms) | `engine_configs` store |

The gaps (assessment criterion 8): **no audit trail, no version history/rollback, no tenancy scoping of configs, no drift detection between seed files and DB, no binding dry-run, no ownership metadata, no coverage enforcement at scale.**

## 3. The seven governance mechanisms

### G-1 · Audit + immutable version history (the foundation — build first)
Every config write (PUT upsert, set-default, delete) produces: **(a)** an `AUDIT_LOG` row — actor, formType, config id, action, timestamp, and a compact field-level diff summary; **(b)** an immutable snapshot of the *prior* JSON in a new `dynamic_forms_configuration_versions` table (config_id, version_seq, configuration_json, superseded_at, superseded_by_user). Rollback = re-activate any snapshot (which itself audits + snapshots). Retention: version rows are tiny (2–20 KB) — keep forever; HIPAA-adjacent change accounting comes free.
*Why first:* every other mechanism assumes changes are attributable and reversible; it is also the cheapest (one table + one write-path hook + one gate scenario).

### G-2 · Tenancy & scope model *(⛔ founder decision required — Decision D-1 below)*
Three-tier resolution, resolved server-side at GET: **practice override → org override → global default (PFO-shipped)**. The `practice_id` column already exists unused (CR-1); add `org_id`; a config row carries its tier. Editing rules: org admins touch only their org tier; the global tier is PFO-internal (founder/fleet). This single implementation is shared with the CR lane's identical finding — build once. Cross-org config writes (today's exposure: any org admin can alter every org's forms) end here.

### G-3 · Live-binding validation ("does this form actually work?")
Two layers: **(a) dry-run on save** — after structural checks, the server probes each read binding (GET, the admin's token, 3s timeout) and returns warnings for non-2xx/shape mismatches (warn, don't block — an API may be mid-deploy); **(b) a `validate` admin action** on any stored config, same probe, surfaced in the Configure view. This turns the assessment's "wrong binding = silently blank page" failure mode into an explicit pre-publish signal. The gate's CF-x scenarios remain the enforcement backstop.

### G-4 · Publish workflow (draft → validated → active, with staged rollout)
Formalize the lifecycle: a config may become **active** only from **validated** (G-3 clean or warnings explicitly acknowledged). Optional staged rollout once G-2 lands: activate for one pilot practice tier before promoting to org/global — the config analogue of the no-traffic canary. Emergency path preserved: rollback (G-1) is always one step, no workflow.

### G-5 · Drift detection (seeds ↔ store)
The DB is canonical at runtime; git seed files are the bootstrap + reference templates. A read-only **drift report** (script + admin endpoint) diffs every `*-default.json` seed against its stored default: intentional live customization shows up as *known drift* (annotatable), unintentional divergence (the OneDrive/restage incident class) shows up loudly. Run in the deploy gate as INFO, in the weekly ops sweep as a report.

### G-6 · Catalog + ownership metadata (the "hundreds of forms" mechanism)
Definition metadata additions (backward-compatible optional keys): `owner` (lane/steward), `domain` (front-office/clinical/RCM/portal), `status` notes, `coverageScenario` (the CF-x gate id that proves it). An auto-generated **Form Catalog** page (from the store, not by hand) lists every formType: tiers in effect, versions, owner, last change (G-1), validation state (G-3), gate coverage. At 20 forms this is convenience; at 200 it is the difference between a platform and a junk drawer. A **coverage ratchet** (same pattern as the write-reply/where-clause ratchets) fails CI when an active formType has no gate scenario.

### G-7 · Contract evolution discipline
The runtime starts enforcing `contract: pfo-cf-v1` (reject unknown contracts loudly instead of best-effort rendering). Contract changes get the JAC-generator treatment: additive within v1; breaking changes = `pfo-cf-v2` with an explicit runtime migration window and a G-5-style report of which stored configs need migration. One `if` today buys the entire future migration story.

## 3b. MR10 folds (accepted 2026-07-11 — the Architecture Upgrade Program's item-1 deltas, single design maintained here)

| MR10 delta | Folded into | Disposition |
|---|---|---|
| Formal **JSON Schema** for pfo-cf-v1 | **G-7** | ACCEPTED — the contract gets a machine-checkable schema artifact (validation backstop + docs + future editor tooling). The server's hand-rolled validation remains authoritative; the schema must never be the only gate. |
| **DB-level one-active-default constraint** (partial unique index on `form_type WHERE status='active'`) | **G-4** | ACCEPTED — turns the single-active invariant from route logic into structure; closes the race window two concurrent set-defaults could exploit. Small migration, G2 phase. |
| **Clinical approver step** (second person approves clinical-domain forms before activation) | **G-4 / D-4** | ACCEPTED AS AN OPTION — folded into decision D-4, which becomes: for clinical-domain forms, founder picks staged rollout, approver step, or both. Machinery (pending-approval state) only builds if picked. |

## 4. Founder decisions requested (not before August; listed now so they can settle)

| # | Decision | Options | MR8 recommendation |
|---|---|---|---|
| D-1 | Config tenancy model (G-2) | ① stay global · ② org-scoped + global defaults · ③ per-practice + org + global | **③** — matches the practice→org→global shape of every other PFO surface; ② is an acceptable first step |
| D-2 | Who may edit the GLOBAL tier | founder-only · any PFO admin role | founder-only until a steward role exists |
| D-3 | Version retention | forever (recommended — rows are KB-scale) · N versions | forever |
| D-4 | Clinical-domain form activation safety (G-4, expanded by the MR10 fold) | ① staged rollout · ② approver step · ③ both · ④ neither | **③ both** for `clinical`; neither mandatory elsewhere |

## 5. Phasing (implementation strictly post-demo)

| Phase | When | Contents | Effort |
|---|---|---|---|
| **G0** | pre-August (done/allowed — zero risk) | URL hygiene ✅ (live 1714) · this design · founder decisions D-1…D-4 can settle on paper | — |
| **G1** | first post-demo sprint | **G-1 audit+versions** · G-7 contract check · G-3a dry-run-on-save | Small |
| **G2** | next | **G-2 tenancy** (per D-1; shared with CR lane) · G-4 lifecycle · G-3b validate action | Medium |
| **G3** | as scale demands | G-5 drift report · G-6 catalog + coverage ratchet · staged rollout | Medium |

Each phase ships behind the normal deploy gate with its own behavioral scenarios (extending the CF-1/CF-2 store probes), changes nothing about how the 13+ live screens render, and is individually reversible. No phase requires touching `cf-runtime.js` rendering paths except G-7's one contract check.

## 6. What this buys, in clinic terms

The receptionist's check-in screen cannot be silently rewritten by an admin of a different organization (G-2); when a form changes overnight, the practice manager can see who changed it and put it back in one step (G-1); a broken binding is caught at publish, not when a nurse hits a blank page mid-rooming (G-3/G-4); and when there are three hundred forms, every one of them has an owner, a history, and a test that proves it works (G-6). That is configuration governed with the rigor of source code — while keeping the zero-deploy speed that lets the platform improve between two patient visits.

---
*Cross-refs: [CFArchitectureAssessment](<PracticeForceOneCFArchitectureAssessment.md>) (the graded findings this retires) · [CFTable](<PracticeForceOneCFTable.md>) (CF lane master doc — G-mechanisms touching `FormConfigurationsRoutes`/runtime will be coordinated there before build) · [ProductionRiskRegister](<PracticeForceOneProductionRiskRegister.md>) · MasterSchedule row PR-7. CR-lane tenancy finding (CR-1) is resolved by G-2 — single shared implementation.*

---

## Review Epilog — 2026-07-24

- Design status confirmed: still PRE-IMPLEMENTATION (no governance phases have been built; August stability-first rule holds).
- CF catalog has grown to 540+ definitions on build 1943 (gate 251/251 GREEN), making the G-6 catalog/coverage-ratchet mechanism more urgent at scale — no change to phasing decision, but the scale justification is now stronger.
- Updated "What exists today" table to reflect current CF-14 August demo path gate pass and 540+ live definitions.
- Founder decisions D-1 through D-4 remain open; no decisions have been recorded. Per-practice definitions (long-term all-definitions-per-practice) directly maps to D-1 option ③ — flagged for alignment when D-1 is settled.
