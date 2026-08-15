---
title: "PracticeForceOneCFTrackingFields6"
---

# CF Tracking — Field-Level Detail (part 6 of 41)

Companion to [PracticeForceOneCFTracking](PracticeForceOneCFTracking.html). Domains in this part: **Clinical**.

Every field of every published CF definition in these domains, exactly as the runtime renders it (read live from `/api/form-configurations`). `bind` is the write target when the definition overrides the field id.

## Clinical

### Imaging Orders — `imaging_orders_cf`

Screen: 1 page(s) · 3 section(s) · 16 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Radiology / Imaging Order | Patient & Provider | `patientId` | Patient | `typeahead` | Y |  |  |
| Radiology / Imaging Order | Patient & Provider | `encounterId` | Encounter ID | `text` |  |  |  |
| Radiology / Imaging Order | Patient & Provider | `orderingProvider` | Ordering Provider | `typeahead` | Y |  |  |
| Radiology / Imaging Order | Patient & Provider | `orderDate` | Order Date | `date` | Y |  |  |
| Radiology / Imaging Order | Study Details | `studyType` | Study Type | `select` | Y |  |  |
| Radiology / Imaging Order | Study Details | `bodyPart` | Body Part / Region | `text` | Y |  |  |
| Radiology / Imaging Order | Study Details | `withContrast` | With / Without Contrast | `select` |  |  |  |
| Radiology / Imaging Order | Study Details | `laterality` | Laterality | `select` |  |  |  |
| Radiology / Imaging Order | Study Details | `priority` | Priority | `select` |  |  |  |
| Radiology / Imaging Order | Study Details | `cptCode` | CPT Code | `typeahead` |  |  |  |
| Radiology / Imaging Order | Study Details | `icd10Code` | Diagnosis (ICD-10) | `typeahead` | Y |  |  |
| Radiology / Imaging Order | Study Details | `clinicalHistory` | Clinical History / Indication | `textarea` | Y |  |  |
| Radiology / Imaging Order | Study Details | `specialInstructions` | Special Instructions / Protocol | `textarea` |  |  |  |
| Radiology / Imaging Order | Facility & Auth | `imagingFacility` | Preferred Imaging Facility | `text` |  |  |  |
| Radiology / Imaging Order | Facility & Auth | `priorAuthNumber` | Prior Auth Number (if required) | `text` |  |  |  |
| Radiology / Imaging Order | Facility & Auth | `sendOrder` | Send order electronically to imaging facility | `checkbox` |  |  |  |

### Imaging Orders — `imaging_orders_wq_cf`

Screen: 1 page(s) · 1 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_ORDERS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `NOTIFICATION_DELIVERIES`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PAYER_RULES`, `PRACTICES`, `SOURCE_RECORD_EVENTS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Imaging Order | Study Details | `patient_id` | Patient | `typeahead` |  |  |  |
| Imaging Order | Study Details | `order_name` | Study Name | `text` | Y |  |  |
| Imaging Order | Study Details | `order_code` | CPT Code | `text` |  |  |  |
| Imaging Order | Study Details | `modality` | Modality | `select` |  |  |  |
| Imaging Order | Study Details | `ordering_provider` | Ordering Provider | `text` |  |  |  |
| Imaging Order | Study Details | `ordered_date` | Ordered Date | `date` |  |  |  |
| Imaging Order | Study Details | `clinical_indication` | Clinical Indication | `textarea` |  |  |  |
| Imaging Order | Study Details | `priority` | Priority | `select` |  |  |  |
| Imaging Order | Study Details | `status` | Status | `select` |  |  |  |
| Imaging Order | Study Details | `location` | Imaging Center | `text` |  |  |  |
| Imaging Order | Study Details | `result_notes` | Result Notes | `textarea` |  |  |  |

### Immunization Record — `immunization_schedule_cf`

Screen: 2 page(s) · 3 section(s) · 27 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Immunization History | Patient | `patientId` | Patient | `typeahead` | Y |  |  |
| Immunization History | Patient | `recordDate` | Record Updated Date | `date` | Y |  |  |
| Immunization History | Adult Immunization Status | `fluVax2` | Influenza (annual) | `select` |  |  |  |
| Immunization History | Adult Immunization Status | `covid2` | COVID-19 (updated formulation) | `select` |  |  |  |
| Immunization History | Adult Immunization Status | `tdap` | Tdap / Td (tetanus-diphtheria-pertussis) | `select` |  |  |  |
| Immunization History | Adult Immunization Status | `pneumo` | Pneumococcal (PCV15/20 + PPSV23) | `select` |  |  |  |
| Immunization History | Adult Immunization Status | `shingrix` | Shingrix — Zoster (≥50yo) | `select` |  |  |  |
| Immunization History | Adult Immunization Status | `hepB` | Hepatitis B | `select` |  |  |  |
| Immunization History | Adult Immunization Status | `hepA` | Hepatitis A | `select` |  |  |  |
| Immunization History | Adult Immunization Status | `mmr` | MMR (Measles-Mumps-Rubella) | `select` |  |  |  |
| Immunization History | Adult Immunization Status | `varicella` | Varicella (Chickenpox) | `select` |  |  |  |
| Immunization History | Adult Immunization Status | `hpv` | HPV Vaccine (≤45yo, or up to 26 catch-up) | `select` |  |  |  |
| Immunization History | Adult Immunization Status | `meningococcal` | Meningococcal (≥16yo, college, travelers) | `select` |  |  |  |
| Immunization History | Adult Immunization Status | `rsv` | RSV Vaccine (≥60yo) | `select` |  |  |  |
| Administration Record | Vaccines Administered Today | `vaccineName1` | Vaccine 1 — Name | `text` |  |  |  |
| Administration Record | Vaccines Administered Today | `vaccineDose1` | Vaccine 1 — Dose | `text` |  |  |  |
| Administration Record | Vaccines Administered Today | `vaccineSite1` | Vaccine 1 — Site | `select` |  |  |  |
| Administration Record | Vaccines Administered Today | `vaccineLot1` | Vaccine 1 — Lot Number | `text` |  |  |  |
| Administration Record | Vaccines Administered Today | `vaccineExp1` | Vaccine 1 — Expiration | `text` |  |  |  |
| Administration Record | Vaccines Administered Today | `vaccineName2` | Vaccine 2 — Name | `text` |  |  |  |
| Administration Record | Vaccines Administered Today | `vaccineDose2` | Vaccine 2 — Dose | `text` |  |  |  |
| Administration Record | Vaccines Administered Today | `vaccineSite2` | Vaccine 2 — Site | `select` |  |  |  |
| Administration Record | Vaccines Administered Today | `vaccineLot2` | Vaccine 2 — Lot Number | `text` |  |  |  |
| Administration Record | Vaccines Administered Today | `vaccineExp2` | Vaccine 2 — Expiration | `text` |  |  |  |
| Administration Record | Vaccines Administered Today | `vaccinationConsentSigned` | Vaccine information statement (VIS) given; patient/guardian consent obtained | `checkbox` |  |  |  |
| Administration Record | Vaccines Administered Today | `observationTime` | Observation Period | `text` |  |  |  |
| Administration Record | Vaccines Administered Today | `registrySubmitted` | Immunization registry updated (state registry) | `checkbox` |  |  |  |

### Immunizations — `immunizations_cf`

Screen: 1 page(s) · 1 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Immunization | Vaccine Information | `vaccineName` | Vaccine Name | `text` |  | vaccineName |  |
| Immunization | Vaccine Information | `cvxCode` | CVX Code | `text` |  | cvxCode |  |
| Immunization | Vaccine Information | `doseNumber` | Dose Number | `text` |  | doseNumber |  |
| Immunization | Vaccine Information | `administeredDate` | Date Administered | `text` |  | administeredDate |  |
| Immunization | Vaccine Information | `route` | Route | `text` |  | route |  |
| Immunization | Vaccine Information | `site` | Site | `text` |  | site |  |
| Immunization | Vaccine Information | `lotNumber` | Lot Number | `text` |  | lotNumber |  |
| Immunization | Vaccine Information | `manufacturer` | Manufacturer | `text` |  | manufacturer |  |
| Immunization | Vaccine Information | `administeredBy` | Administered By | `text` |  | administeredBy |  |
| Immunization | Vaccine Information | `status` | Status | `text` |  | status |  |
| Immunization | Vaccine Information | `notes` | Notes | `textarea` |  | notes |  |

### Immunizations — `immunization_admin_cf`

