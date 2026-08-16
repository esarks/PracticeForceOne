---
title: "DLP Illustrated Walkthroughs"
---

# DLP Illustrated Walkthroughs

Each walkthrough below is a **clinic day walked end to end against the live platform**, with a
photograph of the patient's Kanban card taken after every single step. The images are cut out of
the real board in a real browser at the moment that step completed — not mockups, not
reconstructions, and not screenshots taken afterwards to illustrate a story someone wrote.

These pages are **written by the run**. The verdicts, lane names, card counts and clinical
details in them were observed on the deployed system as the journey executed.

## This corpus — build 2254 `ac440f629`

**86 journeys · 80 PASS · 3 BLOCKED · 3 FAIL** — run 2026-08-16T00:46:52.958Z

The serving build was verified **unmoved before, during and after** the run, so every page below describes ONE artifact rather than several.

**Not-PASS verdicts in this run:**

- `BLOCKED` **DLP7** — 1 of 19 step verbs are not implemented in this engine yet
- `FAIL` **LANE-MED-AR-FOLLOW-UP** — 1 step(s) failed
- `BLOCKED` **PROD-OASIS-01** — 3 of 15 step verbs are not implemented in this engine yet
- `FAIL` **DLP4J** — 1 step(s) failed
- `BLOCKED` **DLP8** — 1 of 16 step verbs are not implemented in this engine yet
- `FAIL` **DLP10** — 1 step(s) failed

### ⚠ Intermittent on this build — two different verdicts, same artifact

- **LANE-MED-AR-FOLLOW-UP** — corpus run `FAIL`, rerun `PASS`. 500 SERVER_ERROR on charge-review approval (claim creation) in the corpus run; succeeded on rerun ~1h later on the same build. Classified TRUE_WRITE_FAILURE: no claim persisted, card never left ready_for_coding.
- **LANE-MED-PATIENT-NEEDS-SCHEDULE** — corpus run `PASS`, rerun `FAIL`. 500 DATA_ERROR on create-patient: "JAC data failure [READ] at com.claimsprocessing.data.PATIENTSCrud_Crud". Passed in the corpus run, failed on rerun on the same build.

_Both verdicts were observed on build 2254. Neither is a stable result; these journeys are FLAKY on this build, not fixed and not broken._

## Why the pictures matter

A card in the API payload is not a card a staff member can see. The platform has shipped a build
where five card builders threw an error and the board rendered **zero** cards while every API
response still looked perfect. Prose can describe a card that was never rendered; a photograph of
the live DOM cannot.

Each step shows **every card the patient holds at that moment** — a patient mid-visit legitimately
holds an appointment card in one lane and a charge card in another, and showing one of them while
calling it "the card" is how a caption ends up contradicting the run it documents.

Where a step has **no image, the page says so and says why**. Early in a journey that is correct:
the chart does not exist yet, so no card can exist. Late in a journey it is a finding. The absence
is printed at the same visual weight as an image so a reader can judge which one they are looking at.

## ReCenter Medical LLC

*52 of 52 journeys have a generated page.*

