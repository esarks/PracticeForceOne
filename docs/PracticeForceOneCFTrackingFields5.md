---
title: "PracticeForceOneCFTrackingFields5"
---

# CF Tracking — Field-Level Detail (part 5 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Clinical**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Clinical

### Geriatric Psychiatry — `geriatric_psychiatry_cf`

Screen: 2 page(s) · 9 section(s) · 106 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Evaluation | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Evaluation | `providerName` | Psychiatrist | `text` |  |  |  |
| Evaluation | Evaluation | `referralReason` | Referral Reason | `text` |  |  |  |
| Evaluation | Evaluation | `referralSource` | Referral Source | `text` |  |  |  |
| Evaluation | Evaluation | `setting` | Setting | `select` |  |  |  |
| Evaluation | Evaluation | `chiefComplaint` | Chief Complaint | `textarea` |  |  |  |
| Evaluation | Evaluation | `informantName` | Informant Name | `text` |  |  |  |
| Evaluation | Evaluation | `informantRelationship` | Informant Relationship | `text` |  |  |  |
| Evaluation | Evaluation | `informantReliable` | Informant Reliable | `checkbox` |  |  |  |
| Evaluation | Psychiatric History | `priorPsychiatricHospitalizations` | Prior Hospitalizations | `number` |  |  |  |
| Evaluation | Psychiatric History | `lastHospitalizationDate` | Last Hospitalization | `date` |  |  |  |
| Evaluation | Psychiatric History | `priorPsychiatricTreatment` | Prior Treatment | `text` |  |  |  |
| Evaluation | Psychiatric History | `substanceUseHistory` | Substance Use History | `textarea` |  |  |  |
| Evaluation | Psychiatric History | `familyPsychiatricHistory` | Family Psychiatric History | `textarea` |  |  |  |
| Evaluation | Psychiatric History | `highAnticholinergicBurden` | High Anticholinergic Burden | `checkbox` |  |  |  |
| Evaluation | Psychiatric History | `anticholinergicMedications` | Anticholinergic Medications | `text` |  |  |  |
| Evaluation | Psychiatric History | `polypharmacyConcern` | Polypharmacy Concern | `checkbox` |  |  |  |
| Evaluation | Psychiatric History | `fallsRisk` | Falls Risk | `checkbox` |  |  |  |
| Evaluation | Psychiatric History | `fallCountYear` | Falls in Past Year | `number` |  |  |  |
| Evaluation | Cognitive Assessment | `dementiaDiagnosis` | Dementia Diagnosis | `checkbox` |  |  |  |
| Evaluation | Cognitive Assessment | `dementiaType` | Dementia Type | `select` |  |  |  |
| Evaluation | Cognitive Assessment | `dementiaStage` | Stage | `select` |  |  |  |
| Evaluation | Cognitive Assessment | `mmseScore` | MMSE Score | `number` |  |  |  |
| Evaluation | Cognitive Assessment | `mocaScore` | MoCA Score | `number` |  |  |  |
| Evaluation | Cognitive Assessment | `cdrGlobal` | CDR Global | `number` |  |  |  |
| Evaluation | Cognitive Assessment | `cognitiveTestingDate` | Testing Date | `date` |  |  |  |
| Evaluation | Cognitive Assessment | `deliriumHistory` | Delirium History | `checkbox` |  |  |  |
| Evaluation | Cognitive Assessment | `deliriumPrecipitants` | Delirium Precipitants | `text` |  |  |  |
| Evaluation | Mood & Depression | `lateLifeDepression` | Late-Life Depression | `checkbox` |  |  |  |
| Evaluation | Mood & Depression | `phq9Score` | PHQ-9 Score | `number` |  |  |  |
| Evaluation | Mood & Depression | `phq9Date` | PHQ-9 Date | `date` |  |  |  |
| Evaluation | Mood & Depression | `gdsShortScore` | GDS-Short Score | `number` |  |  |  |
| Evaluation | Mood & Depression | `cornellScaleDementiaDepression` | Cornell Scale (CSDD) | `number` |  |  |  |
| Evaluation | Mood & Depression | `csddDate` | CSDD Date | `date` |  |  |  |
| Evaluation | Mood & Depression | `manicSymptoms` | Manic Symptoms | `checkbox` |  |  |  |
| Evaluation | Mood & Depression | `bipolarHistory` | Bipolar History | `checkbox` |  |  |  |
| Evaluation | Mood & Depression | `anxietyPresent` | Anxiety Present | `checkbox` |  |  |  |
| Evaluation | Mood & Depression | `anxietyType` | Anxiety Type | `text` |  |  |  |
| Evaluation | Mood & Depression | `gad7Score` | GAD-7 Score | `number` |  |  |  |
| Evaluation | Safety Assessment | `suicidalIdeation` | Suicidal Ideation | `checkbox` |  |  |  |
| Evaluation | Safety Assessment | `siPlan` | SI — Plan | `checkbox` |  |  |  |
| Evaluation | Safety Assessment | `siMeans` | SI — Means | `checkbox` |  |  |  |
| Evaluation | Safety Assessment | `siIntent` | SI — Intent | `checkbox` |  |  |  |
| Evaluation | Safety Assessment | `siDetail` | SI Detail | `textarea` |  |  |  |
| Evaluation | Safety Assessment | `priorSuicideAttempt` | Prior Attempt | `checkbox` |  |  |  |
| Evaluation | Safety Assessment | `priorAttemptDate` | Prior Attempt Date | `date` |  |  |  |
| Evaluation | Safety Assessment | `homicidalIdeation` | Homicidal Ideation | `checkbox` |  |  |  |
| Evaluation | Safety Assessment | `accessToMeans` | Access to Means | `checkbox` |  |  |  |
| Evaluation | Safety Assessment | `weaponsInHome` | Weapons in Home | `checkbox` |  |  |  |
| Evaluation | Safety Assessment | `weaponsSecured` | Weapons Secured | `checkbox` |  |  |  |
| Evaluation | Safety Assessment | `safetyPlanCreated` | Safety Plan Created | `checkbox` |  |  |  |
| Evaluation | Safety Assessment | `hospitalizationNeeded` | Hospitalization Needed | `checkbox` |  |  |  |
| Evaluation | Behavioral & Psychotic Symptoms | `psychoticSymptoms` | Psychotic Symptoms | `checkbox` |  |  |  |
| Evaluation | Behavioral & Psychotic Symptoms | `delusions` | Delusions | `checkbox` |  |  |  |
| Evaluation | Behavioral & Psychotic Symptoms | `delusionType` | Delusion Type | `text` |  |  |  |
| Evaluation | Behavioral & Psychotic Symptoms | `hallucinations` | Hallucinations | `checkbox` |  |  |  |
| Evaluation | Behavioral & Psychotic Symptoms | `hallucinationType` | Hallucination Type | `text` |  |  |  |
| Evaluation | Behavioral & Psychotic Symptoms | `bpsdPresent` | BPSD Present | `checkbox` |  |  |  |
| Evaluation | Behavioral & Psychotic Symptoms | `npiTotal` | NPI Total | `number` |  |  |  |
| Evaluation | Behavioral & Psychotic Symptoms | `nighttimeDisturbances` | Nighttime Disturbances | `checkbox` |  |  |  |
| Evaluation | Behavioral & Psychotic Symptoms | `physicalAggression` | Physical Aggression | `checkbox` |  |  |  |
| Evaluation | Behavioral & Psychotic Symptoms | `deliriumPresent` | Delirium Present | `checkbox` |  |  |  |
| Evaluation | Behavioral & Psychotic Symptoms | `camPositive` | CAM Positive | `checkbox` |  |  |  |
| Evaluation | Behavioral & Psychotic Symptoms | `deliriumType` | Delirium Type | `select` |  |  |  |
| Evaluation | Capacity & Social | `capacityAssessmentPerformed` | Capacity Assessment Performed | `checkbox` |  |  |  |
| Evaluation | Capacity & Social | `capacityDecision` | Capacity Decision | `select` |  |  |  |
| Evaluation | Capacity & Social | `capacityRationale` | Capacity Rationale | `textarea` |  |  |  |
| Evaluation | Capacity & Social | `healthcareProxyName` | Healthcare Proxy | `text` |  |  |  |
| Evaluation | Capacity & Social | `advanceDirective` | Advance Directive on File | `checkbox` |  |  |  |
| Evaluation | Capacity & Social | `doNotResuscitate` | DNR | `checkbox` |  |  |  |
| Evaluation | Capacity & Social | `livesAlone` | Lives Alone | `checkbox` |  |  |  |
| Evaluation | Capacity & Social | `caregiverName` | Caregiver Name | `text` |  |  |  |
| Evaluation | Capacity & Social | `caregiverBurden` | Caregiver Burden | `select` |  |  |  |
| Evaluation | Capacity & Social | `drivingStatus` | Driving Status | `select` |  |  |  |
| Evaluation | Diagnosis & Plan | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| Evaluation | Diagnosis & Plan | `primaryIcd10` | ICD-10 | `text` |  |  |  |
| Evaluation | Diagnosis & Plan | `medicationPlan` | Medication Plan | `textarea` |  |  |  |
| Evaluation | Diagnosis & Plan | `psychotherapyPlan` | Psychotherapy Plan | `textarea` |  |  |  |
| Evaluation | Diagnosis & Plan | `socialWorkReferral` | Social Work Referral | `checkbox` |  |  |  |
| Evaluation | Diagnosis & Plan | `memoryCareReferral` | Memory Care Referral | `checkbox` |  |  |  |
| Evaluation | Diagnosis & Plan | `assistedLivingReferral` | Assisted Living Referral | `checkbox` |  |  |  |
| Evaluation | Diagnosis & Plan | `followUpInterval` | Follow-Up Interval | `text` |  |  |  |
| Evaluation | Diagnosis & Plan | `evalNotes` | Notes | `textarea` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `providerName` | Provider | `text` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `intervalHistory` | Interval History | `textarea` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `newStressors` | New Stressors | `text` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `phq9Score` | PHQ-9 | `number` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `gad7Score` | GAD-7 | `number` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `mocaScore` | MoCA | `number` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `moodChange` | Mood Change | `select` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `cognitiveChange` | Cognitive Change | `select` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `bpsdChange` | BPSD Change | `select` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `suicidalIdeation` | Suicidal Ideation | `checkbox` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `siLevel` | SI Level | `select` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `deliriumPresent` | Delirium Present | `checkbox` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `fallsSinceLast` | Falls Since Last Visit | `number` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `safetyPlanReviewed` | Safety Plan Reviewed | `checkbox` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `antipsychoticMetabolicMonitoring` | Metabolic Monitoring Done | `checkbox` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `anticholinergicReview` | Anticholinergic Review Done | `checkbox` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `beersReview` | Beers Criteria Review Done | `checkbox` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `caregiverUpdate` | Caregiver Update | `textarea` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `nextVisitDate` | Next Visit | `date` |  |  |  |
| Follow-Up Visits | Geriatric Psychiatry Visit | `visitNotes` | Notes | `textarea` |  |  |  |