Screen: 1 page(s) · 4 section(s) · 24 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Immunization Administration Record | Patient & Encounter | `patientId` | Patient | `typeahead` | Y |  |  |
| Immunization Administration Record | Patient & Encounter | `encounterId` | Encounter ID | `text` |  |  |  |
| Immunization Administration Record | Patient & Encounter | `administrationDate` | Administration Date | `date` | Y |  |  |
| Immunization Administration Record | Vaccine 1 | `vaccine1Name` | Vaccine Name | `typeahead` | Y |  |  |
| Immunization Administration Record | Vaccine 1 | `vaccine1Cvx` | CVX Code | `text` |  |  |  |
| Immunization Administration Record | Vaccine 1 | `vaccine1Manufacturer` | Manufacturer | `text` |  |  |  |
| Immunization Administration Record | Vaccine 1 | `vaccine1LotNumber` | Lot Number | `text` | Y |  |  |
| Immunization Administration Record | Vaccine 1 | `vaccine1Expiration` | Lot Expiration Date | `date` |  |  |  |
| Immunization Administration Record | Vaccine 1 | `vaccine1DoseNumber` | Dose # in Series | `number` |  |  |  |
| Immunization Administration Record | Vaccine 1 | `vaccine1Route` | Route | `select` |  |  |  |
| Immunization Administration Record | Vaccine 1 | `vaccine1Site` | Injection Site | `select` |  |  |  |
| Immunization Administration Record | Vaccine 1 | `vaccine1Dose` | Dose Amount | `text` |  |  |  |
| Immunization Administration Record | Vaccine 1 | `vaccine1AdministeredBy` | Administered By | `typeahead` | Y |  |  |
| Immunization Administration Record | Vaccine 2 (if multiple vaccines today) | `vaccine2Name` | Vaccine 2 Name | `typeahead` |  |  |  |
| Immunization Administration Record | Vaccine 2 (if multiple vaccines today) | `vaccine2LotNumber` | Lot Number 2 | `text` |  |  |  |
| Immunization Administration Record | Vaccine 2 (if multiple vaccines today) | `vaccine2DoseNumber` | Dose # in Series | `number` |  |  |  |
| Immunization Administration Record | Vaccine 2 (if multiple vaccines today) | `vaccine2Route` | Route 2 | `select` |  |  |  |
| Immunization Administration Record | Vaccine 2 (if multiple vaccines today) | `vaccine2Site` | Injection Site 2 | `select` |  |  |  |
| Immunization Administration Record | Post-Administration | `visProvided` | Vaccine Information Statement (VIS) provided to patient/guardian | `checkbox` |  |  |  |
| Immunization Administration Record | Post-Administration | `visDate` | VIS Edition Date | `date` |  |  |  |
| Immunization Administration Record | Post-Administration | `adverseReaction` | Adverse reaction observed (document below) | `checkbox` |  |  |  |
| Immunization Administration Record | Post-Administration | `adverseReactionDetail` | Adverse Reaction Details | `textarea` |  |  |  |
| Immunization Administration Record | Post-Administration | `observationTime` | Post-Immunization Observation Time (minutes) | `number` |  |  |  |
| Immunization Administration Record | Post-Administration | `nextDoseDate` | Next Dose Due Date | `date` |  |  |  |

### Implantable Devices — `patient_implants_cf`

Screen: 1 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Implantable Device Registry | Patient Context | `patientId` | Patient | `typeahead` | Y |  |  |
| Implantable Device Registry | Implant 1 | `dev1Udi` | UDI (Unique Device Identifier) | `text` |  |  |  |
| Implantable Device Registry | Implant 1 | `dev1Name` | Device Name / Description | `text` | Y |  |  |
| Implantable Device Registry | Implant 1 | `dev1Type` | Device Type | `select` |  |  |  |
| Implantable Device Registry | Implant 1 | `dev1Manufacturer` | Manufacturer | `text` |  |  |  |
| Implantable Device Registry | Implant 1 | `dev1ModelNumber` | Model Number | `text` |  |  |  |
| Implantable Device Registry | Implant 1 | `dev1SerialNumber` | Serial / Lot Number | `text` |  |  |  |
| Implantable Device Registry | Implant 1 | `dev1ImplantDate` | Implant Date | `date` |  |  |  |
| Implantable Device Registry | Implant 1 | `dev1ExpirationDate` | Expiration / Next Check Date | `date` |  |  |  |
| Implantable Device Registry | Implant 1 | `dev1Body` | Body Site / Anatomic Location | `text` |  |  |  |
| Implantable Device Registry | Implant 1 | `dev1MriSafe` | MRI Safe? | `select` |  |  |  |
| Implantable Device Registry | Implant 1 | `dev1Active` | Active / Currently Implanted | `checkbox` |  |  |  |
| Implantable Device Registry | Implant 2 (if applicable) | `dev2Udi` | UDI 2 | `text` |  |  |  |
| Implantable Device Registry | Implant 2 (if applicable) | `dev2Name` | Device 2 Name / Description | `text` |  |  |  |
| Implantable Device Registry | Implant 2 (if applicable) | `dev2Type` | Device 2 Type | `select` |  |  |  |
| Implantable Device Registry | Implant 2 (if applicable) | `dev2Manufacturer` | Manufacturer 2 | `text` |  |  |  |
| Implantable Device Registry | Implant 2 (if applicable) | `dev2ImplantDate` | Implant Date 2 | `date` |  |  |  |
| Implantable Device Registry | Implant 2 (if applicable) | `dev2Body` | Body Site 2 | `text` |  |  |  |
| Implantable Device Registry | Implant 2 (if applicable) | `dev2Active` | Active / Currently Implanted | `checkbox` |  |  |  |

### In-Office Procedures — `in_office_procedures_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| In-Office Procedure Documentation | Procedure Details | `patientId` | Patient | `typeahead` | Y |  |  |
| In-Office Procedure Documentation | Procedure Details | `procedureDate` | Procedure Date | `date` | Y |  |  |
| In-Office Procedure Documentation | Procedure Details | `procedureType` | Procedure Type | `select` | Y |  |  |
| In-Office Procedure Documentation | Procedure Details | `procedureCode` | CPT Code | `typeahead` |  |  |  |
| In-Office Procedure Documentation | Procedure Details | `performingProvider` | Performing Provider | `typeahead` | Y |  |  |
| In-Office Procedure Documentation | Clinical Details | `indication` | Indication / Diagnosis (ICD-10) | `typeahead` | Y |  |  |
| In-Office Procedure Documentation | Clinical Details | `anesthesia` | Anesthesia / Local | `select` |  |  |  |
| In-Office Procedure Documentation | Clinical Details | `consentObtained` | Informed consent obtained | `checkbox` | Y |  |  |
| In-Office Procedure Documentation | Clinical Details | `timeOut` | Pre-procedure time-out performed (site, patient, procedure confirmed) | `checkbox` |  |  |  |
| In-Office Procedure Documentation | Clinical Details | `procedureNotes` | Procedure Notes | `textarea` | Y |  |  |
| In-Office Procedure Documentation | Clinical Details | `specimenSent` | Specimen sent for pathology / culture | `checkbox` |  |  |  |
| In-Office Procedure Documentation | Clinical Details | `specimenDetails` | Specimen Details | `text` |  |  |  |
| In-Office Procedure Documentation | Post-Procedure | `complications` | Intra-Procedure Complications | `select` |  |  |  |
| In-Office Procedure Documentation | Post-Procedure | `patientToleranced` | Patient Tolerated Procedure | `select` |  |  |  |
| In-Office Procedure Documentation | Post-Procedure | `postInstructions` | Post-Procedure Instructions | `textarea` |  |  |  |
| In-Office Procedure Documentation | Post-Procedure | `returnVisit` | Follow-Up Visit | `select` |  |  |  |
| In-Office Procedure Documentation | Post-Procedure | `procedureCompletedNotes` | Completion Notes | `textarea` |  |  |  |

### Infusion Therapy — `infusion_therapy_cf`

Screen: 1 page(s) · 3 section(s) · 22 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| In-Office Infusion Therapy | Patient & Infusion Order | `patientId` | Patient | `typeahead` | Y |  |  |
| In-Office Infusion Therapy | Patient & Infusion Order | `infusionDate` | Infusion Date | `date` | Y |  |  |
| In-Office Infusion Therapy | Patient & Infusion Order | `orderingProvider` | Ordering Provider | `typeahead` | Y |  |  |
| In-Office Infusion Therapy | Patient & Infusion Order | `nurseName` | Infusion Nurse | `typeahead` | Y |  |  |
| In-Office Infusion Therapy | Medication & Administration | `medication` | Medication | `text` | Y |  |  |
| In-Office Infusion Therapy | Medication & Administration | `dose` | Dose | `text` | Y |  |  |
| In-Office Infusion Therapy | Medication & Administration | `diluent` | Diluent / Volume | `text` |  |  |  |
| In-Office Infusion Therapy | Medication & Administration | `rate` | Administration Rate | `text` |  |  |  |
| In-Office Infusion Therapy | Medication & Administration | `infusionNumber` | Infusion # in Series | `text` |  |  |  |
| In-Office Infusion Therapy | Medication & Administration | `lotNumber` | Lot Number / Expiration | `text` |  |  |  |
| In-Office Infusion Therapy | Medication & Administration | `ndcCode` | NDC Code | `text` |  |  |  |
| In-Office Infusion Therapy | Pre / Post Vitals & Access | `preBP` | Pre-Infusion BP | `text` |  |  |  |
| In-Office Infusion Therapy | Pre / Post Vitals & Access | `preHR` | Pre-Infusion HR | `number` |  |  |  |
| In-Office Infusion Therapy | Pre / Post Vitals & Access | `preSpO2` | Pre-Infusion SpO2 (%) | `number` |  |  |  |
| In-Office Infusion Therapy | Pre / Post Vitals & Access | `ivSite` | IV Access Site | `select` |  |  |  |
| In-Office Infusion Therapy | Pre / Post Vitals & Access | `ivGauge` | IV Gauge | `select` |  |  |  |
| In-Office Infusion Therapy | Pre / Post Vitals & Access | `ivAttempts` | IV Attempts | `number` |  |  |  |
| In-Office Infusion Therapy | Pre / Post Vitals & Access | `startTime` | Infusion Start Time | `text` |  |  |  |
| In-Office Infusion Therapy | Pre / Post Vitals & Access | `endTime` | Infusion End Time | `text` |  |  |  |
| In-Office Infusion Therapy | Pre / Post Vitals & Access | `postBP` | Post-Infusion BP | `text` |  |  |  |
| In-Office Infusion Therapy | Pre / Post Vitals & Access | `adverseReaction` | Adverse Reaction | `select` |  |  |  |
| In-Office Infusion Therapy | Pre / Post Vitals & Access | `postInfusionObs` | Post-Infusion Observation Notes | `textarea` |  |  |  |

