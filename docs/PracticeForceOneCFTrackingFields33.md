---
title: "PracticeForceOneCFTrackingFields33"
---

# CF Tracking — Field-Level Detail (part 33 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Neonatology**, **Hepatology**, **Palliative Care**, **Hematology/Oncology**, **Scheduling**, **Orthopedics**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Neonatology

### NICU Prematurity Management — `neonatology_prematurity_management_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Premature Infant — NICU Management and Developmental Follow-up | Gestational Age and Risk Stratification | `gestational_age` | Gestational Age at Birth | `select` |  |  |  |
| Premature Infant — NICU Management and Developmental Follow-up | Gestational Age and Risk Stratification | `birth_weight` | Birth Weight (grams; VLBW <1500g; ELBW <1000g; ELBW 50% BPD; <750g = highest neurodevelopmental risk; plot on Fenton growth chart; SGA = below 10th percentile; IUGR evaluation; head circumference at birth) | `number` |  |  |  |
| Premature Infant — NICU Management and Developmental Follow-up | Common Complications Monitoring | `respiratory` | Respiratory Support (RDS: surfactant (LISA or INSURE preferred over intubation if CPAP failure); CPAP 5-8 cmH2O; high-flow nasal cannula; caffeine citrate 20 mg/kg load then 5-10 mg/kg/day for apnea; methylxanthine until 34-35 weeks PMA; BPD: defined as O2 need at 36 weeks PMA; HFOV; inhaled corticosteroids; diuretics (furosemide/chlorothiazide); RSV prophylaxis (palivizumab) for <32 weeks or BPD) | `text` |  |  |  |
| Premature Infant — NICU Management and Developmental Follow-up | Common Complications Monitoring | `nec` | NEC Prevention and Management | `select` |  |  |  |
| Premature Infant — NICU Management and Developmental Follow-up | Developmental Follow-up Plan | `followup_plan` | NICU Follow-up Program (high-risk infant follow-up clinic; corrected age for all developmental milestones until 2 years for EPT; neurodevelopmental assessment at 18-24 months corrected age (Bayley-IV); early intervention services (IDEA Part C); ophthalmology for ROP; audiology hearing screen BEFORE discharge; ABR if failed OAE; head ultrasound for IVH grade 3 or above to MRI at term equivalent age; DQ/IQ testing at 5-6 years; occupational and physical therapy; social work support for NICU families) | `textarea` |  |  |  |

### NICU: RDS / Surfactant — `nicu_rds_surfactant_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| RDS and Surfactant Therapy | RDS Assessment | `ga_at_treatment` | GA at Time of Treatment | `text` |  |  |  |
| RDS and Surfactant Therapy | RDS Assessment | `weight` | Current Weight (g — surfactant dose based on weight) | `number` |  |  |  |
| RDS and Surfactant Therapy | RDS Assessment | `rds_severity` | RDS Severity (by CXR and FiO2 requirement) | `select` |  |  |  |
| RDS and Surfactant Therapy | RDS Assessment | `cxr_finding` | CXR Finding (ground-glass, air bronchograms, bell-shaped thorax) | `text` |  |  |  |
| RDS and Surfactant Therapy | RDS Assessment | `fio2_pre` | FiO2 Prior to Surfactant (%) | `number` |  |  |  |
| RDS and Surfactant Therapy | Surfactant Administration | `surfactant_agent` | Surfactant Agent | `select` |  |  |  |
| RDS and Surfactant Therapy | Surfactant Administration | `dose_administered` | Dose Administered (mL/kg and total mL) | `text` |  |  |  |
| RDS and Surfactant Therapy | Surfactant Administration | `route` | Administration Technique | `select` |  |  |  |
| RDS and Surfactant Therapy | Surfactant Administration | `fio2_post` | FiO2 After Surfactant (% — >50% reduction = good response) | `number` |  |  |  |
| RDS and Surfactant Therapy | Surfactant Administration | `repeat_dose` | Repeat dose given (within 6-12 hrs if still requiring FiO2 >0.30 on CPAP) | `checkbox` |  |  |  |

### Neonatal Jaundice — `nicu_neonatal_jaundice_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Neonatal Hyperbilirubinemia Management | Risk Assessment | `gestational_age_weeks` | Gestational Age (weeks) | `number` |  |  |  |
| Neonatal Hyperbilirubinemia Management | Risk Assessment | `postnatal_hours` | Age in Hours at Time of Bilirubin Measurement | `number` |  |  |  |
| Neonatal Hyperbilirubinemia Management | Risk Assessment | `total_bilirubin` | Total Serum Bilirubin (TSB) in mg/dL | `number` |  |  |  |
| Neonatal Hyperbilirubinemia Management | Risk Assessment | `direct_bilirubin` | Direct (Conjugated) Bilirubin in mg/dL (>1 mg/dL = cholestasis; evaluate for biliary atresia) | `number` |  |  |  |
| Neonatal Hyperbilirubinemia Management | Risk Assessment | `bhutani_zone` | Bhutani Nomogram Zone (TSB plotted against age in hours) | `select` |  |  |  |
| Neonatal Hyperbilirubinemia Management | Etiology Workup | `blood_type` | Blood Type and Coombs (maternal and infant — ABO incompatibility; Rh disease; DAT positive) | `text` |  |  |  |
| Neonatal Hyperbilirubinemia Management | Etiology Workup | `hemolysis_screen` | Hemolysis screen sent (CBC, reticulocyte count, peripheral smear for spherocytes, LDH, G6PD if applicable) | `checkbox` |  |  |  |
| Neonatal Hyperbilirubinemia Management | Etiology Workup | `etiology` | Identified Etiology | `select` |  |  |  |
| Neonatal Hyperbilirubinemia Management | Treatment | `phototherapy` | Phototherapy initiated (intensive: >30 uW/cm2/nm; skin exposure maximized; eye protection; hydration) | `checkbox` |  |  |  |
| Neonatal Hyperbilirubinemia Management | Treatment | `ivig` | IVIG given (isoimmune hemolytic disease: 0.5-1 g/kg over 2h; repeat in 12h if TSB continues rising) | `checkbox` |  |  |  |
| Neonatal Hyperbilirubinemia Management | Treatment | `exchange_transfusion` | Double-volume exchange transfusion indicated / performed (TSB at exchange threshold on AAP nomogram; OR acute bilirubin encephalopathy signs) | `checkbox` |  |  |  |
| Neonatal Hyperbilirubinemia Management | Treatment | `discharge_plan` | Discharge Follow-Up Plan (repeat TSB or TcB within 24-48h of discharge; lactation support if breastfeeding concerns) | `text` |  |  |  |

### Neonatal Jaundice — `neonatology_jaundice_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Neonatal Jaundice — Evaluation and Phototherapy | Risk Stratification and Treatment | `nbj_f1` | Neonatal Hyperbilirubinemia: BILIRUBIN METABOLISM: Heme Catabolism Unconjugated Indirect (Lipid-Soluble; Crosses BBB; Neurotoxic) -> Conjugated by UDP-Glucuronosyltransferase -> Direct Bilirubin Water Soluble Excreted; PHYSIOLOGIC JAUNDICE (Visible Day 2-3; Peak Day 3-5; Under 12 mg/dL Term; Resolves By Day 7-14; Due Neonatal Polycythemia Shorter RBC Lifespan Immature Liver Conjugation; Safe; Normal); PATHOLOGIC (ANY of: Jaundice First 24H; TSB Rise Over 5 mg/dL/D; TSB Over Phototherapy Threshold; Direct Bilirubin Over 1 mg/dL or Over 20 pct Total; Persistent Over 2W Term or 3W Preterm); ETIOLOGY UNCONJUGATED: ABO INCOMPATIBILITY (Most Common Hemolytic; O Mother A or B Baby; Less Severe Than Rh; DAT May Be Weakly Positive; Spherocytes Smear); Rh INCOMPATIBILITY (D Antigen; Previously Sensitized Mother; SEVERE HYDROPS FETALIS; Anti-D Prophylaxis RhoGAM 28W + Within 72H Delivery); G6PD DEFICIENCY (X-Linked; Mediterranean African; Triggered Oxidant Stress Naphthalene Henna; Severe Jaundice Common Southeast Asian Mediterranean); CRIGGLER-NAJJAR (Very Rare; UGT1A1 Mutation; Severe; Exchange Transfusion Phototherapy); BREAST MILK JAUNDICE (Week 2-3; Factor Inhibits Glucuronidation; Benign; Continue Breastfeeding; Resolves 2-3W; Distinguished Breastfeeding Failure Jaundice Which Is Inadequate Intake Early); AAP 2022 GUIDELINES: UNIVERSAL SCREENING TSB Before Discharge; BHUTANI NOMOGRAM Hour-Specific (Plot TSB vs Age Hours; High Intermediate Low Zone; High = Action Required); TCBILI Transcutaneous Bilirubin Screening (Noninvasive; Confirm With TSB If Over Threshold or Near Treatment Level; Unreliable After Phototherapy) | `text` |  |  |  |
| Neonatal Jaundice — Evaluation and Phototherapy | Risk Stratification and Treatment | `nbj_f2` | Phototherapy Thresholds and Exchange Transfusion | `select` |  |  |  |

### Neonatal Jaundice (Phototherapy) — `neonatology_neonatal_jaundice_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Neonatal Jaundice — Bhutani Nomogram, Phototherapy, and Exchange | Assessment and Risk Stratification | `nomogram` | Bhutani Nomogram and Hour-Specific Assessment (serum bilirubin plotted against hour of life (6h-120h); low risk (<40th percentile), low-intermediate (40-75th), high-intermediate (75-95th), high risk (>95th percentile); measurement: TcB (transcutaneous bilirubin) screening then confirm with TSB; every-4-6h measurement for rising bilirubin; AAP 2022 guideline: UNIVERSAL bilirubin screening at 24-48h; phototherapy threshold tables based on age in hours + neurotoxicity risk factors; <=35 weeks gestational age: use gestational-age-specific tables; RISK FACTORS for neurotoxicity: isoimmune hemolytic disease (DAT+), G6PD deficiency, asphyxia, significant lethargy, temperature instability, sepsis, albumin <3 g/dL) | `text` |  |  |  |
| Neonatal Jaundice — Bhutani Nomogram, Phototherapy, and Exchange | Assessment and Risk Stratification | `cause_workup` | Etiology Workup | `select` |  |  |  |
| Neonatal Jaundice — Bhutani Nomogram, Phototherapy, and Exchange | Phototherapy and Exchange Transfusion | `phototherapy` | Phototherapy Protocol (AAP 2022; intensive phototherapy: irradiance >=30 microW/cm2/nm at 430-490 nm (blue-green spectrum); LED > fluorescent; BILI blanket (fiberoptic) for supplemental; maximize skin exposure: undress except diaper; eye protection; continuous monitoring; repeat TSB in 4-6h; discontinue when TSB 2-3 mg/dL below treatment threshold for age; rebound: recheck TSB 24h after discontinuation (especially if <38 weeks or hemolytic); AAP 2022 table: lower thresholds than 2004 guidelines for >=35 weeks; failure of phototherapy: TSB still rising or at exchange threshold despite 4-6h intense phototherapy; IVIG for isoimmune hemolytic disease: 0.5-1 g/kg (reduces need for exchange 2.7% to 1.5%)) | `text` |  |  |  |
| Neonatal Jaundice — Bhutani Nomogram, Phototherapy, and Exchange | Phototherapy and Exchange Transfusion | `exchange_transfusion` | Exchange Transfusion | `select` |  |  |  |

### Neonatal RDS — `neonatology_rds_surfactant_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Neonatal RDS — Surfactant Therapy and Ventilation | Pathophysiology, Prevention, and Treatment | `rds_f1` | Neonatal RDS Evaluation: PATHOPHYSIOLOGY (SURFACTANT DEFICIENCY Primary; Type II Pneumocytes Produce Surfactant; Mature By 34-36W Gestation; Surfactant Reduces Alveolar Surface Tension Prevents Collapse; IMMATURE LUNGS = Less Surfactant = Alveolar Atelectasis = V/Q Mismatch = Hypoxemia Hypercarbia = Increased Work Breathing; PROGRESSIVE RESPIRATORY FAILURE If Not Treated; EPIDEMIOLOGY: GA 28W = 80 pct RDS; GA 32W = 40 pct; GA 34W = 15 pct; GA 36W = 5 pct; Male > Female; Twin Second Born; Caesarean Without Labor; Maternal Diabetes; White Race; PRESENTATION: Onset Shortly After Birth Typically Worsens 24-48H; SIGNS: Tachypnea Over 60/Min; Grunting Expiratory Auto-PEEP; Nasal Flaring; Subcostal Intercostal Retractions; Cyanosis; CXR CLASSIC FINDINGS: Ground-Glass Opacification Diffuse; Air Bronchograms; Low Lung Volumes Atelectasis; Bell-Shaped Chest; SILVERMAN SCORE Severity (Upper Chest Retraction; Lower Chest Retraction; Xiphoid Retraction; Nares Dilation; Expiratory Grunt; 0-2 Mild; 3-6 Moderate; 7-10 Severe); DIFFERENTIAL (Transient Tachypnea Newborn TTN = Wet Lung Delayed Fluid Clearance; Self-Limited 24-48H; Prominent Perihilar Streaking CXR; Milder Course; PNEUMONIA Congenital GBS Beta-Hemolytic Strep Early Sepsis; Blood Culture Ampicillin Gentamicin; PNEUMOTHORAX Spontaneous Or Iatrogenic; DIAPHRAGMATIC HERNIA CDH Absent Bowel CXR; CHOANAL ATRESIA Bilateral Cannot Pass NG Tube); LABS: ABG Hypoxemia Hypercarbia Acidosis; CBC Blood Culture Sepsis Rule Out; Surfactant/Albumin Ratio Mature Over 55 mg/g; ECHO Echocardiogram Rule Congenital Heart PDA | `text` |  |  |  |
| Neonatal RDS — Surfactant Therapy and Ventilation | Pathophysiology, Prevention, and Treatment | `rds_f2` | Surfactant Therapy, CPAP, Ventilation, and BPD | `select` |  |  |  |

### Neonatal Sepsis — `nicu_sepsis_evaluation_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Neonatal Sepsis Evaluation and Management | Sepsis Risk Factors (EOS vs. LOS) | `sepsis_onset` | Onset Type | `select` |  |  |  |
| Neonatal Sepsis Evaluation and Management | Sepsis Risk Factors (EOS vs. LOS) | `eos_risk_factors` | EOS Risk Factors (GBS+, ROM >18h, chorioamnionitis, maternal fever >38 deg C, GBS prophylaxis administered) | `textarea` |  |  |  |
| Neonatal Sepsis Evaluation and Management | Sepsis Risk Factors (EOS vs. LOS) | `neonatal_sepsis_calculator` | Kaiser EOS Calculator Score (online tool; uses GA, ROM duration, maternal GBS status, intrapartum antibiotics, clinical illness — categorizes clinical management) | `text` |  |  |  |
| Neonatal Sepsis Evaluation and Management | Clinical Presentation | `clinical_signs` | Clinical Signs (temperature instability, apnea/bradycardia, tachycardia, hypotension, poor perfusion, hypoglycemia, lethargy, seizure) | `textarea` |  |  |  |
| Neonatal Sepsis Evaluation and Management | Clinical Presentation | `clinical_score` | Clinical Appearance | `select` |  |  |  |
| Neonatal Sepsis Evaluation and Management | Workup and Treatment | `blood_culture` | Blood culture drawn (minimum 1 mL; BEFORE antibiotics; note: LP if clinically stable and full workup) | `checkbox` |  |  |  |
| Neonatal Sepsis Evaluation and Management | Workup and Treatment | `empiric_antibiotics` | Empiric Antibiotic Regimen | `select` |  |  |  |
| Neonatal Sepsis Evaluation and Management | Workup and Treatment | `antibiotic_duration` | Planned Antibiotic Duration | `select` |  |  |  |

### Neonatal Sepsis (EOS/LOS) — `neonatology_neonatal_sepsis_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Neonatal Sepsis — EOS Calculator, Antibiotics, and CSF | Early Onset Sepsis Risk Assessment | `eos_calc` | Early Onset Sepsis (EOS) Risk Stratification (EOS: <72 hours of life; primarily GBS + E. coli (preterm); SAFEEST CALCULATOR (Kaiser Neonatal EOS Calculator): INPUTS: gestational age; highest maternal intrapartum temperature; GBS status (positive, negative, unknown); ROM duration; intrapartum antibiotics (GBS-adequate: penicillin/ampicillin >=4 hours before delivery); OUTPUT: probability of sepsis per 1000 live births; CLINICAL CONDITION OVERLAY: well-appearing: observe; equivocal: observe with labs; clinical illness: empiric antibiotics; THRESHOLD FOR EMPIRIC TX: AAP 2022: illness status drives decision more than calculator probability; GBS PROPHYLAXIS: penicillin G (preferred) or ampicillin; IF PENICILLIN ALLERGIC: low-risk allergy: cefazolin; high-risk allergy (anaphylaxis): clindamycin (if GBS susceptible, tested at 35-37 weeks) or vancomycin; CHORIOAMNIONITIS/IAI: broadens antibiotic recommendation for neonate; RISK FACTORS: GBS+ untreated; ROM >18h; prematurity <37 weeks; intrapartum temperature >100.4F; FULL TERM WELL-APPEARING with NO risk factors: no labs or antibiotics required (ACOG 2020) | `text` |  |  |  |
| Neonatal Sepsis — EOS Calculator, Antibiotics, and CSF | Early Onset Sepsis Risk Assessment | `los` | Late Onset Sepsis (LOS) and Risk Factors | `select` |  |  |  |
| Neonatal Sepsis — EOS Calculator, Antibiotics, and CSF | Empiric Antibiotics and CSF Interpretation | `antibiotics` | Empiric Antibiotic Regimens (EOS EMPIRIC: ampicillin 50 mg/kg Q12h (q8h if >7 days GA-based) + gentamicin 4 mg/kg Q24-36h (extended interval dosing; once daily dosing; monitor troughs); COVERS: GBS, E. coli, Listeria; GBS is universally ampicillin-susceptible; TRANSITION: narrow if blood culture + within 36-48h; LOS EMPIRIC IN NICU: vancomycin + gentamicin (or cefotaxime); VANCOMYCIN: covers MRSA + CoNS (most CoNS resist oxacillin); TARGET AUC 400-600 (AUC-guided dosing; ASHP 2020 guidance); avoid trough-only monitoring; gentamicin covers gram negatives; CANDIDA IN NICU: amphotericin B deoxycholate (0.5-1 mg/kg QD) OR micafungin (4-10 mg/kg QD; preferred for Candida); fluconazole prophylaxis in VLBW (<1500g) in high-incidence units; DURATION: EOS blood culture negative + well-appearing: 36-48h then discontinue; EOS GBS bacteremia without meningitis: 10 days; EOS GBS meningitis: 14-21 days; LOS CoNS line-associated: 7-10 days (remove line); LOS MRSA bacteremia: 14 days from first negative culture) | `text` |  |  |  |
| Neonatal Sepsis — EOS Calculator, Antibiotics, and CSF | Empiric Antibiotics and CSF Interpretation | `csf` | CSF Interpretation in Neonates | `select` |  |  |  |

## Hepatology

