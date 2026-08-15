---
title: "GenerateReportOutline"
---

# GenerateReport.script Function Outline

## Overview

GenerateReport.script is the legacy report generator for JAC. It creates report rendering scripts from XML definitions, generating code that transforms JEO (Java Entity Object) collections into HTML and XML output formats. The generator supports nested data structures, column formatting, sorting, and hierarchical display.

**File Location**: `jac2024/jacBuild24/source/scripts/com/esarks/jac/generators/GenerateReport.script`

**Total Lines**: 993

---

## Function Inventory

### 1. generateReport(String aXmlDefinition, Boolean aForce)
**Lines**: 4-992
**Visibility**: public
**Return Type**: void

#### Purpose
Main orchestration function that coordinates the entire report generation process. This is the entry point called by the build system or standalone invocation.

#### Key Responsibilities

##### Input Validation & XML Parsing (Lines 4-20)
- Resets exit state
- Logs the generation target
- Parses XML definition file at specified path
- Validates that `<report>` tag exists in XML
- Sets fatal error event and exits if no report definition found

##### Staleness Check (Lines 22-39)
- Implements intelligent regeneration logic
- Compares file timestamps: XML definition, generator script, and output script
- Bypasses generation if output is up-to-date (unless `aForce=true`)
- Logs info event when generation is bypassed

##### Merge Configuration Setup (Lines 41-52)
- Sets merge markers for code preservation during regeneration:
  - `$Section=` - Section boundary marker
  - `$Preserve=yes/no/keep/discard` - Preservation directives
- Configures comment style (`//`)
- Sets exclusion patterns for timestamp lines
- Enables output trimming

##### MIC Metadata Generation (Lines 57-63)
- Creates `.xml` metadata file for MIC (Managed Information Components) system
- Basic component registration with type "Report"

##### Main Script Generation (Lines 65-797)
- Opens `.new` file for output
- Writes script context declaration
- Generates timestamp comment header
- Creates three main rendering functions:
  - `render()` methods (overloaded)
  - `renderHtml()` method
  - `renderXml()` method
  - `renderFromXml()` method
- Includes code preservation sections

##### HTML Documentation Generation (Lines 800-809)
- Retrieves accumulated HTML documentation from output manager
- Creates `.html` specification file showing:
  - Report structure visualization
  - Column definitions with headings and widths
  - Tag definitions with defaults
  - Sort specifications
  - Sample data layouts

##### Test Data Generation (Lines 811-864)
- Creates `_Test.xml` file with sample XML structure
- Generates skeleton data matching report schema
- Includes attribute placeholders for each column

##### JRUN File Generation (Lines 866-870)
- Creates `.jrun` execution file
- Simple wrapper: `<jacrun script="[name]" method="execute" />`

##### Controller Generation (Lines 872-963)
- Creates `Controller.new` stub file
- Generates service integration template
- Includes methods for:
  - `execute()` - Main controller entry point
  - `performService()` - Service layer integration
  - `create{Type}()` - JEO factory methods
- Contains placeholder tokens (e.g., `!!com...!!`) for manual completion

##### Controller Metadata Generation (Lines 965-979)
- Creates `Controller.xml` MIC metadata file

##### Merge Execution (Line 798)
- Executes guided merge: `.new` → `.script`
- Preserves custom code sections marked with `$Preserve=yes`

##### Error Handling (Lines 981-990)
- Wraps entire process in try-catch
- Sets fatal error event on exception
- Logs error to master script context

---

### 2. render(String aOutput, String aStereotype, JeoType aJeo)
**Lines**: 77-80
**Visibility**: public
**Return Type**: void

#### Purpose
Overloaded render method that accepts a stereotype parameter (unused in current implementation).

#### Parameters
- `aOutput` - Output file path (without extension)
- `aStereotype` - Stereotype identifier (reserved for future use)
- `aJeo` - Root JEO object containing report data

