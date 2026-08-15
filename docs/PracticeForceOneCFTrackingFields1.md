---
title: "PracticeForceOneCFTrackingFields1"
---

# CF Tracking — Field-Level Detail (part 1 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Clinical**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Clinical

### AI Assist — `ai_assist_cf`

Screen: 3 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| AI Clinical Tools (ECW-AI-1) | AI Entry Points in Workflow (ECW-AI-1) | `chartSummaryAi` | Chart Summary AI Status | `select` |  |  |  |
| AI Clinical Tools (ECW-AI-1) | AI Entry Points in Workflow (ECW-AI-1) | `chartSummaryText` | AI Chart Summary | `textarea` |  |  |  |
| AI Clinical Tools (ECW-AI-1) | AI Entry Points in Workflow (ECW-AI-1) | `soapDraftStatus` | AI SOAP Note Draft | `select` |  |  |  |
| AI Clinical Tools (ECW-AI-1) | AI Entry Points in Workflow (ECW-AI-1) | `soapDraftText` | AI SOAP Draft | `textarea` |  |  |  |
| HCC / Suspected Conditions Worklist (ECW-AI-2) | Hierarchical Condition Categories (HCC) Review | `hccRafScore` | Current RAF Score | `number` |  |  |  |
| HCC / Suspected Conditions Worklist (ECW-AI-2) | Hierarchical Condition Categories (HCC) Review | `hccSuspectedConditions` | Suspected / Unrecaptured Conditions | `textarea` |  |  |  |
| HCC / Suspected Conditions Worklist (ECW-AI-2) | Hierarchical Condition Categories (HCC) Review | `hccActionItems` | HCC Action Items | `textarea` |  |  |  |
| HCC / Suspected Conditions Worklist (ECW-AI-2) | Hierarchical Condition Categories (HCC) Review | `hccReviewedBy` | HCC Review Completed By | `text` |  |  |  |
| HCC / Suspected Conditions Worklist (ECW-AI-2) | Hierarchical Condition Categories (HCC) Review | `hccReviewDate` | HCC Review Date | `date` |  |  |  |
| Practice-Pattern Order Suggestions (ECW-AI-3) | Preventive Alert Compliance & Order Suggestions (ECW-AI-3) | `mammogramDue` | Mammogram Due | `checkbox` |  |  |  |
| Practice-Pattern Order Suggestions (ECW-AI-3) | Preventive Alert Compliance & Order Suggestions (ECW-AI-3) | `colonoscopyDue` | Colonoscopy / FOBT Due | `checkbox` |  |  |  |
| Practice-Pattern Order Suggestions (ECW-AI-3) | Preventive Alert Compliance & Order Suggestions (ECW-AI-3) | `fluVaccineDue` | Flu Vaccine Due | `checkbox` |  |  |  |
| Practice-Pattern Order Suggestions (ECW-AI-3) | Preventive Alert Compliance & Order Suggestions (ECW-AI-3) | `pneumovaxDue` | Pneumovax Due | `checkbox` |  |  |  |
| Practice-Pattern Order Suggestions (ECW-AI-3) | Preventive Alert Compliance & Order Suggestions (ECW-AI-3) | `a1cDue` | HbA1c Monitoring Due | `checkbox` |  |  |  |
| Practice-Pattern Order Suggestions (ECW-AI-3) | Preventive Alert Compliance & Order Suggestions (ECW-AI-3) | `lipidPanelDue` | Lipid Panel Due | `checkbox` |  |  |  |
| Practice-Pattern Order Suggestions (ECW-AI-3) | Preventive Alert Compliance & Order Suggestions (ECW-AI-3) | `suggestedOrders` | AI-Suggested Orders | `textarea` |  |  |  |
| Practice-Pattern Order Suggestions (ECW-AI-3) | Preventive Alert Compliance & Order Suggestions (ECW-AI-3) | `ndcMappingOverride` | NDC Mapping Override Notes | `textarea` |  |  |  |

### ALS Clinic — `als_clinic_cf`

