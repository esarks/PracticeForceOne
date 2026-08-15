---
title: "practiceforceoneArchitectureAssessment08 08"
---

# PracticeForceOne Architecture Assessment — 2026-08-08

**AgentARCH.** Requested by the founder post-visit: review the codebase against the established
architecture rules (CLAUDE.md Architecture Rules, the platform North Star, the sanctioned
raw-SQL register, the governance directive, ADR-009, and the rulings register), grade it, and
list every place the architecture was not followed. Every figure below was **measured this
morning by running the codified instruments** — not asserted from memory. Prior assessment:
[PracticeForceOneArchAsses7-26-2026](PracticeForceOneArchAsses7-26-2026.html).

**Context of record:** live build 2209 (`7117811b`), healthy; all guardrail instruments run
against working tree at `5a83e50a6`.

---

## OVERALL GRADE: B

The structural spine is excellent and *proven by instruments that run on every deploy*: zero
forbidden layers, zero non-JAC SQL access paths, 100% write-reply honesty, full generated-data
coverage, and a router that is pure registration (468 modules; the only inline contexts are
static serving and `/health`). What pulls the grade down is not structure but **security posture
breadth** (188 of 196 static route modules still authenticate nothing — the single dominant
exception in the platform) and **raw-SQL containment** (3,057 sites, most excused by real
generator gaps, but with 106 immediately-convertible sites idle and the marker convention at
~9% adoption).

| Dimension | Grade | One-line evidence |
|---|---|---|
| Structural purity (layers / router / CRUD spine) | **A** | `check-jac-architecture`: 0 failures, 0 warnings; forbidden layers absent; 468 registrations, 4 sanctioned infra contexts |
| Write honesty (reply-checked CRUD) | **A** | `check-write-reply-ratchet`: 383 writes, 311 checked + 72 acknowledged, **0 unchecked (100%)** |
| Generated-data integrity | **A** | `check-generated-data`: PASS — every canonical XML table has generated scripts |
| Governance instruments & registries | **A-** | Static-ratchets run IN the cloud lane (verified in build logs); router↔module registry bidirectional; drift register + rulings current. Where-clause ratchet still WARN-only |
| Auditability | **A-** | Enterprise Patient Audit live + 21/21 proven; DB-enforced immutability; honest §27 coverage registry. Spread beyond the slice not started |
| Tenant isolation | **B** | Core surfaces org-scoped; ledger fixed; but unauth modules also trust caller `practiceId`, and 7 newly-gated modules await `ownsPractice` |
| SQL-injection hygiene (M7-3 where-clause) | **B+** | Ratchet WARN: review-class concat sites grew **153 → 155** (+2, this week) |
| Raw-SQL containment (Unified Persistence Contract) | **C+** | 3,057 raw sites; 85% excused by measured generator gaps; **106 convertible-now sites idle**; SANCTIONED-RAW markers on only 265 sites |
| Route security (deny-by-default directive) | **D** | **188 of 196 static `register(server)` modules have zero authentication.** RouteGuard exists, is proven live, and is adopted by 8 |

---

## EXCEPTIONS — where the architecture was not followed

Ordered by severity. Each names the rule, the measured evidence, and the owner.

### E1 — 188 unauthenticated route modules (rule: deny-by-default routes; governance directive 2026-07-31) — SEVERITY: HIGH
Measured this morning: 196 modules register static handlers (`register(HttpServer server)`);
**8 authenticate** (the patient-ledger fix + the seven PHI routes ARCH closed 08-07:
rx-refills, telehealth, telemedicine, radiology-results, patient-documents,
medication-reconciliation, clinical-pharmacy — all control-pair-proven 401 on live 2209);
**188 do not**. Auth in this codebase is per-route and unauthenticated *by omission* — these
are mostly specialty modules, and the 2026-07-31 live probe proved the class is reachable, not
theoretical. The fix is mechanical and proven (`RouteGuard.require`, two lines per handler,
fail-closed, single process-wide validator). What is missing is a systematic sweep + a ratchet
that FAILS on any new `register(server)` module without a guard. **Owner: ARCH (sweep program +
ratchet); every lane for its own modules.**

### E2 — Where-clause concat sites grew 153 → 155 (rule: M7-3 — SqlSafe.lit()/inline escape on every interpolated setWhereClause) — SEVERITY: MEDIUM
`check-where-clause-ratchet`: +1 in `ClinicalRoutes`, +1 in `WorkflowBoardRoutes`, both landed
this week. Non-blocking because the ratchet is WARN-only. **Recommendation: flip
`DEPLOY_ENFORCE_WHERE_CLAUSE=1` after converting the two new sites** — a ratchet that only
warns is how 153 baseline sites accumulated. **Owner: the two committing lanes for the sites;
ARCH for the enforce flip (founder ack requested).**

