---
title: "PracticeForceOneRcmChargeRuling"
---

# RCM Charge Ruling — when does an insured clinical service become a CHARGE?

**Author:** AgentARCH · **Issued:** 2026-08-12 · **Founder directive §39** · **Live at ruling:** build 2235 (`a91fb6572`)
**Companion:** [PracticeForceOneArchitectureSweep2026-08-12](PracticeForceOneArchitectureSweep2026-08-12.html)

The founder asked for this rule explicitly so that it would **not** *"emerge accidentally from whichever
developer touches billing first."* It is measured against the code, not proposed from theory.

---

## THE RULING (short form)

**A clinical service becomes a CHARGE at the moment charge review posts it — not when the service is
performed, and not when the note is signed.**

The seven states below are distinct, ordered, and each has **exactly one writer**. Any code that computes a
money fact belonging to a state it does not own is a bug, regardless of how correct its arithmetic is.

| # | State | Meaning | System of record |
|---|---|---|---|
| 1 | **SERVICE PERFORMED** | clinical work happened | `encounters` / `encounter_notes` |
| 2 | **CHARGE CREATED** | the practice asserts a billable amount | `encounter_charges` |
| 3 | **CLAIM SUBMITTED** | the charge is asserted to a payer | `claims` + `claim_lines` |
| 4 | **INSURANCE RESPONSIBILITY** | what the payer agreed to pay | `claim_lines.allowed_amount` / `paid_amount` |
| 5 | **CONTRACTUAL ADJUSTMENT** | what nobody will ever pay (write-down) | `claim_lines.adjusted_amount` |
| 6 | **PATIENT RESPONSIBILITY** | what the patient owes for this claim | `claim_lines.patient_amount` |
| 7 | **PATIENT ACCOUNT** | what the patient owes the practice, all-in | `patient_account_transactions` |

**States 1→2 is the charge boundary. States 6→7 is the boundary this platform currently gets wrong.**

---

## MEASURED — what the code does today

`encounter_charges` (`ddl/schema/51_practice_ehr_bridge.sql:173`) carries `procedure_code`, `units`,
`charge_amount`, `source` (default `'manual'`), `source_note_id`, and `charge_review_id` — so a charge is
already modelled as a *reviewed artifact*, not a by-product of signing. `charge_review_queue` gates it with
`status DEFAULT 'ready_for_review'` and a nullable `claim_id`. **The intended boundary is already in the
schema.** Good — the ruling names existing structure rather than inventing it.

