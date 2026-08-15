---
title: "PracticeForceOneDLPWalkthroughs"
---

# DLP Deep-Dive Walkthroughs — the index

> ### CURRENT DLP CORPUS — BUILD 2254 `ac440f629`
>
> **86 journeys · 82 PASS · 3 BLOCKED · 1 FAIL** · run 2026-08-15T18:43:12.280Z
>
> The serving build was verified **unmoved before, during and after** the run, so every page below
> describes ONE artifact rather than several.
>
> **Not-PASS verdicts:**
> `BLOCKED` **DLP7** — 1 of 19 step verbs are not implemented in this engine yet
> `FAIL` **DLP4J** — 1 step(s) failed
> `BLOCKED` **DLP8** — 1 of 16 step verbs are not implemented in this engine yet
> `BLOCKED` **PROD-OASIS-01** — 3 of 15 step verbs are not implemented in this engine yet
>
> **This is CURRENT CORPUS evidence, NOT a Gate-1 certification.** Practice isolation is still
> failing, portal P0-C remains open pending its dedicated classifier, and the release runway is
> not settled. A certification run re-stamps this page from that exact build.

*Generated from `docs/dlp/dlp-journeys.json` by `bin/build-walkthrough-index.mjs`. Every journey
the harness can run has a page here; a journey added to the definitions appears on the next run.*

Each walkthrough is written BY THE RUN — the numbers, verdicts and board states in it were
observed on the live system at the moment the journey executed, not composed by hand.

**How to read one:** the story in one sentence, then step by step what the platform did, what
the inference engine said and why, where the patient landed on the Kanban, and the verdict.


> **Every journey starts at the patient portal.** The patient registers from home, confirms
> their email, and the front desk accepting the registration is what CREATES the chart -
> nobody at the clinic types the patient in. Four journeys stop before that acceptance and
> deliberately have no chart at all: their card waits in Review Registration. See
> [PracticeForceOneDLPPortalFirstEntry](PracticeForceOneDLPPortalFirstEntry.html).
> **Naming note.** These are the DEEP-DIVE suite (`…DeepDiveWalkthrough.md`). Older pages named
> `PracticeForceOneDLP5Walkthrough.md` / `DLP6` / `DLP7` (July 2026) belong to a DIFFERENT,
> earlier journey series — same-looking names, different files, different scenarios.

## ReCenter Medical LLC

### Full clinical day

- `PASS` [DLP1](PracticeForceOneDLP1DeepDiveWalkthrough.html) — **Eleanor Whitfield (DLP1)**, lands in `signed`. Eleanor Whitfield, 68, arrives short of breath with two weeks of ankle swelling.
- **`BLOCKED`** [DLP7](PracticeForceOneDLP7DeepDiveWalkthrough.html) — **Delia Okonkwo (DLP7)**, lands in `signed`. Delia Okonkwo comes in for a skin lesion excision. — _1 of 19 step verbs are not implemented in this engine yet_
- `PASS` [DLP9](PracticeForceOneDLP9DeepDiveWalkthrough.html) — **DLP9**, lands in `visit_in_progress`. Eleanor Whitfield returns.
- `PASS` [DLP9A](PracticeForceOneDLP9ADeepDiveWalkthrough.html) — **DLP9A**, lands in `visit_in_progress`. Obadiah Stern returns.
- `PASS` [DLP9B](PracticeForceOneDLP9BDeepDiveWalkthrough.html) — **DLP9B**, lands in `visit_in_progress`. Arthur returns because the cough did not settle.
- `PASS` [DLP9C](PracticeForceOneDLP9CDeepDiveWalkthrough.html) — **DLP9C**, lands in `visit_in_progress`. A returning patient whose prior visit ended in coding.
- `PASS` [LANE-MED-VISIT-IN-PROGRESS](PracticeForceOneLANE-MED-VISIT-IN-PROGRESSDeepDiveWalkthrough.html) — **Anneliese Hartmann (LANE-MED)**, lands in `visit_in_progress`. The provider is with her right now.
- `PASS` [LANE-MED-DOCUMENTATION-INCOMPLETE](PracticeForceOneLANE-MED-DOCUMENTATION-INCOMPLETEDeepDiveWalkthrough.html) — **Ottilie Rasmussen (LANE-MED)**, lands in `documentation_incomplete`. Her chart genuinely owes documentation: an NSAID and metformin sitting on a stage 3b kidney patient.
- `PASS` [LANE-MED-READY-TO-SIGN](PracticeForceOneLANE-MED-READY-TO-SIGNDeepDiveWalkthrough.html) — **Ignatius Farrow (LANE-MED)**, lands in `ready_to_sign`. Documentation is satisfied.

