---
title: "GenerateReport"
---

# GenerateReport - JAC Report Generator

## Overview

GenerateReport is a JAC code generator that transforms XML report definitions into executable report scripts. It's part of the JAC code generation framework and is responsible for creating report components with their rendering methods.

## Purpose

GenerateReport reads XML report definitions and generates:
- `.script` files - The main report script containing rendering logic
- `.xml` files - Component XML metadata
- `.new` files - Template files for report structure

## Location

**Source**: `C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\jacBuild24\source\scripts\com\esarks\jac\generators\GenerateReport.script`

**Fully Qualified Name**: `com.esarks.jac.generators.GenerateReport`

## How It Works

### Input

GenerateReport expects XML report definitions following this structure:

```xml
<PENDINGxml version="1.0" encoding="UTF-8"PENDING>
<root>
  <report name="com.esarks.examples.ChoreCompletionReport" inJeo="com.esarks.arm.model.jeo.service">
    <jeo instance="com.esarks.examples.ChoreCompletionDetailJeo" type="detail">
      <column heading="Column Name" width="20" attribute="attributeName"/>
      <!-- More columns... -->
    </jeo>
  </report>
</root>
```

**Key Elements**:
- `<report>` - Root report element
  - `name` - Fully qualified report class name
  - `inJeo` - JEO package for report context
- `<jeo>` - Report data source definition
  - `instance` - JEO class providing data
  - `type` - Report type (detail, summary, etc.)
- `<column>` - Column definitions
  - `heading` - Display header
  - `width` - Column width
  - `attribute` - Data attribute to display

### Processing Flow

1. **Remove Previous Data**: `<!report!>!remove()` clears any existing report data from symbol table
2. **Load Schema**: Check if ReportSchema is loaded; if not, load it via `loadXmlSchema()`
3. **Parse Input XML**: Parse the report definition XML file using the loaded schema
4. **Validate Report Tag**: Check that `<!report!>!size() > 0` to ensure `<report>` element exists
5. **Extract Report Metadata**: Read report name, inJeo type from parsed XML
6. **Check Staleness**: Determine if regeneration is needed based on file timestamps (unless force=true)
7. **Configure Merge Settings**: Set section markers, preserve markers, and merge behavior
8. **Generate Output Files**:
   - Create component XML metadata file
   - Create .new template file with rendering methods
   - Apply merge to preserve custom code sections
   - Create _Test.xml sample data file
   - Create Controller.new template file
9. **Process Nested JEOs**: Iterate through JEO hierarchy to generate rendering code for each level
10. **Generate HTML/XML Renderers**: Create both HTML table and XML output rendering methods

### Staleness Check

GenerateReport implements smart regeneration - it only regenerates files if:
- The source XML has been modified since the last generation
- The GenerateReport.script template itself has changed
- The force flag is set to `true`

**Staleness Logic**:
```java
boolean lForce = (aForce != null && aForce.booleanValue());
if (!lForce) {
  File lGeneratorFile = new File(path("com.esarks.jac.generators.GenerateReport") + ".script");
  File lXmlFile = new File(path(aXmlDefinition) + ".xml");
  File lNewFile = new File(path(<![report:name]!>) + ".script");

  if (lNewFile.exists() && lXmlFile.exists() &&
      lNewFile.lastModified() >= lXmlFile.lastModified() &&
      ((lGeneratorFile.exists() && lNewFile.exists() &&
        lGeneratorFile.lastModified() <= lNewFile.lastModified()) ||
       !lGeneratorFile.exists())) {
    // Skip generation
    return;
  }
}
```

## JAC Template Syntax Reference

GenerateReport uses JAC's template processing syntax to generate code. Understanding this syntax is essential for modifying or extending the generator.

### Property References

JAC maintains a symbol table that stores parsed XML data as properties. These properties are accessed using special syntax:

| Syntax | Purpose | Example |
|--------|---------|---------|
| `<!property!>` | Property object reference | `<!report!>` - The report property object |
| `<![property]!>` | Property value (string) | `<![report:name]!>` - The report's name attribute |
| `<!property!>!method()` | Call method on property | `<!report!>!size()` - Get count of report elements |
| `<!property:child!>` | Child property object | `<!report:jeo!>` - The jeo child of report |
| `<![property:child:attr]!>` | Nested attribute value | `<![report:jeo:instance]!>` - JEO instance name |

### Iterator Syntax

Process collections of XML elements:

```java
<!" + lJeoName + ":jeo!>!resetIterator();    // Reset to beginning
while(<!" + lJeoName + ":jeo!>!next()) {     // Iterate through each jeo
  // Access current jeo's properties
  <![" + lJeoName + ":jeo:instance]!>        // Current instance name
  <![" + lJeoName + ":jeo:type]!>            // Current type
}
```

