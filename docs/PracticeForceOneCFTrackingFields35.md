---
title: "PracticeForceOneCFTrackingFields35"
---

# CF Tracking — Field-Level Detail (part 35 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Sleep Medicine**, **Colorectal Surgery**, **Gynecology**, **Occupational Medicine**, **Orthopedic Surgery**, **Urgent Care**, **ENT**, **Obstetrics**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Sleep Medicine

### Sleep Apnea OSA — `sleep_medicine_osa_cf`

Screen: 1 page(s) · 3 section(s) · 25 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Obstructive Sleep Apnea Evaluation | Symptoms and Screening | `osa_epworth_score` | Epworth Sleepiness Scale (ESS) Score (0-24, pathologic over 10) | `number` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Symptoms and Screening | `osa_stop_bang` | STOP-BANG Score | `select` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Symptoms and Screening | `osa_snoring` | Snoring | `select` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Symptoms and Screening | `osa_witnessed_apneas` | Witnessed Apneas | `select` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Symptoms and Screening | `osa_nocturia` | Nocturia (OSA-associated) | `select` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Symptoms and Screening | `osa_morning_headaches` | Morning Headaches | `select` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Symptoms and Screening | `osa_risk_factors` | Risk Factors (BMI, neck circumference over 40 cm, retrognathia, nasal obstruction, hypothyroid, acromegaly) | `textarea` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Sleep Testing | `osa_test_type` | Sleep Study Type | `select` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Sleep Testing | `osa_test_date` | Sleep Study Date | `date` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Sleep Testing | `osa_ahi` | AHI (Apnea-Hypopnea Index - events/hour) | `number` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Sleep Testing | `osa_ahi_severity` | AHI Severity Classification | `select` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Sleep Testing | `osa_nadir_spo2` | Nadir SpO2 (%) | `number` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Sleep Testing | `osa_time_under_90` | Time SpO2 under 90% (% of total sleep) | `number` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Sleep Testing | `osa_ahi_supine` | Supine AHI (positional component) | `number` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Sleep Testing | `osa_ahi_nonsupine` | Non-Supine AHI | `number` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Sleep Testing | `osa_plm_index` | PLM Index (if assessed) | `number` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Treatment | `osa_primary_treatment` | Primary Treatment | `select` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Treatment | `osa_cpap_pressure` | CPAP/APAP Pressure Setting (cmH2O) | `number` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Treatment | `osa_cpap_compliance` | CPAP Compliance (CMS: over 4h for 70% of nights in 30 days) | `select` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Treatment | `osa_cpap_ahi_on_therapy` | Residual AHI on CPAP (should be under 5) | `number` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Treatment | `osa_cpap_mask_type` | Mask Interface | `select` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Treatment | `osa_weight_management` | Weight Management | `select` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Treatment | `osa_treatment_response` | Symptom Response to Treatment | `select` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Treatment | `osa_comorbid_management` | Comorbid Management (hypertension, AFib, metabolic syndrome, depression - improved with CPAP) | `textarea` |  |  |  |
| Obstructive Sleep Apnea Evaluation | Treatment | `osa_notes` | Additional Notes | `textarea` |  |  |  |

### Sleep Study Interp — `sleep_study_interpretation_cf`

Screen: 1 page(s) · 3 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Polysomnography Interpretation | Sleep Architecture | `total_sleep_time` | Total Sleep Time (TST, min) | `number` |  |  |  |
| Polysomnography Interpretation | Sleep Architecture | `sleep_efficiency` | Sleep Efficiency (%) | `number` |  |  |  |
| Polysomnography Interpretation | Sleep Architecture | `sleep_onset_latency` | Sleep Onset Latency (min) | `number` |  |  |  |
| Polysomnography Interpretation | Sleep Architecture | `rem_latency` | REM Latency (min) | `number` |  |  |  |
| Polysomnography Interpretation | Sleep Architecture | `n1_pct` | N1 % (Light Sleep) | `number` |  |  |  |
| Polysomnography Interpretation | Sleep Architecture | `n2_pct` | N2 % (Core Sleep) | `number` |  |  |  |
| Polysomnography Interpretation | Sleep Architecture | `n3_pct` | N3 % (Slow-Wave/Deep) | `number` |  |  |  |
| Polysomnography Interpretation | Sleep Architecture | `rem_pct` | REM % | `number` |  |  |  |
| Polysomnography Interpretation | Respiratory Events | `ahi_total` | Total AHI (events/hr) | `number` |  |  |  |
| Polysomnography Interpretation | Respiratory Events | `ahi_supine` | AHI Supine (events/hr) | `number` |  |  |  |
| Polysomnography Interpretation | Respiratory Events | `ahi_nonsupine` | AHI Non-supine (events/hr) | `number` |  |  |  |
| Polysomnography Interpretation | Respiratory Events | `ahi_rem` | AHI REM (events/hr) | `number` |  |  |  |
| Polysomnography Interpretation | Respiratory Events | `obstructive_events` | Obstructive Apneas | `number` |  |  |  |
| Polysomnography Interpretation | Respiratory Events | `central_events` | Central Apneas | `number` |  |  |  |
| Polysomnography Interpretation | Respiratory Events | `hypopneas` | Hypopneas | `number` |  |  |  |
| Polysomnography Interpretation | Respiratory Events | `nadir_o2` | Nadir SpO2 (%) | `number` |  |  |  |
| Polysomnography Interpretation | Respiratory Events | `time_below_90` | Time SpO2 <90% (min) | `number` |  |  |  |
| Polysomnography Interpretation | Diagnosis and Severity | `osa_severity` | OSA Severity (AHI-based) | `select` |  |  |  |
| Polysomnography Interpretation | Diagnosis and Severity | `additional_findings` | Additional Findings (PLMS, parasomnia, UARS) | `textarea` |  |  |  |
| Polysomnography Interpretation | Diagnosis and Severity | `treatment_recommendation` | Recommended Treatment | `select` |  |  |  |

## Colorectal Surgery

### Anorectal Conditions — `colorectal_anorectal_cf`

Screen: 1 page(s) · 3 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Anorectal Conditions Evaluation and Treatment | Primary Anorectal Diagnosis | `diagnosis` | Anorectal Condition | `select` |  |  |  |
| Anorectal Conditions Evaluation and Treatment | Anorectal Examination | `digital_rectal` | Digital Rectal Exam (sphincter tone, lesion, palpable mass, blood on glove, prostate in males) | `text` |  |  |  |
| Anorectal Conditions Evaluation and Treatment | Anorectal Examination | `anoscopy` | Anoscopy / Proctoscopy Findings (hemorrhoid location and grade, fissure visualization, polyp at anorectal junction) | `text` |  |  |  |
| Anorectal Conditions Evaluation and Treatment | Anorectal Examination | `wexner_score` | Wexner Fecal Incontinence Score (0-20; 0 = perfect continence; 20 = complete incontinence) | `number` |  |  |  |
| Anorectal Conditions Evaluation and Treatment | Treatment Plan | `initial_treatment` | Conservative / Office Treatment (dietary fiber, sitz baths, topical medications, rubber band ligation, injection sclerotherapy) | `textarea` |  |  |  |
| Anorectal Conditions Evaluation and Treatment | Treatment Plan | `surgical_plan` | Surgical Plan (procedure, approach, anesthesia type, post-op plan, expected recovery — bowel regimen, wound care, pain management) | `text` |  |  |  |

### Colon Cancer (ERAS / MSI Testing) — `surgery_colorectal_colon_cancer_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Colon Cancer — Staging, Adjuvant Chemo, MSI, and ERAS | Staging and Molecular Testing | `ajcc_colon` | AJCC 8th Colon Cancer Staging (Stage I: T1-2 N0 M0; Stage II: T3-4 N0 M0 (A=T3, B=T4a, C=T4b); Stage III: any T N1-2 M0; Stage IV: any M1; N1a: 1 LN; N1b: 2-3 LN; N2a: 4-6 LN; N2b: >=7 LN; preoperative workup: CT chest/abdomen/pelvis (staging + extent); CEA baseline (prognosis + follow-up); colonoscopy synchronous lesions; LAPAROSCOPIC preferred when possible (equivalent oncologic outcomes; COST/CLASSIC trials; faster recovery); MSI/MMR testing: universal tumor testing for ALL stage II-IV colon cancer; KRAS/NRAS (exons 2-4): for metastatic CRC (anti-EGFR therapy decision); BRAF V600E: prognostic + therapeutic; HER2 amplification: emerging target; RAS wild-type + BRAF V600E: different prognosis (worst) — BRAF-MEK combo (BEACON-CRC) | `text` |  |  |  |
| Colon Cancer — Staging, Adjuvant Chemo, MSI, and ERAS | Staging and Molecular Testing | `msi_testing` | MSI/MMR Testing and Treatment Implications | `select` |  |  |  |
| Colon Cancer — Staging, Adjuvant Chemo, MSI, and ERAS | ERAS Protocol and Adjuvant Chemotherapy | `eras_protocol` | ERAS (Enhanced Recovery After Surgery) Protocol (ERAS Society 2023 for colorectal surgery; PREOPERATIVE: carbohydrate loading 400 mL clear carbs 2-3h before surgery; preoperative oral antibiotics + mechanical bowel prep for elective colon (Nyehus/PREVENT trial); avoid prolonged fasting; no sedative premedication; prehabilitation for deconditioned patients; INTRAOPERATIVE: epidural or TAP block; minimize opioids (opioid-sparing: ketorolac, acetaminophen, dexamethasone); laparoscopic/robotic preferred; goal-directed fluid therapy (GDFT — stroke volume optimization); normal temperature; avoid bowel prep for right hemicolectomy (COREAN/COLONPREV); POSTOPERATIVE: multimodal analgesia (no IV opioids if possible); early oral feeding POD0-1; early ambulation; VTE prophylaxis (SQ heparin or LMWH + compression stockings); early catheter removal POD1; no routine NG tube; oral laxatives) | `text` |  |  |  |
| Colon Cancer — Staging, Adjuvant Chemo, MSI, and ERAS | ERAS Protocol and Adjuvant Chemotherapy | `adjuvant_chemo` | Adjuvant Chemotherapy Indications | `select` |  |  |  |

### Colorectal Pre-Op — `colorectal_surgery_preop_cf`

Screen: 1 page(s) · 3 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Colorectal Surgery Pre-Operative Evaluation | Surgical Indication | `indication` | Primary Indication | `select` |  |  |  |
| Colorectal Surgery Pre-Operative Evaluation | Surgical Indication | `staging` | CRC Staging (TNM 8th edition; T1-4, N0-2, M0-1; MRI rectum for T3-4 or N1-2; CT C/A/P for systemic staging) | `text` |  |  |  |
| Colorectal Surgery Pre-Operative Evaluation | Bowel Preparation and ERAS | `bowel_prep` | Bowel Preparation Protocol | `select` |  |  |  |
| Colorectal Surgery Pre-Operative Evaluation | Bowel Preparation and ERAS | `eras_elements` | ERAS Protocol Elements (preoperative: carbohydrate loading 2h before; intraoperative: TAP block, minimize fluids, normothermia; postoperative: early ambulation, early oral feeds, VTE prophylaxis, limit opioids) | `textarea` |  |  |  |
| Colorectal Surgery Pre-Operative Evaluation | Stoma Counseling (If Applicable) | `stoma_planned` | Stoma Type and Timing | `select` |  |  |  |
| Colorectal Surgery Pre-Operative Evaluation | Stoma Counseling (If Applicable) | `stoma_education` | WOC nurse (wound-ostomy-continence) consultation completed; stoma site marked preoperatively; appliance selection education | `checkbox` |  |  |  |

### Hernia Evaluation — `general_surgery_hernia_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hernia Evaluation and Repair Consultation | Hernia Classification | `type` | Hernia Type | `select` |  |  |  |
| Hernia Evaluation and Repair Consultation | Hernia Classification | `reducible` | Reducibility | `select` |  |  |  |
| Hernia Evaluation and Repair Consultation | Repair Strategy | `approach` | Surgical Approach | `select` |  |  |  |
| Hernia Evaluation and Repair Consultation | Repair Strategy | `mesh_type` | Mesh Type (synthetic polypropylene vs. biologic; lightweight vs. heavyweight; positioning — onlay, inlay, sublay/retromuscular, IPOM) | `text` |  |  |  |
| Hernia Evaluation and Repair Consultation | Repair Strategy | `recurrence_risk` | Recurrence Risk Factors Addressed (obesity, smoking cessation, constipation avoidance, occupational restrictions, wound healing optimization) | `text` |  |  |  |

### IBD Management — `colorectal_ibd_followup_cf`

Screen: 1 page(s) · 3 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Inflammatory Bowel Disease Management | Disease Activity | `ibd_type` | IBD Type | `select` |  |  |  |
| Inflammatory Bowel Disease Management | Disease Activity | `uc_score` | UC Activity (Mayo Score or Simple Clinical Colitis Activity Index) | `select` |  |  |  |
| Inflammatory Bowel Disease Management | Disease Activity | `cdai` | CDAI (Crohn Disease Activity Index; remission <150; mild 150-220; moderate 220-450; severe >450) | `number` |  |  |  |
| Inflammatory Bowel Disease Management | Biologic and Advanced Therapy | `current_therapy` | Current IBD Therapy | `select` |  |  |  |
| Inflammatory Bowel Disease Management | Biologic and Advanced Therapy | `drug_levels` | Biologic Drug Levels and Antibodies (trough: infliximab >3-7 ug/mL; adalimumab >7.5 ug/mL; ADA antibodies if subtherapeutic) | `text` |  |  |  |
| Inflammatory Bowel Disease Management | Complications and Monitoring | `extraintestinal` | Extraintestinal Manifestations (joints: sacroiliitis/peripheral arthritis; skin: pyoderma gangrenosum/EN; eyes: episcleritis/uveitis; PSC; anemia; VTE risk — IBD is prothrombotic) | `textarea` |  |  |  |
| Inflammatory Bowel Disease Management | Complications and Monitoring | `colonoscopy_surveillance` | Dysplasia surveillance colonoscopy on schedule (UC/Crohn colitis >8-10 years duration: colonoscopy every 1-3 years; annual if high-risk — PSC, extensive colitis, prior dysplasia) | `checkbox` |  |  |  |

