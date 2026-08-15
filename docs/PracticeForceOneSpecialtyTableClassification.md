---
title: "PracticeForceOneSpecialtyTableClassification"
---

# Specialty Table Classification and Migration Recommendation

**Owner:** AgentDB · **Date:** 2026-07-25 · **Measured against:** the production database (497 tables,
row counts read over JDBC) joined to every `CREATE TABLE IF NOT EXISTS` in `util/` + `server/` and to
the canonical XML.

Deliverable 6 of the founder's clinical-documentation directive: *"Inventory existing specialty
tables and classify each as canonical structured entity / optional structured extension / obsolete or
duplicative / infrastructure only,"* and produce a migration recommendation.

**Nothing here has been migrated or deleted. No production data will be moved or dropped without
explicit founder approval.** This is the inventory and the proposal.

---

## The headline

**587 tables** are creatable by route code. In production:

| | Tables | What it means |
|---|---|---|
| **Never created** | **229** | the runtime `CREATE TABLE IF NOT EXISTS` only fires on first request — these endpoints have never been called once, in production |
| **Exist but hold zero rows** | **286** | created by a call at some point; nothing ever saved |
| **Hold data** | **72** | the real operational data layer |

So of 587 designed tables, **72 (12%) carry data**. The other 88% are the cost of the
"add a route that creates its own table" reflex the documentation directive ends.

## Classification

| Bucket | Count | Rule applied | Disposition |
|---|---|---|---|
| **A — canonical structured entity** | **83** | in the canonical XML, or a core clinical/financial entity the platform calculates, validates, exchanges or trends on (patients, encounters, orders, results, medications, claims…) | keep; promote the stragglers into the canonical XML |
| **B — optional structured extension** | **252** (228 empty) | real structured shape, but only its own screen consumes it | leave in place; **do not** bind documentation templates to it |
| **C — obsolete / never used** | **186** | table absent from production — its endpoint has never been called | retire the DDL (see below) |
| **D — infrastructure only** | **66** | config, queue, log, event, cache, catalog, session — not clinical content | out of scope for the document model |

Full per-table detail: `specialty_table_classification.tsv` (table · owning module · exists ·
rows · in canonical XML · modules referencing · classification).

### The operational core (top of bucket A, by rows)

`source_record_events` 13,660 · `notification_deliveries` 6,054 · `provider_availability` 5,703 ·
`clinical_orders` 5,694 · `dynamic_forms` 5,331 · `engine_configs` 3,766 ·
`dynamic_forms_configuration` 3,121 · `ai_feature_flags` 982 · `documents` 890 ·
`portal_audit_events` 683 · `document_versions` 626 · `review_attestations` 516 · `cds_rules` 483 ·
`patient_addresses` 460 · `portal_patient_requests` 455 · `patient_alerts` 434 ·
`patient_visit_status` 427.

---

## Recommendation

> **Update 2026-07-26 — recommendation 1 now has a destination.** The alternative this section
> pointed at is live and proven: the [Clinical Document Contract](PracticeForceOneClinicalDocumentContract.html)
> (76/76 and 36/36 on build 1974) and its
> [evidence spine](PracticeForceOneClinicalEvidenceContract.html). Two additions since this page was
> written: `DOMAIN` on the document (provable clinical/aesthetic separation) and four CDIE tables —
> `clinical_evidence`, `rule_evaluation`, `clinical_inference`, `documentation_recommendation`.
> **The bucket counts below are unchanged**; the four new tables are canonical (bucket A) by
> construction and are in the canonical XML, not route-created.
>
> One classification consequence worth recording: `injection_administration_log` — bucket B in the
> table below — turns out to be the right canonical home for **lot/recall tracking** (it already
> carries `lot_number`, `manufacturer`, `expiration_date`, `ndc_code`). It is a genuine A, and it
> settles AgentAesthetics' request to promote lot columns onto the document: the entity already
> exists, is not aesthetics-specific, and a recall query must span vaccines and cosmetic injectables
> alike.

### 1. Do not bind documentation templates to bucket B. (No approval needed — it is a rule, not a change.)

The 252 B tables are why the "bind the catalog to the tables that already exist" idea is wrong.
Binding ~1,821 templates to them would cement 537 non-canonical tables permanently. All clinical
documentation goes to the one canonical document entity per
[PracticeForceOne Clinical Document Contract](PracticeForceOneClinicalDocumentContract.html). B tables
keep serving their own screens where a structured requirement genuinely exists.

### 2. Promote two A-bucket tables into the canonical XML. (Low risk, additive.)

