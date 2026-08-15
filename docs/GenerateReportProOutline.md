---
title: "GenerateReportProOutline"
---

# GenerateReportPro.script Function Outline

## Overview

GenerateReportPro.script is the modern Map-based report generator for JAC. It creates report rendering scripts from XML definitions, generating code that transforms `ArrayList<Map<String,Object>>` collections into HTML, XML, and JSON output formats. Unlike GenerateReport which uses JEO objects, GenerateReportPro works with generic Map-based data structures, making it more flexible for modern web applications and REST APIs.

**File Location**: `jac2024/jacBuild24/source/scripts/com/esarks/jac/generators/GenerateReportPro.script`

**Total Lines**: 1179

---

## Function Inventory

### 1. extractSimpleName(String fullyQualifiedName)
**Lines**: 4-9
**Visibility**: private
**Return Type**: String

#### Purpose
Helper method to extract the simple class name from a fully qualified package name.

#### Parameters
- `fullyQualifiedName` - Full package path (e.g., "com.esarks.examples.ChoreCompletion")

#### Returns
Simple name after the last dot (e.g., "ChoreCompletion")

---

### 2. generateTestValue(String fieldName, int recordNumber)
**Lines**: 11-68
**Visibility**: private
**Return Type**: String

#### Purpose
Intelligent test data generator that creates realistic sample values based on field naming patterns.

#### Parameters
- `fieldName` - The name of the field/column
- `recordNumber` - Sequential record number (1, 2, 3...)

#### Logic
Analyzes field name patterns to generate contextually appropriate test data:
- **ID fields** (ends with "_id" or "id"): `PREFIX-001`, `PREFIX-002`, etc.
- **Name/Title fields**: "Test fieldName 1", "Test fieldName 2", etc.
- **Email fields**: "test1@example.com", "test2@example.com", etc.
- **Date/Time fields**: Returns "new java.sql.Timestamp(System.currentTimeMillis())"
- **Description fields**: "Test description for fieldName record 1"
- **Status fields**: Rotates through "active", "pending", "completed"
- **URL fields**: "https://example.com/resource/1"
- **Points/Amount/Cost fields**: Numeric values (10, 20, 30...)
- **Boolean fields** (is_, has_, require*): Alternates true/false
- **Default**: "TestValue1_fieldName"

---

### 3. generateReportPro(String aXmlDefinition, Boolean aForce)
**Lines**: 70-1179
**Visibility**: public
**Return Type**: void

#### Purpose
Main orchestration function that coordinates the entire report generation process for Map-based reports. This is the entry point called by the build system or standalone invocation.

#### Parameters
- `aXmlDefinition` - Fully qualified name of the XML definition file (without .xml extension)
- `aForce` - Boolean flag to force regeneration even if files are up-to-date

#### Key Responsibilities

##### Input Validation & XML Parsing (Lines 72-90)
- Resets exit state
- Logs the generation target
- Parses XML definition file at specified path
- Validates that `<report>` tag exists in XML
- Sets fatal error event and exits if no report definition found
- **Derives report name from XML** using `<![report:name]!>` (line 89)

##### Staleness Check (Lines 91-108)
- Implements intelligent regeneration logic
- Compares file timestamps: XML definition, generator script, and output script
- Bypasses generation if output is up-to-date (unless `aForce=true`)
- Logs info event when generation is bypassed
- **Critical difference from GenerateReport**: Uses generator name "GenerateReportPro"

##### Merge Configuration Setup (Lines 110-121)
- Sets merge markers for code preservation during regeneration:
  - `$Section=` - Section boundary marker
  - `$Preserve=yes/no/keep/discard` - Preservation directives
- Configures comment style (`//`)
- Sets exclusion patterns for timestamp lines
- Enables output trimming

##### MIC Metadata Generation (Lines 126-132)
- Creates `.xml` metadata file for MIC (Managed Information Components) system
- Basic component registration with type "Report"

