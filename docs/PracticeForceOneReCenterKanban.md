---
title: "PracticeForceOneReCenterKanban"
---

# ReCenter Kanban — Why These Lanes

**Audience:** clinic leadership, and any agent about to change a lane.
**Scope:** the two practices of the ReCenter Medical organization —
**ReCenter Medical LLC** (`abdfaad9-…`) and **ReCenter Oasis LLC** (`bf0d53ab-…`).
**Status:** live and verified on screen, 2026-08-01. Author: AgentUI.

---

## 1. The one-sentence version

Both practices run the **same Kanban engine and the same code**; each renders a different board because
each **owns a different lane definition**, and the board is a projection of that definition through
`PracticeContext`. Nothing about ReCenter Oasis is coded anywhere. If you delete its definition, its
board goes blank — it does not fall back to a medical board.

```
Kanban engine (platform)
        ↓
lane catalog  engine_configs · type=kanban_card · key=lanes · practice=<id> · stage=prod
        ↓
PracticeContext (the practice the user is signed into)
        ↓
the board a clinician sees
```

---

## 2. Why the two boards differ at all

The two practices are different businesses that happen to share an organization, a building and a
patient population.

| | ReCenter Medical LLC | ReCenter Oasis LLC |
|---|---|---|
| Who pays | a payer, after adjudication | the patient, before treatment |
| What gates the visit | eligibility, referral, authorization | consent, photography, payment |
| What ends the visit | a signed note that supports a claim | a treatment note and posted inventory |
| What can go wrong afterwards | denial, appeal, A/R, patient balance | dissatisfaction, touch-up, follow-up |
| Revenue risk lives in | the claim lifecycle | the pre-treatment gate |

That last row is the whole design. **In a medical practice the money is at risk *after* the visit;
in a cash-pay aesthetics practice it is at risk *before* it.** A board should show the work where the
risk is, so Medical carries a long post-visit tail and Oasis carries a heavier pre-visit gate and
almost no tail.

---

## 3. ReCenter Medical LLC — 23 lanes

The full clinical-to-cash pipeline. Read top to bottom as the day.

### Front desk
| Lane | Why it exists |
|---|---|
| **Patient Needs Appointment** | An explicit request with no appointment yet — portal request, follow-up task, or a call. Work that is invisible until someone books it. |
| **Patient Scheduled** | Booked for the business date, not yet arrived. The arrival list. |
| **Review Registration** | A portal registration that a human must accept before a chart exists or is linked. The trust boundary between patient-entered data and the chart. |
| **Needs Pre Check In** | Booked, but the intake packet is not complete. Catches the paperwork *before* the patient is in the building. |
| **Insurance Exception** | Eligibility, referral, prior authorization, coverage or copay problem blocking rooming. **Medical-only:** the payer must be right before the visit or the claim fails later. |
| **Patient Arrived** | Marked arrived, waiting to be roomed. |
| **Patient Balance Needed** | An outstanding patient responsibility to collect. Sits with the front desk because that is who collects it. |

### Clinical
| Lane | Why it exists |
|---|---|
| **Ready For Rooming** | Checked in, waiting on an MA or nurse. |
| **Rooming / Intake In Progress** | Vitals, history, medications, allergies, chief complaint underway. |
| **Clinical Follow-Up** | Orders, results and follow-up tasks the practice owns after the visit. |

### Provider
| Lane | Why it exists |
|---|---|
| **Ready For Provider** | Rooming complete; the provider should start. The one lane a provider should be able to work from all day. |
| **Provider Encounter In Progress** | Open documentation. |
| **Provider Documentation Incomplete** | Notes or details missing *before* coding can begin. Separated from "in progress" because it is a different act: finishing, not doing. |
| **Ready To Sign Encounter** | Complete but unsigned. An unsigned note is not a legal record and cannot support a claim. |