#### Implementation
Delegates to both rendering engines:
1. `renderHtml(aOutput, aJeo)` - Generates HTML report
2. `renderXml(aOutput, aJeo)` - Generates XML report

---

### 3. render(String aOutput, JeoType aJeo)
**Lines**: 82-85
**Visibility**: public
**Return Type**: void

#### Purpose
Primary render method for generating both HTML and XML output from JEO data.

#### Parameters
- `aOutput` - Output file path (without extension)
- `aJeo` - Root JEO object containing report data

#### Implementation
Identical to overloaded version - delegates to:
1. `renderHtml(aOutput, aJeo)` - Generates HTML report
2. `renderXml(aOutput, aJeo)` - Generates XML report

---

### 4. renderHtml(String aOutput, JeoType aJeo)
**Lines**: 87-419
**Visibility**: public
**Return Type**: void

#### Purpose
Generates HTML table-based report output from hierarchical JEO data structures. This is the workhorse function for visual report rendering.

#### Key Operations

##### Initialization (Lines 87-99)
- Opens `.html` output file
- Assigns JEO parameter to local variable
- Initializes control variables:
  - `lStart = "%>"` - Template code block start marker
  - `lStop = "<%"` - Template code block stop marker
  - `lVarStart = "<!"` - Variable substitution start
  - `lVarEnd = "!>"` - Variable substitution end
  - `lJeoName = "report"` - Root JEO iterator name
  - `lX = ""` - Nesting level indicator (accumulates 'x' per level)
  - `lXCount = 0` - Nesting depth counter
  - `lIndent = "  "` - Current indentation level

##### Documentation Table Generation (Lines 101-108)
- Switches to "createHtml" document buffer
- Generates HTML specification table showing:
  - Specification File Name
  - Report Name
  - Incoming JEO Type
- Returns to main document buffer

##### XML Re-parsing (Line 110)
- Re-parses XML definition to refresh property tree

##### Column Counter Initialization (Lines 113-114)
- Declares `lNbrColumns_` variable for tracking column counts

##### Main JEO Iterator Loop (Lines 120-403)
- Resets iterator on report's JEO collection
- Processes each nested JEO level

**Per-JEO Processing**:

###### JEO Header Documentation (Lines 126-138)
- Adds comment header identifying JEO type
- Creates documentation table showing:
  - JEO instance name
  - JEO type name
- Uses nested document buffers for complex layouts

###### ArrayList Retrieval Code Generation (Lines 140-161)
- Generates code to extract JEO collection from parent:
  - By type name if type specified: `getJeoByTypeName()`
  - By instance name otherwise: `getJeoByInstanceName()`
- Declares ArrayList variable on first occurrence
- Handles nested levels with variable name suffixes (`lArrayListx`, `lArrayListxx`, etc.)

###### Sort Field Processing (Lines 163-215)
- Scans columns for sort specifications
- Builds `$mic:sortfields` property collection
- Generates sorting code:
  - Creates sort keys by type (string, date, int)
  - Pads sort keys for proper collation
  - Handles ascending/descending order
  - Calls `Jeo.sort()` method

###### Loop Variable Setup (Lines 217-224)
- Declares heading print flag: `lPrintHeading{level}x_{type}`
- Declares column count: `lNbrColumns{level}x_{type}`
- Declares table end marker: `lTableEnd{level}x_{type}`
- Generates for-loop over ArrayList

###### Column Heading Generation (Lines 226-336)
- Checks if heading should be printed (first iteration only)
- Generates HTML table structure:
  - `<table>` with border and spacing
  - `<tr>` for heading row
  - `<td>` for each column with specified width
- Outputs column headings from XML definition

**Column Documentation (Lines 237-277)**:
- Creates specification table in documentation buffer showing:
  - Attribute name
  - Heading text
  - Column width
  - Tag definitions (if any)
  - Sort specifications (if any)