### Infusion Therapy Visit — `infusion_therapy_visit_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Outpatient Infusion Therapy Visit | Patient & Infusion Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Outpatient Infusion Therapy Visit | Patient & Infusion Details | `infusionDate` | Infusion Date | `date` | Y |  |  |
| Outpatient Infusion Therapy Visit | Patient & Infusion Details | `orderingProvider` | Ordering Provider | `typeahead` | Y |  |  |
| Outpatient Infusion Therapy Visit | Patient & Infusion Details | `infusionAgent` | Infusion Agent / Medication | `text` | Y |  |  |
| Outpatient Infusion Therapy Visit | Patient & Infusion Details | `indication` | Indication | `text` | Y |  |  |
| Outpatient Infusion Therapy Visit | Patient & Infusion Details | `infusionNumber` | Infusion Number / Frequency | `text` |  |  |  |
| Outpatient Infusion Therapy Visit | Pre-Infusion Assessment | `preVitals` | Pre-infusion Vitals | `textarea` | Y |  |  |
| Outpatient Infusion Therapy Visit | Pre-Infusion Assessment | `premedications` | Pre-medications Given | `textarea` | Y |  |  |
| Outpatient Infusion Therapy Visit | Infusion & Monitoring | `doseCalc` | Dose Calculation & Administration | `textarea` | Y |  |  |
| Outpatient Infusion Therapy Visit | Infusion & Monitoring | `monitoring` | Monitoring During Infusion | `textarea` | Y |  |  |
| Outpatient Infusion Therapy Visit | Infusion & Monitoring | `adverseReactions` | Infusion Reactions | `select` | Y |  |  |
| Outpatient Infusion Therapy Visit | Infusion & Monitoring | `postInfusion` | Post-Infusion & Discharge | `textarea` | Y |  |  |

### Injection / Vaccine Admin — `injection_admin_cf`

Screen: 1 page(s) · 4 section(s) · 31 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Administration | Administration | `patientId` | Patient | `lookup` | Y |  |  |
| Administration | Administration | `administeredDate` | Date | `date` |  |  |  |
| Administration | Administration | `administrationTime` | Time | `text` |  |  |  |
| Administration | Administration | `administrationType` | Administration Type | `select` |  |  |  |
| Administration | Administration | `medicationName` | Medication / Vaccine | `text` | Y |  |  |
| Administration | Administration | `cvxCode` | CVX Code | `text` |  |  |  |
| Administration | Administration | `cptCode` | CPT Code | `text` |  |  |  |
| Administration | Administration | `dose` | Dose | `text` |  |  |  |
| Administration | Administration | `route` | Route | `select` |  |  |  |
| Administration | Administration | `site` | Injection Site | `select` |  |  |  |
| Administration | Administration | `administeredBy` | Administered By | `text` |  |  |  |
| Administration | Administration | `orderingProvider` | Ordering Provider | `text` |  |  |  |
| Administration | Administration | `encounterId` | Encounter ID | `text` |  |  |  |
| Administration | Lot / Manufacturer | `lotNumber` | Lot Number | `text` |  |  |  |
| Administration | Lot / Manufacturer | `manufacturer` | Manufacturer | `text` |  |  |  |
| Administration | Lot / Manufacturer | `expirationDate` | Expiration Date | `date` |  |  |  |
| Administration | Lot / Manufacturer | `ndcCode` | NDC | `text` |  |  |  |
| Administration | VFC / VIS | `vfcEligible` | VFC Eligible | `checkbox` |  |  |  |
| Administration | VFC / VIS | `vfcEligibilityCode` | VFC Eligibility Code | `select` |  |  |  |
| Administration | VFC / VIS | `visGiven` | VIS Given | `checkbox` |  |  |  |
| Administration | VFC / VIS | `visPublicationDate` | VIS Publication Date | `date` |  |  |  |
| Administration | VFC / VIS | `visGivenDate` | VIS Given Date | `date` |  |  |  |
| Administration | Series / Observation | `seriesDose` | Series Dose # | `number` |  |  |  |
| Administration | Series / Observation | `seriesComplete` | Series Complete | `checkbox` |  |  |  |
| Administration | Series / Observation | `nextDoseDate` | Next Dose Date | `date` |  |  |  |
| Administration | Series / Observation | `observationMinutes` | Observation (min) | `number` |  |  |  |
| Administration | Series / Observation | `observationCompleted` | Observation Completed | `checkbox` |  |  |  |
| Administration | Series / Observation | `adverseReaction` | Adverse Reaction | `checkbox` |  |  |  |
| Administration | Series / Observation | `adverseReactionNotes` | Adverse Reaction Notes | `textarea` |  |  |  |
| Administration | Series / Observation | `icd10Codes` | ICD-10 Indication Codes | `text` |  |  |  |
| Administration | Series / Observation | `notes` | Notes | `text` |  |  |  |

### Injection Log — `injection_administration_cf`

Screen: 1 page(s) · 3 section(s) · 19 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Injection / Infusion Administration | Patient & Order | `patientId` | Patient | `typeahead` | Y |  |  |
| Injection / Infusion Administration | Patient & Order | `encounterId` | Encounter ID | `text` |  |  |  |
| Injection / Infusion Administration | Patient & Order | `orderedBy` | Ordered By | `typeahead` | Y |  |  |
| Injection / Infusion Administration | Patient & Order | `administeredBy` | Administered By | `typeahead` | Y |  |  |
| Injection / Infusion Administration | Patient & Order | `adminDate` | Administration Date | `date` | Y |  |  |
| Injection / Infusion Administration | Patient & Order | `adminTime` | Administration Time | `text` | Y |  |  |
| Injection / Infusion Administration | Medication | `medicationName` | Medication Name | `typeahead` | Y |  |  |
| Injection / Infusion Administration | Medication | `medicationType` | Type | `select` | Y |  |  |
| Injection / Infusion Administration | Medication | `dosage` | Dose / Strength | `text` | Y |  |  |
| Injection / Infusion Administration | Medication | `route` | Route | `select` | Y |  |  |
| Injection / Infusion Administration | Medication | `site` | Injection Site | `select` |  |  |  |
| Injection / Infusion Administration | Medication | `lotNumber` | Lot Number | `text` | Y |  |  |
| Injection / Infusion Administration | Medication | `expirationDate` | Expiration Date | `date` | Y |  |  |
| Injection / Infusion Administration | Medication | `manufacturer` | Manufacturer | `text` |  |  |  |
| Injection / Infusion Administration | Post-Administration Observation | `observationPeriod` | Observation Period | `select` |  |  |  |
| Injection / Infusion Administration | Post-Administration Observation | `adverseReaction` | Adverse / allergic reaction occurred | `checkbox` |  |  |  |
| Injection / Infusion Administration | Post-Administration Observation | `reactionDescription` | Reaction Description | `textarea` |  |  |  |
| Injection / Infusion Administration | Post-Administration Observation | `nextDoseDate` | Next Dose Due Date (if series) | `date` |  |  |  |
| Injection / Infusion Administration | Post-Administration Observation | `vis` | Vaccine Information Statement (VIS) provided (vaccines) | `checkbox` |  |  |  |

### Inpatient Consult Note — `inpatient_consult_note_cf`

Screen: 1 page(s) · 2 section(s) · 11 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Inpatient Consultation Note | Patient & Request | `patientId` | Patient | `typeahead` | Y |  |  |
| Inpatient Consultation Note | Patient & Request | `consultDate` | Consult Date | `date` | Y |  |  |
| Inpatient Consultation Note | Patient & Request | `consultingProvider` | Consulting Provider | `typeahead` | Y |  |  |
| Inpatient Consultation Note | Patient & Request | `requestingTeam` | Requesting Team / Service | `text` | Y |  |  |
| Inpatient Consultation Note | Patient & Request | `hospital` | Hospital / Facility | `text` | Y |  |  |
| Inpatient Consultation Note | Patient & Request | `consultReason` | Consult Request / Clinical Question | `textarea` | Y |  |  |
| Inpatient Consultation Note | Consultation Note | `pertinentHistory` | Pertinent Medical History | `textarea` | Y |  |  |
| Inpatient Consultation Note | Consultation Note | `pertinentExam` | Pertinent Physical Exam | `textarea` | Y |  |  |
| Inpatient Consultation Note | Consultation Note | `pertinentData` | Pertinent Data / Diagnostics | `textarea` |  |  |  |
| Inpatient Consultation Note | Consultation Note | `impression` | Impression | `textarea` | Y |  |  |
| Inpatient Consultation Note | Consultation Note | `recommendations` | Recommendations | `textarea` | Y |  |  |

### Integrative Medicine — `integrative_medicine_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Integrative Medicine Consultation | Patient & Goals | `patientId` | Patient | `typeahead` | Y |  |  |
| Integrative Medicine Consultation | Patient & Goals | `visitDate` | Visit Date | `date` | Y |  |  |
| Integrative Medicine Consultation | Patient & Goals | `provider` | Provider | `typeahead` | Y |  |  |
| Integrative Medicine Consultation | Patient & Goals | `reasonForVisit` | Reason for Visit | `text` | Y |  |  |
| Integrative Medicine Consultation | Patient & Goals | `patientGoals` | Patient Goals / Expectations | `textarea` | Y |  |  |
| Integrative Medicine Consultation | Lifestyle Assessment | `sleep` | Sleep Quality | `textarea` | Y |  |  |
| Integrative Medicine Consultation | Lifestyle Assessment | `nutrition` | Nutrition / Diet | `textarea` | Y |  |  |
| Integrative Medicine Consultation | Lifestyle Assessment | `movement` | Physical Activity | `textarea` | Y |  |  |
| Integrative Medicine Consultation | Lifestyle Assessment | `stress` | Stress & Mental Wellness | `textarea` | Y |  |  |
| Integrative Medicine Consultation | Lifestyle Assessment | `toxinExposure` | Environmental / Toxin Exposure | `text` |  |  |  |
| Integrative Medicine Consultation | Functional Testing & Plan | `functionalLabs` | Advanced / Functional Labs Ordered | `textarea` |  |  |  |
| Integrative Medicine Consultation | Functional Testing & Plan | `supplementPlan` | Supplement / Natural Medicine Plan | `textarea` | Y |  |  |
| Integrative Medicine Consultation | Functional Testing & Plan | `lifestylePrescription` | Lifestyle Prescription | `textarea` | Y |  |  |

