---
title: "PracticeForceOneMenuKey"
---

# PracticeForceOne Menu Key

**Purpose:** the complete reference of every link, icon, permission, and field you can use when
configuring the sidebar in the **Menu Editor** (or via `PUT /api/engine-configs type=menu`).

Last generated: 2026-07-19 (from live code + the CF catalog on build 1839). **Last reviewed: 2026-07-24** (current live build: 1943; 540+ CF definitions live).

---

## 1. How the menu resolves (read this first)

The sidebar is **definition-driven**. At load, `sidebar.js` asks the Menu engine for the stored
menu definition:

```
GET /api/engine-configs?type=menu&key=default
```

- If a **stored definition** exists for your org, **it wins** — the in-code default is only a fallback/seed.
- The **Menu Editor** (`/ui/menu-editor.html`, System zone, admin only) writes that stored definition.
  Changes take effect on **refresh, with no deploy**.
- Because the stored definition overrides code, editing `sidebar.js` alone will *not* change a live menu
  that already has a stored definition. Use the Menu Editor (or the PUT above).

The definition is a JSON array of **zones**, each containing **items**.

---

## 2. Definition structure

```jsonc
[
  {
    "id": "today",                 // unique zone id (any short slug)
    "label": "Today",              // zone heading shown in the sidebar
    "icon": "home",                // zone icon (see §4)
    "items": [
      { "href": "/ui/dashboard.html", "icon": "home", "label": "Dashboard", "perm": "dashboard.view" },
      { "href": "/ui/kanban.html",    "icon": "clipboard-list", "label": "Kanban", "perm": "kanban.view" }
    ]
  },
  { "id": "revenue", "label": "Revenue", "icon": "cash", "items": [ /* ... */ ] }
]
```

---

## 3. Item field reference

| Field | Type | Required | Meaning |
| --- | --- | --- | --- |
| `label` | string | ✅ | Text shown in the sidebar. |
| `href` | string | ✅ for link items | The URL to open (see §6 for the full catalog). |
| `icon` | string | recommended | One of the icon names in §4. Unknown names render **blank** (link still works). |
| `perm` | string | optional | Permission gate — item is **hidden** unless the user holds this permission (see §5). |
| `adminOnly` | boolean | optional | Item shows only for `admin` / `super_admin` roles. |
| `newTab` | boolean | optional | Opens the link in a new browser tab. |
| `type` | string | optional | Set to `"workflow"` to render a workflow's steps as nav instead of a static link (see §7). |
| `workflow` | string | with `type:"workflow"` | The workflow key to expand (e.g. `"primary-visit"`). |

**Two item kinds:**
- **Link item** — has `href` (+ `label`, `icon`, optional `perm`/`adminOnly`/`newTab`).
- **Workflow item** — has `type:"workflow"` + `workflow:"<key>"` (+ `label`, `icon`). No `href`.

---

## 4. Valid icons (28)

Use any of these exact names for `icon`. Anything else renders as a blank glyph.

```
home            building        users           user-circle     office
document        document-text   upload          cash            credit-card
layers          exclamation     clipboard-list  clipboard       shield-check
book            tag             calendar        folder          chart
lightbulb       building-office user-group      eye             database
server          beaker          cog
```

> Note: some legacy sidebar entries reference `squares-2x2`, `bars-3`, `lock-closed`, `phone` — these are
> **not** in the icon set and render blank. Prefer a name from the list above.

---

## 5. Permission gates (`perm`)

Set `perm` to hide an item from users who lack that permission. Gates in use:

```
dashboard.view      kanban.view        calendar.view      patients.view
providers.view      claims.view        eligibility.view   edi.view
payments.view       denials.view       reports.view       practices.view
payers.view         users.view         erx.view           ai.predictions.view
```

Omit `perm` to show the item to everyone (still subject to `adminOnly` if set). Use `adminOnly: true`
for admin-only tools regardless of a specific permission.

---

## 6. Link catalog — every internal page

