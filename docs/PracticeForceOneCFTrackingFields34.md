---
title: "PracticeForceOneCFTrackingFields34"
---

# CF Tracking — Field-Level Detail (part 34 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Orthopedics**, **Transplant Medicine**, **Vascular Surgery**, **Care Coordination**, **Reproductive Medicine**, **Sleep Medicine**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Orthopedics

### Osteoarthritis — `orthopedics_osteoarthritis_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Osteoarthritis of Hip and Knee: Diagnosis, Conservative Management, and Surgical Planning | OA Diagnosis: ACR Criteria, Kellgren-Lawrence Staging, and Functional Assessment | `oa_class` | OA Diagnosis ACR Criteria Knee: Age Above 50; Morning Stiffness Below 30 Min; Crepitus; Bony Tenderness; Bony Enlargement; No Palpable Warmth; Plus Radiographic Osteophytes; ACR Hip OA: Hip Pain Plus Femoral or Acetabular Osteophytes; ESR Below 20; Hip Internal Rotation Below 15 Degrees; Morning Stiffness Below 60 Min; Kellgren-Lawrence KL Radiographic Grade 0-4: 0 None; 1 Doubtful Osteophyte; 2 Definite Osteophyte Possible JSN; 3 Moderate Multiple Osteophytes Definite JSN Sclerosis; 4 Large Osteophytes Marked JSN Severe Sclerosis Deformity; OARSI Appropriate Criteria Pain Plus KL 2-3 Conservative Exhausted 6 Months; Patient Reported Outcomes: WOMAC Western Ontario McMaster; KOOS Knee Injury OA Outcome Score; HOOS Hip Disability; VAS NRS Pain; KSS Knee Society Score; 6 Minute Walk; TUG Timed Up and Go; Oxford Hip Knee Score; BASFI Axial; SAS Activity Level | `select` |  |  |  |
| Osteoarthritis of Hip and Knee: Diagnosis, Conservative Management, and Surgical Planning | OA Diagnosis: ACR Criteria, Kellgren-Lawrence Staging, and Functional Assessment | `oa_risk` | OA Risk Factors and Comorbidities: Age Primary Risk; Obesity BMI Knee OA 4-5x Mechanical Load; Prior Joint Injury ACL Meniscal Damage Post-Traumatic OA; Occupational Kneeling Squatting Heavy Lifting; Genetics Familial Nodal; Female Sex Especially Knee; Malalignment Varus Genu Varum Knee Medial OA; Valgus Lateral; Hip Dysplasia Developmental DDH; Muscle Weakness Quadriceps; Meniscal Pathology; BMI Target Weight Loss 10% Significant Symptom Reduction; Comorbidities: Depression Anxiety Amplify Pain Centralization; DM CV Risk Perioperative; CKD NSAID Risk GI; Warfarin Antiplatelet Bridging Surgical; Opioid Risk Chronic Musculoskeletal Pain; Physical Function Impact ADLs; Fall Risk Elderly; FITT Exercise Prescription Frequency Intensity Time Type -- OA RISK FACTORS AND COMORBIDITY MANAGEMENT: PRIMARY RISK FACTORS: AGE [STRONGEST; OA RARE BELOW 40; PREVALENCE EXPONENTIAL INCREASE EACH DECADE; CARTILAGE DEGENERATION ACCUMULATES]; OBESITY [KNEE OA: EACH BMI UNIT = 15% INCREASED RISK; MECHANICAL LOAD 3-6X BODY WEIGHT KNEE; INFLAMMATORY ADIPOKINES; WEIGHT LOSS 10% = CLINICALLY SIGNIFICANT PAIN IMPROVEMENT]; PRIOR JOINT INJURY [POST-TRAUMATIC OA; ACL INJURY 30-50% OA AT 10 YEARS; MENISCECTOMY 50% OA 20-30 YEARS; INTRAARTICULAR FRACTURE; DISLOCATIONS; HIGHEST MORBIDITY YOUNG ATHLETES]; OCCUPATIONAL [KNEELING SQUATTING HEAVY LIFTING; MINERS FARMERS FLOOR LAYERS; CUMULATIVE STRESS]; GENETIC [HERITABILITY 40-70%; NODAL OA DISTAL INTERPHALANGEAL; FAMILY HISTORY; GDF5 FRZB SUSCEPTIBILITY GENES]; FEMALE SEX [ESPECIALLY POST-MENOPAUSE; KNEE MORE THAN HIP; ESTROGEN POSSIBLE PROTECTIVE]; HIP DEVELOPMENTAL DYSPLASIA [DDH; ACETABULAR UNDER-COVERAGE; EARLY HIP OA; PERIACETABULAR OSTEOTOMY YOUNG]; MALALIGNMENT [VARUS KNEE = MEDIAL COMPARTMENT OVERLOAD; VALGUS = LATERAL; HIGH TIBIAL OSTEOTOMY HTO YOUNGER PATIENTS]; PERIOPERATIVE RISK ASSESSMENT [FOR ARTHROPLASTY]: BMI ABOVE 40 [SIGNIFICANTLY INCREASED RISK; WOUND COMPLICATIONS; DVT PE; IMPLANT FAILURE; WEIGHT OPTIMIZATION ENCOURAGED; NOT ABSOLUTE CONTRAINDICATION]; DIABETES [HbA1c BELOW 8% TARGET PREOPERATIVE; INFECTION RISK; POOR WOUND HEALING]; CARDIOVASCULAR [PREOPERATIVE CARDIAC CLEARANCE; ECHO IF POOR FUNCTIONAL STATUS]; ANEMIA [Hgb ABOVE 11-12 g/dL PREFERRED; IRON TRANSFUSION IF DEFICIENT]; ANTICOAGULATION [DISCONTINUE WARFARIN 5 DAYS; DOAC 2-5 DAYS; BRIDGING RARELY NEEDED; DISCUSS HEMATOLOGY]; VTE PROPHYLAXIS PLANNED [ASPIRIN RIVAROXABAN ENOXAPARIN; THA HIGHER VTE THAN TKA] | `text` |  |  |  |
| Osteoarthritis of Hip and Knee: Diagnosis, Conservative Management, and Surgical Planning | OA Conservative Treatment and Surgical Planning | `oa_treatment` | OA Conservative Treatment OARSI Guidelines: Core Non-Pharmacologic: Aerobic Exercise Walking Swimming Cycling 150 Min Moderate Weekly; Resistance Quadriceps Strengthening; Aquatic Therapy Pool; Weight Loss 10% If Overweight BMI Above 25; Patient Education Self-Management; PT Occupational; Orthoses Knee Brace Medial Unloader Varus; Lateral Wedge Insole Valgus; Cane Contralateral; Assistive Devices; Pharmacologic First-Line: Topical Diclofenac Voltaren Gel 1% 2% QID Knee; Topical Capsaicin 0.025-0.1%; Acetaminophen 1g TID Less Effective But Safer; Oral NSAIDs Ibuprofen Naproxen Meloxicam Celecoxib 200mg PPI GI Protection; Duloxetine Cymbalta 60-120mg Central Pain; Intraarticular Injections: Corticosteroid Triamcinolone 40mg or Methylprednisolone Max Q3 Months No More Than 4 Per Year; Hyaluronic Acid Viscosupplementation 3-5 Series Weekly Moderate Evidence; PRP Platelet-Rich Plasma Emerging Limited Evidence; Avoid Opioids Chronic OA Modest Benefit High Risk; Surgical: TKA Total Knee Arthroplasty K-L 3-4 Failed Conservative; THA Total Hip Arthroplasty; UKA Unicompartmental Knee Young Active; HTO High Tibial Osteotomy Young Varus Malalignment | `select` |  |  |  |
| Osteoarthritis of Hip and Knee: Diagnosis, Conservative Management, and Surgical Planning | OA Conservative Treatment and Surgical Planning | `oa_notes_detail` | OA Management Plan and Notes: K-L Grade and Joint, Pain Score WOMAC or KOOS, BMI and Weight Loss Goal, Exercise Program Status, Injection History and Date, NSAID Current Dose and GI Protection, Duloxetine If Centralized Pain, Surgical Candidacy Checklist, Preoperative Medical Optimization, Comorbidity Clearance, Coordination Notes | `textarea` |  |  |  |
| Osteoarthritis of Hip and Knee: Diagnosis, Conservative Management, and Surgical Planning | OA Management Notes | `oa_mgmt_notes` | OA Management Notes and Orthopedics Surgery/Rheumatology Conservative/Physical Therapy Exercise Aquatic/Occupational Therapy ADL/Radiology Imaging KL Grade/Anesthesia Preop/Pharmacy NSAID GI/Pain Management/Dietitian Weight/Social Work/Cardiac Preoperative Clearance/Hematology Anticoagulation/Nursing/Coordination Notes | `textarea` |  |  |  |

### Rotator Cuff — `orthopedics_rotator_cuff_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Rotator Cuff Tear and Shoulder Pathology Management | Presentation and Clinical Assessment | `rc_symptoms` | Primary Symptom Presentation | `select` |  |  |  |
| Rotator Cuff Tear and Shoulder Pathology Management | Presentation and Clinical Assessment | `rc_tear_size` | Tear Classification on MRI/Ultrasound | `select` |  |  |  |
| Rotator Cuff Tear and Shoulder Pathology Management | Presentation and Clinical Assessment | `rc_acuity` | Tear Acuity and Chronicity | `select` |  |  |  |
| Rotator Cuff Tear and Shoulder Pathology Management | Presentation and Clinical Assessment | `rc_shoulder_tests` | Physical Examination Findings | `select` |  |  |  |
| Rotator Cuff Tear and Shoulder Pathology Management | Treatment Plan and Rehabilitation | `rc_conservative` | Conservative Treatment Protocol | `select` |  |  |  |
| Rotator Cuff Tear and Shoulder Pathology Management | Treatment Plan and Rehabilitation | `rc_surgical` | Surgical Intervention | `select` |  |  |  |
| Rotator Cuff Tear and Shoulder Pathology Management | Treatment Plan and Rehabilitation | `rc_rehabilitation` | Post-Op Rehabilitation Milestones | `select` |  |  |  |
| Rotator Cuff Tear and Shoulder Pathology Management | Treatment Plan and Rehabilitation | `rc_other_pathology` | Concomitant Shoulder Pathology | `select` |  |  |  |
| Rotator Cuff Tear and Shoulder Pathology Management | Treatment Plan and Rehabilitation | `rc_notes` | Rotator Cuff Management Notes and Orthopedic/PT Care Plan | `textarea` |  |  |  |

### Scoliosis Management — `scoliosis_management_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Scoliosis Management Visit | Patient & Curvature Assessment | `patientId` | Patient | `typeahead` | Y |  |  |
| Scoliosis Management Visit | Patient & Curvature Assessment | `visitDate` | Visit Date | `date` | Y |  |  |
| Scoliosis Management Visit | Patient & Curvature Assessment | `provider` | Orthopedic Spine Surgeon / Pediatrician | `typeahead` | Y |  |  |
| Scoliosis Management Visit | Patient & Curvature Assessment | `scoliosisType` | Scoliosis Type | `select` | Y |  |  |
| Scoliosis Management Visit | Patient & Curvature Assessment | `primaryCobb` | Primary Curve Cobb Angle (degrees) | `number` | Y |  |  |
| Scoliosis Management Visit | Patient & Curvature Assessment | `secondaryCobb` | Secondary / Compensatory Curve Cobb Angle (degrees) | `number` |  |  |  |
| Scoliosis Management Visit | Patient & Curvature Assessment | `curveLocation` | Primary Curve Location (King-Moe) | `select` | Y |  |  |
| Scoliosis Management Visit | Growth Potential Assessment | `risserGrade` | Risser Grade (Skeletal Maturity) | `select` | Y |  |  |
| Scoliosis Management Visit | Growth Potential Assessment | `menarche` | Menstrual Status (if applicable) | `select` | Y |  |  |
| Scoliosis Management Visit | Growth Potential Assessment | `clinicalAssessment` | Clinical Assessment | `textarea` | Y |  |  |
| Scoliosis Management Visit | Treatment Plan | `plan` | Assessment & Treatment Plan | `textarea` | Y |  |  |

### Spine Surgery Pre-Op — `spine_surgery_preop_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Spine Surgery Pre-Op | Diagnosis and Indication | `spinal_level` | Spinal Level | `select` |  |  |  |
| Spine Surgery Pre-Op | Diagnosis and Indication | `primary_diagnosis` | Primary Diagnosis | `select` |  |  |  |
| Spine Surgery Pre-Op | Diagnosis and Indication | `neurological_deficit` | Neurological deficit present | `checkbox` |  |  |  |
| Spine Surgery Pre-Op | Diagnosis and Indication | `cauda_equina` | Cauda equina syndrome (emergency) | `checkbox` |  |  |  |
| Spine Surgery Pre-Op | Procedure Plan | `procedure` | Planned Procedure | `select` |  |  |  |
| Spine Surgery Pre-Op | Procedure Plan | `approach` | Approach | `select` |  |  |  |
| Spine Surgery Pre-Op | Procedure Plan | `instrumentation` | Instrumentation/hardware planned | `checkbox` |  |  |  |
| Spine Surgery Pre-Op | Procedure Plan | `bone_graft` | Bone Graft Type (if fusion) | `select` |  |  |  |
| Spine Surgery Pre-Op | Pre-Op Checklist | `mri_reviewed` | MRI reviewed and correlates with clinical exam | `checkbox` |  |  |  |
| Spine Surgery Pre-Op | Pre-Op Checklist | `smoking_cessation` | Smoking cessation counseled (if applicable) | `checkbox` |  |  |  |
| Spine Surgery Pre-Op | Pre-Op Checklist | `bone_density_ok` | Bone density adequate for instrumentation (or N/A) | `checkbox` |  |  |  |
| Spine Surgery Pre-Op | Pre-Op Checklist | `consent_signed` | Informed consent obtained | `checkbox` |  |  |  |
| Spine Surgery Pre-Op | Pre-Op Checklist | `notes` | Notes | `textarea` |  |  |  |

