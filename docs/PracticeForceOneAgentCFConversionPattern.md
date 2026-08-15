---
title: "PracticeForceOneAgentCFConversionPattern"
---

# Configurable Forms — Canonical Conversion Pattern (SOP)

**Last reviewed: 2026-07-24**

**Status:** v1, written from the proven EncounterCF reference implementation (`1331569af`) · **Owner:** AgentCF · **Audience:** any agent/engineer converting a traditional PracticeForceOne screen into a Configurable Form. Follow this document literally; future conversions should require **no architectural decisions**.

**The model in one paragraph:** a screen = one **pfo-cf-v1 JSON definition** stored in `DYNAMIC_FORMS_CONFIGURATION` (one `formType` per screen family, many selectable definitions, exactly one `active` = the default). The definition declares the **search grid**, the **detail form** (pages → sections → fields with UI placement), the **lookups**, and the **data bindings** that point at the entity's existing REST endpoints. A shared runtime (`encounter-cf.js` pattern) renders everything from the definition; the server module `FormConfigurationsRoutes` stores/validates/defaults definitions. Data operations ride the entity's already-hardened routes — CF adds **no new data-access surface**, which is why RBAC, tenant scoping, audit, and ratchets carry over for free.

---

## Step 0 — Preconditions (don't skip)

| Check | How |
|---|---|
| Entity has generated JEO/CRUD | `data/<TABLE>.script` exists; if not, add the table to `ClaimsProcessingDdl.xml` + regenerate (never hand-edit `data/*.script`) |
| Entity has REST routes | list / read-by-id / create / update in a `util/<X>Routes.script` module; note the exact URL shapes and response wrappers |
| **Field-level update contract** | Read the PUT handler and list WHICH fields it actually updates — anything else is `createOnly` in the definition (Encounter lesson: PUT updates only 4 of 8 fields) |
| Reference screens | Pull the entity's screens from AgentECW (eCW) and AgentCerner (Cerner) for field inventory + grouping; where they disagree, author BOTH as competing definitions |

## Step 1 — Author the definition (the JSON file)

Create `ui/public/form-configs/<entity>-default.json`. Contract reference (all proven in the Encounter seed):

```jsonc
{
  "contract": "pfo-cf-v1",
  "entity": "<table>",                     // documentation; data access is via the bindings below
  "idField": "id",
  "description": "…including what is NOT yet configurable",
  "lookups": {                             // id -> label directories for lookup fields + grid columns
    "<name>": { "url": "/api/…?practiceId={practiceId}", "itemsKey": "<key>",
                "valueField": "id", "labelFormat": "{lastName}, {firstName}" }
  },
  "list": { "method": "GET", "url": "/api/<entities>?practiceId={practiceId}" },
  "search": {
    "placeholder": "…", "emptyMessage": "…", "pageSize": 25,
    "columns": [ { "field": "…", "label": "…" },
                 { "field": "<fkId>", "label": "…", "lookup": "<name>" },   // renders resolved label
                 { "field": "status", "label": "Status", "render": "status" } ]
  },
  "pages": [                               // one page = one tab; multi-page is first-class
    {
      "id": "main", "title": "…",
      "binding": {                         // the ENTITY page: create/update/read
        "read":   { "method": "GET",  "url": "/api/<entities>/{id}" },
        "create": { "method": "POST", "url": "/api/<entities>", "carry": { "practiceId": "{practiceId}" } },
        "update": { "method": "PUT",  "url": "/api/<entities>/{id}" },
        "saveLabel": "Save <Entity>"
      },
      "sections": [
        { "id": "…", "title": "…", "columns": 2,          // UI placement: section grid
          "fields": [
            { "id": "<jsonField>", "label": "…", "type": "lookup", "lookup": "<name>",
              "required": true, "createOnly": true },      // createOnly = editable on create, locked on update
            { "id": "…", "type": "date|text|textarea|number|range|select|checkbox|tel|email|heading|collection",
              "choices": [{ "value": "…", "label": "…" }], // select/radio
              "min": 0, "max": 10, "step": 1, "rows": 3, "placeholder": "…",
              "placement": { "span": 2 } },                // UI placement: grid colspan
            { "id": "<children>", "label": "…", "type": "collection",   // repeating child rows (diagnoses, meds, claim lines…)
              "itemLabel": "Diagnosis", "addLabel": "Add Diagnosis",
              "binding": {
                "read":   { "method": "GET", "url": "/api/…/{id}", "itemsKey": "<rowsKey>" },   // {patientId} etc. resolve from the entity record
                "create": { "method": "POST", "url": "/api/…/{id}/<children>", "carry": { "sourceEncounterId": "{id}" } },
                "delete": { "method": "DELETE", "url": "/api/…/{id}/<children>/{itemId}" },     // optional; omit = read/add only
                "rowKey": "id" },
              "columns":    [ { "field": "…", "label": "…" } ],                                 // the rows table ("render":"bool" supported)
              "itemFields": [ { "id": "…", "label": "…", "type": "<scalar type>", "required": true } ] }  // the inline add-entry form
          ] }
      ]
    },
    {
      "id": "sub", "title": "…", "requiresRecord": true,   // locked until the entity exists
      "binding": {                         // a SUB-RESOURCE page: read latest + save
        "read": { "method": "GET", "url": "/api/<entities>/{id}/<sub>", "itemsKey": "<arr>", "pick": "first" },
        "save": { "method": "POST|PUT", "url": "/api/<entities>/{id}/<sub>", "includeReadId": true },
        "saveLabel": "…", "saveNote": "…"  // includeReadId: carry the read row's id so save updates it
      },
      "sections": [ … ]
    }
  ]
}
```