### Goals of Care — `patient_goals_care_cf`

Screen: 1 page(s) · 4 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Goals of Care & Advance Directive Discussion | Patient & Discussion Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Goals of Care & Advance Directive Discussion | Patient & Discussion Context | `discussionDate` | Discussion Date | `date` | Y |  |  |
| Goals of Care & Advance Directive Discussion | Patient & Discussion Context | `discussionDuration` | Time Spent (minutes) | `number` |  |  |  |
| Goals of Care & Advance Directive Discussion | Patient & Discussion Context | `participantsPresent` | Participants Present | `textarea` |  |  |  |
| Goals of Care & Advance Directive Discussion | Patient & Discussion Context | `triggeringContext` | Context for Discussion | `select` | Y |  |  |
| Goals of Care & Advance Directive Discussion | Patient Values & Priorities | `patientPriorities` | Patient's Stated Values & Priorities | `textarea` | Y |  |  |
| Goals of Care & Advance Directive Discussion | Patient Values & Priorities | `decisionMakingCapacity` | Decision-Making Capacity | `select` |  |  |  |
| Goals of Care & Advance Directive Discussion | Patient Values & Priorities | `healthcareProxy` | Healthcare Proxy / Power of Attorney | `text` |  |  |  |
| Goals of Care & Advance Directive Discussion | Advance Directive Decisions | `adOnFile` | Advance Directive Status | `select` | Y |  |  |
| Goals of Care & Advance Directive Discussion | Advance Directive Decisions | `dnrDnrStatus` | DNR / Code Status | `select` | Y |  |  |
| Goals of Care & Advance Directive Discussion | Advance Directive Decisions | `molstCompleted` | MOLST / POLST completed and placed in chart | `checkbox` |  |  |  |
| Goals of Care & Advance Directive Discussion | Advance Directive Decisions | `hospitalPreference` | Hospitalization Preference | `select` |  |  |  |
| Goals of Care & Advance Directive Discussion | Advance Directive Decisions | `artificialNutrition` | Artificial Nutrition / Hydration | `select` |  |  |  |
| Goals of Care & Advance Directive Discussion | Follow-Up & Documentation | `summaryOfDiscussion` | Summary of Discussion | `textarea` | Y |  |  |
| Goals of Care & Advance Directive Discussion | Follow-Up & Documentation | `cptCode2` | CPT Code | `text` |  |  |  |
| Goals of Care & Advance Directive Discussion | Follow-Up & Documentation | `nextDiscussion` | Next Goals of Care Review Date | `date` |  |  |  |

### Grief Counseling — `grief_bereavement_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Grief & Bereavement Counseling | Patient & Loss | `patientId` | Patient | `typeahead` | Y |  |  |
| Grief & Bereavement Counseling | Patient & Loss | `visitDate` | Visit Date | `date` | Y |  |  |
| Grief & Bereavement Counseling | Patient & Loss | `provider` | Provider | `typeahead` | Y |  |  |
| Grief & Bereavement Counseling | Patient & Loss | `deceasedRelationship` | Relationship of Deceased | `select` | Y |  |  |
| Grief & Bereavement Counseling | Patient & Loss | `dateOfDeath` | Date of Death | `date` |  |  |  |
| Grief & Bereavement Counseling | Patient & Loss | `causeOfDeath` | Cause of Death (brief) | `text` |  |  |  |
| Grief & Bereavement Counseling | Patient & Loss | `griefType` | Type of Loss / Grief Context | `select` |  |  |  |
| Grief & Bereavement Counseling | Grief Assessment | `griefStage` | Grief Presentation (Kübler-Ross / Worden) | `select` | Y |  |  |
| Grief & Bereavement Counseling | Grief Assessment | `phq9` | PHQ-9 Score (today) | `select` |  |  |  |
| Grief & Bereavement Counseling | Grief Assessment | `complicatedGrief` | Prolonged Grief Disorder (PGD) Screen | `select` |  |  |  |
| Grief & Bereavement Counseling | Grief Assessment | `functionalImpact` | Functional Impact | `textarea` | Y |  |  |
| Grief & Bereavement Counseling | Intervention & Plan | `interventionType` | Intervention Type | `select` | Y |  |  |
| Grief & Bereavement Counseling | Intervention & Plan | `sessionContent` | Session Content / Key Themes | `textarea` | Y |  |  |
| Grief & Bereavement Counseling | Intervention & Plan | `nextVisit` | Next Session | `date` |  |  |  |
| Grief & Bereavement Counseling | Intervention & Plan | `referrals` | Referrals / Resources | `textarea` |  |  |  |

### Gynecology — `gynecology_cf`

