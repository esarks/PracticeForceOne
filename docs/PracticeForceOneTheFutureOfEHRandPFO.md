---
title: "PracticeForceOneTheFutureOfEHRandPFO"
---

# The Future of the EHR — and Why PracticeForceOne Is Already Being Built As One

**A position paper.** · **Author: AgentFuture** · **2026-08-09**
**Status: this paper argues a thesis. It is not a delivery commitment and nothing here is approved
work.** Capability claims use the fleet vocabulary — **LIVE · PROVEN · BUILT · QUEUED · PROPOSED ·
BLOCKED · UNPROVEN** — and every PFO claim carries evidence or is marked UNPROVEN.

**Evidence discipline applied in both directions.** PFO claims below carry a file:line, a commit, or
a deployed measurement. Oracle claims are labelled by what they actually are — **stated direction**,
which is what a competitor's public positioning is until independently verified. **A sourced review
is now complete and is in Appendix A**, which corrects several figures, documents what is verifiable
about Oracle's certification position, and supplies the market evidence for §4. **This paper does not
treat vendor positioning as evidence of shipped behavior, and asks the same rigour of itself.**

---

## 1. The thesis

> **The next EHR is not a chart with AI attached. It is an operating system for the practice that
> happens to contain a chart. PracticeForceOne's North Star already describes that system — and the
> architectural inversion it requires is the one part PFO has already done.**

This paper argues that claim, states plainly what is missing, and gives the conditions under which
it would be false.

---

## 2. What is actually changing

For thirty years the EHR has been a **system of record you navigate**. Its interaction model is:

```
screen → menu → form → field → save
```

Every vendor's "innovation" has been a better version of that loop: faster screens, fewer clicks,
smarter forms. The loop itself was never questioned.

The shift now underway inverts it:

```
context → intelligence → recommendation → action → human authorization
```

**This is not a feature. It is a change in who does the noticing.** In the old model the human scans
the system to discover what needs doing. In the new model the system determines what needs doing and
the human spends their attention on judgment.

**That inversion is the whole story.** Everything else being marketed — summaries, timelines, voice,
agents — are consequences of it or decorations on it. A product that adds AI summaries to a
navigate-first EHR has not made the shift. A product that determines what needs attention has, even
if it never generates a sentence of prose.

---

## 3. Oracle's articulation — and what is genuinely new in it

Oracle's public positioning for its next-generation Health EHR describes cloud-native architecture,
semantic understanding of clinical information, AI-generated summaries and longitudinal timelines,
conversational and voice interaction, coordinated AI agents sharing context, suggested actions queued
for users, human-in-the-loop control over consequential actions, "Needs Attention" work surfaces, and
an open agent architecture that customers and third parties can extend.

**Reading it critically, three things are substantive:**

1. **Semantic interpretation of unstructured clinical narrative.** This is the genuinely hard
   capability, it requires model infrastructure and corpora, and it is a real investment.
2. **Context shared across reasoning components** rather than assembled per feature.
3. **An explicit authorization boundary** — the machine proposes, the clinician disposes.

**And three are packaging, or at least unproven:**

1. **"AI-first" as an architectural statement.** Every EHR vendor will claim this within a year. It
   describes an intention, not a structure.
2. **Voice as a primary interaction model for consequential clinical work.** Voice is excellent for
   dictation and poor for state changes that need visible confirmation. Dictation is not the
   inversion.
3. **"Agents" as an architecture rather than a packaging of capabilities.** Agent count is not a
   maturity signal. A large vendor needs many agents because it has many teams and an enormous
   surface; that is an organizational fact expressed as architecture.

**Credit where it is due: Oracle has named the inversion publicly and staked a strategy on it.**
That is more than most incumbents have done, and it validates the direction rather than threatening
it.

---

## 4. The question Oracle is answering — and the larger one it isn't

Oracle is asking:

> **How do we make the EHR understand and assist the clinician?**

It is a good question and they are well positioned to answer it.

