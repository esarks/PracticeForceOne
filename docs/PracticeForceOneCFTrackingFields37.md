---
title: "PracticeForceOneCFTrackingFields37"
---

# CF Tracking — Field-Level Detail (part 37 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Documents**, **Family Medicine**, **Gynecologic Oncology**, **Interventional Cardiology**, **Maternal-Fetal Medicine**, **Pain Management**, **Pain Medicine**, **Pediatric**, **Quality**, **Radiation Oncology**, **Thoracic Surgery**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Documents

### Document Folders — `DOCUMENT_FOLDERS`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `DOCUMENTS`, `DOCUMENT_FOLDERS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Document Folder | Folder (hierarchical path; '/' forbidden in name; cycle-guarded moves) | `dfId` | Folder ID (read-only) | `text` |  |  |  |
| Document Folder | Folder (hierarchical path; '/' forbidden in name; cycle-guarded moves) | `dfName` | Folder Name (required; no '/', '.', or '..') | `text` | Y |  |  |
| Document Folder | Folder (hierarchical path; '/' forbidden in name; cycle-guarded moves) | `dfParentId` | Parent Folder ID (null = root) | `text` |  |  |  |
| Document Folder | Folder (hierarchical path; '/' forbidden in name; cycle-guarded moves) | `dfPracticeId` | Practice ID (required) | `text` | Y |  |  |
| Document Folder | Folder (hierarchical path; '/' forbidden in name; cycle-guarded moves) | `dfFullPath` | Full Path (materialized; read-only) | `text` |  |  |  |
| Document Folder | Folder (hierarchical path; '/' forbidden in name; cycle-guarded moves) | `dfSortOrder` | Sort Order (integer; optional) | `text` |  |  |  |
| Document Folder | Folder (hierarchical path; '/' forbidden in name; cycle-guarded moves) | `dfIsShared` | Is Shared Folder (visible to all practice users) | `checkbox` |  |  |  |
| Document Folder | Folder (hierarchical path; '/' forbidden in name; cycle-guarded moves) | `dfDocumentCount` | Document Count (read-only aggregate) | `text` |  |  |  |

### Fax Inbox/Outbox — `fax_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Fax Details | Fax Information | `direction` | Direction | `select` | Y |  |  |
| Fax Details | Fax Information | `status` | Status | `select` |  |  |  |
| Fax Details | Fax Information | `senderFax` | From Fax Number | `tel` |  |  |  |
| Fax Details | Fax Information | `recipientFax` | To Fax Number | `tel` |  |  |  |
| Fax Details | Fax Information | `subject` | Subject | `text` |  |  |  |
| Fax Details | Fax Information | `documentType` | Document Type | `select` |  |  |  |
| Fax Details | Fax Information | `pages` | Pages | `number` |  |  |  |
| Fax Details | Triage & Routing (ECW-DOC-6/9) | `triageStatus` | Triage Status | `select` |  |  |  |
| Fax Details | Triage & Routing (ECW-DOC-6/9) | `patientId` | Linked Patient ID | `text` |  |  |  |
| Fax Details | Triage & Routing (ECW-DOC-6/9) | `routingRule` | Routing Rule Applied | `select` |  |  |  |
| Fax Details | Triage & Routing (ECW-DOC-6/9) | `portalPublish` | Publish to Patient Portal | `checkbox` |  |  |  |
| Fax Details | Triage & Routing (ECW-DOC-6/9) | `triageNotes` | Triage Notes | `textarea` |  |  |  |
| Fax Details | Outbound Queue & Failure (ECW-DOC-7/8) | `failureReason` | Failure Reason | `text` |  |  |  |
| Fax Details | Outbound Queue & Failure (ECW-DOC-7/8) | `retryCount` | Retry Attempts | `number` |  |  |  |
| Fax Details | Outbound Queue & Failure (ECW-DOC-7/8) | `softDelete` | Soft Delete (remove from inbox) | `checkbox` |  |  |  |

### Patient Documents — `patient_documents_cf`

Screen: 0 page(s) · 0 section(s) · 0 field(s) · UI STUB · DB BUILT · tables `APPEALS`, `AUTHORIZATIONS`, `CLAIMS`, `DENIALS`, `DOCUMENTS`, `DOCUMENT_ACCESS_LOG`, `DOCUMENT_FOLDERS`, `PATIENTS`, `PRACTICES`

_No fields declared (nav stub)._

### Scan Queue — `scan_queue_cf`

Screen: 1 page(s) · 2 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Document Scan Queue | Index Document | `documentType` | Document Type | `select` | Y |  |  |
| Document Scan Queue | Index Document | `patientLink` | Link to Patient | `typeahead` |  |  |  |
| Document Scan Queue | Index Document | `encounterLink` | Link to Encounter ID | `text` |  |  |  |
| Document Scan Queue | Index Document | `documentDate` | Document Date | `date` | Y |  |  |
| Document Scan Queue | Index Document | `documentSource` | Source / Sender | `text` |  |  |  |
| Document Scan Queue | Index Document | `documentTitle` | Document Title / Description | `text` | Y |  |  |
| Document Scan Queue | Index Document | `urgentReview` | Requires urgent provider review | `checkbox` |  |  |  |
| Document Scan Queue | Index Document | `routeTo` | Route to Provider | `typeahead` |  |  |  |
| Document Scan Queue | Index Document | `indexingNotes` | Indexing Notes | `textarea` |  |  |  |
| Document Scan Queue | Queue Status | `queueFilter` | Filter Queue | `select` |  |  |  |
| Document Scan Queue | Queue Status | `queueCount` | Documents in Queue | `number` |  |  |  |
| Document Scan Queue | Queue Status | `oldestPending` | Oldest Pending Document | `date` |  |  |  |

## Family Medicine

