---
title: "MIC Examples"
---

# JAC MIC Component Examples - HQSOnline Healthcare System

**Location:** `jac2024/app/paul/make/components.xml`
**Package:** `com.hqsonline.hrm.model.entity`
**Domain:** Healthcare IT - Home Health Agency Management

---

## Table of Contents

1. [Overview](#overview)
2. [MIC Architecture](#mic-architecture)
3. [Component Categories](#component-categories)
4. [HQSOnline System Components](#hqsonline-system-components)
5. [Usage Examples](#usage-examples)
6. [Code Generation](#code-generation)
7. [Database Integration](#database-integration)

---

## Overview

This document catalogs **50+ production MIC (Model-Interface-Controller) components** from the **HQSOnline Healthcare Record Management (HRM)** system. These components demonstrate enterprise-grade JAC/MIC architecture for Medicare-certified home health agency management.

### System Purpose

**HQSOnline** is a Healthcare Record Management platform providing:
- **OASIS Compliance** - CMS outcome assessment tracking (Medicare requirement)
- **Patient Care Management** - Episode-based care tracking
- **Medication Management** - Clinical decision support
- **Audit/Changelog** - HBOC (Home-Based Care) compliance
- **Security** - HIPAA-compliant authentication

---

## MIC Architecture

### Component Types

MIC components are defined in XML and auto-generate Java classes:

#### 1. **DbTable** - Database Table Entities
```xml
<component name="hrmPatient" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Patient_DbTable">
  <dependsOn name="hrmPerson" />
</component>
```

**Generated Java Class:**
```java
package com.hqsonline.hrm.model.entity;

public class hrmPatient extends DbTable {
    // Auto-generated fields from database schema
    private long id;
    private long personId;
    private String status;

    // Auto-generated getters/setters
    public long getId() { return id; }
    public void setId(long value) { this.id = value; }

    // Auto-generated property accessors
    public PropertyValue getIdPropertyValue() { ... }
    public void setId(PropertyValue value) { ... }

    // Auto-generated null checking
    public boolean isIdNull() { ... }
}
```

#### 2. **DbView** - Database View Entities
```xml
<component name="hrmPatientSearchView" type="DbView"
           source="com.hqsonline.hrm.model.entity.Patient_DbView">
  <dependsOn name="hrmPerson" />
  <dependsOn name="hrmPatient" />
  <dependsOn name="hrmPersonAddress" />
</component>
```

**Generated Java Class:**
```java
package com.hqsonline.hrm.model.entity;

public class hrmPatientSearchView extends DbView {
    // Combines fields from hrmPerson, hrmPatient, hrmPersonAddress
    // Read-only (no setters for view columns)
    // Optimized for search operations
}
```

#### 3. **Services** - Business Logic Factories
```xml
<component name="com.hqsonline.hrm.model.factory.PatientFactory"
           type="Services"
           source="com.hqsonline.hrm.model.factory.PatientFactory_Services" />
```

**Generated Java Class:**
```java
package com.hqsonline.hrm.model.factory;

public class PatientFactory extends Services {
    // Auto-generated CRUD methods
    public void createPatient(service serviceJeo) { ... }
    public void searchPatient(service serviceJeo) { ... }
    public void updatePatient(service serviceJeo) { ... }
    public void deletePatient(service serviceJeo) { ... }

    // Custom business logic methods
    public void searchPatientBySSN(service serviceJeo) { ... }
}
```

### Component Dependencies

Components declare dependencies to establish build order:

```xml
<component name="hrmPerson" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Person_DbTable" />

<component name="hrmPatient" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Patient_DbTable">
  <dependsOn name="hrmPerson" />  <!-- Must compile after hrmPerson -->
</component>

<component name="hrmEpisode" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Patient_DbTable">
  <dependsOn name="hrmPatient" />  <!-- Must compile after hrmPatient -->
</component>
```

**Build Order:**
1. `hrmPerson` (no dependencies)
2. `hrmPatient` (depends on hrmPerson)
3. `hrmEpisode` (depends on hrmPatient)

---

## Component Categories

### Summary Statistics

| Category | DbTable Count | DbView Count | Services Count | Total |
|----------|--------------|--------------|----------------|-------|
| **Medication Management** | 1 | 3 | 3 | 7 |
| **OASIS Assessment** | 9 | 5 | 1 | 15 |
| **Patient Management** | 6 | 1 | 1 | 8 |
| **Person/Demographics** | 5 | 4 | 0 | 9 |
| **Questionnaire** | 7 | 0 | 0 | 7 |
| **Security** | 1 | 1 | 1 | 3 |
| **Types/Reference Data** | 2 | 1 | 0 | 3 |
| **PPS Dashboard** | 0 | 2 | 2 | 4 |
| **Property System** | 3 | 0 | 0 | 3 |
| **TOTAL** | **34** | **17** | **8** | **59** |

---

## HQSOnline System Components

### 1. Medication Management (7 components)

#### Database Tables (1)

```xml
<component name="hrmMedicationHistory" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Medications_DbTable">
  <dependsOn name="hrmPatient" />
</component>
```

**Purpose:** Medication history tracking for patients
**Foreign Keys:** Links to hrmPatient

#### Database Views (3)

```xml
<component name="hrmMedsDnoteenView" type="DbView"
           source="com.hqsonline.hrm.model.entity.Medications_DbView">
  <dependsOn name="hrmMedsProduct" />
  <dependsOn name="hrmMedsDnotegfc" />
</component>

<component name="hrmMedsScreeningItem" type="DbView"
           source="com.hqsonline.hrm.model.entity.Medications_DbView">
  <dependsOn name="hrmMedsProduct" />
  <dependsOn name="hrmMedsMasgfcin" />
  <dependsOn name="hrmMedsMascitm" />
</component>

<component name="hrmMedsScreeningView" type="DbView"
           source="com.hqsonline.hrm.model.entity.Medications_DbView">
  <dependsOn name="hrmMedsMaswrnm" />
  <dependsOn name="hrmMedsMaswrn" />
</component>
```

**Purpose:**
- **Dnote View:** Drug interaction notes and warnings
- **Screening Item:** Medication screening checklist items
- **Screening View:** Overall medication screening results

#### Services (3)

```xml
<component name="com.hqsonline.hrm.model.factory.MedicationsFactory"
           type="Services"
           source="com.hqsonline.hrm.model.factory.MedicationsFactory_Services" />
<component name="com.hqsonline.hrm.model.factory.MedsDbFactory"
           type="Services"
           source="com.hqsonline.hrm.model.factory.MedsDbFactory_Services" />
<component name="com.hqsonline.hrm.model.factory.MedsTeachFactory"
           type="Services"
           source="com.hqsonline.hrm.model.factory.MedsTeachFactory_Services" />
```

**Business Logic:**
- **MedicationsFactory:** CRUD operations for medication history
- **MedsDbFactory:** Database-specific medication operations
- **MedsTeachFactory:** Patient medication education tracking

---

### 2. OASIS Assessment (15 components)

**OASIS** = Outcome and Assessment Information Set (Medicare requirement)

#### Database Tables (9)

```xml
<!-- Core OASIS Tables -->
<component name="hrmOasisIndex" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Oasis_DbTable" />
<component name="hrmOasisMigration" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Oasis_DbTable" />
<component name="oasis" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Oasis_DbTable" />
<component name="oasisr" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Oasis_DbTable" />

<!-- CMS Compliance Forms -->
<component name="f485v2" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Oasis_DbTable" />

<!-- Audit/Change Tracking -->
<component name="changelog" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Oasis_DbTable" />
<component name="changeloghboc" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Oasis_DbTable" />

<!-- Version Control -->
<component name="oasisVersion" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Oasis_DbTable" />

<!-- Smart Edit Support -->
<component name="smartedittable" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Oasis_DbTable" />
```

**Table Purposes:**
- **hrmOasisIndex:** Master index for patient assessments
- **hrmOasisMigration:** Data migration tracking
- **oasis:** Primary OASIS assessment data (current version)
- **oasisr:** OASIS recertification assessments
- **f485v2:** CMS Form 485 (Plan of Care) version 2
- **changelog:** Assessment change history (standard)
- **changeloghboc:** Assessment change history (HBOC variant)
- **oasisVersion:** Version tracking for assessments
- **smartedittable:** Smart editing metadata

#### Database Views (5)

```xml
<component name="hrmOasisView" type="DbView"
           source="com.hqsonline.hrm.model.entity.Oasis_DbView">
  <dependsOn name="oasis" />
  <dependsOn name="hrmOasisMigration" />
</component>

<component name="hrmOasisChangelogView" type="DbView"
           source="com.hqsonline.hrm.model.entity.Oasis_DbView">
  <dependsOn name="hrmAssessmentOasis" />
  <dependsOn name="changelog" />
</component>

<component name="hrmOasisChangelogHbocView" type="DbView"
           source="com.hqsonline.hrm.model.entity.Oasis_DbView">
  <dependsOn name="hrmAssessmentOasis" />
  <dependsOn name="changeloghboc" />
</component>

<component name="hrmOasisAssessmentView" type="DbView"
           source="com.hqsonline.hrm.model.entity.Oasis_DbView">
  <dependsOn name="hrmPerson" />
  <dependsOn name="hrmPatient" />
  <dependsOn name="hrmEpisode" />
  <dependsOn name="hrmAssessment" />
  <dependsOn name="hrmAssessmentVersion" />
</component>

<component name="hrmOasisMaxVersionView" type="DbView"
           source="com.hqsonline.hrm.model.entity.Oasis_DbView">
  <dependsOn name="hrmPerson" />
  <dependsOn name="hrmPatient" />
  <dependsOn name="hrmEpisode" />
  <dependsOn name="hrmAssessment" />
  <dependsOn name="hrmAssessmentVersion" />
  <dependsOn name="oasis" />
  <dependsOn name="f485v2" />
</component>
```

**View Purposes:**
- **hrmOasisView:** Basic OASIS data with migration status
- **hrmOasisChangelogView:** OASIS with standard changelog
- **hrmOasisChangelogHbocView:** OASIS with HBOC changelog
- **hrmOasisAssessmentView:** Complete patient assessment view (joins 5 tables)
- **hrmOasisMaxVersionView:** Latest assessment version (joins 7 tables)

#### Services (1)

```xml
<component name="com.hqsonline.hrm.model.factory.OasisFactory"
           type="Services"
           source="com.hqsonline.hrm.model.factory.OasisFactory_Services" />
```

**Business Logic:**
- Search OASIS assessments
- Create/update OASIS records
- Manage assessment versions
- Process changelogs
- Generate CMS compliance reports

---

### 3. Patient Management (8 components)

#### Database Tables (6)

```xml
<component name="hrmPatient" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Patient_DbTable">
  <dependsOn name="hrmPerson" />
</component>

<component name="hrmEpisode" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Patient_DbTable">
  <dependsOn name="hrmPatient" />
</component>

<component name="hrmAssessment" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Patient_DbTable">
  <dependsOn name="hrmEpisode" />
</component>

<component name="hrmAssessmentVersion" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Patient_DbTable">
  <dependsOn name="hrmAssessment" />
</component>

<component name="hrmAssessmentOasis" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Patient_DbTable">
  <dependsOn name="hrmAssessment" />
  <dependsOn name="oasis" />
</component>

<component name="hrmOasisDiary" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Patient_DbTable" />
```

**Dependency Hierarchy:**
```
hrmPerson
  └─ hrmPatient
       └─ hrmEpisode
            └─ hrmAssessment
                 ├─ hrmAssessmentVersion
                 └─ hrmAssessmentOasis (also depends on oasis)
```

**Table Purposes:**
- **hrmPatient:** Patient master record (links to hrmPerson)
- **hrmEpisode:** Episode of care (admission to discharge)
- **hrmAssessment:** Patient assessment record
- **hrmAssessmentVersion:** Assessment version history
- **hrmAssessmentOasis:** Link between assessment and OASIS data
- **hrmOasisDiary:** OASIS diary/notes

#### Database Views (1)

```xml
<component name="hrmPatientSearchView" type="DbView"
           source="com.hqsonline.hrm.model.entity.Patient_DbView">
  <dependsOn name="hrmPerson" />
  <dependsOn name="hrmPatient" />
  <dependsOn name="hrmPersonAddress" />
</component>
```

**Purpose:** Optimized patient search (name, address, demographics)

#### Services (1)

```xml
<component name="com.hqsonline.hrm.model.factory.PatientFactory"
           type="Services"
           source="com.hqsonline.hrm.model.factory.PatientFactory_Services" />
```

**Business Logic:**
- Create/search/update patients
- Manage episodes of care
- Assessment creation and versioning

---

### 4. Person/Demographics (9 components)

#### Database Tables (5)

```xml
<component name="hrmPerson" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Person_DbTable" />

<component name="hrmPersonEthnicity" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Person_DbTable" />

<component name="hrmPersonNumber" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Person_DbTable">
  <dependsOn name="hrmPerson" />
</component>

<component name="hrmPersonAddress" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Person_DbTable">
  <dependsOn name="hrmPerson" />
</component>

<component name="hrmPersonEmailAddress" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Person_DbTable">
  <dependsOn name="hrmPerson" />
</component>
```

**Table Purposes:**
- **hrmPerson:** Person master (name, DOB, gender)
- **hrmPersonEthnicity:** Ethnicity tracking (CMS requirement)
- **hrmPersonNumber:** Phone numbers (multi-valued)
- **hrmPersonAddress:** Addresses (multi-valued)
- **hrmPersonEmailAddress:** Email addresses (multi-valued)

#### Database Views (4)

```xml
<component name="hrmPersonView" type="DbView"
           source="com.hqsonline.hrm.model.entity.Person_DbView">
  <dependsOn name="hrmPerson" />
</component>

<component name="hrmPersonEthnicityView" type="DbView"
           source="com.hqsonline.hrm.model.entity.Person_DbView">
  <dependsOn name="hrmPersonEthnicity" />
</component>

<component name="hrmPersonNumberView" type="DbView"
           source="com.hqsonline.hrm.model.entity.Person_DbView">
  <dependsOn name="hrmPersonNumber" />
</component>

<component name="hrmPersonAddressView" type="DbView"
           source="com.hqsonline.hrm.model.entity.Person_DbView">
  <dependsOn name="hrmPersonAddress" />
</component>
```

**View Purposes:** Optimized read access for each person attribute category

---

### 5. Questionnaire (7 components)

#### Database Tables (7)

```xml
<component name="hrmStdQstnr" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Questionnaire_DbTable" />

<component name="hrmStdQstnrVersion" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Questionnaire_DbTable" />

<component name="hrmStdQuest" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Questionnaire_DbTable">
  <dependsOn name="hrmStdQstnrVersion" />
</component>

<component name="hrmStdResponse" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Questionnaire_DbTable">
  <dependsOn name="hrmStdQuest" />
</component>

<component name="hrmQstnr" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Questionnaire_DbTable">
  <dependsOn name="hrmStdQstnrVersion" />
</component>

<component name="hrmQstnrVersion" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Questionnaire_DbTable">
  <dependsOn name="hrmQstnr" />
</component>

<component name="hrmQstnrResponse" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Questionnaire_DbTable" />
```

**Purpose:** Dynamic questionnaire system
- **Std prefix:** Standard (template) questionnaires
- **No prefix:** Instance questionnaires (filled by patients)
- Supports versioning and response tracking

---

### 6. Security (3 components)

#### Database Tables (1)

```xml
<component name="hrmPassword" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Security_DbTable">
  <dependsOn name="hrmPerson" />
</component>
```

#### Database Views (1)

```xml
<component name="hrmPasswordView" type="DbView"
           source="com.hqsonline.hrm.model.entity.Security_DbView">
  <dependsOn name="hrmPassword" />
  <dependsOn name="hrmPerson" />
</component>
```

#### Services (1)

```xml
<component name="com.hqsonline.hrm.model.factory.SecurityFactory"
           type="Services"
           source="com.hqsonline.hrm.model.factory.SecurityFactory_Services" />
```

**Purpose:** User authentication and authorization (HIPAA compliant)

---

### 7. Types/Reference Data (3 components)

#### Database Tables (2)

```xml
<component name="hrmTypeTranslation" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Types_DbTable" />

<component name="hrmTypeList" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Types_DbTable">
  <dependsOn name="hrmTypeTranslation" />
</component>
```

#### Database Views (1)

```xml
<component name="hrmTypeListView" type="DbView"
           source="com.hqsonline.hrm.model.entity.Types_DbView">
  <dependsOn name="hrmTypeList" />
  <dependsOn name="hrmTypeTranslation" />
</component>
```

**Purpose:** Lookup tables and internationalization (i18n)

---

### 8. PPS Dashboard (4 components)

**PPS** = Prospective Payment System (Medicare reimbursement)

#### Database Views (2)

```xml
<component name="hrmPPSAnalysisView" type="DbView"
           source="com.hqsonline.hrm.model.entity.PPSAnalysis_DbView">
  <dependsOn name="hrmPerson" />
  <dependsOn name="hrmPatient" />
  <dependsOn name="hrmEpisode" />
  <dependsOn name="hrmAssessment" />
  <dependsOn name="hrmAssessmentVersion" />
</component>

<component name="hrmDashView" type="DbView"
           source="com.hqsonline.hrm.model.entity.PPSDashboard_DbView">
  <dependsOn name="hrmPerson" />
  <dependsOn name="hrmPatient" />
  <dependsOn name="hrmEpisode" />
  <dependsOn name="hrmAssessment" />
  <dependsOn name="hrmAssessmentVersion" />
  <dependsOn name="oasis" />
  <dependsOn name="oasisr" />
</component>

<component name="hrmDashView2" type="DbView"
           source="com.hqsonline.hrm.model.entity.PPSDashboard_DbView">
  <dependsOn name="hrmPerson" />
  <dependsOn name="hrmPatient" />
  <dependsOn name="hrmEpisode" />
  <dependsOn name="hrmAssessment" />
  <dependsOn name="hrmAssessmentVersion" />
  <dependsOn name="oasis" />
</component>
```

#### Services (2)

```xml
<component name="com.hqsonline.hrm.model.factory.PPSAnalysis"
           type="Services"
           source="com.hqsonline.hrm.model.factory.PPSAnalysis_Services" />

<component name="com.hqsonline.hrm.model.factory.PPSDashboard"
           type="Services"
           source="com.hqsonline.hrm.model.factory.PPSDashboard_Services" />
```

**Purpose:** Medicare reimbursement analysis and reporting

---

### 9. Property System (3 components)

#### Database Tables (3)

```xml
<component name="hrmPropertyCollection" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Property_DbTable">
  <dependsOn name="hrmPropertyValue" />
</component>

<component name="hrmPropertyValues" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Property_DbTable">
  <dependsOn name="hrmPropertyCollection" />
</component>

<component name="hrmPropertyValue" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Property_DbTable">
  <dependsOn name="hrmPropertyValues" />
</component>
```

**Purpose:** Generic property storage (EAV pattern - Entity-Attribute-Value)

---

## Usage Examples

### Example 1: Basic CRUD Operations

**Location:** `jac2024/app/paul/streams/IndexOasis.script`

#### Load Factory and Initialize

```java
public void execute() {
    // Load the factory for processing services
    Object lOasisFactory = loadScript(
        "com.hqsonline.hrm.model.factory.OasisFactory", "");
    <!$mic:oasisFactory!>!set(lOasisFactory);

    // Process requests until finished
    while (getOasis() == true) {}
}
```

#### Search Using View

```java
public boolean getOasis() {
    // Create the service jeo
    com.esarks.arm.model.jeo.service lServiceJeo =
        new com.esarks.arm.model.jeo.service();

    DbConnection lDbConnection = ((com.hqsonline.hrm.model.factory.OasisFactory)
        <!$mic:oasisFactory!>!getValueObject()).getDbConnection();
    lDbConnection.setAutoCommit(false);

    // Call the searchOasisView service
    iScript.execMethod(<!$mic:oasisFactory!>!getValueObject(),
        "searchOasisView", new Object[]{lServiceJeo});

    if (lServiceJeo.getError() != null &&
        lServiceJeo.getError().getSeverity() < 5) {
        System.out.println(lServiceJeo.getError().getTitle());
        return false;
    }

    // Get the reply objects, one hrmOasisView for each row
    Jeo lReplyJeo = lServiceJeo.getReply();
    ArrayList lHrmOasisViewList = lReplyJeo.getJeoByInstanceName(
        "com.hqsonline.hrm.model.entity.hrmOasisView");

    // Check the return values, and process each
    if (lHrmOasisViewList.size() == 0) {
        lDbConnection.close();
        return false;
    }

    for (int lIdx=0; lIdx < lHrmOasisViewList.size(); lIdx++) {
        com.hqsonline.hrm.model.entity.hrmOasisView lHrmOasisView =
            (com.hqsonline.hrm.model.entity.hrmOasisView)
            lHrmOasisViewList.get(lIdx);

        if (searchOasis(lHrmOasisView)) {
            lDbConnection.commit();
        } else {
            lDbConnection.rollback();
        }
    }

    lDbConnection.close();
    return true;
}
```

#### Access Component Properties

```java
public boolean searchBySsn(com.hqsonline.hrm.model.entity.hrmOasisView aHrmOasisView) {
    // Create search criteria
    com.esarks.arm.model.jeo.service lServiceJeo =
        new com.esarks.arm.model.jeo.service();

    // Check for null values using auto-generated methods
    if (!aHrmOasisView.isAgency_idNull() &&
        !aHrmOasisView.isBranch_idNull() &&
        (!aHrmOasisView.isM0063_medicare_numNull() ||
         !aHrmOasisView.isM0064_ssnNull() ||
         !aHrmOasisView.isM0065_medicaid_numNull())) {

        // Create new record
        com.hqsonline.hrm.model.entity.hrmOasisIndex lHrmOasisIndex =
            new com.hqsonline.hrm.model.entity.hrmOasisIndex();
        lServiceJeo.getRequest().addJeo(lHrmOasisIndex);

        // Set properties using auto-generated PropertyValue methods
        lHrmOasisIndex.setAgency_id(aHrmOasisView.getAgency_idPropertyValue());
        lHrmOasisIndex.setBranch_id(aHrmOasisView.getBranch_idPropertyValue());
        lHrmOasisIndex.setM0040_pat_lname(
            aHrmOasisView.getM0040_pat_lnamePropertyValue());
        lHrmOasisIndex.setM0066_pat_birth_dt(
            aHrmOasisView.getM0066_pat_birth_dtPropertyValue());
        lHrmOasisIndex.setM0063_medicare_num(
            aHrmOasisView.getM0063_medicare_numPropertyValue());
        lHrmOasisIndex.setM0064_ssn(
            aHrmOasisView.getM0064_ssnPropertyValue());
        lHrmOasisIndex.setM0065_medicaid_num(
            aHrmOasisView.getM0065_medicaid_numPropertyValue());

        // Execute search
        iScript.execMethod(<!$mic:oasisFactory!>!getValueObject(),
            "searchOasisIndex", new Object[]{lServiceJeo});

        return bestMatch(aHrmOasisView,
            lServiceJeo.getReply().getJeoByInstanceName(
                "com.hqsonline.hrm.model.entity.hrmOasisIndex"));
    }
    return false;
}
```

#### Create Records with Transaction Management

```java
public boolean createOasisIndex(
        com.hqsonline.hrm.model.entity.hrmOasisView aHrmOasisView,
        long aMatchIndex,
        long aPersonId,
        boolean aMisMatch) {

    com.esarks.arm.model.jeo.service lServiceJeo = null;

    if (aPersonId == 0) {
        // Create new patient first
        lServiceJeo = new com.esarks.arm.model.jeo.service();
        lServiceJeo.getRequest().setPropertyValue("domain",
            aHrmOasisView.getAgency_idPropertyValue());
        lServiceJeo.getRequest().setPropertyValue("lastName",
            aHrmOasisView.getM0040_pat_lnamePropertyValue());
        lServiceJeo.getRequest().setPropertyValue("firstName",
            aHrmOasisView.getM0040_pat_fnamePropertyValue());
        lServiceJeo.getRequest().setPropertyValue("middleInitial",
            aHrmOasisView.getM0040_pat_miPropertyValue());

        iScript.execMethod(<!$mic:oasisFactory!>!getValueObject(),
            "createPatient", new Object[]{lServiceJeo});

        if (lServiceJeo.getError() != null &&
            lServiceJeo.getError().getSeverity() < 10) {
            System.out.println(lServiceJeo.getError().getTitle());
            return false;
        }

        Jeo lReplyJeo = lServiceJeo.getReply();
        com.hqsonline.hrm.model.entity.hrmPerson lHrmPerson =
            (com.hqsonline.hrm.model.entity.hrmPerson)
            lReplyJeo.getJeoByInstanceNameAt(
                "com.hqsonline.hrm.model.entity.hrmPerson", 0);
        System.out.println("CREATE PATIENT - " + lHrmPerson.getId());
        aPersonId = lHrmPerson.getId();
    }

    // Create the OASIS index
    lServiceJeo = new com.esarks.arm.model.jeo.service();
    lServiceJeo.getRequest().addJeo(aHrmOasisView);
    if (aMatchIndex > 0)
        lServiceJeo.getRequest().setPropertyValue("matchId",
            new PropertyValue(aMatchIndex));
    if (aMisMatch)
        lServiceJeo.getRequest().setPropertyValue("misMatch",
            new PropertyValue(1));
    lServiceJeo.getRequest().setPropertyValue("personId",
        new PropertyValue(aPersonId));

    iScript.execMethod(<!$mic:oasisFactory!>!getValueObject(),
        "createOasisIndexMigration", new Object[]{lServiceJeo});

    if (lServiceJeo.getError() != null &&
        lServiceJeo.getError().getSeverity() < 10) {
        return false;
    }
    System.out.println("CREATE INDEX");

    if (!createEpisode(aPersonId, aHrmOasisView)) return false;

    return true;
}
```

### Example 2: Property Value Comparison

```java
public boolean bestMatch(
        com.hqsonline.hrm.model.entity.hrmOasisView aHrmOasisView,
        ArrayList aArrayList) {

    com.hqsonline.hrm.model.entity.hrmOasisIndex lBestMatch = null;
    int lHighPoints = -1;

    // Find best match by scoring each candidate
    for (int lIdx=0; lIdx < aArrayList.size(); lIdx++) {
        com.hqsonline.hrm.model.entity.hrmOasisIndex lHrmOasisIndex =
            (com.hqsonline.hrm.model.entity.hrmOasisIndex) aArrayList.get(lIdx);

        int lPoints = 0;

        // Compare last name (case insensitive)
        if (!aHrmOasisView.isM0040_pat_lnameNull() &&
            !lHrmOasisIndex.isM0040_pat_lnameNull() &&
            aHrmOasisView.getM0040_pat_lnamePropertyValue()
                .toString().toLowerCase()
                .equals(lHrmOasisIndex.getM0040_pat_lnamePropertyValue()
                    .toString().toLowerCase()))
            lPoints = lPoints + 1;

        // Compare Medicare number
        if (!aHrmOasisView.isM0063_medicare_numNull() &&
            !lHrmOasisIndex.isM0063_medicare_numNull() &&
            aHrmOasisView.getM0063_medicare_numPropertyValue()
                .toString().toLowerCase()
                .equals(lHrmOasisIndex.getM0063_medicare_numPropertyValue()
                    .toString().toLowerCase()))
            lPoints = lPoints + 1;

        // Compare SSN
        if (!aHrmOasisView.isM0064_ssnNull() &&
            !lHrmOasisIndex.isM0064_ssnNull() &&
            aHrmOasisView.getM0064_ssnPropertyValue().toString()
                .equals(lHrmOasisIndex.getM0064_ssnPropertyValue()
                    .toString()))
            lPoints = lPoints + 1;

        // Compare birth date
        if (!aHrmOasisView.isM0066_pat_birth_dtNull() &&
            !lHrmOasisIndex.isM0066_pat_birth_dtNull() &&
            aHrmOasisView.getM0066_pat_birth_dtPropertyValue().toString()
                .equals(lHrmOasisIndex.getM0066_pat_birth_dtPropertyValue()
                    .toString()))
            lPoints = lPoints + 1;

        if (lPoints > lHighPoints) {
            lHighPoints = lPoints;
            lBestMatch = lHrmOasisIndex;
        }
    }

    return createOasisMigration(aHrmOasisView, lBestMatch);
}
```

---

## Code Generation

### How MIC Components Generate Code

#### Step 1: Define Components in XML

**File:** `jac2024/app/paul/make/components.xml`

```xml
<components>
  <component name="hrmPatient" type="DbTable"
             source="com.hqsonline.hrm.model.entity.Patient_DbTable">
    <dependsOn name="hrmPerson" />
  </component>
</components>
```

#### Step 2: Run Make Process

```bash
cd jac2024/app/paul/make
jac -compile components.xml
```

#### Step 3: Generated Files

**DbTable Source:** `com/hqsonline/hrm/model/entity/Patient_DbTable.script`

Auto-generated content includes:
- Field declarations from database schema
- Getters/setters for each field
- PropertyValue accessors
- Null checking methods
- Database CRUD operations
- Validation logic

**Example Generated Code:**

```java
package com.hqsonline.hrm.model.entity;

import com.esarks.mic.model.*;

public class hrmPatient extends DbTable {
    // Auto-generated from database schema
    private long id;
    private long personId;
    private String patientNumber;
    private java.sql.Date admitDate;
    private java.sql.Date dischargeDate;
    private String status;

    // Auto-generated getters
    public long getId() { return id; }
    public long getPersonId() { return personId; }
    public String getPatientNumber() { return patientNumber; }
    public java.sql.Date getAdmitDate() { return admitDate; }
    public java.sql.Date getDischargeDate() { return dischargeDate; }
    public String getStatus() { return status; }

    // Auto-generated setters
    public void setId(long value) { this.id = value; }
    public void setPersonId(long value) { this.personId = value; }
    public void setPatientNumber(String value) { this.patientNumber = value; }
    public void setAdmitDate(java.sql.Date value) { this.admitDate = value; }
    public void setDischargeDate(java.sql.Date value) {
        this.dischargeDate = value;
    }
    public void setStatus(String value) { this.status = value; }

    // Auto-generated PropertyValue accessors
    public PropertyValue getIdPropertyValue() {
        return new PropertyValue(id);
    }
    public void setId(PropertyValue value) {
        this.id = value.getValueLong();
    }

    public PropertyValue getPersonIdPropertyValue() {
        return new PropertyValue(personId);
    }
    public void setPersonId(PropertyValue value) {
        this.personId = value.getValueLong();
    }

    public PropertyValue getPatientNumberPropertyValue() {
        return new PropertyValue(patientNumber);
    }
    public void setPatientNumber(PropertyValue value) {
        this.patientNumber = value.getValueString();
    }

    public PropertyValue getAdmitDatePropertyValue() {
        return new PropertyValue(admitDate);
    }
    public void setAdmitDate(PropertyValue value) {
        this.admitDate = value.getValueDate();
    }

    // Auto-generated null checking
    public boolean isIdNull() { return id == 0; }
    public boolean isPersonIdNull() { return personId == 0; }
    public boolean isPatientNumberNull() {
        return patientNumber == null || patientNumber.isEmpty();
    }
    public boolean isAdmitDateNull() { return admitDate == null; }
    public boolean isDischargeDateNull() { return dischargeDate == null; }
    public boolean isStatusNull() {
        return status == null || status.isEmpty();
    }

    // Auto-generated CRUD methods
    public void insert() throws SQLException { ... }
    public void update() throws SQLException { ... }
    public void delete() throws SQLException { ... }
    public void select() throws SQLException { ... }
}
```

---

## Database Integration

### Creating Database Views

**File:** `jac2024/app/paul/streams/MakeDdlViews.xml`

```xml
<mic.element type="Component" title="">
  <make>
    <!-- Drop and recreate views -->
    <script entity="hrmOasisView" method="dropView">
      com.hqsonline.hrm.model.entity.Oasis_DbView
    </script>
    <script entity="hrmOasisView" method="createView">
      com.hqsonline.hrm.model.entity.Oasis_DbView
    </script>

    <script entity="hrmPatientSearchView" method="dropView">
      com.hqsonline.hrm.model.entity.Patient_DbView
    </script>
    <script entity="hrmPatientSearchView" method="createView">
      com.hqsonline.hrm.model.entity.Patient_DbView
    </script>
  </make>
</mic.element>
```

### Generated DDL

**Auto-generated from DbView component:**

```sql
-- hrmPatientSearchView
DROP VIEW IF EXISTS hrmPatientSearchView;

CREATE VIEW hrmPatientSearchView AS
SELECT
    p.id AS personId,
    p.lastName,
    p.firstName,
    p.middleInitial,
    p.dateOfBirth,
    p.gender,
    pt.id AS patientId,
    pt.patientNumber,
    pt.status,
    pa.street1,
    pa.street2,
    pa.city,
    pa.state,
    pa.zipCode
FROM hrmPerson p
INNER JOIN hrmPatient pt ON pt.personId = p.id
LEFT JOIN hrmPersonAddress pa ON pa.personId = p.id
WHERE pa.isPrimary = true OR pa.id IS NULL;
```

---

## Component Development Workflow

### 1. Define Database Schema

```sql
-- Create patient table
CREATE TABLE hrmPatient (
    id BIGSERIAL PRIMARY KEY,
    personId BIGINT NOT NULL REFERENCES hrmPerson(id),
    patientNumber VARCHAR(50) NOT NULL UNIQUE,
    admitDate DATE,
    dischargeDate DATE,
    status VARCHAR(20) DEFAULT 'ACTIVE',
    createdDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modifiedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Define Component in XML

```xml
<component name="hrmPatient" type="DbTable"
           source="com.hqsonline.hrm.model.entity.Patient_DbTable">
  <dependsOn name="hrmPerson" />
</component>
```

### 3. Generate Component Code

```bash
cd jac2024/app/paul/make
jac -make components.xml
```

### 4. Customize Business Logic

Add custom methods to generated `Patient_DbTable.script`:

```java
<& com.esarks.arm.scripts.Method
   <method name="admitPatient" visibility="public" return="boolean">
     <param name="aAdmitDate" type="java.sql.Date"/>
   </method>
&>

public boolean admitPatient(java.sql.Date aAdmitDate) {
    setAdmitDate(aAdmitDate);
    setStatus("ACTIVE");
    setModifiedDate(new java.sql.Timestamp(System.currentTimeMillis()));

    try {
        update();
        return true;
    } catch (SQLException e) {
        System.err.println("Failed to admit patient: " + e.getMessage());
        return false;
    }
}

<& com.esarks.arm.scripts.FinalReturnMethod &>
```

### 5. Use in Application

```java
// Create new patient
com.hqsonline.hrm.model.entity.hrmPatient lPatient =
    new com.hqsonline.hrm.model.entity.hrmPatient();
lPatient.setPersonId(12345);
lPatient.setPatientNumber("PT-" + System.currentTimeMillis());
lPatient.admitPatient(new java.sql.Date(System.currentTimeMillis()));
lPatient.insert();
```

---

## Best Practices

### 1. Component Naming

- **DbTable:** Use entity name (e.g., `hrmPatient`, not `PatientTable`)
- **DbView:** Append "View" (e.g., `hrmPatientSearchView`)
- **Services:** Use "Factory" suffix (e.g., `PatientFactory`)

### 2. Dependencies

- Always declare dependencies to ensure correct build order
- Circular dependencies are not allowed
- Foreign key relationships should be reflected in dependencies

### 3. PropertyValue Methods

- Use `getFieldPropertyValue()` for service method parameters
- Use `setField(PropertyValue)` for service method returns
- Use `isFieldNull()` before accessing values to avoid null pointer exceptions

### 4. Transaction Management

- Always use transaction boundaries for multi-table operations
- Use `DbConnection.setAutoCommit(false)` for manual control
- Commit or rollback based on business logic success/failure

### 5. Error Handling

- Check `serviceJeo.getError()` after every service call
- Severity levels: 1-3 = info, 4 = warning, 5-9 = error, 10 = fatal
- Log errors with context information

---

## Related Documentation

- **[ARM-JAC-MIC.md](ARM-JAC-MIC.html)** - Three-layer architecture overview
- **[CLAUDE.md](CLAUDE.html)** - JAC core concepts
- **[Demo.md](Demo.html)** - Paul's demonstration examples
- **[Database-Setup.md](Database-Setup.html)** - PostgreSQL configuration
- **[jac2024-conf.md](jac2024-conf.html)** - Build templates and code generation

---

## Summary

The **HQSOnline Healthcare Record Management system** demonstrates production-grade MIC component architecture with:

- PASS **59 components** (34 DbTable, 17 DbView, 8 Services)
- PASS **Enterprise data modeling** (Person → Patient → Episode → Assessment hierarchy)
- PASS **Regulatory compliance** (OASIS, CMS, HIPAA)
- PASS **Comprehensive audit trail** (changelogs, versioning)
- PASS **Multi-valued attributes** (addresses, phone numbers, emails)
- PASS **Reference data management** (types, translations, i18n)
- PASS **Complex views** (joins up to 7 tables)
- PASS **Transaction management** (commit/rollback)
- PASS **Error handling** (severity levels, detailed messages)

This real-world production system serves as an **excellent reference** for building enterprise applications with JAC/MIC framework.

---

**Documentation Version:** 1.0
**Last Updated:** 2025-01-22
**Author:** Paul Thomas Mulcahy
**Organization:** Architects of Software Design, Corp.
