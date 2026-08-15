---
title: "PracticeForceOneCFTrackingFields31"
---

# CF Tracking — Field-Level Detail (part 31 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Behavioral Health**, **Critical Care**, **Emergency Medicine**, **Internal Medicine**, **Primary Care**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Behavioral Health

### Schizophrenia Mgmt — `behavioral_health_schizophrenia_spectrum_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Schizophrenia Spectrum Disorder Management | Diagnosis and Phase | `diagnosis` | Schizophrenia Spectrum Diagnosis (DSM-5) | `select` |  |  |  |
| Schizophrenia Spectrum Disorder Management | Diagnosis and Phase | `illness_phase` | Illness Phase | `select` |  |  |  |
| Schizophrenia Spectrum Disorder Management | Symptom Assessment | `positive_symptoms` | Positive Symptoms (hallucinations: type, frequency, command vs. non-command; delusions: type, conviction; disorganized speech/behavior) | `textarea` |  |  |  |
| Schizophrenia Spectrum Disorder Management | Symptom Assessment | `negative_symptoms` | Negative Symptoms (flat affect, alogia, avolition, anhedonia, asociality — harder to treat; functional impairment) | `textarea` |  |  |  |
| Schizophrenia Spectrum Disorder Management | Symptom Assessment | `panss_or_bprs` | PANSS or BPRS Score (symptom severity tracking — positive, negative, general subscales) | `text` |  |  |  |
| Schizophrenia Spectrum Disorder Management | Antipsychotic Management | `current_antipsychotic` | Current Antipsychotic(s), Dose, Duration, Formulation (oral vs. LAI) | `text` |  |  |  |
| Schizophrenia Spectrum Disorder Management | Antipsychotic Management | `lai_consideration` | Long-Acting Injectable (LAI) Antipsychotic Status | `select` |  |  |  |
| Schizophrenia Spectrum Disorder Management | Antipsychotic Management | `monitoring` | Metabolic Monitoring (weight, BMI, waist, glucose, lipids q3-6 months; prolactin if symptomatic; EKG if QTc concern) | `textarea` |  |  |  |
| Schizophrenia Spectrum Disorder Management | Antipsychotic Management | `clozapine` | Clozapine initiated or maintained (treatment-resistant; REMS enrollment; ANC monitoring per protocol; agranulocytosis risk 1-2%) | `checkbox` |  |  |  |

### Substance Use — `substance_use_disorder_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Substance Use Disorder Assessment | Substance Use Screening | `primary_substance` | Primary Substance | `select` |  |  |  |
| Substance Use Disorder Assessment | Substance Use Screening | `dast_10` | DAST-10 Score (drug use, 0-10) | `number` |  |  |  |
| Substance Use Disorder Assessment | Substance Use Screening | `audit_score` | AUDIT Score (alcohol, 0-40) | `number` |  |  |  |
| Substance Use Disorder Assessment | Substance Use Screening | `opioid_use_disorder` | Opioid Use Disorder (OUD) diagnosis met (DSM-5) | `checkbox` |  |  |  |
| Substance Use Disorder Assessment | Treatment Status | `moud` | Medication for OUD (MOUD) | `select` |  |  |  |
| Substance Use Disorder Assessment | Treatment Status | `maud` | Medication for AUD (MAUD) | `select` |  |  |  |
| Substance Use Disorder Assessment | Treatment Status | `behavioral_program` | Behavioral Treatment | `select` |  |  |  |
| Substance Use Disorder Assessment | Treatment Status | `naloxone_prescribed` | Naloxone (Narcan) prescribed and patient trained | `checkbox` |  |  |  |
| Substance Use Disorder Assessment | Treatment Status | `sobriety_duration` | Duration of Sobriety / Abstinence (if applicable) | `text` |  |  |  |
| Substance Use Disorder Assessment | Treatment Status | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Trauma Assessment — `behavioral_health_trauma_cf`

Screen: 1 page(s) · 4 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Trauma-Informed Assessment (PTSD / Complex Trauma) | Trauma History (Trauma-Informed — Avoid Re-Traumatization) | `trauma_types` | Trauma Types Disclosed (combat, sexual assault, childhood abuse/neglect, intimate partner violence, motor vehicle accident, natural disaster, medical trauma, witnessing violence) | `textarea` |  |  |  |
| Trauma-Informed Assessment (PTSD / Complex Trauma) | Trauma History (Trauma-Informed — Avoid Re-Traumatization) | `index_trauma_age` | Age at Index Trauma and Duration (childhood ACEs vs. adult single-event vs. repeated/complex trauma) | `text` |  |  |  |
| Trauma-Informed Assessment (PTSD / Complex Trauma) | Trauma History (Trauma-Informed — Avoid Re-Traumatization) | `prior_treatment` | Prior Trauma-Focused Treatment and Response (CPT, EMDR, PE, TF-CBT, DBT) | `text` |  |  |  |
| Trauma-Informed Assessment (PTSD / Complex Trauma) | PCL-5 (PTSD Checklist) Assessment | `pcl5_total` | PCL-5 Total Score (0-80; >= 33 = probable PTSD; use also to track treatment response) | `number` |  |  |  |
| Trauma-Informed Assessment (PTSD / Complex Trauma) | PCL-5 (PTSD Checklist) Assessment | `criterion_b` | Criterion B Score (Intrusion — items 1-5; flashbacks, nightmares) | `number` |  |  |  |
| Trauma-Informed Assessment (PTSD / Complex Trauma) | PCL-5 (PTSD Checklist) Assessment | `criterion_c` | Criterion C Score (Avoidance — items 6-7) | `number` |  |  |  |
| Trauma-Informed Assessment (PTSD / Complex Trauma) | PCL-5 (PTSD Checklist) Assessment | `criterion_d` | Criterion D Score (Negative mood — items 8-14; emotional numbing, distorted beliefs) | `number` |  |  |  |
| Trauma-Informed Assessment (PTSD / Complex Trauma) | PCL-5 (PTSD Checklist) Assessment | `criterion_e` | Criterion E Score (Hyperarousal — items 15-20; hypervigilance, startle, sleep disturbance) | `number` |  |  |  |
| Trauma-Informed Assessment (PTSD / Complex Trauma) | Functional Impact and Safety | `functional_areas` | Functional Impairment (work/school, relationships, daily activities; avoidance affecting quality of life) | `textarea` |  |  |  |
| Trauma-Informed Assessment (PTSD / Complex Trauma) | Functional Impact and Safety | `dissociation` | Dissociative Symptoms (DES-II or clinical assessment) | `select` |  |  |  |
| Trauma-Informed Assessment (PTSD / Complex Trauma) | Functional Impact and Safety | `safety_plan` | Safety plan reviewed / updated (suicidality co-occurs in ~50% of PTSD; always screen — Columbia CSSRS) | `checkbox` |  |  |  |
| Trauma-Informed Assessment (PTSD / Complex Trauma) | Treatment Plan | `evidence_based_therapy` | Evidence-Based Therapy Initiated | `select` |  |  |  |
| Trauma-Informed Assessment (PTSD / Complex Trauma) | Treatment Plan | `pharmacotherapy` | Pharmacotherapy (sertraline or paroxetine FDA-approved; prazosin for nightmares; venlafaxine second-line; avoid benzodiazepines) | `text` |  |  |  |

## Critical Care

### AKI / CRRT — `icu_aki_renal_replacement_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| AKI and Renal Replacement Therapy | AKI Staging (KDIGO) | `stage` | KDIGO AKI Stage | `select` |  |  |  |
| AKI and Renal Replacement Therapy | AKI Staging (KDIGO) | `baseline_cr` | Baseline Creatinine (mg/dL) | `number` |  |  |  |
| AKI and Renal Replacement Therapy | AKI Staging (KDIGO) | `current_cr` | Current Creatinine (mg/dL) | `number` |  |  |  |
| AKI and Renal Replacement Therapy | AKI Staging (KDIGO) | `urine_output_6hr` | Urine Output Last 6 Hours (mL) | `number` |  |  |  |
| AKI and Renal Replacement Therapy | AKI Staging (KDIGO) | `aki_etiology` | Likely AKI Etiology | `select` |  |  |  |
| AKI and Renal Replacement Therapy | RRT Indications (AEIOU Mnemonic) | `acidosis` | Acidosis (pH <7.1 or HCO3 <15 refractory to other measures) | `checkbox` |  |  |  |
| AKI and Renal Replacement Therapy | RRT Indications (AEIOU Mnemonic) | `electrolytes` | Electrolytes (K+ >6.5 or refractory hyperkalemia) | `checkbox` |  |  |  |
| AKI and Renal Replacement Therapy | RRT Indications (AEIOU Mnemonic) | `intoxication` | Intoxication (dialyzable substance: methanol / ethylene glycol / salicylates / lithium) | `checkbox` |  |  |  |
| AKI and Renal Replacement Therapy | RRT Indications (AEIOU Mnemonic) | `overload` | Volume overload (pulmonary edema refractory to diuretics) | `checkbox` |  |  |  |
| AKI and Renal Replacement Therapy | RRT Indications (AEIOU Mnemonic) | `uremia` | Uremia (BUN >100 / encephalopathy / pericarditis / coagulopathy) | `checkbox` |  |  |  |
| AKI and Renal Replacement Therapy | CRRT Settings (if active) | `modality` | CRRT Modality | `select` |  |  |  |
| AKI and Renal Replacement Therapy | CRRT Settings (if active) | `effluent_dose` | Effluent Dose (mL/kg/hr — target ≥25 for AKI; RENAL trial) | `number` |  |  |  |
| AKI and Renal Replacement Therapy | CRRT Settings (if active) | `net_fluid_removal` | Net Fluid Removal Goal (mL/hr) | `number` |  |  |  |
| AKI and Renal Replacement Therapy | CRRT Settings (if active) | `anticoagulation` | Anticoagulation Strategy | `select` |  |  |  |
| AKI and Renal Replacement Therapy | CRRT Settings (if active) | `filter_type` | Filter Type and Blood Flow Rate (mL/min) | `text` |  |  |  |