### Alcohol Use Disorder Counseling — `family_medicine_alcohol_counseling_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Alcohol Screening, Brief Intervention, and Treatment — AUD Diagnosis and Pharmacotherapy | Alcohol Screening and Brief Intervention | `alcohol_overview` | AUDIT and AUDIT-C Screening, NIAAA Low-Risk Limits, SBIRT Framework, CAGE Questions, and Single-Question Screening (ALCOHOL SCREENING AND BRIEF INTERVENTION: NIAAA LOW-RISK DRINKING LIMITS: MEN: <=4 drinks/day AND <=14 drinks/week; WOMEN: <=3 drinks/day AND <=7 drinks/week; AGE >=65: same as women (reduced metabolism); STANDARD DRINK = 14 g PURE ALCOHOL: 12 oz regular beer (5%); 5 oz wine (12%); 1.5 oz spirits (40%); UNHEALTHY ALCOHOL USE SPECTRUM: AT-RISK: exceeds low-risk limits; BINGE DRINKING: >=4 drinks (women)/5 drinks (men) within 2 hours; HEAVY DRINKING: exceeds weekly limits; AUD (ALCOHOL USE DISORDER): DSM-5 criteria; ALCOHOL USE DISORDER IDENTIFICATION TEST (AUDIT): WHO validated tool; 10 questions; SCORE: 0-7 LOWER RISK; 8-15 INCREASING RISK; 16-19 HIGHER RISK; >=20 POSSIBLE DEPENDENCE; AUDIT-C (SHORT FORM): 3 questions (frequency; typical quantity; binge frequency); SCORE: MEN >=4; WOMEN >=3 = positive screen; SINGLE-QUESTION SCREEN: "How many times in the past year have you had >=5 (men) or >=4 (women) drinks in one day?"; >=1 time = positive; SENSITIVITY 82%; SPECIFICITY 79%; CAGE QUESTIONS: C (Cut down); A (Annoyed by criticism); G (Guilty feelings); E (Eye-opener); >=2 positive = concerning; LOWER SENSITIVITY than AUDIT; MAST (Michigan Alcohol Screening Test): 25 questions; SBIRT FRAMEWORK: SCREENING: AUDIT/AUDIT-C/single question; BRIEF INTERVENTION (BI): for at-risk/hazardous; REFERRAL TO TREATMENT (RT): for AUD; USPSTF GRADE B: screen all adults >=18 years; BRIEF INTERVENTION: FRAMES APPROACH: FEEDBACK: inform about risk; RESPONSIBILITY: patient chooses; ADVICE: clear recommendation to reduce/quit; MENU: multiple options presented; EMPATHY: reflective listening; SELF-EFFICACY: build confidence; MOTIVATIONAL INTERVIEWING (MI): foundational technique; DURATION: 5-15 minutes; EFFECTIVENESS: moderate reduction in unhealthy use; BRIEF MOTIVATIONAL COUNSELING: >=3 sessions; MORE INTENSIVE than BI; for AUD | `text` |  |  |  |
| Alcohol Screening, Brief Intervention, and Treatment — AUD Diagnosis and Pharmacotherapy | Alcohol Screening and Brief Intervention | `aud_diagnosis` | DSM-5 AUD Criteria (Mild 2-3, Moderate 4-5, Severe >=6 of 11), CAGE-AID, AUDIT Score Interpretation, and CIWA-Ar Withdrawal Assessment Tool | `select` |  |  |  |
| Alcohol Screening, Brief Intervention, and Treatment — AUD Diagnosis and Pharmacotherapy | AUD Pharmacotherapy and Referral to Treatment | `aud_medications` | Naltrexone (COMBINE Trial, ReVia/Vivitrol Monthly IM), Acamprosate (GABA/Glutamate Balance, COMBINE Trial), Disulfiram (Antabuse, Aldehyde Dehydrogenase Inhibitor), and Gabapentin and Baclofen Off-Label (AUD PHARMACOTHERAPY: NALTREXONE (REVIA; VIVITROL): MU-OPIOID RECEPTOR ANTAGONIST; MECHANISM: BLOCKS REWARD/REINFORCEMENT of alcohol (endorphin release blocked); reduces craving; reduces relapse to heavy drinking; COMBINE TRIAL (JAMA 2006; 1383 patients): naltrexone reduced heavy drinking days + increased abstinence; best with behavioral intervention; ORAL (ReVia): 50 mg QD; MONTHLY INJECTION (Vivitrol): 380 mg IM Q4W; EVIDENCE: reduces HEAVY DRINKING DAYS by 4/month; CONTRAINDICATIONS: OPIOID USE (acute withdrawal; competing opioid analgesic need); HEPATITIS (active; LFTs >3-5x ULN); LIVER FAILURE; PREGNANCY; SIDE EFFECTS: NAUSEA; HEADACHE; ABDOMINAL PAIN; ELEVATED LFTs (monitor); ACAMPROSATE (CAMPRAL): MECHANISM: GABA-B AGONIST + NMDA GLUTAMATE ANTAGONIST; NORMALIZES NEUROTRANSMITTER BALANCE after withdrawal; REDUCES PROTRACTED WITHDRAWAL SYMPTOMS (anxiety; dysphoria); DOSE: 666 mg TID (2 tablets 3x/day); RENALLY CLEARED (safe in liver disease; avoid in CKD); COMBINE TRIAL: acamprosate less effective than naltrexone in US population; more effective in alcohol-dependent with abstinence goal; META-ANALYSIS: superior to placebo for maintaining abstinence; COMBINE: COMBINATION of naltrexone + acamprosate: no additional benefit vs. naltrexone alone; DISULFIRAM (ANTABUSE): ALDEHYDE DEHYDROGENASE INHIBITOR; MECHANISM: BLOCKS acetaldehyde metabolism; DISULFIRAM-ALCOHOL REACTION: flushing; nausea; vomiting; hypotension; palpitations; headache; AVERSION THERAPY; DOSE: 250-500 mg QD; MONITORING: LFTs; neurological; CONTRAINDICATIONS: CORONARY ARTERY DISEASE; PSYCHOSIS; PREGNANCY; MEDICATIONS with alcohol (tinctures); uncontrolled seizures; EFFECTIVENESS: ADHERENCE DEPENDENT; supervised administration (partner-observed) improves outcomes; GABAPENTIN (OFF-LABEL): reduces cravings + withdrawal; EVIDENCE: MASON TRIAL (JAMA IM 2014): gabapentin 900-1800 mg/day; increased abstinence vs. placebo; TOPIRAMATE (OFF-LABEL): reduces heavy drinking; cognitive side effects; FDA not approved; BACLOFEN (OFF-LABEL): GABA-B agonist; approved in France; REDUCE study; mixed US evidence; possible use in patients with cirrhosis; VARENICLINE (CHANTIX): nicotinic acetylcholine antagonist; reduces alcohol craving (off-label); NALMEFENE (SELINCRO; not US approved): similar to naltrexone; approved EU for harm reduction | `text` |  |  |  |
| Alcohol Screening, Brief Intervention, and Treatment — AUD Diagnosis and Pharmacotherapy | AUD Pharmacotherapy and Referral to Treatment | `aud_treatment_referral` | Behavioral Therapies (CBT, Motivational Enhancement, Twelve-Step Facilitation, SMART Recovery), Residential vs. Outpatient IOP/OP Treatment Levels, and ASAM Criteria | `select` |  |  |  |

### Cancer Screening Protocols — `family_medicine_preventive_cancer_screening_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cancer Screening — Breast, Colon, Lung, Cervical, Prostate | Breast and Colorectal Cancer Screening | `breast_screen` | Mammography USPSTF 2024, Dense Breast Supplemental Screening, and High-Risk MRI (BREAST CANCER SCREENING: USPSTF 2024 UPDATE: MAMMOGRAPHY EVERY 2 YEARS starting at age 40 (CHANGED from 50 in 2016 update); BIENNIAL preferred; ANNUAL vs. BIENNIAL: ACS recommends annual starting at 40; USPSTF biennial; NO UPPER AGE LIMIT specified by USPSTF but benefit-harm balance individualized >=75; SCREENING MODALITIES: DIGITAL BREAST TOMOSYNTHESIS (3D MAMMOGRAPHY, DBT): improved cancer detection rate; reduced recall rate; FDA cleared; replacing 2D in most centers; DIGITAL MAMMOGRAPHY (2D): standard; SCREENING INTERVAL: average risk: every 2 years (USPSTF) or annual (ACS, ACOG); HIGH-RISK DEFINITION: lifetime risk >=20-25% (Tyrer-Cuzick or BOADICEA model); known BRCA1/2 pathogenic variant; first-degree relative with BRCA; chest radiation 10-30 years old; Li-Fraumeni; Cowden; Bannayan-Riley-Ruvalcaba syndrome; HIGH-RISK SUPPLEMENTAL SCREENING: BREAST MRI ANNUALLY (starting at age 25-30 for BRCA+ or age 30 for other high-risk); ULTRASOUND: if MRI contraindicated; dense breast; DENSE BREAST NOTIFICATION: 45 states require notification; CATEGORY C (heterogeneously dense) or D (extremely dense): supplemental ultrasound or MRI discussion; ACR BI-RADS density: A-D; MRBI (MRI Breast Imaging Reporting and Data System); RISK ASSESSMENT MODEL: TYRER-CUZICK: best for genetic + family history; GAIL MODEL: for general population; outputs absolute 5-year + lifetime risk; NIPPLE DISCHARGE EVALUATION: unilateral bloody = imaging + cytology; NIPPLE ULTRASOUND; DUCTOGRAM; CHEMOPREVENTION: USPSTF: high-risk women >=35; TAMOXIFEN, RALOXIFENE, or AROMATASE INHIBITORS reduce risk 37-65%; discuss benefit vs. side effects; VTE risk (tamoxifen); bone effects; BRCA MANAGEMENT: BRCA1: prophylactic bilateral salpingo-oophorectomy (PBSO) at 35-40; prophylactic mastectomy option; BRCA2: BSO at 40-45; individualized; OLAPARIB/NIRAPARIB: adjuvant for BRCA+ early breast cancer | `text` |  |  |  |
| Cancer Screening — Breast, Colon, Lung, Cervical, Prostate | Breast and Colorectal Cancer Screening | `crc_screen` | Colorectal Cancer USPSTF Screening — Colonoscopy, FIT, MT-sDNA, and High-Risk | `select` |  |  |  |
| Cancer Screening — Breast, Colon, Lung, Cervical, Prostate | Lung, Cervical, and Prostate Screening | `lung_screen` | LDCT Lung Cancer Screening Eligibility, Lung-RADS, and Smoking Cessation Integration (LUNG CANCER SCREENING: USPSTF 2021: LOW-DOSE CT (LDCT) annually; ELIGIBILITY: ages 50-80 + 20 pack-year smoking history + currently smokes OR quit within past 15 years; CHANGED FROM 2013: lowered age from 55 to 50; lowered pack-years from 30 to 20; expands eligible population (includes more women, minorities); NLST TRIAL: LDCT vs. CXR; 20% reduction in lung cancer mortality; 6.7% reduction all-cause mortality; NELSON TRIAL: LDCT vs. no screening; mortality reduction confirmed in Europe; SHARED DECISION-MAKING: required before LDCT; discuss benefits (mortality reduction), harms (false positives, unnecessary procedures, radiation); LUNG-RADS (ACR Lung CT Reporting System): LUNG-RADS 1: negative; annual LDCT; LUNG-RADS 2: benign findings; annual; LUNG-RADS 3: probably benign; 6-month LDCT; LUNG-RADS 4A: suspicious (8-15 mm solid or new <6 mm solid); 3-month LDCT; LUNG-RADS 4B: highly suspicious (>15 mm solid); PET or biopsy; LUNG-RADS 4X: very suspicious + additional feature; diagnostic workup; SMOKING CESSATION INTEGRATION: SCREENING OPPORTUNITY: ldct setting = teachable moment; NRT + varenicline + bupropion offer; SMOKING CESSATION REDUCES CANCER RISK; 5As APPROACH; PULMONARY NODULE MANAGEMENT: FLEISCHNER SOCIETY GUIDELINES for incidentally found nodules (not screening context); SOLID NODULE <6 mm: no follow-up recommended (low risk); 6-8 mm: CT 6-12 months; >8 mm: CT 3 months or PET or biopsy; SUBSOLID NODULE: different guidelines; ground glass vs. part-solid; HIGH-RISK FEATURES: spiculated; irregular; upper lobe; upper lobe location; smoker; FDG uptake; SCREENING CESSATION: age >80 or stopped smoking >=15 years ago or limited life expectancy or cannot tolerate curative therapy | `text` |  |  |  |
| Cancer Screening — Breast, Colon, Lung, Cervical, Prostate | Lung, Cervical, and Prostate Screening | `cervical_prostate` | Cervical Cytology + HPV Co-Testing Schedule and PSA Shared Decision-Making | `select` |  |  |  |

### Chronic Pain Management — `family_medicine_chronic_pain_management_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Pain — Assessment, Non-Opioid Adjuncts, Opioid Safety, and CDC 2022 | Pain Assessment and Non-Opioid Therapy | `pain_overview` | Biopsychosocial Model (Biological + Psychological Catastrophizing/Fear-Avoidance/Depression + Social), Pain Types (Nociceptive/Neuropathic/Nociplastic/Mixed), PEG Scale, Central Sensitization, and Functional Goals Over Pain Scores (CHRONIC PAIN: persisting >3 months; 20-25% US adults; BIOPSYCHOSOCIAL MODEL: BIOLOGICAL (tissue/nerve); PSYCHOLOGICAL (catastrophizing; fear-avoidance; depression; anxiety; PTSD; Pain Catastrophizing Scale); SOCIAL (work disability; litigation; isolation); PAIN TYPES: NOCICEPTIVE (somatic: localized; visceral: diffuse); NEUROPATHIC (burning; shooting; allodynia; hyperalgesia; DPN; PHN; post-stroke; radiculopathy); NOCIPLASTIC (altered nociception without clear damage; fibromyalgia; IBS; central sensitization); MIXED (most common; low back pain); CENTRAL SENSITIZATION: widespread pain; allodynia; pain out of proportion; ASSESSMENT: PEG (Pain intensity; Enjoyment; General activity; 3-item functional tool); BPI; painDETECT (neuropathic component); PHQ-9 + GAD-7; AUDIT-C; ORT (Opioid Risk Tool): 0-7 low; 8-11 moderate; >=12 high; GOALS: FUNCTIONAL not pain-free; 30% reduction = clinically meaningful; MULTIMODAL: PT; CBT (most evidence); ACT; MBSR; occupational therapy; interdisciplinary pain program (IPP) for complex cases) | `text` |  |  |  |
| Chronic Pain — Assessment, Non-Opioid Adjuncts, Opioid Safety, and CDC 2022 | Pain Assessment and Non-Opioid Therapy | `pain_adj` | Non-Opioid Adjuncts: Duloxetine 60 mg SNRI (FDA DPN/Fibromyalgia/MSK), Amitriptyline TCA 25-75 mg QHS NNT 3-4, Gabapentin 1800-3600 mg/day or Pregabalin Schedule V, Topical Lidocaine 5% Patch (FDA PHN), Capsaicin 8% Qutenza 60-min Application 3-Month Relief | `select` |  |  |  |
| Chronic Pain — Assessment, Non-Opioid Adjuncts, Opioid Safety, and CDC 2022 | Opioid Safety and CDC 2022 Guidelines | `pain_cdc` | CDC 2022 Opioid Guidelines: Non-Opioid Preferred, IR Before ER/LA, Start Low Go Slow, Reassess 1-4 Weeks, PDMP Before Each Rx, Baseline UDS, Naloxone Co-Prescribe >=50 MME or CNS Depressants, Avoid Opioid+Benzo Combination, Slow Taper 10%/Week Avoid Abrupt Stop (CDC 2022 CLINICAL PRACTICE GUIDELINE: REPLACES 2016 (less rigid; more individualized); KEY: NONOPIOID PREFERRED for subacute + chronic pain; DISCUSS benefits vs. risks before starting; IR OPIOIDS FIRST: not ER/LA for opioid-naive; LOWEST EFFECTIVE DOSE; START LOW; REASSESS 1-4 WEEKS: pain + function + side effects + adherence; DOSE THRESHOLDS: >=50 MME/day: reassess; consider NALOXONE; >=90 MME/day: justify + document; consider specialist referral (NOT an absolute cap); SAFETY MONITORING: PDMP: check EACH prescription (state databases); UDS: baseline; random; verify opioid present + detect illicit; PILL COUNTS high-risk; MEDICATION AGREEMENTS; CO-PRESCRIBE NALOXONE: >=50 MME/day; concurrent CNS depressants; AVOID OPIOID+BENZODIAZEPINE (synergistic respiratory depression; highest OD risk); TAPER: SLOW 10% per WEEK or slower; AVOID ABRUPT DISCONTINUATION (withdrawal; increased suicide risk); SPECIAL POPULATIONS: ELDERLY (fall/fracture risk); RENAL/HEPATIC (accumulation); PREGNANCY (methadone or buprenorphine preferred; NOT abrupt stop); TRAMADOL: underappreciated risks (serotonin syndrome; seizures; CYP interactions); Schedule IV; ABUSE-DETERRENT FORMULATIONS: crush-resistant; unproven reduction in OUD) | `text` |  |  |  |
| Chronic Pain — Assessment, Non-Opioid Adjuncts, Opioid Safety, and CDC 2022 | Opioid Safety and CDC 2022 Guidelines | `pain_bupe` | Buprenorphine for Chronic Pain: Partial Mu-Agonist Ceiling Effect Respiratory Depression, Belbuca Buccal Film 75-900 mcg Q12h (FDA Chronic Pain), Butrans 7-Day Patch 5-20 mcg/h, No X-Waiver Since Jan 2023, Precipitated Withdrawal Risk When Rotating from Full Agonist | `select` |  |  |  |

### Diabetes Prevention / Prediabetes — `family_medicine_diabetes_prevention_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Prediabetes — DPP, Metformin, GLP-1, and Screening Cascade | Prediabetes Definition and Risk Identification | `prediab_dx` | Prediabetes Criteria and Progression Risk (PREDIABETES DEFINITIONS (ADA): IMPAIRED FASTING GLUCOSE (IFG): FPG 100-125 mg/dL; IMPAIRED GLUCOSE TOLERANCE (IGT): 2h PG 140-199 mg/dL on OGTT; HbA1c: 5.7-6.4% (ADA); 6.0-6.4% (AACE — more selective); PREVALENCE: 35% US adults (88 million); PROGRESSION TO T2DM: ~5-10%/year; RISK FACTORS FOR PROGRESSION: high-normal IFG/IGT (FPG 110-125; HbA1c 6.0-6.4%); high BMI; young age (<60 at diagnosis); family history T2DM; prior GDM; SCREENING INDICATIONS (ADA): overweight/obese + any risk factor; OR age >=35 (repeat Q3 years if normal); RISK FACTORS: family history first-degree; race/ethnicity (AA, Hispanic, Asian, Pacific Islander, Native American); prior GDM; HTN; HDL <35 + TG >250; PCOS; physical inactivity; CVD history; FINDRISC SCORE: Finland Diabetes Risk Score; DIABETES RISK CALCULATOR: ADA online tool; OGTT INDICATIONS: HbA1c 5.7-6.0% (intermediate; need OGTT confirmation); post-GDM follow-up; acromegaly; hemoglobinopathy (unreliable HbA1c); hemolytic anemia; METABOLIC SYNDROME OVERLAP: abdominal obesity + HTN + dyslipidemia + IFG/IGT; METABOLIC SYNDROME TREATMENT: lifestyle; ADDRESS ALL COMPONENTS; PREDIABETES + ASCVD risk: STATIN for CV risk reduction; LOW-DOSE ASPIRIN: primary prevention only if 10-yr risk >10%; COMPLICATION RISK IN PREDIABETES: neuropathy (small fiber); nephropathy (microalbuminuria); retinopathy (beginning); CVD risk intermediate | `text` |  |  |  |
| Prediabetes — DPP, Metformin, GLP-1, and Screening Cascade | Prediabetes Definition and Risk Identification | `screening` | High-Risk Populations and Screening Frequency | `select` |  |  |  |
| Prediabetes — DPP, Metformin, GLP-1, and Screening Cascade | Diabetes Prevention Interventions | `dpp` | Diabetes Prevention Program (DPP) and Lifestyle Intervention (DPP (DIABETES PREVENTION PROGRAM): LANDMARK TRIAL: lifestyle intervention vs. metformin vs. placebo; LIFESTYLE INTERVENTION: 58% reduction in T2DM incidence vs. placebo; METFORMIN: 31% reduction; LIFESTYLE SUPERIOR to metformin (especially age >=60); GOALS: >=7% weight loss (10 lb for 150-lb person = 10.5% body wt); >=150 min/week moderate physical activity (brisk walking); LOW-FAT DIET; STRUCTURED: 16-session core curriculum + monthly maintenance; NATIONAL DPP (CDC): community-based DPP; CMS coverage (2018) for Medicare; COACHES: trained lifestyle coaches; group or individual; DIGITAL DPP: app-based; CDC-recognized; insurance-covered; SUSTAINED BENEFIT: DPPOS (Diabetes Prevention Program Outcomes Study): 15-year follow-up: lifestyle 34% reduction vs. placebo; IMPLEMENTATION: refer all prediabetes patients to National DPP or recognized program; PHYSICAL ACTIVITY ALONE: 150-300 min/week aerobic (moderate intensity) + 2-3x/week resistance training; combined superior to aerobic alone; WEIGHT LOSS: 5-7% body weight = significant T2DM risk reduction; 15%+ (pharmacologic or bariatric): much greater reduction; MEDITERRANEAN DIET: supports prediabetes prevention; WHOLE FOODS: fruits, vegetables, whole grains, legumes, nuts; DASH DIET: blood pressure + T2DM prevention; ALCOHOL: moderate (if consumed): not protective for DM; SLEEP: poor sleep + OSA = insulin resistance; treat OSA; optimize sleep hygiene; STRESS REDUCTION: cortisol-induced hyperglycemia; mindfulness; CBT | `text` |  |  |  |
| Prediabetes — DPP, Metformin, GLP-1, and Screening Cascade | Diabetes Prevention Interventions | `metformin_glp1_prev` | Metformin, GLP-1 Agonists, and Bariatric for Prevention | `select` |  |  |  |

### Preventive Wellness Visit — `family_medicine_preventive_wellness_cf`

Screen: 1 page(s) · 3 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Adult Preventive Health and Wellness Visit (USPSTF) | Vital Signs and Anthropometrics | `bp_screen` | Blood Pressure Screening (USPSTF A) | `select` |  |  |  |
| Adult Preventive Health and Wellness Visit (USPSTF) | Vital Signs and Anthropometrics | `bmi` | BMI (kg/m2; USPSTF B: screen adults for obesity; BMI ≥30 = obese; refer to intensive multicomponent behavioral intervention ≥12 sessions/year; pharmacologic options: semaglutide (Wegovy) or tirzepatide (Zepbound) for BMI ≥30 or ≥27 + comorbidity; bariatric surgery BMI ≥35 + comorbidity or ≥40) | `number` |  |  |  |
| Adult Preventive Health and Wellness Visit (USPSTF) | Cancer Screening (USPSTF) | `colon_screen` | Colorectal Cancer Screening (USPSTF A) | `select` |  |  |  |
| Adult Preventive Health and Wellness Visit (USPSTF) | Cancer Screening (USPSTF) | `breast_screen` | Breast Cancer Screening | `select` |  |  |  |
| Adult Preventive Health and Wellness Visit (USPSTF) | Cancer Screening (USPSTF) | `cervical_screen` | Cervical Cancer Screening (USPSTF A) | `select` |  |  |  |
| Adult Preventive Health and Wellness Visit (USPSTF) | Immunizations and Counseling | `vaccines` | Immunization Review (annual influenza; COVID updated vaccine; Tdap once then Td Q10 years; RSV (Abrysvo/Mresvia) for 60+ or pregnant 32-36w; pneumococcal: PCV20 or PCV15 + PPSV23 for 65+; zoster (Shingrix) RZV 2-dose at 50+; HPV through 26 (shared decision 27-45); hepatitis B: catch-up through 59, offer 60+ (Heplisav-B 2-dose preferred adult); hepatitis A: travelers or chronic liver disease) | `textarea` |  |  |  |
| Adult Preventive Health and Wellness Visit (USPSTF) | Immunizations and Counseling | `behavioral_counseling` | Behavioral Counseling Priorities (tobacco: USPSTF A cessation counseling + pharmacotherapy (NRT + varenicline + bupropion); alcohol: AUDIT-C screen; brief intervention if positive; physical activity: ≥150 min/week moderate + 2 muscle-strengthening days; diet: Mediterranean or DASH; stress management; firearm storage if firearms in home; fall prevention age 65+: exercise programs + vitamin D) | `textarea` |  |  |  |

### Smoking Cessation — `family_medicine_smoking_cessation_depth_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Smoking Cessation — Assessment, Pharmacotherapy, and Counseling | Smoking Assessment and Readiness | `sc_f1` | Smoking Cessation 5A Model: Ask (All Patients Every Visit), Advise (Clear Strong Personalized Stop Advice), Assess (Readiness to Quit), Assist (Set Quit Date + Pharmacotherapy + Counseling), Arrange (Follow-Up Within First Week), USPSTF Grade A Counseling and Medication, and Fagerström Test for Nicotine Dependence (5A MODEL: 1) ASK: tobacco use every patient every visit; vital sign; electronic prompts; 2) ADVISE: clear strong personalized message; "quitting smoking is the most important thing you can do for your health"; 3) ASSESS: readiness to quit; STAGES OF CHANGE: precontemplation (not thinking); contemplation (considering); preparation (ready to quit in 30 days); action; maintenance; 4) ASSIST: SET QUIT DATE; PHARMACOTHERAPY; COUNSELING; problem-solving; social support; MOTIVATIONAL INTERVIEWING for precontemplators; 5) ARRANGE: follow-up call/visit within 1 week after quit date; QUITLINE: 1-800-QUIT-NOW; FAGERSTROM NICOTINE DEPENDENCE: cigarettes per day; time to first cigarette (<30 min = high dependence); high score predicts greater benefit from NRT; PACK-YEAR HISTORY: packs/day x years; lung cancer screening criteria; BRIEF COUNSELING: even 3 minutes increases cessation rates) | `text` |  |  |  |
| Smoking Cessation — Assessment, Pharmacotherapy, and Counseling | Smoking Assessment and Readiness | `sc_f2` | Pharmacotherapy Efficacy Comparison: Varenicline Superior to NRT and Bupropion (Abstinence Rate 33% vs. 23% NRT), Combination NRT (Patch Plus Short-Acting) Better Than Single NRT, Bupropion SR 150 mg BID Antidepressant Mechanism, Combination Varenicline Plus NRT Patch, and Cytisine Low-Cost Alkaloid Alternative | `select` |  |  |  |
| Smoking Cessation — Assessment, Pharmacotherapy, and Counseling | Pharmacotherapy Details and Counseling | `sc_f3` | Varenicline Champix/Chantix 0.5 mg QD x3 Days then 0.5 mg BID x4 Days then 1 mg BID (Partial Nicotinic Agonist; Reduces Craving and Withdrawal; Blocks Nicotine Reward); NRT Forms: Patch 7-14-21 mg 24h, Gum 2-4 mg PRN Chewed-Parked, Lozenge 2-4 mg, Inhaler, Nasal Spray; Bupropion SR 150 mg QD x3 Days then 150 mg BID Started 1-2 Weeks Before Quit Date (PHARMACOTHERAPY DETAILS: VARENICLINE: DOSE: 0.5 mg QD x3 days; 0.5 mg BID x4 days; 1 mg BID x12 weeks; START 1-2 weeks before quit date; MECHANISM: partial agonist at alpha4-beta2 nicotinic acetylcholine receptor; reduces withdrawal + cravings + blocks nicotine reward; SIDE EFFECTS: nausea (take with food; water; largest meal); insomnia; vivid dreams; DURATION: 12 weeks; may extend to 24 weeks; VARENICLINE + DEPRESSION: monitor; black box removed 2016; NRT NICOTINE PATCH: 21 mg 24h (>10 cigarettes/day); 14 mg; 7 mg; 6-12 weeks; rotate sites; avoid cutting; NRT GUM: 4 mg (>25 cig/day); 2 mg; chew-and-park technique (bite; park between cheek/gum; repeat); acidic beverages reduce absorption; NRT LOZENGE: similar to gum; dissolve in mouth; NRT NASAL SPRAY: fastest delivery; NRT INHALER: mimics smoking behavior; BUPROPION: 150 mg QD x3 days then BID; START 1-2 WEEKS BEFORE QUIT DATE; seizure threshold; CONTRAINDICATION: seizure disorder; eating disorder; MAOI) | `text` |  |  |  |
| Smoking Cessation — Assessment, Pharmacotherapy, and Counseling | Pharmacotherapy Details and Counseling | `sc_f4` | Smoking Cessation Counseling and E-Cigarettes: Behavioral Counseling Plus Pharmacotherapy Doubles 1-Year Abstinence Rate, Quitline 1-800-QUIT-NOW, Problem-Solving Triggers and Coping, Social Support, Electronic Cigarettes Not FDA-Approved for Cessation (Harm Reduction Role Debated) | `select` |  |  |  |

## Gynecologic Oncology

### BRCA / RRSO — `gynecologic_oncology_brca_rrso_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hereditary Gynecologic Cancer Risk and Risk-Reducing Surgery | Genetic Risk Assessment | `gene` | Pathogenic Gene Variant | `select` |  |  |  |
| Hereditary Gynecologic Cancer Risk and Risk-Reducing Surgery | Genetic Risk Assessment | `rrso_decision` | RRSO Decision / Counseling | `select` |  |  |  |
| Hereditary Gynecologic Cancer Risk and Risk-Reducing Surgery | Risk Reduction for BRCA Carriers with Ovarian Cancer | `parp_maintenance` | PARP Inhibitor Maintenance (olaparib 2 years for BRCA1/2 germline after first-line platinum response — SOLO-1: 5-yr PFS 48% vs 21%; discuss MDS/AML risk <1% but screen CBC q3 months; discontinue for PD or 2 years; re-challenge data emerging) | `textarea` |  |  |  |
| Hereditary Gynecologic Cancer Risk and Risk-Reducing Surgery | Risk Reduction for BRCA Carriers with Ovarian Cancer | `family_cascade` | Family Cascade Testing (first-degree relatives — 50% transmission risk for autosomal dominant; referral to genetic counseling; minor testing guidance; federal GINA protections) | `textarea` |  |  |  |

### Cervical Cancer — `gynecologic_oncology_cervical_cancer_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cervical Cancer Assessment | FIGO 2018 Clinical Staging | `histology` | Histology | `select` |  |  |  |
| Cervical Cancer Assessment | FIGO 2018 Clinical Staging | `figo_stage` | FIGO 2018 Stage | `select` |  |  |  |
| Cervical Cancer Assessment | FIGO 2018 Clinical Staging | `hpv_status` | HPV Status | `select` |  |  |  |
| Cervical Cancer Assessment | Fertility Preservation and Treatment | `fertility_desired` | Fertility Preservation Desired | `select` |  |  |  |
| Cervical Cancer Assessment | Fertility Preservation and Treatment | `fertility_approach` | Fertility-Sparing Approach (if stage IA1-IB1 <2 cm) | `select` |  |  |  |

### Endometrial Cancer — `gynecologic_oncology_endometrial_cancer_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Endometrial Cancer Assessment and Molecular Classification | Molecular Classification (TCGA/ProMisE) | `molecular_group` | TCGA Molecular Group | `select` |  |  |  |
| Endometrial Cancer Assessment and Molecular Classification | Molecular Classification (TCGA/ProMisE) | `er_pr` | ER/PR Status | `select` |  |  |  |
| Endometrial Cancer Assessment and Molecular Classification | Molecular Classification (TCGA/ProMisE) | `her2` | HER2 Status (serous/clear cell) | `select` |  |  |  |
| Endometrial Cancer Assessment and Molecular Classification | FIGO 2023 Staging and Treatment | `figo_stage` | FIGO 2023 Stage | `select` |  |  |  |
| Endometrial Cancer Assessment and Molecular Classification | FIGO 2023 Staging and Treatment | `surgical_approach` | Surgical Approach | `select` |  |  |  |

### Ovarian Cancer — `gynecologic_oncology_ovarian_cancer_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Ovarian Cancer Assessment | Diagnosis and Staging (FIGO 2023) | `histology` | Histologic Subtype | `select` |  |  |  |
| Ovarian Cancer Assessment | Diagnosis and Staging (FIGO 2023) | `figo_stage` | FIGO Stage | `select` |  |  |  |
| Ovarian Cancer Assessment | Diagnosis and Staging (FIGO 2023) | `brca_status` | BRCA Status and HRD | `select` |  |  |  |
| Ovarian Cancer Assessment | Treatment Plan | `surgery` | Surgical Approach | `select` |  |  |  |
| Ovarian Cancer Assessment | Treatment Plan | `maintenance` | Maintenance Therapy | `select` |  |  |  |

### Ovarian Cancer (PARP Inhibitors) — `gynecology_ovarian_cancer_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Ovarian Cancer — Staging, Chemotherapy, and Maintenance | Diagnosis and Surgical Staging | `workup` | Ovarian Cancer Workup (CA-125: elevated in 80% of epithelial ovarian cancer (EOC); elevated in endometriosis, fibroids, pelvic inflammatory disease, liver disease (non-specific); HE4 (human epididymis 4) + CA-125 ROMA (Risk of Ovarian Malignancy Algorithm): improves specificity; CT chest/abdomen/pelvis: staging + operability assessment; diagnostic laparoscopy for initial assessment; TVUS: complex adnexal mass (IOTA classification: M-rules vs. B-rules; LR1-5); histology: serous (70%; high-grade serous most common, BRCA1/2 association); endometrioid; clear cell (ARID1A mutation, poor chemo response); mucinous; carcinosarcoma; germline testing: ALL ovarian cancer patients (NCCN 2024: germline BRCA1/2 + MMR + other HRD genes) | `text` |  |  |  |
| Ovarian Cancer — Staging, Chemotherapy, and Maintenance | Diagnosis and Surgical Staging | `surgical_staging` | FIGO 2023 Surgical Staging | `select` |  |  |  |
| Ovarian Cancer — Staging, Chemotherapy, and Maintenance | Chemotherapy and PARP Inhibitor Maintenance | `carboplatin` | Carboplatin-Paclitaxel Protocol (carboplatin AUC 5-6 + paclitaxel 175 mg/m2 Q3W x 6 cycles; AUC calculated by Calvert formula: dose = AUC x (GFR + 25); GFR by Cockcroft-Gault or measured CrCl; bevacizumab: GOG-218/ICON7: add bevacizumab 15 mg/kg Q3W x 5-6 cycles then maintenance Q3W x 16-22 cycles; bevacizumab benefit: PFS only, minimal OS benefit; hypertension (38%), proteinuria, fistula risk; add bev for: IV or III with residual disease >1 cm; PARP inhibitors REPLACING bev as maintenance in BRCA/HRD patients; olaparib + bevacizumab (PAOLA-1): HRD+ and bevacizumab eligible) | `text` |  |  |  |
| Ovarian Cancer — Staging, Chemotherapy, and Maintenance | Chemotherapy and PARP Inhibitor Maintenance | `parp_maintenance` | PARP Inhibitor Maintenance Therapy | `select` |  |  |  |

### Vulvar / Vaginal Cancer — `gynecologic_oncology_vulvar_cancer_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Vulvar and Vaginal Cancer Assessment | Vulvar Cancer | `figo_vulvar` | FIGO Stage (Vulvar) | `select` |  |  |  |
| Vulvar and Vaginal Cancer Assessment | Vulvar Cancer | `slnb` | Sentinel Lymph Node Biopsy (Tc-99m ± blue dye; tumor ≤4 cm, not involving midline for ipsilateral SLNB; GROINSS-V-II data — groin RT if SLN+) | `text` |  |  |  |
| Vulvar and Vaginal Cancer Assessment | Vaginal Cancer | `figo_vaginal` | FIGO Stage (Vaginal) | `select` |  |  |  |
| Vulvar and Vaginal Cancer Assessment | Vaginal Cancer | `histology_vaginal` | Vaginal Histology | `select` |  |  |  |

## Interventional Cardiology

### EP Ablation Eval — `interventional_cardiology_ep_ablation_cf`

Screen: 1 page(s) · 3 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiac Ablation Evaluation | Arrhythmia Characterization | `arrhythmia_type` | Target Arrhythmia | `select` |  |  |  |
| Cardiac Ablation Evaluation | Arrhythmia Characterization | `prior_therapy` | Prior Antiarrhythmic Drugs Tried and Failed (class I-IV; document drug, dose, duration, reason for discontinuation) | `textarea` |  |  |  |
| Cardiac Ablation Evaluation | Pre-Ablation Workup | `cardiac_imaging` | Cardiac Structural Evaluation | `select` |  |  |  |
| Cardiac Ablation Evaluation | Pre-Ablation Workup | `ct_laa` | CT cardiac / CT chest (PV anatomy, PV ostia size for CPVI sizing; LAA thrombus exclusion — TEE preferred for LAA thrombus) | `checkbox` |  |  |  |
| Cardiac Ablation Evaluation | Pre-Ablation Workup | `anticoagulation` | Anticoagulation Plan (AF ablation: continue therapeutic OAC through procedure — AXAFA: uninterrupted OAC reduces thromboembolic events; DOAC last dose 12-24h pre-procedure or skip morning dose per protocol) | `text` |  |  |  |
| Cardiac Ablation Evaluation | Post-Ablation Management | `blanking_period` | Blanking Period (3 months after AF ablation — arrhythmia recurrences in this period do not predict failure; continue antiarrhythmics during blanking) | `text` |  |  |  |
| Cardiac Ablation Evaluation | Post-Ablation Management | `monitor` | Rhythm Monitoring Plan | `select` |  |  |  |

### ICD / CRT Device — `interventional_cardiology_icd_crt_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ICD and CRT Device Management | Device Indication | `device_type` | Device Type | `select` |  |  |  |
| ICD and CRT Device Management | Device Indication | `primary_prevention` | Primary vs. Secondary Prevention | `select` |  |  |  |
| ICD and CRT Device Management | CRT Criteria | `lvef_for_crt` | LVEF (CRT indicated: <=35%) | `number` |  |  |  |
| ICD and CRT Device Management | CRT Criteria | `qrs_duration` | QRS Duration (ms; CRT most effective: LBBB >150 ms; LBBB 120-149 ms reasonable; non-LBBB benefit uncertain) | `number` |  |  |  |
| ICD and CRT Device Management | CRT Criteria | `qrs_morphology` | QRS Morphology | `select` |  |  |  |
| ICD and CRT Device Management | Device Interrogation / Follow-Up | `last_therapy` | Last Device Therapy (ATP or shock — date, arrhythmia type, appropriateness — inappropriate for SVT requires therapy adjustment) | `text` |  |  |  |
| ICD and CRT Device Management | Device Interrogation / Follow-Up | `battery_status` | Battery Status | `select` |  |  |  |
| ICD and CRT Device Management | Device Interrogation / Follow-Up | `sensing_threshold` | Lead Sensing and Threshold (sensing >2x programmed, threshold <2x output = acceptable lead function; lead impedance in range) | `text` |  |  |  |

### PCI Procedure — `interventional_cardiology_pci_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| PCI — Percutaneous Coronary Intervention | Indication and Lesion Assessment | `indication` | PCI Indication | `select` |  |  |  |
| PCI — Percutaneous Coronary Intervention | Indication and Lesion Assessment | `vessel` | Target Vessel | `select` |  |  |  |
| PCI — Percutaneous Coronary Intervention | Indication and Lesion Assessment | `lesion_complexity` | Lesion Complexity (ACC/AHA Classification) | `select` |  |  |  |
| PCI — Percutaneous Coronary Intervention | Indication and Lesion Assessment | `ffr` | FFR / iFR (fractional flow reserve <0.80 = ischemia; iFR <0.89 = ischemia; if in-lab physiology performed) | `text` |  |  |  |
| PCI — Percutaneous Coronary Intervention | Procedure Details | `access` | Vascular Access | `select` |  |  |  |
| PCI — Percutaneous Coronary Intervention | Procedure Details | `stent_type` | Stent Type | `select` |  |  |  |
| PCI — Percutaneous Coronary Intervention | Procedure Details | `anticoagulation` | Procedural Anticoagulation (UFH, bivalirudin for HIT, enoxaparin; activated clotting time ACT target 250-300s with UFH) | `text` |  |  |  |
| PCI — Percutaneous Coronary Intervention | Post-PCI Orders | `dapt` | DAPT Plan (Dual Antiplatelet Therapy) | `select` |  |  |  |
| PCI — Percutaneous Coronary Intervention | Post-PCI Orders | `statin` | High-intensity statin started or continued (atorvastatin 40-80 mg or rosuvastatin 20-40 mg; LDL target <70 mg/dL) | `checkbox` |  |  |  |

### Structural Heart — `interventional_cardiology_structural_cf`

Screen: 1 page(s) · 3 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Structural Heart Disease Evaluation | Mitral Regurgitation / MitraClip | `mr_etiology` | MR Etiology | `select` |  |  |  |
| Structural Heart Disease Evaluation | Mitral Regurgitation / MitraClip | `mr_severity` | MR Severity | `select` |  |  |  |
| Structural Heart Disease Evaluation | Mitral Regurgitation / MitraClip | `teer_eligibility` | TEER eligibility confirmed (TEE anatomy: A2/P2 coaptation gap <10mm; leaflet mobility; no calcification in grasping zone; no SAM risk for degenerative MR) | `checkbox` |  |  |  |
| Structural Heart Disease Evaluation | Left Atrial Appendage Occlusion (LAAO) | `laao_indication` | LAAO Indication (AF with non-valvular etiology + CHA2DS2-VASc >=2 + contraindication to long-term OAC — WATCHMAN device FDA approved 2015) | `text` |  |  |  |
| Structural Heart Disease Evaluation | Left Atrial Appendage Occlusion (LAAO) | `cha2ds2_vasc` | CHA2DS2-VASc Score (2+ in male, 3+ in female = anticoagulation or LAAO indicated) | `number` |  |  |  |
| Structural Heart Disease Evaluation | Left Atrial Appendage Occlusion (LAAO) | `oac_contraindication` | OAC Contraindication (prior major bleed, high fall risk, patient preference, compliance inability — document for device justification) | `textarea` |  |  |  |
| Structural Heart Disease Evaluation | ASD / PFO Closure | `indication` | ASD / PFO Closure Indication | `select` |  |  |  |

### Structural Heart (TAVR/MitraClip) — `interventional_cardiology_structural_heart_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Structural Heart Disease — TAVR, MitraClip, and Watchman | TAVR / TAVI Patient Selection | `tavr_criteria` | TAVR Indications and Risk Stratification | `select` |  |  |  |
| Structural Heart Disease — TAVR, MitraClip, and Watchman | TAVR / TAVI Patient Selection | `tavr_complications` | TAVR Complications Management (paravalvular leak (PVL): trace-mild acceptable; moderate-severe PVL: higher mortality — post-dilation; pacemaker: LBBB + high-degree block (predict pre-TAVR: HV interval, PR interval, RBBB at baseline; early PPM implant if complete heart block); stroke: 2-3% (30-day); embolic cerebral protection (Claret Sentinel): filters debris; bleeding: vascular access site — ACUITY trial: radial access; coronary access after TAVR (BASILICA procedure for high HALT risk); TEE/TTE guidance; heart team weekly planning) | `text` |  |  |  |
| Structural Heart Disease — TAVR, MitraClip, and Watchman | MitraClip and Watchman | `mitraclip` | MitraClip (TEER) Indications | `select` |  |  |  |

### TAVR Evaluation — `interventional_cardiology_tavr_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| TAVR (Transcatheter Aortic Valve Replacement) Evaluation | Aortic Stenosis Severity | `as_severity` | AS Severity (ACC/AHA Grading) | `select` |  |  |  |
| TAVR (Transcatheter Aortic Valve Replacement) Evaluation | Aortic Stenosis Severity | `symptoms` | Symptoms (SAD Triad — median survival without intervention) | `select` |  |  |  |
| TAVR (Transcatheter Aortic Valve Replacement) Evaluation | Aortic Stenosis Severity | `lvef` | LVEF % (low-flow low-gradient AS if AVA <1 cm2 + EF <50%; dobutamine stress echo to confirm true severe AS) | `number` |  |  |  |
| TAVR (Transcatheter Aortic Valve Replacement) Evaluation | Surgical Risk Assessment | `sts_score` | STS PROM Score (% 30-day mortality risk; <4% = low risk; 4-8% = intermediate; >8% = high risk) | `number` |  |  |  |
| TAVR (Transcatheter Aortic Valve Replacement) Evaluation | Surgical Risk Assessment | `frailty_assessment` | Frailty assessment (Fried phenotype, CFS, 5-meter walk test, grip strength — impacts TAVR outcomes independently of STS) | `checkbox` |  |  |  |
| TAVR (Transcatheter Aortic Valve Replacement) Evaluation | Surgical Risk Assessment | `annulus_anatomy` | CT Cardiac Anatomy (annulus diameter, aortic root, valve calcification, vascular access — CTA chest/abdomen/pelvis mandatory for TAVR planning) | `text` |  |  |  |
| TAVR (Transcatheter Aortic Valve Replacement) Evaluation | Valve and Access Strategy | `tavr_or_savr` | TAVR vs. SAVR Decision (Heart Team) | `select` |  |  |  |
| TAVR (Transcatheter Aortic Valve Replacement) Evaluation | Valve and Access Strategy | `access` | Access Route | `select` |  |  |  |
| TAVR (Transcatheter Aortic Valve Replacement) Evaluation | Valve and Access Strategy | `post_tavr_anticoag` | Post-TAVR Antithrombotic Plan | `select` |  |  |  |

## Maternal-Fetal Medicine

### Hypertensive Disorders of Pregnancy — `maternal_fetal_medicine_hypertension_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hypertensive Disorders of Pregnancy Management | Classification | `hdp_type` | Hypertensive Disorder Type | `select` |  |  |  |
| Hypertensive Disorders of Pregnancy Management | Classification | `bp_current` | Current Blood Pressure (range in last 24h; confirm on two occasions 4h apart for diagnosis; avoid inpatient white-coat effect; ABPM may be useful) | `text` |  |  |  |
| Hypertensive Disorders of Pregnancy Management | Acute Management | `antihypertensive` | Acute Antihypertensive (SBP ≥160 or DBP ≥110) | `select` |  |  |  |
| Hypertensive Disorders of Pregnancy Management | Acute Management | `magnesium` | Magnesium Sulfate for Seizure Prophylaxis | `select` |  |  |  |

### L&D Progress Note — `labor_delivery_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Intrapartum Progress Note | Labor Status | `stage` | Stage of Labor | `select` |  |  |  |
| Intrapartum Progress Note | Labor Status | `dilation` | Dilation (cm) | `number` |  |  |  |
| Intrapartum Progress Note | Labor Status | `effacement` | Effacement (%) | `number` |  |  |  |
| Intrapartum Progress Note | Labor Status | `station` | Station | `select` |  |  |  |
| Intrapartum Progress Note | Labor Status | `membrane_status` | Membrane Status | `select` |  |  |  |
| Intrapartum Progress Note | Labor Status | `fluid_color` | Amniotic Fluid Color (if ROM) | `select` |  |  |  |
| Intrapartum Progress Note | Fetal Heart Rate Monitoring | `baseline_fhr` | Baseline FHR (bpm — normal 110-160) | `number` |  |  |  |
| Intrapartum Progress Note | Fetal Heart Rate Monitoring | `variability` | Variability | `select` |  |  |  |
| Intrapartum Progress Note | Fetal Heart Rate Monitoring | `accelerations` | Accelerations | `select` |  |  |  |
| Intrapartum Progress Note | Fetal Heart Rate Monitoring | `decelerations` | Decelerations | `select` |  |  |  |
| Intrapartum Progress Note | Fetal Heart Rate Monitoring | `oxytocin_dose` | Oxytocin (mU/min — if running) | `text` |  |  |  |
| Intrapartum Progress Note | Pain Management | `pain_management` | Analgesia in Use | `select` |  |  |  |
| Intrapartum Progress Note | Pain Management | `epidural_level` | Epidural Level / Adequacy (if in place) | `text` |  |  |  |
| Intrapartum Progress Note | Intrapartum Plan | `labor_status_assessment` | Labor Progress Assessment (adequate progress, arrest criteria?) | `text` |  |  |  |
| Intrapartum Progress Note | Intrapartum Plan | `delivery_plan` | Anticipated Delivery Route | `select` |  |  |  |
| Intrapartum Progress Note | Intrapartum Plan | `notes` | Notes / Plan | `textarea` |  |  |  |

### MFM Consult — `mfm_consult_cf`

Screen: 1 page(s) · 4 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| MFM High-Risk OB Consultation | Obstetric History | `gravida_para` | Gravida / Para (G_P_A_L_ — pregnancies / term / preterm / ab / living) | `text` |  |  |  |
| MFM High-Risk OB Consultation | Obstetric History | `ga` | Gestational Age (weeks + days — EDD by LMP and first trimester US) | `text` |  |  |  |
| MFM High-Risk OB Consultation | Obstetric History | `prior_complications` | Prior Pregnancy Complications (PTB, preeclampsia, GDM, c-section, fetal anomalies, IUGR) | `textarea` |  |  |  |
| MFM High-Risk OB Consultation | Obstetric History | `current_medications` | Current Medications (prenatal vitamins, progesterone, heparin, aspirin — include folic acid dose) | `textarea` |  |  |  |
| MFM High-Risk OB Consultation | Referral Indication | `indication` | Primary Indication for MFM Consultation | `select` |  |  |  |
| MFM High-Risk OB Consultation | Referral Indication | `cervical_length` | Cervical Length by TVUS (mm — short <25mm = risk for PTB) | `number` |  |  |  |
| MFM High-Risk OB Consultation | Referral Indication | `bp` | BP (mmHg — preeclampsia: ≥140/90 on 2 readings 4h apart) | `text` |  |  |  |
| MFM High-Risk OB Consultation | Antenatal Surveillance | `growth_us` | Growth Ultrasound EFW (g or percentile — repeat every 3-4 weeks for IUGR) | `text` |  |  |  |
| MFM High-Risk OB Consultation | Antenatal Surveillance | `afv` | Amniotic Fluid Volume | `select` |  |  |  |
| MFM High-Risk OB Consultation | Antenatal Surveillance | `umbilical_doppler` | Umbilical Artery Doppler (IUGR surveillance) | `select` |  |  |  |
| MFM High-Risk OB Consultation | Antenatal Surveillance | `nst_bpp` | NST / BPP Results | `text` |  |  |  |
| MFM High-Risk OB Consultation | MFM Plan | `delivery_plan` | Delivery Plan (timing, mode, anesthesia, NICU notification) | `textarea` |  |  |  |
| MFM High-Risk OB Consultation | MFM Plan | `medications_initiated` | Medications Initiated or Modified (betamethasone, magnesium, aspirin, progesterone, labetalol) | `textarea` |  |  |  |
| MFM High-Risk OB Consultation | MFM Plan | `follow_up` | Follow-Up Frequency and Next Appointment | `text` |  |  |  |
| MFM High-Risk OB Consultation | MFM Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### OB Triage — `obstetric_triage_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Obstetric Triage Assessment | Presenting Complaint | `chief_complaint` | Chief Complaint | `select` |  |  |  |
| Obstetric Triage Assessment | Presenting Complaint | `ga_at_visit` | Gestational Age at Presentation (weeks + days) | `text` |  |  |  |
| Obstetric Triage Assessment | Presenting Complaint | `fhr_on_monitor` | Fetal Heart Rate on Monitor (bpm — normal 110-160) | `text` |  |  |  |
| Obstetric Triage Assessment | Presenting Complaint | `contraction_frequency` | Contraction Frequency (if present — e.g., q5 minutes × 45 sec) | `text` |  |  |  |
| Obstetric Triage Assessment | Cervical Examination | `dilation` | Dilation (cm) | `number` |  |  |  |
| Obstetric Triage Assessment | Cervical Examination | `effacement` | Effacement (%) | `number` |  |  |  |
| Obstetric Triage Assessment | Cervical Examination | `station` | Station | `select` |  |  |  |
| Obstetric Triage Assessment | Cervical Examination | `presentation` | Fetal Presentation | `select` |  |  |  |
| Obstetric Triage Assessment | Cervical Examination | `rom_confirmed` | ROM confirmed (pooling / ferning / nitrazine positive / PROM test positive) | `checkbox` |  |  |  |
| Obstetric Triage Assessment | Triage Disposition | `disposition` | Disposition | `select` |  |  |  |
| Obstetric Triage Assessment | Triage Disposition | `category_fhm` | FHR Monitor Category | `select` |  |  |  |
| Obstetric Triage Assessment | Triage Disposition | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Preterm Birth Prevention — `maternal_fetal_medicine_preterm_cf`

Screen: 1 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Preterm Labor and Preterm Birth Prevention | Risk Assessment | `gestational_age` | Gestational Age (weeks+days) | `number` |  |  |  |
| Preterm Labor and Preterm Birth Prevention | Risk Assessment | `cervical_length` | Transvaginal Cervical Length (mm; <25 mm at 18-24 weeks = short cervix; <10 mm = cervical insufficiency; screening recommended in singletons with prior sPTB; universal screening controversial) | `number` |  |  |  |
| Preterm Labor and Preterm Birth Prevention | Risk Assessment | `ffn` | Fetal Fibronectin (fFN) at 22-34 weeks | `select` |  |  |  |
| Preterm Labor and Preterm Birth Prevention | Risk Assessment | `prior_ptb` | Prior Spontaneous Preterm Birth | `select` |  |  |  |
| Preterm Labor and Preterm Birth Prevention | Preterm Birth Prevention Interventions | `cerclage` | Cerclage (cervical cerclage) | `select` |  |  |  |
| Preterm Labor and Preterm Birth Prevention | Preterm Birth Prevention Interventions | `antenatal_corticosteroids` | Antenatal Corticosteroids (ACS) | `select` |  |  |  |

### Preterm Labor (MFM) — `maternal_fetal_preterm_labor_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Preterm Labor — Tocolysis, Steroids, and Magnesium | Preterm Labor Diagnosis and Risk Assessment | `ptl_diagnosis` | Preterm Labor Diagnosis (gestational age 20 0/7 to 36 6/7 weeks; regular uterine contractions PLUS cervical change: dilation >=2 cm or effacement >=80% OR cervical length <20 mm on TVUS; fetal fibronectin (fFN): if positive (>=50 ng/mL) in symptomatic women: high PPV for delivery within 7 days; if negative: high NPV (>99% will NOT deliver in 7 days — reassuring); PAMG-1 (Partosure): single positive value >5 pmol/L; preterm PROM: ROM before 37 weeks without labor; fluid pooling, ferning, nitrazine positive, AmnioSense/PAMG-1; PPROM management differs from PTL) | `text` |  |  |  |
| Preterm Labor — Tocolysis, Steroids, and Magnesium | Preterm Labor Diagnosis and Risk Assessment | `risk_factors` | Preterm Birth Risk Factors and Prevention | `select` |  |  |  |
| Preterm Labor — Tocolysis, Steroids, and Magnesium | Tocolysis and Antenatal Corticosteroids | `tocolysis` | Tocolytic Agents | `select` |  |  |  |
| Preterm Labor — Tocolysis, Steroids, and Magnesium | Tocolysis and Antenatal Corticosteroids | `corticosteroids` | Antenatal Corticosteroids (ACS) and Magnesium Neuroprotection (betamethasone 12 mg IM Q24h x 2 doses (preferred over dexamethasone for brain maturation); OR dexamethasone 6 mg Q12h x 4 doses; ACS window: 24 0/7 to 34 6/7 weeks; rescue course: if previous ACS >14 days ago at <34 weeks; late preterm (34-36 6/7): ALPS trial: single course ACS reduces RDS, surfactant use, CPAP — ACOG recommends for late preterm if not given previously; magnesium for neuroprotection (NOT tocolysis): 24-31 6/7 weeks within 24h of delivery; MagPie/BEAM: 4g IV bolus + 1-2 g/hr infusion; reduces severe CP (cerebral palsy) by 30%; monitor DTRs + UO + Mg levels) | `text` |  |  |  |

## Pain Management

### Chronic Pain — `chronic_pain_management_cf`

Screen: 1 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Pain Management Visit | Pain Assessment | `pain_location` | Primary Pain Location | `text` |  |  |  |
| Chronic Pain Management Visit | Pain Assessment | `pain_duration_months` | Duration of Chronic Pain (months) | `number` |  |  |  |
| Chronic Pain Management Visit | Pain Assessment | `pain_type` | Pain Mechanism | `select` |  |  |  |
| Chronic Pain Management Visit | Pain Assessment | `pain_score_avg` | Average Pain Score (0-10) | `number` |  |  |  |
| Chronic Pain Management Visit | Pain Assessment | `pain_score_worst` | Worst Pain Score (0-10) | `number` |  |  |  |
| Chronic Pain Management Visit | Pain Assessment | `function_score` | Function Interference (0-10; 10=unable to function) | `number` |  |  |  |
| Chronic Pain Management Visit | Pain Assessment | `opioid_risk_tool` | Opioid Risk Tool (ORT) Score | `number` |  |  |  |
| Chronic Pain Management Visit | Current Treatment | `nonopioid_analgesics` | Non-Opioid Analgesics / Adjuvants | `textarea` |  |  |  |
| Chronic Pain Management Visit | Current Treatment | `opioid_prescribed` | Opioid analgesic currently prescribed | `checkbox` |  |  |  |
| Chronic Pain Management Visit | Current Treatment | `opioid_mme` | Total Daily MME (if on opioid) | `number` |  |  |  |
| Chronic Pain Management Visit | Current Treatment | `uds_current` | Urine Drug Screen (UDS) obtained this visit | `checkbox` |  |  |  |
| Chronic Pain Management Visit | Current Treatment | `pdmp_checked` | PDMP checked this visit | `checkbox` |  |  |  |
| Chronic Pain Management Visit | Current Treatment | `pt_therapy` | Physical therapy / exercise program active | `checkbox` |  |  |  |
| Chronic Pain Management Visit | Current Treatment | `interventional` | Interventional procedures (injections, nerve block, SCS) in use or planned | `checkbox` |  |  |  |
| Chronic Pain Management Visit | Current Treatment | `behavioral_pain_management` | Pain psychology / CBT-pain therapy enrolled | `checkbox` |  |  |  |
| Chronic Pain Management Visit | Plan | `taper_plan` | Opioid taper / dose reduction planned | `checkbox` |  |  |  |
| Chronic Pain Management Visit | Plan | `naloxone` | Naloxone co-prescribed | `checkbox` |  |  |  |
| Chronic Pain Management Visit | Plan | `pain_contract` | Opioid treatment agreement on file and reviewed | `checkbox` |  |  |  |
| Chronic Pain Management Visit | Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Chronic Pain — `pain_management_chronic_pain_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Pain Management | Assessment and Multimodal Therapy | `pain_f1` | Chronic Pain Assessment: BIOPSYCHOSOCIAL MODEL: Sensory (Nociceptive; Neuropathic; Nociplastic); Psychological (Depression; Anxiety; PTSD; Catastrophizing); Social (Work; Family; Insurance); TOOLS: NRS 0-10; PEG Scale (Pain; Enjoyment; General Activity); GAD-7; PHQ-9 Depression; ORT (Opioid Risk Tool; 0-3 Low; 4-7 Moderate; 8+ High Risk); PDMP Prescription Drug Monitoring Check All Opioid Starts; UDS Urine Drug Screen Baseline + Q3-6M; PAIN TYPES: NOCICEPTIVE (Somatic Arthritis; Visceral IBS); NEUROPATHIC (Burning; Shooting; Allodynia; DN4 Score); CENTRAL SENSITIZATION (Fibromyalgia; Wide Spread; Wind-Up; No Structural); WORKUP: MRI Spine If Red Flags (Fever; Weight Loss; Cancer Hx; Bowel-Bladder); EMG/NCS Radiculopathy; Bone Scan; X-Ray Baseline | `text` |  |  |  |
| Chronic Pain Management | Assessment and Multimodal Therapy | `pain_f2` | Pharmacotherapy and Interventions | `select` |  |  |  |

### Chronic Pain Eval — `pain_management_chronic_cf`

Screen: 1 page(s) · 4 section(s) · 21 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Pain Evaluation | Pain Assessment | `pain_location` | Pain Location(s) — body map description | `text` |  |  |  |
| Chronic Pain Evaluation | Pain Assessment | `pain_score_avg` | Average Pain Score (0-10 NRS — last week) | `number` |  |  |  |
| Chronic Pain Evaluation | Pain Assessment | `pain_score_worst` | Worst Pain Score (0-10 last week) | `number` |  |  |  |
| Chronic Pain Evaluation | Pain Assessment | `pain_score_best` | Best Pain Score (0-10 last week) | `number` |  |  |  |
| Chronic Pain Evaluation | Pain Assessment | `pain_character` | Pain Character | `select` |  |  |  |
| Chronic Pain Evaluation | Pain Assessment | `duration_months` | Duration (months — chronic: >3 months) | `number` |  |  |  |
| Chronic Pain Evaluation | Pain Assessment | `pain_interference` | Functional Interference (work, ADLs, sleep, mood, social activities) | `textarea` |  |  |  |
| Chronic Pain Evaluation | Prior Treatments | `prior_medications` | Prior Medications Tried (agent, dose, duration, reason stopped / inadequate) | `textarea` |  |  |  |
| Chronic Pain Evaluation | Prior Treatments | `prior_procedures` | Prior Procedures (injections, nerve blocks, spinal cord stimulator, surgery — results) | `textarea` |  |  |  |
| Chronic Pain Evaluation | Prior Treatments | `physical_therapy` | Physical therapy completed (course, benefit) | `checkbox` |  |  |  |
| Chronic Pain Evaluation | Prior Treatments | `psychology_pain` | Pain psychology / CBT for chronic pain engaged | `checkbox` |  |  |  |
| Chronic Pain Evaluation | Current Pain Medications | `current_opioid` | Current Opioid (name, dose, frequency, total MME/day — high-dose threshold >90 MME/day CDC) | `text` |  |  |  |
| Chronic Pain Evaluation | Current Pain Medications | `pdmp_checked` | PDMP (prescription drug monitoring program) checked today | `checkbox` |  |  |  |
| Chronic Pain Evaluation | Current Pain Medications | `uds_done` | Urine drug screen (UDS) completed (random monitoring per opioid agreement) | `checkbox` |  |  |  |
| Chronic Pain Evaluation | Current Pain Medications | `opioid_agreement_signed` | Patient opioid treatment agreement on file and reviewed | `checkbox` |  |  |  |
| Chronic Pain Evaluation | Current Pain Medications | `non_opioid_adjuncts` | Non-Opioid Adjuncts (NSAIDs, SNRIs, gabapentinoids, TCAs, topicals, muscle relaxants) | `textarea` |  |  |  |
| Chronic Pain Evaluation | Treatment Plan | `functional_goal` | Functional Goal (SMART — realistic, measurable improvement target) | `text` |  |  |  |
| Chronic Pain Evaluation | Treatment Plan | `procedure_planned` | Procedure Planned | `select` |  |  |  |
| Chronic Pain Evaluation | Treatment Plan | `opioid_taper` | Opioid taper initiated (high-dose, inadequate function, risk outweighs benefit) | `checkbox` |  |  |  |
| Chronic Pain Evaluation | Treatment Plan | `naloxone_prescribed` | Naloxone prescribed / reviewed (required at >50 MME/day per CDC guidelines) | `checkbox` |  |  |  |
| Chronic Pain Evaluation | Treatment Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Opioid Risk (ORT) — `pain_opioid_risk_cf`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Opioid Risk Tool (ORT) | Opioid Risk Tool (Webster) | `family_substance_abuse` | Family History of Substance Abuse | `select` |  |  |  |
| Opioid Risk Tool (ORT) | Opioid Risk Tool (Webster) | `personal_substance_abuse` | Personal History of Substance Abuse | `select` |  |  |  |
| Opioid Risk Tool (ORT) | Opioid Risk Tool (Webster) | `age_16_45` | Age 16-45 | `select` |  |  |  |
| Opioid Risk Tool (ORT) | Opioid Risk Tool (Webster) | `history_preadolescent_abuse` | Preadolescent Sexual Abuse | `select` |  |  |  |
| Opioid Risk Tool (ORT) | Opioid Risk Tool (Webster) | `psych_history` | Psychological Disease History | `select` |  |  |  |
| Opioid Risk Tool (ORT) | Opioid Risk Tool (Webster) | `ort_total` | ORT Total Score (0-7 low risk; 8-11 moderate; ≥12 high risk) | `number` |  |  |  |
| Opioid Risk Tool (ORT) | Monitoring Plan Based on Risk | `risk_category` | ORT Risk Category | `select` |  |  |  |
| Opioid Risk Tool (ORT) | Monitoring Plan Based on Risk | `opioid_agreement` | Opioid treatment agreement reviewed and signed (CDC guidelines compliance) | `checkbox` |  |  |  |
| Opioid Risk Tool (ORT) | Monitoring Plan Based on Risk | `naloxone_rx` | Naloxone prescribed and patient/family trained (CDC: prescribe at ≥50 MME/day) | `checkbox` |  |  |  |
| Opioid Risk Tool (ORT) | Monitoring Plan Based on Risk | `mat_referral` | MAT (medication-assisted treatment) referral placed (buprenorphine / methadone if OUD suspected) | `checkbox` |  |  |  |
| Opioid Risk Tool (ORT) | Monitoring Plan Based on Risk | `notes` | Risk Stratification Summary and Plan | `textarea` |  |  |  |

### Pain Intervention — `pain_management_intervention_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pain Management Intervention | Pre-Procedure Assessment | `pain_score` | Current Pain Score (0-10) | `number` |  |  |  |
| Pain Management Intervention | Pre-Procedure Assessment | `pain_location` | Primary Pain Location | `text` |  |  |  |
| Pain Management Intervention | Pre-Procedure Assessment | `pain_duration` | Duration of Pain | `text` |  |  |  |
| Pain Management Intervention | Pre-Procedure Assessment | `prior_intervention` | Prior procedure at this site | `checkbox` |  |  |  |
| Pain Management Intervention | Pre-Procedure Assessment | `prior_response` | Response to Prior Procedure (if any) | `select` |  |  |  |
| Pain Management Intervention | Procedure Details | `procedure_type` | Procedure Type | `select` |  |  |  |
| Pain Management Intervention | Procedure Details | `guidance` | Image Guidance | `select` |  |  |  |
| Pain Management Intervention | Procedure Details | `steroid_agent` | Steroid Agent | `select` |  |  |  |
| Pain Management Intervention | Procedure Details | `local_anesthetic` | Local Anesthetic | `select` |  |  |  |
| Pain Management Intervention | Post-Procedure | `immediate_pain_relief` | Immediate Pain Relief (%) | `number` |  |  |  |
| Pain Management Intervention | Post-Procedure | `complications` | Complications | `select` |  |  |  |
| Pain Management Intervention | Post-Procedure | `discharged_stable` | Discharged in stable condition | `checkbox` |  |  |  |
| Pain Management Intervention | Post-Procedure | `follow_up` | Follow-up Instructions / Timeline | `text` |  |  |  |

### Pain Procedure Note — `pain_interventional_procedure_cf`

Screen: 1 page(s) · 4 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pain Interventional Procedure Note | Procedure Information | `procedure_type` | Procedure | `select` |  |  |  |
| Pain Interventional Procedure Note | Procedure Information | `level` | Level(s) Treated (e.g., L4-L5, C5-C6, L3-L4 MBB) | `text` |  |  |  |
| Pain Interventional Procedure Note | Procedure Information | `side` | Side | `select` |  |  |  |
| Pain Interventional Procedure Note | Procedure Information | `guidance` | Guidance | `select` |  |  |  |
| Pain Interventional Procedure Note | Pre-Procedure Assessment | `consent_obtained` | Informed consent obtained (risks: infection, bleeding, nerve injury, dural puncture) | `checkbox` |  |  |  |
| Pain Interventional Procedure Note | Pre-Procedure Assessment | `timeout_performed` | Pre-procedure timeout performed (patient identity, procedure, site, laterality) | `checkbox` |  |  |  |
| Pain Interventional Procedure Note | Pre-Procedure Assessment | `anticoagulation_held` | Anticoagulation / antiplatelet held per guidelines (aspirin OK; warfarin INR ≤1.5; LMWH 24h; DOAC 48h) | `checkbox` |  |  |  |
| Pain Interventional Procedure Note | Pre-Procedure Assessment | `pre_procedure_pain` | Pre-Procedure Pain Score (0-10) | `number` |  |  |  |
| Pain Interventional Procedure Note | Pre-Procedure Assessment | `contrast_allergy_premedicated` | Contrast allergy premedicated (if applicable — methylprednisolone + diphenhydramine × 2 doses) | `checkbox` |  |  |  |
| Pain Interventional Procedure Note | Procedure Details | `injectate` | Injectate (steroid: dose/formulation; local anesthetic: agent, concentration, volume) | `textarea` |  |  |  |
| Pain Interventional Procedure Note | Procedure Details | `needle_type` | Needle Type and Size | `text` |  |  |  |
| Pain Interventional Procedure Note | Procedure Details | `contrast_confirmed` | Epidurogram / contrast confirmed correct placement before injectate | `checkbox` |  |  |  |
| Pain Interventional Procedure Note | Procedure Details | `complications` | Complications | `select` |  |  |  |
| Pain Interventional Procedure Note | Procedure Details | `post_procedure_pain` | Immediate Post-Procedure Pain Score (0-10) | `number` |  |  |  |
| Pain Interventional Procedure Note | Post-Procedure Instructions | `recovery_monitoring` | Recovery Room Monitoring Duration (standard 15-30 min; longer if sedation used) | `text` |  |  |  |
| Pain Interventional Procedure Note | Post-Procedure Instructions | `next_appointment` | Follow-Up (2-6 weeks — assess response; RFA eligibility after 2 positive MBBs) | `text` |  |  |  |
| Pain Interventional Procedure Note | Post-Procedure Instructions | `restrictions` | Activity Restrictions (no driving × 24h; avoid strenuous activity × 24-48h; no bath/pool × 48h) | `textarea` |  |  |  |

## Pain Medicine

### CRPS — `pain_medicine_crps_cf`

Screen: 1 page(s) · 2 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Complex Regional Pain Syndrome (CRPS) | Diagnosis and Classification | `crps_type` | CRPS Type | `select` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Diagnosis and Classification | `crps_precipitant` | Precipitating Event | `select` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Diagnosis and Classification | `crps_affected_limb` | Affected Extremity | `select` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Diagnosis and Classification | `crps_budapest_sensory` | Budapest Criteria - Sensory | `select` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Diagnosis and Classification | `crps_budapest_vasomotor` | Budapest Criteria - Vasomotor | `select` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Diagnosis and Classification | `crps_budapest_sudomotor` | Budapest Criteria - Sudomotor/Edema | `select` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Diagnosis and Classification | `crps_budapest_motor` | Budapest Criteria - Motor/Trophic | `select` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Diagnosis and Classification | `crps_nrs` | Pain NRS (0-10) | `number` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Treatment | `crps_pt_graded` | Graded Motor Imagery (GMI) / Desensitization PT | `select` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Treatment | `crps_medications` | Current Medications (NSAIDs, gabapentin, amitriptyline, duloxetine, low-dose naltrexone, bisphosphonate, prednisolone short-course) | `textarea` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Treatment | `crps_bisphosphonate` | Bisphosphonate Therapy | `select` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Treatment | `crps_vitamin_c` | Vitamin C Prophylaxis (post-fracture/surgery prevention) | `select` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Treatment | `crps_stellate_ganglion` | Sympathetic Block | `select` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Treatment | `crps_ketamine` | Ketamine Infusion | `select` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Treatment | `crps_scs` | Spinal Cord Stimulation | `select` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Treatment | `crps_psychology` | Psychological Support | `select` |  |  |  |
| Complex Regional Pain Syndrome (CRPS) | Treatment | `crps_notes` | Additional Notes | `textarea` |  |  |  |

### Chronic Low Back Pain — `pain_medicine_low_back_cf`

Screen: 1 page(s) · 4 section(s) · 25 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Low Back Pain Assessment | Pain Classification | `lbp_duration` | Duration | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Pain Classification | `lbp_pattern` | Pain Pattern | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Pain Classification | `lbp_pain_score` | Current Pain NRS (0-10) | `number` |  |  |  |
| Chronic Low Back Pain Assessment | Pain Classification | `lbp_worst_pain` | Worst Pain in Past Month (NRS 0-10) | `number` |  |  |  |
| Chronic Low Back Pain Assessment | Pain Classification | `lbp_red_flags` | Red Flag Screening | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Pain Classification | `lbp_function_oswestry` | Oswestry Disability Index (0-100, higher = more disabled) | `number` |  |  |  |
| Chronic Low Back Pain Assessment | Radiculopathy Assessment | `lbp_distribution` | Dermatomal Distribution | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Radiculopathy Assessment | `lbp_slr` | Straight Leg Raise (SLR) | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Radiculopathy Assessment | `lbp_mri_findings` | MRI Lumbar Spine Findings (disc level, herniation type, foraminal stenosis, central stenosis, Modic changes) | `textarea` |  |  |  |
| Chronic Low Back Pain Assessment | Radiculopathy Assessment | `lbp_neurogenic_claudication` | Neurogenic Claudication | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Interventional Procedures | `lbp_esi` | Epidural Steroid Injection (ESI) | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Interventional Procedures | `lbp_esi_response` | ESI Response | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Interventional Procedures | `lbp_facet_mbb` | Facet Medial Branch Block (MBB) - Diagnostic | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Interventional Procedures | `lbp_rfa` | Radiofrequency Ablation (RFA) - Facet Joint | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Interventional Procedures | `lbp_sacroiliac` | Sacroiliac Joint Injection | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Interventional Procedures | `lbp_scs` | Spinal Cord Stimulation (SCS) | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Medication Management | `lbp_nsaids` | NSAIDs / COX-2 Inhibitors | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Medication Management | `lbp_muscle_relaxant` | Muscle Relaxant (axial mechanical LBP) | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Medication Management | `lbp_neuropathic` | Neuropathic Agents (radicular or central sensitization) | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Medication Management | `lbp_opioid` | Opioid Analgesics | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Medication Management | `lbp_opioid_mme` | Current Morphine Milligram Equivalent (MME) per Day | `number` |  |  |  |
| Chronic Low Back Pain Assessment | Medication Management | `lbp_pt` | Physical Therapy | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Medication Management | `lbp_psychology` | Psychological / Behavioral Component | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Medication Management | `lbp_surgical_referral` | Surgical Referral | `select` |  |  |  |
| Chronic Low Back Pain Assessment | Medication Management | `lbp_notes` | Additional Notes | `textarea` |  |  |  |

### Chronic Pain Comprehensive — `pain_medicine_chronic_pain_complex_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Pain Comprehensive Assessment | Pain Characterization | `pain_type` | Primary Pain Diagnosis | `select` |  |  |  |
| Chronic Pain Comprehensive Assessment | Pain Characterization | `peg_score` | PEG Score (Pain-Enjoyment-General Activity; 3 items 0-10 each; max 30; track with opioid therapy; ORT (opioid risk tool) score for risk stratification; average NRS × frequency + breakthrough frequency) | `text` |  |  |  |
| Chronic Pain Comprehensive Assessment | Opioid Management | `medd` | Morphine Equivalent Daily Dose (MEDD mg/day; >50 MEDD = high risk (check PDMP); >90 MEDD = CDC guideline caution threshold; >120 MEDD = strongly consider specialist or referral; urine drug screen every 3-6 months) | `number` |  |  |  |
| Chronic Pain Comprehensive Assessment | Opioid Management | `opioid_risk` | Opioid Risk Stratification (ORT) | `select` |  |  |  |
| Chronic Pain Comprehensive Assessment | Opioid Management | `naloxone` | Naloxone Prescription | `select` |  |  |  |

### Chronic Pain Management — `pain_medicine_chronic_pain_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Pain — Multimodal Strategy | Non-Opioid Pharmacotherapy | `pain_f1` | Chronic Pain Pharmacotherapy: NEUROPATHIC PAIN: DULOXETINE 30-120 mg/day (DPN; Fibromyalgia; Chronic MSK); GABAPENTIN 300-3600 mg/day Divided; PREGABALIN 150-600 mg/day Schedule V; TCAs: Amitriptyline or Nortriptyline 10-75 mg HS; TOPICAL: Lidocaine 5% Patch (PHN; Focal Neuropathy); Capsaicin 8% Patch (Qutenza; 12 Weeks Effect); Diclofenac Gel (Local MSK); ACETAMINOPHEN 1-4 g/day (OA First-Line; Avoid 2 g/day If Liver Risk); NSAIDs: Naproxen Safest CV; Celecoxib (Avoid HF; CKD); MUSCLE RELAXANTS: Cyclobenzaprine; Tizanidine; Short-Term Only; Avoid Elderly; NON-PHARMACOLOGICAL: Aerobic + Resistance Exercise; CBT-CP; ACT; MBSR; Sleep CBT-I; Physical Therapy; MULTIDISCIPLINARY PAIN PROGRAM: Functional Restoration; Pain Psychology; Medication Optimization; Cochrane Level Evidence | `text` |  |  |  |
| Chronic Pain — Multimodal Strategy | Non-Opioid Pharmacotherapy | `pain_f2` | Opioid Management and Interventional | `select` |  |  |  |

### Interventional Pain Procedures — `pain_medicine_interventional_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Interventional Pain — ESI, Facet Blocks, SCS, and RFA | Epidural Steroid Injections | `esi_types` | Epidural Steroid Injection Types and Indications (INDICATIONS: radicular pain (sciatica/cervical radiculopathy) from herniated disc, foraminal stenosis, lateral recess stenosis; APPROACHES: INTERLAMINAR (ILM): needle in epidural space between lamina; CAUDAL: approach via sacral hiatus; lower risk; preferred for bilateral; TRANSFORAMINAL (TF): needle in neuroforamen; targeted delivery to affected nerve root; higher risk (vascular); PARTICULATE vs. NON-PARTICULATE STEROIDS: PARTICULATE (methylprednisolone, triamcinolone, betamethasone acetate): larger particles; longer duration; risk of embolic injury with intravascular injection; NOT for cervical TF (vertebral artery); TRIAMCINOLONE: NOT recommended for cervical/thoracic TF; FDA 2014 safety communication; NON-PARTICULATE (dexamethasone, betamethasone phosphate): smaller particles; safer for cervical TF; shorter duration; FDA RECOMMENDED: non-particulate for cervical TF; CONTRAST INJECTION: confirm epidural spread (not vascular); fluoroscopy guidance MANDATORY (or CT); EFFICACY: short-term pain relief + functional improvement (3-6 months); limited evidence for long-term; ISASS GUIDELINES 2020: support ESI for radiculopathy; LIMIT: ASIPP guidelines: <=3 per 6 months; >=4 per year; COMPLICATIONS: steroid-related (transient hyperglycemia, fluid retention); infection (<0.1%); spinal headache (ILM); nerve injury (<0.1%); epidural hematoma (rare) | `text` |  |  |  |
| Interventional Pain — ESI, Facet Blocks, SCS, and RFA | Epidural Steroid Injections | `esi_evidence` | ESI Evidence and Anticoagulation Management | `select` |  |  |  |
| Interventional Pain — ESI, Facet Blocks, SCS, and RFA | Facet Blocks, RFA, and Spinal Cord Stimulation | `facet_rfa` | Facet Joint Blocks and Radiofrequency Ablation (FACET JOINT (ZYGAPOPHYSEAL JOINT) PAIN: lumbar (L3-L4, L4-L5, L5-S1 most common); cervical; thoracic; CLINICAL: axial low back/neck pain; worse with extension; no radiculopathy; DIAGNOSIS: MEDIAL BRANCH BLOCKS (MBB): anesthetic injection at medial branch of dorsal ramus (innervates facet); DIAGNOSTIC: >=50% pain relief (or 80%): positive test; DUAL MBB protocol (2 blocks with different anesthetics): ASIPP criteria before RFA; RADIOFREQUENCY ABLATION (RFA): thermal lesion at medial branch; denervates facet; CONVENTIONAL RFA (CRF): 80-90 degrees C; 60-90 seconds; 6-12 months pain relief; COOLED RFA: larger lesion radius; increased success; longer duration; PULSED RFA: lower temperature (42 degrees); non-destructive; neuropathic pain applications; RESPONSE RATE: 50-70% achieve >=50% relief; REPEAT RFA: as medial branch regenerates (6-24 months); repeat RFA effective; CERVICAL FACET PAIN: C3-C4 through C6-C7; CERVICOGENIC HEADACHE: C2-C3 facet + GON (greater occipital nerve) block; SACROILIAC JOINT (SI JOINT): SIJ block + cooled RFA of lateral branch; APTA: 15-25% of low back pain from SIJ; fluoroscopy-guided; PROVOCATIVE TESTING: Gaenslen, FABER, thigh thrust; >=3 of 5 positive tests suggest SIJ) | `text` |  |  |  |
| Interventional Pain — ESI, Facet Blocks, SCS, and RFA | Facet Blocks, RFA, and Spinal Cord Stimulation | `scs` | Spinal Cord Stimulation (SCS) Indications and Types | `select` |  |  |  |

### Opioid Stewardship (MME/OUD Risk) — `pain_medicine_opioid_stewardship_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Opioid Stewardship — MME Calculation, Risk Tools, and Safe Prescribing | Morphine Milligram Equivalents and Conversion | `mme_calculator` | MME Conversion Factors (CDC 2022 Clinical Practice Guideline; MME = daily dose x conversion factor; common conversions: codeine 30 mg = 0.15 MME (factor 0.15; tramadol 1 MME per 10 mg PO (0.1); hydrocodone 1:1 with morphine (1.0); oxycodone x1.5 per mg (1.5); hydromorphone (Dilaudid): 4-6x morphine PO (4-7); fentanyl patch: mcg/hr x 2.4 = MME/day; methadone: complex ratio (varies by dose: 30 mg = 4-8x MME; 30-60 mg = up to 8x; >60 mg = up to 12x — underestimation risk); buprenorphine: partial agonist — partial ceiling effect; 8 mg SL bupe ~70 MME; avoid exact MME for buprenorphine in pain settings; FDA: MME not interchangeable across opioids due to incomplete cross-tolerance) | `text` |  |  |  |
| Opioid Stewardship — MME Calculation, Risk Tools, and Safe Prescribing | Morphine Milligram Equivalents and Conversion | `cdc_threshold` | CDC MME Thresholds and Prescribing Principles | `select` |  |  |  |
| Opioid Stewardship — MME Calculation, Risk Tools, and Safe Prescribing | OUD Risk Assessment and Naloxone Co-Prescribing | `oud_risk` | OUD Risk Assessment Tools (ORT (Opioid Risk Tool): 5 questions; personal/family history substance abuse, age 16-45, history sexual abuse, psychological disease; scoring: low (0-3), moderate (4-7), high (>=8); DIRE Score: Diagnosis, Intractability, Risk, Efficacy; SOAPP-R (Screener and Opioid Assessment for Patients with Pain-Revised): 24-item; DIRE + SOAPP-R: for chronic pain patients; universal precautions: informed consent, treatment agreement (pain contract), pill counts, PDMP checks, UDS (urine drug screens), prescription fills tracking; URINE DRUG SCREEN: baseline + random; confirm positives with quantitative LC-MS/MS (immunoassay cross-reactivity traps; synthetic opioids may not show on standard screen) | `text` |  |  |  |
| Opioid Stewardship — MME Calculation, Risk Tools, and Safe Prescribing | OUD Risk Assessment and Naloxone Co-Prescribing | `naloxone` | Naloxone Co-Prescribing (CDC 2022) | `select` |  |  |  |

## Pediatric

### Adolescent Wellness — `adolescent_wellness_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Adolescent Wellness Visit (HEEADSSS) | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Adolescent Wellness Visit (HEEADSSS) | Patient | `visitDate` | Visit Date | `date` | Y |  |  |
| Adolescent Wellness Visit (HEEADSSS) | Patient | `provider` | Provider | `typeahead` | Y |  |  |
| Adolescent Wellness Visit (HEEADSSS) | Patient | `ageYears` | Age (years) | `number` | Y |  |  |
| Adolescent Wellness Visit (HEEADSSS) | Patient | `confidentialityDisclosed` | Confidentiality (Adolescent privacy rights) reviewed with patient and parent | `checkbox` |  |  |  |
| Adolescent Wellness Visit (HEEADSSS) | HEEADSSS Psychosocial Screening | `home` | H — Home (living situation, safety at home, relationships) | `textarea` | Y |  |  |
| Adolescent Wellness Visit (HEEADSSS) | HEEADSSS Psychosocial Screening | `education` | E — Education/Employment (school performance, attendance) | `textarea` | Y |  |  |
| Adolescent Wellness Visit (HEEADSSS) | HEEADSSS Psychosocial Screening | `eating` | E — Eating (diet, body image, disordered eating concern) | `textarea` | Y |  |  |
| Adolescent Wellness Visit (HEEADSSS) | HEEADSSS Psychosocial Screening | `activities` | A — Activities (hobbies, screen time, exercise) | `textarea` | Y |  |  |
| Adolescent Wellness Visit (HEEADSSS) | HEEADSSS Psychosocial Screening | `drugs` | D — Drugs/Alcohol (CRAFFT, substance use) | `textarea` | Y |  |  |
| Adolescent Wellness Visit (HEEADSSS) | HEEADSSS Psychosocial Screening | `sex` | S — Sexuality (sexual activity, orientation, contraception, STI risk) | `textarea` | Y |  |  |
| Adolescent Wellness Visit (HEEADSSS) | HEEADSSS Psychosocial Screening | `suicide` | S — Suicide/Depression (PHQ-A, self-harm, safety screen) | `textarea` | Y |  |  |
| Adolescent Wellness Visit (HEEADSSS) | HEEADSSS Psychosocial Screening | `safety` | S — Safety (seatbelts, helmets, bullying, weapons at home) | `textarea` | Y |  |  |
| Adolescent Wellness Visit (HEEADSSS) | Vaccines & Plan | `vaccinesAdolescent` | Vaccines Reviewed / Given | `textarea` | Y |  |  |
| Adolescent Wellness Visit (HEEADSSS) | Vaccines & Plan | `anticipatoryGuidance` | Anticipatory Guidance | `textarea` | Y |  |  |
| Adolescent Wellness Visit (HEEADSSS) | Vaccines & Plan | `nextVisit` | Next Annual Wellness Visit | `date` |  |  |  |

### Immunization Review — `pediatric_immunization_review_cf`

Screen: 1 page(s) · 2 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Immunization Review | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Pediatric Immunization Review | Patient | `reviewDate` | Review Date | `date` | Y |  |  |
| Pediatric Immunization Review | Patient | `provider` | Provider | `typeahead` | Y |  |  |
| Pediatric Immunization Review | Patient | `ageMonths` | Age (months) | `number` |  |  |  |
| Pediatric Immunization Review | Patient | `visitContext` | Visit Context | `select` | Y |  |  |
| Pediatric Immunization Review | Vaccine Checklist | `hepB` | Hepatitis B (3-dose series) | `select` |  |  |  |
| Pediatric Immunization Review | Vaccine Checklist | `dtap` | DTaP (5-dose series, last at 4-6y) | `select` |  |  |  |
| Pediatric Immunization Review | Vaccine Checklist | `hib` | Hib (2-4 doses per brand) | `select` |  |  |  |
| Pediatric Immunization Review | Vaccine Checklist | `pcv` | PCV15/PCV20 (4-dose series) | `select` |  |  |  |
| Pediatric Immunization Review | Vaccine Checklist | `rv` | Rotavirus (2-3 doses) | `select` |  |  |  |
| Pediatric Immunization Review | Vaccine Checklist | `ipv` | IPV Polio (4-dose series) | `select` |  |  |  |
| Pediatric Immunization Review | Vaccine Checklist | `mmr` | MMR (2 doses) | `select` |  |  |  |
| Pediatric Immunization Review | Vaccine Checklist | `varicella` | Varicella (2 doses) | `select` |  |  |  |
| Pediatric Immunization Review | Vaccine Checklist | `hepa` | Hepatitis A (2-dose series) | `select` |  |  |  |
| Pediatric Immunization Review | Vaccine Checklist | `flu` | Influenza (annual) | `select` |  |  |  |
| Pediatric Immunization Review | Vaccine Checklist | `covid` | COVID-19 | `select` |  |  |  |
| Pediatric Immunization Review | Vaccine Checklist | `hpv` | HPV (2-3 dose series, 9+ years) | `select` |  |  |  |
| Pediatric Immunization Review | Vaccine Checklist | `meningACWY` | Meningococcal ACWY (2 doses, 11-12y + 16y booster) | `select` |  |  |  |
| Pediatric Immunization Review | Vaccine Checklist | `immNotes` | Immunization Notes / VIS Given | `textarea` |  |  |  |

### Newborn Visit — `neonatal_newborn_cf`

Screen: 1 page(s) · 4 section(s) · 33 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Neonatal / Newborn Visit | Infant & Visit | `patientId` | Patient (Infant) | `typeahead` | Y |  |  |
| Neonatal / Newborn Visit | Infant & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| Neonatal / Newborn Visit | Infant & Visit | `provider` | Provider | `typeahead` | Y |  |  |
| Neonatal / Newborn Visit | Infant & Visit | `visitType` | Visit Type | `select` | Y |  |  |
| Neonatal / Newborn Visit | Infant & Visit | `infantDob` | Date of Birth | `date` | Y |  |  |
| Neonatal / Newborn Visit | Infant & Visit | `gestationalAge` | Gestational Age at Birth | `text` | Y |  |  |
| Neonatal / Newborn Visit | Infant & Visit | `deliveryType` | Delivery Type | `select` |  |  |  |
| Neonatal / Newborn Visit | Infant & Visit | `parentPresent` | Parent / Guardian Present | `text` |  |  |  |
| Neonatal / Newborn Visit | Vitals & Growth | `birthWeight` | Birth Weight (g) | `number` |  |  |  |
| Neonatal / Newborn Visit | Vitals & Growth | `currentWeight` | Current Weight (g) | `number` | Y |  |  |
| Neonatal / Newborn Visit | Vitals & Growth | `weightChange` | Weight Change From Birth | `text` |  |  |  |
| Neonatal / Newborn Visit | Vitals & Growth | `length` | Length (cm) | `number` |  |  |  |
| Neonatal / Newborn Visit | Vitals & Growth | `hc` | Head Circumference (cm) | `number` |  |  |  |
| Neonatal / Newborn Visit | Vitals & Growth | `temp` | Temperature (°C) | `number` |  |  |  |
| Neonatal / Newborn Visit | Vitals & Growth | `hr` | Heart Rate (bpm) | `number` |  |  |  |
| Neonatal / Newborn Visit | Vitals & Growth | `rr` | Resp Rate (/min) | `number` |  |  |  |
| Neonatal / Newborn Visit | Vitals & Growth | `spO2` | SpO2 (%) | `number` |  |  |  |
| Neonatal / Newborn Visit | Physical Exam | `general` | General | `text` | Y |  |  |
| Neonatal / Newborn Visit | Physical Exam | `heent` | HEENT | `text` | Y |  |  |
| Neonatal / Newborn Visit | Physical Exam | `cardiac` | Cardiac | `text` | Y |  |  |
| Neonatal / Newborn Visit | Physical Exam | `resp` | Respiratory | `text` | Y |  |  |
| Neonatal / Newborn Visit | Physical Exam | `abdomen` | Abdomen | `text` | Y |  |  |
| Neonatal / Newborn Visit | Physical Exam | `genit` | Genitalia | `text` | Y |  |  |
| Neonatal / Newborn Visit | Physical Exam | `hip` | Hips | `text` | Y |  |  |
| Neonatal / Newborn Visit | Physical Exam | `neuro` | Neurological | `text` | Y |  |  |
| Neonatal / Newborn Visit | Physical Exam | `derm` | Skin | `text` | Y |  |  |
| Neonatal / Newborn Visit | Screenings & Vaccines | `jaundice` | Jaundice Assessment | `select` | Y |  |  |
| Neonatal / Newborn Visit | Screenings & Vaccines | `newbornScreen` | Newborn Metabolic Screen | `select` | Y |  |  |
| Neonatal / Newborn Visit | Screenings & Vaccines | `hearingScreen` | Newborn Hearing Screen | `select` | Y |  |  |
| Neonatal / Newborn Visit | Screenings & Vaccines | `criticalChd` | Critical CHD Screen (Pulse Ox at 24h+) | `select` |  |  |  |
| Neonatal / Newborn Visit | Screenings & Vaccines | `hepBVaccine` | Hepatitis B Vaccine | `select` | Y |  |  |
| Neonatal / Newborn Visit | Screenings & Vaccines | `feedingStatus` | Feeding Status | `select` | Y |  |  |
| Neonatal / Newborn Visit | Screenings & Vaccines | `sleepSafety` | Safe sleep counseling provided (ABCs: Alone, Back, Crib) | `checkbox` |  |  |  |

### Pediatric ADHD — `pediatric_adhd_cf`

Screen: 2 page(s) · 4 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ADHD Evaluation | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| ADHD Evaluation | Patient | `visitDate` | Visit Date | `date` | Y |  |  |
| ADHD Evaluation | Patient | `provider` | Provider | `typeahead` | Y |  |  |
| ADHD Evaluation | Patient | `visitType` | Visit Type | `select` | Y |  |  |
| ADHD Evaluation | Patient | `parentName` | Parent / Guardian Present | `text` |  |  |  |
| ADHD Evaluation | Vanderbilt / Rating Scale | `parentVanderbilt` | Parent Vanderbilt (NICHQ) | `select` | Y |  |  |
| ADHD Evaluation | Vanderbilt / Rating Scale | `teacherVanderbilt` | Teacher Vanderbilt / School Report | `select` | Y |  |  |
| ADHD Evaluation | Vanderbilt / Rating Scale | `performanceScore` | Academic / Behavioral Performance (Vanderbilt Part 2) | `select` |  |  |  |
| Medication Management | Current Medication | `currentMed` | Current ADHD Medication | `text` |  |  |  |
| Medication Management | Current Medication | `doseStartDate` | Current Dose Since | `date` |  |  |  |
| Medication Management | Current Medication | `efficacy` | Medication Efficacy | `select` | Y |  |  |
| Medication Management | Current Medication | `sideEffects` | Side Effects Reported | `textarea` |  |  |  |
| Medication Management | Current Medication | `vitals_ht` | Height (cm) | `number` |  |  |  |
| Medication Management | Current Medication | `vitals_wt` | Weight (kg) | `number` |  |  |  |
| Medication Management | Current Medication | `bpSystolic` | BP Systolic | `number` |  |  |  |
| Medication Management | Current Medication | `bpDiastolic` | BP Diastolic | `number` |  |  |  |
| Medication Management | Current Medication | `heartRate` | Heart Rate | `number` |  |  |  |
| Medication Management | Plan | `medChange` | Medication Change Today | `select` | Y |  |  |
| Medication Management | Plan | `newMed` | New / Adjusted Medication | `text` |  |  |  |
| Medication Management | Plan | `schoolAccommodations` | School Accommodations / 504 Plan Notes | `textarea` |  |  |  |
| Medication Management | Plan | `nextVisit` | Next Follow-up | `date` |  |  |  |

### School / Camp Physical — `school_physical_cf`

Screen: 1 page(s) · 4 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| School / Camp Physical Examination | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| School / Camp Physical Examination | Patient | `visitDate` | Visit Date | `date` | Y |  |  |
| School / Camp Physical Examination | Patient | `provider` | Provider | `typeahead` | Y |  |  |
| School / Camp Physical Examination | Patient | `physicalType` | Type of Physical | `select` | Y |  |  |
| School / Camp Physical Examination | Patient | `grade` | Grade / School / Camp | `text` |  |  |  |
| School / Camp Physical Examination | Patient | `parentPresent` | Parent / Guardian | `text` |  |  |  |
| School / Camp Physical Examination | Vitals & Growth | `height` | Height (cm) | `number` | Y |  |  |
| School / Camp Physical Examination | Vitals & Growth | `weight` | Weight (kg) | `number` | Y |  |  |
| School / Camp Physical Examination | Vitals & Growth | `bmi` | BMI | `number` |  |  |  |
| School / Camp Physical Examination | Vitals & Growth | `bmiPercentile` | BMI Percentile | `text` |  |  |  |
| School / Camp Physical Examination | Vitals & Growth | `bp` | Blood Pressure | `text` |  |  |  |
| School / Camp Physical Examination | Vitals & Growth | `hr` | Heart Rate (bpm) | `number` |  |  |  |
| School / Camp Physical Examination | Vitals & Growth | `vision` | Vision Screen | `text` | Y |  |  |
| School / Camp Physical Examination | Vitals & Growth | `hearing` | Hearing Screen | `text` | Y |  |  |
| School / Camp Physical Examination | Physical Exam | `genExam` | General Exam Findings | `textarea` | Y |  |  |
| School / Camp Physical Examination | Immunizations & Clearance | `immunizationStatus` | Immunization Status | `select` | Y |  |  |
| School / Camp Physical Examination | Immunizations & Clearance | `immunizationsGiven` | Vaccines Given Today | `text` |  |  |  |
| School / Camp Physical Examination | Immunizations & Clearance | `clearance` | Clearance | `select` | Y |  |  |
| School / Camp Physical Examination | Immunizations & Clearance | `clearanceNotes` | Provider Notes | `textarea` | Y |  |  |

### Sports Physical (PPE) — `sports_pre_participation_cf`

Screen: 1 page(s) · 3 section(s) · 20 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sports Pre-Participation Physical Exam | Patient & Sport | `patientId` | Patient | `typeahead` | Y |  |  |
| Sports Pre-Participation Physical Exam | Patient & Sport | `visitDate` | Visit Date | `date` | Y |  |  |
| Sports Pre-Participation Physical Exam | Patient & Sport | `provider` | Provider | `typeahead` | Y |  |  |
| Sports Pre-Participation Physical Exam | Patient & Sport | `sport` | Sport(s) | `text` | Y |  |  |
| Sports Pre-Participation Physical Exam | Patient & Sport | `grade` | Grade / School | `text` |  |  |  |
| Sports Pre-Participation Physical Exam | Patient & Sport | `season` | Season | `select` |  |  |  |
| Sports Pre-Participation Physical Exam | Cardiac Screening (AHA 14-element) | `exertionalChestPain` | Exertional chest pain / discomfort / pressure | `select` | Y |  |  |
| Sports Pre-Participation Physical Exam | Cardiac Screening (AHA 14-element) | `unexplainedSyncope` | Unexplained syncope or near-syncope with exercise | `select` | Y |  |  |
| Sports Pre-Participation Physical Exam | Cardiac Screening (AHA 14-element) | `exertionalDyspnea` | Excessive unexplained dyspnea / fatigue / palpitations with exercise | `select` | Y |  |  |
| Sports Pre-Participation Physical Exam | Cardiac Screening (AHA 14-element) | `heartMurmur` | Previously told have a heart murmur | `select` | Y |  |  |
| Sports Pre-Participation Physical Exam | Cardiac Screening (AHA 14-element) | `elevatedBp` | Known elevated blood pressure | `select` | Y |  |  |
| Sports Pre-Participation Physical Exam | Cardiac Screening (AHA 14-element) | `familyHistSuddenDeath` | Family history of premature sudden cardiac death (<50 years, unexplained) | `select` | Y |  |  |
| Sports Pre-Participation Physical Exam | Cardiac Screening (AHA 14-element) | `cardiacFindings` | Cardiac Exam Findings | `text` | Y |  |  |
| Sports Pre-Participation Physical Exam | Exam & Clearance Decision | `bpAtVisit` | BP at Visit | `text` | Y |  |  |
| Sports Pre-Participation Physical Exam | Exam & Clearance Decision | `hrAtVisit` | HR at Visit (bpm) | `number` |  |  |  |
| Sports Pre-Participation Physical Exam | Exam & Clearance Decision | `heightWeight` | Height / Weight / BMI | `text` |  |  |  |
| Sports Pre-Participation Physical Exam | Exam & Clearance Decision | `visionScreen` | Vision Screen (20/40 standard for most sports) | `select` |  |  |  |
| Sports Pre-Participation Physical Exam | Exam & Clearance Decision | `musculoskeletal` | Musculoskeletal Findings | `text` | Y |  |  |
| Sports Pre-Participation Physical Exam | Exam & Clearance Decision | `clearance` | Clearance Decision | `select` | Y |  |  |
| Sports Pre-Participation Physical Exam | Exam & Clearance Decision | `clearanceNotes` | Clearance Notes / Restrictions | `textarea` | Y |  |  |

## Quality

### Care Gaps — `patient_care_gaps_cf`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB MISSING

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Care Gaps | Open Gaps | `measureCode` | Measure code | `text` |  |  |  |
| Care Gaps | Open Gaps | `measureName` | Measure name | `text` |  |  |  |
| Care Gaps | Open Gaps | `gapStatus` | Status | `text` |  |  |  |
| Care Gaps | Open Gaps | `dueDate` | Due date | `text` |  |  |  |
| Care Gaps | Open Gaps | `closureMethod` | Closure method | `select` |  |  |  |
| Care Gaps | Open Gaps | `closureNotes` | Closure notes | `textarea` |  |  |  |

### Evidence Gaps — `evidence_gaps_cf`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB MISSING

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evidence Gaps | Gap Details | `gapCategory` | Gap category | `select` |  |  |  |
| Evidence Gaps | Gap Details | `measureId` | Measure ID | `text` |  |  |  |
| Evidence Gaps | Gap Details | `description` | Gap description | `textarea` |  |  |  |
| Evidence Gaps | Gap Details | `patientBarrier` | Patient barrier | `select` |  |  |  |
| Evidence Gaps | Gap Details | `interventionPlanned` | Intervention planned | `select` |  |  |  |
| Evidence Gaps | Gap Details | `resolutionNotes` | Resolution notes | `textarea` |  |  |  |
| Evidence Gaps | Gap Details | `targetDate` | Target resolution date | `text` |  |  |  |

### HEDIS / Star Ratings — `quality_measures_hedis_star_cf`

Screen: 1 page(s) · 4 section(s) · 19 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| HEDIS and Star Ratings Quality Measure Tracker | Cancer Screening Measures | `qm_colorectal` | Colorectal Cancer Screening (COL) — Age 45-75 | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Cancer Screening Measures | `qm_breast` | Breast Cancer Screening (BCS) — Women 50-74 | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Cancer Screening Measures | `qm_cervical` | Cervical Cancer Screening (CCS) — Women 21-64 | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Cancer Screening Measures | `qm_lung_cancer` | Lung Cancer Screening (LCS) — Age 50-80, Heavy Smoker | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Diabetes Care Measures | `qm_hba1c` | Diabetes HbA1c Testing (CDC) | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Diabetes Care Measures | `qm_dm_bp` | Diabetes Blood Pressure Control | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Diabetes Care Measures | `qm_dm_eye` | Diabetic Eye Exam (DRE) | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Diabetes Care Measures | `qm_dm_kidney` | Diabetes Kidney Disease Monitoring (KED) | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Preventive Care Measures | `qm_bmi` | BMI and Weight Counseling | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Preventive Care Measures | `qm_tobacco` | Tobacco Use Assessment and Cessation (TUP/TCS) | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Preventive Care Measures | `qm_flu_vaccine` | Influenza Immunization | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Preventive Care Measures | `qm_pneumococcal` | Pneumococcal Vaccination (Age 65+ or High Risk) | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Preventive Care Measures | `qm_depression_screen` | Depression Screening (DSF) | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Preventive Care Measures | `qm_fall_risk` | Fall Risk Screening (Age 65+) | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Quality Gap Summary and Actions | `qm_gaps_total` | Total Open Quality Gaps This Visit | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Quality Gap Summary and Actions | `qm_gaps_closed_today` | Gaps Closed This Visit (measures completed, ordered, or referrals placed) | `textarea` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Quality Gap Summary and Actions | `qm_gaps_remaining` | Remaining Open Gaps (patient declined, unreachable, clinical exclusion reason) | `textarea` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Quality Gap Summary and Actions | `qm_payer_program` | Quality Program | `select` |  |  |  |
| HEDIS and Star Ratings Quality Measure Tracker | Quality Gap Summary and Actions | `qm_notes` | Clinical Notes and Quality Rationale | `textarea` |  |  |  |

### Incident Reports — `incident_report_cf`

Screen: 1 page(s) · 1 section(s) · 9 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Incident Report | Incident | `incidentDescription` | Description | `textarea` | Y |  |  |
| Incident Report | Incident | `incidentDate` | Date | `date` |  |  |  |
| Incident Report | Incident | `incidentTime` | Time | `time` |  |  |  |
| Incident Report | Incident | `incidentType` | Type | `text` |  |  |  |
| Incident Report | Incident | `severity` | Severity | `select` |  |  |  |
| Incident Report | Incident | `location` | Location | `text` |  |  |  |
| Incident Report | Incident | `injuryOccurred` | Injury Occurred | `select` |  |  |  |
| Incident Report | Incident | `reportedBy` | Reported By | `text` |  |  |  |
| Incident Report | Incident | `status` | Status | `text` |  | status |  |

### Patient Grievances — `patient_grievance_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Grievance | Complaint | `category` | Category | `select` |  |  |  |
| Patient Grievance | Complaint | `urgency` | Urgency | `select` |  |  |  |
| Patient Grievance | Complaint | `receivedVia` | Received Via | `text` |  |  |  |
| Patient Grievance | Complaint | `subject` | Subject | `text` | Y |  |  |
| Patient Grievance | Complaint | `grievanceDescription` | Description | `textarea` | Y |  |  |
| Patient Grievance | Complaint | `assignedTo` | Assigned To | `text` |  |  |  |
| Patient Grievance | Complaint | `dueDate` | Due Date | `date` |  |  |  |
| Patient Grievance | Complaint | `status` | Status | `text` |  | status |  |
| Patient Grievance | Resolution | `resolutionSummary` | Resolution Summary | `textarea` |  |  |  |
| Patient Grievance | Resolution | `preventiveActions` | Preventive Actions | `textarea` |  |  |  |

### Patient Surveys — `patient_surveys_cf`

Screen: 2 page(s) · 2 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Survey Definition | Survey | `surveyName` | Survey Name | `text` | Y |  |  |
| Survey Definition | Survey | `surveyType` | Type | `select` |  |  |  |
| Survey Definition | Survey | `isActive` | Active | `checkbox` |  |  |  |
| Survey Definition | Survey | `questions` | Questions (JSON) | `textarea` |  |  |  |
| Responses | Response | `patientId` | Patient | `lookup` |  |  |  |
| Responses | Response | `surveyDate` | Survey Date | `date` |  |  |  |
| Responses | Response | `respondedVia` | Channel | `select` |  |  |  |
| Responses | Response | `overallRating` | Overall Rating (1-5) | `number` |  |  |  |
| Responses | Response | `npsScore` | NPS Score (0-10) | `number` |  |  |  |
| Responses | Response | `wouldRecommend` | Would Recommend | `checkbox` |  |  |  |
| Responses | Response | `waitTimeRating` | Wait Time Rating (1-5) | `number` |  |  |  |
| Responses | Response | `staffRating` | Staff Rating (1-5) | `number` |  |  |  |
| Responses | Response | `providerRating` | Provider Rating (1-5) | `number` |  |  |  |
| Responses | Response | `facilityRating` | Facility Rating (1-5) | `number` |  |  |  |
| Responses | Response | `followUpRequested` | Follow-Up Requested | `checkbox` |  |  |  |
| Responses | Response | `comments` | Open-ended Comments | `textarea` |  |  |  |
| Responses | Response | `followUpNotes` | Follow-Up Notes | `textarea` |  |  |  |

## Radiation Oncology

### Bone Scan Report — `nuclear_medicine_bone_scan_cf`

Screen: 1 page(s) · 3 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Bone Scintigraphy Interpretation (Tc-99m MDP) | Indication | `indication` | Bone Scan Indication | `select` |  |  |  |
| Bone Scintigraphy Interpretation (Tc-99m MDP) | Findings | `lesion_distribution` | Lesion Distribution | `select` |  |  |  |
| Bone Scintigraphy Interpretation (Tc-99m MDP) | Findings | `specific_lesions` | Specific Lesion Locations and Characteristics (vertebral, rib, pelvis, long bones — describe each; size if measurable; comparison to prior if available) | `textarea` |  |  |  |
| Bone Scintigraphy Interpretation (Tc-99m MDP) | Impression and Recommendation | `impression` | Impression (correlation with clinical history and PSA/tumor markers; comparison to prior scan — regression, stable, progression; recommend supplemental MRI for equivocal findings) | `textarea` |  |  |  |

### PET-CT Report — `nuclear_medicine_pet_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| PET-CT Interpretation Report | Study Details | `tracer` | Radiotracer | `select` |  |  |  |
| PET-CT Interpretation Report | Study Details | `indication` | Clinical Indication (staging, restaging, treatment response, unknown primary, suspected recurrence) | `text` |  |  |  |
| PET-CT Interpretation Report | Study Details | `blood_glucose` | Pre-scan Blood Glucose (mg/dL; must be <200 for FDG; fasting 4-6h required) | `number` |  |  |  |
| PET-CT Interpretation Report | Findings | `primary_lesion` | Primary Lesion (location, SUVmax, size, morphology — specify CT findings) | `text` |  |  |  |
| PET-CT Interpretation Report | Findings | `nodal_disease` | Nodal Disease (FDG-avid nodes — region, SUVmax; define as regional vs. distant) | `text` |  |  |  |
| PET-CT Interpretation Report | Findings | `distant_metastases` | Distant Metastases (liver, lung, bone, brain, adrenal, peritoneum — location, SUVmax, size) | `text` |  |  |  |
| PET-CT Interpretation Report | Findings | `background_uptake` | Background Liver SUVmean / Mediastinal blood pool SUVmean (reference for lesion characterization — lesion SUV relative to liver) | `text` |  |  |  |
| PET-CT Interpretation Report | Impression | `overall_response` | Overall Response Assessment (PERCIST or Lugano criteria) | `select` |  |  |  |
| PET-CT Interpretation Report | Impression | `impression_text` | Interpretation and Recommendation (clinical correlation; comparison to prior; suggest biopsy if clinically indicated) | `textarea` |  |  |  |

### RT Treatment Planning — `radiation_oncology_treatment_planning_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Radiation Treatment Planning — Simulation Note | Prescription and Technique | `treatment_intent` | Treatment Intent | `select` |  |  |  |
| Radiation Treatment Planning — Simulation Note | Prescription and Technique | `technique` | RT Technique | `select` |  |  |  |
| Radiation Treatment Planning — Simulation Note | Treatment Volumes and Organs at Risk | `volumes_oar` | Target Volumes and OAR Constraints (GTV: gross tumor visible on imaging; CTV = GTV + subclinical extension margin (disease-site specific); ITV = CTV + internal motion; PTV = ITV + setup uncertainty; OAR dose constraints: spinal cord <45 Gy (conventional) or <14 Gy (SRS max); lung V20 <35%; heart V30 <46%; parotid mean <26 Gy bilateral; bowel V45 <195 cc for pelvis; liver mean <28-32 Gy; kidney mean bilateral <18-23 Gy; document per QUANTEC) | `textarea` |  |  |  |

### RadOnc Consultation — `radiation_oncology_consultation_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Radiation Oncology Consultation and Treatment Planning | Referral and Indication | `cancer_type` | Cancer Type, Stage, and Histology (with AJCC stage and molecular markers if applicable) | `text` |  |  |  |
| Radiation Oncology Consultation and Treatment Planning | Referral and Indication | `radiation_intent` | Radiation Intent | `select` |  |  |  |
| Radiation Oncology Consultation and Treatment Planning | Referral and Indication | `concurrent_chemo` | Concurrent Chemotherapy or Immunotherapy (agent, schedule; radiosensitization — cisplatin, carboplatin, 5-FU, capecitabine, cetuximab) | `text` |  |  |  |
| Radiation Oncology Consultation and Treatment Planning | RT Technique and Dosing | `technique` | Radiation Technique | `select` |  |  |  |
| Radiation Oncology Consultation and Treatment Planning | RT Technique and Dosing | `total_dose` | Total Dose and Fractionation (Gy / # fractions; BED calculation — e.g., 60 Gy in 30 fx, 45 Gy in 25 fx, 24 Gy in 3 fx SBRT) | `text` |  |  |  |
| Radiation Oncology Consultation and Treatment Planning | RT Technique and Dosing | `critical_structures` | Critical Structure Dose Constraints (OAR — spinal cord Dmax <45 Gy, lung V20 <30%, rectum V70 <20%, parotid Dmean <26 Gy, heart V25 <10%) | `textarea` |  |  |  |
| Radiation Oncology Consultation and Treatment Planning | Acute and Late Side Effects | `acute_side_effects` | Expected Acute Side Effects (radiation dermatitis, mucositis, esophagitis, diarrhea, fatigue, alopecia — within 90 days) | `textarea` |  |  |  |
| Radiation Oncology Consultation and Treatment Planning | Acute and Late Side Effects | `late_effects` | Expected Late Effects (lymphedema, fibrosis, xerostomia, secondary malignancy, radiation necrosis, bowel dysfunction — beyond 90 days; informed consent) | `textarea` |  |  |  |

### RadOnc Follow-Up — `radiation_oncology_followup_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Radiation Oncology On-Treatment and Follow-Up | Treatment Course | `fractions_completed` | Fractions Completed / Total Planned | `number` |  |  |  |
| Radiation Oncology On-Treatment and Follow-Up | Treatment Course | `treatment_breaks` | Treatment Interruptions (reason, duration; impact on local control — gaps >5 days in head/neck chemoRT significantly reduce tumor control probability) | `text` |  |  |  |
| Radiation Oncology On-Treatment and Follow-Up | Treatment Course | `ecog` | Performance Status (ECOG) | `select` |  |  |  |
| Radiation Oncology On-Treatment and Follow-Up | CTCAE Toxicity Assessment | `skin_toxicity` | Skin Reaction (CTCAE grade) | `select` |  |  |  |
| Radiation Oncology On-Treatment and Follow-Up | CTCAE Toxicity Assessment | `mucositis_grade` | Oral Mucositis Grade (if HN RT) | `select` |  |  |  |
| Radiation Oncology On-Treatment and Follow-Up | CTCAE Toxicity Assessment | `other_toxicity` | Other Toxicities (fatigue, nausea/vomiting, diarrhea, cystitis, pneumonitis — grade and management) | `textarea` |  |  |  |
| Radiation Oncology On-Treatment and Follow-Up | Treatment Response Assessment | `response_assessment` | Response Assessment (post-treatment imaging) | `select` |  |  |  |
| Radiation Oncology On-Treatment and Follow-Up | Treatment Response Assessment | `surveillance_plan` | Surveillance Plan (imaging: CT/PET-CT/MRI schedule; PSA/CEA/AFP if applicable; exam frequency; long-term late effects monitoring) | `text` |  |  |  |

### Thyroid Scan / RAI — `nuclear_medicine_thyroid_scan_cf`

Screen: 1 page(s) · 3 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Thyroid Scintigraphy and Radioactive Iodine (RAI) Therapy | Study Information | `study_type` | Study Type | `select` |  |  |  |
| Thyroid Scintigraphy and Radioactive Iodine (RAI) Therapy | Study Information | `tsh_pre` | TSH at Time of Study (mU/L; WBS for cancer: TSH >30 required — thyroid hormone withdrawal or rhTSH) | `number` |  |  |  |
| Thyroid Scintigraphy and Radioactive Iodine (RAI) Therapy | Uptake Results | `uptake_24h` | 24-hour Radioiodine Uptake (RAIU %; normal 10-30%; elevated = Graves or toxic goiter; suppressed = thyroiditis or exogenous hormone) | `number` |  |  |  |
| Thyroid Scintigraphy and Radioactive Iodine (RAI) Therapy | Uptake Results | `scan_pattern` | Scan Pattern | `select` |  |  |  |
| Thyroid Scintigraphy and Radioactive Iodine (RAI) Therapy | RAI Therapy (if applicable) | `rai_indication` | RAI Indication | `select` |  |  |  |
| Thyroid Scintigraphy and Radioactive Iodine (RAI) Therapy | RAI Therapy (if applicable) | `rai_dose` | I-131 Activity Administered (mCi) | `number` |  |  |  |
| Thyroid Scintigraphy and Radioactive Iodine (RAI) Therapy | RAI Therapy (if applicable) | `radiation_precautions` | Radiation Precautions Reviewed (isolation period; avoid close contact with children/pregnant women for 5-7 days; distance and time precautions; sweat/saliva contamination) | `textarea` |  |  |  |

## Thoracic Surgery

### Bronchoscopy Eval — `thoracic_tracheal_bronchial_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Bronchoscopy and Airway Evaluation | Bronchoscopy Indication | `indication` | Procedure Indication | `select` |  |  |  |
| Bronchoscopy and Airway Evaluation | Bronchoscopy Indication | `lesion_location` | Target Lesion Location (lobe, segment — anatomy guides scope selection and approach) | `text` |  |  |  |
| Bronchoscopy and Airway Evaluation | Bronchoscopy Findings | `airways_appearance` | Airway Appearance | `select` |  |  |  |
| Bronchoscopy and Airway Evaluation | Bronchoscopy Findings | `specimens_taken` | Specimens Obtained (biopsy, brushing, BAL, transbronchial biopsy, cryo-biopsy, EBUS-FNA — sites and number of passes) | `textarea` |  |  |  |
| Bronchoscopy and Airway Evaluation | Bronchoscopy Findings | `complications` | Procedure Complications | `select` |  |  |  |

### Esophageal Cancer — `thoracic_esophageal_cancer_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Esophageal Cancer Evaluation and Management | Tumor Characteristics | `histology` | Histology and Location | `select` |  |  |  |
| Esophageal Cancer Evaluation and Management | Tumor Characteristics | `stage` | Clinical Stage (AJCC 8th Edition) | `select` |  |  |  |
| Esophageal Cancer Evaluation and Management | Esophagectomy Planning | `surgical_approach` | Esophagectomy Approach | `select` |  |  |  |
| Esophageal Cancer Evaluation and Management | Esophagectomy Planning | `conduit` | Conduit Type | `select` |  |  |  |
| Esophageal Cancer Evaluation and Management | Esophagectomy Planning | `nutritional_plan` | Preoperative nutritional optimization (prehabilitation; dysphagia-adapted diet; jejunostomy feeding tube placed prophylactically) | `checkbox` |  |  |  |

### Lung Resection (VATS/Robotic) — `thoracic_surgery_lung_resection_depth_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lung Resection — Minimally Invasive Assessment | Indication and Staging | `resection_indication` | Resection Indication | `select` |  |  |  |
| Lung Resection — Minimally Invasive Assessment | Indication and Staging | `pulmonary_function` | Pulmonary Function Assessment (FEV1 % predicted; DLCO % predicted; ppoFEV1 and ppoDLCO post-resection prediction: ppoFEV1 = preop FEV1 × (1 - [segments resected/19]); ppoFEV1 ≥40% + ppoDLCO ≥40% = standard risk; low risk = no further test; if borderline: VO2max >20 mL/kg/min = operable; VQ scan for asymmetric function; 6MWT) | `text` |  |  |  |
| Lung Resection — Minimally Invasive Assessment | Surgical Approach | `approach` | Minimally Invasive Approach | `select` |  |  |  |
| Lung Resection — Minimally Invasive Assessment | Surgical Approach | `perioperative` | Perioperative Management (ERAS: early ambulation, epidural/paravertebral block (PVB) or serratus anterior block, avoid routine chest tube; digital drainage assessment removes subjectivity; water seal day 1; remove tube if air leak <20 mL/min × 6 hours and drainage <250 mL/day; OLV management: TV 5 mL/kg IBW, PEEP 5-8 cmH2O, driving pressure <16) | `textarea` |  |  |  |

### Lung Resection Consult — `thoracic_lung_resection_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lung Resection Consultation (NSCLC) | Tumor Staging (8th Edition IASLC) | `clinical_stage` | Clinical Stage | `select` |  |  |  |
| Lung Resection Consultation (NSCLC) | Tumor Staging (8th Edition IASLC) | `histology` | Histology | `select` |  |  |  |
| Lung Resection Consultation (NSCLC) | Pulmonary Function and Operability | `fev1_percent` | FEV1 % Predicted (pre-op; lobectomy safe if >60%; pneumonectomy needs >80%) | `number` |  |  |  |
| Lung Resection Consultation (NSCLC) | Pulmonary Function and Operability | `dlco_percent` | DLCO % Predicted (pre-op; poor risk if <60%) | `number` |  |  |  |
| Lung Resection Consultation (NSCLC) | Pulmonary Function and Operability | `predicted_ppo` | ppoFEV1 and ppoDLCO (predicted post-operative; calculate segment-weighted; both >40% = low risk; <30% = high risk; 30-40% = cardiopulmonary exercise testing) | `text` |  |  |  |
| Lung Resection Consultation (NSCLC) | Pulmonary Function and Operability | `vo2_max` | VO2 max if CPET done (>20 mL/kg/min = low risk; 10-20 = moderate; <10 = high risk — consider sublobar or SBRT) | `text` |  |  |  |
| Lung Resection Consultation (NSCLC) | Surgical Plan | `approach` | Surgical Approach | `select` |  |  |  |
| Lung Resection Consultation (NSCLC) | Surgical Plan | `resection_type` | Planned Resection | `select` |  |  |  |

### Mediastinal Mass — `thoracic_mediastinal_mass_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Mediastinal Mass Evaluation | Location and Differential | `compartment` | Mediastinal Compartment (Felson classification) | `select` |  |  |  |
| Mediastinal Mass Evaluation | Location and Differential | `likely_diagnosis` | Most Likely Diagnosis | `select` |  |  |  |
| Mediastinal Mass Evaluation | Diagnostic Workup | `serum_markers` | Serum Markers (AFP, beta-hCG for GCT; LDH for lymphoma; anti-AChR antibody for MG if thymoma suspected; ACTH, cortisol for thymoma/NET) | `text` |  |  |  |
| Mediastinal Mass Evaluation | Diagnostic Workup | `biopsy` | Biopsy Strategy | `select` |  |  |  |

### Pleural Disease — `thoracic_pleural_disease_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pleural Disease Evaluation and Management | Pleural Effusion | `effusion_type` | Pleural Effusion Classification (Light Criteria) | `select` |  |  |  |
| Pleural Disease Evaluation and Management | Pleural Effusion | `fluid_analysis` | Pleural Fluid Analysis (protein, LDH, glucose, pH, cell count with differential, culture, cytology — if malignancy suspected: PD-L1, genetic markers) | `textarea` |  |  |  |
| Pleural Disease Evaluation and Management | Pleural Effusion | `malignant_effusion` | Malignant effusion confirmed (cytology positive or biopsy proven) — indwelling pleural catheter (IPC) or pleurodesis (talc preferred) | `checkbox` |  |  |  |
| Pleural Disease Evaluation and Management | Parapneumonic Effusion / Empyema | `empyema_stage` | Empyema Stage (Light Classification) | `select` |  |  |  |
| Pleural Disease Evaluation and Management | Parapneumonic Effusion / Empyema | `fibrinolytics` | Intrapleural fibrinolytics (tPA 10 mg + DNase 5 mg BID x 6 doses) if complex/loculated non-responding to chest tube (MIST2 protocol) | `checkbox` |  |  |  |
| Pleural Disease Evaluation and Management | Pneumothorax | `ptx_type` | Pneumothorax Type | `select` |  |  |  |
| Pleural Disease Evaluation and Management | Pneumothorax | `size` | Size (ACCP Classification) | `select` |  |  |  |
| Pleural Disease Evaluation and Management | Pneumothorax | `surgical_indication` | VATS pleurodesis / pleurectomy indicated (recurrent PSP second episode; SSP first episode; bilateral; persistent air leak >3 days; high-risk occupation: pilot, diver) | `checkbox` |  |  |  |