##### JSON Metadata Generation (Lines 134-149)
- Creates `.json` metadata file for build system
- Includes component type and title extracted from report name

##### Main Script Generation (Lines 151-905)
- Opens `.new` file for output
- Writes script context declaration
- Generates timestamp comment header
- Creates three main rendering methods:
  - `render()` methods (overloaded) - Lines 163-173
  - `renderHtml()` method - Lines 175-603
  - `renderXml()` method - Lines 605-796
  - `renderJson()` method - Lines 798-905
- Includes code preservation sections

##### HTML Documentation Generation (Lines 189-196)
- Retrieves accumulated HTML documentation from output manager
- Creates specification table showing:
  - Specification File Name
  - Report Name
  - Data Type: `ArrayList<Map<String,Object>>`

##### Test XML Structure Generation (Lines 907-960)
- Creates `_Test.xml` file with sample XML structure
- Generates skeleton data matching report schema
- Includes attribute placeholders for each column

##### JRUN File Generation (Lines 962-966)
- Creates `.jrun` execution file
- Simple wrapper: `<jacrun script="[name]" method="execute" />`

##### Controller Generation (Lines 968-1058)
- Creates `Controller.new` stub file
- Generates service integration template with Map-based data handling
- Includes methods for:
  - `execute()` - Main controller entry point
  - `performService()` - Service layer integration returning ArrayList
  - `create{Type}()` - JEO factory methods (for backward compatibility)
- Contains placeholder tokens (e.g., `!!com...!!`) for manual completion

##### Controller Metadata Generation (Lines 1061-1075)
- Creates `Controller.xml` MIC metadata file

##### Test Script Generation (Lines 1077-1121)
- Creates `Test.script` file with `execute()` method
- Generates sample Map-based test data creation code
- Creates 3 test records with realistic values using `generateTestValue()`
- Instantiates report class and calls `render()` method

##### Test JSON File Generation (Lines 1123-1160)
- Creates `Test.json` file with test data in JSON format
- Includes reportName and testData array
- Generates 3 test records matching the Test.script data
- Uses `generateTestValue()` for consistent test data

##### Test JRUN File Generation (Lines 1161-1165)
- Creates `Test.jrun` execution file
- Wrapper that calls Test script: `<jacrun script="[name]Test" method="execute" />`

##### Error Handling (Lines 1168-1177)
- Wraps entire process in try-catch
- Sets fatal error event on exception
- Logs error to master script context

---

## Rendering Methods

### 4. render(String aOutput, String aStereotype, ArrayList<Map<String,Object>> aData)
**Lines**: 163-167
**Visibility**: public
**Return Type**: void

#### Purpose
Overloaded render method that accepts a stereotype parameter (currently unused).

#### Parameters
- `aOutput` - Output file path (without extension)
- `aStereotype` - Stereotype identifier (reserved for future use)
- `aData` - ArrayList of Maps containing report data

#### Implementation
Delegates to all three rendering engines:
1. `renderHtml(aOutput, aData)` - Generates HTML report
2. `renderXml(aOutput, aData)` - Generates XML report
3. `renderJson(aOutput, aData)` - Generates JSON report

---

### 5. render(String aOutput, ArrayList<Map<String,Object>> aData)
**Lines**: 169-173
**Visibility**: public
**Return Type**: void

#### Purpose
Primary render method for generating HTML, XML, and JSON output from Map-based data.

#### Parameters
- `aOutput` - Output file path (without extension)
- `aData` - ArrayList of Maps containing report data

#### Implementation
Delegates to all three rendering engines:
1. `renderHtml(aOutput, aData)` - Generates HTML report
2. `renderXml(aOutput, aData)` - Generates XML report
3. `renderJson(aOutput, aData)` - Generates JSON report

---

### 6. renderHtml(String aOutput, ArrayList<Map<String,Object>> aData)
**Lines**: 175-603
**Visibility**: public
**Return Type**: void

#### Purpose
Generates HTML table-based report output from Map-based data structures.

#### Key Operations

