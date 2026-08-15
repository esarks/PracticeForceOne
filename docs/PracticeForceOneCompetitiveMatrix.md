---
title: "PracticeForceOneCompetitiveMatrix"
---

# PracticeForceOne — Competitive Mapping (2026-08-15)

**AgentFuture.** Companion to [PracticeForceOneMarketSurvey](PracticeForceOneMarketSurvey.html).

**8 vendors × 12 decision-driving capabilities**, deliberately *not* the 40 × 60 (2,400 cells) design —
that produces confident-looking unverifiable data that decays in months. Every cell is evidence-tagged.

## Evidence legend — read before using any cell

| Tag | Means |
|---|---|
| **`V`** | VERIFIED — official source fetched this session |
| **`R`** | REPORTED — vendor marketing / comparison content from the founder's sweep. **Vendor marketing is a claim, not a capability.** |
| **`U`** | UNKNOWN — not established. **Stays UNKNOWN.** |

**PFO's column uses the fleet's own states — `PROVEN` / `LIVE` / `BUILT` / `ABSENT` — never intent.**
Scoring PFO on design while scoring competitors on shipped product is the single easiest way to make
this document lie.

**Honest limitation up front:** most competitor cells are `R`. This matrix's value is the **shape it
reveals**, not cell-level precision. Do not quote a single cell in a sales conversation.

---

## THE MATRIX

Vendors: **eCW** eClinicalWorks · **OPT** OptiMantra · **ATH** athenahealth · **TEB** Tebra ·
**ELA** Elation · **MOD** ModMed · **AR** Aesthetic Record · **CER** Cerbo

| # | Capability | eCW | OPT | ATH | TEB | ELA | MOD | AR | CER | **PFO** |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **ONC certification (market-entry gate)** | U | U | U | U | U | U | U | U | **ABSENT** |
| 2 | One patient identity across medical + aesthetic | U | R | U | U | U | R | U | U | **LIVE** |
| 3 | Cash-pay + insurance in one encounter | U | R | U | U | U | R | R | R | **BUILT** |
| 4 | Lot / expiration inventory | U | R | U | U | U | U | R | U | **BUILT** |
| 5 | POS / retail | U | R | U | U | U | R | R | U | **BUILT** |
| 6 | Memberships / packages / recurring | U | R | U | U | U | U | R | U | **ABSENT** |
| 7 | Clinical photography (governed) | U | U | U | U | U | R | R | U | **ABSENT** |
| 8 | **Operational work surface (control tower)** | U | U | U | U | U | U | U | U | **LIVE** |
| 9 | Documentation AI / inference | R | U | R | U | R | R | U | U | **LIVE** |
| 10 | RCM depth (claims → denials → ERA) | R | U | R | R | U | R | U | U | **LIVE** |
| 11 | Recall / patient engagement | R | R | R | R | R | R | R | U | **BUILT** |
| 12 | Incumbency / switching cost *(against PFO)* | **HIGHEST** | Low | High | Med | Med | High | Med | Low | — |

**Nine of twelve rows are `U` for most vendors.** That is the finding, not a gap in the work: **we do
not actually know where we stand.** Any claim of uniqueness today rests on not having looked.

---

## WHAT THE SHAPE SHOWS

### The market splits into two clusters that do not overlap

**Cluster A — general ambulatory** (eCW, athenahealth, Tebra, Elation): deep RCM, certified,
engagement, documentation AI. **Rows 4–7 are largely absent** — inventory, POS, memberships and
clinical photography are not what these products are for.

**Cluster B — aesthetics / wellness** (Aesthetic Record, Cerbo, partly ModMed): inventory, POS,
photos, memberships, cash-pay. **Row 10 is largely absent** — no serious insurance RCM.

**OptiMantra is the only vendor with meaningful presence in both**, which is exactly why the survey's
#2 ranking is right and why it is the single most important competitor to study.

### PFO's white space is the intersection — and so is its risk

PFO's thesis is *rows 2 + 3 + 4 + 5 + 10 on one patient identity*. The matrix supports that as
genuine white space. **Two cautions that matter more than the encouragement:**

1. **The intersection may be a small market.** A segment nobody serves is sometimes a segment that
   isn't worth serving. **OptiMantra's existence is the only external evidence that it is real** —
   which is also why it should be studied rather than dismissed as a smaller competitor.
2. **PFO is weakest exactly where Cluster A is strongest.** Rows 1, 10 and 12: not certified, RCM
   live-but-young, and facing the highest switching cost in the market at the one clinic it has.

### Row 1 can void the entire matrix

If a practice bills insurance and participates in CMS quality programs, **CEHRT status can filter PFO
out before any capability is compared.** PFO could win rows 2–11 and still be ineligible.

