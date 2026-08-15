---
title: "PracticeForceOnePracticeConfiguration"
---

# PracticeForceOne — Practice Configuration

**Last reviewed: 2026-07-24**

**What it is:** a **generic, per-practice configuration console**. It's *one* screen that renders a **schema**
(sections + fields) for any group of practice settings, backed by the per-practice × stage definition engine.
Its first schema is **Practice Defaults** — the practice-wide behavior toggles eCW calls the *Practice Defaults*
console (ECW **AD-7 / AD-23**). Because the console is schema-driven, the other eCW admin consoles (Global Alerts,
Mandatory Fields, Vitals Config, Security Settings…) become **new schemas, not new screens**.

- **URL:** `/ui/practice-config.html` · **Menu:** System → **Practice Configuration** (admin only)
- **Storage:** `engine_configs`, `config_type='practice_defaults'` (one config_type per schema), `key='default'`,
  scoped **per practice × stage** (see *Per-practice lifecycle*). Values are a single JSON object of settings.
- **Owner:** AgentUI (console + schemas). The per-practice engine is stewarded by AgentPlatform.

> **Platform idea:** these are *definitions*, not code. Nothing is a hand-built settings page — the console reads a
> schema and writes a JSON settings object per practice. Add a schema → get a new admin console for free.

---

## 1. The controls

At the top of the page:

| Control | What it does |
|---|---|
| **Console** ("What to edit") | Which settings group (schema) you're editing — currently **Practice Defaults**. |
| **Practice** | *Global template*, or a specific clinic. |
| **Stage** | *Pre-production* (draft) or *Production* (live). Hidden on the Global template. |
| **Save** | Persists to the selected Practice + Stage. |
| **Copy from…** | Seed this practice's Pre-production from another practice or the Global template. |
| **▶ Promote to Production** | Publish this practice's Pre-production definitions to Production (live). |

Below the controls: the settings **form** (grouped into sections), and a **Configuration JSON** box (the form and
JSON edit the same object — **Apply JSON** loads hand-edits back into the form, then **Save**).

---

## 2. Practice Defaults — the settings it manages

Grouped into sections; each field is a toggle / text / number / dropdown.

### Front Office
| Setting | Type | Meaning |
|---|---|---|
| New-patient default sex | dropdown | Prefill sex for a new patient. |
| New-patient default state | text | Prefill state. |
| Account-number prefix | text | Prefix applied to new account numbers. |
| Convert demographics to Proper Case | toggle | Auto proper-case names/addresses on entry. |
| Patient lookup shows Active only (vs All) | toggle | Default patient-search scope. |
| Show Pay-To / Rendering / Supervising provider fields on appointment dialog | toggles | Which provider fields appear when booking. |
| Resource-schedule default color | text | Default color for resource columns (e.g. `#dbeafe`). |

### Referral Visit Defaults
Auto-populate dx into outgoing referral · attach progress notes by default · attach medical summary by default ·
suppress "referral required" prompt · include cover page · default referral end-date (days).

### Eligibility
Eligibility viewer version (Modern / Classic / Older) · enable PCP verification from the eligibility report.

### Clinical / Vitals
Immunizations billable by default · immunization admin CPT · medication carry-forward window (days) · confirm before
carrying meds forward · medication-reconciliation mode (Modern / Classic).

> A **Global template** ships pre-seeded with sensible defaults (e.g. Proper-Case on, Eligibility = Modern,
> med carry-forward 180 days), so a new practice starts from a reasonable baseline.

> **Runtime binding (honest status):** the console *authors and stores* each setting per practice today. Each
> setting takes effect wherever the app runtime reads `practice_defaults` for it — that wiring is being added
> progressively (this is the 🟡→🟢 deepening for AD-7/AD-23). The store, the console, and the per-practice
> lifecycle are complete and live.

---

## 3. Per-practice lifecycle — the core idea

Every practice has its **own** settings, in **two stages**:

- **Pre-production (`preprod`)** — your **draft**. Edit here; the live clinic is not affected.
- **Production (`prod`)** — what the runtime uses for that practice.
- **Global template** — the master copy new practices are cloned from.

**Edit in Pre-production → review → Promote to Production.** Nothing is live until you Promote (or you save directly
on the Production stage).

---

## 4. How to use it — walkthroughs

### A. Change a practice's defaults safely
1. **Console** = Practice Defaults · **Practice** = your clinic · **Stage** = **Pre-production**.
2. Toggle/enter settings across the sections. (The JSON box mirrors your edits.)
3. **Save** → saved to Pre-production (not live).
4. **▶ Promote to Production** → live for that clinic.

### B. Start a new/other practice from the template
1. **Practice** = the clinic · **Stage** = Pre-production.
2. **Copy from…** → `global` (the template) → adjust → **Promote to Production**.

### C. Roll the same defaults out to many practices
Use **Definition Propagation** (System → Definition Propagation): **What to copy** filters by definition type; pick the
source practice/stage and one or many destination practices/stage. (Copying into Production overwrites live — you'll be
asked to confirm.)

---

## 5. Adding a new console (for maintainers)

A new admin console = a new **schema** entry (no new page). A schema is:

```jsonc
{ "title": "Global Alerts", "configType": "global_alerts",
  "sections": [
    { "title": "…", "fields": [
      { "key": "…", "label": "…", "type": "toggle|text|number|select|textarea", "options": ["…"], "help": "…" }
    ] }
  ] }
```

Add the schema → it appears in the **Console** dropdown, stores under its own `configType` per practice × stage, and
gets Save / Copy / Promote for free. This is how eCW **AD-22 (Global Alerts)**, **AD-18 (Mandatory Fields)**,
**AD-26 (Vitals Config)**, **AD-9 (Security Settings)** are planned — as schemas, not screens.

---

## 6. Quick reference

| Action | Where |
|---|---|
| Edit a practice's settings | Practice Configuration → pick Console + Practice + Stage |
| Save a draft | **Save** (writes to selected Practice + Stage) |
| Make it live for a clinic | **▶ Promote to Production** |
| Seed from the template / another practice | **Copy from…**, or **Definition Propagation** |
| Preview vs live | **Stage** = Pre-production vs Production |

**Related:** `PracticeForceOneWorkflowEditor` (the same per-practice × stage model for workflows),
`PracticeForceOneECWRollup` (AD-7/AD-23 status), `PerPracticeDefinitionsPlan.md` (ArchitectsCompanion repo).

*Maintained by AgentUI.*

---

## Review Epilog — 2026-07-24

- Live build 1943, gate 251/251 GREEN. The console, per-practice×stage lifecycle, and Definition Propagation workflow are all live and accurate as described.
- Platform context note: per-practice definitions are the long-term goal (ALL definitions scoped per-practice); the current interim scope is org-level. The migration is planned post-August. This console is a leading edge of the per-practice model.
- No content changes needed — the schema-driven console architecture, field descriptions, and walkthrough steps remain accurate.