### Acute Liver Failure — `hepatology_acute_liver_failure_cf`

Screen: 1 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Liver Failure (ALF) Management | ALF Diagnosis | `alf_criteria` | ALF criteria met: INR >=1.5 + hepatic encephalopathy in patient WITHOUT pre-existing liver disease within 26 weeks of jaundice onset | `checkbox` |  |  |  |
| Acute Liver Failure (ALF) Management | ALF Diagnosis | `etiology` | Etiology | `select` |  |  |  |
| Acute Liver Failure (ALF) Management | ALF Diagnosis | `kings_college_criteria` | Kings College Criteria (poor prognosis without transplant) | `select` |  |  |  |
| Acute Liver Failure (ALF) Management | ICU Management | `nac` | N-acetylcysteine (NAC) initiated (APAP overdose: standard 21h IV protocol; non-APAP ALF: IV NAC improves transplant-free survival) | `checkbox` |  |  |  |
| Acute Liver Failure (ALF) Management | ICU Management | `cerebral_edema` | Cerebral Edema Management (Grade III-IV HE: ICP monitoring consideration; mannitol 20% 1g/kg; head-of-bed 30 degrees; Na target 145-155; hypothermia if refractory; lactulose avoided in ALF) | `textarea` |  |  |  |
| Acute Liver Failure (ALF) Management | ICU Management | `coagulopathy` | Coagulopathy Management (avoid FFP unless invasive procedure — worsens ICP/volume; Vitamin K 10 mg IV x 3 days; VHA-guided transfusion if bleeding) | `text` |  |  |  |
| Acute Liver Failure (ALF) Management | ICU Management | `renal_support` | Continuous renal replacement therapy (CRRT) if HRS-AKI or hyperammonemia not clearing — avoid large fluid shifts | `checkbox` |  |  |  |
| Acute Liver Failure (ALF) Management | ICU Management | `transplant_contact` | Liver transplant center contacted (KCC criteria or rapidly worsening — transfer if meets Status 1A criteria; do not delay) | `checkbox` |  |  |  |

### Cirrhosis Complications — `hepatology_cirrhosis_complications_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cirrhosis — Complications and Management | Ascites, SBP, and Encephalopathy | `cirrh_f1` | Cirrhosis Complications: MELD SCORE (Model End-Stage Liver Disease; 6-40; Under 15 Surgery Low Risk; 15-20 Moderate; Over 25 High Perioperative Mortality; MELD-Na Score; MELD 3.0 Newer; Transplant Listing Over 15 UNOS; MELDNa Preferred If Na Under 125); ASCITES: SAAG SERUM-ASCITES ALBUMIN GRADIENT (Over 1.1 = Portal Hypertension Etiology; Under 1.1 = TB Malignancy Pancreatitis Cardiac If BNP High); SODIUM RESTRICT Under 2g QD; SPIRONOLACTONE 100 mg QD + Furosemide 40 mg QD (Titrate 100:40 Ratio; Max 400/160 mg; Monitor Creatinine K+; Spiro Gynecomastia); PARACENTESIS THERAPEUTIC (Large Volume Paracentesis LVP; Refractory; Drain All; Albumin 6-8g Per Liter Over 5L Prevent PICD Post-Infusion Circulatory Dysfunction); REFRACTORY ASCITES = TIPS or Transplant; SPONTANEOUS BACTERIAL PERITONITIS (SBP): PMN Over 250 Cells Ascitic Fluid (Treat Even Without Culture; E. Coli Klebsiella Pneumo Most Common); Treat: Cefotaxime 2g IV Q8H x 5D (Standard); Ceftriaxone 1g IV QD Equivalent; Albumin 1.5g/kg Day 1 + 1g/kg Day 3 (Prevent HRS; SORT Trial); PROPHYLAXIS: Norfloxacin 400 mg QD (Prior SBP; Protein Under 1.5 g/dL; Child Pugh C; Creatinine Over 1.2; TMP-SMX DS Alternative; Rifaximin Secondary); HEPATIC ENCEPHALOPATHY (HE): PRECIPITANTS: Infection; GI Bleed; Constipation; Sedatives; Renal Failure; Hyponatremia; TREAT PRECIPITANT; Lactulose 30 mL BID-QID (2-3 Stools/D; HE Episodes Reduce; Adjust Dose); Rifaximin 550 mg BID (Secondary Prophylaxis After 1 Episode; Superior Lactulose Recurrence) | `text` |  |  |  |
| Cirrhosis — Complications and Management | Ascites, SBP, and Encephalopathy | `cirrh_f2` | Varices, HRS, HCC, and Transplant | `select` |  |  |  |

### Cirrhosis Management — `hepatology_cirrhosis_management_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cirrhosis Complications Management | Cirrhosis Severity Assessment | `child_pugh` | Child-Pugh Score (A/B/C) | `select` |  |  |  |
| Cirrhosis Complications Management | Cirrhosis Severity Assessment | `meld_score` | MELD-Na Score (organ allocation priority; MELD-Na >15 = transplant evaluation; >25 = high waitlist priority) | `number` |  |  |  |
| Cirrhosis Complications Management | Cirrhosis Severity Assessment | `etiology` | Cirrhosis Etiology | `select` |  |  |  |
| Cirrhosis Complications Management | Complication Management | `ascites` | Ascites Management | `select` |  |  |  |
| Cirrhosis Complications Management | Complication Management | `varices` | Esophageal Variceal Status | `select` |  |  |  |
| Cirrhosis Complications Management | Complication Management | `hepatic_encephalopathy` | Hepatic Encephalopathy (West Haven Grade) | `select` |  |  |  |
| Cirrhosis Complications Management | Complication Management | `he_treatment` | HE Treatment (lactulose 30-60 mL TID: 2-3 soft stools per day; rifaximin 550 mg BID secondary prophylaxis; identify precipitant: GI bleed, infection, constipation, renal failure) | `text` |  |  |  |
| Cirrhosis Complications Management | HCC Surveillance | `surveillance_on_schedule` | HCC surveillance on schedule (liver ultrasound + AFP q6 months — all cirrhosis patients regardless of etiology) | `checkbox` |  |  |  |
| Cirrhosis Complications Management | HCC Surveillance | `hcc_detected` | HCC detected — BCLC staging, multidisciplinary tumor board, curative vs. palliative options (ablation, TACE, TARE, transplant, sorafenib/lenvatinib) | `checkbox` |  |  |  |

### Hepatitis B — `hepatology_viral_hepatitis_b_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Hepatitis B — Serologies and Treatment | Serologic Interpretation and Treatment | `hbv_f1` | HBV Serology and Natural History: SEROLOGY INTERPRETATION: HBsAg POSITIVE = Currently Infected (Acute or Chronic); Anti-HBs POSITIVE = Immune (Vaccination or Prior Infection); Anti-HBc POSITIVE = Exposed (Core Antibody Never Goes Away; IgM = Acute; IgG = Old Exposure); HBeAg POSITIVE = High Replication E Antigen; Anti-HBe = Seroconversion Lower Replication; HBV DNA PCR = Quantitative Viral Load (Definitive Replication); PHASES OF CHRONIC INFECTION: IMMUNE TOLERANT (HBeAg+; High DNA; Normal ALT; Young; No Treatment; Asia Perinatal); IMMUNE ACTIVE HBeAg+ HEPATITIS (High DNA Over 20K; Elevated ALT; Inflammation Fibrosis; TREAT); INACTIVE CARRIER (Anti-HBe+; DNA Under 2000; Normal ALT; Low Risk; Monitor Q6-12M); IMMUNE ACTIVE HBeAg- HEPATITIS (Anti-HBe+; DNA Over 2000; Elevated ALT; Treat; HBV Precore Mutant); HBsAg CLEARANCE (Functional Cure; Seroconvert Anti-HBs; Under 1 pct Per Year; Near Cure State); OCCULT HBV (HBsAg Neg; DNA Low Positive; Anti-HBc+; Reactivation Risk Immunosuppression); REACTIVATION RISK (Rituximab Anti-CD20 Highest Risk; Steroids 40 mg Over 4W; TNF-i; Stem Cell; All Anti-CD20 = HBV Prophylaxis Regardless); SCREENING: USPSTF Grade B (All Adults Screen Once; Pregnant Women Each Pregnancy; Vaccinate Non-Immune); HBV PREVALENCE: Asia Sub-Saharan Africa (8-12 pct); USA 0.3 pct; DELTA VIRUS (HDV Superinfection CHB; Worse Outcome; Prevent With HBV Vaccine; Bulevirtide FDA 2020 Europe) | `text` |  |  |  |
| Chronic Hepatitis B — Serologies and Treatment | Serologic Interpretation and Treatment | `hbv_f2` | Antiviral Therapy and HCC Surveillance | `select` |  |  |  |

### Hepatitis B (Antiviral + HCC) — `hepatology_hepatitis_b_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hepatitis B — Phase Classification, Treatment, and HCC Surveillance | CHB Phase Classification | `hbv_phases` | Chronic HBV Phase (AASLD/EASL 2023) | `select` |  |  |  |
| Hepatitis B — Phase Classification, Treatment, and HCC Surveillance | CHB Phase Classification | `screening_treatment` | HBsAg Screening and Universal Vaccination (USPSTF 2020: screen all adults 18-79 years for HBV; CDC 2023: one-time HBsAg testing for all adults; hepatitis B vaccine: 3-dose series (0, 1, 6 months) or 2-dose Heplisav-B (0, 1 month); Heplisav-B: higher seroprotection rate 90% vs. Engerix-B 71% in adults >60; universal vaccination for all infants (birth, 2, 6 months); HBV-HIV co-infection: use TDF-containing ART (TDF + FTC = Truvada); entecavir: less preferred in HIV (low-level activity against HIV); HBV reactivation: screen all patients starting immunosuppression (rituximab, TNF inhibitors, steroids); prophylaxis with ETV or TAF if HBsAg+ or anti-HBc+) | `text` |  |  |  |
| Hepatitis B — Phase Classification, Treatment, and HCC Surveillance | HCC Surveillance and Antiviral Goals | `hcc_surveillance` | HCC Surveillance and Treatment Goals | `select` |  |  |  |
| Hepatitis B — Phase Classification, Treatment, and HCC Surveillance | HCC Surveillance and Antiviral Goals | `antiviral_goals` | Antiviral Treatment Goals (primary: suppress HBV DNA to undetectable; secondary: normalize ALT; prevent fibrosis progression; reduce HCC risk (CHB antivirals: 50-80% HCC risk reduction in cirrhosis); HBsAg loss/seroconversion: most durable endpoint; rare on oral antivirals; PEG-IFN: 3-7% HBsAg loss at 48 weeks; novel agents in trials: TLR7 agonists, capsid assembly modulators (CAMs), siRNA (JNJ-3989; ARC-520), antisense oligonucleotides targeting HBsAg; functional cure HBsAg loss target for novel combinations; resistance: ETV resistance in LAM-experienced patients; TDF/TAF: no resistance reported; barriers to resistance monitoring: viral load + genotyping if VL blips) | `text` |  |  |  |

### Hepatitis B Management — `hepatology_hepatitis_b_management_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hepatitis B Virus (HBV) Management | Serology and Phase Classification | `hbv_surface_ag` | HBsAg (Hepatitis B Surface Antigen) | `select` |  |  |  |
| Hepatitis B Virus (HBV) Management | Serology and Phase Classification | `hbv_eag` | HBeAg Status | `select` |  |  |  |
| Hepatitis B Virus (HBV) Management | Serology and Phase Classification | `hbv_dna` | HBV DNA (IU/mL and log10) — viremia level drives treatment decisions; undetectable on therapy = virologic response | `text` |  |  |  |
| Hepatitis B Virus (HBV) Management | Serology and Phase Classification | `hbv_phase` | HBV Infection Phase (EASL/AASLD Classification) | `select` |  |  |  |
| Hepatitis B Virus (HBV) Management | Serology and Phase Classification | `hbv_genotype` | HBV Genotype (A-J) — impacts treatment response; genotype A/B respond better to PEG-IFN; clinical significance mainly when considering interferon | `text` |  |  |  |
| Hepatitis B Virus (HBV) Management | Laboratory Evaluation | `hbv_alt` | ALT and AST (U/L) — upper limit of normal (ULN) definition: AASLD 2023: ALT ULN 35 U/L males, 25 U/L females; most labs use 40-55 U/L — document local ULN | `text` |  |  |  |
| Hepatitis B Virus (HBV) Management | Laboratory Evaluation | `hbv_fibrosis` | Fibrosis Assessment | `select` |  |  |  |
| Hepatitis B Virus (HBV) Management | Laboratory Evaluation | `hbv_cbc_plt` | Platelet Count and INR — thrombocytopenia or INR prolongation suggests cirrhosis | `text` |  |  |  |
| Hepatitis B Virus (HBV) Management | Laboratory Evaluation | `hbv_hiv_cotest` | HIV Co-infection | `select` |  |  |  |
| Hepatitis B Virus (HBV) Management | Antiviral Treatment and Surveillance | `hbv_treatment_indication` | Treatment Indication | `select` |  |  |  |
| Hepatitis B Virus (HBV) Management | Antiviral Treatment and Surveillance | `hbv_antiviral` | Antiviral Agent | `select` |  |  |  |
| Hepatitis B Virus (HBV) Management | Antiviral Treatment and Surveillance | `hbv_treatment_response` | Treatment Response | `select` |  |  |  |
| Hepatitis B Virus (HBV) Management | Antiviral Treatment and Surveillance | `hbv_hcc_surveillance` | HCC Surveillance Protocol | `select` |  |  |  |
| Hepatitis B Virus (HBV) Management | Antiviral Treatment and Surveillance | `hbv_vaccination_household` | Household Contact Vaccination | `select` |  |  |  |
| Hepatitis B Virus (HBV) Management | Antiviral Treatment and Surveillance | `hbv_notes` | HBV Management Notes and Specialist Coordination | `textarea` |  |  |  |

### Hepatitis C — `hepatology_viral_hepatitis_c_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Hepatitis C — DAA Treatment | Diagnosis and Pangenotypic DAA Regimens | `hcv_f1` | HCV Evaluation: DIAGNOSIS: ELISA Anti-HCV Screen (Reactive = Confirm); HCV RNA PCR CONFIRM (Distinguish Resolved vs Active; 4-6W After Exposure NAAT Window); HCV RNA QUANTITATIVE (Baseline Viral Load; Monitor Treatment); HCV GENOTYPE (1-6; Genotype 1 Most Common USA 70 pct; Genotype 1a Higher Resistance Barrier NS5A; Genotype 3 Fatty Liver; Genotype 2 Pangenotypic Easier; PANGENOTYPIC DAAs Now Available GT1-6); AASLD IDSA HCV GUIDANCE: TEST TREAT CURE PARADIGM; SCREENING USPSTF GRADE B: All Adults 18-79 Once; Repeat Annually PWID; Annual Transgender Women; Pregnant Each Pregnancy; FIBROSIS STAGING: FIB-4 INDEX (Age x AST / PLT x sqrt-ALT; Under 1.30 F0-F1 Low Fibrosis; Over 3.25 Advanced F3-F4; 1.30-3.25 Indeterminate = Elastography FibroScan kPa or APRI); LIVER BIOPSY Not Required Treatment Decision Modern Era; DECOMPENSATED CIRRHOSIS (Jaundice Ascites Varices Encephalopathy = HIGH-RISK REGIMENS; Avoid NS3/4A PI; Use SOF-VEL +/- RBV; Refer Transplant); CONTRAINDICATIONS: Pregnancy (Ribavirin Teratogenic B Category; Sofosbuvir Ledipasvir Safe But Not Studied; Defer Until After If Possible; Emergency Individualize); eGFR Under 30 (Sofosbuvir Renal Dose Accumulation; MAVYRET GLE/PIB Preferred) | `text` |  |  |  |
| Chronic Hepatitis C — DAA Treatment | Diagnosis and Pangenotypic DAA Regimens | `hcv_f2` | DAA Regimen Selection and Post-SVR Care | `select` |  |  |  |

### Liver Transplant Eval — `hepatology_liver_transplant_eval_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Liver Transplant Evaluation | Transplant Indication and Eligibility | `indication` | Primary Indication | `select` |  |  |  |
| Liver Transplant Evaluation | Transplant Indication and Eligibility | `contraindications` | Absolute Contraindications Evaluated (uncontrolled extrahepatic malignancy, uncontrolled infection/sepsis, advanced cardiopulmonary disease, active SUD, non-adherence pattern) | `textarea` |  |  |  |
| Liver Transplant Evaluation | Pre-Transplant Evaluation Checklist | `cardiac_eval` | Cardiac evaluation (DOBUTAMINE STRESS ECHO or coronary CTA; portopulmonary HTN screen: ECHO PA pressure; hepatopulmonary syndrome: shunt fraction) | `checkbox` |  |  |  |
| Liver Transplant Evaluation | Pre-Transplant Evaluation Checklist | `pulmonary_eval` | Pulmonary evaluation (PFTs; hepatopulmonary syndrome: PaO2 <60 on RA with + shunt fraction = MELD exception points) | `checkbox` |  |  |  |
| Liver Transplant Evaluation | Pre-Transplant Evaluation Checklist | `renal_eval` | Renal evaluation (GFR; HRS vs. CKD — consider SLKT if CKD stage 4+ or on dialysis >8 weeks) | `checkbox` |  |  |  |
| Liver Transplant Evaluation | Pre-Transplant Evaluation Checklist | `social_eval` | Psychosocial evaluation (compliance history, social support, AUD evaluation, financial resources, understanding of transplant commitment) | `checkbox` |  |  |  |
| Liver Transplant Evaluation | Pre-Transplant Evaluation Checklist | `infectious_screening` | Infectious screening (HIV, HBV, HCV, CMV, EBV, VZV, TB quantiferon; vaccinations updated) | `checkbox` |  |  |  |
| Liver Transplant Evaluation | Pre-Transplant Evaluation Checklist | `malignancy_screening` | Cancer screening (colonoscopy, pap/mammogram, PSA, chest CT — exclude occult malignancy) | `checkbox` |  |  |  |
| Liver Transplant Evaluation | UNOS Listing Details | `listing_status` | UNOS Listing Status | `select` |  |  |  |
| Liver Transplant Evaluation | UNOS Listing Details | `blood_type` | Blood Type (ABO compatibility and cross-match for donor matching) | `text` |  |  |  |
| Liver Transplant Evaluation | UNOS Listing Details | `weight_height` | Weight and Height (graft size matching — adult vs. split/living donor) | `text` |  |  |  |

### MASLD/NASH — `hepatology_masld_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| MASLD — Metabolic Dysfunction-Associated Steatotic Liver Disease | Staging and Management | `masld_f1` | MASLD Diagnosis (2023 Nomenclature Replaces NAFLD): CRITERIA: Hepatic Steatosis Over 5 pct + At Least 1 Metabolic Risk (BMI Over 25; DM2; Dyslipidemia; Hypertension; Waist Circumference Over 94M 80F); WORKUP: LFTs (AST/ALT Often Under 3x; May Be Normal); Ultrasound Screening (Low Cost; Moderate Sensitivity); FibroScan CAP (Controlled Attenuation Parameter Steatosis; kPa Fibrosis); FIB-4 SCORE (Age x AST / PLT x sqrt ALT; Under 1.3 Low Risk F0-F1; Over 2.67 High Risk F3-F4; Intermediate 1.3-2.67 Consider MRE or Liver Biopsy); MR ELASTOGRAPHY Gold Standard Non-Invasive Fibrosis; LIVER BIOPSY: Staging NAS Score (Steatosis+Lobular Inflammation+Ballooning); F0-F4 Fibrosis; MASH = NASH = Steatohepatitis; COMPLICATIONS: Cirrhosis (F4); Portal HTN; Varices; HCC Risk Even Pre-Cirrhosis MASH | `text` |  |  |  |
| MASLD — Metabolic Dysfunction-Associated Steatotic Liver Disease | Staging and Management | `masld_f2` | MASLD Pharmacotherapy | `select` |  |  |  |