Screen: 2 page(s) · 13 section(s) · 133 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Evaluation | `evalDate` | Eval Date | `date` |  |  |  |
| Evaluation | Evaluation | `providerName` | Provider | `text` |  |  |  |
| Evaluation | Evaluation | `evalType` | Eval Type | `select` |  |  |  |
| Evaluation | Evaluation | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| Evaluation | Evaluation | `diagnosisDate` | Diagnosis Date | `date` |  |  |  |
| Evaluation | Evaluation | `symptomOnsetDate` | Symptom Onset Date | `date` |  |  |  |
| Evaluation | Evaluation | `symptomOnsetRegion` | Onset Region | `select` |  |  |  |
| Evaluation | Evaluation | `diseaseDurationMonths` | Disease Duration (months) | `number` |  |  |  |
| Evaluation | Evaluation | `elEscorialCriteria` | El Escorial Criteria | `select` |  |  |  |
| Evaluation | Evaluation | `awajiCriteria` | Awaji Criteria Met | `checkbox` |  |  |  |
| Evaluation | Evaluation | `alsVariant` | ALS Variant | `select` |  |  |  |
| Evaluation | Evaluation | `geneticTestingDone` | Genetic Testing Done | `checkbox` |  |  |  |
| Evaluation | Evaluation | `geneMutation` | Gene Mutation | `text` |  |  |  |
| Evaluation | ALSFRS-R | `alsfrsRTotal` | ALSFRS-R Total (0–48) | `number` |  |  |  |
| Evaluation | ALSFRS-R | `alsfrsRDate` | ALSFRS-R Date | `date` |  |  |  |
| Evaluation | ALSFRS-R | `alsfrsRPriorTotal` | Prior ALSFRS-R Total | `number` |  |  |  |
| Evaluation | ALSFRS-R | `alsfrsRPriorDate` | Prior Date | `date` |  |  |  |
| Evaluation | ALSFRS-R | `alfrspeech` | Speech (0–4) | `number` |  |  |  |
| Evaluation | ALSFRS-R | `alfrssalivation` | Salivation (0–4) | `number` |  |  |  |
| Evaluation | ALSFRS-R | `alsfrsSwallowing` | Swallowing (0–4) | `number` |  |  |  |
| Evaluation | ALSFRS-R | `alsfrsHandwriting` | Handwriting (0–4) | `number` |  |  |  |
| Evaluation | ALSFRS-R | `alfrssCuttingFood` | Cutting Food (0–4) | `number` |  |  |  |
| Evaluation | ALSFRS-R | `alfrrsDressing` | Dressing/Hygiene (0–4) | `number` |  |  |  |
| Evaluation | ALSFRS-R | `alfrsTurningInBed` | Turning in Bed (0–4) | `number` |  |  |  |
| Evaluation | ALSFRS-R | `alsfrsWalking` | Walking (0–4) | `number` |  |  |  |
| Evaluation | ALSFRS-R | `alfrsClimbing` | Climbing Stairs (0–4) | `number` |  |  |  |
| Evaluation | ALSFRS-R | `alfrssDyspnea` | Dyspnea (0–4) | `number` |  |  |  |
| Evaluation | ALSFRS-R | `alsfrsOrthopnea` | Orthopnea (0–4) | `number` |  |  |  |
| Evaluation | ALSFRS-R | `alsfrsRespiratoryInsufficiency` | Resp Insufficiency (0–4) | `number` |  |  |  |
| Evaluation | Clinical Features | `bulbarOnset` | Bulbar Onset | `checkbox` |  |  |  |
| Evaluation | Clinical Features | `bulbarProgression` | Bulbar Progression | `checkbox` |  |  |  |
| Evaluation | Clinical Features | `dysarthria` | Dysarthria | `checkbox` |  |  |  |
| Evaluation | Clinical Features | `dysphagia` | Dysphagia | `checkbox` |  |  |  |
| Evaluation | Clinical Features | `sialorrhea` | Sialorrhea | `checkbox` |  |  |  |
| Evaluation | Clinical Features | `pseudobulbarAffect` | Pseudobulbar Affect | `checkbox` |  |  |  |
| Evaluation | Clinical Features | `limbWeakness` | Limb Weakness | `checkbox` |  |  |  |
| Evaluation | Clinical Features | `limbOnsetSite` | Limb Onset Site | `text` |  |  |  |
| Evaluation | Clinical Features | `fasciculations` | Fasciculations | `checkbox` |  |  |  |
| Evaluation | Clinical Features | `muscleWasting` | Muscle Wasting | `checkbox` |  |  |  |
| Evaluation | Clinical Features | `hyperreflexia` | Hyperreflexia | `checkbox` |  |  |  |
| Evaluation | Clinical Features | `spasticity` | Spasticity | `checkbox` |  |  |  |
| Evaluation | Clinical Features | `respiratoryWeakness` | Respiratory Weakness | `checkbox` |  |  |  |
| Evaluation | Respiratory | `fvcSittingPct` | FVC Sitting %pred | `number` |  |  |  |
| Evaluation | Respiratory | `fvcSittingDate` | FVC Date | `date` |  |  |  |
| Evaluation | Respiratory | `fvcSupinePct` | FVC Supine %pred | `number` |  |  |  |
| Evaluation | Respiratory | `mipCmh2o` | MIP (cmH2O) | `number` |  |  |  |
| Evaluation | Respiratory | `mepCmh2o` | MEP (cmH2O) | `number` |  |  |  |
| Evaluation | Respiratory | `dyspneaOnExertion` | Dyspnea on Exertion | `checkbox` |  |  |  |
| Evaluation | Respiratory | `orthopnea` | Orthopnea | `checkbox` |  |  |  |
| Evaluation | Respiratory | `morningHeadache` | Morning Headache | `checkbox` |  |  |  |
| Evaluation | Respiratory | `desaturationNocturnal` | Nocturnal Desaturation | `checkbox` |  |  |  |
| Evaluation | Respiratory | `sleepStudyDone` | Sleep Study Done | `checkbox` |  |  |  |
| Evaluation | Respiratory | `ahi` | AHI | `number` |  |  |  |
| Evaluation | Respiratory | `nivInitiated` | NIV Initiated | `checkbox` |  |  |  |
| Evaluation | Respiratory | `nivDevice` | NIV Device | `text` |  |  |  |
| Evaluation | Respiratory | `nivSettings` | NIV Settings | `text` |  |  |  |
| Evaluation | Respiratory | `coughAssistDevice` | Cough Assist Device | `checkbox` |  |  |  |
| Evaluation | Respiratory | `tracheostomyDiscussion` | Tracheostomy Discussed | `checkbox` |  |  |  |
| Evaluation | Respiratory | `tracheostomyDone` | Tracheostomy Done | `checkbox` |  |  |  |
| Evaluation | Nutrition | `weightKg` | Weight (kg) | `number` |  |  |  |
| Evaluation | Nutrition | `bmi` | BMI | `number` |  |  |  |
| Evaluation | Nutrition | `weightLossPctSinceDiagnosis` | Weight Loss % since Dx | `number` |  |  |  |
| Evaluation | Nutrition | `oralIntakeAdequate` | Oral Intake Adequate | `checkbox` |  |  |  |
| Evaluation | Nutrition | `dysphagiaLevel` | Dysphagia Level | `text` |  |  |  |
| Evaluation | Nutrition | `modifiedDiet` | Modified Diet | `checkbox` |  |  |  |
| Evaluation | Nutrition | `dietModification` | Diet Modification | `text` |  |  |  |
| Evaluation | Nutrition | `tubeFeeding` | Tube Feeding | `checkbox` |  |  |  |
| Evaluation | Nutrition | `tubeType` | Tube Type | `text` |  |  |  |
| Evaluation | Nutrition | `pegDiscussion` | PEG Discussed | `checkbox` |  |  |  |
| Evaluation | Nutrition | `pegDone` | PEG Placed | `checkbox` |  |  |  |
| Evaluation | Communication & Mobility | `speechIntelligibility` | Speech Intelligibility | `text` |  |  |  |
| Evaluation | Communication & Mobility | `aacDevice` | AAC Device | `checkbox` |  |  |  |
| Evaluation | Communication & Mobility | `aacDeviceType` | AAC Device Type | `text` |  |  |  |
| Evaluation | Communication & Mobility | `eyeGazeTechnology` | Eye-Gaze Technology | `checkbox` |  |  |  |
| Evaluation | Communication & Mobility | `ambulationStatus` | Ambulation Status | `text` |  |  |  |
| Evaluation | Communication & Mobility | `wheelchairUse` | Wheelchair Use | `checkbox` |  |  |  |
| Evaluation | Communication & Mobility | `wheelchairType` | Wheelchair Type | `text` |  |  |  |
| Evaluation | ALS Medications | `riluzole` | Riluzole | `checkbox` |  |  |  |
| Evaluation | ALS Medications | `riluzoleStartDate` | Riluzole Start | `date` |  |  |  |
| Evaluation | ALS Medications | `riluzoleDose` | Riluzole Dose | `text` |  |  |  |
| Evaluation | ALS Medications | `edaravone` | Edaravone | `checkbox` |  |  |  |
| Evaluation | ALS Medications | `sodiumPhenylbutyrateTaurursodiol` | AMX0035 (Relyvrio) | `checkbox` |  |  |  |
| Evaluation | ALS Medications | `clinicalTrialEligible` | Clinical Trial Eligible | `checkbox` |  |  |  |
| Evaluation | ALS Medications | `clinicalTrialName` | Trial Name | `text` |  |  |  |
| Evaluation | Goals of Care & Palliative | `advanceDirective` | Advance Directive | `checkbox` |  |  |  |
| Evaluation | Goals of Care & Palliative | `healthcareProxyName` | Healthcare Proxy | `text` |  |  |  |
| Evaluation | Goals of Care & Palliative | `goalsOfCareDiscussion` | Goals of Care Discussed | `checkbox` |  |  |  |
| Evaluation | Goals of Care & Palliative | `hospiceDiscussion` | Hospice Discussed | `checkbox` |  |  |  |
| Evaluation | Goals of Care & Palliative | `hospiceReferral` | Hospice Referral | `checkbox` |  |  |  |
| Evaluation | Goals of Care & Palliative | `palliativeCareReferral` | Palliative Care Referral | `checkbox` |  |  |  |
| Evaluation | Goals of Care & Palliative | `caregiverName` | Caregiver Name | `text` |  |  |  |
| Evaluation | Goals of Care & Palliative | `caregiverRelationship` | Caregiver Relationship | `text` |  |  |  |
| Evaluation | Goals of Care & Palliative | `diseaseSupportGroup` | Disease Support Group | `checkbox` |  |  |  |
| Evaluation | Goals of Care & Palliative | `evalNotes` | Evaluation Notes | `textarea` |  |  |  |
| Follow-Up Visits | Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Follow-Up Visits | Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Follow-Up Visits | Visit | `providerName` | Provider | `text` |  |  |  |
| Follow-Up Visits | Visit | `monthsFromOnset` | Months from Onset | `number` |  |  |  |
| Follow-Up Visits | Visit | `alsfrsRTotal` | ALSFRS-R Total | `number` |  |  |  |
| Follow-Up Visits | Visit | `alsfrsRDate` | ALSFRS-R Date | `date` |  |  |  |
| Follow-Up Visits | Visit | `alsfrsRChangeFromLast` | ALSFRS-R Change from Last | `number` |  |  |  |
| Follow-Up Visits | Visit | `monthlyAlfrsDecline` | Monthly Decline | `number` |  |  |  |
| Follow-Up Visits | Respiratory | `fvcSittingPct` | FVC Sitting %pred | `number` |  |  |  |
| Follow-Up Visits | Respiratory | `fvcSittingDate` | FVC Date | `date` |  |  |  |
| Follow-Up Visits | Respiratory | `sniffNasalPressureCmh2o` | SNP (cmH2O) | `number` |  |  |  |
| Follow-Up Visits | Respiratory | `mipCmh2o` | MIP (cmH2O) | `number` |  |  |  |
| Follow-Up Visits | Respiratory | `respiratorySymptoms` | Respiratory Symptoms | `checkbox` |  |  |  |
| Follow-Up Visits | Respiratory | `nivHoursPerNight` | NIV Hours/Night | `number` |  |  |  |
| Follow-Up Visits | Respiratory | `desaturationEpisodes` | Desaturation Episodes | `checkbox` |  |  |  |
| Follow-Up Visits | Respiratory | `respiratoryInterventionToday` | Respiratory Intervention Today | `checkbox` |  |  |  |
| Follow-Up Visits | Respiratory | `respiratoryIntervention` | Intervention Description | `text` |  |  |  |
| Follow-Up Visits | Nutrition & Weight | `weightKg` | Weight (kg) | `number` |  |  |  |
| Follow-Up Visits | Nutrition & Weight | `weightChangeKg` | Weight Change (kg) | `number` |  |  |  |
| Follow-Up Visits | Nutrition & Weight | `bmi` | BMI | `number` |  |  |  |
| Follow-Up Visits | Nutrition & Weight | `oralIntakeStatus` | Oral Intake Status | `text` |  |  |  |
| Follow-Up Visits | Nutrition & Weight | `dysphagiaWorsened` | Dysphagia Worsened | `checkbox` |  |  |  |
| Follow-Up Visits | Multidisciplinary Team | `neurologyPresent` | Neurology Present | `checkbox` |  |  |  |
| Follow-Up Visits | Multidisciplinary Team | `pulmonologyPresent` | Pulmonology Present | `checkbox` |  |  |  |
| Follow-Up Visits | Multidisciplinary Team | `nutritionPresent` | Nutrition Present | `checkbox` |  |  |  |
| Follow-Up Visits | Multidisciplinary Team | `slpPresent` | SLP Present | `checkbox` |  |  |  |
| Follow-Up Visits | Multidisciplinary Team | `ptPresent` | PT Present | `checkbox` |  |  |  |
| Follow-Up Visits | Multidisciplinary Team | `otPresent` | OT Present | `checkbox` |  |  |  |
| Follow-Up Visits | Multidisciplinary Team | `socialWorkPresent` | Social Work Present | `checkbox` |  |  |  |
| Follow-Up Visits | Multidisciplinary Team | `psychologyPresent` | Psychology Present | `checkbox` |  |  |  |
| Follow-Up Visits | Multidisciplinary Team | `palliativePresent` | Palliative Present | `checkbox` |  |  |  |
| Follow-Up Visits | Goals of Care | `phq9` | PHQ-9 Score | `number` |  |  |  |
| Follow-Up Visits | Goals of Care | `goalsOfCareReviewed` | Goals of Care Reviewed | `checkbox` |  |  |  |
| Follow-Up Visits | Goals of Care | `gocChange` | GOC Change | `text` |  |  |  |
| Follow-Up Visits | Goals of Care | `hospiceCriteriaMet` | Hospice Criteria Met | `checkbox` |  |  |  |
| Follow-Up Visits | Goals of Care | `palliativeFocus` | Palliative Focus | `checkbox` |  |  |  |
| Follow-Up Visits | Goals of Care | `nextVisitDate` | Next Visit Date | `date` |  |  |  |
| Follow-Up Visits | Goals of Care | `visitNotes` | Visit Notes | `textarea` |  |  |  |

