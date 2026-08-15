---
title: "PracticeForceOneCFTrackingFields27"
---

# CF Tracking — Field-Level Detail (part 27 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Nephrology**, **Dermatology**, **RCM**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Nephrology

### CKD Complications — `nephrology_ckd_complications_cf`

Screen: 1 page(s) · 6 section(s) · 29 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CKD Complications and Management | Current CKD Status | `ckdc_ckd_stage` | CKD Stage (KDIGO) | `select` |  |  |  |
| CKD Complications and Management | Current CKD Status | `ckdc_egfr_current` | Current eGFR (mL/min/1.73m2) | `number` |  |  |  |
| CKD Complications and Management | Current CKD Status | `ckdc_upcr` | UPCR (g/g) or UACR (mg/g) | `number` |  |  |  |
| CKD Complications and Management | Current CKD Status | `ckdc_trajectory` | eGFR Trajectory (6-12 month trend) | `select` |  |  |  |
| CKD Complications and Management | Hyperkalemia Management | `ckdc_potassium` | Serum Potassium (mEq/L) | `number` |  |  |  |
| CKD Complications and Management | Hyperkalemia Management | `ckdc_hyperkalemia_management` | Hyperkalemia Treatment | `select` |  |  |  |
| CKD Complications and Management | Hyperkalemia Management | `ckdc_raas_status` | RAS Inhibitor Use (ACEi/ARB/MRA) | `select` |  |  |  |
| CKD Complications and Management | CKD-Associated Anemia | `ckdc_hemoglobin` | Hemoglobin (g/dL) | `number` |  |  |  |
| CKD Complications and Management | CKD-Associated Anemia | `ckdc_ferritin` | Ferritin (ng/mL) | `number` |  |  |  |
| CKD Complications and Management | CKD-Associated Anemia | `ckdc_tsat` | Transferrin Saturation - TSAT (%) | `number` |  |  |  |
| CKD Complications and Management | CKD-Associated Anemia | `ckdc_iron_status` | Iron Status | `select` |  |  |  |
| CKD Complications and Management | CKD-Associated Anemia | `ckdc_iron_treatment` | Iron Treatment | `select` |  |  |  |
| CKD Complications and Management | CKD-Associated Anemia | `ckdc_esa` | Erythropoiesis-Stimulating Agent (ESA) | `select` |  |  |  |
| CKD Complications and Management | CKD-Associated Anemia | `ckdc_hif_phi` | HIF-PHI (Roxadustat / Daprodustat) | `select` |  |  |  |
| CKD Complications and Management | CKD-Associated Anemia | `ckdc_hgb_target` | Hemoglobin Target (KDIGO 10-11.5 g/dL) | `select` |  |  |  |
| CKD Complications and Management | Mineral and Bone Disease (CKD-MBD) | `ckdc_pth` | PTH (pg/mL) | `number` |  |  |  |
| CKD Complications and Management | Mineral and Bone Disease (CKD-MBD) | `ckdc_phosphate` | Serum Phosphate (mg/dL) | `number` |  |  |  |
| CKD Complications and Management | Mineral and Bone Disease (CKD-MBD) | `ckdc_calcium` | Corrected Calcium (mg/dL) | `number` |  |  |  |
| CKD Complications and Management | Mineral and Bone Disease (CKD-MBD) | `ckdc_vit_d_25oh` | 25-OH Vitamin D (ng/mL) | `number` |  |  |  |
| CKD Complications and Management | Mineral and Bone Disease (CKD-MBD) | `ckdc_phosphate_binder` | Phosphate Binder | `select` |  |  |  |
| CKD Complications and Management | Mineral and Bone Disease (CKD-MBD) | `ckdc_active_vit_d` | Active Vitamin D Analog | `select` |  |  |  |
| CKD Complications and Management | Mineral and Bone Disease (CKD-MBD) | `ckdc_calcimimetic` | Calcimimetic (secondary hyperPTH) | `select` |  |  |  |
| CKD Complications and Management | Metabolic Acidosis | `ckdc_bicarbonate` | Serum Bicarbonate (mEq/L) | `number` |  |  |  |
| CKD Complications and Management | Metabolic Acidosis | `ckdc_acidosis_treatment` | Metabolic Acidosis Treatment (target bicarb over 22) | `select` |  |  |  |
| CKD Complications and Management | Dialysis Planning | `ckdc_referral_timing` | Nephrology/Dialysis Referral Timing | `select` |  |  |  |
| CKD Complications and Management | Dialysis Planning | `ckdc_modality_preference` | Dialysis Modality Discussion | `select` |  |  |  |
| CKD Complications and Management | Dialysis Planning | `ckdc_access_planning` | Vascular Access Planning (HD) | `select` |  |  |  |
| CKD Complications and Management | Dialysis Planning | `ckdc_transplant_workup` | Kidney Transplant Evaluation | `select` |  |  |  |
| CKD Complications and Management | Dialysis Planning | `ckdc_notes` | Additional Notes | `textarea` |  |  |  |

### CKD Management — `ckd_management_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CKD Management Visit | Patient & CKD Staging | `patientId` | Patient | `typeahead` | Y |  |  |
| CKD Management Visit | Patient & CKD Staging | `visitDate` | Visit Date | `date` | Y |  |  |
| CKD Management Visit | Patient & CKD Staging | `provider` | Provider (Nephrologist / PCP) | `typeahead` | Y |  |  |
| CKD Management Visit | Patient & CKD Staging | `ckdCause` | Primary CKD Etiology | `select` | Y |  |  |
| CKD Management Visit | Patient & CKD Staging | `ckdStage` | CKD Stage (KDIGO 2022) | `select` | Y |  |  |
| CKD Management Visit | Kidney Function & Labs | `creatinine` | Creatinine (mg/dL) | `number` | Y |  |  |
| CKD Management Visit | Kidney Function & Labs | `gfr` | eGFR (mL/min/1.73m2) | `number` | Y |  |  |
| CKD Management Visit | Kidney Function & Labs | `uacr` | Urine Albumin-to-Creatinine Ratio (mg/g) | `number` |  |  |  |
| CKD Management Visit | Kidney Function & Labs | `bun` | BUN (mg/dL) | `number` |  |  |  |
| CKD Management Visit | Kidney Function & Labs | `potassium` | Potassium (mEq/L) | `number` |  |  |  |
| CKD Management Visit | Kidney Function & Labs | `bicarb` | Bicarbonate (mEq/L) | `number` |  |  |  |
| CKD Management Visit | Kidney Function & Labs | `hemoglobin` | Hemoglobin (g/dL) | `number` |  |  |  |
| CKD Management Visit | Kidney Function & Labs | `pth` | PTH (pg/mL) | `number` |  |  |  |
| CKD Management Visit | Kidney Function & Labs | `labNarrative` | Lab Interpretation | `textarea` | Y |  |  |
| CKD Management Visit | CKD Management Plan | `medications` | Kidney-Protective Medications | `textarea` | Y |  |  |
| CKD Management Visit | CKD Management Plan | `dialysisPrep` | Dialysis / Transplant Preparation (if GFR < 30) | `textarea` |  |  |  |
| CKD Management Visit | CKD Management Plan | `nextLabs` | Monitoring Plan | `textarea` | Y |  |  |

### CKD Management — `doc_nephrology_ckd_management_cf`