##### Initialization (Lines 176-196)
- Opens `.html` output file
- Assigns data parameter to local variable
- Initializes control variables
- Creates documentation header table with:
  - Specification file name
  - Report name
  - Data type (ArrayList<Map<String,Object>>)

##### XML Re-parsing (Line 198)
- Re-parses XML definition to refresh property tree

##### Column Counter Initialization (Lines 200-202)
- Declares `lNbrColumns_` variable for tracking column counts

##### Main Iterator Loop (Lines 208-599)
- Processes each nested section/jeo level from XML
- **Key difference from GenerateReport**: Works with Map.get(key) instead of JEO getters

**Per-Section Processing**:

###### Documentation Generation (Lines 219-226)
- Creates specification tables showing section metadata

###### ArrayList Handling (Lines 228-249)
- Generates code to access nested collections
- Uses `getJeoByTypeName()` or `getJeoByInstanceName()` (maintains JEO compatibility)

###### Sort Field Processing (Lines 251-308)
- Builds sort keys for Map entries
- Generates comparator code using Collections.sort()
- Handles string, date, int, and decimal types
- Creates stable sort with original index as tiebreaker

###### Loop Variable Setup (Lines 310-320)
- Declares heading print flag
- Declares column count variable
- Generates for-loop over ArrayList

###### Column Heading Generation (Lines 322-420)
- Generates HTML table headers on first iteration
- Outputs column headings from XML definition
- Creates documentation tables with column specifications

###### Data Row Generation (Lines 422-477)
- Generates `<tr>` for each data row
- Accesses Map values: `lMap.get("columnName")`
- Handles null values gracefully
- Generates `<td>` tags with data values

###### Nesting Handling (Lines 479-599)
- Manages recursive descent into nested data
- Tracks nesting level with variable suffixes
- Generates loop closing braces
- Outputs table end markers

---

### 7. renderXml(String aOutput, ArrayList<Map<String,Object>> aData)
**Lines**: 605-796
**Visibility**: public
**Return Type**: void

#### Purpose
Generates XML-formatted report output from Map-based data structures.

#### Key Operations

##### Initialization (Lines 606-614)
- Opens `.xml` output file
- Assigns data parameter to local variable
- Initializes control variables

##### XML Root Element (Lines 616-618)
- Generates opening `<report name="...">` tag

##### Main Iterator Loop (Lines 625-786)
- Similar structure to renderHtml but generates XML
- Processes each nested section

**Per-Section Processing**:

###### ArrayList Handling (Lines 632-653)
- Generates code to access nested collections
- Identical to renderHtml approach

###### Sort Field Processing (Lines 655-707)
- Identical sorting logic to renderHtml
- Builds sort keys and calls Collections.sort()

###### XML Header Generation (Lines 711-734)
- Generates XML table header (first iteration only):
  ```xml
  <table>
    <header>
      <column name="..." width="...">Heading</column>
    </header>
  ```

###### Row Attribute Building (Lines 736-752)
- Processes section-level tags (row attributes)
- Builds attribute string from Map values

###### Row Element Generation (Lines 753-765)
- Generates `<row>` opening tag with attributes
- Iterates through columns
- Generates column elements: `<ColumnName>value</ColumnName>`
- Closes `</row>` tag

##### XML Root Closing (Lines 790-794)
- Generates `</report>` closing tag
- Closes output file

---

### 8. renderJson(String aOutput, ArrayList<Map<String,Object>> aData)
**Lines**: 798-905
**Visibility**: public
**Return Type**: void

#### Purpose
Generates JSON-formatted report output from Map-based data structures. This is a key differentiator from GenerateReport which doesn't support JSON output.

#### Key Operations

##### Initialization (Lines 799-807)
- Opens `.json` output file
- Assigns data parameter to local variable
- Initializes control variables

##### JSON Root Object (Lines 809-815)
- Generates opening JSON structure:
  ```json
  {
    "reportName": "name",
    "data": [
  ```