### AOE Templates — `order_aoe_cf`

Screen: 1 page(s) · 1 section(s) · 3 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| AOE Template | Template | `order_code` | Order Code | `text` | Y |  |  |
| AOE Template | Template | `order_type` | Order Type | `select` | Y |  |  |
| AOE Template | Template | `questions` | Questions (JSON array) | `textarea` |  |  |  |

### Acupuncture — `acupuncture_cf`

Screen: 2 page(s) · 5 section(s) · 65 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Evaluation Basics | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Evaluation Basics | `evalDate` | Eval Date | `date` |  |  |  |
| Evaluation | Evaluation Basics | `acupuncturist` | Acupuncturist | `text` |  |  |  |
| Evaluation | Evaluation Basics | `chiefComplaint` | Chief Complaint | `text` |  |  |  |
| Evaluation | Evaluation Basics | `tcmDiagnoses` | TCM Diagnoses | `text` |  |  |  |
| Evaluation | Evaluation Basics | `fiveElementConstitution` | 5-Element Constitution | `select` |  |  |  |
| Evaluation | Evaluation Basics | `sessionsPlanned` | Sessions Planned | `number` |  |  |  |
| Evaluation | Evaluation Basics | `frequencyPerWeek` | Frequency/Week | `number` |  |  |  |
| Evaluation | Evaluation Basics | `durationWeeks` | Duration (weeks) | `number` |  |  |  |
| Evaluation | Tongue & Pulse Diagnosis | `tongueColor` | Tongue Color | `text` |  |  |  |
| Evaluation | Tongue & Pulse Diagnosis | `tongueCoating` | Tongue Coating | `text` |  |  |  |
| Evaluation | Tongue & Pulse Diagnosis | `tongueShape` | Tongue Shape | `text` |  |  |  |
| Evaluation | Tongue & Pulse Diagnosis | `pulseLeftCun` | Pulse L-Cun (Heart/SI) | `text` |  |  |  |
| Evaluation | Tongue & Pulse Diagnosis | `pulseLeftGuan` | Pulse L-Guan (Liver/GB) | `text` |  |  |  |
| Evaluation | Tongue & Pulse Diagnosis | `pulseLeftChi` | Pulse L-Chi (Kidney Yin) | `text` |  |  |  |
| Evaluation | Tongue & Pulse Diagnosis | `pulseRightCun` | Pulse R-Cun (Lung/LI) | `text` |  |  |  |
| Evaluation | Tongue & Pulse Diagnosis | `pulseRightGuan` | Pulse R-Guan (Spleen/St) | `text` |  |  |  |
| Evaluation | Tongue & Pulse Diagnosis | `pulseRightChi` | Pulse R-Chi (Kidney Yang) | `text` |  |  |  |
| Evaluation | Tongue & Pulse Diagnosis | `pulseOverallQuality` | Overall Pulse Quality | `text` |  |  |  |
| Evaluation | Pattern Differentiation | `patternYinYang` | Yin / Yang | `select` |  |  |  |
| Evaluation | Pattern Differentiation | `patternInteriorExterior` | Interior / Exterior | `select` |  |  |  |
| Evaluation | Pattern Differentiation | `patternColdHeat` | Cold / Heat | `select` |  |  |  |
| Evaluation | Pattern Differentiation | `patternDeficiencyExcess` | Deficiency / Excess | `select` |  |  |  |
| Evaluation | Pattern Differentiation | `zangfuPatterns` | Zang-Fu Patterns | `text` |  |  |  |
| Evaluation | Pattern Differentiation | `affectedChannels` | Affected Channels | `text` |  |  |  |
| Evaluation | Pattern Differentiation | `energyLevel` | Energy Level (1–10) | `number` |  |  |  |
| Evaluation | Pattern Differentiation | `sleepQuality` | Sleep Quality (1–10) | `number` |  |  |  |
| Evaluation | Pattern Differentiation | `painVas` | Pain VAS (0–10) | `number` |  |  |  |
| Evaluation | Pattern Differentiation | `treatmentPrinciple` | Treatment Principle | `textarea` |  |  |  |
| Evaluation | Pattern Differentiation | `primaryPointSelection` | Primary Point Selection | `textarea` |  |  |  |
| Sessions | Session | `patientId` | Patient | `lookup` | Y |  |  |
| Sessions | Session | `sessionDate` | Session Date | `date` |  |  |  |
| Sessions | Session | `sessionNumber` | Session # | `number` |  |  |  |
| Sessions | Session | `acupuncturist` | Acupuncturist | `text` |  |  |  |
| Sessions | Session | `painVasToday` | Pain VAS Today (0–10) | `number` |  |  |  |
| Sessions | Session | `totalNeedlesUsed` | Total Needles | `number` |  |  |  |
| Sessions | Session | `pointPrescription` | Point Prescription | `textarea` |  |  |  |
| Sessions | Session | `needleRetentionMin` | Retention Time (min) | `number` |  |  |  |
| Sessions | Session | `deQiObtained` | De Qi Obtained | `checkbox` |  |  |  |
| Sessions | Additional Modalities | `electroacupuncture` | Electroacupuncture | `checkbox` |  |  |  |
| Sessions | Additional Modalities | `eaPairs` | EA Pairs | `text` |  |  |  |
| Sessions | Additional Modalities | `eaHz` | EA Frequency (Hz) | `number` |  |  |  |
| Sessions | Additional Modalities | `eaWaveform` | EA Waveform | `text` |  |  |  |
| Sessions | Additional Modalities | `eaMa` | EA Intensity (mA) | `number` |  |  |  |
| Sessions | Additional Modalities | `eaDurationMin` | EA Duration (min) | `number` |  |  |  |
| Sessions | Additional Modalities | `cupping` | Cupping | `checkbox` |  |  |  |
| Sessions | Additional Modalities | `cuppingType` | Cupping Type | `select` |  |  |  |
| Sessions | Additional Modalities | `cuppingCups` | # Cups | `number` |  |  |  |
| Sessions | Additional Modalities | `cuppingDurationMin` | Cupping Duration (min) | `number` |  |  |  |
| Sessions | Additional Modalities | `cuppingMarks` | Cupping Marks | `checkbox` |  |  |  |
| Sessions | Additional Modalities | `guaSha` | Gua Sha | `checkbox` |  |  |  |
| Sessions | Additional Modalities | `guaShaRegions` | Gua Sha Regions | `text` |  |  |  |
| Sessions | Additional Modalities | `moxa` | Moxa | `checkbox` |  |  |  |
| Sessions | Additional Modalities | `moxaType` | Moxa Type | `text` |  |  |  |
| Sessions | Additional Modalities | `moxaPoints` | Moxa Points | `text` |  |  |  |
| Sessions | Additional Modalities | `moxaDurationMin` | Moxa Duration (min) | `number` |  |  |  |
| Sessions | Additional Modalities | `tdpLamp` | TDP Lamp | `checkbox` |  |  |  |
| Sessions | Additional Modalities | `auriculotherapy` | Auriculotherapy | `checkbox` |  |  |  |
| Sessions | Additional Modalities | `auricularPoints` | Auricular Points | `text` |  |  |  |
| Sessions | Additional Modalities | `tuiNa` | Tui Na | `checkbox` |  |  |  |
| Sessions | Additional Modalities | `tuiNaTechniques` | Tui Na Techniques | `text` |  |  |  |
| Sessions | Additional Modalities | `herbalFormulaDiscussed` | Herbal Formula Discussed | `checkbox` |  |  |  |
| Sessions | Additional Modalities | `herbalFormulaName` | Herbal Formula Name | `text` |  |  |  |
| Sessions | Additional Modalities | `patientResponse` | Patient Response | `textarea` |  |  |  |
| Sessions | Additional Modalities | `nextSessionDate` | Next Session Date | `date` |  |  |  |