Field `id`s are the **camelCase JSON field names of the API**, not DB columns. Runtime semantics: responses are unwrapped from `{success,data}`; `itemsFrom` handles bare arrays and `itemsKey`; `{practiceId}`/`{id}` template into URLs; numbers are sent as numbers; empty values are omitted from save bodies (partial-update semantics).

## Step 2 — Seed + storage (no new tables, no schema change)

Definitions live in `DYNAMIC_FORMS_CONFIGURATION` with `form_type = '<entity>_cf'`. The runtime's Configure view seeds from the JSON file (admin one-click). Server: **`util/FormConfigurationsRoutes.script` already handles every screen family** — GET list (staff, `formType` required), PUT upsert (admin, validates pages→sections→fields, choices, lookup references), POST set-default (active-singleton per formType). **Do not build a per-entity config route.**

## Step 3 — Host page + runtime

Copy the `encounter-cf.html`/`encounter-cf.js` pair to `<entity>-cf.*`, change `CF_FORM_TYPE`/`CF_SEED_URL`/titles, bump the cache token (`?v=…`). *(Roadmap: a single generic `entity-form.html?formType=…` host replaces the copy step — improve the runtime, never fork it; runtime fixes go in the shared pattern so every form benefits.)* Add the sidebar item in `ui/public/sidebar.js` with the entity's `perm`.

## Step 4 — Security rules (inherited, but verify each)

- **RBAC:** data ops hit the entity's existing routes → their permission gates apply unchanged. Config writes are admin-only in `FormConfigurationsRoutes`. The sidebar item carries the view perm.
- **Tenant scoping:** the list/read/create/update endpoints already scope by `practice_id`/org subquery (patients scope via `practice_id → practices.org_id`). The definition carries `practiceId` via `carry` — the SERVER remains the enforcer; never rely on the config.
- **Injection/XSS:** the runtime escapes every label/choice/value via `PfoEscape`; where-clauses in FormConfigurationsRoutes use `SqlSafe.lit()`; the jsonb upsert is the sanctioned ON CONFLICT PreparedStatement pattern. No raw SQL anywhere else — generated CRUD only.
- **Write honesty:** primary generated-CRUD writes reply-checked (`getError().getSeverity() < 5`); best-effort loops carry the `// reply-unchecked:` marker (ratchet-enforced).

## Step 5 — UAT requirements (B7: behavioral scenarios, never static tests)

Add to `bin\uat-characterize.ps1`'s **`cf` domain**:
1. A **binding-contract probe** for the entity (CF-3 pattern): create a disposable record via `New-Uat<X>` helper → assert list contains it → detail reads → update round-trips → each sub-page binding reads/saves. Self-fixture, cleanup or ClearDLP-tagged reason string.
2. The generic CF-1 (config round-trip + validation-reject) and CF-2 (set-default state-neutral) scenarios already cover the store — extend only if the entity's config uses new contract features.

## Step 6 — Ship + prove

`bin\check-module.ps1` (if server code changed) → **add any new `util/*.script` to `bin/phase0.ps1`'s manifest list (the trap)** → `phase0.ps1` → `compile-router.bat` (if router changed) → architecture/write-reply/where-clause ratchets → commit (tree must be clean — the cloud lane refuses dirty) → `bin\cloud-deploy.ps1` → verify `/api/health` provenance → seed the default config as admin → `bin\uat-characterize.ps1 cf` → record build + results in `BUILD-STATUS.md`/`StatusPlan.md` → flip the row in [PracticeForceOneCFTable](<PracticeForceOneCFTable.md>).

## Per-conversion checklist (copy into the PR/table row)

```
[ ] Step 0: CRUD + routes exist; PUT field contract documented -> createOnly set
[ ] Reference screens pulled (ECW/Cerner); disagreements -> competing configs
[ ] ui/form-configs/<entity>-default.json authored + validates on PUT
[ ] Host page + sidebar item + cache token
[ ] RBAC/tenant/escape/ratchet review (Step 4 bullets, each verified)
[ ] cf-domain binding-contract scenario added
[ ] phase0 manifest updated (if new server module)
[ ] Deployed via cloud lane; health provenance verified
[ ] Default seeded; uat-characterize cf green; BUILD-STATUS + table updated
[ ] Definition edit -> live UI change demonstrated (the acceptance test)
```

*Reference implementation: EncounterCF (`ui/form-configs/encounter-default.json`, `util/FormConfigurationsRoutes.script`, `ui/public/encounter-cf.*`). Demo: [PracticeForceOneAgentCFDemoScript](<PracticeForceOneAgentCFDemoScript.md>). Backlog/north star: [PracticeForceOneCFTable](<PracticeForceOneCFTable.md>) (CF-24 full-fidelity checklist).*

## Review Epilog — 2026-07-24

- Content accurate as of build 1943: the step-by-step SOP, definition-of-done checklist, and field-type reference remain the authoritative onboarding path for CF conversions.
- The `encounter-cf.js` pattern referenced in the overview is superseded — the runtime has consolidated onto the generic `cf.html` host with `cf-runtime.js`; the underlying SOP steps (define → seed → bind → gate) are unchanged.
- CF catalog has grown from the original ~10 screens to 540+ definitions live; the SOP has proven itself at scale.
- Field types confirmed current: text, select, textarea, number, date. `boolean` is NOT a valid type — use `select` with yes/no choices instead.
