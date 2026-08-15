---
title: "PracticeForceOneDLPPortalFirstEntry"
---

# DLP — Portal-First Entry: the patient registers, and that is what creates the chart

**Status: LIVE and PROVEN** on build 2226, 2026-08-11. All 48 journeys run this way.

> **CORRECTION.** An earlier version of this page said the portal-first entry was BLOCKED by the
> platform. **That was wrong.** The founder said a patient can register through the portal and appear
> on the Kanban before a chart exists, and he was right. The cause was a missing field in the DLP
> harness, not a product gap. What that mistake looked like, and why it was drawn, is recorded at the
> bottom of this page rather than deleted.

---

## The journey

The flow a genuinely new patient takes — nobody at the clinic has typed their name:

| # | Step | Who does it | What exists afterwards |
|---|---|---|---|
| 1 | Completes the registration on the portal | the patient, at home | a portal account + an establishment request. **No chart.** |
| 2 | Confirms their email | the patient | the registration stops being provisional |
| 3 | **The registration appears on the Kanban** in `review_registration` | — | a card the front desk can act on, **still with no chart** |
| 4 | Reviews it and accepts | the front desk | **the chart — created FROM the registration** |
| 5 | Books, arrives, is roomed, is seen | the clinic | the visit proceeds |

Step 4 is the entry point, and it is a richer one than a typed chart: `create-patient` builds the
record from what the patient submitted and promotes their **insurances, medications, allergies and
insurance card images**. The chart begins its life complete.

## Proven on the live run

Measured across the 48 walkthroughs from the 2026-08-11 run:

- **44 journeys** record `chart CREATED FROM THE REGISTRATION`
- **4 journeys** stop at step 3 with **no chart at all** — DLP3 and DLP4 (Medical and Oasis
  registration review), DLP1A and DLP2A (the full-packet registrations). Their card sits in
  `review_registration` waiting for a person, which is the entire point of that lane.
- **45 PASS · 1 FAIL · 2 BLOCKED** · dual coverage **44 of 44 charts**

Chart coverage is now measured against the journeys that are *supposed* to have a chart. A journey
landing in `review_registration` having no patient is correct, not missing.

## What was actually wrong (and it was mine)

The board admits a `portal_user` card when **either** a relationship exists **or** an establishment
request ties to the practice — and that second branch matches on `requested_clinic_identifier`
(`WorkflowBoardRoutes.script:1028`).

The DLP harness **sent neither `clinicIdentifier` nor `clinicName`**. Every registration therefore
stored an empty identifier, tied to no practice, and could only ever surface once a chart existed to
create a relationship. **That is what every stub chart in the harness was working around** — each of
the three entry paths wrote `POST /api/patients` first so the registration would match something.

One field fixed it.

### Why the wrong conclusion was drawn

The evidence gathered was real, and the inference from it was not:

| Probed | Result | What it actually means |
|---|---|---|
| `GET /admin/portal-users` | omits chart-less accounts | that surface is relationship-scoped |
| `create-patient`, `resend-confirmation` | `404 "Portal user not found"` | same scope, same reason |
| `GET /portal-staff/patient-forms` | `400 "practiceId and patientId are required"` | that surface is patient-keyed |

Three surfaces that require a patient were read as "the workflow requires a patient". **The board —
the surface the founder actually named — was never probed.** It has its own, more permissive rule,
and it is the one that matters.

The lesson is the one this lane keeps relearning: an absence measured on the wrong surface is not an
absence. See also the `review_registration` cards that were reported invisible after being measured
in a polluted browser profile.

## Supporting changes

- `portalCreatesChart()` is the single front door; all three stub-chart writers are gone
- every registration carries `clinicIdentifier`, so the request ties to the practice
- `board.landedIn` matches a `portal_user` card by **account** when no chart exists yet
- `observeCdie` treats "registered, no chart" as pre-encounter rather than a journey that failed
- `portal.register` no longer creates a second account after the entry point already registered —
  it confirms the account is linked to the chart