##### Main Iterator Loop (Lines 822-895)
- Processes each Map in the data ArrayList
- Generates JSON objects for each row

**Per-Row Processing**:

###### Row Object Generation (Lines 824-875)
- Opens JSON object: `{`
- Iterates through columns
- Generates key-value pairs:
  ```json
  "columnName": "value"
  ```
- Handles comma separation between fields
- Handles null values
- Closes JSON object: `}`

##### JSON Root Closing (Lines 897-903)
- Closes data array: `]`
- Closes root object: `}`
- Closes output file

---

## Generated Artifacts

### 1. {ReportName}.script
Main report script with three rendering methods. Generated code includes:
- Map traversal loops
- HTML table generation
- XML element generation
- **JSON object generation** (new in Pro version)
- Sort logic using Collections.sort()
- Column formatting with Map.get() accessors

### 2. {ReportName}.xml
MIC metadata for build system integration

### 3. {ReportName}.json
Build system metadata with component type and title

### 4. {ReportName}_Test.xml
Sample XML structure with:
- Section hierarchy skeleton
- Column name placeholders
- Proper nesting structure

### 5. {ReportName}.jrun
Execution wrapper for command-line invocation

### 6. {ReportName}Controller.new
Service integration stub with:
- Map-based data handling
- Service call template
- JEO factory methods (for backward compatibility)
- Execute method skeleton

### 7. {ReportName}Controller.xml
MIC metadata for controller component

### 8. {ReportName}Test.script
Complete test script with:
- Sample Map-based data creation
- Three test records with realistic values
- Report instantiation and rendering

### 9. {ReportName}Test.json
JSON test data file with:
- reportName field
- testData array with 3 sample records
- Realistic test values matching field names

### 10. {ReportName}Test.jrun
Test execution wrapper

---

## Key Design Patterns

### 1. Multi-Pass Generation
- Pass 1: Parse XML and build property tree
- Pass 2: Generate script code with Map-based access
- Pass 3: Generate HTML documentation
- Pass 4: Generate test XML structure
- Pass 5: Generate controller stub
- Pass 6: Generate test script with sample data
- Pass 7: Generate test JSON file
- Pass 8: Generate test JRUN file

### 2. Map-Based Data Access
Unlike GenerateReport's JEO-based approach:
```java
// GenerateReport (JEO-based):
String value = jeo.getNamePropertyValue().toString();

// GenerateReportPro (Map-based):
Object valueObj = map.get("name");
String value = (valueObj == null) PENDING "" : valueObj.toString();
```

### 3. Intelligent Test Data Generation
Uses field name analysis to create realistic test values:
- Pattern matching on field names
- Type inference from naming conventions
- Sequential variation across test records
- Proper handling of special types (dates, booleans)

### 4. Multiple Output Formats
Generates three output formats from single render call:
- HTML for visual reports
- XML for data interchange
- **JSON for REST APIs** (new in Pro version)

### 5. Consistent Test File Pattern
Follows GenerateReport's pattern exactly:
- Test.script - Executable test with sample data
- Test.json - JSON test data file
- Test.jrun - Test execution wrapper

---

## Comparison to GenerateReport

GenerateReport (legacy) vs GenerateReportPro (modern):

| Feature | GenerateReport | GenerateReportPro |
|---------|----------------|-------------------|
| **Data Source** | JEO collections | Map collections |
| **Type Safety** | Strong (JEO getters) | Weak (Map.get()) |
| **Flexibility** | JEO-constrained | Works with any Map data |
| **Output Formats** | HTML, XML | HTML, XML, **JSON** |
| **API Integration** | Limited | REST-friendly (JSON) |
| **Nested Data** | Full JEO recursion | Map-based nesting |
| **Sorting** | Manual sort keys | Collections.sort() with Comparator |
| **Test Data** | Basic placeholders | Intelligent field-based generation |
| **Test Files** | 3 files (.script, .json, .jrun) | **3 files** (.script, .json, .jrun) |
| **Null Handling** | Assumes non-null | Explicit null checks |
| **Modern Frameworks** | Limited compatibility | Spring/REST compatible |

