---
title: "GenerateReportControlUseCase"
---

# GenerateController Use Case Guide

## Overview

**GenerateController** automatically creates orchestration code that bridges CRUD services to Report rendering, enabling complete end-to-end report execution from database to HTML output.

**Primary Use Case**: You have a database table with existing DDL, JEO, and CRUD services, and you need an executable report that displays that data. GenerateController automatically generates the controller code that fetches data via CRUD and renders it using your Report definition.

---

## When to Use GenerateController

### Use GenerateController When:

1. **End-to-End Report Generation** - You have all the pieces (DDL, JEO, CRUD, Report) but need them connected
2. **Rapid Prototyping** - You want to quickly see database data rendered as HTML without manual coding
3. **Consistent Patterns** - You need multiple reports following identical orchestration patterns
4. **Learning JAC** - You want to see a complete data flow example from database to presentation

### Do NOT Use GenerateController For:

- Creating report layouts (use GenerateReport or GenerateReportPro)
- Generating CRUD services (use GenerateJeo/GenerateService)
- Modifying database schema (use GenerateDdl)
- Complex business logic (add that manually in preserved sections)

---

## Prerequisites

Before using GenerateController, you **must** have already generated:

1. PASS **Database Table** (via GenerateDdl)
2. PASS **JEO Classes** (via GenerateJeo)
3. PASS **CRUD Services** (via GenerateJeo/GenerateService)
4. PASS **Report Definition XML** (via GenerateReport or GenerateReportPro)

**GenerateController is the final step** that ties everything together into an executable application.

---

## Report XML Schema Enhancement

GenerateController supports two modes:

### Mode 1: Automatic CRUD Derivation (Legacy)

The controller derives CRUD service information from JEO naming conventions.

```xml
<root>
  <report name="com.esarks.examples.generateReport.ChoreCompletionReport"
          inJeo="com.esarks.arm.model.jeo.service">
    <jeo instance="com.esarks.examples.ChoreCompletionDetailJeo" type="detail">
      <column heading="Child Name" attribute="childName"/>
      <column heading="Status" attribute="status"/>
    </jeo>
  </report>
</root>
```

**Limitations**:
- Assumes standard naming (JEO ends with "Jeo", CRUD ends with "Crud")
- Cannot handle custom CRUD methods
- Report JEO must match database JEO structure

### Mode 2: Explicit CRUD Mapping (Enhanced - Recommended)

Specify exactly which CRUD service to call and how to map fields.

```xml
<root>
  <report name="com.esarks.examples.generateReport.ChoreCompletionReport"
          inJeo="com.esarks.arm.model.jeo.service">

    <!-- CRUD service configuration -->
    <crud service="com.esarks.examples.generateDdl.CHORE_COMPLETIONSCrud"
          method="readCHORE_COMPLETIONS"
          dbJeo="com.esarks.examples.generateJeo.CHORE_COMPLETIONSJeo"/>

    <!-- Report JEO with field mappings -->
    <jeo instance="com.esarks.examples.ChoreCompletionDetailJeo" type="detail">
      <column heading="Child Name" width="20"
              attribute="childName"
              source="child_name"/>
      <column heading="Status" width="12"
              attribute="status"
              source="completion_status"/>
      <column heading="Points" width="8"
              attribute="points"
              source="points_earned"/>
    </jeo>

  </report>
</root>
```

**Benefits**:
- Works with any CRUD service and method
- Maps database fields to different report field names
- Supports complex transformations
- Self-documenting configuration

---

## Step-by-Step: Creating a Controller

### Step 1: Verify Prerequisites

Ensure all prerequisite components exist:

```bash
# Check DDL exists
ls app/com/esarks/examples/generateDdl/AllowanceAlley_Ddl.xml

# Check JEO exists
ls app/com/esarks/examples/generateJeo/CHORE_COMPLETIONS.xml

# Check CRUD exists
ls classes/com/esarks/examples/generateDdl/CHORE_COMPLETIONSCrud.class

# Check Report exists
ls app/com/esarks/examples/generateReport/ChoreCompletion_Report.xml
```

