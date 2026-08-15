---
title: "JacBuild24 Specializations EsarksDell"
---

# JAC Build System: Specializations and Generators

**Related Documentation:**
- [ARM-JAC-MIC.md](ARM-JAC-MIC.html) - Core architecture layers
- [build-system.md](build-system.html) - Build system conceptual overview
- [build-system-directory-reference.md](build-system-directory-reference.html) - File-level inventory

**Document Version:** 1.0
**Last Updated:** October 23, 2025
**Purpose:** Complete guide to JAC specializations, generators, and component orchestration

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture Foundation](#architecture-foundation)
3. [The Six Code Generators](#the-six-code-generators)
4. [Java Entity Objects (JEO)](#java-entity-objects-jeo)
5. [MakeAll Orchestration](#makeall-orchestration)
6. [Specialization Patterns](#specialization-patterns)
7. [Use Cases and Examples](#use-cases-and-examples)
8. [Component Combinations](#component-combinations)
9. [Quick Reference](#quick-reference)

---

## Overview

The JAC Build System provides **six specialized code generators** that transform XML specifications into executable Java code. These generators work together to create complete enterprise applications with minimal hand-coding.

### The Six Generators

| Generator | Purpose | Input | Output |
|-----------|---------|-------|--------|
| **GenerateDdl** | Database schema creation | DDL XML spec | SQL CREATE TABLE scripts |
| **GenerateDtable** | Decision table logic | Rules XML spec | Decision table scripts |
| **GenerateJeo** | Entity object creation | Table schema | JEO classes + CRUD services |
| **GenerateFrame** | UI form generation | Frame XML spec | Form control scripts |
| **GenerateReport** | Report templates | Report XML spec | Report renderer scripts |
| **GenerateService** | Database services | Service XML spec | Service layer scripts |

### Generation Philosophy

```
XML Specification → JAC Generator → Java Script → JAC Compiler → Bytecode → Execution
```

**Key Principles:**
- **Specification-Driven**: Define in XML, generate in Java
- **Code Preservation**: Generated code preserves custom sections via `$Section` markers
- **Incremental Generation**: Only regenerate when XML changes
- **Template-Based**: Uses ARM templates for consistent code patterns

---

## Architecture Foundation

Before diving into generators, understand the three-layer architecture they build upon:

### Layer 1: JAC (Java Architects Companion)

**Location:** `source/java/com/esarks/jac/`
**Size:** 26 classes, 177 KB (jac.jar)

**Core Components:**
- `jac.java` - CLI entry point
- `Script.java` - Compilation orchestrator
- `ScriptWriter.java` - Template transformation engine
- `PropertyHelper.java` - XML property navigation
- `ParseXml.java` / `ParseXmlSchema.java` - XML processing
- `Merge.java` - Code preservation during regeneration
- `Jeo.java` - Base class for Java Entity Objects

**What JAC Provides:**
- PASS Script compilation and execution
- PASS XML parsing and schema validation
- PASS Property-based navigation (<![property:path]!>)
- PASS Dynamic class loading
- PASS Code generation and merging

### Layer 2: ARM (Architects Resource Model)

**Location:** `source/scripts/com/esarks/arm/`
**Components:** 19 Java + 62 scripts = 81 files

**Template Scripts:**
- `Method.java` - Method signature generation
- `Service.java` - Service class templates
- `ExitMethod.java` - Early exit patterns
- `ReturnMethod.java` / `FinalReturnMethod.java` - Return logic
- `GetEffectiveDate.java` - Date utilities
- `IterateReplyJeo.java` - JEO iteration patterns

**Application Framework:**
- `applicationFramework/` - Web server, routing, components
- `logging/` - Exception and process reporting
- `model/jeo/` - JEO models (ErrorJeo, ServiceJeo)
- `owl/` - Rules engine integration
- `plantuml/` - UML diagram generation

**What ARM Provides:**
- PASS Reusable code generation templates
- PASS Web application infrastructure
- PASS Logging and monitoring framework
- PASS Business rule engine
- PASS Service orchestration patterns

### Layer 3: MIC (Model-Interface-Controller)

**Location:** `source/java/com/esarks/mic/`
**Size:** 24 classes, 209 KB (mic.jar, includes ARM)

**MVC Components:**
- `Model.java` / `Entity.java` - Data models
- `View.java` / `Frame.java` - Presentation layer
- `Component.java` - UI component management
- `Service.java` - Service layer abstraction
- `Report.java` - Report generation

**Control System:**
- `Control.java` - Base control class
- `TextControl.java` - Text input fields
- `OptionControl.java` - Select dropdowns
- `SubmitControl.java` - Submit buttons
- `MultiRowControl.java` - Data grids

**Value Objects:**
- `ControlValue.java` - Base values
- `ButtonValue.java`, `ColumnValue.java`, `DateValue.java`
- `OptionValue.java`, `RowValue.java`

**What MIC Provides:**
- PASS Model-View-Component architecture
- PASS Rich UI control library
- PASS Form data binding
- PASS Report generation framework
- PASS Security management

---

## The Six Code Generators

### 1. GenerateDdl - Database Schema Generator

**Location:** `source/scripts/com/esarks/jac/generators/GenerateDdl.script`
**Size:** 1,084 lines

**Purpose:** Generate SQL DDL (Data Definition Language) statements from XML specifications.

**Input:** DDL XML specification file

**Example Input (DDL XML):**
```xml
<ddl name="com.example.CustomerTable">
  <table name="CUSTOMER" database="application">
    <column name="CUSTOMER_ID" type="integer" size="10" required="true"/>
    <column name="FIRST_NAME" type="varchar" size="50" required="true"/>
    <column name="LAST_NAME" type="varchar" size="50" required="true"/>
    <column name="EMAIL" type="varchar" size="100"/>
    <column name="CREATED_DATE" type="timestamp" required="true"/>
    <primaryKey>CUSTOMER_ID</primaryKey>
    <index name="IDX_CUSTOMER_EMAIL" columns="EMAIL"/>
  </table>
</ddl>
```

**Generated Output:**
1. **CREATE TABLE statement** (SQL)
```sql
CREATE TABLE CUSTOMER (
  CUSTOMER_ID INTEGER NOT NULL,
  FIRST_NAME VARCHAR(50) NOT NULL,
  LAST_NAME VARCHAR(50) NOT NULL,
  EMAIL VARCHAR(100),
  CREATED_DATE TIMESTAMP NOT NULL,
  PRIMARY KEY (CUSTOMER_ID)
);

CREATE INDEX IDX_CUSTOMER_EMAIL ON CUSTOMER(EMAIL);
```

2. **DDL documentation** (HTML)
3. **Database metadata** (XML)

**Features:**
- PASS Multi-database support (Oracle, MySQL, PostgreSQL, SQL Server)
- PASS Primary keys, foreign keys, indexes
- PASS Database-specific data types
- PASS Table and column constraints
- PASS View definitions
- PASS Sequence generation (for Oracle)

**Supported Data Types:**
- `varchar`, `char` - String types
- `integer`, `bigint`, `decimal` - Numeric types
- `date`, `time`, `timestamp` - Temporal types
- `blob`, `clob` - Large object types

**Stereotypes (Database Variations):**
- `oracle` - Oracle-specific syntax
- `sqlServer` - SQL Server syntax
- `mySql` - MySQL syntax
- `postgreSql` - PostgreSQL syntax

**Use Cases:**
1. **Initial Schema Creation** - Generate database schema from design
2. **Schema Documentation** - Auto-document database structure
3. **Migration Scripts** - Generate ALTER statements for schema changes
4. **Multi-Database Deployment** - Generate DB-specific DDL from single spec

---

### 2. GenerateDtable - Decision Table Generator

**Location:** `source/scripts/com/esarks/jac/generators/GenerateDtable.script`
**Size:** 580 lines

**Purpose:** Generate executable decision table logic from rule specifications.

**What is a Decision TablePENDING**

A decision table is a precise way to model complex business logic by expressing:
- **Conditions**: Boolean tests that evaluate to true/false
- **Actions**: Operations to perform when conditions match
- **Scenarios**: Combinations of condition results that trigger specific actions

**Input:** Rules XML specification

**Example Input (Rules XML):**
```xml
<root name="com.example.OrderApproval">
  <title>Order Approval Rules</title>
  <text>Determines if order requires manual approval</text>

  <dtable name="checkOrderApproval" visibility="public" return="boolean">
    <title>Order Approval Decision Table</title>
    <argument type="Order" name="order"/>
    <argument type="Customer" name="customer"/>

    <condition id="1" symbolicId="highValue">
      <text>Order value exceeds threshold</text>
    </condition>
    <condition id="2" symbolicId="newCustomer">
      <text>Customer account is less than 30 days old</text>
    </condition>
    <condition id="3" symbolicId="riskFlag">
      <text>Customer has risk flag</text>
    </condition>

    <action id="1" symbolicId="autoApprove">
      <text>Automatically approve order</text>
    </action>
    <action id="2" symbolicId="manualReview">
      <text>Route to manual review</text>
    </action>
    <action id="3" symbolicId="rejectOrder">
      <text>Reject order automatically</text>
    </action>

    <!-- Scenario 1: Low value, established customer → Auto-approve -->
    <scenario>
      <condition id="1" evaluate="false"/>  <!-- NOT high value -->
      <condition id="2" evaluate="false"/>  <!-- NOT new customer -->
      <condition id="3" evaluate="false"/>  <!-- NO risk flag -->
      <action id="1"/>  <!-- Auto-approve -->
    </scenario>

    <!-- Scenario 2: High value OR new customer → Manual review -->
    <scenario>
      <condition id="1" evaluate="true"/>   <!-- High value -->
      <action id="2"/>  <!-- Manual review -->
    </scenario>

    <!-- Scenario 3: Risk flag present → Reject -->
    <scenario>
      <condition id="3" evaluate="true"/>   <!-- Has risk flag -->
      <action id="3"/>  <!-- Reject order -->
    </scenario>
  </dtable>
</root>
```

**Generated Output:**

1. **HTML Documentation** (OrderApproval.html)
   - Visual decision table matrix
   - Condition/action descriptions
   - Scenario flow documentation

2. **Executable Script** (OrderApproval.script)
```java
public boolean checkOrderApproval(Order aOrder, Customer aCustomer) {

  // Condition enablement flags
  boolean lConditionEnable_highValue = true;
  boolean lConditionEnable_newCustomer = true;
  boolean lConditionEnable_riskFlag = true;

  // Decision table processing loop
  boolean lDecisionTableProcessing = false;
  do {
    lDecisionTableProcessing = false;
    boolean lScenarioProcessing = true;
    int lNextScenario = 0;

    do {
      // Evaluate conditions
      int lConditionResult_highValue = 0;
      if (lConditionEnable_highValue) {
        // TODO: Place condition logic here
        // Example: if (aOrder.getTotalAmount() > 10000) lConditionResult_highValue = 1; else lConditionResult_highValue = -1;
        lConditionResult_highValue = 0;
      }

      int lConditionResult_newCustomer = 0;
      if (lConditionEnable_newCustomer) {
        // TODO: Place condition logic here
        lConditionResult_newCustomer = 0;
      }

      int lConditionResult_riskFlag = 0;
      if (lConditionEnable_riskFlag) {
        // TODO: Place condition logic here
        lConditionResult_riskFlag = 0;
      }

      int lScenarioTaken = 0;
      ArrayList lActionArrayList = new ArrayList();

      // Scenario evaluation
      if (lScenarioProcessing && lNextScenario <= 1 &&
          (lConditionResult_highValue < 0) &&
          (lConditionResult_newCustomer < 0) &&
          (lConditionResult_riskFlag < 0)) {
        lScenarioTaken = 1;
        lScenarioProcessing = false;
        lActionArrayList.add("autoApprove");
      }
      else if (lScenarioProcessing && lNextScenario <= 2 &&
               (lConditionResult_highValue > 0)) {
        lScenarioTaken = 2;
        lScenarioProcessing = false;
        lActionArrayList.add("manualReview");
      }
      else if (lScenarioProcessing && lNextScenario <= 3 &&
               (lConditionResult_riskFlag > 0)) {
        lScenarioTaken = 3;
        lScenarioProcessing = false;
        lActionArrayList.add("rejectOrder");
      }
      else {
        // No scenario taken
        lScenarioProcessing = false;
        lScenarioTaken = -1;
      }

      // Execute actions
      for (int lActionIdx=0; lActionIdx < lActionArrayList.size(); lActionIdx++) {
        if (((String) lActionArrayList.get(lActionIdx)).equals("autoApprove")) {
          // TODO: Place action code here
          // Example: return true;
        }
        else if (((String) lActionArrayList.get(lActionIdx)).equals("manualReview")) {
          // TODO: Place action code here
          // Example: routeToManualReview(aOrder); return false;
        }
        else if (((String) lActionArrayList.get(lActionIdx)).equals("rejectOrder")) {
          // TODO: Place action code here
          // Example: return false;
        }
      }
    } while(lScenarioProcessing);
  } while(lDecisionTableProcessing);

  return true;  // Default return
}
```

**Generated Structure:**
- PASS **Condition evaluation logic** with symbolic IDs
- PASS **Scenario matching engine** with priority ordering
- PASS **Action execution framework** with sequencing
- PASS **Preserved code sections** for custom logic (`$Section` markers)
- PASS **Logging integration** (if enabled)
- PASS **Re-execution support** (decision table loops)

**Key Features:**
- **Tabular Logic**: Express complex "if-then" logic as a table
- **Visual Documentation**: HTML output shows truth tables
- **Maintainable**: Change XML, regenerate code
- **Testable**: Each scenario can be unit tested
- **Debuggable**: Generated code is readable Java
- **Logging**: Built-in trace for which scenario executed

**Decision Table Patterns:**

**Pattern 1: First-Match (Sequential)**
```
Scenario 1 checked
  ↓ No match
Scenario 2 checked
  ↓ Match found
Execute Scenario 2 actions
```

**Pattern 2: Priority-Based**
```
All scenarios evaluated
  ↓
Highest priority match selected
  ↓
Execute actions
```

**Pattern 3: Multi-Match (Execute Multiple)**
```
All scenarios evaluated
  ↓
Execute all matching scenario actions
```

**Use Cases:**
1. **Business Rule Engines** - Approval workflows, pricing rules
2. **Eligibility Determination** - Insurance underwriting, loan approval
3. **Routing Logic** - Order fulfillment, ticket routing
4. **Configuration Management** - Feature flags, A/B testing
5. **Tax Calculation** - Multi-jurisdictional tax rules
6. **Discount Calculations** - Promotional pricing logic

**Advantages Over If-Then-Else:**
- PASS **Visual**: Easy to see all scenarios at a glance
- PASS **Complete**: Ensures all condition combinations are considered
- PASS **Traceable**: Know which scenario triggered
- PASS **Modifiable**: Update XML without touching Java logic

---

### 3. GenerateJeo - Java Entity Object Generator

**Location:** `source/scripts/com/esarks/jac/generators/GenerateJeo.script`
**Size:** 2,887 lines (largest generator)

**Purpose:** Generate complete JEO (Java Entity Object) classes with CRUD operations from database table definitions.

**What is a JEOPENDING**

A JEO is a Java class that represents a database table row with:
- Type-safe getters/setters for each column
- Database persistence methods (insert, update, delete, select)
- Property-based access for dynamic scenarios
- Parent-child relationship management
- Validation and business logic hooks

**Input:** DDL XML specification (same as GenerateDdl)

**Example Input:**
```xml
<ddl name="com.example.model">
  <table name="CUSTOMER" database="application">
    <column name="CUSTOMER_ID" type="integer" size="10" required="true"/>
    <column name="FIRST_NAME" type="varchar" size="50" required="true"/>
    <column name="LAST_NAME" type="varchar" size="50" required="true"/>
    <column name="EMAIL" type="varchar" size="100"/>
    <column name="PHONE" type="varchar" size="20"/>
    <column name="STATUS" type="varchar" size="20" default="ACTIVE"/>
    <column name="CREATED_DATE" type="timestamp" required="true"/>
    <column name="UPDATED_DATE" type="timestamp"/>
    <primaryKey>CUSTOMER_ID</primaryKey>
  </table>
</ddl>
```

**Generated Outputs:**

**1. Customer.script (JEO Class)**
```java
package com.example.model;

public class Customer extends com.esarks.jac.Jeo {

  // Attributes with type safety
  private Integer CUSTOMER_ID;
  private String FIRST_NAME;
  private String LAST_NAME;
  private String EMAIL;
  private String PHONE;
  private String STATUS;
  private java.sql.Timestamp CREATED_DATE;
  private java.sql.Timestamp UPDATED_DATE;

  // Null flags
  private boolean CUSTOMER_ID_isNull = true;
  private boolean FIRST_NAME_isNull = true;
  // ... (one per column)

  // Constructors
  public Customer() {
    super();
    setTableName("CUSTOMER");
  }

  public Customer(String aInstanceName) {
    super(aInstanceName);
    setTableName("CUSTOMER");
  }

  // Type-safe getters
  public Integer getCUSTOMER_ID() { return CUSTOMER_ID; }
  public String getFIRST_NAME() { return FIRST_NAME; }
  public String getLAST_NAME() { return LAST_NAME; }
  public String getEMAIL() { return EMAIL; }
  // ... (one per column)

  // Type-safe setters
  public void setCUSTOMER_ID(Integer aValue) {
    CUSTOMER_ID = aValue;
    CUSTOMER_ID_isNull = false;
  }

  public void setFIRST_NAME(String aValue) {
    FIRST_NAME = aValue;
    FIRST_NAME_isNull = false;
  }
  // ... (one per column)

  // Null checkers
  public boolean isCUSTOMER_IDNull() { return CUSTOMER_ID_isNull; }
  public boolean isFIRST_NAMENull() { return FIRST_NAME_isNull; }
  // ... (one per column)

  // Property-based access (for dynamic scenarios)
  public PropertyValue getCUSTOMER_IDPropertyValue() {
    if (CUSTOMER_ID_isNull) return new PropertyValue();
    return new PropertyValue(CUSTOMER_ID);
  }

  public PropertyValue getFIRST_NAMEPropertyValue() {
    if (FIRST_NAME_isNull) return new PropertyValue();
    return new PropertyValue(FIRST_NAME);
  }
  // ... (one per column)

  // Database mapping
  public void mapFromResultSet(ResultSet aResultSet,
                               boolean aUseColumnLabel,
                               boolean aSetJeoDefaults) {
    try {
      // Map each column from ResultSet
      CUSTOMER_ID = aResultSet.getInt("CUSTOMER_ID");
      CUSTOMER_ID_isNull = aResultSet.wasNull();

      FIRST_NAME = aResultSet.getString("FIRST_NAME");
      FIRST_NAME_isNull = aResultSet.wasNull();

      // ... (all columns)
    } catch (SQLException e) {
      // Error handling
    }
  }

  // Type metadata
  public String getTypeByName(String aName) {
    if (aName.equals("CUSTOMER_ID")) return "integer";
    if (aName.equals("FIRST_NAME")) return "varchar";
    if (aName.equals("LAST_NAME")) return "varchar";
    // ... (all columns)
    return super.getTypeByName(aName);
  }

  // Attribute listing
  public String[] getAttributeNames() {
    return new String[] {
      "CUSTOMER_ID",
      "FIRST_NAME",
      "LAST_NAME",
      "EMAIL",
      "PHONE",
      "STATUS",
      "CREATED_DATE",
      "UPDATED_DATE"
    };
  }
}
```

**2. CustomerCrud_Crud.xml (CRUD Service Specification)**
```xml
<services name="com.example.model.CustomerCrud">

  <!-- INSERT Service -->
  <service name="insertCustomer" jeo="com.esarks.arm.model.jeo.ServiceJeo">
    <sql database="application">
      <statement type="PreparedStatement" method="execute">
        INSERT INTO CUSTOMER (
          CUSTOMER_ID,
          FIRST_NAME,
          LAST_NAME,
          EMAIL,
          PHONE,
          STATUS,
          CREATED_DATE
        ) VALUES (PENDING, PENDING, PENDING, PENDING, PENDING, PENDING, PENDING)
      </statement>
      <value>
        <jeo name="Customer" iterate="false">
          <value attribute="CUSTOMER_ID"/>
          <value attribute="FIRST_NAME"/>
          <value attribute="LAST_NAME"/>
          <value attribute="EMAIL"/>
          <value attribute="PHONE"/>
          <value attribute="STATUS"/>
          <value attribute="CREATED_DATE"/>
        </jeo>
      </value>
    </sql>
  </service>

  <!-- UPDATE Service -->
  <service name="updateCustomer" jeo="com.esarks.arm.model.jeo.ServiceJeo">
    <sql database="application">
      <statement type="PreparedStatement" method="execute">
        UPDATE CUSTOMER SET
          FIRST_NAME = PENDING,
          LAST_NAME = PENDING,
          EMAIL = PENDING,
          PHONE = PENDING,
          STATUS = PENDING,
          UPDATED_DATE = ?
        WHERE CUSTOMER_ID = ?
      </statement>
      <value>
        <jeo name="Customer" iterate="false">
          <value attribute="FIRST_NAME"/>
          <value attribute="LAST_NAME"/>
          <value attribute="EMAIL"/>
          <value attribute="PHONE"/>
          <value attribute="STATUS"/>
          <value attribute="UPDATED_DATE"/>
          <value attribute="CUSTOMER_ID"/>  <!-- WHERE clause -->
        </jeo>
      </value>
    </sql>
  </service>

  <!-- DELETE Service -->
  <service name="deleteCustomer" jeo="com.esarks.arm.model.jeo.ServiceJeo">
    <sql database="application">
      <statement type="PreparedStatement" method="execute">
        DELETE FROM CUSTOMER WHERE CUSTOMER_ID = ?
      </statement>
      <value>
        <jeo name="Customer" iterate="false">
          <value attribute="CUSTOMER_ID"/>
        </jeo>
      </value>
    </sql>
  </service>

  <!-- SELECT by ID Service -->
  <service name="selectCustomerById" jeo="com.esarks.arm.model.jeo.ServiceJeo">
    <sql database="application">
      <statement type="PreparedStatement" method="executeQuery">
        SELECT * FROM CUSTOMER WHERE CUSTOMER_ID = ?
      </statement>
      <value>
        <jeo name="Request">
          <value property="customerId"/>
        </jeo>
      </value>
      <result>
        <jeo name="Reply">
          <jeo name="Customer" mapFromResultSet="true"/>
        </jeo>
      </result>
    </sql>
  </service>

  <!-- SELECT ALL Service -->
  <service name="selectAllCustomers" jeo="com.esarks.arm.model.jeo.ServiceJeo">
    <sql database="application">
      <statement type="PreparedStatement" method="executeQuery">
        SELECT * FROM CUSTOMER ORDER BY LAST_NAME, FIRST_NAME
      </statement>
      <result>
        <jeo name="Reply">
          <jeo name="Customer" mapFromResultSet="true"/>
        </jeo>
      </result>
    </sql>
  </service>

</services>
```

**3. CustomerCrud.script (Generated from #2 via GenerateService)**

This service layer script is created by feeding `CustomerCrud_Crud.xml` into **GenerateService**. See [GenerateService](#6-generateservice---database-service-generator) below.

**JEO Inheritance Hierarchy:**
```
java.lang.Object
  └── com.esarks.jac.Jeo (base JEO class)
        └── com.example.model.Customer (generated)
```

**Key JEO Features:**

1. **Type Safety**
   - Strong typing for all columns
   - Compile-time error checking
   - IDE auto-completion

2. **Null Handling**
   - Explicit null flags for each attribute
   - `isXxxNull()` methods
   - Prevents accidental null pointer exceptions

3. **Property-Based Access**
   - `getXxxPropertyValue()` returns `PropertyValue` wrapper
   - Enables dynamic/reflective access
   - Used by report generators and generic frameworks

4. **ResultSet Mapping**
   - Automatic mapping from JDBC ResultSet
   - Handles type conversions
   - Manages null values

5. **Parent-Child Relationships**
   - `addJeo(Jeo child)` - Add child JEO
   - `getJeoByInstanceName(String name)` - Get children by name
   - `getJeoByTypeName(String type)` - Get children by type

6. **Code Preservation**
   - `$Section` markers preserve custom code
   - Regeneration doesn't overwrite customizations

**Use Cases:**
1. **ORM (Object-Relational Mapping)** - Database to Java object mapping
2. **Data Transfer Objects** - API request/response payloads
3. **Domain Models** - Business entity representation
4. **Report Data Sources** - Populate reports from database
5. **Service Layer DTOs** - Transfer data between layers

**Advantages:**
- PASS **Compile-Time Safety**: Catch errors before runtime
- PASS **Self-Documenting**: Column types visible in code
- PASS **Consistent**: All JEOs follow same pattern
- PASS **Testable**: Easy to create test fixtures
- PASS **Evolvable**: Regenerate when schema changes

---

### 4. GenerateFrame - UI Form Generator

**Location:** `source/scripts/com/esarks/jac/generators/GenerateFrame.script`
**Size:** 397 lines

**Purpose:** Generate web UI forms (frames) with data-bound controls from XML specifications.

**Input:** Frame XML specification

**Example Input (Frame XML):**
```xml
<frames>
  <frame name="customerEdit" title="Customer Information">

    <!-- Text Input Controls -->
    <control type="text" name="firstName" caption="First Name"
             grid="1" column="1" maxlength="50" size="30" uppercase="false"/>
    <control type="text" name="lastName" caption="Last Name"
             grid="1" column="2" maxlength="50" size="30"/>
    <control type="text" name="email" caption="Email"
             grid="2" column="1" maxlength="100" size="50"/>
    <control type="text" name="phone" caption="Phone"
             grid="2" column="2" maxlength="20" size="20"/>

    <!-- Select Dropdown -->
    <control type="select" name="status" caption="Status" grid="3" column="1">
      <option value="ACTIVE">Active</option>
      <option value="INACTIVE">Inactive</option>
      <option value="SUSPENDED">Suspended</option>
    </control>

    <!-- Radio Buttons -->
    <control type="radio" name="customerType" caption="Customer Type" grid="3" column="2">
      <option value="RETAIL">Retail</option>
      <option value="WHOLESALE">Wholesale</option>
      <option value="GOVERNMENT">Government</option>
    </control>

    <!-- Checkboxes -->
    <control type="checkbox" name="preferences" caption="Preferences" grid="4" column="1">
      <option value="EMAIL_MARKETING">Email Marketing</option>
      <option value="SMS_NOTIFICATIONS">SMS Notifications</option>
      <option value="NEWSLETTER">Newsletter</option>
    </control>

    <!-- Date Picker -->
    <control type="date" name="birthDate" caption="Date of Birth" grid="5" column="1"/>

    <!-- Submit Buttons -->
    <control type="submit" name="actions" caption="" grid="6" column="1">
      <button type="submit" name="saveButton" value="Save"
              service:script="com.example.CustomerService"
              service:method="saveCustomer"
              service:map="mapCustomerToFrame"/>
      <button type="button" name="cancelButton" value="Cancel" event="cancelEdit"/>
    </control>

    <!-- Multi-Row Grid (for related data) -->
    <control type="multirow" name="orders" caption="Recent Orders" grid="7" column="1">
      <rowColumn name="orderNumber" title="Order #" hrefMethod="viewOrder" hrefRowColumn="orderId"
                 service:script="com.example.OrderService"
                 service:method="getOrderDetails"
                 service:map="mapOrderToFrame"/>
      <rowColumn name="orderDate" title="Date"/>
      <rowColumn name="amount" title="Amount"/>
      <rowColumn name="status" title="Status"/>
    </control>

    <!-- Service Mappings -->
    <service name="loadCustomer"
             script="com.example.CustomerService"
             method="loadCustomerById"
             map="mapCustomerToFrame"/>

    <!-- Mapping Configuration -->
    <maps>
      <map name="mapCustomerToFrame" jeo:name="Customer" jeo:control="">
        <jeo:property from="CUSTOMER_ID" to="customerId"/>
        <jeo:property from="FIRST_NAME" to="firstName"/>
        <jeo:property from="LAST_NAME" to="lastName"/>
        <jeo:property from="EMAIL" to="email"/>
        <jeo:property from="PHONE" to="phone"/>
        <jeo:property from="STATUS" to="status" value="ACTIVE"/>
        <jeo:property from="CUSTOMER_TYPE" to="customerType" value="RETAIL"/>
        <jeo:property from="BIRTH_DATE" to="birthDate" format="date"/>
      </map>
    </maps>
  </frame>
</frames>
```

**Generated Output (CustomerEdit.script):**
```java
package com.example.view;

public class CustomerEdit extends com.esarks.mic.MicScriptHelper {

  //$Section=generatedBody$Preserve=yes
  // TODO: Custom fields and helper methods
  //$Section=generatedBody$Preserve=no

  // Register all frames on initialization
  public void registerFrames() {
    {
      Frame lFrame = new Frame();
      lFrame.setName("customerEdit");
      lFrame.setTitle("Customer Information");
      getFrames().add(lFrame);

      // Text Control: firstName
      {
        TextControl lControl = new TextControl();
        lControl.setName("firstName");
        lControl.setType("text");
        lControl.setCaption("First Name");
        lControl.setGrid("1");
        lControl.setColumn("1");
        lControl.setMaxLength(50);
        lControl.setSize(30);
        lControl.setUppercase(false);
        lFrame.addControl(lControl);
        ControlValue lControlValue = new ControlValue();
        lControl.setControlValue(lControlValue);
      }

      // Text Control: lastName
      {
        TextControl lControl = new TextControl();
        lControl.setName("lastName");
        lControl.setType("text");
        lControl.setCaption("Last Name");
        lControl.setGrid("1");
        lControl.setColumn("2");
        lControl.setMaxLength(50);
        lControl.setSize(30);
        lFrame.addControl(lControl);
        ControlValue lControlValue = new ControlValue();
        lControl.setControlValue(lControlValue);
      }

      // Option Control: status (select dropdown)
      {
        OptionControl lControl = new OptionControl();
        lControl.setName("status");
        lControl.setType("select");
        lControl.setCaption("Status");
        lControl.setGrid("3");
        lControl.setColumn("1");
        lFrame.addControl(lControl);

        {
          OptionValue lControlValue = new OptionValue();
          lControlValue.setValue("ACTIVE");
          lControlValue.setName("Active");
          lControl.addControlValue(lControlValue);
        }
        {
          OptionValue lControlValue = new OptionValue();
          lControlValue.setValue("INACTIVE");
          lControlValue.setName("Inactive");
          lControl.addControlValue(lControlValue);
        }
        {
          OptionValue lControlValue = new OptionValue();
          lControlValue.setValue("SUSPENDED");
          lControlValue.setName("Suspended");
          lControl.addControlValue(lControlValue);
        }
      }

      // MultiRow Control: orders
      {
        MultiRowControl lControl = new MultiRowControl();
        lControl.setName("orders");
        lControl.setType("multirow");
        lControl.setCaption("Recent Orders");
        lControl.setGrid("7");
        lControl.setColumn("1");
        lFrame.addControl(lControl);

        {
          ColumnValue lControlValue = new ColumnValue();
          lControlValue.setTitle("Order #");
          lControlValue.setName("orderNumber");
          lControlValue.setHrefMethod("viewOrder");
          lControlValue.setHrefRowColumn("orderId");
          lControl.addControlValue(lControlValue);
        }
        {
          ColumnValue lControlValue = new ColumnValue();
          lControlValue.setTitle("Date");
          lControlValue.setName("orderDate");
          lControl.addControlValue(lControlValue);
        }
        {
          ColumnValue lControlValue = new ColumnValue();
          lControlValue.setTitle("Amount");
          lControlValue.setName("amount");
          lControl.addControlValue(lControlValue);
        }
        {
          ColumnValue lControlValue = new ColumnValue();
          lControlValue.setTitle("Status");
          lControlValue.setName("status");
          lControl.addControlValue(lControlValue);
        }
      }
    }
  }

  // Service: Load customer data
  public void service_loadCustomer() {
    //$Section=service_loadCustomer$Preserve=no
    Frame lFrame = getFrame("customerEdit");
    if (lFrame == null) return;
    com.esarks.arm.model.jeo.ServiceJeo lServiceJeo =
        (com.esarks.arm.model.jeo.ServiceJeo) lFrame.getServiceJeo();
    lFrame.setServiceJeo(lServiceJeo);
    Object lObject = loadScript("com.example.CustomerService", "");
    iScript.execMethod(lObject, "loadCustomerById", new Object[]{lServiceJeo});
    if (lServiceJeo.getJeoByInstanceNameSize("Error") == 0) {
      iScript.execMethod(this, "mapCustomerToFrame", new Object[] {lFrame});
    }
    lFrame.setErrors(lServiceJeo.getJeoByInstanceName("Error"));
    //$Section=service_loadCustomer$Preserve=no
  }

  // Mapping: JEO to Frame
  public void mapCustomerToFrame(Frame aFrame) {
    //$Section=mapCustomerToFrame$Preserve=no
    com.esarks.arm.model.jeo.ServiceJeo lServiceJeo =
        (com.esarks.arm.model.jeo.ServiceJeo) aFrame.getServiceJeo();
    if (lServiceJeo == null) return;

    ArrayList lArrayList = lServiceJeo.getReply().getJeoByInstanceName("Customer");
    if (lArrayList.size() == 0) return;

    Customer lJeo = (Customer) lArrayList.get(0);

    aFrame.setValue("customerId", lJeo.getCUSTOMER_IDPropertyValue().toString());
    aFrame.setValue("firstName", lJeo.getFIRST_NAMEPropertyValue().toString());
    aFrame.setValue("lastName", lJeo.getLAST_NAMEPropertyValue().toString());
    aFrame.setValue("email", lJeo.getEMAILPropertyValue().toString());
    aFrame.setValue("phone", lJeo.getPHONEPropertyValue().toString());
    aFrame.setOptionValue("status", "ACTIVE", lJeo.getSTATUSPropertyValue().toString());
    aFrame.setDateValue("birthDate",
      lJeo.getBIRTH_DATEPropertyValue().toDateString("MM-dd-yyyy"),
      lJeo.getBIRTH_DATEPropertyValue().toDateString("MM"),
      lJeo.getBIRTH_DATEPropertyValue().toDateString("dd"),
      lJeo.getBIRTH_DATEPropertyValue().toDateString("yyyy"));
    //$Section=mapCustomerToFrame$Preserve=no
  }

  // MultiRow href handler
  public void viewOrder(String aArgument) {
    //$Section=viewOrder$Preserve=no
    Frame lFrame = getFrame("customerEdit");
    if (lFrame == null) return;
    com.esarks.arm.model.jeo.ServiceJeo lServiceJeo = new com.esarks.arm.model.jeo.ServiceJeo();
    lFrame.setServiceJeo(lServiceJeo);
    lServiceJeo.getRequest().setPropertyValue("orderId", new PropertyValue(aArgument));
    Object lObject = loadScript("com.example.OrderService", "");
    iScript.execMethod(lObject, "getOrderDetails", new Object[]{lServiceJeo});
    if (lServiceJeo.getError() == null || lServiceJeo.getError().getSeverity() == 10) {
      iScript.execMethod(this, "mapOrderToFrame", new Object[] {lFrame});
    }
    lFrame.setErrors(lServiceJeo.getJeoByInstanceName("Error"));
    //$Section=viewOrder$Preserve=no
  }

  // Getters/Setters for data controls
  public void set_customerEdit_firstName(String aValue) {
    //$Section=set_customerEdit_firstName$Preserve=no
    Frame lFrame = getFrame("customerEdit");
    if (lFrame == null) return;
    lFrame.setValue("firstName", aValue);
    //$Section=set_customerEdit_firstName$Preserve=no
  }

  public String get_customerEdit_firstName() {
    //$Section=get_customerEdit_firstName$Preserve=no
    Frame lFrame = getFrame("customerEdit");
    if (lFrame == null) return null;
    return lFrame.getControl("firstName").getControlValue().getValue();
    //$Section=get_customerEdit_firstName$Preserve=no
  }

  // ... (similar getters/setters for all controls)
}
```

**Supported Control Types:**

| Control | Purpose | Generates |
|---------|---------|-----------|
| `text` | Single-line text input | TextControl with validation |
| `password` | Password input (masked) | TextControl with masking |
| `select` | Dropdown menu | OptionControl with options |
| `radio` | Radio button group | OptionControl (single select) |
| `checkbox` | Checkbox group | OptionControl (multi-select) |
| `date` | Date picker | DateValue control |
| `submit` | Submit buttons | SubmitControl with ButtonValues |
| `multirow` | Data grid | MultiRowControl with ColumnValues |
| `data` | Read-only data display | Control with ControlValue |

**Frame Architecture:**
```
Frame (container)
  ├── Control[] (form elements)
  │     ├── TextControl
  │     ├── OptionControl
  │     ├── SubmitControl
  │     └── MultiRowControl
  └── ServiceJeo (data transfer)
        ├── Request (input data)
        └── Reply (output data)
              └── JEO[] (business objects)
```

**Key Features:**
- PASS **Data Binding**: Automatic JEO-to-Form mapping
- PASS **Service Integration**: Built-in service invocation
- PASS **Validation**: Client and server-side validation
- PASS **Grid Layout**: Organize controls in rows/columns
- PASS **Multi-Row Grids**: Display collections
- PASS **Event Handling**: Button clicks, links

**Use Cases:**
1. **CRUD Forms** - Create/Read/Update/Delete interfaces
2. **Search Forms** - Criteria input with results grid
3. **Wizards** - Multi-step data entry
4. **Dashboards** - Display and edit data
5. **Detail Views** - Show entity with related data

---

### 5. GenerateReport - Report Template Generator

**Location:** `source/scripts/com/esarks/jac/generators/GenerateReport.script`
**Size:** 982 lines

**Purpose:** Generate report rendering scripts from XML specifications that define report layouts and data binding.

**Input:** Report XML specification

**Example Input (Report XML):**
```xml
<report name="com.example.report.CustomerReport" inJeo="com.esarks.arm.model.jeo.ServiceJeo">

  <!-- Top-level data -->
  <jeo instance="ReportHeader" type="ReportHeader">
    <column attribute="reportDate" heading="Report Date" width="100"/>
    <column attribute="totalCustomers" heading="Total Customers" width="100"/>
  </jeo>

  <!-- Customer list -->
  <jeo instance="Customer" type="Customer">
    <column attribute="CUSTOMER_ID" heading="ID" width="50">
      <sort type="int" ascending="true">1</sort>
    </column>
    <column attribute="FIRST_NAME" heading="First Name" width="150">
      <tag name="class" default="string">css-class</tag>
    </column>
    <column attribute="LAST_NAME" heading="Last Name" width="150">
      <sort type="string" ascending="true">2</sort>
    </column>
    <column attribute="EMAIL" heading="Email" width="200"/>
    <column attribute="STATUS" heading="Status" width="100">
      <tag name="style" default="string">status-style</tag>
    </column>

    <!-- Nested: Customer orders -->
    <jeo instance="Order" type="Order">
      <column attribute="ORDER_NUMBER" heading="Order #" width="100"/>
      <column attribute="ORDER_DATE" heading="Date" width="100"/>
      <column attribute="AMOUNT" heading="Amount" width="100">
        <tag name="format" default="currency">money-format</tag>
      </column>
    </jeo>
  </jeo>

</report>
```

**Generated Outputs:**

**1. CustomerReport.xml (Empty Template)**
```xml
<mic.element type="Report" title="">
</mic.element>
```

**2. CustomerReport.script (Report Renderer)**
```java
package com.example.report;

public class CustomerReport extends com.esarks.mic.MicScriptHelper {

  // Main render method (both HTML and XML)
  public void render(String aOutput, String aStereotype, com.esarks.arm.model.jeo.ServiceJeo aJeo) {
    renderHtml(aOutput, aJeo);
    renderXml(aOutput, aJeo);
  }

  public void render(String aOutput, com.esarks.arm.model.jeo.ServiceJeo aJeo) {
    renderHtml(aOutput, aJeo);
    renderXml(aOutput, aJeo);
  }

  // HTML Renderer
  public void renderHtml(String aOutput, com.esarks.arm.model.jeo.ServiceJeo aJeo) {
    openOutput(path(aOutput) + ".html");
    com.esarks.arm.model.jeo.ServiceJeo lJeo = aJeo;

    int lNbrColumns_ = 0;

    // Get ReportHeader JEO
    ArrayList lArrayList = lJeo.getJeoByInstanceName("ReportHeader");
    int lNbrColumnsx_ReportHeader = 2;
    String lTableEndx_ReportHeader = "</table>";
    if (lNbrColumns_ > 0) lTableEndx_ReportHeader = "</table></td></tr>";

    boolean lPrintHeadingx_ReportHeader = true;
    for (int lIdx=0; lIdx < lArrayList.size(); lIdx++) {
      ReportHeader lJeox = (ReportHeader) lArrayList.get(lIdx);

      if (lNbrColumns_ > 0) {
        %><tr><td colspan="<%lNbrColumns_<%>"><%
      }

      if (lPrintHeadingx_ReportHeader) {
        lPrintHeadingx_ReportHeader=false;
        %><table cellspacing="0" cellpadding="0" border="1"><%
        %><tr><%
        %><td width="100">Report Date&nbsp;</td><%
        %><td width="100">Total Customers&nbsp;</td><%
        %></tr><%
      }

      %><tr><%
      %><td><%lJeox.getReportDatePropertyValue().toString()<%>&nbsp;</td><%
      %><td><%lJeox.getTotalCustomersPropertyValue().toString()<%>&nbsp;</td><%
      %></tr><%
    }
    if (!lPrintHeadingx_ReportHeader) %><%lTableEndx_ReportHeader<%><%

    // Get Customer JEOs
    lArrayList = lJeo.getJeoByInstanceName("Customer");

    // Sort customers if specified
    for (int lIdx=0; lIdx < lArrayList.size(); lIdx++) {
      Jeo lSortJeo = (Jeo) lArrayList.get(lIdx);
      PropertyValue lSortPropertyValue = lSortJeo.getPropertyValueByName("CUSTOMER_ID");
      if (lSortPropertyValue == null) {
        lSortPropertyValue = lSortJeo.getPropertyValue("CUSTOMER_ID");
        if (lSortPropertyValue == null) lSortPropertyValue = new PropertyValue();
      }
      String lSort = lSortPropertyValue.toString();
      lSort = "0000000000000000000000".substring(0, 20 - lSort.length()) + lSort +
              (new DecimalFormat("00000000000")).format(lIdx);
      lSortJeo.setPropertyValue("CUSTOMER_ID.sort", new PropertyValue(lSort));
    }
    Jeo.sort(lArrayList, "CUSTOMER_ID.sort", true);

    // Second sort by LAST_NAME
    for (int lIdx=0; lIdx < lArrayList.size(); lIdx++) {
      Jeo lSortJeo = (Jeo) lArrayList.get(lIdx);
      PropertyValue lSortPropertyValue = lSortJeo.getPropertyValueByName("LAST_NAME");
      if (lSortPropertyValue == null) {
        lSortPropertyValue = lSortJeo.getPropertyValue("LAST_NAME");
        if (lSortPropertyValue == null) lSortPropertyValue = new PropertyValue();
      }
      String lSort = lSortPropertyValue.toString();
      lSort += (new DecimalFormat("00000000000")).format(lIdx);
      lSortJeo.setPropertyValue("LAST_NAME.sort", new PropertyValue(lSort));
    }
    Jeo.sort(lArrayList, "LAST_NAME.sort", true);

    boolean lPrintHeadingx_Customer = true;
    int lNbrColumnsx_Customer = 5;
    String lTableEndx_Customer = "</table>";

    for (int lIdx=0; lIdx < lArrayList.size(); lIdx++) {
      Customer lJeox = (Customer) lArrayList.get(lIdx);

      if (lPrintHeadingx_Customer) {
        lPrintHeadingx_Customer=false;
        %><table cellspacing="0" cellpadding="0" border="1"><%
        %><tr><%
        %><td width="50">ID&nbsp;</td><%
        %><td width="150">First Name&nbsp;</td><%
        %><td width="150">Last Name&nbsp;</td><%
        %><td width="200">Email&nbsp;</td><%
        %><td width="100">Status&nbsp;</td><%
        %></tr><%
      }

      %><tr><%
      %><td><%lJeox.getCUSTOMER_IDPropertyValue().toString()<%>&nbsp;</td><%

      // Get tag value for class attribute
      String xAttributeList = "";
      {
        PropertyValue lTagPropertyValue = lJeox.getPropertyValue("css-class");
        if (lTagPropertyValue.getType().equals("null")) lTagPropertyValue.reset("string");
        if (!lTagPropertyValue.getType().equals("null"))
          xAttributeList += "class" + "=\"" + lTagPropertyValue.toString() + "\" ";
      }
      %><td <%xAttributeList<%>><%lJeox.getFIRST_NAMEPropertyValue().toString()<%>&nbsp;</td><%
      xAttributeList = "";

      %><td><%lJeox.getLAST_NAMEPropertyValue().toString()<%>&nbsp;</td><%
      %><td><%lJeox.getEMAILPropertyValue().toString()<%>&nbsp;</td><%

      // Get tag value for style attribute
      {
        PropertyValue lTagPropertyValue = lJeox.getPropertyValue("status-style");
        if (lTagPropertyValue.getType().equals("null")) lTagPropertyValue.reset("string");
        if (!lTagPropertyValue.getType().equals("null"))
          xAttributeList += "style" + "=\"" + lTagPropertyValue.toString() + "\" ";
      }
      %><td <%xAttributeList<%>><%lJeox.getSTATUSPropertyValue().toString()<%>&nbsp;</td><%
      xAttributeList = "";

      %></tr><%

      // Nested: Get Order JEOs for this customer
      ArrayList lArrayListx = lJeox.getJeoByInstanceName("Order");
      boolean lPrintHeadingxx_Order = true;

      for (int lIdxx=0; lIdxx < lArrayListx.size(); lIdxx++) {
        Order lJeoxx = (Order) lArrayListx.get(lIdxx);

        if (lPrintHeadingxx_Order) {
          lPrintHeadingxx_Order=false;
          %><tr><td colspan="<%lNbrColumnsx_Customer<%>"><%
          %><table cellspacing="0" cellpadding="0" border="1"><%
          %><tr><%
          %><td width="100">Order #&nbsp;</td><%
          %><td width="100">Date&nbsp;</td><%
          %><td width="100">Amount&nbsp;</td><%
          %></tr><%
        }

        %><tr><%
        %><td><%lJeoxx.getORDER_NUMBERPropertyValue().toString()<%>&nbsp;</td><%
        %><td><%lJeoxx.getORDER_DATEPropertyValue().toString()<%>&nbsp;</td><%

        // Get format tag for amount
        String xxAttributeList = "";
        {
          PropertyValue lTagPropertyValue = lJeoxx.getPropertyValue("money-format");
          if (lTagPropertyValue.getType().equals("null")) lTagPropertyValue.reset("currency");
          if (!lTagPropertyValue.getType().equals("null"))
            xxAttributeList += "format" + "=\"" + lTagPropertyValue.toString() + "\" ";
        }
        %><td <%xxAttributeList<%>><%lJeoxx.getAMOUNTPropertyValue().toString()<%>&nbsp;</td><%

        %></tr><%
      }

      if (!lPrintHeadingxx_Order) %></table></td></tr><%
    }

    if (!lPrintHeadingx_Customer) %><%lTableEndx_Customer<%><%

    closeOutput();
  }

  // XML Renderer (similar structure, outputs XML instead of HTML)
  public void renderXml(String aOutput, com.esarks.arm.model.jeo.ServiceJeo aJeo) {
    openOutput(path(aOutput) + ".xml");
    com.esarks.arm.model.jeo.ServiceJeo lJeo = aJeo;

    %><report name="<%aOutput<%>"><%
    // ... (similar nested JEO iteration, but outputs XML tags)
    %></report><%

    closeOutput();
  }

  // Reverse mapping: Read XML and populate JEOs
  public void renderFromXml(String aXmlFile) {
    parseXmlPath(path(aXmlFile) + ".xml");
    com.esarks.arm.model.jeo.ServiceJeo lJeo = new com.esarks.arm.model.jeo.ServiceJeo();

    // Parse XML and create JEOs
    <!report:jeo!>!resetIterator();
    while (<!report:jeo!>!next()) {
      ReportHeader lJeox = new ReportHeader("ReportHeader");
      lJeo.addJeo(lJeox);

      if (<!report:jeo!>!scan("attribute:name", "reportDate")) {
        lJeox.setReportDate(<![report:jeo:attribute:value]!>);
      }
      // ... (map all attributes)
    }

    render(aXmlFile, lJeo);
  }

  //$Section=Deleted$Preserve=yes
  // Orphaned code from deleted operations
  //$Section=Deleted$Preserve=no
}
```

**3. CustomerReport.html (Documentation)**

Visual representation showing:
- Report specification details
- Column definitions with widths
- Sort order specifications
- Tag attributes and their purposes

**4. CustomerReport_Test.xml (Test Data Template)**
```xml
<report name="CustomerReport" inJeo="com.esarks.arm.model.jeo.ServiceJeo">

  <jeo instance="ReportHeader" type="ReportHeader">
    <attribute name="reportDate" value="2025-01-20" />
    <attribute name="totalCustomers" value="150" />
  </jeo>

  <jeo instance="Customer" type="Customer">
    <attribute name="CUSTOMER_ID" value="1001" />
    <attribute name="FIRST_NAME" value="John" />
    <attribute name="LAST_NAME" value="Doe" />
    <attribute name="EMAIL" value="john.doe@example.com" />
    <attribute name="STATUS" value="ACTIVE" />

    <jeo instance="Order" type="Order">
      <attribute name="ORDER_NUMBER" value="ORD-2025-001" />
      <attribute name="ORDER_DATE" value="2025-01-15" />
      <attribute name="AMOUNT" value="1299.99" />
    </jeo>

    <jeo instance="Order" type="Order">
      <attribute name="ORDER_NUMBER" value="ORD-2025-002" />
      <attribute name="ORDER_DATE" value="2025-01-18" />
      <attribute name="AMOUNT" value="599.50" />
    </jeo>
  </jeo>

  <jeo instance="Customer" type="Customer">
    <attribute name="CUSTOMER_ID" value="1002" />
    <attribute name="FIRST_NAME" value="Jane" />
    <attribute name="LAST_NAME" value="Smith" />
    <attribute name="EMAIL" value="jane.smith@example.com" />
    <attribute name="STATUS" value="ACTIVE" />
  </jeo>

</report>
```

**5. CustomerReportController.script (Optional Controller)**

Generated controller template for orchestrating report generation:
- Service invocation to fetch data
- JEO population
- Report rendering
- Error handling

**Report Features:**

1. **Dual Output Formats**
   - HTML for web viewing
   - XML for data exchange

2. **Nested Data Structures**
   - Parent-child relationships (Customer → Orders)
   - Unlimited nesting depth
   - Automatic iteration

3. **Sorting**
   - Multi-column sort
   - Sort by type (string, int, date)
   - Ascending/descending
   - Priority ordering

4. **Custom Tags**
   - Inject attributes into HTML (class, style, etc.)
   - Default values if property missing
   - Dynamic styling based on data

5. **Property-Based Access**
   - Uses `getXxxPropertyValue()` for flexibility
   - Handles nulls gracefully
   - Type conversions (toString(), toDateString(), etc.)

**Report Architecture:**
```
ServiceJeo (container)
  └── Reply (output data)
        ├── ReportHeader (singleton)
        │     ├── reportDate
        │     └── totalCustomers
        └── Customer[] (collection)
              ├── CUSTOMER_ID
              ├── FIRST_NAME
              ├── LAST_NAME
              ├── EMAIL
              ├── STATUS
              └── Order[] (nested collection)
                    ├── ORDER_NUMBER
                    ├── ORDER_DATE
                    └── AMOUNT
```

**Use Cases:**
1. **Business Reports** - Customer lists, sales summaries
2. **Export Formats** - Generate XML for external systems
3. **Dashboards** - Aggregate data displays
4. **Invoices** - Formatted documents with line items
5. **Audit Trails** - Time-series data with details

**Advantages:**
- PASS **Separation of Concerns**: Data fetching vs. rendering
- PASS **Reusable**: Same report, different data sources
- PASS **Testable**: Use test XML to verify layout
- PASS **Maintainable**: Change layout without touching service layer
- PASS **Multi-Format**: HTML and XML from same template

---

### 6. GenerateService - Database Service Generator

**Location:** `source/scripts/com/esarks/jac/generators/GenerateService.script`
**Size:** 980 lines

**Purpose:** Generate database service layer code (CRUD operations, queries, transactions) from XML specifications.

**Input:** Services XML specification

**Example Input (Services XML):**
```xml
<services name="com.example.service.CustomerService">

  <!-- INSERT Service -->
  <service name="insertCustomer" jeo="com.esarks.arm.model.jeo.ServiceJeo">
    <sql database="application">
      <statement type="PreparedStatement" method="execute">
        INSERT INTO CUSTOMER (
          CUSTOMER_ID,
          FIRST_NAME,
          LAST_NAME,
          EMAIL,
          PHONE,
          STATUS,
          CREATED_DATE
        ) VALUES (PENDING, PENDING, PENDING, PENDING, PENDING, PENDING, PENDING)
      </statement>
      <value>
        <jeo name="Customer" iterate="false">
          <value attribute="CUSTOMER_ID"/>
          <value attribute="FIRST_NAME"/>
          <value attribute="LAST_NAME"/>
          <value attribute="EMAIL"/>
          <value attribute="PHONE"/>
          <value attribute="STATUS"/>
          <value attribute="CREATED_DATE"/>
        </jeo>
      </value>
    </sql>
  </service>

  <!-- UPDATE Service -->
  <service name="updateCustomer" jeo="com.esarks.arm.model.jeo.ServiceJeo">
    <sql database="application">
      <statement type="PreparedStatement" method="execute">
        UPDATE CUSTOMER SET
          FIRST_NAME = PENDING,
          LAST_NAME = PENDING,
          EMAIL = PENDING,
          PHONE = PENDING,
          STATUS = PENDING,
          UPDATED_DATE = ?
        WHERE CUSTOMER_ID = ?
      </statement>
      <value>
        <jeo name="Customer" iterate="false">
          <value attribute="FIRST_NAME"/>
          <value attribute="LAST_NAME"/>
          <value attribute="EMAIL"/>
          <value attribute="PHONE"/>
          <value attribute="STATUS"/>
          <value attribute="UPDATED_DATE"/>
          <value attribute="CUSTOMER_ID"/>
        </jeo>
      </value>
    </sql>
  </service>

  <!-- SELECT with Dynamic WHERE clause -->
  <service name="searchCustomers" jeo="com.esarks.arm.model.jeo.ServiceJeo">
    <sql database="application">
      <statement type="PreparedStatement" method="executeQuery">
        SELECT * FROM CUSTOMER $*where $*order
      </statement>
      <where>
        <jeo name="SearchCriteria">
          <where attribute="LAST_NAME" clause="LAST_NAME LIKE PENDING" skipIfBlank="true"/>
          <where attribute="EMAIL" clause="EMAIL = PENDING" skipIfNull="true"/>
          <where attribute="STATUS" clause="STATUS = PENDING" skipIfNull="true"/>
        </jeo>
      </where>
      <result>
        <jeo name="Reply">
          <jeo name="Customer" mapFromResultSet="true"/>
        </jeo>
      </result>
    </sql>
  </service>

  <!-- Batch INSERT -->
  <service name="insertCustomers" jeo="com.esarks.arm.model.jeo.ServiceJeo">
    <sql database="application">
      <statement type="PreparedStatement" method="execute">
        INSERT INTO CUSTOMER (
          CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL, CREATED_DATE
        ) VALUES (PENDING, PENDING, PENDING, PENDING, PENDING)
      </statement>
      <value>
        <jeo name="Customer" iterate="true">
          <value attribute="CUSTOMER_ID"/>
          <value attribute="FIRST_NAME"/>
          <value attribute="LAST_NAME"/>
          <value attribute="EMAIL"/>
          <value attribute="CREATED_DATE"/>
        </jeo>
      </value>
    </sql>
  </service>

  <!-- Stored Procedure Call -->
  <service name="archiveCustomer" jeo="com.esarks.arm.model.jeo.ServiceJeo">
    <sql database="application">
      <statement type="CallableStatement" method="execute">
        {call sp_archive_customer(PENDING)}
      </statement>
      <value>
        <jeo name="Customer" iterate="false">
          <value attribute="CUSTOMER_ID"/>
        </jeo>
      </value>
    </sql>
  </service>

  <!-- Multi-Database Stereotypes -->
  <service name="selectCustomersOptimized" jeo="com.esarks.arm.model.jeo.ServiceJeo">

    <!-- Oracle version with ROWNUM -->
    <sql database="application">
      <statement type="PreparedStatement" method="executeQuery" stereotype="oracle">
        SELECT * FROM CUSTOMER
        WHERE ROWNUM <= 100
        ORDER BY LAST_NAME
      </statement>
      <result>
        <jeo name="Reply">
          <jeo name="Customer" mapFromResultSet="true"/>
        </jeo>
      </result>
    </sql>

    <!-- SQL Server version with TOP -->
    <sql database="application">
      <statement type="PreparedStatement" method="executeQuery" stereotype="sqlServer">
        SELECT TOP 100 * FROM CUSTOMER
        ORDER BY LAST_NAME
      </statement>
      <result>
        <jeo name="Reply">
          <jeo name="Customer" mapFromResultSet="true"/>
        </jeo>
      </result>
    </sql>

    <!-- MySQL version with LIMIT -->
    <sql database="application">
      <statement type="PreparedStatement" method="executeQuery" stereotype="mySql">
        SELECT * FROM CUSTOMER
        ORDER BY LAST_NAME
        LIMIT 100
      </statement>
      <result>
        <jeo name="Reply">
          <jeo name="Customer" mapFromResultSet="true"/>
        </jeo>
      </result>
    </sql>

  </service>

</services>
```

**Generated Output (CustomerService.script):**

```java
package com.example.service;

//$Section=License$Preserve=no
//  Generated at 2025-01-20 10:30:45 by Architect's Companion (c) 2003,
//  Architects of Software Design, Corp., ALL RIGHTS RESERVED

//$Section=ChangeLog$Preserve=yes
/* ========================================================================= *
   Contributor        Description
   ------------------ ------------------------------------------------------
                      Initial version
 * ========================================================================= */
//$Section=ChangeLog$Preserve=no

//$Section=CustomOperations$Preserve=yes
// Custom service operations can be added here
//$Section=CustomOperations$Preserve=no

public class CustomerService extends com.esarks.mic.MicScriptHelper {

  // INSERT Service
  public void insertCustomer(com.esarks.arm.model.jeo.ServiceJeo aJeo) {
    java.util.Date lStartTime = null;
    if (iMicLog.test(Log._APP)) {
      lStartTime = new java.util.Date();
      iMicLog.println(Log._APP, "APP-CustomerService:insertCustomer!Enter method");
    }

    DbConnectionFactory lDbConnectionFactory = DbConnectionFactory.getInstance();
    DbConnection lDbConnection = null;

    PropertyValue lDbConnectionPropertyValue = aJeo.getPropertyValue("DbConnection");
    if (lDbConnectionPropertyValue.getValueType() != PropertyValue.CONST_VALUE_TYPE_NULL) {
      lDbConnection = (DbConnection) lDbConnectionPropertyValue.getValueObject();
    } else {
      lDbConnection = lDbConnectionFactory.getDbConnection("application");
    }

    if (lDbConnection == null) {
      aJeo.addError();
      aJeo.setErrorId("");
      aJeo.setErrorLocation("CustomerService : insertCustomer");
      aJeo.setErrorTitle("Database Connection Failed");
      aJeo.setErrorText("The service failed to obtain a database connection.");
      aJeo.setErrorResolution("This is an internal application error.");
      aJeo.setErrorSeverity(0);
      aJeo.getMostSevereError();
      if (iMicLog.test(Log._ERR)) {
        iMicLog.println(Log._ERR, "ERR-CustomerService:insertCustomer!DbConnection is null");
      }
      return;
    }

    try {
      String lTop = "";
      String lWhere = "";
      ArrayList lWhereList = new ArrayList();
      String lOrder = "";

      String lSql = "INSERT INTO CUSTOMER (CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL, PHONE, STATUS, CREATED_DATE) VALUES (PENDING, PENDING, PENDING, PENDING, PENDING, PENDING, PENDING)";

      if (iMicLog.test(Log._APP)) {
        iMicLog.println(Log._APP, "APP-CustomerService:insertCustomer!PreparedStatement=" + lSql.trim());
      }

      PreparedStatement lStatement = lDbConnection.getConnection().prepareStatement(lSql.trim());

      {
        Customer lJeox = (Customer) aJeo.getJeoByInstanceNameAt("Customer", 0);

        // Bind parameters
        if(lJeox.isCUSTOMER_IDNull()) {
          lStatement.setNull(1, java.sql.Types.VARCHAR);
        } else {
          lStatement.setInt(1, lJeox.getCUSTOMER_IDPropertyValue().toInt());
        }

        if(lJeox.isFIRST_NAMENull()) {
          lStatement.setNull(2, java.sql.Types.VARCHAR);
        } else {
          lStatement.setString(2, lJeox.getFIRST_NAMEPropertyValue().toString());
        }

        if(lJeox.isLAST_NAMENull()) {
          lStatement.setNull(3, java.sql.Types.VARCHAR);
        } else {
          lStatement.setString(3, lJeox.getLAST_NAMEPropertyValue().toString());
        }

        if(lJeox.isEMAILNull()) {
          lStatement.setNull(4, java.sql.Types.VARCHAR);
        } else {
          lStatement.setString(4, lJeox.getEMAILPropertyValue().toString());
        }

        if(lJeox.isPHONENull()) {
          lStatement.setNull(5, java.sql.Types.VARCHAR);
        } else {
          lStatement.setString(5, lJeox.getPHONEPropertyValue().toString());
        }

        if(lJeox.isSTATUSNull()) {
          lStatement.setNull(6, java.sql.Types.VARCHAR);
        } else {
          lStatement.setString(6, lJeox.getSTATUSPropertyValue().toString());
        }

        if(lJeox.isCREATED_DATENull()) {
          lStatement.setNull(7, java.sql.Types.VARCHAR);
        } else {
          lStatement.setTimestamp(7, lJeox.getCREATED_DATEPropertyValue().getValueObject());
        }
      }

      boolean lResult = lStatement.execute();
      int lUpdateCount = lStatement.getUpdateCount();

      if (iMicLog.test(Log._APP)) {
        java.util.Date lStopTime = new java.util.Date();
        iMicLog.println(Log._APP, "APP-CustomerService:insertCustomer!getUpdateCount = " +
                        Integer.toString(lUpdateCount) + "!Elapsed time = " +
                        Long.toString(lStopTime.getTime() - lStartTime.getTime()));
      }

      aJeo.getReply().setPropertyValue("getUpdateCount", new PropertyValue(lUpdateCount));
      lStatement.close();

    } catch (SQLException e) {
      while (e != null) {
        aJeo.addError();
        aJeo.setErrorId("");
        aJeo.setErrorLocation("CustomerService : insertCustomer");
        aJeo.setErrorTitle("Database Exception");
        aJeo.setErrorText("A database exception was caught: " + e.getMessage());
        aJeo.setErrorResolution("The application user may need to escalate to technical support.");
        aJeo.setErrorSeverity(3);
        aJeo.getMostSevereError();

        if (iMicLog.test(Log._ERR)) {
          iMicLog.println(Log._ERR, "ERR-CustomerService:insertCustomer!Exception caught!" + e.getMessage());
        }

        if (aJeo.getSuppressException() == false) {
          // Log exception with stack trace
          com.esarks.arm.model.jeo.ServiceJeo lExceptionServiceJeo = new com.esarks.arm.model.jeo.ServiceJeo();
          com.esarks.arm.logging.ExceptionJeo lExceptionJeo = new com.esarks.arm.logging.ExceptionJeo("detail");
          lExceptionServiceJeo.addJeo(lExceptionJeo);

          java.sql.Timestamp lExceptionTimestamp = new java.sql.Timestamp(new java.util.Date().getTime());
          lExceptionJeo.setTime(lExceptionTimestamp);
          lExceptionJeo.setModule("CustomerService : insertCustomer");
          lExceptionJeo.setMethod("insertCustomer");
          lExceptionJeo.setSeverity("unknown");
          lExceptionJeo.setLocation("");
          lExceptionJeo.setDescription(e.getMessage());
          lExceptionJeo.setAction("unknown");
          lExceptionJeo.setResolution("unknown");

          StackTraceElement[] lStackTraceElements = e.getStackTrace();
          for (int lTraceIdx=0; lTraceIdx < lStackTraceElements.length; lTraceIdx++) {
            com.esarks.arm.logging.ExceptionJeo lStackExceptionJeo =
                new com.esarks.arm.logging.ExceptionJeo("trace");
            lStackExceptionJeo.setDescription(lStackTraceElements[lTraceIdx].toString());
            lExceptionJeo.addJeo(lStackExceptionJeo);
          }

          iScript.execMethod("com.esarks.arm.logging.ExceptionRpt", "render",
                            new Object[]{"logs.Exception_" + Long.toString(new java.util.Date().getTime()),
                                        lExceptionServiceJeo});
        }

        e = e.getNextException();
      }
      return;

    } catch (Throwable e) {
      // Similar exception handling for non-SQL exceptions
      aJeo.addError();
      aJeo.setErrorId("");
      aJeo.setErrorLocation("CustomerService : insertCustomer");
      aJeo.setErrorTitle("Database Exception");
      aJeo.setErrorText("A database exception was caught: " + e.getMessage());
      aJeo.setErrorResolution("The application user may need to escalate to technical support.");
      aJeo.setErrorSeverity(3);
      aJeo.getMostSevereError();

      if (iMicLog.test(Log._ERR)) {
        iMicLog.println(Log._ERR, "ERR-CustomerService:insertCustomer!Exception caught!" + e.getMessage());
      }
      // ... (exception logging)
      return;
    }

    aJeo.addError();
    aJeo.setErrorId("");
    aJeo.setErrorLocation("CustomerService : insertCustomer");
    aJeo.setErrorTitle("Success");
    aJeo.setErrorText("The service completed successfully.");
    aJeo.setErrorResolution("This is a notification of successful completion that requires no resolution.");
    aJeo.setErrorSeverity(10);
    aJeo.getMostSevereError();

    if (iMicLog.test(Log._APP)) {
      java.util.Date lStopTime = new java.util.Date();
      iMicLog.println(Log._APP, "APP-CustomerService:insertCustomer!Normal return!Elapsed time = " +
                      Long.toString(lStopTime.getTime() - lStartTime.getTime()));
    }
  }

  // UPDATE Service (similar structure)
  public void updateCustomer(com.esarks.arm.model.jeo.ServiceJeo aJeo) {
    // ... (similar to insertCustomer, but with UPDATE statement)
  }

  // SELECT with Dynamic WHERE
  public void searchCustomers(com.esarks.arm.model.jeo.ServiceJeo aJeo) {
    java.util.Date lStartTime = null;
    if (iMicLog.test(Log._APP)) {
      lStartTime = new java.util.Date();
      iMicLog.println(Log._APP, "APP-CustomerService:searchCustomers!Enter method");
    }

    DbConnectionFactory lDbConnectionFactory = DbConnectionFactory.getInstance();
    DbConnection lDbConnection = lDbConnectionFactory.getDbConnection("application");

    // ... (connection check)

    try {
      String lTop = "";
      String lWhere = "";
      ArrayList lWhereList = new ArrayList();
      String lOrder = "";

      if (!aJeo.getRequest().getWhereClausePropertyValue().toString().equals("")) {
        lWhere = aJeo.getRequest().getWhereClausePropertyValue().toString();
      } else {
        SearchCriteria lJeox = (SearchCriteria) aJeo.getJeoByInstanceNameAt("SearchCriteria", 0);

        // Build WHERE clause dynamically
        {
          PropertyValue lPropertyValue = lJeox.getPropertyValue("LAST_NAME");
          if (lPropertyValue.getValueType() != PropertyValue.CONST_VALUE_TYPE_NULL &&
              lPropertyValue.toString().trim().length() > 0) {
            lWhere = lWhere.trim() + " LAST_NAME LIKE PENDING";
            lWhereList.add(lPropertyValue);
          }
        }

        {
          PropertyValue lPropertyValue = lJeox.getPropertyValue("EMAIL");
          if (lPropertyValue.getValueType() != PropertyValue.CONST_VALUE_TYPE_NULL) {
            if (lWhere.equals("")) {
              lWhere = lWhere.trim() + " EMAIL = PENDING";
            } else {
              lWhere = lWhere.trim() + " AND EMAIL = PENDING";
            }
            lWhereList.add(lPropertyValue);
          }
        }

        {
          PropertyValue lPropertyValue = lJeox.getPropertyValue("STATUS");
          if (lPropertyValue.getValueType() != PropertyValue.CONST_VALUE_TYPE_NULL) {
            if (lWhere.equals("")) {
              lWhere = lWhere.trim() + " STATUS = PENDING";
            } else {
              lWhere = lWhere.trim() + " AND STATUS = PENDING";
            }
            lWhereList.add(lPropertyValue);
          }
        }
      }

      if (!aJeo.getRequest().getOrderClausePropertyValue().toString().equals("")) {
        lOrder = aJeo.getRequest().getOrderClausePropertyValue().toString();
      }

      String lSql = "SELECT * FROM CUSTOMER";
      if (lWhere.trim().length() > 0) lSql += " WHERE " + lWhere.trim();
      if (lOrder.trim().length() > 0) lSql += " ORDER BY " + lOrder.trim();

      if (iMicLog.test(Log._APP)) {
        iMicLog.println(Log._APP, "APP-CustomerService:searchCustomers!PreparedStatement=" + lSql.trim());
      }

      PreparedStatement lStatement = lDbConnection.getConnection().prepareStatement(lSql.trim());

      for (int lIdx=0; lIdx < lWhereList.size(); lIdx++) {
        lStatement.setString(lIdx+1, ((PropertyValue) lWhereList.get(lIdx)).toString());
      }

      ResultSet lResultSet = lStatement.executeQuery();

      if (lResultSet == null) {
        aJeo.addError();
        aJeo.setErrorId("");
        aJeo.setErrorLocation("CustomerService : searchCustomers");
        aJeo.setErrorTitle("No ResultSet Returned");
        aJeo.setErrorText("No ResultSet was returned from the database request.");
        aJeo.setErrorResolution("The application user may submit another request.");
        aJeo.setErrorSeverity(4);
        aJeo.getMostSevereError();
        lStatement.close();
        return;
      }

      if (lResultSet.next() == false) {
        aJeo.addError();
        aJeo.setErrorId("");
        aJeo.setErrorLocation("CustomerService : searchCustomers");
        aJeo.setErrorTitle("No Data Returned");
        aJeo.setErrorText("No data was returned from the database request.");
        aJeo.setErrorResolution("The application user may submit another request.");
        aJeo.setErrorSeverity(4);
        aJeo.getMostSevereError();
        lResultSet.close();
        lStatement.close();
        return;
      }

      int lResultRowsReturned = 0;
      {
        Reply lJeox = (Reply) aJeo.getJeoByInstanceNameAt("Reply", 0);
        do {
          Customer lJeoxx = (Customer) com.esarks.jac.JeoFactory.getInstance().reserveJeo("Customer");
          lJeox.addJeo(lJeoxx);

          // Automatically map from ResultSet
          lJeoxx.mapFromResultSet(lResultSet, true, false);

          lResultRowsReturned++;
        } while (lResultSet.next());
      }

      if (iMicLog.test(Log._APP)) {
        java.util.Date lStopTime = new java.util.Date();
        iMicLog.println(Log._APP, "APP-CustomerService:searchCustomers!Result rows returned = " +
                        Integer.toString(lResultRowsReturned) + "!Elapsed time = " +
                        Long.toString(lStopTime.getTime() - lStartTime.getTime()));
      }

      lResultSet.close();
      lStatement.close();

    } catch (SQLException e) {
      // ... (exception handling)
    } catch (Throwable e) {
      // ... (exception handling)
    }

    aJeo.addError();
    aJeo.setErrorId("");
    aJeo.setErrorLocation("CustomerService : searchCustomers");
    aJeo.setErrorTitle("Success");
    aJeo.setErrorText("The service completed successfully.");
    aJeo.setErrorResolution("This is a notification of successful completion.");
    aJeo.setErrorSeverity(10);
    aJeo.getMostSevereError();

    if (iMicLog.test(Log._APP)) {
      java.util.Date lStopTime = new java.util.Date();
      iMicLog.println(Log._APP, "APP-CustomerService:searchCustomers!Normal return!Elapsed time = " +
                      Long.toString(lStopTime.getTime() - lStartTime.getTime()));
    }
  }

  // Batch INSERT
  public void insertCustomers(com.esarks.arm.model.jeo.ServiceJeo aJeo) {
    // ... (connection setup)

    try {
      String lSql = "INSERT INTO CUSTOMER (CUSTOMER_ID, FIRST_NAME, LAST_NAME, EMAIL, CREATED_DATE) VALUES (PENDING, PENDING, PENDING, PENDING, PENDING)";
      PreparedStatement lStatement = lDbConnection.getConnection().prepareStatement(lSql.trim());

      // Iterate through customer JEOs
      ArrayList arrayList_lJeox = aJeo.getJeoByInstanceName("Customer");
      for (int idx_lJeox=0; idx_lJeox < arrayList_lJeox.size(); idx_lJeox++) {
        Customer lJeoxx = (Customer) arrayList_lJeox.get(idx_lJeox);

        // Bind parameters
        if(lJeoxx.isCUSTOMER_IDNull()) {
          lStatement.setNull(1, java.sql.Types.VARCHAR);
        } else {
          lStatement.setInt(1, lJeoxx.getCUSTOMER_IDPropertyValue().toInt());
        }
        // ... (bind other parameters)

        lStatement.addBatch();
      }

      lStatement.executeBatch();
      lStatement.close();

    } catch (SQLException e) {
      // ... (exception handling)
    }

    // ... (success message)
  }

  // Stored Procedure Call
  public void archiveCustomer(com.esarks.arm.model.jeo.ServiceJeo aJeo) {
    // ... (connection setup)

    try {
      String lSql = "{call sp_archive_customer(PENDING)}";
      CallableStatement lStatement = lDbConnection.getConnection().prepareCall(lSql.trim());

      {
        Customer lJeox = (Customer) aJeo.getJeoByInstanceNameAt("Customer", 0);
        if(lJeox.isCUSTOMER_IDNull()) {
          lStatement.setNull(1, java.sql.Types.VARCHAR);
        } else {
          lStatement.setInt(1, lJeox.getCUSTOMER_IDPropertyValue().toInt());
        }
      }

      lStatement.execute();
      lStatement.close();

    } catch (SQLException e) {
      // ... (exception handling)
    }

    // ... (success message)
  }

  // Multi-Database SELECT (automatically picks based on DbConnection stereotype)
  public void selectCustomersOptimized(com.esarks.arm.model.jeo.ServiceJeo aJeo) {
    DbConnectionFactory lDbConnectionFactory = DbConnectionFactory.getInstance();
    DbConnection lDbConnection = lDbConnectionFactory.getDbConnection("application");

    // ... (connection check)

    String lSql = "";

    // Choose SQL based on database stereotype
    if (lDbConnection.getStereotype().equals("oracle")) {
      lSql = "SELECT * FROM CUSTOMER WHERE ROWNUM <= 100 ORDER BY LAST_NAME";
    }
    else if (lDbConnection.getStereotype().equals("sqlServer")) {
      lSql = "SELECT TOP 100 * FROM CUSTOMER ORDER BY LAST_NAME";
    }
    else if (lDbConnection.getStereotype().equals("mySql")) {
      lSql = "SELECT * FROM CUSTOMER ORDER BY LAST_NAME LIMIT 100";
    }

    // ... (execute query and map results)
  }

  // Helper: Get database object prefix for schema.table notation
  private String getObjectPrefix(String aObjectName) {
    DbConnectionFactory lDbConnectionFactory = DbConnectionFactory.getInstance();
    DbConnection lDbConnection = lDbConnectionFactory.getAssociatedDbConnection(aObjectName.toLowerCase());
    if (lDbConnection == null) {
      if (iMicLog.test(Log._APP)) {
        iMicLog.println(Log._APP, "APP-" + iScriptFullName + ":getObjectPrefix(" +
                       aObjectName + ")!Object name not in known list.");
      }
      return "";
    }
    return lDbConnection.getPrefix();
  }

  //$Section=Deleted$Preserve=yes
  // Orphaned code from deleted operations
  //$Section=Deleted$Preserve=no
}
```

**Service Features:**

**1. Database Connection Management**
- Connection pooling via `DbConnectionFactory`
- Per-service or shared connections
- Connection validation
- Stereotype-based routing (oracle, sqlServer, mySql, postgreSql)

**2. Statement Types**
- `PreparedStatement` - Parameterized queries
- `CallableStatement` - Stored procedures
- Regular `Statement` - Dynamic SQL

**3. Dynamic SQL Construction**
- `$*where` - Dynamic WHERE clause injection
- `$*order` - Dynamic ORDER BY clause
- `$*top` / `$*limit` - Row limiting (database-specific)
- Property-based substitution

**4. Parameter Binding**
- Type-safe binding from JEO attributes
- Null handling
- Type conversions (int, string, timestamp, etc.)
- Batch processing (iterate="true")

**5. Result Mapping**
- Automatic ResultSet to JEO mapping
- Nested JEO structures
- Property-based or attribute-based
- Multiple result sets

**6. Error Handling**
- SQLException chaining
- Error JEO population
- Stack trace logging
- Exception reports (via ExceptionRpt)
- Severity levels (0=fatal, 4=warning, 10=success)

**7. Logging Integration**
- Method entry/exit logging
- SQL statement logging
- Execution time tracking
- Row count reporting
- Error logging

**8. Dynamic WHERE Clauses**
- `skipIfNull` - Omit condition if property is null
- `skipIfBlank` - Omit condition if property is blank string
- Conjunction support (AND, OR)
- Automatic parameterization

**9. Multi-Database Support**
- Stereotype-based SQL selection
- Database-specific syntax (ROWNUM, TOP, LIMIT)
- Object prefix management (schema.table)

**Service Invocation Pattern:**
```java
// Client code
com.esarks.arm.model.jeo.ServiceJeo lServiceJeo = new com.esarks.arm.model.jeo.ServiceJeo();

// Populate request
Customer lCustomer = new Customer();
lCustomer.setCUSTOMER_ID(1001);
lCustomer.setFIRST_NAME("John");
lCustomer.setLAST_NAME("Doe");
lCustomer.setEMAIL("john@example.com");
lCustomer.setSTATUS("ACTIVE");
lCustomer.setCREATED_DATE(new java.sql.Timestamp(new java.util.Date().getTime()));
lServiceJeo.addJeo(lCustomer);

// Invoke service
iScript.execMethod("com.example.service.CustomerService", "insertCustomer", new Object[]{lServiceJeo});

// Check result
if (lServiceJeo.getMostSevereError().getSeverity() < 5) {
  System.out.println("Error: " + lServiceJeo.getMostSevereError().getText());
} else {
  System.out.println("Success! Rows affected: " +
                     lServiceJeo.getReply().getPropertyValue("getUpdateCount").toInt());
}
```

**Use Cases:**
1. **CRUD Operations** - Create, Read, Update, Delete
2. **Search/Query** - Dynamic search with optional criteria
3. **Batch Processing** - Insert/update multiple records
4. **Stored Procedures** - Call database procedures
5. **Reporting** - Fetch data for reports
6. **Data Migration** - Multi-database operations
7. **Transaction Management** - Coordinated updates

**Advantages:**
- PASS **Type Safety**: JEO attributes prevent SQL injection
- PASS **Error Handling**: Comprehensive exception management
- PASS **Logging**: Built-in observability
- PASS **Portability**: Multi-database support
- PASS **Maintainability**: XML specification, not hand-coded
- PASS **Testability**: Service layer can be unit tested
- PASS **Consistency**: All services follow same pattern

---

## Java Entity Objects (JEO)

### What is a JEO?

A **JEO** (Java Entity Object) is the core data structure in the JAC framework. It's a Java class that represents a business entity with:

- **Strongly-typed attributes** (columns from database tables)
- **Null-safe accessors** (explicit null flags)
- **Property-based access** (dynamic/reflective scenarios)
- **Hierarchical structure** (parent-child relationships)
- **Database mapping** (ResultSet to JEO)
- **Metadata** (type information for each attribute)

### JEO Architecture

```
java.lang.Object
  └── com.esarks.jac.Jeo (base class)
        ├── Customer (generated by GenerateJeo)
        ├── Order (generated by GenerateJeo)
        ├── ServiceJeo (framework-provided)
        ├── ErrorJeo (framework-provided)
        └── [Any custom JEO]
```

### Base JEO Class (com.esarks.jac.Jeo)

**Location:** `source/java/com/esarks/jac/Jeo.java`
**Size:** 63 KB (2,000+ lines)

**Key Responsibilities:**

1. **Property Management**
   ```java
   public PropertyValue getPropertyValue(String aName)
   public void setPropertyValue(String aName, PropertyValue aValue)
   public PropertyValue getPropertyValueByName(String aName)
   ```

2. **Hierarchical Structure**
   ```java
   public void addJeo(Jeo aChild)
   public ArrayList getJeoByInstanceName(String aInstanceName)
   public ArrayList getJeoByTypeName(String aTypeName)
   public Jeo getJeoByInstanceNameAt(String aInstanceName, int aIndex)
   ```

3. **Database Mapping**
   ```java
   public void mapFromResultSet(ResultSet aResultSet, boolean aUseColumnLabel, boolean aSetJeoDefaults)
   public void mapToResultSet(ResultSet aResultSet)
   ```

4. **Metadata Access**
   ```java
   public String getTypeByName(String aName)
   public String[] getAttributeNames()
   public String getTableName()
   public void setTableName(String aTableName)
   ```

5. **Iteration and Scanning**
   ```java
   public boolean next()  // Iterate through child JEOs
   public void resetIterator()
   public boolean scan(String aPath, String aValue)  // Find matching child
   public boolean isFirst()
   public boolean isLast()
   public int getIterator()
   ```

6. **Sorting**
   ```java
   public static void sort(ArrayList aList, String aPropertyPath, boolean aAscending)
   ```

### Generated JEO Structure

When **GenerateJeo** processes a table DDL, it creates:

**Attributes (one per column):**
```java
private Integer CUSTOMER_ID;
private String FIRST_NAME;
private String LAST_NAME;
// ... (one per column)
```

**Null Flags (one per column):**
```java
private boolean CUSTOMER_ID_isNull = true;
private boolean FIRST_NAME_isNull = true;
// ... (one per column)
```

**Type-Safe Getters:**
```java
public Integer getCUSTOMER_ID() { return CUSTOMER_ID; }
public String getFIRST_NAME() { return FIRST_NAME; }
// ... (one per column)
```

**Type-Safe Setters:**
```java
public void setCUSTOMER_ID(Integer aValue) {
  CUSTOMER_ID = aValue;
  CUSTOMER_ID_isNull = false;
}
// ... (one per column)
```

**Null Checkers:**
```java
public boolean isCUSTOMER_IDNull() { return CUSTOMER_ID_isNull; }
// ... (one per column)
```

**Property Value Getters (for dynamic access):**
```java
public PropertyValue getCUSTOMER_IDPropertyValue() {
  if (CUSTOMER_ID_isNull) return new PropertyValue();
  return new PropertyValue(CUSTOMER_ID);
}
// ... (one per column)
```

**Metadata:**
```java
public String getTypeByName(String aName) {
  if (aName.equals("CUSTOMER_ID")) return "integer";
  if (aName.equals("FIRST_NAME")) return "varchar";
  // ... (one per column)
  return super.getTypeByName(aName);
}

public String[] getAttributeNames() {
  return new String[] {
    "CUSTOMER_ID",
    "FIRST_NAME",
    "LAST_NAME",
    // ... (all columns)
  };
}
```

**ResultSet Mapping:**
```java
public void mapFromResultSet(ResultSet aResultSet, boolean aUseColumnLabel, boolean aSetJeoDefaults) {
  try {
    CUSTOMER_ID = aResultSet.getInt("CUSTOMER_ID");
    CUSTOMER_ID_isNull = aResultSet.wasNull();

    FIRST_NAME = aResultSet.getString("FIRST_NAME");
    FIRST_NAME_isNull = aResultSet.wasNull();

    // ... (all columns)
  } catch (SQLException e) {
    // Error handling
  }
}
```

### JEO Hierarchies (Parent-Child Relationships)

JEOs can contain other JEOs, forming hierarchies:

```java
ServiceJeo lServiceJeo = new ServiceJeo();
  Request lRequest = lServiceJeo.getRequest();
    lRequest.setPropertyValue("customerId", new PropertyValue(1001));
  Reply lReply = lServiceJeo.getReply();
    Customer lCustomer = new Customer();
      lCustomer.setCUSTOMER_ID(1001);
      lCustomer.setFIRST_NAME("John");
      Order lOrder1 = new Order();
        lOrder1.setORDER_NUMBER("ORD-001");
        lOrder1.setAMOUNT(1299.99);
        lCustomer.addJeo(lOrder1);
      Order lOrder2 = new Order();
        lOrder2.setORDER_NUMBER("ORD-002");
        lOrder2.setAMOUNT(599.50);
        lCustomer.addJeo(lOrder2);
      lReply.addJeo(lCustomer);
  ErrorJeo lError = new ErrorJeo();
    lError.setSeverity(10);  // Success
    lError.setTitle("Operation Successful");
    lServiceJeo.addJeo(lError);
```

**Hierarchy Visualization:**
```
ServiceJeo
  ├── Request
  │     └── customerId = 1001
  ├── Reply
  │     └── Customer
  │           ├── CUSTOMER_ID = 1001
  │           ├── FIRST_NAME = "John"
  │           ├── Order
  │           │     ├── ORDER_NUMBER = "ORD-001"
  │           │     └── AMOUNT = 1299.99
  │           └── Order
  │                 ├── ORDER_NUMBER = "ORD-002"
  │                 └── AMOUNT = 599.50
  └── Error
        ├── severity = 10
        └── title = "Operation Successful"
```

### Navigating JEO Hierarchies

**Get children by instance name:**
```java
ArrayList lCustomers = lServiceJeo.getJeoByInstanceName("Customer");
for (int i=0; i < lCustomers.size(); i++) {
  Customer lCustomer = (Customer) lCustomers.get(i);
  System.out.println(lCustomer.getFIRST_NAME());
}
```

**Get children by type name:**
```java
ArrayList lCustomers = lServiceJeo.getJeoByTypeName("Customer");
```

**Iterator pattern:**
```java
<!Customer!>!resetIterator();
while (<!Customer!>!next()) {
  String name = <![Customer:FIRST_NAME]!>;
  System.out.println(name);
}
```

**Scan for specific child:**
```java
<!Customer!>!resetIterator();
if (<!Customer!>!scan("CUSTOMER_ID", "1001")) {
  // Found customer with ID 1001
  String email = <![Customer:EMAIL]!>;
}
```

### JEO Factory (Object Pooling)

**Location:** `com.esarks.jac.JeoFactory`

**Purpose:** Reuse JEO instances to reduce garbage collection overhead

```java
// Reserve a JEO from the pool
Customer lCustomer = (Customer) com.esarks.jac.JeoFactory.getInstance().reserveJeo("Customer");

// Use the JEO
lCustomer.setCUSTOMER_ID(1001);
lCustomer.setFIRST_NAME("John");

// Return to pool when done
com.esarks.jac.JeoFactory.getInstance().returnJeo(lCustomer);
```

**Benefits:**
- PASS Reduces object allocation
- PASS Minimizes GC pauses
- PASS Improves performance in high-throughput scenarios

### ServiceJeo - The Request/Response Container

**Location:** `source/scripts/com/esarks/arm/model/jeo/ServiceJeo.script`

**Purpose:** Standard container for service invocations

**Structure:**
```
ServiceJeo
  ├── Request (input parameters)
  │     └── Properties (key-value pairs)
  ├── Reply (output data)
  │     └── JEO[] (business objects)
  └── Error[] (error information)
        ├── severity (0=fatal, 4=warning, 10=success)
        ├── title
        ├── text
        ├── location
        └── resolution
```

**Usage Pattern:**
```java
// Create ServiceJeo
com.esarks.arm.model.jeo.ServiceJeo lServiceJeo = new com.esarks.arm.model.jeo.ServiceJeo();

// Set request parameters
lServiceJeo.getRequest().setPropertyValue("customerId", new PropertyValue(1001));
lServiceJeo.getRequest().setPropertyValue("includeOrders", new PropertyValue(true));

// Invoke service
iScript.execMethod("com.example.CustomerService", "getCustomer", new Object[]{lServiceJeo});

// Check for errors
if (lServiceJeo.getMostSevereError().getSeverity() < 5) {
  // Fatal or warning
  System.out.println("Error: " + lServiceJeo.getMostSevereError().getText());
} else {
  // Success - get reply data
  ArrayList lCustomers = lServiceJeo.getReply().getJeoByInstanceName("Customer");
  Customer lCustomer = (Customer) lCustomers.get(0);
  System.out.println("Customer: " + lCustomer.getFIRST_NAME() + " " + lCustomer.getLAST_NAME());

  // Get nested orders
  ArrayList lOrders = lCustomer.getJeoByInstanceName("Order");
  for (int i=0; i < lOrders.size(); i++) {
    Order lOrder = (Order) lOrders.get(i);
    System.out.println("  Order: " + lOrder.getORDER_NUMBER() + " $" + lOrder.getAMOUNT());
  }
}
```

### ErrorJeo - Error Handling

**Location:** `source/scripts/com/esarks/arm/model/jeo/ErrorJeo.script`

**Purpose:** Standard error reporting structure

**Attributes:**
- `severity` - 0 (fatal) to 10 (success)
- `title` - Short error description
- `text` - Detailed error message
- `location` - Where error occurred (class:method)
- `resolution` - Suggested fix

**Severity Levels:**
| Level | Meaning | Action |
|-------|---------|--------|
| 0 | Fatal | Stop processing immediately |
| 1-2 | Severe | Critical failure, may retry |
| 3-4 | Warning | Non-critical, can continue |
| 5-9 | Informational | FYI messages |
| 10 | Success | Operation completed successfully |

**Usage:**
```java
// Add error to ServiceJeo
lServiceJeo.addError();
lServiceJeo.setErrorId("");
lServiceJeo.setErrorLocation("CustomerService:getCustomer");
lServiceJeo.setErrorTitle("Customer Not Found");
lServiceJeo.setErrorText("No customer found with ID 1001");
lServiceJeo.setErrorResolution("Verify the customer ID and try again");
lServiceJeo.setErrorSeverity(4);  // Warning
lServiceJeo.getMostSevereError();

// Check for errors
ErrorJeo lError = lServiceJeo.getMostSevereError();
if (lError.getSeverity() < 5) {
  System.out.println("Error (" + lError.getSeverity() + "): " + lError.getText());
}
```

### PropertyValue - Type-Safe Dynamic Properties

**Location:** `source/java/com/esarks/jac/PropertyValue.java`
**Size:** 88 KB

**Purpose:** Wrapper for property values with type information

**Supported Types:**
- `string` - String values
- `int` / `integer` - Integer numbers
- `bigint` / `long` - Long integers
- `decimal` / `double` - Decimal numbers
- `date` - Dates (no time)
- `time` - Times (no date)
- `timestamp` - Date + time
- `boolean` - True/false
- `object` - Any Java object
- `null` - Null value

**Type Conversions:**
```java
PropertyValue lValue = new PropertyValue("12345");

int i = lValue.toInt();               // 12345
String s = lValue.toString();         // "12345"
double d = lValue.toDouble();         // 12345.0
boolean b = lValue.toBoolean();       // false (not "true")

PropertyValue lDateValue = new PropertyValue(new java.util.Date());
String dateStr = lDateValue.toDateString("MM/dd/yyyy");  // "01/20/2025"
```

**Null Handling:**
```java
PropertyValue lValue = new PropertyValue();  // Null value
System.out.println(lValue.getType());        // "null"
System.out.println(lValue.toString());       // ""

if (lValue.getValueType() == PropertyValue.CONST_VALUE_TYPE_NULL) {
  System.out.println("Value is null");
}
```

---

## MakeAll Orchestration

### What is MakeAll?

**Location:** `source/scripts/com/esarks/jac/make/MakeAll.script`
**Size:** 531 lines

**Purpose:** Orchestrate the generation of all artifacts from XML specifications.

### MakeAll Workflow

```
MakeAll.script
  ↓
Read project configuration XML
  ↓
For each DDL specification:
  ├─→ GenerateDdl → SQL CREATE TABLE scripts
  └─→ GenerateJeo → JEO classes + CRUD XML
        ↓
For each CRUD XML:
  └─→ GenerateService → Service layer scripts
        ↓
For each Rules specification:
  └─→ GenerateDtable → Decision table scripts
        ↓
For each Frame specification:
  └─→ GenerateFrame → UI form scripts
        ↓
For each Report specification:
  └─→ GenerateReport → Report renderer scripts
        ↓
Compile all generated scripts
  ↓
Package artifacts
```

### MakeAll Configuration

**Input:** Project XML (typically `Make_Project.xml`)

```xml
<project name="MyApplication">

  <!-- DDL Specifications -->
  <ddl>
    <spec>com.example.model.CustomerDdl</spec>
    <spec>com.example.model.OrderDdl</spec>
    <spec>com.example.model.ProductDdl</spec>
  </ddl>

  <!-- Rules Specifications -->
  <rules>
    <spec>com.example.rules.OrderApprovalRules</spec>
    <spec>com.example.rules.PricingRules</spec>
  </rules>

  <!-- Frame Specifications -->
  <frames>
    <spec>com.example.view.CustomerEditFrame</spec>
    <spec>com.example.view.OrderEntryFrame</spec>
  </frames>

  <!-- Report Specifications -->
  <reports>
    <spec>com.example.report.CustomerReport</spec>
    <spec>com.example.report.SalesReport</spec>
  </reports>

  <!-- Service Specifications (in addition to auto-generated CRUD) -->
  <services>
    <spec>com.example.service.CustomQueries</spec>
  </services>

  <!-- Generation Options -->
  <options>
    <force>false</force>  <!-- Only regenerate if XML changed -->
    <compile>true</compile>  <!-- Compile after generation -->
    <verbose>true</verbose>  <!-- Show progress -->
  </options>

</project>
```

### MakeAll Execution

**Command:**
```batch
cd jacBuild24/bin
Job jac com.esarks.jac.make.MakeAll ! micScriptComponent
```

**Or with force regeneration:**
```batch
Job jac com.esarks.jac.make.MakeAll force ! micScriptComponent
```

### MakeAll Key Features

**1. Dependency Management**
- Tracks file modification times
- Only regenerates when XML specs change
- Cascades: DDL → JEO → Service

**2. Progress Reporting**
- Shows which files are being generated
- Reports compilation status
- Logs errors and warnings

**3. Error Recovery**
- Continues on non-fatal errors
- Summarizes all errors at end
- Preserves partial results

**4. Batch Compilation**
- Generates all artifacts first
- Compiles all at once (faster)
- Validates cross-references

### Phase 2 Build Integration

MakeAll is invoked during **Phase 2** of the JAC build process:

**phase2.bat:**
```batch
@echo off
echo Building Phase 2: ARM Framework + Generators

REM Compile core ARM scripts
call Job jac com.esarks.arm.scripts.Method ! jac
call Job jac com.esarks.arm.scripts.Service ! jac
REM ... (other ARM scripts)

REM Compile Jrun components
call Job jac com.esarks.jac.jrun.Job ! micScriptComponent
call Job jac com.esarks.jac.jrun.Jrun ! micScriptComponent

REM Run MakeJac (which invokes MakeAll internally)
call Job com.esarks.jac.jrun.Jrun execute "MakeJac_force.jrun2"

REM Copy compiled classes to phase2Classes
xcopy classes\*.class phase2Classes /s /y

REM Create mic.jar
jar cf lib\mic\mic.jar -C phase2Classes .

echo Phase 2 complete!
```

### MakeJac vs. MakeAll

- **MakeAll** - Generates artifacts from XML specs
- **MakeJac** - Compiles all JAC/ARM/MIC scripts (includes MakeAll)

**MakeJac** is a higher-level orchestrator that:
1. Runs **MakeAll** to generate artifacts
2. Compiles all ARM template scripts
3. Compiles all MIC framework scripts
4. Compiles all application scripts
5. Creates mic.jar

---

## Specialization Patterns

### Pattern 1: Database-Centric Application

**Scenario:** CRUD application with database persistence

**Components:**
1. **GenerateDdl** - Define database schema
2. **GenerateJeo** - Generate entity objects
3. **GenerateService** - Generate CRUD services
4. **GenerateFrame** - Generate UI forms
5. **MakeAll** - Orchestrate generation

**Workflow:**
```
CustomerDdl.xml
  ↓ GenerateDdl
Customer table (SQL)
  ↓ GenerateJeo
Customer.script (JEO)
CustomerCrud_Crud.xml
  ↓ GenerateService
CustomerCrud.script (Service)
  ↓ GenerateFrame
CustomerEditFrame.script (UI)
  ↓ Compile all
Running application
```

**Example Project:**
```
project/
├── ddl/
│   ├── CustomerDdl.xml
│   ├── OrderDdl.xml
│   └── ProductDdl.xml
├── service/
│   └── [Auto-generated from JEO]
├── view/
│   ├── CustomerEditFrame.xml
│   ├── OrderEntryFrame.xml
│   └── ProductListFrame.xml
└── Make_Project.xml
```

---

### Pattern 2: Rules-Driven Application

**Scenario:** Business logic implemented as decision tables

**Components:**
1. **GenerateDtable** - Generate rule engines
2. **GenerateJeo** - Data structures for rules
3. **GenerateService** - Data access for rules
4. **MakeAll** - Orchestrate generation

**Workflow:**
```
OrderApprovalRules.xml
  ↓ GenerateDtable
OrderApprovalRules.script (Decision table)
  ↑ uses
Order.script (JEO)
Customer.script (JEO)
```

**Use Cases:**
- Loan approval workflows
- Insurance underwriting
- Discount calculations
- Routing logic

---

### Pattern 3: Reporting Application

**Scenario:** Data reporting and analytics

**Components:**
1. **GenerateService** - Data retrieval queries
2. **GenerateReport** - Report templates
3. **GenerateJeo** - Data structures
4. **MakeAll** - Orchestrate generation

**Workflow:**
```
SalesReportSpec.xml
  ↓ GenerateReport
SalesReport.script (Renderer)
  ↑ uses
SalesDataService.script (Data fetching)
  ↑ fetches
SalesData.script (JEO)
```

**Output Formats:**
- HTML (web viewing)
- XML (data exchange)
- PDF (via post-processing)

---

### Pattern 4: Full-Stack Application

**Scenario:** Complete enterprise application

**Components:** All 6 generators + MakeAll

**Architecture:**
```
Database Layer (GenerateDdl)
  ↓
Entity Layer (GenerateJeo)
  ↓
Service Layer (GenerateService)
  ↓
Business Logic Layer (GenerateDtable)
  ↓
UI Layer (GenerateFrame)
  ↓
Reporting Layer (GenerateReport)
```

**Project Structure:**
```
enterprise-app/
├── database/
│   ├── schema.sql (from GenerateDdl)
│   └── CustomerDdl.xml
├── model/
│   ├── Customer.script (from GenerateJeo)
│   ├── Order.script
│   └── Product.script
├── service/
│   ├── CustomerService.script (from GenerateService)
│   ├── OrderService.script
│   └── ProductService.script
├── rules/
│   ├── OrderApprovalRules.script (from GenerateDtable)
│   └── PricingRules.script
├── view/
│   ├── CustomerEditFrame.script (from GenerateFrame)
│   ├── OrderEntryFrame.script
│   └── ProductListFrame.script
├── reports/
│   ├── CustomerReport.script (from GenerateReport)
│   └── SalesReport.script
└── Make_Project.xml (MakeAll configuration)
```

---

## Use Cases and Examples

### Use Case 1: E-Commerce System

**Requirements:**
- Customer management
- Product catalog
- Order processing
- Pricing rules
- Sales reporting

**Specializations Used:**

| Component | Generator | Purpose |
|-----------|-----------|---------|
| Customer table | GenerateDdl | Define schema |
| Customer JEO | GenerateJeo | Entity class |
| Customer CRUD | GenerateService | Data access |
| Customer form | GenerateFrame | UI |
| Pricing rules | GenerateDtable | Business logic |
| Sales report | GenerateReport | Analytics |

---

### Use Case 2: Insurance Application

**Requirements:**
- Policy management
- Underwriting rules
- Claims processing
- Risk assessment
- Compliance reporting

**Specializations Used:**

| Component | Generator | Purpose |
|-----------|-----------|---------|
| Policy DDL | GenerateDdl | Database |
| Policy JEO | GenerateJeo | Entities |
| Underwriting rules | GenerateDtable | Risk logic |
| Claims form | GenerateFrame | Data entry |
| Compliance report | GenerateReport | Regulatory |

---

### Use Case 3: Order Management System

**Requirements:**
- Order entry
- Inventory checks
- Approval workflow
- Shipping integration
- Order reports

**Specializations Used:**

| Component | Generator | Purpose |
|-----------|-----------|---------|
| Order/Inventory DDL | GenerateDdl | Tables |
| Order/Product JEOs | GenerateJeo | Models |
| Order services | GenerateService | Logic |
| Approval rules | GenerateDtable | Workflow |
| Order entry form | GenerateFrame | UI |
| Shipping report | GenerateReport | Tracking |

---

## Component Combinations

### Combination 1: JEO + Service + Frame

**Purpose:** Complete CRUD interface for a single entity

**Steps:**
1. Define table in DDL XML
2. GenerateJeo → Customer.script + CustomerCrud_Crud.xml
3. GenerateService → CustomerCrud.script
4. GenerateFrame → CustomerEditFrame.script

**Result:** Full create/read/update/delete UI

---

### Combination 2: Service + Report

**Purpose:** Data retrieval and presentation

**Steps:**
1. Define query in Service XML
2. GenerateService → CustomerListService.script
3. Define report in Report XML
4. GenerateReport → CustomerListReport.script

**Result:** Queryable data with formatted output

---

### Combination 3: JEO + Dtable

**Purpose:** Business logic operating on entities

**Steps:**
1. Create JEOs for data structures
2. Define rules in Rules XML
3. GenerateDtable → OrderApprovalRules.script
4. Rules reference JEOs for data access

**Result:** Decision logic with typed data

---

### Combination 4: All Generators (Full Stack)

**Purpose:** Enterprise application with all layers

**Steps:**
1. **GenerateDdl** - Database schema
2. **GenerateJeo** - Entity objects
3. **GenerateService** - Data access layer
4. **GenerateDtable** - Business rules
5. **GenerateFrame** - User interface
6. **GenerateReport** - Analytics/reporting

**Result:** Complete application from specifications

---

## Quick Reference

### Generator Inputs/Outputs

| Generator | Input XML | Primary Output | Secondary Outputs |
|-----------|-----------|----------------|-------------------|
| **GenerateDdl** | DDL spec | SQL scripts | HTML docs |
| **GenerateDtable** | Rules spec | Decision table script | HTML decision matrix |
| **GenerateJeo** | DDL spec | JEO script | CRUD XML |
| **GenerateFrame** | Frame spec | UI form script | - |
| **GenerateReport** | Report spec | Report renderer script | Test XML, Controller |
| **GenerateService** | Service spec | Service layer script | HTML docs |

### Generator Command Line

**General Pattern:**
```batch
Job jac com.esarks.jac.generators.GenerateXxx ! micScriptComponent arg1 arg2...
```

**Specific Examples:**
```batch
REM Generate DDL
Job jac com.esarks.jac.generators.GenerateDdl ! micScriptComponent com.example.CustomerDdl

REM Generate JEO
Job jac com.esarks.jac.generators.GenerateJeo ! micScriptComponent com.example.model CUSTOMER

REM Generate Service
Job jac com.esarks.jac.generators.GenerateService ! micScriptComponent com.example.CustomerService

REM Generate Dtable
Job jac com.esarks.jac.generators.GenerateDtable ! micScriptComponent com.example.rules.OrderApproval

REM Generate Frame
Job jac com.esarks.jac.generators.GenerateFrame ! micScriptComponent com.example.view.CustomerEdit_View

REM Generate Report
Job jac com.esarks.jac.generators.GenerateReport ! micScriptComponent com.example.report.SalesReport
```

### File Naming Conventions

| Type | File Name Pattern | Example |
|------|-------------------|---------|
| DDL Spec | `*Ddl.xml` | `CustomerDdl.xml` |
| JEO | `*.script` | `Customer.script` |
| CRUD Spec | `*Crud_Crud.xml` | `CustomerCrud_Crud.xml` |
| Service | `*Service.script` | `CustomerService.script` |
| Rules Spec | `*Rules.xml` | `OrderApprovalRules.xml` |
| Dtable | `*.script` | `OrderApprovalRules.script` |
| Frame Spec | `*_View.xml` | `CustomerEdit_View.xml` |
| Frame | `*.script` | `CustomerEdit.script` |
| Report Spec | `*Report.xml` | `SalesReport.xml` |
| Report | `*Report.script` | `SalesReport.script` |

### Code Preservation

All generators support **code preservation** via section markers:

```java
//$Section=customCode$Preserve=yes
// Your custom code here - preserved during regeneration
//$Section=customCode$Preserve=no

//$Section=generatedCode$Preserve=no
// Generated code - overwritten on regeneration
//$Section=generatedCode$Preserve=no
```

**Preserve Options:**
- `$Preserve=yes` - Keep this section (custom code)
- `$Preserve=no` - Overwrite this section (generated code)
- `$Preserve=keep` - Keep section even if not in new template
- `$Preserve=discard` - Remove section if not in new template

---

## Summary

The JAC Build System provides **six specialized generators** that transform XML specifications into executable Java code:

1. **GenerateDdl** - Database schemas from XML → SQL DDL
2. **GenerateDtable** - Business rules from XML → Decision table logic
3. **GenerateJeo** - Table definitions → Java Entity Objects + CRUD
4. **GenerateFrame** - UI specs from XML → Form controls and data binding
5. **GenerateReport** - Report specs from XML → Multi-format renderers
6. **GenerateService** - Service specs from XML → Database service layer

These generators work together on top of a three-layer foundation:
- **JAC** - Core compiler/runtime engine
- **ARM** - Template library and application framework
- **MIC** - Model-Interface-Controller RAD framework

**Java Entity Objects (JEO)** serve as the central data structure, providing:
- Type-safe database entity representation
- Hierarchical parent-child relationships
- Property-based dynamic access
- Automatic ResultSet mapping

**MakeAll** orchestrates the entire generation process, managing dependencies and ensuring consistent builds.

By combining these specializations, developers can rapidly create complete enterprise applications from XML specifications with minimal hand-coding.

---

**Documentation Version:** 1.0
**Last Updated:** October 23, 2025
**Author:** Generated from jacBuild24 source analysis
**Organization:** Architects of Software Design, Corp.
