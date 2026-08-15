---
title: "BusinessCase"
---

# PracticeForceOne — Business Case

**Version:** 2.0 · **Date:** 2026-07-02
**Entity:** PracticeForceOne, LLC (Florida, single-member — Paul Marshall)
**Classification:** Investment & Go-Forward Decision

> **Note:** This document supersedes a prior v1.0 business case that described a
> different product ("JAC-NEWGEN," an open-source low-code platform). That content
> has been retired. This is the business case for **PracticeForceOne**, the
> AI-assisted revenue-cycle and practice-operations platform. See also the companion
> **[PracticeForceOneBusinessPlan](<PracticeForceOneBusinessPlan.md>)** (execution &
> runway), **[PracticeForceOneBusinessOpportunity](<PracticeForceOneBusinessOpportunity.md>)**
> (narrative & financial model), and **[PracticeForceOneBusinessAnalysis](<PracticeForceOneBusinessAnalysis.md>)**
> (product positioning).

---

## Executive Summary

PracticeForceOne is an **AI-assisted revenue-cycle-management (RCM) and practice-operations platform** for independent outpatient clinics, now commercialized through **PracticeForceOne, LLC**. The case to proceed rests on a combination that is very hard to replicate:

1. **A production-grade platform** — full front-to-back RCM (registration → eligibility → encounter → charge → claim → denial/appeal → payment), with automation and explainable AI, running on Google Cloud.
2. **A rare founder profile** — a **practicing clinician with CPA and audit credentials** who runs **their own practice as Customer #1**, proving the numbers before asking anyone else to trust them.
3. **Two revenue engines on one asset** — sell the **software** (SaaS), and/or run a **clinician-led billing service** built on it that charges a percentage of collections.