### Acute/Sick Visit — `acute_sick_visit_cf`

Screen: 1 page(s) · 5 section(s) · 23 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Acute / Sick Visit Note | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Acute / Sick Visit Note | Patient & Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Acute / Sick Visit Note | Patient & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| Acute / Sick Visit Note | Patient & Visit | `visitMode` | Visit Mode | `select` |  |  |  |
| Acute / Sick Visit Note | Vital Signs | `bp2` | Blood Pressure | `text` |  |  |  |
| Acute / Sick Visit Note | Vital Signs | `pulse2` | Pulse (bpm) | `number` |  |  |  |
| Acute / Sick Visit Note | Vital Signs | `temp2` | Temperature (°F) | `number` |  |  |  |
| Acute / Sick Visit Note | Vital Signs | `spo22` | O2 Sat (%) | `number` |  |  |  |
| Acute / Sick Visit Note | Vital Signs | `weight2` | Weight (lbs) | `number` |  |  |  |
| Acute / Sick Visit Note | History & Chief Complaint | `chiefComplaint2` | Chief Complaint | `text` | Y |  |  |
| Acute / Sick Visit Note | History & Chief Complaint | `onset` | Onset | `text` |  |  |  |
| Acute / Sick Visit Note | History & Chief Complaint | `severity` | Severity | `select` |  |  |  |
| Acute / Sick Visit Note | History & Chief Complaint | `hpiNarrative2` | HPI | `textarea` | Y |  |  |
| Acute / Sick Visit Note | History & Chief Complaint | `pertinentPositives` | Pertinent Positives / Negatives | `textarea` |  |  |  |
| Acute / Sick Visit Note | Focused Physical Exam | `general2` | General | `select` |  |  |  |
| Acute / Sick Visit Note | Focused Physical Exam | `focusedExam` | Focused Exam Findings | `textarea` | Y |  |  |
| Acute / Sick Visit Note | Assessment & Plan | `primaryDx` | Primary Diagnosis | `text` | Y |  |  |
| Acute / Sick Visit Note | Assessment & Plan | `rapidStrepResult` | Rapid Strep Test (if ordered) | `select` |  |  |  |
| Acute / Sick Visit Note | Assessment & Plan | `covidTestResult` | COVID-19 Test (if ordered) | `select` |  |  |  |
| Acute / Sick Visit Note | Assessment & Plan | `influenzaTestResult` | Influenza Test (if ordered) | `select` |  |  |  |
| Acute / Sick Visit Note | Assessment & Plan | `treatment` | Treatment Plan | `textarea` | Y |  |  |
| Acute / Sick Visit Note | Assessment & Plan | `workRestNote` | Work/School Note | `select` |  |  |  |
| Acute / Sick Visit Note | Assessment & Plan | `followUp2` | Follow-Up | `select` |  |  |  |

### Adult Preventive Visit — `preventive_visit_adult_cf`

Screen: 1 page(s) · 3 section(s) · 14 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Adult Preventive Visit | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Adult Preventive Visit | Patient | `visitDate` | Visit Date | `date` | Y |  |  |
| Adult Preventive Visit | Patient | `provider` | Provider | `typeahead` | Y |  |  |
| Adult Preventive Visit | Patient | `ageGroup` | Age Group | `select` | Y |  |  |
| Adult Preventive Visit | Patient | `cptCode` | Preventive Visit CPT Code | `select` | Y |  |  |
| Adult Preventive Visit | Updated History | `intervalHistory` | Interval / Changes Since Last Visit | `textarea` | Y |  |  |
| Adult Preventive Visit | Updated History | `ros` | Review of Systems (10+ systems) | `textarea` | Y |  |  |
| Adult Preventive Visit | Preventive Screenings Completed | `bpStatus` | Blood Pressure | `select` | Y |  |  |
| Adult Preventive Visit | Preventive Screenings Completed | `bmiStatus` | BMI Category | `select` | Y |  |  |
| Adult Preventive Visit | Preventive Screenings Completed | `smokingStatus` | Tobacco Counseling | `select` | Y |  |  |
| Adult Preventive Visit | Preventive Screenings Completed | `alcoholScreen` | Alcohol Screening (AUDIT-C) | `select` | Y |  |  |
| Adult Preventive Visit | Preventive Screenings Completed | `depressionScreen` | Depression Screening (PHQ-2) | `select` | Y |  |  |
| Adult Preventive Visit | Preventive Screenings Completed | `vaccinesUpdated` | Vaccines Reviewed / Administered | `textarea` | Y |  |  |
| Adult Preventive Visit | Preventive Screenings Completed | `labsOrdered` | Labs Ordered Today | `textarea` |  |  |  |

### After Visit Summary — `after_visit_summary_cf`

Screen: 1 page(s) · 5 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| After Visit Summary Generation | Visit Context | `patientId` | Patient | `typeahead` | Y |  |  |
| After Visit Summary Generation | Visit Context | `encounterId` | Encounter ID | `text` | Y |  |  |
| After Visit Summary Generation | Visit Context | `visitDate` | Visit Date | `date` | Y |  |  |
| After Visit Summary Generation | Visit Context | `provider` | Provider | `typeahead` | Y |  |  |
| After Visit Summary Generation | Visit Diagnoses (for AVS) | `dx1Plain` | Diagnosis 1 (plain language) | `text` |  |  |  |
| After Visit Summary Generation | Visit Diagnoses (for AVS) | `dx2Plain` | Diagnosis 2 (plain language) | `text` |  |  |  |
| After Visit Summary Generation | Visit Diagnoses (for AVS) | `dx3Plain` | Diagnosis 3 (plain language) | `text` |  |  |  |
| After Visit Summary Generation | Patient Instructions | `treatmentInstructions` | Treatment Instructions | `textarea` | Y |  |  |
| After Visit Summary Generation | Patient Instructions | `medicationChanges` | Medication Changes | `textarea` |  |  |  |
| After Visit Summary Generation | Patient Instructions | `dietActivity` | Diet & Activity | `textarea` |  |  |  |
| After Visit Summary Generation | Patient Instructions | `followUpInstructions` | Follow-Up Instructions | `textarea` |  |  |  |
| After Visit Summary Generation | Follow-Up Appointments | `followUpAppt` | Follow-Up Appointment | `text` |  |  |  |
| After Visit Summary Generation | Follow-Up Appointments | `referrals` | Referrals Ordered | `textarea` |  |  |  |
| After Visit Summary Generation | Follow-Up Appointments | `labsOrdered` | Lab Orders | `textarea` |  |  |  |
| After Visit Summary Generation | Follow-Up Appointments | `imagingOrdered` | Imaging Ordered | `textarea` |  |  |  |
| After Visit Summary Generation | When to Seek Emergency Care | `emergencySigns` | Emergency Warning Signs | `textarea` | Y |  |  |
| After Visit Summary Generation | When to Seek Emergency Care | `practicePhone` | Office Phone for Questions | `text` |  |  |  |
| After Visit Summary Generation | When to Seek Emergency Care | `afterHoursPhone` | After-Hours Nurse Line | `text` |  |  |  |
| After Visit Summary Generation | When to Seek Emergency Care | `avsDeliveryMethod` | AVS Delivery Method | `select` |  |  |  |

### After-Visit Summary — `visit_summary_cf`

