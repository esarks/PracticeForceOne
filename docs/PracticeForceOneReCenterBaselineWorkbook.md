---
title: "PracticeForceOneReCenterBaselineWorkbook"
---

# ReCenter Baseline Workbook — executable instrument (v1, 2026-08-15)

**Companion to [PracticeForceOneCommercialStrategyCurrent](PracticeForceOneCommercialStrategyCurrent.html)
(authority) and [ReCenterBaselineProtocol](PracticeForceOneReCenterBaselineProtocol.html) (design).**

**This is the thing you carry into the clinic.** Print it, or copy each card into a sheet. Fill the
blanks. Do not redesign it while measuring.

---

# READ THIS BEFORE MEASURING ANYTHING

**Seven rules. Each exists because breaking it destroys the baseline.**

1. **OBSERVE — DO NOT SURVEY.** Ask how long check-in takes → you get an estimate. Watch ten with a
   stopwatch → you get a baseline. **Estimates are not admissible here.**
2. **DO NOT IMPROVE ANYTHING WHILE MEASURING.** The instinct to fix what you see will destroy the
   comparison. **Write it down, leave it alone.**
3. **SEPARATE TOUCH TIME FROM LATENCY.** Encounter→signed-note may be 4 hours elapsed and 7 minutes of
   work. **They measure different problems and PFO may fix only one.** Record both or the result is
   uninterpretable.
4. **COUNT SPREADSHEETS AND PAPER AS SYSTEMS.** A sticky note is a system. A second browser tab is a
   surface. **The count is honest or it is worthless.**
5. **RECORD N AND DATE ON EVERY ROW.** A number without a sample size is an anecdote.
6. **WRITE THE NARRATIVE.** *"The biller keeps a sticky note of claims to re-check"* is evidence, and
   it is the kind that survives into a sales conversation. Numbers alone do not.
7. **THE OBSERVER EFFECT IS REAL.** People work differently when watched. **Note it in
   limitations — do not pretend it away.** Where possible, measure from timestamps instead.

**If you cannot reach the target N, record the N you got.** A baseline of 6 observations honestly
labelled beats a target of 20 quietly abandoned.

---

# THE CARD TEMPLATE

Every metric uses this. Blanks are for the clinic, not for me.

```
METRIC ID:            M__
NAME:
PRACTICE:             Medical / OASIS / Home Health   <- REQUIRED (Revision 2)
ROLE(S):              Front Desk / MA / Provider / Practitioner / Biller / Manager
WORKFLOW:
OPERATIONAL DEFINITION:      (so a second observer measures the same thing)
START EVENT:                 (exact, observable)
STOP EVENT:                  (exact, observable)
ACTIVE TOUCH TIME:           ____ (person-minutes actually worked)
ELAPSED / QUEUE TIME:        ____ (wall-clock start->stop)
DATA SOURCE:
OBSERVER:
TARGET SAMPLE SIZE:          ____     ACTUAL N: ____
SAMPLE DATES:                ____ to ____
RAW OBSERVATIONS:            (attach; do not summarise only)
EXCLUSIONS + REASON:
BASELINE RESULT:
POST-PFO RESULT:
% CHANGE:
CONFIDENCE / LIMITATIONS:
NARRATIVE OBSERVATION:
```

---

# WEEK 1 — WHAT TO DO FIRST

**Do these three before anything else. They are the ones that vanish.**

| Order | Do | Why first |
|---|---|---|
| **1** | **M17 Management Visibility** (§ below) | **Must be captured before staff know PFO is being evaluated** — awareness changes the answer permanently |
| **2** | **M04 artefact census** — photograph every spreadsheet, sticky note, paper log, whiteboard | Physical evidence disappears silently as PFO rolls out |
| **3** | **M14 expired-product write-off** — pull the last full quarter now | Historical financial data gets overwritten/archived |

Everything else can start in week 2.

---

# THE METRICS

**Thresholds are `PROVISIONAL` — not success criteria.** They are hypotheses to be replaced by the
founder and clinic owners *after* seeing real numbers.

## Group A — Fragmentation (one-time or short census)

| ID | Metric | Role | Start → Stop | Source | Target N | Touch/Latency | Provisional |
|---|---|---|---|---|---|---|---|
| **M01** | Systems touched per patient journey | all | patient arrives → journey closed | direct observation, tally distinct apps/sheets/paper | 10 journeys | count only | −2 systems |
| **M02** | Screens/worklists checked per role per day | 5 roles | shift start → shift end | shadow each role | 3 days × 5 roles | count only | −30% |
| **M03** | Manual handoffs per journey | all | as M01 | observation — count each person-to-person transfer | 10 journeys | count only | −2 |
| **M04** | Paper / sticky-note / spreadsheet artefacts | all | — | **physical census + photographs** | one-time | count only | −50% |

**M01 note:** a "system" is anything a human must open, read or write to advance the patient —
including a spreadsheet, a paper log, a phone call to another staff member, or a second tab.

## Group B — Front desk

| ID | Metric | Start → Stop | Source | Target N | Record |
|---|---|---|---|---|---|
| **M05** | Check-in time | patient reaches desk → marked ready for provider | stopwatch | 20 | **touch + elapsed** |
| **M06** | Eligibility handling effort | exception surfaces → resolved or parked | observation + touch count | 10 exceptions | **touch + elapsed + # touches** |

## Group C — Clinical