Screen: 1 page(s) · 1 section(s) · 22 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CKD Management | CKD Management — Specialty Detail | `ckdCause` | Primary CKD Etiology | `select` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `ckdStage` | CKD Stage (KDIGO 2022) | `select` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `creatinine` | Creatinine (mg/dL) | `number` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `gfr` | eGFR (mL/min/1.73m2) | `number` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `uacr` | Urine Albumin-to-Creatinine Ratio (mg/g) | `number` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `bun` | BUN (mg/dL) | `number` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `potassium` | Potassium (mEq/L) | `number` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `bicarb` | Bicarbonate (mEq/L) | `number` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `hemoglobin` | Hemoglobin (g/dL) | `number` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `pth` | PTH (pg/mL) | `number` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `labNarrative` | Lab Interpretation | `textarea` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `medications` | Kidney-Protective Medications | `textarea` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `dialysisPrep` | Dialysis / Transplant Preparation (if GFR < 30) | `textarea` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `nextLabs` | Monitoring Plan | `textarea` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `ckd_f1` | CKD Evaluation: EPIDEMIOLOGY (37 MILLION ADULTS US WITH CKD 15 pct; 9 pct WORLDWIDE; DIABETES MOST COMMON CAUSE 44 pct; HYPERTENSION 28 pct; GLOMERULONEPHRITIS; POLYCYSTIC KIDNEY DISEASE PKD; LUPUS NEPHRITIS; STAGING KDIGO CRITERIA (G1: GFR OVER 90 WITH KIDNEY DAMAGE; G2: 60-89 WITH DAMAGE; G3A: 45-59; G3B: 30-44; G4: 15-29; G5: UNDER 15 KIDNEY FAILURE; ALBUMINURIA A STAGING: A1 UNDER 30 mg/g NORMAL; A2 30-300 MODERATELY INCREASED; A3 OVER 300 SEVERELY INCREASED; COMBINED GFR-ALBUMINURIA RISK ASSESSMENT; ETIOLOGY WORKUP (URINALYSIS URINE MICROSCOPY; SPOT URINE ACR ALBUMIN CREATININE RATIO; RENAL ULTRASOUND SIZE OBSTRUCTION ECHOGENICITY; SERUM CREATININE CYSTATIN C; CAUSE-SPECIFIC TESTING: FASTING GLUCOSE HbA1c DIABETES; ANCA ANTI-GBM ANA COMPLEMENT GLOMERULONEPHRITIS; SPEP URINE PROTEIN ELECTROPHORESIS MULTIPLE MYELOMA; COMPLICATIONS OF CKD (ANEMIA NORMOCHROMIC NORMOCYTIC DECREASED EPO; MINERAL BONE DISEASE SECONDARY HYPERPARATHYROIDISM PHOSPHATE RETENTION VITAMIN D DEFICIENCY CALCIFICATION; HYPERKALEMIA; METABOLIC ACIDOSIS BICARB; FLUID RETENTION HYPERTENSION; UREMIC SYMPTOMS NAUSEA FATIGUE PRURITUS PERICARDITIS ENCEPHALOPATHY; HYPERLIPIDEMIA; INCREASED CARDIOVASCULAR DISEASE RISK; INFECTION RISK IMMUNOSUPPRESSED) | `text` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `ckd_f2` | Progression Slowing and Renal Replacement Planning | `select` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `ckd_class` | CKD KDIGO 2024 Classification: Staging by eGFR G: G1 Above 90 Normal or High; G2 60-89 Mildly Decreased; G3a 45-59 Mild Moderately; G3b 30-44 Moderate Severely; G4 15-29 Severely Decreased; G5 Below 15 Kidney Failure; Albuminuria Categories A: A1 Below 30 Normal Mildly Increased; A2 30-299 Moderately Increased; A3 Above 300 Severely Increased; Staging G+A Combined Risk: G1A1 Low Risk; G3bA3 Very High Risk; Risk Color Map Green Low Yellow Moderate Orange High Red Very High; Cause Identification Etiology: Diabetic Nephropathy Most Common 40%; Hypertensive Nephrosclerosis 25%; IgA Nephropathy; Focal Segmental Glomerulosclerosis FSGS; Lupus Nephritis Class III-V; Polycystic Kidney Disease PKD; Tubulointerstitial; Analgesic; Obstruction; PIGN; mTOR ANCA Associated; Diabetic Kidney Disease DKD: Albuminuria A2-A3 Without Other Explanation; Retinopathy Association; No Hematuria Typically; Biopsy Not Always Needed Typical DKD Presentation; Hypertensive Nephrosclerosis: Long-Standing Poorly Controlled HTN; Normal or Mildly Increased Albuminuria; Bland Sediment; Glomerulonephritis GN: Hematuria Proteinuria Dysmorphic RBC; ANA ANCA Anti-GBM Complement Testing; Biopsy Required Diagnosis; CKD Progression Markers: eGFR Slope Decline Rate Above 5 ml/min/1.73m2/Year Rapid; Proteinuria Increasing Worse Prognosis; UACR Target Below 300 Diabetic CKD; Below 500 IgAN; HbA1c Control Below 7%; BP Control Below 130/80 | `select` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `ckd_workup` | CKD Workup and Progression Risk Assessment | `text` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `ckd_treatment` | CKD Treatment Progression Slowing: BP Target Below 130/80 All; Below 120/70 Albuminuria Above 30; ACE Inhibitor or ARB All CKD with Albuminuria Above 30; Titrate Maximum Tolerated; Monitor K+ Cr First 2-4 Weeks; SGLT2 Inhibitors: Dapagliflozin DAPA-CKD CKD With or Without Diabetes: 50% Relative Risk Reduction Kidney Failure or Death; Canagliflozin CREDENCE DKD; Empagliflozin EMPA-KIDNEY Any CKD Above 300 uACR or eGFR 20-45 Any Cause; eGFR Above 20 To Start; May Continue Lower; Finerenone Non-Steroidal MRA Kerendia: FIDELIO-DKD FIGARO-DKD Type 2 DKD; Albuminuria Plus Diabetes; Reduces Kidney Failure 23% Relative; Cardiovascular CV Benefit Also; Potassium Monitor K+ Above 4.8 Hold; GLP-1 Receptor Agonists: Semaglutide FLOW Trial CKD Endpoint; Glucose Control HbA1c Below 7%; Protein 0.8 g/kg Reduce Progression; Sodium Below 2g Low Sodium Renoprotective; GFR-Guided Drug Dosing Pharmacy; Metformin Continue to eGFR 30 Restart Above 45; Anemia CKD: ESA Erythropoiesis Stimulating Agents: Epoetin Alfa Darbepoetin Alfa; Target Hgb 10-11.5 g/dL NOT Above 13; Iron Replete First Ferritin Above 200 TSAT Above 20; IV Iron Preferred CKD Dialysis; Oral Iron Non-Dialysis; Roxadustat HIF-PHI FDA 2023 Non-Dialysis CKD Anemia; CKD Mineral Bone Disease MBD: Phosphate Restriction Diet; Phosphate Binders Calcium Carbonate Sevelamer Lanthanum; Active Vitamin D Calcitriol Paricalcitol; Cinacalcet Sensipar Calcimimetic Secondary Hyperparathyroidism; Target PTH 2-9x ULN HD; Bicarbonate Supplementation Oral If Below 22; Dialysis Preparation eGFR Below 20: AV Fistula AVF Surgery 6-12M Before Needed; Avoid Arm Veins; Peritoneal Dialysis PD Patient Education Choice; Transplant Evaluation All Candidates; Hospice Conservative Kidney Management Selected Patients | `select` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `ckd_notes_detail` | CKD Management Plan and Notes: Cause of CKD, KDIGO Stage GxAx, eGFR Current and Trend Slope, UACR Current, BP Targets, ACE-I ARB Dose, SGLT2i Dapagliflozin Empagliflozin Canagliflozin, Finerenone Kerendia, GLP-1 RA Plan, Hemoglobin ESA Iron Saturation, PTH Calcium Phosphate CKD-MBD, Bicarbonate Supplementation, Dialysis Planning AVF PD Transplant Timeline, Nephrology Referral, KFRE Risk, Coordination Notes | `textarea` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `ckd_mgmt_notes` | CKD Management Notes and Nephrology Specialist CKD Care/Transplant Surgery Evaluation/Vascular Surgery AVF Creation/Peritoneal Dialysis Nurse Training/Dialysis Center Selection/Endocrinology Diabetes DKD Management/Cardiology CKD Cardiorenal/Hematology Anemia Refractory/Dietitian Renal Diet Phosphate Protein/Pharmacy Nephrotoxin Dose Adjustment/Palliative Care Conservative Kidney Management/Social Work Dialysis Planning/Coordination Notes | `textarea` |  |  |  |
| CKD Management | CKD Management — Specialty Detail | `ckd_complications` | CKD Complications and Management: Anemia of CKD Target Hgb 10-11.5; IV Iron First Ferinject Monoferric Ferumoxytol; ESA Darbepoetin Epoetin; HIF-PHI Roxadustat Vadadustat Not FDA US Yet; Metabolic Acidosis NaHCO3 Target Above 22 mEq/L Veverimer; CKD-MBD Calcium Phosphate PTH: Phosphate Binders Sevelamer Lanthanum Calcium Acetate; Active Vitamin D Calcitriol Paricalcitol; Calcimimetics Cinacalcet Etelcalcetide IV Dialysis; Hyperkalemia Patiromer Sodium Zirconium; Hypertension Target Below 120/80 CKD Proteinuria; Fluid Volume; Acid-Base; Electrolyte Management; Hyperphosphatemia Diet; Protein Restriction 0.6-0.8g/kg GFR Below 30; Sodium Below 2g; Uric Acid Hyperuricemia Gout Febuxostat; Cardiovascular Risk Dominant Cause Death CKD; Statin Sharpe Major Trial; Aspirin; BP Control -- CKD COMPLICATIONS AND TARGETED MANAGEMENT: ANEMIA [KIDNEY PRODUCES 90% EPO; NORMOCHROMIC NORMOCYTIC; TARGET Hgb 10-11.5 g/dL; TREAT CAUSES FIRST]: IRON DEFICIENCY [FERRITIN BELOW 200 OR TSAT BELOW 20% [CKD NOT ON DIALYSIS]; FERRITIN BELOW 500 OR TSAT BELOW 30% [DIALYSIS]; IV IRON PREFERRED [FERINJECT FCM; MONOFERRIC FERRIC DERISOMALTOSE; FERUMOXYTOL INJECTAFER; ORAL IRON POORLY ABSORBED UREMIA; IRON SUCROSE SODIUM FERRIC GLUCONATE; INTRAVENOUS DIALYSIS UNIT]]; ESA [ERYTHROPOIESIS-STIMULATING AGENTS: DARBEPOETIN ALFA [ARANESP; LONG HALF-LIFE Q2W OR MONTHLY; USUAL DOSE 0.45-0.75 mcg/kg]; EPOETIN ALFA [EPOGEN PROCRIT; 3X/WEEK]; START IF Hgb BELOW 10 AFTER IRON REPLETE; AVOID ABOVE 11.5 Hgb; HIF-PHI [ROXADUSTAT; VADADUSTAT; ORAL; FDA NOT APPROVED US 2024; EU APPROVED; KDIGO 2024 NEUTRAL RECOMMENDATION AWAITING US APPROVAL]]; METABOLIC ACIDOSIS [COMMON GFR BELOW 30; TARGET BICARBONATE ABOVE 22 mEq/L]: SODIUM BICARBONATE [0.5-1 mEq/kg/DAY; ORAL; PROTECTIVE BONE MUSCLE KIDNEY]; VEVERIMER [TIOPRONIN-BASED ACID-BINDING AGENT; PHASE 3 PROMISING; NOT FDA APPROVED]; HYPERKALEMIA [COMMON ACEi ARB + CKD; RISK ABOVE 5.5; FATAL ABOVE 7]: PATIROMER [VELTASSA; 8.4-25 g QD; POLYMER BINDS K IN GI; NON-SYSTEMIC; DELAY 3H OTHER MEDS]; SODIUM ZIRCONIUM CYCLOSILICATE [SZC; LOKELMA; 5-10 g QD; ACTS IN MINUTES; PREFERRED ACUTE; LONGER TERM MAINTENANCE]; DIETARY [AVOID HIGH-POTASSIUM FOODS; TOMATO BANANA ORANGE POTATO]; AVOID ACEi BRIEFLY IF SEVERE; CKD-MBD [CHRONIC KIDNEY DISEASE MINERAL-BONE DISORDER]: PHOSPHATE MANAGEMENT [DIETARY RESTRICTION BELOW 800 mg/DAY; PHOSPHATE BINDERS]: SEVELAMER CARBONATE/HCl [RENVELA RENAGEL; 800-1600 mg TID WITH MEALS; NON-CALCIUM PREFERRED VASCULAR CALCIFICATION]; LANTHANUM CARBONATE [FOSRENOL; CHEW 500-1000 mg TID WITH MEALS; EFFECTIVE]; CALCIUM ACETATE [PHOSLO 667 mg TID; RISK HYPERCALCEMIA]; SUCROFERRIC OXYHYDROXIDE [VELPHORO 500 mg TID; IRON-BASED; LOW PILL BURDEN]; SECONDARY HYPERPARATHYROIDISM [PTH ABOVE 2-9x ULN CKD G3-G5; ELEVATED PHOSPHATE FIBROBLAST GROWTH FACTOR 23 FGF23; PHOSPHATE RESTRICTION + BINDER; VITAMIN D]: ACTIVE VITAMIN D [CALCITRIOL 0.25-0.5 mcg QD; PARICALCITOL; DOXERCALCIFEROL]; CALCIMIMETICS [CINACALCET SENSIPAR 30-180 mg QD; DIALYSIS PATIENTS; LOWERS PTH CALCIUM; GI INTOLERANCE; ETELCALCETIDE IV PARSABIV DIALYSIS ONLY]; BONE DISEASE [RENAL OSTEODYSTROPHY; DEXA; BISPHOSPHONATES CAUTION GFR BELOW 30] | `text` |  |  |  |

### CKD Management — `nephrology_ckd_management_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CKD Management: KDIGO Staging, Slowing Progression RAAS SGLT2i Finerenone, Anemia Mineral Bone Disease, and Dialysis Planning | CKD Diagnosis: KDIGO Staging eGFR Albuminuria, Risk Classification, Cause Identification | `ckd_class` | CKD KDIGO 2024 Classification: Staging by eGFR G: G1 Above 90 Normal or High; G2 60-89 Mildly Decreased; G3a 45-59 Mild Moderately; G3b 30-44 Moderate Severely; G4 15-29 Severely Decreased; G5 Below 15 Kidney Failure; Albuminuria Categories A: A1 Below 30 Normal Mildly Increased; A2 30-299 Moderately Increased; A3 Above 300 Severely Increased; Staging G+A Combined Risk: G1A1 Low Risk; G3bA3 Very High Risk; Risk Color Map Green Low Yellow Moderate Orange High Red Very High; Cause Identification Etiology: Diabetic Nephropathy Most Common 40%; Hypertensive Nephrosclerosis 25%; IgA Nephropathy; Focal Segmental Glomerulosclerosis FSGS; Lupus Nephritis Class III-V; Polycystic Kidney Disease PKD; Tubulointerstitial; Analgesic; Obstruction; PIGN; mTOR ANCA Associated; Diabetic Kidney Disease DKD: Albuminuria A2-A3 Without Other Explanation; Retinopathy Association; No Hematuria Typically; Biopsy Not Always Needed Typical DKD Presentation; Hypertensive Nephrosclerosis: Long-Standing Poorly Controlled HTN; Normal or Mildly Increased Albuminuria; Bland Sediment; Glomerulonephritis GN: Hematuria Proteinuria Dysmorphic RBC; ANA ANCA Anti-GBM Complement Testing; Biopsy Required Diagnosis; CKD Progression Markers: eGFR Slope Decline Rate Above 5 ml/min/1.73m2/Year Rapid; Proteinuria Increasing Worse Prognosis; UACR Target Below 300 Diabetic CKD; Below 500 IgAN; HbA1c Control Below 7%; BP Control Below 130/80 | `select` |  |  |  |
| CKD Management: KDIGO Staging, Slowing Progression RAAS SGLT2i Finerenone, Anemia Mineral Bone Disease, and Dialysis Planning | CKD Diagnosis: KDIGO Staging eGFR Albuminuria, Risk Classification, Cause Identification | `ckd_workup` | CKD Workup and Progression Risk Assessment | `text` |  |  |  |
| CKD Management: KDIGO Staging, Slowing Progression RAAS SGLT2i Finerenone, Anemia Mineral Bone Disease, and Dialysis Planning | CKD Treatment: Progression Slowing RAAS SGLT2i Finerenone, Anemia ESA, MBD, and Dialysis Preparation | `ckd_treatment` | CKD Treatment Progression Slowing: BP Target Below 130/80 All; Below 120/70 Albuminuria Above 30; ACE Inhibitor or ARB All CKD with Albuminuria Above 30; Titrate Maximum Tolerated; Monitor K+ Cr First 2-4 Weeks; SGLT2 Inhibitors: Dapagliflozin DAPA-CKD CKD With or Without Diabetes: 50% Relative Risk Reduction Kidney Failure or Death; Canagliflozin CREDENCE DKD; Empagliflozin EMPA-KIDNEY Any CKD Above 300 uACR or eGFR 20-45 Any Cause; eGFR Above 20 To Start; May Continue Lower; Finerenone Non-Steroidal MRA Kerendia: FIDELIO-DKD FIGARO-DKD Type 2 DKD; Albuminuria Plus Diabetes; Reduces Kidney Failure 23% Relative; Cardiovascular CV Benefit Also; Potassium Monitor K+ Above 4.8 Hold; GLP-1 Receptor Agonists: Semaglutide FLOW Trial CKD Endpoint; Glucose Control HbA1c Below 7%; Protein 0.8 g/kg Reduce Progression; Sodium Below 2g Low Sodium Renoprotective; GFR-Guided Drug Dosing Pharmacy; Metformin Continue to eGFR 30 Restart Above 45; Anemia CKD: ESA Erythropoiesis Stimulating Agents: Epoetin Alfa Darbepoetin Alfa; Target Hgb 10-11.5 g/dL NOT Above 13; Iron Replete First Ferritin Above 200 TSAT Above 20; IV Iron Preferred CKD Dialysis; Oral Iron Non-Dialysis; Roxadustat HIF-PHI FDA 2023 Non-Dialysis CKD Anemia; CKD Mineral Bone Disease MBD: Phosphate Restriction Diet; Phosphate Binders Calcium Carbonate Sevelamer Lanthanum; Active Vitamin D Calcitriol Paricalcitol; Cinacalcet Sensipar Calcimimetic Secondary Hyperparathyroidism; Target PTH 2-9x ULN HD; Bicarbonate Supplementation Oral If Below 22; Dialysis Preparation eGFR Below 20: AV Fistula AVF Surgery 6-12M Before Needed; Avoid Arm Veins; Peritoneal Dialysis PD Patient Education Choice; Transplant Evaluation All Candidates; Hospice Conservative Kidney Management Selected Patients | `select` |  |  |  |
| CKD Management: KDIGO Staging, Slowing Progression RAAS SGLT2i Finerenone, Anemia Mineral Bone Disease, and Dialysis Planning | CKD Treatment: Progression Slowing RAAS SGLT2i Finerenone, Anemia ESA, MBD, and Dialysis Preparation | `ckd_notes_detail` | CKD Management Plan and Notes: Cause of CKD, KDIGO Stage GxAx, eGFR Current and Trend Slope, UACR Current, BP Targets, ACE-I ARB Dose, SGLT2i Dapagliflozin Empagliflozin Canagliflozin, Finerenone Kerendia, GLP-1 RA Plan, Hemoglobin ESA Iron Saturation, PTH Calcium Phosphate CKD-MBD, Bicarbonate Supplementation, Dialysis Planning AVF PD Transplant Timeline, Nephrology Referral, KFRE Risk, Coordination Notes | `textarea` |  |  |  |
| CKD Management: KDIGO Staging, Slowing Progression RAAS SGLT2i Finerenone, Anemia Mineral Bone Disease, and Dialysis Planning | CKD Management Notes | `ckd_mgmt_notes` | CKD Management Notes and Nephrology Specialist CKD Care/Transplant Surgery Evaluation/Vascular Surgery AVF Creation/Peritoneal Dialysis Nurse Training/Dialysis Center Selection/Endocrinology Diabetes DKD Management/Cardiology CKD Cardiorenal/Hematology Anemia Refractory/Dietitian Renal Diet Phosphate Protein/Pharmacy Nephrotoxin Dose Adjustment/Palliative Care Conservative Kidney Management/Social Work Dialysis Planning/Coordination Notes | `textarea` |  |  |  |

### CKD Progression / RRT Prep — `nephrology_ckd_progression_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CKD Progression Slowing and RRT Preparation | CKD Staging and Risk | `ckd_stage` | CKD Stage (KDIGO 2012) | `select` |  |  |  |
| CKD Progression Slowing and RRT Preparation | CKD Staging and Risk | `slowing_strategies` | CKD Progression Slowing (ACEi or ARB first-line for diabetic and non-diabetic CKD with proteinuria — reduces UPCR 35-40% and GFR decline; AVOID dual RAAS blockade (ACEi+ARB hyperkalemia/AKI, ALTITUDE/ONTARGET); SGLT2i: empagliflozin/dapagliflozin reduce ESKD regardless diabetes status; BP target <130/80 mmHg; salt restriction; glycemic target HbA1c 7-7.5% for DKD (ACCORD, ADVANCE); smoking cessation; avoid NSAIDs; iodinated contrast nephropathy prevention (hydration + hold metformin); anemia: iron repletion first (IV iron preferred CKD ≥3b if TSAT <30%)) | `text` |  |  |  |
| CKD Progression Slowing and RRT Preparation | RRT Modality Planning | `rrt_modality` | RRT Modality Selection | `select` |  |  |  |

### CKD Renoprotection — `nephrology_ckd_renoprotection_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CKD Renoprotection — Staging, Risk, and Evidence-Based Therapy | CKD Staging and Risk Assessment | `ckd_f1` | CKD Staging KDIGO: G1 eGFR 90+ (With Kidney Damage Markers); G2 60-89; G3a 45-59; G3b 30-44; G4 15-29; G5 Under 15 (Kidney Failure); ALBUMINURIA: A1 UACR Under 30; A2 30-300 (Moderately Increased); A3 Over 300 (Severely Increased or Nephrotic Over 3500); GFR + ALBUMINURIA Grid Determines Progression Risk (CGA Green/Yellow/Orange/Red); EGFR DECLINE RATE: Rapid = Over 5 mL/min/1.73m2/year or Greater Than 25% in 12 Months (Investigate Superimposed Cause); REFERRAL: GFR Under 30; UACR Over 300; Rapid Decline; Uncertain Diagnosis; AKI; Hypertension Refractory; KDIGO HEAT MAP: High and Very High Risk (Orange-Red) = Prioritize Nephroprotection; KIDNEY FAILURE RISK EQUATION: 2-Year and 5-Year Risk Using Age; Sex; GFR; UACR; CARDIOVASCULAR RISK: CKD = Independent CVD Risk Factor; eGFR Under 45 = High Cardiovascular Risk Equivalent; UACR Elevated + Low eGFR = Highest CVD Risk | `text` |  |  |  |
| CKD Renoprotection — Staging, Risk, and Evidence-Based Therapy | CKD Staging and Risk Assessment | `ckd_f2` | CKD Renoprotective Hierarchy: ACEi or ARB First-Line UACR Over 300 (REDUCES UACR 30-40%; Slow GFR Decline; Use Even if Not Hypertensive); SGLT2 Inhibitor Add-On eGFR Above 20-25 (CREDENCE Canagliflozin; DAPA-CKD Dapagliflozin; EMPA-KIDNEY Empagliflozin - All Reduced Kidney Failure; Works Regardless Diabetes); Finerenone Add-On DKD if Potassium Under 4.8 (FIDELIO-DKD; FIGARO-DKD; Reduces UACR and Kidney Failure; Non-Steroidal MRA Lower Hyperkalemia Than Spironolactone); BP Target Under 120 Systolic If Tolerated | `select` |  |  |  |
| CKD Renoprotection — Staging, Risk, and Evidence-Based Therapy | CKD Complications and Special Populations | `ckd_f3` | CKD Complications Management: ANEMIA: EPO Deficiency; Target Hgb 10-11.5 g/dL (NOT Higher; TREAT Study); Ferritin Over 200 and Transferrin Sat Over 20% Before ESA; IV Iron (Ferric Carboxymaltose; IRONMAN Trial) Superior to Oral for CKD; SECONDARY HYPERPARATHYROIDISM: PTH Elevation; Restrict Phosphorus; Phosphate Binders (Calcium Carbonate; Sevelamer; Lanthanum); Vitamin D Analogs (Calcitriol; Paricalcitol; Doxercalciferol); Calcimimetics (Cinacalcet; Etelcalcetide) for High PTH; METABOLIC ACIDOSIS: Sodium Bicarbonate 0.5-1 mEq/kg/day (Target Bicarb Over 22; NIDDK CARB Trial; May Slow CKD Progression); VADADUSTAT or DAPRODUSTAT (HIF-PHI): Oral Alternative to ESA; FDA 2023; Non-Inferior ESA Dialysis; Concern MACE Events; HYPERKALEMIA: Low Potassium Diet; Patiromer or Sodium Zirconium Cyclosilicate (Allows Continued RAAS Blockade); HYPERPHOSPHATEMIA: Dietary Restriction Under 800 mg/day; Phosphate Binders With Meals | `text` |  |  |  |
| CKD Renoprotection — Staging, Risk, and Evidence-Based Therapy | CKD Complications and Special Populations | `ckd_f4` | CKD Cardiovascular and Transition Planning: CARDIOVASCULAR: CKD + Diabetes + CVD = Triple High Risk; Statin All CKD Stages 50+ or Cardiovascular History; SHARP Trial Simvastatin + Ezetimibe Reduces CV Events CKD (NOT Dialysis); AVOID FIBRATES With Low eGFR; Aspirin Secondary Prevention Only; BLOOD PRESSURE: Multiple Agents Required (ACEi/ARB + CCB + Diuretic Sequence); Avoid NSAIDs; Chlorthalidone Effective eGFR 30+ (CLICK Trial); PROTEIN: 0.8 g/kg/day NON-Dialysis CKD (Avoid High Protein; Amino Acid Catabolism Increases Azotemia); DIALYSIS PLANNING: Refer Nephrology eGFR Under 30; AV Fistula or Graft Creation eGFR 15-20 (Avoid Peripherals Dominant Arm); Peritoneal vs. Hemodialysis Shared Decision (PD Equivalent Outcomes First 2 Years; Home Advantage); TRANSPLANT: Refer eGFR Under 20; Living Donor Preferred; Preemptive If Available | `text` |  |  |  |

### Complement TMA/aHUS/TTP — `nephrology_complement_mediated_tma_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Thrombotic Microangiopathy — TTP vs. HUS vs. aHUS vs. MAHA | TMA Classification and MAHA Workup | `tma_class` | TMA Diagnosis Framework and Differential (THROMBOTIC MICROANGIOPATHY (TMA): DEFINITION: triad of MAHA (microangiopathic hemolytic anemia) + thrombocytopenia + end-organ dysfunction; MAHA HALLMARKS: elevated LDH; low/absent haptoglobin; SCHISTOCYTES on peripheral smear (>2 per HPF or >1%); DAT (Coombs) NEGATIVE (distinguishes from autoimmune hemolytic anemia); CAUSES OF TMA: (1) TTP (Thrombotic Thrombocytopenic Purpura): ADAMTS13 <10% (severe deficiency) + inhibitor; (2) STEC-HUS (Shiga toxin-associated): E. coli O157:H7 or O104:H4; bloody diarrhea prodrome; children; (3) ATYPICAL HUS (aHUS): complement dysregulation; NO STEC; NO severe ADAMTS13 deficiency; genes: CFH, CFI, C3, MCP (CD46), THBD, CFB, CFHR1-5; (4) SECONDARY TMA: pregnancy (HELLP, TTP); HIV; transplant (TA-TMA); drugs (quinine, clopidogrel, ticlopidine, calcineurin inhibitors, VEGF-targeted); malignancy; antiphospholipid syndrome; DIC (NOT typical TMA — fibrinogen low, PT/PTT prolonged; TMA: fibrinogen normal); DIAGNOSTIC PRIORITY: SEND ADAMTS13 FIRST before plasma exchange; anti-ADAMTS13 IgG antibody (inhibitor); level <10% = TTP; 10-50% = may be non-TTP TMA; STEC CULTURE: O157:H7; STEC toxin; bloody diarrhea context) | `text` |  |  |  |
| Thrombotic Microangiopathy — TTP vs. HUS vs. aHUS vs. MAHA | TMA Classification and MAHA Workup | `adamts13_ttp` | TTP — ADAMTS13 Deficiency and Plasma Exchange | `select` |  |  |  |
| Thrombotic Microangiopathy — TTP vs. HUS vs. aHUS vs. MAHA | aHUS and Complement Blockade | `ahus` | Atypical HUS Pathophysiology and Genetic Testing (ATYPICAL HUS (aHUS): PATHOPHYSIOLOGY: dysregulation of ALTERNATIVE COMPLEMENT PATHWAY; loss-of-function: CFH (complement factor H: main regulator) CFI, MCP (CD46), THBD; gain-of-function: C3, CFB; CFHR mutations: CFHR1-3 deletion (associated with anti-CFH antibodies); CLINICAL: severe AKI (dialysis in 50%); MAHA + thrombocytopenia (may be MILD initially); EXTRARENAL TMA: CNS (seizures, stroke), cardiac, GI, pulmonary; RECURRENCE AFTER RENAL TRANSPLANT: HIGH (CFH mutations 80%; CFI 45%; C3/CFB 50%; MCP-associated: low recurrence); DIAGNOSIS: EXCLUDE TTP (ADAMTS13 >=10%) + EXCLUDE STEC; COMPLEMENT PANEL: C3, C4, CH50, AH50, CFH level, CFI level, anti-CFH antibodies, MCP on leukocytes; GENETIC TESTING: sequencing of CFH, CFI, MCP, C3, CFB, THBD, CFHRs; results take weeks — DO NOT WAIT before starting treatment; anti-CFH antibodies (auto-immune aHUS): RITUXIMAB + plasma exchange; SCID/HSCT in children with MCP mutations; SECONDARY aHUS-LIKE: calcineurin inhibitor toxicity (tacrolimus, cyclosporine); VEGF-targeted drugs (bevacizumab, sunitinib); pregnancy (postpartum); transplant-associated TMA (TA-TMA) | `text` |  |  |  |
| Thrombotic Microangiopathy — TTP vs. HUS vs. aHUS vs. MAHA | aHUS and Complement Blockade | `eculizumab` | Eculizumab and Ravulizumab for aHUS | `select` |  |  |  |

### Dialysis Access — `dialysis_access_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dialysis Access Assessment | Current Access | `access` | Access Type | `select` |  |  |  |
| Dialysis Access Assessment | Current Access | `access_site` | Access Site (e.g. Left RC-AVF) | `text` |  |  |  |
| Dialysis Access Assessment | Current Access | `access_age_months` | Age of Access (months) | `number` |  |  |  |
| Dialysis Access Assessment | Current Access | `dialysis_modality` | Dialysis Modality | `select` |  |  |  |
| Dialysis Access Assessment | Access Function | `kt_v` | Kt/V (most recent) | `number` |  |  |  |
| Dialysis Access Assessment | Access Function | `blood_flow_rate` | Blood Flow Rate (mL/min) | `number` |  |  |  |
| Dialysis Access Assessment | Access Function | `thrill_palpable` | Thrill palpable (AVF/AVG) | `checkbox` |  |  |  |
| Dialysis Access Assessment | Access Function | `bruit_present` | Bruit present on auscultation | `checkbox` |  |  |  |
| Dialysis Access Assessment | Access Function | `stenosis_signs` | Signs of stenosis (prolonged bleeding, high venous pressure) | `checkbox` |  |  |  |
| Dialysis Access Assessment | Access Function | `infection_signs` | Signs of access infection | `checkbox` |  |  |  |
| Dialysis Access Assessment | Plan | `imaging_ordered` | Doppler/fistulogram ordered | `checkbox` |  |  |  |
| Dialysis Access Assessment | Plan | `intervention_plan` | Intervention Plan | `select` |  |  |  |
| Dialysis Access Assessment | Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Dialysis Access — `nephrology_dialysis_access_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dialysis Access and Adequacy — Hemodialysis, Peritoneal Dialysis, and Complications | Hemodialysis Access and Adequacy Targets | `dial_f1` | Dialysis Evaluation: INDICATIONS (ESRD GFR UNDER 15; UREMIC SYMPTOMS PERICARDITIS ENCEPHALOPATHY COAGULOPATHY; REFRACTORY FLUID OVERLOAD; REFRACTORY HYPERKALEMIA; REFRACTORY ACIDOSIS; TIMING: ASYMPTOMATIC START NOT PROVEN BETTER EARLY; SYMPTOM-GUIDED PREFERRED; HEMODIALYSIS HD VASCULAR ACCESS (ARTERIOVENOUS FISTULA AVF: NATIVE VESSEL RADIAL BRACHIAL ARTERY CEPHALIC BASILIC VEIN ANASTOMOSIS; PREFERRED FISTULA FIRST CATHETER LAST PARADIGM; 3-4 MONTHS MATURATION TIME; HIGHEST PATENCY LOWEST INFECTION RATE; CANNULATION NEEDLE INSERTION; AVF SURVEILLANCE FLOW MEASUREMENT; ARTERIOVENOUS GRAFT AVG: PROSTHETIC MATERIAL PTFE; BRIDGE FISTULA NOT MATURED Or POOR VESSELS; SHORTER MATURATION 3-4 WEEKS; HIGHER THROMBOSIS INFECTION RATE THAN AVF; TUNNELED CUFFED DIALYSIS CATHETER: JUGULAR INTERNAL SUBCLAVIAN FEMORAL; IMMEDIATE USE; HIGHEST INFECTION SEPSIS RISK; AVOID SUBCLAVIAN CENTRAL STENOSIS; BACTEREMIA: STAPH AUREUS MOST COMMON CATHETER; TREAT 6 WEEKS BACTEREMIA; REMOVE CATHETER FUNGAL; DIALYSIS ADEQUACY HEMODIALYSIS (KT/V TARGET MINIMUM 1.2 PER SESSION; URR UREA REDUCTION RATIO OVER 65 pct; THREE TIMES WEEKLY CONVENTIONAL 4 HOURS; NOCTURNAL OR SHORT DAILY EXTENDED DOSING; HIGH-FLUX MEMBRANES; ONLINE HEMODIAFILTRATION HDF; ACCESS THROMBOSIS MANAGEMENT DECLOT; ANGIOPLASTY STENOSIS; VEIN MAPPING PLANNING) | `text` |  |  |  |
| Dialysis Access and Adequacy — Hemodialysis, Peritoneal Dialysis, and Complications | Hemodialysis Access and Adequacy Targets | `dial_f2` | Peritoneal Dialysis and Complications | `select` |  |  |  |

### Dialysis Initiation (HD vs. PD) — `nephrology_dialysis_initiation_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dialysis Initiation — Timing, Modality Selection, and Vascular Access | CKD Stage and Dialysis Timing | `ckd_staging` | CKD Staging and Preparation (CKD G4 (eGFR 15-29): nephrology referral mandatory; KDIGO 2022; discuss RRT options; all modalities presented; CKD G5 (eGFR <15): initiation planning; refer vascular surgery for AV fistula creation (maturation 6-8 weeks minimum, ideally 6 months); Kt/V monitoring; uremic symptoms: nausea, pruritus, encephalopathy = initiation triggers; WHEN TO INITIATE: symptom-driven rather than eGFR threshold; IDEAL-K trial (2010): early (eGFR 10-14) vs. late (eGFR 5-7) initiation: NO survival benefit; current practice: wait for symptoms OR eGFR 5-9 without symptoms; precipitous decline may require earlier; medications adjust: avoid NSAIDs, dose-adjust renally-cleared drugs) | `text` |  |  |  |
| Dialysis Initiation — Timing, Modality Selection, and Vascular Access | CKD Stage and Dialysis Timing | `hd_vs_pd` | Modality Selection — HD vs. PD | `select` |  |  |  |
| Dialysis Initiation — Timing, Modality Selection, and Vascular Access | Vascular Access Planning and CKD Complications | `fistula_planning` | AV Fistula Creation and Planning (KDOQI 2019: fistula first initiative; radiocephalic (wrist) first choice; brachiocephalic; transposed brachiobasilic (2-stage); vein mapping (US): cephalic vein >=2.5 mm, radial artery >=2 mm; vein depth <6 mm ideal; CVC avoidance critical (associated with 3x higher infection rate + central vein stenosis); temporary femoral CVC: use with dialysis initiation if no access; subclavian CVC: AVOID (central vein stenosis 50% → destroys ipsilateral upper extremity access potential); internal jugular: preferred tunneled site; fistula maturation: 6-8 weeks minimum; 6-month ideal; steal syndrome: pain/paresthesia hand post-fistula creation; banding or DRIL procedure) | `text` |  |  |  |
| Dialysis Initiation — Timing, Modality Selection, and Vascular Access | Vascular Access Planning and CKD Complications | `ckd_complications` | CKD Mineral Bone Disease and Anemia | `select` |  |  |  |

### FSGS and Minimal Change Disease — `nephrology_podocytopathy_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Podocytopathy — FSGS, MCD, Sparsentan, Cyclosporine, Genetics | FSGS and MCD Diagnosis | `podocyte_dx` | FSGS Columbia Classification, MCD vs. Primary FSGS, and Nephrotic Syndrome Workup (PODOCYTOPATHY OVERVIEW: NEPHROTIC SYNDROME: TRIAD: proteinuria >3.5 g/day (or PCR >3500 mg/g); HYPOALBUMINEMIA <3.5 g/dL; EDEMA; plus HYPERLIPIDEMIA + LIPIDURIA; MINIMAL CHANGE DISEASE (MCD): most common nephrotic syndrome in children; adults: 10-15%; LIGHT MICROSCOPY: normal; ELECTRON MICROSCOPY: diffuse foot process effacement (>80%); IF: negative; SECONDARY CAUSES: NSAIDs; lithium; lymphoma (Hodgkin); TREATMENT: high-dose steroids (see below); EXCELLENT prognosis (90% CR); FOCAL SEGMENTAL GLOMERULOSCLEROSIS (FSGS): COLUMBIA CLASSIFICATION: FSGS-NOS (not otherwise specified); TIP LESION (best prognosis); COLLAPSING VARIANT (worst; HIV; parvovirus; drug; genetic); PERIHILAR; CELLULAR; BIOPSY: segmental sclerosis in subset of glomeruli; IF: IgM + C3 in sclerosing segments (non-specific); ELECTRON MICROSCOPY: foot process effacement variable; PRIMARY (IDIOPATHIC) FSGS: circulating permeability factor (suPAR, CLCF1); SECONDARY FSGS: ADAPTIVE (hyperfiltration): obesity; reduced nephron mass (single kidney; reflux nephropathy); maladaptive; low-grade proteinuria; hypertrophic glomeruli; GENETIC FSGS: NPHS2 (podocin); WT1; INF2; ACTN4; TRPC6; TESTING: genetic panel all patients <=30 years or family history or steroid resistance; VIRAL: HIV-associated nephropathy (HIVAN); collapsing FSGS; parvovirus B19; DRUG: heroin nephropathy; pamidronate; MEMBRANOUS NEPHROPATHY: anti-PLA2R antibody; DIAGNOSIS: URINE PCR or 24h protein; albumin; lipid panel; COMPLEMENT: normal in primary nephrotic; low C3/C4 = secondary; SEROLOGY: ANA, HIV, hepatitis B/C; RENAL ULTRASOUND; BIOPSY: all adults with nephrotic syndrome | `text` |  |  |  |
| Podocytopathy — FSGS, MCD, Sparsentan, Cyclosporine, Genetics | FSGS and MCD Diagnosis | `fsgs_workup` | Surace Permeability Factor Testing, Secondary FSGS Evaluation, and Kidney Biopsy | `select` |  |  |  |
| Podocytopathy — FSGS, MCD, Sparsentan, Cyclosporine, Genetics | FSGS and MCD Treatment | `steroid_protocol` | High-Dose Prednisone Protocol, Steroid Resistance, and Cyclosporine/Tacrolimus (TREATMENT OF PRIMARY NEPHROTIC SYNDROME: MINIMAL CHANGE DISEASE (MCD) FIRST-LINE: PREDNISONE 1 mg/kg/day (max 80 mg) for 4-16 weeks; RESPONSE: 80-90% COMPLETE REMISSION within 4-8 weeks; DEFINITION COMPLETE REMISSION: urine PCR <200 mg/g or protein <0.3 g/day; DEFINITION PARTIAL REMISSION: 50% reduction and protein <3.5 g/day; RELAPSE: 50-75% relapse after initial response; FREQUENTLY RELAPSING MCD (>=2 relapses within 6 months or >=4 within 12 months): CALCINEURIN INHIBITOR (CNI): cyclosporine or tacrolimus; MYCOPHENOLATE MOFETIL (MMF); CYCLOPHOSPHAMIDE; RITUXIMAB; PRIMARY FSGS FIRST-LINE: PREDNISONE 1 mg/kg/day (max 80 mg) for 4-6 months (KDIGO 2021: high-dose steroids); STEROID RESISTANCE (SR-FSGS): NO REMISSION after 4-6 months steroids; CALCINEURIN INHIBITORS: CYCLOSPORINE 3-5 mg/kg/day (target trough 100-200 ng/mL): RESPONSE: 70% achieve remission; 50% relapse when stopped; DEPENDENT on CNI; TACROLIMUS: 0.1-0.2 mg/kg/day (trough 5-10 ng/mL); similar efficacy to cyclosporine; less gingival hyperplasia + hirsutism; COMBINATION: low-dose steroids + CNI for steroid-resistant; MYCOPHENOLATE MOFETIL (MMF): 1.5-2 g/day; second-line; more for relapsing; RITUXIMAB: anti-CD20; EMERGING for steroid-dependent and frequently relapsing; ABATACEPT (CTLA4-Ig): some cases with apolipoprotein L1 FSGS; GALACTOSE: preoperative and recurrence prevention; MONITORING: serum creatinine + proteinuria monthly; drug levels for CNI; blood pressure; EDEMA MANAGEMENT: LOOP DIURETICS (furosemide); low-sodium diet | `text` |  |  |  |
| Podocytopathy — FSGS, MCD, Sparsentan, Cyclosporine, Genetics | FSGS and MCD Treatment | `sparsentan` | Sparsentan DUPLEX Trial and IgA Nephropathy Sparsentan | `select` |  |  |  |

### Glomerulonephritis — `glomerulonephritis_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Glomerulonephritis Evaluation | Presentation | `creatinine` | Creatinine (mg/dL) | `number` |  |  |  |
| Glomerulonephritis Evaluation | Presentation | `egfr` | eGFR | `number` |  |  |  |
| Glomerulonephritis Evaluation | Presentation | `urine_rbc_casts` | RBC casts on urinalysis | `checkbox` |  |  |  |
| Glomerulonephritis Evaluation | Presentation | `proteinuria_nephrotic` | Nephrotic-range proteinuria (>3.5g/day) | `checkbox` |  |  |  |
| Glomerulonephritis Evaluation | Presentation | `hematuria` | Hematuria present | `checkbox` |  |  |  |
| Glomerulonephritis Evaluation | Presentation | `edema` | Edema present | `checkbox` |  |  |  |
| Glomerulonephritis Evaluation | Presentation | `hypertension` | New or worsening hypertension | `checkbox` |  |  |  |
| Glomerulonephritis Evaluation | Serologic Workup | `anca_positive` | ANCA positive (PR3 or MPO) | `checkbox` |  |  |  |
| Glomerulonephritis Evaluation | Serologic Workup | `anti_gbm` | Anti-GBM positive | `checkbox` |  |  |  |
| Glomerulonephritis Evaluation | Serologic Workup | `low_complement` | Low complement (C3/C4) | `checkbox` |  |  |  |
| Glomerulonephritis Evaluation | Serologic Workup | `anti_dsdna` | Anti-dsDNA elevated (lupus) | `checkbox` |  |  |  |
| Glomerulonephritis Evaluation | Serologic Workup | `asot_elevated` | ASO titer elevated (post-streptococcal) | `checkbox` |  |  |  |
| Glomerulonephritis Evaluation | Serologic Workup | `hep_b_hep_c` | Hepatitis B or C associated | `checkbox` |  |  |  |
| Glomerulonephritis Evaluation | Biopsy and Treatment | `biopsy_done` | Renal biopsy performed | `checkbox` |  |  |  |
| Glomerulonephritis Evaluation | Biopsy and Treatment | `biopsy_result` | Biopsy Result (if done) | `select` |  |  |  |
| Glomerulonephritis Evaluation | Biopsy and Treatment | `immunosuppression` | Immunosuppressive Therapy | `select` |  |  |  |
| Glomerulonephritis Evaluation | Biopsy and Treatment | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Glomerulonephritis — `nephrology_glomerulonephritis_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Glomerulonephritis: Classification, Biopsy Interpretation, and Targeted Immunotherapy | GN Diagnosis, Biopsy Classification, and Serologic Workup | `gn_class` | GN Classification: Nephrotic Syndrome Protein Above 3.5g Edema Hypoalbuminemia Hyperlipidemia Lipiduria; Nephritic Hematuria RBC Casts Hypertension AKI; IgA Oxford MEST-C M1E1S1T2C1; ANCA MPO PR3 Pauci-Immune; Anti-GBM Goodpasture; MN PLA2R Spiking; MCD Minimal Change; FSGS APOL1 Podocytopathy; MPGN C3 Glomerulopathy | `select` |  |  |  |
| Glomerulonephritis: Classification, Biopsy Interpretation, and Targeted Immunotherapy | GN Diagnosis, Biopsy Classification, and Serologic Workup | `gn_treatment` | GN Treatment: MCD Prednisone 1mg/kg 8-16W 80% Remission Cyclophosphamide Tacrolimus Relapse; FSGS Prednisone RTX Cyclosporine Sparsentan APOL1 High-Risk; MN Rituximab MENTOR 2x1000mg Anti-PLA2R Titer; ANCA Cyclophosphamide IV NIH or RTX RAVE; Avacopan ADVOCATE 30mg BID; Anti-GBM Pulse Steroids Cyclophosphamide Plasmapheresis; Dialysis -- GN TARGETED TREATMENT BY TYPE: MINIMAL CHANGE DISEASE [MCD; MOST COMMON NEPHROTIC ADULTS BELOW 30Y; PODOCYTE EFFACEMENT ON EM; NORMAL LM; NEGATIVE IF]: INDUCTION [PREDNISONE 1 mg/kg/DAY OR 2 mg/kg EVERY OTHER DAY; MAX 80 mg; COMPLETE REMISSION 80% AT 8-16 WEEKS; TAPER SLOWLY OVER 6 MONTHS]; RELAPSE [FREQUENT; STEROID-SENSITIVE RELAPSING; STEROID-DEPENDENT]: CYCLOPHOSPHAMIDE [2-2.5 mg/kg/DAY PO x8-12 WEEKS; SUSTAINED REMISSION; GONADOTOXIC]; RITUXIMAB [375 mg/m2 x4 OR 1000 mg x2; EMERGING FIRST-LINE FREQUENT RELAPSING]; TACROLIMUS [0.05-0.1 mg/kg/DAY; CNHB; MONITOR LEVELS; TAPER SLOWLY]; MYCOPHENOLATE [SECOND-LINE]; SECONDARY MCD CAUSES [NSAIDS; LYMPHOMA HODGKIN; HIV; NSAID-INDUCED; TREAT UNDERLYING]; FSGS [FOCAL SEGMENTAL GLOMERULOSCLEROSIS; PODOCYTOPATHY; PRIMARY VS SECONDARY VS GENETIC]: APOL1 HIGH-RISK [G1/G2 VARIANTS AFRICAN DESCENT; COLLAPSING FSGS HIV; MALADAPTIVE FORMS]; PRIMARY FSGS TREATMENT [PREDNISONE 1 mg/kg/DAY UP TO 16 WEEKS; PARTIAL/COMPLETE REMISSION 30-40%]; STEROID-RESISTANT [CALCINEURIN INHIBITORS: CYCLOSPORINE 3-5 mg/kg/DAY; TACROLIMUS; CYCLOPHOSPHAMIDE; MYCOPHENOLATE; RITUXIMAB]; SPARSENTAN [DUPLEX TRIAL FSGS PROMISING]; MEMBRANOUS NEPHROPATHY [MN; SUBEPITHELIAL DEPOSITS; PRIMARY VS SECONDARY]: ANTI-PLA2R [PRIMARY MARKER; TITER GUIDES TREATMENT]; SECONDARY [HBV HEPATITIS B; NSAIDS; MALIGNANCY [COLON; LUNG; BREAST]; SLE; CHECK BEFORE TREATING]; CONSERVATIVE [RISK STRATIFY; LOW-RISK PROTEIN BELOW 4 g/G STABLE GFR: SUPPORTIVE ONLY; MODERATE-HIGH RISK: TREAT]; RITUXIMAB [MENTOR NEJM 2019: RTX 1000 mg IV x2 DOSES 6M APART SUPERIOR CYCLOSPORINE AT 24M; COMPLETE/PARTIAL REMISSION 60%; ANTI-PLA2R MONITORING GUIDE; FDA NOT APPROVED BUT STANDARD]; TACROLIMUS+MMF [MODIFIED PONTICELLI]; ANCA VASCULITIS GLOMERULONEPHRITIS [RAPIDLY PROGRESSIVE GN; CRESCENTIC]: INDUCTION REMISSION: RITUXIMAB [RAVE NEJM 2010: RTX = CYCLOPHOSPHAMIDE; NON-INFERIOR; SUPERIOR FOR RELAPSING AND PR3+; 375 mg/m2 WEEKLY x4 OR 500-1000 mg x2; PREFERRED]; CYCLOPHOSPHAMIDE [0.5-1.0 g/m2 IV Q3W NIH PROTOCOL; OR 2 mg/kg PO DAILY; EUVAS PROTOCOLS; BLADDER TOXICITY MESNA]; STEROIDS [METHYLPREDNISOLONE PULSE 500-1000 mg x3 DAYS; THEN PREDNISONE 1 mg/kg/DAY TAPER]; AVACOPAN [CCYNE; C5a RECEPTOR ANTAGONIST; ADVOCATE NEJM 2021: AVACOPAN 30 mg BID NON-INFERIOR PREDNISONE INDUCTION; SUPERIOR SUSTAINED REMISSION AT 52W [65.7% vs 54.9%]; REDUCED STEROID TOXICITY; FDA 2021 COMBINED WITH CYC OR RTX; 30 mg BID]; MAINTENANCE: RITUXIMAB Q6M x18-24 MONTHS [SUPERIOR AZATHIOPRINE MAINRITSAN]; AZATHIOPRINE; ANTI-GBM [GOODPASTURE]: PLASMAPHERESIS [60% PLASMA EXCHANGE DAILY x14 OR UNTIL ANTIBODY NEGATIVE]; PULSE STEROIDS; CYCLOPHOSPHAMIDE; DIALYSIS [CREATININE ABOVE 6-7; DIALYSIS-DEPENDENT POOR RENAL RECOVERY; LUNG HEMORRHAGE LIFE-THREATENING TREAT REGARDLESS]; ANTI-GBM NEGATIVE WITHIN 3-4 WEEKS; NO RELAPSE TYPICALLY [UNLIKE ANCA]; TRANSPLANT ONLY ANTI-GBM NEGATIVE 6+ MONTHS | `text` |  |  |  |
| Glomerulonephritis: Classification, Biopsy Interpretation, and Targeted Immunotherapy | GN Management Notes | `gn_mgmt_notes` | Glomerulonephritis Management Notes and Nephrology/Pathology/Rheumatology/Pharmacy/Nursing/Dialysis/Transplant/Plasmapheresis Coordination | `textarea` |  |  |  |

### Hyperkalemia — `nephrology_hyperkalemia_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hyperkalemia — Emergency Management and Prevention | Causes, ECG, and Treatment Steps | `hk_f1` | Hyperkalemia Evaluation: DEFINITION AND ETIOLOGY (NORMAL SERUM K PLUS 3.5-5.0 mEq/L; HYPERKALEMIA OVER 5.5 mEq/L MILD; OVER 6.0 MODERATE; OVER 6.5 SEVERE; LIFE-THREATENING OVER 7.0 Or ANY With ECG Changes; PSEUDOHYPERKALEMIA: HEMOLYSIS SAMPLE; THROMBOCYTOSIS PLATELETS RELEASE K; LEUKOCYTOSIS WBC RELEASE; REPEAT SAMPLE BEFORE TREATING If No ECG Changes And Clinical Context Low; ETIOLOGY 3 MECHANISMS (EXCESS INTAKE: DIETARY HIGH K DIET SUPPLEMENTS; DECREASED EXCRETION MOST COMMON CAUSE: RENAL FAILURE CKD AKI REDUCED GFR; PRIMARY HYPOALDOSTERONISM ADDISON DISEASE; HYPORENINEMIC HYPOALDOSTERONISM TYPE 4 RTA DIABETES OBSTRUCTIVE NEPHROPATHY; MEDICATIONS RAAS: ACE INHIBITORS ARBs ALDOSTERONE ANTAGONISTS SPIRONOLACTONE EPLERENONE; HEPARIN; NSAIDS REDUCE RENIN; TMP-SMX K-SPARING Effect; TRANSCELLULAR SHIFT FROM ICF TO ECF: ACIDOSIS METABOLIC H+ Enters Cell K Exits; INSULIN DEFICIENCY DKA K Exits Cell No Insulin Push In; BETA-BLOCKADE Non-Selective Blocks Beta-2 Catecholamine K Uptake; DIGOXIN TOXICITY Blocks Na-K-ATPase; CELL LYSIS CRUSH INJURY RHABDO TUMOR LYSIS HEMOLYSIS Intracellular K Release; HYPERGLYCEMIA HYPEROSMOLARITY Osmotic Pull Water And K From Cell; CLINICAL FEATURES (GENERALLY ASYMPTOMATIC EARLY; MUSCLE WEAKNESS Ascending; FATIGUE MALAISE; PARESTHESIAS; PALPITATIONS; CARDIAC ARREST VENTRICULAR FIBRILLATION SEVERE; ECG CHANGES (EARLIEST PEAKED NARROW T WAVES; PR PROLONGATION; WIDE QRS COMPLEX; SINE WAVE PATTERN LATE EMERGENCY IMMINENT ARREST; P WAVE ABSENT; VENTRICULAR FIBRILLATION ASYSTOLE FATAL; ECG CHANGES DO NOT ALWAYS CORRELATE Serum Level; ABSENT ECG CHANGES NOT SAFE If Level Very High; CHECK ECG IMMEDIATELY On Any Hyperkalemia Diagnosis; LABS: COMPREHENSIVE METABOLIC PANEL CMP; URINE K UA OSMOL CREATININE; ALDOSTERONE RENIN IF CHRONIC; POTASSIUM EXCRETION FRACTION TTKG; ABG ACID-BASE STATUS; DIGOXIN LEVEL IF ON DIGOXIN) | `text` |  |  |  |
| Hyperkalemia — Emergency Management and Prevention | Causes, ECG, and Treatment Steps | `hk_f2` | Emergency Treatment Steps and Prevention | `select` |  |  |  |

### Hyperkalemia Management — `nephrology_hyperkalemia_management_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hyperkalemia — ECG Recognition, Acute Tx, and K+ Binders | Recognition and ECG Findings | `ecg_signs` | Hyperkalemia ECG Progression (MILD: 5.5-6.0 mEq/L: peaked/tall narrow T waves (first ECG sign); MODERATE: 6.0-6.5 mEq/L: peaked T waves + prolonged PR interval + widening QRS + loss of P waves; SEVERE >=6.5 mEq/L: sinusoidal pattern (wide QRS merges with T wave); pre-terminal; bradycardia; complete heart block; ventricular fibrillation; PSEUDO-HYPERKALEMIA: hemolysis in tube (most common — repeat; spin immediately); thrombocytosis (>1 million platelets — get plasma K+); extreme leukocytosis; prolonged tourniquet; CAUSES: ACE-I/ARB + kidney disease; RAAS inhibitors + spironolactone combination; heparin (aldosterone inhibition); NSAIDs; trimethoprim (amiloride-like); calcineurin inhibitors (cyclosporine, tacrolimus); succinylcholine (K+ release from muscle); transfusions; adrenal insufficiency; type IV RTA (hypoaldosteronism/diabetic nephropathy); cellular shift (acidosis, insulin deficiency, beta-blockers, rhabdomyolysis); DISTRIBUTION: chronic kidney disease most common cause; dialysis non-compliance) | `text` |  |  |  |
| Hyperkalemia — ECG Recognition, Acute Tx, and K+ Binders | Recognition and ECG Findings | `etiology` | Hyperkalemia Etiology and RAAS Medications | `select` |  |  |  |
| Hyperkalemia — ECG Recognition, Acute Tx, and K+ Binders | Acute Treatment and Chronic Prevention | `acute_tx` | Stepwise Hyperkalemia Treatment (STEP 1: CARDIAC STABILIZATION (if ECG changes or K+ >6.5): CALCIUM GLUCONATE 1g IV over 2-3 min; onset 1-3 min; duration 30-60 min; does NOT lower potassium; stabilizes cardiac membrane; CALCIUM CHLORIDE (3x more calcium but more caustic): if central line available; REPEAT if no ECG improvement in 5 min; STEP 2: SHIFT INTO CELLS: INSULIN 10 units regular IV + GLUCOSE 50g (1 amp D50W) simultaneously; onset 15-20 min; duration 4-6h; lowers K+ by 0.5-1.0 mEq/L; monitor glucose Q30-60 min (hypoglycemia in 10-15% — continue dextrose drip); ALBUTEROL 10-20 mg nebulized (high-dose; 4-8x regular dose): onset 15-20 min; lowers K+ by 0.5-1.0 mEq/L; ADDITIVE TO INSULIN-GLUCOSE; AVOID in ACS; SODIUM BICARBONATE: only beneficial in metabolic acidosis (drives K+ into cells); minimal effect in normal acid-base; STEP 3: ELIMINATION: FUROSEMIDE if adequate urine output; KAYEXALATE (sodium polystyrene sulfonate): slower onset; risk of intestinal necrosis (in post-op, bowel disease); DIALYSIS: most rapid definitive treatment for severe persistent hyperkalemia; STEP 4: prevent recurrence | `text` |  |  |  |
| Hyperkalemia — ECG Recognition, Acute Tx, and K+ Binders | Acute Treatment and Chronic Prevention | `potassium_binders` | New Potassium Binders and Chronic Management | `select` |  |  |  |

### Hypertensive CKD — `nephrology_hypertensive_ckd_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| CKD Progression Prevention and Hypertensive Nephropathy | CKD Staging and Risk Stratification | `ckd_etiology` | Primary Etiology of CKD | `select` |  |  |  |
| CKD Progression Prevention and Hypertensive Nephropathy | CKD Staging and Risk Stratification | `ckd_kdigo_stage` | KDIGO CKD Classification (GFR + Albuminuria) | `select` |  |  |  |
| CKD Progression Prevention and Hypertensive Nephropathy | CKD Staging and Risk Stratification | `ckd_proteinuria` | Proteinuria Quantification and Target — spot urine ACR (albumin-to-creatinine ratio): preferred method; ACR below 30 mg/g: normal; 30-300: moderately increased; above 300: severely increased; 24-hour urine protein more accurate for heavy proteinuria (above 3 g/day: nephrotic); urine protein electrophoresis for myeloma; treatment target: ACR reduction by 40-50% with RAAS blockade (ACEi or ARB); residual proteinuria above 500-700 mg/g despite RAAS + SGLT2i: add sparsentan or finerenone; nonsteroidal MRA (finerenone) reduces proteinuria by additional 30% | `text` |  |  |  |
| CKD Progression Prevention and Hypertensive Nephropathy | Disease-Modifying and Supportive Therapy | `ckd_raas` | RAAS Blockade (ACEi or ARB) | `select` |  |  |  |
| CKD Progression Prevention and Hypertensive Nephropathy | Disease-Modifying and Supportive Therapy | `ckd_sglt2i` | SGLT2 Inhibitors for CKD | `select` |  |  |  |
| CKD Progression Prevention and Hypertensive Nephropathy | Disease-Modifying and Supportive Therapy | `ckd_finerenone` | Finerenone (Kerendia) — Nonsteroidal MRA | `select` |  |  |  |
| CKD Progression Prevention and Hypertensive Nephropathy | Disease-Modifying and Supportive Therapy | `ckd_bp_management` | Blood Pressure Targets in CKD | `select` |  |  |  |
| CKD Progression Prevention and Hypertensive Nephropathy | Disease-Modifying and Supportive Therapy | `ckd_anemia` | CKD Anemia Management | `select` |  |  |  |
| CKD Progression Prevention and Hypertensive Nephropathy | Disease-Modifying and Supportive Therapy | `ckd_dialysis_prep` | Dialysis Preparation and Transplant Timing | `select` |  |  |  |
| CKD Progression Prevention and Hypertensive Nephropathy | Disease-Modifying and Supportive Therapy | `ckd_notes` | CKD Management Notes and Nephrology/Cardiology/Endocrinology/Transplant Coordination | `textarea` |  |  |  |

### Hyponatremia — `nephrology_hyponatremia_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hyponatremia — Classification, Workup, and Correction | Evaluation and Management | `hypo_f1` | Hyponatremia Evaluation: DEFINITION Na UNDER 135 mEq/L (MILD 130-135; MODERATE 125-130; SEVERE Under 125; ACUTE Under 48H; CHRONIC Over 48H Or Unknown; STEP 1 PLASMA OSMOLALITY (HYPOOSMOLAR HYPONATREMIA Most Common True; ISOTONIC PSEUDOHYPONATREMIA Hyperlipidemia Hyperproteinemia Lab Artifact Direct ISE Not Affected; HYPERTONIC HYPONATREMIA Glucose Mannitol Glycine Hypertonic Draws Water Out; GLUCOSE CORRECTION Add 1.6 mEq/L Na Per 100 mg/dL Glucose Above 100; STEP 2 URINE OSMOLALITY IF HYPOOSMOLAR: UOSM UNDER 100 Maximally Dilute = Excess Water Intake Psychogenic Polydipsia Tea And Toast Low Solute Beer Potomania; UOSM OVER 100 Non-Maximally Dilute = ADH Active; STEP 3 VOLUME STATUS AND URINE SODIUM: HYPOVOLEMIC HYPONATREMIA UOSM Over 100 (UNa UNDER 20 Extra-Renal Loss Diarrhea Vomiting Burns; UNa OVER 20 Renal Loss Diuretics Cerebral Salt Wasting Addison Disease Aldosterone; EUVOLEMIC HYPONATREMIA UOSM Over 100 UNa Over 20 (SIADH Most Common; Hypothyroidism Screen TSH; Adrenal Insufficiency Screen AM Cortisol; SIADH CAUSES: CNS Meningitis Stroke Tumor SAH; Pulmonary Pneumonia Cancer TB PEEP; Medications SSRIs SNRIs TCA Carbamazepine Oxcarbazepine Cyclophosphamide NSAIDs Desmopressin Opioids; Malignancy SCLC Pancreas; Postoperative; HYPERVOLEMIC HYPONATREMIA UOSM Over 100 (UNa UNDER 20 CHF Cirrhosis Nephrotic; UNa OVER 20 ACUTE KIDNEY INJURY AKI CKD; FENA OR UNa Interpretation In Context Of Diuretics); SIADH DIAGNOSIS BARTTER-SCHWARTZ CRITERIA: Serum Osm Under 275; Urine Osm Over 100; Clinical Euvolemia; Urine Na Over 40; Normal Thyroid Adrenal; Not On Diuretics; Low Uric Acid Helps; CEREBRAL SALT WASTING CSW Distinguish From SIADH (Hypovolemic Volume Depleted; Higher Urine Volume; CNS Injury SAH; TREAT With NS Not Fluid Restriction) | `text` |  |  |  |
| Hyponatremia — Classification, Workup, and Correction | Evaluation and Management | `hypo_f2` | Treatment and Correction Rate Rules | `select` |  |  |  |

### Hyponatremia and Hypernatremia — `nephrology_electrolyte_hyponatremia_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hyponatremia — Osmolality, SIADH, Tolvaptan, Correction Rate | Hyponatremia Classification and Workup | `hypo_dx` | Serum Osmolality Approach, Urine Sodium Cutoffs, and Volume Status Assessment (HYPONATREMIA CLASSIFICATION: DEFINITION: serum sodium <135 mEq/L; SERUM OSMOLALITY (Posm) FIRST STEP: ISOTONIC HYPONATREMIA (Posm 280-295): PSEUDOHYPONATREMIA; artifact; triglycerides >1500 mg/dL; paraprotein; ACTUAL SODIUM NORMAL; labs report falsely low; HYPOTONIC HYPONATREMIA (Posm <280): TRUE hyponatremia; most cases; further classify by VOLUME STATUS; HYPERTONIC HYPONATREMIA (Posm >295): hyperglycemia; mannitol; contrast; sodium drops 1.6 mEq/L per 100 mg/dL rise in glucose (Katz correction); HYPOTONIC HYPONATREMIA CLASSIFICATION BY VOLUME STATUS: HYPERVOLEMIC HYPONATREMIA: edematous states; URINE SODIUM <20 mEq/L: heart failure; cirrhosis; nephrotic syndrome (dilutional; sodium-avid); URINE SODIUM >20 mEq/L: advanced kidney disease (AKI/CKD); EUVOLEMIC HYPONATREMIA (clinically normal volume): URINE OSMOLALITY >100 mOsm/kg: SIADH; hypothyroidism; adrenal insufficiency (cortisol deficiency); URINE OSMOLALITY <100 mOsm/kg: primary polydipsia; beer potomania; HYPOVOLEMIC HYPONATREMIA: volume depleted; URINE SODIUM <20 mEq/L: EXTRARENAL LOSSES (vomiting; diarrhea; sweating; burns); GI losses; URINE SODIUM >20 mEq/L: RENAL LOSSES: diuretics (thiazide; more than loop); salt-wasting nephropathy; cerebral salt wasting; THYROID STATUS: hypothyroidism can cause euvolemic hyponatremia (decreased CO + decreased water excretion); CORTISOL: glucocorticoid deficiency impairs free water excretion; ACTH STIMULATION: if adrenal insufficiency suspected; CORRECTION FORMULA: ADROGUE-MADIAS equation; infusate sodium + potassium compared to serum sodium; predicted change per liter infused; FREE WATER DEFICIT (hypernatremia): TBW x (serum Na/140 - 1) | `text` |  |  |  |
| Hyponatremia — Osmolality, SIADH, Tolvaptan, Correction Rate | Hyponatremia Classification and Workup | `siadh` | SIADH Diagnostic Criteria, SIADH Causes, and Cerebral vs. SIADH Salt Wasting Distinction | `select` |  |  |  |
| Hyponatremia — Osmolality, SIADH, Tolvaptan, Correction Rate | Hyponatremia Treatment and Rate of Correction | `hypo_correction` | Maximum Correction Rate, ODS (Osmotic Demyelination Syndrome), Tolvaptan, and 3% Saline Protocol (HYPONATREMIA TREATMENT: CORRECTION RATE: MAXIMUM SAFE: 10-12 mEq/L per 24 hours; 18 mEq/L per 48h; HIGH-RISK ODS: correction >8-10 mEq/L per 24h = risk of OSMOTIC DEMYELINATION SYNDROME (ODS; formerly central pontine myelinolysis + extrapontine); ODS RISK FACTORS: severe hyponatremia (<120 mEq/L); chronic hyponatremia (>48h); alcoholism; malnutrition; liver disease; hypokalemia; OVERCORRECTION: if sodium rises >10-12 mEq/L in 24h = RELOWERING; RELOWERING PROTOCOL: 5% dextrose IV + desmopressin (DDAVP) 2 mcg IV Q6-8h; slows rate; monitor Q2-4h sodium; SYMPTOMATIC SEVERE HYPONATREMIA (SEIZURE; COMA; RESPIRATORY FAILURE): 3% HYPERTONIC SALINE: 150 mL IV bolus over 20 min; repeat x2 if no improvement; TARGET: raise sodium 5 mEq/L then reassess; THEN: slower correction to maintain <10-12 mEq/L/24h; 3% SALINE RATE CALCULATION: Adrogue-Madias formula; approximately 1-2 mL/kg/h 3% saline; MILD-MODERATE SYMPTOMATIC: fluid restriction + treat underlying cause; CHRONIC ASYMPTOMATIC HYPONATREMIA (SIADH): FLUID RESTRICTION: primary treatment; restrict total fluid <1000-1200 mL/day; SALT TABLETS: increase osmolar load; UREA: increases urine osmole excretion; DEMECLOCYCLINE: blocks renal ADH action; nephrotoxic; rarely used; TOLVAPTAN (SAMSCA; JYNARQUE): ORAL V2 RECEPTOR ANTAGONIST; aquaresis (free water excretion without sodium loss); FDA 2009 for SIADH + HF + cirrhosis (SAMSCA); JYNARQUE: for autosomal dominant PKD; SALT-1 SALT-2 TRIALS: tolvaptan vs. placebo in hyponatremia; SODIUM NORMALIZATION in 30-80%; HEPATOTOXICITY BLACK BOX WARNING: AVOID in liver disease >30 days or underlying liver disease; LIVER FUNCTION MONITORING; DOSE: start 15 mg QD; may increase to 30 or 60 mg QD; DO NOT RESTRICT FLUID (risk hypernatremia); CONIVAPTAN (VAPRISOL): IV V1a+V2 antagonist; hospital only; SATAVAPTAN: discontinued (liver toxicity) | `text` |  |  |  |
| Hyponatremia — Osmolality, SIADH, Tolvaptan, Correction Rate | Hyponatremia Treatment and Rate of Correction | `hypernatremia` | Hypernatremia Causes, Free Water Deficit Calculation, and Central vs. Nephrogenic Diabetes Insipidus | `select` |  |  |  |

### IgA Nephropathy — `nephrology_igan_management_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| IgA Nephropathy: Diagnosis, Risk Stratification, and Targeted Therapy | IgAN Diagnosis, Oxford Classification, and Risk Stratification | `igan_class` | Renal Biopsy Diagnosis: Oxford MEST-C Mesangial M0/M1, Endocapillary E0/E1, Segmental Sclerosis S0/S1, Tubular Atrophy T0-T2, Crescents C0-C2; 2-Year eGFR Decline Prediction | `select` |  |  |  |
| IgA Nephropathy: Diagnosis, Risk Stratification, and Targeted Therapy | IgAN Diagnosis, Oxford Classification, and Risk Stratification | `igan_raas` | IgAN Supportive Care: ACEi/ARB Proteinuria Below 1g Target, BP Below 130/80, Fish Oil, SGLT2i Dapagliflozin, Tonsillectomy -- IgAN SUPPORTIVE CARE (ALL PATIENTS): RAAS BLOCKADE [GOLD STANDARD FIRST STEP IN ALL IgAN; TARGET: PROTEINURIA BELOW 0.5-1 g/day]: ACEi [RAMIPRIL; LISINOPRIL; PERINDOPRIL; START AT LOW DOSE; TITRATE TO MAXIMUM TOLERATED; MONITOR K + CREATININE; DUAL RAAS NOT RECOMMENDED; COMBINATION RAAS INCREASES AKI + HYPERKALEMIA WITHOUT ADDED BENEFIT]; ARB [LOSARTAN; VALSARTAN; IRBESARTAN; ALTERNATIVE TO ACEi; SOME PREFER ARB IN COUGH]; BLOOD PRESSURE [TARGET BELOW 130/80 mmHg; BELOW 120/80 IF TOLERATED IN HIGH-RISK]; MAXIMIZE RAAS BEFORE ADDING THERAPY [MINIMUM 3-6 MONTHS]; FISH OIL [OMEGA-3 FATTY ACIDS; VARIOUS DOSING [3-4 g EPA/DHA/DAY]; TORONTO IgAN STUDY + META-ANALYSES: MODEST BENEFIT; RENOPROTECTIVE MECHANISM [ANTI-INFLAMMATORY; REDUCES TXA2; PLATELET AGGREGATION]; LOW RISK; WIDELY USED AS ADJUNCT; NOT IN ISN 2021 AS MANDATORY BUT COMMON PRACTICE]; SGLT2 INHIBITORS [DAPAGLIFLOZIN DAPA-CKD + EMPAGLIFLOZIN EMPA-KIDNEY: BOTH SHOW BENEFIT IN CKD + ALBUMINURIA INCLUDING IgAN SUBGROUPS; REDUCE PROTEINURIA + GFR DECLINE; ADD ON TOP OF RAAS; ISN 2021: RECOMMEND WHERE APPROVED FOR CKD]; LIPID CONTROL [STATINS; DYSLIPIDEMIA WORSENS PROTEINURIC CKD; LDL BELOW 70 IN HIGH CKD RISK]; LIFESTYLE [WEIGHT REDUCTION; SMOKING CESSATION; SODIUM RESTRICTION BELOW 2g/DAY]; TONSILLECTOMY [AMYGDALECTOMY; ROLE IN IgAN PARTICULARLY IN JAPANESE GUIDELINES; RATIONALE: TONSILLAR MUCOSA PRODUCES GALACTOSE-DEFICIENT IgA1 [Gd-IgA1]; TONSILLECTOMY REDUCES HEMATURIA + PROTEINURIA; JAPANESE RCT + OBSERVATIONAL: REDUCED ESRD RISK; WESTERN GUIDELINES [ISN/KDIGO] MORE CAUTIOUS; CONSIDERED IN PATIENTS WITH RECURRENT TONSILLITIS + SYNPHARYNGITIC HEMATURIA + MILD-MODERATE CKD]; DIETARY PROTEIN [BELOW 0.8-1.0 g/kg/day IN PROGRESSIVE CKD; HIGH PROTEIN WORSENS PROTEINURIA; DIETITIAN REFERRAL] | `text` |  |  |  |
| IgA Nephropathy: Diagnosis, Risk Stratification, and Targeted Therapy | IgAN Targeted Therapy: Budesonide Nefecon, Sparsentan, Avacopan, Immunosuppression | `igan_targeted_tx` | Nefecon Budesonide 16mg Targeted Release NEFIGARD Proteinuria Reduction, Sparsentan PROTECT Dual AT1 ET-A Receptor Blocker, Avacopan Complement C5a, ISN High-Risk Steroids | `select` |  |  |  |
| IgA Nephropathy: Diagnosis, Risk Stratification, and Targeted Therapy | IgAN Targeted Therapy: Budesonide Nefecon, Sparsentan, Avacopan, Immunosuppression | `igan_notes` | IgA Nephropathy Management Notes and Nephrology/Pathology/Rheumatology/Pharmacy/Nutrition/Genetics Coordination | `textarea` |  |  |  |

### IgA Nephropathy — `nephrology_iga_nephropathy_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| IgA Nephropathy: Oxford Classification, Risk Stratification, Supportive Care, and Novel Targeted Therapies | IgAN Diagnosis: Oxford MEST-C Classification, Risk Stratification, and Galactose-Deficient IgA1 Pathophysiology | `igan_class` | IgA Nephropathy Classification: Diagnosis Kidney Biopsy Required: IgA Dominant or Co-Dominant Mesangial Deposits Immunofluorescence; C3 Co-Deposits Common; IgG Subclass IgA1 Galactose-Deficient Gd-IgA1; Oxford MEST-C Classification Histologic: M Mesangial Hypercellularity Score 0-1: M0 Below 50% M1 50 or More Percent Glomeruli; E Endocapillary Hypercellularity 0-1; S Segmental Sclerosis Adhesions 0-1; T Tubular Atrophy Interstitial Fibrosis: T0 Below 25% T1 25-50% T2 Above 50%; C Crescents: C0 None C1 Below 25% C2 25 or More Percent; Higher Scores Worse Prognosis; Risk Stratification: Low Risk All: eGFR Above 50 Proteinuria Below 0.5 g/day No Hematuria No Hypertension; Moderate Risk Any: Proteinuria 0.5-1.0; High Risk Any: Proteinuria Above 1 g/day eGFR Below 60 Hypertension Crescents T1-T2; International IgAN Prediction Tool 2023 TESTING4: Integrates Age Sex Race eGFR Proteinuria Pathology Scores Predicts 5-Year KFRE; Pathophysiology: Gd-IgA1 Galactose-Deficient Hinge Region IgA1 Increased Production; Anti-Gd-IgA1 IgG Autoantibodies; Immune Complexes Bind Mesangial IgA Fc Receptor CD89; Mesangial Cell Activation Complement Alternative and Lectin Pathway; C3 Activation; APRIL BAFF B-Cell Survival Targets; Budesonide Targeted-Release Sparsentan Dual ET-R RAAS; Iptacopan Complement Factor B Alternative Pathway; UACR UPCR 24H Protein Collection; Hematuria Gross or Microscopic; IgA Serum Level Not Diagnostic; Gd-IgA1 Research Biomarker; KFRE Kidney Failure Risk Equation 5 and 10 Year | `select` |  |  |  |
| IgA Nephropathy: Oxford Classification, Risk Stratification, Supportive Care, and Novel Targeted Therapies | IgAN Diagnosis: Oxford MEST-C Classification, Risk Stratification, and Galactose-Deficient IgA1 Pathophysiology | `igan_workup` | IgAN Workup and Risk Stratification Assessment | `text` |  |  |  |
| IgA Nephropathy: Oxford Classification, Risk Stratification, Supportive Care, and Novel Targeted Therapies | IgAN Treatment: Supportive RAAS, SGLT2i, Budesonide, Sparsentan Dual Blocker, and Iptacopan Complement | `igan_treatment` | IgAN Treatment: Supportive Care All Patients: BP Target Below 130/80 All; Below 125/75 High Risk; ACE Inhibitor or ARB First-Line All; RAS Blockade Proteinuria Reduction Renoprotective; Dual RAAS Not Recommended Added Risk; SGLT2 Inhibitors: Dapagliflozin Canagliflozin; Reduce Proteinuria 30-40% Independent of Diabetes; eGFR Above 20 To Start; Cardio-Renal Benefits DAPA-CKD EMPA-KIDNEY; Low Sodium Diet Below 2g; High Fluid Intake 2-3L; Omega-3 Fish Oil Modest Benefit; Tonsillectomy Debated Eastern Data Japan Korea; Specific Therapies: Targeted-Release Budesonide Nefecon Tarpeyo FDA 2023: 16mg Daily Oral Delayed-Release Targeted Ileal Peyer Patches Site IgA Origin; NEFIGAN PROTECT Trials; Reduces Proteinuria 43% From Baseline; High-Risk Patients eGFR Above 35 UPCR Above 0.8; 9 Months Treatment Then Reassess; SE Similar Oral Steroids But Less Systemic Via First-Pass Liver; Sparsentan Filspari FDA 2023 Dual Endothelin ET-A and Angiotensin AT1 Receptor Antagonist: 200-400mg Daily Oral; PROTECT Trial; 49% Proteinuria Reduction Vs 15% IRB; eGFR Slope Benefit 24 Months; Approved Above Age 18 eGFR 30 or More UPCR 1.5 or More; Hepatotoxicity Monitor LFT; Avoid Pregnancy Teratogenic; Iptacopan Fabhalta FDA 2024 Complement Factor B Inhibitor Alternative Pathway: 200mg BID Oral; APPLAUSE-IgAN Trial; Reduces Proteinuria 38% Placebo Adjusted; High-Risk Only; Systemic Steroids: Methylprednisolone 1g IV x3 Days Then Oral Controversial; STOP-IgAN No Benefit Added Toxicity; TESTING Reduced Adverse Events Reduced-Dose; Selected High-Risk Rapidly Progressive; Rituximab Anti-CD20 Limited Data; Cyclophosphamide Not Recommended Except Crescentic | `select` |  |  |  |
| IgA Nephropathy: Oxford Classification, Risk Stratification, Supportive Care, and Novel Targeted Therapies | IgAN Treatment: Supportive RAAS, SGLT2i, Budesonide, Sparsentan Dual Blocker, and Iptacopan Complement | `igan_notes_detail` | IgAN Management Plan and Notes: Oxford MEST-C Score, KFRE 5Y 10Y Risk, UPCR Baseline and Current, eGFR CKD Stage, BP Target Achieved, ACE-I ARB Dose, SGLT2i Dapagliflozin Canagliflozin, Budesonide Nefecon Plan, Sparsentan Filspari Plan, Iptacopan Fabhalta Plan, Systemic Steroid Indication Crescentic, Rituximab Plan, LFT Monitoring Sparsentan, Vaccination Pre-Iptacopan, Coordination Notes | `textarea` |  |  |  |
| IgA Nephropathy: Oxford Classification, Risk Stratification, Supportive Care, and Novel Targeted Therapies | IgAN Management Notes | `igan_mgmt_notes` | IgAN Management Notes and Nephrology IgA Nephropathy Specialist/Kidney Biopsy Pathology Oxford MEST-C/Transplant Nephrology eGFR Below 20/Pharmacy Sparsentan REMS Iptacopan Vaccine/Infectious Disease Pre-Iptacopan Vaccination Meningococcal/Cardiology CKD Cardiovascular/Radiology Renal Ultrasound/Nutrition CKD Renal Diet/Genetics Hereditary IgAN Alport Evaluation/Coordination Notes | `textarea` |  |  |  |

### Interstitial Nephritis — `nephrology_interstitial_nephritis_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute Interstitial Nephritis AIN — Diagnosis and Management | Etiology and Diagnosis | `ain_f1` | Acute Interstitial Nephritis Evaluation: EPIDEMIOLOGY AND PATHOPHYSIOLOGY (AIN 15-27 pct OF ACUTE KIDNEY INJURY ON BIOPSY; FREQUENTLY DRUG-INDUCED 70-75 pct; PATHOPHYSIOLOGY: IMMUNE-MEDIATED INFLAMMATION RENAL TUBULES INTERSTITIUM; T-CELL MEDIATED HYPERSENSITIVITY TYPE IV; INTERSTITIAL EDEMA MONONUCLEAR CELL INFILTRATE; TUBULAR INJURY SECONDARY; ETIOLOGY DRUG-INDUCED 70-75 pct (NSAIDS IBUPROFEN NAPROXEN Most Common Cause; PROTON PUMP INHIBITORS PPIs OMEPRAZOLE COMMON Increasingly Recognized; BETA-LACTAM ANTIBIOTICS METHICILLIN CLASSIC PENICILLIN CEPHALOSPORINS; SULFONAMIDES TMP-SMX; FLUOROQUINOLONES CIPROFLOXACIN; RIFAMPIN; ALLOPURINOL; 5-AMINOSALICYLATE MESALAMINE INFLAMMATORY BOWEL; IMMUNE CHECKPOINT INHIBITORS PEMBROLIZUMAB NIVOLUMAB PD-1 CTLA-4; VANCOMYCIN RARE; INFECTION-ASSOCIATED 15 pct (STREPTOCOCCAL PHARYNGITIS CLASSIC POST-STREP AIN; LEGIONELLA; CMV EBV VIRAL; LEPTOSPIROSIS; HANTA VIRUS; AUTOIMMUNE/SYSTEMIC 10 pct (SARCOIDOSIS GRANULOMATOUS TYPICALLY; LUPUS SLE; SJOGREN SYNDROME; IgG4-RELATED DISEASE PLASMA CELL-RICH FIBROSIS; TINU SYNDROME: TUBULOINTERSTITIAL NEPHRITIS UVEITIS; YOUNG WOMEN; PRESENTS SIMULTANEOUSLY Or UVEITIS MONTHS LATER; CLINICAL PRESENTATION (CLASSIC TRIAD ONLY 10 pct: FEVER RASH EOSINOPHILIA; DRUG AIN: SUBACUTE ONSET WEEKS AFTER EXPOSURE ESPECIALLY PPIs; ACUTE ONSET DAYS PENICILLIN CEPHALOSPORINS; FEVER 30-50 pct; RASH 15-20 pct; FLANK PAIN RARE; URINALYSIS (PYURIA WBC CASTS PATHOGNOMONIC IF PRESENT; HEMATURIA MICROSCOPIC COMMON; PROTEINURIA USUALLY UNDER 2g MILD-MODERATE; EOSINOPHILURIA HANSEL STAIN: LOW SENSITIVITY 40 pct But Specific; NOT REQUIRED FOR DIAGNOSIS; BLOOD: EOSINOPHILIA 20 pct PERIPHERAL; ELEVATED CREATININE ACUTE RISE; ELECTROLYTES FANCONI PARTIAL DISTAL RTA TYPES) | `text` |  |  |  |
| Acute Interstitial Nephritis AIN — Diagnosis and Management | Etiology and Diagnosis | `ain_f2` | Biopsy Indication and Treatment | `select` |  |  |  |

### Kidney Stones — `kidney_stones_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Kidney Stone Management | Stone Episode Details | `stone_location` | Stone Location | `select` |  |  |  |
| Kidney Stone Management | Stone Episode Details | `stone_size_mm` | Stone Size (mm) | `number` |  |  |  |
| Kidney Stone Management | Stone Episode Details | `hounsfield` | Hounsfield Units (if CT done) | `number` |  |  |  |
| Kidney Stone Management | Stone Episode Details | `obstruction_present` | Obstruction/hydronephrosis present | `checkbox` |  |  |  |
| Kidney Stone Management | Stone Episode Details | `infection_signs` | Signs of infection (fever, leukocytosis) | `checkbox` |  |  |  |
| Kidney Stone Management | Stone Composition (if analyzed) | `stone_type` | Stone Type | `select` |  |  |  |
| Kidney Stone Management | Stone Composition (if analyzed) | `hypercalciuria` | 24-hr urine: hypercalciuria | `checkbox` |  |  |  |
| Kidney Stone Management | Stone Composition (if analyzed) | `hyperoxaluria` | 24-hr urine: hyperoxaluria | `checkbox` |  |  |  |
| Kidney Stone Management | Stone Composition (if analyzed) | `hypocitraturia` | 24-hr urine: hypocitraturia | `checkbox` |  |  |  |
| Kidney Stone Management | Stone Composition (if analyzed) | `low_urine_volume` | 24-hr urine: low volume (<2L) | `checkbox` |  |  |  |
| Kidney Stone Management | Treatment | `immediate_plan` | Immediate Management | `select` |  |  |  |
| Kidney Stone Management | Treatment | `prevention_counseling` | Dietary prevention counseling provided | `checkbox` |  |  |  |
| Kidney Stone Management | Treatment | `thiazide` | Thiazide prescribed (for hypercalciuria) | `checkbox` |  |  |  |
| Kidney Stone Management | Treatment | `potassium_citrate` | Potassium citrate prescribed | `checkbox` |  |  |  |
| Kidney Stone Management | Treatment | `allopurinol` | Allopurinol prescribed (uric acid stones) | `checkbox` |  |  |  |
| Kidney Stone Management | Treatment | `notes` | Notes | `textarea` |  |  |  |

### Kidney Transplant — `nephrology_kidney_transplant_cf`

Screen: 1 page(s) · 2 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Kidney Transplant: Immunosuppression, Rejection, and Long-Term Management | Standard Immunosuppression Protocols | `transplant_maintenance` | Maintenance Immunosuppression Regimens | `select` |  |  |  |
| Kidney Transplant: Immunosuppression, Rejection, and Long-Term Management | Standard Immunosuppression Protocols | `transplant_monitoring` | Post-Transplant Monitoring Schedule — BMP + CBC + tacrolimus trough: daily while hospitalized; Q2-3 days first week; QW month 1; Q2 weeks months 2-3; monthly thereafter; urine protein/creatinine ratio: Q6 months; DSA (donor-specific antibodies): at 1 year and with any elevation in creatinine; donor-derived cell-free DNA (dd-cfDNA; AlloSure): subclinical rejection screening Q1-3 months; surveillance biopsy: at 1 year (many centers); creatinine baseline and trajectory; lipid panel, glucose: Q6 months; CMV PCR: Q2 weeks x3 months; EBV PCR if EBV mismatch; BK polyomavirus (BKPyV): blood PCR Q1-3 months x24 months; urine decoy cells; vaccination: influenza annually; pneumococcal Q3-5 years; no live vaccines; cancer screening: skin (Q yearly + dermatology); PTLD surveillance; liver cancer in polycystic kidney/HCV recipients; cervical (HPV: accelerated annual Pap); colon per age guidelines; breast | `text` |  |  |  |
| Kidney Transplant: Immunosuppression, Rejection, and Long-Term Management | Rejection, BK Virus, and Surgical Complications | `transplant_rejection` | Rejection: TCMR and ABMR | `select` |  |  |  |
| Kidney Transplant: Immunosuppression, Rejection, and Long-Term Management | Rejection, BK Virus, and Surgical Complications | `bk_nephropathy` | BK Polyomavirus Nephropathy | `select` |  |  |  |
| Kidney Transplant: Immunosuppression, Rejection, and Long-Term Management | Rejection, BK Virus, and Surgical Complications | `transplant_surgical` | Delayed Graft Function and Vascular Complications | `select` |  |  |  |
| Kidney Transplant: Immunosuppression, Rejection, and Long-Term Management | Rejection, BK Virus, and Surgical Complications | `transplant_longterm` | Long-Term Management — CNI nephrotoxicity vs rejection balance: reduce CNI when eGFR declining without rejection on biopsy (consider belatacept conversion); chronic allograft injury (IFTA: interstitial fibrosis + tubular atrophy): RAAS blockade + BP target below 130/80; proteinuria control (ACEI/ARB); statin for cardiovascular risk (all transplant recipients); avoid NSAIDs; minimal contrast exposure (pre-hydrate; consider iso-osmolar contrast); skin cancer: most common cancer post-transplant; sunscreen; annual dermatology; sirolimus (mTOR inhibitor): antiproliferative + antineoplastic; may reduce skin cancer in long-term transplant; avoid early post-transplant (wound healing impairment; proteinuria); PTLD (post-transplant lymphoproliferative disease): EBV-driven; 1-3% of transplants; reduce immunosuppression; rituximab; chemotherapy for aggressive lymphoma; NODAT (new-onset DM after transplant): tacrolimus + steroid exposure; treat with metformin/SGLT2i/insulin; standard DM monitoring; transition to adult transplant care programs by 18-21 years in pediatric recipients | `text` |  |  |  |
| Kidney Transplant: Immunosuppression, Rejection, and Long-Term Management | Rejection, BK Virus, and Surgical Complications | `transplant_notes` | Transplant Management Notes and Nephrology/Transplant Surgery/Infectious Disease/Dermatology/Oncology Coordination | `textarea` |  |  |  |

### Lupus Nephritis — `nephrology_lupus_nephritis_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lupus Nephritis: ISN Classification, Renal Biopsy, and Induction/Maintenance Therapy | Lupus Nephritis Diagnosis: ISN/RPS Classification and Biomarkers | `ln_class` | Lupus Nephritis ISN/RPS Classification 2003/2018: Class I Minimal Mesangial; Class II Mesangial Proliferative; Class III Focal Proliferative Below 50% Glomeruli Active A Chronic C; Class IV Diffuse Proliferative Above 50% Glomeruli: IVS Segmental; IVG Global Most Severe; Class V Membranous Pure or Combined III/IV; Class VI Advanced Sclerosis; Indications for Biopsy: New Proteinuria Above 0.5g/g Cr; Active Urine Sediment RBC Casts; Renal Insufficiency Unexplained; Reassess Lupus Nephritis Activity; Biomarkers: Anti-dsDNA Rising Titer Correlates Activity; C3 C4 Low Complement Consumption; Creatinine GFR Trend; Urine Protein Creatinine Ratio PCR; 24H Urine Protein; Urine Sediment RBC WBC Casts; CBC Hemolytic Anemia Thrombocytopenia; anti-CL antiphospholipid; Renal Goals: Complete Renal Response CRR Proteinuria Below 0.5 SCr Normal; Partial PRR Proteinuria 50% Reduction SCr Near-Normal; SLEDAI-2K Activity Score; Renal Flare Doubling Proteinuria or Creatinine; Lupus Nephritis Screening: All New SLE Every 3-6 Months UA PCR anti-dsDNA C3 C4; Hydroxychloroquine All SLE Baseline | `select` |  |  |  |
| Lupus Nephritis: ISN Classification, Renal Biopsy, and Induction/Maintenance Therapy | Lupus Nephritis Diagnosis: ISN/RPS Classification and Biomarkers | `ln_monitoring` | Lupus Nephritis Monitoring and Prognosis | `text` |  |  |  |
| Lupus Nephritis: ISN Classification, Renal Biopsy, and Induction/Maintenance Therapy | Lupus Nephritis Treatment: Induction and Maintenance by Class | `ln_treatment` | Lupus Nephritis Treatment ACR EULAR 2019 2023 Guidelines: Class I-II: Hydroxychloroquine Plus Prednisone If Active; Class III-IV Induction: Standard MMF Mycophenolate Mofetil 2-3g/day Plus Prednisone 0.5-1mg/kg/day Taper; Alternative: NIH Cyclophosphamide IV 0.5-1g/m2 Monthly x6 Pulse or Euro LMMC Low-Dose 500mg Q2W x6; Belimumab 200mg SQ QW or 10mg/kg IV Q4W Added to Standard Therapy: BLISS-LN NEJM 2020 Primary Renal Response 43% vs 32%; FDA 2021 Add-On; Voclosporin Lupkynis 23.7mg BID Calcineurin CNI Added Standard MMF Prednisone: AURORA 1 CRR 40.8% vs 22.5% FDA 2021 Add-On; Triple Therapy MMF+Belimumab or MMF+Voclosporin+HCQ Most Effective; Class V Membranous: MMF + HCQ; CNI Tacrolimus Alternative; Class IV+V: High-Dose MMF + Prednisone; Add Belimumab or Voclosporin; Maintenance: MMF 1-2g/day x3+ Years; Azathioprine Pregnancy Planning Alternative; Withdraw Steroids Over 6-12 Months; Remission Switch HCQ Maintenance Long-Term; Obinutuzumab Anti-CD20 Phase 3 NOBILITY: CRR 35% vs 23% 2Y Superior Rituximab-Like; Rituximab Rescue Refractory Refractory LN; ESRD Dialysis Transplant; Steroids: Minimize Long-Term; Avoid Prolonged High Dose; Pulse Solumedrol Severe Active | `select` |  |  |  |
| Lupus Nephritis: ISN Classification, Renal Biopsy, and Induction/Maintenance Therapy | Lupus Nephritis Treatment: Induction and Maintenance by Class | `ln_notes_detail` | Lupus Nephritis Management Plan and Notes: ISN Class on Biopsy, Chronicity Index, Creatinine and GFR Trend, Proteinuria PCR Trend, anti-dsDNA C3 C4 Trend, Induction Regimen MMF CYC, Add-On Belimumab Voclosporin, HCQ Dose and Duration, Maintenance Plan, Pregnancy Plan AZA Switch, APL Antibody Status, Antiphospholipid Anticoagulation, CVD Risk, Coordination Notes | `textarea` |  |  |  |
| Lupus Nephritis: ISN Classification, Renal Biopsy, and Induction/Maintenance Therapy | Lupus Nephritis Management Notes | `ln_mgmt_notes` | Lupus Nephritis Management Notes and Nephrology/Rheumatology SLE/Pharmacy MMF Belimumab Voclosporin TDM/Ophthalmology HCQ Macular Annual/OB-GYN High-Risk Pregnancy/Infectious Disease Pneumocystis Screen/Bone Health Osteoporosis Calcium Vitamin D/Cardiology CVD Risk/Dialysis Access Planning ESRD/Transplant Nephrology/Nursing Education/Social Work/Coordination Notes | `textarea` |  |  |  |

### MPGN and C3 Glomerulopathy — `nephrology_mpgn_c3g_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| MPGN, C3G, DDD — Diagnosis, Complement, and Biologic Treatment | MPGN Reclassification and Pathology | `mpgn_dx` | MPGN Pathological Classification and IF Findings (MEMBRANOPROLIFERATIVE GLOMERULONEPHRITIS (MPGN): UPDATED CLASSIFICATION (2012): based on IMMUNOFLUORESCENCE (IF); IMMUNE COMPLEX-MEDIATED MPGN: IF + for IgG + C3 + C1q (complement activation via CLASSICAL pathway); CAUSES: HCV (most common in US); SLE; cryoglobulinemia; MGUS; endocarditis; hepatitis B; COMPLEMENT-MEDIATED MPGN (C3 GLOMERULOPATHY): IF shows C3 DOMINANT (little/no Ig); ALTERNATIVE COMPLEMENT PATHWAY dysregulation; C3G SUBTYPES: C3 GLOMERULONEPHRITIS (C3GN): C3 dominant; mesangial + subendothelial deposits; DENSE DEPOSIT DISEASE (DDD): osmiophilic sausage-shaped deposits in GBM on EM; C3 nephritic factor (C3NeF): stabilizes C3 convertase; LIGHT MICROSCOPY (LM): MPGN PATTERN: lobular mesangial expansion; double-contour (tram-tracking) GBM; intracapillary hypercellularity; thickened GBM; ELECTRON MICROSCOPY (EM): immune deposits location: mesangial, subendothelial, subepithelial; DDD: DENSE DEPOSITS replacing GBM; CLINICAL PRESENTATION: hematuria + proteinuria + hypertension + reduced GFR + low complement; C3: depressed (alternative pathway activation); C4: NORMAL (classical pathway NOT activated) in C3G vs. low C4 in IC-MPGN; PARTIAL LIPODYSTROPHY: DDD association (Factor H deficiency + adipocyte complement activation) | `text` |  |  |  |
| MPGN, C3G, DDD — Diagnosis, Complement, and Biologic Treatment | MPGN Reclassification and Pathology | `complement_panel` | Complement Workup for C3G and Genetic Testing | `select` |  |  |  |
| MPGN, C3G, DDD — Diagnosis, Complement, and Biologic Treatment | Treatment of MPGN and C3G | `ic_mpgn_tx` | Immune Complex MPGN Treatment — HCV, SLE, Cryoglobulinemia (IMMUNE COMPLEX MPGN TREATMENT (TREAT UNDERLYING CAUSE): HCV-ASSOCIATED MPGN/CRYOGLOBULINEMIA: DIRECT-ACTING ANTIVIRALS (DAAs): glecaprevir/pibrentasvir (8-12 weeks); ledipasvir/sofosbuvir; 95%+ SVR12; RENAL RESPONSE: GFR stabilization; proteinuria reduction; CRYOGLOBULINEMIA VASCULITIS: RITUXIMAB: 375 mg/m2 x4 weekly (preferred over cyclophosphamide); SEVERE CRYOGLOBULINEMIA (rapidly progressive): plasma exchange; rituximab; steroids; SLE NEPHRITIS (class III/IV MPGN pattern): MYCOPHENOLATE MOFETIL + HYDROXYCHLOROQUINE + STEROIDS: standard; VOCLOSPORIN (Lupkynis) + MMF + BLISIBIMOD: investigational; BELIMUMAB (Benlysta): BLISS-LN trial: FDA 2021 for active lupus nephritis; BLyS inhibitor; reduces flares; ADD to standard care; SUBACUTE BACTERIAL ENDOCARDITIS (SBE): treat infection; GFR usually recovers; MGUS-ASSOCIATED: clonal control (daratumumab, bortezomib for plasma cell clone; rituximab for B-cell clone); RENIN-ANGIOTENSIN BLOCKADE: ACEi/ARB for all MPGN with proteinuria; BLOOD PRESSURE CONTROL: <130/80; FISH OIL: weak evidence; DDD + partial lipodystrophy + AMD: eculizumab; plasma infusion (Factor H replacement) | `text` |  |  |  |
| MPGN, C3G, DDD — Diagnosis, Complement, and Biologic Treatment | Treatment of MPGN and C3G | `c3g_tx` | C3 Glomerulopathy Treatment and Emerging Therapies | `select` |  |  |  |

### Membranous Nephropathy / Nephrotic — `nephrology_membranous_nephropathy_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Membranous Nephropathy and Nephrotic Syndromes | Nephrotic Syndrome and Membranous Nephropathy | `mn_f1` | Nephrotic Syndrome Definition: Protein Over 3.5 g/24h or UPCR Over 3.0-3.5 Plus Hypoalbuminemia Under 3.0 Plus Edema Plus Hyperlipidemia Plus Lipiduria (Oval Fat Bodies; Maltese Cross); VTE RISK (Especially Membranous 25-50%); Anticoagulate Albumin Under 2.5 in Membranous; CAUSES: Minimal Change Disease (MCD; Prednisone 80-90% Response; Children Most Common; Adults NSAIDs; Hodgkin); FSGS (Primary vs. Secondary Adaptive Obesity/HIV/Reflux; Steroid-Resistant); Membranous Nephropathy (Adults Most Common Primary; Anti-PLA2R 75%; THSD7A 5%; IgG4 Subclass; Secondary: Malignancy; HBV; SLE; Drugs Gold/Mercury/NSAID); Diabetic Nephropathy (Nodular Sclerosis Kimmelstiel-Wilson); Amyloidosis (Congo Red; Monoclonal Protein; SAP Scintigraphy) | `text` |  |  |  |
| Membranous Nephropathy and Nephrotic Syndromes | Nephrotic Syndrome and Membranous Nephropathy | `mn_f2` | Membranous Nephropathy Treatment: Anti-PLA2R Titer Under 15 = Remission Monitor; Over 150 = High Risk; SECONDARY MN: Treat Underlying (Malignancy Workup Age Over 60; HBV Antivirals; SLE Immunosuppression; Remove Causative Drug); PRIMARY MN: Watch if Albumin Over 3.0 and Cr Stable (Spontaneous Remission 30% at 2-3 Years); TREAT if Albumin Under 2.8 or Cr Rising or Protein Over 8 g/day; RITUXIMAB 375 mg/m2 Weekly x4 or 1g x2 (MENTOR 64% vs. 34% Remission at 24 Months vs. Cyclosporine; Superior Long-Term); Cyclosporine Historical Alternative; Ponticelli Protocol CYC + Steroids; Obinutuzumab Emerging | `select` |  |  |  |
| Membranous Nephropathy and Nephrotic Syndromes | FSGS and Minimal Change Disease | `mn_f3` | FSGS Classification and Treatment: PRIMARY FSGS: Podocytopathy; Circulating Permeability Factor; Steroid Trial 1 mg/kg/day MAX 80 mg x12-16 Weeks (CR 25-40%); CNI Cyclosporine or Tacrolimus Steroid-Resistant; SPARSENTAN (Filspari) Dual Angioiotensin-Endothelin Blocker FDA 2023 (DUPLEX Trial 45% Proteinuria Reduction); Rituximab Steroid-Dependent FSGS; SECONDARY ADAPTIVE FSGS (Obesity; Reflux; Single Kidney; CKD Remnant Nephron): ACEi/ARB; Weight Reduction; NOT Immunosuppressive Therapy; COLUMBIA CLASSIFICATION: NOS; Tip Lesion (Best Prognosis); Perihilar (Secondary); Cellular; Collapsing (HIV-Associated; HIVAN; Worst; ART Mandatory); HIVAN: ART Treatment Improves or Resolves; ACEi; Prednisone Some Data | `text` |  |  |  |
| Membranous Nephropathy and Nephrotic Syndromes | FSGS and Minimal Change Disease | `mn_f4` | Minimal Change Disease Treatment: PREDNISONE 1 mg/kg/day MAX 80 mg Daily Until Complete Remission (UPCR Under 300); Then Taper 6 Months; RESPONSE: 80-90% Adults; Near-Universal Children; FREQUENT RELAPSE (2+ per Year) or STEROID-DEPENDENT: CYCLOPHOSPHAMIDE 2 mg/kg/day x8 Weeks (Durable Remission 70%; Alkylating Toxicity Cumulative); RITUXIMAB (NEPHIGG; Reduces Relapse Rate; Preferred Over CYC if Possible); CNI Cyclosporine or Tacrolimus Steroid-Dependent; Mycophenolate Less Effective; LEVAMISOLE Children (Reduce Relapses; Immunomodulator); SECONDARY MCD: NSAIDs Classic (Nephrotic + AIN Simultaneously); Hodgkin Lymphoma (Screen Adults; Treat Lymphoma = Resolves); Interferon; Lithium; EDEMA: Sodium Restriction; Furosemide; Albumin 20% IV Plus Furosemide If Severe Hypoalbuminemia; VTE Prophylaxis Mobilization; NEPHROTIC INFECTIONS: Encapsulated Organisms Risk; Pneumococcal Vaccine; Prophylactic Antibiotics Debated | `text` |  |  |  |

### Nephrotic Syndrome — `nephrology_nephrotic_syndrome_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Nephrotic Syndrome: Evaluation and Management | Diagnosis and Pathology | `ns_cause` | Nephrotic Syndrome Etiology | `select` |  |  |  |
| Nephrotic Syndrome: Evaluation and Management | Diagnosis and Pathology | `ns_upcr` | Urine Protein-Creatinine Ratio (UPCR g/g) — nephrotic range above 3.5 g/g; below 1.0 after treatment = partial remission; below 0.3 = complete remission | `text` |  |  |  |
| Nephrotic Syndrome: Evaluation and Management | Diagnosis and Pathology | `ns_albumin` | Serum Albumin (g/dL) — below 3.0 g/dL: significant hypoalbuminemia; below 2.0: high VTE and infection risk; edema typically below 3.0 | `text` |  |  |  |
| Nephrotic Syndrome: Evaluation and Management | Diagnosis and Pathology | `ns_biopsy` | Kidney Biopsy Findings | `select` |  |  |  |
| Nephrotic Syndrome: Evaluation and Management | Nephrotic Complications Management | `ns_edema` | Edema Management | `select` |  |  |  |
| Nephrotic Syndrome: Evaluation and Management | Nephrotic Complications Management | `ns_vte` | Venous Thromboembolism (VTE) Risk and Prophylaxis | `select` |  |  |  |
| Nephrotic Syndrome: Evaluation and Management | Nephrotic Complications Management | `ns_infection` | Infection Risk Management | `select` |  |  |  |
| Nephrotic Syndrome: Evaluation and Management | Nephrotic Complications Management | `ns_hyperlipidemia` | Hyperlipidemia Management | `select` |  |  |  |
| Nephrotic Syndrome: Evaluation and Management | Disease-Specific Immunosuppression | `ns_steroid_plan` | Corticosteroid Protocol | `select` |  |  |  |
| Nephrotic Syndrome: Evaluation and Management | Disease-Specific Immunosuppression | `ns_cni` | Calcineurin Inhibitor (CNI) Protocol | `select` |  |  |  |
| Nephrotic Syndrome: Evaluation and Management | Disease-Specific Immunosuppression | `ns_rituximab` | Rituximab Protocol | `select` |  |  |  |
| Nephrotic Syndrome: Evaluation and Management | Disease-Specific Immunosuppression | `ns_raas` | RAAS Blockade and Antiproteinuric Therapy | `select` |  |  |  |
| Nephrotic Syndrome: Evaluation and Management | Disease-Specific Immunosuppression | `ns_notes` | Nephrotic Syndrome Management Notes and Nephrology Follow-Up Plan | `textarea` |  |  |  |

### Primary GN — `nephrology_primary_gn_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Primary Glomerulonephritis: IgAN, Membranous, FSGS, ANCA, Anti-GBM | IgA Nephropathy and Membranous Nephropathy | `igan_tx` | IgA Nephropathy: PROTECT, Budesonide Tarpeyo, and Sparsentan | `select` |  |  |  |
| Primary Glomerulonephritis: IgAN, Membranous, FSGS, ANCA, Anti-GBM | IgA Nephropathy and Membranous Nephropathy | `membranous_tx` | Membranous Nephropathy: PLA2R, Rituximab MENTOR, and Cyclophosphamide — MEMBRANOUS NEPHROPATHY (MN): most common cause nephrotic syndrome adults over 50; subepithelial immune complex deposits (IgG4; PLA2R: phospholipase A2 receptor antibody: auto-antigen); PRIMARY (80%): PLA2R antibody positive (70-80% of primary MN); anti-THSD7A (thrombospondin type-1 domain-containing 7A; 2-5%); NELL1; EXT1/EXT2; NCAM1; PCDH7; SECONDARY CAUSES (20%): lupus (Class V LN); drugs (NSAIDs; gold; penicillamine; captopril); cancer (lung; colon; prostate; carcinoid: malignancy work-up in all new MN above 60 and/or PLA2R antibody NEGATIVE); hepatitis B (anti-hepatitis B viral treatment resolves MN); WORKUP: serum anti-PLA2R IgG (ELISA; positive in 70-80% primary MN; titer correlates with disease activity and treatment response; monitor to guide therapy duration); complement C3/C4 (normal in primary MN; low in lupus MN + Class V LN); biopsy (light microscopy: thickened GBM; silver stain: spikes; EM: subepithelial deposits; IF: granular IgG + C3 +/- C4d; IgG4 dominant in primary; IgG1-3 dominant in secondary); SPONTANEOUS REMISSION: 30-35% of primary MN (monitor off treatment for 6 months in low-risk patients); IMMUNOSUPPRESSIVE THERAPY INDICATIONS: persistent proteinuria above 4 g/day + above 50% of baseline x6 months; declining eGFR; severe nephrotic syndrome complications; PONTELLANO (Ponticelli) REGIMEN: alternating methylprednisolone pulse IV 1 g/day x3 days + oral prednisone 0.5 mg/kg/day x1 month + chlorambucil (or cyclophosphamide) 0.2 mg/kg/day x1 month; alternate x6 months (3 months steroids + 3 months cytotoxic); RITUXIMAB: MENTOR TRIAL (NEJM 2019): rituximab 1 g IV Q6 months x2 doses vs cyclosporine x12 months: rituximab SUPERIOR at 24 months (59% complete or partial remission vs 20%); anti-PLA2R titer decline predicts remission; DOSE: rituximab 375 mg/m2 IV QW x4 or 1 g IV x2 doses Q6 months; ANTI-PLA2R MONITORING: titer monitored Q3 months; titer declines before proteinuria improves (titer = leading indicator); if titer rises after remission: retreatment; CALCINEURIN INHIBITORS: tacrolimus (STATAK trial); cyclosporine (alternative; MENTOR comparator); rapid relapse on discontinuation; ADRENOCORTICOTROPIC HORMONE (ACTH; tetracosactide; Acthar gel): refractory cases; SPARSENTAN (DUPLICATE trial: MN ongoing) | `text` |  |  |  |
| Primary Glomerulonephritis: IgAN, Membranous, FSGS, ANCA, Anti-GBM | FSGS, ANCA Vasculitis, and Anti-GBM Disease | `fsgs_tx` | FSGS: Primary vs Secondary, Sparsentan DUPLEX, and Genetic Testing | `select` |  |  |  |
| Primary Glomerulonephritis: IgAN, Membranous, FSGS, ANCA, Anti-GBM | FSGS, ANCA Vasculitis, and Anti-GBM Disease | `anca_antigbm` | ANCA Vasculitis and Anti-GBM Goodpasture Syndrome Treatment — ANCA VASCULITIS (GPA/MPA/EGPA): GRANULOMATOSIS WITH POLYANGIITIS (GPA; Wegener): PR3-ANCA (c-ANCA); granulomatous inflammation; upper + lower airway + kidney; ear/nose/throat (ENT): nasal saddle deformity; sinus; subglottic stenosis; MICROSCOPIC POLYANGIITIS (MPA): MPO-ANCA (p-ANCA); no granuloma; kidney-predominant; pulmonary hemorrhage; EOSINOPHILIC GPA (EGPA; Churg-Strauss): eosinophilia + asthma + granuloma; MPO-ANCA in 40%; mepolizumab for eosinophilic disease; TREATMENT ANCA GN (RPGN): INDUCTION: RITUXIMAB (RAVE trial: NEJM 2010: rituximab vs cyclophosphamide for ANCA vasculitis; remission 64% vs 53% at 6 months; FDA 2011 for GPA/MPA) + HIGH-DOSE METHYLPREDNISOLONE IV 1 g/day x3 then oral prednisone taper; CYCLOPHOSPHAMIDE (IV pulse or oral) + steroids: alternative for severe/life-threatening + for EGPA; AVACOPAN (Tavneos; C5aR complement inhibitor; ADVOCATE trial NEJM 2021): avacopan 30 mg twice daily vs prednisone: SUSTAINED remission at 52 weeks superior with avacopan (65% vs 55%); FDA 2021 for ANCA GPA/MPA; reduces steroid burden; AEs: N/V; liver enzyme elevation; serious infections; MAINTENANCE (12-18 months after induction): RITUXIMAB 500 mg Q6 months (MAINRITSAN 1/2/3: superior to azathioprine for preventing relapse; FDA maintenance indication); AZATHIOPRINE (if rituximab not tolerated; CYCAZAREM); methotrexate (less severe disease; non-renal); TRIMETHOPRIM-SULFAMETHOXAZOLE: UPPER AIRWAY ONLY GPA maintenance (nasal colonization Staphylococcus aureus triggers; DS TMP-SMX daily); PLASMA EXCHANGE: PEXIVAS TRIAL (NEJM 2020): plasma exchange in severe ANCA GN (creatinine above 5.7 or dialysis-requiring): plasma exchange NO benefit for ESRD or death at 7 years; dialysis dependence: 28.4% vs 31.0%; no benefit from plasma exchange in most ANCA; RESERVED for: anti-GBM overlap; diffuse alveolar hemorrhage (DAH) life-threatening; ANTI-GBM DISEASE (Goodpasture): anti-GBM antibody (type IV collagen alpha-3 chain; NC1 domain); linear IgG on IF; glomerular + pulmonary (Goodpasture syndrome); TREATMENT: HIGH URGENCY - PLASMA EXCHANGE (daily 60 mL/kg for 14 days or until anti-GBM antibody negative; removes circulating anti-GBM antibodies); + CYCLOPHOSPHAMIDE 2 mg/kg/day + PREDNISONE 1 mg/kg/day; DO NOT wait: irreversible injury; antibody titer predicts renal recovery; ESRD AT DIAGNOSIS: dialysis-dependent at diagnosis: renal recovery unlikely; continue plasma exchange for pulmonary hemorrhage (life-threatening); TRANSPLANT: anti-GBM antibodies must be negative for 6-12 months before listing; disease rarely recurs in transplant (antibody-mediated) | `text` |  |  |  |
| Primary Glomerulonephritis: IgAN, Membranous, FSGS, ANCA, Anti-GBM | FSGS, ANCA Vasculitis, and Anti-GBM Disease | `gn_notes` | Primary GN Management Notes and Nephrology/Pathology (Renal Biopsy Reading)/Rheumatology/Pulmonology/Transplant/Genetics Coordination | `textarea` |  |  |  |

### Transplant Nephrology — `transplant_nephrology_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Transplant Nephrology Follow-up | Transplant Details | `transplant_type` | Donor Type | `select` |  |  |  |
| Transplant Nephrology Follow-up | Transplant Details | `transplant_date` | Transplant Date | `date` |  |  |  |
| Transplant Nephrology Follow-up | Transplant Details | `days_post_transplant` | Days Post-Transplant | `number` |  |  |  |
| Transplant Nephrology Follow-up | Transplant Details | `hla_mismatch` | HLA Mismatch Count | `number` |  |  |  |
| Transplant Nephrology Follow-up | Graft Function | `creatinine` | Current Creatinine (mg/dL) | `number` |  |  |  |
| Transplant Nephrology Follow-up | Graft Function | `egfr` | eGFR (mL/min/1.73m2) | `number` |  |  |  |
| Transplant Nephrology Follow-up | Graft Function | `urine_protein_creatinine` | Urine Protein/Creatinine Ratio | `number` |  |  |  |
| Transplant Nephrology Follow-up | Graft Function | `tacrolimus_level` | Tacrolimus Trough (ng/mL) | `number` |  |  |  |
| Transplant Nephrology Follow-up | Graft Function | `rejection_suspected` | Rejection suspected (rising Cr, oliguria, tenderness) | `checkbox` |  |  |  |
| Transplant Nephrology Follow-up | Graft Function | `biopsy_ordered` | Graft biopsy ordered | `checkbox` |  |  |  |
| Transplant Nephrology Follow-up | Immunosuppression | `cni` | CNI | `select` |  |  |  |
| Transplant Nephrology Follow-up | Immunosuppression | `antiproliferative` | Antiproliferative | `select` |  |  |  |
| Transplant Nephrology Follow-up | Immunosuppression | `steroid` | Corticosteroid | `select` |  |  |  |
| Transplant Nephrology Follow-up | Immunosuppression | `notes` | Assessment and Plan | `textarea` |  |  |  |

## Dermatology

### Acne Management — `dermatology_acne_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acne Vulgaris Management | Acne Severity Assessment | `severity_grade` | Severity Grade (Global Acne Assessment) | `select` |  |  |  |
| Acne Vulgaris Management | Acne Severity Assessment | `distribution` | Distribution | `select` |  |  |  |
| Acne Vulgaris Management | Acne Severity Assessment | `scarring` | Scarring present (atrophic / ice-pick / boxcar / rolling — resurfacing after active disease controlled) | `checkbox` |  |  |  |
| Acne Vulgaris Management | Acne Severity Assessment | `prior_treatment_failure` | Prior Treatments Failed (topicals, antibiotics, hormonal — duration and response) | `textarea` |  |  |  |
| Acne Vulgaris Management | Treatment Plan | `topical_retinoid` | Topical Retinoid (cornerstone — unclog pores) | `select` |  |  |  |
| Acne Vulgaris Management | Treatment Plan | `topical_antimicrobial` | Topical Antimicrobial | `select` |  |  |  |
| Acne Vulgaris Management | Treatment Plan | `oral_antibiotic` | Oral Antibiotic (limit to 3-6 months max) | `select` |  |  |  |
| Acne Vulgaris Management | Treatment Plan | `hormonal` | Hormonal Therapy (females only) | `select` |  |  |  |
| Acne Vulgaris Management | Treatment Plan | `isotretinoin` | Isotretinoin referral initiated (severe nodulocystic / scarring / treatment-resistant — iPLEDGE program enrollment required) | `checkbox` |  |  |  |

### Acne Treatment — `dermatology_acne_treatment_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acne Vulgaris Treatment | Acne Stepwise Therapy | `acne_f1` | Acne Classification: MILD (Comedones; Papules/Pustules Under 20); MODERATE (20-100 Lesions; Some Nodules); SEVERE (Over 100; Nodules/Cysts; Scarring); MILD: TOPICAL RETINOID (Adapalene 0.1% OTC or 0.3%; Tretinoin 0.025-0.1%; Apply Evening; Sun Protection; Initial Purge Warn); TOPICAL BPO (2.5-10%; Bactericidal; Reduces Resistance; Bleaches Fabrics/Linens); TOPICAL CLINDAMYCIN (Combine With BPO to Reduce Resistance; 1-2%); AZELAIC ACID 15-20% (PIH; Melasma; Rosacea); NIACINAMIDE 4-10% OTC; SALICYLIC ACID 0.5-2% Comedolytic; MODERATE: ADD ORAL TETRACYCLINE (Doxycycline 50-100 mg BID or DR 40 mg QD; Minocycline 100 mg BID; Take With Food; Photosensitivity); Limit Oral Antibiotic Duration 3-6 Months | `text` |  |  |  |
| Acne Vulgaris Treatment | Acne Stepwise Therapy | `acne_f2` | Isotretinoin and Hormonal Therapy | `select` |  |  |  |

### Acne Vulgaris — `acne_vulgaris_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acne Vulgaris Management Visit | Patient & Acne Severity | `patientId` | Patient | `typeahead` | Y |  |  |
| Acne Vulgaris Management Visit | Patient & Acne Severity | `visitDate` | Visit Date | `date` | Y |  |  |
| Acne Vulgaris Management Visit | Patient & Acne Severity | `provider` | Dermatologist / Provider | `typeahead` | Y |  |  |
| Acne Vulgaris Management Visit | Patient & Acne Severity | `acneSeverity` | Acne Severity (IGA Scale) | `select` | Y |  |  |
| Acne Vulgaris Management Visit | Patient & Acne Severity | `acneType` | Predominant Acne Lesion Type | `select` | Y |  |  |
| Acne Vulgaris Management Visit | Patient & Acne Severity | `distribution` | Distribution | `text` |  |  |  |
| Acne Vulgaris Management Visit | Contributing Factors | `factors` | Contributing Factors & History | `textarea` | Y |  |  |
| Acne Vulgaris Management Visit | Contributing Factors | `lesionCount` | Lesion Count | `text` |  |  |  |
| Acne Vulgaris Management Visit | Treatment Plan | `plan` | Assessment & Treatment Plan | `textarea` | Y |  |  |

### Acne Vulgaris — `dermatology_acne_vulgaris_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acne Vulgaris — Topical, Oral Antibiotics, Hormonal, and Isotretinoin | Acne Pathogenesis, Classification, and Grading | `acne_f1` | Acne Evaluation: PATHOGENESIS (FOUR KEY FACTORS: FOLLICULAR HYPERKERATINIZATION COMEDONE FORMATION; EXCESS SEBUM ANDROGEN DRIVEN; CUTIBACTERIUM ACNES FORMERLY PROPIONIBACTERIUM ACNES COLONIZATION; INFLAMMATION CYTOKINE CASCADE; TYPES (COMEDONAL: OPEN BLACKHEADS; CLOSED WHITEHEADS; NON-INFLAMMATORY; INFLAMMATORY: PAPULES PUSTULES NODULES CYSTS; ACNE CONGLOBATA: SEVERE NODULAR TUNNELING; ACNE FULMINANS: SEVERE SYSTEMIC FEVER JOINT PAIN; GRADING SEVERITY (MILD: COMEDONES FEW PAPULOPUSTULES NO NODULES; MODERATE: MANY PAPULOPUSTULES SOME NODULES; SEVERE: NODULOCYSTIC EXTENSIVE; SITES (FACE CHEEKS FOREHEAD; BACK; CHEST; SHOULDERS; HORMONAL PATTERNS (ADULT FEMALE: MANDIBULAR JAWLINE CHIN CYCLIC; PCOS HYPERANDROGENISM; LATE ONSET MALE DRUGS; TRIGGERS (ANDROGENIC HORMONES: PUBERTY PCOS ANABOLIC STEROIDS TESTOSTERONE; COSMETICS OCCLUSIVE POMADE ACNE; MEDICATIONS: LITHIUM CORTICOSTEROIDS PHENYTOIN IODIDES; MECHANICAL FRICTION HELMET CHIN STRAP; DAIRY HIGH GLYCEMIC DIET POSSIBLE; STRESS EXACERBATION; SCARRING (ATROPHIC ICE PICK BOXCAR ROLLING; KELOID HYPERTROPHIC POST-INFLAMMATORY HYPERPIGMENTATION; PERMANENT SKIN CHANGES; PSYCHOLOGICAL IMPACT DEPRESSION ANXIETY; NEONATAL INFANTILE ACNE: DIFFERENT ORGANISM MALASSEZIA Or HORMONAL TRANSIENT) | `text` |  |  |  |
| Acne Vulgaris — Topical, Oral Antibiotics, Hormonal, and Isotretinoin | Acne Pathogenesis, Classification, and Grading | `acne_f2` | Topical Systemic Hormonal and Isotretinoin Treatment | `select` |  |  |  |

### Acne and Rosacea — `dermatology_acne_rosacea_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acne Vulgaris and Rosacea — Treatment Ladders | Acne Vulgaris and Rosacea Management | `acne_f1` | Acne and Rosacea Evaluation: ACNE VULGARIS PATHOGENESIS (MULTIFACTORIAL: Excess Sebum Production; Follicular Hyperkeratinization; Cutibacterium Acnes Colonization; Inflammation IL-1 IL-17; HORMONAL COMPONENT Androgens Stimulate Sebocytes; CLASSIFICATION COMEDONAL Under 12Y; PAPULOPUSTULAR Inflammatory Moderate; NODULAR Large Deep Painful; CYSTIC Nodulocystic Severe Risk Scarring; ACNE CONGLOBATA Sinus Tracts Most Severe; GRADING Mild Under 20 Lesions; Moderate 20-100; Severe Over 100 Or Cystic Or Scarring; TREATMENT LADDER MILD COMEDONAL: TOPICAL RETINOID Adapalene 0.1-0.3 pct Gel Tretinoin 0.025-0.1 pct First-Line; BENZOYL PEROXIDE BPO 2.5-10 pct Keratolytic Antimicrobial; COMBINATION Adapalene BPO Fixed Dose Epiduo; AZELAIC ACID 20 pct Alternative; MODERATE PAPULOPUSTULAR: TOPICAL RETINOID Plus BPO Plus Antibiotic Gel Clindamycin; ORAL DOXYCYCLINE 100 mg QD-BID MOST COMMON; SARECYCLINE 1.5 mg/kg Narrow Spectrum; MAXIMUM 3 MONTHS ORAL ANTIBIOTICS Then Maintain BPO Resistance; SEVERE NODULAR CYSTIC: ORAL ISOTRETINOIN 0.5-1 mg/kg/D Total Dose 120-150 mg/kg; IPLEDGE PROGRAM Two Forms Contraception Fertile Women Monthly Pregnancy Test; TERATOGEN Box Warning; SE Cheilitis Dry Skin Triglycerides LFTs; SPIRONOLACTONE 50-200 mg/D Women Hormonal Anti-Androgen; HORMONAL OCP Yaz Ortho Tri-Cyclen FDA Approved Acne; INTRALESIONAL TRIAMCINOLONE 2.5 mg/mL Cystic Immediate; POST-INFLAMMATORY HYPERPIGMENTATION Azelaic Niacinamide | `text` |  |  |  |
| Acne Vulgaris and Rosacea — Treatment Ladders | Acne Vulgaris and Rosacea Management | `acne_f2` | Rosacea Subtypes and Management | `select` |  |  |  |

### Atopic Dermatitis — `dermatology_atopic_dermatitis_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Atopic Dermatitis: Severity Assessment, Barrier Repair, Biologics, and JAK Inhibitor Therapy | Atopic Dermatitis Diagnosis: Hanifin-Rajka Criteria, EASI IGA Severity, and Trigger Assessment | `ad_class` | Atopic Dermatitis Diagnosis and Severity: Hanifin-Rajka Criteria: Major 3 of 4: Pruritus; Typical Morphology and Distribution; Flexural Lichenification Adults; Facial and Extensor Infants; Chronic Relapsing Dermatitis; Personal or Family History Atopy; Minor: Many Including Xerosis Ichthyosis Keratoconus Food Intolerance IgE Elevation; UK Working Party Criteria Simpler: Pruritus Plus 3 of: Rash Flexural History; Current Flexural Rash; Dry Skin General; Personal Atopy History; Age Onset Below 2; Severity Scores: IGA Investigator Global Assessment 0-4: Clear IGA0; Almost Clear IGA1; Mild IGA2; Moderate IGA3; Severe IGA4; EASI Eczema Area and Severity Index 0-72: Area Percent 6 Regions; Severity Erythema Edema Excoriation Lichenification 0-3; Clinical Threshold: Moderate IGA3 or EASI Above 16 Most Biologic Trials; NRS Pruritus 0-10; DLQI Quality of Life; POEM Patient Oriented Eczema Measure; Morphology: Acute: Vesicular Weeping Crusted; Subacute: Papular Scaling; Chronic: Lichenification Hyperpigmentation; Distribution: Infants: Face Scalp Extensor; Children: Antecubital Popliteal Neck; Adults: Flexural Hand Eyelid Neck; Triggers: Irritants Soap Detergent Water; Allergens Dust Mite Pet Pollen; Infection S Aureus Colonization 90%; Temperature Extremes; Stress; Food IgE-Mediated Young Children Milk Egg Peanut Wheat; Filaggrin FLG Loss-of-Function Mutation Skin Barrier Genetics European; Th2 Immune Pathway IL-4 IL-13 IL-31 Key Cytokines; IgE Elevation Often Correlated Severity; Patch Testing Contact Sensitization | `select` |  |  |  |
| Atopic Dermatitis: Severity Assessment, Barrier Repair, Biologics, and JAK Inhibitor Therapy | Atopic Dermatitis Diagnosis: Hanifin-Rajka Criteria, EASI IGA Severity, and Trigger Assessment | `ad_workup` | Atopic Dermatitis Workup and Pre-Systemic Assessment | `text` |  |  |  |
| Atopic Dermatitis: Severity Assessment, Barrier Repair, Biologics, and JAK Inhibitor Therapy | AD Treatment: Emollients, Topical Steroids, Dupilumab, Tralokinumab, and JAK Inhibitors | `ad_treatment` | Atopic Dermatitis Treatment: Basic Skincare: Emollients Moisturizers Core Every Day Apply After Bath; Ceramide-Containing Moisturizers Barrier Repair; Gentle Soap-Free Cleanser; Avoid Irritants Fragrance; Wet Wrap Therapy Severe Acute; Trigger Identification Avoidance; Topical Therapy: TCS Topical Corticosteroids Mainstay Flares: Low-Potency Hydrocortisone 1-2.5% Face Thin Skin; Mid-Potency Triamcinolone 0.1%; High-Potency Clobetasol 0.05% Thick Skin Short-Term; Skin Atrophy Risk Face Folds; Topical Calcineurin Inhibitors TCI: Tacrolimus 0.03% 0.1% Pimecrolimus 1%; Face Eyelids Skin Folds; Steroid-Sparing Non-Atrophogenic; Black Box Malignancy Theoretical Outdated; Crisaborole Eucrisa PDE4 Inhibitor 2% Non-Steroidal Mild Moderate; Ruxolitinib Opzelura JAK1/2 Cream 1.5% Mild-Moderate 12+ Years Topical; Biologics Moderate-Severe: Dupilumab Dupixent IL-4 IL-13 Receptor Alpha Dual Block: 600mg Load Then 300mg Q2W Adult; 200mg or 300mg Q4W Weight-Based Pediatric; SOLO LIBERTY CHRONOS Trials; IGA 0-1 Response 36-38%; EASI-75 Composite 51%; Injection Site Reaction; Conjunctivitis 10-20% Dupilumab; Ocular Lubrication Tacrolimus Drops; Tralokinumab Adbry Anti-IL-13 300mg Q2W Load Then Q2W Q4W FDA 2021; ECZTRA1 ECZTRA2; Lebrikizumab Ebglyss IL-13 ADH-502; Q2W Then Q4W EU FDA 2023; Nemolizumab IL-31 Anti-Pruritus Emerging; JAK Inhibitors Oral Moderate-Severe: Abrocitinib Cibinqo JAK1 100-200mg QD FDA 2022; Upadacitinib Rinvoq JAK1 15-30mg QD FDA 2022; Both Faster Onset vs Dupilumab; SE Zoster Thrombocytopenia Lipids VTE CV Boxed Warning; Baricitinib JAK1/2 4mg QD EU Approved; Traditional: Cyclosporine 3-5mg/kg/day Short-Term 3-6 Months BP Renal; Phototherapy NB-UVB 3x Weekly; MTX Azathioprine Second-Line | `select` |  |  |  |
| Atopic Dermatitis: Severity Assessment, Barrier Repair, Biologics, and JAK Inhibitor Therapy | AD Treatment: Emollients, Topical Steroids, Dupilumab, Tralokinumab, and JAK Inhibitors | `ad_notes_detail` | Atopic Dermatitis Management Plan and Notes: IGA and EASI Score, BSA Affected, Pruritus NRS, DLQI, Trigger Identified Dust Mite Pet Food, S Aureus Infection Superimposed, Eczema Herpeticum History, Emollient Used Daily, TCS Potency Plan, TCI Tacrolimus Pimecrolimus Use, Crisaborole Plan, Dupilumab Tralokinumab Choice, Conjunctivitis Management, JAK Inhibitor Consideration Abrocitinib Upadacitinib, Cyclosporine Short-Course, Coordination Notes | `textarea` |  |  |  |
| Atopic Dermatitis: Severity Assessment, Barrier Repair, Biologics, and JAK Inhibitor Therapy | Atopic Dermatitis Management Notes | `ad_mgmt_notes` | Atopic Dermatitis Management Notes and Dermatology Eczema Specialist/Allergy-Immunology Patch Testing Food Allergy IgE/Ophthalmology Dupilumab Conjunctivitis Keratoconus/Pediatrics Young Child Eczema Management/Pharmacy Dupilumab REMS JAK Inhibitor Monitoring/Infectious Disease Eczema Herpeticum Recurrence Prevention/Nutrition Food Allergy Young Children/Psychology Sleep Anxiety/Nursing Patient Education Skincare Routine/Coordination Notes | `textarea` |  |  |  |

### Atopic Dermatitis — `dermatology_atopic_dermatitis_depth_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Atopic Dermatitis — Pathogenesis, Biologics, and JAK Inhibitors | AD Pathogenesis and Topical Therapy | `ad_f1` | AD Pathogenesis: FLG Filaggrin Mutation Impaired Skin Barrier, Th2/Th22 Skewing IL-4/IL-13/IL-31 Pruritogenic, Staph Aureus 90% Lesional, EASI/IGA Scoring, Atopic March AD to Rhinitis to Asthma, and Stepwise Care (FLG loss-of-function 30% European AD; transepidermal water loss; Th2: IL-4/IL-13/IL-31 pruritus; Th22 epidermal hyperplasia; Th17 more in Asian AD; IgE elevated; ATOPIC MARCH; SCORING: EASI; IGA 0-4; NRS pruritus; COMORBIDITIES: depression 50% severe AD; sleep disturbance; food allergy; STAPH AUREUS: 90% lesional; IL-13 drives colonization; superantigen; STEP 1: emollients ceramide QD-BID; soak-and-seal; STEP 2: TCS low potency face/folds; mid body; 2-4 weeks; TACHYPHYLAXIS; TCI tacrolimus 0.03% age 2-15 or 0.1% adults face/folds BLACK BOX malignancy; CRISABOROLE 2% PDE4 mild-moderate; RUXOLITINIB CREAM 1.5% JAK1/2 FDA age 12+ max 8 weeks 20% BSA) | `text` |  |  |  |
| Atopic Dermatitis — Pathogenesis, Biologics, and JAK Inhibitors | AD Pathogenesis and Topical Therapy | `ad_f2` | AD Dupilumab and IL-13 Biologics: Dupilumab Anti-IL4Ra FDA 6 Months SOLO 38% IGA 0-1 vs. 10% Placebo 300mg Q2W Conjunctivitis 10-30%; Tralokinumab Anti-IL13 ECZTRA 300mg Q2W then Q4W; Lebrikizumab ADvocate 500mg Loading then Q4W Maintenance (DUPILUMAB: anti-IL4Ralpha dual block IL-4+IL-13; FDA >=6 months; also asthma CRS-NP EoE; 300 mg Q2W 600 mg loading; SOLO 1/2: IGA 0-1 38% vs. 10%; EASI-75 52% vs. 15%; CONJUNCTIVITIS 10-30% treat topical cyclosporine; no increased infection risk; TRALOKINUMAB (Adbry): selective anti-IL13; 600 mg loading then 300 mg Q2W; Q4W if controlled 16 weeks; ECZTRA trials; less conjunctivitis vs. dupilumab; LEBRIKIZUMAB (Ebglyss): anti-IL13; ADvocate; 500 mg loading x2 weeks then 250 mg Q2W; Q4W maintenance after 16 weeks; NEMOLIZUMAB anti-IL31Ra: pruritus targeted; FDA 2024) | `text` |  |  |  |
| Atopic Dermatitis — Pathogenesis, Biologics, and JAK Inhibitors | AD Oral JAK Inhibitors and Second-Line | `ad_f3` | AD JAK1 Inhibitors Oral: Upadacitinib 15-30 mg QD FDA 12+ Years Measure Up IGA 50-62% vs. 7%; Abrocitinib 100-200 mg QD JADE IGA 43% 200 mg; Both Require Black Box Warning Serious Infections Malignancy MACE Thrombosis; Screen TB HBV; Prefer Dupilumab for Children | `select` |  |  |  |
| Atopic Dermatitis — Pathogenesis, Biologics, and JAK Inhibitors | AD Oral JAK Inhibitors and Second-Line | `ad_f4` | AD Topical Ruxolitinib and Emerging Therapies: Opzelura 1.5% Cream JAK1/2 FDA Age 12+ Mild-Moderate 8 Weeks Max 20% BSA (TRuE-AD IGA 0-1 38% vs. 25%); Tapinarof AhR Agonist Vtama 1% FDA Age 2+; Roflumilast 0.15% Zoryve Cream PDE4; and Tralokinumab Pediatric Age 6+ | `select` |  |  |  |

### Atopic Dermatitis (Adult) — `atopic_dermatitis_adult_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Atopic Dermatitis (Adult) Management Visit | Patient & Disease Severity | `patientId` | Patient | `typeahead` | Y |  |  |
| Atopic Dermatitis (Adult) Management Visit | Patient & Disease Severity | `visitDate` | Visit Date | `date` | Y |  |  |
| Atopic Dermatitis (Adult) Management Visit | Patient & Disease Severity | `provider` | Dermatologist / Allergist | `typeahead` | Y |  |  |
| Atopic Dermatitis (Adult) Management Visit | Patient & Disease Severity | `easi` | EASI Score (Eczema Area and Severity Index) | `number` | Y |  |  |
| Atopic Dermatitis (Adult) Management Visit | Patient & Disease Severity | `scorad` | SCORAD (optional) | `text` |  |  |  |
| Atopic Dermatitis (Adult) Management Visit | Patient & Disease Severity | `itch` | Itch NRS (Numeric Rating Scale, 0-10) | `number` | Y |  |  |
| Atopic Dermatitis (Adult) Management Visit | Patient & Disease Severity | `sleepLoss` | Sleep Loss NRS (nights disturbed per week) | `number` |  |  |  |
| Atopic Dermatitis (Adult) Management Visit | Examination & Triggers | `skinExam` | Skin Examination | `textarea` | Y |  |  |
| Atopic Dermatitis (Adult) Management Visit | Examination & Triggers | `allergyWorkup` | Allergy & Trigger Assessment | `textarea` | Y |  |  |
| Atopic Dermatitis (Adult) Management Visit | Treatment Plan | `plan` | Assessment & Treatment Plan | `textarea` | Y |  |  |

### Autoimmune Bullous Diseases — `dermatology_bullous_diseases_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pemphigus Vulgaris, Bullous Pemphigoid — DIF, Treatment, Biologics | Pemphigus vs. Bullous Pemphigoid | `pv` | Pemphigus Vulgaris — Pathophysiology, DIF, and Clinical (PEMPHIGUS VULGARIS (PV): AUTOIMMUNE BLISTERING DISORDER; INTRAEPIDERMAL BLISTER (suprabasal); AUTOANTIBODIES: ANTI-DSG3 (desmoglein 3); mucosal dominant; ANTI-DSG1 + DSG3: mucocutaneous; ANTI-DSG1 alone: foliaceus; PATHOPHYSIOLOGY: IgG anti-desmoglein disrupts desmosomal cell adhesion → acantholysis → suprabasal split; CLINICAL: FLACCID FRAGILE BLISTERS: easily rupture; raw erosions; ORAL MUCOSA (often first): painful erosions; dysphagia; NIKOLSKY SIGN POSITIVE: lateral pressure on normal skin → shearing of epidermis; POSITIVE in PV; also positive in TEN/SJS; ASBOE-HANSEN SIGN (BULLA SPREAD SIGN): pressure on bulla → lateral extension; DIAGNOSIS: SKIN BIOPSY FOR H&E: suprabasal intraepidermal blister + acantholysis; DIRECT IMMUNOFLUORESCENCE (DIF): IgG + C3 in INTERCELLULAR SPACE (chicken-wire/fishnet pattern) within epidermis; PATHOGNOMONIC for pemphigus; INDIRECT IMMUNOFLUORESCENCE (IIF): monkey esophagus substrate; anti-desmoglein detected; ELISA: anti-DSG1 + anti-DSG3 levels; CORRELATE WITH DISEASE ACTIVITY; MONITORING: anti-DSG ELISA correlates with activity; DSG3 for mucosal; DSG1 for cutaneous; PEMPHIGUS FOLIACEUS: only anti-DSG1; superficial blisters; no mucosa (DSG1 not expressed in mucosa); PARANEOPLASTIC PEMPHIGUS: antibodies to multiple epithelial proteins; associated with hematologic malignancies | `text` |  |  |  |
| Pemphigus Vulgaris, Bullous Pemphigoid — DIF, Treatment, Biologics | Pemphigus vs. Bullous Pemphigoid | `bp` | Bullous Pemphigoid — DIF Pattern and Treatment | `select` |  |  |  |
| Pemphigus Vulgaris, Bullous Pemphigoid — DIF, Treatment, Biologics | Pemphigus Treatment — Rituximab and Steroid-Sparing | `pv_rtx` | Rituximab as First-Line for Pemphigus and Monitoring (PEMPHIGUS TREATMENT — RITUXIMAB: RITUXIMAB (Rituxan, MabThera): anti-CD20; depletes B cells; reduces anti-DSG antibodies; RITUX 3 TRIAL: RTX + short course steroids vs. steroids alone: RTX SUPERIOR: 90% vs. 28% complete remission at 24 months; FDA 2018 for moderate-severe pemphigus vulgaris; DOSE (FDA-approved for PV): 1000 mg IV day 1 + day 15 (2-dose cycle); MAINTENANCE: 500 mg at 12 months + 18 months (+ additional if anti-DSG rising); PREDNISONE (short course): 0.5-1 mg/kg/day starting with RTX; taper over 3-6 months; CORTICOSTEROIDS ALONE (historical): 60-80 mg/day; MORBIDITY: infections; DM; osteoporosis; MONITORING POST-RTX: ANTI-DSG ELISA: trend; rising = relapse; CD19 B-cell count (recovery precedes relapse); serum immunoglobulins (hypogammaglobulinemia risk); RETREATMENT: anti-DSG rising OR clinical relapse; STEROID-SPARING ADJUVANTS (if RTX unavailable or incomplete response): AZATHIOPRINE: TPMT testing; MYCOPHENOLATE MOFETIL: 2-3 g/day; preferred; DAPSONE: IgA pemphigus; cicatricial mucous membrane pemphigoid; IFITUMUMAB (ianalumab, anti-BAFF): phase 3 trials; EFGARTIGIMOD (neonatal Fc receptor blocker; reduces IgG half-life): emerging; WOUND CARE: topical antiseptics; non-adherent dressings; ORAL CARE: topical steroids; HCQ gel; lidocaine rinses; PREVENTION INFECTION: PCP prophylaxis with high-dose steroids | `text` |  |  |  |
| Pemphigus Vulgaris, Bullous Pemphigoid — DIF, Treatment, Biologics | Pemphigus Treatment — Rituximab and Steroid-Sparing | `other_bullous` | Linear IgA, MMP, EBA, and Rare Bullous Diseases | `select` |  |  |  |

### CTCL: Mycosis Fungoides — `dermatology_ctcl_mycosis_fungoides_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| MF/SS CTCL — Staging, Diagnosis, Skin-Directed, Systemic, and AlloSCT | Mycosis Fungoides Diagnosis and ISCL/EORTC Staging | `mf_overview` | MF Clinical Stages Patch, Plaque, Tumor, Erythroderma, Skin Biopsy Epidermotropism, and Sezary Syndrome Blood Criteria (MYCOSIS FUNGOIDES (MF) AND CUTANEOUS T-CELL LYMPHOMA (CTCL): EPIDEMIOLOGY: 50% of all primary cutaneous lymphomas; 0.5-1 per 100,000 US; male:female 2:1; median age 55-60; Black>White incidence; CLINICAL STAGES: PATCH (STAGE IA/IB): thin erythematous scaly patches; sun-protected areas (bathing suit distribution); may mimic psoriasis/eczema; years to decades before diagnosis; PLAQUE (STAGE IIA): raised infiltrated plaques; more well-defined; TUMOR (STAGE IIB): nodules/tumors >=1 cm; may ulcerate; LYMPH NODE involvement; ERYTHRODERMA (STAGE III): >80% BSA involvement; confluent erythema; edema; scaling; ISCL/EORTC TNMB STAGING 2007: T (SKIN): T1 <10% BSA; T2 >=10% BSA; T3 TUMOR; T4 ERYTHRODERMA; N (NODE): N0 no involvement; N1/N2 Dermatopathic; N3 effaced; M (VISCERA): M0/M1; B (BLOOD): B0 <5% Sezary cells; B1 >5% (low burden); B2 >=1000/microL Sezary cells or CD4:CD8>=10 (HIGH BURDEN); STAGE GROUPING: IA: T1N0M0B0-1; IB: T2N0M0B0-1; IIA: T1-2 N1-2; IIB: T3 any N; IIIA: T4 N0-2 B0; IIIB: T4 N0-2 B1; IVA1: any T any N B2; IVA2: any T N3; IVB: M1; SEZARY SYNDROME: TRIAD: ERYTHRODERMA + LYMPHADENOPATHY + SEZARY CELLS in blood (>=1000/microL absolute or CD4:CD8>=10 or CD4+CD7- or CD4+CD26- >=30%); PROGNOSIS: STAGE IA median survival near normal; IIB 5 year OS 40-65%; IVA1-2 median OS 3-5 years; HISTOPATHOLOGY: EPIDERMOTROPISM: Pautrier microabscesses (diagnostic); atypical lymphocytes in epidermis; LYMPHOCYTE LINEUP at dermo-epidermal junction; IMMUNOHISTOCHEMISTRY: CD3+; CD4+; CD8- (helper T-cell phenotype); CD7- and CD26- frequent LOSS (aberrant phenotype); T-CELL RECEPTOR GENE REARRANGEMENT: clonality; PCR in skin and blood; NGS increasingly used; MOLECULAR: dominant clones matched between skin and blood in SS | `text` |  |  |  |
| MF/SS CTCL — Staging, Diagnosis, Skin-Directed, Systemic, and AlloSCT | Mycosis Fungoides Diagnosis and ISCL/EORTC Staging | `mf_workup` | MF Workup Protocol: Skin Biopsy, Flow Cytometry, PET/CT Advanced Stage, and Bone Marrow Biopsy Indications | `select` |  |  |  |
| MF/SS CTCL — Staging, Diagnosis, Skin-Directed, Systemic, and AlloSCT | CTCL Skin-Directed and Systemic Therapy | `skin_directed_therapy` | Skin-Directed Therapies: Topical Steroids, Nitrogen Mustard (Mechlorethamine Gel Valchlor), NBUVB Phototherapy, PUVA, and TSEBT (SKIN-DIRECTED THERAPIES FOR CTCL: STAGE IA-IIA (EARLY STAGE): TOPICAL CORTICOSTEROIDS: HIGH POTENCY (Class I/II); first-line for limited patch/plaque; response 60-90%; maintenance; TOPICAL MECHLORETHAMINE (NITROGEN MUSTARD): VALCHLOR (topical gel 0.016%): FDA 2013; once daily application; avoids systemic exposure; RESPONSE RATE 60% (IB: 47%); SKIN IRRITATION; contact sensitization; TOPICAL CARMUSTINE (BCNU): alternative; less available; TOPICAL BEXAROTENE (TARGRETIN GEL 1%): FDA; retinoid; TOPICAL IMIQUIMOD: immune modulator; small studies; TOPICAL RESIQUIMOD: TLR7/8 agonist; early stage; NARROWBAND UVB (NBUVB) PHOTOTHERAPY: 3x/week; PATCHES AND THIN PLAQUES; excellent tolerability; LIMITATION: does not penetrate thick plaques; MINIMAL TUMOR/FOLLICULOTROPIC benefit; PSORALEN + UVA (PUVA): more penetrating; THICK PLAQUES; response 80-90%; 3x/week; EXTRACORPOREAL PHOTOPHERESIS (ECP): ERYTHRODERMA + BLOOD INVOLVEMENT; SS standard of care; lymphocytes exposed to UVA + 8-MOP; immunomodulatory; usually combined with other therapies; TOTAL SKIN ELECTRON BEAM THERAPY (TSEBT): stage IB-IIB; TUMOR STAGE; folliculotropic MF; 12-36 Gy to ENTIRE SKIN SURFACE; LOW DOSE TSEBT (12 Gy): reduced side effects; RESPONSE RATE 80-90%; TEMPORARY HAIR LOSS; nail loss; RADIATION: localized; palliative for individual tumors; excellent local control; STAGE IIB (TUMOR STAGE): SKIN-DIRECTED LESS EFFECTIVE; consider systemic OR combination; MULTIAGENT CHEMOTHERAPY generally NOT first-line (short response duration; no OS benefit) | `text` |  |  |  |
| MF/SS CTCL — Staging, Diagnosis, Skin-Directed, Systemic, and AlloSCT | CTCL Skin-Directed and Systemic Therapy | `systemic_therapy` | Systemic Therapies: Mogamulizumab MAVORIC Trial, Brentuximab Vedotin ALCANZA Trial, Romidepsin, Vorinostat, and Allogeneic SCT Advanced CTCL | `select` |  |  |  |

### Hidradenitis Suppurativa — `dermatology_hidradenitis_suppurativa_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hidradenitis Suppurativa: Staging, Comorbidities, Medical Management, and Surgical Intervention | HS Diagnosis, Hurley Staging, and Comorbidity Assessment | `hs_class` | HS Diagnosis: Clinical Recurrent Painful Inflamed Nodules Abscesses Sinus Tracts Scarring; Locations: Axillae Inguinal Anogenital Inframammary Perineal; Hurley Stage I: Abscess No Sinus Tract No Scarring; Hurley II: Recurrent Abscesses Sinus Tracts Scars Widely Separated; Hurley III: Multiple Interconnected Sinus Tracts Abscesses Throughout Area; IHS4 International HS Severity Score; DLQI Dermatology Life Quality Index; Prevalence 1% Female 3:1 Male; Onset Puberty Early Adulthood; Follicular Occlusion; Comorbidities: Metabolic Syndrome Obesity DM Dyslipidemia; IBD Crohn; Acne; SAPHO; Pyoderma Gangrenosum; Major Depressive Disorder Anxiety; Pain Chronic Opioid Risk; Smoking Cessation Weight Loss | `select` |  |  |  |
| Hidradenitis Suppurativa: Staging, Comorbidities, Medical Management, and Surgical Intervention | HS Diagnosis, Hurley Staging, and Comorbidity Assessment | `hs_treatment` | HS Treatment: Weight Loss Smoking Cessation Lifestyle Modification; Topical Clindamycin 1% BID Hurley I; Antiseptic Zinc Pyrithione Benzoyl Peroxide Wash; Systemic Antibiotics: Doxycycline 100mg BID x12W; Clindamycin 300mg BID+Rifampin 300mg BID x10-12W Most Effective Combination; Resorcinol 15% Peeling; Intralesional Triamcinolone 10-40mg/mL Acute Flare; Biologics: Adalimumab Humira 160mg W0 80mg W2 40mg QW PIONEER I FDA 2015 PIONEER II 58.9% HiSCR50; Bimekizumab 320mg Q4W BE HEARD I II NEJM 2023 48% HiSCR50+; Secukinumab 300mg QW then Q4W SUNSHINE SUNRISE 2023; Hormonal Women: Spironolactone 100-200mg; OCP Combined Low-Androgen; Surgical: Incision Drainage Temporary No Curative; Deroofing; Wide Excision Hurley III; Laser CO2; Nd:YAG Hair Removal; Pain: Lidocaine Block -- HS MANAGEMENT: GENERAL MEASURES [ALL PATIENTS]: WEIGHT LOSS [GREATEST MODIFIABLE RISK FACTOR; 10% BODY WEIGHT REDUCTION IMPROVES HS; BARIATRIC SURGERY CASE SERIES; GLP-1 RA SEMAGLUTIDE EMERGING]; SMOKING CESSATION [IMPROVES DISEASE ACTIVITY; VARENICLINE BUPROPION NRT]; MECHANICAL AVOIDANCE [TIGHT CLOTHING; CHAFING; ANTIPERSPIRANT DEODORANT]; ANTIBACTERIAL WASH [CHLORHEXIDINE 4% BENZOYL PEROXIDE WASH; ZINC PYRITHIONE; DAILY]; PAIN MANAGEMENT [CHRONIC PAIN COMMON; NSAIDs; ACETAMINOPHEN; GABAPENTIN; AVOID LONG-TERM OPIOIDS]; TOPICAL THERAPY [HURLEY I; MILD DISEASE]: TOPICAL CLINDAMYCIN 1% SOLUTION BID [MODEST BENEFIT; NOT LONG-TERM RESISTANCE]; RESORCINOL 15% KERATOLYTIC [APPLIED ACTIVE LESIONS; PEELING AGENT; EUROPE MOST DATA]; TOPICAL DAPSONE [OFF-LABEL]; SYSTEMIC ANTIBIOTICS: DOXYCYCLINE [100-200 mg BID; 12 WEEKS; ANTI-INFLAMMATORY NOT JUST ANTIMICROBIAL; MODERATE EFFICACY; TOLERABILITY GOOD]; CLINDAMYCIN 300 mg BID + RIFAMPIN 300 mg BID [MOST EFFECTIVE COMBINATION; 10-12 WEEKS; 80% RESPONSE; RESISTANCE DEVELOPS]; TETRACYCLINE 500 mg BID [ALTERNATIVE]; ADJUNCTIVE ZINC GLUCONATE [90 mg/DAY; MODEST BENEFIT]; INTRALESIONAL CORTICOSTEROIDS [TRIAMCINOLONE 5-10 mg/mL; ACUTE FLARES; SINGLE INJECTION INTO NODULE; RAPID DEFLATION; NOT LONG-TERM]; BIOLOGICS [HURLEY II-III; INADEQUATE ANTIBIOTIC RESPONSE]: ADALIMUMAB [HUMIRA; ANTI-TNF-ALPHA; PIONEER I+II [RANDOMIZED PLACEBO-CONTROLLED; PIONEER II 58.9% HiSCR50 vs 27.6%; FDA 2015 FIRST APPROVED HS BIOLOGIC]; 160 mg W0 + 80 mg W2 + 40 mg QW MAINTENANCE; SCREEN TB+HEPB; CONTRAINDICATED ACTIVE INFECTION]; BIMEKIZUMAB [BIMZELX; DUAL IL-17A+IL-17F INHIBITOR; BE HEARD I NEJM 2023: 48% HiSCR75; BE HEARD II: 52% HiSCR75; FDA 2024; 320 mg SQ Q4W THEN Q4W MAINTENANCE; SUPERIOR ADALIMUMAB NUMERICALLY; CANDIDA RISK]; SECUKINUMAB [COSENTYX; IL-17A INHIBITOR; 300 mg QW x5 THEN Q4W; SUNSHINE SUNRISE TRIALS 2023: BOTH ARMS SUPERIOR PLACEBO; EUROPEAN APPROVAL; FDA SUBMITTED]; HORMONAL [WOMEN WITH PREMENSTRUAL FLARES+ANDROGEN EXCESS]: SPIRONOLACTONE [100-200 mg QD; ANTI-ANDROGEN; OFF-LABEL; MODERATE EVIDENCE; POTASSIUM MONITORING]; COMBINED OCP [LOW-ANDROGEN PROGESTIN; NORGESTIMATE+EE; MODERATE EVIDENCE]; CYPROTERONE ACETATE+EE [EUROPE; STRONGEST ANTI-ANDROGEN]; SURGICAL [ADJUNCT TO BIOLOGICS; HURLEY II LOCALIZED; HURLEY III]: DEROOFING [UNROOFING SINUS TRACTS; SURGICAL PROBE+INCISE; LOWER RECURRENCE THAN I+D; LOCAL ANESTHESIA]; WIDE LOCAL EXCISION [HURLEY III; REMOVE ENTIRE AFFECTED AREA; HIGH RECURRENCE WITHOUT BIOLOGIC]; LASER [CO2 LASER ABLATION; ND:YAG HAIR REMOVAL REDUCES FLARES; COMPLEMENTARY NOT CURATIVE]; INCISION+DRAINAGE [ACUTE RELIEF ONLY; HIGH RECURRENCE; NOT CURATIVE] | `text` |  |  |  |
| Hidradenitis Suppurativa: Staging, Comorbidities, Medical Management, and Surgical Intervention | Hidradenitis Suppurativa Management Notes | `hs_mgmt_notes` | Hidradenitis Suppurativa Management Notes and Dermatology/Surgery Dermatologic Surgery/GI IBD Crohn/Endocrinology Metabolic/Psychiatry Pain/Pharmacy Biologic/Nursing Wound Care/Dietitian Weight Loss/Social Work QOL Coordination | `textarea` |  |  |  |

### Hidradenitis Suppurativa — `hidradenitis_suppurativa_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hidradenitis Suppurativa Management Visit | Patient & Severity | `patientId` | Patient | `typeahead` | Y |  |  |
| Hidradenitis Suppurativa Management Visit | Patient & Severity | `visitDate` | Visit Date | `date` | Y |  |  |
| Hidradenitis Suppurativa Management Visit | Patient & Severity | `provider` | Dermatologist | `typeahead` | Y |  |  |
| Hidradenitis Suppurativa Management Visit | Patient & Severity | `hurleyStage` | Hurley Staging | `select` | Y |  |  |
| Hidradenitis Suppurativa Management Visit | Patient & Severity | `ihs4Score` | IHS4 Score (International HS Severity Score) | `number` |  |  |  |
| Hidradenitis Suppurativa Management Visit | Patient & Severity | `affectedAreas` | Affected Anatomic Areas | `text` |  |  |  |
| Hidradenitis Suppurativa Management Visit | Skin Examination | `skinExam` | Lesion Inventory | `textarea` | Y |  |  |
| Hidradenitis Suppurativa Management Visit | Treatment Plan | `treatment` | Medical Treatment Plan | `textarea` | Y |  |  |
| Hidradenitis Suppurativa Management Visit | Treatment Plan | `lifestyle` | Lifestyle & Surgical Planning | `textarea` | Y |  |  |

### Inpatient Derm Consult — `dermatology_inpatient_consult_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Inpatient Dermatology Consult — Serious Skin Disorders | Dermatologic Presentation | `diagnosis` | Suspected Diagnosis | `select` |  |  |  |
| Inpatient Dermatology Consult — Serious Skin Disorders | Dermatologic Presentation | `body_surface_area` | BSA Involved (Rule of Nines; TBSA involved; TEN if >30%; SJS if <10%; overlap SJS-TEN 10-30%) | `number` |  |  |  |
| Inpatient Dermatology Consult — Serious Skin Disorders | Wound Care and Management | `wound_approach` | Wound Care Approach (non-adherent dressings; Mepitel or Biobrane; avoid tape adhesive; temperature regulation; nutrition support; ophthalmology consult for corneal/conjunctival involvement; oral hygiene) | `text` |  |  |  |
| Inpatient Dermatology Consult — Serious Skin Disorders | Wound Care and Management | `skin_biopsy` | Skin Biopsy Details (site selected — edge of blister with perilesional uninvolved skin; fresh tissue for direct immunofluorescence; H&E for histopathology; immunofluorescence pattern guides treatment selection) | `text` |  |  |  |

### Melanoma — `dermatology_melanoma_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Melanoma — Diagnosis, Staging, Surgical, and Systemic Therapy | Melanoma Risk Factors, Diagnosis, and Histologic Features | `mel_f1` | Melanoma Evaluation: EPIDEMIOLOGY (100000 NEW CASES US ANNUALLY; MOST LETHAL SKIN CANCER; INCIDENCE RISING; RISK FACTORS (UV RADIATION: BOTH UVA UVB; TANNING BEDS INCREASE RISK 75 pct; INTERMITTENT INTENSE BURNS MORE RISKY THAN CHRONIC; FAIR SKIN RED HAIR BLUE EYES; MULTIPLE ATYPICAL DYSPLASTIC NEVI; PERSONAL FAMILY HISTORY MELANOMA; XERODERMA PIGMENTOSUM CDKN2A MUTATION; IMMUNOSUPPRESSION; SUBTYPES (SUPERFICIAL SPREADING MOST COMMON 70 pct: RADIAL GROWTH PHASE; NODULAR MELANOMA 15-20 pct: VERTICAL GROWTH INVASIVE; LENTIGO MALIGNA MELANOMA: CHRONIC SUN-DAMAGED SKIN ELDERLY FACE; ACRAL LENTIGINOUS: PALMS SOLES NAILBEDS; MORE COMMON BLACK HISPANIC ASIAN; DESMOPLASTIC: PERINEURAL INVASION HIGH LOCAL RECURRENCE; DIAGNOSIS ABCDE CRITERIA (ASYMMETRY; BORDER IRREGULAR; COLOR VARIATION; DIAMETER OVER 6 mm; EVOLVING CHANGE; EFG ELEVATED FIRM GROWING FOR NODULAR; DERMOSCOPY (IMPROVES DIAGNOSTIC ACCURACY; ATYPICAL PIGMENT NETWORK; REGRESSION; BLUE-WHITE VEIL; IRREGULAR STREAKS DOTS GLOBULES; DIGITAL DERMOSCOPY MONITORING; BIOPSY (NARROW MARGIN EXCISIONAL PREFERRED FOR DIAGNOSIS; PUNCH BIOPSY LARGE LESIONS; NEVER SHAVE BIOPSY MELANOMA SUSPECT; INCISIONAL LARGE FACIAL LENTIGO MALIGNA; BRESLOW DEPTH: MOST IMPORTANT PROGNOSTIC FACTOR mm; CLARK LEVEL I-V DERMIS INVASION; MITOTIC RATE; ULCERATION; MICROSATELLITES; LYMPHOVASCULAR INVASION) | `text` |  |  |  |
| Melanoma — Diagnosis, Staging, Surgical, and Systemic Therapy | Melanoma Risk Factors, Diagnosis, and Histologic Features | `mel_f2` | Staging Sentinel Node and Systemic Treatment | `select` |  |  |  |

### Melanoma — `dermatology_melanoma_management_cf`

Screen: 1 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Melanoma: Staging, Surgery, and Systemic Therapy | Tumor Characteristics and Staging | `mel_breslow` | Breslow Depth (mm) — most important histopathologic prognostic factor; below 0.8 mm = T1a; 0.8-1.0 mm = T1b if ulcerated or mitosis above 1/mm2; 1.01-2.0 mm = T2; 2.01-4.0 mm = T3; above 4.0 mm = T4; deep = more lymph node metastasis risk; determines wide local excision margins | `text` |  |  |  |
| Melanoma: Staging, Surgery, and Systemic Therapy | Tumor Characteristics and Staging | `mel_tnm_stage` | AJCC 8th Edition Stage | `select` |  |  |  |
| Melanoma: Staging, Surgery, and Systemic Therapy | Tumor Characteristics and Staging | `mel_braf_status` | BRAF Mutation Status | `select` |  |  |  |
| Melanoma: Staging, Surgery, and Systemic Therapy | Tumor Characteristics and Staging | `mel_slnb` | Sentinel Lymph Node Biopsy (SLNB) Status | `select` |  |  |  |
| Melanoma: Staging, Surgery, and Systemic Therapy | Systemic Therapy and Surveillance | `mel_systemic_therapy` | Current Systemic Therapy | `select` |  |  |  |
| Melanoma: Staging, Surgery, and Systemic Therapy | Systemic Therapy and Surveillance | `mel_surveillance_schedule` | Post-Treatment Surveillance Schedule | `select` |  |  |  |
| Melanoma: Staging, Surgery, and Systemic Therapy | Systemic Therapy and Surveillance | `mel_sun_protection` | Sun Protection and Lifestyle | `select` |  |  |  |
| Melanoma: Staging, Surgery, and Systemic Therapy | Systemic Therapy and Surveillance | `mel_notes` | Melanoma Management Notes and Dermatology/Oncology/Surgery Coordination | `textarea` |  |  |  |

### Melanoma — `melanoma_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Melanoma Surveillance and Management | Pathologic Staging | `ajcc_stage` | AJCC 8th Edition Stage | `select` |  |  |  |
| Melanoma Surveillance and Management | Pathologic Staging | `breslow_thickness_mm` | Breslow Thickness (mm) | `number` |  |  |  |
| Melanoma Surveillance and Management | Pathologic Staging | `ulceration` | Ulceration present | `checkbox` |  |  |  |
| Melanoma Surveillance and Management | Pathologic Staging | `mitotic_rate` | Mitotic Rate (per mm²) | `number` |  |  |  |
| Melanoma Surveillance and Management | Pathologic Staging | `slnb_status` | Sentinel Lymph Node Biopsy Result | `select` |  |  |  |
| Melanoma Surveillance and Management | Pathologic Staging | `braf_status` | BRAF Mutation Status | `select` |  |  |  |
| Melanoma Surveillance and Management | Current Treatment | `treatment` | Treatment / Surveillance Status | `select` |  |  |  |
| Melanoma Surveillance and Management | Current Treatment | `surveillance_interval` | Surveillance Visit Interval | `select` |  |  |  |
| Melanoma Surveillance and Management | Current Treatment | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Melanoma Staging and Treatment — `dermatology_melanoma_staging_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Melanoma — ABCDE, Staging, Sentinel Node, and Systemic Therapy | Melanoma Diagnosis and Staging | `abcde` | ABCDE Criteria and Dermoscopy (A = Asymmetry (one half not matching other); B = Border irregularity; C = Color variation (multiple colors: brown, black, red, white, blue); D = Diameter >6 mm (though earlier detection may be smaller); E = Evolution (any change in size, shape, color, new symptoms: bleeding, itching); Ugly Duckling sign: lesion that looks different from others; dermoscopy (dermatoscopy): atypical pigment network, regression structures, blue-white veil, irregular vessels; reflectance confocal microscopy (RCM): non-invasive real-time histology; total body photography + serial dermoscopy for high-risk patients) | `text` |  |  |  |
| Melanoma — ABCDE, Staging, Sentinel Node, and Systemic Therapy | Melanoma Diagnosis and Staging | `ajcc_staging` | AJCC 8th Edition Melanoma Staging | `select` |  |  |  |
| Melanoma — ABCDE, Staging, Sentinel Node, and Systemic Therapy | Systemic Therapy and BRAF Testing | `braf_testing` | BRAF Mutation Testing and Targeted Therapy (BRAF V600E mutation: 50% of melanomas; V600K: 10%; V600R/D: rare; BRAF testing: next-generation sequencing (NGS) or allele-specific PCR; test ALL patients with Stage IIIC/D or Stage IV before treatment; dabrafenib (BRAF inhibitor) + trametinib (MEK inhibitor): COMBI-D/COMBI-V: PFS 11.4 months; 3-year OS 44%; encorafenib + binimetinib (COLUMBUS): PFS 14.9 months; vemurafenib + cobimetinib (coBRIM): alternative; response rates 70% for BRAF V600; median duration 11-14 months (resistance); resistance mechanisms: MAPK reactivation, NRAS mutation, MEK1/2 mutations; rechallenge after immunotherapy gap) | `text` |  |  |  |
| Melanoma — ABCDE, Staging, Sentinel Node, and Systemic Therapy | Systemic Therapy and BRAF Testing | `immunotherapy` | Checkpoint Immunotherapy for Melanoma | `select` |  |  |  |

### Melanoma Surveillance — `dermatology_melanoma_surveillance_cf`

Screen: 1 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Melanoma Surveillance and Survivorship | Melanoma Diagnosis and Pathology | `mel_visit_type` | Visit Type | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Melanoma Diagnosis and Pathology | `mel_stage` | AJCC 8th Edition Stage at Diagnosis | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Melanoma Diagnosis and Pathology | `mel_breslow` | Breslow Thickness (mm) — primary prognostic factor | `text` |  |  |  |
| Melanoma Surveillance and Survivorship | Melanoma Diagnosis and Pathology | `mel_ulceration` | Ulceration | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Melanoma Diagnosis and Pathology | `mel_mitotic_rate` | Mitotic Rate (mitoses/mm2) — above 1 associated with worse prognosis | `text` |  |  |  |
| Melanoma Surveillance and Survivorship | Melanoma Diagnosis and Pathology | `mel_braf_status` | BRAF Mutation Status | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Melanoma Diagnosis and Pathology | `mel_slnb` | Sentinel Lymph Node Biopsy (SLNB) | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Surveillance Skin and Lymph Node Examination | `mel_full_skin_exam` | Full Body Skin Examination (FBSE) | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Surveillance Skin and Lymph Node Examination | `mel_dermoscopy` | Dermoscopy Assessment | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Surveillance Skin and Lymph Node Examination | `mel_scar_exam` | Primary Excision Scar Examination | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Surveillance Skin and Lymph Node Examination | `mel_lymph_node_exam` | Regional Lymph Node Palpation | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Surveillance Skin and Lymph Node Examination | `mel_imaging` | Surveillance Imaging | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Adjuvant Treatment and Toxicity Monitoring | `mel_adjuvant_therapy` | Adjuvant Systemic Therapy | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Adjuvant Treatment and Toxicity Monitoring | `mel_irae_thyroid` | Immune-Related AE — Thyroid (most common endocrine irAE) | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Adjuvant Treatment and Toxicity Monitoring | `mel_irae_other` | Other Immune-Related AE | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Adjuvant Treatment and Toxicity Monitoring | `mel_surveillance_schedule` | Recommended Surveillance Frequency | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Adjuvant Treatment and Toxicity Monitoring | `mel_sun_protection` | Sun Protection Counseling | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Adjuvant Treatment and Toxicity Monitoring | `mel_family_screen` | Family Screening Recommendation | `select` |  |  |  |
| Melanoma Surveillance and Survivorship | Adjuvant Treatment and Toxicity Monitoring | `mel_notes` | Melanoma Surveillance Notes | `textarea` |  |  |  |

### Melanoma Surveillance — `melanoma_surveillance_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Melanoma Surveillance Visit | Patient & Stage | `patientId` | Patient | `typeahead` | Y |  |  |
| Melanoma Surveillance Visit | Patient & Stage | `visitDate` | Visit Date | `date` | Y |  |  |
| Melanoma Surveillance Visit | Patient & Stage | `provider` | Oncologist / Dermatologist | `typeahead` | Y |  |  |
| Melanoma Surveillance Visit | Patient & Stage | `melanomaStage` | AJCC Melanoma Stage at Diagnosis | `select` | Y |  |  |
| Melanoma Surveillance Visit | Patient & Stage | `mutationStatus` | Mutation Status | `select` | Y |  |  |
| Melanoma Surveillance Visit | Skin Exam & Surveillance | `skinExam` | Full-Body Skin Examination | `textarea` | Y |  |  |
| Melanoma Surveillance Visit | Skin Exam & Surveillance | `imaging` | Staging Imaging / Labs | `textarea` | Y |  |  |
| Melanoma Surveillance Visit | Adjuvant Therapy & Plan | `adjuvantTherapy` | Adjuvant Therapy Assessment | `textarea` | Y |  |  |
| Melanoma Surveillance Visit | Adjuvant Therapy & Plan | `plan` | Assessment & Plan | `textarea` | Y |  |  |

### Metastatic Melanoma — `dermatology_melanoma_metastatic_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Metastatic Melanoma — BRAF Testing, Immunotherapy, and Targeted Therapy | Melanoma Workup and Staging | `mel_f1` | Metastatic Melanoma: BRAF V600E Mutation 50%, BRAF V600K 10%, NRAS 15%, NF1 10%, Triple-Wild-Type 25%; Staging AJCC 8th Edition; M1a Skin/LN/Soft Tissue; M1b Lung; M1c Other Visceral; M1d CNS; LDH Elevated Worse Prognosis; Full Metastatic Workup CT or PET/CT Plus Brain MRI Required (MOLECULAR: BRAF V600E 50% (targetable; BRAF + MEK inhibitors); BRAF V600K 10%; NRAS: MEK inhibitor less effective; NF1: immune checkpoint preferred; WILD-TYPE: ICI standard; PD-L1: not required for ICI in melanoma; TMB: not routinely used; STAGING AJCC 8th: M1a: skin; subcutaneous; LN; M1b: lung; M1c: other visceral without CNS; M1d: CNS metastasis; LDH: elevated = worse prognosis (M1c(1) vs. M1c(0)); WORKUP: CT chest/abdomen/pelvis; PET/CT alternative; MRI BRAIN required (CNS mets in 50%); bone scan if symptomatic; PERFORMANCE STATUS: critical for treatment tolerance; PS 0-1 = full treatment; PS 2+ = reduced-intensity; UVEAL MELANOMA: different biology; no BRAF; poor ICI response; HER2 not expressed; MUCOSAL: worse prognosis; RARE DRIVER: c-KIT (acral/mucosal; imatinib)) | `text` |  |  |  |
| Metastatic Melanoma — BRAF Testing, Immunotherapy, and Targeted Therapy | Melanoma Workup and Staging | `mel_f2` | Melanoma Immune Checkpoint Therapy: Pembrolizumab Anti-PD1 KEYNOTE-006 (OS 43% 5-Year), Nivolumab Anti-PD1 CheckMate 066/067, Ipilimumab Plus Nivolumab Combination CheckMate 067 (OS 52% 5-Year 7.5 Years Follow-Up 72%), and Relatlimab Plus Nivolumab LAG3 FDA 2022 | `select` |  |  |  |
| Metastatic Melanoma — BRAF Testing, Immunotherapy, and Targeted Therapy | Melanoma Targeted Therapy and Special Situations | `mel_f3` | BRAF V600-Mutant Melanoma Targeted Therapy: Dabrafenib Plus Trametinib (COMBI-d/v 5-Year OS 34%), Vemurafenib Plus Cobimetinib, Encorafenib Plus Binimetinib COLUMBUS (5-Year OS 35%; Lowest Skin Toxicity); All BRAF+MEK Combos Superior to BRAF Alone; Resistance via NRAS/MEK2 Mutations (BRAF+MEK TARGETED: APPROVED COMBINATIONS: 1) DABRAFENIB (Tafinlar) + TRAMETINIB (Mekinist): COMBI-d/v; 5-year OS 34%; dose 150 mg BID + 2 mg QD; 2) VEMURAFENIB (Zelboraf) + COBIMETINIB (Cotellico): coBRIM; 5-year OS 31%; 3) ENCORAFENIB (Braftovi) + BINIMETINIB (Mektovi): COLUMBUS; 5-year OS 35%; 450 mg QD + 45 mg BID; LOWEST cuSCC and skin toxicity; SIDE EFFECTS: pyrexia/fever (dab+tram); arthralgias; cuSCC (less with combo); BRAF ALONE: AVOID (paradoxical activation); RESISTANCE: NRAS; MEK2; RAS-RAF bypass; TRIPLET: enco+bini+ICI (COMBI-i; TRILOGY); phase 3 negative; ICI SEQUENCING: ICI FIRST then BRAF or BRAF first then ICI after progression; no clear consensus; ICI first: long remissions possible; BRAF first: rapid response if symptomatic high-burden; COMBINATION: not standard (BRAF+ICI = hepatotoxicity risk) | `text` |  |  |  |
| Metastatic Melanoma — BRAF Testing, Immunotherapy, and Targeted Therapy | Melanoma Targeted Therapy and Special Situations | `mel_f4` | Melanoma ICI vs. BRAF Targeted Therapy Choice: High LDH/High-Burden Rapid Progression BRAF+ May Start Targeted (Fast Response), Otherwise ICI First for Potential Durable Remission, BRAF+ After ICI Progression, Adjuvant Pembrolizumab or Nivolumab Stage III-IV Resected, and Adjuvant Dabrafenib Plus Trametinib BRAF+ Stage III | `select` |  |  |  |

### Pemphigus Vulgaris — `dermatology_pemphigus_vulgaris_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pemphigus Vulgaris — Diagnosis and Treatment | PV Diagnosis and Therapy | `pv_f1` | Pemphigus Vulgaris Diagnosis: IgG Against DESMOGLEIN-3 (Mucous Membranes) and DESMOGLEIN-1 (Skin); Suprabasal Acantholysis; Flaccid Blisters; Oral Mucosal Ulcers FIRST (Often Months Before Skin); Nikolsky Sign Positive; SUBTYPES: PV Mucocutaneous (Anti-DSG3+DSG1; Oral+Skin); PV Mucosal-Dominant (Anti-DSG3 Only); PF Foliaceus (Anti-DSG1; No Oral; Superficial); PARANEOPLASTIC (PNP): Thymoma; Lymphoma; CLL; Castleman; Bronchiolitis Obliterans; Anti-Periplakin/Envoplakin; Poor Prognosis; DIF Gold Standard: IgG Intercellular Chicken-Wire Pattern; DSG ELISA Titer Correlates Activity | `text` |  |  |  |
| Pemphigus Vulgaris — Diagnosis and Treatment | PV Diagnosis and Therapy | `pv_f2` | Rituximab and Steroid-Sparing Treatment | `select` |  |  |  |

### Pemphigus and Bullous Pemphigoid — `dermatology_pemphigus_bullous_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Autoimmune Blistering — PV, BP, DH, EBA, IgA Pemphigus | Pemphigus Vulgaris and Foliaceus | `pv_overview` | Desmoglein 1 vs. 3 Autoantibodies, Mucosal vs. Mucocutaneous Disease, and Nikolsky Sign (PEMPHIGUS VULGARIS (PV): PATHOPHYSIOLOGY: IgG AUTOANTIBODIES against DESMOGLEIN 3 (DSG3; mucosal) and/or DESMOGLEIN 1 (DSG1; skin); desmoglein = desmosomal cadherins; loss of keratinocyte adhesion (ACANTHOLYSIS); INTRAEPIDERMAL blister (suprabasal split); CLINICAL TYPES: MUCOSAL DOMINANT PV: anti-DSG3 only; oral erosions + mucosal; NO skin blisters; MUCOCUTANEOUS PV: anti-DSG3 + anti-DSG1; oral erosions + flaccid skin blisters; PEMPHIGUS FOLIACEUS (PF): anti-DSG1 ONLY; NO mucosal (DSG3 compensates in mucosa); superficial blisters; crusted erosions; NO intact oral blisters; DIFFERENTIAL: PV vs. Bullous Pemphigoid (subepidermal in BP); CLINICAL FEATURES: FLACCID BLISTERS (easily rupture; thin roof); NIKOLSKY SIGN: lateral pressure on skin = extension of blister; positive in PV; also positive in Staph Scalded Skin Syndrome; ASBOE-HANSEN SIGN: pressure on blister roof = lateral extension; MOUTH: painful oral erosions; gingival erosions; dysphagia; ESOPHAGEAL INVOLVEMENT: esophageal erosions; SKIN: trunk; flexures; scalp; face; BIOPSY: HISTOLOGY: intraepidermal acantholysis; suprabasal split; DIRECT IMMUNOFLUORESCENCE (DIF): IgG + C3 in INTERCELLULAR (chicken-wire) pattern; EPIDERMIS; INDIRECT IMMUNOFLUORESCENCE (IIF): circulating autoantibodies (monkey esophagus substrate); ELISA: anti-DSG1 and anti-DSG3 levels; TITERS CORRELATE WITH DISEASE ACTIVITY; EPIDEMIOLOGY: ASHKENAZI JEWISH descent; 0.5-3.2/100,000; median age 50-60; HLA-DRB1*04:02 + DQB1*05:03 association; PARANEOPLASTIC PEMPHIGUS (PNP): associated with lymphoma; thymoma; Castleman; anti-Envoplakin; anti-Periplakin; bronchiolitis obliterans; fatal | `text` |  |  |  |
| Autoimmune Blistering — PV, BP, DH, EBA, IgA Pemphigus | Pemphigus Vulgaris and Foliaceus | `pv_treatment` | Rituximab PEMPHIX Trial, Prednisone Dosing, Azathioprine/MMF Steroid-Sparing, and Remission Monitoring | `select` |  |  |  |
| Autoimmune Blistering — PV, BP, DH, EBA, IgA Pemphigus | Bullous Pemphigoid and Dermatitis Herpetiformis | `bp_overview` | BP180/BP230 Autoantibodies, BPAG1/BPAG2, Elderly Population, and BP Disease Activity Index (BULLOUS PEMPHIGOID (BP): PATHOPHYSIOLOGY: IgG (+ IgE) autoantibodies against HEMIDESMOSOMAL proteins; BP180 (BPAG2; COL17A1): collagen XVII; transmembrane; NC16A domain TARGET; BP230 (BPAG1): intracellular; SUBEPIDERMAL blister (dermoepidermal junction split); EOSINOPHIL RECRUITMENT; IgE ANTI-BP180: correlates with severity; urticarial/eczematous precursor; CLINICAL FEATURES: PRURITIC URTICARIAL PLAQUES (precede blisters by weeks-months; pre-bullous phase); TENSE BLISTERS: thick-walled; do not rupture easily; NIKOLSKY NEGATIVE; DISTRIBUTION: trunk; flexures (axillae; groin; inner thighs); MINIMAL ORAL INVOLVEMENT (unlike PV); ELDERLY POPULATION: median age 75-80 years; increasing incidence; NEUROLOGICAL ASSOCIATIONS: dementia; Parkinson; CVA; stroke (BP180 expressed in brain); DRUGS: dipeptidyl peptidase 4 (DPP4) INHIBITORS (gliptins: vildagliptin > sitagliptin): most common drug-induced BP; FUROSEMIDE; penicillamine; checkpoint inhibitors; ANTI-DIABETIC: DPP4i-induced BP often milder; non-inflammatory; mucous membrane; BIOPSY: HISTOLOGY: subepidermal blister; eosinophilic infiltrate; LINEAR IgG + C3 at DEJ (DIF); INDIRECT IIF: roof of NaCl-split skin; ELISA: NC16A domain of BP180; BP DISEASE AREA INDEX (BPDAI): validated; number + size of blisters; itch; mucous membranes; IKEDA CRITERIA: mild (5-10 new blisters/day); PEMPHIGOID VARIANTS: LINEAR IgA BULLOUS DERMATOSIS: IgA; drug (vancomycin); mucous membrane; OCP (ocular cicatricial pemphigoid); MMP (mucous membrane pemphigoid) | `text` |  |  |  |
| Autoimmune Blistering — PV, BP, DH, EBA, IgA Pemphigus | Bullous Pemphigoid and Dermatitis Herpetiformis | `bp_dh_tx` | Dupilumab for BP, Dapsone for DH, and Gluten-Free Diet in Dermatitis Herpetiformis | `select` |  |  |  |

### Psoriasis — `dermatology_psoriasis_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Plaque Psoriasis: PASI BSA Assessment, Biologics IL-17 IL-23 TNF, Phototherapy, and Psoriatic Arthritis Screening | Psoriasis Diagnosis: Clinical Morphology, PASI BSA Severity, Variants, and Psoriatic Arthritis Screening | `pso_class` | Psoriasis Classification: Plaque Psoriasis Most Common 90%: Well-Demarcated Erythematous Plaques Silvery Scale; Auspitz Sign; Koebner Phenomenon; Chronic Relapsing; Variants: Guttate Teardrop Lesions Post-Streptococcal Children; Pustular Localized Palmoplantar von Zumbusch Generalized; Erythrodermic Widespread Skin Barrier Failure Hospitalize; Inverse Flexural No Scale; Scalp Psoriasis Common; Nail Psoriasis Pitting Onycholysis Oil Drop; Plaque Morphology: PASI Psoriasis Area Severity Index 0-72: Erythema Induration Desquamation 0-4 Each; Area 4 Body Regions Head Trunk Arms Legs; Mild PASI Below 5 BSA Below 3; Moderate PASI 5-10 BSA 3-10; Severe PASI Above 10 BSA Above 10; IGA Investigator Global Assessment; DLQI Quality of Life; Biologic Eligibility Conventional Failure or Severe or Impaired Quality of Life; Psoriatic Arthritis PsA: Affects 20-30% Psoriasis; CASPAR Criteria; Peripheral Oligoarthritis DIP Joints Enthesitis Dactylitis Spondylitis; PROMPT Trial Early PsA Biologic; Screen PEST Tool 5 Questions; Enthesitis Heel Achilles; Nail Psoriasis Strongest Predictor PsA; Comorbidities: Metabolic Syndrome; Cardiovascular Disease; Depression; Inflammatory Bowel Disease; Uveitis; Non-Alcoholic Fatty Liver; Sleep Disorders; Celiac Association; Cardiovascular Risk Elevated Independent Other Factors; Pathophysiology: Th17 IL-17A IL-17F Key Cytokines; Th1 TNF-alpha; IL-23 p19 Drives Th17; Keratinocyte Hyperproliferation; NF-kB Pathway; Genetic HLA-Cw6 Strong Association; FLG Not Associated Unlike AD; Strep Triggers Guttate; Lifestyle Alcohol Smoking Exacerbate; NSAIDs Beta-Blockers Lithium Hydroxychloroquine Antimalarials May Worsen | `select` |  |  |  |
| Plaque Psoriasis: PASI BSA Assessment, Biologics IL-17 IL-23 TNF, Phototherapy, and Psoriatic Arthritis Screening | Psoriasis Diagnosis: Clinical Morphology, PASI BSA Severity, Variants, and Psoriatic Arthritis Screening | `pso_workup` | Psoriasis Workup and Pre-Biologic Screening Assessment | `text` |  |  |  |
| Plaque Psoriasis: PASI BSA Assessment, Biologics IL-17 IL-23 TNF, Phototherapy, and Psoriatic Arthritis Screening | Psoriasis Treatment: Topical Phototherapy, Conventional Systemic, and Biologic IL-17 IL-23 TNF Therapies | `pso_treatment` | Psoriasis Treatment: Topical Mild-Moderate: TCS Corticosteroids Mainstay; Clobetasol 0.05% Betamethasone 0.05% High Potency Body; Hydrocortisone 2.5% Face Folds; Calcipotriene Vitamin D3 Analog Dovobet Combination; Calcitriol Vectical Safer Face Folds; Tazarotene Tazorac Retinoid Combination; Roflumilast Zoryve Cream 0.3% PDE4 FDA 2022; Tapinarof Vtama Aryl Hydrocarbon Receptor 1% Cream FDA 2022; Topical Calcineurin Inhibitors Face Folds; Salicylic Acid Keratolytic Scale; Coal Tar Old School; Phototherapy: NB-UVB 311nm 3x Weekly Excellent Safety Chronic Use; PUVA Psoralen Plus UVA More Potent Risk Melanoma; Excimer Laser 308nm Localized Patches; Conventional Systemic Moderate-Severe: Methotrexate 7.5-25mg Weekly Oral or SQ Folate 1-5mg Daily; LFT Monitoring Hepatotoxicity Fibrosis; Contraindications Renal Pregnancy Liver Disease Heavy Alcohol; Cyclosporine 2-5mg/kg/Day Maximum 1 Year Cumulative; Rapid Onset Bridge Flare; Renal BP Monitor; Acitretin Soriatane 25-50mg Daily Retinoid Teratogenic; Cannot Conceive 3 Years After Stopping; Apremilast Otezla PDE4 Oral 30mg BID; Mild-Moderate Safe No Labs; Diarrhea Nausea Dose Titration; Biologics Moderate-Severe or Psoriatic Arthritis: TNF Inhibitors: Adalimumab Humira 80mg Load 40mg Q2W; Etanercept Enbrel 50mg QW Less Effective Older; Infliximab 5mg/kg IV ZOSTER; IL-12/23 Ustekinumab Stelara 45 or 90mg Q12W; Excellent Safety IBD Benefit; IL-17A Inhibitors: Secukinumab Cosentyx 300mg Q1W x5 Then Q4W; PASI 90 75-80% of Patients; Best Nail Scalp; Avoid IBD; Ixekizumab Taltz 80mg Q2W x12W Then Q4W; IL-17A and F: Bimekizumab Bimzelx 320mg Q4W FDA 2023; Highest PASI 100 Response 60%; IL-23 p19: Guselkumab Tremfya 100mg Q4W x2 Then Q8W; Risankizumab Skyrizi 150mg Q12W Quarterly Best Adherence; Tildrakizumab Ilumya 100mg; All IL-23 Excellent Safety PASI 90 70-80% | `select` |  |  |  |
| Plaque Psoriasis: PASI BSA Assessment, Biologics IL-17 IL-23 TNF, Phototherapy, and Psoriatic Arthritis Screening | Psoriasis Treatment: Topical Phototherapy, Conventional Systemic, and Biologic IL-17 IL-23 TNF Therapies | `pso_notes_detail` | Psoriasis Management Plan and Notes: PASI Score BSA IGA DLQI Baseline, Psoriatic Arthritis Screening and Rheumatology Referral, Topical TCS Vitamin D Tapinarof Plan, Phototherapy NB-UVB Schedule, Methotrexate MTX Dose Folate LFT Monitoring, Cyclosporine Bridge Plan, Apremilast Plan, Biologic Choice IL-17 IL-23 TNF Rationale IBD PsA Considerations, Pre-Biologic Labs TB IGRA HBV HIV, Vaccine Plan Live Vaccines Before, Coordination Notes | `textarea` |  |  |  |
| Plaque Psoriasis: PASI BSA Assessment, Biologics IL-17 IL-23 TNF, Phototherapy, and Psoriatic Arthritis Screening | Psoriasis Management Notes | `pso_mgmt_notes` | Psoriasis Management Notes and Dermatology Biologics Psoriasis Specialist/Rheumatology PsA Biologic Management/Ophthalmology Uveitis PsA/Gastroenterology IBD Comorbidity/Cardiology Cardiovascular Risk/Pharmacy Biologic Prior Authorization REMS/Infectious Disease TB IGRA Hepatitis B Reactivation/Radiology Joint Imaging PsA Sacroiliitis/Pathology Biopsy Atypical/Nutrition Metabolic Syndrome/Psychology Depression Anxiety/Coordination Notes | `textarea` |  |  |  |

### Psoriasis (Advanced Biologics) — `dermatology_psoriasis_depth_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Psoriasis — PASI, IL-17/IL-23 Biologics, PsA, Methotrexate | Psoriasis Severity Assessment and Classification | `psoriasis_eval` | PASI Score, BSA, DLQI, and Psoriasis Subtypes (PSORIASIS EVALUATION: PASI (PSORIASIS AREA AND SEVERITY INDEX): gold standard for clinical trials; 4 regions (head/neck, trunk, upper/lower extremities); ERYTHEMA + INDURATION + SCALE scored 0-4 each; BSA weighted; PASI max 72; PASI 75 = 75% improvement from baseline = standard primary endpoint; PASI 90 and PASI 100 (complete clearance) = modern trial endpoints; BODY SURFACE AREA (BSA): rough estimate; 1 palm = 1%; MILD: BSA <5% or PASI <10; MODERATE: BSA 5-10% or PASI 10-20; SEVERE: BSA >10% or PASI >20; DLQI (DERMATOLOGY LIFE QUALITY INDEX): 10-item patient-reported outcome; 0-30; 0-1 = no effect; PSORIASIS SUBTYPES: PLAQUE PSORIASIS (PSORIASIS VULGARIS): most common (80-90%); well-demarcated erythematous plaques + silvery-white scale; Auspitz sign (pinpoint bleeding on scale removal); Koebner phenomenon; INVERSE PSORIASIS: flexural areas (axilla, groin, under breasts); red shiny plaques; no scale; irritated by friction; GUTTATE PSORIASIS: small drop-like plaques; sudden onset; often post-Strep infection; young; PUSTULAR PSORIASIS: GENERALIZED (von Zumbusch): sterile pustules on erythematous base; fever; systemic illness; IL-36 mutation (DITRA); spesolimab (anti-IL-36R): FDA 2022 for flares; PALMOPLANTAR PUSTULOSIS (PPP): palms + soles; hyperkeratosis + pustules; smoking association; ERYTHRODERMIC PSORIASIS: >90% BSA; medical emergency; hypothermia + infection + cardiac failure risk; SCALP PSORIASIS: common; flaking vs. seborrheic dermatitis; NAIL PSORIASIS: pitting; onycholysis; oil drop; salmon patch; subungual hyperkeratosis; ASSOCIATED WITH: PSORIATIC ARTHRITIS (PsA): 30% of psoriasis patients; metabolic syndrome; cardiovascular risk (chronic inflammation); depression; IBD; SCALP PSORIASIS TREATMENT: potent topical steroids + calcipotriol; CLOBETASOL FOAM/SOLUTION; biologic if severe | `text` |  |  |  |
| Psoriasis — PASI, IL-17/IL-23 Biologics, PsA, Methotrexate | Psoriasis Severity Assessment and Classification | `psa_overlap` | Psoriatic Arthritis CASPAR Criteria, Nail Disease Predictors, and Treatment | `select` |  |  |  |
| Psoriasis — PASI, IL-17/IL-23 Biologics, PsA, Methotrexate | Psoriasis Biologic Treatment | `biologic_choice` | IL-17 vs. IL-23 Inhibitor Clinical Comparison and Trial Data (PSORIASIS BIOLOGICS COMPARISON: TNF INHIBITORS (OLDER): ETANERCEPT: 50 mg SC BW x12 weeks, then 50 mg SC QW; lowest efficacy in head-to-head; ADALIMUMAB: 80 mg SC week 0, 40 mg week 1, then 40 mg Q2W; INFLIXIMAB: 5 mg/kg IV at 0,2,6 then Q8W; highest efficacy among TNFi for skin; ANTI-IL-12/23 (USTEKINUMAB): p40 subunit shared between IL-12 + IL-23; 45 mg SC (<=100 kg) or 90 mg SC (>100 kg) at 0, 4 weeks, then Q12W; MODERATE efficacy vs. IL-17/IL-23; ANTI-IL-17A: SECUKINUMAB (COSENTYX): 300 mg SC weekly x5 weeks, then Q4W; PASI 90 rate 59-68% at week 16; superior to etanercept + ustekinumab; IXEKIZUMAB (TALTZ): 160 mg SC week 0, 80 mg Q2W x12 weeks, then Q4W; PASI 90 rate 72-77% at week 12; BIMEKIZUMAB (BIMZELX): FDA 2023 for plaque psoriasis; dual IL-17A + IL-17F inhibitor; PASI 90 90% at week 16 (BEST-IN-CLASS skin clearance); BE READY trial; ANTI-IL-17RA: BRODALUMAB (SILIQ): 210 mg SC Q2W after induction; RISK: suicidality (REMS program); IL-17 CLASS CAUTION: INFLAMMATORY BOWEL DISEASE EXACERBATION; CANDIDA infections; not first-line if IBD comorbid; ANTI-IL-23 (p19 subunit): GUSELKUMAB (TREMFYA): 100 mg SC at 0, 4 weeks, then Q8W; VOYAGE trial: superior to adalimumab + secukinumab (vs. placebo); RISANKIZUMAB (SKYRIZI): 150 mg SC at 0, 4 weeks, then Q12W; PASI 90 rate 75-82%; favorable dosing; TILDRAKIZUMAB (ILUMYA): 100 mg SC at 0, 4 weeks, then Q12W; less data; SPESOLIMAB (SPEVIGO): anti-IL-36R; generalized pustular psoriasis flares (FDA 2022); 900 mg IV single dose; DEUCRAVACITINIB (SOTYKTU): oral TYK2 inhibitor (FDA 2022); PASI 75: 58% vs. 35% apremilast; daily oral tablet; no REMS; APREMILAST (OTEZLA): oral PDE4 inhibitor; moderate psoriasis or PsA; GASTROINTESTINAL SIDE EFFECTS; no lab monitoring; PsA + IBD + skin all-in-one | `text` |  |  |  |
| Psoriasis — PASI, IL-17/IL-23 Biologics, PsA, Methotrexate | Psoriasis Biologic Treatment | `topicals` | Topical Steroids, Calcipotriol, Roflumilast, and Tapinarof for Mild-Moderate Psoriasis | `select` |  |  |  |

### Psoriasis + PsA — `dermatology_psoriasis_psa_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Psoriasis and Psoriatic Arthritis: Assessment, Conventional, Biologic, and Small Molecule Therapy | Psoriasis Classification, Severity Scoring, and Comorbidity Screening | `pso_severity` | PASI Score 0-72 Mild Below 10 BSA Below 10% DLQI Below 10, Moderate-Severe PASI Above 10 BSA Above 10% or Facial/Genital, Psoriatic Arthritis CASPAR | `select` |  |  |  |
| Psoriasis and Psoriatic Arthritis: Assessment, Conventional, Biologic, and Small Molecule Therapy | Psoriasis Classification, Severity Scoring, and Comorbidity Screening | `pso_conventional` | Topicals Calcipotriol Clobetasol Tazarotene, Phototherapy NB-UVB, Methotrexate, Cyclosporine, Acitretin -- PSORIASIS CONVENTIONAL THERAPIES: TOPICAL THERAPY (MILD-MODERATE; FIRST-LINE): CORTICOSTEROIDS [HIGH-POTENCY: CLOBETASOL PROPIONATE 0.05% [FOAM; GEL; CREAM; OINTMENT; QD-BID x2-4 WEEKS; MAX 50g/WEEK; AVOID FACE/GROIN/SKINFOLDS; ATROPHY + TELANGIECTASIA + STRIAE WITH PROLONGED USE; REBOUND POSSIBLE]; MID-POTENCY: TRIAMCINOLONE 0.1%; LOWER: HYDROCORTISONE 1-2.5% [FACE; SKINFOLDS]; TAPE/INTRALESIONAL: KENALOG 10 mg/mL for LOCALIZED RECALCITRANT PLAQUES]; VITAMIN D ANALOGUES [CALCIPOTRIOL/CALCIPOTRIENE [Dovonex; 0.005% CREAM/OINTMENT; QD-BID; ANTI-PROLIFERATIVE + PRO-DIFFERENTIATING; NO STEROID SIDE EFFECTS; COMBINATION: CALCIPOTRIOL + BETAMETHASONE DIPROPIONATE [TACLONEX; ENSTILAR foam; ONCE DAILY; superior to either alone; FDA APPROVED; CONVENIENT]; HYPERCALCEMIA rare at high doses; MILD LOCAL IRRITATION; AVOID FACE]; CALCIPOTRIOL/BETAMETHASONE ONCE-WEEKLY [MAINTENANCE]; TAZAROTENE [RETINOID; 0.05%; 0.1% GEL/CREAM; TERATOGENIC [Category X; contraception]; IRRITATION + DRYNESS; COMBINATION WITH STEROID MITIGATES IRRITATION; EFFECTIVE for THICK PLAQUES + NAIL]; TACROLIMUS 0.1% + PIMECROLIMUS 1% [TOPICAL CALCINEURIN INHIBITORS; OFF-LABEL PSORIASIS; FACE + INTERTRIGINOUS only; FDA WARNING MALIGNANCY [very low risk; used with caution]; ROFLUMILAST CREAM 0.3% [ZORYVE; FDA 2022; PDE4 INHIBITOR; non-steroidal; INTERTRIGINOUS + MILD-MODERATE PLAQUE; WELL TOLERATED; NO ATROPHY]; TAPINAROF 1% CREAM [VTAMA; FDA 2022; ARYL HYDROCARBON RECEPTOR MODULATOR; QD APPLICATION; CLEARANCE RATES APPROACHING MODERATE BIOLOGICS; OFF-TREATMENT REMISSION UP TO 4 MONTHS; UNIQUE MECHANISM]; PHOTOTHERAPY [MODERATE-SEVERE WITHOUT BIOLOGICS; NARROW-BAND UVB [NB-UVB; 311-312 nm; FIRST-LINE PHOTOTHERAPY; 3x/week; 20-30 sessions; PASI 75 40-70%; SAFE IN PREGNANCY; NO IMMUNOSUPPRESSION; DYSPIGMENTATION; CONVENIENT; BROAD AVAILABILITY]; PUVA [PSORALEN + UVA; MORE EFFECTIVE THAN NB-UVB; HIGHER SKIN CANCER RISK; ORAL PSORALEN; PHOTOSENSITIZER; NAIL PSORIASIS RESPONDS]; EXCIMER LASER [308 nm; TARGETED; LOCALIZED PLAQUES; PALMS + SOLES; GENITALS; SCALP]; COMBINATION PHOTOTHERAPY + MTX; PHOTOTHERAPY + BIOLOGICS [DEBATED; SOME USE SHORT-COURSE]; SYSTEMIC CONVENTIONAL (MODERATE-SEVERE; BIOLOGIC-NAIVE or CONTRA-INDICATED): METHOTREXATE (MTX; 7.5-25 mg/WEEK SC or ORAL; ONCE WEEKLY [ANCHOR TREATMENT; COMPARISON ARM IN BIOLOGIC TRIALS]; FOLATE 1-5 mg/WEEK [HEPATOTOXICITY MONITORING: LFTs EVERY 8-12 WEEKS; FIBROCHECK/FIBROSCAN PREFERRED OVER BIOPSY [if cumulative dose above 3.5-4g]; METHOTREXATE POLYGLUTAMATE testing in RBC for adherence; LYMPHOMA RISK [very low; usually B-cell; EBV-associated PTLD]; TERATOGENIC [Category X; BOTH SEXES]; PULMONARY [METHOTREXATE PNEUMONITIS; RARE; NEW DRY COUGH + DYSPNEA = EVALUATE]; AVOID NSAIDS [increase MTX levels]; MYELOSUPPRESSION [CBC EVERY 4-8 WEEKS]]; CYCLOSPORINE [3-5 mg/kg/day ORAL; RAPID ONSET [weeks]; NEPHROTOXICITY [CREATININE RISE 30% = DOSE REDUCE; NOT FOR LONG-TERM ABOVE 1-2 YEARS; AVOID COMBO WITH NSAIDS]; HTN [MONITOR BP CLOSELY]; DRUG INTERACTIONS [CYP3A4]; USEFUL FOR: FLARES; ERYTHRODERMIC; GENERALIZED PUSTULAR]; ACITRETIN [RETINOID; 10-50 mg/day; TERATOGENIC [WOMEN: CONTRACEPTION DURING + 3 YEARS AFTER in US {liver stores}]; MONITOR LIPIDS + LFTs; BEST FOR: PUSTULAR; ERYTHRODERMIC; PALMOPLANTAR; COMBINATION WITH PHOTOTHERAPY; HAIR LOSS; MUCOCUTANEOUS DRYNESS]; APREMILAST [see biologics/small molecules section] | `text` |  |  |  |
| Psoriasis and Psoriatic Arthritis: Assessment, Conventional, Biologic, and Small Molecule Therapy | Psoriasis Biologics: IL-17, IL-23, IL-12/23, TNFi, and PsA Small Molecules | `pso_bio_il17_il23` | IL-17A Secukinumab ERASURE FIXTURE 300mg, Ixekizumab UNCOVER, Bimekizumab BE VIVID IL-17A/F, IL-23 Guselkumab VOYAGE Risankizumab UltIMMa Tildrakizumab RESURFACE | `select` |  |  |  |
| Psoriasis and Psoriatic Arthritis: Assessment, Conventional, Biologic, and Small Molecule Therapy | Psoriasis Biologics: IL-17, IL-23, IL-12/23, TNFi, and PsA Small Molecules | `pso_psa` | Psoriatic Arthritis: CASPAR Criteria, Domains, Upadacitinib SELECT-PsA, Ixekizumab SPIRIT-P, Secukinumab FUTURE -- PSORIATIC ARTHRITIS (PsA): CASPAR CRITERIA (FOR CLASSIFICATION; SENSITIVITY 91.4%; SPECIFICITY 98.7%): INFLAMMATORY ARTICULAR DISEASE [JOINT; SPINE; or ENTHESIS] + 3 OR MORE POINTS FROM: CURRENT PSORIASIS [2 pts]; PSORIASIS HISTORY [1 pt]; FAMILY HISTORY OF PSORIASIS [1 pt]; DACTYLITIS CURRENT [1 pt] or HISTORY [1 pt]; JUXTAARTICULAR NEW BONE FORMATION on X-ray [1 pt]; RF NEGATIVE [1 pt]; NAIL DYSTROPHY CURRENT [1 pt]; DOMAINS OF PSA [GRAPPA 2021 guidelines]: PERIPHERAL ARTHRITIS [swollen + tender joint count; SHARP-VAN DER HEIJDE modified score for radiographic progression]; AXIAL DISEASE [INFLAMMATORY BACK PAIN; SACROILIITIS on MRI or X-ray; similar to Ankylosing Spondylitis management = TNFi; IL-17; JAK; IL-23 partial]; ENTHESITIS [HEEL [Achilles/plantar fascia]; QUADRICEPS; PATELLAR TENDON; LATERAL EPICONDYLE; LEEDS ENTHESITIS INDEX; MASEI; physical exam]; DACTYLITIS [SAUSAGE DIGIT; COMPLETE DIGIT SWELLING; TENDON + JOINT INFLAMMATION]; SKIN [PASI/BSA/IGA]; NAIL [NAIL PSORIASIS SEVERITY INDEX - NAPSI]; OUTCOMES MEASURES: DAS28 [CRP-based]; DAPSA [Disease Activity in PSoriatic Arthritis; JOINT COUNT + PATIENT + CRP]; cDAPSA [without CRP; for clinical use]; MDA [MINIMAL DISEASE ACTIVITY; COMPOSITE; 5 of 7 criteria]; TREATMENT BY DOMAIN: PERIPHERAL ARTHRITIS: NSAIDs [FIRST-LINE mild]; MTX [skin + peripheral joints; less evidence for joints vs RA]; LEFLUNOMIDE [20 mg QD; skin + joints; TERATOGENIC]; PsA BIOLOGICS: IL-17i [SECUKINUMAB FUTURE 1-5; IXEKIZUMAB SPIRIT-P1/P2]; IL-23i [GUSELKUMAB DISCOVER; RISANKIZUMAB KEEPsAKE]; TNFi [ADALIMUMAB ADEPT; INFLIXIMAB IMPACT; ETANERCEPT]; IL-12/23i [USTEKINUMAB PSUMMIT]; JAK INHIBITORS for PsA: UPADACITINIB [Rinvoq; SELECT-PsA-1 NEJM 2021: upadacitinib 15mg vs adalimumab vs placebo in inadequate DMARD response: ACR20: 71% vs 65% vs 36%; PASI 75: 62.4% vs 62.2% vs 20.3%; UPADACITINIB 30 mg SELECT-PsA-1: ACR50 58%; MDA 48%; BEST IN CLASS JOINT + SKIN; FDA 2021 PsA; 15 mg QD for PsA; FDA BLACK BOX JAK: THROMBOSIS; MACE; MALIGNANCY; MORTALITY vs TNFi in RA patients above 50 with CV risk factors [ORAL SURVEILLANCE trial mofetil]; PsA-specific trial population DIFFERENT from RA ORAL SURVEILLANCE; BENEFIT-RISK FAVORABLE for PsA specialist assessment]; TOFACITINIB [OPAL BROADEN/BEYOND; 5 mg BID or 10 mg BID; FDA 2017 PsA; JAK1/3; BLACK BOX]; FILGOTINIB [EU approved PsA]; AXIAL DISEASE IN PsA: TNFi [ADALIMUMAB; CERTOLIZUMAB; GOLIMUMAB; INFLIXIMAB]; IL-17i [SECUKINUMAB; IXEKIZUMAB]; JAK [UPADACITINIB; TOFACITINIB]; IL-23i LESS EFFECTIVE FOR AXIAL [COSMOS trial risankizumab axial PsA: MODEST]; ENTHESITIS: NSAIDs; TNFi; IL-17i; JAK; ULTRASOUND GUIDANCE for tendon injection [CORTICOSTEROID]; DACTYLITIS: SAME AS PERIPHERAL ARTHRITIS; IL-17 PARTICULARLY EFFECTIVE [DACTYLITIS resolution]; MONITORING PSA: DXA [BONE MINERAL DENSITY; STEROID + INFLAMMATION]; OPHTHALMOLOGY ANNUAL [UVEITIS]; RENAL [NSAID NEPHROTOXICITY]; CARDIOVASCULAR RISK ASSESSMENT; METABOLIC SYNDROME SCREEN; DEPRESSION | `text` |  |  |  |
| Psoriasis and Psoriatic Arthritis: Assessment, Conventional, Biologic, and Small Molecule Therapy | Psoriasis Biologics: IL-17, IL-23, IL-12/23, TNFi, and PsA Small Molecules | `pso_notes` | Psoriasis/PsA Management Notes and Dermatology/Rheumatology/Ophthalmology/Gastroenterology/Cardiology/Pharmacy Coordination | `textarea` |  |  |  |

### Psoriasis / PsA Management — `psoriasis_management_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Psoriasis / Psoriatic Arthritis Visit | Patient & Disease Profile | `patientId` | Patient | `typeahead` | Y |  |  |
| Psoriasis / Psoriatic Arthritis Visit | Patient & Disease Profile | `visitDate` | Visit Date | `date` | Y |  |  |
| Psoriasis / Psoriatic Arthritis Visit | Patient & Disease Profile | `provider` | Provider (Dermatology / Rheumatology) | `typeahead` | Y |  |  |
| Psoriasis / Psoriatic Arthritis Visit | Patient & Disease Profile | `psoriasisType` | Disease Manifestations | `select` | Y |  |  |
| Psoriasis / Psoriatic Arthritis Visit | Patient & Disease Profile | `severity` | Skin Severity (BSA / PASI) | `select` | Y |  |  |
| Psoriasis / Psoriatic Arthritis Visit | Disease Activity Assessment | `bsa` | Body Surface Area Involved (%) | `number` |  |  |  |
| Psoriasis / Psoriatic Arthritis Visit | Disease Activity Assessment | `pasi` | PASI Score | `number` |  |  |  |
| Psoriasis / Psoriatic Arthritis Visit | Disease Activity Assessment | `dlqi` | DLQI (Dermatology Life Quality Index) | `number` |  |  |  |
| Psoriasis / Psoriatic Arthritis Visit | Disease Activity Assessment | `skinStatus` | Skin Exam / Current Lesions | `textarea` | Y |  |  |
| Psoriasis / Psoriatic Arthritis Visit | Disease Activity Assessment | `arthritisStatus` | Psoriatic Arthritis Status | `textarea` | Y |  |  |
| Psoriasis / Psoriatic Arthritis Visit | Treatment Plan | `currentTreatment` | Current / Prior Treatments | `textarea` | Y |  |  |
| Psoriasis / Psoriatic Arthritis Visit | Treatment Plan | `plan` | Assessment & Plan | `textarea` | Y |  |  |

### Psoriasis Biologic Selection — `dermatology_psoriasis_biologic_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Psoriasis Biologics — IL-17, IL-23, TNF, and PsA Considerations | Disease Severity and Biologic Thresholds | `pasi_assessment` | Psoriasis Severity Assessment (PASI (Psoriasis Area and Severity Index): 0-72; erythema + induration + scale x area for 4 body regions; PASI 75/90/100: benchmark for biologic efficacy; DLQI (Dermatology Life Quality Index): quality of life impact; MODERATE-SEVERE DEFINITION: PASI >=10 OR BSA >=10% OR DLQI >10 (inadequate control); SPECIAL SITES (moderate-severe even with lower BSA): scalp, face, genitalia, hands/feet, nails, intertriginous; BIOLOGIC ELIGIBILITY: moderate-severe psoriasis failing topical + >=1 conventional systemic (methotrexate, cyclosporine, acitretin, PUVA); OR contraindication to conventional; INSURANCE STEP THERAPY: typically require methotrexate failure first; SCREENINGS BEFORE BIOLOGIC: TB (IGRA preferred; PPD if unavailable); hepatitis B (sAg, sAb, cAb); HIV; CBC; CMP; complete skin exam (NMSC risk with biologic); LIVE VACCINES: contraindicated on biologics; update before starting; shingrix (recombinant; OK on biologics); flu shot annually) | `text` |  |  |  |
| Psoriasis Biologics — IL-17, IL-23, TNF, and PsA Considerations | Disease Severity and Biologic Thresholds | `biologic_selection` | Biologic Selection by Mechanism | `select` |  |  |  |
| Psoriasis Biologics — IL-17, IL-23, TNF, and PsA Considerations | Psoriatic Arthritis and Special Considerations | `psa_mgmt` | Psoriatic Arthritis Co-Management (PREVALENCE: 30% of psoriasis patients; joint screen every visit; DOMAINS: peripheral arthritis, axial disease, enthesitis, dactylitis, skin; GRAPPA 2021 RECOMMENDATIONS BY DOMAIN: PERIPHERAL JOINTS: TNF inhibitors (first-line biologic); IL-17 (secukinumab/ixekizumab: proven); IL-23 (guselkumab/risankizumab: proven); apremilast (PDE4 inhibitor: mild-moderate); AXIAL DISEASE: TNF or IL-17 (IL-23 data insufficient for axial); ENTHESITIS/DACTYLITIS: IL-17 superior; SKIN DOMINANT: IL-17 or IL-23; NAIL PSORIASIS: ixekizumab best nail data (SPIRIT trials); DRUG CHOICE WITH PsA: IL-17 (ixekizumab/secukinumab): best for joints + skin together; TNF: use if IBD co-exists; JAK INHIBITORS (tofacitinib, upadacitinib, deucravacitinib): for PsA; PDE4 (apremilast): modest efficacy both skin and joints; NON-BIOLOGIC ANCHOR: methotrexate: peripheral joints (not axial/enthesitis); limited skin benefit vs. biologics; COMBINATION BIOLOGIC + METHOTREXATE: reduces immunogenicity; benefit in PsA data (vs. RA where clearer benefit) | `text` |  |  |  |
| Psoriasis Biologics — IL-17, IL-23, TNF, and PsA Considerations | Psoriatic Arthritis and Special Considerations | `monitoring` | Biologic Monitoring and Non-Response | `select` |  |  |  |

### Psoriasis Biologics — `dermatology_psoriasis_biologics_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Moderate-Severe Psoriasis — Biologic and Targeted Therapy | Psoriasis Assessment and Threshold for Systemic Therapy | `pso_f1` | Psoriasis Severity: Moderate-Severe Defined as BSA 10%+ or PASI 10+ or DLQI 10+; PASI (Psoriasis Area Severity Index) 0-72 Scale; PASI 90 (90% Reduction From Baseline) = Benchmark for Modern Biologics; PASI 100 (Clear) = Target for IL-17 and IL-23 agents; BSA (Body Surface Area; Palm = 1%); DLQI (Dermatology Life Quality Index; 0-30); SPECIAL SITES Qualifying for Systemic: Scalp; Face; Palmoplantar; Genitalia; Intertriginous (Low BSA High Burden); PSORIATIC ARTHRITIS (PsA): Screen EVERY Visit (PEST Score; CASPAR Criteria); 30% Psoriasis Develop PsA; Joint Pain; Dactylitis; Enthesitis; Axial Disease; NAIL PSORIASIS: Pitting; Onycholysis; Oil Drop Sign; Subungual Hyperkeratosis; Difficult to Treat; Biologics Most Effective; PHOTOTHERAPY: NB-UVB or PUVA Before Biologics in Milder Disease | `text` |  |  |  |
| Moderate-Severe Psoriasis — Biologic and Targeted Therapy | Psoriasis Assessment and Threshold for Systemic Therapy | `pso_f2` | Psoriasis Biologic Selection: IL-17 Agents Fastest Clearance (Secukinumab 80-88% PASI 90; Ixekizumab 88% PASI 90; Bimekizumab 85% PASI 100); IL-23 Agents Durability (Guselkumab 73% PASI 90; Risankizumab 75% PASI 90; Tildrakizumab); Ustekinumab IL-12/23 (PASI 90 60-65%; Less Frequent Q12W); Anti-TNF Adalimumab/Infliximab; Deucravacitinib TYK2 Oral All-New Mechanism (Sotyktu; POETYK Trial) | `select` |  |  |  |
| Moderate-Severe Psoriasis — Biologic and Targeted Therapy | Biologic Monitoring and Safety | `pso_f3` | Psoriasis Biologic Pre-Treatment Screening: TB IGRA Test (Treat LTBI Before Biologic); Hepatitis B Screen (HBsAg; HBcAb; Reactivation Risk on Anti-TNF; Prophylaxis Entecavir or Tenofovir); CBC and LFTs Baseline; Pregnancy Test; Update Vaccines (Live Vaccines at Least 4 Weeks Before Biologic; Avoid Live on Biologic); Herpes Zoster Shingrix Recommended; Influenza and Pneumococcal Vaccines; HIV Screen; MONITORING: Annual TB IGRA Re-Test; Annual Flu Vaccine; No Routine Labs Needed IL-17/IL-23 Without Concerns; Anti-TNF Monitor CBC LFTs Q6 Months; CANDIDIASIS: IL-17 Agents (2-6% IL-17A; 10-15% IL-17A+F Bimekizumab Oral/Genital Candida); Fluconazole; Usually Mild; Rarely Need to Stop | `text` |  |  |  |
| Moderate-Severe Psoriasis — Biologic and Targeted Therapy | Biologic Monitoring and Safety | `pso_f4` | Psoriasis Special Considerations: PREGNANCY - Certolizumab (Cimzia; PEGylated; Minimal Placental Transfer; Preferred Biologic in Pregnancy); Avoid Biologics if Possible First Trimester; IL-17/IL-23 Data Limited; INFLAMMATORY BOWEL DISEASE - Avoid IL-17 Agents in Crohn (May Worsen); Use Anti-TNF or Ustekinumab; MULTIPLE SCLEROSIS - Avoid Anti-TNF (Demyelination Risk); Use IL-17 or IL-23; MALIGNANCY HISTORY - Avoid Anti-TNF Active Malignancy; IL-17/IL-23 No Increased Risk; COMORBID PsA - IL-17 and IL-23 Preferred (Joint and Skin Efficacy); Upadacitinib (JAK) Approved PsA (Boxed Warning MACE; VTE; Malignancy Over 50) | `text` |  |  |  |

### Psoriasis Management — `dermatology_psoriasis_management_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Psoriasis Management Visit | Disease Assessment and Severity | `pso_type` | Psoriasis Type | `select` |  |  |  |
| Psoriasis Management Visit | Disease Assessment and Severity | `pso_bsa` | Body Surface Area (BSA) Affected | `select` |  |  |  |
| Psoriasis Management Visit | Disease Assessment and Severity | `pso_pasi` | PASI Score (0-72) — Psoriasis Area and Severity Index | `text` |  |  |  |
| Psoriasis Management Visit | Disease Assessment and Severity | `pso_pga` | Physician's Global Assessment (PGA) | `select` |  |  |  |
| Psoriasis Management Visit | Disease Assessment and Severity | `pso_dlqi` | DLQI Score (Dermatology Life Quality Index, 0-30) | `number` |  |  |  |
| Psoriasis Management Visit | Disease Assessment and Severity | `pso_itch` | Pruritus (Itch) Severity | `select` |  |  |  |
| Psoriasis Management Visit | Disease Assessment and Severity | `pso_special_areas` | High-Impact Area Involvement | `select` |  |  |  |
| Psoriasis Management Visit | Psoriatic Arthritis and Comorbidities | `pso_psa_screen` | Psoriatic Arthritis (PsA) Screening | `select` |  |  |  |
| Psoriasis Management Visit | Psoriatic Arthritis and Comorbidities | `pso_metabolic` | Metabolic Comorbidities Screened | `select` |  |  |  |
| Psoriasis Management Visit | Psoriatic Arthritis and Comorbidities | `pso_depression` | Mental Health Impact Screened | `select` |  |  |  |
| Psoriasis Management Visit | Current Treatment and Plan | `pso_topical` | Topical Therapy | `select` |  |  |  |
| Psoriasis Management Visit | Current Treatment and Plan | `pso_phototherapy` | Phototherapy | `select` |  |  |  |
| Psoriasis Management Visit | Current Treatment and Plan | `pso_biologic` | Current Biologic Agent | `select` |  |  |  |
| Psoriasis Management Visit | Current Treatment and Plan | `pso_oral_systemic` | Oral Systemic Therapy | `select` |  |  |  |
| Psoriasis Management Visit | Current Treatment and Plan | `pso_treatment_response` | Treatment Response at This Visit | `select` |  |  |  |
| Psoriasis Management Visit | Current Treatment and Plan | `pso_followup` | Follow-Up Interval | `select` |  |  |  |
| Psoriasis Management Visit | Current Treatment and Plan | `pso_notes` | Psoriasis Management Notes and Patient Counseling (triggers, lifestyle modifications, sun protection) | `textarea` |  |  |  |

### Psoriasis Systemic — `dermatology_psoriasis_systemic_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Moderate-to-Severe Plaque Psoriasis: Systemic and Biologic Therapy | Disease Assessment and Severity Classification | `psoriasis_severity` | Severity Classification | `select` |  |  |  |
| Moderate-to-Severe Plaque Psoriasis: Systemic and Biologic Therapy | Disease Assessment and Severity Classification | `psoriasis_indices` | Disease Severity Scores — PASI (Psoriasis Area and Severity Index: area + erythema/induration/scale weighted; max 72; 0-5 mild, 6-10 moderate, above 10 severe); BSA (Body Surface Area percent; palm of hand = 1%); PGA (Physician Global Assessment: 0 clear to 5 severe); DLQI (Dermatology Life Quality Index: 0-30; 11-20 very large effect on QoL); IGA 0/1 (Investigator Global Assessment clear or almost clear) is the regulatory endpoint for biologics; nail psoriasis NAPSI; document all indices at each visit and on treatment initiation | `text` |  |  |  |
| Moderate-to-Severe Plaque Psoriasis: Systemic and Biologic Therapy | Disease Assessment and Severity Classification | `psoriasis_comorbidities` | Psoriasis Comorbidities and Special Considerations | `select` |  |  |  |
| Moderate-to-Severe Plaque Psoriasis: Systemic and Biologic Therapy | Disease Assessment and Severity Classification | `psoriasis_tb_screen` | Pre-Biologic Infection Screening | `select` |  |  |  |
| Moderate-to-Severe Plaque Psoriasis: Systemic and Biologic Therapy | Systemic Therapy Selection | `psoriasis_il23` | IL-23 Inhibitors (Highest Efficacy for Skin) | `select` |  |  |  |
| Moderate-to-Severe Plaque Psoriasis: Systemic and Biologic Therapy | Systemic Therapy Selection | `psoriasis_il17` | IL-17 Inhibitors (Excellent Skin + Joint Efficacy) | `select` |  |  |  |
| Moderate-to-Severe Plaque Psoriasis: Systemic and Biologic Therapy | Systemic Therapy Selection | `psoriasis_tnf` | TNF Inhibitors (Long Track Record, Lower Cost) | `select` |  |  |  |
| Moderate-to-Severe Plaque Psoriasis: Systemic and Biologic Therapy | Systemic Therapy Selection | `psoriasis_conventional` | Conventional Systemic Agents and Oral Targeted Therapy | `select` |  |  |  |
| Moderate-to-Severe Plaque Psoriasis: Systemic and Biologic Therapy | Systemic Therapy Selection | `psoriasis_switching` | Treatment Failure and Switching Strategy | `select` |  |  |  |
| Moderate-to-Severe Plaque Psoriasis: Systemic and Biologic Therapy | Systemic Therapy Selection | `psoriasis_notes` | Psoriasis Systemic Treatment Notes and Dermatology/Rheumatology/Gastroenterology Coordination | `textarea` |  |  |  |

### Rosacea — `dermatology_rosacea_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Rosacea — Subtypes, Trigger Avoidance, Topical, and Systemic Management | Rosacea Subtypes, Pathogenesis, and Triggers | `ros_f1` | Rosacea Evaluation: EPIDEMIOLOGY (10 pct ADULTS; FAIR-SKINNED MOST COMMON; CELTIC NORTHERN EUROPEAN DESCENT; PEAK ONSET 30-60s; MORE SEVERE MEN PHYMATOUS; PATHOGENESIS (INNATE IMMUNE DYSFUNCTION; CATHELICIDIN LL-37 DYSREGULATION; DEMODEX FOLLICULORUM MITE COLONIZATION INCREASED; NEUROVASCULAR DYSFUNCTION; UV EXPOSURE; SUN DAMAGE VESSELS; ROSACEA SUBTYPES NRS CLASSIFICATION (ERYTHEMATOTELANGIECTATIC ETR: FLUSHING PERSISTENT ERYTHEMA TELANGIECTASIA; SENSITIVE SKIN STINGING; CENTROFACIAL; PAPULOPUSTULAR PPR: ACNE-LIKE PAPULES PUSTULES ON ERYTHEMATOUS BASE; CENTRAL FACE; DIFFERENTIATE ACNE: NO COMEDONES; PHYMATOUS: FIBROPLASIA SEBACEOUS HYPERPLASIA; RHINOPHYMA NOSE MOST COMMON; CHIN EARS FOREHEAD; W.C. FIELDS APPEARANCE; MORE COMMON MEN; OCULAR: BLEPHARITIS CONJUNCTIVITIS CHALAZION; 50 pct CONCURRENT SKIN DISEASE; CORNEAL INVOLVEMENT SEVERE; TRIGGERS (SUNLIGHT MOST COMMON; HEAT HOT DRINKS; COLD WIND; SPICY FOODS CAPSAICIN; ALCOHOL ESPECIALLY RED WINE; EMOTIONAL STRESS; EXERCISE; COSMETICS TOPICAL PRODUCTS; MEDICATIONS: NIACIN CALCIUM CHANNEL BLOCKERS AMIODARONE TOPICAL STEROIDS CHRONIC; MENOPAUSE HORMONAL; HOT SHOWERS SAUNAS; DIAGNOSIS CLINICAL: NO COMEDONES DISTINGUISHED FROM ACNE; CENTROFACIAL DISTRIBUTION; TELANGIECTAS; FLUSHING HISTORY; ASSESS TRIGGERS COMPREHENSIVELY) | `text` |  |  |  |
| Rosacea — Subtypes, Trigger Avoidance, Topical, and Systemic Management | Rosacea Subtypes, Pathogenesis, and Triggers | `ros_f2` | Treatment by Subtype Topical Systemic and Laser | `select` |  |  |  |

### Rosacea Management — `rosacea_management_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Rosacea Management Visit | Patient & Rosacea Subtype | `patientId` | Patient | `typeahead` | Y |  |  |
| Rosacea Management Visit | Patient & Rosacea Subtype | `visitDate` | Visit Date | `date` | Y |  |  |
| Rosacea Management Visit | Patient & Rosacea Subtype | `provider` | Dermatologist | `typeahead` | Y |  |  |
| Rosacea Management Visit | Patient & Rosacea Subtype | `rosacea_subtype` | Rosacea Subtype (NRS Classification) | `select` | Y |  |  |
| Rosacea Management Visit | Patient & Rosacea Subtype | `cea` | Clinician Erythema Assessment (CEA) Score | `text` |  |  |  |
| Rosacea Management Visit | Triggers & Examination | `triggers` | Identified Triggers (Standardized Trigger Diary) | `textarea` | Y |  |  |
| Rosacea Management Visit | Triggers & Examination | `exam` | Skin Examination Findings | `textarea` | Y |  |  |
| Rosacea Management Visit | Treatment Plan | `plan` | Assessment & Treatment Plan | `textarea` | Y |  |  |

### Skin Cancer Eval — `dermatology_skin_cancer_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Skin Cancer Evaluation | Lesion Characterization | `lesion_type` | Lesion Type | `select` |  |  |  |
| Skin Cancer Evaluation | Lesion Characterization | `abcde` | ABCDE Criteria (Asymmetry, Border irregularity, Color variation, Diameter >6mm, Evolving) | `textarea` |  |  |  |
| Skin Cancer Evaluation | Lesion Characterization | `dermoscopy` | Dermoscopy Findings (atypical pigment network, regression, vascular pattern) | `text` |  |  |  |
| Skin Cancer Evaluation | Lesion Characterization | `location` | Lesion Location | `text` |  |  |  |
| Skin Cancer Evaluation | Lesion Characterization | `size` | Size (mm × mm) | `text` |  |  |  |
| Skin Cancer Evaluation | Biopsy and Management | `biopsy_type` | Biopsy Type | `select` |  |  |  |
| Skin Cancer Evaluation | Biopsy and Management | `pathology_result` | Pathology Result (if available — Breslow depth for melanoma) | `text` |  |  |  |
| Skin Cancer Evaluation | Biopsy and Management | `breslow_depth` | Breslow Depth (mm — prognosis and WLE margin determined by depth) | `number` |  |  |  |
| Skin Cancer Evaluation | Melanoma Staging (if melanoma) | `melanoma_stage` | Melanoma Stage (AJCC 8th) | `select` |  |  |  |
| Skin Cancer Evaluation | Melanoma Staging (if melanoma) | `slnb` | Sentinel lymph node biopsy (SLNB) indicated (Breslow ≥0.8mm or ulcerated ≥0.8mm) | `checkbox` |  |  |  |
| Skin Cancer Evaluation | Melanoma Staging (if melanoma) | `oncology_referral` | Medical oncology referral (stage III/IV) | `checkbox` |  |  |  |
| Skin Cancer Evaluation | Melanoma Staging (if melanoma) | `wle_margin` | WLE Margin Recommendation | `select` |  |  |  |

### Vitiligo Management — `vitiligo_management_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Vitiligo Management Visit | Patient & Disease Characteristics | `patientId` | Patient | `typeahead` | Y |  |  |
| Vitiligo Management Visit | Patient & Disease Characteristics | `visitDate` | Visit Date | `date` | Y |  |  |
| Vitiligo Management Visit | Patient & Disease Characteristics | `provider` | Dermatologist | `typeahead` | Y |  |  |
| Vitiligo Management Visit | Patient & Disease Characteristics | `vitiligoType` | Vitiligo Classification | `select` | Y |  |  |
| Vitiligo Management Visit | Patient & Disease Characteristics | `bsa` | Body Surface Area Affected (%) | `number` |  |  |  |
| Vitiligo Management Visit | Patient & Disease Characteristics | `vasi` | VASI Score (Vitiligo Area Scoring Index) | `text` |  |  |  |
| Vitiligo Management Visit | Disease Activity Assessment | `activity` | Disease Activity | `select` | Y |  |  |
| Vitiligo Management Visit | Disease Activity Assessment | `triggersCoexist` | Triggers, Koebner & Comorbidities | `textarea` | Y |  |  |
| Vitiligo Management Visit | Disease Activity Assessment | `woodsLamp` | Wood Lamp Examination | `textarea` |  |  |  |
| Vitiligo Management Visit | Treatment Plan | `topicalTherapy` | Topical Therapy | `textarea` | Y |  |  |
| Vitiligo Management Visit | Treatment Plan | `phototherapy` | Phototherapy Plan | `textarea` | Y |  |  |
| Vitiligo Management Visit | Treatment Plan | `plan` | Assessment & Plan | `textarea` | Y |  |  |

## RCM

### A/R Follow-up — `workflow_ar_followup_cf`

Screen: 2 page(s) · 2 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `CLAIMS`, `PATIENTS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| A/R Queue | Filter | `arfPracticeId` | Practice ID | `text` |  |  |  |
| A/R Queue | Filter | `arfStatus` | Status | `select` |  |  |  |
| A/R Queue | Filter | `arfAgingBucket` | Aging Bucket | `select` |  |  |  |
| A/R Queue | Filter | `arfMinBalance` | Min Balance | `number` |  |  |  |
| Claim Detail | Claim Information | `arfId` | Claim ID | `text` |  |  |  |
| Claim Detail | Claim Information | `arfClaimNumber` | Claim Number | `text` |  |  |  |
| Claim Detail | Claim Information | `arfPatientName` | Patient | `text` |  |  |  |
| Claim Detail | Claim Information | `arfPayerName` | Payer | `text` |  |  |  |
| Claim Detail | Claim Information | `arfServiceDateFrom` | Service Date | `date` |  |  |  |
| Claim Detail | Claim Information | `arfSubmittedAt` | Submitted At | `text` |  |  |  |
| Claim Detail | Claim Information | `arfStatus` | Status | `text` |  |  |  |
| Claim Detail | Claim Information | `arfTotalCharge` | Total Charge | `text` |  |  |  |
| Claim Detail | Claim Information | `arfTotalPaid` | Total Paid | `text` |  |  |  |
| Claim Detail | Claim Information | `arfBalance` | Balance | `text` |  |  |  |
| Claim Detail | Claim Information | `arfDaysInAr` | Days in A/R | `number` |  |  |  |
| Claim Detail | Claim Information | `arfBucket` | Aging Bucket | `text` |  |  |  |
| Claim Detail | Claim Information | `arfPriority` | Priority | `text` |  |  |  |
| Claim Detail | Claim Information | `arfRecommendedAction` | Recommended Action | `text` |  |  |  |
| Claim Detail | Claim Information | `arfQueueReason` | Queue Reason | `text` |  |  |  |
| Claim Detail | Claim Information | `arfBillingNotes` | Billing Notes | `textarea` |  |  |  |
| Claim Detail | Claim Information | `arfLastStatusChange` | Last Status Change | `text` |  |  |  |

### Appeal Templates — `APPEAL_TEMPLATES`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Appeal Template | Template | `atId` | Template ID (e.g. template-medical-necessity) | `text` |  |  |  |
| Appeal Template | Template | `atName` | Template Name | `text` |  |  |  |
| Appeal Template | Template | `atDescription` | Description | `text` |  |  |  |
| Appeal Template | Template | `atCategory` | Category (medical_necessity/coding/timely_filing) | `text` |  |  |  |

### Appeal Templates — `appeal_templates`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Appeal Templates | atListSection | `atId` | ID | `text` |  |  |  |
| Appeal Templates | atListSection | `atName` | Template Name | `text` |  |  |  |
| Appeal Templates | atListSection | `atDescription` | Description | `text` |  |  |  |
| Appeal Templates | atListSection | `atCategory` | Category | `text` |  |  |  |

### Appeals — `APPEALS`

Screen: 1 page(s) · 1 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `APPEALS`, `CLAIMS`, `DENIALS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Appeal | Claim Appeal (ECW-BI-25) | `aplId` | Appeal ID (read-only) | `text` |  |  |  |
| Appeal | Claim Appeal (ECW-BI-25) | `aplClaimId` | Claim ID (required) | `text` | Y |  |  |
| Appeal | Claim Appeal (ECW-BI-25) | `aplDenialId` | Denial ID (optional) | `text` |  |  |  |
| Appeal | Claim Appeal (ECW-BI-25) | `aplStatus` | Status (draft/submitted/pending_review/approved/denied/final) | `text` |  |  |  |
| Appeal | Claim Appeal (ECW-BI-25) | `aplPayerId` | Payer ID | `text` |  |  |  |
| Appeal | Claim Appeal (ECW-BI-25) | `aplDenialReason` | Denial Reason Code | `text` |  |  |  |
| Appeal | Claim Appeal (ECW-BI-25) | `aplAppealReason` | Appeal Reason | `textarea` |  |  |  |
| Appeal | Claim Appeal (ECW-BI-25) | `aplSubmittedAt` | Submitted At (ISO 8601) | `text` |  |  |  |
| Appeal | Claim Appeal (ECW-BI-25) | `aplDeadlineDate` | Appeal Deadline (YYYY-MM-DD) | `text` |  |  |  |
| Appeal | Claim Appeal (ECW-BI-25) | `aplResponseDate` | Response Date (YYYY-MM-DD) | `text` |  |  |  |
| Appeal | Claim Appeal (ECW-BI-25) | `aplAmountDisputed` | Amount Disputed ($) | `text` |  |  |  |
| Appeal | Claim Appeal (ECW-BI-25) | `aplAmountRecovered` | Amount Recovered ($) | `text` |  |  |  |
| Appeal | Claim Appeal (ECW-BI-25) | `aplNotes` | Notes | `textarea` |  |  |  |

### Charge Optimization — `charge_optimization_cf`

Screen: 2 page(s) · 2 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Analysis Parameters | Filter Parameters | `coPracticeId` | Practice ID (required) | `text` | Y |  |  |
| Analysis Parameters | Filter Parameters | `coDateFrom` | Date From (YYYY-MM-DD, default 12 mo ago) | `text` |  |  |  |
| Analysis Parameters | Filter Parameters | `coDateTo` | Date To (YYYY-MM-DD, default today) | `text` |  |  |  |
| Analysis Parameters | Filter Parameters | `coPayerId` | Payer ID (optional filter) | `text` |  |  |  |
| Analysis Summary | Totals | `summaryDateFrom` | Date From | `text` |  |  |  |
| Analysis Summary | Totals | `summaryDateTo` | Date To | `text` |  |  |  |
| Analysis Summary | Totals | `summaryClaimsAnalyzed` | Claims Analyzed | `number` |  |  |  |
| Analysis Summary | Totals | `summaryCptsAnalyzed` | CPTs Analyzed | `number` |  |  |  |
| Analysis Summary | Totals | `summaryTotalUnderbilling` | Total Underbilling Gap | `number` |  |  |  |
| Analysis Summary | Totals | `summaryTotalOverbilling` | Total Overbilling | `number` |  |  |  |
| Analysis Summary | Totals | `summaryModifierCount` | Modifier Opportunities | `number` |  |  |  |
| Analysis Summary | Totals | `summaryOverbillingRows` | Overbilling CPT Rows | `number` |  |  |  |

### Claim Exceptions — `CLAIM_EXCEPTIONS`

Screen: 1 page(s) · 1 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `CLAIM_EXCEPTIONS`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Claim Exception | Exception (EDI/clearinghouse rejection) | `cxId` | Exception ID (read-only) | `text` |  |  |  |
| Claim Exception | Exception (EDI/clearinghouse rejection) | `cxClaimId` | Claim ID | `text` |  |  |  |
| Claim Exception | Exception (EDI/clearinghouse rejection) | `cxSubmissionId` | Submission ID | `text` |  |  |  |
| Claim Exception | Exception (EDI/clearinghouse rejection) | `cxSourceTransaction` | Source Transaction (277/835/clearinghouse) | `text` |  |  |  |
| Claim Exception | Exception (EDI/clearinghouse rejection) | `cxErrorCode` | Error Code | `text` |  |  |  |
| Claim Exception | Exception (EDI/clearinghouse rejection) | `cxErrorDescription` | Error Description | `textarea` |  |  |  |
| Claim Exception | Exception (EDI/clearinghouse rejection) | `cxRawSegment` | Raw EDI Segment | `textarea` |  |  |  |
| Claim Exception | Exception (EDI/clearinghouse rejection) | `cxClassification` | Classification (duplicate/rejection/warning/informational) | `text` |  |  |  |
| Claim Exception | Exception (EDI/clearinghouse rejection) | `cxRetryCount` | Retry Count | `text` |  |  |  |
| Claim Exception | Exception (EDI/clearinghouse rejection) | `cxResolutionStatus` | Resolution Status (pending/resolved/retry) | `text` |  |  |  |
| Claim Exception | Exception (EDI/clearinghouse rejection) | `cxResolutionNotes` | Resolution Notes | `textarea` |  |  |  |
| Claim Exception | Exception (EDI/clearinghouse rejection) | `cxResolvedAt` | Resolved At (ISO 8601) | `text` |  |  |  |
| Claim Exception | Exception (EDI/clearinghouse rejection) | `cxResolvedBy` | Resolved By (user ID) | `text` |  |  |  |

### Claim Lines — `CLAIM_LINES`

Screen: 1 page(s) · 1 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `CLAIMS`, `CLAIM_LINES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Claim Line | Claim Service Line (HCFA box 24) | `clnId` | Line ID (read-only) | `text` |  |  |  |
| Claim Line | Claim Service Line (HCFA box 24) | `clnClaimId` | Claim ID (required) | `text` | Y |  |  |
| Claim Line | Claim Service Line (HCFA box 24) | `clnLineNumber` | Line Number (1-based integer) | `text` |  |  |  |
| Claim Line | Claim Service Line (HCFA box 24) | `clnCptCode` | CPT/HCPCS Code (required) | `text` | Y |  |  |
| Claim Line | Claim Service Line (HCFA box 24) | `clnModifiers` | Modifiers (comma-separated: 25,59,etc.) | `text` |  |  |  |
| Claim Line | Claim Service Line (HCFA box 24) | `clnDiagnosisPointers` | Diagnosis Pointers (comma-separated: A,B,C) | `text` |  |  |  |
| Claim Line | Claim Service Line (HCFA box 24) | `clnUnits` | Units (required; positive integer) | `text` | Y |  |  |
| Claim Line | Claim Service Line (HCFA box 24) | `clnChargeAmount` | Charge Amount ($; required) | `text` | Y |  |  |
| Claim Line | Claim Service Line (HCFA box 24) | `clnAllowedAmount` | Allowed Amount ($) | `text` |  |  |  |
| Claim Line | Claim Service Line (HCFA box 24) | `clnPaidAmount` | Paid Amount ($) | `text` |  |  |  |
| Claim Line | Claim Service Line (HCFA box 24) | `clnServiceDateFrom` | Service Date From (YYYY-MM-DD) | `text` |  |  |  |
| Claim Line | Claim Service Line (HCFA box 24) | `clnServiceDateTo` | Service Date To (YYYY-MM-DD) | `text` |  |  |  |
| Claim Line | Claim Service Line (HCFA box 24) | `clnPlaceOfService` | Place of Service Code (default 11) | `text` |  |  |  |
| Claim Line | Claim Service Line (HCFA box 24) | `clnStatus` | Status (pending/approved/denied/partial) | `text` |  |  |  |
| Claim Line | Claim Service Line (HCFA box 24) | `clnDescription` | Description (optional) | `text` |  |  |  |

### Claim Resubmissions — `claim_resubmission_cf`

Screen: 1 page(s) · 4 section(s) · 20 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Claim Resubmission | Denial Details | `originalClaimNumber` | Original Claim # | `text` |  |  |  |
| Claim Resubmission | Denial Details | `denialDate` | Denial Date | `date` |  |  |  |
| Claim Resubmission | Denial Details | `denialCode` | Denial Code | `text` |  |  |  |
| Claim Resubmission | Denial Details | `denialReason` | Denial Reason | `textarea` |  |  |  |
| Claim Resubmission | Denial Details | `denialCategory` | Category | `select` |  |  |  |
| Claim Resubmission | Denial Details | `resubmissionType` | Resubmission Type | `select` | Y |  |  |
| Claim Resubmission | Denial Details | `priority` | Priority | `select` |  |  |  |
| Claim Resubmission | Denial Details | `timelyFilingDeadline` | Filing Deadline | `date` |  |  |  |
| Claim Resubmission | Denial Details | `assignedTo` | Assigned To | `text` |  |  |  |
| Claim Resubmission | Payer & Amounts | `payerName` | Payer Name | `text` |  |  |  |
| Claim Resubmission | Payer & Amounts | `payerId` | Payer ID | `text` |  |  |  |
| Claim Resubmission | Payer & Amounts | `billedAmount` | Billed Amount | `number` |  |  |  |
| Claim Resubmission | Payer & Amounts | `allowedAmount` | Allowed Amount | `number` |  |  |  |
| Claim Resubmission | Payer & Amounts | `paidAmount` | Paid Amount | `number` |  |  |  |
| Claim Resubmission | Correction Notes | `correctedDiagnosis` | Corrected Diagnosis | `textarea` |  |  |  |
| Claim Resubmission | Correction Notes | `correctedProcedures` | Corrected Procedures | `textarea` |  |  |  |
| Claim Resubmission | Correction Notes | `correctionNotes` | Correction Notes | `textarea` |  |  |  |
| Claim Resubmission | Status | `status` | Status | `text` |  | status |  |
| Claim Resubmission | Status | `resubmissionNumber` | RSB # | `text` |  | resubmissionNumber |  |
| Claim Resubmission | Status | `createdBy` | Created By | `text` |  |  |  |

### Claim Review — `workflow_claim_review_cf`

Screen: 2 page(s) · 3 section(s) · 25 field(s) · UI LIVE · DB BUILT · tables `CLAIMS`, `CLAIM_LINES`, `ELIGIBILITY_CHECKS`, `PAYERS_MASTER`, `PAYER_RULES`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Claim Review Queue | Filter | `wcrPracticeId` | Practice ID (optional, all authorized if blank) | `text` |  |  |  |
| Claim Review Detail | Claim Information | `wcrId` | Claim ID | `text` |  |  |  |
| Claim Review Detail | Claim Information | `wcrClaimNumber` | Claim Number | `text` |  |  |  |
| Claim Review Detail | Claim Information | `wcrPatientName` | Patient | `text` |  |  |  |
| Claim Review Detail | Claim Information | `wcrProviderName` | Provider | `text` |  |  |  |
| Claim Review Detail | Claim Information | `wcrPayerName` | Payer | `text` |  |  |  |
| Claim Review Detail | Claim Information | `wcrServiceDateFrom` | Service Date | `date` |  |  |  |
| Claim Review Detail | Claim Information | `wcrTotalCharge` | Total Charge | `text` |  |  |  |
| Claim Review Detail | Claim Information | `wcrStatus` | Status | `text` |  |  |  |
| Claim Review Detail | Claim Information | `wcrStatusReason` | Status Reason | `textarea` |  |  |  |
| Claim Review Detail | Claim Information | `wcrLineCount` | Service Lines | `number` |  |  |  |
| Claim Review Detail | Claim Information | `wcrDiagnosisCodes` | Diagnosis Codes | `text` |  |  |  |
| Claim Review Detail | Pre-submission Risk Assessment | `wcrFirstPassRiskLevel` | First-Pass Risk Level | `text` |  |  |  |
| Claim Review Detail | Pre-submission Risk Assessment | `wcrPreventableDenialRiskScore` | Preventable Denial Risk Score (0-99) | `number` |  |  |  |
| Claim Review Detail | Pre-submission Risk Assessment | `wcrApprovalReadiness` | Approval Readiness | `text` |  |  |  |
| Claim Review Detail | Pre-submission Risk Assessment | `wcrPriority` | Priority | `text` |  |  |  |
| Claim Review Detail | Pre-submission Risk Assessment | `wcrAgeDays` | Age (days) | `number` |  |  |  |
| Claim Review Detail | Pre-submission Risk Assessment | `wcrReviewSlaStatus` | SLA Status | `text` |  |  |  |
| Claim Review Detail | Pre-submission Risk Assessment | `wcrReviewSlaBucket` | SLA Bucket | `text` |  |  |  |
| Claim Review Detail | Pre-submission Risk Assessment | `wcrReviewSlaAction` | SLA Action | `text` |  |  |  |
| Claim Review Detail | Pre-submission Risk Assessment | `wcrPreSubmissionErrorCount` | Errors | `number` |  |  |  |
| Claim Review Detail | Pre-submission Risk Assessment | `wcrPreSubmissionWarningCount` | Warnings | `number` |  |  |  |
| Claim Review Detail | Pre-submission Risk Assessment | `wcrRecommendedAction` | Recommended Action | `textarea` |  |  |  |
| Claim Review Detail | Pre-submission Risk Assessment | `wcrIssueSummary` | Issue Summary | `text` |  |  |  |
| Claim Review Detail | Pre-submission Risk Assessment | `wcrIssueCount` | Issue Count | `number` |  |  |  |

### Claims — `CLAIMS`

Screen: 1 page(s) · 1 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLAIM_LINES`, `CLAIM_STATUS_HISTORY`, `ELIGIBILITY_CHECKS`, `PATIENT_INSURANCES`, `PAYERS_MASTER`, `PAYER_RULES`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Claim | Claim | `claimId` | Claim ID | `text` |  |  |  |
| Claim | Claim | `claimNumber` | Claim Number | `text` |  |  |  |
| Claim | Claim | `claimPatientId` | Patient ID (required) | `text` | Y |  |  |
| Claim | Claim | `claimPracticeId` | Practice ID (required) | `text` | Y |  |  |
| Claim | Claim | `claimProviderId` | Provider ID (required) | `text` | Y |  |  |
| Claim | Claim | `claimPayerId` | Payer ID (required) | `text` | Y |  |  |
| Claim | Claim | `claimStatus` | Status (draft/submitted/accepted/paid/denied/appealed) | `text` |  |  |  |
| Claim | Claim | `claimDateOfService` | Date of Service (YYYY-MM-DD) | `text` |  |  |  |
| Claim | Claim | `claimTotalCharged` | Total Charged ($) | `text` |  |  |  |
| Claim | Claim | `claimTotalPaid` | Total Paid ($, read-only) | `text` |  |  |  |
| Claim | Claim | `claimBalance` | Balance ($, read-only) | `text` |  |  |  |
| Claim | Claim | `claimPrimaryDiagnosis` | Primary Diagnosis (ICD-10) | `text` |  |  |  |
