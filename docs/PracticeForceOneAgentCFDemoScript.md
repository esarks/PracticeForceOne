---
title: "PracticeForceOneAgentCFDemoScript"
---

# EncounterCF — Founder Demonstration Script (CF-13)

**Last reviewed: 2026-07-24**

**Purpose:** demonstrate that PracticeForceOne creates an entire production screen from **configuration alone** — edit a JSON definition, refresh, and the live UI changes with **no code modification, no redeployment, no recompilation**.

**Prerequisites:** logged in as an **admin** role · a practice selected with some encounters (any staging/demo practice works) · build carrying commit `1331569af` or later (check `/api/health` provenance). One-time setup: the default configuration must exist — step 2 covers it.

**Duration:** ~10 minutes.

---

## Part A — The configurable screen working end-to-end (~3 min)

1. **Open EncounterCF** — sidebar: **EHR → EncounterCF**. Point out the caption: *"this page is rendered entirely from a JSON configuration."*
2. **First-run seed (once):** if the grid says no configuration exists, click **Configure → Create default Encounter configuration**. One click; it loads `ui/form-configs/encounter-default.json` into the database as the active default. Click **Back to Search**.
3. **Search** — the grid (Date / Patient / Provider / Type / Status / Chief Complaint) comes from the config's `search.columns`. Type a patient name in the search box — filtering is live; note the pager under the grid (**page size is itself a config value**).
4. **Open an encounter** — click a row. The detail renders from the config: **three tabs (Encounter · Intake / Vitals · Clinical Note) = the config's `pages` array**, sections laid out on the config's grid (`columns`, `span`).
5. **Round-trip the data** — edit Chief Complaint → **Save Encounter** → back to Search → the grid shows the change. Open again → Vitals tab → enter a heart rate → **Save Vitals**. Clinical Note tab → type into Subjective → **Save Note**. Every save goes through the same live APIs the classic Encounter page uses.
6. **Create** — **+ New Encounter** → pick patient/provider (config-defined lookups), date, type → **Save Encounter** → the Vitals and Note tabs unlock (the config's `requiresRecord` behavior).

## Part B — The money shot: change the UI by editing JSON (~4 min)

7. **Configure → Edit** on the default configuration. The JSON is the whole screen. Make three visible edits:
   - **Relabel:** change `"label": "Chief Complaint"` to `"label": "Reason for Visit"`.
   - **Add a field:** in the vitals section's `fields` array, add
     `{ "id": "bloodGlucose", "label": "Glucose (mg/dL)", "type": "number", "min": 20, "max": 600 }`.
   - **Change paging:** set `"pageSize": 5` in `search`.
8. **Save Configuration** → **Back to Search** → **Refresh**.
9. **Observe:** the grid now pages 5 at a time; open an encounter — the field says *Reason for Visit*; the Vitals tab has a Glucose field. **No code was modified. Nothing was redeployed. Nothing was recompiled.** (Revert the edits the same way, or keep them.)

## Part C — Competing configurations (~2 min)

10. **Configure → + New Configuration** — starts from a copy of the default. Rename it (e.g. *Encounter — front desk*), delete the Clinical Note page from the JSON, save as **draft**.
11. Back on Search, the **configuration dropdown** now lists both. Pick the new one → open an encounter → two tabs only. Pick the default → three tabs. **Set as Default** flips which one the practice gets — same data, different screens, selectable at runtime.

## What this proves

- A production screen (search → multi-page detail, create/update, clinical sub-saves) is **fully described by a JSON definition**: data fields, UI placement, pages, bindings, lookups, paging, validation.
- Changing the definition changes the live screen **instantly, with zero deployment** — the "new forms without software development" model.
- Multiple definitions coexist and are switchable per screen — the foundation for per-practice and per-role variants, and for offering eCW-style vs Cerner-style layouts side-by-side.
- All of it rides the existing hardened platform: same APIs, RBAC, tenant scoping, audit — nothing was bypassed to make it configurable.

**v1 limits — UPDATED 2026-07-24:** The original "v1 limits" list (appointment attach, diagnoses, medications/eRx, sign workflow) is **no longer accurate** — all of these are now configurable on the CF platform. As of build 1943 / CF-24 checklist: collections (diagnoses, medications), typeaheads (ICD-10, RxNorm), eRx ordering, sign workflow, collection row actions, and computed fields are all live. The primary remaining constraint is that patient/provider are locked after create (the underlying API updates only date/type/status/chief-complaint).

*Evidence pack: [PracticeForceOneCFTable](<PracticeForceOneCFTable.md>) CF-12 row · `bin\uat-characterize.ps1 cf` results in BUILD-STATUS.md · conversion SOP: [PracticeForceOneAgentCFConversionPattern](<PracticeForceOneAgentCFConversionPattern.md>).*

## Review Epilog — 2026-07-24

- Demo script steps A/B/C remain valid and representative — the JSON-edit → live-UI change proof still works exactly as written.
- The original "Known v1 limits" section was stale; updated above: collections/typeaheads/eRx/sign are all now configurable per CF-24 checklist.
- CF-14 (August demo path) is GATE GREEN on build 1943 (251/251); this demo script feeds directly into the demo path.
- The `cf.html` generic host is the current runtime entry point; `encounter-cf.html` remains as a legacy alias.