### Interventional Cardiology — `interventional_cardiology_cf`

Screen: 3 page(s) · 5 section(s) · 60 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Cardiac Cath | Procedure | `patientId` | Patient | `lookup` | Y |  |  |
| Cardiac Cath | Procedure | `procedureDate` | Date | `date` |  |  |  |
| Cardiac Cath | Procedure | `indication` | Indication | `text` |  |  |  |
| Cardiac Cath | Procedure | `urgency` | Urgency | `select` |  |  |  |
| Cardiac Cath | Procedure | `arterialAccess` | Arterial Access | `text` |  |  |  |
| Cardiac Cath | Procedure | `sheathSizeFr` | Sheath Size (Fr) | `number` |  |  |  |
| Cardiac Cath | Hemodynamics | `raMeanMmhg` | RA Mean (mmHg) | `number` |  |  |  |
| Cardiac Cath | Hemodynamics | `paSystolicMmhg` | PA Systolic | `number` |  |  |  |
| Cardiac Cath | Hemodynamics | `paDiastolicMmhg` | PA Diastolic | `number` |  |  |  |
| Cardiac Cath | Hemodynamics | `pcwpMeanMmhg` | PCWP Mean | `number` |  |  |  |
| Cardiac Cath | Hemodynamics | `lvedpMmhg` | LVEDP | `number` |  |  |  |
| Cardiac Cath | Hemodynamics | `cardiacOutputFick` | CO Fick (L/min) | `number` |  |  |  |
| Cardiac Cath | Hemodynamics | `cardiacIndex` | CI (L/min/m²) | `number` |  |  |  |
| Cardiac Cath | Hemodynamics | `pvrWu` | PVR (WU) | `number` |  |  |  |
| Cardiac Cath | Coronary Anatomy | `dominantVessel` | Dominant | `select` |  |  |  |
| Cardiac Cath | Coronary Anatomy | `lmcaStenosisPct` | LMCA Stenosis (%) | `number` |  |  |  |
| Cardiac Cath | Coronary Anatomy | `ladStenosisPct` | LAD Stenosis (%) | `number` |  |  |  |
| Cardiac Cath | Coronary Anatomy | `lcxStenosisPct` | LCx Stenosis (%) | `number` |  |  |  |
| Cardiac Cath | Coronary Anatomy | `rcaStenosisPct` | RCA Stenosis (%) | `number` |  |  |  |
| Cardiac Cath | Coronary Anatomy | `lvEfPct` | LV EF (%) | `number` |  |  |  |
| Cardiac Cath | Coronary Anatomy | `mrGrade` | MR Grade | `text` |  |  |  |
| Cardiac Cath | Coronary Anatomy | `contrastVolumeMl` | Contrast (mL) | `number` |  |  |  |
| Cardiac Cath | Coronary Anatomy | `fluoroscopyTimeMin` | Fluoro Time (min) | `number` |  |  |  |
| Cardiac Cath | Coronary Anatomy | `recommendation` | Recommendation | `textarea` |  |  |  |
| PCI Procedures | PCI Procedure | `patientId` | Patient | `lookup` | Y |  |  |
| PCI Procedures | PCI Procedure | `procedureDate` | Date | `date` |  |  |  |
| PCI Procedures | PCI Procedure | `clinicalIndication` | Indication | `select` |  |  |  |
| PCI Procedures | PCI Procedure | `primaryTargetVessel` | Primary Target Vessel | `select` |  |  |  |
| PCI Procedures | PCI Procedure | `lesionType` | Lesion Type | `select` |  |  |  |
| PCI Procedures | PCI Procedure | `calcified` | Calcified | `checkbox` |  |  |  |
| PCI Procedures | PCI Procedure | `chronicTotalOcclusion` | CTO | `checkbox` |  |  |  |
| PCI Procedures | PCI Procedure | `bifurcation` | Bifurcation | `checkbox` |  |  |  |
| PCI Procedures | PCI Procedure | `timiGradePre` | TIMI Pre (0-3) | `number` |  |  |  |
| PCI Procedures | PCI Procedure | `stenosisPctPre` | Stenosis Pre (%) | `number` |  |  |  |
| PCI Procedures | PCI Procedure | `stentType` | Stent Type | `select` |  |  |  |
| PCI Procedures | PCI Procedure | `ivusUsed` | IVUS | `checkbox` |  |  |  |
| PCI Procedures | PCI Procedure | `octUsed` | OCT | `checkbox` |  |  |  |
| PCI Procedures | PCI Procedure | `timiGradePost` | TIMI Post (0-3) | `number` |  |  |  |
| PCI Procedures | PCI Procedure | `stenosisPctPost` | Residual Stenosis (%) | `number` |  |  |  |
| PCI Procedures | PCI Procedure | `technicalSuccess` | Technical Success | `checkbox` |  |  |  |
| PCI Procedures | PCI Procedure | `contrastVolumeMl` | Contrast (mL) | `number` |  |  |  |
| PCI Procedures | PCI Procedure | `procedureNotes` | Notes | `textarea` |  |  |  |
| Structural Heart | Structural Heart Procedure | `patientId` | Patient | `lookup` | Y |  |  |
| Structural Heart | Structural Heart Procedure | `procedureDate` | Date | `date` |  |  |  |
| Structural Heart | Structural Heart Procedure | `procedureType` | Procedure Type | `select` |  |  |  |
| Structural Heart | Structural Heart Procedure | `access` | Access | `text` |  |  |  |
| Structural Heart | Structural Heart Procedure | `tavrValveType` | TAVR Valve Type | `text` |  |  |  |
| Structural Heart | Structural Heart Procedure | `tavrValveSizeMm` | TAVR Valve Size (mm) | `number` |  |  |  |
| Structural Heart | Structural Heart Procedure | `tavrMeanGradientPost` | TAVR Post Mean Gradient (mmHg) | `number` |  |  |  |
| Structural Heart | Structural Heart Procedure | `tavrArGradePost` | TAVR AR Grade Post | `text` |  |  |  |
| Structural Heart | Structural Heart Procedure | `tavrPpiRequired` | PPI Required (TAVR) | `checkbox` |  |  |  |
| Structural Heart | Structural Heart Procedure | `teerMrGradePre` | TEER MR Pre | `text` |  |  |  |
| Structural Heart | Structural Heart Procedure | `teerMrGradePost` | TEER MR Post | `text` |  |  |  |
| Structural Heart | Structural Heart Procedure | `teerClipCount` | TEER Clip Count | `number` |  |  |  |
| Structural Heart | Structural Heart Procedure | `laaoDeviceSizeMm` | WATCHMAN Device Size (mm) | `number` |  |  |  |
| Structural Heart | Structural Heart Procedure | `laaoSealPct` | WATCHMAN Seal (%) | `number` |  |  |  |
| Structural Heart | Structural Heart Procedure | `procedureSuccess` | Procedure Success | `checkbox` |  |  |  |
| Structural Heart | Structural Heart Procedure | `contrastVolumeMl` | Contrast (mL) | `number` |  |  |  |
| Structural Heart | Structural Heart Procedure | `fluoroscopyTimeMin` | Fluoro Time (min) | `number` |  |  |  |
| Structural Heart | Structural Heart Procedure | `procedureNotes` | Notes | `textarea` |  |  |  |

### Interventional Radiology — `interventional_radiology_cf`