GenerateReport is preferred for:
- Legacy JEO-based applications
- Deep object hierarchies with type safety
- Reports requiring custom JEO traversal

GenerateReportPro is preferred for:
- New development
- **REST API endpoints**
- **Modern web applications**
- Spring Boot microservices
- Reports from database queries (ResultSet → Map)
- Multi-format output requirements (especially JSON)

---

## Dependencies

### Required Components
- **ParseXml**: XML definition parsing
- **Merge**: Code preservation during regeneration
- **OutputManager**: Multi-buffer output management
- **PropertyValue**: Property system implementation
- **ScriptWriter**: Template processing

### Generated Code Dependencies
- **java.util.ArrayList**: Collection support
- **java.util.Map**: Map data structure
- **java.util.HashMap**: Map implementation (in test code)
- **java.util.Collections**: Sorting support
- **java.util.Comparator**: Custom comparators
- **java.text.DecimalFormat**: Sort key formatting
- **java.sql.Timestamp**: Date/time handling (in test data)

---

## Code Generation Architecture

### Template Syntax
GenerateReportPro uses the same JAC template language as GenerateReport:

- **`<%...%>`**: JAC code blocks (generator-time execution)
- **`%>...<%`**: Generated code output
- **`<!...!>`**: Property references (XML path navigation)
- **`<!%...!>`**: Variable interpolation in generated code

### Output Manager Pattern
Uses multi-buffer output system:
- **Main document**: Generated script code
- **"createHtml" buffer**: HTML documentation table
- **"createHtml2" buffer**: HTML sample data table

### Nesting Variable Convention
Generates unique variable names for each nesting level:
- Level 0: `lArrayListx`, `lMapx`, `lIdxx`
- Level 1: `lArrayListxx`, `lMapxx`, `lIdxxx`
- Level 2: `lArrayListxxx`, `lMapxxx`, `lIdxxxx`

Suffix accumulates 'x' characters to avoid naming conflicts in nested loops.

---

## Function Call Graph

```
generateReportPro()
├── parseXmlPath() [multiple calls]
├── openOutput() [multiple calls]
├── Merge.getInstance().doMerge()
├── iOutputManager.setDocument()
├── iOutputManager.getDocument()
├── generateTestValue() [in test generation]
├── extractSimpleName() [in metadata generation]
└── closeOutput() [multiple calls]

render()
├── renderHtml()
├── renderXml()
└── renderJson()

renderHtml()
├── openOutput()
├── parseXmlPath()
├── iOutputManager.setDocument()
└── closeOutput()

renderXml()
├── openOutput()
└── closeOutput()

renderJson()
├── openOutput()
└── closeOutput()
```

---

## File Location Reference

- **Generator**: `jac2024/jacBuild24/source/scripts/com/esarks/jac/generators/GenerateReportPro.script`
- **Examples**: `jac2024/app/com/esarks/examples/generateReportPro/*.xml`
- **Generated Output**: Same directory as XML definition
- **Documentation**: `ArchitectsCompanion.wiki/GenerateReportPro.md`

---

## Summary

GenerateReportPro.script is the modern evolution of GenerateReport, designed for Map-based data structures and modern web applications. Its 1179-line implementation demonstrates advanced metaprogramming with Map-based data access, multiple output formats (HTML, XML, JSON), intelligent test data generation, and full compatibility with the GenerateReport test file pattern.

The generator creates a complete set of 10 files including the main report script, test scripts, JSON test data, execution wrappers, controller stubs, and metadata files. The inclusion of JSON output support and Map-based architecture makes it ideal for REST APIs, Spring Boot applications, and microservices where type flexibility and multiple output formats are essential.

**Key Innovation**: While maintaining backward compatibility with GenerateReport's file structure and test pattern, GenerateReportPro adds JSON output support and works with generic Map collections, making it the preferred choice for modern Java development.