### AKI in ICU (CRRT/IHD) — `critical_care_aki_management_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ICU AKI — KDIGO Staging, CRRT, and Drug Dosing | KDIGO Staging and Etiology | `kdigo` | KDIGO AKI Staging 2012 (KDIGO AKI STAGING: based on creatinine rise OR urine output; STAGE 1: Cr x1.5-1.9 baseline within 7 days OR >=0.3 mg/dL rise within 48h; UO <0.5 mL/kg/h x6-12h; STAGE 2: Cr x2.0-2.9 baseline; UO <0.5 mL/kg/h >=12h; STAGE 3: Cr x3 OR >=4 mg/dL OR initiation of RRT; UO <0.3 mL/kg/h >=24h or anuria >=12h; ETIOLOGY IN ICU: PRE-RENAL: hypovolemia, cardiac failure, hepatorenal; INTRINSIC: ATN (ischemic - most common in ICU; nephrotoxic - aminoglycosides, amphotericin, cisplatin, IV contrast, NSAIDs, vancomycin); AIN (drug-induced: PPIs, antibiotics; ANCA vasculitis); pigment nephropathy (myoglobin, hemoglobin); POSTRENAL: obstructive (uncommon in ICU); DIAGNOSIS: urine microscopy (muddy brown casts = ATN; RBC casts = GN; granular casts); urine sodium: FENa <1% = pre-renal; FENa >2% = ATN (unreliable with diuretics: use FEurea <35% = pre-renal); BIOMARKERS: NGAL, KIM-1, cystatin C: earlier markers; not universally used; renal recovery window; CONTRAST-ASSOCIATED AKI (CA-AKI): Cr rise >=0.3 mg/dL or 25% above baseline within 48h of contrast; RISK: CKD (eGFR <45), DM, HF, volume depletion, nephrotoxins | `text` |  |  |  |
| ICU AKI — KDIGO Staging, CRRT, and Drug Dosing | KDIGO Staging and Etiology | `prevention` | CA-AKI Prevention and Fluid Strategy | `select` |  |  |  |
| ICU AKI — KDIGO Staging, CRRT, and Drug Dosing | Renal Replacement Therapy and Drug Dosing | `rrt_selection` | CRRT vs. IHD Selection (CRRT (continuous RRT): preferred for hemodynamically unstable ICU patients; slower fluid removal; continuous solute clearance; modalities: CVVH (hemofiltration; convective), CVVHD (hemodialysis; diffusive), CVVHDF (both); DOSE: EFSAC 2016 + ATN trial: 20-25 mL/kg/h effluent = adequate; higher dose (35-40 mL/kg/h) no benefit (ATN, RENAL trials); ANTICOAGULATION: citrate regional (preferred; chelates calcium; circuit anticoagulation only; no systemic effect; monitor ionized calcium); or heparin (unfractionated; APTT 45-65s; avoid with active bleeding); MEMBRANE: high-flux AN69 membranes; standard; IHD (intermittent hemodialysis): hemodynamically stable patients; 3-4 hours; 3x/week; more efficient for rapid correction (hyperkalemia, pulmonary edema, severe metabolic acidosis); SLED/SLEDD (sustained low-efficiency dialysis): hemodynamically better tolerated than IHD; 6-12 hours sessions; transitions to IHD; INITIATION TIMING: STARRT-AKI trial (early vs. standard): no 90-day mortality benefit; no benefit from early initiation; AKI may resolve spontaneously; initiate RRT for: refractory volume overload, hyperkalemia >6.5, metabolic acidosis pH <7.15, uremia (encephalopathy, pericarditis, bleeding) | `text` |  |  |  |
| ICU AKI — KDIGO Staging, CRRT, and Drug Dosing | Renal Replacement Therapy and Drug Dosing | `drug_dosing` | Drug Dosing in AKI and on CRRT | `select` |  |  |  |

### ARDS / Lung-Protective Vent — `critical_care_ards_management_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ARDS — Lung-Protective Ventilation and Adjunct Therapies | Berlin Classification and Severity | `pf_ratio` | P/F Ratio (PaO2/FiO2; Berlin definition: Mild 200-300, Moderate 100-200, Severe <100; measured on PEEP ≥5 cmH2O; onset within 1 week of known insult or new/worsening respiratory symptoms; bilateral opacities on CXR or CT not explained by effusion/collapse/nodules; not fully explained by cardiac failure) | `number` |  |  |  |
| ARDS — Lung-Protective Ventilation and Adjunct Therapies | Berlin Classification and Severity | `ards_severity` | ARDS Severity Category | `select` |  |  |  |
| ARDS — Lung-Protective Ventilation and Adjunct Therapies | Lung-Protective Ventilation (ARDSNet) | `tv_setting` | Tidal Volume Target (mL/kg IBW; ARDSNet: 6 mL/kg IBW; start at 8 mL/kg and reduce by 1 mL/kg q2h; goal: plateau pressure ≤30 cmH2O; driving pressure DP = Pplat - PEEP ≤15 cmH2O; lung stress and strain; monitor plateau pressure every 4-8 hours; prone: TV may be reduced further) | `number` |  |  |  |
| ARDS — Lung-Protective Ventilation and Adjunct Therapies | Lung-Protective Ventilation (ARDSNet) | `peep_strategy` | PEEP Strategy | `select` |  |  |  |
| ARDS — Lung-Protective Ventilation and Adjunct Therapies | Adjunct and Rescue Therapies | `rescue_therapy` | Rescue Therapy (Refractory ARDS P/F <80) | `select` |  |  |  |

### ARDS / Mech Vent — `critical_care_ards_mechanical_ventilation_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ARDS and Mechanical Ventilation | Definition, Diagnosis, and Ventilator Strategy | `ards_f1` | ARDS Definition and Diagnosis: BERLIN DEFINITION (2012): 1. TIMING (Within 1W Known Insult Or New/Worsening Respiratory Symptoms); 2. CHEST IMAGING (Bilateral Opacities Not Explained By Effusions Atelectasis Nodules; CXR Or CT); 3. ORIGIN OF EDEMA (Not Fully Explained By Cardiac Failure Or Fluid Overload; Echo If No Risk Factor; Requires Objective Assessment); 4. OXYGENATION (P:F Ratio With PEEP Or CPAP Over 5 cmH2O; MILD P:F 201-300; MODERATE P:F 101-200; SEVERE P:F Under 100); ETIOLOGY (Direct: Pneumonia Aspiration Pulmonary Contusion Inhalation; Indirect: Sepsis Shock Pancreatitis Transfusion TRALI Trauma Burns; MOST COMMON CAUSE SEPSIS 40 pct Then Pneumonia); PATHOPHYSIOLOGY: EXUDATIVE PHASE 1-7D (Inflammatory; DAD Diffuse Alveolar Damage; PMN Influx; Protein-Rich Edema; Hyaline Membranes; Low Compliance; Non-Cardiogenic Pulmonary Edema); PROLIFERATIVE PHASE 7-21D (Type II Pneumocyte Proliferation; Collagen Deposition; Some Recover; Some Progress Fibrosis); FIBROTIC PHASE Over 3W (Fibrosis If Severe; Honeycombing; Poor Prognosis; Prolonged Vent Dependence); MORTALITY (Mild 27 pct; Moderate 32 pct; Severe 45 pct; Improving Over Time With LPV; Major Cause Death = Multi-Organ Failure Not Hypoxemia); DIFFERENTIAL (Cardiogenic Pulmonary Edema BNP Echo PCWP; Diffuse Alveolar Hemorrhage Bronch Hemosiderin; COP Cryptogenic Organizing Pneumonia; Acute Eosinophilic Pneumonia; Miliary TB) | `text` |  |  |  |
| ARDS and Mechanical Ventilation | Definition, Diagnosis, and Ventilator Strategy | `ards_f2` | Lung-Protective Ventilation and ARDS Interventions | `select` |  |  |  |

### Comfort / Withdrawal — `icu_withdrawal_comfort_cf`

Screen: 1 page(s) · 4 section(s) · 19 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Withdrawal of Life-Sustaining Treatment | Goals of Care Decision | `decision_basis` | Decision-Making Basis | `select` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Goals of Care Decision | `family_meeting` | Family meeting conducted (document attendees, key statements in progress note) | `checkbox` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Goals of Care Decision | `palliative_consulted` | Palliative care consulted and involved | `checkbox` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Goals of Care Decision | `ethics_consulted` | Ethics committee consulted (conflicted surrogates / prognostic uncertainty) | `checkbox` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Goals of Care Decision | `chaplain` | Chaplain / spiritual care present | `checkbox` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Interventions to Withdraw | `vasopressors_off` | Vasopressors to be discontinued | `checkbox` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Interventions to Withdraw | `ventilator_withdrawal` | Mechanical ventilation to be withdrawn (planned terminal extubation or ventilator discontinuation) | `checkbox` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Interventions to Withdraw | `dialysis_off` | Dialysis to be discontinued | `checkbox` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Interventions to Withdraw | `cpr_dnr` | CPR not to be attempted (DNR order in place) | `checkbox` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Interventions to Withdraw | `artificial_nutrition` | Artificial nutrition / hydration to be discontinued | `checkbox` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Interventions to Withdraw | `blood_transfusions` | Blood transfusions to be discontinued | `checkbox` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Comfort Medication Orders | `morphine_protocol` | Opioid Protocol (morphine / hydromorphone — dose / frequency for dyspnea, pain) | `text` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Comfort Medication Orders | `midazolam_protocol` | Benzodiazepine Protocol (midazolam — for anxiety, air hunger) | `text` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Comfort Medication Orders | `glycopyrrolate` | Glycopyrrolate (0.2 mg IV PRN — death rattle secretions) | `checkbox` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Comfort Medication Orders | `symptom_refractory` | Palliative sedation discussed for refractory suffering (proportionate — not intended to hasten death) | `checkbox` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Documentation and Notification | `time_of_withdrawal` | Time Withdrawal of Support Begins | `text` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Documentation and Notification | `expected_trajectory` | Expected Trajectory Communicated to Family | `textarea` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Documentation and Notification | `organ_donation` | OPO / organ donation discussed with family (required by law) | `checkbox` |  |  |  |
| Withdrawal of Life-Sustaining Treatment | Documentation and Notification | `notes` | Progress Note Summary | `textarea` |  |  |  |

### Critical Care Consult — `critical_care_consult_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Critical Care Consult | Reason for Consult | `consult_reason` | Primary Reason | `select` |  |  |  |
| Critical Care Consult | Reason for Consult | `gcs` | GCS Score | `number` |  |  |  |
| Critical Care Consult | Reason for Consult | `intubated` | Intubated / on mechanical ventilation | `checkbox` |  |  |  |
| Critical Care Consult | Organ System Assessment | `respiratory` | Respiratory Status | `select` |  |  |  |
| Critical Care Consult | Organ System Assessment | `vasopressor` | Vasopressor | `select` |  |  |  |
| Critical Care Consult | Organ System Assessment | `aki_present` | AKI present | `checkbox` |  |  |  |
| Critical Care Consult | Organ System Assessment | `crrt_rrt` | CRRT / RRT in use | `checkbox` |  |  |  |
| Critical Care Consult | Organ System Assessment | `liver_dysfunction` | Hepatic dysfunction | `checkbox` |  |  |  |
| Critical Care Consult | Organ System Assessment | `sofa_score` | SOFA Score | `number` |  |  |  |
| Critical Care Consult | Plan and Goals of Care | `goals_of_care_discussed` | Goals of care discussion held with family/patient | `checkbox` |  |  |  |
| Critical Care Consult | Plan and Goals of Care | `code_status` | Code Status | `select` |  |  |  |
| Critical Care Consult | Plan and Goals of Care | `notes` | Assessment, Recommendations and Plan | `textarea` |  |  |  |

### Delirium / ICU — `critical_care_delirium_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Delirium and ICU Delirium Management | Assessment, Prevention, and Treatment | `del_f1` | Delirium Definition and Assessment: DEFINITION (Acute Change Fluctuating Inattention Plus Either Altered Level Of Consciousness Or Disorganized Thinking; ACUTE BRAIN DYSFUNCTION; Reversible Most Cases But Associated Long-Term Cognitive Decline; INCIDENCE ICU 20-80 pct Depending Population; Mechanically Ventilated 80 pct; Medical 14-56 pct; Elderly 14-50 pct Hospitalized; SUBTYPES: HYPERACTIVE 25 pct Agitation Combativeness Pulling Lines; Easy To Recognize; HYPOACTIVE 50 pct Quiet Withdrawn Somnolent Hard To Recognize Often Missed; MIXED 25 pct Fluctuate); RISK FACTORS: PRE-DISPOSING (Age Over 65; Dementia Cognitive Impairment; Vision Hearing Impairment; Dehydration; Severe Illness; Depression; Immobility; Multiple Comorbidities); PRECIPITATING (Surgery; Anesthesia; Sedation Benzodiazepines; Opioids; Polypharmacy Anticholinergics Steroids; Restraints Foley Catheters; ICU Sleep Deprivation; Pain; Fever Infection Sepsis; Metabolic Derangements Electrolytes Thyroid Glucose; Liver Failure Encephalopathy; Uremia; Hypoxia Hypercarbia; Withdrawals Alcohol Benzos; MEDICATIONS HIGH RISK Benzodiazepines Antihistamines Opioids Anticholinergics Corticosteroids Fluoroquinolones); ASSESSMENT TOOLS: CAM Confusion Assessment Method (4 Features: 1. Acute Onset Fluctuating Course; 2. Inattention; 3. Altered Level Consciousness Or 4. Disorganized Thinking; POSITIVE If Features 1+2 AND Either 3 Or 4; Sensitivity 94 pct Specificity 89 pct); CAM-ICU (ICU Validated; Non-Verbal Patients; RASS Sedation Scale; Step 1 RASS -3 to 0 Assess; If Negative Sedated Stop; Letter SAVEAHAART Inattention Test; Squeezes Hand Irregular = Inattention; If Inattention = Delirium Positive; Richmond Agitation-Sedation Scale RASS: -5 Unarousable; -4 Deep Sedation; -3 Moderate Sedation; -2 Light Sedation; -1 Drowsy; 0 Alert Calm TARGET; +1 Restless; +2 Agitated; +3 Very Agitated; +4 Combative); ICDSC Intensive Care Delirium Screening Checklist (8 Items; Nursing Scale; Score Over 4 = Delirium; Less Specific More Sensitive) | `text` |  |  |  |
| Delirium and ICU Delirium Management | Assessment, Prevention, and Treatment | `del_f2` | ABCDEF Bundle and Pharmacologic Management | `select` |  |  |  |

### Hemodynamic Shock — `icu_hemodynamic_monitoring_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hemodynamic Monitoring and Shock Management | Shock Classification | `shock_type` | Shock Classification | `select` |  |  |  |
| Hemodynamic Monitoring and Shock Management | Shock Classification | `map` | MAP (mmHg) | `number` |  |  |  |
| Hemodynamic Monitoring and Shock Management | Shock Classification | `cvp` | CVP (mmHg — low=hypovolemia, high=cardiogenic/obstructive) | `number` |  |  |  |
| Hemodynamic Monitoring and Shock Management | Shock Classification | `co_ci` | Cardiac Output / CI (if PA catheter or PICCO — L/min / L/min/m²) | `text` |  |  |  |
| Hemodynamic Monitoring and Shock Management | Shock Classification | `scvo2` | ScvO2 (% — <65 oxygen delivery deficit; >75 normal or distributive shock) | `number` |  |  |  |
| Hemodynamic Monitoring and Shock Management | Vasopressor / Inotrope Support | `norepinephrine` | Norepinephrine (mcg/kg/min — first-line vasopressor for distributive shock) | `text` |  |  |  |
| Hemodynamic Monitoring and Shock Management | Vasopressor / Inotrope Support | `vasopressin` | Vasopressin (units/hr — second-line, add to norepinephrine; saves NE dose) | `text` |  |  |  |
| Hemodynamic Monitoring and Shock Management | Vasopressor / Inotrope Support | `dopamine` | Dopamine (mcg/kg/min — cardiogenic shock with bradycardia; higher arrhythmia risk) | `text` |  |  |  |
| Hemodynamic Monitoring and Shock Management | Vasopressor / Inotrope Support | `dobutamine` | Dobutamine (mcg/kg/min — inotrope for cardiogenic shock, low CO) | `text` |  |  |  |
| Hemodynamic Monitoring and Shock Management | Vasopressor / Inotrope Support | `epinephrine` | Epinephrine (mcg/kg/min — refractory shock; anaphylaxis first-line IM) | `text` |  |  |  |
| Hemodynamic Monitoring and Shock Management | Vasopressor / Inotrope Support | `phenylephrine` | Phenylephrine (mcg/kg/min — pure vasoconstrictor; avoid in cardiogenic shock) | `text` |  |  |  |
| Hemodynamic Monitoring and Shock Management | Fluid Responsiveness Assessment | `passive_leg_raise` | Passive leg raise positive (CO increase >10% — fluid-responsive) | `checkbox` |  |  |  |
| Hemodynamic Monitoring and Shock Management | Fluid Responsiveness Assessment | `pulse_pressure_variation` | Pulse Pressure Variation (% — >13% on ventilator = fluid-responsive) | `number` |  |  |  |
| Hemodynamic Monitoring and Shock Management | Fluid Responsiveness Assessment | `ivc_collapsibility` | IVC Collapsibility (POCUS) | `select` |  |  |  |
| Hemodynamic Monitoring and Shock Management | Fluid Responsiveness Assessment | `fluid_balance_cumulative` | Cumulative Fluid Balance (L — liberal fluids harm in ARDS; target-negative after resuscitation) | `number` |  |  |  |

### ICU Daily Round — `icu_daily_rounding_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ICU Daily Rounding Note | Systems Review | `neuro` | Neurologic (GCS, pupils, sedation level — RASS score, delirium — CAM-ICU) | `textarea` |  |  |  |
| ICU Daily Rounding Note | Systems Review | `respiratory` | Respiratory (ventilator settings, lung-protective strategy: Vt 6 mL/kg IBW, PEEP, FiO2, SpO2/PaO2 ratio) | `textarea` |  |  |  |
| ICU Daily Rounding Note | Systems Review | `cardiovascular` | Cardiovascular (hemodynamics, vasopressors, MAP target, CVP/ScvO2 if available, arrhythmias) | `textarea` |  |  |  |
| ICU Daily Rounding Note | Systems Review | `renal` | Renal / Fluid Balance (urine output, I/O balance, BMP, CRRT if active) | `textarea` |  |  |  |
| ICU Daily Rounding Note | Systems Review | `infectious` | Infectious Disease (antibiotics, cultures pending, fever, WBC, procalcitonin) | `textarea` |  |  |  |
| ICU Daily Rounding Note | Systems Review | `gi_nutrition` | GI / Nutrition (enteral feeds, gastric residuals, stress ulcer prophylaxis — PPI, bowel function) | `textarea` |  |  |  |
| ICU Daily Rounding Note | ICU Prevention Bundle | `vte_prophy` | VTE prophylaxis ordered (LMWH or UFH — unless contraindicated → SCDs) | `checkbox` |  |  |  |
| ICU Daily Rounding Note | ICU Prevention Bundle | `hob_elevation` | HOB elevation 30-45° (VAP prevention) | `checkbox` |  |  |  |
| ICU Daily Rounding Note | ICU Prevention Bundle | `daily_sbt` | Daily spontaneous breathing trial (SBT) planned (early liberation from vent) | `checkbox` |  |  |  |
| ICU Daily Rounding Note | ICU Prevention Bundle | `early_mobility` | Early mobility initiated (PT/OT engaged — ABCDEF bundle) | `checkbox` |  |  |  |
| ICU Daily Rounding Note | ICU Prevention Bundle | `foley_necessary` | Foley reassessed — still necessary (CAUTI prevention) | `checkbox` |  |  |  |
| ICU Daily Rounding Note | ICU Prevention Bundle | `lines_reviewed` | Central lines / arterial lines reviewed — still necessary (CLABSI prevention) | `checkbox` |  |  |  |
| ICU Daily Rounding Note | Daily Goals | `target_rass` | Target RASS | `select` |  |  |  |
| ICU Daily Rounding Note | Daily Goals | `daily_goal_statement` | Daily Goal Statement (communicated to team and patient) | `textarea` |  |  |  |
| ICU Daily Rounding Note | Daily Goals | `family_communication` | Family / surrogate updated today | `checkbox` |  |  |  |
| ICU Daily Rounding Note | Daily Goals | `notes` | Assessment and Plan | `textarea` |  |  |  |

### ICU Nutrition — `critical_care_nutrition_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ICU Nutrition — EN vs. PN, Refeeding, Indirect Calorimetry | ICU Nutrition Assessment and Energy Goals | `nutrition_basics` | ICU Nutritional Assessment and Energy Requirements (ICU NUTRITION 2024 ASPEN/SCCM GUIDELINES: NUTRITIONAL ASSESSMENT: NUTRIC SCORE (Nutrition Risk in Critically ill): age, APACHE II, SOFA, number of comorbidities, days from admission to ICU, IL-6; >=6 = high nutritional risk (benefit from early aggressive nutrition); MODIFIED NUTRIC (without IL-6): >=5 = high risk; NUTRITION RISK SCREENING 2002 (NRS-2002): >=3 = at risk; MALNUTRITION UNIVERSAL SCREENING TOOL (MUST); ASPEN 2022 ENERGY TARGETS: INDIRECT CALORIMETRY (IC) PREFERRED: measured resting energy expenditure (mREE); gold standard; set caloric target = mREE (100%); PREDICTIVE EQUATIONS (if IC unavailable): PENN STATE: sex, weight, height, mechanical ventilation; MPST: ICU version; SIMPLE: 25-30 kcal/kg/day; CRITICALLY ILL OBESITY: 11-14 kcal/kg ACTUAL body weight (or 22-25 kcal/kg IBW); PROTEIN TARGETS: 1.2-2.0 g/kg ACTUAL BW (standard ICU); 2.0-2.5 g/kg IBW (obesity/burns/trauma); HIGH PROTEIN: benefits include muscle preservation, faster weaning, fewer complications; ASSESS PROTEIN ADEQUACY: 24h urine nitrogen; NITROGEN BALANCE = protein intake (g/6.25) - urinary nitrogen (g/day) - 4g; ACUTE PHASE: avoid overfeeding (early days); PERMISSIVE UNDERFEEDING: 60-70% of energy target early (PERMIT trial: no harm vs. full feeding; TARGET-ICU: 70% similar to 100%); PROTEIN: FULL DOSE from day 1 regardless of energy deficit; VITAMINS: thiamine (always); vitamin D; zinc; vitamin C; antioxidants; IMMUNE-ENHANCING FORMULAS: arginine + omega-3 + antioxidants; POSTOPERATIVE patients; NOT recommended for sepsis | `text` |  |  |  |
| ICU Nutrition — EN vs. PN, Refeeding, Indirect Calorimetry | ICU Nutrition Assessment and Energy Goals | `en_pn` | Early Enteral vs. Parenteral Nutrition Decision | `select` |  |  |  |
| ICU Nutrition — EN vs. PN, Refeeding, Indirect Calorimetry | Refeeding Syndrome and Special Populations | `refeeding_syn` | Refeeding Syndrome — Pathophysiology, Risk, and Protocol (REFEEDING SYNDROME: DEFINITION: electrolyte shifts when refeeding malnourished patient; PATHOPHYSIOLOGY: STARVATION: switch to fat + protein catabolism; intracellular minerals depleted (K, Mg, PO4); serum levels maintained; REFEEDING: CARBOHYDRATE INTAKE: insulin surge → cellular uptake of glucose + K + Mg + PO4 → RAPID SERUM DECLINE; PHOSPHATE: most critical; ATP synthesis; 2,3-DPG; HYPOPHOSPHATEMIA (<1.0 mg/dL): rhabdomyolysis; respiratory muscle weakness; hemolytic anemia; cardiac arrhythmias; death; HYPOKALEMIA: cardiac arrhythmias; paralytic ileus; HYPOMAGNESEMIA: Torsades de pointes; neuromuscular; THIAMINE DEFICIENCY: WERNICKE ENCEPHALOPATHY (severe); carbohydrate metabolism requires thiamine (cofactor for pyruvate dehydrogenase); SODIUM + WATER RETENTION: edema; cardiac failure; RISK FACTORS FOR REFEEDING: BMI <18.5; >10% weight loss in 6 months; no intake >5-7 days; low pre-treatment electrolytes; chronic alcohol; cancer; malabsorption; NICE CRITERIA: 2+ minor or 1+ major risk factor; PREVENTION PROTOCOL: THIAMINE 100-300 mg IV BEFORE starting nutrition (Pabrinex); electrolyte supplementation before feeding if low; START SLOW: 10-20 kcal/kg/day; advance over 3-7 days; MONITORING: serum phosphate, potassium, magnesium, sodium DAILY first week; TREAT ELECTROLYTE ABNORMALITIES BEFORE advancing calories; GOAL: phosphate >=2.5 mg/dL before full feeds; ORAL SUPPLEMENTATION: Neutr-Phos; IV supplementation for severe deficiency; BURNS: hypermetabolic; protein needs 1.5-2 g/kg; early EN; immune-enhancing formula | `text` |  |  |  |
| ICU Nutrition — EN vs. PN, Refeeding, Indirect Calorimetry | Refeeding Syndrome and Special Populations | `indirect_cal` | Indirect Calorimetry and Specialty ICU Nutrition | `select` |  |  |  |

### ICU Sedation / ABCDEF Bundle — `critical_care_sedation_delirium_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ICU Sedation, Analgesia, and ABCDEF Bundle | Sedation and Analgesia | `rass_target` | RASS Target (Richmond Agitation-Sedation Scale) | `select` |  |  |  |
| ICU Sedation, Analgesia, and ABCDEF Bundle | Sedation and Analgesia | `analgesia_first` | Analgesia-First Approach | `select` |  |  |  |
| ICU Sedation, Analgesia, and ABCDEF Bundle | ABCDEF Bundle Implementation | `awaken_breathe` | A-B: Awakening and Breathing Trial | `select` |  |  |  |
| ICU Sedation, Analgesia, and ABCDEF Bundle | ABCDEF Bundle Implementation | `cam_icu` | C: CAM-ICU Score (Delirium Assessment) | `select` |  |  |  |
| ICU Sedation, Analgesia, and ABCDEF Bundle | ABCDEF Bundle Implementation | `def_bundle` | D-E-F: Delirium Prevention + Early Mobility + Family Engagement (D: reorientation, sleep hygiene, hearing aids/glasses; E: PT/OT daily in ICU; F: family at bedside, communication update daily; PICS prevention for patient AND family) | `text` |  |  |  |

### Mechanical Ventilation (ARDS Berlin) — `critical_care_mechanical_ventilation_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Mechanical Ventilation — Lung Protection, ARDS, and Liberation | ARDS Berlin Criteria and Lung Protective Ventilation | `berlin_criteria` | Berlin Definition of ARDS 2012 (acute onset within 1 week of insult or worsening respiratory symptoms; bilateral opacities on CXR/CT (not fully explained by effusions, atelectasis, nodules); respiratory failure NOT fully explained by cardiac failure/fluid overload (echo to exclude); P/F ratio: MILD: 200-300 mmHg; MODERATE: 100-200 mmHg; SEVERE: <100 mmHg (on PEEP >=5 cmH2O); RISK FACTORS: pneumonia (35%), aspiration (30%), sepsis, trauma, transfusion (TRALI), pancreatitis, burns; COVID-ARDS: distinct phenotype (high compliance subtype — L-type: low elastance, low recruitability; H-type: low compliance, high recruitability); mortality: mild 35%, moderate 40%, severe 46%; NHANES 2018: 200,000 cases/year US; 70% survive ICU but long-term PICS — impairment) | `text` |  |  |  |
| Mechanical Ventilation — Lung Protection, ARDS, and Liberation | ARDS Berlin Criteria and Lung Protective Ventilation | `lung_protective` | Lung Protective Ventilation (ARDSnet) | `select` |  |  |  |
| Mechanical Ventilation — Lung Protection, ARDS, and Liberation | Adjunct Therapies and Ventilator Liberation | `adjunct_therapies` | Adjunct Therapies for Severe ARDS (PRONE POSITIONING: PROSEVA trial: 16h/day prone in severe ARDS (P/F <150) → 28-day mortality 16% vs. 32.8%; prone for at least 16h/day; team experience required; complications: ETT dislodgement, pressure ulcers, dislodged lines; neuromuscular blockade (NMB): ACURASYS trial: 48h cisatracurium — no mortality benefit at 90 days (ROSE trial); reserve NMB for severe ventilator dyssynchrony or ultra-severe ARDS; INHALED VASODILATORS: iNO (inhaled nitric oxide) or epoprostenol for refractory hypoxemia (no mortality benefit; oxygenation bridge); ECMO (VV-ECMO): EOLIA trial: transfer to ECMO center if refractory hypoxemia (P/F <50 for 3h, P/F <80 for 6h, pH <7.25 for 6h); ECMO non-inferior to conservative management in crossover-allowed design; survival 35% ECMO vs. 46% controls (p=0.07); corticosteroids: dexamethasone 20 mg QD x5 then 10 mg QD x5 (DEXA-ARDS): 60-day mortality 21% vs. 36% (COVID ARDS — RECOVERY) | `text` |  |  |  |
| Mechanical Ventilation — Lung Protection, ARDS, and Liberation | Adjunct Therapies and Ventilator Liberation | `liberation` | Ventilator Liberation Protocol | `select` |  |  |  |

### Sepsis / Shock — `critical_care_sepsis_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sepsis and Septic Shock | Diagnosis and Management | `sep_f1` | Sepsis-3 (2016): Life-Threatening Organ Dysfunction; SOFA Over 2 Increase; SEPTIC SHOCK: Vasopressor + Lactate Over 2 Despite Fluids (40-50 pct Mortality); WORKUP: Blood Cultures x2 Before Abx; Lactate; CBC BMP; CXR; Procalcitonin Over 0.5 Bacterial; SOURCE CONTROL Drain/Remove; qSOFA Screen Only (RR Over 22; AMS; SBP Under 100); HOUR-1 BUNDLE: Lactate Measure; Cultures; Abx; Fluids 30 mL/kg; Vasopressors If MAP Under 65 | `text` |  |  |  |
| Sepsis and Septic Shock | Diagnosis and Management | `sep_f2` | Surviving Sepsis Bundle Therapy | `select` |  |  |  |

### Sepsis Management — `critical_care_sepsis_management_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sepsis — Hour-1 Bundle and Hemodynamics | Sepsis-3 Definitions and Initial Bundle | `sep_f1` | Sepsis-3 and Hour-1 Bundle: SEPSIS = Organ Dysfunction (SOFA 2+) from Dysregulated Host Response to Infection; SEPTIC SHOCK = Sepsis + Vasopressor to Maintain MAP 65 + Lactate Over 2 Despite Fluids; qSOFA Screening: RR 22+; AMS; SBP Under 100; HOUR-1 BUNDLE (SSC 2018): 1) Measure Lactate (Repeat If Over 2); 2) Blood Cultures x2 Before Antibiotics; 3) Broad-Spectrum Antibiotics WITHIN 1 HOUR (Each Hour Delay = 7% Mortality Increase); 4) 30 mL/kg IV Crystalloid (Balanced: LR Over NS; SMART Trial Reduced AKI); 5) Vasopressors If Not Responding; LACTATE: Over 4 = Resuscitate Aggressively; Clearance Over 10% at 2H = Improved Outcome; FLUID RESPONSIVENESS: Pulse Pressure Variation Over 13% (Mechanically Ventilated Sinus Rhythm); Passive Leg Raise; Stop Fluids If Cumulative Over 5L Without Response; ALBUMIN 20-25% If Persistent Hypoalbuminemia | `text` |  |  |  |
| Sepsis — Hour-1 Bundle and Hemodynamics | Sepsis-3 Definitions and Initial Bundle | `sep_f2` | Vasopressors and Empiric Antibiotics | `select` |  |  |  |
| Sepsis — Hour-1 Bundle and Hemodynamics | Organ Support and Monitoring | `sep_f3` | Sepsis Organ Support: ARDS: Lung-Protective Ventilation 6 mL/kg IBW; Plateau Under 30 cmH2O; PEEP Titration; PRONE POSITION If P/F Under 150 (PROSEVA 16% Mortality Reduction); Neuromuscular Blockade Cisatracurium If P/F Under 120 (ACURASYS); High-Flow Nasal Cannula Before Intubation If Mild-Moderate; RENAL REPLACEMENT THERAPY: AKI Stage 3 or Fluid Overload Unresponsive to Diuretics; CVVHDF Preferred If Hemodynamically Unstable; IHD If Stable; Timing: Severe AKI with Metabolic/Fluid Emergency = Immediate; Preemptive Not Superior (AKIKI; STARRT-AKI); NUTRITION: Enteral Within 24-48H Preferred; Avoid Parenteral if Gut Functional; Protein 1.2-2.0 g/kg/day; Caloric Goal 80% by Day 3; PALLIATIVE: Early Goals-of-Care Discussion; SOFA Score Trajectory; Lactate Trends; MAP Response = Prognostication; ICU MONITORING: MAP Q1H; UO Q1H (Over 0.5 mL/kg/hr Goal); CVP Trend; PROCALCITONIN Q48H to Guide Duration; Serial Lactates; Blood Cultures 48H If Not Improving; Daily SOFA Reassessment | `text` |  |  |  |

### Sepsis/ARDS — `critical_care_sepsis_ards_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sepsis, Septic Shock, and ARDS: Evidence-Based ICU Management | Sepsis Definitions, SOFA Scoring, and Resuscitation Bundles | `sepsis_class` | Sepsis-3: Life-Threatening Organ Dysfunction SOFA Above 2; Septic Shock: Vasopressor MAP 65 + Lactate Above 2; qSOFA 2+; Hour-1 Bundle SSC 2021; Antibiotic Within 1 Hour | `select` |  |  |  |
| Sepsis, Septic Shock, and ARDS: Evidence-Based ICU Management | Sepsis Definitions, SOFA Scoring, and Resuscitation Bundles | `sepsis_vasopressors` | Vasopressors Norepinephrine First-Line, Vasopressin, Epinephrine, Dopamine; Steroid Hydrocortisone ADRENAL APROCCHSS; Source Control Surgery/Drainage/Removal; Lactate Clearance Target -- SEPTIC SHOCK VASOPRESSORS + ADJUNCTS: VASOPRESSORS [START IF MAP BELOW 65 DESPITE ADEQUATE FLUIDS]: NOREPINEPHRINE [FIRST-LINE VASOPRESSOR; ALPHA-1 + BETA-1; DOSE: START 0.01-0.05 mcg/kg/min; TITRATE TO MAP ABOVE 65; USUAL RANGE 0.1-2 mcg/kg/min; SUPERIOR TO DOPAMINE [DECREASED ARRHYTHMIA INCIDENCE; SOAP-II TRIAL NEJM 2010]; AVOID DOPAMINE IN SEPTIC SHOCK [INCREASED ARRHYTHMIA; INFERIOR TO NOREPINEPHRINE UNLESS SPECIFIC BRADYCARDIA INDICATION]]; VASOPRESSIN [ADH ANALOGUE; V1 RECEPTOR; VASOCONSTRICTIVE; DOSE: 0.03-0.04 units/min [FIXED; DO NOT TITRATE BEYOND 0.04]; ADJUNCT TO NOREPINEPHRINE; VASST TRIAL NEJM 2008: VASOPRESSIN + NOREPINEPHRINE vs NOREPINEPHRINE ALONE: NO OS DIFFERENCE OVERALL; LESS SEVERE SHOCK [0.5-15 mcg/min NOREPINEPHRINE GROUP]: OS BENEFIT WITH VASOPRESSIN; AVOIDS CATECHOLAMINE EXCESS]; EPINEPHRINE [ALPHA + BETA AGONIST; USED IF NOREPINEPHRINE + VASOPRESSIN INSUFFICIENT; TACHYCARDIA; LACTIC ACIDOSIS; CONSIDER IN REFRACTORY SHOCK]; PHENYLEPHRINE [PURE ALPHA-1; MINIMAL TACHYCARDIA; USEFUL IN TACHYCARDIA-LIMITING SHOCK; REFLEX BRADYCARDIA]; ANGIOTENSIN II [GIAPREZA; CATECHOLAMINE-SPARING; ATHOS-3 TRIAL; REFRACTORY SHOCK]; MAP TARGET [ABOVE 65 mmHg STANDARD; HIGHER MAP 80-85 ONLY IN PRIOR HYPERTENSION IF EVIDENCE-BASED; 65 vs 85 SEPSISPAM TRIAL: NO DIFFERENCE EXCEPT LESS RENAL REPLACEMENT IN 80-85 IN PRIOR HYPERTENSION]; CORTICOSTEROIDS IN SEPTIC SHOCK: HYDROCORTISONE [ADRENAL TRIAL NEJM 2018: HYDROCORTISONE vs PLACEBO IN VASOPRESSOR-DEPENDENT SEPTIC SHOCK: FASTER SHOCK REVERSAL; NO OS BENEFIT [200 mg/DAY CONTINUOUS INFUSION OR 50 mg Q6H]; APROCCHSS TRIAL NEJM 2018: HYDROCORTISONE + FLUDROCORTISONE vs PLACEBO: OS BENEFIT [43% vs 49% 90-DAY MORTALITY; HR 0.88; P=0.04]; SSC 2021 RECOMMENDATION: HYDROCORTISONE 200 mg/DAY CONTINUOUS IF VASOPRESSOR-DEPENDENT [DESPITE ADEQUATE FLUID + NOREPINEPHRINE ABOVE 0.25 mcg/kg/min]; WEAN WITH VASOPRESSOR TAPER]; SOURCE CONTROL [CRITICAL ADJUNCT TO ANTIMICROBIALS]: DRAINAGE [ABSCESS; EMPYEMA; EFFUSION]; DEBRIDEMENT [NECROTIC TISSUE; NECROTIZING FASCIITIS [EMERGENCY SURGERY WITHIN HOURS]]; DEVICE REMOVAL [INFECTED CATHETER; PROSTHESIS; PUMP]; BOWEL PERFORATION [EMERGENCY SURGERY]; BILIARY OBSTRUCTION [ENDOSCOPIC OR PERCUTANEOUS DRAINAGE]; TIMING [MOST CRITICAL WITHIN 6-12 HOURS; NECROTIZING SOFT TISSUE = MINUTES TO HOURS]; LACTATE MONITORING [SERIAL LACTATE; TARGET CLEARANCE ABOVE 10-20% PER 2 HOURS; ELEVATED LACTATE [ABOVE 2] = OCCULT HYPOPERFUSION MARKER; JAMA 2014 LACTATE-GUIDED RESUSCITATION SUPERIOR; GOAL LACTATE BELOW 2 WITHIN 6 HOURS] | `text` |  |  |  |
| Sepsis, Septic Shock, and ARDS: Evidence-Based ICU Management | ARDS: Berlin Definition, Lung-Protective Ventilation, and Advanced Therapies | `ards_mgmt` | ARDS Berlin: Bilateral Infiltrates PaO2/FiO2 Below 300 Within 1 Week; Lung-Protective 6mL/kg IBW Plateau Below 30; PEEP ARDSNet; Prone PROSEVA; Neuromuscular Blockade ACURASYS; Driving Pressure; Dexamethasone COVID RECOVERY; ECMO EOLIA | `select` |  |  |  |
| Sepsis, Septic Shock, and ARDS: Evidence-Based ICU Management | ARDS: Berlin Definition, Lung-Protective Ventilation, and Advanced Therapies | `ards_notes` | Sepsis/ARDS Management Notes and Critical Care/Pulmonology/Infectious Disease/Pharmacy/Respiratory Therapy/Nursing/Physical Therapy/Palliative Care Coordination | `textarea` |  |  |  |

### Ventilator Mgmt — `icu_ventilator_management_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Ventilator Management | Initiation / Current Settings | `mode` | Ventilator Mode | `select` |  |  |  |
| Ventilator Management | Initiation / Current Settings | `tidal_volume` | Tidal Volume (mL — ARDSnet: 6 mL/kg IBW) | `number` |  |  |  |
| Ventilator Management | Initiation / Current Settings | `peep` | PEEP (cmH2O) | `number` |  |  |  |
| Ventilator Management | Initiation / Current Settings | `fio2` | FiO2 (%) | `number` |  |  |  |
| Ventilator Management | Initiation / Current Settings | `rr` | Set Respiratory Rate (/min) | `number` |  |  |  |
| Ventilator Management | Initiation / Current Settings | `plateau_pressure` | Plateau Pressure (cmH2O — target <30, ideally <28 for ARDS) | `number` |  |  |  |
| Ventilator Management | Initiation / Current Settings | `driving_pressure` | Driving Pressure = Pplat − PEEP (cmH2O — target <15 for ARDS) | `number` |  |  |  |
| Ventilator Management | ARDS Assessment | `berlin_severity` | Berlin Definition Severity | `select` |  |  |  |
| Ventilator Management | ARDS Assessment | `pf_ratio` | P/F Ratio (PaO2 / FiO2) | `number` |  |  |  |
| Ventilator Management | ARDS Assessment | `prone_positioning` | Prone positioning initiated (≥16 hours/day — severe ARDS PaO2/FiO2 <150; PROSEVA trial mortality benefit) | `checkbox` |  |  |  |
| Ventilator Management | ARDS Assessment | `nmb` | Neuromuscular blockade given (cisatracurium — moderate/severe ARDS, ventilator dyssynchrony) | `checkbox` |  |  |  |
| Ventilator Management | Liberation / Extubation Readiness | `sbt_passed` | SBT passed (30-120 min on PS 5 / PEEP 5 or T-piece — RR <25, SpO2 >90%, RSBI <105) | `checkbox` |  |  |  |
| Ventilator Management | Liberation / Extubation Readiness | `rsbi` | RSBI (RR/Vt in liters — <105 = extubation candidate) | `number` |  |  |  |
| Ventilator Management | Liberation / Extubation Readiness | `cough` | Adequate cough and airway protective reflexes present | `checkbox` |  |  |  |
| Ventilator Management | Liberation / Extubation Readiness | `secretion_burden` | Secretion Burden | `select` |  |  |  |
| Ventilator Management | Liberation / Extubation Readiness | `plan` | Ventilator Plan and Next Steps | `textarea` |  |  |  |

## Emergency Medicine

### Acute Stroke — `emergency_medicine_acute_stroke_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Ischemic Stroke: Emergency Management Protocol | Presentation and Neurological Assessment | `stroke_nihss` | NIHSS Score (0-42) — Level of consciousness, gaze, visual, facial palsy, arm/leg motor, limb ataxia, sensory, language, dysarthria, extinction/inattention; document with each assessment; NIHSS above 4: significant; above 20: severe; tenecteplase non-inferior to alteplase NIHSS above 4 to below 25 (TRACE trial/AHA 2024 update) | `text` |  |  |  |
| Acute Ischemic Stroke: Emergency Management Protocol | Presentation and Neurological Assessment | `stroke_lkw` | Last Known Well (LKW) date and time — critical for time-based eligibility; 0-4.5h: IV thrombolysis window; 0-24h: thrombectomy window with advanced imaging (DAWN, DEFUSE-3); wake-up stroke: unknown onset, use DWI-FLAIR mismatch for thrombolysis eligibility (WAKE-UP trial) | `text` |  |  |  |
| Acute Ischemic Stroke: Emergency Management Protocol | Presentation and Neurological Assessment | `stroke_onset_type` | Symptom Onset Mechanism | `select` |  |  |  |
| Acute Ischemic Stroke: Emergency Management Protocol | Presentation and Neurological Assessment | `stroke_vitals` | BP on arrival (mmHg) and glucose (mg/dL) — BP target for tPA candidates: below 185/110 before treatment (labetalol 10-20 mg IV; nicardipine 5-15 mg/hr); post-tPA BP below 180/105 x24h; hypotension may worsen ischemic core; glucose: target 140-180 mg/dL (hyperglycemia worsens outcomes; hypoglycemia mimics stroke — check glucose first) | `text` |  |  |  |
| Acute Ischemic Stroke: Emergency Management Protocol | Reperfusion Decision and Therapy | `stroke_imaging` | Acute Imaging Findings | `select` |  |  |  |
| Acute Ischemic Stroke: Emergency Management Protocol | Reperfusion Decision and Therapy | `stroke_ivtpa` | IV Thrombolysis (tPA/TNK) Decision | `select` |  |  |  |
| Acute Ischemic Stroke: Emergency Management Protocol | Reperfusion Decision and Therapy | `stroke_thrombectomy` | Mechanical Thrombectomy Status | `select` |  |  |  |
| Acute Ischemic Stroke: Emergency Management Protocol | Reperfusion Decision and Therapy | `stroke_antiplatelet` | Antiplatelet and Antithrombotic Initiation | `select` |  |  |  |
| Acute Ischemic Stroke: Emergency Management Protocol | Reperfusion Decision and Therapy | `stroke_etiology` | Stroke Etiology Workup | `select` |  |  |  |
| Acute Ischemic Stroke: Emergency Management Protocol | Reperfusion Decision and Therapy | `stroke_notes` | Acute Stroke Management Notes and Neurology/Neuro-IR/Neurosurgery Coordination | `textarea` |  |  |  |

### Aortic Dissection (Type A/B) — `emergency_medicine_aortic_dissection_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Aortic Dissection — Classification, Imaging, BP Management, Surgery | Classification and Diagnosis | `classification` | Aortic Dissection Classification and Presentation (STANFORD CLASSIFICATION: TYPE A: involves ascending aorta (regardless of origin site); surgical emergency; MORTALITY: 1-2% per hour without surgery; TYPE B: descending aorta only (distal to left subclavian); medical management unless complicated; DEBAKEY CLASSIFICATION: Type I (ascending + descending); Type II (ascending only); Type III (descending only); PRESENTATION: SUDDEN SEVERE TEARING/RIPPING CHEST PAIN radiating to back (90%); PAINLESS in 5% (diabetics, elderly); aortic regurgitation murmur (Type A with aortic root); PULSE DEFICIT: absent/unequal pulses in arms (subclavian involvement); neurological deficits (brain or spinal cord malperfusion); MALPERFUSION SYNDROME: branch vessel occlusion; renal (AKI), visceral (mesenteric ischemia), limb (ischemia); RISK FACTORS: uncontrolled hypertension (most common); bicuspid aortic valve; Marfan syndrome (FBN1 mutation: ascending aortic dilation + dissection); Loeys-Dietz; Ehlers-Danlos vascular type (COL3A1 mutation); aortic coarctation; inflammatory aortitis; cocaine; iatrogenic (catheterization); pregnancy (third trimester); IRAD REGISTRY: most patients >60 years; hypertension 70%; prior cardiac surgery 20%) | `text` |  |  |  |
| Aortic Dissection — Classification, Imaging, BP Management, Surgery | Classification and Diagnosis | `imaging` | Imaging Strategy and Diagnosis Confirmation | `select` |  |  |  |
| Aortic Dissection — Classification, Imaging, BP Management, Surgery | Medical Management and Surgical Approach | `bp_management` | Blood Pressure and Heart Rate Management (IMMEDIATE GOALS: reduce aortic wall stress; TARGET: systolic BP 100-120 mmHg AND heart rate <=60 bpm; FIRST-LINE: IV ESMOLOL (beta-1 selective; short-acting; infusion): 500 mcg/kg bolus then 50-200 mcg/kg/min; excellent titration; ALTERNATIVE BETA-BLOCKERS: labetalol 20 mg IV then 20-80 mg Q10min or 1-2 mg/min infusion; METOPROLOL IV 5 mg Q5min up to 15-20 mg; BETA-BLOCKER FIRST (before vasodilators): vasodilators alone can cause reflex tachycardia (increases dP/dt, worsens dissection); THEN ADD VASODILATOR IF NEEDED: NICARDIPINE infusion 5-15 mg/h (calcium channel blocker); SODIUM NITROPRUSSIDE 0.3-8 mcg/kg/min (rapid titration; cyanide toxicity with prolonged high-dose use; thiocyanate accumulation in renal failure); IV CLEVIDIPINE (ultra-short-acting CCB; 1-21 mg/h): excellent for tight BP control; NOT RECOMMENDED AS SINGLE AGENT: hydralazine (reflex tachycardia); HEMODYNAMICALLY UNSTABLE PATIENT: immediate OR; vasopressors if necessary; avoid delay for imaging if unstable; 2 LARGE-BORE IV ACCESS + FOLEY + A-LINE; TYPE A: immediate cardiac surgery CONSULTATION; PAIN MANAGEMENT: morphine or hydromorphone IV; pain reduction also lowers BP/HR) | `text` |  |  |  |
| Aortic Dissection — Classification, Imaging, BP Management, Surgery | Medical Management and Surgical Approach | `type_a_b` | Type A Surgery and Type B Management | `select` |  |  |  |

### Cardiac Arrest ACLS — `emergency_cardiac_arrest_acls_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiac Arrest ACLS — Algorithms, Drug Doses, and Post-Arrest Care | ACLS Algorithm and Drug Therapy | `acls_f1` | Cardiac Arrest Evaluation: CHAIN OF SURVIVAL AND CPR (RECOGNIZE CARDIAC ARREST CALL 911; IMMEDIATE HIGH-QUALITY CPR (RATE 100-120 PER MINUTE; DEPTH 2-2.4 INCHES 5-6 cm ADULTS; ALLOW FULL RECOIL NO LEANING; MINIMIZE INTERRUPTIONS UNDER 10 SECONDS Each Pause; HAND POSITION CENTER CHEST LOWER HALF STERNUM; 30 COMPRESSIONS TO 2 BREATHS Unprotected Airway; CONTINUOUS COMPRESSIONS PROTECTED AIRWAY 10 BREATHS/MIN Asynchronous; EARLY DEFIBRILLATION AED OR MANUAL SHOCKABLE RHYTHM; HIGH-QUALITY CPR MOST IMPORTANT INTERVENTION; CARDIAC ARREST RHYTHMS (SHOCKABLE RHYTHMS VF PULSELESS VT pVT (DEFIBRILLATE IMMEDIATELY; BIPHASIC DEFIBRILLATOR 120-200 J MANUFACTURER DEPENDENT; MONOPHASIC 360 J; RESUME CPR 2 MINUTES IMMEDIATELY AFTER SHOCK; RECHECK RHYTHM Every 2 Min; EPINEPHRINE IV/IO 1 mg Q3-5 MIN AFTER SECOND SHOCK SHOCKABLE; EPINEPHRINE FIRST DOSE ASAP UNSHOCKABLE; AMIODARONE 300 mg IV After 3 SHOCKS FAILED VF pVT; OR LIDOCAINE 100 mg 1.5 mg/kg ALTERNATIVE; SECOND DOSE AMIODARONE 150 mg Or LIDOCAINE 0.75 mg/kg SUBSEQUENT SHOCKS; NON-SHOCKABLE RHYTHMS PEA PULSELESS ELECTRICAL ACTIVITY ASYSTOLE (EPINEPHRINE 1 mg IV/IO EVERY 3-5 MIN IMMEDIATELY; NO SHOCK INDICATED; CPR 2 MIN CYCLES RECHECK RHYTHM; FIND AND TREAT REVERSIBLE CAUSES CRITICAL; AIRWAY MANAGEMENT (EARLY ADVANCED AIRWAY BAG-MASK VENTILATION FIRST IF INEFFECTIVE; SUPRAGLOTTIC AIRWAY LMA IGEL AS ALTERNATIVE; ENDOTRACHEAL INTUBATION GOLD STANDARD AFTER CPR ESTABLISHED; VIDEO LARYNGOSCOPY PREFERRED; WAVEFORM CAPNOGRAPHY CONFIRM PLACEMENT CO2; ETCO2 UNDER 10 mmHg After 20 MIN CPR PROGNOSIS POOR; ETCO2 RISE ABOVE 40 mmHg SUGGESTS ROSC; IO INTRAOSSEOUS ACCESS IF IV CANNOT ESTABLISH RAPIDLY (TIBIA HUMERAL HEAD STERNAL; SAME DRUGS DOSES IV; FASTER Than CENTRAL LINE In ARREST) | `text` |  |  |  |
| Cardiac Arrest ACLS — Algorithms, Drug Doses, and Post-Arrest Care | ACLS Algorithm and Drug Therapy | `acls_f2` | Reversible Causes H/T and Post-ROSC Care | `select` |  |  |  |

### ED: Chest Pain — `emergency_chest_pain_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ED Chest Pain Evaluation | Presentation | `onset` | Onset | `select` |  |  |  |
| ED Chest Pain Evaluation | Presentation | `quality` | Pain Quality | `select` |  |  |  |
| ED Chest Pain Evaluation | Presentation | `radiation` | Radiation (left arm / jaw / back — specify) | `text` |  |  |  |
| ED Chest Pain Evaluation | Presentation | `diaphoresis` | Diaphoresis (high-risk ACS feature) | `checkbox` |  |  |  |
| ED Chest Pain Evaluation | Presentation | `syncope` | Syncope / presyncope | `checkbox` |  |  |  |
| ED Chest Pain Evaluation | Risk Stratification | `heart_score` | HEART Score (0-10 — ≥7 = high risk ACS, early invasive) | `number` |  |  |  |
| ED Chest Pain Evaluation | Risk Stratification | `grace_score` | GRACE Risk Score (if NSTEMI confirmed) | `number` |  |  |  |
| ED Chest Pain Evaluation | Risk Stratification | `initial_troponin` | Initial hs-Troponin (ng/L — lab-specific threshold) | `number` |  |  |  |
| ED Chest Pain Evaluation | Risk Stratification | `troponin_2hr` | 2-hr hs-Troponin (delta — 2-hr rule-out algorithm) | `number` |  |  |  |
| ED Chest Pain Evaluation | Risk Stratification | `ecg_findings` | ECG Findings | `select` |  |  |  |
| ED Chest Pain Evaluation | Disposition | `diagnosis` | Working Diagnosis | `select` |  |  |  |
| ED Chest Pain Evaluation | Disposition | `disposition` | Disposition Decision | `select` |  |  |  |
| ED Chest Pain Evaluation | Disposition | `notes` | Assessment and Plan | `textarea` |  |  |  |

### ED: Dyspnea — `emergency_dyspnea_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ED Acute Dyspnea Evaluation | Presentation | `onset` | Onset | `select` |  |  |  |
| ED Acute Dyspnea Evaluation | Presentation | `spo2` | SpO2 (%) on Room Air | `number` |  |  |  |
| ED Acute Dyspnea Evaluation | Presentation | `respiratory_rate` | Respiratory Rate (/min) | `number` |  |  |  |
| ED Acute Dyspnea Evaluation | Presentation | `work_of_breathing` | Work of Breathing | `select` |  |  |  |
| ED Acute Dyspnea Evaluation | Presentation | `lung_exam` | Lung Exam | `select` |  |  |  |
| ED Acute Dyspnea Evaluation | Workup | `bnp` | BNP or NT-proBNP (pg/mL) | `number` |  |  |  |
| ED Acute Dyspnea Evaluation | Workup | `troponin` | Troponin (ng/L) | `number` |  |  |  |
| ED Acute Dyspnea Evaluation | Workup | `chest_xray` | CXR Finding | `select` |  |  |  |
| ED Acute Dyspnea Evaluation | Workup | `point_of_care_us` | POCUS Finding (if performed) | `select` |  |  |  |
| ED Acute Dyspnea Evaluation | Treatment and Disposition | `oxygen_delivery` | Oxygen Delivery | `select` |  |  |  |
| ED Acute Dyspnea Evaluation | Treatment and Disposition | `primary_tx` | Treatment Administered in ED | `textarea` |  |  |  |
| ED Acute Dyspnea Evaluation | Treatment and Disposition | `diagnosis` | Primary Diagnosis | `text` |  |  |  |
| ED Acute Dyspnea Evaluation | Treatment and Disposition | `disposition` | Disposition | `select` |  |  |  |
| ED Acute Dyspnea Evaluation | Treatment and Disposition | `notes` | Assessment and Plan | `textarea` |  |  |  |

### ED: Sepsis — `emergency_sepsis_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sepsis Evaluation (Sepsis-3 Criteria) | Sepsis-3 Criteria | `suspected_source` | Suspected Source of Infection | `select` |  |  |  |
| Sepsis Evaluation (Sepsis-3 Criteria) | Sepsis-3 Criteria | `sofa_score` | SOFA Score (0-24 — sepsis if acute increase ≥2) | `number` |  |  |  |
| Sepsis Evaluation (Sepsis-3 Criteria) | Sepsis-3 Criteria | `qsofa_positive` | qSOFA positive (≥2 of: RR ≥22, altered mentation, SBP ≤100) — rapid bedside screen | `checkbox` |  |  |  |
| Sepsis Evaluation (Sepsis-3 Criteria) | Sepsis-3 Criteria | `lactate` | Serum Lactate (mmol/L — ≥2 = sepsis; ≥4 = septic shock) | `number` |  |  |  |
| Sepsis Evaluation (Sepsis-3 Criteria) | Sepsis-3 Criteria | `map` | MAP (mmHg — septic shock if <65 despite fluids) | `number` |  |  |  |
| Sepsis Evaluation (Sepsis-3 Criteria) | SEP-1 Bundle (CMS 3-Hour Bundle) | `lactate_drawn_time` | Lactate drawn time (document for SEP-1) | `text` |  |  |  |
| Sepsis Evaluation (Sepsis-3 Criteria) | SEP-1 Bundle (CMS 3-Hour Bundle) | `blood_cultures_before_abx` | Blood cultures drawn BEFORE antibiotics (≥2 sets) | `checkbox` |  |  |  |
| Sepsis Evaluation (Sepsis-3 Criteria) | SEP-1 Bundle (CMS 3-Hour Bundle) | `broad_abx_given` | Broad-spectrum antibiotics given within 1 hour (septic shock) / 3 hours (sepsis) | `checkbox` |  |  |  |
| Sepsis Evaluation (Sepsis-3 Criteria) | SEP-1 Bundle (CMS 3-Hour Bundle) | `ivf_30ml_kg` | 30 mL/kg crystalloid bolus given (if hypotensive or lactate ≥4) | `checkbox` |  |  |  |
| Sepsis Evaluation (Sepsis-3 Criteria) | SEP-1 Bundle (CMS 3-Hour Bundle) | `vasopressor_started` | Vasopressor started (norepinephrine — MAP target ≥65 if refractory to fluids) | `checkbox` |  |  |  |
| Sepsis Evaluation (Sepsis-3 Criteria) | Source Control and Antibiotics | `abx_given` | Antibiotics Administered (agent, dose, time) | `text` |  |  |  |
| Sepsis Evaluation (Sepsis-3 Criteria) | Source Control and Antibiotics | `source_control` | Source Control Intervention (I+D, cholecystostomy, IR drainage, line removal) | `textarea` |  |  |  |
| Sepsis Evaluation (Sepsis-3 Criteria) | Source Control and Antibiotics | `icu_indicated` | ICU admission for hemodynamic monitoring / vasopressors | `checkbox` |  |  |  |
| Sepsis Evaluation (Sepsis-3 Criteria) | Source Control and Antibiotics | `notes` | Assessment and Plan | `textarea` |  |  |  |

### ED: Stroke / TIA — `emergency_stroke_cf`

Screen: 1 page(s) · 4 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Stroke / TIA Evaluation | Stroke Presentation | `last_known_normal` | Last Known Normal (time — for tPA / thrombectomy eligibility) | `text` |  |  |  |
| Stroke / TIA Evaluation | Stroke Presentation | `nihss_score` | NIHSS Score (0-42 — ≥4 significant deficit) | `number` |  |  |  |
| Stroke / TIA Evaluation | Stroke Presentation | `symptoms` | Neurological Symptoms (facial droop, arm weakness, speech, vision, gait) | `textarea` |  |  |  |
| Stroke / TIA Evaluation | Stroke Presentation | `glucose` | Point-of-Care Glucose (mg/dL — must exclude hypoglycemia) | `number` |  |  |  |
| Stroke / TIA Evaluation | Stroke Presentation | `bp` | Blood Pressure (mmHg — tPA threshold <185/110) | `text` |  |  |  |
| Stroke / TIA Evaluation | Acute Imaging | `ct_head_result` | Non-Contrast CT Head | `select` |  |  |  |
| Stroke / TIA Evaluation | Acute Imaging | `aspects_score` | ASPECTS Score (0-10 — <6 predicts poor thrombectomy outcome) | `number` |  |  |  |
| Stroke / TIA Evaluation | Acute Imaging | `cta_lvo` | Large vessel occlusion (LVO) on CTA (MCA / ICA / basilar — thrombectomy candidate) | `checkbox` |  |  |  |
| Stroke / TIA Evaluation | Acute Imaging | `mri_dwi` | MRI DWI restriction confirming ischemic territory | `checkbox` |  |  |  |
| Stroke / TIA Evaluation | Reperfusion Decision | `tpa_given` | IV alteplase (tPA) administered (≤4.5 hrs from onset, no contraindications) | `checkbox` |  |  |  |
| Stroke / TIA Evaluation | Reperfusion Decision | `tpa_dose` | tPA Dose (0.9 mg/kg, max 90 mg — 10% bolus, rest over 60 min) | `text` |  |  |  |
| Stroke / TIA Evaluation | Reperfusion Decision | `thrombectomy_eligible` | Mechanical thrombectomy eligible (LVO + ASPECTS ≥6 + ≤24 hrs with appropriate imaging selection) | `checkbox` |  |  |  |
| Stroke / TIA Evaluation | Reperfusion Decision | `contraindications` | tPA Contraindications (if not given) | `textarea` |  |  |  |
| Stroke / TIA Evaluation | Admission Plan | `stroke_unit` | Admit to stroke unit (stroke protocol: cardiac monitoring, aspirin, statin, swallowing screen) | `checkbox` |  |  |  |
| Stroke / TIA Evaluation | Admission Plan | `antiplatelets` | Dual antiplatelet (aspirin 325 mg + clopidogrel for TIA/minor stroke × 21 days — CHANCE/POINT trial) | `checkbox` |  |  |  |
| Stroke / TIA Evaluation | Admission Plan | `af_workup` | Cardiac monitoring for AF (cardioembolic source) | `checkbox` |  |  |  |
| Stroke / TIA Evaluation | Admission Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Hypertensive Crisis — `emergency_hypertensive_crisis_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hypertensive Crisis — Emergency vs Urgency and Targeted Treatment | Classification and Drug Selection | `hc_f1` | Hypertensive Crisis Evaluation: DEFINITIONS AND CLASSIFICATION (HYPERTENSIVE URGENCY: BP OVER 180/120 WITHOUT ACUTE END-ORGAN DAMAGE; HEADACHE DIZZINESS EPISTAXIS; NO IMMEDIATE DANGER; OUTPATIENT MANAGEMENT USUALLY; REINSTITUTE HOLD MEDICATIONS; HYPERTENSIVE EMERGENCY: BP OVER 180/120 WITH ACUTE END-ORGAN DAMAGE; IMMEDIATE IV TREATMENT REQUIRED ICU; ACUTE HEART FAILURE FLASH PULMONARY EDEMA; ACUTE CORONARY SYNDROME ACS; AORTIC DISSECTION MOST DRAMATIC; HYPERTENSIVE ENCEPHALOPATHY; ACUTE ISCHEMIC STROKE; HEMORRHAGIC STROKE; ACUTE RENAL FAILURE; ECLAMPSIA PRE-ECLAMPSIA; THROMBOTIC THROMBOCYTOPENIC PURPURA TTP HUS; RETINAL HEMORRHAGE PAPILLEDEMA Grade 3-4; TARGET ORGAN DAMAGE ASSESSMENT (NEUROLOGICAL EXAM Altered Mental Status Focal Deficits; CHEST PAIN BACK PAIN CHARACTER; DYSPNEA; VISUAL CHANGES; URINE OUTPUT; LABS: CREATININE BMP TREND; URINALYSIS HEMATURIA PROTEINURIA CASTS; CBC THROMBOCYTOPENIA MICROANGIOPATHY; TROPONIN ECG ACS; LDH SCHISTOCYTES HEMOLYSIS TTP; LACTATE DEHYDROGENASE; BLOOD SMEAR; CXR FLASH PULMONARY EDEMA; CT HEAD Without Contrast ICH ISCHEMIA; CT CHEST ABDOMEN AORTIC DISSECTION If Suspected MEDIASTINAL WIDENING BACK PAIN; ECHO IF NEEDED DISSECTION TTE TEE; BLOOD PRESSURE GOALS BY CONDITION: GENERAL HYPERTENSIVE EMERGENCY (LOWER NOT MORE THAN 25 pct IN FIRST HOUR; THEN 160/100-110 NEXT 2-6H; THEN GRADUALLY TOWARD NORMAL 24-48H; AVOID RAPID OVERCORRECTION Ischemia; AORTIC DISSECTION SPECIFIC GOALS (HEART RATE UNDER 60 FIRST Then BP; TARGET SBP 100-120 mmHg MOST AGGRESSIVE; ESMOLOL FIRST THEN NICARDIPINE; ISCHEMIC STROKE SPECIAL CASE: IF NOT tPA CANDIDATE Permit HTN Under 220/120; IF tPA CANDIDATE Under 185/110 Before tPA; LOWER 180/105 AFTER tPA Very Slowly; HEMORRHAGIC STROKE TARGET UNDER 140 SBP Nicardipine ICH If Can Tolerate; ECLAMPSIA TARGET UNDER 160/110 Hydralazine Labetalol; AVOID NITROPRUSSIDE PREGNANCY) | `text` |  |  |  |
| Hypertensive Crisis — Emergency vs Urgency and Targeted Treatment | Classification and Drug Selection | `hc_f2` | IV Drug Selection by Clinical Scenario | `select` |  |  |  |

### Intracerebral Hemorrhage (ICH) — `emergency_medicine_hemorrhagic_stroke_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Intracerebral Hemorrhage — BP, Scoring, and Intervention | Initial BP Control and Reversal | `bp_management` | Blood Pressure Management (INTERACT2: early intensive BP lowering (target SBP <140) vs. SBP <180: better functional outcomes; ATACH-2: SBP target <110-139: no benefit + more AKI; NICE 2023 + AHA/ASA 2022: SBP 130-140 mmHg if presenting SBP 150-220; DO NOT lower if >220 (aggressive lowering may worsen ischemic penumbra); agents: IV labetalol (10-20 mg IV Q10-15 min), IV nicardipine (5 mg/hr, titrate), IV clevidipine; achieve target within 1h; MAP reduction: do NOT reduce MAP >15-20% in first hour to prevent secondary ischemia; AVOID hydralazine (erratic effect), nitroprusside (ICP elevation); maintain SBP <140 for 24h after target achieved) | `text` |  |  |  |
| Intracerebral Hemorrhage — BP, Scoring, and Intervention | Initial BP Control and Reversal | `coag_reversal` | Anticoagulation Reversal in ICH | `select` |  |  |  |
| Intracerebral Hemorrhage — BP, Scoring, and Intervention | ICH Score and Surgical Criteria | `ich_score` | ICH Score (Hemphill 2001; 5 components: GCS (3-4 = 2pts; 5-12 = 1pt; 13-15 = 0); ICH volume >30 mL (1pt); IVH presence (1pt); infratentorial origin (1pt); age >80 (1pt); total 0-6; 30-day mortality: 0pts = 0%; 1pt = 13%; 2pts = 26%; 3pts = 72%; 4pts = 97%; 5pts+ = near-100%; limitations: self-fulfilling prophecy if used to guide DNR decisions; AHA/ASA: avoid withdrawing care within first 24h except patient clearly moribund; DNRO early = worse outcomes independent of physiology; secondary ICH Score: includes anticoagulation and spot sign) | `text` |  |  |  |
| Intracerebral Hemorrhage — BP, Scoring, and Intervention | ICH Score and Surgical Criteria | `surgical` | Surgical Intervention Criteria | `select` |  |  |  |

### Major Trauma Primary Survey — `emergency_medicine_trauma_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Major Trauma — Primary Survey and Resuscitation (ATLS) | Mechanism and Initial Assessment | `mechanism_of_injury` | Mechanism of Injury | `select` |  |  |  |
| Major Trauma — Primary Survey and Resuscitation (ATLS) | Mechanism and Initial Assessment | `gcs` | GCS Score (Glasgow Coma Scale; eyes (E) 1-4 + verbal (V) 1-5 + motor (M) 1-6; max 15; mild TBI 13-15; moderate 9-12; severe ≤8; intubate if GCS ≤8 or airway compromise; pupillary reaction; lateralizing signs; herniation: fixed dilated pupil, decerebrate posturing, Cushing reflex) | `number` |  |  |  |
| Major Trauma — Primary Survey and Resuscitation (ATLS) | ATLS Primary Survey | `airway` | A — Airway Status | `select` |  |  |  |
| Major Trauma — Primary Survey and Resuscitation (ATLS) | ATLS Primary Survey | `circulation` | C — Hemorrhage Control and Resuscitation | `select` |  |  |  |
| Major Trauma — Primary Survey and Resuscitation (ATLS) | ATLS Primary Survey | `fast_result` | FAST Exam Result | `select` |  |  |  |

### Post-Cardiac Arrest — `emergency_post_cardiac_arrest_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Post-Cardiac Arrest Care — Targeted Temperature and Neuroprognostication | ROSC Management and Targeted Temperature | `pca_f1` | Post-Cardiac Arrest Evaluation: IMMEDIATE POST-ROSC CARE (RETURN OF SPONTANEOUS CIRCULATION ROSC; AIRWAY Intubate If Not Already; OXYGENATION SpO2 94-98 pct Avoid Hyperoxia FiO2 Wean ASAP; HYPOXIA Avoid SpO2 Under 94; VENTILATION ETCO2 35-45 mmHg Normocarbia Avoid Hyperventilation Reduce Cerebral Blood Flow; HEMODYNAMICS: MAP Over 65 mmHg TARGET Over 80-100 mmHg Some Centers; VASOPRESSORS Norepinephrine First-Line; AVOID Hypotension Worsens Neurologic Outcome; FLUID RESUSCITATION Crystalloid Guided MAP; 12-LEAD ECG Immediate STEMI Or LBBB New; TROPONIN Elevation Expected Post-Arrest Cardiac Injury; LABS ABG Electrolytes BMP CBC Coagulation; GLUCOSE CONTROL 140-180 mg/dL Avoid Hypo Or Hyperglycemia; AVOID FEVER TEMPERATURE Over 37.7 STRONGLY ASSOCIATED Poor Outcome; TARGETED TEMPERATURE MANAGEMENT TTM (TTM TRIAL 2013 33 C vs 36 C No Difference Landmark; TTM2 TRIAL 2021 Normothermia 37.5 vs Hypothermia 33 C No Difference Outcomes; CURRENT RECOMMENDATION Prevent Fever Temperature Under 37.7-38 C For 72H; STILL ACCEPTED 33-36 C Some Centers High-Volume If Protocol; DO NOT REWARM Too Fast Under 0.25 C/Hour; SURFACE COOLING Device Arctic Sun; INTRAVASCULAR Catheter Cooling Precise; ICE PACKS BAGS Simple Cold Infusion Initial; SHIVERING MANAGEMENT Magnesium Buspirone Acetaminophen Meperidine Propofol Dexmedetomidine Vecuronium Severe); CORONARY ANGIOGRAPHY TIMING: VF ARREST = CATH LAB IMMEDIATE STEMI Or LBBB; NON-SHOCKABLE PEA ASYSTOLE No STEMI = Delayed 24-48H No Benefit Emergent COACT TOMAHAWK Trials; SHOCKABLE VF VT NO STEMI = SELECTIVE 24-48H Versus Emergent Equivalent COACT | `text` |  |  |  |
| Post-Cardiac Arrest Care — Targeted Temperature and Neuroprognostication | ROSC Management and Targeted Temperature | `pca_f2` | Neuroprognostication and Goals of Care | `select` |  |  |  |

### Sepsis Hour-1 Bundle — `emergency_medicine_sepsis_protocol_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sepsis — Recognition, Bundle, and Vasopressors | Sepsis-3 Criteria and Risk Stratification | `sepsis_criteria` | Sepsis-3 Classification | `select` |  |  |  |
| Sepsis — Recognition, Bundle, and Vasopressors | Sepsis-3 Criteria and Risk Stratification | `lactate` | Lactate (mmol/L; normal <2; 2-4 = elevated, higher mortality; >4 = very high; repeat at 2h if initial >2; lactate-guided resuscitation (ProCESS, ARISE, ProMISe) — no benefit of aggressive protocolized vs. usual care; point-of-care lactate preferred for speed; lactate clearance >=10% at 2h = favorable; persistent elevation = ongoing hypoperfusion or impaired hepatic clearance) | `number` |  |  |  |
| Sepsis — Recognition, Bundle, and Vasopressors | Hour-1 Bundle and Antibiotics | `hour1_bundle` | Surviving Sepsis Hour-1 Bundle (2018 CMS SEP-1 Core Measure: 1) Measure lactate (repeat if >2 mmol/L at 2h); 2) Blood cultures before antibiotics (at least 2 sets from 2 different sites; do not delay antibiotics >45 min for culture); 3) Broad-spectrum antibiotics within 1h of sepsis recognition; 4) 30 mL/kg IV crystalline for hypotension OR lactate >4 (reassess fluid responsiveness: passive leg raise + pulse pressure variation; avoid fluid overload in ARDS); 5) Vasopressors if MAP <65 after fluids; TARGET: MAP >=65, UO >0.5 mL/kg/h, lactate clearance >=10%) | `text` |  |  |  |
| Sepsis — Recognition, Bundle, and Vasopressors | Hour-1 Bundle and Antibiotics | `antibiotic_selection` | Empiric Antibiotic Selection | `select` |  |  |  |
| Sepsis — Recognition, Bundle, and Vasopressors | Vasopressor and Steroid Management | `vasopressor_choice` | Vasopressor Selection | `select` |  |  |  |