**Sample Data Row (Lines 279-318)**:
- Generates example data row in documentation buffer
- Uses type defaults from tag definitions:
  - "Abcdefgh" for string types
  - "01/01/2005" for date types
  - "12345" for int types
  - "PENDINGPENDINGPENDING" for unknown types

###### Data Row Generation (Lines 337-354)
- Generates `<tr>` tag for each data row
- Iterates through columns:
  - **Attribute columns**: Calls getter method `getXxxPropertyValue().toString()`
  - **Property columns**: Calls `getPropertyValue("name").toString()`
- Generates `<td>` tags with data values

###### Recursive Nesting Handling (Lines 361-401)
- Checks if current JEO has nested child JEOs
- If yes:
  - Appends ":jeo" to JEO name
  - Appends "x" to variable suffix
  - Increases indentation
  - Continues recursion
- If no (leaf node):
  - Generates loop closing braces
  - Outputs table end markers
  - Unwinds nesting by removing ":jeo", "x", and indentation
  - Continues until all levels closed

##### Documentation Finalization (Lines 407-415)
- Closes documentation tables in both buffers
- Closes main HTML output file

---

### 5. renderXml(String aOutput, JeoType aJeo)
**Lines**: 426-713
**Visibility**: public
**Return Type**: void

#### Purpose
Generates XML-formatted report output from JEO data structures. Creates structured XML with custom element names based on column attributes.

#### Key Operations

##### Initialization (Lines 426-438)
- Opens `.xml` output file
- Assigns JEO parameter to local variable
- Initializes control variables (same as renderHtml)

##### XML Root Element (Lines 440-442)
- Generates opening `<report name="...">` tag
- Initializes column counter

##### Main JEO Iterator Loop (Lines 449-703)
- Resets iterator on report's JEO collection
- Processes each nested JEO level
- Similar structure to renderHtml but generates XML instead of HTML

**Per-JEO Processing**:

###### JEO Header Comment (Lines 455-458)
- Adds comment identifying JEO type

###### ArrayList Retrieval Code Generation (Lines 460-481)
- Identical to renderHtml
- Generates `getJeoByTypeName()` or `getJeoByInstanceName()` calls

###### Sort Field Processing (Lines 483-535)
- Identical sorting logic to renderHtml
- Builds sort keys and calls `Jeo.sort()`

###### Loop Variable Setup (Lines 537-543)
- Same variable declarations as renderHtml
- Generates for-loop over ArrayList

###### XML Header Generation (Lines 547-574)
- Generates XML table header (first iteration only):
  ```xml
  <table>
    <header>
      <column attribute="..." width="...">Heading</column>
      ...
    </header>
  ```

###### Row Attribute Building (Lines 575-597)
- Processes JEO-level tags (row attributes)
- Builds attribute string: `attribute="value" `
- Checks PropertyValue type to avoid null attributes
- Handles default values if specified

##### Row Element Generation (Lines 598-653)
- Generates `<row attribute="value">` opening tag

**Column Processing**:

###### Column Tag Processing (Lines 604-626)
- Iterates through column-level tags
- Builds attribute list for each column element
- Applies defaults for null properties

###### Column Element Generation (Lines 628-646)
- **Attribute columns**:
  ```xml
  <ColumnName attribute="value">data_value</ColumnName>
  ```
- **Property columns**:
  ```xml
  <PropertyName attribute="value">property_value</PropertyName>
  ```
- Uses element name from column attribute/property name

##### Row Closing (Line 650-652)
- Generates `</row>` closing tag

##### Recursive Nesting Handling (Lines 661-701)
- Identical nesting logic to renderHtml
- Manages recursion into child JEOs
- Unwinds nesting levels when complete

##### XML Root Closing (Lines 708-712)
- Generates `</report>` closing tag
- Closes output file

---

### 6. renderFromXml(String aXmlFile)
**Lines**: 722-781
**Visibility**: public
**Return Type**: void

#### Purpose
Reverse operation - reads XML report output and reconstructs JEO data structure, then renders it. Used for XML-to-HTML transformation or report regeneration.

