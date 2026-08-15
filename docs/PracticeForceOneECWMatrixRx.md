---
title: "PracticeForceOneECWMatrixRx"
---

# ECW Screen & Field Inventory — Rx / Pharmacy (sig builder, send, formulary, reconciliation)

Part of the [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>) deep-dive
(founder directive: capture **every field and every feature** seen in eCW vs PFO, and
plan where each lands in PFO). Hierarchy: **domain (this page) → screen (each `###`
entry) → sub-screens/tabs & fields (the Screen & fields bullet)**. Per entry:

- **Screen & fields (eCW)** — the fields, tabs, buttons, and navigation components observed
- **PFO today** — current PracticeForceOne state
- **Gap/Enh** — the finding and proposed change
- **PFO implementation** — where those fields will be implemented (legend on the master page: Extend / New / CF binding / Mock-seam / Server / Chrome / Autopilot / User-preferences / Specialty wave)

Trace any entry to its screenshot files via `review-ledger.tsv` in
`C:\Users\ptm\Downloads\ecw` (grep the screen name). Corpus: 1,778 screens,
2,078 images ledgered, 100% reviewed. Updated 2026-07-11 (inventory + implementation-plan view).

---

**Last reviewed: 2026-07-24** | Live build: 1943 | Gate: 251/251 GREEN | MR2–MR7 DELIVERED · MR8/MR9/MR10 ACTIVE

## Completion Status — as of 2026-07-24 (current live build)

- **Assessment & specification: ✅ COMPLETE.** All 9 findings on this page are fully inventoried (every field, tab, and navigation component + a PFO implementation target).
- **Implementation: 🟢 0 live/done · 🟡 9 working screen (build-slice or demo surface) · ⏸️ 0 deferred · ⬜ 0 not started (of 9).** Sequence follows the 24-theme shortlist in [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>); fleet directive in `AGENTS.md`.

> **Reading the numbers.** 🟢 = the deep every-field finding is substantially delivered. 🟡 = a **live, working screen exists** for this finding — either a real build-slice or one of AgentCF's live configurable screens (current live build) that covers this eCW screen at **demo depth** (deep field-by-field parity still open). The 🟡 demo-surface mapping is AgentECW's first pass from the AgentCF sheet; CF is confirming depth per row. So 🟡 means "you can click it today, not that it's finished."

Legend: 🟢 Live/Done (deep parity) · 🟡 Working screen — build-slice or demo surface (parity pending) · ⏸️ Deferred (post-demo) · ⬜ Not started.

| ID | Screen | Status |
|---|---|---|
| ECW-RX-1 | Rx workflows | 🟡 Done |
| ECW-RX-2 | Rx edit dialog | 🟡 Done |
| ECW-RX-3 | Pharmacies directory | 🟡 Done |
| ECW-RX-4 | RX EDIT sig builder | 🟡 Done |
| ECW-RX-5 | COMPOUND RX + MED RECONCILIATION | 🟡 Done |
| ECW-RX-6 | FORMULARY + PRICE transparency at prescribing | 🟡 Done |
| ECW-RX-7 | MEDICATION SUMMARY actions | 🟡 Done |
| ECW-RX-8 | top-bar E | 🟡 Done |
| ECW-RX-9 | SEND RX transmission window | 🟡 Done |

**Rollup: 0 live · 9 working screen · 0 deferred · 0 not started (of 9).**

*Regenerated 2026-07-21 from the unified status across all `MasterSchedule.xlsx` sheets + AgentECW's surface→ECW crosswalk. Documentation-only lane (AgentECW).*

---

### ECW-RX-1 — Rx workflows

- **Screen & fields (eCW):** Rx workflows: Send Rx choice fax/print/ePrescribe; real-time Rx ELIGIBILITY (benefit plan, retail vs mail-order); Rx Education handouts; interactions + allergy gates orange/red
- **PFO today:** mock eRx
- **Gap (mock-seam):** Rx benefit-eligibility surface + education + multi-channel send in the mock contract
- **PFO implementation:** Mock-seam — eRx contract: benefit eligibility, education handouts, multi-channel send

### ECW-RX-2 — Rx edit dialog

