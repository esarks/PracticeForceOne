---
title: "PracticeForceOneAesthetics"
---

# PracticeForceOneAesthetics — Aesthetic / Med-Spa Forms Catalog & Gap Ledger

**Owner:** AgentAesthetics · **Created:** 2026-07-25 (founder directive: find ALL aesthetics forms
and land them in one accountable page) · **Last updated:** 2026-07-26 · **Status:** ✅ CATALOG
COMPLETE (v1) — 120 forms across 9 domains — and **FROZEN**.

> ## ⚠️ Scope superseded — read this before using the ledger below
>
> Two directives landed after this page was written and changed what the ledger is *for*:
> [Documentation Intelligence](PracticeForceOneDocumentationIntelligence.html) (2026-07-26) and the
> [North Star](PracticeForceOneNorthStar.html) (2026-07-26).
>
> **This catalog is now INVENTORY, not a build queue.** Building 120 forms would reproduce exactly
> what [Specialty Forms](PracticeForceOneSpecialtyForms.html) measured on the clinical side — ~1,700
> authored definitions, 97% with no binding, 0% able to save. Catalog expansion is frozen; a form
> earns a binding only when a real workflow needs it.
>
> **What replaced it:** the same clinical content, re-expressed as **reusable modules + evidence
> rules** so documentation is *inferred*, never chosen from a menu — `docs/documentation-engine/`
> in the app repo: **22 modules + 12 templates** and **24 rules** (9 hard sign-gates).
> Design: [Aesthetic Documentation](PracticeForceOneAestheticDocumentation.html).
>
> **The ledger below is still the authoritative domain inventory** — it is where the module and rule
> content came from, and it remains the checklist for "does the platform cover aesthetics?". Read it
> as *what an aesthetics practice needs*, not as *what to build next*.

**Last reviewed: 2026-07-25** | Evidence corpus: 82 files in `Downloads\AestheticRecord` — 22
substantive product screens reviewed (100% of the substantive set), 60 stock/decorative assets
retired from the ledger. PFO baseline compared against: 196 CF definitions in
`ui/public/form-configs/`.

## Charter

Benchmark PracticeForceOne against the **medical-aesthetics / med-spa** vertical — Aesthetic
Record (pure-aesthetics leader), plus the AmSpa-class attorney-reviewed forms library that every
US med spa is expected to run on — and turn it into **one accountable form per row**, same style
as [PracticeForceOneECWTable](PracticeForceOneECWTable.html) /
[PracticeForceOneCernerTable](PracticeForceOneCernerTable.html) /
[PracticeForceOneEpicTable](PracticeForceOneEpicTable.html).

Two framings that matter before reading the ledger:

1. **This is a definition set, not an app.** Per the platform architecture North Star, "Aesthetics"
   must ship as a **per-practice definition package** running on the existing generic engines
   (Forms / Workflow / Task / Rules / Dashboard), not as a med-spa product bolted onto the side.
   Where a row cannot be expressed as a definition today, that is an **engine gap** and it is
   called out in [Platform read](#platform-read--engine-gaps-vs-definition-gaps) below.
2. **Hybrid is the real target.** Pure-aesthetics platforms have no insurance billing; family-practice
   EHRs have no photos, memberships, or cosmetic consents. PFO's opening is the **hybrid** practice
   (family/primary care CPT billing *and* cash-pay cosmetic on the same patient record) — the
   segment where OptiMantra is currently the only purpose-built answer. Every row below is scored
   with that in mind: the cosmetic side must coexist with, not replace, the clinical chart.

## Evidence corpus + review coverage

`C:\Users\ptm\Downloads\AestheticRecord` — 82 files, ~4.9 MB, 7 subfolders (collected 2026-07-25).
Sources are Aesthetic Record's product/marketing surfaces plus one full in-app screenshot; the
forms library is corroborated against AmSpa / EasyDocForms / Pabau published form inventories.

| Source folder | Files | Substantive | Review state |
|---|---|---|---|
| 01_EMR_Patient_Chart | 13 | 6 | ✅ REVIEWED — injection mapping w/ units+syringes, treatment record w/ paperwork gate, retail/current-sale cart, inventory + low-stock, provider revenue, NPS + SMS thread |
| 02_Clinical_Documentation | 10 | 6 | ✅ REVIEWED — **Good Faith Exam + Standing Order**, Injectables Treatment Questionnaire builder, Dot Phrase editor (Fitzpatrick), locked/signed treatment record, Chart Audit (cosmetic vs health procedures) |
| 03_Patient_Portal | 10 | 6 | ✅ REVIEWED — consents/questionnaires queue w/ sign state + witness requirement, appointments confirm/reschedule, memberships + auto-pay, wallet (Allē/Aspire/Xperience), card-on-file |
| 04_Business_Analytics | 8 | 2 | ✅ REVIEWED — total sales report (wallet/membership/gift-card/tips/tax/fees/discounts→net), sales by product, booking % by provider, most-used discount, Chart Audit KPI tiles |
| 05_Marketing_CRM | 6 | 1 | ✅ REVIEWED — LeadAR CRM: opportunity pipeline, funnel w/ next-step conversion, stage distribution, campaign attribution ($99 facial offer) |
| 06_Feature_Showcase | 24 | 2 | ✅ REVIEWED — full-face B&A photo set (1+2+3 layout) w/ traceability; remainder are icons |
| 07_UI_Screens | 11 | 1 | ✅ REVIEWED — **the real in-app screenshot**: nav = Dashboard/Clients/Appointments/Sales/Inventory/Reports/Surveys/MD's Room/Provider's Room; Patient Profile w/ Cosmetic vs Health Timeline |

**Corpus thin spots** (do not claim coverage): device-specific treatment screens (laser/IPL
parameter entry), inventory receiving/vial reconciliation, the SOP/policy documents themselves
(AmSpa is paywalled — form *names* are public, form *bodies* are not), and multi-location
enterprise admin. Rows sourced from the published form inventories rather than a screenshot are
marked `Evidence = library`.

## What the corpus proves (the aesthetics operating model)

Seven structural differences from PFO's family-practice model. Every one of them is a platform
question, not a screen question:

1. **The chart is two timelines.** `Cosmetic Timeline` and `Health Timeline` are separate tabs on
   the same client. Cosmetic entries are *procedures with money and photos attached*; health
   entries are ordinary clinical encounters. Chart Audit repeats the split (`Cosmetic Procedures` /
   `Health Procedures`). This is exactly the hybrid model PFO needs.
2. **Nothing gets signed until the paperwork gate closes.** The treatment record shows
   Paperwork (Consents ✓ / Questionnaires ✗) · Photos & Videos · Payment (Invoice ✓) · More
   (Traceability ✓) as *completion conditions*. `Chart Audit` then counts what never closed:
   2709 charts awaiting provider signature, 139 awaiting MD signature.
3. **The Good Faith Exam is the license to treat.** One form pre-authorizes areas and product
   classes ("approved for the following areas for neurotoxin: Frontalis, Corrugators, Mentalis,
   Perioral Rhytids, Lateral Orbicularis"; approved filler types; approved energy devices), and
   every later procedure is executed against it. It is a **standing order with scope**, not a note.
4. **Dose is charted on anatomy.** Injection points carry per-point units (Dysport 10/10/16/16) or
   syringe volume (0.2/0.3/0.4), colour-coded by product, with cannula/needle callouts — and roll
   up to "Dysport Total: 5 injection(s) – 50 Units". The chart *is* the diagram.
5. **Photos are clinical data.** Standardized front/oblique/profile sets per visit, B&A videos,
   treatment-marking overlays, and a per-image consent state that decides marketing eligibility.
6. **Commerce is inside the chart.** Unit pricing ($6.50/unit, $850/syringe), member pricing,
   tips, surcharge, sales tax, wallet credits (Allē/Aspire/Xperience), memberships with auto-pay
   and draw day, packages, gift cards, deposits at booking, inventory drawdown per vial.
7. **Lot traceability is mandatory.** Every cosmetic product administered is tied to lot/expiry
   ("Traceability Info" on every record) — the recall path for an injectable.

## Aesthetics Form Catalog

Row IDs: `AES-<domain>-<n>`. **G/E**: GAP = PFO has nothing usable · PARTIAL = a PFO definition
exists but lacks the aesthetic dimension · ENH = PFO has it and the aesthetic treatment is better.
Sizes S/M/L. Status ☐ = proposed (awaiting founder disposition ⏳).
Evidence = corpus folder number, or `library` for published-inventory-sourced rows.

### AES-IN — Intake, screening & consultation (13)

| ID | Form | What it captures | Evidence | PFO today | G/E | Proposed PFO definition | Size | Status |
|---|---|---|---|---|---|---|---|---|
| AES-IN-1 | Aesthetic client registration | Demographics + referral source / how-heard, marketing opt-in, preferred contact, VIP flags | 07 | `patients-default` (clinical demographics) | PARTIAL | extend patient CF with cosmetic-client fields (referral source, opt-in, do-not-call) | S | ☐ |
| AES-IN-2 | Medical history & contraindication screen | Autoimmune, bleeding disorder, anticoagulants, keloid hx, neuromuscular disorders, pregnancy/nursing, prior aesthetic tx + complications | 02, library | `patient-self-intake-default` (chief complaint/ROS/meds) | PARTIAL | aesthetic-history CF with contraindication scoring that feeds the GFE | M | ☐ |
| AES-IN-3 | Allergy & sensitivity form | Lidocaine, latex, HA, botulinum toxin, bovine collagen, nickel, topical anesthetics | 02 | allergies list on patient chart | PARTIAL | aesthetic-allergen panel as a typed allergy category | S | ☐ |
| AES-IN-4 | Skin health assessment | Fitzpatrick I–VI, Glogau photoaging, Baumann type, current regimen, sun exposure, isotretinoin within 6–12 mo | 02 (Dot Phrase: Fitzpatrick) | none | GAP | skin-assessment CF; Fitzpatrick drives device-parameter safety rules | M | ☐ |
| AES-IN-5 | Injectables treatment questionnaire | Previous injectables, product name known, medical conditions, prior facial surgery, ingredient hypersensitivity, medication allergies | 02 (verbatim) | none | GAP | ship as a CF questionnaire definition, assignable to services | S | ☐ |
| AES-IN-6 | Aesthetic goals & areas of interest | Concern areas by facial/body zone, budget band, timeline, event date, prior satisfaction | 02 (chief complaint: volume loss, age-related lines, hyperhidrosis) | none | GAP | goals CF feeding the treatment plan | S | ☐ |
| AES-IN-7 | Pre-treatment readiness checklist | Blood thinners/fish oil/alcohol 24–48h, recent dental work, active illness, vaccines within 2 wks, retinoid pause | library | none | GAP | pre-care checklist definition, gate on appointment status | S | ☐ |
| AES-IN-8 | Pregnancy / lactation attestation | Signed attestation at each visit for toxin/filler/energy | library | none | GAP | per-visit attestation (reuse the Verified-checkbox pattern) | S | ☐ |
| AES-IN-9 | Weight-management / GLP-1 intake | Weight hx, comorbidities, thyroid/MEN2 family hx, baseline labs, prior GLP-1 exposure | 02 (GLP-1 Consult, GLP-1 Lab Review) | `bariatric-medicine-default` (clinical) | PARTIAL | cash-pay GLP-1 intake + lab-review note | M | ☐ |
| AES-IN-10 | Hormone / BHRT intake & symptom inventory | Symptom scores, hormone panel, pellet hx, contraindications | library | `endocrinology-default` | PARTIAL | BHRT intake + pellet-insertion record | M | ☐ |
| AES-IN-11 | Hair-restoration intake | Norwood/Ludwig scale, shedding pattern, prior transplant/minoxidil/finasteride, scalp photos | 02 (Hair Restore w/PDRN) | none | GAP | hair-restoration CF + scalp photo set | M | ☐ |
| AES-IN-12 | Body-contouring intake | BMI, circumference measurements per zone, target areas, prior liposuction/cryolipolysis | library | none | GAP | body-contouring CF with measurement series | M | ☐ |
| AES-IN-13 | Virtual consult intake | Remote-consult questions, self-uploaded photos, quote request | 03 | `telehealth-visit-default` | PARTIAL | cosmetic virtual-consult variant w/ photo upload | S | ☐ |

### AES-CN — Consents, authorizations & agreements (35)

The single largest category and the highest legal exposure. PFO has three generic consent
definitions (`consent-to-treat`, `procedure-consent`, `hipaa-authorization`); the aesthetics
requirement is a **versioned, treatment-specific consent library** with witness + minor-guardian
paths and per-image media consent.

| ID | Form | What it captures | Evidence | PFO today | G/E | Proposed PFO definition | Size | Status |
|---|---|---|---|---|---|---|---|---|
| AES-CN-1 | General consent to med-spa services | Scope of services, provider roles, right to refuse | 03 | `consent-to-treat-default` | PARTIAL | add MED_SPA consent type | S | ☐ |
| AES-CN-2 | HIPAA acknowledgment + release of health info | Notice acknowledgment; authorization to release | 03 ("Authorization To Release Health Information") | `hipaa-authorization-default` | ENH | none — PFO's 10-type model already exceeds | S | ☐ |
| AES-CN-3 | Photography & media release (tiered) | Chart-only / internal training / marketing / social-with-face; revocation; storage terms | 03, library | none | GAP | **tiered media consent — per-image eligibility flag, not a single yes/no** | M | ☐ |
| AES-CN-4 | Neurotoxin consent | Mechanism, onset/duration, ptosis/asymmetry/headache/bruising, contraindications, touch-up policy | 02, 03 | generic only | GAP | toxin consent definition (Botox/Dysport/Xeomin/Jeuveau/Daxxify/Letybo) | M | ☐ |
| AES-CN-5 | Dermal filler consent | Product, longevity, **vascular occlusion incl. blindness risk periocular**, hyaluronidase reversal | 03 ("Filler" consent, witness required), library | generic only | GAP | filler consent w/ mandatory VO disclosure + witness path | M | ☐ |
| AES-CN-6 | Biostimulator consent | Sculptra/Radiesse/Renuva/PDGF/EZ Gel — delayed results, nodule risk, massage protocol | 01, 02 (GFE list) | none | GAP | biostimulator consent definition | S | ☐ |
| AES-CN-7 | PRP / PRF / PDRN consent | Autologous draw, processing, variable response, series expectation | 02 (Microneedling w/ PRP, PDRN) | none | GAP | regenerative-injectable consent | S | ☐ |
| AES-CN-8 | Microneedling consent | Depth, downtime, PIH risk, isotretinoin exclusion | 02 | none | GAP | microneedling consent | S | ☐ |
| AES-CN-9 | RF microneedling consent | Energy + depth, burn/tracking risk, device specifics | 02 (Sylfirm X, RF Microneedling) | none | GAP | RF-microneedling consent | S | ☐ |
| AES-CN-10 | Chemical peel consent | Depth class, frosting, peeling timeline, PIH, sun avoidance | 04 (Chemical Peel product line) | none | GAP | peel consent w/ depth class | S | ☐ |
| AES-CN-11 | Laser resurfacing consent | Ablative vs non-ablative, downtime, infection/scarring, Fitzpatrick risk | library | none | GAP | laser-resurfacing consent | M | ☐ |
| AES-CN-12 | IPL / BBL photofacial consent | Pigment/vascular targets, eye protection, tanning exclusion | 04 (IPL) | none | GAP | IPL consent | S | ☐ |
| AES-CN-13 | Laser hair removal consent | Series expectation, paradoxical hypertrichosis, burn risk, Fitzpatrick limits | library | none | GAP | LHR consent | S | ☐ |
| AES-CN-14 | Vascular / pigment laser consent | Purpura, PIH, recurrence | library | none | GAP | vascular-laser consent | S | ☐ |
| AES-CN-15 | Body contouring consent | Cryolipolysis/RF/EMS; PAH risk, result variability, series | library | none | GAP | body-contouring consent | S | ☐ |
| AES-CN-16 | Deoxycholic acid (Kybella) consent | Swelling, nerve injury, dysphagia, series | library | none | GAP | DCA consent | S | ☐ |
| AES-CN-17 | Sclerotherapy consent | Hyperpigmentation, matting, ulceration, DVT screen | library | none | GAP | sclerotherapy consent | S | ☐ |
| AES-CN-18 | Thread lift consent | Extrusion, dimpling, asymmetry, duration | library | none | GAP | thread-lift consent | S | ☐ |
| AES-CN-19 | Medical facial / Hydrafacial consent | Actives used, sensitivity, expected purge | 03 ("Brightening Facial Consent"), 01 (Hydrafacial) | none | GAP | facial-service consent | S | ☐ |
| AES-CN-20 | Dermaplaning / microdermabrasion consent | Abrasion depth, sensitivity, aftercare | library | none | GAP | resurfacing-lite consent | S | ☐ |
| AES-CN-21 | Permanent makeup / microblading consent | Pigment, healing/retouch, MRI note, patch test | library | none | GAP | PMU consent | S | ☐ |
| AES-CN-22 | Vaginal rejuvenation consent | Device/energy, off-label status, expectations | library | none | GAP | intimate-wellness consent | S | ☐ |
| AES-CN-23 | IV therapy / vitamin injection consent | Formulation, IV risks, compounded-source disclosure | library | `infusion-therapy-default` | PARTIAL | cash-pay IV/wellness consent | S | ☐ |
| AES-CN-24 | Weight management / GLP-1 consent | Compounded-drug disclosure, dose escalation, GI/gallbladder/thyroid warnings | 02 | none | GAP | GLP-1 consent w/ compounded disclosure | M | ☐ |
| AES-CN-25 | Hormone pellet / BHRT consent | Insertion procedure, extrusion/infection, off-label compounded pellets | library | none | GAP | BHRT consent | S | ☐ |
| AES-CN-26 | Hair restoration consent | PRP/PDRN series, shedding phase, no-guarantee language | 02 | none | GAP | hair-restoration consent | S | ☐ |
| AES-CN-27 | Off-label use disclosure | Explicit acknowledgment per off-label indication | library | none | GAP | off-label acknowledgment block (reusable across consents) | S | ☐ |
| AES-CN-28 | Compounded medication disclosure | 503A/503B source, not FDA-approved product | library | none | GAP | compounded-drug disclosure block | S | ☐ |
| AES-CN-29 | Financial agreement / cancellation & no-show policy | Deposit, cancellation fee, refund limits, package expiry, opened-product no-refund | 01 (Cancellation Policy chip), 04 ($350 cancellation fees), 06 ($50 deposit) | none | GAP | financial policy agreement + fee automation | M | ☐ |
| AES-CN-30 | Membership agreement + auto-pay authorization | Term, monthly amount, draw day, benefits, cancellation | 03 (VIP Founders Club: monthly, auto-pay on, draw day 1st) | `payment-plan-default` (installments) | PARTIAL | recurring **membership** agreement (≠ installment plan) | M | ☐ |
| AES-CN-31 | Card-on-file authorization | Stored card for future charges, terms reference | 03 ("you allow … to charge your card for future payments") | none | GAP | card-on-file consent + tokenized method record | M | ☐ |
| AES-CN-32 | Telehealth consent | Remote care limits, state licensure, recording | library | `consent-to-treat-default` (telehealth type) | ENH | none | S | ☐ |
| AES-CN-33 | Minor treatment / guardian consent | Guardian identity, relationship, presence requirement | library | `procedure-consent-default` (surrogate decision-maker) | PARTIAL | guardian path w/ age rules per modality | S | ☐ |
| AES-CN-34 | Witness signature attestation | Second signer captured on high-risk consents | 03 ("Witness Signature Required") | none | GAP | **witness signature as a Forms Runtime capability** | M | ☐ |
| AES-CN-35 | Refusal / declined-treatment record | Declined recommendation, reason, signature | library | none | GAP | refusal record (reuse coded-reason pattern) | S | ☐ |

### AES-TX — Clinical treatment records (20)

| ID | Form | What it captures | Evidence | PFO today | G/E | Proposed PFO definition | Size | Status |
|---|---|---|---|---|---|---|---|---|
| AES-TX-1 | **Good Faith Exam + Standing Order** | Chief complaint; intake+history reviewed attestation; contraindications found; approved areas per modality (neurotoxin muscles, filler zones); approved product classes (HA brands, biostimulators); approved energy devices; approved services; validity window | 02 (verbatim) | none | GAP | **the keystone row** — GFE definition that later procedures execute against (scope + expiry + delegating provider) | L | ☐ |
| AES-TX-2 | Injection treatment record w/ facial mapping | Per-point product, units or syringe volume, depth/plane, needle vs cannula + gauge, technique; per-product totals | 01, 02 | none | GAP | body-map field type + per-point payload; totals roll up to the invoice | L | ☐ |
| AES-TX-3 | Product traceability / lot log | Lot #, expiry, NDC, vial ID, reconstitution, units drawn, wastage | 01, 02, 06 ("Traceability Info") | `injection-admin-default` (vaccine lot/NDC/CVX) | PARTIAL | extend the injection log to cosmetic units/syringes + vial drawdown | M | ☐ |
| AES-TX-4 | Energy-device treatment record | Device, handpiece/tip, fluence J/cm², pulse width, spot size, passes, cooling, clinical endpoint | library (corpus thin) | none | GAP | device-parameter CF, Fitzpatrick-aware safety rules | M | ☐ |
| AES-TX-5 | Chemical peel record | Agent + %, layers, frosting level, contact time, neutralization | library | none | GAP | peel record | S | ☐ |
| AES-TX-6 | Microneedling record | Depth mm per zone, passes, serum/PRP volume, endpoint erythema | 02 | none | GAP | microneedling record | S | ☐ |
| AES-TX-7 | Facial / skincare service record | Steps performed, actives, extractions, post-care given | 01 (Hydrafacial) | none | GAP | facial service record | S | ☐ |
| AES-TX-8 | Body-contouring session record | Applicator, cycles, zones, measurements before/after | library | none | GAP | contouring session record | S | ☐ |
| AES-TX-9 | Treatment plan (multi-session series) | Recommended services, session count + intervals, pricing, progress against plan | 07 ("Treatment Plan" action) | `care-plan-default` (clinical) | PARTIAL | cosmetic treatment plan w/ commerce + series tracking | M | ☐ |
| AES-TX-10 | Aesthetic procedure note + dot phrases | Narrative note; reusable `.phrase` templates with slot-fills (e.g. Fitzpatrick) | 01, 02 (Dot Phrase editor) | `clinical-visit-notes-default` | PARTIAL | **dot-phrase/SmartText as a Forms Runtime capability**, not a per-form field | M | ☐ |
| AES-TX-11 | Follow-up / touch-up assessment | 2-week post-tox review, unit adjustment, satisfaction, photo compare | library | none | GAP | touch-up assessment tied to the original procedure | S | ☐ |
| AES-TX-12 | Adverse event / complication report | Event type (VO, ptosis, nodule, burn, PIH, infection), onset, management, outcome, reportability | library | `incident-report-default` | PARTIAL | clinical AE variant linked to the procedure + lot | M | ☐ |
| AES-TX-13 | Emergency protocol record — hyaluronidase | VO recognition, hyaluronidase dose/timing, escalation, ophthalmology referral | library | none | GAP | emergency protocol record + kit check | M | ☐ |
| AES-TX-14 | Post-care instructions per modality | Modality-specific aftercare + acknowledgment signature | library | `discharge-instructions-default` (patient-sign exists) | PARTIAL | aesthetic post-care library keyed by service | S | ☐ |
| AES-TX-15 | Pre-care instructions per modality | Pre-treatment do/don't list, delivered at booking | library | `patient-education-default` | PARTIAL | pre-care delivery on booking confirmation | S | ☐ |
| AES-TX-16 | Topical anesthetic log | Agent, application time, removal time, area | library | none | GAP | numbing log (safety-relevant for compounded topicals) | S | ☐ |
| AES-TX-17 | Skin analysis / imaging assessment | Scored analysis (wrinkles, pores, pigment, redness) w/ trend | library | none | GAP | skin-analysis scoring CF (device-agnostic) | M | ☐ |
| AES-TX-18 | Consultation note + quote | Non-treating consult, recommendations, priced quote, conversion state | 05 (opportunity pipeline) | none | GAP | consult note that emits a quote into the CRM pipeline | M | ☐ |
| AES-TX-19 | GLP-1 lab review note | Baseline/interval labs, dose decision, side-effect check | 02 | none | GAP | GLP-1 lab review note | S | ☐ |
| AES-TX-20 | Delegation & supervision record | Who injected, who supervised, MD's Room / Provider's Room routing, co-sign | 02, 07 | `provider-supervision-default` | PARTIAL | wire supervision to the cosmetic co-sign queue | M | ☐ |

### AES-PH — Photography & visual documentation (6)

| ID | Form | What it captures | Evidence | PFO today | G/E | Proposed PFO definition | Size | Status |
|---|---|---|---|---|---|---|---|---|
| AES-PH-1 | Standardized B&A photo set | Front / oblique L+R / profile L+R per visit, consistent lighting + pose metadata | 01, 02, 06, 07 | none | GAP | **media capture as a Forms Runtime field type** w/ required-angle sets | L | ☐ |
| AES-PH-2 | Photo alignment / overlay compare | Ghost-overlay alignment (SmartMatch class), side-by-side, slider | 01, 07 | none | GAP | comparison viewer bound to the media field | M | ☐ |
| AES-PH-3 | Per-image consent state | Which release tier covers each image; marketing-eligible flag; revocation cascade | 03, library | none | GAP | media-consent binding (blocks marketing export by default) | M | ☐ |
| AES-PH-4 | Treatment markings overlay | Injection points/annotations drawn over the photo, saved with the record | 01, 02, 07 ("View Treatment Markings") | none | GAP | annotation layer persisted with AES-TX-2 | M | ☐ |
| AES-PH-5 | Before/after video | Short-form video capture attached to the procedure | 01, 02 ("B&A Videos") | none | GAP | video asset type + storage policy | M | ☐ |
| AES-PH-6 | Cosmetic photo timeline | Chronological visual journey per client, filterable by service | 07 (Cosmetic Timeline) | none | GAP | timeline view over the media store | M | ☐ |

### AES-GV — Oversight, compliance & governance (12)

| ID | Form | What it captures | Evidence | PFO today | G/E | Proposed PFO definition | Size | Status |
|---|---|---|---|---|---|---|---|---|
| AES-GV-1 | Chart audit queue | Awaiting provider signature / signed by provider / awaiting MD signature / signed & returned, per provider, per clinic, exportable | 02, 04 (2709 / 106 / 139 / 91) | none | GAP | **chart-completion queue as a Task Engine definition** | M | ☐ |
| AES-GV-2 | Provider co-sign + chart lock | Lock-on-sign ("Locked By …"), MD counter-sign, unlock/amend audit | 02, 07 (MD consent Signed) | `record-locks` + addendum exist | PARTIAL | co-sign lifecycle on cosmetic procedures | M | ☐ |
| AES-GV-3 | Scope-of-practice / delegation matrix | Which role may perform which modality in which state | library | RBAC exists | PARTIAL | modality-level permissions as policy definitions | M | ☐ |
| AES-GV-4 | Standing order library | Versioned standing orders, effective/expiry, delegating physician | 02 | none | GAP | standing-order definitions w/ expiry alerts | M | ☐ |
| AES-GV-5 | Medical director agreement & oversight log | Agreement on file, chart-review cadence, review evidence | library | none | GAP | oversight log + review attestation | S | ☐ |
| AES-GV-6 | Injector credentialing & training record | License, certifications per product/device, training dates, competency sign-off | library | `staff-credentials-default` | PARTIAL | add device/product certification dimension | S | ☐ |
| AES-GV-7 | Device maintenance & calibration log | Service dates, calibration certs, downtime | library | none | GAP | device asset + maintenance log | S | ☐ |
| AES-GV-8 | Sharps / biohazard / OSHA logs | Exposure control, sharps disposal, training attestations | library | none | GAP | OSHA log definitions | S | ☐ |
| AES-GV-9 | Emergency kit checklist | Hyaluronidase, epinephrine, crash supplies + expiry checks | library | none | GAP | recurring checklist task w/ expiry | S | ☐ |
| AES-GV-10 | Prescription/controlled inventory reconciliation | Received vs administered vs wasted vs on-hand, witness on waste | library | none | GAP | reconciliation record tied to AES-TX-3 | M | ☐ |
| AES-GV-11 | Incident report | Non-clinical incidents, injuries, complaints | library | `incident-report-default` | ENH | none | S | ☐ |
| AES-GV-12 | Consent version control & re-consent policy | Which consent version a client signed; re-consent triggers on revision/interval | library | none | GAP | **definition versioning surfaced on signed artifacts** | M | ☐ |

### AES-CM — Commerce, memberships & inventory (12)

| ID | Form | What it captures | Evidence | PFO today | G/E | Proposed PFO definition | Size | Status |
|---|---|---|---|---|---|---|---|---|
| AES-CM-1 | Service & retail catalog w/ unit pricing | Per-unit / per-syringe / per-treatment pricing, member pricing, categories, promotions | 01 ($6.50/unit, $850/syringe, member-pricing toggle) | `charge-master-default` (fee schedule) | PARTIAL | cash-pay catalog w/ unit pricing + member tier | M | ☐ |
| AES-CM-2 | Point-of-sale checkout | Cart, tips, surcharge %, sales tax, discounts, split payment | 01, 02 (surcharge 2.75%, tax 8.75%, provider tip) | `payments-posting-default` (claims-oriented) | GAP | retail POS checkout definition | L | ☐ |
| AES-CM-3 | Membership plan definition + enrollment | Plan, price, frequency, draw day, benefits, active/inactive | 03 | none | GAP | membership plan + enrollment definitions | M | ☐ |
| AES-CM-4 | Package / series purchase + redemption ledger | Sessions purchased, redeemed, remaining, expiry | library | none | GAP | package ledger (redemption on procedure completion) | M | ☐ |
| AES-CM-5 | Client wallet | Dollar credit, brand loyalty balances (Allē / Aspire / Xperience), total wallet value | 03, 07 (Client Wallet) | none | GAP | **stored-value ledger capability** | L | ☐ |
| AES-CM-6 | Gift card issue / redeem | Issue, balance, redemption, expiry rules | 04 (gift card line) | none | GAP | gift-card ledger (shares AES-CM-5) | S | ☐ |
| AES-CM-7 | Discounts & promotions | Item discount, friends-and-family %, referral $, partner %, complimentary | 04 (most-used-discount breakdown) | none | GAP | discount definitions + authorization rules | M | ☐ |
| AES-CM-8 | Inventory: product master + stock | Product vs service, category, supplier, on-hand, low-stock reorder | 01 (Restylane 32 in stock, Jeuveau 483) | none | GAP | inventory definitions | M | ☐ |
| AES-CM-9 | Vial / unit drawdown reconciliation | Units charted vs units drawn vs vial size; wastage variance | 01, library | none | GAP | drawdown report over AES-TX-3 | M | ☐ |
| AES-CM-10 | Loyalty program enrollment | Brand rewards linkage, points accrual/redemption | 05 | none | GAP | loyalty enrollment definition | S | ☐ |
| AES-CM-11 | Booking deposit | Deposit amount per service, applied at checkout, forfeiture on no-show | 06 ($50 deposit on Wrinkle Relaxers) | none | GAP | deposit rule on the service definition | M | ☐ |
| AES-CM-12 | Refund / complimentary authorization | Reason, approver, amount, ledger effect | 04 (refunds, discount & complimentary lines) | none | GAP | refund authorization w/ approval rule | S | ☐ |

### AES-PT — Patient portal & self-service (10)

| ID | Form | What it captures | Evidence | PFO today | G/E | Proposed PFO definition | Size | Status |
|---|---|---|---|---|---|---|---|---|
| AES-PT-1 | Online booking wizard | 5 steps: select service → choose time → your details → payment → confirmation; deposit at step 4 | 06 (Beauty Lab wizard) | `portal-precheckin` / `portal-registration` (AgentUI lane) | PARTIAL | cosmetic booking flow w/ service catalog + deposit | M | ☐ |
| AES-PT-2 | Portal paperwork queue | Consents (n) / Questionnaires (n) tabs, per-appointment, sign state incl. "Witness Signature Required" | 03 | none | GAP | portal paperwork queue driven by service→form assignment | M | ☐ |
| AES-PT-3 | Upcoming / past appointments | Confirm, reschedule, cancel; provider + clinic shown | 03 | portal appointments exist | PARTIAL | add confirm action + cancellation-policy display | S | ☐ |
| AES-PT-4 | My wallet | Balance + credit breakdown by source | 03 | none | GAP | portal view over AES-CM-5 | S | ☐ |
| AES-PT-5 | My payment methods | Add/delete card, brand icons, billing ZIP, future-charge terms | 03 | none | GAP | tokenized payment-method management | M | ☐ |
| AES-PT-6 | Memberships self-service | Active/inactive, edit, cancel, join | 03 | none | GAP | portal view over AES-CM-3 | S | ☐ |
| AES-PT-7 | Pre/post-care delivery + acknowledgment | Instructions pushed pre- and post-visit; acknowledgment captured | library | `discharge-instructions` patient-sign | PARTIAL | schedule-driven delivery | S | ☐ |
| AES-PT-8 | Two-way SMS / chat | Threaded clinic↔client messaging from the client's phone | 01 | `patient-portal-messages-default` | PARTIAL | SMS transport + thread on the client record | M | ☐ |
| AES-PT-9 | NPS / review request | 1–5 return-likelihood + free text, post-visit trigger | 01, 07 (Surveys nav) | `patient-surveys-default` (CAHPS/NPS) | ENH | trigger on cosmetic procedure completion | S | ☐ |
| AES-PT-10 | Client photo upload | Progress selfies between visits, consented into the timeline | library | none | GAP | portal media upload into AES-PH-6 | M | ☐ |

### AES-MK — Marketing, CRM & retention (6)

| ID | Form | What it captures | Evidence | PFO today | G/E | Proposed PFO definition | Size | Status |
|---|---|---|---|---|---|---|---|---|
| AES-MK-1 | Lead capture & opportunity pipeline | Lead → stages (open/lost/won/abandoned), opportunity value, conversion rate, next-step conversion per stage | 05 (LeadAR: 1.57K opps, $74.33K, 18.11%) | none | GAP | opportunity/pipeline definitions (cash-pay sales motion) | L | ☐ |
| AES-MK-2 | Automated recall / rebook by product duration | Tox ~12 wk, filler 9–12 mo, series intervals → automated outreach | 05 (Automated Recalls) | `recall-list` + `outreach-campaigns` | PARTIAL | duration-driven recall rules keyed to the product administered | M | ☐ |
| AES-MK-3 | Campaign attribution & ROI | Offer → funnel → booked → won revenue per campaign | 05 ($99 Facial Offer funnel) | `messaging-campaigns` / `outreach-campaigns` | PARTIAL | attribution fields + ROI report | M | ☐ |
| AES-MK-4 | Referral tracking & rewards | Referring client, reward issued (e.g. $50 off), redemption | 04 (Referral $50 Off, Friends & Family 25%) | `referring-providers` (clinical referrals) | GAP | client-to-client referral ledger (≠ provider referral) | M | ☐ |
| AES-MK-5 | Reputation / review management | Review request, response, rating trend | 05 (Reputation module) | none | GAP | review request + rating rollup | S | ☐ |
| AES-MK-6 | Lifecycle automations | Birthday, anniversary, no-show win-back, lapsed-client reactivation | 05 (Automations) | none | GAP | lifecycle triggers on the Workflow Engine | M | ☐ |

### AES-BI — Business intelligence (6)

| ID | Form | What it captures | Evidence | PFO today | G/E | Proposed PFO definition | Size | Status |
|---|---|---|---|---|---|---|---|---|
| AES-BI-1 | Total sales report | Procedures+retail, membership revenue, wallet credits/debits, gift cards, cancellation fees, refunds, tips, tax, processing fees, discounts → **total net sales** | 04 (verbatim line items) | claims-side reports only | GAP | cash-pay P&L report definition | L | ☐ |
| AES-BI-2 | Sales by product / service | Revenue per product line (filler, toxin, IPL, facial, peel) | 04 | none | GAP | product revenue report | S | ☐ |
| AES-BI-3 | Provider productivity | Revenue per hour (gross/net) vs clocked-in hours, booking %, total sales per provider | 01, 04 | none | GAP | provider productivity report | M | ☐ |
| AES-BI-4 | Retention & rebooking | Rebook rate at checkout, lapsed clients, average client value, visit frequency | library | none | GAP | retention report | M | ☐ |
| AES-BI-5 | Product cost, margin & yield | Cost per unit, margin per service, units-per-vial yield vs waste | library | none | GAP | margin/yield report over AES-CM-9 | M | ☐ |
| AES-BI-6 | Chart compliance dashboard | Unsigned charts, missing consents/questionnaires, missing photos, aged by provider | 02, 04 | none | GAP | compliance dashboard over AES-GV-1 | M | ☐ |

**Catalog totals:** 120 rows — IN 13 · CN 35 · TX 20 · PH 6 · GV 12 · CM 12 · PT 10 · MK 6 · BI 6.
Disposition: **89 GAP · 27 PARTIAL · 4 ENH**.

## Platform read — engine gaps vs definition gaps

Most of the 120 rows are **definition work** (a CF JSON + backing CRUD) and should never touch
engine code. But the corpus exposes **eight capabilities** that no amount of definition authoring
can express today. Per the platform-first rule, these are built once, then ~70 of the rows above
become ordinary definitions:

| # | Capability | Unlocks | Owning engine |
|---|---|---|---|
| P-1 | **Media capture field type** (photo/video sets, required angles, per-image metadata) | AES-PH-1/5/6, AES-PT-10, AES-IN-11 | Forms Runtime |
| P-2 | **Annotatable body/face map field** (per-point payload: product, dose, depth, device) | AES-TX-2/4/6, AES-PH-4 | Forms Runtime |
| P-3 | **Signature lifecycle**: patient + witness + guardian + provider + counter-signer, with lock-on-sign | AES-CN-3/5/33/34, AES-GV-2 | Forms Runtime + Security |
| P-4 | **Paperwork gate**: a definition declaring its completion conditions (consents ✓, questionnaires ✓, photos ✓, payment ✓) before an artifact may be signed | AES-GV-1, every AES-TX row | Workflow Engine |
| P-5 | **Scoped standing authorization** (an artifact that pre-authorizes later artifacts, with expiry) | AES-TX-1, AES-GV-4 | Rules + Workflow |
| P-6 | **Lot/unit traceability pattern** (administered product → lot → vial → drawdown → recall query) | AES-TX-3, AES-CM-9, AES-GV-10 | Domain service + Data Layer |
| P-7 | **Stored-value & recurring-billing ledger** (wallet, packages, memberships, gift cards, deposits) | AES-CM-3/4/5/6/11, AES-PT-4/5/6 | New domain service behind the persistence contract |
| P-8 | **Definition versioning on signed artifacts** (which version was signed; re-consent triggers) | AES-GV-12, all consents | Definition Repository |

P-1 through P-4 are the ones that matter first: they are what makes a cosmetic chart a cosmetic
chart, and **all four are reusable well outside aesthetics** (wound photos, procedure diagrams,
witnessed consents, and completion gates are family-practice needs too). That is the platform
test this lane should be judged on.

## Method (rerun recipe)

1. Corpus sweep — read every file in `Downloads\AestheticRecord`, classify `screen | decorative`,
   keep only substantive product surfaces (22 of 82 here). Decorative stock photography is noise;
   do not let file count masquerade as coverage.
2. For each screen, extract **forms and completion conditions**, not visual style.
3. Corroborate the form *library* against published inventories (AmSpa / EasyDocForms / Pabau /
   Aesthetic Record marketplace) — form names are public even where bodies are paywalled. Mark
   those rows `Evidence = library` so screenshot-backed rows stay distinguishable.
4. Score each row against the live PFO definition set (`ui/public/form-configs/*.json`, 196 today)
   — GAP / PARTIAL / ENH, naming the specific config for PARTIAL/ENH.
5. Separate **engine capability** from **definition work** before proposing anything.
6. COUNT CHECK: verify totals with `grep -c '^| AES-'`, not header arithmetic.

---

## Review Epilog — 2026-07-25

- v1 catalog complete: **120 forms** across 9 domains, from a 100%-reviewed substantive corpus
  (22 screens) plus the published med-spa form library.
- Disposition: 89 GAP · 27 PARTIAL · 4 ENH. PFO's three generic consent definitions and its
  clinical `dermatology-default` cover almost none of the cosmetic surface — the aesthetics
  requirement is treatment-specific, versioned, witness-capable consent plus photo-and-dose
  charting, neither of which exists today.
- The keystone rows are **AES-TX-1 (Good Faith Exam + Standing Order)**, **AES-TX-2 (injection
  mapping)**, **AES-PH-1 (standardized B&A photo sets)** and **AES-GV-1 (chart audit queue)** —
  everything else in the clinical half hangs off those four.
- Eight platform capabilities (P-1…P-8) gate ~70 of the rows; four of them (media field,
  body-map field, signature lifecycle, paperwork gate) are reusable outside aesthetics and should
  be argued on that basis.
- No rows dispositioned yet — all 120 are ☐ pending founder triage.