Screen: 2 page(s) · 8 section(s) · 68 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| GYN Assessment | Visit | `patientId` | Patient | `lookup` | Y |  |  |
| GYN Assessment | Visit | `assessmentDate` | Date | `date` |  |  |  |
| GYN Assessment | Visit | `assessedBy` | Provider | `text` |  |  |  |
| GYN Assessment | Visit | `visitReason` | Visit Reason | `select` |  |  |  |
| GYN Assessment | Visit | `status` | Status | `select` |  |  |  |
| GYN Assessment | Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| GYN Assessment | Menstrual History | `lmpDate` | LMP Date | `date` |  |  |  |
| GYN Assessment | Menstrual History | `cycleLengthDays` | Cycle Length (days) | `number` |  |  |  |
| GYN Assessment | Menstrual History | `flowDurationDays` | Flow Duration (days) | `number` |  |  |  |
| GYN Assessment | Menstrual History | `flowHeaviness` | Flow Heaviness | `select` |  |  |  |
| GYN Assessment | Menstrual History | `dysmenorrheaSeverity` | Dysmenorrhea (0-10) | `number` |  |  |  |
| GYN Assessment | Menstrual History | `amenorrhea` | Amenorrhea | `checkbox` |  |  |  |
| GYN Assessment | Menstrual History | `irregularCycles` | Irregular Cycles | `checkbox` |  |  |  |
| GYN Assessment | Menstrual History | `intermenstrualBleeding` | Intermenstrual Bleeding | `checkbox` |  |  |  |
| GYN Assessment | Menstrual History | `postcoitalBleeding` | Postcoital Bleeding | `checkbox` |  |  |  |
| GYN Assessment | Pelvic / GYN Exam | `cervixAppearance` | Cervix Appearance | `text` |  |  |  |
| GYN Assessment | Pelvic / GYN Exam | `uterusPosition` | Uterus Position | `select` |  |  |  |
| GYN Assessment | Pelvic / GYN Exam | `uterusSize` | Uterus Size | `text` |  |  |  |
| GYN Assessment | Pelvic / GYN Exam | `adnexalMassRight` | Right Adnexa | `text` |  |  |  |
| GYN Assessment | Pelvic / GYN Exam | `adnexalMassLeft` | Left Adnexa | `text` |  |  |  |
| GYN Assessment | Pelvic / GYN Exam | `pelvicFloorLaxity` | Pelvic Floor Laxity | `select` |  |  |  |
| GYN Assessment | Reproductive History & Contraception | `gravida` | Gravida | `number` |  |  |  |
| GYN Assessment | Reproductive History & Contraception | `para` | Para | `number` |  |  |  |
| GYN Assessment | Reproductive History & Contraception | `abortus` | Abortus | `number` |  |  |  |
| GYN Assessment | Reproductive History & Contraception | `ectopicCount` | Ectopic | `number` |  |  |  |
| GYN Assessment | Reproductive History & Contraception | `contraceptionCurrent` | Current Contraception | `text` |  |  |  |
| GYN Assessment | Reproductive History & Contraception | `contraceptionStartDate` | Contraception Start | `date` |  |  |  |
| GYN Assessment | PCOS / Endocrine | `pcosDiagnosis` | PCOS Diagnosis | `checkbox` |  |  |  |
| GYN Assessment | PCOS / Endocrine | `freeTosteronePgMl` | Free Testosterone (pg/mL) | `number` |  |  |  |
| GYN Assessment | PCOS / Endocrine | `dheasUgDl` | DHEAS (µg/dL) | `number` |  |  |  |
| GYN Assessment | PCOS / Endocrine | `lhMiuMl` | LH (mIU/mL) | `number` |  |  |  |
| GYN Assessment | PCOS / Endocrine | `fshMiuMl` | FSH (mIU/mL) | `number` |  |  |  |
| GYN Assessment | PCOS / Endocrine | `amhNgMl` | AMH (ng/mL) | `number` |  |  |  |
| GYN Assessment | PCOS / Endocrine | `antralFollicleCount` | Antral Follicle Count | `number` |  |  |  |
| GYN Assessment | Menopause | `menopausalStatus` | Menopausal Status | `select` |  |  |  |
| GYN Assessment | Menopause | `menopauseAge` | Age at Menopause | `number` |  |  |  |
| GYN Assessment | Menopause | `hotFlashes` | Hot Flashes | `checkbox` |  |  |  |
| GYN Assessment | Menopause | `vaginalAtrophy` | Vaginal Atrophy | `checkbox` |  |  |  |
| GYN Assessment | Menopause | `hrtCurrent` | HRT Current | `checkbox` |  |  |  |
| GYN Assessment | Menopause | `hrtName` | HRT Agent | `text` |  |  |  |
| GYN Assessment | Preventive Screening | `lastPapDate` | Last Pap Date | `date` |  |  |  |
| GYN Assessment | Preventive Screening | `lastPapResult` | Last Pap Result | `text` |  |  |  |
| GYN Assessment | Preventive Screening | `lastMammogramDate` | Last Mammogram Date | `date` |  |  |  |
| GYN Assessment | Preventive Screening | `lastMammogramResult` | Last Mammogram Result | `text` |  |  |  |
| GYN Assessment | Preventive Screening | `boneDensityTScore` | Bone Density T-Score | `number` |  |  |  |
| GYN Assessment | Preventive Screening | `plan` | Assessment & Plan | `textarea` |  |  |  |
| GYN Assessment | Preventive Screening | `followUpInterval` | Follow-Up Interval | `text` |  |  |  |
| Prenatal Records | Prenatal Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Prenatal Records | Prenatal Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Prenatal Records | Prenatal Visit | `provider` | Provider | `text` |  |  |  |
| Prenatal Records | Prenatal Visit | `gestationalAgeWeeks` | GA Weeks | `number` |  |  |  |
| Prenatal Records | Prenatal Visit | `gestationalAgeDays` | GA Days | `number` |  |  |  |
| Prenatal Records | Prenatal Visit | `lmpDate` | LMP Date | `date` |  |  |  |
| Prenatal Records | Prenatal Visit | `edcLmp` | EDC by LMP | `date` |  |  |  |
| Prenatal Records | Prenatal Visit | `edcUltrasound` | EDC by US | `date` |  |  |  |
| Prenatal Records | Prenatal Visit | `edcUsed` | EDC Used | `date` |  |  |  |
| Prenatal Records | Prenatal Visit | `gravida` | Gravida | `number` |  |  |  |
| Prenatal Records | Prenatal Visit | `para` | Para | `number` |  |  |  |
| Prenatal Records | Prenatal Visit | `weightLbs` | Weight (lbs) | `number` |  |  |  |
| Prenatal Records | Prenatal Visit | `bpSystolic` | BP Systolic | `number` |  |  |  |
| Prenatal Records | Prenatal Visit | `bpDiastolic` | BP Diastolic | `number` |  |  |  |
| Prenatal Records | Prenatal Visit | `edemGrade` | Edema | `text` |  |  |  |
| Prenatal Records | Prenatal Visit | `fundalHeightCm` | Fundal Height (cm) | `number` |  |  |  |
| Prenatal Records | Prenatal Visit | `fetalPresentation` | Fetal Presentation | `select` |  |  |  |
| Prenatal Records | Prenatal Visit | `fetalHeartRateBpm` | FHR (bpm) | `number` |  |  |  |
| Prenatal Records | Prenatal Visit | `gbsStatus` | GBS Status | `select` |  |  |  |
| Prenatal Records | Prenatal Visit | `gdmScreen` | GDM Screen | `select` |  |  |  |
| Prenatal Records | Prenatal Visit | `notes` | Notes | `textarea` |  |  |  |

### HPI — `encounter_hpi_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| History of Present Illness (HPI) | Context | `patientId` | Patient | `typeahead` | Y |  |  |
| History of Present Illness (HPI) | Context | `encounterId` | Encounter ID | `text` | Y |  |  |
| History of Present Illness (HPI) | Context | `hpiDate` | Date | `date` | Y |  |  |
| History of Present Illness (HPI) | Chief Complaint | `chiefComplaint` | Chief Complaint | `text` | Y |  |  |
| History of Present Illness (HPI) | Chief Complaint | `location` | Location | `text` |  |  |  |
| History of Present Illness (HPI) | Chief Complaint | `radiation` | Radiation | `text` |  |  |  |
| History of Present Illness (HPI) | Chief Complaint | `quality` | Quality / Character | `select` |  |  |  |
| History of Present Illness (HPI) | Chief Complaint | `severity` | Severity (0-10) | `range` |  |  |  |
| History of Present Illness (HPI) | Chief Complaint | `onset` | Onset | `text` |  |  |  |
| History of Present Illness (HPI) | Chief Complaint | `duration` | Duration | `text` |  |  |  |
| History of Present Illness (HPI) | Chief Complaint | `timing` | Timing | `select` |  |  |  |
| History of Present Illness (HPI) | Chief Complaint | `context` | Context / Setting | `textarea` |  |  |  |
| History of Present Illness (HPI) | Chief Complaint | `aggravating` | Aggravating Factors | `textarea` |  |  |  |
| History of Present Illness (HPI) | Chief Complaint | `relieving` | Relieving Factors | `textarea` |  |  |  |
| History of Present Illness (HPI) | Chief Complaint | `associatedSymptoms` | Associated Symptoms | `textarea` |  |  |  |
| History of Present Illness (HPI) | HPI Narrative | `hpiComplete` | HPI documented and complete | `checkbox` |  |  |  |
| History of Present Illness (HPI) | HPI Narrative | `hpiFreeText` | HPI Narrative (free text) | `textarea` |  |  |  |

### HTN Visit — `hypertension_visit_cf`