Screen: 2 page(s) · 4 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `APPOINTMENTS`, `ENCOUNTERS`, `ENCOUNTER_DIAGNOSES`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PRACTICES`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| After-Visit Summary | Diagnoses | `sections.diagnoses` | Diagnoses | `collection` |  |  |  |
| After-Visit Summary | Vitals | `sections.vitals.bpSystolic` | BP Systolic | `number` |  |  |  |
| After-Visit Summary | Vitals | `sections.vitals.bpDiastolic` | BP Diastolic | `number` |  |  |  |
| After-Visit Summary | Vitals | `sections.vitals.pulse` | Pulse | `number` |  |  |  |
| After-Visit Summary | Vitals | `sections.vitals.temperature` | Temp (F) | `number` |  |  |  |
| After-Visit Summary | Vitals | `sections.vitals.heightIn` | Height (in) | `number` |  |  |  |
| After-Visit Summary | Vitals | `sections.vitals.weightLbs` | Weight (lbs) | `number` |  |  |  |
| After-Visit Summary | Vitals | `sections.vitals.bmi` | BMI | `number` |  |  |  |
| After-Visit Summary | Vitals | `sections.vitals.spo2` | SpO2 (%) | `number` |  |  |  |
| Medications & Orders | Medications | `sections.medications` | Medications | `collection` |  |  |  |
| Medications & Orders | Orders | `sections.orders` | Orders | `collection` |  |  |  |

### Allergies — `allergies_cf`

Screen: 1 page(s) · 1 section(s) · 8 field(s) · UI LIVE · DB MISSING

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Allergy | Allergen | `allergen` | Allergen | `typeahead` | Y |  |  |
| Allergy | Allergen | `allergenType` | Allergen type | `select` | Y |  |  |
| Allergy | Allergen | `ndc` | NDC / code | `text` |  |  |  |
| Allergy | Allergen | `reaction` | Reaction(s) | `text` |  |  |  |
| Allergy | Allergen | `severity` | Severity | `select` |  |  |  |
| Allergy | Allergen | `onsetDate` | Onset date | `date` |  |  |  |
| Allergy | Allergen | `status` | Status | `select` |  |  |  |
| Allergy | Allergen | `notes` | Notes | `textarea` |  |  |  |

### Allergy / Immunology — `allergy_immunology_cf`

Screen: 3 page(s) · 8 section(s) · 55 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Assessment | Assessment | `patientId` | Patient | `lookup` | Y |  |  |
| Assessment | Assessment | `assessmentDate` | Date | `date` |  |  |  |
| Assessment | Assessment | `allergist` | Allergist | `text` |  |  |  |
| Assessment | Assessment | `visitReason` | Visit Reason | `select` |  |  |  |
| Assessment | Assessment | `primaryDiagnosis` | Primary Diagnosis (ICD-10) | `text` |  |  |  |
| Assessment | Assessment | `encounterId` | Encounter ID | `text` |  |  |  |
| Assessment | Rhinitis / TNSS | `tnssScore` | TNSS Total (0-12) | `number` |  |  |  |
| Assessment | Rhinitis / TNSS | `noseObstruction` | Obstruction (0-3) | `number` |  |  |  |
| Assessment | Rhinitis / TNSS | `runnyNose` | Rhinorrhea (0-3) | `number` |  |  |  |
| Assessment | Rhinitis / TNSS | `sneezing` | Sneezing (0-3) | `number` |  |  |  |
| Assessment | Rhinitis / TNSS | `itchyNose` | Itchy Nose (0-3) | `number` |  |  |  |
| Assessment | Rhinitis / TNSS | `eyeSymptomsScore` | Eye Symptoms (0-12) | `number` |  |  |  |
| Assessment | Asthma Control | `asthmaControlTest` | ACT Score (5-25) | `number` |  |  |  |
| Assessment | Asthma Control | `actCategory` | ACT Category | `select` |  |  |  |
| Assessment | Asthma Control | `fev1PctPredicted` | FEV1 %predicted | `number` |  |  |  |
| Assessment | Asthma Control | `ginaStep` | GINA Step | `number` |  |  |  |
| Assessment | Asthma Control | `rescueInhalerPuffsWk` | Rescue Puffs/Week | `number` |  |  |  |
| Assessment | Urticaria / Anaphylaxis | `ciuUas7Score` | UAS7 Score (CIU, 0-42) | `number` |  |  |  |
| Assessment | Urticaria / Anaphylaxis | `angioedemaPresent` | Angioedema Present | `checkbox` |  |  |  |
| Assessment | Urticaria / Anaphylaxis | `anaphylaxisHx` | History of Anaphylaxis | `checkbox` |  |  |  |
| Assessment | Urticaria / Anaphylaxis | `epipenPrescribed` | Epinephrine Auto-Injector Prescribed | `checkbox` |  |  |  |
| Assessment | Immunoglobulins | `iggMgDl` | IgG (mg/dL) | `number` |  |  |  |
| Assessment | Immunoglobulins | `igaMgDl` | IgA (mg/dL) | `number` |  |  |  |
| Assessment | Immunoglobulins | `igmMgDl` | IgM (mg/dL) | `number` |  |  |  |
| Assessment | Immunoglobulins | `igeKuL` | IgE total (kU/L) | `number` |  |  |  |
| Assessment | Immunoglobulins | `eosinophilsPct` | Eosinophils % | `number` |  |  |  |
| Assessment | Immunoglobulins | `eosinophilsAbs` | Eosinophils (cells/µL) | `number` |  |  |  |
| Assessment | Treatment Plan | `immunotherapyCandidate` | SCIT/SLIT Candidate | `checkbox` |  |  |  |
| Assessment | Treatment Plan | `biologicAgent` | Biologic Agent | `text` |  |  |  |
| Assessment | Treatment Plan | `biologicStartDate` | Biologic Start Date | `date` |  |  |  |
| Assessment | Treatment Plan | `allergenAvoidance` | Allergen Avoidance Counseling | `textarea` |  |  |  |
| Assessment | Treatment Plan | `plan` | Assessment & Plan | `textarea` |  |  |  |
| Skin Tests | Skin Test Session | `patientId` | Patient | `lookup` | Y |  |  |
| Skin Tests | Skin Test Session | `testDate` | Test Date | `date` |  |  |  |
| Skin Tests | Skin Test Session | `testType` | Test Type | `select` |  |  |  |
| Skin Tests | Skin Test Session | `testSite` | Test Site | `select` |  |  |  |
| Skin Tests | Skin Test Session | `antihistamineHeldDays` | Antihistamine Held (days) | `number` |  |  |  |
| Skin Tests | Skin Test Session | `histamineWhealMm` | Histamine Wheal (mm) | `number` |  |  |  |
| Skin Tests | Skin Test Session | `salineWhealMm` | Saline Wheal (mm) | `number` |  |  |  |
| Skin Tests | Skin Test Session | `controlsValid` | Controls Valid | `checkbox` |  |  |  |
| Skin Tests | Skin Test Session | `positiveCount` | Positive Allergen Count | `number` |  |  |  |
| Skin Tests | Skin Test Session | `clinicalSignificance` | Clinical Significance | `textarea` |  |  |  |
| Skin Tests | Skin Test Session | `notes` | Notes | `textarea` |  |  |  |
| Immunotherapy | SCIT Session | `patientId` | Patient | `lookup` | Y |  |  |
| Immunotherapy | SCIT Session | `sessionDate` | Session Date | `date` |  |  |  |
| Immunotherapy | SCIT Session | `phase` | Phase | `select` |  |  |  |
| Immunotherapy | SCIT Session | `vialsUsed` | Vials Used | `text` |  |  |  |
| Immunotherapy | SCIT Session | `doseMl` | Dose (mL) | `number` |  |  |  |
| Immunotherapy | SCIT Session | `cumulativeDoseMl` | Cumulative Dose (mL) | `number` |  |  |  |
| Immunotherapy | SCIT Session | `reactionOccurred` | Reaction Occurred | `checkbox` |  |  |  |
| Immunotherapy | SCIT Session | `reactionType` | Reaction Type | `select` |  |  |  |
| Immunotherapy | SCIT Session | `reactionManagement` | Reaction Management | `text` |  |  |  |
| Immunotherapy | SCIT Session | `observationMinutes` | Observation Time (min) | `number` |  |  |  |
| Immunotherapy | SCIT Session | `administeredBy` | Administered By | `text` |  |  |  |
| Immunotherapy | SCIT Session | `notes` | Notes | `text` |  |  |  |

### Annual Physical — `annual_physical_cf`

Screen: 3 page(s) · 6 section(s) · 41 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| History & Vitals | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| History & Vitals | Patient & Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| History & Vitals | Patient & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| History & Vitals | Patient & Visit | `visitType` | Physical Type | `select` | Y |  |  |
| History & Vitals | Vital Signs | `bp` | Blood Pressure | `text` | Y |  |  |
| History & Vitals | Vital Signs | `pulse` | Pulse (bpm) | `number` | Y |  |  |
| History & Vitals | Vital Signs | `respirations` | Respirations (breaths/min) | `number` |  |  |  |
| History & Vitals | Vital Signs | `temp` | Temperature (°F) | `number` |  |  |  |
| History & Vitals | Vital Signs | `spo2` | O2 Saturation (%) | `number` |  |  |  |
| History & Vitals | Vital Signs | `height` | Height | `text` |  |  |  |
| History & Vitals | Vital Signs | `weight` | Weight (lbs) | `number` |  |  |  |
| History & Vitals | Vital Signs | `bmi` | BMI | `number` |  |  |  |
| History & Vitals | Systems Review | `constitutional` | Constitutional | `select` |  |  |  |
| History & Vitals | Systems Review | `cv` | Cardiovascular | `select` |  |  |  |
| History & Vitals | Systems Review | `respiratory` | Respiratory | `select` |  |  |  |
| History & Vitals | Systems Review | `gi` | Gastrointestinal | `select` |  |  |  |
| History & Vitals | Systems Review | `gu` | Genitourinary | `select` |  |  |  |
| History & Vitals | Systems Review | `musculoskeletal` | Musculoskeletal | `select` |  |  |  |
| History & Vitals | Systems Review | `neuro` | Neurological | `select` |  |  |  |
| History & Vitals | Systems Review | `psych` | Psychiatric | `select` |  |  |  |
| History & Vitals | Systems Review | `ent` | ENT / Eyes | `select` |  |  |  |
| History & Vitals | Systems Review | `skin` | Skin / Integumentary | `select` |  |  |  |
| History & Vitals | Systems Review | `rosAdditional` | Additional ROS Notes | `textarea` |  |  |  |
| Physical Exam | Physical Examination | `general` | General Appearance | `select` |  |  |  |
| Physical Exam | Physical Examination | `heent` | Head/Eyes/Ears/Nose/Throat (HEENT) | `textarea` |  |  |  |
| Physical Exam | Physical Examination | `heartExam` | Heart | `textarea` |  |  |  |
| Physical Exam | Physical Examination | `lungExam` | Lungs | `textarea` |  |  |  |
| Physical Exam | Physical Examination | `abdominalExam` | Abdomen | `textarea` |  |  |  |
| Physical Exam | Physical Examination | `skinExam` | Skin | `textarea` |  |  |  |
| Physical Exam | Physical Examination | `extremitiesExam` | Extremities | `textarea` |  |  |  |
| Physical Exam | Physical Examination | `neuroExam` | Neurological | `textarea` |  |  |  |
| Physical Exam | Physical Examination | `rectalExam` | Rectal Exam (if indicated) | `select` |  |  |  |
| Physical Exam | Physical Examination | `breastExam` | Breast Exam (females) | `select` |  |  |  |
| Physical Exam | Physical Examination | `pelvicExam` | Pelvic Exam (females) | `select` |  |  |  |
| Assessment & Plan | Preventive Screenings & Immunizations | `preventiveScreeningsSummary` | Screenings Due / Performed | `textarea` |  |  |  |
| Assessment & Plan | Preventive Screenings & Immunizations | `immunizationsReviewed` | Immunization record reviewed | `checkbox` |  |  |  |
| Assessment & Plan | Preventive Screenings & Immunizations | `immunizationsGiven` | Immunizations Given Today | `textarea` |  |  |  |
| Assessment & Plan | Assessment & Plan | `summary` | Summary Assessment | `textarea` | Y |  |  |
| Assessment & Plan | Assessment & Plan | `activeProblemsPlan` | Active Problems & Plans | `textarea` | Y |  |  |
| Assessment & Plan | Assessment & Plan | `ordersPlaced` | Orders Placed | `textarea` |  |  |  |
| Assessment & Plan | Assessment & Plan | `nextPhysical` | Next Physical / Follow-Up | `select` |  |  |  |

### Annual Wellness Visit — `awv_visit_cf`

Screen: 2 page(s) · 9 section(s) · 31 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| AWV — Health Risk Assessment | Visit Context | `patientId` | Patient | `typeahead` | Y |  |  |
| AWV — Health Risk Assessment | Visit Context | `encounterId` | Encounter ID | `text` | Y |  |  |
| AWV — Health Risk Assessment | Visit Context | `visitType` | AWV Visit Type | `select` | Y |  |  |
| AWV — Health Risk Assessment | Visit Context | `awvDate` | AWV Date | `date` | Y |  |  |
| AWV — Health Risk Assessment | Visit Context | `completedBy` | Completed By | `typeahead` | Y |  |  |
| AWV — Health Risk Assessment | Health Risk Assessment (HRA) | `hraCompleted` | HRA completed (required for AWV) | `checkbox` |  |  |  |
| AWV — Health Risk Assessment | Health Risk Assessment (HRA) | `hraSource` | HRA Source | `select` |  |  |  |
| AWV — Health Risk Assessment | Biometric Measurements | `heightInches` | Height (inches) | `number` |  |  |  |
| AWV — Health Risk Assessment | Biometric Measurements | `weightLbs` | Weight (lbs) | `number` |  |  |  |
| AWV — Health Risk Assessment | Biometric Measurements | `bmi` | BMI (auto-calculated) | `number` |  |  |  |
| AWV — Health Risk Assessment | Biometric Measurements | `bloodPressureSystolic` | BP Systolic (mmHg) | `number` |  |  |  |
| AWV — Health Risk Assessment | Biometric Measurements | `bloodPressureDiastolic` | BP Diastolic (mmHg) | `number` |  |  |  |
| AWV — Screenings & Advance Directive | Functional Status & Fall Risk | `functionalAbilityScreen` | Functional Ability Screen | `select` |  |  |  |
| AWV — Screenings & Advance Directive | Functional Status & Fall Risk | `fallRiskScore` | Fall Risk Score (e.g., Morse Fall Scale) | `number` |  |  |  |
| AWV — Screenings & Advance Directive | Functional Status & Fall Risk | `fallRiskLevel` | Fall Risk Level | `select` |  |  |  |
| AWV — Screenings & Advance Directive | Functional Status & Fall Risk | `gaitAssessed` | Gait and balance assessed | `checkbox` |  |  |  |
| AWV — Screenings & Advance Directive | Cognitive Assessment | `cognitiveScreen` | Cognitive Screen Tool Used | `select` |  |  |  |
| AWV — Screenings & Advance Directive | Cognitive Assessment | `cognitiveScreenScore` | Score | `number` |  |  |  |
| AWV — Screenings & Advance Directive | Cognitive Assessment | `cognitiveConcernFlag` | Cognitive impairment concern identified — follow-up recommended | `checkbox` |  |  |  |
| AWV — Screenings & Advance Directive | Depression Screening | `depressionScreen` | Depression Screen Tool | `select` |  |  |  |
| AWV — Screenings & Advance Directive | Depression Screening | `depressionScore` | Score | `number` |  |  |  |
| AWV — Screenings & Advance Directive | Depression Screening | `depressionPositive` | Depression screening positive — referral/treatment initiated | `checkbox` |  |  |  |
| AWV — Screenings & Advance Directive | Additional Screenings | `visionScreen` | Vision Screening | `select` |  |  |  |
| AWV — Screenings & Advance Directive | Additional Screenings | `hearingScreen` | Hearing Screening | `select` |  |  |  |
| AWV — Screenings & Advance Directive | Additional Screenings | `tobaccoStatus` | Tobacco Status | `select` |  |  |  |
| AWV — Screenings & Advance Directive | Additional Screenings | `alcoholScreen` | Alcohol Screening (AUDIT-C) | `select` |  |  |  |
| AWV — Screenings & Advance Directive | Advance Care Planning (ACP) | `advanceDirectiveExists` | Advance directive on file (living will / POLST / MOLST / HCP) | `checkbox` |  |  |  |
| AWV — Screenings & Advance Directive | Advance Care Planning (ACP) | `advanceDirectiveType` | Advance Directive Type | `select` |  |  |  |
| AWV — Screenings & Advance Directive | Advance Care Planning (ACP) | `acpDiscussed` | ACP discussion documented today (CPT 99497/99498 billable separately if >16 min) | `checkbox` |  |  |  |
| AWV — Screenings & Advance Directive | Preventive Services Plan | `preventionPlanNotes` | Personalized Prevention Plan Notes | `textarea` |  |  |  |
| AWV — Screenings & Advance Directive | Preventive Services Plan | `awvStatus` | AWV Status | `select` |  |  |  |

### Anticoagulation Clinic — `anticoagulation_clinic_cf`

Screen: 1 page(s) · 4 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Anticoagulation Management Visit | Patient & Indication | `patientId` | Patient | `typeahead` | Y |  |  |
| Anticoagulation Management Visit | Patient & Indication | `encounterId` | Encounter ID | `text` |  |  |  |
| Anticoagulation Management Visit | Patient & Indication | `visitDate` | Visit Date | `date` | Y |  |  |
| Anticoagulation Management Visit | Patient & Indication | `anticoagulant` | Anticoagulant | `select` | Y |  |  |
| Anticoagulation Management Visit | Patient & Indication | `indication` | Anticoagulation Indication | `select` | Y |  |  |
| Anticoagulation Management Visit | Lab Results | `inr` | INR (Warfarin patients) | `number` |  |  |  |
| Anticoagulation Management Visit | Lab Results | `inrDate` | INR Date | `date` |  |  |  |
| Anticoagulation Management Visit | Lab Results | `inrTarget` | INR Target Range | `text` |  |  |  |
| Anticoagulation Management Visit | Lab Results | `inrInRange` | INR Status | `select` |  |  |  |
| Anticoagulation Management Visit | Lab Results | `ttrPercent` | Time in Therapeutic Range (TTR %) — 3 months | `number` |  |  |  |
| Anticoagulation Management Visit | Lab Results | `cbc` | CBC Result | `text` |  |  |  |
| Anticoagulation Management Visit | Lab Results | `renalFunction` | Renal Function (for DOAC dose adjustment) | `text` |  |  |  |
| Anticoagulation Management Visit | Safety Assessment | `bleedingEvents` | Bleeding Events Since Last Visit | `select` |  |  |  |
| Anticoagulation Management Visit | Safety Assessment | `bleedingDetail` | Bleeding Details | `textarea` |  |  |  |
| Anticoagulation Management Visit | Safety Assessment | `thrombEmbolism` | Signs/symptoms of clot extension or new clot | `checkbox` |  |  |  |
| Anticoagulation Management Visit | Safety Assessment | `dietChanges` | Diet changes affecting INR (warfarin — Vitamin K foods) | `checkbox` |  |  |  |
| Anticoagulation Management Visit | Safety Assessment | `medicationInteractions` | New Medications / Interactions | `textarea` |  |  |  |
| Anticoagulation Management Visit | Plan | `doseAdjustment` | Dose Adjustment / Instructions | `textarea` |  |  |  |
| Anticoagulation Management Visit | Plan | `nextInr` | Next INR Check Date | `date` |  |  |  |
| Anticoagulation Management Visit | Plan | `treatmentDuration` | Planned Treatment Duration | `select` |  |  |  |
| Anticoagulation Management Visit | Plan | `anticoagReversalPlan` | Reversal Plan On File | `textarea` |  |  |  |

### Assessment — `encounter_assessment_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Clinical Assessment | Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Clinical Assessment | Context | `encounterId` | Encounter ID | `text` | Y |  |  |
| Clinical Assessment | Context | `assessmentDate` | Date | `date` | Y |  |  |
| Clinical Assessment | Diagnoses & Assessment Notes | `dx1Code` | Diagnosis 1 (ICD-10) | `typeahead` | Y |  |  |
| Clinical Assessment | Diagnoses & Assessment Notes | `dx1Notes` | Dx 1 Assessment Notes | `textarea` |  |  |  |
| Clinical Assessment | Diagnoses & Assessment Notes | `dx1RiskLevel` | Dx 1 MDM Risk | `select` |  |  |  |
| Clinical Assessment | Diagnoses & Assessment Notes | `dx1PromoteToProblems` | Promote Dx 1 to Problem List | `checkbox` |  |  |  |
| Clinical Assessment | Diagnoses & Assessment Notes | `dx2Code` | Diagnosis 2 (ICD-10) | `typeahead` |  |  |  |
| Clinical Assessment | Diagnoses & Assessment Notes | `dx2Notes` | Dx 2 Assessment Notes | `textarea` |  |  |  |
| Clinical Assessment | Diagnoses & Assessment Notes | `dx2RiskLevel` | Dx 2 MDM Risk | `select` |  |  |  |
| Clinical Assessment | Diagnoses & Assessment Notes | `dx3Code` | Diagnosis 3 (ICD-10) | `typeahead` |  |  |  |
| Clinical Assessment | Diagnoses & Assessment Notes | `dx3Notes` | Dx 3 Assessment Notes | `textarea` |  |  |  |
| Clinical Assessment | Assessment Summary | `assessmentComplete` | Assessment documented and complete | `checkbox` |  |  |  |
| Clinical Assessment | Assessment Summary | `overallAssessment` | Overall Assessment / Clinical Impression | `textarea` |  |  |  |
| Clinical Assessment | Assessment Summary | `clinicalDecisionMaking` | MDM Data Complexity | `select` |  |  |  |