- `PASS` [**DLP1** — Eleanor Whitfield (DLP1)](DLP1-ReCenter-Medical.html) — lands in `ready_for_coding`. Eleanor Whitfield, 68, arrives short of breath with two weeks of ankle swelling.
- `PASS` [**PROD-MED-01** — Marguerite Ashford (PROD-MED-01)](PROD-MED-01-ReCenter-Medical.html) — lands in `ready_for_coding`. Marguerite Ashford is 68, on Medicare with a commercial secondary.
- `PASS` [**DLP1A** — Howard Brenner (DLP1A)](DLP1A-ReCenter-Medical.html) — lands in `review_registration`. Howard Brenner, 71, has just moved to the area and needs a new primary care practice.
- `PASS` [**DLP3** — Arthur Pemberton (DLP3)](DLP3-ReCenter-Medical.html) — lands in `review_registration`. Arthur Pemberton has just registered from home and is waiting for the front desk to review the submission.
- `PASS` [**DLP3A** — Yolanda Reyes-Fitch (DLP3A)](DLP3A-ReCenter-Medical.html) — lands in `patient_needs_schedule`. Yolanda Reyes-Fitch was reviewed and accepted, and now needs an appointment.
- `PASS` [**DLP3B** — Desmond Achebe (DLP3B)](DLP3B-ReCenter-Medical.html) — lands in `patient_scheduled`. Desmond Achebe is booked for today and expected.
- `PASS` [**DLP3C** — Marguerite Solberg (DLP3C)](DLP3C-ReCenter-Medical.html) — lands in `needs_pre_check_in`. Marguerite Solberg is booked, but the practice requires a pre-check-in they have not completed.
- `PASS` [**DLP3D** — Terrence Blackwood (DLP3D)](DLP3D-ReCenter-Medical.html) — lands in `patient_arrived`. Terrence Blackwood has walked in and is waiting in reception.
- `PASS` [**DLP3E** — Ingrid Halvorsen (DLP3E)](DLP3E-ReCenter-Medical.html) — lands in `ready_for_intake`. Ingrid Halvorsen is checked in and ready to be taken to a room.
- `PASS` [**DLP3F** — Ramon Villanueva (DLP3F)](DLP3F-ReCenter-Medical.html) — lands in `ready_to_encounter`. Ramon Villanueva is in a room with intake underway.
- `PASS` [**DLP3G** — Cecily Marchetti (DLP3G)](DLP3G-ReCenter-Medical.html) — lands in `ready_for_provider`. Cecily Marchetti has finished intake and is waiting for the provider.
- `PASS` [**DLP3H** — Obadiah Stern (DLP3H)](DLP3H-ReCenter-Medical.html) — lands in `visit_in_progress`. Obadiah Stern is with the provider now.
- `PASS` [**DLP3I** — Rosalind Nakamura (DLP3I)](DLP3I-ReCenter-Medical.html) — lands in `documentation_incomplete`. Rosalind Nakamura is mid-visit with real clinical complexity — diabetes with kidney involvement, hypertension, metformin and lisinopril on board.
- `PASS` [**DLP3J** — Fitzgerald Okonkwo (DLP3J)](DLP3J-ReCenter-Medical.html) — lands in `ready_to_sign`. Fitzgerald Okonkwo has complete documentation — only the signature remains.
- `PASS` [**DLP3K** — Beatrice Lindqvist (DLP3K)](DLP3K-ReCenter-Medical.html) — lands in `ready_for_coding`. Beatrice Lindqvist is signed and handed to coding.
- `PASS` [**DLP3L** — Desmond Achterberg (DLP3L)](DLP3L-ReCenter-Medical.html) — lands in `insurance_exception`. Desmond Achterberg is booked, but his coverage came back with a problem.
- `PASS` [**DLP3M** — Rosalind Vantongeren (DLP3M)](DLP3M-ReCenter-Medical.html) — lands in `blocked_review`. Rosalind Vantongeren never arrived.
- `PASS` [**DLP3N** — Cormac Delacroix-Bell (DLP3N)](DLP3N-ReCenter-Medical.html) — lands in `ready_to_claim`. Cormac Delacroix-Bell has been seen, documented, signed, and the coding has been approved.
- `PASS` [**DLP3O** — Imelda Strathmore (DLP3O)](DLP3O-ReCenter-Medical.html) — lands in `claim_needs_scrub`. Imelda Strathmore has a claim that exists but has not been scrubbed.
- `PASS` [**DLP3P** — Tobias Rasmussen-Hale (DLP3P)](DLP3P-ReCenter-Medical.html) — lands in `ready_to_submit`. Tobias Rasmussen-Hale has a clean claim ready to go out the door.
- `PASS` [**DLP3Q** — Winifred Okonkwo-Blythe (DLP3Q)](DLP3Q-ReCenter-Medical.html) — lands in `denial_appeal`. Winifred Okonkwo-Blythe was denied by the payer.
- `PASS` [**DLP3R** — Ambrose Fitzwilliam (DLP3R)](DLP3R-ReCenter-Medical.html) — lands in `patient_balance`. Ambrose Fitzwilliam was paid by the payer, and a patient responsibility remains.
- `PASS` [**DLP3S** — Lionel Ashworth-Pike (DLP3S)](DLP3S-ReCenter-Medical.html) — lands in `clinical_follow_up`. Lionel Ashworth-Pike has been seen and his visit is closed, but his lab result is still outstanding.
- `PASS` [**DLP3T** — Marguerite Sørensen-Bright (DLP3T)](DLP3T-ReCenter-Medical.html) — lands in `payer_response`. Marguerite Sørensen-Bright has a claim sitting with the payer.
- `PASS` [**DLP3U** — Everett Kowalczyk (DLP3U)](DLP3U-ReCenter-Medical.html) — lands in `ar_follow_up`. Everett Kowalczyk was seen six weeks ago and the claim has still not been paid.
- `PASS` [**DLP5** — Nora Feldman (DLP5)](DLP5-ReCenter-Medical.html) — lands in `patient_needs_schedule`. Nora Feldman stops by the front desk between visits to pick up her supplements — no appointment, no encounter, just retail.
- `PASS` [**DLP5A** — Marcus Deluca (DLP5A)](DLP5A-ReCenter-Medical.html) — lands in `patient_needs_schedule`. Marcus Deluca picks up two cash-and-carry prescriptions.
- `PASS` [**DLP5B** — Priya Raman (DLP5B)](DLP5B-ReCenter-Medical.html) — lands in `patient_needs_schedule`. Priya Raman pays cash prices for her own labs: an A1C, a metabolic panel and a vitamin D, straight from the office testing price list.
- **`BLOCKED`** [**DLP7** — Delia Okonkwo (DLP7)](DLP7-ReCenter-Medical.html) — lands in `ready_for_coding`. Delia Okonkwo comes in for a skin lesion excision. _1 of 19 step verbs are not implemented in this engine yet_
- `PASS` [**DLP9** — DLP9](DLP9-ReCenter-Medical.html) — lands in `visit_in_progress`. Eleanor Whitfield returns.
- `PASS` [**DLP9A** — DLP9A](DLP9A-ReCenter-Medical.html) — lands in `visit_in_progress`. Obadiah Stern returns.
- `PASS` [**DLP9B** — DLP9B](DLP9B-ReCenter-Medical.html) — lands in `visit_in_progress`. Arthur returns because the cough did not settle.
- `PASS` [**DLP9C** — DLP9C](DLP9C-ReCenter-Medical.html) — lands in `visit_in_progress`. A returning patient whose prior visit ended in coding.
- `PASS` [**LANE-MED-REVIEW-REGISTRATION** — Delphine Okonjo (LANE-MED)](LANE-MED-REVIEW-REGISTRATION-ReCenter-Medical.html) — lands in `review_registration`. She registered on the portal last night.
- `PASS` [**LANE-MED-PATIENT-NEEDS-SCHEDULE** — Ambrose Whitlock (LANE-MED)](LANE-MED-PATIENT-NEEDS-SCHEDULE-ReCenter-Medical.html) — lands in `patient_needs_schedule`. His registration was accepted and a chart exists, but no one has booked him.
- `PASS` [**LANE-MED-PATIENT-SCHEDULED** — Marisol Quintero (LANE-MED)](LANE-MED-PATIENT-SCHEDULED-ReCenter-Medical.html) — lands in `patient_scheduled`. Booked for a future date.
- `PASS` [**LANE-MED-INSURANCE-EXCEPTION** — Fenwick Adeyemi (LANE-MED)](LANE-MED-INSURANCE-EXCEPTION-ReCenter-Medical.html) — lands in `insurance_exception`. His coverage did not verify.
- `PASS` [**LANE-MED-PATIENT-ARRIVED** — Rosalie Vandermeer (LANE-MED)](LANE-MED-PATIENT-ARRIVED-ReCenter-Medical.html) — lands in `patient_arrived`. She is in the waiting room.
- `PASS` [**LANE-MED-READY-FOR-INTAKE** — Corentin Basile (LANE-MED)](LANE-MED-READY-FOR-INTAKE-ReCenter-Medical.html) — lands in `ready_for_intake`. Checked in and roomed; his intake is not finished.
- `PASS` [**LANE-MED-VISIT-IN-PROGRESS** — Anneliese Hartmann (LANE-MED)](LANE-MED-VISIT-IN-PROGRESS-ReCenter-Medical.html) — lands in `visit_in_progress`. The provider is with her right now.
- `PASS` [**LANE-MED-CLINICAL-FOLLOW-UP** — Barnaby Osei (LANE-MED)](LANE-MED-CLINICAL-FOLLOW-UP-ReCenter-Medical.html) — lands in `clinical_follow_up`. His visit is over and something clinical is still owed afterwards — a result to review and a call back to him.
- `PASS` [**LANE-MED-DOCUMENTATION-INCOMPLETE** — Ottilie Rasmussen (LANE-MED)](LANE-MED-DOCUMENTATION-INCOMPLETE-ReCenter-Medical.html) — lands in `documentation_incomplete`. Her chart genuinely owes documentation: an NSAID and metformin sitting on a stage 3b kidney patient.
- `PASS` [**LANE-MED-READY-TO-SIGN** — Ignatius Farrow (LANE-MED)](LANE-MED-READY-TO-SIGN-ReCenter-Medical.html) — lands in `ready_to_sign`. Documentation is satisfied.
- `PASS` [**LANE-MED-READY-FOR-CODING** — Solveig Bergstrom (LANE-MED)](LANE-MED-READY-FOR-CODING-ReCenter-Medical.html) — lands in `ready_for_coding`. Signed.
- `PASS` [**LANE-MED-READY-TO-CLAIM** — Emmerich Vasquez (LANE-MED)](LANE-MED-READY-TO-CLAIM-ReCenter-Medical.html) — lands in `ready_to_claim`. Coded and ready — no claim has been created yet.
- `PASS` [**LANE-MED-CLAIM-NEEDS-SCRUB** — Philippa Nakamura (LANE-MED)](LANE-MED-CLAIM-NEEDS-SCRUB-ReCenter-Medical.html) — lands in `claim_needs_scrub`. Her claim has a real defect the scrubber caught.
- `PASS` [**LANE-MED-READY-TO-SUBMIT** — Thaddeus Molnar (LANE-MED)](LANE-MED-READY-TO-SUBMIT-ReCenter-Medical.html) — lands in `ready_to_submit`. Clean claim, not yet transmitted.
- `PASS` [**LANE-MED-PAYER-RESPONSE** — Georgina Achebe (LANE-MED)](LANE-MED-PAYER-RESPONSE-ReCenter-Medical.html) — lands in `payer_response`. The payer answered.
- `PASS` [**LANE-MED-DENIAL-APPEAL** — Leopold Castellanos (LANE-MED)](LANE-MED-DENIAL-APPEAL-ReCenter-Medical.html) — lands in `denial_appeal`. The claim was denied.
- **`FAIL`** [**LANE-MED-AR-FOLLOW-UP** — Wilhelmina Duarte (LANE-MED)](LANE-MED-AR-FOLLOW-UP-ReCenter-Medical.html) — lands in `ar_follow_up`. Her claim has aged past the window the payer promised. _1 step(s) failed_
- `PASS` [**LANE-MED-PATIENT-BALANCE** — Cassius Lindqvist (LANE-MED)](LANE-MED-PATIENT-BALANCE-ReCenter-Medical.html) — lands in `patient_balance`. Insurance settled and a balance remains that is his to pay.
- `PASS` [**LANE-MED-BLOCKED-REVIEW** — Perpetua Larsson (LANE-MED)](LANE-MED-BLOCKED-REVIEW-ReCenter-Medical.html) — lands in `blocked_review`. She did not attend.