All internal pages live under `/ui/`. Below, grouped by purpose. Any of these is a valid `href`.

### Today / Home
| href | Suggested label | Suggested perm |
| --- | --- | --- |
| `/ui/dashboard.html` | Dashboard | `dashboard.view` |
| `/ui/kanban.html` | Kanban | `kanban.view` |
| `/ui/tracking-board.html` | Tracking Board | `calendar.view` |
| `/ui/office-visits.html` | Office Visits | `calendar.view` |
| `/ui/worklist.html` | Work Queue | — |

### Scheduling & Front Desk
| href | Suggested label | Suggested perm |
| --- | --- | --- |
| `/ui/practice-ehr-calendar.html` | Calendar | `calendar.view` |
| `/ui/practice-ehr-provider-calendar.html` | Provider Calendar | `calendar.view` |
| `/ui/practice-ehr-availability-templates.html` | Availability Templates | `calendar.view` |
| `/ui/CheckInOut.html` | Check-In / Out | `calendar.view` |
| `/ui/eligibility.html` | Eligibility | `eligibility.view` |
| `/ui/eligibility-queue.html` | Eligibility Queue | `eligibility.view` |
| `/ui/check-patient-insurance.html` | Check Insurance | `eligibility.view` |
| `/ui/verify-insurance.html` | Verify Insurance | `eligibility.view` |
| `/ui/verify-insurance-match.html` | Verify Insurance Match | `eligibility.view` |

### Clinical / EHR
| href | Suggested label | Suggested perm |
| --- | --- | --- |
| `/ui/practice-ehr.html` | EHR Home | — |
| `/ui/encounters.html` | Encounters | `patients.view` |
| `/ui/encounter-cf.html` | EncounterCF | `patients.view` |
| `/ui/practice-ehr-encounter.html` | New Encounter | `patients.view` |
| `/ui/patient-chart.html` | Patient Chart | `patients.view` |
| `/ui/patient-chart-cf.html` | Patient ChartCF | `patients.view` |
| `/ui/documents.html` | Documents | — |
| `/ui/confidential-charts.html` | Confidential Charts | admin |
| `/ui/recall.html` | Patient Recall | — |
| `/ui/ai-features.html` | AI Billing Risk | `ai.predictions.view` |

### Patients & Providers
| href | Suggested label | Suggested perm |
| --- | --- | --- |
| `/ui/patients.html` | Patients | `patients.view` |
| `/ui/providers.html` | Providers | `providers.view` |
| `/ui/provider-teams.html` | Care Teams | `providers.view` |
| `/ui/portal-users.html` | Portal Users | `patients.view` |
| `/ui/portal-demographic-updates.html` | Portal Demographic Updates | `patients.view` |

### Revenue Cycle / Billing
| href | Suggested label | Suggested perm |
| --- | --- | --- |
| `/ui/claims.html` | Claims | `claims.view` |
| `/ui/claim-review.html` | Claim Review | `claims.view` |
| `/ui/charge-master.html` | Charge Master | `claims.view` |
| `/ui/charge-optimization.html` | Charge Optimization | `denials.view` |
| `/ui/authorizations.html` | Authorizations | — |
| `/ui/edi.html` | EDI Submissions | `edi.view` |
| `/ui/edi-queue.html` | EDI Queue | `edi.view` |
| `/ui/remittance.html` | Remittance | `payments.view` |
| `/ui/payments.html` | Payments | `payments.view` |
| `/ui/statements.html` | Statements | `payments.view` |
| `/ui/ar-followup.html` | A/R Follow-up | `payments.view` |
| `/ui/secondary-billing.html` | Secondary Billing | `payments.view` |

### Worklists / Denials
| href | Suggested label | Suggested perm |
| --- | --- | --- |
| `/ui/worklist.html` | Unified Worklist | — |
| `/ui/denials.html` | Denials | `denials.view` |
| `/ui/appeals.html` | Appeals | `denials.view` |
| `/ui/medical-evidence.html` | Medical Evidence | `denials.view` |
| `/ui/practice-ehr-charge-review.html` | Charge Review | — |

