---
title: "ARM JAC MIC"
---

# ARM, JAC, and MIC: The Three-Layer Architecture

**Location:** `C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\jacBuild24`

This document explains the three core component groups that make up the JAC ecosystem: **JAC** (Java Architects Companion), **ARM** (Architects Resource Model), and **MIC** (Model-Interface-Controller). These three layers work together to provide a complete rapid application development platform.

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture Layers](#architecture-layers)
3. [JAC - The Core Engine](#jac---the-core-engine)
4. [ARM - The Resource Model](#arm---the-resource-model)
5. [MIC - The Application Framework](#mic---the-application-framework)
6. [Build Process](#build-process)
7. [JAR Files](#jar-files)
8. [Component Interaction](#component-interaction)
9. [File Organization](#file-organization)

---

## Overview

The JAC ecosystem is built on a three-layer architecture, where each layer provides specific functionality and builds upon the layer below it:

```
┌─────────────────────────────────────────┐
│          MIC Framework                  │  ← Application layer
│   (Model-Interface-Controller)          │    Web UI, business logic
├─────────────────────────────────────────┤
│          ARM Templates                   │  ← Template & script layer
│   (Architects Resource Model)           │    Reusable components
├─────────────────────────────────────────┤
│          JAC Engine                      │  ← Core engine layer
│   (Java Architects Companion)           │    Compiler, runtime, XML
└─────────────────────────────────────────┘
```

**Key Characteristics:**
- **JAC**: Pure Java engine (26 classes) - the compiler and runtime
- **ARM**: Mixed Java/Script templates (19 Java + 62 scripts) - extensibility layer
- **MIC**: Application framework (24 classes) - RAD development layer

---

## Architecture Layers

### Layer 1: JAC (Foundation)

**Purpose:** Core compilation engine and runtime infrastructure

**Responsibilities:**
- Script parsing and compilation
- XML processing and schema validation
- Property management and symbol resolution
- Dynamic class loading
- Code generation and transformation

**Output:** `jac.jar` (177 KB)

---

### Layer 2: ARM (Middle Tier)

**Purpose:** Template and script library for code generation

**Responsibilities:**
- Predefined script templates
- Method code generation templates
- Application framework components
- Logging and observability
- OWL rules engine integration

**Output:** Compiled into `mic.jar` along with MIC components

---

### Layer 3: MIC (Top Tier)

**Purpose:** Model-Interface-Controller application framework

**Responsibilities:**
- MVC pattern implementation
- Web UI components
- Form controls and data binding
- Report generation
- Service layer abstraction

**Output:** `mic.jar` (209 KB) - includes both ARM and MIC compiled classes

---

## JAC - The Core Engine

### Package Structure

```
com.esarks.jac
├── jac.java                    # Main entry point, CLI
├── Script.java                 # Script orchestrator and executor
├── ScriptWriter.java           # Template transformation engine
├── ScriptHelper.java           # Base class for all scripts
├── ParseXml.java               # SAX XML parser
├── ParseXmlSchema.java         # XML schema loader
├── PropertyHelper.java         # Property navigation (133 KB)
├── PropertyValue.java          # Typed property values (88 KB)
├── SymbolTable.java            # Symbol resolution (48 KB)
├── Merge.java                  # Code merger (preserves sections)
├── OutputManager.java          # Output generation
├── Jeo.java                    # Java Entity Object (62 KB)
├── DbConnection.java           # Database connectivity
├── AcClassLoader.java          # Dynamic class loading
└── ... (26 total classes)
```

### Core Classes (26 files)

| Class | Size | Purpose |
|-------|------|---------|
| `jac.java` | 26 KB | Command-line interface, bootstrap |
| `Script.java` | 76 KB | Central compilation orchestrator |
| `ScriptWriter.java` | 41 KB | Line-by-line template processor |
| `PropertyHelper.java` | 133 KB | XML property navigation engine |
| `PropertyValue.java` | 88 KB | Strongly-typed property system |
| `SymbolTable.java` | 49 KB | Symbol resolution and translation |
| `Jeo.java` | 63 KB | Java Entity Object base class |
| `ParseXml.java` | 18 KB | SAX-based XML parser |
| `ParseXmlSchema.java` | 38 KB | XML schema validation |
| `XmlSchemaElement.java` | 44 KB | Schema element definitions |
| `Merge.java` | 37 KB | Code preservation and merging |
| `DbConnection.java` | 43 KB | Database connection pooling |
| `OutputManager.java` | 24 KB | Code generation output |
| `ScriptHelper.java` | 31 KB | Script base functionality |
| `AcClassLoader.java` | 9 KB | Custom class loader |
| `Log.java` | 21 KB | Logging infrastructure |
| Others | ~100 KB | Support classes |

### Key Capabilities

**1. Script Compilation**

```java
// jac.java - Main entry point
public static void main(String args[]) {
  Script lScript = new Script();
  lScript.compile("com.example.MyScript");
  lScript.execute("myMethod");
}
```

**2. XML Processing**

JAC includes sophisticated XML parsing and schema validation:

```java
// ParseXml.java - SAX parser
parseXml("config.xml");
parseXmlSchema("schema.xml");

// PropertyHelper.java - Property navigation
<!element:subelement:attribute!>  // Navigation syntax
```

**3. Code Generation**

```java
// ScriptWriter.java - Template processor
// Transforms JAC syntax to pure Java
// 13-state state machine for parsing
```

**4. Dynamic Loading**

```java
// AcClassLoader.java
Class<PENDING> clazz = classLoader.loadClass("com.example.MyClass");
Object instance = clazz.getDeclaredConstructor().newInstance();
```

---

## ARM - The Resource Model

### Package Structure

```
com.esarks.arm
├── scripts/                      # Template scripts (Java)
│   ├── Method.java              # Method template generator
│   ├── Service.java             # Service template
│   ├── ExitMethod.java          # Exit method template
│   ├── ReturnMethod.java        # Return method template
│   ├── FinalReturnMethod.java   # Final return template
│   ├── GetEffectiveDate.java    # Date utility template
│   └── IterateReplyJeo.java     # Jeo iterator template
├── logging/                      # Logging components (Scripts)
│   ├── ExceptionJeo.script
│   ├── ExceptionRpt.script
│   └── ProcessRpt.script
├── model/                        # Model layer
│   └── jeo/                      # JEO models
│       ├── ErrorJeo.script
│       └── service.script
├── owl/                          # OWL rules engine
├── plantuml/                     # PlantUML integration
└── applicationFramework/         # App framework scripts
    ├── HttpServer.script        # HTTP server
    ├── Router.script            # URL routing
    ├── AppComponent.script      # Application components
    └── ... (55+ scripts)
```

### Component Count

- **19 Java files** (template generators)
- **62 Script files** (ARM templates and components)
- **Total: 81 components**

### Key ARM Components

**1. Script Templates (com.esarks.arm.scripts)**

These Java classes generate code templates:

| Template | Purpose |
|----------|---------|
| `Method.java` | Generates method signatures with XML metadata |
| `Service.java` | Generates service class templates |
| `ExitMethod.java` | Generates early exit patterns |
| `ReturnMethod.java` | Generates return statement templates |
| `FinalReturnMethod.java` | Generates final return logic |

**Example: Method.java Template**

```java
// Generated output from ARM Method template:
/**
 * Execute method on HelloWorld
 */
public void execute() {
  // Begin: com.esarks.arm.scripts.Method
  // User code here
  // End: com.esarks.arm.scripts.Method
}
```

**2. Application Framework (com.esarks.arm.applicationFramework)**

Provides web application infrastructure:

| Component | Purpose |
|-----------|---------|
| `HttpServer.script` | Jetty-based web server |
| `Router.script` | URL routing and dispatch |
| `AppComponent.script` | Component lifecycle management |
| `RegionManager.script` | UI region management |
| `ProxyView.script` | View proxy pattern |

**3. Logging Framework (com.esarks.arm.logging)**

| Component | Purpose |
|-----------|---------|
| `ExceptionJeo.script` | Exception data model |
| `ExceptionRpt.script` | Exception reporting |
| `ProcessRpt.script` | Process monitoring reports |

**4. OWL Rules Engine (com.esarks.arm.owl)**

Integration with OWL (Web Ontology Language) for rule-based systems.

**5. Model Layer (com.esarks.arm.model.jeo)**

Java Entity Object (JEO) models for data persistence and business logic.

### ARM Usage Pattern

ARM components are typically referenced in user scripts using XML syntax:

```javascript
// In a .script file:
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Execute method documentation</document>
   </method>
&>

// User code here
%>
Hello World!
<%

<& com.esarks.arm.scripts.FinalReturnMethod &>
```

---

## MIC - The Application Framework

### Package Structure

```
com.esarks.mic
├── MicScriptHelper.java/script  # Extended script helper (68/63 KB)
├── View.java/script             # View layer (122/83 KB)
├── Model.java/script            # Model layer (18/13 KB)
├── Component.java/script        # UI components (23/20 KB)
├── Service.java/script          # Service layer (11 KB)
├── Frame.java                   # Frame management (16 KB)
├── Element.java/script          # XML elements (14 KB)
├── Entity.java/script           # Entity management (9 KB)
├── Package.java/script          # Package management (12/11 KB)
├── Report.java/script           # Report generation (9 KB)
├── SecurityManager.java/script  # Security (11 KB)
├── Control.java                 # Form controls (15 KB)
├── TextControl.java             # Text input (10 KB)
├── OptionControl.java           # Select/option controls (11 KB)
├── SubmitControl.java           # Submit buttons (9 KB)
├── MultiRowControl.java         # Multi-row controls (11 KB)
├── ButtonValue.java             # Button values (13 KB)
├── ColumnValue.java             # Column values (12 KB)
├── ControlValue.java            # Control values (9 KB)
├── DateValue.java               # Date values (10 KB)
├── OptionValue.java             # Option values (9 KB)
├── RowValue.java                # Row values (9 KB)
├── MicJeo.java/script           # MIC JEO base (9 KB)
└── MicScriptHelperFactory       # Factory (9 KB)
```

### Component Count

- **24 Java files** (with matching .script files for many)
- **Total compiled size:** 209 KB (mic.jar)

### Key MIC Capabilities

**1. MicScriptHelper - Extended Functionality**

The MicScriptHelper extends JAC's ScriptHelper with additional capabilities for web applications:

```java
package com.esarks.mic;

public class MicScriptHelper extends com.esarks.jac.ScriptHelper {
  // Extended functionality for MIC applications
  // - XML element management
  // - Property aliasing
  // - View rendering
  // - Service invocation
  // - Report generation
}
```

**Inheritance Hierarchy:**

```
java.lang.Object
  └── com.esarks.jac.ScriptHelper
        └── com.esarks.mic.MicScriptHelper
              └── [User Scripts]
```

**2. Model-View-Component Architecture**

MIC implements a variant of MVC:

| Layer | Classes | Purpose |
|-------|---------|---------|
| **Model** | Model.java, Entity.java, MicJeo.java | Data layer, business logic |
| **View** | View.java, Frame.java, Element.java | Presentation layer, HTML generation |
| **Component** | Component.java, Control.java, various controls | UI components, form elements |

**3. Control System**

Rich set of UI controls for form building:

```
Control (base)
├── TextControl      # Text input fields
├── OptionControl    # Select dropdowns
├── SubmitControl    # Submit buttons
└── MultiRowControl  # Data grids
```

**Value Objects:**

```
ControlValue (base)
├── ButtonValue
├── ColumnValue
├── DateValue
├── OptionValue
└── RowValue
```

**4. Service Layer**

```java
// Service.java - Service abstraction
public class Service {
  // Service lifecycle
  // Request/response handling
  // Transaction management
}
```

**5. Report Generation**

```java
// Report.java - Report framework
public class Report {
  // Report templates
  // Data binding
  // Output generation (HTML, PDF)
}
```

**6. Security Management**

```java
// SecurityManager.java - Security framework
public class SecurityManager {
  // Authentication
  // Authorization
  // Role-based access control (RBAC)
}
```

### MIC Usage Example

```java
// A MIC application script
package com.example.myapp;

import com.esarks.mic.*;

public class MyView extends com.esarks.mic.MicScriptHelper {

  public void execute() {
    // MIC provides enhanced capabilities:

    // 1. XML element navigation
    <!mic.element:customer!>!resetIterator();
    while (<!mic.element:customer!>!next()) {
      String name = <![mic.element:customer:name]!>;
      renderCustomer(name);
    }

    // 2. View rendering
    render("mytemplate.html");

    // 3. Service invocation
    Service lService = new Service();
    lService.execute();
  }
}
```

---

## Build Process

The JAC build system uses a two-phase compilation process to create the JAR files.

### Phase 1: Bootstrap Compilation

**File:** `phase1.bat`

**Purpose:** Compile JAC and MIC Java source files using standard `javac`

**Process:**

```batch
# Compile from phase1List.txt (51 files total)
javac -d phase1Classes @phase1List.txt

# Files compiled:
# - 26 JAC files (com.esarks.jac.*)
# - 24 MIC files (com.esarks.mic.*)
# - 1 WebServices file

# Create jac.jar (177 KB)
jar cf lib\jac\jac.jar -C phase1Classes .
```

**Input:** 51 Java source files
**Output:** `jac.jar` (177 KB)

**phase1List.txt contents:**

```
JAC Classes (26 files):
- AcClassLoader.java
- DbConnection.java
- jac.java
- Script.java
- ScriptWriter.java
- PropertyHelper.java
- ... (21 more)

MIC Classes (24 files):
- ButtonValue.java
- Component.java
- Control.java
- MicScriptHelper.java
- View.java
- ... (19 more)
```

### Phase 2: Self-Compilation

**File:** `phase2.bat`

**Purpose:** Use JAC to compile ARM template scripts and additional components

**Process:**

```batch
# Use jac.jar to compile ARM scripts
call Job jac com.esarks.arm.scripts.Method             ! jac
call Job jac com.esarks.arm.scripts.Service            ! jac
call Job jac com.esarks.arm.scripts.ExitMethod         ! jac
call Job jac com.esarks.arm.scripts.FinalReturnMethod  ! jac
call Job jac com.esarks.arm.scripts.ReturnMethod       ! jac
call Job jac com.esarks.arm.scripts.GetEffectiveDate   ! jac
call Job jac com.esarks.arm.scripts.IterateReplyJeo    ! jac

# Compile Jrun components
call Job jac com.esarks.jac.jrun.Job                   ! micScriptComponent
call Job jac com.esarks.jac.jrun.Jrun                  ! micScriptComponent

# Run MakeJac to compile all remaining scripts
call Job com.esarks.jac.jrun.Jrun execute "MakeJac_force.jrun2"

# Copy compiled classes
xcopy classes\*.class phase2Classes /s

# Create mic.jar (209 KB)
jar cf lib\mic\mic.jar -C phase2Classes .
```

**Input:** ARM scripts + MIC scripts + Jrun components
**Output:** `mic.jar` (209 KB)

**Components compiled in Phase 2:**

```
ARM Scripts:
- Method generation templates
- Service templates
- Application framework components
- Logging framework
- OWL rules engine
- Total: 62 script files

Jrun Components:
- Job.script (job execution)
- Jrun.script (runtime launcher)

MIC Scripts:
- Component.script
- Element.script
- Entity.script
- Model.script
- Package.script
- Report.script
- SecurityManager.script
- Service.script
- View.script
- MicScriptHelper.script
- MicJeo.script
- MicScriptHelperFactory.script
```

### Build Timeline

```
Total build time: 20-35 seconds (clean build)

Phase 1: 8-12 seconds
  ├─ Compile 51 Java files with javac
  └─ Create jac.jar (177 KB)

Phase 2: 12-23 seconds
  ├─ Compile ARM templates (7 scripts)
  ├─ Compile Jrun components (2 scripts)
  ├─ Run MakeJac (compiles remaining 60+ scripts)
  └─ Create mic.jar (209 KB)
```

---

## JAR Files

### jac.jar (177 KB)

**Contents:** JAC core engine (26 classes)

**Package:** `com.esarks.jac`

**Purpose:** Core compilation and runtime engine

**Key Classes:**
- jac.java - CLI entry point
- Script.java - Compiler orchestrator
- ScriptWriter.java - Template processor
- PropertyHelper.java - XML navigation
- ParseXml.java - XML parser

**Dependencies:** Minimal (only standard Java libraries)

**Created in:** Phase 1

**Usage:**

```bash
# Compile a script
java -cp jac.jar com.esarks.jac.jac -script com.example.MyScript

# Execute a method
java -cp jac.jar com.esarks.jac.jac -script com.example.MyScript -method execute
```

---

### mic.jar (209 KB)

**Contents:** MIC framework + ARM templates (compiled)

**Packages:**
- `com.esarks.arm.scripts.*` - ARM script templates
- `com.esarks.arm.applicationFramework.*` - Web framework
- `com.esarks.arm.logging.*` - Logging
- `com.esarks.arm.model.*` - Models
- `com.esarks.arm.owl.*` - Rules engine
- `com.esarks.mic.*` - MIC framework classes (already in phase2Classes)
- `com.esarks.jac.jrun.*` - Jrun runtime components

**Purpose:** Application framework and templates

**Dependencies:** jac.jar (required)

**Created in:** Phase 2

**Usage:**

```bash
# Execute with MIC framework
java -cp "jac.jar;mic.jar" com.esarks.jac.jac \
  -script com.example.MyMicApp \
  -method execute
```

---

## Component Interaction

### Dependency Hierarchy

```
User Application Scripts
         ↓ (extends)
    MIC Framework
         ↓ (uses)
    ARM Templates
         ↓ (uses)
    JAC Engine
         ↓ (compiles to)
     Java Bytecode
```

### Compilation Flow

```
1. User writes .script file
         ↓
2. JAC parses script (Script.java)
         ↓
3. JAC loads XML schemas (ParseXmlSchema.java)
         ↓
4. JAC resolves symbols (SymbolTable.java)
         ↓
5. ScriptWriter transforms to Java (ScriptWriter.java)
         ↓
6. ARM templates expand (if used)
         ↓
7. MIC helpers added (if extends MicScriptHelper)
         ↓
8. Java compiler generates bytecode
         ↓
9. Class loaded dynamically (AcClassLoader.java)
         ↓
10. Method executed (Script.execute())
```

### Runtime Flow

```
User double-clicks .jrun file
         ↓
jrundirect.bat
         ↓
setJrunEnvironment.bat (sets JAVA_HOME, JAC_BASE)
         ↓
Jrun.bat
         ↓
Job.bat
         ↓
SetJob.bat (sets CLASSPATH with jac.jar + mic.jar)
         ↓
java -cp "jac.jar;mic.jar" com.esarks.jac.jac
         ↓
jac.java main() → parses args
         ↓
Script.java → compiles if needed (JIT)
         ↓
Script.execute() → runs method
         ↓
Output to console
```

### Class Hierarchy Example

```java
// User's script
package com.example;

// Extends MIC framework
public class MyApp extends com.esarks.mic.MicScriptHelper {

  public void execute() {
    // Can use JAC features
    parseXml("config.xml");              // From JAC

    // Can use ARM templates
    // <& com.esarks.arm.scripts.Method &>

    // Can use MIC features
    <!mic.element:customer!>!next();     // From MIC
    render("template.html");             // From MIC
  }
}
```

**Inheritance Chain:**

```
java.lang.Object
  └── com.esarks.jac.ScriptHelper     (JAC - 31 KB)
        └── com.esarks.mic.MicScriptHelper  (MIC - 68 KB)
              └── com.example.MyApp    (User script)
```

---

## File Organization

### Source Directory Structure

```
jacBuild24/source/
├── java/                           # Phase 1: Pure Java
│   └── com/esarks/
│       ├── jac/                    # JAC engine (26 files)
│       │   ├── jac.java
│       │   ├── Script.java
│       │   ├── ScriptWriter.java
│       │   └── ...
│       ├── mic/                    # MIC framework (24 files)
│       │   ├── MicScriptHelper.java
│       │   ├── View.java
│       │   ├── Component.java
│       │   └── ...
│       └── arm/                    # ARM Java templates (19 files)
│           ├── scripts/
│           │   ├── Method.java
│           │   ├── Service.java
│           │   └── ...
│           ├── logging/
│           ├── model/
│           ├── owl/
│           └── plantuml/
└── scripts/                        # Phase 2: JAC scripts
    └── com/esarks/
        ├── arm/                    # ARM scripts (62 files)
        │   ├── applicationFramework/
        │   │   ├── HttpServer.script
        │   │   ├── Router.script
        │   │   └── ...
        │   ├── logging/
        │   │   ├── ExceptionJeo.script
        │   │   └── ...
        │   ├── model/
        │   └── ...
        ├── mic/                    # MIC scripts (12 files)
        │   ├── Component.script
        │   ├── Element.script
        │   ├── Entity.script
        │   ├── Model.script
        │   ├── MicJeo.script
        │   ├── MicScriptHelper.script
        │   ├── Package.script
        │   ├── Report.script
        │   ├── SecurityManager.script
        │   ├── Service.script
        │   └── View.script
        └── jac/
            └── jrun/               # Jrun runtime (2 scripts)
                ├── Job.script
                └── Jrun.script
```

### Build Output Structure

```
jacBuild24/
├── phase1Classes/                  # Phase 1 output
│   └── com/esarks/
│       ├── jac/                    # 26 .class files
│       └── mic/                    # 24 .class files
├── phase2Classes/                  # Phase 2 output
│   └── com/esarks/
│       ├── arm/                    # ~80 .class files
│       ├── mic/                    # 12 .class files (scripts)
│       └── jac/jrun/               # 2 .class files
└── lib/
    ├── jac/
    │   └── jac.jar                # 177 KB (Phase 1)
    └── mic/
        └── mic.jar                # 209 KB (Phase 2)
```

---

## Summary Table

| Component | Package | Files | Size | Phase | Purpose |
|-----------|---------|-------|------|-------|---------|
| **JAC** | com.esarks.jac | 26 Java | 177 KB (jar) | 1 | Core compiler & runtime engine |
| **ARM** | com.esarks.arm | 19 Java + 62 scripts | Part of mic.jar | 2 | Templates & application framework |
| **MIC** | com.esarks.mic | 24 Java + 12 scripts | 209 KB (jar) | 1 & 2 | MVC application framework |
| **Jrun** | com.esarks.jac.jrun | 2 scripts | Part of mic.jar | 2 | Runtime launcher components |
| **Total** | - | 143 files | 386 KB | Both | Complete RAD platform |

---

## Key Takeaways

### JAC (Java Architects Companion)

- PASS **Core engine** - Compiler, parser, runtime
- PASS **26 pure Java classes** - No dependencies on ARM or MIC
- PASS **Self-contained** - Can be used standalone
- PASS **Phase 1** - Compiled with standard javac
- PASS **jac.jar** - 177 KB

### ARM (Architects Resource Model)

- PASS **Template library** - Reusable code generation templates
- PASS **Application framework** - Web server, routing, logging
- PASS **Mixed Java/Script** - 19 Java files, 62 script files
- PASS **Phase 2** - Compiled by JAC itself (self-compilation)
- PASS **Part of mic.jar** - Included in 209 KB jar

### MIC (Model-Interface-Controller)

- PASS **Application framework** - RAD web development
- PASS **MVC architecture** - Model, View, Component layers
- PASS **Rich UI controls** - Forms, grids, reports
- PASS **Extends JAC** - MicScriptHelper extends ScriptHelper
- PASS **mic.jar** - 209 KB (includes ARM)

---

## Next Steps

### For Developers

1. **Learn JAC basics** - [CLAUDE.md](CLAUDE.html)
2. **Try demonstrations** - [Demo.md](Demo.html)
3. **Understand build** - [AllPhases.md](AllPhases.html)
4. **Master runtime** - [Jrun.md](Jrun.html)

### For Architects

1. **Review architecture** - [NEWGEN.md](NEWGEN.html)
2. **Study roadmap** - [Roadmap.md](Roadmap.html)
3. **Analyze business case** - [BusinessCase.md](BusinessCase.html)

### For Contributors

- Contribute to **JAC** for core engine improvements
- Contribute to **ARM** for new templates and frameworks
- Contribute to **MIC** for UI components and controls

---

**Documentation Version:** 1.0
**Last Updated:** 2025-01-20
**Author:** Documentation generated from jacBuild24 source analysis
**Organization:** Architects of Software Design, Corp.
