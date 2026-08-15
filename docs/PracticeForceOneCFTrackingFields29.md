---
title: "PracticeForceOneCFTrackingFields29"
---

# CF Tracking — Field-Level Detail (part 29 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Urology**, **Geriatrics**, **Sports Medicine**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Urology

### Kidney Stones — `urology_nephrolithiasis_cf`

Screen: 1 page(s) · 4 section(s) · 31 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Nephrolithiasis Management | Presentation and Imaging | `stone_symptom_onset` | Symptom Onset Date | `date` |  |  |  |
| Nephrolithiasis Management | Presentation and Imaging | `stone_pain_location` | Pain Location | `select` |  |  |  |
| Nephrolithiasis Management | Presentation and Imaging | `stone_hematuria` | Hematuria | `select` |  |  |  |
| Nephrolithiasis Management | Presentation and Imaging | `stone_imaging_type` | Imaging Obtained | `select` |  |  |  |
| Nephrolithiasis Management | Presentation and Imaging | `stone_size_mm` | Stone Size (mm) | `number` |  |  |  |
| Nephrolithiasis Management | Presentation and Imaging | `stone_location` | Stone Location | `select` |  |  |  |
| Nephrolithiasis Management | Presentation and Imaging | `stone_obstruction` | Hydronephrosis / Obstruction | `select` |  |  |  |
| Nephrolithiasis Management | Presentation and Imaging | `stone_huo` | Infection / Urosepsis Signs | `select` |  |  |  |
| Nephrolithiasis Management | Management Strategy | `stone_mec` | Management Plan | `select` |  |  |  |
| Nephrolithiasis Management | Management Strategy | `stone_stent_placed` | Ureteral Stent Placed | `select` |  |  |  |
| Nephrolithiasis Management | Management Strategy | `stone_stent_removal_date` | Stent Removal Date (planned) | `date` |  |  |  |
| Nephrolithiasis Management | Management Strategy | `stone_alpha_blocker` | Alpha-Blocker (MET) Prescribed | `select` |  |  |  |
| Nephrolithiasis Management | Management Strategy | `stone_analgesia` | Analgesia Plan | `textarea` |  |  |  |
| Nephrolithiasis Management | Management Strategy | `stone_strain_urine` | Urine Straining for Stone Analysis | `select` |  |  |  |
| Nephrolithiasis Management | Management Strategy | `stone_composition` | Stone Composition (if analyzed) | `select` |  |  |  |
| Nephrolithiasis Management | Management Strategy | `stone_procedure_date` | Procedure Date (if applicable) | `date` |  |  |  |
| Nephrolithiasis Management | Metabolic Evaluation | `stone_24hr_urine` | 24-Hour Urine Collection | `select` |  |  |  |
| Nephrolithiasis Management | Metabolic Evaluation | `stone_serum_calcium` | Serum Calcium (mg/dL) | `number` |  |  |  |
| Nephrolithiasis Management | Metabolic Evaluation | `stone_serum_uric_acid` | Serum Uric Acid (mg/dL) | `number` |  |  |  |
| Nephrolithiasis Management | Metabolic Evaluation | `stone_pth` | PTH (pg/mL) | `number` |  |  |  |
| Nephrolithiasis Management | Metabolic Evaluation | `stone_metabolic_abnormality` | Metabolic Abnormality Found | `select` |  |  |  |
| Nephrolithiasis Management | Metabolic Evaluation | `stone_urine_ph` | Urine pH | `number` |  |  |  |
| Nephrolithiasis Management | Prevention Strategy | `stone_fluid_goal` | Daily Fluid Intake Goal (L/day) | `text` |  |  |  |
| Nephrolithiasis Management | Prevention Strategy | `stone_diet_modification` | Dietary Modifications Recommended | `textarea` |  |  |  |
| Nephrolithiasis Management | Prevention Strategy | `stone_thiazide` | Thiazide Diuretic (hypercalciuria) | `select` |  |  |  |
| Nephrolithiasis Management | Prevention Strategy | `stone_potassium_citrate` | Potassium Citrate (hypocitraturia/uric acid) | `select` |  |  |  |
| Nephrolithiasis Management | Prevention Strategy | `stone_allopurinol` | Allopurinol (hyperuricosuria) | `select` |  |  |  |
| Nephrolithiasis Management | Prevention Strategy | `stone_prior_episodes` | Prior Stone Episodes (count) | `number` |  |  |  |
| Nephrolithiasis Management | Prevention Strategy | `stone_family_history` | Family History of Stones | `select` |  |  |  |
| Nephrolithiasis Management | Prevention Strategy | `stone_followup` | Follow-up Plan and Repeat Imaging | `text` |  |  |  |
| Nephrolithiasis Management | Prevention Strategy | `stone_notes` | Additional Notes | `textarea` |  |  |  |

### Kidney Stones / Urolithiasis — `urology_urolithiasis_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Urolithiasis — Acute Management, MET, and Stone Prevention | Acute Presentation and Imaging | `imaging` | Imaging Modality | `select` |  |  |  |
| Urolithiasis — Acute Management, MET, and Stone Prevention | Acute Presentation and Imaging | `stone_size` | Stone Size (mm; <5 mm: 98% spontaneous passage; 5-10 mm: 50% passage; >10 mm: surgical intervention usually required; MET (medical expulsive therapy): tamsulosin 0.4 mg QD; SUSPEND trial (2015): no benefit over placebo for <9 mm stones at 4 weeks; STONE trial (2016): some benefit for >5 mm; meta-analysis: alpha-blocker benefit in distal ureter stones >5 mm; use tamsulosin while awaiting passage; ketorolac for acute pain; oral hydration) | `number` |  |  |  |
| Urolithiasis — Acute Management, MET, and Stone Prevention | Stone Composition and Prevention | `stone_type` | Stone Composition and Metabolic Workup | `select` |  |  |  |
| Urolithiasis — Acute Management, MET, and Stone Prevention | Stone Composition and Prevention | `surgical` | Surgical Options (ESWL: extracorporeal shockwave lithotripsy; <2 cm, non-lower pole stones; 50-80% stone-free at 3 months; avoid: coagulopathy, pregnancy, aortic aneurysm, pacemaker, obstructing distal stone; URS: ureteroscopy + laser lithotripsy (Holmium:YAG or MOSES pulsed Holmium); distal/ureteral stones or ESWL failures; flexible URS for upper tract stones; intrarenal stones; stone-free rate 90%+; PCNL: >=2 cm or staghorn; general anesthesia; prone or supine; nephroscope + ultrasonic or pneumatic lithotripter; best stone-free rate; risk: bleeding (interventional radiology embolization), sepsis (urosepsis after procedures), extravasation) | `text` |  |  |  |

### Male Hypogonadism / Low T — `male_hypogonadism_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Male Hypogonadism / Testosterone Therapy Visit | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| Male Hypogonadism / Testosterone Therapy Visit | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| Male Hypogonadism / Testosterone Therapy Visit | Patient & Diagnosis | `provider` | Provider (Urologist / Endocrinologist) | `typeahead` | Y |  |  |
| Male Hypogonadism / Testosterone Therapy Visit | Patient & Diagnosis | `hypogonadismType` | Hypogonadism Type | `select` | Y |  |  |
| Male Hypogonadism / Testosterone Therapy Visit | Labs & Symptom Assessment | `totalT` | Total Testosterone (ng/dL) — AM draw | `number` | Y |  |  |
| Male Hypogonadism / Testosterone Therapy Visit | Labs & Symptom Assessment | `freeT` | Free Testosterone (pg/mL) | `number` |  |  |  |
| Male Hypogonadism / Testosterone Therapy Visit | Labs & Symptom Assessment | `lh` | LH (mIU/mL) | `number` |  |  |  |
| Male Hypogonadism / Testosterone Therapy Visit | Labs & Symptom Assessment | `fsh` | FSH (mIU/mL) | `number` |  |  |  |
| Male Hypogonadism / Testosterone Therapy Visit | Labs & Symptom Assessment | `prolactin` | Prolactin (ng/mL) | `number` |  |  |  |
| Male Hypogonadism / Testosterone Therapy Visit | Labs & Symptom Assessment | `shbg` | SHBG (nmol/L) | `number` |  |  |  |
| Male Hypogonadism / Testosterone Therapy Visit | Labs & Symptom Assessment | `hematocrit` | Hematocrit (%) — prior to TRT | `number` |  |  |  |
| Male Hypogonadism / Testosterone Therapy Visit | Labs & Symptom Assessment | `psa` | PSA (ng/mL) — prior to TRT | `number` |  |  |  |
| Male Hypogonadism / Testosterone Therapy Visit | Labs & Symptom Assessment | `symptoms` | Hypogonadism Symptom Score (AMS) | `textarea` | Y |  |  |
| Male Hypogonadism / Testosterone Therapy Visit | Treatment Plan | `fertilityCounseling` | Fertility Discussion | `textarea` | Y |  |  |
| Male Hypogonadism / Testosterone Therapy Visit | Treatment Plan | `trtPlan` | Testosterone Replacement Therapy Plan | `textarea` | Y |  |  |
| Male Hypogonadism / Testosterone Therapy Visit | Treatment Plan | `plan` | Assessment & Plan | `textarea` | Y |  |  |

### Male Infertility — `urology_male_infertility_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Male Infertility — Semen Analysis, Azoospermia, Varicocele, ART | Male Infertility Evaluation | `semen_analysis` | WHO 2021 Fifth Edition Reference Values, Semen Analysis Interpretation, and Initial Workup (MALE INFERTILITY EVALUATION: DEFINITION: failure to achieve pregnancy after 12 months unprotected intercourse (6 months if female >35); MALE FACTOR: contributes to 40-50% of couples infertility; EVALUATION INITIATION: concurrent with female evaluation; HISTORY: fertility history (prior conceptions); sexual history (frequency; dysfunction); medical (cryptorchidism; testicular trauma; orchitis; chemotherapy; radiation); SURGICAL: hernia repair; vasectomy; retroperitoneal; scrotal; MEDICATIONS: testosterone exogenous (suppresses spermatogenesis); alkylating agents; sulfasalazine; OCCUPATIONAL/EXPOSURE: heat; heavy metals; pesticides; LIFESTYLE: smoking; alcohol; marijuana (reduces sperm motility); anabolic steroids; PHYSICAL EXAM: genital exam; testicular volume (Prader orchidometer; normal 15-25 mL each); varicocele (dilated pampiniform plexus); vas deferens palpation; epididymis; SEMEN ANALYSIS (WHO 2021 5th EDITION CRITERIA): SAMPLE COLLECTION: 2-7 days abstinence; VOLUME: >=1.4 mL (2021 lowered from 1.5 mL); LOW VOLUME: ejaculatory duct obstruction; retrograde ejaculation; CONCENTRATION: >=16 million/mL (2021); total sperm count >=39 million per ejaculate; MOTILITY: TOTAL MOTILITY >=42%; PROGRESSIVE MOTILITY >=30%; MORPHOLOGY: >=4% normal forms (Kruger strict criteria; Tygerberg); VITALITY: >=54% live spermatozoa; LEUKOCYTES: <1 million WBC/mL; >1 million = leukocytospermia (infection; inflammatory); DNA FRAGMENTATION INDEX (DFI): SCSA or TUNEL; DFI >25-30% = poor IVF/IUI outcomes; SPERM CHROMATIN STRUCTURE ASSAY (SCSA); INITIAL LABS: FSH; LH; TOTAL TESTOSTERONE (morning); PROLACTIN; TSH; if severe oligo/azoospermia: KARYOTYPE + Y-CHROMOSOME MICRODELETION | `text` |  |  |  |
| Male Infertility — Semen Analysis, Azoospermia, Varicocele, ART | Male Infertility Evaluation | `azoospermia_dx` | Obstructive vs. Non-Obstructive Azoospermia Differential and Hormone Profile | `select` |  |  |  |
| Male Infertility — Semen Analysis, Azoospermia, Varicocele, ART | Varicocele Treatment and Sperm Retrieval for ART | `varicocele` | Varicocele Grade and Surgical Repair, Subinguinal Microsurgery, and Impact on Fertility (VARICOCELE: DEFINITION: dilated pampiniform plexus veins in scrotum; PREVALENCE: 15% general male population; 35-40% of infertile males; 80% of secondary infertility; PATHOPHYSIOLOGY: increased testicular temperature; oxidative stress; elevated reactive oxygen species (ROS); hypoxia; reflux of adrenal metabolites; CLASSIFICATION: GRADE I: palpable only with Valsalva; GRADE II: palpable without Valsalva; GRADE III: visible through skin; 90% LEFT-SIDED: left gonadal vein drains to left renal vein (90 degree angle); right gonadal vein to IVC (acute angle); BILATERAL: 10%; RIGHT ISOLATED: EVALUATE for retroperitoneal mass compressing IVC; DIAGNOSIS: SCROTAL ULTRASOUND WITH DOPPLER: varix diameter >2.5 mm (grade 3); dilation with Valsalva; reversal of flow; CLINICAL EXAMINATION: primary diagnostic tool; VARICOCELE REPAIR INDICATIONS (AUA 2021 GUIDELINES): 1) PALPABLE varicocele + ABNORMAL SEMEN ANALYSIS + COUPLE WITH OTHERWISE UNEXPLAINED INFERTILITY (or female with treatable cause); 2) ADOLESCENT with IPSILATERAL TESTICULAR ATROPHY >20% volume discrepancy; 3) HYPOGONADISM from varicocele; SURGICAL APPROACHES: SUBINGUINAL MICROSURGICAL VARICOCELECTOMY: GOLD STANDARD; magnification; internal spermatic artery + lymphatics spared; LOWEST RECURRENCE (1-2%); lowest hydrocele rate (0-1%); INGUINAL: slightly higher recurrence; LAPAROSCOPIC: higher recurrence (5-10%); higher hydrocele; PERCUTANEOUS EMBOLIZATION: radiological; no skin incision; higher failure; OUTCOMES OF REPAIR: SEMEN PARAMETER IMPROVEMENT: 60-70% improve motility; 45% improve sperm concentration; SPONTANEOUS PREGNANCY RATE: 40-50% within 1-2 years post-repair; TESTOSTERONE: modest improvement (100-150 ng/dL increase); ADOLESCENT REPAIR: prevents further volume loss + may allow catch-up growth | `text` |  |  |  |
| Male Infertility — Semen Analysis, Azoospermia, Varicocele, ART | Varicocele Treatment and Sperm Retrieval for ART | `mtese_icsi` | Microsurgical TESE for NOA, ICSI Success Rates, and Sperm Banking Before Cancer Treatment | `select` |  |  |  |