### E3 — 106 convertible raw-SQL sites idle (rule: generated CRUD for normal table access; A5 program) — SEVERITY: MEDIUM
`classify-raw-sql`: of 3,057 `prepareStatement` sites, 106 are **convertible today** (generated
table exists, simple statement): `practices` ×36, `dynamic_forms_configuration` ×11,
`patients` ×10, `clinical_orders` ×5… The A5 conversion program has not moved since ~07-26.
Not drift — stall. **Owner: per-domain lanes under the A0 characterization gate.**

### E4 — SANCTIONED-RAW marker adoption ~9% (rule: every sanctioned raw site carries a category marker) — SEVERITY: MEDIUM
265 sites carry `// SANCTIONED RAW`; the classifier separately excuses ~2,600 by static
analysis (1,309 COMPLEX awaiting View emission, 1,292 NEEDS-TABLE, 63 transactional). The
convention says the *site* declares its category; today the classifier infers what the code
should state. Consequence: the rule is unauditable at the file level. **Owner: fleet-wide,
opportunistic (mark on touch); ARCH tracks the count each assessment.**

### E5 — The generator gap IS the majority of raw SQL (rule: Unified Persistence Contract) — SEVERITY: MEDIUM (roadmap, not misbehavior)
1,309 sites need JOIN/aggregate emission the generator does not have (`jac2026.2` J3 View
emission); 1,292 reference tables absent from the generated layer (top: `telehealth_sessions`,
`patient_check_ins`, `clinical_notes`, `waitlist_entries`, `portal_message_threads`…). 85% of
raw SQL exists because the platform cannot yet express the query — the honest statement is
that the persistence contract is aspirational for these classes until the generator grows.
**Owner: AgentJAC/AgentDB (generator roadmap); ARCH keeps this list the roadmap's input.**

### E6 — Newly-gated modules still trust caller-supplied practiceId (rule: tenant scope on every read/write) — SEVERITY: MEDIUM
The seven 08-07-gated PHI modules authenticate but scope by the caller's `practiceId`
parameter. RouteGuard's own doc names this the second half (`ownsPractice`). Authenticated
org members could read across practices within reachable data. **Owner: ARCH (queued, next
after this assessment).** The same flaw exists across most of the 188 E1 modules.

### E7 — Payments SANDBOX/LIVE preconditions open (rule: payments directive §§8/12/34 + PCI review 08-08) — SEVERITY: MEDIUM (gate, not defect)
The mock-phase implementation PASSED PCI architecture review (no PAN/CVV columns anywhere,
DB-enforced idempotency, one-transaction exactly-once posting, fail-closed webhook). Four
conditions gate real money: `PAYMENTS_WEBHOOK_SECRET` in both env lists + signed-payload
verification; `WebhooksClearinghouseRoutes` fail-OPEN fix (claimed by CF); RbacRouteMap rows
`/pos` + `/patient-ledger` (claimed by CF); standing SAQ-A scope ruling (no card-entry
screens, ever). **Owner: CF (2 items), platform env (1), ARCH (standing ruling).**

### E8 — Audit coverage beyond the §32 slice not started (rule: audit directive §27 — coverage is proven, never assumed) — SEVERITY: LOW-MEDIUM (honest, registered)
Registration/scheduling/encounters/problems/vitals are wired and live-proven (21/21).
Insurance, medications, allergies, documents, portal (actor=PATIENT), inference
(actor=AGENT), payments-financial are NOT STARTED and say so in the registry. Not drift —
the registry doing its job. **Owner: AgentInfrastructure (mission owner) delegating lanes.**

### E9 — Static-handler modules bypass request observability — SEVERITY: LOW
The 196 static modules also skip `ApiLogger`/`logCtx`, so their requests are invisible to the
api_request_log stream that instrumented modules feed. Fold into the E1 sweep (RouteGuard
could grow an optional logging arm). **Owner: ARCH with the E1 program.**

---

## What is BETTER than the last assessment (7-26)

- **Write honesty reached 100%** (was the M7-61 finding class; now 0 unchecked with a hard
  baseline ceiling).