### Total Knee Arthroplasty (TKA) — `orthopedics_total_knee_arthroplasty_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| TKA — Preoperative Optimization, Technique, and Rehabilitation | Preoperative Assessment and Optimization | `preop_eval` | Preoperative Optimization for TKA (INDICATIONS: end-stage knee OA with pain refractory to conservative therapy (weight loss, PT, NSAIDs, corticosteroid or hyaluronic acid injections, bracing); radiographic evidence (severe joint space narrowing, varus/valgus deformity); RELATIVE CONTRAINDICATIONS: active infection (any site), neuropathic joint, BMI >40 (relative; functional limitation + increased complications), severe CV disease (risk:benefit), peripheral vascular disease (wound healing); PREOP OPTIMIZATION: BMI: target <40 (ideally <35); weight loss reduces complications; HbA1c <7.5-8.0% (infection risk; DM patients); hemoglobin >=12 g/dL: iron supplementation; treat pre-op anemia; blood pressure control; smoking cessation >=4-6 weeks pre-op; dental clearance (infection source); PREOP EDUCATION: patient expectations; realistic outcomes; recovery timeline; ENHANCED RECOVERY AFTER SURGERY (ERAS): multimodal protocol; carbohydrate loading pre-op; minimizing nil-by-mouth; accelerated mobility; nurse navigator) | `text` |  |  |  |
| TKA — Preoperative Optimization, Technique, and Rehabilitation | Preoperative Assessment and Optimization | `surgical_technique` | Surgical Technique and Implant Selection | `select` |  |  |  |
| TKA — Preoperative Optimization, Technique, and Rehabilitation | Perioperative Pain and Rehabilitation | `multimodal_pain` | Multimodal Pain Management Protocol (SPINAL vs. GENERAL: spinal anesthesia preferred for TKA (reduced blood loss, DVT, nausea, mortality (REGAIN data)); REGIONAL: adductor canal block (ACB): replaces femoral nerve block; preserves quadriceps (fall risk); ACB + IPACK (interspace between popliteal artery and posterior capsule of knee): posterior coverage; MEDICATIONS: celecoxib 400 mg preoperative; acetaminophen 1 g Q6h (scheduled); ketorolac 15-30 mg Q6h x24-48h; opioids: PRN only; tramadol avoided (elderly, seizure risk); gabapentin (300 mg TID): reduces opioid requirements; dexamethasone 8-10 mg intraoperative (anti-inflammatory + antiemetic + extends nerve block); WOUND INFILTRATION: local infiltrate analgesia (LIA): bupivacaine + epinephrine + ketorolac + morphine into capsule + soft tissue; TRANEXAMIC ACID: 1 g IV preoperative + 1 g IV at wound closure; reduces blood loss 40%; now topical option; anti-fibrinolytic; VTE PROPHYLAXIS: aspirin 325 mg BID x4 weeks (RCAT); or rivaroxaban 10 mg QD x5 weeks; no superiority of anticoagulants over aspirin in low-risk (PEPPER trial) | `text` |  |  |  |
| TKA — Preoperative Optimization, Technique, and Rehabilitation | Perioperative Pain and Rehabilitation | `rehabilitation` | TKA Rehabilitation and Outcomes | `select` |  |  |  |

## Transplant Medicine

### Immunosuppression Mgmt — `transplant_medication_management_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Transplant Immunosuppression Management | Current Immunosuppression Regimen | `calcineurin_inhibitor` | Calcineurin Inhibitor (CNI) | `select` |  |  |  |
| Transplant Immunosuppression Management | Current Immunosuppression Regimen | `cni_dose` | CNI Dose and Target Trough (ng/mL) | `text` |  |  |  |
| Transplant Immunosuppression Management | Current Immunosuppression Regimen | `antimetabolite` | Antimetabolite | `select` |  |  |  |
| Transplant Immunosuppression Management | Current Immunosuppression Regimen | `steroid` | Steroid | `select` |  |  |  |
| Transplant Immunosuppression Management | Current Immunosuppression Regimen | `mtor_inhibitor` | mTOR Inhibitor (if applicable) | `select` |  |  |  |
| Transplant Immunosuppression Management | Toxicity and Monitoring | `cni_nephrotoxicity` | CNI nephrotoxicity suspected (rising Cr with adequate trough) | `checkbox` |  |  |  |
| Transplant Immunosuppression Management | Toxicity and Monitoring | `new_onset_diabetes` | New-onset diabetes after transplant (NODAT) | `checkbox` |  |  |  |
| Transplant Immunosuppression Management | Toxicity and Monitoring | `hypertension` | Post-transplant hypertension requiring treatment | `checkbox` |  |  |  |
| Transplant Immunosuppression Management | Toxicity and Monitoring | `hyperlipidemia` | Statin prescribed for post-transplant dyslipidemia | `checkbox` |  |  |  |
| Transplant Immunosuppression Management | Toxicity and Monitoring | `infection_prophylaxis` | Active Infection Prophylaxis (TMP-SMX, antifungal, antiviral) | `textarea` |  |  |  |
| Transplant Immunosuppression Management | Dose Adjustment Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Kidney Transplant — `transplant_kidney_cf`

Screen: 1 page(s) · 5 section(s) · 30 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Kidney Transplant Follow-Up | Transplant Overview | `ktx_transplant_date` | Kidney Transplant Date | `date` |  |  |  |
| Kidney Transplant Follow-Up | Transplant Overview | `ktx_time_post_transplant` | Time Post-Transplant | `select` |  |  |  |
| Kidney Transplant Follow-Up | Transplant Overview | `ktx_donor_type` | Donor Type | `select` |  |  |  |
| Kidney Transplant Follow-Up | Transplant Overview | `ktx_original_disease` | Original Kidney Disease (reason for transplant) | `text` |  |  |  |
| Kidney Transplant Follow-Up | Transplant Overview | `ktx_prior_transplants` | Number of Prior Kidney Transplants | `number` |  |  |  |
| Kidney Transplant Follow-Up | Allograft Function | `ktx_egfr` | Current eGFR (mL/min/1.73m2) | `number` |  |  |  |
| Kidney Transplant Follow-Up | Allograft Function | `ktx_creatinine` | Serum Creatinine (mg/dL) | `number` |  |  |  |
| Kidney Transplant Follow-Up | Allograft Function | `ktx_upcr` | UPCR (g/g) - proteinuria assessment | `number` |  |  |  |
| Kidney Transplant Follow-Up | Allograft Function | `ktx_function_trend` | Allograft Function Trend | `select` |  |  |  |
| Kidney Transplant Follow-Up | Allograft Function | `ktx_biopsy` | Most Recent Allograft Biopsy | `select` |  |  |  |
| Kidney Transplant Follow-Up | Allograft Function | `ktx_dsa` | Donor-Specific Antibodies (DSA) | `select` |  |  |  |
| Kidney Transplant Follow-Up | Immunosuppression Regimen | `ktx_tacrolimus_dose` | Tacrolimus Daily Dose (mg) | `number` |  |  |  |
| Kidney Transplant Follow-Up | Immunosuppression Regimen | `ktx_tacrolimus_trough` | Tacrolimus Trough Level (ng/mL) | `number` |  |  |  |
| Kidney Transplant Follow-Up | Immunosuppression Regimen | `ktx_tacrolimus_target` | Tacrolimus Target Range | `select` |  |  |  |
| Kidney Transplant Follow-Up | Immunosuppression Regimen | `ktx_mycophenolate_dose` | Mycophenolate Dose (mg/day) - MMF or EC-MPS | `number` |  |  |  |
| Kidney Transplant Follow-Up | Immunosuppression Regimen | `ktx_prednisone_dose` | Prednisone Dose (mg/day) | `number` |  |  |  |
| Kidney Transplant Follow-Up | Immunosuppression Regimen | `ktx_steroid_free` | Steroid-Free Protocol | `select` |  |  |  |
| Kidney Transplant Follow-Up | Immunosuppression Regimen | `ktx_belatacept` | Belatacept (Nulojix - costimulation blocker) | `select` |  |  |  |
| Kidney Transplant Follow-Up | Immunosuppression Regimen | `ktx_cnsi_toxicity` | CNI Toxicity Monitoring (nephrotoxicity, neurotoxicity, diabetes, hypertension, dyslipidemia) | `textarea` |  |  |  |
| Kidney Transplant Follow-Up | Infection Surveillance | `ktx_cmv_status` | CMV Serostatus (D/R) | `select` |  |  |  |
| Kidney Transplant Follow-Up | Infection Surveillance | `ktx_cmv_surveillance` | CMV Surveillance / Prophylaxis | `select` |  |  |  |
| Kidney Transplant Follow-Up | Infection Surveillance | `ktx_cmv_pcr` | CMV PCR (IU/mL) - viremia level | `number` |  |  |  |
| Kidney Transplant Follow-Up | Infection Surveillance | `ktx_bk_pcr` | BK Polyomavirus PCR (copies/mL) | `number` |  |  |  |
| Kidney Transplant Follow-Up | Infection Surveillance | `ktx_bk_management` | BK Viremia Management | `select` |  |  |  |
| Kidney Transplant Follow-Up | Infection Surveillance | `ktx_pcp_prophylaxis` | PCP Prophylaxis | `select` |  |  |  |
| Kidney Transplant Follow-Up | Infection Surveillance | `ktx_post_transplant_cancer` | Post-Transplant Cancer Surveillance (PTLD, skin cancer - annual derm, NMSC, Kaposi) | `textarea` |  |  |  |
| Kidney Transplant Follow-Up | Metabolic and Cardiovascular Complications | `ktx_nodat` | New-Onset Diabetes After Transplant (NODAT) | `select` |  |  |  |
| Kidney Transplant Follow-Up | Metabolic and Cardiovascular Complications | `ktx_hypertension` | Post-Transplant Hypertension | `select` |  |  |  |
| Kidney Transplant Follow-Up | Metabolic and Cardiovascular Complications | `ktx_dyslipidemia` | Dyslipidemia (CNI and steroid effect) | `select` |  |  |  |
| Kidney Transplant Follow-Up | Metabolic and Cardiovascular Complications | `ktx_notes` | Additional Notes | `textarea` |  |  |  |

### Kidney Transplant F/U — `kidney_transplant_visit_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Kidney Transplant Follow-Up | Allograft Function | `post_tx_years` | Years Post-Transplant | `number` |  |  |  |
| Kidney Transplant Follow-Up | Allograft Function | `creatinine` | Serum Creatinine (mg/dL) | `number` |  |  |  |
| Kidney Transplant Follow-Up | Allograft Function | `egfr` | eGFR (mL/min/1.73m²) | `number` |  |  |  |
| Kidney Transplant Follow-Up | Allograft Function | `bun` | BUN (mg/dL) | `number` |  |  |  |
| Kidney Transplant Follow-Up | Allograft Function | `proteinuria` | Urine Protein:Creatinine Ratio | `number` |  |  |  |
| Kidney Transplant Follow-Up | Allograft Function | `tacrolimus_level` | Tacrolimus Trough Level (ng/mL) | `number` |  |  |  |
| Kidney Transplant Follow-Up | Allograft Function | `mycophenolate_dose` | Mycophenolate Dose (mg twice daily) | `text` |  |  |  |
| Kidney Transplant Follow-Up | Rejection / Complication Surveillance | `dsa_detected` | Donor-Specific Antibodies (DSA) detected | `checkbox` |  |  |  |
| Kidney Transplant Follow-Up | Rejection / Complication Surveillance | `dsa_mfi` | Peak DSA MFI (if detected) | `number` |  |  |  |
| Kidney Transplant Follow-Up | Rejection / Complication Surveillance | `biopsy_ordered` | Protocol or for-cause biopsy ordered | `checkbox` |  |  |  |
| Kidney Transplant Follow-Up | Rejection / Complication Surveillance | `rejection_type` | Rejection Episode (if applicable) | `select` |  |  |  |
| Kidney Transplant Follow-Up | Rejection / Complication Surveillance | `ckd_stage` | Transplant CKD Stage | `select` |  |  |  |
| Kidney Transplant Follow-Up | Infection and Cancer Surveillance | `cmv_status` | CMV Status | `select` |  |  |  |
| Kidney Transplant Follow-Up | Infection and Cancer Surveillance | `bk_virus` | BK Virus Status | `select` |  |  |  |
| Kidney Transplant Follow-Up | Infection and Cancer Surveillance | `skin_cancer_screen` | Annual dermatology skin cancer screen (SCC risk × 65–250× baseline) | `checkbox` |  |  |  |
| Kidney Transplant Follow-Up | Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Kidney Transplant Rejection / BK — `transplant_medicine_kidney_rejection_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Kidney Transplant — Rejection, DSA, Immunosuppression, and BK Virus | Rejection Classification and Diagnosis | `rejection_types` | Rejection Types and Banff Classification (BANFF CLASSIFICATION 2022: biopsy-based rejection diagnosis; HYPERACUTE: within hours; preformed antibodies; rare with modern crossmatch; ACUTE CELLULAR REJECTION (ACR): lymphocyte-mediated; T-cell driven; BANFF GRADES: Grade IA (mild: tubulitis + interstitial infiltrate); Grade IB (moderate: more severe tubulitis); Grade IIA (arteritis mild); Grade IIB (arteritis severe); Grade III (transmural arteritis); ANTIBODY-MEDIATED REJECTION (AMR): DSA (donor-specific antibodies); C4d deposition on peritubular capillaries (microvascular inflammation); ACUTE AMR (aAMR): <3 months post-transplant; graft loss risk; CHRONIC AMR (cAMR): >3 months; transplant glomerulopathy; GFR decline; SUBCLINICAL: biopsy proven without Cr change; affects long-term outcomes; BORDERLINE: tubulitis without sufficient interstitial infiltrate; treat as borderline/mild ACR; DIAGNOSIS: biopsy (WHEN: unexplained creatinine rise >=25% or proteinuria); DSA (HLA antibodies by single antigen bead Luminex); C4d; dd-cfDNA (donor-derived cell-free DNA): rising = rejection + injury; non-invasive biomarker emerging; SURVEILLANCE BIOPSIES: 1-month, 6-month, and 1-year protocol biopsies (center-specific) | `text` |  |  |  |
| Kidney Transplant — Rejection, DSA, Immunosuppression, and BK Virus | Rejection Classification and Diagnosis | `rejection_treatment` | Rejection Treatment Protocol | `select` |  |  |  |
| Kidney Transplant — Rejection, DSA, Immunosuppression, and BK Virus | Immunosuppression Management and BK Virus | `maintenance_is` | Maintenance Immunosuppression Protocol (TRIPLE THERAPY STANDARD: CALCINEURIN INHIBITOR (CNI): tacrolimus (FK506): preferred (superior to cyclosporine; SYMPHONY trial); target troughs: 8-12 ng/mL (0-6 months); 6-10 ng/mL (6-12 months); 4-8 ng/mL (>12 months); ANTI-METABOLITE: mycophenolate mofetil (MMF): 1-1.5g BID (standard); converts to mycophenolic acid; inhibits inosine monophosphate dehydrogenase → T/B cell inhibition; CORTICOSTEROIDS: prednisone 5-10 mg QD maintenance; steroid-withdrawal trials: mixed results; CALCINEURIN INHIBITOR TOXICITIES: nephrotoxicity (tubular toxicity, TMA); hypertension; metabolic syndrome; diabetes (PTDM - post-transplant diabetes); neurotoxicity (tremor, headache, PRES); drug interactions (CYP3A4: azoles, macrolides, CCBs, PPIs increase levels; rifampin, AEDs decrease levels); CNI MINIMIZATION: switching to belatacept (BENEFIT trial); improved eGFR; higher rejection rate; limit to low-immunological risk patients; mTOR INHIBITORS (sirolimus, everolimus): reduced nephrotoxicity; used as CNI-sparing; delayed wound healing; hyperlipidemia; pneumonitis; poor tolerance; BELATACEPT (Nulojix): CTLA4-Ig; blocks T-cell costimulation; IV monthly; preserves renal function; monitoring for PTLD (post-transplant lymphoproliferative disease) | `text` |  |  |  |
| Kidney Transplant — Rejection, DSA, Immunosuppression, and BK Virus | Immunosuppression Management and BK Virus | `bk_virus` | BK Virus Nephropathy Management | `select` |  |  |  |

### Liver Transplant — `transplant_liver_cf`

Screen: 1 page(s) · 4 section(s) · 25 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Liver Transplant Follow-Up | Transplant Overview | `ltx_transplant_date` | Liver Transplant Date | `date` |  |  |  |
| Liver Transplant Follow-Up | Transplant Overview | `ltx_indication` | Transplant Indication | `select` |  |  |  |
| Liver Transplant Follow-Up | Transplant Overview | `ltx_donor_type` | Donor Type | `select` |  |  |  |
| Liver Transplant Follow-Up | Transplant Overview | `ltx_meld_at_listing` | MELD Score at Listing | `number` |  |  |  |
| Liver Transplant Follow-Up | Transplant Overview | `ltx_meld_na_at_transplant` | MELD-Na Score at Transplant | `number` |  |  |  |
| Liver Transplant Follow-Up | Allograft Function | `ltx_ast` | AST (IU/L) | `number` |  |  |  |
| Liver Transplant Follow-Up | Allograft Function | `ltx_alt` | ALT (IU/L) | `number` |  |  |  |
| Liver Transplant Follow-Up | Allograft Function | `ltx_alkphos` | Alkaline Phosphatase (IU/L) | `number` |  |  |  |
| Liver Transplant Follow-Up | Allograft Function | `ltx_bilirubin` | Total Bilirubin (mg/dL) | `number` |  |  |  |
| Liver Transplant Follow-Up | Allograft Function | `ltx_inr` | INR | `number` |  |  |  |
| Liver Transplant Follow-Up | Allograft Function | `ltx_function_status` | Graft Function Status | `select` |  |  |  |
| Liver Transplant Follow-Up | Allograft Function | `ltx_biopsy_result` | Allograft Biopsy Result | `select` |  |  |  |
| Liver Transplant Follow-Up | Allograft Function | `ltx_rejection_treatment` | Rejection Treatment | `select` |  |  |  |
| Liver Transplant Follow-Up | Immunosuppression | `ltx_tacrolimus_dose` | Tacrolimus Daily Dose (mg) | `number` |  |  |  |
| Liver Transplant Follow-Up | Immunosuppression | `ltx_tacrolimus_trough` | Tacrolimus Trough Level (ng/mL) | `number` |  |  |  |
| Liver Transplant Follow-Up | Immunosuppression | `ltx_tacrolimus_target` | Tacrolimus Target Range (liver) | `select` |  |  |  |
| Liver Transplant Follow-Up | Immunosuppression | `ltx_mycophenolate` | Mycophenolate | `select` |  |  |  |
| Liver Transplant Follow-Up | Immunosuppression | `ltx_prednisone` | Prednisone | `select` |  |  |  |
| Liver Transplant Follow-Up | Immunosuppression | `ltx_hbv_prophylaxis` | HBV Prophylaxis (HBsAg+ donor or recipient) | `select` |  |  |  |
| Liver Transplant Follow-Up | Complications and Surveillance | `ltx_hcc_surveillance` | HCC Recurrence Surveillance | `select` |  |  |  |
| Liver Transplant Follow-Up | Complications and Surveillance | `ltx_biliary_complication` | Biliary Complications | `select` |  |  |  |
| Liver Transplant Follow-Up | Complications and Surveillance | `ltx_vascular` | Vascular Complications | `select` |  |  |  |
| Liver Transplant Follow-Up | Complications and Surveillance | `ltx_alcohol_surveillance` | Alcohol Relapse Surveillance (if prior ALD) | `select` |  |  |  |
| Liver Transplant Follow-Up | Complications and Surveillance | `ltx_metabolic_syndrome` | Post-Transplant Metabolic Syndrome (PTMS) - new-onset diabetes, hypertension, dyslipidemia, obesity (calcineurin inhibitors) | `textarea` |  |  |  |
| Liver Transplant Follow-Up | Complications and Surveillance | `ltx_notes` | Additional Notes | `textarea` |  |  |  |

### Liver Transplant F/U — `liver_transplant_visit_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Liver Transplant Follow-Up | Liver Allograft Function | `post_tx_years` | Years Post-Transplant | `number` |  |  |  |
| Liver Transplant Follow-Up | Liver Allograft Function | `ast` | AST (U/L) | `number` |  |  |  |
| Liver Transplant Follow-Up | Liver Allograft Function | `alt` | ALT (U/L) | `number` |  |  |  |
| Liver Transplant Follow-Up | Liver Allograft Function | `alkphos` | Alk Phos (U/L) | `number` |  |  |  |
| Liver Transplant Follow-Up | Liver Allograft Function | `tbili` | Total Bilirubin (mg/dL) | `number` |  |  |  |
| Liver Transplant Follow-Up | Liver Allograft Function | `inr` | INR (synthetic function) | `number` |  |  |  |
| Liver Transplant Follow-Up | Liver Allograft Function | `tacrolimus` | Tacrolimus Trough (ng/mL) | `number` |  |  |  |
| Liver Transplant Follow-Up | Rejection and Complications | `rejection_type` | Rejection Episode (if applicable) | `select` |  |  |  |
| Liver Transplant Follow-Up | Rejection and Complications | `recurrent_disease` | Recurrent Primary Disease | `select` |  |  |  |
| Liver Transplant Follow-Up | Rejection and Complications | `biliary_stricture` | Biliary stricture suspected (elevated Alk Phos / bili) | `checkbox` |  |  |  |
| Liver Transplant Follow-Up | Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Solid Organ Transplant (Rejection) — `transplant_medicine_solid_organ_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Solid Organ Transplant — Rejection, Immunosuppression, and Infection | Rejection Classification and Treatment | `rejection_types` | Rejection Classification | `select` |  |  |  |
| Solid Organ Transplant — Rejection, Immunosuppression, and Infection | Rejection Classification and Treatment | `maintenance_is` | Maintenance Immunosuppression (triple therapy: calcineurin inhibitor (CNI) + antimetabolite + steroid; tacrolimus (FK506): target trough 5-8 ng/mL (late); nephrotoxic (chronic); neurotoxic; DM (NODAT); hair loss; cyclosporine: less common now; mycophenolate mofetil (MMF) 1-1.5g BID: antiproliferative, GI side effects (switch to EC-MPS); azathioprine: less common, risk of SCC; prednisone 5 mg/day maintenance (steroid-sparing protocols: steroid withdrawal at 3-6 months); mTOR inhibitors (sirolimus, everolimus): antiproliferative, less nephrotoxic but wound healing issues, dyslipidemia, thrombocytopenia; used in CNI reduction) | `text` |  |  |  |
| Solid Organ Transplant — Rejection, Immunosuppression, and Infection | Post-Transplant Infection Prophylaxis | `cmv` | CMV Prophylaxis and Treatment | `select` |  |  |  |

### Transplant ID Visit — `transplant_infectious_disease_cf`

Screen: 1 page(s) · 4 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Post-Transplant Infectious Disease Visit | Infection Timeline | `months_post_tx` | Months Post-Transplant | `number` |  |  |  |
| Post-Transplant Infectious Disease Visit | Infection Timeline | `infection_timeline_category` | Infection Risk Period | `select` |  |  |  |
| Post-Transplant Infectious Disease Visit | Specific Infections Under Evaluation | `cmv_dna` | CMV Quantitative PCR (copies/mL or IU/mL) | `text` |  |  |  |
| Post-Transplant Infectious Disease Visit | Specific Infections Under Evaluation | `ebv_dna` | EBV Quantitative PCR (risk for PTLD) | `text` |  |  |  |
| Post-Transplant Infectious Disease Visit | Specific Infections Under Evaluation | `pjp_prophylaxis` | PJP prophylaxis (TMP-SMX / atovaquone) current | `checkbox` |  |  |  |
| Post-Transplant Infectious Disease Visit | Specific Infections Under Evaluation | `fungal_prophylaxis` | Antifungal prophylaxis current (fluconazole / micafungin) | `checkbox` |  |  |  |
| Post-Transplant Infectious Disease Visit | Specific Infections Under Evaluation | `active_infection` | Active Infection Under Treatment (organism, drug, duration) | `textarea` |  |  |  |
| Post-Transplant Infectious Disease Visit | Vaccine Review | `influenza_current` | Annual inactivated influenza vaccine administered | `checkbox` |  |  |  |
| Post-Transplant Infectious Disease Visit | Vaccine Review | `covid_booster` | COVID-19 booster(s) up to date | `checkbox` |  |  |  |
| Post-Transplant Infectious Disease Visit | Vaccine Review | `pneumovax_ppsv23` | PPSV23 (pneumonia) given (no live vaccines ≥2 mos post-tx) | `checkbox` |  |  |  |
| Post-Transplant Infectious Disease Visit | Vaccine Review | `live_vaccines_contraindicated` | Live vaccines CONTRAINDICATED — documented and communicated | `checkbox` |  |  |  |
| Post-Transplant Infectious Disease Visit | Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Transplant Immunosuppression — `transplant_solid_organ_immunosuppression_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Solid Organ Transplant — Immunosuppression Management | Maintenance Immunosuppression | `is_regimen` | Maintenance IS Regimen | `select` |  |  |  |
| Solid Organ Transplant — Immunosuppression Management | Maintenance Immunosuppression | `rejection_episode` | Rejection Episode Management | `select` |  |  |  |
| Solid Organ Transplant — Immunosuppression Management | Common Post-Transplant Complications | `infection_prophylaxis` | Infection Prophylaxis Protocol (TMP-SMX for PCP (6-12 months); valganciclovir for CMV D+/R- (6 months); CMV D+/R+ or R-/R- (3 months or D/PCR-guided); fluconazole or micafungin for Candida; isoniazid if LTBI positive; avoid live vaccines; VZV immune → vaccinate pretransplant if time allows; influenza yearly) | `text` |  |  |  |
| Solid Organ Transplant — Immunosuppression Management | Common Post-Transplant Complications | `malignancy_screening` | Post-Transplant Malignancy Screening (NMSC most common — annual derm exam; reduce CNI + switch to mTOR (sirolimus) for high NMSC risk; PTLD: EBV surveillance by PCR; annual colonoscopy after 10 years immunosuppression; PSA, mammogram, pap per standard guidelines; uterine/cervical cancer elevated risk — more frequent gynecologic surveillance) | `text` |  |  |  |

### Waitlist Evaluation — `transplant_waitlist_evaluation_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Transplant Waitlist Evaluation | Transplant Candidacy Assessment | `organ` | Organ Requested | `select` |  |  |  |
| Transplant Waitlist Evaluation | Transplant Candidacy Assessment | `primary_disease` | Primary Disease / Indication for Transplant | `text` |  |  |  |
| Transplant Waitlist Evaluation | Transplant Candidacy Assessment | `meld_score` | MELD-Na Score (liver, 6-40) | `number` |  |  |  |
| Transplant Waitlist Evaluation | Transplant Candidacy Assessment | `egfr_current` | Current eGFR (kidney) | `number` |  |  |  |
| Transplant Waitlist Evaluation | Transplant Candidacy Assessment | `pra_level` | Panel Reactive Antibody % (PRA / cPRA) | `number` |  |  |  |
| Transplant Waitlist Evaluation | Pre-Transplant Workup Status | `cardiac_clearance` | Cardiac clearance obtained (stress test / cath) | `checkbox` |  |  |  |
| Transplant Waitlist Evaluation | Pre-Transplant Workup Status | `cancer_screening` | Cancer screening complete (colon / breast / cervical / skin) | `checkbox` |  |  |  |
| Transplant Waitlist Evaluation | Pre-Transplant Workup Status | `infectious_clearance` | Infectious disease clearance (HIV / HBV / HCV / CMV / EBV) | `checkbox` |  |  |  |
| Transplant Waitlist Evaluation | Pre-Transplant Workup Status | `social_work_cleared` | Social work / adherence evaluation cleared | `checkbox` |  |  |  |
| Transplant Waitlist Evaluation | Pre-Transplant Workup Status | `psychiatric_clearance` | Psychiatric evaluation cleared (if required) | `checkbox` |  |  |  |
| Transplant Waitlist Evaluation | Pre-Transplant Workup Status | `financial_clearance` | Financial / insurance clearance completed | `checkbox` |  |  |  |
| Transplant Waitlist Evaluation | Listing Decision | `listing_status` | Listing Decision | `select` |  |  |  |
| Transplant Waitlist Evaluation | Listing Decision | `contraindications` | Contraindications Identified / Concerns | `textarea` |  |  |  |
| Transplant Waitlist Evaluation | Listing Decision | `notes` | Assessment and Plan | `textarea` |  |  |  |

## Vascular Surgery

### AAA (Aortic Aneurysm) — `vascular_surgery_aaa_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Abdominal Aortic Aneurysm — Screening, Repair, and Surveillance | AAA Screening and Risk Stratification | `screening_criteria` | USPSTF AAA Screening Guidelines (2019 USPSTF: one-time ultrasound screening for men aged 65-75 years who have EVER smoked (>=100 cigarettes lifetime); B recommendation; women: USPSTF: insufficient evidence for screening; SVS 2018: consider screening for: women 65-75 with smoking history, family history 1st-degree relative with AAA, men/women 55+ with 1st-degree relative with AAA; CT angiography for sizing + planning if AAA found on US; abdominal aorta: diameter >=3 cm = AAA; 3.0-3.9 cm = small; 4.0-5.4 cm = medium; >=5.5 cm = large (surgical threshold); rupture risk: 5 cm = 25% 5-year; 7 cm = 50% annual; rapid expansion >0.5 cm in 6 months = repair regardless of size) | `text` |  |  |  |
| Abdominal Aortic Aneurysm — Screening, Repair, and Surveillance | AAA Screening and Risk Stratification | `surveillance` | Surveillance Protocol and Medical Management | `select` |  |  |  |
| Abdominal Aortic Aneurysm — Screening, Repair, and Surveillance | Surgical Repair — EVAR vs. Open | `evar_criteria` | EVAR vs. Open Repair Selection (EVAR indications: >=5.5 cm + suitable anatomy; anatomy: adequate landing zones (infrarenal neck length >=15 mm, diameter 18-32 mm, angulation <60 degrees), access vessels (minimum 6-7 mm iliac arteries); DREAM + EVAR1 trials: 30-day mortality lower with EVAR (1.2% vs. 4.6% open); long-term 6-year: similar overall survival; EVAR reinterventions higher (12-15% at 5 years vs. 3%); TYPE II endoleak: from IMA or lumbar arteries; most benign; TYPE I/III endoleak: high pressure — require reintervention; open repair: better long-term durability; preferred if: hostile iliac anatomy, young patient (<65), connective tissue disease, inflammatory AAA, renal failure) | `text` |  |  |  |
| Abdominal Aortic Aneurysm — Screening, Repair, and Surveillance | Surgical Repair — EVAR vs. Open | `ruptured_aaa` | Ruptured AAA Management | `select` |  |  |  |

### Aortic Aneurysm and Dissection — `vascular_surgery_aortic_aneurysm_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| AAA, TAA, Aortic Dissection — Screening, Sizing Thresholds, EVAR/Open, and Emergency Management | Abdominal Aortic Aneurysm: Screening, Surveillance, and Repair | `aaa_overview` | AAA Definition (>3 cm Infrarenal Aorta), USPSTF One-Time Ultrasound Screening (Men 65-75 Ever-Smokers), and Surveillance Intervals by Size (AAA: DEFINITION: INFRARENAL AORTA DIAMETER >3 cm (or >1.5x normal diameter of suprarenal aorta); most AAA are infrarenal (70%); JUXTARENAL: involves visceral vessels; SUPRARENAL: above renals; EPIDEMIOLOGY: 1-3% men >60; 4:1 male predominance; RISK FACTORS: SMOKING (strongest; RR 5); AGE; MALE; FAMILY HISTORY (first-degree relative RR 2-5); HYPERTENSION; ATHEROSCLEROSIS; COPD; MARFAN/EHLERS-DANLOS (genetic); PROTECTIVE: FEMALE GENDER; DIABETES (paradoxical; less aneurysm formation); PATHOGENESIS: PROTEOLYTIC DEGRADATION of aortic wall (MMP-1; MMP-9); INFLAMMATION; elastin degradation; medial degeneration; RUPTURE RISK: ANNUAL RUPTURE RISK: <5 cm: <1% per year; 5-6 cm: 3-15%; >6 cm: 10-20%; RUPTURE MORTALITY: IN-HOSPITAL 80-90%; EMERGENT REPAIR MORTALITY 50%; SCREENING: USPSTF RECOMMENDATION (2014): ONE-TIME ABDOMINAL ULTRASOUND; MEN 65-75 YEARS who have EVER SMOKED (>=100 cigarettes lifetime); GRADE B RECOMMENDATION; NOT routinely recommended for WOMEN (benefit less clear; prevalence lower); FAMILY HISTORY: screen male first-degree relatives 55+ years (guidelines vary); SURVEILLANCE INTERVALS (ACC/AHA 2022): 2.5-2.9 cm: every 10 years; 3.0-3.4 cm: every 3 years; 3.5-4.4 cm: every 12 months; 4.5-5.4 cm: every 6 months; >=5.5 cm OR expanding >0.5 cm in 6 months: REPAIR THRESHOLD; MEDICAL MANAGEMENT: SMOKING CESSATION (most important to slow expansion); BLOOD PRESSURE CONTROL (target <130/80); STATIN THERAPY (reduces inflammation; pleiotropic); BETA BLOCKERS: no proven benefit in expansion; DOXYCYCLINE: MMP inhibitor; trials inconclusive; ASPIRIN: antiplatelet | `text` |  |  |  |
| AAA, TAA, Aortic Dissection — Screening, Sizing Thresholds, EVAR/Open, and Emergency Management | Abdominal Aortic Aneurysm: Screening, Surveillance, and Repair | `aaa_repair` | EVAR vs. Open Surgical Repair: Size Thresholds (5.5 cm Men, 5.0-5.2 cm Women), DREAM/OVER/ACE Trials Long-Term Outcomes, and EVAR Anatomical Requirements | `select` |  |  |  |
| AAA, TAA, Aortic Dissection — Screening, Sizing Thresholds, EVAR/Open, and Emergency Management | Thoracic Aortic Aneurysm and Aortic Dissection | `taa_overview` | Thoracic Aortic Aneurysm Size Thresholds for Repair (Ascending 5.5 cm, Descending 6.0 cm, Bicuspid Aortic Valve 5.0-5.5 cm, Marfan 5.0 cm), and Loeys-Dietz/Ehlers-Danlos Genetic Aortopathies (THORACIC AORTIC ANEURYSM (TAA): CLASSIFICATION: ASCENDING AORTA (most common; 60%); AORTIC ARCH; DESCENDING THORACIC; THORACOABDOMINAL; RISK FACTORS: BICUSPID AORTIC VALVE (BAV): most common associated cardiac defect; TAA in 30-70% BAV; coexisting CoA; GENETICS: MARFAN SYNDROME (FBN1 mutation; tall; lens subluxation; dural ectasia; arachnodactyly); LOEYS-DIETZ SYNDROME (TGFBR1/2; AGGRESSIVE expansion; early surgery lower threshold); EHLERS-DANLOS SYNDROME TYPE IV (COL3A1; intestinal + uterine rupture; poor tissue healing; surgical risk HIGH); VASCULAR EDS: AVOID AGGRESSIVE REPAIR if possible; FAMILIAL THORACIC AORTIC ANEURYSM AND DISSECTION (FTAAD); INFLAMMATORY: GIANT CELL ARTERITIS; TAKAYASU; SYPHILIS (old); HTLV-1; INFECTION (MYCOTIC ANEURYSM); DIAGNOSIS: CT ANGIOGRAPHY: gold standard for planning; MRI/MRA: no radiation; good soft tissue; ECHOCARDIOGRAPHY: ascending aorta surveillance (TTE for sinus of Valsalva); REPAIR THRESHOLDS (ACC/AHA): ASCENDING AORTA: >=5.5 cm (general); >=5.0 cm (Marfan; BAV with additional risk); >=4.5 cm (Marfan with rapid growth or family history of dissection); DESCENDING THORACIC: >=6.0 cm (open surgery); >=5.5 cm (TEVAR); LOEYS-DIETZ: >=4.2 cm internal diameter at sinuses; lower thresholds; SURGERY: ASCENDING + ARCH: OPEN SURGERY (require cardiopulmonary bypass; deep hypothermic circulatory arrest for arch); DESCENDING: TEVAR (thoracic endovascular repair) preferred if anatomy suitable; SPINAL CORD PROTECTION: CSF DRAINAGE (reduces paraplegia risk); staged repair; left heart bypass; SURVEILLANCE: TTE annually for ascending; CT/MRA annually for descending; RATE OF EXPANSION: >5 mm/year = accelerated; consider earlier repair | `text` |  |  |  |
| AAA, TAA, Aortic Dissection — Screening, Sizing Thresholds, EVAR/Open, and Emergency Management | Thoracic Aortic Aneurysm and Aortic Dissection | `aortic_dissection_management` | Aortic Dissection Stanford A (Involves Ascending - URGENT SURGERY) vs. Type B (Descending Only - Medical First), DeBakey Classification, and Complicated Type B TEVAR Indications | `select` |  |  |  |

### CLTI / PAD Wound — `vascular_pad_wound_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Critical Limb-Threatening Ischemia (CLTI) Assessment | CLTI Staging (WIfI System) | `wound_grade` | Wound Grade (W) | `select` |  |  |  |
| Critical Limb-Threatening Ischemia (CLTI) Assessment | CLTI Staging (WIfI System) | `ischemia_grade` | Ischemia Grade (I — ABI) | `select` |  |  |  |
| Critical Limb-Threatening Ischemia (CLTI) Assessment | CLTI Staging (WIfI System) | `foot_infection_grade` | Foot Infection Grade (fI — IDSA Classification) | `select` |  |  |  |
| Critical Limb-Threatening Ischemia (CLTI) Assessment | Hemodynamic Data | `abi_right` | ABI Right (normal 0.90-1.40; PAD <0.90; CLTI <0.40) | `number` |  |  |  |
| Critical Limb-Threatening Ischemia (CLTI) Assessment | Hemodynamic Data | `abi_left` | ABI Left | `number` |  |  |  |
| Critical Limb-Threatening Ischemia (CLTI) Assessment | Hemodynamic Data | `toe_brachial_index` | Toe-Brachial Index (TBI; healing potential: >0.7 = good; <0.2 = very poor) | `number` |  |  |  |
| Critical Limb-Threatening Ischemia (CLTI) Assessment | Hemodynamic Data | `tpos` | Transcutaneous O2 Pressure (TcPO2) in mmHg (>40 = healing likely; <20 = very poor prognosis) | `number` |  |  |  |
| Critical Limb-Threatening Ischemia (CLTI) Assessment | Revascularization Plan | `anatomy` | Angiographic Anatomy (GLASS Classification) | `select` |  |  |  |
| Critical Limb-Threatening Ischemia (CLTI) Assessment | Revascularization Plan | `revascularization_plan` | Revascularization Strategy | `select` |  |  |  |
| Critical Limb-Threatening Ischemia (CLTI) Assessment | Revascularization Plan | `amputation_risk` | Amputation Risk Assessment | `select` |  |  |  |

### Carotid / TIA — `vascular_carotid_artery_disease_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Carotid Artery Disease and Stroke Prevention | Diagnosis, Risk Stratification, and Medical Therapy | `car_f1` | Carotid Artery Disease Evaluation: PATHOPHYSIOLOGY (Carotid Atherosclerosis Bifurcation Internal External; Stenosis -> Thromboembolism Plaque Ulceration; Artery-to-Artery Emboli Most Common Stroke Mechanism; Low-Flow Less Common Severe Stenosis; STROKE MECHANISM: EMBOLISM From Carotid Plaque; From Cardiac SOURCE AF; PENETRATING ARTERY SMALL VESSEL LACUNAR); CAROTID DUPLEX ULTRASOUND (Initial Evaluation; Degree Stenosis PSV Peak Systolic Velocity Ratio EDV; NASCET-EQUIVALENT: Under 50 pct = Mild; 50-69 pct = Moderate; 70-99 pct = Severe; 100 pct = Occluded; CTA MRA Confirm Before Surgery; CTA Best Anatomy Plaque Calcification Arch Anatomy; MRA No Radiation Renal); TIA TRANSIENT ISCHEMIC ATTACK (Neurologic Deficit Resolving; Duration Minutes-Under 24H; MODERN DEFINITION Imaging No Infarct; HIGH EARLY STROKE RISK 10-15 pct 2D Without Treatment; ABCD2 SCORE: Age Over 60 = 1; BP Over 140/90 = 1; Clinical TIA = Unilateral Weakness 2; Speech Without Weakness 1; None = 0; Duration Over 60 Min = 2; 10-59 Min = 1; Diabetes = 1; High Risk Score Over 4; URGENT EVALUATION ABCD2 High; IMAGING MRI DWI Infarction; CTA Or MRA Vessel; Carotid Duplex; Echo Cardiac Source; Holter AF Monitoring; LAB TFTs CBC BMP; DUAL ANTIPLATELET FIRST 90D POINT CHANCE Trials = Aspirin Plus Clopidogrel Early TIA Or Minor Stroke Reduces Recurrence; Then Single Agent Long-Term); MEDICAL THERAPY ALL PATIENTS (ANTIPLATELET Aspirin 81 mg + Clopidogrel 75 mg x90D Then Single OR Aspirin Alone; Ticagrelor Alternative; STATIN HIGH INTENSITY Atorvastatin 40-80 mg EVERY Carotid Patient; ANTIHYPERTENSIVES Goal Under 140/90; LIFESTYLE Smoking Cessation Exercise; DIABETES CONTROL; AF PATIENTS = ANTICOAGULATION NOT Antiplatelet For Stroke Prevention Direct Mechanism AF) | `text` |  |  |  |
| Carotid Artery Disease and Stroke Prevention | Diagnosis, Risk Stratification, and Medical Therapy | `car_f2` | CEA vs CAS and Revascularization Criteria | `select` |  |  |  |

### Carotid Disease — `vascular_carotid_disease_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Carotid Artery Disease Evaluation | Presentation and Symptoms | `symptom_status` | Symptomatic vs. Asymptomatic | `select` |  |  |  |
| Carotid Artery Disease Evaluation | Presentation and Symptoms | `time_since_event` | Time Since Neurological Event (days) — target revascularization within 2 weeks if >70% stenosis and symptomatic | `text` |  |  |  |
| Carotid Artery Disease Evaluation | Carotid Stenosis Grading | `right_stenosis` | Right ICA Stenosis (NASCET criteria) | `select` |  |  |  |
| Carotid Artery Disease Evaluation | Carotid Stenosis Grading | `left_stenosis` | Left ICA Stenosis (NASCET criteria) | `select` |  |  |  |
| Carotid Artery Disease Evaluation | Carotid Stenosis Grading | `plaque_morphology` | Plaque Morphology on Imaging | `select` |  |  |  |
| Carotid Artery Disease Evaluation | Management Decision | `intervention` | Intervention Plan | `select` |  |  |  |
| Carotid Artery Disease Evaluation | Management Decision | `antiplatelet` | Antiplatelet Regimen (aspirin 81-325 mg; or clopidogrel; dual-antiplatelet for 30 days after CAS) | `text` |  |  |  |
| Carotid Artery Disease Evaluation | Management Decision | `ldi_goal` | LDL Target (goal <70 mg/dL for atherosclerotic carotid disease; high-intensity statin preferred) | `text` |  |  |  |

### Carotid Disease (CEA vs CAS) — `vascular_surgery_carotid_disease_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Carotid Artery Disease — Revascularization Assessment | Stenosis Severity and Symptom Status | `stenosis_degree` | Stenosis Degree (NASCET criteria) | `select` |  |  |  |
| Carotid Artery Disease — Revascularization Assessment | Stenosis Severity and Symptom Status | `symptom_status` | Clinical Symptom Status | `select` |  |  |  |
| Carotid Artery Disease — Revascularization Assessment | CEA vs CAS Decision | `procedure` | Recommended Procedure | `select` |  |  |  |

### DVT — Diagnosis and Anticoagulation — `vascular_deep_vein_thrombosis_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| DVT — Wells Score, Diagnosis, and Anticoagulation | Wells Score and Diagnostic Algorithm | `wells_score` | Wells DVT Score (active cancer +1; paralysis/paresis/recent cast immobilization lower extremity +1; bedridden >3 days or major surgery within 12 weeks +1; localized tenderness along deep venous system +1; entire leg swollen +1; calf swelling >3 cm vs. asymptomatic side +1; pitting edema confined to symptomatic leg +1; collateral superficial veins (non-varicose) +1; previously documented DVT +1; alternative diagnosis as likely as or greater than DVT -2; <=1 = low probability; 2-2 = moderate; >=3 = high) | `number` |  |  |  |
| DVT — Wells Score, Diagnosis, and Anticoagulation | Wells Score and Diagnostic Algorithm | `diagnostic_workup` | Diagnostic Algorithm | `select` |  |  |  |
| DVT — Wells Score, Diagnosis, and Anticoagulation | DOAC Selection and Duration | `doac_choice` | Anticoagulation Selection | `select` |  |  |  |
| DVT — Wells Score, Diagnosis, and Anticoagulation | DOAC Selection and Duration | `duration` | Duration of Anticoagulation (provoked (transient reversible risk: surgery, trauma, immobilization, oral contraceptives, travel): 3 months; unprovoked DVT: 3 months minimum then assess benefit/risk (HAS-BLED vs. Wells/DASH score for recurrence risk); extensive unprovoked: extended treatment if low-moderate bleeding risk; recurrent VTE: indefinite; cancer-associated VTE: treat indefinitely while active cancer; right-sided superficial DVT (>=5 cm, within 3 cm of SFJ): 45 days fondaparinux or rivaroxaban (CALISTO, SURPRISE) | `text` |  |  |  |

### Dialysis Access — `vascular_dialysis_access_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dialysis Access Planning and Surveillance | Access Type | `current_access` | Current Dialysis Access | `select` |  |  |  |
| Dialysis Access Planning and Surveillance | Access Type | `avf_location` | AVF / AVG Location | `select` |  |  |  |
| Dialysis Access Planning and Surveillance | Access Surveillance | `flow_measurement` | Access Flow (Qa) in mL/min (AVF <600 = at risk for thrombosis; AVG <600-1000) | `number` |  |  |  |
| Dialysis Access Planning and Surveillance | Access Surveillance | `static_venous_pressure` | Static Venous Pressure Ratio (>0.5 = outflow stenosis likely) | `text` |  |  |  |
| Dialysis Access Planning and Surveillance | Access Surveillance | `thrill` | Physical Exam Thrill Assessment | `select` |  |  |  |
| Dialysis Access Planning and Surveillance | Access Surveillance | `duplex_findings` | Duplex Ultrasound Findings (stenosis location and percentage, flow volume, collaterals) | `textarea` |  |  |  |
| Dialysis Access Planning and Surveillance | Access Intervention | `planned_intervention` | Planned Intervention | `select` |  |  |  |
| Dialysis Access Planning and Surveillance | Access Intervention | `maturation_status` | AVF Maturation Status (if new) | `select` |  |  |  |

### PAD / Peripheral Artery Disease — `vascular_surgery_peripheral_artery_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| PAD — ABI, CLTI Staging, Revascularization, and Limb Salvage | PAD Diagnosis and ABI Interpretation | `abi` | Ankle-Brachial Index and Diagnostic Workup (ABI CATEGORIES: >=1.40 = NONCOMPRESSIBLE (medial arterial calcification; DM, ESRD, Monckeberg); use toe-brachial index (TBI) instead — TBI <0.7 = PAD); 1.00-1.40 = NORMAL; 0.91-0.99 = BORDERLINE; 0.41-0.90 = MILD-MODERATE PAD (claudication); 0.00-0.40 = SEVERE PAD (rest pain, tissue loss); ABI TEST: systolic BP cuff at ankle (dorsalis pedis + posterior tibial) divided by highest brachial BP; SYMPTOMS: CLAUDICATION: exercise-induced calf pain; reproducible; relief with rest within 10 minutes; intermittent; CRITICAL LIMB-THREATENING ISCHEMIA (CLTI): rest pain + tissue loss (ulcer/gangrene) in setting of PAD; LERICHE SYNDROME: aortoiliac occlusion: buttock/hip claudication + erectile dysfunction + absent femoral pulses; RISK FACTORS: DM (10-fold increased risk), smoking (10x), hypertension, hyperlipidemia, CKD; AGE: >50 + DM or smoking OR >65 regardless; ADDITIONAL TESTING: duplex ultrasound (first-line imaging for planning); CT angiography (CTA); MR angiography (MRA); conventional angiography (pre-intervention); segmental pressures + pulse volume recordings; pulse oximetry toe pressures; TRANSCUTANEOUS OXYGEN (TcPO2): >=40 mmHg = adequate wound healing; <20 mmHg = poor prognosis) | `text` |  |  |  |
| PAD — ABI, CLTI Staging, Revascularization, and Limb Salvage | PAD Diagnosis and ABI Interpretation | `staging` | CLTI Staging and WIfI Classification | `select` |  |  |  |
| PAD — ABI, CLTI Staging, Revascularization, and Limb Salvage | Medical Management and Revascularization | `medical_mgmt` | Medical Management of PAD (MEDICAL THERAPY: ANTIPLATELET: aspirin 75-100 mg QD (standard); clopidogrel 75 mg QD (CAPRIE: superior to aspirin for PAD + CV outcomes); dual antiplatelet (aspirin + clopidogrel): CHARISMA: not superior for claudication; POST-REVASCULARIZATION: dual antiplatelet or antiplatelet + rivaroxaban; RIVAROXABAN (Xarelto) 2.5 mg BID + aspirin 100 mg: COMPASS trial: 28% reduction in major adverse limb events (MALE) + MACE; approved for PAD/polyvascular disease; STATIN: high-intensity; LDL <55 mg/dL (PAD = very high risk); reduces MACE + MALE; VORAPAXAR: PAR-1 inhibitor; reduces MALE (approved PAD without prior stroke); ACEi/ARB: reduces CV events + improves walking; RAMIPRIL: HOPE trial extension; GLP-1 agonists: SURPASS-CVOT: may improve PAD outcomes (limited data); SMOKING CESSATION: most important modifiable risk; EXERCISE THERAPY: SUPERVISED EXERCISE THERAPY (SET): first-line for claudication; 30-45 min 3x/week; walking until near-maximal claudication then rest; MORTALITY REDUCTION: SET superior to angioplasty for claudication (CLEVER trial); inferior only if lifestyle severely limited; CILOSTAZOL (Pletal): phosphodiesterase III inhibitor; increases walking distance ~50%; NOT in HF (reduced EF) | `text` |  |  |  |
| PAD — ABI, CLTI Staging, Revascularization, and Limb Salvage | Medical Management and Revascularization | `revascularization` | Revascularization Strategy — Endovascular vs. Open | `select` |  |  |  |

### Venous Disease — `vascular_venous_disease_cf`

Screen: 1 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Venous Disease Evaluation | CEAP Classification | `ceap_clinical` | CEAP Clinical Class (C) | `select` |  |  |  |
| Chronic Venous Disease Evaluation | CEAP Classification | `ceap_etiology` | CEAP Etiology (E) | `select` |  |  |  |
| Chronic Venous Disease Evaluation | CEAP Classification | `reflux_anatomy` | Duplex Findings — Reflux Anatomy (GSV, SSV, tributaries, perforators; reflux >0.5s = significant) | `text` |  |  |  |
| Chronic Venous Disease Evaluation | Treatment Plan | `compression` | Compression Therapy | `select` |  |  |  |
| Chronic Venous Disease Evaluation | Treatment Plan | `intervention` | Venous Intervention | `select` |  |  |  |
| Chronic Venous Disease Evaluation | Treatment Plan | `wound_plan` | Venous Ulcer Plan (wound care, compression, +/- skin grafting, infection management — Wound clinic referral) | `textarea` |  |  |  |

## Care Coordination

### Advance Care Planning — `advance_care_planning_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Advance Care Planning Discussion | Existing Advance Directives | `polst_molst` | POLST / MOLST Status | `select` |  |  |  |
| Advance Care Planning Discussion | Existing Advance Directives | `living_will` | Living Will / Healthcare Directive | `select` |  |  |  |
| Advance Care Planning Discussion | Existing Advance Directives | `healthcare_proxy` | Healthcare Proxy / DPOA-HC Status | `select` |  |  |  |
| Advance Care Planning Discussion | Existing Advance Directives | `proxy_name` | Healthcare Proxy Name and Relationship | `text` |  |  |  |
| Advance Care Planning Discussion | Goals of Care Discussion | `understanding` | Patient Understanding of Current Health Status (use teach-back; identify misperceptions) | `textarea` |  |  |  |
| Advance Care Planning Discussion | Goals of Care Discussion | `values` | Values and Priorities (what gives life meaning; functional thresholds; fears about future care; where patient wants to spend final days) | `textarea` |  |  |  |
| Advance Care Planning Discussion | Goals of Care Discussion | `treatment_preferences` | Resuscitation Preference | `select` |  |  |  |
| Advance Care Planning Discussion | Goals of Care Discussion | `artificial_nutrition_preference` | Artificial Nutrition / Hydration Preference | `select` |  |  |  |
| Advance Care Planning Discussion | Goals of Care Discussion | `preferred_death_location` | Preferred Location for End of Life | `select` |  |  |  |
| Advance Care Planning Discussion | Goals of Care Discussion | `discussion_notes` | Discussion Summary and Patient/Family Statements | `textarea` |  |  |  |

### CCM Monthly Note — `care_coordination_ccm_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Care Management Monthly Note (CMS CCM) | CCM Eligibility | `two_plus_chronic` | Patient has 2+ chronic conditions expected to last ≥12 months (CCM eligibility requirement) | `checkbox` |  |  |  |
| Chronic Care Management Monthly Note (CMS CCM) | CCM Eligibility | `conditions` | Active Chronic Conditions (list — ICD-10 codes for billing) | `textarea` |  |  |  |
| Chronic Care Management Monthly Note (CMS CCM) | CCM Eligibility | `ccm_consent_on_file` | Written CCM consent on file (required before billing 99490/99491) | `checkbox` |  |  |  |
| Chronic Care Management Monthly Note (CMS CCM) | CCM Eligibility | `month_year` | Billing Month / Year (CCM is billed once per calendar month) | `text` |  |  |  |
| Chronic Care Management Monthly Note (CMS CCM) | Time Tracking | `minutes_this_month` | Total CCM Minutes This Month (20 min = 99490 standard; 40 min = 99491 complex; 60 min = next tier) | `number` |  |  |  |
| Chronic Care Management Monthly Note (CMS CCM) | Time Tracking | `activities_performed` | Activities Performed (phone calls, care coordination, referral management, care plan review, medication management) | `textarea` |  |  |  |
| Chronic Care Management Monthly Note (CMS CCM) | Care Plan Review | `care_plan_updated` | Electronic care plan reviewed and updated (patient accessible per CMS requirement) | `checkbox` |  |  |  |
| Chronic Care Management Monthly Note (CMS CCM) | Care Plan Review | `medication_adherence` | Medication Adherence | `select` |  |  |  |
| Chronic Care Management Monthly Note (CMS CCM) | Care Plan Review | `goal_progress` | Progress Toward Goals (HbA1c, BP, weight, exercise, smoking cessation) | `textarea` |  |  |  |
| Chronic Care Management Monthly Note (CMS CCM) | Care Plan Review | `upcoming_appointments` | Upcoming Appointments Confirmed / Scheduled | `textarea` |  |  |  |
| Chronic Care Management Monthly Note (CMS CCM) | Care Plan Review | `urgent_issues` | Urgent Issues This Month (escalations, ED visits, hospitalizations — provider notified) | `textarea` |  |  |  |

### Complex Care Mgmt — `case_management_complex_cf`

Screen: 1 page(s) · 4 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Complex Care Management Plan | Risk Stratification | `risk_level` | Risk Level (Population Health Tier) | `select` |  |  |  |
| Complex Care Management Plan | Risk Stratification | `hcc_count` | Number of Active Chronic Conditions / HCC codes | `number` |  |  |  |
| Complex Care Management Plan | Risk Stratification | `hospitalizations_12mo` | Hospitalizations in Past 12 Months | `number` |  |  |  |
| Complex Care Management Plan | Risk Stratification | `ed_visits_12mo` | ED Visits in Past 12 Months | `number` |  |  |  |
| Complex Care Management Plan | Patient Goals and Care Plan | `patient_goals` | Patient-Identified Goals (in their words — functional, quality of life, preferences) | `textarea` |  |  |  |
| Complex Care Management Plan | Patient Goals and Care Plan | `clinical_goals` | Clinical Goals (disease-specific: HbA1c target, BP goal, smoking cessation, weight loss, medication adherence) | `textarea` |  |  |  |
| Complex Care Management Plan | Patient Goals and Care Plan | `social_goals` | Social Goals (housing stability, transportation access, caregiver training, food security) | `textarea` |  |  |  |
| Complex Care Management Plan | Care Management Interventions | `care_coordinator_contact` | Contact Frequency | `select` |  |  |  |
| Complex Care Management Plan | Care Management Interventions | `medication_reconciliation` | Medication reconciliation completed (polypharmacy review; adherence barriers; cost — generic substitution, PAP) | `checkbox` |  |  |  |
| Complex Care Management Plan | Care Management Interventions | `care_gap_closure` | Care Gaps Addressed (overdue preventive care, referrals, labs — HEDIS measures) | `textarea` |  |  |  |
| Complex Care Management Plan | Care Management Interventions | `specialist_coordination` | Specialist Referrals / Coordination (ensure follow-through, shared records) | `textarea` |  |  |  |
| Complex Care Management Plan | Care Management Interventions | `care_transitions` | Care transitions support (hospital discharge: medication reconciliation, 72h follow-up call, PCP visit within 7 days — TCM billing) | `checkbox` |  |  |  |
| Complex Care Management Plan | Outcomes Tracking | `phq9` | PHQ-9 (depression screen — tracked longitudinally) | `number` |  |  |  |
| Complex Care Management Plan | Outcomes Tracking | `patient_activation` | Patient Activation Measure (PAM Level) | `select` |  |  |  |
| Complex Care Management Plan | Outcomes Tracking | `next_touchpoint` | Next Scheduled Touchpoint | `date` |  |  |  |

### Family Meeting Note — `family_meeting_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Family / Care Conference | Meeting Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Family / Care Conference | Meeting Details | `meetingDate` | Meeting Date | `date` | Y |  |  |
| Family / Care Conference | Meeting Details | `meetingTime` | Time | `text` |  |  |  |
| Family / Care Conference | Meeting Details | `meetingDuration` | Duration | `text` |  |  |  |
| Family / Care Conference | Meeting Details | `provider` | Physician / Team Lead | `typeahead` | Y |  |  |
| Family / Care Conference | Meeting Details | `location` | Meeting Location | `select` |  |  |  |
| Family / Care Conference | Meeting Details | `attendees` | Attendees | `textarea` | Y |  |  |
| Family / Care Conference | Clinical Summary Presented | `clinicalSummary` | Clinical Status Reviewed | `textarea` | Y |  |  |
| Family / Care Conference | Clinical Summary Presented | `prognosticDiscussion` | Prognosis Discussion | `textarea` | Y |  |  |
| Family / Care Conference | Goals of Care & Decisions | `goalsDecisions` | Goals of Care Discussion | `textarea` | Y |  |  |
| Family / Care Conference | Goals of Care & Decisions | `followUpPlan` | Follow-up Plan | `textarea` | Y |  |  |

### Home Health — `home_health_assessment_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Home Health Certification | Homebound and Skilled Need | `homebound_reason` | Homebound Status Reason | `select` |  |  |  |
| Home Health Certification | Homebound and Skilled Need | `skilled_need` | Primary Skilled Need | `select` |  |  |  |
| Home Health Certification | Physician Orders | `diagnosis_primary` | Primary Diagnosis for Home Health | `text` |  |  |  |
| Home Health Certification | Physician Orders | `frequency_visits` | Visit Frequency and Duration (e.g., SN 3x/wk x 4 wks) | `text` |  |  |  |
| Home Health Certification | Physician Orders | `medications_at_home` | Current Medications (for nurse medication management) | `textarea` |  |  |  |
| Home Health Certification | Physician Orders | `diet_order` | Diet Order | `text` |  |  |  |
| Home Health Certification | Physician Orders | `activity_restriction` | Activity Restrictions | `text` |  |  |  |
| Home Health Certification | Physician Orders | `wound_care_orders` | Wound Care Orders (if applicable) | `textarea` |  |  |  |
| Home Health Certification | Physician Orders | `goals` | Functional Goals | `textarea` |  |  |  |
| Home Health Certification | Physician Orders | `emergency_contact` | Emergency Contact Name and Phone | `text` |  |  |  |

### Post-Discharge Call — `care_transition_postdischarge_cf`

Screen: 1 page(s) · 5 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Post-Discharge Transition Call (Within 72 Hours) | Call Information | `discharge_date` | Discharge Date | `date` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Call Information | `call_date` | Call Date (target: within 72h of discharge) | `date` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Call Information | `who_reached` | Who Was Reached | `select` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Call Information | `discharge_diagnosis` | Discharge Diagnosis (from hospital) | `text` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Medication Review | `medications_filled` | All discharge medications filled at pharmacy | `checkbox` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Medication Review | `medication_concerns` | Medication Questions / Concerns (new medications, side effects, cost issues — resolve or escalate) | `textarea` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Medication Review | `anticoagulation_monitoring` | Anticoagulation follow-up arranged (INR / anti-Xa monitoring if applicable) | `checkbox` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Clinical Status Check | `symptoms_worsening` | Worsening symptoms reported (escalate — same-day appointment or ED referral if urgent) | `checkbox` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Clinical Status Check | `weight_check` | Weight checked today (CHF patients: >3 lbs in 1 day or >5 lbs in 1 week = call provider) | `checkbox` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Clinical Status Check | `wound_status` | Wound / Incision Status (if applicable) | `select` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Follow-Up Appointments | `pcp_appointment` | PCP follow-up appointment confirmed (within 7 days of discharge for TCM billing) | `checkbox` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Follow-Up Appointments | `specialist_appointment` | Specialist follow-up appointment confirmed | `checkbox` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Follow-Up Appointments | `appointment_barriers` | Barriers to Attending Appointments (transportation, language, cost) | `text` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Follow-Up Appointments | `home_health_started` | Home health services initiated (first visit confirmed) | `checkbox` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Follow-Up Appointments | `dme_received` | DME / equipment delivered and patient knows how to use | `checkbox` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Call Outcome | `actions_taken` | Actions Taken (prescription assistance, appointment scheduling, referrals, provider notification, ED guidance) | `textarea` |  |  |  |
| Post-Discharge Transition Call (Within 72 Hours) | Call Outcome | `escalation_needed` | Escalation to provider / nurse required (urgent concerns communicated) | `checkbox` |  |  |  |

### SW Inpatient Assessment — `social_work_assessment_inpatient_cf`

Screen: 1 page(s) · 4 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Inpatient Psychosocial Assessment | Presenting Concerns | `referral_reason` | Referral Reason | `select` |  |  |  |
| Inpatient Psychosocial Assessment | Presenting Concerns | `patient_perspective` | Patient/Family Goals and Concerns (their words) | `textarea` |  |  |  |
| Inpatient Psychosocial Assessment | Social History | `living_situation` | Pre-Admission Living Situation | `select` |  |  |  |
| Inpatient Psychosocial Assessment | Social History | `support_system` | Support System (family, friends, caregivers — availability, willingness, capability) | `textarea` |  |  |  |
| Inpatient Psychosocial Assessment | Social History | `insurance` | Insurance / Coverage (Medicare, Medicaid, private, uninsured — Part A/B/D) | `text` |  |  |  |
| Inpatient Psychosocial Assessment | Social History | `financial_concerns` | Financial concerns / eligibility for assistance (charity care, SNAP, SSI/SSDI, Medicaid application) | `checkbox` |  |  |  |
| Inpatient Psychosocial Assessment | Safety Screening | `ipv_screening` | IPV / Domestic Violence Screen (HITS or PVS) | `select` |  |  |  |
| Inpatient Psychosocial Assessment | Safety Screening | `elder_abuse` | Elder Abuse Screening (patients ≥65) | `select` |  |  |  |
| Inpatient Psychosocial Assessment | Safety Screening | `food_insecurity` | Food Security (USDA 2-question screen) | `select` |  |  |  |
| Inpatient Psychosocial Assessment | Discharge Plan | `discharge_disposition_goal` | Discharge Disposition Goal | `select` |  |  |  |
| Inpatient Psychosocial Assessment | Discharge Plan | `barriers` | Discharge Barriers and Interventions | `textarea` |  |  |  |
| Inpatient Psychosocial Assessment | Discharge Plan | `community_resources` | Community Resources Connected (211, ADRC, case management, transportation, DME, pharmacy delivery) | `textarea` |  |  |  |

### Skilled Nursing Home Visit — `home_health_skilled_nursing_cf`

Screen: 1 page(s) · 4 section(s) · 25 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Home Health Skilled Nursing Visit | Visit Information | `hh_visit_number` | Visit Number in Current Episode | `number` |  |  |  |
| Home Health Skilled Nursing Visit | Visit Information | `hh_visit_type` | Primary Skilled Service This Visit | `select` |  |  |  |
| Home Health Skilled Nursing Visit | Visit Information | `hh_diagnosis` | Primary Diagnosis Driving Home Health | `text` |  |  |  |
| Home Health Skilled Nursing Visit | Visit Information | `hh_homebound_status` | Homebound Status Confirmed | `select` |  |  |  |
| Home Health Skilled Nursing Visit | Visit Information | `hh_physician` | Certifying Physician | `text` |  |  |  |
| Home Health Skilled Nursing Visit | Vital Signs and Functional Assessment | `hh_bp` | Blood Pressure (mmHg) | `text` |  |  |  |
| Home Health Skilled Nursing Visit | Vital Signs and Functional Assessment | `hh_hr` | Heart Rate (bpm) | `text` |  |  |  |
| Home Health Skilled Nursing Visit | Vital Signs and Functional Assessment | `hh_temp` | Temperature | `text` |  |  |  |
| Home Health Skilled Nursing Visit | Vital Signs and Functional Assessment | `hh_o2sat` | O2 Saturation (%) | `text` |  |  |  |
| Home Health Skilled Nursing Visit | Vital Signs and Functional Assessment | `hh_weight` | Weight (lbs / kg) | `text` |  |  |  |
| Home Health Skilled Nursing Visit | Vital Signs and Functional Assessment | `hh_pain_scale` | Pain Level (0-10) | `select` |  |  |  |
| Home Health Skilled Nursing Visit | Vital Signs and Functional Assessment | `hh_functional_status` | Functional Status Compared to Last Visit | `select` |  |  |  |
| Home Health Skilled Nursing Visit | Vital Signs and Functional Assessment | `hh_fall_risk` | Fall Risk Assessment | `select` |  |  |  |
| Home Health Skilled Nursing Visit | Skilled Services Performed | `hh_wound_description` | Wound Assessment (size, stage, wound bed, exudate, periwound, odor) | `textarea` |  |  |  |
| Home Health Skilled Nursing Visit | Skilled Services Performed | `hh_wound_dressing` | Wound Dressing Applied | `select` |  |  |  |
| Home Health Skilled Nursing Visit | Skilled Services Performed | `hh_iv_therapy` | IV Therapy This Visit | `select` |  |  |  |
| Home Health Skilled Nursing Visit | Skilled Services Performed | `hh_education` | Patient and Caregiver Education | `select` |  |  |  |
| Home Health Skilled Nursing Visit | Skilled Services Performed | `hh_services_notes` | Skilled Service Notes (procedures, patient response, education outcomes) | `textarea` |  |  |  |
| Home Health Skilled Nursing Visit | Care Goals and Discharge Planning | `hh_episode_goals` | Episode Goals (specific, measurable outcomes for this episode of care) | `textarea` |  |  |  |
| Home Health Skilled Nursing Visit | Care Goals and Discharge Planning | `hh_goal_progress` | Progress Toward Episode Goals | `select` |  |  |  |
| Home Health Skilled Nursing Visit | Care Goals and Discharge Planning | `hh_discharge_criteria` | Discharge Criteria (what does the patient need to achieve to be discharged?) | `textarea` |  |  |  |
| Home Health Skilled Nursing Visit | Care Goals and Discharge Planning | `hh_estimated_discharge` | Estimated Discharge Timeline | `select` |  |  |  |
| Home Health Skilled Nursing Visit | Care Goals and Discharge Planning | `hh_md_notification` | Physician Notification Required | `select` |  |  |  |
| Home Health Skilled Nursing Visit | Care Goals and Discharge Planning | `hh_next_visit` | Next Scheduled Visit Date and Service | `text` |  |  |  |
| Home Health Skilled Nursing Visit | Care Goals and Discharge Planning | `hh_notes` | Visit Summary and Care Coordinator Notes | `textarea` |  |  |  |

### Social Work — `social_work_assessment_cf`

Screen: 1 page(s) · 2 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Social Work Assessment | Social Determinants of Health (SDOH) | `housing_stable` | Housing | `select` |  |  |  |
| Social Work Assessment | Social Determinants of Health (SDOH) | `food_security` | Food Security | `select` |  |  |  |
| Social Work Assessment | Social Determinants of Health (SDOH) | `transportation` | Transportation | `select` |  |  |  |
| Social Work Assessment | Social Determinants of Health (SDOH) | `financial_strain` | Financial Strain | `select` |  |  |  |
| Social Work Assessment | Social Determinants of Health (SDOH) | `insurance_coverage` | Insurance / Coverage | `select` |  |  |  |
| Social Work Assessment | Social Determinants of Health (SDOH) | `social_support` | Social Support | `select` |  |  |  |
| Social Work Assessment | Social Determinants of Health (SDOH) | `domestic_violence` | Domestic violence / IPV concern identified | `checkbox` |  |  |  |
| Social Work Assessment | Social Determinants of Health (SDOH) | `substance_use_concern` | Substance use concern identified | `checkbox` |  |  |  |
| Social Work Assessment | Social Determinants of Health (SDOH) | `mental_health_concern` | Mental health concern identified | `checkbox` |  |  |  |
| Social Work Assessment | Interventions and Referrals | `referrals_made` | Referrals Made (community resources, programs) | `textarea` |  |  |  |
| Social Work Assessment | Interventions and Referrals | `patient_assistance` | Prescription Assistance Program enrollment initiated | `checkbox` |  |  |  |
| Social Work Assessment | Interventions and Referrals | `discharge_planning` | Discharge planning initiated | `checkbox` |  |  |  |
| Social Work Assessment | Interventions and Referrals | `follow_up_plan` | Follow-up Plan | `textarea` |  |  |  |

## Reproductive Medicine

### Contraception Counseling — `contraception_counseling_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Contraception Counseling | Reproductive Goals | `future_pregnancy_desired` | Future Pregnancy Desired | `select` |  |  |  |
| Contraception Counseling | Reproductive Goals | `last_pregnancy_date` | Date of Last Pregnancy / Delivery (if applicable) | `date` |  |  |  |
| Contraception Counseling | Method Counseling | `contraindications` | Contraindications to Estrogen (migraines with aura, VTE, smoking ≥35 yr, uncontrolled HTN, cardiovascular disease) | `textarea` |  |  |  |
| Contraception Counseling | Method Counseling | `method_selected` | Contraceptive Method Selected | `select` |  |  |  |
| Contraception Counseling | Method Counseling | `side_effects_counseled` | Side effects, risks, and expected changes counseled | `checkbox` |  |  |  |
| Contraception Counseling | Method Counseling | `emergency_contraception` | Emergency contraception counseled (Plan B / Ella / copper IUD) | `checkbox` |  |  |  |
| Contraception Counseling | Initiation Plan | `start_date` | Planned Start Date | `date` |  |  |  |
| Contraception Counseling | Initiation Plan | `quick_start` | Quick start initiated (same day — if pregnancy reasonably excluded) | `checkbox` |  |  |  |
| Contraception Counseling | Initiation Plan | `followup` | Follow-Up Plan (IUD check string 4-6 wks / BP check with estrogen) | `text` |  |  |  |
| Contraception Counseling | Initiation Plan | `notes` | Plan Notes | `textarea` |  |  |  |

### Endometriosis — `endometriosis_management_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Endometriosis Management Visit | Disease Assessment | `staging_known` | ASRM/rASRM Stage (if surgically confirmed) | `select` |  |  |  |
| Endometriosis Management Visit | Disease Assessment | `endometrioma_size` | Endometrioma Diameter (cm — ultrasound; ≥4cm consider surgery) | `number` |  |  |  |
| Endometriosis Management Visit | Disease Assessment | `ca125` | CA-125 (U/mL — elevated in deep infiltrating, not diagnostic alone) | `number` |  |  |  |
| Endometriosis Management Visit | Symptom Burden | `dysmenorrhea` | Dysmenorrhea (0-10) | `number` |  |  |  |
| Endometriosis Management Visit | Symptom Burden | `dyspareunia` | Dyspareunia / deep pelvic pain (0-10) | `number` |  |  |  |
| Endometriosis Management Visit | Symptom Burden | `chronic_pelvic_pain` | Chronic pelvic pain — non-menstrual (0-10) | `number` |  |  |  |
| Endometriosis Management Visit | Symptom Burden | `infertility` | Infertility (primary/secondary — priority goal) | `checkbox` |  |  |  |
| Endometriosis Management Visit | Management | `hormonal_suppression` | Hormonal Suppression (first-line for pain) | `select` |  |  |  |
| Endometriosis Management Visit | Management | `surgical_referral` | Surgical referral (laparoscopy — excision preferred over ablation; endometrioma drainage + cystectomy) | `checkbox` |  |  |  |
| Endometriosis Management Visit | Management | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Fibroids Mgmt — `fibroids_management_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Uterine Fibroids (Leiomyomata) Management | Fibroid Characteristics | `uterine_size` | Uterine Size (weeks / cm on ultrasound) | `text` |  |  |  |
| Uterine Fibroids (Leiomyomata) Management | Fibroid Characteristics | `largest_fibroid` | Largest Fibroid Diameter (cm) | `number` |  |  |  |
| Uterine Fibroids (Leiomyomata) Management | Fibroid Characteristics | `fibroid_count` | Number of Fibroids (visible on US) | `number` |  |  |  |
| Uterine Fibroids (Leiomyomata) Management | Fibroid Characteristics | `figo_type` | FIGO Classification (dominant fibroid) | `select` |  |  |  |
| Uterine Fibroids (Leiomyomata) Management | Fibroid Characteristics | `cavity_distortion` | Uterine cavity distortion on SHG / hysterosonogram | `checkbox` |  |  |  |
| Uterine Fibroids (Leiomyomata) Management | Symptoms | `heavy_bleeding` | Heavy menstrual bleeding (AUB-L — quantify: PBAC score or flooding) | `checkbox` |  |  |  |
| Uterine Fibroids (Leiomyomata) Management | Symptoms | `pelvic_pressure` | Bulk symptoms (pelvic pressure / urinary frequency / constipation) | `checkbox` |  |  |  |
| Uterine Fibroids (Leiomyomata) Management | Symptoms | `dysmenorrhea` | Dysmenorrhea | `checkbox` |  |  |  |
| Uterine Fibroids (Leiomyomata) Management | Symptoms | `anemia` | Iron deficiency anemia (check CBC + ferritin) | `checkbox` |  |  |  |
| Uterine Fibroids (Leiomyomata) Management | Symptoms | `infertility` | Infertility / subfertility (submucosal fibroids reduce implantation) | `checkbox` |  |  |  |
| Uterine Fibroids (Leiomyomata) Management | Management | `medical_therapy` | Medical Therapy | `select` |  |  |  |
| Uterine Fibroids (Leiomyomata) Management | Management | `procedure` | Procedure / Surgery (if elected) | `select` |  |  |  |
| Uterine Fibroids (Leiomyomata) Management | Management | `notes` | Assessment and Plan | `textarea` |  |  |  |

### IVF Cycle Monitoring — `ivf_cycle_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| IVF Cycle Monitoring Visit | Cycle Information | `cycle_day` | Cycle Day | `number` |  |  |  |
| IVF Cycle Monitoring Visit | Cycle Information | `stimulation_day` | Stimulation Day | `number` |  |  |  |
| IVF Cycle Monitoring Visit | Cycle Information | `protocol` | Ovarian Stimulation Protocol | `select` |  |  |  |
| IVF Cycle Monitoring Visit | Cycle Information | `gonadotropin_dose` | Current Gonadotropin Dose (FSH/hMG units/day) | `text` |  |  |  |
| IVF Cycle Monitoring Visit | Monitoring Results | `estradiol` | Estradiol E2 (pg/mL) | `number` |  |  |  |
| IVF Cycle Monitoring Visit | Monitoring Results | `lh` | LH (mIU/mL) | `number` |  |  |  |
| IVF Cycle Monitoring Visit | Monitoring Results | `progesterone` | Progesterone (ng/mL — premature rise if >1.5 pre-trigger) | `number` |  |  |  |
| IVF Cycle Monitoring Visit | Monitoring Results | `lead_follicle_size` | Lead Follicle Diameter (mm) | `number` |  |  |  |
| IVF Cycle Monitoring Visit | Monitoring Results | `follicles_right` | Right Ovary Follicles ≥14mm (count, sizes) | `text` |  |  |  |
| IVF Cycle Monitoring Visit | Monitoring Results | `follicles_left` | Left Ovary Follicles ≥14mm (count, sizes) | `text` |  |  |  |
| IVF Cycle Monitoring Visit | Monitoring Results | `total_follicles_14` | Total Follicles ≥14mm | `number` |  |  |  |
| IVF Cycle Monitoring Visit | Monitoring Results | `endometrial_thickness` | Endometrial Thickness (mm — target ≥7-8mm trilaminar) | `number` |  |  |  |
| IVF Cycle Monitoring Visit | Plan | `dose_adjustment` | Gonadotropin Dose Adjustment | `text` |  |  |  |
| IVF Cycle Monitoring Visit | Plan | `antagonist_started` | GnRH antagonist added (if protocol requires — LH <1-2, lead follicle ≥14mm) | `checkbox` |  |  |  |
| IVF Cycle Monitoring Visit | Plan | `trigger_plan` | Trigger Shot Plan | `select` |  |  |  |
| IVF Cycle Monitoring Visit | Plan | `next_appointment` | Next Monitoring Appointment | `text` |  |  |  |

### IVF Fertility — `reproductive_ivf_cf`

Screen: 1 page(s) · 4 section(s) · 31 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| IVF and Assisted Reproductive Technology | Infertility Diagnosis | `ivf_duration_trying` | Duration Trying to Conceive (months) | `text` |  |  |  |
| IVF and Assisted Reproductive Technology | Infertility Diagnosis | `ivf_primary_cause` | Primary Infertility Cause | `select` |  |  |  |
| IVF and Assisted Reproductive Technology | Infertility Diagnosis | `ivf_prior_pregnancies` | Gravida / Para (prior pregnancies/births) | `text` |  |  |  |
| IVF and Assisted Reproductive Technology | Infertility Diagnosis | `ivf_prior_art` | Prior ART Cycles | `select` |  |  |  |
| IVF and Assisted Reproductive Technology | Infertility Diagnosis | `ivf_male_semen` | Semen Analysis Result | `select` |  |  |  |
| IVF and Assisted Reproductive Technology | Ovarian Reserve Testing | `ivf_amh` | AMH (ng/mL) | `number` |  |  |  |
| IVF and Assisted Reproductive Technology | Ovarian Reserve Testing | `ivf_amh_interpretation` | AMH Interpretation | `select` |  |  |  |
| IVF and Assisted Reproductive Technology | Ovarian Reserve Testing | `ivf_fsh_day3` | Day 3 FSH (mIU/mL) | `number` |  |  |  |
| IVF and Assisted Reproductive Technology | Ovarian Reserve Testing | `ivf_afc` | Antral Follicle Count (AFC) Total | `number` |  |  |  |
| IVF and Assisted Reproductive Technology | Ovarian Reserve Testing | `ivf_e2_day3` | Day 3 Estradiol E2 (pg/mL) | `number` |  |  |  |
| IVF and Assisted Reproductive Technology | Ovarian Reserve Testing | `ivf_poseidon_group` | POSEIDON Classification (poor response) | `select` |  |  |  |
| IVF and Assisted Reproductive Technology | Stimulation Protocol and Monitoring | `ivf_protocol` | Ovarian Stimulation Protocol | `select` |  |  |  |
| IVF and Assisted Reproductive Technology | Stimulation Protocol and Monitoring | `ivf_gonadotropin` | Gonadotropin Protocol (type and dose) | `text` |  |  |  |
| IVF and Assisted Reproductive Technology | Stimulation Protocol and Monitoring | `ivf_stimulation_days` | Days of Stimulation | `number` |  |  |  |
| IVF and Assisted Reproductive Technology | Stimulation Protocol and Monitoring | `ivf_peak_e2` | Peak Estradiol on Trigger Day (pg/mL) | `number` |  |  |  |
| IVF and Assisted Reproductive Technology | Stimulation Protocol and Monitoring | `ivf_follicles_on_trigger` | Number of Follicles over 14mm on Trigger Day | `number` |  |  |  |
| IVF and Assisted Reproductive Technology | Stimulation Protocol and Monitoring | `ivf_trigger` | Trigger Agent | `select` |  |  |  |
| IVF and Assisted Reproductive Technology | Stimulation Protocol and Monitoring | `ivf_ohss_risk` | OHSS Risk | `select` |  |  |  |
| IVF and Assisted Reproductive Technology | Egg Retrieval and Embryo Transfer | `ivf_oocytes_retrieved` | Oocytes Retrieved | `number` |  |  |  |
| IVF and Assisted Reproductive Technology | Egg Retrieval and Embryo Transfer | `ivf_mii_oocytes` | Mature (MII) Oocytes | `number` |  |  |  |
| IVF and Assisted Reproductive Technology | Egg Retrieval and Embryo Transfer | `ivf_fertilization_method` | Fertilization Method | `select` |  |  |  |
| IVF and Assisted Reproductive Technology | Egg Retrieval and Embryo Transfer | `ivf_fertilized` | Fertilized (2PN) | `number` |  |  |  |
| IVF and Assisted Reproductive Technology | Egg Retrieval and Embryo Transfer | `ivf_blastocysts` | Blastocysts (Day 5/6) | `number` |  |  |  |
| IVF and Assisted Reproductive Technology | Egg Retrieval and Embryo Transfer | `ivf_embryos_biopsied` | Embryos Biopsied for PGT-A | `number` |  |  |  |
| IVF and Assisted Reproductive Technology | Egg Retrieval and Embryo Transfer | `ivf_euploid_embryos` | Euploid Embryos (PGT-A normal) | `number` |  |  |  |
| IVF and Assisted Reproductive Technology | Egg Retrieval and Embryo Transfer | `ivf_pgt_a` | PGT-A Testing | `select` |  |  |  |
| IVF and Assisted Reproductive Technology | Egg Retrieval and Embryo Transfer | `ivf_transfer_type` | Embryo Transfer Type | `select` |  |  |  |
| IVF and Assisted Reproductive Technology | Egg Retrieval and Embryo Transfer | `ivf_embryos_transferred` | Number of Embryos Transferred | `number` |  |  |  |
| IVF and Assisted Reproductive Technology | Egg Retrieval and Embryo Transfer | `ivf_beta_hcg_date` | Beta hCG Test Date (9-11 days post transfer) | `date` |  |  |  |
| IVF and Assisted Reproductive Technology | Egg Retrieval and Embryo Transfer | `ivf_outcome` | Cycle Outcome | `select` |  |  |  |
| IVF and Assisted Reproductive Technology | Egg Retrieval and Embryo Transfer | `ivf_notes` | Additional Notes | `textarea` |  |  |  |

### Male Infertility — `reproductive_male_infertility_cf`

Screen: 1 page(s) · 4 section(s) · 29 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Male Infertility Evaluation | Semen Analysis | `mi_sa_date` | Semen Analysis Date | `date` |  |  |  |
| Male Infertility Evaluation | Semen Analysis | `mi_abstinence_days` | Abstinence Days (2-7 optimal) | `number` |  |  |  |
| Male Infertility Evaluation | Semen Analysis | `mi_volume_ml` | Semen Volume (mL) | `number` |  |  |  |
| Male Infertility Evaluation | Semen Analysis | `mi_concentration` | Sperm Concentration (million/mL) | `number` |  |  |  |
| Male Infertility Evaluation | Semen Analysis | `mi_total_motile` | Total Motile Sperm Count (million) | `number` |  |  |  |
| Male Infertility Evaluation | Semen Analysis | `mi_motility_pr` | Progressive Motility (%) | `number` |  |  |  |
| Male Infertility Evaluation | Semen Analysis | `mi_motility_total` | Total Motility (%) | `number` |  |  |  |
| Male Infertility Evaluation | Semen Analysis | `mi_morphology` | Normal Morphology - Kruger Strict (%) | `number` |  |  |  |
| Male Infertility Evaluation | Semen Analysis | `mi_who_classification` | WHO 2021 Classification | `select` |  |  |  |
| Male Infertility Evaluation | Semen Analysis | `mi_repeat_sa` | Repeat Semen Analysis (abnormal repeat in 4-6 weeks) | `select` |  |  |  |
| Male Infertility Evaluation | Hormonal Evaluation | `mi_fsh` | FSH (mIU/mL) | `number` |  |  |  |
| Male Infertility Evaluation | Hormonal Evaluation | `mi_lh` | LH (mIU/mL) | `number` |  |  |  |
| Male Infertility Evaluation | Hormonal Evaluation | `mi_testosterone_total` | Total Testosterone (ng/dL) | `number` |  |  |  |
| Male Infertility Evaluation | Hormonal Evaluation | `mi_testosterone_free` | Free Testosterone (pg/mL) | `number` |  |  |  |
| Male Infertility Evaluation | Hormonal Evaluation | `mi_estradiol` | Estradiol E2 (pg/mL) | `number` |  |  |  |
| Male Infertility Evaluation | Hormonal Evaluation | `mi_prolactin` | Prolactin (ng/mL) | `number` |  |  |  |
| Male Infertility Evaluation | Hormonal Evaluation | `mi_hormonal_pattern` | Hormonal Pattern | `select` |  |  |  |
| Male Infertility Evaluation | Etiology | `mi_varicocele` | Varicocele | `select` |  |  |  |
| Male Infertility Evaluation | Etiology | `mi_obstruction` | Obstructive Azoospermia | `select` |  |  |  |
| Male Infertility Evaluation | Etiology | `mi_genetic_testing` | Genetic Testing | `select` |  |  |  |
| Male Infertility Evaluation | Etiology | `mi_cftr_testing` | CFTR Mutation (CBAVD) | `select` |  |  |  |
| Male Infertility Evaluation | Etiology | `mi_prior_history` | Relevant History (cryptorchidism, mumps orchitis, chemotherapy, radiation) | `textarea` |  |  |  |
| Male Infertility Evaluation | Treatment Plan | `mi_surgical_treatment` | Surgical Intervention | `select` |  |  |  |
| Male Infertility Evaluation | Treatment Plan | `mi_sperm_retrieval_result` | Sperm Retrieval Result | `select` |  |  |  |
| Male Infertility Evaluation | Treatment Plan | `mi_medical_treatment` | Medical Treatment | `select` |  |  |  |
| Male Infertility Evaluation | Treatment Plan | `mi_art_recommendation` | ART Recommendation | `select` |  |  |  |
| Male Infertility Evaluation | Treatment Plan | `mi_lifestyle` | Lifestyle Counseling (heat avoidance, smoking, anabolic steroids, BMI) | `textarea` |  |  |  |
| Male Infertility Evaluation | Treatment Plan | `mi_urology_referral` | Reproductive Urology Referral | `select` |  |  |  |
| Male Infertility Evaluation | Treatment Plan | `mi_notes` | Additional Notes | `textarea` |  |  |  |

### Male Infertility Evaluation — `male_infertility_evaluation_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Male Infertility — Semen Analysis and Evaluation | Semen Analysis (WHO 2021 Reference Values) | `concentration` | Sperm Concentration (million/mL; WHO 5th centile: ≥16 M/mL; oligozoospermia <16 M/mL; severe oligozoospermia <5 M/mL; cryptozoospermia <1 M/mL; azoospermia = 0; atleast 2 specimens 2-3 months apart for diagnosis) | `number` |  |  |  |
| Male Infertility — Semen Analysis and Evaluation | Semen Analysis (WHO 2021 Reference Values) | `motility` | Total Motility (%; WHO 5th centile: ≥42% total motile; ≥30% progressive motility; asthenozoospermia <42%; multiple defects common (OAT = oligoasthenoteratozoospermia)) | `number` |  |  |  |
| Male Infertility — Semen Analysis and Evaluation | Diagnostic Workup | `hormones` | Hormonal Assessment (FSH: elevated = primary testicular failure (Sertoli cell only, Klinefelter); low/normal FSH + oligospermia = hypogonadotropic; LH; total testosterone (AM fasting); prolactin (if low T + low LH); estradiol; TSH; inhibin B marker of spermatogenesis; karyotype if azoospermia or severe oligospermia; Y-chromosome microdeletion (AZFa/b/c) for non-obstructive azoospermia; CFTR mutation for obstructive azoospermia/CBAVD) | `text` |  |  |  |
| Male Infertility — Semen Analysis and Evaluation | Diagnostic Workup | `azoospermia_type` | Azoospermia Classification | `select` |  |  |  |
| Male Infertility — Semen Analysis and Evaluation | Diagnostic Workup | `varicocele` | Varicocele Assessment | `select` |  |  |  |

### Recurrent Preg Loss — `recurrent_pregnancy_loss_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Recurrent Pregnancy Loss Evaluation | Loss History | `prior_losses` | Total Pregnancy Losses | `number` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Loss History | `consecutive_losses` | Consecutive Losses (RPL defined as ≥2 clinical pregnancy losses) | `number` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Loss History | `gestational_ages` | Gestational Ages at Time of Loss (weeks) | `textarea` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Loss History | `karyotype_losses` | Pregnancy products sent for karyotype / chromosomal microarray | `checkbox` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Loss History | `most_common_finding` | Chromosomal Result (if available) | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | RPL Workup (ASRM Evidence-Based) | `antiphospholipid` | Antiphospholipid syndrome workup ordered (ACA, B2GP1, lupus anticoagulant × 2 tests 12 wks apart — strongest treatable cause) | `checkbox` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | RPL Workup (ASRM Evidence-Based) | `karyotype_parents` | Parental karyotype (5% balanced translocation in RPL couples) | `checkbox` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | RPL Workup (ASRM Evidence-Based) | `uterine_anatomy` | Uterine Anatomy Evaluation | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | RPL Workup (ASRM Evidence-Based) | `tsh` | TSH (mIU/L — treat if >2.5 in RPL, even subclinical hypothyroid) | `number` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | RPL Workup (ASRM Evidence-Based) | `thrombophilia` | Hereditary thrombophilia panel (Factor V Leiden, prothrombin G20210A — controversial in RPL) | `checkbox` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Management | `aspirin_heparin` | Low-dose aspirin + LMWH (if APS confirmed — reduces miscarriage rate from 90% → 25%) | `checkbox` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Management | `progesterone` | Progesterone supplementation (empiric — PRISM trial supports vaginal progesterone for subchorionic bleeding/threatened AB) | `checkbox` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Management | `ivf_pgt_a` | IVF with PGT-A discussed (for recurrent aneuploid losses or advanced maternal age) | `checkbox` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Management | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Recurrent Preg Loss — `reproductive_recurrent_pregnancy_loss_cf`

Screen: 1 page(s) · 3 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Recurrent Pregnancy Loss Evaluation | Loss History | `rpl_number_losses` | Number of Pregnancy Losses (consecutive) | `number` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Loss History | `rpl_loss_timing` | Typical Loss Timing | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Loss History | `rpl_prior_live_births` | Prior Live Births | `number` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Loss History | `rpl_products_of_conception_karyotype` | POC Karyotype (if performed) | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Loss History | `rpl_most_recent_loss_date` | Most Recent Loss Date | `date` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Diagnostic Workup | `rpl_aps_testing` | Antiphospholipid Syndrome (APS) Testing | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Diagnostic Workup | `rpl_aps_antibodies` | APS Antibody Titers (lupus AC, aCL IgG/IgM, anti-b2GPI) | `textarea` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Diagnostic Workup | `rpl_parental_karyotype` | Parental Karyotype | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Diagnostic Workup | `rpl_uterine_anatomy` | Uterine Anatomy Assessment | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Diagnostic Workup | `rpl_imaging_method` | Uterine Imaging Method | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Diagnostic Workup | `rpl_thyroid` | Thyroid Screen | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Diagnostic Workup | `rpl_thrombophilia` | Inherited Thrombophilia Testing | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Diagnostic Workup | `rpl_unexplained` | Cause Identified | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Treatment and Next Pregnancy Plan | `rpl_aps_treatment` | APS Treatment (if confirmed) | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Treatment and Next Pregnancy Plan | `rpl_progesterone` | Progesterone Supplementation | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Treatment and Next Pregnancy Plan | `rpl_levothyroxine` | Levothyroxine (TSH target under 2.5) | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Treatment and Next Pregnancy Plan | `rpl_pgt_a` | PGT-A for Next IVF Cycle | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Treatment and Next Pregnancy Plan | `rpl_counseling` | Counseling and Support | `select` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Treatment and Next Pregnancy Plan | `rpl_prognosis` | Prognosis Discussion (live birth rate 60-80% with unexplained RPL) | `textarea` |  |  |  |
| Recurrent Pregnancy Loss Evaluation | Treatment and Next Pregnancy Plan | `rpl_notes` | Additional Notes | `textarea` |  |  |  |

## Sleep Medicine

### CPAP Follow-Up — `cpap_followup_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| PAP Therapy Follow-Up | PAP Compliance (from Device Download) | `avg_hours_night` | Average Hours/Night (30-day) | `number` |  |  |  |
| PAP Therapy Follow-Up | PAP Compliance (from Device Download) | `pct_nights_4hr` | Nights Used ≥4 hrs (%) | `number` |  |  |  |
| PAP Therapy Follow-Up | PAP Compliance (from Device Download) | `residual_ahi` | Residual AHI (events/hr) | `number` |  |  |  |
| PAP Therapy Follow-Up | PAP Compliance (from Device Download) | `pressure_setting` | CPAP Pressure or APAP Range (cmH2O) | `text` |  |  |  |
| PAP Therapy Follow-Up | PAP Compliance (from Device Download) | `leak_90pct` | 90th Percentile Leak Rate (L/min) | `number` |  |  |  |
| PAP Therapy Follow-Up | Symptom Review | `ess_score` | Epworth Sleepiness Scale (0-24) | `number` |  |  |  |
| PAP Therapy Follow-Up | Symptom Review | `snoring_resolved` | Snoring resolved on PAP | `checkbox` |  |  |  |
| PAP Therapy Follow-Up | Symptom Review | `witnessed_apneas_resolved` | Witnessed apneas resolved on PAP | `checkbox` |  |  |  |
| PAP Therapy Follow-Up | Symptom Review | `side_effects` | Side Effects / Issues | `textarea` |  |  |  |
| PAP Therapy Follow-Up | Plan | `compliance_adequate` | Compliance adequate (CMS: >4hrs ≥70% of nights in 30-day window) | `checkbox` |  |  |  |
| PAP Therapy Follow-Up | Plan | `mask_change` | Mask change ordered | `checkbox` |  |  |  |
| PAP Therapy Follow-Up | Plan | `pressure_adjustment` | Pressure Adjustment (if any) | `text` |  |  |  |
| PAP Therapy Follow-Up | Plan | `retitration_ordered` | Retitration study ordered | `checkbox` |  |  |  |
| PAP Therapy Follow-Up | Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Insomnia — `sleep_medicine_insomnia_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Insomnia Disorder — CBT-I, Pharmacotherapy, and Comorbidity Management | Insomnia Classification, Epidemiology, and Assessment | `insomnia_f1` | Insomnia Evaluation: DEFINITION (DIFFICULTY INITIATING Or MAINTAINING SLEEP Or EARLY MORNING AWAKENING; DESPITE ADEQUATE OPPORTUNITY; DAYTIME FUNCTIONAL IMPAIRMENT; EPIDEMIOLOGY (10-15 pct POPULATION CHRONIC INSOMNIA; 20-30 pct TRANSIENT; WOMEN MORE PREVALENT 1.5X; OLDER ADULTS; COMORBID CONDITIONS; CLASSIFICATION (ACUTE SHORT TERM UNDER 3 MONTHS; CHRONIC: OVER 3 MONTHS 3 NIGHTS WEEKLY Or MORE; DSMS-5: DISORDER IF MEETS FREQUENCY DURATION CRITERIA; SUBTYPES (SLEEP ONSET INSOMNIA: DIFFICULTY FALLING ASLEEP; SLEEP MAINTENANCE: WAKING MIDDLE NIGHT RETURNING SLEEP; EARLY MORNING AWAKENING DEPRESSION ASSOCIATED; MIXED; ETIOLOGY 3P MODEL (PREDISPOSING: GENETIC ANXIETY HYPERAROUSAL; PRECIPITATING: STRESS TRAUMA ILLNESS MEDICATIONS; PERPETUATING: CONDITIONED AROUSAL MALADAPTIVE BEHAVIORS; COMORBID CONDITIONS (DEPRESSION ANXIETY BIDIRECTIONAL; PAIN SYNDROMES; RESTLESS LEGS SYNDROME; MEDICAL: HEART FAILURE COPD GERD MENOPAUSE; MEDICATIONS: STEROIDS BETA BLOCKERS STIMULANTS ALCOHOL; SUBSTANCE USE; ASSESSMENT (SLEEP DIARY 1-2 WEEKS: BEDTIME WAKE TIME TST; SLEEP QUALITY; DAYTIME FUNCTIONING; PITTSBURGH SLEEP QUALITY INDEX PSQI: 0-21; OVER 5 POOR; INSOMNIA SEVERITY INDEX ISI: 0-28; OVER 14 MODERATE; EPWORTH SLEEPINESS SCALE: IF EXCESSIVE DAYTIME SLEEPINESS CONSIDER OSA; POLYSOMNOGRAPHY NOT ROUTINE: WHEN OSA OR PARASOMNIAS SUSPECTED; ACTIGRAPHY: OBJECTIVE SLEEP-WAKE PATTERNS OVER WEEKS) | `text` |  |  |  |
| Insomnia Disorder — CBT-I, Pharmacotherapy, and Comorbidity Management | Insomnia Classification, Epidemiology, and Assessment | `insomnia_f2` | CBT-I Treatment and Pharmacological Options | `select` |  |  |  |

### Insomnia Assessment — `insomnia_assessment_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Insomnia Assessment | Insomnia Characteristics | `isi_score` | Insomnia Severity Index (ISI, 0-28) | `number` |  |  |  |
| Insomnia Assessment | Insomnia Characteristics | `insomnia_type` | Insomnia Type | `select` |  |  |  |
| Insomnia Assessment | Insomnia Characteristics | `duration` | Duration | `select` |  |  |  |
| Insomnia Assessment | Insomnia Characteristics | `avg_sleep_time` | Average Time in Bed / Sleep Time (hours) | `text` |  |  |  |
| Insomnia Assessment | Insomnia Characteristics | `comorbid_depression` | Comorbid depression (PHQ-9 elevated) | `checkbox` |  |  |  |
| Insomnia Assessment | Insomnia Characteristics | `comorbid_anxiety` | Comorbid anxiety (GAD-7 elevated) | `checkbox` |  |  |  |
| Insomnia Assessment | CBT-I Plan | `cbt_i_components` | CBT-I Components Prescribed (sleep restriction, stimulus control, sleep hygiene, cognitive restructuring, relaxation) | `textarea` |  |  |  |
| Insomnia Assessment | CBT-I Plan | `sleep_diary_ordered` | Sleep diary provided | `checkbox` |  |  |  |
| Insomnia Assessment | CBT-I Plan | `referral_psychologist` | Referral to CBT-I psychologist | `checkbox` |  |  |  |
| Insomnia Assessment | Pharmacotherapy (if CBT-I inadequate) | `sleep_med` | Sleep Aid Prescribed | `select` |  |  |  |
| Insomnia Assessment | Pharmacotherapy (if CBT-I inadequate) | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Narcolepsy — `sleep_medicine_narcolepsy_cf`

Screen: 1 page(s) · 3 section(s) · 21 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Narcolepsy and Hypersomnia Evaluation | Symptoms and Presentation | `narc_age_onset` | Age of Symptom Onset (bimodal peaks: 15-25 and 35-45) | `number` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Symptoms and Presentation | `narc_ess_score` | Epworth Sleepiness Scale (ESS) Score (typically 15-24 in narcolepsy) | `number` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Symptoms and Presentation | `narc_cataplexy` | Cataplexy (sudden loss of muscle tone with emotion) | `select` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Symptoms and Presentation | `narc_cataplexy_triggers` | Cataplexy Triggers (laughter most common, surprise, excitement, anger) | `textarea` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Symptoms and Presentation | `narc_sleep_paralysis` | Sleep Paralysis | `select` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Symptoms and Presentation | `narc_hypnagogic_hallucinations` | Hypnagogic/Hypnopompic Hallucinations | `select` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Symptoms and Presentation | `narc_disrupted_nocturnal` | Disrupted Nocturnal Sleep | `select` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Symptoms and Presentation | `narc_automatic_behavior` | Automatic Behavior (microsleeps) | `select` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Diagnostic Testing | `narc_psg_mslt_date` | PSG/MSLT Date | `date` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Diagnostic Testing | `narc_psg_findings` | Nocturnal PSG Findings (night before MSLT) | `select` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Diagnostic Testing | `narc_mslt_sol` | MSLT Mean Sleep Onset Latency (min) - narcolepsy under 8 min | `number` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Diagnostic Testing | `narc_soremps` | Number of SOREMPs on MSLT (narcolepsy requires 2 or more) | `number` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Diagnostic Testing | `narc_csf_hypocretin` | CSF Hypocretin-1 (Orexin) Level | `select` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Diagnostic Testing | `narc_diagnosis` | Diagnosis | `select` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Treatment | `narc_wake_promoting` | Wake-Promoting Agent (EDS) | `select` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Treatment | `narc_sodium_oxybate` | Sodium Oxybate (GHB - Xyrem) for Cataplexy and EDS | `select` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Treatment | `narc_cataplexy_agent` | Cataplexy Agent (if not on oxybate) | `select` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Treatment | `narc_naps` | Scheduled Naps | `select` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Treatment | `narc_driving_safety` | Driving Safety Counseling | `select` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Treatment | `narc_schedule` | DEA Schedule Documentation | `select` |  |  |  |
| Narcolepsy and Hypersomnia Evaluation | Treatment | `narc_notes` | Additional Notes | `textarea` |  |  |  |

### Narcolepsy / Hypersomnia — `sleep_medicine_hypersomnia_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Central Hypersomnias — Narcolepsy, MSLT, and Idiopathic Hypersomnia | Narcolepsy Classification and Diagnosis | `narcolepsy_dx` | Narcolepsy Type 1 vs. Type 2 Criteria (NARCOLEPSY TYPE 1 (NT1) — HYPOCRETIN DEFICIENCY: ICSD-3 criteria: excessive daytime sleepiness >=3 months PLUS: CSF hypocretin-1 <=110 pg/mL (or <1/3 of normal mean) OR cataplexy + MSLT criteria; PATHOPHYSIOLOGY: selective loss of hypocretin-producing neurons (lateral hypothalamus); autoimmune destruction (HLA DQB1*06:02 — >95% of NT1); CATAPLEXY: sudden bilateral loss of muscle tone triggered by emotion (laughter, surprise, anger); consciousness preserved; MSLT CRITERIA for NT1 (without CSF hypocretin): mean sleep latency <=8 min + >=2 SOREMPs (sleep-onset REM periods); NARCOLEPSY TYPE 2 (NT2): EDS + MSLT criteria (<=8 min latency + >=2 SOREMPs); NO cataplexy; CSF hypocretin normal (>110 pg/mL or cannot be tested); HLA less commonly DQB1*06:02; MSLT PROTOCOL: 4-5 naps at 2-hour intervals (0800, 1000, 1200, 1400, 1600); preceded by overnight PSG (rule out: OSA, PLMD, insufficient sleep); MEDICATION WASHOUT: 2 weeks from most medications (REM-suppressing, sedating, stimulating); SOREMP: REM sleep occurring within 15 minutes of sleep onset; OVERNIGHT PSG SOREMP: one PSG-SOREMP = one MSLT-SOREMP for NT1 calculation | `text` |  |  |  |
| Central Hypersomnias — Narcolepsy, MSLT, and Idiopathic Hypersomnia | Narcolepsy Classification and Diagnosis | `treatment` | Narcolepsy Treatment Algorithm | `select` |  |  |  |
| Central Hypersomnias — Narcolepsy, MSLT, and Idiopathic Hypersomnia | Idiopathic Hypersomnia Treatment | `ih_dx` | Idiopathic Hypersomnia Diagnosis and Prevalence (IDIOPATHIC HYPERSOMNIA (IH): ICSD-3: EDS + long sleep time (>11h/24h) or short sleep time with unrefreshing naps; no cataplexy; MSLT: mean latency <=8 min + <2 SOREMPs (to distinguish from NT2); OR MSL >8 min with long sleep time document; PATHOPHYSIOLOGY: unknown; possible GABA-A receptor potentiation (small bioactive peptide in CSF); sleep inertia prominent (extreme difficulty awakening); SLEEP DRUNKENNESS: very severe morning confusion + automatic behavior; distinguishes IH from narcolepsy; ACTIGRAPHY + SLEEP DIARY: confirms long total sleep time before MSLT; DIAGNOSIS OF EXCLUSION: rule out sleep disorders (OSA, PLMD, circadian disorders), medications (sedating), psychiatric disorders (depression), thyroid, chronic fatigue; PREVALENCE: 0.5-1% (rarer than narcolepsy); HLA associations different from NT1; BIOMARKER SEARCH: CSF GABA-A potentiating peptide (research setting; not clinically available); CLINICAL FEATURES: long naps unrefreshing (unlike narcolepsy where brief naps refreshing); continuous sleepiness (not nap-wake cycling); foggy cognition; significant disability; quality of life severely impaired) | `text` |  |  |  |
| Central Hypersomnias — Narcolepsy, MSLT, and Idiopathic Hypersomnia | Idiopathic Hypersomnia Treatment | `ih_treatment` | IH Treatment — Clarithromycin and Flumazenil | `select` |  |  |  |

### Narcolepsy Eval — `narcolepsy_evaluation_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Narcolepsy / Hypersomnia Evaluation | Clinical Features | `ess_score` | Epworth Sleepiness Scale (ESS, 0-24; >10 = EDS) | `number` |  |  |  |
| Narcolepsy / Hypersomnia Evaluation | Clinical Features | `cataplexy` | Cataplexy present (muscle weakness triggered by emotion) | `checkbox` |  |  |  |
| Narcolepsy / Hypersomnia Evaluation | Clinical Features | `sleep_paralysis` | Sleep paralysis episodes | `checkbox` |  |  |  |
| Narcolepsy / Hypersomnia Evaluation | Clinical Features | `hypnagogic_hallucinations` | Hypnagogic / hypnopompic hallucinations | `checkbox` |  |  |  |
| Narcolepsy / Hypersomnia Evaluation | Clinical Features | `fragmented_nocturnal` | Fragmented nocturnal sleep | `checkbox` |  |  |  |
| Narcolepsy / Hypersomnia Evaluation | Clinical Features | `automatic_behaviors` | Automatic behaviors (carries out tasks without memory) | `checkbox` |  |  |  |
| Narcolepsy / Hypersomnia Evaluation | Diagnostic Testing (MSLT) | `prior_psg_date` | Prior Night PSG Date | `date` |  |  |  |
| Narcolepsy / Hypersomnia Evaluation | Diagnostic Testing (MSLT) | `mslt_mean_sleep_latency` | MSLT Mean Sleep Latency (min — ≤8 min = EDS) | `number` |  |  |  |
| Narcolepsy / Hypersomnia Evaluation | Diagnostic Testing (MSLT) | `soremp_count` | SOREMPs on MSLT (≥2 + PSG SOREMP = criteria met) | `number` |  |  |  |
| Narcolepsy / Hypersomnia Evaluation | Diagnostic Testing (MSLT) | `psg_soremp` | PSG SOREMP <15 min (counts as 1 SOREMP for criteria) | `checkbox` |  |  |  |
| Narcolepsy / Hypersomnia Evaluation | Diagnostic Testing (MSLT) | `hypocretin` | CSF Hypocretin-1 Level (pg/mL — ≤110 = NT1) | `number` |  |  |  |
| Narcolepsy / Hypersomnia Evaluation | Diagnosis and Treatment | `narcolepsy_type` | Diagnosis | `select` |  |  |  |
| Narcolepsy / Hypersomnia Evaluation | Diagnosis and Treatment | `wake_promoting` | Wake-Promoting Agent | `select` |  |  |  |
| Narcolepsy / Hypersomnia Evaluation | Diagnosis and Treatment | `sodium_oxybate` | Sodium oxybate / low-sodium oxybate (Xyrem/Lumryz) prescribed for cataplexy | `checkbox` |  |  |  |
| Narcolepsy / Hypersomnia Evaluation | Diagnosis and Treatment | `notes` | Assessment and Plan | `textarea` |  |  |  |

### RLS / PLMD — `rls_plmd_evaluation_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| RLS / PLMD Evaluation | IRLSSG Diagnostic Criteria for RLS | `urge_to_move` | 1. Urge to move legs, usually accompanied by unpleasant sensations | `checkbox` |  |  |  |
| RLS / PLMD Evaluation | IRLSSG Diagnostic Criteria for RLS | `worse_rest` | 2. Symptoms worsen during inactivity / rest | `checkbox` |  |  |  |
| RLS / PLMD Evaluation | IRLSSG Diagnostic Criteria for RLS | `relieved_movement` | 3. Partially/totally relieved by movement | `checkbox` |  |  |  |
| RLS / PLMD Evaluation | IRLSSG Diagnostic Criteria for RLS | `worse_evening` | 4. Symptoms exclusively or predominantly in evening / night | `checkbox` |  |  |  |
| RLS / PLMD Evaluation | IRLSSG Diagnostic Criteria for RLS | `irls_score` | IRLS Rating Scale (0-40) | `number` |  |  |  |
| RLS / PLMD Evaluation | PLMD (from Sleep Study) | `plmi` | PLM Index (PLMI, events/hr) | `number` |  |  |  |
| RLS / PLMD Evaluation | PLMD (from Sleep Study) | `plmai` | PLM-Arousal Index (PLMAI) | `number` |  |  |  |
| RLS / PLMD Evaluation | PLMD (from Sleep Study) | `plmd_diagnosis` | PLMD diagnosed (PLMI ≥15 adults / ≥5 children + insomnia/EDS + not RLS) | `checkbox` |  |  |  |
| RLS / PLMD Evaluation | Workup and Treatment | `ferritin` | Serum Ferritin (ng/mL — target >75 for RLS) | `number` |  |  |  |
| RLS / PLMD Evaluation | Workup and Treatment | `iron_supplementation` | Iron supplementation recommended (ferritin <75) | `checkbox` |  |  |  |
| RLS / PLMD Evaluation | Workup and Treatment | `rls_tx` | RLS Pharmacotherapy | `select` |  |  |  |
| RLS / PLMD Evaluation | Workup and Treatment | `augmentation_noted` | Dopamine agonist augmentation noted (symptoms spreading / earlier onset) | `checkbox` |  |  |  |
| RLS / PLMD Evaluation | Workup and Treatment | `notes` | Assessment and Plan | `textarea` |  |  |  |
