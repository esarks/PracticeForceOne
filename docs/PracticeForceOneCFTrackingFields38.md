---
title: "PracticeForceOneCFTrackingFields38"
---

# CF Tracking — Field-Level Detail (part 38 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Toxicology**, **Clinical Genetics**, **Interventional Radiology**, **Medical Genetics**, **Medical Oncology**, **OB/GYN**, **Preventive**, **Radiology**, **Surgery**, **Vascular**, **Wound Care**, **Addiction Medicine**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Toxicology

### Acetaminophen Overdose (NAC) — `toxicology_acetaminophen_overdose_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acetaminophen Overdose — Nomogram, NAC Protocol, and Liver Failure | Risk Assessment and Nomogram Interpretation | `nomogram` | Rumack-Matthew Nomogram (HEPATOTOXICITY MECHANISM: NAPQI (N-acetyl-p-benzoquinone imine): toxic metabolite from CYP2E1/1A2; normally detoxified by glutathione; overdose depletes glutathione; NAPQI covalently binds hepatocytes; ZONE 3 (centrilobular) necrosis; CLINICAL PHASES: Phase I (0-24h): nausea/vomiting/malaise (mild; may be absent); Phase II (24-72h): AST/ALT rise; RUQ pain; Phase III (72-96h): peak hepatotoxicity (AST >1000; coagulopathy; encephalopathy); Phase IV (4 days - 2 weeks): recovery or fulminant liver failure; RUMACK-MATTHEW NOMOGRAM: TIMING: 4-24h post-ingestion (single acute ingestion); PLOT: serum acetaminophen level vs. time post-ingestion; TREATMENT LINE: 150 mcg/mL at 4h, declining; levels ABOVE treatment line → treat with NAC; POSSIBLE RISK LINE: 75 mcg/mL at 4h (historically used; now US uses treatment line only); LIMITATIONS: unreliable for: staggered ingestions; unknown time of ingestion; extended-release formulations (XR); chronic alcohol use (increased CYP2E1 + depleted glutathione); use NAC empirically if uncertain timing; EARLY TREATMENT CRITICAL: NAC most effective if started within 8-10 hours of ingestion | `text` |  |  |  |
| Acetaminophen Overdose — Nomogram, NAC Protocol, and Liver Failure | Risk Assessment and Nomogram Interpretation | `extended_release` | Extended-Release Acetaminophen Management | `select` |  |  |  |
| Acetaminophen Overdose — Nomogram, NAC Protocol, and Liver Failure | NAC Protocol and Liver Failure Criteria | `nac_protocol` | N-Acetylcysteine Protocol (NAC MECHANISM: restores glutathione; direct detoxification of NAPQI; anti-inflammatory; antioxidant; IV preferred for: encephalopathy, vomiting, liver injury already present; ORAL NAC (Acetadote PO): 140 mg/kg loading dose then 70 mg/kg Q4h x17 doses (72h course); acceptable if tolerating PO; unpleasant taste; IV NAC (FDA APPROVED 3-BAG PROTOCOL): BAG 1: 150 mg/kg in 200 mL D5W over 1h (LOADING dose); BAG 2: 50 mg/kg in 500 mL D5W over 4h; BAG 3: 100 mg/kg in 1000 mL D5W over 16h; TOTAL: 21h regimen; MODIFIED 2-BAG PROTOCOL: 200 mg/kg over 4h then 100 mg/kg over 16h; NAC INFUSION REACTION (anaphylactoid): 6-14% at loading dose (urticaria, angioedema, bronchospasm; histamine-mediated; NOT IgE); MANAGEMENT: slow rate; diphenhydramine; if severe: stop; restart at lower rate; WHEN TO CONTINUE NAC BEYOND 21H: persistent liver injury (elevated LFTs); ongoing elevation or rising; coagulopathy; DURATION: continue until AST/ALT trending down AND INR normalizing; BENEFIT BEYOND 24H: NAC still beneficial even late (>24h post-ingestion) in established hepatotoxicity | `text` |  |  |  |
| Acetaminophen Overdose — Nomogram, NAC Protocol, and Liver Failure | NAC Protocol and Liver Failure Criteria | `liver_failure` | Fulminant Hepatic Failure Criteria and KCC | `select` |  |  |  |

### Alcohol Withdrawal — `toxicology_alcohol_withdrawal_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Alcohol Withdrawal Protocol (Inpatient) | Risk Stratification | `ciwa_score` | CIWA-Ar Score (0-67; <8 = minimal; 8-15 = mild-moderate; >15 = severe — AWS risk) | `number` |  |  |  |
| Alcohol Withdrawal Protocol (Inpatient) | Risk Stratification | `seizure_history` | Prior alcohol withdrawal seizures (highest risk for recurrence — load phenobarbital regardless of current CIWA) | `checkbox` |  |  |  |
| Alcohol Withdrawal Protocol (Inpatient) | Risk Stratification | `delirium_tremens_hx` | Prior delirium tremens (DTs) — life-threatening if untreated; mortality 1-5% even with treatment | `checkbox` |  |  |  |
| Alcohol Withdrawal Protocol (Inpatient) | Risk Stratification | `last_drink` | Time of Last Drink (hours ago) — withdrawal typically begins 6-24h after cessation; peak at 24-72h | `text` |  |  |  |
| Alcohol Withdrawal Protocol (Inpatient) | Risk Stratification | `daily_consumption` | Daily Alcohol Consumption (number of drinks per day; chronicity of heavy use) | `text` |  |  |  |
| Alcohol Withdrawal Protocol (Inpatient) | Withdrawal Management Protocol | `benzodiazepine_protocol` | Benzodiazepine Protocol | `select` |  |  |  |
| Alcohol Withdrawal Protocol (Inpatient) | Withdrawal Management Protocol | `thiamine` | Thiamine 500 mg IV TID x 3 days (before any glucose — prevent Wernicke encephalopathy); then oral 100 mg daily | `checkbox` |  |  |  |
| Alcohol Withdrawal Protocol (Inpatient) | Withdrawal Management Protocol | `electrolytes` | Electrolyte Repletion (K+, Mg++, phosphate — depleted in chronic AUD; hypomagnesemia worsens withdrawal severity; target K+ >4.0, Mg++ >2.0) | `textarea` |  |  |  |
| Alcohol Withdrawal Protocol (Inpatient) | Complication Monitoring | `seizure_prophylaxis` | Seizure prophylaxis addressed (benzodiazepines are primary prevention; phenobarbital or levetiracetam if breakthrough) | `checkbox` |  |  |  |
| Alcohol Withdrawal Protocol (Inpatient) | Complication Monitoring | `dt_risk` | Delirium Tremens Risk Assessment | `select` |  |  |  |

### Med Safety Review — `toxicology_medication_reconciliation_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medication Safety and Pharmacology Review | Drug Interaction Screening | `major_interactions` | Major Drug-Drug Interactions Identified (mechanism, clinical significance, management: avoid / adjust / monitor) | `textarea` |  |  |  |
| Medication Safety and Pharmacology Review | Drug Interaction Screening | `cyp450_concerns` | CYP450 Interactions (CYP3A4, 2D6, 2C9/2C19 inhibitors/inducers affecting drug levels — warfarin, tacrolimus, statins) | `textarea` |  |  |  |
| Medication Safety and Pharmacology Review | Drug Interaction Screening | `qt_prolongation` | QT-prolonging drug combinations (azithromycin + fluoroquinolone; antipsychotics + antiarrhythmics — baseline ECG; avoid if QTc >500ms) | `checkbox` |  |  |  |
| Medication Safety and Pharmacology Review | High-Alert Medication Review | `anticoagulants` | Anticoagulants (warfarin: INR target and range; DOAC: dose-check for renal function — dabigatran and apixaban dose thresholds) | `textarea` |  |  |  |
| Medication Safety and Pharmacology Review | High-Alert Medication Review | `insulin_regimen` | Insulin Safety (correct insulin type; dose; timing; sick-day rules; hypoglycemia action plan) | `textarea` |  |  |  |
| Medication Safety and Pharmacology Review | High-Alert Medication Review | `opioid_safety` | Opioid Safety (morphine milligram equivalents MME/day; >90 MME = red flag; equianalgesic conversion accuracy; naloxone co-prescribed) | `textarea` |  |  |  |
| Medication Safety and Pharmacology Review | Renal and Hepatic Dose Adjustments | `egfr` | eGFR (mL/min/1.73m2) for Renal Dose Adjustment | `number` |  |  |  |
| Medication Safety and Pharmacology Review | Renal and Hepatic Dose Adjustments | `renal_dose_adjustments` | Renal Dose Adjustments Made (metformin hold if eGFR <30; gabapentin reduce; DOAC dose reduce; NSAIDs avoid) | `textarea` |  |  |  |
| Medication Safety and Pharmacology Review | Renal and Hepatic Dose Adjustments | `hepatic_impairment` | Hepatic Impairment (Child-Pugh for dose adjustment guidance) | `select` |  |  |  |

### Occupational Exposure — `toxicology_occupational_exposure_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hazardous Substance Occupational Exposure | Exposure Details | `agent` | Hazardous Agent | `select` |  |  |  |
| Hazardous Substance Occupational Exposure | Exposure Details | `duration` | Duration of Occupational Exposure (years) and Intensity (daily exposure level, PPE use) | `text` |  |  |  |
| Hazardous Substance Occupational Exposure | Exposure Details | `biologic_monitoring` | Biologic Monitoring Results (blood/urine heavy metals; cholinesterase levels; chest film; PFTs — reference ACGIH BEI values) | `textarea` |  |  |  |
| Hazardous Substance Occupational Exposure | Clinical Manifestations | `target_organs` | Target Organ Effects (CNS, peripheral neuropathy, pulmonary, renal, hepatic, hematologic, reproductive) | `textarea` |  |  |  |
| Hazardous Substance Occupational Exposure | Clinical Manifestations | `chelation_needed` | Chelation Therapy Indicated | `select` |  |  |  |
| Hazardous Substance Occupational Exposure | Work Restrictions and Reporting | `work_restriction` | Work Restriction | `select` |  |  |  |
| Hazardous Substance Occupational Exposure | Work Restrictions and Reporting | `osha_reportable` | OSHA reportable case (work-related illness affecting >3 days lost/restricted work — employer must record on OSHA 300 log) | `checkbox` |  |  |  |
| Hazardous Substance Occupational Exposure | Work Restrictions and Reporting | `workers_comp` | Workers compensation claim filed / in progress | `checkbox` |  |  |  |

### SUD Treatment Initiation — `toxicology_substance_use_treatment_cf`

Screen: 1 page(s) · 3 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Substance Use Disorder Treatment Initiation | OUD Treatment (MOUD) | `moud_choice` | Medication for Opioid Use Disorder (MOUD) | `select` |  |  |  |
| Substance Use Disorder Treatment Initiation | OUD Treatment (MOUD) | `cows_at_induction` | COWS Score at Induction (Clinical Opiate Withdrawal Scale; >8 = mild withdrawal; begin buprenorphine when COWS >8) | `number` |  |  |  |
| Substance Use Disorder Treatment Initiation | OUD Treatment (MOUD) | `starting_dose` | Starting Dose (buprenorphine: 2-4 mg test dose, then 8-16 mg target on day 1; titrate over 1-3 days to suppress cravings/withdrawal) | `text` |  |  |  |
| Substance Use Disorder Treatment Initiation | Alcohol Use Disorder Treatment | `aud_medication` | AUD Medication | `select` |  |  |  |
| Substance Use Disorder Treatment Initiation | Alcohol Use Disorder Treatment | `ciwa_protocol` | CIWA-Ar Score (Clinical Institute Withdrawal Assessment); protocol: CIWA >10 = lorazepam 2 mg q1h PRN; CIWA >15 = admit | `text` |  |  |  |
| Substance Use Disorder Treatment Initiation | Counseling and Recovery Support | `behavioral_treatment` | Behavioral Treatment Referral | `select` |  |  |  |
| Substance Use Disorder Treatment Initiation | Counseling and Recovery Support | `naloxone_prescribed` | Naloxone (Narcan) prescribed for patient and household members (SAMHSA recommendation: prescribe to all OUD patients) | `checkbox` |  |  |  |

### Toxicology Overdose — `toxicology_overdose_assessment_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Overdose and Poisoning Assessment | Exposure Details | `toxin_class` | Toxin / Drug Class | `select` |  |  |  |
| Overdose and Poisoning Assessment | Exposure Details | `route` | Route of Exposure | `select` |  |  |  |
| Overdose and Poisoning Assessment | Exposure Details | `estimated_dose` | Estimated Dose and Time of Ingestion (contact Poison Control: 1-800-222-1222 for management guidance) | `text` |  |  |  |
| Overdose and Poisoning Assessment | Exposure Details | `intentional` | Intent | `select` |  |  |  |
| Overdose and Poisoning Assessment | Toxidrome Assessment | `toxidrome_pattern` | Clinical Toxidrome | `select` |  |  |  |
| Overdose and Poisoning Assessment | Toxidrome Assessment | `vital_sign_abnormalities` | Vital Sign Abnormalities (temperature, HR, BP, RR, O2 sat — critical for toxidrome identification) | `textarea` |  |  |  |
| Overdose and Poisoning Assessment | Treatment | `decontamination` | GI Decontamination | `select` |  |  |  |
| Overdose and Poisoning Assessment | Treatment | `antidote` | Antidote / Specific Treatment (naloxone, NAC, atropine, fomepizole, Digibind, sodium bicarbonate, deferoxamine, flumazenil if needed) | `text` |  |  |  |
| Overdose and Poisoning Assessment | Treatment | `enhanced_elimination` | Enhanced elimination needed (hemodialysis for methanol, ethylene glycol, lithium, salicylates — threshold criteria met) | `checkbox` |  |  |  |

## Clinical Genetics

### Genetics Consultation — `clinical_genetics_hereditary_cf`

Screen: 1 page(s) · 3 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clinical Genetics / Genetic Counseling Consultation | Referral Indication | `indication` | Indication for Referral | `select` |  |  |  |
| Clinical Genetics / Genetic Counseling Consultation | Three-Generation Pedigree | `cancer_history` | Cancer Family History (tumor type, age at diagnosis, relationship; bilateral/multiple primaries; Jewish ancestry — Ashkenazi BRCA prevalence 1:40) | `textarea` |  |  |  |
| Clinical Genetics / Genetic Counseling Consultation | Three-Generation Pedigree | `consanguinity` | Consanguinity | `select` |  |  |  |
| Clinical Genetics / Genetic Counseling Consultation | Three-Generation Pedigree | `ancestry` | Ethnic Background (Ashkenazi Jewish, Finnish, French-Canadian, African, South Asian — population-specific disease prevalence affects pretest probability and NBS panels) | `text` |  |  |  |
| Clinical Genetics / Genetic Counseling Consultation | Genetic Testing Plan | `testing_strategy` | Testing Strategy | `select` |  |  |  |
| Clinical Genetics / Genetic Counseling Consultation | Genetic Testing Plan | `vus_counseling` | Variant of Uncertain Significance (VUS) Counseling (classification may change; do not make clinical decisions based on VUS alone; annual reclassification check; encourage laboratory re-contact) | `textarea` |  |  |  |

### Hereditary Cancer Genetics — `clinical_genetics_cancer_hereditary_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hereditary Cancer Syndrome — Risk Assessment and Testing | Syndrome Assessment and Family History | `syndrome_type` | Suspected Hereditary Cancer Syndrome | `select` |  |  |  |
| Hereditary Cancer Syndrome — Risk Assessment and Testing | Syndrome Assessment and Family History | `pedigree` | 3-Generation Pedigree Summary (maternal and paternal lineage; cancer types, ages of onset, bilateral tumors, multiple primaries; identify all first and second-degree relatives with cancer; Ashkenazi Jewish ancestry; consanguinity; note deceased relatives and available tumor tissue for testing; NCCN Genetic/Familial High-Risk Assessment guidelines) | `textarea` |  |  |  |
| Hereditary Cancer Syndrome — Risk Assessment and Testing | Genetic Testing Plan | `testing_approach` | Testing Approach | `select` |  |  |  |
| Hereditary Cancer Syndrome — Risk Assessment and Testing | Genetic Testing Plan | `informed_consent` | Pre-test Counseling Documentation (informed consent; GINA (Genetic Information Nondiscrimination Act) explained — health insurance and employment protection; life/disability/long-term care insurance not protected; psychological impact of results; family implications; options for cascade testing of relatives; testing alternatives; planned post-result management if positive; time for decision-making if requested) | `text` |  |  |  |

### Hereditary Cancer Genetics (BRCA/Lynch) — `clinical_genetics_hereditary_cancer_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hereditary Cancer Syndromes — Testing Criteria and Risk Reduction | BRCA1/2 and PALB2 | `brca_testing` | BRCA Testing Criteria (NCCN 2024: genetic testing recommended for: breast cancer diagnosis <50 years; triple-negative breast cancer any age; bilateral breast cancer; breast + ovarian cancer (personal or family); male breast cancer; ovarian, fallopian tube, or peritoneal cancer (any); pancreatic or prostate cancer (high-grade) with FH; 2+ first-degree relatives with breast or ovarian cancer; FH suggesting hereditary syndrome; Ashkenazi Jewish ancestry with breast/ovarian cancer; MAINZ criteria; universal tumor testing: all ovarian + endometrial cancers tested for MMR (somatic + germline); multigene panel: BRCA1/2 + PALB2 + ATM + CHEK2 + RAD51C/D + STK11 (PJS) + CDH1 + PTEN (Cowden) + TP53 (Li-Fraumeni)) | `text` |  |  |  |
| Hereditary Cancer Syndromes — Testing Criteria and Risk Reduction | BRCA1/2 and PALB2 | `brca_management` | BRCA Mutation Management | `select` |  |  |  |
| Hereditary Cancer Syndromes — Testing Criteria and Risk Reduction | Lynch Syndrome Germline Testing and Counseling | `lynch_testing` | Lynch Germline Testing Indication | `select` |  |  |  |
| Hereditary Cancer Syndromes — Testing Criteria and Risk Reduction | Lynch Syndrome Germline Testing and Counseling | `vus` | Variant of Uncertain Significance (VUS) Management (VUS = variant where pathogenicity not yet classified; ~10-30% of panel tests; NCCN: manage based on PERSONAL/FAMILY history, NOT the VUS; do NOT offer prophylactic surgery for VUS alone; reclassification occurs as evidence accumulates (ClinVar, LOVD); recontact patient if reclassified; clinical context: if family history is compelling and VUS in plausible gene, may consider enhanced surveillance; genetic counseling required; discrimination protections: GINA (germline) — does NOT cover life/disability/LTC insurance; ACA prohibits health insurance discrimination) | `text` |  |  |  |

### Metabolic Genetics — `clinical_genetics_metabolic_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Inborn Errors of Metabolism Assessment | Metabolic Diagnosis | `category` | Metabolic Category | `select` |  |  |  |
| Inborn Errors of Metabolism Assessment | Metabolic Diagnosis | `nbs_result` | Newborn Screen Result (NBS marker values; RUSP panel; confirmation testing required before clinical action) | `text` |  |  |  |
| Inborn Errors of Metabolism Assessment | Metabolic Management | `diet_restriction` | Dietary Restrictions (specific amino acid restriction; medical formula requirements; sick day plan — avoid fasting, increase calories; ER letter for metabolic crisis) | `textarea` |  |  |  |
| Inborn Errors of Metabolism Assessment | Metabolic Management | `enzyme_therapy` | Enzyme Replacement Therapy (ERT) or Substrate Reduction (agent, dose, frequency, infusion site; ADA monitoring; antibody formation surveillance) | `text` |  |  |  |
| Inborn Errors of Metabolism Assessment | Metabolic Management | `monitoring` | Metabolic Monitoring Plan (amino acid levels, acylcarnitines, ammonia, lactate/pyruvate, CBC, LFTs — frequency; age-specific normal ranges; development surveillance) | `text` |  |  |  |

### Newborn Screening (NBS / RUSP) — `clinical_genetics_newborn_screening_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Newborn Screening — RUSP, IEM Follow-Up, and WES in NICU | Newborn Screening Program Overview | `rusp` | RUSP (Recommended Uniform Screening Panel) (RUSP 2024: 37 core conditions; 26 secondary conditions; updated quarterly; PRIMARY METABOLIC CONDITIONS: AMINO ACID DISORDERS: PKU (phenylketonuria): PAH deficiency; Phe elevation; prevent intellectual disability with low-Phe diet + BH4 (sapropterin for BH4-responsive); MAPLE SYRUP URINE DISEASE (MSUD): branched-chain amino acid catabolism defect; protein restriction + thiamine for certain types; HOMOCYSTINURIA: CBS deficiency; methionine elevation; homocysteine restriction + B6 + betaine; FATTY ACID OXIDATION DEFECTS: MCAD (medium-chain acyl-CoA dehydrogenase): most common FAO; fasting intolerance; hypoketotic hypoglycemia; sudden death risk with illness; TREATMENT: avoid fasting; frequent feeds; cornstarch; L-carnitine supplementation; VLCAD: more severe; avoid fasting; MCT formula (bypass VLCAD); LCHAD: eye involvement; liver; peripheral neuropathy; ORGANIC ACIDEMIAS: PROPIONIC ACIDEMIA (PA), METHYLMALONIC ACIDEMIA (MMA): hyperammonemia crisis; protein restriction; B12 for responsive MMA; cobalamin supplementation; biotin; ISOVALERIC ACIDEMIA (IVA): glycine + carnitine; glutaric aciduria type I (GA-1): macrocephaly; striatal injury with febrile illness; high-carb, low-Lys diet; carnitine; HEMOGLOBIN: SCD (sickle cell disease) + SC + beta-thal; prophylactic penicillin age 2 months; immunizations; hydroxyurea | `text` |  |  |  |
| Newborn Screening — RUSP, IEM Follow-Up, and WES in NICU | Newborn Screening Program Overview | `nbs_conditions` | Other RUSP Core Conditions | `select` |  |  |  |
| Newborn Screening — RUSP, IEM Follow-Up, and WES in NICU | Follow-Up Protocols and WES in NICU | `followup_protocol` | NBS Follow-Up and Management Protocols (ABNORMAL NBS RESULT: contact family IMMEDIATELY (within 24-48h for urgent conditions); PROCESS: state public health lab contacts provider; NBS program often directly contacts family for urgent conditions; PRIMARY CARE PHYSICIAN ROLE: arrange urgent diagnostic testing; refer to metabolic specialist/clinical geneticist; DIAGNOSTIC CONFIRMATION: repeat plasma amino acids, acylcarnitines (MS/MS); urine organic acids (GC/MS); enzyme assay; molecular genetic testing; DO NOT DELAY: in metabolic emergencies (MSUD, PA, MMA, UCD): do not wait for genetic confirmation; treat emergently; ACUTE METABOLIC MANAGEMENT: stop protein temporarily; high caloric glucose infusion; carnitine supplementation; ammonia scavenger drugs (sodium benzoate + sodium phenylacetate = Ammonul for UCD); METABOLIC TEAM: dietitian + metabolic geneticist essential for ongoing management; FAMILY COUNSELING: autosomal recessive inheritance (PKU, MSUD, OA, FAO); 25% recurrence risk; carrier testing; prenatal diagnosis; NBS FALSE POSITIVES: common in prematurity, early collection, maternal conditions (maternal HCY for homocystinuria); always CONFIRM before treating; FALSE NEGATIVES: rare but occur; clinical suspicion overrides negative NBS; timing of sample collection critical (PKU: best >=24h after protein feeding) | `text` |  |  |  |
| Newborn Screening — RUSP, IEM Follow-Up, and WES in NICU | Follow-Up Protocols and WES in NICU | `wes_nicu` | Rapid Whole Exome Sequencing in NICU | `select` |  |  |  |

## Interventional Radiology

### Liver Biopsy (IR) — `ir_liver_biopsy_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Image-Guided Liver Biopsy Report | Pre-Procedure | `indication` | Indication for Biopsy | `text` |  |  |  |
| Image-Guided Liver Biopsy Report | Pre-Procedure | `inr_pre` | Pre-Procedure INR | `number` |  |  |  |
| Image-Guided Liver Biopsy Report | Pre-Procedure | `platelets_pre` | Pre-Procedure Platelets (k/μL) | `number` |  |  |  |
| Image-Guided Liver Biopsy Report | Pre-Procedure | `anticoagulation_held` | Anticoagulation held per protocol | `checkbox` |  |  |  |
| Image-Guided Liver Biopsy Report | Pre-Procedure | `approach` | Approach | `select` |  |  |  |
| Image-Guided Liver Biopsy Report | Biopsy Details | `needle_type` | Needle Type | `select` |  |  |  |
| Image-Guided Liver Biopsy Report | Biopsy Details | `passes` | Number of Passes | `number` |  |  |  |
| Image-Guided Liver Biopsy Report | Biopsy Details | `sample_adequacy` | Sample Adequacy (visual) | `select` |  |  |  |
| Image-Guided Liver Biopsy Report | Biopsy Details | `immediate_complications` | Immediate Complications | `select` |  |  |  |
| Image-Guided Liver Biopsy Report | Post-Procedure | `observation_period` | Observation Period | `text` |  |  |  |
| Image-Guided Liver Biopsy Report | Post-Procedure | `discharge_instructions` | Discharge Instructions / Restrictions | `textarea` |  |  |  |
| Image-Guided Liver Biopsy Report | Post-Procedure | `pathology_prelim` | Preliminary / Expected Pathology Findings | `text` |  |  |  |
| Image-Guided Liver Biopsy Report | Post-Procedure | `notes` | Impression and Plan | `textarea` |  |  |  |

### Peripheral Angio/Stent — `ir_peripheral_angioplasty_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Peripheral Angioplasty / Stenting Report | Procedure Details | `indication` | Indication | `select` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Procedure Details | `access_site` | Vascular Access Site | `select` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Procedure Details | `sheath_size` | Sheath Size (Fr) | `text` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Procedure Details | `contrast_volume` | Contrast Volume (mL) | `number` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Procedure Details | `fluoroscopy_time` | Fluoroscopy Time (min) | `number` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Lesion and Treatment | `target_vessel` | Target Vessel(s) | `text` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Lesion and Treatment | `lesion_length` | Lesion Length (mm) | `number` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Lesion and Treatment | `pre_stenosis` | Pre-Procedure Stenosis (%) | `number` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Lesion and Treatment | `post_stenosis` | Residual Stenosis Post-Procedure (%) | `number` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Lesion and Treatment | `balloon_type` | Balloon / DCB (drug-coated balloon) Size (mm × mm) | `text` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Lesion and Treatment | `stent_placed` | Stent placed | `checkbox` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Lesion and Treatment | `stent_details` | Stent Type and Size (if placed) | `text` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Lesion and Treatment | `technical_success` | Technical success (<30% residual, no flow-limiting dissection) | `checkbox` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Post-Procedure | `abi_post` | ABI Post-Procedure (target ≥0.9) | `number` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Post-Procedure | `closure_device` | Closure Device / Method | `text` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Post-Procedure | `complications` | Complications | `textarea` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Post-Procedure | `anticoagulation` | Post-Procedure Antiplatelet / Anticoagulation Plan | `text` |  |  |  |
| Peripheral Angioplasty / Stenting Report | Post-Procedure | `notes` | Impression and Plan | `textarea` |  |  |  |

### Port / PICC Placement — `ir_port_placement_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Venous Port / PICC Placement Report | Device and Access | `device_type` | Device Type | `select` |  |  |  |
| Venous Port / PICC Placement Report | Device and Access | `indication` | Indication | `text` |  |  |  |
| Venous Port / PICC Placement Report | Device and Access | `access_vein` | Access Vein | `select` |  |  |  |
| Venous Port / PICC Placement Report | Device and Access | `ultrasound_guided` | Ultrasound guidance used for venous access | `checkbox` |  |  |  |
| Venous Port / PICC Placement Report | Technical Details | `catheter_tip_position` | Catheter Tip Position (fluoroscopy / CXR) | `select` |  |  |  |
| Venous Port / PICC Placement Report | Technical Details | `port_pocket_side` | Port Pocket Side (if port) | `select` |  |  |  |
| Venous Port / PICC Placement Report | Technical Details | `blood_return` | Good blood return and flush confirmed | `checkbox` |  |  |  |
| Venous Port / PICC Placement Report | Technical Details | `complications` | Complications (pneumothorax, arterial puncture, arrhythmia) | `textarea` |  |  |  |
| Venous Port / PICC Placement Report | Post-Procedure | `cxr_ordered` | Post-procedure CXR confirmed tip position | `checkbox` |  |  |  |
| Venous Port / PICC Placement Report | Post-Procedure | `notes` | Impression | `textarea` |  |  |  |

### Tumor Ablation — `ir_ablation_report_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Tumor Ablation Report | Target Lesion | `organ` | Organ | `select` |  |  |  |
| Tumor Ablation Report | Target Lesion | `tumor_size` | Tumor Size (mm) | `number` |  |  |  |
| Tumor Ablation Report | Target Lesion | `tumor_location` | Tumor Location (segment / pole / description) | `text` |  |  |  |
| Tumor Ablation Report | Target Lesion | `imaging_guidance` | Imaging Guidance | `select` |  |  |  |
| Tumor Ablation Report | Ablation Parameters | `ablation_type` | Ablation Modality | `select` |  |  |  |
| Tumor Ablation Report | Ablation Parameters | `probe_count` | Number of Probes / Antennas | `number` |  |  |  |
| Tumor Ablation Report | Ablation Parameters | `ablation_time` | Total Ablation Time (min) | `number` |  |  |  |
| Tumor Ablation Report | Ablation Parameters | `ablation_margin_mm` | Estimated Ablation Margin (mm) | `number` |  |  |  |
| Tumor Ablation Report | Ablation Parameters | `technical_success` | Technical success (≥5 mm margin achieved on imaging) | `checkbox` |  |  |  |
| Tumor Ablation Report | Post-Procedure | `complications` | Complications | `textarea` |  |  |  |
| Tumor Ablation Report | Post-Procedure | `followup_imaging` | Follow-Up Imaging Plan (CT/MRI at 1 month, then q3 months × 1 yr) | `text` |  |  |  |
| Tumor Ablation Report | Post-Procedure | `notes` | Impression and Plan | `textarea` |  |  |  |

### UFE Report — `uterine_fibroid_embolization_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| UFE Report | Pre-Procedure Assessment | `symptoms` | Primary Indication | `select` |  |  |  |
| UFE Report | Pre-Procedure Assessment | `uterine_size` | Uterine Size on MRI (cm) | `text` |  |  |  |
| UFE Report | Pre-Procedure Assessment | `dominant_fibroid_size` | Dominant Fibroid Diameter (cm) | `number` |  |  |  |
| UFE Report | Pre-Procedure Assessment | `fibroid_location` | Fibroid Location (FIGO) | `select` |  |  |  |
| UFE Report | Embolization Details | `access` | Vascular Access | `select` |  |  |  |
| UFE Report | Embolization Details | `embolic_agent` | Embolic Agent | `select` |  |  |  |
| UFE Report | Embolization Details | `bilateral_embolization` | Bilateral uterine artery embolization completed | `checkbox` |  |  |  |
| UFE Report | Embolization Details | `endpoint` | Embolization Endpoint | `select` |  |  |  |
| UFE Report | Embolization Details | `contrast_volume` | Contrast Volume (mL) | `number` |  |  |  |
| UFE Report | Embolization Details | `fluoroscopy_time` | Fluoroscopy Time (min) | `number` |  |  |  |
| UFE Report | Post-Procedure | `pain_control_plan` | Post-Procedure Pain Control Plan | `text` |  |  |  |
| UFE Report | Post-Procedure | `complications` | Complications | `textarea` |  |  |  |
| UFE Report | Post-Procedure | `followup_mri_ordered` | Follow-up MRI ordered (3-6 months) | `checkbox` |  |  |  |
| UFE Report | Post-Procedure | `notes` | Impression and Plan | `textarea` |  |  |  |

## Medical Genetics

### Carrier Screening — `carrier_screening_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Preconception / Carrier Screening | Screening Panel | `screening_type` | Carrier Screening Approach | `select` |  |  |  |
| Preconception / Carrier Screening | Screening Panel | `both_partners` | Both partners being screened (couples screening — identifies at-risk couples directly) | `checkbox` |  |  |  |
| Preconception / Carrier Screening | Key Conditions Counseled | `cf_result` | Cystic Fibrosis (CFTR) | `select` |  |  |  |
| Preconception / Carrier Screening | Key Conditions Counseled | `sma_result` | Spinal Muscular Atrophy (SMN1) | `select` |  |  |  |
| Preconception / Carrier Screening | Key Conditions Counseled | `fragile_x` | Fragile X Premutation (FMR1) — offered to women | `select` |  |  |  |
| Preconception / Carrier Screening | Key Conditions Counseled | `hemoglobinopathy` | Hemoglobinopathy Screen (CBC + Hb electrophoresis) | `select` |  |  |  |
| Preconception / Carrier Screening | Reproductive Options (if at-risk couple identified) | `at_risk_couple` | At-risk couple identified (both carriers of same autosomal recessive condition — 25% risk per pregnancy) | `checkbox` |  |  |  |
| Preconception / Carrier Screening | Reproductive Options (if at-risk couple identified) | `options_counseled` | Reproductive Options Counseled (prenatal diagnosis via CVS/amnio, IVF + PGT-M, gamete donation, adoption, acceptance of risk) | `textarea` |  |  |  |

### Hereditary Cancer Genetics — `hereditary_cancer_genetics_cf`

Screen: 1 page(s) · 4 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hereditary Cancer Genetics Consultation | Referral Indication | `referral_reason` | Reason for Genetic Counseling | `select` |  |  |  |
| Hereditary Cancer Genetics Consultation | Referral Indication | `cancer_type_patient` | Patient's Own Cancer History (if any) | `text` |  |  |  |
| Hereditary Cancer Genetics Consultation | Three-Generation Pedigree Summary | `maternal_cancers` | Maternal Lineage Cancer History (type, age) | `textarea` |  |  |  |
| Hereditary Cancer Genetics Consultation | Three-Generation Pedigree Summary | `paternal_cancers` | Paternal Lineage Cancer History (type, age) | `textarea` |  |  |  |
| Hereditary Cancer Genetics Consultation | Three-Generation Pedigree Summary | `cancer_pattern` | Pedigree Pattern Suggests | `select` |  |  |  |
| Hereditary Cancer Genetics Consultation | Genetic Testing | `testing_recommended` | Germline genetic testing recommended | `checkbox` |  |  |  |
| Hereditary Cancer Genetics Consultation | Genetic Testing | `panel_type` | Testing Platform / Panel | `select` |  |  |  |
| Hereditary Cancer Genetics Consultation | Genetic Testing | `affected_relative_first` | Recommend testing affected relative first (highest yield) | `checkbox` |  |  |  |
| Hereditary Cancer Genetics Consultation | Genetic Testing | `lab_company` | Testing Laboratory | `text` |  |  |  |
| Hereditary Cancer Genetics Consultation | Surveillance / Prevention Recommendations | `mri_breast` | Annual breast MRI (if BRCA1/2 or lifetime risk ≥20%) | `checkbox` |  |  |  |
| Hereditary Cancer Genetics Consultation | Surveillance / Prevention Recommendations | `colonoscopy_lynch` | Colonoscopy interval (Lynch: q1-2yr; FAP: annual flex-sig) | `text` |  |  |  |
| Hereditary Cancer Genetics Consultation | Surveillance / Prevention Recommendations | `rrso` | Risk-reducing salpingo-oophorectomy (RRSO) discussed (BRCA1 35-40 yr, BRCA2 40-45 yr) | `checkbox` |  |  |  |
| Hereditary Cancer Genetics Consultation | Surveillance / Prevention Recommendations | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Pediatric Genetics — `pediatric_genetics_cf`

Screen: 1 page(s) · 4 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Genetics / Dysmorphology Consultation | Indication and History | `indication` | Reason for Genetics Consult | `select` |  |  |  |
| Pediatric Genetics / Dysmorphology Consultation | Indication and History | `family_history` | Family History (consanguinity, ethnicity, prior affected children) | `textarea` |  |  |  |
| Pediatric Genetics / Dysmorphology Consultation | Indication and History | `prenatal_exposures` | Prenatal History (teratogen exposure, infections, complications) | `textarea` |  |  |  |
| Pediatric Genetics / Dysmorphology Consultation | Dysmorphic Feature Inventory | `head_shape` | Head Shape (brachycephaly, dolichocephaly, microcephaly) | `text` |  |  |  |
| Pediatric Genetics / Dysmorphology Consultation | Dysmorphic Feature Inventory | `facial_features` | Facial Features (hypertelorism, synophrys, epicanthal folds, low-set ears, micrognathia) | `textarea` |  |  |  |
| Pediatric Genetics / Dysmorphology Consultation | Dysmorphic Feature Inventory | `limbs_hands` | Limb / Hand Findings (clinodactyly, polydactyly, brachydactyly, single palmar crease) | `textarea` |  |  |  |
| Pediatric Genetics / Dysmorphology Consultation | Dysmorphic Feature Inventory | `skin_findings` | Skin Findings (cafe-au-lait spots, ash leaf macules, axillary freckling) | `text` |  |  |  |
| Pediatric Genetics / Dysmorphology Consultation | Diagnostic Workup | `cma_ordered` | Chromosomal microarray (CMA) — first-tier for ID/ASD/MCA (15-20% yield) | `checkbox` |  |  |  |
| Pediatric Genetics / Dysmorphology Consultation | Diagnostic Workup | `exome_ordered` | Clinical exome / genome sequencing (if CMA negative + high suspicion; 25-40% yield) | `checkbox` |  |  |  |
| Pediatric Genetics / Dysmorphology Consultation | Diagnostic Workup | `metabolic_panel` | Metabolic workup (lactate, pyruvate, ammonia, amino acids, organic acids, urine OA) if IEM suspected | `checkbox` |  |  |  |
| Pediatric Genetics / Dysmorphology Consultation | Diagnostic Workup | `karyotype_ordered` | Karyotype (if Down/Turner/Klinefelter clinically suspected) | `checkbox` |  |  |  |
| Pediatric Genetics / Dysmorphology Consultation | Diagnosis and Plan | `suspected_diagnosis` | Clinical Diagnosis or Suspected Syndrome | `text` |  |  |  |
| Pediatric Genetics / Dysmorphology Consultation | Diagnosis and Plan | `notes` | Assessment and Plan / Referrals | `textarea` |  |  |  |

### Pharmacogenomics — `pharmacogenomics_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pharmacogenomics Consultation | Referral Indication | `referral_reason` | Reason for PGx Testing | `select` |  |  |  |
| Pharmacogenomics Consultation | Referral Indication | `prior_drug_reactions` | Prior Adverse Drug Reactions / Non-Response | `textarea` |  |  |  |
| Pharmacogenomics Consultation | Key CYP Phenotype Results | `cyp2d6` | CYP2D6 Phenotype | `select` |  |  |  |
| Pharmacogenomics Consultation | Key CYP Phenotype Results | `cyp2c19` | CYP2C19 Phenotype | `select` |  |  |  |
| Pharmacogenomics Consultation | Key CYP Phenotype Results | `cyp2c9` | CYP2C9 Phenotype (warfarin, NSAIDs) | `select` |  |  |  |
| Pharmacogenomics Consultation | Key CYP Phenotype Results | `slco1b1` | SLCO1B1 (statin myopathy risk) | `select` |  |  |  |
| Pharmacogenomics Consultation | Drug Therapy Recommendations | `actionable_findings` | Actionable PGx Findings and Drug Recommendations | `textarea` |  |  |  |
| Pharmacogenomics Consultation | Drug Therapy Recommendations | `ehr_flag` | PGx results added to EHR for future prescribing alerts | `checkbox` |  |  |  |
| Pharmacogenomics Consultation | Drug Therapy Recommendations | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Prenatal Genetics — `prenatal_genetics_cf`

Screen: 1 page(s) · 4 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prenatal Genetic Counseling | Indication for Prenatal Genetics | `indication` | Indication | `select` |  |  |  |
| Prenatal Genetic Counseling | Indication for Prenatal Genetics | `ga_weeks` | Gestational Age (weeks) | `number` |  |  |  |
| Prenatal Genetic Counseling | cfDNA / Serum Screen Results | `nipt_result` | cfDNA / NIPT Result | `select` |  |  |  |
| Prenatal Genetic Counseling | cfDNA / Serum Screen Results | `nipt_limitation_counseled` | NIPT is a SCREENING test — positive must be confirmed by diagnostic testing (CVS / amnio) | `checkbox` |  |  |  |
| Prenatal Genetic Counseling | Diagnostic Testing | `diagnostic_offered` | Invasive diagnostic testing offered and discussed | `checkbox` |  |  |  |
| Prenatal Genetic Counseling | Diagnostic Testing | `diagnostic_chosen` | Diagnostic Test Chosen | `select` |  |  |  |
| Prenatal Genetic Counseling | Diagnostic Testing | `karyotype_cma` | Test Ordered on Sample | `select` |  |  |  |
| Prenatal Genetic Counseling | Plan | `mfm_referral` | MFM (maternal-fetal medicine) referral for level II anatomy ultrasound / fetal echocardiography | `checkbox` |  |  |  |
| Prenatal Genetic Counseling | Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

## Medical Oncology

### Colorectal Cancer — `medical_oncology_colorectal_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Colorectal Cancer — Systemic Therapy and Molecular Profile | Molecular and MSI Profile | `ras_braf` | RAS/BRAF Status (required for systemic therapy selection) | `select` |  |  |  |
| Colorectal Cancer — Systemic Therapy and Molecular Profile | Molecular and MSI Profile | `msi` | MSI / MMR Status | `select` |  |  |  |
| Colorectal Cancer — Systemic Therapy and Molecular Profile | Molecular and MSI Profile | `her2` | HER2 Amplification | `select` |  |  |  |
| Colorectal Cancer — Systemic Therapy and Molecular Profile | Chemotherapy Regimen | `line` | Line of Therapy | `select` |  |  |  |
| Colorectal Cancer — Systemic Therapy and Molecular Profile | Chemotherapy Regimen | `resectability` | Metastatic Disease Resectability Assessment | `select` |  |  |  |

### Immunotherapy / irAE — `medical_oncology_immunotherapy_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Immunotherapy — irAE Assessment and Management | Immunotherapy Agent | `checkpoint_inhibitor` | Checkpoint Inhibitor (CPI) | `select` |  |  |  |
| Immunotherapy — irAE Assessment and Management | Immunotherapy Agent | `cycles_completed` | Cycles Completed | `number` |  |  |  |
| Immunotherapy — irAE Assessment and Management | irAE Assessment | `irae_type` | Active irAE Type | `select` |  |  |  |
| Immunotherapy — irAE Assessment and Management | irAE Assessment | `ctcae_grade` | CTCAE Grade of irAE | `select` |  |  |  |

### Lung Cancer — `medical_oncology_lung_cancer_cf`

Screen: 1 page(s) · 3 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lung Cancer — Staging and Systemic Therapy | Histology and Molecular Profile | `histology` | Histologic Type | `select` |  |  |  |
| Lung Cancer — Staging and Systemic Therapy | Histology and Molecular Profile | `molecular` | Driver Mutation / Molecular Target | `select` |  |  |  |
| Lung Cancer — Staging and Systemic Therapy | Histology and Molecular Profile | `pdl1` | PD-L1 TPS (Tumor Proportion Score) | `select` |  |  |  |
| Lung Cancer — Staging and Systemic Therapy | Staging (AJCC 9th) | `stage` | Clinical Stage | `select` |  |  |  |
| Lung Cancer — Staging and Systemic Therapy | First-Line Systemic Therapy | `regimen` | Treatment Regimen (agent, dose, cycle length; EGFR/ALK/ROS1: appropriate TKI; KRAS G12C: carboplatin/pem/pembro then switch at progression; SCLC: EP + atezolizumab; oligometastatic strategies) | `text` |  |  |  |
| Lung Cancer — Staging and Systemic Therapy | First-Line Systemic Therapy | `response_monitoring` | Response Monitoring (CT C/A/P every 2 cycles; PET if needed; liquid biopsy for acquired resistance detection; CNS MRI if symptomatic or driver mutation) | `text` |  |  |  |

### Metastatic Breast Cancer — `medical_oncology_breast_cancer_advanced_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Advanced / Metastatic Breast Cancer — Systemic Therapy | Receptor Status and Biology | `subtype` | Breast Cancer Subtype | `select` |  |  |  |
| Advanced / Metastatic Breast Cancer — Systemic Therapy | Receptor Status and Biology | `her2_status` | HER2 Status (IHC/ISH) | `select` |  |  |  |
| Advanced / Metastatic Breast Cancer — Systemic Therapy | Receptor Status and Biology | `brca_status` | BRCA Germline Status | `select` |  |  |  |
| Advanced / Metastatic Breast Cancer — Systemic Therapy | Systemic Treatment Plan | `line` | Line of Therapy | `select` |  |  |  |
| Advanced / Metastatic Breast Cancer — Systemic Therapy | Systemic Treatment Plan | `bone_mets_management` | Bone Metastases Management (denosumab 120 mg monthly or zoledronic acid monthly then q3 months; RANKL vs. bisphosphonate; dental evaluation before starting; jaw osteonecrosis risk; hypocalcemia supplement Ca/Vit D) | `text` |  |  |  |

### Prostate Cancer — `medical_oncology_prostate_cancer_cf`

Screen: 1 page(s) · 3 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prostate Cancer — Metastatic and Castration-Resistant (mCRPC) | Disease State Classification | `stage` | Disease Stage | `select` |  |  |  |
| Prostate Cancer — Metastatic and Castration-Resistant (mCRPC) | Disease State Classification | `adt` | ADT Backbone (LHRH agonist or antagonist; bilateral orchiectomy; duration; testosterone level confirmation <50 ng/dL = castrate) | `text` |  |  |  |
| Prostate Cancer — Metastatic and Castration-Resistant (mCRPC) | Molecular and Biomarker Status | `brca_hrd` | HRR Gene Status (germline + somatic testing) | `select` |  |  |  |
| Prostate Cancer — Metastatic and Castration-Resistant (mCRPC) | Molecular and Biomarker Status | `msi_tmb` | MSI / TMB Status | `select` |  |  |  |
| Prostate Cancer — Metastatic and Castration-Resistant (mCRPC) | Systemic Treatment | `mhspc_regimen` | mHSPC Treatment Intensification (beyond ADT alone) | `select` |  |  |  |
| Prostate Cancer — Metastatic and Castration-Resistant (mCRPC) | Systemic Treatment | `psma_therapy` | 177Lu-PSMA-617 (lutetium-PSMA; VISION trial; mCRPC after ARSI + taxane; PSMA PET positive; dosimetry-selected; renal and salivary gland toxicity monitoring; q6 weeks × 6 cycles) | `text` |  |  |  |

## OB/GYN

### Contraception — `obstetrics_contraception_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Contraception — Options and Counseling | Contraception Methods and Efficacy | `contra_f1` | Contraception Overview: PEARL INDEX: Pregnancies Per 100 Women-Years Typical Use; EFFECTIVENESS TIERS: TIER 1 LARC (Most Effective Over 99 pct; User-Independent): IUDs + Implant; TIER 2 INJECTABLE/PATCH/RING (91-99 pct Typical; 99 pct Perfect Use): DMPA Patch NuvaRing Pills; TIER 3 BARRIER (Typical 82-88 pct Condom 85 pct): Condom Diaphragm Sponge; TIER 4 Behavioral (Typical 76-88 pct); INTRAUTERINE DEVICES (IUD): HORMONAL (Mirena 52 mcg LNG 5-8Y; Kyleena 19.5 mcg 5Y; Liletta 7Y; Skyla 13.5 mcg 3Y; Amenorrhea 20-25 pct; Decreased Dysmenorrhea; Treats AUB/HMB); COPPER PARAGARD (Non-Hormonal 10Y; Emergency Contraception if Within 5D; Heavier Cramping); NEXPLANON IMPLANT (68 mg Etonogestrel; Subderm Upper Arm; 3Y; Most Effective 99.9 pct; Irregular Bleeding Most Common; No Estrogen); COMBINED ORAL CONTRACEPTIVE (COC): VTE RISK (3-4x; Drospirenone Desogestrel Higher; Estrogen Dose Dependent; ABSOLUTE CI: Personal VTE History Migraine with Aura Stroke; Smoker Over 35 Heavy); PROGESTIN-ONLY PILL (POP Minipill; Norethindrone; Desogestrel Slynd 24-4 Pack; Safe Breastfeeding; Safe VTE History Migraine with Aura; Must Take Same Time QD 3H Window; Irregular Spotting) | `text` |  |  |  |
| Contraception — Options and Counseling | Contraception Methods and Efficacy | `contra_f2` | Hormonal Methods and Emergency Contraception | `select` |  |  |  |

### Gestational Diabetes — `obgyn_gestational_diabetes_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Gestational Diabetes Mellitus GDM — Screening, Glycemic Control, and Outcomes | Screening, Diagnosis, and Pathophysiology | `gdm_f1` | Gestational Diabetes Evaluation: EPIDEMIOLOGY (7-10 pct US PREGNANCIES; INCREASING INCIDENCE OBESITY; MOST COMMON MEDICAL COMPLICATION PREGNANCY; DISPARITIES: HISPANIC ASIAN PACIFIC ISLANDER NATIVE AMERICAN HIGHER RISK; PATHOPHYSIOLOGY (NORMAL PREGNANCY: INSULIN RESISTANCE INCREASES THIRD TRIMESTER; COUNTERBALANCED BY INCREASED BETA CELL FUNCTION; GDM: INSUFFICIENT BETA CELL COMPENSATION FOR INSULIN RESISTANCE; PLACENTAL HORMONES HPL PROGESTERONE CORTISOL CONTRIBUTE; RISK FACTORS (OBESITY BMI OVER 30; AGE OVER 35; PRIOR GDM OR MACROSOMIC INFANT; FAMILY HISTORY T2DM FIRST-DEGREE RELATIVE; POLYCYSTIC OVARY SYNDROME PCOS; PREDIABETES; MULTIPLE GESTATION; HIGH-RISK ETHNICITY; PRIOR STILLBIRTH; SCREENING (ALL PREGNANT 24-28 WEEKS; EARLY SCREENING RISK FACTORS (PREPREGNANCY DIABETES SCREENING; GLUCOSE CHALLENGE TEST GCT ONE-STEP (NON-FASTING 50 g ORAL GLUCOSE; 1-HOUR PLASMA GLUCOSE; THRESHOLD 130-140 mg/dL SCREEN POSITIVE; SENSITIVITY VARIES THRESHOLD; DIAGNOSTIC ORAL GLUCOSE TOLERANCE TEST OGTT THREE-HOUR 100 g (FASTING; THRESHOLD CARPENTER-COUSTAN: FASTING 95 DBH1 180 DBH2 155 DBH3 140 mg/dL TWO OR MORE ABNORMAL GDM; NDDG CRITERIA SLIGHTLY DIFFERENT; ALTERNATIVE ONE-STEP 75 g OGTT IADPSG CRITERIA (FASTING 92 1H 180 2H 153 mg/dL; ONE ABNORMAL VALUE DIAGNOSTIC; NOT UNIVERSAL STANDARD US; GLYCATED HEMOGLOBIN HBA1C (NOT PREFERRED FOR DIAGNOSIS ANEMIA DILUTION) | `text` |  |  |  |
| Gestational Diabetes Mellitus GDM — Screening, Glycemic Control, and Outcomes | Screening, Diagnosis, and Pathophysiology | `gdm_f2` | Glycemic Management and Perinatal Outcomes | `select` |  |  |  |

### Postpartum Hemorrhage — `obgyn_postpartum_hemorrhage_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Postpartum Hemorrhage PPH — Recognition, Uterotonic Therapy, and Surgical Control | Definition, Causes, and Risk Factors | `pph_f1` | Postpartum Hemorrhage Evaluation: EPIDEMIOLOGY (LEADING CAUSE MATERNAL MORTALITY GLOBALLY; 5-8 pct DELIVERIES; MOST PREVENTABLE MATERNAL DEATH; SIGNIFICANT DISPARITIES RACIAL; DEFINITION (CUMULATIVE BLOOD LOSS OVER 1000 mL Or BLOOD LOSS ASSOCIATED SIGNS SYMPTOMS HYPOVOLEMIA WITHIN 24H DELIVERY REGARDLESS ROUTE; OLDER DEFINITION OVER 500 mL VAGINAL OVER 1000 mL CESAREAN LESS USED; PRIMARY PPH: WITHIN 24H DELIVERY; SECONDARY PPH: 24H TO 12 WEEKS; CAUSES 4 Ts (TONE 80 pct: UTERINE ATONY MOST COMMON; FAILURE UTERUS CONTRACT; RISK FACTORS (OVERDISTENSION TWINS POLYHYDRAMNIOS; PROLONGED LABOR; CHORIOAMNIONITIS; HIGH PARITY; PREVIOUS PPH; UTERINE FIBROIDS; TOCOLYTICS MAGNESIUM HALOGENATED ANESTHETICS; TRAUMA 20 pct: LACERATIONS CERVICAL VAGINAL PERINEAL; UTERINE RUPTURE; EPISIOTOMY; UTERINE INVERSION; TISSUE 10 pct: RETAINED PLACENTA Or MEMBRANES; PLACENTA ACCRETA SPECTRUM PAS; THROMBIN 1 pct: COAGULOPATHY: DIC PREECLAMPSIA HELLP; AFIBRINOGENEMIA; VON WILLEBRAND DISEASE; ANTICOAGULATION; RISK ASSESSMENT (ANTENATAL: PLACENTA PREVIA ACCRETA PRIOR UTERINE SURGERY FIBROIDS MULTIPLE GESTATION GRAND MULTIPARITY HIGH BMI; INTRAPARTUM: PROLONGED LABOR CHORIOAMNIONITIS AUGMENTATION GENERAL ANESTHESIA; ACTIVE MANAGEMENT THIRD STAGE (UTEROTONIC IMMEDIATELY DELIVERY SHOULDERS; OXYTOCIN 10 IU IM STANDARD; CONTROLLED CORD TRACTION; UTERINE MASSAGE; DELAYED CORD CLAMPING NOT CONTRAINDICATED; REDUCES PPH 60 pct) | `text` |  |  |  |
| Postpartum Hemorrhage PPH — Recognition, Uterotonic Therapy, and Surgical Control | Definition, Causes, and Risk Factors | `pph_f2` | Uterotonic, Surgical, and Transfusion Management | `select` |  |  |  |

### Preeclampsia — `obgyn_preeclampsia_eclampsia_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Preeclampsia and Eclampsia — Diagnosis, Severity, and Management | Diagnosis, Classification, and Pathophysiology | `pree_f1` | Preeclampsia Evaluation: EPIDEMIOLOGY (5-8 pct PREGNANCIES WORLDWIDE; LEADING CAUSE MATERNAL MORBIDITY MORTALITY; DISPARITIES AFRICAN AMERICAN WOMEN 3x HIGHER MORTALITY; PRIMIPAROUS MULTIPLE GESTATION PRIOR PREECLAMPSIA CHRONIC HTN DIABETES OBESITY THROMBOPHILIA AUTOIMMUNE; PATHOPHYSIOLOGY (ABNORMAL PLACENTATION DEFECTIVE TROPHOBLAST INVASION SPIRAL ARTERIES; ANTI-ANGIOGENIC FACTORS: SOLUBLE FLT-1 sEng ELEVATED MATERNAL CIRCULATION; ENDOTHELIAL DYSFUNCTION SYSTEMIC; OXIDATIVE STRESS INFLAMMATION; MULTI-ORGAN EFFECT (HYPERTENSION PROTEINURIA THROMBOCYTOPENIA RENAL HEPATIC NEUROLOGIC; DIAGNOSTIC CRITERIA (HYPERTENSION: BP OVER 140/90 ON TWO OCCASIONS 4 HOURS APART; AFTER 20 WEEKS GESTATION; PROTEINURIA: OVER 300 mg/24H URINE; PROTEIN/CREATININE RATIO OVER 0.3; DIPSTICK 2+ IF QUANTITATIVE UNAVAILABLE; SEVERE FEATURES: SBP OVER 160 Or DBP OVER 110 CONFIRMED; THROMBOCYTOPENIA PLATELETS UNDER 100000; RENAL INSUFFICIENCY: CREATININE OVER 1.1 Or DOUBLE BASELINE; LIVER ENZYMES ELEVATED TWICE NORMAL; PULMONARY EDEMA; NEW-ONSET HEADACHE VISUAL DISTURBANCE; PREECLAMPSIA WITHOUT SEVERE FEATURES: ABOVE CRITERIA NO SEVERE; WITH SEVERE FEATURES: ANY SEVERE CRITERIA PRESENT; DIFFERENTIATE: GESTATIONAL HYPERTENSION NO PROTEINURIA NO ORGAN INVOLVEMENT; CHRONIC HYPERTENSION PRE-EXISTING BEFORE 20 WEEKS; SUPERIMPOSED PREECLAMPSIA ON CHRONIC HTN; HELLP SYNDROME (HEMOLYSIS ELEVATED LIVER ENZYMES LOW PLATELETS; SEVERE VARIANT; DELIVERS EVEN PREMATURE) | `text` |  |  |  |
| Preeclampsia and Eclampsia — Diagnosis, Severity, and Management | Diagnosis, Classification, and Pathophysiology | `pree_f2` | Treatment, Eclampsia, and Delivery | `select` |  |  |  |

### Prenatal Care Follow-Up — `prenatal_care_followup_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prenatal Care Follow-Up Visit | Patient & Pregnancy Status | `patientId` | Patient | `typeahead` | Y |  |  |
| Prenatal Care Follow-Up Visit | Patient & Pregnancy Status | `visitDate` | Visit Date | `date` | Y |  |  |
| Prenatal Care Follow-Up Visit | Patient & Pregnancy Status | `provider` | OB/GYN / Midwife | `typeahead` | Y |  |  |
| Prenatal Care Follow-Up Visit | Patient & Pregnancy Status | `ga` | Gestational Age (weeks + days) | `text` | Y |  |  |
| Prenatal Care Follow-Up Visit | Patient & Pregnancy Status | `edd` | Estimated Due Date (EDD) | `date` | Y |  |  |
| Prenatal Care Follow-Up Visit | Patient & Pregnancy Status | `gravida` | Obstetric History (GTPAL) | `text` | Y |  |  |
| Prenatal Care Follow-Up Visit | Patient & Pregnancy Status | `weight` | Weight Today (lbs) | `number` |  |  |  |
| Prenatal Care Follow-Up Visit | Patient & Pregnancy Status | `bp` | Blood Pressure (mmHg) | `text` |  |  |  |
| Prenatal Care Follow-Up Visit | Prenatal Assessment | `vitalFetal` | Fetal & Uterine Assessment | `textarea` | Y |  |  |
| Prenatal Care Follow-Up Visit | Prenatal Assessment | `labs` | 28-Week Labs & Screening | `textarea` | Y |  |  |
| Prenatal Care Follow-Up Visit | Gestational Diabetes Management & Birth Plan | `gdmPlan` | GDM Management Plan (if applicable) | `textarea` | Y |  |  |
| Prenatal Care Follow-Up Visit | Gestational Diabetes Management & Birth Plan | `plan` | Overall Plan & Next Visit | `textarea` | Y |  |  |

## Preventive

### Annual Wellness — `annual_wellness_cf`

Screen: 1 page(s) · 4 section(s) · 22 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Annual Wellness Visit (AWV/IPPE) | Visit Type & Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Annual Wellness Visit (AWV/IPPE) | Visit Type & Patient | `visitDate` | Visit Date | `date` | Y |  |  |
| Annual Wellness Visit (AWV/IPPE) | Visit Type & Patient | `awvType` | Visit Type | `select` | Y |  |  |
| Annual Wellness Visit (AWV/IPPE) | Visit Type & Patient | `lastPreventiveDate` | Last Preventive Visit Date | `date` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Health Status Review | `selfRatedHealth` | Self-Rated Health Status | `select` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Health Status Review | `functionalStatus` | Functional Status (ADLs) | `select` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Health Status Review | `mobilityAssessment` | Mobility / Gait | `select` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Health Status Review | `fallsHistory` | Falls in Last 12 Months | `select` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Health Status Review | `cognitiveScreening` | Cognitive Screening | `select` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Health Status Review | `hearingVision` | Hearing / Vision Status | `textarea` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Safety & Social Determinants | `homeSafety` | Home Safety | `select` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Safety & Social Determinants | `socialIsolation` | Social Isolation Risk | `select` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Safety & Social Determinants | `foodInsecurity` | Food Insecurity | `select` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Safety & Social Determinants | `transportationBarriers` | Transportation barriers identified | `checkbox` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Safety & Social Determinants | `medicationSafety` | High-risk medication review completed (Beers Criteria for 65+) | `checkbox` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Safety & Social Determinants | `abuseScreening` | Elder Abuse / Neglect Screening | `select` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Personalized Prevention Plan | `screeningsOrdered` | Screenings Ordered / Recommended | `textarea` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Personalized Prevention Plan | `immunizationsGiven` | Immunizations Given / Recommended | `textarea` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Personalized Prevention Plan | `healthGoals` | Health Goals (Patient-Identified) | `textarea` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Personalized Prevention Plan | `interventions` | Recommended Interventions | `textarea` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Personalized Prevention Plan | `referrals` | Referrals Made | `textarea` |  |  |  |
| Annual Wellness Visit (AWV/IPPE) | Personalized Prevention Plan | `awvNotes` | AWV Notes | `textarea` |  |  |  |

### Growth Chart — `growth_chart_cf`

Screen: 1 page(s) · 2 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Growth Chart | Growth Measurements | `patientId` | Patient | `typeahead` | Y |  |  |
| Pediatric Growth Chart | Growth Measurements | `measurementDate` | Measurement Date | `date` | Y |  |  |
| Pediatric Growth Chart | Growth Measurements | `ageMonths` | Age (months) | `number` |  |  |  |
| Pediatric Growth Chart | Growth Measurements | `weightKg` | Weight (kg) | `number` |  |  |  |
| Pediatric Growth Chart | Growth Measurements | `weightPercentile` | Weight Percentile | `number` |  |  |  |
| Pediatric Growth Chart | Growth Measurements | `heightCm` | Height / Length (cm) | `number` |  |  |  |
| Pediatric Growth Chart | Growth Measurements | `heightPercentile` | Height Percentile | `number` |  |  |  |
| Pediatric Growth Chart | Growth Measurements | `headCircumferenceCm` | Head Circumference (cm) | `number` |  |  |  |
| Pediatric Growth Chart | Growth Measurements | `headPercentile` | Head Circumference Percentile | `number` |  |  |  |
| Pediatric Growth Chart | Growth Measurements | `bmiPediatric` | BMI (age 2+) | `number` |  |  |  |
| Pediatric Growth Chart | Growth Measurements | `bmiPercentile` | BMI Percentile | `number` |  |  |  |
| Pediatric Growth Chart | Growth Measurements | `weightCategory` | Weight Category | `select` |  |  |  |
| Pediatric Growth Chart | Growth Assessment | `growthTrend` | Growth Trend | `select` |  |  |  |
| Pediatric Growth Chart | Growth Assessment | `nutritionAssessment` | Nutritional Assessment | `select` |  |  |  |
| Pediatric Growth Chart | Growth Assessment | `growthNotes` | Growth Notes | `textarea` |  |  |  |
| Pediatric Growth Chart | Growth Assessment | `parentCounseling` | Growth discussed with parent/guardian | `checkbox` |  |  |  |

### Health Risk Assessment — `health_risk_assessment_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Health Risk Assessment | Assessment Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Health Risk Assessment | Assessment Details | `assessmentDate` | Assessment Date | `date` | Y |  |  |
| Health Risk Assessment | Assessment Details | `assessmentType` | Assessment Type | `select` |  |  |  |
| Health Risk Assessment | Lifestyle Risk Factors | `smokingStatus` | Tobacco / Smoking Status | `select` |  |  |  |
| Health Risk Assessment | Lifestyle Risk Factors | `alcoholFrequency` | Alcohol Use | `select` |  |  |  |
| Health Risk Assessment | Lifestyle Risk Factors | `substanceUse` | Substance Use | `select` |  |  |  |
| Health Risk Assessment | Lifestyle Risk Factors | `exerciseFrequency` | Physical Activity | `select` |  |  |  |
| Health Risk Assessment | Lifestyle Risk Factors | `dietQuality` | Diet Quality (self-reported) | `select` |  |  |  |
| Health Risk Assessment | Lifestyle Risk Factors | `sleepHours` | Average Sleep (hours/night) | `number` |  |  |  |
| Health Risk Assessment | Lifestyle Risk Factors | `stressLevel` | Stress Level (0-10) | `range` |  |  |  |
| Health Risk Assessment | Medical History Risk Factors | `familyHistoryDiabetes` | Family history of diabetes | `checkbox` |  |  |  |
| Health Risk Assessment | Medical History Risk Factors | `familyHistoryHD` | Family history of heart disease / stroke | `checkbox` |  |  |  |
| Health Risk Assessment | Medical History Risk Factors | `familyHistoryCancer` | Family history of cancer | `checkbox` |  |  |  |
| Health Risk Assessment | Medical History Risk Factors | `chronicConditions` | Chronic Conditions | `textarea` |  |  |  |
| Health Risk Assessment | Medical History Risk Factors | `hraScore` | HRA Score (calculated) | `number` |  |  |  |
| Health Risk Assessment | Medical History Risk Factors | `riskLevel` | Overall Risk Level | `select` |  |  |  |
| Health Risk Assessment | Medical History Risk Factors | `hraSummary` | HRA Summary / Recommendations | `textarea` |  |  |  |

### Immunizations — `immunization_cf`

Screen: 1 page(s) · 2 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Immunization Record | Administer Vaccine | `patientId` | Patient | `typeahead` | Y |  |  |
| Immunization Record | Administer Vaccine | `vaccineName` | Vaccine | `select` | Y |  |  |
| Immunization Record | Administer Vaccine | `vaccineOther` | Other Vaccine Name (if Other) | `text` |  |  |  |
| Immunization Record | Administer Vaccine | `vaccineLot` | Lot Number | `text` | Y |  |  |
| Immunization Record | Administer Vaccine | `vaccineManufacturer` | Manufacturer | `text` |  |  |  |
| Immunization Record | Administer Vaccine | `vaccineExpiration` | Expiration Date | `date` | Y |  |  |
| Immunization Record | Administer Vaccine | `administrationDate` | Administration Date | `date` | Y |  |  |
| Immunization Record | Administer Vaccine | `administeredBy` | Administered By | `typeahead` |  |  |  |
| Immunization Record | Administer Vaccine | `site` | Injection Site | `select` |  |  |  |
| Immunization Record | Administer Vaccine | `route` | Route | `select` |  |  |  |
| Immunization Record | Administer Vaccine | `dose` | Dose | `text` |  |  |  |
| Immunization Record | Administer Vaccine | `doseNumber` | Dose Number in Series | `select` |  |  |  |
| Immunization Record | Administer Vaccine | `visSent` | VIS (Vaccine Information Statement) provided to patient | `checkbox` |  |  |  |
| Immunization Record | Administer Vaccine | `patientConsent` | Patient/guardian consent obtained | `checkbox` |  |  |  |
| Immunization Record | Administer Vaccine | `adverseReaction` | Adverse Reactions / Notes | `textarea` |  |  |  |
| Immunization Record | Immunization History | `historyNotes` | Immunization History Notes | `textarea` |  |  |  |
| Immunization Record | Immunization History | `registrySubmitted` | Submitted to state immunization registry (IIS) | `checkbox` |  |  |  |
| Immunization Record | Immunization History | `registryDate` | Registry Submission Date | `date` |  |  |  |

### Well-Child Visit — `well_child_cf`

Screen: 1 page(s) · 5 section(s) · 30 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Well-Child / Pediatric Wellness Visit | Visit Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Well-Child / Pediatric Wellness Visit | Visit Details | `visitDate` | Visit Date | `date` | Y |  |  |
| Well-Child / Pediatric Wellness Visit | Visit Details | `ageAtVisit` | Age at Visit | `text` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Visit Details | `visitType` | Well-Child Visit Age | `select` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Visit Details | `attendingWith` | Accompanying Adult | `select` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Growth & Vitals | `weightKg` | Weight (kg) | `number` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Growth & Vitals | `weightPercentile` | Weight Percentile | `number` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Growth & Vitals | `heightCm` | Length / Height (cm) | `number` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Growth & Vitals | `heightPercentile` | Height Percentile | `number` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Growth & Vitals | `hcCm` | Head Circumference (cm) | `number` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Growth & Vitals | `bmi` | BMI (2+ years) | `number` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Growth & Vitals | `bmiPercentile` | BMI Percentile | `number` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Growth & Vitals | `bp` | Blood Pressure (3+ years) | `text` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Growth & Vitals | `heartRate` | Heart Rate | `number` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Development & Screening | `devStatus` | Developmental Status | `select` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Development & Screening | `speechLanguage` | Speech & Language | `select` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Development & Screening | `motorSkills` | Motor Skills (gross/fine) | `select` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Development & Screening | `autism` | Autism Screening (M-CHAT 18-24 mo) | `select` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Development & Screening | `vision` | Vision Screening | `select` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Development & Screening | `hearing` | Hearing Screening | `select` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Development & Screening | `leadScreening` | Lead Screening (risk assessment) | `select` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Immunizations | `immStatusAtVisit` | Immunization Status at Visit | `select` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Immunizations | `vaccinesGivenToday` | Vaccines Given Today | `textarea` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Immunizations | `nextImmunizationVisit` | Next Immunization Due At | `text` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Anticipatory Guidance & Plan | `safetyTopics` | Safety Counseling | `textarea` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Anticipatory Guidance & Plan | `nutritionCounseling` | Nutrition Guidance | `textarea` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Anticipatory Guidance & Plan | `anticipatoryGuidance` | Anticipatory Guidance | `textarea` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Anticipatory Guidance & Plan | `concerns` | Parent / Guardian Concerns | `textarea` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Anticipatory Guidance & Plan | `referrals` | Referrals | `textarea` |  |  |  |
| Well-Child / Pediatric Wellness Visit | Anticipatory Guidance & Plan | `wcNotes` | Visit Notes | `textarea` |  |  |  |

## Radiology

### CT A/P Report — `ct_abdomen_pelvis_report_cf`

Screen: 1 page(s) · 4 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CT Abdomen and Pelvis Structured Report | Exam Details | `phases` | Phases / Protocol | `select` |  |  |  |
| CT Abdomen and Pelvis Structured Report | Exam Details | `indication` | Clinical Indication | `text` |  |  |  |
| CT Abdomen and Pelvis Structured Report | Solid Organs | `liver` | Liver | `select` |  |  |  |
| CT Abdomen and Pelvis Structured Report | Solid Organs | `liver_rads` | LI-RADS Category (if cirrhosis) | `select` |  |  |  |
| CT Abdomen and Pelvis Structured Report | Solid Organs | `gallbladder` | Gallbladder | `select` |  |  |  |
| CT Abdomen and Pelvis Structured Report | Solid Organs | `pancreas` | Pancreas | `select` |  |  |  |
| CT Abdomen and Pelvis Structured Report | Solid Organs | `spleen_size` | Spleen Size (cm longest axis — >13 cm = splenomegaly) | `number` |  |  |  |
| CT Abdomen and Pelvis Structured Report | Solid Organs | `kidneys` | Kidneys | `select` |  |  |  |
| CT Abdomen and Pelvis Structured Report | Bowel and Pelvis | `bowel` | Bowel | `select` |  |  |  |
| CT Abdomen and Pelvis Structured Report | Bowel and Pelvis | `appendix` | Appendix | `select` |  |  |  |
| CT Abdomen and Pelvis Structured Report | Bowel and Pelvis | `aorta` | Aorta Diameter (cm — aneurysm if >3 cm infrarenal) | `text` |  |  |  |
| CT Abdomen and Pelvis Structured Report | Bowel and Pelvis | `lymph_nodes_abd` | Lymph Nodes | `select` |  |  |  |
| CT Abdomen and Pelvis Structured Report | Impression | `impression_text` | Impression | `textarea` |  |  |  |
| CT Abdomen and Pelvis Structured Report | Impression | `recommendation` | Recommendation | `textarea` |  |  |  |

### CT Chest Report — `ct_chest_report_cf`

Screen: 1 page(s) · 4 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CT Chest Structured Report | Exam Information | `technique` | Technique | `select` |  |  |  |
| CT Chest Structured Report | Exam Information | `clinical_indication` | Clinical Indication | `text` |  |  |  |
| CT Chest Structured Report | Lung Parenchyma | `lung_findings` | Parenchymal Findings | `select` |  |  |  |
| CT Chest Structured Report | Lung Parenchyma | `nodule_size` | Dominant Nodule Size (mm — if present) | `number` |  |  |  |
| CT Chest Structured Report | Lung Parenchyma | `lung_rads` | Lung-RADS Category (if low-dose CT lung screen) | `select` |  |  |  |
| CT Chest Structured Report | Lung Parenchyma | `pleural` | Pleural Findings | `select` |  |  |  |
| CT Chest Structured Report | Mediastinum and Cardiac | `lymph_nodes` | Mediastinal / Hilar Lymph Nodes | `select` |  |  |  |
| CT Chest Structured Report | Mediastinum and Cardiac | `pericardial_effusion` | Pericardial effusion | `checkbox` |  |  |  |
| CT Chest Structured Report | Mediastinum and Cardiac | `aorta` | Aorta | `select` |  |  |  |
| CT Chest Structured Report | Mediastinum and Cardiac | `pe_detected` | Pulmonary embolism detected (on CTPA) | `checkbox` |  |  |  |
| CT Chest Structured Report | Impression | `impression_text` | Impression | `textarea` |  |  |  |
| CT Chest Structured Report | Impression | `recommendation` | Recommendation / Follow-Up | `textarea` |  |  |  |

### CXR Report — `xray_chest_report_cf`

Screen: 1 page(s) · 5 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chest X-Ray Structured Report | Technique | `view` | View | `select` |  |  |  |
| Chest X-Ray Structured Report | Technique | `quality` | Image Quality | `select` |  |  |  |
| Chest X-Ray Structured Report | Technique | `indication` | Indication | `text` |  |  |  |
| Chest X-Ray Structured Report | Cardiomediastinal | `heart_size` | Heart Size | `select` |  |  |  |
| Chest X-Ray Structured Report | Cardiomediastinal | `mediastinum` | Mediastinum | `select` |  |  |  |
| Chest X-Ray Structured Report | Cardiomediastinal | `aorta` | Aortic Contour | `select` |  |  |  |
| Chest X-Ray Structured Report | Cardiomediastinal | `hilar` | Hila | `select` |  |  |  |
| Chest X-Ray Structured Report | Lungs and Pleura | `lung_fields` | Lung Fields | `select` |  |  |  |
| Chest X-Ray Structured Report | Lungs and Pleura | `pulmonary_edema` | Pulmonary vascular congestion / interstitial edema (Kerley B lines / cephalization) | `checkbox` |  |  |  |
| Chest X-Ray Structured Report | Lungs and Pleura | `effusion` | Pleural Effusion | `select` |  |  |  |
| Chest X-Ray Structured Report | Lungs and Pleura | `ptx` | Pneumothorax (apical lucency without lung markings) | `checkbox` |  |  |  |
| Chest X-Ray Structured Report | Lines / Tubes / Devices | `ett_position` | ETT / Tracheostomy Position (tip relative to carina) | `text` |  |  |  |
| Chest X-Ray Structured Report | Lines / Tubes / Devices | `central_line` | Central Line / Port Tip Position | `text` |  |  |  |
| Chest X-Ray Structured Report | Lines / Tubes / Devices | `other_devices` | Other Devices (IABP, pacemaker, NG tube) | `text` |  |  |  |
| Chest X-Ray Structured Report | Impression | `impression_text` | Impression | `textarea` |  |  |  |

### MRI Brain Report — `mri_brain_report_cf`

Screen: 1 page(s) · 4 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| MRI Brain Structured Report | Exam Details | `indication` | Clinical Indication | `text` |  |  |  |
| MRI Brain Structured Report | Exam Details | `sequences` | Sequences Obtained | `select` |  |  |  |
| MRI Brain Structured Report | Brain Parenchyma Findings | `white_matter` | White Matter Signal | `select` |  |  |  |
| MRI Brain Structured Report | Brain Parenchyma Findings | `enhancing_lesion` | Enhancing lesion (post-gadolinium T1 — active inflammation or tumor) | `checkbox` |  |  |  |
| MRI Brain Structured Report | Brain Parenchyma Findings | `mass_effect` | Mass effect / midline shift | `checkbox` |  |  |  |
| MRI Brain Structured Report | Brain Parenchyma Findings | `dti_restriction` | DWI / ADC restriction (acute ischemia or cytotoxic edema) | `checkbox` |  |  |  |
| MRI Brain Structured Report | Brain Parenchyma Findings | `infarct` | Infarct | `select` |  |  |  |
| MRI Brain Structured Report | Brain Parenchyma Findings | `brain_mass` | Brain mass identified (glioma / metastasis / meningioma — describe in impression) | `checkbox` |  |  |  |
| MRI Brain Structured Report | Brain Parenchyma Findings | `atrophy` | Global Atrophy | `select` |  |  |  |
| MRI Brain Structured Report | Posterior Fossa and Spine Craniocervical | `cerebellum` | Cerebellum | `select` |  |  |  |
| MRI Brain Structured Report | Posterior Fossa and Spine Craniocervical | `chiari` | Chiari malformation / tonsillar herniation >5mm | `checkbox` |  |  |  |
| MRI Brain Structured Report | Posterior Fossa and Spine Craniocervical | `ventricles` | Ventricles | `select` |  |  |  |
| MRI Brain Structured Report | Impression | `impression_text` | Impression | `textarea` |  |  |  |
| MRI Brain Structured Report | Impression | `recommendation` | Recommendation / Follow-Up | `textarea` |  |  |  |

### MSK MRI Report — `musculoskeletal_mri_report_cf`

Screen: 1 page(s) · 5 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Musculoskeletal MRI Structured Report | Exam Details | `body_part` | Body Part Imaged | `select` |  |  |  |
| Musculoskeletal MRI Structured Report | Exam Details | `contrast` | Contrast | `select` |  |  |  |
| Musculoskeletal MRI Structured Report | Exam Details | `indication` | Clinical Indication | `text` |  |  |  |
| Musculoskeletal MRI Structured Report | Bone and Cartilage | `articular_cartilage` | Articular Cartilage | `select` |  |  |  |
| Musculoskeletal MRI Structured Report | Bone and Cartilage | `bone_marrow_edema` | Bone marrow edema (T2 bright / STIR — trauma / stress fracture / tumor / infection) | `checkbox` |  |  |  |
| Musculoskeletal MRI Structured Report | Bone and Cartilage | `osteonecrosis` | Osteonecrosis (AVN — subchondral crescent sign / double-line sign) | `checkbox` |  |  |  |
| Musculoskeletal MRI Structured Report | Bone and Cartilage | `osseous_lesion` | Osseous lesion (describe benign vs. aggressive features in impression) | `checkbox` |  |  |  |
| Musculoskeletal MRI Structured Report | Soft Tissue and Tendons | `meniscus` | Meniscus (Knee) | `select` |  |  |  |
| Musculoskeletal MRI Structured Report | Soft Tissue and Tendons | `acl` | ACL (Knee) | `select` |  |  |  |
| Musculoskeletal MRI Structured Report | Soft Tissue and Tendons | `rotator_cuff` | Rotator Cuff (Shoulder) | `select` |  |  |  |
| Musculoskeletal MRI Structured Report | Soft Tissue and Tendons | `labrum` | Labrum (Shoulder / Hip on Arthrogram) | `select` |  |  |  |
| Musculoskeletal MRI Structured Report | Spine Findings (if spine MRI) | `disc_disease` | Disc Disease Level(s) | `select` |  |  |  |
| Musculoskeletal MRI Structured Report | Spine Findings (if spine MRI) | `canal_stenosis` | Central Canal Stenosis | `select` |  |  |  |
| Musculoskeletal MRI Structured Report | Spine Findings (if spine MRI) | `cord_signal` | Spinal Cord Signal (Cervical) | `select` |  |  |  |
| Musculoskeletal MRI Structured Report | Impression | `impression_text` | Impression | `textarea` |  |  |  |
| Musculoskeletal MRI Structured Report | Impression | `recommendation` | Recommendation | `textarea` |  |  |  |

## Surgery

### Acute Abdomen (Advanced) — `surgery_acute_abdomen_depth_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Abdomen — Appendicitis, Perforation, Ischemia, Obstruction, DCL | Acute Abdomen Evaluation and Appendicitis | `acute_abd_eval` | Peritoneal Signs, ALVARADO Score, and CT Abdomen Interpretation (ACUTE ABDOMEN APPROACH: HISTORY: onset, character, location, migration, severity, aggravating/relieving, associated symptoms (N/V, fever, urinary, GYN); EXAM: INSPECTION: guarding; AUSCULTATION: bowel sounds (hyperactive = SBO early; absent = ileus or late SBO; absent with peritonitis); PALPATION: tenderness localization; GUARDING (voluntary vs. involuntary); RIGIDITY (board-like = diffuse peritonitis); REBOUND: peritoneal irritation; SPECIFIC SIGNS: ROVSING: RLQ pain with LLQ palpation (appendicitis); PSOAS: pain with hip extension (retrocecal appendicitis); OBTURATOR: pain with internal rotation of flexed right thigh (pelvic appendicitis); MURPHY: arrest of inspiration with RUQ palpation (cholecystitis); CULLEN + GREY TURNER: periumbilical + flank ecchymosis (retroperitoneal hemorrhage; pancreatitis); LABS: CBC; BMP; lipase; LFTs; lactate (critical); urinalysis; beta-hCG (ALL WOMEN OF REPRODUCTIVE AGE); APPENDICITIS: ALVARADO SCORE (MANTRELS): RLQ MIGRATION (1); ANOREXIA (1); NAUSEA/VOMITING (1); RLQ TENDERNESS (2); REBOUND TENDERNESS (1); ELEVATED TEMPERATURE (1); LEUKOCYTOSIS (2); SHIFT TO LEFT (1); TOTAL 10 POINTS; >=7 = high probability (operate); 5-6 = intermediate (CT or observation); <4 = low; PEDIATRIC APPENDICITIS SCORE (PAS) and APPENDICITIS INFLAMMATORY RESPONSE (AIR) SCORE; CT ABD/PELVIS: APPENDIX >6 mm + periappendiceal fat stranding; fecalith; APPENDIX RUPTURE: phlegmon; abscess; free air; FREE AIR: upright CXR first (free air under diaphragm = perforation); then CT; ANTIBIOTICS: perforated appendicitis; preop; ciprofloxacin + metronidazole or piperacillin-tazobactam; LAPAROSCOPIC APPENDECTOMY: gold standard; OPEN: diffuse peritonitis; hemodynamic instability; STUMP: secure ligation; INCIDENTAL APPENDIX: consider removal if RLQ exploration regardless; NON-OPERATIVE MANAGEMENT (NOM) FOR UNCOMPLICATED APPENDICITIS: antibiotics alone (amoxicillin-clavulanate); APPAC trial: 73% success at 5 years; 27% recurrence requiring surgery; select patients (no fecalith; no abscess); patient preference | `text` |  |  |  |
| Acute Abdomen — Appendicitis, Perforation, Ischemia, Obstruction, DCL | Acute Abdomen Evaluation and Appendicitis | `bowel_obstruct` | Small Bowel Obstruction — Conservative vs. Operative and NG Decompression | `select` |  |  |  |
| Acute Abdomen — Appendicitis, Perforation, Ischemia, Obstruction, DCL | Mesenteric Ischemia and Damage Control | `mesenteric` | Acute Mesenteric Ischemia — Embolic vs. Thrombotic vs. NOMI and Management (ACUTE MESENTERIC ISCHEMIA (AMI): TYPES: ARTERIAL EMBOLISM (50%): cardiac source (AF; MI; endocarditis); SUDDEN severe pain; SMA EMBOLISM distal to middle colic; NORMAL PROXIMAL BOWEL (spares jejunum near Treitz); ARTERIAL THROMBOSIS (25%): atherosclerotic SMA occlusion; history of chronic intestinal angina (pain postprandial; weight loss; fear of eating); DIFFUSE ISCHEMIA; NON-OCCLUSIVE MESENTERIC ISCHEMIA (NOMI; 20%): LOW FLOW state; cardiogenic shock; vasopressors; dialysis patients; MESENTERIC VENOUS THROMBOSIS (MVT; 5%): hypercoagulable; portal hypertension; insidious onset; CLINICAL: PAIN OUT OF PROPORTION TO EXAM (classic); RAPID DETERIORATION; BLOODY DIARRHEA (late); METABOLIC ACIDOSIS + ELEVATED LACTATE (late = bowel necrosis); DIAGNOSIS: CTA ABDOMEN (CT ANGIOGRAPHY): gold standard; SMA occlusion; mural thickening; portal venous gas (severe); CONVENTIONAL ANGIOGRAPHY: therapeutic; PLAIN FILM: thumbprinting; ileus; free air (perforation); MANAGEMENT: IMMEDIATE RESUSCITATION: IV fluids; NPO; BROAD-SPECTRUM ANTIBIOTICS; ANTICOAGULATION: IV heparin (unless surgery imminent); prevents propagation; EMBOLIC: EMBOLECTOMY (open SMA); CATHETER-DIRECTED THROMBOLYSIS + ASPIRATION; PHARMACOTHERAPY: PAPAVERINE (vasodilator via catheter); THROMBOTIC: REVASCULARIZATION: bypass (aortomesenteric); ENDOVASCULAR (thrombolysis + stenting); NOMI: OPTIMIZE hemodynamics; PAPAVERINE via angiography catheter (relieves vasospasm); vasopressor weaning if possible; MVT: ANTICOAGULATION: heparin then warfarin x3-6 months; EXPLORATORY LAP if peritonitis; BOWEL RESECTION if necrosis; SECOND-LOOK OPERATION: 24-48h after revascularization (questionable viability reassessed); DAMAGE CONTROL LAPAROTOMY (DCL): abbreviated laparotomy; hemorrhage control + contamination control; close temporarily; ICU resuscitation; definitive surgery 24-72h later; OPEN ABDOMEN: VAC (vacuum-assisted closure); BOGOTA BAG; temporary closure | `text` |  |  |  |
| Acute Abdomen — Appendicitis, Perforation, Ischemia, Obstruction, DCL | Mesenteric Ischemia and Damage Control | `perf_viscus` | Perforated Viscus, Peritonitis Management, and Source Control | `select` |  |  |  |

### Bariatric Surgery Follow-Up — `surgery_bariatric_followup_cf`

Screen: 1 page(s) · 3 section(s) · 25 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Bariatric Surgery Post-Operative Follow-Up | Surgical History and Weight Progress | `bari_procedure` | Bariatric Procedure | `select` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Surgical History and Weight Progress | `bari_surgery_date` | Date of Bariatric Surgery | `date` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Surgical History and Weight Progress | `bari_months_post_op` | Months Post-Operative | `text` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Surgical History and Weight Progress | `bari_pre_op_weight` | Pre-Operative Weight (lbs) and BMI | `text` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Surgical History and Weight Progress | `bari_current_weight` | Current Weight (lbs) and BMI | `text` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Surgical History and Weight Progress | `bari_twl_percent` | Total Weight Loss (lbs) and %TWL (Total Weight Loss %) — expected 50-70% excess weight loss at 1 year RYGB, 40-60% sleeve | `text` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Surgical History and Weight Progress | `bari_weight_trend` | Weight Trend | `select` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Nutritional Labs and Deficiencies | `bari_ferritin` | Ferritin (ng/mL) — deficiency common especially in premenopausal women; target above 50 | `text` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Nutritional Labs and Deficiencies | `bari_iron` | Iron and TIBC | `text` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Nutritional Labs and Deficiencies | `bari_b12` | Vitamin B12 (pg/mL) — target above 300; deficiency risk with RYGB due to intrinsic factor bypass | `text` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Nutritional Labs and Deficiencies | `bari_thiamine` | Thiamine (B1) (nmol/L) — critical to check; wernicke encephalopathy risk with persistent vomiting | `text` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Nutritional Labs and Deficiencies | `bari_vitamin_d` | Vitamin D 25-OH (ng/mL) — target above 30; hyperparathyroidism risk with deficiency | `text` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Nutritional Labs and Deficiencies | `bari_pth` | PTH (pg/mL) — secondary hyperparathyroidism from vitamin D/calcium deficiency | `text` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Nutritional Labs and Deficiencies | `bari_calcium` | Calcium (total, mg/dL) | `text` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Nutritional Labs and Deficiencies | `bari_zinc` | Zinc (mcg/dL) — hair loss, immune dysfunction | `text` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Nutritional Labs and Deficiencies | `bari_albumin` | Albumin (g/dL) — protein adequacy marker | `text` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Nutritional Labs and Deficiencies | `bari_hba1c` | HbA1c (%) — T2DM remission or resolution status | `text` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Post-Op Symptoms and Behaviors | `bari_dumping` | Dumping Syndrome (RYGB primarily) | `select` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Post-Op Symptoms and Behaviors | `bari_gerd` | GERD / Reflux (Sleeve may worsen) | `select` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Post-Op Symptoms and Behaviors | `bari_vomiting` | Vomiting or Food Intolerance | `select` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Post-Op Symptoms and Behaviors | `bari_hair_loss` | Hair Loss (Telogen Effluvium) | `select` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Post-Op Symptoms and Behaviors | `bari_diet_adherence` | Diet and Behavior Adherence | `select` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Post-Op Symptoms and Behaviors | `bari_supplements` | Supplement Adherence | `select` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Post-Op Symptoms and Behaviors | `bari_comorbidity_resolution` | Comorbidity Resolution or Improvement (T2DM, hypertension, dyslipidemia, sleep apnea, GERD, joint pain) and medication adjustments made | `textarea` |  |  |  |
| Bariatric Surgery Post-Operative Follow-Up | Post-Op Symptoms and Behaviors | `bari_notes` | Bariatric Follow-Up Notes | `textarea` |  |  |  |

### Compartment Syndrome — `surgery_compartment_syndrome_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Compartment Syndrome — Emergency Recognition and Fasciotomy | Pathophysiology, Recognition, and Diagnosis | `acs2_f1` | Compartment Syndrome Evaluation: PATHOPHYSIOLOGY (COMPARTMENT BOUNDED BY INELASTIC FASCIA; INCREASED PRESSURE WITHIN COMPARTMENT; PRESSURE EXCEEDS PERFUSION PRESSURE CAPILLARY CLOSURE; ISCHEMIA MUSCLE NERVE WITHIN 6-8 HOURS; TISSUE NECROSIS; CAUSES (FRACTURES: TIBIAL SHAFT MOST COMMON; SUPRACONDYLAR HUMERUS PEDIATRIC; FOREARM RADIUS ULNA; VASCULAR INJURY REPERFUSION; CRUSH INJURY PROLONGED COMPRESSION; BURNS CIRCUMFERENTIAL; POST-OPERATIVE SWELLING; TIGHT CAST SPLINT DRESSING; INTRAVENOUS EXTRAVASATION; ANTICOAGULANT-RELATED SPONTANEOUS HEMATOMA; SNAKE BITE VENOM; EXCESSIVE EXERCISE EXERTIONAL; HIGH-RISK LOCATIONS (LEG 4 COMPARTMENTS: ANTERIOR MOST COMMON; LATERAL; SUPERFICIAL POSTERIOR; DEEP POSTERIOR; FOREARM 3 COMPARTMENTS: VOLAR DORSAL MOBILE WAD; FOOT THIGH BUTTOCK HAND ARM; CLINICAL DIAGNOSIS 6 Ps (PAIN OUT OF PROPORTION TO INJURY MOST IMPORTANT EARLY; PAIN ON PASSIVE STRETCH PATHOGNOMONIC; PRESSURE WOODY FEEL COMPARTMENT; PARESTHESIAS TINGLING NUMBNESS EARLY NERVE ISCHEMIA; PARALYSIS LATE SIGN NERVE DAMAGE; PALLOR PULSELESSNESS VERY LATE SIGNS ARTERIAL OCCLUSION; PRESSURE MEASUREMENT (INTRACOMPARTMENTAL PRESSURE ICP STRYKER MONITOR; DELTA P DIASTOLIC MINUS COMPARTMENT PRESSURE; DELTA P UNDER 30 mmHg SURGICAL THRESHOLD MOST CENTERS; Or ABSOLUTE COMPARTMENT PRESSURE OVER 30 mmHg; AVOID RELYING ON PULSES ABSENT LATE SIGN; OBTUNDED SEDATED PATIENTS MONITOR PRESSURE ROUTINELY) | `text` |  |  |  |
| Acute Compartment Syndrome — Emergency Recognition and Fasciotomy | Pathophysiology, Recognition, and Diagnosis | `acs2_f2` | Fasciotomy and Systemic Complications | `select` |  |  |  |

### Mesenteric Ischemia — `surgery_acute_mesenteric_ischemia_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Mesenteric Ischemia AMI — Emergency Diagnosis and Management | Etiology, Clinical Presentation, and Diagnosis | `ami_f1` | Acute Mesenteric Ischemia Evaluation: EPIDEMIOLOGY (1 IN 1000 ACUTE SURGICAL ADMISSIONS; INCREASING WITH AGING POPULATION; MORTALITY 60-80 pct UNTREATED; MOST LETHAL ABDOMINAL EMERGENCY; CRITICAL TIME-TO-DIAGNOSIS DETERMINANT; ETIOLOGY (SMA SUPERIOR MESENTERIC ARTERY EMBOLUS 50 pct MOST COMMON (CARDIAC SOURCE ATRIAL FIBRILLATION MOST FREQUENT; VENTRICULAR THROMBUS POST-MI; VALVULAR DISEASE; ARTERIOARTERIAL AORTIC; SMA ACUTE THROMBOSIS 25 pct (ATHEROSCLEROTIC PLAQUE DISRUPTION; HISTORY MESENTERIC ANGINA POST-PRANDIAL PAIN FOOD FEAR WEIGHT LOSS; OCCLUSION ON BACKGROUND DISEASE; NON-OCCLUSIVE MESENTERIC ISCHEMIA NOMI 20 pct (LOW FLOW STATES: CARDIOGENIC SHOCK SEPTIC SHOCK; DIALYSIS HYPOTENSION; VASOCONSTRICTION VASOPRESSORS COCAINE; MESENTERIC VENOUS THROMBOSIS MVT 5-10 pct (HYPERCOAGULABLE STATES; PORTAL HYPERTENSION; INTRA-ABDOMINAL INFECTION; PANCREATITIS; CLINICAL PRESENTATION (HALLMARK: PAIN OUT OF PROPORTION TO PHYSICAL EXAM; SUDDEN SEVERE PERIUMBILICAL PAIN EMBOLUS; GRADUAL THROMBOSIS; NAUSEA VOMITING DIARRHEA EARLY; BLOODY STOOL LATE BOWEL NECROSIS; PHYSICAL EXAM INITIALLY BENIGN THEN PERITONITIS; DIAGNOSIS (CT ANGIOGRAPHY GOLD STANDARD: SMA VESSEL STATUS BOWEL VIABILITY PORTAL AIR; PNEUMATOSIS INTESTINALIS PORTAL VENOUS GAS LATE NECROSIS; LACTATE ELEVATION SENSITIVE NOT SPECIFIC MARKER ISCHEMIA; D-DIMER ELEVATED; LEUKOCYTOSIS METABOLIC ACIDOSIS LATE; PLAIN XR EARLY UNREMARKABLE; CLASSIC THUMBPRINTING LATE ISCHEMIA) | `text` |  |  |  |
| Acute Mesenteric Ischemia AMI — Emergency Diagnosis and Management | Etiology, Clinical Presentation, and Diagnosis | `ami_f2` | Resuscitation, Revascularization, and Bowel Management | `select` |  |  |  |

### Trauma and Acute Abdomen — `surgery_trauma_acute_abdomen_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Trauma Surgery — FAST, DCL, MTP, Mesenteric Ischemia | Trauma Evaluation and FAST Exam | `atls_fast` | ATLS Primary Survey and FAST Exam (ATLS PROTOCOL: ABCDE: Airway (C-spine), Breathing, Circulation, Disability (GCS, pupils), Exposure; PRIMARY SURVEY: AIRWAY: jaw thrust; oropharyngeal airway; RSI (rapid sequence intubation): if GCS <=8 or airway compromise; cricothyrotomy: failed airway; CIRCULATION: hemorrhage control: direct pressure; tourniquet (extremity); pelvic binder (pelvic fracture with hemodynamic instability); FAST (FOCUSED ASSESSMENT WITH SONOGRAPHY IN TRAUMA): RUQ (Morrison pouch: liver-kidney interface); LUQ (splenorenal); pelvis (rectovesical/rectouterine pouch); pericardial (cardiac window); SENSITIVITY: 63-100% for intraperitoneal free fluid; LIMITATION: bowel injury not detected; operator-dependent; E-FAST: adds lung windows (pneumothorax — absent lung sliding); ADJUNCT: CT SCAN (hemodynamically stable): gold standard for solid organ injury; HEMODYNAMIC INSTABILITY: SKIP CT; OR immediately; RESUSCITATIVE ENDOVASCULAR BALLOON OCCLUSION OF THE AORTA (REBOA): Zone III (pelvic): for pelvic hemorrhage; Zone I (thoracic): for abdominal hemorrhage; buys time for hemorrhage control; PERMISSIVE HYPOTENSION: SBP 80-90 mmHg (non-TBI); MAP 50-65 for penetrating; avoid over-resuscitation until hemorrhage control; EXCEPTION: TBI (maintain MAP >=80); LETHAL TRIAD: hypothermia + acidosis + coagulopathy; DAMAGE CONTROL RESUSCITATION: 1:1:1 pRBC:FFP:platelets (MTP ratio) | `text` |  |  |  |
| Trauma Surgery — FAST, DCL, MTP, Mesenteric Ischemia | Trauma Evaluation and FAST Exam | `mtp` | Massive Transfusion Protocol and Coagulopathy | `select` |  |  |  |
| Trauma Surgery — FAST, DCL, MTP, Mesenteric Ischemia | Damage Control and Mesenteric Ischemia | `dcl` | Damage Control Laparotomy and Open Abdomen (DAMAGE CONTROL LAPAROTOMY (DCL): PHASE 1 (DCL): brief OR (30-60 min); hemorrhage control (packing, vascular shunts); contamination control (staple bowel ends; NOT anastomosis); NO reconstruction; close temporarily; DAMAGE CONTROL RESUSCITATION: ICU; rewarm; correct coagulopathy + acidosis; PHASE 2 (RELOOK): OR 24-48h; remove packs; reassess viability; PHASE 3: DEFINITIVE REPAIR: anastomosis; fascial closure; OPEN ABDOMEN MANAGEMENT: NEGATIVE PRESSURE WOUND THERAPY (NPWT): ABThera; Barker vacuum pack; prevent fascial retraction; reduce intra-abdominal pressure; PRIMARY FASCIAL CLOSURE: goal within 3-5 days (before fascial retraction); ABDOMINAL COMPARTMENT SYNDROME (ACS): INTRA-ABDOMINAL PRESSURE (IAP) >=20 mmHg + new organ dysfunction; BLADDER PRESSURE: surrogate for IAP; measured via Foley catheter; GRADES: Grade I (12-15); Grade II (16-20); Grade III (21-25); Grade IV (>25); PRIMARY ACS: direct abdominal injury; SECONDARY: extraabdominal causes (massive resuscitation, burn, bowel edema); TREATMENT: DECOMPRESSIVE LAPAROTOMY: IAP >=25 with organ dysfunction; URINE OUTPUT: key organ dysfunction criterion; ABDOMINAL HYPERTENSION THRESHOLD: IAP >=12 mmHg; PREVENTION: avoid over-resuscitation; diuresis/ultrafiltration once hemorrhage controlled; positioning; nasogastric decompression | `text` |  |  |  |
| Trauma Surgery — FAST, DCL, MTP, Mesenteric Ischemia | Damage Control and Mesenteric Ischemia | `mesenteric` | Acute Mesenteric Ischemia Diagnosis and Treatment | `select` |  |  |  |

## Vascular

### Aortic Aneurysm — `vascular_aortic_aneurysm_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Aortic Aneurysm AAA TAA — Surveillance Thresholds and Endovascular Repair | Aneurysm Classification, Epidemiology, and Risk Factors | `aa_f1` | Aortic Aneurysm Evaluation: DEFINITION (AORTIC DIAMETER 1.5X NORMAL; NORMAL AORTA 2 cm MEN 1.7 cm WOMEN; AAA: INFRARENAL MOST COMMON; ASCENDING ARCH THORACIC; CLASSIFICATION (LOCATION: THORACIC ASCENDING ARCH DESCENDING; ABDOMINAL INFRARENAL JUXTARENAL SUPRARENAL; THORACOABDOMINAL TYPES I-IV; MORPHOLOGY: FUSIFORM SYMMETRIC; SACCULAR ASYMMETRIC HIGHER RUPTURE RISK; ETIOLOGY (ATHEROSCLEROTIC DEGENERATIVE MOST COMMON; CONNECTIVE TISSUE MARFAN LOEYS-DIETZ EDS; BICUSPID AORTIC VALVE TAA; INFLAMMATORY VASCULITIS TAKAYASU; INFECTIOUS MYCOTIC; TRAUMATIC; EPIDEMIOLOGY (AAA: 8-10 PER 1000 MEN OVER 65; MALE PREDOMINANCE 4-6:1; SMOKING STRONGEST RISK FACTOR; RISK FACTORS AAA: OLDER AGE OVER 65; MALE; SMOKING ESPECIALLY CURRENT; FAMILY HISTORY FIRST DEGREE; HYPERTENSION; ATHEROSCLEROSIS; PROTECTIVE: FEMALE SEX; BLACK RACE; DIABETES PARADOXICALLY PROTECTIVE; SCREENING (US PREVENTIVE SERVICES TASK FORCE USPSTF: ONE-TIME ABDOMINAL ULTRASOUND MEN 65-75 WHO EVER SMOKED; NOT RECOMMENDED WOMEN NEVER SMOKED; VASCULAR SURGERY SOCIETY: BROADEN CRITERIA; ULTRASOUND FIRST-LINE SCREENING: NON-INVASIVE NO RADIATION; CT ANGIOGRAPHY OPERATIVE PLANNING; GROWTH RATE NATURAL HISTORY (AVERAGE 0.2-0.4 cm/YEAR; FASTER LARGER; RUPTURE RISK EXPONENTIAL OVER 5.5 cm; RUPTURE MORTALITY 90 pct; 50 pct DIE BEFORE HOSPITAL) | `text` |  |  |  |
| Aortic Aneurysm AAA TAA — Surveillance Thresholds and Endovascular Repair | Aneurysm Classification, Epidemiology, and Risk Factors | `aa_f2` | Surveillance Thresholds and Repair Decision | `select` |  |  |  |

### Carotid Stenosis — `vascular_carotid_stenosis_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Carotid Artery Stenosis — Stroke Prevention, CEA, and Carotid Stenting | Carotid Stenosis Diagnosis, Symptoms, and Workup | `car_f1` | Carotid Stenosis Evaluation: EPIDEMIOLOGY (CAROTID ARTERY STENOSIS MAJOR MODIFIABLE STROKE RISK FACTOR; 50000 STROKES PER YEAR ATTRIBUTABLE CAROTID DISEASE US; ATHEROSCLEROSIS COMMON ETIOLOGY; CAROTID BIFURCATION MOST COMMON LOCATION; PLAQUE VULNERABILITY DETERMINES RISK BEYOND DEGREE STENOSIS; CLINICAL SYNDROMES (SYMPTOMATIC CAROTID: TIA Or STROKE IPSILATERAL EYE Or HEMISPHERE WITHIN 6 MONTHS; AMAUROSIS FUGAX TRANSIENT MONOCULAR VISION LOSS; HEMISPHERIC TIA CONTRALATERAL MOTOR SENSORY APHASIA; STROKE ESTABLISHED IPSILATERAL TERRITORY; ASYMPTOMATIC: STENOSIS FOUND INCIDENTALLY; BRUIT EXAMINATION; PRIOR WORKUP ANOTHER REASON; DIAGNOSIS IMAGING (DUPLEX ULTRASOUND FIRST-LINE: NON-INVASIVE; PSV PEAK SYSTOLIC VELOCITY: ICA PSV OVER 125 cm/s 50 pct STENOSIS; ICA PSV OVER 230 cm/s 70 pct STENOSIS; ICA/CCA RATIO; SENSITIVITY 98 pct; CTA COMPUTED TOMOGRAPHY ANGIOGRAPHY: DEGREE STENOSIS; CALCIFICATION; PLAQUE MORPHOLOGY; RADIATION; MRA MAGNETIC RESONANCE ANGIOGRAPHY: TENDS OVERESTIMATE; NO RADIATION ARTIFACT; CONVENTIONAL ANGIOGRAPHY: GOLD STANDARD; INVASIVE; RESERVED EQUIVOCAL CASES; ECHOCARDIOGRAPHY CARDIAC SOURCE EMBOLISM ASSESSMENT; ECG ATRIAL FIBRILLATION; BRAIN MRI: ISCHEMIA EXTENT TERRITORY; LABORATORY: LIPID PANEL HbA1c INFLAMMATORY MARKERS; MECHANISM STROKE: PLAQUE RUPTURE EMBOLISM MOST COMMON; IN SITU THROMBOSIS; HEMODYNAMIC LOW FLOW HIGH GRADE) | `text` |  |  |  |
| Carotid Artery Stenosis — Stroke Prevention, CEA, and Carotid Stenting | Carotid Stenosis Diagnosis, Symptoms, and Workup | `car_f2` | CEA versus Stenting Decision and Medical Management | `select` |  |  |  |

### DVT / PE — `vascular_dvt_pe_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| DVT and Pulmonary Embolism — Diagnosis, Risk Stratification, and Anticoagulation | DVT PE Classification, Diagnosis, and Risk Stratification | `dvt_f1` | DVT PE Evaluation: DVT CLASSIFICATION (PROXIMAL: POPLITEAL FEMORAL ILIAC; HIGHER PE RISK 50 pct IF UNTREATED; DISTAL CALF: ISOLATED BELOW KNEE; LOWER PE RISK; TREATMENT CONTROVERSIAL; UPPER EXTREMITY: AXILLARY SUBCLAVIAN; CATHETER ASSOCIATED EFFORT THROMBOSIS PAGET-SCHROETTER; PE CLASSIFICATION (MASSIVE: HEMODYNAMIC COMPROMISE SHOCK SBP UNDER 90; SUBMASSIVE: RIGHT HEART STRAIN NO SHOCK; INTERMEDIATE HIGH RISK TRIAGE; LOW RISK: NORMAL RV FUNCTION TROPONIN; RISK STRATIFICATION TOOLS (WELLS DVT SCORE: PRETEST PROBABILITY; WELLS PE SCORE; REVISED GENEVA; PERC RULE: 8 CRITERIA NEGATIVE RULES OUT PE NO FURTHER TESTING; YEARS ALGORITHM FOR PE; PESI PULMONARY EMBOLISM SEVERITY INDEX; SPESI SIMPLIFIED PESI; PROVOKED vs UNPROVOKED (PROVOKED: SURGERY IMMOBILITY MALIGNANCY ORAL CONTRACEPTIVES TRAUMA; SHORTER TREATMENT DURATION; UNPROVOKED: HIGHER RECURRENCE; LONGER Or INDEFINITE ANTICOAGULATION; DIAGNOSIS DVT (DUPLEX ULTRASOUND: NON-INVASIVE; SENSITIVITY 98 pct PROXIMAL DVT; COMPRESSIBILITY MAIN CRITERION; D-DIMER: HIGH SENSITIVITY LOW SPECIFICITY; RULE OUT LOW PROBABILITY; VENOGRAPHY GOLD STANDARD INVASIVE RARE; DIAGNOSIS PE (CT PULMONARY ANGIOGRAPHY CTPA: GOLD STANDARD; VENTILATION-PERFUSION VQ SCAN: ALTERNATIVE CONTRAST ALLERGY RENAL FAILURE; ECHOCARDIOGRAPHY: RV DYSFUNCTION RISK STRATIFICATION; TROPONIN BNP: MYOCARDIAL INJURY RV STRAIN MARKERS; BLOOD GASES HYPOXEMIA RESPIRATORY ALKALOSIS) | `text` |  |  |  |
| DVT and Pulmonary Embolism — Diagnosis, Risk Stratification, and Anticoagulation | DVT PE Classification, Diagnosis, and Risk Stratification | `dvt_f2` | Anticoagulation Regimens and Special Situations | `select` |  |  |  |

### PAD Management — `peripheral_artery_disease_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Peripheral Artery Disease Management | Patient & PAD Classification | `patientId` | Patient | `typeahead` | Y |  |  |
| Peripheral Artery Disease Management | Patient & PAD Classification | `visitDate` | Visit Date | `date` | Y |  |  |
| Peripheral Artery Disease Management | Patient & PAD Classification | `provider` | Provider (Vascular / PCP) | `typeahead` | Y |  |  |
| Peripheral Artery Disease Management | Patient & PAD Classification | `rutherfordClass` | Rutherford Classification | `select` | Y |  |  |
| Peripheral Artery Disease Management | Patient & PAD Classification | `affectedSide` | Affected Limb(s) | `select` |  |  |  |
| Peripheral Artery Disease Management | Patient & PAD Classification | `abi` | Ankle-Brachial Index (ABI) | `number` |  |  |  |
| Peripheral Artery Disease Management | Symptoms & Vascular Exam | `symptoms` | Claudication / Symptoms | `textarea` | Y |  |  |
| Peripheral Artery Disease Management | Symptoms & Vascular Exam | `vascularExam` | Vascular Physical Exam | `textarea` | Y |  |  |
| Peripheral Artery Disease Management | Management Plan | `medicalManagement` | Medical Management | `textarea` | Y |  |  |
| Peripheral Artery Disease Management | Management Plan | `exerciseIntervention` | Exercise & Procedural Plan | `textarea` | Y |  |  |

### Peripheral Arterial Disease — `vascular_peripheral_arterial_disease_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Peripheral Arterial Disease — Diagnosis and Management | Diagnosis and Classification | `pad_f1` | PAD Evaluation: DEFINITION: Atherosclerotic Occlusive Disease Lower Extremity Arteries; PREVALENCE: 8-12 million USA; Under 50Y Mostly Asymptomatic; SYMPTOMS: CLAUDICATION (Reproducible Exercise-Induced Leg Pain Relieved Rest; Calves Classic Femoral Disease; Buttock Thigh Iliac Disease; Impotence Leriche Syndrome Aortoiliac); CRITICAL LIMB THREATENING ISCHEMIA CLTI (Ischemic Rest Pain; Non-Healing Ulcers; Gangrene; ABI Under 0.4; Limb Loss Risk High; URGENT Revascularization); ACUTE LIMB ISCHEMIA ALI (6 Ps: Pain Pallor Pulselessness Paresthesias Paralysis Poikilothermia; Thrombotic vs Embolic; EMERGENCY Heparin + Urgent Revascularization vs Lysis); RISK FACTORS: Smoking Strongest Modifiable 4x; DM 3-4x (Distal Small Vessels; More Calcification; More Amputation); HTN; Dyslipidemia; CKD; Age Over 65; African American; CLASSIFICATION: FONTAINE (I Asymptomatic; IIa Mild Claudication Over 200M; IIb Severe Under 200M; III Rest Pain; IV Ulceration Gangrene); RUTHERFORD (Categories 0-6; Grade Objective Perfusion); DIAGNOSIS: ABI ANKLE BRACHIAL INDEX (Over 1.3 Calcified Non-Compressible = CXR or TBI Toe BI; 0.9-1.3 Normal; 0.7-0.89 Mild; 0.4-0.69 Moderate; Under 0.4 Severe; Under 0.3 CLTI); EXERCISE ABI (Drop Over 20 pct Exercise ABI = Arterial Cause Even If Resting Normal); DUPLEX US (Evaluate Stenosis Segment; Velocity Waveforms); CTA MRA (Anatomic Planning Revascularization); Conventional Angiography (Gold Standard; Intervention) | `text` |  |  |  |
| Peripheral Arterial Disease — Diagnosis and Management | Diagnosis and Classification | `pad_f2` | Medical Management and Revascularization | `select` |  |  |  |

## Wound Care

### Chronic Wound Management — `wound_care_chronic_wound_cf`

Screen: 1 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Wound Management | Wound Classification and Location | `wc_wound_type` | Wound Type | `select` |  |  |  |
| Chronic Wound Management | Wound Classification and Location | `wc_location` | Wound Location (e.g., right lateral heel, left sacrum) | `text` |  |  |  |
| Chronic Wound Management | Wound Classification and Location | `wc_duration` | Duration of Wound (weeks or months) | `text` |  |  |  |
| Chronic Wound Management | Wound Classification and Location | `wc_dfu_wagner` | Diabetic Foot Ulcer Wagner Grade (if DFU) | `select` |  |  |  |
| Chronic Wound Management | Wound Classification and Location | `wc_pi_stage` | Pressure Injury Stage (if PI) | `select` |  |  |  |
| Chronic Wound Management | Wound Bed Assessment | `wc_size` | Wound Dimensions (length x width x depth in cm) | `text` |  |  |  |
| Chronic Wound Management | Wound Bed Assessment | `wc_wound_bed` | Wound Bed Tissue Type | `select` |  |  |  |
| Chronic Wound Management | Wound Bed Assessment | `wc_exudate` | Exudate Amount and Type | `select` |  |  |  |
| Chronic Wound Management | Wound Bed Assessment | `wc_periwound` | Periwound Skin | `select` |  |  |  |
| Chronic Wound Management | Wound Bed Assessment | `wc_infection_signs` | Signs of Wound Infection | `select` |  |  |  |
| Chronic Wound Management | Wound Bed Assessment | `wc_abpi` | Ankle-Brachial Pressure Index (ABPI) — above 0.8 normal (compression safe); 0.5-0.8 peripheral arterial disease (cautious compression); below 0.5 critical ischemia (NO compression; vascular surgery) | `text` |  |  |  |
| Chronic Wound Management | Wound Care Treatment Plan | `wc_debridement` | Debridement Method | `select` |  |  |  |
| Chronic Wound Management | Wound Care Treatment Plan | `wc_dressing_type` | Primary Dressing Choice | `select` |  |  |  |
| Chronic Wound Management | Wound Care Treatment Plan | `wc_npwt` | Negative Pressure Wound Therapy (NPWT / VAC) | `select` |  |  |  |
| Chronic Wound Management | Wound Care Treatment Plan | `wc_offloading` | Offloading (essential for DFU healing) | `select` |  |  |  |
| Chronic Wound Management | Wound Care Treatment Plan | `wc_compression` | Compression Therapy (for venous leg ulcers — ABPI above 0.8 required) | `select` |  |  |  |
| Chronic Wound Management | Wound Care Treatment Plan | `wc_advanced_therapy` | Advanced Wound Therapy | `select` |  |  |  |
| Chronic Wound Management | Wound Care Treatment Plan | `wc_next_visit` | Next Wound Evaluation Date and Anticipated Dressing Change Frequency | `text` |  |  |  |
| Chronic Wound Management | Wound Care Treatment Plan | `wc_notes` | Wound Care Notes and Barriers to Healing (nutrition, infection, vasculopathy, adherence, moisture management) | `textarea` |  |  |  |

### Complex Wound Assessment — `wound_care_complex_wounds_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Complex Wound Assessment and Advanced Therapy Selection | Wound Classification and Assessment | `wound_type` | Wound Classification | `select` |  |  |  |
| Complex Wound Assessment and Advanced Therapy Selection | Wound Classification and Assessment | `wound_measurements` | Wound Measurements (length × width × depth in cm; tunnel/undermining clock notation; exudate amount (none/scant/moderate/heavy) and character (serous/sanguineous/serosanguineous/purulent); wound edge (attached/not attached/rolled/fibrotic/macerated); periwound (erythema/induration/maceration/callous); PUSH Tool 3.0 scoring for tracking; wound photography with ruler reference) | `text` |  |  |  |
| Complex Wound Assessment and Advanced Therapy Selection | Advanced Wound Therapies | `npwt` | NPWT (Negative Pressure Wound Therapy) | `select` |  |  |  |
| Complex Wound Assessment and Advanced Therapy Selection | Advanced Wound Therapies | `skin_substitutes` | Advanced Wound Products and Skin Substitutes (amniotic membrane allograft (EpiFix, Amnioband) — 1-2 applications for DFU or VLU; bilayer collagen matrix (Integra) for preparation before skin graft; autologous split-thickness skin graft (STSG) for partial-thickness coverage; full-thickness for smaller areas (FTSG); Apligraf or Dermagraft bilayered living skin equivalent for VLU or DFU; PDGF (becaplermin/Regranex) for neuropathic DFU; hyperbaric oxygen (HBO) for: Wagner 3+ DFU + adequate perfusion, radiation-induced necrosis, refractory osteomyelitis) | `text` |  |  |  |

### Diabetic Foot Ulcer — `wound_care_diabetic_foot_cf`

Screen: 1 page(s) · 5 section(s) · 29 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Diabetic Foot Ulcer Assessment and Management | Wound Description | `dfu_location` | Ulcer Location | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Wound Description | `dfu_laterality` | Laterality | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Wound Description | `dfu_length_cm` | Wound Length (cm) | `number` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Wound Description | `dfu_width_cm` | Wound Width (cm) | `number` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Wound Description | `dfu_depth_cm` | Wound Depth (cm) | `number` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Wound Description | `dfu_tunneling` | Tunneling or Undermining | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Wound Description | `dfu_tissue` | Wound Bed Tissue | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Wound Description | `dfu_exudate` | Exudate | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Wound Description | `dfu_periwound` | Periwound Skin | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Classification and Severity | `dfu_wagner_grade` | Wagner Classification | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Classification and Severity | `dfu_wifi_classification` | WIfI Classification (Wound, Ischemia, foot Infection) | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Classification and Severity | `dfu_duration` | Wound Duration | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Contributing Factors | `dfu_neuropathy` | Peripheral Neuropathy | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Contributing Factors | `dfu_pad` | Peripheral Arterial Disease (PAD) | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Contributing Factors | `dfu_abi` | ABI Value | `number` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Contributing Factors | `dfu_deformity` | Foot Deformity (hammertoes, bunion, Charcot, callus, equinus) | `textarea` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Contributing Factors | `dfu_glycemic_control` | Glycemic Control | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Infection Assessment (IDSA / IWGDF) | `dfu_infection_grade` | Infection Severity (IDSA) | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Infection Assessment (IDSA / IWGDF) | `dfu_osteomyelitis` | Osteomyelitis | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Infection Assessment (IDSA / IWGDF) | `dfu_wound_culture` | Wound Culture | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Infection Assessment (IDSA / IWGDF) | `dfu_antibiotics` | Antibiotic Regimen (agent, route, duration) | `textarea` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Treatment Plan | `dfu_offloading` | Offloading (gold standard for plantar DFU) | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Treatment Plan | `dfu_debridement` | Debridement Method | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Treatment Plan | `dfu_dressing` | Dressing Type | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Treatment Plan | `dfu_advanced_therapy` | Advanced Wound Therapy | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Treatment Plan | `dfu_revascularization` | Revascularization (if significant PAD) | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Treatment Plan | `dfu_amputation` | Amputation | `select` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Treatment Plan | `dfu_referrals` | Referrals (podiatry, vascular surgery, orthopedics, infectious disease, wound care center) | `textarea` |  |  |  |
| Diabetic Foot Ulcer Assessment and Management | Treatment Plan | `dfu_notes` | Additional Notes | `textarea` |  |  |  |

### Pressure Injury Stage — `pressure_injury_staging_cf`

Screen: 1 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pressure Injury Staging (NPIAP 2019) | NPIAP Stage Classification | `stage` | Pressure Injury Stage | `select` |  |  |  |
| Pressure Injury Staging (NPIAP 2019) | NPIAP Stage Classification | `braden_score` | Braden Risk Score (6-23 — ≤18 = at risk; ≤9 = very high; ≤12 = high) | `number` |  |  |  |
| Pressure Injury Staging (NPIAP 2019) | Hospital-Acquired Pressure Injury Prevention Bundle | `repositioning` | Repositioning schedule (every 2 hours — document turns) | `checkbox` |  |  |  |
| Pressure Injury Staging (NPIAP 2019) | Hospital-Acquired Pressure Injury Prevention Bundle | `pressure_redistribution` | Pressure redistribution surface (foam/alternating air mattress for high risk) | `checkbox` |  |  |  |
| Pressure Injury Staging (NPIAP 2019) | Hospital-Acquired Pressure Injury Prevention Bundle | `heel_protection` | Heel elevation / offloading device (pillows under calves, prophylactic foam boots) | `checkbox` |  |  |  |
| Pressure Injury Staging (NPIAP 2019) | Hospital-Acquired Pressure Injury Prevention Bundle | `skin_moisture` | Skin moisture management (incontinence — brief + barrier cream; dryness — moisturizer) | `checkbox` |  |  |  |
| Pressure Injury Staging (NPIAP 2019) | Hospital-Acquired Pressure Injury Prevention Bundle | `nutrition` | Nutrition consultation (protein 1.25-1.5 g/kg/day for healing; Vit C, Zinc, Arginine) | `checkbox` |  |  |  |
| Pressure Injury Staging (NPIAP 2019) | Hospital-Acquired Pressure Injury Prevention Bundle | `friction_shear` | Friction and shear reduction (heel-of-foot lift technique; lift-not-drag) | `checkbox` |  |  |  |

### Wound Assessment — `wound_care_assessment_cf`

Screen: 1 page(s) · 4 section(s) · 19 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Comprehensive Wound Assessment | Wound Characteristics | `wound_type` | Wound Type | `select` |  |  |  |
| Comprehensive Wound Assessment | Wound Characteristics | `location` | Location (anatomic site — document on body diagram if available) | `text` |  |  |  |
| Comprehensive Wound Assessment | Wound Characteristics | `length_cm` | Length (cm) | `number` |  |  |  |
| Comprehensive Wound Assessment | Wound Characteristics | `width_cm` | Width (cm) | `number` |  |  |  |
| Comprehensive Wound Assessment | Wound Characteristics | `depth_cm` | Depth (cm) | `number` |  |  |  |
| Comprehensive Wound Assessment | Wound Characteristics | `undermining` | Undermining / Tunneling (cm; clock position) | `text` |  |  |  |
| Comprehensive Wound Assessment | Wound Bed Assessment | `tissue_type` | Wound Bed Tissue | `select` |  |  |  |
| Comprehensive Wound Assessment | Wound Bed Assessment | `exudate_amount` | Exudate Amount | `select` |  |  |  |
| Comprehensive Wound Assessment | Wound Bed Assessment | `exudate_type` | Exudate Type | `select` |  |  |  |
| Comprehensive Wound Assessment | Wound Bed Assessment | `periwound` | Periwound Skin (maceration, erythema, induration, callus, edema) | `text` |  |  |  |
| Comprehensive Wound Assessment | Wound Bed Assessment | `wound_odor` | Wound odor present (possible infection or anaerobes — swab culture) | `checkbox` |  |  |  |
| Comprehensive Wound Assessment | Infection Assessment (NERDS / STONES criteria) | `local_infection_signs` | Local Infection Signs (NERDS — Non-healing; Exudate ↑; Red/Bleeding; Debris; Smell) | `textarea` |  |  |  |
| Comprehensive Wound Assessment | Infection Assessment (NERDS / STONES criteria) | `spreading_infection` | Spreading Infection Signs (STONES — Size ↑; Temperature ↑; Os — exposed bone; New breakdown; Exudate; Edema; Smell) | `textarea` |  |  |  |
| Comprehensive Wound Assessment | Infection Assessment (NERDS / STONES criteria) | `culture_obtained` | Wound culture obtained (Levine technique — 1 cm² area, 5-10 second rotation) | `checkbox` |  |  |  |
| Comprehensive Wound Assessment | Treatment Plan | `debridement_type` | Debridement Type | `select` |  |  |  |
| Comprehensive Wound Assessment | Treatment Plan | `dressing_type` | Dressing Type | `select` |  |  |  |
| Comprehensive Wound Assessment | Treatment Plan | `change_frequency` | Dressing Change Frequency | `select` |  |  |  |
| Comprehensive Wound Assessment | Treatment Plan | `offloading` | Offloading ordered (DFU: TCC / removable cast walker — pressure redistribution essential) | `checkbox` |  |  |  |
| Comprehensive Wound Assessment | Treatment Plan | `vascular_referral` | Vascular surgery referral (ABI <0.5 / absent pulses / ischemic DFU — revascularization) | `checkbox` |  |  |  |

## Addiction Medicine

### AUD / CIWA Management — `addiction_medicine_alcohol_use_disorder_cf`

Screen: 1 page(s) · 3 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Alcohol Use Disorder and Withdrawal Management | AUDIT-C and Severity | `audit_c` | AUDIT-C Score (alcohol use disorders identification test — consumption; 3 questions; males ≥4 = positive screen; females ≥3 = positive screen; max 12; correlates with unhealthy use) | `number` |  |  |  |
| Alcohol Use Disorder and Withdrawal Management | AUDIT-C and Severity | `dsm5_aud` | AUD Severity (DSM-5) | `select` |  |  |  |
| Alcohol Use Disorder and Withdrawal Management | Alcohol Withdrawal Assessment (CIWA-Ar) | `ciwa_score` | CIWA-Ar Score (0-67; ≤8 = mild; 9-15 = moderate; ≥16 = severe; items: nausea, tremor, diaphoresis, agitation, perceptual disturbances, headache, orientation; assess q1-8h) | `number` |  |  |  |
| Alcohol Use Disorder and Withdrawal Management | Alcohol Withdrawal Assessment (CIWA-Ar) | `withdrawal_tx` | Withdrawal Treatment Protocol | `select` |  |  |  |
| Alcohol Use Disorder and Withdrawal Management | Alcohol Withdrawal Assessment (CIWA-Ar) | `delirium_tremens_risk` | DTs Risk Factors | `select` |  |  |  |
| Alcohol Use Disorder and Withdrawal Management | Medications for AUD (MAUD) | `maud_agent` | MAUD Agent | `select` |  |  |  |

### OTP Admission — `opioid_treatment_program_cf`

Screen: 1 page(s) · 4 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| OTP Admission Assessment | Opioid Use History | `primary_opioid` | Primary Opioid Used | `select` |  |  |  |
| OTP Admission Assessment | Opioid Use History | `route` | Route of Administration | `select` |  |  |  |
| OTP Admission Assessment | Opioid Use History | `daily_use_years` | Years of Daily Opioid Use | `number` |  |  |  |
| OTP Admission Assessment | Opioid Use History | `last_use` | Date of Last Opioid Use | `date` |  |  |  |
| OTP Admission Assessment | Opioid Use History | `previous_treatment` | Prior OUD treatment (methadone / buprenorphine / naltrexone) | `checkbox` |  |  |  |
| OTP Admission Assessment | Withdrawal Assessment (COWS) | `cows_score` | COWS Score (0-48; ≥8 = mild withdrawal — start MAT) | `number` |  |  |  |
| OTP Admission Assessment | Withdrawal Assessment (COWS) | `urine_drug_screen` | Urine Drug Screen Results | `text` |  |  |  |
| OTP Admission Assessment | Medication for Addiction Treatment (MAT) | `mat_choice` | MAT Selected | `select` |  |  |  |
| OTP Admission Assessment | Medication for Addiction Treatment (MAT) | `starting_dose` | Starting Dose (mg) | `text` |  |  |  |
| OTP Admission Assessment | Medication for Addiction Treatment (MAT) | `dispensing_frequency` | Initial Dispensing Frequency | `select` |  |  |  |
| OTP Admission Assessment | Plan | `counseling_referral` | Individual / group counseling referral provided | `checkbox` |  |  |  |
| OTP Admission Assessment | Plan | `harm_reduction` | Harm reduction counseling (naloxone, clean supplies) | `checkbox` |  |  |  |
| OTP Admission Assessment | Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### OUD / MOUD — `addiction_medicine_opioid_use_disorder_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Opioid Use Disorder — MOUD Assessment and Initiation | OUD Diagnosis and Severity | `dsm5_criteria` | DSM-5 OUD Criteria Count (11 criteria; 2-3 = mild, 4-5 = moderate, ≥6 = severe; within 12-month period; assess tolerance, withdrawal, craving, loss of control, continued use despite harm, time spent, given up activities, role failure, hazardous use, social/interpersonal problems, physical/psychological harm) | `number` |  |  |  |
| Opioid Use Disorder — MOUD Assessment and Initiation | OUD Diagnosis and Severity | `cows_score` | COWS Score (Clinical Opioid Withdrawal Scale; 0-7 = mild; 8-12 = moderate; 13-24 = moderate-severe; ≥25 = severe; assess before buprenorphine induction; target COWS ≥8 for home induction) | `number` |  |  |  |
| Opioid Use Disorder — MOUD Assessment and Initiation | MOUD Selection and Initiation | `moud_choice` | MOUD Agent | `select` |  |  |  |
| Opioid Use Disorder — MOUD Assessment and Initiation | MOUD Selection and Initiation | `naloxone_coprescript` | Naloxone Co-prescription (Narcan 4 mg nasal spray x2; prescribe to patient AND household members/partners; automatic co-prescription laws in many states; pharmacist collaborative practice; 988 referral; peer recovery support) | `text` |  |  |  |
| Opioid Use Disorder — MOUD Assessment and Initiation | Monitoring and Follow-Up | `uds_schedule` | Urine Drug Screen Schedule | `select` |  |  |  |

### OUD Assessment and MOUD — `addiction_oud_assessment_cf`

Screen: 1 page(s) · 4 section(s) · 27 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Opioid Use Disorder Assessment and MOUD Initiation | Substance Use History | `oud_chief_opioid` | Primary Opioid Used | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | Substance Use History | `oud_route` | Route of Administration | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | Substance Use History | `oud_duration` | Duration of Opioid Use Disorder | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | Substance Use History | `oud_last_use` | Last Opioid Use | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | Substance Use History | `oud_other_substances` | Concurrent Substance Use | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | Substance Use History | `oud_prior_treatment` | Prior OUD Treatment | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | Substance Use History | `oud_naloxone_access` | Naloxone (Narcan) Access | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | DSM-5 OUD Criteria Assessment | `oud_dsm_craving` | 1. Strong desire or urge to use opioids (craving) | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | DSM-5 OUD Criteria Assessment | `oud_dsm_control` | 2. Persistent desire or unsuccessful efforts to cut down or control use | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | DSM-5 OUD Criteria Assessment | `oud_dsm_time` | 3. A great deal of time spent obtaining, using, or recovering from opioids | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | DSM-5 OUD Criteria Assessment | `oud_dsm_recurrent_use` | 4. Recurrent use resulting in failure to fulfill major role obligations (work, school, home) | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | DSM-5 OUD Criteria Assessment | `oud_dsm_social_problems` | 5. Continued use despite persistent social or interpersonal problems caused by opioid use | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | DSM-5 OUD Criteria Assessment | `oud_dsm_physical_hazard` | 6. Recurrent use in situations in which it is physically hazardous | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | DSM-5 OUD Criteria Assessment | `oud_dsm_tolerance` | 7. Tolerance (need for markedly increased amounts to achieve desired effect) | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | DSM-5 OUD Criteria Assessment | `oud_dsm_withdrawal` | 8. Withdrawal symptoms or use to relieve or avoid withdrawal | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | DSM-5 OUD Criteria Assessment | `oud_dsm_count` | Total DSM-5 Criteria Met (0-11) | `number` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | DSM-5 OUD Criteria Assessment | `oud_severity` | OUD Severity Classification | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | Withdrawal Assessment and Medical Safety | `oud_cows_score` | COWS Score (Clinical Opiate Withdrawal Scale) at This Visit | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | Withdrawal Assessment and Medical Safety | `oud_uds_result` | Urine Drug Screen Result | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | Withdrawal Assessment and Medical Safety | `oud_overdose_history` | Prior Overdose History | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | Withdrawal Assessment and Medical Safety | `oud_medical_comorbid` | Relevant Medical Comorbidities | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | MOUD Treatment Plan | `oud_moud_selected` | Medication for Opioid Use Disorder (MOUD) Selected | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | MOUD Treatment Plan | `oud_bupe_induction` | Buprenorphine Induction Approach (if buprenorphine selected) | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | MOUD Treatment Plan | `oud_bupe_starting_dose` | Starting Dose and Target Maintenance Dose | `text` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | MOUD Treatment Plan | `oud_counseling` | Counseling and Behavioral Health | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | MOUD Treatment Plan | `oud_followup` | Follow-Up Visit | `select` |  |  |  |
| Opioid Use Disorder Assessment and MOUD Initiation | MOUD Treatment Plan | `oud_notes` | OUD Assessment Notes (motivational status, social support, barriers to treatment, harm reduction plan) | `textarea` |  |  |  |
