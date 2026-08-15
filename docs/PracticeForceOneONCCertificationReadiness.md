---
title: "PracticeForceOneONCCertificationReadiness"
---

# ONC Certification Readiness Assessment — PracticeForceOne (M8-20)

**Date:** 2026-07-06 · **Last reviewed: 2026-07-24** · **Author:** AgentMR8 · **Status:** readiness assessment + roadmap — **no certification work performed** · **Companions:** [MR8 Production Readiness Report](<PracticeForceOneMR8ProductionReadinessReport.md>) · [Vendor Activation Playbook](<PracticeForceOneVendorActivationPlaybook.md>)

## 0. The decision this document supports

ONC Health IT Certification (45 CFR Part 170, 2015 Edition Cures Update, administered by ASTP/ONC) matters to us for exactly one commercial reason: **practices that bill Medicare under MIPS need CEHRT for the Promoting Interoperability category**, and enterprise procurement checklists ask for the badge. If the first customers are cash/commercial-only small practices, certification can trail go-live by a year. If the pilot practice does MIPS, the clock starts now (certification realistically takes **9–15 months**).

**Founder question #1 (before any spend): does the target customer segment require CEHRT?** Everything below is staged so that Phase 1 is valuable even if the answer is "not yet" — it doubles as interoperability hardening the market wants anyway.

---

## 1. Criteria inventory — where we stand today

Assessed against §170.315 (Cures Update). "Satisfied (engineering)" = the capability exists and works; formal *test-procedure* conformance is always additional work.

### Already satisfied (engineering-level) — the strong base

| Criterion | Requirement | Our evidence |
|---|---|---|
| §170.315(d)(1) | Authentication + access control/authorization | RBAC live & enforcing (universal route gate, role matrix, admin grid); JWT auth |
| §170.315(d)(2)/(d)(3) | Auditable events, tamper-resistance; audit report(s) | M8-23 durable audit: reply-checked writes, SHA-256 integrity hashes, zero-loss fallback stream (proven in production incident); audit query surfaces |
| §170.315(d)(6) | Emergency access | **BreakGlass** routes live (grant + full audit) |
| §170.315(d)(7)-adjacent | Encryption of data at rest (HIPAA-driven) | Cloud SQL disk encryption + **M8-22 field-level AES-256-GCM** on the most sensitive fields with blind-index search |
| §170.315(d)(12)/(d)(13) | Encrypt credentials; **multi-factor authentication** | bcrypt-class password storage + **TOTP MFA live** (staff `user_mfa` + portal M7-18, recovery codes, lockout) |
| §170.315(a)(5) | Demographics | full demographics incl. structured fields, validated inputs |
| §170.315(a)(6)/(7)/(8)-class | Problem / medication / allergy lists | PATIENT_PROBLEMS (ICD-10-CM), PATIENT_MEDICATIONS (RxNorm), PATIENT_ALLERGIES — all live with FHIR mappings |
| §170.315(a)(4)-seam | Drug-drug/drug-allergy interaction checks (CPOE) | M8-54 engine built (dormant; needs licensed drug DB — same partner as e-Rx) |
| §170.315(a)(1)–(3)-class | CPOE med/lab/imaging | clinical orders live incl. M8-35 imaging metadata |
| HIPAA §164.308/.312 documentation | Security risk analysis etc. | docs/HIPAA-COMPLIANCE v2.0, TECHNICAL-CONTROLS, RISK-ANALYSIS, INCIDENT-RESPONSE (May 2026, review-dated) |

### Partially complete — real work, clear path