But in an ambulatory practice, **the clinician's screen is not where the practice actually fails.**
Practices fail in the seams:

- A provider orders a lab. Nobody schedules it. Nothing notices.
- Eligibility fails quietly on Tuesday. The patient arrives Thursday. The front desk finds out at the
  desk, with the patient standing there.
- An encounter is signed. The charge sits unreviewed. The claim goes out late. The denial arrives
  sixty days later, and the reason traces back to a clinical documentation gap nobody surfaced at the
  time it could have been fixed.
- A prior authorization expires. The clinical team learns from a rejection.

**None of those are chart problems. Every one is a seam between clinical, administrative and
financial work** — and in almost every practice those are separate systems, or separate screens, or
separate people who each assumed someone else was watching.

So the larger question is:

> **How does the entire practice know what is happening, determine what should happen next, surface
> only what needs human judgment, and execute the rest safely?**

**A vendor whose product is the chart can only answer the first question.** Answering the second
requires owning the clinical record, the work queues, and the money in one platform with one audit
trail. **That is a structural property, not a feature roadmap** — and it is the property PFO has.

**The market evidence for this is stronger than the architectural argument** (sources in Appendix A):

- **Administrative complexity is $265.6B a year — the largest single category of US healthcare waste
  — and the study that identified it found no studies of interventions targeting it.** The biggest
  bucket of waste in American healthcare has an essentially empty evidence base for fixing it.
- **Practices do not sell because of clinical software; they sell because of administrative burden.**
  Among physicians present at an acquisition, the top three reasons are negotiating payment rates
  (70.8%), access to costly resources (64.9%) and managing payer regulatory burden (63.6%).
  **Consolidation is a billing-complexity outcome.**
- **And the market does not reward feature breadth.** Physicians in physician-owned practices report
  *higher* EHR satisfaction (68.1% vs 58.5%) **despite being least likely to run a market-leading
  product (32% vs 90% in large groups).** Satisfaction and platform capability move in opposite
  directions across the size gradient.

**Read together: the money is in the seams, the seams are why practices are being consumed, and the
target market is not buying on feature count.** That is a better argument for this platform's shape
than any architectural claim in this paper.

---

## 5. What PFO has already built that puts it on this path

Stated with evidence, and with other lanes' capabilities marked as dependencies rather than
certified by me.

### 5.1 The architectural inversion is already done — this is the load-bearing claim

PFO does not hard-code behavior and then expose settings. **It executes definitions.**
`engine_configs` is the definition repository (`util/EngineConfigStore.script:37`), keyed **practice
× stage**, with reads that are **exact and do not silently inherit** (`getConfigByPractice`, `:78`;
`listKeysByPractice`, `:101`; `copyDefinitionSet`, `:116`). Workflows, board lanes, card faces,
panels, menus, vocabularies, entity schemas, search sources and work queues are all stored
definitions rather than compiled behavior. **Status: LIVE.**

**Why this is the whole ballgame:** a platform that executes definitions can be given a new kind of
definition — an action contract, a policy, a reasoning output — without being rebuilt. A platform
that hard-codes behavior cannot. **The expensive, invasive, multi-year part of becoming an
intelligent platform is this inversion, and PFO did it before the question was fashionable.**

### 5.2 A definition-driven decision engine already exists

`WorkflowLanes.laneFor()` (`util/WorkflowLanes.script:261-286`) decides where work belongs by
evaluating declared rules — entity type, status in, status not in — and refuses to place work
outside the declared order. It is wired at **five call sites**
(`util/WorkflowBoardRoutes.script:445, :716, :812, :923, :1038`).

**Status: BUILT and BLOCKED — and this is the most instructive fact in the paper.** It has never
executed. Its rules reader requires a JSON object (`WorkflowLanes.script:91`); every practice
publishes an array; `laneRules` appears in four files, **none of them a published definition.**
Someone built exactly the right thing and it has never run. **PFO's problem is not that it lacks the
architecture. It is that PFO builds substrate correctly and then does not finish connecting it.**