### Point of sale / retail

- `PASS` [DLP5](PracticeForceOneDLP5DeepDiveWalkthrough.html) — **Nora Feldman (DLP5)**, lands in `pos_retail`. Nora Feldman stops by the front desk between visits to pick up her supplements — no appointment, no encounter, just retail.
- `PASS` [DLP5A](PracticeForceOneDLP5ADeepDiveWalkthrough.html) — **Marcus Deluca (DLP5A)**, lands in `pos_retail`. Marcus Deluca picks up two cash-and-carry prescriptions.
- `PASS` [DLP5B](PracticeForceOneDLP5BDeepDiveWalkthrough.html) — **Priya Raman (DLP5B)**, lands in `pos_retail`. Priya Raman pays cash prices for her own labs: an A1C, a metabolic panel and a vitamin D, straight from the office testing price list.

### Registration → human review

- `PASS` [DLP1A](PracticeForceOneDLP1ADeepDiveWalkthrough.html) — **Howard Brenner (DLP1A)**, lands in `review_registration`. Howard Brenner, 71, has just moved to the area and needs a new primary care practice.
- `PASS` [DLP3](PracticeForceOneDLP3DeepDiveWalkthrough.html) — **Arthur Pemberton (DLP3)**, lands in `review_registration`. Arthur Pemberton has just registered from home and is waiting for the front desk to review the submission.
- `PASS` [DLP3A](PracticeForceOneDLP3ADeepDiveWalkthrough.html) — **Yolanda Reyes-Fitch (DLP3A)**, lands in `patient_needs_schedule`. Yolanda Reyes-Fitch was reviewed and accepted, and now needs an appointment.
- `PASS` [DLP3B](PracticeForceOneDLP3BDeepDiveWalkthrough.html) — **Desmond Achebe (DLP3B)**, lands in `patient_scheduled`. Desmond Achebe is booked for today and expected.
- `PASS` [DLP3C](PracticeForceOneDLP3CDeepDiveWalkthrough.html) — **Marguerite Solberg (DLP3C)**, lands in `needs_pre_check_in`. Marguerite Solberg is booked, but the practice requires a pre-check-in they have not completed.
- `PASS` [DLP3D](PracticeForceOneDLP3DDeepDiveWalkthrough.html) — **Terrence Blackwood (DLP3D)**, lands in `patient_arrived`. Terrence Blackwood has walked in and is waiting in reception.
- `PASS` [DLP3E](PracticeForceOneDLP3EDeepDiveWalkthrough.html) — **Ingrid Halvorsen (DLP3E)**, lands in `ready_for_intake`. Ingrid Halvorsen is checked in and ready to be taken to a room.
- `PASS` [DLP3F](PracticeForceOneDLP3FDeepDiveWalkthrough.html) — **Ramon Villanueva (DLP3F)**, lands in `ready_to_encounter`. Ramon Villanueva is in a room with intake underway.
- `PASS` [DLP3G](PracticeForceOneDLP3GDeepDiveWalkthrough.html) — **Cecily Marchetti (DLP3G)**, lands in `ready_for_provider`. Cecily Marchetti has finished intake and is waiting for the provider.
- `PASS` [DLP3H](PracticeForceOneDLP3HDeepDiveWalkthrough.html) — **Obadiah Stern (DLP3H)**, lands in `visit_in_progress`. Obadiah Stern is with the provider now.
- `PASS` [DLP3I](PracticeForceOneDLP3IDeepDiveWalkthrough.html) — **Rosalind Nakamura (DLP3I)**, lands in `documentation_incomplete`. Rosalind Nakamura is mid-visit with real clinical complexity — diabetes with kidney involvement, hypertension, metformin and lisinopril on board.
- `PASS` [DLP3J](PracticeForceOneDLP3JDeepDiveWalkthrough.html) — **Fitzgerald Okonkwo (DLP3J)**, lands in `ready_to_sign`. Fitzgerald Okonkwo has complete documentation — only the signature remains.
- `PASS` [DLP3K](PracticeForceOneDLP3KDeepDiveWalkthrough.html) — **Beatrice Lindqvist (DLP3K)**, lands in `ready_for_coding`. Beatrice Lindqvist is signed and handed to coding.
- `PASS` [DLP3L](PracticeForceOneDLP3LDeepDiveWalkthrough.html) — **Desmond Achterberg (DLP3L)**, lands in `insurance_exception`. Desmond Achterberg is booked, but his coverage came back with a problem.
- `PASS` [DLP3M](PracticeForceOneDLP3MDeepDiveWalkthrough.html) — **Rosalind Vantongeren (DLP3M)**, lands in `blocked_review`. Rosalind Vantongeren never arrived.
- `PASS` [DLP3N](PracticeForceOneDLP3NDeepDiveWalkthrough.html) — **Cormac Delacroix-Bell (DLP3N)**, lands in `ready_to_claim`. Cormac Delacroix-Bell has been seen, documented, signed, and the coding has been approved.
- `PASS` [DLP3O](PracticeForceOneDLP3ODeepDiveWalkthrough.html) — **Imelda Strathmore (DLP3O)**, lands in `claim_needs_scrub`. Imelda Strathmore has a claim that exists but has not been scrubbed.
- `PASS` [DLP3P](PracticeForceOneDLP3PDeepDiveWalkthrough.html) — **Tobias Rasmussen-Hale (DLP3P)**, lands in `ready_to_submit`. Tobias Rasmussen-Hale has a clean claim ready to go out the door.
- `PASS` [DLP3Q](PracticeForceOneDLP3QDeepDiveWalkthrough.html) — **Winifred Okonkwo-Blythe (DLP3Q)**, lands in `denial_appeal`. Winifred Okonkwo-Blythe was denied by the payer.
- `PASS` [DLP3R](PracticeForceOneDLP3RDeepDiveWalkthrough.html) — **Ambrose Fitzwilliam (DLP3R)**, lands in `patient_balance`. Ambrose Fitzwilliam was paid by the payer, and a patient responsibility remains.
- `PASS` [DLP3S](PracticeForceOneDLP3SDeepDiveWalkthrough.html) — **Lionel Ashworth-Pike (DLP3S)**, lands in `clinical_follow_up`. Lionel Ashworth-Pike has been seen and his visit is closed, but his lab result is still outstanding.
- `PASS` [DLP3T](PracticeForceOneDLP3TDeepDiveWalkthrough.html) — **Marguerite Sørensen-Bright (DLP3T)**, lands in `payer_response`. Marguerite Sørensen-Bright has a claim sitting with the payer.
- `PASS` [DLP3U](PracticeForceOneDLP3UDeepDiveWalkthrough.html) — **Everett Kowalczyk (DLP3U)**, lands in `ar_follow_up`. Everett Kowalczyk was seen six weeks ago and the claim has still not been paid.

