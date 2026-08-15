---
title: "PracticeForceOneMR10Table"
---

# PracticeForceOne MR10 Table — Architecture Upgrade Program

**Last reviewed: 2026-07-24**

**Opened:** 2026-07-11 · **Status:** ⏸ **PARKED — founder decision 2026-07-11: MR10 does not activate until after the August demonstration lands.** No work from this lane (paper included) until the founder reopens it; FD-1/FD-2 decisions also wait. The table stands as the ready-to-go program of record. · **Owner:** **AgentMR10** · **Source:** founder-submitted architecture review (2026-07-11), itself built on the [CF Architecture Assessment](<PracticeForceOneCFArchitectureAssessment.md>) (overall B+, governance C). This table is the review reconciled against the live program — several of its recommendations are already designed, tracked, or shipped in other lanes; MR10 owns what is genuinely new and coordinates the rest.

**🏥 SEQUENCING LAW (founder directive 2026-07-10 + the review's own "Before August" section — they agree):** **NO structural refactoring before the August demonstration.** Pre-demo, MR10 ships paper only: design reconciliation, schema drafts, policy pages, and founder decision memos. Every code item below is post-demo. Demo-path defects, deploy reliability, and rehearsal work stay in the MR8/MR9/CF/DLP lanes — MR10 does not touch the demo spine.

**📋 ASSESSMENT VERDICT (AgentMR10, 2026-07-11):** the review is sound — no-rewrite, controlled sequence, August freeze all match the founder's standing directives. Adopt it **with amendments**: (a) item 1 is ~90% already designed as [CF-GOV](<PracticeForceOneCFGovernanceDesign.md>) — fund the three deltas, don't re-design; (b) item 3 (service layer) collides with the standing architecture rule against root `services/` layers born of the JAC revert — adopt the *intent* inside the JAC pattern, and only after an explicit founder rule amendment (FD-1); (c) item 6 is already the plan of record (M9-10/11/15); (d) item 9 is half-shipped (monotonic promote + cache-busting live). Full item-by-item verdicts in §0.

---

## §0 — Review reconciliation (all 10 items × what already exists × what MR10 adds)

| Review item | Verdict | Already exists | New under MR10 |
|---|---|---|---|
| 1. CF governance as a platform | ✅ AGREE — mostly designed | [CF-GOV](<PracticeForceOneCFGovernanceDesign.md>) G-1…G-7 (audit, versions, rollback, lifecycle, dry-run, drift, catalog, contract versioning; phased G1–G3 post-demo; founder decisions D-1…D-4) · structural PUT validation + URL hygiene live 1714 · single-active-default in route logic · git-versioned seeds | §1: formal JSON Schema artifact · DB-level active-default constraint · approver step for clinical forms |
| 2. Modularize `cf-runtime.js` | ✅ AGREE — post-demo, shim-first | legacy-alias migration hygiene already practiced (`window.EncounterCF = CFForm`) | §2: behavior-frozen split behind a loader shim, gated by DLPCF + CF gate scenarios |
| 3. Application-service layer | ⚠️ AGREE IN SPIRIT — ⛔ **FD-1 required first** | M7-12 caller-owned-conn transaction template · money-integrity guard (checkout) · honesty-rule reply checks | §3: **in-JAC-pattern** `util/<Domain>Service.script` extraction, checkout/payments pilot first |
| 4. Registered capabilities over URLs | ✅ AGREE — the right end-state | CF URL hygiene ratchet (live 1714, `/api/` relative-only) · CF-GOV G-7 contract evolution | §4: `operation:` key + capability registry, ratcheted adoption, v2 headline |
| 5. Standardize API contracts | ✅ AGREE — as touch-policy, not churn | assessment criterion 7 already prescribes "normalize per entity as routes get touched"; contract has `pageSize` | §5: published contract doc + error/list shapes + fallback-retirement-with-proof discipline |
| 6. Tenant & authz enforcement | ✅ AGREE — **already tracked, don't duplicate** | RBAC code-default-ON (live 1693, env-wipe-safe) · MFA live · SecurityFilter structural coverage (1682) → flip = **M9-10** · body validation = **M9-11** · TenantedQuery-by-construction = **M9-15** · config cross-org exposure = CF-GOV G-2 | §6: cross-tenant gate scenarios as a standing suite; MR10 tracks, MR9/DLP/MR8 own |
| 7. Session & browser security | ✅ AGREE — post-demo, pre-multi-clinic (review says the same) | MFA live · security headers on all modules (M9-14) | §7: **M9-19 fetch wrapper is the enabling move** → then one-transport cookie swap · CSP staged |
| 8. Testing pyramid under DLP | ✅ AGREE — with a JAC-reality amendment | 213-scenario deploy gate (contract/component layer in fact) · B7 test-strategy ratchet (bans static fingerprints) · DLPCF journeys as top gate | §8: JS unit harness for the post-split cf modules · pyramid implemented by extending the existing harness, not a new framework |
| 9. Compatibility policy | ✅ AGREE — **half shipped** | content-monotonic `:blessed` promote (older deploy cannot overwrite newer) · `bust-cache.ps1` + cache tokens · stale-script incident documented | §9: written policy page + shipped-asset compat ratchet + content hashes where practical |
| 10. Onboarding handbook | ✅ AGREE — genuinely missing | docs are agent-oriented; CF authoring learnability A−, but no human-engineer system handbook | §10: the handbook + the "second maintainer completes a change unaided" acceptance test |

**Top-three funding call (review asked):** endorse **#1** (as CF-GOV + §1 deltas — already largely funded) and **#2**. On **#3**: right intent, but it is the highest-risk of the three and constitutionally blocked until FD-1 — sequence **#5-as-policy** (contracts standardize as routes get touched) ahead of a broad service-extraction program, with the checkout/payments pilot as the proving ground.

---

## §FD — Founder decisions (MR10's own ⛔ queue; CF-GOV D-1…D-4 live in that design, not repeated here)

| # | Decision | Context | MR10 recommendation |
|---|---|---|---|
| **FD-1** | **Amend the architecture rules to sanction an in-pattern service tier?** Standing rule (CLAUDE.md, born of the completed JAC revert): *"Do not create or restore root `api/`, `services/`, `repositories/`, `entities/`, or `gateway` layers."* The review's item 3 proposes exactly such layers. | The revert history is why the rule exists; the failure mode (a parallel layered architecture drifting from the JAC monolith) is real and was lived once. The *intent* — business rules out of 150+ route modules — is achievable inside the pattern: `util/<Domain>Service.script` classes called by thin routes, using generated CRUD + the M7-12 transaction template. | **Amend narrowly:** sanction `util/*Service.script` (same placement as the existing util route modules), keep the ban on root layers/gateways/repositories verbatim. No extraction starts before the amendment is written into CLAUDE.md. |
| **FD-2** | **Adopt capability-registry (`operation:`) as the pfo-cf-v1→v2 direction?** | Registered operations replace raw method+URL in definitions; the server maps operation → method/endpoint/permission/roles/validation. Tighter than URL hygiene; pairs with CF-GOV G-7. | **Yes, additive-first:** `operation:` lands as an optional v1 key, new definitions ratcheted to it, the 13 live screens migrate during the v2 window. |

---

## §1 — CF governance deltas (fold into [CF-GOV](<PracticeForceOneCFGovernanceDesign.md>), owner MR8+CF; MR10 = reconciliation steward)

| ID | Item | State |
|---|---|---|
| **M10-1** | **Formal JSON Schema for `pfo-cf-v1`** — publish the contract as a schema artifact (repo + wiki), wired into: PUT validation (server), the config editor (author-time), and contract tests (§8). Today validation is route code only; a schema enables tooling and makes G-7's "reject unknown contracts" checkable. | ☐ post-demo (draft on paper allowed now) |
| **M10-2** | **DB-level one-active-default constraint** — partial unique index on the config table (`formType` WHERE active-default). Route logic already enforces it (CF-12 proved set-default atomic at API level); the index makes violation impossible by construction, incl. via any future write path. | ☐ post-demo G1-sized (one DDL + one gate scenario) |
| **M10-3** | **Approver tracking for clinical-domain forms** — extend CF-GOV G-4's draft→validated→active with an explicit second-human approver step where `domain: clinical` (pairs with CF-GOV D-4 staged rollout). Author already lands via G-1 audit. | ☐ post-demo G2, after D-4 settles |

## §2 — cf-runtime modularization (owner AgentCF; MR10 = design + compat gatekeeper)

| ID | Item | State |
|---|---|---|
| **M10-10** | **Module split design** — target shape per the review (`state / config-client / contract-validator / template-resolver / list-renderer / form-renderer / collection-renderer / action-executor / lookup-service / config-editor`); map current cf-runtime.js functions to modules ON PAPER first; AgentCF signs off (their lane). | ☐ paper allowed pre-demo, no code |
| **M10-11** | **Behavior-frozen split behind a loader shim** — `cf-runtime.js` stays as the entry file (cached HTML keeps working — §9 policy), internally loading content-hashed modules. Zero behavior change; gated by the full CF gate suite + a DLPCF journey re-run before AND after. | ☐ post-demo, first 30 days (review sequence) |
| **M10-12** | **Unit tests on the extracted modules** — the split is what makes §8's bottom layer real: contract-validator, template-resolver, and visibility rules become pure-JS unit-testable. Ships WITH M10-11, not after. | ☐ rides M10-11 |

## §3 — Business logic out of routes (⛔ blocked by FD-1; owner MR10 with domain lanes)

| ID | Item | State |
|---|---|---|
| **M10-20** | **FD-1 memo + CLAUDE.md amendment** — the plain-English decision memo (founder working style) + the exact rule wording change. Nothing in §3 moves before this. | ☐ memo can go now; decision post-demo is fine |
| **M10-21** | **Pilot: Checkout/PatientPayment service extraction** — `util/CheckoutService.script` + `util/PatientPaymentService.script`; routes become thin adapters; M7-12 caller-owned-conn for atomicity; money-integrity guard moves inside the service. Highest financial consequence = right pilot (review agrees). | ☐ post-demo, first 30 days, after FD-1 |
| **M10-22** | **Rollout to the review's remaining six workflows** — insurance promotion · encounter signing · claim submission · denial resolution · eligibility processing · form-config lifecycle. One at a time, each behind gate scenarios, pilot lessons applied. | ☐ 60–90 days |

## §4 — Capability registry (⛔ blocked by FD-2; owner CF+MR8, MR10 = registry design)

| ID | Item | State |
|---|---|---|
| **M10-30** | **Registry design** — operation id → {method, endpoint, payload schema, required permission, allowed roles, validation}; storage + admin surface; how the runtime resolves it. | ☐ paper allowed pre-demo |
| **M10-31** | **Additive `operation:` key in v1** — runtime resolves operations via the registry; raw `url:` still honored (grandfathered behind the existing URL-hygiene ratchet). New-definition ratchet: new configs must use operations. | ☐ post-demo, 60–90 days |
| **M10-32** | **Migrate the 13 live screens + retire raw URLs** — the pfo-cf-v2 window (CF-GOV G-7 mechanics: migration report of which stored configs need updating). | ☐ after M10-31 proves out |

## §5 — API contract standardization (owner = every lane, as touch-policy; MR10 = the contract doc + ratchet)

| ID | Item | State |
|---|---|---|
| **M10-40** | **Publish the API contract** — casing, list shape (`{items, page, pageSize, total}`), detail shape, canonical error (`{error: {code, message, fields}}`), IDs, date/time, null handling, validation-error format. One wiki page + repo doc. | ☐ paper allowed pre-demo |
| **M10-41** | **Touch-policy in force** — new endpoints conform; touched endpoints conform on the way through (the assessment's criterion-7 prescription made lane law). NO churn of shipped shapes for its own sake; nothing pre-demo. | ☐ policy post-demo day 1 |
| **M10-42** | **Runtime fallback retirement, one at a time, with proof** — a cf-runtime compensator (snake_case fallback etc.) is removed only with a CF-GOV G-5-style report proving no stored definition depends on it. | ☐ 60–90 days, trailing M10-41 adoption |
| **M10-43** | **Server-side list paging for CF `list` bindings** — contract already carries `pageSize`; extend list bindings with server query params (assessment criterion 10's contained change; fixes the client-side-filter scale ceiling). | ☐ post-demo |

## §6 — Tenant & authorization enforcement (tracking only — owned in MR9/DLP/MR8 lanes; MR10 adds one item)

| ID | Item | State |
|---|---|---|
| — | SecurityFilter enforcement flip (fail-open → enforce) | = **M9-10** (AgentDLP T2c/T2d → ⛔ flip approval) — the review's "fail-open must not be final posture" is exactly this |
| — | Per-route body validation | = **M9-11** |
| — | Org-scoped-by-construction queries (`TenantedQuery`/linter) | = **M9-15** (the review's "scoped by construction" ask, verbatim) |
| — | Config cross-org write exposure | = CF-GOV **G-2** (⛔ D-1) |
| **M10-50** | **Standing cross-tenant test suite** — automated two-org gate scenarios asserting isolation on every §3-extracted service + every CF operation as it registers (M10-31). The review's "cross-tenant tests run automatically" as a permanent gate fixture, not a one-off audit. | ☐ post-demo, grows with §3/§4 |

## §7 — Session & browser security (owner MR8 post-demo; review itself sequences this pre-multi-clinic, not pre-demo)

| ID | Item | State |
|---|---|---|
| **M10-55** | **Prereq = M9-19 shared `api()` fetch wrapper** (552 fetch sites / 193 token reads across 40 pages). Building the wrapper FIRST turns the token-transport swap into one change instead of 40-page surgery. | ☐ post-demo (was deliberately deferred pre-launch) |
| **M10-56** | **localStorage bearer → HttpOnly cookie + SameSite + CSRF + refresh rotation** — one transport change behind M10-55; shadow/dual-accept window; portal + staff sessions both. | ☐ 60–90 days |
| **M10-57** | **CSP + no-inline-handlers sweep** — staged: report-only CSP first; CF-rendered surfaces are runtime-controlled DOM (easy); legacy pages sweep per-page. "No dynamic executable content from configuration" is already law (URL-hygiene bans scripts). | ☐ 60–90 days, trailing |

## §8 — Testing pyramid (owner MR10 harness design; lanes fill their layers)

| ID | Item | State |
|---|---|---|
| **M10-60** | **JS unit harness** for cf modules (post-M10-11) + pure server-side helpers. The JAC toolchain makes classic in-process JUnit awkward — the bottom layer is mostly the JS side plus JAC-side pure functions; that's the honest version of the review's "many unit tests." | ☐ rides M10-11/12 |
| **M10-61** | **Contract tests per CF-used API** — generated FROM the M10-40 contract doc + M10-1 schema; implemented as gate-harness scenarios (the 213-scenario `uat-characterize` suite IS the contract/component layer — extend it, don't stand up a parallel framework; B7 ratchet already bans fingerprint tests). | ☐ post-demo |
| **M10-62** | **Component scenarios** for list rendering, row selection, carried search, visibility rules, collections, actions, validation — headless-DOM checks in the existing UI-smoke lane. | ☐ post-demo |
| — | Integration layer (signing, checkout posting, insurance promotion, claim creation, tenant boundaries) | already = the DLP-A00→G04 chained gate (41 scenarios) + M10-50 |
| — | Journey layer | stays DLPCF (AgentDLP), the final operational gate — unchanged per the review |

## §9 — Compatibility policy (owner MR7 release-steward surfaces + MR10 policy text)

| ID | Item | State |
|---|---|---|
| — | Monotonic releases (older deploy cannot overwrite newer) | ✅ **SHIPPED** — content-monotonic `:blessed` promote in `cloud-deploy.ps1` |
| — | Cache-busting tooling | ✅ exists (`bust-cache.ps1`, cache tokens); stale-script incident class documented |
| **M10-70** | **Written compatibility policy page** — never remove a shipped public asset without a shim · version static assets · content hashes where practical · redirect/loader shims for renamed pages · defined compatibility windows · test old cached HTML against the new runtime (the M10-11 shim is the first application). | ☐ paper allowed pre-demo |
| **M10-71** | **Shipped-asset compat ratchet** — CI check (same pattern as write-reply/where-clause ratchets): a public asset present in the previous build must exist (or have a shim) in the next. | ☐ post-demo, small |

## §10 — Developer onboarding handbook (owner MR10)

| ID | Item | State |
|---|---|---|
| **M10-80** | **The architectural handbook** — system context · request lifecycle · auth/tenant lifecycle · generated-CRUD model · route conventions · service conventions (post-FD-1) · CF contract · config promotion (CF-GOV) · testing workflow · deploy workflow · common failure modes (the six fleet incident classes) · one end-to-end tutorial. Much exists scattered (DocumentationIndex, CICDSteps, conversion pattern, runbooks) — this curates for a human engineer, not an agent. | ☐ post-demo, 60–90 days |
| **M10-81** | **The acceptance test** — a new engineer completes a meaningful change without direct help. The review's bar is right: the architecture isn't sustainable until a second human maintainer works safely in it. | ☐ after M10-80 |

---

## Sequence (review's timeline, reconciled)

| Window | MR10 scope |
|---|---|
| **Pre-August** | **Paper only:** this table · FD-1/FD-2 memos · M10-1 schema draft · M10-10 split design · M10-30 registry design · M10-40 contract doc · M10-70 policy page. Zero code, zero deploys from this lane. Demo work stays in MR8/MR9/CF/DLP. |
| **First 30 days post-demo** | CF-GOV G1 (MR8) + M10-2 constraint · M10-11/12 runtime split · M10-40/41 contracts in force · M10-21 checkout/payment pilot (post-FD-1) · M10-71 asset ratchet |
| **60–90 days** | M10-22 service rollout · M10-31/32 capability registry · M9-15 tenancy-by-construction + M10-50 suite · M10-61/62 test layers · M10-55/56/57 session security · M10-80/81 handbook |

---

*Cross-refs: [CFGovernanceDesign](<PracticeForceOneCFGovernanceDesign.md>) · [CFArchitectureAssessment](<PracticeForceOneCFArchitectureAssessment.md>) · [MR9Table](<PracticeForceOneMR9Table.md>) (M9-10/11/15/17/19 referenced above) · [CFTable](<PracticeForceOneCFTable.md>) · [ProductionRiskRegister](<PracticeForceOneProductionRiskRegister.md>) · MasterSchedule.xlsx (rows to be added read-modify-write per the 07-11 protocol).*

## Review Epilog — 2026-07-24

- MR10 status confirmed: PARKED per founder directive 2026-07-11. No code, no deploys from this lane until after the August demo.
- FD-1 (service-tier rule amendment to sanction `util/*Service.script`) and FD-2 (capability registry `operation:` key adoption) remain open decisions with the founder.
- Paper deliverables (FD-1 memo, M10-1 JSON schema draft, M10-10 split design, M10-30 registry design, M10-40 contract doc, M10-70 policy page) may proceed during the August freeze per the sequencing table above.
- All §3 service-extraction work hard-blocked until FD-1 is written into CLAUDE.md. No action taken on any code item this cycle.
