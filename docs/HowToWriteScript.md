---
title: "HowToWriteScript"
---

# How to Write JAC Scripts: Comprehensive Guide

**Document Version:** 1.0
**Date:** 2025-10-27
**JAC Version:** JAC2024 v20241111a

---

## Table of Contents

1. [Introduction](#introduction)
2. [JAC Script Architecture](#jac-script-architecture)
3. [The .jrun File: Script Startup](#the-jrun-file-script-startup)
4. [The .script File: Mixed Language Programming](#the-script-file-mixed-language-programming)
5. [XML/JSON Symbol Table Population](#xmljson-symbol-table-population)
6. [Script File Directives](#script-file-directives)
7. [JAC Template Syntax](#jac-template-syntax)
8. [Passing Arguments](#passing-arguments)
9. [Calling Other Scripts and Components](#calling-other-scripts-and-components)
10. [Framework Features for Script Creation](#framework-features-for-script-creation)
11. [Generators and MakeAll Workflow](#generators-and-makeall-workflow)
12. [Complete Examples](#complete-examples)
13. [Best Practices](#best-practices)

---

## Introduction

JAC (Java Architects Companion) provides a powerful template-driven code generation system that combines:
- **Java code** for logic and computation
- **XML/JSON** for configuration and data
- **JAC template syntax** for dynamic content generation
- **Script directives** for controlling compilation and execution

This document covers everything you need to write robust JAC scripts for code generation, data processing, and application automation.

---

## JAC Script Architecture

### The Three-File Pattern

Most JAC applications follow a three-file pattern:

```
HelloWorld.jrun          # Execution descriptor (how to run)
HelloWorld.script        # Template source (what to run)
HelloWorld.xml           # Configuration data (optional)
```

### Execution Flow

```
User Triggers → .jrun File → JAC Compiler → .script File(s) → Java Code
                    ↓                              ↓
                .xml/.json                   Symbol Table
                (Config Data)              (Property Collection)
```

1. **`.jrun` file** specifies which script to execute and which method to call
2. **JAC Compiler** parses the .jrun file using `Jrun.script`
3. **Symbol Table** populated from associated .xml or .json files
4. **`.script` file(s)** transformed into pure Java by `ScriptWriter.java`
5. **Java Compiler** compiles generated Java code
6. **Runtime** executes the compiled method

---

## The .jrun File: Script Startup

### Purpose

A `.jrun` file is an XML descriptor that tells JAC:
- Which script class to load
- Which method to execute
- What arguments to pass
- Optional classpath additions

### Basic Syntax

```xml
<jacrun script="PackageName.ClassName" method="methodName" />
```

### Example: Simple Execution

```xml
<!-- HelloWorld.jrun -->
<jacrun script="com.esarks.demonstrations.HelloWorld.HelloWorld" method="execute" />
```

This tells JAC to:
1. Load script `com.esarks.demonstrations.HelloWorld.HelloWorld`
2. Compile it if needed (HelloWorld.script → HelloWorld.java → HelloWorld.class)
3. Call the `execute()` method

### Passing Arguments

#### Single Argument

```xml
<jacrun script="com.esarks.jac.make.MakeAll"
        method="execute"
        argument="com.esarks.examples.GenerateMake" />
```

The argument is passed as a String to the execute method:
```java
public void execute(String aArgument) {
    // aArgument = "com.esarks.examples.GenerateMake"
}
```

#### Two Arguments

```xml
<jacrun script="com.esarks.jac.make.MakeAll"
        method="execute"
        argument="com.esarks.examples.GenerateMake"
        argument2="true" />
```

Both arguments passed as Strings:
```java
public void execute(String aArgument, String aArgument2) {
    // aArgument = "com.esarks.examples.GenerateMake"
    // aArgument2 = "true"
}
```

#### Multiple Arguments (Array)

```xml
<jacrun script="com.esarks.jac.make.MakeAll" method="execute">
  <args>
    <arg>com.esarks.examples.GenerateMake</arg>
    <arg>true</arg>
    <arg>verbose</arg>
  </args>
</jacrun>
```

Arguments passed as String array:
```java
public void execute(String[] args) {
    // args[0] = "com.esarks.examples.GenerateMake"
    // args[1] = "true"
    // args[2] = "verbose"
}
```

### Classpath Configuration

```xml
<jacrun script="com.example.MyScript" method="execute">
  <classpath>
    <path>lib/custom.jar</path>
    <workPath>extra/classes</workPath>
    <homePath>dependencies/more.jar</homePath>
  </classpath>
</jacrun>
```

### Advanced .jrun Features

#### Multiple Scripts in Sequence

```xml
<jacrun>
  <script name="com.esarks.setup.Initialize" method="setup" />
  <script name="com.esarks.main.Process" method="execute" argument="data.xml" />
  <script name="com.esarks.cleanup.Finalize" method="cleanup" />
</jacrun>
```

#### Pause for Debugging

```xml
<jacrun>
  <script name="com.esarks.example.Test" method="execute">
    <pause>true</pause>
  </script>
</jacrun>
```

#### Prevent Recompilation

```xml
<jacrun>
  <noScript>true</noScript>
  <script name="com.esarks.example.Stable" method="execute" />
</jacrun>
```

### How .jrun Files are Processed

The **`Jrun.script`** file (located in `jacBuild24/source/scripts/com/esarks/jac/jrun/Jrun.script`) handles all .jrun file processing:

1. **Parse XML**: `parseXmlPath(aXml)` reads the .jrun file into the symbol table
2. **Build Classpath**: Iterate through `<!jacrun:classpath:path!>` elements
3. **Load Scripts**: For each `<!jacrun:script!>` element:
   - Load the script class using `loadScript()`
   - Execute the specified method using `execMethod()`
   - Pass arguments if specified
   - Unload when complete
4. **Error Handling**: Catches exceptions and reports warnings

---

## The .script File: Mixed Language Programming

### Purpose

A `.script` file is a **template source file** that mixes:
- **Java code** for program logic
- **JAC template syntax** for dynamic output generation
- **Script directives** for compilation control
- **XML/JSON loading** for data population

### File Structure

```
[Script Directives]      ← Tell compiler where to find source files, imports, etc.
end                      ← Marks end of directives
[Template Code]          ← Mixed Java/JAC/XML syntax
```

### Basic Example

```java
// HelloWorld.script
source ScriptPrefix.script
source ScriptPostfix.script
end

//////////////////////////////////////////////////////////////////////////////

<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Execute method on HelloWorld</document>
   </method>
&>

%>
Hello World! This is output text.
Current time: <![jac:dateTime]!>
<%

<& com.esarks.arm.scripts.FinalReturnMethod &>

//////////////////////////////////////////////////////////////////////////////
```

---

## XML/JSON Symbol Table Population

### How It Works

When a .jrun file starts, JAC automatically:
1. Looks for a .xml or .json file with the same base name
2. Parses it using `ParseXml.java` or `ParseJson.java`
3. Populates the **Symbol Table** (a hierarchical PropertyCollection)
4. Makes data available to scripts via property syntax

### Symbol Table Structure

The Symbol Table is a **hierarchical key-value store**:
- Keys use colon notation: `parent:child:grandchild`
- Values are PropertyValue objects (string, int, collection, etc.)
- Supports iteration and nested properties

### XML Example

**ComplexSymbol.xml:**
```xml
<mic.element type="Component" title="Complex Symbol Demo">
  <record id="12345">
    <name>
      <first>John</first>
      <last>Smith</last>
    </name>
  </record>
  <record id="12346">
    <name>
      <first>Jane</first>
      <last>Doe</last>
    </name>
  </record>
</mic.element>
```

**Symbol Table After Parsing:**
```
mic.element:type = "Component"
mic.element:title = "Complex Symbol Demo"
mic.element:record[0] = "12345"
mic.element:record[0]:name:first = "John"
mic.element:record[0]:name:last = "Smith"
mic.element:record[1] = "12346"
mic.element:record[1]:name:first = "Jane"
mic.element:record[1]:name:last = "Doe"
```

### JSON Example

**HelloWorld.json:**
```json
{
  "mic.element": {
    "type": "Component",
    "title": "Hello World Demo",
    "config": {
      "version": "2.0",
      "debug": true
    }
  }
}
```

**Symbol Table After Parsing:**
```
mic.element:type = "Component"
mic.element:title = "Hello World Demo"
mic.element:config:version = "2.0"
mic.element:config:debug = "true"
```

### Loading XML/JSON in Scripts

#### Method 1: Automatic Loading (Same Name)

If `HelloWorld.jrun` starts `HelloWorld.script`, JAC automatically loads `HelloWorld.xml` if it exists.

#### Method 2: Explicit Loading in .script File

```java
// At top of .script file
xml <mic.element type="Component">
end
```

#### Method 3: Dynamic Loading in Code

```java
// Inside method
iScript.getSymbolTable().parseXml("/path/to/data.xml");
```

---

## Script File Directives

Directives appear at the **top of .script files** before the `end` keyword. They control compilation and tell JAC how to build the script.

### Common Directives

| Directive | Purpose | Example |
|-----------|---------|---------|
| `source` | Include a source file | `source ScriptPrefix.script` |
| `script` | Include another script template | `script com.esarks.common.Utilities` |
| `xml` | Parse inline XML | `xml <config debug="true"/>` |
| `import` | Add Java import | `import java.util.ArrayList` |
| `var` | Declare instance variable | `var private int counter = 0;` |
| `set` | Set symbol table property | `set myProperty=myValue` |
| `extends` | Set class inheritance | `extends com.esarks.base.BaseScript` |
| `implements` | Add interface | `implements Runnable` |
| `make` | Specify custom .make file | `make custom.make` |
| `context` | Use standard .make file | `context micScriptComponent` |
| `load` | Load and store script instance | `load com.esarks.util.Helper,helperInstance` |
| `merge` | Merge with another script | `merge com.esarks.base.Template` |
| `end` | **End of directives** | `end` |

### Directive Examples

#### Complete Directive Section

```java
// MyScript.script

// Use the micScriptComponent compilation context
context micScriptComponent

// Load XML data
xml <components>
      <component name="TestComponent" type="Table"/>
    </components>

// Add Java imports
import java.util.HashMap
import java.io.File

// Declare instance variables
var private Logger logger = new Logger();
var private int processCount = 0;

// Set properties in symbol table
set project.name=MyProject
set project.version=1.0

// Extend base class
extends com.esarks.arm.scripts.MicScriptComponent

// Load helper script
load com.esarks.util.FileHelper,fileHelper

end

// ... rest of script template code follows ...
```

### Source Files

Source files are typically stored in `conf/` directory and provide common code:

**ScriptPrefix.script** - Common preamble:
```java
package <![jac:script:package]!>;

import com.esarks.jac.*;
import java.io.*;
import java.util.*;

<#import#>

public class <![jac:script]!> <!jac:script:extends!> <!jac:script:implements!> {

  <#var#>

  public <![jac:script]!>(Script aScript) {
    iScript = aScript;
  }
```

**ScriptPostfix.script** - Common closing:
```java
} // end class
```

---

## JAC Template Syntax

JAC provides special syntax for mixing Java code with output generation and property access.

### State Transitions

The ScriptWriter maintains a **state machine** with these states:

| State | Trigger | Purpose |
|-------|---------|---------|
| JAVA_CODE | `<%` → Java | Write Java statements |
| OUTPUT | `%>` → Output | Generate output text |
| JAC_SYMBOL | `<!property!>` | Access property object |
| TRANSLATE_SYMBOL | `<![property]!>` | Insert property value |
| XML | `<& ... &>` | Execute XML template |
| EXECSCRIPT | `<$ ... $>` | Execute inline script |

### Syntax Reference

#### 1. Output Mode: `%> ... <%`

Generate output that goes to stdout or output file.

```java
%>
This text will be printed to output.
Variables: <![jac:dateTime]!>
<%
```

Translates to:
```java
iOutputManager.print("This text will be printed to output.\n");
iOutputManager.print("Variables: " + iSymbolTable.translateProperties("jac:dateTime") + "\n");
```

#### 2. Property Value Substitution: `<![property:path]!>`

Insert the **value** of a property.

```java
%>
System name: <![mic.element:title]!>
Version: <![mic.element:config:version]!>
<%
```

Output:
```
System name: Hello World Demo
Version: 2.0
```

#### 3. Property Object Access: `<!property:path!>`

Get the **PropertyValue object** for manipulation.

```java
if (<!mic.element:debug!>!size() > 0) {
  System.out.println("Debug mode enabled");
}
```

Translates to:
```java
if (iScript.getSymbolTable().getPropertyCollection()
         .getPropertyValue("mic.element:debug", 0).size() > 0) {
  System.out.println("Debug mode enabled");
}
```

#### 4. Property Iteration: `<!property!>& { ... }`

Iterate through collection of property values.

```java
<!mic.element:record!>& {
  %> Record ID: <![mic.element:record]!>
     Name: <![mic.element:record:name:first]!> <![mic.element:record:name:last]!>
  <%
}
```

Translates to:
```java
PropertyValues lPropertyValues_1 = iScript.getSymbolTable()
    .getPropertyCollection().getPropertyValues("mic.element:record", true);
if (lPropertyValues_1 != null) {
  lPropertyValues_1.resetIterator(0);
  while (lPropertyValues_1.next()) {
    iOutputManager.print(" Record ID: " +
        iSymbolTable.translateProperties("mic.element:record") + "\n");
    iOutputManager.print("     Name: " +
        iSymbolTable.translateProperties("mic.element:record:name:first") + " " +
        iSymbolTable.translateProperties("mic.element:record:name:last") + "\n");
  }
}
```

#### 5. XML Template Execution: `<& ... &>`

Execute reusable XML templates for method generation, etc.

```java
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Main execution method</document>
     <argument type="String" name="aInput" document="Input parameter"/>
   </method>
&>
```

This loads and executes the `com.esarks.arm.scripts.Method` script with the provided XML data, generating a method signature.

#### 6. Inline Script Execution: `<$ script.name $>`

Execute another script inline:

```java
<$ com.esarks.util.GenerateImports $>
```

#### 7. Setting Property Values Dynamically

```java
// Set property value
<!record!>!set(12345);
<!record:name:first!>!set("John");
<!record:name:last!>!set("Smith");

// Reset iterator
<!record!>!resetIterator();

// Iterate
while (<!record!>!next()) {
  String id = <![record]!>;
  String name = <![record:name:first]!>;
}
```

### Property Collection Methods

When you access `<!property!>`, you get a PropertyValue object with these methods:

| Method | Purpose | Example |
|--------|---------|---------|
| `!set(value)` | Set the value | `<!record:id!>!set(12345);` |
| `!size()` | Get collection size | `if (<!records!>!size() > 0)` |
| `!resetIterator()` | Reset to first | `<!records!>!resetIterator();` |
| `!next()` | Move to next | `while (<!records!>!next())` |
| `!getIterator()` | Get current index | `int idx = <!records!>!getIterator();` |
| `!toString()` | Get string value | `String val = <!prop!>!toString();` |

---

## Passing Arguments

### Command-Line Arguments

When running JAC from command line:

```batch
bin\Jrun.bat MyScript.jrun arg1 arg2 arg3
```

Arguments accessible via:
- JAC processes the .jrun file
- Arguments passed to script's execute method as defined

### .jrun File Arguments

See [The .jrun File: Script Startup](#the-jrun-file-script-startup) section for:
- Single argument (`argument="value"`)
- Two arguments (`argument="val1" argument2="val2"`)
- Array arguments (`<args><arg>val1</arg><arg>val2</arg></args>`)

### Special Argument: `PENDINGthis`

The special value `PENDINGthis` passes the .jrun file path itself:

```xml
<jacrun script="com.esarks.jac.make.MakeAll"
        method="execute"
        argument="PENDINGthis" />
```

In the script:
```java
public void execute(String aXmlPath) {
    // aXmlPath = full path to the .jrun file
    // Can be used to load related files:
    String dir = new File(aXmlPath).getParent();
    String xmlFile = dir + "/config.xml";
}
```

---

## Calling Other Scripts and Components

### Loading and Executing Scripts

#### Method 1: loadScript()

```java
// Load a script instance
Object myScript = loadScript("com.esarks.util.Helper");

// Execute a method
iScript.execMethod(myScript, "processData");

// Execute with arguments
iScript.execMethod(myScript, "processData", new Object[]{"arg1", "arg2"});

// Unload when done
unloadScript("com.esarks.util.Helper");
```

#### Method 2: load Directive

```java
// In directive section at top of .script file
load com.esarks.util.Helper,helperInstance
end

// Later in code, helperInstance is available
helperInstance.processData();
```

### Script Inheritance

```java
// In directive section
extends com.esarks.arm.scripts.MicScriptComponent
end
```

Your script inherits from MicScriptComponent and gains access to:
- `iScript` - The Script object
- `iOutputManager` - Output management
- Helper methods like `path()`, `workPath()`, `homePath()`

### Using Components from Other Scripts

#### Direct Instantiation

```java
com.esarks.util.FileHelper fileHelper =
    new com.esarks.util.FileHelper(iScript);
fileHelper.copyFile(source, dest);
```

#### Loading via Script System

```java
Object helper = loadScript("com.esarks.util.FileHelper");
iScript.execMethod(helper, "copyFile", new Object[]{source, dest});
```

### Chaining Scripts with .jrun

```xml
<jacrun>
  <!-- Step 1: Initialize -->
  <script name="com.esarks.setup.Initialize" method="setup" />

  <!-- Step 2: Process data -->
  <script name="com.esarks.process.DataProcessor"
          method="execute"
          argument="data.xml" />

  <!-- Step 3: Generate reports -->
  <script name="com.esarks.reports.Generator"
          method="generate"
          argument="output.html" />

  <!-- Step 4: Cleanup -->
  <script name="com.esarks.cleanup.Finalizer" method="cleanup" />
</jacrun>
```

---

## Framework Features for Script Creation

### MicScriptComponent Base Class

Most scripts extend `com.esarks.arm.scripts.MicScriptComponent`, which provides:

#### Path Helpers

```java
// Get path relative to application directory
String appPath = path("data/config.xml");

// Get path relative to work directory (compiled classes)
String classPath = workPath("com/esarks/example");

// Get path relative to JAC home
String homePath = homePath("lib/custom.jar");

// Get path relative to scripts directory
String scriptPath = scriptsPath("com/esarks/templates");

// Argument path resolution (handles relative paths)
String resolved = argPath("", "config.xml");
```

#### Symbol Table Access

```java
// Get the symbol table
SymbolTable st = iScript.getSymbolTable();

// Get property collection
PropertyCollection pc = st.getPropertyCollection();

// Add a property
pc.addPropertyValue("my:property", new PropertyValue("value"));

// Get a property value
String value = pc.getPropertyValue("my:property", 0).toString();

// Remove a property
pc.removePropertyValue("my:property");

// Translate property references in a string
String result = st.translateProperties("Path is <![my:property]!>");
```

#### Output Management

```java
// Print to output
iOutputManager.print("Hello World\n");
iOutputManager.println("Hello World");

// Print to output with optional bypass
iOutputManager.print("Hello", true);  // bypasses some formatting

// Check if JSP mode
if (iOutputManager.isJspOpen()) {
    // Generate HTML-friendly output
}
```

#### Script Loading

```java
// Load another script
Object other = loadScript("com.esarks.other.Script");

// Execute method on loaded script
iScript.execMethod(other, "methodName");

// With arguments
iScript.execMethod(other, "methodName", new Object[]{"arg1", 123});

// Unload script
unloadScript("com.esarks.other.Script");
```

### Method Generation Templates

JAC provides XML templates for generating common method patterns:

#### Standard Method

```java
<& com.esarks.arm.scripts.Method
   <method name="processData" visibility="public" return="void">
     <document>Process the data records</document>
     <argument type="String" name="aInput" document="Input file path"/>
     <argument type="boolean" name="aDebug" document="Enable debug mode"/>
   </method>
&>

    // Method body goes here
    System.out.println("Processing: " + aInput);
    if (aDebug) {
        System.out.println("Debug mode enabled");
    }

<& com.esarks.arm.scripts.FinalReturnMethod &>
```

Generates:
```java
public void processData(String aInput, boolean aDebug) {
    // Method body
    System.out.println("Processing: " + aInput);
    if (aDebug) {
        System.out.println("Debug mode enabled");
    }
}
```

#### Method with Return Value

```java
<& com.esarks.arm.scripts.Method
   <method name="calculate" visibility="public" return="int">
     <document>Calculate result</document>
     <argument type="int" name="aValue" document="Input value"/>
   </method>
&>

    int result = aValue * 2;

<& com.esarks.arm.scripts.FinalReturnMethod
   <return>result</return>
&>
```

Generates:
```java
public int calculate(int aValue) {
    int result = aValue * 2;
    return result;
}
```

### Exception Handling

```java
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Execute with exception handling</document>
   </method>
&>

    try {
        // Your code here
    } catch (Exception e) {
        System.err.println("Error: " + e.getMessage());
        e.printStackTrace();
    }

<& com.esarks.arm.scripts.FinalReturnMethod
   <return suppressExceptionReport="true"/>
&>
```

---

## Generators and MakeAll Workflow

### Generator Pattern

JAC generators follow a standard pattern for code generation:

1. **Load Component Inventory** (XML/JSON with component definitions)
2. **Load Component Definition** (specific component details)
3. **Generate Code** using templates
4. **Write Output** to files (DDL, Java classes, etc.)

### Component Inventory Structure

**GenerateComponents.xml:**
```xml
<componentInventory>
  <component name="FAMILIES" type="SqlTable">
    <table name="AllowanceAlley_Families">
      <column name="FamilyID" type="INTEGER" primaryKey="true"/>
      <column name="FamilyName" type="VARCHAR" length="100"/>
      <column name="CreatedDate" type="TIMESTAMP"/>
    </table>
  </component>

  <component name="FAMILY_MEMBERS" type="SqlTable">
    <table name="AllowanceAlley_FamilyMembers">
      <column name="MemberID" type="INTEGER" primaryKey="true"/>
      <column name="FamilyID" type="INTEGER" foreignKey="FAMILIES.FamilyID"/>
      <column name="FirstName" type="VARCHAR" length="50"/>
      <column name="Role" type="VARCHAR" length="20"/>
    </table>
  </component>
</componentInventory>
```

### MakeAll Configuration

**GenerateMake.xml:**
```xml
<makeAll>
  <!-- Force full rebuild -->
  <force>true</force>

  <!-- Point to component inventory -->
  <componentInventory>com.esarks.examples.generatemake.GenerateComponents</componentInventory>

  <!-- List components to build (in order) -->
  <component>FAMILIES</component>
  <component>FAMILY_MEMBERS</component>
  <component>CHORES</component>
  <component>CHORE_ASSIGNMENTS</component>
</makeAll>
```

### Running MakeAll

**RunMakeAll.jrun:**
```xml
<jacrun script="com.esarks.jac.make.MakeAll"
        method="execute"
        argument="com.esarks.examples.generatemake.GenerateMake"
        argument2="true" />
```

Execute:
```batch
bin\Jrun.bat RunMakeAll.jrun
```

### MakeAll Process Flow

```
1. Load GenerateMake.xml
   ↓
2. Parse makeAll configuration
   ↓
3. Load componentInventory (GenerateComponents.xml)
   ↓
4. For each <component>:
   ├── Find component definition in inventory
   ├── Check dependencies
   ├── Determine component type (SqlTable, Report, Dtable, etc.)
   ├── Call appropriate generator script
   │   ├── GenerateDDL.script (for database tables)
   │   ├── GenerateJEO.script (for Java Entity Objects)
   │   ├── GenerateCRUD.script (for CRUD services)
   │   └── GenerateReport.script (for reports)
   ├── Write generated files
   └── Compile if needed
   ↓
5. Generate build log
   ↓
6. Done
```

### Creating a Custom Generator

**MyGenerator.script:**
```java
context micScriptComponent

// Load the component inventory
xml <componentInventory package="com.example.myapp">
      <component name="MyComponent" type="Custom">
        <property name="title" value="My Custom Component"/>
      </component>
    </componentInventory>

end

<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Generate custom component</document>
     <argument type="String" name="aComponentName" document="Component name"/>
   </method>
&>

    // Load specific component definition
    String xmlPath = path("components/" + aComponentName + ".xml");
    iScript.getSymbolTable().parseXml(xmlPath);

    // Open output file
    String outputPath = workPath("com/example/generated/" + aComponentName + ".java");
    iOutputManager.open(outputPath, false);

    // Generate code using template
    %>
package com.example.generated;

/**
 * Generated component: <![component:title]!>
 * Auto-generated by MyGenerator
 * Date: <![jac:dateTime]!>
 */
public class <![component:name]!> {

    // Properties
    <!component:property!>& {
    private String <![component:property:name]!> = "<![component:property:value]!>";
    }

    // Constructor
    public <![component:name]!>() {
        System.out.println("Initialized <![component:title]!>");
    }

    // Methods
    public void execute() {
        <!component:property!>& {
        System.out.println("<![component:property:name]!> = " + <![component:property:name]!>);
        }
    }
}
    <%

    // Close output file
    iOutputManager.close();

    System.out.println("Generated: " + outputPath);

<& com.esarks.arm.scripts.FinalReturnMethod &>
```

---

## Complete Examples

### Example 1: Simple HelloWorld

**HelloWorld.jrun:**
```xml
<jacrun script="com.example.HelloWorld" method="execute" />
```

**HelloWorld.script:**
```java
source conf/ScriptPrefix.script
end

<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Print Hello World message</document>
   </method>
&>

%>
=================================
Hello World from JAC!
Generated at: <![jac:dateTime]!>
=================================
<%

<& com.esarks.arm.scripts.FinalReturnMethod &>
```

**Output:**
```
=================================
Hello World from JAC!
Generated at: 2025.10.27 02:15:30.456 AM EDT
=================================
```

### Example 2: Processing Data from XML

**ProcessRecords.jrun:**
```xml
<jacrun script="com.example.ProcessRecords" method="execute" />
```

**ProcessRecords.xml:**
```xml
<data>
  <record id="1" status="active">
    <name>John Doe</name>
    <email>john@example.com</email>
  </record>
  <record id="2" status="inactive">
    <name>Jane Smith</name>
    <email>jane@example.com</email>
  </record>
  <record id="3" status="active">
    <name>Bob Johnson</name>
    <email>bob@example.com</email>
  </record>
</data>
```

**ProcessRecords.script:**
```java
context micScriptComponent
end

<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Process records from XML</document>
   </method>
&>

    // Count active records
    int activeCount = 0;
    int inactiveCount = 0;

    <!data:record!>& {
        String status = <![data:record:status]!>;
        if (status.equals("active")) {
            activeCount++;
        } else {
            inactiveCount++;
        }
    }

    // Generate report
    %>
========================================
RECORD PROCESSING REPORT
========================================
Total Records: <!data:record!>!size()
Active: <%=activeCount%>
Inactive: <%=inactiveCount%>

ACTIVE RECORDS:
========================================
<%

    // List active records
    <!data:record!>& {
        if (<![data:record:status]!>.equals("active")) {
            %>
ID: <![data:record:id]!>
Name: <![data:record:name]!>
Email: <![data:record:email]!>
----------------------------------------
<%
        }
    }

<& com.esarks.arm.scripts.FinalReturnMethod &>
```

### Example 3: Generating Java Classes

**GenerateJavaClass.jrun:**
```xml
<jacrun script="com.example.GenerateJavaClass"
        method="execute"
        argument="MyCustomer" />
```

**GenerateJavaClass.script:**
```java
context micScriptComponent

xml <class package="com.example.entities">
      <property name="id" type="int"/>
      <property name="name" type="String"/>
      <property name="email" type="String"/>
      <property name="active" type="boolean"/>
    </class>

end

<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Generate a Java class</document>
     <argument type="String" name="aClassName" document="Class name"/>
   </method>
&>

    // Set the class name
    <!class:name!>!set(aClassName);

    // Open output file
    String outputPath = workPath("com/example/entities/" + aClassName + ".java");
    iOutputManager.open(outputPath, false);

    %>
package <![class:package]!>;

import java.io.Serializable;

/**
 * Auto-generated entity class: <![class:name]!>
 * Generated by: GenerateJavaClass
 * Date: <![jac:dateTime]!>
 */
public class <![class:name]!> implements Serializable {

    // Properties
    <!class:property!>& {
    private <![class:property:type]!> <![class:property:name]!>;
    }

    // Default constructor
    public <![class:name]!>() {
    }

    // Getters and Setters
    <!class:property!>& {
    public <![class:property:type]!> get<!class:property:name!>!toString().substring(0,1).toUpperCase() + <!class:property:name!>!toString().substring(1)() {
        return <![class:property:name]!>;
    }

    public void set<!class:property:name!>!toString().substring(0,1).toUpperCase() + <!class:property:name!>!toString().substring(1)(<![class:property:type]!> <![class:property:name]!>) {
        this.<![class:property:name]!> = <![class:property:name]!>;
    }

    }
    // toString method
    @Override
    public String toString() {
        return "<![class:name]!>{" +
                <!class:property!>& {
                "<![class:property:name]!>=" + <![class:property:name]!> + <!class:property!>!getIterator() < <!class:property!>!size() PENDING ", " : ""
                }
                "}";
    }
}
    <%

    iOutputManager.close();
    System.out.println("Generated: " + outputPath);

<& com.esarks.arm.scripts.FinalReturnMethod &>
```

### Example 4: Script Calling Another Script

**MasterScript.jrun:**
```xml
<jacrun script="com.example.MasterScript" method="execute" />
```

**MasterScript.script:**
```java
context micScriptComponent

load com.example.utilities.Logger,logger

end

<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Master orchestration script</document>
   </method>
&>

    System.out.println("Starting master process...");

    // Use loaded logger
    logger.log("Master process started");

    // Load and execute step 1
    System.out.println("\n=== Step 1: Initialize ===");
    Object step1 = loadScript("com.example.steps.Initialize");
    iScript.execMethod(step1, "execute");
    unloadScript("com.example.steps.Initialize");

    // Load and execute step 2 with argument
    System.out.println("\n=== Step 2: Process Data ===");
    Object step2 = loadScript("com.example.steps.ProcessData");
    iScript.execMethod(step2, "execute", new Object[]{"data.xml"});
    unloadScript("com.example.steps.ProcessData");

    // Load and execute step 3
    System.out.println("\n=== Step 3: Generate Report ===");
    Object step3 = loadScript("com.example.steps.GenerateReport");
    iScript.execMethod(step3, "execute");
    unloadScript("com.example.steps.GenerateReport");

    logger.log("Master process completed");
    System.out.println("\nMaster process completed successfully!");

<& com.esarks.arm.scripts.FinalReturnMethod &>
```

---

## Best Practices

### 1. Script Organization

```
project/
├── .jrun files          # Execution entry points
├── .script files        # Template source code
├── .xml/.json files     # Configuration data
└── conf/
    ├── ScriptPrefix.script
    ├── ScriptPostfix.script
    └── *.make files
```

### 2. Naming Conventions

- **Class names**: PascalCase (e.g., `GenerateReport`)
- **Method names**: camelCase (e.g., `executeGeneration`)
- **Property names**: colon-separated (e.g., `component:table:column`)
- **File names**: Match class names exactly

### 3. Error Handling

Always wrap main logic in try-catch:

```java
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Execute with error handling</document>
   </method>
&>

    try {
        // Your logic here

    } catch (Exception e) {
        System.err.println("ERROR: " + e.getMessage());
        e.printStackTrace();
        throw new RuntimeException("Script execution failed", e);
    } finally {
        // Cleanup code
        if (iOutputManager.isAnyOpen()) {
            iOutputManager.close();
        }
    }

<& com.esarks.arm.scripts.FinalReturnMethod
   <return suppressExceptionReport="true"/>
&>
```

### 4. Output Management

Always close output files:

```java
String outputPath = workPath("output.txt");
try {
    iOutputManager.open(outputPath, false);

    %>Generated content here<%

} finally {
    iOutputManager.close();
}
```

### 5. Symbol Table Best Practices

```java
// Check if property exists before accessing
if (<!component:name!>!size() > 0) {
    String name = <![component:name]!>;
} else {
    System.err.println("WARNING: component:name not found");
}

// Always reset iterator before looping
<!records!>!resetIterator();
while (<!records!>!next()) {
    // Process each record
}
```

### 6. Documentation

Always document your scripts:

```java
<& com.esarks.arm.scripts.Method
   <method name="processData" visibility="public" return="void">
     <document>
       Process data from XML file and generate output report.

       Prerequisites:
       - data.xml must exist in current directory
       - Output directory must be writable

       Output:
       - Generates report.html in work directory
     </document>
     <argument type="String" name="aInputFile" document="Path to input XML file"/>
   </method>
&>
```

### 7. Testing

Create test .jrun files for different scenarios:

```
MyScript.jrun              # Main execution
MyScript_Test.jrun         # Test with sample data
MyScript_Debug.jrun        # Debug mode with pauses
MyScript_Minimal.jrun      # Minimal test case
```

### 8. Version Control

Store in version control:
- `.jrun` files
- `.script` files
- `.xml/.json` configuration files
- `.make` files
- Documentation

Do NOT store:
- Generated `.java` files (in `work/` directory)
- Compiled `.class` files
- Build logs

### 9. Performance Tips

```java
// Cache frequently accessed values
String packageName = <![component:package]!>;
String className = <![component:name]!>;

// Avoid repeated property lookups in loops
<!records!>& {
    // GOOD: Access once per iteration
    String name = <![records:name]!>;
    System.out.println(name);
}

// BAD: Multiple lookups
<!records!>& {
    System.out.println(<![records:name]!>);
    System.out.println(<![records:name]!>);
    System.out.println(<![records:name]!>);
}
```

### 10. Debugging

Add debug output:

```java
// At strategic points
System.err.println("DEBUG: Processing component: " + <![component:name]!>);
System.err.println("DEBUG: Property count: " + <!component:property!>!size());

// Dump symbol table section
<!component!>& {
    System.err.println("DEBUG: component[" + <!component!>!getIterator() + "] = " +
                       <![component]!>);
}
```

Use pause in .jrun:

```xml
<jacrun>
  <script name="com.example.MyScript" method="execute">
    <pause>true</pause>
  </script>
</jacrun>
```

---

## Summary

JAC provides a powerful system for dynamic code generation combining:

1. **`.jrun` files** - Define what to run, which method, and what arguments
2. **`.script` files** - Template source with mixed Java/JAC/XML syntax
3. **`.xml/.json` files** - Configuration data that populates symbol table
4. **Script directives** - Control compilation (source, import, xml, etc.)
5. **JAC syntax** - Property access, iteration, and output generation
6. **Framework components** - Base classes, helpers, and template generators
7. **MakeAll workflow** - Orchestrate complex multi-component builds

With this knowledge, you can:
- Write robust JAC scripts for code generation
- Process XML/JSON data using the symbol table
- Pass arguments between scripts
- Call other scripts and components
- Create generators that work with MakeAll
- Build complete application generation systems

For more information, see:
- [Jrun.md](Jrun.html) - Detailed .jrun execution flow
- [MakeAll.md](MakeAll.html) - MakeAll system documentation
- [JacBuild24-Specializations.md](JacBuild24-Specializations.html) - Advanced techniques
- [build-system.md](build-system.html) - Build system reference

---

**End of Document**
