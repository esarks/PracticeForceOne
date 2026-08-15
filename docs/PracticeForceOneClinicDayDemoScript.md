---
title: "PracticeForceOneClinicDayDemoScript"
---

# PracticeForceOne — "A Day at the Clinic" Demonstration Script

**Last reviewed: 2026-07-24**

**Purpose:** demonstrate that a physician and staff can run an entire patient visit on PracticeForceOne — Schedule → Appointment Search → Check-In → Eligibility → Patient Chart → Encounter → Checkout — as one continuous, production-quality workflow. This is the August clinic-meeting demo (distinct from the CF-13 platform demo, which proves the *configurability* underneath).

> **Status as of 2026-07-24:** Live build **1943**, gate 251/251 GREEN, CF-14 August demo path PASSES. Demo practice: Bay Area Cardiology. Provider: Dr. Steve Chen. 6 appointments seeded. Reset: `node bin/demo-setup.mjs`. Auth for programmatic calls: uat-harness@esarks.com (no MFA).

**Audience:** a practicing physician + front-desk/clinical staff seeing the product for the first time. Every step should feel obvious.

**Duration:** ~12 minutes. **Presenter role:** admin (sees all steps). **Base:** the deployed app; log in, select the demo practice.

**Restage-safe:** this script is navigation-based (no record IDs). After a restage, run the dictionary re-seed first (see *Pre-demo checklist*) so the schedule and dictionaries have data.

**Backing proof:** every step below is exercised by the `cf` characterization suite on every deploy — CF-14 walks this exact path (book→search→check-in→eligibility→chart→encounter→checkout+payment) and blocks any release that breaks it. So the demo is not a happy-path illusion; it is continuously verified.

---

## Pre-demo checklist (do once, before the room)

1. **Data present** — the demo practice has: providers, an availability template, a few of today's appointments, a patient with insurance.
   - **After a restage, the new practice has NO dictionaries** (Charge Master / Visit Types / Claim Statuses show empty — this is data, not a broken screen). **Fix it in one command:** `node bin/restage-recover.mjs [practiceId]` (idempotent; re-seeds from `bin/demo-seed-pack.json`). Use `--dry` first to preview. Then `bin\uat-characterize.ps1 cf` should read 16/16.
2. **One patient staged for the live visit** — e.g. *Casey Winters*, commercial insurance, here for a persistent cough. Have her registered but with **no medications yet** (so the med-promotion moment lands).
3. **Sidebar oriented** — the **Today** zone (Dashboard, Kanban, Check-In Desk, Checkout Desk) and the **Configurable Forms** zone are the two you'll use.

---

## The visit, step by step

### 1. Schedule (front desk) — *"Let's book Casey a visit."*
- Sidebar → **SchedulingCF** → **+ New Appointment**.
- Pick the provider and date → the **slot grid** shows open times from the availability engine → click a free slot; it fills the time.
- Choose the visit reason ("cough"), **Book Appointment**.
- *Point out:* the open-slot grid is real availability, not a free-text time field — the front desk can't double-book.

### 2. Appointment Search — *"Find her appointment."*
- Still on **SchedulingCF**, the search box filters the full appointment list (patient, provider, reason, status).
- *Point out:* one screen both books and finds — no separate lookup tool.

### 3. Check-In (front desk) — *"Casey's here."*
- Sidebar → **Today → Check-In Desk**. This is **today's schedule**.
- Open Casey's row → **✓ Ready for Rooming** (one click; the status changes).
- *The seamless moment:* click **Start Encounter →**. The encounter opens **already focused on Casey** — no re-searching. (This is the journey glue; the patient carries between screens automatically.)

### 4. Eligibility (at the desk) — *"Is she covered?"*
- Sidebar → **EligibilityCF** → **+ New** → run a **270** for Casey.
- The **Benefits (271)** tab shows copay / deductible / coinsurance parsed from the response.
- *Point out:* the front desk verifies coverage before the visit; if a payer has no electronic route, **Manual Verify** records a phone check. **Batch Refresh Stale** re-checks everyone overdue in one click.

### 5. Patient Chart (rooming / nurse) — *"Bring her back."*
- Sidebar → **Patient ChartCF** (or it's already carrying Casey). Demographics, problems, allergies, medications, insurance — the full chart across tabs.
- *Point out:* the allergy list here is what the eRx drug-safety screen checks against in the next step.

### 6. Encounter (provider) — *the clinical core.*
- Sidebar → **EncounterCF**, open Casey's encounter (carried from check-in).
- **Vitals** tab: enter vitals; **BMI computes** automatically.
- **Clinical Note** tab: type "diabetes" in the diagnosis search → it searches ICD-10 **by description** → pick the code; add it.
- **Medications** tab → **Order Medications (eRx)** → search *Lisinopril*, add to order, pick a pharmacy → **Send Order to Pharmacy**.
  - **The money moment:** the drug order flips to **Sent**, *and the medication immediately appears on the Medication List above as **Active** — no manual copying, no refresh.* Lisinopril, Active, today's start date, source ePrescription, linked to the order.
- **Sign Encounter** (provider-only button) → the note locks.
- *Point out:* Drug Orders = communication with the pharmacy; the Medication List = the patient's active therapy. One action, both records, correctly linked.

### 7. Checkout (front desk) — *"Collect her copay and send her home."*
- Sidebar → **Today → Checkout Desk** → open Casey.
- **✓ Complete Visit** → the visit closes.
- **Collect Payment** page → enter the copay, method → **Collect Payment**.
- *Close:* "That's a complete visit — scheduled, checked in, verified, charted, documented, prescribed, and paid — on one platform, one patient carried the whole way through."

---

## What to emphasize if asked

- **Continuity:** the patient carried automatically between check-in, chart, encounter, and checkout — no lane re-typed a name.
- **It's verified, not staged:** CF-14 runs this whole path on every deploy; a broken step blocks the release.
- **It's configurable underneath:** every one of these screens is a JSON definition on one runtime — new screens are configuration, not new code (that's the CF-13 platform demo, available if they want the "how").

## Known rough edges (be honest if it comes up)
- After a restage the demo practice needs its dictionaries re-seeded (schedule/fee-schedule) or screens look empty — that's data, not the software.
- `source_encounter` on an eRx-promoted med is a scoped follow-up (the order doesn't yet carry the encounter link); it doesn't affect the visit flow.

## Review Epilog — 2026-07-24

- Live build **1943** (gate 251/251 GREEN). CF-14 verifies this exact 7-step demo path on every deploy — the script is continuously backed by automation.
- Demo data updated: Bay Area Cardiology, Dr. Steve Chen, 6 seeded appointments. Reset command: `node bin/demo-setup.mjs`.
- Platform framing: PracticeForceOne is a **configurable healthcare app platform** — every step in this script runs on definition-driven CF runtime screens (SchedulingCF, Check-InCF, EligibilityCF, EncounterCF, CheckoutCF), not EHR-specific custom code.
- August 2026 clinic demo is TOP priority fleet-wide; this script is the primary rehearsal vehicle.
