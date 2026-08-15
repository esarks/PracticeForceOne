---
title: "jac2024 conf"
---

# JAC2024 conf/ - Build Templates & Code Generation

**Document Version:** 2.0
**Date:** 2025-01-21
**JAC Version:** JAC2024 v20251021a
**Location:** `jac2024/conf/`

---

## Table of Contents

1. [Overview](#overview)
2. [What is conf/PENDING](#what-is-conf)
3. [Template System Architecture](#template-system-architecture)
4. [Make Files Reference](#make-files-reference)
5. [Import Scripts](#import-scripts)
6. [Prefix Scripts](#prefix-scripts)
7. [Postfix Scripts](#postfix-scripts)
8. [Compilation Process](#compilation-process)
9. [Complete File Listing](#complete-file-listing)
10. [Customization Guide](#customization-guide)
11. [Examples](#examples)

---

## Overview

The **`conf/` folder** contains compile-time templates that control how JAC transforms `.script` files into standard Java classes. These templates define the structure, imports, and base classes for generated code.

**Key Concept:** The conf/ folder determines **HOW** your .script files become Java code.

| Aspect | Details |
|--------|---------|
| **Purpose** | Code generation templates |
| **Used When** | Compile-time (during script → Java transformation) |
| **File Types** | `.make` files (templates), `.script` files (code fragments) |
| **Location** | `jac2024/conf/` |
| **Total Files** | 22 files |
| **Changes Require** | Recompiling .script files to see effects |

---

## What is conf/?

### The Problem it Solves

Without templates, every `.script` file would need to:
- Manually declare package and imports
- Manually define class structure
- Manually extend base classes
- Repeat boilerplate code

### The Solution

The `conf/` folder provides **reusable templates** that:
1. Add standard imports automatically
2. Extend appropriate base classes
3. Generate consistent class structure
4. Enable rapid development

### Template Flow

```
Your HelloWorld.script
         ↓
JAC reads: jac.make (template file)
         ↓
Assembles:
  1. Package declaration
  2. Import statements (from ScriptImport.script)
  3. Class declaration (from ScriptPrefix.script)
  4. Your code (from HelloWorld.script)
  5. Closing braces (from ScriptPostfix.script)
         ↓
Generates: HelloWorld.java (pure Java)
         ↓
Compiles: HelloWorld.class
```

---

## Template System Architecture

### Two Template Systems

JAC supports two distinct template systems:

| System | Base Class | Use Case | Template |
|--------|------------|----------|----------|
| **JAC** | `ScriptHelper` | Simple scripts, reports, utilities | `jac.make` |
| **MIC** | MIC framework classes | Web apps, components, services | `mic.make` + specialized |

### Template Variables

Templates use special variable syntax:

| Variable | Meaning | Example |
|----------|---------|---------|
| `<#[$jac:script]#>` | Script name | `HelloWorld` |
| `<#[$jac:script:package]#>` | Package name | `com.esarks.app` |
| `<#[$jac:script:extends]#>` | Base class | `com.esarks.jac.ScriptHelper` |
| `<#[$jac:path:home]#>` | JAC_BASE path | `C:\...\jac2024` |
| `<#[$jac:fileSeparator]#>` | Path separator | `\` or `/` |
| `<#import#>` | Custom imports placeholder | (replaced with user imports) |
| `<#var#>` | Custom variables placeholder | (replaced with user variables) |

### Template Directives

| Directive | Purpose | Example |
|-----------|---------|---------|
| `set $variable=value` | Define a variable | `set $jac:script:extends=com.esarks.jac.ScriptHelper` |
| `source [path]` | Include another file | `source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]ScriptImport.script` |

---

## Make Files Reference

### Core Make Files

#### 1. jac.make - Basic JAC Template

**File:** `conf/jac.make`
**Size:** 424 bytes
**Purpose:** Template for basic JAC scripts

**Content:**
```
set $jac:script:extends=com.esarks.jac.ScriptHelper
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]ScriptImport.script
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]ScriptPrefix.script
source [$jac:path:scripts][$jac:fileSeparator][$jac:script:path][$jac:fileSeparator][$jac:script].script
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]ScriptPostfix.script
```

**What it does:**
1. Sets base class to `ScriptHelper`
2. Includes standard JAC imports
3. Includes class prefix with `execute()` method
4. Includes your .script file
5. Includes class postfix (closing braces)

**Used for:**
- Simple utilities
- Reports
- Data processing scripts
- Scripts without web/MIC features

---

#### 2. mic.make - MIC Framework Template

**File:** `conf/mic.make`
**Size:** 362 bytes
**Purpose:** Template for MIC framework scripts

**Content:**
```
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]micImport.script
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]micPrefix.script
source [$jac:path:scripts][$jac:fileSeparator][$jac:script:path][$jac:fileSeparator][$jac:script].script
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]micPostfix.script
```

**What it does:**
1. Includes MIC imports (Jakarta servlet, JSON, database)
2. Includes MIC class prefix
3. Includes your .script file
4. Includes class postfix

**Used for:**
- Web applications
- REST APIs
- MIC framework scripts
- General MIC components

---

### Specialized MIC Templates

All MIC templates follow the same pattern but set different base classes:

#### micScriptComponent.make

**File:** `conf/micScriptComponent.make`
**Size:** 412 bytes
**Base Class:** `com.esarks.mic.Component`
**Purpose:** Business logic components

**Content:**
```
set $jac:script:extends=com.esarks.mic.Component
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]micImport.script
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]micPrefix.script
source [$jac:path:scripts][$jac:fileSeparator][$jac:script:path][$jac:fileSeparator][$jac:script].script
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]micPostfix.script
```

**When used:** When your .script contains `<mic.element type="Component">`

---

#### micScriptService.make

**File:** `conf/micScriptService.make`
**Size:** 410 bytes
**Base Class:** `com.esarks.mic.Service`
**Purpose:** Web services, REST APIs

**When used:** When your .script contains `<mic.element type="Service">`

---

#### micScriptView.make

**File:** `conf/micScriptView.make`
**Size:** 411 bytes
**Base Class:** `com.esarks.mic.View`
**Purpose:** User interface views

**When used:** When your .script contains `<mic.element type="View">`

---

#### Complete Specialized Template List

| Template File | Base Class | Purpose |
|---------------|------------|---------|
| **micScriptComponent.make** | `Component` | Business logic, data access |
| **micScriptElement.make** | `Element` | UI elements |
| **micScriptEntity.make** | `Entity` | Data entities |
| **micScriptModel.make** | `Model` | Data models |
| **micScriptPackage.make** | `Package` | Package definitions |
| **micScriptReport.make** | `Report` | Report generators |
| **micScriptSecurityManager.make** | `SecurityManager` | Security managers |
| **micScriptService.make** | `Service` | Web services, APIs |
| **micScriptView.make** | `View` | User interface views |

---

### Other Make Files

#### java.make

**File:** `conf/java.make`
**Size:** 106 bytes
**Purpose:** Pure Java template (no JAC features)

**Content:**
```
source [$jac:path:scripts][$jac:fileSeparator][$jac:script:path][$jac:fileSeparator][$jac:script].script
```

**Used for:** Plain Java files that don't need JAC processing

---

#### jeo.make

**File:** `conf/jeo.make`
**Size:** 106 bytes
**Purpose:** JEO (Java Extended Objects) template

**Content:**
```
source [$jac:path:scripts][$jac:fileSeparator][$jac:script:path][$jac:fileSeparator][$jac:script].script
```

---

#### micModel.make

**File:** `conf/micModel.make`
**Size:** 367 bytes
**Purpose:** MIC Model template with specialized prefix

**Content:**
```
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]micImport.script
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]micModelPrefix.script
source [$jac:path:scripts][$jac:fileSeparator][$jac:script:path][$jac:fileSeparator][$jac:script].script
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]micPostfix.script
```

**Note:** Uses `micModelPrefix.script` instead of `micPrefix.script`

---

## Import Scripts

Import scripts define the package declaration and import statements for generated Java classes.

### ScriptImport.script - Basic JAC Imports

**File:** `conf/ScriptImport.script`
**Size:** 301 bytes
**Purpose:** Standard imports for JAC scripts

**Content:**
```java
package <#[$jac:script:package]#>;

import com.esarks.jac.*;
import java.util.*;
import java.io.*;
import java.text.*;
import java.net.*;
import javax.net.ssl.*;
import java.security.*;
import java.sql.*;

<#import#>
```

**Imports Provided:**
- PASS JAC core framework
- PASS Java utilities (List, Map, etc.)
- PASS File I/O
- PASS Text formatting
- PASS Networking
- PASS SSL/Security
- PASS SQL/JDBC

**Missing (vs micImport):**
- FAIL MIC framework
- FAIL Jakarta servlets
- FAIL JSON support
- FAIL Java Time API
- FAIL NIO Files

**Used by:** `jac.make`

---

### micImport.script - Full MIC Imports

**File:** `conf/micImport.script`
**Size:** 919 bytes
**Purpose:** Comprehensive imports for MIC framework scripts

**Content:**
```java
package <#[$jac:script:package]#>;

import com.esarks.jac.*;
import java.time.*; // Duration, Instant, Period, ZoneId, LocalDate, LocalDateTime, LocalTime
import java.util.*;
import java.lang.reflect.*;
import java.io.*;
import java.text.*;
import java.net.*;
import javax.net.ssl.*;
import java.security.*;
import java.sql.*;
import jakarta.servlet.*;        // ← Jakarta EE 10 (Jetty 12)
import jakarta.servlet.http.*;
import java.awt.*;
import javax.swing.*;
import com.esarks.mic.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import org.json.simple.*;         // ← JSON support
import org.json.simple.parser.*;

<#import#>
```

**Key Differences from ScriptImport:**
- PASS **Java Time API** - Modern date/time (Duration, Instant, LocalDate, etc.)
- PASS **Jakarta Servlet** - Web server support (Jetty 12)
- PASS **JSON Simple** - JSON parsing and generation
- PASS **MIC Framework** - Component, Service, View, etc.
- PASS **NIO Files** - Modern file operations (Files, Paths)
- PASS **Reflection** - Dynamic class loading
- PASS **AWT/Swing** - GUI support

**Used by:** All MIC templates (mic.make, micScriptComponent.make, etc.)

---

### micImportView.script - View-Specific Imports

**File:** `conf/micImportView.script`
**Size:** 339 bytes
**Purpose:** Specialized imports for MIC Views

**Note:** Currently appears unused - `micScriptView.make` uses `micImport.script` instead

---

## Prefix Scripts

Prefix scripts define the class declaration, member variables, and constructors.

### ScriptPrefix.script - JAC Class Prefix

**File:** `conf/ScriptPrefix.script`
**Size:** 357 bytes
**Purpose:** Class structure for JAC scripts

**Content:**
```java
public class <#[$jac:script]#> extends <#[$jac:script:extends]#> {

<#var#>

  private String iScriptPackage = "<#[$jac:script:package]#>";
  private String iScriptName = "<#[$jac:script]#>";

  protected <#[$jac:script]#>() {
  }

  public <#[$jac:script]#>(Script aScript) {
    super(aScript);
  }

  public void execute() {

%>
```

**What it generates:**
1. `public class HelloWorld extends ScriptHelper {`
2. Placeholder for custom variables `<#var#>`
3. `iScriptPackage` and `iScriptName` member variables
4. Protected no-arg constructor
5. Public constructor with Script parameter
6. `execute()` method declaration
7. Opens output mode `%>` (for writing to response)

**Used by:** `jac.make`

---

### micPrefix.script - MIC Class Prefix

**File:** `conf/micPrefix.script`
**Size:** 199 bytes
**Purpose:** Class structure for MIC framework scripts

**Content:**
```java
public class <#[$jac:script]#> extends <#[$jac:script:extends]#> {

<#var#>

  protected <#[$jac:script]#>() {
  }

  public <#[$jac:script]#>(Script aScript) {
    super(aScript);
  }
```

**Key Differences from ScriptPrefix:**
- FAIL No `iScriptPackage` or `iScriptName` variables
- FAIL No `execute()` method (MIC components don't use it)
- FAIL No output mode `%>` (MIC handles output differently)

**Used by:** All MIC templates except micModel.make

---

### micModelPrefix.script - MIC Model Prefix

**File:** `conf/micModelPrefix.script`
**Size:** 205 bytes
**Purpose:** Class structure for MIC Models

**Content:**
```java
public class <#[$jac:script]#> extends <#[$jac:script:extends]#> {

<#var#>

  public <#[$jac:script]#>() {
  }

  public <#[$jac:script]#>(Script aScript) {
    super(aScript);
  }
```

**Key Difference:**
- Constructor is `public` instead of `protected`

**Used by:** `micModel.make`

---

## Postfix Scripts

Postfix scripts close the class structure.

### ScriptPostfix.script - JAC Class Postfix

**File:** `conf/ScriptPostfix.script`
**Size:** 14 bytes
**Purpose:** Close JAC script class

**Content:**
```java
<%
  }
}
```

**What it closes:**
1. Output mode `<%`
2. `execute()` method `}`
3. Class `}`

**Used by:** `jac.make`

---

### micPostfix.script - MIC Class Postfix

**File:** `conf/micPostfix.script`
**Size:** 3 bytes
**Purpose:** Close MIC framework class

**Content:**
```java
}
```

**What it closes:**
1. Class `}` (no execute method to close)

**Used by:** All MIC templates

---

## Compilation Process

### Step-by-Step: How Templates Work

#### Example: Compiling HelloWorld.script

**1. You write HelloWorld.script:**

```java
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Simple hello world</document>
   </method>
&>

System.out.println("Hello, World!");
```

**2. JAC Compiler executes jac.make:**

```
set $jac:script:extends=com.esarks.jac.ScriptHelper
source [...]/conf/ScriptImport.script
source [...]/conf/ScriptPrefix.script
source [...]/HelloWorld.script
source [...]/conf/ScriptPostfix.script
```

**3. JAC assembles HelloWorld.java:**

```java
// From ScriptImport.script:
package com.esarks.app;

import com.esarks.jac.*;
import java.util.*;
import java.io.*;
// ... more imports ...

// From ScriptPrefix.script:
public class HelloWorld extends com.esarks.jac.ScriptHelper {

  private String iScriptPackage = "com.esarks.app";
  private String iScriptName = "HelloWorld";

  protected HelloWorld() {
  }

  public HelloWorld(Script aScript) {
    super(aScript);
  }

  public void execute() {

%>
// From HelloWorld.script:
System.out.println("Hello, World!");
<%

// From ScriptPostfix.script:
  }
}
```

**4. javac compiles HelloWorld.java → HelloWorld.class**

---

### Template Selection

**How JAC chooses which template:**

1. **XML element type in .script file determines template:**
   - `<mic.element type="Component">` → uses `micScriptComponent.make`
   - `<mic.element type="Service">` → uses `micScriptService.make`
   - No MIC element → uses `jac.make`

2. **Templates are configurable in build system**

3. **Default fallback:** `jac.make` for simple scripts

---

## Complete File Listing

### All 22 Files in conf/

#### Make Files (14 files)

| File | Size | Base Class | Purpose |
|------|------|------------|---------|
| jac.make | 424B | ScriptHelper | Basic JAC scripts |
| java.make | 106B | (none) | Pure Java |
| jeo.make | 106B | (none) | JEO objects |
| mic.make | 362B | (none) | General MIC scripts |
| micModel.make | 367B | (none) | MIC Models |
| micScriptComponent.make | 412B | Component | Components |
| micScriptElement.make | 410B | Element | UI elements |
| micScriptEntity.make | 409B | Entity | Entities |
| micScriptModel.make | 408B | Model | Models |
| micScriptPackage.make | 410B | Package | Packages |
| micScriptReport.make | 409B | Report | Reports |
| micScriptSecurityManager.make | 418B | SecurityManager | Security |
| micScriptService.make | 410B | Service | Services |
| micScriptView.make | 411B | View | Views |

#### Script Files (8 files)

| File | Size | Purpose |
|------|------|---------|
| ScriptImport.script | 301B | JAC imports |
| ScriptPrefix.script | 357B | JAC class prefix |
| ScriptPostfix.script | 14B | JAC class postfix |
| micImport.script | 919B | MIC imports (Jakarta, JSON) |
| micPrefix.script | 199B | MIC class prefix |
| micPostfix.script | 3B | MIC class postfix |
| micModelPrefix.script | 205B | MIC Model prefix |
| micImportView.script | 339B | View imports (unused) |

---

## Customization Guide

### Adding Imports to All MIC Scripts

**Edit:** `conf/micImport.script`

**Add before** `<#import#>` line:

```java
import org.json.simple.*;
import org.json.simple.parser.*;

// Add your custom imports here:
import com.yourcompany.utils.*;
import com.yourcompany.models.*;
import com.google.gson.*;

<#import#>
```

**Effect:** All MIC scripts will now have these imports

---

### Adding Imports to Specific Script

**In your .script file:**

```java
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>My Script</document>
     <import>com.google.gson.*</import>
     <import>com.amazonaws.services.s3.*</import>
   </method>
&>
```

**Effect:** Only this script will have these imports (inserted at `<#import#>` placeholder)

---

### Creating Custom Template

**Example: REST API template with authentication base**

**1. Create `conf/micScriptRestAPI.make`:**

```
set $jac:script:extends=com.yourcompany.RestAPIBase
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]micImport.script
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]micPrefix.script
source [$jac:path:scripts][$jac:fileSeparator][$jac:script:path][$jac:fileSeparator][$jac:script].script
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]micPostfix.script
```

**2. Configure JAC to use it:**

In your .script file:
```xml
<mic.element type="RestAPI">
  <!-- Your REST API definition -->
</mic.element>
```

---

### Adding Member Variables to All Scripts

**Edit:** `conf/micPrefix.script`

**Replace** `<#var#>` section:

```java
<#var#>

  // Add your global variables here:
  protected Logger logger = LoggerFactory.getLogger(this.getClass());
  protected static final String VERSION = "1.0.0";
```

**Effect:** All MIC scripts will have logger and VERSION variables

---

### Changing Base Class for Components

**Edit:** `conf/micScriptComponent.make`

**Change first line:**

```
set $jac:script:extends=com.yourcompany.CustomComponent
```

**Effect:** All Components will extend your custom base class

---

## Examples

### Example 1: Simple JAC Script

**File:** `HelloWorld.script`

```java
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Simple hello world</document>
   </method>
&>

out.println("<html><body>");
out.println("<h1>Hello, World!</h1>");
out.println("</body></html>");
```

**Uses:** `jac.make`

**Generated class structure:**
- Package: (from script location)
- Imports: ScriptImport.script (basic Java)
- Base class: `ScriptHelper`
- Has: `execute()` method with output mode

---

### Example 2: MIC Component

**File:** `UserService.script`

```java
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>User service component</document>
   </method>
&>

public User getUserById(int id) {
  DbConnection db = getDbConnection();
  db.executeStatement("SELECT * FROM users WHERE id = " + id);
  if (db.next()) {
    return new User(
      db.getInt("id"),
      db.getString("username"),
      db.getString("email")
    );
  }
  return null;
}
```

**If script contains:** `<mic.element type="Component">`

**Uses:** `micScriptComponent.make`

**Generated class structure:**
- Imports: micImport.script (Jakarta, JSON, database, etc.)
- Base class: `com.esarks.mic.Component`
- Has: Your custom methods
- No: `execute()` method (not needed for Components)

---

### Example 3: Custom Imports

**File:** `DataProcessor.script`

```java
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Data processor with custom libraries</document>
     <import>org.apache.commons.csv.*</import>
     <import>com.google.gson.*</import>
   </method>
&>

public void processCSV(String filename) {
  Reader in = new FileReader(filename);
  CSVParser parser = CSVParser.parse(in, CSVFormat.DEFAULT);

  for (CSVRecord record : parser) {
    String json = new Gson().toJson(record);
    processRecord(json);
  }
}
```

**Uses:** `jac.make` or `mic.make`

**Generated imports include:**
- All standard imports from micImport.script
- **Plus:** `org.apache.commons.csv.*`
- **Plus:** `com.google.gson.*`

---

## Related Documentation

- **[jac2024-config.md](jac2024-config.html)** - Runtime configuration (Properties.xml, SQL files)
- **[Database-Setup.md](Database-Setup.html)** - Database configuration guide
- **[AllPhases.md](AllPhases.html)** - Build system and compilation process
- **[ARM-JAC-MIC.md](ARM-JAC-MIC.html)** - Three-layer architecture explained

---

## Quick Reference

### Common Questions

**Q: How do I add imports to all MIC scriptsPENDING**
A: Edit `conf/micImport.script` before the `<#import#>` line

**Q: How do I add imports to one specific scriptPENDING**
A: Use `<import>` tag in your .script file's method definition

**Q: Which template does my script usePENDING**
A: Determined by `<mic.element type="...">` in your .script, or `jac.make` by default

**Q: What's the difference between ScriptImport and micImportPENDING**
A: ScriptImport = basic Java only; micImport = Jakarta servlet, JSON, MIC framework

**Q: Can I create my own .make filePENDING**
A: Yes! Copy an existing .make file and customize the base class and sources

**Q: Do changes to conf/ require recompilingPENDING**
A: Yes - conf/ changes only affect newly compiled .script files

**Q: What's the <#var#> placeholder forPENDING**
A: Custom member variables defined in your script's XML

---

**Document Version:** 2.0
**Author:** JAC Documentation Team
**Last Updated:** 2025-01-21
**Status:** Complete
