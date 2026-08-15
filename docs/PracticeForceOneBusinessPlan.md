---
title: "PracticeForceOneBusinessPlan"
---

# PracticeForceOne — Business Plan

_Last rewritten: 2026-07-02 · Last reviewed: 2026-07-24 · Owner: Paul Marshall · Entity: PracticeForceOne, LLC (Florida)_
_Status: pre-revenue, product in active development (live build **1943**, gate 251/251 GREEN); go-to-market begins with the founder's own practice as Customer #1._

**Last reviewed: 2026-07-24**

---

## 1. Executive Summary

**PracticeForceOne** is an AI-assisted revenue-cycle-management (RCM) and practice-operations platform for independent outpatient clinics. It takes a patient from registration and insurance capture, through the clinical encounter, into a clean claim, and all the way to paid — with automation ("autopilots") and AI assistance layered across eligibility, prior authorization, coding, claim scrubbing, denial work, and appeals.

The product is being built as a single, code-generated Java application (the JAC platform) deployed on Google Cloud, and is already running end-to-end in a staging environment. The company, **PracticeForceOne, LLC**, was formed in Florida on 2026-06-11 to own, market, and commercialize the product independently of the founder's prior consultancy.

The immediate commercial objective is to run the **founder's own practice as Customer #1** — proving reconciled, CPA-audited revenue-cycle outcomes before asking anyone else to trust the numbers — then to grow through the founder's clinical peer network. (An early external clinic engagement in Oklahoma City has already provided a real-world workflow and payer-mix reference.) This anchors a roughly **9–12 month runway to general availability (GA)**, gated primarily by HIPAA-grade security readiness, a production clearinghouse/EDI connection for real claim submission, and hardening of the platform for multi-clinic use.

The founder's profile is central to the case: a **practicing clinician with CPA and audit credentials**, which collapses the two hardest problems in the billing-services market — peer trust and domain accuracy — at once.