### Step 2: Enhance Report XML with CRUD Mapping

Edit your Report XML to add the `<crud>` element:

```xml
<report name="com.esarks.examples.generateReport.ChoreCompletionReport"
        inJeo="com.esarks.arm.model.jeo.service">

  <!-- Add CRUD configuration -->
  <crud service="com.esarks.examples.generateDdl.CHORE_COMPLETIONSCrud"
        method="readCHORE_COMPLETIONS"
        dbJeo="com.esarks.examples.generateJeo.CHORE_COMPLETIONSJeo"/>

  <jeo instance="com.esarks.examples.ChoreCompletionDetailJeo" type="detail">
    <!-- Add source attributes for field mapping -->
    <column heading="Child" attribute="childName" source="child_name"/>
    <column heading="Chore" attribute="choreTitle" source="chore_title"/>
    <column heading="Status" attribute="status" source="completion_status"/>
  </jeo>
</report>
```

### Step 3: Generate the Controller

**Manual Generation:**
```bash
cd jacBuild24/bin
jac.bat com.esarks.jac.generators.GenerateController \
  generateController \
  com.esarks.examples.generateReport.ChoreCompletion_Report \
  true
```

**Automatic via RunMakeAll:**

GenerateController is already integrated into `MakeAll.script` (lines 456-486). When you run `RunMakeAll.jrun`, it automatically generates controllers for all Report components.

```bash
cd app/com/esarks/examples/generateMake
../../../../jacBuild24/bin/JrunDirect.bat RunMakeAll.jrun
```

The build summary will show:
```
Controller files generated: 9
```

### Step 4: Verify Generated Files

Check that the controller was created:

```bash
ls app/com/esarks/examples/generateReport/ChoreCompletionReportController.*
```

Expected files:
- `ChoreCompletionReportController.new` - Generated controller code
- `ChoreCompletionReportController.xml` - Component metadata
- `ChoreCompletionReportController.json` - Configuration data
- `ChoreCompletionReportController.jrun` - Execution script
- `ChoreCompletionReportController.bat` - Windows launcher

### Step 5: Execute the Controller

Run the generated controller:

```bash
cd jacBuild24/bin
JrunDirect.bat ../../app/com/esarks/examples/generateReport/ChoreCompletionReportController.jrun
```

Or use the batch file:
```bash
cd app/com/esarks/examples/generateReport
ChoreCompletionReportController.bat
```

---

## Generated Controller Architecture

### Controller Components

**1. execute() Method**
```java
public void execute() {
  // Fetch data from CRUD service
  ArrayList lCollection = performService();

  // Create report JEO collection
  service lReportJeo = new service();

  // Transform each database JEO to report JEO
  for (int lIdx = 0; lIdx < lCollection.size(); lIdx++) {
    DbJeo lDbJeo = (DbJeo) lCollection.get(lIdx);
    lReportJeo.addJeo(createDetail(lDbJeo));
  }

  // Invoke report rendering
  iScript.execMethod(reportName, "render",
    new Object[]{outputPath, lReportJeo});
}
```

**2. performService() Method**
```java
private ArrayList performService() {
  // Create service JEO for request/reply
  service lServiceJeo = new service();

  // Call CRUD read method via reflection
  iScript.execMethod(crudService, crudMethod,
    new Object[]{lServiceJeo});

  // Check for service errors
  if (lServiceJeo.getError() != null) {
    return null;
  }

  // Extract result data from reply
  Jeo lReplyJeo = lServiceJeo.getReply();
  ArrayList lArrayList = lReplyJeo.getJeoByInstanceName(dbJeoInstance);

  return lArrayList;
}
```

