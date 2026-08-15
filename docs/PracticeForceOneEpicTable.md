---
title: "PracticeForceOneEpicTable"
---

# PracticeForceOneEpicTable — Epic (Epic Systems) Screen Benchmark

**Owner:** AgentEpic · **Created:** 2026-07-08 (founder directive: follow the AgentECW/AgentCerner path for Epic) · **Status:** 🔨 ANALYSIS IN PROGRESS — 711 screens collected in `Downloads\Epic` (677 desktop + 34 mobile); 13/711 reviewed (chsbuffalo inpatient-provider folder complete) → 9 EPI-* rows; `Downloads\Epic\review-ledger.tsv` + `epic-gap-notes.md` are the rerun-safe working files and rows land here at folder-completion milestones.

**Last reviewed: 2026-07-24** | Epic review: IN PROGRESS — 13/711 screens reviewed as of 2026-07-24 (chsbuffalo folder complete, 10 folders pending). Live build: 1943 | Gate: 251/251 GREEN | MR2–MR7 DELIVERED · MR8/MR9/MR10 ACTIVE

## Charter

Benchmark PracticeForceOne against Epic — desktop **Hyperspace/Hyperdrive** with
**EpicCare Ambulatory** (clinic visits, In Basket), **Cadence** (scheduling),
**Prelude** (registration), **Resolute** (billing), **ASAP** (ED), **EpicCare
Link** (community-provider portal), the **MyChart** patient portal, and the
**Haiku/Canto/Rover/Bedside** mobile family — using the collected screen imagery.
Every **gap** (Epic has it, PFO doesn't) and **enhancement** (PFO has it, but the
Epic screen shows a materially better treatment) becomes one accountable row, same
style as [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>) /
[PracticeForceOneCernerTable](<PracticeForceOneCernerTable.md>) /
[PracticeForceOneMR4Table](<PracticeForceOneMR4Table.md>).

## Evidence corpus + review coverage

`C:\Users\ptm\Downloads\Epic` — 677 desktop + 34 mobile screenshots (screenshots
only, per founder); `INDEX.md` maps each source folder to its origin PDF/URL;
filenames encode `<source>-p<pdf-page>-<seq>.png` so every row traces to a page.
Epic's own manuals are UserWeb-gated, so the corpus comes from health systems'
public training PDFs — richest: Methodist Le Bonheur's Epic "Day in the Life" +
User Settings Lab, the Packard Epic Registration Handbook, and 6 hospital
MyChart guides.

| Source folder | Screens | Review state |
|---|---|---|
| packard-registration-handbook | 210 | ⏳ pending (Prelude/Cadence registration end-to-end: lookup/create, demographics, guarantor, coverages, RTE eligibility, hospital accounts, work queues) |
| mychart-patient-guides | 173 | ⏳ pending (patient portal: enrollment, e-check-in, results, messaging, refills, proxy, billing, questionnaires, video visits — 6 org editions) |
| mlh-ambulatory | 155 | ⏳ pending (EpicCare Ambulatory: schedule, rooming, office/procedure/prenatal/specialty visits, immunizations, POC testing, LOS coding, clinic-manager day) |
| mlh-user-settings | 28 | ⏳ pending (provider personalization: In Basket QuickActions, chart-review filters, SmartPhrases, preference lists) |
| upmc-epiccare-link + prhc-epiccare-link-qsg | 29 | ⏳ pending (community-provider portal: In Basket, referral entry/status, appointments, facesheets) |
| uw-dbpeds-epic-journey | 18 | ⏳ pending (ambulatory provider journey: visit navigator, documentation, orders, letters) |
| kansas-ed-provider-asap-qsg + unc-ed-asap-workflow + mlh-emergency | 23 | ⏳ pending (ASAP ED: Track Board, assign-me, triage, notes, dispo, charge review) |
| chsbuffalo-medicine-provider-quickguides | 13 | ✅ REVIEWED (storyboard+Summary widgets, BPA cards, order lifecycle, NoteWriter, problem-list model, med rec, discharge navigator, Chart Review) |
| riverside-amb-upgrade-2018 | 9 | ⏳ pending (ambulatory version-upgrade deltas) |
| haiku-canto-guides + siumed + multicare + umassmed | 15 | ⏳ pending (Haiku mobile quick start; inpatient practice; In Basket personalization) |
| mobile | 34 | ⏳ pending (app-store: MyChart 20, Bedside 4, Rover 3, Haiku 1, Authenticator 2, Revor 3, Ukiah 1) |

Known corpus thin spots (see `INDEX.md` dead-ends): Resolute billing screens are
scarce in public sources; epic1.org ED/billing PDFs time out (retry later);
Cadence deep scheduling (Snapboard, templates) is gated — partial coverage via
packard + mlh-ambulatory scheduling chapters.

## Gap & Enhancement Ledger

Row IDs: `EPI-<domain>-<n>`. Status ☐ = proposed (awaiting founder disposition ⏳).
Sizes S/M/L. Full field detail per row lives in `Downloads\Epic\epic-gap-notes.md`
(same order); Evidence = source folder (see filename page refs in `review-ledger.tsv`).
Rows are added at folder-completion milestones as the every-field review proceeds.

### EPI-GL — Global chrome & platform

| ID | Epic screen/feature | Evidence | What Epic shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|
| EPI-GL-1 | Storyboard context rail + Summary widgets | chsbuffalo | Persistent left rail on every chart screen: code status, isolation, allergies, flagged BMI, CrCl, new-results count, active-med class counts, registries, HCC score; Summary widgets: vitals sparklines, I/O net graph, 72h lab grid, admission/discharge checklists w/ Not-Completed + overdue quality measures | basic patient header | GAP | patient context rail + configurable summary widgets w/ completion checklists (CF-adjacent) | L | ☐ |