### Asthma/COPD Visit — `asthma_copd_visit_cf`

Screen: 1 page(s) · 4 section(s) · 22 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Asthma / COPD Management Visit | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Asthma / COPD Management Visit | Patient & Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Asthma / COPD Management Visit | Patient & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| Asthma / COPD Management Visit | Patient & Visit | `primaryDx` | Primary Diagnosis | `select` | Y |  |  |
| Asthma / COPD Management Visit | Symptom Control | `daySymptoms` | Daytime Symptoms (per week) | `select` |  |  |  |
| Asthma / COPD Management Visit | Symptom Control | `nightSymptoms` | Night Awakenings | `select` |  |  |  |
| Asthma / COPD Management Visit | Symptom Control | `saba` | Rescue SABA Use (albuterol) | `select` |  |  |  |
| Asthma / COPD Management Visit | Symptom Control | `activityLimitRespiratoryresp` | Activity Limitation from Symptoms | `select` |  |  |  |
| Asthma / COPD Management Visit | Symptom Control | `exacerbations` | Exacerbations in Past 12 Months | `select` |  |  |  |
| Asthma / COPD Management Visit | Symptom Control | `controlLevel` | Overall Asthma/COPD Control | `select` |  |  |  |
| Asthma / COPD Management Visit | Spirometry / Peak Flow | `peakFlow` | Peak Expiratory Flow (L/min) | `number` |  |  |  |
| Asthma / COPD Management Visit | Spirometry / Peak Flow | `peakFlowPct` | Peak Flow % Personal Best | `number` |  |  |  |
| Asthma / COPD Management Visit | Spirometry / Peak Flow | `spirometryDate` | Last Spirometry Date | `date` |  |  |  |
| Asthma / COPD Management Visit | Spirometry / Peak Flow | `fev1` | FEV1 (% predicted) | `number` |  |  |  |
| Asthma / COPD Management Visit | Spirometry / Peak Flow | `fev1fvc` | FEV1/FVC ratio | `number` |  |  |  |
| Asthma / COPD Management Visit | Spirometry / Peak Flow | `spo2` | O2 Saturation (%) | `number` |  |  |  |
| Asthma / COPD Management Visit | Medications & Plan | `currentInhalers` | Current Inhalers / Medications | `textarea` |  |  |  |
| Asthma / COPD Management Visit | Medications & Plan | `inhalerTechnique` | Inhaler Technique Assessment | `select` |  |  |  |
| Asthma / COPD Management Visit | Medications & Plan | `medicationChanges` | Medication Changes | `textarea` |  |  |  |
| Asthma / COPD Management Visit | Medications & Plan | `actionPlan` | Written Asthma/COPD Action Plan reviewed and updated | `checkbox` |  |  |  |
| Asthma / COPD Management Visit | Medications & Plan | `oxygenTherapy` | Home oxygen prescribed / ongoing | `checkbox` |  |  |  |
| Asthma / COPD Management Visit | Medications & Plan | `nextRespVisit` | Next Visit Interval | `select` |  |  |  |