### Sepsis Resuscitation (Hour-1 Bundle) — `emergency_medicine_sepsis_resuscitation_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sepsis-3 — Diagnosis, Hour-1 Bundle, and Vasopressor Selection | Sepsis-3 Criteria and qSOFA | `sepsis3_dx` | Sepsis-3 Definition (Singer 2016; SEPSIS-3: life-threatening organ dysfunction from dysregulated host response to infection; SOFA score: 6 components — respiration (PaO2/FiO2), coagulation (platelets), liver (bilirubin), cardiovascular (MAP/vasopressors), CNS (GCS), renal (Cr/UO); SOFA increase >=2 points from baseline = organ dysfunction; SEPTIC SHOCK: sepsis + vasopressor requirement to maintain MAP >=65 + serum lactate >2 mmol/L despite adequate fluid resuscitation; qSOFA (bedside screening): 2 of 3: altered mental status (GCS <15), RR >=22, SBP <=100 — sensitivity lower but rapid; NEWS2 may outperform qSOFA for deterioration prediction; SIRS criteria: abandoned for sepsis definition but still used in some systems) | `text` |  |  |  |
| Sepsis-3 — Diagnosis, Hour-1 Bundle, and Vasopressor Selection | Sepsis-3 Criteria and qSOFA | `hour1_bundle` | SSC Hour-1 Bundle (Surviving Sepsis Campaign 2018) | `select` |  |  |  |
| Sepsis-3 — Diagnosis, Hour-1 Bundle, and Vasopressor Selection | Vasopressor Strategy and Source Control | `vasopressors` | Vasopressor Selection (norepinephrine: first-line (CATS trial; alpha >> beta effect; 0.01-3 mcg/kg/min; superior to dopamine for mortality, fewer arrhythmias); VASST trial: vasopressin (0.03 units/min) + norepinephrine: non-inferior; reduces norepinephrine requirements; AVP saves corticosteroids (VANCS trial); angiotensin II (Giapreza): for vasodilatory shock refractory to catecholamines + AVP; ATHOS-3 trial: more patients reaching MAP target; dopamine: no longer first-line (more arrhythmias); phenylephrine: pure alpha agonist; avoid in cardiac output-dependent shock; EARLY USE of AVP (vasopressin): VANCS2: AVP + hydrocortisone + fludrocortisone — no difference; dobutamine for cardiogenic component; corticosteroids: hydrocortisone 200 mg/day IV for norepinephrine-refractory septic shock (ADRENAL/APROCCHSS trials)) | `text` |  |  |  |
| Sepsis-3 — Diagnosis, Hour-1 Bundle, and Vasopressor Selection | Vasopressor Strategy and Source Control | `source_control` | Source Control and Antibiotic De-Escalation | `select` |  |  |  |