### Billing — the post-visit tail
| Lane | Why it exists |
|---|---|
| **Ready For Coding** | Signed, awaiting codes. |
| **Ready To Claim** | Coded, claim not yet built. |
| **Claim Needs Scrub** | Built, failing validation before submission — cheaper to fix here than to be denied. |
| **Ready To Submit** | Clean, awaiting transmission. |
| **Payer Response Needed** | Submitted, awaiting adjudication. |
| **Denial / Appeal Needed** | Denied, needs a decision to appeal or write off. |
| **A/R Follow-Up** | Aged receivable requiring chase. |

### Cross-cutting
| Lane | Why it exists |
|---|---|
| **Blocked / Needs Review** | Anything with a blocker, regardless of stage. A single place to look when something is stuck. |
| **All Work** | Aggregate view. |

---

## 4. ReCenter Oasis LLC — 16 lanes

A cash-pay aesthetics practice. Same engine, different business.

### Before the chair — where the risk is
| Lane | Why it exists |
|---|---|
| **Patient Needs Appointment** | Consultation or treatment requested, not booked. |
| **Patient Scheduled** | Booked for the date. |
| **Review Registration** | Same trust boundary as Medical: patient-entered data must be accepted by a human. |
| **Needs Pre Check In** | Intake packet incomplete. Heavier consequence here — the packet carries the **safety screening** (pregnancy, blood thinners, isotretinoin, neuromuscular disorders), not just demographics. |
| **Consent Outstanding** | **Replaces Insurance Exception.** A cash-pay practice has no eligibility to verify; what it must have before treating is a signed treatment consent and a photography consent. Same position in the flow, entirely different obligation. |
| **Photography Due** | Standardised before-photographs are clinical evidence and the basis of every later comparison. If they are not taken before treatment they cannot be taken at all. This lane exists because that is irreversible. |
| **Payment Ready** | Payment authorised or card on file before the procedure. **In a medspa this is a clinical gate, not an administrative one** — treatment does not begin until it is satisfied. |

### The treatment
| Lane | Why it exists |
|---|---|
| **Procedure Ready** | All gates satisfied — consent, photographs, payment. The patient can go back. |
| **With Injector** | The provider-equivalent lane. Named for who actually does the work in this business. |
| **Procedure In Progress** | Treatment underway. |

### After the chair — a short tail
| Lane | Why it exists |
|---|---|
| **Treatment Notes Incomplete** | Product, lot, units and injection sites still to record. **Lot and units are the record that matters** — they drive adverse-event traceability and the next appointment's dosing. |
| **Ready to Sign** | Same legal rationale as Medical. |
| **Inventory To Post** | **Replaces Ready For Coding.** A self-pay practice does not code for a payer; it decrements product from stock. Neurotoxin and filler are perishable, expensive, lot-tracked inventory, and the visit is not financially complete until it is posted. |
| **Follow-Up Due** | Two-week check, touch-up window, next treatment cycle. In aesthetics this is retention, not just clinical care. |

### Cross-cutting
| Lane | Why it exists |
|---|---|
| **Blocked / Needs Review** · **All Work** | As Medical. |

---

## 5. What Oasis deliberately does NOT have

Seven lanes exist in the Medical catalog and are **absent by design** from Oasis:

`Ready To Claim` · `Claim Needs Scrub` · `Ready To Submit` · `Payer Response Needed` ·
`Denial / Appeal Needed` · `A/R Follow-Up` · `Patient Balance Needed`

Every one belongs to the claim lifecycle. A cash-pay practice collects **before** treatment, so there
is no claim to scrub, no payer to await, no denial to appeal and no receivable to age. Leaving them
on the board would invite a clinician to work a queue that can never fill.

This is enforced, not merely omitted. **A published lane catalog IS the practice's board:** lanes the
catalog does not name are hidden. Before that change (commit `fd7ef3d6b`) a catalog could only rename
and reorder, and all seven claims lanes still rendered on the Oasis board.

---

## 6. How resolution actually works

1. The board asks for `engine_configs`, `type=kanban_card`, `key=lanes`, scoped to the signed-in
   practice.