### Overactive Bladder — `urology_overactive_bladder_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| OAB and LUTS — Antimuscarinics, Mirabegron, Botox, Neuromodulation | OAB Diagnosis and Assessment | `oab_dx` | OAB Definition, LUTS Evaluation, and Urodynamics (OVERACTIVE BLADDER (OAB): SYMPTOM SYNDROME: urgency (key) +/- urgency incontinence + frequency (>=8 voids/24h) + nocturia (>=2 voids/night); WITHOUT URINARY TRACT INFECTION or OBVIOUS PATHOLOGY; OAB WET: urgency + urgency urinary incontinence (UUI); OAB DRY: urgency without incontinence; PREVALENCE: 16% adults; increases with age; ETIOLOGY: DETRUSOR OVERACTIVITY (involuntary detrusor contractions); idiopathic vs. neurogenic (MS, PD, spinal cord injury, stroke); STRESS URINARY INCONTINENCE (SUI): different; leakage on effort (cough, sneeze, exercise); MIXED INCONTINENCE: both OAB + SUI components; EVALUATION: HISTORY: voiding diary (3 days): frequency, urgency episodes, incontinence events, fluid intake, nocturia; PHYSICAL EXAM: pelvic organ prolapse; atrophic vaginitis; prostate (men); URINALYSIS + CULTURE: exclude UTI; POSTVOID RESIDUAL (PVR): bladder scan or catheter; >150 mL = urinary retention concern; avoid antimuscarinics if high PVR; QUESTIONNAIRES: OAB-q; ICIQ-UI Short Form; OABSS; URODYNAMICS (NOT ROUTINE): for complex/refractory cases; multi-channel urodynamics: fill cystometry (detrusor overactivity confirmed); pressure-flow (BOO vs. detrusor underactivity); CYSTOSCOPY: hematuria; pain; high suspicion bladder pathology; IMAGING: upper tract US if hematuria; RED FLAGS: hematuria; pain; recurrent UTI; neurological symptoms; NOCTURIA: separately assess: nocturnal polyuria (NP): >33% urine at night; primary vs. 24h polyuria; cardiac/renal/medical causes; sleep disorders | `text` |  |  |  |
| OAB and LUTS — Antimuscarinics, Mirabegron, Botox, Neuromodulation | OAB Diagnosis and Assessment | `lifestyle` | Behavioral Therapy and First-Line OAB Management | `select` |  |  |  |
| OAB and LUTS — Antimuscarinics, Mirabegron, Botox, Neuromodulation | Pharmacologic and Procedural Treatment | `antimusc_mira` | Antimuscarinics, Mirabegron, and Combination Therapy (ANTIMUSCARINICS (SECOND-LINE after behavioral failure): MECHANISM: block M2/M3 muscarinic receptors in detrusor → reduce involuntary contractions; OXYBUTYNIN: IR 5 mg TID; ER 5-30 mg QD; patch 3.9 mg/day; gel 3%; HIGH CNS SIDE EFFECTS (lipophilic; crosses BBB); dry mouth, constipation; cognitive effects (AVOID in elderly with cognitive impairment); TOLTERODINE: IR 2 mg BID; ER 4 mg QD; less CNS than oxybutynin; SOLIFENACIN: 5-10 mg QD; M3 selective; DARIFENACIN: 7.5-15 mg QD; M3 selective; less CNS; TROSPIUM: 20 mg BID or ER 60 mg QD; quaternary amine (does NOT cross BBB); safest for cognition; FESOTERODINE: 4-8 mg QD; prodrug of tolterodine; BEERS CRITERIA: all antimuscarinics on AGS Beers list for elderly (avoid or use caution); MIRABEGRON (MYRBETRIQ): BETA-3 ADRENERGIC AGONIST; increases bladder capacity; NO anticholinergic side effects; 25-50 mg QD; eGFR-adjusted; BLOOD PRESSURE INCREASE (mild; contraindicated in severe HTN); no cognitive effects; COMBINATION (SYNERGY TRIAL): solifenacin 5 mg + mirabegron 25/50 mg: superior to monotherapy; FDA-approved combination pill (Vibegron + solifenacin not yet); VIBEGRON (Vibegron, Gemtesa): newer beta-3; 75 mg QD; less drug interactions; no BP effect; FDA 2020; MONITORING: PVR (antimuscarinics contraindicated if elevated); dry mouth management; dose reduction if intolerant; constipation: stool softeners | `text` |  |  |  |
| OAB and LUTS — Antimuscarinics, Mirabegron, Botox, Neuromodulation | Pharmacologic and Procedural Treatment | `botox_sn` | OnabotulinumtoxinA and Sacral Neuromodulation | `select` |  |  |  |

### Pelvic Floor Dysfunction — `pelvic_floor_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pelvic Floor Dysfunction Evaluation | Patient & Complaint | `patientId` | Patient | `typeahead` | Y |  |  |
| Pelvic Floor Dysfunction Evaluation | Patient & Complaint | `visitDate` | Visit Date | `date` | Y |  |  |
| Pelvic Floor Dysfunction Evaluation | Patient & Complaint | `provider` | Provider (Urogynecologist / Urology / OB-GYN) | `typeahead` | Y |  |  |
| Pelvic Floor Dysfunction Evaluation | Patient & Complaint | `primaryComplaint` | Primary Complaint | `select` | Y |  |  |
| Pelvic Floor Dysfunction Evaluation | Patient & Complaint | `obstetricHistory` | Relevant Obstetric / Surgical History | `textarea` |  |  |  |
| Pelvic Floor Dysfunction Evaluation | Symptom Quantification | `iciq` | ICIQ-SF Score (0-21; > 5 = significant UI) | `number` |  |  |  |
| Pelvic Floor Dysfunction Evaluation | Symptom Quantification | `popq` | Prolapse Stage (POP-Q) | `select` | Y |  |  |
| Pelvic Floor Dysfunction Evaluation | Symptom Quantification | `symptoms` | Bladder Diary / Symptom Assessment | `textarea` | Y |  |  |
| Pelvic Floor Dysfunction Evaluation | Symptom Quantification | `urinalysis` | Urinalysis / PVR | `textarea` | Y |  |  |
| Pelvic Floor Dysfunction Evaluation | Treatment Plan | `plan` | Assessment & Treatment Plan | `textarea` | Y |  |  |

### Prostate Cancer — `prostate_cancer_cf`

Screen: 1 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prostate Cancer Management | Staging and Risk | `psa_at_dx` | PSA at Diagnosis (ng/mL) | `number` |  |  |  |
| Prostate Cancer Management | Staging and Risk | `gleason_score` | Gleason Score (or Grade Group) | `select` |  |  |  |
| Prostate Cancer Management | Staging and Risk | `clinical_stage` | Clinical T Stage | `select` |  |  |  |
| Prostate Cancer Management | Staging and Risk | `risk_group` | NCCN Risk Group | `select` |  |  |  |
| Prostate Cancer Management | Staging and Risk | `current_psa` | Current PSA (ng/mL) | `number` |  |  |  |
| Prostate Cancer Management | Treatment and Surveillance | `treatment_status` | Current Treatment / Surveillance | `select` |  |  |  |
| Prostate Cancer Management | Treatment and Surveillance | `psa_nadir` | PSA Nadir Achieved | `number` |  |  |  |
| Prostate Cancer Management | Treatment and Surveillance | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Prostate Cancer — `urology_prostate_cancer_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prostate Cancer: Active Surveillance, Definitive Treatment, and Advanced Disease | Staging and Risk Stratification | `pca_risk_group` | NCCN Risk Group (Localized Disease) | `select` |  |  |  |
| Prostate Cancer: Active Surveillance, Definitive Treatment, and Advanced Disease | Staging and Risk Stratification | `pca_staging` | Staging Workup | `select` |  |  |  |
| Prostate Cancer: Active Surveillance, Definitive Treatment, and Advanced Disease | Staging and Risk Stratification | `pca_as_protocol` | Active Surveillance Protocol | `select` |  |  |  |
| Prostate Cancer: Active Surveillance, Definitive Treatment, and Advanced Disease | Staging and Risk Stratification | `pca_biomarkers` | Tissue and Serum Biomarkers — Decipher (GRID) genomic classifier: post-surgical risk of metastases (0-1 score; above 0.45 = high; drives adjuvant treatment decision); Oncotype DX Genomic Prostate Score (0-100; above 40 = unfavorable intermediate risk despite biopsy Grade Group); Prolaris cell cycle progression score; Select MDx urine test (pre-biopsy risk calculator); PSA density; PSA kinetics (doubling time and velocity); phi (Prostate Health Index: PSA + proPSA + free PSA); 4Kscore; AR-V7 splice variant (resistance to enzalutamide and abiraterone; detected in circulating tumor cells) | `text` |  |  |  |
| Prostate Cancer: Active Surveillance, Definitive Treatment, and Advanced Disease | ADT and Systemic Therapy for Advanced Disease | `pca_adt` | Androgen Deprivation Therapy (ADT) | `select` |  |  |  |
| Prostate Cancer: Active Surveillance, Definitive Treatment, and Advanced Disease | ADT and Systemic Therapy for Advanced Disease | `pca_mcspc` | Metastatic Castration-Sensitive Prostate Cancer (mCSPC) | `select` |  |  |  |
| Prostate Cancer: Active Surveillance, Definitive Treatment, and Advanced Disease | ADT and Systemic Therapy for Advanced Disease | `pca_crpc` | Castration-Resistant Prostate Cancer (CRPC) | `select` |  |  |  |
| Prostate Cancer: Active Surveillance, Definitive Treatment, and Advanced Disease | ADT and Systemic Therapy for Advanced Disease | `pca_adt_toxicity` | ADT Toxicity Management | `select` |  |  |  |
| Prostate Cancer: Active Surveillance, Definitive Treatment, and Advanced Disease | ADT and Systemic Therapy for Advanced Disease | `pca_notes` | Prostate Cancer Management Notes and Urology/Radiation Oncology/Medical Oncology/Genetics Coordination | `textarea` |  |  |  |

### Testicular Cancer — `urology_testicular_cancer_cf`

Screen: 1 page(s) · 4 section(s) · 26 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Testicular Cancer Management | Diagnosis and Staging | `tc_histology` | Histology | `select` |  |  |  |
| Testicular Cancer Management | Diagnosis and Staging | `tc_affected_side` | Affected Side | `select` |  |  |  |
| Testicular Cancer Management | Diagnosis and Staging | `tc_stage` | Clinical Stage (TNM) | `select` |  |  |  |
| Testicular Cancer Management | Diagnosis and Staging | `tc_igcccg_group` | IGCCCG Risk Group | `select` |  |  |  |
| Testicular Cancer Management | Diagnosis and Staging | `tc_lymphovascular_invasion` | Lymphovascular Invasion | `select` |  |  |  |
| Testicular Cancer Management | Diagnosis and Staging | `tc_retroperitoneal_nodes` | Largest Retroperitoneal Node (mm) | `text` |  |  |  |
| Testicular Cancer Management | Tumor Markers | `tc_afp_pre` | AFP Pre-orchiectomy (ng/mL) | `number` |  |  |  |
| Testicular Cancer Management | Tumor Markers | `tc_afp_post` | AFP Post-orchiectomy (ng/mL) | `number` |  |  |  |
| Testicular Cancer Management | Tumor Markers | `tc_hcg_pre` | Beta-hCG Pre-orchiectomy (mIU/mL) | `number` |  |  |  |
| Testicular Cancer Management | Tumor Markers | `tc_hcg_post` | Beta-hCG Post-orchiectomy (mIU/mL) | `number` |  |  |  |
| Testicular Cancer Management | Tumor Markers | `tc_ldh_pre` | LDH Pre-orchiectomy (U/L) | `number` |  |  |  |
| Testicular Cancer Management | Tumor Markers | `tc_ldh_post` | LDH Post-orchiectomy (U/L) | `number` |  |  |  |
| Testicular Cancer Management | Tumor Markers | `tc_markers_normalized` | Markers Normalized Post-surgery | `select` |  |  |  |
| Testicular Cancer Management | Treatment Plan | `tc_orchiectomy_date` | Radical Orchiectomy Date | `date` |  |  |  |
| Testicular Cancer Management | Treatment Plan | `tc_treatment_plan` | Post-orchiectomy Treatment | `select` |  |  |  |
| Testicular Cancer Management | Treatment Plan | `tc_chemo_cycles_given` | Chemotherapy Cycles Given | `number` |  |  |  |
| Testicular Cancer Management | Treatment Plan | `tc_residual_mass` | Residual Mass Post-chemotherapy | `select` |  |  |  |
| Testicular Cancer Management | Treatment Plan | `tc_sperm_banking` | Sperm Banking | `select` |  |  |  |
| Testicular Cancer Management | Treatment Plan | `tc_testosterone` | Testosterone Replacement | `select` |  |  |  |
| Testicular Cancer Management | Surveillance Schedule | `tc_surveillance_ct_schedule` | CT Surveillance Schedule | `text` |  |  |  |
| Testicular Cancer Management | Surveillance Schedule | `tc_current_markers` | Most Recent Tumor Markers + Date | `text` |  |  |  |
| Testicular Cancer Management | Surveillance Schedule | `tc_relapse_status` | Relapse Status | `select` |  |  |  |
| Testicular Cancer Management | Surveillance Schedule | `tc_contralateral_orch` | Contralateral Testicle Exam | `select` |  |  |  |
| Testicular Cancer Management | Surveillance Schedule | `tc_oncology_followup` | Next Oncology Follow-up Date | `text` |  |  |  |
| Testicular Cancer Management | Surveillance Schedule | `tc_late_effects` | Long-Term Effects Monitoring (cisplatin neuropathy, hearing, cardiac) | `textarea` |  |  |  |
| Testicular Cancer Management | Surveillance Schedule | `tc_notes` | Additional Notes | `textarea` |  |  |  |

### Urinary Incontinence — `urinary_incontinence_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Urinary Incontinence Evaluation | Patient & Symptom Profile | `patientId` | Patient | `typeahead` | Y |  |  |
| Urinary Incontinence Evaluation | Patient & Symptom Profile | `visitDate` | Visit Date | `date` | Y |  |  |
| Urinary Incontinence Evaluation | Patient & Symptom Profile | `provider` | Provider (Urology / OB-GYN / PCP) | `typeahead` | Y |  |  |
| Urinary Incontinence Evaluation | Patient & Symptom Profile | `incontinenceType` | Type of Incontinence | `select` | Y |  |  |
| Urinary Incontinence Evaluation | Patient & Symptom Profile | `severity` | Severity | `select` | Y |  |  |
| Urinary Incontinence Evaluation | Bladder History | `bladderDiary` | Bladder Diary Review (3-Day Diary) | `textarea` | Y |  |  |
| Urinary Incontinence Evaluation | Bladder History | `riskFactors` | Risk Factors | `textarea` | Y |  |  |
| Urinary Incontinence Evaluation | Bladder History | `examination` | Physical Examination | `textarea` | Y |  |  |
| Urinary Incontinence Evaluation | Management Plan | `plan` | Assessment & Plan | `textarea` | Y |  |  |

### Urinary Incontinence — `urology_urinary_incontinence_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Urinary Incontinence — Classification and Management | Classification and Workup | `ui_type` | Incontinence Type | `select` |  |  |  |
| Urinary Incontinence — Classification and Management | Classification and Workup | `evaluation` | Initial Evaluation (history: symptom type, duration, fluid intake, medications; ICIQ-UI for severity; bladder diary 3 days; physical exam: pelvic organ prolapse (POP-Q staging), rectal tone, neurologic; UA + culture; PVR; multichannel urodynamics for: surgical planning, mixed incontinence, prior failed surgery, suspected neurogenic; renal US if PVR >300 or recurrent UTI) | `text` |  |  |  |
| Urinary Incontinence — Classification and Management | Treatment Ladder and Surgery | `conservative` | Conservative Measures (pelvic floor PT: 12-week supervised Kegel program; 65% improvement in SUI; bladder training: progressive voiding intervals for OAB (2h target); fluid management: 1.5-2L/day, avoid caffeine/alcohol; weight loss: 5-10% body weight reduction significantly reduces SUI; topical estrogen for postmenopausal atrophy (Vagifem, Premarin cream); pessary: ring or Gelhorn for SUI with prolapse; absorbent products for quality of life while pursuing definitive treatment) | `text` |  |  |  |
| Urinary Incontinence — Classification and Management | Treatment Ladder and Surgery | `surgical` | Surgical Options | `select` |  |  |  |

### Urinary Incontinence — `urology_incontinence_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Urinary Incontinence Evaluation | Incontinence Type | `incontinence_type` | Incontinence Type | `select` |  |  |  |
| Urinary Incontinence Evaluation | Incontinence Type | `leakage_frequency` | Leakage Frequency | `select` |  |  |  |
| Urinary Incontinence Evaluation | Incontinence Type | `iciq_score` | ICIQ-SF Score (0-21 — impact on QoL; mild ≤5, moderate 6-12, severe ≥13) | `number` |  |  |  |
| Urinary Incontinence Evaluation | Incontinence Type | `pvr` | Post-Void Residual (mL — >300 = overflow; measure with bladder scan) | `number` |  |  |  |
| Urinary Incontinence Evaluation | Objective Testing | `cough_stress_test` | Cough stress test positive (visible leakage on full bladder cough — confirms SUI) | `checkbox` |  |  |  |
| Urinary Incontinence Evaluation | Objective Testing | `q_tip_test` | Q-Tip Test (degrees of deflection — >30° = urethral hypermobility; complements SUI eval) | `number` |  |  |  |
| Urinary Incontinence Evaluation | Objective Testing | `urodynamics` | Urodynamics performed (if complex / prior failed surgery / OAB symptoms with possible obstruction) | `checkbox` |  |  |  |
| Urinary Incontinence Evaluation | Treatment Plan | `conservative` | Conservative (first-line: pelvic floor physical therapy × 8-12 weeks; bladder training; fluid optimization; timed voiding) | `textarea` |  |  |  |
| Urinary Incontinence Evaluation | Treatment Plan | `oab_medications` | OAB Pharmacotherapy (UUI / mixed) | `select` |  |  |  |
| Urinary Incontinence Evaluation | Treatment Plan | `surgical_sui` | Surgical Options (SUI) | `select` |  |  |  |
| Urinary Incontinence Evaluation | Treatment Plan | `sacral_neuromod` | Sacral neuromodulation (InterStim — refractory OAB / UUI / non-obstructive urinary retention) | `checkbox` |  |  |  |
| Urinary Incontinence Evaluation | Treatment Plan | `botox_bladder` | Onabotulinumtoxin A (OnabotulinumtoxinA 100U — refractory OAB/UUI; repeat q6-12 months; risk of PVR elevation) | `checkbox` |  |  |  |

## Geriatrics

### Comprehensive Geriatric Assessment — `geriatrics_comprehensive_assessment_cf`

Screen: 1 page(s) · 3 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Comprehensive Geriatric Assessment (CGA) | Functional Status Assessment | `adl_iadl` | Functional Independence Level | `select` |  |  |  |
| Comprehensive Geriatric Assessment (CGA) | Functional Status Assessment | `gait_balance` | Gait and Fall Risk Assessment (Timed Up and Go (TUG): >12 sec = high fall risk; 4-meter gait speed: <0.8 m/sec = high risk, <0.6 m/sec = severely impaired; Tinetti POMA gait/balance; STEADI fall risk tool; orthostatic vital signs — defined as SBP drop ≥20 mmHg or DBP drop ≥10 mmHg 1 minute after standing; medication review for fall risk drugs) | `text` |  |  |  |
| Comprehensive Geriatric Assessment (CGA) | Cognitive and Psychological Assessment | `cognitive_screen` | Cognitive Screening Result | `select` |  |  |  |
| Comprehensive Geriatric Assessment (CGA) | Cognitive and Psychological Assessment | `depression` | Depression Screening (GDS) | `select` |  |  |  |
| Comprehensive Geriatric Assessment (CGA) | Polypharmacy and Frailty | `beers_criteria` | Beers Criteria Review (AGS Beers Criteria 2023; high-risk medications to avoid/use-cautiously: benzodiazepines (falls, delirium), first-generation antihistamines (anticholinergic), NSAIDs (GI bleed, renal), sulfonylureas long-acting (hypoglycemia), TCAs (cardiac, anticholinergic), muscle relaxants (excessive sedation); STOPP/START criteria in Europe; document medications reviewed and deprescribed) | `text` |  |  |  |
| Comprehensive Geriatric Assessment (CGA) | Polypharmacy and Frailty | `frailty_score` | Frailty Assessment | `select` |  |  |  |

### Delirium — `delirium_assessment_cf`

Screen: 1 page(s) · 3 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Delirium Assessment | CAM Criteria | `acute_onset` | Feature 1: Acute onset or fluctuating course | `checkbox` |  |  |  |
| Delirium Assessment | CAM Criteria | `inattention` | Feature 2: Inattention | `checkbox` |  |  |  |
| Delirium Assessment | CAM Criteria | `disorganized_thinking` | Feature 3: Disorganized thinking | `checkbox` |  |  |  |
| Delirium Assessment | CAM Criteria | `altered_loc` | Feature 4: Altered level of consciousness | `checkbox` |  |  |  |
| Delirium Assessment | CAM Criteria | `cam_positive` | CAM Positive (Features 1+2 AND 3 or 4) | `checkbox` |  |  |  |
| Delirium Assessment | CAM Criteria | `delirium_subtype` | Delirium Subtype | `select` |  |  |  |
| Delirium Assessment | Contributing Factors (DELIRIUM Mnemonic) | `drugs` | Drugs (anticholinergics, opioids, benzos, steroids) | `checkbox` |  |  |  |
| Delirium Assessment | Contributing Factors (DELIRIUM Mnemonic) | `electrolytes` | Electrolyte / metabolic disturbance | `checkbox` |  |  |  |
| Delirium Assessment | Contributing Factors (DELIRIUM Mnemonic) | `lack_of_drugs` | Withdrawal (alcohol, benzodiazepines) | `checkbox` |  |  |  |
| Delirium Assessment | Contributing Factors (DELIRIUM Mnemonic) | `infection` | Infection (UTI, pneumonia, sepsis) | `checkbox` |  |  |  |
| Delirium Assessment | Contributing Factors (DELIRIUM Mnemonic) | `reduced_sensory` | Sensory impairment (vision/hearing) | `checkbox` |  |  |  |
| Delirium Assessment | Contributing Factors (DELIRIUM Mnemonic) | `urinary_retention` | Urinary retention / constipation / pain | `checkbox` |  |  |  |
| Delirium Assessment | Contributing Factors (DELIRIUM Mnemonic) | `myocardial` | Cardiopulmonary event (MI, PE, hypoxia) | `checkbox` |  |  |  |
| Delirium Assessment | Non-Pharmacologic Interventions | `reorientation` | Reorientation (clock, calendar, familiar faces) | `checkbox` |  |  |  |
| Delirium Assessment | Non-Pharmacologic Interventions | `sleep_protocol` | Sleep-wake cycle normalized (minimize nighttime interruptions) | `checkbox` |  |  |  |
| Delirium Assessment | Non-Pharmacologic Interventions | `early_mobility` | Early mobility initiated | `checkbox` |  |  |  |
| Delirium Assessment | Non-Pharmacologic Interventions | `hearing_vision_aids` | Hearing aids / glasses in use | `checkbox` |  |  |  |
| Delirium Assessment | Non-Pharmacologic Interventions | `avoid_restraints` | Physical restraints avoided | `checkbox` |  |  |  |
| Delirium Assessment | Non-Pharmacologic Interventions | `antipsychotic_used` | Low-dose antipsychotic used (haloperidol/quetiapine) for severe agitation only | `checkbox` |  |  |  |
| Delirium Assessment | Non-Pharmacologic Interventions | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Delirium — `geriatrics_delirium_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Delirium — Diagnosis, Prevention, Nonpharmacologic and Pharmacologic Management | Delirium Definition, Epidemiology, and Risk Factors | `del_f1` | Delirium Evaluation: DEFINITION DSM-5 (DISTURBANCE ATTENTION AND AWARENESS; ADDITIONAL COGNITION DISTURBANCE; DEVELOPS OVER SHORT PERIOD HOURS DAYS; FLUCTUATES OVER COURSE OF DAY; DIRECT CONSEQUENCE MEDICAL CONDITION; EPIDEMIOLOGY (14-24 pct HOSPITALIZED MEDICAL PATIENTS; 37-46 pct POST-OPERATIVE; 80 pct ICU PATIENTS MECHANICALLY VENTILATED; COMPLICATION 20-30 pct HOSPITALIZED OLDER ADULTS; OUTCOMES (INCREASED MORTALITY 6-12 MONTHS; PROLONGED HOSPITALIZATION; FUNCTIONAL DECLINE; COGNITIVE DECLINE DEMENTIA ACCELERATION; INCREASED NURSING HOME PLACEMENT; INCREASED COSTS; SUBTYPES (HYPERACTIVE: AGITATION CONFUSION HALLUCINATIONS; HYPOACTIVE 50 pct: WITHDRAWN SOMNOLENT EASILY MISSED; MIXED: FLUCTUATING BOTH; HYPOACTIVE WORSE PROGNOSIS OFTEN UNDIAGNOSED; PREDISPOSING RISK FACTORS (AGE OVER 65; DEMENTIA STRONGEST BASELINE COGNITIVE IMPAIRMENT; PRIOR DELIRIUM; FUNCTIONAL IMPAIRMENT; DEHYDRATION; SEVERITY ILLNESS COMORBIDITIES; SENSORY IMPAIRMENT VISION HEARING; ALCOHOL DEPENDENCE; PRECIPITATING FACTORS I WATCH DEATH MNEMONIC (INFECTION WITHDRAWAL ACUTE METABOLIC TRAUMA CNS PATHOLOGY HYPOXIA DEFICIENCIES ENDOCRINOPATHIES ACUTE VASCULAR TOXINS HEAVY METALS; MEDICATIONS: OPIOIDS BENZODIAZEPINES ANTICHOLINERGICS ANTIHISTAMINES STEROIDS; URINARY CATHETERIZATION PHYSICAL RESTRAINTS; IMMOBILITY; PAIN POORLY CONTROLLED; SLEEP DEPRIVATION; ENVIRONMENTAL DISORIENTATION) | `text` |  |  |  |
| Delirium — Diagnosis, Prevention, Nonpharmacologic and Pharmacologic Management | Delirium Definition, Epidemiology, and Risk Factors | `del_f2` | CAM Diagnosis Prevention and Management | `select` |  |  |  |

### Delirium Management — `geriatrics_delirium_management_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Delirium Assessment and Management | CAM Delirium Diagnosis | `cam_result` | CAM (Confusion Assessment Method) Result | `select` |  |  |  |
| Delirium Assessment and Management | CAM Delirium Diagnosis | `cam_feature1` | Feature 1: Acute onset and fluctuating course (change from baseline; waxes and wanes) | `checkbox` |  |  |  |
| Delirium Assessment and Management | CAM Delirium Diagnosis | `cam_feature2` | Feature 2: Inattention (difficulty focusing; easily distracted; cannot follow commands) | `checkbox` |  |  |  |
| Delirium Assessment and Management | CAM Delirium Diagnosis | `cam_feature3` | Feature 3: Disorganized thinking (incoherent speech; rambling; irrelevant conversation) | `checkbox` |  |  |  |
| Delirium Assessment and Management | CAM Delirium Diagnosis | `cam_feature4` | Feature 4: Altered level of consciousness (other than alert: vigilant, lethargic, stupor, coma) | `checkbox` |  |  |  |
| Delirium Assessment and Management | CAM Delirium Diagnosis | `delirium_subtype` | Delirium Subtype | `select` |  |  |  |
| Delirium Assessment and Management | Precipitating Factors (DELIRIUM Mnemonic) | `precipitants` | Identified Precipitants (Drugs/alcohol, Emotional/pain, Low O2, Infection, Retention urinary/fecal, Ictal/neurological, Underhydration/nutrition, Metabolic/endocrine) | `textarea` |  |  |  |
| Delirium Assessment and Management | Precipitating Factors (DELIRIUM Mnemonic) | `contributing_meds` | Potentially Contributing Medications (benzodiazepines, opioids, anticholinergics, steroids, H2-blockers, antihistamines, antiepileptics) | `textarea` |  |  |  |
| Delirium Assessment and Management | Non-Pharmacological Management (HELP Protocol) | `reorientation` | Reorientation: clock, calendar, familiar objects; family presence encouraged; consistent staff | `checkbox` |  |  |  |
| Delirium Assessment and Management | Non-Pharmacological Management (HELP Protocol) | `sensory` | Sensory optimization: glasses and hearing aids in place; adequate lighting (avoid bright lights at night) | `checkbox` |  |  |  |
| Delirium Assessment and Management | Non-Pharmacological Management (HELP Protocol) | `mobility` | Early mobilization: OOB to chair; ambulation TID if safe; avoid restraints (worsen delirium) | `checkbox` |  |  |  |
| Delirium Assessment and Management | Non-Pharmacological Management (HELP Protocol) | `sleep_protocol` | Sleep protocol: limit night interruptions; earplugs/eye masks; no late medications if deferrable | `checkbox` |  |  |  |
| Delirium Assessment and Management | Non-Pharmacological Management (HELP Protocol) | `pharmacological` | Pharmacological Treatment (only if safety risk; low-dose haloperidol 0.5-1mg; avoid in DLB/PD; quetiapine if Parkinsonism) | `textarea` |  |  |  |

### Dementia — `geriatrics_dementia_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dementia — Types, Diagnosis, Pharmacotherapy, and Caregiver Support | Dementia Classification, Diagnostic Criteria, and Workup | `dem_f1` | Dementia Evaluation: EPIDEMIOLOGY (6.5 MILLION US WITH DEMENTIA; DOUBLES EVERY 5 YEARS OVER 65; 2050 PROJECTED 13 MILLION; LEADING CAUSE DISABILITY; TYPES (ALZHEIMER DISEASE AD 60-80 pct: AMYLOID PLAQUES TAU TANGLES; EPISODIC MEMORY EARLY; GRADUAL PROGRESSIVE; VASCULAR DEMENTIA 10-20 pct: STEPWISE COGNITIVE DECLINE; STROKE DISEASE; EXECUTIVE FUNCTION PROMINENT; LEWY BODY DEMENTIA LBD 10-25 pct (FLUCTUATING COGNITION; VISUAL HALLUCINATIONS; PARKINSONISM; REM SLEEP BEHAVIOR DISORDER; FALLS; NEUROLEPTIC SENSITIVITY; ALPHA-SYNUCLEIN; FRONTOTEMPORAL DEMENTIA FTD 5-10 pct (BEHAVIORAL VARIANT: PERSONALITY DISINHIBITION; PRIMARY PROGRESSIVE APHASIA LANGUAGE; YOUNG ONSET; TAU TDP-43; MIXED DEMENTIA: MULTIPLE PATHOLOGIES COMMON ELDERLY; DIAGNOSIS (CRITERIA: COGNITIVE DECLINE 2 OR MORE DOMAINS; IMPAIRS DAILY FUNCTION; NOT DELIRIUM NOT PSYCHIATRIC; NIA-AA CRITERIA AD; NEUROPSYCHOLOGICAL TESTING; COGNITIVE SCREENING (MoCA: 30 POINTS UNDER 26 CONCERN; MMSE: 30 POINTS; CDR CLINICAL DEMENTIA RATING: 0-3 SEVERITY; MONTREAL COG TEST; CLOCK DRAW; MINI-COG; WORKUP (CBC CMP TSH VIT B12 FOLATE; EXCLUDE REVERSIBLE CAUSES; RPR SYPHILIS HIV SELECTED; STRUCTURAL MRI: HIPPOCAMPAL ATROPHY AD; MULTIPLE INFARCTS VASCULAR; ASYMMETRIC FRONTAL FTD; PET AMYLOID: POSITIVE HIGHLY SPECIFIC AD; CSF AMYLOID TAU: LOW AMYLOID 42 HIGH TAU P-TAU; BIOFLUID BIOMARKERS PLASMA AMYLOID TAU GFAP NfL EMERGING; BLOOD BIOMARKERS FDA CLEARED SOME; GENETIC TESTING SELECTED YOUNG APOE4 RISK FACTOR NOT DIAGNOSTIC) | `text` |  |  |  |
| Dementia — Types, Diagnosis, Pharmacotherapy, and Caregiver Support | Dementia Classification, Diagnostic Criteria, and Workup | `dem_f2` | Pharmacotherapy BPSD and Caregiver Management | `select` |  |  |  |

### Dementia BPSD Management — `geriatrics_dementia_bpsd_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dementia: Behavioral and Psychological Symptoms (BPSD) Management | Dementia Stage and BPSD Profile | `bpsd_dementia_type` | Underlying Dementia Type | `select` |  |  |  |
| Dementia: Behavioral and Psychological Symptoms (BPSD) Management | Dementia Stage and BPSD Profile | `bpsd_cdr` | Dementia Severity (CDR or FAST Stage) | `select` |  |  |  |
| Dementia: Behavioral and Psychological Symptoms (BPSD) Management | Dementia Stage and BPSD Profile | `bpsd_symptoms` | Predominant BPSD Type | `select` |  |  |  |
| Dementia: Behavioral and Psychological Symptoms (BPSD) Management | Dementia Stage and BPSD Profile | `bpsd_triggers` | Identified Precipitating Factors | `select` |  |  |  |
| Dementia: Behavioral and Psychological Symptoms (BPSD) Management | Nonpharmacologic Management (FIRST-LINE) | `bpsd_nonpharm_approaches` | Nonpharmacologic Interventions (Always Try First) | `select` |  |  |  |
| Dementia: Behavioral and Psychological Symptoms (BPSD) Management | Nonpharmacologic Management (FIRST-LINE) | `bpsd_caregiver_assessment` | Caregiver Burden Assessment | `select` |  |  |  |
| Dementia: Behavioral and Psychological Symptoms (BPSD) Management | Pharmacologic Management | `bpsd_antipsychotic_use` | Antipsychotic Therapy (Black Box Warning in Dementia — increased mortality) | `select` |  |  |  |
| Dementia: Behavioral and Psychological Symptoms (BPSD) Management | Pharmacologic Management | `bpsd_ssri` | SSRI for Depression or Anxiety in Dementia | `select` |  |  |  |
| Dementia: Behavioral and Psychological Symptoms (BPSD) Management | Pharmacologic Management | `bpsd_cholinesterase` | Cholinesterase Inhibitor/Memantine (Cognitive Therapy Effect on BPSD) | `select` |  |  |  |
| Dementia: Behavioral and Psychological Symptoms (BPSD) Management | Pharmacologic Management | `bpsd_antipsychotic_review` | Antipsychotic Deprescribing Review | `select` |  |  |  |
| Dementia: Behavioral and Psychological Symptoms (BPSD) Management | Pharmacologic Management | `bpsd_notes` | BPSD Management Notes and Care Team Coordination | `textarea` |  |  |  |

### Dementia Care Planning — `geriatrics_dementia_care_planning_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dementia ACP, BPSD, Safety, Caregiver Support, and End-of-Life Planning | Advance Care Planning in Dementia | `dementia_acp_overview` | Early Advance Directive Discussion While Capacity Retained, POLST/MOLST Components, Health Care Proxy Designation, and Prognostication in Dementia (ADVANCE CARE PLANNING (ACP) IN DEMENTIA: OPTIMAL TIMING: EARLY IN DISEASE COURSE while patient retains decision-making capacity; diagnosis is a trigger for ACP conversation; COMPONENTS: HEALTH CARE PROXY (HCP)/HEALTHCARE AGENT: designated decision-maker when patient loses capacity; durable power of attorney for healthcare (DPAHS); WRITTEN ADVANCE DIRECTIVE: living will; specific preferences for: CPR; mechanical ventilation; artificial nutrition/hydration; hospitalization; POLST (PHYSICIAN ORDERS FOR LIFE-SUSTAINING TREATMENT): ACTIONABLE MEDICAL ORDERS (not just directives); SECTION A (CPR): YES CPR or DNR; SECTION B (MEDICAL INTERVENTIONS): Full treatment vs. Selective treatment vs. Comfort only; SECTION C (ARTIFICIAL NUTRITION): long-term; short-term; no artificial nutrition; MOLST (MEDICAL ORDERS FOR LIFE-SUSTAINING TREATMENT): similar; state-specific terminology; FOLLOWS PATIENT ACROSS SETTINGS; POLST replaces previous verbal orders; DECISION-MAKING CAPACITY ASSESSMENT: FOUR ELEMENTS (APPELBAUM): 1) UNDERSTAND information provided (can patient repeat diagnosis + options in own words?); 2) APPRECIATE how information applies to own situation; 3) REASON logically (weigh pros/cons; communicate reasoning); 4) EXPRESS CONSISTENT CHOICE (maintain and communicate decision); CAPACITY IS DECISION-SPECIFIC: may have capacity for simple decisions but not complex; FLUCTUATING CAPACITY in dementia: assess at time of decision; INCAPACITATED PATIENT: surrogate decision-making hierarchy; HEALTHCARE AGENT first; NEXT-OF-KIN (state hierarchy: spouse; adult children; parents; siblings; etc.); DECISION STANDARDS: SUBSTITUTED JUDGMENT (what would patient have wanted?); BEST INTEREST (when wishes unknown); PROGNOSTICATION: FAST SCALE (Functional Assessment Staging Test): stage 7c+ (loss of all intelligible speech; non-ambulatory; incontinent; <6 words; cannot sit independently); BIMS (Brief Interview for Mental Status); HOSPICE ELIGIBILITY: Medicare Hospice Benefit requires prognosis <=6 months + FAST 7c+; PROGNOSIS TABLES: Alzheimer Association; clinicians often overestimate prognosis in dementia | `text` |  |  |  |
| Dementia ACP, BPSD, Safety, Caregiver Support, and End-of-Life Planning | Advance Care Planning in Dementia | `capacity_assessment` | Surrogate Decision-Making Hierarchy, Guardianship vs. Conservatorship, Dementia Crises (APS Referral for Suspected Elder Abuse), and Safety at Home Assessment | `select` |  |  |  |
| Dementia ACP, BPSD, Safety, Caregiver Support, and End-of-Life Planning | Behavioral and Psychological Symptoms of Dementia (BPSD) and End-of-Life Care | `bpsd_overview` | BPSD Prevalence (>80% of Dementia), DICE Approach (Describe-Investigate-Create-Evaluate), Nonpharmacologic First, and TEEPA SNOW Dementia Communication Approach (BEHAVIORAL AND PSYCHOLOGICAL SYMPTOMS OF DEMENTIA (BPSD): PREVALENCE: >80% of people with dementia experience BPSD; TYPES: AGITATION/AGGRESSION; DEPRESSION; ANXIETY; APATHY; PSYCHOSIS (HALLUCINATIONS; DELUSIONS; PARANOIA); WANDERING; SLEEP DISTURBANCE; SEXUAL DISINHIBITION; SUNDOWNING (late afternoon/evening worsening); IMPACT: major cause of caregiver burden + nursing home placement; ASSESSMENT: rule out DELIRIUM first (acute change = infection; medication; pain; urinary retention; constipation); PAIN ASSESSMENT (nonverbal; PAINAD scale; FLACC scale); AIDES MNEMOIRES: DICE APPROACH (KALES et al.): DESCRIBE: what specifically is the behavior; when; where; who is present; INVESTIGATE: health causes (pain; constipation; UTI; medication side effect); unmet needs (hunger; cold; lonely; bored); environmental (noise; overstimulation); CAREGIVER FACTORS (approach; communication); CREATE: individualized plan; EVALUATE: monitor response; NONPHARMACOLOGIC APPROACHES (FIRST-LINE): PERSON-CENTERED CARE: individualized; maintain dignity; autonomy; TEEPA SNOW APPROACH: communication techniques for dementia; SENSORY STIMULATION: music therapy; aromatherapy; art therapy; pet therapy; STRUCTURED ACTIVITY: meaningful occupation; reminiscence; ENVIRONMENT: reducing noise; familiar objects; adequate lighting; safe wandering spaces; CAREGIVER TRAINING: education + communication techniques; AGITATION SPECIFIC: physical activity; massage; WHITE NOISE; VALIDATION THERAPY (Naomi Feil): enter patient reality; do not correct; BEHAVIORAL CHAIN ANALYSIS: antecedent-behavior-consequence (ABC) model; SLEEP HYGIENE: routine; light exposure; limited daytime sleeping; CAREGIVER SUPPORT: self-care; respite; support groups; dementia care consultant (ECHO-Dementia; Savvy Caregiver) | `text` |  |  |  |
| Dementia ACP, BPSD, Safety, Caregiver Support, and End-of-Life Planning | Behavioral and Psychological Symptoms of Dementia (BPSD) and End-of-Life Care | `bpsd_pharmacotherapy` | Antipsychotic Black Box Warning (1.7x Death Risk Elderly Dementia), When to Use Antipsychotics (Severe Distress Threatening Self or Others), SSRIs for Depression/Agitation Citalopram CitAD Trial, and Tube Feeding Late-Stage Dementia Evidence of Harm | `select` |  |  |  |

### Dementia Visit — `geriatrics_dementia_management_cf`

Screen: 1 page(s) · 4 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dementia Management Visit | Dementia Type and Stage | `dementia_type` | Dementia Subtype | `select` |  |  |  |
| Dementia Management Visit | Dementia Type and Stage | `fastag_stage` | FAST Stage (Functional Assessment Staging for Alzheimer) | `select` |  |  |  |
| Dementia Management Visit | Behavioral and Psychiatric Symptoms (BPSD) | `agitation` | Agitation / aggression (non-pharmacological first: redirection, sensory modulation, structured activities) | `checkbox` |  |  |  |
| Dementia Management Visit | Behavioral and Psychiatric Symptoms (BPSD) | `psychosis` | Psychosis (hallucinations, delusions) — if DLB, AVOID typical antipsychotics (high mortality risk) | `checkbox` |  |  |  |
| Dementia Management Visit | Behavioral and Psychiatric Symptoms (BPSD) | `sleep_disturbance` | Sleep disturbance / sundowning (structured sleep hygiene; melatonin low-dose; bright light therapy) | `checkbox` |  |  |  |
| Dementia Management Visit | Behavioral and Psychiatric Symptoms (BPSD) | `wandering` | Wandering / elopement risk (ID bracelet, door alarms, Safe Return program, home locks) | `checkbox` |  |  |  |
| Dementia Management Visit | Behavioral and Psychiatric Symptoms (BPSD) | `bpsd_management` | BPSD Management Plan (non-pharmacological tried first; pharmacological only if severe/refractory) | `textarea` |  |  |  |
| Dementia Management Visit | Dementia-Specific Medications | `cholinesterase_inhibitor` | Cholinesterase Inhibitor (mild-moderate AD) | `select` |  |  |  |
| Dementia Management Visit | Dementia-Specific Medications | `memantine` | Memantine (Namenda) prescribed (moderate-severe AD; NMDA receptor antagonist; can combine with ChEI) | `checkbox` |  |  |  |
| Dementia Management Visit | Dementia-Specific Medications | `lecanemab` | Anti-amyloid therapy considered (lecanemab/donanemab) — requires amyloid confirmation + ARIA monitoring MRI | `checkbox` |  |  |  |
| Dementia Management Visit | Dementia-Specific Medications | `safety_concern_driving` | Driving safety addressed (recommend driving evaluation or cessation; reported to DMV per state law if unsafe) | `checkbox` |  |  |  |
| Dementia Management Visit | Caregiver Support | `caregiver_burden` | Caregiver Burden (Zarit Caregiver Burden Scale) | `select` |  |  |  |
| Dementia Management Visit | Caregiver Support | `resources` | Caregiver Resources Connected (Alzheimer Association, adult day program, respite care, support group, legal/financial planning) | `textarea` |  |  |  |

### Elder Abuse Screen — `elder_abuse_screening_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Elder Abuse and Neglect Screening | Clinical Indicators | `unexplained_injuries` | Unexplained injuries (bruises, burns, fractures) | `checkbox` |  |  |  |
| Elder Abuse and Neglect Screening | Clinical Indicators | `inconsistent_history` | Inconsistent or implausible injury history | `checkbox` |  |  |  |
| Elder Abuse and Neglect Screening | Clinical Indicators | `poor_hygiene` | Poor hygiene / malnutrition despite adequate resources | `checkbox` |  |  |  |
| Elder Abuse and Neglect Screening | Clinical Indicators | `financial_exploitation` | Signs of financial exploitation (unpaid bills, sudden poverty) | `checkbox` |  |  |  |
| Elder Abuse and Neglect Screening | Clinical Indicators | `isolation` | Caregiver prevents private conversation with patient | `checkbox` |  |  |  |
| Elder Abuse and Neglect Screening | Clinical Indicators | `patient_fearful` | Patient appears fearful of caregiver | `checkbox` |  |  |  |
| Elder Abuse and Neglect Screening | Clinical Indicators | `inappropriate_medication` | Inappropriate medication management (over/under-dosed) | `checkbox` |  |  |  |
| Elder Abuse and Neglect Screening | Validated Screening Tool | `easi_score` | EASI Score (0-6; ≥2 = positive screen) | `number` |  |  |  |
| Elder Abuse and Neglect Screening | Validated Screening Tool | `screen_positive` | Screen positive (EASI ≥2 or clinical concern) | `checkbox` |  |  |  |
| Elder Abuse and Neglect Screening | Actions Taken | `private_interview_done` | Private interview with patient conducted (without caregiver) | `checkbox` |  |  |  |
| Elder Abuse and Neglect Screening | Actions Taken | `social_work_consult` | Social work consulted | `checkbox` |  |  |  |
| Elder Abuse and Neglect Screening | Actions Taken | `aps_reported` | Adult Protective Services (APS) report filed | `checkbox` |  |  |  |
| Elder Abuse and Neglect Screening | Actions Taken | `mandatory_reporter_obligations_met` | Mandatory reporting obligations met (per state law) | `checkbox` |  |  |  |
| Elder Abuse and Neglect Screening | Actions Taken | `safety_plan` | Safety Plan / Notes | `textarea` |  |  |  |

### Falls Prevention — `geriatrics_falls_prevention_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Falls Prevention: Multifactorial Risk Assessment, Medication Review, Exercise, and Environmental Modification | Falls Risk Assessment, History, and Clinical Evaluation | `falls_class` | Falls Epidemiology: 30% Adults Above 65 Fall Annually; 50% Above 80; Most Common Cause Injury Death Elderly; History: Number Falls Past Year; Circumstances Fall; Injury; Fear of Falling; Gait Balance Assessment: Timed Up and Go TUG Above 12s High Risk; Berg Balance Scale 0-56 Below 45 Fall Risk; Gait Speed Below 0.8m/s Poor Prognosis; 30-Second Chair Stand; 4-Stage Balance Test; Orthostatic Hypotension 20/10 Drop Within 3M Standing; POMA Tinetti 0-28; Medications Contributing: Benzodiazepines Opioids Antipsychotics Antihypertensives Antiepileptics Alpha-Blockers; Polypharmacy Above 4; FRAX 10-Year Hip Fracture Probability; Vision Cataracts Glaucoma; Foot Care | `select` |  |  |  |
| Falls Prevention: Multifactorial Risk Assessment, Medication Review, Exercise, and Environmental Modification | Falls Risk Assessment, History, and Clinical Evaluation | `falls_treatment` | Falls Prevention Interventions: Medication Review Deprescribe Benzodiazepines Opioids Antipsychotics; Beers Criteria High-Risk Medications PIMs; STOPP START Tool; Vitamin D Supplementation 800-1000 IU QD; Calcium 1200mg/day Diet Plus Supplement; Exercise Tai Chi 3x/Week 60min Otago Home Exercise Program; Balance Training Progressive Resistance; Physical Therapy; Bisphosphonate Alendronate 70mg QW Risedronate Zoledronic Acid FRAX-Guided; FRAX Calculation WHO 10-Year Hip Major Fracture Risk; Home Modification Grab Bars Bath Night Lights Remove Rugs Non-Slip; Vision Correction Cataracts Surgery; Podiatry Foot Care; Hearing Aid Cochlear; Hip Protectors; Orthostatic Hypotension Hydration Compression Stockings Midodrine Fludrocortisone -- FALLS PREVENTION INTERVENTIONS: MEDICATION REVIEW [HIGH-IMPACT; REVIEW ALL MEDICATIONS]: BEERS CRITERIA 2023 [AMERICAN GERIATRICS SOCIETY; PIMS [POTENTIALLY INAPPROPRIATE MEDICATIONS] IN ELDERLY]: HIGH-RISK FOR FALLS: BENZODIAZEPINES [ALL: DIAZEPAM; LORAZEPAM; TEMAZEPAM; CLONAZEPAM; Z-DRUGS [ZOLPIDEM; ZALEPLON; ESZOPICLONE]; STRONG AVOID REGARDLESS DOSE]; OPIOIDS [ALL OLDER ADULTS HIGH FALL RISK; DOSE-DEPENDENT]; ANTIPSYCHOTICS [TYPICAL+ATYPICAL; ORTHOSTASIS SEDATION]; FIRST-GEN ANTIHISTAMINES [DIPHENHYDRAMINE BENADRYL; SEDATING ANTICHOLINERGIC]; ALPHA-1 BLOCKERS [TAMSULOSIN TERAZOSIN; ORTHOSTASIS]; TRICYCLICS [AMITRIPTYLINE NORTRIPTYLINE; ANTICHOLINERGIC ORTHOSTASIS]; ANTIEPILEPTICS [GABAPENTIN PREGABALIN; SEDATION DIZZINESS]; STOPP/START TOOL [EUROPEAN VALIDATED ALTERNATIVE BEERS; STOPP = INAPPROPRIATE; START = MISSING BENEFICIAL]; DEPRESCRIBING [SLOW TAPER BENZO; BENZO WITHDRAWAL SEIZURES; OPIOID TAPER SCHEDULE; CONSULT PHARMACIST]; VITAMIN D AND CALCIUM: VITAMIN D [800-1000 IU/DAY; REDUCE FALLS 19% TRIALS; REDUCE FRACTURE; TARGET 25-OH-D ABOVE 20-30 ng/mL; DEFICIENCY EXTREMELY COMMON ELDERLY]; CALCIUM [1200 mg/DAY TOTAL; DIET PREFERRED [DAIRY; FORTIFIED]; SUPPLEMENT IF INSUFFICIENT; CARBONATE WITH FOOD; CITRATE WITHOUT FOOD]; EXERCISE [MOST EFFECTIVE SINGLE INTERVENTION]: TAI CHI [3X/WEEK SESSIONS; BALANCE IMPROVEMENT; RCT EVIDENCE FALL REDUCTION 48%; MOST STUDIED; GROUP CLASS OR HOME VIDEO; SUSTAINED MOTIVATION]; OTAGO EXERCISE PROGRAM [HOME-BASED; PHYSIOTHERAPIST-PRESCRIBED; STRENGTHENING+BALANCE; 4-6 INITIAL VISITS+HOME; REDUCES FALLS 35%]; PROGRESSIVE RESISTANCE TRAINING [LOWER EXTREMITY STRENGTHENING; ANKLE KNEE HIP]; BALANCE TRAINING [ROMBERG; TANDEM; SINGLE LEG; UNSTABLE SURFACE]; PHYSICAL THERAPY [INDIVIDUALIZED ASSESSMENT+PROGRAM; WALKING AIDS CANE WALKER; PROPER FIT]; OSTEOPOROSIS MANAGEMENT [FRAX CALCULATOR WHO; 10-YEAR PROBABILITY HIP+MAJOR FRACTURE; PHARMACOTHERAPY THRESHOLD VARIES]; BISPHOSPHONATES [MOST COMMON FIRST-LINE]: ALENDRONATE [FOSAMAX; 70 mg PO QW; TAKE FASTING 30 MIN BEFORE FOOD+WATER ONLY; STAY UPRIGHT 30 MIN; ESOPHAGEAL ULCER RISK]; RISEDRONATE [ACTONEL; 35 mg QW OR 150 mg QM]; ZOLEDRONIC ACID [RECLAST; 5 mg IV ANNUAL; CONVENIENT ADHERENCE; ACUTE PHASE REACTION FIRST DOSE]; DENOSUMAB [PROLIA; RANK-L INHIBITOR; 60 mg SQ Q6M; REBOUND FRACTURE RISK ON DISCONTINUATION; PREFER NOT TO STOP]; ROMOSOZUMAB [EVENITY; ANABOLIC+ANTI-RESORPTIVE; 210 mg SQ QM x12; CARDIOVASCULAR RISK CAUTION]; TERIPARATIDE [FORTEO; PTH ANALOG; ANABOLIC; SEVERE OSTEOPOROSIS; 20 mcg SQ QD; 2Y LIMIT]; HOME SAFETY MODIFICATION [OCCUPATIONAL THERAPY HOME VISIT]: INSTALL GRAB BARS [TOILET; SHOWER; BATHTUB]; ADEQUATE LIGHTING [NIGHTLIGHTS BEDROOM BATHROOM HALLWAY]; REMOVE HAZARDS [THROW RUGS CLUTTER CORDS]; NON-SLIP MATS SHOWER STRIPS; RAISE TOILET SEAT; HAND RAILS STAIRWAYS BOTH SIDES; VISION [CATARACTS SURGERY REDUCES FALLS; BIFOCAL AVOID OUTSIDE STAIRS; SINGLE VISION DISTANCE GLASSES OUTDOOR]; HEARING [AID IF DEFICIT]; FOOTWEAR [FIRM RUBBER SOLES; SECURE HEEL; LOW FLAT; AVOID SLIPPERS]; HIP PROTECTORS [REDUCES HIP FRACTURE 60% IF WORN; COMPLIANCE POOR; NURSING HOME POPULATIONS] | `text` |  |  |  |
| Falls Prevention: Multifactorial Risk Assessment, Medication Review, Exercise, and Environmental Modification | Falls Prevention Management Notes | `falls_mgmt_notes` | Falls Prevention Notes and Geriatrics/Physical Therapy/Occupational Therapy Home Assessment/Pharmacy Medication Review/Endocrinology Osteoporosis/Ophthalmology/Audiology/Podiatry/Neurology/Primary Care/Social Work Coordination | `textarea` |  |  |  |

### Falls Risk — `falls_risk_cf`

Screen: 1 page(s) · 4 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Falls Risk Assessment | Fall History | `falls_12m` | Falls in Past 12 Months | `number` |  |  |  |
| Falls Risk Assessment | Fall History | `injurious_fall` | Injurious fall (fracture, laceration, head injury) | `checkbox` |  |  |  |
| Falls Risk Assessment | Fall History | `circumstances` | Circumstances of Most Recent Fall | `textarea` |  |  |  |
| Falls Risk Assessment | Risk Factors | `orthostatic_hypotension` | Orthostatic hypotension confirmed (≥20 mmHg SBP drop) | `checkbox` |  |  |  |
| Falls Risk Assessment | Risk Factors | `vision_impairment` | Vision impairment | `checkbox` |  |  |  |
| Falls Risk Assessment | Risk Factors | `lower_extremity_weakness` | Lower extremity weakness | `checkbox` |  |  |  |
| Falls Risk Assessment | Risk Factors | `neuropathy` | Peripheral neuropathy | `checkbox` |  |  |  |
| Falls Risk Assessment | Risk Factors | `cognitive_impairment` | Cognitive impairment | `checkbox` |  |  |  |
| Falls Risk Assessment | Risk Factors | `psychotropic_meds` | Psychotropic medications (benzodiazepines, antipsychotics, opioids) | `checkbox` |  |  |  |
| Falls Risk Assessment | Risk Factors | `antihypertensives` | Antihypertensives contributing | `checkbox` |  |  |  |
| Falls Risk Assessment | Risk Factors | `home_hazards` | Home environment hazards identified | `checkbox` |  |  |  |
| Falls Risk Assessment | Functional Assessments | `tug` | TUG Test (seconds; >12 = high risk) | `number` |  |  |  |
| Falls Risk Assessment | Functional Assessments | `30s_cst` | 30-Second Chair Stand Test (reps) | `number` |  |  |  |
| Falls Risk Assessment | Functional Assessments | `sppb` | Short Physical Performance Battery (SPPB, 0-12) | `number` |  |  |  |
| Falls Risk Assessment | Fall Prevention Interventions | `pt_balance` | PT for balance and strength training ordered | `checkbox` |  |  |  |
| Falls Risk Assessment | Fall Prevention Interventions | `med_review` | Medication reconciliation / deprescribing done | `checkbox` |  |  |  |
| Falls Risk Assessment | Fall Prevention Interventions | `vitamin_d` | Vitamin D supplementation (≥800 IU/day) | `checkbox` |  |  |  |
| Falls Risk Assessment | Fall Prevention Interventions | `home_safety_eval` | Home safety evaluation ordered (OT) | `checkbox` |  |  |  |
| Falls Risk Assessment | Fall Prevention Interventions | `hip_protectors` | Hip protectors offered | `checkbox` |  |  |  |
| Falls Risk Assessment | Fall Prevention Interventions | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Falls Risk Assessment — `geriatrics_falls_risk_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Falls Risk Assessment and Prevention | Fall History | `falls_in_past_year` | Falls in the Past 12 Months | `select` |  |  |  |
| Falls Risk Assessment and Prevention | Fall History | `falls_near_miss` | Near Misses or Unsteadiness | `select` |  |  |  |
| Falls Risk Assessment and Prevention | Fall History | `falls_injury` | Injury from Most Recent Fall | `select` |  |  |  |
| Falls Risk Assessment and Prevention | Fall History | `falls_circumstances` | Fall Circumstances (tripping on object, reaching overhead, at night, from standing, positional) | `textarea` |  |  |  |
| Falls Risk Assessment and Prevention | Functional Assessment Tools | `falls_tug_result` | Timed Up and Go (TUG) Test Result | `select` |  |  |  |
| Falls Risk Assessment and Prevention | Functional Assessment Tools | `falls_gait_observation` | Gait Observation | `select` |  |  |  |
| Falls Risk Assessment and Prevention | Functional Assessment Tools | `falls_4stage_balance` | 4-Stage Balance Test Result | `select` |  |  |  |
| Falls Risk Assessment and Prevention | Functional Assessment Tools | `falls_orthostatic` | Orthostatic Hypotension Assessment | `select` |  |  |  |
| Falls Risk Assessment and Prevention | Modifiable Risk Factors | `falls_polypharmacy` | Polypharmacy and High-Risk Medications | `select` |  |  |  |
| Falls Risk Assessment and Prevention | Modifiable Risk Factors | `falls_vision` | Vision Status | `select` |  |  |  |
| Falls Risk Assessment and Prevention | Modifiable Risk Factors | `falls_vitamin_d` | Vitamin D Status | `select` |  |  |  |
| Falls Risk Assessment and Prevention | Modifiable Risk Factors | `falls_footwear` | Footwear Assessment | `select` |  |  |  |
| Falls Risk Assessment and Prevention | Modifiable Risk Factors | `falls_home_safety` | Home Safety Evaluation | `select` |  |  |  |
| Falls Risk Assessment and Prevention | Modifiable Risk Factors | `falls_physical_therapy` | Physical Therapy / Exercise Program | `select` |  |  |  |
| Falls Risk Assessment and Prevention | Modifiable Risk Factors | `falls_notes` | Falls Risk Assessment Notes and Individualized Prevention Plan | `textarea` |  |  |  |

### Falls and Osteoporosis — `geriatrics_falls_osteoporosis_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Falls Prevention and Osteoporosis Management in Older Adults | Falls Risk Assessment | `falls_history` | Fall History and Risk Stratification | `select` |  |  |  |
| Falls Prevention and Osteoporosis Management in Older Adults | Falls Risk Assessment | `falls_medications` | High-Fall-Risk Medications (Beers Criteria) | `select` |  |  |  |
| Falls Prevention and Osteoporosis Management in Older Adults | Falls Risk Assessment | `falls_physical` | Physical Function Assessment — TUG (Timed Up and Go): have patient rise from chair, walk 3 meters, return, sit; above 12s: high fall risk; above 20s: needs full assistance; 30-Second Chair Stand Test (CST): number of stands from chair without arms in 30s; below age-norm: impaired lower extremity strength; Berg Balance Scale (14 items, 0-56; below 45 = fall risk); gait speed (4-meter walk test; below 0.8 m/s = slow); grip strength (handheld dynamometer; below 27 kg men, 16 kg women: probable sarcopenia by EWGSOP2) | `text` |  |  |  |
| Falls Prevention and Osteoporosis Management in Older Adults | Osteoporosis Diagnosis and Treatment Decision | `osteoporosis_dexa` | DXA Findings and T-Score Classification | `select` |  |  |  |
| Falls Prevention and Osteoporosis Management in Older Adults | Osteoporosis Diagnosis and Treatment Decision | `osteoporosis_frax` | FRAX Score and Secondary Causes — FRAX 10-year probability of major osteoporotic fracture (MOF) and hip fracture; at or above 20% MOF or at or above 3% hip: treatment threshold; secondary causes: hyperparathyroidism (PTH, calcium); hyperthyroidism (TSH); vitamin D deficiency (25-OH-D); MGUS/myeloma (SPEP); celiac disease (tTG-IgA; malabsorption); Cushings (24h urine cortisol if suspected); hypogonadism (testosterone/estradiol); inflammatory disease on steroids; medications: chronic GCS, anticonvulsants (enzyme-inducing), heparin, aromatase inhibitors, GnRH agonists, PPIs (weak association) | `text` |  |  |  |
| Falls Prevention and Osteoporosis Management in Older Adults | Osteoporosis Diagnosis and Treatment Decision | `osteoporosis_labs` | Bone Turnover Markers (BTM) — CTX-1 (C-terminal telopeptide of type I collagen): resorption marker; P1NP (procollagen type 1 N-terminal propeptide): formation marker; baseline before therapy; BTMs guide treatment response and adherence monitoring; on bisphosphonates: CTX falls 50-80% within 3-6 months (confirm adherence/absorption if not); on teriparatide: P1NP rises within 1-3 months | `text` |  |  |  |
| Falls Prevention and Osteoporosis Management in Older Adults | Pharmacotherapy for Osteoporosis | `osteoporosis_bisphosphonate` | Bisphosphonates (First-Line Antiresorptive) | `select` |  |  |  |
| Falls Prevention and Osteoporosis Management in Older Adults | Pharmacotherapy for Osteoporosis | `osteoporosis_denosumab` | Denosumab (Prolia) — Anti-RANKL | `select` |  |  |  |
| Falls Prevention and Osteoporosis Management in Older Adults | Pharmacotherapy for Osteoporosis | `osteoporosis_anabolic` | Anabolic Therapy for Very High-Risk Osteoporosis | `select` |  |  |  |
| Falls Prevention and Osteoporosis Management in Older Adults | Pharmacotherapy for Osteoporosis | `osteoporosis_holiday` | Bisphosphonate Drug Holiday | `select` |  |  |  |
| Falls Prevention and Osteoporosis Management in Older Adults | Pharmacotherapy for Osteoporosis | `osteoporosis_notes` | Falls and Osteoporosis Notes and Geriatrics/Physical Therapy/Endocrinology/Orthopedics Coordination | `textarea` |  |  |  |

### Frailty and Falls — `geriatrics_frailty_falls_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Frailty and Falls Prevention — Assessment, Polypharmacy, and Multidisciplinary Intervention | Frailty Assessment, Sarcopenia, and Falls Risk | `frail_f1` | Frailty Falls Evaluation: FRAILTY DEFINITION (VULNERABILITY PHYSIOLOGIC STRESSORS; REDUCED RESERVE CAPACITY; DISABILITY HOSPITALIZATION DEATH RISK; DISTINCT FROM DISABILITY COMORBIDITY THOUGH OVERLAP; FRIED PHENOTYPE CRITERIA (1 WEIGHT LOSS UNINTENTIONAL OVER 10 LBS YEAR; 2 EXHAUSTION SELF-REPORT; 3 WEAKNESS GRIP STRENGTH BY SEX BMI; 4 SLOWNESS GAIT SPEED UNDER 0.8 m/s; 5 LOW PHYSICAL ACTIVITY; PRE-FRAIL 1-2 CRITERIA; FRAIL 3 OR MORE CRITERIA; FRAILTY INDEX (ACCUMULATION DEFICITS; OVER 36 DEFICITS POSSIBLE; RATIO DEFICITS TO TOTAL; OVER 0.25 FRAIL; MORE COMPREHENSIVE; SARCOPENIA (MUSCLE MASS STRENGTH FUNCTION; SARCOPENIA CRITERIA EWGSOP2: LOW GRIP STRENGTH PRIMARY; PLUS LOW MUSCLE MASS; PLUS IMPAIRED PHYSICAL PERFORMANCE; DEXA SCAN MUSCLE MASS; BIA BIOIMPEDANCE; CT CROSS-SECTIONAL; SHORT PHYSICAL PERFORMANCE BATTERY SPPB: UNDER 9 ABNORMAL; CAUSES SARCOPENIA: AGING ATROPHY; DISUSE INACTIVITY; MALNUTRITION PROTEIN; INFLAMMATION CACHEXIA; FALLS EPIDEMIOLOGY (30 pct ADULTS OVER 65 FALL ANNUALLY; 50 pct OVER 80; LEADING CAUSE INJURY DEATH OLDER ADULTS; HIP FRACTURE 1-YEAR MORTALITY 20-30 pct; INTRINSIC RISK FACTORS: AGE WEAKNESS GAIT BALANCE; VISION COGNITIVE IMPAIRMENT; MEDICATIONS; EXTRINSIC: HOME HAZARDS LIGHTING; FUNCTIONAL ASSESSMENT (ACTIVITIES DAILY LIVING ADL; INSTRUMENTAL ADL IADL; WALKING AID USE; GAIT SPEED TIMED UP GO TUG; TINETTI BALANCE GAIT TOOL; 30-SECOND CHAIR STAND; FUNCTIONAL REACH; ORTHOSTATIC VITAL SIGNS) | `text` |  |  |  |
| Frailty and Falls Prevention — Assessment, Polypharmacy, and Multidisciplinary Intervention | Frailty Assessment, Sarcopenia, and Falls Risk | `frail_f2` | Comprehensive Geriatric Assessment and Polypharmacy | `select` |  |  |  |

### Frailty and Polypharmacy — `geriatrics_frailty_polypharmacy_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Geriatric Assessment | Frailty Falls and Polypharmacy | `ger_f1` | FRAILTY (Fried): Weight Loss; Exhaustion; Low Activity; Slowness; Weakness; Frail 3+; Pre-Frail 1-2; FALLS (STEADI): Screen All Over 65; RISK: Prior Falls; Sedatives; Orthostatic HTN; Vision Problems; INTERVENTION: Vit D 800-1000 IU; Balance Exercise Tai Chi; Home Safety; Review Meds; DELIRIUM (CAM): Acute Onset + Inattention + Disorganized Thinking or Altered Consciousness; Non-Pharm First; Remove Offenders; Haloperidol 0.5-1 mg Only Severe; MoCA Cognitive Screen; MCI Under 26; Dementia Under 18 | `text` |  |  |  |
| Geriatric Assessment | Frailty Falls and Polypharmacy | `ger_f2` | Beers Criteria and Deprescribing | `select` |  |  |  |

### Geriatric Assessment — `geriatric_assessment_cf`

Screen: 1 page(s) · 4 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Comprehensive Geriatric Assessment | Functional Status | `adl_score` | ADL Score (Katz, 0-6; 6=independent) | `number` |  |  |  |
| Comprehensive Geriatric Assessment | Functional Status | `iadl_score` | IADL Score (Lawton, 0-8; 8=independent) | `number` |  |  |  |
| Comprehensive Geriatric Assessment | Functional Status | `tug_seconds` | Timed Up and Go (seconds) | `number` |  |  |  |
| Comprehensive Geriatric Assessment | Functional Status | `falls_past_year` | Falls in Past 12 Months | `number` |  |  |  |
| Comprehensive Geriatric Assessment | Functional Status | `gait_aid` | Assistive Device | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Cognition and Mood | `moca_mmse` | MoCA or MMSE Score | `number` |  |  |  |
| Comprehensive Geriatric Assessment | Cognition and Mood | `cognitive_screen` | Tool Used | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Cognition and Mood | `delirium_history` | Prior episodes of delirium | `checkbox` |  |  |  |
| Comprehensive Geriatric Assessment | Cognition and Mood | `gds_score` | GDS-15 Depression Score | `number` |  |  |  |
| Comprehensive Geriatric Assessment | Cognition and Mood | `depression_positive` | Depression screen positive (GDS ≥6 / PHQ-9 ≥10) | `checkbox` |  |  |  |
| Comprehensive Geriatric Assessment | Geriatric Syndromes | `frailty_score` | Frailty (Clinical Frailty Scale) | `select` |  |  |  |
| Comprehensive Geriatric Assessment | Geriatric Syndromes | `polypharmacy` | Polypharmacy (≥5 medications) | `checkbox` |  |  |  |
| Comprehensive Geriatric Assessment | Geriatric Syndromes | `beer_criteria_meds` | Beer Criteria medications present (requires review) | `checkbox` |  |  |  |
| Comprehensive Geriatric Assessment | Geriatric Syndromes | `malnutrition_risk` | Malnutrition risk (MNA-SF <12 or unintentional weight loss) | `checkbox` |  |  |  |
| Comprehensive Geriatric Assessment | Geriatric Syndromes | `incontinence` | Urinary incontinence | `checkbox` |  |  |  |
| Comprehensive Geriatric Assessment | Geriatric Syndromes | `social_isolation` | Social isolation / loneliness identified | `checkbox` |  |  |  |
| Comprehensive Geriatric Assessment | Care Planning | `advance_directive` | Advance directive on file | `checkbox` |  |  |  |
| Comprehensive Geriatric Assessment | Care Planning | `hcp_designated` | Healthcare proxy / power of attorney designated | `checkbox` |  |  |  |
| Comprehensive Geriatric Assessment | Care Planning | `caregiver_burden` | Caregiver burden assessed | `checkbox` |  |  |  |
| Comprehensive Geriatric Assessment | Care Planning | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Geriatric Frailty Assessment — `geriatric_frailty_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Geriatric Frailty Assessment Visit | Patient & Frailty Screening | `patientId` | Patient | `typeahead` | Y |  |  |
| Geriatric Frailty Assessment Visit | Patient & Frailty Screening | `visitDate` | Visit Date | `date` | Y |  |  |
| Geriatric Frailty Assessment Visit | Patient & Frailty Screening | `provider` | Geriatrician / PCP | `typeahead` | Y |  |  |
| Geriatric Frailty Assessment Visit | Patient & Frailty Screening | `frailtyScore` | Clinical Frailty Scale (CFS) | `select` | Y |  |  |
| Geriatric Frailty Assessment Visit | Patient & Frailty Screening | `friedCriteria` | Fried Frailty Phenotype (Frailty Criteria Met) | `select` | Y |  |  |
| Geriatric Frailty Assessment Visit | Functional Assessment | `tug` | Timed Up and Go (TUG) Test (seconds; > 12s = fall risk) | `number` |  |  |  |
| Geriatric Frailty Assessment Visit | Functional Assessment | `gripStrength` | Grip Strength (kg; < 27 male / < 16 female = weakness) | `number` |  |  |  |
| Geriatric Frailty Assessment Visit | Functional Assessment | `gaitSpeed` | Gait Speed (m/s; < 0.8 = frailty criteria) | `number` |  |  |  |
| Geriatric Frailty Assessment Visit | Functional Assessment | `moca` | MoCA (Cognitive Screen; < 26 = abnormal) | `number` |  |  |  |
| Geriatric Frailty Assessment Visit | Functional Assessment | `phq` | PHQ-9 (Depression Screen) | `number` |  |  |  |
| Geriatric Frailty Assessment Visit | Functional Assessment | `functionalAssessment` | Comprehensive Functional Assessment | `textarea` | Y |  |  |
| Geriatric Frailty Assessment Visit | Functional Assessment | `beersCriteria` | Beers Criteria / Polypharmacy Review | `textarea` | Y |  |  |
| Geriatric Frailty Assessment Visit | Frailty Management Plan | `plan` | Assessment & Frailty Intervention Plan | `textarea` | Y |  |  |

### Lewy Body Dementia — `geriatrics_lewy_body_dementia_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| DLB/LBD — Diagnosis, Core Features, Biomarkers, Treatment, and Safety Alerts | DLB McKeith 2017 Criteria and Biomarkers | `dlb_overview` | McKeith 2017 Core Features (Fluctuation, Visual Hallucinations, REM Sleep Behavior Disorder, Parkinsonism), Supportive/Indicative Biomarkers, and Lewy Body Pathology (DEMENTIA WITH LEWY BODIES (DLB): EPIDEMIOLOGY: 2ND MOST COMMON NEURODEGENERATIVE DEMENTIA (after AD); 10-15% of dementia; often unrecognized/misdiagnosed as AD; MALE PREDOMINANCE; NEUROPATHOLOGY: ALPHA-SYNUCLEIN AGGREGATES (LEWY BODIES + LEWY NEURITES): BRAINSTEM (substantia nigra; locus ceruleus; dorsal vagal nucleus); LIMBIC (amygdala; entorhinal); NEOCORTEX; LEWY BODY DISEASE SPECTRUM: PD; PD DEMENTIA (PDD); DLB; DLB vs. PDD: TEMPORAL RULE: DLB = dementia BEFORE or within 1 year of parkinsonism; PDD = parkinsonism >1 year before dementia; McKEITH 2017 CRITERIA (McKeith et al. Neurology 2017): ESSENTIAL: PROGRESSIVE COGNITIVE DECLINE sufficient to interfere with function; CORE FEATURES (4): 1) FLUCTUATING COGNITION: pronounced variation in attention + alertness; episodes of confusion alternating with lucidity; MINUTES TO HOURS fluctuations; 2) RECURRENT VISUAL HALLUCINATIONS: WELL-FORMED; DETAILED; USUALLY PEOPLE OR ANIMALS; early and persistent; 3) REM SLEEP BEHAVIOR DISORDER (RBD): acting out dreams; speaking; hitting during REM sleep; often PRECEDES cognitive decline by years; confirmed by polysomnography OR history; 4) SPONTANEOUS PARKINSONISM: bradykinesia; tremor; rigidity; onset AFTER cognitive symptoms (vs. PDD); PROBABLE DLB: 2+ CORE FEATURES; OR 1 CORE + 1 INDICATIVE BIOMARKER; POSSIBLE DLB: 1 CORE FEATURE; OR 1+ INDICATIVE BIOMARKER without core features; INDICATIVE BIOMARKERS: DaTSCAN (123-I-ioflupane SPECT): REDUCED DOPAMINE TRANSPORTER in CAUDATE + PUTAMEN; most sensitive biomarker; FDA 2011; MYOCARDIAL 123-I-MIBG SCINTIGRAPHY: reduced cardiac sympathetic innervation; not widely available US; PSG-CONFIRMED RBD; SUPPORTIVE BIOMARKERS: CT/MRI: RELATIVE PRESERVATION of MEDIAL TEMPORAL LOBE (vs. AD); EEG: posterior SLOW WAVES; temporal theta; METABOLIC: PET FDG: POSTERIOR OCCIPITAL HYPOMETABOLISM; supporting biomarker; amyloid PET: often positive (AD co-pathology common); ALPHA-SYNUCLEIN SEED AMPLIFICATION ASSAY (SAA): CSF; skin biopsy; olfactory mucosa; emerging; BIOFLUID: CSF ALPHA-SYNUCLEIN AGGREGATION; phospho-tau 181 and other AD markers (co-pathology) | `text` |  |  |  |
| DLB/LBD — Diagnosis, Core Features, Biomarkers, Treatment, and Safety Alerts | DLB McKeith 2017 Criteria and Biomarkers | `dlb_vs_ad` | DLB vs. AD Clinical Differentiation, DLB vs. PD Dementia 1-Year Rule, and DLB Cognitive Profile (Posterior Cortical Dysfunction) | `select` |  |  |  |
| DLB/LBD — Diagnosis, Core Features, Biomarkers, Treatment, and Safety Alerts | DLB Treatment and Safety Alerts | `dlb_medications` | Rivastigmine (EXPRESS Trial DLB), Memantine, Carbidopa-Levodopa for DLB Parkinsonism, and NEUROLEPTIC SENSITIVITY WARNING (DLBW-1: ANTIPSYCHOTIC CONTRAINDICATED) (DLB PHARMACOLOGICAL TREATMENT: CHOLINESTERASE INHIBITORS: RIVASTIGMINE: EXPRESS TRIAL (McKeith et al.): rivastigmine vs. placebo in DLB; significant improvement in attention + speed; ADL benefit; RECOMMENDED FIRST-LINE for DLB; DOSE: oral 1.5 mg BID titrate to 6 mg BID; PATCH: 4.6 mg/24h to 9.5 mg/24h; CHOLINERGIC SIDE EFFECTS: nausea; vomiting; diarrhea; DONEPEZIL: benefit in DLB (benefit in PDD Aricept study); 5-10 mg/day; GALANTAMINE: limited DLB-specific data; MEMANTINE: add-on in moderate-severe DLB (limited DLB-specific RCT data); 10 mg BID; generally well tolerated; PARKINSONISM TREATMENT: L-DOPA (CARBIDOPA-LEVODOPA): USE LOWEST EFFECTIVE DOSE; START LOW TITRATE SLOW; response often less robust than PD; risk of WORSENING PSYCHOSIS or CONFUSION; START: 25/100 mg TID with food; DOPAMINE AGONISTS: AVOID (higher risk confusion + hallucinations than L-dopa); MONOAMINE OXIDASE B (MAO-B) INHIBITORS: limited data; potential serotonin syndrome risk with antidepressants; RBD TREATMENT: CLONAZEPAM 0.25-0.5 mg at bedtime (most commonly used); MELATONIN 3-12 mg at bedtime (preferred in older patients; safer); ORTHOSTATIC HYPOTENSION: NON-PHARMACOLOGICAL: slow position change; compression stockings; head-of-bed elevation; FLUDROCORTISONE 0.1-0.2 mg/day; MIDODRINE (alpha-1 agonist; avoid supine hypertension); DROXIDOPA (Northera); VISUAL HALLUCINATIONS: REDUCE ANTICHOLINERGICS; OPTIMIZE SLEEP; REASSURANCE if non-threatening; cholinesterase inhibitor; QUETIAPINE (low dose; off-label; not evidence-based; use with EXTREME CAUTION); PIMAVANSERIN (Nuplazid): 5HT-2A inverse agonist; FDA for PD psychosis (data in DLB limited); DEPRESSION: SSRIs generally safe; tricyclics and paroxetine AVOID (anticholinergic); ANXIETY: SSRIs; benzodiazepines with caution | `text` |  |  |  |
| DLB/LBD — Diagnosis, Core Features, Biomarkers, Treatment, and Safety Alerts | DLB Treatment and Safety Alerts | `neuroleptic_warning` | NEUROLEPTIC SENSITIVITY REACTION: Antipsychotic Contraindication in DLB, Severe Reactions (Rigidity, Decreased LOC, Autonomic Instability), and Recommended Safe vs. Unsafe Agents | `select` |  |  |  |

### Medication Review — `medication_review_geriatric_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Geriatric Medication Review | Medication Burden | `total_medications` | Total Number of Medications | `number` |  |  |  |
| Geriatric Medication Review | Medication Burden | `polypharmacy` | Polypharmacy (≥5 medications) | `checkbox` |  |  |  |
| Geriatric Medication Review | Medication Burden | `hyperpolypharmacy` | Hyperpolypharmacy (≥10 medications) | `checkbox` |  |  |  |
| Geriatric Medication Review | Potentially Inappropriate Medications (Beers Criteria) | `antihistamine_1st_gen` | 1st-gen antihistamines (diphenhydramine, hydroxyzine) | `checkbox` |  |  |  |
| Geriatric Medication Review | Potentially Inappropriate Medications (Beers Criteria) | `benzodiazepine` | Benzodiazepines (all types) | `checkbox` |  |  |  |
| Geriatric Medication Review | Potentially Inappropriate Medications (Beers Criteria) | `z_drugs` | Non-BZD hypnotics (zolpidem, eszopiclone) | `checkbox` |  |  |  |
| Geriatric Medication Review | Potentially Inappropriate Medications (Beers Criteria) | `anticholinergic` | Anticholinergics (bladder relaxants, TCAs, antipsychotics) | `checkbox` |  |  |  |
| Geriatric Medication Review | Potentially Inappropriate Medications (Beers Criteria) | `antipsychotic` | Antipsychotics for behavioral symptoms in dementia | `checkbox` |  |  |  |
| Geriatric Medication Review | Potentially Inappropriate Medications (Beers Criteria) | `nsaids_chronic` | Chronic NSAIDs (GI/renal risk) | `checkbox` |  |  |  |
| Geriatric Medication Review | Potentially Inappropriate Medications (Beers Criteria) | `sulfonylureas` | Sulfonylureas (hypoglycemia risk: glibenclamide/chlorpropamide) | `checkbox` |  |  |  |
| Geriatric Medication Review | Potentially Inappropriate Medications (Beers Criteria) | `muscle_relaxants` | Muscle relaxants (cyclobenzaprine, methocarbamol) | `checkbox` |  |  |  |
| Geriatric Medication Review | Deprescribing Actions | `meds_discontinued` | Medications Discontinued / Dose-Reduced This Visit | `textarea` |  |  |  |
| Geriatric Medication Review | Deprescribing Actions | `patient_agreement` | Patient / caregiver agreement obtained for medication changes | `checkbox` |  |  |  |
| Geriatric Medication Review | Deprescribing Actions | `notes` | Plan and Follow-up | `textarea` |  |  |  |

### Memory Clinic — `geriatrics_memory_clinic_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Memory Clinic — Cognitive Impairment Evaluation | Cognitive History | `onset` | Cognitive Decline Onset | `select` |  |  |  |
| Memory Clinic — Cognitive Impairment Evaluation | Cognitive History | `informant_report` | Informant Report (caregiver description: which domains affected first, functional impact at home) | `textarea` |  |  |  |
| Memory Clinic — Cognitive Impairment Evaluation | Cognitive History | `reversible_causes_checked` | Reversible causes evaluated (thyroid, B12, folate, RPR, CBC, metabolic panel, head imaging — DEMENTIAS mnemonic) | `checkbox` |  |  |  |
| Memory Clinic — Cognitive Impairment Evaluation | Cognitive Testing | `moca_total` | MoCA Total Score | `number` |  |  |  |
| Memory Clinic — Cognitive Impairment Evaluation | Cognitive Testing | `moca_domains` | MoCA Domain Breakdown (visuospatial, naming, memory, attention, language, abstraction, orientation) | `textarea` |  |  |  |
| Memory Clinic — Cognitive Impairment Evaluation | Cognitive Testing | `clock_draw` | Clock Drawing Test | `select` |  |  |  |
| Memory Clinic — Cognitive Impairment Evaluation | Cognitive Testing | `trails_b` | Trails B Time in Seconds (>180s = significant executive impairment; >300s = stop if unable to complete) | `text` |  |  |  |
| Memory Clinic — Cognitive Impairment Evaluation | Diagnostic Workup | `neuroimaging` | Brain Imaging | `select` |  |  |  |
| Memory Clinic — Cognitive Impairment Evaluation | Diagnostic Workup | `neuropsychological_testing` | Formal neuropsychological testing ordered (complex cases: prior high function, atypical presentation, legal/driving determination) | `checkbox` |  |  |  |
| Memory Clinic — Cognitive Impairment Evaluation | Diagnostic Workup | `biomarkers` | AD Biomarkers (CSF: A-beta42/40, p-tau, t-tau; Amyloid PET; blood-based: p-tau 217, GFAP — if pursuing disease-modifying therapy) | `textarea` |  |  |  |

### Polypharmacy / Deprescribing — `geriatrics_polypharmacy_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Polypharmacy — Beers Criteria, STOPP/START, and Deprescribing | Polypharmacy Screening Tools | `beers_criteria` | Beers Criteria 2023 (American Geriatrics Society; medications potentially inappropriate for older adults (>=65 years); AVOID in all older adults: benzodiazepines and Z-drugs (all types; falls, cognitive impairment, hip fracture); first-generation antihistamines (diphenhydramine, hydroxyzine; anticholinergic burden); antipsychotics (unless for schizophrenia/bipolar/dementia with symptoms; increased mortality + falls + stroke); TCAs (amitriptyline, imipramine: anticholinergic; QTc; orthostatic); meperidine (normeperidine neurotoxicity); muscle relaxants (cyclobenzaprine, methocarbamol: sedating + fall risk); AVOID with specific conditions: antimuscarinics with BPH; AVOID alpha-blockers for hypertension (prazosin, doxazosin for HTN — orthostatic; use for BPH only); digoxin >0.125 mg/day in HF (toxicity risk); NSAIDs (GI bleed, renal impairment; if necessary: use PPI; avoid if CrCl <30; avoid if HF or recent MI); CAUTIOUS USE: warfarin (TTR monitoring); rivaroxaban/apixaban (renal dose adjustment); PPIs >8 weeks without indication (C. diff, fractures) | `text` |  |  |  |
| Polypharmacy — Beers Criteria, STOPP/START, and Deprescribing | Polypharmacy Screening Tools | `stopp_start` | STOPP/START and MAI Tool | `select` |  |  |  |
| Polypharmacy — Beers Criteria, STOPP/START, and Deprescribing | Practical Deprescribing Framework | `deprescribing_steps` | Deprescribing Process (CANADIAN DEPRESCRIBING NETWORK; STEPS: (1) Reconcile all medications + OTCs + supplements; (2) Identify PIMs (potentially inappropriate medications) using Beers/STOPP; (3) Determine medications without clear indication OR where benefit/harm ratio unfavorable; (4) Prioritize: start with highest harm potential or most burdensome; (5) Discuss with patient + caregiver: goals of care, life expectancy, preferences; (6) Taper/stop: tapered withdrawal for benzodiazepines (10%/week), SSRIs, opioids, PPIs, beta-blockers; (7) Monitor: symptom rebound; de-prescribing triggers: frailty (CFS >=5), limited life expectancy (<1 year), falls, cognitive impairment, polypharmacy (>=10 drugs), hospitalization; TIME TO BENEFIT considerations: bisphosphonates (3-5 years), statins in primary prevention >75 years (PROSPER: benefit maintained; re-evaluate goals)) | `text` |  |  |  |
| Polypharmacy — Beers Criteria, STOPP/START, and Deprescribing | Practical Deprescribing Framework | `frailty_prescribing` | Frailty and End-of-Life Prescribing | `select` |  |  |  |

## Sports Medicine

### ACL Reconstruction — `sports_medicine_acl_reconstruction_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ACL Reconstruction — Graft, Timing, Rehab, and Return to Sport | Graft Selection and Surgical Technique | `graft_selection` | ACL Graft Selection Algorithm (AUTOGRAFT OPTIONS: BONE-PATELLAR TENDON-BONE (BTB/BPTB): strongest fixation (bone-to-bone healing); best for elite athletes, high-pivot sports; DISADVANTAGES: donor site morbidity (anterior knee pain, patellar fracture risk, knee kneeling pain); HAMSTRING TENDON (gracilis + semitendinosus, 4-strand graft): lower donor site morbidity; less anterior knee pain; DISADVANTAGES: higher re-tear rate in younger patients (KANON, STABILITY studies); may be size-limited (diameter <8 mm = higher failure); BONE-QUAD TENDON (QT): growing popularity; excellent biomechanical properties; QUADRICEPS STRENGTH CONSIDERATION; ALLOGRAFTS: higher re-tear rate in young active patients (up to 2x); no donor site morbidity; preferred >40 years or lower-demand athletes; GRAFT DIAMETER: <8 mm hamstring = higher failure; size femoral socket accordingly; PEDIATRIC ACL: physeal-sparing techniques (all-epiphyseal) for Tanner 1-2; physeal-respecting techniques for Tanner 2-3; standard procedures for skeletally mature; AUGMENTATION: lateral extra-articular tenodesis (LET) or anterolateral ligament (ALL) reconstruction: reduces rotational laxity; reduces re-tear (STABILITY trial: BTB + LET: 50% re-tear reduction in high-risk youth) | `text` |  |  |  |
| ACL Reconstruction — Graft, Timing, Rehab, and Return to Sport | Graft Selection and Surgical Technique | `timing` | Surgical Timing and Prehabilitation | `select` |  |  |  |
| ACL Reconstruction — Graft, Timing, Rehab, and Return to Sport | Rehabilitation and Return to Sport | `rehab_protocol` | ACL Rehab Protocol Milestones (PHASE 1 (0-2 weeks): control pain + swelling; restore full extension; partial weight-bearing with crutches; quad sets + straight leg raises; PHASE 2 (2-6 weeks): full weight-bearing; bike (stationary) at 4-6 weeks; quad strengthening; closed-chain exercises; PHASE 3 (6-12 weeks): single-leg exercises; light jogging on treadmill (12 weeks if ROM + strength criteria met); PHASE 4 (3-6 months): progressive running; agility; sport-specific movements; plyometrics; PHASE 5 (6-9 months): return to training; STRENGTH CRITERIA: limb symmetry index (LSI): quad >=90% of contralateral (ideally >=90%); isokinetic testing at 60 degrees/sec; LSI <90% = higher re-tear; FUNCTIONAL TESTING: hop tests (single-leg hop; triple hop; crossover hop): LSI >=90%; Y-balance test; PSYCHOLOGICAL READINESS: ACL-RSI (ACL Return to Sport after Injury scale): fear of re-injury mediates return; psychological readiness >=65 associated with return to sport; BRIDGE PHASE: full training before game contact 4-6 weeks) | `text` |  |  |  |
| ACL Reconstruction — Graft, Timing, Rehab, and Return to Sport | Rehabilitation and Return to Sport | `rts_risk` | Return to Sport Criteria and Re-Injury Risk | `select` |  |  |  |

### Acute Sports Injury — `sports_medicine_acute_injury_cf`

Screen: 1 page(s) · 4 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Musculoskeletal Injury Evaluation | Injury Details | `mechanism` | Injury Mechanism | `select` |  |  |  |
| Acute Musculoskeletal Injury Evaluation | Injury Details | `sport` | Sport / Activity Level (recreational, high school, collegiate, professional — impacts treatment urgency and RTP timeline) | `text` |  |  |  |
| Acute Musculoskeletal Injury Evaluation | Injury Details | `prior_injury` | Prior injury to same area (recurrence risk; underlying instability; imaging review needed) | `checkbox` |  |  |  |
| Acute Musculoskeletal Injury Evaluation | MSK Examination | `effusion` | Joint Effusion | `select` |  |  |  |
| Acute Musculoskeletal Injury Evaluation | MSK Examination | `ligament_test` | Ligament Stability Tests (Lachman, anterior/posterior drawer, varus/valgus stress at 0 and 30 degrees, pivot shift, McMurray, Thessaly, FABER, FADIR) | `textarea` |  |  |  |
| Acute Musculoskeletal Injury Evaluation | MSK Examination | `neurovascular` | Neurovascular exam intact (pulses, sensation, motor — check if high-energy injury or dislocation) | `checkbox` |  |  |  |
| Acute Musculoskeletal Injury Evaluation | Ottawa Rules Application | `ottawa_ankle` | Ottawa Ankle Rules (if ankle injury) | `select` |  |  |  |
| Acute Musculoskeletal Injury Evaluation | Ottawa Rules Application | `imaging` | Imaging Ordered (X-ray, MRI with or without contrast, CT — indication and region) | `text` |  |  |  |
| Acute Musculoskeletal Injury Evaluation | Acute Management | `initial_treatment` | Initial Treatment Protocol | `select` |  |  |  |
| Acute Musculoskeletal Injury Evaluation | Acute Management | `weight_bearing` | Weight-Bearing Status | `select` |  |  |  |
| Acute Musculoskeletal Injury Evaluation | Acute Management | `rtp_timeline` | Return to Play Timeline (grade I sprain 1-2 weeks; grade II 2-4 weeks; grade III / ACL 6-9 months; stress fracture 6-12 weeks — location dependent) | `text` |  |  |  |

### Ankle Instability (Lateral) — `sports_medicine_ankle_instability_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Ankle Instability — Lateral Ligament Assessment | Clinical Assessment | `stability_tests` | Clinical Stability Tests (anterior drawer test: ATFL laxity — positive if >3 mm or difference >5-10 mm vs. contralateral; talar tilt test: CFL laxity — stress inversion; Cotton test for syndesmosis; squeeze test + PTTFL tenderness + external rotation stress = syndesmosis injury; deltoid ligament — eversion stress; document pain location: anterolateral (ATFL) vs. sinus tarsi vs. posterolateral (peroneal tendons) vs. posterior impingement) | `text` |  |  |  |
| Chronic Ankle Instability — Lateral Ligament Assessment | Clinical Assessment | `cai_diagnosis` | Chronic Ankle Instability Severity | `select` |  |  |  |
| Chronic Ankle Instability — Lateral Ligament Assessment | Treatment Planning | `surgery` | Surgical Approach (if indicated) | `select` |  |  |  |
| Chronic Ankle Instability — Lateral Ligament Assessment | Treatment Planning | `rehab` | Post-surgical Rehabilitation (0-2 weeks: NWB splint; 2-6 weeks: CAM boot WB; 6-8 weeks: progressive PT — ROM, peroneal strengthening; 8-12 weeks: sport-specific training; 12-16 weeks: return to cutting/jumping/pivoting sports; dynamic balance functional testing (Y-balance, single-leg hop) before clearance; ankle lace brace for 12 months post-op with activity) | `text` |  |  |  |

### Anterior Knee Pain — `anterior_knee_pain_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Anterior Knee Pain / Patellofemoral Evaluation | History | `onset` | Onset | `select` |  |  |  |
| Anterior Knee Pain / Patellofemoral Evaluation | History | `pain_location` | Pain Location | `select` |  |  |  |
| Anterior Knee Pain / Patellofemoral Evaluation | History | `aggravating` | Aggravating Factors (stairs, squatting, prolonged sitting) | `textarea` |  |  |  |
| Anterior Knee Pain / Patellofemoral Evaluation | Physical Examination | `patellar_tracking` | Patellar Tracking | `select` |  |  |  |
| Anterior Knee Pain / Patellofemoral Evaluation | Physical Examination | `j_sign` | J-sign present (lateral patellar jump on knee extension) | `checkbox` |  |  |  |
| Anterior Knee Pain / Patellofemoral Evaluation | Physical Examination | `squinting_patella` | Squinting patella (femoral anteversion) | `checkbox` |  |  |  |
| Anterior Knee Pain / Patellofemoral Evaluation | Physical Examination | `quad_strength` | Quadriceps Strength | `select` |  |  |  |
| Anterior Knee Pain / Patellofemoral Evaluation | Physical Examination | `vmo_atrophy` | VMO atrophy / weakness noted (key contributor) | `checkbox` |  |  |  |
| Anterior Knee Pain / Patellofemoral Evaluation | Treatment Plan | `pt_referral` | Physical therapy — quadriceps / hip strengthening, VMO activation | `checkbox` |  |  |  |
| Anterior Knee Pain / Patellofemoral Evaluation | Treatment Plan | `patellar_taping` | Patellar taping (McConnell) / brace recommended | `checkbox` |  |  |  |
| Anterior Knee Pain / Patellofemoral Evaluation | Treatment Plan | `activity_modification` | Activity modification (reduce stairs/squats during acute phase) | `checkbox` |  |  |  |
| Anterior Knee Pain / Patellofemoral Evaluation | Treatment Plan | `nsaid` | NSAIDs / topical diclofenac (short-term) | `checkbox` |  |  |  |
| Anterior Knee Pain / Patellofemoral Evaluation | Treatment Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Concussion — `concussion_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Concussion Evaluation and Management | Injury Assessment | `mechanism` | Mechanism (direct blow, whiplash, fall) | `text` |  |  |  |
| Concussion Evaluation and Management | Injury Assessment | `loc` | Loss of consciousness at time of injury | `checkbox` |  |  |  |
| Concussion Evaluation and Management | Injury Assessment | `loc_duration` | LOC Duration (if yes) | `select` |  |  |  |
| Concussion Evaluation and Management | Injury Assessment | `pta` | Post-traumatic amnesia present | `checkbox` |  |  |  |
| Concussion Evaluation and Management | Injury Assessment | `days_since` | Days Since Injury | `number` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (PCSS) | `headache` | Headache (0-6) | `number` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (PCSS) | `dizziness` | Dizziness (0-6) | `number` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (PCSS) | `cognitive_fog` | Feeling mentally foggy (0-6) | `number` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (PCSS) | `memory_problems` | Memory problems (0-6) | `number` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (PCSS) | `light_sensitivity` | Sensitivity to light (0-6) | `number` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (PCSS) | `noise_sensitivity` | Sensitivity to noise (0-6) | `number` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (PCSS) | `sleep_disturbance` | Sleep disturbance (0-6) | `number` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (PCSS) | `emotional` | Emotional (irritability/sadness, 0-6) | `number` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (PCSS) | `pcss_total` | PCSS Total Score | `number` |  |  |  |
| Concussion Evaluation and Management | Return-to-Play Protocol | `rtp_step` | Current RTP Step (Concussion in Sport Group) | `select` |  |  |  |
| Concussion Evaluation and Management | Return-to-Play Protocol | `academic_accommodations` | Academic accommodations letter provided (student athletes) | `checkbox` |  |  |  |
| Concussion Evaluation and Management | Return-to-Play Protocol | `neuropsych_testing` | Neuropsychological testing ordered (prolonged symptoms >30 days) | `checkbox` |  |  |  |
| Concussion Evaluation and Management | Return-to-Play Protocol | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Concussion — `sports_medicine_concussion_cf`

Screen: 1 page(s) · 4 section(s) · 26 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Concussion Evaluation and Management | Injury Event | `con_injury_date` | Date of Injury | `date` |  |  |  |
| Concussion Evaluation and Management | Injury Event | `con_mechanism` | Mechanism | `select` |  |  |  |
| Concussion Evaluation and Management | Injury Event | `con_loc` | Loss of Consciousness (LOC) | `select` |  |  |  |
| Concussion Evaluation and Management | Injury Event | `con_pta` | Post-Traumatic Amnesia (PTA) | `select` |  |  |  |
| Concussion Evaluation and Management | Injury Event | `con_red_flags` | Red Flags Screened (seizure, repeated vomiting, focal deficit, worsening HA, GCS decline) | `textarea` |  |  |  |
| Concussion Evaluation and Management | Injury Event | `con_ct_ordered` | Head CT (Canadian CT / NEXUS II criteria) | `select` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (SCAT-6 / PCSS) | `con_days_since_injury` | Days Since Injury (this evaluation) | `number` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (SCAT-6 / PCSS) | `con_pcss_score` | PCSS Total Score (0-132) | `number` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (SCAT-6 / PCSS) | `con_primary_symptoms` | Primary Symptoms (headache, dizziness, fogginess, visual symptoms, nausea) | `textarea` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (SCAT-6 / PCSS) | `con_headache_severity` | Headache Severity (0-6) | `select` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (SCAT-6 / PCSS) | `con_dizziness` | Dizziness/Vertigo | `select` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (SCAT-6 / PCSS) | `con_cognitive_symptoms` | Cognitive Symptoms (fogginess, memory, concentration) | `select` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (SCAT-6 / PCSS) | `con_sleep_symptoms` | Sleep Disturbance | `select` |  |  |  |
| Concussion Evaluation and Management | Symptom Assessment (SCAT-6 / PCSS) | `con_emotional_symptoms` | Emotional/Behavioral (irritability, sadness, anxiety, emotional lability) | `textarea` |  |  |  |
| Concussion Evaluation and Management | Clinical Assessment | `con_impact_testing` | Neurocognitive Testing (ImPACT / Cogstate) | `select` |  |  |  |
| Concussion Evaluation and Management | Clinical Assessment | `con_vestibular` | Vestibular Assessment (VOMS) | `select` |  |  |  |
| Concussion Evaluation and Management | Clinical Assessment | `con_cervical` | Cervical Spine Assessment | `select` |  |  |  |
| Concussion Evaluation and Management | Clinical Assessment | `con_balance` | Balance (BESS / modified BESS) | `select` |  |  |  |
| Concussion Evaluation and Management | Clinical Assessment | `con_visual` | Vision/Oculomotor Screen | `select` |  |  |  |
| Concussion Evaluation and Management | Management and Return to Activity | `con_rts_stage` | Return-to-Sport Stage (Zurich/Berlin Consensus) | `select` |  |  |  |
| Concussion Evaluation and Management | Management and Return to Activity | `con_school_accommodations` | Academic Accommodations (if student) | `select` |  |  |  |
| Concussion Evaluation and Management | Management and Return to Activity | `con_medication` | Medication | `select` |  |  |  |
| Concussion Evaluation and Management | Management and Return to Activity | `con_rehab_referral` | Rehabilitation Referral | `select` |  |  |  |
| Concussion Evaluation and Management | Management and Return to Activity | `con_prolonged_recovery` | Prolonged Recovery (over 4 weeks) | `select` |  |  |  |
| Concussion Evaluation and Management | Management and Return to Activity | `con_cleared` | Medical Clearance Status | `select` |  |  |  |
| Concussion Evaluation and Management | Management and Return to Activity | `con_notes` | Additional Notes | `textarea` |  |  |  |

### Concussion Eval — `concussion_evaluation_cf`

Screen: 1 page(s) · 3 section(s) · 22 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Concussion / Sport-Related Head Injury Evaluation | Injury Details | `injury_date` | Date of Injury | `date` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | Injury Details | `mechanism` | Mechanism / Sport / Activity | `text` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | Injury Details | `loc` | Loss of consciousness (LOC) occurred (any duration is significant) | `checkbox` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | Injury Details | `loc_duration` | LOC Duration (if applicable) | `text` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | Injury Details | `amnesia` | Amnesia Type | `select` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | SCAT6 / Post-Concussion Symptoms | `headache` | Headache (0-6) | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | SCAT6 / Post-Concussion Symptoms | `pressure_in_head` | Pressure in Head (0-6) | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | SCAT6 / Post-Concussion Symptoms | `neck_pain` | Neck Pain (0-6) | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | SCAT6 / Post-Concussion Symptoms | `nausea` | Nausea / Vomiting (0-6) | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | SCAT6 / Post-Concussion Symptoms | `dizziness` | Dizziness (0-6) | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | SCAT6 / Post-Concussion Symptoms | `visual_problems` | Visual Problems / Blurry Vision (0-6) | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | SCAT6 / Post-Concussion Symptoms | `balance_problems` | Balance Problems (0-6) | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | SCAT6 / Post-Concussion Symptoms | `sensitivity_light` | Sensitivity to Light (0-6) | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | SCAT6 / Post-Concussion Symptoms | `sensitivity_noise` | Sensitivity to Noise (0-6) | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | SCAT6 / Post-Concussion Symptoms | `feeling_slowed` | Feeling Slowed Down (0-6) | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | SCAT6 / Post-Concussion Symptoms | `fogginess` | Feeling Like in a Fog (0-6) | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | SCAT6 / Post-Concussion Symptoms | `concentration` | Difficulty Concentrating (0-6) | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | SCAT6 / Post-Concussion Symptoms | `memory_difficulty` | Difficulty Remembering (0-6) | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | Return to Play / Learn | `rtp_stage` | Current RTP Stage (gradual, 24h per step) | `select` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | Return to Play / Learn | `school_accommodations` | Academic accommodations recommended (reduced screen time, extra time) | `checkbox` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | Return to Play / Learn | `red_flags_absent` | Red flags absent (no skull fracture, ICH, focal neuro deficits, repeated vomiting, GCS <15) | `checkbox` |  |  |  |
| Concussion / Sport-Related Head Injury Evaluation | Return to Play / Learn | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Concussion Protocol — `doc_sports_medicine_concussion_protocol_cf`

Screen: 1 page(s) · 1 section(s) · 68 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Concussion Protocol | Concussion Protocol — Specialty Detail | `mechanism` | Mechanism (direct blow, whiplash, fall) | `text` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `loc` | Loss of consciousness at time of injury | `checkbox` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `loc_duration` | LOC Duration (if yes) | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `pta` | Post-traumatic amnesia present | `checkbox` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `days_since` | Days Since Injury | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `headache` | Headache (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `dizziness` | Dizziness (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `cognitive_fog` | Feeling mentally foggy (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `memory_problems` | Memory problems (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `light_sensitivity` | Sensitivity to light (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `noise_sensitivity` | Sensitivity to noise (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `sleep_disturbance` | Sleep disturbance (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `emotional` | Emotional (irritability/sadness, 0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `pcss_total` | PCSS Total Score | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `rtp_step` | Current RTP Step (Concussion in Sport Group) | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `academic_accommodations` | Academic accommodations letter provided (student athletes) | `checkbox` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `neuropsych_testing` | Neuropsychological testing ordered (prolonged symptoms >30 days) | `checkbox` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `notes` | Assessment and Plan | `textarea` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `injury_date` | Date of Injury | `date` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `amnesia` | Amnesia Type | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `pressure_in_head` | Pressure in Head (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `neck_pain` | Neck Pain (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `nausea` | Nausea / Vomiting (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `visual_problems` | Visual Problems / Blurry Vision (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `balance_problems` | Balance Problems (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `sensitivity_light` | Sensitivity to Light (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `sensitivity_noise` | Sensitivity to Noise (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `feeling_slowed` | Feeling Slowed Down (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `fogginess` | Feeling Like in a Fog (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `concentration` | Difficulty Concentrating (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `memory_difficulty` | Difficulty Remembering (0-6) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `rtp_stage` | Current RTP Stage (gradual, 24h per step) | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `school_accommodations` | Academic accommodations recommended (reduced screen time, extra time) | `checkbox` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `red_flags_absent` | Red flags absent (no skull fracture, ICH, focal neuro deficits, repeated vomiting, GCS <15) | `checkbox` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `scat6_immediate` | Immediate On-Field Assessment | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `scat6_symptoms` | SCAT6 Symptom Score (22 symptoms rated 0-6; total score 0-132; baseline comparison essential) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `maddocks_score` | Maddocks Questions Score (orientation: location, time of game, last score, opposing team, last game; 5 = normal) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `days_post_injury` | Days Since Injury | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `current_symptoms` | Current Symptom Burden (headache, photophobia, phonophobia, cognitive fog, sleep disturbance, mood changes, balance; compare to SCAT6 baseline) | `textarea` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `cognitive_testing` | Cognitive Assessment (ImPACT, Cogstate, or SCAT6 cognitive section; baseline comparison; memory, reaction time, processing speed) | `text` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `balance` | Balance Testing (BESS — Balance Error Scoring System; or clinical balance exam; tandem gait) | `text` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `prolonged_recovery` | Prolonged recovery (>4 weeks symptomatic) — consider: physical therapy for cervicogenic/vestibular component, neuropsychology referral, graduated aerobic program (supervised), specialist evaluation | `checkbox` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_injury_date` | Date of Injury | `date` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_mechanism` | Mechanism | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_loc` | Loss of Consciousness (LOC) | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_pta` | Post-Traumatic Amnesia (PTA) | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_red_flags` | Red Flags Screened (seizure, repeated vomiting, focal deficit, worsening HA, GCS decline) | `textarea` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_ct_ordered` | Head CT (Canadian CT / NEXUS II criteria) | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_days_since_injury` | Days Since Injury (this evaluation) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_pcss_score` | PCSS Total Score (0-132) | `number` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_primary_symptoms` | Primary Symptoms (headache, dizziness, fogginess, visual symptoms, nausea) | `textarea` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_headache_severity` | Headache Severity (0-6) | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_dizziness` | Dizziness/Vertigo | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_cognitive_symptoms` | Cognitive Symptoms (fogginess, memory, concentration) | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_sleep_symptoms` | Sleep Disturbance | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_emotional_symptoms` | Emotional/Behavioral (irritability, sadness, anxiety, emotional lability) | `textarea` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_impact_testing` | Neurocognitive Testing (ImPACT / Cogstate) | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_vestibular` | Vestibular Assessment (VOMS) | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_cervical` | Cervical Spine Assessment | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_balance` | Balance (BESS / modified BESS) | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_visual` | Vision/Oculomotor Screen | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_rts_stage` | Return-to-Sport Stage (Zurich/Berlin Consensus) | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_school_accommodations` | Academic Accommodations (if student) | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_medication` | Medication | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_rehab_referral` | Rehabilitation Referral | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_prolonged_recovery` | Prolonged Recovery (over 4 weeks) | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_cleared` | Medical Clearance Status | `select` |  |  |  |
| Concussion Protocol | Concussion Protocol — Specialty Detail | `con_notes` | Additional Notes | `textarea` |  |  |  |

### Concussion Protocol — `sports_medicine_concussion_protocol_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Concussion / Sport-Related Head Injury Protocol | Acute Sideline Assessment | `scat6_immediate` | Immediate On-Field Assessment | `select` |  |  |  |
| Concussion / Sport-Related Head Injury Protocol | Acute Sideline Assessment | `loc` | Loss of Consciousness | `select` |  |  |  |
| Concussion / Sport-Related Head Injury Protocol | Acute Sideline Assessment | `scat6_symptoms` | SCAT6 Symptom Score (22 symptoms rated 0-6; total score 0-132; baseline comparison essential) | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Protocol | Acute Sideline Assessment | `maddocks_score` | Maddocks Questions Score (orientation: location, time of game, last score, opposing team, last game; 5 = normal) | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Protocol | Office Follow-Up Assessment | `days_post_injury` | Days Since Injury | `number` |  |  |  |
| Concussion / Sport-Related Head Injury Protocol | Office Follow-Up Assessment | `current_symptoms` | Current Symptom Burden (headache, photophobia, phonophobia, cognitive fog, sleep disturbance, mood changes, balance; compare to SCAT6 baseline) | `textarea` |  |  |  |
| Concussion / Sport-Related Head Injury Protocol | Office Follow-Up Assessment | `cognitive_testing` | Cognitive Assessment (ImPACT, Cogstate, or SCAT6 cognitive section; baseline comparison; memory, reaction time, processing speed) | `text` |  |  |  |
| Concussion / Sport-Related Head Injury Protocol | Office Follow-Up Assessment | `balance` | Balance Testing (BESS — Balance Error Scoring System; or clinical balance exam; tandem gait) | `text` |  |  |  |
| Concussion / Sport-Related Head Injury Protocol | Return to Play Protocol (Graduated) | `rtp_stage` | Current RTP Protocol Stage (Zurich/CISG 6-step) | `select` |  |  |  |
| Concussion / Sport-Related Head Injury Protocol | Return to Play Protocol (Graduated) | `prolonged_recovery` | Prolonged recovery (>4 weeks symptomatic) — consider: physical therapy for cervicogenic/vestibular component, neuropsychology referral, graduated aerobic program (supervised), specialist evaluation | `checkbox` |  |  |  |

### Concussion Return to Play — `sports_med_concussion_rtp_cf`

Screen: 1 page(s) · 4 section(s) · 32 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Concussion Management and Return-to-Play Protocol | Injury Event and Initial Presentation | `conc_injury_date` | Date of Injury | `date` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Injury Event and Initial Presentation | `conc_visit_date` | Date of This Assessment | `date` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Injury Event and Initial Presentation | `conc_days_since_injury` | Days Since Injury | `number` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Injury Event and Initial Presentation | `conc_sport` | Sport and Position | `text` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Injury Event and Initial Presentation | `conc_mechanism` | Mechanism of Injury | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Injury Event and Initial Presentation | `conc_loc` | Loss of Consciousness | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Injury Event and Initial Presentation | `conc_pta` | Post-Traumatic Amnesia | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Injury Event and Initial Presentation | `conc_prior_concussions` | Number of Prior Concussions | `number` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Injury Event and Initial Presentation | `conc_red_flags` | Red Flag Symptoms (requiring immediate emergency evaluation) | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | SCAT Symptom Evaluation | `conc_headache` | Headache Severity (0-6) | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | SCAT Symptom Evaluation | `conc_pressure_in_head` | Pressure in Head (0-6) | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | SCAT Symptom Evaluation | `conc_neck_pain` | Neck Pain (0-6) | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | SCAT Symptom Evaluation | `conc_dizziness` | Dizziness or Balance Problems (0-6) | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | SCAT Symptom Evaluation | `conc_visual` | Blurred or Double Vision (0-6) | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | SCAT Symptom Evaluation | `conc_light_sensitivity` | Sensitivity to Light (0-6) | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | SCAT Symptom Evaluation | `conc_noise_sensitivity` | Sensitivity to Noise (0-6) | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | SCAT Symptom Evaluation | `conc_cognitive` | Feeling Slow or Foggy (0-6) | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | SCAT Symptom Evaluation | `conc_emotion` | Emotional Changes — Irritability or Sadness (0-6) | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | SCAT Symptom Evaluation | `conc_sleep` | Sleep Difficulty or Fatigue (0-6) | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | SCAT Symptom Evaluation | `conc_total_symptom_score` | Total Symptom Severity Score (0-132) | `number` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Cognitive and Vestibular Assessment | `conc_sac_orientation` | SAC Orientation Score (0-5) | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Cognitive and Vestibular Assessment | `conc_immediate_recall` | Immediate Memory Score (word list — 0-15) | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Cognitive and Vestibular Assessment | `conc_delayed_recall` | Delayed Recall Score (0-5) | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Cognitive and Vestibular Assessment | `conc_balance_bess` | BESS Balance Testing (errors) | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Cognitive and Vestibular Assessment | `conc_vestibular_oculomotor` | Vestibular / Oculomotor Screen | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Return-to-Play Protocol and Clearance | `conc_rtp_stage` | Current Stage of Graded Return-to-Play Protocol | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Return-to-Play Protocol and Clearance | `conc_rtp_symptom_free` | Symptom-Free Status | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Return-to-Play Protocol and Clearance | `conc_school_protocol` | Academic (Return-to-Learn) Status | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Return-to-Play Protocol and Clearance | `conc_referrals` | Specialist Referrals | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Return-to-Play Protocol and Clearance | `conc_cleared` | Medical Clearance Decision | `select` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Return-to-Play Protocol and Clearance | `conc_next_visit` | Next Concussion Follow-Up Date | `date` |  |  |  |
| Concussion Management and Return-to-Play Protocol | Return-to-Play Protocol and Clearance | `conc_notes` | Concussion Notes and Instructions to Patient and Coach | `textarea` |  |  |  |

### Environmental Illness — `sports_medicine_environmental_illness_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Heat Illness, EAH, Altitude Sickness — Diagnosis and Emergency Management | Heat Illness: Spectrum and Management | `heat_overview` | Heat Cramps, Heat Exhaustion, and Heat Stroke Classification — Classic vs. Exertional, CNS Dysfunction Definition, and Gold Standard Rectal Temperature Measurement (HEAT ILLNESS SPECTRUM: HEAT CRAMPS: PAINFUL MUSCLE SPASMS (legs; calves; abdomen; hands); during or after exercise; CAUSE: salt + fluid loss from sweating; TREATMENT: REST; fluids (PO or IV NaCl); stretching; sodium supplementation; HEAT SYNCOPE: LOSS OF CONSCIOUSNESS; VASODILATION + VENOUS POOLING in heat; ORTHOSTATIC HYPOTENSION on standing; TREATMENT: SUPINE POSITION; COOL + REHYDRATE; benign if brief; HEAT EXHAUSTION: CORE TEMPERATURE: usually <40 C (104 F); SYMPTOMS: HEAVY SWEATING; WEAKNESS; NAUSEA; HEADACHE; DIZZINESS; PALE/MOIST SKIN; NORMAL OR SLIGHTLY ALTERED MENTAL STATUS; NO SIGNIFICANT CNS DYSFUNCTION; DIAGNOSIS OF EXCLUSION (rule out heat stroke); TREATMENT: REMOVE FROM HEAT; SUPINE + LEGS ELEVATED; AGGRESSIVE ORAL HYDRATION; IV 0.9% NORMAL SALINE if unable to drink; COOL ENVIRONMENT; MONITOR for progression to heat stroke; HEAT STROKE: DEFINITION: CORE TEMPERATURE >40 C (104 F) + CNS DYSFUNCTION; CNS DYSFUNCTION: CONFUSION; DISORIENTATION; LOSS OF CONSCIOUSNESS; SEIZURES; BEHAVIORAL CHANGE; CLASSIC HEAT STROKE: ELDERLY; CHRONICALLY ILL; HOT ENVIRONMENT without exercise; NO SWEATING (anhidrosis in some); EXERTIONAL HEAT STROKE (EHS): ATHLETES; MILITARY; YOUNG HEALTHY; DURING STRENUOUS EXERCISE; MAY STILL BE SWEATING; BOTH ARE MEDICAL EMERGENCIES; TEMPERATURE MEASUREMENT: RECTAL TEMPERATURE: GOLD STANDARD (most accurate in exercise); AXILLARY: UNRELIABLE; ORAL: inaccurate in exercising athlete; TYMPANIC: inaccurate; RECTAL TEMPERATURE >40 C + CNS CHANGE = HEAT STROKE; EHS COMPLICATIONS: RHABDOMYOLYSIS (very common); AKI; LIVER FAILURE (AST/ALT >3000 U/L); DIC; CARDIAC ARRHYTHMIA; multi-organ failure; ELECTROLYTES: HYPONATREMIA (volume replacement); HYPOKALEMIA; HYPERKALEMIA (rhabdomyolysis); HYPOCALCEMIA (rhabdomyolysis); PATHOPHYSIOLOGY: DIRECT CELLULAR TOXICITY of hyperthermia; COAGULATION ACTIVATION; INFLAMMATORY CYTOKINE CASCADE; ENDOTOXIN TRANSLOCATION (gut barrier breakdown) | `text` |  |  |  |
| Heat Illness, EAH, Altitude Sickness — Diagnosis and Emergency Management | Heat Illness: Spectrum and Management | `heat_cooling` | Cold Water Immersion Gold-Standard EHS Cooling, Evaporative Cooling Technique, Dantrolene vs. No Role, and Exercise-Associated Hyponatremia (EAH) Hypotonic Saline Treatment | `select` |  |  |  |
| Heat Illness, EAH, Altitude Sickness — Diagnosis and Emergency Management | Altitude Illness: AMS, HACE, HAPE | `altitude_overview` | Lake Louise Score AMS Diagnosis, HACE Clinical Features, HAPE SIPA 1991 Lake Louise, and Acclimatization Physiology (ALTITUDE ILLNESS: PATHOPHYSIOLOGY: HYPOBARIC HYPOXIA (reduced atmospheric O2); HYPERVENTILATION (hypocapnia; respiratory alkalosis); CEREBRAL VASODILATION (CO2 reduction); INCREASED SYMPATHETIC TONE; PULMONARY HYPERTENSION (hypoxic pulmonary vasoconstriction); FLUID SHIFT; ALTITUDE ZONES: HIGH ALTITUDE: 2500-3500 m (8200-11,500 ft); VERY HIGH: 3500-5500 m; EXTREME: >5500 m (>18,000 ft); ACUTE MOUNTAIN SICKNESS (AMS): MOST COMMON altitude illness; LAKE LOUISE SCORE (LLS) 2018: HEADACHE (required): 0-3; GASTROINTESTINAL: 0-3; FATIGUE/WEAKNESS: 0-3; DIZZINESS/LIGHTHEADEDNESS: 0-3; AMS: HEADACHE + TOTAL LLS >=3; ONSET: 2-12h after ascent to altitude; ACCLIMATIZATION: gradual improvement over 1-4 days; SYMPTOMS: HEADACHE (cardinal); NAUSEA; ANOREXIA; FATIGUE; DIZZINESS; POOR SLEEP; HIGH-ALTITUDE CEREBRAL EDEMA (HACE): SEVERE END-SPECTRUM of AMS; ATAXIA (truncal; heel-to-toe difficulty): key early sign; ALTERED MENTAL STATUS (AMS = Altered Mental Status in HACE); LETHARGY; CONFUSION; STUPOR; COMA; MRI: CORPUS CALLOSUM T2/FLAIR changes; HIGH-ALTITUDE PULMONARY EDEMA (HAPE): MOST DEADLY ALTITUDE ILLNESS; LAKE LOUISE/SIPA CRITERIA 1991: SYMPTOMS (>=2 of): exertional dyspnea; cough; weakness; chest tightness; SIGNS (>=2 of): crackles or wheeze; central cyanosis; tachypnea; tachycardia; CXR: BILATERAL PATCHY INFILTRATES (non-cardiogenic pulmonary edema); ONSET: 2-4 days at new altitude; RISK FACTORS: INDIVIDUAL SUSCEPTIBILITY (previous HAPE major risk); rapid ascent; high altitude; exercise; PATHOPHYSIOLOGY: UNEVEN PULMONARY VASOCONSTRICTION; elevated pulmonary artery pressure; alveolar edema; inflammatory component; ACCLIMATIZATION PHYSIOLOGY: INCREASED BREATHING RATE (immediate); INCREASED EPO (renal; delayed days); INCREASED RBC + HEMOGLOBIN (weeks); 2,3-DPG increase (right-shifts O2-Hb curve); CEREBRAL AUTOREGULATION adjustments | `text` |  |  |  |
| Heat Illness, EAH, Altitude Sickness — Diagnosis and Emergency Management | Altitude Illness: AMS, HACE, HAPE | `altitude_treatment` | Altitude Illness Treatment: Descent Priority, Acetazolamide Prophylaxis/Treatment, Dexamethasone HACE, Nifedipine HAPE, and Gamow Bag | `select` |  |  |  |

### Exercise Testing — `sports_medicine_exercise_testing_cf`

Screen: 1 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Exercise Testing and Exercise Prescription | Exercise Test Results | `test_type` | Exercise Test Type | `select` |  |  |  |
| Exercise Testing and Exercise Prescription | Exercise Test Results | `vo2_max` | VO2 max (mL/kg/min; peak/maximal; <14 = very poor; 35-45 = average fit adult; >55 = elite endurance athlete) | `number` |  |  |  |
| Exercise Testing and Exercise Prescription | Exercise Test Results | `mets_achieved` | Peak METs Achieved (1 MET = 3.5 mL/kg/min O2; <5 METs = poor; >10 METs = good; >12 METs = excellent fitness; surgical risk threshold: >=4 METs) | `number` |  |  |  |
| Exercise Testing and Exercise Prescription | Exercise Test Results | `anaerobic_threshold` | Anaerobic / Ventilatory Threshold (AT) as % of VO2 max (normal 50-60%; reduced in cardiac or pulmonary limitation) | `number` |  |  |  |
| Exercise Testing and Exercise Prescription | Exercise Prescription (FITT-VP) | `frequency` | Frequency | `select` |  |  |  |
| Exercise Testing and Exercise Prescription | Exercise Prescription (FITT-VP) | `intensity` | Intensity | `select` |  |  |  |
| Exercise Testing and Exercise Prescription | Exercise Prescription (FITT-VP) | `target_hr` | Target Heart Rate Range (Karvonen formula: THR = [(HRmax - HRrest) x %intensity] + HRrest; or VO2-derived HR from CPET at target %VO2) | `text` |  |  |  |
| Exercise Testing and Exercise Prescription | Exercise Prescription (FITT-VP) | `type` | Exercise Mode (aerobic: walking, cycling, swimming; resistance training 2-3x/week: compound movements, progressive overload; flexibility + balance for older adults) | `text` |  |  |  |

### Hip FAI / Labrum — `sports_medicine_hip_pathology_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hip Pathology Assessment — FAI and Labral Tear | FAI Classification | `fai_morphology` | FAI Morphology | `select` |  |  |  |
| Hip Pathology Assessment — FAI and Labral Tear | FAI Classification | `labral_status` | Labral Tear Classification | `select` |  |  |  |
| Hip Pathology Assessment — FAI and Labral Tear | Physical Examination Findings | `impingement_tests` | Impingement Tests (FADIR: flexion-adduction-internal rotation = anterior impingement — most sensitive; FABER: flexion-abduction-external rotation = posterior impingement + SI joint; Stinchfield = flexed hip resistance; log roll; Thomas test for flexion contracture; Ober for iliotibial band; document ROM degrees: flexion/extension/IR/ER) | `text` |  |  |  |
| Hip Pathology Assessment — FAI and Labral Tear | Physical Examination Findings | `sport` | Sport and Activity Level (soccer/football/dance/hockey most common FAI sports; position (goalkeeper, offensive lineman); Tegner activity score; UCLA activity scale; document time loss from sport; prior injections — diagnostic value of intra-articular corticosteroid; if relief confirms intra-articular source) | `text` |  |  |  |
| Hip Pathology Assessment — FAI and Labral Tear | Treatment Planning | `treatment_plan` | Treatment Plan | `select` |  |  |  |

### Knee Injury — `sports_medicine_knee_injury_cf`

Screen: 1 page(s) · 4 section(s) · 24 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Knee Injury Evaluation | Injury History | `knee_injury_date` | Date of Injury | `date` |  |  |  |
| Knee Injury Evaluation | Injury History | `knee_mechanism` | Mechanism of Injury | `select` |  |  |  |
| Knee Injury Evaluation | Injury History | `knee_pop_felt` | Audible or Felt Pop at Time of Injury | `select` |  |  |  |
| Knee Injury Evaluation | Injury History | `knee_immediate_swelling` | Swelling Onset | `select` |  |  |  |
| Knee Injury Evaluation | Injury History | `knee_prior_injuries` | Prior Knee Injuries (prior ACL, surgeries, same knee) | `textarea` |  |  |  |
| Knee Injury Evaluation | Physical Examination | `knee_effusion` | Effusion | `select` |  |  |  |
| Knee Injury Evaluation | Physical Examination | `knee_lachman` | Lachman Test | `select` |  |  |  |
| Knee Injury Evaluation | Physical Examination | `knee_pivot_shift` | Pivot Shift Test | `select` |  |  |  |
| Knee Injury Evaluation | Physical Examination | `knee_mcl_lcl` | MCL / LCL Valgus-Varus Stress Testing | `select` |  |  |  |
| Knee Injury Evaluation | Physical Examination | `knee_meniscal_tests` | Meniscal Tests (McMurray, Thessaly) | `select` |  |  |  |
| Knee Injury Evaluation | Physical Examination | `knee_pcl_posterior_drawer` | Posterior Drawer / PCL Assessment | `select` |  |  |  |
| Knee Injury Evaluation | Physical Examination | `knee_rom` | Range of Motion (extension/flexion degrees) | `text` |  |  |  |
| Knee Injury Evaluation | Imaging | `knee_xray` | Plain Radiograph | `select` |  |  |  |
| Knee Injury Evaluation | Imaging | `knee_mri_date` | MRI Date | `date` |  |  |  |
| Knee Injury Evaluation | Imaging | `knee_mri_acl` | MRI ACL Finding | `select` |  |  |  |
| Knee Injury Evaluation | Imaging | `knee_mri_meniscus` | MRI Meniscal Finding | `select` |  |  |  |
| Knee Injury Evaluation | Imaging | `knee_mri_other` | Other MRI Findings (bone bruise, cartilage, MCL/PCL, posterolateral corner) | `textarea` |  |  |  |
| Knee Injury Evaluation | Treatment Plan | `knee_acl_treatment` | ACL Treatment Decision | `select` |  |  |  |
| Knee Injury Evaluation | Treatment Plan | `knee_meniscus_treatment` | Meniscal Treatment | `select` |  |  |  |
| Knee Injury Evaluation | Treatment Plan | `knee_preop_prehab` | Prehabilitation (before ACLR) | `select` |  |  |  |
| Knee Injury Evaluation | Treatment Plan | `knee_brace` | Bracing | `select` |  |  |  |
| Knee Injury Evaluation | Treatment Plan | `knee_rts_criteria` | Return-to-Sport Criteria (post-ACLR) | `select` |  |  |  |
| Knee Injury Evaluation | Treatment Plan | `knee_orthopedics_referral` | Orthopedic Surgery Referral | `select` |  |  |  |
| Knee Injury Evaluation | Treatment Plan | `knee_notes` | Additional Notes | `textarea` |  |  |  |

### MSK Injection — `sports_medicine_injection_cf`

Screen: 1 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Musculoskeletal Injection Procedure | Injection Details | `target` | Injection Target | `select` |  |  |  |
| Musculoskeletal Injection Procedure | Injection Details | `guidance` | Imaging Guidance | `select` |  |  |  |
| Musculoskeletal Injection Procedure | Injection Details | `injectate` | Injectate | `select` |  |  |  |
| Musculoskeletal Injection Procedure | Post-Injection | `rest_period` | Rest Period (24-48h relative rest after corticosteroid injection; return to sport 1-3 days; PRP: rest 2-3 days; no NSAID for 2 weeks post-PRP) | `text` |  |  |  |
| Musculoskeletal Injection Procedure | Post-Injection | `frequency_limit` | Injection Frequency Limits (corticosteroid: max 3-4 per year per joint — tendon/cartilage risk; hyaluronic acid: once per season; PRP: no established limit) | `text` |  |  |  |
| Musculoskeletal Injection Procedure | Post-Injection | `adverse_events` | Adverse Events to Counsel (injection flare 24-48h; infection <0.01%; skin depigmentation/fat atrophy if superficial corticosteroid; hyperglycemia 1-3 days in diabetics) | `textarea` |  |  |  |