#### Key Operations

##### XML Parsing & JEO Initialization (Lines 723-735)
- Parses XML file at specified path
- Creates new root JEO instance of specified type
- Initializes control variables

##### JEO Reconstruction Loop (Lines 737-777)
- Iterates through nested `<jeo>` elements in XML
- For each JEO element:

  ###### JEO Instance Creation (Lines 740-755)
  - Generates code to create new JEO instance
  - If type specified: `new JeoType("typeName")`
  - If no type: `new JeoType()`
  - Adds JEO to parent with `addJeo()`

  ###### Attribute Population (Lines 756-763)
  - Scans XML for `<attribute name="..." value="..."/>` elements
  - Generates setter calls: `setXxx(value)`
  - Matches attribute names to JEO fields

  ###### Nesting Management (Lines 765-777)
  - Increases nesting level: append ":jeo" and "x"
  - Increases indentation
  - Generates closing braces when unwinding

##### Render Invocation (Line 780)
- Calls `render(aXmlFile, lJeo)` with reconstructed JEO
- Delegates to renderHtml and renderXml

---

## Code Generation Architecture

### Template Syntax
GenerateReport uses a custom template language that mixes Java code with JAC-specific markup:

- **`<%...%>`**: JAC code blocks (generator-time execution)
- **`%>...<%`**: Generated code output
- **`<!...!>`**: Property references (XML path navigation)
- **`<!%...!>`**: Variable interpolation in generated code

### Output Manager Pattern
Uses multi-buffer output system:
- **Main document**: Generated script code
- **"createHtml" buffer**: HTML documentation table
- **"createHtml2" buffer**: HTML sample data table

Buffers are switched with `iOutputManager.setDocument()` and retrieved for final assembly.

### Nesting Variable Convention
Generates unique variable names for each nesting level:
- Level 0: `lArrayListx`, `lJeox`, `lIdxx`
- Level 1: `lArrayListxx`, `lJeoxx`, `lIdxxx`
- Level 2: `lArrayListxxx`, `lJeoxxx`, `lIdxxxx`

Suffix accumulates 'x' characters to avoid naming conflicts in nested loops.

### Sort Key Generation
Sorting requires string collation keys:
- **String**: Append formatted index: `value + "00000000000"`
- **Date**: Reorder to YYYYMMDD format + index
- **Int**: Left-pad with zeros + index

This ensures stable sort order with original sequence as tiebreaker.

---

## Generated Artifacts

### 1. {ReportName}.script
Main report script with three rendering methods. Generated code includes:
- JEO traversal loops
- HTML table generation
- XML element generation
- Sort logic
- Column formatting

### 2. {ReportName}.html
Documentation file showing:
- Report metadata (name, input JEO type, source file)
- Column specifications (attribute, heading, width)
- Tag definitions
- Sort specifications
- Sample data layout

### 3. {ReportName}_Test.xml
Sample XML structure with:
- JEO hierarchy skeleton
- Attribute placeholders
- Proper nesting structure

### 4. {ReportName}.jrun
Execution wrapper for command-line invocation

### 5. {ReportName}Controller.new
Service integration stub with:
- Service call template
- JEO factory methods
- Execute method skeleton

### 6. {ReportName}.xml
MIC metadata for build system integration

### 7. {ReportName}Controller.xml
MIC metadata for controller component

---

## Key Design Patterns

### 1. Multi-Pass Generation
- Pass 1: Parse XML and build property tree
- Pass 2: Generate script code with embedded loops
- Pass 3: Generate HTML documentation
- Pass 4: Generate test data
- Pass 5: Generate controller stub

### 2. Recursive Descent Processing
Both renderHtml and renderXml use recursive descent to handle arbitrary nesting:
- Track nesting level with variable suffixes
- Accumulate indentation
- Generate opening/closing code symmetrically