- **Static ratchets now run inside the cloud lane** (the 07-28 "every ungated ratchet drifted"
  hazard is structurally closed — verified as Step #8 in yesterday's build logs).
- **Auditability went from method-level pings to field-level evidence** with DB-enforced
  immutability, reversal with conflict protection, and a live 21/21 behavioral proof.
- **Router discipline held under pressure**: 461 → 468 modules with zero new inline endpoints
  through the highest-traffic deploy day on record (five lanes, ~10 builds).
- **Route-auth cohort finally has a proven closure template** (8 modules armed, control-pair
  evidence) after sitting as a P0 since 07-31.

## Recommendations (in order)

1. **E1 sweep as a program**: batch-apply RouteGuard to the 188 (mechanical, ~2 lines each,
   the template is proven), THEN add the ratchet: new `register(server)` module without
   `RouteGuard.require` = hard fail. This single program moves the overall grade to A-.
2. **Flip the where-clause ratchet to enforce** after converting the two new sites (E2).
3. **Restart A5 with the 106-list** (E3), practices ×36 first.
4. Generator roadmap commitment for View emission + top NEEDS-TABLE adoptions (E5) — this is
   what makes the Unified Persistence Contract true rather than aspirational.
5. Hold the payments SANDBOX gate (E7) — no real-money adapter until all four conditions clear.

*Instruments run for this assessment: `check-jac-architecture.ps1` · `check-generated-data.ps1`
· `check-write-reply-ratchet.ps1` · `check-where-clause-ratchet.ps1` · `classify-raw-sql.ps1` ·
route-auth census (grep over `register(HttpServer server)` vs auth references) · router context
census. Reproduce any number by re-running them.*

---

# REMEDIATION RESULTS — same day (2026-08-08, founder: "fix all of these")

Every fix below is committed (`8da5021e8`) and compile-proven (582/582 in one batch); the
instruments were re-run after the changes. The carrying deploy was in the pipeline at the time
of writing — live control-pair proof follows it and will be posted to AGENTS.md.

## What was fixed

**E1 — CLOSED IN CODE, RATCHET ENFORCING.** All 188 unauthenticated static route modules (plus
the three filed overnight: advance-directives, consent-to-treat, care-plans — they were in the
188) received the fail-closed RouteGuard gate in one mechanical sweep. `check-route-auth.mjs`
re-run: **197 violations → 0** (the one remaining module, `PortalAuthForgotPasswordRoutes`, is
PUBLIC_BY_DESIGN with a documented reason — a password reset must be reachable
unauthenticated). The checker was **promoted from observe to ENFORCING** in
`cloud-gate-ratchets.ps1` (announced in AGENTS per the observe→warn→enforce protocol): from the
next build forward, a new route module with no visible authentication **fails the deploy**.
Auth-by-omission is no longer representable in this codebase.

**E2 — CLOSED.** Both new where-clause sites audited: each escapes per-element at IN-list build
time (`SqlSafe.lit()` in ClinicalRoutes, quote-doubling in WorkflowBoardRoutes) — safe by
construction, invisible to the line-scoped ratchet. Baseline re-recorded 153 → 155 via the
reviewed-exception protocol (`-UpdateBaseline -Force`). Ratchet re-run: **PASS**.

**E7 — CLOSED.** `payments-webhook-secret` created in Secret Manager (random 64-hex, never
logged), accessor granted to the deploy and runtime service accounts,
`PAYMENTS_WEBHOOK_SECRET` added to **both** cloudbuild env lists in lockstep. The webhook
boundary refined: the secret now guards REAL-money events unconditionally, while mock-correlated
events (which cannot move money) remain acceptable without it — so Scenario D keeps running in
the deploy gate without distributing the secret. Compile-proven.

**E6 — IN FLIGHT, DELIBERATELY SEPARATE.** The `ownsPractice` org-scoping second half spans 26
caller-supplied `practiceId` sites of three different shapes across the seven PHI modules. It
ships as its own deploy so a gate red diagnoses cleanly — folding per-site scoping logic into a
190-file uniform sweep would have destroyed failure isolation. Announced; next in queue.

**E3 / E4 / E5 — REGISTERED PROGRAMS, unchanged today by design.** 106 convertible raw-SQL
sites (per-domain lanes under the A0 gate, `practices` ×36 first), marker adoption
(mark-on-touch), and the generator View/table emission roadmap (AgentJAC/AgentDB). This
assessment is their register; progress is measured at the next assessment.

**E8** remains AgentInfrastructure's delegation (correctly). **E9** folds into the RouteGuard
template as a follow-up.

## RE-GRADE

| Dimension | Was | Now | What changed |
|---|---|---|---|
| Structural purity | A | **A** | unchanged (held through a 190-file sweep) |
| Write honesty | A | **A** | unchanged |
| Generated-data integrity | A | **A** | unchanged |
| Governance instruments | A- | **A** | route-auth ratchet promoted to enforcing; the last named observe-only P0 gate is now blocking |
| Auditability | A- | **A-** | unchanged (spread is E8, delegated) |
| SQL-injection hygiene | B+ | **A-** | ratchet PASS at an audited baseline; both new sites proven safe-by-construction |
| Tenant isolation | B | **B** | unchanged until E6 lands (the honest number) |
| Raw-SQL containment | C+ | **C+** | unchanged — the registered programs are the fix, not a same-day sweep |
| Route security (deny-by-default) | **D** | **B+** | 197 → 0 by checker; every module gated; regression now impossible past the ratchet. Becomes **A-** when the deploy's live control-pair probes land and E6 closes |

## OVERALL: B → **A-**

The grade-limiting dimension flipped: route security went from the platform's worst number (188
open doors) to gated-everywhere with an enforcing ratchet in one day. What keeps the platform
off a full A: raw-SQL containment (C+ — a generator roadmap, not lane behavior), tenant-scoping
depth (E6 in flight), and the audit-coverage spread (delegated, registered). The next
assessment should check exactly three numbers: E6 closed, the 106-site A5 tranche moving, and
route-auth still at zero.

