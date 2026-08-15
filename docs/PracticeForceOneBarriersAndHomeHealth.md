---
title: "PracticeForceOneBarriersAndHomeHealth"
---

# Barriers to Entry, Revenue Realism, and the Home Health Market (2026-08-15)

**AgentFuture.** Companion to [PracticeForceOneCompetitiveMatrix](PracticeForceOneCompetitiveMatrix.html)
and [PracticeForceOneCertificationCosting](PracticeForceOneCertificationCosting.html).

Three questions, answered in order. Same posture: accurate rather than encouraging.

---

# PART 1 — THE REAL BARRIERS TO ENTRY

Ranked by **how binding they actually are**, not by how much they cost. This ordering is the useful
part — most people rank by cost and then get stopped by something free.

| # | Barrier | Binding? | Can money fix it? |
|---|---|---|---|
| 1 | **References / trust (n=1)** | **HARDEST** | **No.** Only time and a second customer. |
| 2 | **Support + uptime expectation** | **Very hard** | Partly — but it needs *people*, during clinic hours |
| 3 | **Regulatory gate (varies by market)** | Hard **or zero** | Yes — and **it is zero in the right markets** |
| 4 | **Switching cost / data migration** | Hard | Partly — migration tooling and services |
| 5 | **Payer / clearinghouse enrollment** | Medium | Yes |
| 6 | **Security questionnaires, BAAs, E&O + cyber insurance** | Medium | Yes — but it is a real line item people forget |
| 7 | **Capital for the sales cycle** | Medium | Yes |
| 8 | **Team capacity** | **Very hard** | Slowly |

**The two that actually decide PFO's fate are #1 and #2 — and neither is a technology problem.**
A clinic betting its revenue cycle on you is buying an organization that answers the phone at 8am,
not a feature list.

**Barrier #3 is the one that varies, and that variance is the whole strategy.** It is a wall in
Medicare-certified home health, a wall in insurance-billed ambulatory, and **approximately zero in
cash-pay aesthetics, wellness, and private-duty home care.**

---

# PART 2 — IS THERE A REALISTIC REVENUE STREAM?

**Yes — but not the one the product looks like it is aiming at.**

The realistic revenue stream is **not** "sell an EHR to ambulatory practices." That market is
saturated, certified, incumbent-defended and slow. The realistic stream has three legs:

### Leg 1 — Cash-pay clinical businesses (aesthetics, wellness, functional, weight/hormone)
No CEHRT. Owner-decided purchases. Fast cycles. **PFO already built the hard parts (Oasis).**

### Leg 2 — Payment volume, not seats
The subscription is the visible revenue; **the payment spread is the durable one**, and it scales
with the customer's growth rather than headcount. PFO already has the processor-neutral abstraction
and POS. **This is the single largest financial lever available.**

### Leg 3 — Private-duty / non-medical home care *(see Part 3)*
Same shape as Leg 1: **largely private-pay, no OASIS, no Medicare certification**, fragmented and
under-served software market.

> **The common thread is the actual strategy:** markets where the **buyer pays cash**, the
> **regulatory gate is low**, and **money flows through the platform.**
>
> PFO is not best positioned as "an EHR company." It is positioned as **the operating system for
> cash-pay healthcare businesses — with a real clinical record underneath**, which is precisely what
> the spa/scheduling incumbents cannot offer and the certified EHRs will not build.

**Realistic scale, restated:** subscription alone, dozens to low hundreds of accounts, **$1–10M ARR**.
**With payment volume attached, materially higher** — because revenue then tracks customer success.
That is the difference between a good business and a large one.

---

# PART 3 — HOME HEALTH

## The most important finding: this is NOT an adjacent market

Home health looks adjacent (patients, clinicians, charting, billing). **Operationally and legally it
is a different business**, and treating it as "ambulatory with visits at home" is the classic way to
lose money here.

| | Ambulatory / Aesthetics | Home Health |
|---|---|---|
| Payment | Fee-for-service / cash | **Episodic (PDGM, 30-day periods)** |
| Required assessment | none | **OASIS-E, submitted to CMS** |
| Visit proof | n/a | **EVV — federally mandated for Medicaid** |
| Core operational problem | encounter throughput | **field labor: scheduling, routing, credentials, payroll** |
| Mobile | convenience | **mandatory, and must work offline** |
| Compliance | HIPAA + certification | **Conditions of Participation + survey** |

**Three of those rows are capabilities PFO does not have in any form today:** episodic billing, OASIS,
and field-labor scheduling/routing with offline mobile. That is not a sprint; it is a product line.

## The competitor set (different from every other list in this wiki)

**Medicare-certified home health / hospice — consolidated and defended:**
**WellSky** (formerly Kinnser; the most widely used) · **Homecare Homebase (HCHB)** (strong scheduling
optimization and real-time field visibility) · **Axxess** (cloud home health/hospice/home care, more
modern UI than legacy systems) · **KanTime** · **MatrixCare** (ResMed) · **Netsmart myUnity** ·
**HealthWare** · **Alora** · **AlayaCare**

**Private duty / non-medical home care — fragmented and weaker:**
**ClearCare** · **AxisCare** · **CareSmartz360** · **eRSP** · **InMyTeam** · Alora and Axxess also
play here

**Read the split carefully:** the top of this market is *more* consolidated than ambulatory — WellSky
and HCHB are entrenched with agencies whose Medicare revenue depends on the software working. **That
is the single worst possible first target for a vendor with n=1 and no support organization.**

## Where PFO could realistically play

**Private-duty / non-medical home care.** It is the **cash-pay corner of home health**, and it mirrors
the aesthetics logic exactly:

- **No OASIS.** No Medicare certification. No PDGM.
- **Often private-pay** — families paying directly.
- **Fragmented, weaker software.** Scheduling-and-billing tools, thin clinical substance.
- **Payments flow through the platform** — families pay recurring invoices. **Leg 2 applies directly.**
- **PFO's differentiator transfers:** these tools have almost no real clinical record. PFO would.

**One hard caveat that is not optional:** **EVV is federally mandated (21st Century Cures Act) for
Medicaid-funded personal care.** If PFO touches Medicaid-funded home care, **EVV is a wall, not a
feature** — state-by-state aggregator integrations, verified time/location capture. **Pure private-pay
avoids it. Medicaid does not.** That single distinction decides whether this is a low-barrier or
high-barrier entry.

## Where the control tower genuinely fits — and it fits well

Home care's daily operational failure modes are **exactly** the control-tower shape:

> unstaffed visits today · missed/late visits · caregiver credential expirations · unsigned notes ·
> unbilled visits · authorization units running out · client care-plan changes not propagated

**This is arguably a better control-tower fit than ambulatory**, because agency operations are
*already* run from a whiteboard of "what is broken right now." That is the demo, and it needs no
certification to give.

**But the honest counterweight:** the operational core of home care software is **scheduling and
routing of field labor**, which PFO has none of. Winning here means building a workforce-scheduling
product, not extending a clinical one.

## My recommendation on sequencing

**Do not enter home health after aesthetics. Enter *private-duty home care* after aesthetics, and
treat Medicare-certified home health as a separate strategic decision years out.**

The reason is the same one that makes cash-pay the right first market: **the regulatory gate is near
zero, the buyer pays cash, payments flow through the platform, and the incumbents are weakest.**
Medicare-certified home health inverts every one of those.

---

# THE SYNTHESIS

Three markets, one pattern:

| Market | Gate | Verdict |
|---|---|---|
| **Cash-pay aesthetics / wellness** | none | **Enter first.** Built. |
| **Private-duty home care** *(private-pay)* | none *(EVV only if Medicaid)* | **Enter second.** Needs scheduling/routing. |
| Insurance ambulatory | **CEHRT** | Fund it later, from the first two |
| Medicare-certified home health | **OASIS + PDGM + CoP + EVV** | **Not a near-term market.** |

**PFO's realistic business is cash-pay healthcare operations with a genuine clinical record and
payments underneath.** That framing is consistent across all three analyses in this wiki, it routes
around every hard barrier, and it is the version of PFO that can be sold by a small team **this year**
rather than after a certification program.

*— AgentFuture, 2026-08-15. Home health competitor set from 2026 comparison sources; capability
claims about named vendors are REPORTED, not verified. EVV/OASIS/PDGM obligations are structural
program facts and should be confirmed against CMS before any commitment.*

## Sources
- [G2 — WellSky Home Health alternatives](https://www.g2.com/products/wellsky-wellsky-home-health/competitors/alternatives)
- [SelectHub — WellSky alternatives](https://www.selecthub.com/home-health-software/wellsky-home-health/alternatives/)
- [Software Advice — Axxess HomeCare vs WellSky](https://www.softwareadvice.com/home-health/axxess-homecare-profile/vs/wellsky-home-health/)
- [G2 — ClearCare alternatives](https://www.g2.com/products/clearcare/competitors/alternatives)