**3. createDetail() Method**
```java
private ReportJeo createDetail(DbJeo aDbJeo) {
  // Create new report JEO
  ReportJeo lReportJeo = new ReportJeo("detail");

  // Map attributes from database to report
  lReportJeo.setChildName(aDbJeo.getChild_namePropertyValue().toString());
  lReportJeo.setChoreTitle(aDbJeo.getChore_titlePropertyValue().toString());
  lReportJeo.setStatus(aDbJeo.getCompletion_statusPropertyValue().toString());

  return lReportJeo;
}
```

---

## Complete Example: Chore Completion Report

### Database Table (DDL)
```xml
<!-- AllowanceAlley_Ddl.xml -->
<table name="CHORE_COMPLETIONS">
  <column name="chore_id" type="integer" primaryKey="true"/>
  <column name="child_name" type="varchar" size="50"/>
  <column name="chore_title" type="varchar" size="100"/>
  <column name="completion_status" type="varchar" size="20"/>
  <column name="points_earned" type="integer"/>
  <column name="completed_at" type="timestamp"/>
</table>
```

### JEO Definition
Generated via GenerateJeo - creates `CHORE_COMPLETIONSJeo.java`

### CRUD Service
Generated via GenerateService - creates `CHORE_COMPLETIONSCrud.java` with `readCHORE_COMPLETIONS()` method

### Report Definition with CRUD Mapping
```xml
<!-- ChoreCompletion_Report.xml -->
<root>
  <report name="com.esarks.examples.generateReport.ChoreCompletionReport"
          inJeo="com.esarks.arm.model.jeo.service">

    <crud service="com.esarks.examples.generateDdl.CHORE_COMPLETIONSCrud"
          method="readCHORE_COMPLETIONS"
          dbJeo="com.esarks.examples.generateJeo.CHORE_COMPLETIONSJeo"/>

    <jeo instance="com.esarks.examples.ChoreCompletionDetailJeo" type="detail">
      <column heading="Child Name" width="20"
              attribute="childName" source="child_name"/>
      <column heading="Chore" width="25"
              attribute="choreTitle" source="chore_title"/>
      <column heading="Completed Date" width="15"
              attribute="completedAt" source="completed_at"/>
      <column heading="Status" width="12"
              attribute="status" source="completion_status"/>
      <column heading="Points" width="8"
              attribute="points" source="points_earned"/>
    </jeo>

  </report>
</root>
```

### Generated Controller
```java
// ChoreCompletionReportController.java
public void execute() {
  System.out.println("Executing Controller: ChoreCompletionReportController");

  ArrayList lCollection = performService();

  com.esarks.arm.model.jeo.service lReportJeo =
    new com.esarks.arm.model.jeo.service();

  for (int lIdx = 0; lIdx < lCollection.size(); lIdx++) {
    com.esarks.examples.generateJeo.CHORE_COMPLETIONSJeo lDbJeo =
      (com.esarks.examples.generateJeo.CHORE_COMPLETIONSJeo) lCollection.get(lIdx);
    lReportJeo.addJeo(createDetail(lDbJeo));
  }

  iScript.execMethod(
    "com.esarks.examples.generateReport.ChoreCompletionReport",
    "render",
    new Object[]{"ChoreCompletionReport_Output", lReportJeo}
  );
}

private ArrayList performService() {
  service lServiceJeo = new service();

  iScript.execMethod(
    "com.esarks.examples.generateDdl.CHORE_COMPLETIONSCrud",
    "readCHORE_COMPLETIONS",
    new Object[]{lServiceJeo}
  );

  Jeo lReplyJeo = lServiceJeo.getReply();
  return lReplyJeo.getJeoByInstanceName(
    "com.esarks.examples.generateJeo.CHORE_COMPLETIONSJeo"
  );
}

private com.esarks.examples.ChoreCompletionDetailJeo createDetail(
    com.esarks.examples.generateJeo.CHORE_COMPLETIONSJeo aDbJeo) {

  com.esarks.examples.ChoreCompletionDetailJeo lReportJeo =
    new com.esarks.examples.ChoreCompletionDetailJeo("detail");

  lReportJeo.setChildName(aDbJeo.getChild_namePropertyValue().toString());
  lReportJeo.setChoreTitle(aDbJeo.getChore_titlePropertyValue().toString());
  lReportJeo.setCompletedAt(aDbJeo.getCompleted_atPropertyValue().toString());
  lReportJeo.setStatus(aDbJeo.getCompletion_statusPropertyValue().toString());
  lReportJeo.setPoints(aDbJeo.getPoints_earnedPropertyValue().toString());

  return lReportJeo;
}
```

