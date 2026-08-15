---
title: "PracticeForceOneCFTrackingFields17"
---

# CF Tracking — Field-Level Detail (part 17 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Cardiology**, **Specialty Boards**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Cardiology

### Cardiac Rehab Phase II — `cardiac_rehab_phase2_cf`

Screen: 1 page(s) · 4 section(s) · 24 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiac Rehabilitation Phase II Progress Note | Program Information | `cr_session_number` | Session Number (of 36 typically covered) | `number` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Program Information | `cr_indication` | Cardiac Rehab Indication | `select` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Program Information | `cr_weeks_in_program` | Weeks in Current Phase II Program | `number` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Program Information | `cr_ef` | Most Recent Ejection Fraction (%) and Date | `text` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Pre-Exercise Assessment | `cr_pre_bp` | Pre-Exercise Blood Pressure (mmHg) | `text` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Pre-Exercise Assessment | `cr_pre_hr` | Pre-Exercise Heart Rate (bpm) | `text` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Pre-Exercise Assessment | `cr_pre_spo2` | Pre-Exercise O2 Saturation (%) | `text` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Pre-Exercise Assessment | `cr_pre_weight` | Weight (lbs) | `text` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Pre-Exercise Assessment | `cr_angina_pre` | Pre-Exercise Symptoms | `select` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Pre-Exercise Assessment | `cr_rpm_level` | Current Risk Stratification (AACVPR) | `select` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Exercise Session | `cr_exercise_mode` | Exercise Modalities Used Today | `select` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Exercise Session | `cr_target_hr` | Target Heart Rate Range (bpm) — 50-80% HRR or Borg RPE 11-14 | `text` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Exercise Session | `cr_peak_hr` | Peak Exercise Heart Rate Achieved (bpm) | `text` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Exercise Session | `cr_duration` | Total Exercise Duration (minutes) | `number` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Exercise Session | `cr_met_level` | Estimated MET Level Achieved | `select` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Exercise Session | `cr_borg_rpe` | Peak Borg RPE (Rate of Perceived Exertion) | `select` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Exercise Session | `cr_symptoms_during` | Symptoms During Exercise | `select` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Risk Factor Modification and Discharge Planning | `cr_bp_control` | Blood Pressure Control | `select` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Risk Factor Modification and Discharge Planning | `cr_cholesterol` | Lipid Management | `select` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Risk Factor Modification and Discharge Planning | `cr_smoking` | Smoking Status | `select` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Risk Factor Modification and Discharge Planning | `cr_diet_adherence` | Cardiac Diet Adherence | `select` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Risk Factor Modification and Discharge Planning | `cr_sessions_completed` | Progress Toward Discharge Criteria | `select` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Risk Factor Modification and Discharge Planning | `cr_home_program` | Home Exercise Program | `select` |  |  |  |
| Cardiac Rehabilitation Phase II Progress Note | Risk Factor Modification and Discharge Planning | `cr_notes` | Cardiac Rehab Notes and Goals for Next Session | `textarea` |  |  |  |

### Cardiac Rehabilitation — `cardiac_rehabilitation_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiac Rehabilitation Visit | Patient & Referral Indication | `patientId` | Patient | `typeahead` | Y |  |  |
| Cardiac Rehabilitation Visit | Patient & Referral Indication | `visitDate` | Visit Date | `date` | Y |  |  |
| Cardiac Rehabilitation Visit | Patient & Referral Indication | `provider` | Cardiac Rehab Provider / Exercise Physiologist | `typeahead` | Y |  |  |
| Cardiac Rehabilitation Visit | Patient & Referral Indication | `indication` | Phase II CR Indication | `select` | Y |  |  |
| Cardiac Rehabilitation Visit | Patient & Referral Indication | `sessionNumber` | Session Number (36 total covered by Medicare) | `number` |  |  |  |
| Cardiac Rehabilitation Visit | Patient & Referral Indication | `phaseStartDate` | Phase II Start Date | `date` |  |  |  |
| Cardiac Rehabilitation Visit | Exercise Assessment | `metLevel` | Current METs Achieved (Metabolic Equivalents) | `number` |  |  |  |
| Cardiac Rehabilitation Visit | Exercise Assessment | `exerciseBP` | Peak Exercise BP (mmHg) | `text` |  |  |  |
| Cardiac Rehabilitation Visit | Exercise Assessment | `exerciseHR` | Peak Exercise HR (bpm) | `number` |  |  |  |
| Cardiac Rehabilitation Visit | Exercise Assessment | `hrReserve` | Heart Rate Reserve (Karvonen formula: 40-80% HRR) | `text` |  |  |  |
| Cardiac Rehabilitation Visit | Exercise Assessment | `exerciseAssessment` | Exercise Tolerance & Session Activity | `textarea` | Y |  |  |
| Cardiac Rehabilitation Visit | Risk Factor Modification & Plan | `riskFactors` | Risk Factor Status | `textarea` | Y |  |  |
| Cardiac Rehabilitation Visit | Risk Factor Modification & Plan | `plan` | Plan & Goals | `textarea` | Y |  |  |