2. If a catalog exists it is authoritative: it sets each lane's title, short label, subtitle, role and
   order, may introduce lanes the engine has never heard of, and **hides every lane it does not name**.
3. If no catalog exists the practice gets **nothing** — not another practice's board. The
   practice-less retry that used to produce inherited boards was removed (`fe69aec99`).

Three consequences worth knowing before editing:

- **Deleting Oasis's catalog blanks its board.** That is the correct behaviour under the separation
  directive; absence resolves to absent.
- **Definitions publish without a deploy.** A lane rename is live on the next page load.
- **The catalog decides what is DISPLAYED, not what is COMPUTED.** See the next section.

---

## 7. The honest limitation — read this before demonstrating

**The lane identifiers are the engine's built-ins.** "Photography Due" is the lane `patient_arrived`
wearing a different title. "Payment Ready" is `ready_for_intake`. "Inventory To Post" is
`ready_for_coding`.

| Oasis lane | Underlying id | Therefore behaves like |
|---|---|---|
| Consent Outstanding | `insurance_exception` | an insurance problem |
| Photography Due | `patient_arrived` | arrival |
| Payment Ready | `ready_for_intake` | ready for rooming |
| Procedure Ready | `ready_to_encounter` | rooming in progress |
| With Injector | `ready_for_provider` | ready for provider |
| Inventory To Post | `ready_for_coding` | ready for coding |

Two things follow, and both are visible if you click:

1. **Lane membership is still decided by hardcoded status→lane maps.** Renaming a lane does not change
   what puts a card in it. A card reaches "Photography Due" because it reached *arrival*, not because a
   photograph is outstanding.
2. **The card faces inside those lanes are still Cardiology's** — 27 of 43 Oasis card definitions are
   byte-identical to Bay Area's. Today *Payment Ready* offers **Room**, *Inventory To Post* opens
   **Charge Review**, and *Photography Due* offers **Modify appointment** and no way to capture a photo.

**So the Oasis board reads like an aesthetics practice and still acts like a cardiology one.** Closing
it requires lane membership to become data (platform work) and the Oasis card actions to be authored
(AgentAesthetics). Until both land, demonstrate the board's *shape* and be careful what you click.

---

## 8. Evidence

Verified in a browser against production, not by reading definitions
(`tests/ui/board-per-practice-screen.mjs`, `tests/ui/practice-switch-screen.mjs`):

```
ReCenter Oasis LLC    16 lanes · 22 cards · ZERO claims lanes
ReCenter Medical LLC  23 lanes · 26 cards · claims lanes intact
switching practice in one page: 23 lanes/28 cards -> 16 lanes/22 cards, no navigation
```

The Medical assertion is deliberately inverted — it must **still** have its claims lanes — so that
over-hiding fails the test rather than resembling success.

---

## 9. Open items

| Item | Owner |
|---|---|
| Oasis card actions (Payment Ready must not offer "Room") | AgentAesthetics |
| Lane membership from definition, so a renamed lane behaves as named | platform / AgentARCH |
| `portal_user` work items appear on every practice's board in the org — the same 9 ids on Bay Area, Medical and Oasis, including a Bay Area patient and three probe accounts | AgentARCH |
| Board-vs-API lane reconciliation: 3 lanes disagree on both practices, because the UI derives cards client-side instead of rendering the server projection | AgentUI + platform |

---

## 10. Changing a lane

1. Edit `docs/platform/kanban-oasis.json` or `kanban-medical.json`.
2. Publish: `node bin/publish-recenter-lane-catalogs.mjs` (writes practice-scoped, verifies with a
   control pair against an untouched third practice).
3. Prove it on screen: `PFO_UI_ORIGIN=https://practiceforceone.net node tests/ui/board-per-practice-screen.mjs`.

Do not add a lane to make a board look fuller. The standard is the founder's:
**an honest smaller board is better than a visually complete but misleading one.**