### EPI-CL — Clinical / EpicCare Ambulatory

| ID | Epic screen/feature | Evidence | What Epic shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|
| EPI-CL-1 | BestPractice Advisory card | chsbuffalo | Inline CDS suggestion (tobacco cessation) w/ Add / Do Not Add + structured acknowledge-reason buttons captured on decline | no CDS advisory surface | GAP | advisory card pattern w/ accept/decline + coded ack reasons | M | ☐ |
| EPI-CL-2 | Order/med lifecycle actions | chsbuffalo | Orders activity: Expiring Meds group w/ per-row Renew/Let Expire/Modify/Hold/Discontinue + live countdown; Signed&Held/Cosign/Future Outpatient tabs; Manage Orders sidebar cart shows pending discontinues before Sign | eRx exists, no lifecycle states | GAP | med/order lifecycle actions (hold/expire/renew/cosign) + pending-changes cart on sign | L | ☐ |
| EPI-CL-3 | NoteWriter exam grid | chsbuffalo | Per-system checkbox grid (green normal chips vs abnormal detail fields) live-generates the prose note beside it; ROS/PE chips; SmartText insert | free-text SOAP + dynamic forms | GAP | structured exam grid that composes note text — prime ConfigurableForms collab candidate | L | ☐ |
| EPI-CL-4 | Problem List lifecycle | chsbuffalo | Hospital vs Non-Hospital sections, Principal-dx marker, Present-on-Admission capture, per-problem overview note, priority sort, drug-disease interaction check, multidisciplinary care-plan rows, Mark-as-Reviewed audit | flat problem list | GAP | problem-list lifecycle model (POA, principal, reviewed-state, encounter vs chronic split) | M | ☐ |
| EPI-CL-5 | Med reconciliation (admit + discharge) | chsbuffalo | 2-step first-class surface: admission Order/Don't-Order per home med w/ provenance + unreconciled finder; discharge 2-column home-vs-inpatient w/ continue/stop/resume, change highlights, AVS STOP-taking/Resume preview, reconcile-complete gate | med list only | GAP | admission/discharge med-rec workflow w/ AVS output | L | ☐ |
| EPI-CL-6 | Note↔order linkage | chsbuffalo | Consult note editor forces picking the associated consult order; procedures NoteWriter w/ per-procedure quick buttons + performing/authorizing provider | notes free-standing | GAP | note↔order linkage + procedure note templates | M | ☐ |
| EPI-CL-7 | Discharge navigator | chsbuffalo | Staged review checklist (24-hr results, unresulted labs, care gaps, follow-up appointments) before discharge orders/instructions; Readmit/Deceased variants | no discharge flow | GAP | staged discharge navigator w/ unresulted-work surfacing | M | ☐ |
| EPI-CL-8 | Chart Review browser | chsbuffalo | 14 data-type tabs w/ saved filter chips, Side-by-Side compare, Synopsis + Lifetime views, encounter rows carry CSN/Open-Closed | per-page lists | GAP | unified chart-review browser w/ compare + filters (CF-adjacent column prefs) | L | ☐ |

### EPI-SC — Scheduling / Cadence

| ID | Epic screen/feature | Evidence | What Epic shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|

### EPI-RG — Registration / Prelude

| ID | Epic screen/feature | Evidence | What Epic shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|

### EPI-BI — Billing / Resolute & estimates

| ID | Epic screen/feature | Evidence | What Epic shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|

### EPI-RF — Referrals & EpicCare Link

| ID | Epic screen/feature | Evidence | What Epic shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|

### EPI-IB — In Basket & communication

| ID | Epic screen/feature | Evidence | What Epic shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|

### EPI-ED — Emergency / ASAP

| ID | Epic screen/feature | Evidence | What Epic shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|

### EPI-PT — MyChart patient portal

| ID | Epic screen/feature | Evidence | What Epic shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|

### EPI-MB — Mobile (Haiku/Canto/Rover/Bedside)

| ID | Epic screen/feature | Evidence | What Epic shows | PFO today | G/E | Proposed PFO change | Size | Status |
|---|---|---|---|---|---|---|---|---|

## Method (rerun recipe)

Same loop as the ECW/Cerner lanes, from `C:\Users\ptm\Downloads\Epic`:
`./pending-batch.sh 8` → parallel-Read the batch → classify `screen|deleted`
(`rm` non-screens) → append TSV row `file  verdict  domain  epic_screen  note` →
Grep `epic-gap-notes.md` for dups before appending
`- [domain] Epic: … | PFO: … | GAP/ENH: …` → at folder completion, convert notes
to EPI-* rows here. COUNT CHECK: verify row totals with `grep -c '^| EPI-'`, not
header arithmetic (Cerner-lane trap).

---

## Review Epilog — 2026-07-24

- Epic review is IN PROGRESS: 13/711 screens reviewed as of 2026-07-24 (chsbuffalo folder complete; 10 folders pending).
- 9 EPI-* rows live in the table; the largest pending folders are packard-registration-handbook (210 screens) and mychart-patient-guides (173 screens).
- Live build 1943; gate 251/251 GREEN; MR2–MR7 delivered; MR8/MR9/MR10 active.
- No rows modified in this pass; AgentEpic adds rows at folder-completion milestones per the method above.
