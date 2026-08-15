---
title: "PracticeForceOneCFTrackingFields25"
---

# CF Tracking — Field-Level Detail (part 25 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Pediatrics**, **Pulmonology**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Pediatrics

### Developmental Milestones — `pediatrics_developmental_milestone_cf`

Screen: 1 page(s) · 5 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Developmental Milestone Assessment | Visit Information | `dev_age_months` | Patient Age (months) | `number` |  |  |  |
| Pediatric Developmental Milestone Assessment | Visit Information | `dev_visit_type` | Well-Child Visit Type | `select` |  |  |  |
| Pediatric Developmental Milestone Assessment | Visit Information | `dev_gestational_age` | Birth History | `select` |  |  |  |
| Pediatric Developmental Milestone Assessment | Visit Information | `dev_parent_concern` | Parent or Caregiver Developmental Concern | `select` |  |  |  |
| Pediatric Developmental Milestone Assessment | Gross Motor Development | `dev_gm_current` | Gross Motor Skill Achievement | `select` |  |  |  |
| Pediatric Developmental Milestone Assessment | Gross Motor Development | `dev_gm_concern` | Gross Motor Red Flags Present | `select` |  |  |  |
| Pediatric Developmental Milestone Assessment | Speech and Language Development | `dev_lang_current` | Language Milestone Achievement | `select` |  |  |  |
| Pediatric Developmental Milestone Assessment | Speech and Language Development | `dev_lang_red_flags` | Language Red Flags Present | `select` |  |  |  |
| Pediatric Developmental Milestone Assessment | Speech and Language Development | `dev_bilingual` | Bilingual or Multilingual Household | `select` |  |  |  |
| Pediatric Developmental Milestone Assessment | Social-Emotional and Autism Screening | `dev_social_milestone` | Social-Emotional Milestone Achievement | `select` |  |  |  |
| Pediatric Developmental Milestone Assessment | Social-Emotional and Autism Screening | `dev_mchat_18` | M-CHAT-R/F Autism Screen Result (18-24 month visits) | `select` |  |  |  |
| Pediatric Developmental Milestone Assessment | Social-Emotional and Autism Screening | `dev_autism_red_flags` | Autism Red Flags Present (any age) | `select` |  |  |  |
| Pediatric Developmental Milestone Assessment | Developmental Screening Tools and Plan | `dev_asq_result` | ASQ-3 (Ages and Stages Questionnaire) Result | `select` |  |  |  |
| Pediatric Developmental Milestone Assessment | Developmental Screening Tools and Plan | `dev_overall_impression` | Overall Developmental Assessment | `select` |  |  |  |
| Pediatric Developmental Milestone Assessment | Developmental Screening Tools and Plan | `dev_referrals` | Referrals Placed | `select` |  |  |  |
| Pediatric Developmental Milestone Assessment | Developmental Screening Tools and Plan | `dev_parent_education` | Parent Education and Anticipatory Guidance Provided (activities to support development) | `textarea` |  |  |  |
| Pediatric Developmental Milestone Assessment | Developmental Screening Tools and Plan | `dev_notes` | Developmental Assessment Notes | `textarea` |  |  |  |

### Developmental Milestones (AAP 2022) — `pediatrics_developmental_milestones_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Developmental Milestones — AAP 2022 Surveillance and ASD Screening | AAP 2022 Updated Developmental Milestones | `language` | Language Milestones (AAP 2022; 2 months: coos; 4 months: laughs; 6 months: babbles with consonants (ba, ma, ga); 9 months: different sounds (mama, dada nonspecific); says mama/dada specifically; 12 months: 1-2 words besides mama/dada; 15 months: 3+ words; 18 months: 10 words; 24 months: 50 words + 2-word phrases; 30 months: 2-3 word sentences + 50% strangers understand; 3 years: 3-word sentences, 75% strangers; 4 years: sentences of 4+ words, 100% understood; AAP 2022: removed ambiguous "maybe" milestones; 10th percentile represents typical range; RED FLAGS: no social smile by 2 months; no babbling by 9 months; no words by 15 months; no 2-word phrases by 24 months) | `text` |  |  |  |
| Developmental Milestones — AAP 2022 Surveillance and ASD Screening | AAP 2022 Updated Developmental Milestones | `motor_milestones` | Motor and Social Milestones | `select` |  |  |  |
| Developmental Milestones — AAP 2022 Surveillance and ASD Screening | ASD Screening and Early Intervention | `asd_screening` | ASD Screening Protocol (AAP: formal ASD screening at 18 and 24 months; M-CHAT-R/F (Modified Checklist for Autism in Toddlers Revised with Follow-Up): 20-item screener; positive screen: telecare follow-up interview; Baird 2011: sensitivity 85%; specificity 99%; ADOS-2 (Autism Diagnostic Observation Schedule) + ADI-R (Autism Diagnostic Interview Revised): gold standard diagnostic; ASD diagnosis: DSM-5: persistent deficits in social communication (social-emotional reciprocity, nonverbal communication, relationship deficits) + restricted/repetitive behaviors (sensory, routines, stereotypies, fixated interests) + present early development; Level 1/2/3 by support needed; early intensive behavioral intervention (ABA) 20-40h/week for ages 2-5: most evidence for long-term outcomes) | `text` |  |  |  |
| Developmental Milestones — AAP 2022 Surveillance and ASD Screening | ASD Screening and Early Intervention | `early_intervention` | Early Intervention Referral | `select` |  |  |  |

### Developmental Screening — `developmental_screening_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Developmental Surveillance and Screening | Developmental Screening (AAP Schedule) | `age_months` | Child Age (months) | `number` |  |  |  |
| Developmental Surveillance and Screening | Developmental Screening (AAP Schedule) | `asa_score` | Developmental Surveillance Concerns (per parent) | `select` |  |  |  |
| Developmental Surveillance and Screening | Developmental Screening (AAP Schedule) | `ase3_done` | ASQ-3 completed (at 9, 18, 30 months + any concern) | `checkbox` |  |  |  |
| Developmental Surveillance and Screening | Developmental Screening (AAP Schedule) | `ase3_result` | ASQ-3 Result | `select` |  |  |  |
| Developmental Surveillance and Screening | Developmental Screening (AAP Schedule) | `mchat_done` | M-CHAT-R/F completed (18 and 24 months) | `checkbox` |  |  |  |
| Developmental Surveillance and Screening | Developmental Screening (AAP Schedule) | `mchat_result` | M-CHAT-R/F Result | `select` |  |  |  |
| Developmental Surveillance and Screening | Milestone Check | `gross_motor` | Gross Motor Milestones | `select` |  |  |  |
| Developmental Surveillance and Screening | Milestone Check | `fine_motor` | Fine Motor / Adaptive Milestones | `select` |  |  |  |
| Developmental Surveillance and Screening | Milestone Check | `speech_language` | Speech and Language Milestones | `select` |  |  |  |
| Developmental Surveillance and Screening | Milestone Check | `social_emotional` | Social-Emotional Milestones | `select` |  |  |  |
| Developmental Surveillance and Screening | Referrals and Follow-Up | `early_intervention` | Early Intervention (EI) referral placed (<3 yr — IDEA Part C, free services) | `checkbox` |  |  |  |
| Developmental Surveillance and Screening | Referrals and Follow-Up | `school_referral` | School district referral (≥3 yr — IDEA Part B, IEP evaluation) | `checkbox` |  |  |  |
| Developmental Surveillance and Screening | Referrals and Follow-Up | `developmental_peds` | Developmental pediatrics / neurodevelopmental consult | `checkbox` |  |  |  |
| Developmental Surveillance and Screening | Referrals and Follow-Up | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Failure to Thrive — `pediatrics_failure_to_thrive_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Failure to Thrive FTT — Evaluation, Etiology, and Nutritional Management | Definition, Classification, and Evaluation | `ftt_f1` | Failure to Thrive Evaluation: DEFINITION (INADEQUATE WEIGHT GAIN Or LOSS; WEIGHT UNDER 3RD TO 5TH PERCENTILE FOR AGE AND SEX; Or WEIGHT DECLINE CROSSING TWO MAJOR PERCENTILE LINES DOWNWARD; Or WEIGHT-FOR-HEIGHT RATIO UNDER 10TH PERCENTILE; PREVALENCE 3-10 pct HOSPITALIZED CHILDREN; 5 pct OUTPATIENTS; HIGHER URBAN LOW SOCIOECONOMIC STATUS; ETIOLOGY CLASSIFICATION (INADEQUATE CALORIC INTAKE MOST COMMON: FEEDING DIFFICULTIES; POVERTY FOOD INSECURITY; NEGLECT; MATERNAL DEPRESSION; INAPPROPRIATE FORMULA PREPARATION; BREASTFEEDING INADEQUACY; ORAL MOTOR PROBLEMS; CRANIOFACIAL; INAPPROPRIATE DIET JUICE RESTRICTION; INADEQUATE ABSORPTION: CELIAC DISEASE; CYSTIC FIBROSIS CF; INFLAMMATORY BOWEL DISEASE; SHORT BOWEL SYNDROME; MILK PROTEIN ALLERGY; GIARDIA; INCREASED METABOLIC DEMAND: CONGENITAL HEART DISEASE; BRONCHOPULMONARY DYSPLASIA; MALIGNANCY; CHRONIC INFECTION; CHRONIC KIDNEY DISEASE; THYROID DISORDERS; SOCIAL AND ENVIRONMENTAL: FOOD INSECURITY; DOMESTIC VIOLENCE; MATERNAL MENTAL HEALTH; TRAUMA ACE ADVERSE CHILDHOOD EXPERIENCES; NEGLECT ABUSE; HISTORY (FEEDING HISTORY DETAILED: TYPE VOLUME DURATION FREQUENCY; FORMULA PREPARATION METHOD; LATCHING BREASTFEEDING; DIET RECALL 3-DAY FOOD DIARY; DEVELOPMENTAL HISTORY MOTOR MILESTONES; PSYCHOSOCIAL HISTORY FAMILY; PAST MEDICAL INFECTIONS HOSPITALIZATIONS; REVIEW OF SYSTEMS: GI SYMPTOMS; PULMONARY CARDIAC) | `text` |  |  |  |
| Failure to Thrive FTT — Evaluation, Etiology, and Nutritional Management | Definition, Classification, and Evaluation | `ftt_f2` | Workup and Nutritional Intervention | `select` |  |  |  |

### Febrile Infant — `pediatrics_febrile_infant_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Febrile Infant — Evaluation and Management | Risk Stratification and Workup | `fi_f1` | Febrile Infant Evaluation: FEVER DEFINITION: Rectal Temp Over 38.0C (100.4F; Oral Axillary Less Reliable); NEVER Rectal Under 28D (Neonates Any Fever = Full Sepsis Workup); EPIDEMIOLOGY: 8-10 pct Febrile Infants Have Serious Bacterial Infection SBI; UTI Most Common (7-8 pct); Bacteremia 2-3 pct; Meningitis 0.3-0.5 pct; ALGORITHMS BY AGE: UNDER 28 DAYS (Full Sepsis Workup All; CBC CMP UA UCx BCx LP CSF; Admit All; Empiric Ampicillin + Gentamicin +/- Acyclovir; No Stratify Risk); 28-60 DAYS AAP 2021 STEP-BY-STEP: PROCALCITONIN Under 0.5 + ANC Under 10K + UA Negative = LOW-RISK (Outpatient; Return Precautions; Close F/U 24H; No LP Required If All Low-Risk); INTERMEDIATE (1+ Abnormal; LP Recommended); HIGH-RISK (LP Required; Admit; Empiric Abx); ROCHESTER CRITERIA (Older Alternative; CBC WBC 5K-15K; Band Under 1500; UA WBC Under 10 HPF; CSF WBC Under 8; CXR No Infiltrate; No Focal Infection; Full-Term Healthy; Not Immunized); STEP-BY-STEP 2021 (AAP; Most Current; Uses PCT CRP ANC UA; Outpatient Possible 29-60D; LP if UA WBC Over 10 or PCT Over 0.5 or ANC Over 10K; BCx Required If PCT Elevated); WELL-APPEARING ASSESSMENT: Cry; Consolability; Color; Activity; Playfulness; Feeding; Fontanelle (6 Signs Well-Appearing); POOR-APPEARING: Immediate Admit All Ages; HSV RISK: Vesicles; Maternal HSV History; Seizures; Liver Failure; Thrombocytopenia; CSF Pleocytosis; ACYCLOVIR 20 mg/kg IV Q8H Empiric If HSV Suspected | `text` |  |  |  |
| Febrile Infant — Evaluation and Management | Risk Stratification and Workup | `fi_f2` | Empiric Antibiotics and Disposition | `select` |  |  |  |

### Febrile Seizures — `pediatrics_febrile_seizures_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Febrile Seizures — Classification and Management | Classification, Workup, and Recurrence | `fs_f1` | Febrile Seizures Evaluation: DEFINITION (Seizure Associated Fever Temperature Over 38C Without CNS Infection Or Metabolic Cause; AGE 6 MONTHS TO 5 YEARS Typical Range; INCIDENCE 2-5 pct Children US; PEAK 18 MONTHS; FEBRIS CONVULSIO Most Common Seizure Pediatric Population; CLASSIFICATION SIMPLE vs COMPLEX: SIMPLE FEBRILE SEIZURE (ALL FOUR CRITERIA: GENERALIZED Tonic-Clonic Only; DURATION Under 15 Minutes; SINGLE Episode In 24H; NORMAL NEUROLOGIC EXAM Pre-Ictal Post-Ictal; COMPLEX FEBRILE SEIZURE Any Of: FOCAL Onset Or Focal Features Post-Ictally; Duration Over 15 Minutes Prolonged; MULTIPLE Seizures In 24H More Than One; OR ABNORMAL NEUROLOGIC EXAM Preexisting; FEBRILE STATUS EPILEPTICUS FSSE Duration Over 30 Min Or Multiple Without Recovery; 5 pct Febrile Seizures; MRI If Prolonged; TRIGGERS Common Febrile Illness (Viral Most Common HHV6 Roseola Influenza RSV; Otitis Media URI Gastroenteritis; VACCINATIONS MMR Varicella Day 5-12 Post; Rapid Rise Fever Rate May Matter More Than Absolute Level; FAMILY HISTORY First-Degree Relative Doubles Risk; RISK FACTORS FOR FIRST FEBRILE SEIZURE: Family History; Lower Temperature Threshold; Delayed Developmental Milestones Early Childhood; PATHOPHYSIOLOGY: Immature Brain Temperature-Sensitive Thresholds; Gamma-Aminobutyric Acid GABA Receptor Sensitivity Fever; Sodium Channel Sensitivity; GENES SCN1A SCN1B GABRG2 GABRB2 Associated Familial; GENETICS Polygenic Typically; DRAVET SYNDROME SCN1A Mutation Severe Epilepsy Starts As Febrile Seizures Differentiate) | `text` |  |  |  |
| Febrile Seizures — Classification and Management | Classification, Workup, and Recurrence | `fs_f2` | Workup, Recurrence Risk, and Long-Term Prognosis | `select` |  |  |  |

### Growth Disorders — `pediatrics_growth_disorders_cf`

Screen: 1 page(s) · 4 section(s) · 30 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Growth Disorders | Growth Assessment | `growth_current_height` | Current Height (cm) | `number` |  |  |  |
| Pediatric Growth Disorders | Growth Assessment | `growth_height_percentile` | Height Percentile (%) | `number` |  |  |  |
| Pediatric Growth Disorders | Growth Assessment | `growth_height_sds` | Height SDS (standard deviation score) | `number` |  |  |  |
| Pediatric Growth Disorders | Growth Assessment | `growth_current_weight` | Current Weight (kg) | `number` |  |  |  |
| Pediatric Growth Disorders | Growth Assessment | `growth_weight_percentile` | Weight Percentile (%) | `number` |  |  |  |
| Pediatric Growth Disorders | Growth Assessment | `growth_bmi_sds` | BMI SDS | `number` |  |  |  |
| Pediatric Growth Disorders | Growth Assessment | `growth_velocity` | Growth Velocity (cm/year over last 6-12 months) | `number` |  |  |  |
| Pediatric Growth Disorders | Growth Assessment | `growth_velocity_percentile` | Growth Velocity Assessment | `select` |  |  |  |
| Pediatric Growth Disorders | Growth Assessment | `growth_mpah` | Mid-Parental Target Height (cm) | `number` |  |  |  |
| Pediatric Growth Disorders | Growth Assessment | `growth_mpah_sds` | Height SDS relative to Mid-Parental Height SDS | `number` |  |  |  |
| Pediatric Growth Disorders | Diagnosis | `growth_diagnosis_type` | Growth Disorder Diagnosis | `select` |  |  |  |
| Pediatric Growth Disorders | Diagnosis | `growth_bone_age` | Bone Age (years) - Left Wrist X-ray | `text` |  |  |  |
| Pediatric Growth Disorders | Diagnosis | `growth_bone_age_interpretation` | Bone Age vs Chronological Age | `select` |  |  |  |
| Pediatric Growth Disorders | Diagnosis | `growth_predicted_adult_height` | Predicted Adult Height (Bayley-Pinneau, cm) | `number` |  |  |  |
| Pediatric Growth Disorders | Laboratory and Hormonal Testing | `growth_igf1` | IGF-1 Level (ng/mL) | `number` |  |  |  |
| Pediatric Growth Disorders | Laboratory and Hormonal Testing | `growth_igf1_sds` | IGF-1 SDS | `number` |  |  |  |
| Pediatric Growth Disorders | Laboratory and Hormonal Testing | `growth_igfbp3` | IGFBP-3 (mg/L) | `number` |  |  |  |
| Pediatric Growth Disorders | Laboratory and Hormonal Testing | `growth_gh_stim_test` | GH Stimulation Test Result | `select` |  |  |  |
| Pediatric Growth Disorders | Laboratory and Hormonal Testing | `growth_peak_gh` | Peak GH on Stimulation Test (ng/mL) | `number` |  |  |  |
| Pediatric Growth Disorders | Laboratory and Hormonal Testing | `growth_thyroid_screen` | Thyroid Screen (TSH, free T4) | `select` |  |  |  |
| Pediatric Growth Disorders | Laboratory and Hormonal Testing | `growth_celiac_screen` | Celiac Screen (tTG-IgA) | `select` |  |  |  |
| Pediatric Growth Disorders | Laboratory and Hormonal Testing | `growth_karyotype` | Karyotype (girls with short stature) | `select` |  |  |  |
| Pediatric Growth Disorders | Treatment and Puberty | `growth_gh_therapy` | Growth Hormone Therapy | `select` |  |  |  |
| Pediatric Growth Disorders | Treatment and Puberty | `growth_gh_brand` | GH Brand and Dose (mg/week) | `text` |  |  |  |
| Pediatric Growth Disorders | Treatment and Puberty | `growth_epigenetics_lonapegsomatropin` | Once-Weekly GH (Skytrofa) | `select` |  |  |  |
| Pediatric Growth Disorders | Treatment and Puberty | `growth_puberty_stage` | Pubertal Stage (Tanner) | `select` |  |  |  |
| Pediatric Growth Disorders | Treatment and Puberty | `growth_precocious_puberty` | Precocious Puberty Concern | `select` |  |  |  |
| Pediatric Growth Disorders | Treatment and Puberty | `growth_gnrh_analog` | GnRH Analog for Precocious Puberty | `select` |  |  |  |
| Pediatric Growth Disorders | Treatment and Puberty | `growth_endo_referral` | Pediatric Endocrinology | `select` |  |  |  |
| Pediatric Growth Disorders | Treatment and Puberty | `growth_notes` | Additional Notes | `textarea` |  |  |  |