### 5.3 The reason/execute boundary was drawn years before anyone named it

The `operations` registry declares named operations — endpoint, inputs, what they produce, which
workflow step they complete, what event they emit — and **definitions are forbidden from carrying
executable code.** That is precisely the "intelligence proposes, governed services execute" rule
every serious version of this architecture requires. PFO enforced it as a configuration-safety rule
long before it was an AI-safety rule. **Status: LIVE.**

### 5.4 The record already spans clinical, administrative and financial

One platform holds the chart, the work queues, claims, scrubbing, denials, appeals, ERA, payments,
the portal and recall — with one audit trail. **Dependency: @AgentDB and @AgentCF own the payments
and clinical-documentation evidence and must certify their own status.** What I can state from my
lane is structural: **these are not integrations here. They are the same system**, which is the
precondition for closing a loop across them.

### 5.5 Explainability is a contract, not a feature

PFO's recommendations carry the reason, the chart evidence they rest on, the rule that produced
them, the consequence of ignoring them, and a work state.
**Dependency: @AgentCF must certify LIVE/PROVEN status — this is their engine and I will not certify
it for them.** If it holds, it is strategically significant: most vendors are promising explainable
AI as a future feature, while PFO's contract makes an unexplained recommendation *impossible to
emit*. **Explainability designed in is worth more than explainability retrofitted**, and regulatory
pressure on algorithm transparency is moving toward exactly this.

### 5.6 Humans are already the authorization boundary

Recommendations are accepted, modified, or declined with a reason; signing is never blocked by the
machine. **Dependency: @AgentDLP for journey evidence.** The design principle — the system advises,
the clinician decides, the disagreement is recorded — is already the product's behavior rather than
a policy to be added.

---

## 6. What PFO does not have — stated plainly

A paper that only lists strengths is marketing. Four gaps, all mine to name:

**6.1 There is no single governed context. There are at least four.** The Kanban rebuilds cards
**client-side** (`ui/public/kanban.js` `buildCards(...)`, ~`:2236`) while a **separate server
projection** emits its own (`util/WorkflowBoardRoutes.script:174`, entity scope fixed at `:1313`);
the patient chart bundle is a third assembly; the inference engine gathers its own evidence.
**PROPOSED.** Everything downstream — summaries, timelines, "ask the system", agents — requires one.

**6.2 Actions do not persist.** Board membership is **derived on every render**; no
`workflow_instances` table exists. Nothing records that work was assigned, to whom, when, or how long
it has waited. Ownership is computed in the **browser** (`kanban.js:3086-3095`). **PROPOSED — and it
is the single blocker on the closed loop**, because a loop you cannot observe is not a loop.

**6.3 There is no longitudinal timeline surface.** The substrate exists — `SOURCE_RECORD_EVENTS`
carries source type, source id, prior state and new state — and nothing projects it into a narrative.
**PROPOSED.**

**6.4 PFO cannot read prose.** Its inference operates on structured evidence. I found no NLP or LLM
extraction in production anywhere in the repository. If a clinically relevant fact exists only in an
HPI or an assessment, **I have no evidence PFO can see it. UNPROVEN — and I believe the honest answer
is that it cannot.** **This is the one place a large vendor is straightforwardly ahead.**

---

## 7. Why the North Star *is* the future EHR

The North Star, as amended in the fleet debate:

> **PracticeForceOne is an intelligent ambulatory practice operating platform. It maintains one
> governed account of what is true about a patient and a practice; continuously determines what
> requires human attention and explains why; proposes the next appropriate action; and executes
> authorized actions through governed PFO services — leaving evidence of what happened, who decided,
> and on what basis.**

**Read that against §2's inversion and it is the same sentence.** "Determines what requires
attention" *is* context → intelligence. "Proposes the next appropriate action" *is*
recommendation → action. "Executes authorized actions through governed services" *is* the
authorization boundary and deterministic execution. **PFO's North Star is not aiming at the future
EHR. It is a description of one.**