Screen: 1 page(s) · 4 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hypertension Management Visit | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Hypertension Management Visit | Patient & Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Hypertension Management Visit | Patient & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| Hypertension Management Visit | Blood Pressure Readings | `bp1` | BP Reading 1 (after 5 min rest) | `text` |  |  |  |
| Hypertension Management Visit | Blood Pressure Readings | `bp2` | BP Reading 2 (2 min later) | `text` |  |  |  |
| Hypertension Management Visit | Blood Pressure Readings | `bpAverage` | Average BP | `text` |  |  |  |
| Hypertension Management Visit | Blood Pressure Readings | `bpArm` | Arm Used | `select` |  |  |  |
| Hypertension Management Visit | Blood Pressure Readings | `bpPosition` | Position | `select` |  |  |  |
| Hypertension Management Visit | Blood Pressure Readings | `orthostatic` | Orthostatic BP measured (suspected hypotension) | `checkbox` |  |  |  |
| Hypertension Management Visit | Blood Pressure Readings | `homeBpLog` | Home BP Monitoring | `select` |  |  |  |
| Hypertension Management Visit | Blood Pressure Readings | `avgHomeBp` | Average Home BP (if available) | `text` |  |  |  |
| Hypertension Management Visit | BP Target & Classification | `htnStage` | HTN Stage / Classification | `select` |  |  |  |
| Hypertension Management Visit | BP Target & Classification | `bpGoal` | Individualized BP Goal | `select` |  |  |  |
| Hypertension Management Visit | BP Target & Classification | `atGoal` | At BP Goal? | `select` |  |  |  |
| Hypertension Management Visit | Medications & Plan | `currentAntihypertensives` | Current Antihypertensive Medications | `textarea` |  |  |  |
| Hypertension Management Visit | Medications & Plan | `medicationAdherence` | Medication Adherence | `select` |  |  |  |
| Hypertension Management Visit | Medications & Plan | `sideEffects` | Side Effects Reported | `textarea` |  |  |  |
| Hypertension Management Visit | Medications & Plan | `medicationChanges` | Medication Changes | `textarea` |  |  |  |
| Hypertension Management Visit | Medications & Plan | `lifestyleRecommendations` | Lifestyle Recommendations | `textarea` |  |  |  |
| Hypertension Management Visit | Medications & Plan | `endOrganDamage` | Target Organ Damage Assessment | `textarea` |  |  |  |
| Hypertension Management Visit | Medications & Plan | `nextHtnVisit` | Next Visit Interval | `select` |  |  |  |

### Head & Neck Oncology — `head_neck_oncology_cf`

Screen: 2 page(s) · 5 section(s) · 86 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Tumor & Staging | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Tumor & Staging | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Tumor & Staging | `providerName` | Oncologist | `text` |  |  |  |
| Evaluation | Tumor & Staging | `cancerType` | Cancer Type | `select` |  |  |  |
| Evaluation | Tumor & Staging | `primarySite` | Primary Site | `text` |  |  |  |
| Evaluation | Tumor & Staging | `histology` | Histology | `text` |  |  |  |
| Evaluation | Tumor & Staging | `icd10` | ICD-10 | `text` |  |  |  |
| Evaluation | Tumor & Staging | `ajccTStage` | T Stage | `text` |  |  |  |
| Evaluation | Tumor & Staging | `ajccNStage` | N Stage | `text` |  |  |  |
| Evaluation | Tumor & Staging | `ajccMStage` | M Stage | `text` |  |  |  |
| Evaluation | Tumor & Staging | `ajccOverallStage` | Overall Stage | `text` |  |  |  |
| Evaluation | Tumor & Staging | `tumorSizeCm` | Tumor Size (cm) | `number` |  |  |  |
| Evaluation | Tumor & Staging | `distantMetastases` | Distant Metastases | `checkbox` |  |  |  |
| Evaluation | Tumor & Staging | `perineuralInvasion` | Perineural Invasion | `checkbox` |  |  |  |
| Evaluation | Tumor & Staging | `extranodalExtension` | Extranodal Extension | `checkbox` |  |  |  |
| Evaluation | Tumor & Staging | `carotidEncasement` | Carotid Encasement | `checkbox` |  |  |  |
| Evaluation | Biomarkers & Molecular | `hpvStatus` | HPV Status | `select` |  |  |  |
| Evaluation | Biomarkers & Molecular | `p16Status` | p16 Status | `select` |  |  |  |
| Evaluation | Biomarkers & Molecular | `pdl1Tps` | PD-L1 TPS (%) | `number` |  |  |  |
| Evaluation | Biomarkers & Molecular | `pdl1Cps` | PD-L1 CPS | `number` |  |  |  |
| Evaluation | Biomarkers & Molecular | `tmb` | TMB (mut/Mb) | `number` |  |  |  |
| Evaluation | Biomarkers & Molecular | `msiStatus` | MSI Status | `select` |  |  |  |
| Evaluation | Biomarkers & Molecular | `egfrMutation` | EGFR Mutation | `checkbox` |  |  |  |
| Evaluation | Biomarkers & Molecular | `ebvStatus` | EBV Status | `text` |  |  |  |
| Evaluation | Biomarkers & Molecular | `thyroglobulin` | Thyroglobulin (ng/mL) | `number` |  |  |  |
| Evaluation | Biomarkers & Molecular | `tshGoal` | TSH Goal | `number` |  |  |  |
| Evaluation | Imaging & Procedures | `ctNeckChestDate` | CT Neck/Chest Date | `date` |  |  |  |
| Evaluation | Imaging & Procedures | `ctResult` | CT Result | `text` |  |  |  |
| Evaluation | Imaging & Procedures | `mriHeadNeckDate` | MRI Head/Neck Date | `date` |  |  |  |
| Evaluation | Imaging & Procedures | `mriResult` | MRI Result | `text` |  |  |  |
| Evaluation | Imaging & Procedures | `petCtDate` | PET/CT Date | `date` |  |  |  |
| Evaluation | Imaging & Procedures | `petCtResult` | PET/CT Result | `text` |  |  |  |
| Evaluation | Imaging & Procedures | `panendoscopyDone` | Panendoscopy Done | `checkbox` |  |  |  |
| Evaluation | Imaging & Procedures | `panendoscopyDate` | Panendoscopy Date | `date` |  |  |  |
| Evaluation | Imaging & Procedures | `laryngoscopyDone` | Laryngoscopy Done | `checkbox` |  |  |  |
| Evaluation | Imaging & Procedures | `feedingTubeCurrent` | Feeding Tube In Place | `checkbox` |  |  |  |
| Evaluation | Imaging & Procedures | `feedingTubeType` | Feeding Tube Type | `text` |  |  |  |
| Evaluation | Imaging & Procedures | `tumorBoardDate` | Tumor Board Date | `date` |  |  |  |
| Evaluation | Imaging & Procedures | `tumorBoardRecommendation` | Tumor Board Recommendation | `textarea` |  |  |  |
| Evaluation | Treatment Plan | `treatmentIntent` | Treatment Intent | `select` |  |  |  |
| Evaluation | Treatment Plan | `surgeryPlanned` | Surgery Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `surgeryType` | Surgery Type | `text` |  |  |  |
| Evaluation | Treatment Plan | `neckDissectionPlanned` | Neck Dissection Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `larynxPreservationIntent` | Larynx Preservation Intent | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `radiationPlanned` | Radiation Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `radiationType` | Radiation Type | `text` |  |  |  |
| Evaluation | Treatment Plan | `imrtDoseGy` | IMRT Dose (Gy) | `number` |  |  |  |
| Evaluation | Treatment Plan | `chemotherapyPlanned` | Chemotherapy Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `concurrentChemoradiation` | Concurrent Chemoradiation | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `cisplatinPlanned` | Cisplatin Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `pembrolizumabPlanned` | Pembrolizumab Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `cetuximabPlanned` | Cetuximab Planned | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `clinicalTrialOffered` | Clinical Trial Offered | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `clinicalTrialName` | Clinical Trial Name | `text` |  |  |  |
| Evaluation | Treatment Plan | `palliativeCareReferral` | Palliative Care Referral | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `dentalClearanceDone` | Dental Clearance Done | `checkbox` |  |  |  |
| Evaluation | Treatment Plan | `ecogPerformanceStatus` | ECOG PS | `number` |  |  |  |
| Evaluation | Treatment Plan | `treatmentPlan` | Treatment Plan | `textarea` |  |  |  |
| Evaluation | Treatment Plan | `evalNotes` | Notes | `textarea` |  |  |  |
| Treatment Visits | Treatment Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Treatment Visits | Treatment Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Treatment Visits | Treatment Visit | `visitType` | Visit Type | `select` |  |  |  |
| Treatment Visits | Treatment Visit | `treatmentResponse` | Treatment Response | `select` |  |  |  |
| Treatment Visits | Treatment Visit | `recurrenceSuspected` | Recurrence Suspected | `checkbox` |  |  |  |
| Treatment Visits | Treatment Visit | `chemoCycle` | Chemo Cycle # | `number` |  |  |  |
| Treatment Visits | Treatment Visit | `chemoAgent` | Chemo Agent | `text` |  |  |  |
| Treatment Visits | Treatment Visit | `rtFractionNumber` | RT Fraction # | `number` |  |  |  |
| Treatment Visits | Treatment Visit | `rtTotalFractions` | RT Total Fractions | `number` |  |  |  |
| Treatment Visits | Treatment Visit | `ioAgentCurrent` | IO Agent | `text` |  |  |  |
| Treatment Visits | Treatment Visit | `ioCycle` | IO Cycle # | `number` |  |  |  |
| Treatment Visits | Treatment Visit | `mucositisGrade` | Mucositis Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Treatment Visit | `dysphagiaGrade` | Dysphagia Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Treatment Visit | `xerostomiaGrade` | Xerostomia Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Treatment Visit | `dermatitisGrade` | Dermatitis Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Treatment Visit | `fatigueGrade` | Fatigue Grade (0–4) | `number` |  |  |  |
| Treatment Visits | Treatment Visit | `osteoradionecrosis` | Osteonecrosis | `checkbox` |  |  |  |
| Treatment Visits | Treatment Visit | `hypothyroidism` | Hypothyroidism | `checkbox` |  |  |  |
| Treatment Visits | Treatment Visit | `feedingTubeDependent` | Feeding Tube Dependent | `checkbox` |  |  |  |
| Treatment Visits | Treatment Visit | `doseHeld` | Dose Held | `checkbox` |  |  |  |
| Treatment Visits | Treatment Visit | `holdReason` | Hold Reason | `text` |  |  |  |
| Treatment Visits | Treatment Visit | `ioPermanentlyDiscontinued` | IO Permanently D/C'd | `checkbox` |  |  |  |
| Treatment Visits | Treatment Visit | `ecogPerformanceStatus` | ECOG PS | `number` |  |  |  |
| Treatment Visits | Treatment Visit | `painScore` | Pain Score (0–10) | `number` |  |  |  |
| Treatment Visits | Treatment Visit | `nextVisitDate` | Next Visit | `date` |  |  |  |
| Treatment Visits | Treatment Visit | `nextImagingDate` | Next Imaging Date | `date` |  |  |  |
| Treatment Visits | Treatment Visit | `visitNotes` | Notes | `textarea` |  |  |  |