Screen: 2 page(s) · 4 section(s) · 54 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Consultation | Consultation | `patientId` | Patient | `lookup` | Y |  |  |
| Consultation | Consultation | `consultDate` | Consult Date | `date` |  |  |  |
| Consultation | Consultation | `irPhysician` | IR Physician | `text` |  |  |  |
| Consultation | Consultation | `referralSource` | Referral Source | `text` |  |  |  |
| Consultation | Consultation | `referringPhysician` | Referring Physician | `text` |  |  |  |
| Consultation | Consultation | `indication` | Indication | `textarea` |  |  |  |
| Consultation | Consultation | `clinicalQuestion` | Clinical Question | `textarea` |  |  |  |
| Consultation | Consultation | `primaryDiagnosis` | Primary Diagnosis | `text` |  |  |  |
| Consultation | Consultation | `keyImagingFindings` | Key Imaging Findings | `textarea` |  |  |  |
| Consultation | Consultation | `relevantPmh` | Relevant PMH | `textarea` |  |  |  |
| Consultation | Coagulation & Contrast | `inr` | INR | `number` |  |  |  |
| Consultation | Coagulation & Contrast | `pltCount` | Platelet Count (K/µL) | `number` |  |  |  |
| Consultation | Coagulation & Contrast | `aptt` | aPTT | `number` |  |  |  |
| Consultation | Coagulation & Contrast | `coagDate` | Labs Date | `date` |  |  |  |
| Consultation | Coagulation & Contrast | `contrastAllergies` | Contrast Allergy | `checkbox` |  |  |  |
| Consultation | Coagulation & Contrast | `priorContrastReactions` | Prior Contrast Reactions | `text` |  |  |  |
| Consultation | Coagulation & Contrast | `contrastPremedicationNeeded` | Premedication Needed | `checkbox` |  |  |  |
| Consultation | Coagulation & Contrast | `premedicationProtocol` | Premedication Protocol | `text` |  |  |  |
| Consultation | Coagulation & Contrast | `dialysisPatient` | Dialysis Patient | `checkbox` |  |  |  |
| Consultation | Coagulation & Contrast | `contrastSafe` | Contrast Safe to Use | `checkbox` |  |  |  |
| Consultation | Planned Procedure | `plannedProcedure` | Planned Procedure | `text` |  |  |  |
| Consultation | Planned Procedure | `procedureCategory` | Category | `select` |  |  |  |
| Consultation | Planned Procedure | `plannedAccessSite` | Planned Access Site | `text` |  |  |  |
| Consultation | Planned Procedure | `urgency` | Urgency | `select` |  |  |  |
| Consultation | Planned Procedure | `plannedDate` | Planned Date | `date` |  |  |  |
| Consultation | Planned Procedure | `informedConsentObtained` | Informed Consent Obtained | `checkbox` |  |  |  |
| Consultation | Planned Procedure | `consentDate` | Consent Date | `date` |  |  |  |
| Consultation | Planned Procedure | `patientAgrees` | Patient Agrees to Proceed | `checkbox` |  |  |  |
| Consultation | Planned Procedure | `consultNotes` | Consult Notes | `textarea` |  |  |  |
| Consultation | Planned Procedure | `plan` | Plan | `textarea` |  |  |  |
| Procedure Reports | Procedure Details | `patientId` | Patient | `lookup` | Y |  |  |
| Procedure Reports | Procedure Details | `procedureDate` | Procedure Date | `date` |  |  |  |
| Procedure Reports | Procedure Details | `irPhysician` | IR Physician | `text` |  |  |  |
| Procedure Reports | Procedure Details | `procedureName` | Procedure Name | `text` |  |  |  |
| Procedure Reports | Procedure Details | `procedureCategory` | Category | `text` |  |  |  |
| Procedure Reports | Procedure Details | `laterality` | Laterality | `select` |  |  |  |
| Procedure Reports | Procedure Details | `anesthesiaType` | Anesthesia Type | `select` |  |  |  |
| Procedure Reports | Procedure Details | `accessSite` | Access Site | `text` |  |  |  |
| Procedure Reports | Procedure Details | `imageGuidance` | Image Guidance | `select` |  |  |  |
| Procedure Reports | Procedure Details | `contrastAgent` | Contrast Agent | `text` |  |  |  |
| Procedure Reports | Procedure Details | `contrastVolumeMl` | Contrast Volume (mL) | `number` |  |  |  |
| Procedure Reports | Procedure Details | `preProcedureFindings` | Pre-Procedure Findings | `textarea` |  |  |  |
| Procedure Reports | Procedure Details | `postFindings` | Post-Procedure Findings | `textarea` |  |  |  |
| Procedure Reports | Procedure Details | `technicalSuccess` | Technical Success | `checkbox` |  |  |  |
| Procedure Reports | Procedure Details | `residualStenosisPct` | Residual Stenosis (%) | `number` |  |  |  |
| Procedure Reports | Procedure Details | `specimenObtained` | Specimen Obtained | `checkbox` |  |  |  |
| Procedure Reports | Procedure Details | `specimenType` | Specimen Type | `text` |  |  |  |
| Procedure Reports | Procedure Details | `complicationsOccurred` | Complications Occurred | `checkbox` |  |  |  |
| Procedure Reports | Procedure Details | `complicationManagement` | Complication Management | `textarea` |  |  |  |
| Procedure Reports | Procedure Details | `estimatedBloodLossMl` | EBL (mL) | `number` |  |  |  |
| Procedure Reports | Procedure Details | `bedRestHours` | Bed Rest (hours) | `number` |  |  |  |
| Procedure Reports | Procedure Details | `followUpImagingPlanned` | Follow-Up Imaging Planned | `text` |  |  |  |
| Procedure Reports | Procedure Details | `clinicalFollowUp` | Clinical Follow-Up | `text` |  |  |  |
| Procedure Reports | Procedure Details | `procedureNotes` | Procedure Notes | `textarea` |  |  |  |

### Keywords Library — `KEYWORDS`

Screen: 1 page(s) · 1 section(s) · 5 field(s) · UI LIVE · DB BUILT

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Quick-Phrase Keyword | Keyword Phrase (ECW-CL-43; keyword_phrases table; abbreviations expanding to canned text; org/practice-scoped; field-context scoped) | `kwId` | Keyword ID (read-only UUID) | `text` |  |  |  |
| Quick-Phrase Keyword | Keyword Phrase (ECW-CL-43; keyword_phrases table; abbreviations expanding to canned text; org/practice-scoped; field-context scoped) | `kwContext` | Context (required: global/assessments/hpi/procedure/treatment) | `text` | Y |  |  |
| Quick-Phrase Keyword | Keyword Phrase (ECW-CL-43; keyword_phrases table; abbreviations expanding to canned text; org/practice-scoped; field-context scoped) | `kwKeyword` | Keyword/Abbreviation (required; max 100 chars) | `text` | Y |  |  |
| Quick-Phrase Keyword | Keyword Phrase (ECW-CL-43; keyword_phrases table; abbreviations expanding to canned text; org/practice-scoped; field-context scoped) | `kwPhrase` | Expanded Phrase Text (required) | `textarea` | Y |  |  |
| Quick-Phrase Keyword | Keyword Phrase (ECW-CL-43; keyword_phrases table; abbreviations expanding to canned text; org/practice-scoped; field-context scoped) | `kwActive` | Active (true/false; default true) | `checkbox` |  |  |  |

### Lab Orders — `lab_orders_wq_cf`

Screen: 1 page(s) · 1 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_ORDERS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `NOTIFICATION_DELIVERIES`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PAYER_RULES`, `PRACTICES`, `SOURCE_RECORD_EVENTS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lab Order | Order Details | `patient_id` | Patient | `typeahead` |  |  |  |
| Lab Order | Order Details | `order_name` | Test Name | `text` | Y |  |  |
| Lab Order | Order Details | `order_code` | Test Code | `text` |  |  |  |
| Lab Order | Order Details | `ordering_provider` | Ordering Provider | `text` |  |  |  |
| Lab Order | Order Details | `ordered_date` | Ordered Date | `date` |  |  |  |
| Lab Order | Order Details | `expected_date` | Expected Date | `date` |  |  |  |
| Lab Order | Order Details | `specimen_type` | Specimen Type | `text` |  |  |  |
| Lab Order | Order Details | `priority` | Priority | `select` |  |  |  |
| Lab Order | Order Details | `status` | Status | `select` |  |  |  |
| Lab Order | Order Details | `notes` | Clinical Notes | `textarea` |  |  |  |

### Lab Orders & Results — `lab_results_cf`