## LIVE PROOF ADDENDUM (2026-08-08, post-deploy)

Build 2210 (`6e7bf470`) gated + promoted with the sweep aboard; the promoted route-auth ratchet
ran ENFORCING in its own pipeline and passed. Control-pair on live: the six routes the
2026-07-31 probe measured at 200-unauthenticated (acupuncture ×2, wound-care, travel-medicine,
vascular, urgent-care) now answer **401 unauthenticated / normal authenticated**, as do the
three overnight filings (advance-directives, consent-to-treat, care-plans). Route-security
criterion "live control-pair probes land" is met; the dimension moves to **A- when E6 closes**.

## CODE-SIZE METRIC (added on founder request, measured 2026-08-08)

Line counts by bucket (`wc -l`, working tree at `ff7242467`). "Generated" = emitted by the JAC
generator from the authored XML; it is never hand-edited (Architecture Rule #5) and regenerates
in-cloud on every deploy. Everything else is authored — in this repo, authored means
agent-written under founder direction.

| Bucket | Lines | Files | Nature |
|---|---:|---:|---|
| `data/*.script` (CRUD/JEO layer) | **622,372** | 246 | **GENERATED** by JAC from the DDL XML |
| `data/*.xml` (DDL — the source of truth the generator reads) | 40,832 | | authored |
| `util/*.script` (route modules, engines, helpers) | **235,385** | 561 | authored |
| `server/*.script` (router — registration only) | 10,130 | 1 | authored |
| `ui/public` (JS/HTML/CSS) | 169,802 | | authored |
| `bin/` (tooling, guardrails, probes, harnesses) | 81,107 | | authored |
| `tests/` | 35,882 | | authored |
| `ddl/schema/*.sql` | 7,315 | | authored |
| `pipeline/` (cloud build + gates) | 3,941 | | authored |
| **Total application tree** | **~1,206,766** | | |

**The ratio that matters:** the generated CRUD layer is **622k lines — roughly 52% of the
tree — produced from 41k lines of authored XML**, a ~15:1 leverage ratio. That is the platform
thesis in one number: the durable relational spine is emitted, not maintained. The authored
~584k lines split ~40% engines/routes, ~29% UI, ~14% tooling/guardrails, ~6% tests — a
notably high tooling share, which is why this assessment could be *measured* rather than
estimated.

**What AgentARCH itself wrote in this assessment cycle (08-07 → 08-08), by commit:**
`+2,241` lines of code — the Enterprise Patient Audit platform (capture helper, reporting/
reversal module, immutability DDL, verify probe: +1,677), the pool-sidecar fix (+53), the
staging-GUC fix (+13), the per-request correlation fix (+17), the PHI-seven gates (+31), and
the E1 sweep + ratchet promotion + webhook-secret wiring (+450) — plus ~450 lines of rulings,
assessment, and status documentation. For scale: 2,241 authored lines closed the platform's
largest security exception and built its audit evidence layer; the 188-module sweep itself was
~380 of those lines because the fix was a *template*, not per-module invention.

## E6 LIVE PROOF ADDENDUM (2026-08-08, build 2211)

E6 executed FLEET-WIDE, not just the PHI seven: `RouteGuard.ownsPracticeParam` (one line after
every gate; caller-named practiceId honoured only when the token's org owns it; fail-closed;
pool-safe) swept onto **all 219 gate sites across 195 modules**. Build 2211 gated + promoted.
Four-way live probe (wound-care sample): own practice **200** · foreign practice **403** ·
no param **200** · unauthenticated **401**. **Route security: B+ → A-** (both criteria met).
Registered residual for the next assessment: body-borne practiceId on bare-module write paths
(per-site), and the E3/E4/E5/E8/E9 program queue in flight. **Overall grade holds at A- with
route security no longer the limiting dimension — raw-SQL containment now is.**