### BH Screening — `behavioral_health_screening_cf`

Screen: 1 page(s) · 5 section(s) · 35 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Behavioral Health Screening Tools | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Behavioral Health Screening Tools | Patient & Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Behavioral Health Screening Tools | Patient & Visit | `screeningDate` | Screening Date | `date` | Y |  |  |
| Behavioral Health Screening Tools | Patient & Visit | `screenedBy` | Administered By | `typeahead` | Y |  |  |
| Behavioral Health Screening Tools | PHQ-9 Depression Screening | `phq1` | 1. Little interest/pleasure in doing things | `select` |  |  |  |
| Behavioral Health Screening Tools | PHQ-9 Depression Screening | `phq2` | 2. Feeling down, depressed, or hopeless | `select` |  |  |  |
| Behavioral Health Screening Tools | PHQ-9 Depression Screening | `phq3` | 3. Trouble falling/staying asleep, or sleeping too much | `select` |  |  |  |
| Behavioral Health Screening Tools | PHQ-9 Depression Screening | `phq4` | 4. Feeling tired or having little energy | `select` |  |  |  |
| Behavioral Health Screening Tools | PHQ-9 Depression Screening | `phq5` | 5. Poor appetite or overeating | `select` |  |  |  |
| Behavioral Health Screening Tools | PHQ-9 Depression Screening | `phq6` | 6. Feeling bad about yourself | `select` |  |  |  |
| Behavioral Health Screening Tools | PHQ-9 Depression Screening | `phq7` | 7. Trouble concentrating on things | `select` |  |  |  |
| Behavioral Health Screening Tools | PHQ-9 Depression Screening | `phq8` | 8. Moving/speaking slowly OR fidgety/restless | `select` |  |  |  |
| Behavioral Health Screening Tools | PHQ-9 Depression Screening | `phq9` | 9. Thoughts of self-harm or suicide | `select` |  |  |  |
| Behavioral Health Screening Tools | PHQ-9 Depression Screening | `phq9Score` | PHQ-9 Total Score (0-27) | `number` |  |  |  |
| Behavioral Health Screening Tools | PHQ-9 Depression Screening | `phq9Severity` | Severity Interpretation | `select` |  |  |  |
| Behavioral Health Screening Tools | GAD-7 Anxiety Screening | `gad1` | 1. Feeling nervous, anxious, or on edge | `select` |  |  |  |
| Behavioral Health Screening Tools | GAD-7 Anxiety Screening | `gad2` | 2. Not being able to stop/control worrying | `select` |  |  |  |
| Behavioral Health Screening Tools | GAD-7 Anxiety Screening | `gad3` | 3. Worrying too much about different things | `select` |  |  |  |
| Behavioral Health Screening Tools | GAD-7 Anxiety Screening | `gad4` | 4. Trouble relaxing | `select` |  |  |  |
| Behavioral Health Screening Tools | GAD-7 Anxiety Screening | `gad5` | 5. Being so restless it is hard to sit still | `select` |  |  |  |
| Behavioral Health Screening Tools | GAD-7 Anxiety Screening | `gad6` | 6. Becoming easily annoyed or irritable | `select` |  |  |  |
| Behavioral Health Screening Tools | GAD-7 Anxiety Screening | `gad7` | 7. Feeling afraid as if something awful might happen | `select` |  |  |  |
| Behavioral Health Screening Tools | GAD-7 Anxiety Screening | `gad7Score` | GAD-7 Total Score (0-21) | `number` |  |  |  |
| Behavioral Health Screening Tools | GAD-7 Anxiety Screening | `gad7Severity` | Severity Interpretation | `select` |  |  |  |
| Behavioral Health Screening Tools | AUDIT-C Alcohol Screening | `auditC1` | 1. How often do you have a drink containing alcohol? | `select` |  |  |  |
| Behavioral Health Screening Tools | AUDIT-C Alcohol Screening | `auditC2` | 2. How many drinks on a typical day when drinking? | `select` |  |  |  |
| Behavioral Health Screening Tools | AUDIT-C Alcohol Screening | `auditC3` | 3. How often have 6 or more drinks on one occasion? | `select` |  |  |  |
| Behavioral Health Screening Tools | AUDIT-C Alcohol Screening | `auditCScore` | AUDIT-C Score (0-12) | `number` |  |  |  |
| Behavioral Health Screening Tools | AUDIT-C Alcohol Screening | `auditCInterpretation` | AUDIT-C Interpretation | `select` |  |  |  |
| Behavioral Health Screening Tools | Screening Action Plan | `safetyScreened` | Safety screening performed (PHQ-9 item 9 positive — safety plan completed) | `checkbox` |  |  |  |
| Behavioral Health Screening Tools | Screening Action Plan | `safetyPlan` | Safety Plan (if item 9 positive) | `textarea` |  |  |  |
| Behavioral Health Screening Tools | Screening Action Plan | `bhReferral` | Behavioral health referral placed | `checkbox` |  |  |  |
| Behavioral Health Screening Tools | Screening Action Plan | `bhReferralTo` | Referred To | `text` |  |  |  |
| Behavioral Health Screening Tools | Screening Action Plan | `bhMedStarted` | Medication started (antidepressant/anxiolytic) | `checkbox` |  |  |  |
| Behavioral Health Screening Tools | Screening Action Plan | `bhFollowUp` | Follow-Up Interval | `select` |  |  |  |