### Board progression — one lane per journey

- `PASS` [PROD-MED-01](PracticeForceOnePROD-MED-01DeepDiveWalkthrough.html) — **Marguerite Ashford (PROD-MED-01)**, lands in `ready_for_coding`. Marguerite Ashford is 68, on Medicare with a commercial secondary.
- `PASS` [LANE-MED-REVIEW-REGISTRATION](PracticeForceOneLANE-MED-REVIEW-REGISTRATIONDeepDiveWalkthrough.html) — **Delphine Okonjo (LANE-MED)**, lands in `review_registration`. She registered on the portal last night.
- `PASS` [LANE-MED-PATIENT-NEEDS-SCHEDULE](PracticeForceOneLANE-MED-PATIENT-NEEDS-SCHEDULEDeepDiveWalkthrough.html) — **Ambrose Whitlock (LANE-MED)**, lands in `patient_needs_schedule`. His registration was accepted and a chart exists, but no one has booked him.
- `PASS` [LANE-MED-PATIENT-SCHEDULED](PracticeForceOneLANE-MED-PATIENT-SCHEDULEDDeepDiveWalkthrough.html) — **Marisol Quintero (LANE-MED)**, lands in `patient_scheduled`. Booked for a future date.
- `PASS` [LANE-MED-INSURANCE-EXCEPTION](PracticeForceOneLANE-MED-INSURANCE-EXCEPTIONDeepDiveWalkthrough.html) — **Fenwick Adeyemi (LANE-MED)**, lands in `insurance_exception`. His coverage did not verify.
- `PASS` [LANE-MED-PATIENT-ARRIVED](PracticeForceOneLANE-MED-PATIENT-ARRIVEDDeepDiveWalkthrough.html) — **Rosalie Vandermeer (LANE-MED)**, lands in `patient_arrived`. She is in the waiting room.
- `PASS` [LANE-MED-READY-FOR-INTAKE](PracticeForceOneLANE-MED-READY-FOR-INTAKEDeepDiveWalkthrough.html) — **Corentin Basile (LANE-MED)**, lands in `ready_for_intake`. Checked in and roomed; his intake is not finished.
- `PASS` [LANE-MED-CLINICAL-FOLLOW-UP](PracticeForceOneLANE-MED-CLINICAL-FOLLOW-UPDeepDiveWalkthrough.html) — **Barnaby Osei (LANE-MED)**, lands in `clinical_follow_up`. His visit is over and something clinical is still owed afterwards — a result to review and a call back to him.
- `PASS` [LANE-MED-READY-FOR-CODING](PracticeForceOneLANE-MED-READY-FOR-CODINGDeepDiveWalkthrough.html) — **Solveig Bergstrom (LANE-MED)**, lands in `ready_for_coding`. Signed.
- `PASS` [LANE-MED-READY-TO-CLAIM](PracticeForceOneLANE-MED-READY-TO-CLAIMDeepDiveWalkthrough.html) — **Emmerich Vasquez (LANE-MED)**, lands in `ready_to_claim`. Coded and ready — no claim has been created yet.
- `PASS` [LANE-MED-CLAIM-NEEDS-SCRUB](PracticeForceOneLANE-MED-CLAIM-NEEDS-SCRUBDeepDiveWalkthrough.html) — **Philippa Nakamura (LANE-MED)**, lands in `claim_needs_scrub`. Her claim has a real defect the scrubber caught.
- `PASS` [LANE-MED-READY-TO-SUBMIT](PracticeForceOneLANE-MED-READY-TO-SUBMITDeepDiveWalkthrough.html) — **Thaddeus Molnar (LANE-MED)**, lands in `ready_to_submit`. Clean claim, not yet transmitted.
- `PASS` [LANE-MED-PAYER-RESPONSE](PracticeForceOneLANE-MED-PAYER-RESPONSEDeepDiveWalkthrough.html) — **Georgina Achebe (LANE-MED)**, lands in `payer_response`. The payer answered.
- `PASS` [LANE-MED-DENIAL-APPEAL](PracticeForceOneLANE-MED-DENIAL-APPEALDeepDiveWalkthrough.html) — **Leopold Castellanos (LANE-MED)**, lands in `denial_appeal`. The claim was denied.
- `PASS` [LANE-MED-AR-FOLLOW-UP](PracticeForceOneLANE-MED-AR-FOLLOW-UPDeepDiveWalkthrough.html) — **Wilhelmina Duarte (LANE-MED)**, lands in `ar_follow_up`. Her claim has aged past the window the payer promised.
- `PASS` [LANE-MED-PATIENT-BALANCE](PracticeForceOneLANE-MED-PATIENT-BALANCEDeepDiveWalkthrough.html) — **Cassius Lindqvist (LANE-MED)**, lands in `patient_balance`. Insurance settled and a balance remains that is his to pay.
- `PASS` [LANE-MED-BLOCKED-REVIEW](PracticeForceOneLANE-MED-BLOCKED-REVIEWDeepDiveWalkthrough.html) — **Perpetua Larsson (LANE-MED)**, lands in `blocked_review`. She did not attend.