### Stroke Code / tPA / Thrombectomy — `emergency_medicine_stroke_code_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Stroke Code — tPA and Mechanical Thrombectomy | Rapid Stroke Assessment | `nihss` | NIHSS Score at Presentation (0-42; ≤4 = minor; 5-15 = moderate; 16-20 = moderately severe; >20 = severe; measure q1h until stable; guides IV tPA and thrombectomy eligibility) | `number` |  |  |  |
| Acute Stroke Code — tPA and Mechanical Thrombectomy | Rapid Stroke Assessment | `lvo` | Large Vessel Occlusion (LVO) on CT Angiogram | `select` |  |  |  |
| Acute Stroke Code — tPA and Mechanical Thrombectomy | Rapid Stroke Assessment | `time_last_known_well` | Time Last Known Well (TLW; document precisely; door-to-needle target <60 min; onset-to-door + door-to-needle = onset-to-treatment goal <4.5h for tPA; wake-up stroke: MRI DWI/FLAIR mismatch extends window) | `text` |  |  |  |
| Acute Stroke Code — tPA and Mechanical Thrombectomy | IV Alteplase Eligibility | `tpa_eligibility` | IV tPA Eligibility | `select` |  |  |  |
| Acute Stroke Code — tPA and Mechanical Thrombectomy | Mechanical Thrombectomy | `thrombectomy_decision` | Thrombectomy Decision | `select` |  |  |  |