**Iterator Methods**:
- `!resetIterator()` - Reset iterator to first element
- `!next()` - Move to next element, returns true if exists
- `!isFirst()` - Check if current element is first
- `!isLast()` - Check if current element is last
- `!size()` - Get count of elements
- `!scan("childName", "value")` - Search for child with matching value

### Template Output Mode

Switch between Java code and template output:

```java
// Java code mode (default)
String lPath = path(aXmlDefinition) + ".xml";

// Switch to template output mode
%>
  Generated code here
  Variables: <!%lPath!>
<%
// Back to Java code mode
```

**Template Output Markers**:
- `%>` - Start template output (written to current output file)
- `<%` - End template output (return to Java code)
- `<!%variable!>` - Insert variable value in template output

### Output Manager

Control which file receives generated content:

```java
iOutputManager.setDocument("createHtml");    // Switch to "createHtml" buffer
%>HTML content here<%                         // Content goes to buffer
iOutputManager.setDocument("");               // Switch back to default output

// Later, retrieve and write buffered content
StringBuffer lBuffer = iOutputManager.getDocument("createHtml");
%><!%lBuffer.toString()!><%
```

### Output Files

GenerateReport creates three main files:

1. **Report.script** - Main report implementation
   - Location: `app/com/esarks/examples/[ReportName].script`
   - Contains: Rendering methods, column formatters
   - Status: **Currently not being generated (under investigation)**

2. **Report.xml** - Component metadata
   - Location: `app/com/esarks/examples/[ReportName].xml`
   - Contains: MIC element definition
   - Status: **Currently not being generated (under investigation)**

3. **Report.new** - Template file
   - Location: `app/com/esarks/examples/[ReportName].new`
   - Contains: Report structure template
   - Status: **Currently not being generated (under investigation)**

## Standalone Report Execution

**Status**: IMPLEMENTED (October 31, 2025)

GenerateReport now creates reports that can execute standalone via `.jrun` files without requiring external data sources. This is accomplished through a parameterless `render()` method that auto-generates test data.

### Overview

Previously, generated reports required a data source (JEO) to be provided when calling the `render()` method. This made reports unusable when invoked via `.jrun` files, which cannot pass parameters. The enhancement adds a parameterless `render()` method that generates realistic test data automatically.

### How It Works

When GenerateReport processes a report definition XML file, it now generates two `render()` methods in the output `.script` file:

1. **Parameterless render()** - For standalone execution
   ```java
   public void render() {
     // Auto-generates test data and calls render(String, JEO)
   }
   ```

2. **Standard render(String, JEO)** - For production use with real data
   ```java
   public void render(String aOutput, com.esarks.arm.model.jeo.service aJeo) {
     // Normal rendering with provided data
   }
   ```

### Test Data Generation

The parameterless `render()` method generates test data by:

1. **Analyzing Report Structure**: Examines the report's column definitions from the XML schema
2. **Creating Sample Records**: Generates 3 sample records for each JEO type in the report
3. **Populating Fields**: Sets each field value to "[Column Heading] [Row Number]"

**Example**: If a report has these columns:
```xml
<column heading="Child Name" attribute="childName"/>
<column heading="Age" attribute="age"/>
<column heading="Chore" attribute="choreTitle"/>
```

The generated test data will be:
```
Record 1: childName="Child Name 1", age="Age 1", choreTitle="Chore 1"
Record 2: childName="Child Name 2", age="Age 2", choreTitle="Chore 2"
Record 3: childName="Child Name 3", age="Age 3", choreTitle="Chore 3"
```

### Execution Console Output

When a standalone report executes, it displays informative console messages:

```
=================================================================
Executing report: com.esarks.examples.ChoreCompletionReport
Mode: Standalone test with generated sample data
Note: For real data, call render(String, JEO) with actual data
=================================================================
Generated 3 test records for type: detail
Rendering report to: com.esarks.examples.ChoreCompletionReport_Output.html and .xml
Report generation complete.
```

### Running Standalone Reports

Execute a generated report via its `.jrun` file:

```bash
JrunDirect.bat app/com/esarks/examples/generateReport/ChoreCompletionReport.jrun
```

The `.jrun` file structure:
```xml
<jacrun script="com.esarks.examples.generateReport.ChoreCompletionReport" method="render" />
```

### Generated Template Code

The parameterless `render()` method is generated in `GenerateReport.script` (lines 129-168) and creates code like this in the output report:

```java
public void render() {
  System.out.println("=================================================================");
  System.out.println("Executing report: " + this.getClass().getName());
  System.out.println("Mode: Standalone test with generated sample data");
  System.out.println("Note: For real data, call render(String, JEO) with actual data");
  System.out.println("=================================================================");

  com.esarks.arm.model.jeo.service lJeo = new com.esarks.arm.model.jeo.service();

  // Generate 3 sample records
  for (int i = 1; i <= 3; i++) {
    ChoreCompletionDetailJeo lDetailJeo = new ChoreCompletionDetailJeo("detail");
    lDetailJeo.setChildName("Child Name " + i);
    lDetailJeo.setAge("Age " + i);
    lDetailJeo.setChoreTitle("Chore " + i);
    lJeo.addJeo(lDetailJeo);
  }

  System.out.println("Generated 3 test records for type: detail");
  System.out.println("Rendering report to: ChoreCompletionReport_Output.html and .xml");
  render("ChoreCompletionReport_Output", lJeo);
  System.out.println("Report generation complete.");
}
```

### Use Cases

**Standalone execution is useful for**:
- **Testing Report Layout**: Verify report structure and formatting without setting up data sources
- **Documentation**: Generate sample reports to demonstrate report capabilities
- **Development**: Quick feedback during report template development
- **Demonstrations**: Show report functionality without database connections

**Production execution** continues to use the standard `render(String, JEO)` method with real data sources.

### Implementation Notes

- **Backward Compatible**: Existing code calling `render(String, JEO)` continues to work unchanged
- **Test Data at Generation Time**: Test data structure is determined when GenerateReport runs, not at report execution time
- **Column Headings as Data**: Uses human-readable column headings rather than technical attribute names
- **Fixed Record Count**: Always generates exactly 3 test records per JEO type
- **Nested JEOs**: Supports reports with nested JEO structures

### Benefits

1. **Self-Contained Reports**: Reports can demonstrate their structure without external dependencies
2. **Immediate Executability**: Generated reports can be tested immediately via `.jrun` files
3. **Developer Experience**: Faster development cycle - generate and test without data setup
4. **Documentation**: Auto-generated sample output shows report structure clearly

## How to Invoke

### Via MakeAll (Recommended)

GenerateReport is typically invoked as part of the MakeAll build process:

```xml
<!-- In RunMakeAll.jrun -->
<jacrun script="com.esarks.jac.make.MakeAll"
        method="execute"
        argument="com.esarks.examples.generatemake.GenerateMake"
        argument2="true" />
```

MakeAll calls GenerateReport for each report definition in the project.

### Direct Invocation

You can also invoke GenerateReport directly:

```java
// From Java/JAC script
generateReport(String aXmlDefinition, Boolean aForce)
```

**Parameters**:
- `aXmlDefinition` - Fully qualified path to the XML report definition (without .xml extension)
  - Example: `com.esarks.examples.generateReport.ChoreCompletion_Report`
- `aForce` - Force regeneration even if files are up-to-date
  - `true` - Always regenerate
  - `false` or `null` - Use staleness check

**Example**:
```java
com.esarks.jac.generators.GenerateReport generator = new com.esarks.jac.generators.GenerateReport();
generator.generateReport("com.esarks.examples.generateReport.ChoreCompletion_Report", true);
```

### Via jac.bat Command Line

```bash
jac.bat com.esarks.jac.generators.GenerateReport generateReport \
  com.esarks.examples.generateReport.ChoreCompletion_Report true
```

### Via JrunDirect.bat

Create a `.jrun` file:
```xml
<jacrun script="com.esarks.jac.generators.GenerateReport"
        method="generateReport"
        argument="com.esarks.examples.generateReport.ChoreCompletion_Report"
        argument2="true" />
```

Then execute:
```bash
JrunDirect.bat MyReport.jrun
```

## Schema Structure

GenerateReport relies on `ReportSchema.xml` (also must exist as `report.xml`) to parse and validate report definitions.

**Schema Location**:
- `app/com/esarks/arm/schemas/ReportSchema.xml` (source)
- `app/com/esarks/arm/schemas/report.xml` (required by loadXmlSchema)
- `jacBuild24/source/scripts/com/esarks/arm/schemas/ReportSchema.xml` (build source)
- `jacBuild24/source/scripts/com/esarks/arm/schemas/report.xml` (build required)

**Schema Namespace**: `com.esarks.arm.schemas.report`

**Schema Root Element**: `root`

### Schema Element Hierarchy

