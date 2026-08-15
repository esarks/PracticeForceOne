---
title: "PracticeForceOneSpecialtyForms"
---

# PracticeForceOne Specialty Forms

**Author:** AgentUI (corpus analysis) · **Data domain section:** AgentDB · **Date:** 2026-07-25 · **Measured against:** live build 1964 (commit `a95a4cdaa`)

Founder question, 2026-07-25: *"I need to understand all of these specialty forms — why do they exist,
when are they to be used, and how does a provider know which ones are needed?"*

This page answers those three questions from the live system, not from intent. Every number below
was measured against the deployed Definition Repository on build 1964. Where the answer is
uncomfortable, it is stated plainly rather than softened.

> ### ⚠️ Status update — 2026-07-26: the destination now exists
>
> **Everything measured below still stands as a measurement of the DEFINITIONS.** What has changed is
> the half this page called missing.
>
> The page's central finding was *"a binding problem, not a backend problem"* — 92% of forms mapped
> to an API domain, yet **no clinical specialty table in production held a single row**, and **0 of
> 120 sampled forms could save**. That diagnosis was correct, and it is what the
> [Clinical Document Contract](PracticeForceOneClinicalDocumentContract.html) was built to answer.
>
> **Now live and proven** (build 1974): one canonical document model, one API, **76/76** end-to-end
> including two-organization isolation, plus **36/36** for the encounter note — twelve real templates
> writing into **one table with zero per-form tables**, and a brand-new form type proven to need
> **no migration, no table, no endpoint**.
>
> **What has NOT changed:** the CF definitions still carry no `binding.create`, so *"0% can save"*
> remains true of the catalog until AgentCF stamps the binding across it. The difference is that
> there is now somewhere to bind **to**, and the wiring is a scripted pass rather than a build.
>
> Read the numbers below as the diagnosis that produced the fix — not as the current state of the
> platform's persistence.

---

## The short answer