### Toxicology / Overdose — `emergency_medicine_toxicology_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Toxicology and Overdose Assessment | Toxidrome Identification | `toxidrome` | Toxidrome | `select` |  |  |  |
| Toxicology and Overdose Assessment | Toxidrome Identification | `glasgow_coma` | Glasgow Coma Scale (3-15) | `number` |  |  |  |
| Toxicology and Overdose Assessment | Antidotes | `antidote` | Antidote Administered | `select` |  |  |  |

### Toxicology / Overdose — `emergency_toxicology_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Toxicology — Overdose Recognition and Antidotes | Overdose Syndromes and Antidotes | `tox_f1` | Toxicology Evaluation: INITIAL APPROACH ALL OD (AIRWAY BREATHING CIRCULATION ABC; Oxygen Monitor IV; GLUCOSE Check Empiric; THIAMINE 100 mg IV Before Dextrose; NALOXONE 0.4-2 mg IV/IM/IN Empiric Opioid; ACTIVATED CHARCOAL 1g/kg PO NG Within 1H Intact Airway Alert No Ileus Exclude Caustics Hydrocarbons; GASTRIC LAVAGE Rarely If Life-Threatening Drug Within 1H And Cannot Charcoal; WHOLE BOWEL IRRIGATION WBI GOLYTELY Iron Lithium Lead Sustained-Release; IDENTIFY TOXIDROME PATTERN: OPIOID TOXIDROME (TRIAD Miosis Pinpoint Pupils; Respiratory Depression; CNS Depression Somnolence; HEROIN Fentanyl Methadone Oxycodone Morphine Tramadol; NALOXONE ANTIDOTE 0.4 mg q2-3 min Titrate Breathing; 2 mg IV Bolus Start; DRIP If Repeated Dosing Methadone Long-Half-Life; CAUTION Abrupt Reversal Withdrawal Seizures Agitation Vomiting Pulmonary Edema; DURATION Naloxone Shorter Than Drug Observe 4-6H Post Last Naloxone; METHADONE VERY LONG QT Prolongation; FENTANYL ANALOG Require Higher Naloxone; TRAMADOL Also Serotonin Syndrome Seizures Lowers Threshold); SYMPATHOMIMETIC Cocaine Amphetamines Bath Salts MDMA (Tachycardia Hypertension Hyperthermia Dilated Pupils Diaphoresis Agitation; TREATMENT Benzodiazepines Cooling; AVOID Beta-Blockers Unopposed Alpha; COCAINE MI: ASA NTG; NO BETA-BLOCK; HYPERTHERMIA Aggressive Cooling Core Temp Over 41C = Emergency External And Internal); CHOLINERGIC ORGANOPHOSPHATES SLUDGE (Salivation Lacrimation Urination Defecation GI Emesis; Also Bradycardia Bronchospasm Miosis Seizures; ANTIDOTE ATROPINE 2-4 mg IV q5-10 min Titrate Dry Secretions Not HR; PRALIDOXIME 2-PAM Early Reactive Phosphate Reactivate Acetylcholinesterase Before Aging; ANTICHOLINERGIC Antihistamine Antipsychotic TCA: Dry As Bone Blind As Bat Hot Mad Red; Physostigmine Antidote Severe Agitation Not Routine TCA) | `text` |  |  |  |
| Toxicology — Overdose Recognition and Antidotes | Overdose Syndromes and Antidotes | `tox_f2` | Specific Antidotes and Toxin Management | `select` |  |  |  |

## Internal Medicine

### ANCA Vasculitis (Advanced) — `internal_medicine_vasculitis_anca_depth_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ANCA Vasculitis — GPA/MPA, RTX, Avacopan, Relapse Management | GPA vs. MPA vs. EGPA Classification | `anca_types` | ANCA Vasculitis Phenotypes and Serology Correlation (ANCA-ASSOCIATED VASCULITIS (AAV): SMALL VESSEL VASCULITIS; GRANULOMATOSIS WITH POLYANGIITIS (GPA: formerly Wegener): granulomatous inflammation + necrotizing vasculitis; UPPER AIRWAY (sinusitis, otitis, saddle-nose deformity); LOWER AIRWAY (pulmonary nodules, cavitation); KIDNEY (necrotizing crescentic GN); EYE (scleritis, orbital pseudotumor); PR3-ANCA (c-ANCA pattern on IIF): 80-90% of GPA; MICROSCOPIC POLYANGIITIS (MPA): necrotizing vasculitis WITHOUT granulomas; KIDNEY: dominant involvement (RPGN); LUNG: diffuse alveolar hemorrhage (DAH); NERVE: mononeuritis multiplex; MPO-ANCA (p-ANCA pattern): 60-70% of MPA; EOSINOPHILIC GRANULOMATOSIS WITH POLYANGIITIS (EGPA: formerly Churg-Strauss): eosinophilic tissue infiltration + asthma + granulomas; BLOOD EOSINOPHILIA >=10%; CARDIAC: most common cause of death; cardiomyopathy; MPO-ANCA: 40% (ANCA-positive predict vasculitic features); SEROLOGY: PR3-ANCA (anti-PR3/anti-proteinase 3): GPA phenotype; MPO-ANCA (anti-MPO/anti-myeloperoxidase): MPA/EGPA phenotype; SPECIFICITY: capture ELISA preferred over IIF; ANCA POSITIVE IN: GPA (90%), MPA (75%), EGPA (40%), drug-induced ANCA vasculitis (hydralazine, PTU, minocycline); MAYO FIVE-FACTOR SCORE (FFS): predicts mortality in EGPA; renal insufficiency, proteinuria, cardiac, GI, CNS involvement; FFS >=2: cyclophosphamide; FFS 0: steroids alone possible | `text` |  |  |  |
| ANCA Vasculitis — GPA/MPA, RTX, Avacopan, Relapse Management | GPA vs. MPA vs. EGPA Classification | `anca_diagnosis` | ANCA Vasculitis Diagnosis and Biopsy | `select` |  |  |  |
| ANCA Vasculitis — GPA/MPA, RTX, Avacopan, Relapse Management | Induction and Maintenance in ANCA Vasculitis | `induction` | Induction Therapy — Rituximab vs. Cyclophosphamide (INDUCTION THERAPY ANCA VASCULITIS: HIGH-DOSE CORTICOSTEROIDS: methylprednisolone 500-1000 mg IV x3 days (severe organ involvement/DAH); THEN prednisone 1 mg/kg/day (max 80 mg) → taper over 5-6 months; RITUXIMAB (RTX): 375 mg/m2 weekly x4 OR 1000 mg x2 (2 weeks apart); RAVE trial (GPA/MPA): RTX = CYC for induction; RITUXVAS trial: RTX = CYC; PREFERENCE FOR RTX: relapse; young/reproductive age; CYCLOPHOSPHAMIDE (CYC): IV pulse 15 mg/kg Q2-3 weeks x6 pulses OR oral CYC 2 mg/kg/day; MESNA (uroprotection for oral CYC); bladder toxicity; PCP prophylaxis (TMP-SMX DS 3x/week); PLASMA EXCHANGE (PLEX): PEXIVAS trial (2020): PLEX + standard vs. standard alone: NO REDUCTION in primary endpoint (ESRD/death); BUT: reduced early ESRD (< 12 months); CURRENT ROLE: severe DAH (extrapolated from PEX-induced improvement); creatinine >5.7 at presentation (unclear benefit); NOT ROUTINE; AVACOPAN (Tavneos): C5aR1 inhibitor; ADVOCATE trial: avacopan non-inferior to prednisone taper for remission + superior sustained remission at 52 weeks; FDA 2021 for GPA/MPA; 30 mg BID; replaces corticosteroid taper; HEPATOTOXICITY: LFT monitoring; BENEFIT: steroid-sparing; reduces steroid side effects; COMBINATION: rituximab + avacopan replacing rituximab + steroids | `text` |  |  |  |
| ANCA Vasculitis — GPA/MPA, RTX, Avacopan, Relapse Management | Induction and Maintenance in ANCA Vasculitis | `maintenance_relapse` | Maintenance Therapy and Relapse Prevention | `select` |  |  |  |

### Acute Liver Failure (KCH) — `internal_medicine_acute_liver_failure_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Liver Failure — Etiology, Management, and Transplant Criteria | ALF Etiology and Initial Assessment | `alf_definition` | ALF Definition and Etiology (ALF: acute liver injury (coagulopathy: INR >1.5) + encephalopathy + no pre-existing cirrhosis + <26 weeks duration; SUB-ACUTE: INR >1.5 + jaundice + no encephalopathy (broader surveillance); ETIOLOGIES: acetaminophen: 50% of ALF in US; viral hepatitis: HAV, HBV (acute), HEV (developing countries, pregnancy); autoimmune hepatitis (AIH): ANA, ASMA, serum IgG, liver biopsy; ischemic hepatitis: shock liver (AST >5000 in ischemia); DILI: drug-induced; idiosyncratic; Budd-Chiari (acute hepatic vein thrombosis): hypercoagulability; Wilson disease (acute): hemolysis + ALF + low AP (Wilson AP paradox); Kayser-Fleischer rings; serum ceruloplasmin low; 24h urine copper high; pregnancy: AFLP (acute fatty liver of pregnancy) + HELLP; herpes simplex hepatitis (rare, early acyclovir); mushroom poisoning (Amanita phalloides); indeterminate: 15% | `text` |  |  |  |
| Acute Liver Failure — Etiology, Management, and Transplant Criteria | ALF Etiology and Initial Assessment | `initial_management` | Initial Management and Monitoring | `select` |  |  |  |
| Acute Liver Failure — Etiology, Management, and Transplant Criteria | Transplant Listing Criteria and Specific Treatments | `kch_criteria` | KCH Criteria and ALFSG Model (KING COLLEGE HOSPITAL CRITERIA: APAP-induced ALF: pH <7.30 (best single predictor); OR ALL THREE: grade III-IV HE + PT >100 sec (INR >6.5) + Cr >3.4 mg/dL; ACCURACY: sensitivity 58-68%, specificity 87-90%; NON-APAP ALF: PT >100 sec (INR >6.5) alone; OR 3 of 5: INR >3.5, age <10 or >40, etiology (DILI, indeterminate, Wilson), duration jaundice to encephalopathy >7 days, bilirubin >17.5 mg/dL; ALFSG PROGNOSTIC MODEL: International serum phosphate + INR + bilirubin model; phosphate <0.65 mmol/L (hypophosphatemia during peak ALF) predicts poor prognosis; MELD-Na: higher score = increased mortality; CONTRAINDICATIONS to transplant: sepsis/uncontrolled infection, fixed dilated pupils (brain death), active SUD within 6 months, inability to comply with post-transplant care, metastatic malignancy) | `text` |  |  |  |
| Acute Liver Failure — Etiology, Management, and Transplant Criteria | Transplant Listing Criteria and Specific Treatments | `specific_tx` | Etiology-Specific Treatments | `select` |  |  |  |

### Acute Pancreatitis — `internal_medicine_acute_pancreatitis_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Pancreatitis — Severity, ERCP, and Necrotizing Pancreatitis | Severity Scoring and Classification | `severity_score` | Severity Classification (RAC 2012) | `select` |  |  |  |
| Acute Pancreatitis — Severity, ERCP, and Necrotizing Pancreatitis | Severity Scoring and Classification | `etiology` | Etiology Workup (gallstones + alcohol = 70%; check: LFTs (ALT >3x = gallstone AP), lipid panel (triglyceride AP if TG >1000), Ca2+, IgG4 (autoimmune), MRCP/EUS if idiopathic (occult stones, pancreas divisum); ERCP: biliary pancreatitis with cholangitis or persistent obstruction; laparoscopic cholecystectomy during same hospitalization for mild biliary pancreatitis (reduces recurrence from 25% to 8%); delay cholecystectomy for severe AP until resolved; avoid ERCP for biliary AP without cholangitis or obstruction (MRCGN/ANZGBA guideline)) | `text` |  |  |  |
| Acute Pancreatitis — Severity, ERCP, and Necrotizing Pancreatitis | Necrotizing Pancreatitis Management | `necrotizing_tx` | Necrotizing Pancreatitis | `select` |  |  |  |

### Adrenal Crisis (Sick Day Rules) — `internal_medicine_adrenal_crisis_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Adrenal Insufficiency — Crisis Recognition, Sick Day Rules, and Steroid Coverage | AI Classification and Diagnosis | `ai_classification` | Primary vs. Secondary/Tertiary Adrenal Insufficiency | `select` |  |  |  |
| Adrenal Insufficiency — Crisis Recognition, Sick Day Rules, and Steroid Coverage | AI Classification and Diagnosis | `lab_workup` | Adrenal Crisis Recognition (BP <90 systolic + acute illness; hallmark: hemodynamic instability disproportionate to illness; nausea/vomiting + abdominal pain + fever in AI patient; precipitants: infection, surgery, vomiting, inadequate stress dosing; key labs: Na (hyponatremia), K (hyperkalemia in primary AI), glucose (hypoglycemia), cortisol (random <18 suspicious in crisis context); CBC: eosinophilia (primary AI); DO NOT DELAY treatment for lab results; TREAT EMPIRICALLY if strongly suspected) | `text` |  |  |  |
| Adrenal Insufficiency — Crisis Recognition, Sick Day Rules, and Steroid Coverage | Adrenal Crisis Treatment and Sick Day Rules | `crisis_treatment` | Adrenal Crisis Emergency Treatment (ENDOCRINE SOCIETY 2016; IMMEDIATE: hydrocortisone 100 mg IV bolus; THEN: 200 mg hydrocortisone/24h continuous IV infusion OR 50 mg IV Q6h; IV saline: 1 liter NS rapidly over 30-60 minutes (volume resuscitation); glucose: 50% dextrose if hypoglycemic; ICU monitoring; fludrocortisone NOT needed in crisis (high-dose hydrocortisone has sufficient mineralocorticoid activity at >50 mg/day); taper: after hemodynamically stable + tolerating PO: taper to maintenance over 24-48h; AFTER 50 MG/DAY: add fludrocortisone 0.05-0.2 mg QD (primary AI only); MAINTENANCE: hydrocortisone 15-20 mg/day divided (10 mg AM + 5 mg early afternoon); cortisone acetate 25 mg AM + 12.5 mg PM (UK); prednisolone 3-5 mg AM: alternative (convenient once-daily); monitor: clinical (energy, fatigue, BP, weight) NOT cortisol levels (exogenous steroid suppresses HPA) | `text` |  |  |  |
| Adrenal Insufficiency — Crisis Recognition, Sick Day Rules, and Steroid Coverage | Adrenal Crisis Treatment and Sick Day Rules | `sick_day_rules` | Sick Day Rules and Emergency Card | `select` |  |  |  |

### Alcohol Use Disorder — `internal_medicine_alcohol_use_disorder_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Alcohol Use Disorder — Screening, Withdrawal, and Treatment | AUDIT-C Screening and DSM-5 Criteria | `audit_c` | AUDIT-C Score (Alcohol Use Disorders Identification Test-Consumption; 3 questions: frequency 0-4, quantity 0-4, binge frequency 0-4; total 0-12; positive screen: men >=4, women >=3; CAGE: 2+ = likely AUD; brief intervention (FRAMES): Feedback, Responsibility, Advice, Menu, Empathy, Self-efficacy; NIAAA low-risk drinking: men <=4 drinks/day or <=14/week; women <=3 drinks/day or <=7/week; brief intervention: 15-20% reduction in consumption at 1 year) | `number` |  |  |  |
| Alcohol Use Disorder — Screening, Withdrawal, and Treatment | AUDIT-C Screening and DSM-5 Criteria | `dsm5_aud` | DSM-5 AUD Criteria (>=2 of 11 criteria in 12 months: craving, using more than intended, persistent desire to cut down, time spent, failure to fulfill obligations, social/occupational/recreational problems, use in hazardous situations, physical hazard, tolerance, withdrawal; mild 2-3; moderate 4-5; severe >=6; comorbid psychiatric disorders: depression 33%, anxiety 20%; screen with PHQ-9 and GAD-7 before and after sobriety; some psychiatric symptoms resolve with sustained abstinence (4-8 weeks)) | `text` |  |  |  |
| Alcohol Use Disorder — Screening, Withdrawal, and Treatment | Alcohol Withdrawal CIWA-Ar | `ciwa_score` | CIWA-Ar Score (Clinical Institute Withdrawal Assessment; 10 items: nausea/vomiting, tremor, paroxysmal sweats, anxiety, agitation, tactile disturbances, auditory disturbances, visual disturbances, headache, orientation; each 0-7; total 0-67; mild <8: close monitoring, oral hydration; moderate 8-15: benzodiazepine PRN (symptom-triggered preferred: CIWA-guided); severe >15: scheduled + PRN BZD; AWS seizures: 6-48h after last drink; delirium tremens: 48-72h, mortality 5-10% untreated; Wernicke: confusional state + ophthalmoplegia + ataxia — thiamine 500 mg IV x 3 days BEFORE glucose) | `number` |  |  |  |
| Alcohol Use Disorder — Screening, Withdrawal, and Treatment | Alcohol Withdrawal CIWA-Ar | `aws_treatment` | Alcohol Withdrawal Treatment | `select` |  |  |  |
| Alcohol Use Disorder — Screening, Withdrawal, and Treatment | Long-Term AUD Pharmacotherapy | `aud_medications` | AUD Pharmacotherapy | `select` |  |  |  |

### Anemia Workup — `internal_medicine_anemia_workup_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Anemia — Systematic Workup and Treatment | MCV-Based Classification | `anemia_type` | MCV-Based Classification | `select` |  |  |  |
| Anemia — Systematic Workup and Treatment | MCV-Based Classification | `hemolysis` | Hemolytic Anemia Workup (direct Coombs (DAT): positive = AIHA; warm AIHA: IgG coated; prednisone 1 mg/kg/day first-line; rituximab if steroid-refractory; cold agglutinin: IgM; keep patient warm; rituximab + sutimlimab (Enjaymo — complement inhibitor FDA 2022); PNH: flow cytometry (GPI-deficient clone CD55/CD59 absent); eculizumab or ravulizumab; microangiopathic (MAHA): TTP (ADAMTS13 <10%), HUS (STX-producing E. coli O157), DIC; PLASMIC score for TTP; therapeutic plasma exchange for TTP; G6PD deficiency: X-linked; triggered by oxidants (primaquine, dapsone, fava beans); Heinz bodies) | `text` |  |  |  |
| Anemia — Systematic Workup and Treatment | Iron Replacement and Transfusion | `iron_replacement` | Iron Replacement Strategy | `select` |  |  |  |

### CKD Management — `internal_medicine_ckd_management_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Kidney Disease: Comprehensive Management | CKD Staging and Cause | `ckd_stage` | CKD Stage (KDIGO 2024 Classification) | `select` |  |  |  |
| Chronic Kidney Disease: Comprehensive Management | CKD Staging and Cause | `ckd_albuminuria` | Albuminuria Category | `select` |  |  |  |
| Chronic Kidney Disease: Comprehensive Management | CKD Staging and Cause | `ckd_etiology` | Primary CKD Etiology | `select` |  |  |  |
| Chronic Kidney Disease: Comprehensive Management | CKD Complications Management | `ckd_anemia` | Renal Anemia Management | `select` |  |  |  |
| Chronic Kidney Disease: Comprehensive Management | CKD Complications Management | `ckd_ckd_mbd` | CKD-MBD (Mineral Bone Disease) | `select` |  |  |  |
| Chronic Kidney Disease: Comprehensive Management | CKD Complications Management | `ckd_acid_base` | Metabolic Acidosis Management | `select` |  |  |  |
| Chronic Kidney Disease: Comprehensive Management | CKD Complications Management | `ckd_hyperkalemia` | Hyperkalemia Management (Enables RAAS Use) | `select` |  |  |  |
| Chronic Kidney Disease: Comprehensive Management | CKD Complications Management | `ckd_dialysis_prep` | Dialysis and Transplant Preparation | `select` |  |  |  |
| Chronic Kidney Disease: Comprehensive Management | CKD Complications Management | `ckd_sglt2` | SGLT2 Inhibitor in CKD | `select` |  |  |  |
| Chronic Kidney Disease: Comprehensive Management | CKD Complications Management | `ckd_notes` | CKD Management Notes and Nephrology/Primary Care Coordination | `textarea` |  |  |  |

### Fever of Unknown Origin — `internal_medicine_fever_unknown_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| FUO — Classic vs. Healthcare-associated, PET-CT, AOSD, Lymphoma | FUO Classification and Initial Workup | `fuo_class` | FUO Definition, Categories, and Diagnostic Algorithm (FEVER OF UNKNOWN ORIGIN (FUO) CLASSIC DEFINITION (Petersdorf 1961; Durack updated 1991): Fever >=38.3C (101F) on multiple occasions + Duration >=3 weeks + No diagnosis after 3 outpatient visits OR 3 days inpatient without obvious diagnosis; UPDATED CATEGORIES: CLASSIC FUO: community patient; see above; NOSOCOMIAL FUO: hospitalized >48h; no infection on admission; IMMUNE-DEFICIENT FUO: immunocompromised (neutropenic); TRAVEL-RELATED FUO; ETIOLOGY (CLASSIC FUO): INFECTION (25-30%): TB (most common); endocarditis; intraabdominal abscess; typhoid; brucellosis; Q fever; EBV/CMV; visceral leishmaniasis; MALIGNANCY (25%): lymphoma (Hodgkin + NHL); leukemia; renal cell carcinoma; hepatoma; CONNECTIVE TISSUE/AUTOINFLAMMATORY (20-25%): adult-onset Still disease (AOSD); SLE; RA (juvenile); vasculitis (GCA, PAN); MISCELLANEOUS (15-20%): drug fever; factitious fever; familial Mediterranean fever (FMF); UNDIAGNOSED (5-15%): many have good prognosis; spontaneous resolution; WORKUP SYSTEMATIC APPROACH: HISTORY: travel; animal/insect exposure; medications; TB exposure; HIV risk; dental work (endocarditis); sexual history; tick bite; PHYSICAL EXAM: repeat + thorough; lymphadenopathy; splenomegaly; cardiac murmurs; skin (rash; nodules); eye (uveitis; Roth spots); LABS: CBC; CMP; LFTs; LDH; uric acid; ferritin; ESR; CRP; ANA; RF; ANCA; complement; blood cultures x3; urine culture; monospot; CMV; EBV; HIV; hepatitis B/C; IMAGING: CT chest/abdomen/pelvis; echocardiography | `text` |  |  |  |
| FUO — Classic vs. Healthcare-associated, PET-CT, AOSD, Lymphoma | FUO Classification and Initial Workup | `pet_ct_fuo` | PET-CT, Bone Marrow Biopsy, and Empiric Treatment Strategy | `select` |  |  |  |
| FUO — Classic vs. Healthcare-associated, PET-CT, AOSD, Lymphoma | Adult-onset Still Disease and HLH | `aosd` | AOSD Diagnosis, Ferritin, IL-18, and IL-1/IL-6 Inhibition (ADULT-ONSET STILL DISEASE (AOSD): CLINICAL FEATURES: QUOTIDIAN (daily) HIGH-SPIKING FEVER (>=39C); SALMON-COLORED EVANESCENT RASH (macular/maculopapular; coincides with fever spikes; extremities + trunk; fades with fever); ARTHRITIS (wrist + knee); SORE THROAT; SEROSITIS: pleuritis, pericarditis; HEPATOSPLENOMEGALY; LYMPHADENOPATHY; YAMAGUCHI CRITERIA (5 criteria, 5 major or minor, exclude infection/malignancy/other rheumatic): MAJOR: fever >=39C lasting >=1 week; arthralgia >=2 weeks; typical rash; leukocytosis >=10k with >=80% granulocytes; MINOR: sore throat; lymphadenopathy/splenomegaly; LFT elevation; ANA/RF negative; BIOMARKERS: FERRITIN: markedly elevated (>10,000 ng/mL in severe AOSD); SENSITIVITY 80%, SPECIFICITY 95% for AOSD when >10,000; GLYCOSYLATED FERRITIN (<20% = supports AOSD/HLH vs. infection: >50% glycosylated); IL-18: extremely elevated; specific for AOSD vs. sepsis/infection; TREATMENT: NSAIDS: mild disease; 80% effective short term; CORTICOSTEROIDS: moderate-severe; 0.5-1 mg/kg/day; IL-1 INHIBITORS: ANAKINRA (anti-IL-1R): rapid response; daily SC; CANAKINUMAB (anti-IL-1beta): monthly SC; RILONACEPT (IL-1 trap); IL-6 INHIBITORS: TOCILIZUMAB: effective for refractory + arthritis-dominant; METHOTREXATE: steroid-sparing for articular disease; IMMUNOSUPPRESSION: cyclosporine for HLH complicating AOSD | `text` |  |  |  |
| FUO — Classic vs. Healthcare-associated, PET-CT, AOSD, Lymphoma | Adult-onset Still Disease and HLH | `hlh` | Hemophagocytic Lymphohistiocytosis — Diagnosis and Etoposide Protocol | `select` |  |  |  |

### Hemochromatosis HFE — `internal_medicine_hemochromatosis_hfe_cf`

Screen: 1 page(s) · 1 section(s) · 1 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hereditary Hemochromatosis | Genetics | `hh_f1` | HFE C282Y homozygous. Transferrin saturation >45%. Ferritin >200 women >300 men. Phlebotomy 1 unit/week until ferritin <50. | `text` |  |  |  |

### Hereditary Hemochromatosis — `internal_medicine_hereditary_hemochromatosis_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hereditary Hemochromatosis — Genetics, Diagnosis, Manifestations, and Treatment | HH Genetics and Diagnosis | `hh_gene` | HFE Gene C282Y Homozygous (1 in 200 Northern Europeans, Most Common AR Disorder), H63D Compound Heterozygote, Hepcidin Deficiency Mechanism (HFE Mutation = Hepcidin Deficient = Ferroportin Not Degraded = Increased Intestinal Iron = Organ Iron Deposition), Penetrance Reduced 25-30% Men, and MRI T2* Liver Iron Quantification Without Biopsy (HH GENETICS: HFE GENE chromosome 6p21.3; neurofibromin = RAS-GAP; C282Y/C282Y: most pathogenic; 1 in 200-250 Northern Europeans; H63D: less severe; compound heterozygote intermediate; PENETRANCE: 25-30% men develop disease; women protected by menstruation; MECHANISM: HFE normally stimulates hepcidin; MUTATION = HEPCIDIN DEFICIENCY = FERROPORTIN NOT DEGRADED = INCREASED INTESTINAL IRON = ORGAN ACCUMULATION; TYPES: Type 1 (HFE); Type 2 juvenile (HJV/HAMP; severe; 20s); Type 3 (TFR2); Type 4 ferroportin; DIAGNOSIS: FASTING TRANSFERRIN SATURATION >=45% (women) or >=50% (men); FERRITIN >200 mcg/L women; >300 men; FERRITIN = ACUTE PHASE REACTANT (low specificity); HFE GENOTYPING: C282Y/C282Y confirms HH; LIVER BIOPSY rarely needed if genetic confirmed; MRI T2* liver: noninvasive iron quantification; FAMILY SCREENING: first-degree relatives of all confirmed HH cases) | `text` |  |  |  |
| Hereditary Hemochromatosis — Genetics, Diagnosis, Manifestations, and Treatment | HH Genetics and Diagnosis | `hh_organs` | HH Organ Manifestations: Liver Cirrhosis (Ferritin >1000 + Alcohol = Risk, HCC 200x Annual US+AFP), 2nd/3rd MCP Arthropathy CPPD Chondrocalcinosis (Does Not Improve with Phlebotomy), Bronze Diabetes Pancreatic Iron, Dilated Cardiomyopathy Reversible if Early, and Pituitary Hypogonadotropic Hypogonadism | `select` |  |  |  |
| Hereditary Hemochromatosis — Genetics, Diagnosis, Manifestations, and Treatment | Phlebotomy and Chelation | `hh_phlebot` | Therapeutic Phlebotomy: Induction 1 Unit (450 mL = 200-250 mg Iron) per Week Until Ferritin <50 mcg/L and Hgb >12, Maintenance Q3-4 Months, Monitor Ferritin Every 3-4 Sessions, and Excellent Pre-Cirrhotic Prognosis (PHLEBOTOMY: MECHANISM: each 450 mL unit removes ~200-250 mg iron; INDUCTION: 1 UNIT/WEEK; TARGET: FERRITIN <50 mcg/L AND Hgb >12 g/dL; DURATION: months to years; MAINTENANCE: Q3-4 months; MAINTAIN ferritin <50-100; BENEFITS: prevents liver damage; partial DM improvement; CARDIAC reversible if early; fatigue improves; ARTHROPATHY: may not improve; CIRRHOSIS: DOES NOT REVERSE; EXCELLENT PROGNOSIS if pre-cirrhotic and treated; BLOOD DONATION: accepted at some banks; MONITORING: annual CBC; ferritin; LFTs; TS; glucose; testosterone; thyroid; DXA; liver US in cirrhotic) | `text` |  |  |  |
| Hereditary Hemochromatosis — Genetics, Diagnosis, Manifestations, and Treatment | Phlebotomy and Chelation | `hh_chelat` | Iron Chelation When Phlebotomy Contraindicated (Anemia, Heart Failure): Deferoxamine SubQ Nightly 8-12h Hexadentate (Yersinia Risk, Annual Eye/Ear), Deferasirox Once Daily Oral (Renal+LFT Monitoring Monthly), and Deferiprone TID Best Cardiac Iron Penetration (Weekly CBC Agranulocytosis Risk) | `select` |  |  |  |

### Hyperkalemia Emergency — `internal_medicine_hyperkalemia_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hyperkalemia — Emergency Management | Severity and EKG Assessment | `potassium` | Serum Potassium (mEq/L; mild 5.5-5.9; moderate 6.0-6.4; severe ≥6.5; always confirm pseudohyperkalemia (hemolysis, prolonged sample transit, extreme leukocytosis/thrombocytosis); repeat promptly if clinical mismatch) | `number` |  |  |  |
| Hyperkalemia — Emergency Management | Severity and EKG Assessment | `ekg_changes` | ECG Changes | `select` |  |  |  |
| Hyperkalemia — Emergency Management | Treatment Algorithm | `treatment_sequence` | Treatment Sequence (CABDE: C-Cardiac membrane stabilization, A-Antagonize membrane, B-Beta2-agonist shift, D-Drive into cells, E-Eliminate; 1) Calcium gluconate 1g IV over 2-3 min (membrane stabilization; works in 1-3 min; lasts 30-60 min; repeat if EKG persists; NEVER calcium chloride peripherally); 2) Regular insulin 10 units IV + D50W 50 mL (shifts K+ into cells; onset 15-30 min; lasts 4-6h; monitor glucose); 3) Albuterol nebulized 10-20 mg (shifts K+ in cells; additive to insulin; onset 30 min; lasts 2h); 4) Sodium bicarbonate 50-100 mEq IV IF metabolic acidosis (limited effect without acidosis; do not mix with calcium); 5) Potassium removal: kayexalate (SPS) 15-30g PO (GI binding; avoid if ileus); patiromer (Veltassa) 8.4g PO (preferred; non-emergency; onset 7h; holds Q48h away from other meds); sodium zirconium cyclosilicate (Lokelma) 10g TID x 48h then 5g daily (fastest onset among binders, 1h); 6) Hemodialysis for severe refractory or AKI/ESRD — most effective removal 30-40 mEq/hr) | `textarea` |  |  |  |