## ReCenter Oasis LLC

*34 of 34 journeys have a generated page.*

- **`BLOCKED`** [**PROD-OASIS-01** — Sabine Achterberg (PROD-OASIS-01)](PROD-OASIS-01-ReCenter-Oasis.html) — lands in `ready_to_sign`. Sabine Achterberg is 41 and coming to Oasis for her first neurotoxin treatment for frown lines. _3 of 15 step verbs are not implemented in this engine yet_
- `PASS` [**DLP2** — Marisol Reyes (DLP2)](DLP2-ReCenter-Oasis.html) — lands in `ready_for_coding`. Marisol Reyes, 34, books a neurotoxin appointment at the medspa.
- `PASS` [**DLP2A** — Priya Sundaram (DLP2A)](DLP2A-ReCenter-Oasis.html) — lands in `review_registration`. Priya Sundaram, 33, has been thinking about a neurotoxin consultation for months.
- `PASS` [**DLP4** — Simone Delacroix-Vance (DLP4)](DLP4-ReCenter-Oasis.html) — lands in `review_registration`. Simone Delacroix-Vance has just registered from home and is waiting for the front desk to review the submission.
- `PASS` [**DLP4A** — Anouk Thorvald (DLP4A)](DLP4A-ReCenter-Oasis.html) — lands in `patient_needs_schedule`. Anouk Thorvald was reviewed and accepted, and now needs an appointment.
- `PASS` [**DLP4B** — Camille Ibarra (DLP4B)](DLP4B-ReCenter-Oasis.html) — lands in `patient_scheduled`. Camille Ibarra is booked for today and expected.
- `PASS` [**DLP4C** — Delphine Okoye (DLP4C)](DLP4C-ReCenter-Oasis.html) — lands in `needs_pre_check_in`. Delphine Okoye is booked, but the practice requires a pre-check-in they have not completed.
- `PASS` [**DLP4D** — Esperanza Mikkelsen (DLP4D)](DLP4D-ReCenter-Oasis.html) — lands in `patient_arrived`. Esperanza Mikkelsen has walked in and is waiting in reception.
- `PASS` [**DLP4E** — Fiona Castellanos (DLP4E)](DLP4E-ReCenter-Oasis.html) — lands in `ready_for_intake`. Fiona Castellanos is checked in and ready to be taken to a room.
- `PASS` [**DLP4F** — Giselle Ravensworth (DLP4F)](DLP4F-ReCenter-Oasis.html) — lands in `ready_to_encounter`. Giselle Ravensworth is in a room with intake underway.
- `PASS` [**DLP4G** — Harriet Nakagawa (DLP4G)](DLP4G-ReCenter-Oasis.html) — lands in `ready_for_provider`. Harriet Nakagawa has finished intake and is waiting for the provider.
- `PASS` [**DLP4H** — Imogen Vasquez (DLP4H)](DLP4H-ReCenter-Oasis.html) — lands in `visit_in_progress`. Imogen Vasquez is with the provider now.
- `PASS` [**DLP4I** — Juno Whitfield-Barre (DLP4I)](DLP4I-ReCenter-Oasis.html) — lands in `documentation_incomplete`. Mid-treatment at Oasis with real aesthetic complexity — the engine reads the chart and raises the consent, good-faith exam and product-lot documentation the treatment genuinely owes, so this card sits in Documentation Incomplete because the ENGINE says work is outstanding, not because a status was set.
- **`FAIL`** [**DLP4J** — Katarina Mbeki (DLP4J)](DLP4J-ReCenter-Oasis.html) — lands in `ready_to_sign`. Katarina Mbeki has complete documentation — only the signature remains. _1 step(s) failed_
- `PASS` [**DLP4K** — Lucienne Ferreira (DLP4K)](DLP4K-ReCenter-Oasis.html) — lands in `ready_for_coding`. Lucienne Ferreira is signed and handed to coding.
- `PASS` [**DLP4L** — Solveig Marchetti (DLP4L)](DLP4L-ReCenter-Oasis.html) — lands in `insurance_exception`. Solveig Marchetti is booked, but her coverage came back with a problem.
- `PASS` [**DLP4M** — Emeric Vandenbosch (DLP4M)](DLP4M-ReCenter-Oasis.html) — lands in `blocked_review`. Emeric Vandenbosch never arrived.
- `PASS` [**DLP4N** — Seraphina Delgado-Whitmore (DLP4N)](DLP4N-ReCenter-Oasis.html) — lands in `clinical_follow_up`. Seraphina Delgado-Whitmore finished her treatment, but her two-week check has not been booked.
- `PASS` [**DLP6** — Camille Renard (DLP6)](DLP6-ReCenter-Oasis.html) — lands in `patient_needs_schedule`. Camille Renard buys skincare at the Oasis front desk — an SPF moisturizer and a vitamin C serum from the aesthetics retail catalog.
- `PASS` [**DLP6A** — Yusuf Adeyemi (DLP6A)](DLP6A-ReCenter-Oasis.html) — lands in `patient_needs_schedule`. Yusuf Adeyemi tries to buy a retinol night cream and his card is declined.
- **`BLOCKED`** [**DLP8** — Sabine Toussaint (DLP8)](DLP8-ReCenter-Oasis.html) — lands in `ready_for_coding`. Sabine Toussaint books a first filler treatment at Oasis. _1 of 16 step verbs are not implemented in this engine yet_
- **`FAIL`** [**DLP10** — DLP10](DLP10-ReCenter-Oasis.html) — lands in `visit_in_progress`. Marisol Reyes returns after treatment. _1 step(s) failed_
- `PASS` [**DLP10A** — DLP10A](DLP10A-ReCenter-Oasis.html) — lands in `visit_in_progress`. A returning aesthetics client whose first visit is already on the chart.
- `PASS` [**LANE-OAS-REVIEW-REGISTRATION** — Ilse Vandenberg (LANE-OAS)](LANE-OAS-REVIEW-REGISTRATION-ReCenter-Oasis.html) — lands in `review_registration`. She booked herself in through the site last night for a first consultation.
- `PASS` [**LANE-OAS-PATIENT-NEEDS-SCHEDULE** — Solange Petit (LANE-OAS)](LANE-OAS-PATIENT-NEEDS-SCHEDULE-ReCenter-Oasis.html) — lands in `patient_needs_schedule`. Her enquiry was accepted but no treatment date is booked.
- `PASS` [**LANE-OAS-PATIENT-SCHEDULED** — Marnie Okafor (LANE-OAS)](LANE-OAS-PATIENT-SCHEDULED-ReCenter-Oasis.html) — lands in `patient_scheduled`. Booked for her neurotoxin appointment next week.
- `PASS` [**LANE-OAS-INSURANCE-EXCEPTION** — Delia Kowalczyk (LANE-OAS)](LANE-OAS-INSURANCE-EXCEPTION-ReCenter-Oasis.html) — lands in `insurance_exception`. A medical-necessity element on her file did not verify.
- `PASS` [**LANE-OAS-PATIENT-ARRIVED** — Yuki Tanaka (LANE-OAS)](LANE-OAS-PATIENT-ARRIVED-ReCenter-Oasis.html) — lands in `patient_arrived`. She is here for her filler appointment and has not been taken through yet.
- `PASS` [**LANE-OAS-READY-FOR-INTAKE** — Bettina Rossi (LANE-OAS)](LANE-OAS-READY-FOR-INTAKE-ReCenter-Oasis.html) — lands in `ready_for_intake`. Taken through to the room; her aesthetic history and contraindication screen are not finished.
- `PASS` [**LANE-OAS-VISIT-IN-PROGRESS** — Camille Aubert (LANE-OAS)](LANE-OAS-VISIT-IN-PROGRESS-ReCenter-Oasis.html) — lands in `visit_in_progress`. The injector is with her now, mid-treatment.
- `PASS` [**LANE-OAS-DOCUMENTATION-INCOMPLETE** — Noor Haddad (LANE-OAS)](LANE-OAS-DOCUMENTATION-INCOMPLETE-ReCenter-Oasis.html) — lands in `documentation_incomplete`. Her treatment record is not complete — the consent and the before photographs this procedure owes are still outstanding.
- `PASS` [**LANE-OAS-READY-TO-SIGN** — Greta Lindholm (LANE-OAS)](LANE-OAS-READY-TO-SIGN-ReCenter-Oasis.html) — lands in `ready_to_sign`. Her treatment is finished and the record is waiting on the injector signature.
- `PASS` [**LANE-OAS-CLINICAL-FOLLOW-UP** — Priya Raman (LANE-OAS)](LANE-OAS-CLINICAL-FOLLOW-UP-ReCenter-Oasis.html) — lands in `clinical_follow_up`. Two weeks after treatment she is owed a review — how the result settled, and whether a top-up is needed.
- `PASS` [**LANE-OAS-BLOCKED-REVIEW** — Astrid Nyberg (LANE-OAS)](LANE-OAS-BLOCKED-REVIEW-ReCenter-Oasis.html) — lands in `blocked_review`. She did not come to her appointment.

## How to read one

The story in one sentence, then step by step: what the platform did, what the card looked like
immediately afterwards and which lane it was sitting in, what the Documentation Engine concluded,
and the verdict. Every page names the **exact build** it describes in its header — evidence that
does not name its build is not evidence, because the platform ships several times a day.

## About the patients

Every patient in these walkthroughs is a **synthetic test fixture**, generated by the journey
harness and tagged in the surname with the journey that created it — `Whitfield (DLP1)`. They are
not real people and contain no real patient information. The harness is forbidden from running
against real practice data.

---

*Generated by `bin/dlp.mjs <practice> <JOURNEY> --shots` and published by
`bin/publish-dlp-pages.mjs`. Regenerated on every run — these pages are not hand-edited.*
