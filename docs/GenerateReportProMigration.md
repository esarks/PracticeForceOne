---
title: "GenerateReportProMigration"
---

# GenerateReportPro Migration Plan

## Executive Summary

This document provides a comprehensive step-by-step plan to migrate GenerateReportPro.script from its current broken state to a working implementation based on the proven GenerateReport.script codebase. The migration will leverage GenerateReport's working architecture while adding the specific enhancements required for GenerateReportPro.

**Strategy**: Start from GenerateReport.script (which works great) and incrementally adapt it to meet GenerateReportPro requirements.

## Problem Analysis

### Current Broken GenerateReportPro.script Issues

The current GenerateReportPro.script (305 lines) has critical compilation errors:

1. **Lines 274-284: Preserve Section Placement Error**
   - **Problem**: The preserve section is written OUTSIDE scriptlets as text output
   - **Impact**: Generates `iOutputManager.println()` statements instead of actual Java code
   - **Result**: Missing closing brace in generated .java files, compilation fails

2. **Line 269: Missing Newline**
   - **Problem**: Closing scriptlet delimiter `%>` lacks newline character
   - **Impact**: Poor formatting in generated output

3. **Incomplete Implementation**
   - Missing renderXml() method
   - Missing renderFromXml() method
   - Missing test XML generation
   - Missing controller stub generation

### Why GenerateReport.script Works Great

GenerateReport.script (993 lines) is battle-tested and includes:

PASS Proper scriptlet structure throughout
PASS Correct preserve section placement (lines 787-795)
PASS Complete renderHtml() implementation
PASS Complete renderXml() implementation
PASS Complete renderFromXml() implementation
PASS Test XML generation
PASS Controller stub generation
PASS Proper merge integration

## Key Architectural Differences

| Aspect | GenerateReport | GenerateReportPro |
|--------|---------------|-------------------|
| **Method Name** | `generateReport()` | `generateReportPro()` |
| **Schema** | `<!report!>` | `<!com.esarks.arm.schemas.reportpro.report!>` |
| **Schema Path** | Direct `parseXmlPath()` | `loadXmlSchema()` + `parseXmlSchema()` |
| **Data Structure** | `ArrayList<JEO>` | `ArrayList<Map<String, Object>>` |
| **Section Support** | Nested JEO hierarchy | Flat sections with columns |
| **Column Access** | `<!report:jeo:column!>` | `<!report:section:column!>` |
| **Generated Code** | JEO property accessors | Map.get() accessors |
| **Test Data** | None (requires real data) | Self-contained test data generation |
| **Output Files** | .script, .jrun, .xml, *_Test.xml, Controller | .script, .jrun, .json, .xml |

## Migration Strategy

### Phase 1: Foundation (Copy & Rename)
**Objective**: Create working baseline from GenerateReport.script

1. Make backup of current broken GenerateReportPro.script
2. Copy GenerateReport.script → GenerateReportPro.script
3. Rename method: `generateReport` → `generateReportPro`
4. Test that it compiles

**Validation**: GenerateReportPro.script should compile without errors

### Phase 2: Schema Migration
**Objective**: Switch from `report` schema to `reportpro` schema

**Changes Required**:

```java
// BEFORE (GenerateReport.script line 9):
<!report!>!remove();
parseXmlPath(path(aXmlDefinition) + ".xml");

// AFTER (GenerateReportPro.script):
<!com.esarks.arm.schemas.reportpro.report!>!remove();
loadXmlSchema("com.esarks.arm.schemas.reportpro", path("com.esarks.arm.schemas.reportpro") + ".xml");
parseXmlSchema(aXmlDefinition);
```

**Impact Areas**:
- Line ~9: Schema loading
- Line ~11: Report tag validation
- Line ~29: Report name extraction
- All references to `<!report:*!>` → `<!com.esarks.arm.schemas.reportpro.report:*!>`

**Validation**: Schema loads correctly, report definition parsed

### Phase 3: Metadata Files
**Objective**: Update generated metadata files

**Changes Required**:

1. **Add .json file generation** (GenerateReport doesn't generate this):
```java
openOutput(path(lReportName) + ".json");
%>{
  "mic.element": {
    "type": "Component",
    "title": "<!%lTitle!>"
  }
}
<%
closeOutput();
```

2. **Update .xml file generation** (keep existing format)
3. **Keep .jrun file generation** (same format)

**Validation**: All 4 files (.script, .jrun, .json, .xml) generated

### Phase 4: Data Structure Migration (CRITICAL)
**Objective**: Replace JEO-based rendering with Map-based rendering

**This is the most complex and critical phase.**

#### 4.1: Method Signatures

```java
// BEFORE (GenerateReport.script lines 77-85):
public void render(String aOutput, String aStereotype, <![report:inJeo]!> aJeo) {
  renderHtml(aOutput, aJeo);
  renderXml(aOutput, aJeo);
}

// AFTER (GenerateReportPro.script):
public void render(String aOutput, String aStereotype, java.util.ArrayList<java.util.Map<String, Object>> aData) {
  renderHtml(aOutput, aData);
}

public void render(String aOutput, java.util.ArrayList<java.util.Map<String, Object>> aData) {
  renderHtml(aOutput, aData);
}
```

#### 4.2: Test Data Generation

**ADD** a new standalone render() method that generates test data:

```java
/**
 * Standalone render method - generates test data for demonstration
 */
public void render() {
  System.out.println("Executing report: " + this.getClass().getName());

  // Create list to hold detail rows
  java.util.ArrayList<java.util.Map<String, Object>> lData = new java.util.ArrayList<java.util.Map<String, Object>>();

  // Generate 3 test rows
  for (int i = 1; i <= 3; i++) {
    java.util.Map<String, Object> lRow = new java.util.HashMap<String, Object>();
    <%
    // Generate test data for each column
    <!com.esarks.arm.schemas.reportpro.report:section:column!>& {
      String lColumnName = <![com.esarks.arm.schemas.reportpro.report:section:column:name]!>;
      String lColumnType = <![com.esarks.arm.schemas.reportpro.report:section:column:type]!>;

      // Type-specific test data generation
      if (lColumnType.equals("integer") || lColumnType.equals("number")) {
        %>    lRow.put("<!%lColumnName!>", i * 100);<%
      } else if (lColumnType.equals("date") || lColumnType.equals("datetime")) {
        %>    lRow.put("<!%lColumnName!>", new java.util.Date());<%
      } else if (lColumnType.equals("decimal") || lColumnType.equals("float")) {
        %>    lRow.put("<!%lColumnName!>", i * 10.5);<%
      } else {
        %>    lRow.put("<!%lColumnName!>", "Test Value " + i);<%
      }
    }
    %>    lData.add(lRow);
  }

  // Call the main render method
  render("<!%lReportName!>_Output", lData);
}
```

#### 4.3: HTML Rendering Migration

**BEFORE** (GenerateReport.script approach - JEO hierarchy traversal):
- Complex nested loop structure
- Dynamic JEO type discovery
- Property value extraction via JEO accessors
- Multi-level iteration with `lJeoName`, `lX`, `lIndent` tracking

**AFTER** (GenerateReportPro approach - Simple section/column iteration):

```java
public void renderHtml(String aOutput, java.util.ArrayList<java.util.Map<String, Object>> aData) {
  openOutput(path(aOutput) + ".html");
  java.util.ArrayList<java.util.Map<String, Object>> lData = aData;

  // Generate HTML header with CSS
  %><html>
<head>
  <title><!%lTitle!></title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    h1 { color: #333; }
    table { border-collapse: collapse; width: 100%; margin-top: 20px; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background-color: #4CAF50; color: white; }
    tr:nth-child(even) { background-color: #f2f2f2; }
  </style>
</head>
<body>
  <h1><!%lTitle!></h1>
  <table>
    <tr>
<%
  // Generate table headers from section columns
  <!com.esarks.arm.schemas.reportpro.report:section:column!>& {
    String lHeading = <![com.esarks.arm.schemas.reportpro.report:section:column:heading]!>;
    %>      <th><!%lHeading!></th><%
  }
  %>    </tr>
<%

  // CRITICAL: Generate runtime loop code using StringBuffer
  // This is necessary because we need the loop to execute when the .script runs,
  // not when the generator runs
  StringBuffer lLoopCode = new StringBuffer();
  lLoopCode.append("    <" + "%\n");
  lLoopCode.append("    for (java.util.Map<String, Object> lRow : lData) {\n");
  lLoopCode.append("    %" + ">\n");
  lLoopCode.append("    <tr>\n");

  <!com.esarks.arm.schemas.reportpro.report:section:column!>& {
    String lColumnName = <![com.esarks.arm.schemas.reportpro.report:section:column:name]!>;
    lLoopCode.append("      <td>%" + ">\n");
    lLoopCode.append("      <" + "% iOutputManager.println(String.valueOf(lRow.get(\"" + lColumnName + "\")), false); %" + ">\n");
    lLoopCode.append("      </td>\n");
  }

  lLoopCode.append("    </tr>\n");
  lLoopCode.append("    <" + "%\n");
  lLoopCode.append("    }\n");
  lLoopCode.append("    %" + ">\n");  // *** CRITICAL: MUST have \n here ***
  lLoopCode.append("  </table>\n");
  lLoopCode.append("</body>\n");
  lLoopCode.append("</html>\n");
  lLoopCode.append("<" + "%\n");
  lLoopCode.append("    closeOutput();\n");
  lLoopCode.append("  }\n");
  lLoopCode.append("%" + ">\n");

  // Output the generated loop code
  %><!%lLoopCode.toString()!><%
}
```

**Key Difference**: GenerateReport uses complex iteration logic to traverse nested JEO structures. GenerateReportPro uses a simple StringBuffer to generate a flat foreach loop over Map entries.

#### 4.4: Remove JEO-Specific Features

**DELETE** these sections from GenerateReport.script:
- renderXml() method (lines 426-713) - Not needed for Map-based reports
- renderFromXml() method (lines 722-781) - Not needed for Map-based reports
- Test XML generation (lines 811-863) - Replaced by test data generation
- Controller stub generation (lines 872-979) - Move to GenerateController

### Phase 5: Preserve Section (CRITICAL FIX)
**Objective**: Fix the critical preserve section bug

**Current BROKEN code (lines 274-284)**:
```
%><%              ← Opens THEN immediately closes scriptlet (WRONG!)
//$Section=Deleted$Preserve=yes   ← These become TEXT output (WRONG!)
...
%>                ← This closes nothing (WRONG!)
```

**Correct code from GenerateReport.script (lines 787-796)**:
```
%>
//$Section=Deleted$Preserve=yes   ← These are actual Java code (CORRECT!)
...
//End of script---------------
<%                ← This stays in the scriptlet (CORRECT!)
  closeOutput();
  Merge.getInstance().doMerge(...);
```

**Migration Steps**:
1. Find the line that has just `%><%` (around line 274)
2. Replace with just `%><%` opening a scriptlet
3. Keep preserve section INSIDE the scriptlet
4. End with proper scriptlet closing structure

**Pattern to Follow**:
```
// Inside generator scriptlet:
%><!%lLoopCode.toString()!><%

//=============================================================================

%><%                               ← Opens scriptlet for preserve section
//$Section=Deleted$Preserve=yes    ← Actual Java code, not output

//----------------------------------------------------------------------------
// This section contains orphaned code from deleted operations.
//----------------------------------------------------------------------------

//$Section=Deleted$Preserve=no

//End of script---------------
%>                                 ← Closes the .script file being generated
<%                                 ← Still inside generator scriptlet!
  closeOutput();                   ← Generator closes the output file
  Merge.getInstance().doMerge(...);
```

### Phase 6: Staleness Check
**Objective**: Update file checking logic

**Changes**:
- Check for .json file (in addition to .script, .jrun, .xml)
- Remove JEO-specific file checks (like *_Test.xml, Controller files)

### Phase 7: File Generation Completion
**Objective**: Ensure complete file output

**Add**:
- Comprehensive DEBUG logging (already present in broken version)
- Error handling and reporting
- Merge operation for .script file
- File timestamp validation

## Migration Execution Checklist

### Pre-Migration
- [ ] Backup current GenerateReportPro.script to GenerateReportPro.script.broken
- [ ] Backup current GenerateReport.script (reference copy)
- [ ] Document current test failures for comparison

### Phase 1: Foundation
- [ ] Copy GenerateReport.script to GenerateReportPro.script
- [ ] Rename method `generateReport` → `generateReportPro`
- [ ] Update method documentation
- [ ] Compile and verify no errors
- [ ] Git commit: "Phase 1: Copy GenerateReport.script as baseline"

### Phase 2: Schema Migration
- [ ] Replace `<!report!>` with `<!com.esarks.arm.schemas.reportpro.report!>`
- [ ] Update schema loading to use `loadXmlSchema()` + `parseXmlSchema()`
- [ ] Update all schema references throughout file
- [ ] Test with simple ReportPro XML definition
- [ ] Git commit: "Phase 2: Migrate to reportpro schema"

### Phase 3: Metadata Files
- [ ] Add .json file generation
- [ ] Verify .xml file format
- [ ] Verify .jrun file format
- [ ] Test all 4 files are created
- [ ] Git commit: "Phase 3: Add .json metadata file generation"

### Phase 4: Data Structure Migration
- [ ] Update render() method signatures
- [ ] Add standalone render() with test data generation
- [ ] Replace renderHtml() implementation with Map-based version
- [ ] Test HTML generation with test data
- [ ] Delete renderXml() method
- [ ] Delete renderFromXml() method
- [ ] Delete test XML generation code
- [ ] Delete controller stub generation code
- [ ] Git commit: "Phase 4: Migrate to Map-based data structure"

### Phase 5: Preserve Section Fix
- [ ] Locate preserve section around line 787 (in migrated file)
- [ ] Verify scriptlet structure matches GenerateReport.script
- [ ] Ensure preserve section is INSIDE scriptlet, not output
- [ ] Test generated .script file compiles correctly
- [ ] Git commit: "Phase 5: Fix preserve section placement"

### Phase 6: Staleness Check
- [ ] Add .json file to staleness check
- [ ] Remove JEO-specific file checks
- [ ] Test staleness bypass logic
- [ ] Git commit: "Phase 6: Update staleness check for ReportPro files"

### Phase 7: Final Integration
- [ ] Add all DEBUG logging
- [ ] Test with all 5 example reports
- [ ] Verify HTML output quality
- [ ] Verify all metadata files correct
- [ ] Run full integration test
- [ ] Git commit: "Phase 7: Complete GenerateReportPro migration"

## Testing Strategy

### Unit Tests
1. **Schema Loading**: Verify reportpro schema loads correctly
2. **Metadata Generation**: Verify all 4 files (.script, .jrun, .json, .xml) created
3. **Test Data Generation**: Verify standalone render() creates valid test data
4. **HTML Output**: Verify HTML has proper structure, CSS, and data

### Integration Tests
Run generator on all 5 example reports:
1. ChoreCompletion_ReportPro
2. FamilyRoster_ReportPro
3. FamilyActivity_ReportPro
4. PointsBalance_ReportPro
5. FamilyDashboard_ReportPro

**Success Criteria**:
- All .script files compile without errors
- All .script files execute and generate HTML
- HTML output is well-formatted with CSS
- Test data appears in HTML output
- No orphaned .new files remain

### Regression Tests
- Verify GenerateReport.script still works (unchanged)
- Verify existing JEO-based reports still work

## Critical Success Factors

1. **Follow GenerateReport.script Structure**: Don't reinvent the wheel; adapt what works
2. **Preserve Section Placement**: This is the #1 source of compilation errors
3. **Scriptlet Delimiters**: Always ensure proper `<%...%>` pairing
4. **Test Incrementally**: Don't migrate everything at once; test each phase
5. **StringBuffer for Runtime Code**: Use StringBuffer to generate code that executes at runtime, not generation time

## Rollback Plan

If migration fails:
1. Restore from GenerateReportPro.script.broken
2. Review migration log for failure point
3. Revert to last successful git commit
4. Re-attempt from that phase

## Success Metrics

**Definition of Done**:
- [ ] GenerateReportPro.script compiles without errors
- [ ] All 5 example reports generate successfully
- [ ] Generated .script files compile without errors
- [ ] Generated .script files execute and produce HTML
- [ ] HTML output is properly formatted with CSS
- [ ] Test data generation works correctly
- [ ] No compilation errors in generated .java files
- [ ] All 4 metadata files (.script, .jrun, .json, .xml) created
- [ ] Staleness checking works correctly
- [ ] Merge operation preserves custom code sections

## Timeline Estimate

- Phase 1 (Foundation): 15 minutes
- Phase 2 (Schema Migration): 30 minutes
- Phase 3 (Metadata Files): 15 minutes
- Phase 4 (Data Structure Migration): 60 minutes
- Phase 5 (Preserve Section Fix): 30 minutes
- Phase 6 (Staleness Check): 15 minutes
- Phase 7 (Final Integration): 30 minutes
- Testing & Validation: 60 minutes

**Total Estimate**: 4 hours

## References

- GenerateReport.script: `/jac2024/jacBuild24/source/scripts/com/esarks/jac/generators/GenerateReport.script`
- Current GenerateReportPro.script: `/jac2024/jacBuild24/source/scripts/com/esarks/jac/generators/GenerateReportPro.script`
- GenerateReportPro.md: `/jac2024/jacBuild24/source/scripts/com/esarks/jac/generators/generatereportpro.md`
- Example Reports: `/jac2024/app/com/esarks/examples/generateReportPro/*_ReportPro.xml`

## Appendix A: Key Code Patterns

### Pattern 1: Scriptlet Delimiters
```
<%                  ← Opens scriptlet (Java code)
  Java code here
%>                  ← Closes scriptlet
  Text output here
<%                  ← Opens scriptlet again
  More Java code
%>                  ← Closes scriptlet
```

### Pattern 2: StringBuffer for Runtime Code Generation
```java
StringBuffer lCode = new StringBuffer();
lCode.append("<%\n");                    // Scriptlet open
lCode.append("  for (Item i : list) {\n"); // Runtime Java code
lCode.append("%>\n");                    // Scriptlet close
lCode.append("  <div>...</div>\n");      // Runtime HTML output
lCode.append("<%\n");                    // Scriptlet open
lCode.append("  }\n");                   // Runtime Java code
lCode.append("%>\n");                    // Scriptlet close
%><!%lCode.toString()!><%                // Output the generated code
```

### Pattern 3: Preserve Section Structure
```
%><!%someCode.toString()!><%

//=============================================================================

%><%                                     ← Opens scriptlet
//$Section=Deleted$Preserve=yes          ← Java comment (actual code)

//----------------------------------------------------------------------------
// This section contains orphaned code from deleted operations.
//----------------------------------------------------------------------------

//$Section=Deleted$Preserve=no           ← Java comment (actual code)

//End of script---------------           ← Java comment (actual code)
%>                                       ← Closes .script file output
<%                                       ← Still in generator scriptlet!
  closeOutput();                         ← Generator Java code
  Merge.getInstance().doMerge(...);      ← Generator Java code
```

## Appendix B: Common Pitfalls

1. **Preserve Section Outside Scriptlet**
   - **Wrong**: `%>` followed by `//$Section=...` on next line
   - **Right**: `%><%` followed by `//$Section=...` on next line

2. **Missing Newlines in StringBuffer**
   - **Wrong**: `lCode.append("%" + ">");`
   - **Right**: `lCode.append("%" + ">\n");`

3. **Incorrect Schema References**
   - **Wrong**: `<!report:section:column!>`
   - **Right**: `<!com.esarks.arm.schemas.reportpro.report:section:column!>`

4. **JEO-Style Data Access in Map Context**
   - **Wrong**: `lRow.getColumnNamePropertyValue()`
   - **Right**: `lRow.get("COLUMN_NAME")`

## Revision History

| Date | Version | Author | Changes |
|------|---------|--------|---------|
| 2025-11-12 | 1.0 | Claude | Initial migration plan |