---

## Field Mapping Patterns

### Pattern 1: Direct Mapping (Same Names)

```xml
<column heading="Status" attribute="status" source="status"/>
```
Database field `status` maps to report attribute `status`

### Pattern 2: Name Transformation

```xml
<column heading="Child Name" attribute="childName" source="child_name"/>
```
Database field `child_name` maps to report attribute `childName`

### Pattern 3: Semantic Renaming

```xml
<column heading="Points" attribute="points" source="points_earned"/>
```
Database field `points_earned` maps to simpler report attribute `points`

### Pattern 4: Source Optional (Defaults to Attribute)

```xml
<column heading="Title" attribute="title"/>
```
If no `source`, assumes database field name matches `attribute`

---

## Integration with RunMakeAll

GenerateController is automatically invoked by `MakeAll.script` when processing Report components.

### MakeAll.script Integration (lines 456-486)

```java
// After generating each Report
if (lScriptName.indexOf("GenerateReport") >= 0) {
  iReportCount++;

  // Auto-generate controller
  if (<!make:script:argument!>!size() > 0) {
    String lReportXml = <![make:script:argument]!>;

    try {
      Object[] lControllerArgs = new Object[] {
        lReportXml,
        Boolean.valueOf(iForce)
      };

      iScript.execMethod(
        loadScript(iGenerateController),
        "generateController",
        lControllerArgs
      );

      iControllerCount++;
    } catch (Exception eController) {
      // Controller generation is optional
    }
  }
}
```

### Build Summary Output

```
========================================
BUILD SUMMARY
========================================
Components processed:    22
DDL files generated:     8
JEO files generated:     8
Service files generated: 8
Report files generated:  9
Controller files generated: 9  ← Automatic!
Dtable files generated:  1
Frame files generated:   1
Files compiled:          127
Errors encountered:      0

SUCCESS: BUILD COMPLETED
========================================
```

---

## Troubleshooting

### Controller Not Generated

**Symptom**: No controller files created after generation

**Possible Causes**:
1. Report JEO instance doesn't contain "generateJeo" or "generateDdl" in package name
2. Controller already exists and is up-to-date (not stale)
3. Error during generation (check logs)

**Solutions**:
```bash
# Force regeneration
jac.bat com.esarks.jac.generators.GenerateController \
  generateController YourReport true

# Check debug output
grep -i "GenerateController" jacBuild24/logs/*.log
```

### Missing CRUD Service

**Symptom**: Controller generates but fails at runtime with "CRUD service not found"

**Cause**: CRUD service class doesn't exist or isn't compiled

**Solution**:
```bash
# Verify CRUD class exists
ls classes/com/esarks/examples/generateDdl/YourTableCrud.class

# Regenerate if missing
cd app/com/esarks/examples/generateMake
../../../../jacBuild24/bin/JrunDirect.bat RunMakeAll.jrun
```

### Field Mapping Errors

**Symptom**: Controller compiles but fails with "getXxx method not found"

**Cause**: Source attribute doesn't match actual database field name

**Solution**:
```xml
<!-- Check DDL for actual field names -->
<!-- If database has "completion_status" but you wrote "status": -->
<column attribute="status" source="completion_status"/>
```

### JEO Type Mismatch

**Symptom**: ClassCastException at runtime

**Cause**: Report JEO instance doesn't match what CRUD returns

**Solution**:
```xml
<!-- Ensure dbJeo matches what CRUD service returns -->
<crud dbJeo="com.esarks.examples.generateJeo.ACTUAL_TABLE_NAMEJeo"/>

<!-- Not a custom JEO you created manually -->
```