### Hirschsprung Disease — `pediatrics_hirschsprung_disease_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hirschsprung Disease — Genetics, Diagnosis, Surgery, and HAEC | Genetics and Diagnosis | `hd_genetics` | RET Proto-Oncogene (Chromosome 10q11), Neural Crest Cell Migration Failure, Short Segment 80% vs. Long Segment 15-20% vs. Total Colonic 5%, Down Syndrome 4-16%, Male:Female 4:1, and MEN2A/2B Association (HIRSCHSPRUNG DISEASE (HD): CONGENITAL AGANGLIONIC MEGACOLON; EPIDEMIOLOGY: 1 in 5000 live births; MALE:FEMALE 4:1 (short segment); equal in long segment; PATHOGENESIS: NEURAL CREST CELL MIGRATION FAILURE during weeks 5-12 gestation; RET PROTO-ONCOGENE (10q11): most common gene; encodes receptor tyrosine kinase; DOMINANT INHERITANCE (variable penetrance); MUTATIONS: RET (SHORT segment); EDNRB/EDN3 (LONG segment); ZFHX1B; SOX10; PHOX2B; DOWN SYNDROME: 4-16% of HD (trisomy 21 association; 50-100x increased risk); CONGENITAL CENTRAL HYPOVENTILATION SYNDROME (CCHS): PHOX2B; MEN2A (RET C634Y): HD + medullary thyroid cancer + pheochromocytoma; EXTENT CLASSIFICATION: SHORT SEGMENT (80%): aganglionic segment ends at sigmoid colon; LONG SEGMENT (15-20%): aganglionic segment extends proximal to sigmoid; TOTAL COLONIC AGANGLIONOSIS (5%): entire colon; poor prognosis; ASSOCIATED ANOMALIES: Down syndrome 4-16%; congenital heart disease; genitourinary; PATHOPHYSIOLOGY: ABSENCE OF GANGLION CELLS in myenteric (Auerbach) + submucosal (Meissner) plexuses; FUNCTIONAL OBSTRUCTION: aganglionic segment fails to relax; BOWEL OBSTRUCTION with proximal dilation; TRANSITION ZONE: between normal proximal and aganglionic distal bowel | `text` |  |  |  |
| Hirschsprung Disease — Genetics, Diagnosis, Surgery, and HAEC | Genetics and Diagnosis | `hd_diagnosis` | Diagnostic Approach: Failure to Pass Meconium >48h, Barium Enema Transition Zone, Anorectal Manometry Absent RAIR, and Rectal Biopsy Gold Standard (Absent Ganglion Cells, AChE-Positive Hypertrophied Nerve Fibers, Calretinin) | `select` |  |  |  |
| Hirschsprung Disease — Genetics, Diagnosis, Surgery, and HAEC | Surgical Treatment and HAEC Complication | `hd_surgery` | Definitive Pull-Through Surgery: Soave Endorectal (Mucosa Stripped), Swenson (Full-Thickness Resection to Dentate Line), Duhamel (Retrorectal Tunnel Side-to-Side Anastomosis), Primary vs. Staged, Laparoscopic Standard, and Intraoperative Frozen Sections to Confirm Ganglionic Bowel (HD SURGICAL TREATMENT: PRIMARY PULL-THROUGH: standard of care (single-stage); LAPAROSCOPIC PRIMARY PULL-THROUGH: most centers; avoids colostomy; safe even in neonates; STAGED: COLOSTOMY FIRST then pull-through 2-6 months later; indications: severely ill neonate; significant enterocolitis; total colonic HD; nutritional depletion; INTRAOPERATIVE FROZEN SECTIONS: confirm GANGLION CELLS at resection margin before anastomosis; MULTIPLE LEVELS may be needed; PULL-THROUGH TECHNIQUES: SWENSON PROCEDURE: full-thickness bowel resection; anastomosis 0.5-1 cm above dentate line; original technique 1948; risk: pelvic dissection; SOAVE PROCEDURE: ENDORECTAL PULL-THROUGH; muscular cuff of aganglionic rectum left in situ; mucosa stripped; ganglionic bowel pulled through cuff; most common in North America; DUHAMEL PROCEDURE: RETRORECTAL TUNNEL; aganglionic rectum left anteriorly; ganglionic bowel brought through retrorectal space; SIDE-TO-SIDE ANASTOMOSIS; useful for total colonic; TRANSANAL ENDORECTAL PULL-THROUGH (TEPT): entirely transanal; no abdominal incision; no laparoscopy; high selectivity; SHORT-SEGMENT ONLY; OUTCOMES: CONTINENCE: 70-80% normal; CONSTIPATION RECURRENCE: 10-30%; SOILING: 10-30% adolescents; related to internal sphincter damage; BOTULINUM TOXIN INJECTION: obstructed defecation post-pull-through (tight sphincter or residual aganglionosis); REDO PULL-THROUGH: persistent obstruction; residual aganglionic segment | `text` |  |  |  |
| Hirschsprung Disease — Genetics, Diagnosis, Surgery, and HAEC | Surgical Treatment and HAEC Complication | `hd_haec` | Hirschsprung-Associated Enterocolitis (HAEC): Most Serious Complication (30% Mortality Untreated), Pastor Criteria Grade I-III, Rectal Irrigation 10 mL/kg Normal Saline 3x/Day, and Metronidazole plus Ampicillin Treatment | `select` |  |  |  |

### Immunization Status Review — `pediatrics_immunization_review_cf`

Screen: 1 page(s) · 5 section(s) · 24 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Childhood Immunization Status Review | Patient Information | `imm_age_months` | Patient Age (months) | `number` |  |  |  |
| Childhood Immunization Status Review | Patient Information | `imm_age_years` | Patient Age (years, if applicable) | `number` |  |  |  |
| Childhood Immunization Status Review | Patient Information | `imm_vfc_eligible` | Vaccines for Children (VFC) Eligibility | `select` |  |  |  |
| Childhood Immunization Status Review | Patient Information | `imm_registry_checked` | Immunization Registry Queried | `select` |  |  |  |
| Childhood Immunization Status Review | DTaP, Polio, Hib, and Hepatitis B Series | `imm_dtap_status` | DTaP Status | `select` |  |  |  |
| Childhood Immunization Status Review | DTaP, Polio, Hib, and Hepatitis B Series | `imm_tdap_booster` | Tdap Booster (adolescents 11-12 years) | `select` |  |  |  |
| Childhood Immunization Status Review | DTaP, Polio, Hib, and Hepatitis B Series | `imm_ipv_status` | IPV (Polio) Status | `select` |  |  |  |
| Childhood Immunization Status Review | DTaP, Polio, Hib, and Hepatitis B Series | `imm_hib_status` | Hib (Haemophilus influenzae type b) Status | `select` |  |  |  |
| Childhood Immunization Status Review | DTaP, Polio, Hib, and Hepatitis B Series | `imm_hepb_status` | Hepatitis B Series Status | `select` |  |  |  |
| Childhood Immunization Status Review | MMR, Varicella, Pneumococcal, and Meningococcal | `imm_mmr_status` | MMR (Measles-Mumps-Rubella) Status | `select` |  |  |  |
| Childhood Immunization Status Review | MMR, Varicella, Pneumococcal, and Meningococcal | `imm_varicella_status` | Varicella (Chickenpox) Vaccine Status | `select` |  |  |  |
| Childhood Immunization Status Review | MMR, Varicella, Pneumococcal, and Meningococcal | `imm_pcv_status` | PCV15/PCV20 (Pneumococcal Conjugate) Status | `select` |  |  |  |
| Childhood Immunization Status Review | MMR, Varicella, Pneumococcal, and Meningococcal | `imm_mening_status` | MenACWY (Meningococcal) Status | `select` |  |  |  |
| Childhood Immunization Status Review | MMR, Varicella, Pneumococcal, and Meningococcal | `imm_menb_status` | MenB (Meningococcal B) Status | `select` |  |  |  |
| Childhood Immunization Status Review | MMR, Varicella, Pneumococcal, and Meningococcal | `imm_rota_status` | Rotavirus Vaccine Status | `select` |  |  |  |
| Childhood Immunization Status Review | HPV, Influenza, and Hepatitis A | `imm_hpv_status` | HPV Vaccine Status (recommended 11-12 years; ideally before sexual debut) | `select` |  |  |  |
| Childhood Immunization Status Review | HPV, Influenza, and Hepatitis A | `imm_flu_status` | Influenza Vaccine (annual, from 6 months of age) | `select` |  |  |  |
| Childhood Immunization Status Review | HPV, Influenza, and Hepatitis A | `imm_hepa_status` | Hepatitis A Vaccine Status | `select` |  |  |  |
| Childhood Immunization Status Review | HPV, Influenza, and Hepatitis A | `imm_covid_status` | COVID-19 Vaccine Status | `select` |  |  |  |
| Childhood Immunization Status Review | Vaccine Administration and Counseling | `imm_vaccines_given_today` | Vaccines Administered Today (name, lot number, manufacturer, injection site) | `textarea` |  |  |  |
| Childhood Immunization Status Review | Vaccine Administration and Counseling | `imm_catch_up_plan` | Catch-Up Schedule Plan (vaccines needed and timing) | `textarea` |  |  |  |
| Childhood Immunization Status Review | Vaccine Administration and Counseling | `imm_parent_refusal` | Vaccine Refusal or Hesitancy | `select` |  |  |  |
| Childhood Immunization Status Review | Vaccine Administration and Counseling | `imm_vis_given` | Vaccine Information Statements (VIS) Given | `select` |  |  |  |
| Childhood Immunization Status Review | Vaccine Administration and Counseling | `imm_notes` | Immunization Notes and Special Considerations (immunocompromised, asplenia, travel) | `textarea` |  |  |  |

### Inborn Errors of Metabolism — `pediatrics_inborn_errors_metabolism_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| IEM — Newborn Screening, FAO Defects, Organic Acidemias, PKU, and Urea Cycle | Newborn Screening and FAO Defects | `iem_fao_overview` | NBS Tandem MS/MS RUSP 35 Core Conditions; MCAD Most Common FAO 1:10000 ACADM Gene C8 Acylcarnitine Elevated Hypoketotic Hypoglycemia; VLCAD ACADVL Gene C14:1 Three Forms (Neonatal Cardiomyopathy, Childhood Hypoglycemia, Adult Myopathy); LCHAD Trifunctional Protein Maternal AFLP/HELLP if Carrier; Emergency Protocol ALL FAO D10W Bolus 2 mL/kg Then GIR 8-10 mg/kg/min Never Fast (MCAD: MOST COMMON FAO; incidence 1:10,000-17,000; AR; ACADM gene; NBS: ELEVATED C8 ACYLCARNITINE; CANNOT oxidize medium-chain fatty acids (C6-C12) during fasting; PRESENTATION: HYPOKETOTIC HYPOGLYCEMIA; lethargy; seizures; hepatomegaly; SUDDEN DEATH pre-NBS; c.985A>G (80% alleles); VLCAD: ACADVL gene; NBS: C14:1 elevated; SEVERE (cardiomyopathy neonatal); INTERMEDIATE (hypoglycemia childhood); MILD (rhabdomyolysis exercise adults); LCHAD: TFP gene; RETINOPATHY (unique); neuropathy; MATERNAL AFLP or HELLP in carrier mothers; DHA supplementation; CPT-1/CPT-2; SCAD; SCHAD; EMERGENCY ALL FAO: IV D10W BOLUS 2 mL/kg then GIR 8-10 mg/kg/min; SICK DAY: NEVER fast >4-6h (MCAD); D10 oral if tolerating feeds; ER if vomiting; MAINTENANCE: AVOID prolonged fasting; MCT oil (LCHAD/VLCAD); L-carnitine; LOW-FAT DIET (VLCAD/LCHAD); avoid prolonged exercise) | `text` |  |  |  |
| IEM — Newborn Screening, FAO Defects, Organic Acidemias, PKU, and Urea Cycle | Newborn Screening and FAO Defects | `iem_oa` | Organic Acidemias PA (PCCA/PCCB) and MMA (MUT/MMAA/MMAB): NBS C3 Propionylcarnitine, Metabolic Crisis Anion Gap Acidosis + Hyperammonemia + Hypoglycemia, Ammonul (Sodium Benzoate 250 + Phenylacetate 250 mg/kg), and MMA B12-Responsiveness Trial | `select` |  |  |  |
| IEM — Newborn Screening, FAO Defects, Organic Acidemias, PKU, and Urea Cycle | PKU and Urea Cycle Disorders | `iem_pku_overview` | PKU: PAH Gene Chromosome 12 Phenylalanine Hydroxylase NBS Phe >120 mcmol/L, Dietary Phe Restriction 200-400 mg/day Phe-Free Formula, Target 120-360 mcmol/L Lifetime, Sapropterin Kuvan BH4 10-20 mg/kg/day for BH4-Responsive (50% Mild/Moderate), Pegvaliase Palynziq PEG-PAL Adults Anaphylaxis Risk REMS, and Maternal PKU Syndrome (PAH PKU: AR; chromosome 12q23; CANNOT convert Phe to Tyr; Phe accumulates (neurotoxic); BH4 = PAH cofactor; CLASSIC PKU: Phe >1200 mcmol/L; MODERATE: 600-1200; UNTREATED: intellectual disability; seizures; microcephaly; mousy odor; MATERNAL PKU SYNDROME: untreated PKU mother = congenital CHD; microcephaly; ID in offspring; TREATMENT: PHE RESTRICTION 200-400 mg/day; PHE-FREE FORMULA; MONITOR plasma Phe: target 120-360 mcmol/L lifetime; SAPROPTERIN (Kuvan; BH4): 10-20 mg/kg/day oral; stabilizes residual PAH; TRIAL: Phe reduction >=30% = RESPONDER; ~50% mild/moderate; fewer classic; PEGVALIASE (Palynziq; PEG-PAL): PAL enzyme; ADULTS >=16 years uncontrolled; SQ injection; slow titration months; ANAPHYLAXIS RISK: REMS; pre-inject antihistamine; epinephrine on hand; GENE THERAPY: AAV PAH liver trials) | `text` |  |  |  |
| IEM — Newborn Screening, FAO Defects, Organic Acidemias, PKU, and Urea Cycle | PKU and Urea Cycle Disorders | `iem_ucd_overview` | UCD: OTC Deficiency X-Linked Most Common 1:56000 (Severe Males, Variable Females by X-Inactivation), CPS1/ASS1/ASL/ARG1 AR; Neonatal NH3 >1000 Without Treatment Fatal; Nitrogen Scavengers Sodium Phenylbutyrate/Glycerol Phenylbutyrate (Ravicti); and Liver Transplant Corrective | `select` |  |  |  |

### Infant Feeding and Nutrition — `pediatrics_infant_feeding_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Infant Feeding — Breastfeeding, Formula, Solids, and FTT | Breastfeeding Support and Assessment | `bf_support` | Breastfeeding Initiation, Latch, and Common Problems (BREASTFEEDING: AAP RECOMMENDATION: exclusive breastfeeding x6 months; CONTINUED >=12 months (as long as mutually desired); WHO: >=2 years; BENEFITS INFANT: passive immunity (IgA, lactoferrin, lysozyme); reduced risk: SIDS, otitis media, GI infections, NEC, obesity, asthma, childhood leukemia; NEURODEVELOPMENTAL: IQ benefit; BENEFITS MOTHER: reduces postpartum hemorrhage; reduces breast + ovarian cancer; postpartum weight loss; natural child spacing; CONTRAINDICATIONS: HIV (US — formula preferred); HTLV-1/2; galactosemia in infant; active untreated TB; herpes simplex on breast; phenylketonuria (PKU): low phenylalanine formula; most maternal medications COMPATIBLE with breastfeeding (LactMed database); LATCH ASSESSMENT: LATCH SCORE (latching, audible swallowing, type of nipple, comfort, hold); CORRECT LATCH: wide open mouth; lower lip flanged out; most areola in mouth; symmetrical; chin touching breast; audible swallowing; FEEDING FREQUENCY: newborn 8-12 times/24h; Q2-3 hours; EARLY SIGNS HUNGER: sucking hands; rooting; mouthing; LATE: crying; ADEQUATE INTAKE: 6+ wet diapers/day by day 3-5; yellow seedy stools by day 4-5; back to birth weight by 2 weeks; WEIGHT LOSS: <=7-10% birthweight first week = acceptable; EARLY DISCHARGE: LC visit at 3-5 days; PROBLEMS: SORE NIPPLES: correct latch; lanolin; ENGORGEMENT: frequent feeding; warm compress before; cold after; MASTITIS: flu-like + breast erythema; continued breastfeeding; dicloxacillin or cephalexin 500 mg QID x10-14 days; BLOCKED DUCT: massage; frequent feeding; BREAST ABSCESS: ultrasound-guided aspiration or I&D; continue breastfeeding if possible | `text` |  |  |  |
| Infant Feeding — Breastfeeding, Formula, Solids, and FTT | Breastfeeding Support and Assessment | `formula` | Formula Selection and Supplementation | `select` |  |  |  |
| Infant Feeding — Breastfeeding, Formula, Solids, and FTT | Solid Food Introduction and FTT Evaluation | `solids` | Introduction of Solid Foods and Early Allergen Introduction (INTRODUCTION OF SOLID FOODS: TIMING: NOT BEFORE 4 months; RECOMMEND: 4-6 months when developmental readiness met; SIGNS OF READINESS: head control; sitting with support; interest in food; loss of tongue-thrust reflex; FIRST FOODS: iron-rich foods first (iron-fortified cereals; pureed meat); variety of single-ingredient purees; no need to follow specific order; TEXTURE PROGRESSION: purees → mashed → soft finger foods → table foods by 12 months; BABY-LED WEANING (BLW): soft appropriate finger foods from 6 months; equal nutritional outcomes; enhances self-regulation; requires supervision; AVOID: honey (botulism) before 1 year; cow whole milk before 12 months; added salt/sugar; choking hazards (grapes, nuts, raw carrots); HIGH-NITRATE VEGETABLES (spinach, beets, carrots): avoid before 6 months (methemoglobinemia); EARLY PEANUT INTRODUCTION (LEAP TRIAL): high-risk infants (severe eczema or egg allergy): introduce peanut at 4-6 months (not avoid) → 81% reduction in peanut allergy; NIAID GUIDELINES: evaluate for peanut allergy (SPT, sIgE) if high risk before introduction; LEARNING EARLY ABOUT PEANUT (LEAP-ON): sustained tolerance if introduced early; EARLY INTRODUCTION ALL COMMON ALLERGENS: peanut, egg, fish, wheat, sesame by 6 months reduces allergy risk; INFANT FEEDING QUESTIONNAIRE: 24h recall; breastfeeding duration; formula type; first foods introduced; feeding behaviors; COLIC: defined as crying >=3h/day x >=3 days/week x >=3 weeks; rule out organic causes; reassure family; probiotics (L. reuteri) may help; simethicone: no evidence | `text` |  |  |  |
| Infant Feeding — Breastfeeding, Formula, Solids, and FTT | Solid Food Introduction and FTT Evaluation | `ftt` | Failure to Thrive Evaluation and Management | `select` |  |  |  |

### JIA Juvenile Arthritis — `pediatrics_juvenile_arthritis_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Juvenile Idiopathic Arthritis — Classification, Uveitis, and Biologics | Classification and Monitoring | `jia_f1` | JIA Evaluation: DEFINITION AND EPIDEMIOLOGY (JIA UMBRELLA TERM CHRONIC ARTHRITIS ONSET UNDER 16Y DURATION OVER 6 WEEKS; MOST COMMON CHRONIC RHEUMATIC DISEASE CHILDHOOD; INCIDENCE 5-18 PER 100000; PREVALENCE 1-2 PER 1000 CHILDREN; FEMALE PREDOMINANCE MOST CATEGORIES; ILAR CLASSIFICATION 7 SUBTYPES 2001 (OLIGOARTICULAR JIA MOST COMMON 50 pct (UNDER 5 JOINTS FIRST 6 MONTHS; PERSISTENT UNDER 5 Lifetime; EXTENDED OVER 5 JOINTS After 6M; AGE 2-4Y GIRLS ANA POSITIVE; HIGHEST UVEITIS RISK; RF NEGATIVE; GOOD PROGNOSIS MOST; POLYARTICULAR RF NEGATIVE (OVER 5 JOINTS; ANA POSITIVE OR NEGATIVE; BIMODAL 2-4Y AND 6-12Y; MODERATE DISEASE ACTIVITY; POLYARTICULAR RF POSITIVE (OVER 5 JOINTS RF POSITIVE; OLDER GIRLS 9-16Y; LIKE ADULT RA Erosive; WORST JOINT PROGNOSIS; SYSTEMIC JIA sJIA ALSO CALLED STILL DISEASE (QUOTIDIAN FEVER DAILY OR BID SPIKE OVER 39C; SALMON-COLORED EVANESCENT RASH TRUNK EXTREMITIES; LYMPHADENOPATHY; HEPATOSPLENOMEGALY; SEROSITIS PERICARDITIS PLEURITIS; JOINT ARTHRITIS May Be Later; IL-1 IL-6 DRIVEN; PSORIATIC ARTHRITIS PsJIA (PSORIASIS PLUS ARTHRITIS Or Dactylitis Plus Nail PITS ONYCHOLYSIS; ENTHESITIS-RELATED ARTHRITIS ERA (BOYS OLDER 6-10Y; HLA-B27 POSITIVE; SACROILIAC AXIAL INVOLVEMENT; ENTHESITIS HEEL PLANTAR; RISK ANKYLOSING SPONDYLITIS ADULT; UNDIFFERENTIATED If Cannot Classify; UVEITIS CRITICAL COMPLICATION (ANTERIOR UVEITIS MOST COMMON JIA; INSIDIOUS ASYMPTOMATIC White Quiet Eye; OLIGOARTICULAR ANA-POSITIVE HIGHEST RISK; SLIT-LAMP EXAM MANDATORY SCREENING All JIA; FREQUENCY (OLIGO ANA+ Young Onset: Q3M FIRST 4Y; Q6M After; SYSTEMIC: Q12M; RF POSITIVE: Q6M; SEQUELAE UNTREATED: BAND KERATOPATHY; CATARACT; GLAUCOMA; VISION LOSS PERMANENT; TOPICAL CORTICOSTEROIDS FIRST-LINE UVEITIS; ADALIMUMAB TNF FDA UVEITIS PEDIATRIC JIA) | `text` |  |  |  |
| Juvenile Idiopathic Arthritis — Classification, Uveitis, and Biologics | Classification and Monitoring | `jia_f2` | Treatment Steps and MAS Recognition | `select` |  |  |  |

### Juvenile Idiopathic Arthritis — `pediatrics_jia_management_cf`

Screen: 1 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Juvenile Idiopathic Arthritis: Classification, Monitoring, and Treatment | ILAR Classification and Subtypes | `jia_subtype` | JIA Subtype (ILAR 2001 Classification) | `select` |  |  |  |
| Juvenile Idiopathic Arthritis: Classification, Monitoring, and Treatment | ILAR Classification and Subtypes | `jia_uveitis` | JIA-Associated Uveitis Screening and Treatment | `select` |  |  |  |
| Juvenile Idiopathic Arthritis: Classification, Monitoring, and Treatment | Treatment Protocols and MAS Management | `jia_pharmacology` | DMARDs and Biologics for JIA | `select` |  |  |  |
| Juvenile Idiopathic Arthritis: Classification, Monitoring, and Treatment | Treatment Protocols and MAS Management | `jia_mas` | Macrophage Activation Syndrome (MAS) | `select` |  |  |  |
| Juvenile Idiopathic Arthritis: Classification, Monitoring, and Treatment | Treatment Protocols and MAS Management | `jia_monitoring` | Monitoring and Transition to Adult Care — disease activity (JADAS: Juvenile Arthritis Disease Activity Score; 0-10 scale with 10 joints; remission below 1-2 by subtype); functional status (CHAQ: Childhood Health Assessment Questionnaire); school attendance; pain VAS; CBC/CMP Q3 months on MTX/biologics; ophthalmology Q3-6 months lifelong; bone density (DEXA) for chronic steroid use; growth monitoring; delayed puberty surveillance; mental health screening; vaccination: annual flu, Pneumovax before biologics; HPV series; meningococcal; varicella prior to biologics; live vaccines 3 months before starting; transition: begin at age 14-16; rheumatology transition program (RACER, GRoW); adult rheumatologist handoff by age 18-21 | `text` |  |  |  |
| Juvenile Idiopathic Arthritis: Classification, Monitoring, and Treatment | Treatment Protocols and MAS Management | `jia_notes` | JIA Management Notes and Pediatric Rheumatology/Ophthalmology/PT/OT/School Liaison Coordination | `textarea` |  |  |  |

### Kawasaki Disease — `pediatrics_kawasaki_disease_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Kawasaki Disease — Diagnosis, Cardiac Complications, and Treatment | Diagnostic Criteria and Clinical Features | `kd_f1` | Kawasaki Disease Evaluation: EPIDEMIOLOGY (MEDIUM VESSEL VASCULITIS CHILDREN; MOST COMMON ACQUIRED HEART DISEASE CHILDHOOD DEVELOPED COUNTRIES; INCIDENCE 9-19 PER 100000 CHILDREN UNDER 5 IN US; HIGHEST ASIAN PACIFIC ISLANDER JAPANESE; PEAK AGE 6 MONTHS TO 5 YEARS; RARE OVER 8 YEARS; ETIOLOGY UNKNOWN; IMMUNE DYSREGULATION; POSSIBLY INFECTIOUS TRIGGER SUPERANTIGEN; DIAGNOSIS CLINICAL (CLASSIC CRITERIA: FEVER AT LEAST 5 DAYS REQUIRED PLUS 4 OF 5: BILATERAL NONPURULENT BULBAR CONJUNCTIVAL INJECTION; CHANGES LIPS ORAL CAVITY: STRAWBERRY TONGUE ERYTHEMA CRACKING FISSURING PHARYNGEAL ERYTHEMA; POLYMORPHOUS EXANTHEM RASH TRUNK; CHANGES EXTREMITIES: ERYTHEMA EDEMA HANDS FEET ACUTE; DESQUAMATION PERIUNGUAL FINGERS TOES SUBACUTE; CERVICAL LYMPHADENOPATHY AT LEAST ONE NODE OVER 1.5 CM; DIAGNOSIS ESTABLISHED 5 DAYS FEVER PLUS 4 CRITERIA; INCOMPLETE KAWASAKI: FEVER 5 DAYS PLUS 2-3 CRITERIA; COMMON INFANTS MOST AT RISK CORONARY ANEURYSM; SUPPLEMENTAL LABORATORY CRITERIA AHA: CRP OVER 3 mg/dL; ESR OVER 40 mm/h; ALBUMIN UNDER 3 g/dL; ANEMIA FOR AGE; WBC OVER 15000; URINE 10 WBC/HPF; ALT ELEVATED; PLATELET OVER 450000 AFTER DAY 7; PHASES: ACUTE 1-2 WEEKS FEVER; SUBACUTE 2-8 WEEKS THROMBOCYTOSIS; CONVALESCENT RETURN NORMAL 6-8 WEEKS; ATYPICAL FEATURES: HYDROPIC GALLBLADDER; HEPATITIS; ARTHRITIS; UVEITIS; ASEPTIC MENINGITIS; URETHRITIS) | `text` |  |  |  |
| Kawasaki Disease — Diagnosis, Cardiac Complications, and Treatment | Diagnostic Criteria and Clinical Features | `kd_f2` | Treatment and Cardiac Monitoring | `select` |  |  |  |

### Kawasaki Disease Depth — `pediatrics_kawasaki_disease_depth_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Kawasaki Disease — Diagnosis, CAA Classification, IVIG, Resistance, and Long-Term Surveillance | Kawasaki Disease Diagnosis and Coronary Artery Aneurysm Classification | `kawasaki_overview` | Complete KD AHA 2004 Criteria (Fever >=5 Days Plus 4 of 5 Features), Incomplete KD Algorithm (CRP/ESR Plus Echo), and Giant Coronary Aneurysm Z>=10 Defining Feature (KAWASAKI DISEASE (KD): ACUTE FEBRILE VASCULITIS of medium-sized vessels; MOST COMMON ACQUIRED HEART DISEASE in children (developed countries); EPIDEMIOLOGY: peak 6-24 months; rare <3 months or >8 years; Japanese>Korean>Hawaiian>other; COMPLETE KD (AHA 2004 CRITERIA): FEVER >=5 DAYS + >=4 OF: 1) BILATERAL BULBAR CONJUNCTIVAL INJECTION (non-exudative; no discharge); 2) ORAL CHANGES: ERYTHEMA/CRACKING LIPS; STRAWBERRY TONGUE; erythema of oral mucosa; 3) CERVICAL LYMPHADENOPATHY: >=1 node >=1.5 cm (unilateral; anterior cervical); 4) POLYMORPHOUS RASH: maculopapular/morbilliform/erythema multiforme-like; truncal; 5) EXTREMITY CHANGES: erythema palms/soles; indurative edema hands/feet; PERIUNGUAL DESQUAMATION (late finding 2-3 weeks; alone does not diagnose acute KD); INCOMPLETE KD (ATYPICAL): fewer clinical criteria; INFANTS <6 months: incomplete presentation common; high aneurysm risk; FEVER + ONLY 2-3 FEATURES + ECHO or LABORATORY FINDINGS consistent; LABORATORY: ELEVATED ESR >=40 mm/h; CRP >=3 mg/dL; ANEMIA; LEUKOCYTOSIS; LOW ALBUMIN; ELEVATED ALT; STERILE PYURIA; ELEVATED PLATELETS (THROMBOCYTOSIS: appears week 2-3; >=450,000/microL; giant CAA risk); ECHO: CORONARY ARTERY ANEURYSM (CAA) or DILATION; CORONARY ARTERY Z-SCORE CLASSIFICATION (AHA 2017): NORMAL: z <2; DILATION: z 2-2.5; SMALL ANEURYSM: z 2.5-5; MEDIUM ANEURYSM: z 5-10; LARGE/GIANT ANEURYSM: z >=10 (HIGHEST THROMBOSIS RISK; WORST PROGNOSIS; CORONARY SURGERY risk); CORONARY ARTERIES AFFECTED: LMCA; LAD; RCA; LCX; rarely others; BILATERAL CAA in 15-25%; PATHOGENESIS: IMMUNE DYSREGULATION; T-CELL ACTIVATION; CYTOKINE CASCADE (TNF; IL-1; IL-6); ENDOTHELIAL INFLAMMATION + VASCULITIS; unknown infectious trigger; genetic susceptibility (ITPKC; FCGR2A; BLK); PHASES: ACUTE (1-2 weeks); SUBACUTE (2-4 weeks; thrombocytosis peaks); CONVALESCENT (6-8 weeks; labs normalize) | `text` |  |  |  |
| Kawasaki Disease — Diagnosis, CAA Classification, IVIG, Resistance, and Long-Term Surveillance | Kawasaki Disease Diagnosis and Coronary Artery Aneurysm Classification | `caa_surveillance` | Coronary Artery Aneurysm Long-Term Surveillance: Echo Intervals by Z-Score, Anticoagulation for Giant CAA, and Catheter-Based or CT Coronary Angiography in Older Children | `select` |  |  |  |
| Kawasaki Disease — Diagnosis, CAA Classification, IVIG, Resistance, and Long-Term Surveillance | Kawasaki Disease Acute Treatment and IVIG Resistance | `kawasaki_initial_tx` | High-Dose IVIG 2g/kg Single Infusion, Aspirin Regimen (Anti-Inflammatory then Antiplatelet), and Fever Response as Treatment Success Criterion (KD ACUTE TREATMENT: IVIG: INTRAVENOUS IMMUNOGLOBULIN 2 g/kg IV SINGLE INFUSION over 10-12 hours; MOST IMPORTANT TREATMENT; reduces CAA from 25% untreated to 3-5%; MECHANISM: unknown; immunomodulatory; Fc receptor blockade; T-cell regulation; B-cell suppression; ASPIRIN: ANTI-INFLAMMATORY DOSE: 30-50 mg/kg/day divided Q6h (high-dose) DURING ACUTE PHASE (until fever-free 48-72h); ANTIPLATELET DOSE: 3-5 mg/kg/day ONCE DAILY after afebrile (low-dose); CONTROVERSY: some centers use low-dose throughout; 80-100 mg/kg/day in some protocols; TREATMENT SUCCESS: FEVER RESOLVES within 24-48 HOURS of IVIG infusion; TREATMENT FAILURE: PERSISTENT OR RECRUDESCENT FEVER >=36 hours after IVIG completion (10-15% of patients); TIMING: OPTIMAL: day 5-10 of illness; BEFORE DAY 5: may increase resistance rate; can still treat if clear diagnosis; BEYOND DAY 10: treat if still febrile; CAN TREAT LATE if echo shows evolving CAA; IVIG-RELATED: ASEPTIC MENINGITIS (self-limited); HEMOLYTIC ANEMIA; TRANSFUSION REACTIONS; IgA DEFICIENCY: anaphylaxis risk (test first); LIVE VACCINES: defer 11 months after high-dose IVIG; IBUPROFEN AVOIDANCE: if on aspirin (competition for COX-1 binding); FEVER CURVE MONITORING: daily temp; define response vs. resistance; ECHO: AT DIAGNOSIS + 2 weeks + 6-8 weeks; if CAA detected, more frequent; KOBAYASHI SCORE: Japanese scoring system predicting IVIG RESISTANCE (pre-treatment); 7 variables; not widely validated outside Japan; EGAMI; SANO scores: similar Japan-specific tools | `text` |  |  |  |
| Kawasaki Disease — Diagnosis, CAA Classification, IVIG, Resistance, and Long-Term Surveillance | Kawasaki Disease Acute Treatment and IVIG Resistance | `ivig_resistance` | IVIG Resistance Treatment: Second IVIG Dose, Infliximab KD-1 RCT, Corticosteroids RAISE Trial, Cyclosporine, and Anakinra IL-1 Blockade for Refractory KD | `select` |  |  |  |

### Neonatal — `pediatrics_neonatal_assessment_cf`

Screen: 1 page(s) · 5 section(s) · 35 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Neonatal Assessment | Delivery and APGAR | `neo_ga_at_birth` | Gestational Age at Birth (weeks + days) | `text` |  |  |  |
| Neonatal Assessment | Delivery and APGAR | `neo_birth_weight` | Birth Weight (grams) | `number` |  |  |  |
| Neonatal Assessment | Delivery and APGAR | `neo_delivery_mode` | Delivery Mode | `select` |  |  |  |
| Neonatal Assessment | Delivery and APGAR | `neo_apgar_1min` | APGAR Score — 1 Minute | `number` |  |  |  |
| Neonatal Assessment | Delivery and APGAR | `neo_apgar_5min` | APGAR Score — 5 Minutes | `number` |  |  |  |
| Neonatal Assessment | Delivery and APGAR | `neo_apgar_10min` | APGAR Score — 10 Minutes (if indicated) | `number` |  |  |  |
| Neonatal Assessment | Delivery and APGAR | `neo_resuscitation` | Resuscitation Required | `select` |  |  |  |
| Neonatal Assessment | Delivery and APGAR | `neo_admission_location` | Admission Location | `select` |  |  |  |
| Neonatal Assessment | Respiratory Status | `neo_respiratory_status` | Respiratory Status | `select` |  |  |  |
| Neonatal Assessment | Respiratory Status | `neo_oxygen_support` | Oxygen Support | `select` |  |  |  |
| Neonatal Assessment | Respiratory Status | `neo_surfactant` | Surfactant Administered | `select` |  |  |  |
| Neonatal Assessment | Respiratory Status | `neo_betamethasone_antenatal` | Antenatal Steroids Received | `select` |  |  |  |
| Neonatal Assessment | Jaundice and Hypoglycemia | `neo_peak_bili` | Peak Total Bilirubin (mg/dL) | `number` |  |  |  |
| Neonatal Assessment | Jaundice and Hypoglycemia | `neo_bili_age` | Age at Peak Bilirubin (hours of life) | `text` |  |  |  |
| Neonatal Assessment | Jaundice and Hypoglycemia | `neo_phototherapy` | Phototherapy | `select` |  |  |  |
| Neonatal Assessment | Jaundice and Hypoglycemia | `neo_ivig_exchange` | IVIG or Exchange Transfusion | `select` |  |  |  |
| Neonatal Assessment | Jaundice and Hypoglycemia | `neo_coombs` | Direct Coombs Test | `select` |  |  |  |
| Neonatal Assessment | Jaundice and Hypoglycemia | `neo_glucose_screen` | Initial Glucose Screen (mg/dL) | `number` |  |  |  |
| Neonatal Assessment | Jaundice and Hypoglycemia | `neo_hypoglycemia_treatment` | Hypoglycemia Treatment | `select` |  |  |  |
| Neonatal Assessment | Infection Risk and Sepsis | `neo_gbs_status` | Maternal GBS Status | `select` |  |  |  |
| Neonatal Assessment | Infection Risk and Sepsis | `neo_rom_hours` | Duration ROM (hours) | `number` |  |  |  |
| Neonatal Assessment | Infection Risk and Sepsis | `neo_maternal_fever` | Maternal Intrapartum Fever | `select` |  |  |  |
| Neonatal Assessment | Infection Risk and Sepsis | `neo_sepsis_evaluation` | Sepsis Evaluation | `select` |  |  |  |
| Neonatal Assessment | Infection Risk and Sepsis | `neo_antibiotics` | Empiric Antibiotics | `select` |  |  |  |
| Neonatal Assessment | Infection Risk and Sepsis | `neo_culture_result` | Culture Results | `text` |  |  |  |
| Neonatal Assessment | Newborn Screening and Discharge | `neo_nbs_date` | Newborn Metabolic Screen Date | `date` |  |  |  |
| Neonatal Assessment | Newborn Screening and Discharge | `neo_nbs_result` | NBS Result | `select` |  |  |  |
| Neonatal Assessment | Newborn Screening and Discharge | `neo_hearing_screen` | Hearing Screen Result | `select` |  |  |  |
| Neonatal Assessment | Newborn Screening and Discharge | `neo_critical_chd` | Critical CHD Screen (Pulse Ox) | `select` |  |  |  |
| Neonatal Assessment | Newborn Screening and Discharge | `neo_hep_b_vaccine` | Hepatitis B Vaccine | `select` |  |  |  |
| Neonatal Assessment | Newborn Screening and Discharge | `neo_discharge_weight` | Discharge Weight (grams) | `number` |  |  |  |
| Neonatal Assessment | Newborn Screening and Discharge | `neo_pct_weight_loss` | Percent Weight Loss from Birth (%) | `number` |  |  |  |
| Neonatal Assessment | Newborn Screening and Discharge | `neo_feeding_method` | Feeding Method at Discharge | `select` |  |  |  |
| Neonatal Assessment | Newborn Screening and Discharge | `neo_followup_date` | Newborn Follow-up Appointment Date | `date` |  |  |  |
| Neonatal Assessment | Newborn Screening and Discharge | `neo_notes` | Additional Notes | `textarea` |  |  |  |

### Neonatal Jaundice — `pediatrics_neonatal_jaundice_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Neonatal Jaundice — Risk Assessment, Phototherapy, and Complications | Physiology, Causes, and Risk Factors | `nj_f1` | Neonatal Jaundice Evaluation: EPIDEMIOLOGY (60 pct TERM NEONATES; 80 pct PRETERM; MOST COMMON NEONATAL CONDITION REQUIRING MEDICAL ATTENTION; PHYSIOLOGIC JAUNDICE MOST COMMON; PATHOLOGIC JAUNDICE SUBSET REQUIRING INTERVENTION; BILIRUBIN PHYSIOLOGY (HEME CATABOLISM PRODUCES BILIRUBIN; NEONATES HIGH RBC TURNOVER; IMMATURE LIVER CONJUGATION GLUCURONYL TRANSFERASE; INDIRECT UNCONJUGATED BILIRUBIN LIPID-SOLUBLE CROSSES BBB; CONJUGATED DIRECT BILIRUBIN ALWAYS PATHOLOGIC; CLINICAL ASSESSMENT (CEPHALOCAUDAL PROGRESSION HEAD TO TOE; VISUAL ASSESSMENT UNRELIABLE; TRANSCUTANEOUS BILIRUBIN TCBILI SCREENING; SERUM TOTAL BILIRUBIN TSB CONFIRMS; HOUR-SPECIFIC NORMOGRAMS BHUTANI CURVE (RISK ZONES HIGH HIGH-INTERMEDIATE LOW-INTERMEDIATE LOW; PLOT TSB AGAINST HOURS OF LIFE; GREATER THAN 95TH PERCENTILE HIGH RISK; CAUSES PHYSIOLOGIC (PEAK DAYS 2-3 TERM DAYS 3-4 PRETERM; DECLINES BY DAY 5-7 TERM; BREASTFEEDING JAUNDICE: INADEQUATE INTAKE FIRST DAYS STARVATION; DIFFERENT FROM BREAST MILK JAUNDICE; CAUSES PATHOLOGIC (HEMOLYTIC CAUSES: ABO INCOMPATIBILITY MOST COMMON HEMOLYTIC; INDIRECT COOMBS DAT POSITIVE; RH INCOMPATIBILITY RARER MORE SEVERE; G6PD DEFICIENCY ENZYME DEFICIENCY; HEREDITARY SPHEROCYTOSIS; PYRUVATE KINASE DEFICIENCY; NON-HEMOLYTIC: INFECTIONS SEPSIS; CRIGLER-NAJJAR; GILBERT SYNDROME BENIGN; BREAST MILK JAUNDICE WEEK 2-3 PEAKS; DIRECT CONJUGATED HYPERBILIRUBINEMIA ALWAYS PATHOLOGIC (BILIARY ATRESIA MUST EXCLUDE; NEONATAL HEPATITIS; METABOLIC DISORDERS; KASAI PROCEDURE BILIARY ATRESIA BEFORE 60 DAYS LIFE) | `text` |  |  |  |
| Neonatal Jaundice — Risk Assessment, Phototherapy, and Complications | Physiology, Causes, and Risk Factors | `nj_f2` | Phototherapy, Exchange Transfusion, and Kernicterus | `select` |  |  |  |

### Neonatal NEC — `pediatrics_neonatal_nec_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Necrotizing Enterocolitis — Staging, Diagnosis, and Management | Bell Staging, Diagnosis, and Treatment | `nec_f1` | Neonatal NEC Evaluation: EPIDEMIOLOGY (MOST COMMON GI EMERGENCY Preterm Neonates; Incidence 1-3 Per 1000 Live Births; 7-10 pct VLBW Under 1500g Infants; Mortality 15-30 pct; PEAK AGE GA 28-32 Weeks; Rare Term Infants But Possible Congenital Heart Or Asphyxia; PATHOPHYSIOLOGY MULTIFACTORIAL: Premature Bowel Barrier Dysfunction; Microbial Dysbiosis; Formula Feeding Risk Higher Than Breast Milk; Mucosal Ischemia Reperfusion; Inflammatory Cascade TLR4 Signaling Epithelial Apoptosis; RISK FACTORS: Extreme Prematurity; Formula Over Breast Milk; Polycythemia; Perinatal Asphyxia; Intrauterine Growth Restriction IUGR; Congenital Heart Cyanotic; PRESENTATION: Abdominal DISTENSION Bilious Emesis; Bloody Stools; Temperature Instability; Lethargy Apnea; Metabolic Acidosis; Ileus; BELL STAGING MODIFIED WALSH KLIEGMAN: STAGE I SUSPECTED NEC (I-A Systemic Signs Mild; Temperature Instability Apnea; I-B Stage I Plus Gross Bloody Stool); STAGE II DEFINITE NEC (II-A Mildly Ill Absent Bowel Sounds Abdominal Tenderness; Radiograph Ileus Or PNEUMATOSIS INTESTINALIS PI Intramural Air; II-B Moderately Ill Mild Metabolic Acidosis Mild Thrombocytopenia; Radiograph PORTAL VENOUS GAS Plus PI); STAGE III ADVANCED NEC (III-A Severely Ill Hypotension Bradycardia Severe Apnea Metabolic And Respiratory Acidosis DIC Neutropenia; Intact Bowel Radiograph Ascites; III-B Stage III-A Plus Bowel PERFORATION Free Air Pneumoperitoneum; KEY XRAY SIGNS: Pneumatosis Intestinalis Intramural Bubbly Air Pathognomonic; Portal Venous Gas Liver Branches; Free Air Perforation = Emergency Surgery; Fixed Loop Same Loop Xray Multiple Views Necrosis; Diffuse Gasless Abdomen Ascites) | `text` |  |  |  |
| Necrotizing Enterocolitis — Staging, Diagnosis, and Management | Bell Staging, Diagnosis, and Treatment | `nec_f2` | Medical and Surgical Management | `select` |  |  |  |

### Neonatal Seizures — `pediatrics_neonatal_seizures_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Neonatal Seizures — Phenobarbital, LEV, aEEG, HIE, Pyridoxine | Neonatal Seizure Recognition and Classification | `neo_sz_class` | Neonatal Seizure Subtypes, Electroclinical Dissociation, and EEG-Based Classification (NEONATAL SEIZURE EPIDEMIOLOGY: 1-3.5/1000 live births; highest risk period for seizures in any age group; most common in first 3 days of life; CLINICAL SUBTYPES: FOCAL CLONIC: rhythmic jerking of one limb or face; most common type with EEG correlate; FOCAL TONIC: sustained posturing of one limb; MYOCLONIC: sudden brief jerks; multifocal or generalized; variable EEG correlate; SPASMS: flexion or extension; may be infantile spasms onset; SUBTLE SEIZURES: MOST COMMON in preterm; eye deviation; oral-buccal movements; apnea; cycling leg movements; high proportion are ELECTROGRAPHIC ONLY (no clinical correlate); ELECTROCLINICAL DISSOCIATION: phenomenon where clinical manifestations resolve but EEG seizures continue; DECOUPLING after treatment; clinical improvement without EEG improvement; EEG-BASED CLASSIFICATION (ILAE 2021): CLINICAL SEIZURES WITH EEG CORRELATE; CLINICAL SEIZURES WITHOUT EEG CORRELATE (behavioral/subcortical/jitteriness); ELECTROGRAPHIC-ONLY SEIZURES (EEG confirmed; no clinical); CONTINUOUS EEG MONITORING (cEEG): recommended for all neonates with seizures or risk; AMPLITUDE-INTEGRATED EEG (aEEG): trend display; detects status epilepticus; used at bedside; NEONATE-SPECIFIC: non-convulsive seizures VERY COMMON; ELECTROGRAPHIC STATUS EPILEPTICUS (ESE): >=30 min; or seizure burden >=50% of any 1-hour epoch; JITTERINESS vs. SEIZURE: jitteriness = stimulus-sensitive; suppressed by gentle restraint; no EEG correlate; regular rhythmic movements; seizures = not suppressible by restraint; often have EEG changes | `text` |  |  |  |
| Neonatal Seizures — Phenobarbital, LEV, aEEG, HIE, Pyridoxine | Neonatal Seizure Recognition and Classification | `etiology` | Neonatal Seizure Etiology — HIE, Stroke, Metabolic, Genetic | `select` |  |  |  |
| Neonatal Seizures — Phenobarbital, LEV, aEEG, HIE, Pyridoxine | Neonatal Seizure Pharmacotherapy | `pheno_lev` | Phenobarbital vs. Levetiracetam NEOLEV2 Trial and Treatment Algorithm (NEONATAL SEIZURE TREATMENT: FIRST-LINE: PHENOBARBITAL (PB): TRADITIONAL FIRST-LINE; dose 20 mg/kg IV bolus; additional 5-10 mg/kg IV boluses to max 40-60 mg/kg; SEIZURE FREEDOM: 43-57% with PB alone; MECHANISM: GABA-A potentiation; barbiturate; HALF-LIFE NEONATES: 100-150h (prolonged vs. adults); THERAPEUTIC LEVEL: 20-40 mcg/mL; SIDE EFFECTS: respiratory depression (monitor); sedation; hypotension; LONG-TERM CONCERN: apoptotic neurodegeneration (animal data; human significance unclear); LEVETIRACETAM (LEV): NEOLEV2 TRIAL (NEJM 2023): multicenter RCT; PB 20 mg/kg vs. LEV 60 mg/kg IV; PRIMARY ENDPOINT: seizure cessation within 5 min and no recurrence at 24h; RESULT: PB 80% seizure freedom vs. LEV 28% (p<0.0001); PB CLEARLY SUPERIOR; CONCLUSION: phenobarbital remains first-line; levetiracetam NOT equivalent to PB; DOSE: LEV 60-100 mg/kg IV; SAFETY PROFILE: respiratory depression less than PB; ROLE: second-line or adjunct; BENZODIAZEPINES (SECOND-LINE): LORAZEPAM 0.05-0.1 mg/kg IV or MIDAZOLAM; short-acting; useful for acute breakthrough; FOSPHENYTOIN: 20 mg PE/kg IV (alternative to PB in some centers); PHENYTOIN: not preferred neonates; LIDOCAINE: used in Europe; 2 mg/kg bolus; tachyarrhythmia risk; DO NOT COMBINE with phenytoin; PYRIDOXINE TRIAL: 100 mg IV x3 during EEG; BIOTINIDASE: start biotin empirically if suspected; BUMETANIDE: NKCC1 (Na-K-2Cl cotransporter-1) inhibitor; rationale (GABAergic excitation in neonates); NEMO trial: failed; hearing loss concern; TREATMENT GOALS: seizure burden <10 min/hour; prevent brain injury; DURATION OF THERAPY: typically 2-3 months; wean if EEG normalized; underlying etiology resolved | `text` |  |  |  |
| Neonatal Seizures — Phenobarbital, LEV, aEEG, HIE, Pyridoxine | Neonatal Seizure Pharmacotherapy | `hie_protocol` | HIE Cooling Protocol, MRI Timing, and Outcome Prediction | `select` |  |  |  |

### Newborn Exam — `newborn_exam_cf`

Screen: 1 page(s) · 4 section(s) · 24 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Newborn Physical Examination | Birth Information | `gestational_age` | Gestational Age (weeks) | `number` |  |  |  |
| Newborn Physical Examination | Birth Information | `birth_weight` | Birth Weight (grams) | `number` |  |  |  |
| Newborn Physical Examination | Birth Information | `birth_length` | Birth Length (cm) | `number` |  |  |  |
| Newborn Physical Examination | Birth Information | `head_circumference` | Head Circumference (cm) | `number` |  |  |  |
| Newborn Physical Examination | Birth Information | `apgar_1min` | APGAR at 1 minute (0-10) | `number` |  |  |  |
| Newborn Physical Examination | Birth Information | `apgar_5min` | APGAR at 5 minutes (0-10) | `number` |  |  |  |
| Newborn Physical Examination | Birth Information | `delivery_type` | Delivery Type | `select` |  |  |  |
| Newborn Physical Examination | Physical Examination | `skin` | Skin | `select` |  |  |  |
| Newborn Physical Examination | Physical Examination | `red_reflex` | Red reflex bilateral — present (absent → urgent ophthalmology) | `checkbox` |  |  |  |
| Newborn Physical Examination | Physical Examination | `palate_intact` | Palate intact (cleft palate excluded) | `checkbox` |  |  |  |
| Newborn Physical Examination | Physical Examination | `cardiovascular` | Cardiovascular | `select` |  |  |  |
| Newborn Physical Examination | Physical Examination | `respiratory` | Respiratory | `select` |  |  |  |
| Newborn Physical Examination | Physical Examination | `abdomen` | Abdomen / Umbilicus | `select` |  |  |  |
| Newborn Physical Examination | Physical Examination | `hips` | Hip Exam (Ortolani / Barlow) | `select` |  |  |  |
| Newborn Physical Examination | Physical Examination | `spine` | Spine intact — no sacral dimple with hair tuft / no visible defect | `checkbox` |  |  |  |
| Newborn Physical Examination | Newborn Screening | `newborn_screen_done` | Newborn state metabolic screen completed (heel stick — 24-48 hrs) | `checkbox` |  |  |  |
| Newborn Physical Examination | Newborn Screening | `cchd_screen` | CCHD Pulse Oximetry Screen (at ≥24 hrs) | `select` |  |  |  |
| Newborn Physical Examination | Newborn Screening | `hearing_screen` | Newborn Hearing Screen (AABR) | `select` |  |  |  |
| Newborn Physical Examination | Newborn Screening | `bili_checked` | Transcutaneous bilirubin (TcB) / total serum bilirubin (if jaundice) | `checkbox` |  |  |  |
| Newborn Physical Examination | Discharge Instructions | `feeding_type` | Feeding Method | `select` |  |  |  |
| Newborn Physical Examination | Discharge Instructions | `circumcision` | Circumcision (if male) | `select` |  |  |  |
| Newborn Physical Examination | Discharge Instructions | `hepatitis_b` | Hepatitis B vaccine given (if family consented) | `checkbox` |  |  |  |
| Newborn Physical Examination | Discharge Instructions | `followup_72hrs` | Follow-up appointment scheduled within 48-72 hours (AAP recommendation) | `checkbox` |  |  |  |
| Newborn Physical Examination | Discharge Instructions | `safe_sleep_counseled` | Safe sleep counseled (ABCs: Alone, Back, Crib — no soft bedding, smoking, co-sleeping) | `checkbox` |  |  |  |

### Newborn Jaundice / Hyperbilirubinemia — `newborn_hyperbilirubinemia_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Newborn Hyperbilirubinemia Management | Neonate & Risk Assessment | `patientId` | Patient (Neonate) | `typeahead` | Y |  |  |
| Newborn Hyperbilirubinemia Management | Neonate & Risk Assessment | `visitDate` | Visit Date | `date` | Y |  |  |
| Newborn Hyperbilirubinemia Management | Neonate & Risk Assessment | `provider` | Pediatrician / Neonatologist | `typeahead` | Y |  |  |
| Newborn Hyperbilirubinemia Management | Neonate & Risk Assessment | `gestationalAge` | Gestational Age (weeks) | `number` | Y |  |  |
| Newborn Hyperbilirubinemia Management | Neonate & Risk Assessment | `ageHours` | Infant Age at Assessment (hours of life) | `number` | Y |  |  |
| Newborn Hyperbilirubinemia Management | Neonate & Risk Assessment | `birthWeight` | Birth Weight (grams) | `number` | Y |  |  |
| Newborn Hyperbilirubinemia Management | Neonate & Risk Assessment | `feedingType` | Feeding Method | `select` | Y |  |  |
| Newborn Hyperbilirubinemia Management | Bilirubin Assessment | `tsb` | Total Serum Bilirubin (TSB, mg/dL) | `number` | Y |  |  |
| Newborn Hyperbilirubinemia Management | Bilirubin Assessment | `directBili` | Direct (Conjugated) Bilirubin (mg/dL) | `number` |  |  |  |
| Newborn Hyperbilirubinemia Management | Bilirubin Assessment | `tcbReading` | TcB (Transcutaneous Bilirubin) if checked (mg/dL) | `number` |  |  |  |
| Newborn Hyperbilirubinemia Management | Bilirubin Assessment | `bhzoneAssessment` | Bilirubin Risk Zone (Bhutani Nomogram) | `textarea` | Y |  |  |
| Newborn Hyperbilirubinemia Management | Treatment Plan | `phototherapyPlan` | Phototherapy Management | `textarea` | Y |  |  |
| Newborn Hyperbilirubinemia Management | Treatment Plan | `plan` | Assessment & Follow-Up Plan | `textarea` | Y |  |  |

### Newborn Nursery Assessment — `neonatology_newborn_assessment_cf`

Screen: 1 page(s) · 5 section(s) · 34 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Newborn Nursery Assessment | Birth Information | `nb_dob` | Date of Birth | `date` |  |  |  |
| Newborn Nursery Assessment | Birth Information | `nb_gestational_age` | Gestational Age at Delivery (weeks and days) | `text` |  |  |  |
| Newborn Nursery Assessment | Birth Information | `nb_birth_weight` | Birth Weight (grams) | `text` |  |  |  |
| Newborn Nursery Assessment | Birth Information | `nb_birth_length` | Birth Length (cm) | `text` |  |  |  |
| Newborn Nursery Assessment | Birth Information | `nb_hc` | Head Circumference at Birth (cm) | `text` |  |  |  |
| Newborn Nursery Assessment | Birth Information | `nb_delivery_type` | Delivery Type | `select` |  |  |  |
| Newborn Nursery Assessment | Birth Information | `nb_apgar_1min` | APGAR Score at 1 Minute (0-10) | `number` |  |  |  |
| Newborn Nursery Assessment | Birth Information | `nb_apgar_5min` | APGAR Score at 5 Minutes (0-10) | `number` |  |  |  |
| Newborn Nursery Assessment | Birth Information | `nb_apgar_10min` | APGAR Score at 10 Minutes (if 5-min below 7) | `text` |  |  |  |
| Newborn Nursery Assessment | Birth Information | `nb_resuscitation` | Delivery Room Resuscitation | `select` |  |  |  |
| Newborn Nursery Assessment | Maternal History and Risk Factors | `nb_maternal_gbs` | Maternal GBS Status | `select` |  |  |  |
| Newborn Nursery Assessment | Maternal History and Risk Factors | `nb_maternal_infections` | Maternal Infections or Exposures | `select` |  |  |  |
| Newborn Nursery Assessment | Maternal History and Risk Factors | `nb_maternal_meds` | Maternal Medications Affecting Newborn | `select` |  |  |  |
| Newborn Nursery Assessment | Maternal History and Risk Factors | `nb_maternal_dm` | Maternal Diabetes | `select` |  |  |  |
| Newborn Nursery Assessment | Newborn Physical Examination | `nb_vitals` | Vital Signs | `select` |  |  |  |
| Newborn Nursery Assessment | Newborn Physical Examination | `nb_general` | General Appearance | `select` |  |  |  |
| Newborn Nursery Assessment | Newborn Physical Examination | `nb_heent` | HEENT | `select` |  |  |  |
| Newborn Nursery Assessment | Newborn Physical Examination | `nb_cardiac` | Cardiovascular | `select` |  |  |  |
| Newborn Nursery Assessment | Newborn Physical Examination | `nb_abdomen` | Abdomen | `select` |  |  |  |
| Newborn Nursery Assessment | Newborn Physical Examination | `nb_hips` | Hip Examination (DDH Screen) | `select` |  |  |  |
| Newborn Nursery Assessment | Newborn Physical Examination | `nb_genitalia` | Genitalia | `select` |  |  |  |
| Newborn Nursery Assessment | Newborn Physical Examination | `nb_neuro` | Neurological | `select` |  |  |  |
| Newborn Nursery Assessment | Feeding and Jaundice | `nb_feeding_method` | Feeding Method | `select` |  |  |  |
| Newborn Nursery Assessment | Feeding and Jaundice | `nb_feeding_assessment` | Feeding Assessment | `select` |  |  |  |
| Newborn Nursery Assessment | Feeding and Jaundice | `nb_bilirubin` | Total Serum or Transcutaneous Bilirubin (mg/dL) and Age in Hours | `text` |  |  |  |
| Newborn Nursery Assessment | Feeding and Jaundice | `nb_jaundice_risk` | Jaundice Risk and Management | `select` |  |  |  |
| Newborn Nursery Assessment | Feeding and Jaundice | `nb_weight_change_pct` | Percent Weight Change from Birth Weight (%) | `text` |  |  |  |
| Newborn Nursery Assessment | Newborn Screening and Immunizations | `nb_metabolic_screen` | Newborn Metabolic Screen (NBS) | `select` |  |  |  |
| Newborn Nursery Assessment | Newborn Screening and Immunizations | `nb_hearing_screen` | Newborn Hearing Screen | `select` |  |  |  |
| Newborn Nursery Assessment | Newborn Screening and Immunizations | `nb_critical_chd_screen` | Critical CHD Pulse Oximetry Screen (at 24h or before discharge) | `select` |  |  |  |
| Newborn Nursery Assessment | Newborn Screening and Immunizations | `nb_hbv_vaccine` | Hepatitis B Vaccine | `select` |  |  |  |
| Newborn Nursery Assessment | Newborn Screening and Immunizations | `nb_discharge_plan` | Discharge Readiness | `select` |  |  |  |
| Newborn Nursery Assessment | Newborn Screening and Immunizations | `nb_followup` | Pediatrician Follow-Up Appointment | `select` |  |  |  |
| Newborn Nursery Assessment | Newborn Screening and Immunizations | `nb_notes` | Newborn Assessment Notes and Parent Education | `textarea` |  |  |  |

### Otitis Media — `pediatrics_otitis_media_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Otitis Media — AOM, OME, and Treatment | Diagnosis and Treatment | `om_f1` | Otitis Media Evaluation: EPIDEMIOLOGY (MOST COMMON REASON ANTIBIOTIC PRESCRIPTION IN CHILDREN; MOST CHILDREN 1+ EPISODE BY AGE 3; SECOND ONLY TO COMMON COLD In Pediatric Office Visits; PEAK AGE 6-18 MONTHS; INCIDENCE DECREASES After Age 6Y; RISK FACTORS: Daycare Attendance; Siblingss; Bottle Feeding Not Breastfed; Pacifier Use After 6M; Tobacco Smoke Exposure; Native American Alaska Native High Risk; Down Syndrome Cleft Palate Higher Risk; BACTERIOLOGY: STREPTOCOCCUS PNEUMONIAE 35 pct Most Common PCV13 Reduces; HAEMOPHILUS INFLUENZAE NON-TYPEABLE NTHi 30 pct; MORAXELLA CATARRHALIS 10-15 pct; VIRAL 25 pct RSV Rhinovirus Influenza; BETA-LACTAMASE PRODUCERS H. influenzae Moraxella; CLASSIFICATION: ACUTE OTITIS MEDIA AOM (ACUTE ONSET Symptoms Under 48H; MIDDLE EAR EFFUSION Tympanic Membrane Bulging Opacified Air-Fluid; SIGNS INFLAMMATION Erythema TM Or Otalgia Distinct; ACUTE CRITERIA ALL THREE: Moderate-Severe Bulging TM Any Age; OR Mild Bulging Plus Under 2Y Plus Bilateral; OPAQUE TM Purulent Otorrhea Not External; OTITIS MEDIA WITH EFFUSION OME GLUE EAR: Middle Ear Fluid WITHOUT Signs Acute Inflammation; Follows AOM Or Independent; Self-Limiting Most; 90 pct Resolve 3 Months; HEARING LOSS Main Concern OME; RECURRENT AOM: 3 Or More Episodes 6 Months Or 4 Or More 12 Months; CHRONIC SUPPURATIVE OTITIS MEDIA CSOM: Perforation Chronic Otorrhea Over 2W; DIAGNOSIS: PNEUMATIC OTOSCOPY GOLD STANDARD Mobility; TYMPANOMETRY Flat Type B Or C Negative Pressure; ACOUSTIC REFLECTOMETRY; TYMPANOCENTESIS Perforation Severe Or Immunocompromised; COMPLICATIONS (RARE): Mastoiditis; Meningitis; Facial Nerve Palsy; Lateral Sinus Thrombosis; Cholesteatoma; Intracranial Abscess; HEARING SCREEN All Established OME Over 3M) | `text` |  |  |  |
| Otitis Media — AOM, OME, and Treatment | Diagnosis and Treatment | `om_f2` | Antibiotic Treatment, Watch and Wait, and Prevention | `select` |  |  |  |

### Pediatric ADHD — `pediatrics_adhd_cf`

Screen: 1 page(s) · 4 section(s) · 28 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric ADHD Assessment and Management | Diagnosis and Presentation | `adhd_dsm_type` | ADHD DSM-5 Presentation Type | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | Diagnosis and Presentation | `adhd_age_onset` | Age at Symptom Onset | `text` |  |  |  |
| Pediatric ADHD Assessment and Management | Diagnosis and Presentation | `adhd_age_diagnosis` | Age at Formal Diagnosis | `text` |  |  |  |
| Pediatric ADHD Assessment and Management | Diagnosis and Presentation | `adhd_severity` | Severity | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | Diagnosis and Presentation | `adhd_settings_impaired` | Settings with Impairment | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | Diagnosis and Presentation | `adhd_psychoeducational_testing` | Psychoeducational / Neuropsychological Testing | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | Rating Scales and Comorbidities | `adhd_vanderbilt_parent` | Vanderbilt Parent Scale | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | Rating Scales and Comorbidities | `adhd_vanderbilt_teacher` | Vanderbilt Teacher Scale | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | Rating Scales and Comorbidities | `adhd_conners_score` | CONNERS Score (if used) | `text` |  |  |  |
| Pediatric ADHD Assessment and Management | Rating Scales and Comorbidities | `adhd_learning_disability` | Comorbid Learning Disability | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | Rating Scales and Comorbidities | `adhd_anxiety` | Comorbid Anxiety | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | Rating Scales and Comorbidities | `adhd_oppositional` | Comorbid ODD / Conduct Disorder | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | Rating Scales and Comorbidities | `adhd_autism_spectrum` | Comorbid Autism Spectrum Disorder | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | Rating Scales and Comorbidities | `adhd_sleep_issues` | Sleep Problems | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | Treatment Plan | `adhd_medication_class` | Medication Class | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | Treatment Plan | `adhd_current_med` | Current Medication and Dose | `text` |  |  |  |
| Pediatric ADHD Assessment and Management | Treatment Plan | `adhd_med_formulation` | Formulation | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | Treatment Plan | `adhd_response` | Medication Response | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | Treatment Plan | `adhd_side_effects` | Side Effects Reported | `textarea` |  |  |  |
| Pediatric ADHD Assessment and Management | Treatment Plan | `adhd_appetite_weight` | Appetite/Weight Impact (lbs, trend) | `text` |  |  |  |
| Pediatric ADHD Assessment and Management | Treatment Plan | `adhd_hr_bp` | Baseline HR and BP on stimulant | `text` |  |  |  |
| Pediatric ADHD Assessment and Management | Treatment Plan | `adhd_behavioral_therapy` | Behavioral Therapy | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | School and Functional Outcomes | `adhd_504_iep` | 504 Plan or IEP | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | School and Functional Outcomes | `adhd_accommodations` | Key Accommodations in Place | `textarea` |  |  |  |
| Pediatric ADHD Assessment and Management | School and Functional Outcomes | `adhd_grade_performance` | Academic Performance | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | School and Functional Outcomes | `adhd_functional_impairment` | Key Functional Impairments to Target | `textarea` |  |  |  |
| Pediatric ADHD Assessment and Management | School and Functional Outcomes | `adhd_followup_interval` | Follow-up Interval | `select` |  |  |  |
| Pediatric ADHD Assessment and Management | School and Functional Outcomes | `adhd_notes` | Additional Notes | `textarea` |  |  |  |

### Pediatric ADHD Eval — `adhd_evaluation_pediatric_cf`

Screen: 1 page(s) · 4 section(s) · 17 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric ADHD Evaluation (DSM-5) | Presenting Concerns and History | `age_at_eval` | Age at Evaluation (years) | `number` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Presenting Concerns and History | `referral_source` | Referral Source | `select` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Presenting Concerns and History | `symptom_onset` | Symptom Onset (DSM-5 requires before age 12) | `select` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Presenting Concerns and History | `settings` | Settings Where Symptoms Present (home / school / peers) | `textarea` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Validated Rating Scales | `vanderbilt_parent` | Vanderbilt Parent Rating Scale — ADHD subscale (raw score) | `number` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Validated Rating Scales | `vanderbilt_teacher` | Vanderbilt Teacher Rating Scale — ADHD subscale (raw score) | `number` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Validated Rating Scales | `conners_score` | Conners' Rating Scale T-score (≥65 = significant) | `number` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Validated Rating Scales | `presentation` | ADHD Presentation (DSM-5) | `select` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Comorbidities and Differential | `anxiety_comorbid` | Anxiety (common comorbidity — treat first if severe) | `checkbox` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Comorbidities and Differential | `learning_disability` | Learning disability / dyslexia | `checkbox` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Comorbidities and Differential | `sleep_disorder` | Sleep disorder (poor sleep mimics ADHD) | `checkbox` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Comorbidities and Differential | `vision_hearing_checked` | Vision and hearing screened / normal | `checkbox` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Comorbidities and Differential | `lead_thyroid_checked` | Lead level / thyroid function checked (if indicated) | `checkbox` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Treatment Plan | `behavioral_therapy` | Parent behavior training / behavioral therapy first (preferred for <6 yr) | `checkbox` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Treatment Plan | `school_accommodations` | 504 / IEP accommodations requested | `checkbox` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Treatment Plan | `medication` | Medication (if pharmacotherapy chosen) | `select` |  |  |  |
| Pediatric ADHD Evaluation (DSM-5) | Treatment Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Pediatric Asthma — `pediatric_asthma_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Asthma Management Visit | Asthma Control Assessment (GINA / NAEPP) | `acs_score` | Asthma Control Level | `select` |  |  |  |
| Pediatric Asthma Management Visit | Asthma Control Assessment (GINA / NAEPP) | `saba_uses_week` | SABA Uses per Week (goal ≤2) | `number` |  |  |  |
| Pediatric Asthma Management Visit | Asthma Control Assessment (GINA / NAEPP) | `nighttime_symptoms` | Nighttime Symptoms per Month (goal 0) | `number` |  |  |  |
| Pediatric Asthma Management Visit | Asthma Control Assessment (GINA / NAEPP) | `er_hospitalization` | ED visit or hospitalization for asthma in past year | `checkbox` |  |  |  |
| Pediatric Asthma Management Visit | Asthma Control Assessment (GINA / NAEPP) | `peak_flow_pct` | Peak Flow (% Personal Best — if ≥5 yr) | `number` |  |  |  |
| Pediatric Asthma Management Visit | Severity Classification (initial visit) / Step-Up | `step` | Current NAEPP Step | `select` |  |  |  |
| Pediatric Asthma Management Visit | Severity Classification (initial visit) / Step-Up | `ics_inhaler` | Current ICS Inhaler and Dose | `text` |  |  |  |
| Pediatric Asthma Management Visit | Severity Classification (initial visit) / Step-Up | `laba_add_on` | LABA add-on prescribed (only in combination with ICS — never LABA alone in asthma) | `checkbox` |  |  |  |
| Pediatric Asthma Management Visit | Severity Classification (initial visit) / Step-Up | `biologic` | Biologic Add-On (if severe uncontrolled, ≥6 yr) | `select` |  |  |  |
| Pediatric Asthma Management Visit | Asthma Action Plan | `action_plan_updated` | Written asthma action plan updated and given to family + school | `checkbox` |  |  |  |
| Pediatric Asthma Management Visit | Asthma Action Plan | `inhaler_technique_checked` | Inhaler technique observed and corrected | `checkbox` |  |  |  |
| Pediatric Asthma Management Visit | Asthma Action Plan | `spacer_used` | Spacer / valved holding chamber used with MDI | `checkbox` |  |  |  |
| Pediatric Asthma Management Visit | Asthma Action Plan | `trigger_avoidance` | Environmental Trigger Avoidance Plan (smoke, pets, mold, dust mites) | `textarea` |  |  |  |
| Pediatric Asthma Management Visit | Asthma Action Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Pediatric Asthma — `pediatrics_asthma_cf`

Screen: 1 page(s) · 4 section(s) · 30 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Asthma Management | Asthma Classification and Severity | `asthma_severity` | Asthma Severity (initial classification) | `select` |  |  |  |
| Pediatric Asthma Management | Asthma Classification and Severity | `asthma_control` | Current Asthma Control | `select` |  |  |  |
| Pediatric Asthma Management | Asthma Classification and Severity | `asthma_act_score` | Childhood Asthma Control Test (C-ACT) Score | `number` |  |  |  |
| Pediatric Asthma Management | Asthma Classification and Severity | `asthma_gina_step` | Current GINA Treatment Step | `select` |  |  |  |
| Pediatric Asthma Management | Asthma Classification and Severity | `asthma_age_onset` | Age at Asthma Onset | `text` |  |  |  |
| Pediatric Asthma Management | Asthma Classification and Severity | `asthma_atopy_present` | Atopic Comorbidities | `select` |  |  |  |
| Pediatric Asthma Management | Lung Function and Triggers | `asthma_fev1_pct` | FEV1 (% predicted) | `number` |  |  |  |
| Pediatric Asthma Management | Lung Function and Triggers | `asthma_fev1_fvc` | FEV1/FVC Ratio | `number` |  |  |  |
| Pediatric Asthma Management | Lung Function and Triggers | `asthma_bronchodilator_response` | Bronchodilator Reversibility | `select` |  |  |  |
| Pediatric Asthma Management | Lung Function and Triggers | `asthma_peak_flow` | Peak Flow (L/min, % personal best) | `text` |  |  |  |
| Pediatric Asthma Management | Lung Function and Triggers | `asthma_triggers` | Identified Triggers (allergens, exercise, cold air, smoke, viral) | `textarea` |  |  |  |
| Pediatric Asthma Management | Lung Function and Triggers | `asthma_exercise_induced` | Exercise-Induced Bronchoconstriction (EIB) | `select` |  |  |  |
| Pediatric Asthma Management | Lung Function and Triggers | `asthma_allergen_testing` | Allergy Testing (skin prick or RAST) | `select` |  |  |  |
| Pediatric Asthma Management | Controller and Reliever Medications | `asthma_saba` | Short-Acting Beta Agonist (SABA) | `select` |  |  |  |
| Pediatric Asthma Management | Controller and Reliever Medications | `asthma_saba_frequency` | SABA Use Frequency | `select` |  |  |  |
| Pediatric Asthma Management | Controller and Reliever Medications | `asthma_ics` | Inhaled Corticosteroid (ICS) | `select` |  |  |  |
| Pediatric Asthma Management | Controller and Reliever Medications | `asthma_laba` | Long-Acting Beta Agonist (LABA - over 5 years) | `select` |  |  |  |
| Pediatric Asthma Management | Controller and Reliever Medications | `asthma_montelukast` | Montelukast (LTRA) | `select` |  |  |  |
| Pediatric Asthma Management | Controller and Reliever Medications | `asthma_biologic` | Biologic Agent (Step 5) | `select` |  |  |  |
| Pediatric Asthma Management | Controller and Reliever Medications | `asthma_inhaler_technique` | Inhaler Technique Assessment | `select` |  |  |  |
| Pediatric Asthma Management | Controller and Reliever Medications | `asthma_spacer_use` | Spacer / Valved Holding Chamber | `select` |  |  |  |
| Pediatric Asthma Management | Asthma Action Plan and School | `asthma_action_plan_given` | Written Asthma Action Plan | `select` |  |  |  |
| Pediatric Asthma Management | Asthma Action Plan and School | `asthma_school_plan` | School Asthma Action Plan | `select` |  |  |  |
| Pediatric Asthma Management | Asthma Action Plan and School | `asthma_ed_visits` | ED Visits for Asthma in Past 12 Months | `number` |  |  |  |
| Pediatric Asthma Management | Asthma Action Plan and School | `asthma_hospitalizations` | Hospitalizations for Asthma in Past 12 Months | `number` |  |  |  |
| Pediatric Asthma Management | Asthma Action Plan and School | `asthma_oral_steroid_courses` | Oral Steroid Courses in Past 12 Months | `number` |  |  |  |
| Pediatric Asthma Management | Asthma Action Plan and School | `asthma_missed_school_days` | School Days Missed Due to Asthma (past year) | `number` |  |  |  |
| Pediatric Asthma Management | Asthma Action Plan and School | `asthma_step_change` | Treatment Step Change Today | `select` |  |  |  |
| Pediatric Asthma Management | Asthma Action Plan and School | `asthma_pulm_referral` | Pulmonology / Allergy Referral | `select` |  |  |  |
| Pediatric Asthma Management | Asthma Action Plan and School | `asthma_notes` | Additional Notes | `textarea` |  |  |  |

### Pediatric Asthma — `pediatrics_acute_asthma_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Acute Asthma — Severity Assessment, Treatment, and Chronic Management | Severity Assessment and Acute Treatment | `pasta_f1` | Pediatric Asthma Evaluation: EPIDEMIOLOGY (6.5 MILLION US CHILDREN WITH ASTHMA; MOST COMMON CHRONIC DISEASE CHILDREN; 1 IN 12 CHILDREN; LEADING CAUSE SCHOOL ABSENTEEISM PEDIATRIC HOSPITALIZATION; DISPARITIES: AFRICAN AMERICAN PUERTO RICAN CHILDREN HIGHEST PREVALENCE MORTALITY; URBAN INDOOR ALLERGENS COCKROACH MOUSE; PATHOPHYSIOLOGY (AIRWAY INFLAMMATION; MUCUS PLUGGING; BRONCHOSPASM; REVERSIBLE AIRFLOW OBSTRUCTION; REMODELING CHRONIC UNTREATED; IgE-MEDIATED ALLERGIC MOST COMMON CHILDREN; TRIGGERS (VIRAL UPPER RESPIRATORY INFECTION MOST COMMON TRIGGER; ALLERGENS DUST MITES PET DANDER COCKROACH MOLD; EXERCISE-INDUCED BRONCHOSPASM; COLD AIR; TOBACCO SMOKE SECONDHAND; INDOOR AIR QUALITY; STRONG ODORS; EMOTIONAL STRESS; ASPIRIN NSAID SENSITIVE OLDER CHILDREN; SEVERITY CLASSIFICATION ACUTE (MILD: TALKING IN SENTENCES PEFR OVER 70 pct; MODERATE: TALKING IN PHRASES PEFR 40-70 pct; SEVERE: TALKING IN WORDS OR LESS PEFR UNDER 40 pct; LIFE-THREATENING: SILENT CHEST CYANOSIS ALTERED MENTAL STATUS; PEDIATRIC RESPIRATORY ASSESSMENT MEASURE PRAM; PULMONARY SCORE; PHYSICAL EXAM (RESPIRATORY RATE TACHYPNEA; ACCESSORY MUSCLES USE RETRACTIONS; NASAL FLARING; AUDIBLE WHEEZE Or SILENT CHEST SEVERE; PEAK EXPIRATORY FLOW RATE PEFR OVER 5 YEARS; SpO2 OXIMETRY) | `text` |  |  |  |
| Pediatric Acute Asthma — Severity Assessment, Treatment, and Chronic Management | Severity Assessment and Acute Treatment | `pasta_f2` | ED Management and Chronic Stepwise Therapy | `select` |  |  |  |

### Pediatric Asthma Action Plan — `pediatrics_asthma_action_plan_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Asthma Action Plan and Severity Classification | Asthma Severity and Control | `asthma_age_group` | Age Group | `select` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Asthma Severity and Control | `asthma_severity` | Asthma Severity Classification (NAEPP / GINA) | `select` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Asthma Severity and Control | `asthma_control` | Current Asthma Control Status | `select` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Asthma Severity and Control | `asthma_act_score` | Asthma Control Test (ACT) Score — 25 = fully controlled; below 20 = not well controlled; below 15 = very poor control | `text` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Asthma Severity and Control | `asthma_er_visits` | ED Visits or Hospitalizations in Past Year (asthma-related) | `number` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Asthma Severity and Control | `asthma_oral_steroids` | Oral Steroid Courses in Past Year (more than 2 = risk factor for severe exacerbation) | `number` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Trigger Identification and Control | `asthma_triggers_identified` | Identified Triggers | `select` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Trigger Identification and Control | `asthma_allergy_testing` | Allergy Testing | `select` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Trigger Identification and Control | `asthma_environmental_control` | Environmental Control Measures (HEPA filters, allergen covers, no pets in bedroom, smoke-free home, roach control) | `textarea` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Action Plan and Medications | `asthma_rescue_saba` | Rescue SABA | `select` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Action Plan and Medications | `asthma_controller_ics` | Controller Inhaled Corticosteroid (ICS) | `select` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Action Plan and Medications | `asthma_add_on` | Add-On Controller Therapy (Step 3-6) | `select` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Action Plan and Medications | `asthma_spirometry` | Spirometry Results | `select` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Action Plan and Medications | `asthma_green_zone` | Green Zone Instructions (doing well — continue controller medications daily; use rescue SABA only as needed) | `textarea` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Action Plan and Medications | `asthma_yellow_zone` | Yellow Zone Instructions (caution — peak flow 50-79% personal best; start albuterol, continue controller, call doctor if not improving in 24h) | `textarea` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Action Plan and Medications | `asthma_red_zone` | Red Zone Instructions (emergency — peak flow below 50%, severe difficulty breathing; albuterol NOW, call 911 or go to ED immediately) | `textarea` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Action Plan and Medications | `asthma_school_plan` | School Asthma Action Plan Provided | `select` |  |  |  |
| Pediatric Asthma Action Plan and Severity Classification | Action Plan and Medications | `asthma_notes` | Asthma Management Notes | `textarea` |  |  |  |

### Pediatric Asthma Exacerbation — `pediatrics_asthma_exacerbation_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Asthma Exacerbation — Severity and ED Treatment | Exacerbation Severity Assessment | `pefr` | PEFR (% predicted; if ≥5 years and cooperative; mild >70%; moderate 40-70%; severe <40%; ≥5 years post-bronchodilator response; use personal best if known; PEFR not required if unable to perform; SpO2 and symptoms guide severity below 5 years) | `number` |  |  |  |
| Pediatric Asthma Exacerbation — Severity and ED Treatment | Exacerbation Severity Assessment | `severity_class` | NAEPP Severity Classification | `select` |  |  |  |
| Pediatric Asthma Exacerbation — Severity and ED Treatment | Treatment and Discharge Planning | `discharge_criteria` | Discharge Criteria (PEFR ≥70% predicted post-treatment; SpO2 ≥95% on room air; minimal/no dyspnea or wheezing; tolerating PO; adequate home support; reliable follow-up; prescriptions: albuterol MDI 4-8 puffs Q4-6h x 5 days; oral prednisolone 1-2 mg/kg/day x 5 days (max 40 mg); continue ICS; step-up if frequent exacerbations; written asthma action plan; educate: trigger avoidance, proper inhaler technique, when to return to ED) | `text` |  |  |  |
| Pediatric Asthma Exacerbation — Severity and ED Treatment | Treatment and Discharge Planning | `controller_stepup` | Controller Therapy Step-Up | `select` |  |  |  |

### Pediatric Behavioral — `pediatric_behavioral_health_cf`

Screen: 1 page(s) · 2 section(s) · 8 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Behavioral Health Screen | Screening Results | `phq_a_score` | PHQ-A Score | `number` |  |  |  |
| Behavioral Health Screen | Screening Results | `phq_a_interpretation` | PHQ-A Interpretation | `select` |  |  |  |
| Behavioral Health Screen | Screening Results | `gad7_score` | GAD-7 Score | `number` |  |  |  |
| Behavioral Health Screen | Screening Results | `gad7_interpretation` | GAD-7 Interpretation | `select` |  |  |  |
| Behavioral Health Screen | Behavioral Concerns | `safety_screen` | Safety Screen (Suicidality) | `select` |  |  |  |
| Behavioral Health Screen | Behavioral Concerns | `safety_plan_in_place` | Safety plan in place | `checkbox` |  |  |  |
| Behavioral Health Screen | Behavioral Concerns | `referral_made` | Mental health referral made | `checkbox` |  |  |  |
| Behavioral Health Screen | Behavioral Concerns | `plan` | Assessment and Plan | `textarea` |  |  |  |

### Pediatric Constipation — `pediatric_constipation_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Constipation Management Visit | Patient & Symptom History | `patientId` | Patient | `typeahead` | Y |  |  |
| Pediatric Constipation Management Visit | Patient & Symptom History | `visitDate` | Visit Date | `date` | Y |  |  |
| Pediatric Constipation Management Visit | Patient & Symptom History | `provider` | Pediatrician / Pediatric GI | `typeahead` | Y |  |  |
| Pediatric Constipation Management Visit | Patient & Symptom History | `childAge` | Age (years) | `number` | Y |  |  |
| Pediatric Constipation Management Visit | Patient & Symptom History | `romeCriteria` | Rome IV Criteria Fulfilled? | `select` | Y |  |  |
| Pediatric Constipation Management Visit | Patient & Symptom History | `bsScore` | Stool Consistency (Bristol Stool Scale) | `select` | Y |  |  |
| Pediatric Constipation Management Visit | Examination & Red Flags | `redFlags` | Red Flag Screening (Organic Cause Exclusion) | `textarea` | Y |  |  |
| Pediatric Constipation Management Visit | Examination & Red Flags | `labs` | Labs & Imaging (if obtained) | `textarea` |  |  |  |
| Pediatric Constipation Management Visit | Disimpaction & Maintenance Plan | `plan` | Assessment & Treatment Plan | `textarea` | Y |  |  |

### Pediatric Epilepsy — `pediatrics_epilepsy_cf`

Screen: 1 page(s) · 4 section(s) · 25 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Epilepsy Management | Diagnosis and Seizure Classification | `ep_epilepsy_syndrome` | Epilepsy Syndrome | `select` |  |  |  |
| Pediatric Epilepsy Management | Diagnosis and Seizure Classification | `ep_seizure_types` | Seizure Types Present (list all) | `textarea` |  |  |  |
| Pediatric Epilepsy Management | Diagnosis and Seizure Classification | `ep_age_onset` | Age at First Seizure | `text` |  |  |  |
| Pediatric Epilepsy Management | Diagnosis and Seizure Classification | `ep_etiology` | Etiology | `select` |  |  |  |
| Pediatric Epilepsy Management | Diagnosis and Seizure Classification | `ep_gene_result` | Genetic Panel Result (if done) | `text` |  |  |  |
| Pediatric Epilepsy Management | Diagnosis and Seizure Classification | `ep_drug_resistant` | Drug-Resistant Epilepsy (failed 2 or more appropriate ASMs) | `select` |  |  |  |
| Pediatric Epilepsy Management | Diagnostic Workup | `ep_eeg_result` | EEG Result | `select` |  |  |  |
| Pediatric Epilepsy Management | Diagnostic Workup | `ep_mri_result` | Brain MRI Result | `select` |  |  |  |
| Pediatric Epilepsy Management | Diagnostic Workup | `ep_metabolic_workup` | Metabolic/Lab Workup Result | `text` |  |  |  |
| Pediatric Epilepsy Management | Diagnostic Workup | `ep_csf_result` | CSF Analysis Result (if done) | `text` |  |  |  |
| Pediatric Epilepsy Management | Anti-Seizure Medications (ASM) | `ep_current_asm_1` | ASM #1 (name, dose, frequency) | `text` |  |  |  |
| Pediatric Epilepsy Management | Anti-Seizure Medications (ASM) | `ep_current_asm_2` | ASM #2 (if on polytherapy) | `text` |  |  |  |
| Pediatric Epilepsy Management | Anti-Seizure Medications (ASM) | `ep_current_asm_3` | ASM #3 (if on polytherapy) | `text` |  |  |  |
| Pediatric Epilepsy Management | Anti-Seizure Medications (ASM) | `ep_asm_side_effects` | ASM Side Effects Reported | `textarea` |  |  |  |
| Pediatric Epilepsy Management | Anti-Seizure Medications (ASM) | `ep_seizure_free_months` | Months Seizure-Free on Current Regimen | `number` |  |  |  |
| Pediatric Epilepsy Management | Anti-Seizure Medications (ASM) | `ep_last_seizure_date` | Date of Most Recent Seizure | `date` |  |  |  |
| Pediatric Epilepsy Management | Anti-Seizure Medications (ASM) | `ep_rescue_medication` | Rescue Medication at Home | `select` |  |  |  |
| Pediatric Epilepsy Management | Anti-Seizure Medications (ASM) | `ep_valproate_monitoring` | Valproate Level / LFT Monitoring | `select` |  |  |  |
| Pediatric Epilepsy Management | Alternative Therapies and Restrictions | `ep_ketogenic_diet` | Ketogenic Diet | `select` |  |  |  |
| Pediatric Epilepsy Management | Alternative Therapies and Restrictions | `ep_vns_therapy` | Vagus Nerve Stimulator (VNS) | `select` |  |  |  |
| Pediatric Epilepsy Management | Alternative Therapies and Restrictions | `ep_surgery_evaluation` | Epilepsy Surgery Evaluation | `select` |  |  |  |
| Pediatric Epilepsy Management | Alternative Therapies and Restrictions | `ep_sports_restrictions` | Sports and Activity Restrictions | `select` |  |  |  |
| Pediatric Epilepsy Management | Alternative Therapies and Restrictions | `ep_school_accommodations` | School Seizure Action Plan | `select` |  |  |  |
| Pediatric Epilepsy Management | Alternative Therapies and Restrictions | `ep_neurology_followup` | Pediatric Neurology Follow-up | `text` |  |  |  |
| Pediatric Epilepsy Management | Alternative Therapies and Restrictions | `ep_notes` | Additional Notes | `textarea` |  |  |  |

### Pediatric Epilepsy — `pediatrics_seizures_epilepsy_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Seizures and Epilepsy — Diagnosis, Syndromes, and Treatment | Seizure Classification and Common Syndromes | `pse_f1` | Pediatric Seizures Evaluation: EPIDEMIOLOGY (1 IN 26 PERSONS LIFETIME EPILEPSY; 150000 NEW CASES US ANNUALLY; HIGHEST INCIDENCE UNDER 2 AND OVER 65; MOST COMMON NEUROLOGICAL DISORDER CHILDREN; ILAE 2017 CLASSIFICATION (FOCAL SEIZURES: UNILATERAL HEMISPHERE ORIGIN; FOCAL AWARE CONSCIOUSNESS PRESERVED; FOCAL IMPAIRED AWARENESS; FOCAL TO BILATERAL TONIC-CLONIC; GENERALIZED SEIZURES: BOTH HEMISPHERES; ABSENCE ATONIC MYOCLONIC TONIC TONIC-CLONIC; UNKNOWN ONSET; PEDIATRIC EPILEPSY SYNDROMES (INFANTILE SPASMS WEST SYNDROME (UNDER 1 YEAR; SALAAM ATTACKS SUDDEN FLEXION EXTENSION; EEG HYPSARRHYTHMIA CHAOTIC HIGH AMPLITUDE; VIGABATRIN ACTH FIRST-LINE; POOR NEURODEVELOPMENTAL PROGNOSIS MANY; DRAVET SYNDROME (SCN1A GENE MUTATION; FEBRILE PROLONGED SEIZURES FIRST YEAR; PROGRESSIVE DRUG-RESISTANT EPILEPSY; VALPROATE CLOBAZAM FENFLURAMINE STIRIPENTOL; AVOID LAMOTRIGINE CARBAMAZEPINE WORSEN; LENNOX-GASTAUT SYNDROME (MULTIPLE SEIZURE TYPES; EEG SLOW SPIKE-WAVE; ATONIC DROPS; SEVERE INTELLECTUAL DISABILITY; VALPROATE CLOBAZAM LAMOTRIGINE FELBAMATE TOPIRAMATE RUFINAMIDE; CHILDHOOD ABSENCE EPILEPSY CAE (4-8 YEARS PEAK; FREQUENT STARE EPISODES 10-30 SEC; EEG 3 Hz SPIKE-WAVE; ETHOSUXIMIDE FIRST-LINE; VALPROATE LAMOTRIGINE; REMISSION 70 pct; JUVENILE MYOCLONIC EPILEPSY JME (ADOLESCENCE ONSET; MORNING MYOCLONIC JERKS TONIC-CLONIC; VALPROATE LEVETIRACETAM LAMOTRIGINE; LIFELONG THERAPY OFTEN; ROLANDIC EPILEPSY BECTS (5-10 YEARS FACIAL TWITCHING SLEEP; EEG CENTROTEMPORAL SPIKES; BENIGN SELF-LIMITING) | `text` |  |  |  |
| Pediatric Seizures and Epilepsy — Diagnosis, Syndromes, and Treatment | Seizure Classification and Common Syndromes | `pse_f2` | Febrile Seizures, ASMs, and Status Epilepticus | `select` |  |  |  |

### Pediatric Failure to Thrive — `pediatric_failure_to_thrive_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Failure to Thrive Evaluation | Patient & Growth Parameters | `patientId` | Patient | `typeahead` | Y |  |  |
| Pediatric Failure to Thrive Evaluation | Patient & Growth Parameters | `visitDate` | Visit Date | `date` | Y |  |  |
| Pediatric Failure to Thrive Evaluation | Patient & Growth Parameters | `provider` | Pediatrician / Pediatric Gastroenterologist | `typeahead` | Y |  |  |
| Pediatric Failure to Thrive Evaluation | Patient & Growth Parameters | `weightKg` | Weight (kg) | `number` | Y |  |  |
| Pediatric Failure to Thrive Evaluation | Patient & Growth Parameters | `heightCm` | Height / Length (cm) | `number` | Y |  |  |
| Pediatric Failure to Thrive Evaluation | Patient & Growth Parameters | `headCircCm` | Head Circumference (cm, if < 3 years) | `number` |  |  |  |
| Pediatric Failure to Thrive Evaluation | Patient & Growth Parameters | `weightPercentile` | Weight-for-Age Percentile (WHO/CDC) | `number` |  |  |  |
| Pediatric Failure to Thrive Evaluation | Patient & Growth Parameters | `heightPercentile` | Height-for-Age Percentile | `number` |  |  |  |
| Pediatric Failure to Thrive Evaluation | Patient & Growth Parameters | `weightHeightPercentile` | Weight-for-Length/Height Percentile | `number` |  |  |  |
| Pediatric Failure to Thrive Evaluation | Patient & Growth Parameters | `fttDefinition` | FTT Definition Met | `select` | Y |  |  |
| Pediatric Failure to Thrive Evaluation | Etiology Workup | `etiologyCategory` | Suspected FTT Category | `select` | Y |  |  |
| Pediatric Failure to Thrive Evaluation | Etiology Workup | `dietaryHistory` | Dietary History (24-48h Recall) | `textarea` | Y |  |  |
| Pediatric Failure to Thrive Evaluation | Etiology Workup | `medicalWorkup` | Medical Workup | `textarea` | Y |  |  |
| Pediatric Failure to Thrive Evaluation | Management Plan | `plan` | Assessment & Management Plan | `textarea` | Y |  |  |

### Pediatric Growth — `pediatric_growth_cf`

Screen: 1 page(s) · 3 section(s) · 11 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Growth Assessment | Measurements | `weight_kg` | Weight (kg) | `number` |  |  |  |
| Growth Assessment | Measurements | `height_cm` | Height (cm) | `number` |  |  |  |
| Growth Assessment | Measurements | `head_circumference` | Head Circumference (cm) | `number` |  |  |  |
| Growth Assessment | Measurements | `bmi` | BMI | `computed` |  |  |  |
| Growth Assessment | Percentiles | `weight_percentile` | Weight Percentile | `text` |  |  |  |
| Growth Assessment | Percentiles | `height_percentile` | Height Percentile | `text` |  |  |  |
| Growth Assessment | Percentiles | `bmi_percentile` | BMI Percentile | `text` |  |  |  |
| Growth Assessment | Percentiles | `hc_percentile` | Head Circumference Percentile | `text` |  |  |  |
| Growth Assessment | Growth Concerns | `growth_velocity` | Growth Velocity | `select` |  |  |  |
| Growth Assessment | Growth Concerns | `concerns` | Growth concern identified | `checkbox` |  |  |  |
| Growth Assessment | Growth Concerns | `growth_notes` | Growth Notes | `textarea` |  |  |  |

### Pediatric Nutrition — `pediatric_nutrition_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Nutrition Assessment | Feeding History | `feeding_method` | Primary Feeding Method | `select` |  |  |  |
| Nutrition Assessment | Feeding History | `feeding_frequency` | Feeding Frequency | `text` |  |  |  |
| Nutrition Assessment | Feeding History | `appetite` | Appetite | `select` |  |  |  |
| Nutrition Assessment | Feeding History | `texture_stage` | Food Texture/Stage | `text` |  |  |  |
| Nutrition Assessment | Dietary Assessment | `variety_adequate` | Adequate dietary variety | `checkbox` |  |  |  |
| Nutrition Assessment | Dietary Assessment | `iron_sources` | Adequate iron sources | `checkbox` |  |  |  |
| Nutrition Assessment | Dietary Assessment | `calcium_sources` | Adequate calcium sources | `checkbox` |  |  |  |
| Nutrition Assessment | Dietary Assessment | `concerns` | Nutritional Concerns | `textarea` |  |  |  |
| Nutrition Assessment | Dietary Assessment | `recommendations` | Dietary Recommendations | `textarea` |  |  |  |

### Pediatric Obesity — `pediatric_obesity_cf`

Screen: 1 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Overweight / Obesity Visit (AAP 2023) | Biometrics | `weight_kg` | Weight (kg) | `number` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Biometrics | `height_cm` | Height (cm) | `number` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Biometrics | `bmi` | BMI (kg/m²) | `number` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Biometrics | `bmi_percentile` | BMI Percentile for Age and Sex | `number` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Biometrics | `bmi_category` | Weight Category (CDC 2022) | `select` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Biometrics | `bp` | BP (compare to age/sex/height percentile chart) | `text` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Comorbidity Screening | `fasting_glucose` | Fasting Glucose (mg/dL — prediabetes ≥100) | `number` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Comorbidity Screening | `hba1c` | HbA1c (%) | `number` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Comorbidity Screening | `ast` | AST (U/L — MASLD screen) | `number` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Comorbidity Screening | `alt` | ALT (U/L — MASLD screen; elevated if >1× ULN) | `number` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Comorbidity Screening | `lipid_panel` | Fasting lipid panel obtained | `checkbox` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Comorbidity Screening | `sleep_apnea_screen` | OSA screening questionnaire (PSQ-SA) / referral to sleep study | `checkbox` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Comorbidity Screening | `orthopedic_concerns` | Orthopedic concern (SCFE / Blount disease — check gait) | `checkbox` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Treatment Plan (AAP 2023 — Intensive Behavioral Health Treatment first) | `ibh_referral` | Intensive behavioral health treatment program referral (≥26 hrs/year — AAP first-line for all obesity) | `checkbox` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Treatment Plan (AAP 2023 — Intensive Behavioral Health Treatment first) | `dietary_counseling` | Dietary Counseling Provided (limit SSBs / fast food, family meals, balanced MyPlate) | `textarea` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Treatment Plan (AAP 2023 — Intensive Behavioral Health Treatment first) | `physical_activity` | Physical Activity Goal (60 min/day moderate-vigorous; screen time <2 hr/day) | `textarea` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Treatment Plan (AAP 2023 — Intensive Behavioral Health Treatment first) | `medication` | Pharmacotherapy (if ≥12 yr with class 2+ obesity or comorbidities) | `select` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Treatment Plan (AAP 2023 — Intensive Behavioral Health Treatment first) | `bariatric_referral` | Bariatric surgery referral (class 3 / severe comorbidities unresponsive to IBH; adolescent-specific program) | `checkbox` |  |  |  |
| Pediatric Overweight / Obesity Visit (AAP 2023) | Treatment Plan (AAP 2023 — Intensive Behavioral Health Treatment first) | `notes` | Assessment and Plan | `textarea` |  |  |  |

### Pediatric Sepsis — `pediatrics_sepsis_shock_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Sepsis and Shock — Recognition, Resuscitation, and Antibiotic Therapy | Definition, Recognition, and Etiology | `psep_f1` | Pediatric Sepsis Evaluation: EPIDEMIOLOGY (75000 PEDIATRIC SEPSIS CASES US ANNUALLY; 7200 DEATHS; INCIDENCE INCREASING; MORTALITY 10-20 pct; NEONATES AND IMMUNOCOMPROMISED HIGHEST RISK; DEFINITIONS PEDIATRIC SEPSIS (SEPSIS: LIFE-THREATENING ORGAN DYSFUNCTION CAUSED BY DYSREGULATED HOST RESPONSE TO INFECTION; PHOENIX SEPSIS CRITERIA NEW 2024; PRIOR SIRS-BASED DEFINITION PEDIATRIC OLDER; SIRS IN CHILDREN (TWO OR MORE: TEMPERATURE OVER 38.5 Or UNDER 36C; HEART RATE ABOVE AGE-APPROPRIATE; RESPIRATORY RATE ABOVE AGE-APPROPRIATE; WBC ABNORMAL FOR AGE; SEPTIC SHOCK: SEPSIS WITH CARDIOVASCULAR DYSFUNCTION REQUIRING FLUID AND VASOPRESSOR; COMMON CAUSES BY AGE (NEONATES UNDER 28 DAYS: GBS B STREPTOCOCCUS; E COLI; LISTERIA; HERPES SIMPLEX; INFANTS 1-3 MONTHS: GBS GRAM NEGATIVES STREP PNEUMONIAE; OLDER INFANTS CHILDREN: STREP PNEUMO MOST COMMON COMMUNITY; N. MENINGITIDIS VACCINE-PREVENTABLE; H. INFLUENZAE B VACCINE-PREVENTABLE; STAPHYLOCOCCUS AUREUS MRSA; GRAM NEGATIVES UTI SOURCE; VIRAL: INFLUENZA RSV ENTEROVIRUS SEVERE YOUNG; IMMUNOCOMPROMISED: GRAM NEGATIVE FUNGAL VIRAL; CLINICAL RECOGNITION (VITAL SIGN ALERTS AGE-APPROPRIATE THRESHOLDS; INFANTS POOR FEEDING HYPOTONIA BULGING FONTANELLE RASH; OLDER CHILDREN FEVER CHILLS ALTERED MENTAL STATUS; PETECHIAE PURPURA MENINGOCOCCEMIA EMERGENCY; CAPILLARY REFILL OVER 2 SECONDS COOL EXTREMITIES; HYPOTENSION LATE SIGN PEDIATRICS; LABS: CBC WITH DIFFERENTIAL; CMP LACTATE; BLOOD CULTURES 2 SETS; URINALYSIS CULTURE LUMBAR PUNCTURE) | `text` |  |  |  |
| Pediatric Sepsis and Shock — Recognition, Resuscitation, and Antibiotic Therapy | Definition, Recognition, and Etiology | `psep_f2` | Resuscitation, Antibiotics, and Vasopressors | `select` |  |  |  |

### Pediatric T1D — `pediatrics_type1_diabetes_cf`

Screen: 1 page(s) · 2 section(s) · 13 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Type 1 Diabetes: Management and Follow-Up | Glycemic Targets and Technology | `p1d_hba1c` | HbA1c (%) — ADA 2024 target below 7.0% for most youth; individualize; below 7.5% for high hypoglycemia unawareness risk; document trend and age-adjusted goals; HbA1c may underestimate average glucose if high TIR (CGM preferred to assess glycemia) | `text` |  |  |  |
| Pediatric Type 1 Diabetes: Management and Follow-Up | Glycemic Targets and Technology | `p1d_tir` | Time in Range (TIR) % — CGM-based; TIR 70-180 mg/dL target above 70%; Time Below Range (TBR below 70 mg/dL) target below 4%; TBR below 54 mg/dL target below 1%; Time Above Range (TAR above 180) below 25%; TIR above 70% correlates with HbA1c below 7% | `text` |  |  |  |
| Pediatric Type 1 Diabetes: Management and Follow-Up | Glycemic Targets and Technology | `p1d_cgm` | CGM Device and Status | `select` |  |  |  |
| Pediatric Type 1 Diabetes: Management and Follow-Up | Glycemic Targets and Technology | `p1d_insulin_delivery` | Insulin Delivery Method | `select` |  |  |  |
| Pediatric Type 1 Diabetes: Management and Follow-Up | Glycemic Targets and Technology | `p1d_insulin_ratios` | Insulin-to-Carb Ratio (ICR), Correction/Sensitivity Factor, Basal Rates — document current settings and most recent adjustment date; ratio requirements increase during puberty (insulin resistance); dawn phenomenon; exercise effect on insulin needs | `text` |  |  |  |
| Pediatric Type 1 Diabetes: Management and Follow-Up | Hypoglycemia, DKA, and Complication Screening | `p1d_hypoglycemia` | Hypoglycemia Assessment | `select` |  |  |  |
| Pediatric Type 1 Diabetes: Management and Follow-Up | Hypoglycemia, DKA, and Complication Screening | `p1d_dka_history` | DKA History and Prevention | `select` |  |  |  |
| Pediatric Type 1 Diabetes: Management and Follow-Up | Hypoglycemia, DKA, and Complication Screening | `p1d_complication_screen` | Annual Complication Screening (ADA) | `select` |  |  |  |
| Pediatric Type 1 Diabetes: Management and Follow-Up | Hypoglycemia, DKA, and Complication Screening | `p1d_autoimmune` | Associated Autoimmune Conditions | `select` |  |  |  |
| Pediatric Type 1 Diabetes: Management and Follow-Up | Hypoglycemia, DKA, and Complication Screening | `p1d_psychosocial` | Psychosocial and School Assessment | `select` |  |  |  |
| Pediatric Type 1 Diabetes: Management and Follow-Up | Hypoglycemia, DKA, and Complication Screening | `p1d_school_plan` | School Diabetes Management Plan | `select` |  |  |  |
| Pediatric Type 1 Diabetes: Management and Follow-Up | Hypoglycemia, DKA, and Complication Screening | `p1d_transition` | Transition Planning (Adolescents) | `select` |  |  |  |
| Pediatric Type 1 Diabetes: Management and Follow-Up | Hypoglycemia, DKA, and Complication Screening | `p1d_notes` | Pediatric T1D Management Notes and Multidisciplinary Team (CDE, Dietitian, Psychologist, School) Coordination | `textarea` |  |  |  |

### Pediatric T1DM — `pediatric_type1_diabetes_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pediatric Type 1 Diabetes Management Visit | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| Pediatric Type 1 Diabetes Management Visit | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| Pediatric Type 1 Diabetes Management Visit | Patient & Diagnosis | `provider` | Pediatric Endocrinologist | `typeahead` | Y |  |  |
| Pediatric Type 1 Diabetes Management Visit | Patient & Diagnosis | `childAge` | Age (years) | `number` | Y |  |  |
| Pediatric Type 1 Diabetes Management Visit | Patient & Diagnosis | `diabetesDuration` | Duration of Diabetes Diagnosis | `text` |  |  |  |
| Pediatric Type 1 Diabetes Management Visit | Patient & Diagnosis | `insulinRegimen` | Insulin Delivery Method | `select` | Y |  |  |
| Pediatric Type 1 Diabetes Management Visit | Glucose Control Assessment | `cgmData` | CGM Data Review (past 14 days) | `textarea` | Y |  |  |
| Pediatric Type 1 Diabetes Management Visit | Glucose Control Assessment | `hypoglycemia` | Hypoglycemia Events | `textarea` | Y |  |  |
| Pediatric Type 1 Diabetes Management Visit | Insulin Adjustment & Complications Screening | `insulinAdjustment` | Insulin Regimen Adjustment | `textarea` | Y |  |  |
| Pediatric Type 1 Diabetes Management Visit | Insulin Adjustment & Complications Screening | `complications` | Annual Complications Screening | `textarea` | Y |  |  |

### RSV Bronchiolitis — `pediatrics_rsv_bronchiolitis_cf`

Screen: 1 page(s) · 4 section(s) · 27 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| RSV and Bronchiolitis Management | Presentation and Severity | `rsv_age_months` | Age (months) | `number` |  |  |  |
| RSV and Bronchiolitis Management | Presentation and Severity | `rsv_test_result` | RSV Rapid Test Result | `select` |  |  |  |
| RSV and Bronchiolitis Management | Presentation and Severity | `rsv_other_virus` | Other Viral Pathogen Identified | `select` |  |  |  |
| RSV and Bronchiolitis Management | Presentation and Severity | `rsv_severity` | Clinical Severity | `select` |  |  |  |
| RSV and Bronchiolitis Management | Presentation and Severity | `rsv_spo2` | SpO2 on Room Air (%) | `number` |  |  |  |
| RSV and Bronchiolitis Management | Presentation and Severity | `rsv_rr` | Respiratory Rate (/min) | `number` |  |  |  |
| RSV and Bronchiolitis Management | Presentation and Severity | `rsv_wob` | Work of Breathing | `select` |  |  |  |
| RSV and Bronchiolitis Management | Presentation and Severity | `rsv_feeding_status` | Feeding Status | `select` |  |  |  |
| RSV and Bronchiolitis Management | High-Risk Factors | `rsv_prematurity` | Prematurity History | `select` |  |  |  |
| RSV and Bronchiolitis Management | High-Risk Factors | `rsv_chd` | Congenital Heart Disease | `select` |  |  |  |
| RSV and Bronchiolitis Management | High-Risk Factors | `rsv_chronic_lung` | Chronic Lung Disease (BPD) | `select` |  |  |  |
| RSV and Bronchiolitis Management | High-Risk Factors | `rsv_immunocompromised` | Immunocompromised | `select` |  |  |  |
| RSV and Bronchiolitis Management | High-Risk Factors | `rsv_down_syndrome` | Down Syndrome | `select` |  |  |  |
| RSV and Bronchiolitis Management | Supportive Management | `rsv_nasal_suction` | Nasal Suctioning | `select` |  |  |  |
| RSV and Bronchiolitis Management | Supportive Management | `rsv_oxygen` | Supplemental Oxygen | `select` |  |  |  |
| RSV and Bronchiolitis Management | Supportive Management | `rsv_hfnc_flow` | HFNC Flow Rate (L/min) | `text` |  |  |  |
| RSV and Bronchiolitis Management | Supportive Management | `rsv_hydration` | Hydration Route | `select` |  |  |  |
| RSV and Bronchiolitis Management | Supportive Management | `rsv_albuterol_trial` | Albuterol Trial Response | `select` |  |  |  |
| RSV and Bronchiolitis Management | Supportive Management | `rsv_hypertonic_saline` | Hypertonic Saline Nebulization | `select` |  |  |  |
| RSV and Bronchiolitis Management | Supportive Management | `rsv_antibiotics` | Antibiotics | `select` |  |  |  |
| RSV and Bronchiolitis Management | Prevention and Disposition | `rsv_palivizumab` | Palivizumab Prophylaxis Status | `select` |  |  |  |
| RSV and Bronchiolitis Management | Prevention and Disposition | `rsv_nirsevimab` | Nirsevimab (Beyfortus) Status | `select` |  |  |  |
| RSV and Bronchiolitis Management | Prevention and Disposition | `rsv_disposition` | Disposition Decision | `select` |  |  |  |
| RSV and Bronchiolitis Management | Prevention and Disposition | `rsv_discharge_criteria_met` | Discharge Criteria Met | `select` |  |  |  |
| RSV and Bronchiolitis Management | Prevention and Disposition | `rsv_return_precautions` | Return Precautions Reviewed | `textarea` |  |  |  |
| RSV and Bronchiolitis Management | Prevention and Disposition | `rsv_followup` | Follow-up Timeframe | `text` |  |  |  |
| RSV and Bronchiolitis Management | Prevention and Disposition | `rsv_notes` | Additional Notes | `textarea` |  |  |  |

### Short Stature / Growth — `pediatrics_short_stature_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Short Stature and Growth Failure Evaluation | Growth Measurements and History | `ss_height_percentile` | Current Height (cm), Weight (kg), and Percentiles for Age/Sex (CDC or WHO chart) | `text` |  |  |  |
| Short Stature and Growth Failure Evaluation | Growth Measurements and History | `ss_height_velocity` | Height Velocity (cm/year) — below 4-5 cm/year pre-pubertal = abnormal; below 2 cm/year = seriously subnormal; minimum 6-month interval for accurate calculation | `text` |  |  |  |
| Short Stature and Growth Failure Evaluation | Growth Measurements and History | `ss_mid_parental_height` | Mid-Parental Height (MPH) Target — boys: (father + mother + 13) / 2; girls: (father + mother - 13) / 2; short stature if height below MPH minus 2 standard deviations (below MPH -8.5 cm for boys, -9 cm for girls) | `text` |  |  |  |
| Short Stature and Growth Failure Evaluation | Growth Measurements and History | `ss_bone_age` | Bone Age (left hand and wrist X-ray by Greulich and Pyle atlas) | `select` |  |  |  |
| Short Stature and Growth Failure Evaluation | Growth Measurements and History | `ss_sga_history` | Birth History (SGA / IUGR) | `select` |  |  |  |
| Short Stature and Growth Failure Evaluation | Etiology Classification | `ss_etiology_type` | Most Likely Etiology (differential diagnosis) | `select` |  |  |  |
| Short Stature and Growth Failure Evaluation | Etiology Classification | `ss_labs_initial` | Initial Laboratory Workup | `select` |  |  |  |
| Short Stature and Growth Failure Evaluation | Etiology Classification | `ss_igf1` | IGF-1 Level (ng/mL) and Age/Sex-Specific Z-score — IGF-1 below -2 SD for age and sex suggests GHD; also low in malnutrition, hypothyroidism, liver disease | `text` |  |  |  |
| Short Stature and Growth Failure Evaluation | Etiology Classification | `ss_gh_stim` | GH Stimulation Test Results (peak GH ng/mL, agents used) — arginine + GHRH or glucagon + propranolol preferred; requires 2 tests for diagnosis in many guidelines; insulin tolerance test (ITT) gold standard but hypoglycemia risk | `text` |  |  |  |
| Short Stature and Growth Failure Evaluation | Growth Hormone Therapy and Monitoring | `ss_gh_therapy` | Growth Hormone Therapy Status | `select` |  |  |  |
| Short Stature and Growth Failure Evaluation | Growth Hormone Therapy and Monitoring | `ss_lonapegsomatropin` | Weekly GH (Lonapegsomatropin / Skytrofa) | `select` |  |  |  |
| Short Stature and Growth Failure Evaluation | Growth Hormone Therapy and Monitoring | `ss_gh_response` | Response to GH Treatment | `select` |  |  |  |
| Short Stature and Growth Failure Evaluation | Growth Hormone Therapy and Monitoring | `ss_pediatric_endo_referral` | Pediatric Endocrinology Referral | `select` |  |  |  |
| Short Stature and Growth Failure Evaluation | Growth Hormone Therapy and Monitoring | `ss_notes` | Growth and Short Stature Management Notes | `textarea` |  |  |  |

### Well Child Visit — `well_child_visit_cf`

Screen: 1 page(s) · 3 section(s) · 10 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Well Child Visit | Developmental Milestones | `gross_motor` | Gross Motor | `select` |  |  |  |
| Well Child Visit | Developmental Milestones | `fine_motor` | Fine Motor | `select` |  |  |  |
| Well Child Visit | Developmental Milestones | `language` | Language | `select` |  |  |  |
| Well Child Visit | Developmental Milestones | `social_emotional` | Social/Emotional | `select` |  |  |  |
| Well Child Visit | Screenings | `vision_screen` | Vision Screen | `select` |  |  |  |
| Well Child Visit | Screenings | `hearing_screen` | Hearing Screen | `select` |  |  |  |
| Well Child Visit | Screenings | `lead_screen` | Lead Screen | `select` |  |  |  |
| Well Child Visit | Screenings | `autism_screen` | Autism Screen (M-CHAT) | `select` |  |  |  |
| Well Child Visit | Anticipatory Guidance | `guidance_topics` | Topics Discussed | `select` |  |  |  |
| Well Child Visit | Anticipatory Guidance | `plan` | Plan and Return Instructions | `textarea` |  |  |  |

## Pulmonology

### ARDS Management — `pulmonology_ards_management_cf`

Screen: 1 page(s) · 2 section(s) · 6 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ARDS: Berlin Classification, Ventilator Strategy, and Rescue Therapies | ARDS Berlin Definition, Severity, and Etiologies | `ards_berlin` | Berlin Definition (2012) and ARDS Severity Classification | `select` |  |  |  |
| ARDS: Berlin Classification, Ventilator Strategy, and Rescue Therapies | ARDS Berlin Definition, Severity, and Etiologies | `ards_etiology` | ARDS Workup, Differential, and Monitoring — INITIAL WORKUP: CXR (bilateral infiltrates; avoid portable CXR as only imaging; CT if diagnosis unclear); ABG (PaO2 + PaCO2 + pH; calculate P/F ratio; assess driving pressure = plateau pressure - PEEP; assess static compliance = VT / (Pplat - PEEP)); troponin + BNP/NT-proBNP (cardiac vs non-cardiac edema differentiation; high BNP = cardiac but can be elevated in ARDS too); ECHO (bedside TTE or TEE: left ventricular function; pericardial effusion; cardiac output; volume responsiveness; RV failure: cor pulmonale risk with ARDS + high PEEP); bronchoscopy + BAL (cultures: bacterial; fungal; viral; Pneumocystis; cytology; hemosiderin-laden macrophages = diffuse alveolar hemorrhage; neutrophilia above 80% of differential = ARDS; eosinophilia = eosinophilic pneumonia); CBC + CMP + LFTs + coagulation; lactate; procalcitonin (sepsis source); blood cultures x2; sputum cultures; urinary Legionella + pneumococcal antigen; respiratory viral PCR panel; CLINICAL ENDPOINTS TO MONITOR: P/F ratio (track daily); driving pressure (Pplat - PEEP): target below 15 cmH2O (independent predictor mortality); transpulmonary pressure if esophageal balloon (TP Pplat = Pplat - Pes; TP PEEP = PEEP - PEes); static compliance (VT/(Pplat-PEEP): normal 40-100 mL/cmH2O; ARDS: below 30); dead space fraction (Vd/Vt); lung stress (transpulmonary pressure) + strain (VT/FRC); ventilator-induced lung injury (VILI) avoidance: minimize strain + stress | `text` |  |  |  |
| ARDS: Berlin Classification, Ventilator Strategy, and Rescue Therapies | Ventilator Strategy, Prone Positioning, and Rescue Therapies | `ards_ltvv` | Low Tidal Volume Ventilation and PEEP Strategy | `select` |  |  |  |
| ARDS: Berlin Classification, Ventilator Strategy, and Rescue Therapies | Ventilator Strategy, Prone Positioning, and Rescue Therapies | `ards_prone` | Prone Positioning and Neuromuscular Blockade | `select` |  |  |  |
| ARDS: Berlin Classification, Ventilator Strategy, and Rescue Therapies | Ventilator Strategy, Prone Positioning, and Rescue Therapies | `ards_rescue` | ARDS Rescue Therapies: Steroids, Inhaled Vasodilators, ECMO | `select` |  |  |  |
| ARDS: Berlin Classification, Ventilator Strategy, and Rescue Therapies | Ventilator Strategy, Prone Positioning, and Rescue Therapies | `ards_notes` | ARDS Management Notes and Pulmonology/Critical Care/Cardiac Surgery ECMO Program/Respiratory Therapy/Nursing/Nutrition Coordination | `textarea` |  |  |  |

### Alpha-1 Antitrypsin — `pulmonology_alpha1_antitrypsin_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Alpha-1 Antitrypsin Deficiency AATD — Genetics, Pulmonary, and Hepatic Manifestations | Genetics, Diagnosis, and Phenotypes | `aatd_f1` | AATD Evaluation: EPIDEMIOLOGY (1 IN 2500-5000 EUROPEAN ANCESTRY; UNDERDIAGNOSED AVERAGE DELAY 5-7 YEARS; AUTOSOMAL CODOMINANT; SERPINA1 GENE CHROMOSOME 14; AAT SERINE PROTEASE INHIBITOR PRINCIPAL; PROTECTS LUNG FROM NEUTROPHIL ELASTASE NE PROTEASES; DEFICIENCY LEADS TO UNRESTRAINED ELASTASE LUNG DESTRUCTION; GENOTYPE PHENOTYPE (COMMON ALLELES: M NORMAL; S REDUCED 60 pct; Z SEVERELY REDUCED 15 pct; NULL NO PROTEIN; PI*MM NORMAL 100 pct LEVEL; PI*MS INTERMEDIATE 80 pct; PI*SS 52 pct; PI*MZ INTERMEDIATE 57 pct; PI*ZZ SEVERE DEFICIENCY 15 pct MOST AFFECTED; PI*SZ 37 pct; PI*ZZ CLINICAL DISEASE LUNG AND LIVER; Z ALLELE MISFOLDING POLYMERIZATION LIVER RETENTION; LIVER DAMAGE ACCUMULATION INTRAHEPATIC POLYMERS; DIAGNOSTIC WORKUP (SERUM AAT LEVEL (UNDER 11 MICROMOL/L 57 mg/dL THRESHOLD SEVERE DEFICIENCY; SERUM LEVEL LOW ACUTE PHASE REACTANT; GENOTYPING SERPINA1 PREFERRED; PHENOTYPING IEF ISOELECTRIC FOCUSING; SPIROMETRY FEV1/FVC OBSTRUCTIVE PATTERN COPD; LUNG VOLUMES HYPERINFLATION RV TLC; DLCO REDUCED EMPHYSEMA; HRCT CHEST (BASILAR PANACINAR EMPHYSEMA CHARACTERISTIC; UPPER LOBE EMPHYSEMA SMOKING-RELATED; AIR TRAPPING MOSAIC ATTENUATION; LIVER ASSESSMENT: LFTs AST ALT BILIRUBIN; ABDOMINAL ULTRASOUND CIRRHOSIS; BIOPSY PAS-POSITIVE DIASTASE-RESISTANT GLOBULES HEPATOCYTES; FIB-4 ELASTOGRAPHY FIBROSIS STAGING) | `text` |  |  |  |
| Alpha-1 Antitrypsin Deficiency AATD — Genetics, Pulmonary, and Hepatic Manifestations | Genetics, Diagnosis, and Phenotypes | `aatd_f2` | Augmentation Therapy and Organ Management | `select` |  |  |  |

### Asthma — `pulmonology_asthma_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Asthma — GINA 2024 Management | Diagnosis and Stepped Therapy | `asthma_f1` | Asthma Diagnosis (GINA 2024): SPIROMETRY FEV1/FVC Under LLN + Reversibility (FEV1 Over 12% and 200 mL Post-BD); Peak Flow Variability Over 10%; Bronchoprovocation (Methacholine PC20 Under 16 mg/mL); SYMPTOMS: Episodic Wheeze; Chest Tightness; Cough Night/Exercise; Dyspnea; CLASSIFY SEVERITY: Intermittent; Mild Persistent; Moderate Persistent; Severe Persistent; GINA CONTROL: Controlled (No Symptoms; No SABA); Partly Controlled; Uncontrolled; PHENOTYPES: ALLERGIC (Most Common; IgE; Atopy; Childhood); EOSINOPHILIC (Late Onset; Severe; Eos Over 300; High FeNO); ASPIRIN-EXACERBATED; EXERCISE-INDUCED; OBESITY; BIOMARKERS: FeNO (Fractional Exhaled NO; Over 25 ppb = Eosinophilic Inflammation; Predicts ICS Response); BLOOD EOS Over 300; TOTAL IgE; PERIOSTIN | `text` |  |  |  |
| Asthma — GINA 2024 Management | Diagnosis and Stepped Therapy | `asthma_f2` | GINA Stepped Care and Biologics | `select` |  |  |  |

### Asthma — `pulmonology_asthma_management_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Asthma: GINA Classification, Stepwise Therapy, Severe Asthma Biologics, and Monitoring | Asthma Diagnosis, Severity, and Biomarker Assessment | `asthma_dx` | GINA 2024: FEV1/FVC Below 0.7 Plus 12% Reversibility or Variability, ACT Score 5-25, FeNO Above 25ppb T2 High, EOS Above 300 | `select` |  |  |  |
| Asthma: GINA Classification, Stepwise Therapy, Severe Asthma Biologics, and Monitoring | Asthma Diagnosis, Severity, and Biomarker Assessment | `asthma_gina` | GINA 2024 Steps 1-5: SABA-Free Preferred, ICS-Formoterol SMART, Low-Medium-High ICS/LABA, OCS, Tiotropium Add-On -- GINA 2024 STEPWISE TREATMENT (PREFERRED CONTROLLER + RELIEVER): KEY CHANGE (GINA 2020+): SABA MONOTHERAPY RELIEVER NO LONGER RECOMMENDED (EVEN STEP 1); REASON: SABA OVER-RELIANCE ASSOCIATED WITH INCREASED MORTALITY; ICS-FORMOTEROL AS NEEDED PREFERRED RELIEVER AT ALL STEPS; STEP 1 (SYMPTOMS LESS THAN 2 DAYS/WEEK; NO NIGHTTIME; FEV1 ABOVE 80%): PREFERRED: AS-NEEDED LOW-DOSE ICS-FORMOTEROL [e.g., BUDESONIDE-FORMOTEROL 160/4.5 mcg AS NEEDED; FDA APPROVED GINA STEP 1; SYMBICORT SMART; REDUCES EXACERBATIONS vs SABA AS NEEDED [SYGMA 1/2 NEJM 2018]; ALTERNATIVE: LOW-DOSE ICS TAKEN WHENEVER SABA USED [PAIR STRATEGY]; STEP 2 (SYMPTOMS ABOVE 2/WEEK; NOT DAILY): PREFERRED: LOW-DOSE ICS DAILY + AS-NEEDED ICS-FORMOTEROL or ICS-SABA [LOW-DOSE ICS-FORMOTEROL DAILY; OR LEUKOTRIENE RECEPTOR ANTAGONIST [LTRA; MONTELUKAST 10 mg QD; ZAFIRLUKAST]]; STEP 3 (DAILY SYMPTOMS; SOME NIGHTS; FEV1 60-80%): PREFERRED: LOW-DOSE ICS-FORMOTEROL BOTH MAINTENANCE + RELIEVER [SMART; SINGLE INHALER MAINTENANCE AND RELIEVER THERAPY; BUDESONIDE-FORMOTEROL 80/4.5 OR 160/4.5; DRAMATICALLY REDUCES EXACERBATIONS [COMPASS; FACET TRIALS]; ALTERNATIVE: MEDIUM-DOSE ICS + SABA RELIEVER; STEP 4 (FREQUENTLY UNCONTROLLED; NIGHTTIME SYMPTOMS; FEV1 BELOW 60%): PREFERRED: MEDIUM-DOSE ICS-FORMOTEROL MAINTENANCE + RELIEVER; ALTERNATIVE: HIGH-DOSE ICS + LABA; ADD TIOTROPIUM [RESPIMAT; 5 mcg/day; ADD-ON AT STEP 4-5; GINA STEP 4-5 TIOTROPIUM ADD-ON: TEMPORIN TRIAL + TALLAGHT TRIAL: REDUCED EXACERBATIONS; IMPROVED FEV1 IN POORLY CONTROLLED ON ICS-LABA; FDA 2015 FOR ASTHMA ABOVE 6 YEARS]; STEP 5 (SEVERE UNCONTROLLED; HIGH-DOSE ICS-LABA + TIOTROPIUM + ADD-ON): PREFERRED: HIGH-DOSE ICS-FORMOTEROL + TIOTROPIUM + CONSIDER BIOLOGIC + MINIMIZE OCS; ORAL CORTICOSTEROIDS [OCS; 7.5-10 mg/day PREDNISOLONE; ONLY AS LAST RESORT; OCS-SPARING IS PRIMARY GOAL OF BIOLOGICS; OCS TOXICITY: OSTEOPOROSIS; DIABETES; CATARACTS; ADRENAL SUPPRESSION; HYPERTENSION; WEIGHT GAIN; TREAT MINIMUM EFFECTIVE DOSE]; ICS AGENTS: LOW-DOSE [FLUTICASONE PROPIONATE 100-250 mcg/day; BUDESONIDE 200-400 mcg/day; BECLOMETHASONE 100-200 mcg/day; CICLESONIDE 80-160 mcg/day]; MEDIUM-DOSE [FLUTICASONE PROPIONATE 250-500 mcg; BUDESONIDE 400-800 mcg]; HIGH-DOSE [FLUTICASONE PROPIONATE ABOVE 500 mcg; BUDESONIDE ABOVE 800 mcg; MOMETASONE]; LABA PAIR: FORMOTEROL [RAPID ONSET; SUITABLE AS RELIEVER IN SMART]; SALMETEROL [SLOWER ONSET; NOT FOR RELIEVER]; VILANTEROL; INDACATEROL; LTRA (MONTELUKAST [10 mg QD; ASPIRIN/NSAID-SENSITIVE ASTHMA; EXERCISE-INDUCED; RHINITIS COMORBIDITY; FDA WARNING [NEUROPSYCHIATRIC EVENTS: SUICIDALITY; MOOD CHANGES; NIGHTMARES; DISCONTINUE IF BEHAVIORAL CHANGE; BOX WARNING 2020]; ZAFIRLUKAST]; THEOPHYLLINE [NARROW THERAPEUTIC INDEX; DRUG INTERACTIONS; NAUSEA; RARELY USED NOW]; MACROLIDE ADD-ON [AZITHROMYCIN 250 mg 3x/WEEK; HERALD TRIAL + AZALEA TRIAL: REDUCES EXACERBATIONS IN UNCONTROLLED ASTHMA REGARDLESS OF T2 PHENOTYPE; NON-EOSINOPHILIC ASTHMA BENEFIT; ANTI-INFLAMMATORY + ANTIMICROBIAL MECHANISM; QTc MONITORING]; BRONCHIAL THERMOPLASTY [BT; OUTPATIENT PROCEDURE; RADIOFREQUENCY ABLATION OF AIRWAY SMOOTH MUSCLE; 3 BRONCHOSCOPY SESSIONS 3 WEEKS APART; AIR2 TRIAL: IMPROVES QOL + REDUCES SEVERE EXACERBATIONS IN REFRACTORY ASTHMA; FDA 2010; SELECTED SEVERE REFRACTORY NOT BIOLOGIC CANDIDATE; AEs: EXACERBATION POST-PROCEDURE; HEMOPTYSIS; PNEUMOTHORAX; LONG-TERM 5-YEAR BENEFIT MAINTAINED] | `text` |  |  |  |
| Asthma: GINA Classification, Stepwise Therapy, Severe Asthma Biologics, and Monitoring | Severe Asthma Biologics: Anti-IgE, Anti-IL-5, Anti-IL-4/13, Anti-TSLP | `asthma_bio` | Omalizumab EXTRA Anti-IgE 150-375mg Q2-4W, Mepolizumab DREAM/MENSA 100mg SQ Q4W EOS Above 300, Benralizumab SIROCCO 30mg Q8W, Dupilumab QUEST 300mg Q2W, Tezepelumab NAVIGATOR 210mg Q4W | `select` |  |  |  |
| Asthma: GINA Classification, Stepwise Therapy, Severe Asthma Biologics, and Monitoring | Severe Asthma Biologics: Anti-IgE, Anti-IL-5, Anti-IL-4/13, Anti-TSLP | `asthma_notes` | Asthma Management Notes and Pulmonology/Allergy-Immunology/ENT/Pharmacy/Respiratory Therapy/Nursing/Social Work Coordination | `textarea` |  |  |  |

### Asthma Biologics — `pulmonology_asthma_biologics_cf`

Screen: 1 page(s) · 2 section(s) · 9 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Asthma: Step Therapy and Severe/Eosinophilic Asthma Management | Severity, Control, and Phenotyping | `asthma_control` | Asthma Control Level (GINA 2023) | `select` |  |  |  |
| Asthma: Step Therapy and Severe/Eosinophilic Asthma Management | Severity, Control, and Phenotyping | `asthma_phenotype` | Asthma Phenotype for Biologic Selection | `select` |  |  |  |
| Asthma: Step Therapy and Severe/Eosinophilic Asthma Management | Severity, Control, and Phenotyping | `asthma_feno` | Biomarkers for Biologic Selection — FeNO (ppb): below 25 low type 2 inflammation; 25-50 intermediate; above 50 high (strong ICS response; dupilumab benefit); blood eosinophils: above 300: IL-5 biologics (mepolizumab, benralizumab) and dupilumab highly effective; 150-299: some benefit; below 150: tezepelumab or dupilumab; total IgE (IU/mL): omalizumab dosing by IgE + weight; elevated IgE with allergen sensitivity: omalizumab; skin prick testing or specific IgE for allergen sensitization; sputum eosinophils (research/specialist centers; more sensitive than blood eosinophils but invasive) | `text` |  |  |  |
| Asthma: Step Therapy and Severe/Eosinophilic Asthma Management | GINA Step Therapy and Biologics | `asthma_gina_steps` | GINA 2023 Step Therapy | `select` |  |  |  |
| Asthma: Step Therapy and Severe/Eosinophilic Asthma Management | GINA Step Therapy and Biologics | `asthma_biologics_il5` | IL-5 Pathway Biologics (Eosinophilic Asthma) | `select` |  |  |  |
| Asthma: Step Therapy and Severe/Eosinophilic Asthma Management | GINA Step Therapy and Biologics | `asthma_biologics_il4_13` | IL-4/IL-13 and IgE Biologics | `select` |  |  |  |
| Asthma: Step Therapy and Severe/Eosinophilic Asthma Management | GINA Step Therapy and Biologics | `asthma_tezepelumab` | Tezepelumab (Tezspire) — Type 2-Low and Broad Coverage | `select` |  |  |  |
| Asthma: Step Therapy and Severe/Eosinophilic Asthma Management | GINA Step Therapy and Biologics | `asthma_ocs_management` | Oral Corticosteroid Reduction and Adrenal Suppression | `select` |  |  |  |
| Asthma: Step Therapy and Severe/Eosinophilic Asthma Management | GINA Step Therapy and Biologics | `asthma_notes` | Asthma Management Notes and Pulmonology/Allergy-Immunology/ENT Coordination | `textarea` |  |  |  |

### Asthma Management — `asthma_management_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Asthma Management Visit | Patient & Asthma Classification | `patientId` | Patient | `typeahead` | Y |  |  |
| Asthma Management Visit | Patient & Asthma Classification | `visitDate` | Visit Date | `date` | Y |  |  |
| Asthma Management Visit | Patient & Asthma Classification | `provider` | Provider (PCP / Pulmonologist / Allergist) | `typeahead` | Y |  |  |
| Asthma Management Visit | Patient & Asthma Classification | `asthmaType` | Asthma Phenotype | `select` | Y |  |  |
| Asthma Management Visit | Patient & Asthma Classification | `severity` | Asthma Severity / GINA Step | `select` | Y |  |  |
| Asthma Management Visit | Asthma Control Assessment | `acqScore` | ACQ-6 (Asthma Control Questionnaire) | `number` |  |  |  |
| Asthma Management Visit | Asthma Control Assessment | `actScore` | ACT (Asthma Control Test, 25 max = fully controlled) | `number` |  |  |  |
| Asthma Management Visit | Asthma Control Assessment | `symptoms` | Symptom Assessment | `textarea` | Y |  |  |
| Asthma Management Visit | Asthma Control Assessment | `peakFlowStatus` | Spirometry / Peak Flow | `textarea` | Y |  |  |
| Asthma Management Visit | Treatment & Action Plan | `controllerMeds` | Controller Medications | `textarea` | Y |  |  |
| Asthma Management Visit | Treatment & Action Plan | `actionPlan` | Written Asthma Action Plan | `textarea` | Y |  |  |
| Asthma Management Visit | Treatment & Action Plan | `triggers` | Trigger Avoidance Plan | `textarea` | Y |  |  |

### Bronchiectasis — `pulmonology_bronchiectasis_cf`

Screen: 1 page(s) · 3 section(s) · 5 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Bronchiectasis: Diagnosis, Etiology Workup, Airway Clearance, and Long-Term Management | Bronchiectasis Diagnosis, Etiology Evaluation, and Severity Scoring | `be_class` | Bronchiectasis HRCT Morphology: Cylindrical Tubular Mild; Varicose Beaded Moderate; Cystic Saccular Severe; Signet Ring Sign Airway Diameter Exceeds Vessel; Tram Track Sign Airway Wall Thickening; Tree-in-Bud NTM or Active Infection; Distribution: Lower Lobe Both Idiopathic Post-Infectious; Upper Lobe CF PCD; Middle Lobe NTM MAC; Etiology Workup: Post-Infectious Most Common Pneumonia Pertussis TB; COPD Overlap; ABPA Aspergillus; NTM Non-Tuberculous Mycobacteria MAC Abscessus; Alpha-1 Antitrypsin; Immunodeficiency CVID Hypogammaglobulinemia IGIV; Primary Ciliary Dyskinesia PCD; Rheumatoid Arthritis Sjogren; GERD Aspiration; Yellow Nail; Marfan; BEIS Score; FACED Score; E-FACED; BSI Bronchiectasis Severity Index | `select` |  |  |  |
| Bronchiectasis: Diagnosis, Etiology Workup, Airway Clearance, and Long-Term Management | Bronchiectasis Diagnosis, Etiology Evaluation, and Severity Scoring | `be_features` | Bronchiectasis Clinical Features and Monitoring: Chronic Productive Cough Purulent Sputum; Daily Sputum Volume; Dyspnea MRC Scale; Hemoptysis Mild to Massive; Fatigue; Weight Loss; Recurrent Lower Respiratory Infections; Colonization H. influenzae P. aeruginosa S. aureus; Spirometry FEV1 FVC Obstructive Pattern; PFTs TLC RV Air Trapping; 24-Hour Sputum Volume; Sputum Culture Q3-6M; HRCT Q5Y Stable Q2Y Progressive; 6MWT; Pulse Oximetry Rest Exertion; CXR Annual; CBC CMP; Exacerbation Definition: Increase Cough Sputum Purulence Dyspnea; Systemic Inflammation; Require Antibiotic Treatment -- MONITORING AND EXACERBATIONS: CLINICAL MONITORING: SPUTUM MICROBIOLOGY [Q3-6 MONTHS STABLE; EACH EXACERBATION; INCLUDES NTM CULTURE 3 SPECIMENS/YEAR; P. AERUGINOSA CULTURES CRITICAL; CHRONIC COLONIZATION vs ACUTE INFECTION DISTINGUISH]; SPIROMETRY [ANNUALLY; FEV1 DECLINE RATE; OBSTRUCTIVE OR MIXED PATTERN; REVERSIBILITY]; 6-MINUTE WALK TEST [DISTANCE; DESATURATION]; CBC [LEUKOCYTOSIS NEUTROPHILIA INFLAMMATION; EOSINOPHILIA ABPA]; CRP ESR [ACTIVITY MARKERS]; HRCT [Q5Y STABLE DISEASE; Q2Y PROGRESSIVE OR YOUNG; MORPHOLOGICAL CHANGE; NEW AREAS]; EXACERBATION DEFINITION [BTS GUIDELINE]: DETERIORATION IN 3 OR MORE SYMPTOMS: COUGH; SPUTUM VOLUME/CONSISTENCY; SPUTUM PURULENCE; BREATHLESSNESS/EXERCISE TOLERANCE; FATIGUE/MALAISE; HEMOPTYSIS; ACCOMPANIED SYSTEMIC INFLAMMATION (CRP ELEVATION); TREATMENT REQUIRES ANTIBIOTICS; EXACERBATION MANAGEMENT: MILD-MODERATE [OUTPATIENT ORAL ANTIBIOTICS]: H. INFLUENZAE [AMOXICILLIN-CLAVULANATE 875 mg BID 14D; DOXYCYCLINE 100 mg BID]; P. AERUGINOSA [CIPROFLOXACIN 750 mg BID 14D; SENSITIVITY-GUIDED; RESISTANCE COMMON]; SPUTUM CULTURE-DIRECTED; SEVERE [INTRAVENOUS]: P. AERUGINOSA [PIPERACILLIN-TAZOBACTAM; CEFEPIME; TOBRAMYCIN; COLISTIN; COMBINATION; MDR PSEUDOMONAS CHALLENGING]; DURATION [ABOVE 14 DAYS; SOME GUIDE 21 DAYS]; HEMOPTYSIS [MILD: INCREASED ANTIBIOTICS; MASSIVE ABOVE 250mL: INTERVENTIONAL RADIOLOGY BRONCHIAL ARTERY EMBOLIZATION BAE] | `text` |  |  |  |
| Bronchiectasis: Diagnosis, Etiology Workup, Airway Clearance, and Long-Term Management | Bronchiectasis Treatment: Airway Clearance, Inhaled Antibiotics, and Long-Term Suppression | `be_treatment` | Airway Clearance Therapy: Chest Physiotherapy CPT Active Cycle of Breathing ACBT; Oscillating PEP Acapella Flutter; High-Frequency Chest Wall Oscillation HFCWO Vest; Autogenic Drainage Self-Drainage; Hypertonic Saline 7% 4-6mL Q12H Pre-Clearance; Isotonic 0.9% Less Effective; DNase Pulmozyme ONLY CF Not Non-CF May Worsen; Inhaled Mucolytics Bromhexine; Bronchodilators SABA SAMA LABA LAMA; Inhaled Antibiotics Chronic P. aeruginosa: Tobramycin 300mg Q12H ORBIT 28-On 28-Off; Colistimethate Inhaled Bethkis Bramitob; Aztreonam Lysine; Ciprofloxacin Dry Powder DPI; Long-Term Macrolide Azithromycin 250mg 3x/Week or 500mg QD BAT; Reduce Exacerbations 50%; NTM MAC Treatment ATS 2020: Azithromycin+Ethambutol+Rifampin; 12M Culture-Negative; Surgery Resection Localized Failed Medical | `select` |  |  |  |
| Bronchiectasis: Diagnosis, Etiology Workup, Airway Clearance, and Long-Term Management | Bronchiectasis Treatment: Airway Clearance, Inhaled Antibiotics, and Long-Term Suppression | `be_notes_detail` | Bronchiectasis Management Plan and Notes: HRCT Morphology Distribution, FEV1 Trend, Chronic Colonizing Organisms, Inhaled Antibiotic Regimen, Airway Clearance Technique, Long-Term Macrolide, NTM Treatment Status, Exacerbation Frequency, Annual Sputum Cultures, Supplemental Oxygen, Pulmonary Rehab Status, Coordination Notes | `textarea` |  |  |  |
| Bronchiectasis: Diagnosis, Etiology Workup, Airway Clearance, and Long-Term Management | Bronchiectasis Management Notes | `be_mgmt_notes` | Bronchiectasis Management Notes and Pulmonology/Infectious Disease NTM/Respiratory Therapy Airway Clearance/Immunology CVID/Genetics CF PCD/Radiology HRCT/Microbiology Culture/Pharmacy Inhaled Antibiotics/Dietitian Nutrition/PT Pulmonary Rehab/Nursing/Surgery Resection/Social Work Coordination | `textarea` |  |  |  |

### Bronchoscopy F/U — `bronchoscopy_followup_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Bronchoscopy Follow-up | Procedure Summary | `procedure_date` | Bronchoscopy Date | `date` |  |  |  |
| Bronchoscopy Follow-up | Procedure Summary | `indication` | Indication | `select` |  |  |  |
| Bronchoscopy Follow-up | Procedure Summary | `technique` | Technique | `select` |  |  |  |
| Bronchoscopy Follow-up | Procedure Summary | `biopsy_taken` | Biopsy / samples obtained | `checkbox` |  |  |  |
| Bronchoscopy Follow-up | Procedure Summary | `biopsy_result` | Biopsy Result (preliminary or final) | `text` |  |  |  |
| Bronchoscopy Follow-up | Post-Procedure Assessment | `days_post_procedure` | Days Post-Procedure | `number` |  |  |  |
| Bronchoscopy Follow-up | Post-Procedure Assessment | `pneumothorax` | Pneumothorax (check CXR if biopsy done) | `checkbox` |  |  |  |
| Bronchoscopy Follow-up | Post-Procedure Assessment | `bleeding` | Bleeding | `select` |  |  |  |
| Bronchoscopy Follow-up | Post-Procedure Assessment | `fever` | Post-procedure fever | `checkbox` |  |  |  |
| Bronchoscopy Follow-up | Follow-up Plan | `ct_chest_ordered` | CT chest ordered for follow-up | `checkbox` |  |  |  |
| Bronchoscopy Follow-up | Follow-up Plan | `repeat_bronch_planned` | Repeat bronchoscopy planned | `checkbox` |  |  |  |
| Bronchoscopy Follow-up | Follow-up Plan | `notes` | Assessment and Plan | `textarea` |  |  |  |

### COPD — `pulmonology_copd_cf`

Screen: 1 page(s) · 1 section(s) · 2 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| COPD — GOLD Classification and Management | GOLD Classification and Pharmacotherapy | `copd_f1` | COPD Diagnosis (GOLD 2024): POST-BRONCHODILATOR FEV1/FVC Under 0.70 Required; SPIROMETRY GRADES: GOLD 1 FEV1 Over 80%; GOLD 2 50-80%; GOLD 3 30-50%; GOLD 4 Under 30%; ABE GROUPS (Symptoms + Exacerbations): GROUP A Low Risk Few Symptoms mMRC 0-1 CAT Under 10; GROUP B Low Risk More Symptoms mMRC 2+ CAT 10+; GROUP E High Risk (2+ Moderate or 1+ Hospitalization); SYMPTOMS: mMRC Dyspnea Scale; CAT COPD Assessment Test; DIAGNOSIS PEARLS: Smoker Over 40; Progressive Dyspnea; Chronic Cough; OVERLAP ASTHMA-COPD (ACO): Reversibility; Eosinophilia; Atopy; WORK-UP: CXR Hyperinflation; CT Emphysema Bronchiectasis; ABG Severe; Echo Cor Pulmonale; ALPHA-1 ANTITRYPSIN Screen All COPD; Lab AAT Level | `text` |  |  |  |
| COPD — GOLD Classification and Management | GOLD Classification and Pharmacotherapy | `copd_f2` | COPD Pharmacotherapy | `select` |  |  |  |

### COPD — `pulmonology_copd_management_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| COPD: GOLD Staging, Bronchodilators, Inhaled Therapy, Exacerbation Management, and Interventional Options | COPD Diagnosis, GOLD Staging, and Pharmacotherapy by Grade | `copd_class` | GOLD 2023 Spirometry: Post-BD FEV1/FVC Below 0.70; GOLD 1-4 FEV1; ABDE Groups: A Mild Low-Risk, B Dyspnea, D High-Exacerbation+Dyspnea, E High-Exacerbation; mMRC CAT Symptom Scores; Emphysema Chronic Bronchitis | `select` |  |  |  |
| COPD: GOLD Staging, Bronchodilators, Inhaled Therapy, Exacerbation Management, and Interventional Options | COPD Diagnosis, GOLD Staging, and Pharmacotherapy by Grade | `copd_pharma` | COPD Pharmacotherapy Escalation: SABA/SAMA Rescue; LAMA Tiotropium UPLIFT OS; LABA+LAMA Umeclidinium+Vilanterol IMPACT; LABA+ICS Salmeterol/Fluticasone; Triple Budesonide/Glycopyrrolate/Formoterol ETHOS; Roflumilast PDE4; Azithromycin Macrolide -- COPD PHARMACOTHERAPY [GOLD 2023; STEPWISE]: SHORT-ACTING BRONCHODILATORS [RESCUE]: SABA [SHORT-ACTING BETA-2 AGONIST; SALBUTAMOL/ALBUTEROL 2.5 mg NEB OR 90 mcg MDI PRN Q4-6H; IPRATROPIUM/ALBUTEROL COMBIVENT DUO FOR BREAKTHROUGH; FASTEST ONSET 15 MIN; DURATION 4-6H]; SAMA [SHORT-ACTING MUSCARINIC ANTAGONIST; IPRATROPIUM 0.5 mg NEB OR 17 mcg MDI PRN; DURATION 6-8H]; LONG-ACTING MUSCARINIC ANTAGONISTS [LAMA; FIRST-LINE MAINTENANCE]: TIOTROPIUM [SPIRIVA; 18 mcg HANDIHALER QD; UPLIFT TRIAL NEJM 2008: TIOTROPIUM vs PLACEBO 4 YEARS: FEV1 DECLINE SLOWED; EXACERBATIONS REDUCED 16%; HOSPITALIZATIONS REDUCED; MORTALITY TREND IMPROVEMENT; NS OS BENEFIT; STANDARD LAMA; ALSO RESPIMAT 2.5 mcg x2 PUFFS QD [LESS CV RISK THAN 5 mcg RESPIMAT]]; UMECLIDINIUM [INCRUSE; 62.5 mcg QD]; ACLIDINIUM [TUDORZA; 400 mcg BID; TWICE DAILY]; GLYCOPYRROLATE [BEVESPI+FORMOTEROL; LONHALA MAGNAIR NEVO]; LONG-ACTING BETA-2 AGONISTS [LABA]: FORMOTEROL [FORADIL; 12 mcg BID; ONSET 3 MIN; DURATION 12H]; SALMETEROL [SEREVENT; 50 mcg BID; DURATION 12H]; OLODATEROL [STRIVERDI; 5 mcg QD; DURATION 24H]; INDACATEROL [ARCAPTA; 75 mcg QD; ONCE DAILY]; COMBINATION INHALERS [STEPWISE]: LABA+LAMA [SUPERIOR TO MONO FOR FEV1 + EXACERBATION REDUCTION; PREFERRED GROUP B/E]: UMECLIDINIUM+VILANTEROL [ANORO ELLIPTA; 62.5/25 mcg QD]; TIOTROPIUM+OLODATEROL [STIOLTO; 5/5 mcg QD]; GLYCOPYRROLATE+FORMOTEROL [BEVESPI AEROSPHERE]; LABA+ICS [PREFERRED IF EOSINOPHILS ABOVE 300 OR ASTHMA OVERLAP]: SALMETEROL+FLUTICASONE [ADVAIR; 50/500 mcg BID]; FORMOTEROL+BUDESONIDE [SYMBICORT; 4.5/160 OR 4.5/320 mcg BID]; TRIPLE THERAPY [LABA+LAMA+ICS; GOLD E WITH EOSINOPHILS ABOVE 300; STEP UP FROM DUAL]: BUDESONIDE+GLYCOPYRROLATE+FORMOTEROL [BREZTRI AEROSPHERE; ETHOS TRIAL NEJM 2020: TRIPLE vs LABA+LAMA: MODERATE/SEVERE EXACERBATION RATE REDUCTION 23.5%; EOSINOPHIL ABOVE 150 BENEFIT]; FLUTICASONE FUROATE+UMECLIDINIUM+VILANTEROL [TRELEGY ELLIPTA; IMPACT TRIAL LANCET 2018: TRIPLE vs LABA+LAMA: EXACERBATIONS REDUCED 25% [EOSINOPHIL-DEPENDENT]; PNEUMONIA RISK ICS [NNH 20 PER YEAR]]; ICS SIDE EFFECTS [COPD]: PNEUMONIA [ESPECIALLY FLUTICASONE PROPIONATE]; THRUSH; OSTEOPOROSIS; DYSPHONIA; RINSE MOUTH AFTER; ICS WITHDRAWAL [IF EOSINOPHILS BELOW 100: CONSIDER ICS WITHDRAWAL WITHOUT INCREASING EXACERBATIONS; FLAME TRIAL]; ROFLUMILAST [DALIRESP; ORAL PDE4 INHIBITOR; INDICATION [FEV1 BELOW 50% + CHRONIC BRONCHITIS + HIGH EXACERBATOR]; REACT TRIAL: EXACERBATION REDUCTION ON TOP OF LABA+LAMA; 500 mcg QD; SIDE EFFECTS [NAUSEA; DIARRHEA; WEIGHT LOSS; PSYCHIATRIC: SUICIDAL IDEATION [RARE]]; AZITHROMYCIN [MACROLIDE; ALBERT TRIAL NEJM 2011: AZITHROMYCIN 250 mg QD vs PLACEBO 1 YEAR: EXACERBATIONS 1.48 vs 1.83 [HR 0.73]; EX-SMOKERS + MODERATE RISK; HEARING EVALUATION BEFORE; QTc MONITORING; NTM CONCERN; LOW-DOSE ONCE DAILY OR 3x/WEEK] | `text` |  |  |  |
| COPD: GOLD Staging, Bronchodilators, Inhaled Therapy, Exacerbation Management, and Interventional Options | Acute COPD Exacerbations, Oxygen Therapy, and Surgical Options | `copd_ae` | AECOPD: Antibiotics if Purulent Sputum or CRP; Prednisone 40mg x5 Days REDUCE; NPPV BiPAP; Controlled O2 SpO2 88-92%; LVRS NETT Upper Lobe Emphysema; Endobronchial Valve LIBERATE; Lung Transplant FEV1 Below 20%; Pulmonary Rehabilitation | `select` |  |  |  |
| COPD: GOLD Staging, Bronchodilators, Inhaled Therapy, Exacerbation Management, and Interventional Options | Acute COPD Exacerbations, Oxygen Therapy, and Surgical Options | `copd_notes` | COPD Management Notes and Pulmonology/Thoracic Surgery/Respiratory Therapy/Cardiac Rehab/Pharmacy/Physical Therapy/Palliative Care/Social Work Coordination | `textarea` |  |  |  |

### COPD Exacerbation Prevention — `pulmonology_copd_exacerbation_prevention_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| COPD Exacerbation Prevention and Management | Exacerbation Risk Assessment | `copd_ex_history` | Exacerbation History (Prior Year) | `select` |  |  |  |
| COPD Exacerbation Prevention and Management | Exacerbation Risk Assessment | `copd_exacerbation_frequency` | Number of Exacerbations in Past 12 Months (moderate: needs antibiotic and/or steroid; severe: requires hospitalization) | `text` |  |  |  |
| COPD Exacerbation Prevention and Management | Exacerbation Risk Assessment | `copd_cat_score` | CAT Score (COPD Assessment Test, 0-40) — below 10: low symptom burden; 10-20: moderate; above 20: high; guides intensification | `text` |  |  |  |
| COPD Exacerbation Prevention and Management | Exacerbation Risk Assessment | `copd_blood_eosinophils` | Blood Eosinophils (cells/mcL) — above 300 cells/mcL: ICS most beneficial; 100-300: ICS added value; below 100: ICS less helpful, pneumonia risk may outweigh benefit | `text` |  |  |  |
| COPD Exacerbation Prevention and Management | Exacerbation Risk Assessment | `copd_fev1` | FEV1 % Predicted (post-bronchodilator) and GOLD Stage — I: above 80%; II: 50-79%; III: 30-49%; IV: below 30% | `text` |  |  |  |
| COPD Exacerbation Prevention and Management | Inhaler and Pharmacologic Optimization | `copd_current_inhaler` | Current Inhaler Regimen | `select` |  |  |  |
| COPD Exacerbation Prevention and Management | Inhaler and Pharmacologic Optimization | `copd_ics_justification` | ICS Justification (if prescribed) | `select` |  |  |  |
| COPD Exacerbation Prevention and Management | Inhaler and Pharmacologic Optimization | `copd_roflumilast` | Roflumilast (Daliresp) / Ensifentrine (Ohtuvayre) | `select` |  |  |  |
| COPD Exacerbation Prevention and Management | Inhaler and Pharmacologic Optimization | `copd_azithromycin` | Azithromycin Prophylaxis for Exacerbation Prevention | `select` |  |  |  |
| COPD Exacerbation Prevention and Management | Non-Pharmacologic Prevention | `copd_smoking` | Smoking Cessation Status | `select` |  |  |  |
| COPD Exacerbation Prevention and Management | Non-Pharmacologic Prevention | `copd_vaccinations` | Vaccination Status | `select` |  |  |  |
| COPD Exacerbation Prevention and Management | Non-Pharmacologic Prevention | `copd_rehab` | Pulmonary Rehabilitation | `select` |  |  |  |
| COPD Exacerbation Prevention and Management | Non-Pharmacologic Prevention | `copd_exacerbation_action_plan` | Written Exacerbation Action Plan | `select` |  |  |  |
| COPD Exacerbation Prevention and Management | Non-Pharmacologic Prevention | `copd_o2_suitability` | Home Oxygen Therapy Assessment | `select` |  |  |  |
| COPD Exacerbation Prevention and Management | Non-Pharmacologic Prevention | `copd_ex_notes` | COPD Exacerbation Prevention Notes and Care Coordination | `textarea` |  |  |  |

### COPD and Exacerbation — `pulmonology_copd_exacerbation_cf`

Screen: 1 page(s) · 2 section(s) · 4 field(s) · UI LIVE · DB UNBOUND

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| COPD — GOLD Staging, AECOPD, NIV, Triple Therapy | Stable COPD Assessment and Management | `gold_staging` | GOLD Spirometric Grades, ABE Symptom Groups, and Maintenance Inhaler Selection (COPD GOLD STAGING 2024: SPIROMETRY POST-BRONCHODILATOR: GOLD 1: FEV1 >=80% predicted (mild); GOLD 2: FEV1 50-79% (moderate); GOLD 3: FEV1 30-49% (severe); GOLD 4: FEV1 <30% (very severe); DIAGNOSIS: FEV1/FVC <0.70 post-bronchodilator + symptoms + exposure; ABE ASSESSMENT GROUPS (GOLD 2023 REVISED): GROUP A: low symptoms + low risk; CAT <10; mMRC 0-1; 0-1 exacerbations (no hospitalization); GROUP B: high symptoms; CAT >=10 or mMRC >=2; 0-1 exacerbations; GROUP E: HIGH EXACERBATION RISK (formerly C+D); >=2 exacerbations or >=1 hospitalization; TREATMENT BY GROUP: GROUP A: SABA or SAMA PRN (bronchodilator PRN); LAMA or LABA if persistent symptoms; GROUP B: LAMA + LABA (DUAL BRONCHODILATOR) as initial maintenance; GROUP E: LAMA + LABA + ICS (TRIPLE THERAPY) if blood eosinophils >=300; LAMA + LABA if eosinophils <300; ADD ROFLUMILAST: chronic bronchitis phenotype + FEV1 <50% + >=1 exacerbation/year; INHALER CLASSES: LAMA (LONG-ACTING MUSCARINIC ANTAGONIST): tiotropium (Spiriva; 18 mcg QD); umeclidinium (Incruse; 62.5 mcg QD); aclidinium; glycopyrronium; glycopyrrolate; LABA (LONG-ACTING BETA-2 AGONIST): formoterol; salmeterol; indacaterol; vilanterol; olodaterol; ICS (INHALED CORTICOSTEROID): fluticasone; budesonide; beclomethasone; COMBINATION DEVICES: LAMA+LABA: UMECLIDINIUM/VILANTEROL (Anoro); TIOTROPIUM/OLODATEROL (Stiolto); GLYCOPYRROLATE/FORMOTEROL (Bevespi); TRIPLE THERAPY: FLUTICASONE FUROATE/UMECLIDINIUM/VILANTEROL (Trelegy Ellipta); BUDESONIDE/GLYCOPYRROLATE/FORMOTEROL (Breztri Aerosphere); EVIDENCE FOR TRIPLE: TRILOGY/TRINITY/IMPACT: reduction in exacerbations; mortality benefit in high eosinophil subgroups (IMPACT); BLOOD EOSINOPHILS GUIDE ICS: >=300: benefit likely; 100-300: possible benefit; <100: no benefit; SABA RESCUE: short-acting beta-agonist (albuterol, levalbuterol) for acute symptom relief | `text` |  |  |  |
| COPD — GOLD Staging, AECOPD, NIV, Triple Therapy | Stable COPD Assessment and Management | `roflumilast` | Roflumilast Mechanism, ADD-ON Role, and COPD Phenotyping | `select` |  |  |  |
| COPD — GOLD Staging, AECOPD, NIV, Triple Therapy | Acute COPD Exacerbation Management | `aecopd_tx` | AECOPD Severity Classification, SABA/SAMA Nebulization, and Systemic Steroids (ACUTE EXACERBATION OF COPD (AECOPD): DEFINITION: acute worsening of respiratory symptoms beyond day-to-day variation; TRIGGERING EVENT: viral (rhinovirus, influenza, RSV — >50%); bacterial (H. influenzae, S. pneumoniae, M. catarrhalis, P. aeruginosa-severe); air pollution; SEVERITY CLASSIFICATION: MILD: outpatient management; increased rescue inhaler use only; MODERATE: SABA + oral antibiotics + corticosteroids; SEVERE: ED visit or hospitalization; VERY SEVERE: respiratory failure; INHALED BRONCHODILATORS: SHORT-ACTING BETA-2 AGONIST (SABA): albuterol MDI + spacer or NEBULIZATION 2.5 mg Q4h; SHORT-ACTING ANTICHOLINERGIC (SAMA): IPRATROPIUM BROMIDE 0.5 mg nebulized Q4-6h; COMBINED SABA + SAMA NEBULIZATION (DUONEB): efficient; SYSTEMIC CORTICOSTEROIDS: PREDNISONE 40 mg PO for 5 DAYS (GOLD 2024); SHORTER COURSE (5 days) as effective as 14 days (REDUCE trial); METHYLPREDNISOLONE 40-80 mg IV for hospitalized; REDUCE GI RISK: take with food; ANTIBIOTICS: INDICATION: increase in sputum purulence + sputum volume + dyspnea (any 2 of 3 Anthonisen criteria); ALL SEVERE AECOPD (hospitalized); CHOICE: AMOXICILLIN-CLAVULANATE; AZITHROMYCIN; DOXYCYCLINE; RESPIRATORY FLUOROQUINOLONE (levofloxacin, moxifloxacin) if P. aeruginosa risk or treatment failure; SPUTUM CULTURE: if hospitalized, severe, recent antibiotics; OXYGEN THERAPY: target SpO2 88-92% (COPD + hypercapnia risk); HIGH FLOW O2 can suppress hypoxic drive + cause hypercapnia; VENTURI MASK: precise FiO2; CONTROLLED O2: titrate; CLINICAL DETERIORATION: WORSENING HYPERCAPNIA or ACIDOSIS = NIV indication; AECOPD DISCHARGE CRITERIA: clinically improved; on regular maintenance therapy; off IV medications >=24h; patient understands medication changes; PREVENTION: pneumococcal + influenza vaccination; smoking cessation; GOLD-guided maintenance therapy | `text` |  |  |  |
| COPD — GOLD Staging, AECOPD, NIV, Triple Therapy | Acute COPD Exacerbation Management | `niv_copd` | NIPPV/BiPAP Protocol for Hypercapnic Respiratory Failure and ICU Criteria | `select` |  |  |  |