### Reports & Analytics
| href | Suggested label | Suggested perm |
| --- | --- | --- |
| `/ui/reports.html` | Reports | `reports.view` |
| `/ui/pa-metrics.html` | PA Metrics | `reports.view` |
| `/ui/audit.html` | Audit Log | admin |

### Admin & Reference Data
| href | Suggested label | Suggested perm |
| --- | --- | --- |
| `/ui/practices.html` | Practices | `practices.view` |
| `/ui/practice-locations.html` | Clinic Locations | `practices.view` |
| `/ui/practice-config.html` | Practice Config | admin |
| `/ui/organizations.html` | Organizations | admin |
| `/ui/payers.html` | Payers | `payers.view` |
| `/ui/pharmacies.html` | Pharmacies | `erx.view` |
| `/ui/rules.html` | Rules | — |
| `/ui/reference-codes.html` | Reference Codes | — |
| `/ui/icd-codes.html` | ICD-10 Codes | admin |
| `/ui/cpt-codes.html` | CPT/HCPCS Codes | admin |
| `/ui/medication-codes.html` | Medication Codes | admin |
| `/ui/users.html` | Users | `users.view` |
| `/ui/rbac-admin.html` | RBAC Administration | admin |
| `/ui/dynamic-forms.html` | Dynamic Forms | admin |
| `/ui/practice-ai-settings.html` | AI Settings | — |
| `/ui/theme-settings.html` | Theme Settings | — |
| `/ui/settings.html` | Settings | — |

### System & Editors (admin)
| href | Suggested label | Suggested perm |
| --- | --- | --- |
| `/ui/staging.html` | Staging Data | — |
| `/ui/runtime-log.html` | Runtime Log | — |
| `/ui/diagnostic.html` | Diagnostics | admin |
| `/ui/backups.html` | Backups | admin |
| `/ui/clearinghouse.html` | Clearinghouse | admin |
| `/ui/script-builder.html` | Script Builder | admin |
| `/ui/cf-editor.html?formType=encounter_cf` | CF Editor | admin |
| `/ui/menu-editor.html` | Menu Editor | admin |
| `/ui/kanban-editor.html` | Kanban Editor | admin |

### Patient Portal (use `newTab: true`)
| href | Suggested label |
| --- | --- |
| `/portal/` | Patient Portal |
| `/portal/portal-pages.html` | Portal Pages |

### Auth pages (do NOT put in the nav)
`login.html`, `register.html`, `forgot-password.html`, `reset-password.html`, `verify.html` — entry/auth
flows, not navigation targets. Demo/dev-only: `button-tactile-demo.html`, `availability-trial.html`.

---

## 7. Configurable Form (CF) links

Every CF screen is opened through one page — `cf.html` — parameterized by `formType`:

```
/ui/cf.html?formType=<FORM_TYPE>
```

Optional params:
- `&label=<Display%20Name>` — the header/title (URL-encode spaces as `%20`).
- `&seed=<path>` — a starter config JSON under `/ui/form-configs/…` (URL-encode the `/` as `%2F`), e.g.
  `&seed=%2Fui%2Fform-configs%2Fpatients-default.json`.
- `&new=1` — open directly in "create new" mode.

**The single dynamic door:** `/ui/cf.html?formType=cf_launcher` — the **All Forms** launcher lists every
nav-stamped CF form automatically (reads `/api/form-configurations?catalog=1`), so newly published forms
appear without editing the menu.

### CF form types

**Core forms (statically linked today):**
```
patients_cf            providers_cf           claims_cf              charge_master_cf
claim_review_cf        eligibility_cf         authorizations_cf      edi_cf
edi_queue_cf           visit_types_cf         appointments_cf        resource_cf
availability_cf        checkin_cf             checkout_cf            claim_status_codes_cf
denials_cf             payers_cf              portal_users_cf        provider_calendar_cf
pharmacies_cf          locations_cf           care_teams_cf          appeals_cf
statements_cf          rules_cf               remittance_cf          documents_cf
immunizations_cf       orders_cf              referrals_cf           cf_launcher
```