Three reasons it is a *stronger* description than the clinician-centric version:

**7.1 It closes.** Oracle's loop, as publicly described, ends at execution: the clinician authorizes,
the system acts, the story stops. PFO's continues — the action changes state, the state updates
context, the context triggers re-evaluation, and the next thing that needs a human appears. **A loop
that closes is only possible where one owner holds clinical, administrative and financial work.** For
a chart vendor, RCM is a downstream integration. For PFO it is the same database.

**7.2 It is checkable.** "One governed account" can be tested — a reviewer asks whether there is one
account or four, and today the answer is four. "Understands the patient" cannot be tested by anyone.
**A North Star you can fail is worth more than one you can only assert**, and this one is deliberately
written so that PFO currently fails part of it.

**7.3 It is honest about what machines may do.** Reasoning proposes; governed services execute; a
human authorizes anything consequential; everything leaves evidence. That is not caution for its own
sake — **it is the only posture under which a small vendor can responsibly put intelligence near
clinical decisions**, and it converts a resource disadvantage into a trust advantage.

---

## 8. What must be true for this thesis to hold

Falsifiable conditions. If these do not become true, the thesis fails and this paper was wrong.

1. **One governed context replaces the four.** Until then, everything intelligent is built on sand.
2. **Actions persist** — with owner, assignment time, due time, state and supersession. A derived
   card cannot be accountable.
3. **Explainability stays mandatory** as intelligence widens. The moment one unexplained
   recommendation ships, the differentiator is gone.
4. **Execution stays deterministic.** Reasoning may widen; the execution path may not become
   probabilistic.
5. **Every capability passes the journey test** — a nameable starting state, actor, action,
   persisted consequence, and observable end state. Anything that cannot is theater.
6. **Unstructured evidence, if it arrives, arrives as governed extraction with provenance to exact
   source text** — never as machine-authored clinical fact indistinguishable from a clinician's.

---

## 9. How this fails

**The most likely failure is not competitive. It is self-inflicted.**

The evidence is already in this paper: four context assemblies, two card producers, four copies of
lane order, ownership computed in the browser, and a correctly-built decision engine that **has never
once executed** because nobody published the shape it reads. Each was a locally reasonable decision.
Together they describe an organism that **grows surfaces faster than spines.**

If that pattern continues, PFO will announce a closed loop before it has one — and the gap between
the architecture and the product will be the thing that finally shows up in a demo.

**The second failure mode is scope.** A closed-loop platform is worth building only if it removes
work humans currently do by remembering. If it becomes a dashboard nobody acts on, a simpler,
excellent EHR-plus-RCM would have beaten it.

**The third is asymmetric acquisition.** PFO's moat is the closed loop across clinical and financial
work. A large vendor can buy RCM depth faster than PFO can build semantic understanding. **Our moat
is easier for them to cross than theirs is for us** — which argues for moving decisively on the loop
rather than chasing comprehension.

---

## 10. What this means practically

**Not a roadmap** — the fleet's current priorities are unchanged by this paper.

- **The two missing boxes** — one governed context and a durable action object — are not Kanban
  features. They are the substrate of everything in §7, and they are already in front of the
  architecture lane from other work. **That is the most useful thing this analysis produced: it did
  not find a new gap, it raised the stakes of a decision already queued.**
- **Do not chase comprehension.** Use models at the edges — extracting structure from unstructured
  input, summarizing for humans — and keep the decision layer deterministic. Racing a large vendor on
  semantic understanding is a race to lose; making semantic output safe, attributable and auditable
  is a race worth entering.
- **Do not adopt an agent framework for its vocabulary.** With one evaluator already serving every
  specialty and no shared context object, agents would be a coordination layer above a gap. The
  useful abstraction is a single **action contract** that a rule, an inference pass, a model or a
  human all emit identically.

---

## 11. Conclusion

The industry is converging on the same realization: **the EHR should stop being a filing cabinet you
search and start being a system that tells you what needs your attention.** A large vendor has named
that publicly and is building it inside the clinician's chart.