---

## Advanced Usage

### Custom Business Logic

Add custom transformations in preserved sections:

```java
//$Section=Custom$Preserve=yes
private com.esarks.examples.ChoreCompletionDetailJeo createDetail(
    com.esarks.examples.generateJeo.CHORE_COMPLETIONSJeo aDbJeo) {

  com.esarks.examples.ChoreCompletionDetailJeo lReportJeo =
    new com.esarks.examples.ChoreCompletionDetailJeo("detail");

  // Standard mappings (auto-generated)
  lReportJeo.setChildName(aDbJeo.getChild_namePropertyValue().toString());
  lReportJeo.setStatus(aDbJeo.getCompletion_statusPropertyValue().toString());

  // Custom business logic (preserved across regeneration)
  int lPoints = Integer.parseInt(aDbJeo.getPoints_earnedPropertyValue().toString());
  if (lPoints > 100) {
    lReportJeo.setBonusEligible("Yes");
  } else {
    lReportJeo.setBonusEligible("No");
  }

  return lReportJeo;
}
//$Section=Custom$Preserve=end
```

### Multiple CRUD Calls

For reports requiring data from multiple tables, modify `performService()`:

```java
private ArrayList performService() {
  service lServiceJeo = new service();

  // First CRUD call
  iScript.execMethod(crudService1, method1, new Object[]{lServiceJeo});

  // Second CRUD call
  iScript.execMethod(crudService2, method2, new Object[]{lServiceJeo});

  // Combine results
  Jeo lReplyJeo = lServiceJeo.getReply();
  ArrayList lResult1 = lReplyJeo.getJeoByInstanceName(jeo1);
  ArrayList lResult2 = lReplyJeo.getJeoByInstanceName(jeo2);

  return mergeResults(lResult1, lResult2);
}
```

---

## Best Practices

### 1. Always Use CRUD Element
```xml
<!-- Recommended: Explicit -->
<crud service="..." method="..." dbJeo="..."/>

<!-- Avoid: Relying on derivation -->
<!-- (only works with standard naming) -->
```

### 2. Match Database Field Names Exactly
```xml
<!-- If DB has "completion_status", use exactly that -->
<column attribute="status" source="completion_status"/>

<!-- Not: -->
<column attribute="status" source="completionStatus"/>
```

### 3. One Controller Per Report
- Each Report should have its own Controller
- Don't try to reuse controllers across different reports
- Controllers are lightweight - duplication is fine

### 4. Use RunMakeAll for Consistency
- Always regenerate controllers via RunMakeAll
- Ensures all reports get controllers automatically
- Maintains consistent patterns across project

### 5. Test Incrementally
```bash
# 1. Generate Report alone first
jac.bat com.esarks.jac.generators.GenerateReport ...

# 2. Then generate Controller
jac.bat com.esarks.jac.generators.GenerateController ...

# 3. Test execution
JrunDirect.bat YourReportController.jrun
```

---

## Related Documentation

- **[GenerateReport](./GenerateReport.md)** - Creating report definitions
- **[GenerateReportPro](./GenerateReportPro.md)** - Enhanced reports with parameters
- **[GenerateController](./GenerateController.md)** - Controller generator internals
- **[AllowanceAlleyTestOrchestration](./AllowanceAlleyTestOrchestration.md)** - Complete system architecture
- **[MakeAll](./MakeAll.md)** - Build orchestration system

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 2.0 | 2025-11-01 | Added CRUD element and source attribute support |
| 1.0 | 2025-10-01 | Initial controller generation with derivation |

---

## Summary

GenerateController bridges the gap between data access (CRUD) and presentation (Reports) by automatically generating orchestration code. With the enhanced CRUD mapping support, you can:

- Specify exact CRUD services and methods
- Map database fields to different report field names
- Support complex data transformations
- Maintain backward compatibility with automatic derivation

The controller generation is integrated into RunMakeAll, ensuring every report automatically gets executable orchestration code with zero manual coding required.