### Lynch Syndrome / Polyposis Surveillance — `colorectal_surgery_lynch_syndrome_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lynch Syndrome and Polyposis — Genetics, Surveillance, and Surgery | Lynch Syndrome Diagnosis and Surveillance | `lynch_dx` | Lynch Syndrome Diagnosis (Amsterdam II criteria: 3+ relatives CRC/Lynch cancers in 2+ generations, 1 first-degree relative, >=1 before age 50, FAP excluded; Bethesda guidelines trigger IHC/MSI testing; universal tumor screening (UTS): IHC for MMR proteins (MLH1/MSH2/MSH6/PMS2) on ALL CRC specimens regardless of age (ACS 2022, ASCO); MSI-H (high microsatellite instability) triggers germline testing; BRAF V600E mutation + MLH1 loss = sporadic methylation (not Lynch — no germline testing needed); Lynch genes: MLH1 (CRC risk 52-82%), MSH2, MSH6, PMS2; MSH2 mutations: extracolonic cancers; EPCAM deletion (upstream MSH2)) | `text` |  |  |  |
| Lynch Syndrome and Polyposis — Genetics, Surveillance, and Surgery | Lynch Syndrome Diagnosis and Surveillance | `lynch_surveillance` | Lynch Syndrome Cancer Surveillance | `select` |  |  |  |
| Lynch Syndrome and Polyposis — Genetics, Surveillance, and Surgery | FAP and MUTYH-Associated Polyposis | `fap` | Familial Adenomatous Polyposis (FAP) (APC gene; >100 adenomatous polyps; 100% CRC risk by age 40 without surgery; attenuated FAP (AFAP): 10-99 polyps, later onset; Gardner syndrome: FAP + extracolonic (desmoid, osteomas, dental); Turcot: FAP + brain tumors; surveillance: sigmoidoscopy/colonoscopy starting age 10-12 for FAP; duodenoscopy (Spigelman staging I-IV) for duodenal polyps (lifetime risk 4-10% duodenal cancer); prophylactic colectomy: typically age 15-25 or when polyps too numerous to control; procedure: IPAA (ileal pouch-anal anastomosis) — preferred; IRA if rectal sparing; sulindac + celecoxib: reduce polyp burden but not CRC prevention; desmoid: sulindac + tamoxifen; imatinib for progressing desmoids) | `text` |  |  |  |
| Lynch Syndrome and Polyposis — Genetics, Surveillance, and Surgery | FAP and MUTYH-Associated Polyposis | `mutyh` | MUTYH-Associated Polyposis (MAP) | `select` |  |  |  |

### Ostomy Management — `colorectal_ostomy_management_cf`

Screen: 1 page(s) · 3 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Ostomy Assessment and Management | Stoma Assessment | `ostomy_type` | Ostomy Type | `select` |  |  |  |
| Ostomy Assessment and Management | Stoma Assessment | `stoma_appearance` | Stoma Appearance | `select` |  |  |  |
| Ostomy Assessment and Management | Stoma Assessment | `peristomal_skin` | Peristomal Skin Condition | `select` |  |  |  |
| Ostomy Assessment and Management | Ostomy Output | `daily_output` | Daily Output (mL; ileostomy normal: 500-1200 mL; high output >1500 mL = risk of dehydration) | `number` |  |  |  |
| Ostomy Assessment and Management | Ostomy Output | `high_output_management` | High Ostomy Output Management (loperamide 2-4 mg before meals, psyllium, oral rehydration solution, restrict hypotonic fluids; consider octreotide or codeine if refractory) | `textarea` |  |  |  |
| Ostomy Assessment and Management | Patient Education | `appliance_change` | Appliance change technique demonstrated (1-piece vs. 2-piece; empty bag when 1/3-1/2 full; change every 3-7 days or as needed) | `checkbox` |  |  |  |
| Ostomy Assessment and Management | Patient Education | `diet_counseling` | Dietary Counseling (avoid blockage foods: nuts, corn, popcorn, raw celery for first 6-8 weeks; gas-reducing foods; adequate hydration 2-3 L/day) | `textarea` |  |  |  |

### Rectal Cancer Surgery — `colorectal_surgery_rectal_cancer_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Rectal Cancer — Neoadjuvant and Surgical Planning | Staging and MRI Assessment | `tumor_characteristics` | MRI Tumor Characteristics | `select` |  |  |  |
| Rectal Cancer — Neoadjuvant and Surgical Planning | Staging and MRI Assessment | `msimmc` | MMR/MSI Status | `select` |  |  |  |
| Rectal Cancer — Neoadjuvant and Surgical Planning | Surgical Approach | `procedure` | Planned Surgical Procedure | `select` |  |  |  |
| Rectal Cancer — Neoadjuvant and Surgical Planning | Surgical Approach | `robotic_laparoscopic` | Minimally Invasive Approach (Robotic TME superior pelvic visualization; narrowing pelvis ergonomics; ROLARR trial: conversion rate lower robotic vs. laparoscopic; reduced blood loss; comparable oncologic outcomes; structured robotic TME training required; cost consideration; open TME for emergent or unresectable) | `text` |  |  |  |

## Gynecology

### Chronic Pelvic Pain — `gynecology_chronic_pelvic_pain_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Pelvic Pain and Endometriosis — Diagnosis, Medical and Surgical Management | Chronic Pelvic Pain Differential Diagnosis and Evaluation | `cpp_f1` | Chronic Pelvic Pain Evaluation: DEFINITION (PELVIC PAIN LASTING OVER 6 MONTHS; BELOW UMBILICUS; NOT EXCLUSIVELY RELATED TO MENSTRUATION INTERCOURSE BOWEL; ASSOCIATED FUNCTIONAL IMPAIRMENT; EPIDEMIOLOGY (15-20 pct REPRODUCTIVE AGE WOMEN; MAJOR CAUSE DISABILITY; UNDERDIAGNOSED UNDER-TREATED; DIFFERENTIAL DIAGNOSIS (GYNECOLOGIC: ENDOMETRIOSIS MOST COMMON; ADENOMYOSIS; OVARIAN CYSTS; FIBROIDS LEIOMYOMA; PELVIC INFLAMMATORY DISEASE; PELVIC VENOUS CONGESTION; REMNANT OVARY SYNDROME; NON-GYNECOLOGIC: IRRITABLE BOWEL SYNDROME IBS 50 pct OVERLAP; INTERSTITIAL CYSTITIS PAINFUL BLADDER SYNDROME IC PBS; MUSCULOSKELETAL: PELVIC FLOOR DYSFUNCTION MYOFASCIAL; NEUROLOGIC: PUDENDAL NEURALGIA; ILIOINGUINAL ILIOHYPOGASTRIC NERVE; PSYCHOLOGICAL: DEPRESSION ANXIETY SOMATIC SYMPTOMS; TRAUMA HISTORY ABUSE; ENDOMETRIOSIS (MOST COMMON CAUSE CHRONIC PELVIC PAIN; 10 pct REPRODUCTIVE AGE WOMEN; ENDOMETRIAL GLANDS STROMA OUTSIDE UTERUS; PERITONEUM OVARIES OVARIAN ENDOMETRIOMA CHOCOLATE CYSTS; DEEP INFILTRATING ENDOMETRIOSIS DIE BLADDER BOWEL URETERS; STAGING I-IV REVISED ASRM NOT CORRELATE PAIN; SYMPTOMS: DYSMENORRHEA DYSPAREUNIA DYSCHEZIA; INFERTILITY ASSOCIATED; DIAGNOSIS CLINICAL OFTEN; LAPAROSCOPY GOLD STANDARD; CA-125 ELEVATED SOME NOT DIAGNOSTIC; ULTRASOUND ENDOMETRIOMAS; MRI DEEP INFILTRATING; ADENOMYOSIS (ENDOMETRIAL GLANDS UTERINE MYOMETRIUM; HEAVY PAINFUL PERIODS; ENLARGED GLOBULAR UTERUS; MRI SENSITIVE DIAGNOSIS; HYSTERECTOMY DEFINITIVE; MEDICAL HORMONAL TEMPORIZE) | `text` |  |  |  |
| Chronic Pelvic Pain and Endometriosis — Diagnosis, Medical and Surgical Management | Chronic Pelvic Pain Differential Diagnosis and Evaluation | `cpp_f2` | Medical and Surgical Treatment of Endometriosis | `select` |  |  |  |