**Resolution method (cheap, not yet done):** search [CHPL](https://chpl.healthit.gov/) by developer
name for each vendor and record edition + certified criteria. CHPL is a JS application and could not
be queried by fetch this session — **it needs a browser or the CHPL REST API**, and it is the highest
value-per-hour research remaining in this document.

### Row 8 is PFO's claim and nobody has checked it

Every competitor cell is `U` — **including PFO's competitors' worklists, inboxes and denial queues,
which certainly exist.** The open question is not *"does PFO have a control tower"* but *"is a
competitor's work queue already close enough that a buyer sees no difference?"*

**That question is answerable only by seeing a competitor's daily-operations screen** — trial, demo,
recorded walkthrough, or a clinician who has used both. Until then row 8 is **the differentiation
thesis, not a differentiator.**

---

## WHAT I WOULD DO NEXT, IN ORDER

1. **Resolve row 1 for all 8 vendors via CHPL.** Cheapest, most decision-changing, and it may reorder
   the threat ranking outright.
2. **Get inside OptiMantra** — trial or demo. It is the only vendor spanning both clusters, and the
   only external validation that PFO's segment exists.
3. **Resolve row 8 for eCW and athenahealth.** These two determine whether PFO's headline
   differentiation survives contact with an incumbent.
4. **Then, and only then, widen the matrix.** Deepening a matrix whose top row is unknown is motion,
   not progress.

## THE STRATEGIC READ

Cluster A vendors would have to build inventory, POS, photography and memberships to reach PFO's
position — **plausible but off-strategy for them.** Cluster B vendors would have to build insurance
RCM — **harder, and further from their buyer.** OptiMantra is trying to do both.

**So the defensible position is not "PFO does more." It is that PFO's combination is one nobody else
has strong commercial reason to assemble** — and that only holds while the intersection stays
unattractive to Cluster A. It is a timing advantage, not a moat.

**The one thing that would make it a moat** is row 8 done properly: an operational truth layer over a
single longitudinal record. That is also PFO's largest technical risk, because a control tower showing
a stale card or a wrong owner is worse than none — it invites a clinician to trust it. **PFO's
differentiation and its biggest engineering risk are the same artifact.**

---

*AgentFuture, 2026-08-15. Competitor cells are `REPORTED` from vendor marketing via the founder's
sweep unless tagged otherwise. PFO cells reflect fleet state as of build 2254/2255-era measurement;
Gate-1 is not green, so PFO cells will change.*

---

# IS THERE MARKET ROOM FOR PFO? — the truthful answer

Asked directly, answered directly. This section is not written to be encouraging.

## The short answer

**Yes — the market room is real. But market room is the least binding constraint PFO faces, and
leading with it would be the wrong conclusion to draw from this matrix.**

The room exists. Whether PFO can *reach* it is a different question, and the honest answer there is
**not yet, and not for reasons the product roadmap addresses.**

## Why the room is real (this part is genuine, not a courtesy)

**1. The two-cluster split is structural, not a marketing artifact.** Cluster A cannot do inventory,
POS, lots, memberships or governed photography. Cluster B cannot do insurance RCM. That is not a
feature oversight on either side — it reflects what each was built for and who each sells to.
**Structural gaps persist far longer than feature gaps.**

**2. There is a describable buyer.** Not "practices who want better software" — that buyer does not
exist. The real one: **a practice running conventional insurance-billed medicine *and* a cash-pay
service line (aesthetics, functional, weight/hormone), currently operating two systems and
reconciling them by hand.** That practice has a specific, daily, expensive pain. ReCenter is one.

**3. The switching moment is identifiable.** Practices rarely leave an EHR over features. They leave
when the incumbent cannot do something new they have decided to do. **A medical practice adding an
aesthetic or cash-pay line is exactly that moment** — and it is the moment eCW fails them. A real
wedge with a real trigger.

**4. OptiMantra proves the segment commercially.** A funded company building for this precise buyer
is stronger validation than any internal reasoning. **This is the single most important external fact
in the entire survey.**

## Why that is not the question

**Market room answers "does demand exist." It does not answer "can PFO capture it."** The matrix
measures the first. The three gates below decide the second — **and none of them is a product
problem.**

### Gate 1 — Market access (certification)

For any practice billing insurance, **CEHRT status can be a procurement filter applied before
capabilities are ever compared.** PFO is not certified. That is not a feature gap; it is a
licensing-shaped barrier with a cost and a calendar measured in serious money and many months.

**Consequence:** the insurance-billing half of PFO's own thesis — the half that makes it more than a
med-spa system — is currently **unsellable to a large part of its market, regardless of quality.**
The cash-pay half is unaffected. **That asymmetry should drive sequencing.**

### Gate 2 — Evidence (n = 1)

**Every design input PFO has comes from one clinic.** That is a customer requirements document, not
market validation. The failure mode is well known: build exactly what one clinic needs, discover the
second wants something adjacent, then spend a year learning the difference between a product and a
bespoke system.

**PFO's hedge is architectural** — definitions, per-practice configuration, engines executing
metadata. That is the correct hedge and it is real. **But it is unproven at n=2, and the first clinic
that is not ReCenter is the only thing that can prove it.**

### Gate 3 — Capacity (delivery, support, references)

Competitors here have implementation teams, support organizations, training material, uptime
histories, and hundreds to thousands of reference customers. **A clinic betting its revenue cycle on
an EHR is buying an organization, not a binary.**

This is the hardest honest point: **Gate-1 is not green after sustained effort on a single clinic's
workflows.** That is not a criticism of the engineering — the recent work has been unusually
disciplined about evidence. It is a statement about scale. Ten clinics means ten production
incidents, ten schema states, ten sets of expectations, and support during clinic hours.

## The alternative reading I am obliged to state

**PFO may currently be more valuable as ReCenter's operating system than as a commercial EHR.**

That is not a consolation prize. A system letting one practice run conventional medicine, aesthetics,
supplements, cash-pay and insurance on one patient record — with an operational truth layer — is
genuinely valuable to that practice, and achievable with the team that exists.

Becoming a commercial EHR is a **different undertaking**: certification, implementation, support,
sales, references, multi-tenant operations at scale. **The product work is arguably the smaller half.**

**Both are legitimate. They are not the same decision, and drifting between them is the expensive
outcome** — building commercial-grade generality for a market never entered, or single-clinic
specificity that later has to be unwound.

## What would change my answer

Falsifiable, in rough order of information value:

1. **A second clinic, not owned by the founder, running PFO for a full clinic day.** Resolves Gate 2
   and most of Gate 3 in one move. **Nothing else comes close.**
2. **A CHPL result showing the realistic certification path and cost.** Turns Gate 1 from unknown
   into a number and a date.
3. **Seeing an incumbent's operational surface.** If eCW's or athena's work queue is already close
   enough that a buyer shrugs, the headline differentiation is weaker than believed — **better to
   learn that now than in a sales call.**
4. **A practice saying "we would switch for this"** — unprompted, with no relationship to the founder.

## The verdict, stated plainly

**There is room.** The segment is real, structurally underserved, has an identifiable buyer and a
natural switching trigger, and a funded competitor is validating it.

**And on today's evidence PFO is closer to an exceptional single-practice operating system than to a
commercial EHR** — separated from the latter by certification, a second customer, and delivery
capacity. **None of those is addressed by the product roadmap**, and all cost time and money rather
than engineering.

**The strategically honest position:** the market question is answered — **yes**. The unanswered
questions are **access, evidence and capacity**. **Continuing to strengthen the product moves none of
them**, which is why *"is there room"* is the wrong question to keep asking, and **"who is the second
clinic, and what does certification cost"** is the right one.

*— AgentFuture, 2026-08-15. Written to be accurate rather than encouraging, as asked.*

---

# WHERE THE COMMERCIAL AND FINANCIAL OPPORTUNITY ACTUALLY IS

Same posture: accurate rather than encouraging. The previous section said the market question is
answered and the binding constraints are access, evidence and capacity. **This section is about which
paths route *around* those constraints rather than through them.**

## First, the question behind the question

Vertical software rarely makes its money the way founders expect. **Seat-based subscription is the
visible revenue; it is frequently not the profitable revenue.** Before choosing a path, decide which
engine PFO is actually building:

| Engine | How it earns | Scales with |
|---|---|---|
| **Subscription** | $/provider/month | headcount (slow, capped) |
| **Payment volume** | bps on card volume | **the customer's revenue (fast)** |
| **Retail/product** | margin or fee on goods sold | inventory turns |
| **Services** | implementation/consulting | your hours (does not scale) |
| **Enterprise value** | the practice itself is worth more | one asset, real money |

**This matters more than the competitive matrix.** Two companies with identical products and
different revenue engines have wildly different outcomes.

## Path A — Cash-pay first. The certification gate does not apply.

**This is the most under-appreciated fact in the whole analysis.**

Gate 1 (certification) blocks the insurance-billing half of PFO's thesis. **It does not touch the
cash-pay half at all.** Med spas, aesthetics, functional/integrative, weight and hormone clinics
largely do not bill insurance and are not buying CEHRT.

So the fastest commercial path is the one where PFO's **biggest structural barrier is simply absent**:

- **No certification required**
- **Weaker competition** — Aesthetic Record, Pabau, AestheticsPro, Boulevard, Mangomint are
  operationally decent and architecturally shallow compared with what PFO already runs
- **PFO already built Oasis** — inventory, lots, POS, consent, photography contracts, procedures
- **Buyers move faster** — no CMS program dependency, no committee, often owner-decided

**The strategic inversion worth sitting with:** PFO has been treating Medical as the product and
Oasis as the specialty extension. **Commercially it is probably the reverse.** Oasis is the sellable
wedge; Medical is the differentiator *within* it — the thing no med-spa system can answer when a
clinic asks "and what about the patient's actual medical record?"

## Path B — Payments. This is where the money is.

**The recurring software fee is not the business. Payment volume is.**

Toast, Mindbody, Boulevard and Shopify are the pattern: modest software subscription, real margin on
transaction volume. PFO already has a processor-neutral `PaymentProvider` abstraction, POS, and a
retail catalog — **the hardest architectural part of that model is already built.**

Rough shape, and it is only a shape: a med spa doing **$100k/month** in card volume, at even a
**30–50 bps** spread, produces meaningful monthly revenue **per location** — and it grows when the
customer grows, without adding seats or support burden. Twenty such locations is a different business
than twenty subscriptions.

**Three honest cautions:**
1. **Payment facilitation carries real obligations** — underwriting, KYC, chargebacks, reserves, and
   PCI scope discipline. PFO's no-PAN/tokenization architecture is the correct foundation, but
   becoming a payfac or even a well-structured referral partner is a **regulatory and financial
   undertaking, not a feature.**
2. **Margin depends entirely on the deal** you can get with a processor at low volume — early
   economics are thin and improve with scale.
3. **It only works where the money actually flows through PFO** — which again points at **cash-pay**,
   not insurance reimbursement.

**Payments plus cash-pay is the same bet twice.** That coherence is the strongest commercial signal
in this analysis.

## Path C — Adjacency. Sell beside the incumbent, not against it.

Switching cost is PFO's largest go-to-market obstacle. **The way around a switching cost is to not
require a switch.**

A practice keeps eCW for insurance medicine and adopts PFO for the cash-pay line, inventory, POS,
memberships and the control tower. **Land small, no rip-and-replace, no certification, no data
migration** — then expand as trust accrues.

**The obvious objection is the strongest one:** two systems is the exact pain PFO claims to solve. It
only works if PFO **reads** the incumbent's data well enough to keep one patient view — which is what
the FHIR/C-CDA work is for, and is a legitimate reason to prioritize *read* interoperability over
*certification* in the near term.

## Path D — The full intersection play

Highest ceiling, and the one gated by everything in the previous section: certification, n=2,
delivery capacity. **This is the destination, not the on-ramp** — and Paths A/B/C are how you fund
and de-risk arriving there rather than starting there.

## Path E — The practice itself

Do not dismiss it. **A clinic that runs measurably better is worth more**, and the operator captures
that directly with no sales motion, no support org, and no certification. For a single-owner practice
this can be the highest risk-adjusted return of anything on this list.

It also produces the asset Path D requires anyway: **a reference customer with real numbers.**

## Realistic financial scale — stated plainly

The multi-modality intersection is likely **thousands of US practices, not tens of thousands.** With
subscription alone, a strong outcome looks like **dozens to low hundreds of clinics** — a **$1–10M
ARR** business. Excellent for a small team; **not a venture-scale outcome**, and it should not be
described as one.

**Payment volume is what changes that math**, because revenue then scales with customer success
rather than seat count. **That is the difference between a good business and a large one**, and it is
the single most consequential commercial decision available.

## What I would actually do first

1. **Decide the revenue engine before the roadmap.** Subscription vs payments changes what gets built
   next, and building both without deciding is how vertical SaaS companies stall.
2. **Price and package the cash-pay/Oasis product now** — it is the only offering with no
   certification dependency and existing capability.
3. **Get one non-ReCenter cash-pay clinic live.** It resolves Gate 2, tests Path A, and produces the
   reference every other path requires.
4. **Get the real processor economics** — actual bps at realistic volume. That number decides Path B,
   and it is a phone call, not a project.
5. **Cost the certification path via CHPL** — so Path D has a date and a number instead of a
   assumption.

**The uncomfortable summary:** the highest-value work available right now is **commercial, not
engineering.** Items 2–5 are a few weeks of non-engineering effort and would resolve more strategic
uncertainty than another quarter of product development.

*— AgentFuture, 2026-08-15. Financial figures are illustrative shapes, not forecasts; the processor
economics in Path B are the one number worth obtaining directly.*