The business is bootstrapped today. A **seed raise in the ~$250K–$500K range** would compress the timeline to GA, fund compliance and clearinghouse enrollment, and add the first billing specialist alongside the founder. A fully bootstrapped path to first revenue (the founder's own practice) is also viable at far lower cash cost, trading speed for capital.

---

## 2. Company Overview

| Item | Detail |
|---|---|
| Legal entity | **PracticeForceOne, LLC** |
| Formation | Florida (Sunbiz e-file), filed and paid **2026-06-11**; single-member, member-managed |
| Owner | Paul Marshall (100%) |
| Primary domain | **practiceforceone.com** (`.net` redirects to `.com`) |
| Related entity | Architects of Software Design, Corp. — holds the underlying JAC code-generation IP (licensing/assignment to the LLC is an open item; see §10) |
| Founder | Practicing clinician with CPA + audit credentials; runs an active practice that becomes Customer #1 |
| Current stage | Pre-revenue; product in active development; go-to-market starting with the founder's own practice |

**Mission.** Give independent and small-group clinics the revenue-cycle horsepower of a large billing department — through software and AI — so they keep more of what they earn and spend less time fighting payers.

**Why a new LLC.** The product is being separated from the founder's prior consulting corporation so it can be marketed, sold, insured, and (if desired) financed on its own footing, with clean IP ownership, its own brand and domains, its own banking, and its own liability boundary for handling protected health information (PHI).

**Founder advantage.** The founder combines a rare set of qualifications: clinical practice (peer credibility and inside knowledge of the clinical workflow), a **CPA credential** and **audit background** (financial rigor, and an unusual ability to find underpayments and ERA/EOB mismatches), compliance fluency, and — critically — **an active practice that serves as Customer #1**. This means the platform is proven on reconciled, CPA-audited numbers in the founder's own clinic before any external sale. See **[BusinessOpportunity](<PracticeForceOneBusinessOpportunity.md>)** and **[BusinessCase](<BusinessCase.md>)** for the full articulation.

---

## 3. The Product

PracticeForceOne is a full front-to-back RCM and light practice-management platform. Capability areas already scaffolded or working in the application:

- **Patient intake & registration** — demographics, insurance capture (primary/secondary), eligibility.
- **Provider & practice management** — providers, practices, locations, multi-practice organizations, role-based access control (RBAC).
- **Clinical / EHR workflow** — scheduling, encounters, orders, and the practice's day-to-day operational flow.
- **Claims lifecycle** — claim creation from encounters, scrubbing/validation, claim lines, submission, status tracking.
- **Denials & appeals** — denial capture, CARC/RARC handling, appeal templates and payer appeals contacts.
- **Prior authorization & eligibility** — auth-required rules, authorization tracking.
- **Payments & posting** — remittance/payment posting, secondary billing queue.
- **Reporting & analytics** — operational and financial reporting, scheduled reports.
- **Patient portal** — check-in questionnaires and patient-facing intake.
- **Automation ("autopilots")** — configurable executors that perform routine RCM actions with a human-approval ledger.
- **AI assistance** — a set of AI-driven features across the workflow (documentation, coding assistance, denial reasoning, and similar), designed to sit beside staff rather than replace them.

**Positioning.** Not just a clearinghouse and not just an EHR — an **operations layer** that unifies registration, the encounter, and the money, with automation and AI doing the repetitive RCM labor that independent clinics can rarely staff for.

---

## 4. The Process of Building the Software

PracticeForceOne is built on **JAC (Java Architects Companion)**, a code-generation and dynamic-compilation platform. Domain models are defined once and the data-access layer (JEO/CRUD) is generated, then composed into a single deployed service. This lets a very small team move at a pace normally associated with a much larger one.

**How it is being built:**

- **Architecture** — a JAC monolith: HTTP endpoints in a single router, generated data classes for table access, and a disciplined set of raw-SQL exceptions for staging, analytics, and transport. Tenant/practice scoping is enforced on reads and writes.
- **Delivery** — continuous deployment to Google Cloud Run backed by Cloud SQL (PostgreSQL). Builds are numbered sequentially (currently ~1619) and each carries a provenance stamp (content hash, git commit) surfaced at `/api/health`.
- **Development model** — a fleet of AI coding agents working in parallel against a shared plan, each owning a lane (architecture, clinical workflow, platform/security, RCM, CI/CD), coordinated through an inter-agent channel and a milestone/table system. This is itself a differentiator: the company dogfoods AI-accelerated engineering.
- **Quality gates** — a characterization/UAT suite and architectural checks run before deploys; guardrails prevent regressions in data-write honesty and generated-CRUD patterns.
- **Current state** — the platform runs end-to-end in **production** with realistic demo data (Bay Area Cardiology, Steve Chen, 6 patients). Core workflows exercise the full path from registration to claim; the August 2026 demo path (Schedule→Check-In→Eligibility→Chart→Encounter→Checkout) is verified end-to-end. RBAC is ON (since build 1534). 540+ CF definitions live. Backup/restore operational (daily backups + restore drill proven, RTO ~17 min). Code generator stabilized (JAC13/JAC12 classes resolved).

**What "build" still requires before selling:** production-grade security controls, a real clearinghouse/EDI connection (staging uses mock/transport infrastructure), multi-clinic hardening, and operational runbooks for onboarding a live practice. These are the substance of the runway in §8.

---

## 5. Market Opportunity

**The problem.** Independent and small-group outpatient practices lose real money to the revenue cycle: claim denials, underpayments, eligibility errors, prior-auth friction, and slow follow-up. They rarely have the staff or tooling of a hospital billing office, and off-the-shelf systems are either heavy hospital-grade suites or thin billing point-tools that don't unify the workflow.

**The buyer.** Practice owners, office managers, and billing leads at independent clinics (primary care, specialty, and small multi-specialty groups) who feel denial and A/R pain directly and can make a purchasing decision without a hospital procurement cycle.

**Why now.** Payer complexity and prior-auth burden keep rising; staffing billing roles is hard and expensive; and AI has matured to the point where it can meaningfully assist coding, denial reasoning, and documentation. A product that packages RCM automation + AI for the independent segment is well timed.

**Oklahoma as a beachhead.** The first engagement is Oklahoma-based, so the initial payer model targets that landscape directly: traditional Medicare and Medicare Advantage, **SoonerCare/SoonerSelect** Medicaid MCOs, **BCBS of Oklahoma**, **HealthChoice** (state employees), commercial payers, workers' comp, and self-pay. Winning one market's payer mix cleanly is more valuable early than shallow national coverage.

---

## 6. First Customer: The Founder's Own Practice

The first commercial motion is **Customer #1 = the founder's own practice.** Because the founder is a practicing clinician, the platform can go live in a real clinic with **no sales effort, no pilot negotiation, and no external dependency** — and the founder's CPA/audit discipline means every result is reconciled and defensible before it is ever cited to a prospect.

**Why own-practice-first wins:**
1. **Zero customer-acquisition cost** to reach first revenue and live proof.
2. **CPA-audited outcomes** — first-pass acceptance, denial rate, days-in-A/R, and underpayment recovery, verified by an operator trained to audit them.
3. **The most compelling demo in the industry:** "come see it working in my own practice," backed by numbers a CPA will stand behind.

**Oklahoma reference engagement.** In parallel, a structured discovery walkthrough of an external clinic in Oklahoma City — shadowing a patient front-to-back and a claim start-to-finish against a deep-dive checklist (front desk, eligibility, payer landscape, coding, submission, denials, A/R, eRx, reporting) — has grounded the roadmap in a second real practice's workflow and the Oklahoma payer mix. It serves as the template for the **first external peer client** once the founder's own-practice numbers are in hand.

**Why it matters.** Proving the platform on the founder's own reconciled numbers turns this from "a demo" into "a company," and converts the founder's clinical + financial domain work into a repeatable, referral-led sales story across the clinical peer network.

---

## 7. Business Model & Go-to-Market

**The LLC's job** is to promote and commercialize the product: brand and web presence (practiceforceone.com + marketing site on GCP), the sales relationship with clinics, contracting (including HIPAA Business Associate Agreements), and support.

**Revenue model (to validate in the pilot):**
- **SaaS subscription** per practice/provider seat, tiered by module (core RCM vs. RCM + automation + AI).
- Optional **percentage-of-collections** or per-claim pricing for full-service RCM, which aligns price with the value delivered and lowers the buyer's up-front risk.
- Implementation/onboarding fee for data migration and payer enrollment.

**Go-to-market sequence:**
1. **Own practice (Customer #1)** → live, CPA-audited outcomes.
2. **Referral-led peer expansion** — colleagues in the founder's specialty and network, sold on the founder's own reconciled metrics (the Oklahoma City reference clinic is a natural first external client).
3. **Segment expansion** — adjacent specialties and additional geographies as compliance and payer coverage broaden.

Early sales are founder-led and consultative, carried by clinical peer trust and CPA-audited proof — which suits a complex, trust-heavy healthcare buyer.

---

## 8. Runway to Go-Live

Indicative phases from today (mid-2026). Dates compress with funding (§11) and slip without it.

| Phase | Target window | Exit criteria |
|---|---|---|
| **P0 — Product stabilization** | Now → ~Q3 2026 | Core workflows (registration → claim → denial) reliably green in staging; generator/CRUD defects cleared; backup/restore and RBAC solid |
| **P1 — Compliance & security readiness** | ~Q3–Q4 2026 | HIPAA Security Rule controls implemented; risk assessment; BAA template; audit logging; encryption at rest/in transit; access controls; incident-response plan |
| **P2 — Clearinghouse / EDI** | ~Q4 2026 | Production connection for 837 claim submission and 835 remittance (via a clearinghouse such as Availity/Optum, or direct payer connections); payer enrollment for the founder's practice |
| **P3 — Own-practice go-live** | ~Q4 2026 – Q1 2027 | The founder's own practice submitting real claims to real payers on PracticeForceOne; CPA-audited success metrics instrumented and tracked |
| **P4 — External clients & GA** | ~Q1–Q2 2027 | First external peer client(s) live; multi-clinic onboarding runbook; support process; pricing/contracts finalized |

**Definition of "go-live":** the founder's own practice submits **real claims to real payers** through PracticeForceOne and posts real remittances — not a demo, and not parallel-only. That single event is the fulcrum of the whole plan.

---

## 9. Major Hurdles To Overcome

**Technical**
1. **Clearinghouse / EDI integration.** Real claims require 837/835 exchange through a clearinghouse or direct payer connections, plus per-payer enrollment. This is the single biggest technical + operational gap between staging and go-live.
2. **Platform stabilization.** The code generator and generated CRUD layer are still being hardened; recent provider create/read defects show the class of issue that must be driven to zero before a clinic depends on it.
3. **HIPAA-grade security.** Handling PHI demands encryption, granular access control, complete audit trails, backup/restore, and a defensible security posture — table stakes before any live data.
4. **Multi-tenancy & scale.** Moving from a single staging org to many isolated clinics (strict tenant scoping, per-tenant data, performance) at production reliability.

**Business / operational**
5. **Single-founder / key-person risk.** One person currently spans product, engineering direction, sales, and domain work. Bandwidth and continuity are the top business risks.
6. **Healthcare sales cycle & trust.** Clinics are cautious buyers; switching billing systems is high-stakes. Requires proof (the pilot), references, and airtight contracting/BAAs.
7. **Incumbent competition.** Established EHR/PM and RCM vendors and billing services. PracticeForceOne must win on the unified workflow + AI automation + independent-clinic focus, not on breadth.
8. **Regulatory & payer variability.** Payer rules, prior-auth requirements, and state Medicaid (SoonerCare) specifics differ and change; the rules engine must stay current.
9. **Capital.** Compliance, clearinghouse enrollment, insurance, and any hiring require cash the business does not yet generate (§10).

**IP hygiene**
10. **Clean IP ownership.** The code predates the LLC and the underlying JAC platform is licensed to Architects of Software Design, Corp.; an IP assignment/license into PracticeForceOne, LLC should be executed so the company's assets are unambiguous — important for both operations and any financing.

---

## 10. Funding Needs

The company is **bootstrapped** today and can reach the first paid pilot on modest cash if the founder continues solo. Capital's job is to **buy speed and reduce key-person risk** on the path to GA.

**Indicative pre-GA cost drivers (12–18 months):**

| Category | Rough range | Notes |
|---|---|---|
| HIPAA/security readiness (risk assessment, controls, policies, legal/BAA) | $15K–$40K | Some via tooling/fractional consultants |
| Clearinghouse / EDI setup + enrollment | $5K–$25K + transaction fees | Plus per-claim/transaction costs at volume |
| Cloud infrastructure (GCP) | $1K–$5K / month | Scales with usage; low at pilot scale |
| Insurance (cyber, tech E&O, general liability) | $3K–$10K / year | Required before handling live PHI |
| Brand / marketing site / domains / trademark | $2K–$10K | Site on GCP; Class 42 trademark after knockout search |
| First hire — billing/clinical SME or engineer (optional, funded path) | $80K–$150K / year | Removes single-founder bottleneck |
| Founder runway / working capital (12–18 mo) | Variable | The largest swing factor |

**Two paths:**

- **Bootstrapped-to-pilot (minimal cash).** Founder-funded; spend concentrated on compliance essentials, clearinghouse enrollment, and infra. Slower, but reaches a paid pilot and first revenue with little dilution. Estimated hard cash outside founder time: **~$40K–$80K**.
- **Seed raise (~$250K–$500K).** Funds compliance, clearinghouse, infrastructure, insurance, brand, **and a first hire**, plus founder runway — compressing the timeline to GA and the first several paying customers, and producing the metrics for a larger round if the model proves out.

**Use of a seed round, in priority order:** (1) HIPAA/security readiness, (2) clearinghouse/EDI to enable real claims, (3) platform hardening + first billing specialist, (4) own-practice go-live instrumentation, (5) GA onboarding tooling and early external sales.

**What unlocks funding:** the founder's own-practice results — CPA-audited (clean-claim rate, denial reduction, A/R days, underpayment recovery, staff hours saved). One credible, reconciled proof point converts this from a promising build into an investable, revenue-generating company.

---

## 11. Milestones & Next Steps

**Near-term (next ~90 days)**
- Drive core workflow defects (provider CRUD and generator issues) to zero in staging.
- Define the founder's own-practice go-live scope and CPA-audited success metrics.
- Complete a HIPAA security risk assessment and a controls gap list.
- Select a clearinghouse and begin payer-enrollment planning for the founder's practice.
- Execute the IP assignment/license into PracticeForceOne, LLC; resolve open LLC items (registered agent, EIN, banking).

**Mid-term (3–9 months)**
- Implement priority security controls; stand up production environment separate from staging.
- Establish the clearinghouse connection; submit first real 837 / receive first 835 for the founder's practice.
- Go live in the founder's own practice; instrument and report CPA-audited metrics.
- Sign the first external peer client (the Oklahoma City reference clinic is a natural first); build the multi-clinic onboarding runbook.

**Decision point**
- With own-practice metrics in hand: choose **bootstrap-and-grow** vs. **raise a seed** to accelerate GA and external sales.

---

## 12. Risks & Mitigations (summary)

| Risk | Mitigation |
|---|---|
| Single-founder bandwidth / continuity | First hire on funding; AI-accelerated engineering; documented runbooks |
| PHI / security exposure | HIPAA readiness before any live data; encryption, audit, access control, insurance |
| No real claim path yet | Prioritize clearinghouse/EDI as a gating milestone (P2) |
| Long, trust-heavy sales cycle | Lead with the founder's own-practice results (CPA-audited) and clinical peer trust |
| Platform still stabilizing | Characterization/UAT gates; drive defect classes to zero before go-live |
| Capital constraints | Viable bootstrapped path to first revenue (own practice); raise only to accelerate, from a position of proof |
| IP ambiguity (pre-LLC code, JAC license) | Execute assignment/license into the LLC early |

---

## 13. Appendix — Company Facts & References

- **Entity:** PracticeForceOne, LLC — Florida, single-member (Paul Marshall), filed 2026-06-11 (Sunbiz).
- **Domains:** practiceforceone.com (primary), practiceforceone.net (redirect).
- **Product:** AI-assisted RCM + practice-operations platform on the JAC code-generation stack, deployed on Google Cloud Run + Cloud SQL (PostgreSQL, g1-small); live build **1943** (gate 251/251 GREEN).
- **First customer:** the founder's own practice (Customer #1). **First market:** Oklahoma, with an external Oklahoma City clinic as an early reference/first-external-client template; payer focus includes Medicare/MA, SoonerCare/SoonerSelect, BCBS of Oklahoma, HealthChoice.
- **Founder:** practicing clinician with CPA + audit credentials (see [BusinessOpportunity](<PracticeForceOneBusinessOpportunity.md>) and [BusinessCase](<BusinessCase.md>)).
- **Related business docs** (in the app repo under `jac2024/app/com/claimsprocessing/business/`): `README.md`, `Decisions.md`, `01-LLC-Formation-Sunbiz.md`, `04-Trademark-Plan.md`, `05-Compliance-Calendar.md`, `formation-documents/`.
- **Discovery reference:** `PracticeForceOneClinicWalkthrough.md` (Oklahoma visit deep-dive).

_This plan is a living document. Update it as the pilot scope firms up, compliance and clearinghouse decisions are made, and the bootstrap-vs-raise decision is taken._

---

## Review Epilog — 2026-07-24

Reviewed 2026-07-24. Status: UPDATED.

- Updated build reference from "staging build ~1619" to live build **1943** (gate 251/251 GREEN); corrected "staging environment" to "production" with verified demo data in place.
- Current state paragraph updated to reflect: RBAC ON since build 1534; 540+ CF definitions live; August demo path end-to-end verified; backup/restore operational (daily backups, restore drill proven RTO ~17 min); code generator stabilized.
- Appendix build stamp corrected from "~1619" to live build 1943; Cloud SQL tier updated to g1-small (DB tier bump completed 2026-07-18).
- Business strategy, go-to-market narrative, financial model, and runway phases left intact — no factual errors found in those sections.