### Metabolic Liver — `hepatology_metabolic_liver_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Metabolic Liver Disease — Wilson Disease and Hemochromatosis | Wilson Disease, Hemochromatosis, and Other Inherited | `met_f1` | Wilson Disease and Hemochromatosis: WILSON DISEASE (ATP7B Mutation Autosomal Recessive; Copper Accumulation Liver Brain Eye; Prevalence 1/30K; PRESENT 5-35Y; LIVER Hepatitis Cirrhosis Fulminant ALF; NEUROPSYCHIATRIC Dysarthria Tremor Ataxia Choreoathetosis Psychiatric; KAYSER-FLEISCHER KF RINGS (Copper Descemet Membrane; Slit-Lamp REQUIRED; Absent Hepatic Only KF; Present 95 pct Neurologic; SUNFLOWER CATARACT; LABS: CERULOPLASMIN UNDER 20 mg/dL Most Under 10; Normal Does Not Exclude; 24H URINE COPPER Over 100 mcg/Day Diagnostic; Elevated Over 200 Penicillamine Challenge; LIVER BIOPSY Copper Quantification Gold Standard Over 250 mcg/g; ALT Normal Or Elevated; Hemolytic Anemia Non-Immune; COMBS Negative; ALP LOW In ALF Wilson Unusual; BRAIN MRI T2 Putamen Thalamus; DIAGNOSIS: 2 Of 3 (KF Rings + Ceruloplasmin Under 20 + Urine Copper Over 100; Or Liver Biopsy Copper Over 250; Or GENETIC ATP7B MUTATION; SCORING SYSTEMS LEIPZIG SCORE; TREATMENT WILSON DISEASE: PENICILLAMINE D-Pen 500-1500 mg BID-TID Cu Chelation; NEUROLOGIC PARADOXICAL WORSENING 10-20 pct First 6M; Rash Nephrotic Syndrome Bone Marrow Suppression; TRIENTINE TRIEN 500-750 mg BID TID PREFERRED Less Toxic Than Penicillamine; ZINC 25-50 mg TID ELEMENTAL Blocks Intestinal Absorption Maintenance; TETRATHIOMOLYBDATE Experimental; ALF WILSON LIVER TRANSPLANT Urgent; MAINTAIN LIFELONG TREATMENT; HEREDITARY HEMOCHROMATOSIS HH (HFE Gene; C282Y Most Common Caucasian 1/300; Autosomal Recessive; Iron Overload Liver Heart Pancreas Joints Pituitary) | `text` |  |  |  |
| Metabolic Liver Disease — Wilson Disease and Hemochromatosis | Wilson Disease, Hemochromatosis, and Other Inherited | `met_f2` | Hemochromatosis Treatment and Other Metabolic Liver | `select` |  |  |  |

### NAFLD / MASLD — `hepatology_nafld_nash_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| NAFLD / MASLD / NASH Evaluation and Management | Diagnosis and Staging | `diagnosis_type` | Diagnosis Type | `select` |  |  |  |
| NAFLD / MASLD / NASH Evaluation and Management | Diagnosis and Staging | `fib4` | FIB-4 Score (age x AST) / (platelets x sqrt ALT); <1.30 = low risk F0-F1; >2.67 = high risk F3-F4) | `number` |  |  |  |
| NAFLD / MASLD / NASH Evaluation and Management | Diagnosis and Staging | `elastography` | Liver Elastography (FibroScan kPa; <8 = F0-F2; 8-13 = F3; >13 = F4 cirrhosis; CAP score for steatosis grade) | `text` |  |  |  |
| NAFLD / MASLD / NASH Evaluation and Management | Diagnosis and Staging | `biopsy_performed` | Liver biopsy performed (NAS score: steatosis + inflammation + ballooning; NASH = NAS >=5; evaluate for clinical trials) | `checkbox` |  |  |  |
| NAFLD / MASLD / NASH Evaluation and Management | Cardiometabolic Risk Factor Management | `weight_loss_goal` | Weight Loss Goal (5% = steatosis improvement; 7-10% = MASH improvement; >10% = fibrosis regression; lifestyle cornerstone) | `text` |  |  |  |
| NAFLD / MASLD / NASH Evaluation and Management | Cardiometabolic Risk Factor Management | `exercise` | Exercise Prescription (150-300 min/week moderate aerobic + resistance training; reduces liver fat independent of weight loss) | `text` |  |  |  |
| NAFLD / MASLD / NASH Evaluation and Management | Cardiometabolic Risk Factor Management | `diabetes_management` | Diabetes management optimized (GLP-1 RA preferred — semaglutide shows 59% NASH resolution in NASH-CKD trials; SGLT2i also beneficial) | `checkbox` |  |  |  |
| NAFLD / MASLD / NASH Evaluation and Management | Cardiometabolic Risk Factor Management | `lipids` | Dyslipidemia treated (statins safe in NAFLD/MASH even with elevated baseline AST/ALT; statin hepatotoxicity is rare) | `checkbox` |  |  |  |
| NAFLD / MASLD / NASH Evaluation and Management | Pharmacotherapy (MASH-Specific) | `approved_treatments` | FDA-Approved MASH Treatment | `select` |  |  |  |
| NAFLD / MASLD / NASH Evaluation and Management | Pharmacotherapy (MASH-Specific) | `pioglitazone` | Pioglitazone considered (off-label; improves MASH histology in patients with T2DM or prediabetes; watch for weight gain, fluid retention, fractures) | `checkbox` |  |  |  |
| NAFLD / MASLD / NASH Evaluation and Management | Pharmacotherapy (MASH-Specific) | `vitamin_e` | Vitamin E 800 IU/day (off-label; non-diabetic MASH; PIVENS trial; avoid in men >50 with prostate cancer risk) | `checkbox` |  |  |  |