### 3. Lazy Heading Print
Headers generated only on first data row:
```java
boolean lPrintHeading{level}x_{type} = true;
if (lPrintHeading{level}x_{type}) {
  lPrintHeading{level}x_{type} = false;
  // Generate header
}
```

This avoids empty tables when no data exists.

### 4. Property-Driven Configuration
Uses JAC property system for all metadata:
- Column definitions: `report:jeo:column:attribute`
- Sort specs: `report:jeo:column:sort:type`
- Tag defaults: `report:jeo:column:tag:default`

Properties accessed via iterator pattern:
```
<!report:jeo:column!>& {
  // Process each column
}
```

### 5. Code Preservation
Generated scripts include section markers:
```java
//$Section=Deleted$Preserve=yes
// Custom code here
//$Section=Deleted$Preserve=no
```

Merge utility preserves code between markers during regeneration.

---

## Comparison to GenerateReportPro

GenerateReport (legacy) vs GenerateReportPro (modern):

| Feature | GenerateReport | GenerateReportPro |
|---------|----------------|-------------------|
| **Output Formats** | HTML, XML | HTML, JSON, XML, CSV, Excel |
| **Architecture** | Monolithic script | MVC (Controller/Model/Formatter) |
| **Data Source** | JEO collections | Map collections |
| **Nested Data** | Full recursion support | Limited nesting |
| **Sorting** | Manual sort key generation | Built-in comparators |
| **Parameters** | None | Query parameter support |
| **Aggregation** | None | SUM, AVG, COUNT, MIN, MAX |
| **Grouping** | None | Multi-level grouping |
| **Pagination** | None | Built-in pagination |
| **Caching** | None | Result caching |

GenerateReport remains in use for:
- Legacy reports with deep nesting
- Reports requiring custom JEO traversal
- Situations where full control over HTML structure is needed

GenerateReportPro is preferred for:
- New development
- REST API endpoints
- Modern web applications
- Reports requiring aggregation/grouping
- Multi-format output requirements

---

## Dependencies

### Required Components
- **ParseXml**: XML definition parsing
- **Merge**: Code preservation during regeneration
- **OutputManager**: Multi-buffer output management
- **Jeo**: Base class for data objects
- **PropertyValue**: Property system implementation
- **ScriptWriter**: Template processing

### Generated Code Dependencies
- **com.esarks.arm.jeo.Jeo**: Base JEO class
- **java.util.ArrayList**: Collection support
- **java.text.DecimalFormat**: Sort key formatting

---

## File Location Reference

- **Generator**: `jac2024/jacBuild24/source/scripts/com/esarks/jac/generators/GenerateReport.script`
- **Examples**: `jac2024/app/com/esarks/examples/generateReport/*.xml`
- **Generated Output**: Same directory as XML definition
- **Documentation**: `ArchitectsCompanion.wiki/GenerateReport.md`

---

## Function Call Graph

```
generateReport()
├── parseXmlPath() [multiple calls]
├── openOutput() [multiple calls]
├── Merge.getInstance().doMerge()
├── iOutputManager.setDocument()
├── iOutputManager.getDocument()
└── closeOutput() [multiple calls]

render()
├── renderHtml()
└── renderXml()

renderHtml()
├── openOutput()
├── parseXmlPath()
├── iOutputManager.setDocument()
└── closeOutput()

renderXml()
├── openOutput()
└── closeOutput()

renderFromXml()
├── parseXmlPath()
└── render()
```

---

## Summary

GenerateReport.script is a sophisticated code generator that creates report rendering scripts from XML definitions. It handles hierarchical data structures, multiple output formats, sorting, and custom column formatting. While superseded by GenerateReportPro for most use cases, it remains valuable for legacy reports and situations requiring deep JEO nesting or custom traversal logic.

The generator's 993-line implementation demonstrates advanced metaprogramming techniques including multi-pass generation, recursive descent processing, template-based code synthesis, and intelligent code preservation during regeneration.
