---
title: "build system"
---

# JAC Build System: Complete Technical Deep Dive

**Document Version:** 1.0
**Last Updated:** 2025-10-23
**Audience:** JAC Developers, Build Engineers, System Architects

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture Components](#architecture-components)
3. [The .jrun File Format](#the-jrun-file-format)
4. [The .make File System](#the-make-file-system)
5. [Configuration Files](#configuration-files)
6. [The Complete Build Lifecycle](#the-complete-build-lifecycle)
7. [Script Compilation Process](#script-compilation-process)
8. [ScriptWriter State Machine](#scriptwriter-state-machine)
9. [Code Merging and Preservation](#code-merging-and-preservation)
10. [Dynamic Class Loading](#dynamic-class-loading)
11. [XML/JSON-Driven Component Generation](#xmljson-driven-component-generation)
12. [Examples and Patterns](#examples-and-patterns)
13. [Troubleshooting](#troubleshooting)

---

## Overview

The JAC (Java Architects Companion) build system is a sophisticated compilation framework that transforms mixed-syntax script files (`.script`) into standard Java classes through a multi-stage process involving template expansion, code generation, and dynamic compilation.

### Key Capabilities

- **Template-Based Generation**: Mix Java code with JAC directives and XML
- **Dynamic Compilation**: JIT compilation of generated Java source
- **Code Preservation**: Maintain custom code across regeneration cycles
- **Context-Driven Builds**: Different build configurations via context files
- **Incremental Compilation**: Only rebuild when source files change
- **Reverse Merging**: Preserve manual changes in generated files

### Build System Philosophy

JAC follows a **source-to-runtime** compilation model:

```
.script files (mixed syntax)
    ↓ [ScriptWriter transformation]
.java files (pure Java)
    ↓ [javac compilation]
.class files (bytecode)
    ↓ [Dynamic class loading]
Runtime execution
```

---

## Architecture Components

### Core Classes

| Class | Role | Location |
|-------|------|----------|
| `jac.java` | CLI bootstrap, command-line argument processing | `com.esarks.jac` |
| `Script.java` | Compilation orchestrator, build lifecycle manager | `com.esarks.jac` |
| `ScriptWriter.java` | Template transformation engine (13-state parser) | `com.esarks.jac` |
| `ScriptHelper.java` | Base class providing runtime utilities | `com.esarks.jac` |
| `SymbolTable.java` | Property storage and XML/JSON parsing | `com.esarks.jac` |
| `OutputManager.java` | Output stream management | `com.esarks.jac` |
| `Merge.java` | Code section preservation during regeneration | `com.esarks.jac` |

### Directory Structure

```
jacBuild24/
├── bin/
│   ├── jac.bat              # Windows launcher
│   └── jac.sh               # Unix launcher
├── classes/                 # Compiled .class files (output)
├── conf/                    # Build configuration files
│   ├── jac.make            # Default JAC context
│   ├── mic.make            # MIC framework context
│   ├── jeo.make            # JEO entity context
│   ├── ScriptImport.script # Standard imports
│   ├── ScriptPrefix.script # Class preamble
│   └── ScriptPostfix.script# Class postfix
├── lib/                     # Runtime libraries (JARs)
├── source/
│   ├── java/               # JAC compiler source
│   └── scripts/            # ARM template scripts
└── work/                    # Temporary build files
```

---

## The .jrun File Format

### Purpose

A `.jrun` file is a **runtime execution descriptor** that specifies:
1. Which script class to load
2. Which method to invoke
3. Optional execution parameters

### File Structure (XML)

```xml
<jacrun script="package.ClassName" method="methodName" />
```

### Example: HelloWorld.jrun

```xml
<jacrun script="paul.HelloWorld" method="execute" />
```

This instructs JAC to:
1. Load the compiled class `paul.HelloWorld`
2. Invoke the `execute()` method
3. Execute the method's logic

### Usage Pattern

```powershell
# Navigate to directory containing .jrun file
cd C:\path\to\app\paul

# Double-click HelloWorld.jrun (if file association set)
# OR run via command line
java -jar ..\..\jacBuild24\bin\jac.jar HelloWorld.jrun
```

### .jrun with Arguments

More complex `.jrun` files can specify arguments:

```xml
<jacrun script="com.example.DataProcessor" method="process">
    <argument>input.xml</argument>
    <argument>output.xml</argument>
</jacrun>
```

### Internal Processing

When JAC encounters a `.jrun` file:

1. **Parse XML**: Extract `script` and `method` attributes
2. **Build Script**: Compile if stale (checks `.script`, `.make`, `.class` timestamps)
3. **Load Class**: Use custom ClassLoader to load compiled bytecode
4. **Invoke Method**: Use Java Reflection to call specified method
5. **Capture Output**: Route output through OutputManager

---

## The .make File System

### Purpose

A `.make` file defines **how to build a script** by specifying:
- Source files to include
- Base class to extend
- Imports to add
- Build directives

### File Structure (Line-based directives)

```
extends <base-class-name>
source <file-path-with-properties>
import <package.ClassName>
var <variable-declaration>
set <property>=<value>
```

### Example: jac.make

```
extends com.esarks.jac.ScriptHelper
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]ScriptImport.script
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]ScriptPrefix.script
source [$jac:path:scripts][$jac:fileSeparator][$jac:script:path][$jac:fileSeparator][$jac:script].script
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]ScriptPostfix.script
```

### Directive Reference

#### `extends <class-name>`

Specifies the base class for generated Java class.

```
extends com.esarks.jac.ScriptHelper
```

Generates:
```java
public class MyScript extends com.esarks.jac.ScriptHelper {
    // ...
}
```

#### `source <file-path>`

Include source file in build. Supports property interpolation.

```
source [$jac:path:home]/conf/ScriptImport.script
```

#### `script <script-name>`

Include another script file (shorthand for `source` with `.script` extension).

```
script com.example.HelperScript
```

Equivalent to:
```
source [$jac:path:scripts]/com/example/HelperScript.script
```

#### `import <package.Class>`

Add import statement to generated Java file.

```
import java.util.*
import org.eclipse.jetty.server.Server
```

#### `var <declaration>`

Declare instance variable in generated class.

```
var private String myVariable = "default"
var protected int counter = 0
```

#### `set <property>=<value>`

Set property value in SymbolTable (available during build).

```
set $custom:property=myValue
set debug=true
```

#### `xml <inline-xml>`

Parse inline XML into SymbolTable.

```
xml <config><option name="verbose">true</option></config>
```

#### `load <script-name>,<method-name>`

Load and execute another script during build.

```
load com.example.ConfigLoader,loadConfig
```

#### `make <file-path>`

Use alternate `.make` file.

```
make [$jac:path:home]/conf/custom.make
```

#### `context <context-name>`

Use named context file from `conf/` directory.

```
context jeo
```

Loads: `$jac:path:home/conf/jeo.make`

#### `merge <script-name>`

Merge sections from another script into this one.

```
merge com.example.BaseScript
```

### Context Files

JAC includes several predefined contexts in `conf/`:

| Context | Purpose | Base Class |
|---------|---------|------------|
| `jac.make` | Standard scripts | `ScriptHelper` |
| `mic.make` | MIC framework scripts | MIC-specific |
| `jeo.make` | JEO entity scripts | Entity base |
| `micScriptView.make` | MIC views | View base |
| `micScriptModel.make` | MIC models | Model base |
| `micScriptEntity.make` | MIC entities | Entity base |

---

## Configuration Files

### ScriptImport.script

Located in `conf/`, this file provides standard imports for all scripts:

```java
package <#[$jac:script:package]#>;

import java.util.*;
import java.lang.reflect.*;
import java.io.*;
import java.text.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;

import com.esarks.jac.*;
import com.esarks.mic.*;

<#import#>
```

**Key Features:**
- `<#[$jac:script:package]#>` - Inserts script's package declaration
- `<#import#>` - Placeholder for additional imports from `.make` file

### ScriptPrefix.script

Prepended to every script (typically empty or minimal).

### ScriptPostfix.script

Appended to every script (typically empty or minimal).

### Property Interpolation

Files can reference built-in properties using `[$property:name]` syntax:

| Property | Value | Example |
|----------|-------|---------|
| `$jac:path:home` | JAC home directory | `C:\...\jacBuild24` |
| `$jac:path:work` | Build output directory | `C:\...\jacBuild24\work` |
| `$jac:path:scripts` | Scripts directory | `C:\...\app` |
| `$jac:fileSeparator` | OS file separator | `\` or `/` |
| `$jac:script` | Script name | `HelloWorld` |
| `$jac:script:package` | Script package | `com.example` |
| `$jac:script:path` | Script directory path | `com\example` |

---

## The Complete Build Lifecycle

### Phase 1: Initialization (jac.java)

```
User invokes: jac.bat HelloWorld.script
    ↓
jac.java:main(String[] args)
    ↓
Parse command-line arguments:
  - -classpath
  - -home (JAC installation directory)
  - -work (build output directory)
  - -scripts (source scripts directory)
  - -script (script to compile/run)
  - -method (method to invoke)
  - -context (build context)
  - -debug (debug level)
    ↓
Create Script instance with license validation
    ↓
Populate SymbolTable with $jac:* properties
```

### Phase 2: Build Decision (Script.java)

```
Script.buildScript(scriptName, context, compile)
    ↓
Parse script file header for directives:
  - source, import, extends, implements, set, make, context
    ↓
Determine staleness:
  1. Check if .class file exists
  2. Compare timestamps:
     - .script newer than .classPENDING → STALE
     - .make newer than .classPENDING → STALE
     - Any source file newer than .classPENDING → STALE
  3. Check forceMake flag
    ↓
If STALE or forceMake:
  → Proceed to Phase 3
Else:
  → Skip to Phase 5
```

**Staleness Check Algorithm:**

```java
boolean lStale = false;
File lClassFile = new File(workPath + "/" + scriptPath + "/" + scriptName + ".class");
File lMakeFile = new File(scriptsPath + "/" + scriptPath + "/" + scriptName + ".make");
File lScriptFile = new File(scriptsPath + "/" + scriptPath + "/" + scriptName + ".script");

// Class doesn't exist - must build
if (!lClassFile.exists()) lStale = true;

// .make file newer than .class
if (lMakeFile.exists() && lClassFile.exists() &&
    lMakeFile.lastModified() > lClassFile.lastModified()) lStale = true;

// .script file newer than .class
if (lScriptFile.exists() && lClassFile.exists() &&
    lScriptFile.lastModified() > lClassFile.lastModified()) lStale = true;

// Any source file newer than .class
for (String sourceFile : sourceFiles) {
    File f = new File(sourceFile);
    if (f.exists() && lClassFile.exists() &&
        f.lastModified() > lClassFile.lastModified()) lStale = true;
}
```

### Phase 3: Script Generation (Script.java + ScriptWriter.java)

```
Script.makeScript(scriptName, compile)
    ↓
1. Create output directory structure
   mkdir -p work/package/path
    ↓
2. Open output streams:
   - .java file (generated source)
   - .txt file (build log)
    ↓
3. Instantiate ScriptWriter with PrintWriter
    ↓
4. For each source file in $jac:script:source:
     a. Open source file
     b. Read line by line
     c. ScriptWriter.processLine(line, lineNumber)
        → Transform via 13-state parser
        → Write to .java file
    ↓
5. Close output streams
```

### Phase 4: Java Compilation (Script.java)

```
If compile == true:
  ↓
  Construct javac command:
    javac -classpath [classpath]
          -d [work-dir]
          [source.java]
    ↓
  Execute javac via Runtime.exec()
    ↓
  Check for compilation errors
    ↓
  If errors:
    → Print errors to output
    → Throw RuntimeException
  Else:
    → .class file created in work/package/path/
```

**Classpath Construction:**

```java
String classpath =
    jacHome + "/lib/*" + pathSeparator +
    jacHome + "/classes" + pathSeparator +
    workPath + pathSeparator +
    customClasspath;
```

### Phase 5: Dynamic Class Loading (Script.java)

```
Script.execMethod(scriptName, methodName, args)
    ↓
1. Get or create AcClassLoader (custom ClassLoader)
    ↓
2. Load compiled class:
   Class<PENDING> clazz = classLoader.loadClass(packageName + "." + scriptName)
    ↓
3. Create instance:
   Object instance = clazz.getDeclaredConstructor().newInstance()
    ↓
4. Find method via reflection:
   Method method = clazz.getMethod(methodName, paramTypes)
    ↓
5. Invoke method:
   method.invoke(instance, args)
    ↓
6. Method executes, output routed through OutputManager
```

### Phase 6: Execution and Output

```
Method execution
    ↓
Output via iOutputManager.println()
    ↓
Output appears in console/log/file
    ↓
Method returns
    ↓
Cleanup and exit
```

---

## Script Compilation Process

### Input: .script File Format

A `.script` file contains **mixed syntax**:

```java
// Header directives (optional)
source com.example.Helper.script
import org.eclipse.jetty.server.Server
extends com.esarks.jac.ScriptHelper

// JAC template directives
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Execute main logic</document>
   </method>
&>

// Standard Java code
import java.util.*;

private String myField = "value";

// Output blocks
%>
This text will be printed to output
<%

// More Java code
String result = processData();

// JAC symbol substitution
%>
Result: <!%result!>
<%

// Final return
<& com.esarks.arm.scripts.FinalReturnMethod &>
```

### Script Syntax Elements

| Syntax | Purpose | Example |
|--------|---------|---------|
| `<& ... &>` | JAC/ARM directive (execute sub-script) | `<& com.esarks.arm.scripts.Method &>` |
| `%> ... <%` | Output block (print to OutputManager) | `%>Hello World<%` |
| `<!% ... !>` | Java variable interpolation | `<!%variableName!>` |
| `<![ ... ]!>` | Property access (get value) | `<![property:name]!>` |
| `<# ... #>` | Property substitution (translate) | `<#[$jac:script]#>` |
| `<! ... !>` | Property object (get reference) | `<!property:name!>` |
| `<: ... :>` | Cast to Script | `<:scriptName:>` |
| `<:: ... ::>` | Cast to ScriptHelper | `<::scriptName::>` |

### Output: .java File

After transformation, pure Java source is generated:

```java
package com.example;

import java.util.*;
import java.io.*;
import com.esarks.jac.*;

public class MyScript extends com.esarks.jac.ScriptHelper {

    private String myField = "value";

    public void execute() {
        try {
            iOutputManager.println("This text will be printed to output");

            String result = processData();

            iOutputManager.println("Result: " + result);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Additional generated methods...
}
```

---

## ScriptWriter State Machine

### Overview

`ScriptWriter` is a **13-state finite state machine** that parses mixed-syntax script files character-by-character and generates pure Java source code.

### State Definitions

| State ID | State Name | Purpose |
|----------|------------|---------|
| 1 | `JAVA_CODE` | Normal Java code (pass-through) |
| 2 | `OUTPUT` | Inside `%> ... <%` output block |
| 3 | `JAVA_SYMBOL` | Inside `<!% ... !>` variable interpolation |
| 4 | `JAVA_RECURSIVE_SYMBOL` | Inside `<!![...]!>` recursive property |
| 5 | `JAC_SYMBOL` | Inside `<![...]!>` property access |
| 6 | `TRANSLATE_SYMBOL` | Inside `<#[...]#>` property substitution |
| 7 | `EXECSCRIPT` | Inside `<& ... &>` sub-script execution |
| 8 | `XML` | Inside XML processing directive |
| 9 | `CASTSCRIPTHELPER` | Inside `<:: ... ::>` ScriptHelper cast |
| 10 | `CASTSCRIPT` | Inside `<: ... :>` Script cast |
| 11 | `NOTRANSLATION` | No translation mode |
| 12 | `NOTRANSLATIONEXEC` | No translation exec mode |
| 13 | `NOTRANSLATIONXML` | No translation XML mode |

### State Transitions

```
     ┌─────────────┐
     │  JAVA_CODE  │ ◄───────────────────┐
     │   (start)   │                     │
     └─────┬───────┘                     │
           │                             │
    Detect special sequence          All others
           │                             │
           ▼                             │
   ┌───────────────────┐                │
   │  State Detector   │                │
   └─────┬──┬──┬──┬────┘                │
         │  │  │  │                     │
     ┌───┘  │  │  └─────┐               │
     ▼      ▼  ▼        ▼               │
  OUTPUT JAC  JAVA  EXECSCRIPT          │
  (%>)  SYMBOL SYMBOL  (<&)             │
        (<![) (<!%)                     │
         │      │        │               │
         └──────┴────────┴───────────────┘
           Closing sequence detected
```

### Example Transformation

**Input:**
```java
%>Hello World<%
String name = "JAC";
%>Welcome to <!%name!><%
```

**State Transitions:**
```
1. JAVA_CODE (start)
2. Detect "%>" → transition to OUTPUT
   Generate: iOutputManager.println("
3. OUTPUT mode: read "Hello World"
   Generate: Hello World
4. Detect "<%" → transition to JAVA_CODE
   Generate: ");
5. JAVA_CODE: read "String name = \"JAC\";"
   Generate: String name = "JAC";
6. Detect "%>" → transition to OUTPUT
   Generate: iOutputManager.println("
7. OUTPUT mode: read "Welcome to "
   Generate: Welcome to
8. Detect "<!%" → transition to JAVA_SYMBOL
9. JAVA_SYMBOL: read "name"
   Generate: " + name + "
10. Detect "!>" → transition to OUTPUT
11. Detect "<%" → transition to JAVA_CODE
    Generate: ");
```

**Output:**
```java
iOutputManager.println("Hello World");
String name = "JAC";
iOutputManager.println("Welcome to " + name + "");
```

### Character-by-Character Processing

```java
public void processLine(String aLine, int aLineNumber) {
    for (int lIdx = 0; lIdx < aLine.length(); lIdx++) {
        char lThisChar = aLine.charAt(lIdx);
        char lNextChar = (lIdx + 1 < aLine.length()) PENDING aLine.charAt(lIdx + 1) : 0;

        switch (lState) {
            case JAVA_CODE:
                if (lThisChar == '%' && lNextChar == '>') {
                    lState = OUTPUT;
                    print(iOutputManagerSymbol + ".println(\"");
                    lIdx++; // Consume both characters
                } else if (lThisChar == '<' && lNextChar == '%') {
                    // Already in JAVA_CODE, this shouldn't happen
                } else {
                    print(lThisChar); // Pass through
                }
                break;

            case OUTPUT:
                if (lThisChar == '<' && lNextChar == '%') {
                    lState = JAVA_CODE;
                    println("\");");
                    lIdx++; // Consume both characters
                } else if (lThisChar == '<' && lNextChar == '!' && ...) {
                    // Transition to symbol states
                } else {
                    print(lThisChar); // Add to output string
                }
                break;

            // ... other states
        }
    }
}
```

---

## Code Merging and Preservation

### Purpose

When regenerating code from templates, JAC preserves manually-written custom code in marked sections.

### Section Markers

```java
//$Section=CustomCode$ID=ABC123$Preserve=yes

// Custom code here will be preserved

//$Section=CustomCode$ID=ABC123$Preserve=no
```

### Merge Process

1. **Parse Existing File**: Identify all `$Section=...` markers
2. **Extract Preserved Sections**: Save code between `$Preserve=yes` markers
3. **Generate New File**: Create fresh code from templates
4. **Merge Sections**: Insert preserved sections into new file at matching markers
5. **Write Output**: Replace existing file with merged content

### Reverse Merge

**Reverse Merge** allows JAC to detect when a generated `.java` file has been manually edited and merge those changes back into the `.script` source.

**Trigger:**
- `.java` file timestamp > `.script` file timestamp

**User Prompt:**
```
Do you want to Reverse Merge MyScript.script?
[Yes] [No] [Cancel]
```

**Process:**
1. **Read `.java` file**: Extract all `$Preserve=yes` sections
2. **Read `.script` file**: Locate corresponding sections
3. **Merge Changes**: Replace `.script` sections with `.java` content
4. **Update Timestamp**: Set `.java` timestamp = `.script` timestamp

---

## Dynamic Class Loading

### Custom ClassLoader (AcClassLoader)

JAC uses a custom `ClassLoader` to load compiled `.class` files from the `work` directory without requiring them to be in the standard classpath.

```java
public class AcClassLoader extends ClassLoader {
    private String classPath;

    public Class<PENDING> loadClass(String name) throws ClassNotFoundException {
        // Convert package.ClassName to package/ClassName.class
        String path = classPath + "/" + name.replace('.', '/') + ".class";

        // Read .class file into byte array
        byte[] classData = loadClassData(path);

        // Define class from bytecode
        return defineClass(name, classData, 0, classData.length);
    }
}
```

### Class Loading Sequence

```
execMethod("com.example.MyScript", "execute")
    ↓
AcClassLoader.loadClass("com.example.MyScript")
    ↓
Read: work/com/example/MyScript.class
    ↓
defineClass(name, bytecode, offset, length)
    ↓
Class<PENDING> clazz (in memory)
    ↓
clazz.getDeclaredConstructor().newInstance()
    ↓
Object instance
    ↓
Method method = clazz.getMethod("execute")
    ↓
method.invoke(instance)
    ↓
Execution
```

---

## XML/JSON-Driven Component Generation

### Overview

One of JAC's most powerful features is **declarative component generation** from XML or JSON definitions. Instead of writing repetitive Java code manually, developers define components (entities, services, views, etc.) in XML files using special tags, and JAC's ARM (Architects Resource Model) templates automatically generate complete Java classes with getters, setters, validation, and business logic.

### How It Works: The Complete Flow

```
1. XML Definition File (e.g., MyEntity_Jeo.xml)
   ↓
2. JAC Parser reads XML and populates SymbolTable
   ↓
3. SymbolTable creates hierarchical properties
   ↓
4. ARM Template Script iterates over properties
   ↓
5. Template generates Java source code
   ↓
6. Java code is compiled to .class
   ↓
7. Generated class is loaded at runtime
```

### XML Tag Types and Their Purposes

#### 1. JEO (Java Entity Objects)

**Purpose:** Define data transfer objects, POJOs, and entity beans.

**XML Structure:**
```xml
<jeos>
  <jeo name="User">
    <field name="userId" type="string" size="36" nullable="false" />
    <field name="userName" type="string" size="100" nullable="false" />
    <field name="email" type="string" size="255" nullable="true" />
    <field name="createdAt" type="datetime" nullable="false" />
    <field name="isActive" type="boolean" nullable="false" />
    <field name="loginCount" type="int" nullable="true" />
  </jeo>
</jeos>
```

**Generated Java Code:**
```java
package com.example;

import com.esarks.jac.*;
import java.util.*;

public class User extends Jeo {

  // Field: userId
  private PropertyValue iUserId = new PropertyValue();
  private boolean iUserIdIsNullable = false;
  private int iUserIdSize = 36;

  // Field: userName
  private PropertyValue iUserName = new PropertyValue();
  private boolean iUserNameIsNullable = false;
  private int iUserNameSize = 100;

  // Field: email
  private PropertyValue iEmail = new PropertyValue();
  private boolean iEmailIsNullable = true;
  private int iEmailSize = 255;

  // Constructor
  public User() {
    iInstanceName = "com.example.User";
  }

  // Getters
  public String getUserId() {
    return iUserId.getValueString();
  }

  public String getUserName() {
    return iUserName.getValueString();
  }

  public String getEmail() {
    return iEmail.getValueString();
  }

  // Setters
  public void setUserId(String aValue) {
    iUserId.reset(aValue);
  }

  public void setUserName(String aValue) {
    iUserName.reset(aValue);
  }

  public void setEmail(String aValue) {
    iEmail.reset(aValue);
  }

  // Null checking
  public boolean isUserIdNull() {
    return iUserId.getValueType() == PropertyValue.CONST_VALUE_TYPE_NULL;
  }

  public boolean isEmailNullable() {
    return iEmailIsNullable;
  }

  // XML serialization
  public String getXml() {
    StringBuffer lXml = new StringBuffer("<jeo name='User'>");
    lXml.append("<field name='userId'>").append(getUserId()).append("</field>");
    lXml.append("<field name='userName'>").append(getUserName()).append("</field>");
    lXml.append("<field name='email'>").append(getEmail()).append("</field>");
    lXml.append("</jeo>");
    return lXml.toString();
  }
}
```

**Key Generated Features:**
- Private `PropertyValue` fields for type-safe storage
- Getter/setter methods following JavaBeans conventions
- Nullable flag tracking
- Size constraints
- XML serialization/deserialization
- Reflection-based property access by name
- Equality comparison methods

#### 2. Service Components

**Purpose:** Define request/reply patterns, service interfaces, and API contracts.

**XML Structure:**
```xml
<jeos>
  <jeo name="ServiceJeo">
    <!-- Service wrapper with request, reply, and error handling -->
  </jeo>

  <jeo name="RequestJeo">
    <field name="selectClause" type="string" nullable="true" />
    <field name="fieldList" type="string" nullable="true" />
    <field name="whereClause" type="string" nullable="true" />
  </jeo>

  <jeo name="ReplyJeo">
    <!-- Reply data fields -->
  </jeo>

  <jeo name="ErrorJeo">
    <field name="id" type="string" nullable="true" />
    <field name="location" type="string" nullable="true" />
    <field name="title" type="string" nullable="true" />
    <field name="text" type="string" nullable="true" />
    <field name="severity" type="int" nullable="true" />
  </jeo>
</jeos>
```

#### 3. Views and Presentations

**Purpose:** Define UI components, report layouts, and presentation models.

**XML Structure:**
```xml
<jeos>
  <jeo name="PresentationView">
    <field name="title" type="string" />
    <field name="subtitle" type="string" />
    <field name="sections" type="collection" />
  </jeo>

  <jeo name="PresentationSection">
    <field name="header" type="string" />
    <field name="rows" type="collection" />
  </jeo>

  <jeo name="PresentationRow">
    <field name="label" type="string" />
    <field name="value" type="string" />
    <field name="format" type="string" />
  </jeo>
</jeos>
```

### XML to SymbolTable Property Mapping

When JAC parses an XML file, it creates a **hierarchical property tree** in the SymbolTable. Each XML element and attribute becomes a property that can be accessed via property path notation.

#### Example XML:
```xml
<jeos>
  <jeo name="Person">
    <field name="firstName" type="string" size="50" nullable="false" />
    <field name="lastName" type="string" size="50" nullable="false" />
    <field name="age" type="int" nullable="true" />
  </jeo>
</jeos>
```

#### Generated SymbolTable Properties:

```
$jac:script:xml:jeos                       → PropertyValue (collection iterator)
$jac:script:xml:jeos:jeo                   → PropertyValue (collection iterator)
$jac:script:xml:jeos:jeo:name              → "Person"
$jac:script:xml:jeos:jeo:field             → PropertyValue (collection iterator)
$jac:script:xml:jeos:jeo:field:name        → "firstName" (first iteration)
$jac:script:xml:jeos:jeo:field:type        → "string"
$jac:script:xml:jeos:jeo:field:size        → "50"
$jac:script:xml:jeos:jeo:field:nullable    → "false"
```

### Property Naming Conventions

| Property Path | Description |
|---------------|-------------|
| `$jac:script:xml:root` | Root XML element |
| `$jac:script:xml:element` | Any nested element |
| `$jac:script:xml:element:attribute` | Element attribute value |
| `$jac:script:xml:element!` | Iterator for collections |
| `[$jac:script:xml:element:attribute]` | Value substitution |
| `<!$jac:script:xml:element!>!next()` | Advance iterator |
| `<!$jac:script:xml:element!>!resetIterator()` | Reset iterator to first |

### ARM Template Property Iteration

ARM templates use **property iterators** to loop through XML collections and generate code for each element.

#### Template Pattern Example:

**XML Definition (Service_Jeo.xml):**
```xml
<jeos>
  <jeo name="RequestJeo">
    <field name="selectClause" type="string" nullable="true" />
    <field name="fieldList" type="string" nullable="true" />
    <field name="whereClause" type="string" nullable="true" />
  </jeo>
</jeos>
```

**ARM Template Script (Jeo.script):**
```java
<& com.esarks.arm.scripts.Class
   <class name="[$jac:script:xml:jeo:name]" extends="com.esarks.jac.Jeo">
   </class>
&>

package [$jac:script:package];

import com.esarks.jac.*;
import java.util.*;

public class <![$jac:script:xml:jeo:name]!> extends Jeo {

  //----------------------------------------------------------------------------
  // Field Declarations
  //----------------------------------------------------------------------------
<%
  // Reset iterator to first field
  <!$jac:script:xml:jeo:field!>!resetIterator();

  // Loop through all fields
  while (<!$jac:script:xml:jeo:field!>!next()) {
    String fieldName = <![$jac:script:xml:jeo:field:name]!>;
    String fieldType = <![$jac:script:xml:jeo:field:type]!>;
    String fieldNullable = <![$jac:script:xml:jeo:field:nullable]!>;

    // Generate field declaration
%>
  // Field: <!%fieldName!>
  private PropertyValue i<!%fieldName!> = new PropertyValue();
  private boolean i<!%fieldName!>IsNullable = <!%fieldNullable!>;
<%
  }
%>

  //----------------------------------------------------------------------------
  // Constructor
  //----------------------------------------------------------------------------
  public <![$jac:script:xml:jeo:name]!>() {
    iInstanceName = "[$jac:script:package].<![$jac:script:xml:jeo:name]!>";
  }

  //----------------------------------------------------------------------------
  // Getters and Setters
  //----------------------------------------------------------------------------
<%
  // Reset iterator again for getter/setter generation
  <!$jac:script:xml:jeo:field!>!resetIterator();

  while (<!$jac:script:xml:jeo:field!>!next()) {
    String fieldName = <![$jac:script:xml:jeo:field:name]!>;
    String fieldType = <![$jac:script:xml:jeo:field:type]!>;
    String capitalizedName = fieldName.substring(0,1).toUpperCase() + fieldName.substring(1);
%>

  // Getter for <!%fieldName!>
  public String get<!%capitalizedName!>() {
    return i<!%fieldName!>.getValueString();
  }

  // Setter for <!%fieldName!>
  public void set<!%capitalizedName!>(String aValue) {
    i<!%fieldName!>.reset(aValue);
  }
<%
  }
%>

}

<& com.esarks.arm.scripts.FinalClass &>
```

### Field Type Mapping

JAC maps XML `type` attributes to appropriate Java types:

| XML Type | Java Type | PropertyValue Method |
|----------|-----------|---------------------|
| `string` | `String` | `getValueString()` |
| `int` | `int` | `getValueInt()` |
| `long` | `long` | `getValueLong()` |
| `double` | `double` | `getValueDouble()` |
| `boolean` | `boolean` | `getValueBoolean()` |
| `datetime` | `java.util.Date` | `getValueDate()` |
| `date` | `java.sql.Date` | `getValueSqlDate()` |
| `timestamp` | `java.sql.Timestamp` | `getValueTimestamp()` |
| `collection` | `ArrayList` | `getValueCollection()` |

### Special XML Tags

#### 1. Method Definitions

```xml
<method name="calculateTotal" visibility="public" return="double">
  <document>Calculates the grand total including tax</document>
  <argument name="subtotal" type="double">
    <document>Pre-tax subtotal</document>
  </argument>
  <argument name="taxRate" type="double">
    <document>Tax rate as decimal (e.g., 0.08 for 8%)</document>
  </argument>
</method>
```

**Generates:**
```java
/**
 * Calculates the grand total including tax
 * @param subtotal Pre-tax subtotal
 * @param taxRate Tax rate as decimal (e.g., 0.08 for 8%)
 */
public double calculateTotal(double subtotal, double taxRate) {
  //$Section=Operation$calculateTotal$Preserve=yes
  // Custom implementation here
  //$Section=Operation$calculateTotal$Preserve=no
}
```

#### 2. Class Definitions

```xml
<class name="CustomerService" extends="BaseService" implements="IService">
  <document>Manages customer lifecycle operations</document>
</class>
```

**Generates:**
```java
/**
 * Manages customer lifecycle operations
 */
public class CustomerService extends BaseService implements IService {
  //$Section=Class$Preserve=no
  // Generated code
  //$Section=Class$Preserve=yes
  // Custom code preserved here
  //$Section=Class$Preserve=no
}
```

#### 3. Database Mappings

```xml
<table name="users" schema="public">
  <column name="user_id" type="UUID" primaryKey="true" />
  <column name="user_name" type="VARCHAR" size="100" nullable="false" />
  <column name="email" type="VARCHAR" size="255" nullable="true" />
  <index name="idx_email" columns="email" unique="true" />
</table>
```

### Complete Example: From XML to Running Code

#### Step 1: Define XML (MyEntity_Jeo.xml)

```xml
<jeos>
  <jeo name="Customer">
    <field name="customerId" type="string" size="36" nullable="false" />
    <field name="customerName" type="string" size="200" nullable="false" />
    <field name="creditLimit" type="double" nullable="true" />
  </jeo>
</jeos>
```

#### Step 2: Create .jrun File (BuildCustomer.jrun)

```xml
<jacrun script="com.esarks.arm.model.jeo.Make" method="execute">
  <argument name="xmlFile">MyEntity_Jeo.xml</argument>
  <argument name="outputPackage">com.example.model</argument>
</jacrun>
```

#### Step 3: Run JAC Build

```powershell
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\bin
.\jac.bat BuildCustomer.jrun
```

#### Step 4: Generated Output (Customer.java)

```java
//$Section=License$Preserve=no
// Generated at 2025-10-23 by Architect's Companion
// XML Definition: MyEntity_Jeo
// Module Name: com.example.model.Customer

package com.example.model;

import com.esarks.jac.*;
import java.util.*;

public class Customer extends Jeo {

  // Field: customerId
  private PropertyValue iCustomerId = new PropertyValue();
  private boolean iCustomerIdIsNullable = false;
  private int iCustomerIdSize = 36;

  // Field: customerName
  private PropertyValue iCustomerName = new PropertyValue();
  private boolean iCustomerNameIsNullable = false;
  private int iCustomerNameSize = 200;

  // Field: creditLimit
  private PropertyValue iCreditLimit = new PropertyValue();
  private boolean iCreditLimitIsNullable = true;

  // Constructor
  public Customer() {
    iInstanceName = "com.example.model.Customer";
  }

  // Getters
  public String getCustomerId() {
    return iCustomerId.getValueString();
  }

  public String getCustomerName() {
    return iCustomerName.getValueString();
  }

  public double getCreditLimit() {
    return iCreditLimit.getValueDouble();
  }

  // Setters
  public void setCustomerId(String aValue) {
    iCustomerId.reset(aValue);
  }

  public void setCustomerName(String aValue) {
    iCustomerName.reset(aValue);
  }

  public void setCreditLimit(double aValue) {
    iCreditLimit.reset(aValue);
  }

  // Null checking
  public boolean isCustomerIdNull() {
    return iCustomerId.getValueType() == PropertyValue.CONST_VALUE_TYPE_NULL;
  }

  public boolean isCreditLimitNullable() {
    return iCreditLimitIsNullable;
  }
}
```

#### Step 5: Use in Application Code

```java
// Create instance
Customer customer = new Customer();

// Set values
customer.setCustomerId(UUID.randomUUID().toString());
customer.setCustomerName("Acme Corp");
customer.setCreditLimit(50000.00);

// Validate
if (customer.isCustomerIdNull()) {
  throw new ValidationException("Customer ID is required");
}

// Serialize to XML
String xml = customer.getXml();
System.out.println(xml);
// Output: <jeo name='Customer'><field name='customerId'>...</field>...
```

### Benefits of XML-Driven Generation

1. **Consistency:** All entities follow the same patterns
2. **Rapid Development:** Define structure once, get full CRUD for free
3. **Type Safety:** Compile-time checking of generated code
4. **Documentation:** XML serves as machine-readable documentation
5. **Refactoring:** Change XML and regenerate all affected code
6. **Versioning:** Track schema evolution through XML version control
7. **Code Reduction:** 10 lines of XML replace 500+ lines of Java

### Common XML-Driven Components in JAC

| Component Type | XML Root Tag | Generated Output | Use Case |
|----------------|--------------|------------------|----------|
| JEO Entity | `<jeos><jeo>` | Java bean with PropertyValue fields | DTOs, domain models |
| Service | `<service>` | Request/reply wrapper classes | API contracts |
| View | `<view>` | Presentation model classes | UI data binding |
| Table | `<table>` | SQL DDL statements | Database schema |
| Report | `<report>` | Report generation scripts | Data export |
| Test | `<test>` | Unit test scaffolding | Automated testing |

### Troubleshooting XML Generation

#### Issue: "Field not generated"

**Symptom:** XML field is defined but getter/setter missing in generated Java.

**Solution:**
- Check XML syntax (all tags closedPENDING)
- Verify field `name` attribute exists
- Check template script iterator logic
- Look for Java reserved words in field names

#### Issue: "PropertyValue type mismatch"

**Symptom:** Runtime ClassCastException when accessing field.

**Solution:**
- Verify `type` attribute in XML matches usage in code
- Check type mapping table above
- Use correct PropertyValue getter method

#### Issue: "Generated code won't compile"

**Symptom:** javac errors in generated .java file.

**Solution:**
- Check for special characters in XML names
- Verify `extends` and `implements` classes exist
- Look for missing imports in template
- Check for JAC keyword conflicts

---

## Examples and Patterns

### Example 1: Simple Hello World

**HelloWorld.script:**
```java
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Print Hello World</document>
   </method>
&>

%>Hello World!<%

<& com.esarks.arm.scripts.FinalReturnMethod &>
```

**Generated HelloWorld.java:**
```java
package paul;

import java.util.*;
import com.esarks.jac.*;

public class HelloWorld extends com.esarks.jac.ScriptHelper {

    public void execute() {
        try {
            iOutputManager.println("Hello World!");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

**HelloWorld.jrun:**
```xml
<jacrun script="paul.HelloWorld" method="execute" />
```

**Execution:**
```powershell
cd app\paul
..\..\jacBuild24\bin\jac.bat HelloWorld.jrun
```

**Output:**
```
Architects Companion
jac2020 v2019.10.15
Licensed to: [Your Name]
License Verified.
Making HelloWorld
Hello World!
```

### Example 2: Database Query Script

**QueryUsers.script:**
```java
source com.esarks.jac.DatabaseHelper.script
import java.sql.*

<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Query users from database</document>
   </method>
&>

Connection conn = getConnection("default");
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery("SELECT * FROM users");

%>
<html><body><table>
<tr><th>ID</th><th>Name</th><th>Email</th></tr>
<%

while (rs.next()) {
    String id = rs.getString("id");
    String name = rs.getString("name");
    String email = rs.getString("email");

%>
<tr>
    <td><!%id!></td>
    <td><!%name!></td>
    <td><!%email!></td>
</tr>
<%
}

%>
</table></body></html>
<%

rs.close();
stmt.close();
conn.close();

<& com.esarks.arm.scripts.FinalReturnMethod &>
```

### Example 3: Custom Context

**myapp.make:**
```
extends com.mycompany.BaseScript
source [$jac:path:home]/conf/myapp/imports.script
import com.mycompany.util.*
var protected Logger logger = Logger.getLogger()
set $myapp:version=1.0.0
source [$jac:path:scripts]/[$jac:script:path]/[$jac:script].script
```

**MyScript.script:**
```java
context myapp

<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
   </method>
&>

logger.info("Starting MyScript v<#[$myapp:version]#>");

// Script logic here

<& com.esarks.arm.scripts.FinalReturnMethod &>
```

---

## Troubleshooting

### Common Issues

#### Issue: "Cannot find .make file"

**Symptom:**
```
Error making... CantMake = true
```

**Cause:** No `.make` file found for script, and no context specified

**Solution:**
1. Create `ScriptName.make` in same directory as script
2. OR specify `context` directive in script header:
   ```
   context jac
   ```
3. OR use default `jac.make` by doing nothing (if it exists)

#### Issue: "Class not found" at runtime

**Symptom:**
```
ClassNotFoundException: com.example.MyScript
```

**Cause:** Class not compiled or not in work directory

**Solution:**
1. Check if compilation succeeded (look for errors)
2. Verify `.class` file exists in `work/com/example/MyScript.class`
3. Check classpath includes work directory
4. Try forcing recompile: `jac -script MyScript -verify`

#### Issue: "Stale script not rebuilding"

**Symptom:** Changes to `.script` file not reflected in output

**Cause:** Timestamp check not detecting changes

**Solution:**
1. Delete `.class` file: `del work\package\path\MyScript.class`
2. Touch `.script` file: `copy /y MyScript.script +,,`
3. Use force make flag if available
4. Check file system timestamps are correct

#### Issue: "Reverse merge not preserving code"

**Symptom:** Custom code lost during regeneration

**Cause:** Section markers missing or malformed

**Solution:**
1. Ensure `$Section=...` markers are present
2. Verify `$Preserve=yes` is set correctly
3. Check marker IDs match between old and new files
4. Don't manually edit section marker lines

#### Issue: "Script compilation fails with syntax error"

**Symptom:**
```
MyScript.java:45: error: ';' expected
```

**Cause:** JAC transformation error or invalid mixed syntax

**Solution:**
1. Check generated `.java` file in `work` directory
2. Look for malformed `iOutputManager.println()` statements
3. Verify all JAC tags are closed (e.g., `%>` has matching `<%`)
4. Check for unescaped quotes in output blocks
5. Enable debug: `jac -script MyScript -debug 3`

### Debug Output

Enable debugging with `-debug` flag:

```powershell
jac -script MyScript -debug 3 -debugClass 255
```

Debug levels:
- `0` = None
- `1` = Errors only
- `2` = Warnings
- `3` = Info
- `4` = Verbose
- `5` = Trace

Creates debug log in `$jac:path:home/logs/`

---

## Performance Considerations

### Build Performance

**Incremental Compilation:**
- JAC only rebuilds scripts when source is newer than class
- Typical rebuild time: < 1 second for simple scripts
- Full project rebuild: ~25 seconds (JAC self-compile)

**Optimization Tips:**
1. Use `context` directive to avoid scanning for `.make` files
2. Minimize `source` directives (fewer files to check)
3. Keep scripts modular (faster incremental builds)
4. Use compiled libraries for stable code

### Runtime Performance

**Class Loading:**
- First load: ~10-50ms (read .class, define class)
- Subsequent loads: cached by ClassLoader
- No JIT overhead (already compiled bytecode)

**Dynamic Invocation:**
- Method.invoke() overhead: ~50-100ns
- Negligible for typical use cases
- Use direct calls for tight loops

---

## Conclusion

The JAC build system provides a sophisticated framework for:
- **Template-based code generation**
- **Dynamic compilation and execution**
- **Code preservation across regenerations**
- **Context-driven build configurations**

Understanding the interplay between `.script`, `.make`, `.jrun`, and config files enables developers to harness JAC's full power for rapid application development.

---

## Quick Reference Card

### Command Line

```powershell
# Compile and run script
jac -script com.example.MyScript -method execute

# Specify context
jac -script MyScript -context jac

# Force rebuild
jac -script MyScript -verify

# Debug mode
jac -script MyScript -debug 3
```

### File Extensions

| Extension | Purpose |
|-----------|---------|
| `.script` | Mixed-syntax source file |
| `.make` | Build configuration |
| `.jrun` | Runtime execution descriptor |
| `.java` | Generated Java source |
| `.class` | Compiled bytecode |

### Key Directories

| Directory | Contents |
|-----------|----------|
| `source/scripts/` | Input `.script` files |
| `conf/` | Build configuration files |
| `work/` | Generated `.java` and `.class` files |
| `lib/` | Runtime dependencies |

### Property Variables

| Variable | Example Value |
|----------|--------------|
| `$jac:path:home` | `C:\...\jacBuild24` |
| `$jac:path:work` | `C:\...\jacBuild24\work` |
| `$jac:path:scripts` | `C:\...\app` |
| `$jac:script` | `HelloWorld` |
| `$jac:script:package` | `com.example` |

---

**END OF DOCUMENT**