### Bariatric Medicine — `bariatric_medicine_cf`

Screen: 2 page(s) · 5 section(s) · 73 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Pre-Surgical Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| Pre-Surgical Evaluation | Evaluation | `evalDate` | Evaluation Date | `date` |  |  |  |
| Pre-Surgical Evaluation | Evaluation | `providerName` | Evaluating Provider | `text` |  |  |  |
| Pre-Surgical Evaluation | Evaluation | `status` | Status | `select` |  |  |  |
| Pre-Surgical Evaluation | Evaluation | `encounterId` | Encounter ID | `text` |  |  |  |
| Pre-Surgical Evaluation | Anthropometrics & Weight History | `heightCm` | Height (cm) | `number` |  |  |  |
| Pre-Surgical Evaluation | Anthropometrics & Weight History | `weightKg` | Weight (kg) | `number` |  |  |  |
| Pre-Surgical Evaluation | Anthropometrics & Weight History | `bmi` | BMI | `number` |  |  |  |
| Pre-Surgical Evaluation | Anthropometrics & Weight History | `highestAdultWeightKg` | Highest Adult Weight (kg) | `number` |  |  |  |
| Pre-Surgical Evaluation | Anthropometrics & Weight History | `highestAdultWeightAge` | Age at Highest Weight | `number` |  |  |  |
| Pre-Surgical Evaluation | Anthropometrics & Weight History | `lowestAdultWeightKg` | Lowest Adult Weight (kg) | `number` |  |  |  |
| Pre-Surgical Evaluation | Anthropometrics & Weight History | `ageOfObesityOnset` | Age of Obesity Onset | `number` |  |  |  |
| Pre-Surgical Evaluation | Anthropometrics & Weight History | `waistCm` | Waist (cm) | `number` |  |  |  |
| Pre-Surgical Evaluation | Anthropometrics & Weight History | `hipCm` | Hip (cm) | `number` |  |  |  |
| Pre-Surgical Evaluation | Anthropometrics & Weight History | `neckCm` | Neck (cm) | `number` |  |  |  |
| Pre-Surgical Evaluation | Anthropometrics & Weight History | `longestWeightLossDurationMonths` | Longest Weight Loss Duration (months) | `number` |  |  |  |
| Pre-Surgical Evaluation | Anthropometrics & Weight History | `maxWeightLostKg` | Max Weight Lost (kg) | `number` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `type2Diabetes` | Type 2 Diabetes | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `hba1c` | HbA1c (%) | `number` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `hba1cDate` | HbA1c Date | `date` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `hypertension` | Hypertension | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `bpSystolic` | BP Systolic | `number` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `bpDiastolic` | BP Diastolic | `number` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `hyperlipidemia` | Hyperlipidemia | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `ldl` | LDL (mg/dL) | `number` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `hdl` | HDL (mg/dL) | `number` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `triglycerides` | Triglycerides (mg/dL) | `number` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `obstructiveSleepApnea` | Obstructive Sleep Apnea | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `cpapUse` | CPAP Use | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `ahi` | AHI | `number` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `gerd` | GERD | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `nafld` | NAFLD | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `nash` | NASH | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `pcos` | PCOS | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Obesity Comorbidities | `chronicBackPain` | Chronic Back Pain | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `bmiQualifies` | BMI Qualifies (≥40 or ≥35+comorbidity) | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `comorbidityQualifies` | Comorbidity Qualifies | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `supervisedDietMonthsCompleted` | Supervised Diet Months Completed | `number` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `supervisedDietProgram` | Supervised Diet Program | `text` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `insuranceCriteriaMet` | Insurance Criteria Met | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `insuranceCarrier` | Insurance Carrier | `text` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `psychologicalClearanceRequired` | Psych Clearance Required | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `psychologicalEvalCompleted` | Psych Eval Completed | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `psychologistName` | Psychologist | `text` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `psychologicalClearanceStatus` | Psych Clearance Status | `select` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `bingeEatingDisorder` | Binge Eating Disorder | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `besScore` | BES Score | `number` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `substanceUseDisorderHx` | SUD History | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `sobrietyDurationMonths` | Sobriety Duration (months) | `number` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `nicotineUse` | Nicotine Use | `checkbox` |  |  |  |
| Pre-Surgical Evaluation | Surgical Candidacy & Clearance | `smokingCessationDate` | Cessation Date | `date` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `patientId` | Patient | `lookup` | Y |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `visitDate` | Visit Date | `date` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `provider` | Provider | `text` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `surgeryType` | Surgery Type | `select` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `surgeryDate` | Surgery Date | `date` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `monthsPostOp` | Months Post-Op | `number` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `currentWeightKg` | Current Weight (kg) | `number` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `bmi` | BMI | `number` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `excessWeightLossPct` | EWL % | `number` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `totalWeightLossPct` | TWL % | `number` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `dietaryAdherence` | Dietary Adherence | `select` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `proteinIntakeGDay` | Protein Intake (g/day) | `number` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `exerciseMinutesWeek` | Exercise (min/week) | `number` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `dumpingSyndrome` | Dumping Syndrome | `checkbox` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `gerd` | GERD | `checkbox` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `hairLoss` | Hair Loss | `checkbox` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `vitaminB12` | B12 (pg/mL) | `number` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `thiamine` | Thiamine (nmol/L) | `number` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `vitaminD25oh` | 25-OH Vitamin D (ng/mL) | `number` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `ferritin` | Ferritin (ng/mL) | `number` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `albumin` | Albumin (g/dL) | `number` |  |  |  |
| Post-Op Follow-Up | Post-Bariatric Follow-Up | `notes` | Notes / Plan | `textarea` |  |  |  |