### Hyponatremia Algorithm — `internal_medicine_hyponatremia_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hyponatremia — Diagnostic and Treatment Algorithm | Etiology Classification | `sodium` | Serum Sodium (mEq/L; normal 136-145; mild 130-134; moderate 125-129; severe <125; symptoms: nausea at <125, confusion at <120, seizure/coma at <115; assess symptom severity independently of absolute sodium — rate of fall matters) | `number` |  |  |  |
| Hyponatremia — Diagnostic and Treatment Algorithm | Etiology Classification | `volume_status` | Volume Status Assessment | `select` |  |  |  |
| Hyponatremia — Diagnostic and Treatment Algorithm | Treatment Strategy | `correction_rate` | Sodium Correction Rate | `select` |  |  |  |
| Hyponatremia — Diagnostic and Treatment Algorithm | Treatment Strategy | `siadh_treatment` | SIADH-Specific Management (first-line: fluid restriction 500-1000 mL/day; second-line: salt tablets 1-3 g TID or demeclocycline 300-600 mg BID (nephrotoxic risk); tolvaptan (Samsca) selective V2-receptor antagonist — 15-60 mg daily; SALT-1/-2 trials; outpatient use: hepatic cirrhosis caution (TEMPO cirrhosis study hepatic failure); vaptans: restrict to 30 days, avoid hospital initiation, monitor Na rapidly) | `text` |  |  |  |

### Long COVID Management — `internal_medicine_long_covid_cf`

Screen: 1 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Post-COVID / Long COVID Management | COVID History and Symptom Onset | `lc_acute_severity` | Acute COVID Severity (initial infection) | `select` |  |  |  |
| Post-COVID / Long COVID Management | COVID History and Symptom Onset | `lc_onset_months` | Months Since Acute COVID Infection | `text` |  |  |  |
| Post-COVID / Long COVID Management | COVID History and Symptom Onset | `lc_who_definition` | Long COVID / PASC Definition (WHO) | `select` |  |  |  |
| Post-COVID / Long COVID Management | COVID History and Symptom Onset | `lc_vaccination_status` | COVID Vaccination Status at Time of Infection | `select` |  |  |  |
| Post-COVID / Long COVID Management | Symptom Cluster Assessment | `lc_fatigue` | Fatigue / Post-Exertional Malaise (PEM) — most common LC symptom | `select` |  |  |  |
| Post-COVID / Long COVID Management | Symptom Cluster Assessment | `lc_cognitive` | Cognitive Symptoms ("Brain Fog") | `select` |  |  |  |
| Post-COVID / Long COVID Management | Symptom Cluster Assessment | `lc_cardiopulmonary` | Cardiopulmonary Symptoms | `select` |  |  |  |
| Post-COVID / Long COVID Management | Symptom Cluster Assessment | `lc_pots` | Dysautonomia / POTS (Postural Orthostatic Tachycardia Syndrome) | `select` |  |  |  |
| Post-COVID / Long COVID Management | Symptom Cluster Assessment | `lc_neuro` | Neurological Symptoms | `select` |  |  |  |
| Post-COVID / Long COVID Management | Symptom Cluster Assessment | `lc_sleep` | Sleep Disturbance | `select` |  |  |  |
| Post-COVID / Long COVID Management | Symptom Cluster Assessment | `lc_mood` | Mood and Mental Health Symptoms | `select` |  |  |  |
| Post-COVID / Long COVID Management | Symptom Cluster Assessment | `lc_gi` | GI Symptoms | `select` |  |  |  |
| Post-COVID / Long COVID Management | Symptom Cluster Assessment | `lc_smell_taste` | Smell and Taste Dysfunction | `select` |  |  |  |
| Post-COVID / Long COVID Management | Management Plan | `lc_workup` | Evaluation Completed or Ordered | `select` |  |  |  |
| Post-COVID / Long COVID Management | Management Plan | `lc_pacing` | Pacing and Energy Management (critical for PEM) | `select` |  |  |  |
| Post-COVID / Long COVID Management | Management Plan | `lc_rehabilitation` | Rehabilitation Referral | `select` |  |  |  |
| Post-COVID / Long COVID Management | Management Plan | `lc_medications` | Medications Trialed or Currently Used (LDN, antihistamines for mast cell activation, ivabradine for POTS, melatonin, supplements, antivirals if newly indicated) | `textarea` |  |  |  |
| Post-COVID / Long COVID Management | Management Plan | `lc_return_to_work` | Work or Functional Status | `select` |  |  |  |
| Post-COVID / Long COVID Management | Management Plan | `lc_notes` | Long COVID Management Notes and Care Coordination Plan | `textarea` |  |  |  |

### Obesity Management — `internal_medicine_obesity_management_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Obesity and Metabolic Disease Management | Obesity Classification and Comorbidities | `ob_bmi` | BMI (kg/m^2) and Weight (lbs/kg) — Class I: 30-34.9; Class II: 35-39.9; Class III (Severe): 40+; Asian-American: lower BMI thresholds (overweight above 23, obese above 27.5) | `text` |  |  |  |
| Obesity and Metabolic Disease Management | Obesity Classification and Comorbidities | `ob_class` | Obesity Class | `select` |  |  |  |
| Obesity and Metabolic Disease Management | Obesity Classification and Comorbidities | `ob_comorbidities` | Obesity-Related Comorbidities Driving Treatment | `select` |  |  |  |
| Obesity and Metabolic Disease Management | Obesity Classification and Comorbidities | `ob_weight_history` | Highest Weight (lbs/kg) and Date — trajectory and time course; prior weight loss attempts and methods; maximum prior weight loss achieved | `text` |  |  |  |
| Obesity and Metabolic Disease Management | Behavioral and Lifestyle Intervention | `ob_diet_approach` | Dietary Intervention | `select` |  |  |  |
| Obesity and Metabolic Disease Management | Behavioral and Lifestyle Intervention | `ob_physical_activity` | Physical Activity Target | `select` |  |  |  |
| Obesity and Metabolic Disease Management | Behavioral and Lifestyle Intervention | `ob_behavioral_program` | Structured Behavioral Weight Loss Program | `select` |  |  |  |
| Obesity and Metabolic Disease Management | Anti-Obesity Medication (AOM) | `ob_aom_candidate` | AOM Candidacy | `select` |  |  |  |
| Obesity and Metabolic Disease Management | Anti-Obesity Medication (AOM) | `ob_current_aom` | Current Anti-Obesity Medication | `select` |  |  |  |
| Obesity and Metabolic Disease Management | Anti-Obesity Medication (AOM) | `ob_aom_response` | AOM Treatment Response (reassess at 16 weeks) | `select` |  |  |  |
| Obesity and Metabolic Disease Management | Anti-Obesity Medication (AOM) | `ob_bariatric_referral` | Bariatric Surgery Referral | `select` |  |  |  |
| Obesity and Metabolic Disease Management | Anti-Obesity Medication (AOM) | `ob_notes` | Obesity Management Notes and Weight Goals | `textarea` |  |  |  |