```xml
<schemas>
  <schema name='root' type='string' isEmpty='true'>
    <element name='report' type='string' isEmpty='true'>
      <element name='name' type='string' attribute='true' truncateEol='true' />
      <element name='inJeo' type='string' attribute='true' truncateEol='true' />
      <element name='jeo' type='string' isEmpty='true'>
        <element name='instance' type='string' attribute='true' truncateEol='true' />
        <element name='type' type='string' attribute='true' truncateEol='true' />
        <element name='column' type='string' isEmpty='true'>
          <element name='heading' type='string' attribute='true' truncateEol='true' />
          <element name='width' type='string' attribute='true' truncateEol='true' />
          <element name='attribute' type='string' attribute='true' truncateEol='true' />
          <element name='property' type='string' attribute='true' truncateEol='true' />
          <element name='tag' type='string' isEmpty='true'>
            <element name='name' type='string' attribute='true' truncateEol='true' />
            <element name='default' type='string' attribute='true' truncateEol='true' />
          </element>
          <element name='sort' type='string' attribute='true' truncateEol='true'>
            <element name='type' type='string' attribute='true' truncateEol='true' />
            <element name='ascending' type='string' attribute='true' truncateEol='true' />
          </element>
        </element>
        <element name='jeo' type='string' isEmpty='true'> <!-- Nested JEOs -->
          <element name='instance' type='string' attribute='true' truncateEol='true' />
          <element name='type' type='string' attribute='true' truncateEol='true' />
        </element>
      </element>
    </element>
  </schema>
</schemas>
```

**Key Schema Features**:
- `isEmpty='true'` - Element can have nested children
- `attribute='true'` - Value stored as XML attribute
- `truncateEol='true'` - Remove trailing whitespace
- Recursive `jeo` definition allows unlimited nesting depth

### Property Mappings

After parsing, XML elements become JAC properties:

| XML Path | JAC Property | Type |
|----------|--------------|------|
| `/root/report` | `<!report!>` | Property collection |
| `/root/report/@name` | `<![report:name]!>` | String |
| `/root/report/@inJeo` | `<![report:inJeo]!>` | String |
| `/root/report/jeo` | `<!report:jeo!>` | Property collection |
| `/root/report/jeo/@instance` | `<![report:jeo:instance]!>` | String |
| `/root/report/jeo/@type` | `<![report:jeo:type]!>` | String |
| `/root/report/jeo/column` | `<!report:jeo:column!>` | Property collection |
| `/root/report/jeo/column/@heading` | `<![report:jeo:column:heading]!>` | String |

## Code Merge System

GenerateReport uses JAC's merge system to preserve custom code when regenerating files.

### Merge Markers

```java
setContext(iScript.getMasterScript());
<!$jac:merge:sectionMarker!>!reset("//$Section=");
<!$jac:merge:preserveMarker!>!reset("$Preserve=yes");
<!$jac:merge:noPreserveMarker!>!reset("$Preserve=no");
<!$jac:merge:keepPreserveMarker!>!reset("$Preserve=keep");
<!$jac:merge:discardPreserveMarker!>!reset("$Preserve=discard");
<!$jac:merge:preservePreamble!>!reset("no");
<!$jac:merge:comments!>!reset("//");
<!$jac:merge:excludeCompare!>!reset("//  Generated at");
<!$jac:merge:trimOutput!>!reset("yes");
<!$jac:merge:keepSections!>!reset("no");
restoreContext();
```

### Generated Code Sections

```java
//$Section=Deleted$Preserve=yes
//----------------------------------------------------------------------------
// This section contains orphaned code from deleted operations.
//----------------------------------------------------------------------------
// Custom code here is preserved across regeneration
//$Section=Deleted$Preserve=no
```

### Merge Process

1. Generate new file as `.new` extension
2. Call `Merge.getInstance().doMerge()`:
   - Compare existing `.script` file with `.new` file
   - Preserve sections marked `$Preserve=yes`
   - Replace sections marked `$Preserve=no`
   - Write merged result to `.script` file

## Example

### Input XML
File: `app/com/esarks/examples/generateReport/ChoreCompletion_Report.xml`

```xml
<PENDINGxml version="1.0" encoding="UTF-8"PENDING>
<root>
  <report name="com.esarks.examples.ChoreCompletionReport"
          inJeo="com.esarks.arm.model.jeo.service">
    <jeo instance="com.esarks.examples.ChoreCompletionDetailJeo" type="detail">
      <column heading="Child Name" width="20" attribute="childName"/>
      <column heading="Chore" width="25" attribute="choreTitle"/>
      <column heading="Points" width="8" attribute="points"/>
    </jeo>
  </report>
</root>
```

### Expected Output