- **Screen & fields (eCW):** Rx edit dialog: SIG BUILDER from per-drug pick-lists (strength/take/route/frequency/duration/dispense/refills), live sig preview line, DOSAGE CALCULATOR (weight-based), add-as-favorite, custom dosages toggle
- **PFO today:** no Rx entry UI
- **Gap:** structured sig builder for the Rx surface (pairs w/ mock eRx seam)
- **PFO implementation:** Mock-seam — Rx edit dialog: sig builder pick-lists, dosage calculator, favorites

### ECW-RX-3 — Pharmacies directory

- **Screen & fields (eCW):** Pharmacies directory: admin-managed pharmacy list w/ E (electronic/eRx-capable) and M (mail-order) flags per pharmacy, lookup by name/city, address/suite/tel/fax, New/Update/Delete
- **PFO today:** pharmacies.html exists
- **Enh:** add eRx-capable + mail-order flags and city lookup to pharmacy records (pairs w/ mock eRx seam)
- **PFO implementation:** Extend `pharmacies.html` — eRx-capable/mail-order flags + city lookup

### ECW-RX-4 — RX EDIT sig builder

- **Screen & fields (eCW):** RX EDIT sig builder (extends Rx-workflows note 34, mock-seam): per-drug columns w/ pick-lists for TAKE / ROUTE / FREQUENCY / DURATION / DISPENSE / REFILL COUNTS + TAPER schedule button, Additional Instructions + PRN + D.A.W. (dispense-as-written), DIAGNOSIS ASSOCIATION dropdown, pharmacy pick + SPLIT (part local/part mail-order), status Start + start/stop dates, prescriber SOURCE, ADD TO FAVORITES; dual notes = NOTES TO PHARMACIST (transmitted, no DAW/coupon info) vs internal NOTES (never sent, still renders in the progress note); combined-sig 1000-char guard; order sends per-type via Print/Fax/ePrescribe (Rx) and Print/Fax Labs/DI/Procedure w/ ORDER DETAILS + locked-order guard; order defaults popup sets BILL TO PHYSICIAN per labs/DI + CC RESULTS TO provider
- **PFO today:** mock eRx has none of the sig structure
- **Gap (mock-seam):** structured sig contract + dual-notes + split-fill
- **PFO implementation:** Mock-seam — structured sig contract (take/route/freq/duration/dispense/refills, taper, PRN, DAW, dual notes, split-fill)

### ECW-RX-5 — COMPOUND RX + MED RECONCILIATION

- **Screen & fields (eCW):** COMPOUND RX + MED RECONCILIATION (mock-seam): CompoundRx type w/ multi-ingredient formulas (static ingredient quantities — dispense qty LOCKED, "create a new compound to change"), compound favorite w/ full sig snapshot, DOSAGE CALCULATOR button, show-obsolete-drugs filter; MEDICATION RECONCILIATION screen = Current Medication vs PAST RX HISTORY vs EXTERNAL RX HISTORY vs UNRECONCILED PAST MEDS tabs, per-med status buttons T/N/U/D (Taking / Not-taking / Unknown / Discontinued) + stop date + notes + prescriber, MARK-ALL-AS + APPLY STATUS FROM PRIOR VISIT, compound hover shows full ingredient list; Medication Summary panel GROUPS BY medication/status
- **PFO today:** flat med list
- **Gap (mock-seam):** reconciliation statuses + external-history merge + compounds
- **PFO implementation:** Mock-seam — compound Rx formulas + med-reconciliation statuses + external-history merge

### ECW-RX-6 — FORMULARY + PRICE transparency at prescribing

- **Screen & fields (eCW):** FORMULARY + PRICE transparency at prescribing (mock-seam): the Add-New-Rx dosage grid shows per-strength FORMULARY SMILEYS (red=not covered, orange/yellow=covered on formulary, GREEN=preferred; ?=unknown — legend tooltip), AWP $ column per strength, drug-level $/DAY, and a GENERIC EQUIVALENT suggestion w/ its $/day; allergy-block overrides REQUIRE a CODED OVERRIDE REASON, and interaction rows support per-row SEVERITY ADJUST (major/moderate/minor w/ reset + Logs) + notes/timestamp/action
- **PFO today:** no formulary/pricing signal
- **Gap (mock-seam):** coverage + cost surfaces in the ordering grid (medication-adherence lever)
- **PFO implementation:** Mock-seam — formulary smileys + AWP/$-per-day + generic suggestion in ordering grid; coded allergy-override reasons