`ClaimBusinessLogic.script` is the **single** charge→claim writer (measured: one `claim_lines` insert path,
operating on the route's already-locked `charge_review_queue`/encounter row). **State 2→3 is correctly
governed today and must stay that way.**

---

## FINDING R1 — the patient account ledger is the least-governed table in the platform. **CRITICAL**

`patient_account_transactions` is the ratified system of record for patient balance. Measured:

```
CREATE TABLE created at:  util/PatientLedgerRoutes.script:24   <-- runtime DDL, inside a ROUTE MODULE
present in data/ClaimsProcessingDdl.xml:  0 occurrences        <-- outside the canonical schema
generated CRUD class (data/PATIENT_ACCOUNT_TRANSACTIONS*):  none
```

And its shape:

```
org_id       VARCHAR(64) NOT NULL      -- not UUID, no FK
practice_id  VARCHAR(64) NOT NULL      -- not UUID, no FK
patient_id   VARCHAR(64) NOT NULL      -- not UUID, NO FOREIGN KEY TO patients(id)
claim_id     VARCHAR(64)               -- no FK
balance_after DECIMAL(10,2)            -- denormalised running balance
```

**Every other patient-scoped table in the platform uses `UUID REFERENCES patients(id)`.** The money ledger
does not. Three consequences, all live:

1. **No referential integrity on money.** A patient can be removed and their ledger rows orphan silently.
   This is not hypothetical: on 2026-08-12 `ClearDLP` was *blocked* by `payment_transaction` precisely
   because that table has `patient_id UUID REFERENCES patients(id) ON DELETE RESTRICT`. The ledger would
   never have blocked it — it would have been **silently orphaned instead**, which is worse, because a
   failed delete is loud and an orphaned ledger row is not.
2. **It bypasses the Unified Persistence Contract.** CLAUDE.md: *"JAC-generated CRUD is the durable
   relational spine (system of record)."* The single most financially consequential table has no generated
   CRUD, so none of the write-integrity machinery — dirty-flag contract, reply honesty, the ratchets — can
   reach it.
3. **It is one of the 245 request-path `CREATE TABLE` sites** from the sweep's D1, and it is outside
   `applyPendingMigrations()`. The schema-lifecycle rule and the money model fail together here.

**RULING R1:** `patient_account_transactions` moves into `data/ClaimsProcessingDdl.xml`, gets generated CRUD,
gets `UUID` keys with a real FK to `patients(id)`, and is created by migration — never by a route.
**Owner: @AgentDB.** Two-phase per the db11 pattern (the table exists live; XML + regen first, typed
migration second). **Until that lands, no new writer may be added to it.**

---

## FINDING R2 — two disjoint populations answer "what does the patient owe?" **HIGH**

```
modules writing claims.patient_responsibility : 8
  ClaimBusinessLogic · ClaimsRoutes · EobRoutes · EraRemittanceRoutes
  EraRoutes · ManualPaymentsRoutes · PatientChargeDetailsRoutes · PaymentsRoutes

modules writing patient_account_transactions  : 4
  PatientLedgerRoutes · PatientPaymentsRoutes · PaymentPlatformRoutes · PaymentService
```

**The two sets do not intersect.** State 6 (claim-level patient responsibility) and state 7 (the patient's
account) are written by entirely different code that never meets. There is no measured posting path that
carries a claim's `patient_amount` into the ledger as a charge.

This is the money-model instance of the founder's rule — *one source for every clinical verdict* — and the
verdict here is **"what does this patient owe?"**, asked at the front desk every day.

**RULING R2:** state 6→7 is a **posting event with exactly one writer.** When adjudication finalises a
claim's patient responsibility, that amount posts to `patient_account_transactions` as a typed transaction,
idempotently, once. The ledger is the only answer to "what does the patient owe"; a claim's
`patient_amount` answers only "what did this claim leave to the patient." **Owner: @AgentDB**, on the
already-ratified additive dual-write. **@AgentARCH owes the checker** that fails when a ninth module learns
to write `patient_responsibility` without posting.

---

## FINDING R3 — three parallel roll-ups of the same number. **MEDIUM**

```
claims.balance                 vs  SUM(claim_lines.balance)
claims.patient_responsibility  vs  SUM(claim_lines.patient_amount)
patient_account_transactions.balance_after  (a third, denormalised, per-row)
```

Every one is a stored aggregate of a value that also exists in detail. Stored roll-ups are legitimate for
performance, but only with a single owning writer and a reconciliation check. Today there are eight writers
(R2) and no reconciliation.

**RULING R3:** header totals are **derived, not asserted.** One function computes claim totals from
`claim_lines`; no route sets `claims.balance` directly. `balance_after` is a **display convenience and never
a source of truth** — the balance is `SUM(amount)` over non-voided ledger rows, and any reader that trusts
`balance_after` instead is a defect. **Prior art is unambiguous:** a 201 plus a row id while the ledger never
moved is exactly how this platform previously reported money it had not recorded.

---

## THE CHARGE BOUNDARY — stated so it cannot drift

**A service performed is not a charge. A signed note is not a charge.** A charge exists when
`encounter_charges` holds a row with a `charge_amount`, posted through charge review.

Rationale, and it is clinical as much as financial: **signing is a clinical act, and the founder's own
directive (§29) says the platform must not take the physician's signing authority away.** If signing created
charges, every documentation decision would become a billing decision, and the incentive to sign accurately
would collide with the incentive to bill correctly. Charge review is the correct seam because it is where a
human accepts financial responsibility for the assertion.

**Corollary:** an autopilot or reasoner may **propose** a charge (`source` is already modelled, default
`'manual'`); it may never post one. *Reasoners propose; governed PFO services execute.*

## Medical vs Aesthetics

**One accounting model, differing by configuration only.** A cash-pay aesthetic service still transits
states 1→2→7; it simply skips 3–6 (no payer, no adjudication, no contractual adjustment). **That is a
configured route through the same states, not a second money model.** Any proposal for an aesthetics-specific
ledger, balance or charge table is refused under this ruling — see the do-not-build list.

---

## What I did NOT measure

- **Whether the eight `patient_responsibility` writers currently disagree.** I proved the writer set is
  disjoint from the ledger set; I did not diff their outputs on live data. Assume divergence until measured —
  prior art on two evaluators is that they drift silently.
- **`patient_copay_ledger`** (also created in `PatientLedgerRoutes`) — a possible fourth balance notion. Not
  characterised; flagged.
- **ERA/EOB posting paths** end to end. `EraRemittanceRoutes` and `EobRoutes` write state 4/5/6 values; I did
  not trace whether they post to state 7.

## Ranked actions

| # | Action | Owner |
|---|---|---|
| 1 | Ledger into the canonical XML + generated CRUD + UUID/FK + migration-created | @AgentDB |
| 2 | Single idempotent posting path, state 6 → state 7 | @AgentDB |
| 3 | Checker: a `patient_responsibility` writer that does not post is a build failure | **@AgentARCH** |
| 4 | Claim header totals derived from lines, one writer | @AgentDB |
| 5 | Characterise `patient_copay_ledger`; fold in or retire | @AgentDB + ARCH |

**This ruling is registered. Superseding it requires a measured argument, not a preference.**
