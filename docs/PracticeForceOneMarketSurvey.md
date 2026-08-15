---
title: "PracticeForceOneMarketSurvey"
---

# PracticeForceOne — Market Survey (2026-08-15)

**Founder's 2026 market sweep, with AgentFuture's review appended.**
Review posture: this is **feedback, not endorsement**. The survey is strong; the parts I disagree
with are where the value is.

---

# PART 1 — THE SURVEY (founder, 2026-08-15)

Market definition used: **U.S. ambulatory EHR/EMR + practice management + revenue cycle +
patient-engagement platforms serving independent and specialty practices.** ONC's CHPL is the
authoritative catalog of certified health IT, but counting every CHPL entry would exaggerate the
competitive market.

## Tier 1 — direct competitors
eClinicalWorks · athenaOne/athenahealth · NextGen Office · NextGen Enterprise · AdvancedMD · Tebra ·
DrChrono · Elation Health · CharmHealth · **OptiMantra** · CareCloud · RXNT · Practice Fusion ·
Greenway Intergy · CGM APRIMA · Azalea Health · Amazing Charts · CureMD · OmniMD · ModMed

## Tier 2 — competitors created by the Medical + Oasis model
**Functional/integrative/wellness:** OptiMantra · Cerbo · Power2Practice · Practice Better ·
Oli Health · Living Matrix (partial)
**Aesthetics/med-spa:** PatientNow · Aesthetic Record · Nextech · ModMed · Symplast · AestheticsPro ·
Pabau — and a non-EHR adjacent group (Vagaro, Boulevard, Mangomint, Zenoti) that can still take part
of the market.
**DPC/concierge:** Elation · Cerbo · Atlas.md · Hint Clinical · Akute Health · Tebra · OptiMantra

## Tier 3 — broader ambulatory field
Praxis EMR · Practice EHR · Meditab/IMS · Office Ally · PrognoCIS · InSync · Sevocity · iPatientCare ·
75health · Liquid EHR · ADSC/MedicsCloud · Veradigm

## Tier 4 — the giants (architectural benchmarks, not today's sales opponents)
**Epic** (note **Garden Plot** — hosted SaaS path for independent groups; **Community Connect**) ·
**Oracle Health** (Ambulatory AI Application Suite; Clinical AI Agent) · **MEDITECH Expanse
Ambulatory** (now marketed to independent practices, 40+ specialties)

## Tier 5 — specialty systems if PFO expands
Urgent care: Experity · Behavioral health: SimplePractice, TherapyNotes, Valant, Qualifacts,
Netsmart, BestNotes · PT/rehab: WebPT, Prompt, SPRY, Raintree · Ophthalmology: Nextech, ModMed

## Founder's active-watch ranking (top 10)
1 eClinicalWorks · 2 OptiMantra · 3 athenahealth · 4 Tebra · 5 AdvancedMD · 6 CharmHealth ·
7 DrChrono · 8 Elation · 9 NextGen Office · 10 ModMed
Then: PatientNow, Aesthetic Record (Oasis-specific) · Cerbo · RXNT · CareCloud · Practice Fusion ·
Greenway · CGM APRIMA · Azalea · Oracle/Epic/MEDITECH (strategic)

## Founder's core conclusion
The competitive package is no longer *chart → orders → Rx → labs → billing*. It is
*acquisition → scheduling → registration → eligibility → encounter → AI documentation → orders →
meds → results → coding → claims → denials → payments → engagement → recall → analytics.*
**Therefore integration is no longer a differentiator.** Proposed PFO differentiation: the Control
Tower · Focused Kanbans · Documentation Inference · Medical+Oasis on one patient identity ·
workflow transparency.

---

# PART 2 — AgentFuture review

## What I think is right, and load-bearing

**1. "Integration is no longer the differentiator" is the most valuable sentence in the survey.**
Every Tier-1 vendor now markets EHR+PM+RCM+engagement. If PFO's pitch is *"it's all in one place,"*
the pitch is already commoditized. This should change what gets built, not just what gets said.

**2. Tier 2 is the real discovery.** The insight that Medical+Oasis summons a *different competitor
set* is sharper than the Tier-1 list. A family-practice EHR does not compete for this clinic;
**OptiMantra does.** Ranking it #2 above athenahealth is a defensible and non-obvious call.

**3. Naming Epic Garden Plot matters.** It moves Epic's lower boundary downmarket, which quietly
erodes the "Epic is only for hospitals" assumption that a lot of independent-EHR positioning rests on.

## Where I would push back

### A. The differentiation claims are currently **unfalsifiable**, and should be labelled so

> *"I did not find another major competitor presenting its entire EHR operating model this way."*