Screen: 1 page(s) · 3 section(s) · 21 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLAIMS`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lab Orders & Results | Lab Order | `patientId` | Patient | `typeahead` | Y |  |  |
| Lab Orders & Results | Lab Order | `encounterId` | Encounter ID | `text` |  |  |  |
| Lab Orders & Results | Lab Order | `orderingProvider` | Ordering Provider | `typeahead` | Y |  |  |
| Lab Orders & Results | Lab Order | `orderDate` | Order Date | `date` | Y |  |  |
| Lab Orders & Results | Lab Order | `labName` | Lab (Quest, LabCorp, In-house...) | `text` |  |  |  |
| Lab Orders & Results | Lab Order | `priority` | Priority | `select` |  |  |  |
| Lab Orders & Results | Lab Order | `fasting` | Fasting required | `checkbox` |  |  |  |
| Lab Orders & Results | Lab Order | `specialInstructions` | Collection / Special Instructions | `text` |  |  |  |
| Lab Orders & Results | Test(s) Ordered | `test1` | Test 1 | `typeahead` | Y |  |  |
| Lab Orders & Results | Test(s) Ordered | `test2` | Test 2 | `typeahead` |  |  |  |
| Lab Orders & Results | Test(s) Ordered | `test3` | Test 3 | `typeahead` |  |  |  |
| Lab Orders & Results | Test(s) Ordered | `test4` | Test 4 | `typeahead` |  |  |  |
| Lab Orders & Results | Test(s) Ordered | `additionalTests` | Additional Tests (free text) | `textarea` |  |  |  |
| Lab Orders & Results | Test(s) Ordered | `diagnosisCode` | Ordering Diagnosis (ICD-10) | `typeahead` | Y |  |  |
| Lab Orders & Results | Results (when received) | `resultsReceivedDate` | Results Received Date | `date` |  |  |  |
| Lab Orders & Results | Results (when received) | `resultsStatus` | Results Status | `select` |  |  |  |
| Lab Orders & Results | Results (when received) | `criticalValues` | Critical value(s) present — requires immediate notification | `checkbox` |  |  |  |
| Lab Orders & Results | Results (when received) | `abnormalValues` | Abnormal value(s) present | `checkbox` |  |  |  |
| Lab Orders & Results | Results (when received) | `resultSummary` | Result Summary / Interpretation | `textarea` |  |  |  |
| Lab Orders & Results | Results (when received) | `resultAction` | Provider Action | `select` |  |  |  |
| Lab Orders & Results | Results (when received) | `resultNote` | Result Communication Notes | `textarea` |  |  |  |

### Lab Result Review — `lab_result_notification_cf`

Screen: 1 page(s) · 4 section(s) · 20 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lab Result Review & Patient Notification | Result Detail | `patientId` | Patient | `typeahead` | Y |  |  |
| Lab Result Review & Patient Notification | Result Detail | `orderId` | Lab Order ID | `text` | Y |  |  |
| Lab Result Review & Patient Notification | Result Detail | `labName` | Lab / Facility | `text` | Y |  |  |
| Lab Result Review & Patient Notification | Result Detail | `collectionDate` | Collection Date | `date` |  |  |  |
| Lab Result Review & Patient Notification | Result Detail | `resultDate` | Result Received Date | `date` |  |  |  |
| Lab Result Review & Patient Notification | Result Detail | `panelName` | Panel / Test Name | `text` |  |  |  |
| Lab Result Review & Patient Notification | Abnormal Results | `criticalFlag` | Critical / panic value — requires immediate action | `checkbox` |  |  |  |
| Lab Result Review & Patient Notification | Abnormal Results | `criticalTest` | Critical Test & Value | `text` |  |  |  |
| Lab Result Review & Patient Notification | Abnormal Results | `criticalActionTaken` | Critical Action Taken | `textarea` |  |  |  |
| Lab Result Review & Patient Notification | Abnormal Results | `abnormalTests` | Other Abnormal Results Summary | `textarea` |  |  |  |
| Lab Result Review & Patient Notification | Abnormal Results | `normalResults` | Overall Result Interpretation | `select` |  |  |  |
| Lab Result Review & Patient Notification | Provider Review | `reviewingProvider` | Reviewed By | `typeahead` | Y |  |  |
| Lab Result Review & Patient Notification | Provider Review | `reviewDate` | Review Date | `date` | Y |  |  |
| Lab Result Review & Patient Notification | Provider Review | `clinicalNote` | Clinical Interpretation / Comment | `textarea` |  |  |  |
| Lab Result Review & Patient Notification | Provider Review | `followUpOrders` | Follow-Up Orders / Actions | `textarea` |  |  |  |
| Lab Result Review & Patient Notification | Patient Notification | `notifyPatient` | Notify patient of results | `checkbox` |  |  |  |
| Lab Result Review & Patient Notification | Patient Notification | `notifyMethod` | Notification Method | `select` |  |  |  |
| Lab Result Review & Patient Notification | Patient Notification | `notifyDate` | Notification Date | `date` |  |  |  |
| Lab Result Review & Patient Notification | Patient Notification | `notifyMessage` | Patient Message | `textarea` |  |  |  |
| Lab Result Review & Patient Notification | Patient Notification | `patientUnderstood` | Patient confirmed understanding (verbal/written) | `checkbox` |  |  |  |

### Lab Results Review — `lab_results_review_cf`

Screen: 1 page(s) · 3 section(s) · 13 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lab Results Review | Patient & Review | `patientId` | Patient | `typeahead` | Y |  |  |
| Lab Results Review | Patient & Review | `reviewDate` | Review Date | `date` | Y |  |  |
| Lab Results Review | Patient & Review | `reviewingProvider` | Reviewing Provider | `typeahead` | Y |  |  |
| Lab Results Review | Patient & Review | `labSource` | Lab Source | `text` |  |  |  |
| Lab Results Review | Patient & Review | `collectionDate` | Collection Date | `date` | Y |  |  |
| Lab Results Review | Results Summary | `orderedTests` | Tests Ordered / Reviewed | `textarea` | Y |  |  |
| Lab Results Review | Results Summary | `criticalValues` | Critical / Panic Values | `textarea` |  |  |  |
| Lab Results Review | Results Summary | `abnormalResults` | Abnormal Results (Not Critical) | `textarea` |  |  |  |
| Lab Results Review | Results Summary | `normalResults` | Normal Results | `textarea` |  |  |  |
| Lab Results Review | Patient Communication | `patientNotified` | Patient Notification Method | `select` | Y |  |  |
| Lab Results Review | Patient Communication | `notificationTime` | Notification Time | `text` |  |  |  |
| Lab Results Review | Patient Communication | `patientResponse` | Patient Response / Understanding | `textarea` |  |  |  |
| Lab Results Review | Patient Communication | `followUpOrders` | Follow-up Orders Placed | `textarea` |  |  |  |

### Lab Review — `lab_result_review_cf`

Screen: 1 page(s) · 3 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Lab Result Review & Patient Notification | Lab Result Details | `patientId` | Patient | `typeahead` | Y |  |  |
| Lab Result Review & Patient Notification | Lab Result Details | `resultDate` | Result Date | `date` | Y |  |  |
| Lab Result Review & Patient Notification | Lab Result Details | `testName` | Lab Test / Panel | `text` | Y |  |  |
| Lab Result Review & Patient Notification | Lab Result Details | `orderedBy` | Ordered By | `typeahead` |  |  |  |
| Lab Result Review & Patient Notification | Lab Result Details | `laboratory` | Laboratory | `text` |  |  |  |
| Lab Result Review & Patient Notification | Lab Result Details | `accessionNumber` | Accession / Order Number | `text` |  |  |  |
| Lab Result Review & Patient Notification | Results & Interpretation | `resultSummary` | Result Summary | `textarea` | Y |  |  |
| Lab Result Review & Patient Notification | Results & Interpretation | `criticalValue` | Critical / panic value reported | `checkbox` |  |  |  |
| Lab Result Review & Patient Notification | Results & Interpretation | `criticalValueDetails` | Critical Value Details | `text` |  |  |  |
| Lab Result Review & Patient Notification | Results & Interpretation | `interpretation` | Overall Interpretation | `select` |  |  |  |
| Lab Result Review & Patient Notification | Results & Interpretation | `clinicalSignificance` | Clinical Significance | `textarea` |  |  |  |
| Lab Result Review & Patient Notification | Patient Notification | `notificationMethod` | Notification Method | `select` |  |  |  |
| Lab Result Review & Patient Notification | Patient Notification | `notificationDate` | Notification Date | `date` | Y |  |  |
| Lab Result Review & Patient Notification | Patient Notification | `notificationBy` | Notification By | `typeahead` |  |  |  |
| Lab Result Review & Patient Notification | Patient Notification | `patientResponse` | Patient Response | `select` |  |  |  |
| Lab Result Review & Patient Notification | Patient Notification | `followUpAction` | Follow-up Actions | `textarea` |  |  |  |
| Lab Result Review & Patient Notification | Patient Notification | `reviewNotes` | Review Notes | `textarea` |  |  |  |

### Labs & Results — `labs_inbox_cf`

Screen: 2 page(s) · 5 section(s) · 35 field(s) · UI LIVE · DB BUILT · tables `CLINICAL_ORDERS`, `CLINICAL_ORDER_RESULTS`, `NOTIFICATION_DELIVERIES`, `PATIENTS`, `PATIENT_INSURANCES`, `PAYER_RULES`, `SOURCE_RECORD_EVENTS`, `USERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Result Detail | Result Information | `testName` | Test Name | `text` |  |  |  |
| Result Detail | Result Information | `analyteCode` | LOINC / Analyte Code | `text` |  |  |  |
| Result Detail | Result Information | `resultValue` | Result Value | `text` |  |  |  |
| Result Detail | Result Information | `resultUnit` | Units | `text` |  |  |  |
| Result Detail | Result Information | `referenceRange` | Reference Range | `text` |  |  |  |
| Result Detail | Result Information | `resultFlag` | Abnormal Flag | `select` |  |  |  |
| Result Detail | Result Information | `status` | Status | `select` |  |  |  |
| Result Detail | Result Information | `collectedAt` | Collected At | `text` |  |  |  |
| Result Detail | Result Information | `receivedAt` | Received At | `text` |  |  |  |
| Result Detail | Result Information | `reportedBy` | Reported By / Lab | `text` |  |  |  |
| Result Detail | Provider Review | `providerNotes` | Provider Notes / Interpretation | `textarea` |  |  |  |
| Result Detail | Provider Review | `patientNotified` | Patient Notified | `checkbox` |  |  |  |
| Result Detail | Provider Review | `notificationMethod` | Notification Method | `select` |  |  |  |
| Result Detail | Provider Review | `followUpAction` | Follow-Up Action | `select` |  |  |  |
| Result Detail | Structured Result Attributes (ECW-CL-29) | `analyteCount` | Number of Analytes | `number` |  |  |  |
| Result Detail | Structured Result Attributes (ECW-CL-29) | `analyte1Name` | Analyte 1 Name | `text` |  |  |  |
| Result Detail | Structured Result Attributes (ECW-CL-29) | `analyte1Value` | Analyte 1 Value | `text` |  |  |  |
| Result Detail | Structured Result Attributes (ECW-CL-29) | `analyte1Units` | Analyte 1 Units | `text` |  |  |  |
| Result Detail | Structured Result Attributes (ECW-CL-29) | `analyte1ReferenceRange` | Analyte 1 Reference Range | `text` |  |  |  |
| Result Detail | Structured Result Attributes (ECW-CL-29) | `analyte1Flag` | Analyte 1 Flag | `select` |  |  |  |
| Result Detail | Structured Result Attributes (ECW-CL-29) | `analyte2Name` | Analyte 2 Name | `text` |  |  |  |
| Result Detail | Structured Result Attributes (ECW-CL-29) | `analyte2Value` | Analyte 2 Value | `text` |  |  |  |
| Result Detail | Structured Result Attributes (ECW-CL-29) | `analyte2Units` | Analyte 2 Units | `text` |  |  |  |
| Result Detail | Structured Result Attributes (ECW-CL-29) | `analyte2Flag` | Analyte 2 Flag | `select` |  |  |  |
| Result Detail | Per-Analyte Trend View (ECW-CL-29) | `trendAnalyte` | Trending Analyte | `text` |  |  |  |
| Result Detail | Per-Analyte Trend View (ECW-CL-29) | `trendHistory` | Historical Values (most recent first) | `textarea` |  |  |  |
| Result Detail | Per-Analyte Trend View (ECW-CL-29) | `trendDirectionality` | Trend Direction | `select` |  |  |  |
| Result Detail | Per-Analyte Trend View (ECW-CL-29) | `clinicalSignificance` | Clinical Significance | `select` |  |  |  |
| Orders Tracking Queue | Order Queue | `orderType` | Order Type | `select` |  |  |  |
| Orders Tracking Queue | Order Queue | `orderedTest` | Test / Study | `text` |  |  |  |
| Orders Tracking Queue | Order Queue | `status` | Status | `select` |  |  |  |
| Orders Tracking Queue | Order Queue | `priority` | Priority | `select` |  |  |  |
| Orders Tracking Queue | Order Queue | `orderingProvider` | Ordering Provider | `text` |  |  |  |
| Orders Tracking Queue | Order Queue | `dueAt` | Due Date | `date` |  |  |  |
| Orders Tracking Queue | Order Queue | `notes` | Notes | `textarea` |  |  |  |