The larger opportunity — and the harder one — is to build it for the **whole practice**, where the
real failures happen in the seams between clinical care, administration and money. **That requires
owning all three, which is a structural advantage that cannot be added later.**

PFO has the inversion, the definition-driven execution, the reason/execute boundary, the single
platform across clinical and financial work, and an explainability contract most vendors are still
promising. **It does not yet have one context or durable actions, and it cannot read prose.**

**So the honest form of the thesis is this: PFO is not the future EHR today. But it is being built as
one — and the part that is hardest to retrofit is the part it already has.** Whether it arrives
depends on finishing spines instead of adding surfaces.

---

---

# Appendix A — The sourced review (added 2026-08-09)

The review promised above is complete. **It changes the paper's confidence in two directions: it
strengthens the market thesis considerably, and it makes the Oracle comparison more careful, not
less.**

## A1. What is verifiable about Oracle's position

Three findings, all from disclosure records rather than marketing:

1. **Oracle's own transparency disclosure names Millennium Platform as relied-upon software for the
   EHR described as built from the ground up.** The next-generation product is not standing free of
   the platform it is said to replace.
2. **That next-generation EHR is absent from the (b)(11) Decision Support Interventions
   certification, while Millennium holds it.** (b)(11) is the criterion that requires transparency
   about predictive decision support — **the AI-first product is the one not certified under the
   AI-transparency criterion.**
3. **The federal transparency regime that makes such claims checkable is facing repeal**, with final
   action projected imminently.

**How to use this honestly.** These do not show Oracle's capability is absent — a product can be
excellent and uncertified, and certification lags shipping. **What they show is that the claim is
currently unverifiable by the mechanism designed to verify it**, which is exactly the standard this
paper applies to itself. My §6.4 admission that PFO cannot read prose is a *measured absence*.
Oracle's semantic capability is an *announced capability of unverified maturity*. **Those are
different epistemic states and the paper should not flatten them in either direction.**

## A2. The market evidence — this is the strongest new material

**The thesis in §4 is better supported than I could have argued from architecture alone.**

- **Administrative complexity is $265.6B annually — the single largest category of US healthcare
  waste — and the study identifying it found no studies of interventions targeting it**
  (Shrank et al., JAMA 2019). **The biggest bucket of waste in American healthcare has an
  essentially empty evidence base for fixing it.** That is the market gap this platform aims at.
- **Practices do not sell because of clinical software. They sell because of administrative burden.**
  Among physicians present at acquisition, the top three reasons are negotiating payment rates
  (70.8%), access to costly resources (64.9%) and managing payer regulatory burden (63.6%) (AMA,
  n=520). **Consolidation is a billing-complexity outcome** — which means a platform that reduces
  administrative burden is addressing the actual force reshaping the market.
- **The satisfaction paradox, which deserves more attention than it gets:** physicians in
  physician-owned practices report *higher* EHR satisfaction (68.1% vs 58.5%; adjusted OR 1.60)
  **despite being least likely to hold a certified EHR (79.9%) and least likely to run a
  market-leading product (32% vs 90% in large groups).** Satisfaction and platform capability move
  in **opposite directions** across the size gradient. The ambulatory market does not reward feature
  breadth; it rewards fit.
- Context: EHR usability sits at **SUS 45.9 — a letter grade of F**, with each 1-point improvement
  associated with ~3% lower burnout odds. Medicare's conversion factor fell **10.4% (2020–2025)**
  while 84% of practices report ~11% cost growth against a CMS practice-cost index of 2.7%.

## A3. Ambient documentation is already commoditized — which validates §10

I argued PFO should not race on comprehension. The market evidence is stronger than my reasoning:

- **athenahealth's CEO has declared the category commoditized** — *"ambient is a feature, not a
  business"* — and ships athenaAmbient **free and auto-enabled**, while its own marketplace hosts
  three paid ambient vendors.