This is absence of evidence from a **marketing-page sweep**. Competitors do not put their operational
surfaces on marketing pages — athenahealth, eCW and AdvancedMD all ship worklists, inboxes, task
queues and denial work queues, and whether those constitute a control tower **cannot be determined
from a website.**

This is the same discipline the engineering fleet just spent two weeks enforcing: a search snippet is
not proof, and my own certification research got burned by exactly this when a snippet omitted a
criterion. **Recommend: mark Control Tower / Focused Kanban differentiation as
`HYPOTHESIS — UNVERIFIED`** until someone has seen a competitor's actual daily-operations screen
(trial, demo, recorded walkthrough, or a clinician who has used both).

**This is not scepticism about the idea.** It is the difference between "we believe we're unique" and
"we know where we're unique," and only the second one survives a customer saying *"athena already
does that."*

### B. Certification is missing entirely — and it may be a **market-entry gate, not a feature column**

The survey mentions CHPL only to exclude it from market sizing. But **many Tier-1 competitors are
ONC-certified, and PFO is not.** For any practice billing insurance and participating in CMS quality
programs, CEHRT status can be a **procurement filter applied before capabilities are ever compared.**

That reframes the certification matrix I maintain (`PracticeForceOneCertificationReadiness.md`) from
a compliance chore into a **go-to-market dependency**. It also means a capability matrix could show
PFO ahead on ten rows while PFO remains **ineligible for the sale**.

**Recommend adding a column: `ONC-certified? (CHPL listing / edition)`.** It is cheap — CHPL is the
authoritative catalog — and it may reorder the entire threat ranking. Cash-pay Oasis is unaffected;
insurance-billing Medical is not.

### C. No switching-cost analysis — which is the actual reason eCW is #1

The survey ranks eCW #1 as "existing clinic incumbent + broad functionality." **The incumbency is the
threat; the functionality is secondary.** Clinics do not leave an EHR because a competitor has better
features — they stay because migration, retraining, and re-credentialing are brutal.

**The bar is not "better than eCW." It is "better than eCW *by more than the cost of switching*."**
That is a far higher bar than parity-plus-one, and it argues for differentiation that is *visible in
the first week* rather than deep capability that takes months to appreciate. It also suggests the
strongest wedge is a practice **eCW serves badly today** — which is precisely the Medical+Oasis
combination, not general ambulatory care.

### D. PFO's own column must use the fleet's evidence discipline

If PFO is scored beside 40 vendors, **PFO's cells must be `PROVEN / LIVE / BUILT / ABSENT`, not
intent.** As of today Gate-1 is not green, practice isolation is open, and the portal post-commit
defect is unresolved. A matrix that scores PFO on design intent while scoring competitors on shipped
product would reproduce the exact error the fleet just spent days eliminating — and would be most
misleading precisely where it matters most.

### E. The proposed 40 × 60 matrix is a trap

That is **2,400 cells**, most of which cannot be verified from vendor marketing, and which decay
within months. It would consume enormous effort and produce confident-looking unreliable data.

**Recommend instead a first cut of ~8 vendors × ~12 decision-driving capabilities**, every cell
evidence-tagged (`VERIFIED` / `REPORTED` / `UNKNOWN`), then deepen only where the answer changes a
decision. Suggested 8: eClinicalWorks, OptiMantra, athenahealth, Tebra, Elation, ModMed,
Aesthetic Record, Cerbo. Suggested axes: ONC certification · one patient identity across
medical+aesthetic · cash-pay + insurance in one encounter · lot/expiration inventory · POS/retail ·
memberships/packages · clinical photography · operational work surface (the control-tower question) ·
documentation AI · RCM depth · patient engagement/recall · switching cost.

### F. Sample size of one

Every PFO design input comes from ReCenter. **OptiMantra's existence is the best available evidence
that the Medical+Oasis segment is real beyond one clinic** — a competitor building for that exact
buyer is stronger validation than any internal reasoning. Worth stating explicitly, because it is
currently the only external confirmation the strategy has.

## The one thing I would change about the conclusion

The survey ends on *"here is everything happening in your practice right now."* I think that is the
right demo — **and it is also the hardest possible claim to make credibly**, because it is a promise
about *operational truth*, and operational truth is exactly what breaks first in production. A
control tower that shows a stale card, a wrong owner, or an empty board is worse than no control
tower, because it invites a clinician to trust it.

**PFO's differentiation and PFO's biggest technical risk are therefore the same thing.** That is not
an argument against the strategy — it is an argument that Gate-1 discipline *is* the go-to-market
strategy, not a detour from it.

---

*Survey: founder, 2026-08-15. Review: AgentFuture, 2026-08-15. Sources are the founder's sweep;
capability claims about named vendors are `REPORTED` from vendor marketing unless separately
verified.*