### Headache Clinic — `headache_clinic_cf`

Screen: 2 page(s) · 5 section(s) · 50 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Evaluation | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Evaluation | `providerName` | Neurologist | `text` |  |  |  |
| Evaluation | Evaluation | `evalType` | Eval Type | `select` |  |  |  |
| Evaluation | Evaluation | `headacheType` | Headache Type | `select` |  |  |  |
| Evaluation | Evaluation | `ichd3Code` | ICHD-3 Code | `text` |  |  |  |
| Evaluation | Evaluation | `episodicVsChronic` | Pattern | `select` |  |  |  |
| Evaluation | Evaluation | `headacheDaysPerMonth` | Headache Days / Month | `number` |  |  |  |
| Evaluation | Migraine Features | `migraineWithAura` | Migraine with Aura | `checkbox` |  |  |  |
| Evaluation | Migraine Features | `auraType` | Aura Type | `text` |  |  |  |
| Evaluation | Migraine Features | `migraineWithoutAura` | Migraine without Aura | `checkbox` |  |  |  |
| Evaluation | Migraine Features | `typicalSide` | Typical Side | `select` |  |  |  |
| Evaluation | Migraine Features | `painQuality` | Pain Quality | `select` |  |  |  |
| Evaluation | Migraine Features | `painSeverityNrs` | Pain Severity (NRS 0-10) | `number` |  |  |  |
| Evaluation | Migraine Features | `photophobia` | Photophobia | `checkbox` |  |  |  |
| Evaluation | Migraine Features | `phonophobia` | Phonophobia | `checkbox` |  |  |  |
| Evaluation | Migraine Features | `nausea` | Nausea | `checkbox` |  |  |  |
| Evaluation | Migraine Features | `vomiting` | Vomiting | `checkbox` |  |  |  |
| Evaluation | Disability & Scores | `hit6Score` | HIT-6 Score | `number` |  |  |  |
| Evaluation | Disability & Scores | `midasScore` | MIDAS Score | `number` |  |  |  |
| Evaluation | Disability & Scores | `midasGrade` | MIDAS Grade | `select` |  |  |  |
| Evaluation | Disability & Scores | `medicationOveruseHeadache` | MOH | `checkbox` |  |  |  |
| Evaluation | Disability & Scores | `mohMedication` | MOH Medication | `text` |  |  |  |
| Evaluation | Disability & Scores | `acuteMedicationDaysPerMonth` | Acute Med Days/Month | `number` |  |  |  |
| Evaluation | Treatment History | `nsaidsEffective` | NSAIDs Effective | `checkbox` |  |  |  |
| Evaluation | Treatment History | `tripanResponse` | Triptan Response | `select` |  |  |  |
| Evaluation | Treatment History | `erVisitsPastYear` | ER Visits Past Year | `number` |  |  |  |
| Evaluation | Treatment History | `onabotulinumtoxinaTrieD` | Botox (OnabotulinumtoxinA) Tried | `checkbox` |  |  |  |
| Evaluation | Treatment History | `botoxInjectionsCount` | Botox Injection Count | `number` |  |  |  |
| Evaluation | Treatment History | `nerveBlockTried` | Nerve Block Tried | `checkbox` |  |  |  |
| Evaluation | Treatment History | `nerveBlockType` | Nerve Block Type | `text` |  |  |  |
| Evaluation | Treatment History | `behavioralTherapy` | Behavioral Therapy | `checkbox` |  |  |  |
| Evaluation | Treatment History | `biofeedback` | Biofeedback | `checkbox` |  |  |  |
| Follow-Up Visits | Headache Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Follow-Up Visits | Headache Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Follow-Up Visits | Headache Visit | `headacheDaysPerMonth` | Headache Days / Month | `number` |  |  |  |
| Follow-Up Visits | Headache Visit | `migraineDaysPerMonth` | Migraine Days / Month | `number` |  |  |  |
| Follow-Up Visits | Headache Visit | `worstNrs` | Worst Pain (NRS) | `number` |  |  |  |
| Follow-Up Visits | Headache Visit | `averageNrs` | Average Pain (NRS) | `number` |  |  |  |
| Follow-Up Visits | Headache Visit | `hit6Score` | HIT-6 | `number` |  |  |  |
| Follow-Up Visits | Headache Visit | `midasScore` | MIDAS | `number` |  |  |  |
| Follow-Up Visits | Headache Visit | `acuteMedicationDays` | Acute Med Days | `number` |  |  |  |
| Follow-Up Visits | Headache Visit | `mohConcern` | MOH Concern | `checkbox` |  |  |  |
| Follow-Up Visits | Headache Visit | `cgrnMabCurrent` | Current CGRP mAb | `text` |  |  |  |
| Follow-Up Visits | Headache Visit | `cgrnMabResponse` | CGRP mAb Response | `select` |  |  |  |
| Follow-Up Visits | Headache Visit | `botoxSessionToday` | Botox Session Today | `checkbox` |  |  |  |
| Follow-Up Visits | Headache Visit | `botoxUnits` | Botox Units | `number` |  |  |  |
| Follow-Up Visits | Headache Visit | `treatmentResponse` | Overall Response | `select` |  |  |  |
| Follow-Up Visits | Headache Visit | `nextVisitDate` | Next Visit | `date` |  |  |  |
| Follow-Up Visits | Headache Visit | `visitNotes` | Notes | `textarea` |  |  |  |

### Health Maintenance — `health_maintenance_cf`