### Letter Templates — `LETTER_TEMPLATES`

Screen: 1 page(s) · 1 section(s) · 7 field(s) · UI LIVE · DB BUILT · tables `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Letter Template | Letter Template (ECW-LT-1; letter_templates table; categorized HTML template library; practice-scoped; favorites; used to generate patient_letters) | `ltId` | Template ID (read-only UUID) | `text` |  |  |  |
| Letter Template | Letter Template (ECW-LT-1; letter_templates table; categorized HTML template library; practice-scoped; favorites; used to generate patient_letters) | `ltName` | Template Name (required; max 200 chars) | `text` | Y |  |  |
| Letter Template | Letter Template (ECW-LT-1; letter_templates table; categorized HTML template library; practice-scoped; favorites; used to generate patient_letters) | `ltCategory` | Category (required; e.g. Appointment/Financial/Clinical; max 80) | `text` | Y |  |  |
| Letter Template | Letter Template (ECW-LT-1; letter_templates table; categorized HTML template library; practice-scoped; favorites; used to generate patient_letters) | `ltDescription` | Description (optional) | `textarea` |  |  |  |
| Letter Template | Letter Template (ECW-LT-1; letter_templates table; categorized HTML template library; practice-scoped; favorites; used to generate patient_letters) | `ltContentHtml` | Content HTML (required; Tiptap/WYSIWYG output) | `textarea` | Y |  |  |
| Letter Template | Letter Template (ECW-LT-1; letter_templates table; categorized HTML template library; practice-scoped; favorites; used to generate patient_letters) | `ltIsFavorite` | Is Favorite (true/false; per-user quick-access) | `checkbox` |  |  |  |
| Letter Template | Letter Template (ECW-LT-1; letter_templates table; categorized HTML template library; practice-scoped; favorites; used to generate patient_letters) | `ltActive` | Active (true/false; default true) | `checkbox` |  |  |  |

### Long COVID Clinic — `long_covid_cf`

Screen: 1 page(s) · 3 section(s) · 12 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Post-COVID / Long COVID Visit | Patient & COVID History | `patientId` | Patient | `typeahead` | Y |  |  |
| Post-COVID / Long COVID Visit | Patient & COVID History | `visitDate` | Visit Date | `date` | Y |  |  |
| Post-COVID / Long COVID Visit | Patient & COVID History | `provider` | Provider | `typeahead` | Y |  |  |
| Post-COVID / Long COVID Visit | Patient & COVID History | `covidDate` | Acute COVID Infection Date | `date` | Y |  |  |
| Post-COVID / Long COVID Visit | Patient & COVID History | `covidSeverity` | Acute COVID Severity | `select` | Y |  |  |
| Post-COVID / Long COVID Visit | Patient & COVID History | `vaccination` | COVID Vaccination Status at Time of Infection | `select` |  |  |  |
| Post-COVID / Long COVID Visit | Persistent Symptoms | `symptomDuration` | Duration of Persistent Symptoms | `text` | Y |  |  |
| Post-COVID / Long COVID Visit | Persistent Symptoms | `domainsFatigue` | Fatigue / PEM (Post-Exertional Malaise) | `textarea` | Y |  |  |
| Post-COVID / Long COVID Visit | Persistent Symptoms | `domainsCognitive` | Cognitive ("Brain Fog") | `textarea` | Y |  |  |
| Post-COVID / Long COVID Visit | Persistent Symptoms | `domainsCardioResp` | Cardiorespiratory / Other | `textarea` | Y |  |  |
| Post-COVID / Long COVID Visit | Workup & Management | `workupOrdered` | Testing Ordered / Reviewed | `textarea` | Y |  |  |
| Post-COVID / Long COVID Visit | Workup & Management | `management` | Management Plan | `textarea` | Y |  |  |

### Lookup Encounters — `encounter_cohort_cf`

Screen: 1 page(s) · 2 section(s) · 10 field(s) · UI LIVE · DB BUILT · tables `ENCOUNTERS`, `PATIENTS`, `PATIENT_PROBLEMS`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Encounter Cohort Search (ECW-FO-15) | Search Filters | `from` | From Date | `date` |  | from |  |
| Encounter Cohort Search (ECW-FO-15) | Search Filters | `to` | To Date | `date` |  | to |  |
| Encounter Cohort Search (ECW-FO-15) | Search Filters | `filterStatus` | Status | `select` |  | filterStatus |  |
| Encounter Cohort Search (ECW-FO-15) | Search Filters | `filterType` | Visit Type | `select` |  | filterType |  |
| Encounter Cohort Search (ECW-FO-15) | Search Filters | `dx` | ICD-10 Prefix | `text` |  | dx |  |
| Encounter Cohort Search (ECW-FO-15) | Encounter | `patientName` | Patient | `text` |  | patientName |  |
| Encounter Cohort Search (ECW-FO-15) | Encounter | `encounterDate` | Date | `text` |  | encounterDate |  |
| Encounter Cohort Search (ECW-FO-15) | Encounter | `rowStatus` | Status | `text` |  | status |  |
| Encounter Cohort Search (ECW-FO-15) | Encounter | `visitType` | Visit Type | `text` |  | visitType |  |
| Encounter Cohort Search (ECW-FO-15) | Encounter | `providerName` | Provider | `text` |  | providerName |  |

### MAT / OUD Treatment — `medication_assisted_treatment_cf`

Screen: 1 page(s) · 4 section(s) · 17 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medication-Assisted Treatment (MAT) Visit | Patient & MAT Program | `patientId` | Patient | `typeahead` | Y |  |  |
| Medication-Assisted Treatment (MAT) Visit | Patient & MAT Program | `visitDate` | Visit Date | `date` | Y |  |  |
| Medication-Assisted Treatment (MAT) Visit | Patient & MAT Program | `prescribingProvider` | Prescribing Provider (DEA-X waiver) | `typeahead` | Y |  |  |
| Medication-Assisted Treatment (MAT) Visit | Patient & MAT Program | `matMedication` | MAT Medication | `select` | Y |  |  |
| Medication-Assisted Treatment (MAT) Visit | Patient & MAT Program | `programDuration` | Duration in MAT Program | `text` |  |  |  |
| Medication-Assisted Treatment (MAT) Visit | Current Status | `currentDose` | Current Dose | `text` | Y |  |  |
| Medication-Assisted Treatment (MAT) Visit | Current Status | `adherence` | Medication Adherence | `select` | Y |  |  |
| Medication-Assisted Treatment (MAT) Visit | Current Status | `udaSelf` | Patient-Reported Substance Use Since Last Visit | `select` | Y |  |  |
| Medication-Assisted Treatment (MAT) Visit | Current Status | `udaResult` | Urine Drug Screen Result (today) | `select` | Y |  |  |
| Medication-Assisted Treatment (MAT) Visit | Clinical Assessment | `cravings` | Opioid Cravings (0-10 scale) | `select` | Y |  |  |
| Medication-Assisted Treatment (MAT) Visit | Clinical Assessment | `withdrawalSx` | Withdrawal Symptoms | `select` |  |  |  |
| Medication-Assisted Treatment (MAT) Visit | Clinical Assessment | `functionalStatus` | Functional Status | `textarea` | Y |  |  |
| Medication-Assisted Treatment (MAT) Visit | Clinical Assessment | `mentalHealth` | Mental Health / Comorbidities | `textarea` |  |  |  |
| Medication-Assisted Treatment (MAT) Visit | Plan | `prescriptionRenewed` | MAT prescription renewed | `checkbox` |  |  |  |
| Medication-Assisted Treatment (MAT) Visit | Plan | `newPrescription` | New Prescription | `text` |  |  |  |
| Medication-Assisted Treatment (MAT) Visit | Plan | `nextVisit` | Next MAT Visit | `date` | Y |  |  |
| Medication-Assisted Treatment (MAT) Visit | Plan | `clinicalPlan` | Clinical Plan Notes | `textarea` | Y |  |  |

### ME/CFS Visit — `chronic_fatigue_syndrome_cf`

Screen: 1 page(s) · 3 section(s) · 9 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| ME/CFS Evaluation & Management | Patient & Diagnosis | `patientId` | Patient | `typeahead` | Y |  |  |
| ME/CFS Evaluation & Management | Patient & Diagnosis | `visitDate` | Visit Date | `date` | Y |  |  |
| ME/CFS Evaluation & Management | Patient & Diagnosis | `provider` | Provider | `typeahead` | Y |  |  |
| ME/CFS Evaluation & Management | Patient & Diagnosis | `onsetDate` | Symptom Onset Date | `date` |  |  |  |
| ME/CFS Evaluation & Management | Patient & Diagnosis | `precipitant` | Precipitating Event | `select` | Y |  |  |
| ME/CFS Evaluation & Management | Patient & Diagnosis | `iomDiagnosisMet` | IOM 2015 Diagnostic Criteria Met | `select` | Y |  |  |
| ME/CFS Evaluation & Management | Symptom Assessment | `coreCriteria` | IOM Core Criteria Assessment | `textarea` | Y |  |  |
| ME/CFS Evaluation & Management | Symptom Assessment | `workupNegative` | Exclusionary Workup (All Negative) | `textarea` | Y |  |  |
| ME/CFS Evaluation & Management | Management Plan | `plan` | Assessment & Management Plan | `textarea` | Y |  |  |

### MS Clinic — `ms_clinic_cf`

Screen: 2 page(s) · 7 section(s) · 57 field(s) · UI LIVE · DB PARTIAL · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Evaluation | Evaluation | `patientId` | Patient | `lookup` | Y |  |  |
| Evaluation | Evaluation | `evalDate` | Date | `date` |  |  |  |
| Evaluation | Evaluation | `providerName` | Neurologist | `text` |  |  |  |
| Evaluation | Evaluation | `evalType` | Eval Type | `select` |  |  |  |
| Evaluation | Evaluation | `msPhenotype` | MS Phenotype | `select` |  |  |  |
| Evaluation | Evaluation | `diagnosisDate` | Diagnosis Date | `date` |  |  |  |
| Evaluation | Evaluation | `diagnosisAge` | Age at Diagnosis | `number` |  |  |  |
| Evaluation | Relapse History | `relapseCountLifetime` | Lifetime Relapse Count | `number` |  |  |  |
| Evaluation | Relapse History | `relapseCountLast2Years` | Relapses (last 2 years) | `number` |  |  |  |
| Evaluation | Relapse History | `lastRelapseDate` | Last Relapse Date | `date` |  |  |  |
| Evaluation | Relapse History | `steroidTreatmentCount` | Steroid Courses | `number` |  |  |  |
| Evaluation | EDSS | `edssScore` | EDSS Score | `select` |  |  |  |
| Evaluation | EDSS | `edssDate` | EDSS Date | `date` |  |  |  |
| Evaluation | MRI | `mriBrainDone` | MRI Brain Done | `checkbox` |  |  |  |
| Evaluation | MRI | `mriBrainDate` | MRI Brain Date | `date` |  |  |  |
| Evaluation | MRI | `t2LesionCount` | T2 Lesion Count | `number` |  |  |  |
| Evaluation | MRI | `newT2Lesions` | New T2 Lesions | `checkbox` |  |  |  |
| Evaluation | MRI | `newT2Count` | New T2 Count | `number` |  |  |  |
| Evaluation | MRI | `gadoliniumEnhancing` | Gd-Enhancing Lesions | `checkbox` |  |  |  |
| Evaluation | MRI | `gadLesionCount` | Gd Lesion Count | `number` |  |  |  |
| Evaluation | MRI | `mriSpineDone` | MRI Spine Done | `checkbox` |  |  |  |
| Evaluation | MRI | `cervicalLesions` | Cervical Lesions | `checkbox` |  |  |  |
| Evaluation | MRI | `thoracicLesions` | Thoracic Lesions | `checkbox` |  |  |  |
| Evaluation | Disease-Modifying Therapy | `currentDmt` | Current DMT | `text` |  |  |  |
| Evaluation | Disease-Modifying Therapy | `currentDmtStartDate` | DMT Start Date | `date` |  |  |  |
| Evaluation | Disease-Modifying Therapy | `currentDmtDose` | DMT Dose | `text` |  |  |  |
| Evaluation | Disease-Modifying Therapy | `dmtCategory` | DMT Category | `select` |  |  |  |
| Evaluation | Disease-Modifying Therapy | `jcvAntibodyStatus` | JCV Antibody Status | `select` |  |  |  |
| Evaluation | Disease-Modifying Therapy | `jcvIndex` | JCV Index | `number` |  |  |  |
| Evaluation | Disease-Modifying Therapy | `jcvDate` | JCV Test Date | `date` |  |  |  |
| Evaluation | Disease-Modifying Therapy | `vaccinationsCurrent` | Vaccinations Current | `checkbox` |  |  |  |
| Evaluation | Disease Activity & Plan | `diseaseActivityStatus` | Disease Activity | `select` |  |  |  |
| Evaluation | Disease Activity & Plan | `noEvidenceOfDiseaseActivity` | NEDA | `checkbox` |  |  |  |
| Evaluation | Disease Activity & Plan | `vitaminD` | Vitamin D (ng/mL) | `number` |  |  |  |
| Evaluation | Disease Activity & Plan | `dmtPlan` | DMT Plan | `textarea` |  |  |  |
| Evaluation | Disease Activity & Plan | `evalNotes` | Notes | `textarea` |  |  |  |
| Follow-Up Visits | MS Visit | `patientId` | Patient | `lookup` | Y |  |  |
| Follow-Up Visits | MS Visit | `visitDate` | Visit Date | `date` |  |  |  |
| Follow-Up Visits | MS Visit | `relapsesSinceLastVisit` | Relapses Since Last Visit | `number` |  |  |  |
| Follow-Up Visits | MS Visit | `edssScore` | EDSS | `number` |  |  |  |
| Follow-Up Visits | MS Visit | `edssChangeFromLast` | EDSS Change | `number` |  |  |  |
| Follow-Up Visits | MS Visit | `currentDmt` | Current DMT | `text` |  |  |  |
| Follow-Up Visits | MS Visit | `dmtAdherent` | DMT Adherent | `checkbox` |  |  |  |
| Follow-Up Visits | MS Visit | `dmtChangeMade` | DMT Change Made | `checkbox` |  |  |  |
| Follow-Up Visits | MS Visit | `newDmt` | New DMT | `text` |  |  |  |
| Follow-Up Visits | MS Visit | `jcvAntibodyChecked` | JCV Checked | `checkbox` |  |  |  |
| Follow-Up Visits | MS Visit | `jcvIndex` | JCV Index | `number` |  |  |  |
| Follow-Up Visits | MS Visit | `mriOrdered` | MRI Ordered | `checkbox` |  |  |  |
| Follow-Up Visits | MS Visit | `newT2Lesions` | New T2 Lesions on MRI | `checkbox` |  |  |  |
| Follow-Up Visits | MS Visit | `gadoliniumEnhancing` | Gd-Enhancing on MRI | `checkbox` |  |  |  |
| Follow-Up Visits | MS Visit | `infusionGiven` | Infusion Given | `checkbox` |  |  |  |
| Follow-Up Visits | MS Visit | `infusionAgent` | Infusion Agent | `text` |  |  |  |
| Follow-Up Visits | MS Visit | `infusionNumber` | Infusion # | `number` |  |  |  |
| Follow-Up Visits | MS Visit | `diseaseActivityImpression` | Disease Activity | `select` |  |  |  |
| Follow-Up Visits | MS Visit | `nextMriDue` | Next MRI Due | `date` |  |  |  |
| Follow-Up Visits | MS Visit | `nextVisitDate` | Next Visit | `date` |  |  |  |
| Follow-Up Visits | MS Visit | `visitNotes` | Notes | `textarea` |  |  |  |

### Med Refills — `medication_refill_cf`

Screen: 1 page(s) · 3 section(s) · 18 field(s) · UI LIVE · DB BUILT · tables `AUDIT_LOG`, `CLINICAL_TASKS`, `ENCOUNTER_VITALS`, `PATIENTS`, `PATIENT_ALLERGIES`, `PATIENT_INSURANCES`, `PATIENT_MEDICATIONS`, `PATIENT_PROBLEMS`, `PAYERS_MASTER`, `PRACTICES`, `PROVIDERS`

| Page | Section | Field id | Label | Type | Req | Bind | Opts |
|---|---|---|---|---|---|---|---|
| Medication Refill Management | Refill Request | `patientId` | Patient | `typeahead` | Y |  |  |
| Medication Refill Management | Refill Request | `requestDate` | Request Date | `date` | Y |  |  |
| Medication Refill Management | Refill Request | `requestSource` | Request Source | `select` |  |  |  |
| Medication Refill Management | Refill Request | `medication` | Medication | `text` | Y |  |  |
| Medication Refill Management | Refill Request | `pharmacy` | Pharmacy | `text` |  |  |  |
| Medication Refill Management | Refill Request | `pharmacyPhone` | Pharmacy Phone | `tel` |  |  |  |
| Medication Refill Management | Clinical Review | `lastVisitDate` | Last Office Visit Date | `date` |  |  |  |
| Medication Refill Management | Clinical Review | `refillCriteria` | Refill Criteria Met | `select` |  |  |  |
| Medication Refill Management | Clinical Review | `pdmpChecked` | PDMP checked (if controlled substance) | `checkbox` |  |  |  |
| Medication Refill Management | Clinical Review | `monitoringLabsDue` | Monitoring labs due (flag to patient) | `checkbox` |  |  |  |
| Medication Refill Management | Clinical Review | `labsDueDescription` | Labs Due | `text` |  |  |  |
| Medication Refill Management | Clinical Review | `fillQuantity` | Quantity Dispensed | `text` |  |  |  |
| Medication Refill Management | Clinical Review | `refillsRemaining` | Refills Remaining After This | `number` |  |  |  |
| Medication Refill Management | Disposition | `disposition` | Refill Decision | `select` | Y |  |  |
| Medication Refill Management | Disposition | `prescribingProvider` | Prescribing Provider | `typeahead` |  |  |  |
| Medication Refill Management | Disposition | `sentToPharmacy` | Prescription Sent Date | `date` |  |  |  |
| Medication Refill Management | Disposition | `patientNotified` | Patient notified of decision | `checkbox` |  |  |  |
| Medication Refill Management | Disposition | `refillNotes` | Refill Notes | `textarea` |  |  |  |