**ChoreCompletionReport.script** (Expected location: `app/com/esarks/examples/ChoreCompletionReport.script`)
- Report class with rendering methods
- Column formatters
- JEO integration

**ChoreCompletionReport.xml** (Expected location: `app/com/esarks/examples/ChoreCompletionReport.xml`)
- MIC component metadata

**ChoreCompletionReport.new** (Expected location: `app/com/esarks/examples/ChoreCompletionReport.new`)
- Report template structure

## Known Issues

### No Output Files Created

**Status**: RESOLVED (October 30, 2025)

**Symptom**: GenerateReport reported "Success: Method executed" but the method body never actually executed, resulting in no output files being created.

**Root Causes Discovered**:

1. **Boolean Argument Type Mismatch** (Primary Bug)
   - **Location**: `jacBuild24/source/scripts/com/esarks/jac/make/MakeAll.script:422`
   - **Problem**: MakeAll was passing the `argument2` XML attribute value as a String directly to `execMethod()`:
     ```java
     Object[] lArgs = new Object[] {<![make:script:argument]!>, <![make:script:argument2]!>};
     ```
     This created an argument array of `[String, String]` but GenerateReport's signature is:
     ```java
     public void generateReport(String aXmlDefinition, Boolean aForce)
     ```
   - **Impact**: Java reflection's `execMethod()` couldn't find a matching method signature for `generateReport(String, String)`, so it returned silently without invoking the method
   - **Fix**: Convert the String to Boolean using `Boolean.valueOf()`:
     ```java
     Object[] lArgs = new Object[] {<![make:script:argument]!>, Boolean.valueOf(<![make:script:argument2]!>)};
     ```

2. **Schema File Naming Convention Mismatch** (Secondary Bug)
   - **Location**: Schema loading in `GenerateReport.script:17`
   - **Problem**: The `loadXmlSchema()` method derives the schema filename from the last segment of the namespace parameter. When called with namespace `"com.esarks.arm.schemas.report"`, it looks for `report.xml`, but the actual file is named `ReportSchema.xml`
   - **Impact**: Schema failed to load with `FileNotFoundException`, preventing XML parsing from recognizing `<report>` elements
   - **Fix**: Copy `ReportSchema.xml` to `report.xml` in both locations:
     - `app/com/esarks/arm/schemas/report.xml`
     - `jacBuild24/source/scripts/com/esarks/arm/schemas/report.xml`
   - **Note**: Other generators (GenerateDdl, GenerateJeo) follow the same naming convention:
     - Namespace: `com.esarks.arm.schemas.ddl` → File: `DdlSchema.xml` (but also expects `ddl.xml`)
     - This naming mismatch affects all schema-based generators

**Resolution Steps**:
1. Fixed Boolean type conversion in MakeAll.script
2. Created `report.xml` copies from `ReportSchema.xml` in required locations
3. Added debug statements to trace execution flow
4. Verified GenerateReport now executes and generates output files

**Files Modified**:
- `jacBuild24/source/scripts/com/esarks/jac/make/MakeAll.script` (line 422)
- Created: `app/com/esarks/arm/schemas/report.xml`
- Created: `jacBuild24/source/scripts/com/esarks/arm/schemas/report.xml`

**Verification**:
After fixes, GenerateReport:
- PASS Method body executes (confirmed by debug output)
- PASS Schema loads successfully
- PASS XML parses with schema validation
- PASS Report elements are recognized
- PASS Output files are generated

### Empty Rendering Methods

**Status**: Documented in MakeAllPlan.md

**Issue**: Generated report scripts contain empty rendering method bodies.

**Impact**: Reports can be compiled but won't display data correctly.

**Workaround**: Manually implement rendering methods in generated scripts.

## Related Components

- **GenerateReportPro** - Enhanced version with dual XML/JSON format support (planned)
- **GenerateDdl** - Generates database DDL from XML definitions
- **GenerateJeo** - Generates Java Entity Objects
- **GenerateFrame** - Generates UI frames
- **MakeAll** - Orchestrates all generators

## Dependencies

- **JAC Framework** - Core script processing engine
- **ScriptWriter** - Template transformation engine
- **ParseXml** - XML parsing and schema validation
- **Xerces** - XML library

## Build Integration

GenerateReport is compiled as part of the JAC framework build:

1. **Phase 1**: Compile ScriptWriter and core JAC classes
2. **Phase 2**: Generate and compile GenerateReport.java from GenerateReport.script
3. **Phase 3**: Package into jac.jar

**Build Command**: `allPhases.bat` in `jacBuild24/bin/`

## File Locations Summary