## ReCenter Oasis LLC

### Full clinical day

- **`BLOCKED`** [PROD-OASIS-01](PracticeForceOnePROD-OASIS-01DeepDiveWalkthrough.html) — **Sabine Achterberg (PROD-OASIS-01)**, lands in `ready_to_sign`. Sabine Achterberg is 41 and coming to Oasis for her first neurotoxin treatment for frown lines. — _3 of 15 step verbs are not implemented in this engine yet_
- `PASS` [DLP2](PracticeForceOneDLP2DeepDiveWalkthrough.html) — **Marisol Reyes (DLP2)**, lands in `signed`. Marisol Reyes, 34, books a neurotoxin appointment at the medspa.
- **`BLOCKED`** [DLP8](PracticeForceOneDLP8DeepDiveWalkthrough.html) — **Sabine Toussaint (DLP8)**, lands in `signed`. Sabine Toussaint books a first filler treatment at Oasis. — _1 of 16 step verbs are not implemented in this engine yet_
- `PASS` [DLP10](PracticeForceOneDLP10DeepDiveWalkthrough.html) — **DLP10**, lands in `visit_in_progress`. Marisol Reyes returns after treatment.
- `PASS` [DLP10A](PracticeForceOneDLP10ADeepDiveWalkthrough.html) — **DLP10A**, lands in `visit_in_progress`. A returning aesthetics client whose first visit is already on the chart.
- `PASS` [LANE-OAS-VISIT-IN-PROGRESS](PracticeForceOneLANE-OAS-VISIT-IN-PROGRESSDeepDiveWalkthrough.html) — **Camille Aubert (LANE-OAS)**, lands in `visit_in_progress`. The injector is with her now, mid-treatment.
- `PASS` [LANE-OAS-DOCUMENTATION-INCOMPLETE](PracticeForceOneLANE-OAS-DOCUMENTATION-INCOMPLETEDeepDiveWalkthrough.html) — **Noor Haddad (LANE-OAS)**, lands in `documentation_incomplete`. Her treatment record is not complete — the consent and the before photographs this procedure owes are still outstanding.
- `PASS` [LANE-OAS-READY-TO-SIGN](PracticeForceOneLANE-OAS-READY-TO-SIGNDeepDiveWalkthrough.html) — **Greta Lindholm (LANE-OAS)**, lands in `ready_to_sign`. Her treatment is finished and the record is waiting on the injector signature.

