---
title: "PracticeForceOneArchitectureSweep2026 08 12"
---

# PracticeForceOne — Architecture Sweep, 2026-08-12

**Author:** AgentARCH · **Live at time of sweep:** build 2232 (`a86ec63cd`) · **Predecessor:** [PracticeForceOneArchAsses7-26-2026](PracticeForceOneArchAsses7-26-2026.html)

**Grade: B−** (was **A−** on 2026-08-08). The downgrade is not a reversal of the earlier work — every
structural control that assessment established still holds and still measures clean. The downgrade is because
this sweep found **two architectural layers that were never governed at all**, and both of them failed in
production on the day of the sweep.

> **The one-sentence verdict:** PracticeForceOne's *code* architecture is disciplined and improving; its
> *schema lifecycle* and its *verification enforcement* are not architecture at all yet — they are convention,
> and convention is what broke a three-day deploy stall open into an outage.

---

## 1. Method

Everything below is measured on the working tree at `a86ec63cd`, or read from production/Cloud Build logs.
Commands are recorded so any lane can refute a number rather than argue about it. Where I could not measure
something, §7 says so instead of estimating.

---

## 2. What is genuinely strong — state it first, and fairly

These are not participation trophies; each is a control that measurably holds under a 240k-line codebase.

| Control | Measured | Verdict |
|---|---|---|
| Forbidden layers (`api/`, `services/`, `repositories/`, `entities/`, gateway) | absent | **HOLDING** |
| Non-JAC SQL access | **0** source lines | **HOLDING** |
| `DriverManager` outside the factory | 3 refs, all generated/approved paths | **HOLDING** |
| Router ↔ module registry | **469 modules on disk / 469 registered — delta 0** | **HOLDING** |
| Router composition | 10,000 lines, registration + static only, zero inline endpoints | **HOLDING** |
| Write-reply honesty (M7-61) | 391 write sites · **0 unchecked** · 72 explicitly acked · 100% | **HOLDING** |
| Where-clause escaping (M7-3) | 999 sites · 153 review-class · **at baseline** | **HOLDING** |
| Generated-data coverage | pass | **HOLDING** |
| Characterization gate | 261 scenarios · 258/258 green on the promoted build | **HOLDING** |

**The A2 router split and the E1/E6 security sweeps have durably survived contact with four months of
parallel-lane development.** That is the strongest evidence in this document that the platform's core
architectural theory works: a rule that gets a checker stays true, at scale, across eight agents.

**Which is exactly why §3 is damning: it is the same finding, inverted.**

---

## 3. DRIFT — ranked by what it will cost, not by how bad it looks

### D1. Schema lifecycle is not governed. 681 runtime DDL statements across 278 modules. **SEVERITY: CRITICAL**

```
CREATE TABLE IF NOT EXISTS / ALTER TABLE executed from util/ :  681 statements in 278 modules
ensureSchema() call sites                                     :  241 sites in 132 modules
dedicated *Schema helper classes                              :    5
```

The application **creates and alters its own schema at runtime, from the request path**, in half the
codebase. `ClaimsProcessingRouter.script:182` states the intended invariant in its own comment —
*"portal schema setup runs ONCE here at startup, **never inside a request handler**"* — and the measurement
says that invariant is false by 241 call sites.

**This is not theoretical debt. It took production-adjacent systems down today.** `PortalSupport.ensureSchema()`
sets its `schemaEnsured` guard *only on success*; a single cold-start lock timeout therefore latches into a
permanent per-request DDL retry storm for the life of the revision, serialized on a class monitor. Candidate
`fb085a8e` recorded **190 lock-timeout events** and failed 34 gate scenarios across six unrelated domains —
medications, clinical-tasks, chart bundle, check-in, registration, MFA — all one lock symptom wearing six
costumes. The trigger, per @AgentInfrastructure's independent measurement, was a **leaked idle-in-transaction
holding `AccessShareLock` on `portal_users`**, i.e. *production blocking its own successor's DDL*.

**Architectural conclusion, stated plainly: safe-canary is structurally incompatible with runtime DDL.** A
no-traffic candidate and a live production revision share one database; DDL wants ACCESS EXCLUSIVE; live
traffic denies it. Every future candidate rolls this die. **This is the single largest architectural risk in
the platform and it is currently owned by nobody's design, only by a 5s `lock_timeout`.**

**Owner: AgentInfrastructure + AgentDB** (founder order, 2026-08-12 §8). **Target:** schema preparation
completes in a deploy/migration phase *before a revision serves*; request-path DDL call sites go to **zero**;
a failed ensure fails **loudly once** rather than latching into unbounded retry. **I will write the enforcing
checker once the fix shape is chosen** — this is the same class as `check-route-auth`, which took the
197-cohort to zero and has held since.

### D2. 76% of the platform's own rules are unenforced. **SEVERITY: HIGH**

```
checkers on disk (bin/check-*.{ps1,mjs}) : 67
wired into the cloud gate                : 16
UNGATED                                  : 51   (76%)
```

Sampled four ungated checkers cold: **`check-catalogue-drift.mjs` already exits 1.** Three passed. So the
drift is real but not yet universal — which is the best possible moment to act.

This is the platform's own doctrine failing to apply to itself. Fifty-one times, a lane identified an
architectural rule, invested in a machine that can detect its violation, and then left the machine
disconnected. **An unenforced checker is worse than no checker: it produces the *belief* that a rule is
protected, while the rule silently rots.** The one prior finding on record is unambiguous —
*every ungated ratchet drifted*.

**Owner: AgentARCH (mine).** Not a request to another lane. **Action:** triage all 51 into
gate / observe→enforce ladder / delete-as-obsolete, and treat "checker exists but is not wired" as itself a
ratchet violation.

### D3. A gate step that prints `FAIL` and reports `GREEN`. **SEVERITY: HIGH**

`pipeline/scripts/cloud-gate-ratchets.ps1` has an explicit OBSERVE stage — *"report-only, cannot fail this
build"* — which is a legitimate and well-documented rung of the founder's observe→warn→enforce ladder. The
defect is the **rendering**, not the policy: build 2232's `static-gates` step printed

```
PRODUCER(S) of blocksSign / canSign / remainingRequired: 2
   util/ClinicalEvidenceRoutes.script
   util/DocumentationRecommendationsRoutes.script
   FAIL: more than one module produces the readiness verdict. Collapse to one.
...
STATIC GATES GREEN
```

**A human reading that log sees `GREEN` and moves on.** The word `FAIL` appearing inside a step that
self-reports success trains the entire fleet to discount the word. @AgentFuture independently reported the
same class in `check-module.ps1` (fails, exits 0). **Fix is cosmetic and urgent:** observe-stage findings must
render as `OBSERVE:` / `WARN:`, never `FAIL:`, and the step summary must count them.

### D4. Duplicated inference: encounter readiness has two producers. **SEVERITY: MEDIUM (mine)**

`ClinicalEvidenceRoutes.script` and `DocumentationRecommendationsRoutes.script` both produce
`blocksSign` / `canSign` / `remainingRequired`; two client surfaces (`cf-runtime.js`, `kanban.js`) consume it.
This is a direct violation of the platform's "never solve the same problem twice" rule, on the **clinical
readiness verdict** — the value that decides whether a provider is told their work is complete. Two
implementations of that will drift, and the prior art here is unambiguous: *two evaluators drifted silently*
and safety rules failed **open**.

**Owner: AgentARCH.** Collapse to one producer; the second becomes a consumer.

### D5. The cleanup contract stopped covering the schema. **SEVERITY: MEDIUM — root cause is D1's sibling**

`ClearDLP` sweeps ~70 tables in a hand-maintained FK-ordered walk. Five tables added by the payments and PMP
work (`payment_transaction`, `patient_payment_method`, `pmp_review`, `pmp_report`, `pmp_interpretation`) FK
`patients` **ON DELETE RESTRICT** and appeared in that walk **zero** times. Result: the self-cleaning journey
chain could not delete its own patient, one `NoRetry` scenario went red, and **214 commits sat behind it for
11 hours** while production ran a P0. Fixed in `eadff1fda`; **proven** on 2232 (`DLP-G04` removed 57 rows).

**The fix is not the lesson.** The lesson is that a hand-maintained table list is a contract with no checker —
it will fall behind the schema again, silently, the next time any lane adds a patient-scoped table.
**Owner: AgentARCH + AgentDB.** A checker can derive the required set from `information_schema` FK metadata
and fail when the walk does not cover it.

### D6. A stale, gate-free build configuration sits in the repo root. **SEVERITY: LOW, trivially fixable**

`jac2024/app/com/claimsprocessing/cloudbuild.yaml` (97 lines) builds a Docker image and pushes it, with
**no gates, no ratchets, no characterization, no safe-canary**. The real pipeline is
`pipeline/cloudbuild-deploy.yaml`. Nothing currently uses the stale file; it is one `--config` flag away from
promoting an ungated image. **Delete it or rename it `.disabled`.**

---

## 4. Maintainability

**Scale:** 562 `util/` scripts (469 route modules), **240,280 lines**, plus a 10,000-line router and 252
generated data classes. For a platform of this ambition that is not alarming in itself — but three specifics are.

**4a. Module obesity is concentrated and it correlates with the drift above.**

| module | lines | note |
|---|---|---|
| `DocumentationRecommendationsRoutes` | 2,517 | **also a duplicate readiness-verdict producer (D4)** |
| `PromoteStagingToProduction` | 2,486 | staging/bulk |
| `AdminPortalUsersRoutes` | 2,111 | |
| `ReportsRoutes` | 2,010 | |
| `StagingRoutes` | 1,993 | **contains the 70-table hand-maintained walk (D5)** |
| `SchedulingRoutes` | 1,993 | |
| `StagingDataLoader` | 1,911 | |
| `ClinicalEvidenceRoutes` | 1,800 | **the other readiness-verdict producer (D4)** |

The two largest clinical modules are exactly the two that duplicate the readiness verdict, and the module
holding the cleanup contract is the fifth largest. **Size here is not a style complaint — it is where the
governed contracts went to hide.**

**4b. The test harness is now a 7,098-line single file.** `bin/uat-characterize.ps1` holds 261 scenario
definitions and is the platform's primary safety net — it is also the file every lane edits, and a scenario
ordering bug in it (`SKIPPED-UPSTREAM` cascades) can mask real regressions. It deserves the same modular
treatment the router received in A2.

**4c. Raw SQL is contained but enormous, and the containment is now *labeling*, not *reduction*.**
3,335 `prepareStatement` sites across 423 files carry **3,318 `SANCTIONED RAW` markers** — near-total
annotation coverage. That is genuinely good hygiene and it is what makes the surface auditable. But
annotation is not conversion: the marker text itself says most sites await *"generated View emission
(jac2026.2 J3)"*. **The platform has honestly documented a 3,300-site debt and then stopped paying it.**
Against 217 `batchCreate` + 266 `uidUpdate` generated-CRUD sites, raw SQL still outnumbers generated access
roughly **7:1**. The unified persistence contract is a stated principle that the code does not yet obey.

---

## 5. What today proves about the platform's real failure mode

Three candidates failed for three unrelated reasons in twelve hours, and **every one was a
governance gap, not a coding error**:

1. Readiness measured by liveness — *a contract with no checker.*
2. A cleanup walk that fell behind the schema — *a contract with no checker.*
3. Runtime DDL racing a live sibling revision — *a layer with no contract at all.*

**None of the three was found by a test.** All three were found by reading a log after a failure. The
platform's verification apparatus is strong where it is wired (§2) and absent where it is not (§3), and the
distribution of that wiring is currently 16/67.

---

## 6. Ranked remediation

| # | Action | Owner | Severity |
|---|---|---|---|
| 1 | Move schema preparation out of the request path and into a pre-serve deploy phase; drive 241 `ensureSchema` call sites to zero; fail loudly once instead of latching | Infrastructure + DB | CRITICAL |
| 2 | Enforcing checker for #1 once the fix shape is chosen | **ARCH** | CRITICAL |
| 3 | Triage all 51 ungated checkers: gate / ladder / delete. Make "unwired checker" itself a ratchet violation | **ARCH** | HIGH |
| 4 | Observe-stage output must never print bare `FAIL` inside a step that reports GREEN | Infrastructure | HIGH |
| 5 | Collapse the readiness verdict to one producer | **ARCH** | MEDIUM |
| 6 | Derive the ClearDLP sweep set from FK metadata; checker fails when the walk misses a patient-scoped table | **ARCH** + DB | MEDIUM |
| 7 | Delete/disable the stale root `cloudbuild.yaml` | Infrastructure | LOW |
| 8 | Modularize `uat-characterize.ps1` (7,098 lines) as A2 did the router | Infrastructure | LOW |
| 9 | Resume raw-SQL→generated-CRUD conversion, or formally retire the goal and say so | ARCH + DB | STRATEGIC |

---

## 7. What I did NOT measure — stated so nobody treats absence as absolution

- **Whether the other 50 ungated checkers pass.** I sampled 4. One failed. The remaining 47 are unknown, and
  I will not extrapolate a rate from a sample of four.
- **Runtime behavior of the 681 DDL statements.** I counted statements in source; I did not observe how many
  execute per request in practice.
- **Whether D4's two readiness producers currently *disagree*.** I proved duplication structurally; I did not
  prove divergence. Prior art says assume it until measured.
- **Front-end architecture.** `kanban.js` and `cf-runtime.js` were out of scope; an active P0 there
  (zero rendered cards on 2232, @AgentDLP) suggests the client deserves its own sweep.

---

## 8. Closing

The 7-26 assessment asked whether the platform's architectural theory survives eight agents working in
parallel. **§2 answers yes, decisively — every rule with a checker held.** This sweep's finding is the exact
complement: **the platform is now bounded not by its architecture but by how much of that architecture is
mechanically enforced.** Sixteen enforced rules are load-bearing across 240,000 lines. Fifty-one are
decoration. The gap between those two numbers is where the last three deploy failures came from, and it is
where the next one will come from.

*Grade B−. The path back to A− runs through remediation items 1–4, and none of them require a new idea —
only wiring what the fleet has already built.*

---

# ADDENDUM — same day, re-measured after two releases (live **2234**, `54fb7cf11`)

The founder asked whether releases since the sweep change the assessment. **They do, in three ways: one
finding of mine needs correcting, one got measurably worse, and two remediation items were built by other
lanes while I was writing this page.** Re-measured on the current tree, not assumed.

## What shipped

| commit | what | in live 2234 |
|---|---|---|
| `8078093e6` | Kanban P0 — the empty staff board: **five card builders threw `ReferenceError`** | **YES** |
| `022529f95` | gate waits for **portal-schema readiness**, not just a practices read | **YES** |
| `8b6939565` | the original P0 (remove allergy → patient deleted) + P1 | YES |
| `eadff1fda` | ClearDLP FK walk | YES |

**WRITE-INTEGRITY GATE = CLOSED** was issued on Infrastructure's live 2232 matrix (see AGENTS). The empty
board is fixed. Neither of these was true when §1–§8 above were written.

## CORRECTION to D1 — my own headline number was too blunt

I reported *"681 runtime DDL statements across 278 modules"* and let it carry the CRITICAL severity. That
count is accurate but it **conflates two things with very different costs**, and a lane has since built the
instrument that separates them — `bin/check-request-path-ddl-ratchet.ps1`:

```
schema-DDL modules total         : 258
ensured at STARTUP by the router : 13
lazy CREATE TABLE (request path) : 245   (reported, not frozen)
lazy ALTER TABLE  (request path) : 0     <-- the ACCESS EXCLUSIVE case
```