| ID | Metric | Start → Stop | Source | Target N | Record |
|---|---|---|---|---|---|
| **M07** | Encounter preparation time | provider opens patient → begins encounter | observation | 10 | touch |
| **M08** | Provider documentation time | documentation begins → documentation complete | observation | 10 | touch |
| **M09** | **Encounter → signed note** | encounter marked complete → note signed | **timestamps (system)** | 30 days | **touch + elapsed — the gap is the finding** |

**M09 is the flagship latency metric.** Capture the current-state distribution now; PFO can measure it
going forward, so the "before" is the perishable half.

## Group D — Revenue cycle

| ID | Metric | Start → Stop | Source | Target N | Record |
|---|---|---|---|---|---|
| **M10** | Signed note → charge / clean claim | note signed → claim submitted clean | timestamps + biller log | 30 days | **touch + elapsed** |
| **M11** | Claim exception handling effort | exception appears → resolved | biller observation | 20 exceptions | **touch + # touches + # surfaces** |
| **M12** | Patient payment reconciliation effort | daily reconciliation start → end | observation | 2 weeks | touch/day |

**M11 note:** count **how many places the biller must look** to resolve one exception. That number is
the direct test of the "work vs modules" hypothesis.

## Group E — Commerce / inventory

| ID | Metric | Start → Stop | Source | Target N | Record |
|---|---|---|---|---|---|
| **M13** | Inventory reconciliation effort + discrepancy rate | count begins → reconciled | count-day observation | 1 cycle | touch + discrepancy % |
| **M14** | **Expired product loss** | — | **$ written off, last full quarter** | 1 quarter | $ |
| **M15** | Supplement / resupply workflow effort | order initiated → fulfilled | observation | 10 orders | touch + elapsed |
| **M16** | Recall workflow effort + conversion | recall list generated → patient booked | log review | 1 cycle | touch + conversion % |

---

# M17 — MANAGEMENT VISIBILITY *(the most important measurement here)*

**This tests operating transparency rather than features. It is the only metric that directly tests
the surviving commercial thesis.**

### Procedure — run it exactly, twice (before and after)

**Step 1 — Ask, cold.** Ask the owner/manager, without warning and without access to a screen:
> *"List everything currently overdue, blocked, waiting or at risk that requires staff action."*

**Step 2 — Freeze it.** Write it down, timestamp it, both parties initial. **No additions after this
point.**

**Step 3 — Audit independently.** A different person walks every work source: EHR queues, claim
status, unsigned notes, lab results unreviewed, refill requests, referrals, patient balances,
inventory expiry, recall lists, messages, paper/spreadsheets.

**Step 4 — Establish ground truth.** The set of **actually actionable** outstanding items at time T.
*(Exclude anything not genuinely requiring action — record the exclusion rule you used.)*

**Step 5 — Compare.**

```
MANAGEMENT VISIBILITY RECALL = items correctly known to management / actual actionable items
HIDDEN WORK COUNT            = actual actionable items − correctly known items
HIGH-RISK HIDDEN WORK        = hidden items involving:
                                 clinical safety · patient delay · revenue ·
                                 compliance · inventory expiration · missed follow-up
```

### Recording sheet

```
DATE / TIME T:                    ____________
MANAGER LIST (frozen, verbatim):  ____________
AUDITOR:                          ____________
WORK SOURCES WALKED:              ____________
GROUND-TRUTH ITEM COUNT:          ____
CORRECTLY KNOWN:                  ____
RECALL:                           ____%
HIDDEN WORK COUNT:                ____
HIGH-RISK HIDDEN ITEMS:           ____  (list each + category)
EXCLUSION RULE USED:              ____________
NARRATIVE:                        ____________
```

**Target evidence form:**
> *"Before PFO, management could readily identify __ of __ actionable exceptions (__%). After PFO,
> __ of __ (__%). High-risk hidden items fell from __ to __."*

**Those blanks stay blank until measured. Do not fabricate them.**

---

# ROLE SUMMARY SHEET — fill after all metrics

**PFO may improve one role and harm another. The aggregate must not hide it.**

| Role | Metrics | Baseline summary | Post-PFO | Better / worse / unchanged |
|---|---|---|---|---|
| **Front Desk** | M01 M02 M03 M05 M06 M12 | | | |
| **MA / Clinical Assistant** | M01 M02 M03 M07 M15 | | | |
| **Provider** | M02 M07 M08 M09 | | | |
| **Biller** | M02 M10 M11 M12 | | | |
| **Owner / Manager** | **M17** M04 M13 M14 M16 | | | |

**If any role gets worse, that is a finding to report, not to bury.** A platform that helps the owner
by taxing the MA is a known failure mode of workflow software, and discovering it in our own clinic is
far cheaper than discovering it at customer #2.

---

# SIGN-OFF

```
BASELINE PERIOD:        ____ to ____
OBSERVER(S):            ____________
METRICS COMPLETED:      ____ of 17
METRICS NOT CAPTURED:   ____________  (and why — leave honest gaps, not blanks)
PFO STATE DURING BASELINE: ____________  (which parts were already live — this matters)
FOUNDER SIGN-OFF:       ____________
```

**Last line, and it is the one that determines whether any of this is usable:** record **which parts
of PFO were already live during the baseline.** ReCenter is already running PFO in places. **A
"before" that already contains PFO is not a before**, and every metric must state honestly which
state it captured.

*— AgentFuture, 2026-08-15. v1 instrument. Provisional thresholds are hypotheses, not success
criteria. No result appears in this document because nothing has been measured.*