### Portal Hypertension (Varices/SBP) — `hepatology_portal_hypertension_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Portal HTN — Variceal Bleeding, TIPS, SBP, HRS-AKI | Variceal Bleeding Management | `variceal_prevention` | Variceal Bleeding Prevention (PRIMARY PROPHYLAXIS: BAVENO VII 2022 guidelines; NON-SELECTIVE BETA-BLOCKERS (NSBBs): propranolol 20-40 mg BID (titrate to HR 55-60 or max dose tolerated); nadolol 20-40 mg QD; carvedilol 6.25 mg QD (preferred: alpha1-blocker effect reduces HVPG more than propranolol; CARVEDILOL-PREDESOL trial; START with carvedilol if no contraindications); RESPONSE: HVPG <12 mmHg or reduction >20% from baseline = adequate response; EGD SCREENING: all cirrhosis at diagnosis; if no varices + compensated: repeat EGD in 2-3 years; small varices: NSBB or surveillance; medium/large: NSBB or EVL (endoscopic variceal ligation); SECONDARY PROPHYLAXIS: EVL + NSBB combination (superior to either alone); ligation every 2-4 weeks until eradication; NSBB with bleeding history: propranolol or carvedilol ongoing; HVPG MONITORING: HVPG >=20 mmHg: high-risk for treatment failure; preemptive TIPS (within 72h of first variceal bleed) for HVPG >=20 + Child-Pugh B/C or Child B with active bleeding) | `text` |  |  |  |
| Portal HTN — Variceal Bleeding, TIPS, SBP, HRS-AKI | Variceal Bleeding Management | `acute_bleed` | Acute Variceal Hemorrhage Protocol | `select` |  |  |  |
| Portal HTN — Variceal Bleeding, TIPS, SBP, HRS-AKI | SBP Prophylaxis and HRS-AKI | `sbp` | SBP Diagnosis, Treatment, and Prophylaxis (SPONTANEOUS BACTERIAL PERITONITIS (SBP): infection of ascitic fluid without surgically correctable source; DIAGNOSIS: ascitic PMN >=250 cells/mm3 (neutrophil count in diagnostic paracentesis); DO NOT wait for culture; TREATMENT: CEFOTAXIME 2g IV Q8h x5 days (or ceftriaxone); IV ALBUMIN 1.5 g/kg at diagnosis + 1 g/kg on day 3 (SORT trial: reduces HRS + mortality); albumin reduces HRS-AKI risk in SBP; SECONDARY PROPHYLAXIS: norfloxacin 400 mg QD long-term (indefinite); after first SBP episode; ciprofloxacin 500 mg QD alternative; PRIMARY PROPHYLAXIS: (1) ascitic total protein <1.5 g/dL + Child-Pugh >=9 or bilirubin >=3; (2) GI bleeding (ceftriaxone 1g QD x7 days); norfloxacin 400 mg BID x7 days for bleed if no IV access; SBP VARIANTS: culture-negative neutrocytic ascites (CNNA): treat like SBP; bacterascites: PMN <250 + positive culture; treat if symptomatic; RIFAXIMIN: reduces hepatic encephalopathy episodes; unclear benefit for SBP primary prophylaxis (limited data) | `text` |  |  |  |
| Portal HTN — Variceal Bleeding, TIPS, SBP, HRS-AKI | SBP Prophylaxis and HRS-AKI | `hrs` | HRS-AKI Diagnosis and Terlipressin | `select` |  |  |  |

### Viral Hepatitis — `hepatology_viral_hepatitis_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Viral Hepatitis Management | HBV Assessment | `hbsag` | HBsAg Status | `select` |  |  |  |
| Viral Hepatitis Management | HBV Assessment | `hbv_phase` | HBV Phase | `select` |  |  |  |
| Viral Hepatitis Management | HBV Assessment | `hbv_dna` | HBV DNA Level (IU/mL; treatment threshold: any detectable level with elevated ALT or advanced fibrosis) | `text` |  |  |  |
| Viral Hepatitis Management | HBV Assessment | `hbv_treatment` | HBV Treatment | `select` |  |  |  |
| Viral Hepatitis Management | HCV Assessment | `hcv_genotype` | HCV Genotype | `select` |  |  |  |
| Viral Hepatitis Management | HCV Assessment | `hcv_viral_load` | HCV RNA (IU/mL) — baseline; target undetectable (SVR12 = cure) | `text` |  |  |  |
| Viral Hepatitis Management | HCV Assessment | `fibrosis_stage` | Fibrosis Stage (FIB-4 or elastography) | `select` |  |  |  |
| Viral Hepatitis Management | HCV Assessment | `daa_regimen` | DAA Regimen | `select` |  |  |  |
| Viral Hepatitis Management | HCV Assessment | `svr_status` | SVR Status | `select` |  |  |  |

## Palliative Care

### GOC Family Meeting — `goals_of_care_family_meeting_cf`

Screen: 1 page(s) · 4 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Goals of Care / Family Meeting Documentation | Meeting Participants | `meeting_date` | Meeting Date | `date` |  |  |  |
| Goals of Care / Family Meeting Documentation | Meeting Participants | `participants` | Attendees (names and relationship to patient) | `textarea` |  |  |  |
| Goals of Care / Family Meeting Documentation | Meeting Participants | `patient_present` | Patient present and participated in discussion | `checkbox` |  |  |  |
| Goals of Care / Family Meeting Documentation | Meeting Participants | `interpreter_used` | Professional interpreter used | `checkbox` |  |  |  |
| Goals of Care / Family Meeting Documentation | Prognosis Communication | `prognosis_shared` | Prognosis discussed with patient/family | `checkbox` |  |  |  |
| Goals of Care / Family Meeting Documentation | Prognosis Communication | `understanding_assessed` | Family / Surrogate Understanding of Prognosis | `select` |  |  |  |
| Goals of Care / Family Meeting Documentation | Prognosis Communication | `ask_tell_ask` | Ask-Tell-Ask communication framework used | `checkbox` |  |  |  |
| Goals of Care / Family Meeting Documentation | Decision-Making and Advance Directives | `patient_capacity` | Patient Decision-Making Capacity | `select` |  |  |  |
| Goals of Care / Family Meeting Documentation | Decision-Making and Advance Directives | `surrogate_name` | Surrogate / Healthcare Proxy Name (if applicable) | `text` |  |  |  |
| Goals of Care / Family Meeting Documentation | Decision-Making and Advance Directives | `new_code_status` | Code Status After Meeting | `select` |  |  |  |
| Goals of Care / Family Meeting Documentation | Decision-Making and Advance Directives | `polst_signed` | POLST / MOLST signed during meeting | `checkbox` |  |  |  |
| Goals of Care / Family Meeting Documentation | Outcomes and Next Steps | `key_decisions` | Key Decisions Made / Plan Going Forward | `textarea` |  |  |  |
| Goals of Care / Family Meeting Documentation | Outcomes and Next Steps | `hospice_discussed` | Hospice discussed as an option | `checkbox` |  |  |  |
| Goals of Care / Family Meeting Documentation | Outcomes and Next Steps | `social_work_involved` | Social work / chaplaincy / bereavement support engaged | `checkbox` |  |  |  |
| Goals of Care / Family Meeting Documentation | Outcomes and Next Steps | `followup_meeting` | Follow-Up Meeting Scheduled (if needed) | `date` |  |  |  |

### Goals of Care — `palliative_care_goals_cf`

Screen: 1 page(s) · 3 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Goals of Care — Serious Illness Conversation | Prognosis and Disease Understanding | `disease_understanding` | Patient/Family Understanding of Illness | `select` |  |  |  |
| Goals of Care — Serious Illness Conversation | Prognosis and Disease Understanding | `prognosis_months` | Estimated Prognosis | `select` |  |  |  |
| Goals of Care — Serious Illness Conversation | Goals, Values, and Priorities | `primary_goal` | Primary Goal of Care | `select` |  |  |  |
| Goals of Care — Serious Illness Conversation | Goals, Values, and Priorities | `fears_worries` | Patient/Family Fears and Worries (loss of independence, being a burden, pain, dying alone, family conflict, financial concerns — address each explicitly; document verbatim if possible) | `textarea` |  |  |  |
| Goals of Care — Serious Illness Conversation | Goals, Values, and Priorities | `most_important` | Most Important to Patient (what matters most; what they are living for; specific goals — time, function, events; use REMAP framework: Reframe, Expect emotion, Map prognosis, Align with values, Plan treatment) | `text` |  |  |  |
| Goals of Care — Serious Illness Conversation | Advance Directives | `polst_status` | POLST / MOLST / DNR Status | `select` |  |  |  |
| Goals of Care — Serious Illness Conversation | Advance Directives | `hospice_referral` | Hospice Referral | `select` |  |  |  |

### Goals of Care / ACP — `palliative_care_goals_of_care_cf`

Screen: 1 page(s) · 3 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Goals of Care and Advance Care Planning | Prognosis Communication | `illness_trajectory` | Illness Trajectory Pattern | `select` |  |  |  |
| Goals of Care and Advance Care Planning | Prognosis Communication | `prognosis_tool` | Prognostic Tool Applied (Palliative Performance Scale PPS 0-100%; ECOG 0-5; PaP score for cancer; SUPPORT study criteria; "surprise question" — Would I be surprised if this patient died in 12 months?; ePrognosis online tool for older adults; document communicated to patient and family on this date) | `text` |  |  |  |
| Goals of Care and Advance Care Planning | Goals of Care Conversation | `goals_summary` | Goals of Care Summary (document using REMAP or SPIKES framework: Reframe for serious illness, Expect emotion, Map values, Align recommendations, Plan and document; patient stated goals verbatim; what matters most; quality vs. quantity of life; tolerance for burdensome treatment; home vs. hospital death; cultural and spiritual values; who to involve in decisions) | `textarea` |  |  |  |
| Goals of Care and Advance Care Planning | Goals of Care Conversation | `code_status` | Current Code Status | `select` |  |  |  |
| Goals of Care and Advance Care Planning | Advance Directives and Legal Documents | `ad_status` | Advance Directive Status | `select` |  |  |  |
| Goals of Care and Advance Care Planning | Advance Directives and Legal Documents | `hospice_referral` | Hospice Eligibility and Referral | `select` |  |  |  |

### Goals of Care Conversation — `palliative_goals_of_care_cf`

Screen: 1 page(s) · 4 section(s) · 20 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Goals of Care Conversation Documentation | Clinical Context | `goc_diagnosis` | Serious Illness Diagnosis | `text` |  |  |  |
| Goals of Care Conversation Documentation | Clinical Context | `goc_prognosis` | Clinician Prognosis Estimate | `select` |  |  |  |
| Goals of Care Conversation Documentation | Clinical Context | `goc_surprise_question` | Clinician Surprise Question | `select` |  |  |  |
| Goals of Care Conversation Documentation | Clinical Context | `goc_participants` | Participants in Conversation (patient, family members, HCP, social work, chaplain) | `textarea` |  |  |  |
| Goals of Care Conversation Documentation | Clinical Context | `goc_patient_awareness` | Patient Understanding of Illness | `select` |  |  |  |
| Goals of Care Conversation Documentation | Patient Values and Life Goals | `goc_what_matters` | What Matters Most to You? (patient words — quality of life, relationships, activities, independence) | `textarea` |  |  |  |
| Goals of Care Conversation Documentation | Patient Values and Life Goals | `goc_fears` | Fears or Worries About This Illness (pain, being a burden, dying alone, loss of dignity) | `textarea` |  |  |  |
| Goals of Care Conversation Documentation | Patient Values and Life Goals | `goc_functional_priorities` | Most Important Function to Maintain | `select` |  |  |  |
| Goals of Care Conversation Documentation | Patient Values and Life Goals | `goc_unfinished_business` | Unfinished Business or Goals (trips, events, reconciliations, milestones the patient wants to achieve) | `textarea` |  |  |  |
| Goals of Care Conversation Documentation | Code Status and Treatment Preferences | `goc_current_code` | Current Code Status | `select` |  |  |  |
| Goals of Care Conversation Documentation | Code Status and Treatment Preferences | `goc_code_change` | Code Status Change This Visit | `select` |  |  |  |
| Goals of Care Conversation Documentation | Code Status and Treatment Preferences | `goc_hospitalization` | Hospital Admission Preference for Future Deterioration | `select` |  |  |  |
| Goals of Care Conversation Documentation | Code Status and Treatment Preferences | `goc_icu` | Intensive Care / ICU Preference | `select` |  |  |  |
| Goals of Care Conversation Documentation | Code Status and Treatment Preferences | `goc_artificial_nutrition` | Artificial Nutrition and Hydration Preference | `select` |  |  |  |
| Goals of Care Conversation Documentation | Code Status and Treatment Preferences | `goc_place_of_death` | Preferred Place of Death | `select` |  |  |  |
| Goals of Care Conversation Documentation | Advance Care Planning Documents | `goc_advance_directive` | Advance Directive (Living Will) | `select` |  |  |  |
| Goals of Care Conversation Documentation | Advance Care Planning Documents | `goc_polst` | POLST / MOLST Form (Provider Orders for Life-Sustaining Treatment) | `select` |  |  |  |
| Goals of Care Conversation Documentation | Advance Care Planning Documents | `goc_healthcare_proxy` | Healthcare Proxy / Durable Power of Attorney for Healthcare (name and relationship) | `text` |  |  |  |
| Goals of Care Conversation Documentation | Advance Care Planning Documents | `goc_hospice_discussed` | Hospice Discussed | `select` |  |  |  |
| Goals of Care Conversation Documentation | Advance Care Planning Documents | `goc_notes` | Conversation Notes (patient or family quotes, emotional tone, family dynamics, follow-up needed) | `textarea` |  |  |  |

### Hospice Admission — `hospice_admission_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hospice Admission Assessment | Hospice Eligibility | `level_of_care` | Hospice Level of Care | `select` |  |  |  |
| Hospice Admission Assessment | Hospice Eligibility | `six_month_prognosis` | Prognosis Basis for ≤6 Month Certification | `select` |  |  |  |
| Hospice Admission Assessment | Comfort Medication Kit | `comfort_kit` | Home Comfort Medication Kit (standing order at bedside — typically: morphine 2-4 mg PO/SL q1h PRN pain/dyspnea; lorazepam 0.5-1 mg SL q2h PRN anxiety; glycopyrrolate 0.2 mg SL q4h PRN secretions; haloperidol 1-2 mg SL/SC q4h PRN delirium; scopolamine patch 1.5 mg q72h for secretions) | `textarea` |  |  |  |
| Hospice Admission Assessment | Comfort Medication Kit | `medications_discontinued` | Medications Discontinued at Hospice Enrollment (statin, antihypertensive, SSRI, anticoagulation if not comfort-directed; document rationale; communicate to pharmacy and caregiver) | `textarea` |  |  |  |

### Hospice Eligibility — `hospice_eligibility_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hospice Eligibility Documentation | Terminal Diagnosis and Prognosis | `primary_diagnosis` | Primary Life-Limiting Diagnosis (ICD-10 required for claim) | `text` |  |  |  |
| Hospice Eligibility Documentation | Terminal Diagnosis and Prognosis | `prognosis_basis` | Clinical Basis for ≤6 Month Prognosis | `select` |  |  |  |
| Hospice Eligibility Documentation | Terminal Diagnosis and Prognosis | `kps_score` | Karnofsky Performance Score (KPS, 0-100; ≤40% = very dependent) | `number` |  |  |  |
| Hospice Eligibility Documentation | Terminal Diagnosis and Prognosis | `pps_score` | Palliative Performance Scale (PPS, 0-100) | `number` |  |  |  |
| Hospice Eligibility Documentation | Functional and Nutritional Decline | `weight_loss_6mo` | Weight Loss in Last 6 Months (lbs) | `number` |  |  |  |
| Hospice Eligibility Documentation | Functional and Nutritional Decline | `albumin` | Serum Albumin (g/dL — <2.5 supports poor prognosis) | `number` |  |  |  |
| Hospice Eligibility Documentation | Functional and Nutritional Decline | `decline_trajectory` | Functional Decline Trajectory | `select` |  |  |  |
| Hospice Eligibility Documentation | Functional and Nutritional Decline | `oral_intake_decline` | Markedly decreased oral intake (unable to maintain adequate nutrition) | `checkbox` |  |  |  |
| Hospice Eligibility Documentation | Hospice Election | `patient_family_agrees` | Patient / family informed of hospice benefits and elected hospice | `checkbox` |  |  |  |
| Hospice Eligibility Documentation | Hospice Election | `curative_treatment_waived` | Curative / life-prolonging treatment waived for primary diagnosis (as required by Medicare Hospice Benefit) | `checkbox` |  |  |  |
| Hospice Eligibility Documentation | Hospice Election | `hospice_agency` | Hospice Agency | `text` |  |  |  |
| Hospice Eligibility Documentation | Hospice Election | `hospice_level` | Hospice Level of Care | `select` |  |  |  |
| Hospice Eligibility Documentation | Hospice Election | `physician_attestation` | Physician attestation: patient has terminal illness with prognosis ≤6 months if disease runs its normal course | `checkbox` |  |  |  |

### Palliative Care — `palliative_care_pain_goals_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Palliative Care — Symptom Management, Goals of Care, and Hospice | Pain Management, Symptom Control, and Opioid Titration | `pal_f1` | Palliative Care Evaluation: PALLIATIVE CARE PHILOSOPHY (IMPROVE QUALITY OF LIFE PATIENTS AND FAMILIES; RELIEVE SUFFERING PHYSICAL PSYCHOLOGICAL SOCIAL SPIRITUAL; APPROPRIATE ANY STAGE ILLNESS NOT JUST END STAGE; ALONGSIDE CURATIVE TREATMENT; EVIDENCE: EARLY PALLIATIVE CARE EXTENDS SURVIVAL NSCLC; PAIN MANAGEMENT WHO ANALGESIC LADDER (STEP 1 MILD PAIN: NON-OPIOIDS ACETAMINOPHEN NSAIDS; STEP 2 MODERATE: WEAK OPIOIDS TRAMADOL LOW DOSE OPIOID; STEP 3 SEVERE: STRONG OPIOIDS TITRATE; PAIN ASSESSMENT (PAIN SCALE 0-10; LOCATION CHARACTER RADIATION; QUALITY ACHING BURNING STABBING SHOOTING; TEMPORAL PATTERN CONSTANT Or INTERMITTENT; AGGRAVATING ALLEVIATING FACTORS; FUNCTIONAL IMPACT SLEEP MOOD ACTIVITY; OPIOID TITRATION PRINCIPLES (START LOW TITRATE TO EFFECT; MORPHINE FIRST LINE MOST STUDIED; 5-15 mg ORAL Q4H OPIOID NAIVE; IV EQUIVALENT 1/3 ORAL DOSE; IMMEDIATE RELEASE FOR BREAKTHROUGH; BREAKTHROUGH DOSE 10-15 pct TOTAL DAILY DOSE; INCREASE TOTAL DAILY DOSE 25-50 pct IF USING 3+ BREAKTHROUGH PER DAY; EQUIANALGESIC CONVERSION (MORPHINE 30 mg ORAL = 10 mg IV = OXYCODONE 20 mg = HYDROMORPHONE 7.5 mg ORAL; INCOMPLETE CROSS TOLERANCE REDUCE NEW OPIOID 25-50 pct; OPIOID SIDE EFFECTS (CONSTIPATION UNIVERSAL: START BOWEL REGIMEN DAY 1 SENNA MIRALAX; PROPHYLACTIC; NAUSEA: FIRST FEW DAYS OFTEN RESOLVES; PROCHLORPERAZINE ONDANSETRON; SEDATION: OFTEN RESOLVES; RESPIRATORY DEPRESSION: LESS COMMON APPROPRIATE DOSING TITRATE; NALOXONE 0.04 mg IV TITRATE AVOID PRECIPITATING ACUTE WITHDRAWAL) | `text` |  |  |  |
| Palliative Care — Symptom Management, Goals of Care, and Hospice | Pain Management, Symptom Control, and Opioid Titration | `pal_f2` | Dyspnea Nausea Goals of Care and Hospice | `select` |  |  |  |

### Palliative Care Consult — `palliative_care_consult_cf`

Screen: 1 page(s) · 4 section(s) · 19 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Palliative Care Consultation | Reason for Consultation | `primary_diagnosis` | Primary Life-Limiting Diagnosis | `text` |  |  |  |
| Palliative Care Consultation | Reason for Consultation | `prognosis_estimate` | Estimated Prognosis | `select` |  |  |  |
| Palliative Care Consultation | Reason for Consultation | `consult_focus` | Primary Consultation Focus | `select` |  |  |  |
| Palliative Care Consultation | Symptom Burden (ESAS-r) | `pain_score` | Pain (0-10 NRS) | `number` |  |  |  |
| Palliative Care Consultation | Symptom Burden (ESAS-r) | `dyspnea_score` | Shortness of Breath (0-10) | `number` |  |  |  |
| Palliative Care Consultation | Symptom Burden (ESAS-r) | `nausea_score` | Nausea (0-10) | `number` |  |  |  |
| Palliative Care Consultation | Symptom Burden (ESAS-r) | `fatigue_score` | Tiredness / Fatigue (0-10) | `number` |  |  |  |
| Palliative Care Consultation | Symptom Burden (ESAS-r) | `depression_score` | Depression (0-10) | `number` |  |  |  |
| Palliative Care Consultation | Symptom Burden (ESAS-r) | `anxiety_score` | Anxiety (0-10) | `number` |  |  |  |
| Palliative Care Consultation | Symptom Burden (ESAS-r) | `appetite_score` | Appetite (0-10, 0=best appetite) | `number` |  |  |  |
| Palliative Care Consultation | Symptom Burden (ESAS-r) | `wellbeing_score` | Overall Wellbeing (0-10, 0=best) | `number` |  |  |  |
| Palliative Care Consultation | Goals of Care | `patient_goals` | Patient's Stated Goals and Values | `textarea` |  |  |  |
| Palliative Care Consultation | Goals of Care | `goals_discussed` | Goals of care discussion held (patient + family/surrogate) | `checkbox` |  |  |  |
| Palliative Care Consultation | Goals of Care | `code_status` | Code Status (current) | `select` |  |  |  |
| Palliative Care Consultation | Goals of Care | `polst_completed` | POLST / MOLST form completed and signed | `checkbox` |  |  |  |
| Palliative Care Consultation | Goals of Care | `advance_directive` | Advance directive / healthcare proxy on file | `checkbox` |  |  |  |
| Palliative Care Consultation | Plan | `symptom_plan` | Symptom Management Plan | `textarea` |  |  |  |
| Palliative Care Consultation | Plan | `hospice_referral` | Hospice referral placed | `checkbox` |  |  |  |
| Palliative Care Consultation | Plan | `followup` | Follow-Up Plan | `text` |  |  |  |

### Palliative Dyspnea — `dyspnea_palliative_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Palliative Dyspnea Management | Dyspnea Assessment | `dyspnea_score` | Dyspnea Score (0-10 NRS — patient-reported) | `number` |  |  |  |
| Palliative Dyspnea Management | Dyspnea Assessment | `primary_cause` | Primary Cause | `select` |  |  |  |
| Palliative Dyspnea Management | Dyspnea Assessment | `spo2` | SpO2 at Rest (%) | `number` |  |  |  |
| Palliative Dyspnea Management | Management | `opioids_dyspnea` | Low-dose opioids prescribed (morphine 2-4 mg PO q4h — reduces breathlessness sensation; NOT oxygen by itself) | `checkbox` |  |  |  |
| Palliative Dyspnea Management | Management | `supplemental_o2` | Supplemental O2 (only for hypoxic patients — SpO2 <88%; fan to face equally effective for non-hypoxic) | `checkbox` |  |  |  |
| Palliative Dyspnea Management | Management | `fan_to_face` | Fan to face (stimulates trigeminal receptors — reduces dyspnea sensation) | `checkbox` |  |  |  |
| Palliative Dyspnea Management | Management | `anxiolytic` | Anxiolytic (lorazepam / clonazepam — treat anxiety component) | `checkbox` |  |  |  |
| Palliative Dyspnea Management | Management | `pleural_drainage` | Thoracentesis / tunneled pleural catheter (if malignant pleural effusion) | `checkbox` |  |  |  |
| Palliative Dyspnea Management | Management | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Palliative Pain Mgmt — `pain_management_palliative_cf`

Screen: 1 page(s) · 5 section(s) · 18 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Palliative Pain Management | Pain Assessment | `pain_score` | Current Pain Score (0-10 NRS) | `number` |  |  |  |
| Palliative Pain Management | Pain Assessment | `pain_type` | Pain Type | `select` |  |  |  |
| Palliative Pain Management | Pain Assessment | `breakthrough_pain` | Breakthrough / incident pain episodes | `checkbox` |  |  |  |
| Palliative Pain Management | Pain Assessment | `pain_location` | Pain Location(s) | `text` |  |  |  |
| Palliative Pain Management | Current Opioid Regimen | `long_acting` | Long-Acting Opioid (name, dose, frequency) | `text` |  |  |  |
| Palliative Pain Management | Current Opioid Regimen | `short_acting` | Short-Acting / Breakthrough Opioid (dose, frequency — goal 10-15% of total daily dose) | `text` |  |  |  |
| Palliative Pain Management | Current Opioid Regimen | `oral_morphine_equivalents` | Total Daily OME (mg/day) | `number` |  |  |  |
| Palliative Pain Management | Current Opioid Regimen | `opioid_side_effects` | Opioid Side Effects (constipation, sedation, nausea) | `textarea` |  |  |  |
| Palliative Pain Management | Adjuvant / Co-Analgesics | `dexamethasone` | Dexamethasone (bone / neural compression pain) | `checkbox` |  |  |  |
| Palliative Pain Management | Adjuvant / Co-Analgesics | `nsaid` | NSAID (if renal/GI risks acceptable) | `checkbox` |  |  |  |
| Palliative Pain Management | Adjuvant / Co-Analgesics | `gabapentin_pregabalin` | Gabapentin / pregabalin (neuropathic component) | `checkbox` |  |  |  |
| Palliative Pain Management | Adjuvant / Co-Analgesics | `tca` | TCA (low-dose amitriptyline / nortriptyline — neuropathic) | `checkbox` |  |  |  |
| Palliative Pain Management | Adjuvant / Co-Analgesics | `bisphosphonate` | Bisphosphonate / denosumab (osteolytic bone mets) | `checkbox` |  |  |  |
| Palliative Pain Management | Adjuvant / Co-Analgesics | `ketamine_low_dose` | Ketamine infusion (refractory / opioid-induced hyperalgesia) | `checkbox` |  |  |  |
| Palliative Pain Management | Adjuvant / Co-Analgesics | `palliative_radiation` | Palliative radiation referral (bone mets / cord compression) | `checkbox` |  |  |  |
| Palliative Pain Management | Opioid-Induced Constipation (OIC) | `bowel_regimen` | Bowel regimen prescribed (stimulant laxative — senna; NOT bulking agents) | `checkbox` |  |  |  |
| Palliative Pain Management | Opioid-Induced Constipation (OIC) | `pamora` | PAMORA prescribed if unresponsive (methylnaltrexone / naloxegol) | `checkbox` |  |  |  |
| Palliative Pain Management | Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Palliative Symptom Management — `palliative_symptom_management_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Palliative Care — Advanced Illness Symptom Management | Patient Overview and Prognosis | `pc_primary_diagnosis` | Primary Diagnosis (underlying illness driving palliative needs) | `text` |  |  |  |
| Palliative Care — Advanced Illness Symptom Management | Patient Overview and Prognosis | `pc_prognosis` | Estimated Prognosis | `select` |  |  |  |
| Palliative Care — Advanced Illness Symptom Management | Patient Overview and Prognosis | `pc_pps` | Palliative Performance Scale (PPS) | `select` |  |  |  |
| Palliative Care — Advanced Illness Symptom Management | Patient Overview and Prognosis | `pc_code_status` | Code Status | `select` |  |  |  |
| Palliative Care — Advanced Illness Symptom Management | Patient Overview and Prognosis | `pc_hospice_status` | Hospice Status | `select` |  |  |  |
| Palliative Care — Advanced Illness Symptom Management | Pain Management | `pc_pain_score` | Current Pain Score (NRS 0-10) | `select` |  |  |  |
| Palliative Care — Advanced Illness Symptom Management | Pain Management | `pc_pain_type` | Pain Etiology | `select` |  |  |  |
| Palliative Care — Advanced Illness Symptom Management | Pain Management | `pc_current_opioid` | Current Opioid Regimen | `select` |  |  |  |
| Palliative Care — Advanced Illness Symptom Management | Pain Management | `pc_opioid_dose` | Current Opioid Total Daily Dose (mg oral morphine equivalent) and Breakthrough Dose (10-15% of 24h oral MME every 1-4h PRN) | `text` |  |  |  |
| Palliative Care — Advanced Illness Symptom Management | Pain Management | `pc_opioid_side_effects` | Opioid Side Effect Management | `select` |  |  |  |
| Palliative Care — Advanced Illness Symptom Management | Other Symptom Management | `pc_dyspnea` | Dyspnea (Breathlessness) Management | `select` |  |  |  |
| Palliative Care — Advanced Illness Symptom Management | Other Symptom Management | `pc_nausea` | Nausea and Vomiting | `select` |  |  |  |
| Palliative Care — Advanced Illness Symptom Management | Other Symptom Management | `pc_delirium` | Delirium Management | `select` |  |  |  |
| Palliative Care — Advanced Illness Symptom Management | Other Symptom Management | `pc_depression_anxiety` | Depression and Anxiety | `select` |  |  |  |
| Palliative Care — Advanced Illness Symptom Management | Other Symptom Management | `pc_family_communication` | Family and Caregiver Communication | `select` |  |  |  |
| Palliative Care — Advanced Illness Symptom Management | Other Symptom Management | `pc_notes` | Palliative Care Notes — Symptom Burden Summary, Goals, and Next Priorities | `textarea` |  |  |  |

### Palliative Symptom Management — `palliative_care_symptom_management_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Palliative Care — Symptom Management and End-of-Life Care | Pain and Dyspnea Management | `opioid_eol` | Opioid Titration and Conversion at End of Life (EQUIANALGESIC TABLE: morphine 30 mg PO = 10 mg IV/SC = 7.5 mg hydromorphone PO = 1.5 mg hydromorphone IV; oxycodone 20 mg PO = morphine 30 mg PO; fentanyl patch mcg/hr = 24h IV morphine mg / 2 (approximate); CONVERSION STEPS: (1) calculate total 24h dose current opioid; (2) convert to oral morphine equivalents; (3) reduce by 25-50% for incomplete cross-tolerance; (4) divide into dosing schedule; SCHEDULED + PRN: continuous SC/IV infusion + BREAKTHROUGH doses; breakthrough = 10-15% of daily dose Q1-2h PRN; ROUTES when PO not tolerated: SC (preferred at home; small volume); SC/IV infusion; transdermal; sublingual buprenorphine; oral transmucosal fentanyl for breakthrough; HOSPICE: comfort kit (oxycodone, lorazepam, haloperidol, glycopyrrolate, docusate); titrate until comfort) | `text` |  |  |  |
| Palliative Care — Symptom Management and End-of-Life Care | Pain and Dyspnea Management | `dyspnea` | Dyspnea and Refractory Symptoms | `select` |  |  |  |
| Palliative Care — Symptom Management and End-of-Life Care | Nausea, Secretions, and Existential Distress | `nausea_mgmt` | Nausea and GI Symptoms (NAUSEA: identify cause: opioid-induced (initiate antiemetic; switch opioid); bowel obstruction (bowel rest + NG; octreotide 300-600 mcg/day SC; dexamethasone 4-8 mg BID to reduce peritumoral edema; venting G-tube for persistent); brain mets (dexamethasone); constipation (polyethylene glycol; methylnaltrexone (Relistor) for opioid-induced constipation 8-12 mg SC QOD; naloxegol PO; ANTI-EMETICS: haloperidol 0.5-1 mg SC Q8h (best for opioid-nausea + broad use at EOL); prochlorperazine 10 mg SC Q6h; ondansetron 4-8 mg Q8h (serotonin-related); metoclopramide 10-20 mg Q4-6h (gastroparesis, partial bowel obstruction — avoid complete SBO); dexamethasone 4-8 mg QD (multiple mechanisms); DEATH RATTLE (pharyngeal secretions): glycopyrrolate 0.2-0.4 mg SC Q4-6h; scopolamine patch 1.5 mg Q72h; repositioning; reassure family) | `text` |  |  |  |
| Palliative Care — Symptom Management and End-of-Life Care | Nausea, Secretions, and Existential Distress | `existential` | Existential Distress and Dignity Therapy | `select` |  |  |  |

### Palliative Symptom Management — `palliative_care_symptom_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Palliative Symptom Assessment and Management | Pain Assessment and Opioid Management | `pain_score` | Current Pain Score (NRS 0-10) | `number` |  |  |  |
| Palliative Symptom Assessment and Management | Pain Assessment and Opioid Management | `pain_type` | Pain Type | `select` |  |  |  |
| Palliative Symptom Assessment and Management | Pain Assessment and Opioid Management | `opioid_regimen` | Current Opioid Regimen (long-acting + short-acting: drug, dose, frequency; MEDD calculation; PRN breakthrough = 10-15% of 24h MEDD; add laxative — senna; avoid codeine in renal failure) | `text` |  |  |  |
| Palliative Symptom Assessment and Management | Pain Assessment and Opioid Management | `opioid_rotation` | Opioid Rotation If Needed (indication: intolerable SE, tolerance, route change; calculate MEDD → reduce new opioid 25-50% for incomplete cross-tolerance; equianalgesic table reference) | `text` |  |  |  |
| Palliative Symptom Assessment and Management | Dyspnea Management | `dyspnea_score` | Dyspnea Score (Modified Borg 0-10; NRS 0-10; document at rest and with activity) | `number` |  |  |  |
| Palliative Symptom Assessment and Management | Dyspnea Management | `dyspnea_treatment` | Dyspnea Management Strategy | `select` |  |  |  |
| Palliative Symptom Assessment and Management | Nausea / Vomiting | `nausea_cause` | Nausea Etiology | `select` |  |  |  |
| Palliative Symptom Assessment and Management | Nausea / Vomiting | `antiemetic` | Antiemetic Regimen (agent, dose, route — rectal/SC if unable to take PO; combine agents targeting different receptors for refractory nausea) | `text` |  |  |  |

## Hematology/Oncology

### ALL Leukemia — `hematology_acute_lymphoblastic_leukemia_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Lymphoblastic Leukemia: Diagnosis, Risk Stratification, Immunotherapy, and Transplant | ALL Diagnosis, Classification, Cytogenetics, and Risk Stratification | `all_class` | ALL WHO 2022: B-ALL vs T-ALL; Ph+ BCR-ABL1 t(9;22) 25% Adult ALL Worst Prognosis Pre-TKI; Ph-Like ABL-Class Fusions CRLF2; KMT2A KMT2A-r t(4;11); ETP-ALL; Hyper-Diploid Good; Hypo-Diploid Poor; MRD Flow Cytometry PCR Day 14-29 CR | `select` |  |  |  |
| Acute Lymphoblastic Leukemia: Diagnosis, Risk Stratification, Immunotherapy, and Transplant | ALL Diagnosis, Classification, Cytogenetics, and Risk Stratification | `all_treatment` | ALL Treatment: Pediatric CALGB 10403 BFM Protocol Adults; Hyper-CVAD MD Anderson; Ph+ Dasatinib Ponatinib APOLLO; CNS Prophylaxis IT-MTX IT-AraC; Induction Vincristine Dexamethasone Asparaginase Daunorubicin; Asparaginase Toxicity; AlloSCT High Risk MRD+ -- ALL TREATMENT: PEDIATRIC-INSPIRED REGIMENS [ADULTS BELOW 40; SUPERIOR TO ADULT REGIMENS]: CALGB 10403 [PEDIATRIC BFM-BASED PROTOCOL FOR ADULTS 17-39y; MEDIAN EFS IMPROVED VS HISTORICAL ADULT; HIGH-DOSE ASPARAGINASE BACKBONE; VINCRISTINE; STEROIDS; ANTHRACYCLINE]; HYPER-CVAD [MD ANDERSON; ADULT ALL; HYPERFRACTIONATED CYCLOPHOSPHAMIDE+VINCRISTINE+ADRIAMYCIN+DEXAMETHASONE [HYPER-CVAD] ALTERNATING WITH HIGH-DOSE METHOTREXATE+CYTARABINE x8 CYCLES; NO ASPARAGINASE; SUITABLE OLDER ADULTS]; STANDARD INDUCTION COMPONENTS [ALL REGIMENS]: VINCRISTINE [1.5 mg/m2 IV QW; MAX 2 mg; NEUROTOXICITY; CONSTIPATION]; DEXAMETHASONE [SUPERIOR VINCRISTINE-DEXAMETHASONE VS PREDNISONE FOR CNS PENETRATION+ANTILEUKEMIC BUT MORE MUSCLE WASTING OSTEONECROSIS]; ASPARAGINASE [PEG-ASPARAGINASE [ONCASPAR; PREFERRED; LONGER HALF-LIFE; LESS FREQUENT DOSING; 2500 IU/m2 IM Q2W]; CALASPARGASE PEGOL [ASPARLAS; EVEN LONGER]; TOXICITIES: PANCREATITIS [MOST SERIOUS; CHECK LIPASE]; HYPERSENSITIVITY [SWITCH FORMULATION]; COAGULOPATHY [DECREASE ANTITHROMBIN/FIBRINOGEN; VTE + BLEEDING]; HEPATOTOXICITY; HYPERGLYCEMIA]; ANTHRACYCLINE [DAUNORUBICIN; DOXORUBICIN; LIPOSOMAL FOR CARDIAC RISK]; CNS PROPHYLAXIS [ALL PATIENTS; INTRATHECAL [IT] METHOTREXATE [12 mg] OR TRIPLE IT [MTX+CYTARABINE+HYDROCORTISONE]; DIAGNOSTIC LP AT DIAGNOSIS; TREAT CNS+ DISEASE; CRANIAL RADIATION NO LONGER STANDARD [CNS TOXICITY]; HIGH-DOSE SYSTEMIC MTX ALSO PENETRATES CNS [HYPER-CVAD]]; Ph+ ALL TREATMENT: IMATINIB [GLEEVEC; 400-600 mg QD; FIRST TKI; COMBINED INDUCTION; SYNERGISTIC]; DASATINIB [SPRYCEL; 140 mg QD; CNS PENETRANT [IMPORTANT ALL]; PREFERRED FIRST-LINE Ph+ ALL; PONATINIB [ICLUSIG; 30-45 mg QD; MOST POTENT BCR-ABL1 TKI; T315I MUTATION COVERED; APOLLO TRIAL NEJM 2022: PONATINIB+BLINATUMOMAB CHEMOTHERAPY-FREE INDUCTION: MRD NEGATIVITY 87%; ALLOSCIT IN 84%; FAVORABLE OUTCOMES; FDA 2022 Ph+ ALL]; T315I MUTATION [MOST RESISTANT; ONLY PONATINIB OR ASCIMINIB COVER; TEST AT RELAPSE] | `text` |  |  |  |
| Acute Lymphoblastic Leukemia: Diagnosis, Risk Stratification, Immunotherapy, and Transplant | Immunotherapy: Blinatumomab, Inotuzumab, and CAR-T for R/R ALL | `all_immuno_drugs` | Blinatumomab CD3xCD19 BiTE TOWER JCO 2017; Inotuzumab Anti-CD22 ADC INO-VATE NEJM 2016 80.7% CR; CAR-T Brexucabtagene Autoleucel CD19 ZUMA-3 NEJM 2021 71% CR Adults Relapsed; AlloSCT Consolidation High-Risk MRD-Negative; Nelarabine T-ALL; Tisagenlecleucel Pediatric Kymriah | `select` |  |  |  |
| Acute Lymphoblastic Leukemia: Diagnosis, Risk Stratification, Immunotherapy, and Transplant | Immunotherapy: Blinatumomab, Inotuzumab, and CAR-T for R/R ALL | `all_notes` | ALL Management Notes and Hematology/Oncology/Pediatrics/CAR-T Program/BMT/Pharmacy/Nursing/Palliative Care/Social Work/Genetic Counseling Coordination | `textarea` |  |  |  |

### APL Leukemia — `hematology_apl_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Promyelocytic Leukemia APL — Diagnosis, DIC Management, and Targeted Therapy | Diagnosis and Emergency Management | `apl_f1` | APL Evaluation: EPIDEMIOLOGY AND BIOLOGY (5-8 pct OF ADULT AML; 600-800 CASES US ANNUALLY; UNIQUE BECAUSE HIGHLY CURABLE AND MEDICALLY EMERGENT; CHARACTERISTIC t(15;17) TRANSLOCATION; PML-RARA FUSION GENE; RARA RETINOIC ACID RECEPTOR ALPHA; DIFFERENTIATION BLOCK AT PROMYELOCYTE STAGE; ATRA AND ATO OVERCOME DIFFERENTIATION BLOCK; MOLECULAR TESTING CRITICAL: FISH Or PCR For PML-RARA CONFIRMATION; RARE VARIANT TRANSLOCATIONS t(11;17) t(5;17) RARE ATRA-RESISTANT; CLINICAL PRESENTATION APL EMERGENCY (PRESENTS BLEEDING COAGULOPATHY DIC; YOUNG ADULTS MEDIAN AGE 40Y; DISSEMINATED INTRAVASCULAR COAGULOPATHY DIC HALLMARK (RELEASE OF PROCOAGULANTS TISSUE FACTOR FROM AZUROPHILIC GRANULES; FIBRINOLYSIS ACTIVATION; CONSUMPTIVE COAGULOPATHY; THROMBOCYTOPENIA FIBRINOGEN LOW; PROLONGED PT PTT; BLEEDING SKIN MUCOUS MEMBRANES GI INTRACRANIAL; FATAL INTRACRANIAL HEMORRHAGE ICH BEFORE DIAGNOSIS OR EARLY TREATMENT; HYPERLEUKOCYTOSIS WBC OVER 10000 HIGHER RISK; TREATMENT MUST START IMMEDIATELY EVEN MORPHOLOGY ONLY; MORPHOLOGY: HYPERGRANULAR PROMYELOCYTES AUER RODS BUNDLES FAGGOT CELLS; MICROGRANULAR VARIANT BILOBED NUCLEUS WBC ELEVATION; DIAGNOSIS TIMING: START ATRA IMMEDIATELY; DO NOT WAIT CYTOGENETICS OR MOLECULAR RESULTS; EMERGENCY LABS (CBC WITH DIFFERENTIAL MORPHOLOGY; COAGULATION PT PTT INR FIBRINOGEN D-DIMER; DIC MANAGEMENT LABS; BMP CHEMISTRY; LDH URIC ACID; LFT; BLOOD CULTURE INFECTION RULE OUT; LDH BLAST COUNT RISK STRATIFICATION; EKG QTc BEFORE ATO) | `text` |  |  |  |
| Acute Promyelocytic Leukemia APL — Diagnosis, DIC Management, and Targeted Therapy | Diagnosis and Emergency Management | `apl_f2` | ATRA-ATO Induction and Consolidation | `select` |  |  |  |

### Acute Leukemia — `hematology_leukemia_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Leukemia Assessment | Classification and Cytogenetics | `leukemia_type` | Leukemia Type | `select` |  |  |  |
| Acute Leukemia Assessment | Classification and Cytogenetics | `cytogenetics` | Cytogenetic/Molecular Risk | `select` |  |  |  |
| Acute Leukemia Assessment | Classification and Cytogenetics | `flt3` | FLT3 Status | `select` |  |  |  |
| Acute Leukemia Assessment | Induction and Consolidation | `induction` | Induction Regimen (7+3: cytarabine 100-200 mg/m²/day × 7d + anthracycline × 3d; add midostaurin if FLT3+; ivosidenib if IDH1; enasidenib if IDH2; repeat BM biopsy at day 14 and count recovery) | `text` |  |  |  |
| Acute Leukemia Assessment | Induction and Consolidation | `transplant_plan` | Allogeneic SCT Plan | `select` |  |  |  |

### Cervical Cancer Staging — `oncology_cervical_cancer_staging_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cervical Cancer — Staging and Treatment | FIGO 2018 Staging and Pathology | `figo_stage` | FIGO 2018 Stage | `select` |  |  |  |
| Cervical Cancer — Staging and Treatment | FIGO 2018 Staging and Pathology | `hpv_pathogenesis` | HPV Pathogenesis and Prevention (HPV 16/18: 70% of cervical cancers; HPV 16 = squamous (SCC), HPV 18 = adenocarcinoma (AC); E6 protein degrades p53; E7 inactivates pRb; high-grade SIL (CIN2/3) = immediate precursor; cervical adenocarcinoma: ECC sampling important; Gardasil 9 (9-valent) prevents HPV 6/11/16/18/31/33/45/52/58; recommended ages 9-45 (FDA); 2 doses if started <15 years; 3 doses if >=15 or immunocompromised; screen: Pap +/- HPV co-test Q5 years age 25-65 (preferred) or Pap alone Q3 years; primary HPV test FDA approved 2023 Q5 years age 25-65) | `text` |  |  |  |
| Cervical Cancer — Staging and Treatment | Fertility Preservation and Advanced | `fertility_options` | Fertility-Preserving Surgery | `select` |  |  |  |

### Coagulation / Bleeding — `hematology_coagulation_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Coagulation Disorder and Bleeding Workup | Bleeding History (ISTH-BAT) | `bleeding_score` | ISTH Bleeding Assessment Tool (BAT) Score (>3 in males, >5 in females = abnormal; quantifies severity of bleeding history; scores: epistaxis, cutaneous bruising, oral mucosa, GI, hemarthrosis, muscle hematoma, post-procedure, post-dental, post-surgical, menorrhagia, postpartum, CNS) | `number` |  |  |  |
| Coagulation Disorder and Bleeding Workup | Bleeding History (ISTH-BAT) | `pattern` | Bleeding Pattern | `select` |  |  |  |
| Coagulation Disorder and Bleeding Workup | Specific Coagulation Disorders | `disorder` | Diagnosis | `select` |  |  |  |

### DLBCL Lymphoma — `hematology_dlbcl_lymphoma_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| DLBCL: Diagnosis, Risk Stratification, First-Line Therapy, and Relapse Management | DLBCL Diagnosis, Molecular Classification, and IPI Risk | `dlbcl_class` | WHO 2022 DLBCL: Hans GCB vs ABC COO; CD10 BCL6 MUM1 IHC Algorithm; Double-Expressor BCL2+ MYC+ IHC; Double-Hit DHL MYC rearrangement t(8;14) plus BCL2 t(14;18) FISH; IPI 0-5 Score Age LDH Stage PS Extranodal; IPI Low 0-1 vs High 3-5; Bulky Above 10cm; BM Biopsy; PET-CT Staging Deauville | `select` |  |  |  |
| DLBCL: Diagnosis, Risk Stratification, First-Line Therapy, and Relapse Management | DLBCL Diagnosis, Molecular Classification, and IPI Risk | `dlbcl_treatment` | DLBCL First-Line: R-CHOP 6 Cycles Standard; Polatuzumab Vedotin R-POLA-CHP POLARIX NEJM 2021 HR 0.73 PFS Low Risk; CNS Prophylaxis High-CNS-IPI; R-CHOP-14 Not Superior; DA-EPOCH-R Double-Hit; Relapsed: AutoSCT PARMA; CAR-T Axicabtagene ZUMA-7 TRANSFORM Liso-cel TRANSFORM Primary Refractory -- DLBCL TREATMENT: FIRST-LINE [CURATIVE INTENT]: R-CHOP [RITUXIMAB 375 mg/m2 + CYCLOPHOSPHAMIDE + DOXORUBICIN + VINCRISTINE + PREDNISONE; Q21 DAYS [R-CHOP-21]; 6 CYCLES STANDARD; CORNERSTONE SINCE GELA NEJM 2002: R-CHOP vs CHOP: 5Y EFS 47% vs 29%; CURATIVE 60-70% LIMITED STAGE; 40-50% ADVANCED]; DOSE-DENSE R-CHOP-14 [Q14 DAYS; GELA/DSHNHL TRIALS; NOT SUPERIOR R-CHOP-21; NOT RECOMMENDED ROUTINE]; POLATUZUMAB VEDOTIN-PIIQ [POLIVY; ANTI-CD79b ADC [MONOMETHYL AURISTATIN E]; POLARIX NEJM 2021: POLA-R-CHP [POLATUZUMAB+RITUXIMAB+CHP WITHOUT VINCRISTINE; VINCRISTINE REPLACED] vs R-CHOP: PFS 76.7% vs 70.2% AT 2Y [HR 0.73]; FDA 2023; DOSE 1.8 mg/kg Q21D x6; PERIPHERAL NEUROPATHY; PREFERRED HIGH-RISK OR IPI ABOVE 2; MYELOSUPPRESSION; PFS BENEFIT BUT OS NOT YET MATURE; CONSIDERED STANDARD HIGH-RISK DLBCL]; DA-EPOCH-R [DOSE-ADJUSTED ETOPOSIDE+PREDNISONE+VINCRISTINE+CYC+DOXORUBICIN+R; CONTINUOUS INFUSION; ADJUST DOSES BASED NADIR WBC; PREFERRED DHL/THL; HIGH-GRADE B-CELL LYMPHOMA; BURKITT LYMPHOMA; CENTRAL NERVOUS SYSTEM [CNS] PROPHYLAXIS: CNS-IPI [HIGH-RISK: CNS-IPI 4-6 OR INVOLVEMENT SPECIFIC SITES [ADRENAL; KIDNEY; BREAST; VITREORETINAL; TESTICULAR; BONE MARROW; EPIDURAL]]; INTRATHECAL METHOTREXATE [PREFERRED; 12 mg x4-8 CYCLES]; HIGH-DOSE SYSTEMIC METHOTREXATE [3.5 g/m2; PENETRATES CNS; MORE EFFECTIVE BUT COMPLEX; LEUCOVORIN RESCUE]; RELAPSED/REFRACTORY DLBCL: SALVAGE CHEMO [R-ICE [IFOS+CARBO+ETOPOSIDE+R]; R-DHAP [DEXAMETHASONE+CYTARABINE+CISPLATIN+R]; R-GEMOX; GOAL [ACHIEVE CR THEN AUTOSCT]]; AUTO-SCT [AUTOLOGOUS STEM CELL TRANSPLANT; PARMA TRIAL; STANDARD CHEMO-SENSITIVE RELAPSE; 50% LONG-TERM EFS IF CR2]; CAR-T [CD19 CAR-T; SECOND-LINE PRIMARY REFRACTORY OR EARLY RELAPSE [WITHIN 12 MONTHS]]: AXICABTAGENE CILOLEUCEL [YESCARTA; ZUMA-7 NEJM 2022: EARLY RELAPSE DLBCL: AXIT-CEL vs SoC SALVAGE+AUTOSCT: EFS 8.3 vs 2.0 MONTHS [HR 0.40]; CR RATE 65% vs 32%; FDA 2022 2nd-LINE]; LISOCABTAGENE MARALEUCEL [BREYANZI; TRANSFORM NEJM 2022: EFS 10.1 vs 2.3 MONTHS; CR 66% vs 39%; FDA 2022 2nd-LINE]; TISA-CEL [KYMRIAH; BELINDA TRIAL NEGATIVE FOR 2nd-LINE]; THIRD-LINE [ANY RELAPSE]: LONCASTUXIMAB TESIRINE [ADC]; SELINEXOR [XPO1]; GLOFITAMAB [CD20xCD3 BISPECIFIC]; MOSUNETUZUMAB; ODRONEXTAMAB; EPCORITAMAB; CLINICAL TRIALS | `text` |  |  |  |
| DLBCL: Diagnosis, Risk Stratification, First-Line Therapy, and Relapse Management | DLBCL Management Notes | `dlbcl_mgmt_notes` | DLBCL Management Notes and Hematology/Oncology/Pathology/Radiology/BMT/CAR-T Program/Pharmacy/Nursing/Social Work/Palliative Care Coordination | `textarea` |  |  |  |

### DLBCL Treatment — `oncology_lymphoma_diffuse_large_bcell_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| DLBCL — Staging, Treatment, and Relapse Management | Staging and Prognostic Workup | `ipi_score` | IPI Score (International Prognostic Index; 1 point each: age >60, LDH > ULN, ECOG PS >=2, Ann Arbor stage III-IV, extranodal sites >=2; 0-1 = low (5yr OS 73%); 2 = low-intermediate (51%); 3 = high-intermediate (43%); 4-5 = high (26%); R-IPI (revised): 0 = very good 94%; 1-2 = good 79%; 3-5 = poor 55%) | `number` |  |  |  |
| DLBCL — Staging, Treatment, and Relapse Management | Staging and Prognostic Workup | `molecular` | Molecular Subtype | `select` |  |  |  |
| DLBCL — Staging, Treatment, and Relapse Management | First-Line and Relapse Treatment | `first_line` | First-Line Treatment | `select` |  |  |  |
| DLBCL — Staging, Treatment, and Relapse Management | First-Line and Relapse Treatment | `salvage` | Salvage and Beyond (R-ICE or R-DHAP for consolidation before autoSCT if CAR-T ineligible or relapse >12 months after first-line; consolidative autoSCT for chemosensitive relapse if CAR-T not yet given; loncastuximab tesirine (Zynlonta) for 3rd+ line; tafasitamab (Monjuvi) + lenalidomide for relapsed/refractory non-transplant eligible; bispecifics: epcoritamab (Epkinly) and glofitamab (Columvi) FDA approved 2023 for 3rd+ line; blinatumomab off-label) | `text` |  |  |  |

### Hodgkin Lymphoma — `hematology_hodgkin_lymphoma_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hodgkin Lymphoma: Staging, PET-Adapted Therapy, and Relapsed/Refractory Management | Hodgkin Lymphoma Diagnosis, Staging, and PET-CT | `hl_class` | Classical HL 95%: Nodular Sclerosis 65% NLPHL 5%; Reed-Sternberg CD30+ CD15+ EBV PAX5 dim; Mediastinal Bulky; Lugano 2014 PET Staging; Ann Arbor I-IV; B Symptoms Fever Night Sweats Weight Loss; Interim PET Deauville 1-3 vs 4-5; ABVD RATHL Bleomycin Omit; brentuximab vedotin ECHELON-1 | `select` |  |  |  |
| Hodgkin Lymphoma: Staging, PET-Adapted Therapy, and Relapsed/Refractory Management | Hodgkin Lymphoma Diagnosis, Staging, and PET-CT | `hl_treatment` | HL First-Line: ABVD Adriamycin Bleomycin Vinblastine Dacarbazine; ECHELON-1 NEJM 2018 Brentuximab+AVD vs ABVD Stage III-IV: PFS 82.1% vs 77.2% 6yr; Escalated BEACOPP Stage III-IV Young Patients; RATHL PET2-Negative Drop Bleomycin; Limited Stage: 2xABVD+IFRT vs 4-6xABVD; NLPHL Rituximab R-ABVD; Risk-Adapted -- HL TREATMENT: LIMITED STAGE [I-II FAVORABLE; NO BULKY NO B]: PREFERRED [COMBINED MODALITY; 2 CYCLES ABVD + 20-30 Gy IFRT [INVOLVED-FIELD RADIOTHERAPY]]; CHEMOTHERAPY ALONE [6 CYCLES ABVD; AVOIDANCE RT LONG-TERM TOXICITY; SECOND CANCERS+CV; PREFERRED YOUNG WOMEN BREAST FIELD]; ABVD REGIMEN [DOXORUBICIN [ADRIAMYCIN] 25 mg/m2 + BLEOMYCIN 10 U/m2 + VINBLASTINE 6 mg/m2 + DACARBAZINE 375 mg/m2 IV; DAYS 1+15; Q28 DAYS; PULMONARY TOXICITY BLEOMYCIN [MONITOR PFTs; AVOID AFTER HIGH-DOSE O2]; PERIPHERAL NEUROPATHY VINBLASTINE; NAUSEA DACARBAZINE; ANTHRACYCLINE]; LIMITED STAGE UNFAVORABLE [I-II BULKY OR B SYMPTOMS]: 4 CYCLES ABVD + IFRT OR 6 CYCLES ABVD; RATHL APPROACH [PET ADAPTED; DROP BLEOMYCIN IF PET2 NEGATIVE; RATHL TRIAL NEJM 2015: PET2-NEG [DEAUVILLE 1-3] ABVD CYCLE 2: OMIT BLEOMYCIN CYCLES 3-6 [AVD]: PFS 85.4% NON-INFERIOR CONTINUED ABVD WITH LESS BLEOMYCIN TOXICITY]; ADVANCED STAGE [III-IV; 6 CYCLES ABVD STANDARD US]: ECHELON-1 NEJM 2018 [BRENTUXIMAB VEDOTIN [BV; ANTI-CD30 ADC]+AVD vs ABVD STAGE III-IV]: BV+AVD: 2-YEAR MODIFIED PFS 82.1% vs 77.2% [HR 0.77]; 6-YEAR PFS 82.3% vs 75.3% [UPDATED]; PERIPHERAL NEUROPATHY 67% [MOST REVERSIBLE]; NO BLEOMYCIN [PULMONARY TOXICITY AVOIDANCE]; G-CSF MANDATORY; FDA 2018 FRONTLINE; ESCALATED BEACOPP [BLEOMYCIN+ETOPOSIDE+DOXORUBICIN+CYCLOPHOSPHAMIDE+VINCRISTINE+PROCARBAZINE+PREDNISONE; EUROPEAN PREFERRED; SUPERIOR PFS ABVD ADVANCED STAGE [HD2000; HD14; GHSG]; HIGHER TOXICITY [SECONDARY MALIGNANCY; INFERTILITY; MDS/AML; G-CSF MANDATORY]; NOT US STANDARD; CONSIDER FIT PATIENTS HIGH IPS SCORE HIGH RISK; RELAPSED/REFRACTORY HL [SALVAGE+AUTOSCT; CURATIVE INTENT]: FIRST SALVAGE [ICE [IFOS+CARBO+ETOPOSIDE]; DHAP; GEMOX; GDVP; IGEV; GOAL CR THEN AUTOSCT]; AUTO-SCT [STANDARD CURATIVE RELAPSED/REFRACTORY; CONSOLIDATION BRENTUXIMAB VEDOTIN POST-AUTOSCT [AETHERA NEJM 2015: BV VS PLACEBO POST-AUTOSCT HIGH-RISK: PFS 42.9 VS 24.1 MONTHS [HR 0.57]; FDA 2015]; PD-1 BLOCKADE RL]: NIVOLUMAB [OPDIVO; CHECKMATE 205 PHASE 2: ORR 87% LINES 1-3 RL; ORR 69% POST-AUTOSCT POST-BV; mDOR 16.6M; FDA 2016 BRENTUXIMAB-REFRACTORY POST-AUTOSCT]; PEMBROLIZUMAB [KEYTRUDA; KEYNOTE-087 ORR 72% POST-AUTOSCT POST-BV; KEYNOTE-204 NEJM 2021: PEMBROLIZUMAB vs BV SECOND-LINE: PFS 13.2 vs 8.3M [HR 0.65]; FDA 2017; USE SECOND-LINE BEFORE AUTOSCT IF BV-NAIVE; USE CONSOLIDATION-BRIDGE]; ALLOGENEIC SCT [AFTER AUTOSCT FAILURE; POTENTIAL GRAFT-VS-LYMPHOMA; MYELOABLATIVE OR RIC; DONOR AVAILABILITY] | `text` |  |  |  |
| Hodgkin Lymphoma: Staging, PET-Adapted Therapy, and Relapsed/Refractory Management | Hodgkin Lymphoma Management Notes | `hl_mgmt_notes` | Hodgkin Lymphoma Management Notes and Hematology/Oncology/Radiation Oncology/Radiology/BMT/Pharmacy/Nursing/Fertility/Survivorship/Cardiology Late-Effects/Palliative Care Coordination | `textarea` |  |  |  |

### Lymphoma Hodgkin NHL — `hematology_lymphoma_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lymphoma — Hodgkin and Non-Hodgkin Classification and Treatment | Hodgkin and Non-Hodgkin Classification | `lymph_f1` | Lymphoma Evaluation: HODGKIN LYMPHOMA HL (BIMODAL AGE 15-35Y AND OVER 55Y; MALE PREDOMINANCE; EBV ASSOCIATION 40 pct; HIV PATIENTS HIGHER RISK; PATHOLOGY REED-STERNBERG CELLS CD30+ CD15+ OWL EYE NUCLEI; LACUNAR VARIANTS; CLASSIC HODGKIN CHL SUBTYPES (NODULAR SCLEROSIS NSHL MOST COMMON 70 pct (YOUNG ADULTS WOMEN MEDIASTINAL MASS; MIXED CELLULARITY MCHL 25 pct OLDER ADULTS EBV MORE; LYMPHOCYTE-RICH BEST PROGNOSIS; LYMPHOCYTE DEPLETED RAREST WORST; NODULAR LYMPHOCYTE PREDOMINANT NLPHL (LP CELLS POPCORN CELLS CD20+ CD30 NEGATIVE; BETTER PROGNOSIS THAN CLASSIC; RELAPSE MORE COMMON; CLINICAL HL (B SYMPTOMS: FEVER OVER 38.5C NIGHT SWEATS WEIGHT LOSS 10 pct 6M UNFAVORABLE; PRURITUS GENERALIZED; PAINLESS CERVICAL LYMPHADENOPATHY MOST COMMON; MEDIASTINAL MASS COUGH DYSPNEA; PEL-EBSTEIN FEVER CYCLICAL CLASSIC RARE; ALCOHOL-INDUCED PAIN LYMPH NODES CLASSIC; NON-HODGKIN LYMPHOMA NHL CATEGORIES (B-CELL NHL MOST COMMON 85 pct: DLBCL DIFFUSE LARGE B-CELL LYMPHOMA MOST COMMON AGGRESSIVE; FOLLICULAR LYMPHOMA FL MOST COMMON INDOLENT; CLL-SLL CHRONIC LYMPHOCYTIC LEUKEMIA; MANTLE CELL MCL BLASTOID AGGRESSIVE; MARGINAL ZONE SPLENIC NODAL MALT; BURKITT LYMPHOMA HIGHLY AGGRESSIVE c-MYC; TRANSFORMATION RICHTER SYNDROME CLL TO DLBCL; T-CELL NHL 15 pct: PERIPHERAL T-CELL PTCL; ANAPLASTIC LARGE CELL ALK POSITIVE OR NEGATIVE; CUTANEOUS MYCOSIS FUNGOIDES SEZARY; ANGIOIMMUNOBLASTIC; DIAGNOSIS LYMPHOMA (EXCISIONAL BIOPSY GOLD STANDARD Preserve Architecture; CORE NEEDLE BIOPSY Acceptable If Excisional Not Safe; FLOW CYTOMETRY CD MARKERS; IMMUNOHISTOCHEMISTRY IHC; FISH CYTOGENETICS TRANSLOCATIONS; MOLECULAR PROFILING BCL2 BCL6 MYC Gene Expression GEP; PET-CT STAGING ALL LYMPHOMA; CT CHEST ABDOMEN PELVIS NECK; BONE MARROW BIOPSY If Affects Management; STAGING ANN ARBOR MODIFIED LUGANO (I SINGLE REGION; II 2+ REGIONS SAME DIAPHRAGM SIDE; III BOTH SIDES DIAPHRAGM; IV EXTRANODAL ORGAN BONE MARROW LIVER; A WITHOUT B; B WITH B SYMPTOMS; BULKY OVER 10 cm Or MEDIASTINAL MASS) | `text` |  |  |  |
| Lymphoma — Hodgkin and Non-Hodgkin Classification and Treatment | Hodgkin and Non-Hodgkin Classification | `lymph_f2` | Treatment by Type and Salvage Therapy | `select` |  |  |  |

### Lymphoma Management — `lymphoma_management_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lymphoma Management / Surveillance Visit | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| Lymphoma Management / Surveillance Visit | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| Lymphoma Management / Surveillance Visit | Patient & Diagnosis | `provider` | Hematologist / Medical Oncologist | `typeahead` | Y |  |  |
| Lymphoma Management / Surveillance Visit | Patient & Diagnosis | `lymphomaType` | Lymphoma Type | `select` | Y |  |  |
| Lymphoma Management / Surveillance Visit | Patient & Diagnosis | `stage` | Ann Arbor / Lugano Stage | `select` | Y |  |  |
| Lymphoma Management / Surveillance Visit | Patient & Diagnosis | `visitPurpose` | Visit Purpose | `select` | Y |  |  |
| Lymphoma Management / Surveillance Visit | Treatment Response Assessment | `treatmentHistory` | Treatment History | `textarea` | Y |  |  |
| Lymphoma Management / Surveillance Visit | Treatment Response Assessment | `surveillanceLabs` | Surveillance Labs & Imaging | `textarea` | Y |  |  |
| Lymphoma Management / Surveillance Visit | Plan & Late Effects | `relapseSigns` | Relapse Signs Review | `textarea` | Y |  |  |
| Lymphoma Management / Surveillance Visit | Plan & Late Effects | `plan` | Assessment & Plan | `textarea` | Y |  |  |

### Lymphoma Surveillance — `hematology_lymphoma_surveillance_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lymphoma Surveillance — Post-Treatment Survivorship | Lymphoma Diagnosis and Treatment History | `lymph_type` | Lymphoma Type | `select` |  |  |  |
| Lymphoma Surveillance — Post-Treatment Survivorship | Lymphoma Diagnosis and Treatment History | `lymph_stage` | Stage at Diagnosis (Ann Arbor / Lugano) | `select` |  |  |  |
| Lymphoma Surveillance — Post-Treatment Survivorship | Lymphoma Diagnosis and Treatment History | `lymph_treatment` | Primary Treatment Completed | `select` |  |  |  |
| Lymphoma Surveillance — Post-Treatment Survivorship | Lymphoma Diagnosis and Treatment History | `lymph_months_post_tx` | Months Since Completion of Primary Treatment | `text` |  |  |  |
| Lymphoma Surveillance — Post-Treatment Survivorship | Lymphoma Diagnosis and Treatment History | `lymph_response` | Response to Treatment | `select` |  |  |  |
| Lymphoma Surveillance — Post-Treatment Survivorship | Surveillance and Relapse Monitoring | `lymph_symptoms` | B Symptoms or Relapse Symptoms | `select` |  |  |  |
| Lymphoma Surveillance — Post-Treatment Survivorship | Surveillance and Relapse Monitoring | `lymph_lm_petct` | Surveillance Imaging (PET-CT or CT) | `select` |  |  |  |
| Lymphoma Surveillance — Post-Treatment Survivorship | Surveillance and Relapse Monitoring | `lymph_ldh` | LDH (U/L) — elevated with active lymphoma; non-specific but useful trend marker | `text` |  |  |  |
| Lymphoma Surveillance — Post-Treatment Survivorship | Surveillance and Relapse Monitoring | `lymph_cbc` | CBC Status | `select` |  |  |  |
| Lymphoma Surveillance — Post-Treatment Survivorship | Surveillance and Relapse Monitoring | `lymph_surveillance_schedule` | Recommended Surveillance Frequency | `select` |  |  |  |
| Lymphoma Surveillance — Post-Treatment Survivorship | Late Treatment Effects and Survivorship | `lymph_cardiac` | Cardiotoxicity Monitoring (anthracycline and radiation exposure) | `select` |  |  |  |
| Lymphoma Surveillance — Post-Treatment Survivorship | Late Treatment Effects and Survivorship | `lymph_secondary_cancer` | Secondary Malignancy Surveillance | `select` |  |  |  |
| Lymphoma Surveillance — Post-Treatment Survivorship | Late Treatment Effects and Survivorship | `lymph_bleomycin_lung` | Bleomycin Pulmonary Toxicity (ABVD recipients) | `select` |  |  |  |
| Lymphoma Surveillance — Post-Treatment Survivorship | Late Treatment Effects and Survivorship | `lymph_fertility` | Fertility and Gonadal Concerns | `select` |  |  |  |
| Lymphoma Surveillance — Post-Treatment Survivorship | Late Treatment Effects and Survivorship | `lymph_survivorship_notes` | Survivorship Notes — Fatigue, Neuropathy, Cognitive Changes, Psychological Impact, Return to Work | `textarea` |  |  |  |

### Pediatric ALL Treatment — `pediatrics_leukemia_induction_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric ALL — Risk Stratification, Induction, and MRD | NCI and COG Risk Stratification | `risk_group` | COG Risk Classification | `select` |  |  |  |
| Pediatric ALL — Risk Stratification, Induction, and MRD | NCI and COG Risk Stratification | `cytogenetics` | Cytogenetics and Molecular Profiling (FISH: ETV6::RUNX1 (t(12;21)) most common translocation in B-ALL (25%); TCF3::PBX1 (t(1;19)) 5%; BCR::ABL1 (t(9;22)) 3-5% pediatric ALL (Ph+); BCR::ABL1-like (Ph-like): 10-15% high-risk; JAK2 rearrangement or CRLF2; hyperdiploid >50: excellent prognosis; hypodiploidy <44: poor; CDKN2A/B deletion; IKZF1 deletion: poor response; NGS panel + RNA sequencing now standard; MRD by flow cytometry (<0.01% = MRD negative) or PCR or NGS; MRD day 29 and end consolidation drive risk assignment) | `text` |  |  |  |
| Pediatric ALL — Risk Stratification, Induction, and MRD | Induction, CNS Prophylaxis, and Maintenance | `induction` | Induction Therapy (VXLD induction: vincristine 1.5 mg/m2 (max 2 mg) IV weekly x4; dexamethasone 6 mg/m2/day x21 days (preferred over prednisone — superior CNS penetration, lower relapse rate); PEG-asparaginase 2500 IU/m2 IM x2 (Oncaspar; hypersensitivity 10%; grade 3 pancreatitis, coagulopathy, hypertriglyceridemia); daunorubicin (high-risk: 4 doses 25 mg/m2); IT (intrathecal) chemotherapy: methotrexate +/- hydrocortisone +/- ara-C; Day 8 steroid response: <1000 blasts/mm3 = good response; Day 29 BM evaluation) | `text` |  |  |  |
| Pediatric ALL — Risk Stratification, Induction, and MRD | Induction, CNS Prophylaxis, and Maintenance | `cns_maintenance` | CNS Prophylaxis and Maintenance | `select` |  |  |  |

## Scheduling

### Appointments — `appointments_cf`

Screen: 2 page(s) · 11 section(s) · 56 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `APPOINTMENT_TYPES`, `APPOINTMENT_WAITLIST`, `AUDIT_LOG`, `CALENDAR_RESOURCE_BLOCKS`, `CLINICAL_TASKS`, `ENCOUNTERS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PORTAL_CHECK_IN_QUESTIONNAIRES`, `PRACTICES`, `PROVIDERS`, `PROVIDER_AVAILABILITY_TEMPLATES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Appointment | Booking | `patientId` | Patient | `lookup` | Y |  |  |
| Appointment | Booking | `providerId` | Provider (for this appointment) | `lookup` | Y |  |  |
| Appointment | Booking | `appointmentTypeId` | Visit Type | `lookup` | Y |  |  |
| Appointment | Booking | `slotDuration` |  | `hidden` |  |  |  |
| Appointment | Booking | `scheduleGrid` | Find an open slot — set the visit type + provider above, then click a free slot (slot length = the visit type's duration) | `slotgrid` |  |  |  |
| Appointment | Booking | `status` | Status | `select` |  |  |  |
| Appointment | Booking | `startAt` | Start (YYYY-MM-DD HH:MM:SS) | `text` | Y |  |  |
| Appointment | Booking | `endAt` | End (YYYY-MM-DD HH:MM:SS) | `text` | Y |  |  |
| Appointment | Booking | `visitReason` | Visit Reason | `textarea` |  |  |  |
| Appointment | Visit Context (read-only) | `location_name` | Location | `text` |  | locationName |  |
| Appointment | Visit Context (read-only) | `room_number` | Room | `text` |  | roomNumber |  |
| Appointment | Visit Context (read-only) | `encounter_id` | Linked Encounter | `text` |  | encounterId |  |
| Appointment | Visit Context (read-only) | `eligibility_check_id` | Eligibility Check | `text` |  | eligibilityCheckId |  |
| Appointment | Visit Context (read-only) | `pre_check_in_required` | Pre-Check-In Required | `text` |  | preCheckInRequired |  |
| Appointment | Quick Demographics Edit (ECW-SC-18) | `patientPhone` | Phone (edit in-context) | `tel` |  |  |  |
| Appointment | Quick Demographics Edit (ECW-SC-18) | `patientEmail` | Email | `email` |  |  |  |
| Appointment | Quick Demographics Edit (ECW-SC-18) | `patientAddress` | Address (brief) | `text` |  |  |  |
| Appointment | Quick Demographics Edit (ECW-SC-18) | `addressValidated` | Address Validated | `checkbox` |  |  |  |
| Appointment | Quick Demographics Edit (ECW-SC-18) | `demographicsChangeNote` | Demographics Change Note | `textarea` |  |  |  |
| Appointment | ASAP / Move-Up Queue (ECW-SC-19) | `onAsapList` | On ASAP List | `checkbox` |  |  |  |
| Appointment | ASAP / Move-Up Queue (ECW-SC-19) | `asapPriority` | ASAP Priority | `select` |  |  |  |
| Appointment | ASAP / Move-Up Queue (ECW-SC-19) | `asapNote` | ASAP Note | `textarea` |  |  |  |
| Scheduling Tools | Bump / Move-Up List (ECW-SC-1) | `onBumpList` | On Bump List | `checkbox` |  |  |  |
| Scheduling Tools | Bump / Move-Up List (ECW-SC-1) | `bumpListPriority` | Bump Priority | `select` |  |  |  |
| Scheduling Tools | Bump / Move-Up List (ECW-SC-1) | `bumpListNotes` | Bump List Notes | `textarea` |  |  |  |
| Scheduling Tools | Appointment Clipboard & Prints (ECW-SC-2) | `printPatientInstructions` | Print Patient Instructions | `checkbox` |  |  |  |
| Scheduling Tools | Appointment Clipboard & Prints (ECW-SC-2) | `printEncounterForms` | Print Encounter Form (Superbill) | `checkbox` |  |  |  |
| Scheduling Tools | Appointment Clipboard & Prints (ECW-SC-2) | `printReferralSlip` | Print Referral Slip | `checkbox` |  |  |  |
| Scheduling Tools | Appointment Clipboard & Prints (ECW-SC-2) | `clipboardNote` | Clipboard / Print Notes | `textarea` |  |  |  |
| Scheduling Tools | Series Booking & Packages (ECW-SC-6) | `isSeries` | Part of Appointment Series | `checkbox` |  |  |  |
| Scheduling Tools | Series Booking & Packages (ECW-SC-6) | `seriesId` | Series ID | `text` |  |  |  |
| Scheduling Tools | Series Booking & Packages (ECW-SC-6) | `seriesSequence` | Series Sequence # | `number` |  |  |  |
| Scheduling Tools | Series Booking & Packages (ECW-SC-6) | `seriesTotal` | Total in Series | `number` |  |  |  |
| Scheduling Tools | Series Booking & Packages (ECW-SC-6) | `packageType` | Package / Program | `select` |  |  |  |
| Scheduling Tools | Series Booking & Packages (ECW-SC-6) | `waitlistPosition` | Waitlist Position | `number` |  |  |  |
| Scheduling Tools | Series Booking & Packages (ECW-SC-6) | `waitlistNotes` | Waitlist Notes | `textarea` |  |  |  |
| Scheduling Tools | Slot Format & Service Category (ECW-SC-9) | `slotFormatType` | Slot Format Type | `select` |  |  |  |
| Scheduling Tools | Slot Format & Service Category (ECW-SC-9) | `serviceCategory` | Service Category | `select` |  |  |  |
| Scheduling Tools | Slot Format & Service Category (ECW-SC-9) | `copayOverride` | Copay Override ($) | `number` |  |  |  |
| Scheduling Tools | Slot Format & Service Category (ECW-SC-9) | `visitTypeServiceMap` | Visit Type → Service Code | `text` |  |  |  |
| Scheduling Tools | Group Appointment (ECW-SC-20) | `isGroupAppointment` | Group Appointment | `checkbox` |  |  |  |
| Scheduling Tools | Group Appointment (ECW-SC-20) | `groupName` | Group / Class Name | `text` |  |  |  |
| Scheduling Tools | Group Appointment (ECW-SC-20) | `groupCapacity` | Group Capacity | `number` |  |  |  |
| Scheduling Tools | Group Appointment (ECW-SC-20) | `groupCurrentCount` | Current Enrollment | `number` |  |  |  |
| Scheduling Tools | Group Appointment (ECW-SC-20) | `reserveSlotReason` | Reserve Slot Reason | `select` |  |  |  |
| Scheduling Tools | Group Appointment (ECW-SC-20) | `bulkCopyNote` | Day-Level Bulk Copy Note | `textarea` |  |  |  |
| Scheduling Tools | Series / Constraint-Driven Slot Search (ECW-SC-21) | `constraintProvider` | Required Provider | `text` |  |  |  |
| Scheduling Tools | Series / Constraint-Driven Slot Search (ECW-SC-21) | `constraintLocation` | Required Location | `text` |  |  |  |
| Scheduling Tools | Series / Constraint-Driven Slot Search (ECW-SC-21) | `constraintDaysOfWeek` | Preferred Days | `text` |  |  |  |
| Scheduling Tools | Series / Constraint-Driven Slot Search (ECW-SC-21) | `constraintTimeWindow` | Preferred Time Window | `select` |  |  |  |
| Scheduling Tools | Series / Constraint-Driven Slot Search (ECW-SC-21) | `constraintIntervalDays` | Interval Between Slots (days) | `number` |  |  |  |
| Scheduling Tools | Series / Constraint-Driven Slot Search (ECW-SC-21) | `constraintNotes` | Constraint Notes | `textarea` |  |  |  |
| Scheduling Tools | Household / Same-Visit Booking (ECW-SC-25) | `householdGroupId` | Household Group ID | `text` |  |  |  |
| Scheduling Tools | Household / Same-Visit Booking (ECW-SC-25) | `linkedPatientIds` | Linked Patient IDs (comma-sep) | `text` |  |  |  |
| Scheduling Tools | Household / Same-Visit Booking (ECW-SC-25) | `householdBillingAggregation` | Household Billing Aggregation | `checkbox` |  |  |  |
| Scheduling Tools | Household / Same-Visit Booking (ECW-SC-25) | `householdBookingNote` | Booking Note | `textarea` |  |  |  |

### Appt Search — `appointment_search_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Appointment Search | Search Criteria | `patientSearch` | Patient | `typeahead` |  |  |  |
| Appointment Search | Search Criteria | `providerSearch` | Provider | `typeahead` |  |  |  |
| Appointment Search | Search Criteria | `dateFrom` | From Date | `date` |  |  |  |
| Appointment Search | Search Criteria | `dateTo` | To Date | `date` |  |  |  |
| Appointment Search | Search Criteria | `appointmentStatus` | Status | `select` |  |  |  |
| Appointment Search | Search Criteria | `visitType` | Visit Type | `select` |  |  |  |
| Appointment Search | Search Criteria | `location` | Location / Room | `text` |  |  |  |
| Appointment Search | Results | `resultCount` | Results Found | `number` |  |  |  |
| Appointment Search | Results | `resultSummary` | Result Summary | `textarea` |  |  |  |
| Appointment Search | Results | `selectedAppointmentId` |  | `hidden` |  |  |  |

### Availability Templates — `availability_cf`

Screen: 3 page(s) · 5 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `APPOINTMENT_WAITLIST`, `AUDIT_LOG`, `CALENDAR_RESOURCE_BLOCKS`, `ENCOUNTERS`, `PORTAL_CHECK_IN_QUESTIONNAIRES`, `PRACTICES`, `PROVIDERS`, `PROVIDER_AVAILABILITY_TEMPLATES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| 1. Build Template | Template | `name` | Template Name | `text` | Y |  |  |
| 1. Build Template | Template | `notes` | Notes | `text` |  |  |  |
| 1. Build Template | Weekly Working Hours | `template` | Paint each day's available hours (drag to select; 5-minute increments) | `availgrid` |  | template |  |
| 2. Apply to Providers | Choose a template | `applyTemplateId` | Template | `lookup` | Y | id |  |
| 2. Apply to Providers | Apply to | `applyProviders` | Providers (select one or more) | `multilookup` |  |  |  |
| 2. Apply to Providers | Apply to | `applyDate` | Start Date (week begins Sunday) | `date` |  |  |  |
| 2. Apply to Providers | Apply to | `applyWeeks` | Number of Weeks | `number` |  |  |  |
| 3. Provider Availability | Provider availability — a year ahead | `providerAvailabilityView` | Select a provider, then click any day (up to a year ahead) to view, add, edit, or remove that day's availability slots | `provideravail` |  |  |  |

### Book Appointment — `appointment_booking_cf`

Screen: 2 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `APPOINTMENT_WAITLIST`, `AUDIT_LOG`, `CALENDAR_RESOURCE_BLOCKS`, `ENCOUNTERS`, `PORTAL_CHECK_IN_QUESTIONNAIRES`, `PRACTICES`, `PROVIDER_AVAILABILITY_TEMPLATES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Choose a Slot | Open Slots | `appointmentType` | Visit type | `select` | Y |  |  |
| Choose a Slot | Open Slots | `slotFinder` | Select a slot | `slotgrid` |  |  |  |
| Appointment Details | Details | `visitReason` | Visit reason | `text` | Y |  |  |
| Appointment Details | Details | `notes` | Scheduling notes | `textarea` |  |  |  |
| Appointment Details | Details | `preCheckInRequired` | Pre check-in required | `checkbox` |  |  |  |
| Appointment Details | Details | `reminderPreferred` | Reminder preference | `select` |  |  |  |

### No-Show Management — `no_show_management_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| No-Show / Cancellation Follow-Up | Appointment | `patientId` | Patient | `typeahead` | Y |  |  |
| No-Show / Cancellation Follow-Up | Appointment | `appointmentId` | Appointment ID | `text` | Y |  |  |
| No-Show / Cancellation Follow-Up | Appointment | `appointmentDate` | Appointment Date | `date` |  |  |  |
| No-Show / Cancellation Follow-Up | Appointment | `appointmentTime` | Appointment Time | `text` |  |  |  |
| No-Show / Cancellation Follow-Up | Appointment | `provider` | Provider | `typeahead` |  |  |  |
| No-Show / Cancellation Follow-Up | Appointment | `noShowType` | Outcome Type | `select` | Y |  |  |
| No-Show / Cancellation Follow-Up | Outreach Attempt | `attemptNumber` | Attempt # | `select` |  |  |  |
| No-Show / Cancellation Follow-Up | Outreach Attempt | `contactDate` | Contact Attempt Date | `date` |  |  |  |
| No-Show / Cancellation Follow-Up | Outreach Attempt | `contactMethod` | Contact Method Used | `select` |  |  |  |
| No-Show / Cancellation Follow-Up | Outreach Attempt | `outcome` | Outreach Outcome | `select` |  |  |  |
| No-Show / Cancellation Follow-Up | Outreach Attempt | `reschedDate` | Rescheduled Date (if applicable) | `date` |  |  |  |
| No-Show / Cancellation Follow-Up | Outreach Attempt | `outreachNote` | Outreach Notes | `textarea` |  |  |  |
| No-Show / Cancellation Follow-Up | Policy Action | `policyAction` | Policy Action Applied | `select` |  |  |  |
| No-Show / Cancellation Follow-Up | Policy Action | `noShowFee` | No-Show Fee Amount ($) | `number` |  |  |  |
| No-Show / Cancellation Follow-Up | Policy Action | `dischargeLetter` | Discharge letter generated | `checkbox` |  |  |  |
| No-Show / Cancellation Follow-Up | Policy Action | `supervisorReview` | Flagged for supervisor review | `checkbox` |  |  |  |

### Patient Intake — `patient_intake_cf`

Screen: 3 page(s) · 8 section(s) · 50 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Information | Demographics | `firstName` | First Name | `text` | Y |  |  |
| Patient Information | Demographics | `lastName` | Last Name | `text` | Y |  |  |
| Patient Information | Demographics | `middleName` | Middle Name | `text` |  |  |  |
| Patient Information | Demographics | `preferredName` | Preferred Name / Goes By | `text` |  |  |  |
| Patient Information | Demographics | `dob` | Date of Birth | `date` | Y |  |  |
| Patient Information | Demographics | `sex` | Sex Assigned at Birth | `select` | Y |  |  |
| Patient Information | Demographics | `gender` | Gender Identity | `select` |  |  |  |
| Patient Information | Demographics | `pronouns` | Pronouns | `select` |  |  |  |
| Patient Information | Demographics | `ssn` | Social Security Number (last 4) | `text` |  |  |  |
| Patient Information | Demographics | `race` | Race | `select` |  |  |  |
| Patient Information | Demographics | `ethnicity` | Ethnicity | `select` |  |  |  |
| Patient Information | Demographics | `preferredLanguage` | Preferred Language | `select` |  |  |  |
| Patient Information | Demographics | `interpreterNeeded` | Medical interpreter needed | `checkbox` |  |  |  |
| Patient Information | Contact Information | `address1` | Street Address | `text` | Y |  |  |
| Patient Information | Contact Information | `address2` | Apt / Suite | `text` |  |  |  |
| Patient Information | Contact Information | `city` | City | `text` | Y |  |  |
| Patient Information | Contact Information | `state` | State | `select` | Y |  |  |
| Patient Information | Contact Information | `zip` | ZIP Code | `text` | Y |  |  |
| Patient Information | Contact Information | `homePhone` | Home Phone | `text` |  |  |  |
| Patient Information | Contact Information | `cellPhone` | Cell Phone | `text` |  |  |  |
| Patient Information | Contact Information | `email` | Email Address | `text` |  |  |  |
| Patient Information | Contact Information | `smsConsent` | Consent to receive appointment reminders by text (SMS) | `checkbox` |  |  |  |
| Patient Information | Contact Information | `portalConsent` | Consent to patient portal communications (lab results, messages) | `checkbox` |  |  |  |
| Insurance & Emergency Contact | Primary Insurance | `insuranceName` | Insurance Company | `text` | Y |  |  |
| Insurance & Emergency Contact | Primary Insurance | `insurancePlanType` | Plan Type | `select` |  |  |  |
| Insurance & Emergency Contact | Primary Insurance | `memberId` | Member ID | `text` | Y |  |  |
| Insurance & Emergency Contact | Primary Insurance | `groupNumber` | Group Number | `text` |  |  |  |
| Insurance & Emergency Contact | Primary Insurance | `subscriberName` | Subscriber Name (if not patient) | `text` |  |  |  |
| Insurance & Emergency Contact | Primary Insurance | `subscriberDob` | Subscriber Date of Birth | `date` |  |  |  |
| Insurance & Emergency Contact | Primary Insurance | `subscriberRelationship` | Subscriber Relationship to Patient | `select` |  |  |  |
| Insurance & Emergency Contact | Secondary Insurance (if applicable) | `secondInsuranceName` | Secondary Insurance | `text` |  |  |  |
| Insurance & Emergency Contact | Secondary Insurance (if applicable) | `secondMemberId` | Secondary Member ID | `text` |  |  |  |
| Insurance & Emergency Contact | Emergency Contact | `emergencyName` | Emergency Contact Name | `text` | Y |  |  |
| Insurance & Emergency Contact | Emergency Contact | `emergencyRelationship` | Relationship | `select` | Y |  |  |
| Insurance & Emergency Contact | Emergency Contact | `emergencyPhone` | Emergency Contact Phone | `text` | Y |  |  |
| Insurance & Emergency Contact | Emergency Contact | `hipaaAuthorized` | HIPAA-authorized to discuss medical information | `checkbox` |  |  |  |
| Medical History | Medical History | `chiefComplaint` | Reason for Visit Today | `textarea` | Y |  |  |
| Medical History | Medical History | `pmhConditions` | Medical Conditions (list all) | `textarea` |  |  |  |
| Medical History | Medical History | `surgicalHistory` | Surgical History | `textarea` |  |  |  |
| Medical History | Medical History | `hospitalizations` | Hospitalizations (past 5 years) | `textarea` |  |  |  |
| Medical History | Medical History | `familyHistory` | Family Medical History | `textarea` |  |  |  |
| Medical History | Current Medications & Allergies | `currentMedications` | Current Medications (name, dose, frequency) | `textarea` | Y |  |  |
| Medical History | Current Medications & Allergies | `otcSupplements` | OTC Medications & Supplements | `textarea` |  |  |  |
| Medical History | Current Medications & Allergies | `drugAllergies` | Drug Allergies (drug + reaction) | `textarea` | Y |  |  |
| Medical History | Current Medications & Allergies | `otherAllergies` | Environmental / Food Allergies | `textarea` |  |  |  |
| Medical History | Social History | `smokingStatus` | Tobacco / Smoking Status | `select` |  |  |  |
| Medical History | Social History | `alcoholUse` | Alcohol Use | `select` |  |  |  |
| Medical History | Social History | `illicitDrugs` | Illicit Drug / Substance Use | `select` |  |  |  |
| Medical History | Social History | `employmentStatus` | Employment Status | `select` |  |  |  |
| Medical History | Social History | `livingSituation` | Living Situation | `select` |  |  |  |

### Provider Calendar — `provider_calendar_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Provider Calendar | Weekly Schedule | `providerId` |  | `hidden` |  | id |  |
| Provider Calendar | Weekly Schedule | `cal` | Provider Week | `providercal` |  |  |  |

### Recall List — `recall_list_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Patient Recall & Overdue Care | Recall Filter | `recallType` | Recall Reason | `select` | Y |  |  |
| Patient Recall & Overdue Care | Recall Filter | `recallProvider` | Provider Filter | `typeahead` |  |  |  |
| Patient Recall & Overdue Care | Recall Filter | `overdueDays` | Overdue By | `select` |  |  |  |
| Patient Recall & Overdue Care | Recall Filter | `recallDx` | Diagnosis Filter | `typeahead` |  |  |  |
| Patient Recall & Overdue Care | Recall Filter | `insuranceFilter` | Insurance/Payer Filter | `text` |  |  |  |
| Patient Recall & Overdue Care | Recall Results | `recallPatientId` | Add Single Patient to Recall | `typeahead` |  |  |  |
| Patient Recall & Overdue Care | Recall Results | `contactMethod` | Contact Method for Outreach | `select` |  |  |  |
| Patient Recall & Overdue Care | Recall Results | `recallNote` | Recall Message / Notes | `textarea` |  |  |  |
| Patient Recall & Overdue Care | Recall Action | `actionType` | Action on List | `select` |  |  |  |
| Patient Recall & Overdue Care | Recall Action | `assignedStaff` | Assign to Staff | `typeahead` |  |  |  |
| Patient Recall & Overdue Care | Recall Action | `dueDate` | Complete By Date | `date` |  |  |  |

### Schedule Enhancements — `schedule_enhancements_cf`

Screen: 1 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB MISSING

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Scheduling Rules | Appointment Slots | `defaultDuration` | Default slot duration (min) | `number` |  |  |  |
| Scheduling Rules | Appointment Slots | `bufferTime` | Buffer time between appts (min) | `number` |  |  |  |
| Scheduling Rules | Appointment Slots | `overbookLimit` | Max overbook per slot | `number` |  |  |  |
| Scheduling Rules | Appointment Slots | `allowSameDay` | Allow same-day scheduling | `checkbox` |  |  |  |
| Scheduling Rules | Resource Rules | `enableWaitlist` | Enable waitlist | `checkbox` |  |  |  |
| Scheduling Rules | Resource Rules | `waitlistCapacity` | Waitlist max slots | `number` |  |  |  |
| Scheduling Rules | Resource Rules | `reminderLeadDays` | Reminder lead (days) | `number` |  |  |  |
| Scheduling Rules | Resource Rules | `cancellationHours` | Cancellation cutoff (hours) | `number` |  |  |  |

### Slot Config — `schedule_slot_config_cf`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `ENCOUNTERS`, `PATIENTS`, `PROVIDERS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Slot Config | Slot Configuration | `appointment_type` | Appointment Type | `text` | Y |  |  |
| Slot Config | Slot Configuration | `duration_minutes` | Duration (minutes) | `number` | Y |  |  |
| Slot Config | Slot Configuration | `buffer_minutes` | Buffer (minutes) | `number` |  |  |  |
| Slot Config | Slot Configuration | `max_per_day` | Max Per Day | `number` |  |  |  |
| Slot Config | Slot Configuration | `instructions` | Patient Instructions | `textarea` |  |  |  |
| Slot Config | Slot Configuration | `is_active` | Active | `checkbox` |  |  |  |

### Telehealth Intake — `telehealth_intake_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Telehealth Visit Setup & Consent | Visit Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Telehealth Visit Setup & Consent | Visit Context | `appointmentId` | Appointment ID | `text` | Y |  |  |
| Telehealth Visit Setup & Consent | Visit Context | `provider` | Provider | `typeahead` | Y |  |  |
| Telehealth Visit Setup & Consent | Visit Context | `visitDate` | Visit Date | `date` | Y |  |  |
| Telehealth Visit Setup & Consent | Visit Context | `visitTime` | Visit Time | `text` | Y |  |  |
| Telehealth Visit Setup & Consent | Visit Context | `platform` | Telehealth Platform | `select` |  |  |  |
| Telehealth Visit Setup & Consent | Telehealth Consent | `consentObtained` | Verbal consent for telehealth visit obtained | `checkbox` | Y |  |  |
| Telehealth Visit Setup & Consent | Telehealth Consent | `consentDate` | Consent Date | `date` |  |  |  |
| Telehealth Visit Setup & Consent | Telehealth Consent | `patientLocation` | Patient Location During Visit (state/city) | `text` | Y |  |  |
| Telehealth Visit Setup & Consent | Telehealth Consent | `patientState` | Patient State | `select` |  |  |  |
| Telehealth Visit Setup & Consent | Telehealth Consent | `providerLicensedInState` | Provider licensed in patient's state (confirmed) | `checkbox` |  |  |  |
| Telehealth Visit Setup & Consent | Telehealth Consent | `emergencyContact` | Emergency Contact & Phone (patient provided) | `text` |  |  |  |
| Telehealth Visit Setup & Consent | Technical Setup | `videoQuality` | Video Quality | `select` |  |  |  |
| Telehealth Visit Setup & Consent | Technical Setup | `technicalIssues` | Technical Issues Noted | `textarea` |  |  |  |
| Telehealth Visit Setup & Consent | Technical Setup | `visitCompleted` | Visit Status | `select` |  |  |  |

### Waitlist — `waitlist_cf`

Screen: 1 page(s) · 6 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Waitlist Entry | Patient & Request | `patientId` | Patient | `lookup` | Y |  |  |
| Waitlist Entry | Patient & Request | `appointmentType` | Appointment Type | `text` |  |  |  |
| Waitlist Entry | Patient & Request | `urgency` | Urgency | `select` |  |  |  |
| Waitlist Entry | Patient & Request | `providerId` | Preferred Provider | `lookup` |  |  |  |
| Waitlist Entry | Patient & Request | `reason` | Reason / Chief Complaint | `textarea` |  |  |  |
| Waitlist Entry | Availability Preferences | `earliestAvailable` | Earliest Available Date | `date` |  |  |  |
| Waitlist Entry | Availability Preferences | `preferredDays` | Preferred Days | `text` |  |  |  |
| Waitlist Entry | Availability Preferences | `preferredTimeFrom` | Preferred From | `text` |  |  |  |
| Waitlist Entry | Availability Preferences | `preferredTimeTo` | Preferred To | `text` |  |  |  |
| Waitlist Entry | Contact History | `contactAttempts` | Contact Attempts | `number` |  |  |  |
| Waitlist Entry | Contact History | `lastContactDate` | Last Contact | `date` |  |  |  |
| Waitlist Entry | Contact History | `lastContactMethod` | Method | `text` |  |  |  |
| Waitlist Entry | Slot Offer | `offeredSlot` | Offered Slot | `datetime-local` |  |  |  |
| Waitlist Entry | Slot Offer | `offerExpiry` | Offer Expires | `date` |  |  |  |
| Waitlist Entry | Slot Offer | `offerDate` | Offer Date | `date` |  |  |  |
| Waitlist Entry | Outcome | `response` | Response | `text` |  |  |  |
| Waitlist Entry | Outcome | `responseDate` | Response Date | `date` |  |  |  |
| Waitlist Entry | Outcome | `bookedDate` | Booked Date | `date` |  |  |  |
| Waitlist Entry | Outcome | `bookedAppointmentId` | Booked Appointment ID | `text` |  |  |  |
| Waitlist Entry | Outcome | `removedReason` | Removed Reason | `text` |  |  |  |
| Waitlist Entry | Notes | `notes` | Notes | `textarea` |  |  |  |

## Orthopedics

### Fracture Clinic — `fracture_clinic_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Fracture Clinic Follow-up | Fracture Details | `fracture_location` | Fracture Location (bone and segment) | `text` |  |  |  |
| Fracture Clinic Follow-up | Fracture Details | `side` | Side | `select` |  |  |  |
| Fracture Clinic Follow-up | Fracture Details | `fracture_type` | Fracture Type | `select` |  |  |  |
| Fracture Clinic Follow-up | Fracture Details | `injury_date` | Injury Date | `date` |  |  |  |
| Fracture Clinic Follow-up | Fracture Details | `treatment` | Initial Treatment | `select` |  |  |  |
| Fracture Clinic Follow-up | Healing Assessment | `xray_today` | X-ray obtained today | `checkbox` |  |  |  |
| Fracture Clinic Follow-up | Healing Assessment | `healing_stage` | Radiographic Healing | `select` |  |  |  |
| Fracture Clinic Follow-up | Healing Assessment | `hardware_intact` | Hardware (if applicable) | `select` |  |  |  |
| Fracture Clinic Follow-up | Healing Assessment | `weight_bearing_status` | Weight-Bearing Status | `select` |  |  |  |
| Fracture Clinic Follow-up | Plan | `next_step` | Next Step | `select` |  |  |  |
| Fracture Clinic Follow-up | Plan | `notes` | Notes | `textarea` |  |  |  |

### Hip Fracture — `orthopedics_hip_fracture_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hip Fracture — Classification, Surgery, and Perioperative Care | Fracture Classification and Surgical Options | `hf_f1` | Hip Fracture Evaluation: EPIDEMIOLOGY (300000 HIP FRACTURES ANNUALLY US; INCIDENCE DOUBLING Every 10Y; FEMALE 2:1; CAUCASIAN AND ASIAN Higher; MORTALITY 20-30 pct At 1 YEAR Post-Hip-Fracture Major Challenge; 50 pct Return Prior Level Function Only; RISK FACTORS Osteoporosis; Age Over 65; Female Postmenopausal; Low Body Weight; Sedentary; Alcohol Tobacco; Fall Risk Poor Balance Gait; Medications: Steroids Anticonvulsants PPI Diuretics Sedatives; CLASSIFICATION BY LOCATION: FEMORAL NECK INTRACAPSULAR (GARDEN CLASSIFICATION: GARDEN I Incomplete Impacted Valgus; GARDEN II Complete Non-Displaced; GARDEN III Complete Partial Displacement Disrupted Trabeculae; GARDEN IV Complete Full Displacement; GARDEN I-II NON-DISPLACED: Conservative IF Young Active: Internal Fixation 3 Cannulated Screws; GARDEN III-IV DISPLACED: HEMIARTHROPLASTY Or TOTAL HIP THA; AGE UNDER 65 ACTIVE Attempt Reduction And Fixation Preserve Native Head; OVER 65 DISPLACED = ARTHROPLASTY Standard; AVASCULAR NECROSIS AVN RISK Displaced 30 pct; Fixation Failure 30 pct; NONUNION 10 pct; AVN HIGHER Garden III-IV Due Disrupted Blood Supply Medial Femoral Circumflex; INTERTROCHANTERIC EXTRACAPSULAR (AO CLASSIFICATION 31A1-31A3; 31A1 STABLE Single Lesser Trochanter; 31A2 UNSTABLE Posteromedial Comminution; 31A3 REVERSE OBLIQUE Lateral Cortex Break; TREATMENT INTRAMEDULLARY NAIL PREFERRED (TFNA Trochanteric Femoral Nail Advanced; Gamma Nail; CMN Cephalomedullary Nail; SLIDING HIP SCREW Older Stable Only; DHS Dynamic Hip Screw 31A1 Stable; SUBTROCHANTERIC FRACTURES BELOW LESSER TROCHANTER IM Nail Extended; FEMORAL SHAFT Femoral IM Nail; TIMING SURGERY Early Within 48H Reduces Mortality Complications; 24-48H Optimal After Medical Optimization; DELAY If Medical Unstable Anticoagulation Reversal; British Guidelines 36H Target) | `text` |  |  |  |
| Hip Fracture — Classification, Surgery, and Perioperative Care | Fracture Classification and Surgical Options | `hf_f2` | Perioperative Management and Osteoporosis Prevention | `select` |  |  |  |

### Hip Replacement Pre-Op — `hip_replacement_preop_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hip Replacement Pre-Op | Hip Assessment | `diagnosis` | Primary Diagnosis | `select` |  |  |  |
| Hip Replacement Pre-Op | Hip Assessment | `side` | Side | `select` |  |  |  |
| Hip Replacement Pre-Op | Hip Assessment | `harris_hip_score` | Harris Hip Score (pre-op) | `number` |  |  |  |
| Hip Replacement Pre-Op | Hip Assessment | `pain_vas` | Pain VAS (0-10) | `number` |  |  |  |
| Hip Replacement Pre-Op | Implant Planning | `approach` | Surgical Approach | `select` |  |  |  |
| Hip Replacement Pre-Op | Implant Planning | `bearing_surface` | Bearing Surface | `select` |  |  |  |
| Hip Replacement Pre-Op | Implant Planning | `fixation` | Fixation | `select` |  |  |  |
| Hip Replacement Pre-Op | Implant Planning | `templating_done` | Pre-op digital templating complete | `checkbox` |  |  |  |
| Hip Replacement Pre-Op | VTE Prophylaxis Plan | `vte_agent` | VTE Agent | `select` |  |  |  |
| Hip Replacement Pre-Op | VTE Prophylaxis Plan | `consent_signed` | Informed consent obtained | `checkbox` |  |  |  |
| Hip Replacement Pre-Op | VTE Prophylaxis Plan | `notes` | Notes | `textarea` |  |  |  |

### Joint Arthroplasty — `orthopedics_joint_arthroplasty_cf`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Total Joint Arthroplasty: Perioperative and Postoperative Management | Preoperative Assessment and Optimization | `tja_procedure` | Procedure Type | `select` |  |  |  |
| Total Joint Arthroplasty: Perioperative and Postoperative Management | Preoperative Assessment and Optimization | `tja_preop_optimization` | Preoperative Medical Optimization | `select` |  |  |  |
| Total Joint Arthroplasty: Perioperative and Postoperative Management | Preoperative Assessment and Optimization | `tja_implant_medications` | Medication Management Perioperatively | `select` |  |  |  |
| Total Joint Arthroplasty: Perioperative and Postoperative Management | Preoperative Assessment and Optimization | `tja_anesthesia` | Anesthesia and Regional Block | `select` |  |  |  |
| Total Joint Arthroplasty: Perioperative and Postoperative Management | Postoperative Management and Rehabilitation | `tja_vte_prophylaxis` | VTE Prophylaxis Protocol | `select` |  |  |  |
| Total Joint Arthroplasty: Perioperative and Postoperative Management | Postoperative Management and Rehabilitation | `tja_blood_management` | Blood Loss and Transfusion Management | `select` |  |  |  |
| Total Joint Arthroplasty: Perioperative and Postoperative Management | Postoperative Management and Rehabilitation | `tja_pain` | Multimodal Pain Management (ERAS Protocol) | `select` |  |  |  |
| Total Joint Arthroplasty: Perioperative and Postoperative Management | Postoperative Management and Rehabilitation | `tja_dislocation` | THA Dislocation Precautions (Posterior Approach) | `select` |  |  |  |
| Total Joint Arthroplasty: Perioperative and Postoperative Management | Postoperative Management and Rehabilitation | `tja_rehab` | Rehabilitation Progression | `select` |  |  |  |
| Total Joint Arthroplasty: Perioperative and Postoperative Management | Postoperative Management and Rehabilitation | `tja_periprosthetic_infection` | Periprosthetic Joint Infection (PJI) Screening | `select` |  |  |  |
| Total Joint Arthroplasty: Perioperative and Postoperative Management | Postoperative Management and Rehabilitation | `tja_notes` | Joint Arthroplasty Perioperative Notes and Orthopedic/PT/Anesthesia Care Plan | `textarea` |  |  |  |

### Joint Injection — `joint_injection_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Joint / Bursa Injection | Procedure Details | `injection_site` | Injection Site | `select` |  |  |  |
| Joint / Bursa Injection | Procedure Details | `laterality` | Laterality | `select` |  |  |  |
| Joint / Bursa Injection | Procedure Details | `guided` | Guidance | `select` |  |  |  |
| Joint / Bursa Injection | Procedure Details | `aspiration_performed` | Aspiration performed | `checkbox` |  |  |  |
| Joint / Bursa Injection | Procedure Details | `fluid_appearance` | Fluid Appearance (if aspirated) | `select` |  |  |  |
| Joint / Bursa Injection | Procedure Details | `fluid_cc` | Volume Aspirated (mL) | `number` |  |  |  |
| Joint / Bursa Injection | Injection Details | `agent` | Injected Agent | `select` |  |  |  |
| Joint / Bursa Injection | Injection Details | `agent_dose` | Agent and Volume Injected | `text` |  |  |  |
| Joint / Bursa Injection | Injection Details | `pre_injection_pain` | Pre-Injection Pain (0-10) | `number` |  |  |  |
| Joint / Bursa Injection | Injection Details | `post_injection_pain` | Post-Injection Pain (0-10) | `number` |  |  |  |
| Joint / Bursa Injection | Post-Procedure Instructions | `activity_restriction` | Activity Restriction / Weight-Bearing Status | `text` |  |  |  |
| Joint / Bursa Injection | Post-Procedure Instructions | `follow_up_weeks` | Follow-Up in (weeks) | `number` |  |  |  |
| Joint / Bursa Injection | Post-Procedure Instructions | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Knee Arthroscopy Pre-Op — `knee_arthroscopy_preop_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Knee Arthroscopy Pre-Op | Surgical Indication | `diagnosis` | Primary Diagnosis | `select` |  |  |  |
| Knee Arthroscopy Pre-Op | Surgical Indication | `side` | Side | `select` |  |  |  |
| Knee Arthroscopy Pre-Op | Surgical Indication | `conservative_failed` | Conservative management failed (>3 months) | `checkbox` |  |  |  |
| Knee Arthroscopy Pre-Op | Surgical Indication | `mri_confirmed` | MRI findings confirm surgical indication | `checkbox` |  |  |  |
| Knee Arthroscopy Pre-Op | Planned Procedure | `procedure` | Planned Procedure | `select` |  |  |  |
| Knee Arthroscopy Pre-Op | Planned Procedure | `graft_type` | Graft Type (if ACL) | `select` |  |  |  |
| Knee Arthroscopy Pre-Op | Planned Procedure | `anesthesia_type` | Anesthesia Type | `select` |  |  |  |
| Knee Arthroscopy Pre-Op | Planned Procedure | `outpatient` | Outpatient procedure (same-day discharge) | `checkbox` |  |  |  |
| Knee Arthroscopy Pre-Op | Pre-Op Checklist | `consent_signed` | Informed consent obtained and documented | `checkbox` |  |  |  |
| Knee Arthroscopy Pre-Op | Pre-Op Checklist | `hb_a1c_ok` | HbA1c <8% if diabetic (or N/A) | `checkbox` |  |  |  |
| Knee Arthroscopy Pre-Op | Pre-Op Checklist | `anticoag_plan` | Anticoagulation Plan | `select` |  |  |  |
| Knee Arthroscopy Pre-Op | Pre-Op Checklist | `notes` | Pre-Op Notes | `textarea` |  |  |  |
