---
title: "PracticeForceOneRBACMatrix"
---

# PracticeForceOne — RBAC Permission Matrix (decision-ready for sign-off)

**Last reviewed: 2026-07-24**

**For:** founder · **From:** AgentMR81 · **Date:** 2026-06-26 · **Unblocks:** MR8 **M8-21** (= MR7 **M7-17**) — *turn on role-based permissions in production.*

> **What this is.** Role-based permissions are **built and live in code** but **switched OFF** (`RBAC_ENFORCEMENT_ENABLED` unset → every signed-in user is allowed, exactly as today). To turn it on safely I need you to **approve the role→permission matrix below** (or tweak it). Once you sign, the flip is two env vars and a verify — no code change. An **emergency kill-switch** is already in place (`RBAC_KILL_SWITCH=true` instantly reverts to allow-all without a redeploy, committed `2eb55660a`).
>
> **How to use this page:** skim the plain-English table, then answer the 5 **decisions** at the bottom. Mark a row ✅ if it's right, or tell me the change.

---

## The roles and what each can do (plain English)

| Role | Can do | Cannot do |
|---|---|---|
| **Admin / Org-admin / Super-admin** | **Everything** (bypasses the matrix entirely) | — |
| **Practice admin** | Everything a biller can, **plus** delete claims, void payments, write-off denials, manage payers/providers/practices, invite & view users, manage EDI, see audit log, use all AI | Manage *users' roles* (only admin/org-admin), org settings/billing |
| **Biller / Billing / Staff** | View/create/edit/**submit** claims, view/post/adjust payments, work & appeal denials, run eligibility, view+export reports, view reference data, view/create/edit patients, submit EDI, generate AI appeals | **Delete** claims, **void** payments, **write-off** denials, manage anything, manage users, see audit log |
| **Front desk / Receptionist / Scheduler** | View/create/edit patients, run eligibility, view claims, view reference data | Anything with money (payments/denials), edit/submit claims, reports |
| **Provider / Clinician** | View patients, claims, denials, eligibility; view reports; use AI chat | Create/edit/submit claims, anything with money, manage anything |
| **Viewer / Read-only / Auditor** | **View only** across claims, payments, denials, eligibility, reports, reference, patients, users, EDI. **Auditor** also sees the audit log | Any create/edit/delete/submit/post action |
| **(any other/blank role)** | **Nothing** (default-deny) | Everything |

*Full machine-readable mapping lives in `util/PermissionHelper.script → permissionsForRole()`; this table is its plain-English mirror.*

**Application coverage (the admin grid's rows).** The fixed application list is now **21**: the original 17 (Claims, Patients, Payments, Denials, Eligibility, Reports, EDI, Calendar, Payers, Providers, Practices, Users, Dashboard, Workflow Board, Audit Log, AI Assistant, Organization) **plus 4 added so the grid covers the whole product surface** — **Patient Statements** (`statements.view/generate`), **Charge Master** (`chargemaster.view/create/edit/delete`), **Medical Evidence** (`evidence.view/resolve`), **AR Follow-up** (`arfollowup.view/work`). Default grants: billers/staff get the operational perms, practice-admin also gets charge-master create/edit/delete, viewers/auditors get the read perms.

---

## ⚠️ The one real risk before flipping — un-mapped roles get locked out

When enforcement is ON, **any role not in the table above is denied everything**. If a real user in production carries a role like `owner`, `nurse`, `ma`, `manager`, etc. that isn't mapped, **they lose access the moment you flip the switch.**

**Required pre-flip check (one query):**
```sql
SELECT DISTINCT role, COUNT(*) FROM users GROUP BY role ORDER BY 2 DESC;
```
Every distinct `role` value returned must appear in the table above (as itself or an alias). If any don't, we either add them to the matrix or alias them before flipping. I can run this and report once you say go.

---

## The 5 decisions (your call)

1. **Should `staff` = `biller` (broad RCM access)?** Today a generic "staff" account gets the full biller toolkit (so enabling never locks out a working account). If "staff" should be narrower (e.g. front-desk-level), say so. ☐ keep / ☐ narrow to front-desk
2. **Should Front desk be able to post payments (collect copays)?** Today front desk **cannot** post payments. Many practices have the front desk take copays. Add `payments.post` to front desk? ☐ no / ☐ yes
3. **Should Providers create clinical orders / charges?** Today providers are **read-mostly** for RCM. Clinical ordering (e-Rx/labs) is a separate surface; this matrix only governs the ~RCM endpoints. Confirm read-mostly is right for billing screens. ☐ ok / ☐ change
4. **Who may change another user's role?** Today only **admin/org-admin** (practice-admin can invite/view but not set roles). Keep role-management admin-only? ☐ keep / ☐ allow practice-admin
5. **Rollout style:** ☐ **flip org-wide** once the role check passes, or ☐ **shadow first** (log would-be denials for a few days without enforcing) so we see surprises before they bite. *(Shadow mode is a small add I can build if you want it.)*

---

## What happens after you sign

1. I run the role-coverage query and confirm every prod role is mapped (or fix gaps).
2. *(Optional)* build shadow-mode if you picked it.
3. You (deploys are yours) set `RBAC_ENFORCEMENT_ENABLED=true`; `RBAC_KILL_SWITCH` stays unset (ready as the panic button).
4. Verify a biller / front-desk / viewer each see the right allow/deny on the key endpoints; if anything's off, set `RBAC_KILL_SWITCH=true` (instant revert) and we adjust.

*Note: enforcement currently covers the endpoints that call `checkPermission` (~claims/denials/users/providers/practices/eligibility/payments). Extending the gate to every write endpoint is the remaining part of M8-21/M7-17 and is tracked separately — it does not block this first flip.*

## Review Epilog — 2026-07-24

- RBAC enforcement is LIVE and ON since build 1534 (`RBAC_ENFORCEMENT_ENABLED=true` + `RBAC_UI_GATING=true` both in `cloudbuild.yaml`). The 5 decisions from this page have been resolved: founder approved the matrix 2026-06-30.
- Universal `JacHttp → RbacGate` enforcement at the central guard choke point. Fail-open with `RBAC_KILL_SWITCH`. 29/29 route-map tests green. Per-practice toggle live.
- `uat-harness@esarks.com` has admin role and no MFA. `ptm@esarks.com` has MFA enrolled.
- This document is retained as the plain-English reference for the role matrix. The machine-readable mapping lives in `util/PermissionHelper.script`.