| Criterion | Requirement | Gap |
|---|---|---|
| §170.315(g)(10) | **Standardized API for patient and population services** (FHIR R4 + US Core + SMART) | FHIR R4 read+search live for Patient, AllergyIntolerance, Condition, MedicationStatement, Observation, Encounter, Coverage + `$everything` + CapabilityStatement — but **no SMART on FHIR OAuth2/OpenID authorization**, no refresh tokens, no Bulk FHIR (population `$export`), and US Core profile conformance is unverified (run **Inferno** — free — to baseline). This is the highest-value criterion and our best head start. |
| §170.315(b)(1) | Transitions of care (C-CDA create/receive/incorporate) | C-CDA export + import-preview exist (G2 lane, hardened against the Xerces defects); needs ETT conformance testing + reconcile/incorporate workflow completion |
| §170.315(b)(10) | **EHI export** (single patient + population) | `$everything` covers single-patient; population-level export + documented format is missing |
| §170.315(e)(1) | View/Download/**Transmit** to 3rd party | portal view/download live; **transmit** (Direct) missing — needs a HISP partner |
| §170.315(a)(9) | Clinical decision support bundle | interaction checks seam + evidence surfaces exist; CDS configuration/source-attribute surface incomplete vs test procedure |
| USCDI data-class coverage | USCDI v3 (HTI-1 baseline as of 2026) | strong core; gap analysis needed per class (e.g., care team, goals, notes classes) |

### Not built — deliberate gaps to price

| Criterion | Requirement | Reality |
|---|---|---|
| §170.315(b)(3) | e-Rx via NCPDP SCRIPT | simulated today; requires **Surescripts certification** (= M8-30 vendor track; shared cost with the clinical roadmap) |
| §170.315(c)(1)–(3) | Clinical quality measures (CQM) — record/export/calculate | not built (M8-51 deferred). Required for the **Base EHR definition** → decision: build minimal CQM engine, integrate a library, or scope certification without it initially |
| §170.315(h)(1) | Direct messaging | not built — buy from a HISP (Kno2/DataMotion-class), don't build |
| §170.315(g)(3) | Safety-enhanced design (formal usability study, ≥10 participants per tested criterion) | not done — external usability vendor or self-run to NISTIR 7741 |
| §170.315(g)(4)/(g)(5) | QMS + accessibility-centered design declarations | documentation work, not code |
| Conditions of Certification | Real-world testing plan + annual results, attestations, information-blocking compliance, API transparency (fees/docs public) | program/legal work; RWT plan due with certification |

---

## 2. External organizations involved

| Org | Role | Notes |
|---|---|---|
| **ONC-ACB** (Drummond Group, SLI Compliance, Leidos/ICSA) | issues the certification | pick one early; Drummond is the small-vendor default; get their criteria-scoping worksheet |
| **ONC-ATL** (usually same shop) | runs the test procedures | (g)(10) uses **Inferno**; C-CDA uses **ETT** — both runnable by us beforehand, free |
| **Surescripts** | e-Rx network certification for (b)(3) | own multi-month track; shares cost/benefit with M8-30 |
| **HISP** (Kno2, DataMotion…) | Direct transmit for (e)(1)/(h)(1) | contract, not build |
| **Drug DB licensor** (First Databank / Medi-Span) | powers (a)(4)/(a)(9) for real | same partner unblocks M8-54 |
| **Usability vendor** (optional) | (g)(3) study | can self-run to NISTIR 7741 to save cost |
| **UDS/terminology** | RxNorm/LOINC/SNOMED subscriptions | mostly free (NLM UMLS license) |

## 3. Cost & timeline estimate

| Line | Low | High | Notes |
|---|---|---|---|
| ACB + ATL fees (scoped ambulatory module set) | $25k | $60k | scope-dependent; annual surveillance fee after |
| Engineering: SMART/OAuth2 + Bulk FHIR + US Core conformance | 6 wks | 12 wks | our best-leverage build; market-valuable regardless |
| Engineering: EHI export + C-CDA hardening + CDS surface | 4 wks | 8 wks | |
| CQM path (library/partner vs minimal build) | $10k + 4 wks | $40k + 10 wks | the scoping decision that swings the budget most |
| Surescripts certification (shared w/ M8-30) | $15k | $50k+ | only if e-Rx in scope round 1 |
| HISP contract | $3k/yr | $10k/yr | |
| Drug DB license | $10k/yr | $30k/yr | unblocks M8-54 too |
| Usability study (g)(3) | $5k (self-run) | $25k (vendor) | |
| **Total, first certification** | **~$70k + ~5 mo eng** | **~$215k + ~8 mo eng** | **9–15 months calendar** |

**Cheapest credible scope (recommendation):** certify a **targeted module set** anchored on (g)(10), (d)(1–3,5–7,12,13), (a)(5), (b)(1), (b)(10), (e)(1) and defer (b)(3)/CQMs to a second round — confirm with the ACB that the scope matches what the pilot customer's program actually requires (MIPS PI needs the 2015 Base EHR definition — that's where the CQM question bites; the ACB scoping call settles it).

## 4. Actionable roadmap

- **Phase 0 — Decision (founder, now, $0):** confirm buyer need (question #1); pick an ACB and run their scoping worksheet; set the budget envelope. *Everything else waits on this.*
- **Phase 1 — Free conformance baseline (engineering, no contracts, ~2 wks):** run **Inferno** against our FHIR surface and **ETT** against our C-CDA export; produce the US Core/USCDI v3 gap list. This converts unknowns into a punch list and is worth doing even with no certification plan.
- **Phase 2 — Market-valuable builds (6–12 wks, MR9 candidates):** SMART on FHIR OAuth2 + refresh tokens; Bulk FHIR `$export` (doubles as (b)(10) population EHI export); US Core profile fixes from Phase 1; C-CDA incorporate workflow.
- **Phase 3 — Partner tracks (calendar-parallel):** HISP contract (transmit); drug DB license (flips M8-54 on for real); Surescripts *only if* e-Rx is in round-1 scope.
- **Phase 4 — Program formalities (4–8 wks elapsed):** (g)(3) usability study, (g)(4)/(g)(5) declarations, RWT plan, information-blocking/API-transparency attestations, public API documentation + fee schedule.
- **Phase 5 — Test & certify:** ATL testing → ACB issuance → CHPL listing → annual RWT reporting begins.

**Bottom line:** we are unusually strong on the security/audit/access criteria (they shipped as MR8 features) and genuinely close on (g)(10) — the criterion buyers actually feel. The expensive gaps (CQM, e-Rx, Direct) are all scope-choice or partner decisions, not architecture problems. Phase 0 + the free Phase 1 baseline can start this month without committing to the full program.

---

## Review Epilog — 2026-07-24

Reviewed 2026-07-24. Status: CURRENT — no body edits required.

- ONC certification status unchanged: readiness assessment only; no certification work performed; this remains correctly deferred (MR10 paper-only phase, no customer-forced CEHRT requirement identified yet).
- Security/audit/access criteria ("Already satisfied" table): RBAC, MFA, field-level encryption, audit trail, BreakGlass all confirmed live in current build (1943). Criteria inventory remains accurate.
- (g)(10) FHIR R4 surface confirmed live; SMART on FHIR OAuth2 gap and US Core profile conformance gaps unchanged — Inferno baseline run is the recommended free first step.
- No new customer signals requiring ONC certification before August demo; founder decision (Phase 0 question #1) remains open.