| Question | Answer |
|---|---|
| Why do they exist? | A **breadth/parity exercise** — 97 batch commits of CF definitions. **No directive, CF row or eCW finding asked for the individual condition forms**; they are an extrapolation of "close ECW parity". |
| Were they derived from the eCW survey? | **No.** The survey produced 269 `ECW-*` findings about *screen behaviour*; none names a condition template, and the CF→ECW crosswalk maps none of them. |
| When are they to be used? | **Today: they cannot be used clinically.** 97% have no data binding and **0% can save anything**. A provider can open one and type into it; nothing persists. |
| How does a provider know which are needed? | **They don't, and nothing tells them.** No diagnosis, problem, encounter type or care-gap routes a provider to a form. The only ways in are the launcher, the specialty board, the sidebar, or a pasted URL. |
| What do they do for a family practice? | **Nothing as-is.** 44% are referral-out specialties, 18% of the catalog is duplicated, and none can save. |
| Where would they save to — does the backend exist? | **It mostly does, and it is empty.** 92% of forms map to a registered API domain over ~200 tables, but **no clinical specialty table in production holds a single row**, and 229 tables have never been created at all. **A binding problem, not a backend problem** — see [The data domain behind the forms](#the-data-domain-behind-the-forms). |
| How much work until it does? | **8–13 days of one agent** on the shared-binding path — or 8–15 weeks if each form is mapped field-by-field onto typed specialty columns. See [Level of effort](#level-of-effort--what-it-costs-to-make-the-data-domain-real). |
| Does any of this apply to the **aesthetics** catalog? | **Yes — identically.** Its 120 forms are on the same path (authored content, no destination). It takes the same contract, with **one isolation field and five capabilities** on top. See [Aesthetics](#does-this-apply-to-aesthetics-yes--and-here-is-the-isolated-form-of-it). |

The corpus is a **catalog of authored screens**, not yet a clinical documentation system. That is a
real asset — the hard part (breadth of clinical content) exists — but it is one wiring step away
from being usable, and the wiring step is where the value is.

---

## DIRECTIVE: Specialty Form Wiring (founder, 2026-07-25)

> **SUPERSEDED the same day** by the governing directive
> **[PracticeForceOne Clinical Documentation System](PracticeForceOneClinicalDocumentationSystem.html)** —
> "you are no longer building configurable forms; you are building the Clinical Documentation
> System." That page is now authoritative for all three lanes: one documentation architecture, the
> canonical Clinical Document as system of record, a 13-point definition of done, and composable
> clinical modules as the future unit of reuse. The section below is kept because it is the
> narrower form of the same decision and its lane requirements still hold.

**This supersedes the recommendations further down this page.** The analysis below produced the
question; this is the answer. **Specialty-form persistence is now a priority. Stop expanding the
form catalog** except where required to complete an active clinical workflow.

### One canonical model, not one table per form

**AgentDB leads the persistence layer.** Design and implement **one canonical, shared
clinical-document persistence model** for Configurable Forms, on canonical schema + generated CRUD,
supporting: organization/tenant · patient · encounter · provider · form definition **and version** ·
structured answer payload · **draft / completed / signed / amended / voided** status · created,
updated and signed provenance · full audit history · retrieval by patient, encounter, form type and
date.

Explicitly ruled out: **one table per form**, and binding the catalog to non-canonical specialty
tables merely because those tables already exist. That last point matters here — this page measured
**587 tables the route code can create, 358 existing, 72 holding any row, and zero clinical
specialty tables with data**. Binding to that sprawl would cement it.

AgentDB proves the model end to end with **at least three materially different forms** (save,
reload, chart, sign, amend on the same contract) and then **publishes the API and binding contract**.

### Lane ownership

| Lane | Owns | Gate |
|---|---|---|
| **AgentDB** | The shared persistence model + published contract | Leads; three-form proof before publishing |
| **AgentCF** | One **scripted, repeatable** binding pattern supplying the shared entity + read/create/update endpoints. Curated family-practice set first, then compatible definitions. **No** per-form tables or endpoints without a structured-data requirement + founder approval | Starts after the contract is published |
| **AgentUI** | Clinical workflow integration — the provider experience | Needs bound forms; the recommendation engine can start now |

### AgentUI scope (this lane)

A provider must be able to: open the form **in the correct patient and encounter context** · save and
**resume a draft** · **sign** · **view it in the patient chart** · **amend a signed form without
overwriting the original** · and **receive a recommended template** from diagnosis, problem,
appointment type or visit reason.

> **The provider must not search manually through the entire catalog.** That single line retires the
> current entry model documented below (79 boards + launcher + sidebar + pasted URL).

### Shared definition of done

Complete only when a real provider workflow proves all nine:

1. the correct form is offered from the encounter
2. answers save successfully
3. answers survive reload
4. the completed form appears in the patient chart
5. signing locks the original
6. amendment creates a traceable new version
7. **two-organization testing proves tenant isolation**
8. several different forms use the same persistence model
9. **no form-specific table was needed**

One shared contract, one end-to-end test, coordinated across the three lanes.

### What AgentUI needs the contract to expose

Stated up front so the persistence model is designed for the workflow rather than retrofitted:

| Workflow requirement | What the contract must provide |
|---|---|
| Resume a draft | Fetch the in-progress document for (patient, encounter, formType) — not just by document id |
| Sign locks the original | A status transition that makes the signed payload **immutable**, plus signer + signed-at provenance |
| Amend without overwriting | A new version that **references** the original, with the original still retrievable and clearly superseded |
| Chart view | Retrieval by **patient**, filterable by encounter / formType / date, with enough summary (title, status, signer, date) to render a chart list without N fetches |
| Tenant isolation | Org scoping enforced **server-side** on every read, not by a client-supplied practice id |
| Recommendation | Somewhere to store the clinical-context → template mapping (definition metadata or an `engine_configs` row), readable without a deploy |

### Sequencing and current status

- **Blocked on the contract:** open-in-context, draft/resume, sign, chart view, amend. These bind to
  endpoints that do not exist yet.
- **Not blocked, starting now:** the **recommended-template engine** — mapping diagnosis / problem /
  appointment type / visit reason to a suggested definition, and surfacing it in the encounter. It
  needs no persistence contract, and it is the change that converts a ~1,700-item catalog into a
  one-item decision (point 1 of the definition of done).
- **Frozen:** catalog expansion, per the directive.

---

## Does this apply to aesthetics? Yes — and here is the isolated form of it

**Section author:** AgentAesthetics · **Date:** 2026-07-25 · Founder question the same day:
*"determine if this applies to aesthetics and if it does, this will need to be a similar
functionality only isolated to the aesthetics part of the practice … but it will need to leverage
the functionality of clinical documentation."*

Full design: **[Aesthetic Documentation](PracticeForceOneAestheticDocumentation.html)**. The short form:

**It applies identically.** The [aesthetics catalog](PracticeForceOneAesthetics.html) is 120 forms across
9 domains, of which 89 are GAP rows with no store behind them — the same "well-formed content with
no destination" this page measured for the clinical corpus. An injector needs draft · save · resume ·
sign · lock · amend · chart view exactly as much as a physician does; the source product even shows
the lock ("Locked By …") and a 2,709-item unsigned-chart queue. So the aesthetics lane **consumes
the same Clinical Document contract and does not fork a second document model**, and its catalog is
**frozen as inventory** rather than treated as a build queue.

A cosmetic consent, an aesthetic intake and a treatment record are **Clinical Documents with a
different template**. What is genuinely aesthetics-specific is one field plus five capabilities —
and four of the five are things the clinical side will want too:

| # | Aesthetics needs | Clinical value |
|---|---|---|
| 1 | **`documentDomain ∈ {CLINICAL, AESTHETIC}`**, server-enforced, with a **domain filter on chart retrieval** | The isolation itself: a cosmetic record never appears in the clinical chart list, or the reverse. Same patient, two histories — the hybrid practice bills insurance for primary care and cash for cosmetic on one record. Also keeps cosmetic volume out of quality measures and cash-pay revenue out of claims reporting. |
| 2 | **Paperwork gate on sign** — the template declares completion conditions, the server refuses to sign otherwise (consents ACTIVE for the modality, questionnaires, photo set, payment) | **Not aesthetics-only.** Procedure notes, immunizations and consented procedures want the same gate. |
| 3 | **Counter-signature** — injector signs, medical director counter-signs, with a queryable *awaiting-co-sign* state | **Not aesthetics-only.** Supervised/resident documentation is the same shape. |
| 4 | **Witness signer** — a second signer who is not a provider | **Not aesthetics-only.** High-risk clinical consents use witnesses. |
| 5 | **Media owned by the document** — before/after sets with **per-image consent state**, marketing export denied by default | **Not aesthetics-only.** Wound photos and derm lesion serials need exactly this. |
| 6 | **Standing authorization** — the Good Faith Exam pre-authorizes areas / product classes / devices with an expiry, and later documents execute *against* it | No clinical analogue today; closest relatives are standing orders and delegated protocols. |

**Recommendation runs off a different signal.** AgentUI recommends from diagnosis · problem list ·
visit reason · appointment type. **None of those exist for a cosmetic visit** — there is no ICD-10
for "lips and cheeks". Aesthetics recommends from **booked service → template** (plus treatment plan
/ series position, product class, GFE scope): the service booked determines the consent owed, the
questionnaire owed, the photo set owed and the treatment template. Same engine, different input map —
which is why the mapping should be **data-driven** (definition metadata or an `engine_configs` row)
rather than a clinical-only rule. AgentAesthetics authors the aesthetics map; it needs no contract
and is in progress.

**One open ratification, stated against this page's own finding.** `ddl/migrations/031_create_aesthetics.sql`
created three tables before the contract existed (to satisfy a separate founder directive to keep
aesthetics out of the baseline clinic's stores). Measured against *"not one persistence model per
specialty"*: `aesthetic_intakes` and `aesthetic_consents` **retire** into the canonical document,
keeping only `modality` + `status` as indexed metadata so the gate above can be evaluated without
scanning payloads. `aesthetic_treatments` **asks to keep typed columns** under this directive's own
exception — *"unless explicitly required by structured reporting"* — because a recall asks *"which
clients received lot X"*, reconciliation asks *"units charted vs units drawn from this vial"*, and
rebooking asks *"who is due at 12 weeks"*. A payload scan answers none of those and a product recall
is a patient-safety obligation. If the contract instead lets a template declare a small set of
**typed, indexed fields** beside the payload, that is the better platform answer and the table drops.

Requirements were filed to AgentDB in `AGENTS.md` (`d5dff9cf8`) **before** the contract was published,
and tracked as `AES-8..AES-12` on MasterSchedule. Aesthetics adds five points to the definition of
done: a cosmetic document never appears in the clinical chart list; a document cannot be signed with
required paperwork missing; an injector's signature leaves it awaiting MD co-sign; a treatment is
traceable to its lot and a recall query returns every affected client; and a practice that has not
opted in has no aesthetic templates, documents or menu.

> **Update 2026-07-26 — outcome of that filing.** The contract published and proved out (76/76 +
> 10/10 two-org). **Eight of the nine requirements were met**, one of them for free: because
> `FORM_DEFINITION_VERSION` is pinned at save, *"which version of the filler consent did this patient
> sign"* is answerable without any aesthetics-specific work. **One remains open — `documentDomain`** —
> and it is the only one that cannot be retrofitted, because documents written without it cannot be
> reliably classified afterwards. Standing commitment: **no aesthetic document is written into
> `CLINICAL_FORM_INSTANCES` until it is decided**, so the window stays open at no cost to AgentDB.
>
> Two things also changed on the aesthetics side. The scope above (*"aesthetics adds capabilities to
> the contract"*) is now the **floor**, not the ceiling: under
> [Documentation Intelligence](PracticeForceOneDocumentationIntelligence.html) the lane builds **reusable
> modules and evidence rules** — 22 modules, 12 templates, 24 rules — so documentation is inferred
> rather than chosen. And a self-audit against the [North Star](PracticeForceOneNorthStar.html) failed
> three of my own artifacts (a specialty-specific route module, three specialty tables with **zero
> `encounter` references**, and three definitions reachable from a menu); all three are filed for
> retirement as `AES-15/16/17` rather than defended. Detail:
> [Aesthetic Documentation §10](PracticeForceOneAestheticDocumentation.html).

### How this is explained to a clinic

The same architecture, in the language a practice reads. Kept here so the customer-facing story and
the engineering story cannot drift apart — if one of these paragraphs stops being true, the design
above changed and this page is wrong.

> You already care for these patients. Aesthetics is the same people, the same front desk and the
> same record — so it belongs in the same system, not a second one bolted on beside it.
>
> A patient who comes to you for a wellness visit and also wants a cosmetic treatment shouldn't
> exist twice: not two charts, two logins, two schedules, or two places their allergies and
> medications are written down. One record means whoever is treating them can see everything that
> matters, and your staff learn one system instead of two.
>
> At the same time, cosmetic care is kept separate where separation matters. Cosmetic visits don't
> clutter the medical chart, don't enter your quality reporting and don't mix with insurance
> billing. The patient has two timelines — a health history and a cosmetic history — on one record,
> and you see each where it belongs.
>
> The documentation discipline is the same as clinical care, because the risk is. Injectables and
> energy devices are medical procedures with medical complications, so a cosmetic treatment is
> documented like one: consent signed before treatment, the record signed by whoever performed it
> and counter-signed by the supervising physician, signed records locked, later corrections tracked
> as amendments rather than edits, and a full audit trail. Every unit injected is tied to its
> product lot — so if a manufacturer issues a recall, you can answer "which of my patients received
> that lot" in seconds instead of by opening charts.
>
> And if you don't offer aesthetics, you never see any of it. It's switched on per practice: a
> practice that doesn't opt in has no cosmetic screens, no cosmetic templates, and no change to the
> software it uses today.

**Claim discipline.** Each paragraph maps to a row of the table above. Built and committed today:
the separation (own tables, own endpoints, per-practice menu, `a160e8093`) and lot-level
traceability on the treatment record. **Designed and filed, not yet usable:**
consent-before-treatment enforcement, signing/locking, counter-signature and amendment history —
they land with the Clinical Document contract. State those as system behaviour or as go-live
behaviour, not as something a clinic can use this month.

### How this is explained to practice owners

Same architecture, framed as the business and liability case rather than the workflow case. The
clinical audience above asks *"how does this fit my day"*; owners ask *"why does this belong in my
practice at all"*.

> The patients are already yours. Aesthetics is one of the few service lines a practice can add
> without buying new patient relationships — the demand is sitting in your existing panel. It is
> cash-pay: collected at time of service, no claim, no clearinghouse, no denial, no 45-day wait. For
> a practice carrying the administrative weight of insurance billing, that revenue behaves very
> differently from the rest of the book.
>
> Running it on a second system quietly taxes that. A separate med-spa platform means a second
> subscription, a second training burden, a second patient database that disagrees with your first,
> and staff reconciling between them every day. The margin advantage of cash-pay is exactly what
> those overheads eat.
>
> One record, two timelines. Cosmetic care sits alongside the clinical chart, not inside it.
> Cosmetic visits do not clutter the medical record, do not enter quality reporting and do not mix
> with insurance billing — while your front desk works one schedule and your clinicians see one
> patient history. The operational simplicity of one system with the reporting separation of two.
>
> The risk case matters more than the revenue case. Injectables and energy devices are medical
> procedures with medical complications, and the exposure lands on the practice and its medical
> director. So the system enforces the discipline instead of relying on habit: consent signed before
> treatment, records signed by whoever performed the procedure and counter-signed by the supervising
> physician, signed records locked, corrections tracked as amendments rather than edits, and a full
> audit trail. Every unit injected is tied to its product lot — so when a manufacturer issues a
> recall, you answer "which of my patients received that lot" in seconds rather than by pulling
> charts. That is the difference between a defensible record and a spreadsheet, and it is the part a
> separate booking-and-payments tool does not give you.
>
> And it is yours to switch on. It is enabled per practice — one location can run aesthetics while
> the rest of the group is untouched. A practice that does not opt in sees no cosmetic screens and
> no change to the software it uses today.

**No figures on purpose.** This statement carries no market size, revenue-per-patient or margin
numbers. Any number added here must come from the founder's own data — an invented benchmark in an
owner-facing letter is the one error that cannot be walked back. The same claim discipline as the
clinic statement applies to the paperwork paragraph.

---

## What was measured

**Corpus size (live catalog, `GET /api/form-configurations?catalog=1`):**

- **2,062** catalog entries
- **1,983** excluding the 79 generated specialty boards
- **162** distinct `navGroup` values
- **~1,690** of them clinical — precisely **1,693** excluding Admin/Billing/Documents/Operations/
  Quality/Reference/Scheduling/Front Office/RCM/Care Coordination + boards, or **1,684** if
  Settings/User Settings/Communication(s) are also treated as non-clinical. Both figures appear
  below because two passes used slightly different exclusion lists; the difference (9 forms) does
  not move any conclusion.
- **63 of 162** groups contain **2 or fewer** forms

**Binding audit** — stratified sample of **120** clinical forms, up to 3 per group across all 151
clinical groups:

| Property | Result |
|---|---|
| No data binding at all (cannot list, cannot save) | **116 / 120 — 97%** |
| Has a list/read URL | 4 / 120 — 3% |
| **Has a create / update / submit URL** | **0 / 120 — 0%** |
| Declares an `entity` | 4 / 120 |
| Multi-page | 2 / 120 |
| Average fields per form | 13.7 |

Examples with no binding: *Acne Vulgaris* (Dermatology), *Atopic Dermatitis (Adult)*, *Problem List*
(Clinical), *Acute/Sick Visit* (Clinical), *Annual Wellness Visit* (Primary Care), *Chronic Disease
Mgmt* (Primary Care).

**What one actually contains** — e.g. `aortic_stenosis_cf` ("Aortic Stenosis"): 1 page, 12 fields,
`list: (none)`, `create: (none)`. `aki_management_cf`: 1 page, 15 fields, no bindings.
These are **well-formed clinical content with no destination**.

---

## Why they exist

The corpus was built by the AgentCF lane across **97 batch commits** (`feat(cf-configs): add batch
NN — …`), continuing through 2026-07-24. The working goal was **eCW parity by breadth**: for every
specialty and condition an eCW customer might expect, publish a matching definition so the platform
can claim coverage and so the Configurable Forms runtime is exercised against real clinical shapes.

**That goal was the lane's own interpretation, not the directive** — see
[How was it decided](#how-was-it-decided-that-these-forms-were-needed) and
[the eCW-survey traceability check](#how-was-it-decided-these-should-be-included-from-the-ecw-survey)
below. The directive said "close ECW parity" against a 269-finding, 250-screen survey; "every
condition an EHR might have" was added on top of it.

That was a reasonable thing to do and it produced something genuinely valuable: ~1,700 clinical
content definitions is months of domain work, and it stress-tested the CF runtime hard enough to
drive most of its field types.

What it did **not** include is the second half — binding each form to a place data lands, and giving
the provider a reason to open it.

---

## When they are to be used (today vs intended)

**Today.** A form opens at `/ui/cf.html?formType=<x>`. The provider sees ~14 fields and can type.
There is no save target, so the visit is not documented, nothing reaches the chart, and nothing is
billable from it. Practically: **these forms are not yet part of any clinical workflow.**

**Intended (the obvious destination).** A specialty form should be a **documentation template for an
encounter** — opened in the context of a patient + encounter, saved to that encounter, and visible
afterwards in the chart. The platform already has the pieces: `encounter_cf` with a live binding,
the patient chart with 25 pages, and a runtime that renders any definition.

The missing link is that a specialty form has no `binding.create/update` pointing at an encounter
note, and no `entity`.

---

## How a provider knows which one is needed

**They don't.** Verified by inspection of the runtime and the launch surfaces:

- No mapping from **diagnosis / ICD** to a form
- No mapping from **problem-list entry** to a form
- No mapping from **appointment type or visit reason** to a form
- No suggestion or "recommended template" affordance anywhere in `cf-runtime.js`
- No link from the encounter into a specialty form

The only routes in are:

1. **Specialty Boards** — 79 generated launch boards, one per `navGroup`
2. **CF launcher** (`cf.html?formType=cf_launcher`)
3. **Sidebar** (config-driven menu)
4. A **pasted URL**

So today the workflow is "know the form exists, then go find it in a list of ~1,700" — which is the
opposite of the platform's own usability rule (*never require training where design can solve it*).

### Related defect: near-duplicate boards

Because boards are generated one per `navGroup`, every spelling variant becomes its own board:
`Pediatric` vs `Pediatrics`, `Preventive` vs `Preventive Medicine`, `Pain Management` vs `Pain
Medicine`, `Orthopedics` vs `Orthopedic Surgery`, `Vascular` vs `Vascular Surgery`, `Medical
Genetics` vs `Clinical Genetics`. Upstream the catalog holds the same collisions (`Pediatric`(6) vs
`Pediatrics`(50), `Obstetric`(1) vs `Obstetrics`(7), `Communication`(4) vs `Communications`(1), and
three spellings of Physical Medicine and Rehabilitation).

There is also a **self-referential artifact**: the generated boards are themselves stamped
`navGroup: "Specialty Boards"`, so a later run produced a **board of the boards**
(`Specialty Boards Board`, plus `Specialty Board` from a `Specialty` group). This recurs on every
generation run until the generator excludes its own output.

Normalizing the boards alone is cosmetic — they regenerate from `navGroup`, so the fix belongs at
the `navGroup` level.

**Fixed 2026-07-25 (founder: "specialty board should not default the patient"):** every board also
inherited the fleet-wide carried patient, so opening one pre-filled its search box with the current
patient's name and the board looked empty. `noPatientCarry: true` is now stamped on all **79**
generated boards (zero-deploy) and set by `bin/build-specialty-board.mjs` for future ones — the same
rule Providers / Payers / Visit Types already used. Boards were matched on the `generatedBy`
provenance marker, never the `_board_cf` suffix, so the three real pre-existing screens
(`tracking_board_cf`, `workflow_board_cf` ×2) were correctly left alone. **Config change confirmed
via the API; on-screen behaviour not yet re-verified.**

---

## How was it decided that these forms were needed?

Founder question, 2026-07-25. Answered from the written record — directives in
[PracticeForceOneCFTable](PracticeForceOneCFTable.html) and `AGENTS.md` — not from recollection.

**What was actually directed:**

| Date | Directive (paraphrased from the record) |
|---|---|
| 2026-07-08 | **Standing policy:** ALL future UI ships as Configurable Forms — new screens are `pfo-cf-v1` JSON definitions, never hand-coded pages. |
| 2026-07-09 | **Platform mandate:** "the runtime is now the product." P1 = execute the ECW program; every slice a reusable capability. |
| 2026-07-10 | **Governing:** success is ONE question — *"can a real clinic successfully complete an entire patient visit?"* **Workflow over features. Demonstration over infrastructure.** Anything that does not improve the August demonstration is deferred unless required infrastructure. |
| 2026-07-16 | ECW rollup numbers unacceptable — make **ECW parity** a priority now. |
| 2026-07-18 | AgentCF scope narrowed to building **ECW migration definitions** into the repo as fast as possible. |

**What the mandate actually sized.** The ECW parity target was **screen-level: 250/250 COMPLETE**.
The CF master table records **"540+ CF definitions LIVE"** as of build 1943.

**What exists.** The live catalog holds **2,062 entries** (1,983 excluding generated boards; 1,684
clinical).

So roughly **1,400 entries exist beyond the last figure the master table records, and ~1,700 clinical
forms against a 250-screen parity mandate.** Searching the directives, the CF table and the ECW
ledger, **no requirement names the individual condition forms** — there is no row calling for
"Aortic Stenosis", "Ankylosing Spondylitis" or "Adult-Onset Still Disease". They were produced as
**lane-generated breadth** under a "maximize ECW parity per hour" reading of the parity directive,
in 97 batch commits.

Two honest observations about that:

1. It runs against the 2026-07-10 governing rule it was working under — *workflow over features,
   defer anything that does not improve the demonstration*. A condition template that cannot save
   does not move the demo path.
2. **Nobody decided these specific forms were needed.** The decision that was made was
   "CF is the architecture" + "close ECW parity"; the condition-level corpus is an extrapolation of
   that, not an instruction. This page exists because that extrapolation was never written down.

---

## How was it decided these should be included, from the eCW survey?

Founder question, 2026-07-25. Checked against the survey artefacts themselves.

**Short answer: they were not. The eCW survey did not ask for them, and nothing traces them back to it.**

The eCW survey (AgentECW: 457 desktop screenshots + 15 PDFs, `Downloads\ecw`, INDEX.md) produced a
ledger of **269 distinct `ECW-*` findings** across 20 ID families — `ECW-AD` admin, `ECW-BI`
billing, `ECW-CL` clinical, `ECW-DOC` documents, `ECW-FO` front office, `ECW-GL` global chrome,
`ECW-LB` labs, `ECW-OR` orders, `ECW-PT` portal, `ECW-RX` prescriptions, `ECW-SC` scheduling,
`ECW-SEC` security, and so on.

**Those findings are about how eCW's screens behave, not about clinical conditions.** Representative
`ECW-CL` rows:

| Row | Finding |
|---|---|
| ECW-CL-1 | clinical · Encounters window |
| ECW-CL-2 | clinical · Right Chart Panel |
| ECW-CL-3 | clinical · progress note anatomy |
| ECW-CL-4 | clinical · HPI capture |
| ECW-CL-5 | clinical · Medication Reconciliation |
| ECW-CL-6 | clinical · structured histories |
| ECW-CL-7 | clinical · Vitals |

**Three checks, all negative:**

1. **No ECW finding names a condition template.** Searching the ECW ledger and the clinical matrix
   for *aortic stenosis*, *ankylosing spondylitis*, *gout management*, *epilepsy*, *melanoma*,
   *Parkinson disease*, *glomerulonephritis*, *adult-onset Still disease* returns **zero hits in
   every ECW wiki page**.
2. **The CF→ECW crosswalk does not map them.** `PracticeForceOneCFtoECWCrosswalk` — created under
   founder directive 2026-07-16 precisely so CF work could be credited against ECW findings — lists
   platform screens (EncounterCF → CL-3/4/5/9, Patient ChartCF → CL-2/FO-1/FO-16). **No condition
   template appears in the crosswalk**, meaning none of them closes an ECW finding.
3. **The scale does not match.** 269 survey findings and a 250-screen parity target versus ~1,700
   clinical definitions.

**What the survey actually implied for clinical documentation** was depth in *one* place: the
progress note (`ECW-CL-3`, `CL-4` HPI, `CL-9` assessment/plan) — eCW's own model, where a physician
documents inside the note and uses templates *within* it, rather than navigating to a separate
per-disease screen.

So the condition corpus is best described as an **extrapolation from the parity directive rather
than a finding of the survey**: "close ECW parity" was read as "cover every specialty and condition
an EHR might have," when the survey itself had enumerated 269 specific screen behaviours. The
survey's own answer to "what clinical documentation does eCW have" was *the progress note and its
structures* — which is also, not coincidentally, where these forms would have to bind to become
useful.

---

## What real purpose do they satisfy at a production family practice?

Classifying the 1,684 clinical forms by whether a **family practice documents that work in-house**
or **refers it out** (the specialist documents it in their own system):

| Category | Forms | Share of clinical |
|---|---|---|
| Family-practice documentable (Family Medicine, Primary Care, Pediatrics, Preventive, Geriatrics, Behavioral Health, Clinical, Women's Health, OB/GYN, Urgent Care, Sports/Occupational Med) | **463** | **27%** |
| Referral-out specialties (Oncology families, Cardiology/EP, Nephrology, Rheumatology, GI, Pulmonology, ID, the surgical specialties, Neonatology, Critical Care, Radiology, Transplant…) | **741** | **44%** |
| Unclassified / mixed (Dermatology, Allergy & Immunology, Emergency Medicine, Addiction Medicine, compound labels…) | 480 | 29% |

**About three of every four clinical forms describe work a family practice does not document.** A
family physician refers a suspected ankylosing spondylitis to rheumatology; the rheumatologist
documents it in their own record. A melanoma-oncology template has no user in a family clinic.

**And the relevant quarter is itself duplicated.** Within the 463 family-relevant forms:
*Annual Wellness Visit* appears twice, *After Visit Summary* and *After-Visit Summary* both exist,
as do *Acute Care Visit* / *Acute/Sick Visit* and *Adult Preventive Care* / *Adult Preventive
Visit*.

Corpus-wide (excluding boards): **256 labels collide after normalization, accounting for 354
redundant entries — 18% of the catalog.** The worst are not cross-specialty legitimacy but plain
duplication:

| Count | Label | Groups |
|---|---|---|
| 6× | Bladder Cancer | Oncology, Urology Oncology, Urology |
| 5× | Epilepsy | **Neurology (all five in one group)** |
| 5× | Prostate Cancer | Medical Oncology, Oncology, Urology, Urology Oncology |
| 5× | Parkinson Disease | Neurology |
| 4× | Hepatitis B | Gastroenterology, Infectious Disease, Hepatology |
| 4× | Gestational Diabetes | OB/GYN / Endocrinology, OB/GYN, Obstetrics |

**The fair answer to "what real purpose."** Two things it genuinely bought, and one it did not:

- **It matured the runtime.** Authoring ~1,700 clinical shapes forced the CF engine through most of
  its field types and layouts. Under "the runtime is the product," that was real value — and the
  runtime is in good shape as a result.
- **It is a content head-start.** The domain content is written. If ~40 family-practice
  presentations were curated out of it, bound to the encounter and triggered by diagnosis, that is
  a genuine accelerator.
- **It does not currently serve a production family practice at all.** 0% can save; 73% describe
  another specialty's work; 18% are duplicates. A family clinic going live tomorrow would use
  none of it as-is.

**Implication for sequencing.** Curating ~40 bound, triggered family-practice templates would serve
a production family clinic better than 1,700 unbound ones — and would take a fraction of the effort
already spent. Breadth is not the constraint; wiring and curation are.

---

## The data domain behind the forms

**Section author:** AgentDB · **Date:** 2026-07-25 · **Measured against:** the live catalog
(2,062 rows) joined to the **production database** (492 tables, row counts read directly over JDBC)
and to every `createContext` registration in `server/` + `util/`.

The page above establishes that 0% of the sampled forms can save. This section answers the next
question — *where would they save to, and does that place exist?* The answer is not what the
binding audit implies: **the backend mostly exists. It is empty and unreferenced.**

### The headline

| Measure | Value |
|---|---|
| Non-board forms in the live catalog | **1,983** |
| Forms whose `navGroup` maps to a **registered API domain** | **1,821 — 92%** (63% exact/alias, 29% substring-only) |
| Forms with **no backend domain at all** | 162 — 8% (34 groups) |
| Distinct tables the route code can create | **587** |
| …that **exist** in production | **358** |
| …that hold **any rows** | **72** |
| Specialty tables backing the mapped groups | 198 → **110 exist**, **9 hold rows** |
| Clinical specialty tables holding rows | **0** |
| Production tables total / holding any rows | 492 / **108 — 78% of the schema is empty** |

**So the constraint is not missing backend.** For ~9 of every 10 specialty forms there is already a
registered endpoint and a table design behind it. What is missing is the pointer from the definition
to the domain — precisely the `binding.create/update` the audit above found absent.

### What the specialties actually have

Row counts are live production values, not estimates of intent:

| navGroup | Forms | Data domain | Tables | Exist in prod | Rows |
|---|---|---|---|---|---|
| Cardiology | 94 | `/api/cardiology` | 3 | **0** | 0 |
| Gastroenterology | 75 | `/api/gastroenterology` | 5 | 5 | **0** |
| Oncology | 74 | `/api/oncology` | 3 | 3 | **0** |
| Neurology | 69 | `/api/neurology` | 3 | 3 | **0** |
| Endocrinology | 62 | `/api/endocrinology` | 4 | 4 | **0** |
| Infectious Disease | 56 | `/api/infectious-disease` | 3 | **0** | 0 |
| Hematology | 55 | `/api/hematology` | 3 | 3 | **0** |
| Rheumatology | 51 | `/api/rheumatology` | 3 | 3 | **0** |
| Pediatrics | 50 | `/api/pediatric-dev` | 2 | **0** | 0 |
| Pulmonology | 42 | `/api/pulmonology` | 4 | 4 | **0** |
| Psychiatry | 41 | `/api/psychiatry` | 3 | 3 | **0** |
| Nephrology | 37 | `/api/nephrology` | 3 | 3 | **0** |
| Dermatology | 34 | `/api/dermatology` | 5 | 5 | **0** |
| Urology | 23 | `/api/urology` | 3 | 3 | **0** |
| Allergy & Immunology | 23 | `/api/allergy-immunology` | 3 | 3 | **0** |

**Not one clinical specialty table in production holds a single row.** The nine populated tables
among the 110 are all infrastructure — `documents`, `document_versions`, `document_access_log`,
`patient_messages`, `patient_communication_preferences`, `portal_activation_invites`,
`portal_demographic_updates`, `portal_patient_requests`, `quality_measure_catalog`. The clinical
domains have never been written to by anything: not the forms, not the UI, not the test harness.

### The tables are generic, and that is the good news

The corpus does **not** imply 1,700 tables. Each specialty domain persists to a handful of generic
shapes — `cardio_assessments` / `cardio_echo_records` / `cardio_stress_records`,
`neuro_assessments` / `neuro_seizure_events` / `neuro_emg_studies`, `derm_lesions` / `derm_biopsies`
/ `derm_phototherapy_sessions` / `derm_wound_assessments` / `derm_patch_tests`.

**1,821 mapped forms sit over 198 tables — about 9 forms per table.** *Aortic Stenosis*,
*Atrial Fibrillation* and the other 92 Cardiology definitions are all the same persistence problem:
a row in `cardio_assessments` with the form's answers. That makes binding the corpus a **mapping
exercise against ~200 existing tables, not a schema-build** — and it is the strongest argument for
the shared-binding-pattern approach in *What would make this corpus real* rather than 1,700 hand edits.

### Two structural findings this exposed

**1. A table only exists once its endpoint is called.** 229 of the 587 tables the route code can
create do not exist in production. These modules create their tables with idempotent
`CREATE TABLE IF NOT EXISTS` on first request, so an endpoint nobody has ever called leaves no trace
in the schema. Cardiology is the clearest case: **94 forms, a registered `/api/cardiology`, and its
three tables have never been created** — nothing has ever called it, in production, once.

That is a useful signal in its own right: *the physical schema is a record of what has actually been
exercised.* It is also a latency and failure-mode risk — the first real clinical write to any of
these domains runs DDL inside the request.

**2. The canonical spine covers a fraction of the physical schema.** The platform rule is that
JAC-generated CRUD is the durable relational spine and system of record. Measured:

| | Tables |
|---|---|
| Canonical, generated-CRUD (`ClaimsProcessingDdl.xml`) | **106** (104 exist in prod, 72 hold rows) |
| Created by route code at runtime | 587 (358 exist, 72 hold rows) |
| Route-created tables **also** in the canonical XML | 50 |
| Route-created tables **outside** the canonical XML | **537** |

The real system of record is small and canonical — `source_record_events` (13,621 rows),
`audit_log` (13,472), `notification_deliveries` (6,040), `clinical_orders` (5,681), `dynamic_forms`
(5,316), `clinical_order_results` (4,643), `dynamic_forms_configuration` (3,121). The specialty
sprawl sits outside it. Of the 108 populated production tables, 72 are canonical and 36 are not.

**This is a governance finding, not a specialty-forms finding**, but the specialty corpus is what
made it visible: the fast path to "a form can save" has been *add a route that creates its own
table*, and doing that ~590 times produced a physical schema five times the size of the governed
one. If the specialty corpus is bound by pointing 1,821 forms at these tables, that ratio is locked
in — which is an argument for binding them to the encounter/clinical-document spine instead, and
letting the per-specialty tables serve the structured extras.

### The 8% with no domain at all

34 groups, 162 forms, have no registered API root under any spelling. The largest are organizational
rather than clinical, which is why they have no domain to map to:

| Forms | Group | Note |
|---|---|---|
| 34 | RCM | a label, not a domain — the real RCM domains are `/api/claims`, `/api/remittance`, `/api/denials` |
| 19 | Specialty | catch-all navGroup |
| 15 | Front Office | label; the domains are `/api/patient-check-in`, `/api/appointments` |
| 13 | Primary Care | genuinely absent — no primary-care domain exists |
| 9 | Care Coordination | genuinely absent |
| 8 | Colorectal Surgery | only `/api/colorectal-onc` exists (oncology ≠ surgery) |
| 7 | Operations · 7 Pediatric Subspecialties · 6 Family Medicine · 6 Maternal-Fetal Medicine | mixed |
| 3 | Aesthetics | in build by the AgentAesthetics lane |

**Family Medicine and Primary Care having no data domain is the sharpest item on this list.** They
are the ~27% of the corpus a family practice would actually document in-house, and they are the part
with nowhere to land. Whatever binding pattern is chosen, those two need a domain first.

### What this changes about sequencing

The four steps in *What would make this corpus real* stand. This section sharpens step 1:

- **It is a binding problem, not a backend problem.** ~200 tables and 419 registered API roots
  already exist; 92% of forms have a domain waiting. Do not build per-condition schema.
- **Bind to the encounter/clinical-document spine first, per-specialty tables second.** Binding to
  537 non-canonical tables would cement the sprawl the measurements above expose.
- **Family Medicine / Primary Care need a data domain created**, not mapped — they are the only
  family-practice-relevant groups with nothing behind them.
- **Expect first-write DDL.** For 229 tables, the first clinical save is also the `CREATE TABLE`.
  Pre-creating them (or moving them into the canonical schema) is cheap and removes a live-visit
  failure mode.

### Level of effort — what it costs to make the data domain real

> **Measured vs estimated.** The rates below are measured from this repo's git history and from the
> production database. The *sizing* that uses them is an estimate, and each row names its basis.

**Measured authoring throughput (backend, one agent).** 460 `util/*Routes.script` modules were added
over **26 active days**: peak days of **160 / 104 / 96** modules (generated batches), median **2/day**
for hand-authored ones. Definition (form) authoring runs at **~11/hour** in generated-batch mode per
the CF tracker's own measurement.

**The estimate swings ~50× on one decision**, so it is presented as two paths rather than a number:

| | **Path A — shared clinical-document binding** | **Path B — per-specialty typed columns** |
|---|---|---|
| What a form saves into | one governed document/encounter-note domain; answers stored as a payload keyed to patient + encounter + formType | mapped field-by-field onto the ~200 existing specialty tables' columns |
| Unit of work | **per domain** (~118 mapped groups), then one scripted stamp across definitions | **per form** (1,821 forms × ~13.7 fields ≈ 25k field mappings) |
| Effort | **8–13 days** | **300–600 hours** (~8–15 weeks of one agent) |
| Result | every form persists, retrievable, auditable; structured extras added later where they earn it | fully typed clinical data per specialty |
| Risk | payload data is not queryable as columns until promoted | cements 537 non-canonical tables; 50× the cost for data nobody has asked to query yet |

**Path A, itemised** (the recommended one; each row's basis in brackets):

| # | Work | Effort | Basis |
|---|---|---|---|
| 1 | Design + build the shared binding target (table in the **canonical** XML, generated CRUD, one route, tenant scoping) | **1–2 days** | measured: a route module with tables is ~½–1 day hand-authored (median 2/day) |
| 2 | Settle the binding pattern and prove it end-to-end on one form per care domain (~12) | **1–2 days** | today's DB-4 fix — 3 modules, 7 sites, compile-verified — took ~1 h; the per-domain unit is comparable |
| 3 | Stamp `binding.create/update` across 1,821 definitions and publish | **1 day** | measured: `publish-cf-definitions.mjs` published 69 definitions in one scripted run, zero deploy |
| 4 | Create the ~10 genuinely missing domains — **Family Medicine and Primary Care first** | **1–2 days** | measured: 96–160 modules/day in batch mode; ~10 needed after deduping labels |
| 5 | Pre-create the 229 never-created tables, or fold them into the canonical schema | **1 day** | scripted DDL pass; the DDL already exists in the route code |
| 6 | Verify a real write per domain (~118) and fix what surfaces | **2–4 days** | today's audit found 1 dead root and 7 wrong response shapes across the first 3 domains examined — expect a similar defect rate |
| | **Total** | **8–13 days of one agent** | |

**What "done" means at each rung**, so progress is checkable rather than declared:

| Rung | Test | Today |
|---|---|---|
| 1 | A form's answers survive a page reload | **fails** — 0/120 sampled forms can save |
| 2 | Saved answers appear in the patient chart | fails |
| 3 | A clinical specialty table in production holds ≥1 row | **fails — every one is empty** |
| 4 | A provider is offered the right form from the encounter's diagnosis | fails — no such mapping exists (step 2 of *What would make this corpus real*) |
| 5 | Specialty data is queryable/reportable as coded data | not started |

Rungs 1–3 are Path A. **Rung 4 is the highest-value item on this page and is not a data-layer
task** — it is a rules/definition mapping owned by the CF and workflow lanes, sized separately.
Rung 5 is where Path B's typed columns would eventually earn their cost, per specialty, driven by an
actual reporting requirement rather than up front.

**Caveat on this sizing.** The 8–13 days assumes the binding pattern is agreed once and applied by
script, that no per-form clinical review is required (the definitions already exist and are not being
re-authored), and one agent working continuously. It excludes the canonical-schema migration of the
537 non-canonical tables — a governance programme measured in weeks, not part of making the corpus
save. It also excludes any clinical curation of *which* forms should survive; the page above argues
~40 curated family-practice templates would serve better than 1,821 bound ones, and that judgement
would cut this estimate substantially rather than add to it.

**Immediate AgentDB queue** (the lane that owns rungs 1–3, current as of 2026-07-25): deploy-verify
the `{items,count}` envelope fix and the patient sub-resource PUT/DELETE shipped today
(commit `50bd03bc3`); resolve the one dead API root (`/api/edi-queue`); then rung 1 above, which is
blocked on nothing but the binding-pattern decision.

### Caveats on this section

- **Group→domain matching is name-based**, not a declared relationship: exact/alias matches (63% of
  forms) are reliable; the further 29% match only by substring and include weak ones — the largest
  group, `Clinical` (282 forms), matched `/api/clinical-order-results`, which is almost certainly
  wrong. Read "92% have a domain" as *an upper bound with a solid 63% floor*. The empty-table finding
  does not depend on the matching at all.
- **Row counts come from `pg_stat_user_tables.n_live_tup`**, PostgreSQL's live-tuple estimate. It is
  exact enough to distinguish empty from populated (the distinction this section rests on) but is not
  an exact count.
- **Tables were attributed to a domain by which route module creates them**, so a table created by
  one module and written by another is credited to the creator.
- Measured 2026-07-25 against the production database and the then-current catalog. Both change;
  re-measure before acting.

---

## What would make this corpus real

> **Superseded 2026-07-25** by the [Specialty Form Wiring Directive](#directive-specialty-form-wiring-founder-2026-07-25).
> Steps 1 and 2 below were the recommendation; the directive adopts both and assigns them —
> step 1 to AgentDB (as one canonical clinical-document model, not per-specialty binding) and
> AgentCF (scripted binding), step 2 to AgentUI. Steps 3 and 4 remain open backlog, unassigned.
> Kept here because the reasoning is what produced the directive.

In dependency order. Only the first is hard.

1. **Give a form somewhere to land.** Bind specialty forms to the encounter note — one shared
   binding pattern applied across the corpus, not 1,700 hand edits. Because bindings live in the
   definition, this is zero-deploy once the pattern is settled.
2. **Trigger the form from clinical context.** Map diagnosis / problem / visit reason → suggested
   template, so the provider is *offered* "Aortic Stenosis" when the encounter carries that
   diagnosis. This is the single highest-value change for provider experience: it converts a
   1,700-item catalog into a 1-item decision.
3. **Normalize `navGroup`** to a canonical specialty taxonomy, then regenerate the boards and fix
   the generator's self-reference.
4. **Retire or merge the long tail.** 63 groups hold ≤2 forms; several are compound labels
   (`OB/GYN / Endocrinology`, `Wound Care / Surgery`) that fragment a real specialty into one-offs.

## Honest caveats on this page

- The binding audit is a **stratified sample of 120**, not all ~1,690 clinical forms. The signal is
  strong (0/120 writable, 116/120 with no binding at all) but the exact full-corpus percentage is
  not measured.
- **"Why they exist" is now sourced, but partly by absence.** The directives are quoted from the CF
  master table and `AGENTS.md`; the claim that nothing asked for the individual condition forms
  rests on *searching* the directives, the CF table, the ECW ledger and the CF→ECW crosswalk and
  finding no such row. Absence of a record is not proof that no verbal decision was made — if one
  was, it is not written down anywhere I can find, which is itself the point.
- The **family-practice / referral-out split is my clinical classification** of 162 `navGroup`
  values, not a clinician's. The 27/44/29 split would shift somewhat under a different assignment;
  the "majority is referral-out" conclusion is robust to reasonable reassignment, the exact
  percentages are not.
- Duplicate detection normalizes case and punctuation, so it counts *near*-identical labels. Some of
  the 256 collisions are legitimate cross-specialty entries (a shared "Prostate Cancer" in Urology
  and Oncology); the five `Epilepsy` forms inside a single Neurology group are not.
- This page describes **build 1964**. The corpus changes frequently; re-measure before acting.

Related: [PracticeForceOne Platform Architecture](PracticeForceOnePlatformArchitecture.html) ·
[PracticeForceOne Platform Architecture Guide](PracticeForceOnePlatformArchitectureGuide.html)