| File Type | Path | Description |
|-----------|------|-------------|
| Generator Source | `jacBuild24/source/scripts/com/esarks/jac/generators/GenerateReport.script` | Template source |
| Compiled Java | `jacBuild24/classes/com/esarks/jac/generators/GenerateReport.java` | Generated Java |
| Compiled Class | `jacBuild24/classes/com/esarks/jac/generators/GenerateReport.class` | Compiled bytecode |
| Input XML | `app/com/esarks/examples/generateReport/*.xml` | Report definitions |
| Output Scripts | `app/com/esarks/examples/*.script` | Generated reports |

## Implementation Patterns

### Dynamic Variable Names

GenerateReport uses dynamic string concatenation to build property paths for nested iteration:

```java
String lJeoName = "report";              // Start at root
String lX = "";                          // Nesting level indicator
int lXCount = 0;                         // Nesting depth counter

// First iteration
<!" + lJeoName + ":jeo!>!resetIterator();  // Expands to: <!report:jeo!>!resetIterator()

// Descend into nested JEO
lJeoName += ":jeo";                      // Now "report:jeo"
lX += "x";                               // Now "x"
lXCount++;                               // Now 1

// Second iteration
<!" + lJeoName + ":jeo!>!resetIterator();  // Expands to: <!report:jeo:jeo!>!resetIterator()
```

### Capitalization Transform

Generate method names from attribute names:

```java
<![cap@[report:jeo:column:attribute]]!>    // Capitalizes first letter
// Example: "childName" becomes "ChildName"
// Used in: lJeo.getChildNamePropertyValue()
```

### Path Resolution

The `path()` function resolves file paths relative to JAC's base directories:

```java
path("com.esarks.examples.ChoreCompletionReport")
// Returns: C:\...\app\com\esarks\examples\ChoreCompletionReport

path(aXmlDefinition) + ".xml"
// Returns: C:\...\app\com\esarks\examples\generateReport\ChoreCompletion_Report.xml
```

### File Output Management

```java
// Open primary output file
String lNewPath = path(<![report:name]!>) + ".new";
openOutput(lNewPath);

%>
  // Generated code written to .new file
<%

closeOutput();

// Apply merge to create final .script file
Merge.getInstance().doMerge(
    path(<![report:name]!>) + ".script",    // Destination
    lNewPath,                                // Source (.new)
    iScript.getMasterScript()                // Merge context
);
```

## Troubleshooting Guide

### Schema Not Loading

**Symptom**: `FileNotFoundException: .../report.xml`

**Cause**: `loadXmlSchema()` derives filename from namespace last segment, expects `report.xml` not `ReportSchema.xml`

**Solution**:
```bash
# Copy schema to expected name
cp ReportSchema.xml report.xml
```

**Locations to check**:
- `app/com/esarks/arm/schemas/report.xml`
- `jacBuild24/source/scripts/com/esarks/arm/schemas/report.xml`

### Method Not Executing

**Symptom**: "Success: Method executed" but method body doesn't run

**Cause**: Argument type mismatch in reflection call

**Debug**:
```java
// Add before execMethod() call
%>DEBUG: Argument[0]: <!%lArgs[0]!> (class: <!%lArgs[0].getClass().getName()!>)
DEBUG: Argument[1]: <!%lArgs[1]!> (class: <!%lArgs[1].getClass().getName()!>)<%

// Expected for GenerateReport:
// Argument[0]: com.esarks.examples.generateReport.ChoreCompletion_Report (class: java.lang.String)
// Argument[1]: true (class: java.lang.Boolean)  <-- Must be Boolean, not String
```

**Solution**: Use `Boolean.valueOf()` for boolean arguments

### Report Size Returns 0

**Symptom**: `<!report!>!size()` returns 0 after parsing XML

**Possible Causes**:
1. Schema not loaded - check `loadXmlSchema()` call
2. Wrong parsing method - use `parseXmlPath()` not `parseXmlSchema()`
3. XML doesn't match schema - verify `<root><report>` structure
4. Schema namespace mismatch - verify namespace matches loaded schema

**Debug**:
```java
%>DEBUG: Schema check = <!%lXmlSchemaFactory.getXmlSchemaElement("com.esarks.arm.schemas.report.root")!>
DEBUG: XML path = <!%lInputXmlPath!><%
parseXmlPath(lInputXmlPath);
int lReportSize = <!report!>!size();
%>DEBUG: Report size = <!%lReportSize!><%
```

### Files Not Generated

**Symptom**: No output files created

**Check**:
1. Staleness - force=true bypasses timestamp check
2. Report exists - `<!report!>!size() > 0`
3. Output directory exists - check `path()` resolution
4. Permissions - verify write access to output directory

## Advanced Topics