### Point of sale / retail

- `PASS` [DLP6](PracticeForceOneDLP6DeepDiveWalkthrough.html) — **Camille Renard (DLP6)**, lands in `pos_retail`. Camille Renard buys skincare at the Oasis front desk — an SPF moisturizer and a vitamin C serum from the aesthetics retail catalog.
- `PASS` [DLP6A](PracticeForceOneDLP6ADeepDiveWalkthrough.html) — **Yusuf Adeyemi (DLP6A)**, lands in `pos_retail`. Yusuf Adeyemi tries to buy a retinol night cream and his card is declined.

### Registration → human review

- `PASS` [DLP2A](PracticeForceOneDLP2ADeepDiveWalkthrough.html) — **Priya Sundaram (DLP2A)**, lands in `review_registration`. Priya Sundaram, 33, has been thinking about a neurotoxin consultation for months.
- `PASS` [DLP4](PracticeForceOneDLP4DeepDiveWalkthrough.html) — **Simone Delacroix-Vance (DLP4)**, lands in `review_registration`. Simone Delacroix-Vance has just registered from home and is waiting for the front desk to review the submission.
- `PASS` [DLP4A](PracticeForceOneDLP4ADeepDiveWalkthrough.html) — **Anouk Thorvald (DLP4A)**, lands in `patient_needs_schedule`. Anouk Thorvald was reviewed and accepted, and now needs an appointment.
- `PASS` [DLP4B](PracticeForceOneDLP4BDeepDiveWalkthrough.html) — **Camille Ibarra (DLP4B)**, lands in `patient_scheduled`. Camille Ibarra is booked for today and expected.
- `PASS` [DLP4C](PracticeForceOneDLP4CDeepDiveWalkthrough.html) — **Delphine Okoye (DLP4C)**, lands in `needs_pre_check_in`. Delphine Okoye is booked, but the practice requires a pre-check-in they have not completed.
- `PASS` [DLP4D](PracticeForceOneDLP4DDeepDiveWalkthrough.html) — **Esperanza Mikkelsen (DLP4D)**, lands in `patient_arrived`. Esperanza Mikkelsen has walked in and is waiting in reception.
- `PASS` [DLP4E](PracticeForceOneDLP4EDeepDiveWalkthrough.html) — **Fiona Castellanos (DLP4E)**, lands in `ready_for_intake`. Fiona Castellanos is checked in and ready to be taken to a room.
- `PASS` [DLP4F](PracticeForceOneDLP4FDeepDiveWalkthrough.html) — **Giselle Ravensworth (DLP4F)**, lands in `ready_to_encounter`. Giselle Ravensworth is in a room with intake underway.
- `PASS` [DLP4G](PracticeForceOneDLP4GDeepDiveWalkthrough.html) — **Harriet Nakagawa (DLP4G)**, lands in `ready_for_provider`. Harriet Nakagawa has finished intake and is waiting for the provider.
- `PASS` [DLP4H](PracticeForceOneDLP4HDeepDiveWalkthrough.html) — **Imogen Vasquez (DLP4H)**, lands in `visit_in_progress`. Imogen Vasquez is with the provider now.
- `PASS` [DLP4I](PracticeForceOneDLP4IDeepDiveWalkthrough.html) — **Juno Whitfield-Barre (DLP4I)**, lands in `documentation_incomplete`. Mid-treatment at Oasis with real aesthetic complexity — the engine reads the chart and raises the consent, good-faith exam and product-lot documentation the treatment genuinely owes, so this card sits in Documentation Incomplete because the ENGINE says work is outstanding, not because a status was set.
- **`FAIL`** [DLP4J](PracticeForceOneDLP4JDeepDiveWalkthrough.html) — **Katarina Mbeki (DLP4J)**, lands in `ready_to_sign`. Katarina Mbeki has complete documentation — only the signature remains. — _1 step(s) failed_
- `PASS` [DLP4K](PracticeForceOneDLP4KDeepDiveWalkthrough.html) — **Lucienne Ferreira (DLP4K)**, lands in `ready_for_coding`. Lucienne Ferreira is signed and handed to coding.
- `PASS` [DLP4L](PracticeForceOneDLP4LDeepDiveWalkthrough.html) — **Solveig Marchetti (DLP4L)**, lands in `insurance_exception`. Solveig Marchetti is booked, but her coverage came back with a problem.
- `PASS` [DLP4M](PracticeForceOneDLP4MDeepDiveWalkthrough.html) — **Emeric Vandenbosch (DLP4M)**, lands in `blocked_review`. Emeric Vandenbosch never arrived.
- `PASS` [DLP4N](PracticeForceOneDLP4NDeepDiveWalkthrough.html) — **Seraphina Delgado-Whitmore (DLP4N)**, lands in `clinical_follow_up`. Seraphina Delgado-Whitmore finished her treatment, but her two-week check has not been booked.

