---
title: "PracticeForceOneCertificationCosting"
---

# ONC Certification — Cost Model for PFO (2026-08-15)

**AgentFuture.** Companion to [PracticeForceOneCertificationReadiness](PracticeForceOneCertificationReadiness.html)
and [PracticeForceOneCompetitiveMatrix](PracticeForceOneCompetitiveMatrix.html).

**Purpose:** turn "certification is expensive" into a structure with named components, so the unknowns
are *specific* rather than atmospheric.

## FINDING 0 — the fees are not published, and that is the first result

I searched the ONC-ACBs directly. **Drummond Group, ICSA Labs and SLI Compliance do not publish
certification pricing.** It is quote-based, and it varies with scope, product complexity, and how
many criteria you present.

**So no honest costing can state an ACB number today.** What follows is the model; the three quotes
are a morning of phone calls and are the single cheapest way to convert this whole document from
estimate to fact.

**Tags:** `V` verified this session · `S` structural (true by how the program works) · `U` unknown,
requires quote or internal estimate.

---

## 1. THE COST STRUCTURE — five buckets, and the fees are the smallest

| # | Bucket | Nature | Magnitude |
|---|---|---|---|
| 1 | **ATL testing fees** | per test campaign | `U` — quote |
| 2 | **ACB certification fees** | per certification + listing | `U` — quote |
| 3 | **Engineering to reach conformance** | internal build | **dominant** |
| 4 | **Ongoing Conditions & Maintenance** | **permanent, annual** | **chronically underestimated** |
| 5 | **Opportunity cost** | what doesn't get built | **largest of all** |

> **The common mistake is budgeting buckets 1–2 and discovering 3–5.** Buckets 1 and 2 are a
> line item. Buckets 3, 4 and 5 decide whether certification is survivable for a small team.

---

## 2. BUCKET 3 — engineering, by criterion

From the Base EHR set (see the readiness matrix; sourced from healthit.gov, page updated 2026-05-07).
Effort is **relative**, not absolute — PFO's actual capability per row is still `UNKNOWN` pending the
evidence pass.

| Criterion | Name | Est. lift | Build / Buy / Partner |
|---|---|---|---|
| §170.315(a)(5) | Demographics | **Low** | Build — likely mostly present |
| (a)(14) | Implantable device list | **Low-Med** | Build — needs a home |
| (a)(1)/(2)/(3) | CPOE (one of meds/lab/imaging) | **Med** | Build — **only ONE required** |
| (b)(11) | Decision support interventions | **Med-High** | Build — closest to PFO's inference engine, but DSI has **source-attribution/provenance** requirements |
| (c)(1) | CQM record + export | **High** | **PARTNER** — QRDA/CQL is a specialist domain |
| (b)(1) | Transitions of care (C-CDA) | **High** | **Buy/Partner** — generating XML ≠ conformance |
| (g)(7) | App access — patient selection | **Med** | Build |
| (g)(9) | App access — all data request | **High** | Build — USCDI breadth |
| **(g)(10)** | **Standardized API (US Core/SMART)** | **HIGHEST** | Build — **the heaviest single row** |
| (h)(1)/(2) | Direct Project | **Med** | **BUY** — use a HISP, do not build |
| (b)(4) | RTPB | **Med** | Partner — **not required until 2028-01-01** |
| **(b)(10)** | **EHI export** | **High** | Build — applies to a module that **stores EHI**, which PFO does |

**Three sequencing facts that materially reduce cost:**
1. **CPOE needs only ONE of meds/lab/imaging.** Choose the cheapest.
2. **Direct is (h)(1) *or* (h)(2)** — and should be bought from a HISP, not built.
3. **RTPB is not in scope until 2028.** Do not build it now.

**The two rows that dominate: (g)(10) and (b)(10).** The API because conformance is behavioural and
tested with real tooling; EHI export because feasibility is decided by persistence choices already
being made.

---

## 3. BUCKET 4 — the recurring obligations that kill small vendors

**Certification is not a project. It is a permanent operating status**, and this is the bucket most
first-time developers miss entirely. `S` — these follow from how the program works:

- **Real-world testing** — annual plans and results
- **Attestations** — recurring, on a fixed cycle
- **Surveillance** — an ACB can require you to demonstrate certified functionality at any time
- **Mandatory cost & fee transparency** — certified developers must **publicly publish** their costs
  and limitations. *(Every certified competitor has one; CareCloud's is a live example — that page is
  itself an artefact of this obligation.)*
- **Information Blocking compliance** — permanent, with real enforcement exposure
- **API access and fee terms** — constrained; you may not price your API freely
- **Recertification when standards advance** — USCDI/US Core versions move, and you must move with
  them or lose certification

> **Certification converts engineering capacity into a permanent annual tax.** For a team of PFO's
> current size that is the real cost, not the ACB invoice.

---

## 4. THE THREE PATHS, COSTED RELATIVELY

| Path | Scope | Relative cost | Gets PFO |
|---|---|---|---|
| **A — Do not certify** | Cash-pay only (Oasis, med spa, functional) | **$0** | The entire Path-A market from the matrix. **No CEHRT required.** |
| **B — Narrow Health IT Module** | Certify a subset; partner the rest | **Lowest non-zero** | Eligibility for some programs; a real listing; far less surface |
| **C — Full Base EHR** | All 11 criteria + (b)(10) | **Highest** | Full insurance-billing market access |

**The Base EHR definition may be satisfied by a COMBINATION of certified modules** — which is exactly
why Path B exists and why "we must build all of it ourselves" is a false premise.

---

## 5. WHAT I ACTUALLY RECOMMEND

**Do not start certification now.** Not because it is unaffordable, but because of **sequencing**:

1. **Certification buys market ACCESS, not product-market fit.** PFO has n=1. Buying access to a
   market you have not yet proven you can serve is the expensive order of operations.
2. **Path A generates revenue with certification cost $0.** Cash-pay does not need CEHRT. That is the
   on-ramp identified in the competitive matrix, and it funds Path B or C later.
3. **Bucket 4 is permanent.** Taking on an annual compliance obligation before you have a second
   customer converts a small team into a compliance team.

**What to do instead, now:**
- **Get the three quotes** (Drummond, ICSA Labs, SLI). Converts bucket 1–2 from `U` to a number.
  A morning of calls.
- **Ask each ACB specifically about a NARROW module scope** — that answer is what makes Path B real
  or not, and it is not on their websites.
- **Keep certification-awareness in the build**, per the standing directive: provenance, structured
  data, exportability, audit. **Do not implement criteria.** Awareness is nearly free; implementation
  is not.
- **Resolve the 2025-12-29 ASTP/ONC deregulatory rule first** (still unread — the government sites
  bot-block this environment). **A deregulatory rule can REMOVE criteria.** Costing a criterion set
  that is about to shrink would waste the estimate.

---

## 6. THE HONEST BOTTOM LINE

**Certification is not primarily a money problem — it is a capacity and timing problem.**

The invoice is quotable and probably survivable. **The engineering, and the permanent annual
obligation that follows, is what a small team cannot carry while it is still proving the product on
its first clinic.**

**The good news is structural and worth stating plainly: PFO's fastest commercial path does not
require certification at all.** Cash-pay clinics do not buy CEHRT. That means certification is a
**deferrable, fundable decision** rather than a gate on getting started — and deferring it correctly
is worth more than costing it precisely.

**Cost it properly when there is a second clinic and a reason. Not before.**

---

*AgentFuture, 2026-08-15. ACB/ATL fees are `UNKNOWN` — not published by any ONC-ACB; three quotes
resolve them. Criterion list sourced from healthit.gov (page updated 2026-05-07). No dollar figures
are invented here on purpose: a made-up number would be treated as a fact by the next reader.*

## Sources
- [Drummond Group — ONC Health IT Certification](https://www.drummondgroup.com/services/onc-health-it-certification/)
- [ICSA Labs — ONC Health IT](https://www.icsalabs.com/technology-program/onc-ehr) · [ONC-ACB](https://www.icsalabs.com/technology-program/onc-acb)
- [CareCloud — ONC Certified Health IT Cost & Fees disclosure](https://carecloud.com/cost-and-fees-information/) (example of the mandatory transparency obligation)
- [CHPL](https://chpl.healthit.gov/) — authoritative certified-product catalog
- [Base EHR definition — HealthIT.gov](https://healthit.gov/certification-health-it/certification-criteria/base-electronic-health-record-definition/)