Screen: 1 page(s) · 4 section(s) · 29 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Health Maintenance & Preventive Schedule | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Health Maintenance & Preventive Schedule | Immunization History | `influenzaLastDate` | Influenza Last Date | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Immunization History | `influenzaNext` | Influenza Next Due | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Immunization History | `pneumococcalPpsv23Date` | PPSV23 (Pneumococcal) Date | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Immunization History | `pneumococcalPcv20Date` | PCV20 (Pneumococcal) Date | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Immunization History | `zosterDate` | Shingrix (Zoster) Dose 1 | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Immunization History | `zosterDose2Date` | Shingrix (Zoster) Dose 2 | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Immunization History | `tdapDate` | Tdap/Td Date | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Immunization History | `tdapNext` | Td Booster Next Due | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Immunization History | `covidVaxStatus` | COVID-19 Vaccine Status | `select` |  |  |  |
| Health Maintenance & Preventive Schedule | Immunization History | `hpvStatus` | HPV Vaccine Status (under 45) | `select` |  |  |  |
| Health Maintenance & Preventive Schedule | Cancer Screenings | `colonoscopyDate` | Last Colonoscopy | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Cancer Screenings | `colonoscopyNext` | Next Colonoscopy Due | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Cancer Screenings | `mammogramDate` | Last Mammogram (females) | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Cancer Screenings | `mammogramNext` | Next Mammogram Due | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Cancer Screenings | `papDate` | Last Pap Smear (females) | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Cancer Screenings | `papNext` | Next Pap Due | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Cancer Screenings | `ldctDate` | Last Low-Dose CT (lung cancer, smokers) | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Cancer Screenings | `ldctNext` | Next LDCT Due | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Cancer Screenings | `psaDate` | Last PSA (males 50+) | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Cancer Screenings | `dexa` | Last DEXA Scan (osteoporosis, females 65+) | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Routine Lab Surveillance | `hba1cDate` | Last HbA1c (diabetics) | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Routine Lab Surveillance | `hba1cNext` | HbA1c Due | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Routine Lab Surveillance | `lipidDate` | Last Lipid Panel | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Routine Lab Surveillance | `lipidNext` | Lipid Panel Due | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Routine Lab Surveillance | `tshDate` | Last TSH (thyroid) | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Routine Lab Surveillance | `cmpDate` | Last CMP (kidney function/electrolytes) | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Routine Lab Surveillance | `cmpNext` | CMP Due | `date` |  |  |  |
| Health Maintenance & Preventive Schedule | Routine Lab Surveillance | `uaDate` | Last Urine Microalbumin (diabetics) | `date` |  |  |  |

### Health Risk Appraisal — `health_risk_appraisal_cf`

Screen: 1 page(s) · 4 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Health Risk Appraisal | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Health Risk Appraisal | Patient | `completedDate` | Date Completed | `date` | Y |  |  |
| Health Risk Appraisal | Patient | `completedBy` | Reviewed By | `typeahead` |  |  |  |
| Health Risk Appraisal | Lifestyle & Risk Factors | `smokingHra` | Tobacco Use | `select` | Y |  |  |
| Health Risk Appraisal | Lifestyle & Risk Factors | `alcoholHra` | Alcohol Use | `select` | Y |  |  |
| Health Risk Appraisal | Lifestyle & Risk Factors | `physicalActivity` | Physical Activity Level | `select` | Y |  |  |
| Health Risk Appraisal | Lifestyle & Risk Factors | `dietHra` | Diet Quality (self-reported) | `select` | Y |  |  |
| Health Risk Appraisal | Lifestyle & Risk Factors | `stressLevel` | Stress Level | `select` | Y |  |  |
| Health Risk Appraisal | Lifestyle & Risk Factors | `sleepHours` | Sleep Quality / Duration | `select` | Y |  |  |
| Health Risk Appraisal | Preventive Health Checklist | `lastPcpVisit` | Last PCP Visit | `select` |  |  |  |
| Health Risk Appraisal | Preventive Health Checklist | `flu` | Flu Vaccine This Season | `select` |  |  |  |
| Health Risk Appraisal | Preventive Health Checklist | `covid` | COVID-19 Vaccine Up to Date | `select` |  |  |  |
| Health Risk Appraisal | Preventive Health Checklist | `colonoscopy` | Colorectal Cancer Screen (if age ≥45) | `select` |  |  |  |
| Health Risk Appraisal | Preventive Health Checklist | `bloodPressure` | Blood Pressure — Home Checks | `select` |  |  |  |
| Health Risk Appraisal | Risk Summary & Goals | `primaryRiskFactors` | Primary Risk Factors Identified | `textarea` | Y |  |  |
| Health Risk Appraisal | Risk Summary & Goals | `patientGoals` | Patient Wellness Goals (patient-stated) | `textarea` | Y |  |  |
| Health Risk Appraisal | Risk Summary & Goals | `providerPriorities` | Provider Priorities / Follow-up | `textarea` |  |  |  |

### Hearing Screening — `hearing_screening_cf`

Screen: 1 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hearing Screening & Audiometry | Patient & Indication | `patientId` | Patient | `typeahead` | Y |  |  |
| Hearing Screening & Audiometry | Patient & Indication | `screenDate` | Screening Date | `date` | Y |  |  |
| Hearing Screening & Audiometry | Patient & Indication | `provider` | Provider | `typeahead` | Y |  |  |
| Hearing Screening & Audiometry | Patient & Indication | `indication` | Indication | `select` | Y |  |  |
| Hearing Screening & Audiometry | Screening Results | `screeningMethod` | Screening Method | `select` | Y |  |  |
| Hearing Screening & Audiometry | Screening Results | `rightEar500` | Right Ear — 500 Hz threshold (dB HL) | `number` |  |  |  |
| Hearing Screening & Audiometry | Screening Results | `rightEar1k` | Right Ear — 1000 Hz (dB HL) | `number` |  |  |  |
| Hearing Screening & Audiometry | Screening Results | `rightEar2k` | Right Ear — 2000 Hz (dB HL) | `number` |  |  |  |
| Hearing Screening & Audiometry | Screening Results | `rightEar4k` | Right Ear — 4000 Hz (dB HL) | `number` |  |  |  |
| Hearing Screening & Audiometry | Screening Results | `leftEar500` | Left Ear — 500 Hz (dB HL) | `number` |  |  |  |
| Hearing Screening & Audiometry | Screening Results | `leftEar1k` | Left Ear — 1000 Hz (dB HL) | `number` |  |  |  |
| Hearing Screening & Audiometry | Screening Results | `leftEar2k` | Left Ear — 2000 Hz (dB HL) | `number` |  |  |  |
| Hearing Screening & Audiometry | Screening Results | `leftEar4k` | Left Ear — 4000 Hz (dB HL) | `number` |  |  |  |
| Hearing Screening & Audiometry | Screening Results | `ptaRight` | PTA Right (average 500-4000 Hz, dB HL) | `number` |  |  |  |
| Hearing Screening & Audiometry | Screening Results | `ptaLeft` | PTA Left (average 500-4000 Hz, dB HL) | `number` |  |  |  |
| Hearing Screening & Audiometry | Screening Results | `screeningResult` | Overall Screening Result | `select` | Y |  |  |
| Hearing Screening & Audiometry | Assessment & Plan | `classification` | Hearing Loss Classification | `select` |  |  |  |
| Hearing Screening & Audiometry | Assessment & Plan | `otoscopy` | Otoscopy | `select` |  |  |  |
| Hearing Screening & Audiometry | Assessment & Plan | `hearingPlan` | Plan | `textarea` | Y |  |  |

### Hematology — `hematology_cf`