### Cardiac Sarcoidosis — `cardiology_cardiac_sarcoidosis_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiac Sarcoidosis — Diagnosis, Imaging, Arrhythmia Management, Steroids, and ICD | Cardiac Sarcoidosis Diagnosis and Imaging | `cs_overview` | Cardiac Sarcoidosis Epidemiology (5% Clinical, 25% Autopsy), Manifestations (AV Block, VT, Heart Failure, Sudden Death), and HRS 2014 Diagnostic Criteria (CARDIAC SARCOIDOSIS (CS): EPIDEMIOLOGY: CLINICAL CARDIAC INVOLVEMENT: ~5% of systemic sarcoidosis patients; AUTOPSY PREVALENCE: 25-40% (subclinical); JAPANESE: higher prevalence of isolated CS (without pulmonary); CAUSE OF DEATH in sarcoidosis: CARDIAC ARRHYTHMIA + SUDDEN CARDIAC DEATH; HEART FAILURE; PATHOLOGY: NON-CASEATING GRANULOMAS in myocardium; basal septum; free wall; papillary muscles; HEALING: FIBROSIS (scars = arrhythmia substrate); CLINICAL MANIFESTATIONS: AV BLOCK (ATRIOVENTRICULAR BLOCK): most common presenting manifestation; HIGH-DEGREE AV BLOCK in young person (<55 years) is red flag; VENTRICULAR TACHYCARDIA (VT): monomorphic; scar-related; potentially LIFE-THREATENING; SUDDEN CARDIAC DEATH; HEART FAILURE: DILATED CARDIOMYOPATHY pattern; systolic + diastolic dysfunction; PALPITATIONS; SYNCOPE; ATRIAL ARRHYTHMIAS: AF; atrial flutter; PERICARDITIS; VENTRICULAR ANEURYSM; RIGHT HEART FAILURE (pulmonary sarcoid + cardiac); HRS 2014 DIAGNOSTIC CRITERIA: HISTOLOGICAL DIAGNOSIS: non-caseating granuloma in myocardial biopsy (endomyocardial biopsy; low sensitivity 20-30%); CLINICAL DIAGNOSIS (when histological from extracardiac biopsy confirmed + at least 1 of): STEROID-RESPONSIVE CARDIOMYOPATHY; SPONTANEOUS OR INDUCED SUSTAINED VT; MOBITZ TYPE II or COMPLETE AV BLOCK; UNEXPLAINED REDUCED LVEF <40%; UNEXPLAINED PATCHY UPTAKE on FDG-PET; LATE GADOLINIUM ENHANCEMENT (LGE) on CMR in a pattern consistent with CS; POSITIVE GALLIUM UPTAKE in heart; POSITIVE FLUORODEOXYGLUCOSE (FDG) PET in heart; JAPAN MINISTRY CRITERIA: similar but different; 3 major (AV block; VT; LVEF <50%) + 5 minor; >=3 major or >=1 major + >=2 minor = diagnosis | `text` |  |  |  |
| Cardiac Sarcoidosis — Diagnosis, Imaging, Arrhythmia Management, Steroids, and ICD | Cardiac Sarcoidosis Diagnosis and Imaging | `cs_imaging` | FDG-PET and Cardiac MRI (CMR) Combined Protocol: Non-Uptake Areas Fibrosis vs. Active Inflammation Uptake, High-Fat Low-Carbohydrate Diet 12h Fast, LGE Pattern Midmyocardial and Subepicardial vs. Infarction Subendocardial | `select` |  |  |  |
| Cardiac Sarcoidosis — Diagnosis, Imaging, Arrhythmia Management, Steroids, and ICD | Cardiac Sarcoidosis Treatment: Steroids, ICD, and Advanced Therapy | `cs_steroids` | High-Dose Prednisone for Active CS (0.5-1 mg/kg/day, 30-40 mg/day, Taper over 6-12 Months), Steroid Monitoring, LVEF Improvement on Treatment, and Steroid-Sparing Options (CARDIAC SARCOIDOSIS IMMUNOSUPPRESSION: STEROIDS: FIRST-LINE for ACTIVE CS (FDG-PET uptake or edema on CMR); GOAL: suppress granulomatous inflammation; may improve AV block; LVEF; REDUCE ARRHYTHMIA BURDEN; DOSE: PREDNISONE 30-40 mg/day (or 0.5-1 mg/kg/day); EVIDENCE: OBSERVATIONAL DATA (no RCTs for CS); RETROSPECTIVE: LVEF improvement in 30-50%; AV block may partially resolve; TAPER: over 6-12 months to lowest effective dose; MAINTENANCE: 5-10 mg/day often needed indefinitely; RELAPSE COMMON on taper; MONITORING STEROID RESPONSE: REPEAT FDG-PET at 3-6 months (active inflammation response); CMR (scar stabilization); HOLTER MONITOR; ECG (AV block improvement); ECHOCARDIOGRAM (LVEF); LFTs; glucose; bone density (DEXA); STEROID SIDE EFFECTS: HYPERGLYCEMIA; OSTEOPOROSIS; WEIGHT GAIN; INFECTION; HYPERTENSION; BONE PROTECTION: calcium + D3 + bisphosphonate; AV BLOCK AND STEROIDS: COMPLETE AV BLOCK MAY RESOLVE with steroids (in early active disease); MONITOR with progressive steroid therapy; TEMPORARY PACEMAKER DURING INITIATION; PERMANENT PACEMAKER: if AV block persists or recurs on taper; STEROID-SPARING AGENTS: METHOTREXATE (MTX): 10-20 mg/week; most studied; AZATHIOPRINE; MYCOPHENOLATE MOFETIL (MMF); add for steroid toxicity or relapsing disease; CYCLOPHOSPHAMIDE: refractory; severe; COMBINATION THERAPY: MTX or AZA added to reduced-dose steroids; ANTI-TNF THERAPY (INFLIXIMAB): refractory or relapsing PULMONARY sarcoid; CARDIAC sarcoid use: limited case series; concern for WORSENING HEART FAILURE; HYDROXYCHLOROQUINE: skin + joint sarcoid; NOT cardiac; CHECKPOINT INHIBITOR-INDUCED CS: HOLD IMMUNOTHERAPY; HIGH-DOSE STEROIDS; often responsive | `text` |  |  |  |
| Cardiac Sarcoidosis — Diagnosis, Imaging, Arrhythmia Management, Steroids, and ICD | Cardiac Sarcoidosis Treatment: Steroids, ICD, and Advanced Therapy | `cs_devices` | ICD Implantation (Primary Prevention EF<35 or VT, Class IIa AV Block), VT Catheter Ablation Epicardial and Endocardial Approach, CRT for CS Cardiomyopathy, and Cardiac Transplantation (Sarcoid Can Recur in Allograft) | `select` |  |  |  |

### Cardiac Tamponade — `cardiology_cardiac_tamponade_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiac Tamponade — Diagnosis, Hemodynamics, and Emergency Pericardiocentesis | Tamponade Pathophysiology, Diagnosis, and Clinical Features | `tamp_f1` | Cardiac Tamponade Evaluation: PATHOPHYSIOLOGY (PERICARDIAL EFFUSION COMPRESSES CARDIAC CHAMBERS; INTRAPERICARDIAL PRESSURE RISES EXCEEDS FILLING PRESSURE; CARDIAC OUTPUT FALLS; COMPENSATORY TACHYCARDIA; VENOUS PRESSURE RISES; INTERDEPENDENCE: INSPIRATION INCREASES RV FILLING REDUCES LV FILLING; RATE OF ACCUMULATION KEY: SMALL RAPID ACCUMULATION WORSE THAN LARGE SLOW; PERICARDIUM NONCOMPLIANT ACUTE; ETIOLOGY (MALIGNANCY MOST COMMON US: LUNG BREAST LYMPHOMA MELANOMA; IDIOPATHIC VIRAL PERICARDITIS; BACTERIAL PURULENT: HIGHEST MORTALITY; UREMIA PERICARDITIS; AUTOIMMUNE SLE RA; POST-CARDIAC SURGERY; PROCEDURE COMPLICATION: PACEMAKER CATHETER CORONARY PERFORATION; RADIATION-INDUCED; HYPOTHYROIDISM; AORTIC DISSECTION TYPE A HEMOPERICARDIUM; BECK TRIAD CLASSIC (HYPOTENSION; MUFFLED HEART SOUNDS; JUGULAR VENOUS DISTENSION JVD; RARELY ALL THREE PRESENT; PULSUS PARADOXUS (BLOOD PRESSURE DECLINE OVER 10 mmHg WITH INSPIRATION; MEASURE WITH SPHYGMOMANOMETER; EXAGGERATED RESPIRATORY VARIATION; SENSITIVITY 82 pct SPECIFICITY 70 pct; FALSE NEGATIVE: SEVERE LV DYSFUNCTION; SEVERE AORTIC STENOSIS; ASD; ECG FINDINGS (ELECTRICAL ALTERNANS: BEAT TO BEAT VARIATION QRS AXIS; SPECIFIC FOR TAMPONADE; SINUS TACHYCARDIA; LOW VOLTAGE; ST ELEVATION DIFFUSE PERICARDITIS; GLOBAL FLAT T WAVES; PR DEPRESSION; ECHOCARDIOGRAPHY GOLD STANDARD (EFFUSION DISTRIBUTION; DIASTOLIC COLLAPSE RA PROLONGED; DIASTOLIC COLLAPSE RV; INFERIOR VENA CAVA IVC PLETHORA; RESPIRATORY VARIATION MITRAL INFLOW; SWINGING HEART) | `text` |  |  |  |
| Cardiac Tamponade — Diagnosis, Hemodynamics, and Emergency Pericardiocentesis | Tamponade Pathophysiology, Diagnosis, and Clinical Features | `tamp_f2` | Pericardiocentesis and Drain Management | `select` |  |  |  |

### Cath Report — `catheterization_report_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiac Catheterization Report | Procedure Details | `indication` | Indication | `select` |  |  |  |
| Cardiac Catheterization Report | Procedure Details | `access_site` | Vascular Access Site | `select` |  |  |  |
| Cardiac Catheterization Report | Procedure Details | `contrast_volume_ml` | Contrast Volume (mL) | `number` |  |  |  |
| Cardiac Catheterization Report | Procedure Details | `fluoroscopy_time_min` | Fluoroscopy Time (minutes) | `number` |  |  |  |
| Cardiac Catheterization Report | Coronary Findings | `lmca` | LMCA | `select` |  |  |  |
| Cardiac Catheterization Report | Coronary Findings | `lad` | LAD | `select` |  |  |  |
| Cardiac Catheterization Report | Coronary Findings | `lcx` | LCx | `select` |  |  |  |
| Cardiac Catheterization Report | Coronary Findings | `rca` | RCA | `select` |  |  |  |
| Cardiac Catheterization Report | Coronary Findings | `lvef` | LVEF (% by left ventriculography or echo) | `number` |  |  |  |
| Cardiac Catheterization Report | Intervention | `pci_performed` | PCI (percutaneous coronary intervention) performed | `checkbox` |  |  |  |
| Cardiac Catheterization Report | Intervention | `pci_vessel` | Vessel(s) Treated | `text` |  |  |  |
| Cardiac Catheterization Report | Intervention | `stent_type` | Stent Type | `select` |  |  |  |
| Cardiac Catheterization Report | Intervention | `dapt_duration_months` | DAPT Duration Prescribed | `select` |  |  |  |
| Cardiac Catheterization Report | Intervention | `cabg_recommended` | CABG recommended (complex CAD/LMCA/3-vessel) | `checkbox` |  |  |  |
| Cardiac Catheterization Report | Intervention | `notes` | Additional Findings and Recommendations | `textarea` |  |  |  |

### Channelopathy ECG — `cardiology_channelopathy_ecg_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Channelopathy — Brugada, LQTS, SQTS, CPVT, and WPW | Brugada Syndrome | `brugada_pattern` | Brugada Type 1-3, Sodium Channel Blockers, and ICD vs. Quinidine (BRUGADA SYNDROME: GENETICS: SCN5A mutation (20-30%); voltage-gated sodium channel Nav1.5; loss-of-function; autosomal dominant; PREVALENCE: 1-5/10,000; higher in Asia (Japan, Thailand); MALE PREDOMINANCE (8:1); DIAGNOSIS: TYPE 1 ECG (SPONTANEOUS or DRUG-INDUCED): COVED PATTERN in V1-V2 (+/- V3); ST elevation >=2 mm in descending convex form; T-wave inversion; SINE QUA NON for diagnosis; TYPE 2 (SADDLE-BACK): not diagnostic; may convert to Type 1 with Na channel blocker; TYPE 3: flat; non-specific; DRUG-PROVOCATION TEST: SODIUM CHANNEL BLOCKERS unmask Type 1: AJMALINE 1 mg/kg IV over 10 min (gold standard in Europe); FLECAINIDE 2 mg/kg IV (up to 150 mg); PROCAINAMIDE; INDICATIONS: suspected Brugada + non-diagnostic ECG; positive if Type 1 pattern develops; FALSE POSITIVES: Na channel antagonist drugs; electrolyte abnormalities; RISK STRATIFICATION: HIGHEST RISK: spontaneous Type 1 + prior cardiac arrest or VF/VT; INTERMEDIATE: spontaneous Type 1 + syncope; LOWEST RISK: drug-induced Type 1 only (asymptomatic); RISK SCORES: Shanghai Score >=3.5 + spontaneous Type 1 = Brugada Syndrome; ELECTROPHYSIOLOGY STUDY (EPS): inducible VF predicts events (controversial); TREATMENT: ICD: prior cardiac arrest or VT; QUINIDINE: quinidine sulfate 200-400 mg TID; Ito current inhibition; drug of choice for Brugada with VT storm; reduces ICD shocks; catheter ablation of epicardial RVOT: reduces VF triggers; fever management: aggressive antipyretics; fever uncovers Brugada; GENETIC COUNSELING: first-degree relatives; ECG + drug challenge; SCN5A TESTING; AVOID DRUGS: sodium channel blockers; tricyclics; lithium; cocaine; high-dose alcohol; beta-blockers (may worsen in some) | `text` |  |  |  |
| Channelopathy — Brugada, LQTS, SQTS, CPVT, and WPW | Brugada Syndrome | `lqts` | LQTS Schwartz Score, Drug-QTc Prolongation, and Beta-Blocker Specifics | `select` |  |  |  |
| Channelopathy — Brugada, LQTS, SQTS, CPVT, and WPW | CPVT and WPW Pre-excitation | `cpvt` | CPVT Bidirectional VT, Flecainide Protocol, and Ryanodine Receptor Mutation (CATECHOLAMINERGIC POLYMORPHIC VT (CPVT): PATHOPHYSIOLOGY: ABNORMAL CALCIUM HANDLING; RYR2 mutation (ryanodine receptor 2): 60-70%; autosomal dominant; spontaneous Ca2+ leak from sarcoplasmic reticulum during adrenergic stimulation; CASQ2 mutation: calsequestrin 2; recessive; CALM1/2/3: calmodulin; DIAGNOSTIC HALLMARK: BIDIRECTIONAL VENTRICULAR TACHYCARDIA (alternating QRS axis beat-to-beat; 180-degree rotation); TRIGGERED BY CATECHOLAMINES (exercise or IV isoproterenol); PRESENTATION: SYNCOPE during exercise or strong emotion; typically young (mean onset 7-9 years); NO structural heart disease; NORMAL RESTING ECG (unlike Brugada); EXERCISE STRESS TEST: progressive ventricular ectopy with exertion; COUPLED VENTRICULAR BEATS → BIGEMINY → BIDIRECTIONAL VT → POLYMORPHIC VT → VF; EXERCISE THRESHOLD: heart rate-dependent; EPINEPHRINE INFUSION TEST: if exercise not possible; FAMILY HISTORY: sudden death in young relatives; TREATMENT: BETA-BLOCKERS: NADOLOL preferred (non-selective; longer-acting); dose up to 1.5-2 mg/kg/day; reduce all exercise-triggered events; NOT SUFFICIENT ALONE in high-risk; FLECAINIDE: CLASS IC; adds to beta-blocker; SIGNIFICANTLY REDUCES VT burden; EXERCISE STRESS TEST to verify response; dose 2-4 mg/kg/day (children); 100-300 mg/day (adults); COMBINED NADOLOL + FLECAINIDE: first-line for high-risk CPVT; LEFT CARDIAC SYMPATHETIC DENERVATION (LCSD): bilateral stellate ganglionectomy; reduces catecholamine release; reduces VT burden when medications insufficient; ICD: prior cardiac arrest; symptomatic despite maximum therapy; AVOID: emotional triggers; competitive sports; epinephrine; stimulant medications; decongestants | `text` |  |  |  |
| Channelopathy — Brugada, LQTS, SQTS, CPVT, and WPW | CPVT and WPW Pre-excitation | `wpw` | WPW Delta Wave, Accessory Pathway, Catheter Ablation, and AF Risk | `select` |  |  |  |

### Chest Pain Evaluation — `outpatient_chest_pain_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Outpatient Chest Pain Evaluation | Patient & Presentation | `patientId` | Patient | `typeahead` | Y |  |  |
| Outpatient Chest Pain Evaluation | Patient & Presentation | `visitDate` | Visit Date | `date` | Y |  |  |
| Outpatient Chest Pain Evaluation | Patient & Presentation | `provider` | Provider | `typeahead` | Y |  |  |
| Outpatient Chest Pain Evaluation | Patient & Presentation | `chestPainOnset` | Chest Pain Onset / Duration | `select` | Y |  |  |
| Outpatient Chest Pain Evaluation | Patient & Presentation | `chestPainType` | Pain Character | `select` | Y |  |  |
| Outpatient Chest Pain Evaluation | History & Risk Assessment | `hpi` | Chest Pain History | `textarea` | Y |  |  |
| Outpatient Chest Pain Evaluation | History & Risk Assessment | `cardiacRiskFactors` | Cardiac Risk Factors | `textarea` | Y |  |  |
| Outpatient Chest Pain Evaluation | History & Risk Assessment | `workupOrdered` | Workup Ordered / Results | `textarea` | Y |  |  |
| Outpatient Chest Pain Evaluation | Assessment & Plan | `diagnosis` | Working Diagnosis | `text` | Y |  |  |
| Outpatient Chest Pain Evaluation | Assessment & Plan | `plan` | Management Plan | `textarea` | Y |  |  |

### Constrictive Pericarditis — `cardiology_constrictive_pericarditis_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Constrictive Pericarditis — Diagnosis, Hemodynamic Assessment, and Pericardiectomy | Constrictive Pericarditis Pathophysiology and Diagnosis | `constr_f1` | Constrictive Pericarditis Evaluation: PATHOPHYSIOLOGY (PERICARDIUM FIBROUS CALCIFIED THICKENED RIGID; LIMITS CARDIAC FILLING BOTH VENTRICLES; VENOUS PRESSURE RISES EQUALLY BILATERAL; DIASTOLIC EQUALIZATION PRESSURES; DISSOCIATION INTRACARDIAC AND INTRATHORACIC PRESSURES; VENTRICULAR INTERDEPENDENCE EXAGGERATED; ETIOLOGY (IDIOPATHIC VIRAL MOST COMMON; POST-CARDIAC SURGERY 30 pct; POST-RADIATION THERAPY LATE; PURULENT PERICARDITIS HEALED; TUBERCULOSIS TB ENDEMIC COUNTRIES; RHEUMATOID ARTHRITIS; UREMIA CHRONIC; MALIGNANCY INFILTRATION; CLINICAL FEATURES (DYSPNEA FATIGUE FLUID RETENTION; ASCITES OFTEN BEFORE PERIPHERAL EDEMA PROMINENT; HEPATOMEGALY CONGESTIVE; JUGULAR VENOUS DISTENSION PROMINENT; KUSSMAUL SIGN: JVP INCREASES INSPIRATION UNLIKE NORMAL DECREASE; PERICARDIAL KNOCK: HIGH PITCHED EARLY DIASTOLIC SOUND SUDDEN CESSATION VENTRICULAR FILLING; ECG FINDINGS (NONSPECIFIC ST-T CHANGES; LOW VOLTAGE; ATRIAL FIBRILLATION CHRONIC; BIATRIAL ENLARGEMENT; IMAGING (CHEST XR: PERICARDIAL CALCIFICATION EGGSHELL CALCIFICATION; CT CHEST: PERICARDIAL THICKENING OVER 3-4 mm CALCIFICATION; MOST SENSITIVE CALCIFICATION DETECTION; CARDIAC MRI: PERICARDIAL THICKENING DELAYED GADOLINIUM ENHANCEMENT ACTIVE INFLAMMATION; ECHOCARDIOGRAPHY (SEPTAL BOUNCE INTERVENTRICULAR SEPTAL NOTCH; RESPIROPHASIC VARIATION MITRAL INFLOW; IVC PLETHORA DILATED NON-COLLAPSING; ANNULAR REVERSALS TISSUE DOPPLER E OVER E PRIME; M PATTERN HEPATIC VEINS) | `text` |  |  |  |
| Constrictive Pericarditis — Diagnosis, Hemodynamic Assessment, and Pericardiectomy | Constrictive Pericarditis Pathophysiology and Diagnosis | `constr_f2` | Right Heart Catheterization and Pericardiectomy | `select` |  |  |  |

### Dilated Cardiomyopathy — `cardiology_dilated_cardiomyopathy_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dilated Cardiomyopathy: Genetic Evaluation, HFrEF Therapy, and Reverse Remodeling | DCM Diagnosis: Etiology Workup, Genetics, and Risk Stratification | `dcm_class` | Dilated Cardiomyopathy DCM Definition Diagnosis: LV or BiV Dilation EDD Above 55mm Men or Above 50mm Women Plus Reduced EF Below 50% Without Coronary Artery Disease Hypertension Valvular Explaining; Etiology Workup: Coronary Exclusion: Catheterization or CCTA; Alcohol: Above 80g/day Chronic Toxin; Thyroid TSH Hyperthyroid Hypothyroid; Myocarditis: Cardiac MRI LGE Midwall; Viral Serology Coxsackie B Parvovirus B19 Enterovirus; Autoimmune: ANA ds-DNA SSA SSB ANCA; Sarcoidosis: ACE FDG-PET LGE; Sleep Apnea: Tachycardia-Mediated; LVEF Recovery Post-Rate Control; Peripartum PPCM: Late Pregnancy or Within 5 Months Postpartum; No Prior Heart Disease; Iron; Hemochromatosis: Ferritin Transferrin Saturation; Familial Genetic: 25-50% DCM Genetic; Testing Indicated All DCM Unexplained; TTN Truncation 15-25% Most Common; LMNA Lamin High Arrhythmia Risk ICD Low Threshold; DSP Desmoplakin Scar Predominant; SCN5A Conduction Disease; PLN Phospholamban; RBM20; MYBPC3 Sarcomeric Overlap; MRI: LGE Midwall or Patchy Fibrosis Correlates Fibrosis Arrhythmia Risk; Longitudinal Strain GLS; CMR Gold Standard EF Volume | `select` |  |  |  |
| Dilated Cardiomyopathy: Genetic Evaluation, HFrEF Therapy, and Reverse Remodeling | DCM Diagnosis: Etiology Workup, Genetics, and Risk Stratification | `dcm_genetic` | DCM Genetic Evaluation and Cascade Screening | `text` |  |  |  |
| Dilated Cardiomyopathy: Genetic Evaluation, HFrEF Therapy, and Reverse Remodeling | DCM Treatment: GDMT, Reverse Remodeling Assessment, and Special Considerations | `dcm_treatment` | DCM Treatment Guideline-Directed Medical Therapy GDMT: HFrEF Pillars Same as Ischemic: ACE-I or ARB or ARNI Sacubitril-Valsartan Entresto; Beta-Blocker Carvedilol Metoprolol Succinate Bisoprolol; MRA Spironolactone Eplerenone; SGLT2i Dapagliflozin Empagliflozin; Optimal Target Doses Before Device; GDMT Monitoring: BP HR Electrolytes Renal BNP; Serial Echo Q3-6M First Year Optimize GDMT; Reverse Remodeling EF Recovery: 50-60% NICM Recover EF Above 50% With GDMT; Decision Point: ICD Hold Temporize 90 Days Optimal GDMT; Unless LMNA DSP Arrhythmia High Risk; CRT-D: EF Below 35% LBBB QRS Above 150 NYHA II-IV; Significant Reverse Remodeling CRT; Electrophysiology: Ambulatory Holter ECG Monitor LMNA; EP Study Selected; ICD vs Loop Recorder; Advanced HF: LVAD INTERMACS Score; Bridge to Transplant; Destination Therapy Elderly Comorbid; Heart Transplant Indication; LMNA Specific: ICD Often Before EF Below 35%; AV Block Pacemaker; Conduction Monitor Annually; Peripartum PPCM: Bromocriptine 2.5mg BID 8 Weeks Prolactin Suppression BOARD PERIPARTUM Trial; GDMT Safe Postpartum; ACE Postpartum OK Captopril Enalapril Breast Milk Minimal; Breastfeeding ARNI Avoid Data Lacking; Ivabradine HR Above 70; Hydralazine Nitrates Pregnancy Alternative to ACE; Avoid ACE During Pregnancy | `select` |  |  |  |
| Dilated Cardiomyopathy: Genetic Evaluation, HFrEF Therapy, and Reverse Remodeling | DCM Treatment: GDMT, Reverse Remodeling Assessment, and Special Considerations | `dcm_notes_detail` | DCM Management Plan and Notes: Etiology Established or Idiopathic, Genetic Variant Found Gene Name, Cascade Screening Status, LVEF Trend, LMNA Arrhythmia Plan, GDMT Current Doses ACE ARNI BB MRA SGLT2i, BNP Trend, ICD Decision Timing, CRT Plan QRS LBBB, PPCM Bromocriptine Course, Subsequent Pregnancy Counseling, LVAD Transplant Eligibility Assessment, Coordination Notes | `textarea` |  |  |  |
| Dilated Cardiomyopathy: Genetic Evaluation, HFrEF Therapy, and Reverse Remodeling | DCM Management Notes | `dcm_mgmt_notes` | DCM Management Notes and Cardiology Heart Failure/Electrophysiology LMNA ICD AV Block/Genetics Cardiomyopathy Panel Cascade/Cardiac Imaging Serial Echo CMR/Pharmacy GDMT Uptitration/Reproductive Cardiology PPCM Pregnancy Counseling/Advanced Heart Failure LVAD LVAD Team/Transplant Cardiology/Cardiac Rehab/Nursing Education/Social Work/Coordination Notes | `textarea` |  |  |  |

### Dyslipidemia — `cardiology_dyslipidemia_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Dyslipidemia — Statin Therapy and Lipid Management | Risk Assessment, Statin Therapy, and Non-Statin Agents | `dyslip_f1` | Dyslipidemia Evaluation: LIPID PANEL INTERPRETATION: LDL CHOLESTEROL (Friedewald LDL = TC - HDL - TG/5; Martin-Hopkins More Accurate High TG; Direct LDL Accurate If TG Over 400; OPTIMAL LDL Under 70 Very High Risk ASCVD; Under 55 Extreme Risk or Under 70 If Recent ACS 2019 ESC; STANDARD Goal Under 100; SECONDARY GOAL Non-HDL Under 130 = LDL Goal Plus 30 = Includes Remnants VLDL; ApoB Under 70 mg/dL Correlates LDL Particle Number Better Than LDL-C Some Patients); HDL CHOLESTEROL (Under 40 Men Under 50 Women = Low = CV Risk; Raise Via Exercise Smoking Cessation Alcohol Moderate; Niacin Fibrates Raise HDL But No CV Outcome Benefit); TRIGLYCERIDES (Normal Under 150; Borderline 150-199; High 200-499; Very High Over 500 Pancreatitis Risk; CAUSES Secondary HTG: Uncontrolled DM Hypothyroid Renal Alcohol Obesity Meds Estrogen Beta-Blocker; FAMILIAL HYPERTRIGLYCERIDEMIA LPL Deficiency; TREAT Over 500 Fibrate Omega-3 Fish Oil VASCEPA; Over 1000 Restrict Fat Under 10 pct Fat); CARDIOVASCULAR RISK ASSESSMENT: POOLED COHORT EQUATIONS PCE (10-Year ASCVD Risk; ACC AHA 2019; Under 7.5 pct Low Risk; 7.5-20 pct Intermediate; Over 20 pct High Risk; ENHANCERS: Family Hx Premature ASCVD; LDL Over 160; Metabolic Syndrome; CKD; South Asian; Chronic Inflammatory; ABI Under 0.9; hsCRP Over 2; Lp(a) Over 50 mg/dL; CAC SCORE ZERO = Very Low Risk Statin Defer; CAC 100+ = High Risk STATIN INDICATED; CALCIUM SCORE MESA IMPROVE-IT ACC AHA GUIDELINES; FAMILIAL HYPERCHOLESTEROLEMIA FH (Dutch Lipid Criteria; LDL Over 190 Adult Or LDL Over 130-160 Child; Tendon Xanthomas; Family Hx Early ASCVD; Heterozygous 1/250 Homozygous 1/250K; GENETIC Testing LDLR APOB PCSK9 Variants; TREAT AGGRESSIVELY STATIN MAX + EZETIMIBE PCSK9i LOMITAPIDE MIPOMERSEN HoFH) | `text` |  |  |  |
| Dyslipidemia — Statin Therapy and Lipid Management | Risk Assessment, Statin Therapy, and Non-Statin Agents | `dyslip_f2` | Statin Selection and Non-Statin Agents | `select` |  |  |  |

### EP Study — `ep_study_report_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Electrophysiology Study Report | Indication and Procedure | `indication` | Indication | `select` |  |  |  |
| Electrophysiology Study Report | Indication and Procedure | `procedure_performed` | Procedure(s) Performed | `text` |  |  |  |
| Electrophysiology Study Report | Indication and Procedure | `ablation_success` | Ablation Outcome (if ablation done) | `select` |  |  |  |
| Electrophysiology Study Report | Key Findings | `sinus_node_function` | Sinus Node Function | `select` |  |  |  |
| Electrophysiology Study Report | Key Findings | `av_conduction` | AV Conduction | `select` |  |  |  |
| Electrophysiology Study Report | Key Findings | `arrhythmia_induced` | Arrhythmia(s) Induced / Documented | `text` |  |  |  |
| Electrophysiology Study Report | Post-Procedure Plan | `antiarrhythmic` | Antiarrhythmic Medication (continue / start / stop) | `text` |  |  |  |
| Electrophysiology Study Report | Post-Procedure Plan | `repeat_ablation_planned` | Repeat ablation planned (if incomplete) | `checkbox` |  |  |  |
| Electrophysiology Study Report | Post-Procedure Plan | `icd_recommended` | ICD implant recommended | `checkbox` |  |  |  |
| Electrophysiology Study Report | Post-Procedure Plan | `notes` | Additional Notes and Recommendations | `textarea` |  |  |  |

### EP: Complex Arrhythmia — `cardiology_ep_arrhythmia_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Electrophysiology — Arrhythmia Assessment and Ablation | Arrhythmia Characterization | `arrhythmia_type` | Arrhythmia Type | `select` |  |  |  |
| Electrophysiology — Arrhythmia Assessment and Ablation | Arrhythmia Characterization | `ep_study` | EP Study Findings (inducible tachycardia; cycle length; VA relationship; delta waves; HV interval; substrate voltage mapping; scar characterization; programmed stimulation protocol) | `text` |  |  |  |
| Electrophysiology — Arrhythmia Assessment and Ablation | AF Stroke Prevention | `chadsvasc` | CHA2DS2-VASc Score (CHF=1, HTN=1, Age≥75=2, DM=1, Stroke/TIA=2, Vascular=1, Age 65-74=1, Sex female=1; score ≥2 (males) or ≥3 (females) = anticoagulation recommended) | `number` |  |  |  |
| Electrophysiology — Arrhythmia Assessment and Ablation | AF Stroke Prevention | `anticoagulation` | Anticoagulation for AF | `select` |  |  |  |

### HCM — `cardiology_hcm_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hypertrophic Cardiomyopathy: Obstructive vs Non-Obstructive, SCD Risk, and Medical-Surgical Management | HCM Diagnosis: Echocardiography, Genetic Testing, and SCD Risk Stratification | `hcm_class` | HCM Diagnosis and Classification: Definition: Left Ventricular Wall Thickness Above 15mm Without Secondary Cause; 13-14mm With Genetic or Family History; Echo Assessment: Asymmetric Septal Hypertrophy ASH; Maximal Wall Thickness MWT; LVOT Gradient Resting and Provocation; SAM Systolic Anterior Motion Mitral Valve; Diastolic Dysfunction; MR Mitral Regurgitation; Apical HCM Variant; Types: Obstructive HOCM LVOT Gradient Above 30 Resting or Above 50 Provocable; Non-Obstructive NOCHM LVOT Below 30; Labile Gradient Varies; Mid-Cavity Obstruction; Apical Variant; LV Outflow Measurement: Rest Echo; Valsalva Provocable; Exercise Echo Ambulatory Provocable Stress; CMR Cardiac MRI: Wall Thickness; LGE Late Gadolinium Enhancement Fibrosis Quantity Scar; Extent LGE SCD Risk Above 15%; Gadolinium Enhancement Pattern; SCD Risk Stratification: ESC HCM Risk-SCD Calculator Score: 5-Year Risk; Factors: Max Wall Thickness Above 30mm; LA Diameter Above 45mm; NSVT Non-Sustained VT; Unexplained Syncope; Family History SCD Below 40; LVOT Gradient Above 30; ICD Primary Prevention: 5-Year Risk Above 6% Class IIA Benefit HFA-EHR; Above 4-6% Individualize; High Risk Features: Prior Cardiac Arrest VF VT; ICD Secondary Prevention; Genetics: MYH7 Beta-Myosin Heavy Chain Most Common Severe; MYBPC3 Cardiac Myosin Binding Protein C Most Common Milder; TNNT2 TNNI3 TPM1 MYL2; De Novo 5%; Screen First Degree Relatives Echo Annual If Negative 5Y | `select` |  |  |  |
| Hypertrophic Cardiomyopathy: Obstructive vs Non-Obstructive, SCD Risk, and Medical-Surgical Management | HCM Diagnosis: Echocardiography, Genetic Testing, and SCD Risk Stratification | `hcm_workup` | HCM Workup and Monitoring Protocol | `text` |  |  |  |
| Hypertrophic Cardiomyopathy: Obstructive vs Non-Obstructive, SCD Risk, and Medical-Surgical Management | HCM Treatment: Symptom Management, Mavacamten, and Septal Reduction Procedures | `hcm_treatment` | HCM Treatment: Medical HOCM Symptomatic LVOT Gradient: Beta-Blockers First-Line: Metoprolol Succinate Propranolol Atenolol; Negative Chronotrope Reduce LV Contractility Reduce Obstruction; Titrate Maximum Tolerated; Verapamil Non-DHP Calcium Channel Blocker: Alternative Beta-Blocker Intolerant; Avoid High Gradient Low BP Decompensated; Diltiazem Alternative; Disopyramide Add-On: Class IA Antiarrhythmic; Negative Inotrope Reduce LVOT Gradient; Anticholinergic SE Urinary Retention Dry Mouth; Use With BB or Verapamil Rate Control; Now Often Replaced Mavacamten; Mavacamten Camzyos FDA 2022: Cardiac Myosin Inhibitor; EXPLORER-HCM RCT Symptomatic HOCM; 5-15mg QD Titrate LVOT Gradient; Reduces LVOT Gradient EF-Dependent Titration; EF Must Stay Above 50%; REMS Program Required EF Monitoring; Monthly Echo Until Stable; Not Use Combined Verapamil or Diltiazem CYP Interaction; Significant Drug-Drug Interaction CYP2C19 Metabolized; Aficamten Next-Gen Cardiac Myosin Inhibitor Shorter Half-Life SEQUOIA-HCM; Septal Reduction Procedures Refractory Severe Obstructive HOCM: Surgical Myectomy Morrow Procedure: Excise Hypertrophied Basal Septum; Gold Standard Centers of Excellence; LVOT Gradient Below 10 After; Excellent Durability; Complete Correction; Risk Expert Center Below 1%; Alcohol Septal Ablation ASA: Inject Alcohol Septal Perforator Artery; Less Invasive; More Conduction Block Risk; Complete AV Block Pacemaker 10-20%; Less Durable Than Myectomy; Older Comorbid; Risk: Scar Substrate VT Arrhythmia Controversial; Non-Obstructive HCM: Diastolic Dysfunction: Avoid Vasodilators; Beta-Blocker Reduce HR; Diuretics Careful Low Preload Sensitive; AF Management: Anticoagulation Stroke Risk; Rhythm Control Preferred; Amiodarone; AF Ablation Limited Recurrence | `select` |  |  |  |
| Hypertrophic Cardiomyopathy: Obstructive vs Non-Obstructive, SCD Risk, and Medical-Surgical Management | HCM Treatment: Symptom Management, Mavacamten, and Septal Reduction Procedures | `hcm_notes_detail` | HCM Management Plan and Notes: Obstructive vs Non-Obstructive, Max Wall Thickness, LVOT Gradient Rest and Provocable, SAM Present, LGE Percent CMR, ESC HCM Risk-SCD Score, ICD Status, Beta-Blocker or Verapamil Dose, Mavacamten Dose EF Monitoring, Septal Reduction Plan Myectomy vs ASA, Genetic Result, Family Screening Status, AF Management, Activity Restrictions Counseled, Coordination Notes | `textarea` |  |  |  |
| Hypertrophic Cardiomyopathy: Obstructive vs Non-Obstructive, SCD Risk, and Medical-Surgical Management | HCM Management Notes | `hcm_mgmt_notes` | HCM Management Notes and Cardiology HCM Center of Excellence/Electrophysiology ICD SCD Risk/Cardiac Surgery Myectomy/Interventional Cardiology Alcohol Septal Ablation/Genetics Sarcomere Panel Family Cascade/Cardiac MRI LGE Assessment/Exercise Physiology CPET VO2/Pharmacy Mavacamten REMS CYP2C19 Drug Interactions/Obstetrics High-Risk Pregnancy HCM/Anesthesia Perioperative Management/Coordination Notes | `textarea` |  |  |  |

### HCM Depth — `cardiology_hypertrophic_cardiomyopathy_depth_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| HCM — LVOTO, SAM, Genetics, Medical Therapy, Mavacamten, and Septal Reduction | HCM Diagnosis, Genetics, and LVOTO Mechanisms | `hcm_overview` | HCM Definition (IVS >=15 mm Not Explained by Loading), Sarcomere Gene Mutations (MYH7 and MYBPC3), LVOTO SAM Mechanism, and Clinical Presentation (HYPERTROPHIC CARDIOMYOPATHY (HCM): DEFINITION: MAXIMAL LEFT VENTRICULAR WALL THICKNESS >=15 mm (or >=13 mm in first-degree relative of HCM patient) NOT EXPLAINED by loading conditions; MORPHOLOGY: ASYMMETRIC SEPTAL HYPERTROPHY (most common); APICAL HCM (JAPANESE FORM; ECG: GIANT T-WAVE INVERSIONS); CONCENTRIC; MIDVENTRICULAR OBSTRUCTION; EPIDEMIOLOGY: 1:500 (0.2%); most common inherited cardiac disease; AUTOSOMAL DOMINANT; 50% familial; GENETICS: SARCOMERE PROTEIN MUTATIONS: MYH7 (beta-myosin heavy chain): 25-30%; MBP3/MYBPC3 (myosin binding protein C): 30-40% (most common gene); TNNT2; TNNI3; TROPOMYOSIN (TPM1); MYL2; MYL3; PROGNOSIS BY GENE: MYBPC3 often mild/late-onset; MYH7 often earlier onset; DOUBLE HETEROZYGOUS (2 mutations): worse phenotype; PHENOCOPIES: FABRY DISEASE (GLA; X-linked; renal + skin + corneal involvement; alpha-galactosidase A deficiency; ENZYME REPLACEMENT migalastat/agalsidase); DANON DISEASE (LAMP2; glycogen storage; ECG: delta waves + SVT); FRIEDREICH ATAXIA; NOONAN SYNDROME (RASopathy; PTPN11; also called HCM in infants/children); POMPE DISEASE (glycogen storage); HCM PATHOPHYSIOLOGY: DIASTOLIC DYSFUNCTION: impaired relaxation + increased filling pressures; LVOT OBSTRUCTION (HCM-O): SYSTOLIC ANTERIOR MOTION (SAM): ANTERIOR MITRAL VALVE LEAFLET (AML) dragged into LVOT during systole (Venturi effect + drag forces); SEPTAL HYPERTROPHY + SAM = DYNAMIC OBSTRUCTION; RESTING LVOT GRADIENT: >=30 mmHg (significant); >=50 mmHg (hemodynamically significant; guides intervention); PROVOCABLE GRADIENT: Valsalva; exercise; amyl nitrite; MITRAL REGURGITATION: SAM-related; posterior-directed MR jet; MYOCARDIAL ISCHEMIA: microvascular dysfunction; small vessel disease; CLINICAL: DYSPNEA ON EXERTION; CHEST PAIN (atypical angina); PALPITATIONS; PRESYNCOPE/SYNCOPE; PHYSICAL EXAM: BRISK CAROTID UPSTROKE (bifid); SYSTOLIC MURMUR: DYNAMIC (increases with Valsalva; decreases with squat); DOUBLE APICAL IMPULSE | `text` |  |  |  |
| HCM — LVOTO, SAM, Genetics, Medical Therapy, Mavacamten, and Septal Reduction | HCM Diagnosis, Genetics, and LVOTO Mechanisms | `hcm_risk_scd` | HCM SCD Risk Stratification (AHA/ACC 5-Year SCD Risk Model) and ICD Implantation Indications: NSVT, LV Wall Thickness>=30mm, Family History SCD, Abnormal BP Response, and HCM-RISK-SCD Score | `select` |  |  |  |
| HCM — LVOTO, SAM, Genetics, Medical Therapy, Mavacamten, and Septal Reduction | HCM Medical Therapy, Mavacamten, and Septal Reduction | `hcm_medical` | Beta-Blocker (Metoprolol/Atenolol), Verapamil Alternative, Disopyramide Add-On for LVOTO, and Mavacamten EXPLORER-HCM FDA 2022 (HCM MEDICAL THERAPY: SYMPTOM MANAGEMENT GOAL: reduce LVOT gradient + improve diastolic filling; BETA-BLOCKERS: FIRST-LINE for HCM-O; METOPROLOL SUCCINATE 25-200 mg/day; ATENOLOL 25-100 mg/day; PROPRANOLOL; MECHANISM: NEGATIVE CHRONOTROPY + INOTROPY; reduces LVOT gradient by decreasing contractility + prolonging diastole; START LOW TITRATE SLOW; AVOID: VASODILATING BETA-BLOCKERS (carvedilol; labetalol) — can worsen obstruction; DIHYDROPYRIDINE CALCIUM CHANNEL BLOCKERS (AVOID — cause vasodilation + reflex tachycardia); VERAPAMIL: ALTERNATIVE if beta-blocker not tolerated; NON-DIHYDROPYRIDINE CCB; 120-480 mg/day; LUSITROPIC: improves diastolic function; AVOID in severe obstruction + elevated LV filling pressures (risk of pulmonary edema); DILTIAZEM: similar considerations; DISOPYRAMIDE (NORPACE): CLASS Ia ANTIARRHYTHMIC; ADDED TO BETA-BLOCKER or verapamil in persistent LVOTO; MECHANISM: NEGATIVE INOTROPE; reduces SAM + gradient; DOSE: 100-150 mg QID (or extended release); MONITORING: QTc (pyridinium QT prolongation); ANTICHOLINERGIC EFFECTS (urinary retention; constipation; dry mouth; blurred vision); AVOID IF QTc >480 ms; MAVACAMTEN (CAMZYOS): FDA April 2022 for HCM-O with NYHA II-III; CARDIAC MYOSIN INHIBITOR: inhibits ATPase of beta-myosin; reduces cross-bridge cycling; LOWERS LVOT GRADIENT; REDUCES SAM; REDUCES MITRAL REGURGITATION; EXPLORER-HCM TRIAL (NEJM 2020; 251 patients): mavacamten vs. placebo; PEAK VO2 improved +1.4 mL/kg/min; LVOT GRADIENT: -47 vs. +1 mmHg; 37% achieved primary composite endpoint vs. 17%; NYHA CLASS IMPROVEMENT; FDA INDICATION: symptomatic HCM-O (LVOT resting or provoked >=50 mmHg); NYHA II-III; DOSE: 2.5-15 mg QD (echocardiogram-guided titration based on LVOT gradient + LVEF); REMS PROGRAM (CAMZYOS REMS): mandatory ECHO monitoring; LVEF MONITORING: HOLD if LVEF <50%; DRUG INTERACTIONS: CYP2C19 + CYP3A4 substrate; AVOID with: moderate/strong CYP2C19 or CYP3A4 inhibitors; CYP2C19 POOR METABOLIZERS: different dosing; AFICAMTEN: second-generation cardiac myosin inhibitor; SEQUOIA-HCM Phase 3 (NEJM 2024): aficamten vs. placebo; 12-week treatment; PEAK VO2 +1.8 mL/kg/min; LVOT gradient -47 mmHg; ACMR-3 trial extension; FDA submission expected | `text` |  |  |  |
| HCM — LVOTO, SAM, Genetics, Medical Therapy, Mavacamten, and Septal Reduction | HCM Medical Therapy, Mavacamten, and Septal Reduction | `septal_reduction` | Alcohol Septal Ablation (TASH/ASA) vs. Surgical Myectomy (Morrow Procedure): Indications, Patient Selection, Procedural Details, and Long-Term Outcomes | `select` |  |  |  |

### HCM Management — `cardiology_hcm_management_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hypertrophic Cardiomyopathy: Gradient Assessment, SCD Risk, and Septal Reduction | HCM Diagnosis, Genetics, and Phenotypic Assessment | `hcm_echo` | HCM Echocardiographic Criteria and LVOT Gradient | `select` |  |  |  |
| Hypertrophic Cardiomyopathy: Gradient Assessment, SCD Risk, and Septal Reduction | HCM Diagnosis, Genetics, and Phenotypic Assessment | `hcm_genetics` | HCM Genetics: Sarcomere Mutations and Family Screening — GENETICS: autosomal dominant; 50% penetrance variable; pathogenic sarcomere gene mutations in 60% of familial HCM; MYH7 (beta-myosin heavy chain: 30-40%; associated with more severe hypertrophy + poor prognosis variants); MYBPC3 (myosin-binding protein C: 30-40%; more benign; older age of onset; may not manifest fully); TNNT2 (troponin T: 5%; less hypertrophy but high SCD risk); TNNI3 (troponin I); TPM1 (tropomyosin); MYL2/MYL3 (regulatory myosin light chain); ACTC1 (cardiac actin); GENETIC TESTING INDICATIONS: clinically affected patient; pre-symptomatic family screening once proband identified; INTERPRETATION: pathogenic/likely pathogenic variants = inform cascade screening; VUS (variant of uncertain significance: common; do NOT use for clinical decisions without phenotypic correlation); FAMILY SCREENING: first-degree relatives of index case: clinical echo + ECG evaluation Q12-18 months (children) until end of growth; adults: Q12-24 months; genetic cascade testing: if proband pathogenic variant known; SARCOMERE-NEGATIVE HCM (40%): phenocopy conditions (infiltrative: Fabry disease alpha-gal A; Danon disease LAMP2; PRKAG2 glycogen storage; Pompe disease; amyloidosis; Noonan/RASopathies: ptosis + NS features; Friedreich ataxia); genetics panel: alpha-galactosidase A (Fabry); acid alpha-glucosidase (Pompe); LAMP2; PRKag2; NF1; PTPN11; cardiac amyloid (ATTR vs AL): wild-type ATTR in elderly men with LVH + carpal tunnel + bilateral biceps rupture; screen with pyrophosphate scan (Tc-99m PYP) | `text` |  |  |  |
| Hypertrophic Cardiomyopathy: Gradient Assessment, SCD Risk, and Septal Reduction | HCM Medical Therapy, SCD Risk Stratification, and Septal Reduction | `hcm_medical` | HCM Medical Therapy: Beta-Blockers, Mavacamten, and Aficamten | `select` |  |  |  |
| Hypertrophic Cardiomyopathy: Gradient Assessment, SCD Risk, and Septal Reduction | HCM Medical Therapy, SCD Risk Stratification, and Septal Reduction | `hcm_septal` | SCD Risk and Septal Reduction: Myectomy vs ASA vs ICD | `select` |  |  |  |
| Hypertrophic Cardiomyopathy: Gradient Assessment, SCD Risk, and Septal Reduction | HCM Medical Therapy, SCD Risk Stratification, and Septal Reduction | `hcm_notes` | HCM Management Notes and Cardiology/CT Surgery/Electrophysiology/Genetics/CMR/Nuclear Medicine Coordination | `textarea` |  |  |  |

### HCM Management — `cardiology_hcm_management2_cf`

Screen: 1 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hypertrophic Cardiomyopathy: Obstructive, Non-Obstructive, and Genetic Management | Diagnosis, Phenotyping, and Genetic Testing | `hcm_dx` | HCM Diagnosis and Phenotype | `select` |  |  |  |
| Hypertrophic Cardiomyopathy: Obstructive, Non-Obstructive, and Genetic Management | Diagnosis, Phenotyping, and Genetic Testing | `hcm_scd_risk` | Sudden Cardiac Death Risk Stratification | `select` |  |  |  |
| Hypertrophic Cardiomyopathy: Obstructive, Non-Obstructive, and Genetic Management | Medical Therapy and Septal Reduction | `hcm_medical` | Medical Management of HOCM | `select` |  |  |  |
| Hypertrophic Cardiomyopathy: Obstructive, Non-Obstructive, and Genetic Management | Medical Therapy and Septal Reduction | `hcm_invasive` | Septal Reduction Therapy | `select` |  |  |  |
| Hypertrophic Cardiomyopathy: Obstructive, Non-Obstructive, and Genetic Management | Medical Therapy and Septal Reduction | `hcm_hf` | Non-Obstructive HCM and Advanced Heart Failure | `select` |  |  |  |
| Hypertrophic Cardiomyopathy: Obstructive, Non-Obstructive, and Genetic Management | Medical Therapy and Septal Reduction | `hcm_notes` | HCM Management Notes and Cardiology/Electrophysiology/Cardiac Surgery/Genetics/Sports Medicine Coordination | `textarea` |  |  |  |

### HF Clinic — `heart_failure_clinic_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Heart Failure Clinic | Status Assessment | `nyha_class` | NYHA Class | `select` |  |  |  |
| Heart Failure Clinic | Status Assessment | `dry_weight` | Dry Weight (kg) | `number` |  |  |  |
| Heart Failure Clinic | Status Assessment | `current_weight` | Current Weight (kg) | `number` |  |  |  |
| Heart Failure Clinic | Status Assessment | `weight_change` | Weight Change Since Last Visit (kg) | `number` |  |  |  |
| Heart Failure Clinic | Status Assessment | `edema_grade` | Edema Grade | `select` |  |  |  |
| Heart Failure Clinic | Status Assessment | `jvp_elevated` | JVP elevated | `checkbox` |  |  |  |
| Heart Failure Clinic | Labs / Biomarkers | `bnp_or_ntprobnp` | Biomarker Type | `select` |  |  |  |
| Heart Failure Clinic | Labs / Biomarkers | `biomarker_value` | Biomarker Value | `number` |  |  |  |
| Heart Failure Clinic | Labs / Biomarkers | `creatinine` | Creatinine (mg/dL) | `number` |  |  |  |
| Heart Failure Clinic | Labs / Biomarkers | `potassium` | Potassium (mEq/L) | `number` |  |  |  |
| Heart Failure Clinic | GDMT Review | `acei_arb_arni` | RAAS Blocker | `select` |  |  |  |
| Heart Failure Clinic | GDMT Review | `beta_blocker` | Beta-blocker | `select` |  |  |  |
| Heart Failure Clinic | GDMT Review | `mra` | MRA | `select` |  |  |  |
| Heart Failure Clinic | GDMT Review | `sglt2` | SGLT2i | `select` |  |  |  |
| Heart Failure Clinic | GDMT Review | `icd_crt` | ICD/CRT in place or planned | `checkbox` |  |  |  |
| Heart Failure Clinic | GDMT Review | `plan` | Plan and Medication Changes | `textarea` |  |  |  |

### HFpEF — `cardiology_heart_failure_preserved_ef_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| HFpEF — Classification, Evidence-Based Therapy, and Monitoring | HFpEF Diagnosis and Classification | `hfpef_f1` | HFpEF Definition: LVEF 50%+ Plus Signs/Symptoms HF Plus Diastolic Dysfunction or Elevated BNP; H2FPEF Score (Heavy BMI>30; Hypertensive 2+; Atrial fibrillation; Pulmonary HTN PASP>35; Elderly>60; Filling Pressure E/e>9) Discriminates from Non-Cardiac Dyspnea; Phenotypes: Obese-HFpEF; HTN-HFpEF; HFpEF-AF; CKD-HFpEF; HFpEF-Amyloid (Cardiac Amyloidosis Red Flags: Carpal Tunnel; Spinal Stenosis; Low QRS Voltage; Sparkling Myocardium; Check TTR Gene + 99mTc-PYP Scan; Tafamidis if TTR-CA) | `text` |  |  |  |
| HFpEF — Classification, Evidence-Based Therapy, and Monitoring | HFpEF Diagnosis and Classification | `hfpef_f2` | HF Classification: HFrEF LVEF Under 40% (ACEi/ARBi/ARNI/BB/MRA/SGLT2i ALL Class I); HFmrEF LVEF 40-49% (Mildly Reduced; SGLT2i and MRA Evidence Emerging; Treat Like HFrEF if Borderline); HFpEF LVEF 50%+ (Only SGLT2i Class I 2022); Universal Diuretics for Congestion; ECHO Key Parameters: E/e Ratio; Lateral e Prime; LAVI; TR Velocity; LV Wall Thickness; LA Size | `text` |  |  |  |
| HFpEF — Classification, Evidence-Based Therapy, and Monitoring | HFpEF Therapy and Monitoring | `hfpef_f3` | SGLT2 Inhibitors HFpEF Class I 2022: Empagliflozin 10 mg Daily EMPEROR-Preserved (38% CV Death/HHF Reduction); Dapagliflozin 10 mg Daily DELIVER (18% CV Death/Worsening HF Reduction); Both Regardless of Diabetes Status; Benefit Consistent in LVEF 50-60% and Over 60%; Initiate if eGFR Above 20-25; Monitor BP and Creatinine | `select` |  |  |  |
| HFpEF — Classification, Evidence-Based Therapy, and Monitoring | HFpEF Therapy and Monitoring | `hfpef_f4` | HFpEF Management: Diuretics Furosemide/Torsemide for Congestion Volume Status; BP Control Target Under 130/80 (Cornerstone); AF Rate Control; Weight Reduction Obese Phenotype (Exercise Training Class I; Cardiac Rehab); Sleep Apnea Screening CPAP; CKD Management Cardiorenal Syndrome; Avoid NSAIDs; Ivabradine if HR Elevated; Spironolactone 25-50 mg Reasonable (IIb) Symptomatic Despite Diuretics; Monitoring BNP/NT-proBNP; Renal Function Q3-6 Months | `text` |  |  |  |

### HFpEF — `cardiology_hfpef_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| HFpEF: Diagnosis, Phenotyping, SGLT2i DELIVER, MRA TOPCAT, Sacubitril-Valsartan PARAGON, Congestion Management | HFpEF Diagnosis: Echo Parameters, H2FPEF HFA-PEFF Score, Comorbidity Phenotyping, and Invasive Hemodynamics | `hfpef_class` | HFpEF Classification: Definition: LVEF 50 or More; Symptoms or Signs Heart Failure; Evidence Structural Functional Cardiac Abnormality; Elevated Natriuretic Peptide BNP or NT-proBNP; Prior Terminology Diastolic Heart Failure; Echocardiography: Grade I Diastolic Dysfunction E/e Prime Ratio 8-14; Grade II E/e Prime Above 15 or Mean Above 14; LAVI Left Atrial Volume Index Above 34 mL/m2; TR Velocity Above 2.8 m/s; Relative Wall Thickness Concentric vs Eccentric; Left Ventricular Hypertrophy LVH; E/A Ratio; Deceleration Time; GLS Global Longitudinal Strain Below Minus 16%; Diagnostic Scores: H2FPEF Score: Heavy Obesity BMI Above 30 2pts; HTN on 2 Drugs 1pt; Atrial Fibrillation Paroxysmal or Persistent 3pts; Pulmonary Hypertension 1pt; Elder Age Above 60 1pt; Filling Pressure Echo E/e Prime Above 9 1pt; Score Above 5 High Probability 95%; Score 2-5 Intermediate; Score 0-1 Low 10%; HFA-PEFF Score: Also Used Europe; Four Domains P Functional E Morphological F Biomarkers BNP Above 125 NT-proBNP Above 375 AF Separately; Score Above 5 HFpEF; Hemodynamic Testing: Exercise Hemodynamics Provocative Test If Intermediate; PCWP Above 15 Rest or Above 25 Exercise; RHC Right Heart Catheterization Gold Standard Definitive; Phenotyping: Obese Adipose Phenotype; Hypertension LVH Phenotype; Atrial Fibrillation Phenotype; Pulmonary Hypertension Mixed Group 2 3; Coronary Artery Disease; Amyloidosis ATTR Wild-Type Senile Tafamidis; HFmrEF 40-49%; HFrecEF | `select` |  |  |  |
| HFpEF: Diagnosis, Phenotyping, SGLT2i DELIVER, MRA TOPCAT, Sacubitril-Valsartan PARAGON, Congestion Management | HFpEF Diagnosis: Echo Parameters, H2FPEF HFA-PEFF Score, Comorbidity Phenotyping, and Invasive Hemodynamics | `hfpef_workup` | HFpEF Workup and Phenotype Assessment | `text` |  |  |  |
| HFpEF: Diagnosis, Phenotyping, SGLT2i DELIVER, MRA TOPCAT, Sacubitril-Valsartan PARAGON, Congestion Management | HFpEF Treatment: SGLT2i DELIVER, MRA TOPCAT, ARNi PARAGON, Phenotype-Directed, and Volume Management | `hfpef_treatment` | HFpEF Treatment Evidence-Based: SGLT2 Inhibitors Class 2a ACC/AHA: Dapagliflozin 10mg DELIVER Trial HFpEF HFmrEF: Reduced CV Death or Worsening HF 18% Relative; Empagliflozin 10mg EMPEROR-Preserved: CV Death or HF Hospitalization 21%; Both FDA Approved HFpEF; Cardiorenal Protection; Also Diabetes CKD Benefit; MRA Mineralocorticoid Receptor Antagonist: Spironolactone 25-50mg TOPCAT Trial Borderline Positive Regional Heterogeneity; Americas Benefit Subgroup; Eplerenone Similar; Class 2b; Serum Potassium Monitor; eGFR Above 30; ARNi Sacubitril-Valsartan LCZ696 Entresto: PARAGON-HF Borderline P Value 0.059; LVEF 45-57% Subgroup Possible Benefit; Women More Benefit; Primary Endpoint Missed; Class 2b or Lower; ACE ARB For Comorbidities HTN DM; Not Proven HFpEF Specific; Rate Control AF Beta-Blocker Digoxin Avoid Beta-Blocker If Pure HFpEF No CAD No AFib; Diuretic Decongestion: Loop Furosemide Torsemide Torasemide; Weight Daily Monitoring; Aldactone Add If Resistant; Volume Homeostasis Target Euvolemia; Intravenous Diuresis Hospital; Phenotype-Specific: Obese HFpEF: GLP-1 Semaglutide STEP-HFpEF Trial NEJM 2023; 2.4mg SC Weekly; 13.3% Weight Loss vs 2.6%; 6MWT Plus 20M; KCCQ Plus 7.8 Points; AF HFpEF: Rate Control NYHA Benefit; Rhythm Control Possibly Better; Amyloidosis ATTR Tafamidis Vyndaqel Vyndamax 61-80mg Daily; Diflunisal; Acoramidis CHAMP-HF; Hereditary ATTR Patisiran Vutrisiran siRNA; IRON Deficiency: Ferric Carboxymaltose FAIR-HFpEF IRONMAN; IV Iron If Ferritin Below 100 or TSAT Below 20%; CardioMEMS PA Hemodynamic Monitor FDA PA Pressure Guided Diuresis CHAMPION | `select` |  |  |  |
| HFpEF: Diagnosis, Phenotyping, SGLT2i DELIVER, MRA TOPCAT, Sacubitril-Valsartan PARAGON, Congestion Management | HFpEF Treatment: SGLT2i DELIVER, MRA TOPCAT, ARNi PARAGON, Phenotype-Directed, and Volume Management | `hfpef_notes_detail` | HFpEF Management Plan and Notes: LVEF Percent, H2FPEF Score, BNP NT-proBNP Level, NYHA Class, 6MWT Distance, Phenotype Obese AF Amyloid HTN, Dapagliflozin Empagliflozin Plan, Spironolactone Eplerenone, Sacubitril-Valsartan PARAGON, Loop Diuretic Dose and Target, GLP-1 Semaglutide Plan, Tafamidis ATTR, IV Iron, CardioMEMS Candidacy, Daily Weight Protocol, Coordination Notes | `textarea` |  |  |  |
| HFpEF: Diagnosis, Phenotyping, SGLT2i DELIVER, MRA TOPCAT, Sacubitril-Valsartan PARAGON, Congestion Management | HFpEF Management Notes | `hfpef_mgmt_notes` | HFpEF Management Notes and Cardiology Heart Failure Specialist/Echocardiography Lab Diastology Protocol/Cardiac MRI Amyloid Sarcoid HCM Infiltrative/Sleep Medicine OSA CPAP/Endocrinology Diabetes GLP-1/Obesity Medicine Bariatric Weight Management/Nephrology CKD Cardiorenal/Pulmonology PH Group 2 3/Electrophysiology AF Ablation/Cardiac Rehabilitation/Pharmacy SGLT2i Drug Interactions/Nutrition Sodium Fluid Restriction/Coordination Notes | `textarea` |  |  |  |

### HFpEF — `cardiology_hfpef_management_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| HFpEF: Diagnosis, Phenotyping, SGLT2i, and Comorbidity Management | HFpEF Diagnosis, Classification, and Diastolic Dysfunction Assessment | `hfpef_class` | HFpEF: EF Above 50%; Signs/Symptoms HF; BNP Elevation; LVH Diastolic Dysfunction; Obesity Hypertension T2DM AF Comorbidities; ASE/EACVI Diastolic Function Grading I-IV; H2FPEF Score 0-9 Obesity BMI LV Hypertrophy Atrial Fibrillation HTN Filling Pressure E/e Ratio; HFmrEF EF 40-49% | `select` |  |  |  |
| HFpEF: Diagnosis, Phenotyping, SGLT2i, and Comorbidity Management | HFpEF Diagnosis, Classification, and Diastolic Dysfunction Assessment | `hfpef_treatment` | HFpEF Treatment: SGLT2i: Empagliflozin EMPEROR-Preserved NEJM 2021 HR 0.79 CV Death+HF Hospitalization; Dapagliflozin DELIVER NEJM 2022 HR 0.82 Including HFmrEF; Sacubitril-Valsartan PARAGON-HF Neutral Overall; Spironolactone TOPCAT Positive HF Hospitalization Trend; GLP-1 Semaglutide STEP-HFpEF NEJM 2023 Weight+Symptoms -- HFPEF PHARMACOTHERAPY: SGLT2 INHIBITORS [MAJOR BREAKTHROUGH 2021-2022; FIRST PROVEN THERAPIES HFpEF]: EMPAGLIFLOZIN [JARDIANCE; EMPEROR-PRESERVED NEJM 2021: 5,988 HFpEF+HFmrEF [EF ABOVE 40%] PATIENTS: EMPAGLIFLOZIN 10 mg vs PLACEBO: PRIMARY [CV DEATH+HF HOSPITALIZATION]: HR 0.79 [21% REDUCTION]; HF HOSPITALIZATION 29% REDUCTION; CV DEATH NEUTRAL; BENEFIT ACROSS EF RANGE; FDA 2021 HFrEF 2022 HFpEF; DOSE 10 mg QD; GFR ABOVE 20 START; CONTINUE REGARDLESS GFR CHANGE ONCE STARTED]; DAPAGLIFLOZIN [FORXIGA; DELIVER NEJM 2022: 6,263 HFpEF+HFmrEF [EF ABOVE 40%] PATIENTS: DAPAGLIFLOZIN 10 mg vs PLACEBO: PRIMARY [CV DEATH+WORSENING HF+HF HOSPITALIZATION]: HR 0.82 [18% REDUCTION]; BENEFIT ACROSS ALL EF SUBGROUPS; WORSENING HF EVENT REDUCTION; FDA 2022 HFpEF; COMBINED EMPEROR+DELIVER META-ANALYSIS: HR 0.77]; MECHANISM SGLT2i [HFpEF]: REDUCE INTERSTITIAL FLUID [OSMOTIC DIURESIS; NATRIURESIS]; IMPROVE ENERGY METABOLISM [SHIFT TO KETONE BODIES]; REDUCE PRELOAD/AFTERLOAD; REDUCE ATRIAL FIBRILLATION BURDEN; RENAL PROTECTION; SACUBITRIL-VALSARTAN [ENTRESTO; ARNI; PARAGON-HF NEJM 2019: HFpEF EF ABOVE 45%: SACUBITRIL-VALSARTAN vs VALSARTAN: PRIMARY [CV DEATH+HF HOSPITALIZATION]: HR 0.87 [13% REDUCTION; P=0.059 JUST MISSED SIGNIFICANCE]; SUBGROUP BENEFIT WOMEN+EF 45-57%; STILL GUIDELINE CONSIDERATION EF 41-60% 2022 AHA; DOSE 49/51 mg BID TITRATE TO 97/103 mg BID; HOLD ACEi 36H BEFORE STARTING]; DIURETICS [SYMPTOM RELIEF; CONGESTION MANAGEMENT; NOT DISEASE-MODIFYING IN HFpEF; USE LOWEST DOSE FOR EUVOLEMIA; FUROSEMIDE 20-80 mg [OUTPATIENT]; TORSEMIDE [BETTER BIOAVAILABILITY; TORASEMIDE]; METOLAZONE [ADD-ON DIURETIC RESISTANCE]; SPIRONOLACTONE/EPLERENONE [TOPCAT NEJM 2014: SPIRONOLACTONE 15-45 mg QD vs PLACEBO HFpEF: PRIMARY [CV DEATH+HF HOSPITALIZATION+ABORTED CARDIAC ARREST]: HR 0.89 [P=0.14]; SUBGROUP ANALYSIS AMERICAS [ENROLLED GENUINE HFpEF] POSITIVE TREND; GUIDELINE CONSIDERATION FOR SYMPTOM RELIEF; WATCH K+ CKD]; GLP-1 RECEPTOR AGONISTS [OBESITY-HFpEF; WEIGHT LOSS CENTRAL]: SEMAGLUTIDE [WEGOVY; STEP-HFpEF NEJM 2023: OBESE HFpEF [BMI ABOVE 30]: SEMAGLUTIDE 2.4 mg QW vs PLACEBO: KCCQ SCORE +16.6 vs +8.7 POINTS; 6MWT +20.3 vs +1.2 m; WEIGHT LOSS 13.3% vs 2.6%; HF SYMPTOMS MARKEDLY IMPROVED; FDA HFpEF INDICATION NOT YET BUT EXPECTED; PREFERRED OBESITY-HFpEF; ALSO TIRZEPATIDE SUMMIT TRIAL POSITIVE 2024]; BLOOD PRESSURE CONTROL [TARGET BELOW 130/80; REDUCE CARDIAC STRESS; ACEi/ARB]; RATE CONTROL AF [BELOW 110 AT REST; DIGOXIN ADD-ON RENAL]; ANEMIA/IRON [IV IRON DEFICIENCY IF TSAT BELOW 20%]; CARDIAC REHAB [EXERCISE TRAINING IMPROVES VO2MAX SYMPTOMS HFpEF; GUIDELINE SUPPORTED] | `text` |  |  |  |
| HFpEF: Diagnosis, Phenotyping, SGLT2i, and Comorbidity Management | HFpEF Management Notes | `hfpef_mgmt_notes` | HFpEF Management Notes and Cardiology/Heart Failure/Endocrinology/Nephrology/Pharmacy/Cardiac Rehab/Dietitian/Nursing/Palliative Care Coordination | `textarea` |  |  |  |

### HFpEF (Advanced) — `cardiology_hfpef_depth_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| HFpEF — SGLT2i, Spiro, GLP-1, AF, and Phenotype Therapy | HFpEF Diagnosis and Phenotyping | `hfpef_dx` | HFpEF Diagnosis, H2FPEF Score, and Phenotypes (HFpEF DEFINITION: heart failure with PRESERVED ejection fraction; EF >=50%; PREVALENCE: 50% of all HF; rising (hypertension + diabetes + obesity epidemic); DIAGNOSIS: clinical (symptoms + signs) + ELEVATED BNP/NT-proBNP + ELEVATED FILLING PRESSURES (echo or invasive); EF >=50%; H2FPEF SCORE: probability of HFpEF vs. non-cardiac dyspnea; COMPONENTS: Heavy (BMI >30): 2 points; Hypertension (HTN): 1; Atrial Fibrillation: 3; Pulmonary HTN (echo PASP >35): 1; Elder (age >60): 1; Filling pressure (E/e >9): 1; SCORE 0-9: >=6 = very high probability HFpEF; 1-5 = intermediate; 0 = low; HFA-PEFF DIAGNOSTIC ALGORITHM (ESC): STEP 1: history/ECG/echo/BNP; STEP 2: functional/morphological echocardiographic changes (e prime <7, E/e >=15, LA volume >=34 mL/m2, LVH, PASP >35); STEP 3: EXERCISE TESTING if intermediate (peak E/e >=15 or PASP >=60 on exercise); INVASIVE: LVEDP >16 mmHg or PCWP >15 (resting) or >25 (exercise); HFpEF PHENOTYPES: OBESE (BMI >30): SGLT2i + GLP-1; weight loss; HYPERTENSION-DRIVEN: BP control; ATRIAL FIBRILLATION: rate or rhythm control; CORONARY ARTERY DISEASE: revascularization; PULMONARY HYPERTENSION: treat PH; AMYLOID: rule out ATTR/AL; RARE CAUSES: hemochromatosis, sarcoid, constrictive pericarditis (mimics HFpEF) | `text` |  |  |  |
| HFpEF — SGLT2i, Spiro, GLP-1, AF, and Phenotype Therapy | HFpEF Diagnosis and Phenotyping | `biomarkers` | BNP Thresholds and Invasive Hemodynamics | `select` |  |  |  |
| HFpEF — SGLT2i, Spiro, GLP-1, AF, and Phenotype Therapy | Evidence-Based Treatment for HFpEF | `sglt2_hfpef` | SGLT2 Inhibitors and Spironolactone in HFpEF (SGLT2 INHIBITORS FOR HFpEF: EMPEROR-PRESERVED TRIAL: empagliflozin 10 mg QD vs. placebo; EF >40%; PRIMARY ENDPOINT: CV death + HF hospitalization: 13.8% vs. 17.1% (21% RRR); EMPAGLIFLOZIN REDUCES HF HOSPITALIZATIONS significantly; EF RANGE: even EF 41-49% (HFmrEF: mid-range) + EF >50%; HFpEF = EF >=50%; FDA 2022: empagliflozin for symptomatic chronic HF (any EF); DELIVER TRIAL: dapagliflozin in HFmrEF + HFpEF (EF >40%): 18% RRR in primary endpoint; FDA 2023: dapagliflozin for HF regardless of EF; MECHANISM HFpEF: reduces interstitial fibrosis; reduces inflammation; diuresis (osmotic); weight loss; reduces epicardial fat; improves cardiac energetics; DOSE: empagliflozin 10 mg QD; dapagliflozin 10 mg QD; eGFR >=20 (cardiovascular indication); SPIRONOLACTONE IN HFpEF: TOPCAT TRIAL: mixed results (global); US subgroup: significant benefit; ALDO-DHF: improved E/e and VO2; dose 25-50 mg QD; MONITOR: K+ (hyperkalemia risk); creatinine; use eplerenone if gynecomastia; BENEFITS: reduce fibrosis (anti-aldosterone); improve diastolic function; DIURETICS: LOOP DIURETICS: symptom relief (congestion); furosemide 20-40 mg; titrate to euvolemia; NO MORTALITY BENEFIT; TORSEMIDE (torasemide): anti-fibrotic > furosemide in HF (TRANSFORM-HF: torsemide = furosemide in outcomes); NITRATES: RELAX-AHF: isosorbide mononitrate ineffective in HFpEF; avoid in HFpEF without congestion | `text` |  |  |  |
| HFpEF — SGLT2i, Spiro, GLP-1, AF, and Phenotype Therapy | Evidence-Based Treatment for HFpEF | `glp1_af_hfpef` | GLP-1 Agonists, AF Management, and Phenotype-Guided Care | `select` |  |  |  |

### HFpEF (SGLT2 / EMPEROR) — `cardiology_heart_failure_hfpef_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| HFpEF — Diagnosis, Phenotyping, and Guideline Therapy | HFpEF Diagnosis and H2FPEF Score | `h2fpef` | H2FPEF Score (Redfield 2018; discriminates HFpEF from non-cardiac dyspnea; H = Heavy (BMI >30): 2 pts; H = Hypertensive (>=2 antihypertensives): 1 pt; A = Atrial fibrillation: 3 pts; P = Pulmonary hypertension (Doppler PA systolic >35 mmHg): 1 pt; E = Elder (age >60): 1 pt; F = Filling pressures elevated (E/e ratio >9): 1 pt; total 0-9; score >=6 = HFpEF (probability >90%); score <=1 = very unlikely HFpEF (probability <10%); exercise echocardiography (exercise stress echo) for intermediate scores: E/e ratio >=15 and TR velocity >=3.4 m/s with exercise = exercise-inducible HFpEF; HFpEF = EF >=50% + signs/symptoms of HF + elevated filling pressures (BNP/NT-proBNP elevated; E/e ratio >15 at rest; PCWP >12 at rest)) | `text` |  |  |  |
| HFpEF — Diagnosis, Phenotyping, and Guideline Therapy | HFpEF Diagnosis and H2FPEF Score | `phenotypes` | HFpEF Phenotypes and Comorbidity Burden | `select` |  |  |  |
| HFpEF — Diagnosis, Phenotyping, and Guideline Therapy | SGLT2 Inhibitors and Emerging Therapies | `sglt2_hfpef` | SGLT2 Inhibitors for HFpEF (EMPEROR-Preserved (empagliflozin): 21% reduction HHF + CV death; statistically significant; DELIVER (dapagliflozin): 18% reduction; both trials: consistent across EF range from 41-65%+; HFpEF benefit driven by HHF reduction; CV death reduction marginal; FDA approved empagliflozin + dapagliflozin for HFpEF; dosing: empagliflozin 10 mg QD; dapagliflozin 10 mg QD; start at eGFR >=20; monitor: eGFR (transient 2-3 ml/min/1.73m2 decline), DKA (rare in T2DM; rare in non-diabetics — euglycemic DKA), urogenital infections, volume depletion; STOP before major surgery + prolonged fasting; ADA 2024: SGLT2i for CKD/HF independent of A1c) | `text` |  |  |  |
| HFpEF — Diagnosis, Phenotyping, and Guideline Therapy | SGLT2 Inhibitors and Emerging Therapies | `diuretics` | Diuretics and Congestion Management in HFpEF | `select` |  |  |  |

### HFrEF — `cardiology_hfref_management_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| HFrEF: Guideline-Directed Medical Therapy, Device Therapy, and Advanced Heart Failure | HFrEF Diagnosis, Classification, and Biomarkers | `hfref_class` | LVEF Below 40%; NYHA I-IV; HFpEF LVEF Above 50 HFmrEF 41-49; BNP Above 100 NT-proBNP Above 300 Acute; Echocardiogram Systolic Dysfunction; Cardiomyopathy Etiology; ACCF/AHA Stage A-D | `select` |  |  |  |
| HFrEF: Guideline-Directed Medical Therapy, Device Therapy, and Advanced Heart Failure | HFrEF Diagnosis, Classification, and Biomarkers | `hfref_gdmt` | HFrEF GDMT Four Pillars: ACEi/ARB/ARNI PARADIGM-HF, Beta-Blocker MERIT-HF Carvedilol, MRA RALES/EMPHASIS, SGLT2i DAPA-HF/EMPEROR-Reduced; Titrate to Target Doses; Ivabradine SHIFT; Hydralazine/Nitrates A-HeFT -- HFrEF GDMT [GUIDELINE-DIRECTED MEDICAL THERAPY; ACC/AHA 2022 CLASS I]: FOUR PILLARS [ALL REDUCE MORTALITY; TITRATE TO TARGET DOSES]: PILLAR 1 - ACEi/ARB/ARNI: ACEi [ENALAPRIL; SOLVD NEJM 1991: ENALAPRIL vs PLACEBO IN HFrEF: OS REDUCTION 16%; CAPTOPRIL; LISINOPRIL; START LOW; TITRATE; HYPERKALEMIA; DRY COUGH; SCR RISE BELOW 30% ACCEPTABLE; AVOID IN PREGNANCY; BILATERAL RAS]; ARB [LOSARTAN; VALSARTAN; IF ACEi INTOLERANT [COUGH; ANGIOEDEMA]; CHARM-ALTERNATIVE NEJM 2003: CANDESARTAN IMPROVED OUTCOMES]; SACUBITRIL/VALSARTAN [ARNI; ENTRESTO; PARADIGM-HF NEJM 2014: ARNI vs ENALAPRIL: CV DEATH/HF HOSPITALIZATION 21.8% vs 26.5%; HR 0.80; MORTALITY 17.0% vs 19.8%; SUPERIOR TO ACEi; FIRST-LINE PREFERRED]; MUST WASHOUT ACEi 36H BEFORE STARTING ARNI [ANGIOEDEMA RISK]; TARGET DOSE 97/103 mg BID; START 24/26 mg BID; PILLAR 2 - BETA-BLOCKERS [EVIDENCE-BASED ONLY; CARVEDILOL; METOPROLOL SUCCINATE; BISOPROLOL]: CARVEDILOL [ALPHA-1 + BETA; COPERNICUS NEJM 2001: SEVERE HF; MORTALITY REDUCTION 35%]; METOPROLOL SUCCINATE [MERIT-HF NEJM 1999: ALL-CAUSE MORTALITY 34% REDUCTION; TARGET 200 mg QD]; BISOPROLOL [CIBIS-II; 34% MORTALITY REDUCTION]; START LOW; TITRATE SLOWLY; CAUTION IN ACUTE DECOMPENSATION [INITIATE WHEN EUVOLEMIC]; PILLAR 3 - MINERALOCORTICOID RECEPTOR ANTAGONISTS [MRA]: SPIRONOLACTONE [RALES TRIAL NEJM 1999: SPIRONOLACTONE 25 mg vs PLACEBO IN NYHA III-IV: MORTALITY 30% REDUCTION; GYNECOMASTIA [20%]; HYPERKALEMIA [MONITOR K+; CrCl ABOVE 30; K+ BELOW 5]; EPLERENONE [SELECTIVE; LESS GYNECOMASTIA; EMPHASIS-HF NEJM 2011: EPLERENONE IN NYHA II: CV DEATH/HF HOSPITALIZATION 37% REDUCTION; FDA NYHA II-IV LVEF BELOW 35%]; TARGET K+ BELOW 5 + eGFR ABOVE 30 BEFORE STARTING]; PILLAR 4 - SGLT2 INHIBITORS [NEWEST PILLAR]: DAPAGLIFLOZIN [FARXIGA; DAPA-HF NEJM 2019: DAPA vs PLACEBO IN HFrEF WITH OR WITHOUT DM: CV DEATH/HF WORSENING 16.3% vs 21.2%; HR 0.74; FIRST SGLT2i TO SHOW HF BENEFIT IN NON-DIABETIC HFrEF; DOSE 10 mg QD]; EMPAGLIFLOZIN [JARDIANCE; EMPEROR-REDUCED NEJM 2020: SIMILAR BENEFIT; HF HOSPITALIZATION PRIMARY; ALSO HFpEF EVIDENCE IN EMPEROR-PRESERVED]; MECHANISM [OSMOTIC DIURESIS; NATRIURESIS; CARDIOPROTECTIVE DIRECT EFFECTS; REDUCE PRELOAD + AFTERLOAD; ANTI-FIBROTIC; ANTI-INFLAMMATORY]; STARTING CRITERIA [eGFR ABOVE 20; HOLD IF SURGERY; DKA RISK RARE NON-DIABETIC]; IVABRADINE [CORLANOR; FUNNY CHANNEL If INHIBITOR; REDUCES HR IN SINUS RHYTHM; SHIFT TRIAL LANCET 2010: HR ABOVE 70 IN SINUS ON MAX BB: HF HOSPITALIZATION 26% REDUCTION; NO MORTALITY BENEFIT; FDA 2015; DOSE 5-7.5 mg BID; CONTRAINDICATED IN AFIB]; HYDRALAZINE + ISOSORBIDE DINITRATE [H/I; A-HeFT NEJM 2004: BLACK PATIENTS [SELF-IDENTIFIED]: H/I vs PLACEBO: MORTALITY 43% REDUCTION; BENEFICIAL IN BLACK PATIENTS [NITRIC OXIDE METABOLISM GENETICS]; SUPPLEMENT OR REPLACE ACEi IF INTOLERANT; DOSE: HYDRALAZINE 37.5 mg + ISOSORBIDE 20 mg TID [BIDIL]] | `text` |  |  |  |
| HFrEF: Guideline-Directed Medical Therapy, Device Therapy, and Advanced Heart Failure | Device Therapy, Decompensation Management, and Advanced HF | `hfref_device` | ICD MADIT-2 LVEF Below 30/35 Non-Ischemic 9 Months; CRT MIRACLE COMPANION QRS Above 150 LBBB; LVAD HeartMate3 MOMENTUM3; OHT Listing UNOS Status 1-7; Loop Diuretics Furosemide, Congestion Management | `select` |  |  |  |
| HFrEF: Guideline-Directed Medical Therapy, Device Therapy, and Advanced Heart Failure | Device Therapy, Decompensation Management, and Advanced HF | `hfref_notes` | HFrEF Management Notes and Cardiology/HF Specialist/Cardiac Surgery/EP/Pharmacy/Nutrition/Physical Therapy/Palliative Care/Social Work/Transplant Coordination | `textarea` |  |  |  |

### HFrEF — `cardiology_heart_failure_hfref_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Heart Failure with Reduced Ejection Fraction | Diagnosis and GDMT | `hf_f1` | HFrEF Diagnosis: DEFINITION: LVEF Under 40 pct; SYMPTOMS: Dyspnea Orthopnea PND Edema Fatigue; SIGNS: S3 Gallop; Crackles; JVD; Pitting Edema; Hepatojugular Reflux; BIOMARKERS: BNP Over 100 pg/mL or NTproBNP Over 300 (Diagnosis); BNP Over 35 NTproBNP Over 125 Screening Outpatient; ECHO: LVEF; Wall Motion; Valve Disease; LV Dimensions; Diastology; ETIOLOGY: ISCHEMIC (Most Common; Post-MI Scar; CAD Eval); NON-ISCHEMIC DILATED: Viral Myocarditis; Alcohol; Peripartum; Familial LMNA TTN; Doxorubicin; Tachycardia-Mediated; Sarcoidosis; HEMOCHROMATOSIS; AMYLOID (AL vs ATTR; Technetium Pyrophosphate Scan; Tafamidis); WORKUP: Echo (Baseline All); Coronary Imaging (Cath or CCTA); Cardiac MRI LGE; CBC BMP Mg; TFTs; HIV; Iron Studies; CLASSIFICATION NYHA I-IV; INTERMACS 1-7 (Advanced HF) | `text` |  |  |  |
| Heart Failure with Reduced Ejection Fraction | Diagnosis and GDMT | `hf_f2` | GDMT and Device Therapy | `select` |  |  |  |

### HFrEF GDMT — `cardiology_hfref_gdmt_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| HFrEF: Guideline-Directed Medical Therapy, Device Therapy, and Advanced HF Management | HFrEF Diagnosis, NYHA Classification, and Hemodynamic Assessment | `hfref_class` | HFrEF Definition: EF Below 40%; HFmrEF 41-49% Mildly Reduced; HFpEF Above 50%; NYHA I-IV Functional Classification; BNP Above 100 NT-proBNP Above 400 Diagnostic; Echo LVEF Wall Motion Diastolic Grade; Congestion Wet Dry Warm Cold Profiling; 6MWT VO2max CPET; Hemodynamics: PCWP Above 15 mmHg CO Low SVR High | `select` |  |  |  |
| HFrEF: Guideline-Directed Medical Therapy, Device Therapy, and Advanced HF Management | HFrEF Diagnosis, NYHA Classification, and Hemodynamic Assessment | `hfref_gdmt` | HFrEF GDMT Quadruple: 1-ARNi Sacubitril+Valsartan Entresto 49/51mg BID Max 97/103mg PARADIGM-HF OS HR 0.80; 2-SGLT2i Dapagliflozin Farxiga 10mg QD DAPA-HF CVD+HHF HR 0.74 or Empagliflozin EMPEROR-Reduced; 3-Beta-Blocker Carvedilol 3.125-25mg BID COPERNICUS or Metoprolol Succinate 12.5-200mg QD MERIT-HF; 4-MRA Spironolactone 25-50mg QD RALES or Eplerenone EPHESUS; Ivabradine SHIFT; A-HeFT Hydralazine+Isosorbide Black Patients; CRT LBBB QRS Above 150 -- HFrEF GDMT [FOUR PILLARS - ALL EF BELOW 40%]: PILLAR 1 - ARNI [ANGIOTENSIN RECEPTOR-NEPRILYSIN INHIBITOR]: SACUBITRIL+VALSARTAN [ENTRESTO; REPLACES ACEi OR ARB; PARADIGM-HF NEJM 2014: OS HR 0.80 [20% REDUCTION]; CV DEATH HR 0.80; HHF [HOSPITALIZATION HF] HR 0.79; BNP LOWERED BUT NP ELEVATED [NEPRILYSIN INHIBITED]; START 24-36H AFTER LAST ACEi DOSE [ANGIOEDEMA RISK]; INITIATE 24/26 mg BID; TARGET 97/103 mg BID; ANGIOEDEMA 0.4%; HYPOTENSION; RENAL MONITOR; AVOID PREGNANCY; USE NT-PRO-BNP NOT BNP ON MONITORING (BNP ARTIFICIALLY ELEVATED BY ARNI)]; ACEi [IF ARNI INTOLERANT; RAMIPRIL; LISINOPRIL; CAPTOPRIL; ENALAPRIL V-HeFT-II]; ARB [IF ACEi INTOLERANT DUE TO COUGH; LOSARTAN; VALSARTAN]; PILLAR 2 - SGLT2 INHIBITORS [REDUCE CV DEATH+HHF REGARDLESS DIABETES]: DAPAGLIFLOZIN [FARXIGA; DAPA-HF NEJM 2019: CVD+HHF HR 0.74; GFR ABOVE 25 ELIGIBLE; NON-DM BENEFIT EQUAL DM; 10 mg QD; FDA 2020 HFrEF]; EMPAGLIFLOZIN [JARDIANCE; EMPEROR-REDUCED NEJM 2020: CVD+HHF HR 0.75; 10 mg QD; FDA 2021 HFrEF; ALSO FDA 2022 HFpEF]; COMBINED BENEFIT [SGLT2i LIKELY ADDITIVE UNDER MECHANISM; REDUCE VOLUME; SYMPATHETIC TONE; RENAL TUBULAR NaH EXCHANGE; DIRECT CARDIAC EFFECTS]; PILLAR 3 - BETA-BLOCKERS [THREE FDA-APPROVED HF AGENTS ONLY]: CARVEDILOL [NON-SELECTIVE BB + ALPHA1 BLOCKING; COPERNICUS NEJM 2001: SEVERE HF EF BELOW 25%: OS HR 0.65 [35% REDUCTION]; 3.125 mg BID TITRATE TO 25 mg BID [OR 50 mg BID ABOVE 85 kg]; TWICE DAILY DOSING]; METOPROLOL SUCCINATE [EXTENDED-RELEASE; TOPROL-XL; MERIT-HF: OS HR 0.66; 12.5-25 mg QD START; TARGET 200 mg QD]; BISOPROLOL [CIBIS-II: OS HR 0.66; 1.25 mg QD TARGET 10 mg QD]; INITIATE LOW DOSE COMPENSATED EUVOLEMIC; NOT ACUTELY DECOMPENSATED; AVOID ACUTE BRONCHOSPASM; TITRATE Q2 WEEKS; PILLAR 4 - MINERALOCORTICOID RECEPTOR ANTAGONIST [MRA]: SPIRONOLACTONE [ALDACTONE; RALES NEJM 1999: SEVERE HF NYHA III-IV: OS HR 0.70 [30% REDUCTION]; 25-50 mg QD; GFR ABOVE 30; K+ BELOW 5.0; GYNECOMASTIA 10% MALE]; EPLERENONE [INSPRA; EPHESUS POST-MI HF: CV DEATH+HOSP HR 0.87; SELECTIVE; NO GYNECOMASTIA; 25-50 mg QD]; FINERENONE [NONSTEROIDAL MRA; RENAL+CV PROTECTION DM; FIGARO+FIDELIO; HF DATA EMERGING]; ADDITIONAL AGENTS: IVABRADINE [CORLANOR; If INHIBITOR SINOATRIAL; SHIFT LANCET 2010: CV DEATH+HOSP HR 0.82; SINUS RHYTHM HR ABOVE 70 ON BB; 5-7.5 mg BID; FDA 2015; FLUTTER BRADYCARDIA]; HYDRALAZINE+ISOSORBIDE DINITRATE [A-HeFT NEJM 2004: BLACK PATIENTS NYHA III-IV: MORTALITY 43% REDUCTION; HYDRALAZINE 75 mg TID + ISOSORBIDE DINITRATE 40 mg TID [BIDIL FIXED-DOSE FDA FIRST RACE-SPECIFIC DRUG 2005]; USE IN BLACK PATIENTS ARNi INTOLERANT OR RENAL FAILURE]; DIURETICS [SYMPTOM CONTROL; NOT MORTALITY; FUROSEMIDE 20-200+ mg QD-BID; BUMETANIDE; TORSEMIDE BETTER ABSORPTION]; DIGOXIN [DIG TRIAL: REDUCE HOSP; NO MORTALITY BENEFIT; NARROW THERAPEUTIC WINDOW [0.5-0.9 ng/mL]; RENALLY CLEARED; ELDERLY CAUTION]; DEVICE THERAPY: CRT [CARDIAC RESYNCHRONIZATION THERAPY; QRS ABOVE 150 ms + LBBB + NYHA II-IV + EF BELOW 35%: BIVENTRICULAR PACING; MADIT-CRT+CARE-HF+REVERSE: EF IMPROVES; HOSP REDUCES; QUALITY LIFE]; ICD [IMPLANTABLE CARDIOVERTER DEFIBRILLATOR; EF BELOW 35% AFTER 90 DAYS GDMT; NYHA II-III; MADIT II+SCD-HeFT: MORTALITY REDUCTION; NOT ACUTE MI [WAIT 40 DAYS]; NOT DECOMPENSATED]; WEARABLE DEFIBRILLATOR [LifeVest; NEW DIAGNOSIS EF BELOW 35%; BRIDGE TO ICD DECISION 90 DAYS] | `text` |  |  |  |
| HFrEF: Guideline-Directed Medical Therapy, Device Therapy, and Advanced HF Management | HFrEF Management Notes | `hfref_mgmt_notes` | HFrEF Management Notes and Cardiology/Advanced HF/Device EP/Cardiac Surgery/Transplant/Pharmacy/Nursing/Cardiac Rehab/Palliative Care/Social Work Coordination | `textarea` |  |  |  |

### Heart Block Pacemaker — `cardiology_heart_block_pacemaker_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Heart Block and Bradycardia — AV Conduction Disorders and Pacemaker Therapy | AV Block Classification and Diagnosis | `hb_f1` | Heart Block Evaluation: AV CONDUCTION SYSTEM (SINOATRIAL SA NODE; AV NODE HIS BUNDLE; RIGHT AND LEFT BUNDLE BRANCHES; PURKINJE FIBERS; FIRST DEGREE AV BLOCK (PR INTERVAL OVER 200 MSEC; ALL P WAVES CONDUCTED; BENIGN MOST CASES; MONITOR; NO TREATMENT USUALLY; VAGAL TONE ATHLETES; MEDICATION BETA BLOCKER DIGOXIN CALCIUM CHANNEL BLOCKER; SECOND DEGREE AV BLOCK (MOBITZ TYPE I WENCKEBACH: PROGRESSIVE PR PROLONGATION UNTIL P NOT CONDUCTED; GROUPED BEATING; USUALLY WITHIN AV NODE; GENERALLY BENIGN; VAGAL ATHLETES INFERIOR MI; TREAT UNDERLYING CAUSE; PACEMAKER RARELY NEEDED SYMPTOMS; MOBITZ TYPE II: FIXED PR INTERVAL; SUDDEN P WAVE NOT CONDUCTED; INFRA-NODAL HIS PURKINJE; MORE SERIOUS UNPREDICTABLE COMPLETE BLOCK; INFERIOR OR ANTERIOR MI; PACEMAKER INDICATED; 2:1 BLOCK: CANNOT DISTINGUISH TYPE I II; DETERMINE WITH VAGAL MANEUVERS; HIGH-GRADE BLOCK: 2 OR MORE CONSECUTIVE P NOT CONDUCTED; THIRD DEGREE COMPLETE HEART BLOCK (NO CONDUCTION AV NODE; P WAVES ATRIAL VENTRICULAR DISSOCIATED; ESCAPE RHYTHM JUNCTIONAL NARROW COMPLEX; VENTRICULAR WIDE COMPLEX SLOWER; HEMODYNAMIC COMPROMISE SYNCOPE; ALWAYS PACEMAKER INDICATION UNLESS REVERSIBLE; REVERSIBLE CAUSES (INFERIOR STEMI VAGAL; LYME DISEASE ANTIBIOTICS; MEDICATION TOXICITY DIGOXIN; HYPERKALEMIA; HYPOTHYROIDISM; SARCOIDOSIS INFILTRATIVE) | `text` |  |  |  |
| Heart Block and Bradycardia — AV Conduction Disorders and Pacemaker Therapy | AV Block Classification and Diagnosis | `hb_f2` | Pacemaker Indications and Device Selection | `select` |  |  |  |

### Hypertension — `cardiology_hypertension_management_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hypertension — Diagnosis and Treatment | HTN Classification and Lifestyle | `htn_f1` | HTN Classification: NORMAL Under 120/80; ELEVATED 120-129; STAGE 1 130-139/80-89; STAGE 2 Over 140/90; HYPERTENSIVE CRISIS Over 180/120; SECONDARY CAUSES: Renal Parenchymal; Renovascular RAS (Young Female Fibromuscular Dysplasia; Atherosclerotic); PRIMARY HYPERALDOSTERONISM (Low K; High Aldo/Renin Ratio); OSA; Pheochromocytoma; Thyroid; LIFESTYLE: DASH Diet; Sodium Under 2.4 g/day; Weight Loss; Exercise 150 Min/Week; Alcohol Moderation; AMBULATORY BP MONITORING: White-Coat HTN; Masked HTN; Dipping Status | `text` |  |  |  |
| Hypertension — Diagnosis and Treatment | HTN Classification and Lifestyle | `htn_f2` | Antihypertensive Drug Selection | `select` |  |  |  |

### Hypertensive Emergency — `cardiology_hypertensive_emergency_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hypertensive Emergency: Target Organ Assessment, IV Agent Selection, and BP Reduction Goals | Hypertensive Emergency Classification and Target Organ Damage Assessment | `hte_class` | Hypertensive Urgency: BP Above 180/120 Without Acute TOD; Managed Oral Agents; No Rapid IV Required; Hypertensive Emergency: BP Above 180/120 Plus Acute Target Organ Damage; IV Agent Required ICU; TOD Types: Hypertensive Encephalopathy Headache Confusion Papilledema; PRES Posterior Reversible Encephalopathy Syndrome MRI DWI; Hypertensive ICH Intracranial Hemorrhage; Ischemic Stroke Contraindication Aggressive BP Lowering; Acute MI NSTEMI STEMI; Acute Pulmonary Edema; Aortic Dissection Type A/B; Eclampsia Preeclampsia Severe; AKI Microangiopathy; Cocaine Sympathomimetic | `select` |  |  |  |
| Hypertensive Emergency: Target Organ Assessment, IV Agent Selection, and BP Reduction Goals | Hypertensive Emergency Classification and Target Organ Damage Assessment | `hte_treatment` | Hypertensive Emergency IV Agents: Labetalol 20mg IV Bolus then 20-80mg Q10M or 1-2mg/min Infusion Alpha+Beta Blocker Most Versatile Aortic Dissection Encephalopathy; Nicardipine 5-15mg/hr IV CCB Titratable Ischemic Stroke Encephalopathy Eclampsia; Nitroprusside 0.25-10mcg/kg/min Fastest Onset Cyanide Toxicity Avoid Prolonged; Clevidipine 1-2mg/hr Dihydropyridine CCB Short t1/2 Cardiac Surgery; Esmolol 500mcg/kg Bolus then 50-300mcg/kg/min Aortic Dissection Beta-Selective; Hydralazine 10-20mg IV Eclampsia Unpredictable; Fenoldopam 0.03-1.6mcg/kg/min Dopamine-1 Renal Protective; Phentolamine Cocaine; Nitroglycerin Pulmonary Edema; Reduction Goals: Initial 25% 1H Then 160/100-110 2-6H Then Normal Slowly -- IV ANTIHYPERTENSIVE AGENTS: LABETALOL [TRANDATE; ALPHA-1 + BETA-1+2 BLOCKER; 4:1 BETA:ALPHA RATIO IV]: BOLUS [20 mg IV OVER 2 MIN; REPEAT 40-80 mg EVERY 10 MIN; MAXIMUM 300 mg]; INFUSION [1-2 mg/MIN; TITRATE]; ONSET [5 MIN]; DURATION [3-6H]; INDICATIONS [MOST SITUATIONS SAFE: ENCEPHALOPATHY; AORTIC DISSECTION; ECLAMPSIA; ISCHEMIC STROKE SAFE; ACUTE MI]; AVOID [ACUTE HF; BRADYCARDIA; HIGH-GRADE AV BLOCK; REACTIVE AIRWAY]; NICARDIPINE [CARDENE; DIHYDROPYRIDINE CCB; CONTINUOUS IV INFUSION; NO BOLUS]: DOSE [5-15 mg/H; TITRATE; ONSET 5-10 MIN]; INDICATIONS [ISCHEMIC STROKE; ENCEPHALOPATHY; ECLAMPSIA; POST-OPERATIVE; RENAL PROTECTIVE]; ADVANTAGE [TITRATABLE; NO CYANIDE; DOES NOT INCREASE ICP]; SODIUM NITROPRUSSIDE [NITROPRESS; ARTERIAL+VENOUS DILATOR; FASTEST ONSET]: DOSE [0.25-10 mcg/kg/MIN; ONSET SECONDS; OFFSET 2-5 MIN]; TOXICITY [CYANIDE+THIOCYANATE [AVOID ABOVE 3 mcg/kg/MIN PROLONGED; HEPATIC+RENAL FAILURE RISK; MONITOR THIOCYANATE LEVELS ABOVE 2-3 DAYS]; REFLEX TACHYCARDIA; INCREASED ICP [AVOID INCREASED ICP]; LIGHT-SENSITIVE COVER TUBING]; USE [SHORT-TERM FINE CONTROL; AORTIC DISSECTION WITH ESMOLOL]; CLEVIDIPINE [CLEVIPREX; ULTRA-SHORT DIHYDROPYRIDINE CCB]: DOSE [1-2 mg/H STARTING; DOUBLE Q90S; MAX 16-32 mg/H; t1/2 1 MIN]; ADVANTAGE [RAPID TITRATE; NO TACHYPHYLAXIS; LIPID EMULSION NOT FOR SOYBEAN/EGG ALLERGY]; CARDIAC SURGERY; ESMOLOL [BREVIBLOC; ULTRA-SHORT BETA-1 SELECTIVE; t1/2 9 MIN]: BOLUS [500 mcg/kg OVER 1 MIN]; INFUSION [50-300 mcg/kg/MIN]; INDICATIONS [AORTIC DISSECTION [WITH NITROPRUSSIDE; HEART RATE TARGET BELOW 60]; TACHYARRHYTHMIA]; HYDRALAZINE [APRESOLINE; ARTERIOLAR DILATOR]: DOSE [10-20 mg IV; ONSET 10-20 MIN; DURATION 4-12H]; UNPREDICTABLE RESPONSE; REFLEX TACHYCARDIA; ECLAMPSIA [THIRD LINE]; AVOID AORTIC DISSECTION [REFLEX TACH]; FENOLDOPAM [CORLOPAM; DOPAMINE-1 RECEPTOR AGONIST]: DOSE [0.03-1.6 mcg/kg/MIN; NO BOLUS; ONSET 5-10 MIN]; ADVANTAGE [RENAL PROTECTIVE [INCREASES RENAL BLOOD FLOW]; NO CNS PENETRATION; ALTERNATIVE CYANIDE RISK]; PHENTOLAMINE [ALPHA-BLOCKER; COCAINE/PHEOCHROMOCYTOMA]; NITROGLYCERIN [NITRO-DUR; VENOUS DILATOR; PULMONARY EDEMA; ACUTE MI; LESS ARTERIAL REDUCTION]; REDUCTION GOALS: INITIAL [25% REDUCTION MAP WITHIN 1H; AVOID RAPID DROPS CEREBRAL AUTOREGULATION; EXCEPTION: AORTIC DISSECTION TARGET RAPID SYSTOLIC BELOW 120]; SUBSEQUENT [TO 160/100-110 OVER 2-6H]; GRADUAL [TOWARD NORMAL OVER 24-48H]; OVER-TREATMENT [CEREBRAL INFARCTION; RENAL INFARCTION; CORONARY ISCHEMIA; EXCESSIVE LOWERING ESPECIALLY ISCHEMIC STROKE] | `text` |  |  |  |
| Hypertensive Emergency: Target Organ Assessment, IV Agent Selection, and BP Reduction Goals | Hypertensive Emergency Management Notes | `hte_mgmt_notes` | Hypertensive Emergency Management Notes and Cardiology/Neurology Stroke/Neurosurgery/Nephrology/ICU/Pharmacy/Nursing/Radiology CT-MRI/Obstetrics/Ophthalmology Papilledema Coordination | `textarea` |  |  |  |

### Hypertrophic CM — `cardiology_hypertrophic_cardiomyopathy_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hypertrophic Cardiomyopathy HCM — Diagnosis, LVOT Obstruction, and SCD Prevention | HCM Diagnosis, Genetics, and Pathophysiology | `hcm_f1` | HCM Evaluation: EPIDEMIOLOGY (1 IN 200-500 GENERAL POPULATION; MOST COMMON INHERITED CARDIOMYOPATHY; LEADING CAUSE SUDDEN CARDIAC DEATH ATHLETES UNDER 35; AUTOSOMAL DOMINANT INCOMPLETE PENETRANCE; GENETIC (SARCOMERE PROTEIN MUTATIONS: MYH7 BETA MYOSIN HEAVY CHAIN 40 pct; MYBPC3 MYOSIN BINDING PROTEIN C 35 pct; TNNT2 TNNI3 TPM1 ACTC1; MULTIPLE VARIANTS IDENTIFIED; GENETIC TESTING RECOMMENDED PROBANDS AND FIRST-DEGREE RELATIVES; PATHOPHYSIOLOGY (LV HYPERTROPHY TYPICALLY ASYMMETRIC SEPTAL; LEFT VENTRICULAR OUTFLOW TRACT LVOT OBSTRUCTION; SYSTOLIC ANTERIOR MOTION SAM MITRAL VALVE; DIASTOLIC DYSFUNCTION IMPAIRED RELAXATION; MICROVASCULAR ISCHEMIA; MYOCARDIAL DISARRAY AND FIBROSIS ARRHYTHMIA SUBSTRATE; DIAGNOSIS (ECHOCARDIOGRAM GOLD STANDARD; WALL THICKNESS 15 mm OR MORE ANY SEGMENT OR 13 mm FIRST DEGREE RELATIVE; UNEXPLAINED LVH; CMR CARDIAC MRI LATE GADOLINIUM ENHANCEMENT FIBROSIS BURDEN; GENETIC TESTING; ECG FINDINGS: LVH VOLTAGE; DEEP Q WAVES LATERAL; T WAVE INVERSIONS; ST DEPRESSION; CLINICAL FEATURES (DYSPNEA MOST COMMON; CHEST PAIN EXERTIONAL ISCHEMIA; SYNCOPE PRE-SYNCOPE LVOT OBSTRUCTION ARRHYTHMIA; PALPITATIONS ATRIAL FIBRILLATION VENTRICULAR; SUDDEN CARDIAC DEATH FIRST PRESENTATION SOME; PHYSICAL EXAM LVOTO: HARSH SYSTOLIC MURMUR LEFT STERNAL BORDER; INCREASES VALSALVA STANDING; DECREASES SQUATTING HAND GRIP; BISFERIENS PULSE DOUBLE PULSE) | `text` |  |  |  |
| Hypertrophic Cardiomyopathy HCM — Diagnosis, LVOT Obstruction, and SCD Prevention | HCM Diagnosis, Genetics, and Pathophysiology | `hcm_f2` | Medical Therapy, Septal Reduction, and ICD | `select` |  |  |  |

### ICD/Pacemaker Device Follow-Up — `cardiology_device_followup_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | Device Information | `dev_device_type` | Device Type | `select` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | Device Information | `dev_implant_date` | Implant Date (or date of most recent generator replacement) | `date` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | Device Information | `dev_manufacturer` | Manufacturer and Model | `text` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | Device Information | `dev_indication` | Primary Indication | `select` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | Device Interrogation Findings | `dev_battery_status` | Battery Status | `select` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | Device Interrogation Findings | `dev_battery_voltage` | Battery Voltage (V) and Estimated Longevity | `text` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | Device Interrogation Findings | `dev_pacing_threshold` | Ventricular Pacing Threshold (V/ms) — stable from baseline? | `text` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | Device Interrogation Findings | `dev_sensing` | Ventricular Sensing (mV) — adequate sensing of native rhythm | `text` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | Device Interrogation Findings | `dev_lead_impedance` | Lead Impedances (Ohms) — elevated may indicate break; low may indicate insulation failure | `text` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | Device Interrogation Findings | `dev_lead_integrity` | Lead Integrity | `select` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | Device Interrogation Findings | `dev_percent_paced` | % RV Pacing and % RA Pacing (if applicable) — minimize RV pacing to prevent pacing-induced cardiomyopathy; use AAI/AMS in sick sinus with intact AV conduction; CRT requires above 98% biventricular pacing for benefit | `text` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | ICD Therapy Review and Programming | `dev_shocks_since_last` | Shocks Since Last Visit | `select` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | ICD Therapy Review and Programming | `dev_atp` | Anti-Tachycardia Pacing (ATP) Events | `select` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | ICD Therapy Review and Programming | `dev_af_burden` | Atrial Fibrillation Burden (if dual-chamber device) | `select` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | ICD Therapy Review and Programming | `dev_remote_monitoring` | Remote Monitoring Compliance | `select` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | ICD Therapy Review and Programming | `dev_mri_clearance` | MRI Conditional Status | `select` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | ICD Therapy Review and Programming | `dev_driving` | Driving Status (ICD patients) | `select` |  |  |  |
| Implantable Cardiac Device Follow-Up (ICD / Pacemaker / CRT) | ICD Therapy Review and Programming | `dev_notes` | Device Follow-Up Notes and Programming Changes Made | `textarea` |  |  |  |

### Infective Endocarditis — `cardiology_infective_endocarditis_cf`

Screen: 1 page(s) · 3 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Infective Endocarditis: Diagnosis, Treatment, and Surgery Decision | Diagnosis: Duke Criteria and Imaging | `ie_duke_criteria` | Modified Duke Criteria | `select` |  |  |  |
| Infective Endocarditis: Diagnosis, Treatment, and Surgery Decision | Diagnosis: Duke Criteria and Imaging | `ie_echo` | Echocardiography in IE | `select` |  |  |  |
| Infective Endocarditis: Diagnosis, Treatment, and Surgery Decision | Microbiology and Blood Culture Protocol | `ie_organisms` | Causative Organisms | `select` |  |  |  |
| Infective Endocarditis: Diagnosis, Treatment, and Surgery Decision | Microbiology and Blood Culture Protocol | `ie_blood_culture` | Blood Culture Protocol — 3 sets (aerobic + anaerobic) from 3 different venipuncture sites; obtain BEFORE antibiotics if possible; minimum 10 mL per bottle; 2 sets adequate if urgent; repeat cultures at 48-72 hours and then until clearance for S. aureus (confirm clearance before stopping ID evaluation); clearance required before outpatient therapy or early valve surgery; IVDU-related IE: screen for HIV, hepatitis C, hepatitis B; methicillin susceptibility testing (MSSA vs MRSA) critical for regimen selection; repeat TTE/TEE at 1-2 weeks after starting antibiotics to assess vegetation change, new complications; consult: ID (all IE); cardiac surgery (high-risk features); neurology (CNS complications) | `text` |  |  |  |
| Infective Endocarditis: Diagnosis, Treatment, and Surgery Decision | Antibiotic Therapy and Surgical Decision | `ie_abx_duration` | Antibiotic Duration and OPAT | `select` |  |  |  |
| Infective Endocarditis: Diagnosis, Treatment, and Surgery Decision | Antibiotic Therapy and Surgical Decision | `ie_surgery` | Surgical Indications and Timing | `select` |  |  |  |
| Infective Endocarditis: Diagnosis, Treatment, and Surgery Decision | Antibiotic Therapy and Surgical Decision | `ie_complications` | Complications Monitoring | `select` |  |  |  |
| Infective Endocarditis: Diagnosis, Treatment, and Surgery Decision | Antibiotic Therapy and Surgical Decision | `ie_notes` | Infective Endocarditis Notes and ID/Cardiac Surgery/Cardiology/Neurology/Pharmacy Coordination | `textarea` |  |  |  |

### MR and MS — `cardiology_valvular_mr_ms_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Mitral Valve Disease: Mitral Regurgitation and Mitral Stenosis | Mitral Regurgitation: Assessment and Severity | `mr_etiology` | MR Etiology and Mechanism (Carpentier Classification) | `select` |  |  |  |
| Mitral Valve Disease: Mitral Regurgitation and Mitral Stenosis | Mitral Regurgitation: Assessment and Severity | `mr_severity` | Echocardiographic Grading (AHA/ACC 2021 VHD) | `select` |  |  |  |
| Mitral Valve Disease: Mitral Regurgitation and Mitral Stenosis | Mitral Regurgitation: Assessment and Severity | `mr_intervention_criteria` | Intervention Thresholds for Primary MR (2021 ACC/AHA) | `select` |  |  |  |
| Mitral Valve Disease: Mitral Regurgitation and Mitral Stenosis | Mitral Stenosis: Assessment and Management | `ms_etiology_severity` | MS Etiology and Echocardiographic Severity | `select` |  |  |  |
| Mitral Valve Disease: Mitral Regurgitation and Mitral Stenosis | Mitral Stenosis: Assessment and Management | `ms_intervention` | Percutaneous Mitral Commissurotomy (PMC) Indication | `select` |  |  |  |
| Mitral Valve Disease: Mitral Regurgitation and Mitral Stenosis | Mitral Stenosis: Assessment and Management | `ms_af_management` | Atrial Fibrillation in MS | `select` |  |  |  |
| Mitral Valve Disease: Mitral Regurgitation and Mitral Stenosis | Mitral Stenosis: Assessment and Management | `ms_medications` | Medical Management of MS | `select` |  |  |  |
| Mitral Valve Disease: Mitral Regurgitation and Mitral Stenosis | Mitral Stenosis: Assessment and Management | `vhd_surveillance` | Surveillance Schedule — Moderate MR: echo Q1-2 years; Severe asymptomatic MR: echo Q6-12 months + exercise testing annually; post-MitraClip or repair: echo Q3 months x1 year, annually; Severe MS: echo Q1 year; Mild MS: echo Q3-5 years; post-PMC: echo Q6-12 months; reassess clinical symptoms at every visit; BNP or NT-proBNP as biomarker of LV decompensation; annual ECG for AF detection | `text` |  |  |  |
| Mitral Valve Disease: Mitral Regurgitation and Mitral Stenosis | Mitral Stenosis: Assessment and Management | `vhd_notes` | Valvular Heart Disease Notes and Cardiology/Cardiac Surgery/Interventional/EP Coordination | `textarea` |  |  |  |

### Mitral Regurgitation — `cardiology_mitral_regurgitation_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Mitral Regurgitation: Classification, Severity Assessment, and Intervention Timing | MR Classification, Echocardiographic Grading, and Etiologic Subtypes | `mr_class` | Primary vs Secondary MR, Carpentier Classification, and Severe MR Echo Criteria | `select` |  |  |  |
| Mitral Regurgitation: Classification, Severity Assessment, and Intervention Timing | MR Classification, Echocardiographic Grading, and Etiologic Subtypes | `mr_echo` | MR Severity Grading: Quantitative Echo Parameters, TEE, 3D Echo, and Exercise Testing — MR SEVERITY ECHOCARDIOGRAPHIC GRADING (AHA/ACC 2021 VHD GUIDELINE): SEVERE PRIMARY MR: Vena Contracta (VC) above 7 mm (VC = narrowest flow stream at valve orifice; color Doppler); EROA (Effective Regurgitant Orifice Area) above 0.4 cm2 (by PISA [proximal isovelocity surface area]: r^2 x aliasing velocity / peak MR velocity; or 3D EROA; PISA formula: EROA = 2 pi r^2 x Va / MR Vmax; where r = PISA radius at aliasing velocity Va; EROA above 0.4 = severe); REGURGITANT VOLUME (RVol) above 60 mL/beat; REGURGITANT FRACTION above 50%; SEVERE SECONDARY MR: LOWER THRESHOLDS USED: EROA above 0.2 cm2; RVol above 30 mL; RATIONALE: equivalent hemodynamic stress due to already impaired LV function; QUALITATIVE CRITERIA FOR SEVERE MR: VENA CONTRACTA above 0.7 cm (may be measured in 3D echo for 3D VC width/height product); LARGE COLOR FLOW DOPPLER JET (wall-hugging eccentric jets underestimate severity; Coanda effect in MVP/eccentric jets); DENSE CONTINUOUS-WAVE DOPPLER SIGNAL; PULMONARY VEIN SYSTOLIC FLOW REVERSAL (PVSFR: systolic flow reversal in any pulmonary vein = severe MR; very specific; not always present); TRANSESOPHAGEAL ECHO (TEE): superior spatial resolution; MV anatomy (leaflet involvement; prolapse segment; chordal apparatus; calcification; annular anatomy); 3D TEE (BEST for MV assessment: 3D volume rendering of valve face; commissure-to-commissure view; annular geometry; surgical planning; predict repair feasibility); EXERCISE STRESS ECHOCARDIOGRAPHY: in ASYMPTOMATIC SEVERE MR with uncertain symptoms; exercise-induced EROA increase above 0.1 cm2 or PVSP above 60 mmHg during exercise = earlier intervention consideration; CARDIAC MRI (CMR): gold standard for RVol/RF quantification; resolve discordant echo grade; LVEF + LV volumes (most accurate); LVEF by CMR more accurate than echo (especially with eccentric jets); LVEF THRESHOLD PRINCIPLE: LVEF BELOW 60% (not true normal; compensated chronic severe MR: LVEF appears normal due to regurgitant volume returning to low-resistance LA; LVEF below 60% = already significant LV systolic dysfunction; INDICATION FOR SURGERY); LVDs (END-SYSTOLIC DIAMETER) ABOVE 40 MM: surgery indicated to prevent irreversible LV dysfunction (ESC guideline: LVDs above 40 mm = Class I indication for symptomatic or asymptomatic severe primary MR) | `text` |  |  |  |
| Mitral Regurgitation: Classification, Severity Assessment, and Intervention Timing | MR Management: Timing of Surgery, Valve Repair vs Replacement, and TMVR/MitraClip | `mr_surgery` | Primary MR Surgery Indications, Mitral Repair, and TEER MitraClip COAPT | `select` |  |  |  |
| Mitral Regurgitation: Classification, Severity Assessment, and Intervention Timing | MR Management: Timing of Surgery, Valve Repair vs Replacement, and TMVR/MitraClip | `mr_medical` | Medical Therapy in MR, Secondary MR GDMT, AF Management, and Watchful Waiting — MEDICAL MANAGEMENT OF MR: CHRONIC PRIMARY MR WITHOUT INDICATION FOR SURGERY: WATCHFUL WAITING (SURVEILLANCE): clinical + echo assessment Q6-12 months for moderate-severe; more frequently if changing symptoms; GDMT for hypertension (ACEi/ARB; target BP below 140/90); NO PROVEN BENEFIT of vasodilators in ASYMPTOMATIC MR with normal LVEF (unlike AS or AR); AVOID: NO VASODILATORS (hydralazine; nifedipine) solely to delay surgery in asymptomatic severe MR with normal LVEF (no evidence; may mask symptoms; no outcome benefit; AHA guidelines recommend against); MEDICAL THERAPY FOR SECONDARY MR (FMR): GDMT IS FOUNDATION: HEART FAILURE with REDUCED EF (HFrEF) therapy: ACEi/ARB + beta-blocker + MRA + SGLT2i (GDMT reduces LV remodeling; reduces functional MR; goal MR severity reduction with optimal GDMT before considering intervention); SACUBITRIL/VALSARTAN (HFrEF; LVEF below 40%; MORE LV REVERSE REMODELING than ACEi alone; more MR reduction); CRT (CARDIAC RESYNCHRONIZATION THERAPY: LBBB + QRS above 150 ms + LVEF below 35%: reduces FMR [reverse remodeling + resynchrony]; improve 30-40% MR in responders); ICD (LVEF below 35% + NYHA II-III despite GDMT: primary prevention SCD; includes most FMR patients); REVASCULARIZATION (ISCHEMIC MR with viable myocardium: CABG if revascularizable territory; revascularization may improve FMR in select cases; ISCHEMIC MR + CABG: prophylactic MV repair at time of CABG if severe FMR [CTSN trial: CABG + MV repair vs CABG alone: no survival difference at 2 years; similar LVEF recovery; less recurrent MR; controversial]); ATRIAL FIBRILLATION IN MR: HIGH AF PREVALENCE (30-50% mitral disease); RATE CONTROL (beta-blockers; CCBs; digoxin); RHYTHM CONTROL (cardioversion; antiarrhythmics; PULMONARY VEIN ISOLATION [PVI; catheter ablation] at time of MV surgery [Cox-Maze]; ablation reduces future AF recurrence; favored concomitantly); ANTICOAGULATION: WARFARIN (INR 2.0-3.0) preferred in valvular AF (mitral stenosis + any AF: VKA only); DOAC acceptable in PRIMARY MR + AF (not pure valvular AF); ANTITHROMBOTIC POST-TEER: DUAL ANTIPLATELET x6 months then aspirin indefinitely; ANTICOAGULATION if coexisting AF indication; ENDOCARDITIS PROPHYLAXIS: indicated post-MV repair/replacement (prior endocarditis; prosthetic heart valve; congenital HD); NOT for degenerative MR without intervention (2021 AHA: MVP WITHOUT prior endocarditis or prior valve intervention: NO routine SBE prophylaxis; 2021 AHA changed position: MVP alone no longer an indication) | `text` |  |  |  |
| Mitral Regurgitation: Classification, Severity Assessment, and Intervention Timing | MR Management: Timing of Surgery, Valve Repair vs Replacement, and TMVR/MitraClip | `mr_notes` | Mitral Regurgitation Management Notes and Interventional Cardiology/Cardiac Surgery/Echo/Structural Heart/Electrophysiology/Anesthesia/HT Team Coordinator | `textarea` |  |  |  |

### Mitral Valve — `cardiology_mitral_valve_cf`

Screen: 1 page(s) · 4 section(s) · 27 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Mitral Valve Disease Management | Echocardiographic Assessment | `mv_diagnosis` | Primary Mitral Valve Diagnosis | `select` |  |  |  |
| Mitral Valve Disease Management | Echocardiographic Assessment | `mv_mr_severity` | MR Severity (if present) | `select` |  |  |  |
| Mitral Valve Disease Management | Echocardiographic Assessment | `mv_vena_contracta` | Vena Contracta Width (cm) | `number` |  |  |  |
| Mitral Valve Disease Management | Echocardiographic Assessment | `mv_ero` | Effective Regurgitant Orifice (ERO, cm²) | `number` |  |  |  |
| Mitral Valve Disease Management | Echocardiographic Assessment | `mv_reg_volume` | Regurgitant Volume (mL/beat) | `number` |  |  |  |
| Mitral Valve Disease Management | Echocardiographic Assessment | `mv_lvef` | LVEF (%) | `number` |  |  |  |
| Mitral Valve Disease Management | Echocardiographic Assessment | `mv_lvesd` | LVESD (mm) | `number` |  |  |  |
| Mitral Valve Disease Management | Echocardiographic Assessment | `mv_lvedv` | LVEDV (mL) | `number` |  |  |  |
| Mitral Valve Disease Management | Echocardiographic Assessment | `mv_la_diameter` | LA Diameter (mm) | `number` |  |  |  |
| Mitral Valve Disease Management | Echocardiographic Assessment | `mv_mvp_leaflet` | MVP Leaflet Involved | `select` |  |  |  |
| Mitral Valve Disease Management | Echocardiographic Assessment | `mv_ms_mva` | Mitral Valve Area MVA (cm²) - if MS | `number` |  |  |  |
| Mitral Valve Disease Management | Echocardiographic Assessment | `mv_ms_mean_gradient` | MS Mean Gradient (mmHg) - if MS | `number` |  |  |  |
| Mitral Valve Disease Management | Symptoms and Hemodynamic Status | `mv_symptoms_present` | Symptoms | `select` |  |  |  |
| Mitral Valve Disease Management | Symptoms and Hemodynamic Status | `mv_nyha` | NYHA Functional Class | `select` |  |  |  |
| Mitral Valve Disease Management | Symptoms and Hemodynamic Status | `mv_af` | Atrial Fibrillation | `select` |  |  |  |
| Mitral Valve Disease Management | Symptoms and Hemodynamic Status | `mv_pulm_htn` | Pulmonary Hypertension | `select` |  |  |  |
| Mitral Valve Disease Management | Symptoms and Hemodynamic Status | `mv_rvsp` | RVSP (mmHg) | `number` |  |  |  |
| Mitral Valve Disease Management | Intervention Planning | `mv_intervention_indication` | Surgical/Procedure Indication | `select` |  |  |  |
| Mitral Valve Disease Management | Intervention Planning | `mv_procedure_type` | Procedure Type | `select` |  |  |  |
| Mitral Valve Disease Management | Intervention Planning | `mv_repair_probability` | Surgical Repair Likelihood | `select` |  |  |  |
| Mitral Valve Disease Management | Intervention Planning | `mv_procedure_date` | Procedure Date (planned/completed) | `date` |  |  |  |
| Mitral Valve Disease Management | Intervention Planning | `mv_post_procedure_result` | Post-procedure MV Function | `textarea` |  |  |  |
| Mitral Valve Disease Management | Surveillance and Medical Management | `mv_echo_surveillance_interval` | Echo Surveillance Interval | `select` |  |  |  |
| Mitral Valve Disease Management | Surveillance and Medical Management | `mv_next_echo_date` | Next Echo Date | `date` |  |  |  |
| Mitral Valve Disease Management | Surveillance and Medical Management | `mv_medications` | Medical Management | `select` |  |  |  |
| Mitral Valve Disease Management | Surveillance and Medical Management | `mv_mvp_click` | Auscultatory Findings (click, murmur timing) | `text` |  |  |  |
| Mitral Valve Disease Management | Surveillance and Medical Management | `mv_notes` | Additional Notes | `textarea` |  |  |  |

### Obstructive HCM — Mavacamten — `cardiology_hocm_mavacamten_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| HOCM — Mavacamten/Aficamten, SRT, ICD, Genetics | HCM Diagnosis and LVOTO Assessment | `hcm_dx` | HCM Diagnosis, LVOTO Grading, and Resting vs. Provocable Obstruction (HYPERTROPHIC CARDIOMYOPATHY (HCM): DEFINITION: LV wall thickness >=15 mm in any segment (or >=13 mm with family history or pathogenic variant) NOT explained by loading conditions; PREVALENCE: 1 in 500; most common genetic cardiomyopathy; GENETICS: SARCOMERE GENE MUTATIONS: MYH7 (beta-myosin heavy chain) 35-40%; MYBPC3 (myosin-binding protein C) 35-40%; TNNT2, TNNI3, TPM1, MYL2, MYL3 (<5% each); AUTOSOMAL DOMINANT; PHENOCOPIES (non-sarcomere): FABRY DISEASE: GLA mutation; GL-3 accumulation; male; LVH + neuropathy + angiokeratoma; ENZYME ASSAY; DANON DISEASE: LAMP2; X-linked; young males; extreme LVH; LEOPARD/NOONAN SYNDROME: RAS pathway; AMYLOIDOSIS: TTR or AL; CARDIAC MRI: gold standard for wall thickness + fibrosis; LATE GADOLINIUM ENHANCEMENT (LGE): fibrosis marker; >15% LGE = SCD risk; ECHO EVALUATION: RESTING LVOT GRADIENT: measured at rest + with Valsalva + amyl nitrite; OBSTRUCTIVE HCM DEFINITION: peak LVOT gradient >=30 mmHg (resting or provoked); SIGNIFICANT OBSTRUCTION: >=50 mmHg (SRT threshold); SYSTOLIC ANTERIOR MOTION (SAM) of mitral valve: elongated leaflets; dynamic LVOTO; PROVOCABLE OBSTRUCTION (LABILE): >=30 mmHg only during provocation (exercise, Valsalva, amyl nitrite); EXERCISE STRESS ECHO: preferred for unmasking latent obstruction; DIASTOLIC DYSFUNCTION: impaired relaxation; elevated filling pressures; MR (mitral regurgitation): posterior-directed from SAM; CARDIAC CATHETERIZATION: Brockenbrough-Braunwald-Morrow sign (spike-and-dome after PVC) | `text` |  |  |  |
| HOCM — Mavacamten/Aficamten, SRT, ICD, Genetics | HCM Diagnosis and LVOTO Assessment | `hcm_symptoms` | HCM Symptom Management and Non-Obstructive HCM | `select` |  |  |  |
| HOCM — Mavacamten/Aficamten, SRT, ICD, Genetics | Mavacamten and Aficamten — Cardiac Myosin Inhibitors | `mavacamten_rx` | Mavacamten (Camzyos) EXPLORER-HCM Trial, REMS Program, and Dosing (MAVACAMTEN (CAMZYOS): MECHANISM: selective allosteric cardiac myosin inhibitor (Myosin-8); reduces actin-myosin cross-bridge formation; reduces hypercontractility; reduces LVOT obstruction; EXPLORER-HCM TRIAL (NEJM 2020): Phase 3; 251 patients; obstructive HCM with LVOT gradient >=50 mmHg + NYHA II-III; MAVACAMTEN vs. PLACEBO; PRIMARY COMPOSITE ENDPOINT: improvement in peak VO2 by >=1.5 mL/kg/min OR 1 NYHA class without worsening VO2; RESULT: 37% mavacamten vs. 17% placebo (p<0.0001); SECONDARY: LVOT gradient, NT-proBNP, NYHA class all improved; MAVA-LONG trial: 2-year extension: durable benefit; DOSE: 2.5 mg, 5 mg, 10 mg, 15 mg QD (dose titration every 12 weeks); TITRATION BASED ON ECHO + LVOT GRADIENT: target resting gradient <30 mmHg; target EF > 50%; REDUCE DOSE: if EF 50-55%; HOLD: if EF <50%; REMS (RISK EVALUATION AND MITIGATION STRATEGY): SYSTOLIC DYSFUNCTION RISK; ECHO every 4-12 weeks during dose titration; ongoing Q3-6M maintenance; CARDIOXANES REMS; PRESCRIBER CERTIFICATION; CYP2C19 METABOLISM: MAVACAMTEN major substrate; CYP2C19 inhibitors (omeprazole, fluoxetine) increase exposure; CYP2C19 inducers (rifampicin) reduce exposure; DOSE ADJUST for strong/moderate CYP2C19 inhibitors; AVOID: strong CYP3A4 inducers; CONTRAINDICATIONS: current use of disopyramide (increased negative inotropy); moderate-severe MR from intrinsic mitral valve disease; EF <55% at baseline; DRUG INTERACTIONS: class I/III antiarrhythmics caution; USE IN PREGNANCY: avoid (no data) | `text` |  |  |  |
| HOCM — Mavacamten/Aficamten, SRT, ICD, Genetics | Mavacamten and Aficamten — Cardiac Myosin Inhibitors | `aficamten` | Aficamten SEQUOIA-HCM Trial and SRT Candidacy | `select` |  |  |  |

### PAD — `cardiology_peripheral_arterial_disease_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Peripheral Arterial Disease PAD — Diagnosis, Medical Management, and Revascularization | PAD Epidemiology, Diagnosis, and Classification | `pad_f1` | PAD Evaluation: EPIDEMIOLOGY (8-10 MILLION US; 12-20 pct OVER 70; MALE PREDOMINANCE; ATHEROSCLEROSIS MAIN ETIOLOGY; RISK FACTORS: SMOKING STRONGEST MODIFIABLE; DIABETES HIGHEST AMPUTATION RISK; HYPERTENSION; HYPERLIPIDEMIA; CHRONIC KIDNEY DISEASE; CARDIAC DISEASE COEXIST OFTEN; PATHOPHYSIOLOGY (ATHEROSCLEROTIC PLAQUE STENOSIS; LOWER EXTREMITY ARTERIES; AORTOILIAC FEMORAL POPLITEAL TIBIAL; COLLATERAL DEVELOPMENT PARTIAL COMPENSATION; ACUTE ON CHRONIC; FONTAINE CLASSIFICATION (I ASYMPTOMATIC; IIA MILD CLAUDICATION; IIB MODERATE TO SEVERE CLAUDICATION; III REST PAIN; IV ULCERATION GANGRENE; RUTHERFORD CLASSIFICATION SIMILAR; CHRONIC LIMB THREATENING ISCHEMIA CLTI: REST PAIN ULCER GANGRENE; ABI ANKLE BRACHIAL INDEX (DIAGNOSTIC GOLD STANDARD; RATIO ANKLE TO BRACHIAL SYSTOLIC PRESSURES; OVER 1.40 NON-COMPRESSIBLE MEDIA CALCIFICATION; 1.0-1.4 NORMAL; 0.9-1.0 BORDERLINE; UNDER 0.9 PAD DIAGNOSIS; UNDER 0.5-0.7 REST PAIN RISK; UNDER 0.3-0.4 CRITICAL ISCHEMIA; DUPLEX ULTRASOUND: VELOCITY RATIO STENOSIS DEGREE; CTA MRA: ANATOMIC ROAD MAP REVASCULARIZATION; ANGIOGRAPHY: INVASIVE GOLD STANDARD; TRANSCUTANEOUS PO2 TCPO2: TISSUE OXYGENATION; UNDER 30 mmHg POOR HEALING; SEGMENTAL PRESSURES LOCATE DISEASE; TREADMILL EXERCISE ABI DROP EXERCISE-INDUCED) | `text` |  |  |  |
| Peripheral Arterial Disease PAD — Diagnosis, Medical Management, and Revascularization | PAD Epidemiology, Diagnosis, and Classification | `pad_f2` | Medical Management and Revascularization | `select` |  |  |  |

### PAD Management — `cardiology_pad_management_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Peripheral Artery Disease: Diagnosis, Medical Therapy, and Revascularization | PAD Diagnosis, Risk Stratification, and Classification | `pad_dx` | ABI, Rutherford Classification, WIfI, and PAD Imaging | `select` |  |  |  |
| Peripheral Artery Disease: Diagnosis, Medical Therapy, and Revascularization | PAD Diagnosis, Risk Stratification, and Classification | `pad_medical` | PAD Medical Management: Antiplatelet, Anticoagulant, Statin, and Exercise — ANTIPLATELET THERAPY: ASPIRIN 75-100 mg/day: all symptomatic PAD (AHA/ACC recommendation Class I); CLOPIDOGREL 75 mg/day: alternative or addition; CASPAR trial: aspirin+clopidogrel vs aspirin: no overall benefit (post-bypass); PEGASUS: no PAD-specific benefit; COMPASS TRIAL (NEJM 2017): rivaroxaban 2.5 mg twice daily + aspirin 100 mg vs aspirin alone: MACE reduction 28%; MALE (major adverse limb events) reduction 46% (amputation; acute limb ischemia); FDA 2018 approval for PAD; SELECT vs COMPASS comparison; CAUTION: increased major bleeding (ISTH criteria; GI bleed; intracranial bleed; fatal bleed); benefit outweighs risk for most symptomatic PAD; VORAPAXAR (Zontivity; PAR-1 thrombin receptor antagonist): TRACER + TRA-2P-TIMI 50 trials: added to aspirin reduces MALE; FDA 2014 for PAD without stroke/TIA history; STATIN THERAPY: ALL PAD PATIENTS (ACC/AHA Class I): LDL target below 70 mg/dL (high-intensity statin: atorvastatin 40-80 mg; rosuvastatin 20-40 mg); pleiotropic effects on endothelium + anti-inflammatory; reduces amputation risk; slows disease progression; ACE INHIBITOR/ARB: all PAD patients with hypertension (BP target below 130/80); RAMIPRIL: HOPE substudy: PAD subgroup benefit; CILOSTAZOL (Pletal: PDE3 inhibitor; 100 mg twice daily; FDA-approved for claudication): improves walking distance (50-67% improvement maximal walking distance; Rutherford 1-3 claudication); CONTRAINDICATED in heart failure (any severity: class III-IV; increased mortality); dry mouth; headache; diarrhea; palpitations; onset 2-3 months; PENTOXIFYLLINE: less effective than cilostazol; alternative; SMOKING CESSATION: essential (2-3x amputation risk in smokers with PAD); NRT; varenicline; bupropion; EXERCISE REHABILITATION: supervised exercise therapy (SET): ESCAPE trial + CLEVER trial: superior to stent alone for claudication; 3x/week x3 months; treadmill walking; pain-free + maximum walking distance improvement; delay in disease progression | `text` |  |  |  |
| Peripheral Artery Disease: Diagnosis, Medical Therapy, and Revascularization | PAD Revascularization: Endovascular vs Bypass and Limb Salvage | `pad_endovascular` | Endovascular Therapy: Balloon, Drug-Coated Balloon, and Stent Selection | `select` |  |  |  |
| Peripheral Artery Disease: Diagnosis, Medical Therapy, and Revascularization | PAD Revascularization: Endovascular vs Bypass and Limb Salvage | `pad_bypass` | Surgical Bypass, BEST-CLI Trial, and CLTI Limb Salvage — SURGICAL BYPASS: preferred for TASC C/D lesions; long-segment occlusions; failed prior endovascular; BEST CONDUIT: autologous great saphenous vein (GSV: best long-term patency; 5-year patency 75% femoropopliteal; 60% femoro-distal); prosthetic (PTFE; Dacron: acceptable for above-knee popliteal; inferior below-knee vs vein; PROPATEN heparin-coated PTFE: improves patency below knee without vein); reversed vein vs in situ vein (similar patency; in situ requires side-branch ligation; valve lysis); PRE-OPERATIVE: cardiac risk assessment (PAD patients: high CV risk; stress testing if active cardiac conditions; RCRI; pREhab); bilateral ABI + duplex; CTA or DSA for anatomy; vein mapping US (assess GSV diameter; patency; varicosities); BEST-CLI TRIAL (NEJM 2022): first RCT comparing endovascular vs surgical bypass for CLTI: TWO COHORTS by vein availability: COHORT 1 (adequate GSV available): surgery superior to endovascular for MACE + MALE composite primary outcome (HR 0.68; p=0.004); COHORT 2 (no adequate GSV): no significant difference (prosthetic vs endovascular); IMPLICATION: patients with good vein + CLTI: surgery preferred; prosthetic conduit: endovascular not clearly inferior; AMPUTATION PREVENTION: aggressive wound care; multidisciplinary limb salvage team (vascular surgery + podiatry + endocrine + wound care + ID); TRANSCUTANEOUS OXYGEN (TcPO2): above 30 mmHg predicts wound healing; HYPERBARIC OXYGEN THERAPY: diabetic foot ulcers non-healing + appropriate revascularization: AHA/ACC IIb recommendation; ADJUNCTS: BIOENGINEERED SKIN GRAFTS (Apligraf; Dermagraft); NEGATIVE PRESSURE WOUND THERAPY; MINIMALLY INVASIVE STAGED PROCEDURE (REGEN: regenerative medicine; stem cell therapy; angiogenic gene therapy: TAMARIS: VEGF gene therapy failed; ongoing trials); ACUTE LIMB ISCHEMIA: 6P: Pain; Pulselessness; Pallor; Paresthesia; Paralysis; Poikilothermia; RUTHERFORD CLASSIFICATION: I (viable: no immediate threat); IIa (marginally threatened: salvageable with prompt revascularization); IIb (immediately threatened: urgent); III (irreversible: major tissue loss); TREATMENT: anticoagulate immediately (UFH bolus); Class I: arteriography; Class IIa/b: CDT or surgical thromboembolectomy; Class IIb: urgent hybrid or open; Class III: amputation; FASCIOTOMY: compartment syndrome post-reperfusion; 4-compartment | `text` |  |  |  |
| Peripheral Artery Disease: Diagnosis, Medical Therapy, and Revascularization | PAD Revascularization: Endovascular vs Bypass and Limb Salvage | `pad_notes` | PAD Management Notes and Vascular Surgery/Interventional Radiology/Cardiology/Podiatry/Wound Care/Endocrinology/Rehabilitation Coordination | `textarea` |  |  |  |

### PE and VTE — `cardiology_pulmonary_embolism_vte_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pulmonary Embolism and VTE: Risk Stratification, Reperfusion, and Anticoagulation | PE/VTE Diagnosis, Risk Stratification, and Imaging | `pe_class` | PE Risk: Massive High-Risk Hemodynamic Instability SBP Below 90 Shock; Submassive Intermediate RV Dysfunction TnI BNP PESI; Low-Risk Wells Score 0-4; YEARS Algorithm D-Dimer Age-Adjusted; CTPA CT Pulmonary Angiography V/Q Scan; BNP Above 90 TnI Above 0.1; ECHO RV/LV Ratio McConnell Sign | `select` |  |  |  |
| Pulmonary Embolism and VTE: Risk Stratification, Reperfusion, and Anticoagulation | PE/VTE Diagnosis, Risk Stratification, and Imaging | `pe_treatment` | PE/VTE Treatment: DOAC Preferred Rivaroxaban 15mg BID 3W then 20mg QD EINSTEIN; Apixaban 10mg BID 7D then 5mg BID AMPLIFY; Massive: tPA 100mg IV 2h PEITHO; CDT Catheter-Directed Thrombolysis; PERT Team; Heparin Bridge; IVC Filter Temporary; Indefinite If Unprovoked 2nd Episode Cancer; Cancer-VTE Apixaban ADAM-VTE Rivaroxaban SELECT-D; Extended Prophylaxis Apixaban 2.5mg BID -- PE/VTE TREATMENT: ANTICOAGULATION [PRIMARY THERAPY ALL PE/DVT]: PREFERRED DOACs [DIRECT ORAL ANTICOAGULANTS; AVOID IF CrCl BELOW 15-30; GI BLEED HISTORY; PREGNANCY; ANTIPHOSPHOLIPID SYNDROME; HEPARIN AS BRIDGE NOT NEEDED FOR DOAC]: RIVAROXABAN [XARELTO; 15 mg BID x21 DAYS [WITH FOOD] THEN 20 mg QD; EINSTEIN-PE NEJM 2012; NON-INFERIOR WARFARIN; MAJOR BLEED 1.1% vs 2.2% WARFARIN DECREASE; ONCE DAILY MAINTENANCE CONVENIENCE]; APIXABAN [ELIQUIS; 10 mg BID x7 DAYS THEN 5 mg BID; AMPLIFY NEJM 2013; NON-INFERIOR WARFARIN; REDUCED MAJOR BLEED 0.6% vs 1.8%; BEST SAFETY PROFILE OVERALL; NO FOOD RESTRICTION]; DABIGATRAN [PRADAXA; 150 mg BID; HEPARIN BRIDGE 5-10 DAYS REQUIRED [RE-COVER]; DYSPEPSIA; REVERSE WITH IDARUCIZUMAB PRAXBIND]; EDOXABAN [SAVAYSE; 60 mg QD ONCE DAILY; HEPARIN BRIDGE 5-10 DAYS; HOKUSAI]; WARFARIN [COUMADIN; INR 2-3; SLOW ONSET; MONITOR; DRUG+FOOD INTERACTIONS; REVERSAL VITAMIN K; FFP; 4F-PCC KCENTRA; PREFERRED ANTIPHOSPHOLIPID SYNDROME [TRIPLE POSITIVE; AVOID DOAC]; VALVULAR AF; MECHANICAL HEART VALVES]; LOW MOLECULAR WEIGHT HEPARIN [LMWH; LOVENOX ENOXAPARIN 1 mg/kg SC BID; 1.5 mg/kg QD; ANTI-XA MONITORING [PREGNANT; MORBID OBESITY; RENAL FAILURE]]; TREATMENT DURATION: PROVOKED DVT/PE [REVERSIBLE RISK FACTOR [SURGERY; FRACTURE; HRT; FLIGHT]; 3 MONTHS THEN STOP; LOW RECURRENCE RISK [BELOW 3%/YEAR]]; UNPROVOKED DVT/PE [NO CLEAR PRECIPITANT; 3 MONTHS + REASSESS; EXTEND INDEFINITE IF: ABOVE 50% RECURRENCE RISK; PROXIMAL DVT; PE; BILATERAL DVT; LOW BLEED RISK; NO PATIENT PREFERENCE STOP]; 2ND UNPROVOKED VTE [INDEFINITE ANTICOAGULATION UNLESS BLEED RISK HIGH; REDUCED-DOSE RIVAROXABAN 10 mg QD [EINSTEIN CHOICE] OR APIXABAN 2.5 mg BID [AMPLIFY-EXT] EXTENDED PROPHYLAXIS]; CANCER-ASSOCIATED VTE [PREFERRED DOAC [LMWH HISTORICAL]]: APIXABAN [ADAM-VTE JAMA ONCOL 2020; SUPERIOR LMWH]; RIVAROXABAN [SELECT-D BLOOD 2020; LOWER RECURRENCE BUT HIGHER BLEED GI]; PREFER APIXABAN [LOWER GI BLEED]; AVOID DOAC IF HIGH-RISK GI CANCERS [LUMINAL GI; BLADDER; UROTHELIAL]; EDOXABAN HOKUSAI-VTE CANCER; DURATION = UNTIL CANCER RESOLVED/REMISSION; MASSIVE PE TREATMENT [HEMODYNAMICALLY UNSTABLE]: SYSTEMIC THROMBOLYSIS FIRST-LINE: ALTEPLASE [tPA; 100 mg IV OVER 2 HOURS; ABSOLUTE CI: RECENT STROKE 3M; ACTIVE INTRACRANIAL BLEED; PEITHO NEJM 2014 [SUBMASSIVE]; 50% REDUCTION HEMODYNAMIC FAILURE VS HEPARIN; BUT MAJOR BLEED 11.5% vs 2.4%; USED CARDIAC ARREST/MASSIVE]; SUBMASSIVE [INTERMEDIATE; NORMOTENSIVE + RV DYSFUNCTION]: HEPARIN ANTICOAGULATION STANDARD; CDT [CATHETER-DIRECTED THROMBOLYSIS; LOWER DOSE LOCAL tPA 20 mg OVER 15H; ULTRASOUND-ACCELERATED EKOS; ULTIMA NEJM 2014; SEATTLE-II JACC 2015; REDUCES RV/LV RATIO; LESS SYSTEMIC BLEED]; PERT [PULMONARY EMBOLISM RESPONSE TEAM; MULTIDISCIPLINARY ACTIVATION; CARDIOLOGY+INTERVENTIONAL+PULM+HEMATOLOGY+PHARMACY]; SURGICAL EMBOLECTOMY [CARDIAC SURGERY; MASSIVE PE FAILING LYTICS; EXPERTISE REQUIRED]; ANTICOAGULATION REVERSAL [DOAC]: ANDEXANET ALFA [ANDEXXA; REVERSES FACTOR-XA INHIBITORS [RIVAROXABAN; APIXABAN; EDOXABAN]; FDA 2018; EXPENSIVE]; IDARUCIZUMAB [PRAXBIND; REVERSES DABIGATRAN; FDA 2015; 5g IV]; 4F-PCC [OFF-LABEL FACTOR-XA REVERSAL; FASTER CHEAPER]; IVC FILTERS [RETRIEVABLE INFERIOR VENA CAVA FILTER; INDICATION [ABSOLUTE CI TO ANTICOAGULATION; BLEEDING; DVT ABOVE ANTICOAGULATION]; NOT ROUTINE ADJUNCT; REMOVE ONCE SAFE TO ANTICOAGULATE; LONG-TERM FILTER = INCREASED DVT RISK; PE PREVENTION NOT MORTALITY]; CTEPH [CHRONIC THROMBOEMBOLIC PULMONARY HYPERTENSION; PERSISTENT PERFUSION DEFECTS 3 MONTHS; V/Q SCAN AFTER ACUTE PE; DIAGNOSIS [RIGHT HEART CATH + PULM ANGIO]; PEA [PULMONARY ENDARTERECTOMY; SURGERY CURE]; RIOCIGUAT [ADEMPAS; SOLUBLE GUANYLATE CYCLASE; FDA 2013 CTEPH INOPERABLE]; TREPROSTINIL SC/IV INOPERABLE] | `text` |  |  |  |
| Pulmonary Embolism and VTE: Risk Stratification, Reperfusion, and Anticoagulation | PE/VTE Management Notes | `pe_mgmt_notes` | PE/VTE Management Notes and Cardiology/Pulmonology/Hematology/Radiology Intervention/Vascular Surgery/Pharmacy/Nursing/Anticoagulation Clinic Coordination | `textarea` |  |  |  |

### Pericardial Disease — `cardiology_pericardial_disease_cf`

Screen: 1 page(s) · 2 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pericardial Disease: Diagnosis and Treatment | Acute Pericarditis: Diagnosis and Initial Treatment | `peri_diagnosis` | Acute Pericarditis Diagnosis (ESC 2015) | `select` |  |  |  |
| Pericardial Disease: Diagnosis and Treatment | Acute Pericarditis: Diagnosis and Initial Treatment | `peri_high_risk` | High-Risk Features Requiring Admission | `select` |  |  |  |
| Pericardial Disease: Diagnosis and Treatment | Acute Pericarditis: Diagnosis and Initial Treatment | `peri_treatment` | Medical Treatment for Acute Pericarditis | `select` |  |  |  |
| Pericardial Disease: Diagnosis and Treatment | Recurrent and Constrictive Pericarditis | `peri_recurrent_mgmt` | Recurrent Pericarditis Management | `select` |  |  |  |
| Pericardial Disease: Diagnosis and Treatment | Recurrent and Constrictive Pericarditis | `peri_tamponade` | Cardiac Tamponade and Pericardiocentesis | `select` |  |  |  |
| Pericardial Disease: Diagnosis and Treatment | Recurrent and Constrictive Pericarditis | `peri_imaging` | Imaging Protocol — transthoracic echo: initial imaging (effusion size: small below 10 mm; moderate 10-20 mm; large above 20 mm; location: circumferential vs loculated; clot vs fibrin strands); CT chest: pericardial thickness (above 4 mm: constrictive; calcium); CT-guided drainage for posterior loculated; cardiac MRI: pericardial inflammation (delayed gadolinium enhancement of pericardium = active pericarditis; pericardial thickness; edema; effusion; LGE for myocarditis component); T2-STIR: edema; T1 mapping for myocardial involvement; CMR becoming standard for recurrent pericarditis before immunosuppressive decisions; FDG-PET: active pericardial inflammation in steroid-dependent; PET-CT for malignant effusion evaluation | `text` |  |  |  |
| Pericardial Disease: Diagnosis and Treatment | Recurrent and Constrictive Pericarditis | `peri_notes` | Pericardial Disease Notes and Cardiology/Cardiac Surgery/Rheumatology/Oncology/CT Surgery Coordination | `textarea` |  |  |  |

### Pericarditis/Myocarditis — `cardiology_pericarditis_myocarditis_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pericarditis and Myocarditis — Diagnosis and Management | Pericarditis | `peri_f1` | Pericarditis Evaluation: DEFINITION AND EPIDEMIOLOGY (INFLAMMATION PERICARDIAL SAC; ANNUAL INCIDENCE 27.7 PER 100000; 5 pct ACUTE CHEST PAIN PRESENTATIONS In Referral Centers; ETIOLOGY: VIRAL IDIOPATHIC Most Common 80-90 pct (COXSACKIEVIRUS B Enterovirus Most Common; ECHOVIRUS; INFLUENZA; EBV CMV HSV; COVID-19 Pericarditis Post-Infection Or Vaccine; BACTERIAL PURULENT RARE Hematogenous Spread Staph Strep; TUBERCULOSIS TB Pericarditis Especially Africa Asia HIV; AUTOIMMUNE: SYSTEMIC LUPUS ERYTHEMATOSUS SLE MOST COMMON RHEUMATIC CAUSE; RHEUMATOID ARTHRITIS RA; SCLERODERMA; SJOGREN; SARCOIDOSIS; POST-CARDIAC INJURY: DRESSLER SYNDROME 2-12 WEEKS Post-MI; POSTCARDIOTOMY SYNDROME Post Open-Heart Surgery; POST-ABLATION Atrial Catheter Procedure; UREMIC PERICARDITIS CKD ESRD; MALIGNANT: METASTATIC LUNG BREAST LYMPHOMA; DRUG-INDUCED: HYDRALAZINE PROCAINAMIDE ISONIAZID Lupus-like; RADIATION; DIAGNOSIS CRITERIA AT LEAST 2 OF 4 (CHEST PAIN Pleuritic Sharp Positional Worsens Lying Improves Sitting Forward; FRICTION RUB Pathognomonic Biphasic Or Triphasic Scratchy Auscultation Best Sitting Forward Leaning; ECG Saddle-Shape Diffuse ST Elevation Stage 1; PR DEPRESSION Stage 1 ECG; ECG EVOLUTION 4 STAGES (Stage 1 DIFFUSE ST ELEVATION Saddle-Shape PR Depression; Stage 2 ST Normalize Pseudo-Normalize; Stage 3 T-WAVE INVERSION; Stage 4 Normalize Weeks; PERICARDIAL EFFUSION Echo New Or Worsening; BIOMARKERS ELEVATED ESR CRP WBC Nonspecific; CRP ELEVATED 80 pct Guides Therapy Duration; TROPONIN MILD ELEVATIONS Perimyocarditis; LARGE TROPONIN Myocarditis Dominant; ECHO: EFFUSION ASSESSMENT; TAMPONADE Signs Diastolic Collapse RA RV; PLETHORA IVC; Paradoxical Septal Motion; RESPIRATORY VARIATION MITRAL 25 pct Or TRICUSPID 40 pct Flow TAMPONADE; CXR CARDIOMEGALY Only If Over 300 mL Effusion; MRI Pericardial Enhancement Late Gadolinium Enhancement LGE Active Inflammation) | `text` |  |  |  |
| Pericarditis and Myocarditis — Diagnosis and Management | Pericarditis | `peri_f2` | Pericarditis Treatment and Complications | `select` |  |  |  |

### Peripheral Artery Disease — `cardiology_peripheral_artery_disease_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Peripheral Artery Disease — Diagnosis and Management | ABI Classification and Severity | `abi_value` | Ankle-Brachial Index (ABI; resting brachial BP in both arms + posterior tibial and dorsalis pedis in both ankles; use higher ankle pressure / higher arm pressure; normal 1.0-1.4; borderline 0.91-0.99; PAD mild-moderate 0.61-0.90; severe <0.60; non-compressible >1.4 (calcified vessels — DM, ESRD); toe-brachial index (TBI) <0.70 = PAD if ABI non-compressible; exercise ABI if resting ABI borderline with symptoms; post-exercise >20% drop = PAD) | `number` |  |  |  |
| Peripheral Artery Disease — Diagnosis and Management | ABI Classification and Severity | `rutherford_class` | Rutherford Classification | `select` |  |  |  |
| Peripheral Artery Disease — Diagnosis and Management | Medical Management and Revascularization | `medical_rx` | Medical Management (antiplatelet: aspirin 75-100 mg/day (monotherapy); clopidogrel 75 mg/day (CAPRIE: superior to aspirin for PAD subgroup); dual antiplatelet not routinely recommended for PAD; rivaroxaban 2.5 mg BID + aspirin 100 mg (COMPASS: 28% reduction MACE + MALE vs. aspirin alone in stable symptomatic PAD — NET benefit despite bleeding); high-intensity statin (atorvastatin 40-80 mg) — reduces MACE, improves walking; ACEi or ARB; BP target <130/80; tobacco cessation (most effective intervention for PAD progression); glucose control; wound care referral for ulcers) | `text` |  |  |  |
| Peripheral Artery Disease — Diagnosis and Management | Medical Management and Revascularization | `revascularization` | Revascularization Strategy | `select` |  |  |  |

### Peripheral Artery Disease — `cardiology_pad_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Peripheral Artery Disease: Diagnosis, Limb Classification, and Medical and Revascularization Management | PAD Diagnosis, ABI Testing, and Limb Threat Classification | `pad_class` | PAD Diagnosis: ABI Ankle-Brachial Index Normal 1.0-1.4; Borderline 0.91-0.99; Mild PAD 0.70-0.90; Moderate 0.40-0.69; Severe Below 0.40; Non-Compressible ABI Above 1.40 TBI Toe-Brachial Index; Symptoms: Fontaine Classification Stage I Asymptomatic; Stage IIa Intermittent Claudication Above 200m; Stage IIb Below 200m; Stage III Ischemic Rest Pain; Stage IV Ulceration Gangrene; Rutherford Categories 0-6; WIfI Wound Ischemia Foot Infection Limb Staging 1-4; CLTI Critical Limb-Threatening Ischemia Rest Pain + Tissue Loss; Rutherford 4-6; Atypical Leg Symptoms; Leg Fatigue Weakness Exertion; ABI Segmental Pressures; Duplex Ultrasound; CT Angiography; MR Angiography; Digital Subtraction Angiography DSA; TASC II Lesion Classification A-D; SVS Reporting Standards; Treadmill Exercise ABI | `select` |  |  |  |
| Peripheral Artery Disease: Diagnosis, Limb Classification, and Medical and Revascularization Management | PAD Diagnosis, ABI Testing, and Limb Threat Classification | `pad_cv_risk` | PAD Cardiovascular Risk and Comorbidities: PAD is CAD Equivalent ASCVD; 10-Year MACE Risk Above 20%; Concomitant CAD 50%; Cerebrovascular Disease 25%; Major Adverse Limb Events MALE Amputation Gangrene; Smoking Most Powerful Modifiable Risk Factor; DM Peripheral Neuropathy Wound Healing Impaired; Hypertension; Dyslipidemia LDL-C Goal Below 70 Very High Risk; Ankle Brachial Index Prognostic CV Mortality; ABI Below 0.9 2-3x CV Death Risk; Functional Impairment 6MWT; Leg Elevation Response; Dependent Rubor; Hair Loss Limb; Trophic Changes Skin; Cold Extremity; Weak or Absent Pulses; Wound Assessment Podiatry -- PAD CARDIOVASCULAR AND LIMB RISK ASSESSMENT: SYSTEMIC ATHEROSCLEROSIS BURDEN [PAD = CAD EQUIVALENT; MACE RISK HIGH]: MACE [MAJOR ADVERSE CARDIOVASCULAR EVENTS; 2-3X HIGHER THAN GENERAL POPULATION]; CAD COEXISTENCE [50% PAD PATIENTS HAVE CAD; 25% CEREBROVASCULAR DISEASE]; POLYVASCULAR DISEASE [PAD+CAD+CVD = HIGHEST MACE RISK]; CV RISK FACTOR MANAGEMENT [EQUALLY IMPORTANT AS REVASCULARIZATION]: SMOKING CESSATION [MOST POWERFUL; REDUCES CLAUDICATION PROGRESSION; REDUCES AMPUTATION RISK; REDUCES MACE; CESSATION DOUBLES WALKING DISTANCE WITHIN MONTHS; OFFER PHARMACOTHERAPY COUNSELING EVERY VISIT]; LIPID MANAGEMENT [HIGH-INTENSITY STATIN [ATORVASTATIN 40-80 mg; ROSUVASTATIN 20-40 mg]; LDL-C GOAL BELOW 70 mg/dL [VERY HIGH RISK]; BELOW 55 mg/dL IF RECURRENT EVENTS; PCSK9 INHIBITOR IF INTOLERANT/TARGET NOT MET; TRIAL: FOURIER ADDED EVOLOCUMAB CV BENEFIT PAD SUBGROUP]; BLOOD PRESSURE [BELOW 130/80; ACE INHIBITOR [HOPE BENEFIT PAD; ALSO RENAL PROTECTION DM]; RAMIPRILE PERINDOPRIL EVIDENCE; BETA-BLOCKER NOT CONTRAINDICATED MILD-MODERATE PAD [OLD MYTH]; GLYCEMIC [DM HbA1c TARGET; HYPOGLYCEMIA AVOID LIMB POOR WOUND HEALING]; MAJOR ADVERSE LIMB EVENTS [MALE; COMPOSITE ACUTE LIMB ISCHEMIA; AMPUTATION; REVASCULARIZATION FOR ALI; SEPARATE FROM MACE]; FUNCTIONAL STATUS [6MWT [6-MINUTE WALK TEST; PRIMARY OUTCOME SUPERVISED EXERCISE TRIALS]; TREADMILL WALKING TIME; CLAUDICATION QUESTIONNAIRE WIQ]; DIABETIC FOOT CARE [DAILY INSPECTION; PODIATRY Q3-6M; PROTECTIVE FOOTWEAR; AVOID TRAUMA] | `text` |  |  |  |
| Peripheral Artery Disease: Diagnosis, Limb Classification, and Medical and Revascularization Management | PAD Treatment: Medical Therapy, Supervised Exercise, and Revascularization | `pad_treatment` | PAD Medical Treatment: Antiplatelet: Aspirin 75-100mg QD All PAD; Clopidogrel 75mg QD Superior Aspirin CAPRIE PAD Subgroup; Dual Antiplatelet DAPT Short-Duration After Stent; Vorapaxar PAR-1 Antagonist FDA 2014 Reduces MALE; Rivaroxaban 2.5mg BID+Aspirin 100mg QD COMPASS NEJM 2017 26% CV Event Reduction 24% MALE Reduction; Cilostazol 100mg BID PDE3 FDA Approved Claudication Walking Distance; Contraindicated CHF; Naftidrofuryl Pentoxifylline Limited Benefit; Exercise Supervised Exercise Therapy SET CLEVER Trial Equal Stenting Walking Distance; 3 Sessions Week 12 Weeks; Revascularization: Endovascular PTA Balloon; Drug-Eluting Balloon Stent; Atherectomy; Surgical Bypass Vein Prosthetic; Hybrid Procedure; Aortobifemoral Bypass Aortoiliac; Femoropopliteal Saphenous Vein; Tibial Distal; Angiosome Concept; BEST-CLI SVS; AHF ACC 2024 Guidelines; Wound Care Multidisciplinary CLTI; Prostaglandins IV Alprostadil Iloprost CLTI No Revascularization | `select` |  |  |  |
| Peripheral Artery Disease: Diagnosis, Limb Classification, and Medical and Revascularization Management | PAD Treatment: Medical Therapy, Supervised Exercise, and Revascularization | `pad_notes_detail` | PAD Management Plan and Notes: ABI Both Legs, Rutherford/WIfI Category, Wound Description, Imaging Anatomy TASC Class, Antiplatelet Choice, Statin Dose LDL-C, Smoking Status, Exercise Program Status, Revascularization History, Limb Salvage Goal, Wound Care Team, Amputation Risk, Coordination Notes | `textarea` |  |  |  |
| Peripheral Artery Disease: Diagnosis, Limb Classification, and Medical and Revascularization Management | PAD Management Notes | `pad_mgmt_notes` | PAD Management Notes and Cardiology Vascular/Vascular Surgery/Interventional Radiology/Wound Care/Podiatry/PT Exercise Program/Pharmacy Antiplatelet Statin/Smoking Cessation/Endocrinology Diabetes/Nephrology CKD/Rehabilitation Prosthetics/Nursing/Social Work Home Support Coordination | `textarea` |  |  |  |

### Post-Cardiac Arrest Care — `cardiology_post_cardiac_arrest_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Post-Cardiac Arrest — TTM, Coronary Angiography, and Neuroprognostication | Post-Cardiac Arrest Resuscitation and TTM | `pca_f1` | Post-Cardiac Arrest Care: Targeted Temperature Management (TTM; Hypothermia) 33-36C x24h Then Gradual Rewarming 0.25C/Hour; TTM2 Trial 2021 Showed 33C vs. 36C No Outcome Difference (Target 36C Widely Used Now; Avoid Fever Greater Than 37.5C Key); OHCA (Out-of-Hospital) vs. IHCA; VF/VT Shockable vs. PEA/Asystole Non-Shockable; INDICATIONS: Comatose After ROSC; GCS Under 8; Unresponsive; CONTRAINDICATIONS: Temperature Already Less Than 30C; Uncontrolled Bleeding; Active DNR; Obvious Non-Cardiac Cause; POST-RESUSCITATION: 12-Lead ECG; STEMI or Suspected Coronary Occlusion = Emergent Cath; Continuous EEG Monitoring; Vasopressor Support MAP Target 65-80 mmHg; O2 Target SpO2 94-98%; Avoid Hyperoxia (PaO2 Under 300); Glucose 140-180 mg/dL | `text` |  |  |  |
| Post-Cardiac Arrest — TTM, Coronary Angiography, and Neuroprognostication | Post-Cardiac Arrest Resuscitation and TTM | `pca_f2` | Coronary Angiography Timing Post-Arrest: STEMI or ST Changes = Emergent Cath Regardless of Arrest Etiology; No STEMI Immediate Angiography vs. Delayed (COACT Trial 2019 and TOMAHAWK Trial 2021) - No Survival Benefit Immediate vs. 24-48h in Non-STEMI; ROSC Achievable at Scene with Bystander CPR and Early Defibrillation; ICD Implant 40+ Days Post-STEMI or 90 Days If Non-Ischemic CM EF Under 35% | `select` |  |  |  |
| Post-Cardiac Arrest — TTM, Coronary Angiography, and Neuroprognostication | Neuroprognostication and Outcomes | `pca_f3` | Neuroprognostication Post-Arrest: Multimodal Assessment at 72 Hours After TTM (or 72h After ROSC If No TTM); PHYSICAL EXAM: Pupillary Light Reflex (Absent = Poor Prognosis; Automated Pupillometry More Accurate); Corneal Reflex; Motor Response (No Response or Extension = Poor); Myoclonus (Status Myoclonus = Generally Poor But Lance-Adams = Favorable); ELECTROPHYSIOLOGY: SSEP N20 Response (Bilateral Absence = Poor; High Specificity); EEG: Burst Suppression; Status Epilepticus; Suppression Pattern = Poor; Discontinuous = Poor; Continuous and Reactive = Favorable; IMAGING: CT Head (Basal Ganglia Attenuation Loss; Gray-White Ratio Under 1.2 = Poor); MRI DWI (Diffuse Cortical Restriction = Poor; Perform Day 2-5); BIOMARKERS: NSE Peak Under 33 mcg/L = Good; NSE Over 60 = Poor; NfL Rising = Poor; SELF-FULFILLING PROPHECY: Withdraw Based on Multimodal Poor Prognosis Not Single Test | `text` |  |  |  |
| Post-Cardiac Arrest — TTM, Coronary Angiography, and Neuroprognostication | Neuroprognostication and Outcomes | `pca_f4` | Post-Cardiac Arrest Family Communication: Honest Prognosis Discussion With Multimodal Findings; Avoid Early Prognostication (Within 24h TTM); 72-Hour Rule for Definitive Assessment; Good Neurological Outcome (CPC 1-2) 30-40% OHCA VF; Poor Prognosis (CPC 3-5 or Death) Non-Shockable OHCA; Organ Donation Discussion (DCD and DBD Protocols); REHABILITATION: Cognitive Rehabilitation; Post-Arrest Cognitive Impairment in Survivors 30-50%; Memory; Executive Function; Fatigue; PTSD in Survivors and Families; Follow-Up With Cardiology 4-6 Weeks; Neuropsychology Assessment 3-6 Months; Exercise Stress Test or ICD Programming Follow-Up | `text` |  |  |  |

### Pulmonary HTN — `pulmonary_hypertension_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pulmonary Hypertension Visit | Functional Status | `who_fc` | WHO Functional Class | `select` |  |  |  |
| Pulmonary Hypertension Visit | Functional Status | `six_min_walk` | 6-Minute Walk Distance (meters) | `number` |  |  |  |
| Pulmonary Hypertension Visit | Functional Status | `borg_dyspnea` | Borg Dyspnea Score (0-10) | `number` |  |  |  |
| Pulmonary Hypertension Visit | Functional Status | `nt_probnp` | NT-proBNP (pg/mL) | `number` |  |  |  |
| Pulmonary Hypertension Visit | Hemodynamics (if RHC done) | `mean_pap` | Mean PAP (mmHg) | `number` |  |  |  |
| Pulmonary Hypertension Visit | Hemodynamics (if RHC done) | `pvr` | PVR (Wood units) | `number` |  |  |  |
| Pulmonary Hypertension Visit | Hemodynamics (if RHC done) | `cardiac_output` | Cardiac Output (L/min) | `number` |  |  |  |
| Pulmonary Hypertension Visit | Hemodynamics (if RHC done) | `vasoreactivity_positive` | Vasoreactivity test positive | `checkbox` |  |  |  |
| Pulmonary Hypertension Visit | Treatment | `pah_therapy` | PAH-Specific Therapy | `select` |  |  |  |
| Pulmonary Hypertension Visit | Treatment | `supplemental_o2` | Supplemental oxygen prescribed | `checkbox` |  |  |  |
| Pulmonary Hypertension Visit | Treatment | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Pulmonary Hypertension — `cardiology_pah_management_cf`

Screen: 1 page(s) · 2 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pulmonary Arterial Hypertension (PAH): Evaluation and Management | Diagnosis and WHO Classification | `pah_who_group` | WHO PH Group Classification | `select` |  |  |  |
| Pulmonary Arterial Hypertension (PAH): Evaluation and Management | Diagnosis and WHO Classification | `pah_rhc` | RHC (Right Heart Catheterization) Hemodynamics — mPAP (mmHg, normal below 20, PH above 20), PAWP (below 15 = pre-capillary), PVR (dyne.s.cm-5 or Wood units, above 2 WU = elevated), CO/CI, SvO2 — hemodynamic diagnosis mandatory for PAH classification and vasoreactivity testing | `text` |  |  |  |
| Pulmonary Arterial Hypertension (PAH): Evaluation and Management | Diagnosis and WHO Classification | `pah_vasoreactivity` | Vasoreactivity Testing (IPAH/Heritable only) | `select` |  |  |  |
| Pulmonary Arterial Hypertension (PAH): Evaluation and Management | Diagnosis and WHO Classification | `pah_who_fc` | WHO Functional Class | `select` |  |  |  |
| Pulmonary Arterial Hypertension (PAH): Evaluation and Management | Diagnosis and WHO Classification | `pah_reveal_score` | REVEAL 2.0 Risk Score or ERS/ESC 3-strata risk assessment (low, intermediate, high) — 6MWT, BNP/NT-proBNP, TAPSE, RAP, CF, WHO FC; treatment goal = low risk (above 440m, BNP below 50 pg/mL, FC I-II, TAPSE above 2.0 cm) | `text` |  |  |  |
| Pulmonary Arterial Hypertension (PAH): Evaluation and Management | PAH-Specific Pharmacotherapy | `pah_era` | Endothelin Receptor Antagonist (ERA) | `select` |  |  |  |
| Pulmonary Arterial Hypertension (PAH): Evaluation and Management | PAH-Specific Pharmacotherapy | `pah_pde5` | PDE-5 Inhibitor | `select` |  |  |  |
| Pulmonary Arterial Hypertension (PAH): Evaluation and Management | PAH-Specific Pharmacotherapy | `pah_sgc_stimulator` | sGC Stimulator | `select` |  |  |  |
| Pulmonary Arterial Hypertension (PAH): Evaluation and Management | PAH-Specific Pharmacotherapy | `pah_prostacyclin` | Prostacyclin Pathway Therapy | `select` |  |  |  |
| Pulmonary Arterial Hypertension (PAH): Evaluation and Management | PAH-Specific Pharmacotherapy | `pah_combination` | Combination Therapy Strategy | `select` |  |  |  |
| Pulmonary Arterial Hypertension (PAH): Evaluation and Management | PAH-Specific Pharmacotherapy | `pah_transplant` | Lung Transplant Evaluation | `select` |  |  |  |
| Pulmonary Arterial Hypertension (PAH): Evaluation and Management | PAH-Specific Pharmacotherapy | `pah_notes` | PAH Management Notes and PH Center Coordination | `textarea` |  |  |  |

### Pulmonary Hypertension — `cardiology_pulmonary_hypertension_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pulmonary Hypertension: WHO Classification, Diagnosis, and Targeted Therapy | PH Classification, RHC Hemodynamics, and Risk Stratification | `ph_who` | WHO Clinical Classification of Pulmonary Hypertension Groups 1-5 | `select` |  |  |  |
| Pulmonary Hypertension: WHO Classification, Diagnosis, and Targeted Therapy | PH Classification, RHC Hemodynamics, and Risk Stratification | `ph_workup` | PH Diagnosis, Workup, and Right Heart Catheterization — SCREENING FOR PAH: echocardiogram (TTE: PASP estimation from TR velocity [Bernoulli equation; 4V^2]; RV/RA dilation; septal flattening; pericardial effusion; RVSP above 40 mmHg = suspicious; echo is SCREENING not diagnostic); ECHO-BASED PAH PROBABILITY (ESC 2022): ECHOCARDIOGRAPHIC PROBABILITY score based on TR velocity + echo signs of RV/RA involvement: LOW (no/minor signs); INTERMEDIATE (intermediate TR velocity + signs); HIGH (high TR velocity or indirect signs); CONFIRMATION: RIGHT HEART CATHETERIZATION (RHC: GOLD STANDARD REQUIRED for PH diagnosis): DIRECT HEMODYNAMIC MEASUREMENT; catheterization of RA; RV; PA; PCWP (pulmonary capillary wedge pressure = LAP proxy); CO (cardiac output: thermodilution or Fick method); PVR (mPAP - PCWP / CO in Wood Units); ACUTE VASODILATOR TESTING (AVT): for Group 1 IPAH/HPAH only (at BASELINE RHC); CRITERIA POSITIVE: mPAP reduction above 10 mmHg to below 40 mmHg with increased or unchanged CO; occurs in 10-15%; POSITIVE RESPONDERS: trial HIGH-DOSE CALCIUM CHANNEL BLOCKERS (CCBs) alone; amlodipine 20-30 mg/day or nifedipine 120-240 mg/day or diltiazem 720 mg/day; ANNUAL confirmation of CCB response; NOT APPLICABLE: Group 2-5 or SSc-associated PAH or CTD-PAH (vasodilator response rare; CCBs risky in RV failure); DIAGNOSTICS BEYOND RHC: CTPA (CT pulmonary angiography: chronic thromboembolic disease; CTEPH); V/Q scan (CTEPH screening: higher sensitivity than CTPA; perfusion mismatch); pulmonary angiography (CTEPH pre-BPA or pre-PEA); PFTs + DLCO; 6MWT + cardiopulmonary exercise test (CPET); NT-proBNP (risk stratification; treatment response; prognostic); CBC + CMP; ANCA + ANA + anti-Scl-70 + anti-dsDNA + lupus panel + ENA; HIV; hepatitis B/C; ANA + autoimmune panel; sleep study; ABG; HIGH-RESOLUTION CT CHEST; CARDIAC MRI (RV function + volumes; RVEF; T1 mapping; RVEDV; RVEF below 35% = high-risk); GENETICS (BMPR2 testing: all IPAH patients + family members; inform cascade screening); FUNCTIONAL CLASS: WHO FC I-IV (FC I = no limitation; FC II = slight limitation exercise; FC III = marked limitation; FC IV = inability to carry on activity; rest symptoms; correlates with prognosis); RISK STRATIFICATION: 3-strata (low/intermediate/high); multiparameter approach (6MWT; CPET; BNP/NT-proBNP; FC; echo/CMR; hemodynamics); GOAL: ACHIEVE LOW-RISK status | `text` |  |  |  |
| Pulmonary Hypertension: WHO Classification, Diagnosis, and Targeted Therapy | PAH Targeted Therapy, Combination Strategies, and Sotatercept | `ph_drugs` | PAH Drug Classes: ERA, PDE5i, sGC, Prostacyclin, and Sotatercept STELLAR | `select` |  |  |  |
| Pulmonary Hypertension: WHO Classification, Diagnosis, and Targeted Therapy | PAH Targeted Therapy, Combination Strategies, and Sotatercept | `ph_cteph` | CTEPH: Diagnosis, PEA Surgery, BPA, and Riociguat — CTEPH (CHRONIC THROMBOEMBOLIC PULMONARY HYPERTENSION; GROUP 4): organized clot in pulmonary vasculature (does NOT respond to anticoagulation; permanent obstruction; surgical repair); SCREENING: in symptomatic post-PE patients: V/Q scan most sensitive (20-40% CTEPH misclassified on CTPA); DIAGNOSIS: V/Q SCAN (heterogeneous perfusion mismatch; multi-segmental; high sensitivity for CTEPH: 90-100% vs CTPA 50-70%); CONFIRMATORY: invasive pulmonary angiography + RHC; MULTIDETECTOR CTPA (organized web-like clots; mosaic perfusion; enlarged PA; RV strain; proximal filling defects); CARDIAC MRI; LIFETIME ANTICOAGULATION: all CTEPH patients (secondary prevention); TREATMENT: SURGICAL: PULMONARY ENDARTERECTOMY (PEA; Meyns/Jamieson technique: deep hypothermia + cardiac arrest; extract organized thrombus from pulmonary arteries under direct vision; PREFERRED if surgically accessible disease; UCSD specialized centers; 30-day mortality below 5% at expert centers; up to 90% can be cured hemodynamically); ELIGIBILITY: proximal/accessible clot (main/lobar/segmental pulmonary arteries); pre-op PVR assessment; cardiopulmonary reserve; PERSISTENT or INOPERABLE CTEPH (distal disease; high surgical risk): RIOCIGUAT (Adempas; CHEST-1 trial NEJM 2013: riociguat vs placebo in CTEPH [inoperable or persistent post-PEA]: 6MWT +46 meters; PVR reduction; FDA 2013); BALLOON PULMONARY ANGIOPLASTY (BPA: multiple staged bilateral sessions; catheter-based; dilate segmental + subsegmental vessels; MUST-1; RACE BPA trial; Japan CTEPH registry: significant hemodynamic improvement; 6MWT; lung hemorrhage risk [RPE: reperfusion pulmonary edema]; staged graded approach reduces complication rate; now accepted complement to riociguat in inoperable CTEPH); COMBINATION BPA + RIOCIGUAT: emerging as superior to either alone; TREPROSTINIL inhaled: INCREASE trial (FDA 2021 Group 3 ILD-PH); CTEPH: off-label riociguat + BPA; MACITENTAN: MERIT-1 (inoperable CTEPH: macitentan vs placebo: PVR reduction; FDA label update); SURGICAL REFERRAL: CTEPH center evaluation mandatory for ALL CTEPH patients (even if seemingly inoperable: experienced surgeon may find accessible disease; assess benefit-risk) | `text` |  |  |  |
| Pulmonary Hypertension: WHO Classification, Diagnosis, and Targeted Therapy | PAH Targeted Therapy, Combination Strategies, and Sotatercept | `ph_notes` | Pulmonary Hypertension Management Notes and PH Specialist/Cardiology/Pulmonology/Rheumatology/CT Surgery/IR/Pharmacy/RN Education Coordination | `textarea` |  |  |  |

### Resistant Hypertension — `cardiology_hypertension_resistant_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Resistant Hypertension — Evaluation, Spironolactone, and Renal Denervation | Resistant HTN Evaluation | `resistant_htn_def` | Definition and Pseudoresistance (AHA 2018: BP above goal despite 3 antihypertensives of different classes (including diuretic) at maximally tolerated doses; OR controlled with >=4 drugs; prevalence: 12-15% of hypertensives; PSEUDORESISTANCE must be excluded: white coat hypertension (ambulatory BP monitoring (ABPM) confirmatory — gold standard); medication non-adherence (24h urine or serum drug levels; pharmacy refill); suboptimal doses; inappropriate combinations (e.g., 2 CCBs, 2 RAAS); medication interactions (NSAIDs, decongestants, oral contraceptives, stimulants, cocaine, alcohol, licorice); ABPM: 24h mean ambulatory BP <130/80 mmHg in non-CKD non-DM = controlled (white coat hypertension; no escalation needed); ABI (ankle-brachial index) for PAD (compressible arteries in diabetics) | `text` |  |  |  |
| Resistant Hypertension — Evaluation, Spironolactone, and Renal Denervation | Resistant HTN Evaluation | `secondary_causes` | Secondary Hypertension Workup | `select` |  |  |  |
| Resistant Hypertension — Evaluation, Spironolactone, and Renal Denervation | Spironolactone and Renal Denervation | `spiro_pathway` | Spironolactone and Fourth-Line Therapy (PATHWAY-2 trial (NEJM 2015): spironolactone 25-50 mg vs. bisoprolol vs. doxazosin in resistant HTN on 3 drugs; spironolactone BEST fourth drug (systolic -8.7 mmHg vs. bisoprolol -4.5 mmHg vs. doxazosin -4.0 mmHg); MECHANISM: aldosterone antagonist + potassium-sparing; DOSE: 25 mg QD then 50 mg QD if tolerated; MONITOR: potassium (hyperkalemia risk especially with CKD, RAAS combination); creatinine; gynecomastia, menstrual irregularity (antiandrogen effects); EPLERENONE: more selective mineralocorticoid antagonist (less gynecomastia); less potent; 25-50 mg BID; doxazosin 4-8 mg QD (alpha-1 blocker): effective + reduces BPH symptoms; atenolol vs. bisoprolol: modest effect as 4th agent; hydralazine 25-100 mg QD + isosorbide dinitrate (nitrate): particularly effective in African Americans (BiDiL)) | `text` |  |  |  |
| Resistant Hypertension — Evaluation, Spironolactone, and Renal Denervation | Spironolactone and Renal Denervation | `renal_denervation` | Renal Denervation | `select` |  |  |  |

### SVT — `cardiology_svt_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Supraventricular Tachycardia SVT — Classification, Acute Management, and Ablation | SVT Classification and Acute Termination | `svt_f1` | SVT Evaluation: EPIDEMIOLOGY (MOST COMMON SUSTAINED SYMPTOMATIC ARRHYTHMIA AFTER ATRIAL FIBRILLATION; 2.25 PER 1000 PERSON YEARS; MORE COMMON WOMEN; AVNRT MOST COMMON FORM; MECHANISMS (AVNRT AV NODAL REENTRANT TACHYCARDIA: REENTRY WITHIN DUAL AV NODE PATHWAY; SLOW PATHWAY FAST PATHWAY; TYPICAL SLOW-FAST: P WAVE IN QRS Or JUST AFTER; ATYPICAL FAST-SLOW P WAVE BEFORE QRS; AVRT AV REENTRANT TACHYCARDIA: ACCESSORY PATHWAY BYPASS TRACT; ORTHODROMIC: DOWN AV NODE UP PATHWAY NARROW COMPLEX; ANTIDROMIC: DOWN PATHWAY UP AV NODE WIDE COMPLEX; WOLFF-PARKINSON-WHITE WPW: PREEXCITATION DELTA WAVE; SHORT PR; RISK SUDDEN DEATH ACCESSORY PATHWAY SHORT REFRACTORY; ATRIAL TACHYCARDIA AT: FOCAL OR REENTRANT; P WAVE DIFFERENT MORPHOLOGY; JUNCTIONAL TACHYCARDIA; SINOATRIAL NODAL REENTRANT TACHYCARDIA SANRT; MULTIFOCAL ATRIAL TACHYCARDIA MAT COPD CRITICAL ILLNESS; CLINICAL FEATURES (PALPITATIONS SUDDEN ONSET OFFSET; NECK POUNDING FROG SIGN AVNRT ATRIAL CONTRACTION CLOSED VALVES; DIZZINESS LIGHTHEADEDNESS PRESYNCOPE; SYNCOPE HEMODYNAMIC COMPROMISE RARE; DYSPNEA CHEST DISCOMFORT; TACHYCARDIA-INDUCED CARDIOMYOPATHY CHRONIC; ECG FINDINGS: NARROW REGULAR TACHYCARDIA 150-250 bpm; RETROGRADE P WAVES; RP INTERVAL DETERMINES SVT TYPE) | `text` |  |  |  |
| Supraventricular Tachycardia SVT — Classification, Acute Management, and Ablation | SVT Classification and Acute Termination | `svt_f2` | Acute Management and Long-Term Treatment | `select` |  |  |  |

### SVT / Atrial Flutter — `cardiology_svt_atrial_flutter_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| SVT and Atrial Flutter — Diagnosis and Management | SVT Classification and Acute Termination | `svt_f1` | SVT Evaluation: SUPRAVENTRICULAR TACHYCARDIA SVT (HR Over 100; Rhythm Originates Above Bundle Of His; NARROW QRS Under 120 ms; CLASSIFICATION: AVNRT AV NODE RE-ENTRANT TACHYCARDIA Most Common SVT 60 pct; AV Re-entry Two Pathways Fast Slow; Pseudo-R Retrograde P Wave End QRS V1 Differentiates; SHORT RP Interval; AVRT AV RE-ENTRANT TACHYCARDIA Accessory Pathway WPW 30 pct SVT; RETROGRADE Orthodromic NARROW QRS; ANTIDROMIC Wide QRS; ATRIAL TACHYCARDIA Focal Multifocal; FLUTTER Unlike Fibrillation Organized; TYPICAL PRESENTATION (Sudden Onset Termination Palpitations Lightheadedness Dyspnea Chest Pain Presyncope; Rate 150-250; REGULAR Usually AVNRT AVRT; IRREGULAR Atrial Fibrillation; 150 BPM Regular Consider Flutter 2:1 Block); EKG CHARACTERISTICS AVNRT (Narrow Regular Tachycardia 150-250; P Waves Hidden QRS End QRS ST; Retrograde P VA Interval Under 70 ms; PSEUDO-R V1 Pseudo-S Inferior; Abrupt Onset Offset); AVRT WPW (Narrow Regular Orthodromic; DELTA WAVE Pre-Excitation During Sinus Rhythm; Short PR; WIDE QRS Antidromic Or During AF WPW Pre-Excited; WPW AF EMERGENCY Avoid AV Nodal Agents Adenosine Verapamil Digoxin Worsen Accessory Pathway Conduction VF Risk; CARDIOVERT WPW-AF Hemodynamically Unstable; ATRIAL FLUTTER REGULAR SAWTOOTH FLUTTER WAVES 300 BPM 2:1 3:1 Block Typically 150 BPM 2:1; NEGATIVE Flutter Waves II III AVF; Positive V1); DIFFERENTIATE VT vs SVT-A ABERRANCY WIDE COMPLEX (BRUGADA ALGORITHM Or Vereckei; VT More Likely Structural Heart Disease; VI Neg Concordance; AV Dissociation P-Waves Independent; Fusion Capture Beats; RS Under 100 ms Any Precordial; TREAT Unknown Wide QRS As VT) | `text` |  |  |  |
| SVT and Atrial Flutter — Diagnosis and Management | SVT Classification and Acute Termination | `svt_f2` | AVNRT Treatment, Atrial Flutter, and WPW Management | `select` |  |  |  |

### SVT / WPW — `cardiology_svt_wpw_cf`

Screen: 1 page(s) · 2 section(s) · 7 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| SVT and WPW: Classification, Acute Termination, and Ablation | SVT Classification and Diagnosis | `svt_type` | SVT Type and Mechanism | `select` |  |  |  |
| SVT and WPW: Classification, Acute Termination, and Ablation | SVT Classification and Diagnosis | `wpw_risk` | WPW: Risk Stratification for Sudden Death | `select` |  |  |  |
| SVT and WPW: Classification, Acute Termination, and Ablation | SVT Classification and Diagnosis | `svt_ecg_diagnosis` | ECG Diagnosis — 12-lead ECG during tachycardia critical; adenosine (6-12 mg rapid IV push in antecubital vein + 20 mL saline flush) both diagnostic and therapeutic: terminates AVNRT/AVRT (AV node dependent); transiently blocks AV conduction to reveal atrial activity (AT, flutter, AF); contraindicated in severe asthma (bronchospasm), heart transplant recipients; warning in WPW with wide complex: if pre-excited AF (do NOT give AV node blockers including adenosine, diltiazem, verapamil, digoxin — risk of VF); differentiate narrow complex SVT: RP interval; P wave location; termination vs non-termination with adenosine; Brugada algorithm for wide complex tachycardia; vagal maneuvers: Valsalva (supine), modified Valsalva (legs elevated), carotid sinus massage (unilateral, no carotid bruits, no recent stroke); 45% success rate combined with adenosine | `text` |  |  |  |
| SVT and WPW: Classification, Acute Termination, and Ablation | Acute Termination, Chronic Management, and Ablation | `svt_acute` | Acute SVT Termination | `select` |  |  |  |
| SVT and WPW: Classification, Acute Termination, and Ablation | Acute Termination, Chronic Management, and Ablation | `svt_chronic` | Chronic Medical Therapy | `select` |  |  |  |
| SVT and WPW: Classification, Acute Termination, and Ablation | Acute Termination, Chronic Management, and Ablation | `svt_ablation` | Catheter Ablation for SVT | `select` |  |  |  |
| SVT and WPW: Classification, Acute Termination, and Ablation | Acute Termination, Chronic Management, and Ablation | `svt_notes` | SVT / WPW Management Notes and Electrophysiology/Cardiology/Pediatric Cardiology Coordination | `textarea` |  |  |  |

### SVT / WPW / EP Ablation — `cardiology_electrophysiology_svt_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| SVT and WPW — EP Study, Ablation, and Antiarrhythmic Therapy | SVT Classification and Mechanism | `svt_type` | SVT Mechanism | `select` |  |  |  |
| SVT and WPW — EP Study, Ablation, and Antiarrhythmic Therapy | SVT Classification and Mechanism | `ep_study_indications` | EP Study Indications (unexplained syncope with structural heart disease; WPW with palpitations or syncope (stratify SCD risk); post-cardiac arrest survivors without MI; wide complex tachycardia of unknown mechanism; suspected sinus node dysfunction; suspected His-Purkinje conduction disease (HV interval >100 ms = high risk AV block — pacemaker); AV block evaluation in symptomatic patients; pre-ablation mapping) | `text` |  |  |  |
| SVT and WPW — EP Study, Ablation, and Antiarrhythmic Therapy | Catheter Ablation and Outcomes | `ablation_approach` | Ablation Approach | `select` |  |  |  |

### Sports Cardiology — `sports_cardiology_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Sports Cardiology Evaluation | Athlete Profile | `sport` | Sport(s) | `text` |  |  |  |
| Sports Cardiology Evaluation | Athlete Profile | `training_hours` | Weekly Training Hours | `number` |  |  |  |
| Sports Cardiology Evaluation | Athlete Profile | `competition_level` | Competition Level | `select` |  |  |  |
| Sports Cardiology Evaluation | Athlete Profile | `years_training` | Years of Competitive Training | `number` |  |  |  |
| Sports Cardiology Evaluation | Cardiac Screening (AHA 14-Point) | `exertional_chest_pain` | Exertional chest pain or pressure | `checkbox` |  |  |  |
| Sports Cardiology Evaluation | Cardiac Screening (AHA 14-Point) | `unexplained_syncope` | Unexplained syncope or near-syncope | `checkbox` |  |  |  |
| Sports Cardiology Evaluation | Cardiac Screening (AHA 14-Point) | `excessive_exertional_dyspnea` | Excessive exertional dyspnea | `checkbox` |  |  |  |
| Sports Cardiology Evaluation | Cardiac Screening (AHA 14-Point) | `prior_heart_murmur` | Prior recognition of heart murmur | `checkbox` |  |  |  |
| Sports Cardiology Evaluation | Cardiac Screening (AHA 14-Point) | `elevated_systemic_bp` | Elevated systemic BP | `checkbox` |  |  |  |
| Sports Cardiology Evaluation | Cardiac Screening (AHA 14-Point) | `family_hx_premature_death` | Family hx premature sudden death (<50) | `checkbox` |  |  |  |
| Sports Cardiology Evaluation | ECG/Echo Findings | `ecg_interpretation` | ECG Interpretation | `select` |  |  |  |
| Sports Cardiology Evaluation | ECG/Echo Findings | `echo_indicated` | Echocardiogram indicated | `checkbox` |  |  |  |
| Sports Cardiology Evaluation | ECG/Echo Findings | `echo_findings` | Echo Findings (if done) | `textarea` |  |  |  |
| Sports Cardiology Evaluation | ECG/Echo Findings | `clearance` | Clearance Decision | `select` |  |  |  |
| Sports Cardiology Evaluation | ECG/Echo Findings | `notes` | Notes | `textarea` |  |  |  |

### Stable CAD (Advanced) — `cardiology_stable_cad_depth_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Stable CAD — ISCHEMIA, SYNTAX, Anti-Ischemic, and Ranolazine | Stable CAD Evaluation and Risk Stratification | `cad_eval` | CCS Angina Grade, ISCHEMIA Trial, and Noninvasive Testing (CCS ANGINA CLASSIFICATION: Class I: angina only with strenuous exertion; Class II: slight limitation (rapid walking, uphill, cold); Class III: marked limitation (walking 1-2 blocks level); Class IV: angina at rest; DIAGNOSTIC APPROACH: LOW-RISK FEATURES: typical angina + no prior CAD + young: consider EXERCISE TREADMILL TEST (ETT); DUKE TREADMILL SCORE; INTERMEDIATE-RISK: STRESS IMAGING PREFERRED: STRESS ECHO or NUCLEAR SPECT; CORONARY CTA: low-to-intermediate risk; CTFFR (CT-derived FFR): PLATFORM trial; HIGH-RISK FEATURES or INTERMEDIATE STRESS TEST: CORONARY ANGIOGRAPHY + FFR (fractional flow reserve); FFR <0.80 = hemodynamically significant; ISCHEMIA TRIAL (2019): PIVOTAL: moderate-severe ischemia on stress test; routine invasive strategy (cath + revascularization if amenable) vs. optimal medical therapy (OMT) first; RESULT: NO DIFFERENCE in primary endpoint (CV death + MI); EXCEPTIONS: left main disease; severe LV dysfunction; refractory angina; IMPLICATION: OMT first approach APPROPRIATE for stable CAD with moderate-severe ischemia; CATH + REVASCULARIZATION: symptoms refractory to OMT; high-risk anatomy; left main or 3-vessel disease with low EF; FFR-GUIDED PCI: DEFER trial; FAMOUS-NSTEMI; FAME 2: FFR-guided PCI reduced MACE vs. OMT for FFR <0.80; NONOBSTRUCTIVE CAD (MINOCA): MI with non-obstructive coronary arteries; CARDIAC MRI: CMR shows pattern (plaque erosion, embolism, spasm, myocarditis); invasive testing: acetylcholine coronary spasm testing | `text` |  |  |  |
| Stable CAD — ISCHEMIA, SYNTAX, Anti-Ischemic, and Ranolazine | Stable CAD Evaluation and Risk Stratification | `antiischemic` | Anti-Ischemic Therapy — Beta-Blocker, Nitrates, Ranolazine | `select` |  |  |  |
| Stable CAD — ISCHEMIA, SYNTAX, Anti-Ischemic, and Ranolazine | Revascularization — CABG vs. PCI | `syntax_cabg` | SYNTAX Score, CABG vs. PCI Decision, and Arterial Grafting (CABG vs. PCI DECISION: SYNTAX SCORE: anatomical scoring; calculates lesion complexity; LOW SYNTAX (0-22): PCI and CABG equivalent outcomes; INTERMEDIATE (23-32): equipoise; HEART TEAM decision; HIGH SYNTAX (>=33): CABG SUPERIOR (lower MACE); SYNTAX TRIAL: PCI vs. CABG in 3-vessel CAD or left main; 5-year: CABG superior MACE; stroke higher with CABG; repeat revascularization higher with PCI; EXCEL TRIAL (LM): PCI with everolimus-stent vs. CABG in left main <=32 SYNTAX; PRIMARY ENDPOINT non-inferior at 3 years; NOBLE TRIAL (LM): CABG superior at 5 years; CONTRAINDICATIONS TO PCI: diffuse disease; chronic total occlusions (CTO); poor target anatomy; severely calcified; contrast allergy (premedication); renal insufficiency; CABG ADVANTAGES: complete revascularization; better for multivessel + LM + diabetes; ARTERIAL GRAFT SUPERIORITY: LEFT INTERNAL MAMMARY ARTERY (LIMA) to LAD: standard of care; 90-95% 10-year patency (vs. SVG 50-60%); BILATERAL IMA (BIMA): additional survival benefit; higher sternal wound infection risk (DM); RADIAL ARTERY: superior to SVG for non-LAD grafts; CABG + DM: FREEDOM trial: CABG superior to PCI in DM with multivessel disease; MINIMUM VESSEL SIZE for CABG: 1.5 mm diameter viable territory; HYBRID REVASCULARIZATION: LIMA-to-LAD (CABG) + PCI for other vessels; CORONARY ARTERY BYPASS GRAFTING ON-PUMP vs. OFF-PUMP (OPCAB): ROOBY trial: on-pump similar outcomes; OPCAB: avoids cardiopulmonary bypass; less neurologic?; debate ongoing; POST-PCI: DAPT; statin; ACEi/ARB if EF <=40% | `text` |  |  |  |
| Stable CAD — ISCHEMIA, SYNTAX, Anti-Ischemic, and Ranolazine | Revascularization — CABG vs. PCI | `optimizing_cad` | Optimal Medical Therapy and Guideline-Directed Therapy for Stable CAD | `select` |  |  |  |

### Stable CAD / Angina — `cardiology_stable_ischemic_heart_disease_cf`

Screen: 1 page(s) · 2 section(s) · 3 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Stable Ischemic Heart Disease: Symptom Classification, Optimal Medical Therapy, and Revascularization | SIHD Diagnosis, CCS Angina Classification, and Non-Invasive Testing | `sihd_class` | Stable IHD Definition: Chronic Coronary Syndrome CCS Angina; Canadian CCS Class I No Angina with Ordinary Activity II Slight Limitation III Marked Limitation IV Unable any Activity Rest Angina; Stress Testing: Exercise ECG Duke Treadmill Score; Stress Echo Wall Motion; Nuclear Stress Myocardial Perfusion Imaging MPI; Coronary CTA Calcium Score CAC; FFR CT Fractional Flow Reserve CT; Invasive FFR 0.80 Ischemia; iFR 0.89; COURAGE Trial PCI+OMT vs OMT Similar Death/MI Stable; ISCHEMIA Trial OMT vs OMT+Revascularization Similar Primary Endpoint; High-Risk Features Proximal LAD Left Main 3VD; EF Below 35% LVEF; Diabetes Multi-Vessel | `select` |  |  |  |
| Stable Ischemic Heart Disease: Symptom Classification, Optimal Medical Therapy, and Revascularization | SIHD Diagnosis, CCS Angina Classification, and Non-Invasive Testing | `sihd_treatment` | SIHD Treatment: Optimal Medical Therapy First-Line All Stable IHD: Aspirin 81mg QD; High-Intensity Statin Rosuvastatin 20-40mg Atorvastatin 40-80mg LDL Below 70; Beta-Blocker Metoprolol Succinate Carvedilol; CCB Amlodipine 5-10mg Diltiazem Second-Line; Long-Acting Nitrates Isosorbide Mononitrate 30-120mg QD; Ranolazine Ranexa 500-1000mg BID Late Na Channel; SGLT2i Empagliflozin CV Benefit EF Preserved HFpEF EMPEROR; GLP-1 RA Semaglutide; ACEi/ARB LV Dysfunction DM; Revascularization: PCI COURAGE Similar OMT Death/MI Stable; Benefit: Persistent Symptoms OMT Failure; High-Risk: Left Main Above 50% 3VD Reduced EF CABG SYNTAX Score Above 33; FFR-Guided FAME2; Microvascular Angina ACE CCB Ranolazine Ivabradin -- SIHD MEDICAL MANAGEMENT: OPTIMAL MEDICAL THERAPY [OMT; FOUNDATION OF ALL STABLE IHD]: ANTIPLATELET: ASPIRIN [81 mg QD; INDEFINITE IF CAD; 325 mg ACUTE ACS THEN 81; CLOPIDOGREL 75 mg IF ASPIRIN INTOLERANT]; RISK FACTOR MODIFICATION: HIGH-INTENSITY STATIN [ROSUVASTATIN 20-40 mg; ATORVASTATIN 40-80 mg; LDL TARGET BELOW 70 mg/dL OR BELOW 55 VERY HIGH RISK; EZETIMIBE ADD-ON; PCSK9 INHIBITOR IF ABOVE GOAL]; BLOOD PRESSURE [BELOW 130/80; ACEi+CCB PREFERRED IHD]; GLYCEMIC CONTROL [HbA1c TARGET; SGLT2i GLP-1RA CV BENEFIT]; ANTI-ANGINAL THERAPY: BETA-BLOCKERS [FIRST-LINE SYMPTOM CONTROL; REDUCE HR MYOCARDIAL OXYGEN DEMAND; METOPROLOL SUCCINATE XL 25-200 mg QD; CARVEDILOL 3.125-25 mg BID; ATENOLOL 25-100 mg QD; CONTRAINDICATED ACTIVE BRONCHOSPASM DECOMPENSATED HF BRADYCARDIA]; CCB [CALCIUM CHANNEL BLOCKERS]: DIHYDROPYRIDINE [AMLODIPINE 5-10 mg QD; NIFEDIPINE ER 30-90 mg QD; VASODILATE; USED WITH BETA-BLOCKER]; NON-DHP [DILTIAZEM 120-360 mg QD; VERAPAMIL 120-480 mg QD; RATE-REDUCING; NOT WITH BETA-BLOCKER]; NITRATES [SUBLINGUAL NTG 0.3-0.4 mg PRN ACUTE ANGINA; 5 MIN MAX 3 DOSES THEN EMS; LONG-ACTING ISOSORBIDE MONONITRATE 30-120 mg QD; NITRATE-FREE INTERVAL 10-12H AVOID TOLERANCE]; RANOLAZINE [RANEXA; 500-1000 mg BID; LATE SODIUM CHANNEL INHIBITOR; DOES NOT REDUCE HR OR BP; ADD-ON RESIDUAL ANGINA; CONSTIPATION; QTc PROLONGATION MODEST]; IVABRADINE [CORLANOR; IF CHANNEL INHIBITOR; HR REDUCTION; SINUS RHYTHM ONLY; SPARES BP; USED CHRONIC HF+STABLE IHD]; NEWER CARDIOPROTECTIVE [BEYOND ANGINA RELIEF]: SGLT2i [EMPAGLIFLOZIN; DAPAGLIFLOZIN; CANAGLIFLOZIN; CV DEATH REDUCTION HF HOSPITALIZATION; EXTEND TO STABLE IHD+HF]; GLP-1 RA [SEMAGLUTIDE SELECT TRIAL; LIRAGLUTIDE LEADER; ATHEROSCLEROTIC CV BENEFIT; WEIGHT LOSS; USE IF DM OR OBESITY+IHD]; ACEi [ALL IHD+DM+EF BELOW 40%; LISINOPRIL RAMIPRIL ENALAPRIL; REDUCE MYOCARDIAL REMODELING]; REVASCULARIZATION DECISION: COURAGE TRIAL [NEJM 2007; STABLE CCS; PCI+OMT vs OMT ALONE; NO DIFFERENCE DEATH+NONFATAL MI 4.6 YEARS; CONFIRMED OMT FIRST APPROACH]; ISCHEMIA TRIAL [NEJM 2020; MODERATE-SEVERE ISCHEMIA; INVASIVE STRATEGY [PCI/CABG] + OMT vs OMT ALONE; PRIMARY ENDPOINT NEGATIVE; NO DIFFERENCE CV DEATH+MI; REDUCED SPONTANEOUS MI LONG-TERM]; REVASCULARIZATION INDICATIONS [DESPITE OMT]: PERSISTENT SYMPTOMS IMPAIRING QOL; NONINVASIVE HIGH-RISK FEATURES [EF BELOW 35%; LARGE ISCHEMIC TERRITORY; PROXIMAL LAD STENOSIS]; PCI INDICATIONS [SINGLE-VESSEL; LOW SYNTAX SCORE BELOW 22; SELECTED MULTIVESSEL; FFR-GUIDED]; CABG INDICATIONS [LEFT MAIN ABOVE 50%; 3VD DM [FREEDOM TRIAL]; HIGH SYNTAX ABOVE 33; MULTI-VESSEL+EF BELOW 35%; COMPLETE REVASCULARIZATION NOT ACHIEVABLE PCI; MICROVASCULAR ANGINA [CORONARY MICROVASCULAR DYSFUNCTION; NO OBSTRUCTIVE CAD]: DIAGNOSIS [CORONARY FLOW RESERVE CFR BELOW 2; IMR INDEX MICROVASCULAR RESISTANCE; FEMALE PREDOMINANTLY; CHEST PAIN EXERTIONAL SYNDROME X]; TREATMENT [RANOLAZINE; CCB; ACEi; BETA-BLOCKER; IVABRADIN; ENHANCED EXTERNAL COUNTERPULSATION EECP] | `text` |  |  |  |
| Stable Ischemic Heart Disease: Symptom Classification, Optimal Medical Therapy, and Revascularization | Stable IHD Management Notes | `sihd_mgmt_notes` | Stable IHD Management Notes and Cardiology/Interventional Cardiology/Cardiac Surgery/Nuclear Medicine/Pharmacy/Nursing/Cardiac Rehabilitation/Endocrinology DM/Primary Care/Palliative Care Coordination | `textarea` |  |  |  |

### Stable IHD — `cardiology_sihd_management_cf`

Screen: 1 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Stable Ischemic Heart Disease: Medical Therapy, Anti-Anginal Therapy, and Revascularization | SIHD Diagnosis, Risk Assessment, and Initial Evaluation | `sihd_dx` | SIHD Diagnosis and Non-Invasive Testing | `select` |  |  |  |
| Stable Ischemic Heart Disease: Medical Therapy, Anti-Anginal Therapy, and Revascularization | SIHD Diagnosis, Risk Assessment, and Initial Evaluation | `sihd_secondary_prevention` | Secondary Prevention in SIHD | `select` |  |  |  |
| Stable Ischemic Heart Disease: Medical Therapy, Anti-Anginal Therapy, and Revascularization | Anti-Anginal Therapy and Revascularization Decisions | `sihd_meds` | Anti-Anginal Pharmacotherapy | `select` |  |  |  |
| Stable Ischemic Heart Disease: Medical Therapy, Anti-Anginal Therapy, and Revascularization | Anti-Anginal Therapy and Revascularization Decisions | `sihd_revasc` | Revascularization: PCI vs CABG vs Medical Therapy | `select` |  |  |  |
| Stable Ischemic Heart Disease: Medical Therapy, Anti-Anginal Therapy, and Revascularization | Anti-Anginal Therapy and Revascularization Decisions | `sihd_cardiac_rehab` | Cardiac Rehabilitation and Advanced Therapies — cardiac rehabilitation (CR): Class I for all SIHD patients (AACVPR/AHA; post-MI, post-PCI, post-CABG, HF); Phase 1 (hospital; 3-5 days); Phase 2 (outpatient; 36 sessions x12 weeks; ECG monitoring; exercise prescription); Phase 3 (maintenance); reduces mortality 25-35%; improves quality of life; depression screening; COMPLETE coronary anatomy map for surgical planning; EECP (enhanced external counterpulsation): non-invasive augmentation of coronary perfusion in refractory angina (Class IIb); SPINAL CORD STIMULATION (SCS): refractory angina not amenable to revascularization; TMRS (transmyocardial revascularization): limited data; CORONARY ARTERY SPASM MANAGEMENT: CCBs (diltiazem, amlodipine) + long-acting nitrates; avoid beta-blockers without CCBs (unopposed vasospasm); MICROVASCULAR ANGINA (cardiac syndrome X): ECG-gated myocardial perfusion abnormalities + normal coronary angiography; IMR (index of microcirculatory resistance) or CFR (coronary flow reserve) invasive assessment; ranolazine + CCB; INOCA (ischemia with no obstructive CAD): clinical entity; coronary physiology testing; agonist provocation testing (acetylcholine); prognosis: benign but symptomatic burden; sex differences: women more often INOCA; WISE-CORONARY trial | `text` |  |  |  |
| Stable Ischemic Heart Disease: Medical Therapy, Anti-Anginal Therapy, and Revascularization | Anti-Anginal Therapy and Revascularization Decisions | `sihd_notes` | SIHD Management Notes and Cardiology/Cardiac Rehabilitation/Cardiac Surgery/Pharmacy/Dietitian Coordination | `textarea` |  |  |  |

### Syncope — `cardiology_syncope_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Syncope — Classification, Risk Stratification, and Workup | Evaluation and Classification | `sync_f1` | Syncope Evaluation: DEFINITION AND EPIDEMIOLOGY (SYNCOPE TRANSIENT LOSS OF CONSCIOUSNESS TLOC Due To Global Cerebral Hypoperfusion; SPONTANEOUS RECOVERY Without Intervention; INCIDENCE 6 Per 1000 PERSON-YEARS; LIFETIME PREVALENCE 35 pct Adults; RECURRENT IN 35 pct; 1-3 pct ALL ED VISITS; IMPORTANT DIFFERENTIATE SYNCOPE From (SEIZURE Tongue Biting Prolonged Post-Ictal; METABOLIC HYPOGLYCEMIA HYPONATREMIA HYPOXIA No Self-Recovery Without Treatment; VERTEBROBASILAR TIA Neurological Symptoms; DROP ATTACKS Legs Give Way Consciousness Intact; PSYCHOGENIC PSEUDO-SYNCOPE Eyes Closed Passive Resistance Prolonged; CLASSIFICATION MECHANISM (REFLEX NEURALLY MEDIATED MOST COMMON 50 pct TOTAL (VASOVAGAL VVS COMMON FAINT (TRIGGERED: Emotional Stress Pain Fear Blood; Prolonged Standing Heat; PRODROME Nausea Diaphoresis Pallor Warmth Tunnel Vision Lightheaded; SITUATIONAL SYNCOPE Cough Defecation Micturition Swallowing Laughter; CAROTID SINUS SYNDROME CSS Turn Head Shave Collar; POSTPRANDIAL Elderly After Eating BP Drop; ORTHOSTATIC HYPOTENSION OH 15-25 pct SYNCOPE CAUSES (SYSTOLIC BP DROP Over 20 mmHg Or Diastolic Over 10 mmHg Within 3 Min Standing; EARLY Under 3 Min Classic OH; DELAYED Over 3 Min Neurogenic Autonomic; INITIAL STANDING Under 1 Min Initial OH; CAUSES: VOLUME DEPLETION DEHYDRATION; AUTONOMIC FAILURE Parkinson Diabetic Neuropathy; MEDICATIONS DIURETICS ANTIHYPERTENSIVES NITRATES ALPHA-BLOCKERS; CARDIAC SYNCOPE HIGH-RISK MECHANISM (ARRHYTHMIA: BRADYCARDIA SSS AV Block 3rd Degree; TACHYCARDIA VT SVT With Low EF; PROLONGED QT BRUGADA LQT; WPW Pre-Excitation AF; STRUCTURAL: SEVERE AS AORTIC STENOSIS Classic Effort Syncope; HCM HYPERTROPHIC CARDIOMYOPATHY; TAMPONADE; PULMONARY EMBOLISM PE; PULMONARY HYPERTENSION; MYOCARDIAL INFARCTION; RARE: SUBCLAVIAN STEAL; HISTORY MOST IMPORTANT DIAGNOSTIC TOOL: PRODROME DURATION POSITION ACTIVITY Preceding; POST-EVENT Confusion Recovery Duration; WITNESSES ACCOUNT Eye Deviation Tonic-Clonic Movements; MEDICATIONS REVIEW; FAMILY HISTORY SCD CHANNELOPATHY; PRIOR CARDIAC DISEASE; PHYSICAL EXAM: ORTHOSTATIC VITALS LYING STANDING 1-3 MINUTES; CARDIOVASCULAR MURMURS; NEUROLOGICAL Baseline) | `text` |  |  |  |
| Syncope — Classification, Risk Stratification, and Workup | Evaluation and Classification | `sync_f2` | Risk Stratification and Diagnostic Tests | `select` |  |  |  |

### Syncope Evaluation — `cardiology_syncope_depth_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Syncope — Classification, Risk Stratification, Tilt Table, ILR | Syncope Classification and History | `syncope_class` | Syncope Classification and Initial Evaluation (SYNCOPE DEFINITION: transient loss of consciousness + postural tone → complete + rapid recovery (self-terminating); ETIOLOGY: REFLEX (NEURALLY-MEDIATED) 50%: vasovagal (VVS; common faint); situational (cough, micturition, defecation, deglutition); CAROTID SINUS SYNDROME; CARDIAC 25%: ARRHYTHMIA (Brady: sick sinus, AV block, pacemaker failure; Tachy: VT, SVT, WPW); STRUCTURAL: aortic stenosis, HCM, PE, acute MI, cardiac tamponade; ORTHOSTATIC HYPOTENSION 15%: neurogenic, drug-induced, volume depletion; NON-SYNCOPAL MIMICS: seizure, TIA, hypoglycemia, psychogenic pseudosyncope; INITIAL EVALUATION (ESC 2018): HISTORY: prodrome (nausea, diaphoresis, warmth = vasovagal); triggers; position at onset; duration; recovery; bystander account; medications (antihypertensives, diuretics, QT-prolonging); family history SCD; PHYSICAL EXAM: orthostatic BP (1 + 3 min standing); cardiac exam; ECG (mandatory); CAROTID SINUS MASSAGE: 5-10 second pressure; monitor ECG + BP; positive: >3 sec pause (CSS cardioinhibitory) or >50 mmHg BP drop (vasodepressor); VASOVAGAL HISTORY SCORE (Calgary Syncope Symptom Score): predicts VVS; Calgary SCORE >=3 = VVS likely; ECG FINDINGS REQUIRING ADMISSION: new BBB, QTc >500 ms, complete AV block, VT, pre-excitation (WPW); RISK STRATIFICATION SCORES: ROSE RULE: BNP >=300, bradycardia <=50, rectal bleeding, anemia Hgb <=90, oxygen sat <=94%, Q wave (aVR): any positive = admit; CANADIAN SYNCOPE RISK SCORE; SAN FRANCISCO SYNCOPE RULE: CHF, Hct <=30%, abnormal ECG, SBP <=90, dyspnea) | `text` |  |  |  |
| Syncope — Classification, Risk Stratification, Tilt Table, ILR | Syncope Classification and History | `workup` | Diagnostic Workup — Tilt Table, ILR, and Cardiac Imaging | `select` |  |  |  |
| Syncope — Classification, Risk Stratification, Tilt Table, ILR | Syncope Management by Type | `vvs_management` | Vasovagal Syncope and Orthostatic Syncope Treatment (VASOVAGAL SYNCOPE (VVS) MANAGEMENT: EDUCATION: most important; benign; lifestyle modification; TRIGGER AVOIDANCE: prolonged standing; dehydration; heat; emotional stimuli; INCREASED FLUID INTAKE: 2-3 L/day; increased salt intake (2-4 g/day, unless HTN/CHF/CKD); PHYSICAL COUNTERPRESSURE MANEUVERS: LEG CROSSING + ISOMETRIC MUSCLE TENSING: increase CO; most effective intervention (PC-Trial); COMPRESSION STOCKINGS: waist-high; reduce venous pooling; TILT TRAINING: difficult compliance; PHARMACOTHERAPY: MIDODRINE: alpha-1 agonist; supine hypertension risk; POST-FALL PREVENTION; 5-10 mg TID (last dose before 6 PM); FLUDROCORTISONE: mineralocorticoid; volume expansion; 0.1 mg QD; electrolyte + BP monitoring; BETA-BLOCKERS: NOT recommended (no benefit per POST trial; BETA 1 BLOCKADE during VVS may worsen via unopposed vasodilation); SSRI (PAROXETINE, SERTRALINE): neurally-mediated syncope; central serotonin; RECURRENT UNEXPLAINED SYNCOPE + CARDIOINHIBITORY: CARDIAC PACEMAKER: ISSUE-3/SPAIN trial: dual-chamber pacing with closed-loop stimulation (CLS) technology; reduces recurrence; SELECT: documented asystole on TTT or ILR; ORTHOSTATIC HYPOTENSION SYNCOPE: NON-PHARM FIRST: same as neurogenic OH; MIDODRINE + FLUDROCORTISONE; PYRIDOSTIGMINE; DROXIDOPA (if neurogenic) | `text` |  |  |  |
| Syncope — Classification, Risk Stratification, Tilt Table, ILR | Syncope Management by Type | `cardiac_syncope` | Cardiac Cause Syncope and Implantable Devices | `select` |  |  |  |

### Syncope Evaluation — `cardiology_syncope_evaluation_cf`

Screen: 1 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Syncope: Evaluation, Risk Stratification, and Management | Classification and Initial Evaluation | `syncope_type` | Syncope Classification (ESC 2018) | `select` |  |  |  |
| Syncope: Evaluation, Risk Stratification, and Management | Classification and Initial Evaluation | `syncope_risk_scores` | Risk Stratification Scores | `select` |  |  |  |
| Syncope: Evaluation, Risk Stratification, and Management | Classification and Initial Evaluation | `syncope_initial_workup` | Initial Evaluation — history: onset/offset, position, activity, prodrome, witness, recovery, medications; examination: orthostatic BP and HR (1 and 3 min); cardiac auscultation; neurological; ECG (12-lead); basic metabolic panel; CBC; glucose (hypoglycemia mimics syncope); D-dimer if PE suspected; troponin if MI suspected; CT head NOT routinely indicated (no focal neuro deficits, no head trauma, no papilledema); imaging only if clinical suspicion of structural brain disease; exclude seizure (postictal state, urinary incontinence, cyanosis, biting lateral tongue — though these can overlap) | `text` |  |  |  |
| Syncope: Evaluation, Risk Stratification, and Management | Diagnostic Workup and Management | `syncope_cardiac_tests` | Cardiac Diagnostic Testing | `select` |  |  |  |
| Syncope: Evaluation, Risk Stratification, and Management | Diagnostic Workup and Management | `syncope_tilt_table` | Tilt Table Test | `select` |  |  |  |
| Syncope: Evaluation, Risk Stratification, and Management | Diagnostic Workup and Management | `syncope_treatment` | Management by Syncope Type | `select` |  |  |  |
| Syncope: Evaluation, Risk Stratification, and Management | Diagnostic Workup and Management | `syncope_driving` | Driving Restrictions | `select` |  |  |  |
| Syncope: Evaluation, Risk Stratification, and Management | Diagnostic Workup and Management | `syncope_notes` | Syncope Evaluation Notes and Cardiology/Electrophysiology/Neurology/Primary Care Coordination | `textarea` |  |  |  |

### Transcatheter F/U — `transcatheter_procedure_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Transcatheter Procedure Follow-up | Procedure Details | `procedure_type` | Procedure Type | `select` |  |  |  |
| Transcatheter Procedure Follow-up | Procedure Details | `procedure_date` | Procedure Date | `date` |  |  |  |
| Transcatheter Procedure Follow-up | Procedure Details | `days_post_procedure` | Days Post-Procedure | `number` |  |  |  |
| Transcatheter Procedure Follow-up | Procedure Details | `device_brand` | Device / Valve Brand | `text` |  |  |  |
| Transcatheter Procedure Follow-up | Follow-up Assessment | `access_site_ok` | Access site healing without complication | `checkbox` |  |  |  |
| Transcatheter Procedure Follow-up | Follow-up Assessment | `pacemaker_need` | New pacemaker placed post-procedure | `checkbox` |  |  |  |
| Transcatheter Procedure Follow-up | Follow-up Assessment | `stroke_tia` | Stroke or TIA since procedure | `checkbox` |  |  |  |
| Transcatheter Procedure Follow-up | Follow-up Assessment | `echo_done` | Post-procedure echo performed | `checkbox` |  |  |  |
| Transcatheter Procedure Follow-up | Follow-up Assessment | `echo_result` | Echo Result | `select` |  |  |  |
| Transcatheter Procedure Follow-up | Anticoagulation/Antiplatelet | `regimen` | Current Regimen | `select` |  |  |  |
| Transcatheter Procedure Follow-up | Anticoagulation/Antiplatelet | `planned_duration` | Planned Duration | `text` |  |  |  |
| Transcatheter Procedure Follow-up | Anticoagulation/Antiplatelet | `notes` | Assessment and Plan | `textarea` |  |  |  |

### VT Management — `cardiology_vt_management_cf`

Screen: 1 page(s) · 2 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Ventricular Tachycardia: Classification, Acute Management, and Ablation | VT Classification, Etiology, ECG Criteria, and Risk Stratification | `vt_types` | Sustained vs Nonsustained VT, Structural vs Idiopathic, RVOT PVC, and VT Morphology | `select` |  |  |  |
| Ventricular Tachycardia: Classification, Acute Management, and Ablation | VT Classification, Etiology, ECG Criteria, and Risk Stratification | `vt_ecg` | VT vs SVT with Aberrancy: Brugada/Vereckei Criteria, Broad Complex Tachycardia DDx — BROAD COMPLEX TACHYCARDIA DIFFERENTIAL (QRS above 120 ms + rate above 100 bpm): VT (most common in structural heart disease; ALWAYS CONSIDER VT until proven otherwise; wrong treatment kills); SVT WITH ABERRANCY (preexisting BBB; rate-related aberrancy; Wolf-Parkinson-White antidromic); PACED RHYTHM; HYPERKALEMIA; MEDICATIONS (Na-channel blockers); ECG CRITERIA FOR VT vs SVT (multiple algorithms): BRUGADA CRITERIA (1991; stepwise; sensitivity 98.7%; specificity 96.5%): STEP 1: ABSENCE OF RS IN ALL PRECORDIAL LEADS (all QS or QR or R)?? YES = VT (Concordance); STEP 2: RS INTERVAL (onset R to nadir S) above 100 ms IN ANY PRECORDIAL LEAD? YES = VT; STEP 3: AV DISSOCIATION (P and QRS independent)? YES = VT; STEP 4: MORPHOLOGY CRITERIA IN V1-V2 + V6 (specific morphologic VT patterns; no concordance with LBBB/RBBB SVT patterns)? YES = SVT WITH ABERRANCY; OTHERWISE = VT; VERECKEI CRITERIA (simplified stepwise): AV DISSOCIATION (YES = VT); INITIAL R IN aVR (YES = VT); INITIAL R VECTOR IN aVR ABOVE 40 ms (YES = VT); Vi/Vt RATIO (initial vs terminal deflection velocity; below 1 = VT); WELLENS CRITERIA: AV DISSOCIATION (P waves independent; fusion/capture beats); QRS ABOVE 140 ms; NORTHWEST AXIS (AXIS between -90 and -180 = VT); SPECIFIC MORPHOLOGY (QRS in V6: R/S ratio below 1 = VT); CONCORDANCE (all QRS same direction V1-V6 = VT); CLASSIC SIGNS OF VT: CAPTURE BEATS (narrow QRS from sinus beat capturing between VT complexes); FUSION BEATS (fusion of VT + sinus beat); AV DISSOCIATION (cannon A waves in JVP; variable S1; variable BP between beats); NO RESPONSE TO ADENOSINE (idiopathic VT responds; scar VT usually does not); NB: ADENOSINE FOR BROAD COMPLEX TACHYCARDIA: ONLY if REGULAR + KNOWN PREEXCITATION or hemodynamically STABLE + SUSPECT SVT; AVOID in polymorphic VT; VT storm; known structural heart disease (may degenerate); RISK STRATIFICATION OF VT: CARDIAC ARREST SURVIVORS: HIGH RISK (secondary prevention ICD; ischemic cardiomyopathy + documented sustained VT/VF; strongest ICD indication); SCD PREDICTORS: LVEF (primary prevention ICD LVEF below 35% [MADIT-II; SCD-HeFT]; QRS duration; NSVT + reduced EF + SAECG); TORSADES RISK FACTORS: QTc above 500 ms; hypokalemia; hypomagnesemia; multiple QT-prolonging drugs; female; bradycardia; QTMR test (QTc changes with HR); ARVC RISK (multiple task force; number of risk factors: SCD family history; unexplained syncope; extensive RV dysfunction; many VT episodes; young age; PKP2 mutation; PVQRS fragmentation) | `text` |  |  |  |
| Ventricular Tachycardia: Classification, Acute Management, and Ablation | VT Acute Treatment, VT Storm, ICD, and Catheter Ablation | `vt_acute` | Acute VT Termination, VT Storm ICU Protocol, Amiodarone, and Sedation | `select` |  |  |  |
| Ventricular Tachycardia: Classification, Acute Management, and Ablation | VT Acute Treatment, VT Storm, ICD, and Catheter Ablation | `vt_ablation` | ICD Indications, Catheter Ablation Substrate Mapping, SMASH-VT/VTACH Trials -- ICD (IMPLANTABLE CARDIOVERTER-DEFIBRILLATOR): PRIMARY PREVENTION INDICATIONS: ISCHEMIC CARDIOMYOPATHY (prior MI) + LVEF below 35% + NYHA II-III on GDMT (MADIT-II; SCD-HeFT; 1A indication; wait at least 40 days post-MI + 3 months post-revascularization for LVEF reassessment); NONISCHEMIC CARDIOMYOPATHY + LVEF below 35% + NYHA II-III (DANISH trial; slightly less benefit than ischemic; SCD-HeFT showed benefit pooled; 1A indication; some wait list); HCM with ONE or more MAJOR RISK FACTORS (ICD for HCM: prior cardiac arrest or sustained VT; spontaneous NSVT; maximal LV wall thickness above 30 mm; abnormal BP response to exercise; first-degree relative sudden death below 40; HCM Risk-SCD Calculator 5-year SCD risk above 6% = ICD reasonable); ARVC (multiple risk factors); BRUGADA SYNDROME; LQTS WITH SYNCOPE (after beta-blocker failure); CPVT (ICD if syncope/VT despite beta-blockers + flecainide); SECONDARY PREVENTION (cardiac arrest survivor; sustained VT/VF without reversible cause; 1A; ICD implant): SUBCUTANEOUS ICD (S-ICD; Emblem; no transvenous lead; preferred for NO pacing indication; poor venous access; young patients; prior lead infection; BMI); BIVENTRICULAR ICD (CRT-D; HFrEF + LBBB + QRS above 150 + LVEF below 35%: combined anti-arrhythmic + resynchronization + defibrillation); WEARABLE DEFIBRILLATOR (LifeVest; post-MI acute phase; bridge to ICD decision; newly diagnosed DCM; peripartum cardiomyopathy); CATHETER ABLATION OF VT: INDICATIONS (AHA 2017; HRS/EHRA/APHRS/SOLAECE): RECURRENT VT DESPITE ANTIARRHYTHMIC DRUGS; FREQUENT INAPPROPRIATE ICD SHOCKS; FIRST-LINE for IDIOPATHIC VT (RVOT; fascicular; LVOT; curative intent); ICD-SHOCK REDUCTION GOAL for structural disease; SMASH-VT (NEJM 2007; prophylactic ablation vs no ablation post-VT or VF ablation-only arm: ICD therapies 12% vs 33% at 2-year follow-up; FIRST RCT showing ablation reduces VT in structural disease); VTACH TRIAL (Lancet 2010; preventive ablation in ICM + prior sustained VT: 47% vs 29% VT/VT-storm/ICD shocks at 2 years; benefit); REDO ABLATION (THAW trial; 2021; SMASH-VT was patients after index VT; REDO ablation if recurrent); MAPPING TECHNIQUES: ELECTROANATOMIC MAPPING (CARTO; EnSite; 3D reconstruction of LV/RV endocardium; identify BIPOLAR VOLTAGE MAP: scar below 0.5 mV; border zone 0.5-1.5 mV; healthy above 1.5 mV); ACTIVATION MAPPING (during ongoing VT; PRESYSTOLIC activity; early activation = exit site); ENTRAINMENT MAPPING (during pace-mapping in VT; CONCEALED ENTRAINMENT = within protected isthmus; POST-PACING INTERVAL minus VT cycle length below 30 ms = good target); SUBSTRATE ABLATION (cannot induce VT or hemodynamically unstable VT: ablate at scar border zone; late potentials; local abnormal ventricular activities [LAVAs]; homogenization ablation); EPICARDIAL ABLATION (access via subxiphoid pericardial puncture; needed for sarcoid; ARVC; NICM with epicardial scar; Chagas; DCM basal subepicardial substrate); CRYO-MAPPING + CRYOABLATION (limited role in VT; RF ablation preferred); STEREOTACTIC ABLATIVE RADIOTHERAPY (SABR; STAR trial; noninvasive radiation; refractory VT not amenable to catheter ablation; 25 Gy single fraction; emerging) | `text` |  |  |  |
| Ventricular Tachycardia: Classification, Acute Management, and Ablation | VT Acute Treatment, VT Storm, ICD, and Catheter Ablation | `vt_notes` | Ventricular Tachycardia Management Notes and Electrophysiology/Cardiac Surgery/Critical Care/ICD Clinic/Advanced Heart Failure/Imaging/Pharmacy Coordination | `textarea` |  |  |  |

### VT/VF — `cardiology_ventricular_tachycardia_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Ventricular Tachycardia VT — Diagnosis, Acute Management, and ICD Therapy | VT Classification and Acute Termination | `vt_f1` | Ventricular Tachycardia Evaluation: DEFINITION (WIDE COMPLEX TACHYCARDIA OVER 100 bpm VENTRICULAR ORIGIN; SUSTAINED VT OVER 30 SECONDS OR HEMODYNAMIC COMPROMISE; NONSUSTAINED VT NSVT UNDER 30 SECONDS SELF-TERMINATES; MONOMORPHIC VT: UNIFORM QRS MORPHOLOGY; STRUCTURAL HEART DISEASE SCAR-MEDIATED MOST COMMON; POLYMORPHIC VT: VARYING QRS MORPHOLOGY; ACUTE ISCHEMIA; CHANNELOPATHIES; TORSADES DE POINTES TdP (POLYMORPHIC VT LONG QT; SINUSOIDAL TWIST AROUND AXIS; ACQUIRED: QT PROLONGING DRUGS; HYPOKALEMIA HYPOMAGNESEMIA; BRADYCARDIA-DEPENDENT; CONGENITAL LONG QT SYNDROME; VENTRICULAR FIBRILLATION VF: CHAOTIC NO ORGANIZED RHYTHM; CARDIAC ARREST; ETIOLOGY (STRUCTURAL HEART DISEASE (CORONARY ARTERY DISEASE CAD MOST COMMON; POST-MI SCAR; DILATED CARDIOMYOPATHY; HCM; ARVC ARRHYTHMOGENIC RIGHT VENTRICULAR CARDIOMYOPATHY FATTY FIBROFATTY REPLACEMENT RV; CHANNELOPATHIES: BRUGADA SYNDROME COVED ST ELEVATION V1-V3 RIGHT BUNDLE; LONG QT SYNDROME LQTS1 2 3; SHORT QT; CATECHOLAMINERGIC POLYMORPHIC VT CPVT; IDIOPATHIC VT (NO STRUCTURAL DISEASE: FASCICULAR VT VERAPAMIL-SENSITIVE; RVOT RIGHT VENTRICULAR OUTFLOW TRACT; ECG DIAGNOSIS: AV DISSOCIATION CONFIRMS VT; CONCORDANCE ALL NEGATIVE POSITIVE; FUSION CAPTURE BEATS; WIDER THAN 160 MSEC; AXIS NORTHWEST UNUSUAL) | `text` |  |  |  |
| Ventricular Tachycardia VT — Diagnosis, Acute Management, and ICD Therapy | VT Classification and Acute Termination | `vt_f2` | Acute Management and ICD Implantation | `select` |  |  |  |

### VTE Management — `cardiology_vte_management_cf`

Screen: 1 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| VTE: DVT and PE Diagnosis, Anticoagulation, and Thrombolysis | DVT and PE Diagnosis: Clinical Assessment and Imaging | `vte_probability` | Clinical Pre-test Probability Assessment | `select` |  |  |  |
| VTE: DVT and PE Diagnosis, Anticoagulation, and Thrombolysis | DVT and PE Diagnosis: Clinical Assessment and Imaging | `vte_anticoagulation` | DOAC and Anticoagulation Selection | `select` |  |  |  |
| VTE: DVT and PE Diagnosis, Anticoagulation, and Thrombolysis | Acute PE Management: Thrombolysis, Catheter-Based, and Extended Anticoagulation | `vte_thrombolysis` | Massive and Submassive PE: Thrombolysis and Catheter Therapy | `select` |  |  |  |
| VTE: DVT and PE Diagnosis, Anticoagulation, and Thrombolysis | Acute PE Management: Thrombolysis, Catheter-Based, and Extended Anticoagulation | `vte_duration` | Duration of Anticoagulation and Extended Therapy | `select` |  |  |  |
| VTE: DVT and PE Diagnosis, Anticoagulation, and Thrombolysis | Acute PE Management: Thrombolysis, Catheter-Based, and Extended Anticoagulation | `vte_special` | HIT, Cancer VTE, and Special Populations | `select` |  |  |  |
| VTE: DVT and PE Diagnosis, Anticoagulation, and Thrombolysis | Acute PE Management: Thrombolysis, Catheter-Based, and Extended Anticoagulation | `vte_notes` | VTE Management Notes and Cardiology/Pulmonology/Hematology/Vascular Surgery/Pharmacy Coordination | `textarea` |  |  |  |

### Valvular Heart Disease — `cardiology_valvular_heart_disease_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Valvular Heart Disease: Aortic Stenosis, Mitral Regurgitation, and Mitral Stenosis | Valvular Heart Disease AHA/ACC Staging and Echocardiographic Classification | `vhd_class` | AHA/ACC VHD Staging: Stage A At Risk No Hemodynamic Consequence; Stage B Progressive Abnormal Hemodynamics No Symptoms; Stage C Severe Asymptomatic C1 Preserved EF C2 Reduced; Stage D Severe Symptomatic D1 Classic D2 Low-Flow Low-Gradient Low EF D3 Paradoxical Low-Flow; Aortic Stenosis Severity: Mild AVA Above 1.5cm2; Moderate 1.0-1.5; Severe Below 1.0cm2; Very Severe Below 0.6; Mean Gradient Severe Above 40 mmHg Mild Below 20; Jet Velocity Severe Above 4m/s; Mitral Regurgitation: Primary Leaflet Structural Prolapse Flail Rheumatic; Secondary Functional Ischemic Dilated CM; ERO Effective Regurgitant Orifice Area Severe Above 0.4 Primary Above 0.2 Secondary; Mitral Stenosis: Mean Gradient Above 10 MVA Below 1.0cm2 Severe; Rheumatic Calcification Commissural Fusion; Wilkins Score PBMV Percutaneous Balloon Mitral Valvuloplasty | `select` |  |  |  |
| Valvular Heart Disease: Aortic Stenosis, Mitral Regurgitation, and Mitral Stenosis | Valvular Heart Disease AHA/ACC Staging and Echocardiographic Classification | `vhd_symptoms` | VHD Symptoms and Physical Exam: AS Classic Triad: Angina Syncope Heart Failure; Murmur Crescendo-Decrescendo Systolic 2nd RICS Radiation to Carotids; Reduced S2 A2; Slow Carotid Upstroke Pulsus Tardus et Parvus; Prognosis Post-Symptoms: Angina 5Y 50%; Syncope 3Y 50%; HF 2Y 50%; MR: Holosystolic Murmur Apex Radiation Axilla; S3 Volume Overload; Pulmonary Rales; Parasternal Heave PHT; MS: Low-Pitched Diastolic Rumble Apex; Presystolic Accentuation Sinus Rhythm; Opening Snap; AF New-Onset MS; Malar Flush; Loud S1 Pliable; Symptoms: Dyspnea Exertional; Orthopnea; Hemoptysis; Embolic Event AF MS; 6MWT; NYHA Class; Brain Natriuretic Peptide BNP NT-proBNP; Frailty KATZ STS Score Pre-TAVR -- SYMPTOMS AND MONITORING: AORTIC STENOSIS SYMPTOMS [STAGE D TRIGGERS INTERVENTION]: ANGINA [CAD COEXISTS 50%; ALSO DEMAND ISCHEMIA HYPERTROPHIED LV; PROGNOSIS: 50% MORTALITY 5Y]; SYNCOPE/NEAR-SYNCOPE [EXERTIONAL; FIXED OUTPUT; REFLEX MECHANISM; PROGNOSIS: 50% MORTALITY 3Y]; HEART FAILURE DYSPNEA [LATE; LVEF PRESERVED EARLY; DIASTOLIC; LVEF REDUCED LATE; PROGNOSIS: 50% MORTALITY 2Y]; HEMODYNAMICS MONITORING: ECHO [ANNUALLY STAGE C SEVERE; EVERY 3-5Y MODERATE; EVERY 5Y MILD]; BNP/NT-PROBNP [ELEVATED STAGE D; GUIDELINE-RECOMMENDED ASYMPTOMATIC ASSESSMENT]; EXERCISE STRESS TEST [ASYMPTOMATIC; REVEAL SYMPTOMS; CONTRAINDICATED SYMPTOMATIC]; MITRAL REGURGITATION SYMPTOMS [STAGE D1]: EXERTIONAL DYSPNEA [REDUCED EFFECTIVE FORWARD STROKE VOLUME]; FATIGUE; PALPITATIONS [AF COMMON]; HEART FAILURE SYMPTOMS ADVANCED; PULMONARY EDEMA ACUTE; MONITORING [SEVERE ASYMPTOMATIC MR]: TTE [Q6-12M LVEF AND LVESD; INTERVENE C2 EVEN ASYMPTOMATIC]; BNP; EXERCISE [MASKED SYMPTOMS]; MITRAL STENOSIS SYMPTOMS: DYSPNEA ON EXERTION [FIRST SYMPTOM; INCREASED HEART RATE REDUCES FILLING TIME; FIXED MVA]; ORTHOPNEA PND; PULMONARY EDEMA ACUTE [PREGNANCY; EXERCISE; AF]; HEMOPTYSIS [RUPTURE BRONCHIAL VEINS]; SYSTEMIC EMBOLISM [AF MS VERY HIGH RISK; ANTICOAGULATION INDICATED]; MALAR FLUSH [DILATED CHEEK CAPILLARIES]; DYSPHAGIA [LA COMPRESSION]; FATIGUE [LOW CARDIAC OUTPUT LATE]; MONITORING MS: TTE ANNUALLY MILD; Q1-2Y MODERATE; EXERCISE PHT SYMPTOMATIC; HEART RATE CONTROL AF [BETA-BLOCKER DILTIAZEM] | `text` |  |  |  |
| Valvular Heart Disease: Aortic Stenosis, Mitral Regurgitation, and Mitral Stenosis | VHD Intervention: TAVR, AVR, MitraClip, PMV, and Surgical Options | `vhd_treatment` | Aortic Stenosis Intervention: Severe Symptomatic D1 AVR Class I IIa; TAVR All Risk Groups FDA Approved PARTNER 3 Low-Risk; NOTTION Low-Risk Low-Intermediate; SURTAVI Intermediate; PARTNER 1 High-Risk Inoperable; Surgical AVR Young Below 65 Low Risk Mechanical Valve Anticoagulation or Bioprosthetic Degenerate at 10-15Y; Bicuspid Aortic Valve Surgical Preference TAVR Off-Label; TAVR Approach Transfemoral Preferred; Dobutamine Stress Echo Low-Flow; MR Primary Surgical: MV Repair Preferred Over Replacement; Asymptomatic C2 LVEF Below 60% LVESD Above 40mm; High-Volume Center Experience; MitraClip COAPT Secondary MR Optimal GDMT; ERO Below 0.3 Residual; SMVT Trial Surgery Benefit; Mitral Stenosis: Percutaneous Balloon Valvuloplasty PBMV Wilkins Below 8 No LAA Thrombus Significant MR; Surgical Commissurotomy Repair MVR; Anticoagulation AF All MS; Warfarin INR 2-3 | `select` |  |  |  |
| Valvular Heart Disease: Aortic Stenosis, Mitral Regurgitation, and Mitral Stenosis | VHD Intervention: TAVR, AVR, MitraClip, PMV, and Surgical Options | `vhd_notes_detail` | VHD Management Plan and Notes: Valvular Lesion Type and Severity, Stage, Current Symptoms NYHA Class, Echo Parameters, Heart Team Decision TAVR vs SAVR vs Medical, STS Score, Frailty Assessment, Intervention Date Planned, Pacemaker Risk, Anticoagulation Plan, Follow-Up Echo Interval, Coordination Notes | `textarea` |  |  |  |
| Valvular Heart Disease: Aortic Stenosis, Mitral Regurgitation, and Mitral Stenosis | Valvular Heart Disease Management Notes | `vhd_mgmt_notes` | VHD Management Notes and Cardiology/Cardiac Surgery/Interventional Cardiology TAVR MitraClip/Cardiac Imaging Echo CT/Cardiac Anesthesia/Pharmacy Anticoagulation/Cardiac Rehab/Nursing/Social Work/Palliative Care Advanced HF Coordination | `textarea` |  |  |  |

### Ventricular Arrhythmias — `cardiology_ventricular_arrhythmias_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Ventricular Arrhythmias: ICD Indications, VT Management, and Antiarrhythmic Therapy | Ventricular Arrhythmia Classification and Diagnosis | `va_class` | Ventricular Arrhythmia Classification: Premature Ventricular Contractions PVC: Monomorphic Pleomorphic; Bigeminy Trigeminy Couplet; Burden Percent on Holter; PVC-Induced CM Above 10-15% Burden; Non-Sustained VT NSVT: 3+ Beats VT Below 30 Seconds Self-Terminating; Sustained VT: 30+ Seconds or Hemodynamically Unstable; Monomorphic MVT: Structural Heart Disease Scar Reentry Coronary Disease CM Sarcoid Arrhythmogenic RV CM ARVC; Idiopathic Outflow Tract RVOT LVOT Fascicular; Polymorphic VT: Short-Coupled Torsades Ischemia; Torsades de Pointes TdP: QTc Prolongation Acquired Drug-Induced QT; Ventricular Fibrillation VF: Causes: Acute MI Coronary Vasospasm; QT Ion Channelopathy; Idiopathic VF; Brugada Syndrome RBBB ST V1-V3; Long QT LQTS: Congenital KCNQ1 LQT1 KCNH2 LQT2 SCN5A LQT3; Acquired Drug Induced Electrolyte; Short QT SQTS; Catecholaminergic PVT CPVT RYR2 CASQ2 Bidirectional VT Exercise; ARVC: Epsilon Wave Inverted T V1-V3 Fatty Fibrous Infiltration; Task Force Criteria 2010; Risk Factors: Prior MI Low EF; Syncope; FH SCD; NSVT; EP Study Inducibility; Exclude Reversible Causes Ischemia Electrolytes Thyroid | `select` |  |  |  |
| Ventricular Arrhythmias: ICD Indications, VT Management, and Antiarrhythmic Therapy | Ventricular Arrhythmia Classification and Diagnosis | `va_icd` | ICD Indications and Device Selection | `text` |  |  |  |
| Ventricular Arrhythmias: ICD Indications, VT Management, and Antiarrhythmic Therapy | VT Management: Antiarrhythmic Therapy, VT Ablation, and VT Storm | `va_treatment` | Ventricular Arrhythmia Antiarrhythmic Therapy: Acute VT Hemodynamically Stable: Lidocaine IV 1-1.5mg/kg Bolus Then 1-4mg/min Infusion; Amiodarone 150mg IV Over 10 Min Then 1mg/min 6H Then 0.5mg/min 18H; Procainamide IV First-Line Stable VT 15-18mg/kg Over 60 Min; Sotalol 75-150mg IV; Cardioversion 100-200J Biphasic; Chronic Antiarrhythmic: Beta-Blockers First-Line Post-MI ICD: Metoprolol Carvedilol; Sotalol Class III 80-160mg BID: AF VT Holter QTc Monitoring; Amiodarone Most Effective Broad Spectrum: 100-400mg QD Maintenance; Pulmonary Fibrosis 0.1%/Year; Thyroid Both; Corneal; Hepatic; Optic Neuropathy; Mexiletine Class IB Adjunct Lidocaine Analog 150-300mg TID SCN5A LQT3; Quinidine Class IA Torsades Prevention Paradoxical J-Wave Brugada Short QT Idiopathic VF; Flecainide Class IC CPVT Structural Heart Contraindicated CAST Trial; Ranolazine Late Sodium Adjunct; Catheter Ablation VT: Scar-Related VT Ischemic CM 60-70% Effective Freedom VT Recurrence 1Y; Stelect Plus STOP-VT CALYPSO Trials; Epicardial Approach Sarcoid ARVC; VT Storm: 3+ VT Episodes 24H ICD Shocks; Acute Sedation Amiodarone IV; Deep Sedation Propofol; Beta-Blocker Push; Stellate Ganglion Blockade; Emergency Ablation; Quinidine Bridge Idiopathic VF Brugada | `select` |  |  |  |
| Ventricular Arrhythmias: ICD Indications, VT Management, and Antiarrhythmic Therapy | VT Management: Antiarrhythmic Therapy, VT Ablation, and VT Storm | `va_notes_detail` | Ventricular Arrhythmia Management Plan and Notes: VT Morphology Monomorphic Polymorphic, EF and Structural Heart Disease, ICD Implanted Device Type Date, Prior VT Episodes and ICD Therapies, Current Antiarrhythmic Agent, QTc on Therapy, Ablation Status, VT Storm History, Drug Interactions Beta-Blocker AAD, Genetic Testing Channelopathy Result, Family Screening, Coordination Notes | `textarea` |  |  |  |
| Ventricular Arrhythmias: ICD Indications, VT Management, and Antiarrhythmic Therapy | Ventricular Arrhythmia Management Notes | `va_mgmt_notes` | Ventricular Arrhythmia Management Notes and Electrophysiology EP Lab/Device Clinic ICD Interrogation/Cardiac Surgery CRT-D Upgrade/Pharmacy AAD QTc Monitoring Drug Interaction/Genetics Channelopathy Cascade/Cardiac Imaging MRI Sarcoid ARVC/ICU VT Storm/Cardiac Rehabilitation/Nursing ICD Education Shock Plan/Social Work/Coordination Notes | `textarea` |  |  |  |

## Specialty Boards

### Admin Board — `admin_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Allergy and Immunology Board — `allergy_and_immunology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Behavioral Health Board — `behavioral_health_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Billing Board — `billing_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Cardiology Board — `cardiology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Care Coordination Board — `care_coordination_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Clinical Board — `clinical_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Clinical Genetics Board — `clinical_genetics_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Clinical Nutrition Board — `clinical_nutrition_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Colorectal Surgery Board — `colorectal_surgery_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Critical Care Board — `critical_care_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Dermatology Board — `dermatology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Documents Board — `documents_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### ENT Board — `ent_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Emergency Medicine Board — `emergency_medicine_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Endocrinology Board — `endocrinology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Family Medicine Board — `family_medicine_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Front Office Board — `front_office_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Gastroenterology Board — `gastroenterology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Geriatrics Board — `geriatrics_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Gynecologic Oncology Board — `gynecologic_oncology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Gynecology Board — `gynecology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Hematology Board — `hematology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Hematology/Oncology Board — `hematology_oncology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Hepatology Board — `hepatology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Hospital Medicine Board — `hospital_medicine_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Infectious Disease Board — `infectious_disease_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Internal Medicine Board — `internal_medicine_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Interventional Cardiology Board — `interventional_cardiology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Interventional Radiology Board — `interventional_radiology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Maternal-Fetal Medicine Board — `maternal_fetal_medicine_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Medical Genetics Board — `medical_genetics_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Medical Oncology Board — `medical_oncology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Neonatology Board — `neonatology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Nephrology Board — `nephrology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Neurology Board — `neurology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### OB/GYN Board — `ob_gyn_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Obstetrics Board — `obstetrics_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Occupational Medicine Board — `occupational_medicine_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Oncology Board — `oncology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Operations Board — `operations_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Ophthalmology Board — `ophthalmology_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Orthopedic Surgery Board — `orthopedic_surgery_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Orthopedics Board — `orthopedics_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Pain Management Board — `pain_management_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Pain Medicine Board — `pain_medicine_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Palliative Care Board — `palliative_care_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Pediatric Board — `pediatric_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Pediatric Subspecialties Board — `pediatric_subspecialties_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Pediatrics Board — `pediatrics_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |

### Plastic Surgery Board — `plastic_surgery_board_cf`

Screen: 1 page(s) · 1 section(s) · 4 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `DYNAMIC_FORMS_CONFIGURATION`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Form | Form | `label` | Form | `text` |  |  |  |
| Form | Form | `navGroup` | Specialty | `text` |  |  |  |
| Form | Form | `formName` | Full name | `text` |  |  |  |
| Form | Form | `formType` | Form type | `text` |  |  |  |
