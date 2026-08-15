---
title: "JACJEOFix"
---

# JAC/JEO Fix — Evolving the JAC Architecture to Stop Hiding SQL Failures

**Date:** 2026-06-12 · **Author:** Agent1 · **Scope:** the JAC toolchain itself (`jacBuild24`), independent of PracticeForceOne · **Companion:** [PracticeForceOneMR4PostAssessment](<PracticeForceOneMR4PostAssessment.md>) (the app-side view of the same defect)

**The questions asked:** Can the "data layer hides SQL failures" problem be resolved *entirely* by a fix to JAC? Or will it take more? Design the fix as a JAC evolution, separate from PracticeForceOne — then show how applications inherit it.

**The short answer:** **A JAC fix eliminates the defect class at its source, and applications inherit it by regenerating their data layer against the new JAC — but "entirely" carries three bounded, one-time app-side obligations** (an exception boundary, a best-effort sweep, and a regeneration). Those are a checklist, not a project. The detail follows.

---

## Part 1 — Anatomy of the defect (verified in JAC source, 2026-06-12)

This section is ground truth from the JAC sources, because the fix design depends on knowing *exactly* where the behavior lives.

### 1.1 The error model

- `com.esarks.arm.model.jeo.ServiceJeo` (`jacBuild24/source/scripts/com/esarks/arm/model/jeo/ServiceJeo.script`) is the request/reply envelope every generated CRUD method takes. Errors are `ErrorJeo` objects (`ErrorJeo.script`) attached to the reply: `addError()`, `getError()`, `getErrors()`, `getErrorSize()`, `getMostSevereError()` (L205–220 — returns the error with the **lowest** severity number).
- **Severity semantics (numeric, undocumented until now):** lower = worse. Observed values set by the generator: **0** = no DB connection (pre-execute check) · **3** = caught `SQLException` / `Throwable` during execution · **4** = parameter-binding/value-mapping problems · **10** = the success notification ("The service completed successfully"). The conventional app-side failure predicate is therefore `getMostSevereError().getSeverity() < 5` — and `getErrorSize()` is a trap, because **severity-10 success notifications are also ErrorJeo instances**, so the count is nonzero on success.
- `ServiceJeo` already carries `iSuppressException` (L63, getter/setter L260–266) — but it only suppresses the *exception report logging*, never affects control flow.

### 1.2 Where the swallow happens

The catch blocks are **not** in a shared runtime base class — they are **stamped into every generated method** by the generator template:

- **Template source:** `jacBuild24/source/scripts/com/esarks/jac/generators/GenerateService.script`, **lines 844–920**. `GenerateJeo.script` (L1477–2172, `generateCrudService`) emits XML service definitions per table; `GenerateService.script` turns those into Java method bodies and stamps this catch template into each one.
- **The template, abbreviated** (verbatim structure confirmed in generated output, e.g. `data/AI_FEATURE_FLAGSCrud.script` batchCreate L195–284, uidUpdate L1585–1674):

```java
} catch (SQLException e) {
  while (e != null) {
    aJeo.addError();
    ...
    aJeo.setErrorText("A database exception was caught: " + e.getMessage());
    aJeo.setErrorSeverity(3);
    ...log + optional ExceptionRpt render...
    e = e.getNextException();
  }
  return;                      // <-- the defect: normal return, caller sees nothing
} catch (Throwable e) { ...same pattern... return; }
```

- Method signatures are `void methodName(ServiceJeo aJeo)` — nothing throws, nothing returns a status. The **only** way a caller learns of failure is voluntarily inspecting the reply with the correct severity predicate.

### 1.3 Three aggravating facts the fix must also address

1. **Reads swallow too.** The same template wraps `uidRead*`/`read*`. A failed read (bad cast in a where clause, aborted connection) returns an **empty result set** — indistinguishable from "row not found." This silently converts infrastructure failures into wrong business answers (e.g., "no such claim" → caller creates a duplicate).
2. **No transaction hygiene in the failure path.** The generated catch blocks perform **no rollback** and don't reset connection state. On a shared connection (`DbConnection`, `jacBuild24/source/java/com/esarks/jac/DbConnection.java` — which itself stores caught exceptions in a field, L95, and never throws), one failed statement can leave `25P02 current transaction is aborted` poisoning every subsequent request — an incident class PracticeForceOne has already experienced.
3. **There is no exception vocabulary at all.** `com.esarks.jac` contains zero exception classes. There is no strict mode, no policy switch — silence is the only behavior the runtime can express.

### 1.4 Why this design existed (fairness to JAC)

The reply-envelope pattern is a deliberate 2000s service-bus idiom: services accumulate errors, renderers display them, batch jobs continue past row failures. It is not careless — it is a *batch-era* contract being consumed by a *request/response-era* application. The evolution below keeps the envelope (it is genuinely useful for batch and for error detail) and adds the missing request-era contract on top.

---

## Part 2 — Can a JAC-only fix resolve this entirely?

**What a JAC fix fully resolves (inherited by every app on regeneration):**

| Defect | Resolved by |
|---|---|
| Writes report success after swallowed SQL failure | Generator template throws on failure (strict mode) |
| Reads return empty on failure (phantom "not found") | Same template change covers read methods |
| `getErrorSize()` trap / severity-magic predicate | New runtime methods `isFailure()` / `failureSummary()` |
| Raw SQL + bound values leaking into error text | Sanitized exception message built in the runtime |
| Connection left dirty after failure (`25P02` class) | Rollback + state-reset added to the failure path |
| Every future app inheriting the same silence | New generations are strict by default |

**What necessarily remains app-side — bounded and one-time per app:**

1. **An exception boundary.** Throwing only helps if something catches. Any HTTP app already has this (PracticeForceOne's route modules all end in `catch (Exception e) → 500 SERVER_ERROR`); a batch utility needs a top-level catch. *Obligation: verify it exists — typically zero work.*
2. **A best-effort sweep.** Call sites that *intentionally* tolerate write failure (fire-and-forget audit logs, advisory notifications) must either already wrap the call in `try/catch` (PFO's audit one-liners do — they keep working unchanged under strict mode) or opt out explicitly via the new `aJeo.setBestEffort(true)`. *Obligation: a grep-driven review, hours not days.*
3. **Regenerate + re-verify.** Swap `jac.jar`, regenerate the data layer, recompile, run the app's behavioral suite once in LOG mode before flipping STRICT. *Obligation: one pipeline run plus a burn-in window.*

**Verdict: yes — this is fixable at the JAC level such that apps inherit the fix.** The app-side residue is a half-day-to-two-day adoption checklist per application, not ongoing vigilance. Crucially, after the fix, the *default* is honest: an app that does nothing beyond regenerating gets failures surfaced loudly, and only deliberate, visible opt-outs restore silence.

---

## Part 3 — The JAC evolution, component by component

Design goal: **keep the reply envelope, add a contract.** Backward compatible at every step; legacy behavior remains available by explicit choice, never by accident.

### 3.1 New runtime vocabulary (`jac.jar` — `com.esarks.jac`)

```java
public class JacDataException extends RuntimeException {
    private final String location;   // "AI_FEATURE_FLAGSCrud : batchCreateAI_FEATURE_FLAGS"
    private final String operation;  // CREATE | UPDATE | DELETE | READ
    private final int severity;      // the ErrorJeo severity that triggered the throw
    private final String sqlState;   // e.getSQLState() — safe, no values
    // message = sanitized: title + first line of vendor message, NEVER the SQL text or bound values
}
```

```java
public final class JacErrorPolicy {
    public enum Mode { LEGACY, LOG, STRICT }
    // Resolution order: per-request override > env JAC_ERROR_MODE > generation-time default.
    // LEGACY = today's behavior. LOG = attach error + emit one structured WARN line (adoption mode).
    // STRICT = attach error + rollback + throw JacDataException.
}
```

### 3.2 `ServiceJeo` additions (runtime, no regeneration required to exist)

- `boolean isFailure()` — encapsulates `getMostSevereError() != null && severity < 5`, excluding the severity-10 success notification. One correct predicate, named, documented. Deprecate javadoc-level use of `getErrorSize()` for failure detection.
- `String failureSummary()` — sanitized single line (location + title + SQLState), safe to put in an HTTP 500 body or a log.
- `void throwOnFailure(String label)` — for hand-written callers and the migration period.
- `void setBestEffort(boolean)` / `boolean isBestEffort()` — the *visible* opt-out. Distinct from the existing `iSuppressException` (which keeps its logging-only meaning).

### 3.3 The template fix (`GenerateService.script` L844–920 — the heart of it)

Append to the end of each catch block (and to the post-execute path for batch partial failures), replacing the bare `return;`:

```java
// after attaching ErrorJeo exactly as today (back-compat: reply still carries full detail)
if (lDbConnection != null) {
    try { if (!lDbConnection.getConnection().getAutoCommit()) lDbConnection.getConnection().rollback(); }
    catch (Exception lRb) { /* log */ }
    try { lDbConnection.getConnection().setAutoCommit(true); } catch (Exception lAc) { /* log */ }
}
if (com.esarks.jac.JacErrorPolicy.strict() && !aJeo.isBestEffort()) {
    throw new com.esarks.jac.JacDataException(/* location, op, severity, sqlState, sanitized msg */);
}
if (com.esarks.jac.JacErrorPolicy.log()) { /* one structured WARN line */ }
return;
```

Three properties of this design worth stating:

- **The reply envelope still gets the error first.** Existing guarded callers (`getError()` checks) keep working in every mode. Strict mode is additive.
- **Reads are covered automatically** — same template. A failed read in STRICT throws instead of impersonating an empty result. (`isBestEffort` gives the rare scan-and-tolerate batch job its out.)
- **The connection is cleaned before the throw** — fixing the `25P02` poisoning class in the same change, where it belongs.

### 3.4 Generation-time default (`GenerateJeo.script` / app build config)

A per-app generation option (`errorMode="strict|log|legacy"` in the app's JAC build configuration, default **strict** for newly generated layers) emitted as the policy's baseline, overridable at runtime by `JAC_ERROR_MODE` for burn-in. Old apps that regenerate without reading release notes get STRICT — which is the correct default: the surprising behavior should be the *old* one, opted into knowingly, not the new one.

### 3.5 Adjacent fixes that ride the same release (strongly recommended)

- **Fold the dirty-flag-aware sparse `uidUpdate` into the generator** (today it lives in PracticeForceOne's post-generation injector, `bin/inject-uid-update-helper.py`). This is a PFO-discovered *correctness* fix to the same emission path; folding it in means every JAC app inherits it and PFO retires its three-layer patch.
- **Parameterized where clauses:** add `addWhereParam(...)` binding to the request and emit `PreparedStatement` binds instead of string concatenation. Removes the by-convention `'→''` escaping as the only injection defense. Can ship as a follow-on; the API addition should land with this release so apps can start migrating.

### 3.6 The JAC test bed (what makes this durable)

JAC's output is currently verified only by the applications that consume it — which is exactly how the sparse-uidUpdate defect shipped. Add to `jacBuild24` CI:

1. **Golden-output tests:** fixture table XML → generate → diff emitted `.java` against checked-in goldens. Every template edit becomes a reviewable diff.
2. **Behavioral tests:** compile the fixture Crud, run against a disposable Postgres: (a) forced constraint violation **throws** in STRICT / attaches-only in LEGACY; (b) failed read throws in STRICT; (c) sparse uidUpdate touches only dirty columns; (d) rollback occurred and autocommit is restored after a mid-batch failure; (e) `isFailure()` true exactly when severity < 5 excluding the success notification.
3. **A versioned release artifact:** `jac.jar` + generators tagged (e.g., `jac2026.1`), with release notes — so applications pin and upgrade deliberately.

---

## Part 4 — How applications inherit the fix

### 4.1 The general recipe (any JAC app)

| Step | Work | Typical effort |
|---|---|---|
| 1 | Upgrade `jac.jar` (runtime classes are additive — app compiles unchanged) | minutes |
| 2 | Regenerate the data layer with the new generators; recompile | one pipeline run |
| 3 | Set `JAC_ERROR_MODE=LOG`; run the app's test suite + normal traffic; review WARN lines — each one is a previously-silent failure or a best-effort site | hours of review |
| 4 | Mark intentional best-effort sites: `setBestEffort(true)` (or confirm existing `try/catch` wrapping, which works as-is) | hours |
| 5 | Flip `JAC_ERROR_MODE=STRICT`; burn in; then bake strict in at generation time and remove the env override | days of calendar, minutes of work |
| 6 | Add one forced-failure test per domain (insert violating a constraint → expect surfaced failure) as the permanent tripwire | hours |

Total per app: **half a day to two days of attention**, dominated by step 3's review. The inheritance mechanism is exactly the one JAC already owns: regeneration. That is the deep advantage of fixing this in the generator — the 95-class data layer of an app like PracticeForceOne is *one regeneration away* from the fix, forever, with no per-module work.

### 4.2 PracticeForceOne specifically

- Its route modules universally end in `catch (Exception e) → 500 SERVER_ERROR` — the exception boundary exists; STRICT mode lights up end-to-end with **zero route-module changes**. The ~37 modules that never check `getError()` become honest 500s automatically; the 29 that do check keep working; the audit one-liners (already `try { ... } catch (Exception _ae) {}`) remain best-effort without edits.
- The A0 characterization suite (141 scenarios with read-back-after-write asserts) is the ready-made step-3/step-6 verifier; add one forced-constraint-violation scenario per domain.
- On adoption, PFO retires: `inject-uid-update-helper.py`, `recompile-a1a-patched.ps1`, the per-call-site guard convention in CLAUDE.md (`MR4-CRUD-WRITE-UNCHECKED-REPLY`), and the planned write-guard ratchet — all replaced by the contract.

### 4.3 Sequencing with MR5

This JAC release **is** Stages 0–3 of the [PracticeForceOneMR4PostAssessment](<PracticeForceOneMR4PostAssessment.md>) appendix, relocated to where they belong — the toolchain repo, built and tested independently of any application, then adopted by PFO as its first MR5 hardening act. JAC-side effort: **~3 weeks** (runtime 2–3 days · template + policy 3–5 days · test bed ~1 week · dirty-update fold-in + release packaging the remainder). PFO adoption: the half-day-to-two-day recipe above.

---

## Part 5 — Risks and honest limits

- **Behavior change is the point — and the risk.** A latent always-failing write somewhere (today invisible) becomes a 500 under STRICT. That is the *discovery of an existing bug*, but it surfaces during adoption. LOG mode exists precisely to find these before they throw; budget review time for step 3.
- **Batch semantics need one decision.** `executeBatch()` partial failures: today all rows' errors accumulate and the method returns. STRICT should throw after rollback (all-or-nothing per call). Apps wanting row-tolerant batches use `setBestEffort(true)` and read the per-row errors — the envelope already supports this well.
- **Long-tail JAC apps.** Any other application generated by JAC inherits only when regenerated. Apps never regenerated never inherit — acceptable, but it means the fix propagates with adoption, not by decree. The versioned-release discipline (3.6) is what makes adoption trackable.
- **What this does not fix:** hand-written `PreparedStatement` code in applications (outside the generated layer) keeps its own error handling; app-level *logical* errors (wrong where clause matching zero rows) are not failures and still require read-back-style behavioral tests. The fix makes the data layer honest; it does not make applications correct.

## Verdict

**Yes — this can be done as a JAC fix, and it is the right place to do it.** The defect is a generator-template idiom plus a missing runtime vocabulary; both live in `jacBuild24` and are owned IP. One JAC release (≈3 weeks, including the test bed that prevents the next such defect) converts the contract from "silence unless asked correctly" to "failure is loud unless silenced visibly," and every application inherits by regeneration plus a short, mechanical adoption checklist. The residual app-side work is real but bounded and one-time — and after it, this entire defect class is unrepresentable in any JAC application going forward.

*Sources: ServiceJeo.script L62–63/189–228/255–266 · ErrorJeo.script L79 · GenerateService.script L844–931 (catch templates, severity sets, success notification) · GenerateJeo.script L1477–2172 (generateCrudService) · DbConnection.java L95 · ground-truth generated output data/AI_FEATURE_FLAGSCrud.script L37–50/195–284/1540/1585–1674 · jac.jar build path bin/create-jac23-jar.ps1. All verified 2026-06-12.*

---

## Appendix — As-built deltas (JACJEO agent, 2026-06-12, release `jac2026.1`)

Toolchain pillars J0–J5 are **built and green** (J9 adoption pending). Where the build deviated from this plan:

1. **The sev-0 no-connection path is policy-gated too** (not just the catch templates): a request hitting a dead pool throws under STRICT instead of returning a silent sev-0 envelope.
2. **First-line sanitization was not enough** — PostgreSQL `BatchUpdateException` carries the entire statement *with bound values* on its first line. The sanitizer extracts the server message from batch preambles and truncates at any remaining SQL verb. (Caught live by the behavioral bed, not by review.)
3. **Batch "accumulate-and-continue" was partly mythical on PostgreSQL**: the JDBC driver pipelines the whole batch, so a partial failure already discards earlier entries in every mode. J3.3's STRICT transaction turns that driver artifact into a guarantee; bestEffort differs only in throw-vs-return.
4. **The Option-A fold-in was already half-done in the template** — referencing the *app* class `com.claimsprocessing.util.JacUidUpdateHelper` for every uidUpdate. The helper now lives in `com.esarks.jac` (Jeo-typed param + reflective error reporting keeps jac.jar free of mic-layer dependencies), and helper failures honor the policy gate — a STRICT uidUpdate matching 0 rows throws.
5. **Generation-time default is baked per-Crud** as a static `JacErrorPolicy.setGenerationDefault(...)` initializer (`<errorMode>` in the makeAll config; unset = STRICT).
6. **`addWhereParam` binds trailing placeholders** via `ParameterMetaData` (position-independent of value binds); a literal-only clause mixed with params fails loudly in every mode.
7. **Landmines fixed along the way:** `jac.jar` shipped stale shadow copies of the arm jeo classes (uncleaned `phase1Classes`, and jac.jar precedes mic.jar on every classpath); `classes/` had drifted from committed `.script`/`.java` sources (GenerateService, OutputManager, Script); the legacy `RecompileGenerate*.bat` form (`MakeJac makeJac <component>`) loaded a nonexistent script and silently no-opped — working single-component recompile bats now exist. **(Correction, verified 2026-06-13:** `GenerateDdl`'s emitted `data/<TABLE>.sql` is column-less (header + PK only) for these table shapes — but this is a **vestigial, unused artifact, NOT a defect**: PFO applies schema exclusively from hand-written `ddl/schema/*.sql` + `ddl/migrations`, and no build/deploy step consumes the generated `data/*.sql`. An earlier draft of this appendix called it a "bug worth a row"; that was wrong — it affects nothing deployed. Only matters if a future app ever drives schema from GenerateDdl output.)
8. **Test infrastructure shipped:** `bin/test-generators.ps1` (golden gate, 8 artifacts), `bin/test-jac-runtime.ps1` (51 unit checks), `bin/test-jeo-behavior.ps1` (46 behavioral checks vs a disposable schema on the CP instance, password from Secret Manager at runtime). Release notes: `jacBuild24/RELEASE-NOTES-jac2026.1.md`.

Verdict unchanged: the defect class is now unrepresentable in newly generated code; applications inherit by regeneration (J9 recipe, Part 4).