### ECW-RX-7 — MEDICATION SUMMARY actions

- **Screen & fields (eCW):** MEDICATION SUMMARY actions (enriches manage-orders notes): per-visit medication bands pivot by DATE / MEDICATION / PROVIDER / ASSESSMENT + TIMELINE Gantt view (per-med bars, zoom 1m-All, status glyphs, exclude-by-T/NT/D/U); band-level PERFORM ACTIONS = CONTINUE ALL / REFILL ALL / Refill-All-30-days / 90-days, per-med chips C(ontinue)/R(efill)/30/90/S(top); user settings map the 30/90 chips to default refill counts + SHOW FORMULARY STATUS toggle; weight-banded biologics list as per-kg entries (Zolgensma 3.6-4.0kg...); meds w/o valid NDC warn at save ("pharmacy may not dispense... will drop to fax — choose an equivalent")
- **PFO today:** no refill workflow
- **Gap (mock-seam):** one-click continue/refill actions + med timeline
- **PFO implementation:** Med timeline — C/R/30/90/S refill chips + continue-all actions (user-default refill counts)

### ECW-RX-8 — top-bar E

- **Screen & fields (eCW):** top-bar E (Rx events) jellybean expands to a per-status submenu with live counts — Refill Rx, Change Rx, Cancel Rx, Error/Failed Rx, Fill Notification — each row jumps to that Rx work queue
- **PFO today:** no Rx-transaction event counters
- **Gap:** Rx event jellybean w/ per-status counts (refill requests, change requests, cancel acks, transmission errors, fill notifications) as mock-seam over the eRx transport
- **PFO implementation:** Chrome — Rx event counters (refill/change/cancel/error/fill queues) over mock eRx transport

### ECW-RX-9 — SEND RX transmission window

- **Screen & fields (eCW):** SEND RX transmission window (mock-seam, extends note 34): tabs Patient Orders / For Patients; per-Rx row = MODE picker (eRx/Print/Fax), STATUS (Attention Required), controlled-substance C column, full sig line, send-time D.A.W. checkbox, per-Rx pharmacy pick, Notes+Identifiers (SP, DEA#, FILL MESSAGE TYPE); sections split NEW RX vs EXISTING-AND-REFILL each w/ SUPERVISING PROVIDER, Send To default pharmacy + set-as-primary, PROVIDER DEA# picker + SEND NADEAN, CERTIFICATE TO PRESCRIBE No., STATE CONTROLLED RX No., REQUESTED FILL MESSAGE TYPES, ASSIGN FUTURE REQUESTS FROM PHARMACY TO + Apply-to-Rx(0/4), 210-char Notes to Pharmacist, interaction-severity review banner, Send (0 out of 6) counter, patient Height/Weight display for peds dosing; SEND TO picker spans PHARMACIES / Facilities / Providers / Attorneys / Employers / Case Managers / Labs-DI, w/ LOCAL PHARMACY DATABASE (~70k rows: NCPDPID, E/C/M capability cols, service levels NewRx/RefillRx..., addr/phone/fax) + CLOUD PHARMACY DATABASE (Surescripts source, filters E-Prescribing/Fax Only/Mail Order, BULK IMPORT + Import-to-local + LINK/UNLINK) and a controlled-substance config pointer (state-specific controlled drugs menu)
- **PFO today:** mock eRx single send
- **Gap (mock-seam):** transmission-mode + credential fields + dual pharmacy directory in the mock contract
- **PFO implementation:** Mock-seam — Send Rx window: per-Rx mode, controlled-substance credentials (DEA/NADEAN), dual local+cloud pharmacy directory

---

## Review Epilog — 2026-07-24

- Live build updated to 1943; gate 251/251 GREEN; MR2–MR7 delivered, MR8/MR9/MR10 active.
- No 🟢 live rows in this domain; all 9 remain at 🟡 working-screen status (eRx remains mock-seam by design).
- Platform-first principle applies: the mock-seam contract is the correct pattern until a live Surescripts integration is warranted.
- No individual parity rows updated; status regeneration is AgentECW's lane on MasterSchedule sync.