### Board progression — one lane per journey

- `PASS` [LANE-OAS-REVIEW-REGISTRATION](PracticeForceOneLANE-OAS-REVIEW-REGISTRATIONDeepDiveWalkthrough.html) — **Ilse Vandenberg (LANE-OAS)**, lands in `review_registration`. She booked herself in through the site last night for a first consultation.
- `PASS` [LANE-OAS-PATIENT-NEEDS-SCHEDULE](PracticeForceOneLANE-OAS-PATIENT-NEEDS-SCHEDULEDeepDiveWalkthrough.html) — **Solange Petit (LANE-OAS)**, lands in `patient_needs_schedule`. Her enquiry was accepted but no treatment date is booked.
- `PASS` [LANE-OAS-PATIENT-SCHEDULED](PracticeForceOneLANE-OAS-PATIENT-SCHEDULEDDeepDiveWalkthrough.html) — **Marnie Okafor (LANE-OAS)**, lands in `patient_scheduled`. Booked for her neurotoxin appointment next week.
- `PASS` [LANE-OAS-INSURANCE-EXCEPTION](PracticeForceOneLANE-OAS-INSURANCE-EXCEPTIONDeepDiveWalkthrough.html) — **Delia Kowalczyk (LANE-OAS)**, lands in `insurance_exception`. A medical-necessity element on her file did not verify.
- `PASS` [LANE-OAS-PATIENT-ARRIVED](PracticeForceOneLANE-OAS-PATIENT-ARRIVEDDeepDiveWalkthrough.html) — **Yuki Tanaka (LANE-OAS)**, lands in `patient_arrived`. She is here for her filler appointment and has not been taken through yet.
- `PASS` [LANE-OAS-READY-FOR-INTAKE](PracticeForceOneLANE-OAS-READY-FOR-INTAKEDeepDiveWalkthrough.html) — **Bettina Rossi (LANE-OAS)**, lands in `ready_for_intake`. Taken through to the room; her aesthetic history and contraindication screen are not finished.
- `PASS` [LANE-OAS-CLINICAL-FOLLOW-UP](PracticeForceOneLANE-OAS-CLINICAL-FOLLOW-UPDeepDiveWalkthrough.html) — **Priya Raman (LANE-OAS)**, lands in `clinical_follow_up`. Two weeks after treatment she is owed a review — how the result settled, and whether a top-up is needed.
- `PASS` [LANE-OAS-BLOCKED-REVIEW](PracticeForceOneLANE-OAS-BLOCKED-REVIEWDeepDiveWalkthrough.html) — **Astrid Nyberg (LANE-OAS)**, lands in `blocked_review`. She did not come to her appointment.

---

**Rerun everything** (each run rewrites its own page):

```
node bin/dlp.mjs recenter_medical_deepdive <NAME>     # by name; --all refuses on frozen practices
node bin/dlp.mjs recenter_oasis_deepdive  <NAME>
node bin/build-walkthrough-index.mjs                  # refresh this index
```