**`CREATE TABLE IF NOT EXISTS` against a table that already exists does not take ACCESS EXCLUSIVE.** The
lock that took the platform down was **`ALTER TABLE`**, and request-path `ALTER` measures **zero**. So the
acute exposure is far narrower than my number implied, and I should have separated the two before assigning
CRITICAL. **Corrected.**

**D1 stays CRITICAL anyway, for a reason the new checker does not cover.** Today's outage was *not* a lazy
ALTER in an ungoverned module. It was `PortalSupport` — **one of the 13 the checker classifies as
"ensured at STARTUP"** — whose startup ensure *failed*, leaving `schemaEnsured=false`, after which its
`ALTER TABLE` statements were retried **from the request path** by 241 call sites. A checker that asks
*"which modules declare lazy ALTER?"* answers **0** and is satisfied; the incident lives in
*"what happens when a startup ensure fails?"*, which nothing measures. **The instrument is aimed at the
right axis and would not have caught the event that motivated it.** Recommended baseline change: freeze
**request-path `ensureSchema()` call sites** (currently **241 across 132 modules**, unchanged since the
sweep) rather than lazy-ALTER declarations, and assert that a failed ensure cannot be retried per-request.

## D2 got WORSE, and in the most on-the-nose way available

| metric | sweep | now |
|---|---|---|
| checkers on disk | 67 | **68** |
| wired into the gate | 16 | **16** |
| **ungated** | 51 (76%) | **52 (76.5%)** |

The 68th checker is `check-request-path-ddl-ratchet.ps1` — **written to enforce D1, and not wired.**
`check-teardown-fk-coverage.mjs` (written for D5) is likewise **not wired**. On the same day this page
argued that unenforced rules rot, the fleet produced two new rules and left both disconnected. **This is not
a criticism of the lanes that built them — both are good instruments, and both pass right now:**

```
check-request-path-ddl-ratchet.ps1  -> PASS (baseline lazy-ALTER 0)
check-teardown-fk-coverage.mjs      -> "sweeps 75 tables; 44 reference the spine.
                                        every BLOCKING FK child is swept before its parent."  PASS
```

**Both would go green on their first gate run. Wiring them is free.** That is the cheapest architectural
win available to this platform right now, and remediation items 3 and 6 are already half-done.

## D3 is confirmed, and sharper than I wrote it

I attributed the FAIL-that-reports-GREEN to the gate's observe stage. Re-measured, **the checker itself does
it**:

```
$ node bin/check-inference-not-duplicated.mjs
PRODUCER(S) of blocksSign / canSign / remainingRequired: 2
   FAIL: more than one module produces the readiness verdict. Collapse to one.
exit=0
```

It prints `FAIL` and **exits 0** — so wiring it would not help; it would pass while reporting failure. Any
triage of the 52 ungated checkers must verify **exit codes**, not just output, or gating them achieves
nothing. This is the same defect @AgentFuture reported in `check-module.ps1`.

## D4, D5, D6 — status

- **D4** unchanged: still exactly **2** producers of the readiness verdict. Mine.
- **D5** the *fix* is live and proven (`DLP-G04` removed 57 rows on 2232); the *checker* now exists and
  passes. Only the wiring is outstanding.
- **D6** the stale gate-free root `cloudbuild.yaml` is **still present**.

## Front end — elevate from §7 "out of scope" to a named gap

The empty board was **five `ReferenceError`s in card builders** that reached production and were caught by a
human looking at a screen. The client has no checker, no ratchet, and no gate scenario that renders a card;
`local-ui-host.mjs` was *displaying this very bug* before it shipped and that was read as the harness being
incomplete. **`ui/public/` is a fully ungoverned architectural surface** — 240k lines of governed server
sitting behind a client where a typo ships. It deserves its own sweep, and at minimum one gate scenario that
asserts a rendered card exists.

## Does the grade change?

**No — B− holds**, but the reasoning has shifted in the platform's favour. Drift counts moved the wrong way
(690 DDL statements, 52 ungated checkers), yet the fleet shipped four real fixes, closed write-integrity on
rigorous live evidence, and **independently built two of this page's own remediation items within hours**.
The gap between B− and A− is no longer an engineering programme — it is **wiring two passing checkers, fixing
two exit codes, deleting one stale file, and collapsing one duplicated producer.** None of it requires a new
idea.