**Time to first revenue: 30–60 days** (the founder's own practice). **Year 1 ≈ $340K** revenue, **Year 2 ≈ $1.6–2.2M** on the billing-services model. The primary investment is founder time plus modest cash (HIPAA readiness, a live clearinghouse/EDI connection, one billing specialist). An optional **seed of ~$250K–$500K** accelerates the path to general availability and multi-practice scale.

**Recommendation: Proceed** — run the founder's own practice on the platform first, prove the outcomes with CPA-audited numbers, then grow through the clinical peer network.

---

## 1. The Decision

Whether to commit to commercializing PracticeForceOne — as a SaaS product and/or as the engine of a clinician-led billing service — rather than leaving it an internal build. The recommendation is to proceed on a **capital-light, proof-first path**: the founder's own clinic becomes the live reference, and expansion is referral-led into the founder's clinical peer network.

---

## 2. The Problem

Independent and small-group outpatient practices lose real money to the revenue cycle:

- Claim **denials (15–20% industry average)** and underpayments.
- **Eligibility and prior-authorization friction** that delays or forfeits revenue.
- **Days in A/R of 32–45** and first-pass acceptance stuck at 80–85%.
- No affordable tooling that unifies the workflow — they choose between heavy hospital-grade suites and thin billing point-tools, and can rarely staff a real billing department.

The buyer feels this pain directly (practice owners, office managers, billing leads) and can decide without a hospital procurement cycle.

---

## 3. The Product (in brief)

PracticeForceOne unifies the clinical and billing workflow in one system: patient registration and insurance capture; scheduling and a Kanban clinical work queue; encounters and charge capture; claim generation, scrubbing, and submission; denial management with an **explainable AI denial reasoner and appeal-letter generator**; payment posting; A/R follow-up; prior authorization (CMS-0057-F / FHIR DaVinci PAS); and 30+ reports. It is **multi-practice native** (one billing team, many practices, strict tenant isolation) and runs on Google Cloud Run + Cloud SQL with HIPAA-oriented controls.

Full feature detail: **[PracticeForceOneBusinessOpportunity](<PracticeForceOneBusinessOpportunity.md>)** §3.

---

## 4. The Unfair Advantage

Most billing entrepreneurs have **one** of the following. The PracticeForceOne founder combines **all** of them:

| Advantage | Why it matters |
|---|---|
| **Clinical credibility** | Providers trust a peer, not a vendor. "A fellow clinician built this and runs their own practice on it" opens doors no sales team can. |
| **Inside knowledge of the clinical workflow** | Knows *why* documentation gaps and late sign-offs happen and what really drives an E/M level — most billing operators do not. |
| **CPA credential** | Practices handing over their revenue stream trust a CPA-credentialed operator for accuracy, accountability, and auditability. |
| **Audit background** | Trained to find underpayments, upcoding risk, and ERA/EOB mismatches — exactly the money most billing shops leave on the table. |
| **Own practice = Customer #1** | No sales effort to start; the founder proves reconciled, CPA-audited outcomes in their own clinic before asking anyone else to trust the numbers. |
| **Compliance fluency** | HIPAA, HITECH, CMS rules, and payer contracts are daily working knowledge, not foreign concepts. |

This profile is the core of the business case: it collapses the two hardest problems in the billing-services market — **trust** and **domain accuracy** — at the same time.

---

## 5. Business Model

**Two engines on one platform:**

1. **SaaS platform** — tiered subscription + per-claim pricing:
   - Starter $499/mo + $0.35/claim · Professional $1,499/mo + $0.25/claim · Enterprise custom + $0.15/claim.
2. **Clinician-led billing service** — the higher-value engine: run the full revenue cycle for peer practices for **4–8% of collections** (or flat $4–6 per clean claim), with value-add upsells (appeals, authorization management, eligibility batches, analytics).

The founder's own practice seeds engine #1 (proof) and engine #2 (first client), with expansion into the clinical peer network.

---

## 6. Market Opportunity

- **Medical billing software: ~$4.5B, growing ~11%/year**, driven by claim complexity, denials, prior-auth mandates (CMS-0057-F), staffing shortages pushing practices to outsource, and AI adoption creating differentiation.
- **Target segment:** solo and small-group independent practices (1–5 providers) — most underserved by enterprise vendors, most receptive to a trusted clinician-operator.
- **Beachhead:** the founder's own practice and specialty peer network; **Oklahoma** as the initial geography, with its specific payer landscape (Medicare/MA, SoonerCare/SoonerSelect, BCBS of Oklahoma, HealthChoice). An early external clinic engagement in Oklahoma City has already provided a real-world workflow and payer-mix reference.

---

## 7. Financial Analysis

**Path to first revenue: 30–60 days** — stand up the founder's own clinic on the platform; realistic outcomes for a 3-provider practice: first-pass acceptance 95%+ (vs. 80–85%), A/R days <28 (vs. 32–45), denial rate <8% (vs. 15–20%), plus underpayment recovery the founder's audit training is unusually good at finding.

**Year 1 revenue ramp (billing-services model, conservative):**

| Month | Practices live | Providers | Monthly revenue | Monthly cost | Margin |
|---|---|---|---|---|---|
| 1–2 | 1 (own clinic) | 3 | $7,200 | $5,500 | $1,700 |
| 3 | 2 | 6 | $14,400 | $8,200 | $6,200 |
| 6 | 4 | 14 | $33,600 | $14,000 | $19,600 |
| 9 | 6 | 22 | $52,800 | $18,500 | $34,300 |
| 12 | 8 | 30 | $72,000 | $22,000 | $50,000 |

- **Year 1 ≈ $340K revenue, ~$170K margin (50%).**
- **Year 2 target:** 15–20 practices, 50–70 providers, **$1.6M–$2.2M** annual revenue.

**3-provider unit economics (illustrative):** $120K/mo collections × 6% = $7,200 revenue; less ~$3,467 billing labor, ~$920 software, ~$150 clearinghouse ⇒ **~$2,663 gross margin (37%)**, improving as the software base fee spreads across more practices.

_Projections, not guarantees — the key variable is sales velocity, which the clinical peer network and CPA-audited proof substantially de-risk._

---

## 8. Runway to Go-Live & Major Hurdles

**Phases:** (P0) platform stabilization → (P1) HIPAA/security readiness → (P2) production clearinghouse/EDI (real 837/835) → (P3) **own-practice go-live** (real claims, real payers) → (P4) external clients + multi-practice onboarding. Indicative window: **~Q3 2026 → Q1–Q2 2027.**

**Major hurdles:**
1. **Clearinghouse / EDI** — the biggest gap between today's mock transport and real claims; requires a clearinghouse connection and per-payer enrollment.
2. **HIPAA-grade security** — encryption, granular RBAC, complete audit trails, backup/restore, BAAs — before any live PHI.
3. **Platform stabilization** — drive remaining defect classes (e.g., generated-CRUD issues) to zero before a clinic depends on it.
4. **Single-operator bandwidth** — the founder spans clinical practice, product, and the business; a first billing hire relieves this.
5. **IP hygiene** — the code predates the LLC and JAC is licensed to Architects of Software Design, Corp.; execute an assignment/license into PracticeForceOne, LLC.

Detail: **[PracticeForceOneBusinessPlan](<PracticeForceOneBusinessPlan.md>)** §8–§9.

---

## 9. Funding

- **Bootstrapped-to-proof (recommended start):** founder-funded; cash concentrated on HIPAA essentials, clearinghouse enrollment, and infrastructure. Reaches first revenue on the founder's own practice with little dilution — estimated **~$40K–$80K** hard cash beyond founder time.
- **Seed (~$250K–$500K, optional):** funds compliance, clearinghouse/EDI, infrastructure, insurance, brand, **and a first billing hire** plus runway — compressing the timeline to GA and multi-practice scale. Unlocked by the founder's own-practice metrics.

**Use of funds, in priority:** (1) HIPAA/security readiness, (2) clearinghouse/EDI, (3) platform hardening + first billing specialist, (4) go-live instrumentation, (5) referral-led growth.

---

## 10. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Sales velocity slower than projected | Start with the founder's own clinic; referrals via clinical peer network; realistic expectations |
| HIPAA liability as a Business Associate | BAAs, HIPAA controls, audit logging; HIPAA-attorney review before live PHI |
| Platform still stabilizing | Characterization/UAT gates; drive defect classes to zero before go-live |
| No real claim path yet | Clearinghouse/EDI is a gating milestone (P2) |
| Single-operator bandwidth | First billing hire on funding; documented runbooks; AI leverage |
| Larger-vendor competition | Multi-practice-native + explainable AI + clinician-operator trust are structural, not cosmetic |

---

## 11. Recommendation

**Proceed.** Run the founder's own practice on PracticeForceOne first, prove reconciled and CPA-audited outcomes, then grow through the clinical peer network — funding a clearinghouse connection, HIPAA readiness, and a first billing specialist along the way. The combination of a production platform, a clinician + CPA operator, and an own-practice proof point is not a profile a competitor can assemble quickly. The decision is not *whether* the opportunity is real — it is how fast to move.

---

_Companion documents: **[PracticeForceOneBusinessPlan](<PracticeForceOneBusinessPlan.md>)**, **[PracticeForceOneBusinessOpportunity](<PracticeForceOneBusinessOpportunity.md>)**, **[PracticeForceOneBusinessAnalysis](<PracticeForceOneBusinessAnalysis.md>)**._