Screen: 2 page(s) · 7 section(s) · 66 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Assessment | Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Assessment | Visit | `assessmentDate` | Date | `date` |  |  |  |
| Assessment | Visit | `hematologist` | Hematologist | `text` |  |  |  |
| Assessment | Visit | `primaryDiagnosis` | Primary Diagnosis (ICD-10) | `text` |  |  |  |
| Assessment | Visit | `diagnosisCategory` | Diagnosis Category | `select` |  |  |  |
| Assessment | Visit | `status` | Status | `select` |  |  |  |
| Assessment | Visit | `encounterId` | Encounter ID | `text` |  |  |  |
| Assessment | Complete Blood Count | `wbcKUl` | WBC (k/µL) | `number` |  |  |  |
| Assessment | Complete Blood Count | `rbcMUl` | RBC (M/µL) | `number` |  |  |  |
| Assessment | Complete Blood Count | `hemoglobinGDl` | Hemoglobin (g/dL) | `number` |  |  |  |
| Assessment | Complete Blood Count | `hematocritPct` | Hematocrit (%) | `number` |  |  |  |
| Assessment | Complete Blood Count | `mcvFl` | MCV (fL) | `number` |  |  |  |
| Assessment | Complete Blood Count | `mchPg` | MCH (pg) | `number` |  |  |  |
| Assessment | Complete Blood Count | `rdwPct` | RDW (%) | `number` |  |  |  |
| Assessment | Complete Blood Count | `plateletsKUl` | Platelets (k/µL) | `number` |  |  |  |
| Assessment | Complete Blood Count | `mpvFl` | MPV (fL) | `number` |  |  |  |
| Assessment | Differential | `neutrophilsPct` | Neutrophils (%) | `number` |  |  |  |
| Assessment | Differential | `lymphocytesPct` | Lymphocytes (%) | `number` |  |  |  |
| Assessment | Differential | `monocytesPct` | Monocytes (%) | `number` |  |  |  |
| Assessment | Differential | `eosinophilsPct` | Eosinophils (%) | `number` |  |  |  |
| Assessment | Differential | `basophilsPct` | Basophils (%) | `number` |  |  |  |
| Assessment | Differential | `ancKUl` | ANC (k/µL) | `number` |  |  |  |
| Assessment | Differential | `blastsPct` | Blasts (%) | `number` |  |  |  |
| Assessment | Coagulation | `ptSeconds` | PT (sec) | `number` |  |  |  |
| Assessment | Coagulation | `inr` | INR | `number` |  |  |  |
| Assessment | Coagulation | `apttSeconds` | aPTT (sec) | `number` |  |  |  |
| Assessment | Coagulation | `fibrinogenMgDl` | Fibrinogen (mg/dL) | `number` |  |  |  |
| Assessment | Coagulation | `dDimerNgMl` | D-Dimer (ng/mL) | `number` |  |  |  |
| Assessment | Iron / Anemia Workup | `ironUgDl` | Iron (µg/dL) | `number` |  |  |  |
| Assessment | Iron / Anemia Workup | `tibcUgDl` | TIBC (µg/dL) | `number` |  |  |  |
| Assessment | Iron / Anemia Workup | `ferritinNgMl` | Ferritin (ng/mL) | `number` |  |  |  |
| Assessment | Iron / Anemia Workup | `transferrinSaturationPct` | Transferrin Sat (%) | `number` |  |  |  |
| Assessment | Iron / Anemia Workup | `reticulocytePct` | Retic (%) | `number` |  |  |  |
| Assessment | Iron / Anemia Workup | `reticulocyteAbsKUl` | Retic Abs (k/µL) | `number` |  |  |  |
| Assessment | Iron / Anemia Workup | `vitaminB12PgMl` | B12 (pg/mL) | `number` |  |  |  |
| Assessment | Iron / Anemia Workup | `folateNgMl` | Folate (ng/mL) | `number` |  |  |  |
| Assessment | Iron / Anemia Workup | `erythropoietinMuMl` | EPO (mU/mL) | `number` |  |  |  |
| Assessment | Peripheral Smear | `smearPerformed` | Smear Reviewed | `checkbox` |  |  |  |
| Assessment | Peripheral Smear | `smearFindings` | Smear Findings | `textarea` |  |  |  |
| Assessment | Peripheral Smear | `smearReviewedBy` | Reviewed By | `text` |  |  |  |
| Assessment | Peripheral Smear | `ldhUL` | LDH (U/L) | `number` |  |  |  |
| Assessment | Peripheral Smear | `uricAcidMgDl` | Uric Acid (mg/dL) | `number` |  |  |  |
| Assessment | Peripheral Smear | `lacticAcidMmolL` | Lactic Acid (mmol/L) | `number` |  |  |  |
| Assessment | Peripheral Smear | `plan` | Assessment & Plan | `textarea` |  |  |  |
| Assessment | Peripheral Smear | `followUpInterval` | Follow-Up Interval | `text` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `clinician` | Clinician | `text` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `anticoagulant` | Anticoagulant | `text` | Y |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `indication` | Indication | `text` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `inrToday` | INR Today | `number` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `inrTargetLow` | INR Target Low | `number` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `inrTargetHigh` | INR Target High | `number` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `inrInRange` | INR In Range | `checkbox` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `warfarinDoseMg` | Current Warfarin Dose (mg) | `number` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `doseChangeAction` | Dose Change Action | `select` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `newWarfarinDoseMg` | New Dose (mg) | `number` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `bleedingSinceLastVisit` | Bleeding Since Last Visit | `checkbox` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `bleedingSite` | Bleeding Site | `text` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `clotEventSinceLast` | Clot Event Since Last Visit | `checkbox` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `dosesMissed` | Doses Missed | `number` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `newMedications` | New Medications | `text` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `nextInrDate` | Next INR Date | `date` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `bridgeTherapy` | Bridge Therapy | `checkbox` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `bridgeAgent` | Bridge Agent | `text` |  |  |  |
| Anticoagulation Visits | Anticoagulation Visit | `notes` | Notes | `textarea` |  |  |  |

### Home Health Order — `home_health_order_cf`

Screen: 1 page(s) · 4 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Home Health Order / Plan of Care | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Home Health Order / Plan of Care | Patient | `orderDate` | Order Date | `date` | Y |  |  |
| Home Health Order / Plan of Care | Patient | `orderingProvider` | Ordering / Certifying Physician | `typeahead` | Y |  |  |
| Home Health Order / Plan of Care | Patient | `homeHealthAgency` | Home Health Agency | `text` | Y |  |  |
| Home Health Order / Plan of Care | Medicare/Insurance Homebound Criteria | `homeboundStatus` | Homebound Status | `select` | Y |  |  |
| Home Health Order / Plan of Care | Medicare/Insurance Homebound Criteria | `homeboundReason` | Homebound Reason | `textarea` | Y |  |  |
| Home Health Order / Plan of Care | Ordered Services | `skilledNursing` | Skilled Nursing (SN) ordered | `checkbox` |  |  |  |
| Home Health Order / Plan of Care | Ordered Services | `snFrequency` | SN Frequency | `text` |  |  |  |
| Home Health Order / Plan of Care | Ordered Services | `snInstructions` | SN Instructions | `textarea` |  |  |  |
| Home Health Order / Plan of Care | Ordered Services | `physicalTherapy` | Physical Therapy (PT) ordered | `checkbox` |  |  |  |
| Home Health Order / Plan of Care | Ordered Services | `ptFrequency` | PT Frequency | `text` |  |  |  |
| Home Health Order / Plan of Care | Ordered Services | `ptGoals` | PT Goals | `textarea` |  |  |  |
| Home Health Order / Plan of Care | Ordered Services | `occupationalTherapy` | Occupational Therapy (OT) ordered | `checkbox` |  |  |  |
| Home Health Order / Plan of Care | Ordered Services | `speechTherapy` | Speech Therapy (ST) ordered | `checkbox` |  |  |  |
| Home Health Order / Plan of Care | Ordered Services | `socialWork` | Medical Social Work ordered | `checkbox` |  |  |  |
| Home Health Order / Plan of Care | Ordered Services | `homeHealthAide` | Home Health Aide (HHA) ordered | `checkbox` |  |  |  |
| Home Health Order / Plan of Care | Ordered Services | `hhaFrequency` | HHA Frequency | `text` |  |  |  |
| Home Health Order / Plan of Care | Diagnoses & Certifications | `primaryDiagnosis` | Primary Diagnosis (ICD-10) | `text` | Y |  |  |
| Home Health Order / Plan of Care | Diagnoses & Certifications | `secondaryDiagnoses` | Secondary Diagnoses | `textarea` |  |  |  |
| Home Health Order / Plan of Care | Diagnoses & Certifications | `certificationPeriodStart` | Certification Period Start | `date` | Y |  |  |
| Home Health Order / Plan of Care | Diagnoses & Certifications | `certificationPeriodEnd` | Certification Period End | `date` | Y |  |  |

### Home Health Visit — `home_health_note_cf`

Screen: 1 page(s) · 3 section(s) · 15 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Home Health Visit Note | Patient & Visit | `patientId` | Patient | `typeahead` | Y |  |  |
| Home Health Visit Note | Patient & Visit | `visitDate` | Visit Date | `date` | Y |  |  |
| Home Health Visit Note | Patient & Visit | `visitTime` | Visit Start Time | `text` |  |  |  |
| Home Health Visit Note | Patient & Visit | `clinician` | Home Health Clinician | `typeahead` | Y |  |  |
| Home Health Visit Note | Patient & Visit | `clinicianType` | Clinician Type | `select` | Y |  |  |
| Home Health Visit Note | Patient & Visit | `orderSource` | Ordering Provider | `text` |  |  |  |
| Home Health Visit Note | Patient & Visit | `visitPurpose` | Visit Purpose | `select` | Y |  |  |
| Home Health Visit Note | Clinical Assessment | `vitals` | Vitals | `textarea` | Y |  |  |
| Home Health Visit Note | Clinical Assessment | `clinicalFindings` | Clinical Findings / Assessment | `textarea` | Y |  |  |
| Home Health Visit Note | Clinical Assessment | `woundCare` | Wound / Procedure Notes (if applicable) | `textarea` |  |  |  |
| Home Health Visit Note | Patient Education & Plan | `educationProvided` | Patient / Family Education | `textarea` | Y |  |  |
| Home Health Visit Note | Patient Education & Plan | `safetyEnvironment` | Home Safety Assessment | `textarea` |  |  |  |
| Home Health Visit Note | Patient Education & Plan | `coordination` | Care Coordination | `textarea` | Y |  |  |
| Home Health Visit Note | Patient Education & Plan | `nextVisit` | Next Home Visit | `date` |  |  |  |
| Home Health Visit Note | Patient Education & Plan | `additionalVisitsNeeded` | Additional Visits Needed | `select` |  |  |  |