### Multi-Document HTML Generation

GenerateReport creates documentation pages using multiple output buffers:

```java
iOutputManager.setDocument("createHtml");
%><html><table>...<%
iOutputManager.setDocument("");

// Later, retrieve and write
StringBuffer lHtml = iOutputManager.getDocument("createHtml");
openOutput(path(aXmlDefinition) + ".html");
%><!%lHtml.toString()!><%
closeOutput();
```

### Nested JEO Iteration

Handle arbitrary nesting depth:

```java
while(<!" + lJeoName + ":jeo!>!size() > 0) {
    // Process current level
    if (<!" + lJeoName + ":jeo:jeo!>!size() > 0) {
        // Descend
        lJeoName += ":jeo";
        lX += "x";
        lIndent += "  ";
    } else {
        // Ascend
        lJeoName = lJeoName.substring(0, lJeoName.length() - 4);
        lX = lX.substring(0, lX.length() - 1);
        lIndent = lIndent.substring(0, lIndent.length() - 2);
    }
}
```

### Column Sorting Generation

Generates sort code based on column attributes:

```java
<!" + lJeoName + ":jeo:column!>& {
    if (<!" + lJeoName + ":jeo:column:sort!>!size() > 0) {
        // Create sort field entry
        <!$mic:sortfields!>!set(<![" + lJeoName + ":jeo:column:attribute]!>);
        <!$mic:sortfields:order!>!set(<![" + lJeoName + ":jeo:column:sort:ascending]!>);
        <!$mic:sortfields:importance!>!set(<![" + lJeoName + ":jeo:column:sort]!>);
        <!$mic:sortfields:type!>!set(<![" + lJeoName + ":jeo:column:sort:type]!>);
    }
}
```

## Version History

- **2025-10-30**:
  - RESOLVED: Fixed Boolean argument type mismatch bug
  - RESOLVED: Fixed schema file naming convention issue
  - Added comprehensive JAC syntax reference
  - Added implementation patterns and troubleshooting guide
  - Enhanced documentation for implementation guidance
- **2025-10-27**: Updated ChoreCompletion_Report.xml with simplified structure
- **2025-10-26**: Initial AllowanceAlley report examples created
- **Earlier**: Basic GenerateReport implementation

## Planned Enhancements

### Auto-Generate .jrun and .json Files (Planned)

**Status**: Design Phase

**Problem**:
Currently, GenerateReport creates the report `.script` files, but additional artifacts must be manually created to make the reports immediately executable:
- `.jrun` files - Required to execute the report via JrunDirect.bat
- `.json` files - MIC metadata required for component registration

Additionally, running `allPhases.bat` won't compile report scripts because they reside in `app/` directories, not in `jacBuild24/`.

**Proposed Solution**:
Enhance GenerateReport to automatically create complete, executable report packages by generating:

1. **[ReportName].script** - Main report implementation (current)
2. **[ReportName].jrun** - Execution descriptor (new)
3. **[ReportName].json** - MIC metadata (new)
4. **[ReportName].xml** - Component metadata (current)

**Benefits**:
- Reports are immediately executable after generation
- Consistent .jrun structure across all generated reports
- Complete MIC metadata for proper component registration
- Reduced manual configuration
- Better developer experience - "generate and run"
- Follows JAC pattern (.script + .json pairs)

### Implementation Plan

#### Phase 1: .jrun File Generation

**Location**: `GenerateReport.script` around line 70 (after .new file generation)

**Approach**:
1. After generating the report `.new` file, create corresponding `.jrun` file
2. Use the report name from `<![report:name]!>` to build the .jrun content
3. Standard pattern: call the `render` method with default parameters

**Code Addition**:
```java
// After generating .new file and before merge
String lJrunPath = path(<![report:name]!>) + ".jrun";
openOutput(lJrunPath);
%><PENDINGxml version="1.0" encoding="UTF-8"PENDING>
<jacrun script="<![report:name]!>" method="render" /><%
closeOutput();
```

**Generated .jrun Example**:
```xml
<PENDINGxml version="1.0" encoding="UTF-8"PENDING>
<jacrun script="com.esarks.examples.generateReport.FamiliesReport" method="render" />
```

**Alternative - With Arguments**:
If reports need standard arguments (output path, format, etc.):
```xml
<jacrun script="<![report:name]!>"
        method="render"
        argument="./output/<![report:name]!>.html"
        argument2="html" />
```

#### Phase 2: .json File Generation

**Purpose**: Provide MIC (Micro Information Component) metadata for the generated report