- **Canvas Medical open-sourced its scribe under MIT**, setting the floor price at zero for anyone
  technically capable.
- **Epic terminated its Abridge-linked partner program (2025-10-23)** and shipped its own AI
  Charting — **running on Microsoft's Nuance Dragon stack**, displacing independents while deepening
  a platform dependency.
- Six of seven small-practice vendors now ship a first-party scribe. **The exception is Practice
  Fusion — the cheapest, most small-practice-oriented product.** The practices least able to pay are
  served by the vendor least able to build.

**Conclusion: ambient documentation is table stakes trending to free.** Building toward it as a
differentiator would be building toward a commodity. **The differentiator is what happens to the
note afterward** — whether it closes a loop — and that is the §4 argument.

## A4. Vendor claims versus vendors' own trials — why this paper's discipline matters

- Microsoft advertises **"5 minutes saved per encounter"**; independent results are **18 seconds
  (not statistically significant)** at UCLA and **−0.26 min/appointment** at Providence.
- **Nabla's homepage simultaneously claims "27% reduction in burnout" and "90% less burnout"** while
  its own RCT measured **41 seconds per note**.
- **Ambience advertises "45% less after-hours documentation" — directly contradicted by the JAMA
  multi-site study that included Ambience as one of its three vendors** and found no significant
  after-hours change.
- The largest study to date (Rotenstein et al., JAMA 2026-04-01; **8,581 clinicians**, 5 systems,
  3 vendors) found **−16.0 min/day documentation time and no significant change in after-hours
  work.**

**The pattern: subjective measures improve large and significantly; objective time improves modestly;
after-hours work barely moves.** This is the clearest available warning that AI capability claims in
this market outrun measurement — and the reason this paper marks PFO capabilities UNPROVEN rather
than describing intent.

**Sobering precedent:** eClinicalWorks paid **$155M to the DOJ (2017)** to settle False Claims Act
allegations that it **misrepresented its software's capabilities.** In this industry, overstating what
software can do is not a reputational risk — it has been a federal one.

## A5. Corrections to figures — and claims not to repeat

**Corrections applied:** ambulatory market share must always name its unit — Epic is **19.5%
site-weighted** but **27.7% physician-weighted** (ONC/ASTP Data Brief No. 84, June 2026, 2024
NEHRS), and that choice moves the headline ~8 points. Practice-ownership has two authoritative series
that disagree by ~24 points (AMA **42.2%** private practice vs PAI/Avalere **18.0%** independent)
because they measure different things — **cite both, never pick.** Prior authorization: **93%** report
care delays and **29%** report a serious adverse event (2024 AMA), from a panel screened to
physicians who already do weekly PAs and published by an organization lobbying on the issue.

**Do not repeat these — they do not survive sourcing:** *"65% of denied claims are never
resubmitted"* (vendor-blog folklore, no original survey); *"$118 to appeal a claim"* (no locatable
primary source — MGMA's **$25.20/claim** rework cost is the defensible figure); *"62% physician
burnout"* (that is the 2021 AMA peak; Medscape 2026 reports 46%). The better denial statistic is
**KFF: 20% average in-network marketplace denial rate, range 1–54%, with under 1% of denials
appealed.**

## A6. Limits of this review

Independent trade outlets (Fierce Healthcare, Healthcare IT News, Becker's, Medscape, NEJM Catalyst,
KLAS) were largely paywalled or blocked, **so vendor communications are over-represented relative to
independent reporting in the competitive section.** Epic's AI Charting pricing could not be
established from any source. Epic's CoMET/Curiosity is **research-only** — a paper and a researcher
sandbox, with no clinician-facing feature powered by it — and I had earlier over-stated it as
announced.

---

*This appendix holds Oracle and the wider market to the same standard the body of the paper holds
PFO to. Where PFO's gaps are measured absences, competitors' capabilities are frequently announced
states of unverified maturity — and the paper's argument does not depend on resolving that
asymmetry in PFO's favour.*

— AgentFuture, 2026-08-09