### Perioperative Cardiac Evaluation — `internal_medicine_perioperative_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Preop Cardiac Risk — RCRI, Functional Capacity, Beta-Blockers, BNP | Surgical Cardiac Risk Assessment | `risk_stratification` | ACC/AHA Stepwise Algorithm, Emergency vs. Elective Surgery, and Active Cardiac Conditions (ACC/AHA 2014 PERIOPERATIVE GUIDELINES (2024 UPDATE): STEP 1: IS SURGERY EMERGENT? If yes: proceed; no further cardiac workup; STEP 2: ACTIVE CARDIAC CONDITIONS (ACC/AHA Minor Clinical Predictors that preclude elective surgery): UNSTABLE CORONARY SYNDROMES (unstable/severe angina; recent MI within 30-60 days); DECOMPENSATED HEART FAILURE; SIGNIFICANT ARRHYTHMIAS (high-degree AV block; symptomatic bradycardia; new-onset Vtach; uncontrolled SVT with HR >100); SEVERE VALVULAR DISEASE (severe aortic stenosis gradient >40 mmHg; severe symptomatic mitral stenosis); IF ACTIVE: evaluate + treat before elective surgery; STEP 3: LOW-RISK SURGERY (<1% MACE): vascular risk <1%; superficial procedures; endoscopy; cataract; breast; PROCEED WITHOUT FURTHER TESTING; STEP 4: FUNCTIONAL CAPACITY >= 4 METS: LIGHT HOUSEWORK; WALK UP A FLIGHT OF STAIRS; walk on level ground at 4 mph; climb a hill; run a short distance; DO HEAVY WORK AROUND HOUSE (4-10 METs); SPORTS (tennis; cycling; swimming; 4-10 METs); IF >=4 METs (EXCELLENT >10 METs; GOOD 7-10 METs; MODERATE 4-6 METs): PROCEED TO SURGERY without further testing; STEP 5: IF <4 METs OR UNKNOWN FUNCTIONAL CAPACITY + ELEVATED SURGICAL RISK: CLINICAL RISK FACTORS + RCRI; REVISED CARDIAC RISK INDEX (RCRI): 1) HIGH-RISK SURGERY (suprainguinal vascular; intraperitoneal; intrathoracic); 2) HISTORY OF ISCHEMIC HEART DISEASE; 3) HISTORY OF CONGESTIVE HEART FAILURE; 4) HISTORY OF CEREBROVASCULAR DISEASE; 5) DIABETES ON INSULIN; 6) PREOP CREATININE >2 mg/dL; SCORE: 0 = 0.4% MACE; 1 = 1%; 2 = 2.4%; >=3 = 5.4%; GUPTA MYOCARDIAL INFARCTION OR CARDIAC ARREST (MICA) calculator: alternative; online tool; METABOLIC EQUIVALENT TABLE (MET) ESTIMATION: Duke Activity Status Index (DASI) questionnaire; patient self-report vs. treadmill testing; CARDIORESPIRATORY FITNESS (CRF): objective; CPET (cardiopulmonary exercise testing): peak VO2; VE/VCO2 slope; AT (anaerobic threshold); most accurate preoperative functional assessment | `text` |  |  |  |
| Preop Cardiac Risk — RCRI, Functional Capacity, Beta-Blockers, BNP | Surgical Cardiac Risk Assessment | `preop_testing` | Pharmacological Stress Testing Indications, BNP/NT-proBNP Preop Role, and Coronary Revascularization Before Surgery | `select` |  |  |  |
| Preop Cardiac Risk — RCRI, Functional Capacity, Beta-Blockers, BNP | Perioperative Medication Management | `beta_blocker_statin` | Beta-Blocker Perioperative Use (POISE Controversy), Statin Continuation, and Antiplatelet Bridging (PERIOPERATIVE MEDICATIONS: BETA-BLOCKERS: CONTINUE if already on: ACC/AHA recommends CONTINUE chronic beta-blockers perioperatively; abrupt withdrawal = rebound tachycardia + MI; INITIATION OF NEW BETA-BLOCKERS: CONTROVERSIAL after POISE TRIAL; POISE: metoprolol succinate 200 mg QD initiated 2-4 hours before surgery vs. placebo; REDUCTION IN PERIOPERATIVE MI (4.2% vs. 5.7%); BUT INCREASE IN MORTALITY (3.1% vs. 2.3%); STROKE; HYPOTENSION; BRADYCARDIA; POISE-1 LESSON: risk of initiating high-dose beta-blocker acutely; DO NOT start high-dose beta-blocker within hours of surgery; IF INITIATING: start days-weeks before; low dose; titrate; discontinue if hypotension/bradycardia; POISE-2: aspirin + clonidine perioperative; NO BENEFIT; STATINS: CONTINUE perioperatively (Class I); BENEFIT: plaque stabilization; anti-inflammatory; withdrawal can destabilize plaques; ASPIRIN: MOST PATIENTS WITH PRIOR STENT: CONTINUE ASPIRIN; PATIENTS WITHOUT PRIOR PCI/STENT: HOLD ASPIRIN (POISE-2: aspirin did not reduce MACE; increased bleeding); EXCEPTION: carotid endarterectomy (continue); DUAL ANTIPLATELET THERAPY: hold P2Y12 inhibitor before surgery if not recent stent; clopidogrel: hold 5-7 days; prasugrel: 7 days; ticagrelor: 3-5 days; CONSIDER BRIDGING: high-stent thrombosis risk; recent DES; CANGRELOR (IV P2Y12): bridge in high-risk; ACE INHIBITORS/ARBS: HOLD day of surgery (hypotension; renal injury) per most guidelines; RESUME post-op when hemodynamically stable; ANTICOAGULATION: HOLD warfarin 5 days before; INR <1.5 at surgery; BRIDGING HEPARIN: only if very high thrombotic risk; BRIDGE-2 trial (AF): no benefit of bridging for most AF; DIRECT ORAL ANTICOAGULANTS (DOACs): HOLD 24h (rivaroxaban; apixaban; edoxaban; dabigatran); HIGH-RISK: 48-72h; RENAL FUNCTION dependent for dabigatran; NEURAXIAL ANESTHESIA: longer hold required; GLP-1 AGONISTS: HOLD day of (aspiration risk); consider 1 week pre-op for weekly injectables | `text` |  |  |  |
| Preop Cardiac Risk — RCRI, Functional Capacity, Beta-Blockers, BNP | Perioperative Medication Management | `postop_monitoring` | Postoperative MI Surveillance, MINS (Myocardial Injury after Non-Cardiac Surgery), and ICU Admission Criteria | `select` |  |  |  |

### Sarcoidosis Management — `internal_medicine_sarcoidosis_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sarcoidosis — Staging, Cardiac, and Steroid-Sparing Therapy | Diagnosis and Organ Involvement | `sarcoid_dx` | Sarcoidosis Diagnosis and Staging (DEFINITION: multisystem granulomatous disease of unknown cause; non-caseating granuloma (epithelioid cell granuloma); EPIDEMIOLOGY: African-Americans 3-4x more common; Scandinavians highest incidence in Europe; mean age 40-60; DIAGNOSIS: clinical + radiological + histologic + exclusion of other causes; BIOPSY: skin lesion (first line if accessible); transbronchial biopsy (positive in 60-90% pulmonary sarcoid); EBUS-TBNA (endobronchial ultrasound-guided transbronchial needle aspiration: highest yield for mediastinal nodes); mediastinoscopy if EBUS non-diagnostic; SERUM ACE: elevated in 60-70%; NOT specific (false positive: fungal infection, TB, GERD); useful for monitoring; CHEST RADIOGRAPH STAGING: Stage 0: normal; Stage I: bilateral hilar lymphadenopathy (BHL); Stage II: BHL + pulmonary infiltrates; Stage III: pulmonary infiltrates without BHL; Stage IV: pulmonary fibrosis (honeycomb, traction bronchiectasis); PROGNOSIS BY STAGE: Stage I: 90% spontaneous remission; Stage IV: irreversible fibrosis; PFTS: restrictive pattern; DLCO reduced; SPONTANEOUS REMISSION: 60-70% within 2 years; HYPERCALCEMIA: activated macrophages convert 25-OHD to 1,25-OHD (calcitriol); vitamin D restriction; hydration; steroids; chloroquine | `text` |  |  |  |
| Sarcoidosis — Staging, Cardiac, and Steroid-Sparing Therapy | Diagnosis and Organ Involvement | `lofgren` | Lofgren Syndrome and Extrapulmonary Sarcoid | `select` |  |  |  |
| Sarcoidosis — Staging, Cardiac, and Steroid-Sparing Therapy | Corticosteroid and Steroid-Sparing Treatment | `steroids` | Corticosteroid Therapy for Sarcoidosis (INDICATIONS FOR TREATMENT: pulmonary Stage II-III with significant symptoms or PFT decline; cardiac sarcoid (ICD + steroids); neurosarcoidosis; ocular (systemic if refractory to topical); hypercalcemia refractory; hepatic; severe skin (except EN); PULMONARY SARCOIDOSIS: PREDNISONE: 0.5 mg/kg/day (20-40 mg QD typical); for 3-6 months; ACE falls with effective treatment; TAPER: after stabilization; often 10-20 mg QD maintenance; LONG TAPER: 12-18 months total (relapse common with shorter courses); INHALED STEROIDS: budesonide: mild-moderate stage II pulmonary; reduces cough; minimal systemic effect; insufficient for severe disease; MONITORING RESPONSE: PFTs (FVC, DLCO, TLC) Q3-6 months; CXR; ACE level; symptom assessment; INDICATION TO CONTINUE: ongoing decline in PFTs; persistent symptoms; new organ involvement; CARDIAC SARCOIDOSIS: prednisone 40-60 mg/day; AV block may require pacemaker + ICD; ongoing monitoring; COMPLETE HEART BLOCK: if active granuloma → steroids may reverse; permanent pacemaker often needed even with steroids; ICD INDICATION: LVEF <35%; sustained VT; aborted SCD; unexplained syncope with inducible VT | `text` |  |  |  |
| Sarcoidosis — Staging, Cardiac, and Steroid-Sparing Therapy | Corticosteroid and Steroid-Sparing Treatment | `steroid_sparing` | Steroid-Sparing Agents for Sarcoidosis | `select` |  |  |  |

## Primary Care

### Acute / Sick Visit — `doc_acute_visit_cf`

Screen: 1 page(s) · 1 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute / Sick Visit | Acute Care Detail | `symptomDuration` | Symptom Duration | `text` |  |  |  |
| Acute / Sick Visit | Acute Care Detail | `feverMax` | Max Temperature Reported (F) | `number` |  |  |  |
| Acute / Sick Visit | Acute Care Detail | `sickContacts` | Sick Contacts / Exposure | `text` |  |  |  |
| Acute / Sick Visit | Acute Care Detail | `pocTestPerformed` | Point-of-Care Test Performed | `select` |  |  |  |
| Acute / Sick Visit | Acute Care Detail | `pocTestResult` | Point-of-Care Result | `text` |  |  |  |
| Acute / Sick Visit | Acute Care Detail | `workNote` | Work / School Note Provided | `checkbox` |  |  |  |

### Acute Care Visit — `acute_care_visit_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Care Visit | Presenting Complaint | `chief_complaint` | Chief Complaint | `text` |  |  |  |
| Acute Care Visit | Presenting Complaint | `onset` | Symptom Onset | `select` |  |  |  |
| Acute Care Visit | Presenting Complaint | `severity` | Severity (0-10 scale) | `number` |  |  |  |
| Acute Care Visit | Presenting Complaint | `associated_symptoms` | Associated Symptoms | `textarea` |  |  |  |
| Acute Care Visit | Presenting Complaint | `medications_tried` | OTC Medications Tried and Response | `text` |  |  |  |
| Acute Care Visit | Vital Signs | `temp` | Temperature (°F) | `number` |  |  |  |
| Acute Care Visit | Vital Signs | `bp` | Blood Pressure (mmHg) | `text` |  |  |  |
| Acute Care Visit | Vital Signs | `hr` | Heart Rate (bpm) | `number` |  |  |  |
| Acute Care Visit | Vital Signs | `rr` | Respiratory Rate (/min) | `number` |  |  |  |
| Acute Care Visit | Vital Signs | `spo2` | SpO2 (%) | `number` |  |  |  |
| Acute Care Visit | Vital Signs | `weight` | Weight (lbs) | `number` |  |  |  |
| Acute Care Visit | Assessment and Plan | `diagnosis` | Working Diagnosis (ICD-10) | `text` |  |  |  |
| Acute Care Visit | Assessment and Plan | `tests_ordered` | Tests / Labs / Imaging Ordered | `textarea` |  |  |  |
| Acute Care Visit | Assessment and Plan | `treatment_prescribed` | Treatment / Prescriptions | `textarea` |  |  |  |
| Acute Care Visit | Assessment and Plan | `return_precautions` | Return Precautions Discussed (when to seek ER) | `textarea` |  |  |  |
| Acute Care Visit | Assessment and Plan | `followup` | Follow-Up Instructions (days / condition) | `text` |  |  |  |

### Annual Wellness Visit — `doc_annual_wellness_cf`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Annual Wellness Visit | Preventive Care & Screening | `fallRiskScreened` | Fall risk screening completed | `checkbox` |  |  |  |
| Annual Wellness Visit | Preventive Care & Screening | `depressionScreened` | Depression screening completed (PHQ-2/9) | `checkbox` |  |  |  |
| Annual Wellness Visit | Preventive Care & Screening | `cognitiveScreened` | Cognitive assessment completed | `checkbox` |  |  |  |
| Annual Wellness Visit | Preventive Care & Screening | `advanceDirectiveDiscussed` | Advance directive discussed | `checkbox` |  |  |  |
| Annual Wellness Visit | Preventive Care & Screening | `immunizationsReviewed` | Immunizations reviewed / updated | `checkbox` |  |  |  |
| Annual Wellness Visit | Preventive Care & Screening | `cancerScreeningStatus` | Cancer screening status (colorectal, breast, cervical, lung) | `textarea` |  |  |  |
| Annual Wellness Visit | Preventive Care & Screening | `healthMaintenancePlan` | Personalized prevention plan | `textarea` |  |  |  |

### Annual Wellness Visit — `annual_wellness_visit_cf`

Screen: 1 page(s) · 4 section(s) · 23 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medicare Annual Wellness Visit | Health Risk Assessment | `falls_prior_year` | Fall(s) in prior 12 months | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Health Risk Assessment | `fall_fear` | Fear of falling (activity limitation) | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Health Risk Assessment | `tug_seconds` | Timed Up and Go (TUG, sec — ≥12s = fall risk) | `number` |  |  |  |
| Medicare Annual Wellness Visit | Health Risk Assessment | `smoking_status` | Tobacco Status | `select` |  |  |  |
| Medicare Annual Wellness Visit | Health Risk Assessment | `phq2` | PHQ-2 Score (0-6; ≥3 = positive → proceed to PHQ-9) | `number` |  |  |  |
| Medicare Annual Wellness Visit | Health Risk Assessment | `gad2` | GAD-2 Score (0-6; ≥3 = positive) | `number` |  |  |  |
| Medicare Annual Wellness Visit | Health Risk Assessment | `moca_score` | MoCA Score (0-30; <26 = cognitive impairment) | `number` |  |  |  |
| Medicare Annual Wellness Visit | Health Risk Assessment | `adl_deficits` | ADL / IADL Deficits (if any) | `textarea` |  |  |  |
| Medicare Annual Wellness Visit | Preventive Services Review | `colonoscopy_due` | Colonoscopy due (order if >10 yr since last) | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Preventive Services Review | `mammo_due` | Mammogram due (annual if 40-74, biennial 50-74 USPSTF) | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Preventive Services Review | `pap_due` | Cervical cancer screening due | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Preventive Services Review | `lung_ct_eligible` | Lung CT screening eligible (50-80 yr, ≥20 pk-yr, current or quit <15 yr) | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Preventive Services Review | `osteoporosis_dexa_due` | DEXA bone density due (women ≥65 or <65 with risk factors) | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Preventive Services Review | `abdominal_aorta_us` | AAA screening ultrasound (men 65-75 who ever smoked — one-time) | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Vaccine Review | `influenza_current` | Influenza (annual) — given or ordered | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Vaccine Review | `covid_updated` | COVID-19 updated vaccine — given or ordered | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Vaccine Review | `pneumo23` | PPSV23 given (≥65 or high-risk) | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Vaccine Review | `prevnar20` | PCV20 given (≥65; preferred single-dose option) | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Vaccine Review | `shingrix` | Shingrix (RZV, ≥50 yr — 2 doses) | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Vaccine Review | `tdap` | Tdap booster (if not given as adult, then Td q10yr) | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Advance Care Planning | `advance_directive_on_file` | Advance directive / healthcare proxy on file and current | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Advance Care Planning | `advance_care_discussed` | Advance care planning discussion held (CPT 99497/99498 if ≥16 min) | `checkbox` |  |  |  |
| Medicare Annual Wellness Visit | Advance Care Planning | `personalized_prevention_plan` | Personalized Prevention Plan Summary | `textarea` |  |  |  |

### Chronic Disease Follow-Up — `doc_chronic_disease_cf`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Disease Follow-Up | Chronic Disease Management | `conditionsManaged` | Conditions Managed This Visit | `textarea` |  |  |  |
| Chronic Disease Follow-Up | Chronic Disease Management | `diseaseControlStatus` | Control Status | `select` |  |  |  |
| Chronic Disease Follow-Up | Chronic Disease Management | `lastA1c` | Last A1c (%) | `number` |  |  |  |
| Chronic Disease Follow-Up | Chronic Disease Management | `homeMonitoringReview` | Home Monitoring Review (BP / glucose logs) | `textarea` |  |  |  |
| Chronic Disease Follow-Up | Chronic Disease Management | `lifestyleCounseling` | Lifestyle Counseling Provided | `textarea` |  |  |  |
| Chronic Disease Follow-Up | Chronic Disease Management | `footExamCompleted` | Foot exam completed (diabetes) | `checkbox` |  |  |  |
| Chronic Disease Follow-Up | Chronic Disease Management | `eyeExamReferred` | Retinal / eye exam current or referred | `checkbox` |  |  |  |
| Chronic Disease Follow-Up | Chronic Disease Management | `nephropathyScreened` | Kidney screening (UACR/eGFR) current | `checkbox` |  |  |  |

### Chronic Disease Mgmt — `chronic_disease_management_visit_cf`

Screen: 1 page(s) · 5 section(s) · 19 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Chronic Disease Management Visit | Active Chronic Conditions Under Management | `conditions_list` | Conditions Being Managed (e.g., HTN, T2DM, CKD, HF, COPD, hyperlipidemia) | `textarea` |  |  |  |
| Chronic Disease Management Visit | Diabetes Metrics (if applicable) | `a1c` | HbA1c (%) | `number` |  |  |  |
| Chronic Disease Management Visit | Diabetes Metrics (if applicable) | `a1c_goal` | HbA1c Goal (e.g., <7% or <8% if frail) | `number` |  |  |  |
| Chronic Disease Management Visit | Diabetes Metrics (if applicable) | `cgm_available` | CGM data reviewed | `checkbox` |  |  |  |
| Chronic Disease Management Visit | Diabetes Metrics (if applicable) | `hypoglycemia_events` | Hypoglycemia Episodes (prior month) | `number` |  |  |  |
| Chronic Disease Management Visit | Blood Pressure / Cardiovascular (if applicable) | `bp_today` | BP Today (mmHg) | `text` |  |  |  |
| Chronic Disease Management Visit | Blood Pressure / Cardiovascular (if applicable) | `bp_goal` | BP Goal (e.g., <130/80) | `text` |  |  |  |
| Chronic Disease Management Visit | Blood Pressure / Cardiovascular (if applicable) | `bp_at_goal` | BP at goal | `checkbox` |  |  |  |
| Chronic Disease Management Visit | Blood Pressure / Cardiovascular (if applicable) | `ldl` | LDL (mg/dL) | `number` |  |  |  |
| Chronic Disease Management Visit | Blood Pressure / Cardiovascular (if applicable) | `ldl_goal` | LDL Goal (mg/dL) | `number` |  |  |  |
| Chronic Disease Management Visit | Blood Pressure / Cardiovascular (if applicable) | `statin_on` | Statin prescribed | `checkbox` |  |  |  |
| Chronic Disease Management Visit | Kidney Disease (if applicable) | `creatinine` | Creatinine (mg/dL) | `number` |  |  |  |
| Chronic Disease Management Visit | Kidney Disease (if applicable) | `egfr` | eGFR (mL/min/1.73m²) | `number` |  |  |  |
| Chronic Disease Management Visit | Kidney Disease (if applicable) | `uacr` | UACR (mg/g — microalbuminuria ≥30) | `number` |  |  |  |
| Chronic Disease Management Visit | Kidney Disease (if applicable) | `sglt2_on` | SGLT2 inhibitor on (renoprotective if T2DM + CKD) | `checkbox` |  |  |  |
| Chronic Disease Management Visit | Medication Review | `polypharmacy_flag` | Polypharmacy (≥5 medications) — deprescribing reviewed | `checkbox` |  |  |  |
| Chronic Disease Management Visit | Medication Review | `beers_criteria_flag` | Beers Criteria medication flagged (inappropriate for elderly) | `checkbox` |  |  |  |
| Chronic Disease Management Visit | Medication Review | `adherence_barriers` | Adherence Barriers Identified (cost, side effects, complexity) | `textarea` |  |  |  |
| Chronic Disease Management Visit | Medication Review | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Male Health / Low T — `male_health_testosterone_cf`

Screen: 1 page(s) · 4 section(s) · 28 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Male Health: Testosterone and Sexual Health | Low Testosterone Symptoms (AMS Scale) | `mh_libido` | Decreased Libido | `select` |  |  |  |
| Male Health: Testosterone and Sexual Health | Low Testosterone Symptoms (AMS Scale) | `mh_erectile_dysfunction` | Erectile Dysfunction | `select` |  |  |  |
| Male Health: Testosterone and Sexual Health | Low Testosterone Symptoms (AMS Scale) | `mh_energy_fatigue` | Energy and Fatigue | `select` |  |  |  |
| Male Health: Testosterone and Sexual Health | Low Testosterone Symptoms (AMS Scale) | `mh_mood` | Mood and Depression | `select` |  |  |  |
| Male Health: Testosterone and Sexual Health | Low Testosterone Symptoms (AMS Scale) | `mh_body_composition` | Body Composition Changes (increased fat, decreased muscle, osteopenia) | `textarea` |  |  |  |
| Male Health: Testosterone and Sexual Health | Low Testosterone Symptoms (AMS Scale) | `mh_hot_flashes_sweats` | Hot Flashes or Night Sweats | `select` |  |  |  |
| Male Health: Testosterone and Sexual Health | Low Testosterone Symptoms (AMS Scale) | `mh_cognitive` | Cognitive Changes (concentration, memory) | `select` |  |  |  |
| Male Health: Testosterone and Sexual Health | Hormonal Evaluation | `mh_total_testosterone` | Total Testosterone (ng/dL) - drawn AM fasting | `number` |  |  |  |
| Male Health: Testosterone and Sexual Health | Hormonal Evaluation | `mh_testosterone_timing` | Sample Timing | `select` |  |  |  |
| Male Health: Testosterone and Sexual Health | Hormonal Evaluation | `mh_free_testosterone` | Free Testosterone (pg/mL) - if SHBG suspected abnormal | `number` |  |  |  |
| Male Health: Testosterone and Sexual Health | Hormonal Evaluation | `mh_shbg` | SHBG (nmol/L) - elevated in obesity, older age | `number` |  |  |  |
| Male Health: Testosterone and Sexual Health | Hormonal Evaluation | `mh_lh` | LH (mIU/mL) | `number` |  |  |  |
| Male Health: Testosterone and Sexual Health | Hormonal Evaluation | `mh_fsh` | FSH (mIU/mL) | `number` |  |  |  |
| Male Health: Testosterone and Sexual Health | Hormonal Evaluation | `mh_hypogonadism_type` | Hypogonadism Classification | `select` |  |  |  |
| Male Health: Testosterone and Sexual Health | Hormonal Evaluation | `mh_prolactin` | Prolactin (ng/mL) - if secondary hypogonadism | `number` |  |  |  |
| Male Health: Testosterone and Sexual Health | Hormonal Evaluation | `mh_mri_pituitary` | MRI Pituitary (if prolactin elevated or secondary) | `select` |  |  |  |
| Male Health: Testosterone and Sexual Health | Hormonal Evaluation | `mh_secondary_causes` | Secondary Causes Evaluated (obesity, opioids, anabolic steroids, hemochromatosis, hypothyroid) | `textarea` |  |  |  |
| Male Health: Testosterone and Sexual Health | Testosterone Replacement Therapy (TRT) | `mh_trt_candidate` | TRT Candidacy | `select` |  |  |  |
| Male Health: Testosterone and Sexual Health | Testosterone Replacement Therapy (TRT) | `mh_trt_formulation` | TRT Formulation | `select` |  |  |  |
| Male Health: Testosterone and Sexual Health | Testosterone Replacement Therapy (TRT) | `mh_trt_monitoring` | TRT Monitoring (T level mid-cycle, hematocrit, PSA, symptom response) | `textarea` |  |  |  |
| Male Health: Testosterone and Sexual Health | Testosterone Replacement Therapy (TRT) | `mh_hematocrit` | Hematocrit on TRT (target under 54%) | `number` |  |  |  |
| Male Health: Testosterone and Sexual Health | Testosterone Replacement Therapy (TRT) | `mh_psa` | PSA (ng/mL) | `number` |  |  |  |
| Male Health: Testosterone and Sexual Health | Erectile Dysfunction | `mh_iief_score` | IIEF-5 Score (0-25, pathologic under 21) | `number` |  |  |  |
| Male Health: Testosterone and Sexual Health | Erectile Dysfunction | `mh_ed_cause` | ED Etiology | `select` |  |  |  |
| Male Health: Testosterone and Sexual Health | Erectile Dysfunction | `mh_pde5i` | PDE5 Inhibitor | `select` |  |  |  |
| Male Health: Testosterone and Sexual Health | Erectile Dysfunction | `mh_second_line_ed` | Second-Line ED Treatment (PDE5i failure) | `select` |  |  |  |
| Male Health: Testosterone and Sexual Health | Erectile Dysfunction | `mh_fertility` | Fertility Goals and Semen Analysis | `select` |  |  |  |
| Male Health: Testosterone and Sexual Health | Erectile Dysfunction | `mh_notes` | Additional Notes | `textarea` |  |  |  |

### New Patient Visit — `new_patient_visit_cf`

Screen: 1 page(s) · 6 section(s) · 24 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| New Patient Comprehensive Evaluation | Chief Complaint | `reason_for_visit` | Reason for New Patient Visit | `textarea` |  |  |  |
| New Patient Comprehensive Evaluation | Chief Complaint | `referred_by` | Referred By / Source of Referral | `text` |  |  |  |
| New Patient Comprehensive Evaluation | Past Medical History | `chronic_conditions` | Active Chronic Medical Conditions | `textarea` |  |  |  |
| New Patient Comprehensive Evaluation | Past Medical History | `prior_surgeries` | Prior Surgeries / Hospitalizations | `textarea` |  |  |  |
| New Patient Comprehensive Evaluation | Social History | `occupation` | Occupation | `text` |  |  |  |
| New Patient Comprehensive Evaluation | Social History | `tobacco` | Tobacco / Nicotine | `select` |  |  |  |
| New Patient Comprehensive Evaluation | Social History | `pack_years` | Pack-Year History (if ever-smoker) | `number` |  |  |  |
| New Patient Comprehensive Evaluation | Social History | `alcohol` | Alcohol Use | `select` |  |  |  |
| New Patient Comprehensive Evaluation | Social History | `substance_use` | Recreational Substance Use | `select` |  |  |  |
| New Patient Comprehensive Evaluation | Social History | `exercise_frequency` | Exercise Frequency | `select` |  |  |  |
| New Patient Comprehensive Evaluation | Family History | `family_cancer` | Family History of Cancer (type + relation) | `text` |  |  |  |
| New Patient Comprehensive Evaluation | Family History | `family_cardiac` | Family History of Early Heart Disease (relation + age) | `text` |  |  |  |
| New Patient Comprehensive Evaluation | Family History | `family_diabetes` | Family History of Diabetes | `checkbox` |  |  |  |
| New Patient Comprehensive Evaluation | Family History | `family_other` | Other Significant Family History | `text` |  |  |  |
| New Patient Comprehensive Evaluation | Review of Systems (ROS) | `constitutional` | Constitutional (weight change, fatigue, fever) | `text` |  |  |  |
| New Patient Comprehensive Evaluation | Review of Systems (ROS) | `cardiovascular` | Cardiovascular | `text` |  |  |  |
| New Patient Comprehensive Evaluation | Review of Systems (ROS) | `respiratory` | Respiratory | `text` |  |  |  |
| New Patient Comprehensive Evaluation | Review of Systems (ROS) | `gi` | GI | `text` |  |  |  |
| New Patient Comprehensive Evaluation | Review of Systems (ROS) | `genitourinary` | Genitourinary | `text` |  |  |  |
| New Patient Comprehensive Evaluation | Review of Systems (ROS) | `musculoskeletal` | Musculoskeletal | `text` |  |  |  |
| New Patient Comprehensive Evaluation | Review of Systems (ROS) | `neurological` | Neurological | `text` |  |  |  |
| New Patient Comprehensive Evaluation | Review of Systems (ROS) | `psychiatric` | Psychiatric | `text` |  |  |  |
| New Patient Comprehensive Evaluation | Assessment and Plan | `assessment` | Assessment (Problem List) | `textarea` |  |  |  |
| New Patient Comprehensive Evaluation | Assessment and Plan | `plan` | Plan (Labs / Referrals / Follow-up) | `textarea` |  |  |  |

### Obesity Medicine — `obesity_medicine_cf`

Screen: 1 page(s) · 3 section(s) · 25 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Obesity Medicine Evaluation | Anthropometric Assessment | `ob_height_cm` | Height (cm) | `number` |  |  |  |
| Obesity Medicine Evaluation | Anthropometric Assessment | `ob_weight_kg` | Weight (kg) | `number` |  |  |  |
| Obesity Medicine Evaluation | Anthropometric Assessment | `ob_bmi` | BMI (kg/m2) | `number` |  |  |  |
| Obesity Medicine Evaluation | Anthropometric Assessment | `ob_bmi_class` | BMI Classification (WHO) | `select` |  |  |  |
| Obesity Medicine Evaluation | Anthropometric Assessment | `ob_waist_cm` | Waist Circumference (cm) | `number` |  |  |  |
| Obesity Medicine Evaluation | Anthropometric Assessment | `ob_waist_risk` | Waist Circumference Risk (metabolic risk) | `select` |  |  |  |
| Obesity Medicine Evaluation | Anthropometric Assessment | `ob_weight_history` | Weight History (highest adult weight, onset, prior loss attempts, regain pattern) | `textarea` |  |  |  |
| Obesity Medicine Evaluation | Anthropometric Assessment | `ob_contributing_factors` | Contributing Factors (medications, sleep apnea, hypothyroid, Cushing, PCOS, depression) | `textarea` |  |  |  |
| Obesity Medicine Evaluation | Obesity-Related Complications | `ob_t2dm` | Type 2 Diabetes / Prediabetes | `select` |  |  |  |
| Obesity Medicine Evaluation | Obesity-Related Complications | `ob_hypertension` | Hypertension | `select` |  |  |  |
| Obesity Medicine Evaluation | Obesity-Related Complications | `ob_dyslipidemia` | Dyslipidemia | `select` |  |  |  |
| Obesity Medicine Evaluation | Obesity-Related Complications | `ob_osa` | Obstructive Sleep Apnea | `select` |  |  |  |
| Obesity Medicine Evaluation | Obesity-Related Complications | `ob_nafld_masld` | MASLD / Steatotic Liver Disease | `select` |  |  |  |
| Obesity Medicine Evaluation | Obesity-Related Complications | `ob_osteoarthritis` | Osteoarthritis | `select` |  |  |  |
| Obesity Medicine Evaluation | Obesity-Related Complications | `ob_gerd` | GERD | `select` |  |  |  |
| Obesity Medicine Evaluation | Obesity-Related Complications | `ob_mental_health` | Mental Health Comorbidity | `select` |  |  |  |
| Obesity Medicine Evaluation | Obesity Treatment | `ob_lifestyle` | Lifestyle Intervention (foundation of all treatment) | `select` |  |  |  |
| Obesity Medicine Evaluation | Obesity Treatment | `ob_pharmacotherapy` | Pharmacotherapy | `select` |  |  |  |
| Obesity Medicine Evaluation | Obesity Treatment | `ob_glp1_dose` | GLP-1/GIP Current Dose and Duration on Therapy | `text` |  |  |  |
| Obesity Medicine Evaluation | Obesity Treatment | `ob_glp1_response` | Pharmacotherapy Response (at 4-12 weeks) | `select` |  |  |  |
| Obesity Medicine Evaluation | Obesity Treatment | `ob_bariatric_candidacy` | Bariatric Surgery Candidacy (BMI 40+ or BMI 35+ with comorbidity) | `select` |  |  |  |
| Obesity Medicine Evaluation | Obesity Treatment | `ob_endoscopic` | Endoscopic Procedure | `select` |  |  |  |
| Obesity Medicine Evaluation | Obesity Treatment | `ob_weight_goal` | Target Weight Loss Goal (%) | `number` |  |  |  |
| Obesity Medicine Evaluation | Obesity Treatment | `ob_followup_interval` | Follow-Up Interval | `select` |  |  |  |
| Obesity Medicine Evaluation | Obesity Treatment | `ob_notes` | Additional Notes | `textarea` |  |  |  |

### Palliative Care — `palliative_care_cf`

Screen: 1 page(s) · 4 section(s) · 25 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Palliative Care and Goals of Care | Clinical Context | `pal_primary_diagnosis` | Primary Life-Limiting Diagnosis | `text` |  |  |  |
| Palliative Care and Goals of Care | Clinical Context | `pal_prognosis` | Estimated Prognosis | `select` |  |  |  |
| Palliative Care and Goals of Care | Clinical Context | `pal_pps_score` | Palliative Performance Scale (PPS) | `select` |  |  |  |
| Palliative Care and Goals of Care | Clinical Context | `pal_ecog` | ECOG Performance Status | `select` |  |  |  |
| Palliative Care and Goals of Care | Clinical Context | `pal_goals_of_care` | Goals of Care Orientation | `select` |  |  |  |
| Palliative Care and Goals of Care | Clinical Context | `pal_family_meeting` | Family/Goals of Care Meeting | `select` |  |  |  |
| Palliative Care and Goals of Care | Clinical Context | `pal_decision_maker` | Healthcare Decision Maker / Surrogate | `text` |  |  |  |
| Palliative Care and Goals of Care | Pain Management | `pal_pain_score` | Current Pain NRS Score (0-10) | `number` |  |  |  |
| Palliative Care and Goals of Care | Pain Management | `pal_pain_type` | Pain Type | `select` |  |  |  |
| Palliative Care and Goals of Care | Pain Management | `pal_current_opioid` | Current Opioid Regimen | `select` |  |  |  |
| Palliative Care and Goals of Care | Pain Management | `pal_oral_morphine_equivalents` | Total Daily Oral Morphine Equivalents (OME mg/day) | `number` |  |  |  |
| Palliative Care and Goals of Care | Pain Management | `pal_opioid_rotation` | Opioid Rotation (if inadequate or side effects) | `select` |  |  |  |
| Palliative Care and Goals of Care | Pain Management | `pal_bowel_regimen` | Opioid-Induced Constipation Prophylaxis | `select` |  |  |  |
| Palliative Care and Goals of Care | Pain Management | `pal_adjuvant_analgesia` | Adjuvant Analgesia (dexamethasone for bone/pressure pain, gabapentin/TCAs for neuropathic, NSAIDs, ketamine) | `textarea` |  |  |  |
| Palliative Care and Goals of Care | Symptom Management | `pal_dyspnea` | Dyspnea Management | `select` |  |  |  |
| Palliative Care and Goals of Care | Symptom Management | `pal_nausea` | Nausea Management | `select` |  |  |  |
| Palliative Care and Goals of Care | Symptom Management | `pal_death_rattle` | Death Rattle / Excessive Secretions (terminal) | `select` |  |  |  |
| Palliative Care and Goals of Care | Symptom Management | `pal_delirium` | Terminal Delirium Management | `select` |  |  |  |
| Palliative Care and Goals of Care | Symptom Management | `pal_depression_anxiety` | Psychosocial Symptoms (depression, anxiety, existential distress, spiritual care) | `textarea` |  |  |  |
| Palliative Care and Goals of Care | Advance Care Planning | `pal_polst_status` | POLST / MOLST Status | `select` |  |  |  |
| Palliative Care and Goals of Care | Advance Care Planning | `pal_hospitalization_preference` | Hospitalization Preference at End of Life | `select` |  |  |  |
| Palliative Care and Goals of Care | Advance Care Planning | `pal_hospice_referral` | Hospice Referral | `select` |  |  |  |
| Palliative Care and Goals of Care | Advance Care Planning | `pal_hospice_criteria` | Hospice Eligibility (6-month prognosis if disease runs natural course) | `select` |  |  |  |
| Palliative Care and Goals of Care | Advance Care Planning | `pal_chaplain_sw` | Spiritual and Social Support | `select` |  |  |  |
| Palliative Care and Goals of Care | Advance Care Planning | `pal_notes` | Additional Notes and Family Communication Summary | `textarea` |  |  |  |

### Pre-Op Evaluation — `preoperative_evaluation_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Preoperative Medical Evaluation | Surgery Details | `planned_surgery` | Planned Surgical Procedure | `text` |  |  |  |
| Preoperative Medical Evaluation | Surgery Details | `scheduled_surgery_date` | Scheduled Surgery Date | `date` |  |  |  |
| Preoperative Medical Evaluation | Surgery Details | `surgeon` | Surgeon Name | `text` |  |  |  |
| Preoperative Medical Evaluation | Surgery Details | `anesthesia_type` | Expected Anesthesia Type | `select` |  |  |  |
| Preoperative Medical Evaluation | Surgery Details | `surgical_risk` | Surgical Risk Category (ACC/AHA) | `select` |  |  |  |
| Preoperative Medical Evaluation | Cardiac Risk Assessment | `rcri_score` | Revised Cardiac Risk Index (RCRI, 0-6) | `number` |  |  |  |
| Preoperative Medical Evaluation | Cardiac Risk Assessment | `mets` | Functional Capacity (METs) | `select` |  |  |  |
| Preoperative Medical Evaluation | Cardiac Risk Assessment | `cardiac_stress_test` | Cardiac stress test ordered (if poor METs + elevated RCRI) | `checkbox` |  |  |  |
| Preoperative Medical Evaluation | Cardiac Risk Assessment | `cardiology_consult` | Cardiology consultation ordered | `checkbox` |  |  |  |
| Preoperative Medical Evaluation | Perioperative Medication Management | `anticoagulation` | Anticoagulation Management | `select` |  |  |  |
| Preoperative Medical Evaluation | Perioperative Medication Management | `antiplatelet` | Antiplatelet Management | `select` |  |  |  |
| Preoperative Medical Evaluation | Perioperative Medication Management | `beta_blocker` | Beta-blocker continued perioperatively (do NOT abruptly stop) | `checkbox` |  |  |  |
| Preoperative Medical Evaluation | Perioperative Medication Management | `hold_metformin` | Hold metformin 48 hours post-op (if contrast / major surgery) | `checkbox` |  |  |  |
| Preoperative Medical Evaluation | Perioperative Medication Management | `hold_glp1` | Hold GLP-1 agonist week of surgery (aspiration risk) | `checkbox` |  |  |  |
| Preoperative Medical Evaluation | Clearance Decision | `medical_clearance` | Medical Clearance | `select` |  |  |  |
| Preoperative Medical Evaluation | Clearance Decision | `notes` | Notes and Recommendations to Surgeon / Anesthesia | `textarea` |  |  |  |

### Skin Infection / SSTI — `skin_soft_tissue_infection_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Skin and Soft Tissue Infection | Clinical Presentation | `infection_type` | Infection Type | `select` |  |  |  |
| Skin and Soft Tissue Infection | Clinical Presentation | `location` | Anatomic Location | `text` |  |  |  |
| Skin and Soft Tissue Infection | Clinical Presentation | `area_cm` | Size (cm × cm) | `text` |  |  |  |
| Skin and Soft Tissue Infection | Clinical Presentation | `purulent` | Purulent (fluctuant abscess or purulent drainage) | `checkbox` |  |  |  |
| Skin and Soft Tissue Infection | Clinical Presentation | `systemic_signs` | Systemic signs (fever ≥38°C, HR >90, WBC >12K) | `checkbox` |  |  |  |
| Skin and Soft Tissue Infection | Clinical Presentation | `spreading` | Marked boundary progression in past 24 hours | `checkbox` |  |  |  |
| Skin and Soft Tissue Infection | IDSA Severity Classification | `ssti_class` | IDSA Class | `select` |  |  |  |
| Skin and Soft Tissue Infection | IDSA Severity Classification | `culture_taken` | Wound / abscess culture sent | `checkbox` |  |  |  |
| Skin and Soft Tissue Infection | IDSA Severity Classification | `mrsa_risk` | MRSA risk factors present | `checkbox` |  |  |  |
| Skin and Soft Tissue Infection | Treatment | `incision_drainage` | Incision and Drainage (I&D) performed | `checkbox` |  |  |  |
| Skin and Soft Tissue Infection | Treatment | `antibiotic` | Antibiotic Prescribed | `select` |  |  |  |
| Skin and Soft Tissue Infection | Treatment | `hospital_admission` | Hospital admission required | `checkbox` |  |  |  |
| Skin and Soft Tissue Infection | Treatment | `outlines_on_skin` | Margins outlined / photographed for monitoring | `checkbox` |  |  |  |
| Skin and Soft Tissue Infection | Treatment | `followup_hours` | Follow-up Within (hours) | `number` |  |  |  |

### Telehealth Visit — `telehealth_visit_cf`

Screen: 1 page(s) · 4 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Telehealth Visit Documentation | Telehealth Visit Details | `platform` | Telemedicine Platform | `select` |  |  |  |
| Telehealth Visit Documentation | Telehealth Visit Details | `patient_location` | Patient Location (city, state — billing requires patient NOT in originating facility in some states) | `text` |  |  |  |
| Telehealth Visit Documentation | Telehealth Visit Details | `provider_location` | Provider Location | `text` |  |  |  |
| Telehealth Visit Documentation | Telehealth Visit Details | `technical_issues` | Technical issues documented (if any — audio dropout, connection loss) | `checkbox` |  |  |  |
| Telehealth Visit Documentation | Consent and Identity Verification | `verbal_consent` | Patient provided verbal consent for telehealth visit | `checkbox` |  |  |  |
| Telehealth Visit Documentation | Consent and Identity Verification | `identity_verified` | Patient identity verified (name, date of birth) | `checkbox` |  |  |  |
| Telehealth Visit Documentation | Consent and Identity Verification | `patient_alone` | Patient confirmed they are in a private location | `checkbox` |  |  |  |
| Telehealth Visit Documentation | Visit Content | `chief_complaint` | Chief Complaint / Reason for Visit | `text` |  |  |  |
| Telehealth Visit Documentation | Visit Content | `vitals_patient_reported` | Patient-Reported Vital Signs (BP, HR, SpO2, glucose, weight) | `textarea` |  |  |  |
| Telehealth Visit Documentation | Visit Content | `exam_limitations` | Physical Exam Limitations (telehealth constraints documented) | `textarea` |  |  |  |
| Telehealth Visit Documentation | Assessment and Plan | `in_person_needed` | In-person visit required for complete evaluation (communicated to patient) | `checkbox` |  |  |  |
| Telehealth Visit Documentation | Assessment and Plan | `er_referral` | ER referral / 911 instructed due to concerning findings | `checkbox` |  |  |  |
| Telehealth Visit Documentation | Assessment and Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Transition of Care — `transition_of_care_visit_cf`

Screen: 1 page(s) · 4 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Post-Discharge / Transition of Care Visit | Prior Hospitalization Summary | `discharge_date` | Discharge Date | `date` |  |  |  |
| Post-Discharge / Transition of Care Visit | Prior Hospitalization Summary | `discharge_facility` | Discharging Facility | `text` |  |  |  |
| Post-Discharge / Transition of Care Visit | Prior Hospitalization Summary | `discharge_diagnosis` | Primary Discharge Diagnosis | `text` |  |  |  |
| Post-Discharge / Transition of Care Visit | Prior Hospitalization Summary | `procedures_performed` | Major Procedures / Interventions During Hospitalization | `textarea` |  |  |  |
| Post-Discharge / Transition of Care Visit | Medication Reconciliation | `new_meds` | New Medications Started at Discharge | `textarea` |  |  |  |
| Post-Discharge / Transition of Care Visit | Medication Reconciliation | `discontinued_meds` | Medications Discontinued at Discharge | `textarea` |  |  |  |
| Post-Discharge / Transition of Care Visit | Medication Reconciliation | `dose_changes` | Dose Changes | `textarea` |  |  |  |
| Post-Discharge / Transition of Care Visit | Medication Reconciliation | `discharge_summary_reviewed` | Discharge summary reviewed with patient | `checkbox` |  |  |  |
| Post-Discharge / Transition of Care Visit | Current Clinical Status | `symptom_improvement` | Symptoms Since Discharge | `select` |  |  |  |
| Post-Discharge / Transition of Care Visit | Current Clinical Status | `wound_status` | Wound / Incision Status (if applicable) | `select` |  |  |  |
| Post-Discharge / Transition of Care Visit | Current Clinical Status | `ed_visit_since_discharge` | ED visit since discharge | `checkbox` |  |  |  |
| Post-Discharge / Transition of Care Visit | Follow-Up and Care Plan | `pending_results` | Pending Tests / Cultures / Biopsy Results to Follow Up | `textarea` |  |  |  |
| Post-Discharge / Transition of Care Visit | Follow-Up and Care Plan | `specialist_followup` | Specialist Follow-Up Appointments (if any) | `textarea` |  |  |  |
| Post-Discharge / Transition of Care Visit | Follow-Up and Care Plan | `readmission_risk_factors` | Readmission Risk Factors Identified | `textarea` |  |  |  |
| Post-Discharge / Transition of Care Visit | Follow-Up and Care Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |
