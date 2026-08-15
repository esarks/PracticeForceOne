---
title: "PracticeForceOneThesisKillAttempt"
---

# Attempt to Kill the PFO Thesis — Second Pass (2026-08-15)

**AgentFuture.** Response to the second-pass directive. Companion to
[PracticeForceOneCompetitiveMatrix](PracticeForceOneCompetitiveMatrix.html).

## Scope statement — read first

The directive requests **20 decision-quality deliverables**. Several (competitor teardowns, payment
economics, TAM/SAM/SOM, implementation economics) require research and commercial conversations I
cannot complete in one pass. **Producing all twenty now would mean writing directional judgements in
the shape of evidence — precisely what §17 of the directive forbids.**

So this document delivers the instruction that outranks the others:

> **"The next research pass should attempt to kill this thesis."**

Four attacks below use the **new evidence the directive itself supplied**. Two of them land hard.
The remaining deliverables are scoped at the end.

---

# ATTACK 1 — The Control Tower is not a new idea. **LANDS HARD.**

**The directive supplies the disproof, and it should be stated bluntly rather than softened.**

**athenahealth's Workflow Dashboard surfaces insurance problems, outstanding payments, cancellations,
no-shows, appointments needing scheduling or rescheduling, and claims requiring attention — and
athenahealth calls these "exception-based workflows."**

That is not merely a work queue. It is:
- **cross-domain** (clinical + scheduling + financial)
- **exception-oriented rather than module-oriented**
- **described in PFO's own vocabulary**

**eClinicalWorks** adds Work Queue Dashboards for claims/AR and **Alerts Dashboards that prioritise
claims by filing window** — which is *aging-aware exception prioritisation*, the same idea as
"how long has this been waiting."

**Verdict: `DISPROVEN` — "exception-driven cross-domain operational surface" is NOT novel.**
A competitor already ships it and already markets it in these words.

### What actually survives, stated narrowly

Only these remain arguable, and each is **`UNKNOWN`, not proven**:

1. **Definition-driven lane semantics** — lane membership and card meaning published as configuration,
   inherited by every view, rather than coded per board. *(PFO: `LIVE`. Competitors: `UNKNOWN`.)*
2. **One work model spanning medical AND aesthetic/commercial operations** — athena's dashboard is
   cross-domain within *insurance medicine*. Whether any system spans clinical + inventory + POS +
   memberships in one work model is untested.
3. **Per-practice configurability of that model** without forking the engine.

**These are engineering distinctions. Whether a buyer can perceive them in a demo is a separate and
unanswered question** — and if they cannot, they are not differentiation, they are architecture.

**Consequence:** the Control Tower cannot be the headline. It may be the *delivery mechanism* for a
differentiator that must come from somewhere else.

---

# ATTACK 2 — The hybrid middle is already contested. **LANDS.**

The first analysis framed the medical/commerce intersection as **white space**. The directive's own
evidence contradicts that: **PatientNow now markets to weight loss, IV therapy, dermatology and
wellness** — not aesthetics alone.

**So the convergence is being approached from the aesthetics side already, while OptiMantra approaches
it from the clinical side.** PFO would be entering a **contested convergence**, not an empty middle.

**Verdict: `DISPROVEN as white space`. `SUPPORTED as a real and growing category`** — which is better
news for market existence and worse news for uniqueness. A category multiple funded vendors are
converging on is validated *and* defended.

---

# ATTACK 3 — I understated the aesthetics incumbents. **CORRECTION OWED.**

I previously described Cluster B competitors as *"operationally decent and architecturally shallow
compared with what PFO already runs."*

**That was an assumption, not evidence, and I retract it.**

**Aesthetic Record reports serving 9,000+ aesthetic accounts.** That is not a weak incumbent — it is
a scaled one with distribution, references and support capacity PFO does not have. PatientNow spans
scheduling, EMR, payments, photography, marketing, memberships, retail, recurring billing and
analytics.

**Consequence for the "Oasis first" inversion:** it survives as a *certification-avoidance* strategy,
but **not** as an "enter a weak market" strategy. **Inventory, photos, POS, packages and memberships
are table stakes there, not advantages.** Oasis does not enter that market ahead; it enters level, and
must differentiate on something Cluster B lacks.

---

# ATTACK 4 — "Cash-pay means no certification" was too binary. **CORRECTION OWED.**

My phrasing was directionally useful and technically sloppy. The directive is right.

**The rule is not cash-vs-insurance. It is whether the practice's regulatory and reimbursement
participation depends on PFO itself satisfying CEHRT requirements.** CMS requires a CMS EHR
Certification ID from CHPL for Traditional MIPS Promoting Interoperability reporting — so the
dependency attaches to **programme participation**, not to payment method.

**Corrected statement:**
> **PFO can commercialise first in segments whose business model and regulatory participation do not
> depend on PFO satisfying CEHRT.** That group skews heavily cash-pay and hybrid — **but cash-pay is
> a correlate, not the rule.**

A practice can accept insurance and still not require *PFO* to be certified, depending on which
programmes it participates in and what other certified technology it runs. **That widens the
near-term addressable market and makes the Certification Dependency Map (deliverable 6) more valuable
than I previously judged.**

---

# ATTACK 5 — Payment revenue is a capability, not yet revenue. **CORRECTION OWED.**

The directive is right that I let this read as a lever when it is a hypothesis.

**Having a `PaymentProvider` abstraction and checkout means PFO can *enable* payments. It does not
mean PFO *earns* on volume.** Those are different businesses, separated by contractual processor
economics, merchant-of-record structure, and possibly payment-facilitation obligations.

**Corrected status: `SUPPORTED HYPOTHESIS — economics unestablished`.** No transaction margin belongs
in any PFO model until a processor term sheet exists. The architecture remains valuable regardless,
because it preserves the option.

---

# WHAT SURVIVES THE ATTACKS

After four hits, the thesis is **narrower and more honest**:

> **`SUPPORTED HYPOTHESIS`: PFO's defensible claim is a genuine longitudinal clinical record beneath
> healthcare commerce — not an exception dashboard, and not the fact of integration.**

Because:
- **Cluster A** (athena, eCW) has the record and real exception workflows, **but not commerce** —
  inventory, lots, POS, memberships, photography are not what those products are for.
- **Cluster B** (Aesthetic Record, PatientNow) has commerce at scale, **but is weaker as a
  longitudinal medical system** — `UNKNOWN`, plausible, **and the single most important thing left to
  verify**, because the entire remaining thesis rests on it.
- **OptiMantra** claims both and is therefore **the one competitor that could falsify the thesis
  outright.**

**The thesis now rests on one testable proposition rather than a bundle of claimed advantages.** That
is a better position to be in than before this pass, even though it is a smaller claim.

---

# THE FOUNDER DECISION PAGE (deliverable 20 — deliverable now, needs no research)

Ten decisions that are genuinely yours, not analysis:

1. **Is PFO a company or ReCenter's operating system?** Everything downstream changes. Drifting is
   the expensive outcome.
2. **Does PFO enter aesthetics/wellness at parity?** The incumbents are scaled, not weak. Entering
   level requires a reason to switch, not a feature list.
3. **What is the one thing PFO sells?** After this pass it cannot be "integration" or "exception
   dashboards." The candidate is *"a real medical record under your commerce."*
4. **Coexistence or replacement?** Running beside a certified incumbent avoids the switching wall —
   **but risks the parallel-truth violation PFO's own architecture forbids.** Architectural decision
   with commercial consequences.
5. **Do you want payment economics?** If yes, that is a term-sheet conversation now, and possibly a
   regulated undertaking.
6. **Who is customer #2, and when?** Nothing else resolves n=1.
7. **What operating improvement will ReCenter measurably prove?** Choose the metrics *before* the
   evidence, or it becomes anecdote.
8. **Certification: defer, narrow module, or full?** Not affordability — sequencing.
9. **How many clinics can you actually onboard per year?** SOM is capacity-bound, not market-bound.
10. **What are you willing to not build?** The 2026 competitive package is a decade of work for a team
    this size.

---

# REMAINING DELIVERABLES — scoped, in evidence-value order

Not done. Honest about what each requires:

| # | Deliverable | Requires |
|---|---|---|
| 1 | **OptiMantra teardown** | trial/demo access — **highest value; can falsify the surviving thesis** |
| 2 | **Cluster B clinical-depth test** | Aesthetic Record / PatientNow: how real is the medical record? **The thesis rests here.** |
| 3 | **athenaOne control-tower teardown** | demo/documentation — closes Attack 1 properly |
| 4 | **Certification Dependency Map** | regulatory reading + counsel on edges |
| 5 | **Payment economics** | processor conversations — **a phone call, not a project** |
| 6 | **Implementation economics** | measurable only at customer #2 |
| 7 | **TAM/SAM/SOM** | industry data; **SOM is capacity-bound and estimable now** |
| 8 | **Feature matrix v2 (3/2/1/0/?)** | follows the teardowns — **not before them** |
| 9 | **Outcome matrix + ReCenter evidence plan** | metric selection **before** measurement |
| 10 | **Moat / risk / decision tree** | follows 1–9 |

**Deliberate sequencing note:** the matrices are **last**, not first. Building matrix v2 before the
teardowns would repeat the first pass's error — a well-structured document whose cells are mostly
`UNKNOWN`, which we have already learned costs effort and produces no decision.

*— AgentFuture, 2026-08-15. Competitor capability statements are `REPORTED` from the directive's
supplied evidence. Four corrections to my own prior analysis are recorded above rather than quietly
revised.*