**Approach**:
1. Generate a JSON file with MIC metadata identifying the component type
2. This follows the JAC pattern where each .script file has a corresponding .json metadata file
3. Reports are type "Component" in the MIC framework

**Code Addition**:
```java
// After .jrun generation
String lJsonPath = path(<![report:name]!>) + ".json";
openOutput(lJsonPath);
%>{
  "mic.element": {
    "type": "Component",
    "title": ""
  }
}<%
closeOutput();
```

**Generated .json Example**:
```json
{
  "mic.element": {
    "type": "Component",
    "title": ""
  }
}
```

**Note**: This is MIC metadata, not sample data. The XML report definition (`*_Report.xml`) already contains the report structure and column definitions.

#### Phase 3: Enhanced Render Method

**Purpose**: Support execution via .jrun without parameters

**Approach**:
Modify the generated `render` method to have default behavior when called without parameters:

**Current Signature**:
```java
public void render(String outputPath, service jeoData)
```

**Enhanced Signature**:
```java
public void render() {
    // Default: generate report with sample data or from database
    String defaultPath = "./output/" + this.getClass().getSimpleName() + ".html";
    service defaultData = loadSampleData();  // Or query database
    render(defaultPath, defaultData);
}

public void render(String outputPath, service jeoData) {
    // Existing implementation
}
```

#### Phase 4: Integration with MakeAll

**Purpose**: Track generated artifacts

**Approach**:
Update MakeAll logging to report all generated files:

```java
System.out.println("Generated files for " + <![report:name]!> + ":");
System.out.println("  - " + <![report:name]!> + ".script");
System.out.println("  - " + <![report:name]!> + ".jrun");
System.out.println("  - " + <![report:name]!> + ".json");
System.out.println("  - " + <![report:name]!> + ".xml");
```

### Testing Strategy

1. **Unit Test**: Run GenerateReport on sample report XML
2. **Verify Outputs**: Confirm all 4 files are created (.script, .jrun, .json, .xml)
3. **Execute .jrun**: Test that generated .jrun file successfully executes the report
4. **Validate JSON**: Verify JSON structure matches report schema
5. **Integration Test**: Run MakeAll and verify all reports generate complete artifacts

### Migration Path

**For Existing Reports**:
1. Re-run GenerateReport with force=true to regenerate with new artifacts
2. Verify .jrun files execute correctly
3. Update any custom .jrun files if needed (merge system preserves customizations)

**For New Reports**:
1. Create report XML definition
2. Run GenerateReport (or via MakeAll)
3. Generated report is immediately executable via .jrun

### File Location Strategy

All generated files for a report should be colocated in the same directory:

```
app/com/esarks/examples/generateReport/
├── Families_Report.xml          (input definition)
├── FamiliesReport.script        (generated - main implementation)
├── FamiliesReport.new           (generated - template)
├── FamiliesReport.jrun          (generated - execution descriptor)
├── FamiliesReport.json          (generated - MIC metadata)
└── FamiliesReport.xml           (generated - component metadata)
```

### Implementation Priority

1. **High Priority**: .jrun file generation
   - Immediately makes reports executable
   - Simple implementation
   - High value for developer workflow

2. **High Priority**: .json file generation
   - Required MIC metadata for component registration
   - Simple implementation (standard boilerplate)
   - Follows JAC pattern (.script + .json pair)

3. **Low Priority**: Enhanced render method
   - Nice-to-have default behavior
   - Can be added incrementally
   - Reports can be executed via test scripts

### Open Questions

1. **Parameter Structure**: Should .jrun files include arguments for output path and format, or call a parameterless render() method?
2. **Merge Behavior**: Should .jrun and .json files be regenerated each time or preserved?
   - Likely: Always regenerate (they're boilerplate, not customizable)
3. **Compilation**: Should reports be compiled as part of the generation process?
   - Current: Reports in `app/` are not compiled by `allPhases.bat`
   - Option: Integrate compilation into MakeAll
4. **Title Field**: Should the .json "title" field be populated with a human-readable report name?

### Notes

- Reports generated in `app/` directories are not compiled by `allPhases.bat` (which only compiles `jacBuild24/`)
- To compile generated reports, need separate compilation step or integration into MakeAll
- .jrun files enable immediate testing without manual configuration
- .json files provide MIC metadata for component registration and type identification

## See Also

- [MakeAllPlan.md](./MakeAllPlan.md) - MakeAll build system documentation
- [GenerateReportPro.md](./GenerateReportPro.md) - Enhanced report generator
- [ScriptWriter.md](./ScriptWriter.md) - JAC template engine
- [ReportSchema.xml](../jac2024/app/com/esarks/arm/schemas/ReportSchema.xml) - Report XML schema definition