Only **two** tables carry real data while sitting outside the governed schema:

| Table | Rows | Owner | Why it qualifies |
|---|---|---|---|
| `patient_immunizations` | 163 | `ImmunizationsRoutes` | immunization history is exchanged (registries), drives forecasting and quality measures |
| `diagnostic_orders` | 154 | `DiagnosticOrdersRoutes` | orders drive work queues, results matching and interoperability |

Both are already-existing tables; promotion means adding them to `ClaimsProcessingDdl.xml` +
`Make.xml` + `Components.xml` and regenerating, exactly as `CLINICAL_FORM_INSTANCES` was added. **No
data moves.** ⚠️ Blocked on the toolchain gap in §5 below.

### 3. Retire the 186 never-created tables — as *code*, not as data. (Safe: there is nothing to delete.)

These 186 tables **do not exist in production**. Retiring them means deleting dead
`CREATE TABLE IF NOT EXISTS` blocks from route modules — there is no data, no table, and nothing to
roll back. It removes 186 latent schema objects that would otherwise be created by the first stray
request, each carrying a DDL-inside-a-request-path risk.

Recommended sequencing: retire only alongside the retirement or rebinding of the route that creates
them, so the two stay consistent. **Founder approval requested** for the principle; the execution is
per-module and reversible by git.

### 4. Leave the 286 empty-but-existing tables alone for now.

Empty is not proof of uselessness — some are awaiting a feature that is genuinely coming. Revisit
after the documentation system is live and it is clear which specialty screens survive. Deleting an
empty table is cheap later; deleting one someone was about to use is not.

### 5. ⛔ Founder decision needed — the generator toolchain gap

The patched JAC generator (`~/.codex/memories/claimsprocessing-local-jdk23` +
`claimsprocessing-jac23-jac.jar`) **does not exist on the current build machine**. Regenerating with
the bundled JDK-24 generator instead rewrote all 106 pre-existing `*Crud.script` files, downgrading
typed JDBC binding to string binding:

```
setTimestamp(2, …getValueTimestamp())  with Types.TIMESTAMP
   ->  setString(2, …toString())       with Types.VARCHAR
```

Those 106 regenerated files were reverted and are **not** committed.

**CORRECTION (verified 2026-07-25, after this was first written): production is NOT at risk from
this.** The cloud pipeline (`pipeline/cloudbuild-deploy.yaml`) runs its **own hermetic `generate`
step (~18 min)** in the toolchain image, and its `compile-data` step *deliberately deletes the
uploaded data `.class` files and javacs the `.java` that cloud generate just emitted* — precisely
because "without this step the image carried whatever bytecode was last committed from a PC." So the
shipped data layer is cloud-generated; a local regeneration cannot reach production, and the new
table's CRUD runs in production as the **cloud** toolchain generates it, not as my machine did.

The residual problem is real but much smaller, and it is about **parity and noise**, not production
safety:

- Local regeneration produces materially different source than the cloud toolchain, so committed
  `data/*.script` files drift from what actually ships and a regen leaves ~106 misleading modified
  files in `git status`. An agent who commits them pollutes the tree for everyone.
- Local `check-module` compiles against locally-generated bytecode that differs from the shipped
  bytecode, so a local compile is weaker evidence than it looks.
- Recommendation 2 (promoting the two tables) still needs a **local** regeneration to produce the
  committed artefacts, so it remains gated on this.

**Ask (downgraded from blocker to hygiene):** restore the patched toolchain on the build machine so
local and cloud generation agree. Meanwhile the working rule is: **after any local regeneration,
`git checkout -- data/` and `git checkout -- jacBuild24/classes/.../data/`, keeping only the new
table's files.**

---

## Method and caveats

- Row counts are `pg_stat_user_tables.n_live_tup` — PostgreSQL's live-tuple estimate. Exact enough to
  separate empty from populated; not an exact count.
- A table is attributed to the module whose source contains its `CREATE TABLE`. A table created by
  one module and written by another is credited to the creator.
- Bucket assignment is **rule-based, not hand-reviewed per table**: canonical-XML membership and
  core-entity name matching drive A; name suffix drives D; existence and row count drive C and B.
  The buckets are a starting point for review, not a verdict — in particular, some B tables are
  arguably A once someone states a reporting requirement for them.
- Measured 2026-07-25. Re-measure before acting; the schema changes frequently.

Related: [PracticeForceOne Clinical Document Contract](PracticeForceOneClinicalDocumentContract.html) ·
[PracticeForceOne Specialty Forms](PracticeForceOneSpecialtyForms.html)