---

# CORRECTION — three of my own numbers were wrong (same day, after founder review)

The founder read the code directly and identified `|| true` as the masking mechanism. **They were right
and I was wrong, twice, in the addendum above.** Corrected here rather than quietly edited, because the
wrong versions were acted on.

**C1. `check-inference-not-duplicated.mjs` does NOT exit 0.** It exits **1**, correctly. My "exits 0"
measurement was an artifact of my own command — I piped the checker through `grep | head`, so `$?` reported
**head's** exit status, not node's. The checker is honest; **the masking is `|| true` in
`pipeline/cloudbuild-deploy.yaml:134`.** I published a defect against a well-written checker on the strength
of a shell mistake. The remediation advice ("verify exit codes, not output") survives — but it now applies
to *me*, and the reason it applies is that I measured through a pipe.

**C2. `check-teardown-fk-coverage.mjs` IS wired**, hard, in `cloudbuild-deploy.yaml`. I reported it unwired
because I grepped only `pipeline/scripts/cloud-gate-ratchets.ps1` and never looked at the yaml's own
invocations. D5's remediation is **done**, not outstanding.

**C3. The D2 taxonomy was wrong in both directions**, and "16 gated / 51 ungated" should be retired. The
machine-produced inventory (`bin/check-checker-governance.mjs`):

```
checkers on disk : 69
observed ENFORCE      : 14
observed OBSERVE      : 2
observed MASKED       : 7    <-- `|| true`: renders as enforcement, behaves as observe
observed UNREFERENCED : 46
undeclared            : 53
```

**`MASKED` is the category I entirely missed, and it is the dangerous one.** An UNREFERENCED checker is
visibly absent. A masked one *appears* in the pipeline, reads as enforcement to anyone scanning the yaml,
and cannot fail the build. `pipeline/cloudbuild-deploy.yaml:117` even says *"drop the `|| true` after
Wednesday"* — a deliberately temporary measure that outlived its Wednesday.

**I hand-counted this three times and produced three different wrong answers.** That is the argument for
item 6 better than any I wrote: the number is not humanly countable, so it is now computed by
`check-checker-governance.mjs`, which was falsified against three planted violations before being trusted.

## D6 upgraded LOW -> CRITICAL, then closed by other lanes

I wrote that the stale root `cloudbuild.yaml` was *"one `--config` flag away"* from an ungated promotion.
**It was zero flags away: `bin/ci-deploy.ps1` and `bin/deploy.bat` both already submitted it** — and
`ci-deploy.ps1` is the lane CLAUDE.md documents as the founder's own. Worse than "ungated": that config runs
`gcloud run services update-traffic ... --to-revisions "$REV=100"`, taking **100% of traffic immediately,
with no candidate stage at all**. I found one dormant bypass and stopped looking; there were two live ones.

**Both are now closed** (not by me): `deploy.bat` refuses with an explanation, and `ci-deploy.ps1` delegates
to `cloud-deploy.ps1` and explicitly refuses to fall back. Verified: **no live caller of the ungated config
remains.** The file itself still exists with immediate-traffic semantics and no trigger — deleting it is now
safe and still worth doing.

## The founder's framing, adopted

> *PFO has acquired enough sophistication that it now has multiple generations of its own safety machinery —
> and some of the older machinery has to be retired or made authoritative.*

That is a better diagnosis than the one this page opened with. I wrote D2 as a discipline failure —
51 rules the fleet declined to enforce. It is better read as **generational sediment**: each checker was the
right idea when written, and the defect is that the newer generation never became authoritative over the
older. That framing predicts where else to look — every subsystem with two implementations, one older —
and it is why the governing rule is the correct one:

> **One production deployment path. One schema-lifecycle path. One source for every clinical verdict.
> Everything else is a bug.**

By that rule this page's findings re-rank: D6 (two deploy paths) and D4 (two readiness producers) were
always the most important, and my ordering under-weighted both.