### Endometriosis (Medical Mgmt) — `gynecology_endometriosis_medical_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Endometriosis — Staging, Medical Treatment, and Fertility | ASRM Staging and Diagnosis | `asrm_staging` | ASRM Staging and Diagnosis | `select` |  |  |  |
| Endometriosis — Staging, Medical Treatment, and Fertility | ASRM Staging and Diagnosis | `symptom_assessment` | Symptom Assessment (3 D symptoms: Dysmenorrhea + Dyspareunia + Dyschezia; CPP (chronic pelvic pain); infertility; pain scoring: NRS 0-10; menstrual calendar; impact on QOL (EHP-30 questionnaire); symptom duration (average 7-10 years to diagnosis); DIFFERENTIAL: adenomyosis (US: globular uterus, junctional zone >12 mm), interstitial cystitis, IBS, pelvic inflammatory disease, myofascial pain; COMORBID: IBS-endometriosis overlap 30%; chronic fatigue; anxiety/depression; central sensitization component) | `text` |  |  |  |
| Endometriosis — Staging, Medical Treatment, and Fertility | Medical Management and Fertility | `medical_mgmt` | Medical Management Ladder (ESHRE 2022/ACOG 2022; STEP 1: NSAIDs + hormonal contraceptives (combined OCP or progestin-only); combined OCP: continuous (skip periods) reduces dysmenorrhea; STEP 2: progestins (norethindrone acetate 5-15 mg QD; medroxyprogesterone acetate 10-30 mg QD; etonogestrel implant; LNG-IUS — Mirena; desogestrel-only pill; bone density concern with long-term); STEP 3: GnRH AGONIST (leuprolide 3.75 mg monthly or 11.25 mg Q3M; nafarelin nasal; goserelin implant; MEDICAL MENOPAUSE: hot flushes, bone loss — add-back therapy essential: norethindrone 5 mg QD or E2 + progestin; LIMIT without add-back: 6 months; with add-back: up to 2 years; STEP 4: GnRH ANTAGONIST (elagolix (Orilissa): 150 mg QD or 200 mg BID; oral; dose-dependent bone density loss; LINZAGOLIX + RELUGOLIX in development; dienogest 2 mg QD: progestin; preferred in Europe; bone-sparing vs. GnRH agonist) | `text` |  |  |  |
| Endometriosis — Staging, Medical Treatment, and Fertility | Medical Management and Fertility | `fertility` | Fertility and Surgical Decision | `select` |  |  |  |

### Endometriosis Surgical/Medical — `gynecology_endometriosis_surgical_cf`

Screen: 1 page(s) · 3 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Endometriosis — Surgical Staging and Medical Suppression | ASRM Staging and Phenotype | `asrm_stage` | ASRM Stage (Revised Classification) | `select` |  |  |  |
| Endometriosis — Surgical Staging and Medical Suppression | ASRM Staging and Phenotype | `symptoms` | Symptom Profile (dysmenorrhea: NRS/VAS; dyspareunia: deep vs. superficial; dyschezia (painful defecation); dysuria; pelvic pain cyclic vs. acyclic; infertility; fatigue; bowel symptoms (constipation/diarrhea); BIS (Biberoglu and Behrman Index); EHP-30 quality of life; "symptom island" mapping; pain diary) | `text` |  |  |  |
| Endometriosis — Surgical Staging and Medical Suppression | Medical Suppression | `hormonal_therapy` | Hormonal Suppression Agent | `select` |  |  |  |
| Endometriosis — Surgical Staging and Medical Suppression | Surgical Planning | `surgical_intent` | Surgical Goal | `select` |  |  |  |

### Infertility — `gynecology_infertility_evaluation_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Infertility Evaluation | Workup and Treatment | `inf_f1` | Infertility: No Conception After 12 Months Regular Unprotected Intercourse; EVALUATE AT 6 MONTHS: Over 35; Known Uterine/Tubal/Ovarian Disease; Known MFI; FEMALE WORKUP: Day 3 FSH and E2 (Ovarian Reserve; FSH Over 10 Diminished); AMH (Diminished Under 1.0 ng/mL); Antral Follicle Count US; Progesterone Day 21 (Confirms Ovulation); HSG (Tubal Patency; Uterine Anatomy); Pelvic US; MALE WORKUP: Semen Analysis First Step (Volume; Count; Motility; Morphology Kruger; Azoospermia = Refer Urology); CAUSES: Ovulatory 25%; Tubal/Peritoneal 25%; MFI 20%; Unexplained 25%; Uterine 5% | `text` |  |  |  |
| Infertility Evaluation | Workup and Treatment | `inf_f2` | ART and Ovulation Induction | `select` |  |  |  |

### Menopause — `gynecology_menopause_hormone_therapy_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Menopause and Perimenopause — Hormone Therapy, Vasomotor Symptoms, and Long-Term Health | Menopause Definition, Symptoms, and Diagnosis | `meno_f1` | Menopause Evaluation: DEFINITION (CESSATION MENSES 12 CONSECUTIVE MONTHS; AVERAGE AGE 51 US 49-52 RANGE; PERIMENOPAUSE: 4-8 YEARS PRIOR MENOPAUSE; VARIABLE CYCLES; PREMATURE MENOPAUSE UNDER 40: PRIMARY OVARIAN INSUFFICIENCY; SURGICAL MENOPAUSE: BILATERAL OOPHORECTOMY ANY AGE; SYMPTOMS (VASOMOTOR: HOT FLUSHES NIGHT SWEATS; MOST COMMON 75-80 pct; DURATION 7-10 YEARS MEDIAN LONGER SOME; SEVERE IN 25 pct; GENITOURINARY SYNDROME GSM: VULVAR VAGINAL DRYNESS ATROPHY; DYSPAREUNIA PAIN; URINARY URGENCY FREQUENCY; PREVIOUSLY CALLED ATROPHIC VAGINITIS; SLEEP DISTURBANCE; MOOD IRRITABILITY DEPRESSION; COGNITIVE COMPLAINTS BRAIN FOG; SEXUAL DYSFUNCTION; MUSCULOSKELETAL JOINT PAIN STIFFNESS; ASSESSMENT (FSH LH ELEVATED POST-MENOPAUSAL OVER 40 IU/L; ESTRADIOL LOW; DRAW DAY 3 CYCLE PERIMENOPAUSE; AMH ANTI-MULLERIAN: NOT ROUTINE MENOPAUSE DIAGNOSIS; MRS MENOPAUSE RATING SCALE; MENOPAUSE-SPECIFIC QUALITY OF LIFE QUESTIONNAIRE; GREEN CLIMACTERIC SCALE; LONG-TERM HEALTH RISKS (CARDIOVASCULAR DISEASE: ACCELERATES POST-MENOPAUSE; ESTROGEN PROTECTIVE PRE-MENOPAUSE; OSTEOPOROSIS: RAPID BONE LOSS FIRST 5 YEARS; GENITOURINARY ATROPHY PROGRESSIVE; SEXUAL FUNCTION DECLINE; COGNITIVE RISK DEMENTIA MODEST ELEVATION POST-MENOPAUSE; TYPE 2 DIABETES INSULIN RESISTANCE; WEIGHT GAIN VISCERAL ADIPOSITY) | `text` |  |  |  |
| Menopause and Perimenopause — Hormone Therapy, Vasomotor Symptoms, and Long-Term Health | Menopause Definition, Symptoms, and Diagnosis | `meno_f2` | Hormone Therapy and Non-Hormonal Treatments | `select` |  |  |  |

### Menopause and HRT — `gynecology_menopause_hrt_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Menopause | Menopause and Hormone Therapy | `meno_f1` | Menopause: No Menses 12M; FSH Over 40 + E2 Under 30; PERIMENOPAUSE: Irregular Cycles; SYMPTOMS: Hot Flashes; Night Sweats; GSM Vaginal Dryness Dyspareunia; Sleep; Mood; BONE LOSS: 2%/Year; Estrogen Protective; TIMING HYPOTHESIS: Cardioprotective Under 60 or Within 10Y Menopause; After 10Y Higher CV Risk; CONTRAINDICATIONS: Breast Cancer; CAD; Stroke; DVT/PE; Unexplained Vaginal Bleeding; Liver Disease; POI Under 40: HRT Until Average Menopause Age 51 | `text` |  |  |  |
| Menopause | Menopause and Hormone Therapy | `meno_f2` | HRT and Non-Hormonal Options | `select` |  |  |  |

### PCOS — `gynecology_pcos_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Polycystic Ovary Syndrome PCOS — Rotterdam Criteria, Metabolic Management, and Fertility | PCOS Diagnostic Criteria, Phenotypes, and Pathophysiology | `pcos_f1` | PCOS Evaluation: EPIDEMIOLOGY (5-20 pct REPRODUCTIVE AGE WOMEN; MOST COMMON ENDOCRINE DISORDER WOMEN; MAJOR CAUSE ANOVULATORY INFERTILITY; DIAGNOSTIC ROTTERDAM CRITERIA 2003 (2 OF 3: OLIGO-ANOVULATION IRREGULAR PERIODS; CLINICAL Or BIOCHEMICAL HYPERANDROGENISM; POLYCYSTIC MORPHOLOGY PCOS ULTRASOUND; EXCLUDE SECONDARY CAUSES: THYROID CUSHING CAH 21-HYDROXYLASE; PHENOTYPES (PHENOTYPE A: ALL 3 FEATURES CLASSIC; PHENOTYPE B: HYPERANDROGENISM ANOVULATION NO PCO; PHENOTYPE C: HYPERANDROGENISM PLUS PCO NO ANOVULATION; PHENOTYPE D: ANOVULATION PLUS PCO NO HYPERANDROGENISM MILD; PHENOTYPE A B WORST METABOLIC; PATHOPHYSIOLOGY (INSULIN RESISTANCE 70-80 pct PCOS; COMPENSATORY HYPERINSULINEMIA; INSULIN STIMULATES OVARIAN ANDROGEN; AUGMENTS LH STIMULATION THECA CELLS; REDUCED SHBG LIVER INCREASES FREE ANDROGEN; HYPOTHALAMIC: INCREASED LH PULSE; HIGH LH:FSH RATIO; RELATIVE FSH DEFICIENCY; FOLLICULAR ARREST MATURATION FAILURE; CLINICAL FEATURES (MENSTRUAL IRREGULARITY: OLIGOMENORRHEA AMENORRHEA; HYPERANDROGENISM: HIRSUTISM ACNE ALOPECIA; FERTILITY CHALLENGES; METABOLIC: OVERWEIGHT OBESITY 50-80 pct; INSULIN RESISTANCE; GLUCOSE INTOLERANCE DIABETES 30 pct; CARDIOVASCULAR RISK; POLYCYSTIC OVARIES ULTRASOUND: OVER 20 FOLLICLES 2-9mm; Or OVARIAN VOLUME OVER 10 mL; ANTI-MULLERIAN HORMONE AMH: ELEVATED MARKER ANTRAL FOLLICLE COUNT) | `text` |  |  |  |
| Polycystic Ovary Syndrome PCOS — Rotterdam Criteria, Metabolic Management, and Fertility | PCOS Diagnostic Criteria, Phenotypes, and Pathophysiology | `pcos_f2` | Metabolic Management Androgen and Fertility Treatment | `select` |  |  |  |

### Uterine Fibroids — `gynecology_uterine_fibroids_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Uterine Fibroids — Assessment and Management | Symptom Assessment and Classification | `symptom_burden` | Primary Symptom | `select` |  |  |  |
| Uterine Fibroids — Assessment and Management | Symptom Assessment and Classification | `fibroid_size` | Fibroid Characteristics (document: number, location, size in cm, FIGO classification for submucosal; dominant fibroid vs. multiple; uterine size (cm or weeks equivalent); relationship to endometrial cavity and serosa; vascularity on US or MRI; signal characteristics on T2: low-signal hypercellular vs. heterogeneous with degeneration; degeneration types: hyaline (most common), cystic, myxoid, red (carneous — painful, pregnancy), calcified) | `text` |  |  |  |
| Uterine Fibroids — Assessment and Management | Medical and Procedural Treatment | `medical` | Medical Treatment | `select` |  |  |  |
| Uterine Fibroids — Assessment and Management | Medical and Procedural Treatment | `procedural` | Procedural and Surgical Options | `select` |  |  |  |

## Occupational Medicine

### DOT Physical — `dot_physical_cf`

Screen: 1 page(s) · 4 section(s) · 18 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Vitals | `bp` | Blood Pressure (mmHg) | `text` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Vitals | `pulse` | Pulse (bpm) | `number` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Vitals | `weight_lbs` | Weight (lbs) | `number` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Vitals | `height_in` | Height (inches) | `number` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Vision and Hearing | `vision_right_corrected` | Vision OD (corrected) | `text` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Vision and Hearing | `vision_left_corrected` | Vision OS (corrected) | `text` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Vision and Hearing | `vision_binocular` | Vision OU (binocular — must be ≥20/40 corrected) | `text` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Vision and Hearing | `vision_meets_standard` | Vision meets DOT standard (≥20/40 in each eye corrected) | `checkbox` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Vision and Hearing | `hearing_whisper_right` | Hearing — forced whisper distance OD (must be ≥5 ft) | `text` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Vision and Hearing | `hearing_whisper_left` | Hearing — forced whisper distance OS | `text` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Vision and Hearing | `hearing_meets_standard` | Hearing meets DOT standard (≥5 ft forced whisper or audiometry pass) | `checkbox` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Regulatory Review (49 CFR 391.41) | `cardiovascular` | Cardiovascular (no current cardiac conditions precluding safe driving) | `select` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Regulatory Review (49 CFR 391.41) | `bp_category` | BP Certification Category | `select` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Regulatory Review (49 CFR 391.41) | `diabetes_insulin` | Insulin-treated ITDM — under FMCSA diabetes exemption program | `checkbox` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Regulatory Review (49 CFR 391.41) | `seizure_epilepsy` | Seizure / Epilepsy | `select` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Regulatory Review (49 CFR 391.41) | `obstructive_sleep_apnea` | Sleep Apnea (if known) | `select` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Medical Certificate | `certification_decision` | Certification Decision | `select` |  |  |  |
| DOT Commercial Driver Physical Examination (49 CFR Part 391.41) | Medical Certificate | `notes` | Examiner Notes / Conditions / Waivers | `textarea` |  |  |  |

### DOT Physical Examination — `occ_health_dot_physical_cf`

Screen: 1 page(s) · 4 section(s) · 23 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Driver and Examination Information | `dot_cdl_class` | CDL Class | `select` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Driver and Examination Information | `dot_exam_type` | Examination Type | `select` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Driver and Examination Information | `dot_medications` | Current Medications (list all — critical for DOT qualification: opioids, seizure meds, insulin, psychiatric meds) | `textarea` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Driver and Examination Information | `dot_conditions` | Driver-Reported Disqualifying Condition History | `select` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Vital Signs and Vision Testing | `dot_bp_sitting` | Blood Pressure (seated, mmHg) | `text` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Vital Signs and Vision Testing | `dot_bp_category` | BP DOT Category and Action | `select` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Vital Signs and Vision Testing | `dot_hr` | Heart Rate (bpm) | `text` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Vital Signs and Vision Testing | `dot_weight` | Weight (lbs) | `text` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Vital Signs and Vision Testing | `dot_bmi` | BMI | `text` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Vital Signs and Vision Testing | `dot_vision_distant` | Distant Visual Acuity (both eyes, with correction if worn) | `select` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Vital Signs and Vision Testing | `dot_vision_field` | Field of Vision | `select` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Vital Signs and Vision Testing | `dot_color_vision` | Color Vision (traffic signal recognition) | `select` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Vital Signs and Vision Testing | `dot_hearing` | Hearing Standard | `select` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Systems Examination | `dot_cardiac_exam` | Cardiovascular Examination | `select` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Systems Examination | `dot_pulmonary_exam` | Pulmonary Examination | `select` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Systems Examination | `dot_neuro_exam` | Neurological Examination | `select` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Systems Examination | `dot_musculoskeletal` | Musculoskeletal / Ability to Control Vehicle | `select` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Systems Examination | `dot_diabetes_detail` | Diabetes Status (Insulin-Using Drivers) | `select` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Systems Examination | `dot_medications_disqualifying` | Potentially Disqualifying Medications | `select` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Medical Examiner Decision | `dot_qualification` | Medical Qualification Decision | `select` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Medical Examiner Decision | `dot_conditions_monitored` | Conditions Monitored and Requirements for Future Certification (if not full 2-year cert) | `textarea` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Medical Examiner Decision | `dot_restrictions` | Restrictions on Medical Certificate (e.g., must wear corrective lenses, must use hearing aid, SPE required) | `textarea` |  |  |  |
| DOT Physical Examination (FMCSA CMV Driver Medical Evaluation) | Medical Examiner Decision | `dot_notes` | Medical Examiner Notes and Rationale | `textarea` |  |  |  |

### Fitness for Duty — `fitness_for_duty_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Fitness for Duty Evaluation | Evaluation Context | `referral_reason` | Reason for FFD Evaluation | `select` |  |  |  |
| Fitness for Duty Evaluation | Evaluation Context | `job_physical_demands` | Job Physical Demand Level (US DOL) | `select` |  |  |  |
| Fitness for Duty Evaluation | Medical Assessment | `functional_limitations` | Functional Limitations Identified | `textarea` |  |  |  |
| Fitness for Duty Evaluation | Medical Assessment | `safety_concerns` | Safety Concerns (if any) | `textarea` |  |  |  |
| Fitness for Duty Evaluation | Medical Assessment | `prognosis` | Prognosis for Return | `select` |  |  |  |
| Fitness for Duty Evaluation | Certification | `restrictions` | Restrictions / Accommodations Required | `textarea` |  |  |  |
| Fitness for Duty Evaluation | Certification | `recheck_date` | Follow-Up / Recheck Date (if applicable) | `date` |  |  |  |
| Fitness for Duty Evaluation | Certification | `notes` | Clinical Notes / Summary | `textarea` |  |  |  |

### Occupational Spirometry — `spirometry_occupational_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Occupational Spirometry | Occupational Exposure | `industry` | Industry / Job Title | `text` |  |  |  |
| Occupational Spirometry | Occupational Exposure | `exposure_type` | Primary Pulmonary Hazard Exposure | `select` |  |  |  |
| Occupational Spirometry | Occupational Exposure | `years_exposed` | Years of Exposure | `number` |  |  |  |
| Occupational Spirometry | Occupational Exposure | `ppe_used` | Respiratory PPE used (N95 / half-face / PAPR) | `checkbox` |  |  |  |
| Occupational Spirometry | Spirometry Results | `fvc` | FVC (L) | `number` |  |  |  |
| Occupational Spirometry | Spirometry Results | `fvc_pct_pred` | FVC % Predicted | `number` |  |  |  |
| Occupational Spirometry | Spirometry Results | `fev1` | FEV1 (L) | `number` |  |  |  |
| Occupational Spirometry | Spirometry Results | `fev1_pct_pred` | FEV1 % Predicted | `number` |  |  |  |
| Occupational Spirometry | Spirometry Results | `fev1_fvc` | FEV1/FVC Ratio | `number` |  |  |  |
| Occupational Spirometry | Spirometry Results | `pattern` | Spirometry Pattern | `select` |  |  |  |
| Occupational Spirometry | Interpretation and Fitness Determination | `meets_osha_medical_removal` | OSHA Medical Removal Criteria (if applicable) | `select` |  |  |  |
| Occupational Spirometry | Interpretation and Fitness Determination | `trend_change` | Significant longitudinal decline noted (>15% decrease from baseline) | `checkbox` |  |  |  |
| Occupational Spirometry | Interpretation and Fitness Determination | `notes` | Physician Interpretation / Recommendations | `textarea` |  |  |  |

### Work Injury Eval — `work_injury_evaluation_cf`

Screen: 1 page(s) · 4 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Work-Related Injury / Illness Evaluation | Injury / Exposure Details | `date_of_injury` | Date of Injury / Exposure | `date` |  |  |  |
| Work-Related Injury / Illness Evaluation | Injury / Exposure Details | `employer` | Employer Name | `text` |  |  |  |
| Work-Related Injury / Illness Evaluation | Injury / Exposure Details | `job_title` | Job Title / Department | `text` |  |  |  |
| Work-Related Injury / Illness Evaluation | Injury / Exposure Details | `mechanism` | Mechanism / Nature of Injury | `select` |  |  |  |
| Work-Related Injury / Illness Evaluation | Injury / Exposure Details | `body_part` | Body Part(s) Affected | `text` |  |  |  |
| Work-Related Injury / Illness Evaluation | Work Status and Restrictions | `work_status` | Work Status | `select` |  |  |  |
| Work-Related Injury / Illness Evaluation | Work Status and Restrictions | `restrictions` | Work Restrictions (lifting limit lbs, no overhead, etc.) | `textarea` |  |  |  |
| Work-Related Injury / Illness Evaluation | Work Status and Restrictions | `return_to_work_date` | Anticipated Return to Full Duty | `date` |  |  |  |
| Work-Related Injury / Illness Evaluation | Workers' Compensation | `wc_claim_opened` | Workers' compensation claim opened | `checkbox` |  |  |  |
| Work-Related Injury / Illness Evaluation | Workers' Compensation | `claim_number` | Claim Number (if known) | `text` |  |  |  |
| Work-Related Injury / Illness Evaluation | Workers' Compensation | `authorized_treatment` | Treatment authorized by insurer | `checkbox` |  |  |  |
| Work-Related Injury / Illness Evaluation | Workers' Compensation | `mme_disability` | Maximum Medical Improvement (MMI) Status | `select` |  |  |  |
| Work-Related Injury / Illness Evaluation | Plan | `treatment_plan` | Treatment Plan / Referrals | `textarea` |  |  |  |

### Work Injury Evaluation — `occupational_medicine_work_injury_cf`

Screen: 1 page(s) · 3 section(s) · 22 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Occupational Medicine — Work Injury Evaluation | Injury Information | `wi_visit_type` | Visit Type | `select` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Injury Information | `wi_date_of_injury` | Date of Injury (or Date of Occupational Illness Onset) | `date` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Injury Information | `wi_employer` | Employer Name | `text` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Injury Information | `wi_job_title` | Job Title and Physical Demands of Position | `text` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Injury Information | `wi_mechanism` | Mechanism of Injury | `select` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Injury Information | `wi_body_part` | Primary Body Part Injured | `select` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Injury Information | `wi_diagnosis` | Diagnosis (ICD-10 code and description) | `text` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Injury Information | `wi_causal_relationship` | Causal Relationship to Work (medicolegal) | `select` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Clinical Findings and Functional Status | `wi_pain_score` | Pain Score (NRS 0-10) — current and with activity | `text` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Clinical Findings and Functional Status | `wi_rom` | Range of Motion Findings (degrees, comparison to contralateral side) | `text` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Clinical Findings and Functional Status | `wi_strength` | Strength Testing | `select` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Clinical Findings and Functional Status | `wi_neurological` | Neurological Findings | `select` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Clinical Findings and Functional Status | `wi_imaging` | Imaging Obtained | `select` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Work Status and MMI Assessment | `wi_mmi_status` | Maximum Medical Improvement (MMI) Status | `select` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Work Status and MMI Assessment | `wi_work_status` | Current Work Status | `select` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Work Status and MMI Assessment | `wi_work_restrictions` | Specific Work Restrictions (e.g., no lifting above 10 lbs, no repetitive gripping, sit/stand at will, no climbing ladders, maximum hours per day) | `textarea` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Work Status and MMI Assessment | `wi_fce` | Functional Capacity Evaluation (FCE) | `select` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Work Status and MMI Assessment | `wi_impairment_rating` | Permanent Partial Disability (PPD) Impairment Rating | `select` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Work Status and MMI Assessment | `wi_impairment_percent` | Whole Person Impairment (WPI) Percentage (if at MMI) | `text` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Work Status and MMI Assessment | `wi_treatment_plan` | Current Treatment Plan (PT, medications, injections, surgical consultation, pain management) | `textarea` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Work Status and MMI Assessment | `wi_osha_recordable` | OSHA Recordability | `select` |  |  |  |
| Occupational Medicine — Work Injury Evaluation | Work Status and MMI Assessment | `wi_notes` | Work Injury Evaluation Notes and Next Steps | `textarea` |  |  |  |

### Work-Related Injury (Occ Med) — `occupational_medicine_work_related_injury_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Work-Related Injury — OSHA, Functional Status, and RTW | OSHA Recordability and WC Documentation | `osha_recordable` | OSHA Recordability Criteria | `select` |  |  |  |
| Work-Related Injury — OSHA, Functional Status, and RTW | OSHA Recordability and WC Documentation | `causal_relationship` | Causal Relationship Documentation (work-relatedness: contributed more than minimally; AOE (arising out of employment) + COE (course of employment); acute traumatic: mechanism of injury clearly work-related; cumulative trauma: repetitive motion, ergonomic exposure — timeline, job analysis; aggravation vs. exacerbation: permanent aggravation (wage loss may be compensable) vs. temporary flare; pre-existing condition: apportionment in many states; diagnostic causation opinion: use more-probable-than-not standard (>50%); independent medical examination (IME): neutral evaluation; apportionment of pre-existing vs. work contribution) | `text` |  |  |  |
| Work-Related Injury — OSHA, Functional Status, and RTW | Functional Capacity and Return to Work | `work_status` | Work Status and Restrictions | `select` |  |  |  |

### Workplace Injury / WC — `occupational_medicine_workplace_injury_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Workplace Injury — Workers Compensation Evaluation and Return-to-Work | Injury Assessment | `injury_mechanism` | Injury Mechanism | `select` |  |  |  |
| Workplace Injury — Workers Compensation Evaluation and Return-to-Work | Injury Assessment | `apportionment` | Apportionment and Causation (work-related causation analysis: more likely than not >50% causation; apportionment between work injury and pre-existing condition (degenerative joint disease); IME (independent medical exam) if disputed; AMA Guides 6th Edition impairment rating; whole person impairment (WPI) %; MMI (maximum medical improvement) date; permanent restrictions vs. temporary; state-specific WC regulations) | `text` |  |  |  |
| Workplace Injury — Workers Compensation Evaluation and Return-to-Work | Return-to-Work Planning | `rtw_status` | Current Work Status | `select` |  |  |  |
| Workplace Injury — Workers Compensation Evaluation and Return-to-Work | Return-to-Work Planning | `fcl` | Functional Capacity Evaluation (FCE — comprehensive functional testing; Isernhagen Work Systems or Ergoscience; floor-to-waist lift, carry, push/pull, sit/stand tolerance; validity criteria (Waddell non-organic signs, Wadell 5: superficial tenderness, inappropriate weakness, simulated rotation/compression, distraction test, regional disturbances); lifting capacity; positional tolerances; used for RTW restrictions and impairment rating) | `text` |  |  |  |

## Orthopedic Surgery

### Fracture Management — `ortho_fracture_management_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Fracture Evaluation and Management | Fracture Classification | `fracture_location` | Fracture Location (bone and specific site) | `text` |  |  |  |
| Fracture Evaluation and Management | Fracture Classification | `fracture_pattern` | Fracture Pattern | `select` |  |  |  |
| Fracture Evaluation and Management | Fracture Classification | `displacement` | Displacement | `select` |  |  |  |
| Fracture Evaluation and Management | Fracture Classification | `open_closed` | Open vs Closed | `select` |  |  |  |
| Fracture Evaluation and Management | Fracture Classification | `neurovascular_status` | Neurovascular Status (distal pulses, sensation, capillary refill, motor function — document BEFORE and AFTER manipulation) | `text` |  |  |  |
| Fracture Evaluation and Management | Imaging | `xray_views` | X-ray Views Obtained (minimum 2 orthogonal views; include joint above and below) | `text` |  |  |  |
| Fracture Evaluation and Management | Imaging | `ct_indicated` | CT scan indicated (intra-articular extension, comminution, pre-surgical planning, occult fracture) | `checkbox` |  |  |  |
| Fracture Evaluation and Management | Imaging | `compartment_concern` | Compartment syndrome concern (increasing pain, pain with passive stretch, tense compartment — measure pressures if >30 mmHg or delta P <30: emergent fasciotomy) | `checkbox` |  |  |  |
| Fracture Evaluation and Management | Treatment Plan | `management` | Primary Treatment | `select` |  |  |  |
| Fracture Evaluation and Management | Treatment Plan | `weight_bearing` | Weight-Bearing Status | `select` |  |  |  |
| Fracture Evaluation and Management | Treatment Plan | `follow_up` | Follow-Up (1-2 weeks for XR check; 6 weeks for callus; 3 months for union) | `text` |  |  |  |

### Knee Evaluation — `ortho_knee_evaluation_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Knee Evaluation | History | `mechanism` | Injury Mechanism | `select` |  |  |  |
| Knee Evaluation | History | `pop_heard` | Pop heard at time of injury (ACL — 60-70% have pop; effusion within 24h) | `checkbox` |  |  |  |
| Knee Evaluation | History | `effusion` | Acute joint effusion / hemarthrosis (ACL tear / fracture / peripheral meniscus tear — red blood vessels) | `checkbox` |  |  |  |
| Knee Evaluation | History | `mechanical_symptoms` | Mechanical symptoms (locking — displaced bucket-handle meniscus; catching; giving-way — ACL or patellar instability) | `checkbox` |  |  |  |
| Knee Evaluation | Physical Examination | `lachman` | Lachman Test (ACL) | `select` |  |  |  |
| Knee Evaluation | Physical Examination | `anterior_drawer` | Anterior drawer positive (ACL — less sensitive than Lachman) | `checkbox` |  |  |  |
| Knee Evaluation | Physical Examination | `mcmurray` | McMurray Test (Meniscus) | `select` |  |  |  |
| Knee Evaluation | Physical Examination | `joint_line_tenderness` | Joint Line Tenderness (medial / lateral / patella — document specific site) | `text` |  |  |  |
| Knee Evaluation | Physical Examination | `valgus_varus` | Valgus / Varus Stress Test (MCL / LCL — grade I-III; full extension and 30° flexion) | `text` |  |  |  |
| Knee Evaluation | MRI and Treatment | `mri_acl` | ACL on MRI | `select` |  |  |  |
| Knee Evaluation | MRI and Treatment | `meniscus_finding` | Meniscus on MRI | `select` |  |  |  |
| Knee Evaluation | MRI and Treatment | `acl_treatment` | ACL Treatment | `select` |  |  |  |
| Knee Evaluation | MRI and Treatment | `meniscus_treatment` | Meniscus Treatment | `select` |  |  |  |

### Rotator Cuff (Surgical vs. Conservative) — `orthopedic_shoulder_rotator_cuff_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Rotator Cuff — Classification, Treatment, and Reverse TSA | Tear Classification and Imaging | `tear_grade` | Rotator Cuff Tear Classification | `select` |  |  |  |
| Rotator Cuff — Classification, Treatment, and Reverse TSA | Tear Classification and Imaging | `conservative` | Conservative Treatment Protocol (PT: 8-12 weeks; scapular stabilization (lower trap, serratus); posterior capsule stretch (sleeper stretch); periscapular strengthening; avoid overhead loading; NSAIDs 2-4 weeks; subacromial corticosteroid injection (triamcinolone 40 mg + bupivacaine): provide 6-8 weeks pain relief; maximum 3 injections per year; PRP (platelet-rich plasma): growing evidence for partial tears (Rha 2013 RCT); platelet-rich plasma injection under US guidance; physical therapy for massive tears: deltoid-biased program when repair not possible; acromion decompression (bursectomy alone): no benefit for RCT primary repair outcomes) | `text` |  |  |  |
| Rotator Cuff — Classification, Treatment, and Reverse TSA | Surgical Repair and Reverse TSA | `surgical_repair` | Surgical Repair Options | `select` |  |  |  |

### Shoulder Eval — `ortho_shoulder_evaluation_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Shoulder Evaluation | Complaint and Mechanism | `onset` | Onset | `select` |  |  |  |
| Shoulder Evaluation | Complaint and Mechanism | `primary_complaint` | Primary Complaint | `select` |  |  |  |
| Shoulder Evaluation | Complaint and Mechanism | `sport_occupation` | Sport / Occupation (overhead athlete, manual labor, computer work) | `text` |  |  |  |
| Shoulder Evaluation | Physical Examination | `rom` | Range of Motion (forward flexion, abduction, ER at side and 90°, IR behind back) | `text` |  |  |  |
| Shoulder Evaluation | Physical Examination | `neer_sign` | Neer sign positive (impingement — pain with passive FF past 90°) | `checkbox` |  |  |  |
| Shoulder Evaluation | Physical Examination | `hawkins_kennedy` | Hawkins-Kennedy positive (impingement — IR at 90° abduction) | `checkbox` |  |  |  |
| Shoulder Evaluation | Physical Examination | `empty_can` | Empty can / Jobe test positive (supraspinatus weakness) | `checkbox` |  |  |  |
| Shoulder Evaluation | Physical Examination | `er_weakness` | External rotation weakness (infraspinatus — ER lag sign; posterior cuff tear) | `checkbox` |  |  |  |
| Shoulder Evaluation | Physical Examination | `apprehension` | Apprehension test positive (anterior instability — posteriorly-directed force with ER at 90°) | `checkbox` |  |  |  |
| Shoulder Evaluation | Physical Examination | `sulcus_sign` | Sulcus sign (inferior translation >2 cm — inferior laxity / MDI) | `checkbox` |  |  |  |
| Shoulder Evaluation | Imaging and Treatment | `mri_findings` | MRI Findings (tear size mm, retraction grade, atrophy — Goutallier, tendinosis, labral tear — Bankart) | `textarea` |  |  |  |
| Shoulder Evaluation | Imaging and Treatment | `treatment` | Treatment Plan | `select` |  |  |  |
| Shoulder Evaluation | Imaging and Treatment | `cortisone_injection` | Subacromial corticosteroid injection (impingement — short-term relief; max 3/year; avoid if repair planned) | `checkbox` |  |  |  |

### Spine Evaluation — `ortho_spine_evaluation_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Spine Evaluation | Presenting Complaint | `region` | Spinal Region | `select` |  |  |  |
| Spine Evaluation | Presenting Complaint | `primary_symptom` | Primary Symptom | `select` |  |  |  |
| Spine Evaluation | Presenting Complaint | `dermatomal_level` | Dermatomal / Myotomal Level (L4=medial leg, L5=dorsal foot, S1=lateral foot; C6=thumb, C7=middle finger) | `text` |  |  |  |
| Spine Evaluation | Presenting Complaint | `red_flags` | Red Flags (cauda equina: bladder/bowel incontinence, saddle anesthesia — URGENT; cancer, fever, night sweats, unexplained weight loss; trauma) | `textarea` |  |  |  |
| Spine Evaluation | Neurological Examination | `straight_leg_raise` | Straight Leg Raise (SLR) | `select` |  |  |  |
| Spine Evaluation | Neurological Examination | `motor` | Motor Strength (0-5 — hip flexion L2-3, knee ext L4, ankle dorsiflexion L4-5, great toe ext L5, plantarflexion S1) | `text` |  |  |  |
| Spine Evaluation | Neurological Examination | `reflexes` | Deep Tendon Reflexes (knee jerk L4; ankle jerk S1; Babinski — sign of myelopathy) | `text` |  |  |  |
| Spine Evaluation | Neurological Examination | `sensation` | Sensory Examination (dermatomal distribution) | `text` |  |  |  |
| Spine Evaluation | Imaging and Treatment | `mri_findings` | MRI Findings (disc herniation level, foraminal vs central, cord signal change, stenosis grade) | `textarea` |  |  |  |
| Spine Evaluation | Imaging and Treatment | `conservative` | Conservative Treatment (physical therapy, NSAIDs, epidural steroid injection, activity modification — 6-12 weeks trial) | `textarea` |  |  |  |
| Spine Evaluation | Imaging and Treatment | `surgical_indication` | Surgical Indication | `select` |  |  |  |
| Spine Evaluation | Imaging and Treatment | `procedure_planned` | Procedure Planned | `select` |  |  |  |

### THA Approach and Complications — `orthopedic_surgery_hip_replacement_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Total Hip Arthroplasty — Approach and Complication Prevention | Indication and Approach Selection | `hip_indication` | Indication for THA | `select` |  |  |  |
| Total Hip Arthroplasty — Approach and Complication Prevention | Indication and Approach Selection | `approach` | Surgical Approach | `select` |  |  |  |
| Total Hip Arthroplasty — Approach and Complication Prevention | VTE Prophylaxis and Dislocation Prevention | `vte_prophylaxis` | VTE Prophylaxis Protocol | `select` |  |  |  |
| Total Hip Arthroplasty — Approach and Complication Prevention | VTE Prophylaxis and Dislocation Prevention | `dislocation_prevention` | Dislocation Prevention (posterior approach precautions: avoid hip flexion >90 degrees, internal rotation, adduction across midline; activity restrictions 6 weeks; high-offset or large femoral head (36 mm or 40 mm) reduces dislocation; dual-mobility cup for high-risk (prior THA, abductor deficiency, neurological disorders, obese, flexion contracture); surgical: capsular repair; acetabular component orientation: anteversion 15-20 degrees, inclination 40-45 degrees) | `text` |  |  |  |

### TJA Pre-Op Eval — `ortho_total_joint_preop_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Total Joint Arthroplasty Pre-Op | Surgical Indication | `joint` | Joint | `select` |  |  |  |
| Total Joint Arthroplasty Pre-Op | Surgical Indication | `diagnosis` | Primary Diagnosis | `select` |  |  |  |
| Total Joint Arthroplasty Pre-Op | Surgical Indication | `kellgren_lawrence` | Radiographic Grade (Kellgren-Lawrence) | `select` |  |  |  |
| Total Joint Arthroplasty Pre-Op | Surgical Indication | `conservative_failed` | Conservative Treatment Failed (PT, weight loss, NSAIDs, corticosteroid injections, viscosupplementation) | `textarea` |  |  |  |
| Total Joint Arthroplasty Pre-Op | Functional Status | `koos_womac` | KOOS / WOMAC / Harris Hip Score (baseline PRO — document for outcomes tracking) | `text` |  |  |  |
| Total Joint Arthroplasty Pre-Op | Functional Status | `walking_distance` | Walking Distance | `select` |  |  |  |
| Total Joint Arthroplasty Pre-Op | Functional Status | `stair_climbing` | Stair climbing limited by pain | `checkbox` |  |  |  |
| Total Joint Arthroplasty Pre-Op | Functional Status | `night_pain` | Night pain / rest pain (advanced disease) | `checkbox` |  |  |  |
| Total Joint Arthroplasty Pre-Op | Peri-Operative Risk Assessment | `bmi` | BMI (kg/m2 — most centers require <40-45 for elective TJA; higher VTE/SSI/loosening risk) | `number` |  |  |  |
| Total Joint Arthroplasty Pre-Op | Peri-Operative Risk Assessment | `hba1c` | HbA1c (% — surgery typically deferred if >8%; <7.5% preferred; wound healing) | `number` |  |  |  |
| Total Joint Arthroplasty Pre-Op | Peri-Operative Risk Assessment | `albumin` | Albumin (g/dL — <3.5 malnutrition; increased periprosthetic infection risk) | `number` |  |  |  |
| Total Joint Arthroplasty Pre-Op | Peri-Operative Risk Assessment | `anticoagulation_plan` | Anticoagulation Plan (warfarin bridge; DOAC hold; VTE prophylaxis post-op: LMWH/aspirin per AAHKS) | `textarea` |  |  |  |
| Total Joint Arthroplasty Pre-Op | Peri-Operative Risk Assessment | `preop_optimization` | Pre-Op Optimization Required (weight loss, HbA1c control, smoking cessation, dental clearance, iron deficiency) | `textarea` |  |  |  |
| Total Joint Arthroplasty Pre-Op | Implant and Anesthesia Plan | `anesthesia_type` | Planned Anesthesia | `select` |  |  |  |
| Total Joint Arthroplasty Pre-Op | Implant and Anesthesia Plan | `multimodal_pain` | Multimodal pain protocol (pre-op: celecoxib + gabapentin; intra-op: liposomal bupivacaine LIA; post-op: scheduled acetaminophen + NSAIDs; minimize opioids) | `checkbox` |  |  |  |
| Total Joint Arthroplasty Pre-Op | Implant and Anesthesia Plan | `blood_management` | Blood management: TXA (tranexamic acid) — IV or topical; IRON deficiency corrected pre-op; cell saver per surgeon protocol | `checkbox` |  |  |  |

### TKA Perioperative — `orthopedic_surgery_knee_replacement_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Total Knee Arthroplasty — Perioperative Protocol | Indication and Patient Optimization | `koos` | KOOS/WOMAC Score (Knee Injury and Osteoarthritis Outcome Score; 5 subscales: pain, symptoms, ADL, sport/recreation, QoL; KOOS-12 abbreviated; WOMAC: pain, stiffness, function; document pre-operative baseline for PROMs; minimum clinically important difference (MCID) 8-10 points; benchmark at 6 weeks, 3 months, 12 months) | `text` |  |  |  |
| Total Knee Arthroplasty — Perioperative Protocol | Indication and Patient Optimization | `optimization` | Pre-surgical Optimization Status | `select` |  |  |  |
| Total Knee Arthroplasty — Perioperative Protocol | Implant and Surgical Approach | `implant_type` | Implant Constraint Level | `select` |  |  |  |
| Total Knee Arthroplasty — Perioperative Protocol | Implant and Surgical Approach | `approach` | Surgical Approach | `select` |  |  |  |
| Total Knee Arthroplasty — Perioperative Protocol | ERAS Protocol | `eras_elements` | ERAS Elements (multimodal analgesia: regional (adductor canal block + IPACK block for posterior pain) + NSAID (ketorolac 30 mg IV) + acetaminophen + gabapentin; avoid opioids as first-line; tranexamic acid (TXA): IV 1g + topical 1.5g reduces transfusion to <1%; early ambulation: day of surgery or POD1; physical therapy starts same-day; ice and elevation; CPM (continuous passive motion) not routinely recommended (no benefit RCT); discharge day 1-2 with home PT; knee flex goal 90° by 2 weeks) | `textarea` |  |  |  |

## Urgent Care

### Abdominal Pain — `urgent_care_abdominal_pain_cf`

Screen: 1 page(s) · 5 section(s) · 27 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Abdominal Pain Evaluation | Pain Characterization | `abd_onset` | Onset | `select` |  |  |  |
| Abdominal Pain Evaluation | Pain Characterization | `abd_duration` | Duration of Current Episode | `text` |  |  |  |
| Abdominal Pain Evaluation | Pain Characterization | `abd_location` | Pain Location | `select` |  |  |  |
| Abdominal Pain Evaluation | Pain Characterization | `abd_quality` | Pain Quality | `select` |  |  |  |
| Abdominal Pain Evaluation | Pain Characterization | `abd_severity` | Pain Severity (0-10) | `select` |  |  |  |
| Abdominal Pain Evaluation | Pain Characterization | `abd_radiation` | Radiation Pattern | `select` |  |  |  |
| Abdominal Pain Evaluation | Pain Characterization | `abd_associated` | Associated Symptoms | `select` |  |  |  |
| Abdominal Pain Evaluation | Vital Signs and Physical Exam | `abd_temp` | Temperature (degrees F) | `text` |  |  |  |
| Abdominal Pain Evaluation | Vital Signs and Physical Exam | `abd_hr` | Heart Rate (bpm) | `text` |  |  |  |
| Abdominal Pain Evaluation | Vital Signs and Physical Exam | `abd_bp` | Blood Pressure (mmHg) | `text` |  |  |  |
| Abdominal Pain Evaluation | Vital Signs and Physical Exam | `abd_appearance` | General Appearance | `select` |  |  |  |
| Abdominal Pain Evaluation | Vital Signs and Physical Exam | `abd_tenderness` | Abdominal Tenderness | `select` |  |  |  |
| Abdominal Pain Evaluation | Vital Signs and Physical Exam | `abd_peritoneal` | Peritoneal Signs | `select` |  |  |  |
| Abdominal Pain Evaluation | Vital Signs and Physical Exam | `abd_bowel_sounds` | Bowel Sounds | `select` |  |  |  |
| Abdominal Pain Evaluation | Vital Signs and Physical Exam | `abd_murphy_sign` | Murphy Sign (RUQ) | `select` |  |  |  |
| Abdominal Pain Evaluation | Vital Signs and Physical Exam | `abd_psoas_obturator` | Psoas and Obturator Signs | `select` |  |  |  |
| Abdominal Pain Evaluation | Red Flags and Risk Stratification | `abd_red_flags_check` | Surgical or Vascular Red Flags | `select` |  |  |  |
| Abdominal Pain Evaluation | Red Flags and Risk Stratification | `abd_ectopic_screen` | Pregnancy Test (females of reproductive age) | `select` |  |  |  |
| Abdominal Pain Evaluation | Diagnostic Workup | `abd_labs_ordered` | Labs Ordered | `select` |  |  |  |
| Abdominal Pain Evaluation | Diagnostic Workup | `abd_imaging_ordered` | Imaging Ordered | `select` |  |  |  |
| Abdominal Pain Evaluation | Diagnostic Workup | `abd_working_diagnosis` | Working Diagnosis / Differential | `text` |  |  |  |
| Abdominal Pain Evaluation | Treatment and Disposition | `abd_antiemetic` | Antiemetic Given | `select` |  |  |  |
| Abdominal Pain Evaluation | Treatment and Disposition | `abd_analgesia` | Analgesia Given | `select` |  |  |  |
| Abdominal Pain Evaluation | Treatment and Disposition | `abd_disposition` | Disposition | `select` |  |  |  |
| Abdominal Pain Evaluation | Treatment and Disposition | `abd_discharge_instructions` | Discharge Instructions | `select` |  |  |  |
| Abdominal Pain Evaluation | Treatment and Disposition | `abd_return_precautions` | Return Precautions (worsening pain, vomiting blood, black stool, fever above 101.5F, inability to keep fluids down) | `textarea` |  |  |  |
| Abdominal Pain Evaluation | Treatment and Disposition | `abd_notes` | Clinical Notes | `textarea` |  |  |  |

### Chest Pain Triage — `urgent_care_chest_pain_cf`

Screen: 1 page(s) · 5 section(s) · 23 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chest Pain Triage and Evaluation | Pain Characterization | `cp_onset` | Onset | `select` |  |  |  |
| Chest Pain Triage and Evaluation | Pain Characterization | `cp_quality` | Pain Quality | `select` |  |  |  |
| Chest Pain Triage and Evaluation | Pain Characterization | `cp_severity` | Severity (0-10) | `select` |  |  |  |
| Chest Pain Triage and Evaluation | Pain Characterization | `cp_radiation` | Radiation | `select` |  |  |  |
| Chest Pain Triage and Evaluation | Pain Characterization | `cp_associated` | Associated Symptoms | `select` |  |  |  |
| Chest Pain Triage and Evaluation | Pain Characterization | `cp_duration` | Duration of Current Episode | `text` |  |  |  |
| Chest Pain Triage and Evaluation | Cardiac Risk Factors and History | `cp_cad_history` | Known CAD or Prior ACS | `select` |  |  |  |
| Chest Pain Triage and Evaluation | Cardiac Risk Factors and History | `cp_risk_factors_check` | Cardiac Risk Factors | `select` |  |  |  |
| Chest Pain Triage and Evaluation | Cardiac Risk Factors and History | `cp_pe_risk` | PE Risk Factors (Wells Score) | `select` |  |  |  |
| Chest Pain Triage and Evaluation | Vital Signs and ECG | `cp_bp` | Blood Pressure (mmHg) — both arms if dissection concern | `text` |  |  |  |
| Chest Pain Triage and Evaluation | Vital Signs and ECG | `cp_hr` | Heart Rate (bpm) | `text` |  |  |  |
| Chest Pain Triage and Evaluation | Vital Signs and ECG | `cp_o2sat` | O2 Saturation (%) | `text` |  |  |  |
| Chest Pain Triage and Evaluation | Vital Signs and ECG | `cp_ecg_result` | ECG Result (obtain within 10 min) | `select` |  |  |  |
| Chest Pain Triage and Evaluation | Vital Signs and ECG | `cp_troponin` | Troponin | `select` |  |  |  |
| Chest Pain Triage and Evaluation | HEART Score (ACS Risk Stratification) | `cp_heart_h` | H — History | `select` |  |  |  |
| Chest Pain Triage and Evaluation | HEART Score (ACS Risk Stratification) | `cp_heart_e` | E — ECG | `select` |  |  |  |
| Chest Pain Triage and Evaluation | HEART Score (ACS Risk Stratification) | `cp_heart_a` | A — Age | `select` |  |  |  |
| Chest Pain Triage and Evaluation | HEART Score (ACS Risk Stratification) | `cp_heart_r` | R — Risk Factors | `select` |  |  |  |
| Chest Pain Triage and Evaluation | HEART Score (ACS Risk Stratification) | `cp_heart_t` | T — Initial Troponin | `select` |  |  |  |
| Chest Pain Triage and Evaluation | HEART Score (ACS Risk Stratification) | `cp_heart_total` | HEART Score Total and Risk | `select` |  |  |  |
| Chest Pain Triage and Evaluation | Diagnosis and Disposition | `cp_working_dx` | Working Diagnosis | `select` |  |  |  |
| Chest Pain Triage and Evaluation | Diagnosis and Disposition | `cp_disposition_final` | Disposition | `select` |  |  |  |
| Chest Pain Triage and Evaluation | Diagnosis and Disposition | `cp_notes` | Clinical Notes and Plan | `textarea` |  |  |  |

### Laceration / Trauma — `urgent_care_laceration_cf`

Screen: 1 page(s) · 5 section(s) · 26 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Laceration and Minor Trauma | Wound Assessment | `lac_mechanism` | Mechanism of Injury | `select` |  |  |  |
| Laceration and Minor Trauma | Wound Assessment | `lac_location` | Location (e.g., left palm proximal to MCP joint) | `text` |  |  |  |
| Laceration and Minor Trauma | Wound Assessment | `lac_length_cm` | Laceration Length (cm) | `number` |  |  |  |
| Laceration and Minor Trauma | Wound Assessment | `lac_depth` | Wound Depth | `select` |  |  |  |
| Laceration and Minor Trauma | Wound Assessment | `lac_contamination` | Contamination Status | `select` |  |  |  |
| Laceration and Minor Trauma | Wound Assessment | `lac_time_hours` | Time Since Injury (hours) | `number` |  |  |  |
| Laceration and Minor Trauma | Wound Assessment | `lac_bleeding_controlled` | Bleeding Status | `select` |  |  |  |
| Laceration and Minor Trauma | Wound Assessment | `lac_foreign_body` | Foreign Body Suspected | `select` |  |  |  |
| Laceration and Minor Trauma | Neurovascular and Tendon Check | `lac_sensation` | Sensation Distal to Wound | `select` |  |  |  |
| Laceration and Minor Trauma | Neurovascular and Tendon Check | `lac_capillary_refill` | Capillary Refill Distal | `select` |  |  |  |
| Laceration and Minor Trauma | Neurovascular and Tendon Check | `lac_tendon_function` | Tendon Function | `select` |  |  |  |
| Laceration and Minor Trauma | Neurovascular and Tendon Check | `lac_xray_ordered` | Imaging Ordered | `select` |  |  |  |
| Laceration and Minor Trauma | Wound Irrigation and Closure | `lac_irrigation_volume` | Irrigation Volume | `select` |  |  |  |
| Laceration and Minor Trauma | Wound Irrigation and Closure | `lac_anesthesia` | Local Anesthesia | `select` |  |  |  |
| Laceration and Minor Trauma | Wound Irrigation and Closure | `lac_closure_method` | Closure Method | `select` |  |  |  |
| Laceration and Minor Trauma | Wound Irrigation and Closure | `lac_suture_size` | Suture Size Used | `select` |  |  |  |
| Laceration and Minor Trauma | Wound Irrigation and Closure | `lac_suture_count` | Number of Sutures / Staples Placed | `number` |  |  |  |
| Laceration and Minor Trauma | Wound Irrigation and Closure | `lac_layers` | Layers Closed | `select` |  |  |  |
| Laceration and Minor Trauma | Tetanus and Infection Prophylaxis | `lac_tetanus_status` | Tetanus Immunization Status | `select` |  |  |  |
| Laceration and Minor Trauma | Tetanus and Infection Prophylaxis | `lac_antibiotics` | Antibiotic Prophylaxis | `select` |  |  |  |
| Laceration and Minor Trauma | Tetanus and Infection Prophylaxis | `lac_wound_care_instructions` | Wound Care Instructions Given | `select` |  |  |  |
| Laceration and Minor Trauma | Tetanus and Infection Prophylaxis | `lac_suture_removal_days` | Suture/Staple Removal Timeline | `select` |  |  |  |
| Laceration and Minor Trauma | Tetanus and Infection Prophylaxis | `lac_return_precautions` | Return Precautions Given (increased pain, redness, streaking, fever, discharge) | `textarea` |  |  |  |
| Laceration and Minor Trauma | Disposition | `lac_disposition` | Disposition | `select` |  |  |  |
| Laceration and Minor Trauma | Disposition | `lac_follow_up_plan` | Follow-Up Plan | `select` |  |  |  |
| Laceration and Minor Trauma | Disposition | `lac_notes` | Additional Notes | `textarea` |  |  |  |

### MSK / Joint Pain — `urgent_care_msk_cf`

Screen: 1 page(s) · 5 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Musculoskeletal and Joint Pain | History and Mechanism | `msk_chief_complaint` | Chief Complaint | `select` |  |  |  |
| Musculoskeletal and Joint Pain | History and Mechanism | `msk_mechanism` | Mechanism of Injury | `select` |  |  |  |
| Musculoskeletal and Joint Pain | History and Mechanism | `msk_time_onset` | Time of Injury or Onset | `text` |  |  |  |
| Musculoskeletal and Joint Pain | History and Mechanism | `msk_pain_scale` | Pain Scale (0-10) | `select` |  |  |  |
| Musculoskeletal and Joint Pain | History and Mechanism | `msk_weight_bearing` | Weight Bearing Status | `select` |  |  |  |
| Musculoskeletal and Joint Pain | History and Mechanism | `msk_swelling` | Swelling / Ecchymosis | `select` |  |  |  |
| Musculoskeletal and Joint Pain | Ottawa Decision Rules | `msk_ottawa_ankle` | Ottawa Ankle Rule | `select` |  |  |  |
| Musculoskeletal and Joint Pain | Ottawa Decision Rules | `msk_ottawa_knee` | Ottawa Knee Rule | `select` |  |  |  |
| Musculoskeletal and Joint Pain | Ottawa Decision Rules | `msk_xray_ordered` | Imaging Ordered | `select` |  |  |  |
| Musculoskeletal and Joint Pain | Ottawa Decision Rules | `msk_xray_result` | Imaging Result | `select` |  |  |  |
| Musculoskeletal and Joint Pain | Diagnosis and Classification | `msk_diagnosis_select` | Working Diagnosis | `select` |  |  |  |
| Musculoskeletal and Joint Pain | Diagnosis and Classification | `msk_red_flags` | Red Flags Checked | `select` |  |  |  |
| Musculoskeletal and Joint Pain | Treatment Plan (RICE / Analgesia / Immobilization) | `msk_rice_instructions` | RICE Instructions Given | `select` |  |  |  |
| Musculoskeletal and Joint Pain | Treatment Plan (RICE / Analgesia / Immobilization) | `msk_analgesic` | Analgesic Prescribed | `select` |  |  |  |
| Musculoskeletal and Joint Pain | Treatment Plan (RICE / Analgesia / Immobilization) | `msk_immobilization` | Immobilization Applied | `select` |  |  |  |
| Musculoskeletal and Joint Pain | Treatment Plan (RICE / Analgesia / Immobilization) | `msk_crutches` | Assistive Device | `select` |  |  |  |
| Musculoskeletal and Joint Pain | Disposition and Follow-Up | `msk_disposition` | Disposition | `select` |  |  |  |
| Musculoskeletal and Joint Pain | Disposition and Follow-Up | `msk_follow_up_plan` | Follow-Up Plan | `select` |  |  |  |
| Musculoskeletal and Joint Pain | Disposition and Follow-Up | `msk_return_precautions` | Return Precautions (severe pain increase, paresthesias, deformity, pallor, loss of movement) | `textarea` |  |  |  |
| Musculoskeletal and Joint Pain | Disposition and Follow-Up | `msk_notes` | Clinical Notes | `textarea` |  |  |  |

### Respiratory / Dyspnea — `urgent_care_respiratory_cf`

Screen: 1 page(s) · 5 section(s) · 25 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Respiratory and Dyspnea Evaluation | Presentation and Symptoms | `resp_chief_complaint` | Chief Complaint | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Presentation and Symptoms | `resp_onset` | Onset | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Presentation and Symptoms | `resp_severity` | Severity of Dyspnea | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Presentation and Symptoms | `resp_cough_character` | Cough Character | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Presentation and Symptoms | `resp_fever` | Fever | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Respiratory History | `resp_pmh` | Relevant Past Medical History | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Respiratory History | `resp_asthma_controller` | Current Respiratory Medications | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Respiratory History | `resp_smoker` | Smoking Status | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Vital Signs and Examination | `resp_o2sat` | O2 Saturation on Room Air (%) | `text` |  |  |  |
| Respiratory and Dyspnea Evaluation | Vital Signs and Examination | `resp_rr` | Respiratory Rate (breaths/min) | `text` |  |  |  |
| Respiratory and Dyspnea Evaluation | Vital Signs and Examination | `resp_hr` | Heart Rate (bpm) | `text` |  |  |  |
| Respiratory and Dyspnea Evaluation | Vital Signs and Examination | `resp_temp` | Temperature | `text` |  |  |  |
| Respiratory and Dyspnea Evaluation | Vital Signs and Examination | `resp_breath_sounds` | Breath Sounds | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Vital Signs and Examination | `resp_accessory_muscles` | Accessory Muscle Use | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Vital Signs and Examination | `resp_pef` | Peak Expiratory Flow (L/min) — if asthma (compare to personal best) | `text` |  |  |  |
| Respiratory and Dyspnea Evaluation | Treatment | `resp_o2_given` | Supplemental O2 Given | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Treatment | `resp_nebulizer` | Bronchodilator Treatment | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Treatment | `resp_steroids` | Systemic Steroids | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Treatment | `resp_antibiotic` | Antibiotic Prescribed | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Treatment | `resp_cxr` | Chest X-Ray | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Treatment | `resp_response` | Response to Treatment | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Disposition | `resp_diagnosis` | Working Diagnosis | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Disposition | `resp_disposition_final` | Disposition | `select` |  |  |  |
| Respiratory and Dyspnea Evaluation | Disposition | `resp_return_precautions` | Return Precautions (SpO2 below 92%, unable to complete sentences, breathing worse, cyanosis, confusion) | `textarea` |  |  |  |
| Respiratory and Dyspnea Evaluation | Disposition | `resp_notes` | Clinical Notes | `textarea` |  |  |  |

### Skin Infection / I&D — `urgent_care_skin_infection_cf`

Screen: 1 page(s) · 4 section(s) · 21 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Skin Infection and Abscess Management | Infection Type and Classification | `ssti_type` | Infection Type | `select` |  |  |  |
| Skin Infection and Abscess Management | Infection Type and Classification | `ssti_location` | Location of Infection | `text` |  |  |  |
| Skin Infection and Abscess Management | Infection Type and Classification | `ssti_size_cm` | Size of Abscess or Erythema (cm x cm) | `text` |  |  |  |
| Skin Infection and Abscess Management | Infection Type and Classification | `ssti_fluctuance` | Fluctuance Present | `select` |  |  |  |
| Skin Infection and Abscess Management | Infection Type and Classification | `ssti_lymphangitis` | Lymphangitic Streaking | `select` |  |  |  |
| Skin Infection and Abscess Management | Infection Type and Classification | `ssti_severity` | Severity Classification | `select` |  |  |  |
| Skin Infection and Abscess Management | Infection Type and Classification | `ssti_immunocompromised` | Immunocompromised Status | `select` |  |  |  |
| Skin Infection and Abscess Management | Incision and Drainage Procedure | `ssti_id_performed` | I&D Performed | `select` |  |  |  |
| Skin Infection and Abscess Management | Incision and Drainage Procedure | `ssti_anesthesia` | Anesthesia for I&D | `select` |  |  |  |
| Skin Infection and Abscess Management | Incision and Drainage Procedure | `ssti_drainage_volume` | Drainage Character | `select` |  |  |  |
| Skin Infection and Abscess Management | Incision and Drainage Procedure | `ssti_culture_sent` | Wound Culture Sent | `select` |  |  |  |
| Skin Infection and Abscess Management | Incision and Drainage Procedure | `ssti_packing` | Wound Packing | `select` |  |  |  |
| Skin Infection and Abscess Management | Incision and Drainage Procedure | `ssti_packing_removal` | Packing Removal | `select` |  |  |  |
| Skin Infection and Abscess Management | Antibiotic Selection | `ssti_antibiotic` | Antibiotic Prescribed | `select` |  |  |  |
| Skin Infection and Abscess Management | Antibiotic Selection | `ssti_mrsa_risk` | MRSA Risk Assessment | `select` |  |  |  |
| Skin Infection and Abscess Management | Disposition and Follow-Up | `ssti_disposition` | Disposition | `select` |  |  |  |
| Skin Infection and Abscess Management | Disposition and Follow-Up | `ssti_necrotizing_screen` | Necrotizing Fasciitis Screening | `select` |  |  |  |
| Skin Infection and Abscess Management | Disposition and Follow-Up | `ssti_wound_care` | Wound Care Instructions | `select` |  |  |  |
| Skin Infection and Abscess Management | Disposition and Follow-Up | `ssti_follow_up_plan` | Follow-Up Plan | `select` |  |  |  |
| Skin Infection and Abscess Management | Disposition and Follow-Up | `ssti_return_precautions` | Return Precautions (rapid spread, fever, red streaking, numbness, extreme pain, worsening) | `textarea` |  |  |  |
| Skin Infection and Abscess Management | Disposition and Follow-Up | `ssti_notes` | Clinical Notes | `textarea` |  |  |  |

### URI Antibiotic Decision — `urgent_care_upper_respiratory_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Upper Respiratory Infections — Antibiotic Decision Framework | Pharyngitis — Centor/McIsaac and RADT | `centor_score` | McIsaac Score (1 pt each: tonsillar exudate, tender anterior cervical LAD, fever >38C, absent cough; -1 pt if age >=45; total -1 to 4; 0-1: no test or antibiotic; 2-3: RADT (rapid antigen detection test); 4+: empiric antibiotics; negative RADT in adults: no further testing; negative RADT in children: throat culture (higher sensitivity); treatment if GAS positive: amoxicillin 500 mg BID x 10 days or penicillin V 500 mg BID x 10 days; PCN allergy: azithromycin 5-day Z-pack or cephalexin 500 mg BID x 10 days) | `number` |  |  |  |
| Upper Respiratory Infections — Antibiotic Decision Framework | Pharyngitis — Centor/McIsaac and RADT | `sinusitis_criteria` | Acute Bacterial Sinusitis Criteria (IDSA 2012: viral URI + any of: (1) onset with severe symptoms (fever >=39C + purulent nasal discharge/facial pain) x >=3-4 days; or (2) worsening symptoms after initial improvement (double sickening); or (3) persistent symptoms >=10 days without improvement; most URI NOT bacterial — viral etiology 98-99% first 7-10 days; first-line: amoxicillin-clavulanate 875/125 mg BID x 5-7 days; beta-lactam allergy: doxycycline 100 mg BID x 5-7 days or levofloxacin 500 mg QD x 5 days; no imaging required for uncomplicated; CHILLS adjunct: CT for complications (orbital, intracranial)) | `text` |  |  |  |
| Upper Respiratory Infections — Antibiotic Decision Framework | Acute Otitis Media and Otitis Externa | `aom_criteria` | AOM Antibiotic Decision (AAP 2013) | `select` |  |  |  |
| Upper Respiratory Infections — Antibiotic Decision Framework | Acute Otitis Media and Otitis Externa | `otitis_externa` | Otitis Externa (swimmer ear; bacteria: Pseudomonas, Staphylococcus aureus; ear pain with tragus manipulation + erythema, edema, exudate in canal; no systemic antibiotics; topical ciprofloxacin-hydrocortisone drops 4 drops BID x 7 days; alternative: ofloxacin; keep ear dry; ear wick if canal edematous; necrotizing (malignant) OE: DM/immunocompromised; Pseudomonas extending to bone; CT skull base; IV antipseudomonal; ENT; 6-8 weeks IV antibiotics) | `text` |  |  |  |

### Urgent Care Visit — `urgent_care_visit_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Urgent Care Visit | Chief Complaint and Triage | `chief_complaint` | Chief Complaint | `text` |  |  |  |
| Urgent Care Visit | Chief Complaint and Triage | `duration` | Symptom Duration | `text` |  |  |  |
| Urgent Care Visit | Chief Complaint and Triage | `triage_level` | ESI Triage Level | `select` |  |  |  |
| Urgent Care Visit | Chief Complaint and Triage | `onset` | Onset | `select` |  |  |  |
| Urgent Care Visit | Vital Signs | `temp` | Temperature (°F) | `number` |  |  |  |
| Urgent Care Visit | Vital Signs | `hr` | Heart Rate | `number` |  |  |  |
| Urgent Care Visit | Vital Signs | `rr` | Respiratory Rate | `number` |  |  |  |
| Urgent Care Visit | Vital Signs | `sbp` | SBP (mmHg) | `number` |  |  |  |
| Urgent Care Visit | Vital Signs | `dbp` | DBP (mmHg) | `number` |  |  |  |
| Urgent Care Visit | Vital Signs | `spo2` | SpO2 (%) | `number` |  |  |  |
| Urgent Care Visit | Vital Signs | `pain_score` | Pain Score (0-10) | `number` |  |  |  |
| Urgent Care Visit | Assessment and Plan | `working_diagnosis` | Working Diagnosis | `text` |  |  |  |
| Urgent Care Visit | Assessment and Plan | `treatment_given` | Treatment Administered in Office | `textarea` |  |  |  |
| Urgent Care Visit | Assessment and Plan | `disposition` | Disposition | `select` |  |  |  |
| Urgent Care Visit | Assessment and Plan | `return_precautions` | Return Precautions Given | `textarea` |  |  |  |
| Urgent Care Visit | Assessment and Plan | `prescriptions` | Prescriptions Written | `textarea` |  |  |  |

## ENT

### Audiology — `audiology_evaluation_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Audiology Evaluation | Pure Tone Audiometry | `pta_right` | PTA Right (dB HL) | `number` |  |  |  |
| Audiology Evaluation | Pure Tone Audiometry | `pta_left` | PTA Left (dB HL) | `number` |  |  |  |
| Audiology Evaluation | Pure Tone Audiometry | `srt_right` | SRT Right (dB HL) | `number` |  |  |  |
| Audiology Evaluation | Pure Tone Audiometry | `srt_left` | SRT Left (dB HL) | `number` |  |  |  |
| Audiology Evaluation | Pure Tone Audiometry | `wrs_right` | Word Recognition Score Right (%) | `number` |  |  |  |
| Audiology Evaluation | Pure Tone Audiometry | `wrs_left` | Word Recognition Score Left (%) | `number` |  |  |  |
| Audiology Evaluation | Hearing Loss Classification | `type_right` | Type Right | `select` |  |  |  |
| Audiology Evaluation | Hearing Loss Classification | `type_left` | Type Left | `select` |  |  |  |
| Audiology Evaluation | Hearing Loss Classification | `degree_right` | Degree Right | `select` |  |  |  |
| Audiology Evaluation | Hearing Loss Classification | `degree_left` | Degree Left | `select` |  |  |  |
| Audiology Evaluation | Recommendations | `hearing_aid_recommended` | Hearing aid(s) recommended | `checkbox` |  |  |  |
| Audiology Evaluation | Recommendations | `hearing_aid_ear` | Hearing Aid Ear | `select` |  |  |  |
| Audiology Evaluation | Recommendations | `medical_referral` | ENT/medical referral indicated | `checkbox` |  |  |  |
| Audiology Evaluation | Recommendations | `notes` | Assessment and Recommendations | `textarea` |  |  |  |

### Chronic Sinusitis — `ent_chronic_sinusitis_cf`

Screen: 1 page(s) · 5 section(s) · 23 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Rhinosinusitis Assessment | CRS Classification | `crs_type` | CRS Phenotype | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | CRS Classification | `crs_duration` | Duration and Course | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | CRS Classification | `crs_cardina_symptoms` | Cardinal Symptoms (2 required for diagnosis) | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | CRS Classification | `crs_vas_score` | Total Symptom VAS Score (0-10, over 5 = moderate-severe) | `number` |  |  |  |
| Chronic Rhinosinusitis Assessment | CRS Classification | `crs_comorbidities` | Comorbidities (asthma, allergic rhinitis, GERD, immunodeficiency, cystic fibrosis, ciliary dyskinesia) | `textarea` |  |  |  |
| Chronic Rhinosinusitis Assessment | Diagnostic Evaluation | `crs_endoscopy` | Nasal Endoscopy Findings | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | Diagnostic Evaluation | `crs_ct_staging` | CT Sinuses (Lund-Mackay Staging) | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | Diagnostic Evaluation | `crs_eosinophil_count` | Blood Eosinophil Count (cells/uL) | `text` |  |  |  |
| Chronic Rhinosinusitis Assessment | Diagnostic Evaluation | `crs_ige_total` | Total IgE (IU/mL) | `text` |  |  |  |
| Chronic Rhinosinusitis Assessment | Diagnostic Evaluation | `crs_culture` | Sinus Culture Results (if obtained via endoscopy) | `textarea` |  |  |  |
| Chronic Rhinosinusitis Assessment | Diagnostic Evaluation | `crs_allergy_testing` | Allergy Testing | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | Medical Management | `crs_intranasal_steroid` | Intranasal Corticosteroid | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | Medical Management | `crs_saline_irrigation` | Saline Nasal Irrigation | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | Medical Management | `crs_oral_steroid` | Oral Corticosteroids | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | Medical Management | `crs_antibiotics` | Antibiotics | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | Medical Management | `crs_antifungal` | Antifungal (allergic fungal sinusitis) | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | Biologic Therapy (Severe CRSwNP) | `crs_biologic_eligibility` | Biologic Eligibility (inadequate response to INS + surgery) | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | Biologic Therapy (Severe CRSwNP) | `crs_biologic_agent` | Biologic Agent | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | Biologic Therapy (Severe CRSwNP) | `crs_biologic_response` | Biologic Response at 16 Weeks | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | Surgical Management | `crs_fess` | Functional Endoscopic Sinus Surgery (FESS) | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | Surgical Management | `crs_fess_extent` | FESS Extent | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | Surgical Management | `crs_steroid_eluting` | Steroid-Eluting Implant | `select` |  |  |  |
| Chronic Rhinosinusitis Assessment | Surgical Management | `crs_notes` | Additional Notes | `textarea` |  |  |  |

### Cochlear Implant — `ent_cochlear_implant_cf`

Screen: 1 page(s) · 3 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cochlear Implant Candidacy Assessment | Audiologic Candidacy Criteria | `adult_candidacy` | Adult Candidacy Criteria (FDA/Medicare) | `select` |  |  |  |
| Cochlear Implant Candidacy Assessment | Audiologic Candidacy Criteria | `pediatric_age` | Pediatric CI Candidacy (if applicable) | `select` |  |  |  |
| Cochlear Implant Candidacy Assessment | Pre-implant Workup | `imaging` | Pre-implant Imaging | `select` |  |  |  |
| Cochlear Implant Candidacy Assessment | Pre-implant Workup | `etiology` | Hearing Loss Etiology (genetic: GJB2/connexin-26 most common in congenital — excellent CI outcomes; CHARGE syndrome; Usher syndrome (vision impaired); DFNB1 panel; acquired: meningitis (ossification risk), ototoxicity (cisplatin, aminoglycosides), Ménière, otosclerosis (modified electrode); sudden SNHL workup; document duration and progression) | `text` |  |  |  |
| Cochlear Implant Candidacy Assessment | Device and Surgical Approach | `device` | Cochlear Implant Device System | `select` |  |  |  |
| Cochlear Implant Candidacy Assessment | Device and Surgical Approach | `surgical_approach` | Surgical Approach (mastoidectomy + posterior tympanotomy standard; round window approach preferred (atraumatic); cochleostomy when RW not accessible; general anesthesia; intraoperative NRT (neural response telemetry) to confirm electrode placement; perioperative steroids for hearing preservation; 2-4 weeks to activation) | `text` |  |  |  |

### Hearing Loss — `ent_hearing_loss_cf`

Screen: 1 page(s) · 4 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hearing Loss Evaluation | Classification and Onset | `hl_type` | Hearing Loss Type | `select` |  |  |  |
| Hearing Loss Evaluation | Classification and Onset | `hl_laterality` | Laterality | `select` |  |  |  |
| Hearing Loss Evaluation | Classification and Onset | `hl_onset` | Onset Pattern | `select` |  |  |  |
| Hearing Loss Evaluation | Classification and Onset | `hl_severity` | Severity by PTA (Better Ear) | `select` |  |  |  |
| Hearing Loss Evaluation | Classification and Onset | `hl_pta` | PTA (Pure Tone Average 0.5-2-4 kHz) in dB HL | `text` |  |  |  |
| Hearing Loss Evaluation | Etiology | `hl_etiology_select` | Suspected or Confirmed Etiology | `select` |  |  |  |
| Hearing Loss Evaluation | Etiology | `hl_tinnitus` | Associated Tinnitus | `select` |  |  |  |
| Hearing Loss Evaluation | Etiology | `hl_vertigo` | Associated Vertigo | `select` |  |  |  |
| Hearing Loss Evaluation | Audiologic Workup | `hl_audiogram_done` | Formal Audiogram | `select` |  |  |  |
| Hearing Loss Evaluation | Audiologic Workup | `hl_tympanometry` | Tympanometry Result | `select` |  |  |  |
| Hearing Loss Evaluation | Audiologic Workup | `hl_abr` | Auditory Brainstem Response (ABR) | `select` |  |  |  |
| Hearing Loss Evaluation | Audiologic Workup | `hl_mri_iac` | MRI Internal Auditory Canals | `select` |  |  |  |
| Hearing Loss Evaluation | Treatment | `hl_hearing_aid` | Hearing Aid | `select` |  |  |  |
| Hearing Loss Evaluation | Treatment | `hl_baha` | Bone-Anchored Hearing Aid (BAHA) | `select` |  |  |  |
| Hearing Loss Evaluation | Treatment | `hl_cochlear_implant` | Cochlear Implant | `select` |  |  |  |
| Hearing Loss Evaluation | Treatment | `hl_ssnhl_steroids` | SSNHL Oral Steroids (sudden SNHL within 72 hours) | `select` |  |  |  |
| Hearing Loss Evaluation | Treatment | `hl_aied_treatment` | AIED Treatment | `select` |  |  |  |
| Hearing Loss Evaluation | Treatment | `hl_cerumen_removal` | Cerumen Impaction Management | `select` |  |  |  |
| Hearing Loss Evaluation | Treatment | `hl_noise_protection` | Noise Protection Counseled | `select` |  |  |  |
| Hearing Loss Evaluation | Treatment | `hl_notes` | Additional Notes | `textarea` |  |  |  |

### Vertigo / Vestibular — `ent_vestibular_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Vestibular / Vertigo Assessment | Presentation | `vv_symptom_type` | Predominant Symptom | `select` |  |  |  |
| Vestibular / Vertigo Assessment | Presentation | `vv_duration` | Episode Duration | `select` |  |  |  |
| Vestibular / Vertigo Assessment | Presentation | `vv_triggers` | Triggers (head position change, rising, Valsalva, visual motion, stress) | `textarea` |  |  |  |
| Vestibular / Vertigo Assessment | Presentation | `vv_associated` | Associated Symptoms (nausea/vomiting, tinnitus, hearing loss, ear fullness, headache, diplopia, dysarthria, ataxia) | `textarea` |  |  |  |
| Vestibular / Vertigo Assessment | Presentation | `vv_nihss_flag` | Red Flags for Central Cause (immediate MRI/stroke workup) | `select` |  |  |  |
| Vestibular / Vertigo Assessment | Diagnosis | `vv_diagnosis_select` | Working Diagnosis | `select` |  |  |  |
| Vestibular / Vertigo Assessment | Diagnosis | `vv_dix_hallpike` | Dix-Hallpike Test | `select` |  |  |  |
| Vestibular / Vertigo Assessment | Diagnosis | `vv_hit` | Head Impulse Test (HIT) | `select` |  |  |  |
| Vestibular / Vertigo Assessment | Treatment | `vv_epley` | Epley Canalith Repositioning (BPPV) | `select` |  |  |  |
| Vestibular / Vertigo Assessment | Treatment | `vv_vestibular_rehab` | Vestibular Rehabilitation Therapy (VRT) | `select` |  |  |  |
| Vestibular / Vertigo Assessment | Treatment | `vv_meniere_diet` | Meniere Disease - Low-Sodium Diet | `select` |  |  |  |
| Vestibular / Vertigo Assessment | Treatment | `vv_intratympanic_gent` | Intratympanic Gentamicin (Meniere - ablative) | `select` |  |  |  |
| Vestibular / Vertigo Assessment | Treatment | `vv_intratympanic_steroid` | Intratympanic Steroid (Meniere - preserving) | `select` |  |  |  |
| Vestibular / Vertigo Assessment | Treatment | `vv_vng` | Videonystagmography (VNG) / Caloric Testing | `select` |  |  |  |
| Vestibular / Vertigo Assessment | Treatment | `vv_antiemetic` | Acute Symptom Management | `select` |  |  |  |
| Vestibular / Vertigo Assessment | Treatment | `vv_notes` | Additional Notes | `textarea` |  |  |  |

### Vertigo/Vestibular — `vertigo_vestibular_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Vertigo and Vestibular Evaluation | Symptom Profile | `vertigo_type` | Dizziness Character | `select` |  |  |  |
| Vertigo and Vestibular Evaluation | Symptom Profile | `onset` | Onset | `select` |  |  |  |
| Vertigo and Vestibular Evaluation | Symptom Profile | `associated_hearing_loss` | Associated hearing loss | `checkbox` |  |  |  |
| Vertigo and Vestibular Evaluation | Symptom Profile | `associated_tinnitus` | Associated tinnitus | `checkbox` |  |  |  |
| Vertigo and Vestibular Evaluation | Symptom Profile | `associated_aural_fullness` | Aural fullness | `checkbox` |  |  |  |
| Vertigo and Vestibular Evaluation | Symptom Profile | `prior_episodes` | Prior similar episodes | `checkbox` |  |  |  |
| Vertigo and Vestibular Evaluation | Physical Exam Findings | `dix_hallpike` | Dix-Hallpike Test | `select` |  |  |  |
| Vertigo and Vestibular Evaluation | Physical Exam Findings | `head_impulse` | Head Impulse Test | `select` |  |  |  |
| Vertigo and Vestibular Evaluation | Physical Exam Findings | `nystagmus` | Nystagmus Description | `text` |  |  |  |
| Vertigo and Vestibular Evaluation | Physical Exam Findings | `romberg` | Romberg Test | `select` |  |  |  |
| Vertigo and Vestibular Evaluation | Diagnosis and Plan | `diagnosis` | Working Diagnosis | `select` |  |  |  |
| Vertigo and Vestibular Evaluation | Diagnosis and Plan | `epley_performed` | Epley/canalith repositioning performed (BPPV) | `checkbox` |  |  |  |
| Vertigo and Vestibular Evaluation | Diagnosis and Plan | `vrt_recommended` | Vestibular rehabilitation therapy recommended | `checkbox` |  |  |  |
| Vertigo and Vestibular Evaluation | Diagnosis and Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Voice Disorders and Laryngology — `ent_laryngology_voice_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Voice Disorders — VFP, Spasmodic Dysphonia, Nodules, Polyps, LPR | Voice Anatomy and Diagnostic Evaluation | `voice_dx` | Stroboscopy, Voice Handicap Index, CAPE-V, and Acoustic Analysis (VOICE DISORDER EVALUATION: HISTORY: ONSET (sudden vs. gradual); QUALITY (hoarse; breathy; strained; diplophonia); DURATION; TRIGGERS; ASSOCIATED SYMPTOMS (dysphagia; odynophagia; globus; otalgia; stridor); OCCUPATION (teacher; singer; public speaker); EXPOSURES (tobacco; LPR; chemicals); PRIOR SURGERY (thyroid; cardiac; thoracic; cervical spine); INTUBATION HISTORY; VOICE HANDICAP INDEX (VHI-10): 10-item questionnaire; functional; emotional; physical subscales; 0-40 score; >11 significant handicap; CAPE-V (Consensus Auditory-Perceptual Evaluation of Voice): GRADE; ROUGHNESS; BREATHINESS; STRAIN; PITCH; LOUDNESS; 100 mm VAS scale; ACOUSTIC ANALYSIS: JITTER (pitch perturbation); SHIMMER (amplitude perturbation); HNR (harmonics-to-noise ratio); cepstral peak prominence (CPP); AERODYNAMIC TESTING: MAXIMUM PHONATION TIME (MPT) <10 sec in women or <11 sec in men = pathological; SUBGLOTTIC PRESSURE; AIR FLOW; GLOTTAL EFFICIENCY; LARYNGOSCOPY: FLEXIBLE LARYNGOSCOPY (NASOPHARYNGOLARYNGOSCOPY): transnasal; office procedure; visualization of all laryngeal structures; RIGID LARYNGOSCOPY (90 degree or 70 degree telescope): magnified view; difficult for dynamic assessment; VIDEOSTROBOSCOPY: KEY DIAGNOSTIC TOOL; strobe light at near-vocal-fold vibration rate; visualizes MUCOSAL WAVE; VIBRATORY CLOSURE; GLOTTAL CLOSURE PATTERN; PHASE SYMMETRY; PHASE CLOSURE; LARYNGEAL HIGH-SPEED VIDEOGRAPHY (HSV): actual vibration cycles; research; NARROW BAND IMAGING (NBI): enhanced vascular contrast; lesion margins; malignancy detection; ELECTROMYOGRAPHY (LEMG): laryngeal EMG; needle electrodes in thyroarytenoid + cricothyroid muscles; PROGNOSIS for VFP recovery; identifies neuropathic vs. cricoarytenoid fixation; VOICE THERAPY REFERRAL: speech-language pathologist (SLP); voice therapy FIRST for most non-surgical conditions; 4-8 weeks minimum | `text` |  |  |  |
| Voice Disorders — VFP, Spasmodic Dysphonia, Nodules, Polyps, LPR | Voice Anatomy and Diagnostic Evaluation | `common_lesions` | Vocal Fold Nodules vs. Polyps vs. Cysts — Differential and Management | `select` |  |  |  |
| Voice Disorders — VFP, Spasmodic Dysphonia, Nodules, Polyps, LPR | Vocal Fold Paralysis and Spasmodic Dysphonia | `vfp_overview` | Unilateral vs. Bilateral VFP, Etiology by Location, Injection Augmentation, and Thyroplasty (VOCAL FOLD PARALYSIS (VFP): UNILATERAL VFP (UVFP): BREATHY; WEAK voice; ASPIRATION risk; COMPLETE or PARTIAL; ETIOLOGY: LEFT RECURRENT LARYNGEAL NERVE (RLN): longer course under aortic arch; more common; CAUSES: THYROID SURGERY (most common iatrogenic); MALIGNANCY (lung; thyroid; esophageal; mediastinal); CARDIAC SURGERY (CABG with left internal mammary); AORTIC ANEURYSM; NECK SURGERY; IDIOPATHIC (viral neuropathy); RIGHT RLN: intrathoracic mass; thyroid; aortic; SUPERIOR LARYNGEAL NERVE (SLN): external branch; cricothyroid muscle; higher pitch impairment; WORKUP: CT SCAN neck to skull base to chest (all RLN course); MRI brain + skull base if central cause suspected; THYROID ULTRASOUND; LARYNGEAL EMG (LEMG): distinguishes neuropraxia (good prognosis) from axonotmesis/neurotmesis (poor prognosis); GLOTTAL GAP assessment; SWALLOWING EVALUATION (MBSS or FEES) if aspiration suspected; NATURAL HISTORY: 33% spontaneous recovery; wait 6-12 months if etiology known; TREATMENT UVFP: TEMPORARY: VOCAL FOLD INJECTION AUGMENTATION: HYALURONIC ACID; GELFOAM; RADIESSE; office or operating room; in-office awake; medialization brings paralyzed fold to midline; IMPROVES glottic closure; temporary 3-6 months (allows monitoring for recovery); PERMANENT: MEDIALIZATION THYROPLASTY (TYPE I THYROPLASTY): SILASTIC IMPLANT or Gore-Tex through thyroid cartilage window; awake procedure with voice assessment; ARYTENOID ADDUCTION: suture to adduct arytenoid; combined with thyroplasty for large posterior glottic gap; REINNERVATION: ansa cervicalis-RLN anastomosis; prevents atrophy; BILATERAL VFP: BIPHASIC STRIDOR; AIRWAY COMPROMISE; TRACHEOTOMY (immediate if severe); CORDOTOMY (lateralization of one vocal fold); ARYTENOIDECTOMY; POSTERIOR GLOTTOPLASTY; LASER TRANSVERSE CORDOTOMY; tradeoff: voice quality vs. airway | `text` |  |  |  |
| Voice Disorders — VFP, Spasmodic Dysphonia, Nodules, Polyps, LPR | Vocal Fold Paralysis and Spasmodic Dysphonia | `spasmodic` | Adductor vs. Abductor Spasmodic Dysphonia, Botulinum Toxin Type A Injection, and Essential Tremor Distinction | `select` |  |  |  |

## Obstetrics

### Gestational Diabetes — `obstetrics_gdm_management_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Gestational Diabetes Mellitus (GDM): Diagnosis and Management | Diagnosis and Risk Assessment | `gdm_screening` | Screening and Diagnostic Approach | `select` |  |  |  |
| Gestational Diabetes Mellitus (GDM): Diagnosis and Management | Diagnosis and Risk Assessment | `gdm_risk_factors` | GDM Risk Factors Present | `select` |  |  |  |
| Gestational Diabetes Mellitus (GDM): Diagnosis and Management | Diagnosis and Risk Assessment | `gdm_hba1c_diagnosis` | HbA1c at diagnosis (if checked) — HbA1c above 6.5% at any visit = pregestational T2DM (not GDM); HbA1c 5.7-6.4% = pregestational prediabetes; confirms diagnosis vs GDM (first identified in pregnancy) | `text` |  |  |  |
| Gestational Diabetes Mellitus (GDM): Diagnosis and Management | Medical Nutrition Therapy and Glucose Management | `gdm_glycemic_targets` | Glycemic Targets in GDM | `select` |  |  |  |
| Gestational Diabetes Mellitus (GDM): Diagnosis and Management | Medical Nutrition Therapy and Glucose Management | `gdm_mnt` | Medical Nutrition Therapy (MNT) — First-Line | `select` |  |  |  |
| Gestational Diabetes Mellitus (GDM): Diagnosis and Management | Medical Nutrition Therapy and Glucose Management | `gdm_medication` | Pharmacotherapy (when MNT fails to achieve targets) | `select` |  |  |  |
| Gestational Diabetes Mellitus (GDM): Diagnosis and Management | Medical Nutrition Therapy and Glucose Management | `gdm_obstetric_monitoring` | Obstetric Monitoring in GDM | `select` |  |  |  |
| Gestational Diabetes Mellitus (GDM): Diagnosis and Management | Medical Nutrition Therapy and Glucose Management | `gdm_labor` | Intrapartum Glucose Management | `select` |  |  |  |
| Gestational Diabetes Mellitus (GDM): Diagnosis and Management | Medical Nutrition Therapy and Glucose Management | `gdm_postpartum` | Postpartum Follow-Up and T2DM Prevention | `select` |  |  |  |
| Gestational Diabetes Mellitus (GDM): Diagnosis and Management | Medical Nutrition Therapy and Glucose Management | `gdm_notes` | GDM Management Notes and MFM/Endocrinology Coordination | `textarea` |  |  |  |

### Gestational Diabetes — `obstetrics_gestational_diabetes_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Gestational Diabetes: Screening, Diagnosis, and Management | Screening, Diagnosis, and Risk Assessment | `gdm_screening_method` | GDM Screening Approach | `select` |  |  |  |
| Gestational Diabetes: Screening, Diagnosis, and Management | Screening, Diagnosis, and Risk Assessment | `gdm_risk_factors` | GDM Risk Factors and Overt DM Distinction | `select` |  |  |  |
| Gestational Diabetes: Screening, Diagnosis, and Management | Screening, Diagnosis, and Risk Assessment | `gdm_monitoring` | Blood Glucose Monitoring Targets (ACOG) — fasting: below 95 mg/dL (ADA below 95; some centers below 90); 1-hour postprandial: below 140 mg/dL; 2-hour postprandial: below 120 mg/dL; insulin initiation threshold: fasting above 95 after 1-2 weeks dietary trial; 1h PP above 140 despite diet; home glucose meter (finger-stick 4x/day: fasting + after each meal); CGM in pregnancy: CONCEPTT trial (type 1 DM): improved outcomes; ADA 2024: CGM may be considered in GDM; HbA1c not routinely monitored in GDM (reflects prior 3 months; less useful in rapidly changing pregnancy state); ketone monitoring: not routine in GDM unless very low carbohydrate diet | `text` |  |  |  |
| Gestational Diabetes: Screening, Diagnosis, and Management | Dietary, Medical, and Obstetric Management | `gdm_diet` | Medical Nutrition Therapy (MNT) | `select` |  |  |  |
| Gestational Diabetes: Screening, Diagnosis, and Management | Dietary, Medical, and Obstetric Management | `gdm_insulin` | Insulin Therapy in GDM | `select` |  |  |  |
| Gestational Diabetes: Screening, Diagnosis, and Management | Dietary, Medical, and Obstetric Management | `gdm_oral` | Oral Agents: Metformin and Glyburide | `select` |  |  |  |
| Gestational Diabetes: Screening, Diagnosis, and Management | Dietary, Medical, and Obstetric Management | `gdm_obstetric` | Obstetric Monitoring and Delivery Planning | `select` |  |  |  |
| Gestational Diabetes: Screening, Diagnosis, and Management | Dietary, Medical, and Obstetric Management | `gdm_complications` | Neonatal Complications Monitoring — neonatal hypoglycemia (below 47 mg/dL in first 24h): check glucose at 1h and Q3-6h x24h; early feeding; if below 25 mg/dL or symptomatic: IV dextrose; macrosomia: above 4000 g; associated with operative delivery + shoulder dystocia; PIVOTAL: polyhydramnios (AFI above 25 or DVP above 8 cm); respiratory distress syndrome; hyperbilirubinemia (jaundice); polycythemia; hypomagnesemia; hypocalcemia (tetany); long-term: offspring of GDM mothers: 2x risk of metabolic syndrome; higher obesity and T2DM risk in childhood/adulthood; epigenetic programming; breastfeeding reduces offspring T2DM risk; maternal: GDM recurrence in 30-70%; preeclampsia risk; 50% T2DM within 10 years (more rapid if BMI obese at delivery) | `text` |  |  |  |
| Gestational Diabetes: Screening, Diagnosis, and Management | Dietary, Medical, and Obstetric Management | `gdm_notes` | GDM Management Notes and MFM/Endocrinology/Dietitian/Neonatology/PCP Coordination | `textarea` |  |  |  |

### High-Risk Pregnancy — `obstetrics_high_risk_pregnancy_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| High-Risk Pregnancy (Maternal-Fetal Medicine) | Pregnancy Overview and Risk Factors | `hrob_gestational_age` | Gestational Age (weeks + days) and EDD by LMP / Ultrasound | `text` |  |  |  |
| High-Risk Pregnancy (Maternal-Fetal Medicine) | Pregnancy Overview and Risk Factors | `hrob_gravida_para` | Gravida / Para / TPAL (Term/Preterm/Abortus/Living) | `text` |  |  |  |
| High-Risk Pregnancy (Maternal-Fetal Medicine) | Pregnancy Overview and Risk Factors | `hrob_primary_risk_factor` | Primary High-Risk Indication | `select` |  |  |  |
| High-Risk Pregnancy (Maternal-Fetal Medicine) | Pregnancy Overview and Risk Factors | `hrob_mfm_referral` | MFM (Maternal-Fetal Medicine) Co-Management | `select` |  |  |  |
| High-Risk Pregnancy (Maternal-Fetal Medicine) | Fetal Surveillance and Monitoring | `hrob_last_us` | Date of Last Growth Ultrasound | `date` |  |  |  |
| High-Risk Pregnancy (Maternal-Fetal Medicine) | Fetal Surveillance and Monitoring | `hrob_efw` | EFW (Estimated Fetal Weight, grams and percentile) — below 10th percentile = FGR; above 90th percentile = macrosomia | `text` |  |  |  |
| High-Risk Pregnancy (Maternal-Fetal Medicine) | Fetal Surveillance and Monitoring | `hrob_afv` | Amniotic Fluid Volume | `select` |  |  |  |
| High-Risk Pregnancy (Maternal-Fetal Medicine) | Fetal Surveillance and Monitoring | `hrob_doppler` | Umbilical Artery Doppler (for FGR surveillance) | `select` |  |  |  |
| High-Risk Pregnancy (Maternal-Fetal Medicine) | Fetal Surveillance and Monitoring | `hrob_nst` | Most Recent NST Result | `select` |  |  |  |
| High-Risk Pregnancy (Maternal-Fetal Medicine) | Fetal Surveillance and Monitoring | `hrob_cervical_length` | Cervical Length (mm) by Transvaginal US — below 25 mm at 16-24 weeks warrants intervention; below 10 mm = very high preterm birth risk | `text` |  |  |  |
| High-Risk Pregnancy (Maternal-Fetal Medicine) | Preeclampsia and GDM Management | `hrob_bp_trend` | Blood Pressure Status | `select` |  |  |  |
| High-Risk Pregnancy (Maternal-Fetal Medicine) | Preeclampsia and GDM Management | `hrob_gdm_control` | GDM Glycemic Control | `select` |  |  |  |
| High-Risk Pregnancy (Maternal-Fetal Medicine) | Preeclampsia and GDM Management | `hrob_antenatal_steroids` | Antenatal Corticosteroid Administration | `select` |  |  |  |
| High-Risk Pregnancy (Maternal-Fetal Medicine) | Preeclampsia and GDM Management | `hrob_delivery_plan` | Delivery Planning | `select` |  |  |  |
| High-Risk Pregnancy (Maternal-Fetal Medicine) | Preeclampsia and GDM Management | `hrob_notes` | High-Risk Obstetrics Notes and Interdisciplinary Care Plan | `textarea` |  |  |  |

### Preeclampsia — `obstetrics_preeclampsia_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Preeclampsia and Hypertensive Disorders of Pregnancy: Management | Classification and Diagnosis | `htn_type` | Hypertensive Disorder Classification (ACOG 2020) | `select` |  |  |  |
| Preeclampsia and Hypertensive Disorders of Pregnancy: Management | Classification and Diagnosis | `htn_chronic` | Chronic Hypertension Status | `select` |  |  |  |
| Preeclampsia and Hypertensive Disorders of Pregnancy: Management | Classification and Diagnosis | `htn_labs` | Laboratory Assessment — CBC with differential; AST, ALT, LDH; creatinine, BUN; uric acid; PT/INR, fibrinogen (if DIC concern); spot urine protein/creatinine ratio; 24-hour urine protein if time permits; peripheral blood smear (schistocytes for microangiopathy/HELLP); fetal: NST or BPP, Doppler umbilical artery if FGR; serum sFlt-1/PlGF ratio (above 85 European diagnostic aid; elevated weeks before clinical diagnosis; low PlGF below 100 pg/mL: high sensitivity for preeclampsia 4 weeks out; FDA cleared as rule-out test in USA 2023) | `text` |  |  |  |
| Preeclampsia and Hypertensive Disorders of Pregnancy: Management | Acute and Ongoing Management | `htn_acute_treatment` | Acute Severe Hypertension Treatment (SBP ≥160 or DBP ≥110) | `select` |  |  |  |
| Preeclampsia and Hypertensive Disorders of Pregnancy: Management | Acute and Ongoing Management | `htn_magnesium` | Magnesium Sulfate Seizure Prophylaxis | `select` |  |  |  |
| Preeclampsia and Hypertensive Disorders of Pregnancy: Management | Acute and Ongoing Management | `htn_delivery` | Delivery Timing and Mode | `select` |  |  |  |
| Preeclampsia and Hypertensive Disorders of Pregnancy: Management | Acute and Ongoing Management | `htn_prevention` | Prevention (Next Pregnancy) | `select` |  |  |  |
| Preeclampsia and Hypertensive Disorders of Pregnancy: Management | Acute and Ongoing Management | `htn_postpartum` | Postpartum Management and Cardiovascular Risk | `select` |  |  |  |
| Preeclampsia and Hypertensive Disorders of Pregnancy: Management | Acute and Ongoing Management | `htn_notes` | Preeclampsia Management Notes and MFM/OB/Anesthesia/Cardiology Coordination | `textarea` |  |  |  |