### Hospice / Palliative — `hospice_palliative_cf`

Screen: 1 page(s) · 4 section(s) · 25 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hospice / Palliative Care Consultation | Patient & Consultation | `patientId` | Patient | `typeahead` | Y |  |  |
| Hospice / Palliative Care Consultation | Patient & Consultation | `encounterId` | Encounter ID | `text` |  |  |  |
| Hospice / Palliative Care Consultation | Patient & Consultation | `consultDate` | Consultation Date | `date` | Y |  |  |
| Hospice / Palliative Care Consultation | Patient & Consultation | `consultType` | Consultation Type | `select` | Y |  |  |
| Hospice / Palliative Care Consultation | Patient & Consultation | `primaryDiagnosis` | Primary Terminal / Serious Diagnosis | `typeahead` |  |  |  |
| Hospice / Palliative Care Consultation | Patient & Consultation | `prognosisMonths` | Estimated Prognosis | `select` |  |  |  |
| Hospice / Palliative Care Consultation | Symptom Assessment | `painPalliate` | Pain | `select` |  |  |  |
| Hospice / Palliative Care Consultation | Symptom Assessment | `dyspnea` | Dyspnea / Breathlessness | `select` |  |  |  |
| Hospice / Palliative Care Consultation | Symptom Assessment | `nausea` | Nausea / Vomiting | `select` |  |  |  |
| Hospice / Palliative Care Consultation | Symptom Assessment | `fatigue` | Fatigue | `select` |  |  |  |
| Hospice / Palliative Care Consultation | Symptom Assessment | `delirium` | Delirium / Confusion | `select` |  |  |  |
| Hospice / Palliative Care Consultation | Symptom Assessment | `otherSymptoms` | Other Symptoms | `textarea` |  |  |  |
| Hospice / Palliative Care Consultation | Symptom Assessment | `kps` | Karnofsky Performance Status (KPS) | `select` |  |  |  |
| Hospice / Palliative Care Consultation | Goals of Care Discussion | `goalsDiscussed` | Goals of care discussion completed with patient/family | `checkbox` |  |  |  |
| Hospice / Palliative Care Consultation | Goals of Care Discussion | `presentAtDiscussion` | Present at Discussion | `textarea` |  |  |  |
| Hospice / Palliative Care Consultation | Goals of Care Discussion | `patientWishes` | Patient's Stated Goals / Wishes | `textarea` | Y |  |  |
| Hospice / Palliative Care Consultation | Goals of Care Discussion | `codeStatus` | Code Status | `select` | Y |  |  |
| Hospice / Palliative Care Consultation | Goals of Care Discussion | `molst` | MOLST / POLST completed and signed | `checkbox` |  |  |  |
| Hospice / Palliative Care Consultation | Goals of Care Discussion | `healthcareProxy` | Healthcare Proxy / HCP Name | `text` |  |  |  |
| Hospice / Palliative Care Consultation | Goals of Care Discussion | `advDirective` | Advance directive on file (Living Will, Healthcare Proxy) | `checkbox` |  |  |  |
| Hospice / Palliative Care Consultation | Plan | `hospiceReferred` | Hospice referral placed | `checkbox` |  |  |  |
| Hospice / Palliative Care Consultation | Plan | `hospiceAgency` | Hospice Agency | `text` |  |  |  |
| Hospice / Palliative Care Consultation | Plan | `symptomPlan` | Symptom Management Plan | `textarea` |  |  |  |
| Hospice / Palliative Care Consultation | Plan | `socialSupport` | Social Support / Resources | `textarea` |  |  |  |
| Hospice / Palliative Care Consultation | Plan | `nextReview` | Next Review / Recertification | `select` |  |  |  |

### Hospital Rounding Note — `hospital_rounding_note_cf`

Screen: 1 page(s) · 4 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Hospital Rounding / Inpatient Progress Note | Patient & Admission | `patientId` | Patient | `typeahead` | Y |  |  |
| Hospital Rounding / Inpatient Progress Note | Patient & Admission | `noteDate` | Rounding Date | `date` | Y |  |  |
| Hospital Rounding / Inpatient Progress Note | Patient & Admission | `noteTime` | Time | `text` |  |  |  |
| Hospital Rounding / Inpatient Progress Note | Patient & Admission | `provider` | Attending Provider | `typeahead` | Y |  |  |
| Hospital Rounding / Inpatient Progress Note | Patient & Admission | `admitDate` | Admission Date | `date` | Y |  |  |
| Hospital Rounding / Inpatient Progress Note | Patient & Admission | `hospitalDay` | Hospital Day | `number` |  |  |  |
| Hospital Rounding / Inpatient Progress Note | Patient & Admission | `admitDx` | Admission Diagnosis | `text` | Y |  |  |
| Hospital Rounding / Inpatient Progress Note | Subjective | `patientReport` | Patient Report / Overnight Events | `textarea` | Y |  |  |
| Hospital Rounding / Inpatient Progress Note | Objective | `vitals` | Vitals (most recent) | `textarea` | Y |  |  |
| Hospital Rounding / Inpatient Progress Note | Objective | `exam` | Physical Exam | `textarea` | Y |  |  |
| Hospital Rounding / Inpatient Progress Note | Objective | `labsStudies` | Labs / Studies | `textarea` | Y |  |  |
| Hospital Rounding / Inpatient Progress Note | Assessment & Plan | `assessmentPlan` | Assessment & Plan (by problem) | `textarea` | Y |  |  |

### ICD�?'CPT Rules — `ICD_CPT_RULES`

Screen: 1 page(s) · 1 section(s) · 10 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ICD�?'CPT Automation Rule | ICD-to-CPT Rule (ECW-BI-29; icd_cpt_rules table; org/practice-scoped; auto-suggests CPT during charge entry given ICD codes) | `icrId` | Rule ID (read-only UUID) | `text` |  |  |  |
| ICD�?'CPT Automation Rule | ICD-to-CPT Rule (ECW-BI-29; icd_cpt_rules table; org/practice-scoped; auto-suggests CPT during charge entry given ICD codes) | `icrIcd10Code` | ICD-10 Code (required; trigger diagnosis) | `text` | Y |  |  |
| ICD�?'CPT Automation Rule | ICD-to-CPT Rule (ECW-BI-29; icd_cpt_rules table; org/practice-scoped; auto-suggests CPT during charge entry given ICD codes) | `icrCptCode` | CPT Code (required; suggested procedure) | `text` | Y |  |  |
| ICD�?'CPT Automation Rule | ICD-to-CPT Rule (ECW-BI-29; icd_cpt_rules table; org/practice-scoped; auto-suggests CPT during charge entry given ICD codes) | `icrCptDescription` | CPT Description (optional; shown in suggestion) | `text` |  |  |  |
| ICD�?'CPT Automation Rule | ICD-to-CPT Rule (ECW-BI-29; icd_cpt_rules table; org/practice-scoped; auto-suggests CPT during charge entry given ICD codes) | `icrCategory` | Category (optional; for grouping; max 80 chars) | `text` |  |  |  |
| ICD�?'CPT Automation Rule | ICD-to-CPT Rule (ECW-BI-29; icd_cpt_rules table; org/practice-scoped; auto-suggests CPT during charge entry given ICD codes) | `icrDefaultFee` | Default Fee (numeric; optional) | `text` |  |  |  |
| ICD�?'CPT Automation Rule | ICD-to-CPT Rule (ECW-BI-29; icd_cpt_rules table; org/practice-scoped; auto-suggests CPT during charge entry given ICD codes) | `icrUnits` | Units (default 1) | `text` |  |  |  |
| ICD�?'CPT Automation Rule | ICD-to-CPT Rule (ECW-BI-29; icd_cpt_rules table; org/practice-scoped; auto-suggests CPT during charge entry given ICD codes) | `icrModifiers` | Modifiers (comma-separated; max 40 chars) | `text` |  |  |  |
| ICD�?'CPT Automation Rule | ICD-to-CPT Rule (ECW-BI-29; icd_cpt_rules table; org/practice-scoped; auto-suggests CPT during charge entry given ICD codes) | `icrAutoSuggest` | Auto-Suggest (true/false; default true) | `checkbox` |  |  |  |
| ICD�?'CPT Automation Rule | ICD-to-CPT Rule (ECW-BI-29; icd_cpt_rules table; org/practice-scoped; auto-suggests CPT during charge entry given ICD codes) | `icrActive` | Active (true/false; default true) | `checkbox` |  |  |  |