**Nav-stamped forms (from the live catalog):**
```
appeal_templates_cf    audit_console_cf       care_roles_cf          cds_rules_cf
charge_review_wq_cf    claim_exceptions_cf    claim_status_codes_reg_cf   clinical_tasks_cf
document_folders_cf    notifications_cf       patient_access_groups_cf    payments_cf
practice_locations_cf  practice_payers_cf     provider_panels_cf     provider_supervision_cf
recall_registry_cf     record_locks_cf        referring_providers_cf results_review_cf
rule_candidates_cf     scheduled_reports_cf   secondary_billing_cf   team_members_cf
users_admin_cf
```

> Seed files for these live in `/ui/form-configs/<name>-default.json`. Convention: `foo_bar_cf` ↔
> `foo-bar-default.json`. The catalog list is the source of truth — check it (or the All Forms launcher)
> for the current set.

Example CF item:
```jsonc
{ "href": "/ui/cf.html?formType=patients_cf&label=Patient&seed=%2Fui%2Fform-configs%2Fpatients-default.json",
  "icon": "users", "label": "PatientsCF", "perm": "patients.view" }
```

---

## 8. Workflow items

Instead of a link, an item can expand a **workflow's steps** as nav (Workflow engine):

```jsonc
{ "type": "workflow", "workflow": "primary-visit", "icon": "clipboard-list", "label": "Patient Visit" }
```

Available workflow keys: `GET /api/workflows` (currently `primary-visit` = the 10-step visit spine).
> Note: the founder removed the `primary-visit` workflow item from the default nav — workflow steps are
> better surfaced inside the Kanban/board than as menu entries. Use these only if you deliberately want the
> steps in the sidebar.

---

## 9. Worked example — a small custom menu

```jsonc
[
  { "id": "today", "label": "Today", "icon": "home", "items": [
      { "href": "/ui/dashboard.html", "icon": "home", "label": "Dashboard", "perm": "dashboard.view" },
      { "href": "/ui/kanban.html", "icon": "clipboard-list", "label": "Kanban", "perm": "kanban.view" },
      { "href": "/ui/cf.html?formType=cf_launcher", "icon": "folder", "label": "All Forms" }
  ]},
  { "id": "billing", "label": "Billing", "icon": "cash", "items": [
      { "href": "/ui/claims.html", "icon": "document", "label": "Claims", "perm": "claims.view" },
      { "href": "/ui/payments.html", "icon": "credit-card", "label": "Payments", "perm": "payments.view" },
      { "href": "/ui/ar-followup.html", "icon": "chart", "label": "A/R Follow-up", "perm": "payments.view" }
  ]},
  { "id": "system", "label": "System", "icon": "server", "items": [
      { "href": "/ui/menu-editor.html", "icon": "cog", "label": "Menu Editor", "adminOnly": true },
      { "href": "/ui/settings.html", "icon": "cog", "label": "Settings" }
  ]}
]
```

Paste this shape into the Menu Editor (or `PUT /api/engine-configs` with `{"type":"menu","key":"default","value": <the array>}`), refresh, and the sidebar re-renders from it.

## Review Epilog — 2026-07-24

- Link catalog verified accurate as of build 1943; all `/ui/` page hrefs and CF form types listed are live.
- CF launcher (`/ui/cf.html?formType=cf_launcher`) is the dynamic entry point for all 540+ nav-stamped CF forms; newly published forms appear automatically without sidebar edits.
- The nav-stamped CF forms list in §7 represents a sample; the full current catalog is authoritative at `GET /api/form-configurations?catalog=1`.
- Icon set (28 icons in §4) is unchanged; the legacy sidebar entries referencing unsupported icon names (squares-2x2, bars-3, lock-closed, phone) remain noted as blanks.
